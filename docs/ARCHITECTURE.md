# Architecture & Internal Pipeline: json-renderers-from-instructions

> **Version: 1.8.1 (V8 Engine)**  
> **Status: Active / Modern Architecture**

This document details the internal design, transformation mechanics, and evolutionary roadmap of **`json-renderers-from-instructions`**.

---

## 1. High-Level Flow (The V8 Pipeline)

When `render(config)` is invoked, execution progresses through four decoupled stages:

```
User Config: { type, columns, data, options, targetHtmlId, appendPosition }
   │
   ├─► 1. Guard Validation (json-renderers-guard)
   │      Asserts input contracts (valid type, array inputs, targetHtmlId).
   │
   ├─► 2. Type Parsing & Delegation (buildSpec.js)
   │      Splits type into `category` and `variant` (e.g. "table.simple" -> "table", "simple").
   │      Delegates to `json-renderers-run-instructions`.
   │
   ├─► 3. Two-Phase Specification Lifecycle (json-renderers-run-instructions)
   │      │
   │      ├── Phase A: Base Canvas & Sequential Blueprint Steps (run-instructions-steps)
   │      │   - Clones empty canvas skeleton from spec-repo: spec[definition.baseFromSpec]
   │      │   - Sequentially executes definition.instructions: ["step1", "step2", ...]
   │      │   - Invokes 0D (primitive), 1D (one-dimension), or 2D (two-dimensions) transformers.
   │      │   - Writes results into canvas targets using json-write-path / jsonpathly.
   │      │
   │      └── Phase B: Feature Options Application (runOptions)
   │          - Evaluates option switches (e.g., search, serial, action buttons).
   │          - Dynamically decorates the canvas with feature elements.
   │
   └─► 4. Atomic Browser DOM Mount (@keshavsoft/json-to-dom)
          Converts the finalized Virtual JSON DOM tree into real browser DOM elements
          and mounts them into `targetHtmlId` with zero layout thrashing.
```

---

## 2. The Architectural Rationale: Why These Separate Layers?

A common question is: *Why maintain `from-instructions`, `run-instructions`, and `run-instructions-steps` as separate modules if they work closely together?*

The answer lies in **strategic staging and separation of concerns**:

### A. The Two-Phase Distinction: Base Builders vs. Feature Options
- **Base Builders (`run-instructions-steps`)**:  
  Responsible for the core structural essence of the component (headers, body rows, input fields). It takes raw data and transforms it through mathematical dimensions (0D, 1D, 2D) into the base canvas.
- **Feature Options (`runOptions`)**:  
  Responsible for conditional feature toggles (adding a search bar above a table, injecting a serial number `#` column, adding action buttons).

Currently, these operate as two distinct phases. 

### B. Creating the "Breathing Room" for Future Unification
The long-term vision is to **club options and base builders together**—transforming feature options from separate imperative checks into pure declarative instruction steps inside `spec-repo`.

However, executing such a profound architectural unification all at once would risk breaking existing apps and consumers. Keeping these layers distinct provides:
1. **Isolation**: We can evolve how instructions are executed inside `steps` without changing how `from-instructions` is called.
2. **Experimentation Space**: We can test clubbing options into instructions within the runner layer while keeping the public `from-instructions` interface completely stable.
3. **Clean Abstractions**: Each layer has a single, testable responsibility.

---

## 3. The 3 Geometric Transformation Primitives (Level 0)

All component generation in the KeshavSoft ecosystem is governed by three dimensional primitives:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 0-Dimension: json-transformer-funcs-primitive                          │
│ Function: applyTemplate(object, template)                              │
│ Use case: Single object / scalar interpolation into a template.        │
└────────────────────────────────────────────────────────────────────────┘
                                   │
┌────────────────────────────────────────────────────────────────────────┐
│ 1-Dimension: json-transformer-funcs-one-dimension                      │
│ Function: fromCollection(array, template)                              │
│ Use case: Iterates over a 1D collection (e.g. `columns`) to generate:  │
│           - Colgroups (<col>)                                          │
│           - Header cells (<th>)                                        │
│           - Form input controls (<input>)                              │
│           - List items (<li>)                                          │
└────────────────────────────────────────────────────────────────────────┘
                                   │
┌────────────────────────────────────────────────────────────────────────┐
│ 2-Dimensions: json-transformer-funcs-two-dimensions                    │
│ Functions: rowOnColumn(records, columns) / columnOnRow(...)            │
│ Use case: Cartesian product / matrix generation:                       │
│           - Table body rows: data rows × columns (<tbody><tr><td>)     │
│           - Select dropdowns: options array × select wrapper           │
│           - DataLists: suggestion items × datalist container           │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 4. The Blueprint Contract (`spec-repo`)

A component definition in `spec-repo` (e.g. `definitions.json`) provides a clean declaration containing:
1. **`baseFromSpec`**: The key pointing to the raw canvas template in `spec.json`.
2. **`instructions`**: An array of step keys executed in strict sequence.
3. **`options`**: Option definitions mapping feature keys to option templates.

### Example: `table.simple`

```json
{
  "baseFromSpec": "tableSimple",
  "instructions": [
    "buildColgroup",
    "buildHeader",
    "buildBody"
  ],
  "options": {
    "search": {
      "initialize": "searchFrame",
      "showLabel": "searchLabel",
      "showHelper": "searchHelper",
      "showInput": "searchInput"
    },
    "serial": {
      "initialize": "serialRoot",
      "showSerial": "serialChild"
    }
  }
}
```

### Example: `form.simple`

```json
{
  "baseFromSpec": "formSimple",
  "instructions": [
    "buildFormField"
  ],
  "options": {}
}
```

Notice the simplicity: **A form and a table use the exact same engine.**
- A table runs three steps: two 1D steps (`buildColgroup`, `buildHeader`) and one 2D step (`buildBody`).
- A form runs one 1D step: `buildFormField` iterating over the same `columns` contract.

---

## 5. Headless & Isomorphic Execution Guarantee

Because `buildSpec` is completely decoupled from `@keshavsoft/json-to-dom`:

1. **Zero Browser / DOM Coupling**:
   - `buildSpec` can run in Node.js server environments, test runners (`node --test`), or edge functions.
2. **Deterministic Output**:
   - Given the same `type`, `columns`, and `data`, `buildSpec` produces 100% identical, serializable JSON Virtual DOM structures.
3. **Testability**:
   - Pipeline transformations can be asserted in unit tests with standard deep-equality checks without needing JSDOM or Puppeteer.

---

## 6. System Ecosystem Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│ Level 3: json-renderers-from-instructions-collection                   │
│ Multi-Renderer Compositor: loops through [form, table, select], etc.   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ delegates single component
┌───────────────────────────────────▼────────────────────────────────────┐
│ Level 2: json-renderers-from-instructions (THIS PACKAGE - v8)          │
│ Public UI API: category.variant -> Canvas + Execution + DOM Mount      │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ runs instructions + options
┌───────────────────────────────────▼────────────────────────────────────┐
│ Level 1B: json-renderers-run-instructions (v15)                        │
│ Lifecycle Coordinator: orchestrates Base Builders + Option Decorators  │
└─────────────────┬──────────────────────────────────┬───────────────────┘
                  │                                  │
                  ▼                                  ▼
┌─────────────────────────────────┐┌─────────────────────────────────────┐
│ Level 1A: run-instructions-steps││ json-renderers-run-options          │
│ Sequential Blueprint Runner     ││ Feature Switches & Enhancements     │
│ (executes ["step1", "step2"])   ││ (search, serial, action buttons)    │
└─────────────────┬───────────────┘└─────────────────────────────────────┘
                  │
                  ▼
┌────────────────────────────────────────────────────────────────────────┐
│ Level 0: Pure Dimensional Transformers                                 │
│ 0D Primitive (applyTemplate)                                           │
│ 1D One-Dimension (fromCollection)                                      │
│ 2D Two-Dimensions (rowOnColumn, columnOnRow)                           │
└────────────────────────────────────────────────────────────────────────┘
```
