!(function (t) {
	var e = {};
	function n(o) {
		if (e[o]) return e[o].exports;
		var i = (e[o] = { i: o, l: !1, exports: {} });
		return t[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, o) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
		}),
		(n.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var o = Object.create(null);
			if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var i in t)
					n.d(
						o,
						i,
						function (e) {
							return t[e];
						}.bind(null, i),
					);
			return o;
		}),
		(n.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return n.d(e, "a", e), e;
		}),
		(n.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(n.p = ""),
		n((n.s = 740));
})({
	0: function (t, e, n) {
		"use strict";
		function o(t, e, n, o, i, r, u, a, s, c) {
			var l,
				f = "function" == typeof t ? t.options : t;
			if (s) {
				f.components || (f.components = {});
				var p = Object.prototype.hasOwnProperty;
				for (var d in s) p.call(s, d) && !p.call(f.components, d) && (f.components[d] = s[d]);
			}
			if (
				(c &&
					((c.beforeCreate || (c.beforeCreate = [])).unshift(function () {
						this[c.__module] = this;
					}),
					(f.mixins || (f.mixins = [])).push(c)),
				e && ((f.render = e), (f.staticRenderFns = n), (f._compiled = !0)),
				o && (f.functional = !0),
				r && (f._scopeId = "data-v-" + r),
				u
					? ((l = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								i && i.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(u);
					  }),
					  (f._ssrRegister = l))
					: i &&
					  (l = a
							? function () {
									i.call(this, this.$root.$options.shadowRoot);
							  }
							: i),
				l)
			)
				if (f.functional) {
					f._injectStyles = l;
					var _ = f.render;
					f.render = function (t, e) {
						return l.call(e), _(t, e);
					};
				} else {
					var g = f.beforeCreate;
					f.beforeCreate = g ? [].concat(g, l) : [l];
				}
			return { exports: t, options: f };
		}
		n.d(e, "a", function () {
			return o;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	116: function (t, e, n) {
		"use strict";
		var o = n(443),
			i = n(397),
			r = n(0);
		var u = Object(r.a)(i.default, o.b, o.c, !1, null, null, "39362354", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(630).default, this.options.style) : Object.assign(this.options.style, n(630).default);
		}).call(u),
			(e.default = u.exports);
	},
	13: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(5),
			i = n(2);
		for (var r in i)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(r);
		var u = n(0);
		var a = Object(u.a)(i.default, o.b, o.c, !1, null, "168bca6c", "39eb9647", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(8).default, this.options.style) : Object.assign(this.options.style, n(8).default);
		}).call(a),
			(e.default = a.exports);
	},
	2: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(3),
			i = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		e.default = i.a;
	},
	3: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var o = {
			name: "UniSection",
			props: { type: { type: String, default: "" }, title: { type: String, default: "" }, subTitle: { type: String, default: "" } },
			data: function () {
				return {};
			},
			watch: {
				title: function (t) {
					uni.report && "" !== t && uni.report("title", t);
				},
			},
			methods: {
				onClick: function () {
					this.$emit("click");
				},
			},
		};
		e.default = o;
	},
	38: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(39),
			i = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		e.default = i.a;
	},
	39: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var o = {
			name: "uniGroup",
			props: { title: { type: String, default: "" }, top: { type: [Number, String], default: 10 }, mode: { type: String, default: "default" } },
			data: function () {
				return { margin: !1, border: !1 };
			},
			watch: {
				title: function (t) {
					uni.report && "" !== t && uni.report("title", t);
				},
			},
			created: function () {
				(this.form = this.getForm()), this.form && ((this.margin = !0), (this.border = this.form.border));
			},
			methods: {
				getForm: function () {
					for (var t = this.$parent, e = t.$options.name; "uniForms" !== e; ) {
						if (!(t = t.$parent)) return !1;
						e = t.$options.name;
					}
					return t;
				},
				onClick: function () {
					this.$emit("click");
				},
			},
		};
		e.default = o;
	},
	397: function (t, e, n) {
		"use strict";
		var o = n(398),
			i = n.n(o);
		e.default = i.a;
	},
	398: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		e.default = {
			components: {},
			data: function () {
				return { appear: !1, name: "", mobile: "139 9999 9999", weixin: "sskd", message: "", errorMessage: "" };
			},
			onReady: function () {},
			methods: {},
		};
	},
	399: function (t, e) {
		t.exports = {
			".example": { "": { paddingTop: [0, 0, 0, 2], paddingRight: ["15", 0, 0, 2], paddingBottom: [0, 0, 0, 2], paddingLeft: ["15", 0, 0, 2] } },
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
					paddingTop: [0, 0, 0, 11],
					paddingRight: [0, 0, 0, 11],
					paddingBottom: [0, 0, 0, 11],
					paddingLeft: [0, 0, 0, 11],
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
			".uni-wrap": { "": { flexDirection: ["column", 0, 0, 9], height: [100, 0, 0, 9], flex: [1, 0, 0, 9] } },
			".scroll": { "": { flexDirection: ["column", 0, 0, 10], flex: [1, 0, 0, 10] } },
			"@VERSION": 2,
		};
	},
	4: function (t, e) {
		t.exports = {
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
	40: function (t, e) {
		t.exports = {
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
	41: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return o;
		}),
			n.d(e, "c", function () {
				return i;
			}),
			n.d(e, "a", function () {});
		var o = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n(
					"view",
					{ staticClass: ["uni-group"], class: ["uni-group--" + t.mode, t.margin ? "group-margin" : ""], style: { marginTop: t.top + "px" } },
					[
						t._t("title", [
							t.title
								? n("view", { staticClass: ["uni-group__title"], style: { "padding-left": t.border ? "30px" : "15px" } }, [
										n("u-text", { staticClass: ["uni-group__title-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.title))]),
								  ])
								: t._e(),
						]),
						n("view", { staticClass: ["uni-group__content"], class: { "group-conent-padding": t.border } }, [t._t("default")], 2),
					],
					2,
				);
			},
			i = [];
	},
	443: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return i;
		}),
			n.d(e, "c", function () {
				return r;
			}),
			n.d(e, "a", function () {
				return o;
			});
		var o = { uniSection: n(13).default, uniGroup: n(64).default },
			i = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					n(
						"view",
						[
							n("view", { staticClass: ["example-info"] }, [
								n("u-text", { staticClass: ["example-info-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
									t._v(
										"\u5206\u7ec4\u7ec4\u4ef6\u53ef\u7528\u4e8e\u5c06\u7ec4\u4ef6\u5206\u7ec4\uff0c\u6dfb\u52a0\u95f4\u9694\uff0c\u4ee5\u4ea7\u751f\u660e\u663e\u7684\u533a\u5757",
									),
								]),
							]),
							n("uni-section", { attrs: { title: "\u57fa\u7840\u5206\u7ec4", type: "line" } }),
							n("uni-group", [
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
							]),
							n("uni-group", { attrs: { title: "\u57fa\u672c\u6a21\u5f0f", marginTop: "20" } }, [
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
							]),
							n("uni-section", { attrs: { title: "\u5361\u7247\u5206\u7ec4", type: "line" } }),
							n("uni-group", { attrs: { mode: "card" } }, [
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
							]),
							n("uni-group", { attrs: { title: "card \u6a21\u5f0f", mode: "card" } }, [
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
								n("view", [n("u-text", [t._v(" \u5206\u7ec4\u5185\u5bb9 ")])]),
							]),
						],
						1,
					),
				]);
			},
			r = [];
	},
	5: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return o;
		}),
			n.d(e, "c", function () {
				return i;
			}),
			n.d(e, "a", function () {});
		var o = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n(
					"view",
					{ staticClass: ["uni-section"], attrs: { nvue: !0 } },
					[
						t.type ? n("view", { staticClass: ["uni-section__head"] }, [n("view", { staticClass: ["uni-section__head-tag"], class: t.type })]) : t._e(),
						n("view", { staticClass: ["uni-section__content"] }, [
							n("u-text", { staticClass: ["uni-section__content-title"], class: { distraction: !t.subTitle }, appendAsTree: !0, attrs: { append: "tree" } }, [
								t._v(t._s(t.title)),
							]),
							t.subTitle
								? n("u-text", { staticClass: ["uni-section__content-sub"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.subTitle))])
								: t._e(),
						]),
						t._t("default"),
					],
					2,
				);
			},
			i = [];
	},
	57: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(40),
			i = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		e.default = i.a;
	},
	6: function (t, e, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(7).default, Vue.prototype.__$appStyle__);
	},
	630: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(399),
			i = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		e.default = i.a;
	},
	64: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(41),
			i = n(38);
		for (var r in i)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(r);
		var u = n(0);
		var a = Object(u.a)(i.default, o.b, o.c, !1, null, "eaa8405c", "67b1660a", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(57).default, this.options.style) : Object.assign(this.options.style, n(57).default);
		}).call(a),
			(e.default = a.exports);
	},
	7: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(1),
			i = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		e.default = i.a;
	},
	740: function (t, e, n) {
		"use strict";
		n.r(e);
		n(6);
		var o = n(116);
		"undefined" == typeof Promise ||
			Promise.prototype.finally ||
			(Promise.prototype.finally = function (t) {
				var e = this.constructor;
				return this.then(
					function (n) {
						return e.resolve(t()).then(function () {
							return n;
						});
					},
					function (n) {
						return e.resolve(t()).then(function () {
							throw n;
						});
					},
				);
			}),
			(o.default.mpType = "page"),
			(o.default.route = "pages/extUI/group/group"),
			(o.default.el = "#root"),
			new Vue(o.default);
	},
	8: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(4),
			i = n.n(o);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(r);
		e.default = i.a;
	},
});
