import columns from "./common/columns.json" with { type: "json" };
import data from "./common/data.json" with { type: "json" };

const targetHtmlId = "dom-render-container";

const start = () => {
    if (!window.ks?.jsonRenderers?.fromInstructions?.render) {
        setTimeout(start, 50);
        return;
    }
    try {
        window.ks.jsonRenderers.fromInstructions.render({
            type: "table.withFooter",
            data,
            columns,
            options: { showSerial: true, showSearch: false, showOptions: false },
            targetHtmlId,
            classToApply: "",
            appendPosition: "replace",
            showLog: true
        });
    } catch (error) {
        console.error("V5 Table withFooter initialization failed:", error);
        const container = document.getElementById(targetHtmlId);
        if (container) {
            container.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
        }
    }
};

start();
