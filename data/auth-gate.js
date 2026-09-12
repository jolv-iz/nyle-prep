// Site-wide login gate. Include after supabase-client.js on every page.
// Hides the page until a Supabase Auth session is confirmed; otherwise shows
// a login form. Public signup is disabled project-side (Dashboard ->
// Authentication -> Providers -> Email), so this only ever accepts the one
// account created directly in the Supabase dashboard.
(function(){
  if(!window.supabaseClient){
    // Not configured — fail open rather than lock the page permanently.
    return;
  }

  // Safe immediately: <html> exists as soon as the parser starts, before <body>.
  document.documentElement.style.visibility = 'hidden';

  function init(){
    const style = document.createElement('style');
    style.textContent = `
      #auth-gate-overlay{position:fixed;inset:0;background:#f6f4ee;z-index:99999;display:flex;align-items:center;justify-content:center;}
      #auth-gate-box{background:#fffdf8;border:1px solid #c9c4b4;padding:32px 28px;max-width:340px;width:88%;font-family:'IBM Plex Mono',monospace;}
      #auth-gate-box h2{font-family:'Source Serif 4',Georgia,serif;font-size:18px;margin:0 0 18px;color:#1c1e1b;font-weight:700;}
      #auth-gate-box input{width:100%;padding:10px 11px;margin-bottom:10px;border:1px solid #c9c4b4;font-family:inherit;font-size:13px;box-sizing:border-box;background:#fff;color:#1c1e1b;}
      #auth-gate-box button{width:100%;padding:11px;background:#1c1e1b;color:#f6f4ee;border:none;cursor:pointer;font-family:inherit;text-transform:uppercase;font-size:11.5px;letter-spacing:.05em;}
      #auth-gate-box button:hover{background:#6b5228;}
      #auth-gate-error{color:#8c2f2f;font-size:11px;margin-top:10px;min-height:14px;line-height:1.5;}
      #auth-gate-box .unreachable-msg{font-family:'Source Serif 4',Georgia,serif;font-size:14px;line-height:1.5;color:#1c1e1b;margin-bottom:16px;}
    `;
    document.head.appendChild(style);

    function ensureOverlay(){
      document.documentElement.style.visibility = 'visible';
      let overlay = document.getElementById('auth-gate-overlay');
      if(!overlay){
        overlay = document.createElement('div');
        overlay.id = 'auth-gate-overlay';
        document.body.appendChild(overlay);
      }
      return overlay;
    }

    function showGate(){
      const overlay = ensureOverlay();
      if(document.getElementById('auth-gate-box')) return; // login form already showing
      overlay.innerHTML = `
        <div id="auth-gate-box">
          <h2>NYLE Prep — Sign in</h2>
          <input type="email" id="auth-gate-email" placeholder="Email" autocomplete="username">
          <input type="password" id="auth-gate-password" placeholder="Password" autocomplete="current-password">
          <button id="auth-gate-submit" type="button">Sign in</button>
          <div id="auth-gate-error"></div>
        </div>`;

      async function attemptSignIn(){
        const email = document.getElementById('auth-gate-email').value.trim();
        const password = document.getElementById('auth-gate-password').value;
        const errorEl = document.getElementById('auth-gate-error');
        const submitBtn = document.getElementById('auth-gate-submit');
        errorEl.textContent = '';
        function friendlyMessage(msg){
          if(/fetch|network|NetworkError|timed out/i.test(msg)){
            return "Can't reach the login service (" + msg + "). The Supabase backend may be paused or down — check the Supabase dashboard, or try again shortly.";
          }
          return msg;
        }
        submitBtn.disabled = true;
        submitBtn.textContent = 'Signing in…';
        try{
          const { error } = await withTimeout(
            window.supabaseClient.auth.signInWithPassword({ email, password }),
            10000
          );
          if(error) errorEl.textContent = friendlyMessage(error.message);
        }catch(e){
          errorEl.textContent = friendlyMessage(e.message);
        }finally{
          submitBtn.disabled = false;
          submitBtn.textContent = 'Sign in';
        }
      }

      document.getElementById('auth-gate-submit').addEventListener('click', attemptSignIn);
      overlay.addEventListener('keydown', e => { if(e.key === 'Enter') attemptSignIn(); });
    }

    function showUnreachable(detail){
      const overlay = ensureOverlay();
      overlay.innerHTML = `
        <div id="auth-gate-box">
          <h2>NYLE Prep — Can't connect</h2>
          <div class="unreachable-msg">The login service isn't responding. This usually means the Supabase backend project needs attention (e.g. it was paused or removed) rather than a problem with your connection.</div>
          <button id="auth-gate-retry" type="button">Retry</button>
          <div id="auth-gate-error">${detail || ''}</div>
        </div>`;
      document.getElementById('auth-gate-retry').addEventListener('click', () => location.reload());
    }

    function hideGate(){
      document.documentElement.style.visibility = 'visible';
      const overlay = document.getElementById('auth-gate-overlay');
      if(overlay) overlay.remove();
    }

    function withTimeout(promise, ms){
      return Promise.race([
        promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error('timed out reaching the backend')), ms)),
      ]);
    }

    withTimeout(window.supabaseClient.auth.getSession(), 8000)
      .then(({ data }) => { if(data.session) hideGate(); else showGate(); })
      .catch(e => showUnreachable(e.message));

    window.supabaseClient.auth.onAuthStateChange((_event, session) => {
      if(session) hideGate(); else showGate();
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
