!(function (t) {
	var e = {};
	function i(n) {
		if (e[n]) return e[n].exports;
		var a = (e[n] = { i: n, l: !1, exports: {} });
		return t[n].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
	}
	(i.m = t),
		(i.c = e),
		(i.d = function (t, e, n) {
			i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
		}),
		(i.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(i.t = function (t, e) {
			if ((1 & e && (t = i(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var n = Object.create(null);
			if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var a in t)
					i.d(
						n,
						a,
						function (e) {
							return t[e];
						}.bind(null, a),
					);
			return n;
		}),
		(i.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return i.d(e, "a", e), e;
		}),
		(i.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(i.p = ""),
		i((i.s = 642));
})({
	0: function (t, e, i) {
		"use strict";
		function n(t, e, i, n, a, s, r, u, o, p) {
			var l,
				c = "function" == typeof t ? t.options : t;
			if (o) {
				c.components || (c.components = {});
				var d = Object.prototype.hasOwnProperty;
				for (var f in o) d.call(o, f) && !d.call(c.components, f) && (c.components[f] = o[f]);
			}
			if (
				(p &&
					((p.beforeCreate || (p.beforeCreate = [])).unshift(function () {
						this[p.__module] = this;
					}),
					(c.mixins || (c.mixins = [])).push(p)),
				e && ((c.render = e), (c.staticRenderFns = i), (c._compiled = !0)),
				n && (c.functional = !0),
				s && (c._scopeId = "data-v-" + s),
				r
					? ((l = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								a && a.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(r);
					  }),
					  (c._ssrRegister = l))
					: a &&
					  (l = u
							? function () {
									a.call(this, this.$root.$options.shadowRoot);
							  }
							: a),
				l)
			)
				if (c.functional) {
					c._injectStyles = l;
					var m = c.render;
					c.render = function (t, e) {
						return l.call(e), m(t, e);
					};
				} else {
					var _ = c.beforeCreate;
					c.beforeCreate = _ ? [].concat(_, l) : [l];
				}
			return { exports: t, options: c };
		}
		i.d(e, "a", function () {
			return n;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	128: function (t, e, i) {
		"use strict";
		var n = i(129),
			a = i.n(n);
		e.default = a.a;
	},
	129: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n = {
			data: function () {
				return {
					title: "input",
					focus: !1,
					inputValue: "",
					showClearIcon: !1,
					inputClearValue: "",
					changeValue: "",
					showPassword: !0,
					src: "../../../static/eye-1.png",
					platform: "",
					isNvue: !1,
				};
			},
			methods: {
				onKeyInput: function (t) {
					this.inputValue = t.detail.value;
				},
				replaceInput: function (t) {
					"11" === t.detail.value && (this.changeValue = "2");
				},
				hideKeyboard: function (t) {
					"123" === t.detail.value && uni.hideKeyboard();
				},
				clearInput: function (t) {
					(this.inputClearValue = t.detail.value), t.detail.value.length > 0 ? (this.showClearIcon = !0) : (this.showClearIcon = !1);
				},
				clearIcon: function () {
					(this.inputClearValue = ""), (this.showClearIcon = !1);
				},
				changePassword: function () {
					this.showPassword = !this.showPassword;
				},
				onFocus: function () {
					this.$mp.page.$getAppWebview().setStyle({ softinputNavBar: "none" });
				},
				onBlur: function () {
					this.$mp.page.$getAppWebview().setStyle({ softinputNavBar: "auto" });
				},
			},
			onLoad: function () {
				(this.platform = uni.getSystemInfoSync().platform), (this.isNvue = !0);
			},
		};
		e.default = n;
	},
	130: function (t, e) {
		t.exports = {
			".nvue-page-root": { "": { backgroundColor: ["#F8F8F8", 0, 0, 0], paddingBottom: ["20", 0, 0, 0] } },
			".page-title": {
				"": {
					flexDirection: ["row", 0, 0, 1],
					justifyContent: ["center", 0, 0, 1],
					alignItems: ["center", 0, 0, 1],
					paddingTop: ["35rpx", 0, 0, 1],
					paddingRight: ["35rpx", 0, 0, 1],
					paddingBottom: ["35rpx", 0, 0, 1],
					paddingLeft: ["35rpx", 0, 0, 1],
				},
			},
			".page-title__wrapper": {
				"": {
					paddingTop: ["0", 0, 0, 2],
					paddingRight: ["20", 0, 0, 2],
					paddingBottom: ["0", 0, 0, 2],
					paddingLeft: ["20", 0, 0, 2],
					borderBottomColor: ["#D8D8D8", 0, 0, 2],
					borderBottomWidth: ["1", 0, 0, 2],
				},
			},
			".page-title__text": { "": { fontSize: ["16", 0, 0, 3], height: ["48", 0, 0, 3], lineHeight: ["48", 0, 0, 3], color: ["#BEBEBE", 0, 0, 3] } },
			".title": { "": { paddingTop: ["5", 0, 0, 4], paddingRight: ["13", 0, 0, 4], paddingBottom: ["5", 0, 0, 4], paddingLeft: ["13", 0, 0, 4] } },
			".uni-form-item__title": { "": { fontSize: ["16", 0, 0, 5], lineHeight: ["24", 0, 0, 5] } },
			".uni-input-wrapper": {
				"": {
					paddingTop: ["8", 0, 0, 6],
					paddingRight: ["13", 0, 0, 6],
					paddingBottom: ["8", 0, 0, 6],
					paddingLeft: ["13", 0, 0, 6],
					flexDirection: ["row", 0, 0, 6],
					flexWrap: ["nowrap", 0, 0, 6],
					backgroundColor: ["#FFFFFF", 0, 0, 6],
				},
			},
			".uni-input": {
				"": {
					height: ["28", 0, 0, 7],
					lineHeight: ["28", 0, 0, 7],
					fontSize: ["15", 0, 0, 7],
					paddingTop: ["0", 0, 0, 7],
					paddingRight: ["0", 0, 0, 7],
					paddingBottom: ["0", 0, 0, 7],
					paddingLeft: ["0", 0, 0, 7],
					flex: [1, 0, 0, 7],
					backgroundColor: ["#FFFFFF", 0, 0, 7],
				},
			},
			".uni-icon": {
				"": {
					fontFamily: ["uniicons", 0, 0, 8],
					fontSize: ["24", 0, 0, 8],
					fontWeight: ["normal", 0, 0, 8],
					fontStyle: ["normal", 0, 0, 8],
					width: ["24", 0, 0, 8],
					height: ["24", 0, 0, 8],
					lineHeight: ["24", 0, 0, 8],
					color: ["#999999", 0, 0, 8],
				},
			},
			".uni-eye-active": { "": { color: ["#007AFF", 0, 0, 9] } },
			"@VERSION": 2,
		};
	},
	475: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return a;
			}),
			i.d(e, "a", function () {});
		var n = function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					i("view", { staticClass: ["nvue-page-root"] }, [
						i("view", { staticClass: ["page-title"] }, [
							i("view", { staticClass: ["page-title__wrapper"] }, [
								i("u-text", { staticClass: ["page-title__text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.title))]),
							]),
						]),
						i("view", { staticClass: ["uni-common-mt"] }, [
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u53ef\u81ea\u52a8\u805a\u7126\u7684 input"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[i("u-input", { staticClass: ["uni-input"], attrs: { focus: !0, placeholder: "\u81ea\u52a8\u83b7\u5f97\u7126\u70b9" } })],
									1,
								),
							]),
							"ios" !== t.platform || t.isNvue
								? t._e()
								: i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
										i("view", { staticClass: ["title"] }, [
											i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
												t._v("\u9690\u85cf iOS \u8f6f\u952e\u76d8\u4e0a\u7684\u5bfc\u822a\u6761"),
											]),
										]),
										i(
											"view",
											{ staticClass: ["uni-input-wrapper"] },
											[
												i("u-input", {
													staticClass: ["uni-input"],
													attrs: { placeholder: "\u89e6\u6478\u5176\u4ed6\u5730\u65b9\u6536\u8d77\u952e\u76d8" },
													on: { focus: t.onFocus, blur: t.onBlur },
												}),
											],
											1,
										),
								  ]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u952e\u76d8\u53f3\u4e0b\u89d2\u6309\u94ae\u663e\u793a\u4e3a\u641c\u7d22"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[
										i("u-input", {
											staticClass: ["uni-input"],
											attrs: { confirmType: "search", placeholder: "\u952e\u76d8\u53f3\u4e0b\u89d2\u6309\u94ae\u663e\u793a\u4e3a\u641c\u7d22" },
										}),
									],
									1,
								),
							]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u952e\u76d8\u53f3\u4e0b\u89d2\u6309\u94ae\u663e\u793a\u4e3a\u53d1\u9001"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[
										i("u-input", {
											staticClass: ["uni-input"],
											attrs: { confirmType: "send", placeholder: "\u952e\u76d8\u53f3\u4e0b\u89d2\u6309\u94ae\u663e\u793a\u4e3a\u53d1\u9001" },
										}),
									],
									1,
								),
							]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u63a7\u5236\u6700\u5927\u8f93\u5165\u957f\u5ea6\u7684 input"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[i("u-input", { staticClass: ["uni-input"], attrs: { maxlength: "10", placeholder: "\u6700\u5927\u8f93\u5165\u957f\u5ea6\u4e3a10" } })],
									1,
								),
							]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u5b9e\u65f6\u83b7\u53d6\u8f93\u5165\u503c\uff1a" + t._s(t.inputValue)),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[
										i("u-input", {
											staticClass: ["uni-input"],
											attrs: { placeholder: "\u8f93\u5165\u540c\u6b65\u5230view\u4e2d" },
											on: { input: t.onKeyInput },
										}),
									],
									1,
								),
							]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u63a7\u5236\u8f93\u5165\u7684 input"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[
										i("u-input", {
											staticClass: ["uni-input"],
											attrs: { placeholder: "\u8fde\u7eed\u7684\u4e24\u4e2a1\u4f1a\u53d8\u62102", value: t.changeValue },
											on: {
												input: [
													function (e) {
														t.changeValue = e.detail.value;
													},
													t.replaceInput,
												],
											},
										}),
									],
									1,
								),
							]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u63a7\u5236\u952e\u76d8\u7684 input"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[
										i("u-input", {
											ref: "input1",
											staticClass: ["uni-input"],
											attrs: { placeholder: "\u8f93\u5165123\u81ea\u52a8\u6536\u8d77\u952e\u76d8" },
											on: { input: t.hideKeyboard },
										}),
									],
									1,
								),
							]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u6570\u5b57\u8f93\u5165\u7684 input"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[
										i("u-input", {
											staticClass: ["uni-input"],
											attrs: { type: "number", placeholder: "\u8fd9\u662f\u4e00\u4e2a\u6570\u5b57\u8f93\u5165\u6846" },
										}),
									],
									1,
								),
							]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u5bc6\u7801\u8f93\u5165\u7684 input"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[
										i("u-input", {
											staticClass: ["uni-input"],
											attrs: { password: !0, type: "text", placeholder: "\u8fd9\u662f\u4e00\u4e2a\u5bc6\u7801\u8f93\u5165\u6846" },
										}),
									],
									1,
								),
							]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u5e26\u5c0f\u6570\u70b9\u7684 input"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[
										i("u-input", {
											staticClass: ["uni-input"],
											attrs: { type: "digit", placeholder: "\u5e26\u5c0f\u6570\u70b9\u7684\u6570\u5b57\u952e\u76d8" },
										}),
									],
									1,
								),
							]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u8eab\u4efd\u8bc1\u8f93\u5165\u7684 input"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[i("u-input", { staticClass: ["uni-input"], attrs: { type: "idcard", placeholder: "\u8eab\u4efd\u8bc1\u8f93\u5165\u952e\u76d8" } })],
									1,
								),
							]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u63a7\u5236\u5360\u4f4d\u7b26\u989c\u8272\u7684 input"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[
										i("u-input", {
											staticClass: ["uni-input"],
											attrs: { placeholderStyle: "color:#F76260", placeholder: "\u5360\u4f4d\u7b26\u5b57\u4f53\u662f\u7ea2\u8272\u7684" },
										}),
									],
									1,
								),
							]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u5e26\u6e05\u9664\u6309\u94ae\u7684\u8f93\u5165\u6846"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[
										i("u-input", {
											staticClass: ["uni-input"],
											attrs: { placeholder: "\u5e26\u6e05\u9664\u6309\u94ae\u7684\u8f93\u5165\u6846", value: t.inputClearValue },
											on: { input: t.clearInput },
										}),
										t.showClearIcon
											? i("u-text", { staticClass: ["uni-icon"], appendAsTree: !0, attrs: { append: "tree" }, on: { click: t.clearIcon } }, [t._v("\ue434")])
											: t._e(),
									],
									1,
								),
							]),
							i("view", { staticClass: ["uni-form-item", "uni-column"] }, [
								i("view", { staticClass: ["title"] }, [
									i("u-text", { staticClass: ["uni-form-item__title"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u53ef\u67e5\u770b\u5bc6\u7801\u7684\u8f93\u5165\u6846"),
									]),
								]),
								i(
									"view",
									{ staticClass: ["uni-input-wrapper"] },
									[
										i("u-input", { staticClass: ["uni-input"], attrs: { placeholder: "\u8bf7\u8f93\u5165\u5bc6\u7801", password: t.showPassword } }),
										i(
											"u-text",
											{
												staticClass: ["uni-icon"],
												class: [t.showPassword ? "" : "uni-eye-active"],
												appendAsTree: !0,
												attrs: { append: "tree" },
												on: { click: t.changePassword },
											},
											[t._v("\ue568")],
										),
									],
									1,
								),
							]),
						]),
					]),
				]);
			},
			a = [];
	},
	542: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(130),
			a = i.n(n);
		for (var s in n)
			"default" !== s &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(s);
		e.default = a.a;
	},
	6: function (t, e, i) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(i(7).default, Vue.prototype.__$appStyle__);
	},
	642: function (t, e, i) {
		"use strict";
		i.r(e);
		i(6);
		var n = i(67);
		"undefined" == typeof Promise ||
			Promise.prototype.finally ||
			(Promise.prototype.finally = function (t) {
				var e = this.constructor;
				return this.then(
					function (i) {
						return e.resolve(t()).then(function () {
							return i;
						});
					},
					function (i) {
						return e.resolve(t()).then(function () {
							throw i;
						});
					},
				);
			}),
			(n.default.mpType = "page"),
			(n.default.route = "pages/component/input/input"),
			(n.default.el = "#root"),
			new Vue(n.default);
	},
	67: function (t, e, i) {
		"use strict";
		var n = i(475),
			a = i(128),
			s = i(0);
		var r = Object(s.a)(a.default, n.b, n.c, !1, null, "0f9754ee", "5977e7b6", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(542).default, this.options.style) : Object.assign(this.options.style, i(542).default);
		}).call(r),
			(e.default = r.exports);
	},
	7: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(1),
			a = i.n(n);
		for (var s in n)
			"default" !== s &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(s);
		e.default = a.a;
	},
});
