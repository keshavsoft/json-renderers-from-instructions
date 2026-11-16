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
var m = {
	version: "42.1.4",
	name: "json-to-dom"
}, ee = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.jsonToDom = {
		meta: m,
		appendToDom: e
	});
}, h = {
	version: "v12",
	description: "JSON-to-DOM engine powered by decoupled external-action traversal engine"
}, te = (e) => {
	if (typeof globalThis > "u" || !e) return;
	globalThis.ks ??= {};
	let t = typeof e == "function" ? e : e.buildSpecElement, n = e.buildSpecElementWithValidate, r = {
		meta: h,
		buildSpecElement: t,
		...n ? { buildSpecElementWithValidate: n } : {}
	};
	globalThis.ks["json-to-tag"] = r, globalThis.ks.jsonToTag = r;
}, ne = ({ inItems: e, inFunc: t }) => {
	let n = e, r = t;
	return Array.isArray(n) ? n.map((e) => re({
		inSpec: e,
		inFunc: r
	})).flat(Infinity).filter(Boolean) : [];
}, g = ({ inSpec: e, inFunc: t }) => {
	let n = e, r = t;
	if (!n || typeof n != "object" || Array.isArray(n)) return null;
	let i = typeof r == "function" ? r(n) : null;
	if (Array.isArray(n.children)) {
		let e = ne({
			inItems: n.children,
			inFunc: r
		});
		if (i && typeof i.append == "function" && Array.isArray(e)) {
			let t = e.filter(Boolean);
			t.length && i.append(...t);
		}
	}
	return i;
}, re = ({ inSpec: e, inFunc: t }) => {
	let n = e, r = t;
	return n == null ? null : typeof Node < "u" && n instanceof Node ? n : Array.isArray(n) ? ne({
		inItems: n,
		inFunc: r
	}) : typeof n == "object" ? g({
		inSpec: n,
		inFunc: r
	}) : typeof n == "string" || typeof n == "number" ? typeof document < "u" ? document.createTextNode(String(n)) : String(n) : null;
}, _ = ({ inNode: e, inErrors: t }) => {
	let n = e, r = t;
	return !n || typeof n != "object" || Array.isArray(n) ? (r.push({ reason: "Node must be a plain object" }), !1) : !0;
}, v = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName;
	return !o || typeof o != "string" || o.trim() === "" ? (a.push({ reason: "Missing or empty 'tagName'" }), !1) : i && typeof i == "object" && !(i[o] || Object.keys(i).includes(o)) ? (a.push({
		tagName: o,
		reason: `Unrecognized tagName '${o}' not found in spec catalog`
	}), !1) : !0;
}, ie = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && s.allowsTextContent === !1 && r.textContent ? (a.push({
		tagName: o,
		reason: `Tag '${o}' does not allow direct textContent`
	}), !1) : !0;
}, ae = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && s.allowsChildren === !1 && Array.isArray(r.children) && r.children.length > 0 ? (a.push({
		tagName: o,
		reason: `Tag '${o}' does not allow children (void element)`
	}), !1) : "children" in r && !Array.isArray(r.children) ? (a.push({
		tagName: o,
		reason: "'children' must be an array"
	}), !1) : !0;
}, oe = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n, o = r.tagName, s = i ? i[o] : null;
	return s && Array.isArray(s.childTags) && s.childTags.length > 0 && Array.isArray(r.children) && r.children.forEach((e) => {
		e && e.tagName && !s.childTags.includes(e.tagName) && a.push({
			tagName: e.tagName,
			reason: `Tag '${e.tagName}' is not an allowed child of '${o}' (allowed: ${s.childTags.join(", ")})`
		});
	}), !0;
}, se = ({ inNode: e, inErrors: t }) => {
	let n = e, r = t, i = n.tagName;
	return "attributes" in n && (!n.attributes || typeof n.attributes != "object" || Array.isArray(n.attributes)) ? (r.push({
		tagName: i,
		reason: "'attributes' must be a key-value object"
	}), !1) : !0;
}, ce = ({ inNode: e, inCatalog: t, inErrors: n }) => {
	let r = e, i = t, a = n;
	_({
		inNode: r,
		inErrors: a
	}) && (v({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), ie({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), ae({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), oe({
		inNode: r,
		inCatalog: i,
		inErrors: a
	}), se({
		inNode: r,
		inErrors: a
	}));
}, le = {
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
}, ue = {
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
}, de = {
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
}, fe = {
	table: /* @__PURE__ */ JSON.parse("{\"simple\":{\"base\":{\"tagName\":\"div\",\"attributes\":{\"data-role\":\"table-parent\",\"id\":\"table-simple-id\"},\"children\":[{\"tagName\":\"table\",\"attributes\":{\"class\":\"table table-hover table-striped align-middle border mb-0\",\"id\":\"table-simple-table-id\"},\"children\":[{\"tagName\":\"colgroup\",\"attributes\":{\"data-role\":\"table-colgroup\",\"id\":\"table-simple-colgroup-id\"},\"children\":[]},{\"tagName\":\"thead\",\"attributes\":{\"class\":\"table-dark\",\"data-role\":\"table-header\",\"id\":\"table-simple-header-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-header-row\",\"id\":\"table-simple-header-row-id\"},\"children\":[]}]},{\"tagName\":\"tbody\",\"attributes\":{\"data-role\":\"table-body\",\"id\":\"table-simple-body-id\"},\"children\":[]},{\"tagName\":\"tfoot\",\"attributes\":{\"data-role\":\"table-footer\",\"id\":\"table-simple-footer-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-footer-row\",\"id\":\"table-simple-footer-row-id\"},\"children\":[]}]}]}]},\"single\":[{\"narration\":\"Build column widths\",\"destinationPath\":{\"fileName\":\"base\",\"filePath\":[\"children\"],\"jsonPath\":\"$..*[?@.attributes['data-role'] == 'table-colgroup']\"},\"sourcePath\":{\"fileName\":\"data\",\"jsonPath\":\"$.columns\"},\"templateKey\":\"buildColGroup\",\"func\":\"fromCollection\"},{\"narration\":\"Build table header\",\"destinationPath\":{\"fileName\":\"base\",\"filePath\":[\"children\"],\"jsonPath\":\"$..*[?@.attributes['data-role'] == 'table-header-row']\"},\"sourcePath\":{\"fileName\":\"data\",\"jsonPath\":\"$.columns\"},\"templateKey\":\"buildHeader\",\"func\":\"fromCollection\"}],\"rowOnColumn\":[{\"narration\":\"Build table body\",\"destinationPath\":{\"fileName\":\"base\",\"jsonPath\":\"$.children[0].children[?(@.attributes['data-role'] == 'table-body')]\",\"filePath\":[\"children\"]},\"templateKey\":{\"rowKey\":\"buildBodyTr\",\"columnKey\":\"buildBodyCell\"}}],\"options\":{\"serial\":[{\"narration\":\"Prepend the serial column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"colGroupForSerial\",\"func\":null},{\"narration\":\"Prepend the serial header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null},{\"narration\":\"Prepend the serial number cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"unshiftSerialToRows\"},\"sourcePath\":null,\"templateKey\":\"buildBodyCell\",\"func\":null},{\"narration\":\"Prepend the serial footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null}],\"options\":[{\"narration\":\"Append the options column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"colGroupForOption\",\"func\":null},{\"narration\":\"Append the options header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"headerForOption\",\"func\":null},{\"narration\":\"Append the options button cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"pushToRows\"},\"sourcePath\":null,\"templateKey\":\"optionsButtonCell\",\"func\":null},{\"narration\":\"Append the options footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"tdWithButtonSaveWarning\",\"func\":null}],\"search\":[{\"narration\":\"Prepend the search row to top of the table.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-parent\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"tableSearch\",\"func\":null}]}},\"withFooter\":{\"base\":{\"tagName\":\"table\",\"attributes\":{\"class\":\"table table-hover table-striped align-middle border mb-0\",\"id\":\"table-with-footer-id\"},\"children\":[{\"tagName\":\"colgroup\",\"attributes\":{\"data-role\":\"table-colgroup\",\"id\":\"table-with-footer-colgroup-id\"},\"children\":[]},{\"tagName\":\"thead\",\"attributes\":{\"class\":\"table-dark\",\"data-role\":\"table-header\",\"id\":\"table-with-footer-header-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-header-row\",\"id\":\"table-with-footer-header-row-id\"},\"children\":[]}]},{\"tagName\":\"tbody\",\"attributes\":{\"data-role\":\"table-body\",\"id\":\"table-with-footer-body-id\"},\"children\":[]},{\"tagName\":\"tfoot\",\"attributes\":{\"data-role\":\"table-footer\",\"id\":\"table-with-footer-footer-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-footer-row\",\"id\":\"table-with-footer-footer-row-id\"},\"children\":[]}]}]},\"single\":[{\"narration\":\"Build column widths\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildColGroup\",\"func\":\"fromCollection\"},{\"narration\":\"Build table header\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildHeader\",\"func\":\"fromCollection\"},{\"narration\":\"Build footer input cells\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildFooter\",\"func\":\"fromCollection\"}],\"double\":[{\"narration\":\"Build table body\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"func\":\"twoDimensional\"}]},\"bodyOnly\":{\"base\":{\"tagName\":\"div\",\"attributes\":{\"id\":\"ks-id\"},\"children\":[]},\"rowOnColumn\":[{\"narration\":\"Build table body\",\"destinationPath\":{\"fileName\":\"base\",\"jsonPath\":\"$\",\"filePath\":[\"children\"]},\"destinationPath1\":{\"fileName\":\"base\",\"jsonPath\":\"$.children[0].children[?(@.attributes['data-role'] == 'table-body')]\",\"filePath\":[\"children\"]},\"templateKey\":{\"rowKey\":\"buildBodyTr\",\"columnKey\":\"buildBodyCell\"}}],\"options\":{\"serial\":[{\"narration\":\"Prepend the serial column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"colGroupForSerial\",\"func\":null},{\"narration\":\"Prepend the serial header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null},{\"narration\":\"Prepend the serial number cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"unshiftSerialToRows\"},\"sourcePath\":null,\"templateKey\":\"buildBodyCell\",\"func\":null},{\"narration\":\"Prepend the serial footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null}],\"options\":[{\"narration\":\"Append the options column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"colGroupForOption\",\"func\":null},{\"narration\":\"Append the options header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"headerForOption\",\"func\":null},{\"narration\":\"Append the options button cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"pushToRows\"},\"sourcePath\":null,\"templateKey\":\"optionsButtonCell\",\"func\":null},{\"narration\":\"Append the options footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"tdWithButtonSaveWarning\",\"func\":null}],\"search\":[{\"narration\":\"Prepend the search row to top of the table.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-parent\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"tableSearch\",\"func\":null}]}},\"bodyOnly1\":{\"base\":{\"tagName\":\"tbody\",\"attributes\":{\"data-role\":\"table-body\",\"id\":\"table-body-only-id\"},\"children\":[]},\"single\":[],\"double\":[{\"narration\":\"Build table body\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"func\":\"twoDimensional\"}]},\"footerOnly\":{\"base\":{\"tagName\":\"tfoot\",\"attributes\":{\"data-role\":\"table-footer\",\"id\":\"table-footer-only-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-footer-row\",\"id\":\"table-footer-only-footer-row-id\"},\"children\":[]}]},\"single\":[{\"narration\":\"Build footer input cells\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildFooter\",\"func\":\"fromCollection\"}],\"double\":[]},\"headerOnly\":{\"base\":{\"tagName\":\"div\",\"attributes\":{\"data-role\":\"table-parent\",\"id\":\"table-simple-id\"},\"children\":[{\"tagName\":\"table\",\"attributes\":{\"class\":\"table table-hover table-striped align-middle border mb-0\",\"id\":\"table-simple-table-id\"},\"children\":[{\"tagName\":\"colgroup\",\"attributes\":{\"data-role\":\"table-colgroup\",\"id\":\"table-simple-colgroup-id\"},\"children\":[]},{\"tagName\":\"thead\",\"attributes\":{\"class\":\"table-dark\",\"data-role\":\"table-header\",\"id\":\"table-simple-header-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-header-row\",\"id\":\"table-simple-header-row-id\"},\"children\":[]}]},{\"tagName\":\"tbody\",\"attributes\":{\"data-role\":\"table-body\",\"id\":\"table-simple-body-id\"},\"children\":[]},{\"tagName\":\"tfoot\",\"attributes\":{\"data-role\":\"table-footer\",\"id\":\"table-simple-footer-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-footer-row\",\"id\":\"table-simple-footer-row-id\"},\"children\":[]}]}]}]},\"single\":[{\"narration\":\"Build column widths\",\"destinationPath\":{\"fileName\":\"base\",\"filePath\":[\"children\"],\"jsonPath\":\"$..*[?@.attributes['data-role'] == 'table-colgroup']\"},\"sourcePath\":{\"fileName\":\"data\",\"jsonPath\":\"$.columns\"},\"templateKey\":\"buildColGroup\",\"func\":\"fromCollection\"},{\"narration\":\"Build table header\",\"destinationPath\":{\"fileName\":\"base\",\"filePath\":[\"children\"],\"jsonPath\":\"$..*[?@.attributes['data-role'] == 'table-header-row']\"},\"sourcePath\":{\"fileName\":\"data\",\"jsonPath\":\"$.columns\"},\"templateKey\":\"buildHeader\",\"func\":\"fromCollection\"}],\"options\":{\"serial\":[{\"narration\":\"Prepend the serial column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"colGroupForSerial\",\"func\":null},{\"narration\":\"Prepend the serial header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null},{\"narration\":\"Prepend the serial number cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"unshiftSerialToRows\"},\"sourcePath\":null,\"templateKey\":\"buildBodyCell\",\"func\":null},{\"narration\":\"Prepend the serial footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null}],\"options\":[{\"narration\":\"Append the options column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"colGroupForOption\",\"func\":null},{\"narration\":\"Append the options header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"headerForOption\",\"func\":null},{\"narration\":\"Append the options button cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"pushToRows\"},\"sourcePath\":null,\"templateKey\":\"optionsButtonCell\",\"func\":null},{\"narration\":\"Append the options footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"tdWithButtonSaveWarning\",\"func\":null}],\"search\":[{\"narration\":\"Prepend the search row to top of the table.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-parent\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"tableSearch\",\"func\":null}]}},\"headerOnly1\":{\"base\":{\"tagName\":\"table\",\"attributes\":{\"class\":\"table table-hover table-striped align-middle border mb-0\",\"id\":\"table-header-only-id\"},\"children\":[{\"tagName\":\"colgroup\",\"attributes\":{\"data-role\":\"table-colgroup\",\"id\":\"table-header-only-colgroup-id\"},\"children\":[]},{\"tagName\":\"thead\",\"attributes\":{\"class\":\"table-dark\",\"data-role\":\"table-header\",\"id\":\"table-header-only-header-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-header-row\",\"id\":\"table-header-only-header-row-id\"},\"children\":[]}]},{\"tagName\":\"tbody\",\"attributes\":{\"data-role\":\"table-body\",\"id\":\"table-header-only-body-id\"},\"children\":[]}]},\"single\":[{\"narration\":\"Build column widths\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildColGroup\",\"func\":\"fromCollection\"},{\"narration\":\"Build table header\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildHeader\",\"func\":\"fromCollection\"}],\"double\":[]},\"options\":{\"serial\":[{\"narration\":\"Prepend the serial column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"colGroupForSerial\",\"func\":null},{\"narration\":\"Prepend the serial header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null},{\"narration\":\"Prepend the serial number cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"unshiftSerialToRows\"},\"sourcePath\":null,\"templateKey\":\"buildBodyCell\",\"func\":null},{\"narration\":\"Prepend the serial footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null}],\"options\":[{\"narration\":\"Append the options column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"colGroupForOption\",\"func\":null},{\"narration\":\"Append the options header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"headerForOption\",\"func\":null},{\"narration\":\"Append the options button cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"pushToRows\"},\"sourcePath\":null,\"templateKey\":\"optionsButtonCell\",\"func\":null},{\"narration\":\"Append the options footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"tdWithButtonSaveWarning\",\"func\":null}],\"search\":[{\"narration\":\"Prepend the search row to top of the table.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-parent\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"tableSearch\",\"func\":null}]},\"headerAndFooter\":{\"base\":{\"tagName\":\"div\",\"attributes\":{\"data-role\":\"table-parent\",\"id\":\"table-simple-id\"},\"children\":[{\"tagName\":\"table\",\"attributes\":{\"class\":\"table table-hover table-striped align-middle border mb-0\",\"id\":\"table-simple-table-id\"},\"children\":[{\"tagName\":\"colgroup\",\"attributes\":{\"data-role\":\"table-colgroup\",\"id\":\"table-simple-colgroup-id\"},\"children\":[]},{\"tagName\":\"thead\",\"attributes\":{\"class\":\"table-dark\",\"data-role\":\"table-header\",\"id\":\"table-simple-header-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-header-row\",\"id\":\"table-simple-header-row-id\"},\"children\":[]}]},{\"tagName\":\"tbody\",\"attributes\":{\"data-role\":\"table-body\",\"id\":\"table-simple-body-id\"},\"children\":[]},{\"tagName\":\"tfoot\",\"attributes\":{\"data-role\":\"table-footer\",\"id\":\"table-simple-footer-id\"},\"children\":[{\"tagName\":\"tr\",\"attributes\":{\"data-role\":\"table-footer-row\",\"id\":\"table-simple-footer-row-id\"},\"children\":[]}]}]}]},\"single\":[{\"narration\":\"Build column widths\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildColGroup\",\"func\":\"fromCollection\"},{\"narration\":\"Build table header\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":\"buildHeader\",\"func\":\"fromCollection\"}],\"double\":[{\"narration\":\"Build table body\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"]},\"sourcePath\":{\"fileName\":\"data\",\"filePath\":[\"columns\"]},\"templateKey\":{\"rowKey\":\"buildBodyTr\",\"columnKey\":\"buildBodyCell\"},\"func\":\"twoDimensional\"}],\"rowOnColumn\":[{\"narration\":\"Build table body\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"]},\"templateKey\":{\"rowKey\":\"buildBodyTr\",\"columnKey\":\"buildBodyCell\"}}],\"options\":{\"serial\":[{\"narration\":\"Prepend the serial column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"colGroupForSerial\",\"func\":null},{\"narration\":\"Prepend the serial header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null},{\"narration\":\"Prepend the serial number cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"unshiftSerialToRows\"},\"sourcePath\":null,\"templateKey\":\"buildBodyCell\",\"func\":null},{\"narration\":\"Prepend the serial footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"headerSerialCell\",\"func\":null}],\"options\":[{\"narration\":\"Append the options column width to the table colgroup.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-colgroup\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"colGroupForOption\",\"func\":null},{\"narration\":\"Append the options header cell to the table header row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-header-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"headerForOption\",\"func\":null},{\"narration\":\"Append the options button cell into each table body row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-body\",\"filePath\":[\"children\"],\"action\":\"pushToRows\"},\"sourcePath\":null,\"templateKey\":\"optionsButtonCell\",\"func\":null},{\"narration\":\"Append the options footer cell to the table footer row.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-footer-row\",\"filePath\":[\"children\"],\"action\":\"push\"},\"sourcePath\":null,\"templateKey\":\"tdWithButtonSaveWarning\",\"func\":null}],\"search\":[{\"narration\":\"Prepend the search row to top of the table.\",\"destinationPath\":{\"fileName\":\"base\",\"dataRole\":\"table-parent\",\"filePath\":[\"children\"],\"action\":\"unshift\"},\"sourcePath\":null,\"templateKey\":\"tableSearch\",\"func\":null}]}}}"),
	select: {
		base: {
			tagName: "div",
			attributes: {
				"data-role": "select-container",
				id: "select-base-id"
			},
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
				attributes: {
					"data-role": "datalist-container",
					id: "data-list-simple-id"
				},
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
			attributes: {
				"data-role": "datalist-container",
				id: "data-list-base-id"
			},
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
			attributes: {
				class: "d-flex align-items-center gap-2",
				id: "search-input-base-id"
			},
			children: [{
				tagName: "label",
				textContent: "${label}",
				attributes: {
					class: "form-label mb-0 text-nowrap fw-semibold",
					for: "${id}",
					id: "search-input-label-id"
				}
			}, {
				tagName: "input",
				attributes: {
					type: "search",
					placeholder: "${placeholder}",
					class: "form-control",
					id: "search-input-field-id"
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
				attributes: {
					class: "card shadow-sm border-0",
					id: "form-simple-id"
				},
				children: [
					{
						tagName: "div",
						attributes: {
							class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
							id: "form-simple-header-id"
						},
						children: [{
							tagName: "h2",
							textContent: "Data Entry Form",
							attributes: {
								class: "h5 fw-bold mb-0 text-dark",
								id: "form-simple-title-id"
							}
						}]
					},
					{
						tagName: "div",
						attributes: {
							class: "card-body p-4",
							id: "form-simple-body-id"
						},
						children: [{
							tagName: "form",
							attributes: {
								id: "form-simple-form-id",
								"data-role": "form-body"
							},
							children: []
						}]
					},
					{
						tagName: "div",
						attributes: {
							class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
							id: "form-simple-footer-id"
						},
						children: [{
							tagName: "button",
							textContent: "Reset",
							attributes: {
								type: "reset",
								class: "btn btn-outline-secondary",
								id: "form-simple-reset-button-id"
							}
						}, {
							tagName: "button",
							textContent: "Submit",
							attributes: {
								type: "submit",
								class: "btn btn-primary",
								id: "form-simple-submit-button-id"
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
			attributes: {
				class: "card shadow-sm border-0",
				id: "form-base-id"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center",
						id: "form-base-header-id"
					},
					children: [{
						tagName: "h2",
						textContent: "Data Entry Form",
						attributes: {
							class: "h5 fw-bold mb-0 text-dark",
							id: "form-base-title-id"
						}
					}]
				},
				{
					tagName: "div",
					attributes: {
						class: "card-body p-4",
						id: "form-base-body-id"
					},
					children: [{
						tagName: "form",
						attributes: {
							id: "form-base-form-id",
							"data-role": "form-body"
						},
						children: []
					}]
				},
				{
					tagName: "div",
					attributes: {
						class: "card-footer bg-light px-4 py-3 d-flex justify-content-end gap-2",
						id: "form-base-footer-id"
					},
					children: [{
						tagName: "button",
						textContent: "Reset",
						attributes: {
							type: "reset",
							class: "btn btn-outline-secondary",
							id: "form-base-reset-button-id"
						}
					}, {
						tagName: "button",
						textContent: "Submit",
						attributes: {
							type: "submit",
							class: "btn btn-primary",
							id: "form-base-submit-button-id"
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
}, y = {
	name: "spec-repo",
	version: "1.6.1"
}, pe = ({ spec: e, tags: t, tagsSchema: n, definitions: r }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: y,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r
	});
}, me = le;
pe({
	spec: le,
	tags: ue,
	tagsSchema: de,
	definitions: fe
});
// node_modules/json-to-tag-validate/src/v4/index.js
function he({ inJson: e, inCatalog: t, inSpec: n }) {
	let r = e, i = t ?? n ?? ue, a = [];
	return re({
		inSpec: r,
		inFunc: (e) => {
			ce({
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
var ge = "http://www.w3.org/2000/svg", _e = /* @__PURE__ */ new Set(/* @__PURE__ */ "svg.path.symbol.use.g.circle.ellipse.rect.line.polyline.polygon.text.tspan.defs.clippath.mask.pattern.marker.lineargradient.radialgradient.stop.image.filter.fegaussianblur.femerge.femergenode".split(".")), ve = ({ inTagName: e }) => {
	let t = e?.toLowerCase();
	if (!t) return null;
	if (t === "checkbox") {
		let e = document.createElement("input");
		return e.type = "checkbox", e;
	}
	return _e.has(t) ? document.createElementNS(ge, t) : document.createElement(t);
}, ye = ({ inElement: e, inTextContent: t }) => (!e || t == null || (e.textContent = t), e), be = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), xe = "http://www.w3.org/1999/xlink", Se = ({ inElement: e, inAttributes: t }) => {
	let n = e, r = t;
	if (!n || !r || typeof r != "object") return n;
	let i = typeof SVGElement < "u" ? n instanceof SVGElement : n.namespaceURI === "http://www.w3.org/2000/svg";
	return Object.entries(r).forEach(([e, t]) => {
		if (e === "class") i ? n.setAttribute("class", String(t)) : n.className = t;
		else if (e === "xlink:href" || e === "href") {
			if (t != null) {
				let e = String(t);
				if (i) try {
					n.setAttributeNS(xe, "href", e);
				} catch {}
				n.setAttribute("href", e), n.setAttribute("xlink:href", e);
			}
		} else typeof t == "boolean" ? t ? n.setAttribute(e, "") : n.removeAttribute(e) : t != null && n.setAttribute(e, String(t));
	}), n;
}, Ce = ({ inElement: e, inClassList: t }) => {
	if (!e || !t) return e;
	let n = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((e) => typeof e == "string" && e.trim()) : [];
	return n.length && e.classList.add(...n), e;
}, we = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
	let t = ve({ inTagName: e.tagName });
	return t ? (ye({
		inElement: t,
		inTextContent: e.textContent,
		inTagName: e.tagName
	}), be({
		inElement: t,
		inProperties: e.properties
	}), Se({
		inElement: t,
		inAttributes: e.attributes
	}), Ce({
		inElement: t,
		inClassList: e.classList
	}), t) : null;
}, Te = (e = {}) => re({
	inSpec: e?.spec ?? e?.inSpec ?? e,
	inFunc: we
});
te({
	buildSpecElement: Te,
	buildSpecElementWithValidate: (e = {}) => {
		let t = e?.spec ?? e?.inSpec ?? e, n = he({ inJson: t });
		return n.isValid || console.warn("[json-to-tag] Specification validation issues:", n.errors), re({
			inSpec: t,
			inFunc: we
		});
	}
});
// node_modules/spec-to-dom/src/v2/register/meta.js
var Ee = {
	version: "2.1.1",
	name: "spec-to-dom"
}, De = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.specToDom = {
		meta: Ee,
		appendToDom: e
	});
}, Oe = ({ buildSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => {
	let i = e, a = t, o = n, s = r;
	s && console.log("renderToDom 1 (content):", i);
	let c = document.getElementById(a);
	return c ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? o === "prepend" ? c.prepend(...i) : c.append(...i) : o === "prepend" ? c.prepend(i) : (c.innerHTML = "", c.append(i)), s && console.log("renderToDom 2 (mounted):", c), c) : null;
};
De(Oe);
// node_modules/@keshavsoft/json-to-dom/src/v42/index.js
var ke = ({ jsonSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => Oe({
	buildSpec: Te(e),
	targetHtmlId: t,
	appendPosition: n,
	showLog: r
});
ee(ke);
// ../json-write-path/src/v4/utils/toArray.js
var Ae = (e) => Array.isArray(e) ? e : [e], je = (e, t, n) => {
	e[t] = n;
}, Me = {
	set: je,
	push: (e, t, n) => {
		e[t].push(...Ae(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...Ae(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(Ae(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(Ae(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, Ne = Object.defineProperty, Pe = Object.getOwnPropertySymbols, Fe = Object.prototype.hasOwnProperty, Ie = Object.prototype.propertyIsEnumerable, Le = Math.pow, Re = (e, t, n) => t in e ? Ne(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, ze = (e, t) => {
	for (var n in t ||= {}) Fe.call(t, n) && Re(e, n, t[n]);
	if (Pe) for (var n of Pe(t)) Ie.call(t, n) && Re(e, n, t[n]);
	return e;
}, Be = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, Ve = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, b = () => void 0, He = (e, t, n, r) => {
	if (r(), typeof e == "string" && typeof t == "string" && e.length === t.length && r(e.length), e === t) return !0;
	if (e === null || t === null || e === void 0 || t === void 0 || typeof e != typeof t || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		let r = S(e);
		return r === S(t) && (n.push({
			x: e,
			y: t,
			keys: null,
			length: r,
			i: 0
		}), !0);
	}
	if (typeof e == "object" && typeof t == "object") {
		let i = qe(e), a = qe(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, Ue = (e, t, n = b) => {
	let r = [];
	if (!He(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!He(We(e.x, t), We(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !x(o, i) || !x(a, i)) return !1;
			let s = a[i];
			if (!x(o, i) || !He(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, x = (e, t) => Object.prototype.hasOwnProperty.call(e, t), We = (e, t) => x(e, t) ? e[t] : void 0, Ge = 16383, Ke = 1e3, qe = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > Ke) throw new Ve(`Member name too long (maximum ${Ke} characters)`);
	return t;
}, S = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, Je = (e) => e instanceof RangeError && /call stack/i.test(e.message), C = (e) => Array.isArray(e), Ye = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), w = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, Xe = (e) => typeof e == "number", T = (e) => typeof e == "string", Ze = (e) => e === void 0, E = (e) => e !== void 0;
function Qe(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function $e(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function et(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var tt = class extends SyntaxError {
	constructor(e, t, n, r) {
		super(e), this.expected = t, this.found = n, this.location = r, this.name = "SyntaxError";
	}
	format(e) {
		let t = "Error: " + this.message;
		if (this.location) {
			let n = null, r = e.find((e) => e.source === this.location.source);
			r && (n = r.text.split(/\r\n|\n|\r/g));
			let i = this.location.start, a = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(i) : i, o = this.location.source + ":" + a.line + ":" + a.column;
			if (n) {
				let e = this.location.end, r = "".padEnd(a.line.toString().length, " "), s = n[i.line - 1], c = (i.line === e.line ? e.column : s.length + 1) - i.column || 1;
				t += "\n --> " + o + "\n" + r + " |\n" + a.line + " | " + s + "\n" + r + " | " + "".padEnd(i.column - 1, " ") + "".padEnd(c, "^");
			} else t += "\n at " + o;
		}
		return t;
	}
	static buildMessage(e, t) {
		function n(e) {
			return e.codePointAt(0).toString(16).toUpperCase();
		}
		let r = Object.prototype.hasOwnProperty.call(RegExp.prototype, "unicode") ? /* @__PURE__ */ RegExp("[\\p{C}\\p{Mn}\\p{Mc}]", "gu") : null;
		function i(e) {
			return r ? e.replace(r, (e) => "\\u{" + n(e) + "}") : e;
		}
		function a(e) {
			return i(e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (e) => "\\x0" + n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g, (e) => "\\x" + n(e)));
		}
		function o(e) {
			return i(e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (e) => "\\x0" + n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g, (e) => "\\x" + n(e)));
		}
		let s = {
			literal(e) {
				return "\"" + a(e.text) + "\"";
			},
			class(e) {
				let t = e.parts.map((e) => Array.isArray(e) ? o(e[0]) + "-" + o(e[1]) : o(e));
				return "[" + (e.inverted ? "^" : "") + t.join("") + "]" + (e.unicode ? "u" : "");
			},
			any() {
				return "any character";
			},
			end() {
				return "end of input";
			},
			other(e) {
				return e.description;
			}
		};
		function c(e) {
			return s[e.type](e);
		}
		function l(e) {
			let t = e.map(c);
			if (t.sort(), t.length > 0) {
				let e = 1;
				for (let n = 1; n < t.length; n++) t[n - 1] !== t[n] && (t[e] = t[n], e++);
				t.length = e;
			}
			switch (t.length) {
				case 1: return t[0];
				case 2: return t[0] + " or " + t[1];
				default: return t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
			}
		}
		function u(e) {
			return e ? "\"" + a(e) + "\"" : "end of input";
		}
		return "Expected " + l(e) + " but " + u(t) + " found.";
	}
};
function nt(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: Br }, a = Br, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", te = "true", ne = "false", g = "null", re = /^[,\]]/, _ = /^[+\-]/, v = /^[*\/]/, ie = /^[a-zA-Z_]/, ae = /^[\x80-\uFFFF_]/, oe = /^[a-zA-Z0-9_]/, se = /^[0-9@$\-]/, ce = /^[^\/\\]/, le = /^[gimsuy]/, ue = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, de = /^[\uD800-\uDBFF]/, fe = /^[\uDC00-\uDFFF]/, y = /^[0-9]/, pe = /^[1-9]/, me = /^[eE]/, he = /^["\\]/, ge = /^['\\]/, _e = /^[ -\uD7FF\uE000-\uFFFF]/, ve = /^[dD]/, ye = /^[89abAB]/, be = /^[c-fC-F]/, xe = /^[0-9a-fA-F]/, Se = /^[ \t\n\r]/, Ce = K([",", "]"], !1, !1, !1), we = G("length", !1), Te = G("count", !1), Ee = G("match", !1), De = G("search", !1), Oe = G("value", !1), ke = K(["+", "-"], !1, !1, !1), Ae = K(["*", "/"], !1, !1, !1), je = Fr("string"), Me = K([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1, !1), Ne = K([["", "￿"], "_"], !1, !1, !1), Pe = K([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1, !1), Fe = G("-", !1), Ie = K([
		["0", "9"],
		"@",
		"$",
		"-"
	], !1, !1, !1), Le = G("$", !1), Re = G("@", !1), ze = G("..", !1), Be = G(".", !1), Ve = G("*", !1), b = G("&&", !1), He = G("||", !1), Ue = G("!", !1), x = G("==", !1), We = G("!=", !1), Ge = G(">=", !1), Ke = G(">", !1), qe = G("<=", !1), S = G("<", !1), Je = G("=~", !1), C = G("in", !1), Ye = G("nin", !1), w = G("subsetof", !1), Xe = G("anyof", !1), T = G("noneof", !1), Ze = G("sizeof", !1), E = G("size", !1), nt = G("empty", !1), rt = G("true", !1), it = G("false", !1), at = G("null", !1), ot = G("{", !1), st = G("}", !1), ct = G("[", !1), lt = G("]", !1), ut = G(":", !1), dt = G(",", !1), ft = G("(", !1), pt = G(")", !1), mt = G("?", !1), ht = Fr("regex"), gt = G("/", !1), _t = K(["/", "\\"], !0, !1, !1), D = G("\\", !1), vt = Nr(), O = K([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), yt = K([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), bt = K([["\ud800", "\udbff"]], !1, !1, !1), xt = K([["\udc00", "\udfff"]], !1, !1, !1), k = K([["0", "9"]], !1, !1, !1), St = Fr("number"), Ct = G("0", !1), A = K([["1", "9"]], !1, !1, !1), wt = Fr("integer"), Tt = K(["e", "E"], !1, !1, !1), Et = G("\"", !1), Dt = G("'", !1), Ot = K(["\"", "\\"], !1, !1, !1), kt = K(["'", "\\"], !1, !1, !1), At = K([[" ", "퟿"], ["", "￿"]], !1, !1, !1), jt = G("b", !1), Mt = G("f", !1), Nt = G("n", !1), Pt = G("r", !1), Ft = G("t", !1), It = G("u", !1), Lt = K(["d", "D"], !1, !1, !1), Rt = K([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), zt = G("\\u", !1), Bt = K([["c", "f"], ["C", "F"]], !1, !1, !1), Vt = K([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), Ht = K([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function Ut(e) {
		return {
			type: "root",
			next: Qe(e)
		};
	}
	function Wt(e) {
		return e.map((e) => e[1]);
	}
	function Gt(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function Kt(e) {
		return e;
	}
	function qt(e) {
		return {
			type: "dotdot",
			value: e
		};
	}
	function Jt() {
		return { type: "wildcard" };
	}
	function Yt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Xt() {
		return { type: "wildcard" };
	}
	function Zt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Qt(e) {
		return e;
	}
	function $t(e) {
		return e;
	}
	function en(e, t) {
		return t.length > 0 ? {
			type: "bracketExpression",
			value: {
				type: "unions",
				values: [e, ...t.map((e) => e[3])]
			}
		} : {
			type: e.type === "numericLiteral" || e.type === "stringLiteral" || e.type === "identifier" ? "bracketMember" : "bracketExpression",
			value: e
		};
	}
	function tn(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function nn(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function rn(e, t) {
		return et(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function an(e, t) {
		return et(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function on(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function sn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function cn(e, t) {
		return t !== null || $e(e);
	}
	function ln(e, t) {
		if (t === null) return e;
		let n = t[1];
		return n.operator === "reg" ? {
			type: "comparator",
			operator: "reg",
			left: e,
			right: n.right
		} : n.operator === "empty" ? {
			type: "comparator",
			operator: "empty",
			left: e,
			right: null
		} : {
			type: "comparator",
			operator: n.operator,
			left: e,
			right: n.right
		};
	}
	function un(e, t) {
		return {
			operator: e,
			right: t
		};
	}
	function dn(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function fn() {
		return { operator: "empty" };
	}
	function pn() {
		return "eq";
	}
	function mn() {
		return "ne";
	}
	function hn() {
		return "le";
	}
	function gn() {
		return "lt";
	}
	function _n() {
		return "ge";
	}
	function vn() {
		return "gt";
	}
	function yn() {
		return "in";
	}
	function bn() {
		return "nin";
	}
	function xn() {
		return "subsetof";
	}
	function Sn() {
		return "anyof";
	}
	function Cn() {
		return "noneof";
	}
	function wn() {
		return "sizeof";
	}
	function Tn() {
		return "size";
	}
	function En(e) {
		return {
			type: "groupExpression",
			value: e
		};
	}
	function Dn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function On() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function kn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function An(e, t) {
		return {
			type: "functionCall",
			name: e,
			args: t || []
		};
	}
	function jn() {
		return "length";
	}
	function Mn() {
		return "count";
	}
	function Nn() {
		return "match";
	}
	function Pn() {
		return "search";
	}
	function Fn() {
		return "value";
	}
	function In(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function Ln(e, t) {
		return t.length === 0 ? e : et(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function Rn(e, t) {
		return t.length === 0 ? e : et(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "*" ? "multi" : "div",
			left: e,
			right: t[3]
		}));
	}
	function zn(e) {
		return {
			type: "groupOperation",
			value: e
		};
	}
	function Bn(e) {
		return {
			type: "root",
			next: Qe(e)
		};
	}
	function Vn(e) {
		return {
			type: "current",
			next: Qe(e)
		};
	}
	function Hn(e, t, n) {
		return {
			type: "slices",
			start: e === null ? null : e[0],
			end: t === null ? null : t[0],
			step: n ? n[2] === null ? null : n[2] : null
		};
	}
	function Un() {
		return { type: "wildcard" };
	}
	function Wn(e) {
		return {
			type: "numericLiteral",
			value: e
		};
	}
	function Gn(e) {
		return {
			type: "stringLiteral",
			value: _a(e)
		};
	}
	function Kn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function qn(e, t) {
		return {
			type: "value",
			subtype: "regex",
			value: e,
			opts: t || ""
		};
	}
	function Jn(e) {
		return {
			type: "value",
			subtype: "string",
			value: e
		};
	}
	function Yn(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function Xn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function Zn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Qn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function $n(e) {
		return e;
	}
	function er(e) {
		for (let [t] of e || []) _a(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function tr(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function nr(e, t) {
		return [e, t.value];
	}
	function rr(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function ir(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function ar(e) {
		return _a(e);
	}
	function or(e) {
		return _a(e);
	}
	function sr() {
		return "true";
	}
	function cr() {
		return "false";
	}
	function lr() {
		return "null";
	}
	function ur(e) {
		return _a(e);
	}
	function dr() {
		return "true";
	}
	function fr() {
		return "false";
	}
	function pr() {
		return "null";
	}
	function mr(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function hr(e) {
		return e.join("");
	}
	function gr(e, t) {
		let n = parseFloat(U());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && Mr("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function _r() {
		let e = parseInt(U(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && Mr("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function vr(e) {
		return e.join("");
	}
	function yr(e) {
		return e.join("");
	}
	function br(e) {
		return e;
	}
	function xr() {
		return "\"";
	}
	function Sr(e) {
		return e;
	}
	function Cr(e) {
		return e;
	}
	function wr() {
		return "'";
	}
	function Tr(e) {
		return e;
	}
	function Er() {
		return "\\";
	}
	function Dr() {
		return "/";
	}
	function Or() {
		return "\b";
	}
	function kr() {
		return "\f";
	}
	function j() {
		return "\n";
	}
	function Ar() {
		return "\r";
	}
	function M() {
		return "	";
	}
	function N(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function jr(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function P(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let F = t.peg$currPos | 0, I = F, L = [{
		line: 1,
		column: 1
	}], R = F, z = t.peg$maxFailExpected || [], B = t.peg$silentFails | 0, V = /* @__PURE__ */ new Map(), H;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function U() {
		return e.substring(I, F);
	}
	function Mr(e, t) {
		throw t = t === void 0 ? Lr(I, F) : t, Rr(e, t);
	}
	function W(t = F) {
		let n = e.codePointAt(t);
		return n === void 0 ? "" : String.fromCodePoint(n);
	}
	function G(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function K(e, t, n, r) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n,
			unicode: r
		};
	}
	function Nr() {
		return { type: "any" };
	}
	function Pr() {
		return { type: "end" };
	}
	function Fr(e) {
		return {
			type: "other",
			description: e
		};
	}
	function Ir(t) {
		let n = L[t], r;
		if (n) return n;
		if (t >= L.length) r = L.length - 1;
		else for (r = t; !L[--r];);
		for (n = L[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return L[t] = n, n;
	}
	function Lr(e, t, n) {
		let i = Ir(e), a = Ir(t), o = {
			source: r,
			start: {
				offset: e,
				line: i.line,
				column: i.column
			},
			end: {
				offset: t,
				line: a.line,
				column: a.column
			}
		};
		return n && r && typeof r.offset == "function" && (o.start = r.offset(o.start), o.end = r.offset(o.end)), o;
	}
	function q(e) {
		F < R || (F > R && (R = F, z = []), z.push(e));
	}
	function Rr(e, t) {
		return new tt(e, null, null, t);
	}
	function zr(e, t, n) {
		return new tt(tt.buildMessage(e, t), e, t, n);
	}
	function Br() {
		let e, t, r, i;
		return e = F, t = Si(), t === n ? (F = e, e = n) : (r = Vr(), i = ga(), i === n ? (F = e, e = n) : (I = e, e = Ut(r))), e;
	}
	function Vr() {
		let e, t, r, i, a;
		for (e = F, t = [], r = F, i = $(), a = Hr(), a === n ? (F = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = F, i = $(), a = Hr(), a === n ? (F = r, r = n) : (i = [i, a], r = i);
		return I = e, t = Wt(t), e = t, e;
	}
	function Hr() {
		let e;
		return e = Wr(), e === n && (e = Ur()), e;
	}
	function Ur() {
		let e, t, r;
		return e = F, t = Ti(), t === n ? (F = e, e = n) : (r = Gr(), r === n ? (F = e, e = n) : (I = e, e = Gt(r))), e === n && (e = F, t = qr(), t !== n && (I = e, t = Kt(t)), e = t), e;
	}
	function Wr() {
		let e, t, r;
		return e = F, t = wi(), t === n ? (F = e, e = n) : (r = Kr(), r === n ? (F = e, e = n) : (I = e, e = qt(r))), e;
	}
	function Gr() {
		let e, t;
		return e = F, t = Ei(), t !== n && (I = e, t = Jt()), e = t, e === n && (e = F, t = xi(), t !== n && (I = e, t = Yt(t)), e = t), e;
	}
	function Kr() {
		let e, t;
		return e = F, t = Ei(), t !== n && (I = e, t = Xt()), e = t, e === n && (e = F, t = xi(), t !== n && (I = e, t = Zt(t)), e = t, e === n && (e = F, t = qr(), t !== n && (I = e, t = Qt(t)), e = t)), e;
	}
	function qr() {
		let e, t, r, i;
		return e = F, t = Xi(), t === n ? (F = e, e = n) : ($(), r = Jr(), r === n ? (F = e, e = n) : ($(), i = Zi(), i === n ? (F = e, e = n) : (I = e, e = $t(r)))), e;
	}
	function Jr() {
		let e, t, r, i, a, o, s, c;
		if (e = F, t = ui(), t !== n) {
			for (r = [], i = F, a = $(), o = X(), o === n ? (F = i, i = n) : (s = $(), c = ui(), c === n ? (F = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = F, a = $(), o = X(), o === n ? (F = i, i = n) : (s = $(), c = ui(), c === n ? (F = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			I = e, e = en(t, r);
		} else F = e, e = n;
		return e;
	}
	function Yr() {
		let t, r, i, a, o, s, c, l, u;
		return t = F, r = ta(), r === n ? (F = t, t = n) : ($(), i = $i(), i === n ? (F = t, t = n) : ($(), a = Xr(), a === n ? (F = t, t = n) : ($(), o = ea(), o === n ? (F = t, t = n) : (s = F, B++, c = F, l = $(), u = e.charAt(F), re.test(u) ? F++ : (u = n, B === 0 && q(Ce)), u === n ? (F = c, c = n) : (l = [l, u], c = l), B--, c === n ? s = n : (F = s, s = void 0), s === n ? (F = t, t = n) : (I = t, t = tn(a)))))), t === n && (t = F, r = ta(), r === n ? (F = t, t = n) : ($(), i = Xr(), i === n ? (F = t, t = n) : (I = t, t = nn(i)))), t;
	}
	function Xr() {
		let e, t, r, i, a, o, s, c, l = F * 91 + 10, u = V.get(l);
		if (u) return F = u.nextPos, u.result;
		if (e = F, t = Zr(), t !== n) {
			for (r = [], i = F, a = $(), o = Oi(), o === n ? (F = i, i = n) : (s = $(), c = Zr(), c === n ? (F = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = F, a = $(), o = Oi(), o === n ? (F = i, i = n) : (s = $(), c = Zr(), c === n ? (F = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			I = e, e = rn(t, r);
		} else F = e, e = n;
		return V.set(l, {
			nextPos: F,
			result: e
		}), e;
	}
	function Zr() {
		let e, t, r, i, a, o, s, c;
		if (e = F, t = Qr(), t !== n) {
			for (r = [], i = F, a = $(), o = Di(), o === n ? (F = i, i = n) : (s = $(), c = Qr(), c === n ? (F = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = F, a = $(), o = Di(), o === n ? (F = i, i = n) : (s = $(), c = Qr(), c === n ? (F = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			I = e, e = an(t, r);
		} else F = e, e = n;
		return e;
	}
	function Qr() {
		let e, t, r, i, a;
		return e = F, t = ki(), t === n ? (F = e, e = n) : ($(), r = $i(), r === n ? (F = e, e = n) : ($(), i = Xr(), i === n ? (F = e, e = n) : ($(), a = ea(), a === n ? (F = e, e = n) : (I = e, e = on(i))))), e === n && (e = F, t = ki(), t === n ? (F = e, e = n) : ($(), r = ni(), r === n ? (F = e, e = n) : (I = e, e = sn(r))), e === n && (e = $r())), e;
	}
	function $r() {
		let e, t, r, i, a;
		return e = F, t = Y(), t === n ? (F = e, e = n) : (r = F, i = $(), a = ei(), a === n ? (F = r, r = n) : (i = [i, a], r = i), r === n && (r = null), I = F, i = cn(t, r), i = i ? void 0 : n, i === n ? (F = e, e = n) : (I = e, e = ln(t, r))), e === n && (e = ni()), e;
	}
	function ei() {
		let e, t, r;
		return e = F, t = ti(), t === n ? (F = e, e = n) : ($(), r = Y(), r === n ? (F = e, e = n) : (I = e, e = un(t, r))), e === n && (e = F, t = Ii(), t === n ? (F = e, e = n) : ($(), r = di(), r === n ? (F = e, e = n) : (I = e, e = dn(r))), e === n && (e = F, t = Wi(), t !== n && (I = e, t = fn()), e = t)), e;
	}
	function ti() {
		let e, t;
		return e = F, t = Ai(), t !== n && (I = e, t = pn()), e = t, e === n && (e = F, t = ji(), t !== n && (I = e, t = mn()), e = t, e === n && (e = F, t = Pi(), t !== n && (I = e, t = hn()), e = t, e === n && (e = F, t = Fi(), t !== n && (I = e, t = gn()), e = t, e === n && (e = F, t = Mi(), t !== n && (I = e, t = _n()), e = t, e === n && (e = F, t = Ni(), t !== n && (I = e, t = vn()), e = t, e === n && (e = F, t = Li(), t !== n && (I = e, t = yn()), e = t, e === n && (e = F, t = Ri(), t !== n && (I = e, t = bn()), e = t, e === n && (e = F, t = zi(), t !== n && (I = e, t = xn()), e = t, e === n && (e = F, t = Bi(), t !== n && (I = e, t = Sn()), e = t, e === n && (e = F, t = Vi(), t !== n && (I = e, t = Cn()), e = t, e === n && (e = F, t = Hi(), t !== n && (I = e, t = wn()), e = t, e === n && (e = F, t = Ui(), t !== n && (I = e, t = Tn()), e = t)))))))))))), e;
	}
	function ni() {
		let e, t, r, i;
		return e = F, t = $i(), t === n ? (F = e, e = n) : ($(), r = Xr(), r === n ? (F = e, e = n) : ($(), i = ea(), i === n ? (F = e, e = n) : (I = e, e = En(r)))), e === n && (e = ri(), e === n && (e = ci(), e === n && (e = F, t = Gi(), t !== n && (I = e, t = Dn()), e = t, e === n && (e = F, t = Ki(), t !== n && (I = e, t = On()), e = t, e === n && (e = F, t = qi(), t !== n && (I = e, t = kn()), e = t))))), e;
	}
	function ri() {
		let e, t, r, i, a;
		return e = F, t = ii(), t === n ? (F = e, e = n) : (r = $i(), r === n ? (F = e, e = n) : ($(), i = J(), i === n && (i = null), $(), a = ea(), a === n ? (F = e, e = n) : (I = e, e = An(t, i)))), e;
	}
	function ii() {
		let t, r;
		return t = F, e.substr(F, 6) === o ? (r = o, F += 6) : (r = n, B === 0 && q(we)), r !== n && (I = t, r = jn()), t = r, t === n && (t = F, e.substr(F, 5) === s ? (r = s, F += 5) : (r = n, B === 0 && q(Te)), r !== n && (I = t, r = Mn()), t = r, t === n && (t = F, e.substr(F, 5) === c ? (r = c, F += 5) : (r = n, B === 0 && q(Ee)), r !== n && (I = t, r = Nn()), t = r, t === n && (t = F, e.substr(F, 6) === l ? (r = l, F += 6) : (r = n, B === 0 && q(De)), r !== n && (I = t, r = Pn()), t = r, t === n && (t = F, e.substr(F, 5) === u ? (r = u, F += 5) : (r = n, B === 0 && q(Oe)), r !== n && (I = t, r = Fn()), t = r)))), t;
	}
	function J() {
		let e, t, r, i, a, o, s, c;
		if (e = F, t = ai(), t !== n) {
			for (r = [], i = F, a = $(), o = X(), o === n ? (F = i, i = n) : (s = $(), c = ai(), c === n ? (F = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = F, a = $(), o = X(), o === n ? (F = i, i = n) : (s = $(), c = ai(), c === n ? (F = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			I = e, e = In(t, r);
		} else F = e, e = n;
		return e;
	}
	function ai() {
		let e;
		return e = Y(), e === n && (e = pi()), e;
	}
	function Y() {
		let t, r, i, a, o, s, c, l, u = F * 91 + 21, d = V.get(u);
		if (d) return F = d.nextPos, d.result;
		if (t = F, r = oi(), r !== n) {
			for (i = [], a = F, o = $(), s = e.charAt(F), _.test(s) ? F++ : (s = n, B === 0 && q(ke)), s === n ? (F = a, a = n) : (c = $(), l = oi(), l === n ? (F = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = F, o = $(), s = e.charAt(F), _.test(s) ? F++ : (s = n, B === 0 && q(ke)), s === n ? (F = a, a = n) : (c = $(), l = oi(), l === n ? (F = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			I = t, t = Ln(r, i);
		} else F = t, t = n;
		return V.set(u, {
			nextPos: F,
			result: t
		}), t;
	}
	function oi() {
		let t, r, i, a, o, s, c, l;
		if (t = F, r = si(), r !== n) {
			for (i = [], a = F, o = $(), s = e.charAt(F), v.test(s) ? F++ : (s = n, B === 0 && q(Ae)), s === n ? (F = a, a = n) : (c = $(), l = si(), l === n ? (F = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = F, o = $(), s = e.charAt(F), v.test(s) ? F++ : (s = n, B === 0 && q(Ae)), s === n ? (F = a, a = n) : (c = $(), l = si(), l === n ? (F = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			I = t, t = Rn(r, i);
		} else F = t, t = n;
		return t;
	}
	function si() {
		let e, t, r, i;
		return e = F, t = $i(), t === n ? (F = e, e = n) : ($(), r = Y(), r === n ? (F = e, e = n) : ($(), i = ea(), i === n ? (F = e, e = n) : (I = e, e = zn(r)))), e === n && (e = ri(), e === n && (e = fi(), e === n && (e = ci()))), e;
	}
	function ci() {
		let e, t, r;
		return e = F, t = Si(), t === n ? (F = e, e = n) : (r = Vr(), r === n ? (F = e, e = n) : (I = e, e = Bn(r))), e === n && (e = F, t = Ci(), t === n ? (F = e, e = n) : (r = Vr(), r === n ? (F = e, e = n) : (I = e, e = Vn(r)))), e;
	}
	function li() {
		let e, t, r, i, a, o, s, c, l;
		return e = F, t = F, r = la(), r === n ? (F = t, t = n) : (i = $(), r = [r, i], t = r), t === n && (t = null), r = Qi(), r === n ? (F = e, e = n) : (i = $(), a = F, o = la(), o === n ? (F = a, a = n) : (s = $(), o = [o, s], a = o), a === n && (a = null), o = F, s = Qi(), s === n ? (F = o, o = n) : (c = $(), l = la(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), I = e, e = Hn(t, a, o)), e;
	}
	function ui() {
		let e, t;
		return e = Yr(), e === n && (e = li(), e === n && (e = F, t = Ei(), t !== n && (I = e, t = Un()), e = t, e === n && (e = F, t = la(), t !== n && (I = e, t = Wn(t)), e = t, e === n && (e = F, t = da(), t !== n && (I = e, t = Gn(t)), e = t, e === n && (e = F, t = yi(), t !== n && (I = e, t = Kn(t)), e = t))))), e;
	}
	function di() {
		let e, t, r;
		return e = F, t = na(), t === n ? (F = e, e = n) : (r = ra(), I = e, e = qn(t, r)), e;
	}
	function fi() {
		let e, t;
		return e = F, t = pi(), t !== n && (I = e, t = Jn(t)), e = t, e === n && (e = F, t = sa(), t !== n && (I = e, t = Yn(t)), e = t, e === n && (e = mi(), e === n && (e = _i(), e === n && (e = F, t = Gi(), t !== n && (I = e, t = Xn()), e = t, e === n && (e = F, t = Ki(), t !== n && (I = e, t = Zn()), e = t, e === n && (e = F, t = qi(), t !== n && (I = e, t = Qn()), e = t)))))), e;
	}
	function pi() {
		let e, t;
		return B++, e = F, t = da(), t !== n && (I = e, t = $n(t)), e = t, B--, e === n && (t = n, B === 0 && q(je)), e;
	}
	function mi() {
		let e, t, r, i;
		return e = F, t = Ji(), t === n ? (F = e, e = n) : ($(), r = hi(), r === n && (r = null), $(), i = Yi(), i === n ? (F = e, e = n) : (I = e, e = er(r))), e;
	}
	function hi() {
		let e, t, r, i, a, o, s, c;
		if (e = F, t = gi(), t !== n) {
			for (r = [], i = F, a = $(), o = X(), o === n ? (F = i, i = n) : (s = $(), c = gi(), c === n ? (F = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = F, a = $(), o = X(), o === n ? (F = i, i = n) : (s = $(), c = gi(), c === n ? (F = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			I = e, e = tr(t, r);
		} else F = e, e = n;
		return e;
	}
	function gi() {
		let e, t, r, i;
		return e = F, t = da(), t === n ? (F = e, e = n) : ($(), r = Qi(), r === n ? (F = e, e = n) : ($(), i = fi(), i === n ? (F = e, e = n) : (I = e, e = nr(t, i)))), e;
	}
	function _i() {
		let e, t, r, i;
		return e = F, t = Xi(), t === n ? (F = e, e = n) : ($(), r = vi(), r === n && (r = null), $(), i = Zi(), i === n ? (F = e, e = n) : (I = e, e = rr(r))), e;
	}
	function vi() {
		let e, t, r, i, a, o, s, c;
		if (e = F, t = fi(), t !== n) {
			for (r = [], i = F, a = $(), o = X(), o === n ? (F = i, i = n) : (s = $(), c = fi(), c === n ? (F = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = F, a = $(), o = X(), o === n ? (F = i, i = n) : (s = $(), c = fi(), c === n ? (F = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			I = e, e = ir(t, r);
		} else F = e, e = n;
		return e;
	}
	function yi() {
		let t, r, i, a, o, s;
		if (t = F, r = F, i = F, a = e.charAt(F), ie.test(a) ? F++ : (a = n, B === 0 && q(Me)), a !== n) {
			for (o = [], s = bi(); s !== n;) o.push(s), s = bi();
			a = [a, o], i = a;
		} else F = i, i = n;
		if (r = i === n ? i : e.substring(r, F), r !== n && (I = t, r = ar(r)), t = r, t === n) {
			if (t = F, r = F, i = [], a = e.charAt(F), ae.test(a) ? F++ : (a = n, B === 0 && q(Ne)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(F), ae.test(a) ? F++ : (a = n, B === 0 && q(Ne));
			else i = n;
			r = i === n ? i : e.substring(r, F), r !== n && (I = t, r = or(r)), t = r, t === n && (t = F, r = Gi(), r !== n && (I = t, r = sr()), t = r, t === n && (t = F, r = Ki(), r !== n && (I = t, r = cr()), t = r, t === n && (t = F, r = qi(), r !== n && (I = t, r = lr()), t = r)));
		}
		return t;
	}
	function bi() {
		let t, r, i, a;
		return t = e.charAt(F), oe.test(t) ? F++ : (t = n, B === 0 && q(Pe)), t === n && (t = F, e.charCodeAt(F) === 45 ? (r = "-", F++) : (r = n, B === 0 && q(Fe)), r === n ? (F = t, t = n) : (i = F, B++, a = e.charAt(F), se.test(a) ? F++ : (a = n, B === 0 && q(Ie)), B--, a === n ? i = void 0 : (F = i, i = n), i === n ? (F = t, t = n) : (r = [r, i], t = r))), t;
	}
	function xi() {
		let e, t;
		return e = F, t = ia(), t !== n && (I = e, t = ur(t)), e = t, e === n && (e = F, t = Gi(), t !== n && (I = e, t = dr()), e = t, e === n && (e = F, t = Ki(), t !== n && (I = e, t = fr()), e = t, e === n && (e = F, t = qi(), t !== n && (I = e, t = pr()), e = t))), e;
	}
	function Si() {
		let t;
		return e.charCodeAt(F) === 36 ? (t = "$", F++) : (t = n, B === 0 && q(Le)), t;
	}
	function Ci() {
		let t;
		return e.charCodeAt(F) === 64 ? (t = "@", F++) : (t = n, B === 0 && q(Re)), t;
	}
	function wi() {
		let t;
		return e.substr(F, 2) === ".." ? (t = "..", F += 2) : (t = n, B === 0 && q(ze)), t;
	}
	function Ti() {
		let t;
		return e.charCodeAt(F) === 46 ? (t = ".", F++) : (t = n, B === 0 && q(Be)), t;
	}
	function Ei() {
		let t;
		return e.charCodeAt(F) === 42 ? (t = "*", F++) : (t = n, B === 0 && q(Ve)), t;
	}
	function Di() {
		let t;
		return e.substr(F, 2) === "&&" ? (t = "&&", F += 2) : (t = n, B === 0 && q(b)), t;
	}
	function Oi() {
		let t;
		return e.substr(F, 2) === "||" ? (t = "||", F += 2) : (t = n, B === 0 && q(He)), t;
	}
	function ki() {
		let t;
		return e.charCodeAt(F) === 33 ? (t = "!", F++) : (t = n, B === 0 && q(Ue)), t;
	}
	function Ai() {
		let t;
		return e.substr(F, 2) === "==" ? (t = "==", F += 2) : (t = n, B === 0 && q(x)), t;
	}
	function ji() {
		let t;
		return e.substr(F, 2) === "!=" ? (t = "!=", F += 2) : (t = n, B === 0 && q(We)), t;
	}
	function Mi() {
		let t;
		return e.substr(F, 2) === ">=" ? (t = ">=", F += 2) : (t = n, B === 0 && q(Ge)), t;
	}
	function Ni() {
		let t;
		return e.charCodeAt(F) === 62 ? (t = ">", F++) : (t = n, B === 0 && q(Ke)), t;
	}
	function Pi() {
		let t;
		return e.substr(F, 2) === "<=" ? (t = "<=", F += 2) : (t = n, B === 0 && q(qe)), t;
	}
	function Fi() {
		let t;
		return e.charCodeAt(F) === 60 ? (t = "<", F++) : (t = n, B === 0 && q(S)), t;
	}
	function Ii() {
		let t;
		return e.substr(F, 2) === "=~" ? (t = "=~", F += 2) : (t = n, B === 0 && q(Je)), t;
	}
	function Li() {
		let t, r, i, a;
		return t = F, e.substr(F, 2) === "in" ? (r = "in", F += 2) : (r = n, B === 0 && q(C)), r === n ? (F = t, t = n) : (i = F, B++, a = Q(), B--, a === n ? i = void 0 : (F = i, i = n), i === n ? (F = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ri() {
		let t, r, i, a;
		return t = F, e.substr(F, 3) === "nin" ? (r = "nin", F += 3) : (r = n, B === 0 && q(Ye)), r === n ? (F = t, t = n) : (i = F, B++, a = Q(), B--, a === n ? i = void 0 : (F = i, i = n), i === n ? (F = t, t = n) : (r = [r, i], t = r)), t;
	}
	function zi() {
		let t, r, i, a;
		return t = F, e.substr(F, 8) === d ? (r = d, F += 8) : (r = n, B === 0 && q(w)), r === n ? (F = t, t = n) : (i = F, B++, a = Q(), B--, a === n ? i = void 0 : (F = i, i = n), i === n ? (F = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Bi() {
		let t, r, i, a;
		return t = F, e.substr(F, 5) === f ? (r = f, F += 5) : (r = n, B === 0 && q(Xe)), r === n ? (F = t, t = n) : (i = F, B++, a = Q(), B--, a === n ? i = void 0 : (F = i, i = n), i === n ? (F = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Vi() {
		let t, r, i, a;
		return t = F, e.substr(F, 6) === p ? (r = p, F += 6) : (r = n, B === 0 && q(T)), r === n ? (F = t, t = n) : (i = F, B++, a = Q(), B--, a === n ? i = void 0 : (F = i, i = n), i === n ? (F = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Hi() {
		let t, r, i, a;
		return t = F, e.substr(F, 6) === m ? (r = m, F += 6) : (r = n, B === 0 && q(Ze)), r === n ? (F = t, t = n) : (i = F, B++, a = Q(), B--, a === n ? i = void 0 : (F = i, i = n), i === n ? (F = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ui() {
		let t, r, i, a;
		return t = F, e.substr(F, 4) === ee ? (r = ee, F += 4) : (r = n, B === 0 && q(E)), r === n ? (F = t, t = n) : (i = F, B++, a = Q(), B--, a === n ? i = void 0 : (F = i, i = n), i === n ? (F = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = F, e.substr(F, 5) === h ? (r = h, F += 5) : (r = n, B === 0 && q(nt)), r === n ? (F = t, t = n) : (i = F, B++, a = Q(), B--, a === n ? i = void 0 : (F = i, i = n), i === n ? (F = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = F, e.substr(F, 4) === te ? (r = te, F += 4) : (r = n, B === 0 && q(rt)), r === n ? (F = t, t = n) : (i = F, B++, a = Q(), B--, a === n ? i = void 0 : (F = i, i = n), i === n ? (F = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = F, e.substr(F, 5) === ne ? (r = ne, F += 5) : (r = n, B === 0 && q(it)), r === n ? (F = t, t = n) : (i = F, B++, a = Q(), B--, a === n ? i = void 0 : (F = i, i = n), i === n ? (F = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = F, e.substr(F, 4) === g ? (r = g, F += 4) : (r = n, B === 0 && q(at)), r === n ? (F = t, t = n) : (i = F, B++, a = Q(), B--, a === n ? i = void 0 : (F = i, i = n), i === n ? (F = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t;
		return e.charCodeAt(F) === 123 ? (t = "{", F++) : (t = n, B === 0 && q(ot)), t;
	}
	function Yi() {
		let t;
		return e.charCodeAt(F) === 125 ? (t = "}", F++) : (t = n, B === 0 && q(st)), t;
	}
	function Xi() {
		let t;
		return e.charCodeAt(F) === 91 ? (t = "[", F++) : (t = n, B === 0 && q(ct)), t;
	}
	function Zi() {
		let t;
		return e.charCodeAt(F) === 93 ? (t = "]", F++) : (t = n, B === 0 && q(lt)), t;
	}
	function Qi() {
		let t;
		return e.charCodeAt(F) === 58 ? (t = ":", F++) : (t = n, B === 0 && q(ut)), t;
	}
	function X() {
		let t;
		return e.charCodeAt(F) === 44 ? (t = ",", F++) : (t = n, B === 0 && q(dt)), t;
	}
	function $i() {
		let t;
		return e.charCodeAt(F) === 40 ? (t = "(", F++) : (t = n, B === 0 && q(ft)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(F) === 41 ? (t = ")", F++) : (t = n, B === 0 && q(pt)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(F) === 63 ? (t = "?", F++) : (t = n, B === 0 && q(mt)), t;
	}
	function na() {
		let t, r, i, a, o, s;
		if (B++, t = F, e.charCodeAt(F) === 47 ? (r = "/", F++) : (r = n, B === 0 && q(gt)), r !== n) {
			for (i = [], a = e.charAt(F), ce.test(a) ? F++ : (a = n, B === 0 && q(_t)), a === n && (a = F, e.charCodeAt(F) === 92 ? (o = "\\", F++) : (o = n, B === 0 && q(D)), o === n ? (F = a, a = n) : (e.length > F ? (s = e.charAt(F), F++) : (s = n, B === 0 && q(vt)), s === n ? (F = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(F), ce.test(a) ? F++ : (a = n, B === 0 && q(_t)), a === n && (a = F, e.charCodeAt(F) === 92 ? (o = "\\", F++) : (o = n, B === 0 && q(D)), o === n ? (F = a, a = n) : (e.length > F ? (s = e.charAt(F), F++) : (s = n, B === 0 && q(vt)), s === n ? (F = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(F) === 47 ? (a = "/", F++) : (a = n, B === 0 && q(gt)), a === n ? (F = t, t = n) : (I = t, t = mr(i));
		} else F = t, t = n;
		return B--, t === n && (r = n, B === 0 && q(ht)), t;
	}
	function ra() {
		let t, r, i;
		for (t = F, r = [], i = e.charAt(F), le.test(i) ? F++ : (i = n, B === 0 && q(O)); i !== n;) r.push(i), i = e.charAt(F), le.test(i) ? F++ : (i = n, B === 0 && q(O));
		return I = t, r = hr(r), t = r, t;
	}
	function ia() {
		let t, r, i, a, o;
		if (t = F, r = F, i = aa(), i !== n) {
			for (a = [], o = oa(); o !== n;) a.push(o), o = oa();
			i = [i, a], r = i;
		} else F = r, r = n;
		return t = r === n ? r : e.substring(t, F), t;
	}
	function aa() {
		let t, r, i;
		return t = e.charAt(F), ue.test(t) ? F++ : (t = n, B === 0 && q(yt)), t === n && (t = F, r = e.charAt(F), de.test(r) ? F++ : (r = n, B === 0 && q(bt)), r === n ? (F = t, t = n) : (i = e.charAt(F), fe.test(i) ? F++ : (i = n, B === 0 && q(xt)), i === n ? (F = t, t = n) : (r = [r, i], t = r))), t;
	}
	function oa() {
		let t;
		return t = aa(), t === n && (t = e.charAt(F), y.test(t) ? F++ : (t = n, B === 0 && q(k))), t;
	}
	function sa() {
		let t, r, i, a, o, s, c;
		if (B++, t = F, e.charCodeAt(F) === 45 ? (r = "-", F++) : (r = n, B === 0 && q(Fe)), r === n && (r = null), i = ca(), i !== n) {
			if (a = F, e.charCodeAt(F) === 46 ? (o = ".", F++) : (o = n, B === 0 && q(Be)), o !== n) {
				if (s = [], c = e.charAt(F), y.test(c) ? F++ : (c = n, B === 0 && q(k)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(F), y.test(c) ? F++ : (c = n, B === 0 && q(k));
				else s = n;
				s === n ? (F = a, a = n) : (o = [o, s], a = o);
			} else F = a, a = n;
			a === n && (a = null), o = ua(), o === n && (o = null), I = t, t = gr(a, o);
		} else F = t, t = n;
		return B--, t === n && (r = n, B === 0 && q(St)), t;
	}
	function ca() {
		let t, r, i, a;
		if (e.charCodeAt(F) === 48 ? (t = "0", F++) : (t = n, B === 0 && q(Ct)), t === n) {
			if (t = F, r = e.charAt(F), pe.test(r) ? F++ : (r = n, B === 0 && q(A)), r !== n) {
				for (i = [], a = e.charAt(F), y.test(a) ? F++ : (a = n, B === 0 && q(k)); a !== n;) i.push(a), a = e.charAt(F), y.test(a) ? F++ : (a = n, B === 0 && q(k));
				r = [r, i], t = r;
			} else F = t, t = n;
		}
		return t;
	}
	function la() {
		let t, r, i, a, o, s;
		if (B++, t = F, e.charCodeAt(F) === 48 ? (r = "0", F++) : (r = n, B === 0 && q(Ct)), r === n) {
			if (r = F, e.charCodeAt(F) === 45 ? (i = "-", F++) : (i = n, B === 0 && q(Fe)), i === n && (i = null), a = e.charAt(F), pe.test(a) ? F++ : (a = n, B === 0 && q(A)), a !== n) {
				for (o = [], s = e.charAt(F), y.test(s) ? F++ : (s = n, B === 0 && q(k)); s !== n;) o.push(s), s = e.charAt(F), y.test(s) ? F++ : (s = n, B === 0 && q(k));
				i = [
					i,
					a,
					o
				], r = i;
			} else F = r, r = n;
		}
		return r !== n && (I = t, r = _r()), t = r, B--, t === n && (r = n, B === 0 && q(wt)), t;
	}
	function ua() {
		let t, r, i, a, o;
		if (t = F, r = e.charAt(F), me.test(r) ? F++ : (r = n, B === 0 && q(Tt)), r !== n) {
			if (i = e.charAt(F), _.test(i) ? F++ : (i = n, B === 0 && q(ke)), i === n && (i = null), a = [], o = e.charAt(F), y.test(o) ? F++ : (o = n, B === 0 && q(k)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(F), y.test(o) ? F++ : (o = n, B === 0 && q(k));
			else a = n;
			a === n ? (F = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else F = t, t = n;
		return t;
	}
	function da() {
		let t, r, i, a;
		if (B++, t = F, e.charCodeAt(F) === 34 ? (r = "\"", F++) : (r = n, B === 0 && q(Et)), r !== n) {
			for (i = [], a = fa(); a !== n;) i.push(a), a = fa();
			e.charCodeAt(F) === 34 ? (a = "\"", F++) : (a = n, B === 0 && q(Et)), a === n ? (F = t, t = n) : (I = t, t = vr(i));
		} else F = t, t = n;
		if (t === n) {
			if (t = F, e.charCodeAt(F) === 39 ? (r = "'", F++) : (r = n, B === 0 && q(Dt)), r !== n) {
				for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
				e.charCodeAt(F) === 39 ? (a = "'", F++) : (a = n, B === 0 && q(Dt)), a === n ? (F = t, t = n) : (I = t, t = yr(i));
			} else F = t, t = n;
		}
		return B--, t === n && (r = n, B === 0 && q(je)), t;
	}
	function fa() {
		let t, r, i;
		return t = F, r = F, B++, i = e.charAt(F), he.test(i) ? F++ : (i = n, B === 0 && q(Ot)), B--, i === n ? r = void 0 : (F = r, r = n), r === n ? (F = t, t = n) : (i = ma(), i === n ? (F = t, t = n) : (I = t, t = br(i))), t === n && (t = F, e.charCodeAt(F) === 92 ? (r = "\\", F++) : (r = n, B === 0 && q(D)), r === n ? (F = t, t = n) : (e.charCodeAt(F) === 34 ? (i = "\"", F++) : (i = n, B === 0 && q(Et)), i === n ? (F = t, t = n) : (I = t, t = xr())), t === n && (t = F, e.charCodeAt(F) === 92 ? (r = "\\", F++) : (r = n, B === 0 && q(D)), r === n ? (F = t, t = n) : (i = ha(), i === n ? (F = t, t = n) : (I = t, t = Sr(i))))), t;
	}
	function pa() {
		let t, r, i;
		return t = F, r = F, B++, i = e.charAt(F), ge.test(i) ? F++ : (i = n, B === 0 && q(kt)), B--, i === n ? r = void 0 : (F = r, r = n), r === n ? (F = t, t = n) : (i = ma(), i === n ? (F = t, t = n) : (I = t, t = Cr(i))), t === n && (t = F, e.charCodeAt(F) === 92 ? (r = "\\", F++) : (r = n, B === 0 && q(D)), r === n ? (F = t, t = n) : (e.charCodeAt(F) === 39 ? (i = "'", F++) : (i = n, B === 0 && q(Dt)), i === n ? (F = t, t = n) : (I = t, t = wr())), t === n && (t = F, e.charCodeAt(F) === 92 ? (r = "\\", F++) : (r = n, B === 0 && q(D)), r === n ? (F = t, t = n) : (i = ha(), i === n ? (F = t, t = n) : (I = t, t = Tr(i))))), t;
	}
	function ma() {
		let t, r, i, a;
		return t = e.charAt(F), _e.test(t) ? F++ : (t = n, B === 0 && q(At)), t === n && (t = F, r = F, i = e.charAt(F), de.test(i) ? F++ : (i = n, B === 0 && q(bt)), i === n ? (F = r, r = n) : (a = e.charAt(F), fe.test(a) ? F++ : (a = n, B === 0 && q(xt)), a === n ? (F = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, F)), t;
	}
	function ha() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = F, e.charCodeAt(F) === 92 ? (r = "\\", F++) : (r = n, B === 0 && q(D)), r !== n && (I = t, r = Er()), t = r, t === n && (t = F, e.charCodeAt(F) === 47 ? (r = "/", F++) : (r = n, B === 0 && q(gt)), r !== n && (I = t, r = Dr()), t = r, t === n && (t = F, e.charCodeAt(F) === 98 ? (r = "b", F++) : (r = n, B === 0 && q(jt)), r !== n && (I = t, r = Or()), t = r, t === n && (t = F, e.charCodeAt(F) === 102 ? (r = "f", F++) : (r = n, B === 0 && q(Mt)), r !== n && (I = t, r = kr()), t = r, t === n && (t = F, e.charCodeAt(F) === 110 ? (r = "n", F++) : (r = n, B === 0 && q(Nt)), r !== n && (I = t, r = j()), t = r, t === n && (t = F, e.charCodeAt(F) === 114 ? (r = "r", F++) : (r = n, B === 0 && q(Pt)), r !== n && (I = t, r = Ar()), t = r, t === n && (t = F, e.charCodeAt(F) === 116 ? (r = "t", F++) : (r = n, B === 0 && q(Ft)), r !== n && (I = t, r = M()), t = r, t === n && (t = F, e.charCodeAt(F) === 117 ? (r = "u", F++) : (r = n, B === 0 && q(It)), r === n ? (F = t, t = n) : (i = F, a = F, o = e.charAt(F), ve.test(o) ? F++ : (o = n, B === 0 && q(Lt)), o === n ? (F = a, a = n) : (s = e.charAt(F), ye.test(s) ? F++ : (s = n, B === 0 && q(Rt)), s === n ? (F = a, a = n) : (c = Z(), c === n ? (F = a, a = n) : (l = Z(), l === n ? (F = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, F), i === n ? (F = t, t = n) : (e.substr(F, 2) === "\\u" ? (a = "\\u", F += 2) : (a = n, B === 0 && q(zt)), a === n ? (F = t, t = n) : (o = F, s = F, c = e.charAt(F), ve.test(c) ? F++ : (c = n, B === 0 && q(Lt)), c === n ? (F = s, s = n) : (l = e.charAt(F), be.test(l) ? F++ : (l = n, B === 0 && q(Bt)), l === n ? (F = s, s = n) : (u = Z(), u === n ? (F = s, s = n) : (d = Z(), d === n ? (F = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, F), o === n ? (F = t, t = n) : (I = t, t = N(i, o))))), t === n && (t = F, e.charCodeAt(F) === 117 ? (r = "u", F++) : (r = n, B === 0 && q(It)), r === n ? (F = t, t = n) : (i = F, a = F, o = Z(), o === n ? (F = a, a = n) : (s = Z(), s === n ? (F = a, a = n) : (c = Z(), c === n ? (F = a, a = n) : (l = Z(), l === n ? (F = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, F), i === n ? (F = t, t = n) : (I = F, a = jr(i), a = a ? n : void 0, a === n ? (F = t, t = n) : (I = t, t = P(i)))))))))))), t;
	}
	function Z() {
		let t;
		return t = e.charAt(F), xe.test(t) ? F++ : (t = n, B === 0 && q(Vt)), t;
	}
	function Q() {
		let t;
		return t = e.charAt(F), oe.test(t) ? F++ : (t = n, B === 0 && q(Pe)), t;
	}
	function $() {
		let t, r;
		for (B++, t = [], r = e.charAt(F), Se.test(r) ? F++ : (r = n, B === 0 && q(Ht)); r !== n;) t.push(r), r = e.charAt(F), Se.test(r) ? F++ : (r = n, B === 0 && q(Ht));
		return B--, t;
	}
	function ga() {
		let t, r;
		return t = F, B++, e.length > F ? (r = e.charAt(F), F++) : (r = n, B === 0 && q(vt)), B--, r === n ? t = void 0 : (F = t, t = n), t;
	}
	function _a(e) {
		return e.length > 1e3 && Mr("Member name too long (maximum 1000 characters)"), e;
	}
	H = a();
	let va = H !== n && F === e.length;
	function ya() {
		throw H !== n && F < e.length && q(Pr()), zr(z, R < e.length ? W(R) : null, R < e.length ? Lr(R, R + 1) : Lr(R, R));
	}
	if (t.peg$library) return {
		peg$result: H,
		peg$currPos: F,
		peg$FAILED: n,
		peg$maxFailExpected: z,
		peg$maxFailPos: R,
		peg$success: va,
		peg$throw: va ? void 0 : ya
	};
	if (va) return H;
	ya();
}
var rt = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), it = {
	length: {
		args: ["value"],
		logical: !1
	},
	count: {
		args: ["nodes"],
		logical: !1
	},
	value: {
		args: ["nodes"],
		logical: !1
	},
	match: {
		args: ["value", "value"],
		logical: !0
	},
	search: {
		args: ["value", "value"],
		logical: !0
	}
}, at = (e) => {
	throw new Be(1, 1, e);
}, ot = (e) => e.type === "root" || e.type === "current", st = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function ct(e) {
	let t = [{
		node: e,
		context: "nodes"
	}], n = (e) => {
		for (let n = e.next; n; n = n.next) {
			let e = n.value;
			if (e.type === "dotdot" && (e = e.value), e.type !== "bracketExpression") continue;
			let r = e.value, i = r.type === "unions" ? r.values : [r];
			for (let e of i) e.type === "filterExpression" && t.push({
				node: e.value,
				context: "test"
			});
		}
	};
	for (; t.length > 0;) {
		let { node: e, context: r } = t.pop();
		if (typeof e != "object" || !e) continue;
		let i = e;
		if (ot(i)) r === "value" && !st(i) && at("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && at(`Expected a query, found ${String(i.type)}`), i.type) {
			case "logicalExpression":
			case "notExpression":
			case "groupExpression":
				i.type === "logicalExpression" ? t.push({
					node: i.left,
					context: "test"
				}, {
					node: i.right,
					context: "test"
				}) : t.push({
					node: i.value,
					context: "test"
				});
				break;
			case "comparator": {
				let e = rt.has(i.operator) ? "value" : "any";
				t.push({
					node: i.left,
					context: e
				}), i.operator !== "reg" && t.push({
					node: i.right,
					context: e
				});
				break;
			}
			case "functionCall": {
				let e = i.name, n = it[e], a = i.args;
				a.length !== n.args.length && at(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && at(`The result of ${e}() must be compared`), r === "value" && n.logical && at(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
					node: e,
					context: n.args[r]
				}));
				break;
			}
			case "operation":
				t.push({
					node: i.left,
					context: "value"
				}, {
					node: i.right,
					context: "value"
				});
				break;
			case "groupOperation":
				t.push({
					node: i.value,
					context: r === "any" ? "any" : "value"
				});
				break;
			case "value": r === "test" && at("A literal must be compared");
		}
	}
}
function lt(e) {
	let t;
	try {
		t = nt(e);
	} catch (e) {
		if (Je(e)) throw new Be(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new Be(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new Be(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return ct(t), t;
}
var ut = /* @__PURE__ */ new Set([
	"(",
	")",
	"*",
	"+",
	"-",
	".",
	"?",
	"[",
	"\\",
	"]",
	"^",
	"n",
	"r",
	"t",
	"{",
	"|",
	"}"
]), dt = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), ft = (e) => e >= 55296 && e <= 56319, pt = (e) => e >= 56320 && e <= 57343, mt = (e) => e !== void 0 && e >= "0" && e <= "9", ht = (e, t) => {
	let n = e.charCodeAt(t);
	return ft(n) && pt(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : ft(n) || pt(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, gt = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !ut.has(n) ? null : n === "n" ? {
		text: "\\n",
		length: 2,
		code: 10
	} : n === "r" ? {
		text: "\\r",
		length: 2,
		code: 13
	} : n === "t" ? {
		text: "\\t",
		length: 2,
		code: 9
	} : {
		text: "\\" + n,
		length: 2,
		code: n.charCodeAt(0)
	};
}, _t = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return dt.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, D = (e, t) => {
	let n = e[t];
	return n === "\\" ? gt(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : ht(e, t);
}, vt = (e, t) => {
	let n = t + 1, r = "[";
	e[n] === "^" && (r += "^", n++);
	let i = !0;
	for (;;) {
		let a = e[n];
		if (a === void 0) return null;
		if (a === "]") return i ? null : {
			text: r + "]",
			length: n + 1 - t
		};
		if (a === "-") {
			if (!i && e[n + 1] !== "]") return null;
			r += "-", n++, i = !1;
			continue;
		}
		if (i = !1, a === "\\" && (e[n + 1] === "p" || e[n + 1] === "P")) {
			let t = _t(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = D(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = D(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, O = (e, t) => {
	let n = t + 1, r = n;
	for (; mt(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; mt(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, yt = (e) => {
	let t = e, n = "", r = 0, i = !1, a = 0;
	for (; a < t.length;) {
		let e = t[a];
		switch (e) {
			case "|":
				n += "|", i = !1, a++;
				continue;
			case "(":
				r++, n += "(", i = !1, a++;
				continue;
			case ")":
				if (r === 0) return null;
				r--, n += ")", i = !0, a++;
				continue;
			case "*":
			case "+":
			case "?":
				if (!i) return null;
				n += e, i = !1, a++;
				continue;
			case "{": {
				let e = i ? O(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = vt(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = _t(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = gt(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = ht(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, bt = 1e3, xt = 1e3, k = 16, St = /^[dgimsuy]*$/, Ct = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, A = class extends Error {}, wt = 0, Tt = 1, Et = 2, Dt = 3, Ot = 4, kt = 5, At = Le(2, 31) - 1, jt = (e, t) => {
	let n = e.op.length, r = e.scratch ?? {
		clist: new Int32Array(n),
		nlist: new Int32Array(n),
		onList: new Int32Array(n),
		stack: new Int32Array(n),
		atomGen: new Int32Array(e.atoms.length),
		atomHit: new Uint8Array(e.atoms.length),
		gen: 0,
		step: 0
	};
	return e.scratch = void 0, (r.gen > At - t - 2 || r.step > At - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, Mt = /* @__PURE__ */ new Set([
	"^",
	"$",
	"\\",
	".",
	"*",
	"+",
	"?",
	"(",
	")",
	"[",
	"]",
	"{",
	"}",
	"|",
	"/"
]), Nt = /^\{(\d+)(?:,(\d*))?\}/, Pt = /^[0-9a-fA-F]{4}/, Ft = /^\(\?([ims]*)(?:-([ims]*))?:/, It = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, Lt = class {
	constructor(e, t, n, r = !1) {
		this.src = e, this.unicode = t, this.iregexp = r, this.i = 0, this.mods = {
			i: n.includes("i"),
			m: n.includes("m"),
			s: n.includes("s")
		};
	}
	atom(e, t) {
		return {
			t: "atom",
			src: e,
			literal: t,
			mods: this.mods
		};
	}
	parse() {
		let e = this.parseAlt();
		if (this.i < this.src.length) throw new A("unexpected character");
		return e;
	}
	parseAlt() {
		let e = [this.parseSeq()];
		for (; this.src[this.i] === "|";) this.i++, e.push(this.parseSeq());
		return e.length === 1 ? e[0] : {
			t: "alt",
			alts: e
		};
	}
	parseSeq() {
		let e = [];
		for (; this.i < this.src.length && this.src[this.i] !== "|" && this.src[this.i] !== ")";) e.push(this.parseTerm());
		return e.length === 1 ? e[0] : {
			t: "cat",
			items: e
		};
	}
	parseTerm() {
		let e = this.src[this.i];
		return e === "^" ? (this.i++, {
			t: "bol",
			multiline: this.mods.m
		}) : e === "$" ? (this.i++, {
			t: "eol",
			multiline: this.mods.m
		}) : this.parseQuantifier(this.parseAtom());
	}
	parseAtom() {
		let { src: e } = this, t = this.i, n = e[t];
		if (n === "(") {
			let n = this.mods;
			if (e[t + 1] === "?") {
				let r = Ft.exec(e.slice(t, t + 12));
				if (!r) throw new A("lookaround or named group");
				let i = ze({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new A("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new A("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new A("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(Mt.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new A("trailing backslash");
		if (r === "b" || r === "B") throw new A("word boundary");
		if (r >= "1" && r <= "9") throw new A("backreference");
		if (r === "0") {
			if (n) return 2;
			let r = 2;
			for (; r < 4 && /[0-7]/.test(t[e + r] ?? "");) r++;
			return r;
		}
		if (r === "c") return 3;
		if (r === "x" && /^[0-9a-fA-F]{2}/.test(t.slice(e + 2))) return 4;
		if (n && (r === "p" || r === "P" || r === "u") && t[e + 2] === "{") {
			let n = t.indexOf("}", e + 3);
			if (n === -1) throw new A("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && Pt.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (Pt.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
			}
			return 6;
		}
		return 2;
	}
	parseQuantifier(e) {
		let { src: t } = this, n = t[this.i], r, i;
		if (n === "*") r = 0, i = Infinity, this.i++;
		else if (n === "+") r = 1, i = Infinity, this.i++;
		else if (n === "?") r = 0, i = 1, this.i++;
		else if (n === "{") {
			let n = Nt.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > bt || i !== Infinity && i > bt) throw new A("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, Rt = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= bt) throw new A("pattern too large");
		return this.op.push(e), this.x.push(t), this.y.push(n), this.op.length - 1;
	}
	atomId(e) {
		let t = (e.mods.i ? "i" : "") + (e.mods.s ? "s" : "") + (this.unicode ? "u" : ""), n = `${t}/${e.src}`, r = this.atomIds.get(n);
		return r === void 0 && (r = this.atoms.length, this.atoms.push({
			re: RegExp(`^(?:${e.src})$`, t),
			literal: e.mods.i ? void 0 : e.literal
		}), this.atomIds.set(n, r)), r;
	}
	finish() {
		this.emit(kt);
	}
	compile(e) {
		if (++this.work > 4 * bt) throw new A("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(wt, this.atomId(e));
				return;
			case "bol":
				this.emit(Dt, +!!e.multiline);
				return;
			case "eol":
				this.emit(Ot, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit(Tt);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(Et)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit(Tt);
					this.x[t] = t + 1, this.compile(e.node), this.emit(Et, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit(Tt);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, zt = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new Lt(e, r, t, n).parse(), a = new Rt(r);
		return a.compile(i), a.finish(), {
			op: a.op,
			x: a.x,
			y: a.y,
			atoms: a.atoms,
			unicode: r,
			sticky: t.includes("y")
		};
	} catch (e) {
		if (e instanceof RangeError) throw e;
		return null;
	}
}, Bt = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: te, atomHit: ne } = r, g = r.gen, re = r.step;
	r.gen = g + t.length + 2, r.step = re + t.length + 2;
	let _ = 0, v = !1, ie = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== g) switch (ee[r] = g, ++c === 64 && (u(c), c = 0), i[r]) {
				case wt:
					e[n++] = r;
					break;
				case kt: return u(c), v = !0, n;
				case Et:
					h[s++] = a[r];
					break;
				case Tt:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case Dt:
					(_ === 0 || a[r] === 1 && It(t.charCodeAt(_ - 1))) && (h[s++] = r + 1);
					break;
				case Ot: (_ === t.length || a[r] === 1 && It(t.charCodeAt(_))) && (h[s++] = r + 1);
			}
		}
		return u(c), n;
	};
	if (g++, p = ie(d, 0, 0), v) return !0;
	for (; _ < t.length;) {
		if (p === 0 && l) return !1;
		let e = (c ? t.codePointAt(_) : t.charCodeAt(_)) > 65535 ? 2 : 1, n = t.slice(_, _ + e), r = re + _ + 1;
		g++, m = 0, _ += e;
		for (let e = 0; e < p; e++) {
			let t = d[e], i = a[t];
			if (te[i] !== r) {
				te[i] = r;
				let e = s[i];
				ne[i] = (e.literal === void 0 ? e.re.test(n) : e.literal === n) ? 1 : 0;
			}
			if (ne[i] === 1 && (m = ie(f, m, t + 1), v)) return !0;
		}
		if (!l && (m = ie(f, m, 0), v)) return !0;
		let i = d;
		d = f, f = i, p = m;
	}
	return !1;
}, Vt = (e, t, n) => {
	let r = jt(e, t.length);
	try {
		return Bt(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, Ht = 256, Ut = /* @__PURE__ */ new Map(), Wt = 0, Gt = (e, t, n, r, i = !1) => {
	if (e.length > xt || t.length > 7 || !St.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = Ut.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = Ct(s) > k ? null : zt(n ? `^(?:${s})$` : s, t, i);
	Wt >= Ht && (Ut.clear(), Wt = 0);
	let l = Ut.get(s);
	return l === void 0 && Ut.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), Wt++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, Kt = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), Vt(e, t, n);
}, qt = class {
	constructor(e) {
		this.nodes = e;
	}
}, Jt = (e) => {
	let t = !1;
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r === "\\" && n + 1 < e.length) {
			let r = e[n + 1];
			if ((r === "b" || r === "B") && !t) return !0;
			n++;
		} else r === "[" && !t ? t = !0 : r === "]" && t && (t = !1);
	}
	return !1;
}, Yt = (e) => {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (n === "\\") {
			let n = e[t + 1];
			if (n >= "1" && n <= "9") return !1;
			t++;
		} else if (n === "(" && e[t + 1] === "?") {
			let n = e[t + 2];
			if (n === "=" || n === "!") return !1;
			if (n === "<") {
				let n = e[t + 3];
				if (n === "=" || n === "!" || /[a-zA-Z]/.test(n ?? "")) return !1;
			}
		}
	}
	return !Jt(e);
}, Xt = 256, Zt = /* @__PURE__ */ new Map(), Qt = (e, t) => {
	let n = Zt.get(e);
	return n === void 0 && (n = Yt(e), Zt.size >= Xt && Zt.clear(), Zt.set(Array.from(e).join(""), n)), t(e.length), n;
}, $t = /* @__PURE__ */ new Map(), en = (e, t) => {
	let n = $t.get(e);
	return n === void 0 && (n = yt(e), n !== null && (n = Array.from(n).join("")), $t.size >= Xt && $t.clear(), $t.set(Array.from(e).join(""), n)), t(e.length), n;
}, tn = 256, nn = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > xt) c = null;
		else if (o) {
			let n = en(e, i);
			c = n === null ? null : Gt(n, t, r, i, !0);
		} else c = Qt(e, i) ? Gt(e, t, r, i) : null;
		s !== void 0 && (s.size >= tn && s.clear(), s.set(a, c));
	}
	return c !== null && Kt(c, n, i);
}, rn = {
	length: (e, t) => {
		let n = e[0];
		if (T(n)) {
			t(n.length);
			let e = n.length;
			for (let t = 0; t < n.length - 1; t++) {
				let r = n.charCodeAt(t);
				if (r >= 55296 && r <= 56319) {
					let r = n.charCodeAt(t + 1);
					r >= 56320 && r <= 57343 && (e--, t++);
				}
			}
			return e;
		}
		if (C(n)) return S(n);
		if (w(n)) {
			let e = qe(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !T(r) || !T(i) ? !1 : nn(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !T(r) || !T(i) ? !1 : nn(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, an = (e, t, n = b) => e === void 0 && t === void 0 || Ue(e, t, n), on = (e, t, n = b) => !Ue(e, t, n), sn = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, cn = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return sn(n) - sn(i);
	}
	return e.length - t.length;
}, ln = (e, t, n = b) => Xe(e) && Xe(t) ? e < t : T(e) && T(t) ? (n(Math.min(e.length, t.length)), cn(e, t) < 0) : !1, un = (e, t, n = b) => ln(e, t, n) || an(e, t, n), dn = (e, t, n = b) => Xe(e) && Xe(t) ? e > t : T(e) && T(t) ? (n(Math.min(e.length, t.length)), cn(e, t) > 0) : !1, fn = (e, t, n = b) => dn(e, t, n) || an(e, t, n), pn = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, mn = (e, t, n) => {
	let r = S(e);
	for (let i = 0; i < r; i++) {
		let r = We(e, i);
		if (n(1 + pn(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, hn = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, gn = (e) => typeof e == "string" && e.length + 1 > Ge, _n = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = S(e);
	for (let n = 0; n < a; n++) {
		let r = We(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), gn(r) ? i.long.push(r) : i.set.add(hn(r));
	}
	return n?.set(e, i), i;
}, vn = ({ set: e, long: t }, n, r) => {
	if (gn(n)) {
		for (let e of t) if (r(1 + pn(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(hn(n)));
}, yn = (e, t, n) => {
	let r = S(e);
	for (let i = 0; i < r; i++) if (n(), x(e, i) && t(e[i])) return !0;
	return !1;
}, bn = {
	eq: an,
	ne: on,
	lt: ln,
	le: un,
	gt: dn,
	ge: fn,
	in: (e, t, n = b) => C(t) ? mn(t, e, n) !== -1 : !1,
	nin: (e, t, n = b) => C(t) ? mn(t, e, n) === -1 : !1,
	subsetof: (e, t, n = b, r) => {
		if (!C(e) || !C(t)) return !1;
		let i = _n(t, n, r);
		return !yn(e, (e) => !vn(i, e, n), n);
	},
	anyof: (e, t, n = b, r) => {
		if (!C(e) || !C(t)) return !1;
		let i = _n(t, n, r);
		return yn(e, (e) => vn(i, e, n), n);
	},
	noneof: (e, t, n = b, r) => {
		if (!C(e) || !C(t)) return !1;
		let i = _n(t, n, r);
		return !yn(e, (e) => vn(i, e, n), n);
	},
	sizeof: (e, t) => !C(e) && !T(e) || !C(t) && !T(t) ? !1 : (C(e) ? S(e) : e.length) === (C(t) ? S(t) : t.length),
	size: (e, t) => !C(e) && !T(e) || !Xe(t) ? !1 : (C(e) ? S(e) : e.length) === t
}, xn = (e) => !C(e) && !T(e) ? !1 : (C(e) ? S(e) : e.length) === 0, Sn = (e, t, n, r = b, i) => !T(e) || !T(t) ? !1 : nn(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), Cn = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), wn = (e, t) => e.concat(`[${t}]`), Tn = (e, t) => e < 0 ? t + e : e, En = (e, t) => {
	let n = S(e), r = Tn(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: x(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, Dn = (e, t) => {
	for (let n of t) e.push(n);
}, On = 1e6, kn = 100, An = 1e6, jn = 20, Mn = 1e4, Nn = 1e4, Pn = class {
	constructor(e) {
		this.weight = 0, this.nodes = 0, this.stringPositions = 0, this.done = !1, this.seen = /* @__PURE__ */ new Set(), this.frames = [], this.visit(e);
	}
	advance(e) {
		let t = this.nodes + e, { frames: n } = this;
		for (; n.length > 0 && this.nodes < t;) {
			let e = n[n.length - 1];
			if (e.i >= e.length) {
				n.pop();
				continue;
			}
			let t = e.i++;
			if (e.keys === null) {
				let n = e.container;
				if (e.indices !== null) {
					let r = Number(e.indices[t]);
					x(n, r) && this.visit(n[r]);
				} else if (x(n, t)) this.visit(n[t]);
				else if (++e.holes > Nn) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!x(n, r)) continue;
				this.weight += r.length, this.visit(n[r]);
			}
		}
		n.length === 0 && (this.done = !0);
	}
	visit(e) {
		if (this.nodes++, this.weight += typeof e == "string" ? 1 + e.length : 1, typeof e == "string" && (this.stringPositions += 1 + e.length), typeof e == "object" && e && !this.seen.has(e)) {
			if (this.seen.add(e), C(e)) this.frames.push({
				container: e,
				keys: null,
				indices: null,
				length: S(e),
				i: 0,
				holes: 0
			});
			else if (w(e)) {
				let t = Object.keys(e);
				this.frames.push({
					container: e,
					keys: t,
					indices: null,
					length: t.length,
					i: 0,
					holes: 0
				});
			}
		}
	}
}, Fn = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, Cn(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = Cn(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = S(e);
			for (let r = 0; r < n; r++) this.tick(), x(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new Pn(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(Mn, Math.ceil((this.retained - this.retainedLimit) / jn))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new Ve(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(On, kn * e.weight) + t, this.retainedLimit = Math.max(An, jn * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new Pn(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(Mn, Math.ceil((this.steps - this.stepLimit) / kn))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new Ve(`Query exceeded ${this.stepLimit} evaluation steps`);
			}
		}, {
			regexProgram: (e) => {
				this.largestRegexProgram = Math.max(this.largestRegexProgram, e);
			},
			regexWork: (e) => {
				this.regexSteps += e, this.tick(e);
			},
			regexSites: /* @__PURE__ */ new Map()
		}), this.readsCurrent = /* @__PURE__ */ new WeakMap(), this.invariantResults = /* @__PURE__ */ new Map(), this.isInvariant = (e) => (this.readsCurrent.has(e) || this.classify(e), !this.readsCurrent.get(e)), this.classify = (e) => {
			let t = this.readsCurrent, n = [], r = (e) => {
				if (typeof e != "object" || !e) return !1;
				let r = t.get(e);
				if (r !== void 0) return r;
				let i = e.type;
				if (i === "current") return t.set(e, !0), !0;
				if (i === "filterExpression" || i === "value") return t.set(e, !1), !1;
				let a = Object.values(e);
				n.push({
					node: e,
					children: a,
					i: 0,
					reads: !1
				});
			};
			for (r(e); n.length > 0;) {
				let e = n[n.length - 1];
				e.i < e.children.length ? r(e.children[e.i++]) === !0 && (e.reads = !0) : (t.set(e.node, e.reads), n.pop(), e.reads && n.length > 0 && (n[n.length - 1].reads = !0));
			}
		}, this.memoInvariant = (e, t) => {
			if (!this.isInvariant(e)) return t();
			if (this.invariantResults.has(e)) return this.invariantResults.get(e);
			let n = t();
			return this.invariantResults.set(e, n), n;
		}, this.handleRootQuery = (e, t) => {
			if (this.rootQueryCache.has(e)) return this.rootQueryCache.get(e);
			let n = this.handleSubscript(this.rootPayload, t);
			return this.rootQueryCache.set(e, n), n;
		}, this.handleIdentifier = (e, t) => this.selectMember(e, t), this.handleStringLiteral = (e, t) => this.selectMember(e, t), this.selectMember = ({ value: e, paths: t }, n) => {
			if (!w(e)) return;
			let r = this.canonicalName(n, n.value);
			if (x(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (C(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: wn(t, r)
					});
				}), n;
			}
			if (w(e)) {
				let n = qe(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) x(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!C(e)) return;
			let r = En(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: wn(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (C(e)) {
				let r = En(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: wn(t, r.index)
				} : void 0;
			}
			if (w(e)) {
				let r = String(n.value);
				return x(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!C(e)) return [];
			let r = S(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : Tn(n.start, r), o = n.end === null ? r : Tn(n.end, r)) : (a = n.start === null ? r - 1 : Tn(n.start, r), o = n.end === null ? -r - 1 : Tn(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: x(e, u) ? e[u] : void 0,
				paths: wn(t, u)
			}), u += i;
			return l;
		}, this.handleUnions = (e, t) => {
			let n = [];
			for (let r of t.values) switch (this.tick(), r.type) {
				case "identifier":
					if (w(e.value)) {
						let t = this.handleIdentifier(e, r);
						E(t) && (this.retain(), n.push(t));
					}
					break;
				case "stringLiteral":
					if (w(e.value)) {
						let t = this.handleStringLiteral(e, r);
						E(t) && (this.retain(), n.push(t));
					}
					break;
				case "numericLiteral":
					if (C(e.value)) {
						let t = this.handleNumericLiteral(e, r);
						E(t) && (this.retain(), n.push(t));
					}
					break;
				case "wildcard":
					Dn(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": Dn(n, this.handleBracketExpressionContent(e, r));
			}
			return n;
		}, this.handleDotdot = (e, t) => {
			let n = [];
			return this.collectDotdot(e, t, n), n;
		}, this.collectDotdot = (e, t, n) => {
			let r = t.value, i = [];
			this.tick();
			let a = e;
			for (; a !== void 0;) {
				let e = a.value;
				switch (r.type) {
					case "bracketMember": {
						let e = this.handleBracketMemberContent(a, r.value);
						E(e) && (this.retain(), n.push(e));
						break;
					}
					case "bracketExpression":
						Dn(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						Dn(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						E(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (w(e)) {
					let t = qe(e);
					this.tick(t.length), i.push({
						parent: a,
						keys: t,
						length: t.length,
						i: 0
					});
				} else C(e) && i.push({
					parent: a,
					keys: null,
					length: S(e),
					i: 0
				});
				for (a = void 0; i.length > 0;) {
					let e = i[i.length - 1];
					if (e.i >= e.length) {
						i.pop();
						continue;
					}
					let t = e.i++;
					if (e.keys === null) {
						this.tick();
						let n = e.parent.value;
						if (!x(n, t)) continue;
						a = {
							value: n[t],
							paths: wn(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!x(n, r)) continue;
						a = {
							value: n[r],
							paths: this.formatStringLiteralPath(e.parent.paths, r)
						};
					}
					break;
				}
			}
		}, this.handleOperationContent = (e, t) => {
			switch (this.tick(), t.type) {
				case "root": return this.handleRootQuery(t, t.next);
				case "current": return this.handleSubscript(e, t.next);
				case "value": return {
					value: t.value,
					paths: e.paths
				};
				case "groupOperation": return this.memoInvariant(t, () => this.handleOperationContent(e, t.value));
				case "functionCall": return {
					value: this.handleFunctionCall(e, t),
					paths: e.paths
				};
				case "operation": {
					let n = [], r = t;
					for (; r.type === "operation";) n.push({
						operator: r.operator,
						right: r.right
					}), r = r.left;
					let i = this.handleOperationContent(e, r)?.value;
					this.tick(n.length);
					for (let t = n.length - 1; t >= 0; t--) {
						let r = this.handleOperationContent(e, n[t].right)?.value;
						if (!Xe(i) || !Xe(r)) i = void 0;
						else switch (n[t].operator) {
							case "plus":
								i += r;
								break;
							case "minus":
								i -= r;
								break;
							case "div":
								i = r === 0 ? void 0 : i / r;
								break;
							case "multi": i *= r;
						}
					}
					return Xe(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return xn(n);
			if (t.operator === "reg") return Sn(n, t.right.value, t.right.opts, this.tick, t);
			let r = this.handleOperationContent(e, t.right)?.value, i = bn[t.operator];
			if (i) {
				let e = this.isInvariant(t.right) ? this.siteSetCache(t.right) : void 0;
				return i(n, r, this.tick, e);
			}
			return !1;
		}, this.handleLogicalExpression = (e, t) => this.memoInvariant(t, () => this.evaluateLogicalExpression(e, t)), this.evaluateLogicalExpression = (e, t) => {
			let n = [], r = !this.isInvariant(t), i = t;
			for (; i.type === "logicalExpression" && (i === t || !r || !this.isInvariant(i));) n.push({
				operator: i.operator,
				right: i.right
			}), i = i.left;
			this.tick(n.length);
			let a = this.handleFilterExpressionContent(e, i);
			for (let t = n.length - 1; t >= 0; t--) (n[t].operator === "and" ? a : !a) && (a = this.handleFilterExpressionContent(e, n[t].right));
			return a;
		}, this.handleFunctionCall = (e, t) => this.memoInvariant(t, () => this.evaluateFunctionCall(e, t)), this.evaluateFunctionCall = (e, t) => {
			let n = t.name === "count" || t.name === "value", r = t.args.map((t) => {
				let r = this.handleOperationContent(e, t);
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new qt(r.value) : new qt(E(r?.value) ? [r?.value] : []);
			}), i = rn[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
			return i ? i(r, this.tick, o ? t : void 0) : void 0;
		}, this.handleFilterExpressionContent = (e, t) => {
			switch (this.tick(), t.type) {
				case "logicalExpression": return this.handleLogicalExpression(e, t);
				case "comparator": return this.handleComparator(e, t);
				case "groupExpression": return this.memoInvariant(t, () => this.handleFilterExpressionContent(e, t.value));
				case "notExpression": return this.memoInvariant(t, () => !this.handleFilterExpressionContent(e, t.value));
				case "functionCall": return !!this.handleFunctionCall(e, t);
				case "root": {
					let e = this.handleRootQuery(t, t.next);
					return e?.isIndefinite ? Array.isArray(e.value) && e.value.length > 0 : E(e);
				}
				case "current": {
					let n = this.handleSubscript(e, t.next);
					return n?.isIndefinite ? Array.isArray(n.value) && n.value.length > 0 : E(n);
				}
				case "value": return !!t.value;
			}
		}, this.handleBracketMemberContent = (e, t) => {
			switch (t.type) {
				case "identifier": return this.handleIdentifier(e, t);
				case "numericLiteral": return this.handleNumericLiteral(e, t);
				case "stringLiteral": return this.handleStringLiteral(e, t);
			}
		}, this.handleBracketExpressionContent = (e, t) => {
			let n = e.value;
			switch (t.type) {
				case "filterExpression": {
					let r = [];
					if (C(n)) this.forEachElement(n, (n, i) => {
						let a = {
							value: n,
							paths: wn(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (w(n)) {
						let i = qe(n);
						this.tick(i.length);
						for (let a of i) {
							if (!x(n, a)) continue;
							let i = {
								value: n[a],
								paths: this.formatStringLiteralPath(e.paths, a)
							};
							this.handleFilterExpressionContent(i, t.value) && (this.retain(), r.push(i));
						}
					}
					return r;
				}
				case "unions": return this.handleUnions(e, t);
				case "wildcard": return this.handleWildcard(e);
				case "slices": return this.handleSlices(e, t);
			}
		}, this.isIndefiniteSegment = (e) => {
			let t = e.value;
			return t.type === "bracketExpression" || t.type === "dotdot" || t.type === "dot" && t.value.type === "wildcard";
		}, this.selectMany = (e, t) => {
			let n = t.value;
			switch (n.type) {
				case "bracketExpression": return this.handleBracketExpressionContent(e, n.value);
				case "dotdot": return this.handleDotdot(e, n);
				default: return this.handleWildcard(e);
			}
		}, this.selectOne = (e, t) => {
			let n = t.value;
			switch (n.type) {
				case "bracketMember": return this.handleBracketMemberContent(e, n.value);
				case "dot":
					if (n.value.type === "identifier") return this.handleIdentifier(e, n.value);
					if (n.value.type === "numericLiteral") return this.handleDotNumericLiteral(e, n.value);
			}
		}, this.handleSubscript = (e, t) => {
			if (t === null) return e;
			let n = [], r = [{
				node: e,
				segment: t
			}], i = !1;
			for (; r.length > 0;) {
				let { node: e, segment: t } = r.pop(), a;
				if (this.isIndefiniteSegment(t)) i = !0, a = this.selectMany(e, t);
				else {
					this.tick();
					let n = this.selectOne(e, t);
					if (!E(n)) continue;
					a = [n];
				}
				let o = t.next;
				if (o === null) Dn(n, a);
				else for (let e = a.length - 1; e >= 0; e--) r.push({
					node: a[e],
					segment: o
				});
			}
			if (!i) return n[0];
			let a = [], o = [];
			for (let e of n) a.push(e.value), o.push(e.paths);
			return {
				value: a,
				paths: o,
				isIndefinite: !0
			};
		}, this.handleRoot = (e) => {
			try {
				return this.handleSubscript(this.rootPayload, e.next);
			} catch (e) {
				throw Je(e) ? new Ve("Query is nested too deeply") : Ye(e) ? new Ve("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? On, this.retainedLimit = this.adaptiveLimit ? An : Infinity;
	}
}, In = (e, t, n) => {
	let r = lt(t), i = new Fn(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? Ze(i) ? [] : [i.value] : i?.value;
}, Ln = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = In(e, i, n);
		E(t) && r.push(t);
	}
	return r;
}, Rn = (e, t, n = {}) => {
	try {
		return C(t) ? Ln(e, t, n) : In(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, zn = (e) => typeof e == "object" && !!e && !Array.isArray(e), Bn = (e, t) => {
	if (!zn(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = qn(t, i);
	return n;
}, Vn = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => qn(t, e));
}, Hn = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, Un = (e, t) => Hn(e, t), Wn = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, Gn = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.0"
}, Kn = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.applyTemplate ??= e, globalThis.ks.transformerFuncs ??= {}, globalThis.ks.transformerFuncs.primitive = {
		meta: Gn,
		applyTemplate: e
	});
}, qn = (e, t, n) => {
	let r = e, i = t;
	Wn(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? Hn(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = Un(a?.textContent, r)), "attributes" in a && (a.attributes = Bn(a?.attributes, r)), "children" in a && (a.children = Vn(a?.children, r))), a);
};
Kn(qn);
// ../json-write-path/node_modules/json-transformer-funcs/src/v24/findByRole.js
var Jn = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = Jn(n, t);
		if (e) return e;
	}
	return null;
}, Yn = (e, t, n) => {
	let r = e?.[t.fileName];
	if (r === void 0) throw Error(`Registry entry not found: ${t.fileName}`);
	let i = r;
	if (t.jsonPath) {
		let e = Rn(r, t.jsonPath, { returnArray: !0 });
		if (e.length === 0) throw Error(`Destination JSONPath matched no nodes: ${t.jsonPath}`);
		if (e.length > 1) throw Error(`Destination JSONPath must identify exactly one node; matched ${e.length}: ${t.jsonPath}`);
		i = e[0];
	} else if (t.dataRole && (i = Jn(r, t.dataRole), i == null)) throw Error(`Destination dataRole not found: ${t.dataRole}`);
	let a = [...t.filePath ?? []];
	if (a.length === 0) throw Error("destinationPath.filePath must contain the property to write");
	let o = a.pop(), s = a.reduce((e, t) => {
		if (e == null) throw Error(`Cannot resolve destination filePath at: ${t}`);
		return e[t];
	}, i);
	if (s == null) throw Error(`Destination parent not found for filePath: ${t.filePath.join(".")}`);
	return n && console.log("json-write-path v6 resolved:", {
		fileName: t.fileName,
		jsonPath: t.jsonPath,
		dataRole: t.dataRole,
		filePath: t.filePath,
		parent: s,
		key: o
	}), {
		parent: s,
		key: o,
		target: i
	};
}, Xn = (e, t, n, r) => {
	let { parent: i, key: a } = Yn(e, t, r);
	return (Me[t.action] || je)(i, a, n), e;
}, Zn = (e) => typeof e == "object" && !!e && !Array.isArray(e), Qn = (e, t) => {
	if (!Zn(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = ar(t, i);
	return n;
}, $n = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => ar(t, e));
}, er = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, tr = (e, t) => er(e, t), nr = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, rr = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.0"
}, ir = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.applyTemplate ??= e, globalThis.ks.transformerFuncs ??= {}, globalThis.ks.transformerFuncs.primitive = {
		meta: rr,
		applyTemplate: e
	});
}, ar = (e, t, n) => {
	let r = e, i = t;
	nr(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? er(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = tr(a?.textContent, r)), "attributes" in a && (a.attributes = Qn(a?.attributes, r)), "children" in a && (a.children = $n(a?.children, r))), a);
};
ir(ar);
// ../json-transformer-funcs-one-dimension/node_modules/json-transformer-funcs-primitive/src/v9/forAttributes/index.js
var or = (e) => typeof e == "object" && !!e && !Array.isArray(e), sr = (e, t) => {
	if (!or(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = mr(t, i);
	return n;
}, cr = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => mr(t, e));
}, lr = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, ur = (e, t) => lr(e, t), dr = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, fr = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, pr = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.applyTemplate ??= e, globalThis.ks.transformerFuncs ??= {}, globalThis.ks.transformerFuncs.primitive = {
		meta: fr,
		applyTemplate: e
	});
}, mr = (e, t, n) => {
	let r = e, i = t;
	dr(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? lr(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = ur(a?.textContent, r)), "attributes" in a && (a.attributes = sr(a?.attributes, r)), "children" in a && (a.children = cr(a?.children, r))), a);
};
pr(mr);
// ../json-transformer-funcs-one-dimension/src/v9/guard/index.js
var hr = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, gr = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, _r = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: gr,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, vr = (e, t) => {
	let n = e, r = t;
	return hr(n, r), n.map((e) => mr(e, r));
};
_r((e, t) => {
	let n = e;
	return hr(n, t), n.map((e) => mr(e, e[t]));
}, vr);
// ../json-instruction-single/node_modules/json-source-path/src/v2/findByRole.js
var yr = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = yr(n, t);
		if (e) return e;
	}
	return null;
}, br = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? yr(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, xr = Object.defineProperty, Sr = Object.getOwnPropertySymbols, Cr = Object.prototype.hasOwnProperty, wr = Object.prototype.propertyIsEnumerable, Tr = Math.pow, Er = (e, t, n) => t in e ? xr(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Dr = (e, t) => {
	for (var n in t ||= {}) Cr.call(t, n) && Er(e, n, t[n]);
	if (Sr) for (var n of Sr(t)) wr.call(t, n) && Er(e, n, t[n]);
	return e;
}, Or = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, kr = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, j = () => void 0, Ar = (e, t, n, r) => {
	if (r(), typeof e == "string" && typeof t == "string" && e.length === t.length && r(e.length), e === t) return !0;
	if (e === null || t === null || e === void 0 || t === void 0 || typeof e != typeof t || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		let r = L(e);
		return r === L(t) && (n.push({
			x: e,
			y: t,
			keys: null,
			length: r,
			i: 0
		}), !0);
	}
	if (typeof e == "object" && typeof t == "object") {
		let i = I(e), a = I(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, M = (e, t, n = j) => {
	let r = [];
	if (!Ar(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!Ar(jr(e.x, t), jr(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !N(o, i) || !N(a, i)) return !1;
			let s = a[i];
			if (!N(o, i) || !Ar(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, N = (e, t) => Object.prototype.hasOwnProperty.call(e, t), jr = (e, t) => N(e, t) ? e[t] : void 0, P = 16383, F = 1e3, I = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > F) throw new kr(`Member name too long (maximum ${F} characters)`);
	return t;
}, L = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, R = (e) => e instanceof RangeError && /call stack/i.test(e.message), z = (e) => Array.isArray(e), B = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), V = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, H = (e) => typeof e == "number", U = (e) => typeof e == "string", Mr = (e) => e === void 0, W = (e) => e !== void 0;
function G(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function K(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function Nr(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var Pr = class extends SyntaxError {
	constructor(e, t, n, r) {
		super(e), this.expected = t, this.found = n, this.location = r, this.name = "SyntaxError";
	}
	format(e) {
		let t = "Error: " + this.message;
		if (this.location) {
			let n = null, r = e.find((e) => e.source === this.location.source);
			r && (n = r.text.split(/\r\n|\n|\r/g));
			let i = this.location.start, a = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(i) : i, o = this.location.source + ":" + a.line + ":" + a.column;
			if (n) {
				let e = this.location.end, r = "".padEnd(a.line.toString().length, " "), s = n[i.line - 1], c = (i.line === e.line ? e.column : s.length + 1) - i.column || 1;
				t += "\n --> " + o + "\n" + r + " |\n" + a.line + " | " + s + "\n" + r + " | " + "".padEnd(i.column - 1, " ") + "".padEnd(c, "^");
			} else t += "\n at " + o;
		}
		return t;
	}
	static buildMessage(e, t) {
		function n(e) {
			return e.codePointAt(0).toString(16).toUpperCase();
		}
		let r = Object.prototype.hasOwnProperty.call(RegExp.prototype, "unicode") ? /* @__PURE__ */ RegExp("[\\p{C}\\p{Mn}\\p{Mc}]", "gu") : null;
		function i(e) {
			return r ? e.replace(r, (e) => "\\u{" + n(e) + "}") : e;
		}
		function a(e) {
			return i(e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (e) => "\\x0" + n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g, (e) => "\\x" + n(e)));
		}
		function o(e) {
			return i(e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, (e) => "\\x0" + n(e)).replace(/[\x10-\x1F\x7F-\x9F]/g, (e) => "\\x" + n(e)));
		}
		let s = {
			literal(e) {
				return "\"" + a(e.text) + "\"";
			},
			class(e) {
				let t = e.parts.map((e) => Array.isArray(e) ? o(e[0]) + "-" + o(e[1]) : o(e));
				return "[" + (e.inverted ? "^" : "") + t.join("") + "]" + (e.unicode ? "u" : "");
			},
			any() {
				return "any character";
			},
			end() {
				return "end of input";
			},
			other(e) {
				return e.description;
			}
		};
		function c(e) {
			return s[e.type](e);
		}
		function l(e) {
			let t = e.map(c);
			if (t.sort(), t.length > 0) {
				let e = 1;
				for (let n = 1; n < t.length; n++) t[n - 1] !== t[n] && (t[e] = t[n], e++);
				t.length = e;
			}
			switch (t.length) {
				case 1: return t[0];
				case 2: return t[0] + " or " + t[1];
				default: return t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
			}
		}
		function u(e) {
			return e ? "\"" + a(e) + "\"" : "end of input";
		}
		return "Expected " + l(e) + " but " + u(t) + " found.";
	}
};
function Fr(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: Br }, a = Br, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", te = "true", ne = "false", g = "null", re = /^[,\]]/, _ = /^[+\-]/, v = /^[*\/]/, ie = /^[a-zA-Z_]/, ae = /^[\x80-\uFFFF_]/, oe = /^[a-zA-Z0-9_]/, se = /^[0-9@$\-]/, ce = /^[^\/\\]/, le = /^[gimsuy]/, ue = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, de = /^[\uD800-\uDBFF]/, fe = /^[\uDC00-\uDFFF]/, y = /^[0-9]/, pe = /^[1-9]/, me = /^[eE]/, he = /^["\\]/, ge = /^['\\]/, _e = /^[ -\uD7FF\uE000-\uFFFF]/, ve = /^[dD]/, ye = /^[89abAB]/, be = /^[c-fC-F]/, xe = /^[0-9a-fA-F]/, Se = /^[ \t\n\r]/, Ce = U([",", "]"], !1, !1, !1), we = H("length", !1), Te = H("count", !1), Ee = H("match", !1), De = H("search", !1), Oe = H("value", !1), ke = U(["+", "-"], !1, !1, !1), Ae = U(["*", "/"], !1, !1, !1), je = Fr("string"), Me = U([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1, !1), Ne = U([["", "￿"], "_"], !1, !1, !1), Pe = U([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1, !1), Fe = H("-", !1), Ie = U([
		["0", "9"],
		"@",
		"$",
		"-"
	], !1, !1, !1), Le = H("$", !1), Re = H("@", !1), ze = H("..", !1), Be = H(".", !1), Ve = H("*", !1), b = H("&&", !1), He = H("||", !1), Ue = H("!", !1), x = H("==", !1), We = H("!=", !1), Ge = H(">=", !1), Ke = H(">", !1), qe = H("<=", !1), S = H("<", !1), Je = H("=~", !1), C = H("in", !1), Ye = H("nin", !1), w = H("subsetof", !1), Xe = H("anyof", !1), T = H("noneof", !1), Ze = H("sizeof", !1), E = H("size", !1), Qe = H("empty", !1), $e = H("true", !1), et = H("false", !1), tt = H("null", !1), nt = H("{", !1), rt = H("}", !1), it = H("[", !1), at = H("]", !1), ot = H(":", !1), st = H(",", !1), ct = H("(", !1), lt = H(")", !1), ut = H("?", !1), dt = Fr("regex"), ft = H("/", !1), pt = U(["/", "\\"], !0, !1, !1), mt = H("\\", !1), ht = Mr(), gt = U([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), _t = U([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), D = U([["\ud800", "\udbff"]], !1, !1, !1), vt = U([["\udc00", "\udfff"]], !1, !1, !1), O = U([["0", "9"]], !1, !1, !1), yt = Fr("number"), bt = H("0", !1), xt = U([["1", "9"]], !1, !1, !1), k = Fr("integer"), St = U(["e", "E"], !1, !1, !1), Ct = H("\"", !1), A = H("'", !1), wt = U(["\"", "\\"], !1, !1, !1), Tt = U(["'", "\\"], !1, !1, !1), Et = U([[" ", "퟿"], ["", "￿"]], !1, !1, !1), Dt = H("b", !1), Ot = H("f", !1), kt = H("n", !1), At = H("r", !1), jt = H("t", !1), Mt = H("u", !1), Nt = U(["d", "D"], !1, !1, !1), Pt = U([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), Ft = H("\\u", !1), It = U([["c", "f"], ["C", "F"]], !1, !1, !1), Lt = U([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), Rt = U([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function zt(e) {
		return {
			type: "root",
			next: G(e)
		};
	}
	function Bt(e) {
		return e.map((e) => e[1]);
	}
	function Vt(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function Ht(e) {
		return e;
	}
	function Ut(e) {
		return {
			type: "dotdot",
			value: e
		};
	}
	function Wt() {
		return { type: "wildcard" };
	}
	function Gt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Kt() {
		return { type: "wildcard" };
	}
	function qt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Jt(e) {
		return e;
	}
	function Yt(e) {
		return e;
	}
	function Xt(e, t) {
		return t.length > 0 ? {
			type: "bracketExpression",
			value: {
				type: "unions",
				values: [e, ...t.map((e) => e[3])]
			}
		} : {
			type: e.type === "numericLiteral" || e.type === "stringLiteral" || e.type === "identifier" ? "bracketMember" : "bracketExpression",
			value: e
		};
	}
	function Zt(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function Qt(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function $t(e, t) {
		return Nr(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function en(e, t) {
		return Nr(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function tn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function nn(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function rn(e, t) {
		return t !== null || K(e);
	}
	function an(e, t) {
		if (t === null) return e;
		let n = t[1];
		return n.operator === "reg" ? {
			type: "comparator",
			operator: "reg",
			left: e,
			right: n.right
		} : n.operator === "empty" ? {
			type: "comparator",
			operator: "empty",
			left: e,
			right: null
		} : {
			type: "comparator",
			operator: n.operator,
			left: e,
			right: n.right
		};
	}
	function on(e, t) {
		return {
			operator: e,
			right: t
		};
	}
	function sn(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function cn() {
		return { operator: "empty" };
	}
	function ln() {
		return "eq";
	}
	function un() {
		return "ne";
	}
	function dn() {
		return "le";
	}
	function fn() {
		return "lt";
	}
	function pn() {
		return "ge";
	}
	function mn() {
		return "gt";
	}
	function hn() {
		return "in";
	}
	function gn() {
		return "nin";
	}
	function _n() {
		return "subsetof";
	}
	function vn() {
		return "anyof";
	}
	function yn() {
		return "noneof";
	}
	function bn() {
		return "sizeof";
	}
	function xn() {
		return "size";
	}
	function Sn(e) {
		return {
			type: "groupExpression",
			value: e
		};
	}
	function Cn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function wn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Tn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function En(e, t) {
		return {
			type: "functionCall",
			name: e,
			args: t || []
		};
	}
	function Dn() {
		return "length";
	}
	function On() {
		return "count";
	}
	function kn() {
		return "match";
	}
	function An() {
		return "search";
	}
	function jn() {
		return "value";
	}
	function Mn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function Nn(e, t) {
		return t.length === 0 ? e : Nr(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function Pn(e, t) {
		return t.length === 0 ? e : Nr(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "*" ? "multi" : "div",
			left: e,
			right: t[3]
		}));
	}
	function Fn(e) {
		return {
			type: "groupOperation",
			value: e
		};
	}
	function In(e) {
		return {
			type: "root",
			next: G(e)
		};
	}
	function Ln(e) {
		return {
			type: "current",
			next: G(e)
		};
	}
	function Rn(e, t, n) {
		return {
			type: "slices",
			start: e === null ? null : e[0],
			end: t === null ? null : t[0],
			step: n ? n[2] === null ? null : n[2] : null
		};
	}
	function zn() {
		return { type: "wildcard" };
	}
	function Bn(e) {
		return {
			type: "numericLiteral",
			value: e
		};
	}
	function Vn(e) {
		return {
			type: "stringLiteral",
			value: _a(e)
		};
	}
	function Hn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Un(e, t) {
		return {
			type: "value",
			subtype: "regex",
			value: e,
			opts: t || ""
		};
	}
	function Wn(e) {
		return {
			type: "value",
			subtype: "string",
			value: e
		};
	}
	function Gn(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function Kn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function qn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Jn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function Yn(e) {
		return e;
	}
	function Xn(e) {
		for (let [t] of e || []) _a(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function Zn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function Qn(e, t) {
		return [e, t.value];
	}
	function $n(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function er(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function tr(e) {
		return _a(e);
	}
	function nr(e) {
		return _a(e);
	}
	function rr() {
		return "true";
	}
	function ir() {
		return "false";
	}
	function ar() {
		return "null";
	}
	function or(e) {
		return _a(e);
	}
	function sr() {
		return "true";
	}
	function cr() {
		return "false";
	}
	function lr() {
		return "null";
	}
	function ur(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function dr(e) {
		return e.join("");
	}
	function fr(e, t) {
		let n = parseFloat(z());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && B("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function pr() {
		let e = parseInt(z(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && B("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function mr(e) {
		return e.join("");
	}
	function hr(e) {
		return e.join("");
	}
	function gr(e) {
		return e;
	}
	function _r() {
		return "\"";
	}
	function vr(e) {
		return e;
	}
	function yr(e) {
		return e;
	}
	function br() {
		return "'";
	}
	function xr(e) {
		return e;
	}
	function Sr() {
		return "\\";
	}
	function Cr() {
		return "/";
	}
	function wr() {
		return "\b";
	}
	function Tr() {
		return "\f";
	}
	function Er() {
		return "\n";
	}
	function Dr() {
		return "\r";
	}
	function Or() {
		return "	";
	}
	function kr(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function j(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function Ar(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let M = t.peg$currPos | 0, N = M, jr = [{
		line: 1,
		column: 1
	}], P = M, F = t.peg$maxFailExpected || [], I = t.peg$silentFails | 0, L = /* @__PURE__ */ new Map(), R;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function z() {
		return e.substring(N, M);
	}
	function B(e, t) {
		throw t = t === void 0 ? Lr(N, M) : t, Rr(e, t);
	}
	function V(t = M) {
		let n = e.codePointAt(t);
		return n === void 0 ? "" : String.fromCodePoint(n);
	}
	function H(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function U(e, t, n, r) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n,
			unicode: r
		};
	}
	function Mr() {
		return { type: "any" };
	}
	function W() {
		return { type: "end" };
	}
	function Fr(e) {
		return {
			type: "other",
			description: e
		};
	}
	function Ir(t) {
		let n = jr[t], r;
		if (n) return n;
		if (t >= jr.length) r = jr.length - 1;
		else for (r = t; !jr[--r];);
		for (n = jr[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return jr[t] = n, n;
	}
	function Lr(e, t, n) {
		let i = Ir(e), a = Ir(t), o = {
			source: r,
			start: {
				offset: e,
				line: i.line,
				column: i.column
			},
			end: {
				offset: t,
				line: a.line,
				column: a.column
			}
		};
		return n && r && typeof r.offset == "function" && (o.start = r.offset(o.start), o.end = r.offset(o.end)), o;
	}
	function q(e) {
		M < P || (M > P && (P = M, F = []), F.push(e));
	}
	function Rr(e, t) {
		return new Pr(e, null, null, t);
	}
	function zr(e, t, n) {
		return new Pr(Pr.buildMessage(e, t), e, t, n);
	}
	function Br() {
		let e, t, r, i;
		return e = M, t = Si(), t === n ? (M = e, e = n) : (r = Vr(), i = ga(), i === n ? (M = e, e = n) : (N = e, e = zt(r))), e;
	}
	function Vr() {
		let e, t, r, i, a;
		for (e = M, t = [], r = M, i = $(), a = Hr(), a === n ? (M = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = M, i = $(), a = Hr(), a === n ? (M = r, r = n) : (i = [i, a], r = i);
		return N = e, t = Bt(t), e = t, e;
	}
	function Hr() {
		let e;
		return e = Wr(), e === n && (e = Ur()), e;
	}
	function Ur() {
		let e, t, r;
		return e = M, t = Ti(), t === n ? (M = e, e = n) : (r = Gr(), r === n ? (M = e, e = n) : (N = e, e = Vt(r))), e === n && (e = M, t = qr(), t !== n && (N = e, t = Ht(t)), e = t), e;
	}
	function Wr() {
		let e, t, r;
		return e = M, t = wi(), t === n ? (M = e, e = n) : (r = Kr(), r === n ? (M = e, e = n) : (N = e, e = Ut(r))), e;
	}
	function Gr() {
		let e, t;
		return e = M, t = Ei(), t !== n && (N = e, t = Wt()), e = t, e === n && (e = M, t = xi(), t !== n && (N = e, t = Gt(t)), e = t), e;
	}
	function Kr() {
		let e, t;
		return e = M, t = Ei(), t !== n && (N = e, t = Kt()), e = t, e === n && (e = M, t = xi(), t !== n && (N = e, t = qt(t)), e = t, e === n && (e = M, t = qr(), t !== n && (N = e, t = Jt(t)), e = t)), e;
	}
	function qr() {
		let e, t, r, i;
		return e = M, t = Xi(), t === n ? (M = e, e = n) : ($(), r = Jr(), r === n ? (M = e, e = n) : ($(), i = Zi(), i === n ? (M = e, e = n) : (N = e, e = Yt(r)))), e;
	}
	function Jr() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = ui(), t !== n) {
			for (r = [], i = M, a = $(), o = X(), o === n ? (M = i, i = n) : (s = $(), c = ui(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = $(), o = X(), o === n ? (M = i, i = n) : (s = $(), c = ui(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = Xt(t, r);
		} else M = e, e = n;
		return e;
	}
	function Yr() {
		let t, r, i, a, o, s, c, l, u;
		return t = M, r = ta(), r === n ? (M = t, t = n) : ($(), i = $i(), i === n ? (M = t, t = n) : ($(), a = Xr(), a === n ? (M = t, t = n) : ($(), o = ea(), o === n ? (M = t, t = n) : (s = M, I++, c = M, l = $(), u = e.charAt(M), re.test(u) ? M++ : (u = n, I === 0 && q(Ce)), u === n ? (M = c, c = n) : (l = [l, u], c = l), I--, c === n ? s = n : (M = s, s = void 0), s === n ? (M = t, t = n) : (N = t, t = Zt(a)))))), t === n && (t = M, r = ta(), r === n ? (M = t, t = n) : ($(), i = Xr(), i === n ? (M = t, t = n) : (N = t, t = Qt(i)))), t;
	}
	function Xr() {
		let e, t, r, i, a, o, s, c, l = M * 91 + 10, u = L.get(l);
		if (u) return M = u.nextPos, u.result;
		if (e = M, t = Zr(), t !== n) {
			for (r = [], i = M, a = $(), o = Oi(), o === n ? (M = i, i = n) : (s = $(), c = Zr(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = $(), o = Oi(), o === n ? (M = i, i = n) : (s = $(), c = Zr(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = $t(t, r);
		} else M = e, e = n;
		return L.set(l, {
			nextPos: M,
			result: e
		}), e;
	}
	function Zr() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = Qr(), t !== n) {
			for (r = [], i = M, a = $(), o = Di(), o === n ? (M = i, i = n) : (s = $(), c = Qr(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = $(), o = Di(), o === n ? (M = i, i = n) : (s = $(), c = Qr(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = en(t, r);
		} else M = e, e = n;
		return e;
	}
	function Qr() {
		let e, t, r, i, a;
		return e = M, t = ki(), t === n ? (M = e, e = n) : ($(), r = $i(), r === n ? (M = e, e = n) : ($(), i = Xr(), i === n ? (M = e, e = n) : ($(), a = ea(), a === n ? (M = e, e = n) : (N = e, e = tn(i))))), e === n && (e = M, t = ki(), t === n ? (M = e, e = n) : ($(), r = ni(), r === n ? (M = e, e = n) : (N = e, e = nn(r))), e === n && (e = $r())), e;
	}
	function $r() {
		let e, t, r, i, a;
		return e = M, t = Y(), t === n ? (M = e, e = n) : (r = M, i = $(), a = ei(), a === n ? (M = r, r = n) : (i = [i, a], r = i), r === n && (r = null), N = M, i = rn(t, r), i = i ? void 0 : n, i === n ? (M = e, e = n) : (N = e, e = an(t, r))), e === n && (e = ni()), e;
	}
	function ei() {
		let e, t, r;
		return e = M, t = ti(), t === n ? (M = e, e = n) : ($(), r = Y(), r === n ? (M = e, e = n) : (N = e, e = on(t, r))), e === n && (e = M, t = Ii(), t === n ? (M = e, e = n) : ($(), r = di(), r === n ? (M = e, e = n) : (N = e, e = sn(r))), e === n && (e = M, t = Wi(), t !== n && (N = e, t = cn()), e = t)), e;
	}
	function ti() {
		let e, t;
		return e = M, t = Ai(), t !== n && (N = e, t = ln()), e = t, e === n && (e = M, t = ji(), t !== n && (N = e, t = un()), e = t, e === n && (e = M, t = Pi(), t !== n && (N = e, t = dn()), e = t, e === n && (e = M, t = Fi(), t !== n && (N = e, t = fn()), e = t, e === n && (e = M, t = Mi(), t !== n && (N = e, t = pn()), e = t, e === n && (e = M, t = Ni(), t !== n && (N = e, t = mn()), e = t, e === n && (e = M, t = Li(), t !== n && (N = e, t = hn()), e = t, e === n && (e = M, t = Ri(), t !== n && (N = e, t = gn()), e = t, e === n && (e = M, t = zi(), t !== n && (N = e, t = _n()), e = t, e === n && (e = M, t = Bi(), t !== n && (N = e, t = vn()), e = t, e === n && (e = M, t = Vi(), t !== n && (N = e, t = yn()), e = t, e === n && (e = M, t = Hi(), t !== n && (N = e, t = bn()), e = t, e === n && (e = M, t = Ui(), t !== n && (N = e, t = xn()), e = t)))))))))))), e;
	}
	function ni() {
		let e, t, r, i;
		return e = M, t = $i(), t === n ? (M = e, e = n) : ($(), r = Xr(), r === n ? (M = e, e = n) : ($(), i = ea(), i === n ? (M = e, e = n) : (N = e, e = Sn(r)))), e === n && (e = ri(), e === n && (e = ci(), e === n && (e = M, t = Gi(), t !== n && (N = e, t = Cn()), e = t, e === n && (e = M, t = Ki(), t !== n && (N = e, t = wn()), e = t, e === n && (e = M, t = qi(), t !== n && (N = e, t = Tn()), e = t))))), e;
	}
	function ri() {
		let e, t, r, i, a;
		return e = M, t = ii(), t === n ? (M = e, e = n) : (r = $i(), r === n ? (M = e, e = n) : ($(), i = J(), i === n && (i = null), $(), a = ea(), a === n ? (M = e, e = n) : (N = e, e = En(t, i)))), e;
	}
	function ii() {
		let t, r;
		return t = M, e.substr(M, 6) === o ? (r = o, M += 6) : (r = n, I === 0 && q(we)), r !== n && (N = t, r = Dn()), t = r, t === n && (t = M, e.substr(M, 5) === s ? (r = s, M += 5) : (r = n, I === 0 && q(Te)), r !== n && (N = t, r = On()), t = r, t === n && (t = M, e.substr(M, 5) === c ? (r = c, M += 5) : (r = n, I === 0 && q(Ee)), r !== n && (N = t, r = kn()), t = r, t === n && (t = M, e.substr(M, 6) === l ? (r = l, M += 6) : (r = n, I === 0 && q(De)), r !== n && (N = t, r = An()), t = r, t === n && (t = M, e.substr(M, 5) === u ? (r = u, M += 5) : (r = n, I === 0 && q(Oe)), r !== n && (N = t, r = jn()), t = r)))), t;
	}
	function J() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = ai(), t !== n) {
			for (r = [], i = M, a = $(), o = X(), o === n ? (M = i, i = n) : (s = $(), c = ai(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = $(), o = X(), o === n ? (M = i, i = n) : (s = $(), c = ai(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = Mn(t, r);
		} else M = e, e = n;
		return e;
	}
	function ai() {
		let e;
		return e = Y(), e === n && (e = pi()), e;
	}
	function Y() {
		let t, r, i, a, o, s, c, l, u = M * 91 + 21, d = L.get(u);
		if (d) return M = d.nextPos, d.result;
		if (t = M, r = oi(), r !== n) {
			for (i = [], a = M, o = $(), s = e.charAt(M), _.test(s) ? M++ : (s = n, I === 0 && q(ke)), s === n ? (M = a, a = n) : (c = $(), l = oi(), l === n ? (M = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = M, o = $(), s = e.charAt(M), _.test(s) ? M++ : (s = n, I === 0 && q(ke)), s === n ? (M = a, a = n) : (c = $(), l = oi(), l === n ? (M = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			N = t, t = Nn(r, i);
		} else M = t, t = n;
		return L.set(u, {
			nextPos: M,
			result: t
		}), t;
	}
	function oi() {
		let t, r, i, a, o, s, c, l;
		if (t = M, r = si(), r !== n) {
			for (i = [], a = M, o = $(), s = e.charAt(M), v.test(s) ? M++ : (s = n, I === 0 && q(Ae)), s === n ? (M = a, a = n) : (c = $(), l = si(), l === n ? (M = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = M, o = $(), s = e.charAt(M), v.test(s) ? M++ : (s = n, I === 0 && q(Ae)), s === n ? (M = a, a = n) : (c = $(), l = si(), l === n ? (M = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			N = t, t = Pn(r, i);
		} else M = t, t = n;
		return t;
	}
	function si() {
		let e, t, r, i;
		return e = M, t = $i(), t === n ? (M = e, e = n) : ($(), r = Y(), r === n ? (M = e, e = n) : ($(), i = ea(), i === n ? (M = e, e = n) : (N = e, e = Fn(r)))), e === n && (e = ri(), e === n && (e = fi(), e === n && (e = ci()))), e;
	}
	function ci() {
		let e, t, r;
		return e = M, t = Si(), t === n ? (M = e, e = n) : (r = Vr(), r === n ? (M = e, e = n) : (N = e, e = In(r))), e === n && (e = M, t = Ci(), t === n ? (M = e, e = n) : (r = Vr(), r === n ? (M = e, e = n) : (N = e, e = Ln(r)))), e;
	}
	function li() {
		let e, t, r, i, a, o, s, c, l;
		return e = M, t = M, r = la(), r === n ? (M = t, t = n) : (i = $(), r = [r, i], t = r), t === n && (t = null), r = Qi(), r === n ? (M = e, e = n) : (i = $(), a = M, o = la(), o === n ? (M = a, a = n) : (s = $(), o = [o, s], a = o), a === n && (a = null), o = M, s = Qi(), s === n ? (M = o, o = n) : (c = $(), l = la(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), N = e, e = Rn(t, a, o)), e;
	}
	function ui() {
		let e, t;
		return e = Yr(), e === n && (e = li(), e === n && (e = M, t = Ei(), t !== n && (N = e, t = zn()), e = t, e === n && (e = M, t = la(), t !== n && (N = e, t = Bn(t)), e = t, e === n && (e = M, t = da(), t !== n && (N = e, t = Vn(t)), e = t, e === n && (e = M, t = yi(), t !== n && (N = e, t = Hn(t)), e = t))))), e;
	}
	function di() {
		let e, t, r;
		return e = M, t = na(), t === n ? (M = e, e = n) : (r = ra(), N = e, e = Un(t, r)), e;
	}
	function fi() {
		let e, t;
		return e = M, t = pi(), t !== n && (N = e, t = Wn(t)), e = t, e === n && (e = M, t = sa(), t !== n && (N = e, t = Gn(t)), e = t, e === n && (e = mi(), e === n && (e = _i(), e === n && (e = M, t = Gi(), t !== n && (N = e, t = Kn()), e = t, e === n && (e = M, t = Ki(), t !== n && (N = e, t = qn()), e = t, e === n && (e = M, t = qi(), t !== n && (N = e, t = Jn()), e = t)))))), e;
	}
	function pi() {
		let e, t;
		return I++, e = M, t = da(), t !== n && (N = e, t = Yn(t)), e = t, I--, e === n && (t = n, I === 0 && q(je)), e;
	}
	function mi() {
		let e, t, r, i;
		return e = M, t = Ji(), t === n ? (M = e, e = n) : ($(), r = hi(), r === n && (r = null), $(), i = Yi(), i === n ? (M = e, e = n) : (N = e, e = Xn(r))), e;
	}
	function hi() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = gi(), t !== n) {
			for (r = [], i = M, a = $(), o = X(), o === n ? (M = i, i = n) : (s = $(), c = gi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = $(), o = X(), o === n ? (M = i, i = n) : (s = $(), c = gi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = Zn(t, r);
		} else M = e, e = n;
		return e;
	}
	function gi() {
		let e, t, r, i;
		return e = M, t = da(), t === n ? (M = e, e = n) : ($(), r = Qi(), r === n ? (M = e, e = n) : ($(), i = fi(), i === n ? (M = e, e = n) : (N = e, e = Qn(t, i)))), e;
	}
	function _i() {
		let e, t, r, i;
		return e = M, t = Xi(), t === n ? (M = e, e = n) : ($(), r = vi(), r === n && (r = null), $(), i = Zi(), i === n ? (M = e, e = n) : (N = e, e = $n(r))), e;
	}
	function vi() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = fi(), t !== n) {
			for (r = [], i = M, a = $(), o = X(), o === n ? (M = i, i = n) : (s = $(), c = fi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = $(), o = X(), o === n ? (M = i, i = n) : (s = $(), c = fi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = er(t, r);
		} else M = e, e = n;
		return e;
	}
	function yi() {
		let t, r, i, a, o, s;
		if (t = M, r = M, i = M, a = e.charAt(M), ie.test(a) ? M++ : (a = n, I === 0 && q(Me)), a !== n) {
			for (o = [], s = bi(); s !== n;) o.push(s), s = bi();
			a = [a, o], i = a;
		} else M = i, i = n;
		if (r = i === n ? i : e.substring(r, M), r !== n && (N = t, r = tr(r)), t = r, t === n) {
			if (t = M, r = M, i = [], a = e.charAt(M), ae.test(a) ? M++ : (a = n, I === 0 && q(Ne)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(M), ae.test(a) ? M++ : (a = n, I === 0 && q(Ne));
			else i = n;
			r = i === n ? i : e.substring(r, M), r !== n && (N = t, r = nr(r)), t = r, t === n && (t = M, r = Gi(), r !== n && (N = t, r = rr()), t = r, t === n && (t = M, r = Ki(), r !== n && (N = t, r = ir()), t = r, t === n && (t = M, r = qi(), r !== n && (N = t, r = ar()), t = r)));
		}
		return t;
	}
	function bi() {
		let t, r, i, a;
		return t = e.charAt(M), oe.test(t) ? M++ : (t = n, I === 0 && q(Pe)), t === n && (t = M, e.charCodeAt(M) === 45 ? (r = "-", M++) : (r = n, I === 0 && q(Fe)), r === n ? (M = t, t = n) : (i = M, I++, a = e.charAt(M), se.test(a) ? M++ : (a = n, I === 0 && q(Ie)), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r))), t;
	}
	function xi() {
		let e, t;
		return e = M, t = ia(), t !== n && (N = e, t = or(t)), e = t, e === n && (e = M, t = Gi(), t !== n && (N = e, t = sr()), e = t, e === n && (e = M, t = Ki(), t !== n && (N = e, t = cr()), e = t, e === n && (e = M, t = qi(), t !== n && (N = e, t = lr()), e = t))), e;
	}
	function Si() {
		let t;
		return e.charCodeAt(M) === 36 ? (t = "$", M++) : (t = n, I === 0 && q(Le)), t;
	}
	function Ci() {
		let t;
		return e.charCodeAt(M) === 64 ? (t = "@", M++) : (t = n, I === 0 && q(Re)), t;
	}
	function wi() {
		let t;
		return e.substr(M, 2) === ".." ? (t = "..", M += 2) : (t = n, I === 0 && q(ze)), t;
	}
	function Ti() {
		let t;
		return e.charCodeAt(M) === 46 ? (t = ".", M++) : (t = n, I === 0 && q(Be)), t;
	}
	function Ei() {
		let t;
		return e.charCodeAt(M) === 42 ? (t = "*", M++) : (t = n, I === 0 && q(Ve)), t;
	}
	function Di() {
		let t;
		return e.substr(M, 2) === "&&" ? (t = "&&", M += 2) : (t = n, I === 0 && q(b)), t;
	}
	function Oi() {
		let t;
		return e.substr(M, 2) === "||" ? (t = "||", M += 2) : (t = n, I === 0 && q(He)), t;
	}
	function ki() {
		let t;
		return e.charCodeAt(M) === 33 ? (t = "!", M++) : (t = n, I === 0 && q(Ue)), t;
	}
	function Ai() {
		let t;
		return e.substr(M, 2) === "==" ? (t = "==", M += 2) : (t = n, I === 0 && q(x)), t;
	}
	function ji() {
		let t;
		return e.substr(M, 2) === "!=" ? (t = "!=", M += 2) : (t = n, I === 0 && q(We)), t;
	}
	function Mi() {
		let t;
		return e.substr(M, 2) === ">=" ? (t = ">=", M += 2) : (t = n, I === 0 && q(Ge)), t;
	}
	function Ni() {
		let t;
		return e.charCodeAt(M) === 62 ? (t = ">", M++) : (t = n, I === 0 && q(Ke)), t;
	}
	function Pi() {
		let t;
		return e.substr(M, 2) === "<=" ? (t = "<=", M += 2) : (t = n, I === 0 && q(qe)), t;
	}
	function Fi() {
		let t;
		return e.charCodeAt(M) === 60 ? (t = "<", M++) : (t = n, I === 0 && q(S)), t;
	}
	function Ii() {
		let t;
		return e.substr(M, 2) === "=~" ? (t = "=~", M += 2) : (t = n, I === 0 && q(Je)), t;
	}
	function Li() {
		let t, r, i, a;
		return t = M, e.substr(M, 2) === "in" ? (r = "in", M += 2) : (r = n, I === 0 && q(C)), r === n ? (M = t, t = n) : (i = M, I++, a = Q(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ri() {
		let t, r, i, a;
		return t = M, e.substr(M, 3) === "nin" ? (r = "nin", M += 3) : (r = n, I === 0 && q(Ye)), r === n ? (M = t, t = n) : (i = M, I++, a = Q(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function zi() {
		let t, r, i, a;
		return t = M, e.substr(M, 8) === d ? (r = d, M += 8) : (r = n, I === 0 && q(w)), r === n ? (M = t, t = n) : (i = M, I++, a = Q(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Bi() {
		let t, r, i, a;
		return t = M, e.substr(M, 5) === f ? (r = f, M += 5) : (r = n, I === 0 && q(Xe)), r === n ? (M = t, t = n) : (i = M, I++, a = Q(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Vi() {
		let t, r, i, a;
		return t = M, e.substr(M, 6) === p ? (r = p, M += 6) : (r = n, I === 0 && q(T)), r === n ? (M = t, t = n) : (i = M, I++, a = Q(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Hi() {
		let t, r, i, a;
		return t = M, e.substr(M, 6) === m ? (r = m, M += 6) : (r = n, I === 0 && q(Ze)), r === n ? (M = t, t = n) : (i = M, I++, a = Q(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ui() {
		let t, r, i, a;
		return t = M, e.substr(M, 4) === ee ? (r = ee, M += 4) : (r = n, I === 0 && q(E)), r === n ? (M = t, t = n) : (i = M, I++, a = Q(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = M, e.substr(M, 5) === h ? (r = h, M += 5) : (r = n, I === 0 && q(Qe)), r === n ? (M = t, t = n) : (i = M, I++, a = Q(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = M, e.substr(M, 4) === te ? (r = te, M += 4) : (r = n, I === 0 && q($e)), r === n ? (M = t, t = n) : (i = M, I++, a = Q(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = M, e.substr(M, 5) === ne ? (r = ne, M += 5) : (r = n, I === 0 && q(et)), r === n ? (M = t, t = n) : (i = M, I++, a = Q(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = M, e.substr(M, 4) === g ? (r = g, M += 4) : (r = n, I === 0 && q(tt)), r === n ? (M = t, t = n) : (i = M, I++, a = Q(), I--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t;
		return e.charCodeAt(M) === 123 ? (t = "{", M++) : (t = n, I === 0 && q(nt)), t;
	}
	function Yi() {
		let t;
		return e.charCodeAt(M) === 125 ? (t = "}", M++) : (t = n, I === 0 && q(rt)), t;
	}
	function Xi() {
		let t;
		return e.charCodeAt(M) === 91 ? (t = "[", M++) : (t = n, I === 0 && q(it)), t;
	}
	function Zi() {
		let t;
		return e.charCodeAt(M) === 93 ? (t = "]", M++) : (t = n, I === 0 && q(at)), t;
	}
	function Qi() {
		let t;
		return e.charCodeAt(M) === 58 ? (t = ":", M++) : (t = n, I === 0 && q(ot)), t;
	}
	function X() {
		let t;
		return e.charCodeAt(M) === 44 ? (t = ",", M++) : (t = n, I === 0 && q(st)), t;
	}
	function $i() {
		let t;
		return e.charCodeAt(M) === 40 ? (t = "(", M++) : (t = n, I === 0 && q(ct)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(M) === 41 ? (t = ")", M++) : (t = n, I === 0 && q(lt)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(M) === 63 ? (t = "?", M++) : (t = n, I === 0 && q(ut)), t;
	}
	function na() {
		let t, r, i, a, o, s;
		if (I++, t = M, e.charCodeAt(M) === 47 ? (r = "/", M++) : (r = n, I === 0 && q(ft)), r !== n) {
			for (i = [], a = e.charAt(M), ce.test(a) ? M++ : (a = n, I === 0 && q(pt)), a === n && (a = M, e.charCodeAt(M) === 92 ? (o = "\\", M++) : (o = n, I === 0 && q(mt)), o === n ? (M = a, a = n) : (e.length > M ? (s = e.charAt(M), M++) : (s = n, I === 0 && q(ht)), s === n ? (M = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(M), ce.test(a) ? M++ : (a = n, I === 0 && q(pt)), a === n && (a = M, e.charCodeAt(M) === 92 ? (o = "\\", M++) : (o = n, I === 0 && q(mt)), o === n ? (M = a, a = n) : (e.length > M ? (s = e.charAt(M), M++) : (s = n, I === 0 && q(ht)), s === n ? (M = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(M) === 47 ? (a = "/", M++) : (a = n, I === 0 && q(ft)), a === n ? (M = t, t = n) : (N = t, t = ur(i));
		} else M = t, t = n;
		return I--, t === n && (r = n, I === 0 && q(dt)), t;
	}
	function ra() {
		let t, r, i;
		for (t = M, r = [], i = e.charAt(M), le.test(i) ? M++ : (i = n, I === 0 && q(gt)); i !== n;) r.push(i), i = e.charAt(M), le.test(i) ? M++ : (i = n, I === 0 && q(gt));
		return N = t, r = dr(r), t = r, t;
	}
	function ia() {
		let t, r, i, a, o;
		if (t = M, r = M, i = aa(), i !== n) {
			for (a = [], o = oa(); o !== n;) a.push(o), o = oa();
			i = [i, a], r = i;
		} else M = r, r = n;
		return t = r === n ? r : e.substring(t, M), t;
	}
	function aa() {
		let t, r, i;
		return t = e.charAt(M), ue.test(t) ? M++ : (t = n, I === 0 && q(_t)), t === n && (t = M, r = e.charAt(M), de.test(r) ? M++ : (r = n, I === 0 && q(D)), r === n ? (M = t, t = n) : (i = e.charAt(M), fe.test(i) ? M++ : (i = n, I === 0 && q(vt)), i === n ? (M = t, t = n) : (r = [r, i], t = r))), t;
	}
	function oa() {
		let t;
		return t = aa(), t === n && (t = e.charAt(M), y.test(t) ? M++ : (t = n, I === 0 && q(O))), t;
	}
	function sa() {
		let t, r, i, a, o, s, c;
		if (I++, t = M, e.charCodeAt(M) === 45 ? (r = "-", M++) : (r = n, I === 0 && q(Fe)), r === n && (r = null), i = ca(), i !== n) {
			if (a = M, e.charCodeAt(M) === 46 ? (o = ".", M++) : (o = n, I === 0 && q(Be)), o !== n) {
				if (s = [], c = e.charAt(M), y.test(c) ? M++ : (c = n, I === 0 && q(O)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(M), y.test(c) ? M++ : (c = n, I === 0 && q(O));
				else s = n;
				s === n ? (M = a, a = n) : (o = [o, s], a = o);
			} else M = a, a = n;
			a === n && (a = null), o = ua(), o === n && (o = null), N = t, t = fr(a, o);
		} else M = t, t = n;
		return I--, t === n && (r = n, I === 0 && q(yt)), t;
	}
	function ca() {
		let t, r, i, a;
		if (e.charCodeAt(M) === 48 ? (t = "0", M++) : (t = n, I === 0 && q(bt)), t === n) {
			if (t = M, r = e.charAt(M), pe.test(r) ? M++ : (r = n, I === 0 && q(xt)), r !== n) {
				for (i = [], a = e.charAt(M), y.test(a) ? M++ : (a = n, I === 0 && q(O)); a !== n;) i.push(a), a = e.charAt(M), y.test(a) ? M++ : (a = n, I === 0 && q(O));
				r = [r, i], t = r;
			} else M = t, t = n;
		}
		return t;
	}
	function la() {
		let t, r, i, a, o, s;
		if (I++, t = M, e.charCodeAt(M) === 48 ? (r = "0", M++) : (r = n, I === 0 && q(bt)), r === n) {
			if (r = M, e.charCodeAt(M) === 45 ? (i = "-", M++) : (i = n, I === 0 && q(Fe)), i === n && (i = null), a = e.charAt(M), pe.test(a) ? M++ : (a = n, I === 0 && q(xt)), a !== n) {
				for (o = [], s = e.charAt(M), y.test(s) ? M++ : (s = n, I === 0 && q(O)); s !== n;) o.push(s), s = e.charAt(M), y.test(s) ? M++ : (s = n, I === 0 && q(O));
				i = [
					i,
					a,
					o
				], r = i;
			} else M = r, r = n;
		}
		return r !== n && (N = t, r = pr()), t = r, I--, t === n && (r = n, I === 0 && q(k)), t;
	}
	function ua() {
		let t, r, i, a, o;
		if (t = M, r = e.charAt(M), me.test(r) ? M++ : (r = n, I === 0 && q(St)), r !== n) {
			if (i = e.charAt(M), _.test(i) ? M++ : (i = n, I === 0 && q(ke)), i === n && (i = null), a = [], o = e.charAt(M), y.test(o) ? M++ : (o = n, I === 0 && q(O)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(M), y.test(o) ? M++ : (o = n, I === 0 && q(O));
			else a = n;
			a === n ? (M = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else M = t, t = n;
		return t;
	}
	function da() {
		let t, r, i, a;
		if (I++, t = M, e.charCodeAt(M) === 34 ? (r = "\"", M++) : (r = n, I === 0 && q(Ct)), r !== n) {
			for (i = [], a = fa(); a !== n;) i.push(a), a = fa();
			e.charCodeAt(M) === 34 ? (a = "\"", M++) : (a = n, I === 0 && q(Ct)), a === n ? (M = t, t = n) : (N = t, t = mr(i));
		} else M = t, t = n;
		if (t === n) {
			if (t = M, e.charCodeAt(M) === 39 ? (r = "'", M++) : (r = n, I === 0 && q(A)), r !== n) {
				for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
				e.charCodeAt(M) === 39 ? (a = "'", M++) : (a = n, I === 0 && q(A)), a === n ? (M = t, t = n) : (N = t, t = hr(i));
			} else M = t, t = n;
		}
		return I--, t === n && (r = n, I === 0 && q(je)), t;
	}
	function fa() {
		let t, r, i;
		return t = M, r = M, I++, i = e.charAt(M), he.test(i) ? M++ : (i = n, I === 0 && q(wt)), I--, i === n ? r = void 0 : (M = r, r = n), r === n ? (M = t, t = n) : (i = ma(), i === n ? (M = t, t = n) : (N = t, t = gr(i))), t === n && (t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, I === 0 && q(mt)), r === n ? (M = t, t = n) : (e.charCodeAt(M) === 34 ? (i = "\"", M++) : (i = n, I === 0 && q(Ct)), i === n ? (M = t, t = n) : (N = t, t = _r())), t === n && (t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, I === 0 && q(mt)), r === n ? (M = t, t = n) : (i = ha(), i === n ? (M = t, t = n) : (N = t, t = vr(i))))), t;
	}
	function pa() {
		let t, r, i;
		return t = M, r = M, I++, i = e.charAt(M), ge.test(i) ? M++ : (i = n, I === 0 && q(Tt)), I--, i === n ? r = void 0 : (M = r, r = n), r === n ? (M = t, t = n) : (i = ma(), i === n ? (M = t, t = n) : (N = t, t = yr(i))), t === n && (t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, I === 0 && q(mt)), r === n ? (M = t, t = n) : (e.charCodeAt(M) === 39 ? (i = "'", M++) : (i = n, I === 0 && q(A)), i === n ? (M = t, t = n) : (N = t, t = br())), t === n && (t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, I === 0 && q(mt)), r === n ? (M = t, t = n) : (i = ha(), i === n ? (M = t, t = n) : (N = t, t = xr(i))))), t;
	}
	function ma() {
		let t, r, i, a;
		return t = e.charAt(M), _e.test(t) ? M++ : (t = n, I === 0 && q(Et)), t === n && (t = M, r = M, i = e.charAt(M), de.test(i) ? M++ : (i = n, I === 0 && q(D)), i === n ? (M = r, r = n) : (a = e.charAt(M), fe.test(a) ? M++ : (a = n, I === 0 && q(vt)), a === n ? (M = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, M)), t;
	}
	function ha() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, I === 0 && q(mt)), r !== n && (N = t, r = Sr()), t = r, t === n && (t = M, e.charCodeAt(M) === 47 ? (r = "/", M++) : (r = n, I === 0 && q(ft)), r !== n && (N = t, r = Cr()), t = r, t === n && (t = M, e.charCodeAt(M) === 98 ? (r = "b", M++) : (r = n, I === 0 && q(Dt)), r !== n && (N = t, r = wr()), t = r, t === n && (t = M, e.charCodeAt(M) === 102 ? (r = "f", M++) : (r = n, I === 0 && q(Ot)), r !== n && (N = t, r = Tr()), t = r, t === n && (t = M, e.charCodeAt(M) === 110 ? (r = "n", M++) : (r = n, I === 0 && q(kt)), r !== n && (N = t, r = Er()), t = r, t === n && (t = M, e.charCodeAt(M) === 114 ? (r = "r", M++) : (r = n, I === 0 && q(At)), r !== n && (N = t, r = Dr()), t = r, t === n && (t = M, e.charCodeAt(M) === 116 ? (r = "t", M++) : (r = n, I === 0 && q(jt)), r !== n && (N = t, r = Or()), t = r, t === n && (t = M, e.charCodeAt(M) === 117 ? (r = "u", M++) : (r = n, I === 0 && q(Mt)), r === n ? (M = t, t = n) : (i = M, a = M, o = e.charAt(M), ve.test(o) ? M++ : (o = n, I === 0 && q(Nt)), o === n ? (M = a, a = n) : (s = e.charAt(M), ye.test(s) ? M++ : (s = n, I === 0 && q(Pt)), s === n ? (M = a, a = n) : (c = Z(), c === n ? (M = a, a = n) : (l = Z(), l === n ? (M = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, M), i === n ? (M = t, t = n) : (e.substr(M, 2) === "\\u" ? (a = "\\u", M += 2) : (a = n, I === 0 && q(Ft)), a === n ? (M = t, t = n) : (o = M, s = M, c = e.charAt(M), ve.test(c) ? M++ : (c = n, I === 0 && q(Nt)), c === n ? (M = s, s = n) : (l = e.charAt(M), be.test(l) ? M++ : (l = n, I === 0 && q(It)), l === n ? (M = s, s = n) : (u = Z(), u === n ? (M = s, s = n) : (d = Z(), d === n ? (M = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, M), o === n ? (M = t, t = n) : (N = t, t = kr(i, o))))), t === n && (t = M, e.charCodeAt(M) === 117 ? (r = "u", M++) : (r = n, I === 0 && q(Mt)), r === n ? (M = t, t = n) : (i = M, a = M, o = Z(), o === n ? (M = a, a = n) : (s = Z(), s === n ? (M = a, a = n) : (c = Z(), c === n ? (M = a, a = n) : (l = Z(), l === n ? (M = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, M), i === n ? (M = t, t = n) : (N = M, a = j(i), a = a ? n : void 0, a === n ? (M = t, t = n) : (N = t, t = Ar(i)))))))))))), t;
	}
	function Z() {
		let t;
		return t = e.charAt(M), xe.test(t) ? M++ : (t = n, I === 0 && q(Lt)), t;
	}
	function Q() {
		let t;
		return t = e.charAt(M), oe.test(t) ? M++ : (t = n, I === 0 && q(Pe)), t;
	}
	function $() {
		let t, r;
		for (I++, t = [], r = e.charAt(M), Se.test(r) ? M++ : (r = n, I === 0 && q(Rt)); r !== n;) t.push(r), r = e.charAt(M), Se.test(r) ? M++ : (r = n, I === 0 && q(Rt));
		return I--, t;
	}
	function ga() {
		let t, r;
		return t = M, I++, e.length > M ? (r = e.charAt(M), M++) : (r = n, I === 0 && q(ht)), I--, r === n ? t = void 0 : (M = t, t = n), t;
	}
	function _a(e) {
		return e.length > 1e3 && B("Member name too long (maximum 1000 characters)"), e;
	}
	R = a();
	let va = R !== n && M === e.length;
	function ya() {
		throw R !== n && M < e.length && q(W()), zr(F, P < e.length ? V(P) : null, P < e.length ? Lr(P, P + 1) : Lr(P, P));
	}
	if (t.peg$library) return {
		peg$result: R,
		peg$currPos: M,
		peg$FAILED: n,
		peg$maxFailExpected: F,
		peg$maxFailPos: P,
		peg$success: va,
		peg$throw: va ? void 0 : ya
	};
	if (va) return R;
	ya();
}
var Ir = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), Lr = {
	length: {
		args: ["value"],
		logical: !1
	},
	count: {
		args: ["nodes"],
		logical: !1
	},
	value: {
		args: ["nodes"],
		logical: !1
	},
	match: {
		args: ["value", "value"],
		logical: !0
	},
	search: {
		args: ["value", "value"],
		logical: !0
	}
}, q = (e) => {
	throw new Or(1, 1, e);
}, Rr = (e) => e.type === "root" || e.type === "current", zr = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function Br(e) {
	let t = [{
		node: e,
		context: "nodes"
	}], n = (e) => {
		for (let n = e.next; n; n = n.next) {
			let e = n.value;
			if (e.type === "dotdot" && (e = e.value), e.type !== "bracketExpression") continue;
			let r = e.value, i = r.type === "unions" ? r.values : [r];
			for (let e of i) e.type === "filterExpression" && t.push({
				node: e.value,
				context: "test"
			});
		}
	};
	for (; t.length > 0;) {
		let { node: e, context: r } = t.pop();
		if (typeof e != "object" || !e) continue;
		let i = e;
		if (Rr(i)) r === "value" && !zr(i) && q("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && q(`Expected a query, found ${String(i.type)}`), i.type) {
			case "logicalExpression":
			case "notExpression":
			case "groupExpression":
				i.type === "logicalExpression" ? t.push({
					node: i.left,
					context: "test"
				}, {
					node: i.right,
					context: "test"
				}) : t.push({
					node: i.value,
					context: "test"
				});
				break;
			case "comparator": {
				let e = Ir.has(i.operator) ? "value" : "any";
				t.push({
					node: i.left,
					context: e
				}), i.operator !== "reg" && t.push({
					node: i.right,
					context: e
				});
				break;
			}
			case "functionCall": {
				let e = i.name, n = Lr[e], a = i.args;
				a.length !== n.args.length && q(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && q(`The result of ${e}() must be compared`), r === "value" && n.logical && q(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
					node: e,
					context: n.args[r]
				}));
				break;
			}
			case "operation":
				t.push({
					node: i.left,
					context: "value"
				}, {
					node: i.right,
					context: "value"
				});
				break;
			case "groupOperation":
				t.push({
					node: i.value,
					context: r === "any" ? "any" : "value"
				});
				break;
			case "value": r === "test" && q("A literal must be compared");
		}
	}
}
function Vr(e) {
	let t;
	try {
		t = Fr(e);
	} catch (e) {
		if (R(e)) throw new Or(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new Or(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new Or(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return Br(t), t;
}
var Hr = /* @__PURE__ */ new Set([
	"(",
	")",
	"*",
	"+",
	"-",
	".",
	"?",
	"[",
	"\\",
	"]",
	"^",
	"n",
	"r",
	"t",
	"{",
	"|",
	"}"
]), Ur = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), Wr = (e) => e >= 55296 && e <= 56319, Gr = (e) => e >= 56320 && e <= 57343, Kr = (e) => e !== void 0 && e >= "0" && e <= "9", qr = (e, t) => {
	let n = e.charCodeAt(t);
	return Wr(n) && Gr(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : Wr(n) || Gr(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, Jr = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !Hr.has(n) ? null : n === "n" ? {
		text: "\\n",
		length: 2,
		code: 10
	} : n === "r" ? {
		text: "\\r",
		length: 2,
		code: 13
	} : n === "t" ? {
		text: "\\t",
		length: 2,
		code: 9
	} : {
		text: "\\" + n,
		length: 2,
		code: n.charCodeAt(0)
	};
}, Yr = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return Ur.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, Xr = (e, t) => {
	let n = e[t];
	return n === "\\" ? Jr(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : qr(e, t);
}, Zr = (e, t) => {
	let n = t + 1, r = "[";
	e[n] === "^" && (r += "^", n++);
	let i = !0;
	for (;;) {
		let a = e[n];
		if (a === void 0) return null;
		if (a === "]") return i ? null : {
			text: r + "]",
			length: n + 1 - t
		};
		if (a === "-") {
			if (!i && e[n + 1] !== "]") return null;
			r += "-", n++, i = !1;
			continue;
		}
		if (i = !1, a === "\\" && (e[n + 1] === "p" || e[n + 1] === "P")) {
			let t = Yr(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = Xr(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = Xr(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, Qr = (e, t) => {
	let n = t + 1, r = n;
	for (; Kr(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; Kr(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, $r = (e) => {
	let t = e, n = "", r = 0, i = !1, a = 0;
	for (; a < t.length;) {
		let e = t[a];
		switch (e) {
			case "|":
				n += "|", i = !1, a++;
				continue;
			case "(":
				r++, n += "(", i = !1, a++;
				continue;
			case ")":
				if (r === 0) return null;
				r--, n += ")", i = !0, a++;
				continue;
			case "*":
			case "+":
			case "?":
				if (!i) return null;
				n += e, i = !1, a++;
				continue;
			case "{": {
				let e = i ? Qr(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = Zr(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = Yr(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = Jr(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = qr(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, ei = 1e3, ti = 1e3, ni = 16, ri = /^[dgimsuy]*$/, ii = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, J = class extends Error {}, ai = 0, Y = 1, oi = 2, si = 3, ci = 4, li = 5, ui = Tr(2, 31) - 1, di = (e, t) => {
	let n = e.op.length, r = e.scratch ?? {
		clist: new Int32Array(n),
		nlist: new Int32Array(n),
		onList: new Int32Array(n),
		stack: new Int32Array(n),
		atomGen: new Int32Array(e.atoms.length),
		atomHit: new Uint8Array(e.atoms.length),
		gen: 0,
		step: 0
	};
	return e.scratch = void 0, (r.gen > ui - t - 2 || r.step > ui - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, fi = /* @__PURE__ */ new Set([
	"^",
	"$",
	"\\",
	".",
	"*",
	"+",
	"?",
	"(",
	")",
	"[",
	"]",
	"{",
	"}",
	"|",
	"/"
]), pi = /^\{(\d+)(?:,(\d*))?\}/, mi = /^[0-9a-fA-F]{4}/, hi = /^\(\?([ims]*)(?:-([ims]*))?:/, gi = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, _i = class {
	constructor(e, t, n, r = !1) {
		this.src = e, this.unicode = t, this.iregexp = r, this.i = 0, this.mods = {
			i: n.includes("i"),
			m: n.includes("m"),
			s: n.includes("s")
		};
	}
	atom(e, t) {
		return {
			t: "atom",
			src: e,
			literal: t,
			mods: this.mods
		};
	}
	parse() {
		let e = this.parseAlt();
		if (this.i < this.src.length) throw new J("unexpected character");
		return e;
	}
	parseAlt() {
		let e = [this.parseSeq()];
		for (; this.src[this.i] === "|";) this.i++, e.push(this.parseSeq());
		return e.length === 1 ? e[0] : {
			t: "alt",
			alts: e
		};
	}
	parseSeq() {
		let e = [];
		for (; this.i < this.src.length && this.src[this.i] !== "|" && this.src[this.i] !== ")";) e.push(this.parseTerm());
		return e.length === 1 ? e[0] : {
			t: "cat",
			items: e
		};
	}
	parseTerm() {
		let e = this.src[this.i];
		return e === "^" ? (this.i++, {
			t: "bol",
			multiline: this.mods.m
		}) : e === "$" ? (this.i++, {
			t: "eol",
			multiline: this.mods.m
		}) : this.parseQuantifier(this.parseAtom());
	}
	parseAtom() {
		let { src: e } = this, t = this.i, n = e[t];
		if (n === "(") {
			let n = this.mods;
			if (e[t + 1] === "?") {
				let r = hi.exec(e.slice(t, t + 12));
				if (!r) throw new J("lookaround or named group");
				let i = Dr({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new J("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new J("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new J("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(fi.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new J("trailing backslash");
		if (r === "b" || r === "B") throw new J("word boundary");
		if (r >= "1" && r <= "9") throw new J("backreference");
		if (r === "0") {
			if (n) return 2;
			let r = 2;
			for (; r < 4 && /[0-7]/.test(t[e + r] ?? "");) r++;
			return r;
		}
		if (r === "c") return 3;
		if (r === "x" && /^[0-9a-fA-F]{2}/.test(t.slice(e + 2))) return 4;
		if (n && (r === "p" || r === "P" || r === "u") && t[e + 2] === "{") {
			let n = t.indexOf("}", e + 3);
			if (n === -1) throw new J("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && mi.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (mi.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
			}
			return 6;
		}
		return 2;
	}
	parseQuantifier(e) {
		let { src: t } = this, n = t[this.i], r, i;
		if (n === "*") r = 0, i = Infinity, this.i++;
		else if (n === "+") r = 1, i = Infinity, this.i++;
		else if (n === "?") r = 0, i = 1, this.i++;
		else if (n === "{") {
			let n = pi.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > ei || i !== Infinity && i > ei) throw new J("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, vi = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= ei) throw new J("pattern too large");
		return this.op.push(e), this.x.push(t), this.y.push(n), this.op.length - 1;
	}
	atomId(e) {
		let t = (e.mods.i ? "i" : "") + (e.mods.s ? "s" : "") + (this.unicode ? "u" : ""), n = `${t}/${e.src}`, r = this.atomIds.get(n);
		return r === void 0 && (r = this.atoms.length, this.atoms.push({
			re: RegExp(`^(?:${e.src})$`, t),
			literal: e.mods.i ? void 0 : e.literal
		}), this.atomIds.set(n, r)), r;
	}
	finish() {
		this.emit(li);
	}
	compile(e) {
		if (++this.work > 4 * ei) throw new J("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(ai, this.atomId(e));
				return;
			case "bol":
				this.emit(si, +!!e.multiline);
				return;
			case "eol":
				this.emit(ci, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit(Y);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(oi)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit(Y);
					this.x[t] = t + 1, this.compile(e.node), this.emit(oi, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit(Y);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, yi = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new _i(e, r, t, n).parse(), a = new vi(r);
		return a.compile(i), a.finish(), {
			op: a.op,
			x: a.x,
			y: a.y,
			atoms: a.atoms,
			unicode: r,
			sticky: t.includes("y")
		};
	} catch (e) {
		if (e instanceof RangeError) throw e;
		return null;
	}
}, bi = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: te, atomHit: ne } = r, g = r.gen, re = r.step;
	r.gen = g + t.length + 2, r.step = re + t.length + 2;
	let _ = 0, v = !1, ie = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== g) switch (ee[r] = g, ++c === 64 && (u(c), c = 0), i[r]) {
				case ai:
					e[n++] = r;
					break;
				case li: return u(c), v = !0, n;
				case oi:
					h[s++] = a[r];
					break;
				case Y:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case si:
					(_ === 0 || a[r] === 1 && gi(t.charCodeAt(_ - 1))) && (h[s++] = r + 1);
					break;
				case ci: (_ === t.length || a[r] === 1 && gi(t.charCodeAt(_))) && (h[s++] = r + 1);
			}
		}
		return u(c), n;
	};
	if (g++, p = ie(d, 0, 0), v) return !0;
	for (; _ < t.length;) {
		if (p === 0 && l) return !1;
		let e = (c ? t.codePointAt(_) : t.charCodeAt(_)) > 65535 ? 2 : 1, n = t.slice(_, _ + e), r = re + _ + 1;
		g++, m = 0, _ += e;
		for (let e = 0; e < p; e++) {
			let t = d[e], i = a[t];
			if (te[i] !== r) {
				te[i] = r;
				let e = s[i];
				ne[i] = (e.literal === void 0 ? e.re.test(n) : e.literal === n) ? 1 : 0;
			}
			if (ne[i] === 1 && (m = ie(f, m, t + 1), v)) return !0;
		}
		if (!l && (m = ie(f, m, 0), v)) return !0;
		let i = d;
		d = f, f = i, p = m;
	}
	return !1;
}, xi = (e, t, n) => {
	let r = di(e, t.length);
	try {
		return bi(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, Si = 256, Ci = /* @__PURE__ */ new Map(), wi = 0, Ti = (e, t, n, r, i = !1) => {
	if (e.length > ti || t.length > 7 || !ri.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = Ci.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = ii(s) > ni ? null : yi(n ? `^(?:${s})$` : s, t, i);
	wi >= Si && (Ci.clear(), wi = 0);
	let l = Ci.get(s);
	return l === void 0 && Ci.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), wi++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, Ei = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), xi(e, t, n);
}, Di = class {
	constructor(e) {
		this.nodes = e;
	}
}, Oi = (e) => {
	let t = !1;
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r === "\\" && n + 1 < e.length) {
			let r = e[n + 1];
			if ((r === "b" || r === "B") && !t) return !0;
			n++;
		} else r === "[" && !t ? t = !0 : r === "]" && t && (t = !1);
	}
	return !1;
}, ki = (e) => {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (n === "\\") {
			let n = e[t + 1];
			if (n >= "1" && n <= "9") return !1;
			t++;
		} else if (n === "(" && e[t + 1] === "?") {
			let n = e[t + 2];
			if (n === "=" || n === "!") return !1;
			if (n === "<") {
				let n = e[t + 3];
				if (n === "=" || n === "!" || /[a-zA-Z]/.test(n ?? "")) return !1;
			}
		}
	}
	return !Oi(e);
}, Ai = 256, ji = /* @__PURE__ */ new Map(), Mi = (e, t) => {
	let n = ji.get(e);
	return n === void 0 && (n = ki(e), ji.size >= Ai && ji.clear(), ji.set(Array.from(e).join(""), n)), t(e.length), n;
}, Ni = /* @__PURE__ */ new Map(), Pi = (e, t) => {
	let n = Ni.get(e);
	return n === void 0 && (n = $r(e), n !== null && (n = Array.from(n).join("")), Ni.size >= Ai && Ni.clear(), Ni.set(Array.from(e).join(""), n)), t(e.length), n;
}, Fi = 256, Ii = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > ti) c = null;
		else if (o) {
			let n = Pi(e, i);
			c = n === null ? null : Ti(n, t, r, i, !0);
		} else c = Mi(e, i) ? Ti(e, t, r, i) : null;
		s !== void 0 && (s.size >= Fi && s.clear(), s.set(a, c));
	}
	return c !== null && Ei(c, n, i);
}, Li = {
	length: (e, t) => {
		let n = e[0];
		if (U(n)) {
			t(n.length);
			let e = n.length;
			for (let t = 0; t < n.length - 1; t++) {
				let r = n.charCodeAt(t);
				if (r >= 55296 && r <= 56319) {
					let r = n.charCodeAt(t + 1);
					r >= 56320 && r <= 57343 && (e--, t++);
				}
			}
			return e;
		}
		if (z(n)) return L(n);
		if (V(n)) {
			let e = I(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !U(r) || !U(i) ? !1 : Ii(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !U(r) || !U(i) ? !1 : Ii(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, Ri = (e, t, n = j) => e === void 0 && t === void 0 || M(e, t, n), zi = (e, t, n = j) => !M(e, t, n), Bi = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, Vi = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return Bi(n) - Bi(i);
	}
	return e.length - t.length;
}, Hi = (e, t, n = j) => H(e) && H(t) ? e < t : U(e) && U(t) ? (n(Math.min(e.length, t.length)), Vi(e, t) < 0) : !1, Ui = (e, t, n = j) => Hi(e, t, n) || Ri(e, t, n), Wi = (e, t, n = j) => H(e) && H(t) ? e > t : U(e) && U(t) ? (n(Math.min(e.length, t.length)), Vi(e, t) > 0) : !1, Gi = (e, t, n = j) => Wi(e, t, n) || Ri(e, t, n), Ki = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, qi = (e, t, n) => {
	let r = L(e);
	for (let i = 0; i < r; i++) {
		let r = jr(e, i);
		if (n(1 + Ki(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, Ji = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, Yi = (e) => typeof e == "string" && e.length + 1 > P, Xi = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = L(e);
	for (let n = 0; n < a; n++) {
		let r = jr(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), Yi(r) ? i.long.push(r) : i.set.add(Ji(r));
	}
	return n?.set(e, i), i;
}, Zi = ({ set: e, long: t }, n, r) => {
	if (Yi(n)) {
		for (let e of t) if (r(1 + Ki(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(Ji(n)));
}, Qi = (e, t, n) => {
	let r = L(e);
	for (let i = 0; i < r; i++) if (n(), N(e, i) && t(e[i])) return !0;
	return !1;
}, X = {
	eq: Ri,
	ne: zi,
	lt: Hi,
	le: Ui,
	gt: Wi,
	ge: Gi,
	in: (e, t, n = j) => z(t) ? qi(t, e, n) !== -1 : !1,
	nin: (e, t, n = j) => z(t) ? qi(t, e, n) === -1 : !1,
	subsetof: (e, t, n = j, r) => {
		if (!z(e) || !z(t)) return !1;
		let i = Xi(t, n, r);
		return !Qi(e, (e) => !Zi(i, e, n), n);
	},
	anyof: (e, t, n = j, r) => {
		if (!z(e) || !z(t)) return !1;
		let i = Xi(t, n, r);
		return Qi(e, (e) => Zi(i, e, n), n);
	},
	noneof: (e, t, n = j, r) => {
		if (!z(e) || !z(t)) return !1;
		let i = Xi(t, n, r);
		return !Qi(e, (e) => Zi(i, e, n), n);
	},
	sizeof: (e, t) => !z(e) && !U(e) || !z(t) && !U(t) ? !1 : (z(e) ? L(e) : e.length) === (z(t) ? L(t) : t.length),
	size: (e, t) => !z(e) && !U(e) || !H(t) ? !1 : (z(e) ? L(e) : e.length) === t
}, $i = (e) => !z(e) && !U(e) ? !1 : (z(e) ? L(e) : e.length) === 0, ea = (e, t, n, r = j, i) => !U(e) || !U(t) ? !1 : Ii(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), ta = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), na = (e, t) => e.concat(`[${t}]`), ra = (e, t) => e < 0 ? t + e : e, ia = (e, t) => {
	let n = L(e), r = ra(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: N(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, aa = (e, t) => {
	for (let n of t) e.push(n);
}, oa = 1e6, sa = 100, ca = 1e6, la = 20, ua = 1e4, da = 1e4, fa = class {
	constructor(e) {
		this.weight = 0, this.nodes = 0, this.stringPositions = 0, this.done = !1, this.seen = /* @__PURE__ */ new Set(), this.frames = [], this.visit(e);
	}
	advance(e) {
		let t = this.nodes + e, { frames: n } = this;
		for (; n.length > 0 && this.nodes < t;) {
			let e = n[n.length - 1];
			if (e.i >= e.length) {
				n.pop();
				continue;
			}
			let t = e.i++;
			if (e.keys === null) {
				let n = e.container;
				if (e.indices !== null) {
					let r = Number(e.indices[t]);
					N(n, r) && this.visit(n[r]);
				} else if (N(n, t)) this.visit(n[t]);
				else if (++e.holes > da) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!N(n, r)) continue;
				this.weight += r.length, this.visit(n[r]);
			}
		}
		n.length === 0 && (this.done = !0);
	}
	visit(e) {
		if (this.nodes++, this.weight += typeof e == "string" ? 1 + e.length : 1, typeof e == "string" && (this.stringPositions += 1 + e.length), typeof e == "object" && e && !this.seen.has(e)) {
			if (this.seen.add(e), z(e)) this.frames.push({
				container: e,
				keys: null,
				indices: null,
				length: L(e),
				i: 0,
				holes: 0
			});
			else if (V(e)) {
				let t = Object.keys(e);
				this.frames.push({
					container: e,
					keys: t,
					indices: null,
					length: t.length,
					i: 0,
					holes: 0
				});
			}
		}
	}
}, pa = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, ta(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = ta(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = L(e);
			for (let r = 0; r < n; r++) this.tick(), N(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new fa(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(ua, Math.ceil((this.retained - this.retainedLimit) / la))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new kr(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(oa, sa * e.weight) + t, this.retainedLimit = Math.max(ca, la * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new fa(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(ua, Math.ceil((this.steps - this.stepLimit) / sa))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new kr(`Query exceeded ${this.stepLimit} evaluation steps`);
			}
		}, {
			regexProgram: (e) => {
				this.largestRegexProgram = Math.max(this.largestRegexProgram, e);
			},
			regexWork: (e) => {
				this.regexSteps += e, this.tick(e);
			},
			regexSites: /* @__PURE__ */ new Map()
		}), this.readsCurrent = /* @__PURE__ */ new WeakMap(), this.invariantResults = /* @__PURE__ */ new Map(), this.isInvariant = (e) => (this.readsCurrent.has(e) || this.classify(e), !this.readsCurrent.get(e)), this.classify = (e) => {
			let t = this.readsCurrent, n = [], r = (e) => {
				if (typeof e != "object" || !e) return !1;
				let r = t.get(e);
				if (r !== void 0) return r;
				let i = e.type;
				if (i === "current") return t.set(e, !0), !0;
				if (i === "filterExpression" || i === "value") return t.set(e, !1), !1;
				let a = Object.values(e);
				n.push({
					node: e,
					children: a,
					i: 0,
					reads: !1
				});
			};
			for (r(e); n.length > 0;) {
				let e = n[n.length - 1];
				e.i < e.children.length ? r(e.children[e.i++]) === !0 && (e.reads = !0) : (t.set(e.node, e.reads), n.pop(), e.reads && n.length > 0 && (n[n.length - 1].reads = !0));
			}
		}, this.memoInvariant = (e, t) => {
			if (!this.isInvariant(e)) return t();
			if (this.invariantResults.has(e)) return this.invariantResults.get(e);
			let n = t();
			return this.invariantResults.set(e, n), n;
		}, this.handleRootQuery = (e, t) => {
			if (this.rootQueryCache.has(e)) return this.rootQueryCache.get(e);
			let n = this.handleSubscript(this.rootPayload, t);
			return this.rootQueryCache.set(e, n), n;
		}, this.handleIdentifier = (e, t) => this.selectMember(e, t), this.handleStringLiteral = (e, t) => this.selectMember(e, t), this.selectMember = ({ value: e, paths: t }, n) => {
			if (!V(e)) return;
			let r = this.canonicalName(n, n.value);
			if (N(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (z(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: na(t, r)
					});
				}), n;
			}
			if (V(e)) {
				let n = I(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) N(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!z(e)) return;
			let r = ia(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: na(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (z(e)) {
				let r = ia(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: na(t, r.index)
				} : void 0;
			}
			if (V(e)) {
				let r = String(n.value);
				return N(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!z(e)) return [];
			let r = L(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : ra(n.start, r), o = n.end === null ? r : ra(n.end, r)) : (a = n.start === null ? r - 1 : ra(n.start, r), o = n.end === null ? -r - 1 : ra(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: N(e, u) ? e[u] : void 0,
				paths: na(t, u)
			}), u += i;
			return l;
		}, this.handleUnions = (e, t) => {
			let n = [];
			for (let r of t.values) switch (this.tick(), r.type) {
				case "identifier":
					if (V(e.value)) {
						let t = this.handleIdentifier(e, r);
						W(t) && (this.retain(), n.push(t));
					}
					break;
				case "stringLiteral":
					if (V(e.value)) {
						let t = this.handleStringLiteral(e, r);
						W(t) && (this.retain(), n.push(t));
					}
					break;
				case "numericLiteral":
					if (z(e.value)) {
						let t = this.handleNumericLiteral(e, r);
						W(t) && (this.retain(), n.push(t));
					}
					break;
				case "wildcard":
					aa(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": aa(n, this.handleBracketExpressionContent(e, r));
			}
			return n;
		}, this.handleDotdot = (e, t) => {
			let n = [];
			return this.collectDotdot(e, t, n), n;
		}, this.collectDotdot = (e, t, n) => {
			let r = t.value, i = [];
			this.tick();
			let a = e;
			for (; a !== void 0;) {
				let e = a.value;
				switch (r.type) {
					case "bracketMember": {
						let e = this.handleBracketMemberContent(a, r.value);
						W(e) && (this.retain(), n.push(e));
						break;
					}
					case "bracketExpression":
						aa(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						aa(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						W(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (V(e)) {
					let t = I(e);
					this.tick(t.length), i.push({
						parent: a,
						keys: t,
						length: t.length,
						i: 0
					});
				} else z(e) && i.push({
					parent: a,
					keys: null,
					length: L(e),
					i: 0
				});
				for (a = void 0; i.length > 0;) {
					let e = i[i.length - 1];
					if (e.i >= e.length) {
						i.pop();
						continue;
					}
					let t = e.i++;
					if (e.keys === null) {
						this.tick();
						let n = e.parent.value;
						if (!N(n, t)) continue;
						a = {
							value: n[t],
							paths: na(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!N(n, r)) continue;
						a = {
							value: n[r],
							paths: this.formatStringLiteralPath(e.parent.paths, r)
						};
					}
					break;
				}
			}
		}, this.handleOperationContent = (e, t) => {
			switch (this.tick(), t.type) {
				case "root": return this.handleRootQuery(t, t.next);
				case "current": return this.handleSubscript(e, t.next);
				case "value": return {
					value: t.value,
					paths: e.paths
				};
				case "groupOperation": return this.memoInvariant(t, () => this.handleOperationContent(e, t.value));
				case "functionCall": return {
					value: this.handleFunctionCall(e, t),
					paths: e.paths
				};
				case "operation": {
					let n = [], r = t;
					for (; r.type === "operation";) n.push({
						operator: r.operator,
						right: r.right
					}), r = r.left;
					let i = this.handleOperationContent(e, r)?.value;
					this.tick(n.length);
					for (let t = n.length - 1; t >= 0; t--) {
						let r = this.handleOperationContent(e, n[t].right)?.value;
						if (!H(i) || !H(r)) i = void 0;
						else switch (n[t].operator) {
							case "plus":
								i += r;
								break;
							case "minus":
								i -= r;
								break;
							case "div":
								i = r === 0 ? void 0 : i / r;
								break;
							case "multi": i *= r;
						}
					}
					return H(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return $i(n);
			if (t.operator === "reg") return ea(n, t.right.value, t.right.opts, this.tick, t);
			let r = this.handleOperationContent(e, t.right)?.value, i = X[t.operator];
			if (i) {
				let e = this.isInvariant(t.right) ? this.siteSetCache(t.right) : void 0;
				return i(n, r, this.tick, e);
			}
			return !1;
		}, this.handleLogicalExpression = (e, t) => this.memoInvariant(t, () => this.evaluateLogicalExpression(e, t)), this.evaluateLogicalExpression = (e, t) => {
			let n = [], r = !this.isInvariant(t), i = t;
			for (; i.type === "logicalExpression" && (i === t || !r || !this.isInvariant(i));) n.push({
				operator: i.operator,
				right: i.right
			}), i = i.left;
			this.tick(n.length);
			let a = this.handleFilterExpressionContent(e, i);
			for (let t = n.length - 1; t >= 0; t--) (n[t].operator === "and" ? a : !a) && (a = this.handleFilterExpressionContent(e, n[t].right));
			return a;
		}, this.handleFunctionCall = (e, t) => this.memoInvariant(t, () => this.evaluateFunctionCall(e, t)), this.evaluateFunctionCall = (e, t) => {
			let n = t.name === "count" || t.name === "value", r = t.args.map((t) => {
				let r = this.handleOperationContent(e, t);
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new Di(r.value) : new Di(W(r?.value) ? [r?.value] : []);
			}), i = Li[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
			return i ? i(r, this.tick, o ? t : void 0) : void 0;
		}, this.handleFilterExpressionContent = (e, t) => {
			switch (this.tick(), t.type) {
				case "logicalExpression": return this.handleLogicalExpression(e, t);
				case "comparator": return this.handleComparator(e, t);
				case "groupExpression": return this.memoInvariant(t, () => this.handleFilterExpressionContent(e, t.value));
				case "notExpression": return this.memoInvariant(t, () => !this.handleFilterExpressionContent(e, t.value));
				case "functionCall": return !!this.handleFunctionCall(e, t);
				case "root": {
					let e = this.handleRootQuery(t, t.next);
					return e?.isIndefinite ? Array.isArray(e.value) && e.value.length > 0 : W(e);
				}
				case "current": {
					let n = this.handleSubscript(e, t.next);
					return n?.isIndefinite ? Array.isArray(n.value) && n.value.length > 0 : W(n);
				}
				case "value": return !!t.value;
			}
		}, this.handleBracketMemberContent = (e, t) => {
			switch (t.type) {
				case "identifier": return this.handleIdentifier(e, t);
				case "numericLiteral": return this.handleNumericLiteral(e, t);
				case "stringLiteral": return this.handleStringLiteral(e, t);
			}
		}, this.handleBracketExpressionContent = (e, t) => {
			let n = e.value;
			switch (t.type) {
				case "filterExpression": {
					let r = [];
					if (z(n)) this.forEachElement(n, (n, i) => {
						let a = {
							value: n,
							paths: na(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (V(n)) {
						let i = I(n);
						this.tick(i.length);
						for (let a of i) {
							if (!N(n, a)) continue;
							let i = {
								value: n[a],
								paths: this.formatStringLiteralPath(e.paths, a)
							};
							this.handleFilterExpressionContent(i, t.value) && (this.retain(), r.push(i));
						}
					}
					return r;
				}
				case "unions": return this.handleUnions(e, t);
				case "wildcard": return this.handleWildcard(e);
				case "slices": return this.handleSlices(e, t);
			}
		}, this.isIndefiniteSegment = (e) => {
			let t = e.value;
			return t.type === "bracketExpression" || t.type === "dotdot" || t.type === "dot" && t.value.type === "wildcard";
		}, this.selectMany = (e, t) => {
			let n = t.value;
			switch (n.type) {
				case "bracketExpression": return this.handleBracketExpressionContent(e, n.value);
				case "dotdot": return this.handleDotdot(e, n);
				default: return this.handleWildcard(e);
			}
		}, this.selectOne = (e, t) => {
			let n = t.value;
			switch (n.type) {
				case "bracketMember": return this.handleBracketMemberContent(e, n.value);
				case "dot":
					if (n.value.type === "identifier") return this.handleIdentifier(e, n.value);
					if (n.value.type === "numericLiteral") return this.handleDotNumericLiteral(e, n.value);
			}
		}, this.handleSubscript = (e, t) => {
			if (t === null) return e;
			let n = [], r = [{
				node: e,
				segment: t
			}], i = !1;
			for (; r.length > 0;) {
				let { node: e, segment: t } = r.pop(), a;
				if (this.isIndefiniteSegment(t)) i = !0, a = this.selectMany(e, t);
				else {
					this.tick();
					let n = this.selectOne(e, t);
					if (!W(n)) continue;
					a = [n];
				}
				let o = t.next;
				if (o === null) aa(n, a);
				else for (let e = a.length - 1; e >= 0; e--) r.push({
					node: a[e],
					segment: o
				});
			}
			if (!i) return n[0];
			let a = [], o = [];
			for (let e of n) a.push(e.value), o.push(e.paths);
			return {
				value: a,
				paths: o,
				isIndefinite: !0
			};
		}, this.handleRoot = (e) => {
			try {
				return this.handleSubscript(this.rootPayload, e.next);
			} catch (e) {
				throw R(e) ? new kr("Query is nested too deeply") : B(e) ? new kr("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? oa, this.retainedLimit = this.adaptiveLimit ? ca : Infinity;
	}
}, ma = (e, t, n) => {
	let r = Vr(t), i = new pa(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? Mr(i) ? [] : [i.value] : i?.value;
}, ha = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = ma(e, i, n);
		W(t) && r.push(t);
	}
	return r;
}, Z = (e, t, n = {}) => {
	try {
		return z(t) ? ha(e, t, n) : ma(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, Q = {
	applyTemplate: ar,
	fromCollection: vr
}, $ = (e, t, n) => {
	let r = e?.sourcePath;
	if (r === null) return null;
	if (r?.jsonPath) {
		let e = t?.[r.fileName];
		if (e === void 0) throw Error(`Registry entry not found: ${r.fileName}`);
		let i = Z(e, r.jsonPath, { returnArray: !0 });
		if (i.length !== 1) throw Error(`Source JSONPath must identify exactly one value; matched ${i.length}: ${r.jsonPath}`);
		return n && console.log("json-instruction-single v8 source:", r, i[0]), i[0];
	}
	return br(t, r);
}, ga = (e, t, n) => {
	let r = (t?.spec ?? me)[e.templateKey], i = $(e, t, n), a = e?.func === null ? r : Q[e.func](i, r);
	return i === null ? r : a;
}, _a = (e, t, n) => {
	n && console.log("runSingleInstruction v8:", e);
	let r = ga(e, t, n);
	return n && console.log("runSingleInstruction v8 result:", r), Xn(t, e.destinationPath, r, n), r;
}, va = (e, t, n, r) => (e.forEach((e) => _a(e, t, n, r)), t), ya = (e) => typeof e == "object" && !!e && !Array.isArray(e), ba = (e, t) => {
	if (!ya(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = Da(t, i);
	return n;
}, xa = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => Da(t, e));
}, Sa = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, Ca = (e, t) => Sa(e, t), wa = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, Ta = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, Ea = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: Ta,
		applyTemplate: e
	});
}, Da = (e, t, n) => {
	let r = e, i = t;
	wa(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? Sa(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = Ca(a?.textContent, r)), "attributes" in a && (a.attributes = ba(a?.attributes, r)), "children" in a && (a.children = xa(a?.children, r))), a);
};
Ea(Da);
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var Oa = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, ka = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, Aa = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: ka,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, ja = (e, t) => {
	let n = e, r = t;
	return Oa(n, r), n.map((e) => Da(e, r));
};
Aa((e, t) => {
	let n = e;
	return Oa(n, t), n.map((e) => Da(e, e[t]));
}, ja);
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs-two-dimensions/src/v8/addRowData.js
var Ma = (e, t) => e.map((e) => ({
	...e,
	rowData: t[e.columnName]
})), Na = (e, t) => {
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
}, Pa = {
	applyTemplate: Da,
	fromCollection: ja,
	twoDimensional: ({ columns: e, data: t, columnSpec: n, rowSpec: r }) => {
		Na(e, t);
		let i = e;
		return t.map((e) => {
			let t = Da(e, r);
			return t.children = ja(Ma(i, e), n), t;
		});
	}
}, Fa = ({ instruction: e, registry: t, showLog: n, returnLog: r }) => {
	let i = me, a = Pa[e.func]({
		columns: t?.data?.columns,
		data: t?.data?.data,
		columnSpec: i[e?.templateKey?.columnKey],
		rowSpec: i[e?.templateKey?.rowKey]
	});
	Xn(t, e.destinationPath, a);
}, Ia = ({ instructions: e, registry: t, showLog: n, returnLog: r }) => {
	e.forEach((e) => {
		Fa({
			instruction: e,
			registry: t,
			showLog: n,
			returnLog: r
		});
	});
}, La = (e, t) => e.map((e) => ({
	...e,
	rowData: t[e.columnName]
})), Ra = (e, t) => {
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
}, za = ({ columns: e, data: t, columnSpec: n, rowSpec: r }) => (Ra(e, t), t.map((t) => {
	let i = Da(t, r);
	return i.children = ja(La(e, t), n), i;
})), Ba = (e, t) => t.map((t) => ({
	...e,
	rowData: t[e.columnName]
})), Va = (e, t) => {
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
}, Ha = ({ columns: e, data: t, columnSpec: n, rowSpec: r }) => (Va(e, t), e.map((e) => {
	let i = Da(e, n);
	return i.children = t.length > 0 ? ja(Ba(e, t), r) : [], i;
})), Ua = ({ instructions: e = [], base: t, data: n, showLog: r = !1 } = {}) => {
	e.forEach((e) => {
		let i = me[e?.templateKey?.columnKey], a = me[e?.templateKey?.rowKey], o = za({
			columns: n?.columns,
			data: n?.data,
			columnSpec: i,
			rowSpec: a
		});
		r && console.log("[runInstructions:rowOnColumn]", e.narration, o), Xn({
			base: t,
			data: n
		}, e.destinationPath, o);
	});
}, Wa = ({ instructions: e = [], base: t, data: n, showLog: r = !1 } = {}) => {
	e.forEach((e) => {
		let i = me[e?.templateKey?.columnKey], a = me[e?.templateKey?.rowKey], o = Ha({
			columns: n?.columns,
			data: n?.data,
			columnSpec: i,
			rowSpec: a
		});
		r && console.log("[runInstructions:columnOnRow]", e.narration, o), Xn({
			base: t,
			data: n
		}, e.destinationPath, o);
	});
}, Ga = ({ single: e = [], double: t = [], rowOnColumn: n = [], columnOnRow: r = [], base: i, data: a, showLog: o = !1 } = {}) => {
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
	return e.length > 0 && va(e, s, o), t.length > 0 && Ia({
		instructions: t,
		registry: s,
		showLog: o
	}), n.length > 0 && Ua({
		instructions: n,
		base: i,
		data: a,
		showLog: o
	}), r.length > 0 && Wa({
		instructions: r,
		base: i,
		data: a,
		showLog: o
	}), s;
}, Ka = (e) => Array.isArray(e) ? e : [e], qa = (e, t, n) => {
	e[t] = n;
}, Ja = {
	set: qa,
	push: (e, t, n) => {
		e[t].push(...Ka(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...Ka(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(Ka(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(Ka(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, Ya = (e) => typeof e == "object" && !!e && !Array.isArray(e), Xa = (e, t) => {
	if (!Ya(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = ro(t, i);
	return n;
}, Za = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => ro(t, e));
}, Qa = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, $a = (e, t) => Qa(e, t), eo = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, to = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, no = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: to,
		applyTemplate: e
	});
}, ro = (e, t, n) => {
	let r = e, i = t;
	eo(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? Qa(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = $a(a?.textContent, r)), "attributes" in a && (a.attributes = Xa(a?.attributes, r)), "children" in a && (a.children = Za(a?.children, r))), a);
};
no(ro);
// node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var io = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, ao = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, oo = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: ao,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, so = (e, t) => {
	let n = e, r = t;
	return io(n, r), n.map((e) => ro(e, r));
};
oo((e, t) => {
	let n = e;
	return io(n, t), n.map((e) => ro(e, e[t]));
}, so);
// node_modules/json-transformer-funcs/src/v24/findByRole.js
var co = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = co(n, t);
		if (e) return e;
	}
	return null;
}, lo = (e, t, n) => {
	let r = t.fileName, i = co(e[r], t.dataRole), a = t.dataRole ? i : e[t.fileName], o = [...t.filePath ?? []], s = o.pop();
	return {
		parent: o.reduce((e, t) => e[t], a),
		key: s
	};
}, uo = (e, t, n, r) => {
	r && console.log("v4 index :", e, t, n);
	let { parent: i, key: a } = lo(e, t, r);
	(Ja[t.action] || qa)(i, a, n);
}, fo = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = fo(n, t);
		if (e) return e;
	}
	return null;
}, po = (e, t) => {
	let n = e[t.fileName], r = t.dataRole ? fo(n, t.dataRole) : n;
	return (t.filePath ?? []).reduce((e, t) => e[t], r);
}, mo = {
	applyTemplate: ro,
	fromCollection: so
}, ho = (e, t, n) => e?.sourcePath === null ? null : po(t, e.sourcePath), go = (e, t, n) => {
	let r = t?.spec ?? me, i = e.templateKey, a = e?.func, o = r[i], s = ho(e, t, n), c = a === null ? o : mo[e.func](s, o);
	return s === null ? o : c;
}, _o = (e, t, n) => {
	let r = n;
	r && console.log("runSingleInstruction 1 :", e, t);
	let i = go(e, t, n);
	r && console.log("runSingleInstruction 2 :", i), uo(t, e.destinationPath, i);
}, vo = (e, t, n, r) => {
	e.forEach((e) => {
		_o(e, t, n, r);
	});
}, yo = (e, t) => !e || typeof e != "object" ? !1 : e.attributes?.["data-role"] === t || Array.isArray(e.children) && e.children.some((e) => yo(e, t)), bo = (e = [], t) => e.filter(({ destinationPath: e }) => yo(t, e?.dataRole)), xo = ({ base: e, options: t = {}, optionDefs: n = {}, showLog: r = !1 } = {}) => {
	if (!e) return e;
	let i = { base: e };
	if (t.showSearch && n.search) {
		let t = bo(n.search, e);
		r && console.log("[runOptions:search]", t), vo(t, i, r);
	}
	if ((t.showSerial || t.serial) && n.serial) {
		let t = bo(n.serial, e);
		r && console.log("[runOptions:serial]", t), vo(t, i, r);
	}
	if ((t.showOptions || t.options) && n.options) {
		let t = bo(n.options, e);
		r && console.log("[runOptions:options]", t), vo(t, i, r);
	}
	return e;
}, So = ({ definitions: e = fe, spec: t = le, type: n = "table.simple", data: r = [], columns: i = [], options: a = {}, showLog: o = !1 } = {}) => {
	let s = n.split("."), c = s[0], l = s[1], u = l ? e[c]?.[l] : e[c];
	if (!u) throw Error(`Unknown component definition for type "${n}".`);
	let d = Ga({
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
	return xo({
		base: d,
		options: a,
		optionDefs: u.options || e[c]?.options || {},
		showLog: o
	}), d;
}, Co = (e = {}) => {
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
	let r = So({
		type: e.type,
		data: e.data,
		columns: e.columns,
		options: n,
		showLog: t
	});
	t && console.log("[v6 from-instructions] generated spec:", r);
	let i = ke({
		jsonSpec: r?.base,
		targetHtmlId: e.targetHtmlId,
		appendPosition: e.appendPosition || "replace",
		showLog: t
	});
	return t && console.log("[v6 from-instructions] mounted DOM element:", i), i;
};
t(Co);
export { So as buildSpec, Co as default, Co as render };
