import renderFromModule from '../../../../../dist/v7/min.js';

const channel = new BroadcastChannel('json-renderers-bridge');

function getRender() {
  if (typeof renderFromModule === 'function') return renderFromModule;
  if (typeof window.ks?.jsonRenderers?.fromInstructions?.render === 'function') {
    return window.ks.jsonRenderers.fromInstructions.render;
  }
  return null;
}

export function executeRender(payload) {
  if (!payload) return;

  const renderType = payload.renderType || 'table.simple';
  let data = payload.data;
  let columns = payload.columns;

  const container = document.getElementById('dom-render-container');
  if (!container) return;

  // If data/columns missing in payload, try localStorage cache
  if (!data || !columns) {
    try {
      const cached = localStorage.getItem('json_renderers_v7_data');
      if (cached) {
        const parsed = JSON.parse(cached);
        data = data || parsed.data;
        columns = columns || parsed.columns;
      }
    } catch (e) {}
  }

  // If still missing, trigger async fallback fetch
  if (!data || !columns) {
    Promise.all([
      fetch('../data/editors/left/js/data.json').then((r) => r.json()),
      fetch('../data/editors/right/js/columns.json').then((r) => r.json())
    ]).then(([d, c]) => {
      executeRender({
        ...payload,
        data: d,
        columns: c
      });
    }).catch((err) => {
      container.innerHTML = `
        <div class="alert alert-warning text-center my-4">
          <h5><i class="bi bi-info-circle me-1"></i> Waiting for Data & Spec</h5>
          <p class="mb-0">Please click <strong>Sync Data</strong> in Tab 1, or <strong>▶ Build & Render</strong> in Tab 2.</p>
        </div>
      `;
    });
    return;
  }

  const render = getRender();
  if (!render) {
    console.warn('[Tab 3] Engine render function not yet available, retrying...');
    setTimeout(() => executeRender(payload), 100);
    return;
  }

  try {
    container.innerHTML = '';

    render({
      type: renderType,
      data,
      columns,
      options: payload.options || { showSerial: false, showSearch: false, showOptions: false },
      targetHtmlId: 'dom-render-container',
      classToApply: '',
      appendPosition: 'replace',
      showLog: true
    });

    const statusEl = document.getElementById('renderStatus');
    if (statusEl) {
      statusEl.textContent = `Rendered ${renderType} (${Array.isArray(data) ? data.length : 0} rows) at ${new Date().toLocaleTimeString()}`;
      statusEl.className = 'badge bg-success-subtle text-success border border-success-subtle px-3 py-2';
    }
  } catch (err) {
    console.error('[Tab 3 Render Error]', err);
    container.innerHTML = `
      <div class="alert alert-danger my-4">
        <h6><i class="bi bi-exclamation-triangle-fill me-1"></i> Render Error:</h6>
        <code>${err.message}</code>
      </div>
    `;
    const statusEl = document.getElementById('renderStatus');
    if (statusEl) {
      statusEl.textContent = `Render failed: ${err.message}`;
      statusEl.className = 'badge bg-danger-subtle text-danger border border-danger-subtle px-3 py-2';
    }
  }
}

function initReceiver() {
  const statusEl = document.getElementById('renderStatus');
  if (statusEl) {
    statusEl.textContent = 'Bridge connected';
    statusEl.className = 'badge bg-info-subtle text-info border border-info-subtle px-3 py-2';
  }

  // 1. BroadcastChannel Listener
  channel.onmessage = (event) => {
    const msg = event.data || {};
    if (msg.type === 'BUILD_RENDER') {
      executeRender(msg);
    } else if (msg.type === 'DATA_UPDATE') {
      // Refresh current render with updated data
      const lastPayload = localStorage.getItem('json_renderers_v7_payload');
      if (lastPayload) {
        try {
          const parsed = JSON.parse(lastPayload);
          parsed.data = msg.data;
          parsed.columns = msg.columns;
          executeRender(parsed);
          return;
        } catch (e) {}
      }
      executeRender({
        renderType: 'table.simple',
        data: msg.data,
        columns: msg.columns
      });
    }
  };

  // 2. Storage event fallback (cross-window/cross-tab)
  window.addEventListener('storage', (e) => {
    if (e.key === 'json_renderers_v7_payload' && e.newValue) {
      try {
        executeRender(JSON.parse(e.newValue));
      } catch (err) {}
    } else if (e.key === 'json_renderers_v7_data' && e.newValue) {
      try {
        const parsedData = JSON.parse(e.newValue);
        executeRender({
          renderType: 'table.simple',
          data: parsedData.data,
          columns: parsedData.columns
        });
      } catch (err) {}
    }
  });

  // 3. Initial Hydration from localStorage
  try {
    const cachedPayload = localStorage.getItem('json_renderers_v7_payload');
    if (cachedPayload) {
      executeRender(JSON.parse(cachedPayload));
      return;
    }

    const cachedData = localStorage.getItem('json_renderers_v7_data');
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      executeRender({
        renderType: 'table.simple',
        data: parsedData.data,
        columns: parsedData.columns
      });
      return;
    }
  } catch (err) {
    console.warn('[Display Hydration Error]', err);
  }

  // 4. Fallback: Fetch default samples if completely cold start
  Promise.all([
    fetch('../data/editors/left/js/data.json').then((r) => r.json()),
    fetch('../data/editors/right/js/columns.json').then((r) => r.json())
  ]).then(([data, columns]) => {
    executeRender({
      renderType: 'table.simple',
      data,
      columns
    });
  }).catch((err) => {
    console.warn('[Cold start fallback error]', err);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReceiver);
} else {
  initReceiver();
}
