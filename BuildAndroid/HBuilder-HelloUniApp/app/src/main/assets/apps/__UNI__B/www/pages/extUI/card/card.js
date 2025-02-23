!(function (t) {
	var e = {};
	function i(n) {
		if (e[n]) return e[n].exports;
		var o = (e[n] = { i: n, l: !1, exports: {} });
		return t[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
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
				for (var o in t)
					i.d(
						n,
						o,
						function (e) {
							return t[e];
						}.bind(null, o),
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
		i((i.s = 717));
})({
	0: function (t, e, i) {
		"use strict";
		function n(t, e, i, n, o, r, a, s, c, l) {
			var d,
				u = "function" == typeof t ? t.options : t;
			if (c) {
				u.components || (u.components = {});
				var p = Object.prototype.hasOwnProperty;
				for (var f in c) p.call(c, f) && !p.call(u.components, f) && (u.components[f] = c[f]);
			}
			if (
				(l &&
					((l.beforeCreate || (l.beforeCreate = [])).unshift(function () {
						this[l.__module] = this;
					}),
					(u.mixins || (u.mixins = [])).push(l)),
				e && ((u.render = e), (u.staticRenderFns = i), (u._compiled = !0)),
				n && (u.functional = !0),
				r && (u._scopeId = "data-v-" + r),
				a
					? ((d = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								o && o.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(a);
					  }),
					  (u._ssrRegister = d))
					: o &&
					  (d = s
							? function () {
									o.call(this, this.$root.$options.shadowRoot);
							  }
							: o),
				d)
			)
				if (u.functional) {
					u._injectStyles = d;
					var _ = u.render;
					u.render = function (t, e) {
						return d.call(e), _(t, e);
					};
				} else {
					var g = u.beforeCreate;
					u.beforeCreate = g ? [].concat(g, d) : [d];
				}
			return { exports: t, options: u };
		}
		i.d(e, "a", function () {
			return n;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	105: function (t, e, i) {
		"use strict";
		var n = i(460),
			o = i(337),
			r = i(0);
		var a = Object(r.a)(o.default, n.b, n.c, !1, null, null, "e92245cc", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(610).default, this.options.style) : Object.assign(this.options.style, i(610).default);
		}).call(a),
			(e.default = a.exports);
	},
	13: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(5),
			o = i(2);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return o[t];
					});
				})(r);
		var a = i(0);
		var s = Object(a.a)(o.default, n.b, n.c, !1, null, "168bca6c", "39eb9647", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(8).default, this.options.style) : Object.assign(this.options.style, i(8).default);
		}).call(s),
			(e.default = s.exports);
	},
	2: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(3),
			o = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = o.a;
	},
	3: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n = {
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
		e.default = n;
	},
	334: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(335),
			o = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = o.a;
	},
	335: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n = {
			name: "UniCard",
			props: {
				title: { type: String, default: "" },
				subTitle: { type: String, default: "" },
				extra: { type: String, default: "" },
				note: { type: String, default: "" },
				thumbnail: { type: String, default: "" },
				mode: { type: String, default: "basic" },
				isFull: { type: Boolean, default: !1 },
				isShadow: { type: [Boolean, String], default: !1 },
			},
			methods: {
				onClick: function () {
					this.$emit("click");
				},
			},
		};
		e.default = n;
	},
	336: function (t, e) {
		t.exports = {
			".uni-card": {
				"": {
					marginTop: ["12", 0, 0, 0],
					marginRight: ["15", 0, 0, 0],
					marginBottom: ["12", 0, 0, 0],
					marginLeft: ["15", 0, 0, 0],
					backgroundColor: ["#ffffff", 0, 0, 0],
					position: ["relative", 0, 0, 0],
					flexDirection: ["column", 0, 0, 0],
					borderRadius: ["5", 0, 0, 0],
					overflow: ["hidden", 0, 0, 0],
				},
			},
			".uni-border": {
				"": {
					position: ["relative", 0, 0, 1],
					borderColor: ["#e5e5e5", 0, 0, 1],
					borderStyle: ["solid", 0, 0, 1],
					borderWidth: ["0.5", 0, 0, 1],
					zIndex: [1, 0, 0, 1],
				},
			},
			".uni-border-bottom": {
				"": {
					position: ["relative", 0, 0, 2],
					borderBottomColor: ["#e5e5e5", 0, 0, 2],
					borderBottomStyle: ["solid", 0, 0, 2],
					borderBottomWidth: ["0.5", 0, 0, 2],
					zIndex: [1, 0, 0, 2],
				},
			},
			".uni-border-top": {
				"": {
					position: ["relative", 0, 0, 3],
					borderTopColor: ["#e5e5e5", 0, 0, 3],
					borderTopStyle: ["solid", 0, 0, 3],
					borderTopWidth: ["0.5", 0, 0, 3],
					zIndex: [1, 0, 0, 3],
				},
			},
			".uni-card__thumbnailimage": {
				"": {
					position: ["relative", 0, 0, 4],
					flexDirection: ["column", 0, 0, 4],
					justifyContent: ["center", 0, 0, 4],
					height: ["150", 0, 0, 4],
					overflow: ["hidden", 0, 0, 4],
				},
			},
			".uni-card__thumbnailimage-box": { "": { flex: [1, 0, 0, 5], flexDirection: ["row", 0, 0, 5], overflow: ["hidden", 0, 0, 5] } },
			".uni-card__thumbnailimage-image": { "": { flex: [1, 0, 0, 6] } },
			".uni-card__thumbnailimage-title": {
				"": {
					position: ["absolute", 0, 0, 7],
					bottom: [0, 0, 0, 7],
					left: [0, 0, 0, 7],
					right: [0, 0, 0, 7],
					flexDirection: ["row", 0, 0, 7],
					paddingTop: ["8", 0, 0, 7],
					paddingRight: ["12", 0, 0, 7],
					paddingBottom: ["8", 0, 0, 7],
					paddingLeft: ["12", 0, 0, 7],
					backgroundColor: ["rgba(0,0,0,0.4)", 0, 0, 7],
				},
			},
			".uni-card__thumbnailimage-title-text": { "": { flex: [1, 0, 0, 8], fontSize: ["14", 0, 0, 8], color: ["#ffffff", 0, 0, 8] } },
			".uni-card__title": {
				"": {
					flexDirection: ["row", 0, 0, 9],
					alignItems: ["center", 0, 0, 9],
					paddingTop: ["10", 0, 0, 9],
					paddingRight: ["10", 0, 0, 9],
					paddingBottom: ["10", 0, 0, 9],
					paddingLeft: ["10", 0, 0, 9],
				},
			},
			".uni-card__title-box": {
				"": { flex: [1, 0, 0, 10], flexDirection: ["row", 0, 0, 10], alignItems: ["center", 0, 0, 10], overflow: ["hidden", 0, 0, 10] },
			},
			".uni-card__title-header": { "": { width: ["40", 0, 0, 11], height: ["40", 0, 0, 11], overflow: ["hidden", 0, 0, 11], borderRadius: ["5", 0, 0, 11] } },
			".uni-card__title-header-image": { "": { width: ["40", 0, 0, 12], height: ["40", 0, 0, 12] } },
			".uni-card__title-content": {
				"": {
					flexDirection: ["column", 0, 0, 13],
					justifyContent: ["center", 0, 0, 13],
					flex: [1, 0, 0, 13],
					paddingLeft: ["10", 0, 0, 13],
					height: ["40", 0, 0, 13],
					overflow: ["hidden", 0, 0, 13],
				},
			},
			".uni-card__title-content-title": { "": { fontSize: ["14", 0, 0, 14], lineHeight: ["22", 0, 0, 14] } },
			".uni-card__title-content-extra": { "": { fontSize: ["12", 0, 0, 15], lineHeight: ["27", 0, 0, 15], color: ["#999999", 0, 0, 15] } },
			".uni-card__header": {
				"": {
					position: ["relative", 0, 0, 16],
					flexDirection: ["row", 0, 0, 16],
					paddingTop: ["12", 0, 0, 16],
					paddingRight: ["12", 0, 0, 16],
					paddingBottom: ["12", 0, 0, 16],
					paddingLeft: ["12", 0, 0, 16],
					alignItems: ["center", 0, 0, 16],
				},
			},
			".uni-card__header-title": {
				"": { flexDirection: ["row", 0, 0, 17], marginRight: ["8", 0, 0, 17], justifyContent: ["flex-start", 0, 0, 17], alignItems: ["center", 0, 0, 17] },
			},
			".uni-card__header-title-text": { "": { fontSize: ["16", 0, 0, 18], flex: [1, 0, 0, 18], color: ["#333333", 0, 0, 18] } },
			".uni-card__header-extra-img": { "": { height: ["20", 0, 0, 19], width: ["20", 0, 0, 19], marginRight: ["8", 0, 0, 19] } },
			".uni-card__header-extra-text": {
				"": { flex: [1, 0, 0, 20], marginLeft: ["8", 0, 0, 20], fontSize: ["12", 0, 0, 20], textAlign: ["right", 0, 0, 20], color: ["#999999", 0, 0, 20] },
			},
			".uni-card__content": { "": { color: ["#333333", 0, 0, 21] } },
			".uni-card__content--pd": {
				"": { paddingTop: ["12", 0, 0, 22], paddingRight: ["12", 0, 0, 22], paddingBottom: ["12", 0, 0, 22], paddingLeft: ["12", 0, 0, 22] },
			},
			".uni-card__content-extra": { "": { fontSize: ["14", 0, 0, 23], paddingBottom: ["10", 0, 0, 23], color: ["#999999", 0, 0, 23] } },
			".uni-card__footer": {
				"": {
					justifyContent: ["space-between", 0, 0, 24],
					paddingTop: ["12", 0, 0, 24],
					paddingRight: ["12", 0, 0, 24],
					paddingBottom: ["12", 0, 0, 24],
					paddingLeft: ["12", 0, 0, 24],
				},
			},
			".uni-card__footer-text": { "": { color: ["#999999", 0, 0, 25], fontSize: ["12", 0, 0, 25] } },
			".uni-card--shadow": { "": { position: ["relative", 0, 0, 26] } },
			".uni-card--full": {
				"": { marginTop: [0, 0, 0, 27], marginRight: [0, 0, 0, 27], marginBottom: [0, 0, 0, 27], marginLeft: [0, 0, 0, 27], borderRadius: [0, 0, 0, 27] },
			},
			".uni-ellipsis": { "": { lines: [1, 0, 0, 28] } },
			"@VERSION": 2,
		};
	},
	337: function (t, e, i) {
		"use strict";
		var n = i(338),
			o = i.n(n);
		e.default = o.a;
	},
	338: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var n = {
			components: {},
			data: function () {
				return {
					list: [
						{ id: 0, title: "", content: "", shadow: !1, note: "", extra: "", thumbnail: "" },
						{ id: 1, title: "\u6807\u9898\u6587\u5b57", content: "", shadow: !0, note: "", extra: "\u989d\u5916\u4fe1\u606f", thumbnail: "" },
						{ id: 2, title: "\u6807\u9898\u6587\u5b57", content: "", shadow: !0, note: "Tips", extra: "\u989d\u5916\u4fe1\u606f", thumbnail: "" },
						{
							id: 3,
							title: "\u6807\u9898\u6587\u5b57",
							content:
								"\u8fd9\u662f\u4e00\u4e2a\u5b8c\u6574\u914d\u7f6e\u7684\u57fa\u7840\u5361\u7247\u793a\u4f8b\u3002\u5185\u5bb9\u6837\u5f0f\u53ef\u81ea\u5b9a\u4e49\u3002",
							shadow: !0,
							note: "Tips",
							extra: "\u989d\u5916\u4fe1\u606f",
							thumbnail: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
						},
					],
					Tips: ["\u559c\u6b22", "\u8bc4\u8bba", "\u5206\u4eab"],
				};
			},
			methods: {
				clickCard: function () {
					uni.showToast({ title: "\u70b9\u51fb\u5361\u7247", icon: "none" });
				},
				footerClick: function (t) {
					uni.showToast({ title: t, icon: "none" });
				},
			},
		};
		e.default = n;
	},
	339: function (t, e) {
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
					paddingTop: ["1", 0, 0, 9],
					paddingRight: [0, 0, 0, 9],
					paddingBottom: ["1", 0, 0, 9],
					paddingLeft: [0, 0, 0, 9],
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
			".example-box": { "": { marginTop: ["12", 0, 0, 10], marginRight: [0, 0, 0, 10], marginBottom: ["12", 0, 0, 10], marginLeft: [0, 0, 0, 10] } },
			".image-box": { "": { height: ["350rpx", 0, 0, 11], overflow: ["hidden", 0, 0, 11] } },
			".image": { "": { flex: [1, 0, 0, 12] } },
			".content-box": { "": { paddingTop: ["20rpx", 0, 0, 13] } },
			".content-box-text": { "": { fontSize: ["12", 0, 0, 14], lineHeight: ["22", 0, 0, 14] } },
			".footer-box": { "": { justifyContent: ["space-between", 0, 0, 15], flexDirection: ["row", 0, 0, 15] } },
			".footer-box__item": {
				"": {
					alignItems: ["center", 0, 0, 16],
					paddingTop: ["2", 0, 0, 16],
					paddingRight: [0, 0, 0, 16],
					paddingBottom: ["2", 0, 0, 16],
					paddingLeft: [0, 0, 0, 16],
					fontSize: ["12", 0, 0, 16],
					color: ["#666666", 0, 0, 16],
				},
			},
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
	460: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return o;
		}),
			i.d(e, "c", function () {
				return r;
			}),
			i.d(e, "a", function () {
				return n;
			});
		var n = { uniSection: i(13).default, uniCard: i(718).default },
			o = function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					i(
						"view",
						[
							i("u-text", { staticClass: ["example-info"], appendAsTree: !0, attrs: { append: "tree" } }, [
								t._v(
									"\u5361\u7247\u7ec4\u4ef6\u901a\u7528\u6765\u663e\u793a\u5b8c\u6574\u72ec\u7acb\u7684\u4e00\u6bb5\u4fe1\u606f\uff0c\u540c\u65f6\u8ba9\u7528\u6237\u7406\u89e3\u4ed6\u7684\u4f5c\u7528\u3002\u4f8b\u5982\u4e00\u7bc7\u6587\u7ae0\u7684\u9884\u89c8\u56fe\u3001\u4f5c\u8005\u4fe1\u606f\u3001\u65f6\u95f4\u7b49\uff0c\u5361\u7247\u901a\u5e38\u662f\u66f4\u590d\u6742\u548c\u66f4\u8be6\u7ec6\u4fe1\u606f\u7684\u5165\u53e3\u70b9\u3002",
								),
							]),
							i("uni-section", { attrs: { title: "\u57fa\u7840\u5361\u7247", type: "line" } }),
							i(
								"view",
								{ staticClass: ["example-body"] },
								[
									i("uni-card", { on: { click: t.clickCard } }, [
										i("u-text", { staticClass: ["content-box-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
											t._v(
												"\u8fd9\u662f\u4e00\u4e2a\u57fa\u7840\u5361\u7247\u793a\u4f8b\uff0c\u5185\u5bb9\u8f83\u5c11\uff0c\u6b64\u793a\u4f8b\u4e0d\u5e26\u8fb9\u6846\u9634\u5f71\u3002",
											),
										]),
									]),
									i("uni-card", { attrs: { title: "\u6807\u9898\u6587\u5b57", isShadow: !0 }, on: { click: t.clickCard } }, [
										i("u-text", { staticClass: ["content-box-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
											t._v(
												"\u8fd9\u662f\u4e00\u4e2a\u57fa\u7840\u5361\u7247\u793a\u4f8b\uff0c\u5185\u5bb9\u6bd4\u8f83\u591a\uff0c\u5185\u5bb9\u6837\u5f0f\u53ef\u81ea\u5b9a\u4e49\uff0c\u5361\u7247\u89c6\u56fe\u5e38\u7528\u6765\u663e\u793a\u5b8c\u6574\u72ec\u7acb\u7684\u4e00\u6bb5\u4fe1\u606f\uff0c\u6bd4\u5982\u4e00\u7bc7\u6587\u7ae0\u7684\u9884\u89c8\u56fe\u3001\u4f5c\u8005\u4fe1\u606f\u3001\u65f6\u95f4\u7b49\uff0c\u6b64\u793a\u4f8b\u5e26\u8fb9\u6846\u9634\u5f71\u3002",
											),
										]),
									]),
									i(
										"uni-card",
										{ attrs: { title: "\u6807\u9898\u6587\u5b57", extra: "\u989d\u5916\u4fe1\u606f", isShadow: !0, note: "Tips" }, on: { click: t.clickCard } },
										[
											i("u-text", { staticClass: ["content-box-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
												t._v(
													"\u8fd9\u662f\u4e00\u4e2a\u76f8\u5bf9\u6bd4\u8f83\u5b8c\u6574\u7684\u57fa\u7840\u5361\u7247\u793a\u4f8b\uff0c\u5e26\u6709\u6807\u9898\u3001\u989d\u5916\u4fe1\u606f\u4ee5\u53ca\u5e95\u90e8\u4fe1\u606f\uff0c\u5185\u5bb9\u6837\u5f0f\u53ef\u81ea\u5b9a\u4e49\u3002",
												),
											]),
										],
									),
								],
								1,
							),
							i("uni-section", { attrs: { title: "\u901a\u680f\u5361\u7247", type: "line" } }),
							i("view", { staticClass: ["example-body"] }, [
								i(
									"view",
									{ staticClass: ["example-box"] },
									[
										i(
											"uni-card",
											{
												attrs: {
													title: "\u6807\u9898\u6587\u5b57",
													isFull: !0,
													isShadow: "true",
													note: "\u989d\u5916\u4fe1\u606f",
													extra: "\u989d\u5916\u4fe1\u606f",
												},
												on: { click: t.clickCard },
											},
											[
												i("u-text", { staticClass: ["content-box-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
													t._v(
														"\u901a\u680f\u5361\u7247\uff0c\u5de6\u53f3\u4e0a\u4e0b\u6ca1\u6709\u95f4\u8ddd\uff0c\u7528\u6237\u53ef\u81ea\u5b9a\u4e49\u5361\u7247\u8ddd\u79bb\u7b49\u4fe1\u606f",
													),
												]),
											],
										),
									],
									1,
								),
							]),
							i("uni-section", { attrs: { title: "\u56fe\u6587\u5361\u7247", type: "line" } }),
							i(
								"view",
								{ staticClass: ["example-body"] },
								[
									i(
										"uni-card",
										{
											attrs: {
												isShadow: !0,
												title: "\u6807\u9898\u6587\u5b57",
												mode: "style",
												thumbnail: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
												extra: "\u989d\u5916\u4fe1\u606f",
												note: "true",
											},
											on: { click: t.clickCard },
										},
										[
											i("u-text", { staticClass: ["content-box-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
												t._v(
													"\u56fe\u6587\u5361\u7247\u652f\u6301\u4f20\u5165\u4e00\u5f20\u56fe\u7247\uff0c\u5728\u6700\u4e0a\u65b9\u663e\u793a\uff0c\u6807\u9898\u4f5c\u4e3a\u56fe\u7247\u63cf\u8ff0\uff0c\u989d\u5916\u4fe1\u606f\u4f5c\u4e3a\u5185\u5bb9\u6807\u9898\uff0c\u901a\u5e38\u4f5c\u7528\u4e3a\u4f5c\u8005\u4fe1\u606f\u6216\u53d1\u5e03\u65f6\u95f4\u63cf\u8ff0\uff0c\u81ea\u884c\u914d\u7f6e\u662f\u5426\u9700\u8981\u5e95\u90e8\u4fe1\u606f",
												),
											]),
											i("block", { attrs: { slot: "footer" }, slot: "footer" }, [
												i("view", { staticClass: ["footer-box"] }, [
													i(
														"view",
														{
															on: {
																click: function (e) {
																	t.footerClick("\u559c\u6b22");
																},
															},
														},
														[i("u-text", { staticClass: ["footer-box__item"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("\u559c\u6b22")])],
													),
													i(
														"view",
														{
															on: {
																click: function (e) {
																	t.footerClick("\u8bc4\u8bba");
																},
															},
														},
														[i("u-text", { staticClass: ["footer-box__item"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("\u8bc4\u8bba")])],
													),
													i(
														"view",
														{
															on: {
																click: function (e) {
																	t.footerClick("\u5206\u4eab");
																},
															},
														},
														[i("u-text", { staticClass: ["footer-box__item"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("\u5206\u4eab")])],
													),
												]),
											]),
										],
										1,
									),
								],
								1,
							),
							i("uni-section", { attrs: { title: "\u6807\u9898\u5361\u7247", type: "line" } }),
							i(
								"view",
								{ staticClass: ["example-body"] },
								[
									i(
										"uni-card",
										{
											attrs: {
												isShadow: !0,
												title: "\u6807\u9898\u5185\u5bb9",
												subTitle: "\u526f\u6807\u9898",
												mode: "title",
												thumbnail: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",
												extra: "\u6280\u672f\u6ca1\u6709\u4e0a\u9650",
												note: "true",
											},
											on: { click: t.clickCard },
										},
										[
											i("view", [
												i(
													"view",
													{ staticClass: ["image-box"] },
													[
														i("u-image", {
															staticClass: ["image"],
															attrs: { mode: "aspectFill", src: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg" },
														}),
													],
													1,
												),
												i("view", { staticClass: ["content-box"] }, [
													i("u-text", { staticClass: ["content-box-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
														t._v(
															"\u6807\u9898\u5361\u7247\u5e26\u6709\u4e00\u4e2a\u53cc\u6807\u9898\u5934\u90e8\uff0c\u53f3\u4fa7\u4e3a\u989d\u5916\u63cf\u8ff0\u4fe1\u606f \uff0c\u5185\u5bb9\u53ef\u81ea\u5b9a\u4e49\u5b9e\u73b0",
														),
													]),
												]),
											]),
											i("template", { slot: "footer" }, [
												i("view", { staticClass: ["footer-box"] }, [
													i(
														"view",
														{
															on: {
																click: function (e) {
																	t.footerClick("\u559c\u6b22");
																},
															},
														},
														[i("u-text", { staticClass: ["footer-box__item"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("\u559c\u6b22")])],
													),
													i(
														"view",
														{
															on: {
																click: function (e) {
																	t.footerClick("\u8bc4\u8bba");
																},
															},
														},
														[i("u-text", { staticClass: ["footer-box__item"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("\u8bc4\u8bba")])],
													),
													i(
														"view",
														{
															on: {
																click: function (e) {
																	t.footerClick("\u5206\u4eab");
																},
															},
														},
														[i("u-text", { staticClass: ["footer-box__item"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v("\u5206\u4eab")])],
													),
												]),
											]),
										],
										2,
									),
								],
								1,
							),
						],
						1,
					),
				]);
			},
			r = [];
	},
	5: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return o;
			}),
			i.d(e, "a", function () {});
		var n = function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i(
					"view",
					{ staticClass: ["uni-section"], attrs: { nvue: !0 } },
					[
						t.type ? i("view", { staticClass: ["uni-section__head"] }, [i("view", { staticClass: ["uni-section__head-tag"], class: t.type })]) : t._e(),
						i("view", { staticClass: ["uni-section__content"] }, [
							i("u-text", { staticClass: ["uni-section__content-title"], class: { distraction: !t.subTitle }, appendAsTree: !0, attrs: { append: "tree" } }, [
								t._v(t._s(t.title)),
							]),
							t.subTitle
								? i("u-text", { staticClass: ["uni-section__content-sub"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.subTitle))])
								: t._e(),
						]),
						t._t("default"),
					],
					2,
				);
			},
			o = [];
	},
	502: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return o;
			}),
			i.d(e, "a", function () {});
		var n = function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i(
					"view",
					{
						staticClass: ["uni-card", "uni-border"],
						class: { "uni-card--full": !0 === t.isFull || "true" === t.isFull, "uni-card--shadow": !0 === t.isShadow || "true" === t.isShadow },
					},
					[
						"basic" === t.mode && t.title
							? i("view", { staticClass: ["uni-card__header", "uni-border-bottom"], on: { click: t.onClick } }, [
									t.thumbnail
										? i(
												"view",
												{ staticClass: ["uni-card__header-extra-img-view"] },
												[i("u-image", { staticClass: ["uni-card__header-extra-img"], attrs: { src: t.thumbnail } })],
												1,
										  )
										: t._e(),
									i("u-text", { staticClass: ["uni-card__header-title-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.title))]),
									t.extra
										? i("u-text", { staticClass: ["uni-card__header-extra-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.extra))])
										: t._e(),
							  ])
							: t._e(),
						"title" === t.mode
							? i("view", { staticClass: ["uni-card__title", "uni-border-bottom"], on: { click: t.onClick } }, [
									i("view", { staticClass: ["uni-card__title-box"] }, [
										i(
											"view",
											{ staticClass: ["uni-card__title-header"] },
											[i("u-image", { staticClass: ["uni-card__title-header-image"], attrs: { src: t.thumbnail, mode: "scaleToFill" } })],
											1,
										),
										i("view", { staticClass: ["uni-card__title-content"] }, [
											i("u-text", { staticClass: ["uni-card__title-content-title", "uni-ellipsis"], appendAsTree: !0, attrs: { append: "tree" } }, [
												t._v(t._s(t.title)),
											]),
											i("u-text", { staticClass: ["uni-card__title-content-extra", "uni-ellipsis"], appendAsTree: !0, attrs: { append: "tree" } }, [
												t._v(t._s(t.subTitle)),
											]),
										]),
									]),
									t.extra
										? i("view", [
												i("u-text", { staticClass: ["uni-card__header-extra-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.extra))]),
										  ])
										: t._e(),
							  ])
							: t._e(),
						"style" === t.mode
							? i("view", { staticClass: ["uni-card__thumbnailimage"], on: { click: t.onClick } }, [
									i(
										"view",
										{ staticClass: ["uni-card__thumbnailimage-box"] },
										[i("u-image", { staticClass: ["uni-card__thumbnailimage-image"], attrs: { src: t.thumbnail, mode: "aspectFill" } })],
										1,
									),
									t.title
										? i("view", { staticClass: ["uni-card__thumbnailimage-title"] }, [
												i("u-text", { staticClass: ["uni-card__thumbnailimage-title-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
													t._v(t._s(t.title)),
												]),
										  ])
										: t._e(),
							  ])
							: t._e(),
						i(
							"view",
							{ staticClass: ["uni-card__content", "uni-card__content--pd"], on: { click: t.onClick } },
							[
								"style" === t.mode && t.extra
									? i("view", {}, [
											i("u-text", { staticClass: ["uni-card__content-extra"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.extra))]),
									  ])
									: t._e(),
								t._t("default"),
							],
							2,
						),
						t.note
							? i(
									"view",
									{ staticClass: ["uni-card__footer", "uni-border-top"] },
									[
										t._t("footer", [
											i("u-text", { staticClass: ["uni-card__footer-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(t.note))]),
										]),
									],
									2,
							  )
							: t._e(),
					],
				);
			},
			o = [];
	},
	6: function (t, e, i) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(i(7).default, Vue.prototype.__$appStyle__);
	},
	609: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(336),
			o = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = o.a;
	},
	610: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(339),
			o = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = o.a;
	},
	7: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(1),
			o = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = o.a;
	},
	717: function (t, e, i) {
		"use strict";
		i.r(e);
		i(6);
		var n = i(105);
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
			(n.default.route = "pages/extUI/card/card"),
			(n.default.el = "#root"),
			new Vue(n.default);
	},
	718: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(502),
			o = i(334);
		for (var r in o)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return o[t];
					});
				})(r);
		var a = i(0);
		var s = Object(a.a)(o.default, n.b, n.c, !1, null, "2cb4b76b", "1d281562", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(609).default, this.options.style) : Object.assign(this.options.style, i(609).default);
		}).call(s),
			(e.default = s.exports);
	},
	8: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(4),
			o = i.n(n);
		for (var r in n)
			"default" !== r &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(r);
		e.default = o.a;
	},
});
