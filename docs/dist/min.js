// src/v7/registerGlobal/meta.js
var e = {
	version: "1.7.1",
	description: "Generic instruction-driven browser DOM component renderer built on top of spec-repo definitions and @keshavsoft/json-to-dom"
}, t = (t) => {
	let n = t;
	typeof globalThis < "u" && n && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.fromInstructions = {
		meta: e,
		render: n
	});
}, n = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.type;
	if (n === void 0) throw Error("Missing compulsory key: \"type\"");
	if (typeof n != "string") throw TypeError("type must be a string");
	return !0;
}, r = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.data;
	if (n === void 0) throw Error("Missing compulsory key: \"data\"");
	if (!Array.isArray(n)) throw TypeError("data must be an Array");
	return !0;
}, i = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.columns;
	if (n === void 0) throw Error("Missing compulsory key: \"columns\"");
	if (!Array.isArray(n)) throw TypeError("columns must be an Array");
	return !0;
}, a = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.showLog;
	if (n !== void 0 && typeof n != "boolean") throw TypeError("showLog must be a boolean");
	return !0;
}, o = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("Config must be an object");
	return n(t), r(t), i(t), a(t), !0;
}, s = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.targetHtmlId;
	if (n === void 0) throw Error("Missing compulsory key: \"targetHtmlId\"");
	if (typeof n != "string") throw TypeError("targetHtmlId must be a string");
	if (n.trim().length === 0) throw Error("targetHtmlId must be a non-empty string");
	return !0;
}, c = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.appendPosition;
	if (n === void 0) throw Error("Missing compulsory key: \"appendPosition\"");
	if (typeof n != "string") throw TypeError("appendPosition must be a string");
	return !0;
}, l = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object") throw TypeError("Config must be an object");
	let n = t.classToApply;
	if (n === void 0) throw Error("Missing compulsory key: \"classToApply\"");
	if (typeof n != "string") throw TypeError("classToApply must be a string");
	return !0;
}, u = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("Config must be an object");
	return s(t), c(t), l(t), !0;
}, d = {
	type: "table",
	targetHtmlId: "",
	data: [],
	columns: [],
	classToApply: "",
	appendPosition: "replace",
	showLog: !1
}, f = (e) => {
	let t = typeof e == "object" && e ? e.inKey ?? e.key : e;
	return t && t in d ? d[t] : { ...d };
};
Object.assign(f, d);
// node_modules/json-renderers-guard/src/v5/index.js
var p = (e) => {
	let t = e?.inConfig ?? e;
	if (!t || typeof t != "object" || Array.isArray(t)) throw TypeError("Config must be an object");
	return o(t), u(t), !0;
};
p.getSpec = f, p.configSpec = d, p.guardSpec = o, p.guardMount = u;
// node_modules/@keshavsoft/json-to-dom/src/v42/register/meta.js
var ee = {
	version: "42.1.4",
	name: "json-to-dom"
}, te = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.jsonToDom = {
		meta: ee,
		appendToDom: e
	});
}, ne = {
	version: "v12",
	description: "JSON-to-DOM engine powered by decoupled external-action traversal engine"
}, re = (e) => {
	if (typeof globalThis > "u" || !e) return;
	globalThis.ks ??= {};
	let t = typeof e == "function" ? e : e.buildSpecElement, n = e.buildSpecElementWithValidate, r = {
		meta: ne,
		buildSpecElement: t,
		...n ? { buildSpecElementWithValidate: n } : {}
	};
	globalThis.ks["json-to-tag"] = r, globalThis.ks.jsonToTag = r;
}, m = ({ inItems: e, inFunc: t }) => {
	let n = e, r = t;
	return Array.isArray(n) ? n.map((e) => h({
		inSpec: e,
		inFunc: r
	})).flat(Infinity).filter(Boolean) : [];
}, ie = ({ inSpec: e, inFunc: t }) => {
	let n = e, r = t;
	if (!n || typeof n != "object" || Array.isArray(n)) return null;
	let i = typeof r == "function" ? r(n) : null;
	if (Array.isArray(n.children)) {
		let e = m({
			inItems: n.children,
			inFunc: r
		});
		if (i && typeof i.append == "function" && Array.isArray(e)) {
			let t = e.filter(Boolean);
			t.length && i.append(...t);
		}
	}
	return i;
}, h = ({ inSpec: e, inFunc: t }) => {
	let n = e, r = t;
	return n == null ? null : typeof Node < "u" && n instanceof Node ? n : Array.isArray(n) ? m({
		inItems: n,
		inFunc: r
	}) : typeof n == "object" ? ie({
		inSpec: n,
		inFunc: r
	}) : typeof n == "string" || typeof n == "number" ? typeof document < "u" ? document.createTextNode(String(n)) : String(n) : null;
}, ae = ({ inNode: e, inErrors: t }) => {
	let n = e, r = t;
	return !n || typeof n != "object" || Array.isArray(n) ? (r.push({ reason: "Node must be a plain object" }), !1) : !0;
}, g = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName;
	return !o || typeof o != "string" || o.trim() === "" ? (a.push({ reason: "Missing or empty 'tagName'" }), !1) : i && typeof i == "object" && !(i[o] || Object.keys(i).includes(o)) ? (a.push({
		tagName: o,
		reason: `Unrecognized tagName '${o}' not found in spec catalog`
	}), !1) : !0;
}, _ = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && s.allowsTextContent === !1 && r.textContent ? (a.push({
		tagName: o,
		reason: `Tag '${o}' does not allow direct textContent`
	}), !1) : !0;
}, v = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && s.allowsChildren === !1 && Array.isArray(r.children) && r.children.length > 0 ? (a.push({
		tagName: o,
		reason: `Tag '${o}' does not allow children (void element)`
	}), !1) : "children" in r && !Array.isArray(r.children) ? (a.push({
		tagName: o,
		reason: "'children' must be an array"
	}), !1) : !0;
}, y = ({ inNode: e, inCatalog: t, inErrors: n }) => {
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
}, se = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n;
	ae({
		inNode: r,
		inErrors: a
	}) && (g({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), _({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), v({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), y({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), oe({
		inNode: r,
		inErrors: a
	}));
}, b = {
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
}, x = {
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
}, ce = {
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
}, S = {
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
}, le = {
	name: "spec-repo",
	version: "1.6.1"
}, ue = ({ spec: e, tags: t, tagsSchema: n, definitions: r }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: le,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r
	});
}, C = b;
ue({
	spec: b,
	tags: x,
	tagsSchema: ce,
	definitions: S
});
// node_modules/json-to-tag-validate/src/v4/index.js
function de({ inJson: e, inCatalog: t, inSpec: n }) {
	let r = e, i = t ?? n ?? x, a = [];
	return h({
		inSpec: r,
		inFunc: (e) => {
			se({
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
var fe = "http://www.w3.org/2000/svg", pe = /* @__PURE__ */ new Set(/* @__PURE__ */ "svg.path.symbol.use.g.circle.ellipse.rect.line.polyline.polygon.text.tspan.defs.clippath.mask.pattern.marker.lineargradient.radialgradient.stop.image.filter.fegaussianblur.femerge.femergenode".split(".")), me = ({ inTagName: e }) => {
	let t = e?.toLowerCase();
	if (!t) return null;
	if (t === "checkbox") {
		let e = document.createElement("input");
		return e.type = "checkbox", e;
	}
	return pe.has(t) ? document.createElementNS(fe, t) : document.createElement(t);
}, he = ({ inElement: e, inTextContent: t }) => (!e || t == null || (e.textContent = t), e), ge = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), _e = "http://www.w3.org/1999/xlink", ve = ({ inElement: e, inAttributes: t }) => {
	let n = e, r = t;
	if (!n || !r || typeof r != "object") return n;
	let i = typeof SVGElement < "u" ? n instanceof SVGElement : n.namespaceURI === "http://www.w3.org/2000/svg";
	return Object.entries(r).forEach(([e, t]) => {
		if (e === "class") i ? n.setAttribute("class", String(t)) : n.className = t;
		else if (e === "xlink:href" || e === "href") {
			if (t != null) {
				let e = String(t);
				if (i) try {
					n.setAttributeNS(_e, "href", e);
				} catch {}
				n.setAttribute("href", e), n.setAttribute("xlink:href", e);
			}
		} else typeof t == "boolean" ? t ? n.setAttribute(e, "") : n.removeAttribute(e) : t != null && n.setAttribute(e, String(t));
	}), n;
}, ye = ({ inElement: e, inClassList: t }) => {
	if (!e || !t) return e;
	let n = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((e) => typeof e == "string" && e.trim()) : [];
	return n.length && e.classList.add(...n), e;
}, w = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
	let t = me({ inTagName: e.tagName });
	return t ? (he({
		inElement: t,
		inTextContent: e.textContent,
		inTagName: e.tagName
	}), ge({
		inElement: t,
		inProperties: e.properties
	}), ve({
		inElement: t,
		inAttributes: e.attributes
	}), ye({
		inElement: t,
		inClassList: e.classList
	}), t) : null;
}, T = (e = {}) => h({
	inSpec: e?.spec ?? e?.inSpec ?? e,
	inFunc: w
});
re({
	buildSpecElement: T,
	buildSpecElementWithValidate: (e = {}) => {
		let t = e?.spec ?? e?.inSpec ?? e, n = de({ inJson: t });
		return n.isValid || console.warn("[json-to-tag] Specification validation issues:", n.errors), h({
			inSpec: t,
			inFunc: w
		});
	}
});
// node_modules/spec-to-dom/src/v2/register/meta.js
var be = {
	version: "2.1.1",
	name: "spec-to-dom"
}, xe = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.specToDom = {
		meta: be,
		appendToDom: e
	});
}, E = ({ buildSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => {
	let i = e, a = t, o = n, s = r;
	s && console.log("renderToDom 1 (content):", i);
	let c = document.getElementById(a);
	return c ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? o === "prepend" ? c.prepend(...i) : c.append(...i) : o === "prepend" ? c.prepend(i) : (c.innerHTML = "", c.append(i)), s && console.log("renderToDom 2 (mounted):", c), c) : null;
};
xe(E);
// node_modules/@keshavsoft/json-to-dom/src/v42/index.js
var D = ({ jsonSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => E({
	buildSpec: T(e),
	targetHtmlId: t,
	appendPosition: n,
	showLog: r
});
te(D);
// ../json-renderers-run-instructions/node_modules/json-write-path/src/v4/utils/toArray.js
var O = (e) => Array.isArray(e) ? e : [e], k = (e, t, n) => {
	e[t] = n;
}, A = {
	set: k,
	push: (e, t, n) => {
		e[t].push(...O(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...O(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(O(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(O(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, j = (e) => typeof e == "object" && !!e && !Array.isArray(e), M = (e, t) => {
	if (!j(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = P(t, i);
	return n;
}, Se = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => P(t, e));
}, N = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, Ce = (e, t) => N(e, t), we = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, Te = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, Ee = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: Te,
		applyTemplate: e
	});
}, P = (e, t, n) => {
	let r = e, i = t;
	we(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? N(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = Ce(a?.textContent, r)), "attributes" in a && (a.attributes = M(a?.attributes, r)), "children" in a && (a.children = Se(a?.children, r))), a);
};
Ee(P);
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var F = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, De = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, Oe = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: De,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, I = (e, t) => {
	let n = e, r = t;
	return F(n, r), n.map((e) => P(e, r));
};
Oe((e, t) => {
	let n = e;
	return F(n, t), n.map((e) => P(e, e[t]));
}, I);
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs-two-dimensions/src/v8/addRowData.js
var ke = (e, t) => e.map((e) => ({
	...e,
	rowData: t[e.columnName]
})), Ae = (e, t) => {
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
}, je = ({ columns: e, data: t, columnSpec: n, rowSpec: r }) => {
	Ae(e, t);
	let i = e;
	return t.map((e) => {
		let t = P(e, r);
		return t.children = I(ke(i, e), n), t;
	});
}, L = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = L(n, t);
		if (e) return e;
	}
	return null;
}, Me = (e, t, n) => {
	let r = t.fileName, i = L(e[r], t.dataRole), a = t.dataRole ? i : e[t.fileName], o = [...t.filePath ?? []], s = o.pop();
	return {
		parent: o.reduce((e, t) => e[t], a),
		key: s
	};
}, R = (e, t, n, r) => {
	r && console.log("v4 index :", e, t, n);
	let { parent: i, key: a } = Me(e, t, r);
	(A[t.action] || k)(i, a, n);
}, z = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = z(n, t);
		if (e) return e;
	}
	return null;
}, Ne = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? z(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, Pe = {
	applyTemplate: P,
	fromCollection: I
}, Fe = (e, t, n) => e?.sourcePath === null ? null : Ne(t, e.sourcePath), Ie = (e, t, n) => {
	let r = t?.spec ?? C, i = e.templateKey, a = e?.func, o = r[i], s = Fe(e, t, n), c = a === null ? o : Pe[e.func](s, o);
	return s === null ? o : c;
}, Le = (e, t, n) => {
	let r = n;
	r && console.log("runSingleInstruction 1 :", e, t);
	let i = Ie(e, t, n);
	r && console.log("runSingleInstruction 2 :", i), R(t, e.destinationPath, i);
}, Re = (e, t, n, r) => {
	e.forEach((e) => {
		Le(e, t, n, r);
	});
}, ze = {
	applyTemplate: P,
	fromCollection: I,
	twoDimensional: je
}, Be = ({ instruction: e, registry: t, showLog: n, returnLog: r }) => {
	let i = C, a = ze[e.func]({
		columns: t?.data?.columns,
		data: t?.data?.data,
		columnSpec: i[e?.templateKey?.columnKey],
		rowSpec: i[e?.templateKey?.rowKey]
	});
	R(t, e.destinationPath, a);
}, Ve = ({ instructions: e, registry: t, showLog: n, returnLog: r }) => {
	e.forEach((e) => {
		Be({
			instruction: e,
			registry: t,
			showLog: n,
			returnLog: r
		});
	});
}, He = (e, t) => e.map((e) => ({
	...e,
	rowData: t[e.columnName]
})), Ue = (e, t) => {
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
}, We = ({ columns: e, data: t, columnSpec: n, rowSpec: r }) => (Ue(e, t), t.map((t) => {
	let i = P(t, r);
	return i.children = I(He(e, t), n), i;
})), Ge = (e, t) => t.map((t) => ({
	...e,
	rowData: t[e.columnName]
})), Ke = (e, t) => {
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
}, qe = ({ columns: e, data: t, columnSpec: n, rowSpec: r }) => (Ke(e, t), e.map((e) => {
	let i = P(e, n);
	return i.children = t.length > 0 ? I(Ge(e, t), r) : [], i;
})), Je = ({ instructions: e = [], base: t, data: n, showLog: r = !1 } = {}) => {
	e.forEach((e) => {
		let i = C[e?.templateKey?.columnKey], a = C[e?.templateKey?.rowKey], o = We({
			columns: n?.columns,
			data: n?.data,
			columnSpec: i,
			rowSpec: a
		});
		r && console.log("[runInstructions:rowOnColumn]", e.narration, o), R({
			base: t,
			data: n
		}, e.destinationPath, o);
	});
}, Ye = ({ instructions: e = [], base: t, data: n, showLog: r = !1 } = {}) => {
	e.forEach((e) => {
		let i = C[e?.templateKey?.columnKey], a = C[e?.templateKey?.rowKey], o = qe({
			columns: n?.columns,
			data: n?.data,
			columnSpec: i,
			rowSpec: a
		});
		r && console.log("[runInstructions:columnOnRow]", e.narration, o), R({
			base: t,
			data: n
		}, e.destinationPath, o);
	});
}, Xe = ({ single: e = [], double: t = [], rowOnColumn: n = [], columnOnRow: r = [], base: i, data: a, showLog: o = !1 } = {}) => {
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
	return e.length > 0 && Re(e, s, o), t.length > 0 && Ve({
		instructions: t,
		registry: s,
		showLog: o
	}), n.length > 0 && Je({
		instructions: n,
		base: i,
		data: a,
		showLog: o
	}), r.length > 0 && Ye({
		instructions: r,
		base: i,
		data: a,
		showLog: o
	}), i;
}, B = (e) => Array.isArray(e) ? e : [e], V = (e, t, n) => {
	e[t] = n;
}, Ze = {
	set: V,
	push: (e, t, n) => {
		e[t].push(...B(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...B(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(B(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(B(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, Qe = (e) => typeof e == "object" && !!e && !Array.isArray(e), $e = (e, t) => {
	if (!Qe(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = U(t, i);
	return n;
}, et = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => U(t, e));
}, H = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, tt = (e, t) => H(e, t), nt = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, rt = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, it = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: rt,
		applyTemplate: e
	});
}, U = (e, t, n) => {
	let r = e, i = t;
	nt(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? H(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = tt(a?.textContent, r)), "attributes" in a && (a.attributes = $e(a?.attributes, r)), "children" in a && (a.children = et(a?.children, r))), a);
};
it(U);
// ../json-renderers-run-options/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var W = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, at = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, ot = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: at,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, G = (e, t) => {
	let n = e, r = t;
	return W(n, r), n.map((e) => U(e, r));
};
ot((e, t) => {
	let n = e;
	return W(n, t), n.map((e) => U(e, e[t]));
}, G);
// ../json-renderers-run-options/node_modules/json-transformer-funcs/src/v24/findByRole.js
var K = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = K(n, t);
		if (e) return e;
	}
	return null;
}, st = (e, t, n) => {
	let r = t.fileName, i = K(e[r], t.dataRole), a = t.dataRole ? i : e[t.fileName], o = [...t.filePath ?? []], s = o.pop();
	return {
		parent: o.reduce((e, t) => e[t], a),
		key: s
	};
}, q = (e, t, n, r) => {
	r && console.log("v4 index :", e, t, n);
	let { parent: i, key: a } = st(e, t, r);
	(Ze[t.action] || V)(i, a, n);
}, J = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = J(n, t);
		if (e) return e;
	}
	return null;
}, ct = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? J(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, lt = {
	applyTemplate: U,
	fromCollection: G
}, ut = (e, t, n) => e?.sourcePath === null ? null : ct(t, e.sourcePath), dt = (e, t, n) => {
	let r = t?.spec ?? C, i = e.templateKey, a = e?.func, o = r[i], s = ut(e, t, n), c = a === null ? o : lt[e.func](s, o);
	return s === null ? o : c;
}, ft = (e, t, n) => {
	let r = n;
	r && console.log("runSingleInstruction 1 :", e, t);
	let i = dt(e, t, n);
	r && console.log("runSingleInstruction 2 :", i), q(t, e.destinationPath, i);
}, Y = (e, t, n, r) => {
	e.forEach((e) => {
		ft(e, t, n, r);
	});
}, X = (e, t) => !e || typeof e != "object" ? !1 : e.attributes?.["data-role"] === t || Array.isArray(e.children) && e.children.some((e) => X(e, t)), Z = (e = [], t) => e.filter(({ destinationPath: e }) => X(t, e?.dataRole)), pt = ({ base: e, options: t = {}, optionDefs: n = {}, showLog: r = !1 } = {}) => {
	if (!e) return e;
	let i = { base: e };
	if (t.showSearch && n.search) {
		let t = Z(n.search, e);
		r && console.log("[runOptions:search]", t), Y(t, i, r);
	}
	if ((t.showSerial || t.serial) && n.serial) {
		let t = Z(n.serial, e);
		r && console.log("[runOptions:serial]", t), Y(t, i, r);
	}
	if ((t.showOptions || t.options) && n.options) {
		let t = Z(n.options, e);
		r && console.log("[runOptions:options]", t), Y(t, i, r);
	}
	return e;
}, Q = ({ definitions: e = S, spec: t = b, type: n = "table.simple", data: r = [], columns: i = [], options: a = {}, showLog: o = !1 } = {}) => {
	let s = n.split("."), c = s[0], l = s[1], u = l ? e[c]?.[l] : e[c];
	if (!u) throw Error(`Unknown component definition for type "${n}".`);
	let d = Xe({
		single: u.single || [],
		double: u.double || [],
		rowOnColumn: u.rowOnColumn || [],
		columnOnRow: u.columnOnRow || [],
		base: structuredClone(u.base),
		data: {
			columns: i,
			data: r
		},
		showLog: o
	});
	return pt({
		base: d,
		options: a,
		optionDefs: u.options || e[c]?.options || {},
		showLog: o
	}), d;
}, $ = (e = {}) => {
	p(e);
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
	let i = D({
		jsonSpec: r,
		targetHtmlId: e.targetHtmlId,
		appendPosition: e.appendPosition || "replace",
		showLog: t
	});
	return t && console.log("[v6 from-instructions] mounted DOM element:", i), i;
};
t($);
export { Q as buildSpec, $ as default, $ as render };
