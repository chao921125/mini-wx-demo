!(function (e) {
	var t = {};
	function n(r) {
		if (t[r]) return t[r].exports;
		var i = (t[r] = { i: r, l: !1, exports: {} });
		return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
	}
	(n.m = e),
		(n.c = t),
		(n.d = function (e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
		}),
		(n.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(n.t = function (e, t) {
			if ((1 & t && (e = n(e)), 8 & t)) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
				for (var i in e)
					n.d(
						r,
						i,
						function (t) {
							return e[t];
						}.bind(null, i),
					);
			return r;
		}),
		(n.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return n.d(t, "a", t), t;
		}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(n.p = ""),
		n((n.s = 664));
})({
	0: function (e, t, n) {
		"use strict";
		function r(e, t, n, r, i, o, a, s, c, u) {
			var l,
				f = "function" == typeof e ? e.options : e;
			if (c) {
				f.components || (f.components = {});
				var h = Object.prototype.hasOwnProperty;
				for (var d in c) h.call(c, d) && !h.call(f.components, d) && (f.components[d] = c[d]);
			}
			if (
				(u &&
					((u.beforeCreate || (u.beforeCreate = [])).unshift(function () {
						this[u.__module] = this;
					}),
					(f.mixins || (f.mixins = [])).push(u)),
				t && ((f.render = t), (f.staticRenderFns = n), (f._compiled = !0)),
				r && (f.functional = !0),
				o && (f._scopeId = "data-v-" + o),
				a
					? ((l = function (e) {
							(e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(e = __VUE_SSR_CONTEXT__),
								i && i.call(this, e),
								e && e._registeredComponents && e._registeredComponents.add(a);
					  }),
					  (f._ssrRegister = l))
					: i &&
					  (l = s
							? function () {
									i.call(this, this.$root.$options.shadowRoot);
							  }
							: i),
				l)
			)
				if (f.functional) {
					f._injectStyles = l;
					var p = f.render;
					f.render = function (e, t) {
						return l.call(t), p(e, t);
					};
				} else {
					var g = f.beforeCreate;
					f.beforeCreate = g ? [].concat(g, l) : [l];
				}
			return { exports: e, options: f };
		}
		n.d(t, "a", function () {
			return r;
		});
	},
	1: function (e, t) {
		e.exports = { "@VERSION": 2 };
	},
	13: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(5),
			i = n(2);
		for (var o in i)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return i[e];
					});
				})(o);
		var a = n(0);
		var s = Object(a.a)(i.default, r.b, r.c, !1, null, "168bca6c", "39eb9647", !1, r.a, void 0);
		(function (e) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(8).default, this.options.style) : Object.assign(this.options.style, n(8).default);
		}).call(s),
			(t.default = s.exports);
	},
	193: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(194),
			i = n.n(r);
		for (var o in r)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return r[e];
					});
				})(o);
		t.default = i.a;
	},
	194: function (e, t, n) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
			var n = {
				name: "uniDataChecklist",
				mixins: [e.mixinDatacom],
				props: {
					mode: { type: String, default: "default" },
					multiple: { type: Boolean, default: !1 },
					value: {
						type: [Array, String, Number],
						default: function () {
							return "";
						},
					},
					localdata: {
						type: Array,
						default: function () {
							return [];
						},
					},
					min: { type: [Number, String], default: "" },
					max: { type: [Number, String], default: "" },
					wrap: { type: Boolean, default: !1 },
					icon: { type: String, default: "left" },
					selectedColor: { type: String, default: "#007aff" },
					selectedTextColor: { type: String, default: "#333" },
					emptyText: { type: String, default: "\u6682\u65e0\u6570\u636e" },
					disabled: { type: Boolean, default: !1 },
				},
				watch: {
					localdata: {
						handler: function (e) {
							(this.range = e), (this.dataList = this.getDataList(this.getSelectedValue(e)));
						},
						deep: !0,
					},
					mixinDatacomResData: function (e) {
						(this.range = e), (this.dataList = this.getDataList(this.getSelectedValue(e)));
					},
					value: function (e) {
						(this.dataList = this.getDataList(e)), this.formItem && this.formItem.setValue(e);
					},
				},
				data: function () {
					return {
						dataList: [],
						range: [],
						contentText: { contentdown: "\u67e5\u770b\u66f4\u591a", contentrefresh: "\u52a0\u8f7d\u4e2d", contentnomore: "\u6ca1\u6709\u66f4\u591a" },
						isLocal: !0,
						styles: { selectedColor: "#007aff", selectedTextColor: "#333" },
					};
				},
				created: function () {
					(this.form = this.getForm("uniForms")),
						(this.formItem = this.getForm("uniFormsItem")),
						this.formItem && this.formItem.setValue(this.value),
						this.formItem && this.formItem.name && ((this.rename = this.formItem.name), this.form.inputChildrens.push(this)),
						this.localdata && 0 !== this.localdata.length
							? ((this.isLocal = !0), (this.range = this.localdata), (this.dataList = this.getDataList(this.getSelectedValue(this.range))))
							: this.collection && ((this.isLocal = !1), this.loadData());
				},
				methods: {
					loadData: function () {
						var e = this;
						this.mixinDatacomGet()
							.then(function (t) {
								(e.mixinDatacomResData = t.result.data),
									0 === e.mixinDatacomResData.length ? ((e.isLocal = !1), (e.mixinDatacomErrorMessage = e.emptyText)) : (e.isLocal = !0);
							})
							.catch(function (t) {
								e.mixinDatacomErrorMessage = t.message;
							});
					},
					getForm: function () {
						for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uniForms", t = this.$parent, n = t.$options.name; n !== e; ) {
							if (!(t = t.$parent)) return !1;
							n = t.$options.name;
						}
						return t;
					},
					chagne: function (e) {
						var t = e.detail.value,
							n = { value: [], data: [] };
						if (this.multiple)
							this.range.forEach(function (e) {
								t.includes(e.value + "") && (n.value.push(e.value), n.data.push(e));
							});
						else {
							var r = this.range.find(function (e) {
								return e.value + "" === t;
							});
							r && (n = { value: r.value, data: r });
						}
						this.formItem && this.formItem.setValue(n.value),
							this.$emit("input", n.value),
							this.$emit("change", { detail: n }),
							this.multiple ? (this.dataList = this.getDataList(n.value, !0)) : (this.dataList = this.getDataList(n.value));
					},
					getDataList: function (e) {
						var t = this,
							n = JSON.parse(JSON.stringify(this.range)),
							r = [];
						return (
							this.multiple && (Array.isArray(e) || (e = [])),
							n.forEach(function (n, i) {
								if (((n.disabled = n.disable || n.disabled || !1), t.multiple))
									if (e.length > 0) {
										var o = e.find(function (e) {
											return e === n.value;
										});
										n.selected = void 0 !== o;
									} else n.selected = !1;
								else n.selected = e === n.value;
								r.push(n);
							}),
							this.setRange(r)
						);
					},
					setRange: function (e) {
						var t = this,
							n = e.filter(function (e) {
								return e.selected;
							}),
							r = Number(this.min) || 0,
							i = Number(this.max) || "";
						return (
							e.forEach(function (o, a) {
								if (t.multiple) {
									if (n.length <= r)
										void 0 !==
											n.find(function (e) {
												return e.value === o.value;
											}) && (o.disabled = !0);
									if (n.length >= i && "" !== i)
										void 0 ===
											n.find(function (e) {
												return e.value === o.value;
											}) && (o.disabled = !0);
								}
								t.setStyles(o, a), (e[a] = o);
							}),
							e
						);
					},
					setStyles: function (e, t) {
						(e.styleBackgroud = this.setStyleBackgroud(e)),
							(e.styleIcon = this.setStyleIcon(e)),
							(e.styleIconText = this.setStyleIconText(e)),
							(e.styleRightIcon = this.setStyleRightIcon(e));
					},
					getSelectedValue: function (e) {
						if (!this.multiple) return this.value;
						var t = [];
						return (
							e.forEach(function (e) {
								e.selected && t.push(e.value);
							}),
							this.value.length > 0 ? this.value : t
						);
					},
					setStyleBackgroud: function (e) {
						var t = {};
						"list" !== this.mode && (t["border-color"] = e.selected ? this.selectedColor : "#DCDFE6"),
							"tag" === this.mode && (t["background-color"] = e.selected ? this.selectedColor : "#f5f5f5");
						var n = "";
						for (var r in t) n += "".concat(r, ":").concat(t[r], ";");
						return n;
					},
					setStyleIcon: function (e) {
						var t = {},
							n = "";
						for (var r in ((t["background-color"] = e.selected ? this.selectedColor : "#fff"),
						(t["border-color"] = e.selected ? this.selectedColor : "#DCDFE6"),
						!e.selected && e.disabled && ((t["background-color"] = "#F2F6FC"), (t["border-color"] = e.selected ? this.selectedColor : "#DCDFE6")),
						t))
							n += "".concat(r, ":").concat(t[r], ";");
						return n;
					},
					setStyleIconText: function (e) {
						var t = {},
							n = "";
						for (var r in ("tag" === this.mode ? (t.color = e.selected ? "#fff" : "#333") : (t.color = e.selected ? this.selectedColor : "#333"),
						!e.selected && e.disabled && (t.color = "#999"),
						t))
							n += "".concat(r, ":").concat(t[r], ";");
						return n;
					},
					setStyleRightIcon: function (e) {
						var t = {},
							n = "";
						for (var r in ("list" === this.mode && (t["border-color"] = e.selected ? this.styles.selectedColor : "#DCDFE6"), t))
							n += "".concat(r, ":").concat(t[r], ";");
						return n;
					},
				},
			};
			t.default = n;
		}).call(this, n(534).default);
	},
	195: function (e, t) {
		e.exports = {
			".uni-data-loading": {
				"": {
					flexDirection: ["row", 0, 0, 0],
					justifyContent: ["center", 0, 0, 0],
					alignItems: ["center", 0, 0, 0],
					height: ["36", 0, 0, 0],
					paddingLeft: ["10", 0, 0, 0],
					color: ["#999999", 0, 0, 0],
				},
			},
			".uni-data-checklist": { "": { position: ["relative", 0, 0, 1], zIndex: [0, 0, 0, 1] } },
			".checklist-group": {
				".uni-data-checklist ": { flexDirection: ["row", 0, 1, 2], flexWrap: ["wrap", 0, 1, 2] },
				".uni-data-checklist .is-list": { flexDirection: ["column", 0, 2, 3] },
			},
			".checklist-box": {
				".uni-data-checklist .checklist-group ": {
					flexDirection: ["row", 0, 2, 4],
					alignItems: ["center", 0, 2, 4],
					position: ["relative", 0, 2, 4],
					marginTop: ["5", 0, 2, 4],
					marginRight: ["25", 0, 2, 4],
					marginBottom: ["5", 0, 2, 4],
					marginLeft: [0, 0, 2, 4],
				},
				".uni-data-checklist .checklist-group .is--button": {
					marginRight: ["10", 0, 3, 24],
					paddingTop: ["5", 0, 3, 24],
					paddingRight: ["15", 0, 3, 24],
					paddingBottom: ["5", 0, 3, 24],
					paddingLeft: ["15", 0, 3, 24],
					borderWidth: ["1", 0, 3, 24],
					borderStyle: ["solid", 0, 3, 24],
					borderColor: ["#DCDFE6", 0, 3, 24],
					borderRadius: ["3", 0, 3, 24],
					transitionProperty: ["borderColor", 0, 3, 24],
					transitionDuration: [200, 0, 3, 24],
				},
				".uni-data-checklist .checklist-group .is--button.is-disable": {
					borderWidth: ["1", 0, 4, 25],
					borderStyle: ["solid", 0, 4, 25],
					borderColor: ["#eeeeee", 0, 4, 25],
					opacity: [0.4, 0, 4, 25],
				},
				".uni-data-checklist .checklist-group .is--button.is-checked": { borderColor: ["#007aff", 0, 4, 29] },
				".uni-data-checklist .checklist-group .is--button.is-checked.is-disable": { opacity: [0.4, 0, 5, 35] },
				".uni-data-checklist .checklist-group .is--tag": {
					marginRight: ["10", 0, 3, 36],
					paddingTop: ["5", 0, 3, 36],
					paddingRight: ["10", 0, 3, 36],
					paddingBottom: ["5", 0, 3, 36],
					paddingLeft: ["10", 0, 3, 36],
					borderWidth: ["1", 0, 3, 36],
					borderStyle: ["solid", 0, 3, 36],
					borderColor: ["#DCDFE6", 0, 3, 36],
					borderRadius: ["3", 0, 3, 36],
					backgroundColor: ["#f5f5f5", 0, 3, 36],
				},
				".uni-data-checklist .checklist-group .is--tag.is-disable": { opacity: [0.4, 0, 4, 38] },
				".uni-data-checklist .checklist-group .is--tag.is-checked": { backgroundColor: ["#007aff", 0, 4, 39], borderColor: ["#007aff", 0, 4, 39] },
				".uni-data-checklist .checklist-group .is--list": {
					paddingTop: ["10", 0, 3, 41],
					paddingRight: ["15", 0, 3, 41],
					paddingBottom: ["10", 0, 3, 41],
					paddingLeft: [0, 0, 3, 41],
					marginTop: [0, 0, 3, 41],
					marginRight: [0, 0, 3, 41],
					marginBottom: [0, 0, 3, 41],
					marginLeft: [0, 0, 3, 41],
				},
				".uni-data-checklist .checklist-group .is--list.is-list-border": {
					borderTopWidth: ["1", 0, 4, 42],
					borderTopStyle: ["solid", 0, 4, 42],
					borderTopColor: ["#eeeeee", 0, 4, 42],
				},
			},
			".hidden": { ".uni-data-checklist .checklist-group .checklist-box ": { position: ["absolute", 0, 3, 5], opacity: [0, 0, 3, 5] } },
			".checklist-content": {
				".uni-data-checklist .checklist-group .checklist-box ": {
					flex: [1, 0, 3, 6],
					flexDirection: ["row", 0, 3, 6],
					alignItems: ["center", 0, 3, 6],
					justifyContent: ["space-between", 0, 3, 6],
				},
			},
			".checklist-text": {
				".uni-data-checklist .checklist-group .checklist-box .checklist-content ": {
					fontSize: ["14", 0, 4, 7],
					color: ["#333333", 0, 4, 7],
					marginLeft: ["5", 0, 4, 7],
					lineHeight: ["14", 0, 4, 7],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": { color: ["#999999", 0, 5, 16] },
				".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { color: ["#007aff", 0, 5, 21] },
				".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { opacity: [0.4, 0, 6, 23] },
				".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": { color: ["#999999", 0, 5, 28] },
				".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { color: ["#007aff", 0, 5, 34] },
				".uni-data-checklist .checklist-group .checklist-box.is--tag ": {
					marginTop: [0, 0, 4, 37],
					marginRight: [0, 0, 4, 37],
					marginBottom: [0, 0, 4, 37],
					marginLeft: [0, 0, 4, 37],
					color: ["#333333", 0, 4, 37],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--tag.is-checked ": { color: ["#ffffff", 0, 5, 40] },
				".uni-data-checklist .checklist-group .checklist-box.is--list.is-disable ": { color: ["#999999", 0, 5, 45] },
				".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked ": { color: ["#007aff", 0, 5, 48] },
				".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable ": { opacity: [0.4, 0, 6, 51] },
			},
			".checkobx__list": {
				".uni-data-checklist .checklist-group .checklist-box .checklist-content ": {
					borderWidth: ["1", 0, 4, 8],
					borderStyle: ["solid", 0, 4, 8],
					borderColor: ["#ffffff", 0, 4, 8],
					borderLeftWidth: [0, 0, 4, 8],
					borderLeftStyle: ["solid", 0, 4, 8],
					borderLeftColor: ["#000000", 0, 4, 8],
					borderTopWidth: [0, 0, 4, 8],
					borderTopStyle: ["solid", 0, 4, 8],
					borderTopColor: ["#000000", 0, 4, 8],
					height: ["12", 0, 4, 8],
					width: ["6", 0, 4, 8],
					transformOrigin: ["center", 0, 4, 8],
					transform: ["rotate(45deg)", 0, 4, 8],
					opacity: [0, 0, 4, 8],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checklist-content ": {
					opacity: [1, 0, 6, 49],
					borderColor: ["#007aff", 0, 6, 49],
				},
			},
			".checkbox__inner": {
				".uni-data-checklist .checklist-group .checklist-box ": {
					position: ["relative", 0, 3, 9],
					width: ["16", 0, 3, 9],
					height: ["16", 0, 3, 9],
					borderWidth: ["1", 0, 3, 9],
					borderStyle: ["solid", 0, 3, 9],
					borderColor: ["#DCDFE6", 0, 3, 9],
					borderRadius: ["2", 0, 3, 9],
					backgroundColor: ["#ffffff", 0, 3, 9],
					zIndex: [1, 0, 3, 9],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": {
					backgroundColor: ["#F2F6FC", 0, 5, 14],
					borderColor: ["#DCDFE6", 0, 5, 14],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": {
					borderColor: ["#007aff", 0, 5, 17],
					backgroundColor: ["#007aff", 0, 5, 17],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked.is-disable ": { opacity: [0.4, 0, 6, 22] },
				".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": {
					backgroundColor: ["#F2F6FC", 0, 5, 26],
					borderColor: ["#DCDFE6", 0, 5, 26],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": {
					borderColor: ["#007aff", 0, 5, 30],
					backgroundColor: ["#007aff", 0, 5, 30],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--list.is-disable ": {
					backgroundColor: ["#F2F6FC", 0, 5, 44],
					borderColor: ["#DCDFE6", 0, 5, 44],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked ": {
					borderColor: ["#007aff", 0, 5, 46],
					backgroundColor: ["#007aff", 0, 5, 46],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked.is-disable ": { opacity: [0.4, 0, 6, 50] },
			},
			".checkbox__inner-icon": {
				".uni-data-checklist .checklist-group .checklist-box .checkbox__inner ": {
					position: ["absolute", 0, 4, 10],
					top: ["2", 0, 4, 10],
					left: ["5", 0, 4, 10],
					height: ["8", 0, 4, 10],
					width: ["4", 0, 4, 10],
					borderWidth: ["1", 0, 4, 10],
					borderStyle: ["solid", 0, 4, 10],
					borderColor: ["#ffffff", 0, 4, 10],
					borderLeftWidth: [0, 0, 4, 10],
					borderLeftStyle: ["solid", 0, 4, 10],
					borderLeftColor: ["#000000", 0, 4, 10],
					borderTopWidth: [0, 0, 4, 10],
					borderTopStyle: ["solid", 0, 4, 10],
					borderTopColor: ["#000000", 0, 4, 10],
					opacity: [0, 0, 4, 10],
					transformOrigin: ["center", 0, 4, 10],
					transform: ["rotate(40deg)", 0, 4, 10],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked .checkbox__inner ": {
					opacity: [1, 0, 6, 18],
					transform: ["rotate(45deg)", 0, 6, 18],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked .checkbox__inner ": {
					opacity: [1, 0, 6, 31],
					transform: ["rotate(45deg)", 0, 6, 31],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--list.is-checked .checkbox__inner ": {
					opacity: [1, 0, 6, 47],
					transform: ["rotate(45deg)", 0, 6, 47],
				},
			},
			".radio__inner": {
				".uni-data-checklist .checklist-group .checklist-box ": {
					justifyContent: ["center", 0, 3, 11],
					alignItems: ["center", 0, 3, 11],
					position: ["relative", 0, 3, 11],
					width: ["16", 0, 3, 11],
					height: ["16", 0, 3, 11],
					borderWidth: ["1", 0, 3, 11],
					borderStyle: ["solid", 0, 3, 11],
					borderColor: ["#DCDFE6", 0, 3, 11],
					borderRadius: ["16", 0, 3, 11],
					backgroundColor: ["#ffffff", 0, 3, 11],
					zIndex: [1, 0, 3, 11],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--default.is-disable ": {
					backgroundColor: ["#F2F6FC", 0, 5, 15],
					borderColor: ["#DCDFE6", 0, 5, 15],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked ": { borderColor: ["#007aff", 0, 5, 19] },
				".uni-data-checklist .checklist-group .checklist-box.is--button.is-disable ": {
					backgroundColor: ["#F2F6FC", 0, 5, 27],
					borderColor: ["#DCDFE6", 0, 5, 27],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked ": { borderColor: ["#007aff", 0, 5, 32] },
			},
			".radio__inner-icon": {
				".uni-data-checklist .checklist-group .checklist-box .radio__inner ": {
					width: ["8", 0, 4, 12],
					height: ["8", 0, 4, 12],
					borderRadius: ["10", 0, 4, 12],
					opacity: [0, 0, 4, 12],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--default.is-checked .radio__inner ": {
					opacity: [1, 0, 6, 20],
					backgroundColor: ["#007aff", 0, 6, 20],
				},
				".uni-data-checklist .checklist-group .checklist-box.is--button.is-checked .radio__inner ": {
					opacity: [1, 0, 6, 33],
					backgroundColor: ["#007aff", 0, 6, 33],
				},
			},
			"@VERSION": 2,
		};
	},
	196: function (e, t, n) {
		"use strict";
		var r = n(197),
			i = n.n(r);
		t.default = i.a;
	},
	197: function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
		t.default = {
			data: function () {
				return {
					formData: { value: 1, hobby: [1] },
					sex: [
						{ text: "\u7537", value: 0 },
						{ text: "\u5973", value: 1 },
						{ text: "\u672a\u77e5", value: 2 },
					],
					sex1: [
						{ text: "\u7537", value: 0 },
						{ text: "\u5973", value: 1, disable: !0 },
						{ text: "\u672a\u77e5", value: 2 },
					],
					hobby: [
						{ text: "\u8db3\u7403", value: 0 },
						{ text: "\u7bee\u7403", value: 1 },
						{ text: "\u6e38\u6cf3", value: 2 },
					],
					hobby2: [
						{ text: "\u8db3\u7403", value: 0, disable: !0 },
						{ text: "\u7bee\u7403", value: 1, disable: !0 },
						{ text: "\u6e38\u6cf3", value: 2 },
					],
				};
			},
			onLoad: function () {},
			onReady: function () {},
			methods: {},
		};
	},
	198: function (e, t) {
		e.exports = {
			".example": {
				"": {
					paddingTop: ["10", 0, 0, 9],
					paddingRight: ["10", 0, 0, 9],
					paddingBottom: ["10", 0, 0, 9],
					paddingLeft: ["10", 0, 0, 9],
					backgroundColor: ["#ffffff", 0, 0, 9],
				},
			},
			".example-info": {
				"": {
					paddingTop: ["15", 0, 0, 3],
					paddingRight: ["15", 0, 0, 3],
					paddingBottom: ["15", 0, 0, 3],
					paddingLeft: ["15", 0, 0, 3],
					color: ["#3b4144", 0, 0, 3],
					backgroundColor: ["#ffffff", 0, 0, 3],
					fontSize: ["14", 0, 0, 3],
					lineHeight: ["20", 0, 0, 3],
				},
			},
			".example-info-text": { "": { fontSize: ["14", 0, 0, 4], lineHeight: ["20", 0, 0, 4], color: ["#3b4144", 0, 0, 4] } },
			".example-body": {
				"": {
					flexDirection: ["column", 0, 0, 5],
					paddingTop: ["15", 0, 0, 5],
					paddingRight: ["15", 0, 0, 5],
					paddingBottom: ["15", 0, 0, 5],
					paddingLeft: ["15", 0, 0, 5],
					backgroundColor: ["#ffffff", 0, 0, 5],
				},
			},
			".word-btn-white": { "": { fontSize: ["18", 0, 0, 6], color: ["#FFFFFF", 0, 0, 6] } },
			".word-btn": {
				"": {
					flexDirection: ["row", 0, 0, 7],
					alignItems: ["center", 0, 0, 7],
					justifyContent: ["center", 0, 0, 7],
					borderRadius: ["6", 0, 0, 7],
					height: ["48", 0, 0, 7],
					marginTop: ["15", 0, 0, 7],
					marginRight: ["15", 0, 0, 7],
					marginBottom: ["15", 0, 0, 7],
					marginLeft: ["15", 0, 0, 7],
					backgroundColor: ["#007AFF", 0, 0, 7],
				},
			},
			".word-btn--hover": { "": { backgroundColor: ["#4ca2ff", 0, 0, 8] } },
			".text": { "": { fontSize: ["14", 0, 0, 10], color: ["#333333", 0, 0, 10], marginBottom: ["10", 0, 0, 10] } },
			"@VERSION": 2,
		};
	},
	2: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(3),
			i = n.n(r);
		for (var o in r)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return r[e];
					});
				})(o);
		t.default = i.a;
	},
	3: function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
		var r = {
			name: "UniSection",
			props: { type: { type: String, default: "" }, title: { type: String, default: "" }, subTitle: { type: String, default: "" } },
			data: function () {
				return {};
			},
			watch: {
				title: function (e) {
					uni.report && "" !== e && uni.report("title", e);
				},
			},
			methods: {
				onClick: function () {
					this.$emit("click");
				},
			},
		};
		t.default = r;
	},
	35: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(36),
			i = n.n(r);
		for (var o in r)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return r[e];
					});
				})(o);
		t.default = i.a;
	},
	36: function (e, t, n) {
		"use strict";
		var r;
		Object.defineProperty(t, "__esModule", { value: !0 }),
			(t.default = void 0),
			setTimeout(function () {
				r = uni.getSystemInfoSync().platform;
			}, 16);
		var i = {
			name: "UniLoadMore",
			props: {
				status: { type: String, default: "more" },
				showIcon: { type: Boolean, default: !0 },
				iconType: { type: String, default: "auto" },
				iconSize: { type: Number, default: 24 },
				color: { type: String, default: "#777777" },
				contentText: {
					type: Object,
					default: function () {
						return {
							contentdown: "\u4e0a\u62c9\u663e\u793a\u66f4\u591a",
							contentrefresh: "\u6b63\u5728\u52a0\u8f7d...",
							contentnomore: "\u6ca1\u6709\u66f4\u591a\u6570\u636e\u4e86",
						};
					},
				},
			},
			data: function () {
				return { webviewHide: !1, platform: r };
			},
			mounted: function () {
				var e = this,
					t = getCurrentPages(),
					n = t[t.length - 1].$getAppWebview();
				n.addEventListener("hide", function () {
					e.webviewHide = !0;
				}),
					n.addEventListener("show", function () {
						e.webviewHide = !1;
					});
			},
			methods: {
				onClick: function () {
					this.$emit("clickLoadMore", { detail: { status: this.status } });
				},
			},
		};
		t.default = i;
	},
	37: function (e, t) {
		e.exports = {
			".uni-load-more": {
				"": { flexDirection: ["row", 0, 0, 0], height: ["40", 0, 0, 0], alignItems: ["center", 0, 0, 0], justifyContent: ["center", 0, 0, 0] },
			},
			".uni-load-more__text": { "": { fontSize: ["15", 0, 0, 1] } },
			".uni-load-more__img": { "": { width: ["24", 0, 0, 2], height: ["24", 0, 0, 2], marginRight: ["8", 0, 0, 2] } },
			".uni-load-more__img--nvue": { "": { color: ["#666666", 0, 0, 3] } },
			".uni-load-more__img--android": { "": { width: ["24", 0, 0, 4], height: ["24", 0, 0, 4], transform: ["rotate(0deg)", 0, 0, 4] } },
			".uni-load-more__img--ios": { "": { width: ["24", 0, 0, 4], height: ["24", 0, 0, 4], transform: ["rotate(0deg)", 0, 0, 4] } },
			"@VERSION": 2,
		};
	},
	38: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(39),
			i = n.n(r);
		for (var o in r)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return r[e];
					});
				})(o);
		t.default = i.a;
	},
	39: function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
		var r = {
			name: "uniGroup",
			props: { title: { type: String, default: "" }, top: { type: [Number, String], default: 10 }, mode: { type: String, default: "default" } },
			data: function () {
				return { margin: !1, border: !1 };
			},
			watch: {
				title: function (e) {
					uni.report && "" !== e && uni.report("title", e);
				},
			},
			created: function () {
				(this.form = this.getForm()), this.form && ((this.margin = !0), (this.border = this.form.border));
			},
			methods: {
				getForm: function () {
					for (var e = this.$parent, t = e.$options.name; "uniForms" !== t; ) {
						if (!(e = e.$parent)) return !1;
						t = e.$options.name;
					}
					return e;
				},
				onClick: function () {
					this.$emit("click");
				},
			},
		};
		t.default = r;
	},
	4: function (e, t) {
		e.exports = {
			".uni-section": {
				"": {
					position: ["relative", 0, 0, 0],
					marginTop: ["10", 0, 0, 0],
					flexDirection: ["row", 0, 0, 0],
					alignItems: ["center", 0, 0, 0],
					paddingTop: [0, 0, 0, 0],
					paddingRight: ["10", 0, 0, 0],
					paddingBottom: [0, 0, 0, 0],
					paddingLeft: ["10", 0, 0, 0],
					height: ["50", 0, 0, 0],
					backgroundColor: ["#f8f8f8", 0, 0, 0],
					fontWeight: ["normal", 0, 0, 0],
				},
			},
			".uni-section__head": {
				"": { flexDirection: ["row", 0, 0, 1], justifyContent: ["center", 0, 0, 1], alignItems: ["center", 0, 0, 1], marginRight: ["10", 0, 0, 1] },
			},
			".line": { "": { height: ["15", 0, 0, 2], backgroundColor: ["#c0c0c0", 0, 0, 2], borderRadius: ["5", 0, 0, 2], width: ["3", 0, 0, 2] } },
			".circle": {
				"": {
					width: ["8", 0, 0, 3],
					height: ["8", 0, 0, 3],
					borderTopRightRadius: ["50", 0, 0, 3],
					borderTopLeftRadius: ["50", 0, 0, 3],
					borderBottomLeftRadius: ["50", 0, 0, 3],
					borderBottomRightRadius: ["50", 0, 0, 3],
					backgroundColor: ["#c0c0c0", 0, 0, 3],
				},
			},
			".uni-section__content": { "": { flexDirection: ["column", 0, 0, 4], flex: [1, 0, 0, 4], color: ["#333333", 0, 0, 4] } },
			".uni-section__content-title": { "": { fontSize: ["14", 0, 0, 5], color: ["#333333", 0, 0, 5] } },
			".distraction": { "": { flexDirection: ["row", 0, 0, 6], alignItems: ["center", 0, 0, 6] } },
			".uni-section__content-sub": { "": { fontSize: ["12", 0, 0, 7], color: ["#999999", 0, 0, 7] } },
			"@VERSION": 2,
		};
	},
	40: function (e, t) {
		e.exports = {
			".uni-group": { "": { backgroundColor: ["#ffffff", 0, 0, 0], marginTop: ["10", 0, 0, 0] } },
			".uni-group__title": {
				"": {
					flexDirection: ["row", 0, 0, 1],
					alignItems: ["center", 0, 0, 1],
					paddingLeft: ["15", 0, 0, 1],
					height: ["40", 0, 0, 1],
					backgroundColor: ["#f8f8f8", 0, 0, 1],
					fontWeight: ["normal", 0, 0, 1],
					color: ["#333333", 0, 0, 1],
				},
			},
			".uni-group__content": {
				"": { paddingTop: ["15", 0, 0, 2], paddingRight: ["15", 0, 0, 2], paddingBottom: ["15", 0, 0, 2], paddingLeft: ["15", 0, 0, 2] },
			},
			".group-conent-padding": { "": { paddingTop: [0, 0, 0, 3], paddingRight: ["15", 0, 0, 3], paddingBottom: [0, 0, 0, 3], paddingLeft: ["15", 0, 0, 3] } },
			".uni-group__title-text": { "": { fontSize: ["14", 0, 0, 4], color: ["#333333", 0, 0, 4] } },
			".distraction": { "": { flexDirection: ["row", 0, 0, 5], alignItems: ["center", 0, 0, 5] } },
			".uni-group--card": {
				"": {
					marginTop: ["10", 0, 0, 6],
					marginRight: ["10", 0, 0, 6],
					marginBottom: ["10", 0, 0, 6],
					marginLeft: ["10", 0, 0, 6],
					borderRadius: ["5", 0, 0, 6],
					overflow: ["hidden", 0, 0, 6],
					boxShadow: ["0 0 5px 1px rgba(0, 0, 0, 0.08)", 0, 0, 6],
				},
			},
			"@VERSION": 2,
		};
	},
	41: function (e, t, n) {
		"use strict";
		n.d(t, "b", function () {
			return r;
		}),
			n.d(t, "c", function () {
				return i;
			}),
			n.d(t, "a", function () {});
		var r = function () {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					"view",
					{ staticClass: ["uni-group"], class: ["uni-group--" + e.mode, e.margin ? "group-margin" : ""], style: { marginTop: e.top + "px" } },
					[
						e._t("title", [
							e.title
								? n("view", { staticClass: ["uni-group__title"], style: { "padding-left": e.border ? "30px" : "15px" } }, [
										n("u-text", { staticClass: ["uni-group__title-text"], appendAsTree: !0, attrs: { append: "tree" } }, [e._v(e._s(e.title))]),
								  ])
								: e._e(),
						]),
						n("view", { staticClass: ["uni-group__content"], class: { "group-conent-padding": e.border } }, [e._t("default")], 2),
					],
					2,
				);
			},
			i = [];
	},
	42: function (e, t, n) {
		"use strict";
		n.d(t, "b", function () {
			return r;
		}),
			n.d(t, "c", function () {
				return i;
			}),
			n.d(t, "a", function () {});
		var r = function () {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("view", { staticClass: ["uni-load-more"], on: { click: e.onClick } }, [
					!e.webviewHide && "loading" === e.status && e.showIcon
						? n("loading-indicator", {
								staticClass: ["uni-load-more__img", "uni-load-more__img--nvue"],
								style: { color: e.color, width: e.iconSize + "px", height: e.iconSize + "px" },
								attrs: { animating: !0 },
						  })
						: e._e(),
					n("u-text", { staticClass: ["uni-load-more__text"], style: { color: e.color }, appendAsTree: !0, attrs: { append: "tree" } }, [
						e._v(e._s("more" === e.status ? e.contentText.contentdown : "loading" === e.status ? e.contentText.contentrefresh : e.contentText.contentnomore)),
					]),
				]);
			},
			i = [];
	},
	430: function (e, t, n) {
		"use strict";
		n.d(t, "b", function () {
			return i;
		}),
			n.d(t, "c", function () {
				return o;
			}),
			n.d(t, "a", function () {
				return r;
			});
		var r = { uniSection: n(13).default, uniGroup: n(64).default, uniDataCheckbox: n(665).default },
			i = function () {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					n(
						"view",
						[
							n("u-text", { staticClass: ["example-info"], appendAsTree: !0, attrs: { append: "tree" } }, [
								e._v(
									" \u901a\u8fc7\u6570\u636e\u9a71\u52a8\u7684\u5355\u9009\u6846\u548c\u590d\u9009\u6846\uff0c\u53ef\u76f4\u63a5\u901a\u8fc7\u8fde\u63a5 uniCloud \u83b7\u53d6\u6570\u636e\uff0c\u540c\u65f6\u53ef\u4ee5\u914d\u5408\u8868\u5355\u7ec4\u4ef6 uni-forms \u4f7f\u7528",
								),
							]),
							n("uni-section", { attrs: { title: "\u591a\u9009", type: "line" } }),
							n(
								"uni-group",
								{ attrs: { title: "\u57fa\u7840\u7528\u6cd5" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(JSON.stringify(e.formData.hobby)))])]),
									n("uni-data-checkbox", {
										attrs: { multiple: !0, localdata: e.hobby },
										model: {
											value: e.formData.hobby,
											callback: function (t) {
												e.$set(e.formData, "hobby", t);
											},
											expression: "formData.hobby",
										},
									}),
								],
								1,
							),
							n(
								"uni-group",
								{ attrs: { title: "\u66f4\u591a\u6837\u5f0f-button" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(JSON.stringify(e.formData.hobby)))])]),
									n("uni-data-checkbox", {
										attrs: { mode: "button", multiple: !0, localdata: e.hobby },
										model: {
											value: e.formData.hobby,
											callback: function (t) {
												e.$set(e.formData, "hobby", t);
											},
											expression: "formData.hobby",
										},
									}),
								],
								1,
							),
							n(
								"uni-group",
								{ attrs: { title: "\u66f4\u591a\u6837\u5f0f-tag" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(JSON.stringify(e.formData.hobby)))])]),
									n("uni-data-checkbox", {
										attrs: { mode: "tag", multiple: !0, localdata: e.hobby },
										model: {
											value: e.formData.hobby,
											callback: function (t) {
												e.$set(e.formData, "hobby", t);
											},
											expression: "formData.hobby",
										},
									}),
								],
								1,
							),
							n(
								"uni-group",
								{ attrs: { title: "\u66f4\u591a\u6837\u5f0f-list" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(JSON.stringify(e.formData.hobby)))])]),
									n("uni-data-checkbox", {
										attrs: { mode: "list", multiple: !0, localdata: e.hobby },
										model: {
											value: e.formData.hobby,
											callback: function (t) {
												e.$set(e.formData, "hobby", t);
											},
											expression: "formData.hobby",
										},
									}),
								],
								1,
							),
							n(
								"uni-group",
								{ attrs: { title: "\u7981\u7528" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(JSON.stringify(e.formData.hobby)))])]),
									n("uni-data-checkbox", {
										attrs: { mode: "button", multiple: !0, localdata: e.hobby2 },
										model: {
											value: e.formData.hobby,
											callback: function (t) {
												e.$set(e.formData, "hobby", t);
											},
											expression: "formData.hobby",
										},
									}),
								],
								1,
							),
							n(
								"uni-group",
								{ attrs: { title: "\u6700\u5927\u6700\u5c0f\u503c" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(JSON.stringify(e.formData.hobby)))])]),
									n("uni-data-checkbox", {
										attrs: { min: "1", max: "2", multiple: !0, localdata: e.hobby },
										model: {
											value: e.formData.hobby,
											callback: function (t) {
												e.$set(e.formData, "hobby", t);
											},
											expression: "formData.hobby",
										},
									}),
								],
								1,
							),
							n(
								"uni-group",
								{ attrs: { title: "\u81ea\u5b9a\u4e49\u9ad8\u4eae\u989c\u8272" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(JSON.stringify(e.formData.hobby)))])]),
									n("uni-data-checkbox", {
										attrs: { selectedColor: "red", multiple: !0, localdata: e.hobby2 },
										model: {
											value: e.formData.hobby,
											callback: function (t) {
												e.$set(e.formData, "hobby", t);
											},
											expression: "formData.hobby",
										},
									}),
								],
								1,
							),
							n("uni-section", { attrs: { title: "\u5355\u9009", type: "line" } }),
							n(
								"uni-group",
								{ attrs: { title: "\u57fa\u7840\u7528\u6cd5" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(e.formData.value))])]),
									n("uni-data-checkbox", {
										attrs: { localdata: e.sex },
										model: {
											value: e.formData.value,
											callback: function (t) {
												e.$set(e.formData, "value", t);
											},
											expression: "formData.value",
										},
									}),
								],
								1,
							),
							n(
								"uni-group",
								{ attrs: { title: "\u66f4\u591a\u6837\u5f0f-button" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(e.formData.value))])]),
									n("uni-data-checkbox", {
										attrs: { mode: "button", localdata: e.sex },
										model: {
											value: e.formData.value,
											callback: function (t) {
												e.$set(e.formData, "value", t);
											},
											expression: "formData.value",
										},
									}),
								],
								1,
							),
							n(
								"uni-group",
								{ attrs: { title: "\u66f4\u591a\u6837\u5f0f-tag" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(e.formData.value))])]),
									n("uni-data-checkbox", {
										attrs: { mode: "tag", localdata: e.sex },
										model: {
											value: e.formData.value,
											callback: function (t) {
												e.$set(e.formData, "value", t);
											},
											expression: "formData.value",
										},
									}),
								],
								1,
							),
							n(
								"uni-group",
								{ attrs: { title: "\u66f4\u591a\u6837\u5f0f-list" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(e.formData.value))])]),
									n("uni-data-checkbox", {
										attrs: { mode: "list", icon: "right", localdata: e.sex },
										model: {
											value: e.formData.value,
											callback: function (t) {
												e.$set(e.formData, "value", t);
											},
											expression: "formData.value",
										},
									}),
								],
								1,
							),
							n(
								"uni-group",
								{ attrs: { title: "\u7981\u7528" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(e.formData.value))])]),
									n("uni-data-checkbox", {
										attrs: { mode: "button", localdata: e.sex1 },
										model: {
											value: e.formData.value,
											callback: function (t) {
												e.$set(e.formData, "value", t);
											},
											expression: "formData.value",
										},
									}),
								],
								1,
							),
							n(
								"uni-group",
								{ attrs: { title: "\u81ea\u5b9a\u4e49\u9ad8\u4eae\u989c\u8272" } },
								[
									n("view", { staticClass: ["text"] }, [n("u-text", [e._v("\u9009\u4e2d\uff1a" + e._s(e.formData.value))])]),
									n("uni-data-checkbox", {
										attrs: { selectedColor: "red", localdata: e.sex1 },
										model: {
											value: e.formData.value,
											callback: function (t) {
												e.$set(e.formData, "value", t);
											},
											expression: "formData.value",
										},
									}),
								],
								1,
							),
						],
						1,
					),
				]);
			},
			o = [];
	},
	5: function (e, t, n) {
		"use strict";
		n.d(t, "b", function () {
			return r;
		}),
			n.d(t, "c", function () {
				return i;
			}),
			n.d(t, "a", function () {});
		var r = function () {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					"view",
					{ staticClass: ["uni-section"], attrs: { nvue: !0 } },
					[
						e.type ? n("view", { staticClass: ["uni-section__head"] }, [n("view", { staticClass: ["uni-section__head-tag"], class: e.type })]) : e._e(),
						n("view", { staticClass: ["uni-section__content"] }, [
							n("u-text", { staticClass: ["uni-section__content-title"], class: { distraction: !e.subTitle }, appendAsTree: !0, attrs: { append: "tree" } }, [
								e._v(e._s(e.title)),
							]),
							e.subTitle
								? n("u-text", { staticClass: ["uni-section__content-sub"], appendAsTree: !0, attrs: { append: "tree" } }, [e._v(e._s(e.subTitle))])
								: e._e(),
						]),
						e._t("default"),
					],
					2,
				);
			},
			i = [];
	},
	517: function (e, t, n) {
		"use strict";
		n.d(t, "b", function () {
			return i;
		}),
			n.d(t, "c", function () {
				return o;
			}),
			n.d(t, "a", function () {
				return r;
			});
		var r = { uniLoadMore: n(60).default },
			i = function () {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n(
					"view",
					{ staticClass: ["uni-data-checklist"] },
					[
						e.isLocal
							? [
									e.multiple
										? n(
												"checkbox-group",
												{ staticClass: ["checklist-group"], class: { "is-list": "list" === e.mode || e.wrap }, on: { change: e.chagne } },
												e._l(e.dataList, function (t, r) {
													return n(
														"label",
														{
															key: r,
															staticClass: ["checklist-box"],
															class: [
																"is--" + e.mode,
																t.selected ? "is-checked" : "",
																e.disabled || t.disabled ? "is-disable" : "",
																0 !== r && "list" === e.mode ? "is-list-border" : "",
															],
															style: t.styleBackgroud,
														},
														[
															n("checkbox", {
																staticClass: ["hidden"],
																attrs: { hidden: !0, disabled: e.disabled || !!t.disabled, value: t.value + "", checked: t.selected },
															}),
															("tag" !== e.mode && "list" !== e.mode) || ("list" === e.mode && "left" === e.icon)
																? n("view", { staticClass: ["checkbox__inner"], style: t.styleIcon }, [n("view", { staticClass: ["checkbox__inner-icon"] })])
																: e._e(),
															n("view", { staticClass: ["checklist-content"], class: { "list-content": "list" === e.mode && "left" === e.icon } }, [
																n("u-text", { staticClass: ["checklist-text"], style: t.styleIconText, appendAsTree: !0, attrs: { append: "tree" } }, [
																	e._v(e._s(t.text)),
																]),
																"list" === e.mode && "right" === e.icon ? n("view", { staticClass: ["checkobx__list"], style: t.styleBackgroud }) : e._e(),
															]),
														],
														1,
													);
												}),
												1,
										  )
										: n(
												"radio-group",
												{ staticClass: ["checklist-group"], class: { "is-list": "list" === e.mode, "is-wrap": e.wrap }, on: { change: e.chagne } },
												e._l(e.dataList, function (t, r) {
													return n(
														"label",
														{
															key: r,
															staticClass: ["checklist-box"],
															class: [
																"is--" + e.mode,
																t.selected ? "is-checked" : "",
																e.disabled || t.disabled ? "is-disable" : "",
																0 !== r && "list" === e.mode ? "is-list-border" : "",
															],
															style: t.styleBackgroud,
														},
														[
															n("radio", {
																staticClass: ["hidden"],
																attrs: { hidden: !0, disabled: e.disabled || t.disabled, value: t.value + "", checked: t.selected },
															}),
															("tag" !== e.mode && "list" !== e.mode) || ("list" === e.mode && "left" === e.icon)
																? n("view", { staticClass: ["radio__inner"], style: t.styleBackgroud }, [
																		n("view", { staticClass: ["radio__inner-icon"], style: t.styleIcon }),
																  ])
																: e._e(),
															n("view", { staticClass: ["checklist-content"], class: { "list-content": "list" === e.mode && "left" === e.icon } }, [
																n("u-text", { staticClass: ["checklist-text"], style: t.styleIconText, appendAsTree: !0, attrs: { append: "tree" } }, [
																	e._v(e._s(t.text)),
																]),
																"list" === e.mode && "right" === e.icon ? n("view", { staticClass: ["checkobx__list"], style: t.styleRightIcon }) : e._e(),
															]),
														],
														1,
													);
												}),
												1,
										  ),
							  ]
							: [
									n(
										"view",
										{ staticClass: ["uni-data-loading"] },
										[
											e.mixinDatacomErrorMessage
												? n("u-text", { appendAsTree: !0, attrs: { append: "tree" } }, [e._v(e._s(e.mixinDatacomErrorMessage))])
												: n("uni-load-more", { attrs: { status: "loading", iconType: "snow", iconSize: 18, contentText: e.contentText } }),
										],
										1,
									),
							  ],
					],
					2,
				);
			},
			o = [];
	},
	534: function (e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
		var r,
			i = (r = n(59)) && r.__esModule ? r : { default: r },
			o = n(535);
		function a(e, t, n, r, i, o, a) {
			try {
				var s = e[o](a),
					c = s.value;
			} catch (e) {
				return void n(e);
			}
			s.done ? t(c) : Promise.resolve(c).then(r, i);
		}
		function s(e) {
			return function () {
				var t = this,
					n = arguments;
				return new Promise(function (r, i) {
					var o = e.apply(t, n);
					function s(e) {
						a(o, r, i, s, c, "next", e);
					}
					function c(e) {
						a(o, r, i, s, c, "throw", e);
					}
					s(void 0);
				});
			};
		}
		function c(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t &&
					(r = r.filter(function (t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable;
					})),
					n.push.apply(n, r);
			}
			return n;
		}
		function u(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2
					? c(Object(n), !0).forEach(function (t) {
							v(e, t, n[t]);
					  })
					: Object.getOwnPropertyDescriptors
					? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
					: c(Object(n)).forEach(function (t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
					  });
			}
			return e;
		}
		function l(e) {
			return (
				(function (e) {
					if (Array.isArray(e)) return d(e);
				})(e) ||
				(function (e) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
				})(e) ||
				h(e) ||
				(function () {
					throw new TypeError(
						"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
					);
				})()
			);
		}
		function f(e, t) {
			var n;
			if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (n = h(e)) || (t && e && "number" == typeof e.length)) {
					n && (e = n);
					var r = 0,
						i = function () {};
					return {
						s: i,
						n: function () {
							return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
						},
						e: function (e) {
							throw e;
						},
						f: i,
					};
				}
				throw new TypeError(
					"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
				);
			}
			var o,
				a = !0,
				s = !1;
			return {
				s: function () {
					n = e[Symbol.iterator]();
				},
				n: function () {
					var e = n.next();
					return (a = e.done), e;
				},
				e: function (e) {
					(s = !0), (o = e);
				},
				f: function () {
					try {
						a || null == n.return || n.return();
					} finally {
						if (s) throw o;
					}
				},
			};
		}
		function h(e, t) {
			if (e) {
				if ("string" == typeof e) return d(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return (
					"Object" === n && e.constructor && (n = e.constructor.name),
					"Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
				);
			}
		}
		function d(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r;
		}
		function p(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		function g(e, t, n) {
			return t && p(e.prototype, t), n && p(e, n), e;
		}
		function v(e, t, n) {
			return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
		}
		function y(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}
		function m(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
			(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && T(e, t);
		}
		function k(e) {
			var t = S();
			return function () {
				var n,
					r = C(e);
				if (t) {
					var i = C(this).constructor;
					n = Reflect.construct(r, arguments, i);
				} else n = r.apply(this, arguments);
				return _(this, n);
			};
		}
		function _(e, t) {
			return !t || ("object" != typeof t && "function" != typeof t) ? b(e) : t;
		}
		function b(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e;
		}
		function x(e) {
			var t = "function" == typeof Map ? new Map() : void 0;
			return (x = function (e) {
				if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
				var n;
				if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
				if (void 0 !== t) {
					if (t.has(e)) return t.get(e);
					t.set(e, r);
				}
				function r() {
					return w(e, arguments, C(this).constructor);
				}
				return (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), T(r, e);
			})(e);
		}
		function w(e, t, n) {
			return (w = S()
				? Reflect.construct
				: function (e, t, n) {
						var r = [null];
						r.push.apply(r, t);
						var i = new (Function.bind.apply(e, r))();
						return n && T(i, n.prototype), i;
				  }).apply(null, arguments);
		}
		function S() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
			} catch (e) {
				return !1;
			}
		}
		function T(e, t) {
			return (T =
				Object.setPrototypeOf ||
				function (e, t) {
					return (e.__proto__ = t), e;
				})(e, t);
		}
		function C(e) {
			return (C = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function (e) {
						return e.__proto__ || Object.getPrototypeOf(e);
				  })(e);
		}
		function I(e, t, n) {
			return (
				e(
					(n = {
						path: t,
						exports: {},
						require: function (e, t) {
							return (function () {
								throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
							})(null == t && n.path);
						},
					}),
					n.exports,
				),
				n.exports
			);
		}
		"undefined" != typeof globalThis
			? globalThis
			: "undefined" != typeof window
			? window
			: "undefined" != typeof global
			? global
			: "undefined" != typeof self && self;
		var D = I(function (e, t) {
				var n;
				e.exports = n =
					n ||
					(function (e, t) {
						var n =
								Object.create ||
								(function () {
									function e() {}
									return function (t) {
										var n;
										return (e.prototype = t), (n = new e()), (e.prototype = null), n;
									};
								})(),
							r = {},
							i = (r.lib = {}),
							o = (i.Base = {
								extend: function (e) {
									var t = n(this);
									return (
										e && t.mixIn(e),
										(t.hasOwnProperty("init") && this.init !== t.init) ||
											(t.init = function () {
												t.$super.init.apply(this, arguments);
											}),
										(t.init.prototype = t),
										(t.$super = this),
										t
									);
								},
								create: function () {
									var e = this.extend();
									return e.init.apply(e, arguments), e;
								},
								init: function () {},
								mixIn: function (e) {
									for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
									e.hasOwnProperty("toString") && (this.toString = e.toString);
								},
								clone: function () {
									return this.init.prototype.extend(this);
								},
							}),
							a = (i.WordArray = o.extend({
								init: function (e, t) {
									(e = this.words = e || []), (this.sigBytes = null != t ? t : 4 * e.length);
								},
								toString: function (e) {
									return (e || c).stringify(this);
								},
								concat: function (e) {
									var t = this.words,
										n = e.words,
										r = this.sigBytes,
										i = e.sigBytes;
									if ((this.clamp(), r % 4))
										for (var o = 0; o < i; o++) {
											var a = (n[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
											t[(r + o) >>> 2] |= a << (24 - ((r + o) % 4) * 8);
										}
									else for (o = 0; o < i; o += 4) t[(r + o) >>> 2] = n[o >>> 2];
									return (this.sigBytes += i), this;
								},
								clamp: function () {
									var t = this.words,
										n = this.sigBytes;
									(t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)), (t.length = e.ceil(n / 4));
								},
								clone: function () {
									var e = o.clone.call(this);
									return (e.words = this.words.slice(0)), e;
								},
								random: function (t) {
									for (
										var n,
											r = [],
											i = function (t) {
												t = t;
												var n = 987654321,
													r = 4294967295;
												return function () {
													var i = (((n = (36969 * (65535 & n) + (n >> 16)) & r) << 16) + (t = (18e3 * (65535 & t) + (t >> 16)) & r)) & r;
													return (i /= 4294967296), (i += 0.5) * (e.random() > 0.5 ? 1 : -1);
												};
											},
											o = 0;
										o < t;
										o += 4
									) {
										var s = i(4294967296 * (n || e.random()));
										(n = 987654071 * s()), r.push((4294967296 * s()) | 0);
									}
									return new a.init(r, t);
								},
							})),
							s = (r.enc = {}),
							c = (s.Hex = {
								stringify: function (e) {
									for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
										var o = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
										r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16));
									}
									return r.join("");
								},
								parse: function (e) {
									for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << (24 - (r % 8) * 4);
									return new a.init(n, t / 2);
								},
							}),
							u = (s.Latin1 = {
								stringify: function (e) {
									for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
										var o = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
										r.push(String.fromCharCode(o));
									}
									return r.join("");
								},
								parse: function (e) {
									for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << (24 - (r % 4) * 8);
									return new a.init(n, t);
								},
							}),
							l = (s.Utf8 = {
								stringify: function (e) {
									try {
										return decodeURIComponent(escape(u.stringify(e)));
									} catch (e) {
										throw new Error("Malformed UTF-8 data");
									}
								},
								parse: function (e) {
									return u.parse(unescape(encodeURIComponent(e)));
								},
							}),
							f = (i.BufferedBlockAlgorithm = o.extend({
								reset: function () {
									(this._data = new a.init()), (this._nDataBytes = 0);
								},
								_append: function (e) {
									"string" == typeof e && (e = l.parse(e)), this._data.concat(e), (this._nDataBytes += e.sigBytes);
								},
								_process: function (t) {
									var n = this._data,
										r = n.words,
										i = n.sigBytes,
										o = this.blockSize,
										s = i / (4 * o),
										c = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * o,
										u = e.min(4 * c, i);
									if (c) {
										for (var l = 0; l < c; l += o) this._doProcessBlock(r, l);
										var f = r.splice(0, c);
										n.sigBytes -= u;
									}
									return new a.init(f, u);
								},
								clone: function () {
									var e = o.clone.call(this);
									return (e._data = this._data.clone()), e;
								},
								_minBufferSize: 0,
							})),
							h =
								((i.Hasher = f.extend({
									cfg: o.extend(),
									init: function (e) {
										(this.cfg = this.cfg.extend(e)), this.reset();
									},
									reset: function () {
										f.reset.call(this), this._doReset();
									},
									update: function (e) {
										return this._append(e), this._process(), this;
									},
									finalize: function (e) {
										return e && this._append(e), this._doFinalize();
									},
									blockSize: 16,
									_createHelper: function (e) {
										return function (t, n) {
											return new e.init(n).finalize(t);
										};
									},
									_createHmacHelper: function (e) {
										return function (t, n) {
											return new h.HMAC.init(e, n).finalize(t);
										};
									},
								})),
								(r.algo = {}));
						return r;
					})(Math);
			}),
			O =
				(I(function (e, t) {
					var n;
					e.exports =
						((n = D),
						(function (e) {
							var t = n,
								r = t.lib,
								i = r.WordArray,
								o = r.Hasher,
								a = t.algo,
								s = [];
							!(function () {
								for (var t = 0; t < 64; t++) s[t] = (4294967296 * e.abs(e.sin(t + 1))) | 0;
							})();
							var c = (a.MD5 = o.extend({
								_doReset: function () {
									this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878]);
								},
								_doProcessBlock: function (e, t) {
									for (var n = 0; n < 16; n++) {
										var r = t + n,
											i = e[r];
										e[r] = (16711935 & ((i << 8) | (i >>> 24))) | (4278255360 & ((i << 24) | (i >>> 8)));
									}
									var o = this._hash.words,
										a = e[t + 0],
										c = e[t + 1],
										d = e[t + 2],
										p = e[t + 3],
										g = e[t + 4],
										v = e[t + 5],
										y = e[t + 6],
										m = e[t + 7],
										k = e[t + 8],
										_ = e[t + 9],
										b = e[t + 10],
										x = e[t + 11],
										w = e[t + 12],
										S = e[t + 13],
										T = e[t + 14],
										C = e[t + 15],
										I = o[0],
										D = o[1],
										O = o[2],
										A = o[3];
									(I = u(I, D, O, A, a, 7, s[0])),
										(A = u(A, I, D, O, c, 12, s[1])),
										(O = u(O, A, I, D, d, 17, s[2])),
										(D = u(D, O, A, I, p, 22, s[3])),
										(I = u(I, D, O, A, g, 7, s[4])),
										(A = u(A, I, D, O, v, 12, s[5])),
										(O = u(O, A, I, D, y, 17, s[6])),
										(D = u(D, O, A, I, m, 22, s[7])),
										(I = u(I, D, O, A, k, 7, s[8])),
										(A = u(A, I, D, O, _, 12, s[9])),
										(O = u(O, A, I, D, b, 17, s[10])),
										(D = u(D, O, A, I, x, 22, s[11])),
										(I = u(I, D, O, A, w, 7, s[12])),
										(A = u(A, I, D, O, S, 12, s[13])),
										(O = u(O, A, I, D, T, 17, s[14])),
										(I = l(I, (D = u(D, O, A, I, C, 22, s[15])), O, A, c, 5, s[16])),
										(A = l(A, I, D, O, y, 9, s[17])),
										(O = l(O, A, I, D, x, 14, s[18])),
										(D = l(D, O, A, I, a, 20, s[19])),
										(I = l(I, D, O, A, v, 5, s[20])),
										(A = l(A, I, D, O, b, 9, s[21])),
										(O = l(O, A, I, D, C, 14, s[22])),
										(D = l(D, O, A, I, g, 20, s[23])),
										(I = l(I, D, O, A, _, 5, s[24])),
										(A = l(A, I, D, O, T, 9, s[25])),
										(O = l(O, A, I, D, p, 14, s[26])),
										(D = l(D, O, A, I, k, 20, s[27])),
										(I = l(I, D, O, A, S, 5, s[28])),
										(A = l(A, I, D, O, d, 9, s[29])),
										(O = l(O, A, I, D, m, 14, s[30])),
										(I = f(I, (D = l(D, O, A, I, w, 20, s[31])), O, A, v, 4, s[32])),
										(A = f(A, I, D, O, k, 11, s[33])),
										(O = f(O, A, I, D, x, 16, s[34])),
										(D = f(D, O, A, I, T, 23, s[35])),
										(I = f(I, D, O, A, c, 4, s[36])),
										(A = f(A, I, D, O, g, 11, s[37])),
										(O = f(O, A, I, D, m, 16, s[38])),
										(D = f(D, O, A, I, b, 23, s[39])),
										(I = f(I, D, O, A, S, 4, s[40])),
										(A = f(A, I, D, O, a, 11, s[41])),
										(O = f(O, A, I, D, p, 16, s[42])),
										(D = f(D, O, A, I, y, 23, s[43])),
										(I = f(I, D, O, A, _, 4, s[44])),
										(A = f(A, I, D, O, w, 11, s[45])),
										(O = f(O, A, I, D, C, 16, s[46])),
										(I = h(I, (D = f(D, O, A, I, d, 23, s[47])), O, A, a, 6, s[48])),
										(A = h(A, I, D, O, m, 10, s[49])),
										(O = h(O, A, I, D, T, 15, s[50])),
										(D = h(D, O, A, I, v, 21, s[51])),
										(I = h(I, D, O, A, w, 6, s[52])),
										(A = h(A, I, D, O, p, 10, s[53])),
										(O = h(O, A, I, D, b, 15, s[54])),
										(D = h(D, O, A, I, c, 21, s[55])),
										(I = h(I, D, O, A, k, 6, s[56])),
										(A = h(A, I, D, O, C, 10, s[57])),
										(O = h(O, A, I, D, y, 15, s[58])),
										(D = h(D, O, A, I, S, 21, s[59])),
										(I = h(I, D, O, A, g, 6, s[60])),
										(A = h(A, I, D, O, x, 10, s[61])),
										(O = h(O, A, I, D, d, 15, s[62])),
										(D = h(D, O, A, I, _, 21, s[63])),
										(o[0] = (o[0] + I) | 0),
										(o[1] = (o[1] + D) | 0),
										(o[2] = (o[2] + O) | 0),
										(o[3] = (o[3] + A) | 0);
								},
								_doFinalize: function () {
									var t = this._data,
										n = t.words,
										r = 8 * this._nDataBytes,
										i = 8 * t.sigBytes;
									n[i >>> 5] |= 128 << (24 - (i % 32));
									var o = e.floor(r / 4294967296),
										a = r;
									(n[15 + (((i + 64) >>> 9) << 4)] = (16711935 & ((o << 8) | (o >>> 24))) | (4278255360 & ((o << 24) | (o >>> 8)))),
										(n[14 + (((i + 64) >>> 9) << 4)] = (16711935 & ((a << 8) | (a >>> 24))) | (4278255360 & ((a << 24) | (a >>> 8)))),
										(t.sigBytes = 4 * (n.length + 1)),
										this._process();
									for (var s = this._hash, c = s.words, u = 0; u < 4; u++) {
										var l = c[u];
										c[u] = (16711935 & ((l << 8) | (l >>> 24))) | (4278255360 & ((l << 24) | (l >>> 8)));
									}
									return s;
								},
								clone: function () {
									var e = o.clone.call(this);
									return (e._hash = this._hash.clone()), e;
								},
							}));
							function u(e, t, n, r, i, o, a) {
								var s = e + ((t & n) | (~t & r)) + i + a;
								return ((s << o) | (s >>> (32 - o))) + t;
							}
							function l(e, t, n, r, i, o, a) {
								var s = e + ((t & r) | (n & ~r)) + i + a;
								return ((s << o) | (s >>> (32 - o))) + t;
							}
							function f(e, t, n, r, i, o, a) {
								var s = e + (t ^ n ^ r) + i + a;
								return ((s << o) | (s >>> (32 - o))) + t;
							}
							function h(e, t, n, r, i, o, a) {
								var s = e + (n ^ (t | ~r)) + i + a;
								return ((s << o) | (s >>> (32 - o))) + t;
							}
							(t.MD5 = o._createHelper(c)), (t.HmacMD5 = o._createHmacHelper(c));
						})(Math),
						n.MD5);
				}),
				I(function (e, t) {
					var n, r, i;
					e.exports =
						((r = (n = D).lib.Base),
						(i = n.enc.Utf8),
						void (n.algo.HMAC = r.extend({
							init: function (e, t) {
								(e = this._hasher = new e.init()), "string" == typeof t && (t = i.parse(t));
								var n = e.blockSize,
									r = 4 * n;
								t.sigBytes > r && (t = e.finalize(t)), t.clamp();
								for (var o = (this._oKey = t.clone()), a = (this._iKey = t.clone()), s = o.words, c = a.words, u = 0; u < n; u++)
									(s[u] ^= 1549556828), (c[u] ^= 909522486);
								(o.sigBytes = a.sigBytes = r), this.reset();
							},
							reset: function () {
								var e = this._hasher;
								e.reset(), e.update(this._iKey);
							},
							update: function (e) {
								return this._hasher.update(e), this;
							},
							finalize: function (e) {
								var t = this._hasher,
									n = t.finalize(e);
								return t.reset(), t.finalize(this._oKey.clone().concat(n));
							},
						})));
				}),
				I(function (e, t) {
					e.exports = D.HmacMD5;
				}));
		function A(e) {
			return function (t) {
				if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);
				e.call(this, t).then(
					function (e) {
						t.success && t.success(e), t.complete && t.complete(e);
					},
					function (e) {
						t.fail && t.fail(e), t.complete && t.complete(e);
					},
				);
			};
		}
		var E,
			P,
			L,
			U = (function (e) {
				m(n, e);
				var t = k(n);
				function n(e) {
					var r;
					return (
						y(this, n),
						((r = t.call(this, e.message)).errMsg = e.message || ""),
						Object.defineProperties(b(r), {
							code: {
								get: function () {
									return e.code;
								},
							},
							requestId: {
								get: function () {
									return e.requestId;
								},
							},
							message: {
								get: function () {
									return this.errMsg;
								},
								set: function (e) {
									this.errMsg = e;
								},
							},
						}),
						r
					);
				}
				return n;
			})(x(Error)),
			F = (0, o.initVueI18n)(
				{
					"zh-Hans": {
						"uniCloud.init.paramRequired": "\u7f3a\u5c11\u53c2\u6570\uff1a{param}",
						"uniCloud.uploadFile.fileError": "filePath\u5e94\u4e3aFile\u5bf9\u8c61",
					},
					"zh-Hant": {
						"uniCloud.init.paramRequired": "\u7f3a\u5c11\u53c2\u6570\uff1a{param}",
						"uniCloud.uploadFile.fileError": "filePath\u5e94\u4e3aFile\u5bf9\u8c61",
					},
					en: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" },
					fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" },
					es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" },
				},
				"zh-Hans",
			),
			R = F.t,
			j = (F.setLocale, F.getLocale);
		try {
			E = n(62).default || n(62);
		} catch (V) {
			E = { appid: "" };
		}
		function N() {
			for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8, t = ""; t.length < e; ) t += Math.random().toString(32).substring(2);
			return t.substring(0, e);
		}
		function q() {
			var e = uni.getSystemInfoSync().deviceId;
			return { PLATFORM: "app-plus", OS: L, APPID: E.appid, LOCALE: j(), DEVICEID: e, CLIENT_SDK_VERSION: "1.0.1" };
		}
		function M() {
			if ("n" === $()) {
				try {
					P = plus.runtime.getDCloudId();
				} catch (e) {
					P = "";
				}
				return P;
			}
			return P || ((P = N(32)), uni.setStorage({ key: "__DC_CLOUD_UUID", data: P })), P;
		}
		function $() {
			var e;
			return ((e = { "app-plus": "n", h5: "h5", "mp-weixin": "wx" }),
			v(e, ["y", "a", "p", "mp-ali"].reverse().join(""), "ali"),
			v(e, "mp-baidu", "bd"),
			v(e, "mp-toutiao", "tt"),
			v(e, "mp-qq", "qq"),
			v(e, "quickapp-native", "qn"),
			e)["app-plus"];
		}
		var B,
			V,
			K = function (e, t) {
				var n = "";
				return (
					Object.keys(e)
						.sort()
						.forEach(function (t) {
							e[t] && (n = n + "&" + t + "=" + e[t]);
						}),
					(n = n.slice(1)),
					O(n, t).toString()
				);
			},
			H = function (e, t) {
				return new Promise(function (n, r) {
					t(
						Object.assign(e, {
							complete: function (e) {
								e || (e = {});
								var t = (e.data && e.data.header && e.data.header["x-serverless-request-id"]) || (e.header && e.header["request-id"]);
								if (!e.statusCode || e.statusCode >= 400) return r(new U({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));
								var i = e.data;
								if (i.error) return r(new U({ code: i.error.code, message: i.error.message, requestId: t }));
								(i.result = i.data), (i.requestId = t), delete i.data, n(i);
							},
						}),
					);
				});
			},
			W = {
				request: function (e) {
					return uni.request(e);
				},
				uploadFile: function (e) {
					return uni.uploadFile(e);
				},
				setStorageSync: function (e, t) {
					return uni.setStorageSync(e, t);
				},
				getStorageSync: function (e) {
					return uni.getStorageSync(e);
				},
				removeStorageSync: function (e) {
					return uni.removeStorageSync(e);
				},
				clearStorageSync: function () {
					return uni.clearStorageSync();
				},
			},
			z = (function () {
				function e(t) {
					y(this, e),
						["spaceId", "clientSecret"].forEach(function (e) {
							if (!Object.prototype.hasOwnProperty.call(t, e)) throw new Error(R("uniCloud.init.paramRequired", { param: e }));
						}),
						(this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, t)),
						(this.config.provider = "aliyun"),
						(this.config.requestUrl = this.config.endpoint + "/client"),
						(this.config.envType = this.config.envType || "public"),
						(this.config.accessTokenKey = "access_token_" + this.config.spaceId),
						(this.adapter = W);
				}
				return (
					g(e, [
						{
							key: "setAccessToken",
							value: function (e) {
								this.accessToken = e;
							},
						},
						{
							key: "requestWrapped",
							value: function (e) {
								return H(e, this.adapter.request);
							},
						},
						{
							key: "requestAuth",
							value: function (e) {
								return this.requestWrapped(e);
							},
						},
						{
							key: "request",
							value: function (e, t) {
								var n = this;
								return Promise.resolve().then(function () {
									return n.hasAccessToken
										? t
											? n.requestWrapped(e)
											: n.requestWrapped(e).catch(function (t) {
													return new Promise(function (e, n) {
														!t || ("GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code) ? n(t) : e();
													})
														.then(function () {
															return n.getAccessToken();
														})
														.then(function () {
															var t = n.rebuildRequest(e);
															return n.request(t, !0);
														});
											  })
										: n.getAccessToken().then(function () {
												var t = n.rebuildRequest(e);
												return n.request(t, !0);
										  });
								});
							},
						},
						{
							key: "rebuildRequest",
							value: function (e) {
								var t = Object.assign({}, e);
								return (
									(t.data.token = this.accessToken),
									(t.header["x-basement-token"] = this.accessToken),
									(t.header["x-serverless-sign"] = K(t.data, this.config.clientSecret)),
									t
								);
							},
						},
						{
							key: "setupRequest",
							value: function (e, t) {
								var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),
									r = { "Content-Type": "application/json" };
								return (
									"auth" !== t && ((n.token = this.accessToken), (r["x-basement-token"] = this.accessToken)),
									(r["x-serverless-sign"] = K(n, this.config.clientSecret)),
									{ url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: r }
								);
							},
						},
						{
							key: "getAccessToken",
							value: function () {
								var e = this;
								return this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (t) {
									return new Promise(function (n, r) {
										t.result && t.result.accessToken
											? (e.setAccessToken(t.result.accessToken), n(e.accessToken))
											: r(new U({ code: "AUTH_FAILED", message: "\u83b7\u53d6accessToken\u5931\u8d25" }));
									});
								});
							},
						},
						{
							key: "authorize",
							value: function () {
								this.getAccessToken();
							},
						},
						{
							key: "callFunction",
							value: function (e) {
								var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
								return this.request(this.setupRequest(t));
							},
						},
						{
							key: "getOSSUploadOptionsFromPath",
							value: function (e) {
								var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
								return this.request(this.setupRequest(t));
							},
						},
						{
							key: "uploadFileToOSS",
							value: function (e) {
								var t = this,
									n = e.url,
									r = e.formData,
									i = e.name,
									o = e.filePath,
									a = e.fileType,
									s = e.onUploadProgress;
								return new Promise(function (e, c) {
									var u = t.adapter.uploadFile({
										url: n,
										formData: r,
										name: i,
										filePath: o,
										fileType: a,
										header: { "X-OSS-server-side-encrpytion": "AES256" },
										success: function (t) {
											t && t.statusCode < 400 ? e(t) : c(new U({ code: "UPLOAD_FAILED", message: "\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25" }));
										},
										fail: function (e) {
											c(new U({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25" }));
										},
									});
									"function" == typeof s &&
										u &&
										"function" == typeof u.onProgressUpdate &&
										u.onProgressUpdate(function (e) {
											s({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });
										});
								});
							},
						},
						{
							key: "reportOSSUpload",
							value: function (e) {
								var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
								return this.request(this.setupRequest(t));
							},
						},
						{
							key: "uploadFile",
							value: function (e) {
								var t = this,
									n = e.filePath,
									r = e.cloudPath,
									i = e.fileType,
									o = void 0 === i ? "image" : i,
									a = e.onUploadProgress,
									s = e.config;
								if (!r) throw new U({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4e0d\u53ef\u4e3a\u7a7a" });
								var c,
									u,
									l = (s && s.envType) || this.config.envType;
								return this.getOSSUploadOptionsFromPath({ env: l, filename: r })
									.then(function (e) {
										var r = e.result;
										(c = r.id), (u = "https://" + r.cdnDomain + "/" + r.ossPath);
										var i = {
											url: "https://" + r.host,
											formData: {
												"Cache-Control": "max-age=2592000",
												"Content-Disposition": "attachment",
												OSSAccessKeyId: r.accessKeyId,
												Signature: r.signature,
												host: r.host,
												id: c,
												key: r.ossPath,
												policy: r.policy,
												success_action_status: 200,
											},
											fileName: "file",
											name: "file",
											filePath: n,
											fileType: o,
										};
										return t.uploadFileToOSS(Object.assign({}, i, { onUploadProgress: a }));
									})
									.then(function () {
										return t.reportOSSUpload({ id: c });
									})
									.then(function (e) {
										return new Promise(function (t, r) {
											e.success
												? t({ success: !0, filePath: n, fileID: u })
												: r(new U({ code: "UPLOAD_FAILED", message: "\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25" }));
										});
									});
							},
						},
						{
							key: "deleteFile",
							value: function (e) {
								var t = e.fileList,
									n = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: t[0] }) };
								return this.request(this.setupRequest(n));
							},
						},
						{
							key: "getTempFileURL",
							value: function () {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									t = e.fileList;
								return new Promise(function (e, n) {
									(Array.isArray(t) && 0 !== t.length) ||
										n(new U({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7d20\u5fc5\u987b\u662f\u975e\u7a7a\u7684\u5b57\u7b26\u4e32" })),
										e({
											fileList: t.map(function (e) {
												return { fileID: e, tempFileURL: e };
											}),
										});
								});
							},
						},
						{
							key: "hasAccessToken",
							get: function () {
								return !!this.accessToken;
							},
						},
					]),
					e
				);
			})(),
			J = function (e) {
				var t = new z(e);
				["deleteFile", "getTempFileURL"].forEach(function (e) {
					t[e] = A(t[e]).bind(t);
				});
				var n = {
					signInAnonymously: function () {
						return t.authorize();
					},
					getLoginState: function () {
						return Promise.resolve(!1);
					},
				};
				return (
					(t.auth = function () {
						return n;
					}),
					(t.customAuth = t.auth),
					t
				);
			},
			G = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
		((V = B || (B = {})).local = "local"), (V.none = "none"), (V.session = "session");
		var X = function () {};
		I(function (e, t) {
			var n;
			e.exports =
				((n = D),
				(function (e) {
					var t = n,
						r = t.lib,
						i = r.WordArray,
						o = r.Hasher,
						a = t.algo,
						s = [],
						c = [];
					!(function () {
						function t(t) {
							for (var n = e.sqrt(t), r = 2; r <= n; r++) if (!(t % r)) return !1;
							return !0;
						}
						function n(e) {
							return (4294967296 * (e - (0 | e))) | 0;
						}
						for (var r = 2, i = 0; i < 64; ) t(r) && (i < 8 && (s[i] = n(e.pow(r, 0.5))), (c[i] = n(e.pow(r, 1 / 3))), i++), r++;
					})();
					var u = [],
						l = (a.SHA256 = o.extend({
							_doReset: function () {
								this._hash = new i.init(s.slice(0));
							},
							_doProcessBlock: function (e, t) {
								for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], a = n[3], s = n[4], l = n[5], f = n[6], h = n[7], d = 0; d < 64; d++) {
									if (d < 16) u[d] = 0 | e[t + d];
									else {
										var p = u[d - 15],
											g = ((p << 25) | (p >>> 7)) ^ ((p << 14) | (p >>> 18)) ^ (p >>> 3),
											v = u[d - 2],
											y = ((v << 15) | (v >>> 17)) ^ ((v << 13) | (v >>> 19)) ^ (v >>> 10);
										u[d] = g + u[d - 7] + y + u[d - 16];
									}
									var m = (r & i) ^ (r & o) ^ (i & o),
										k = ((r << 30) | (r >>> 2)) ^ ((r << 19) | (r >>> 13)) ^ ((r << 10) | (r >>> 22)),
										_ = h + (((s << 26) | (s >>> 6)) ^ ((s << 21) | (s >>> 11)) ^ ((s << 7) | (s >>> 25))) + ((s & l) ^ (~s & f)) + c[d] + u[d];
									(h = f), (f = l), (l = s), (s = (a + _) | 0), (a = o), (o = i), (i = r), (r = (_ + (k + m)) | 0);
								}
								(n[0] = (n[0] + r) | 0),
									(n[1] = (n[1] + i) | 0),
									(n[2] = (n[2] + o) | 0),
									(n[3] = (n[3] + a) | 0),
									(n[4] = (n[4] + s) | 0),
									(n[5] = (n[5] + l) | 0),
									(n[6] = (n[6] + f) | 0),
									(n[7] = (n[7] + h) | 0);
							},
							_doFinalize: function () {
								var t = this._data,
									n = t.words,
									r = 8 * this._nDataBytes,
									i = 8 * t.sigBytes;
								return (
									(n[i >>> 5] |= 128 << (24 - (i % 32))),
									(n[14 + (((i + 64) >>> 9) << 4)] = e.floor(r / 4294967296)),
									(n[15 + (((i + 64) >>> 9) << 4)] = r),
									(t.sigBytes = 4 * n.length),
									this._process(),
									this._hash
								);
							},
							clone: function () {
								var e = o.clone.call(this);
								return (e._hash = this._hash.clone()), e;
							},
						}));
					(t.SHA256 = o._createHelper(l)), (t.HmacSHA256 = o._createHmacHelper(l));
				})(Math),
				n.SHA256);
		}),
			I(function (e, t) {
				e.exports = D.HmacSHA256;
			}),
			I(function (e, t) {
				var n, r, i;
				e.exports =
					((r = (n = i = D).lib.WordArray),
					(n.enc.Base64 = {
						stringify: function (e) {
							var t = e.words,
								n = e.sigBytes,
								r = this._map;
							e.clamp();
							for (var i = [], o = 0; o < n; o += 3)
								for (
									var a =
											(((t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255) << 16) |
											(((t[(o + 1) >>> 2] >>> (24 - ((o + 1) % 4) * 8)) & 255) << 8) |
											((t[(o + 2) >>> 2] >>> (24 - ((o + 2) % 4) * 8)) & 255),
										s = 0;
									s < 4 && o + 0.75 * s < n;
									s++
								)
									i.push(r.charAt((a >>> (6 * (3 - s))) & 63));
							var c = r.charAt(64);
							if (c) for (; i.length % 4; ) i.push(c);
							return i.join("");
						},
						parse: function (e) {
							var t = e.length,
								n = this._map,
								i = this._reverseMap;
							if (!i) {
								i = this._reverseMap = [];
								for (var o = 0; o < n.length; o++) i[n.charCodeAt(o)] = o;
							}
							var a = n.charAt(64);
							if (a) {
								var s = e.indexOf(a);
								-1 !== s && (t = s);
							}
							return (function (e, t, n) {
								for (var i = [], o = 0, a = 0; a < t; a++)
									if (a % 4) {
										var s = n[e.charCodeAt(a - 1)] << ((a % 4) * 2),
											c = n[e.charCodeAt(a)] >>> (6 - (a % 4) * 2);
										(i[o >>> 2] |= (s | c) << (24 - (o % 4) * 8)), o++;
									}
								return r.create(i, o);
							})(e, t, i);
						},
						_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
					}),
					i.enc.Base64);
			}),
			I(function (e, t) {
				e.exports = D.enc.Utf8;
			});
		var Y,
			Q = function () {
				var e;
				if (!Promise) {
					(e = function () {}).promise = {};
					var t = function () {
						throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');
					};
					return Object.defineProperty(e.promise, "then", { get: t }), Object.defineProperty(e.promise, "catch", { get: t }), e;
				}
				var n = new Promise(function (t, n) {
					e = function (e, r) {
						return e ? n(e) : t(r);
					};
				});
				return (e.promise = n), e;
			};
		function Z(e) {
			return void 0 === e;
		}
		function ee(e) {
			return "[object Null]" === Object.prototype.toString.call(e);
		}
		!(function (e) {
			(e.WEB = "web"), (e.WX_MP = "wx_mp");
		})(Y || (Y = {}));
		var te = { adapter: null, runtime: void 0 },
			ne = ["anonymousUuidKey"],
			re = (function (e) {
				m(n, e);
				var t = k(n);
				function n() {
					var e;
					return y(this, n), (e = t.call(this)), te.adapter.root.tcbObject || (te.adapter.root.tcbObject = {}), e;
				}
				return (
					g(n, [
						{
							key: "setItem",
							value: function (e, t) {
								te.adapter.root.tcbObject[e] = t;
							},
						},
						{
							key: "getItem",
							value: function (e) {
								return te.adapter.root.tcbObject[e];
							},
						},
						{
							key: "removeItem",
							value: function (e) {
								delete te.adapter.root.tcbObject[e];
							},
						},
						{
							key: "clear",
							value: function () {
								delete te.adapter.root.tcbObject;
							},
						},
					]),
					n
				);
			})(X);
		function ie(e, t) {
			switch (e) {
				case "local":
					return t.localStorage || new re();
				case "none":
					return new re();
				default:
					return t.sessionStorage || new re();
			}
		}
		var oe = (function () {
				function e(t) {
					if ((y(this, e), !this._storage)) {
						(this._persistence = te.adapter.primaryStorage || t.persistence), (this._storage = ie(this._persistence, te.adapter));
						var n = "access_token_" + t.env,
							r = "access_token_expire_" + t.env,
							i = "refresh_token_" + t.env,
							o = "anonymous_uuid_" + t.env,
							a = "login_type_" + t.env,
							s = "user_info_" + t.env;
						this.keys = { accessTokenKey: n, accessTokenExpireKey: r, refreshTokenKey: i, anonymousUuidKey: o, loginTypeKey: a, userInfoKey: s };
					}
				}
				return (
					g(e, [
						{
							key: "updatePersistence",
							value: function (e) {
								if (e !== this._persistence) {
									var t = "local" === this._persistence;
									this._persistence = e;
									var n = ie(e, te.adapter);
									for (var r in this.keys) {
										var i = this.keys[r];
										if (!t || !ne.includes(r)) {
											var o = this._storage.getItem(i);
											Z(o) || ee(o) || (n.setItem(i, o), this._storage.removeItem(i));
										}
									}
									this._storage = n;
								}
							},
						},
						{
							key: "setStore",
							value: function (e, t, n) {
								if (this._storage) {
									var r = { version: n || "localCachev1", content: t },
										i = JSON.stringify(r);
									try {
										this._storage.setItem(e, i);
									} catch (e) {
										throw e;
									}
								}
							},
						},
						{
							key: "getStore",
							value: function (e, t) {
								try {
									if (!this._storage) return;
								} catch (e) {
									return "";
								}
								t = t || "localCachev1";
								var n = this._storage.getItem(e);
								return n && n.indexOf(t) >= 0 ? JSON.parse(n).content : "";
							},
						},
						{
							key: "removeStore",
							value: function (e) {
								this._storage.removeItem(e);
							},
						},
					]),
					e
				);
			})(),
			ae = {},
			se = {};
		function ce(e) {
			return ae[e];
		}
		var ue = function e(t, n) {
				y(this, e), (this.data = n || null), (this.name = t);
			},
			le = (function (e) {
				m(n, e);
				var t = k(n);
				function n(e, r) {
					var i;
					return y(this, n), ((i = t.call(this, "error", { error: e, data: r })).error = e), i;
				}
				return n;
			})(ue),
			fe = new ((function () {
				function e() {
					y(this, e), (this._listeners = {});
				}
				return (
					g(e, [
						{
							key: "on",
							value: function (e, t) {
								return (
									(function (e, t, n) {
										(n[e] = n[e] || []), n[e].push(t);
									})(e, t, this._listeners),
									this
								);
							},
						},
						{
							key: "off",
							value: function (e, t) {
								return (
									(function (e, t, n) {
										if (n && n[e]) {
											var r = n[e].indexOf(t);
											-1 !== r && n[e].splice(r, 1);
										}
									})(e, t, this._listeners),
									this
								);
							},
						},
						{
							key: "fire",
							value: function (e, t) {
								if (e instanceof le) return console.error(e.error), this;
								var n = "string" == typeof e ? new ue(e, t || {}) : e,
									r = n.name;
								if (this._listens(r)) {
									n.target = this;
									var i,
										o = f(this._listeners[r] ? l(this._listeners[r]) : []);
									try {
										for (o.s(); !(i = o.n()).done; ) {
											i.value.call(this, n);
										}
									} catch (e) {
										o.e(e);
									} finally {
										o.f();
									}
								}
								return this;
							},
						},
						{
							key: "_listens",
							value: function (e) {
								return this._listeners[e] && this._listeners[e].length > 0;
							},
						},
					]),
					e
				);
			})())();
		function he(e, t) {
			fe.on(e, t);
		}
		function de(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			fe.fire(e, t);
		}
		function pe(e, t) {
			fe.off(e, t);
		}
		var ge,
			ve = "loginStateChanged",
			ye = "loginStateExpire",
			me = "loginTypeChanged",
			ke = "anonymousConverted",
			_e = "refreshAccessToken";
		!(function (e) {
			(e.ANONYMOUS = "ANONYMOUS"),
				(e.WECHAT = "WECHAT"),
				(e.WECHAT_PUBLIC = "WECHAT-PUBLIC"),
				(e.WECHAT_OPEN = "WECHAT-OPEN"),
				(e.CUSTOM = "CUSTOM"),
				(e.EMAIL = "EMAIL"),
				(e.USERNAME = "USERNAME"),
				(e.NULL = "NULL");
		})(ge || (ge = {}));
		var be = [
				"auth.getJwt",
				"auth.logout",
				"auth.signInWithTicket",
				"auth.signInAnonymously",
				"auth.signIn",
				"auth.fetchAccessTokenWithRefreshToken",
				"auth.signUpWithEmailAndPassword",
				"auth.activateEndUserMail",
				"auth.sendPasswordResetEmail",
				"auth.resetPasswordWithToken",
				"auth.isUsernameRegistered",
			],
			xe = { "X-SDK-Version": "1.3.5" };
		function we(e, t, n) {
			var r = e[t];
			e[t] = function (t) {
				var i = {},
					o = {};
				n.forEach(function (n) {
					var r = n.call(e, t),
						a = r.data,
						s = r.headers;
					Object.assign(i, a), Object.assign(o, s);
				});
				var a = t.data;
				return (
					a &&
						(function () {
							var e;
							if (((e = a), "[object FormData]" !== Object.prototype.toString.call(e))) t.data = u(u({}, a), i);
							else for (var n in i) a.append(n, i[n]);
						})(),
					(t.headers = u(u({}, t.headers || {}), o)),
					r.call(e, t)
				);
			};
		}
		function Se() {
			var e = Math.random().toString(16).slice(2);
			return { data: { seqId: e }, headers: u(u({}, xe), {}, { "x-seqid": e }) };
		}
		var Te = (function () {
				function e() {
					var t,
						n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					y(this, e),
						(this.config = n),
						(this._reqClass = new te.adapter.reqClass({
							timeout: this.config.timeout,
							timeoutMsg: "\u8bf7\u6c42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672a\u5b8c\u6210\uff0c\u5df2\u4e2d\u65ad"),
							restrictedMethods: ["post"],
						})),
						(this._cache = ce(this.config.env)),
						(this._localCache = ((t = this.config.env), se[t])),
						we(this._reqClass, "post", [Se]),
						we(this._reqClass, "upload", [Se]),
						we(this._reqClass, "download", [Se]);
				}
				var t, n, r, o, a, c, l, f;
				return (
					g(e, [
						{
							key: "post",
							value:
								((f = s(
									i.default.mark(function e(t) {
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (e.next = 2), this._reqClass.post(t);
														case 2:
															return e.abrupt("return", e.sent);
														case 3:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e) {
									return f.apply(this, arguments);
								}),
						},
						{
							key: "upload",
							value:
								((l = s(
									i.default.mark(function e(t) {
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (e.next = 2), this._reqClass.upload(t);
														case 2:
															return e.abrupt("return", e.sent);
														case 3:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e) {
									return l.apply(this, arguments);
								}),
						},
						{
							key: "download",
							value:
								((c = s(
									i.default.mark(function e(t) {
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (e.next = 2), this._reqClass.download(t);
														case 2:
															return e.abrupt("return", e.sent);
														case 3:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e) {
									return c.apply(this, arguments);
								}),
						},
						{
							key: "refreshAccessToken",
							value:
								((a = s(
									i.default.mark(function e() {
										var t, n;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()),
																(e.prev = 1),
																(e.next = 4),
																this._refreshAccessTokenPromise
															);
														case 4:
															(t = e.sent), (e.next = 10);
															break;
														case 7:
															(e.prev = 7), (e.t0 = e.catch(1)), (n = e.t0);
														case 10:
															if (((this._refreshAccessTokenPromise = null), (this._shouldRefreshAccessTokenHook = null), !n)) {
																e.next = 12;
																break;
															}
															throw n;
														case 12:
															return e.abrupt("return", t);
														case 13:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
											[[1, 7]],
										);
									}),
								)),
								function () {
									return a.apply(this, arguments);
								}),
						},
						{
							key: "_refreshAccessToken",
							value:
								((o = s(
									i.default.mark(function e() {
										var t, n, r, o, a, s, c, u, l, f, h, d, p;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((t = this._cache.keys),
																(n = t.accessTokenKey),
																(r = t.accessTokenExpireKey),
																(o = t.refreshTokenKey),
																(a = t.loginTypeKey),
																(s = t.anonymousUuidKey),
																this._cache.removeStore(n),
																this._cache.removeStore(r),
																(c = this._cache.getStore(o)))
															) {
																e.next = 5;
																break;
															}
															throw new Error("\u672a\u767b\u5f55CloudBase");
														case 5:
															return (u = { refresh_token: c }), (e.next = 8), this.request("auth.fetchAccessTokenWithRefreshToken", u);
														case 8:
															if (!(l = e.sent).data.code) {
																e.next = 21;
																break;
															}
															if ("SIGN_PARAM_INVALID" !== (f = l.data.code) && "REFRESH_TOKEN_EXPIRED" !== f && "INVALID_REFRESH_TOKEN" !== f) {
																e.next = 20;
																break;
															}
															if (this._cache.getStore(a) !== ge.ANONYMOUS || "INVALID_REFRESH_TOKEN" !== f) {
																e.next = 19;
																break;
															}
															return (
																(h = this._cache.getStore(s)),
																(d = this._cache.getStore(o)),
																(e.next = 17),
																this.send("auth.signInAnonymously", { anonymous_uuid: h, refresh_token: d })
															);
														case 17:
															return (p = e.sent), e.abrupt("return", (this.setRefreshToken(p.refresh_token), this._refreshAccessToken()));
														case 19:
															de(ye), this._cache.removeStore(o);
														case 20:
															throw new Error("\u5237\u65b0access token\u5931\u8d25\uff1a" + l.data.code);
														case 21:
															if (!l.data.access_token) {
																e.next = 23;
																break;
															}
															return e.abrupt(
																"return",
																(de(_e),
																this._cache.setStore(n, l.data.access_token),
																this._cache.setStore(r, l.data.access_token_expire + Date.now()),
																{ accessToken: l.data.access_token, accessTokenExpire: l.data.access_token_expire }),
															);
														case 23:
															l.data.refresh_token && (this._cache.removeStore(o), this._cache.setStore(o, l.data.refresh_token), this._refreshAccessToken());
														case 24:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function () {
									return o.apply(this, arguments);
								}),
						},
						{
							key: "getAccessToken",
							value:
								((r = s(
									i.default.mark(function e() {
										var t, n, r, o, a, s, c;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((t = this._cache.keys), (n = t.accessTokenKey), (r = t.accessTokenExpireKey), (o = t.refreshTokenKey), this._cache.getStore(o))
															) {
																e.next = 3;
																break;
															}
															throw new Error("refresh token\u4e0d\u5b58\u5728\uff0c\u767b\u5f55\u72b6\u6001\u5f02\u5e38");
														case 3:
															if (
																((a = this._cache.getStore(n)), (s = this._cache.getStore(r)), (c = !0), (e.t0 = this._shouldRefreshAccessTokenHook), !e.t0)
															) {
																e.next = 9;
																break;
															}
															return (e.next = 8), this._shouldRefreshAccessTokenHook(a, s);
														case 8:
															e.t0 = !e.sent;
														case 9:
															if (((e.t1 = e.t0), !e.t1)) {
																e.next = 12;
																break;
															}
															c = !1;
														case 12:
															return e.abrupt(
																"return",
																(!a || !s || s < Date.now()) && c ? this.refreshAccessToken() : { accessToken: a, accessTokenExpire: s },
															);
														case 13:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function () {
									return r.apply(this, arguments);
								}),
						},
						{
							key: "request",
							value:
								((n = s(
									i.default.mark(function e(t, n, r) {
										var o, a, s, c, l, f, h, d, p, g, v, y, m, k, _, b;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (
																((o = "x-tcb-trace_" + this.config.env),
																(a = "application/x-www-form-urlencoded"),
																(s = u({ action: t, env: this.config.env, dataVersion: "2019-08-16" }, n)),
																-1 !== be.indexOf(t))
															) {
																e.next = 10;
																break;
															}
															if (((c = this._cache.keys.refreshTokenKey), (e.t0 = this._cache.getStore(c)), !e.t0)) {
																e.next = 10;
																break;
															}
															return (e.next = 9), this.getAccessToken();
														case 9:
															s.access_token = e.sent.accessToken;
														case 10:
															if ("storage.uploadFile" === t) {
																for (f in (l = new FormData())) l.hasOwnProperty(f) && void 0 !== l[f] && l.append(f, s[f]);
																a = "multipart/form-data";
															} else for (h in ((a = "application/json;charset=UTF-8"), (l = {}), s)) void 0 !== s[h] && (l[h] = s[h]);
															return (
																(d = { headers: { "content-type": a } }),
																r && r.onUploadProgress && (d.onUploadProgress = r.onUploadProgress),
																(p = this._localCache.getStore(o)) && (d.headers["X-TCB-Trace"] = p),
																(g = n.parse),
																(v = n.inQuery),
																(y = n.search),
																(m = { env: this.config.env }),
																g && (m.parse = !0),
																v && (m = u(u({}, v), m)),
																(k = (function (e, t) {
																	var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
																		r = /\?/.test(t),
																		i = "";
																	for (var o in n) "" === i ? !r && (t += "?") : (i += "&"), (i += "".concat(o, "=").concat(encodeURIComponent(n[o])));
																	return /^http(s)?\:\/\//.test((t += i)) ? t : "".concat(e).concat(t);
																})(G, "//tcb-api.tencentcloudapi.com/web", m)),
																y && (k += y),
																(e.next = 22),
																this.post(u({ url: k, data: l }, d))
															);
														case 22:
															if (
																((_ = e.sent),
																(b = _.header && _.header["x-tcb-trace"]) && this._localCache.setStore(o, b),
																(200 === Number(_.status) || 200 === Number(_.statusCode)) && _.data)
															) {
																e.next = 26;
																break;
															}
															throw new Error("network request error");
														case 26:
															return e.abrupt("return", _);
														case 27:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e, t, r) {
									return n.apply(this, arguments);
								}),
						},
						{
							key: "send",
							value:
								((t = s(
									i.default.mark(function e(t) {
										var n,
											r,
											o,
											a = arguments;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(n = a.length > 1 && void 0 !== a[1] ? a[1] : {}), (e.next = 3), this.request(t, n, { onUploadProgress: n.onUploadProgress })
															);
														case 3:
															if ("ACCESS_TOKEN_EXPIRED" !== (r = e.sent).data.code || -1 !== be.indexOf(t)) {
																e.next = 13;
																break;
															}
															return (e.next = 7), this.refreshAccessToken();
														case 7:
															return (e.next = 9), this.request(t, n, { onUploadProgress: n.onUploadProgress });
														case 9:
															if (!(o = e.sent).data.code) {
																e.next = 12;
																break;
															}
															throw new Error("[".concat(o.data.code, "] ").concat(o.data.message));
														case 12:
															return e.abrupt("return", o.data);
														case 13:
															if (!r.data.code) {
																e.next = 15;
																break;
															}
															throw new Error("[".concat(r.data.code, "] ").concat(r.data.message));
														case 15:
															return e.abrupt("return", r.data);
														case 16:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e) {
									return t.apply(this, arguments);
								}),
						},
						{
							key: "setRefreshToken",
							value: function (e) {
								var t = this._cache.keys,
									n = t.accessTokenKey,
									r = t.accessTokenExpireKey,
									i = t.refreshTokenKey;
								this._cache.removeStore(n), this._cache.removeStore(r), this._cache.setStore(i, e);
							},
						},
					]),
					e
				);
			})(),
			Ce = {};
		function Ie(e) {
			return Ce[e];
		}
		var De = (function () {
				function e(t) {
					y(this, e), (this.config = t), (this._cache = ce(t.env)), (this._request = Ie(t.env));
				}
				var t;
				return (
					g(e, [
						{
							key: "setRefreshToken",
							value: function (e) {
								var t = this._cache.keys,
									n = t.accessTokenKey,
									r = t.accessTokenExpireKey,
									i = t.refreshTokenKey;
								this._cache.removeStore(n), this._cache.removeStore(r), this._cache.setStore(i, e);
							},
						},
						{
							key: "setAccessToken",
							value: function (e, t) {
								var n = this._cache.keys,
									r = n.accessTokenKey,
									i = n.accessTokenExpireKey;
								this._cache.setStore(r, e), this._cache.setStore(i, t);
							},
						},
						{
							key: "refreshUserInfo",
							value:
								((t = s(
									i.default.mark(function e() {
										var t, n;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (e.next = 2), this._request.send("auth.getUserInfo", {});
														case 2:
															return (t = e.sent), (n = t.data), e.abrupt("return", (this.setLocalUserInfo(n), n));
														case 5:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function () {
									return t.apply(this, arguments);
								}),
						},
						{
							key: "setLocalUserInfo",
							value: function (e) {
								var t = this._cache.keys.userInfoKey;
								this._cache.setStore(t, e);
							},
						},
					]),
					e
				);
			})(),
			Oe = (function () {
				function e(t) {
					if ((y(this, e), !t)) throw new Error("envId is not defined");
					(this._envId = t), (this._cache = ce(this._envId)), (this._request = Ie(this._envId)), this.setUserInfo();
				}
				var t, n, r;
				return (
					g(e, [
						{
							key: "linkWithTicket",
							value: function (e) {
								if ("string" != typeof e) throw new Error("ticket must be string");
								return this._request.send("auth.linkWithTicket", { ticket: e });
							},
						},
						{
							key: "linkWithRedirect",
							value: function (e) {
								e.signInWithRedirect();
							},
						},
						{
							key: "updatePassword",
							value: function (e, t) {
								return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });
							},
						},
						{
							key: "updateEmail",
							value: function (e) {
								return this._request.send("auth.updateEmail", { newEmail: e });
							},
						},
						{
							key: "updateUsername",
							value: function (e) {
								if ("string" != typeof e) throw new Error("username must be a string");
								return this._request.send("auth.updateUsername", { username: e });
							},
						},
						{
							key: "getLinkedUidList",
							value:
								((r = s(
									i.default.mark(function e() {
										var t, n, r, o;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (e.next = 2), this._request.send("auth.getLinkedUidList", {});
														case 2:
															return (
																(t = e.sent),
																(n = t.data),
																(r = !1),
																(o = n.users),
																e.abrupt(
																	"return",
																	(o.forEach(function (e) {
																		e.wxOpenId && e.wxPublicId && (r = !0);
																	}),
																	{ users: o, hasPrimaryUid: r }),
																)
															);
														case 7:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function () {
									return r.apply(this, arguments);
								}),
						},
						{
							key: "setPrimaryUid",
							value: function (e) {
								return this._request.send("auth.setPrimaryUid", { uid: e });
							},
						},
						{
							key: "unlink",
							value: function (e) {
								return this._request.send("auth.unlink", { platform: e });
							},
						},
						{
							key: "update",
							value:
								((n = s(
									i.default.mark(function e(t) {
										var n, r, o, a, s, c, u, l;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(n = t.nickName),
																(r = t.gender),
																(o = t.avatarUrl),
																(a = t.province),
																(s = t.country),
																(c = t.city),
																(e.next = 8),
																this._request.send("auth.updateUserInfo", { nickName: n, gender: r, avatarUrl: o, province: a, country: s, city: c })
															);
														case 8:
															(u = e.sent), (l = u.data), this.setLocalUserInfo(l);
														case 11:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e) {
									return n.apply(this, arguments);
								}),
						},
						{
							key: "refresh",
							value:
								((t = s(
									i.default.mark(function e() {
										var t, n;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (e.next = 2), this._request.send("auth.getUserInfo", {});
														case 2:
															return (t = e.sent), (n = t.data), e.abrupt("return", (this.setLocalUserInfo(n), n));
														case 5:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function () {
									return t.apply(this, arguments);
								}),
						},
						{
							key: "setUserInfo",
							value: function () {
								var e = this,
									t = this._cache.keys.userInfoKey,
									n = this._cache.getStore(t);
								[
									"uid",
									"loginType",
									"openid",
									"wxOpenId",
									"wxPublicId",
									"unionId",
									"qqMiniOpenId",
									"email",
									"hasPassword",
									"customUserId",
									"nickName",
									"gender",
									"avatarUrl",
								].forEach(function (t) {
									e[t] = n[t];
								}),
									(this.location = { country: n.country, province: n.province, city: n.city });
							},
						},
						{
							key: "setLocalUserInfo",
							value: function (e) {
								var t = this._cache.keys.userInfoKey;
								this._cache.setStore(t, e), this.setUserInfo();
							},
						},
					]),
					e
				);
			})(),
			Ae = (function () {
				function e(t) {
					if ((y(this, e), !t)) throw new Error("envId is not defined");
					this._cache = ce(t);
					var n = this._cache.keys,
						r = n.refreshTokenKey,
						i = n.accessTokenKey,
						o = n.accessTokenExpireKey,
						a = this._cache.getStore(r),
						s = this._cache.getStore(i),
						c = this._cache.getStore(o);
					(this.credential = { refreshToken: a, accessToken: s, accessTokenExpire: c }), (this.user = new Oe(t));
				}
				return (
					g(e, [
						{
							key: "isAnonymousAuth",
							get: function () {
								return this.loginType === ge.ANONYMOUS;
							},
						},
						{
							key: "isCustomAuth",
							get: function () {
								return this.loginType === ge.CUSTOM;
							},
						},
						{
							key: "isWeixinAuth",
							get: function () {
								return this.loginType === ge.WECHAT || this.loginType === ge.WECHAT_OPEN || this.loginType === ge.WECHAT_PUBLIC;
							},
						},
						{
							key: "loginType",
							get: function () {
								return this._cache.getStore(this._cache.keys.loginTypeKey);
							},
						},
					]),
					e
				);
			})(),
			Ee = (function (e) {
				m(o, e);
				var t,
					n,
					r = k(o);
				function o() {
					return y(this, o), r.apply(this, arguments);
				}
				return (
					g(o, [
						{
							key: "signIn",
							value:
								((n = s(
									i.default.mark(function e() {
										var t, n, r, o, a, s, c;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																this._cache.updatePersistence("local"),
																(t = this._cache.keys),
																(n = t.anonymousUuidKey),
																(r = t.refreshTokenKey),
																(o = this._cache.getStore(n) || void 0),
																(a = this._cache.getStore(r) || void 0),
																(e.next = 8),
																this._request.send("auth.signInAnonymously", { anonymous_uuid: o, refresh_token: a })
															);
														case 8:
															if (!(s = e.sent).uuid || !s.refresh_token) {
																e.next = 20;
																break;
															}
															return this._setAnonymousUUID(s.uuid), this.setRefreshToken(s.refresh_token), (e.next = 14), this._request.refreshAccessToken();
														case 14:
															return (
																de(ve),
																de(me, { env: this.config.env, loginType: ge.ANONYMOUS, persistence: "local" }),
																(c = new Ae(this.config.env)),
																(e.next = 19),
																c.user.refresh()
															);
														case 19:
															return e.abrupt("return", c);
														case 20:
															throw new Error("\u533f\u540d\u767b\u5f55\u5931\u8d25");
														case 21:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function () {
									return n.apply(this, arguments);
								}),
						},
						{
							key: "linkAndRetrieveDataWithTicket",
							value:
								((t = s(
									i.default.mark(function e(t) {
										var n, r, o, a, s, c;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																(n = this._cache.keys),
																(r = n.anonymousUuidKey),
																(o = n.refreshTokenKey),
																(a = this._cache.getStore(r)),
																(s = this._cache.getStore(o)),
																(e.next = 7),
																this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: a, refresh_token: s, ticket: t })
															);
														case 7:
															if (!(c = e.sent).refresh_token) {
																e.next = 16;
																break;
															}
															return this._clearAnonymousUUID(), this.setRefreshToken(c.refresh_token), (e.next = 13), this._request.refreshAccessToken();
														case 13:
															return (
																de(ke, { env: this.config.env }),
																de(me, { loginType: ge.CUSTOM, persistence: "local" }),
																e.abrupt("return", { credential: { refreshToken: c.refresh_token } })
															);
														case 16:
															throw new Error("\u533f\u540d\u8f6c\u5316\u5931\u8d25");
														case 17:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e) {
									return t.apply(this, arguments);
								}),
						},
						{
							key: "_setAnonymousUUID",
							value: function (e) {
								var t = this._cache.keys,
									n = t.anonymousUuidKey,
									r = t.loginTypeKey;
								this._cache.removeStore(n), this._cache.setStore(n, e), this._cache.setStore(r, ge.ANONYMOUS);
							},
						},
						{
							key: "_clearAnonymousUUID",
							value: function () {
								this._cache.removeStore(this._cache.keys.anonymousUuidKey);
							},
						},
					]),
					o
				);
			})(De),
			Pe = (function (e) {
				m(r, e);
				var t,
					n = k(r);
				function r() {
					return y(this, r), n.apply(this, arguments);
				}
				return (
					g(r, [
						{
							key: "signIn",
							value:
								((t = s(
									i.default.mark(function e(t) {
										var n, r;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if ("string" == typeof t) {
																e.next = 2;
																break;
															}
															throw new Error("ticket must be a string");
														case 2:
															return (
																(n = this._cache.keys.refreshTokenKey),
																(e.next = 5),
																this._request.send("auth.signInWithTicket", { ticket: t, refresh_token: this._cache.getStore(n) || "" })
															);
														case 5:
															if (!(r = e.sent).refresh_token) {
																e.next = 15;
																break;
															}
															return this.setRefreshToken(r.refresh_token), (e.next = 10), this._request.refreshAccessToken();
														case 10:
															return (
																de(ve),
																de(me, { env: this.config.env, loginType: ge.CUSTOM, persistence: this.config.persistence }),
																(e.next = 14),
																this.refreshUserInfo()
															);
														case 14:
															return e.abrupt("return", new Ae(this.config.env));
														case 15:
															throw new Error("\u81ea\u5b9a\u4e49\u767b\u5f55\u5931\u8d25");
														case 16:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e) {
									return t.apply(this, arguments);
								}),
						},
					]),
					r
				);
			})(De),
			Le = (function (e) {
				m(a, e);
				var t,
					n,
					r,
					o = k(a);
				function a() {
					return y(this, a), o.apply(this, arguments);
				}
				return (
					g(a, [
						{
							key: "signIn",
							value:
								((r = s(
									i.default.mark(function e(t, n) {
										var r, o, a, s, c;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if ("string" == typeof t) {
																e.next = 2;
																break;
															}
															throw new Error("email must be a string");
														case 2:
															return (
																(r = this._cache.keys.refreshTokenKey),
																(e.next = 5),
																this._request.send("auth.signIn", { loginType: "EMAIL", email: t, password: n, refresh_token: this._cache.getStore(r) || "" })
															);
														case 5:
															if (((o = e.sent), (a = o.refresh_token), (s = o.access_token), (c = o.access_token_expire), !a)) {
																e.next = 22;
																break;
															}
															if ((this.setRefreshToken(a), !s || !c)) {
																e.next = 15;
																break;
															}
															this.setAccessToken(s, c), (e.next = 17);
															break;
														case 15:
															return (e.next = 17), this._request.refreshAccessToken();
														case 17:
															return (e.next = 19), this.refreshUserInfo();
														case 19:
															return (
																de(ve),
																de(me, { env: this.config.env, loginType: ge.EMAIL, persistence: this.config.persistence }),
																e.abrupt("return", new Ae(this.config.env))
															);
														case 22:
															throw o.code
																? new Error("\u90ae\u7bb1\u767b\u5f55\u5931\u8d25: [".concat(o.code, "] ").concat(o.message))
																: new Error("\u90ae\u7bb1\u767b\u5f55\u5931\u8d25");
														case 23:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e, t) {
									return r.apply(this, arguments);
								}),
						},
						{
							key: "activate",
							value:
								((n = s(
									i.default.mark(function e(t) {
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return e.abrupt("return", this._request.send("auth.activateEndUserMail", { token: t }));
														case 1:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e) {
									return n.apply(this, arguments);
								}),
						},
						{
							key: "resetPasswordWithToken",
							value:
								((t = s(
									i.default.mark(function e(t, n) {
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return e.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: t, newPassword: n }));
														case 1:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e, n) {
									return t.apply(this, arguments);
								}),
						},
					]),
					a
				);
			})(De),
			Ue = (function (e) {
				m(r, e);
				var t,
					n = k(r);
				function r() {
					return y(this, r), n.apply(this, arguments);
				}
				return (
					g(r, [
						{
							key: "signIn",
							value:
								((t = s(
									i.default.mark(function e(t, n) {
										var r, o, a, s, c;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if ("string" == typeof t) {
																e.next = 2;
																break;
															}
															throw new Error("username must be a string");
														case 2:
															return (
																"string" != typeof n && ((n = ""), console.warn("password is empty")),
																(r = this._cache.keys.refreshTokenKey),
																(e.next = 6),
																this._request.send("auth.signIn", {
																	loginType: ge.USERNAME,
																	username: t,
																	password: n,
																	refresh_token: this._cache.getStore(r) || "",
																})
															);
														case 6:
															if (((o = e.sent), (a = o.refresh_token), (s = o.access_token_expire), (c = o.access_token), !a)) {
																e.next = 23;
																break;
															}
															if ((this.setRefreshToken(a), !c || !s)) {
																e.next = 16;
																break;
															}
															this.setAccessToken(c, s), (e.next = 18);
															break;
														case 16:
															return (e.next = 18), this._request.refreshAccessToken();
														case 18:
															return (e.next = 20), this.refreshUserInfo();
														case 20:
															return (
																de(ve),
																de(me, { env: this.config.env, loginType: ge.USERNAME, persistence: this.config.persistence }),
																e.abrupt("return", new Ae(this.config.env))
															);
														case 23:
															throw o.code
																? new Error("\u7528\u6237\u540d\u5bc6\u7801\u767b\u5f55\u5931\u8d25: [".concat(o.code, "] ").concat(o.message))
																: new Error("\u7528\u6237\u540d\u5bc6\u7801\u767b\u5f55\u5931\u8d25");
														case 24:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e, n) {
									return t.apply(this, arguments);
								}),
						},
					]),
					r
				);
			})(De),
			Fe = (function () {
				function e(t) {
					y(this, e),
						(this.config = t),
						(this._cache = ce(t.env)),
						(this._request = Ie(t.env)),
						(this._onAnonymousConverted = this._onAnonymousConverted.bind(this)),
						(this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this)),
						he(me, this._onLoginTypeChanged);
				}
				var t, n, r, o, a, c, l, f, h;
				return (
					g(e, [
						{
							key: "anonymousAuthProvider",
							value: function () {
								return new Ee(this.config);
							},
						},
						{
							key: "customAuthProvider",
							value: function () {
								return new Pe(this.config);
							},
						},
						{
							key: "emailAuthProvider",
							value: function () {
								return new Le(this.config);
							},
						},
						{
							key: "usernameAuthProvider",
							value: function () {
								return new Ue(this.config);
							},
						},
						{
							key: "signInAnonymously",
							value:
								((h = s(
									i.default.mark(function e() {
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return e.abrupt("return", new Ee(this.config).signIn());
														case 1:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function () {
									return h.apply(this, arguments);
								}),
						},
						{
							key: "signInWithEmailAndPassword",
							value:
								((f = s(
									i.default.mark(function e(t, n) {
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return e.abrupt("return", new Le(this.config).signIn(t, n));
														case 1:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e, t) {
									return f.apply(this, arguments);
								}),
						},
						{
							key: "signInWithUsernameAndPassword",
							value: function (e, t) {
								return new Ue(this.config).signIn(e, t);
							},
						},
						{
							key: "linkAndRetrieveDataWithTicket",
							value:
								((l = s(
									i.default.mark(function e(t) {
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (
																this._anonymousAuthProvider || (this._anonymousAuthProvider = new Ee(this.config)),
																he(ke, this._onAnonymousConverted),
																(e.next = 3),
																this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(t)
															);
														case 3:
															return e.abrupt("return", e.sent);
														case 4:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e) {
									return l.apply(this, arguments);
								}),
						},
						{
							key: "signOut",
							value:
								((c = s(
									i.default.mark(function e() {
										var t, n, r, o, a, s;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if (this.loginType !== ge.ANONYMOUS) {
																e.next = 2;
																break;
															}
															throw new Error("\u533f\u540d\u7528\u6237\u4e0d\u652f\u6301\u767b\u51fa\u64cd\u4f5c");
														case 2:
															if (
																((t = this._cache.keys),
																(n = t.refreshTokenKey),
																(r = t.accessTokenKey),
																(o = t.accessTokenExpireKey),
																(a = this._cache.getStore(n)))
															) {
																e.next = 5;
																break;
															}
															return e.abrupt("return");
														case 5:
															return (e.next = 7), this._request.send("auth.logout", { refresh_token: a });
														case 7:
															return (
																(s = e.sent),
																e.abrupt(
																	"return",
																	(this._cache.removeStore(n),
																	this._cache.removeStore(r),
																	this._cache.removeStore(o),
																	de(ve),
																	de(me, { env: this.config.env, loginType: ge.NULL, persistence: this.config.persistence }),
																	s),
																)
															);
														case 9:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function () {
									return c.apply(this, arguments);
								}),
						},
						{
							key: "signUpWithEmailAndPassword",
							value:
								((a = s(
									i.default.mark(function e(t, n) {
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return e.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: t, password: n }));
														case 1:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e, t) {
									return a.apply(this, arguments);
								}),
						},
						{
							key: "sendPasswordResetEmail",
							value:
								((o = s(
									i.default.mark(function e(t) {
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return e.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: t }));
														case 1:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e) {
									return o.apply(this, arguments);
								}),
						},
						{
							key: "onLoginStateChanged",
							value: function (e) {
								var t = this;
								he(ve, function () {
									var n = t.hasLoginState();
									e.call(t, n);
								});
								var n = this.hasLoginState();
								e.call(this, n);
							},
						},
						{
							key: "onLoginStateExpired",
							value: function (e) {
								he(ye, e.bind(this));
							},
						},
						{
							key: "onAccessTokenRefreshed",
							value: function (e) {
								he(_e, e.bind(this));
							},
						},
						{
							key: "onAnonymousConverted",
							value: function (e) {
								he(ke, e.bind(this));
							},
						},
						{
							key: "onLoginTypeChanged",
							value: function (e) {
								var t = this;
								he(me, function () {
									var n = t.hasLoginState();
									e.call(t, n);
								});
							},
						},
						{
							key: "getAccessToken",
							value:
								((r = s(
									i.default.mark(function e() {
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return (e.next = 2), this._request.getAccessToken();
														case 2:
															return (e.t0 = e.sent.accessToken), (e.t1 = this.config.env), e.abrupt("return", { accessToken: e.t0, env: e.t1 });
														case 5:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function () {
									return r.apply(this, arguments);
								}),
						},
						{
							key: "hasLoginState",
							value: function () {
								var e = this._cache.keys.refreshTokenKey;
								return this._cache.getStore(e) ? new Ae(this.config.env) : null;
							},
						},
						{
							key: "isUsernameRegistered",
							value:
								((n = s(
									i.default.mark(function e(t) {
										var n, r;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if ("string" == typeof t) {
																e.next = 2;
																break;
															}
															throw new Error("username must be a string");
														case 2:
															return (e.next = 4), this._request.send("auth.isUsernameRegistered", { username: t });
														case 4:
															return (n = e.sent), (r = n.data), e.abrupt("return", r && r.isRegistered);
														case 7:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e) {
									return n.apply(this, arguments);
								}),
						},
						{
							key: "getLoginState",
							value: function () {
								return Promise.resolve(this.hasLoginState());
							},
						},
						{
							key: "signInWithTicket",
							value:
								((t = s(
									i.default.mark(function e(t) {
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return e.abrupt("return", new Pe(this.config).signIn(t));
														case 1:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e) {
									return t.apply(this, arguments);
								}),
						},
						{
							key: "shouldRefreshAccessToken",
							value: function (e) {
								this._request._shouldRefreshAccessTokenHook = e.bind(this);
							},
						},
						{
							key: "getUserInfo",
							value: function () {
								return this._request.send("auth.getUserInfo", {}).then(function (e) {
									return e.code ? e : u(u({}, e.data), {}, { requestId: e.seqId });
								});
							},
						},
						{
							key: "getAuthHeader",
							value: function () {
								var e = this._cache.keys,
									t = e.refreshTokenKey,
									n = e.accessTokenKey,
									r = this._cache.getStore(t);
								return { "x-cloudbase-credentials": this._cache.getStore(n) + "/@@/" + r };
							},
						},
						{
							key: "_onAnonymousConverted",
							value: function (e) {
								e.data.env === this.config.env && this._cache.updatePersistence(this.config.persistence);
							},
						},
						{
							key: "_onLoginTypeChanged",
							value: function (e) {
								var t = e.data,
									n = t.loginType,
									r = t.persistence;
								t.env === this.config.env && (this._cache.updatePersistence(r), this._cache.setStore(this._cache.keys.loginTypeKey, n));
							},
						},
						{
							key: "currentUser",
							get: function () {
								var e = this.hasLoginState();
								return (e && e.user) || null;
							},
						},
						{
							key: "loginType",
							get: function () {
								return this._cache.getStore(this._cache.keys.loginTypeKey);
							},
						},
					]),
					e
				);
			})(),
			Re = function (e, t) {
				t = t || Q();
				var n = Ie(this.config.env),
					r = e.cloudPath,
					i = e.filePath,
					o = e.onUploadProgress,
					a = e.fileType,
					s = void 0 === a ? "image" : a;
				return (
					n
						.send("storage.getUploadMetadata", { path: r })
						.then(function (e) {
							var a = e.data,
								c = a.url,
								u = a.authorization,
								l = a.token,
								f = a.fileId,
								h = a.cosFileId,
								d = e.requestId,
								p = { key: r, signature: u, "x-cos-meta-fileid": h, success_action_status: "201", "x-cos-security-token": l };
							n.upload({ url: c, data: p, file: i, name: r, fileType: s, onUploadProgress: o })
								.then(function (e) {
									201 === e.statusCode ? t(null, { fileID: f, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data));
								})
								.catch(function (e) {
									t(e);
								});
						})
						.catch(function (e) {
							t(e);
						}),
					t.promise
				);
			},
			je = function (e, t) {
				t = t || Q();
				var n = Ie(this.config.env),
					r = e.cloudPath;
				return (
					n
						.send("storage.getUploadMetadata", { path: r })
						.then(function (e) {
							t(null, e);
						})
						.catch(function (e) {
							t(e);
						}),
					t.promise
				);
			},
			Ne = function (e, t) {
				var n = e.fileList;
				if (((t = t || Q()), !n || !Array.isArray(n))) return { code: "INVALID_PARAM", message: "fileList\u5fc5\u987b\u662f\u975e\u7a7a\u7684\u6570\u7ec4" };
				var r,
					i = f(n);
				try {
					for (i.s(); !(r = i.n()).done; ) {
						var o = r.value;
						if (!o || "string" != typeof o)
							return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7d20\u5fc5\u987b\u662f\u975e\u7a7a\u7684\u5b57\u7b26\u4e32" };
					}
				} catch (e) {
					i.e(e);
				} finally {
					i.f();
				}
				var a = { fileid_list: n };
				return (
					Ie(this.config.env)
						.send("storage.batchDeleteFile", a)
						.then(function (e) {
							e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });
						})
						.catch(function (e) {
							t(e);
						}),
					t.promise
				);
			},
			qe = function (e, t) {
				var n = e.fileList;
				(t = t || Q()), (n && Array.isArray(n)) || t(null, { code: "INVALID_PARAM", message: "fileList\u5fc5\u987b\u662f\u975e\u7a7a\u7684\u6570\u7ec4" });
				var r,
					i = [],
					o = f(n);
				try {
					for (o.s(); !(r = o.n()).done; ) {
						var a = r.value;
						"object" == typeof a
							? ((a.hasOwnProperty("fileID") && a.hasOwnProperty("maxAge")) ||
									t(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7d20\u5fc5\u987b\u662f\u5305\u542bfileID\u548cmaxAge\u7684\u5bf9\u8c61" }),
							  i.push({ fileid: a.fileID, max_age: a.maxAge }))
							: "string" == typeof a
							? i.push({ fileid: a })
							: t(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7d20\u5fc5\u987b\u662f\u5b57\u7b26\u4e32" });
					}
				} catch (e) {
					o.e(e);
				} finally {
					o.f();
				}
				var s = { file_list: i };
				return (
					Ie(this.config.env)
						.send("storage.batchGetDownloadUrl", s)
						.then(function (e) {
							e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });
						})
						.catch(function (e) {
							t(e);
						}),
					t.promise
				);
			},
			Me = (function () {
				var e = s(
					i.default.mark(function e(t, n) {
						var r, o, a, s;
						return i.default.wrap(
							function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (r = t.fileID), (e.next = 3), qe.call(this, { fileList: [{ fileID: r, maxAge: 600 }] });
										case 3:
											if ("SUCCESS" === (o = e.sent.fileList[0]).code) {
												e.next = 6;
												break;
											}
											return e.abrupt(
												"return",
												n
													? n(o)
													: new Promise(function (e) {
															e(o);
													  }),
											);
										case 6:
											if (((a = Ie(this.config.env)), (s = o.download_url), (s = encodeURI(s)), n)) {
												e.next = 10;
												break;
											}
											return e.abrupt("return", a.download({ url: s }));
										case 10:
											return (e.t0 = n), (e.next = 13), a.download({ url: s });
										case 13:
											(e.t1 = e.sent), (0, e.t0)(e.t1);
										case 15:
										case "end":
											return e.stop();
									}
							},
							e,
							this,
						);
					}),
				);
				return function (t, n) {
					return e.apply(this, arguments);
				};
			})(),
			$e = function (e, t) {
				var n,
					r = e.name,
					i = e.data,
					o = e.query,
					a = e.parse,
					s = e.search,
					c = t || Q();
				try {
					n = i ? JSON.stringify(i) : "";
				} catch (r) {
					return Promise.reject(r);
				}
				if (!r) return Promise.reject(new Error("\u51fd\u6570\u540d\u4e0d\u80fd\u4e3a\u7a7a"));
				var u = { inQuery: o, parse: a, search: s, function_name: r, request_data: n };
				return (
					Ie(this.config.env)
						.send("functions.invokeFunction", u)
						.then(function (e) {
							if (e.code) c(null, e);
							else {
								var t = e.data.response_data;
								if (a) c(null, { result: t, requestId: e.requestId });
								else
									try {
										(t = JSON.parse(e.data.response_data)), c(null, { result: t, requestId: e.requestId });
									} catch (e) {
										c(new Error("response data must be json"));
									}
							}
							return c.promise;
						})
						.catch(function (e) {
							c(e);
						}),
					c.promise
				);
			},
			Be = { timeout: 15e3, persistence: "session" },
			Ve = {},
			Ke = new ((function () {
				function e(t) {
					y(this, e), (this.config = t || this.config), (this.authObj = void 0);
				}
				var t;
				return (
					g(e, [
						{
							key: "init",
							value: function (t) {
								switch (
									(te.adapter ||
										(this.requestClient = new te.adapter.reqClass({
											timeout: t.timeout || 5e3,
											timeoutMsg: "\u8bf7\u6c42\u5728".concat((t.timeout || 5e3) / 1e3, "s\u5185\u672a\u5b8c\u6210\uff0c\u5df2\u4e2d\u65ad"),
										})),
									(this.config = u(u({}, Be), t)),
									!0)
								) {
									case this.config.timeout > 6e5:
										console.warn("timeout\u5927\u4e8e\u53ef\u914d\u7f6e\u4e0a\u9650[10\u5206\u949f]\uff0c\u5df2\u91cd\u7f6e\u4e3a\u4e0a\u9650\u6570\u503c"),
											(this.config.timeout = 6e5);
										break;
									case this.config.timeout < 100:
										console.warn("timeout\u5c0f\u4e8e\u53ef\u914d\u7f6e\u4e0b\u9650[100ms]\uff0c\u5df2\u91cd\u7f6e\u4e3a\u4e0b\u9650\u6570\u503c"),
											(this.config.timeout = 100);
								}
								return new e(this.config);
							},
						},
						{
							key: "auth",
							value: function () {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									t = e.persistence;
								if (this.authObj) return this.authObj;
								var n,
									r = t || te.adapter.primaryStorage || Be.persistence;
								return (
									r !== this.config.persistence && (this.config.persistence = r),
									(function (e) {
										var t = e.env;
										(ae[t] = new oe(e)), (se[t] = new oe(u(u({}, e), {}, { persistence: "local" })));
									})(this.config),
									(n = this.config),
									(Ce[n.env] = new Te(n)),
									(this.authObj = new Fe(this.config)),
									this.authObj
								);
							},
						},
						{
							key: "on",
							value: function (e, t) {
								return he.apply(this, [e, t]);
							},
						},
						{
							key: "off",
							value: function (e, t) {
								return pe.apply(this, [e, t]);
							},
						},
						{
							key: "callFunction",
							value: function (e, t) {
								return $e.apply(this, [e, t]);
							},
						},
						{
							key: "deleteFile",
							value: function (e, t) {
								return Ne.apply(this, [e, t]);
							},
						},
						{
							key: "getTempFileURL",
							value: function (e, t) {
								return qe.apply(this, [e, t]);
							},
						},
						{
							key: "downloadFile",
							value: function (e, t) {
								return Me.apply(this, [e, t]);
							},
						},
						{
							key: "uploadFile",
							value: function (e, t) {
								return Re.apply(this, [e, t]);
							},
						},
						{
							key: "getUploadMetadata",
							value: function (e, t) {
								return je.apply(this, [e, t]);
							},
						},
						{
							key: "registerExtension",
							value: function (e) {
								Ve[e.name] = e;
							},
						},
						{
							key: "invokeExtension",
							value:
								((t = s(
									i.default.mark(function e(t, n) {
										var r;
										return i.default.wrap(
											function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															if ((r = Ve[t])) {
																e.next = 3;
																break;
															}
															throw Error("\u6269\u5c55".concat(t, " \u5fc5\u987b\u5148\u6ce8\u518c"));
														case 3:
															return (e.next = 5), r.invoke(n, this);
														case 5:
															return e.abrupt("return", e.sent);
														case 6:
														case "end":
															return e.stop();
													}
											},
											e,
											this,
										);
									}),
								)),
								function (e, n) {
									return t.apply(this, arguments);
								}),
						},
						{
							key: "useAdapters",
							value: function (e) {
								var t =
										(function (e) {
											var t,
												n,
												r = f(((t = e), "[object Array]" === Object.prototype.toString.call(t) ? e : [e]));
											try {
												for (r.s(); !(n = r.n()).done; ) {
													var i = n.value,
														o = i.isMatch,
														a = i.genAdapter,
														s = i.runtime;
													if (o()) return { adapter: a(), runtime: s };
												}
											} catch (e) {
												r.e(e);
											} finally {
												r.f();
											}
										})(e) || {},
									n = t.adapter,
									r = t.runtime;
								n && (te.adapter = n), r && (te.runtime = r);
							},
						},
					]),
					e
				);
			})())();
		function He(e, t, n) {
			void 0 === n && (n = {});
			var r = /\?/.test(t),
				i = "";
			for (var o in n) "" === i ? !r && (t += "?") : (i += "&"), (i += o + "=" + encodeURIComponent(n[o]));
			return /^http(s)?:\/\//.test((t += i)) ? t : "" + e + t;
		}
		var We = (function () {
				function e() {
					y(this, e);
				}
				return (
					g(e, [
						{
							key: "post",
							value: function (e) {
								var t = e.url,
									n = e.data,
									r = e.headers;
								return new Promise(function (e, i) {
									W.request({
										url: He("https:", t),
										data: n,
										method: "POST",
										header: r,
										success: function (t) {
											e(t);
										},
										fail: function (e) {
											i(e);
										},
									});
								});
							},
						},
						{
							key: "upload",
							value: function (e) {
								return new Promise(function (t, n) {
									var r = e.url,
										i = e.file,
										o = e.data,
										a = e.headers,
										s = e.fileType,
										c = W.uploadFile({
											url: He("https:", r),
											name: "file",
											formData: Object.assign({}, o),
											filePath: i,
											fileType: s,
											header: a,
											success: function (e) {
												var n = { statusCode: e.statusCode, data: e.data || {} };
												200 === e.statusCode && o.success_action_status && (n.statusCode = parseInt(o.success_action_status, 10)), t(n);
											},
											fail: function (e) {
												n(new Error(e.errMsg || "uploadFile:fail"));
											},
										});
									"function" == typeof e.onUploadProgress &&
										c &&
										"function" == typeof c.onProgressUpdate &&
										c.onProgressUpdate(function (t) {
											e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });
										});
								});
							},
						},
					]),
					e
				);
			})(),
			ze = {
				setItem: function (e, t) {
					W.setStorageSync(e, t);
				},
				getItem: function (e) {
					return W.getStorageSync(e);
				},
				removeItem: function (e) {
					W.removeStorageSync(e);
				},
				clear: function () {
					W.clearStorageSync();
				},
			},
			Je = {
				genAdapter: function () {
					return { root: {}, reqClass: We, localStorage: ze, primaryStorage: "local" };
				},
				isMatch: function () {
					return !0;
				},
				runtime: "uni_app",
			};
		Ke.useAdapters(Je);
		var Ge = Ke,
			Xe = Ge.init;
		Ge.init = function (e) {
			e.env = e.spaceId;
			var t = Xe.call(this, e);
			(t.config.provider = "tencent"), (t.config.spaceId = e.spaceId);
			var n = t.auth;
			return (
				(t.auth = function (e) {
					var t = n.call(this, e);
					return (
						["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(
							function (e) {
								t[e] = A(t[e]).bind(t);
							},
						),
						t
					);
				}),
				(t.customAuth = t.auth),
				["deleteFile", "getTempFileURL", "downloadFile"].forEach(function (e) {
					t[e] = A(t[e]).bind(t);
				}),
				t
			);
		};
		var Ye,
			Qe,
			Ze = (function (e) {
				m(n, e);
				var t = k(n);
				function n() {
					return y(this, n), t.apply(this, arguments);
				}
				return (
					g(n, [
						{
							key: "getAccessToken",
							value: function () {
								var e = this;
								return new Promise(function (t, n) {
									e.setAccessToken("Anonymous_Access_token"), t("Anonymous_Access_token");
								});
							},
						},
						{
							key: "setupRequest",
							value: function (e, t) {
								var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),
									r = { "Content-Type": "application/json" };
								"auth" !== t && ((n.token = this.accessToken), (r["x-basement-token"] = this.accessToken)),
									(r["x-serverless-sign"] = K(n, this.config.clientSecret));
								var i = q(),
									o = i.APPID,
									a = i.PLATFORM,
									s = i.DEVICEID,
									c = i.CLIENT_SDK_VERSION;
								return (
									(r["x-client-platform"] = a),
									(r["x-client-appid"] = o),
									(r["x-client-device-id"] = s),
									(r["x-client-version"] = c),
									(r["x-client-token"] = W.getStorageSync("uni_id_token")),
									{ url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: JSON.parse(JSON.stringify(r)) }
								);
							},
						},
						{
							key: "uploadFileToOSS",
							value: function (e) {
								var t = this,
									n = e.url,
									r = e.formData,
									i = e.name,
									o = e.filePath,
									a = e.fileType,
									s = e.onUploadProgress;
								return new Promise(function (e, c) {
									var u = t.adapter.uploadFile({
										url: n,
										formData: r,
										name: i,
										filePath: o,
										fileType: a,
										success: function (t) {
											t && t.statusCode < 400 ? e(t) : c(new U({ code: "UPLOAD_FAILED", message: "\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25" }));
										},
										fail: function (e) {
											c(new U({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25" }));
										},
									});
									"function" == typeof s &&
										u &&
										"function" == typeof u.onProgressUpdate &&
										u.onProgressUpdate(function (e) {
											s({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });
										});
								});
							},
						},
						{
							key: "uploadFile",
							value: function (e) {
								var t,
									n = this,
									r = e.filePath,
									i = e.cloudPath,
									o = e.fileType,
									a = void 0 === o ? "image" : o,
									s = e.onUploadProgress;
								if (!i) throw new U({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4e0d\u53ef\u4e3a\u7a7a" });
								return this.getOSSUploadOptionsFromPath({ cloudPath: i })
									.then(function (e) {
										var i = e.result,
											o = i.url,
											c = i.formData,
											u = i.name,
											l = i.fileUrl;
										t = l;
										var f = { url: o, formData: c, name: u, filePath: r, fileType: a };
										return n.uploadFileToOSS(Object.assign({}, f, { onUploadProgress: s }));
									})
									.then(function () {
										return n.reportOSSUpload({ cloudPath: i });
									})
									.then(function (e) {
										return new Promise(function (n, i) {
											e.success
												? n({ success: !0, filePath: r, fileID: t })
												: i(new U({ code: "UPLOAD_FAILED", message: "\u6587\u4ef6\u4e0a\u4f20\u5931\u8d25" }));
										});
									});
							},
						},
					]),
					n
				);
			})(z),
			et = function (e) {
				var t = new Ze(e);
				["deleteFile", "getTempFileURL"].forEach(function (e) {
					t[e] = A(t[e]).bind(t);
				});
				var n = {
					signInAnonymously: function () {
						return t.authorize();
					},
					getLoginState: function () {
						return Promise.resolve(!1);
					},
				};
				return (
					(t.auth = function () {
						return n;
					}),
					(t.customAuth = t.auth),
					t
				);
			};
		function tt(e) {
			var t = e.name,
				n = e.data,
				r = e.spaceId,
				i = e.provider;
			Ye || ((Ye = q()), (Qe = { ak: E.appid, p: "android" === L ? "a" : "i", ut: $(), uuid: M() }));
			var o = JSON.parse(JSON.stringify(n || {})),
				a = t,
				s = r,
				c = { tencent: "t", aliyun: "a" }[i],
				u = Object.assign({}, Qe, { fn: a, sid: s, pvd: c });
			Object.assign(o, { clientInfo: Ye, uniCloudClientInfo: encodeURIComponent(JSON.stringify(u)) });
			var l = uni.getSystemInfoSync().deviceId;
			if (((o.uniCloudDeviceId = l), !o.uniIdToken)) {
				var f = W.getStorageSync("uni_id_token") || W.getStorageSync("uniIdToken");
				f && (o.uniIdToken = f);
			}
			return o;
		}
		var nt = [
				{
					rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
					content:
						"\uff0c\u4e91\u51fd\u6570[{functionName}]\u5728\u4e91\u7aef\u4e0d\u5b58\u5728\uff0c\u8bf7\u68c0\u67e5\u6b64\u4e91\u51fd\u6570\u540d\u79f0\u662f\u5426\u6b63\u786e\u5df2\u7ecf\u662f\u5426\u5df2\u4e0a\u4f20\u5230\u670d\u52a1\u7a7a\u95f4",
					mode: "append",
				},
			],
			rt = /[\\^$.*+?()[\]{}|]/g,
			it = RegExp(rt.source);
		function ot(e, t, n) {
			return e.replace(new RegExp((r = t) && it.test(r) ? r.replace(rt, "\\$&") : r, "g"), n);
			var r;
		}
		var at = Symbol("CLIENT_DB_INTERNAL");
		function st(e, t) {
			return (
				(e.then = "DoNotReturnProxyWithAFunctionNamedThen"),
				(e._internalType = at),
				new Proxy(e, {
					get: function (e, n, r) {
						return (function (e, t) {
							return Object.prototype.hasOwnProperty.call(e, t);
						})(e, n) ||
							e[n] ||
							"string" != typeof n
							? e[n]
							: t.get(e, n, r);
					},
				})
			);
		}
		var ct = (function (e) {
			m(n, e);
			var t = k(n);
			function n(e, r) {
				var i;
				return y(this, n), ((i = t.call(this, e)).code = r), i;
			}
			return n;
		})(x(Error));
		function ut(e) {
			switch (((t = e), Object.prototype.toString.call(t).slice(8, -1).toLowerCase())) {
				case "array":
					return e.map(function (e) {
						return ut(e);
					});
				case "object":
					return (
						e._internalType === at ||
							Object.keys(e).forEach(function (t) {
								e[t] = ut(e[t]);
							}),
						e
					);
				case "regexp":
					return { $regexp: { source: e.source, flags: e.flags } };
				case "date":
					return { $date: e.toISOString() };
				default:
					return e;
			}
			var t;
		}
		function lt() {
			var e,
				t,
				n = W.getStorageSync("uni_id_token") || "",
				r = n.split(".");
			if (!n || 3 !== r.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };
			try {
				e = JSON.parse(
					((t = r[1]),
					decodeURIComponent(
						atob(t)
							.split("")
							.map(function (e) {
								return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
							})
							.join(""),
					)),
				);
			} catch (n) {
				throw new Error("\u83b7\u53d6\u5f53\u524d\u7528\u6237\u4fe1\u606f\u51fa\u9519\uff0c\u8be6\u7ec6\u9519\u8bef\u4fe1\u606f\u4e3a\uff1a" + n.message);
			}
			return (e.tokenExpired = 1e3 * e.exp), delete e.exp, delete e.iat, e;
		}
		var ft = (function (e) {
			return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
		})(
			I(function (e, t) {
				Object.defineProperty(t, "__esModule", { value: !0 });
				var n = "chooseAndUploadFile:fail";
				function r(e, t) {
					return (
						e.tempFiles.forEach(function (e, n) {
							e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)),
								t && (e.fileType = t),
								(e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf(".")));
						}),
						e.tempFilePaths ||
							(e.tempFilePaths = e.tempFiles.map(function (e) {
								return e.path;
							})),
						e
					);
				}
				function i(e, t, n) {
					var r = n.onChooseFile,
						i = n.onUploadProgress;
					return t
						.then(function (e) {
							if (r) {
								var t = r(e);
								if (void 0 !== t)
									return Promise.resolve(t).then(function (t) {
										return void 0 === t ? e : t;
									});
							}
							return e;
						})
						.then(function (t) {
							return !1 === t
								? { errMsg: "chooseAndUploadFile:ok", tempFilePaths: [], tempFiles: [] }
								: (function (e, t) {
										var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
											r = arguments.length > 3 ? arguments[3] : void 0;
										(t = Object.assign({}, t)).errMsg = "chooseAndUploadFile:ok";
										var i = t.tempFiles,
											o = i.length,
											a = 0;
										return new Promise(function (s) {
											for (; a < n; ) c();
											function c() {
												var n = a++;
												if (n >= o)
													!i.find(function (e) {
														return !e.url && !e.errMsg;
													}) && s(t);
												else {
													var u = i[n];
													e.uploadFile({
														filePath: u.path,
														cloudPath: u.cloudPath,
														fileType: u.fileType,
														onUploadProgress: function (e) {
															(e.index = n), (e.tempFile = u), (e.tempFilePath = u.path), r && r(e);
														},
													})
														.then(function (e) {
															(u.url = e.fileID), n < o && c();
														})
														.catch(function (e) {
															(u.errMsg = e.errMsg || e.message), n < o && c();
														});
												}
											}
										});
								  })(e, t, 5, i);
						});
				}
				t.initChooseAndUploadFile = function (e) {
					return function () {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { type: "all" };
						return "image" === t.type
							? i(
									e,
									(function (e) {
										var t = e.count,
											i = e.sizeType,
											o = e.sourceType,
											a = void 0 === o ? ["album", "camera"] : o,
											s = e.extension;
										return new Promise(function (e, o) {
											uni.chooseImage({
												count: t,
												sizeType: i,
												sourceType: a,
												extension: s,
												success: function (t) {
													e(r(t, "image"));
												},
												fail: function (e) {
													o({ errMsg: e.errMsg.replace("chooseImage:fail", n) });
												},
											});
										});
									})(t),
									t,
							  )
							: "video" === t.type
							? i(
									e,
									(function (e) {
										var t = e.camera,
											i = e.compressed,
											o = e.maxDuration,
											a = e.sourceType,
											s = e.extension;
										return new Promise(function (e, c) {
											uni.chooseVideo({
												camera: t,
												compressed: i,
												maxDuration: o,
												sourceType: a,
												extension: s,
												success: function (t) {
													var n = t.tempFilePath,
														i = t.duration,
														o = t.size,
														a = t.height,
														s = t.width;
													e(
														r(
															{
																errMsg: "chooseVideo:ok",
																tempFilePaths: [n],
																tempFiles: [
																	{
																		name: (t.tempFile && t.tempFile.name) || "",
																		path: n,
																		size: o,
																		type: (t.tempFile && t.tempFile.type) || "",
																		width: s,
																		height: a,
																		duration: i,
																		fileType: "video",
																		cloudPath: "",
																	},
																],
															},
															"video",
														),
													);
												},
												fail: function (e) {
													c({ errMsg: e.errMsg.replace("chooseVideo:fail", n) });
												},
											});
										});
									})(t),
									t,
							  )
							: i(
									e,
									(function (e) {
										var t = e.count,
											i = e.extension;
										return new Promise(function (e, o) {
											var a = uni.chooseFile;
											if (("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (a = wx.chooseMessageFile), "function" != typeof a))
												return o({
													errMsg: n + " \u8bf7\u6307\u5b9a type \u7c7b\u578b\uff0c\u8be5\u5e73\u53f0\u4ec5\u652f\u6301\u9009\u62e9 image \u6216 video\u3002",
												});
											a({
												type: "all",
												count: t,
												extension: i,
												success: function (t) {
													e(r(t));
												},
												fail: function (e) {
													o({ errMsg: e.errMsg.replace("chooseFile:fail", n) });
												},
											});
										});
									})(t),
									t,
							  );
					};
				};
			}),
		);
		var ht = new ((function () {
			function e() {
				y(this, e);
			}
			return (
				g(e, [
					{
						key: "init",
						value: function (e) {
							var t = {},
								n = !1 !== e.debugFunction && !1;
							switch (e.provider) {
								case "tencent":
									t = Ge.init(Object.assign(e, { useDebugFunction: n }));
									break;
								case "aliyun":
									t = J(Object.assign(e, { useDebugFunction: n }));
									break;
								case "private":
									t = et(Object.assign(e, { useDebugFunction: n }));
									break;
								default:
									throw new Error("\u672a\u63d0\u4f9b\u6b63\u786e\u7684provider\u53c2\u6570");
							}
							Object({ NODE_ENV: "production", VUE_APP_PLATFORM: "app-plus", UNI_CLOUD_PROVIDER: [], HBX_USER_TOKEN: "", UNI_AUTOMATOR_WS_ENDPOINT: void 0 })
								.UNICLOUD_DEBUG;
							t.isReady = !1;
							var r = t.auth();
							return (
								(t.initUniCloud = r
									.getLoginState()
									.then(function (e) {
										return e ? Promise.resolve() : r.signInAnonymously();
									})
									.then(function () {
										return Promise.resolve();
									})
									.then(function () {
										var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
											n = e.address,
											r = e.port;
										if (n) (t.localAddress = n), (t.localPort = r);
										else if (t.debugInfo) {
											var i = "error",
												o = console[i];
											"remote" === t.debugInfo.initialLaunchType
												? ((t.debugInfo.forceRemote = !0),
												  o(
														"\u5f53\u524d\u5ba2\u6237\u7aef\u548cHBuilderX\u4e0d\u5728\u540c\u4e00\u5c40\u57df\u7f51\u4e0b\uff08\u6216\u5176\u4ed6\u7f51\u7edc\u539f\u56e0\u65e0\u6cd5\u8fde\u63a5HBuilderX\uff09\uff0cuniCloud\u672c\u5730\u8c03\u8bd5\u670d\u52a1\u4e0d\u5bf9\u5f53\u524d\u5ba2\u6237\u7aef\u751f\u6548\u3002\n- \u5982\u679c\u4e0d\u4f7f\u7528uniCloud\u672c\u5730\u8c03\u8bd5\u670d\u52a1\uff0c\u8bf7\u76f4\u63a5\u5ffd\u7565\u6b64\u4fe1\u606f\u3002\n- \u5982\u9700\u4f7f\u7528uniCloud\u672c\u5730\u8c03\u8bd5\u670d\u52a1\uff0c\u8bf7\u5c06\u5ba2\u6237\u7aef\u4e0e\u4e3b\u673a\u8fde\u63a5\u5230\u540c\u4e00\u5c40\u57df\u7f51\u4e0b\u5e76\u91cd\u65b0\u8fd0\u884c\u5230\u5ba2\u6237\u7aef\u3002\n- \u5982\u679c\u5728HBuilderX\u5f00\u542f\u7684\u72b6\u6001\u4e0b\u5207\u6362\u8fc7\u7f51\u7edc\u73af\u5883\uff0c\u8bf7\u91cd\u542fHBuilderX\u540e\u518d\u8bd5",
												  ))
												: o(
														"\u65e0\u6cd5\u8fde\u63a5uniCloud\u672c\u5730\u8c03\u8bd5\u670d\u52a1\uff0c\u8bf7\u68c0\u67e5\u5f53\u524d\u5ba2\u6237\u7aef\u662f\u5426\u4e0e\u4e3b\u673a\u5728\u540c\u4e00\u5c40\u57df\u7f51\u4e0b\u3002\n- \u5982\u9700\u4f7f\u7528uniCloud\u672c\u5730\u8c03\u8bd5\u670d\u52a1\uff0c\u8bf7\u5c06\u5ba2\u6237\u7aef\u4e0e\u4e3b\u673a\u8fde\u63a5\u5230\u540c\u4e00\u5c40\u57df\u7f51\u4e0b\u5e76\u91cd\u65b0\u8fd0\u884c\u5230\u5ba2\u6237\u7aef\u3002\n- \u5982\u679c\u5728HBuilderX\u5f00\u542f\u7684\u72b6\u6001\u4e0b\u5207\u6362\u8fc7\u7f51\u7edc\u73af\u5883\uff0c\u8bf7\u91cd\u542fHBuilderX\u540e\u518d\u8bd5",
												  );
										}
									})
									.then(function () {
										return new Promise(function (e) {
											setTimeout(function () {
												(L = uni.getSystemInfoSync().platform), (P = uni.getStorageSync("__DC_CLOUD_UUID") || N(32)), e();
											}, 0);
										});
									})
									.then(function () {
										t.isReady = !0;
									})),
								(function (e) {
									var t = e.callFunction;
									e.callFunction = function (e) {
										var n,
											r = this;
										n = this.isReady ? Promise.resolve() : this.initUniCloud;
										var i = e.name;
										return n.then(function () {
											e.data = tt({ name: i, data: e.data, provider: r.config.provider, spaceId: r.config.spaceId });
											var n = { aliyun: "aliyun", tencent: "tcb" }[r.config.provider];
											return new Promise(function (o, a) {
												t.call(r, e)
													.then(function (e) {
														if (r.config.useDebugFunction && e && e.requestId) {
															var t = JSON.stringify({ spaceId: r.config.spaceId, functionName: i, requestId: e.requestId });
															console.log("[".concat(n, "-request]").concat(t, "[/").concat(n, "-request]"));
														}
														o(e);
													})
													.catch(function (t) {
														if (r.config.useDebugFunction && t && t.requestId) {
															var o = JSON.stringify({ spaceId: r.config.spaceId, functionName: i, requestId: t.requestId });
															console.log("[".concat(n, "-request]").concat(o, "[/").concat(n, "-request]"));
														}
														t &&
															t.message &&
															(t.message = (function () {
																for (
																	var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
																		t = e.message,
																		n = void 0 === t ? "" : t,
																		r = e.extraInfo,
																		i = void 0 === r ? {} : r,
																		o = e.formatter,
																		a = void 0 === o ? [] : o,
																		s = 0;
																	s < a.length;
																	s++
																) {
																	var c = a[s],
																		u = c.rule,
																		l = c.content,
																		f = c.mode,
																		h = n.match(u);
																	if (h) {
																		for (var d = l, p = 1; p < h.length; p++) d = ot(d, "{$".concat(p, "}"), h[p]);
																		for (var g in i) d = ot(d, "{".concat(g, "}"), i[g]);
																		switch (f) {
																			case "replace":
																				return d;
																			case "append":
																			default:
																				return n + d;
																		}
																	}
																}
																return n;
															})({ message: "[".concat(e.name, "]: ").concat(t.message), formatter: nt, extraInfo: { functionName: i } })),
															a(t);
													});
											});
										});
									};
									var n = e.callFunction;
									(e.originCallFunction = e.callFunction),
										(e.callFunction = function (t) {
											return A(function (t) {
												var r = this,
													i = (e.isReady ? Promise.resolve() : e.initUniCloud).then(function () {
														return n.call(r, t);
													});
												return (
													Object.defineProperty(i, "result", {
														get: function () {
															return (
																console.warn(
																	"\u5f53\u524d\u8fd4\u56de\u7ed3\u679c\u4e3aPromise\u7c7b\u578b\uff0c\u4e0d\u53ef\u76f4\u63a5\u8bbf\u95ee\u5176result\u5c5e\u6027\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise",
																),
																{}
															);
														},
													}),
													i
												);
											}).call(this, t);
										});
								})(t),
								(function (e) {
									var t = e.uploadFile;
									e.uploadFile = function (e) {
										var n = this;
										return (this.isReady ? Promise.resolve() : this.initUniCloud).then(function () {
											return t.call(n, e);
										});
									};
									var n = e.uploadFile;
									e.uploadFile = function (e) {
										return A(n).call(this, e);
									};
								})(t),
								(function (e) {
									e.database = function () {
										if (this._database) return this._database;
										var t = {},
											n = {},
											r = (function () {
												function r(e, t, n) {
													y(this, r), (this.content = e), (this.prevStage = t), (this.actionName = n);
												}
												return (
													g(r, [
														{
															key: "toJSON",
															value: function () {
																for (var e = this, t = [e.content]; e.prevStage; ) (e = e.prevStage), t.push(e.content);
																return {
																	$db: t.reverse().map(function (e) {
																		return { $method: e.$method, $param: e.$param };
																	}),
																};
															},
														},
														{
															key: "get",
															value: function () {
																return this._send("get", Array.from(arguments));
															},
														},
														{
															key: "add",
															value: function () {
																return this._send("add", Array.from(arguments));
															},
														},
														{
															key: "remove",
															value: function () {
																return this._send("remove", Array.from(arguments));
															},
														},
														{
															key: "update",
															value: function () {
																return this._send("update", Array.from(arguments));
															},
														},
														{
															key: "end",
															value: function () {
																return this._send("end", Array.from(arguments));
															},
														},
														{
															key: "set",
															value: function () {
																throw new Error("clientDB\u7981\u6b62\u4f7f\u7528set\u65b9\u6cd5");
															},
														},
														{
															key: "_send",
															value: function (r, i) {
																var o = this.toJSON();
																return (
																	o.$db.push({ $method: r, $param: i }),
																	e
																		.callFunction({ name: "DCloud-clientDB", data: { action: this.actionName, command: o } })
																		.then(function (e) {
																			var r = e.result,
																				i = r.code,
																				o = r.message,
																				a = r.token,
																				s = r.tokenExpired,
																				c = r.systemInfo,
																				u = void 0 === c ? [] : c;
																			if (u)
																				for (var l = 0; l < u.length; l++) {
																					var f = u[l],
																						h = f.level,
																						d = f.message,
																						p = f.detail,
																						g = console["warn" === h ? "error" : h] || console.log,
																						v = "[System Info]" + d;
																					p && (v = "".concat(v, "\n\u8be6\u7ec6\u4fe1\u606f\uff1a").concat(p)), g(v);
																				}
																			return i
																				? Promise.reject(new ct(o, i))
																				: (a &&
																						s &&
																						t.refreshToken &&
																						t.refreshToken.forEach(function (e) {
																							e({ token: a, tokenExpired: s });
																						}),
																				  a &&
																						s &&
																						n.refreshToken &&
																						n.refreshToken.forEach(function (e) {
																							e({ token: a, tokenExpired: s });
																						}),
																				  Promise.resolve(e));
																		})
																		.catch(function (e) {
																			var t = new ct(e.message, e.code || "SYSTEM_ERROR");
																			return (
																				n.error &&
																					n.error.forEach(function (e) {
																						e(t);
																					}),
																				/fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) &&
																					console.warn(
																						"clientDB\u672a\u521d\u59cb\u5316\uff0c\u8bf7\u5728web\u63a7\u5236\u53f0\u4fdd\u5b58\u4e00\u6b21schema\u4ee5\u5f00\u542fclientDB",
																					),
																				Promise.reject(e)
																			);
																		})
																);
															},
														},
														{
															key: "useAggregate",
															get: function () {
																for (var e = this, t = !1; e.prevStage; ) {
																	var n = (e = e.prevStage).content.$method;
																	if ("aggregate" === n || "pipeline" === n) {
																		t = !0;
																		break;
																	}
																}
																return t;
															},
														},
														{
															key: "count",
															get: function () {
																if (!this.useAggregate)
																	return function () {
																		return this._send("count", Array.from(arguments));
																	};
																var e = this;
																return function () {
																	return a({ $method: "count", $param: ut(Array.from(arguments)) }, e, e.actionName);
																};
															},
														},
													]),
													r
												);
											})(),
											i = ["db.Geo", "db.command", "command.aggregate"];
										function o(e, t) {
											return i.indexOf("".concat(e, ".").concat(t)) > -1;
										}
										function a(e, t, n) {
											return st(new r(e, t, n), {
												get: function (e, t) {
													var r = "db";
													return (
														e && e.content && (r = e.content.$method),
														o(r, t)
															? a({ $method: t }, e, n)
															: function () {
																	return a({ $method: t, $param: ut(Array.from(arguments)) }, e, n);
															  }
													);
												},
											});
										}
										function s(e) {
											var t = e.path,
												n = e.method;
											return (function () {
												function e() {
													y(this, e), (this.param = Array.from(arguments));
												}
												return (
													g(e, [
														{
															key: "toJSON",
															value: function () {
																return {
																	$newDb: [].concat(
																		l(
																			t.map(function (e) {
																				return { $method: e };
																			}),
																		),
																		[{ $method: n, $param: this.param }],
																	),
																};
															},
														},
													]),
													e
												);
											})();
										}
										var c = {
												auth: {
													on: function (e, n) {
														(t[e] = t[e] || []), t[e].indexOf(n) > -1 || t[e].push(n);
													},
													off: function (e, n) {
														t[e] = t[e] || [];
														var r = t[e].indexOf(n);
														-1 !== r && t[e].splice(r, 1);
													},
												},
												on: function (e, t) {
													(n[e] = n[e] || []), n[e].indexOf(t) > -1 || n[e].push(t);
												},
												off: function (e, t) {
													n[e] = n[e] || [];
													var r = n[e].indexOf(t);
													-1 !== r && n[e].splice(r, 1);
												},
												env: st(
													{},
													{
														get: function (e, t) {
															return { $env: t };
														},
													},
												),
												action: function (e) {
													return st(
														{},
														{
															get: function (t, n) {
																return o("db", n)
																	? a({ $method: n }, null, e)
																	: function () {
																			return a({ $method: n, $param: ut(Array.from(arguments)) }, null, e);
																	  };
															},
														},
													);
												},
												Geo: st(
													{},
													{
														get: function (e, t) {
															return s({ path: ["Geo"], method: t });
														},
													},
												),
												getCloudEnv: function (e) {
													if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv\u53c2\u6570\u9519\u8bef");
													return { $env: e.replace("$cloudEnv_", "") };
												},
												get serverDate() {
													return s({ path: [], method: "serverDate" });
												},
												get RegExp() {
													return s({ path: [], method: "RegExp" });
												},
											},
											u = st(c, {
												get: function (e, t) {
													return o("db", t)
														? a({ $method: t })
														: function () {
																return a({ $method: t, $param: ut(Array.from(arguments)) });
														  };
												},
											});
										return (this._database = u), u;
									};
								})(t),
								(function (e) {
									(e.getCurrentUserInfo = lt), (e.chooseAndUploadFile = A(ft.initChooseAndUploadFile(e)));
								})(t),
								(t.init = this.init),
								t
							);
						},
					},
				]),
				e
			);
		})())();
		!(function () {
			var e = {};
			if (1 === [].length) (e = [][0]), (ht = ht.init(e));
			else {
				var t =
					[].length > 0
						? "\u5e94\u7528\u6709\u591a\u4e2a\u670d\u52a1\u7a7a\u95f4\uff0c\u8bf7\u901a\u8fc7uniCloud.init\u65b9\u6cd5\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u670d\u52a1\u7a7a\u95f4"
						: "\u5e94\u7528\u672a\u5173\u8054\u670d\u52a1\u7a7a\u95f4\uff0c\u8bf7\u5728uniCloud\u76ee\u5f55\u53f3\u952e\u5173\u8054\u670d\u52a1\u7a7a\u95f4";
				["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"].forEach(function (e) {
					ht[e] = function () {
						return console.error(t), Promise.reject(new U({ code: "SYS_ERR", message: t }));
					};
				});
			}
			Object.assign(ht, {
				get mixinDatacom() {
					return (
						(e = ht),
						{
							props: {
								localdata: {
									type: Array,
									default: function () {
										return [];
									},
								},
								options: {
									type: [Object, Array],
									default: function () {
										return {};
									},
								},
								collection: { type: String, default: "" },
								action: { type: String, default: "" },
								field: { type: String, default: "" },
								orderby: { type: String, default: "" },
								where: { type: [String, Object], default: "" },
								pageData: { type: String, default: "add" },
								pageCurrent: { type: Number, default: 1 },
								pageSize: { type: Number, default: 20 },
								getcount: { type: [Boolean, String], default: !1 },
								gettree: { type: [Boolean, String], default: !1 },
								gettreepath: { type: [Boolean, String], default: !1 },
								startwith: { type: String, default: "" },
								limitlevel: { type: Number, default: 10 },
								groupby: { type: String, default: "" },
								groupField: { type: String, default: "" },
								distinct: { type: [Boolean, String], default: !1 },
								foreignKey: { type: String, default: "" },
								loadtime: { type: String, default: "auto" },
								manual: { type: Boolean, default: !1 },
							},
							data: function () {
								return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };
							},
							created: function () {
								var e = this;
								(this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }),
									this.$watch(
										function () {
											var t = [];
											return (
												[
													"pageCurrent",
													"pageSize",
													"localdata",
													"collection",
													"action",
													"field",
													"orderby",
													"where",
													"getont",
													"getcount",
													"gettree",
													"groupby",
													"groupField",
													"distinct",
												].forEach(function (n) {
													t.push(e[n]);
												}),
												t
											);
										},
										function (t, n) {
											if ("manual" !== e.loadtime) {
												for (var r = !1, i = [], o = 2; o < t.length; o++) t[o] !== n[o] && (i.push(t[o]), (r = !0));
												t[0] !== n[0] && (e.mixinDatacomPage.current = e.pageCurrent),
													(e.mixinDatacomPage.size = e.pageSize),
													e.onMixinDatacomPropsChange(r, i);
											}
										},
									);
							},
							methods: {
								onMixinDatacomPropsChange: function (e, t) {},
								mixinDatacomEasyGet: function () {
									var e = this,
										t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
										n = t.getone,
										r = void 0 !== n && n,
										i = t.success,
										o = t.fail;
									this.mixinDatacomLoading ||
										((this.mixinDatacomLoading = !0),
										(this.mixinDatacomErrorMessage = ""),
										this.mixinDatacomGet()
											.then(function (t) {
												e.mixinDatacomLoading = !1;
												var n = t.result,
													o = n.data,
													a = n.count;
												e.getcount && (e.mixinDatacomPage.count = a), (e.mixinDatacomHasMore = o.length < e.pageSize);
												var s = r ? (o.length ? o[0] : void 0) : o;
												(e.mixinDatacomResData = s), i && i(s);
											})
											.catch(function (t) {
												(e.mixinDatacomLoading = !1), (e.mixinDatacomErrorMessage = t), o && o(t);
											}));
								},
								mixinDatacomGet: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
										n = e.database(),
										r = t.action || this.action;
									r && (n = n.action(r));
									var i = t.collection || this.collection;
									n = n.collection(i);
									var o = t.where || this.where;
									o && Object.keys(o).length && (n = n.where(o));
									var a = t.field || this.field;
									a && (n = n.field(a));
									var s = t.foreignKey || this.foreignKey;
									s && (n = n.foreignKey(s));
									var c = t.groupby || this.groupby;
									c && (n = n.groupBy(c));
									var u = t.groupField || this.groupField;
									u && (n = n.groupField(u)), !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
									var l = t.orderby || this.orderby;
									l && (n = n.orderBy(l));
									var f = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
										h = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
										d = void 0 !== t.getcount ? t.getcount : this.getcount,
										p = void 0 !== t.gettree ? t.gettree : this.gettree,
										g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
										v = { getCount: d },
										y = {
											limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
											startWith: void 0 !== t.startwith ? t.startwith : this.startwith,
										};
									return (
										p && (v.getTree = y),
										g && (v.getTreePath = y),
										(n = n
											.skip(h * (f - 1))
											.limit(h)
											.get(v))
									);
								},
							},
						}
					);
					var e;
				},
			});
		})();
		var dt = ht;
		t.default = dt;
	},
	535: function (e, t, n) {
		"use strict";
		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}
		function i(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				(r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		function o(e, t, n) {
			return t && i(e.prototype, t), n && i(e, n), e;
		}
		Object.defineProperty(t, "__esModule", { value: !0 }),
			(t.initVueI18n = function (e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en",
					n = arguments.length > 2 ? arguments[2] : void 0,
					r = new h({ locale: n || t, fallbackLocale: t, messages: e }),
					i = function (e, t) {
						if ("function" != typeof getApp)
							i = function (e, t) {
								return r.t(e, t);
							};
						else {
							var o = getApp().$vm;
							o.$t && o.$i18n
								? (d(o, r),
								  (i = function (e, t) {
										var n = o.$i18n,
											i = n.silentTranslationWarn;
										n.silentTranslationWarn = !0;
										var a = o.$t(e, t);
										return (n.silentTranslationWarn = i), a !== e ? a : r.t(e, n.locale, t);
								  }))
								: (n || r.setLocale(p()),
								  (i = function (e, t) {
										return r.t(e, t);
								  }));
						}
						return i(e, t);
					};
				return {
					t: function (e, t) {
						return i(e, t);
					},
					getLocale: function () {
						return r.getLocale();
					},
					setLocale: function (e) {
						return r.setLocale(e);
					},
					mixin: {
						beforeCreate: function () {
							var e = this,
								t = r.watchLocale(function () {
									e.$forceUpdate();
								});
							this.$once("hook:beforeDestroy", function () {
								t();
							});
						},
						methods: {
							$$t: function (e, t) {
								return i(e, t);
							},
						},
					},
				};
			}),
			(t.I18n = void 0);
		var a = (function () {
				function e() {
					r(this, e), (this._caches = Object.create(null));
				}
				return (
					o(e, [
						{
							key: "interpolate",
							value: function (e, t) {
								if (!t) return [e];
								var n = this._caches[e];
								return (
									n ||
										((n = (function (e) {
											var t = [],
												n = 0,
												r = "";
											for (; n < e.length; ) {
												var i = e[n++];
												if ("{" === i) {
													r && t.push({ type: "text", value: r }), (r = "");
													var o = "";
													for (i = e[n++]; void 0 !== i && "}" !== i; ) (o += i), (i = e[n++]);
													var a = "}" === i,
														u = s.test(o) ? "list" : a && c.test(o) ? "named" : "unknown";
													t.push({ value: o, type: u });
												} else "%" === i ? "{" !== e[n] && (r += i) : (r += i);
											}
											return r && t.push({ type: "text", value: r }), t;
										})(e)),
										(this._caches[e] = n)),
									(function (e, t) {
										var n = [],
											r = 0,
											i = Array.isArray(t) ? "list" : ((o = t), null !== o && "object" == typeof o ? "named" : "unknown");
										var o;
										if ("unknown" === i) return n;
										for (; r < e.length; ) {
											var a = e[r];
											switch (a.type) {
												case "text":
													n.push(a.value);
													break;
												case "list":
													n.push(t[parseInt(a.value, 10)]);
													break;
												case "named":
													"named" === i && n.push(t[a.value]);
													break;
												case "unknown":
													0;
											}
											r++;
										}
										return n;
									})(n, t)
								);
							},
						},
					]),
					e
				);
			})(),
			s = /^(?:\d)+/,
			c = /^(?:\w)+/;
		var u = Object.prototype.hasOwnProperty,
			l = new a();
		function f(e, t) {
			if (e) {
				if (t[(e = e.trim().replace(/_/g, "-"))]) return e;
				if (0 === (e = e.toLowerCase()).indexOf("zh"))
					return -1 !== e.indexOf("-hans")
						? "zh-Hans"
						: -1 !== e.indexOf("-hant")
						? "zh-Hant"
						: ((n = e),
						  ["-tw", "-hk", "-mo", "-cht"].find(function (e) {
								return -1 !== n.indexOf(e);
						  })
								? "zh-Hant"
								: "zh-Hans");
				var n,
					r = (function (e, t) {
						return t.find(function (t) {
							return 0 === e.indexOf(t);
						});
					})(e, ["en", "fr", "es"]);
				return r || void 0;
			}
		}
		var h = (function () {
			function e(t) {
				var n = t.locale,
					i = t.fallbackLocale,
					o = t.messages,
					a = t.watcher,
					s = t.formater;
				r(this, e),
					(this.locale = "en"),
					(this.fallbackLocale = "en"),
					(this.message = {}),
					(this.messages = {}),
					(this.watchers = []),
					i && (this.fallbackLocale = i),
					(this.formater = s || l),
					(this.messages = o),
					this.setLocale(n),
					a && this.watchLocale(a);
			}
			return (
				o(e, [
					{
						key: "setLocale",
						value: function (e) {
							var t = this,
								n = this.locale;
							(this.locale = f(e, this.messages) || this.fallbackLocale),
								(this.message = this.messages[this.locale]),
								this.watchers.forEach(function (e) {
									e(t.locale, n);
								});
						},
					},
					{
						key: "getLocale",
						value: function () {
							return this.locale;
						},
					},
					{
						key: "watchLocale",
						value: function (e) {
							var t = this,
								n = this.watchers.push(e) - 1;
							return function () {
								t.watchers.splice(n, 1);
							};
						},
					},
					{
						key: "t",
						value: function (e, t, n) {
							var r = this.message;
							return (
								"string" == typeof t ? (t = f(t, this.messages)) && (r = this.messages[t]) : (n = t),
								(function (e, t) {
									return u.call(e, t);
								})(r, e)
									? this.formater.interpolate(r[e], n).join("")
									: (console.warn("Cannot translate the value of keypath ".concat(e, ". Use the value of keypath as default.")), e)
							);
						},
					},
				]),
				e
			);
		})();
		function d(e, t) {
			e.$i18n &&
				e.$i18n.vm.$watch(
					"locale",
					function (e) {
						t.setLocale(e);
					},
					{ immediate: !0 },
				);
		}
		function p() {
			return "undefined" != typeof navigator
				? navigator.userLanguage || navigator.language
				: "undefined" != typeof plus
				? plus.os.language
				: uni.getSystemInfoSync().language;
		}
		t.I18n = h;
	},
	56: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(37),
			i = n.n(r);
		for (var o in r)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return r[e];
					});
				})(o);
		t.default = i.a;
	},
	564: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(195),
			i = n.n(r);
		for (var o in r)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return r[e];
					});
				})(o);
		t.default = i.a;
	},
	565: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(198),
			i = n.n(r);
		for (var o in r)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return r[e];
					});
				})(o);
		t.default = i.a;
	},
	57: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(40),
			i = n.n(r);
		for (var o in r)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return r[e];
					});
				})(o);
		t.default = i.a;
	},
	59: function (e, t, n) {
		e.exports = n(61);
	},
	6: function (e, t, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(7).default, Vue.prototype.__$appStyle__);
	},
	60: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(42),
			i = n(35);
		for (var o in i)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return i[e];
					});
				})(o);
		var a = n(0);
		var s = Object(a.a)(i.default, r.b, r.c, !1, null, "8013aa56", "636e6a16", !1, r.a, void 0);
		(function (e) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(56).default, this.options.style) : Object.assign(this.options.style, n(56).default);
		}).call(s),
			(t.default = s.exports);
	},
	61: function (e, t, n) {
		var r = (function (e) {
			"use strict";
			var t = Object.prototype,
				n = t.hasOwnProperty,
				r = "function" == typeof Symbol ? Symbol : {},
				i = r.iterator || "@@iterator",
				o = r.asyncIterator || "@@asyncIterator",
				a = r.toStringTag || "@@toStringTag";
			function s(e, t, n) {
				return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
			}
			try {
				s({}, "");
			} catch (e) {
				s = function (e, t, n) {
					return (e[t] = n);
				};
			}
			function c(e, t, n, r) {
				var i = t && t.prototype instanceof f ? t : f,
					o = Object.create(i.prototype),
					a = new w(r || []);
				return (
					(o._invoke = (function (e, t, n) {
						var r = "suspendedStart";
						return function (i, o) {
							if ("executing" === r) throw new Error("Generator is already running");
							if ("completed" === r) {
								if ("throw" === i) throw o;
								return T();
							}
							for (n.method = i, n.arg = o; ; ) {
								var a = n.delegate;
								if (a) {
									var s = _(a, n);
									if (s) {
										if (s === l) continue;
										return s;
									}
								}
								if ("next" === n.method) n.sent = n._sent = n.arg;
								else if ("throw" === n.method) {
									if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
									n.dispatchException(n.arg);
								} else "return" === n.method && n.abrupt("return", n.arg);
								r = "executing";
								var c = u(e, t, n);
								if ("normal" === c.type) {
									if (((r = n.done ? "completed" : "suspendedYield"), c.arg === l)) continue;
									return { value: c.arg, done: n.done };
								}
								"throw" === c.type && ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
							}
						};
					})(e, n, a)),
					o
				);
			}
			function u(e, t, n) {
				try {
					return { type: "normal", arg: e.call(t, n) };
				} catch (e) {
					return { type: "throw", arg: e };
				}
			}
			e.wrap = c;
			var l = {};
			function f() {}
			function h() {}
			function d() {}
			var p = {};
			p[i] = function () {
				return this;
			};
			var g = Object.getPrototypeOf,
				v = g && g(g(S([])));
			v && v !== t && n.call(v, i) && (p = v);
			var y = (d.prototype = f.prototype = Object.create(p));
			function m(e) {
				["next", "throw", "return"].forEach(function (t) {
					s(e, t, function (e) {
						return this._invoke(t, e);
					});
				});
			}
			function k(e, t) {
				var r;
				this._invoke = function (i, o) {
					function a() {
						return new t(function (r, a) {
							!(function r(i, o, a, s) {
								var c = u(e[i], e, o);
								if ("throw" !== c.type) {
									var l = c.arg,
										f = l.value;
									return f && "object" == typeof f && n.call(f, "__await")
										? t.resolve(f.__await).then(
												function (e) {
													r("next", e, a, s);
												},
												function (e) {
													r("throw", e, a, s);
												},
										  )
										: t.resolve(f).then(
												function (e) {
													(l.value = e), a(l);
												},
												function (e) {
													return r("throw", e, a, s);
												},
										  );
								}
								s(c.arg);
							})(i, o, r, a);
						});
					}
					return (r = r ? r.then(a, a) : a());
				};
			}
			function _(e, t) {
				var n = e.iterator[t.method];
				if (void 0 === n) {
					if (((t.delegate = null), "throw" === t.method)) {
						if (e.iterator.return && ((t.method = "return"), (t.arg = void 0), _(e, t), "throw" === t.method)) return l;
						(t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
					}
					return l;
				}
				var r = u(n, e.iterator, t.arg);
				if ("throw" === r.type) return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), l;
				var i = r.arg;
				return i
					? i.done
						? ((t[e.resultName] = i.value), (t.next = e.nextLoc), "return" !== t.method && ((t.method = "next"), (t.arg = void 0)), (t.delegate = null), l)
						: i
					: ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), l);
			}
			function b(e) {
				var t = { tryLoc: e[0] };
				1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
			}
			function x(e) {
				var t = e.completion || {};
				(t.type = "normal"), delete t.arg, (e.completion = t);
			}
			function w(e) {
				(this.tryEntries = [{ tryLoc: "root" }]), e.forEach(b, this), this.reset(!0);
			}
			function S(e) {
				if (e) {
					var t = e[i];
					if (t) return t.call(e);
					if ("function" == typeof e.next) return e;
					if (!isNaN(e.length)) {
						var r = -1,
							o = function t() {
								for (; ++r < e.length; ) if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
								return (t.value = void 0), (t.done = !0), t;
							};
						return (o.next = o);
					}
				}
				return { next: T };
			}
			function T() {
				return { value: void 0, done: !0 };
			}
			return (
				(h.prototype = y.constructor = d),
				(d.constructor = h),
				(h.displayName = s(d, a, "GeneratorFunction")),
				(e.isGeneratorFunction = function (e) {
					var t = "function" == typeof e && e.constructor;
					return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name));
				}),
				(e.mark = function (e) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : ((e.__proto__ = d), s(e, a, "GeneratorFunction")), (e.prototype = Object.create(y)), e;
				}),
				(e.awrap = function (e) {
					return { __await: e };
				}),
				m(k.prototype),
				(k.prototype[o] = function () {
					return this;
				}),
				(e.AsyncIterator = k),
				(e.async = function (t, n, r, i, o) {
					void 0 === o && (o = Promise);
					var a = new k(c(t, n, r, i), o);
					return e.isGeneratorFunction(n)
						? a
						: a.next().then(function (e) {
								return e.done ? e.value : a.next();
						  });
				}),
				m(y),
				s(y, a, "Generator"),
				(y[i] = function () {
					return this;
				}),
				(y.toString = function () {
					return "[object Generator]";
				}),
				(e.keys = function (e) {
					var t = [];
					for (var n in e) t.push(n);
					return (
						t.reverse(),
						function n() {
							for (; t.length; ) {
								var r = t.pop();
								if (r in e) return (n.value = r), (n.done = !1), n;
							}
							return (n.done = !0), n;
						}
					);
				}),
				(e.values = S),
				(w.prototype = {
					constructor: w,
					reset: function (e) {
						if (
							((this.prev = 0),
							(this.next = 0),
							(this.sent = this._sent = void 0),
							(this.done = !1),
							(this.delegate = null),
							(this.method = "next"),
							(this.arg = void 0),
							this.tryEntries.forEach(x),
							!e)
						)
							for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
					},
					stop: function () {
						this.done = !0;
						var e = this.tryEntries[0].completion;
						if ("throw" === e.type) throw e.arg;
						return this.rval;
					},
					dispatchException: function (e) {
						if (this.done) throw e;
						var t = this;
						function r(n, r) {
							return (a.type = "throw"), (a.arg = e), (t.next = n), r && ((t.method = "next"), (t.arg = void 0)), !!r;
						}
						for (var i = this.tryEntries.length - 1; i >= 0; --i) {
							var o = this.tryEntries[i],
								a = o.completion;
							if ("root" === o.tryLoc) return r("end");
							if (o.tryLoc <= this.prev) {
								var s = n.call(o, "catchLoc"),
									c = n.call(o, "finallyLoc");
								if (s && c) {
									if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
									if (this.prev < o.finallyLoc) return r(o.finallyLoc);
								} else if (s) {
									if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
								} else {
									if (!c) throw new Error("try statement without catch or finally");
									if (this.prev < o.finallyLoc) return r(o.finallyLoc);
								}
							}
						}
					},
					abrupt: function (e, t) {
						for (var r = this.tryEntries.length - 1; r >= 0; --r) {
							var i = this.tryEntries[r];
							if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
								var o = i;
								break;
							}
						}
						o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
						var a = o ? o.completion : {};
						return (a.type = e), (a.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), l) : this.complete(a);
					},
					complete: function (e, t) {
						if ("throw" === e.type) throw e.arg;
						return (
							"break" === e.type || "continue" === e.type
								? (this.next = e.arg)
								: "return" === e.type
								? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
								: "normal" === e.type && t && (this.next = t),
							l
						);
					},
					finish: function (e) {
						for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t];
							if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), l;
						}
					},
					catch: function (e) {
						for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t];
							if (n.tryLoc === e) {
								var r = n.completion;
								if ("throw" === r.type) {
									var i = r.arg;
									x(n);
								}
								return i;
							}
						}
						throw new Error("illegal catch attempt");
					},
					delegateYield: function (e, t, n) {
						return (this.delegate = { iterator: S(e), resultName: t, nextLoc: n }), "next" === this.method && (this.arg = void 0), l;
					},
				}),
				e
			);
		})(e.exports);
		try {
			regeneratorRuntime = r;
		} catch (e) {
			Function("r", "regeneratorRuntime = r")(r);
		}
	},
	62: function (e, t, n) {
		"use strict";
		n.r(t), (t.default = { appid: "__UNI__B" });
	},
	64: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(41),
			i = n(38);
		for (var o in i)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return i[e];
					});
				})(o);
		var a = n(0);
		var s = Object(a.a)(i.default, r.b, r.c, !1, null, "eaa8405c", "67b1660a", !1, r.a, void 0);
		(function (e) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(57).default, this.options.style) : Object.assign(this.options.style, n(57).default);
		}).call(s),
			(t.default = s.exports);
	},
	664: function (e, t, n) {
		"use strict";
		n.r(t);
		n(6);
		var r = n(83);
		"undefined" == typeof Promise ||
			Promise.prototype.finally ||
			(Promise.prototype.finally = function (e) {
				var t = this.constructor;
				return this.then(
					function (n) {
						return t.resolve(e()).then(function () {
							return n;
						});
					},
					function (n) {
						return t.resolve(e()).then(function () {
							throw n;
						});
					},
				);
			}),
			(r.default.mpType = "page"),
			(r.default.route = "pages/extUI/data-checkbox/data-checkbox"),
			(r.default.el = "#root"),
			new Vue(r.default);
	},
	665: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(517),
			i = n(193);
		for (var o in i)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return i[e];
					});
				})(o);
		var a = n(0);
		var s = Object(a.a)(i.default, r.b, r.c, !1, null, "53609cac", "21857049", !1, r.a, void 0);
		(function (e) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(564).default, this.options.style) : Object.assign(this.options.style, n(564).default);
		}).call(s),
			(t.default = s.exports);
	},
	7: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(1),
			i = n.n(r);
		for (var o in r)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return r[e];
					});
				})(o);
		t.default = i.a;
	},
	8: function (e, t, n) {
		"use strict";
		n.r(t);
		var r = n(4),
			i = n.n(r);
		for (var o in r)
			"default" !== o &&
				(function (e) {
					n.d(t, e, function () {
						return r[e];
					});
				})(o);
		t.default = i.a;
	},
	83: function (e, t, n) {
		"use strict";
		var r = n(430),
			i = n(196),
			o = n(0);
		var a = Object(o.a)(i.default, r.b, r.c, !1, null, null, "e09fd774", !1, r.a, void 0);
		(function (e) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(565).default, this.options.style) : Object.assign(this.options.style, n(565).default);
		}).call(a),
			(t.default = a.exports);
	},
});
