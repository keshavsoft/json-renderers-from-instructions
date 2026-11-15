import columns from "./common/columns.json" with { type: "json" };
import data from "./common/data.json" with { type: "json" };

const targetHtmlId = "dom-render-container";

const start = () => {
    try {
        // Pure 1-statement consumption via V5 engine
        window.ks.jsonRenderers.fromInstructions.render({
            type: "table.headerOnly",
            data,
            columns,
            options: { showSerial: true, showSearch: false, showOptions: false },
            targetHtmlId,
            classToApply: "",
            appendPosition: "replace",
            showLog: true
        });
    } catch (error) {
        console.error("V5 Table initialization failed:", error);
        const container = document.getElementById(targetHtmlId);
        if (container) {
            container.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
        }
    }
};

start();

