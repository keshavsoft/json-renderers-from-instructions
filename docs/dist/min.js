// src/v8/registerGlobal/meta.js
var e = {
	version: "1.8.1",
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
	table: {
		headerOnly: {
			baseFromSpec: "tableHeaderOnly",
			instructions: ["buildColgroup", "buildHeader"],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: { initialize: "serialRoot" }
			}
		},
		simple: {
			baseFromSpec: "tableSimple",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		withFooter: {
			baseFromSpec: "tableWithFooter",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildFooter",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		bodyOnly: {
			baseFromSpec: "tableBodyOnly",
			instructions: ["buildBody"],
			options: { serial: { showSerial: "serialChild" } }
		}
	},
	select: { simple: {
		baseFromSpec: "selectBase",
		instructions: ["buildSelectWithOptions"],
		options: {}
	} },
	dataList: { simple: {
		baseFromSpec: "dataListSimple",
		instructions: ["buildDataListWithOptions"],
		options: {}
	} },
	selectOptionsOnly: { simple: {
		baseFromSpec: "selectOptionsOnlyBase",
		instructions: ["buildOptionsArray"],
		options: {}
	} },
	searchInput: { simple: {
		baseFromSpec: "searchInputBase",
		instructions: [],
		options: {}
	} },
	form: { simple: {
		baseFromSpec: "formSimple",
		instructions: ["buildFormField"],
		options: {}
	} },
	accordion: {
		simple: {
			baseFromSpec: "accordionSimple",
			instructions: ["buildAccordionItems"],
			options: {}
		},
		flush: {
			baseFromSpec: "accordionFlush",
			instructions: ["buildAccordionItems"],
			options: {}
		}
	},
	card: {
		simple: {
			baseFromSpec: "cardSimple",
			instructions: ["buildCardBody"],
			options: {}
		},
		withHeader: {
			baseFromSpec: "cardWithHeader",
			instructions: ["buildCardHeader", "buildCardBody"],
			options: {}
		},
		withFooter: {
			baseFromSpec: "cardWithFooter",
			instructions: [
				"buildCardHeader",
				"buildCardBody",
				"buildCardFooter"
			],
			options: {}
		},
		imageTop: {
			baseFromSpec: "cardImageTop",
			instructions: ["buildCardBody"],
			options: {}
		}
	},
	list: {
		simple: {
			baseFromSpec: "listSimple",
			instructions: ["buildListItems"],
			options: {}
		},
		group: {
			baseFromSpec: "listGroup",
			instructions: ["buildListGroupItems"],
			options: {}
		},
		ordered: {
			baseFromSpec: "listOrdered",
			instructions: ["buildListGroupItems"],
			options: {}
		}
	},
	menu: {
		simple: {
			baseFromSpec: "menuSimple",
			instructions: ["buildMenuItems"],
			options: {}
		},
		cards: {
			baseFromSpec: "menuCardsBase",
			instructions: ["buildMenuCards"],
			options: {}
		}
	}
}, ue = {
	tableSearchBar: {
		tagName: "div",
		attributes: { class: "row mb-3 align-items-center" },
		children: [
			{
				tagName: "div",
				attributes: { class: "col-md-4 d-flex align-items-center" },
				children: [{
					tagName: "h6",
					attributes: {
						class: "mb-0 fw-semibold text-secondary",
						id: "table-title"
					},
					textContent: "Items"
				}]
			},
			{
				tagName: "div",
				attributes: { class: "col-md-4 text-center d-flex align-items-center justify-content-center" },
				children: [{
					tagName: "span",
					attributes: {
						id: "search-feedback",
						class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
					},
					textContent: "Showing all records"
				}]
			},
			{
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
			}
		]
	},
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
	},
	tableWithSearch: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-withSearch-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-withSearch-table-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-simple-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-simple-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-simple-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-simple-body-id"
						},
						children: []
					}
				]
			}]
		}]
	},
	tableSimple: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				}
			]
		}]
	},
	tableWithFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableBodyOnly: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-tag-id"
		},
		children: [{
			tagName: "tbody",
			attributes: {
				"data-role": "table-body",
				id: "table-body-id"
			},
			children: []
		}]
	},
	tableBodyOnly1: {
		tagName: "tbody",
		attributes: {
			"data-role": "table-body",
			id: "table-body-only-id"
		},
		children: []
	},
	tableFooterOnly: {
		tagName: "tfoot",
		attributes: {
			"data-role": "table-footer",
			id: "table-footer-only-id"
		},
		children: [{
			tagName: "tr",
			attributes: {
				"data-role": "table-footer-row",
				id: "table-footer-only-footer-row-id"
			},
			children: []
		}]
	},
	tableHeaderOnly: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-colgroup-id"
				},
				children: []
			}, {
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-row-id"
					},
					children: []
				}]
			}]
		}]
	},
	tableHeaderOnly1: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-header-only-id"
		},
		children: [
			{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-header-only-colgroup-id"
				},
				children: []
			},
			{
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-only-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-only-header-row-id"
					},
					children: []
				}]
			},
			{
				tagName: "tbody",
				attributes: {
					"data-role": "table-body",
					id: "table-header-only-body-id"
				},
				children: []
			}
		]
	},
	tableHeaderAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-simple-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-simple-table-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-simple-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-simple-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-simple-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-simple-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-simple-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-simple-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	selectBase: {
		tagName: "div",
		attributes: {
			"data-role": "select-container",
			id: "select-base-id"
		},
		children: []
	},
	dataListBase: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-base-id"
		},
		children: []
	},
	dataListSimple: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-simple-id"
		},
		children: []
	},
	selectOptionsOnlyBase: [],
	searchInputBase: {
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
	formBase: {
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
	formSimple: {
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
	searchToolbar: {
		tagName: "div",
		attributes: {
			class: "row mb-3 align-items-center",
			"data-role": "search-toolbar"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 d-flex align-items-center",
					"data-role": "search-label-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 text-center d-flex align-items-center justify-content-center",
					"data-role": "search-helper-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4",
					"data-role": "search-input-slot"
				},
				children: []
			}
		]
	},
	searchLabel: {
		tagName: "h6",
		textContent: "Items",
		attributes: {
			class: "mb-0 fw-semibold text-secondary",
			id: "table-title"
		}
	},
	searchHelper: {
		tagName: "span",
		textContent: "Showing all records",
		attributes: {
			id: "search-feedback",
			class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
		}
	},
	searchInput: {
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
	},
	optionsEditButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "edit",
			attributes: { class: "btn btn-secondary btn-sm ks-btn-edit" }
		}]
	},
	optionsDeleteButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "delete",
			attributes: { class: "btn btn-danger btn-sm ks-btn-delete" }
		}]
	},
	headerForEditOption: {
		tagName: "th",
		textContent: "edit",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	headerForDeleteOption: {
		tagName: "th",
		textContent: "delete",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForEditOption: {
		tagName: "col",
		attributes: { width: "80px" }
	},
	colGroupForDeleteOption: {
		tagName: "col",
		attributes: { width: "90px" }
	},
	tableWithFooterParent: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-footer-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-with-footer-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-with-footer-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-with-footer-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-with-footer-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-with-footer-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-with-footer-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-with-footer-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableWithSearchAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-search-footer-parent-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-with-footer-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-with-footer-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-with-footer-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-with-footer-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-with-footer-body-id"
						},
						children: []
					},
					{
						tagName: "tfoot",
						attributes: {
							"data-role": "table-footer",
							id: "table-with-footer-footer-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-footer-row",
								id: "table-with-footer-footer-row-id"
							},
							children: []
						}]
					}
				]
			}]
		}]
	},
	accordionSimple: {
		tagName: "div",
		attributes: {
			class: "accordion shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	accordionFlush: {
		tagName: "div",
		attributes: {
			class: "accordion accordion-flush shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	buildAccordionItem: {
		tagName: "div",
		attributes: {
			class: "accordion-item",
			"data-role": "accordion-item"
		},
		children: [{
			tagName: "h2",
			attributes: {
				class: "accordion-header",
				id: "heading-${id}"
			},
			children: [{
				tagName: "button",
				attributes: {
					class: "accordion-button collapsed",
					type: "button",
					"data-bs-toggle": "collapse",
					"data-bs-target": "#collapse-${id}",
					"aria-expanded": "false",
					"aria-controls": "collapse-${id}"
				},
				textContent: "${title}"
			}]
		}, {
			tagName: "div",
			attributes: {
				id: "collapse-${id}",
				class: "accordion-collapse collapse",
				"aria-labelledby": "heading-${id}",
				"data-bs-parent": "#accordion-parent-id",
				"data-role": "accordion-collapse"
			},
			children: [{
				tagName: "div",
				attributes: { class: "accordion-body text-secondary" },
				textContent: "${content}"
			}]
		}]
	},
	cardSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithHeader: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-header bg-white py-3 fw-bold border-bottom",
				"data-role": "card-header"
			},
			children: []
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithFooter: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 fw-bold border-bottom",
					"data-role": "card-header"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					"data-role": "card-body"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light py-3 border-top",
					"data-role": "card-footer"
				},
				children: []
			}
		]
	},
	cardImageTop: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3 overflow-hidden",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "img",
			attributes: {
				class: "card-img-top",
				src: "${imageSrc}",
				alt: "${imageAlt}",
				"data-role": "card-img"
			}
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	buildCardBodyTemplate: {
		tagName: "div",
		attributes: { class: "card-content" },
		children: [{
			tagName: "h5",
			attributes: { class: "card-title fw-bold text-dark mb-2" },
			textContent: "${title}"
		}, {
			tagName: "p",
			attributes: { class: "card-text text-secondary mb-3" },
			textContent: "${text}"
		}]
	},
	buildCardHeaderTemplate: {
		tagName: "span",
		attributes: { class: "card-header-title text-dark" },
		textContent: "${headerTitle}"
	},
	buildCardFooterTemplate: {
		tagName: "small",
		attributes: { class: "text-muted" },
		textContent: "${footerText}"
	},
	listSimple: {
		tagName: "ul",
		attributes: {
			class: "list-unstyled mb-0",
			id: "list-parent-id",
			"data-role": "list-parent"
		},
		children: []
	},
	listGroup: {
		tagName: "ul",
		attributes: {
			class: "list-group shadow-sm",
			id: "list-group-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	listOrdered: {
		tagName: "ol",
		attributes: {
			class: "list-group list-group-numbered shadow-sm",
			id: "list-ordered-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	menuSimple: {
		tagName: "ul",
		attributes: {
			class: "nav nav-pills flex-column bg-white p-3 rounded-3 shadow-sm border",
			id: "menu-parent-id",
			"data-role": "menu-parent"
		},
		children: []
	},
	menuCardsBase: {
		tagName: "div",
		attributes: {
			class: "row g-4",
			id: "menu-cards-parent-id",
			"data-role": "menu-cards-parent"
		},
		children: []
	},
	buildListItemTemplate: {
		tagName: "li",
		attributes: {
			class: "py-2 px-3 border-bottom d-flex align-items-center text-secondary",
			"data-role": "list-item"
		},
		textContent: "${text}"
	},
	buildListGroupItemTemplate: {
		tagName: "li",
		attributes: {
			class: "list-group-item d-flex justify-content-between align-items-center py-3",
			"data-role": "list-group-item"
		},
		children: [{
			tagName: "span",
			textContent: "${text}"
		}, {
			tagName: "span",
			attributes: { class: "badge bg-primary rounded-pill px-3 py-2" },
			textContent: "${badge}"
		}]
	},
	buildMenuItemTemplate: {
		tagName: "li",
		attributes: {
			class: "nav-item mb-1",
			"data-role": "menu-item"
		},
		children: [{
			tagName: "a",
			attributes: {
				class: "nav-link text-dark fw-medium",
				href: "${href}"
			},
			textContent: "${text}"
		}]
	},
	buildMenuCardItemTemplate: {
		tagName: "div",
		attributes: {
			class: "col-md-4 col-sm-6",
			"data-role": "menu-card-col"
		},
		children: [{
			tagName: "div",
			attributes: { class: "card h-100 shadow-sm border rounded-3" },
			children: [{
				tagName: "div",
				attributes: { class: "card-body p-4 d-flex flex-column" },
				children: [
					{
						tagName: "h5",
						attributes: { class: "card-title fw-bold text-primary mb-2" },
						textContent: "${title}"
					},
					{
						tagName: "p",
						attributes: { class: "card-text text-muted small flex-grow-1" },
						textContent: "${description}"
					},
					{
						tagName: "a",
						attributes: {
							class: "btn btn-outline-primary btn-sm mt-3",
							href: "${href}"
						},
						textContent: "${actionText}"
					}
				]
			}]
		}]
	}
}, de = {
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
}, fe = {
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
}, y = {
	buildColgroup: {
		type: "single",
		narration: "Build column widths",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildColGroup",
		func: "fromCollection"
	},
	buildHeader: {
		type: "single",
		narration: "Build table header",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildHeader",
		func: "fromCollection"
	},
	buildFooter: {
		type: "single",
		narration: "Build table footer",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFooter",
		func: "fromCollection"
	},
	buildBody: {
		type: "rowOnColumn",
		narration: "Build table body",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		templateKey: {
			rowKey: "buildBodyTr",
			columnKey: "buildBodyCell"
		}
	},
	serial: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial number cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshiftSerialToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "buildBodyCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	search: [{
		narration: "Prepend the search row to top of the table.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-parent']"
		},
		sourcePath: null,
		templateKey: "tableSearch",
		func: null
	}],
	buildFormField: {
		type: "single",
		narration: "Build form fields from columns",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'form-body']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFormField",
		func: "fromCollection"
	},
	buildSelectWithOptions: {
		type: "columnOnRow",
		narration: "Build selects with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildSelect",
			rowKey: "buildOption"
		}
	},
	buildSelectOptions: {
		type: "single",
		narration: "Build select options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildOptionsArray: {
		type: "single",
		narration: "Build options array",
		destinationPath: {
			fileName: "base",
			filePath: []
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildDataListWithOptions: {
		type: "columnOnRow",
		narration: "Build datalists with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildDataList",
			rowKey: "buildOption"
		}
	},
	searchFrame: [{
		narration: "Insert the search toolbar frame before the table when a search feature is enabled.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$"
		},
		sourcePath: null,
		templateKey: "searchToolbar",
		func: null,
		skipIf: "$..*[?@.attributes['data-role'] == 'search-toolbar']"
	}],
	searchLabel: [{
		narration: "Insert the search label into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-label-slot']"
		},
		sourcePath: null,
		templateKey: "searchLabel",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'table-title']"
	}],
	searchHelper: [{
		narration: "Insert the search helper text into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-helper-slot']"
		},
		sourcePath: null,
		templateKey: "searchHelper",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'search-feedback']"
	}],
	searchInput: [{
		narration: "Insert the search input into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-input-slot']"
		},
		sourcePath: null,
		templateKey: "searchInput",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'tableSearch']"
	}],
	serialRoot: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	serialChild: [{
		narration: "Prepend the serial number cell into each table body row.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshiftSerialToRows",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		sourcePath: null,
		templateKey: "buildBodyCell",
		func: null
	}],
	optionsShowButton: [
		{
			narration: "Append the options column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForOption",
			func: null
		},
		{
			narration: "Append the options header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForOption",
			func: null
		},
		{
			narration: "Append the options button cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsButtonCell",
			func: null
		},
		{
			narration: "Append the options footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "tdWithButtonSaveWarning",
			func: null
		}
	],
	optionsEditButton: [
		{
			narration: "Append edit column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForEditOption",
			func: null
		},
		{
			narration: "Append edit header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForEditOption",
			func: null
		},
		{
			narration: "Append edit button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsEditButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the edit action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	optionsDeleteButton: [
		{
			narration: "Append delete column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForDeleteOption",
			func: null
		},
		{
			narration: "Append delete header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForDeleteOption",
			func: null
		},
		{
			narration: "Append delete button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsDeleteButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the delete action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	buildAccordionItems: {
		type: "single",
		narration: "Build accordion items from array",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildAccordionItem",
		func: "fromCollection"
	},
	buildCardBody: {
		type: "single",
		narration: "Build card body content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-body']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardBodyTemplate",
		func: "applyTemplate"
	},
	buildCardHeader: {
		type: "single",
		narration: "Build card header content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-header']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardHeaderTemplate",
		func: "applyTemplate"
	},
	buildCardFooter: {
		type: "single",
		narration: "Build card footer content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-footer']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardFooterTemplate",
		func: "applyTemplate"
	},
	buildListItems: {
		type: "single",
		narration: "Build simple list items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListItemTemplate",
		func: "fromCollection"
	},
	buildListGroupItems: {
		type: "single",
		narration: "Build list-group items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListGroupItemTemplate",
		func: "fromCollection"
	},
	buildMenuItems: {
		type: "single",
		narration: "Build navigation menu items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuItemTemplate",
		func: "fromCollection"
	},
	buildMenuCards: {
		type: "single",
		narration: "Build menu cards grid",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuCardItemTemplate",
		func: "fromCollection"
	}
}, pe = {
	name: "spec-repo",
	version: "1.17.1"
};
// ../spec-repo/src/v19/index.js
(({ spec: e, tags: t, tagsSchema: n, definitions: r, table: i }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: pe,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r,
		table: i
	});
})({
	spec: ue,
	tags: de,
	tagsSchema: fe,
	instructions: y,
	definitions: le
});
// node_modules/json-to-tag-validate/src/v4/index.js
function me({ inJson: e, inCatalog: t, inSpec: n }) {
	let r = e, i = t ?? n ?? de, a = [];
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
var he = "http://www.w3.org/2000/svg", ge = /* @__PURE__ */ new Set(/* @__PURE__ */ "svg.path.symbol.use.g.circle.ellipse.rect.line.polyline.polygon.text.tspan.defs.clippath.mask.pattern.marker.lineargradient.radialgradient.stop.image.filter.fegaussianblur.femerge.femergenode".split(".")), _e = ({ inTagName: e }) => {
	let t = e?.toLowerCase();
	if (!t) return null;
	if (t === "checkbox") {
		let e = document.createElement("input");
		return e.type = "checkbox", e;
	}
	return ge.has(t) ? document.createElementNS(he, t) : document.createElement(t);
}, ve = ({ inElement: e, inTextContent: t }) => (!e || t == null || (e.textContent = t), e), ye = ({ inElement: e, inProperties: t }) => (e && t && typeof t == "object" && Object.assign(e, t), e), be = "http://www.w3.org/1999/xlink", xe = ({ inElement: e, inAttributes: t }) => {
	let n = e, r = t;
	if (!n || !r || typeof r != "object") return n;
	let i = typeof SVGElement < "u" ? n instanceof SVGElement : n.namespaceURI === "http://www.w3.org/2000/svg";
	return Object.entries(r).forEach(([e, t]) => {
		if (e === "class") i ? n.setAttribute("class", String(t)) : n.className = t;
		else if (e === "xlink:href" || e === "href") {
			if (t != null) {
				let e = String(t);
				if (i) try {
					n.setAttributeNS(be, "href", e);
				} catch {}
				n.setAttribute("href", e), n.setAttribute("xlink:href", e);
			}
		} else typeof t == "boolean" ? t ? n.setAttribute(e, "") : n.removeAttribute(e) : t != null && n.setAttribute(e, String(t));
	}), n;
}, Se = ({ inElement: e, inClassList: t }) => {
	if (!e || !t) return e;
	let n = typeof t == "string" ? t.split(/\s+/).filter(Boolean) : Array.isArray(t) ? t.filter((e) => typeof e == "string" && e.trim()) : [];
	return n.length && e.classList.add(...n), e;
}, Ce = (e) => {
	if (!e || typeof e != "object" || Array.isArray(e) || !e.tagName) return null;
	let t = _e({ inTagName: e.tagName });
	return t ? (ve({
		inElement: t,
		inTextContent: e.textContent,
		inTagName: e.tagName
	}), ye({
		inElement: t,
		inProperties: e.properties
	}), xe({
		inElement: t,
		inAttributes: e.attributes
	}), Se({
		inElement: t,
		inClassList: e.classList
	}), t) : null;
}, we = (e = {}) => re({
	inSpec: e?.spec ?? e?.inSpec ?? e,
	inFunc: Ce
});
te({
	buildSpecElement: we,
	buildSpecElementWithValidate: (e = {}) => {
		let t = e?.spec ?? e?.inSpec ?? e, n = me({ inJson: t });
		return n.isValid || console.warn("[json-to-tag] Specification validation issues:", n.errors), re({
			inSpec: t,
			inFunc: Ce
		});
	}
});
// node_modules/spec-to-dom/src/v2/register/meta.js
var Te = {
	version: "2.1.1",
	name: "spec-to-dom"
}, Ee = (e) => {
	e && (globalThis.ks ??= {}, globalThis.ks.specToDom = {
		meta: Te,
		appendToDom: e
	});
}, De = ({ buildSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => {
	let i = e, a = t, o = n, s = r;
	s && console.log("renderToDom 1 (content):", i);
	let c = document.getElementById(a);
	return c ? (Array.isArray(i) || i instanceof NodeList || i instanceof HTMLCollection ? o === "prepend" ? c.prepend(...i) : c.append(...i) : o === "prepend" ? c.prepend(i) : (c.innerHTML = "", c.append(i)), s && console.log("renderToDom 2 (mounted):", c), c) : null;
};
Ee(De);
// node_modules/@keshavsoft/json-to-dom/src/v42/index.js
var Oe = ({ jsonSpec: e, targetHtmlId: t, appendPosition: n, showLog: r }) => De({
	buildSpec: we(e),
	targetHtmlId: t,
	appendPosition: n,
	showLog: r
});
ee(Oe);
var ke = {
	table: {
		headerOnly: {
			baseFromSpec: "tableHeaderOnly",
			instructions: ["buildColgroup", "buildHeader"],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: { initialize: "serialRoot" }
			}
		},
		simple: {
			baseFromSpec: "tableSimple",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		withFooter: {
			baseFromSpec: "tableWithFooter",
			instructions: [
				"buildColgroup",
				"buildHeader",
				"buildFooter",
				"buildBody"
			],
			options: {
				search: {
					initialize: "searchFrame",
					showLabel: "searchLabel",
					showHelper: "searchHelper",
					showInput: "searchInput"
				},
				serial: {
					initialize: "serialRoot",
					showSerial: "serialChild"
				},
				options: {
					showButton: "optionsShowButton",
					showEditButton: "optionsEditButton",
					showDeleteButton: "optionsDeleteButton"
				}
			}
		},
		bodyOnly: {
			baseFromSpec: "tableBodyOnly",
			instructions: ["buildBody"],
			options: { serial: { showSerial: "serialChild" } }
		}
	},
	select: { simple: {
		baseFromSpec: "selectBase",
		instructions: ["buildSelectWithOptions"],
		options: {}
	} },
	dataList: { simple: {
		baseFromSpec: "dataListSimple",
		instructions: ["buildDataListWithOptions"],
		options: {}
	} },
	selectOptionsOnly: { simple: {
		baseFromSpec: "selectOptionsOnlyBase",
		instructions: ["buildOptionsArray"],
		options: {}
	} },
	searchInput: { simple: {
		baseFromSpec: "searchInputBase",
		instructions: [],
		options: {}
	} },
	form: { simple: {
		baseFromSpec: "formSimple",
		instructions: ["buildFormField"],
		options: {}
	} },
	accordion: {
		simple: {
			baseFromSpec: "accordionSimple",
			instructions: ["buildAccordionItems"],
			options: {}
		},
		flush: {
			baseFromSpec: "accordionFlush",
			instructions: ["buildAccordionItems"],
			options: {}
		}
	},
	card: {
		simple: {
			baseFromSpec: "cardSimple",
			instructions: ["buildCardBody"],
			options: {}
		},
		withHeader: {
			baseFromSpec: "cardWithHeader",
			instructions: ["buildCardHeader", "buildCardBody"],
			options: {}
		},
		withFooter: {
			baseFromSpec: "cardWithFooter",
			instructions: [
				"buildCardHeader",
				"buildCardBody",
				"buildCardFooter"
			],
			options: {}
		},
		imageTop: {
			baseFromSpec: "cardImageTop",
			instructions: ["buildCardBody"],
			options: {}
		}
	},
	list: {
		simple: {
			baseFromSpec: "listSimple",
			instructions: ["buildListItems"],
			options: {}
		},
		group: {
			baseFromSpec: "listGroup",
			instructions: ["buildListGroupItems"],
			options: {}
		},
		ordered: {
			baseFromSpec: "listOrdered",
			instructions: ["buildListGroupItems"],
			options: {}
		}
	},
	menu: {
		simple: {
			baseFromSpec: "menuSimple",
			instructions: ["buildMenuItems"],
			options: {}
		},
		cards: {
			baseFromSpec: "menuCardsBase",
			instructions: ["buildMenuCards"],
			options: {}
		}
	}
}, Ae = {
	tableSearchBar: {
		tagName: "div",
		attributes: { class: "row mb-3 align-items-center" },
		children: [
			{
				tagName: "div",
				attributes: { class: "col-md-4 d-flex align-items-center" },
				children: [{
					tagName: "h6",
					attributes: {
						class: "mb-0 fw-semibold text-secondary",
						id: "table-title"
					},
					textContent: "Items"
				}]
			},
			{
				tagName: "div",
				attributes: { class: "col-md-4 text-center d-flex align-items-center justify-content-center" },
				children: [{
					tagName: "span",
					attributes: {
						id: "search-feedback",
						class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
					},
					textContent: "Showing all records"
				}]
			},
			{
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
			}
		]
	},
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
	},
	tableWithSearch: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-withSearch-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-withSearch-table-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-simple-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-simple-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-simple-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-simple-body-id"
						},
						children: []
					}
				]
			}]
		}]
	},
	tableSimple: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				}
			]
		}]
	},
	tableWithFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableBodyOnly: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-tag-id"
		},
		children: [{
			tagName: "tbody",
			attributes: {
				"data-role": "table-body",
				id: "table-body-id"
			},
			children: []
		}]
	},
	tableBodyOnly1: {
		tagName: "tbody",
		attributes: {
			"data-role": "table-body",
			id: "table-body-only-id"
		},
		children: []
	},
	tableFooterOnly: {
		tagName: "tfoot",
		attributes: {
			"data-role": "table-footer",
			id: "table-footer-only-id"
		},
		children: [{
			tagName: "tr",
			attributes: {
				"data-role": "table-footer-row",
				id: "table-footer-only-footer-row-id"
			},
			children: []
		}]
	},
	tableHeaderOnly: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-tag-id"
			},
			children: [{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-colgroup-id"
				},
				children: []
			}, {
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-row-id"
					},
					children: []
				}]
			}]
		}]
	},
	tableHeaderOnly1: {
		tagName: "table",
		attributes: {
			class: "table table-hover table-striped align-middle border mb-0",
			id: "table-header-only-id"
		},
		children: [
			{
				tagName: "colgroup",
				attributes: {
					"data-role": "table-colgroup",
					id: "table-header-only-colgroup-id"
				},
				children: []
			},
			{
				tagName: "thead",
				attributes: {
					class: "table-dark",
					"data-role": "table-header",
					id: "table-header-only-header-id"
				},
				children: [{
					tagName: "tr",
					attributes: {
						"data-role": "table-header-row",
						id: "table-header-only-header-row-id"
					},
					children: []
				}]
			},
			{
				tagName: "tbody",
				attributes: {
					"data-role": "table-body",
					id: "table-header-only-body-id"
				},
				children: []
			}
		]
	},
	tableHeaderAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-simple-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-simple-table-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-simple-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-simple-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-simple-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-simple-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-simple-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-simple-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	selectBase: {
		tagName: "div",
		attributes: {
			"data-role": "select-container",
			id: "select-base-id"
		},
		children: []
	},
	dataListBase: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-base-id"
		},
		children: []
	},
	dataListSimple: {
		tagName: "div",
		attributes: {
			"data-role": "datalist-container",
			id: "data-list-simple-id"
		},
		children: []
	},
	selectOptionsOnlyBase: [],
	searchInputBase: {
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
	formBase: {
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
	formSimple: {
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
	searchToolbar: {
		tagName: "div",
		attributes: {
			class: "row mb-3 align-items-center",
			"data-role": "search-toolbar"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 d-flex align-items-center",
					"data-role": "search-label-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4 text-center d-flex align-items-center justify-content-center",
					"data-role": "search-helper-slot"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "col-md-4",
					"data-role": "search-input-slot"
				},
				children: []
			}
		]
	},
	searchLabel: {
		tagName: "h6",
		textContent: "Items",
		attributes: {
			class: "mb-0 fw-semibold text-secondary",
			id: "table-title"
		}
	},
	searchHelper: {
		tagName: "span",
		textContent: "Showing all records",
		attributes: {
			id: "search-feedback",
			class: "badge bg-white text-secondary border px-3 py-2 small fw-normal shadow-sm"
		}
	},
	searchInput: {
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
	},
	optionsEditButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "edit",
			attributes: { class: "btn btn-secondary btn-sm ks-btn-edit" }
		}]
	},
	optionsDeleteButtonCell: {
		tagName: "td",
		attributes: { class: "py-2 px-3 text-center" },
		children: [{
			tagName: "button",
			textContent: "delete",
			attributes: { class: "btn btn-danger btn-sm ks-btn-delete" }
		}]
	},
	headerForEditOption: {
		tagName: "th",
		textContent: "edit",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	headerForDeleteOption: {
		tagName: "th",
		textContent: "delete",
		attributes: { class: "py-3 px-3 fw-semibold text-uppercase small" }
	},
	colGroupForEditOption: {
		tagName: "col",
		attributes: { width: "80px" }
	},
	colGroupForDeleteOption: {
		tagName: "col",
		attributes: { width: "90px" }
	},
	tableWithFooterParent: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-footer-parent-id"
		},
		children: [{
			tagName: "table",
			attributes: {
				class: "table table-hover table-striped align-middle border mb-0",
				id: "table-with-footer-id"
			},
			children: [
				{
					tagName: "colgroup",
					attributes: {
						"data-role": "table-colgroup",
						id: "table-with-footer-colgroup-id"
					},
					children: []
				},
				{
					tagName: "thead",
					attributes: {
						class: "table-dark",
						"data-role": "table-header",
						id: "table-with-footer-header-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-header-row",
							id: "table-with-footer-header-row-id"
						},
						children: []
					}]
				},
				{
					tagName: "tbody",
					attributes: {
						"data-role": "table-body",
						id: "table-with-footer-body-id"
					},
					children: []
				},
				{
					tagName: "tfoot",
					attributes: {
						"data-role": "table-footer",
						id: "table-with-footer-footer-id"
					},
					children: [{
						tagName: "tr",
						attributes: {
							"data-role": "table-footer-row",
							id: "table-with-footer-footer-row-id"
						},
						children: []
					}]
				}
			]
		}]
	},
	tableWithSearchAndFooter: {
		tagName: "div",
		attributes: {
			"data-role": "table-parent",
			id: "table-with-search-footer-parent-id"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "row mb-3 align-items-center",
				"data-role": "search-toolbar"
			},
			children: [
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 d-flex align-items-center",
						"data-role": "search-label-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4 text-center d-flex align-items-center justify-content-center",
						"data-role": "search-helper-slot"
					},
					children: []
				},
				{
					tagName: "div",
					attributes: {
						class: "col-md-4",
						"data-role": "search-input-slot"
					},
					children: []
				}
			]
		}, {
			tagName: "div",
			attributes: { id: "table-content-container" },
			children: [{
				tagName: "table",
				attributes: {
					class: "table table-hover table-striped align-middle border mb-0",
					id: "table-with-footer-id"
				},
				children: [
					{
						tagName: "colgroup",
						attributes: {
							"data-role": "table-colgroup",
							id: "table-with-footer-colgroup-id"
						},
						children: []
					},
					{
						tagName: "thead",
						attributes: {
							class: "table-dark",
							"data-role": "table-header",
							id: "table-with-footer-header-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-header-row",
								id: "table-with-footer-header-row-id"
							},
							children: []
						}]
					},
					{
						tagName: "tbody",
						attributes: {
							"data-role": "table-body",
							id: "table-with-footer-body-id"
						},
						children: []
					},
					{
						tagName: "tfoot",
						attributes: {
							"data-role": "table-footer",
							id: "table-with-footer-footer-id"
						},
						children: [{
							tagName: "tr",
							attributes: {
								"data-role": "table-footer-row",
								id: "table-with-footer-footer-row-id"
							},
							children: []
						}]
					}
				]
			}]
		}]
	},
	accordionSimple: {
		tagName: "div",
		attributes: {
			class: "accordion shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	accordionFlush: {
		tagName: "div",
		attributes: {
			class: "accordion accordion-flush shadow-sm rounded-3 border",
			id: "accordion-parent-id",
			"data-role": "accordion-parent"
		},
		children: []
	},
	buildAccordionItem: {
		tagName: "div",
		attributes: {
			class: "accordion-item",
			"data-role": "accordion-item"
		},
		children: [{
			tagName: "h2",
			attributes: {
				class: "accordion-header",
				id: "heading-${id}"
			},
			children: [{
				tagName: "button",
				attributes: {
					class: "accordion-button collapsed",
					type: "button",
					"data-bs-toggle": "collapse",
					"data-bs-target": "#collapse-${id}",
					"aria-expanded": "false",
					"aria-controls": "collapse-${id}"
				},
				textContent: "${title}"
			}]
		}, {
			tagName: "div",
			attributes: {
				id: "collapse-${id}",
				class: "accordion-collapse collapse",
				"aria-labelledby": "heading-${id}",
				"data-bs-parent": "#accordion-parent-id",
				"data-role": "accordion-collapse"
			},
			children: [{
				tagName: "div",
				attributes: { class: "accordion-body text-secondary" },
				textContent: "${content}"
			}]
		}]
	},
	cardSimple: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithHeader: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "div",
			attributes: {
				class: "card-header bg-white py-3 fw-bold border-bottom",
				"data-role": "card-header"
			},
			children: []
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	cardWithFooter: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [
			{
				tagName: "div",
				attributes: {
					class: "card-header bg-white py-3 fw-bold border-bottom",
					"data-role": "card-header"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-body p-4",
					"data-role": "card-body"
				},
				children: []
			},
			{
				tagName: "div",
				attributes: {
					class: "card-footer bg-light py-3 border-top",
					"data-role": "card-footer"
				},
				children: []
			}
		]
	},
	cardImageTop: {
		tagName: "div",
		attributes: {
			class: "card shadow-sm border rounded-3 overflow-hidden",
			id: "card-parent-id",
			"data-role": "card-parent"
		},
		children: [{
			tagName: "img",
			attributes: {
				class: "card-img-top",
				src: "${imageSrc}",
				alt: "${imageAlt}",
				"data-role": "card-img"
			}
		}, {
			tagName: "div",
			attributes: {
				class: "card-body p-4",
				"data-role": "card-body"
			},
			children: []
		}]
	},
	buildCardBodyTemplate: {
		tagName: "div",
		attributes: { class: "card-content" },
		children: [{
			tagName: "h5",
			attributes: { class: "card-title fw-bold text-dark mb-2" },
			textContent: "${title}"
		}, {
			tagName: "p",
			attributes: { class: "card-text text-secondary mb-3" },
			textContent: "${text}"
		}]
	},
	buildCardHeaderTemplate: {
		tagName: "span",
		attributes: { class: "card-header-title text-dark" },
		textContent: "${headerTitle}"
	},
	buildCardFooterTemplate: {
		tagName: "small",
		attributes: { class: "text-muted" },
		textContent: "${footerText}"
	},
	listSimple: {
		tagName: "ul",
		attributes: {
			class: "list-unstyled mb-0",
			id: "list-parent-id",
			"data-role": "list-parent"
		},
		children: []
	},
	listGroup: {
		tagName: "ul",
		attributes: {
			class: "list-group shadow-sm",
			id: "list-group-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	listOrdered: {
		tagName: "ol",
		attributes: {
			class: "list-group list-group-numbered shadow-sm",
			id: "list-ordered-parent-id",
			"data-role": "list-group-parent"
		},
		children: []
	},
	menuSimple: {
		tagName: "ul",
		attributes: {
			class: "nav nav-pills flex-column bg-white p-3 rounded-3 shadow-sm border",
			id: "menu-parent-id",
			"data-role": "menu-parent"
		},
		children: []
	},
	menuCardsBase: {
		tagName: "div",
		attributes: {
			class: "row g-4",
			id: "menu-cards-parent-id",
			"data-role": "menu-cards-parent"
		},
		children: []
	},
	buildListItemTemplate: {
		tagName: "li",
		attributes: {
			class: "py-2 px-3 border-bottom d-flex align-items-center text-secondary",
			"data-role": "list-item"
		},
		textContent: "${text}"
	},
	buildListGroupItemTemplate: {
		tagName: "li",
		attributes: {
			class: "list-group-item d-flex justify-content-between align-items-center py-3",
			"data-role": "list-group-item"
		},
		children: [{
			tagName: "span",
			textContent: "${text}"
		}, {
			tagName: "span",
			attributes: { class: "badge bg-primary rounded-pill px-3 py-2" },
			textContent: "${badge}"
		}]
	},
	buildMenuItemTemplate: {
		tagName: "li",
		attributes: {
			class: "nav-item mb-1",
			"data-role": "menu-item"
		},
		children: [{
			tagName: "a",
			attributes: {
				class: "nav-link text-dark fw-medium",
				href: "${href}"
			},
			textContent: "${text}"
		}]
	},
	buildMenuCardItemTemplate: {
		tagName: "div",
		attributes: {
			class: "col-md-4 col-sm-6",
			"data-role": "menu-card-col"
		},
		children: [{
			tagName: "div",
			attributes: { class: "card h-100 shadow-sm border rounded-3" },
			children: [{
				tagName: "div",
				attributes: { class: "card-body p-4 d-flex flex-column" },
				children: [
					{
						tagName: "h5",
						attributes: { class: "card-title fw-bold text-primary mb-2" },
						textContent: "${title}"
					},
					{
						tagName: "p",
						attributes: { class: "card-text text-muted small flex-grow-1" },
						textContent: "${description}"
					},
					{
						tagName: "a",
						attributes: {
							class: "btn btn-outline-primary btn-sm mt-3",
							href: "${href}"
						},
						textContent: "${actionText}"
					}
				]
			}]
		}]
	}
}, je = {
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
}, Me = {
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
}, Ne = {
	buildColgroup: {
		type: "single",
		narration: "Build column widths",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildColGroup",
		func: "fromCollection"
	},
	buildHeader: {
		type: "single",
		narration: "Build table header",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildHeader",
		func: "fromCollection"
	},
	buildFooter: {
		type: "single",
		narration: "Build table footer",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFooter",
		func: "fromCollection"
	},
	buildBody: {
		type: "rowOnColumn",
		narration: "Build table body",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		templateKey: {
			rowKey: "buildBodyTr",
			columnKey: "buildBodyCell"
		}
	},
	serial: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial number cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshiftSerialToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "buildBodyCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	search: [{
		narration: "Prepend the search row to top of the table.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-parent']"
		},
		sourcePath: null,
		templateKey: "tableSearch",
		func: null
	}],
	buildFormField: {
		type: "single",
		narration: "Build form fields from columns",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			jsonPath: "$..*[?@.attributes['data-role'] == 'form-body']"
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.columns"
		},
		templateKey: "buildFormField",
		func: "fromCollection"
	},
	buildSelectWithOptions: {
		type: "columnOnRow",
		narration: "Build selects with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildSelect",
			rowKey: "buildOption"
		}
	},
	buildSelectOptions: {
		type: "single",
		narration: "Build select options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildOptionsArray: {
		type: "single",
		narration: "Build options array",
		destinationPath: {
			fileName: "base",
			filePath: []
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.data"
		},
		templateKey: "buildOption",
		func: "fromCollection"
	},
	buildDataListWithOptions: {
		type: "columnOnRow",
		narration: "Build datalists with options",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		templateKey: {
			columnKey: "buildDataList",
			rowKey: "buildOption"
		}
	},
	searchFrame: [{
		narration: "Insert the search toolbar frame before the table when a search feature is enabled.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshift",
			jsonPath: "$"
		},
		sourcePath: null,
		templateKey: "searchToolbar",
		func: null,
		skipIf: "$..*[?@.attributes['data-role'] == 'search-toolbar']"
	}],
	searchLabel: [{
		narration: "Insert the search label into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-label-slot']"
		},
		sourcePath: null,
		templateKey: "searchLabel",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'table-title']"
	}],
	searchHelper: [{
		narration: "Insert the search helper text into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-helper-slot']"
		},
		sourcePath: null,
		templateKey: "searchHelper",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'search-feedback']"
	}],
	searchInput: [{
		narration: "Insert the search input into its configured slot.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'search-input-slot']"
		},
		sourcePath: null,
		templateKey: "searchInput",
		func: null,
		skipIf: "$..*[?@.attributes.id == 'tableSearch']"
	}],
	serialRoot: [
		{
			narration: "Prepend the serial column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForSerial",
			func: null
		},
		{
			narration: "Prepend the serial header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		},
		{
			narration: "Prepend the serial footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "unshift",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "headerSerialCell",
			func: null
		}
	],
	serialChild: [{
		narration: "Prepend the serial number cell into each table body row.",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "unshiftSerialToRows",
			jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
		},
		sourcePath: null,
		templateKey: "buildBodyCell",
		func: null
	}],
	optionsShowButton: [
		{
			narration: "Append the options column width to the table colgroup.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForOption",
			func: null
		},
		{
			narration: "Append the options header cell to the table header row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForOption",
			func: null
		},
		{
			narration: "Append the options button cell into each table body row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsButtonCell",
			func: null
		},
		{
			narration: "Append the options footer cell to the table footer row.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "tdWithButtonSaveWarning",
			func: null
		}
	],
	optionsEditButton: [
		{
			narration: "Append edit column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForEditOption",
			func: null
		},
		{
			narration: "Append edit header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForEditOption",
			func: null
		},
		{
			narration: "Append edit button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsEditButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the edit action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	optionsDeleteButton: [
		{
			narration: "Append delete column width.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-colgroup']"
			},
			sourcePath: null,
			templateKey: "colGroupForDeleteOption",
			func: null
		},
		{
			narration: "Append delete header.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-header-row']"
			},
			sourcePath: null,
			templateKey: "headerForDeleteOption",
			func: null
		},
		{
			narration: "Append delete button cells to table rows.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "pushToRows",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-body']"
			},
			sourcePath: null,
			templateKey: "optionsDeleteButtonCell",
			func: null
		},
		{
			narration: "Append an empty footer cell for the delete action column.",
			destinationPath: {
				fileName: "base",
				filePath: ["children"],
				action: "push",
				jsonPath: "$..*[?@.attributes['data-role'] == 'table-footer-row']"
			},
			sourcePath: null,
			templateKey: "emptyCell",
			func: null
		}
	],
	buildAccordionItems: {
		type: "single",
		narration: "Build accordion items from array",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildAccordionItem",
		func: "fromCollection"
	},
	buildCardBody: {
		type: "single",
		narration: "Build card body content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-body']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardBodyTemplate",
		func: "applyTemplate"
	},
	buildCardHeader: {
		type: "single",
		narration: "Build card header content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-header']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardHeaderTemplate",
		func: "applyTemplate"
	},
	buildCardFooter: {
		type: "single",
		narration: "Build card footer content",
		destinationPath: {
			fileName: "base",
			filePath: ["children"],
			action: "push",
			jsonPath: "$..*[?@.attributes['data-role'] == 'card-footer']"
		},
		sourcePath: { fileName: "data" },
		templateKey: "buildCardFooterTemplate",
		func: "applyTemplate"
	},
	buildListItems: {
		type: "single",
		narration: "Build simple list items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListItemTemplate",
		func: "fromCollection"
	},
	buildListGroupItems: {
		type: "single",
		narration: "Build list-group items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildListGroupItemTemplate",
		func: "fromCollection"
	},
	buildMenuItems: {
		type: "single",
		narration: "Build navigation menu items",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuItemTemplate",
		func: "fromCollection"
	},
	buildMenuCards: {
		type: "single",
		narration: "Build menu cards grid",
		destinationPath: {
			fileName: "base",
			filePath: ["children"]
		},
		sourcePath: {
			fileName: "data",
			jsonPath: "$.items"
		},
		templateKey: "buildMenuCardItemTemplate",
		func: "fromCollection"
	}
}, Pe = {
	name: "spec-repo",
	version: "1.17.1"
};
// ../json-renderers-run-instructions-steps/node_modules/spec-repo/src/v19/index.js
(({ spec: e, tags: t, tagsSchema: n, definitions: r, table: i }) => {
	typeof globalThis < "u" && e && t && n && r && (globalThis.ks ??= {}, globalThis.ks.specs ??= {}, globalThis.ks.specs.jsonFiles = {
		meta: Pe,
		spec: e,
		tags: t,
		tagsSchema: n,
		definitions: r,
		table: i
	});
})({
	spec: Ae,
	tags: je,
	tagsSchema: Me,
	instructions: Ne,
	definitions: ke
});
// ../json-renderers-run-instructions-steps/node_modules/json-transformer-funcs-primitive/src/v10/forAttributes/index.js
var Fe = (e) => typeof e == "object" && !!e && !Array.isArray(e), Ie = (e, t) => {
	if (!Fe(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = Ue(t, i);
	return n;
}, Le = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => Ue(t, e));
}, Re = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, ze = (e, t) => Re(e, t), Be = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, Ve = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, He = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: Ve,
		applyTemplate: e
	});
}, Ue = (e, t, n) => {
	let r = e, i = t;
	Be(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? Re(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = ze(a?.textContent, r)), "attributes" in a && (a.attributes = Ie(a?.attributes, r)), "children" in a && (a.children = Le(a?.children, r))), a);
};
He(Ue);
// ../json-renderers-run-instructions-steps/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var We = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, Ge = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, Ke = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: Ge,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, qe = (e, t) => {
	let n = e, r = t;
	return We(n, r), n.map((e) => Ue(e, r));
};
Ke((e, t) => {
	let n = e;
	return We(n, t), n.map((e) => Ue(e, e[t]));
}, qe);
// ../json-transformer-funcs-two-dimensions/node_modules/json-transformer-funcs-primitive/src/v10/forAttributes/index.js
var Je = (e) => typeof e == "object" && !!e && !Array.isArray(e), Ye = (e, t) => {
	if (!Je(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = nt(t, i);
	return n;
}, Xe = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => nt(t, e));
}, Ze = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, Qe = (e, t) => Ze(e, t), $e = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, et = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, tt = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: et,
		applyTemplate: e
	});
}, nt = (e, t, n) => {
	let r = e, i = t;
	$e(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? Ze(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = Qe(a?.textContent, r)), "attributes" in a && (a.attributes = Ye(a?.attributes, r)), "children" in a && (a.children = Xe(a?.children, r))), a);
};
tt(nt);
// ../json-transformer-funcs-one-dimension/node_modules/json-transformer-funcs-primitive/src/v9/forAttributes/index.js
var rt = (e) => typeof e == "object" && !!e && !Array.isArray(e), it = (e, t) => {
	if (!rt(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = dt(t, i);
	return n;
}, at = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => dt(t, e));
}, ot = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, st = (e, t) => ot(e, t), ct = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, lt = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, ut = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.applyTemplate ??= e, globalThis.ks.transformerFuncs ??= {}, globalThis.ks.transformerFuncs.primitive = {
		meta: lt,
		applyTemplate: e
	});
}, dt = (e, t, n) => {
	let r = e, i = t;
	ct(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? ot(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = st(a?.textContent, r)), "attributes" in a && (a.attributes = it(a?.attributes, r)), "children" in a && (a.children = at(a?.children, r))), a);
};
ut(dt);
// ../json-transformer-funcs-one-dimension/src/v9/guard/index.js
var ft = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, pt = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
}, mt = (e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: pt,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
}, ht = (e, t) => {
	let n = e, r = t;
	return ft(n, r), n.map((e) => dt(e, r));
};
mt((e, t) => {
	let n = e;
	return ft(n, t), n.map((e) => dt(e, e[t]));
}, ht);
// ../json-transformer-funcs-two-dimensions/src/v9/index.js
var gt = ({ outer: e = [], outerSpec: t, getInner: n, innerSpec: r } = {}) => e.map((e) => {
	let i = nt(e, t), a = n ? n(e) : [];
	return i.children = a.length > 0 ? ht(a, r) : [], i;
}), _t = ({ columns: e = [], data: t = [], columnSpec: n, rowSpec: r } = {}) => gt({
	outer: Array.isArray(t) ? t : t?.data ?? t?.rows ?? [],
	outerSpec: r,
	innerSpec: n,
	getInner: (t) => e.map((e) => ({
		...e,
		rowValue: t[e.columnName]
	}))
}), vt = ({ columns: e = [], data: t = [], rows: n, columnSpec: r, rowSpec: i } = {}) => {
	let a = n ?? (Array.isArray(t) ? t : t?.data ?? t?.rows ?? []);
	return gt({
		outer: e,
		outerSpec: r,
		innerSpec: i,
		getInner: (e) => Array.isArray(e.options) && e.options.length > 0 ? e.options.map((e) => typeof e == "object" ? e : { rowValue: e }) : a.map((t) => ({
			...t,
			rowValue: t[e.columnName] ?? t.value ?? t
		}))
	});
}, yt = (e) => Array.isArray(e) ? e : [e], bt = (e, t, n) => {
	e[t] = n;
}, b = {
	set: bt,
	push: (e, t, n) => {
		e[t].push(...yt(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...yt(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(yt(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(yt(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, xt = Object.defineProperty, St = Object.getOwnPropertySymbols, Ct = Object.prototype.hasOwnProperty, wt = Object.prototype.propertyIsEnumerable, Tt = Math.pow, x = (e, t, n) => t in e ? xt(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Et = (e, t) => {
	for (var n in t ||= {}) Ct.call(t, n) && x(e, n, t[n]);
	if (St) for (var n of St(t)) wt.call(t, n) && x(e, n, t[n]);
	return e;
}, Dt = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, Ot = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, S = () => void 0, kt = (e, t, n, r) => {
	if (r(), typeof e == "string" && typeof t == "string" && e.length === t.length && r(e.length), e === t) return !0;
	if (e === null || t === null || e === void 0 || t === void 0 || typeof e != typeof t || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		let r = w(e);
		return r === w(t) && (n.push({
			x: e,
			y: t,
			keys: null,
			length: r,
			i: 0
		}), !0);
	}
	if (typeof e == "object" && typeof t == "object") {
		let i = Pt(e), a = Pt(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, At = (e, t, n = S) => {
	let r = [];
	if (!kt(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!kt(jt(e.x, t), jt(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !C(o, i) || !C(a, i)) return !1;
			let s = a[i];
			if (!C(o, i) || !kt(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, C = (e, t) => Object.prototype.hasOwnProperty.call(e, t), jt = (e, t) => C(e, t) ? e[t] : void 0, Mt = 16383, Nt = 1e3, Pt = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > Nt) throw new Ot(`Member name too long (maximum ${Nt} characters)`);
	return t;
}, w = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, Ft = (e) => e instanceof RangeError && /call stack/i.test(e.message), T = (e) => Array.isArray(e), It = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), E = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, Lt = (e) => typeof e == "number", D = (e) => typeof e == "string", Rt = (e) => e === void 0, zt = (e) => e !== void 0;
function Bt(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function Vt(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function Ht(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var Ut = class extends SyntaxError {
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
function Wt(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: Wr }, a = Wr, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", te = "true", ne = "false", g = "null", re = /^[,\]]/, _ = /^[+\-]/, v = /^[*\/]/, ie = /^[a-zA-Z_]/, ae = /^[\x80-\uFFFF_]/, oe = /^[a-zA-Z0-9_]/, se = /^[0-9@$\-]/, ce = /^[^\/\\]/, le = /^[gimsuy]/, ue = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, de = /^[\uD800-\uDBFF]/, fe = /^[\uDC00-\uDFFF]/, y = /^[0-9]/, pe = /^[1-9]/, me = /^[eE]/, he = /^["\\]/, ge = /^['\\]/, _e = /^[ -\uD7FF\uE000-\uFFFF]/, ve = /^[dD]/, ye = /^[89abAB]/, be = /^[c-fC-F]/, xe = /^[0-9a-fA-F]/, Se = /^[ \t\n\r]/, Ce = z([",", "]"], !1, !1, !1), we = R("length", !1), Te = R("count", !1), Ee = R("match", !1), De = R("search", !1), Oe = R("value", !1), ke = z(["+", "-"], !1, !1, !1), Ae = z(["*", "/"], !1, !1, !1), je = V("string"), Me = z([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1, !1), Ne = z([["", "￿"], "_"], !1, !1, !1), Pe = z([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1, !1), Fe = R("-", !1), Ie = z([
		["0", "9"],
		"@",
		"$",
		"-"
	], !1, !1, !1), Le = R("$", !1), Re = R("@", !1), ze = R("..", !1), Be = R(".", !1), Ve = R("*", !1), He = R("&&", !1), Ue = R("||", !1), We = R("!", !1), Ge = R("==", !1), Ke = R("!=", !1), qe = R(">=", !1), Je = R(">", !1), Ye = R("<=", !1), Xe = R("<", !1), Ze = R("=~", !1), Qe = R("in", !1), $e = R("nin", !1), et = R("subsetof", !1), tt = R("anyof", !1), nt = R("noneof", !1), rt = R("sizeof", !1), it = R("size", !1), at = R("empty", !1), ot = R("true", !1), st = R("false", !1), ct = R("null", !1), lt = R("{", !1), ut = R("}", !1), dt = R("[", !1), ft = R("]", !1), pt = R(":", !1), mt = R(",", !1), ht = R("(", !1), gt = R(")", !1), _t = R("?", !1), vt = V("regex"), yt = R("/", !1), bt = z(["/", "\\"], !0, !1, !1), b = R("\\", !1), xt = Br(), St = z([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), Ct = z([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), wt = z([["\ud800", "\udbff"]], !1, !1, !1), Tt = z([["\udc00", "\udfff"]], !1, !1, !1), x = z([["0", "9"]], !1, !1, !1), Et = V("number"), Dt = R("0", !1), Ot = z([["1", "9"]], !1, !1, !1), S = V("integer"), kt = z(["e", "E"], !1, !1, !1), At = R("\"", !1), C = R("'", !1), jt = z(["\"", "\\"], !1, !1, !1), Mt = z(["'", "\\"], !1, !1, !1), Nt = z([[" ", "퟿"], ["", "￿"]], !1, !1, !1), Pt = R("b", !1), w = R("f", !1), Ft = R("n", !1), T = R("r", !1), It = R("t", !1), E = R("u", !1), Lt = z(["d", "D"], !1, !1, !1), D = z([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), Rt = R("\\u", !1), zt = z([["c", "f"], ["C", "F"]], !1, !1, !1), Wt = z([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), Gt = z([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function Kt(e) {
		return {
			type: "root",
			next: Bt(e)
		};
	}
	function qt(e) {
		return e.map((e) => e[1]);
	}
	function Jt(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function Yt(e) {
		return e;
	}
	function Xt(e) {
		return {
			type: "dotdot",
			value: e
		};
	}
	function Zt() {
		return { type: "wildcard" };
	}
	function Qt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function $t() {
		return { type: "wildcard" };
	}
	function en(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function tn(e) {
		return e;
	}
	function nn(e) {
		return e;
	}
	function rn(e, t) {
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
	function an(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function on(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function sn(e, t) {
		return Ht(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function cn(e, t) {
		return Ht(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function ln(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function un(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function dn(e, t) {
		return t !== null || Vt(e);
	}
	function fn(e, t) {
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
	function pn(e, t) {
		return {
			operator: e,
			right: t
		};
	}
	function mn(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function hn() {
		return { operator: "empty" };
	}
	function O() {
		return "eq";
	}
	function gn() {
		return "ne";
	}
	function _n() {
		return "le";
	}
	function vn() {
		return "lt";
	}
	function yn() {
		return "ge";
	}
	function bn() {
		return "gt";
	}
	function xn() {
		return "in";
	}
	function Sn() {
		return "nin";
	}
	function Cn() {
		return "subsetof";
	}
	function wn() {
		return "anyof";
	}
	function Tn() {
		return "noneof";
	}
	function En() {
		return "sizeof";
	}
	function Dn() {
		return "size";
	}
	function On(e) {
		return {
			type: "groupExpression",
			value: e
		};
	}
	function kn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function An() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function jn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function Mn(e, t) {
		return {
			type: "functionCall",
			name: e,
			args: t || []
		};
	}
	function Nn() {
		return "length";
	}
	function Pn() {
		return "count";
	}
	function Fn() {
		return "match";
	}
	function In() {
		return "search";
	}
	function Ln() {
		return "value";
	}
	function Rn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function zn(e, t) {
		return t.length === 0 ? e : Ht(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function Bn(e, t) {
		return t.length === 0 ? e : Ht(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "*" ? "multi" : "div",
			left: e,
			right: t[3]
		}));
	}
	function Vn(e) {
		return {
			type: "groupOperation",
			value: e
		};
	}
	function Hn(e) {
		return {
			type: "root",
			next: Bt(e)
		};
	}
	function Un(e) {
		return {
			type: "current",
			next: Bt(e)
		};
	}
	function Wn(e, t, n) {
		return {
			type: "slices",
			start: e === null ? null : e[0],
			end: t === null ? null : t[0],
			step: n ? n[2] === null ? null : n[2] : null
		};
	}
	function Gn() {
		return { type: "wildcard" };
	}
	function Kn(e) {
		return {
			type: "numericLiteral",
			value: e
		};
	}
	function qn(e) {
		return {
			type: "stringLiteral",
			value: $(e)
		};
	}
	function Jn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Yn(e, t) {
		return {
			type: "value",
			subtype: "regex",
			value: e,
			opts: t || ""
		};
	}
	function Xn(e) {
		return {
			type: "value",
			subtype: "string",
			value: e
		};
	}
	function Zn(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function Qn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function $n() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function er() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function tr(e) {
		return e;
	}
	function nr(e) {
		for (let [t] of e || []) $(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function rr(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function ir(e, t) {
		return [e, t.value];
	}
	function ar(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function or(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function sr(e) {
		return $(e);
	}
	function cr(e) {
		return $(e);
	}
	function lr() {
		return "true";
	}
	function ur() {
		return "false";
	}
	function dr() {
		return "null";
	}
	function fr(e) {
		return $(e);
	}
	function pr() {
		return "true";
	}
	function mr() {
		return "false";
	}
	function hr() {
		return "null";
	}
	function gr(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function _r(e) {
		return e.join("");
	}
	function vr(e, t) {
		let n = parseFloat(L());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && Rr("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function yr() {
		let e = parseInt(L(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && Rr("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function br(e) {
		return e.join("");
	}
	function xr(e) {
		return e.join("");
	}
	function Sr(e) {
		return e;
	}
	function Cr() {
		return "\"";
	}
	function wr(e) {
		return e;
	}
	function Tr(e) {
		return e;
	}
	function Er() {
		return "'";
	}
	function Dr(e) {
		return e;
	}
	function Or() {
		return "\\";
	}
	function kr() {
		return "/";
	}
	function Ar() {
		return "\b";
	}
	function jr() {
		return "\f";
	}
	function Mr() {
		return "\n";
	}
	function Nr() {
		return "\r";
	}
	function k() {
		return "	";
	}
	function A(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function Pr(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function j(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let M = t.peg$currPos | 0, N = M, Fr = [{
		line: 1,
		column: 1
	}], P = M, Ir = t.peg$maxFailExpected || [], F = t.peg$silentFails | 0, Lr = /* @__PURE__ */ new Map(), I;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function L() {
		return e.substring(N, M);
	}
	function Rr(e, t) {
		throw t = t === void 0 ? Hr(N, M) : t, Ur(e, t);
	}
	function zr(t = M) {
		let n = e.codePointAt(t);
		return n === void 0 ? "" : String.fromCodePoint(n);
	}
	function R(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function z(e, t, n, r) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n,
			unicode: r
		};
	}
	function Br() {
		return { type: "any" };
	}
	function B() {
		return { type: "end" };
	}
	function V(e) {
		return {
			type: "other",
			description: e
		};
	}
	function Vr(t) {
		let n = Fr[t], r;
		if (n) return n;
		if (t >= Fr.length) r = Fr.length - 1;
		else for (r = t; !Fr[--r];);
		for (n = Fr[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return Fr[t] = n, n;
	}
	function Hr(e, t, n) {
		let i = Vr(e), a = Vr(t), o = {
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
	function H(e) {
		M < P || (M > P && (P = M, Ir = []), Ir.push(e));
	}
	function Ur(e, t) {
		return new Ut(e, null, null, t);
	}
	function U(e, t, n) {
		return new Ut(Ut.buildMessage(e, t), e, t, n);
	}
	function Wr() {
		let e, t, r, i;
		return e = M, t = wi(), t === n ? (M = e, e = n) : (r = W(), i = _a(), i === n ? (M = e, e = n) : (N = e, e = Kt(r))), e;
	}
	function W() {
		let e, t, r, i, a;
		for (e = M, t = [], r = M, i = Q(), a = Gr(), a === n ? (M = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = M, i = Q(), a = Gr(), a === n ? (M = r, r = n) : (i = [i, a], r = i);
		return N = e, t = qt(t), e = t, e;
	}
	function Gr() {
		let e;
		return e = qr(), e === n && (e = Kr()), e;
	}
	function Kr() {
		let e, t, r;
		return e = M, t = Di(), t === n ? (M = e, e = n) : (r = G(), r === n ? (M = e, e = n) : (N = e, e = Jt(r))), e === n && (e = M, t = K(), t !== n && (N = e, t = Yt(t)), e = t), e;
	}
	function qr() {
		let e, t, r;
		return e = M, t = Ei(), t === n ? (M = e, e = n) : (r = Jr(), r === n ? (M = e, e = n) : (N = e, e = Xt(r))), e;
	}
	function G() {
		let e, t;
		return e = M, t = Oi(), t !== n && (N = e, t = Zt()), e = t, e === n && (e = M, t = q(), t !== n && (N = e, t = Qt(t)), e = t), e;
	}
	function Jr() {
		let e, t;
		return e = M, t = Oi(), t !== n && (N = e, t = $t()), e = t, e === n && (e = M, t = q(), t !== n && (N = e, t = en(t)), e = t, e === n && (e = M, t = K(), t !== n && (N = e, t = tn(t)), e = t)), e;
	}
	function K() {
		let e, t, r, i;
		return e = M, t = Qi(), t === n ? (M = e, e = n) : (Q(), r = Yr(), r === n ? (M = e, e = n) : (Q(), i = $i(), i === n ? (M = e, e = n) : (N = e, e = nn(r)))), e;
	}
	function Yr() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = pi(), t !== n) {
			for (r = [], i = M, a = Q(), o = J(), o === n ? (M = i, i = n) : (s = Q(), c = pi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = Q(), o = J(), o === n ? (M = i, i = n) : (s = Q(), c = pi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = rn(t, r);
		} else M = e, e = n;
		return e;
	}
	function Xr() {
		let t, r, i, a, o, s, c, l, u;
		return t = M, r = na(), r === n ? (M = t, t = n) : (Q(), i = Y(), i === n ? (M = t, t = n) : (Q(), a = Zr(), a === n ? (M = t, t = n) : (Q(), o = ta(), o === n ? (M = t, t = n) : (s = M, F++, c = M, l = Q(), u = e.charAt(M), re.test(u) ? M++ : (u = n, F === 0 && H(Ce)), u === n ? (M = c, c = n) : (l = [l, u], c = l), F--, c === n ? s = n : (M = s, s = void 0), s === n ? (M = t, t = n) : (N = t, t = an(a)))))), t === n && (t = M, r = na(), r === n ? (M = t, t = n) : (Q(), i = Zr(), i === n ? (M = t, t = n) : (N = t, t = on(i)))), t;
	}
	function Zr() {
		let e, t, r, i, a, o, s, c, l = M * 91 + 10, u = Lr.get(l);
		if (u) return M = u.nextPos, u.result;
		if (e = M, t = Qr(), t !== n) {
			for (r = [], i = M, a = Q(), o = Ai(), o === n ? (M = i, i = n) : (s = Q(), c = Qr(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = Q(), o = Ai(), o === n ? (M = i, i = n) : (s = Q(), c = Qr(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = sn(t, r);
		} else M = e, e = n;
		return Lr.set(l, {
			nextPos: M,
			result: e
		}), e;
	}
	function Qr() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = $r(), t !== n) {
			for (r = [], i = M, a = Q(), o = ki(), o === n ? (M = i, i = n) : (s = Q(), c = $r(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = Q(), o = ki(), o === n ? (M = i, i = n) : (s = Q(), c = $r(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = cn(t, r);
		} else M = e, e = n;
		return e;
	}
	function $r() {
		let e, t, r, i, a;
		return e = M, t = ji(), t === n ? (M = e, e = n) : (Q(), r = Y(), r === n ? (M = e, e = n) : (Q(), i = Zr(), i === n ? (M = e, e = n) : (Q(), a = ta(), a === n ? (M = e, e = n) : (N = e, e = ln(i))))), e === n && (e = M, t = ji(), t === n ? (M = e, e = n) : (Q(), r = ri(), r === n ? (M = e, e = n) : (N = e, e = un(r))), e === n && (e = ei())), e;
	}
	function ei() {
		let e, t, r, i, a;
		return e = M, t = ci(), t === n ? (M = e, e = n) : (r = M, i = Q(), a = ti(), a === n ? (M = r, r = n) : (i = [i, a], r = i), r === n && (r = null), N = M, i = dn(t, r), i = i ? void 0 : n, i === n ? (M = e, e = n) : (N = e, e = fn(t, r))), e === n && (e = ri()), e;
	}
	function ti() {
		let e, t, r;
		return e = M, t = ni(), t === n ? (M = e, e = n) : (Q(), r = ci(), r === n ? (M = e, e = n) : (N = e, e = pn(t, r))), e === n && (e = M, t = Ri(), t === n ? (M = e, e = n) : (Q(), r = mi(), r === n ? (M = e, e = n) : (N = e, e = mn(r))), e === n && (e = M, t = Ki(), t !== n && (N = e, t = hn()), e = t)), e;
	}
	function ni() {
		let e, t;
		return e = M, t = Mi(), t !== n && (N = e, t = O()), e = t, e === n && (e = M, t = Ni(), t !== n && (N = e, t = gn()), e = t, e === n && (e = M, t = Ii(), t !== n && (N = e, t = _n()), e = t, e === n && (e = M, t = Li(), t !== n && (N = e, t = vn()), e = t, e === n && (e = M, t = Pi(), t !== n && (N = e, t = yn()), e = t, e === n && (e = M, t = Fi(), t !== n && (N = e, t = bn()), e = t, e === n && (e = M, t = zi(), t !== n && (N = e, t = xn()), e = t, e === n && (e = M, t = Bi(), t !== n && (N = e, t = Sn()), e = t, e === n && (e = M, t = Vi(), t !== n && (N = e, t = Cn()), e = t, e === n && (e = M, t = Hi(), t !== n && (N = e, t = wn()), e = t, e === n && (e = M, t = Ui(), t !== n && (N = e, t = Tn()), e = t, e === n && (e = M, t = Wi(), t !== n && (N = e, t = En()), e = t, e === n && (e = M, t = Gi(), t !== n && (N = e, t = Dn()), e = t)))))))))))), e;
	}
	function ri() {
		let e, t, r, i;
		return e = M, t = Y(), t === n ? (M = e, e = n) : (Q(), r = Zr(), r === n ? (M = e, e = n) : (Q(), i = ta(), i === n ? (M = e, e = n) : (N = e, e = On(r)))), e === n && (e = ii(), e === n && (e = di(), e === n && (e = M, t = qi(), t !== n && (N = e, t = kn()), e = t, e === n && (e = M, t = Ji(), t !== n && (N = e, t = An()), e = t, e === n && (e = M, t = Yi(), t !== n && (N = e, t = jn()), e = t))))), e;
	}
	function ii() {
		let e, t, r, i, a;
		return e = M, t = ai(), t === n ? (M = e, e = n) : (r = Y(), r === n ? (M = e, e = n) : (Q(), i = oi(), i === n && (i = null), Q(), a = ta(), a === n ? (M = e, e = n) : (N = e, e = Mn(t, i)))), e;
	}
	function ai() {
		let t, r;
		return t = M, e.substr(M, 6) === o ? (r = o, M += 6) : (r = n, F === 0 && H(we)), r !== n && (N = t, r = Nn()), t = r, t === n && (t = M, e.substr(M, 5) === s ? (r = s, M += 5) : (r = n, F === 0 && H(Te)), r !== n && (N = t, r = Pn()), t = r, t === n && (t = M, e.substr(M, 5) === c ? (r = c, M += 5) : (r = n, F === 0 && H(Ee)), r !== n && (N = t, r = Fn()), t = r, t === n && (t = M, e.substr(M, 6) === l ? (r = l, M += 6) : (r = n, F === 0 && H(De)), r !== n && (N = t, r = In()), t = r, t === n && (t = M, e.substr(M, 5) === u ? (r = u, M += 5) : (r = n, F === 0 && H(Oe)), r !== n && (N = t, r = Ln()), t = r)))), t;
	}
	function oi() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = si(), t !== n) {
			for (r = [], i = M, a = Q(), o = J(), o === n ? (M = i, i = n) : (s = Q(), c = si(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = Q(), o = J(), o === n ? (M = i, i = n) : (s = Q(), c = si(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = Rn(t, r);
		} else M = e, e = n;
		return e;
	}
	function si() {
		let e;
		return e = ci(), e === n && (e = gi()), e;
	}
	function ci() {
		let t, r, i, a, o, s, c, l, u = M * 91 + 21, d = Lr.get(u);
		if (d) return M = d.nextPos, d.result;
		if (t = M, r = li(), r !== n) {
			for (i = [], a = M, o = Q(), s = e.charAt(M), _.test(s) ? M++ : (s = n, F === 0 && H(ke)), s === n ? (M = a, a = n) : (c = Q(), l = li(), l === n ? (M = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = M, o = Q(), s = e.charAt(M), _.test(s) ? M++ : (s = n, F === 0 && H(ke)), s === n ? (M = a, a = n) : (c = Q(), l = li(), l === n ? (M = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			N = t, t = zn(r, i);
		} else M = t, t = n;
		return Lr.set(u, {
			nextPos: M,
			result: t
		}), t;
	}
	function li() {
		let t, r, i, a, o, s, c, l;
		if (t = M, r = ui(), r !== n) {
			for (i = [], a = M, o = Q(), s = e.charAt(M), v.test(s) ? M++ : (s = n, F === 0 && H(Ae)), s === n ? (M = a, a = n) : (c = Q(), l = ui(), l === n ? (M = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = M, o = Q(), s = e.charAt(M), v.test(s) ? M++ : (s = n, F === 0 && H(Ae)), s === n ? (M = a, a = n) : (c = Q(), l = ui(), l === n ? (M = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			N = t, t = Bn(r, i);
		} else M = t, t = n;
		return t;
	}
	function ui() {
		let e, t, r, i;
		return e = M, t = Y(), t === n ? (M = e, e = n) : (Q(), r = ci(), r === n ? (M = e, e = n) : (Q(), i = ta(), i === n ? (M = e, e = n) : (N = e, e = Vn(r)))), e === n && (e = ii(), e === n && (e = hi(), e === n && (e = di()))), e;
	}
	function di() {
		let e, t, r;
		return e = M, t = wi(), t === n ? (M = e, e = n) : (r = W(), r === n ? (M = e, e = n) : (N = e, e = Hn(r))), e === n && (e = M, t = Ti(), t === n ? (M = e, e = n) : (r = W(), r === n ? (M = e, e = n) : (N = e, e = Un(r)))), e;
	}
	function fi() {
		let e, t, r, i, a, o, s, c, l;
		return e = M, t = M, r = ua(), r === n ? (M = t, t = n) : (i = Q(), r = [r, i], t = r), t === n && (t = null), r = ea(), r === n ? (M = e, e = n) : (i = Q(), a = M, o = ua(), o === n ? (M = a, a = n) : (s = Q(), o = [o, s], a = o), a === n && (a = null), o = M, s = ea(), s === n ? (M = o, o = n) : (c = Q(), l = ua(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), N = e, e = Wn(t, a, o)), e;
	}
	function pi() {
		let e, t;
		return e = Xr(), e === n && (e = fi(), e === n && (e = M, t = Oi(), t !== n && (N = e, t = Gn()), e = t, e === n && (e = M, t = ua(), t !== n && (N = e, t = Kn(t)), e = t, e === n && (e = M, t = fa(), t !== n && (N = e, t = qn(t)), e = t, e === n && (e = M, t = Si(), t !== n && (N = e, t = Jn(t)), e = t))))), e;
	}
	function mi() {
		let e, t, r;
		return e = M, t = ra(), t === n ? (M = e, e = n) : (r = ia(), N = e, e = Yn(t, r)), e;
	}
	function hi() {
		let e, t;
		return e = M, t = gi(), t !== n && (N = e, t = Xn(t)), e = t, e === n && (e = M, t = ca(), t !== n && (N = e, t = Zn(t)), e = t, e === n && (e = _i(), e === n && (e = bi(), e === n && (e = M, t = qi(), t !== n && (N = e, t = Qn()), e = t, e === n && (e = M, t = Ji(), t !== n && (N = e, t = $n()), e = t, e === n && (e = M, t = Yi(), t !== n && (N = e, t = er()), e = t)))))), e;
	}
	function gi() {
		let e, t;
		return F++, e = M, t = fa(), t !== n && (N = e, t = tr(t)), e = t, F--, e === n && (t = n, F === 0 && H(je)), e;
	}
	function _i() {
		let e, t, r, i;
		return e = M, t = Xi(), t === n ? (M = e, e = n) : (Q(), r = vi(), r === n && (r = null), Q(), i = Zi(), i === n ? (M = e, e = n) : (N = e, e = nr(r))), e;
	}
	function vi() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = yi(), t !== n) {
			for (r = [], i = M, a = Q(), o = J(), o === n ? (M = i, i = n) : (s = Q(), c = yi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = Q(), o = J(), o === n ? (M = i, i = n) : (s = Q(), c = yi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = rr(t, r);
		} else M = e, e = n;
		return e;
	}
	function yi() {
		let e, t, r, i;
		return e = M, t = fa(), t === n ? (M = e, e = n) : (Q(), r = ea(), r === n ? (M = e, e = n) : (Q(), i = hi(), i === n ? (M = e, e = n) : (N = e, e = ir(t, i)))), e;
	}
	function bi() {
		let e, t, r, i;
		return e = M, t = Qi(), t === n ? (M = e, e = n) : (Q(), r = xi(), r === n && (r = null), Q(), i = $i(), i === n ? (M = e, e = n) : (N = e, e = ar(r))), e;
	}
	function xi() {
		let e, t, r, i, a, o, s, c;
		if (e = M, t = hi(), t !== n) {
			for (r = [], i = M, a = Q(), o = J(), o === n ? (M = i, i = n) : (s = Q(), c = hi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = M, a = Q(), o = J(), o === n ? (M = i, i = n) : (s = Q(), c = hi(), c === n ? (M = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			N = e, e = or(t, r);
		} else M = e, e = n;
		return e;
	}
	function Si() {
		let t, r, i, a, o, s;
		if (t = M, r = M, i = M, a = e.charAt(M), ie.test(a) ? M++ : (a = n, F === 0 && H(Me)), a !== n) {
			for (o = [], s = Ci(); s !== n;) o.push(s), s = Ci();
			a = [a, o], i = a;
		} else M = i, i = n;
		if (r = i === n ? i : e.substring(r, M), r !== n && (N = t, r = sr(r)), t = r, t === n) {
			if (t = M, r = M, i = [], a = e.charAt(M), ae.test(a) ? M++ : (a = n, F === 0 && H(Ne)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(M), ae.test(a) ? M++ : (a = n, F === 0 && H(Ne));
			else i = n;
			r = i === n ? i : e.substring(r, M), r !== n && (N = t, r = cr(r)), t = r, t === n && (t = M, r = qi(), r !== n && (N = t, r = lr()), t = r, t === n && (t = M, r = Ji(), r !== n && (N = t, r = ur()), t = r, t === n && (t = M, r = Yi(), r !== n && (N = t, r = dr()), t = r)));
		}
		return t;
	}
	function Ci() {
		let t, r, i, a;
		return t = e.charAt(M), oe.test(t) ? M++ : (t = n, F === 0 && H(Pe)), t === n && (t = M, e.charCodeAt(M) === 45 ? (r = "-", M++) : (r = n, F === 0 && H(Fe)), r === n ? (M = t, t = n) : (i = M, F++, a = e.charAt(M), se.test(a) ? M++ : (a = n, F === 0 && H(Ie)), F--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r))), t;
	}
	function q() {
		let e, t;
		return e = M, t = aa(), t !== n && (N = e, t = fr(t)), e = t, e === n && (e = M, t = qi(), t !== n && (N = e, t = pr()), e = t, e === n && (e = M, t = Ji(), t !== n && (N = e, t = mr()), e = t, e === n && (e = M, t = Yi(), t !== n && (N = e, t = hr()), e = t))), e;
	}
	function wi() {
		let t;
		return e.charCodeAt(M) === 36 ? (t = "$", M++) : (t = n, F === 0 && H(Le)), t;
	}
	function Ti() {
		let t;
		return e.charCodeAt(M) === 64 ? (t = "@", M++) : (t = n, F === 0 && H(Re)), t;
	}
	function Ei() {
		let t;
		return e.substr(M, 2) === ".." ? (t = "..", M += 2) : (t = n, F === 0 && H(ze)), t;
	}
	function Di() {
		let t;
		return e.charCodeAt(M) === 46 ? (t = ".", M++) : (t = n, F === 0 && H(Be)), t;
	}
	function Oi() {
		let t;
		return e.charCodeAt(M) === 42 ? (t = "*", M++) : (t = n, F === 0 && H(Ve)), t;
	}
	function ki() {
		let t;
		return e.substr(M, 2) === "&&" ? (t = "&&", M += 2) : (t = n, F === 0 && H(He)), t;
	}
	function Ai() {
		let t;
		return e.substr(M, 2) === "||" ? (t = "||", M += 2) : (t = n, F === 0 && H(Ue)), t;
	}
	function ji() {
		let t;
		return e.charCodeAt(M) === 33 ? (t = "!", M++) : (t = n, F === 0 && H(We)), t;
	}
	function Mi() {
		let t;
		return e.substr(M, 2) === "==" ? (t = "==", M += 2) : (t = n, F === 0 && H(Ge)), t;
	}
	function Ni() {
		let t;
		return e.substr(M, 2) === "!=" ? (t = "!=", M += 2) : (t = n, F === 0 && H(Ke)), t;
	}
	function Pi() {
		let t;
		return e.substr(M, 2) === ">=" ? (t = ">=", M += 2) : (t = n, F === 0 && H(qe)), t;
	}
	function Fi() {
		let t;
		return e.charCodeAt(M) === 62 ? (t = ">", M++) : (t = n, F === 0 && H(Je)), t;
	}
	function Ii() {
		let t;
		return e.substr(M, 2) === "<=" ? (t = "<=", M += 2) : (t = n, F === 0 && H(Ye)), t;
	}
	function Li() {
		let t;
		return e.charCodeAt(M) === 60 ? (t = "<", M++) : (t = n, F === 0 && H(Xe)), t;
	}
	function Ri() {
		let t;
		return e.substr(M, 2) === "=~" ? (t = "=~", M += 2) : (t = n, F === 0 && H(Ze)), t;
	}
	function zi() {
		let t, r, i, a;
		return t = M, e.substr(M, 2) === "in" ? (r = "in", M += 2) : (r = n, F === 0 && H(Qe)), r === n ? (M = t, t = n) : (i = M, F++, a = Z(), F--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Bi() {
		let t, r, i, a;
		return t = M, e.substr(M, 3) === "nin" ? (r = "nin", M += 3) : (r = n, F === 0 && H($e)), r === n ? (M = t, t = n) : (i = M, F++, a = Z(), F--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Vi() {
		let t, r, i, a;
		return t = M, e.substr(M, 8) === d ? (r = d, M += 8) : (r = n, F === 0 && H(et)), r === n ? (M = t, t = n) : (i = M, F++, a = Z(), F--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Hi() {
		let t, r, i, a;
		return t = M, e.substr(M, 5) === f ? (r = f, M += 5) : (r = n, F === 0 && H(tt)), r === n ? (M = t, t = n) : (i = M, F++, a = Z(), F--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ui() {
		let t, r, i, a;
		return t = M, e.substr(M, 6) === p ? (r = p, M += 6) : (r = n, F === 0 && H(nt)), r === n ? (M = t, t = n) : (i = M, F++, a = Z(), F--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = M, e.substr(M, 6) === m ? (r = m, M += 6) : (r = n, F === 0 && H(rt)), r === n ? (M = t, t = n) : (i = M, F++, a = Z(), F--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = M, e.substr(M, 4) === ee ? (r = ee, M += 4) : (r = n, F === 0 && H(it)), r === n ? (M = t, t = n) : (i = M, F++, a = Z(), F--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = M, e.substr(M, 5) === h ? (r = h, M += 5) : (r = n, F === 0 && H(at)), r === n ? (M = t, t = n) : (i = M, F++, a = Z(), F--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = M, e.substr(M, 4) === te ? (r = te, M += 4) : (r = n, F === 0 && H(ot)), r === n ? (M = t, t = n) : (i = M, F++, a = Z(), F--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t, r, i, a;
		return t = M, e.substr(M, 5) === ne ? (r = ne, M += 5) : (r = n, F === 0 && H(st)), r === n ? (M = t, t = n) : (i = M, F++, a = Z(), F--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Yi() {
		let t, r, i, a;
		return t = M, e.substr(M, 4) === g ? (r = g, M += 4) : (r = n, F === 0 && H(ct)), r === n ? (M = t, t = n) : (i = M, F++, a = Z(), F--, a === n ? i = void 0 : (M = i, i = n), i === n ? (M = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Xi() {
		let t;
		return e.charCodeAt(M) === 123 ? (t = "{", M++) : (t = n, F === 0 && H(lt)), t;
	}
	function Zi() {
		let t;
		return e.charCodeAt(M) === 125 ? (t = "}", M++) : (t = n, F === 0 && H(ut)), t;
	}
	function Qi() {
		let t;
		return e.charCodeAt(M) === 91 ? (t = "[", M++) : (t = n, F === 0 && H(dt)), t;
	}
	function $i() {
		let t;
		return e.charCodeAt(M) === 93 ? (t = "]", M++) : (t = n, F === 0 && H(ft)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(M) === 58 ? (t = ":", M++) : (t = n, F === 0 && H(pt)), t;
	}
	function J() {
		let t;
		return e.charCodeAt(M) === 44 ? (t = ",", M++) : (t = n, F === 0 && H(mt)), t;
	}
	function Y() {
		let t;
		return e.charCodeAt(M) === 40 ? (t = "(", M++) : (t = n, F === 0 && H(ht)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(M) === 41 ? (t = ")", M++) : (t = n, F === 0 && H(gt)), t;
	}
	function na() {
		let t;
		return e.charCodeAt(M) === 63 ? (t = "?", M++) : (t = n, F === 0 && H(_t)), t;
	}
	function ra() {
		let t, r, i, a, o, s;
		if (F++, t = M, e.charCodeAt(M) === 47 ? (r = "/", M++) : (r = n, F === 0 && H(yt)), r !== n) {
			for (i = [], a = e.charAt(M), ce.test(a) ? M++ : (a = n, F === 0 && H(bt)), a === n && (a = M, e.charCodeAt(M) === 92 ? (o = "\\", M++) : (o = n, F === 0 && H(b)), o === n ? (M = a, a = n) : (e.length > M ? (s = e.charAt(M), M++) : (s = n, F === 0 && H(xt)), s === n ? (M = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(M), ce.test(a) ? M++ : (a = n, F === 0 && H(bt)), a === n && (a = M, e.charCodeAt(M) === 92 ? (o = "\\", M++) : (o = n, F === 0 && H(b)), o === n ? (M = a, a = n) : (e.length > M ? (s = e.charAt(M), M++) : (s = n, F === 0 && H(xt)), s === n ? (M = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(M) === 47 ? (a = "/", M++) : (a = n, F === 0 && H(yt)), a === n ? (M = t, t = n) : (N = t, t = gr(i));
		} else M = t, t = n;
		return F--, t === n && (r = n, F === 0 && H(vt)), t;
	}
	function ia() {
		let t, r, i;
		for (t = M, r = [], i = e.charAt(M), le.test(i) ? M++ : (i = n, F === 0 && H(St)); i !== n;) r.push(i), i = e.charAt(M), le.test(i) ? M++ : (i = n, F === 0 && H(St));
		return N = t, r = _r(r), t = r, t;
	}
	function aa() {
		let t, r, i, a, o;
		if (t = M, r = M, i = oa(), i !== n) {
			for (a = [], o = sa(); o !== n;) a.push(o), o = sa();
			i = [i, a], r = i;
		} else M = r, r = n;
		return t = r === n ? r : e.substring(t, M), t;
	}
	function oa() {
		let t, r, i;
		return t = e.charAt(M), ue.test(t) ? M++ : (t = n, F === 0 && H(Ct)), t === n && (t = M, r = e.charAt(M), de.test(r) ? M++ : (r = n, F === 0 && H(wt)), r === n ? (M = t, t = n) : (i = e.charAt(M), fe.test(i) ? M++ : (i = n, F === 0 && H(Tt)), i === n ? (M = t, t = n) : (r = [r, i], t = r))), t;
	}
	function sa() {
		let t;
		return t = oa(), t === n && (t = e.charAt(M), y.test(t) ? M++ : (t = n, F === 0 && H(x))), t;
	}
	function ca() {
		let t, r, i, a, o, s, c;
		if (F++, t = M, e.charCodeAt(M) === 45 ? (r = "-", M++) : (r = n, F === 0 && H(Fe)), r === n && (r = null), i = la(), i !== n) {
			if (a = M, e.charCodeAt(M) === 46 ? (o = ".", M++) : (o = n, F === 0 && H(Be)), o !== n) {
				if (s = [], c = e.charAt(M), y.test(c) ? M++ : (c = n, F === 0 && H(x)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(M), y.test(c) ? M++ : (c = n, F === 0 && H(x));
				else s = n;
				s === n ? (M = a, a = n) : (o = [o, s], a = o);
			} else M = a, a = n;
			a === n && (a = null), o = da(), o === n && (o = null), N = t, t = vr(a, o);
		} else M = t, t = n;
		return F--, t === n && (r = n, F === 0 && H(Et)), t;
	}
	function la() {
		let t, r, i, a;
		if (e.charCodeAt(M) === 48 ? (t = "0", M++) : (t = n, F === 0 && H(Dt)), t === n) {
			if (t = M, r = e.charAt(M), pe.test(r) ? M++ : (r = n, F === 0 && H(Ot)), r !== n) {
				for (i = [], a = e.charAt(M), y.test(a) ? M++ : (a = n, F === 0 && H(x)); a !== n;) i.push(a), a = e.charAt(M), y.test(a) ? M++ : (a = n, F === 0 && H(x));
				r = [r, i], t = r;
			} else M = t, t = n;
		}
		return t;
	}
	function ua() {
		let t, r, i, a, o, s;
		if (F++, t = M, e.charCodeAt(M) === 48 ? (r = "0", M++) : (r = n, F === 0 && H(Dt)), r === n) {
			if (r = M, e.charCodeAt(M) === 45 ? (i = "-", M++) : (i = n, F === 0 && H(Fe)), i === n && (i = null), a = e.charAt(M), pe.test(a) ? M++ : (a = n, F === 0 && H(Ot)), a !== n) {
				for (o = [], s = e.charAt(M), y.test(s) ? M++ : (s = n, F === 0 && H(x)); s !== n;) o.push(s), s = e.charAt(M), y.test(s) ? M++ : (s = n, F === 0 && H(x));
				i = [
					i,
					a,
					o
				], r = i;
			} else M = r, r = n;
		}
		return r !== n && (N = t, r = yr()), t = r, F--, t === n && (r = n, F === 0 && H(S)), t;
	}
	function da() {
		let t, r, i, a, o;
		if (t = M, r = e.charAt(M), me.test(r) ? M++ : (r = n, F === 0 && H(kt)), r !== n) {
			if (i = e.charAt(M), _.test(i) ? M++ : (i = n, F === 0 && H(ke)), i === n && (i = null), a = [], o = e.charAt(M), y.test(o) ? M++ : (o = n, F === 0 && H(x)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(M), y.test(o) ? M++ : (o = n, F === 0 && H(x));
			else a = n;
			a === n ? (M = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else M = t, t = n;
		return t;
	}
	function fa() {
		let t, r, i, a;
		if (F++, t = M, e.charCodeAt(M) === 34 ? (r = "\"", M++) : (r = n, F === 0 && H(At)), r !== n) {
			for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
			e.charCodeAt(M) === 34 ? (a = "\"", M++) : (a = n, F === 0 && H(At)), a === n ? (M = t, t = n) : (N = t, t = br(i));
		} else M = t, t = n;
		if (t === n) {
			if (t = M, e.charCodeAt(M) === 39 ? (r = "'", M++) : (r = n, F === 0 && H(C)), r !== n) {
				for (i = [], a = ma(); a !== n;) i.push(a), a = ma();
				e.charCodeAt(M) === 39 ? (a = "'", M++) : (a = n, F === 0 && H(C)), a === n ? (M = t, t = n) : (N = t, t = xr(i));
			} else M = t, t = n;
		}
		return F--, t === n && (r = n, F === 0 && H(je)), t;
	}
	function pa() {
		let t, r, i;
		return t = M, r = M, F++, i = e.charAt(M), he.test(i) ? M++ : (i = n, F === 0 && H(jt)), F--, i === n ? r = void 0 : (M = r, r = n), r === n ? (M = t, t = n) : (i = ha(), i === n ? (M = t, t = n) : (N = t, t = Sr(i))), t === n && (t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, F === 0 && H(b)), r === n ? (M = t, t = n) : (e.charCodeAt(M) === 34 ? (i = "\"", M++) : (i = n, F === 0 && H(At)), i === n ? (M = t, t = n) : (N = t, t = Cr())), t === n && (t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, F === 0 && H(b)), r === n ? (M = t, t = n) : (i = ga(), i === n ? (M = t, t = n) : (N = t, t = wr(i))))), t;
	}
	function ma() {
		let t, r, i;
		return t = M, r = M, F++, i = e.charAt(M), ge.test(i) ? M++ : (i = n, F === 0 && H(Mt)), F--, i === n ? r = void 0 : (M = r, r = n), r === n ? (M = t, t = n) : (i = ha(), i === n ? (M = t, t = n) : (N = t, t = Tr(i))), t === n && (t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, F === 0 && H(b)), r === n ? (M = t, t = n) : (e.charCodeAt(M) === 39 ? (i = "'", M++) : (i = n, F === 0 && H(C)), i === n ? (M = t, t = n) : (N = t, t = Er())), t === n && (t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, F === 0 && H(b)), r === n ? (M = t, t = n) : (i = ga(), i === n ? (M = t, t = n) : (N = t, t = Dr(i))))), t;
	}
	function ha() {
		let t, r, i, a;
		return t = e.charAt(M), _e.test(t) ? M++ : (t = n, F === 0 && H(Nt)), t === n && (t = M, r = M, i = e.charAt(M), de.test(i) ? M++ : (i = n, F === 0 && H(wt)), i === n ? (M = r, r = n) : (a = e.charAt(M), fe.test(a) ? M++ : (a = n, F === 0 && H(Tt)), a === n ? (M = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, M)), t;
	}
	function ga() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = M, e.charCodeAt(M) === 92 ? (r = "\\", M++) : (r = n, F === 0 && H(b)), r !== n && (N = t, r = Or()), t = r, t === n && (t = M, e.charCodeAt(M) === 47 ? (r = "/", M++) : (r = n, F === 0 && H(yt)), r !== n && (N = t, r = kr()), t = r, t === n && (t = M, e.charCodeAt(M) === 98 ? (r = "b", M++) : (r = n, F === 0 && H(Pt)), r !== n && (N = t, r = Ar()), t = r, t === n && (t = M, e.charCodeAt(M) === 102 ? (r = "f", M++) : (r = n, F === 0 && H(w)), r !== n && (N = t, r = jr()), t = r, t === n && (t = M, e.charCodeAt(M) === 110 ? (r = "n", M++) : (r = n, F === 0 && H(Ft)), r !== n && (N = t, r = Mr()), t = r, t === n && (t = M, e.charCodeAt(M) === 114 ? (r = "r", M++) : (r = n, F === 0 && H(T)), r !== n && (N = t, r = Nr()), t = r, t === n && (t = M, e.charCodeAt(M) === 116 ? (r = "t", M++) : (r = n, F === 0 && H(It)), r !== n && (N = t, r = k()), t = r, t === n && (t = M, e.charCodeAt(M) === 117 ? (r = "u", M++) : (r = n, F === 0 && H(E)), r === n ? (M = t, t = n) : (i = M, a = M, o = e.charAt(M), ve.test(o) ? M++ : (o = n, F === 0 && H(Lt)), o === n ? (M = a, a = n) : (s = e.charAt(M), ye.test(s) ? M++ : (s = n, F === 0 && H(D)), s === n ? (M = a, a = n) : (c = X(), c === n ? (M = a, a = n) : (l = X(), l === n ? (M = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, M), i === n ? (M = t, t = n) : (e.substr(M, 2) === "\\u" ? (a = "\\u", M += 2) : (a = n, F === 0 && H(Rt)), a === n ? (M = t, t = n) : (o = M, s = M, c = e.charAt(M), ve.test(c) ? M++ : (c = n, F === 0 && H(Lt)), c === n ? (M = s, s = n) : (l = e.charAt(M), be.test(l) ? M++ : (l = n, F === 0 && H(zt)), l === n ? (M = s, s = n) : (u = X(), u === n ? (M = s, s = n) : (d = X(), d === n ? (M = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, M), o === n ? (M = t, t = n) : (N = t, t = A(i, o))))), t === n && (t = M, e.charCodeAt(M) === 117 ? (r = "u", M++) : (r = n, F === 0 && H(E)), r === n ? (M = t, t = n) : (i = M, a = M, o = X(), o === n ? (M = a, a = n) : (s = X(), s === n ? (M = a, a = n) : (c = X(), c === n ? (M = a, a = n) : (l = X(), l === n ? (M = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, M), i === n ? (M = t, t = n) : (N = M, a = Pr(i), a = a ? n : void 0, a === n ? (M = t, t = n) : (N = t, t = j(i)))))))))))), t;
	}
	function X() {
		let t;
		return t = e.charAt(M), xe.test(t) ? M++ : (t = n, F === 0 && H(Wt)), t;
	}
	function Z() {
		let t;
		return t = e.charAt(M), oe.test(t) ? M++ : (t = n, F === 0 && H(Pe)), t;
	}
	function Q() {
		let t, r;
		for (F++, t = [], r = e.charAt(M), Se.test(r) ? M++ : (r = n, F === 0 && H(Gt)); r !== n;) t.push(r), r = e.charAt(M), Se.test(r) ? M++ : (r = n, F === 0 && H(Gt));
		return F--, t;
	}
	function _a() {
		let t, r;
		return t = M, F++, e.length > M ? (r = e.charAt(M), M++) : (r = n, F === 0 && H(xt)), F--, r === n ? t = void 0 : (M = t, t = n), t;
	}
	function $(e) {
		return e.length > 1e3 && Rr("Member name too long (maximum 1000 characters)"), e;
	}
	I = a();
	let va = I !== n && M === e.length;
	function ya() {
		throw I !== n && M < e.length && H(B()), U(Ir, P < e.length ? zr(P) : null, P < e.length ? Hr(P, P + 1) : Hr(P, P));
	}
	if (t.peg$library) return {
		peg$result: I,
		peg$currPos: M,
		peg$FAILED: n,
		peg$maxFailExpected: Ir,
		peg$maxFailPos: P,
		peg$success: va,
		peg$throw: va ? void 0 : ya
	};
	if (va) return I;
	ya();
}
var Gt = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), Kt = {
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
}, qt = (e) => {
	throw new Dt(1, 1, e);
}, Jt = (e) => e.type === "root" || e.type === "current", Yt = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function Xt(e) {
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
		if (Jt(i)) r === "value" && !Yt(i) && qt("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && qt(`Expected a query, found ${String(i.type)}`), i.type) {
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
				let e = Gt.has(i.operator) ? "value" : "any";
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
				let e = i.name, n = Kt[e], a = i.args;
				a.length !== n.args.length && qt(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && qt(`The result of ${e}() must be compared`), r === "value" && n.logical && qt(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
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
			case "value": r === "test" && qt("A literal must be compared");
		}
	}
}
function Zt(e) {
	let t;
	try {
		t = Wt(e);
	} catch (e) {
		if (Ft(e)) throw new Dt(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new Dt(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new Dt(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return Xt(t), t;
}
var Qt = /* @__PURE__ */ new Set([
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
]), $t = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), en = (e) => e >= 55296 && e <= 56319, tn = (e) => e >= 56320 && e <= 57343, nn = (e) => e !== void 0 && e >= "0" && e <= "9", rn = (e, t) => {
	let n = e.charCodeAt(t);
	return en(n) && tn(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : en(n) || tn(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, an = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !Qt.has(n) ? null : n === "n" ? {
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
}, on = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return $t.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, sn = (e, t) => {
	let n = e[t];
	return n === "\\" ? an(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : rn(e, t);
}, cn = (e, t) => {
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
			let t = on(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = sn(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = sn(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, ln = (e, t) => {
	let n = t + 1, r = n;
	for (; nn(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; nn(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, un = (e) => {
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
				let e = i ? ln(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = cn(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = on(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = an(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = rn(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, dn = 1e3, fn = 1e3, pn = 16, mn = /^[dgimsuy]*$/, hn = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, O = class extends Error {}, gn = 0, _n = 1, vn = 2, yn = 3, bn = 4, xn = 5, Sn = Tt(2, 31) - 1, Cn = (e, t) => {
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
	return e.scratch = void 0, (r.gen > Sn - t - 2 || r.step > Sn - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, wn = /* @__PURE__ */ new Set([
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
]), Tn = /^\{(\d+)(?:,(\d*))?\}/, En = /^[0-9a-fA-F]{4}/, Dn = /^\(\?([ims]*)(?:-([ims]*))?:/, On = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, kn = class {
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
		if (this.i < this.src.length) throw new O("unexpected character");
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
				let r = Dn.exec(e.slice(t, t + 12));
				if (!r) throw new O("lookaround or named group");
				let i = Et({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new O("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new O("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new O("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(wn.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new O("trailing backslash");
		if (r === "b" || r === "B") throw new O("word boundary");
		if (r >= "1" && r <= "9") throw new O("backreference");
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
			if (n === -1) throw new O("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && En.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (En.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
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
			let n = Tn.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > dn || i !== Infinity && i > dn) throw new O("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, An = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= dn) throw new O("pattern too large");
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
		this.emit(xn);
	}
	compile(e) {
		if (++this.work > 4 * dn) throw new O("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(gn, this.atomId(e));
				return;
			case "bol":
				this.emit(yn, +!!e.multiline);
				return;
			case "eol":
				this.emit(bn, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit(_n);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(vn)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit(_n);
					this.x[t] = t + 1, this.compile(e.node), this.emit(vn, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit(_n);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, jn = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new kn(e, r, t, n).parse(), a = new An(r);
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
}, Mn = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: te, atomHit: ne } = r, g = r.gen, re = r.step;
	r.gen = g + t.length + 2, r.step = re + t.length + 2;
	let _ = 0, v = !1, ie = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== g) switch (ee[r] = g, ++c === 64 && (u(c), c = 0), i[r]) {
				case gn:
					e[n++] = r;
					break;
				case xn: return u(c), v = !0, n;
				case vn:
					h[s++] = a[r];
					break;
				case _n:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case yn:
					(_ === 0 || a[r] === 1 && On(t.charCodeAt(_ - 1))) && (h[s++] = r + 1);
					break;
				case bn: (_ === t.length || a[r] === 1 && On(t.charCodeAt(_))) && (h[s++] = r + 1);
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
}, Nn = (e, t, n) => {
	let r = Cn(e, t.length);
	try {
		return Mn(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, Pn = 256, Fn = /* @__PURE__ */ new Map(), In = 0, Ln = (e, t, n, r, i = !1) => {
	if (e.length > fn || t.length > 7 || !mn.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = Fn.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = hn(s) > pn ? null : jn(n ? `^(?:${s})$` : s, t, i);
	In >= Pn && (Fn.clear(), In = 0);
	let l = Fn.get(s);
	return l === void 0 && Fn.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), In++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, Rn = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), Nn(e, t, n);
}, zn = class {
	constructor(e) {
		this.nodes = e;
	}
}, Bn = (e) => {
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
}, Vn = (e) => {
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
	return !Bn(e);
}, Hn = 256, Un = /* @__PURE__ */ new Map(), Wn = (e, t) => {
	let n = Un.get(e);
	return n === void 0 && (n = Vn(e), Un.size >= Hn && Un.clear(), Un.set(Array.from(e).join(""), n)), t(e.length), n;
}, Gn = /* @__PURE__ */ new Map(), Kn = (e, t) => {
	let n = Gn.get(e);
	return n === void 0 && (n = un(e), n !== null && (n = Array.from(n).join("")), Gn.size >= Hn && Gn.clear(), Gn.set(Array.from(e).join(""), n)), t(e.length), n;
}, qn = 256, Jn = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > fn) c = null;
		else if (o) {
			let n = Kn(e, i);
			c = n === null ? null : Ln(n, t, r, i, !0);
		} else c = Wn(e, i) ? Ln(e, t, r, i) : null;
		s !== void 0 && (s.size >= qn && s.clear(), s.set(a, c));
	}
	return c !== null && Rn(c, n, i);
}, Yn = {
	length: (e, t) => {
		let n = e[0];
		if (D(n)) {
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
		if (T(n)) return w(n);
		if (E(n)) {
			let e = Pt(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !D(r) || !D(i) ? !1 : Jn(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !D(r) || !D(i) ? !1 : Jn(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, Xn = (e, t, n = S) => e === void 0 && t === void 0 || At(e, t, n), Zn = (e, t, n = S) => !At(e, t, n), Qn = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, $n = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return Qn(n) - Qn(i);
	}
	return e.length - t.length;
}, er = (e, t, n = S) => Lt(e) && Lt(t) ? e < t : D(e) && D(t) ? (n(Math.min(e.length, t.length)), $n(e, t) < 0) : !1, tr = (e, t, n = S) => er(e, t, n) || Xn(e, t, n), nr = (e, t, n = S) => Lt(e) && Lt(t) ? e > t : D(e) && D(t) ? (n(Math.min(e.length, t.length)), $n(e, t) > 0) : !1, rr = (e, t, n = S) => nr(e, t, n) || Xn(e, t, n), ir = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, ar = (e, t, n) => {
	let r = w(e);
	for (let i = 0; i < r; i++) {
		let r = jt(e, i);
		if (n(1 + ir(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, or = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, sr = (e) => typeof e == "string" && e.length + 1 > Mt, cr = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = w(e);
	for (let n = 0; n < a; n++) {
		let r = jt(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), sr(r) ? i.long.push(r) : i.set.add(or(r));
	}
	return n?.set(e, i), i;
}, lr = ({ set: e, long: t }, n, r) => {
	if (sr(n)) {
		for (let e of t) if (r(1 + ir(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(or(n)));
}, ur = (e, t, n) => {
	let r = w(e);
	for (let i = 0; i < r; i++) if (n(), C(e, i) && t(e[i])) return !0;
	return !1;
}, dr = {
	eq: Xn,
	ne: Zn,
	lt: er,
	le: tr,
	gt: nr,
	ge: rr,
	in: (e, t, n = S) => T(t) ? ar(t, e, n) !== -1 : !1,
	nin: (e, t, n = S) => T(t) ? ar(t, e, n) === -1 : !1,
	subsetof: (e, t, n = S, r) => {
		if (!T(e) || !T(t)) return !1;
		let i = cr(t, n, r);
		return !ur(e, (e) => !lr(i, e, n), n);
	},
	anyof: (e, t, n = S, r) => {
		if (!T(e) || !T(t)) return !1;
		let i = cr(t, n, r);
		return ur(e, (e) => lr(i, e, n), n);
	},
	noneof: (e, t, n = S, r) => {
		if (!T(e) || !T(t)) return !1;
		let i = cr(t, n, r);
		return !ur(e, (e) => lr(i, e, n), n);
	},
	sizeof: (e, t) => !T(e) && !D(e) || !T(t) && !D(t) ? !1 : (T(e) ? w(e) : e.length) === (T(t) ? w(t) : t.length),
	size: (e, t) => !T(e) && !D(e) || !Lt(t) ? !1 : (T(e) ? w(e) : e.length) === t
}, fr = (e) => !T(e) && !D(e) ? !1 : (T(e) ? w(e) : e.length) === 0, pr = (e, t, n, r = S, i) => !D(e) || !D(t) ? !1 : Jn(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), mr = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), hr = (e, t) => e.concat(`[${t}]`), gr = (e, t) => e < 0 ? t + e : e, _r = (e, t) => {
	let n = w(e), r = gr(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: C(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, vr = (e, t) => {
	for (let n of t) e.push(n);
}, yr = 1e6, br = 100, xr = 1e6, Sr = 20, Cr = 1e4, wr = 1e4, Tr = class {
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
					C(n, r) && this.visit(n[r]);
				} else if (C(n, t)) this.visit(n[t]);
				else if (++e.holes > wr) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!C(n, r)) continue;
				this.weight += r.length, this.visit(n[r]);
			}
		}
		n.length === 0 && (this.done = !0);
	}
	visit(e) {
		if (this.nodes++, this.weight += typeof e == "string" ? 1 + e.length : 1, typeof e == "string" && (this.stringPositions += 1 + e.length), typeof e == "object" && e && !this.seen.has(e)) {
			if (this.seen.add(e), T(e)) this.frames.push({
				container: e,
				keys: null,
				indices: null,
				length: w(e),
				i: 0,
				holes: 0
			});
			else if (E(e)) {
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
}, Er = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, mr(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = mr(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = w(e);
			for (let r = 0; r < n; r++) this.tick(), C(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new Tr(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(Cr, Math.ceil((this.retained - this.retainedLimit) / Sr))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new Ot(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(yr, br * e.weight) + t, this.retainedLimit = Math.max(xr, Sr * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new Tr(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(Cr, Math.ceil((this.steps - this.stepLimit) / br))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new Ot(`Query exceeded ${this.stepLimit} evaluation steps`);
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
			if (!E(e)) return;
			let r = this.canonicalName(n, n.value);
			if (C(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (T(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: hr(t, r)
					});
				}), n;
			}
			if (E(e)) {
				let n = Pt(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) C(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!T(e)) return;
			let r = _r(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: hr(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (T(e)) {
				let r = _r(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: hr(t, r.index)
				} : void 0;
			}
			if (E(e)) {
				let r = String(n.value);
				return C(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!T(e)) return [];
			let r = w(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : gr(n.start, r), o = n.end === null ? r : gr(n.end, r)) : (a = n.start === null ? r - 1 : gr(n.start, r), o = n.end === null ? -r - 1 : gr(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: C(e, u) ? e[u] : void 0,
				paths: hr(t, u)
			}), u += i;
			return l;
		}, this.handleUnions = (e, t) => {
			let n = [];
			for (let r of t.values) switch (this.tick(), r.type) {
				case "identifier":
					if (E(e.value)) {
						let t = this.handleIdentifier(e, r);
						zt(t) && (this.retain(), n.push(t));
					}
					break;
				case "stringLiteral":
					if (E(e.value)) {
						let t = this.handleStringLiteral(e, r);
						zt(t) && (this.retain(), n.push(t));
					}
					break;
				case "numericLiteral":
					if (T(e.value)) {
						let t = this.handleNumericLiteral(e, r);
						zt(t) && (this.retain(), n.push(t));
					}
					break;
				case "wildcard":
					vr(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": vr(n, this.handleBracketExpressionContent(e, r));
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
						zt(e) && (this.retain(), n.push(e));
						break;
					}
					case "bracketExpression":
						vr(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						vr(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						zt(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (E(e)) {
					let t = Pt(e);
					this.tick(t.length), i.push({
						parent: a,
						keys: t,
						length: t.length,
						i: 0
					});
				} else T(e) && i.push({
					parent: a,
					keys: null,
					length: w(e),
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
						if (!C(n, t)) continue;
						a = {
							value: n[t],
							paths: hr(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!C(n, r)) continue;
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
						if (!Lt(i) || !Lt(r)) i = void 0;
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
					return Lt(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return fr(n);
			if (t.operator === "reg") return pr(n, t.right.value, t.right.opts, this.tick, t);
			let r = this.handleOperationContent(e, t.right)?.value, i = dr[t.operator];
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
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new zn(r.value) : new zn(zt(r?.value) ? [r?.value] : []);
			}), i = Yn[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
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
					return e?.isIndefinite ? Array.isArray(e.value) && e.value.length > 0 : zt(e);
				}
				case "current": {
					let n = this.handleSubscript(e, t.next);
					return n?.isIndefinite ? Array.isArray(n.value) && n.value.length > 0 : zt(n);
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
					if (T(n)) this.forEachElement(n, (n, i) => {
						let a = {
							value: n,
							paths: hr(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (E(n)) {
						let i = Pt(n);
						this.tick(i.length);
						for (let a of i) {
							if (!C(n, a)) continue;
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
					if (!zt(n)) continue;
					a = [n];
				}
				let o = t.next;
				if (o === null) vr(n, a);
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
				throw Ft(e) ? new Ot("Query is nested too deeply") : It(e) ? new Ot("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? yr, this.retainedLimit = this.adaptiveLimit ? xr : Infinity;
	}
}, Dr = (e, t, n) => {
	let r = Zt(t), i = new Er(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? Rt(i) ? [] : [i.value] : i?.value;
}, Or = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = Dr(e, i, n);
		zt(t) && r.push(t);
	}
	return r;
}, kr = (e, t, n = {}) => {
	try {
		return T(t) ? Or(e, t, n) : Dr(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, Ar = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = Ar(n, t);
		if (e) return e;
	}
	return null;
}, jr = (e, t, n) => {
	let r = e?.[t.fileName];
	if (r === void 0) throw Error(`Registry entry not found: ${t.fileName}`);
	let i = r;
	if (t.jsonPath) {
		let e = kr(r, t.jsonPath, { returnArray: !0 });
		if (e.length === 0) throw Error(`Destination JSONPath matched no nodes: ${t.jsonPath}`);
		if (e.length > 1) throw Error(`Destination JSONPath must identify exactly one node; matched ${e.length}: ${t.jsonPath}`);
		i = e[0];
	} else if (t.dataRole && (i = Ar(r, t.dataRole), i == null)) throw Error(`Destination dataRole not found: ${t.dataRole}`);
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
}, Mr = (e, t, n, r) => {
	let { parent: i, key: a } = jr(e, t, r);
	return (b[t.action] || bt)(i, a, n), e;
}, Nr = (e, t) => {
	if (!e) return null;
	let n = t[e.fileName];
	if (n === void 0) throw Error(`Entry not found in state: ${e.fileName}`);
	if (e.jsonPath) {
		let t = kr(n, e.jsonPath, { returnArray: !0 });
		return t.length === 0 ? Array.isArray(n) ? n : [] : t.length === 1 ? t[0] : t;
	}
	return Array.isArray(e.filePath) && e.filePath.length > 0 ? e.filePath.reduce((e, t) => e ? e[t] : void 0, n) : n;
}, k = (e, t, n, r = !1) => {
	if (t) {
		if (!t.filePath || t.filePath.length === 0) {
			let r = e[t.fileName];
			Array.isArray(r) ? r.push(...Array.isArray(n) ? n : [n]) : e[t.fileName] = n;
		} else try {
			Mr(e, t, n, r);
		} catch {}
	}
}, A = {
	single: (e, t) => {
		let n = Ae[e.templateKey], r = Nr(e.sourcePath, t);
		return (e.func === "fromCollection" ? qe : Ue)(r, n);
	},
	rowOnColumn: (e, { data: t }) => _t({
		columns: t?.columns,
		data: t,
		columnSpec: Ae[e.templateKey.columnKey],
		rowSpec: Ae[e.templateKey.rowKey]
	}),
	columnOnRow: (e, { data: t }) => vt({
		columns: t?.columns,
		data: t,
		columnSpec: Ae[e.templateKey.columnKey],
		rowSpec: Ae[e.templateKey.rowKey]
	})
}, Pr = (e, t, n = !1) => {
	let r = Ne[e], i = A[r.type](r, t);
	return k(t, r.destinationPath, i, n), i;
}, j = ({ instructions: e = [], base: t, data: n, showLog: r = !1 } = {}) => (e.forEach((e) => {
	r && console.log(`[runStep] ${e}`), Pr(e, {
		base: t,
		data: n
	}, r);
}), t), M = (e) => Array.isArray(e) ? e : [e], N = (e, t, n) => {
	e[t] = n;
}, Fr = {
	set: N,
	push: (e, t, n) => {
		e[t].push(...M(n));
	},
	unshift: (e, t, n) => {
		e[t].unshift(...M(n));
	},
	pushToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.push(...structuredClone(M(n)));
		});
	},
	unshiftToRows: (e, t, n) => {
		e[t].forEach((e) => {
			e.children.unshift(...structuredClone(M(n)));
		});
	},
	unshiftSerialToRows: (e, t, n) => {
		e[t].forEach((e, t) => {
			let r = structuredClone(n);
			r.textContent = t + 1, e.children.unshift(r);
		});
	}
}, P = Object.defineProperty, Ir = Object.getOwnPropertySymbols, F = Object.prototype.hasOwnProperty, Lr = Object.prototype.propertyIsEnumerable, I = Math.pow, L = (e, t, n) => t in e ? P(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Rr = (e, t) => {
	for (var n in t ||= {}) F.call(t, n) && L(e, n, t[n]);
	if (Ir) for (var n of Ir(t)) Lr.call(t, n) && L(e, n, t[n]);
	return e;
}, zr = class extends Error {
	constructor(e, t, n) {
		super(n), this.name = "JSONPathSyntaxError", this.line = e, this.charPositionInLine = t, this.msg = n;
	}
}, R = class extends Error {
	constructor() {
		super(...arguments), this.name = "JSONPathLimitError";
	}
}, z = () => void 0, Br = (e, t, n, r) => {
	if (r(), typeof e == "string" && typeof t == "string" && e.length === t.length && r(e.length), e === t) return !0;
	if (e === null || t === null || e === void 0 || t === void 0 || typeof e != typeof t || Array.isArray(e) !== Array.isArray(t)) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		let r = U(e);
		return r === U(t) && (n.push({
			x: e,
			y: t,
			keys: null,
			length: r,
			i: 0
		}), !0);
	}
	if (typeof e == "object" && typeof t == "object") {
		let i = Ur(e), a = Ur(t);
		return r(i.length + a.length), i.length === a.length && (n.push({
			x: e,
			y: t,
			keys: i,
			length: i.length,
			i: 0
		}), !0);
	}
	return !1;
}, B = (e, t, n = z) => {
	let r = [];
	if (!Br(e, t, r, n)) return !1;
	for (; r.length > 0;) {
		let e = r[r.length - 1];
		if (e.i >= e.length) r.pop();
		else if (e.keys === null) {
			let t = e.i++;
			if (!Br(Vr(e.x, t), Vr(e.y, t), r, n)) return !1;
		} else {
			let t = e.i++, i = e.keys[t], a = e.x, o = e.y;
			if (n(i.length), !V(o, i) || !V(a, i)) return !1;
			let s = a[i];
			if (!V(o, i) || !Br(s, o[i], r, n)) return !1;
		}
	}
	return !0;
}, V = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Vr = (e, t) => V(e, t) ? e[t] : void 0, Hr = 16383, H = 1e3, Ur = (e) => {
	let t = Object.keys(e);
	for (let e of t) if (e.length > H) throw new R(`Member name too long (maximum ${H} characters)`);
	return t;
}, U = (e) => {
	let t = e.length;
	if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) throw TypeError("Invalid array length");
	return t;
}, Wr = (e) => e instanceof RangeError && /call stack/i.test(e.message), W = (e) => Array.isArray(e), Gr = (e) => e instanceof RangeError && /Invalid (string|array|typed array) length|maximum size exceeded/i.test(e.message), Kr = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && Object.getPrototypeOf(t) === null;
}, qr = (e) => typeof e == "number", G = (e) => typeof e == "string", Jr = (e) => e === void 0, K = (e) => e !== void 0;
function Yr(e) {
	if (!e || e.length === 0) return null;
	let t = null;
	for (let n = e.length - 1; n >= 0; n--) t = {
		type: "subscript",
		value: e[n],
		next: t
	};
	return t;
}
function Xr(e) {
	return e.type === "root" || e.type === "current" || e.type === "functionCall" || e.type === "value" && (e.subtype === "boolean" || e.subtype === "null");
}
function Zr(e, t, n) {
	return t.reduce((e, t) => n(e, t), e);
}
var Qr = class extends SyntaxError {
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
function $r(e, t) {
	t = t === void 0 ? {} : t;
	let n = {}, r = t.grammarSource, i = { jsonpath: Hr }, a = Hr, o = "length", s = "count", c = "match", l = "search", u = "value", d = "subsetof", f = "anyof", p = "noneof", m = "sizeof", ee = "size", h = "empty", te = "true", ne = "false", g = "null", re = /^[,\]]/, _ = /^[+\-]/, v = /^[*\/]/, ie = /^[a-zA-Z_]/, ae = /^[\x80-\uFFFF_]/, oe = /^[a-zA-Z0-9_]/, se = /^[0-9@$\-]/, ce = /^[^\/\\]/, le = /^[gimsuy]/, ue = /^[a-zA-Z_\x80-\uD7FF\uE000-\uFFFF]/, de = /^[\uD800-\uDBFF]/, fe = /^[\uDC00-\uDFFF]/, y = /^[0-9]/, pe = /^[1-9]/, me = /^[eE]/, he = /^["\\]/, ge = /^['\\]/, _e = /^[ -\uD7FF\uE000-\uFFFF]/, ve = /^[dD]/, ye = /^[89abAB]/, be = /^[c-fC-F]/, xe = /^[0-9a-fA-F]/, Se = /^[ \t\n\r]/, Ce = L([",", "]"], !1, !1, !1), we = I("length", !1), Te = I("count", !1), Ee = I("match", !1), De = I("search", !1), Oe = I("value", !1), ke = L(["+", "-"], !1, !1, !1), Ae = L(["*", "/"], !1, !1, !1), je = R("string"), Me = L([
		["a", "z"],
		["A", "Z"],
		"_"
	], !1, !1, !1), Ne = L([["", "￿"], "_"], !1, !1, !1), Pe = L([
		["a", "z"],
		["A", "Z"],
		["0", "9"],
		"_"
	], !1, !1, !1), Fe = I("-", !1), Ie = L([
		["0", "9"],
		"@",
		"$",
		"-"
	], !1, !1, !1), Le = I("$", !1), Re = I("@", !1), ze = I("..", !1), Be = I(".", !1), Ve = I("*", !1), He = I("&&", !1), Ue = I("||", !1), We = I("!", !1), Ge = I("==", !1), Ke = I("!=", !1), qe = I(">=", !1), Je = I(">", !1), Ye = I("<=", !1), Xe = I("<", !1), Ze = I("=~", !1), Qe = I("in", !1), $e = I("nin", !1), et = I("subsetof", !1), tt = I("anyof", !1), nt = I("noneof", !1), rt = I("sizeof", !1), it = I("size", !1), at = I("empty", !1), ot = I("true", !1), st = I("false", !1), ct = I("null", !1), lt = I("{", !1), ut = I("}", !1), dt = I("[", !1), ft = I("]", !1), pt = I(":", !1), mt = I(",", !1), ht = I("(", !1), gt = I(")", !1), _t = I("?", !1), vt = R("regex"), yt = I("/", !1), bt = L(["/", "\\"], !0, !1, !1), b = I("\\", !1), xt = Rr(), St = L([
		"g",
		"i",
		"m",
		"s",
		"u",
		"y"
	], !1, !1, !1), Ct = L([
		["a", "z"],
		["A", "Z"],
		"_",
		["", "퟿"],
		["", "￿"]
	], !1, !1, !1), wt = L([["\ud800", "\udbff"]], !1, !1, !1), Tt = L([["\udc00", "\udfff"]], !1, !1, !1), x = L([["0", "9"]], !1, !1, !1), Et = R("number"), Dt = I("0", !1), Ot = L([["1", "9"]], !1, !1, !1), S = R("integer"), kt = L(["e", "E"], !1, !1, !1), At = I("\"", !1), C = I("'", !1), jt = L(["\"", "\\"], !1, !1, !1), Mt = L(["'", "\\"], !1, !1, !1), Nt = L([[" ", "퟿"], ["", "￿"]], !1, !1, !1), Pt = I("b", !1), w = I("f", !1), Ft = I("n", !1), T = I("r", !1), It = I("t", !1), E = I("u", !1), Lt = L(["d", "D"], !1, !1, !1), D = L([
		"8",
		"9",
		"a",
		"b",
		"A",
		"B"
	], !1, !1, !1), Rt = I("\\u", !1), zt = L([["c", "f"], ["C", "F"]], !1, !1, !1), Bt = L([
		["0", "9"],
		["a", "f"],
		["A", "F"]
	], !1, !1, !1), Vt = L([
		" ",
		"	",
		"\n",
		"\r"
	], !1, !1, !1);
	function Ht(e) {
		return {
			type: "root",
			next: Yr(e)
		};
	}
	function Ut(e) {
		return e.map((e) => e[1]);
	}
	function Wt(e) {
		return {
			type: "dot",
			value: e
		};
	}
	function Gt(e) {
		return e;
	}
	function Kt(e) {
		return {
			type: "dotdot",
			value: e
		};
	}
	function qt() {
		return { type: "wildcard" };
	}
	function Jt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Yt() {
		return { type: "wildcard" };
	}
	function Xt(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Zt(e) {
		return e;
	}
	function Qt(e) {
		return e;
	}
	function $t(e, t) {
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
	function en(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function tn(e) {
		return {
			type: "filterExpression",
			value: e
		};
	}
	function nn(e, t) {
		return Zr(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "or",
			left: e,
			right: t[3]
		}));
	}
	function rn(e, t) {
		return Zr(e, t, (e, t) => ({
			type: "logicalExpression",
			operator: "and",
			left: e,
			right: t[3]
		}));
	}
	function an(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function on(e) {
		return {
			type: "notExpression",
			value: e
		};
	}
	function sn(e, t) {
		return t !== null || Xr(e);
	}
	function cn(e, t) {
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
	function ln(e, t) {
		return {
			operator: e,
			right: t
		};
	}
	function un(e) {
		return {
			operator: "reg",
			right: e
		};
	}
	function dn() {
		return { operator: "empty" };
	}
	function fn() {
		return "eq";
	}
	function pn() {
		return "ne";
	}
	function mn() {
		return "le";
	}
	function hn() {
		return "lt";
	}
	function O() {
		return "ge";
	}
	function gn() {
		return "gt";
	}
	function _n() {
		return "in";
	}
	function vn() {
		return "nin";
	}
	function yn() {
		return "subsetof";
	}
	function bn() {
		return "anyof";
	}
	function xn() {
		return "noneof";
	}
	function Sn() {
		return "sizeof";
	}
	function Cn() {
		return "size";
	}
	function wn(e) {
		return {
			type: "groupExpression",
			value: e
		};
	}
	function Tn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function En() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Dn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function On(e, t) {
		return {
			type: "functionCall",
			name: e,
			args: t || []
		};
	}
	function kn() {
		return "length";
	}
	function An() {
		return "count";
	}
	function jn() {
		return "match";
	}
	function Mn() {
		return "search";
	}
	function Nn() {
		return "value";
	}
	function Pn(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function Fn(e, t) {
		return t.length === 0 ? e : Zr(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "+" ? "plus" : "minus",
			left: e,
			right: t[3]
		}));
	}
	function In(e, t) {
		return t.length === 0 ? e : Zr(e, t, (e, t) => ({
			type: "operation",
			operator: t[1] === "*" ? "multi" : "div",
			left: e,
			right: t[3]
		}));
	}
	function Ln(e) {
		return {
			type: "groupOperation",
			value: e
		};
	}
	function Rn(e) {
		return {
			type: "root",
			next: Yr(e)
		};
	}
	function zn(e) {
		return {
			type: "current",
			next: Yr(e)
		};
	}
	function Bn(e, t, n) {
		return {
			type: "slices",
			start: e === null ? null : e[0],
			end: t === null ? null : t[0],
			step: n ? n[2] === null ? null : n[2] : null
		};
	}
	function Vn() {
		return { type: "wildcard" };
	}
	function Hn(e) {
		return {
			type: "numericLiteral",
			value: e
		};
	}
	function Un(e) {
		return {
			type: "stringLiteral",
			value: $(e)
		};
	}
	function Wn(e) {
		return {
			type: "identifier",
			value: e
		};
	}
	function Gn(e, t) {
		return {
			type: "value",
			subtype: "regex",
			value: e,
			opts: t || ""
		};
	}
	function Kn(e) {
		return {
			type: "value",
			subtype: "string",
			value: e
		};
	}
	function qn(e) {
		return {
			type: "value",
			subtype: "number",
			value: e
		};
	}
	function Jn() {
		return {
			type: "value",
			value: !0,
			subtype: "boolean"
		};
	}
	function Yn() {
		return {
			type: "value",
			value: !1,
			subtype: "boolean"
		};
	}
	function Xn() {
		return {
			type: "value",
			value: null,
			subtype: "null"
		};
	}
	function Zn(e) {
		return e;
	}
	function Qn(e) {
		for (let [t] of e || []) $(t);
		return {
			type: "value",
			subtype: "object",
			value: Object.fromEntries(e || [])
		};
	}
	function $n(e, t) {
		return [e, ...t.map((e) => e[3])];
	}
	function er(e, t) {
		return [e, t.value];
	}
	function tr(e) {
		return {
			type: "value",
			subtype: "array",
			value: e || []
		};
	}
	function nr(e, t) {
		return [e.value, ...t.map((e) => e[3].value)];
	}
	function rr(e) {
		return $(e);
	}
	function ir(e) {
		return $(e);
	}
	function ar() {
		return "true";
	}
	function or() {
		return "false";
	}
	function sr() {
		return "null";
	}
	function cr(e) {
		return $(e);
	}
	function lr() {
		return "true";
	}
	function ur() {
		return "false";
	}
	function dr() {
		return "null";
	}
	function fr(e) {
		return "/" + e.map((e) => Array.isArray(e) ? e.join("") : e).join("") + "/";
	}
	function pr(e) {
		return e.join("");
	}
	function mr(e, t) {
		let n = parseFloat(Ir());
		return !e && !t && (n < -9007199254740991 || n > 9007199254740991) && F("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), n;
	}
	function hr() {
		let e = parseInt(Ir(), 10);
		return (e < -9007199254740991 || e > 9007199254740991) && F("Integer out of I-JSON range [-(2^53)+1, (2^53)-1]"), e;
	}
	function gr(e) {
		return e.join("");
	}
	function _r(e) {
		return e.join("");
	}
	function vr(e) {
		return e;
	}
	function yr() {
		return "\"";
	}
	function br(e) {
		return e;
	}
	function xr(e) {
		return e;
	}
	function Sr() {
		return "'";
	}
	function Cr(e) {
		return e;
	}
	function wr() {
		return "\\";
	}
	function Tr() {
		return "/";
	}
	function Er() {
		return "\b";
	}
	function Dr() {
		return "\f";
	}
	function Or() {
		return "\n";
	}
	function kr() {
		return "\r";
	}
	function Ar() {
		return "	";
	}
	function jr(e, t) {
		return String.fromCharCode(parseInt(e, 16), parseInt(t, 16));
	}
	function Mr(e) {
		let t = parseInt(e, 16);
		return t >= 55296 && t <= 57343;
	}
	function Nr(e) {
		return String.fromCharCode(parseInt(e, 16));
	}
	let k = t.peg$currPos | 0, A = k, Pr = [{
		line: 1,
		column: 1
	}], j = k, M = t.peg$maxFailExpected || [], N = t.peg$silentFails | 0, Fr = /* @__PURE__ */ new Map(), P;
	if (t.startRule) {
		if (!(t.startRule in i)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
		a = i[t.startRule];
	}
	function Ir() {
		return e.substring(A, k);
	}
	function F(e, t) {
		throw t = t === void 0 ? Br(A, k) : t, V(e, t);
	}
	function Lr(t = k) {
		let n = e.codePointAt(t);
		return n === void 0 ? "" : String.fromCodePoint(n);
	}
	function I(e, t) {
		return {
			type: "literal",
			text: e,
			ignoreCase: t
		};
	}
	function L(e, t, n, r) {
		return {
			type: "class",
			parts: e,
			inverted: t,
			ignoreCase: n,
			unicode: r
		};
	}
	function Rr() {
		return { type: "any" };
	}
	function zr() {
		return { type: "end" };
	}
	function R(e) {
		return {
			type: "other",
			description: e
		};
	}
	function z(t) {
		let n = Pr[t], r;
		if (n) return n;
		if (t >= Pr.length) r = Pr.length - 1;
		else for (r = t; !Pr[--r];);
		for (n = Pr[r], n = {
			line: n.line,
			column: n.column
		}; r < t;) e.charCodeAt(r) === 10 ? (n.line++, n.column = 1) : n.column++, r++;
		return Pr[t] = n, n;
	}
	function Br(e, t, n) {
		let i = z(e), a = z(t), o = {
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
	function B(e) {
		k < j || (k > j && (j = k, M = []), M.push(e));
	}
	function V(e, t) {
		return new Qr(e, null, null, t);
	}
	function Vr(e, t, n) {
		return new Qr(Qr.buildMessage(e, t), e, t, n);
	}
	function Hr() {
		let e, t, r, i;
		return e = k, t = wi(), t === n ? (k = e, e = n) : (r = H(), i = _a(), i === n ? (k = e, e = n) : (A = e, e = Ht(r))), e;
	}
	function H() {
		let e, t, r, i, a;
		for (e = k, t = [], r = k, i = Q(), a = Ur(), a === n ? (k = r, r = n) : (i = [i, a], r = i); r !== n;) t.push(r), r = k, i = Q(), a = Ur(), a === n ? (k = r, r = n) : (i = [i, a], r = i);
		return A = e, t = Ut(t), e = t, e;
	}
	function Ur() {
		let e;
		return e = Wr(), e === n && (e = U()), e;
	}
	function U() {
		let e, t, r;
		return e = k, t = Di(), t === n ? (k = e, e = n) : (r = W(), r === n ? (k = e, e = n) : (A = e, e = Wt(r))), e === n && (e = k, t = Kr(), t !== n && (A = e, t = Gt(t)), e = t), e;
	}
	function Wr() {
		let e, t, r;
		return e = k, t = Ei(), t === n ? (k = e, e = n) : (r = Gr(), r === n ? (k = e, e = n) : (A = e, e = Kt(r))), e;
	}
	function W() {
		let e, t;
		return e = k, t = Oi(), t !== n && (A = e, t = qt()), e = t, e === n && (e = k, t = q(), t !== n && (A = e, t = Jt(t)), e = t), e;
	}
	function Gr() {
		let e, t;
		return e = k, t = Oi(), t !== n && (A = e, t = Yt()), e = t, e === n && (e = k, t = q(), t !== n && (A = e, t = Xt(t)), e = t, e === n && (e = k, t = Kr(), t !== n && (A = e, t = Zt(t)), e = t)), e;
	}
	function Kr() {
		let e, t, r, i;
		return e = k, t = Qi(), t === n ? (k = e, e = n) : (Q(), r = qr(), r === n ? (k = e, e = n) : (Q(), i = $i(), i === n ? (k = e, e = n) : (A = e, e = Qt(r)))), e;
	}
	function qr() {
		let e, t, r, i, a, o, s, c;
		if (e = k, t = pi(), t !== n) {
			for (r = [], i = k, a = Q(), o = J(), o === n ? (k = i, i = n) : (s = Q(), c = pi(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = k, a = Q(), o = J(), o === n ? (k = i, i = n) : (s = Q(), c = pi(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			A = e, e = $t(t, r);
		} else k = e, e = n;
		return e;
	}
	function G() {
		let t, r, i, a, o, s, c, l, u;
		return t = k, r = na(), r === n ? (k = t, t = n) : (Q(), i = Y(), i === n ? (k = t, t = n) : (Q(), a = Jr(), a === n ? (k = t, t = n) : (Q(), o = ta(), o === n ? (k = t, t = n) : (s = k, N++, c = k, l = Q(), u = e.charAt(k), re.test(u) ? k++ : (u = n, N === 0 && B(Ce)), u === n ? (k = c, c = n) : (l = [l, u], c = l), N--, c === n ? s = n : (k = s, s = void 0), s === n ? (k = t, t = n) : (A = t, t = en(a)))))), t === n && (t = k, r = na(), r === n ? (k = t, t = n) : (Q(), i = Jr(), i === n ? (k = t, t = n) : (A = t, t = tn(i)))), t;
	}
	function Jr() {
		let e, t, r, i, a, o, s, c, l = k * 91 + 10, u = Fr.get(l);
		if (u) return k = u.nextPos, u.result;
		if (e = k, t = K(), t !== n) {
			for (r = [], i = k, a = Q(), o = Ai(), o === n ? (k = i, i = n) : (s = Q(), c = K(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = k, a = Q(), o = Ai(), o === n ? (k = i, i = n) : (s = Q(), c = K(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			A = e, e = nn(t, r);
		} else k = e, e = n;
		return Fr.set(l, {
			nextPos: k,
			result: e
		}), e;
	}
	function K() {
		let e, t, r, i, a, o, s, c;
		if (e = k, t = $r(), t !== n) {
			for (r = [], i = k, a = Q(), o = ki(), o === n ? (k = i, i = n) : (s = Q(), c = $r(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = k, a = Q(), o = ki(), o === n ? (k = i, i = n) : (s = Q(), c = $r(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			A = e, e = rn(t, r);
		} else k = e, e = n;
		return e;
	}
	function $r() {
		let e, t, r, i, a;
		return e = k, t = ji(), t === n ? (k = e, e = n) : (Q(), r = Y(), r === n ? (k = e, e = n) : (Q(), i = Jr(), i === n ? (k = e, e = n) : (Q(), a = ta(), a === n ? (k = e, e = n) : (A = e, e = an(i))))), e === n && (e = k, t = ji(), t === n ? (k = e, e = n) : (Q(), r = ri(), r === n ? (k = e, e = n) : (A = e, e = on(r))), e === n && (e = ei())), e;
	}
	function ei() {
		let e, t, r, i, a;
		return e = k, t = ci(), t === n ? (k = e, e = n) : (r = k, i = Q(), a = ti(), a === n ? (k = r, r = n) : (i = [i, a], r = i), r === n && (r = null), A = k, i = sn(t, r), i = i ? void 0 : n, i === n ? (k = e, e = n) : (A = e, e = cn(t, r))), e === n && (e = ri()), e;
	}
	function ti() {
		let e, t, r;
		return e = k, t = ni(), t === n ? (k = e, e = n) : (Q(), r = ci(), r === n ? (k = e, e = n) : (A = e, e = ln(t, r))), e === n && (e = k, t = Ri(), t === n ? (k = e, e = n) : (Q(), r = mi(), r === n ? (k = e, e = n) : (A = e, e = un(r))), e === n && (e = k, t = Ki(), t !== n && (A = e, t = dn()), e = t)), e;
	}
	function ni() {
		let e, t;
		return e = k, t = Mi(), t !== n && (A = e, t = fn()), e = t, e === n && (e = k, t = Ni(), t !== n && (A = e, t = pn()), e = t, e === n && (e = k, t = Ii(), t !== n && (A = e, t = mn()), e = t, e === n && (e = k, t = Li(), t !== n && (A = e, t = hn()), e = t, e === n && (e = k, t = Pi(), t !== n && (A = e, t = O()), e = t, e === n && (e = k, t = Fi(), t !== n && (A = e, t = gn()), e = t, e === n && (e = k, t = zi(), t !== n && (A = e, t = _n()), e = t, e === n && (e = k, t = Bi(), t !== n && (A = e, t = vn()), e = t, e === n && (e = k, t = Vi(), t !== n && (A = e, t = yn()), e = t, e === n && (e = k, t = Hi(), t !== n && (A = e, t = bn()), e = t, e === n && (e = k, t = Ui(), t !== n && (A = e, t = xn()), e = t, e === n && (e = k, t = Wi(), t !== n && (A = e, t = Sn()), e = t, e === n && (e = k, t = Gi(), t !== n && (A = e, t = Cn()), e = t)))))))))))), e;
	}
	function ri() {
		let e, t, r, i;
		return e = k, t = Y(), t === n ? (k = e, e = n) : (Q(), r = Jr(), r === n ? (k = e, e = n) : (Q(), i = ta(), i === n ? (k = e, e = n) : (A = e, e = wn(r)))), e === n && (e = ii(), e === n && (e = di(), e === n && (e = k, t = qi(), t !== n && (A = e, t = Tn()), e = t, e === n && (e = k, t = Ji(), t !== n && (A = e, t = En()), e = t, e === n && (e = k, t = Yi(), t !== n && (A = e, t = Dn()), e = t))))), e;
	}
	function ii() {
		let e, t, r, i, a;
		return e = k, t = ai(), t === n ? (k = e, e = n) : (r = Y(), r === n ? (k = e, e = n) : (Q(), i = oi(), i === n && (i = null), Q(), a = ta(), a === n ? (k = e, e = n) : (A = e, e = On(t, i)))), e;
	}
	function ai() {
		let t, r;
		return t = k, e.substr(k, 6) === o ? (r = o, k += 6) : (r = n, N === 0 && B(we)), r !== n && (A = t, r = kn()), t = r, t === n && (t = k, e.substr(k, 5) === s ? (r = s, k += 5) : (r = n, N === 0 && B(Te)), r !== n && (A = t, r = An()), t = r, t === n && (t = k, e.substr(k, 5) === c ? (r = c, k += 5) : (r = n, N === 0 && B(Ee)), r !== n && (A = t, r = jn()), t = r, t === n && (t = k, e.substr(k, 6) === l ? (r = l, k += 6) : (r = n, N === 0 && B(De)), r !== n && (A = t, r = Mn()), t = r, t === n && (t = k, e.substr(k, 5) === u ? (r = u, k += 5) : (r = n, N === 0 && B(Oe)), r !== n && (A = t, r = Nn()), t = r)))), t;
	}
	function oi() {
		let e, t, r, i, a, o, s, c;
		if (e = k, t = si(), t !== n) {
			for (r = [], i = k, a = Q(), o = J(), o === n ? (k = i, i = n) : (s = Q(), c = si(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = k, a = Q(), o = J(), o === n ? (k = i, i = n) : (s = Q(), c = si(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			A = e, e = Pn(t, r);
		} else k = e, e = n;
		return e;
	}
	function si() {
		let e;
		return e = ci(), e === n && (e = gi()), e;
	}
	function ci() {
		let t, r, i, a, o, s, c, l, u = k * 91 + 21, d = Fr.get(u);
		if (d) return k = d.nextPos, d.result;
		if (t = k, r = li(), r !== n) {
			for (i = [], a = k, o = Q(), s = e.charAt(k), _.test(s) ? k++ : (s = n, N === 0 && B(ke)), s === n ? (k = a, a = n) : (c = Q(), l = li(), l === n ? (k = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = k, o = Q(), s = e.charAt(k), _.test(s) ? k++ : (s = n, N === 0 && B(ke)), s === n ? (k = a, a = n) : (c = Q(), l = li(), l === n ? (k = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			A = t, t = Fn(r, i);
		} else k = t, t = n;
		return Fr.set(u, {
			nextPos: k,
			result: t
		}), t;
	}
	function li() {
		let t, r, i, a, o, s, c, l;
		if (t = k, r = ui(), r !== n) {
			for (i = [], a = k, o = Q(), s = e.charAt(k), v.test(s) ? k++ : (s = n, N === 0 && B(Ae)), s === n ? (k = a, a = n) : (c = Q(), l = ui(), l === n ? (k = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o)); a !== n;) i.push(a), a = k, o = Q(), s = e.charAt(k), v.test(s) ? k++ : (s = n, N === 0 && B(Ae)), s === n ? (k = a, a = n) : (c = Q(), l = ui(), l === n ? (k = a, a = n) : (o = [
				o,
				s,
				c,
				l
			], a = o));
			A = t, t = In(r, i);
		} else k = t, t = n;
		return t;
	}
	function ui() {
		let e, t, r, i;
		return e = k, t = Y(), t === n ? (k = e, e = n) : (Q(), r = ci(), r === n ? (k = e, e = n) : (Q(), i = ta(), i === n ? (k = e, e = n) : (A = e, e = Ln(r)))), e === n && (e = ii(), e === n && (e = hi(), e === n && (e = di()))), e;
	}
	function di() {
		let e, t, r;
		return e = k, t = wi(), t === n ? (k = e, e = n) : (r = H(), r === n ? (k = e, e = n) : (A = e, e = Rn(r))), e === n && (e = k, t = Ti(), t === n ? (k = e, e = n) : (r = H(), r === n ? (k = e, e = n) : (A = e, e = zn(r)))), e;
	}
	function fi() {
		let e, t, r, i, a, o, s, c, l;
		return e = k, t = k, r = ua(), r === n ? (k = t, t = n) : (i = Q(), r = [r, i], t = r), t === n && (t = null), r = ea(), r === n ? (k = e, e = n) : (i = Q(), a = k, o = ua(), o === n ? (k = a, a = n) : (s = Q(), o = [o, s], a = o), a === n && (a = null), o = k, s = ea(), s === n ? (k = o, o = n) : (c = Q(), l = ua(), l === n && (l = null), s = [
			s,
			c,
			l
		], o = s), o === n && (o = null), A = e, e = Bn(t, a, o)), e;
	}
	function pi() {
		let e, t;
		return e = G(), e === n && (e = fi(), e === n && (e = k, t = Oi(), t !== n && (A = e, t = Vn()), e = t, e === n && (e = k, t = ua(), t !== n && (A = e, t = Hn(t)), e = t, e === n && (e = k, t = fa(), t !== n && (A = e, t = Un(t)), e = t, e === n && (e = k, t = Si(), t !== n && (A = e, t = Wn(t)), e = t))))), e;
	}
	function mi() {
		let e, t, r;
		return e = k, t = ra(), t === n ? (k = e, e = n) : (r = ia(), A = e, e = Gn(t, r)), e;
	}
	function hi() {
		let e, t;
		return e = k, t = gi(), t !== n && (A = e, t = Kn(t)), e = t, e === n && (e = k, t = ca(), t !== n && (A = e, t = qn(t)), e = t, e === n && (e = _i(), e === n && (e = bi(), e === n && (e = k, t = qi(), t !== n && (A = e, t = Jn()), e = t, e === n && (e = k, t = Ji(), t !== n && (A = e, t = Yn()), e = t, e === n && (e = k, t = Yi(), t !== n && (A = e, t = Xn()), e = t)))))), e;
	}
	function gi() {
		let e, t;
		return N++, e = k, t = fa(), t !== n && (A = e, t = Zn(t)), e = t, N--, e === n && (t = n, N === 0 && B(je)), e;
	}
	function _i() {
		let e, t, r, i;
		return e = k, t = Xi(), t === n ? (k = e, e = n) : (Q(), r = vi(), r === n && (r = null), Q(), i = Zi(), i === n ? (k = e, e = n) : (A = e, e = Qn(r))), e;
	}
	function vi() {
		let e, t, r, i, a, o, s, c;
		if (e = k, t = yi(), t !== n) {
			for (r = [], i = k, a = Q(), o = J(), o === n ? (k = i, i = n) : (s = Q(), c = yi(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = k, a = Q(), o = J(), o === n ? (k = i, i = n) : (s = Q(), c = yi(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			A = e, e = $n(t, r);
		} else k = e, e = n;
		return e;
	}
	function yi() {
		let e, t, r, i;
		return e = k, t = fa(), t === n ? (k = e, e = n) : (Q(), r = ea(), r === n ? (k = e, e = n) : (Q(), i = hi(), i === n ? (k = e, e = n) : (A = e, e = er(t, i)))), e;
	}
	function bi() {
		let e, t, r, i;
		return e = k, t = Qi(), t === n ? (k = e, e = n) : (Q(), r = xi(), r === n && (r = null), Q(), i = $i(), i === n ? (k = e, e = n) : (A = e, e = tr(r))), e;
	}
	function xi() {
		let e, t, r, i, a, o, s, c;
		if (e = k, t = hi(), t !== n) {
			for (r = [], i = k, a = Q(), o = J(), o === n ? (k = i, i = n) : (s = Q(), c = hi(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a)); i !== n;) r.push(i), i = k, a = Q(), o = J(), o === n ? (k = i, i = n) : (s = Q(), c = hi(), c === n ? (k = i, i = n) : (a = [
				a,
				o,
				s,
				c
			], i = a));
			A = e, e = nr(t, r);
		} else k = e, e = n;
		return e;
	}
	function Si() {
		let t, r, i, a, o, s;
		if (t = k, r = k, i = k, a = e.charAt(k), ie.test(a) ? k++ : (a = n, N === 0 && B(Me)), a !== n) {
			for (o = [], s = Ci(); s !== n;) o.push(s), s = Ci();
			a = [a, o], i = a;
		} else k = i, i = n;
		if (r = i === n ? i : e.substring(r, k), r !== n && (A = t, r = rr(r)), t = r, t === n) {
			if (t = k, r = k, i = [], a = e.charAt(k), ae.test(a) ? k++ : (a = n, N === 0 && B(Ne)), a !== n) for (; a !== n;) i.push(a), a = e.charAt(k), ae.test(a) ? k++ : (a = n, N === 0 && B(Ne));
			else i = n;
			r = i === n ? i : e.substring(r, k), r !== n && (A = t, r = ir(r)), t = r, t === n && (t = k, r = qi(), r !== n && (A = t, r = ar()), t = r, t === n && (t = k, r = Ji(), r !== n && (A = t, r = or()), t = r, t === n && (t = k, r = Yi(), r !== n && (A = t, r = sr()), t = r)));
		}
		return t;
	}
	function Ci() {
		let t, r, i, a;
		return t = e.charAt(k), oe.test(t) ? k++ : (t = n, N === 0 && B(Pe)), t === n && (t = k, e.charCodeAt(k) === 45 ? (r = "-", k++) : (r = n, N === 0 && B(Fe)), r === n ? (k = t, t = n) : (i = k, N++, a = e.charAt(k), se.test(a) ? k++ : (a = n, N === 0 && B(Ie)), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r))), t;
	}
	function q() {
		let e, t;
		return e = k, t = aa(), t !== n && (A = e, t = cr(t)), e = t, e === n && (e = k, t = qi(), t !== n && (A = e, t = lr()), e = t, e === n && (e = k, t = Ji(), t !== n && (A = e, t = ur()), e = t, e === n && (e = k, t = Yi(), t !== n && (A = e, t = dr()), e = t))), e;
	}
	function wi() {
		let t;
		return e.charCodeAt(k) === 36 ? (t = "$", k++) : (t = n, N === 0 && B(Le)), t;
	}
	function Ti() {
		let t;
		return e.charCodeAt(k) === 64 ? (t = "@", k++) : (t = n, N === 0 && B(Re)), t;
	}
	function Ei() {
		let t;
		return e.substr(k, 2) === ".." ? (t = "..", k += 2) : (t = n, N === 0 && B(ze)), t;
	}
	function Di() {
		let t;
		return e.charCodeAt(k) === 46 ? (t = ".", k++) : (t = n, N === 0 && B(Be)), t;
	}
	function Oi() {
		let t;
		return e.charCodeAt(k) === 42 ? (t = "*", k++) : (t = n, N === 0 && B(Ve)), t;
	}
	function ki() {
		let t;
		return e.substr(k, 2) === "&&" ? (t = "&&", k += 2) : (t = n, N === 0 && B(He)), t;
	}
	function Ai() {
		let t;
		return e.substr(k, 2) === "||" ? (t = "||", k += 2) : (t = n, N === 0 && B(Ue)), t;
	}
	function ji() {
		let t;
		return e.charCodeAt(k) === 33 ? (t = "!", k++) : (t = n, N === 0 && B(We)), t;
	}
	function Mi() {
		let t;
		return e.substr(k, 2) === "==" ? (t = "==", k += 2) : (t = n, N === 0 && B(Ge)), t;
	}
	function Ni() {
		let t;
		return e.substr(k, 2) === "!=" ? (t = "!=", k += 2) : (t = n, N === 0 && B(Ke)), t;
	}
	function Pi() {
		let t;
		return e.substr(k, 2) === ">=" ? (t = ">=", k += 2) : (t = n, N === 0 && B(qe)), t;
	}
	function Fi() {
		let t;
		return e.charCodeAt(k) === 62 ? (t = ">", k++) : (t = n, N === 0 && B(Je)), t;
	}
	function Ii() {
		let t;
		return e.substr(k, 2) === "<=" ? (t = "<=", k += 2) : (t = n, N === 0 && B(Ye)), t;
	}
	function Li() {
		let t;
		return e.charCodeAt(k) === 60 ? (t = "<", k++) : (t = n, N === 0 && B(Xe)), t;
	}
	function Ri() {
		let t;
		return e.substr(k, 2) === "=~" ? (t = "=~", k += 2) : (t = n, N === 0 && B(Ze)), t;
	}
	function zi() {
		let t, r, i, a;
		return t = k, e.substr(k, 2) === "in" ? (r = "in", k += 2) : (r = n, N === 0 && B(Qe)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Bi() {
		let t, r, i, a;
		return t = k, e.substr(k, 3) === "nin" ? (r = "nin", k += 3) : (r = n, N === 0 && B($e)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Vi() {
		let t, r, i, a;
		return t = k, e.substr(k, 8) === d ? (r = d, k += 8) : (r = n, N === 0 && B(et)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Hi() {
		let t, r, i, a;
		return t = k, e.substr(k, 5) === f ? (r = f, k += 5) : (r = n, N === 0 && B(tt)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ui() {
		let t, r, i, a;
		return t = k, e.substr(k, 6) === p ? (r = p, k += 6) : (r = n, N === 0 && B(nt)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Wi() {
		let t, r, i, a;
		return t = k, e.substr(k, 6) === m ? (r = m, k += 6) : (r = n, N === 0 && B(rt)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Gi() {
		let t, r, i, a;
		return t = k, e.substr(k, 4) === ee ? (r = ee, k += 4) : (r = n, N === 0 && B(it)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ki() {
		let t, r, i, a;
		return t = k, e.substr(k, 5) === h ? (r = h, k += 5) : (r = n, N === 0 && B(at)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function qi() {
		let t, r, i, a;
		return t = k, e.substr(k, 4) === te ? (r = te, k += 4) : (r = n, N === 0 && B(ot)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Ji() {
		let t, r, i, a;
		return t = k, e.substr(k, 5) === ne ? (r = ne, k += 5) : (r = n, N === 0 && B(st)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Yi() {
		let t, r, i, a;
		return t = k, e.substr(k, 4) === g ? (r = g, k += 4) : (r = n, N === 0 && B(ct)), r === n ? (k = t, t = n) : (i = k, N++, a = Z(), N--, a === n ? i = void 0 : (k = i, i = n), i === n ? (k = t, t = n) : (r = [r, i], t = r)), t;
	}
	function Xi() {
		let t;
		return e.charCodeAt(k) === 123 ? (t = "{", k++) : (t = n, N === 0 && B(lt)), t;
	}
	function Zi() {
		let t;
		return e.charCodeAt(k) === 125 ? (t = "}", k++) : (t = n, N === 0 && B(ut)), t;
	}
	function Qi() {
		let t;
		return e.charCodeAt(k) === 91 ? (t = "[", k++) : (t = n, N === 0 && B(dt)), t;
	}
	function $i() {
		let t;
		return e.charCodeAt(k) === 93 ? (t = "]", k++) : (t = n, N === 0 && B(ft)), t;
	}
	function ea() {
		let t;
		return e.charCodeAt(k) === 58 ? (t = ":", k++) : (t = n, N === 0 && B(pt)), t;
	}
	function J() {
		let t;
		return e.charCodeAt(k) === 44 ? (t = ",", k++) : (t = n, N === 0 && B(mt)), t;
	}
	function Y() {
		let t;
		return e.charCodeAt(k) === 40 ? (t = "(", k++) : (t = n, N === 0 && B(ht)), t;
	}
	function ta() {
		let t;
		return e.charCodeAt(k) === 41 ? (t = ")", k++) : (t = n, N === 0 && B(gt)), t;
	}
	function na() {
		let t;
		return e.charCodeAt(k) === 63 ? (t = "?", k++) : (t = n, N === 0 && B(_t)), t;
	}
	function ra() {
		let t, r, i, a, o, s;
		if (N++, t = k, e.charCodeAt(k) === 47 ? (r = "/", k++) : (r = n, N === 0 && B(yt)), r !== n) {
			for (i = [], a = e.charAt(k), ce.test(a) ? k++ : (a = n, N === 0 && B(bt)), a === n && (a = k, e.charCodeAt(k) === 92 ? (o = "\\", k++) : (o = n, N === 0 && B(b)), o === n ? (k = a, a = n) : (e.length > k ? (s = e.charAt(k), k++) : (s = n, N === 0 && B(xt)), s === n ? (k = a, a = n) : (o = [o, s], a = o))); a !== n;) i.push(a), a = e.charAt(k), ce.test(a) ? k++ : (a = n, N === 0 && B(bt)), a === n && (a = k, e.charCodeAt(k) === 92 ? (o = "\\", k++) : (o = n, N === 0 && B(b)), o === n ? (k = a, a = n) : (e.length > k ? (s = e.charAt(k), k++) : (s = n, N === 0 && B(xt)), s === n ? (k = a, a = n) : (o = [o, s], a = o)));
			e.charCodeAt(k) === 47 ? (a = "/", k++) : (a = n, N === 0 && B(yt)), a === n ? (k = t, t = n) : (A = t, t = fr(i));
		} else k = t, t = n;
		return N--, t === n && (r = n, N === 0 && B(vt)), t;
	}
	function ia() {
		let t, r, i;
		for (t = k, r = [], i = e.charAt(k), le.test(i) ? k++ : (i = n, N === 0 && B(St)); i !== n;) r.push(i), i = e.charAt(k), le.test(i) ? k++ : (i = n, N === 0 && B(St));
		return A = t, r = pr(r), t = r, t;
	}
	function aa() {
		let t, r, i, a, o;
		if (t = k, r = k, i = oa(), i !== n) {
			for (a = [], o = sa(); o !== n;) a.push(o), o = sa();
			i = [i, a], r = i;
		} else k = r, r = n;
		return t = r === n ? r : e.substring(t, k), t;
	}
	function oa() {
		let t, r, i;
		return t = e.charAt(k), ue.test(t) ? k++ : (t = n, N === 0 && B(Ct)), t === n && (t = k, r = e.charAt(k), de.test(r) ? k++ : (r = n, N === 0 && B(wt)), r === n ? (k = t, t = n) : (i = e.charAt(k), fe.test(i) ? k++ : (i = n, N === 0 && B(Tt)), i === n ? (k = t, t = n) : (r = [r, i], t = r))), t;
	}
	function sa() {
		let t;
		return t = oa(), t === n && (t = e.charAt(k), y.test(t) ? k++ : (t = n, N === 0 && B(x))), t;
	}
	function ca() {
		let t, r, i, a, o, s, c;
		if (N++, t = k, e.charCodeAt(k) === 45 ? (r = "-", k++) : (r = n, N === 0 && B(Fe)), r === n && (r = null), i = la(), i !== n) {
			if (a = k, e.charCodeAt(k) === 46 ? (o = ".", k++) : (o = n, N === 0 && B(Be)), o !== n) {
				if (s = [], c = e.charAt(k), y.test(c) ? k++ : (c = n, N === 0 && B(x)), c !== n) for (; c !== n;) s.push(c), c = e.charAt(k), y.test(c) ? k++ : (c = n, N === 0 && B(x));
				else s = n;
				s === n ? (k = a, a = n) : (o = [o, s], a = o);
			} else k = a, a = n;
			a === n && (a = null), o = da(), o === n && (o = null), A = t, t = mr(a, o);
		} else k = t, t = n;
		return N--, t === n && (r = n, N === 0 && B(Et)), t;
	}
	function la() {
		let t, r, i, a;
		if (e.charCodeAt(k) === 48 ? (t = "0", k++) : (t = n, N === 0 && B(Dt)), t === n) {
			if (t = k, r = e.charAt(k), pe.test(r) ? k++ : (r = n, N === 0 && B(Ot)), r !== n) {
				for (i = [], a = e.charAt(k), y.test(a) ? k++ : (a = n, N === 0 && B(x)); a !== n;) i.push(a), a = e.charAt(k), y.test(a) ? k++ : (a = n, N === 0 && B(x));
				r = [r, i], t = r;
			} else k = t, t = n;
		}
		return t;
	}
	function ua() {
		let t, r, i, a, o, s;
		if (N++, t = k, e.charCodeAt(k) === 48 ? (r = "0", k++) : (r = n, N === 0 && B(Dt)), r === n) {
			if (r = k, e.charCodeAt(k) === 45 ? (i = "-", k++) : (i = n, N === 0 && B(Fe)), i === n && (i = null), a = e.charAt(k), pe.test(a) ? k++ : (a = n, N === 0 && B(Ot)), a !== n) {
				for (o = [], s = e.charAt(k), y.test(s) ? k++ : (s = n, N === 0 && B(x)); s !== n;) o.push(s), s = e.charAt(k), y.test(s) ? k++ : (s = n, N === 0 && B(x));
				i = [
					i,
					a,
					o
				], r = i;
			} else k = r, r = n;
		}
		return r !== n && (A = t, r = hr()), t = r, N--, t === n && (r = n, N === 0 && B(S)), t;
	}
	function da() {
		let t, r, i, a, o;
		if (t = k, r = e.charAt(k), me.test(r) ? k++ : (r = n, N === 0 && B(kt)), r !== n) {
			if (i = e.charAt(k), _.test(i) ? k++ : (i = n, N === 0 && B(ke)), i === n && (i = null), a = [], o = e.charAt(k), y.test(o) ? k++ : (o = n, N === 0 && B(x)), o !== n) for (; o !== n;) a.push(o), o = e.charAt(k), y.test(o) ? k++ : (o = n, N === 0 && B(x));
			else a = n;
			a === n ? (k = t, t = n) : (r = [
				r,
				i,
				a
			], t = r);
		} else k = t, t = n;
		return t;
	}
	function fa() {
		let t, r, i, a;
		if (N++, t = k, e.charCodeAt(k) === 34 ? (r = "\"", k++) : (r = n, N === 0 && B(At)), r !== n) {
			for (i = [], a = pa(); a !== n;) i.push(a), a = pa();
			e.charCodeAt(k) === 34 ? (a = "\"", k++) : (a = n, N === 0 && B(At)), a === n ? (k = t, t = n) : (A = t, t = gr(i));
		} else k = t, t = n;
		if (t === n) {
			if (t = k, e.charCodeAt(k) === 39 ? (r = "'", k++) : (r = n, N === 0 && B(C)), r !== n) {
				for (i = [], a = ma(); a !== n;) i.push(a), a = ma();
				e.charCodeAt(k) === 39 ? (a = "'", k++) : (a = n, N === 0 && B(C)), a === n ? (k = t, t = n) : (A = t, t = _r(i));
			} else k = t, t = n;
		}
		return N--, t === n && (r = n, N === 0 && B(je)), t;
	}
	function pa() {
		let t, r, i;
		return t = k, r = k, N++, i = e.charAt(k), he.test(i) ? k++ : (i = n, N === 0 && B(jt)), N--, i === n ? r = void 0 : (k = r, r = n), r === n ? (k = t, t = n) : (i = ha(), i === n ? (k = t, t = n) : (A = t, t = vr(i))), t === n && (t = k, e.charCodeAt(k) === 92 ? (r = "\\", k++) : (r = n, N === 0 && B(b)), r === n ? (k = t, t = n) : (e.charCodeAt(k) === 34 ? (i = "\"", k++) : (i = n, N === 0 && B(At)), i === n ? (k = t, t = n) : (A = t, t = yr())), t === n && (t = k, e.charCodeAt(k) === 92 ? (r = "\\", k++) : (r = n, N === 0 && B(b)), r === n ? (k = t, t = n) : (i = ga(), i === n ? (k = t, t = n) : (A = t, t = br(i))))), t;
	}
	function ma() {
		let t, r, i;
		return t = k, r = k, N++, i = e.charAt(k), ge.test(i) ? k++ : (i = n, N === 0 && B(Mt)), N--, i === n ? r = void 0 : (k = r, r = n), r === n ? (k = t, t = n) : (i = ha(), i === n ? (k = t, t = n) : (A = t, t = xr(i))), t === n && (t = k, e.charCodeAt(k) === 92 ? (r = "\\", k++) : (r = n, N === 0 && B(b)), r === n ? (k = t, t = n) : (e.charCodeAt(k) === 39 ? (i = "'", k++) : (i = n, N === 0 && B(C)), i === n ? (k = t, t = n) : (A = t, t = Sr())), t === n && (t = k, e.charCodeAt(k) === 92 ? (r = "\\", k++) : (r = n, N === 0 && B(b)), r === n ? (k = t, t = n) : (i = ga(), i === n ? (k = t, t = n) : (A = t, t = Cr(i))))), t;
	}
	function ha() {
		let t, r, i, a;
		return t = e.charAt(k), _e.test(t) ? k++ : (t = n, N === 0 && B(Nt)), t === n && (t = k, r = k, i = e.charAt(k), de.test(i) ? k++ : (i = n, N === 0 && B(wt)), i === n ? (k = r, r = n) : (a = e.charAt(k), fe.test(a) ? k++ : (a = n, N === 0 && B(Tt)), a === n ? (k = r, r = n) : (i = [i, a], r = i)), t = r === n ? r : e.substring(t, k)), t;
	}
	function ga() {
		let t, r, i, a, o, s, c, l, u, d;
		return t = k, e.charCodeAt(k) === 92 ? (r = "\\", k++) : (r = n, N === 0 && B(b)), r !== n && (A = t, r = wr()), t = r, t === n && (t = k, e.charCodeAt(k) === 47 ? (r = "/", k++) : (r = n, N === 0 && B(yt)), r !== n && (A = t, r = Tr()), t = r, t === n && (t = k, e.charCodeAt(k) === 98 ? (r = "b", k++) : (r = n, N === 0 && B(Pt)), r !== n && (A = t, r = Er()), t = r, t === n && (t = k, e.charCodeAt(k) === 102 ? (r = "f", k++) : (r = n, N === 0 && B(w)), r !== n && (A = t, r = Dr()), t = r, t === n && (t = k, e.charCodeAt(k) === 110 ? (r = "n", k++) : (r = n, N === 0 && B(Ft)), r !== n && (A = t, r = Or()), t = r, t === n && (t = k, e.charCodeAt(k) === 114 ? (r = "r", k++) : (r = n, N === 0 && B(T)), r !== n && (A = t, r = kr()), t = r, t === n && (t = k, e.charCodeAt(k) === 116 ? (r = "t", k++) : (r = n, N === 0 && B(It)), r !== n && (A = t, r = Ar()), t = r, t === n && (t = k, e.charCodeAt(k) === 117 ? (r = "u", k++) : (r = n, N === 0 && B(E)), r === n ? (k = t, t = n) : (i = k, a = k, o = e.charAt(k), ve.test(o) ? k++ : (o = n, N === 0 && B(Lt)), o === n ? (k = a, a = n) : (s = e.charAt(k), ye.test(s) ? k++ : (s = n, N === 0 && B(D)), s === n ? (k = a, a = n) : (c = X(), c === n ? (k = a, a = n) : (l = X(), l === n ? (k = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, k), i === n ? (k = t, t = n) : (e.substr(k, 2) === "\\u" ? (a = "\\u", k += 2) : (a = n, N === 0 && B(Rt)), a === n ? (k = t, t = n) : (o = k, s = k, c = e.charAt(k), ve.test(c) ? k++ : (c = n, N === 0 && B(Lt)), c === n ? (k = s, s = n) : (l = e.charAt(k), be.test(l) ? k++ : (l = n, N === 0 && B(zt)), l === n ? (k = s, s = n) : (u = X(), u === n ? (k = s, s = n) : (d = X(), d === n ? (k = s, s = n) : (c = [
			c,
			l,
			u,
			d
		], s = c)))), o = s === n ? s : e.substring(o, k), o === n ? (k = t, t = n) : (A = t, t = jr(i, o))))), t === n && (t = k, e.charCodeAt(k) === 117 ? (r = "u", k++) : (r = n, N === 0 && B(E)), r === n ? (k = t, t = n) : (i = k, a = k, o = X(), o === n ? (k = a, a = n) : (s = X(), s === n ? (k = a, a = n) : (c = X(), c === n ? (k = a, a = n) : (l = X(), l === n ? (k = a, a = n) : (o = [
			o,
			s,
			c,
			l
		], a = o)))), i = a === n ? a : e.substring(i, k), i === n ? (k = t, t = n) : (A = k, a = Mr(i), a = a ? n : void 0, a === n ? (k = t, t = n) : (A = t, t = Nr(i)))))))))))), t;
	}
	function X() {
		let t;
		return t = e.charAt(k), xe.test(t) ? k++ : (t = n, N === 0 && B(Bt)), t;
	}
	function Z() {
		let t;
		return t = e.charAt(k), oe.test(t) ? k++ : (t = n, N === 0 && B(Pe)), t;
	}
	function Q() {
		let t, r;
		for (N++, t = [], r = e.charAt(k), Se.test(r) ? k++ : (r = n, N === 0 && B(Vt)); r !== n;) t.push(r), r = e.charAt(k), Se.test(r) ? k++ : (r = n, N === 0 && B(Vt));
		return N--, t;
	}
	function _a() {
		let t, r;
		return t = k, N++, e.length > k ? (r = e.charAt(k), k++) : (r = n, N === 0 && B(xt)), N--, r === n ? t = void 0 : (k = t, t = n), t;
	}
	function $(e) {
		return e.length > 1e3 && F("Member name too long (maximum 1000 characters)"), e;
	}
	P = a();
	let va = P !== n && k === e.length;
	function ya() {
		throw P !== n && k < e.length && B(zr()), Vr(M, j < e.length ? Lr(j) : null, j < e.length ? Br(j, j + 1) : Br(j, j));
	}
	if (t.peg$library) return {
		peg$result: P,
		peg$currPos: k,
		peg$FAILED: n,
		peg$maxFailExpected: M,
		peg$maxFailPos: j,
		peg$success: va,
		peg$throw: va ? void 0 : ya
	};
	if (va) return P;
	ya();
}
var ei = /* @__PURE__ */ new Set([
	"eq",
	"ne",
	"lt",
	"le",
	"gt",
	"ge"
]), ti = {
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
}, ni = (e) => {
	throw new zr(1, 1, e);
}, ri = (e) => e.type === "root" || e.type === "current", ii = (e) => {
	for (let t = e.next; t; t = t.next) {
		let e = t.value;
		if (e.type !== "bracketMember" && (e.type !== "dot" || e.value.type === "wildcard")) return !1;
	}
	return !0;
};
function ai(e) {
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
		if (ri(i)) r === "value" && !ii(i) && ni("A non-singular query cannot be compared or used as a value: use a name or an index in each segment"), n(i);
		else switch (r === "nodes" && ni(`Expected a query, found ${String(i.type)}`), i.type) {
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
				let e = ei.has(i.operator) ? "value" : "any";
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
				let e = i.name, n = ti[e], a = i.args;
				a.length !== n.args.length && ni(`${e}() takes ${n.args.length} argument${n.args.length > 1 ? "s" : ""}, found ${a.length}`), r === "test" && !n.logical && ni(`The result of ${e}() must be compared`), r === "value" && n.logical && ni(`The result of ${e}() cannot be compared`), a.forEach((e, r) => t.push({
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
			case "value": r === "test" && ni("A literal must be compared");
		}
	}
}
function oi(e) {
	let t;
	try {
		t = $r(e);
	} catch (e) {
		if (Wr(e)) throw new zr(1, 1, "Expression is nested too deeply");
		if (e instanceof RangeError) throw new zr(1, 1, "Expression is too large to parse");
		if (e && typeof e == "object" && "location" in e && "message" in e) {
			let t = e;
			throw new zr(t.location.start.line, t.location.start.column, t.message);
		}
		throw e;
	}
	return ai(t), t;
}
var si = /* @__PURE__ */ new Set([
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
]), ci = /* @__PURE__ */ new Set(/* @__PURE__ */ "L.Ll.Lm.Lo.Lt.Lu.M.Mc.Me.Mn.N.Nd.Nl.No.P.Pc.Pd.Pe.Pf.Pi.Po.Ps.Z.Zl.Zp.Zs.S.Sc.Sk.Sm.So.C.Cc.Cf.Cn.Co".split(".")), li = (e) => e >= 55296 && e <= 56319, ui = (e) => e >= 56320 && e <= 57343, di = (e) => e !== void 0 && e >= "0" && e <= "9", fi = (e, t) => {
	let n = e.charCodeAt(t);
	return li(n) && ui(e.charCodeAt(t + 1)) ? {
		text: e.slice(t, t + 2),
		length: 2,
		code: (n - 55296) * 1024 + (e.charCodeAt(t + 1) - 56320) + 65536
	} : li(n) || ui(n) ? null : {
		text: e[t],
		length: 1,
		code: n
	};
}, pi = (e, t) => {
	let n = e[t + 1];
	return n === void 0 || !si.has(n) ? null : n === "n" ? {
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
}, mi = (e, t) => {
	if (e[t + 2] !== "{") return null;
	let n = e.indexOf("}", t + 3);
	if (n === -1 || n - (t + 3) > 2) return null;
	let r = e.slice(t + 3, n);
	return ci.has(r) ? {
		text: `\\${e[t + 1]}{${r}}`,
		length: n + 1 - t
	} : null;
}, hi = (e, t) => {
	let n = e[t];
	return n === "\\" ? pi(e, t) : n === void 0 || n === "-" || n === "[" || n === "]" ? null : fi(e, t);
}, gi = (e, t) => {
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
			let t = mi(e, n);
			if (t === null) return null;
			r += t.text, n += t.length;
			continue;
		}
		let o = hi(e, n);
		if (o === null) return null;
		if (n += o.length, e[n] === "-" && e[n + 1] !== "]") {
			let t = hi(e, n + 1);
			if (t === null || t.code < o.code) return null;
			r += o.text + "-" + t.text, n += 1 + t.length;
		} else r += o.text;
	}
}, _i = (e, t) => {
	let n = t + 1, r = n;
	for (; di(e[n]);) n++;
	if (n === r) return null;
	if (e[n] === ",") for (n++; di(e[n]);) n++;
	return e[n] === "}" ? {
		text: e.slice(t, n + 1),
		length: n + 1 - t
	} : null;
}, vi = (e) => {
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
				let e = i ? _i(t, a) : null;
				if (e === null) return null;
				n += e.text, i = !1, a += e.length;
				continue;
			}
			case ".":
				n += ".", a++;
				break;
			case "[": {
				let e = gi(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
				break;
			}
			case "\\":
				if (t[a + 1] === "p" || t[a + 1] === "P") {
					let e = mi(t, a);
					if (e === null) return null;
					n += e.text, a += e.length;
				} else {
					let e = pi(t, a);
					if (e === null) return null;
					n += e.text === "\\-" ? "-" : e.text, a += e.length;
				}
				break;
			case "]":
			case "}": return null;
			default: {
				let e = fi(t, a);
				if (e === null) return null;
				n += e.text, a += e.length;
			}
		}
		i = !0;
	}
	return r === 0 ? n : null;
}, yi = 1e3, bi = 1e3, xi = 16, Si = /^[dgimsuy]*$/, Ci = (e) => {
	let t = 0;
	for (let n = 0; n + 2 < e.length; n++) e[n] === "\\" && (e[n + 1] === "p" || e[n + 1] === "P") && e[n + 2] === "{" && t++;
	return t;
}, q = class extends Error {}, wi = 0, Ti = 1, Ei = 2, Di = 3, Oi = 4, ki = 5, Ai = I(2, 31) - 1, ji = (e, t) => {
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
	return e.scratch = void 0, (r.gen > Ai - t - 2 || r.step > Ai - t - 2) && (r.onList.fill(0), r.atomGen.fill(0), r.gen = 0, r.step = 0), r;
}, Mi = /* @__PURE__ */ new Set([
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
]), Ni = /^\{(\d+)(?:,(\d*))?\}/, Pi = /^[0-9a-fA-F]{4}/, Fi = /^\(\?([ims]*)(?:-([ims]*))?:/, Ii = (e) => e === 10 || e === 13 || e === 8232 || e === 8233, Li = class {
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
		if (this.i < this.src.length) throw new q("unexpected character");
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
				let r = Fi.exec(e.slice(t, t + 12));
				if (!r) throw new q("lookaround or named group");
				let i = Rr({}, n);
				for (let e of r[1]) i[e] = !0;
				for (let e of r[2] ?? "") i[e] = !1;
				this.mods = i, this.i = t + r[0].length;
			} else this.i = t + 1;
			let r = this.parseAlt();
			if (e[this.i] !== ")") throw new q("unclosed group");
			return this.i++, this.mods = n, r;
		}
		if (n === "[") {
			let n = t + 1;
			for (e[n] === "^" && n++; n < e.length && e[n] !== "]";) n += e[n] === "\\" ? 2 : 1;
			if (n >= e.length) throw new q("unclosed class");
			return this.i = n + 1, this.atom(e.slice(t, this.i));
		}
		if (n === ".") return this.i++, this.atom(this.iregexp ? "[^\\n\\r]" : ".");
		if (n === "\\") return !this.unicode && e[t + 1] === "c" && !/[a-zA-Z]/.test(e[t + 2] ?? "") ? (this.i = t + 1, this.atom("\\\\", "\\")) : (this.i = t + this.escapeLength(t), this.atom(e.slice(t, this.i)));
		if (n === "*" || n === "+" || n === "?" || n === ")") throw new q("nothing to repeat");
		let r = e.codePointAt(t), i = this.unicode && r > 65535 ? String.fromCodePoint(r) : n;
		return this.i = t + i.length, this.atom(Mi.has(i) ? `\\${i}` : i, i);
	}
	escapeLength(e) {
		let { src: t, unicode: n } = this, r = t[e + 1];
		if (r === void 0) throw new q("trailing backslash");
		if (r === "b" || r === "B") throw new q("word boundary");
		if (r >= "1" && r <= "9") throw new q("backreference");
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
			if (n === -1) throw new q("unclosed escape");
			return n - e + 1;
		}
		if (r === "u" && Pi.test(t.slice(e + 2))) {
			let r = parseInt(t.slice(e + 2, e + 6), 16);
			if (n && r >= 55296 && r <= 56319 && t.slice(e + 6, e + 8) === "\\u") {
				let n = t.slice(e + 8, e + 12);
				if (Pi.test(n) && parseInt(n, 16) >= 56320 && parseInt(n, 16) <= 57343) return 12;
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
			let n = Ni.exec(t.slice(this.i));
			if (!n) return e;
			r = Number(n[1]), i = n[2] === void 0 ? r : n[2] === "" ? Infinity : Number(n[2]), this.i += n[0].length;
		} else return e;
		if (t[this.i] === "?" && this.i++, r > yi || i !== Infinity && i > yi) throw new q("repetition too large");
		return {
			t: "rep",
			node: e,
			min: r,
			max: i
		};
	}
}, Ri = class {
	constructor(e) {
		this.unicode = e, this.op = [], this.x = [], this.y = [], this.atoms = [], this.atomIds = /* @__PURE__ */ new Map(), this.work = 0;
	}
	emit(e, t = 0, n = 0) {
		if (this.op.length >= yi) throw new q("pattern too large");
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
		this.emit(ki);
	}
	compile(e) {
		if (++this.work > 4 * yi) throw new q("pattern too large");
		switch (e.t) {
			case "atom":
				this.emit(wi, this.atomId(e));
				return;
			case "bol":
				this.emit(Di, +!!e.multiline);
				return;
			case "eol":
				this.emit(Oi, +!!e.multiline);
				return;
			case "cat":
				for (let t of e.items) this.compile(t);
				return;
			case "alt": {
				let t = [];
				for (let n = 0; n < e.alts.length - 1; n++) {
					let r = this.emit(Ti);
					this.x[r] = r + 1, this.compile(e.alts[n]), t.push(this.emit(Ei)), this.y[r] = this.op.length;
				}
				this.compile(e.alts[e.alts.length - 1]);
				for (let e of t) this.x[e] = this.op.length;
				return;
			}
			case "rep":
				for (let t = 0; t < e.min; t++) this.compile(e.node);
				if (e.max === Infinity) {
					let t = this.emit(Ti);
					this.x[t] = t + 1, this.compile(e.node), this.emit(Ei, t), this.y[t] = this.op.length;
				} else {
					let t = [];
					for (let n = e.min; n < e.max; n++) {
						let n = this.emit(Ti);
						this.x[n] = n + 1, t.push(n), this.compile(e.node);
					}
					for (let e of t) this.y[e] = this.op.length;
				}
				return;
		}
	}
}, zi = (e, t, n) => {
	try {
		new RegExp(e, t);
		let r = t.includes("u"), i = new Li(e, r, t, n).parse(), a = new Ri(r);
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
}, Bi = (e, t, n, r) => {
	let { op: i, x: a, y: o, atoms: s, unicode: c, sticky: l } = e, u = n.regexWork ?? n, { clist: d, nlist: f } = r, p = 0, m = 0, { onList: ee, stack: h, atomGen: te, atomHit: ne } = r, g = r.gen, re = r.step;
	r.gen = g + t.length + 2, r.step = re + t.length + 2;
	let _ = 0, v = !1, ie = (e, n, r) => {
		let s = 0;
		h[s++] = r;
		let c = 0;
		for (; s > 0;) {
			let r = h[--s];
			if (ee[r] !== g) switch (ee[r] = g, ++c === 64 && (u(c), c = 0), i[r]) {
				case wi:
					e[n++] = r;
					break;
				case ki: return u(c), v = !0, n;
				case Ei:
					h[s++] = a[r];
					break;
				case Ti:
					h[s++] = o[r], h[s++] = a[r];
					break;
				case Di:
					(_ === 0 || a[r] === 1 && Ii(t.charCodeAt(_ - 1))) && (h[s++] = r + 1);
					break;
				case Oi: (_ === t.length || a[r] === 1 && Ii(t.charCodeAt(_))) && (h[s++] = r + 1);
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
}, Vi = (e, t, n) => {
	let r = ji(e, t.length);
	try {
		return Bi(e, t, n, r);
	} finally {
		e.scratch = r;
	}
}, Hi = 256, Ui = /* @__PURE__ */ new Map(), Wi = 0, Gi = (e, t, n, r, i = !1) => {
	if (e.length > bi || t.length > 7 || !Si.test(t)) return null;
	let a = `${t}/${+!!n}/${+!!i}`, o = Ui.get(e)?.get(a);
	if (o !== void 0) return r(e.length), o;
	let s = Array.from(e).join(""), c = Ci(s) > xi ? null : zi(n ? `^(?:${s})$` : s, t, i);
	Wi >= Hi && (Ui.clear(), Wi = 0);
	let l = Ui.get(s);
	return l === void 0 && Ui.set(s, l = /* @__PURE__ */ new Map()), l.set(a, c), Wi++, r(s.length + (c === null ? 0 : c.op.length)), c;
}, Ki = (e, t, n) => {
	var r;
	return (r = n.regexProgram) == null || r.call(n, e.op.length), Vi(e, t, n);
}, qi = class {
	constructor(e) {
		this.nodes = e;
	}
}, Ji = (e) => {
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
}, Yi = (e) => {
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
	return !Ji(e);
}, Xi = 256, Zi = /* @__PURE__ */ new Map(), Qi = (e, t) => {
	let n = Zi.get(e);
	return n === void 0 && (n = Yi(e), Zi.size >= Xi && Zi.clear(), Zi.set(Array.from(e).join(""), n)), t(e.length), n;
}, $i = /* @__PURE__ */ new Map(), ea = (e, t) => {
	let n = $i.get(e);
	return n === void 0 && (n = vi(e), n !== null && (n = Array.from(n).join("")), $i.size >= Xi && $i.clear(), $i.set(Array.from(e).join(""), n)), t(e.length), n;
}, J = 256, Y = (e, t, n, r, i, a, o = !1) => {
	let s = a === void 0 ? void 0 : i.regexSites, c = s?.get(a);
	if (c === void 0) {
		if (e.length > bi) c = null;
		else if (o) {
			let n = ea(e, i);
			c = n === null ? null : Gi(n, t, r, i, !0);
		} else c = Qi(e, i) ? Gi(e, t, r, i) : null;
		s !== void 0 && (s.size >= J && s.clear(), s.set(a, c));
	}
	return c !== null && Ki(c, n, i);
}, ta = {
	length: (e, t) => {
		let n = e[0];
		if (G(n)) {
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
		if (W(n)) return U(n);
		if (Kr(n)) {
			let e = Ur(n);
			return t(e.length), e.length;
		}
	},
	count: (e) => e[0].nodes.length,
	match: (e, t, n) => {
		let r = e[0], i = e[1];
		return !G(r) || !G(i) ? !1 : Y(i, "u", r, !0, t, n, !0);
	},
	search: (e, t, n) => {
		let r = e[0], i = e[1];
		return !G(r) || !G(i) ? !1 : Y(i, "u", r, !1, t, n, !0);
	},
	value: (e) => {
		let { nodes: t } = e[0];
		return t.length === 1 ? t[0] : void 0;
	}
}, na = (e, t, n = z) => e === void 0 && t === void 0 || B(e, t, n), ra = (e, t, n = z) => !B(e, t, n), ia = (e) => e >= 55296 && e <= 57343 ? e + 8192 : e >= 57344 ? e - 2048 : e, aa = (e, t) => {
	let n = Math.min(e.length, t.length);
	for (let r = 0; r < n; r++) {
		let n = e.charCodeAt(r), i = t.charCodeAt(r);
		if (n !== i) return ia(n) - ia(i);
	}
	return e.length - t.length;
}, oa = (e, t, n = z) => qr(e) && qr(t) ? e < t : G(e) && G(t) ? (n(Math.min(e.length, t.length)), aa(e, t) < 0) : !1, sa = (e, t, n = z) => oa(e, t, n) || na(e, t, n), ca = (e, t, n = z) => qr(e) && qr(t) ? e > t : G(e) && G(t) ? (n(Math.min(e.length, t.length)), aa(e, t) > 0) : !1, la = (e, t, n = z) => ca(e, t, n) || na(e, t, n), ua = (e, t) => typeof e == "string" && typeof t == "string" && e.length === t.length ? e.length : 0, da = (e, t, n) => {
	let r = U(e);
	for (let i = 0; i < r; i++) {
		let r = Vr(e, i);
		if (n(1 + ua(r, t)), r === t || r !== r && t !== t) return i;
	}
	return -1;
}, fa = (e) => typeof e == "number" ? "n" + String(e) : typeof e == "string" ? "s" + e : e, pa = (e) => typeof e == "string" && e.length + 1 > Hr, ma = (e, t, n) => {
	let r = n?.get(e);
	if (r) return r;
	let i = {
		set: /* @__PURE__ */ new Set(),
		long: []
	}, a = U(e);
	for (let n = 0; n < a; n++) {
		let r = Vr(e, n);
		t(1 + (typeof r == "string" ? r.length : 0)), pa(r) ? i.long.push(r) : i.set.add(fa(r));
	}
	return n?.set(e, i), i;
}, ha = ({ set: e, long: t }, n, r) => {
	if (pa(n)) {
		for (let e of t) if (r(1 + ua(e, n)), e === n) return !0;
		return !1;
	}
	return e.size === 0 ? (r(), !1) : (r(1 + (typeof n == "string" ? 2 * n.length : 0)), e.has(fa(n)));
}, ga = (e, t, n) => {
	let r = U(e);
	for (let i = 0; i < r; i++) if (n(), V(e, i) && t(e[i])) return !0;
	return !1;
}, X = {
	eq: na,
	ne: ra,
	lt: oa,
	le: sa,
	gt: ca,
	ge: la,
	in: (e, t, n = z) => W(t) ? da(t, e, n) !== -1 : !1,
	nin: (e, t, n = z) => W(t) ? da(t, e, n) === -1 : !1,
	subsetof: (e, t, n = z, r) => {
		if (!W(e) || !W(t)) return !1;
		let i = ma(t, n, r);
		return !ga(e, (e) => !ha(i, e, n), n);
	},
	anyof: (e, t, n = z, r) => {
		if (!W(e) || !W(t)) return !1;
		let i = ma(t, n, r);
		return ga(e, (e) => ha(i, e, n), n);
	},
	noneof: (e, t, n = z, r) => {
		if (!W(e) || !W(t)) return !1;
		let i = ma(t, n, r);
		return !ga(e, (e) => ha(i, e, n), n);
	},
	sizeof: (e, t) => !W(e) && !G(e) || !W(t) && !G(t) ? !1 : (W(e) ? U(e) : e.length) === (W(t) ? U(t) : t.length),
	size: (e, t) => !W(e) && !G(e) || !qr(t) ? !1 : (W(e) ? U(e) : e.length) === t
}, Z = (e) => !W(e) && !G(e) ? !1 : (W(e) ? U(e) : e.length) === 0, Q = (e, t, n, r = z, i) => !G(e) || !G(t) ? !1 : Y(i !== void 0 && r.regexSites?.has(i) === !0 ? "" : t.slice(1, -1), n, e, !1, r, i), _a = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\x08/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\x00-\x07\x0b\x0e-\x1f]/g, (e) => "\\u00" + e.charCodeAt(0).toString(16).padStart(2, "0")), $ = (e, t) => e.concat(`[${t}]`), va = (e, t) => e < 0 ? t + e : e, ya = (e, t) => {
	let n = U(e), r = va(t, n);
	return r >= 0 && r < n ? {
		exists: !0,
		value: V(e, r) ? e[r] : void 0,
		index: r
	} : { exists: !1 };
}, ba = (e, t) => {
	for (let n of t) e.push(n);
}, xa = 1e6, Sa = 100, Ca = 1e6, wa = 20, Ta = 1e4, Ea = 1e4, Da = class {
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
					V(n, r) && this.visit(n[r]);
				} else if (V(n, t)) this.visit(n[t]);
				else if (++e.holes > Ea) {
					let r = e.length, i = Object.getOwnPropertyNames(n).filter((e) => {
						let n = Number(e);
						return Number.isInteger(n) && n > t && n < r && String(n) === e;
					});
					e.indices = i, e.length = i.length, e.i = 0;
				}
			} else {
				let n = e.container, r = e.keys[t];
				if (!V(n, r)) continue;
				this.weight += r.length, this.visit(n[r]);
			}
		}
		n.length === 0 && (this.done = !0);
	}
	visit(e) {
		if (this.nodes++, this.weight += typeof e == "string" ? 1 + e.length : 1, typeof e == "string" && (this.stringPositions += 1 + e.length), typeof e == "object" && e && !this.seen.has(e)) {
			if (this.seen.add(e), W(e)) this.frames.push({
				container: e,
				keys: null,
				indices: null,
				length: U(e),
				i: 0,
				holes: 0
			});
			else if (Kr(e)) {
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
}, Oa = class {
	constructor(e, t = {}) {
		this.steps = 0, this.largestRegexProgram = 0, this.regexSteps = 0, this.rootQueryCache = /* @__PURE__ */ new Map(), this.setCaches = /* @__PURE__ */ new Map(), this.siteSetCache = (e) => {
			let t = this.setCaches.get(e);
			return t === void 0 && (t = /* @__PURE__ */ new WeakMap(), this.setCaches.set(e, t)), t;
		}, this.canonicalNames = /* @__PURE__ */ new Map(), this.canonicalName = (e, t) => {
			let n = this.canonicalNames.get(e);
			return n === void 0 && (this.tick(t.length), n = Object.keys({ [t]: 0 })[0], this.canonicalNames.set(e, n), this.escapedNames.has(n) || this.escapedNames.set(n, _a(n))), n;
		}, this.escapedNames = /* @__PURE__ */ new Map(), this.formatStringLiteralPath = (e, t) => {
			let n = this.escapedNames.get(t);
			return n === void 0 && (this.tick(t.length), n = _a(t), this.escapedNames.set(t, n)), e.concat(`['${n}']`);
		}, this.forEachElement = (e, t) => {
			let n = U(e);
			for (let r = 0; r < n; r++) this.tick(), V(e, r) && t(e[r], r);
		}, this.retained = 0, this.retain = () => {
			if (!(++this.retained <= this.retainedLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new Da(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(Ta, Math.ceil((this.retained - this.retainedLimit) / wa))), this.raiseLimits(e), this.retained <= this.retainedLimit) return;
					if (this.raiseLimits(e), this.retained <= this.retainedLimit) return;
				}
				throw new R(`Query retains more than ${this.retainedLimit} nodes`);
			}
		}, this.raiseLimits = (e) => {
			let t = Math.min(this.regexSteps, this.largestRegexProgram * e.stringPositions);
			this.stepLimit = Math.max(xa, Sa * e.weight) + t, this.retainedLimit = Math.max(Ca, wa * e.nodes);
		}, this.tick = Object.assign((e = 1) => {
			if (this.steps += e, !(this.steps <= this.stepLimit)) {
				if (this.adaptiveLimit) {
					let e = this.weigher ??= new Da(this.rootPayload.value);
					for (; !e.done;) if (e.advance(Math.max(Ta, Math.ceil((this.steps - this.stepLimit) / Sa))), this.raiseLimits(e), this.steps <= this.stepLimit) return;
					if (this.raiseLimits(e), this.steps <= this.stepLimit) return;
				}
				throw new R(`Query exceeded ${this.stepLimit} evaluation steps`);
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
			if (!Kr(e)) return;
			let r = this.canonicalName(n, n.value);
			if (V(e, r)) return {
				value: e[r],
				paths: this.formatStringLiteralPath(t, r)
			};
		}, this.handleWildcard = ({ value: e, paths: t }) => {
			if (W(e)) {
				let n = [];
				return this.forEachElement(e, (e, r) => {
					this.retain(), n.push({
						value: e,
						paths: $(t, r)
					});
				}), n;
			}
			if (Kr(e)) {
				let n = Ur(e);
				this.tick(n.length);
				let r = [];
				for (let i of n) V(e, i) && (this.retain(), r.push({
					value: e[i],
					paths: this.formatStringLiteralPath(t, i)
				}));
				return r;
			}
			return [];
		}, this.handleNumericLiteral = ({ value: e, paths: t }, n) => {
			if (!W(e)) return;
			let r = ya(e, n.value);
			if (r.exists) return {
				value: r.value,
				paths: $(t, r.index)
			};
		}, this.handleDotNumericLiteral = ({ value: e, paths: t }, n) => {
			if (W(e)) {
				let r = ya(e, n.value);
				return r.exists ? {
					value: r.value,
					paths: $(t, r.index)
				} : void 0;
			}
			if (Kr(e)) {
				let r = String(n.value);
				return V(e, r) ? {
					value: e[r],
					paths: this.formatStringLiteralPath(t, r)
				} : void 0;
			}
		}, this.handleSlices = ({ value: e, paths: t }, n) => {
			if (!W(e)) return [];
			let r = U(e), i = n.step ?? 1;
			if (i === 0) return [];
			let a, o;
			i > 0 ? (a = n.start === null ? 0 : va(n.start, r), o = n.end === null ? r : va(n.end, r)) : (a = n.start === null ? r - 1 : va(n.start, r), o = n.end === null ? -r - 1 : va(n.end, r));
			let s, c;
			i > 0 ? (s = Math.max(a, 0), c = Math.min(o, r)) : (c = Math.min(a, r - 1), s = Math.max(o, -1));
			let l = [], u = i > 0 ? s : c;
			for (; i > 0 && u < c || i < 0 && u > s;) this.tick(), this.retain(), l.push({
				value: V(e, u) ? e[u] : void 0,
				paths: $(t, u)
			}), u += i;
			return l;
		}, this.handleUnions = (e, t) => {
			let n = [];
			for (let r of t.values) switch (this.tick(), r.type) {
				case "identifier":
					if (Kr(e.value)) {
						let t = this.handleIdentifier(e, r);
						K(t) && (this.retain(), n.push(t));
					}
					break;
				case "stringLiteral":
					if (Kr(e.value)) {
						let t = this.handleStringLiteral(e, r);
						K(t) && (this.retain(), n.push(t));
					}
					break;
				case "numericLiteral":
					if (W(e.value)) {
						let t = this.handleNumericLiteral(e, r);
						K(t) && (this.retain(), n.push(t));
					}
					break;
				case "wildcard":
					ba(n, this.handleWildcard(e));
					break;
				case "slices":
				case "filterExpression": ba(n, this.handleBracketExpressionContent(e, r));
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
						K(e) && (this.retain(), n.push(e));
						break;
					}
					case "bracketExpression":
						ba(n, this.handleBracketExpressionContent(a, r.value));
						break;
					case "wildcard":
						ba(n, this.handleWildcard(a));
						break;
					case "identifier": {
						let e = this.handleIdentifier(a, r);
						K(e) && (this.retain(), n.push(e));
						break;
					}
				}
				if (Kr(e)) {
					let t = Ur(e);
					this.tick(t.length), i.push({
						parent: a,
						keys: t,
						length: t.length,
						i: 0
					});
				} else W(e) && i.push({
					parent: a,
					keys: null,
					length: U(e),
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
						if (!V(n, t)) continue;
						a = {
							value: n[t],
							paths: $(e.parent.paths, t)
						};
					} else {
						let n = e.parent.value, r = e.keys[t];
						if (!V(n, r)) continue;
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
						if (!qr(i) || !qr(r)) i = void 0;
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
					return qr(i) ? {
						value: i,
						paths: e.paths
					} : void 0;
				}
			}
		}, this.handleComparator = (e, t) => this.memoInvariant(t, () => this.evaluateComparator(e, t)), this.evaluateComparator = (e, t) => {
			let n = this.handleOperationContent(e, t.left)?.value;
			if (t.operator === "empty") return Z(n);
			if (t.operator === "reg") return Q(n, t.right.value, t.right.opts, this.tick, t);
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
				return !n || t.type !== "root" && t.type !== "current" ? r?.value : r?.isIndefinite ? new qi(r.value) : new qi(K(r?.value) ? [r?.value] : []);
			}), i = ta[t.name], a = t.args[1], o = a?.type === "stringLiteral" || a?.subtype === "string";
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
					return e?.isIndefinite ? Array.isArray(e.value) && e.value.length > 0 : K(e);
				}
				case "current": {
					let n = this.handleSubscript(e, t.next);
					return n?.isIndefinite ? Array.isArray(n.value) && n.value.length > 0 : K(n);
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
					if (W(n)) this.forEachElement(n, (n, i) => {
						let a = {
							value: n,
							paths: $(e.paths, i)
						};
						this.handleFilterExpressionContent(a, t.value) && (this.retain(), r.push(a));
					});
					else if (Kr(n)) {
						let i = Ur(n);
						this.tick(i.length);
						for (let a of i) {
							if (!V(n, a)) continue;
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
					if (!K(n)) continue;
					a = [n];
				}
				let o = t.next;
				if (o === null) ba(n, a);
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
				throw Wr(e) ? new R("Query is nested too deeply") : Gr(e) ? new R("Query result is too large") : e;
			}
		}, this.rootPayload = {
			value: e,
			paths: "$"
		}, this.adaptiveLimit = t.maxSteps === void 0, this.stepLimit = t.maxSteps ?? xa, this.retainedLimit = this.adaptiveLimit ? Ca : Infinity;
	}
}, ka = (e, t, n) => {
	let r = oi(t), i = new Oa(e, n).handleRoot(r);
	return !i?.isIndefinite && n.returnArray ? Jr(i) ? [] : [i.value] : i?.value;
}, Aa = (e, t, n) => {
	let r = [];
	for (let i of t) {
		let t = ka(e, i, n);
		K(t) && r.push(t);
	}
	return r;
}, ja = (e, t, n = {}) => {
	try {
		return W(t) ? Aa(e, t, n) : ka(e, t, n);
	} catch (e) {
		if (!n.hideExceptions) throw e;
		return n.returnArray ? [] : void 0;
	}
}, Ma = (e) => typeof e == "object" && !!e && !Array.isArray(e), Na = (e, t) => {
	if (!Ma(e)) return;
	let n = {};
	for (let [r, i] of Object.entries(e)) n[r] = Ba(t, i);
	return n;
}, Pa = (e, t) => {
	let n = structuredClone(e);
	if (Array.isArray(n)) return n.map((e) => Ba(t, e));
}, Fa = (e, t, n) => {
	if (e === "${agg:count}" && "rowData" in t) {
		if (Array.isArray(t?.rowData)) return t?.rowData.length;
	} else if (e === "${rowValue}" && "rowData" in t) return t?.rowData;
	else return e.replace(/\$\{(\w+)\}/g, (e, n) => t[n] === void 0 ? e : t[n]);
}, Ia = (e, t) => Fa(e, t), La = (e, t, n) => {
	if (n && console.log("inElement : ", e), n && console.log("inTemplate : ", t), t == null) throw TypeError("inTemplate is required");
	if (typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	if (!e || typeof e != "object" || Array.isArray(e)) throw TypeError("inElement must be an object");
	return !0;
}, Ra = {
	name: "json-transformer-funcs-primitive",
	version: "1.9.1"
}, za = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.primitive = {
		meta: Ra,
		applyTemplate: e
	});
}, Ba = (e, t, n) => {
	let r = e, i = t;
	La(r, i, n);
	let a = structuredClone(i);
	return typeof a == "string" ? Fa(a, r) : (typeof a != "object" || !a || ("textContent" in a && (a.textContent = Ia(a?.textContent, r)), "attributes" in a && (a.attributes = Na(a?.attributes, r)), "children" in a && (a.children = Pa(a?.children, r))), a);
};
za(Ba);
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs-one-dimension/src/v9/guard/index.js
var Va = (e, t) => {
	if (!Array.isArray(e)) throw TypeError("inSource must be an Array");
	if (e.length === 0) throw Error("inSource cannot be empty");
	for (let t = 0; t < e.length; t++) if (!e[t] || typeof e[t] != "object") throw TypeError(`inSource[${t}] must be an object`);
	if (!t || typeof t != "object" && typeof t != "string") throw TypeError("inTemplate must be an object or string");
	return !0;
}, Ha = {
	name: "json-transformer-funcs-one-dimension",
	version: "1.9.1"
};
((e, t) => {
	if (typeof globalThis < "u") return globalThis.ks ??= {}, globalThis.ks.transformer ??= {}, globalThis.ks.transformer.funcs ??= {}, globalThis.ks.transformer.funcs.oneDimension = {
		meta: Ha,
		individualTemplate: e,
		template: t
	}, globalThis.ks.transformer.funcs.oneDimension;
})((e, t) => {
	let n = e;
	return Va(n, t), n.map((e) => Ba(e, e[t]));
}, (e, t) => {
	let n = e, r = t;
	return Va(n, r), n.map((e) => Ba(e, r));
});
// ../json-renderers-run-instructions/node_modules/json-transformer-funcs/src/v24/findByRole.js
var Ua = (e, t) => {
	if (e?.attributes?.["data-role"] === t) return e;
	for (let n of e?.children ?? []) {
		let e = Ua(n, t);
		if (e) return e;
	}
	return null;
}, Wa = (e, t, n) => {
	let r = e?.[t.fileName];
	if (r === void 0) throw Error(`Registry entry not found: ${t.fileName}`);
	let i = r;
	if (t.jsonPath) {
		let e = ja(r, t.jsonPath, { returnArray: !0 });
		if (e.length === 0) throw Error(`Destination JSONPath matched no nodes: ${t.jsonPath}`);
		if (e.length > 1) throw Error(`Destination JSONPath must identify exactly one node; matched ${e.length}: ${t.jsonPath}`);
		i = e[0];
	} else if (t.dataRole && (i = Ua(r, t.dataRole), i == null)) throw Error(`Destination dataRole not found: ${t.dataRole}`);
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
}, Ga = (e, t, n, r) => {
	let { parent: i, key: a } = Wa(e, t, r);
	return (Fr[t.action] || N)(i, a, n), e;
}, Ka = (e) => typeof e == "object" && !!e && !Array.isArray(e), qa = (e, t) => {
	if (!Ka(e)) return null;
	if (e[t] !== void 0) return e[t];
	let n = `show${t.charAt(0).toUpperCase()}${t.slice(1)}`;
	return e[n] === void 0 ? null : e[n];
}, Ja = (e, t) => {
	let n = y[e];
	if (n) for (let e of n) {
		if (e.skipIf && ja(t, e.skipIf, { returnArray: !0 }).length > 0) continue;
		let n = ue[e.templateKey];
		try {
			Ga({ base: t }, e.destinationPath, n);
		} catch {}
	}
}, Ya = ({ options: e = {}, optionDefs: t = {}, base: n, showLog: r = !1 } = {}) => {
	if (!n || !Ka(e) || !Ka(t)) return n;
	for (let [r, i] of Object.entries(t)) {
		if (!Ka(i)) continue;
		let t = qa(e, r);
		if (!t) continue;
		let a = typeof t == "boolean" && t === !0, o = Ka(t);
		if ((a || o) && Object.entries(i).some(([e]) => e !== "initialize" && (a || t[e] === !0))) {
			i.initialize && Ja(i.initialize, n);
			for (let [e, r] of Object.entries(i)) e !== "initialize" && (a || t[e] === !0) && Ja(r, n);
		}
	}
	return n;
}, Xa = {
	name: "json-renderers-run-instructions",
	version: "1.14.1"
}, Za = (e) => {
	typeof globalThis < "u" && e && (globalThis.ks ??= {}, globalThis.ks.jsonRenderers ??= {}, globalThis.ks.jsonRenderers.runInstructions ??= {}, globalThis.ks.jsonRenderers.runInstructions.render = {
		meta: Xa,
		renderFunc: e
	});
}, Qa = ({ instructionMainKey: e, instructionSubKey: t, data: n, options: r, showLog: i = !1 } = {}) => {
	let a = le[e]?.[t];
	if (!a) throw Error(`Definition not found: ${e}.${t}`);
	let o = structuredClone(ue[a.baseFromSpec]);
	return j({
		instructions: a.instructions ?? [],
		base: o,
		data: n,
		showLog: i
	}), Ya({
		options: r,
		optionDefs: a.options && typeof a.options == "object" ? a.options : le[e]?.options ?? {},
		base: o,
		data: n,
		showLog: i
	}), o;
};
Za(Qa);
// src/v8/buildSpec.js
var $a = ({ type: e = "table.simple", data: t = [], columns: n = [], options: r = {}, showLog: i = !1 } = {}) => {
	let a = e.split("."), o = a[0], s = a[1];
	return Qa({
		instructionMainKey: o,
		instructionSubKey: s,
		data: {
			data: t,
			columns: n
		},
		options: r,
		showLog: i
	});
}, eo = (e = {}) => {
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
	let r = $a({
		type: e.type,
		data: e.data,
		columns: e.columns,
		options: n,
		showLog: t
	});
	t && console.log("[v6 from-instructions] generated spec:", r), console.log("spec : ", r);
	let i = Oe({
		jsonSpec: r,
		targetHtmlId: e.targetHtmlId,
		appendPosition: e.appendPosition || "replace",
		showLog: t
	});
	return t && console.log("[v6 from-instructions] mounted DOM element:", i), i;
};
t(eo);
export { $a as buildSpec, eo as default, eo as render };
