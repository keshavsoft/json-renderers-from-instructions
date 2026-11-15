import columns from "./common/columns.json" with { type: "json" };
import data from "./common/data.json" with { type: "json" };
import render from "../../../docs/dist/v6/min.js";

const targetHtmlId = "dom-render-container";

const start = () => {
    try {
        // Pure 1-statement consumption via V6 engine directly mounting to DOM
        render({
            type: "select",
            data,
            columns,
            targetHtmlId,
            appendPosition: "replace",
            showLog: true,
            classToApply: ""
        });
    } catch (error) {
        console.error("V6 Select initialization failed:", error);
        const container = document.getElementById(targetHtmlId);
        if (container) {
            container.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
        }
    }
};

start();

