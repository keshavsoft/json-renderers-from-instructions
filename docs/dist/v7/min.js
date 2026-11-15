import e from "json-renderers-run-options";
// src/v7/registerGlobal/meta.js
var t = {
	version: "1.7.1",
	description: "Generic instruction-driven browser DOM component renderer built on top of spec-repo definitions and @keshavsoft/json-to-dom"
}, n = (e) => {
	let n = e;
	typeof globalThis < "u" && n && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.fromInstructions = {
		meta: t,
		render: n
	});
}, r = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.type;
	if (n === void 0) throw Error("Missing compulsory key: \"type\"");
	if (typeof n != "string") throw TypeError("type must be a string");
	return !0;
}, i = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.data;
	if (n === void 0) throw Error("Missing compulsory key: \"data\"");
	if (!Array.isArray(n)) throw TypeError("data must be an Array");
	return !0;
}, a = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.columns;
	if (n === void 0) throw Error("Missing compulsory key: \"columns\"");
	if (!Array.isArray(n)) throw TypeError("columns must be an Array");
	return !0;
}, o = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.showLog;
	if (n !== void 0 && typeof n != "boolean") throw TypeError("showLog must be a boolean");
	return !0;
}, s = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("Config must be an object");
	return r(t), i(t), a(t), o(t), !0;
}, c = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.targetHtmlId;
	if (n === void 0) throw Error("Missing compulsory key: \"targetHtmlId\"");
	if (typeof n != "string") throw TypeError("targetHtmlId must be a string");
	if (n.trim().length === 0) throw Error("targetHtmlId must be a non-empty string");
	return !0;
}, l = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.appendPosition;
	if (n === void 0) throw Error("Missing compulsory key: \"appendPosition\"");
	if (typeof n != "string") throw TypeError("appendPosition must be a string");
	return !0;
}, u = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.classToApply;
	if (n === void 0) throw Error("Missing compulsory key: \"classToApply\"");
	if (typeof n != "string") throw TypeError("classToApply must be a string");
	return !0;
}, d = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("Config must be an object");
	return c(t), l(t), u(t), !0;
}, f = {
	type: "table",
	targetHtmlId: "",
	data: [],
	columns: [],
	classToApply: "",
	appendPosition: "replace",
	showLog: !1
}, p = (e) => {
	let t = typeof e == "object" && e ? e.inKey ?? e.key : e;
	return t && t in f ? f[t] : { ...f };
};
Object.assign(p, f);
// node_modules/json-renderers-guard/src/v5/index.js
var m = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("Config must be an object");
	return s(t), d(t), !0;
};
m.getSpec = p, m.configSpec = f, m.guardSpec = s, m.guardMount = d;
// node_modules/@keshavsoft/json-to-dom/src/v42/register/meta.js
var ee = {
	version: "42.1.4",
	name: "json-to-dom"
}, h = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.jsonToDom = {
		meta: ee,
		appendToDom: e
	});
}, g = {
	version: "v12",
	description: "JSON-to-DOM engine powered by decoupled external-action traversal engine"
}, te = (e) => {
	if (typeof globalThis > "u" || !e) return;
	globalThis.ks ??= {};
	let t = typeof e == "function" ? e : e.buildSpecElement, n = e.buildSpecElementWithValidate, r = {
		meta: g,
		buildSpecElement: t,
		...n ? { buildSpecElementWithValidate: n } : {}
	};
	globalThis.ks["json-to-tag"] = r, globalThis.ks.jsonToTag = r;
}, _ = ({ inItems: e, inFunc: t }) => {
	let n = e, r = t;
	return Array.isArray(n) ? n.map((e) => v({
		inSpec: e,
		inFunc: r
	})).flat(Infinity).filter(Boolean) : [];
}, ne = ({ inSpec: e, inFunc: t }) => {
	let n = e, r = t;
	if (!n || typeof n != "object" || Array.isArray(n)) return null;
	let i = typeof r == "function" ? r(n) : null;
	if (Array.isArray(n.children)) {
		let e = _({
			inItems: n.children,
			inFunc: r
		});
		if (i && typeof i.append == "function" && Array.isArray(e)) {
			let t = e.filter(Boolean);
			t.length && i.append(...t);
		}
	}
	return i;
}, v = ({ inSpec: e, inFunc: t }) => {
	let n = e, r = t;
	return n == null ? null : typeof Node < "u" && n instanceof Node ? n : Array.isArray(n) ? _({
		inItems: n,
		inFunc: r
	}) : typeof n == "object" ? ne({
		inSpec: n,
		inFunc: r
	}) : typeof n == "string" || typeof n == "number" ? typeof document < "u" ? document.createTextNode(String(n)) : String(n) : null;
}, re = ({ inNode: e, inErrors: t }) => {
	let n = e, r = t;
	return !n || typeof n != "object" || Array.isArray(n) ? (r.push({ reason: "Node must be a plain object" }), !1) : !0;
}, ie = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName;
	return !o || typeof o != "string" || o.trim() === "" ? (a.push({ reason: "Missing or empty 'tagName'" }), !1) : i && typeof i == "object" && !(i[o] || Object.keys(i).includes(o)) ? (a.push({
		tagName: o,
		reason: `Unrecognized tagName '${o}' not found in spec catalog`
	}), !1) : !0;
}, ae = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && s.allowsTextContent === !1 && r.textContent ? (a.push({
		tagName: o,
		reason: `Tag '${o}' does not allow direct textContent`
	}), !1) : !0;
}, y = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && s.allowsChildren === !1 && Array.isArray(r.children) && r.children.length > 0 ? (a.push({
		tagName: o,
		reason: `Tag '${o}' does not allow children (void element)`
	}), !1) : "children" in r && !Array.isArray(r.children) ? (a.push({
		tagName: o,
		reason: "'children' must be an array"
	}), !1) : !0;
}, b = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && Array.isArray(s.childTags) && s.childTags.length > 0 && Array.isArray(r.children) && r.children.forEach((e) => {
		e && e.tagName && !s.childTags.includes(e.tagName) && a.push({
			tagName: e.tagName,
			reason: `Tag '${e.tagName}' is not an allowed child of '${o}' (allowed: ${s.childTags.join(", ")})`
		});
	}), !0;
}, oe = ({ inNode: e, inErrors: t }) => {
	let n = e, r = t, i = n.tagName;
	return "attributes" in n && (!n.attributes || typeof n.attributes != "object" || Array.isArray(n.attributes)) ? (r.push({
		tagName: i,
		reason: "'attributes' must be a key-value object"
	}), !1) : !0;
}, x = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n;
	re({
		inNode: r,
		inErrors: a
	}) && (ie({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), ae({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), y({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), b({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), oe({
		inNode: r,
		inErrors: a
	}));
}, S = {
	buildBodyTr: {
		tagName: "tr",
		attributes: { class: "align-middle" },
		children: []
	},
	buildColGroup: {
		tagName: "col",
		attributes: { width: "${width}" }
	},
	buildHeader: {
		tagName: "th",
		textContent: "${columnName}",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	buildFooter: {
		tagName: "td",
		children: [{
			tagName: "input",
			attributes: {
				type: "text",
				placeholder: "enter ${columnName}",
				name: "${columnName}",
				id: "${columnName}",
				list: "${columnName}",
				class: "form-control"
			}
		}]
	},
	buildBodyCell: {
		tagName: "td",
		textContent: "${rowValue}",
		attributes: { class: "py-3 px-3 text-secondary" }
	},
	button: {
		tagName: "button",
		textContent: "${columnName}",
		attributes: { class: "btn btn-primary btn-sm" }
	},
	buttonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "${agg:count}",
			attributes: { class: "btn btn-primary btn-sm" }
		}]
	},
	optionsButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "show",
			attributes: { class: "btn btn-primary btn-sm ks-btn-show" }
		}]
	},
	buildOption: {
		tagName: "option",
		textContent: "${rowValue}",
		attributes: { value: "${rowValue}" }
	},
	buildSelect: {
		tagName: "select",
		attributes: {
			id: "${columnName}",
			name: "${columnName}",
			"data-name": "${columnName}",
			class: "form-select shadow-sm mb-3"
		},
		children: []
	},
	buildDataList: {
		tagName: "datalist",
		attributes: {
			id: "${columnName}",
			"data-name": "${columnName}"
		},
		children: []
	},
	buildFormField: {
		tagName: "div",
		attributes: { class: "mb-3" },
		children: [{
			tagName: "label",
			textContent: "${columnName}",
			attributes: {
				for: "${columnName}",
				class: "form-label fw-semibold text-capitalize"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "${columnName}",
				name: "${columnName}",
				placeholder: "Enter ${columnName}...",
				class: "form-control"
			}
		}]
	},
	emptyCell: {
		tagName: "td",
		children: []
	},
	headerSerialCell: {
		tagName: "th",
		textContent: "#",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForSerial: {
		tagName: "col",
		attributes: { width: "50px" }
	},
	colGroupForOption: {
		tagName: "col",
		attributes: { width: "100px" }
	},
	headerForOption: {
		tagName: "th",
		textContent: "options",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	tdWithButtonSaveWarning: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "save",
			attributes: { class: "btn btn-warning btn-sm ks-btn-save" }
		}]
	},
	tableSearch: {
		tagName: "div",
		attributes: { class: "row mb-3 justify-content-end" },
		children: [{
			tagName: "div",
			attributes: { class: "col-md-4" },
			children: [{
				tagName: "div",
				attributes: { class: "input-group" },
				children: [{
					tagName: "span",
					attributes: { class: "input-group-text bg-white" },
					children: [{
						tagName: "i",
						attributes: { class: "bi bi-search" },
						textContent: "🔍"
					}]
				}, {
					tagName: "input",
					attributes: {
						type: "text",
						id: "tableSearch",
						class: "form-control",
						placeholder: "Search table..."
					}
				}]
			}]
		}]
	}
}, C = {
	$schema: "./tags.schema.json",
	div: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["title", "role"],
		childTags: []
	},
	input: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"type",
			"placeholder",
			"value",
			"name",
			"disabled",
			"readonly",
			"required",
			"list"
		]
	},
	checkbox: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"type",
			"checked",
			"name",
			"value",
			"disabled",
			"required"
		]
	},
	colgroup: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["span"],
		childTags: ["col"]
	},
	col: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"span",
			"style",
			"width"
		]
	},
	label: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["for"],
		childTags: []
	},
	form: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"action",
			"method",
			"autocomplete",
			"enctype",
			"name",
			"novalidate",
			"target"
		],
		childTags: []
	},
	select: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"name",
			"disabled",
			"required",
			"multiple",
			"size"
		],
		childTags: ["option"]
	},
	p: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	h1: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	h2: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	span: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	img: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"src",
			"alt",
			"width",
			"height",
			"loading"
		]
	},
	button: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"type",
			"disabled",
			"name",
			"value"
		],
		childTags: []
	},
	table: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"border",
			"cellpadding",
			"cellspacing"
		],
		childTags: [
			"caption",
			"colgroup",
			"thead",
			"tbody",
			"tfoot",
			"tr"
		]
	},
	thead: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tbody: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tfoot: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tr: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["td", "th"]
	},
	th: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"scope",
			"colspan",
			"rowspan"
		],
		childTags: []
	},
	td: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["colspan", "rowspan"],
		childTags: []
	},
	datalist: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["option"]
	},
	option: {
		allowsTextContent: !0,
		allowsChildren: !1,
		allowedAttributes: [
			"value",
			"label",
			"selected",
			"disabled"
		]
	},
	header: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["role"],
		childTags: []
	},
	a: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"href",
			"target",
			"rel",
			"title",
			"download"
		],
		childTags: []
	},
	i: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["aria-hidden"],
		childTags: []
	},
	small: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	ul: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["type"],
		childTags: ["li"]
	},
	li: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["value"],
		childTags: []
	},
	hr: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: []
	}
}, w = {
	$schema: "https://json-schema.org/draft/2020-12/schema",
	title: "TagsCatalogSchema",
	description: "JSON Schema for @keshavsoft/spec-repo tags.json catalog",
	type: "object",
	patternProperties: { "^[a-z0-9]+$": {
		type: "object",
		required: [
			"allowsTextContent",
			"allowsChildren",
			"allowedAttributes"
		],
		properties: {
			allowsTextContent: {
				type: "boolean",
				description: "Indicates whether the element permits direct textContent"
			},
			allowsChildren: {
				type: "boolean",
				description: "Indicates whether the element can contain child DOM elements"
			},
			allowedAttributes: {
				type: "array",
				items: { type: "string" },
				description: "List of specifically allowed HTML attributes for this tag"
			},
			childTags: {
				type: "array",
				items: { type: "string" },
				description: "Permitted child tag names if restricted"
			}
		},
		additionalProperties: !1
	} }
}, T = {
	table: {
		simple: {
			base: {
				tagName: "div",
				attributes: { "data-role": "table-parent" },
				children: [{
					tagName: "table",
					attributes: { class: "table table-hover table-striped align-middle border mb-0" },
					children: [
						{
							tagName: "colgroup",
							attributes: { "data-role": "table-colgroup" },
							children: []
						},
						{
							tagName: "thead",
							attributes: {
								class: "table-dark",
								"data-role": "table-header"
							},
							children: [{
								tagName: "tr",
								attributes: { "data-role": "table-header-row" },
								children: []
							}]
						},
						{
							tagName: "tbody",
							attributes: { "data-role": "table-body" },
							children: []
						},
						{
							tagName: "tfoot",
							attributes: { "data-role": "table-footer" },
							children: [{
								tagName: "tr",
								attributes: { "data-role": "table-footer-row" },
								children: []
							}]
						}
					]
				}]
			},
			single: [{
				narration: "Build column widths",
				destinationPath: {
					fileName: "base",
					dataRole: "table-colgroup",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildColGroup",
				func: "fromCollection"
			}, {
				narration: "Build table header",
				destinationPath: {
					fileName: "base",
					dataRole: "table-header-row",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildHeader",
				func: "fromCollection"
			}],
			double: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: {
					rowKey: "buildBodyTr",
					columnKey: "buildBodyCell"
				},
				func: "twoDimensional"
			}],
			rowOnColumn: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				templateKey: {
					rowKey: "buildBodyTr",
					columnKey: "buildBodyCell"
				}
			}],
			options: {
				serial: [
					{
						narration: "Prepend the serial column width to the table colgroup.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-colgroup",
							filePath: ["children"],
							action: "unshift"
						},
						sourcePath: null,
						templateKey: "colGroupForSerial",
						func: null
					},
					{
						narration: "Prepend the serial header cell to the table header row.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-header-row",
							filePath: ["children"],
							action: "unshift"
						},
						sourcePath: null,
						templateKey: "headerSerialCell",
						func: null
					},
					{
						narration: "Prepend the serial number cell into each table body row.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-body",
							filePath: ["children"],
							action: "unshiftSerialToRows"
						},
						sourcePath: null,
						templateKey: "buildBodyCell",
						func: null
					},
					{
						narration: "Prepend the serial footer cell to the table footer row.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-footer-row",
							filePath: ["children"],
							action: "unshift"
						},
						sourcePath: null,
						templateKey: "headerSerialCell",
						func: null
					}
				],
				options: [
					{
						narration: "Append the options column width to the table colgroup.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-colgroup",
							filePath: ["children"],
							action: "push"
						},
						sourcePath: null,
						templateKey: "colGroupForOption",
						func: null
					},
					{
						narration: "Append the options header cell to the table header row.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-header-row",
							filePath: ["children"],
							action: "push"
						},
						sourcePath: null,
						templateKey: "headerForOption",
						func: null
					},
					{
						narration: "Append the options button cell into each table body row.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-body",
							filePath: ["children"],
							action: "pushToRows"
						},
						sourcePath: null,
						templateKey: "optionsButtonCell",
						func: null
					},
					{
						narration: "Append the options footer cell to the table footer row.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-footer-row",
							filePath: ["children"],
							action: "push"
						},
						sourcePath: null,
						templateKey: "tdWithButtonSaveWarning",
						func: null
					}
				],
				search: [{
					narration: "Prepend the search row to top of the table.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-parent",
						filePath: ["children"],
						action: "unshift"
					},
					sourcePath: null,
					templateKey: "tableSearch",
					func: null
				}]
			}
		},
		withFooter: {
			base: {
				tagName: "table",
				attributes: { class: "table table-hover table-striped align-middle border mb-0" },
				children: [
					{
						tagName: "colgroup",
						attributes: { "data-role": "table-colgroup" },
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header"
						},
						children: [{
							tagName: "tr",
							attributes: { "data-role": "table-header-row" },
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: { "data-role": "table-body" },
						children: []
					},
					{
						tagName: "tfoot",
						attributes: { "data-role": "table-footer" },
						children: [{
							tagName: "tr",
							attributes: { "data-role": "table-footer-row" },
							children: []
						}]
					}
				]
			},
			single: [
				{
					narration: "Build column widths",
					destinationPath: {
						fileName: "base",
						dataRole: "table-colgroup",
						filePath: ["children"]
					},
					sourcePath: {
						fileName: "data",
						filePath: ["columns"]
					},
					templateKey: "buildColGroup",
					func: "fromCollection"
				},
				{
					narration: "Build table header",
					destinationPath: {
						fileName: "base",
						dataRole: "table-header-row",
						filePath: ["children"]
					},
					sourcePath: {
						fileName: "data",
						filePath: ["columns"]
					},
					templateKey: "buildHeader",
					func: "fromCollection"
				},
				{
					narration: "Build footer input cells",
					destinationPath: {
						fileName: "base",
						dataRole: "table-footer-row",
						filePath: ["children"]
					},
					sourcePath: {
						fileName: "data",
						filePath: ["columns"]
					},
					templateKey: "buildFooter",
					func: "fromCollection"
				}
			],
			double: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				func: "twoDimensional"
			}]
		},
		bodyOnly: {
			base: {
				tagName: "tbody",
				attributes: { "data-role": "table-body" },
				children: []
			},
			single: [],
			double: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				func: "twoDimensional"
			}]
		},
		footerOnly: {
			base: {
				tagName: "tfoot",
				attributes: { "data-role": "table-footer" },
				children: [{
					tagName: "tr",
					attributes: { "data-role": "table-footer-row" },
					children: []
				}]
			},
			single: [{
				narration: "Build footer input cells",
				destinationPath: {
					fileName: "base",
					dataRole: "table-footer-row",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildFooter",
				func: "fromCollection"
			}],
			double: []
		},
		headerOnly: {
			base: {
				tagName: "table",
				attributes: { class: "table table-hover table-striped align-middle border mb-0" },
				children: [
					{
						tagName: "colgroup",
						attributes: { "data-role": "table-colgroup" },
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header"
						},
						children: [{
							tagName: "tr",
							attributes: { "data-role": "table-header-row" },
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: { "data-role": "table-body" },
						children: []
					}
				]
			},
			single: [{
				narration: "Build column widths",
				destinationPath: {
					fileName: "base",
					dataRole: "table-colgroup",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildColGroup",
				func: "fromCollection"
			}, {
				narration: "Build table header",
				destinationPath: {
					fileName: "base",
					dataRole: "table-header-row",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildHeader",
				func: "fromCollection"
			}],
			double: []
		},
		options: {
			serial: [
				{
					narration: "Prepend the serial column width to the table colgroup.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-colgroup",
						filePath: ["children"],
						action: "unshift"
					},
					sourcePath: null,
					templateKey: "colGroupForSerial",
					func: null
				},
				{
					narration: "Prepend the serial header cell to the table header row.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-header-row",
						filePath: ["children"],
						action: "unshift"
					},
					sourcePath: null,
					templateKey: "headerSerialCell",
					func: null
				},
				{
					narration: "Prepend the serial number cell into each table body row.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-body",
						filePath: ["children"],
						action: "unshiftSerialToRows"
					},
					sourcePath: null,
					templateKey: "buildBodyCell",
					func: null
				},
				{
					narration: "Prepend the serial footer cell to the table footer row.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-footer-row",
						filePath: ["children"],
						action: "unshift"
					},
					sourcePath: null,
					templateKey: "headerSerialCell",
					func: null
				}
			],
			options: [
				{
					narration: "Append the options column width to the table colgroup.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-colgroup",
						filePath: ["children"],
						action: "push"
					},
					sourcePath: null,
					templateKey: "colGroupForOption",
					func: null
				},
				{
					narration: "Append the options header cell to the table header row.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-header-row",
						filePath: ["children"],
						action: "push"
					},
					sourcePath: null,
					templateKey: "headerForOption",
					func: null
				},
				{
					narration: "Append the options button cell into each table body row.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-body",
						filePath: ["children"],
						action: "pushToRows"
					},
					sourcePath: null,
					templateKey: "optionsButtonCell",
					func: null
				},
				{
					narration: "Append the options footer cell to the table footer row.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-footer-row",
						filePath: ["children"],
						action: "push"
					},
					sourcePath: null,
					templateKey: "tdWithButtonSaveWarning",
					func: null
				}
			],
			search: [{
				narration: "Prepend the search row to top of the table.",
				destinationPath: {
					fileName: "base",
					dataRole: "table-parent",
					filePath: ["children"],
					action: "unshift"
				},
				sourcePath: null,
				templateKey: "tableSearch",
				func: null
			}]
		}
	},
	select: {
		base: {
			tagName: "div",
			attributes: { "data-role": "select-container" },
			children: []
		},
		single: [{
			narration: "Build select options",
			destinationPath: {
				fileName: "base",
				filePath: ["children"]
			},
			sourcePath: {
				fileName: "data",
				filePath: ["data"]
			},
			templateKey: "buildOption",
			func: "fromCollection"
		}],
		double: [],
		columnOnRow: [{
			narration: "Build selects with options",
			destinationPath: {
				fileName: "base",
				filePath: ["children"]
			},
			templateKey: {
				columnKey: "buildSelect",
				rowKey: "buildOption"
			}
		}]
	},
	dataList: {
		simple: {
			base: {
				tagName: "div",
				attributes: { "data-role": "datalist-container" },
				children: []
			},
			single: [],
			double: [],
			columnOnRow: [{
				narration: "Build datalists with options",
				destinationPath: {
					fileName: "base",
					filePath: ["children"]
				},
				templateKey: {
					columnKey: "buildDataList",
					rowKey: "buildOption"
				}
			}]
		},
		base: {
			tagName: "div",
			attributes: { "data-role": "datalist-container" },
			children: []
		},
		single: [],
		double: [],
		columnOnRow: [{
			narration: "Build datalists with options",
			destinationPath: {
				fileName: "base",
				filePath: ["children"]
			},
			templateKey: {
				columnKey: "buildDataList",
				rowKey: "buildOption"
			}
		}]
	},
	selectOptionsOnly: {
		base: [],
		single: [{
			narration: "Build options array",
			destinationPath: {
				fileName: "base",
				filePath: []
			},
			sourcePath: {
				fileName: "data",
				filePath: ["data"]
			},
			templateKey: "buildOption",
			func: "fromCollection"
		}],
		double: []
	},
	searchInput: {
		base: {
			tagName: "div",
			attributes: { class: "d-flex align-items-center gap-2" },
			children: [{
				tagName: "label",
				textContent: "${label}",
				attributes: {
					class: "form-label mb-0 text-nowrap fw-semibold",
					for: "${id}"
				}
			}, {
				tagName: "input",
				attributes: {
					type: "search",
					placeholder: "${placeholder}",
					class: "form-control",
					id: "${id}"
				}
			}]
		},
		single: [],
		double: []
	},
	form: {
		simple: {
			base: {
				tagName: "div",
				attributes: { class: "card shadow-sm border-0" },
				children: [
					{
						tagName: "div",
						attributes: { class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center" },
						children: [{
							tagName: "h2",
							textContent: "Data Entry Form",
							attributes: { class: "h5 fw-bold mb-0 text-dark" }
						}]
					},
					{
						tagName: "div",
						attributes: { class: "card-body p-4" },
						children: [{
							tagName: "form",
							attributes: {
								id: "form-body-id",
								"data-role": "form-body"
							},
							children: []
						}]
					},
					{
						tagName: "div",
						attributes: { class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2" },
						children: [{
							tagName: "button",
							textContent: "Reset",
							attributes: {
								type: "reset",
								class: "btn btn-outline-secondary"
							}
						}, {
							tagName: "button",
							textContent: "Submit",
							attributes: {
								type: "submit",
								class: "btn btn-primary"
							}
						}]
					}
				]
			},
			single: [{
				narration: "Build form fields from columns",
				destinationPath: {
					fileName: "base",
					dataRole: "form-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildFormField",
				func: "fromCollection"
			}],
			double: []
		},
		base: {
			tagName: "div",
			attributes: { class: "card shadow-sm border-0" },
			children: [
				{
					tagName: "div",
					attributes: { class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center" },
					children: [{
						tagName: "h2",
						textContent: "Data Entry Form",
						attributes: { class: "h5 fw-bold mb-0 text-dark" }
					}]
				},
				{
					tagName: "div",
					attributes: { class: "card-body p-4" },
					children: [{
						tagName: "form",
						attributes: {
							id: "form-body-id",
							"data-role": "form-body"
						},
						children: []
					}]
				},
				{
					tagName: "div",
					attributes: { class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2" },
					children: [{
						tagName: "button",
						textContent: "Reset",
						attributes: {
							type: "reset",
							class: "btn btn-outline-secondary"
						}
					}, {
						tagName: "button",
						textContent: "Submit",
						attributes: {
							type: "submit",
							class: "btn btn-primary"
						}
					}]
				}
			]
		},
		single: [{
			narration: "Build form fields from columns",
			destinationPath: {
				fileName: "base",
				dataRole: "form-body",
				filePath: ["children"]
			},
			sourcePath: {
				fileName: "data",
				filePath: ["columns"]
			},
			templateKey: "buildFormField",
			func: "fromCollection"
		}],
		double: []
	}
}, se = {
	name: "spec-repo",
	version: "1.6.1"
};
// node_modules/spec-repo/src/v7/index.js
(({ spec: e, tags: t, tagsSchema: n, definitions: r }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: se,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r
	});
})({
	spec: S,
	tags: C,
	tagsSchema: w,
	definitions: T
});
// node_modules/json-to-tag-validate/src/v4/index.js
function ce({ inJson: e, inCatalog: t, inSpec: n }) {
	let r = e, i = t ?? n ?? C, a = [];
	return v({
		inSpec: r,
		inFunc: (e) => {
			x({
				inNode: e,
				inCatalog: i,
				inErrors: a
			});
		}
	}), {
		isValid: a.length === 0,
		errors: a
	};
}
// node_modules/@keshavsoft/json-to-tag/src/v12/element/createElement.js
var le = "http://www.w3.org/2000/svg", ue = /* @__PURE__ */ new Set(/* @__PURE__ */ "svg.path.symbol.use.g.circle.ellipse.rect.line.polyline.polygon.text.tspan.defs.clippath.mask.pattern.marker.lineargradient.radialgradient.stop.image.filter.fegaussianblur.femerge.femergenode".split(".")), de = ({ inTagName: e }) => {
	let t = e?.toLowerCase();
	if (!t) return null;
	if (t === "checkbox") {
		let e = document.createElement("input");
		return e.type = "checkbox", e;
	}
	return ue.has(t) ? document.createElementNS(le, t) : document.createElement(t);
}, fe = ({ inElement: e, inTextContent: t }) => (!e || t == null || (e.textContent = t), e), E = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), D = "http://www.w3.org/1999/xlink", O = ({ inElement: e, inAttributes: t }) => {
	let n = e, r = t;
	if (!n || !r || typeof r != "object") return n;
	let i = typeof SVGElement < "u" ? n instanceof SVGElement : n.namespaceURI === "http://www.w3.org/2000/svg";
	return Object.entries(r).forEach(([e, t]) => {
		if (e === "class") i ? n.setAttribute("class", String(t)) : n.className = t;
		else if (e === "xlink:href" || e === "href") {
			if (t != null) {
				let e = String(t);
				if (i) try {
					n.setAttributeNS(D, "href", e);
				} catch {}
				n.setAttribute("href", e), n.setAttribute("xlink:href", e);
			}
		} else typeof t == "boolean" ? t ? n.setAttribute(e, "") : n.removeAttribute(e) : t != null && n.setAttribute(e, String(t));
	}), n;
}, k = ({ inElement: e, inClassList: t }) => {
	if (!e || !t) return e;
	let n = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((e) => typeof e == "string" && e.trim()) : [];
	return n.length && e.classList.add(...n), e;
}, A = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
	let t = de({ inTagName: e.tagName });
	return t ? (fe({
		inElement: t,
		inTextContent: e.textContent,
		inTagName: e.tagName
	}), E({
		inElement: t,
		inProperties: e.properties
	}), O({
		inElement: t,
		inAttributes: e.attributes
	}), k({
		inElement: t,
		inClassList: e.classList
	}), t) : null;
}, j = (e = {}) => v({
	inSpec: e?.spec ?? e?.inSpec ?? e,
	inFunc: A
});
te({
	buildSpecElement: j,
	buildSpecElementWithValidate: (e = {}) => {
		let t = e?.spec ?? e?.inSpec ?? e, n = ce({ inJson: t });
		return n.isValid || console.warn("[json-to-tag] Specification validation issues:", n.errors), v({
			inSpec: t,
			inFunc: A
		});
	}
});
// node_modules/spec-to-dom/src/v2/register/meta.js
var M = {
	version: "2.1.1",
	name: "spec-to-dom"
}, N = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.specToDom = {
		meta: M,
		appendToDom: e
	});
}, P = ({ buildSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => {
	let i = e, a = t, o = n, s = r;
	s && console.log("renderToDom 1 (content):", i);
	let c = document.getElementById(a);
	return c ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? o === "prepend" ? c.prepend(...i) : c.append(...i) : o === "prepend" ? c.prepend(i) : (c.innerHTML = "", c.append(i)), s && console.log("renderToDom 2 (mounted):", c), c) : null;
};
N(P);
// node_modules/@keshavsoft/json-to-dom/src/v42/index.js
var F = ({ jsonSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => P({
	buildSpec: j(e),
	targetHtmlId: t,
	appendPosition: n,
	showLog: r
});
h(F);
// ../json-renderers-run-instructions/node_modules/json-write-path/src/v4/utils/toArray.js
var I = (e) => Array.isArray(e) ? e : [e], L = (e, t, n) => {
	e[t] = n;
}, R = {
	set: L,
	push: (e, t, n) => {
		e[t].push(...I(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...I(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(I(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(I(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, z = (e) => typeof e == "object" && !!e && !Array.isArray(e), B = (e, t) => {
	if (!z(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = U(t, i);
	return n;
}, V = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => U(t, e));
}, H = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, pe = (e, t) => H(e, t), me = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, he = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, ge = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: he,
		applyTemplate: e
	});
}, U = (e, t, n) => {
	let r = e, i = t;
	me(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? H(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = pe(a?.textContent, r)), "attributes" in a && (a.attributes = B(a?.attributes, r)), "children" in a && (a.children = V(a?.children, r))), a);
};
ge(U);
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var W = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, _e = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, G = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: _e,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, K = (e, t) => {
	let n = e, r = t;
	return W(n, r), n.map((e) => U(e, r));
};
G((e, t) => {
	let n = e;
	return W(n, t), n.map((e) => U(e, e[t]));
}, K);
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs-two-dimensions/src/v8/addRowData.js
var ve = (e, t) => e.map((e) => ({
	...e,
	rowData: t[e.columnName]
})), ye = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inColumns must be an Array");
	if (e.length === 0) throw Error("inColumns cannot be empty");
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (!n || typeof n != "object") throw TypeError(`inColumns[${t}] must be an object`);
		if (typeof n.columnName != "string" || !n.columnName.trim()) throw TypeError(`inColumns[${t}].columnName must be a non-empty string`);
	}
	if (!Array.isArray(t)) throw TypeError("inData must be an Array");
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (!n || typeof n != "object") throw TypeError(`inData[${e}] must be an object`);
	}
	return !0;
}, be = ({ columns: e, data: t, columnSpec: n, rowSpec: r }) => {
	ye(e, t);
	let i = e;
	return t.map((e) => {
		let t = U(e, r);
		return t.children = K(ve(i, e), n), t;
	});
}, q = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = q(n, t);
		if (e) return e;
	}
	return null;
}, xe = (e, t, n) => {
	let r = t.fileName, i = q(e[r], t.dataRole), a = t.dataRole ? i : e[t.fileName], o = [...t.filePath ?? []], s = o.pop();
	return {
		parent: o.reduce((e, t) => e[t], a),
		key: s
	};
}, J = (e, t, n, r) => {
	r && console.log("v4 index :", e, t, n);
	let { parent: i, key: a } = xe(e, t, r);
	(R[t.action] || L)(i, a, n);
}, Y = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = Y(n, t);
		if (e) return e;
	}
	return null;
}, Se = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? Y(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, X = {
	buildBodyTr: {
		tagName: "tr",
		attributes: { class: "align-middle" },
		children: []
	},
	buildColGroup: {
		tagName: "col",
		attributes: { width: "${width}" }
	},
	buildHeader: {
		tagName: "th",
		textContent: "${columnName}",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	buildFooter: {
		tagName: "td",
		children: [{
			tagName: "input",
			attributes: {
				type: "text",
				placeholder: "enter ${columnName}",
				name: "${columnName}",
				id: "${columnName}",
				list: "${columnName}",
				class: "form-control"
			}
		}]
	},
	buildBodyCell: {
		tagName: "td",
		textContent: "${rowValue}",
		attributes: { class: "py-3 px-3 text-secondary" }
	},
	button: {
		tagName: "button",
		textContent: "${columnName}",
		attributes: { class: "btn btn-primary btn-sm" }
	},
	buttonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "${agg:count}",
			attributes: { class: "btn btn-primary btn-sm" }
		}]
	},
	optionsButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "show",
			attributes: { class: "btn btn-primary btn-sm ks-btn-show" }
		}]
	},
	buildOption: {
		tagName: "option",
		textContent: "${rowValue}",
		attributes: { value: "${rowValue}" }
	},
	buildSelect: {
		tagName: "select",
		attributes: {
			id: "${columnName}",
			name: "${columnName}",
			"data-name": "${columnName}",
			class: "form-select shadow-sm mb-3"
		},
		children: []
	},
	buildDataList: {
		tagName: "datalist",
		attributes: {
			id: "${columnName}",
			"data-name": "${columnName}"
		},
		children: []
	},
	buildFormField: {
		tagName: "div",
		attributes: { class: "mb-3" },
		children: [{
			tagName: "label",
			textContent: "${columnName}",
			attributes: {
				for: "${columnName}",
				class: "form-label fw-semibold text-capitalize"
			}
		}, {
			tagName: "input",
			attributes: {
				type: "text",
				id: "${columnName}",
				name: "${columnName}",
				placeholder: "Enter ${columnName}...",
				class: "form-control"
			}
		}]
	},
	emptyCell: {
		tagName: "td",
		children: []
	},
	headerSerialCell: {
		tagName: "th",
		textContent: "#",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForSerial: {
		tagName: "col",
		attributes: { width: "50px" }
	},
	colGroupForOption: {
		tagName: "col",
		attributes: { width: "100px" }
	},
	headerForOption: {
		tagName: "th",
		textContent: "options",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	tdWithButtonSaveWarning: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "save",
			attributes: { class: "btn btn-warning btn-sm ks-btn-save" }
		}]
	},
	tableSearch: {
		tagName: "div",
		attributes: { class: "row mb-3 justify-content-end" },
		children: [{
			tagName: "div",
			attributes: { class: "col-md-4" },
			children: [{
				tagName: "div",
				attributes: { class: "input-group" },
				children: [{
					tagName: "span",
					attributes: { class: "input-group-text bg-white" },
					children: [{
						tagName: "i",
						attributes: { class: "bi bi-search" },
						textContent: "🔍"
					}]
				}, {
					tagName: "input",
					attributes: {
						type: "text",
						id: "tableSearch",
						class: "form-control",
						placeholder: "Search table..."
					}
				}]
			}]
		}]
	}
}, Ce = {
	$schema: "./tags.schema.json",
	div: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["title", "role"],
		childTags: []
	},
	input: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"type",
			"placeholder",
			"value",
			"name",
			"disabled",
			"readonly",
			"required",
			"list"
		]
	},
	checkbox: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"type",
			"checked",
			"name",
			"value",
			"disabled",
			"required"
		]
	},
	colgroup: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["span"],
		childTags: ["col"]
	},
	col: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"span",
			"style",
			"width"
		]
	},
	label: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["for"],
		childTags: []
	},
	form: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"action",
			"method",
			"autocomplete",
			"enctype",
			"name",
			"novalidate",
			"target"
		],
		childTags: []
	},
	select: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"name",
			"disabled",
			"required",
			"multiple",
			"size"
		],
		childTags: ["option"]
	},
	p: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	h1: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	h2: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	span: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	img: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: [
			"src",
			"alt",
			"width",
			"height",
			"loading"
		]
	},
	button: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"type",
			"disabled",
			"name",
			"value"
		],
		childTags: []
	},
	table: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [
			"border",
			"cellpadding",
			"cellspacing"
		],
		childTags: [
			"caption",
			"colgroup",
			"thead",
			"tbody",
			"tfoot",
			"tr"
		]
	},
	thead: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tbody: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tfoot: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["tr"]
	},
	tr: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["td", "th"]
	},
	th: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"scope",
			"colspan",
			"rowspan"
		],
		childTags: []
	},
	td: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["colspan", "rowspan"],
		childTags: []
	},
	datalist: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: ["option"]
	},
	option: {
		allowsTextContent: !0,
		allowsChildren: !1,
		allowedAttributes: [
			"value",
			"label",
			"selected",
			"disabled"
		]
	},
	header: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["role"],
		childTags: []
	},
	a: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [
			"href",
			"target",
			"rel",
			"title",
			"download"
		],
		childTags: []
	},
	i: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["aria-hidden"],
		childTags: []
	},
	small: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: [],
		childTags: []
	},
	ul: {
		allowsTextContent: !1,
		allowsChildren: !0,
		allowedAttributes: ["type"],
		childTags: ["li"]
	},
	li: {
		allowsTextContent: !0,
		allowsChildren: !0,
		allowedAttributes: ["value"],
		childTags: []
	},
	hr: {
		allowsTextContent: !1,
		allowsChildren: !1,
		allowedAttributes: []
	}
}, we = {
	$schema: "https://json-schema.org/draft/2020-12/schema",
	title: "TagsCatalogSchema",
	description: "JSON Schema for @keshavsoft/spec-repo tags.json catalog",
	type: "object",
	patternProperties: { "^[a-z0-9]+$": {
		type: "object",
		required: [
			"allowsTextContent",
			"allowsChildren",
			"allowedAttributes"
		],
		properties: {
			allowsTextContent: {
				type: "boolean",
				description: "Indicates whether the element permits direct textContent"
			},
			allowsChildren: {
				type: "boolean",
				description: "Indicates whether the element can contain child DOM elements"
			},
			allowedAttributes: {
				type: "array",
				items: { type: "string" },
				description: "List of specifically allowed HTML attributes for this tag"
			},
			childTags: {
				type: "array",
				items: { type: "string" },
				description: "Permitted child tag names if restricted"
			}
		},
		additionalProperties: !1
	} }
}, Te = {
	table: {
		simple: {
			base: {
				tagName: "div",
				attributes: { "data-role": "table-parent" },
				children: [{
					tagName: "table",
					attributes: { class: "table table-hover table-striped align-middle border mb-0" },
					children: [
						{
							tagName: "colgroup",
							attributes: { "data-role": "table-colgroup" },
							children: []
						},
						{
							tagName: "thead",
							attributes: {
								class: "table-dark",
								"data-role": "table-header"
							},
							children: [{
								tagName: "tr",
								attributes: { "data-role": "table-header-row" },
								children: []
							}]
						},
						{
							tagName: "tbody",
							attributes: { "data-role": "table-body" },
							children: []
						},
						{
							tagName: "tfoot",
							attributes: { "data-role": "table-footer" },
							children: [{
								tagName: "tr",
								attributes: { "data-role": "table-footer-row" },
								children: []
							}]
						}
					]
				}]
			},
			single: [{
				narration: "Build column widths",
				destinationPath: {
					fileName: "base",
					dataRole: "table-colgroup",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildColGroup",
				func: "fromCollection"
			}, {
				narration: "Build table header",
				destinationPath: {
					fileName: "base",
					dataRole: "table-header-row",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildHeader",
				func: "fromCollection"
			}],
			double: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: {
					rowKey: "buildBodyTr",
					columnKey: "buildBodyCell"
				},
				func: "twoDimensional"
			}],
			rowOnColumn: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				templateKey: {
					rowKey: "buildBodyTr",
					columnKey: "buildBodyCell"
				}
			}],
			options: {
				serial: [
					{
						narration: "Prepend the serial column width to the table colgroup.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-colgroup",
							filePath: ["children"],
							action: "unshift"
						},
						sourcePath: null,
						templateKey: "colGroupForSerial",
						func: null
					},
					{
						narration: "Prepend the serial header cell to the table header row.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-header-row",
							filePath: ["children"],
							action: "unshift"
						},
						sourcePath: null,
						templateKey: "headerSerialCell",
						func: null
					},
					{
						narration: "Prepend the serial number cell into each table body row.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-body",
							filePath: ["children"],
							action: "unshiftSerialToRows"
						},
						sourcePath: null,
						templateKey: "buildBodyCell",
						func: null
					},
					{
						narration: "Prepend the serial footer cell to the table footer row.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-footer-row",
							filePath: ["children"],
							action: "unshift"
						},
						sourcePath: null,
						templateKey: "headerSerialCell",
						func: null
					}
				],
				options: [
					{
						narration: "Append the options column width to the table colgroup.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-colgroup",
							filePath: ["children"],
							action: "push"
						},
						sourcePath: null,
						templateKey: "colGroupForOption",
						func: null
					},
					{
						narration: "Append the options header cell to the table header row.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-header-row",
							filePath: ["children"],
							action: "push"
						},
						sourcePath: null,
						templateKey: "headerForOption",
						func: null
					},
					{
						narration: "Append the options button cell into each table body row.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-body",
							filePath: ["children"],
							action: "pushToRows"
						},
						sourcePath: null,
						templateKey: "optionsButtonCell",
						func: null
					},
					{
						narration: "Append the options footer cell to the table footer row.",
						destinationPath: {
							fileName: "base",
							dataRole: "table-footer-row",
							filePath: ["children"],
							action: "push"
						},
						sourcePath: null,
						templateKey: "tdWithButtonSaveWarning",
						func: null
					}
				],
				search: [{
					narration: "Prepend the search row to top of the table.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-parent",
						filePath: ["children"],
						action: "unshift"
					},
					sourcePath: null,
					templateKey: "tableSearch",
					func: null
				}]
			}
		},
		withFooter: {
			base: {
				tagName: "table",
				attributes: { class: "table table-hover table-striped align-middle border mb-0" },
				children: [
					{
						tagName: "colgroup",
						attributes: { "data-role": "table-colgroup" },
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header"
						},
						children: [{
							tagName: "tr",
							attributes: { "data-role": "table-header-row" },
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: { "data-role": "table-body" },
						children: []
					},
					{
						tagName: "tfoot",
						attributes: { "data-role": "table-footer" },
						children: [{
							tagName: "tr",
							attributes: { "data-role": "table-footer-row" },
							children: []
						}]
					}
				]
			},
			single: [
				{
					narration: "Build column widths",
					destinationPath: {
						fileName: "base",
						dataRole: "table-colgroup",
						filePath: ["children"]
					},
					sourcePath: {
						fileName: "data",
						filePath: ["columns"]
					},
					templateKey: "buildColGroup",
					func: "fromCollection"
				},
				{
					narration: "Build table header",
					destinationPath: {
						fileName: "base",
						dataRole: "table-header-row",
						filePath: ["children"]
					},
					sourcePath: {
						fileName: "data",
						filePath: ["columns"]
					},
					templateKey: "buildHeader",
					func: "fromCollection"
				},
				{
					narration: "Build footer input cells",
					destinationPath: {
						fileName: "base",
						dataRole: "table-footer-row",
						filePath: ["children"]
					},
					sourcePath: {
						fileName: "data",
						filePath: ["columns"]
					},
					templateKey: "buildFooter",
					func: "fromCollection"
				}
			],
			double: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				func: "twoDimensional"
			}]
		},
		bodyOnly: {
			base: {
				tagName: "tbody",
				attributes: { "data-role": "table-body" },
				children: []
			},
			single: [],
			double: [{
				narration: "Build table body",
				destinationPath: {
					fileName: "base",
					dataRole: "table-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				func: "twoDimensional"
			}]
		},
		footerOnly: {
			base: {
				tagName: "tfoot",
				attributes: { "data-role": "table-footer" },
				children: [{
					tagName: "tr",
					attributes: { "data-role": "table-footer-row" },
					children: []
				}]
			},
			single: [{
				narration: "Build footer input cells",
				destinationPath: {
					fileName: "base",
					dataRole: "table-footer-row",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildFooter",
				func: "fromCollection"
			}],
			double: []
		},
		headerOnly: {
			base: {
				tagName: "table",
				attributes: { class: "table table-hover table-striped align-middle border mb-0" },
				children: [
					{
						tagName: "colgroup",
						attributes: { "data-role": "table-colgroup" },
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header"
						},
						children: [{
							tagName: "tr",
							attributes: { "data-role": "table-header-row" },
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: { "data-role": "table-body" },
						children: []
					}
				]
			},
			single: [{
				narration: "Build column widths",
				destinationPath: {
					fileName: "base",
					dataRole: "table-colgroup",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildColGroup",
				func: "fromCollection"
			}, {
				narration: "Build table header",
				destinationPath: {
					fileName: "base",
					dataRole: "table-header-row",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildHeader",
				func: "fromCollection"
			}],
			double: []
		},
		options: {
			serial: [
				{
					narration: "Prepend the serial column width to the table colgroup.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-colgroup",
						filePath: ["children"],
						action: "unshift"
					},
					sourcePath: null,
					templateKey: "colGroupForSerial",
					func: null
				},
				{
					narration: "Prepend the serial header cell to the table header row.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-header-row",
						filePath: ["children"],
						action: "unshift"
					},
					sourcePath: null,
					templateKey: "headerSerialCell",
					func: null
				},
				{
					narration: "Prepend the serial number cell into each table body row.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-body",
						filePath: ["children"],
						action: "unshiftSerialToRows"
					},
					sourcePath: null,
					templateKey: "buildBodyCell",
					func: null
				},
				{
					narration: "Prepend the serial footer cell to the table footer row.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-footer-row",
						filePath: ["children"],
						action: "unshift"
					},
					sourcePath: null,
					templateKey: "headerSerialCell",
					func: null
				}
			],
			options: [
				{
					narration: "Append the options column width to the table colgroup.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-colgroup",
						filePath: ["children"],
						action: "push"
					},
					sourcePath: null,
					templateKey: "colGroupForOption",
					func: null
				},
				{
					narration: "Append the options header cell to the table header row.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-header-row",
						filePath: ["children"],
						action: "push"
					},
					sourcePath: null,
					templateKey: "headerForOption",
					func: null
				},
				{
					narration: "Append the options button cell into each table body row.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-body",
						filePath: ["children"],
						action: "pushToRows"
					},
					sourcePath: null,
					templateKey: "optionsButtonCell",
					func: null
				},
				{
					narration: "Append the options footer cell to the table footer row.",
					destinationPath: {
						fileName: "base",
						dataRole: "table-footer-row",
						filePath: ["children"],
						action: "push"
					},
					sourcePath: null,
					templateKey: "tdWithButtonSaveWarning",
					func: null
				}
			],
			search: [{
				narration: "Prepend the search row to top of the table.",
				destinationPath: {
					fileName: "base",
					dataRole: "table-parent",
					filePath: ["children"],
					action: "unshift"
				},
				sourcePath: null,
				templateKey: "tableSearch",
				func: null
			}]
		}
	},
	select: {
		base: {
			tagName: "div",
			attributes: { "data-role": "select-container" },
			children: []
		},
		single: [{
			narration: "Build select options",
			destinationPath: {
				fileName: "base",
				filePath: ["children"]
			},
			sourcePath: {
				fileName: "data",
				filePath: ["data"]
			},
			templateKey: "buildOption",
			func: "fromCollection"
		}],
		double: [],
		columnOnRow: [{
			narration: "Build selects with options",
			destinationPath: {
				fileName: "base",
				filePath: ["children"]
			},
			templateKey: {
				columnKey: "buildSelect",
				rowKey: "buildOption"
			}
		}]
	},
	dataList: {
		simple: {
			base: {
				tagName: "div",
				attributes: { "data-role": "datalist-container" },
				children: []
			},
			single: [],
			double: [],
			columnOnRow: [{
				narration: "Build datalists with options",
				destinationPath: {
					fileName: "base",
					filePath: ["children"]
				},
				templateKey: {
					columnKey: "buildDataList",
					rowKey: "buildOption"
				}
			}]
		},
		base: {
			tagName: "div",
			attributes: { "data-role": "datalist-container" },
			children: []
		},
		single: [],
		double: [],
		columnOnRow: [{
			narration: "Build datalists with options",
			destinationPath: {
				fileName: "base",
				filePath: ["children"]
			},
			templateKey: {
				columnKey: "buildDataList",
				rowKey: "buildOption"
			}
		}]
	},
	selectOptionsOnly: {
		base: [],
		single: [{
			narration: "Build options array",
			destinationPath: {
				fileName: "base",
				filePath: []
			},
			sourcePath: {
				fileName: "data",
				filePath: ["data"]
			},
			templateKey: "buildOption",
			func: "fromCollection"
		}],
		double: []
	},
	searchInput: {
		base: {
			tagName: "div",
			attributes: { class: "d-flex align-items-center gap-2" },
			children: [{
				tagName: "label",
				textContent: "${label}",
				attributes: {
					class: "form-label mb-0 text-nowrap fw-semibold",
					for: "${id}"
				}
			}, {
				tagName: "input",
				attributes: {
					type: "search",
					placeholder: "${placeholder}",
					class: "form-control",
					id: "${id}"
				}
			}]
		},
		single: [],
		double: []
	},
	form: {
		simple: {
			base: {
				tagName: "div",
				attributes: { class: "card shadow-sm border-0" },
				children: [
					{
						tagName: "div",
						attributes: { class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center" },
						children: [{
							tagName: "h2",
							textContent: "Data Entry Form",
							attributes: { class: "h5 fw-bold mb-0 text-dark" }
						}]
					},
					{
						tagName: "div",
						attributes: { class: "card-body p-4" },
						children: [{
							tagName: "form",
							attributes: {
								id: "form-body-id",
								"data-role": "form-body"
							},
							children: []
						}]
					},
					{
						tagName: "div",
						attributes: { class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2" },
						children: [{
							tagName: "button",
							textContent: "Reset",
							attributes: {
								type: "reset",
								class: "btn btn-outline-secondary"
							}
						}, {
							tagName: "button",
							textContent: "Submit",
							attributes: {
								type: "submit",
								class: "btn btn-primary"
							}
						}]
					}
				]
			},
			single: [{
				narration: "Build form fields from columns",
				destinationPath: {
					fileName: "base",
					dataRole: "form-body",
					filePath: ["children"]
				},
				sourcePath: {
					fileName: "data",
					filePath: ["columns"]
				},
				templateKey: "buildFormField",
				func: "fromCollection"
			}],
			double: []
		},
		base: {
			tagName: "div",
			attributes: { class: "card shadow-sm border-0" },
			children: [
				{
					tagName: "div",
					attributes: { class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center" },
					children: [{
						tagName: "h2",
						textContent: "Data Entry Form",
						attributes: { class: "h5 fw-bold mb-0 text-dark" }
					}]
				},
				{
					tagName: "div",
					attributes: { class: "card-body p-4" },
					children: [{
						tagName: "form",
						attributes: {
							id: "form-body-id",
							"data-role": "form-body"
						},
						children: []
					}]
				},
				{
					tagName: "div",
					attributes: { class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2" },
					children: [{
						tagName: "button",
						textContent: "Reset",
						attributes: {
							type: "reset",
							class: "btn btn-outline-secondary"
						}
					}, {
						tagName: "button",
						textContent: "Submit",
						attributes: {
							type: "submit",
							class: "btn btn-primary"
						}
					}]
				}
			]
		},
		single: [{
			narration: "Build form fields from columns",
			destinationPath: {
				fileName: "base",
				dataRole: "form-body",
				filePath: ["children"]
			},
			sourcePath: {
				fileName: "data",
				filePath: ["columns"]
			},
			templateKey: "buildFormField",
			func: "fromCollection"
		}],
		double: []
	}
}, Ee = {
	name: "spec-repo",
	version: "1.6.1"
}, De = ({ spec: e, tags: t, tagsSchema: n, definitions: r }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: Ee,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r
	});
}, Z = X;
De({
	spec: X,
	tags: Ce,
	tagsSchema: we,
	definitions: Te
});
// ../json-renderers-run-instructions/node_modules/json-instruction-single/src/v6/getResult.js
var Oe = {
	applyTemplate: U,
	fromCollection: K
}, ke = (e, t, n) => e?.sourcePath === null ? null : Se(t, e.sourcePath), Ae = (e, t, n) => {
	let r = t?.spec ?? Z, i = e.templateKey, a = e?.func, o = r[i], s = ke(e, t, n), c = a === null ? o : Oe[e.func](s, o);
	return s === null ? o : c;
}, je = (e, t, n) => {
	let r = n;
	r && console.log("runSingleInstruction 1 :", e, t);
	let i = Ae(e, t, n);
	r && console.log("runSingleInstruction 2 :", i), J(t, e.destinationPath, i);
}, Me = (e, t, n, r) => {
	e.forEach((e) => {
		je(e, t, n, r);
	});
}, Ne = {
	applyTemplate: U,
	fromCollection: K,
	twoDimensional: be
}, Pe = ({ instruction: e, registry: t, showLog: n, returnLog: r }) => {
	let i = Z, a = Ne[e.func]({
		columns: t?.data?.columns,
		data: t?.data?.data,
		columnSpec: i[e?.templateKey?.columnKey],
		rowSpec: i[e?.templateKey?.rowKey]
	});
	J(t, e.destinationPath, a);
}, Fe = ({ instructions: e, registry: t, showLog: n, returnLog: r }) => {
	e.forEach((e) => {
		Pe({
			instruction: e,
			registry: t,
			showLog: n,
			returnLog: r
		});
	});
}, Ie = (e, t) => e.map((e) => ({
	...e,
	rowData: t[e.columnName]
})), Le = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inColumns must be an Array");
	if (e.length === 0) throw Error("inColumns cannot be empty");
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (!n || typeof n != "object") throw TypeError(`inColumns[${t}] must be an object`);
		if (typeof n.columnName != "string" || !n.columnName.trim()) throw TypeError(`inColumns[${t}].columnName must be a non-empty string`);
	}
	if (!Array.isArray(t)) throw TypeError("inData must be an Array");
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (!n || typeof n != "object") throw TypeError(`inData[${e}] must be an object`);
	}
	return !0;
}, Re = ({ columns: e, data: t, columnSpec: n, rowSpec: r }) => (Le(e, t), t.map((t) => {
	let i = U(t, r);
	return i.children = K(Ie(e, t), n), i;
})), ze = (e, t) => t.map((t) => ({
	...e,
	rowData: t[e.columnName]
})), Be = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inColumns must be an Array");
	if (e.length === 0) throw Error("inColumns cannot be empty");
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (!n || typeof n != "object") throw TypeError(`inColumns[${t}] must be an object`);
		if (typeof n.columnName != "string" || !n.columnName.trim()) throw TypeError(`inColumns[${t}].columnName must be a non-empty string`);
	}
	if (!Array.isArray(t)) throw TypeError("inData must be an Array");
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (!n || typeof n != "object") throw TypeError(`inData[${e}] must be an object`);
	}
	return !0;
}, Ve = ({ columns: e, data: t, columnSpec: n, rowSpec: r }) => (Be(e, t), e.map((e) => {
	let i = U(e, n);
	return i.children = t.length > 0 ? K(ze(e, t), r) : [], i;
})), He = ({ instructions: e = [], base: t, data: n, showLog: r = !1 } = {}) => {
	e.forEach((e) => {
		let i = Z[e?.templateKey?.columnKey], a = Z[e?.templateKey?.rowKey], o = Re({
			columns: n?.columns,
			data: n?.data,
			columnSpec: i,
			rowSpec: a
		});
		r && console.log("[runInstructions:rowOnColumn]", e.narration, o), J({
			base: t,
			data: n
		}, e.destinationPath, o);
	});
}, Ue = ({ instructions: e = [], base: t, data: n, showLog: r = !1 } = {}) => {
	e.forEach((e) => {
		let i = Z[e?.templateKey?.columnKey], a = Z[e?.templateKey?.rowKey], o = Ve({
			columns: n?.columns,
			data: n?.data,
			columnSpec: i,
			rowSpec: a
		});
		r && console.log("[runInstructions:columnOnRow]", e.narration, o), J({
			base: t,
			data: n
		}, e.destinationPath, o);
	});
}, We = ({ single: e = [], double: t = [], rowOnColumn: n = [], columnOnRow: r = [], base: i, data: a, showLog: o = !1 } = {}) => {
	if (o && console.log("runInstructions input:", {
		single: e,
		double: t,
		rowOnColumn: n,
		columnOnRow: r,
		base: i,
		data: a
	}), !Array.isArray(e)) throw TypeError("single instructions must be an array");
	if (!Array.isArray(t)) throw TypeError("double instructions must be an array");
	if (!Array.isArray(n)) throw TypeError("rowOnColumn instructions must be an array");
	if (!Array.isArray(r)) throw TypeError("columnOnRow instructions must be an array");
	let s = {
		base: i,
		data: a
	};
	return e.length > 0 && Me(e, s, o), t.length > 0 && Fe({
		instructions: t,
		registry: s,
		showLog: o
	}), n.length > 0 && He({
		instructions: n,
		base: i,
		data: a,
		showLog: o
	}), r.length > 0 && Ue({
		instructions: r,
		base: i,
		data: a,
		showLog: o
	}), i;
}, Q = ({ definitions: t = T, spec: n = S, type: r = "table.simple", data: i = [], columns: a = [], options: o = {}, showLog: s = !1 } = {}) => {
	let c = r.split("."), l = c[0], u = c[1], d = u ? t[l]?.[u] : t[l];
	if (!d) throw Error(`Unknown component definition for type "${r}".`);
	let f = We({
		single: d.single || [],
		double: d.double || [],
		rowOnColumn: d.rowOnColumn || [],
		columnOnRow: d.columnOnRow || [],
		base: structuredClone(d.base),
		data: {
			columns: a,
			data: i
		},
		showLog: s
	}), p = d.options || t[l]?.options || {};
	return e({
		base: f,
		options: o,
		optionDefs: p,
		showLog: s
	}), f;
}, $ = (e = {}) => {
	m(e);
	let t = e?.showLog, n = e?.options || {};
	t && console.log("[v6 from-instructions] input config:", {
		type: e.type,
		options: n,
		columns: e.columns,
		data: e.data,
		targetHtmlId: e.targetHtmlId,
		appendPosition: e.appendPosition
	});
	let r = Q({
		type: e.type,
		data: e.data,
		columns: e.columns,
		options: n,
		showLog: t
	});
	t && console.log("[v6 from-instructions] generated spec:", r);
	let i = F({
		jsonSpec: r,
		targetHtmlId: e.targetHtmlId,
		appendPosition: e.appendPosition || "replace",
		showLog: t
	});
	return t && console.log("[v6 from-instructions] mounted DOM element:", i), i;
};
n($);
export { Q as buildSpec, $ as default, $ as render };
