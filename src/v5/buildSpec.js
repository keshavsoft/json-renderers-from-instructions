import runInstructions from "json-renderers-run-instructions";
// import tableOptions from "json-renderers-build-table-options";
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

    const config = definitions[localTypeSplit[0]][localTypeSplit[1]];
    const base = structuredClone(config.base);

    const registry = {
        data: { columns, data },
        base,
        spec,
        ...options
    };

    runInstructions({
        single: config.single || [],
        double: config.double || [],
        registry,
        showLog
    });

    // if (category === "table") {
    //     tableOptions({ options, base });
    // }

    return base;
};

export default buildSpec;
