!(function (e) {
	var t = {};
	function o(r) {
		if (t[r]) return t[r].exports;
		var n = (t[r] = { i: r, l: !1, exports: {} });
		return e[r].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
	}
	(o.m = e),
		(o.c = t),
		(o.d = function (e, t, r) {
			o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
		}),
		(o.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(o.t = function (e, t) {
			if ((1 & t && (e = o(e)), 8 & t)) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if ((o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
				for (var n in e)
					o.d(
						r,
						n,
						function (t) {
							return e[t];
						}.bind(null, n),
					);
			return r;
		}),
		(o.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return o.d(t, "a", t), t;
		}),
		(o.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(o.p = ""),
		o((o.s = 643));
})({
	0: function (e, t, o) {
		"use strict";
		function r(e, t, o, r, n, i, u, s, c, l) {
			var a,
				p = "function" == typeof e ? e.options : e;
			if (c) {
				p.components || (p.components = {});
				var f = Object.prototype.hasOwnProperty;
				for (var d in c) f.call(c, d) && !f.call(p.components, d) && (p.components[d] = c[d]);
			}
			if (
				(l &&
					((l.beforeCreate || (l.beforeCreate = [])).unshift(function () {
						this[l.__module] = this;
					}),
					(p.mixins || (p.mixins = [])).push(l)),
				t && ((p.render = t), (p.staticRenderFns = o), (p._compiled = !0)),
				r && (p.functional = !0),
				i && (p._scopeId = "data-v-" + i),
				u
					? ((a = function (e) {
							(e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(e = __VUE_SSR_CONTEXT__),
								n && n.call(this, e),
								e && e._registeredComponents && e._registeredComponents.add(u);
					  }),
					  (p._ssrRegister = a))
					: n &&
					  (a = s
							? function () {
									n.call(this, this.$root.$options.shadowRoot);
							  }
							: n),
				a)
			)
				if (p.functional) {
					p._injectStyles = a;
					var v = p.render;
					p.render = function (e, t) {
						return a.call(t), v(e, t);
					};
				} else {
					var _ = p.beforeCreate;
					p.beforeCreate = _ ? [].concat(_, a) : [a];
				}
			return { exports: e, options: p };
		}
		o.d(t, "a", function () {
			return r;
		});
	},
	1: function (e, t) {
		e.exports = { "@VERSION": 2 };
	},
	131: function (e, t, o) {
		"use strict";
		var r = o(132),
			n = o.n(r);
		t.default = n.a;
	},
	132: function (e, t, o) {
		"use strict";
		Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
		t.default = {
			data: function () {
				return {
					title: "cover-view",
					src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v",
				};
			},
			onLoad: function () {},
			methods: {},
		};
	},
	133: function (e, t) {
		e.exports = {
			".content": { "": { textAlign: ["center", 0, 0, 0], height: ["400rpx", 0, 0, 0] } },
			".logo": { "": { height: ["200rpx", 0, 0, 1], width: ["200rpx", 0, 0, 1], marginTop: ["200rpx", 0, 0, 1] } },
			".title": { "": { fontSize: ["36rpx", 0, 0, 2], color: ["#8f8f94", 0, 0, 2] } },
			".text": { "": { color: ["#4CD964", 0, 0, 3], fontFamily: ["unincomponents", 0, 0, 3] } },
			".video": { "": { width: ["750rpx", 0, 0, 4], height: ["400rpx", 0, 0, 4], backgroundColor: ["#808080", 0, 0, 4] } },
			".coverview": {
				"": {
					position: ["absolute", 0, 0, 5],
					left: [0, 0, 0, 5],
					right: [0, 0, 0, 5],
					top: ["0rpx", 0, 0, 5],
					height: ["150rpx", 0, 0, 5],
					borderWidth: ["10rpx", 0, 0, 5],
					borderColor: ["#4CD964", 0, 0, 5],
				},
			},
			"@VERSION": 2,
		};
	},
	474: function (e, t, o) {
		"use strict";
		o.d(t, "b", function () {
			return r;
		}),
			o.d(t, "c", function () {
				return n;
			}),
			o.d(t, "a", function () {});
		var r = function () {
				var e = this.$createElement,
					t = this._self._c || e;
				return t("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					t(
						"view",
						[
							t(
								"u-video",
								{ ref: "video", staticClass: ["video"], attrs: { id: "myVideo", src: this.src, controls: "true" } },
								[
									t(
										"u-scalable",
										{ staticStyle: { position: "absolute", left: "0", right: "0", top: "0", bottom: "0" } },
										[
											t("cover-view", { staticClass: ["coverview"], staticStyle: { overflowY: "scroll" } }, [
												t("u-text", { staticClass: ["text"], appendAsTree: !0, attrs: { append: "tree" } }, [
													this._v(
														this._s(
															"\uea06\uea0e\uea0c\uea0a \u6211\u662f\u53ef\u4ee5\u6eda\u52a8\u7684cover-view \u6211\u662f\u53ef\u4ee5\u6eda\u52a8\u7684cover-view \u6211\u662f\u53ef\u4ee5\u6eda\u52a8\u7684cover-view \u6211\u662f\u53ef\u4ee5\u6eda\u52a8\u7684cover-view \u6211\u662f\u53ef\u4ee5\u6eda\u52a8\u7684cover-view \u6211\u662f\u53ef\u4ee5\u6eda\u52a8\u7684cover-view \u6211\u662f\u53ef\u4ee5\u6eda\u52a8\u7684cover-view \u6211\u662f\u53ef\u4ee5\u6eda\u52a8\u7684cover-view \u6211\u662f\u53ef\u4ee5\u6eda\u52a8\u7684cover-view",
														),
													),
												]),
											]),
										],
										1,
									),
								],
								1,
							),
						],
						1,
					),
				]);
			},
			n = [];
	},
	543: function (e, t, o) {
		"use strict";
		o.r(t);
		var r = o(133),
			n = o.n(r);
		for (var i in r)
			"default" !== i &&
				(function (e) {
					o.d(t, e, function () {
						return r[e];
					});
				})(i);
		t.default = n.a;
	},
	6: function (e, t, o) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(o(7).default, Vue.prototype.__$appStyle__);
	},
	643: function (e, t, o) {
		"use strict";
		o.r(t);
		o(6);
		var r = o(68);
		"undefined" == typeof Promise ||
			Promise.prototype.finally ||
			(Promise.prototype.finally = function (e) {
				var t = this.constructor;
				return this.then(
					function (o) {
						return t.resolve(e()).then(function () {
							return o;
						});
					},
					function (o) {
						return t.resolve(e()).then(function () {
							throw o;
						});
					},
				);
			}),
			(r.default.mpType = "page"),
			(r.default.route = "pages/component/cover-view/cover-view"),
			(r.default.el = "#root"),
			new Vue(r.default);
	},
	68: function (e, t, o) {
		"use strict";
		var r = o(474),
			n = o(131),
			i = o(0);
		var u = Object(i.a)(n.default, r.b, r.c, !1, null, null, "03657e1c", !1, r.a, void 0);
		(function (e) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(o(543).default, this.options.style) : Object.assign(this.options.style, o(543).default);
		}).call(u),
			(t.default = u.exports);
	},
	7: function (e, t, o) {
		"use strict";
		o.r(t);
		var r = o(1),
			n = o.n(r);
		for (var i in r)
			"default" !== i &&
				(function (e) {
					o.d(t, e, function () {
						return r[e];
					});
				})(i);
		t.default = n.a;
	},
});
