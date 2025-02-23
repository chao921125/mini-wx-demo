!(function (t) {
	var e = {};
	function n(o) {
		if (e[o]) return e[o].exports;
		var r = (e[o] = { i: o, l: !1, exports: {} });
		return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
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
				for (var r in t)
					n.d(
						o,
						r,
						function (e) {
							return t[e];
						}.bind(null, r),
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
		n((n.s = 656));
})({
	0: function (t, e, n) {
		"use strict";
		function o(t, e, n, o, r, i, s, u, a, l) {
			var c,
				p = "function" == typeof t ? t.options : t;
			if (a) {
				p.components || (p.components = {});
				var f = Object.prototype.hasOwnProperty;
				for (var d in a) f.call(a, d) && !f.call(p.components, d) && (p.components[d] = a[d]);
			}
			if (
				(l &&
					((l.beforeCreate || (l.beforeCreate = [])).unshift(function () {
						this[l.__module] = this;
					}),
					(p.mixins || (p.mixins = [])).push(l)),
				e && ((p.render = e), (p.staticRenderFns = n), (p._compiled = !0)),
				o && (p.functional = !0),
				i && (p._scopeId = "data-v-" + i),
				s
					? ((c = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								r && r.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(s);
					  }),
					  (p._ssrRegister = c))
					: r &&
					  (c = u
							? function () {
									r.call(this, this.$root.$options.shadowRoot);
							  }
							: r),
				c)
			)
				if (p.functional) {
					p._injectStyles = c;
					var _ = p.render;
					p.render = function (t, e) {
						return c.call(e), _(t, e);
					};
				} else {
					var y = p.beforeCreate;
					p.beforeCreate = y ? [].concat(y, c) : [c];
				}
			return { exports: t, options: p };
		}
		n.d(e, "a", function () {
			return o;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	169: function (t, e, n) {
		"use strict";
		var o = n(170),
			r = n.n(o);
		e.default = r.a;
	},
	170: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var o = {
			data: function () {
				return {
					lists: [],
					interval: null,
					yourTexts: [
						{ name: "\u5b66\u5458A", content: "\u8001\u5e08\u8bb2\u7684\u771f\u597d" },
						{ name: "\u5b66\u5458B", content: "uni-app\u503c\u5f97\u5b66\u4e60" },
						{ name: "\u5b66\u5458C", content: "\u8001\u5e08\uff0c\u8fd8\u6709\u5b9e\u6218\u4f8b\u5b50\u5417\uff1f" },
						{ name: "\u5b66\u5458D", content: "\u8001\u5e08\uff0c\u8bf7\u95ee\u662f\u4e0d\u662f\u8981\u5148\u5b66\u4f1avue\u624d\u80fd\u5b66uni-app\uff1f" },
						{ name: "\u5b66\u5458E", content: "\u53d7\u6559\u4e86\uff0cuni-app\u592a\u725b\u4e86" },
					],
				};
			},
			created: function () {
				var t = this;
				uni.$on("play-video", function (e) {
					"open" === e.status ? t.addItem() : t.closeItem();
				});
			},
			beforeDestroy: function () {
				uni.$off("play-video"), this.closeItem();
			},
			methods: {
				addItem: function () {
					var t = this;
					t.lists = [{ name: "\u5b66\u5458E", content: "\u53d7\u6559\u4e86\uff0cuni-app\u592a\u725b\u4e86" }];
					var e = weex.requireModule("dom");
					t.interval = setInterval(function () {
						t.lists.length > 15 && t.lists.unshift(),
							t.lists.push({ name: t.yourTexts[t.lists.length % 4].name, content: t.yourTexts[t.lists.length % 4].content }),
							t.lists.length > 5 &&
								t.$nextTick(function () {
									t.$refs["item" + (t.lists.length - 1)] && e.scrollToElement(t.$refs["item" + (t.lists.length - 1)][0]);
								});
					}, 3500);
				},
				closeItem: function () {
					this.interval && clearInterval(this.interval);
				},
			},
		};
		e.default = o;
	},
	171: function (t, e) {
		t.exports = {
			".wrapper": { "": { position: ["relative", 0, 0, 0], flex: [1, 0, 0, 0], backgroundColor: ["rgba(0,0,0,0)", 0, 0, 0] } },
			".list": {
				"": {
					position: ["absolute", 0, 0, 1],
					top: [0, 0, 0, 1],
					left: [0, 0, 0, 1],
					right: [0, 0, 0, 1],
					bottom: [0, 0, 0, 1],
					backgroundColor: ["rgba(0,0,0,0.7)", 0, 0, 1],
				},
			},
			".cell": {
				"": {
					paddingTop: ["10rpx", 0, 0, 2],
					paddingRight: [0, 0, 0, 2],
					paddingBottom: ["10rpx", 0, 0, 2],
					paddingLeft: [0, 0, 0, 2],
					flexDirection: ["row", 0, 0, 2],
					flexWrap: ["nowrap", 0, 0, 2],
				},
			},
			".name": { "": { flex: [0, 0, 0, 3], fontSize: ["20rpx", 0, 0, 3], marginRight: ["20rpx", 0, 0, 3], color: ["#FF5A5F", 0, 0, 3] } },
			".content": { "": { flex: [1, 0, 0, 4], fontSize: ["20rpx", 0, 0, 4], color: ["#F4F5F6", 0, 0, 4] } },
			"@VERSION": 2,
		};
	},
	447: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return o;
		}),
			n.d(e, "c", function () {
				return r;
			}),
			n.d(e, "a", function () {});
		var o = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("div", { staticClass: ["wrapper"] }, [
					n(
						"list",
						{ staticClass: ["list"] },
						t._l(t.lists, function (e, o) {
							return n("cell", { key: o, ref: "item" + o, refInFor: !0, staticClass: ["cell"], appendAsTree: !0, attrs: { append: "tree" } }, [
								n("u-text", { staticClass: ["name"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(e.name) + ":")]),
								n("u-text", { staticClass: ["content"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(e.content))]),
							]);
						}),
						0,
					),
				]);
			},
			r = [];
	},
	555: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(171),
			r = n.n(o);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		e.default = r.a;
	},
	6: function (t, e, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(7).default, Vue.prototype.__$appStyle__);
	},
	656: function (t, e, n) {
		"use strict";
		n.r(e);
		n(6);
		var o = n(79);
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
			(o.default.route = "pages/API/subnvue/subnvue/video-mask"),
			(o.default.el = "#root"),
			new Vue(o.default);
	},
	7: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(1),
			r = n.n(o);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		e.default = r.a;
	},
	79: function (t, e, n) {
		"use strict";
		var o = n(447),
			r = n(169),
			i = n(0);
		var s = Object(i.a)(r.default, o.b, o.c, !1, null, null, "489d29b5", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(555).default, this.options.style) : Object.assign(this.options.style, n(555).default);
		}).call(s),
			(e.default = s.exports);
	},
});
