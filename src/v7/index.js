import registerGlobal from "./registerGlobal/index.js";

import guardFunc from "json-renderers-guard";
import jsonToDom from "@keshavsoft/json-to-dom";
import buildSpec from "./buildSpec.js";

const render = (config = {}) => {
    guardFunc(config);
    const showLog = config?.showLog;
    const localOptions = config?.options || {};

    if (showLog) {
        console.log("[v6 from-instructions] input config:", {
            type: config.type,
            options: localOptions,
            columns: config.columns,
            data: config.data,
            targetHtmlId: config.targetHtmlId,
            appendPosition: config.appendPosition
        });
    }

    // 1. Build Virtual JSON DOM spec from instructions
    const spec = buildSpec({
        type: config.type,
        data: config.data,
        columns: config.columns,
        options: localOptions,
        showLog
    });

    if (showLog) console.log("[v6 from-instructions] generated spec:", spec);

    // 2. Automatically mount to DOM via @keshavsoft/json-to-dom
    const dom = jsonToDom({
        jsonSpec: spec,
        targetHtmlId: config.targetHtmlId,
        appendPosition: config.appendPosition || "replace",
        showLog
    });

    if (showLog) console.log("[v6 from-instructions] mounted DOM element:", dom);

    return dom;
};

registerGlobal(render);

export { render, buildSpec };
export default render;

