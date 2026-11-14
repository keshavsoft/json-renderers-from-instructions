import columns from "./common/columns.json" with { type: "json" };

const targetHtmlId = "dom-render-container";

const start = () => {
    if (!window.ks?.jsonRenderers?.fromInstructions?.render) {
        setTimeout(start, 50);
        return;
    }
    try {
        const container = document.getElementById(targetHtmlId);
        if (container) {
            container.innerHTML = `<table class="table table-hover table-striped align-middle border mb-0">
                <thead class="table-dark">
                    <tr>
                        <th class="py-3 px-3">Item Name</th>
                        <th class="py-3 px-3">Category</th>
                        <th class="py-3 px-3">Base Unit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-muted fst-italic py-3 px-3" colspan="3">Body rows placeholder for modular footer-only demonstration...</td>
                    </tr>
                </tbody>
                <tfoot id="footer-target"></tfoot>
            </table>`;
        }

        window.ks.jsonRenderers.fromInstructions.render({
            type: "table.footerOnly",
            data: [],
            columns,
            options: { showSerial: true, showSearch: false, showOptions: false },
            targetHtmlId: "footer-target",
            classToApply: "",
            appendPosition: "replace",
            showLog: true
        });
    } catch (error) {
        console.error("V5 Table footerOnly initialization failed:", error);
        const container = document.getElementById(targetHtmlId);
        if (container) {
            container.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
        }
    }
};

start();
