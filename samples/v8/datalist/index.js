import columns from "./common/columns.json" with { type: "json" };
import data from "./common/data.json" with { type: "json" };
import render from "../../../docs/dist/v7/min.js";

const targetHtmlId = "dom-render-container";

const start = () => {
    try {
        // Pure 1-statement consumption via V7 engine directly mounting to DOM
        const mountedDom = render({
            type: "dataList",
            data,
            columns,
            targetHtmlId,
            appendPosition: "replace",
            showLog: true,
            classToApply: ""
        });

        console.log("V7 DataList mounted successfully:", mountedDom);

        // Display inspector cards for each generated datalist so user can see options visually
        const inspector = document.getElementById("datalist-inspector");
        if (inspector) {
            const datalists = mountedDom.querySelectorAll ? mountedDom.querySelectorAll("datalist") : document.querySelectorAll(`#${targetHtmlId} datalist`);
            let cardsHtml = "";
            datalists.forEach(dl => {
                const id = dl.id || dl.getAttribute("data-name") || "unnamed";
                const options = Array.from(dl.querySelectorAll("option")).map(o => o.value || o.textContent);
                cardsHtml += `
                    <div class="col-md-4">
                        <div class="card h-100 bg-light border">
                            <div class="card-header bg-white py-2 d-flex justify-content-between align-items-center">
                                <span class="fw-bold font-monospace text-primary">&lt;datalist id="${id}"&gt;</span>
                                <span class="badge bg-secondary">${options.length} options</span>
                            </div>
                            <ul class="list-group list-group-flush small" style="max-height: 180px; overflow-y: auto;">
                                ${options.map(opt => `<li class="list-group-item bg-light text-truncate">${opt}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                `;
            });
            inspector.innerHTML = cardsHtml;
        }
    } catch (error) {
        console.error("V7 DataList initialization failed:", error);
        const container = document.getElementById(targetHtmlId);
        if (container) {
            container.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
        }
    }
};

start();
