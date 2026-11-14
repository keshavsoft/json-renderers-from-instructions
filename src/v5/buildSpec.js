import runInstructions from "json-renderers-run-instructions";
import tableOptions from "json-renderers-build-table-options";
import { definitions } from "spec-repo";

const buildSpec = ({
    definitions,
    spec,
    type = "table.simple",
    data = [],
    columns = [],
    options,
    showLog = false
} = {}) => {
    const localTypeSplit = type.split(".");

    const config = structuredClone(definitions[localTypeSplit[0]][localTypeSplit[1]]);
    if (config?.double) {
        config.double.forEach(d => {
            if (d.func === "twoDimensional" && !d.templateKey) {
                d.templateKey = {
                    rowKey: "buildBodyTr",
                    columnKey: "buildBodyCell"
                };
            }
        });
    }

    const base = structuredClone(config.base);

    const registry = {
        data: { columns, data },
        base,
        spec
    };

    if (showLog) console.log("[v5 from-instruction:", registry, config);

    runInstructions({
        single: config.single || [],
        double: config.double || [],
        registry,
        showLog
    });

    if (options) {
        tableOptions({ options, base });
    };

    return base;
};

export default buildSpec;
