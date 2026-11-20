import runInstructions from "json-renderers-run-instructions";
import tableOptions from "json-renderers-build-table-options";

/**
 * Builds the Virtual JSON DOM specification by dynamically consuming
 * component definitions from spec-repo and running declarative instructions.
 */
const buildSpec = ({
    definitions,
    type = "table.simple",
    data = [],
    columns = [],
    options = {},
    showLog = false
} = {}) => {
    const rawType = type || "table.simple";
    const [category, variant] = rawType.includes(".") ? rawType.split(".") : [rawType, "simple"];

    if (!definitions || !definitions[category]) {
        throw new Error(`Unknown component type: "${category}". Available definitions: ${Object.keys(definitions || {}).join(", ")}`);
    }

    // 1. SELECT COMPONENT (N selects for all columns, or single select)
    if (category === "select") {
        const config = definitions.select;
        const targetColumns = (options.allColumns || (columns.length > 1 && !options.columnName && !options.column))
            ? columns
            : (options.columnName || options.column)
                ? columns.filter(c => (c.columnName || c.name || c) === (options.columnName || options.column))
                : [columns.find(c => c.type === "select") || columns[0]];

        return targetColumns.map(col => {
            const colName = col.columnName || col.name || col;
            const base = structuredClone(config.base);

            // Replace template placeholders in attributes
            if (base.attributes) {
                if (base.attributes.id) base.attributes.id = colName;
                if (base.attributes["data-name"]) base.attributes["data-name"] = colName;
            }

            // Extract row values for this specific column
            const columnData = data.map(row => ({ rowValue: row[colName] }));

            const registry = {
                data: { data: columnData, columns },
                base,
                ...options
            };

            runInstructions({
                single: config.single || [],
                double: config.double || [],
                registry,
                showLog
            });

            return base;
        });
    }

    // 2. TABLE COMPONENT
    if (category === "table") {
        const tableDefs = definitions.table || {};
        const config = tableDefs[variant] || tableDefs.simple;

        if (!config) {
            throw new Error(`Unknown table variant: "${variant}". Available variants: ${Object.keys(tableDefs).join(", ")}`);
        }

        const base = structuredClone(config.base);
        const registry = {
            data: { columns, data },
            base,
            ...options
        };

        runInstructions({
            single: config.single || [],
            double: config.double || [],
            registry,
            showLog
        });

        tableOptions({ options, base });

        return base;
    }

    // 3. GENERIC COMPONENT FALLBACK (dataList, searchInput, form, etc.)
    const categoryDef = definitions[category];
    const config = categoryDef[variant] || categoryDef.simple || categoryDef;
    const base = structuredClone(config.base);
    const registry = {
        data: { columns, data },
        base,
        ...options
    };

    runInstructions({
        single: config.single || [],
        double: config.double || [],
        registry,
        showLog
    });

    return base;
};

export default buildSpec;

