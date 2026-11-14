# json-renderers-from-instructions

> **"JSON instructions FORM renderers."**  
> Inverted to name the package: **`json-renderers-from-instructions`**.  
> Transforms columns and datasets into a pure Virtual JSON DOM specification via declarative JSON instructions, mounted into the browser DOM in a single atomic pass.

<div align="center">

[![npm version](https://img.shields.io/npm/v/json-renderers-from-instructions.svg?color=cb3837&logo=npm)](https://www.npmjs.com/package/json-renderers-from-instructions)
[![Live Demo Hub](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-success?logo=github&logoColor=white)](https://keshavsoft.github.io/json-renderers-from-instructions/)
[![Table Suite V1](https://img.shields.io/badge/Table%20Suite-docs%2Ftable-blueviolet?logo=bootstrap&logoColor=white)](https://keshavsoft.github.io/json-renderers-from-instructions/table/v1/index.html)
[![Monaco 2D Studio](https://img.shields.io/badge/Monaco%20Studio-Live%20Playground-informational?logo=visualstudiocode&logoColor=white)](https://keshavsoft.github.io/json-renderers-from-instructions/monaco/v1/index.html)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[**Live Demo Hub**](https://keshavsoft.github.io/json-renderers-from-instructions/) • [**NPM Package**](https://www.npmjs.com/package/json-renderers-from-instructions) • [**Table Renderers (docs/table)**](docs/table/v1/index.html) • [**Monaco 2D Studio**](docs/monaco/v1/index.html) • [**8-Chapter Story**](docs/stories/01-the-sentence.html)

</div>

---

## 📊 Table Renderers Suite (`docs/table`)

The interactive table showcase is located in [`docs/table/`](docs/table/v1/index.html). It features five declarative table components generated purely from JSON contracts:

| Table Variant | Instruction Type | Live Link | Description |
| :--- | :--- | :--- | :--- |
| **Simple Table** | `table.simple` | [Open Sample Demo](docs/table/v1/sample/index.html) | Complete turnkey table: header, colgroup widths, and 2D body data rows. |
| **With Footer** | `table.withFooter` | [Open With Footer Demo](docs/table/v1/withFooter/index.html) | Extended table featuring full headers, body records, and summary calculations in `tfoot`. |
| **Header Only** | `table.headerOnly` | [Open Header Only Demo](docs/table/v1/headerOnly/index.html) | Column structure shell with widths, designed for incremental body streaming. |
| **Body Only** | `table.bodyOnly` | [Open Body Only Demo](docs/table/v1/bodyOnly/index.html) | Pure data row matrix (`tbody`) injected into existing DOM table shells. |
| **Footer Only** | `table.footerOnly` | [Open Footer Only Demo](docs/table/v1/footerOnly/index.html) | Modular summary footer calculation row mounted to `tfoot`. |

👉 Explore the interactive [Table V1 Navigation Hub](docs/table/v1/index.html).

---


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
<script type="module" src="https://keshavsoft.github.io/json-renderers-from-instructions/dist/v5/min.js"></script>
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

When using the CDN or pre-compiled bundle (`dist/v5/min.js`), the library automatically registers on the global namespace:

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

### 3. Headless Specification Builder (`buildSpec`)

If you only want the JSON specification without touching the DOM (for unit testing, SSR, Web Workers, or inspection):

```javascript
import { buildSpec } from "json-renderers-from-instructions";

const spec = buildSpec({
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
| `type` | `string` | **Yes** | Table template identifier: `"table.simple"`, `"table.withFooter"`, `"table.headerOnly"`, `"table.bodyOnly"`, or `"table.footerOnly"`. |
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

## 🔄 Version History

- **V1 (`archive/v1/`)**: Initial instruction-driven proof-of-concept using `json-instruction-double`.
- **V2 (`src/v2/`)**: Migrated to `json-renderers-run-instructions` for streamlined 1D and 2D instruction processing (`meta.version: "1.2.0"`).
- **V3 (`src/v3/`)**: Centralized component blueprints imported from `spec-repo` (`meta.version: "1.3.0"`).
- **V4 (`src/v4/`)**: Enhanced option hooks and dynamic search/serial processing.
- **V5 (`src/v5/` - Current)**: Complete multi-component dynamic definition engine supporting `table.simple`, `table.withFooter`, `table.headerOnly`, `table.bodyOnly`, `table.footerOnly`, and `select.simple`.

---

## 📄 License

MIT © [KeshavSoft](https://github.com/keshavsoft)
