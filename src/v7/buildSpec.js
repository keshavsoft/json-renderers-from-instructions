import runInstructions from "json-renderers-run-instructions";
import runOptions from "json-renderers-run-options";
import { definitions as fallbackDefinitions, spec as fallbackSpec } from "spec-repo";

const buildSpec = ({
    definitions = fallbackDefinitions,
    spec = fallbackSpec,
    type = "table.simple",
    data = [],
    columns = [],
    options = {},
    showLog = false
} = {}) => {
    const localTypeSplit = type.split(".");
    const category = localTypeSplit[0];
    const variant = localTypeSplit[1];

    const config = variant ? definitions[category]?.[variant] : definitions[category];
    if (!config) {
        throw new Error(`Unknown component definition for type "${type}".`);
    }

    // 1. Build Core Virtual JSON DOM tree via pure instructions
    const base = runInstructions({
        single: config.single || [],
        double: config.double || [],
        rowOnColumn: config.rowOnColumn || [],
        columnOnRow: config.columnOnRow || [],
        base: structuredClone(config.base),
        data: { columns, data },
        showLog
    });

    // 2. Apply Dynamic Options & Features via json-renderers-run-options
    const optionDefs = config.options || definitions[category]?.options || {};
    runOptions({
        base,
        options,
        optionDefs,
        showLog
    });

    return base;
};

export default buildSpec;

