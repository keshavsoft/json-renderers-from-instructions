import { initMonaco } from './editors/common/js/monacoLoader.js';
import { initLeftEditor } from './editors/left/js/index.js';
import { initRightEditor } from './editors/right/js/index.js';
import actionsLeft from './editors/left/js/actions.js';
import actionsRight from './editors/right/js/actions.js';

const channel = new BroadcastChannel('json-renderers-bridge');

function syncData() {
  try {
    const rawData = actionsLeft.getValue();
    const rawColumns = actionsRight.getValue();
    const data = JSON.parse(rawData);
    const columns = JSON.parse(rawColumns);

    const payload = { data, columns, timestamp: Date.now() };
    localStorage.setItem('json_renderers_v7_data', JSON.stringify(payload));
    channel.postMessage({ type: 'DATA_UPDATE', ...payload });

    const btn = document.getElementById('syncDataBtn');
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = 'Synced! ✓';
      setTimeout(() => { btn.textContent = originalText; }, 1500);
    }
  } catch (err) {
    console.warn('[Sync Data Error]', err);
  }
}

async function boot() {
  try {
    const monaco = await initMonaco();

    const leftEditor = initLeftEditor(monaco, 'paneLeft');
    const rightEditor = initRightEditor(monaco, 'paneRight');

    const syncBtn = document.getElementById('syncDataBtn');
    if (syncBtn) {
      syncBtn.addEventListener('click', syncData);
    }

    // Auto initial cache on load
    setTimeout(syncData, 500);

    console.info('[Data Studio] Both data and columns editors initialized with sync.');
  } catch (error) {
    console.error('[Data Studio Error]', error);
  }
}

boot();
