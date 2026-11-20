import runInstructions from "json-renderers-run-instructions";
// import runOptions from "json-renderers-run-options";
// import { definitions as fallbackDefinitions, spec as fallbackSpec } from "spec-repo";

const buildSpec = ({
    type = "table.simple",
    data = [],
    columns = [],
    options = {},
    showLog = false
} = {}) => {
    const localTypeSplit = type.split(".");
    const category = localTypeSplit[0];
    const variant = localTypeSplit[1] || "simple";

    // 1. Build Core Virtual JSON DOM tree via pure instructions
    const fromInstructions = runInstructions({
        instructionMainKey: category,
        instructionSubKey: variant,
        data: { data, columns },
        options,
        showLog
    });

    return fromInstructions;
};

export default buildSpec;
