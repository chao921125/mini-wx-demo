!(function (t) {
	var e = {};
	function n(a) {
		if (e[a]) return e[a].exports;
		var o = (e[a] = { i: a, l: !1, exports: {} });
		return t[a].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, a) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
		}),
		(n.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var a = Object.create(null);
			if ((n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var o in t)
					n.d(
						a,
						o,
						function (e) {
							return t[e];
						}.bind(null, o),
					);
			return a;
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
		n((n.s = 646));
})({
	0: function (t, e, n) {
		"use strict";
		function a(t, e, n, a, o, i, r, s, u, c) {
			var l,
				p = "function" == typeof t ? t.options : t;
			if (u) {
				p.components || (p.components = {});
				var f = Object.prototype.hasOwnProperty;
				for (var d in u) f.call(u, d) && !f.call(p.components, d) && (p.components[d] = u[d]);
			}
			if (
				(c &&
					((c.beforeCreate || (c.beforeCreate = [])).unshift(function () {
						this[c.__module] = this;
					}),
					(p.mixins || (p.mixins = [])).push(c)),
				e && ((p.render = e), (p.staticRenderFns = n), (p._compiled = !0)),
				a && (p.functional = !0),
				i && (p._scopeId = "data-v-" + i),
				r
					? ((l = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								o && o.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(r);
					  }),
					  (p._ssrRegister = l))
					: o &&
					  (l = s
							? function () {
									o.call(this, this.$root.$options.shadowRoot);
							  }
							: o),
				l)
			)
				if (p.functional) {
					p._injectStyles = l;
					var h = p.render;
					p.render = function (t, e) {
						return l.call(e), h(t, e);
					};
				} else {
					var m = p.beforeCreate;
					p.beforeCreate = m ? [].concat(m, l) : [l];
				}
			return { exports: t, options: p };
		}
		n.d(e, "a", function () {
			return a;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	140: function (t, e, n) {
		"use strict";
		var a = n(141),
			o = n.n(a);
		e.default = o.a;
	},
	141: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var a,
			o = (a = n(647)) && a.__esModule ? a : { default: a },
			i = n(45);
		function r(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var a = Object.getOwnPropertySymbols(t);
				e &&
					(a = a.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable;
					})),
					n.push.apply(n, a);
			}
			return n;
		}
		function s(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2
					? r(Object(n), !0).forEach(function (e) {
							u(t, e, n[e]);
					  })
					: Object.getOwnPropertyDescriptors
					? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
					: r(Object(n)).forEach(function (e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
					  });
			}
			return t;
		}
		function u(t, e, n) {
			return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
		}
		var c = {
			components: { setTabBar: o.default },
			data: function () {
				return {
					showSetTabBarPage: !1,
					list: [
						{
							id: "page",
							name: "\u754c\u9762",
							open: !1,
							pages: [
								{ name: "\u8bbe\u7f6e\u5bfc\u822a\u6761", url: "set-navigation-bar-title" },
								{ name: "\u539f\u751f\u5b50\u7a97\u4f53", url: "subnvue" },
								{ name: "\u9875\u9762\u8df3\u8f6c", url: "navigator" },
								{ name: "\u8bbe\u7f6eTabBar", url: "set-tabbar" },
								{ name: "\u4e0b\u62c9\u5237\u65b0", url: "pull-down-refresh" },
								{ name: "\u521b\u5efa\u52a8\u753b", url: "animation" },
								{ name: "\u521b\u5efa\u7ed8\u753b", url: "canvas" },
								{ name: "\u8282\u70b9\u4fe1\u606f", url: "get-node-info" },
								{ name: "\u8282\u70b9\u5e03\u5c40\u4ea4\u4e92\u72b6\u6001", url: "intersection-observer" },
								{ name: "\u663e\u793a\u64cd\u4f5c\u83dc\u5355", url: "action-sheet" },
								{ name: "\u663e\u793a\u6a21\u6001\u5f39\u7a97", url: "modal" },
								{ name: "\u663e\u793a\u52a0\u8f7d\u63d0\u793a\u6846", url: "show-loading" },
								{ name: "\u663e\u793a\u6d88\u606f\u63d0\u793a\u6846", url: "toast" },
							],
						},
						{
							id: "device",
							name: "\u8bbe\u5907",
							open: !1,
							pages: [
								{ name: "\u83b7\u53d6\u8bbe\u5907\u7f51\u7edc\u72b6\u6001", url: "get-network-type" },
								{ name: "\u83b7\u53d6\u8bbe\u5907\u7cfb\u7edf\u4fe1\u606f", url: "get-system-info" },
								{ name: "\u6253\u7535\u8bdd", url: "make-phone-call" },
								{ name: "\u9707\u52a8", url: "vibrate" },
								{ name: "\u6dfb\u52a0\u624b\u673a\u8054\u7cfb\u4eba", url: "add-phone-contact" },
								{ name: "\u626b\u7801", url: "scan-code" },
								{ name: "\u526a\u8d34\u677f", url: "clipboard" },
								{ name: "\u5c4f\u5e55\u4eae\u5ea6", url: "brightness" },
								{ name: "\u84dd\u7259", url: "bluetooth" },
								{ name: "\u751f\u7269\u8ba4\u8bc1", url: "soter" },
								{ name: "iBeacon", url: "ibeacon" },
								{ name: "\u76d1\u542c\u52a0\u901f\u5ea6\u4f20\u611f\u5668", url: "on-accelerometer-change" },
								{ name: "\u76d1\u542c\u7f57\u76d8\u6570\u636e", url: "on-compass-change" },
								{ name: "\u76d1\u542c\u8ddd\u79bb\u4f20\u611f\u5668", url: "/platforms/app-plus/proximity/proximity" },
								{ name: "\u76d1\u542c\u65b9\u5411\u4f20\u611f\u5668", url: "/platforms/app-plus/orientation/orientation" },
							],
						},
						{
							id: "network",
							name: "\u7f51\u7edc",
							open: !1,
							pages: [
								{ name: "\u53d1\u8d77\u4e00\u4e2a\u8bf7\u6c42", url: "request" },
								{ name: "\u4e0a\u4f20\u6587\u4ef6", url: "upload-file" },
								{ name: "\u4e0b\u8f7d\u6587\u4ef6", url: "download-file" },
							],
						},
						{
							id: "websocket",
							name: "websocket",
							open: !1,
							pages: [
								{ name: "socketTask", url: "websocket-socketTask" },
								{ name: "\u5168\u5c40websocket", url: "websocket-global" },
							],
						},
						{
							id: "media",
							name: "\u5a92\u4f53",
							open: !1,
							pages: [
								{ name: "\u56fe\u7247", url: "image" },
								{ name: "\u97f3\u9891", url: "inner-audio" },
								{ name: "\u5f55\u97f3", url: "voice" },
								{ name: "\u80cc\u666f\u97f3\u9891", url: "background-audio" },
								{ name: "\u89c6\u9891", url: "video" },
								{ name: "\u6587\u4ef6", url: "file" },
								{ name: "\u4fdd\u5b58\u5a92\u4f53\u5230\u672c\u5730", url: "save-media" },
							],
						},
						{
							id: "location",
							name: "\u4f4d\u7f6e",
							open: !1,
							pages: [
								{ name: "\u83b7\u53d6\u5f53\u524d\u4f4d\u7f6e", url: "get-location" },
								{ name: "\u4f7f\u7528\u5730\u56fe\u67e5\u770b\u4f4d\u7f6e", url: "open-location" },
								{ name: "\u4f7f\u7528\u5730\u56fe\u9009\u62e9\u4f4d\u7f6e", url: "choose-location" },
								{ name: "\u5730\u56fe\u63a7\u5236", url: "map" },
								{ name: "\u5730\u56fe\u641c\u7d22", url: "map-search" },
							],
						},
						{
							id: "storage",
							name: "\u6570\u636e",
							open: !1,
							pages: [
								{ name: "\u6570\u636e\u5b58\u50a8\uff08key-value\uff09", url: "storage" },
								{ name: "SQLite", url: "sqlite" },
							],
						},
						{ url: "rewarded-video-ad", name: "\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a", open: !1 },
						{ url: "full-screen-video-ad", name: "\u5168\u5c4f\u89c6\u9891\u5e7f\u544a", open: !1 },
						{
							id: "login",
							name: "\u767b\u5f55",
							open: !1,
							pages: [
								{ name: "\u767b\u5f55", url: "login" },
								{ name: "\u83b7\u53d6\u7528\u6237\u4fe1\u606f", url: "get-user-info" },
							],
						},
						{ id: "share", name: "\u5206\u4eab", open: !1, pages: [{ name: "\u5206\u4eab", url: "share" }] },
						{ id: "payment", name: "\u652f\u4ed8", open: !1, pages: [{ name: "\u53d1\u8d77\u652f\u4ed8", url: "request-payment" }] },
						{ id: "speech", name: "\u8bed\u97f3", open: !1, pages: [{ name: "\u8bed\u97f3\u8bc6\u522b", url: "/platforms/app-plus/speech/speech" }] },
						{ id: "push", name: "\u63a8\u9001", open: !1, pages: [{ name: "\u63a8\u9001", url: "/platforms/app-plus/push/push" }] },
					],
					notForPc: [{ name: "\u8bbe\u7f6eTabBar", url: "set-tabbar" }],
				};
			},
			mounted: function () {
				uni.setStorageSync("menuList", this.list);
			},
			onShareAppMessage: function () {
				return { title: "\u6b22\u8fce\u4f53\u9a8cuni-app", path: "/pages/tabBar/API/API" };
			},
			onNavigationBarButtonTap: function (t) {
				uni.navigateTo({ url: "/pages/about/about" });
			},
			onLoad: function () {},
			onReady: function () {},
			onShow: function () {
				(this.navigateFlag = !1), this.leaveSetTabBarPage();
			},
			onHide: function () {
				this.leaveSetTabBarPage();
			},
			computed: s(
				{},
				(0, i.mapState)({
					hasLeftWin: function (t) {
						return !t.noMatchLeftWindow;
					},
					leftWinActive: function (t) {
						return t.leftWinActive.split("/")[3];
					},
					activeOpen: function (t) {
						return t.activeOpen;
					},
				}),
			),
			methods: s(
				s({}, (0, i.mapMutations)(["setMenu", "setMatchLeftWindow", "setLeftWinActive", "setActiveOpen"])),
				{},
				{
					triggerCollapse: function (t, e) {
						this.list[t].pages ? (e === this.activeOpen && (e = ""), this.setActiveOpen(e)) : this.goDetailPage("", this.list[t].url);
					},
					goDetailPage: function (t, e) {
						if ("set-tabbar" !== e) {
							var n = ~e.indexOf("platform") ? e : "/pages/API/" + e + "/" + e;
							this.hasLeftWin ? uni.reLaunch({ url: n }) : uni.navigateTo({ url: n });
						} else this.showSetTabBarPage = !0;
					},
					leaveSetTabBarPage: function () {
						this.showSetTabBarPage = !1;
					},
				},
			),
		};
		e.default = c;
	},
	142: function (t, e, n) {
		"use strict";
		n.r(e);
		var a = n(143),
			o = n.n(a);
		for (var i in a)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return a[t];
					});
				})(i);
		e.default = o.a;
	},
	143: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var a = { name: "page-head", props: { title: { type: String, default: "" } } };
		e.default = a;
	},
	144: function (t, e, n) {
		"use strict";
		n.r(e);
		var a = n(145),
			o = n.n(a);
		for (var i in a)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return a[t];
					});
				})(i);
		e.default = o.a;
	},
	145: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var a = {
			data: function () {
				return { title: "tababr", hasSetTabBarBadge: !1, hasShownTabBarRedDot: !1, hasCustomedStyle: !1, hasCustomedItem: !1, hasHiddenTabBar: !1 };
			},
			destroyed: function () {
				if (
					(this.hasSetTabBarBadge && uni.removeTabBarBadge({ index: 1 }),
					this.hasShownTabBarRedDot && uni.hideTabBarRedDot({ index: 1 }),
					this.hasHiddenTabBar && uni.showTabBar(),
					this.hasCustomedStyle && uni.setTabBarStyle({ color: "#7A7E83", selectedColor: "#007AFF", backgroundColor: "#F8F8F8", borderStyle: "black" }),
					this.hasCustomedItem)
				) {
					uni.setTabBarItem({ index: 1, text: "\u63a5\u53e3", iconPath: "/static/api.png", selectedIconPath: "/static/apiHL.png" });
				}
			},
			methods: {
				navigateBack: function () {
					this.$emit("unmount");
				},
				setTabBarBadge: function () {
					this.hasShownTabBarRedDot && (uni.hideTabBarRedDot({ index: 1 }), (this.hasShownTabBarRedDot = !this.hasShownTabBarRedDot)),
						this.hasSetTabBarBadge ? uni.removeTabBarBadge({ index: 1 }) : uni.setTabBarBadge({ index: 1, text: "1" }),
						(this.hasSetTabBarBadge = !this.hasSetTabBarBadge);
				},
				showTabBarRedDot: function () {
					this.hasSetTabBarBadge && (uni.removeTabBarBadge({ index: 1 }), (this.hasSetTabBarBadge = !this.hasSetTabBarBadge)),
						this.hasShownTabBarRedDot ? uni.hideTabBarRedDot({ index: 1 }) : uni.showTabBarRedDot({ index: 1 }),
						(this.hasShownTabBarRedDot = !this.hasShownTabBarRedDot);
				},
				hideTabBar: function () {
					this.hasHiddenTabBar ? uni.showTabBar() : uni.hideTabBar(), (this.hasHiddenTabBar = !this.hasHiddenTabBar);
				},
				customStyle: function () {
					this.hasCustomedStyle
						? uni.setTabBarStyle({ color: "#7A7E83", selectedColor: "#007AFF", backgroundColor: "#F8F8F8", borderStyle: "black" })
						: uni.setTabBarStyle({ color: "#FFF", selectedColor: "#007AFF", backgroundColor: "#000000", borderStyle: "black" }),
						(this.hasCustomedStyle = !this.hasCustomedStyle);
				},
				customItem: function () {
					var t = { index: 1, text: "\u63a5\u53e3", iconPath: "/static/api.png", selectedIconPath: "/static/apiHL.png" };
					this.hasCustomedItem || (t.text = "API"), uni.setTabBarItem(t), (this.hasCustomedItem = !this.hasCustomedItem);
				},
			},
		};
		e.default = a;
	},
	146: function (t, e) {
		t.exports = {
			".button": { "": { marginTop: ["30rpx", 0, 0, 0], marginLeft: [0, 0, 0, 0], marginRight: [0, 0, 0, 0] } },
			".btn-area": { "": { paddingTop: ["30rpx", 0, 0, 1] } },
			"@VERSION": 2,
		};
	},
	147: function (t, e) {
		t.exports = {
			".uni-icon": { "": { fontFamily: ["uniicons", 0, 0, 1], fontWeight: ["normal", 0, 0, 1] } },
			".uni-container": {
				"": {
					paddingTop: ["15", 0, 0, 2],
					paddingRight: ["15", 0, 0, 2],
					paddingBottom: ["15", 0, 0, 2],
					paddingLeft: ["15", 0, 0, 2],
					backgroundColor: ["#f8f8f8", 0, 0, 2],
				},
			},
			".uni-header-logo": {
				"": {
					paddingTop: ["15", 0, 0, 3],
					paddingRight: ["15", 0, 0, 3],
					paddingBottom: ["15", 0, 0, 3],
					paddingLeft: ["15", 0, 0, 3],
					flexDirection: ["column", 0, 0, 3],
					justifyContent: ["center", 0, 0, 3],
					alignItems: ["center", 0, 0, 3],
					marginTop: ["10rpx", 0, 0, 3],
				},
			},
			".uni-header-image": { "": { width: ["80", 0, 0, 4], height: ["80", 0, 0, 4] } },
			".uni-hello-text": { "": { marginBottom: ["20", 0, 0, 5] } },
			".hello-text": { "": { color: ["#7A7E83", 0, 0, 6], fontSize: ["14", 0, 0, 6], lineHeight: ["20", 0, 0, 6] } },
			".hello-link": { "": { color: ["#7A7E83", 0, 0, 7], fontSize: ["14", 0, 0, 7], lineHeight: ["20", 0, 0, 7] } },
			".uni-panel": { "": { marginBottom: ["12", 0, 0, 8] } },
			".uni-panel-h": {
				"": {
					backgroundColor: ["#ffffff", 0, 0, 9],
					flexDirection: ["row", 1, 0, 9],
					alignItems: ["center", 1, 0, 9],
					paddingTop: ["12", 0, 0, 9],
					paddingRight: ["12", 0, 0, 9],
					paddingBottom: ["12", 0, 0, 9],
					paddingLeft: ["12", 0, 0, 9],
				},
			},
			".uni-panel-h-on": { "": { backgroundColor: ["#f0f0f0", 0, 0, 11] } },
			".uni-panel-text": { "": { flex: [1, 0, 0, 12], color: ["#000000", 0, 0, 12], fontSize: ["14", 0, 0, 12], fontWeight: ["normal", 0, 0, 12] } },
			".uni-panel-icon": {
				"": {
					marginLeft: ["15", 0, 0, 13],
					color: ["#999999", 0, 0, 13],
					fontSize: ["14", 0, 0, 13],
					fontWeight: ["normal", 0, 0, 13],
					transform: ["rotate(0deg)", 0, 0, 13],
					transitionDuration: [0, 0, 0, 13],
					transitionProperty: ["transform", 0, 0, 13],
				},
			},
			".uni-panel-icon-on": { "": { transform: ["rotate(180deg)", 0, 0, 14] } },
			".uni-navigate-item": {
				"": {
					flexDirection: ["row", 0, 0, 15],
					alignItems: ["center", 0, 0, 15],
					backgroundColor: ["#FFFFFF", 0, 0, 15],
					borderTopStyle: ["solid", 0, 0, 15],
					borderTopColor: ["#f0f0f0", 0, 0, 15],
					borderTopWidth: ["1", 0, 0, 15],
					paddingTop: ["12", 0, 0, 15],
					paddingRight: ["12", 0, 0, 15],
					paddingBottom: ["12", 0, 0, 15],
					paddingLeft: ["12", 0, 0, 15],
					"backgroundColor:active": ["#f8f8f8", 0, 0, 16],
				},
			},
			".uni-navigate-text": { "": { flex: [1, 0, 0, 17], color: ["#000000", 0, 0, 17], fontSize: ["14", 0, 0, 17], fontWeight: ["normal", 0, 0, 17] } },
			".uni-navigate-icon": {
				"": { marginLeft: ["15", 0, 0, 18], color: ["#999999", 0, 0, 18], fontSize: ["14", 0, 0, 18], fontWeight: ["normal", 0, 0, 18] },
			},
			"@VERSION": 2,
		};
	},
	29: function (t, e, n) {
		"use strict";
		n.r(e);
		var a = n(30),
			o = n.n(a);
		for (var i in a)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return a[t];
					});
				})(i);
		e.default = o.a;
	},
	30: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var a = {
			name: "u-link",
			props: { href: { type: String, default: "" }, text: { type: String, default: "" }, inWhiteList: { type: Boolean, default: !1 } },
			methods: {
				openURL: function () {
					plus.runtime.openURL(this.href);
				},
			},
		};
		e.default = a;
	},
	32: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return a;
		}),
			n.d(e, "c", function () {
				return o;
			}),
			n.d(e, "a", function () {});
		var a = function () {
				var t = this.$createElement;
				return (this._self._c || t)(
					"u-text",
					{
						staticStyle: { textDecoration: "underline" },
						appendAsTree: !0,
						attrs: { href: this.href, inWhiteList: this.inWhiteList, append: "tree" },
						on: { click: this.openURL },
					},
					[this._v(this._s(this.text))],
				);
			},
			o = [];
	},
	45: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.install = b),
			(e.mapState = e.mapMutations = e.mapGetters = e.mapActions = e.createNamespacedHelpers = e.Store = e.default = void 0);
		var a = ("undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;
		function o(t, e) {
			Object.keys(t).forEach(function (n) {
				return e(t[n], n);
			});
		}
		function i(t) {
			return null !== t && "object" == typeof t;
		}
		var r = function (t, e) {
				(this.runtime = e), (this._children = Object.create(null)), (this._rawModule = t);
				var n = t.state;
				this.state = ("function" == typeof n ? n() : n) || {};
			},
			s = { namespaced: { configurable: !0 } };
		(s.namespaced.get = function () {
			return !!this._rawModule.namespaced;
		}),
			(r.prototype.addChild = function (t, e) {
				this._children[t] = e;
			}),
			(r.prototype.removeChild = function (t) {
				delete this._children[t];
			}),
			(r.prototype.getChild = function (t) {
				return this._children[t];
			}),
			(r.prototype.hasChild = function (t) {
				return t in this._children;
			}),
			(r.prototype.update = function (t) {
				(this._rawModule.namespaced = t.namespaced),
					t.actions && (this._rawModule.actions = t.actions),
					t.mutations && (this._rawModule.mutations = t.mutations),
					t.getters && (this._rawModule.getters = t.getters);
			}),
			(r.prototype.forEachChild = function (t) {
				o(this._children, t);
			}),
			(r.prototype.forEachGetter = function (t) {
				this._rawModule.getters && o(this._rawModule.getters, t);
			}),
			(r.prototype.forEachAction = function (t) {
				this._rawModule.actions && o(this._rawModule.actions, t);
			}),
			(r.prototype.forEachMutation = function (t) {
				this._rawModule.mutations && o(this._rawModule.mutations, t);
			}),
			Object.defineProperties(r.prototype, s);
		var u = function (t) {
			this.register([], t, !1);
		};
		(u.prototype.get = function (t) {
			return t.reduce(function (t, e) {
				return t.getChild(e);
			}, this.root);
		}),
			(u.prototype.getNamespace = function (t) {
				var e = this.root;
				return t.reduce(function (t, n) {
					return t + ((e = e.getChild(n)).namespaced ? n + "/" : "");
				}, "");
			}),
			(u.prototype.update = function (t) {
				!(function t(e, n, a) {
					0;
					if ((n.update(a), a.modules))
						for (var o in a.modules) {
							if (!n.getChild(o)) return void 0;
							t(e.concat(o), n.getChild(o), a.modules[o]);
						}
				})([], this.root, t);
			}),
			(u.prototype.register = function (t, e, n) {
				var a = this;
				void 0 === n && (n = !0);
				var i = new r(e, n);
				0 === t.length ? (this.root = i) : this.get(t.slice(0, -1)).addChild(t[t.length - 1], i);
				e.modules &&
					o(e.modules, function (e, o) {
						a.register(t.concat(o), e, n);
					});
			}),
			(u.prototype.unregister = function (t) {
				var e = this.get(t.slice(0, -1)),
					n = t[t.length - 1];
				e.getChild(n).runtime && e.removeChild(n);
			}),
			(u.prototype.isRegistered = function (t) {
				var e = this.get(t.slice(0, -1)),
					n = t[t.length - 1];
				return e.hasChild(n);
			});
		var c;
		var l = function (t) {
			var e = this;
			void 0 === t && (t = {}), !c && "undefined" != typeof window && window.Vue && b(window.Vue);
			var n = t.plugins;
			void 0 === n && (n = []);
			var o = t.strict;
			void 0 === o && (o = !1),
				(this._committing = !1),
				(this._actions = Object.create(null)),
				(this._actionSubscribers = []),
				(this._mutations = Object.create(null)),
				(this._wrappedGetters = Object.create(null)),
				(this._modules = new u(t)),
				(this._modulesNamespaceMap = Object.create(null)),
				(this._subscribers = []),
				(this._watcherVM = new c()),
				(this._makeLocalGettersCache = Object.create(null));
			var i = this,
				r = this.dispatch,
				s = this.commit;
			(this.dispatch = function (t, e) {
				return r.call(i, t, e);
			}),
				(this.commit = function (t, e, n) {
					return s.call(i, t, e, n);
				}),
				(this.strict = o);
			var l = this._modules.root.state;
			m(this, l, [], this._modules.root),
				h(this, l),
				n.forEach(function (t) {
					return t(e);
				}),
				(void 0 !== t.devtools ? t.devtools : c.config.devtools) &&
					(function (t) {
						a &&
							((t._devtoolHook = a),
							a.emit("vuex:init", t),
							a.on("vuex:travel-to-state", function (e) {
								t.replaceState(e);
							}),
							t.subscribe(
								function (t, e) {
									a.emit("vuex:mutation", t, e);
								},
								{ prepend: !0 },
							),
							t.subscribeAction(
								function (t, e) {
									a.emit("vuex:action", t, e);
								},
								{ prepend: !0 },
							));
					})(this);
		};
		e.Store = l;
		var p = { state: { configurable: !0 } };
		function f(t, e, n) {
			return (
				e.indexOf(t) < 0 && (n && n.prepend ? e.unshift(t) : e.push(t)),
				function () {
					var n = e.indexOf(t);
					n > -1 && e.splice(n, 1);
				}
			);
		}
		function d(t, e) {
			(t._actions = Object.create(null)),
				(t._mutations = Object.create(null)),
				(t._wrappedGetters = Object.create(null)),
				(t._modulesNamespaceMap = Object.create(null));
			var n = t.state;
			m(t, n, [], t._modules.root, !0), h(t, n, e);
		}
		function h(t, e, n) {
			var a = t._vm;
			(t.getters = {}), (t._makeLocalGettersCache = Object.create(null));
			var i = t._wrappedGetters,
				r = {};
			o(i, function (e, n) {
				(r[n] = (function (t, e) {
					return function () {
						return t(e);
					};
				})(e, t)),
					Object.defineProperty(t.getters, n, {
						get: function () {
							return t._vm[n];
						},
						enumerable: !0,
					});
			});
			var s = c.config.silent;
			(c.config.silent = !0),
				(t._vm = new c({ data: { $$state: e }, computed: r })),
				(c.config.silent = s),
				t.strict &&
					(function (t) {
						t._vm.$watch(
							function () {
								return this._data.$$state;
							},
							function () {
								0;
							},
							{ deep: !0, sync: !0 },
						);
					})(t),
				a &&
					(n &&
						t._withCommit(function () {
							a._data.$$state = null;
						}),
					c.nextTick(function () {
						return a.$destroy();
					}));
		}
		function m(t, e, n, a, o) {
			var i = !n.length,
				r = t._modules.getNamespace(n);
			if ((a.namespaced && (t._modulesNamespaceMap[r], (t._modulesNamespaceMap[r] = a)), !i && !o)) {
				var s = g(e, n.slice(0, -1)),
					u = n[n.length - 1];
				t._withCommit(function () {
					c.set(s, u, a.state);
				});
			}
			var l = (a.context = (function (t, e, n) {
				var a = "" === e,
					o = {
						dispatch: a
							? t.dispatch
							: function (n, a, o) {
									var i = v(n, a, o),
										r = i.payload,
										s = i.options,
										u = i.type;
									return (s && s.root) || (u = e + u), t.dispatch(u, r);
							  },
						commit: a
							? t.commit
							: function (n, a, o) {
									var i = v(n, a, o),
										r = i.payload,
										s = i.options,
										u = i.type;
									(s && s.root) || (u = e + u), t.commit(u, r, s);
							  },
					};
				return (
					Object.defineProperties(o, {
						getters: {
							get: a
								? function () {
										return t.getters;
								  }
								: function () {
										return (function (t, e) {
											if (!t._makeLocalGettersCache[e]) {
												var n = {},
													a = e.length;
												Object.keys(t.getters).forEach(function (o) {
													if (o.slice(0, a) === e) {
														var i = o.slice(a);
														Object.defineProperty(n, i, {
															get: function () {
																return t.getters[o];
															},
															enumerable: !0,
														});
													}
												}),
													(t._makeLocalGettersCache[e] = n);
											}
											return t._makeLocalGettersCache[e];
										})(t, e);
								  },
						},
						state: {
							get: function () {
								return g(t.state, n);
							},
						},
					}),
					o
				);
			})(t, r, n));
			a.forEachMutation(function (e, n) {
				!(function (t, e, n, a) {
					(t._mutations[e] || (t._mutations[e] = [])).push(function (e) {
						n.call(t, a.state, e);
					});
				})(t, r + n, e, l);
			}),
				a.forEachAction(function (e, n) {
					var a = e.root ? n : r + n,
						o = e.handler || e;
					!(function (t, e, n, a) {
						(t._actions[e] || (t._actions[e] = [])).push(function (e) {
							var o,
								i = n.call(t, { dispatch: a.dispatch, commit: a.commit, getters: a.getters, state: a.state, rootGetters: t.getters, rootState: t.state }, e);
							return (
								((o = i) && "function" == typeof o.then) || (i = Promise.resolve(i)),
								t._devtoolHook
									? i.catch(function (e) {
											throw (t._devtoolHook.emit("vuex:error", e), e);
									  })
									: i
							);
						});
					})(t, a, o, l);
				}),
				a.forEachGetter(function (e, n) {
					!(function (t, e, n, a) {
						if (t._wrappedGetters[e]) return void 0;
						t._wrappedGetters[e] = function (t) {
							return n(a.state, a.getters, t.state, t.getters);
						};
					})(t, r + n, e, l);
				}),
				a.forEachChild(function (a, i) {
					m(t, e, n.concat(i), a, o);
				});
		}
		function g(t, e) {
			return e.reduce(function (t, e) {
				return t[e];
			}, t);
		}
		function v(t, e, n) {
			return i(t) && t.type && ((n = e), (e = t), (t = t.type)), { type: t, payload: e, options: n };
		}
		function b(t) {
			(c && t === c) ||
				(function (t) {
					if (Number(t.version.split(".")[0]) >= 2) t.mixin({ beforeCreate: n });
					else {
						var e = t.prototype._init;
						t.prototype._init = function (t) {
							void 0 === t && (t = {}), (t.init = t.init ? [n].concat(t.init) : n), e.call(this, t);
						};
					}
					function n() {
						var t = this.$options;
						t.store ? (this.$store = "function" == typeof t.store ? t.store() : t.store) : t.parent && t.parent.$store && (this.$store = t.parent.$store);
					}
				})((c = t));
		}
		(p.state.get = function () {
			return this._vm._data.$$state;
		}),
			(p.state.set = function (t) {
				0;
			}),
			(l.prototype.commit = function (t, e, n) {
				var a = this,
					o = v(t, e, n),
					i = o.type,
					r = o.payload,
					s = (o.options, { type: i, payload: r }),
					u = this._mutations[i];
				u &&
					(this._withCommit(function () {
						u.forEach(function (t) {
							t(r);
						});
					}),
					this._subscribers.slice().forEach(function (t) {
						return t(s, a.state);
					}));
			}),
			(l.prototype.dispatch = function (t, e) {
				var n = this,
					a = v(t, e),
					o = a.type,
					i = a.payload,
					r = { type: o, payload: i },
					s = this._actions[o];
				if (s) {
					try {
						this._actionSubscribers
							.slice()
							.filter(function (t) {
								return t.before;
							})
							.forEach(function (t) {
								return t.before(r, n.state);
							});
					} catch (t) {
						0;
					}
					var u =
						s.length > 1
							? Promise.all(
									s.map(function (t) {
										return t(i);
									}),
							  )
							: s[0](i);
					return new Promise(function (t, e) {
						u.then(
							function (e) {
								try {
									n._actionSubscribers
										.filter(function (t) {
											return t.after;
										})
										.forEach(function (t) {
											return t.after(r, n.state);
										});
								} catch (t) {
									0;
								}
								t(e);
							},
							function (t) {
								try {
									n._actionSubscribers
										.filter(function (t) {
											return t.error;
										})
										.forEach(function (e) {
											return e.error(r, n.state, t);
										});
								} catch (t) {
									0;
								}
								e(t);
							},
						);
					});
				}
			}),
			(l.prototype.subscribe = function (t, e) {
				return f(t, this._subscribers, e);
			}),
			(l.prototype.subscribeAction = function (t, e) {
				return f("function" == typeof t ? { before: t } : t, this._actionSubscribers, e);
			}),
			(l.prototype.watch = function (t, e, n) {
				var a = this;
				return this._watcherVM.$watch(
					function () {
						return t(a.state, a.getters);
					},
					e,
					n,
				);
			}),
			(l.prototype.replaceState = function (t) {
				var e = this;
				this._withCommit(function () {
					e._vm._data.$$state = t;
				});
			}),
			(l.prototype.registerModule = function (t, e, n) {
				void 0 === n && (n = {}),
					"string" == typeof t && (t = [t]),
					this._modules.register(t, e),
					m(this, this.state, t, this._modules.get(t), n.preserveState),
					h(this, this.state);
			}),
			(l.prototype.unregisterModule = function (t) {
				var e = this;
				"string" == typeof t && (t = [t]),
					this._modules.unregister(t),
					this._withCommit(function () {
						var n = g(e.state, t.slice(0, -1));
						c.delete(n, t[t.length - 1]);
					}),
					d(this);
			}),
			(l.prototype.hasModule = function (t) {
				return "string" == typeof t && (t = [t]), this._modules.isRegistered(t);
			}),
			(l.prototype.hotUpdate = function (t) {
				this._modules.update(t), d(this, !0);
			}),
			(l.prototype._withCommit = function (t) {
				var e = this._committing;
				(this._committing = !0), t(), (this._committing = e);
			}),
			Object.defineProperties(l.prototype, p);
		var _ = C(function (t, e) {
			var n = {};
			return (
				B(e).forEach(function (e) {
					var a = e.key,
						o = e.val;
					(n[a] = function () {
						var e = this.$store.state,
							n = this.$store.getters;
						if (t) {
							var a = x(this.$store, "mapState", t);
							if (!a) return;
							(e = a.context.state), (n = a.context.getters);
						}
						return "function" == typeof o ? o.call(this, e, n) : e[o];
					}),
						(n[a].vuex = !0);
				}),
				n
			);
		});
		e.mapState = _;
		var y = C(function (t, e) {
			var n = {};
			return (
				B(e).forEach(function (e) {
					var a = e.key,
						o = e.val;
					n[a] = function () {
						for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
						var a = this.$store.commit;
						if (t) {
							var i = x(this.$store, "mapMutations", t);
							if (!i) return;
							a = i.context.commit;
						}
						return "function" == typeof o ? o.apply(this, [a].concat(e)) : a.apply(this.$store, [o].concat(e));
					};
				}),
				n
			);
		});
		e.mapMutations = y;
		var w = C(function (t, e) {
			var n = {};
			return (
				B(e).forEach(function (e) {
					var a = e.key,
						o = e.val;
					(o = t + o),
						(n[a] = function () {
							if (!t || x(this.$store, "mapGetters", t)) return this.$store.getters[o];
						}),
						(n[a].vuex = !0);
				}),
				n
			);
		});
		e.mapGetters = w;
		var S = C(function (t, e) {
			var n = {};
			return (
				B(e).forEach(function (e) {
					var a = e.key,
						o = e.val;
					n[a] = function () {
						for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
						var a = this.$store.dispatch;
						if (t) {
							var i = x(this.$store, "mapActions", t);
							if (!i) return;
							a = i.context.dispatch;
						}
						return "function" == typeof o ? o.apply(this, [a].concat(e)) : a.apply(this.$store, [o].concat(e));
					};
				}),
				n
			);
		});
		e.mapActions = S;
		var T = function (t) {
			return { mapState: _.bind(null, t), mapGetters: w.bind(null, t), mapMutations: y.bind(null, t), mapActions: S.bind(null, t) };
		};
		function B(t) {
			return (function (t) {
				return Array.isArray(t) || i(t);
			})(t)
				? Array.isArray(t)
					? t.map(function (t) {
							return { key: t, val: t };
					  })
					: Object.keys(t).map(function (e) {
							return { key: e, val: t[e] };
					  })
				: [];
		}
		function C(t) {
			return function (e, n) {
				return "string" != typeof e ? ((n = e), (e = "")) : "/" !== e.charAt(e.length - 1) && (e += "/"), t(e, n);
			};
		}
		function x(t, e, n) {
			return t._modulesNamespaceMap[n];
		}
		e.createNamespacedHelpers = T;
		var O = { Store: l, install: b, version: "3.4.0", mapState: _, mapMutations: y, mapGetters: w, mapActions: S, createNamespacedHelpers: T };
		e.default = O;
	},
	468: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return o;
		}),
			n.d(e, "c", function () {
				return i;
			}),
			n.d(e, "a", function () {
				return a;
			});
		var a = { uLink: n(58).default },
			o = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					n(
						"view",
						{ staticClass: ["uni-container"] },
						[
							t.showSetTabBarPage
								? [n("set-tab-bar", { on: { unmount: t.leaveSetTabBarPage } })]
								: [
										t.hasLeftWin
											? t._e()
											: n(
													"view",
													{ staticClass: ["uni-header-logo"] },
													[n("u-image", { staticClass: ["uni-header-image"], attrs: { src: "/static/apiIndex.png" } })],
													1,
											  ),
										t.hasLeftWin
											? t._e()
											: n(
													"view",
													{ staticClass: ["uni-hello-text"] },
													[
														n("u-text", { staticClass: ["hello-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
															t._v("\u4ee5\u4e0b\u5c06\u6f14\u793auni-app\u63a5\u53e3\u80fd\u529b\uff0c\u8be6\u7ec6\u6587\u6863\u89c1\uff1a"),
														]),
														n("u-link", {
															staticClass: ["hello-link"],
															attrs: { href: "https://uniapp.dcloud.io/api/", text: "https://uniapp.dcloud.io/api/", inWhiteList: !0 },
														}),
													],
													1,
											  ),
										t._l(t.list, function (e, a) {
											return n("view", { key: e.id, staticClass: ["uni-panel"] }, [
												n(
													"view",
													{
														staticClass: ["uni-panel-h"],
														class: t.activeOpen === e.id ? "uni-panel-h-on" : "",
														on: {
															click: function (n) {
																t.triggerCollapse(a, e.id);
															},
														},
													},
													[
														n("u-text", { staticClass: ["uni-panel-text"], appendAsTree: !0, attrs: { append: "tree" } }, [t._v(t._s(e.name))]),
														n(
															"u-text",
															{
																staticClass: ["uni-panel-icon", "uni-icon"],
																class: t.activeOpen === e.id ? "uni-panel-icon-on" : "",
																appendAsTree: !0,
																attrs: { append: "tree" },
															},
															[t._v(t._s(e.pages ? "\ue581" : "\ue470"))],
														),
													],
												),
												t.activeOpen === e.id
													? n(
															"view",
															{ staticClass: ["uni-panel-c"] },
															t._l(e.pages, function (a, o) {
																return n(
																	"view",
																	{
																		key: o,
																		staticClass: ["uni-navigate-item"],
																		class: {
																			"left-win-active": t.leftWinActive === a.url && t.hasLeftWin,
																			"pc-hide": "\u8bbe\u7f6eTabBar" === a.name && t.hasLeftWin,
																		},
																		attrs: { url: e.url },
																		on: {
																			click: function (n) {
																				t.goDetailPage(e.id, a.url);
																			},
																		},
																	},
																	[
																		n("u-text", { staticClass: ["uni-navigate-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
																			t._v(t._s(a.name ? a.name : a)),
																		]),
																		n("u-text", { staticClass: ["uni-navigate-icon", "uni-icon"], appendAsTree: !0, attrs: { append: "tree" } }, [
																			t._v("\ue470"),
																		]),
																	],
																);
															}),
															0,
													  )
													: t._e(),
											]);
										}),
								  ],
						],
						2,
					),
				]);
			},
			i = [];
	},
	526: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return o;
		}),
			n.d(e, "c", function () {
				return i;
			}),
			n.d(e, "a", function () {
				return a;
			});
		var a = { pageHead: n(648).default },
			o = function () {
				var t = this,
					e = t.$createElement,
					n = t._self._c || e;
				return n(
					"view",
					{ staticClass: ["uni-padding-wrap"] },
					[
						n("page-head", { attrs: { title: t.title } }),
						n("button", { staticClass: ["button"], on: { click: t.setTabBarBadge } }, [
							t._v(t._s(t.hasSetTabBarBadge ? "\u79fb\u9664tab\u5fbd\u6807" : "\u8bbe\u7f6etab\u5fbd\u6807")),
						]),
						n("button", { staticClass: ["button"], on: { click: t.showTabBarRedDot } }, [
							t._v(t._s(t.hasShownTabBarRedDot ? "\u79fb\u9664\u7ea2\u70b9" : "\u663e\u793a\u7ea2\u70b9")),
						]),
						n("button", { staticClass: ["button"], on: { click: t.customStyle } }, [
							t._v(t._s(t.hasCustomedStyle ? "\u79fb\u9664\u81ea\u5b9a\u4e49\u6837\u5f0f" : "\u81ea\u5b9a\u4e49Tab\u6837\u5f0f")),
						]),
						n("button", { staticClass: ["button"], on: { click: t.customItem } }, [
							t._v(t._s(t.hasCustomedItem ? "\u79fb\u9664\u81ea\u5b9a\u4e49\u4fe1\u606f" : "\u81ea\u5b9a\u4e49Tab\u4fe1\u606f")),
						]),
						n("button", { staticClass: ["button"], on: { click: t.hideTabBar } }, [
							t._v(t._s(t.hasHiddenTabBar ? "\u663e\u793aTabBar" : "\u9690\u85cfTabBar")),
						]),
						n(
							"view",
							{ staticClass: ["btn-area"] },
							[n("button", { staticClass: ["button"], attrs: { type: "primary" }, on: { click: t.navigateBack } }, [t._v("\u8fd4\u56de\u4e0a\u4e00\u7ea7")])],
							1,
						),
					],
					1,
				);
			},
			i = [];
	},
	528: function (t, e, n) {
		"use strict";
		n.d(e, "b", function () {
			return a;
		}),
			n.d(e, "c", function () {
				return o;
			}),
			n.d(e, "a", function () {});
		var a = function () {
				var t = this.$createElement,
					e = this._self._c || t;
				return e("view", { staticClass: ["common-page-head"] }, [
					e("view", { staticClass: ["common-page-head-title"] }, [e("u-text", [this._v(this._s(this.title))])]),
				]);
			},
			o = [];
	},
	546: function (t, e, n) {
		"use strict";
		n.r(e);
		var a = n(146),
			o = n.n(a);
		for (var i in a)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return a[t];
					});
				})(i);
		e.default = o.a;
	},
	547: function (t, e, n) {
		"use strict";
		n.r(e);
		var a = n(147),
			o = n.n(a);
		for (var i in a)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return a[t];
					});
				})(i);
		e.default = o.a;
	},
	58: function (t, e, n) {
		"use strict";
		n.r(e);
		var a = n(32),
			o = n(29);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		var r = n(0);
		var s = Object(r.a)(o.default, a.b, a.c, !1, null, null, "5f084aef", !1, a.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style);
		}).call(s),
			(e.default = s.exports);
	},
	6: function (t, e, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(7).default, Vue.prototype.__$appStyle__);
	},
	646: function (t, e, n) {
		"use strict";
		n.r(e);
		n(6);
		var a = n(71);
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
			(a.default.mpType = "page"),
			(a.default.route = "pages/tabBar/API/API"),
			(a.default.el = "#root"),
			new Vue(a.default);
	},
	647: function (t, e, n) {
		"use strict";
		n.r(e);
		var a = n(526),
			o = n(144);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		var r = n(0);
		var s = Object(r.a)(o.default, a.b, a.c, !1, null, null, "3624ffc5", !1, a.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(546).default, this.options.style) : Object.assign(this.options.style, n(546).default);
		}).call(s),
			(e.default = s.exports);
	},
	648: function (t, e, n) {
		"use strict";
		n.r(e);
		var a = n(528),
			o = n(142);
		for (var i in o)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(i);
		var r = n(0),
			s = Object(r.a)(o.default, a.b, a.c, !1, null, null, "33996bf3", !1, a.a, void 0);
		e.default = s.exports;
	},
	7: function (t, e, n) {
		"use strict";
		n.r(e);
		var a = n(1),
			o = n.n(a);
		for (var i in a)
			"default" !== i &&
				(function (t) {
					n.d(e, t, function () {
						return a[t];
					});
				})(i);
		e.default = o.a;
	},
	71: function (t, e, n) {
		"use strict";
		var a = n(468),
			o = n(140),
			i = n(0);
		var r = Object(i.a)(o.default, a.b, a.c, !1, null, null, "04d143ba", !1, a.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(547).default, this.options.style) : Object.assign(this.options.style, n(547).default);
		}).call(r),
			(e.default = r.exports);
	},
});
