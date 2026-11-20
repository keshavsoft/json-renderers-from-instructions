import columns from "./common/columns.json" with { type: "json" };
import data from "./common/data.json" with { type: "json" };
import render from "../../../docs/dist/v8/min.js";

const targetHtmlId = "dom-render-container";

const start = () => {
    try {
        // Pure 1-statement consumption via V7 engine directly mounting to DOM
        render({
            type: "table.headerOnly",
            data,
            columns,
            options: { showSerial: false, showSearch: false, showOptions: false },
            targetHtmlId,
            classToApply: "",
            appendPosition: "replace",
            showLog: false
        });
    } catch (error) {
        console.error("V7 Table initialization failed:", error);
        const container = document.getElementById(targetHtmlId);
        if (container) {
            container.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
        }
    }
};

start();