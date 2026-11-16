import bindings from './bindings.json' with { type: 'json' };
import actions from './actions.js';

export async function initMonacoLoader() {
  if (window.monaco) return window.monaco;

  return new Promise((resolve, reject) => {
    if (typeof window.require === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs/loader.min.js';
      script.onload = () => configureAMD(resolve, reject);
      script.onerror = reject;
      document.head.appendChild(script);
    } else {
      configureAMD(resolve, reject);
    }
  });
}

function configureAMD(resolve, reject) {
  window.require.config({
    paths: {
      vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs'
    }
  });

  window.require(['vs/editor/editor.main'], () => {
    resolve(window.monaco);
  }, reject);
}

async function boot() {
  try {
    const monaco = await initMonacoLoader();
    actions.create(monaco);

    const bindEvents = window.ks?.domPrimitive?.bindings?.bindEvents || window.ks?.bindEvents;
    if (typeof bindEvents === 'function') {
      bindEvents('app', bindings, actions);
    }

    // If specs loaded after initial boot, re-hydrate dropdowns
    if (window.ks?.specs) {
      actions.initDropdowns();
    } else {
      window.addEventListener('load', () => {
        setTimeout(actions.initDropdowns, 500);
      });
    }

    console.info('[Spec Studio] Monaco editor and spec-repo dropdowns initialized.');
  } catch (err) {
    console.error('[Spec Studio Boot Error]', err);
  }
}

boot();
