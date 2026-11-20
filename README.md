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

[**Live Demo Hub**](https://keshavsoft.github.io/json-renderers-from-instructions/) • [**NPM Package**](https://www.npmjs.com/package/json-renderers-from-instructions) • [**Architecture Guide**](docs/ARCHITECTURE.md) • [**Table Renderers (docs/table)**](docs/table/v1/index.html) • [**Monaco 2D Studio**](docs/monaco/v1/index.html)

</div>

---

## 📖 The Story Behind the Architecture

Why does `json-renderers-from-instructions` exist, and why is the rendering pipeline structured across dedicated layers?

In traditional frontend development, every UI widget (a table, a form, a dropdown, an autocomplete list) requires custom markup, repeated layout loops, and bespoke state handlers. When table requirements change, you rewrite HTML. When options like search bars or serial numbers are toggled, you litter the component with `if/else` branches.

**`json-renderers-from-instructions` solves this by treating UI as pure mathematical transformations on JSON data:**

1. **The Canvas**: An empty skeleton blueprint declared in [`spec-repo`](https://github.com/keshavsoft/spec-repo) (e.g., table shell, form wrapper, card container).
2. **The Blueprint Instructions**: An ordered sequence of geometric operations executed on the canvas:
   - **0-Dimension (Primitive)**: Scalar template filling (`applyTemplate`).
   - **1-Dimension (One-Dimension)**: Transforming a 1D collection (e.g. columns) into headers, colgroups, form inputs, or list items (`fromCollection`).
   - **2-Dimensions (Two-Dimensions Matrix)**: Cross-multiplying two orthogonal axes (data records × columns) to stamp out 2D matrices like table bodies (`<tbody><tr><td>`), `<select><option>`, and `<datalist><option>`.
3. **The Options Layer**: Dynamic feature decorators (search bars, serial numbers, row actions) applied systematically over the base specification.
4. **The Mount**: An ultra-fast, atomic injection into the browser DOM via [`@keshavsoft/json-to-dom`](https://github.com/keshavsoft/json-to-dom).

---

## 🏛️ The Multi-Tier Ecosystem

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

### 💡 Why Keep These Repositories Distinct? (The Strategic Space)

At first glance, `from-instructions`, `run-instructions`, and `run-instructions-steps` might appear to orbit closely around each other. **This separation is intentional and strategic:**

- **Separation of Base Builders vs. Feature Options**:  
  Currently, constructing the core component structure (the base canvas + data instructions) and applying feature options (search inputs, serial badges, action buttons) are handled as two distinct phases.
- **The Staging Ground for Future Unification**:  
  Maintaining this modular separation gives the **architectural breathing room** needed to eventually merge options and base builders into a single, unified declarative step engine. Because `from-instructions` provides a clean public facade, internal unifications happen under the hood without breaking consumers.
- **Headless & Isomorphic**:  
  Specification building (`buildSpec`) has **zero DOM dependencies**. It runs identically in Node.js, CLI pipelines, Web Workers, or browsers.

---

## 📦 Supported Component Types

Because `v8` is completely generalized, it is not limited to tables. It dynamically resolves any component declared in `spec-repo`:

| Component Category | Available Variants | Description |
| :--- | :--- | :--- |
| **`table`** | `table.simple`, `table.withFooter`, `table.headerOnly`, `table.bodyOnly`, `table.footerOnly` | Data grid with colgroups, headers, body matrices, and footer summaries. |
| **`form`** | `form.simple` | Generates complete data entry forms and input controls from column schemas. |
| **`select`** | `select.simple`, `selectOptionsOnly.simple` | Standard dropdown selection elements populated with dynamic options. |
| **`dataList`** | `dataList.simple` | HTML5 `<datalist>` autocomplete suggestion engines. |
| **`card`** | `card.simple`, `card.withHeader`, `card.withFooter`, `card.imageTop` | Modular card layouts with header, body, and action footers. |
| **`list`** | `list.simple`, `list.group`, `list.ordered` | Unordered, numbered, and Bootstrap list groups. |
| **`accordion`** | `accordion.simple`, `accordion.flush` | Collapsible multi-section accordion views. |

---

## 🚀 Quick Start

### Installation

```bash
npm install json-renderers-from-instructions
# or
pnpm add json-renderers-from-instructions
```

### 1. Turnkey Browser Rendering (`render`)

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

// Mounts a complete interactive table into <div id="my-container"></div>
render({
  type: "table.simple",
  columns,
  data,
  options: {
    showSerial: true,
    showSearch: true,
    showOptions: false
  },
  targetHtmlId: "my-container",
  appendPosition: "replace"
});
```

### 2. Render a Form from the Same Schema!

```javascript
// Render a form using the EXACT same column contract:
render({
  type: "form.simple",
  columns,
  data,
  targetHtmlId: "form-container",
  appendPosition: "replace"
});
```

### 3. Headless Specification Builder (`buildSpec`)

If you want the pure Virtual JSON DOM specification without touching the browser DOM (for unit testing, SSR, or backend generation):

```javascript
import { buildSpec } from "json-renderers-from-instructions";

const spec = buildSpec({
  type: "table.simple",
  columns,
  data,
  options: { showSerial: true }
});

console.log(spec);
// Returns deterministic, pure JSON Virtual DOM tree ready for inspection or testing
```

### 4. Zero-Build Browser Global (`window.ks`)

```html
<script type="module" src="https://keshavsoft.github.io/json-renderers-from-instructions/dist/v8/min.js"></script>

<script>
  window.ks.jsonRenderers.fromInstructions.render({
    type: "table.simple",
    columns: [...],
    data: [...],
    targetHtmlId: "table-root"
  });
</script>
```

---

## ⚙️ Configuration Reference

### `render(config)` Parameters

| Parameter | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `type` | `string` | **Yes** | `"table.simple"` | Component identifier in `category.variant` format (e.g. `table.simple`, `form.simple`, `select.simple`). If no variant is given (e.g. `"table"`), defaults to `"simple"`. |
| `columns` | `Array<Object>` | **Yes** | `[]` | Schema definitions defining field attributes, labels, input types, and column widths. |
| `data` | `Array<Object>` | **Yes** | `[]` | Data records matching the column keys. |
| `targetHtmlId` | `string` | **Yes** | — | Target DOM container `id`. |
| `appendPosition` | `string` | Optional | `"replace"` | Mounting strategy: `"replace"`, `"append"`, or `"prepend"`. |
| `options` | `Object` | Optional | `{}` | Component feature toggles (`showSerial`, `showSearch`, `showOptions`, etc.). |
| `classToApply` | `string` | Optional | `""` | Custom CSS classes to attach to the root container. |
| `showLog` | `boolean` | Optional | `false` | Enables step-by-step diagnostic logging. |

---

## 🔄 Version Evolution

- **V1 (`archive/v1/`)**: Initial instruction-driven proof-of-concept.
- **V2–V4**: Progressive migration to decoupled runners and early `spec-repo` centralized blueprints.
- **V5–V6**: Extended option hooks and dynamic search/serial processing.
- **V7**: Generalized component definitions for multiple UI types.
- **V8 (Current)**: **The Pure Delegation Architecture**.
  - Erased all hardcoded bucket arrays (`single`, `double`, `rowOnColumn`, `columnOnRow`).
  - `buildSpec` streamlined to a lean delegator routing directly to `json-renderers-run-instructions` and `json-renderers-run-instructions-steps`.
  - Full support for the unified 0D/1D/2D dimensional transformation engine.

---

## 📄 License

MIT © [KeshavSoft](https://github.com/keshavsoft)
