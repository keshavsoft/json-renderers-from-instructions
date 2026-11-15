import columns from "./common/columns.json" with { type: "json" };
import data from "./common/data.json" with { type: "json" };
import render from "../../../docs/dist/v7/min.js";

const targetHtmlId = "dom-render-container";

const start = () => {
    try {
        // Pure 1-statement consumption via V7 engine directly mounting to DOM
        const mountedDom = render({
            type: "form",
            data,
            columns,
            targetHtmlId,
            appendPosition: "replace",
            showLog: true,
            classToApply: ""
        });

        console.log("V7 Form mounted successfully:", mountedDom);

        // Attach submit listener to handle form interaction
        const formElement = mountedDom.querySelector ? mountedDom.querySelector("form") : document.querySelector(`#${targetHtmlId} form`);
        if (formElement) {
            formElement.addEventListener("submit", (e) => {
                e.preventDefault();
                const formData = new FormData(formElement);
                const values = {};
                formData.forEach((value, key) => {
                    values[key] = value;
                });

                console.log("Form submitted with values:", values);
                const alertEl = document.getElementById("form-submission-alert");
                const dataEl = document.getElementById("form-submission-data");
                if (alertEl && dataEl) {
                    dataEl.textContent = JSON.stringify(values, null, 2);
                    alertEl.classList.remove("d-none");
                    alertEl.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    } catch (error) {
        console.error("V7 Form initialization failed:", error);
        const container = document.getElementById(targetHtmlId);
        if (container) {
            container.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
        }
    }
};

start();
