# json-renderers-from-instructions

> **"JSON instructions FORM renderers."**  
> Inverted to name the package: **`json-renderers-from-instructions`**.  
> Transforms columns and datasets into a pure Virtual JSON DOM specification via declarative JSON instructions, mounted into the browser DOM in a single atomic pass.

[![npm version](https://img.shields.io/npm/v/json-renderers-from-instructions.svg?color=cb3837&logo=npm)](https://www.npmjs.com/package/json-renderers-from-instructions)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Zero DOM Dependencies in Spec Builder](https://img.shields.io/badge/Spec%20Builder-Pure%20JSON-blue.svg)](#the-architecture-5-piece-pipeline)

---

## 📖 The Story: "JSON Instructions FORM Renderers"

Behind this project is a single, unmistakable architectural truth:

$$\mathbf{JSON\ instructions} \quad\xrightarrow{\quad\mathbf{FORM}\quad}\quad \mathbf{renderers}$$

* **Active Voice**: *"JSON instructions **FORM** renderers."* (What the engine does: takes JSON instructions to form UI specifications).
* **Passive Voice**: *"JSON renderers [built] **FROM** instructions."* (The package name: `json-renderers-from-instructions`).

### 📚 The 8-Chapter Interactive Story Documentation
Visit the **[Exhibition Hub](docs/index.html)** or dive directly into individual chapters:

1. **[Chapter 1: The Core Sentence](docs/stories/01-the-sentence.html)** — Active vs. Passive: why "JSON instructions FORM renderers" is the whole story.
2. **[Chapter 2: Why JSON?](docs/stories/02-why-json.html)** — Why JSON as the single source of truth over JSX or templates.
3. **[Chapter 3: The Instructions](docs/stories/03-the-instructions.html)** — Recipes as data: 1D Single instructions and 2D Double matrix instructions.
4. **[Chapter 4: The Verb FORM](docs/stories/04-the-verb-form.html)** — How the engine shapes formless data into a Virtual DOM specification tree.
5. **[Chapter 5: The Renderers](docs/stories/05-the-renderers.html)** — Bringing the specification to life via `@keshavsoft/json-to-dom`.
6. **[Chapter 6: The Table Benchmark](docs/stories/06-the-table-benchmark.html)** — Why the table came first: the 4-zone stress test proving the architecture.
7. **[Chapter 7: The Complete Pipeline](docs/stories/07-the-pipeline.html)** — How the 5 micro-libraries collaborate cleanly with single responsibility.
8. **[Chapter 8: The Monaco Studio](docs/stories/08-the-monaco-studio.html)** — Live in-browser instruction engineering with the Monaco Studio.

---

## 🛠️ The Paradigm Shift: Declarative Instruction-Driven Rendering

`json-renderers-from-instructions` solves this by inverting the entire flow:

> **You supply plain JSON contracts (columns, data, and options). Pure JSON instructions build a Virtual DOM specification tree. A high-performance DOM builder stamps it into the target container.**

```
   Raw Data + Columns + Options
                 │
                 ▼
┌─────────────────────────────────┐
│ json-renderers-from-instructions│ ◄── Orchestrates validation, spec generation, & mounting
└─────────────────────────────────┘
                 │
                 ▼ Pure Virtual DOM Specification Tree
┌─────────────────────────────────┐
│     JSON DOM Specification      │ ◄── { tagName, attributes, children }
└─────────────────────────────────┘
                 │
                 ▼ Stamped into target container
┌─────────────────────────────────┐
│     @keshavsoft/json-to-dom     │ ◄── Creates real HTML elements
└─────────────────────────────────┘
                 │
                 ▼
       Mounted <table> Element
```

---

## 🏛️ The Architecture: 5-Piece Pipeline

`json-renderers-from-instructions` serves as the high-level turnkey orchestrator uniting five specialized micro-libraries:

```
  1. Input Contracts             2. Component Blueprints          3. Instruction Engine
 ┌─────────────────┐             ┌─────────────────────┐         ┌─────────────────────────────────┐
 │  columns.json   │             │      spec-repo      │         │ json-renderers-run-instructions │
 │   data.json     │────────────►│  (definitions.json) │────────►│  (executes 1D & 2D declarative  │
 │   options {}    │             │    table.simple     │         │   transformations on registry)  │
 └─────────────────┘             └─────────────────────┘         └─────────────────────────────────┘
                                                                                  │
                                                                                  ▼
 ┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
 │                                json-renderers-from-instructions                                 │
 │            • Validates input schema via json-renderers-guard                                    │
 │            • Resolves component definitions from spec-repo                                      │
 │            • Applies options via json-renderers-build-table-options                             │
 │            • Mounts final spec into DOM via @keshavsoft/json-to-dom                             │
 │            • Registers window.ks.jsonRenderers.fromInstructions.render                          │
 └─────────────────────────────────────────────────────────────────────────────────────────────────┘
                                                  │
                                                  ▼
                                       Real DOM Table Mounted
```

| Component | Role |
| :--- | :--- |
| **`spec-repo`** | Provides declarative component blueprints (`base` skeleton + `single` column instructions + `double` matrix row instructions). |
| **`json-renderers-run-instructions`** | Executes the transformation instructions against a data registry without touching the live DOM. |
| **`json-renderers-build-table-options`** | Applies dynamic features (serial numbers `#`, search bars, custom option headers). |
| **`json-renderers-guard`** | Validates contracts and required parameters before execution. |
| **`@keshavsoft/json-to-dom`** | High-speed DOM generator that converts the JSON specification into live browser nodes. |

---

## 📦 Installation

### Via npm / pnpm / yarn

```bash
npm install json-renderers-from-instructions
```

```bash
pnpm add json-renderers-from-instructions
```

### Via Browser CDN (Zero Build Tools)

Include the pre-bundled standalone distribution:

```html
<script type="module" src="https://keshavsoft.github.io/json-renderers-from-instructions/dist/v3/min.js"></script>
```

---

## 🚀 Quick Start

### 1. Direct Turnkey Rendering

```javascript
import { render } from "json-renderers-from-instructions";

const columns = [
  { columnName: "itemName", label: "Item Name", width: "260px" },
  { columnName: "category", label: "Category", width: "180px" },
  { columnName: "baseUnit", label: "Base Unit", width: "120px" }
];

const data = [
  { itemName: "High Tensile Bolt", category: "Fasteners", baseUnit: "kgs" },
  { itemName: "Wire Coil", category: "Raw Materials", baseUnit: "kgs" },
  { itemName: "Stainless Steel Rod", category: "Raw Materials", baseUnit: "pcs" }
];

// Renders directly into <div id="my-table-container"></div>
render({
  type: "table.simple",
  columns,
  data,
  options: {
    showSerial: true,
    showSearch: false,
    showOptions: false
  },
  targetHtmlId: "my-table-container",
  appendPosition: "replace",
  classToApply: ""
});
```

### 2. Browser Global (`window.ks`)

When using the CDN or pre-compiled bundle (`dist/v3/min.js`), the library automatically registers on the global namespace:

```javascript
window.ks.jsonRenderers.fromInstructions.render({
  type: "table.simple",
  columns,
  data,
  targetHtmlId: "dom-render-container",
  appendPosition: "replace",
  classToApply: ""
});
```

### 3. Headless Specification Builder (`buildTableSpec`)

If you only want the JSON specification without touching the DOM (for unit testing, SSR, Web Workers, or inspection):

```javascript
import { buildTableSpec } from "json-renderers-from-instructions";

const spec = buildTableSpec({
  type: "table.simple",
  columns,
  data,
  options: { showSerial: true }
});

console.log(spec);
// Returns a pure JSON DOM tree:
// {
//   tagName: "div",
//   attributes: { "data-role": "table-parent" },
//   children: [
//     { tagName: "table", attributes: {...}, children: [...] }
//   ]
// }
```

---

## ⚙️ Configuration Reference

### `render(config)` Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `type` | `string` | **Yes** | Table template identifier: `"table.simple"`, `"table.withFooter"`, `"table.bodyOnly"`, or `"table.footerOnly"`. |
| `columns` | `Array<Object>` | **Yes** | Array of column definitions (see Column Contract). |
| `data` | `Array<Object>` | **Yes** | Array of row data records matching column keys. |
| `targetHtmlId` | `string` | **Yes** | The DOM element `id` where the generated table will be mounted. |
| `appendPosition` | `string` | **Yes** | How to insert into the target container: `"replace"`, `"append"`, or `"prepend"`. |
| `classToApply` | `string` | Optional | Additional CSS class string to apply to the root wrapper. |
| `options` | `Object` | Optional | Table behavior options (see Options Contract). |
| `showLog` | `boolean` | Optional | When `true`, prints internal transformation steps to console. |

### Column Contract

```json
{
  "columnName": "itemName",
  "label": "Item Name",
  "type": "text",
  "width": "260px",
  "placeholder": "Enter description...",
  "required": true
}
```

### Options Contract

```json
{
  "showSerial": true,
  "showSearch": true,
  "showOptions": false
}
```

- **`showSerial`**: Adds an automatic `#` serial number column to `<colgroup>`, `<thead>`, `<tbody>`, and `<tfoot>`.
- **`showSearch`**: Renders an inline search input above the table.
- **`showOptions`**: Renders an options / action column for row-level buttons.

---

## 🧪 Samples & Lifecycle Patterns

The repository includes runnable interactive samples in `samples/`:

### 1. `samples/v3/tableSimple/`
Demonstrates direct single-pass rendering using the V3 bundle:
- Uses `index.js` calling `window.ks.jsonRenderers.fromInstructions.render`.
- Mounts directly into `<div id="dom-render-container">`.

### 2. `samples/v2/tableWithSearch/`
Demonstrates interactive table lifecycle with dynamic partial DOM manipulation:
- **Search Capture**: Captures search input on `Enter` key via declarative instruction paths.
- **Clear Body (`clearBody`)**: Clears only `tbody` children without re-rendering or touching headers and search inputs.
- **Restore Body (`showBody` via Staging)**: Renders into a hidden `#v52-staging` container in the background, extracts the freshly stamped `<tbody>` child rows, and swaps them into the live table.

---

## 🔄 Version History

- **V1 (`archive/v1/`)**: Initial instruction-driven proof-of-concept using `json-instruction-double`.
- **V2 (`src/v2/`)**: Migrated to `json-renderers-run-instructions` for streamlined 1D and 2D instruction processing (`meta.version: "1.2.0"`).
- **V3 (`src/v3/` - Current)**:
  - Centralized component blueprints imported from `spec-repo`.
  - Registered globally at `window.ks.jsonRenderers.fromInstructions`.
  - Bundled standalone distribution in `docs/dist/v3/min.js`.

---

## 📄 License

MIT © [KeshavSoft](https://github.com/keshavsoft)
