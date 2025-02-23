!(function (t) {
	var e = {};
	function i(r) {
		if (e[r]) return e[r].exports;
		var n = (e[r] = { i: r, l: !1, exports: {} });
		return t[r].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
	}
	(i.m = t),
		(i.c = e),
		(i.d = function (t, e, r) {
			i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
		}),
		(i.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(i.t = function (t, e) {
			if ((1 & e && (t = i(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var r = Object.create(null);
			if ((i.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var n in t)
					i.d(
						r,
						n,
						function (e) {
							return t[e];
						}.bind(null, n),
					);
			return r;
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
		i((i.s = 720));
})({
	0: function (t, e, i) {
		"use strict";
		function r(t, e, i, r, n, o, a, s, l, u) {
			var c,
				d = "function" == typeof t ? t.options : t;
			if (l) {
				d.components || (d.components = {});
				var f = Object.prototype.hasOwnProperty;
				for (var p in l) f.call(l, p) && !f.call(d.components, p) && (d.components[p] = l[p]);
			}
			if (
				(u &&
					((u.beforeCreate || (u.beforeCreate = [])).unshift(function () {
						this[u.__module] = this;
					}),
					(d.mixins || (d.mixins = [])).push(u)),
				e && ((d.render = e), (d.staticRenderFns = i), (d._compiled = !0)),
				r && (d.functional = !0),
				o && (d._scopeId = "data-v-" + o),
				a
					? ((c = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								n && n.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(a);
					  }),
					  (d._ssrRegister = c))
					: n &&
					  (c = s
							? function () {
									n.call(this, this.$root.$options.shadowRoot);
							  }
							: n),
				c)
			)
				if (d.functional) {
					d._injectStyles = c;
					var g = d.render;
					d.render = function (t, e) {
						return c.call(e), g(t, e);
					};
				} else {
					var y = d.beforeCreate;
					d.beforeCreate = y ? [].concat(y, c) : [c];
				}
			return { exports: t, options: d };
		}
		i.d(e, "a", function () {
			return r;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	107: function (t, e, i) {
		"use strict";
		var r = i(454),
			n = i(346),
			o = i(0);
		var a = Object(o.a)(n.default, r.b, r.c, !1, null, null, "085376c4", !1, r.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(613).default, this.options.style) : Object.assign(this.options.style, i(613).default);
		}).call(a),
			(e.default = a.exports);
	},
	13: function (t, e, i) {
		"use strict";
		i.r(e);
		var r = i(5),
			n = i(2);
		for (var o in n)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(o);
		var a = i(0);
		var s = Object(a.a)(n.default, r.b, r.c, !1, null, "168bca6c", "39eb9647", !1, r.a, void 0);
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
		var r = i(3),
			n = i.n(r);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return r[t];
					});
				})(o);
		e.default = n.a;
	},
	3: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var r = {
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
		e.default = r;
	},
	343: function (t, e, i) {
		"use strict";
		i.r(e);
		var r = i(344),
			n = i.n(r);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return r[t];
					});
				})(o);
		e.default = n.a;
	},
	344: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var r = {
			name: "UniTag",
			props: {
				type: { type: String, default: "default" },
				size: { type: String, default: "normal" },
				text: { type: String, default: "" },
				disabled: { type: [Boolean, String], default: !1 },
				inverted: { type: [Boolean, String], default: !1 },
				circle: { type: [Boolean, String], default: !1 },
				mark: { type: [Boolean, String], default: !1 },
			},
			methods: {
				onClick: function () {
					!0 !== this.disabled && "true" !== this.disabled && this.$emit("click");
				},
			},
		};
		e.default = r;
	},
	345: function (t, e) {
		t.exports = {
			".uni-tag": {
				"": {
					paddingTop: ["0", 0, 0, 0],
					paddingRight: ["16", 0, 0, 0],
					paddingBottom: ["0", 0, 0, 0],
					paddingLeft: ["16", 0, 0, 0],
					height: ["30", 0, 0, 0],
					lineHeight: ["30", 0, 0, 0],
					justifyContent: ["center", 0, 0, 0],
					color: ["#333333", 0, 0, 0],
					borderRadius: ["3", 0, 0, 0],
					backgroundColor: ["#f8f8f8", 0, 0, 0],
					borderWidth: ["1rpx", 0, 0, 0],
					borderStyle: ["solid", 0, 0, 0],
					borderColor: ["#f8f8f8", 0, 0, 0],
				},
			},
			".uni-tag--circle": { "": { borderRadius: ["15", 0, 0, 1] } },
			".uni-tag--mark": {
				"": {
					borderTopLeftRadius: [0, 0, 0, 2],
					borderBottomLeftRadius: [0, 0, 0, 2],
					borderTopRightRadius: ["15", 0, 0, 2],
					borderBottomRightRadius: ["15", 0, 0, 2],
				},
			},
			".uni-tag--disabled": { "": { opacity: [0.5, 0, 0, 3] } },
			".uni-tag--small": {
				"": {
					height: ["20", 0, 0, 4],
					paddingTop: ["0", 0, 0, 4],
					paddingRight: ["8", 0, 0, 4],
					paddingBottom: ["0", 0, 0, 4],
					paddingLeft: ["8", 0, 0, 4],
					lineHeight: ["20", 0, 0, 4],
					fontSize: ["12", 0, 0, 4],
				},
			},
			".uni-tag--default": { "": { color: ["#333333", 0, 0, 5], fontSize: ["14", 0, 0, 5] } },
			".uni-tag-text--small": { "": { fontSize: ["12", 1, 0, 6] } },
			".uni-tag-text": { "": { color: ["#ffffff", 0, 0, 7], fontSize: ["14", 0, 0, 7] } },
			".uni-tag-text--primary": { "": { color: ["#007aff", 1, 0, 8] } },
			".uni-tag-text--success": { "": { color: ["#4cd964", 1, 0, 9] } },
			".uni-tag-text--warning": { "": { color: ["#f0ad4e", 1, 0, 10] } },
			".uni-tag-text--error": { "": { color: ["#dd524d", 1, 0, 11] } },
			".uni-tag--primary": {
				"": {
					color: ["#ffffff", 0, 0, 12],
					backgroundColor: ["#007aff", 0, 0, 12],
					borderWidth: ["1rpx", 0, 0, 12],
					borderStyle: ["solid", 0, 0, 12],
					borderColor: ["#007aff", 0, 0, 12],
				},
			},
			".primary-uni-tag--inverted": {
				"": {
					color: ["#007aff", 0, 0, 13],
					backgroundColor: ["#ffffff", 0, 0, 13],
					borderWidth: ["1rpx", 0, 0, 13],
					borderStyle: ["solid", 0, 0, 13],
					borderColor: ["#007aff", 0, 0, 13],
				},
			},
			".uni-tag--success": {
				"": {
					color: ["#ffffff", 0, 0, 14],
					backgroundColor: ["#4cd964", 0, 0, 14],
					borderWidth: ["1rpx", 0, 0, 14],
					borderStyle: ["solid", 0, 0, 14],
					borderColor: ["#4cd964", 0, 0, 14],
				},
			},
			".success-uni-tag--inverted": {
				"": {
					color: ["#4cd964", 0, 0, 15],
					backgroundColor: ["#ffffff", 0, 0, 15],
					borderWidth: ["1rpx", 0, 0, 15],
					borderStyle: ["solid", 0, 0, 15],
					borderColor: ["#4cd964", 0, 0, 15],
				},
			},
			".uni-tag--warning": {
				"": {
					color: ["#ffffff", 0, 0, 16],
					backgroundColor: ["#f0ad4e", 0, 0, 16],
					borderWidth: ["1rpx", 0, 0, 16],
					borderStyle: ["solid", 0, 0, 16],
					borderColor: ["#f0ad4e", 0, 0, 16],
				},
			},
			".warning-uni-tag--inverted": {
				"": {
					color: ["#f0ad4e", 0, 0, 17],
					backgroundColor: ["#ffffff", 0, 0, 17],
					borderWidth: ["1rpx", 0, 0, 17],
					borderStyle: ["solid", 0, 0, 17],
					borderColor: ["#f0ad4e", 0, 0, 17],
				},
			},
			".uni-tag--error": {
				"": {
					color: ["#ffffff", 0, 0, 18],
					backgroundColor: ["#dd524d", 0, 0, 18],
					borderWidth: ["1rpx", 0, 0, 18],
					borderStyle: ["solid", 0, 0, 18],
					borderColor: ["#dd524d", 0, 0, 18],
				},
			},
			".error-uni-tag--inverted": {
				"": {
					color: ["#dd524d", 0, 0, 19],
					backgroundColor: ["#ffffff", 0, 0, 19],
					borderWidth: ["1rpx", 0, 0, 19],
					borderStyle: ["solid", 0, 0, 19],
					borderColor: ["#dd524d", 0, 0, 19],
				},
			},
			".uni-tag--inverted": {
				"": {
					color: ["#333333", 0, 0, 20],
					backgroundColor: ["#ffffff", 0, 0, 20],
					borderWidth: ["1rpx", 0, 0, 20],
					borderStyle: ["solid", 0, 0, 20],
					borderColor: ["#f8f8f8", 0, 0, 20],
				},
			},
			"@VERSION": 2,
		};
	},
	346: function (t, e, i) {
		"use strict";
		var r = i(347),
			n = i.n(r);
		e.default = n.a;
	},
	347: function (t, e, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var r = {
			components: {},
			data: function () {
				return { type: "default", inverted: !1 };
			},
			methods: {
				setType: function () {
					var t = ["default", "primary", "success", "warning", "error"],
						e = t.indexOf(this.type);
					t.splice(e, 1);
					var i = Math.floor(4 * Math.random());
					this.type = t[i];
				},
				setInverted: function () {
					this.inverted = !this.inverted;
				},
			},
		};
		e.default = r;
	},
	348: function (t, e) {
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
					flexDirection: ["row", 0, 0, 9],
					paddingTop: ["20rpx", 0, 0, 9],
					paddingRight: ["20rpx", 0, 0, 9],
					paddingBottom: ["20rpx", 0, 0, 9],
					paddingLeft: ["20rpx", 0, 0, 9],
					backgroundColor: ["#ffffff", 0, 0, 5],
					justifyContent: ["flex-start", 0, 0, 9],
					flexWrap: ["wrap", 0, 0, 9],
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
			".tag-view": {
				"": {
					flexDirection: ["column", 0, 0, 10],
					marginTop: ["10rpx", 0, 0, 10],
					marginRight: ["15rpx", 0, 0, 10],
					marginBottom: ["10rpx", 0, 0, 10],
					marginLeft: ["15rpx", 0, 0, 10],
					justifyContent: ["center", 0, 0, 10],
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
	454: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return o;
			}),
			i.d(e, "a", function () {
				return r;
			});
		var r = { uniSection: i(13).default, uniTag: i(721).default },
			n = function () {
				var t = this.$createElement,
					e = this._self._c || t;
				return e("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					e(
						"view",
						[
							e("u-text", { staticClass: ["example-info"], appendAsTree: !0, attrs: { append: "tree" } }, [
								this._v("\u6807\u7b7e\u7ec4\u4ef6\u591a\u7528\u4e8e\u5546\u54c1\u5206\u7c7b\u3001\u91cd\u70b9\u5185\u5bb9\u663e\u793a\u7b49\u573a\u666f\u3002"),
							]),
							e("uni-section", { attrs: { title: "\u5b9e\u5fc3\u6807\u7b7e", type: "line" } }),
							e("view", { staticClass: ["example-body"] }, [
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { text: "\u6807\u7b7e" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { text: "\u6807\u7b7e", type: "primary" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { text: "\u6807\u7b7e", type: "success" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { text: "\u6807\u7b7e", type: "warning" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { text: "\u6807\u7b7e", type: "error" } })], 1),
							]),
							e("uni-section", { attrs: { title: "\u7a7a\u5fc3\u6807\u7b7e", type: "line" } }),
							e("view", { staticClass: ["example-body"] }, [
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { inverted: !0, text: "\u6807\u7b7e" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { inverted: !0, text: "\u6807\u7b7e", type: "primary" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { inverted: !0, text: "\u6807\u7b7e", type: "success" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { inverted: !0, text: "\u6807\u7b7e", type: "warning" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { inverted: !0, text: "\u6807\u7b7e", type: "error" } })], 1),
							]),
							e("uni-section", { attrs: { title: "\u5706\u89d2\u6837\u5f0f", type: "line" } }),
							e("view", { staticClass: ["example-body"] }, [
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { circle: !0, text: "\u6807\u7b7e", type: "primary", size: "small" } })], 1),
								e(
									"view",
									{ staticClass: ["tag-view"] },
									[e("uni-tag", { attrs: { inverted: !0, circle: !0, text: "\u6807\u7b7e", type: "success", size: "small" } })],
									1,
								),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { circle: !0, text: "\u6807\u7b7e", type: "warning" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { inverted: !0, circle: !0, text: "\u6807\u7b7e", type: "error" } })], 1),
							]),
							e("uni-section", { attrs: { title: "\u6807\u8bb0\u6837\u5f0f", type: "line" } }),
							e("view", { staticClass: ["example-body"] }, [
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { mark: !0, text: "\u6807\u7b7e", type: "primary", size: "small" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { mark: !0, text: "\u6807\u7b7e", type: "success", size: "small" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { mark: !0, text: "\u6807\u7b7e", type: "warning" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { mark: !0, circle: !0, text: "\u6807\u7b7e", type: "error" } })], 1),
							]),
							e("uni-section", { attrs: { title: "\u70b9\u51fb\u4e8b\u4ef6", type: "line" } }),
							e("view", { staticClass: ["example-body"] }, [
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { type: this.type, text: "\u6807\u7b7e" }, on: { click: this.setType } })], 1),
								e(
									"view",
									{ staticClass: ["tag-view"] },
									[e("uni-tag", { attrs: { circle: !0, inverted: this.inverted, text: "\u6807\u7b7e", type: "primary" }, on: { click: this.setInverted } })],
									1,
								),
							]),
							e("uni-section", { attrs: { title: "\u5c0f\u6807\u7b7e", type: "line" } }),
							e("view", { staticClass: ["example-body"] }, [
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { text: "\u6807\u7b7e", size: "small" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { text: "\u6807\u7b7e", type: "primary", size: "small" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { text: "\u6807\u7b7e", type: "success", size: "small" } })], 1),
								e(
									"view",
									{ staticClass: ["tag-view"] },
									[e("uni-tag", { attrs: { inverted: !0, mark: !0, text: "\u6807\u7b7e", type: "warning", size: "small" } })],
									1,
								),
								e(
									"view",
									{ staticClass: ["tag-view"] },
									[e("uni-tag", { attrs: { inverted: !0, circle: !0, text: "\u6807\u7b7e", type: "error", size: "small" } })],
									1,
								),
							]),
							e("uni-section", { attrs: { title: "\u4e0d\u53ef\u70b9\u51fb\u72b6\u6001", type: "line" } }),
							e("view", { staticClass: ["example-body"] }, [
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { disabled: !0, text: "\u6807\u7b7e" } })], 1),
								e("view", { staticClass: ["tag-view"] }, [e("uni-tag", { attrs: { disabled: !0, text: "\u6807\u7b7e", type: "primary" } })], 1),
								e(
									"view",
									{ staticClass: ["tag-view"] },
									[e("uni-tag", { attrs: { inverted: !0, disabled: !0, text: "\u6807\u7b7e", type: "error", size: "small" } })],
									1,
								),
							]),
						],
						1,
					),
				]);
			},
			o = [];
	},
	5: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return r;
		}),
			i.d(e, "c", function () {
				return n;
			}),
			i.d(e, "a", function () {});
		var r = function () {
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
			n = [];
	},
	506: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return r;
		}),
			i.d(e, "c", function () {
				return n;
			}),
			i.d(e, "a", function () {});
		var r = function () {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return t.text
					? i(
							"view",
							{
								staticClass: ["uni-tag"],
								class: [
									"uni-tag--" + t.type,
									!0 === t.disabled || "true" === t.disabled ? "uni-tag--disabled" : "",
									!0 === t.inverted || "true" === t.inverted ? t.type + "-uni-tag--inverted" : "",
									!0 === t.circle || "true" === t.circle ? "uni-tag--circle" : "",
									!0 === t.mark || "true" === t.mark ? "uni-tag--mark" : "",
									"uni-tag--" + t.size,
								],
								on: {
									click: function (e) {
										t.onClick();
									},
								},
							},
							[
								i(
									"u-text",
									{
										class: [
											"default" === t.type ? "uni-tag--default" : "uni-tag-text",
											!0 === t.inverted || "true" === t.inverted ? "uni-tag-text--" + t.type : "",
											"small" === t.size ? "uni-tag-text--small" : "",
										],
										appendAsTree: !0,
										attrs: { append: "tree" },
									},
									[t._v(t._s(t.text))],
								),
							],
					  )
					: t._e();
			},
			n = [];
	},
	6: function (t, e, i) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(i(7).default, Vue.prototype.__$appStyle__);
	},
	612: function (t, e, i) {
		"use strict";
		i.r(e);
		var r = i(345),
			n = i.n(r);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return r[t];
					});
				})(o);
		e.default = n.a;
	},
	613: function (t, e, i) {
		"use strict";
		i.r(e);
		var r = i(348),
			n = i.n(r);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return r[t];
					});
				})(o);
		e.default = n.a;
	},
	7: function (t, e, i) {
		"use strict";
		i.r(e);
		var r = i(1),
			n = i.n(r);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return r[t];
					});
				})(o);
		e.default = n.a;
	},
	720: function (t, e, i) {
		"use strict";
		i.r(e);
		i(6);
		var r = i(107);
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
			(r.default.mpType = "page"),
			(r.default.route = "pages/extUI/tag/tag"),
			(r.default.el = "#root"),
			new Vue(r.default);
	},
	721: function (t, e, i) {
		"use strict";
		i.r(e);
		var r = i(506),
			n = i(343);
		for (var o in n)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return n[t];
					});
				})(o);
		var a = i(0);
		var s = Object(a.a)(n.default, r.b, r.c, !1, null, "27c29c6c", "39a581b1", !1, r.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(612).default, this.options.style) : Object.assign(this.options.style, i(612).default);
		}).call(s),
			(e.default = s.exports);
	},
	8: function (t, e, i) {
		"use strict";
		i.r(e);
		var r = i(4),
			n = i.n(r);
		for (var o in r)
			"default" !== o &&
				(function (t) {
					i.d(e, t, function () {
						return r[t];
					});
				})(o);
		e.default = n.a;
	},
});
