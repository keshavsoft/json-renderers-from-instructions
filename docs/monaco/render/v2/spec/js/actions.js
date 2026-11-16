import config from './config.json' with { type: 'json' };

let editorInstance = null;
const channel = new BroadcastChannel('json-renderers-bridge');

export const actions = {
  create: (monaco = window.monaco) => {
    const container = document.getElementById(config.containerId);
    if (!container) throw new Error(`Container #${config.containerId} not found.`);

    const model = monaco.editor.createModel(
      '{\n  "status": "Loading spec definitions..."\n}',
      config.language || 'json',
      monaco.Uri.parse(config.modelUri)
    );

    editorInstance = monaco.editor.create(container, {
      ...config,
      model
    });

    actions.initDropdowns();
    return editorInstance;
  },

  initDropdowns: () => {
    const definitions = window.ks?.specs?.jsonFiles?.definitions;
    const mainSelect = document.getElementById('mainTypeSelect');
    const subSelect = document.getElementById('subTypeSelect');
    if (!definitions || !mainSelect || !subSelect) return;

    mainSelect.innerHTML = '';
    Object.keys(definitions).forEach((key) => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = key;
      mainSelect.appendChild(opt);
    });

    if (definitions.table) {
      mainSelect.value = 'table';
    }

    actions.updateSubTypeDropdown();
    actions.loadDefinitionToEditor();
  },

  updateSubTypeDropdown: () => {
    const definitions = window.ks?.specs?.jsonFiles?.definitions;
    const mainSelect = document.getElementById('mainTypeSelect');
    const subSelect = document.getElementById('subTypeSelect');
    if (!definitions || !mainSelect || !subSelect) return;

    const mainType = mainSelect.value;
    const entry = definitions[mainType];
    subSelect.innerHTML = '';

    if (entry && typeof entry === 'object') {
      const subKeys = Object.keys(entry).filter((key) => {
        const val = entry[key];
        return typeof val === 'object' && val !== null && !val.tagName;
      });

      if (subKeys.length > 0) {
        subKeys.forEach((key) => {
          const opt = document.createElement('option');
          opt.value = key;
          opt.textContent = key;
          subSelect.appendChild(opt);
        });
        if (subKeys.includes('simple')) {
          subSelect.value = 'simple';
        }
      } else {
        const opt = document.createElement('option');
        opt.value = 'default';
        opt.textContent = 'default';
        subSelect.appendChild(opt);
      }
    }
  },

  loadDefinitionToEditor: () => {
    const definitions = window.ks?.specs?.jsonFiles?.definitions;
    const mainSelect = document.getElementById('mainTypeSelect');
    const subSelect = document.getElementById('subTypeSelect');
    if (!definitions || !mainSelect || !subSelect || !editorInstance) return;

    const mainType = mainSelect.value;
    const subType = subSelect.value;
    const def = definitions[mainType]?.[subType] || definitions[mainType] || {};

    editorInstance.setValue(JSON.stringify(def, null, 2));

    const footer = document.getElementById('footerInfoSpec');
    if (footer) {
      footer.textContent = `Spec: ${mainType}.${subType}`;
    }
  },

  onMainTypeChange: () => {
    actions.updateSubTypeDropdown();
    actions.loadDefinitionToEditor();
  },

  onSubTypeChange: () => {
    actions.loadDefinitionToEditor();
  },

  buildAndRender: async () => {
    const mainSelect = document.getElementById('mainTypeSelect');
    const subSelect = document.getElementById('subTypeSelect');
    if (!mainSelect || !subSelect) return;

    const renderType = `${mainSelect.value}.${subSelect.value}`;

    // Read live data/columns cached from Tab 1
    let data = null;
    let columns = null;

    try {
      const cached = localStorage.getItem('json_renderers_v7_data');
      if (cached) {
        const parsed = JSON.parse(cached);
        data = parsed.data;
        columns = parsed.columns;
      }
    } catch (e) {
      console.warn('[Spec Studio] Failed reading cached data:', e);
    }

    if (!data || !columns) {
      try {
        const [d, c] = await Promise.all([
          fetch('../data/editors/left/js/data.json').then((r) => r.json()).catch(() => null),
          fetch('../data/editors/right/js/columns.json').then((r) => r.json()).catch(() => null)
        ]);
        if (d && c) {
          data = d;
          columns = c;
        }
      } catch (err) {}
    }

    const payload = {
      type: 'BUILD_RENDER',
      renderType,
      data,
      columns,
      specContent: editorInstance ? editorInstance.getValue() : '',
      timestamp: Date.now()
    };

    localStorage.setItem('json_renderers_v7_payload', JSON.stringify(payload));
    channel.postMessage(payload);

    const btn = document.getElementById('buildButton');
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="bi bi-check2-circle me-1"></i> Built & Sent! ✓';
      setTimeout(() => { btn.innerHTML = originalText; }, 1500);
    }
  }
};

export default actions;
