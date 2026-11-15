import runInstructions from "json-renderers-run-instructions";
import { definitions as fallbackDefinitions, spec as fallbackSpec } from "spec-repo";

const buildSpec = ({
    type = "table.simple",
    data = [],
    columns = [],
    options = {},
    showLog = false
} = {}) => {
    const localTypeSplit = type.split(".");
    const category = localTypeSplit[0];
    const variant = localTypeSplit[1];

    const config = variant ? fallbackDefinitions[category]?.[variant] : fallbackDefinitions[category];
    if (!config) {
        throw new Error(`Unknown component definition for type "${type}".`);
    };

    const base = structuredClone(config.base);

    runInstructions({
        single: config.single || [],
        double: config.double || [],
        rowOnColumn: config.rowOnColumn || [],
        columnOnRow: config.columnOnRow || [],
        base,
        data: { columns, data },
        showLog
    });

    return base;
};

export default buildSpec;

