!(function (t) {
	var e = {};
	function n(i) {
		if (e[i]) return e[i].exports;
		var o = (e[i] = { i: i, l: !1, exports: {} });
		return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, i) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
		}),
		(n.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var i = Object.create(null);
			if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
				for (var o in t)
					n.d(
						i,
						o,
						function (e) {
							return t[e];
						}.bind(null, o),
					);
			return i;
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
		n((n.s = 19));
})([
	function (t, e) {
		t.exports = {
			"uni-icon": { fontFamily: "uniicons", fontWeight: "normal" },
			"uni-bg-red": { backgroundColor: "#F76260", color: "#FFFFFF" },
			"uni-bg-green": { backgroundColor: "#09BB07", color: "#FFFFFF" },
			"uni-bg-blue": { backgroundColor: "#007AFF", color: "#FFFFFF" },
			"uni-container": { flex: 1, paddingTop: "15", paddingRight: "15", paddingBottom: "15", paddingLeft: "15", backgroundColor: "#f8f8f8" },
			"uni-padding-lr": { paddingLeft: "15", paddingRight: "15" },
			"uni-padding-tb": { paddingTop: "15", paddingBottom: "15" },
			"uni-header-logo": {
				paddingTop: "15",
				paddingRight: "15",
				paddingBottom: "15",
				paddingLeft: "15",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				marginTop: "10upx",
			},
			"uni-header-image": { width: "80", height: "80" },
			"uni-hello-text": { marginBottom: "20" },
			"hello-text": { color: "#7A7E83", fontSize: "14", lineHeight: "20" },
			"hello-link": { color: "#7A7E83", fontSize: "14", lineHeight: "20" },
			"uni-panel": { marginBottom: "12" },
			"uni-panel-h": {
				backgroundColor: "#ffffff",
				flexDirection: "row",
				alignItems: "center",
				paddingTop: "12",
				paddingRight: "12",
				paddingBottom: "12",
				paddingLeft: "12",
			},
			"uni-panel-h-on": { backgroundColor: "#f0f0f0" },
			"uni-panel-text": { flex: 1, color: "#000000", fontSize: "14", fontWeight: "normal" },
			"uni-panel-icon": {
				marginLeft: "15",
				color: "#999999",
				fontSize: "14",
				fontWeight: "normal",
				transform: "rotate(0deg)",
				transitionDuration: 0,
				transitionProperty: "transform",
			},
			"@TRANSITION": { "uni-panel-icon": { duration: 0, property: "transform" } },
			"uni-panel-icon-on": { transform: "rotate(180deg)" },
			"uni-navigate-item": {
				flexDirection: "row",
				alignItems: "center",
				backgroundColor: "#FFFFFF",
				borderTopStyle: "solid",
				borderTopColor: "#f0f0f0",
				borderTopWidth: "1",
				paddingTop: "12",
				paddingRight: "12",
				paddingBottom: "12",
				paddingLeft: "12",
				"backgroundColor:active": "#f8f8f8",
			},
			"uni-navigate-text": { flex: 1, color: "#000000", fontSize: "14", fontWeight: "normal" },
			"uni-navigate-icon": { marginLeft: "15", color: "#999999", fontSize: "14", fontWeight: "normal" },
			"uni-list-cell": { position: "relative", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" },
			"uni-list-cell-pd": { paddingTop: "22upx", paddingRight: "30upx", paddingBottom: "22upx", paddingLeft: "30upx" },
			"flex-r": { flexDirection: "row" },
			"flex-c": { flexDirection: "column" },
			"a-i-c": { alignItems: "center" },
			"j-c-c": { justifyContent: "center" },
			"list-item": { flexDirection: "row", paddingTop: "10", paddingRight: "10", paddingBottom: "10", paddingLeft: "10" },
		};
	},
	function (t, e, n) {
		"use strict";
		n.r(e), (e.default = { appid: "__UNI__BCEC007" });
	},
	function (t, e, n) {
		"use strict";
		function i(t, e, n, i, o, a, r, s, u, c) {
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
				i && (p.functional = !0),
				a && (p._scopeId = "data-v-" + a),
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
					var g = p.render;
					p.render = function (t, e) {
						return l.call(e), g(t, e);
					};
				} else {
					var h = p.beforeCreate;
					p.beforeCreate = h ? [].concat(h, l) : [l];
				}
			return { exports: t, options: p };
		}
		n.d(e, "a", function () {
			return i;
		});
	},
	,
	function (t, e, n) {
		"use strict";
		var i = n(10),
			o = n(7),
			a = n(2),
			r = Object(a.a)(o.default, i.b, i.c, !1, null, null, "361e6432", !1, i.a, void 0);
		e.default = r.exports;
	},
	,
	,
	function (t, e, n) {
		"use strict";
		var i = n(8),
			o = n.n(i);
		e.default = o.a;
	},
	function (t, e, n) {
		"use strict";
		(function (t) {
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
			var n = t("TestModule"),
				i = t("modal"),
				o = {
					onLoad: function () {
						plus.globalEvent.addEventListener("TestEvent", function (t) {
							i.toast({ message: "TestEvent收到：" + t.msg, duration: 1.5 });
						});
					},
					methods: {
						testAsyncFunc: function () {
							n.testAsyncFunc({ name: "unimp", age: 1 }, function (t) {
								i.toast({ message: t, duration: 1.5 });
							});
						},
						testSyncFunc: function () {
							var t = n.testSyncFunc({ name: "unimp", age: 1 });
							i.toast({ message: t, duration: 1.5 });
						},
						gotoNativePage: function () {
							n.gotoNativePage();
						},
					},
				};
			e.default = o;
		}).call(this, n(20).default);
	},
	,
	function (t, e, n) {
		"use strict";
		var i = function () {
				var t = this.$createElement,
					e = this._self._c || t;
				return e("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, enableBackToTop: !0, bubble: "true" } }, [
					e(
						"div",
						[
							e("button", { attrs: { type: "primary" }, on: { click: this.testAsyncFunc } }, [this._v("testAsyncFunc")]),
							e("button", { attrs: { type: "primary" }, on: { click: this.testSyncFunc } }, [this._v("testSyncFunc")]),
							e("button", { attrs: { type: "primary" }, on: { click: this.gotoNativePage } }, [this._v("跳转原生Activity")]),
						],
						1,
					),
				]);
			},
			o = [];
		n.d(e, "b", function () {
			return i;
		}),
			n.d(e, "c", function () {
				return o;
			}),
			n.d(e, "a", function () {});
	},
	function (t, e, n) {
		"use strict";
		function i(t, e) {
			return !e || ("object" != typeof e && "function" != typeof e)
				? (function (t) {
						if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return t;
				  })(t)
				: e;
		}
		function o() {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
			} catch (t) {
				return !1;
			}
		}
		function a(t) {
			return (a = Object.setPrototypeOf
				? Object.getPrototypeOf
				: function (t) {
						return t.__proto__ || Object.getPrototypeOf(t);
				  })(t);
		}
		function r(t, e) {
			return (r =
				Object.setPrototypeOf ||
				function (t, e) {
					return (t.__proto__ = e), t;
				})(t, e);
		}
		function s(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
		}
		function u(t, e) {
			for (var n = 0; n < e.length; n++) {
				var i = e[n];
				(i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
			}
		}
		function c(t, e, n) {
			return e && u(t.prototype, e), n && u(t, n), t;
		}
		var l = n(12).version;
		function p() {
			var t = "";
			if ("n" === d()) {
				try {
					t = plus.runtime.getDCloudId();
				} catch (e) {
					t = "";
				}
				return t;
			}
			try {
				t = uni.getStorageSync("__DC_STAT_UUID");
			} catch (e) {
				t = "__DC_UUID_VALUE";
			}
			if (!t) {
				t = Date.now() + "" + Math.floor(1e7 * Math.random());
				try {
					uni.setStorageSync("__DC_STAT_UUID", t);
				} catch (t) {
					uni.setStorageSync("__DC_STAT_UUID", "__DC_UUID_VALUE");
				}
			}
			return t;
		}
		var f = function () {
				return parseInt(new Date().getTime() / 1e3);
			},
			d = function () {
				return "n";
			},
			g = 0,
			h = 0,
			_ = function () {
				return (g = f()), "n" === d() && uni.setStorageSync("__page__residence__time", f()), g;
			},
			v = 0,
			y = 0,
			m = function () {
				var t = new Date().getTime();
				return (v = t), (y = 0), t;
			},
			S = function () {
				var t = new Date().getTime();
				return (y = t), t;
			},
			b = function (t) {
				var e = 0;
				return (
					0 !== v && (e = y - v),
					(e = (e = parseInt(e / 1e3)) < 1 ? 1 : e),
					"app" === t ? { residenceTime: e, overtime: e > 300 } : "page" === t ? { residenceTime: e, overtime: e > 1800 } : { residenceTime: e }
				);
			},
			D = function (t) {
				var e = getCurrentPages(),
					n = e[e.length - 1].$vm,
					i = t._query,
					o = i && "{}" !== JSON.stringify(i) ? "?" + JSON.stringify(i) : "";
				return (t._query = ""), "bd" === d() ? n.$mp && n.$mp.page.is + o : (n.$scope && n.$scope.route + o) || (n.$mp && n.$mp.page.route + o);
			},
			T = function (t) {
				return !!("page" === t.mpType || (t.$mp && "page" === t.$mp.mpType) || "page" === t.$options.mpType);
			},
			k = n(13).default,
			w = n(1).default || n(1),
			R = uni.getSystemInfoSync(),
			q = (function (t) {
				!(function (t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
					(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && r(t, e);
				})(u, t);
				var e,
					n =
						((e = u),
						function () {
							var t,
								n = a(e);
							if (o()) {
								var r = a(this).constructor;
								t = Reflect.construct(n, arguments, r);
							} else t = n.apply(this, arguments);
							return i(this, t);
						});
				function u() {
					var t;
					return (
						s(this, u),
						((t = n.call(this)).instance = null),
						"function" == typeof uni.addInterceptor && (t.addInterceptorInit(), t.interceptLogin(), t.interceptShare(!0), t.interceptRequestPayment()),
						t
					);
				}
				return (
					c(u, null, [
						{
							key: "getInstance",
							value: function () {
								return this.instance || (this.instance = new u()), this.instance;
							},
						},
					]),
					c(u, [
						{
							key: "addInterceptorInit",
							value: function () {
								var t = this;
								uni.addInterceptor("setNavigationBarTitle", {
									invoke: function (e) {
										t._navigationBarTitle.page = e.title;
									},
								});
							},
						},
						{
							key: "interceptLogin",
							value: function () {
								var t = this;
								uni.addInterceptor("login", {
									complete: function () {
										t._login();
									},
								});
							},
						},
						{
							key: "interceptShare",
							value: function (t) {
								var e = this;
								t
									? uni.addInterceptor("share", {
											success: function () {
												e._share();
											},
											fail: function () {
												e._share();
											},
									  })
									: e._share();
							},
						},
						{
							key: "interceptRequestPayment",
							value: function () {
								var t = this;
								uni.addInterceptor("requestPayment", {
									success: function () {
										t._payment("pay_success");
									},
									fail: function () {
										t._payment("pay_fail");
									},
								});
							},
						},
						{
							key: "report",
							value: function (t, e) {
								(this.self = e), _(), (this.__licationShow = !0), this._sendReportRequest(t, !0);
							},
						},
						{
							key: "load",
							value: function (t, e) {
								if (!e.$scope && !e.$mp) {
									var n = getCurrentPages();
									e.$scope = n[n.length - 1];
								}
								(this.self = e), (this._query = t);
							},
						},
						{
							key: "show",
							value: function (t) {
								(this.self = t), T(t) ? this._pageShow(t) : this._applicationShow(t);
							},
						},
						{ key: "ready", value: function (t) {} },
						{
							key: "hide",
							value: function (t) {
								(this.self = t), T(t) ? this._pageHide(t) : this._applicationHide(t, !0);
							},
						},
						{
							key: "error",
							value: function (t) {
								this._platform;
								var e = "";
								e = t.message ? t.stack : JSON.stringify(t);
								var n = {
									ak: this.statData.ak,
									uuid: this.statData.uuid,
									lt: "31",
									ut: this.statData.ut,
									ch: this.statData.ch,
									mpsdk: this.statData.mpsdk,
									mpv: this.statData.mpv,
									v: this.statData.v,
									em: e,
									usv: this.statData.usv,
									t: f(),
									p: this.statData.p,
								};
								this.request(n);
							},
						},
					]),
					u
				);
			})(
				(function () {
					function t() {
						var e, n;
						s(this, t),
							(this.self = ""),
							(this._retry = 0),
							(this._platform = ""),
							(this._query = {}),
							(this._navigationBarTitle = { config: "", page: "", report: "", lt: "" }),
							(this._operatingTime = 0),
							(this._reportingRequestData = { 1: [], 11: [] }),
							(this.__prevent_triggering = !1),
							(this.__licationHide = !1),
							(this.__licationShow = !1),
							(this._lastPageRoute = ""),
							(this.statData = {
								uuid: p(),
								ut: d(),
								mpn:
									((n = ""),
									("wx" !== d() && "qq" !== d()) || (uni.canIUse("getAccountInfoSync") && (n = uni.getAccountInfoSync().miniProgram.appId || "")),
									n),
								ak: w.appid,
								usv: l,
								v: "n" === d() ? plus.runtime.version : "",
								ch: ((e = ""), "n" === d() && (e = plus.runtime.channel), e),
								cn: "",
								pn: "",
								ct: "",
								t: f(),
								tt: "",
								p: "android" === R.platform ? "a" : "i",
								brand: R.brand || "",
								md: R.model,
								sv: R.system.replace(/(Android|iOS)\s/, ""),
								mpsdk: R.SDKVersion || "",
								mpv: R.version || "",
								lang: R.language,
								pr: R.pixelRatio,
								ww: R.windowWidth,
								wh: R.windowHeight,
								sw: R.screenWidth,
								sh: R.screenHeight,
							});
					}
					return (
						c(t, [
							{
								key: "_applicationShow",
								value: function () {
									if (this.__licationHide) {
										if ((S(), b("app").overtime)) {
											var t = { path: this._lastPageRoute, scene: this.statData.sc };
											this._sendReportRequest(t);
										}
										this.__licationHide = !1;
									}
								},
							},
							{
								key: "_applicationHide",
								value: function (t, e) {
									(this.__licationHide = !0), S();
									var n = b();
									m();
									var i = D(this);
									this._sendHideRequest({ urlref: i, urlref_ts: n.residenceTime }, e);
								},
							},
							{
								key: "_pageShow",
								value: function () {
									var t,
										e,
										n = D(this),
										i =
											((t = getCurrentPages()),
											(e = t[t.length - 1].$vm),
											"bd" === d() ? e.$mp && e.$mp.page.is : (e.$scope && e.$scope.route) || (e.$mp && e.$mp.page.route));
									if (
										((this._navigationBarTitle.config =
											(k && k.pages[i] && k.pages[i].titleNView && k.pages[i].titleNView.titleText) ||
											(k && k.pages[i] && k.pages[i].navigationBarTitleText) ||
											""),
										this.__licationShow)
									)
										return m(), (this.__licationShow = !1), void (this._lastPageRoute = n);
									if ((S(), (this._lastPageRoute = n), b("page").overtime)) {
										var o = { path: this._lastPageRoute, scene: this.statData.sc };
										this._sendReportRequest(o);
									}
									m();
								},
							},
							{
								key: "_pageHide",
								value: function () {
									if (!this.__licationHide) {
										S();
										var t = b("page");
										return (
											this._sendPageRequest({ url: this._lastPageRoute, urlref: this._lastPageRoute, urlref_ts: t.residenceTime }),
											void (this._navigationBarTitle = { config: "", page: "", report: "", lt: "" })
										);
									}
								},
							},
							{
								key: "_login",
								value: function () {
									this._sendEventRequest({ key: "login" }, 0);
								},
							},
							{
								key: "_share",
								value: function () {
									this._sendEventRequest({ key: "share" }, 0);
								},
							},
							{
								key: "_payment",
								value: function (t) {
									this._sendEventRequest({ key: t }, 0);
								},
							},
							{
								key: "_sendReportRequest",
								value: function (t) {
									this._navigationBarTitle.lt = "1";
									var e,
										n,
										i = t.query && "{}" !== JSON.stringify(t.query) ? "?" + JSON.stringify(t.query) : "";
									(this.statData.lt = "1"),
										(this.statData.url = t.path + i || ""),
										(this.statData.t = f()),
										(this.statData.sc = (function (t) {
											var e = d(),
												n = "";
											return t || ("wx" === e && (n = uni.getLaunchOptionsSync().scene), n);
										})(t.scene)),
										(this.statData.fvts =
											((e = uni.getStorageSync("First__Visit__Time")),
											(n = 0),
											e ? (n = e) : ((n = f()), uni.setStorageSync("First__Visit__Time", n), uni.removeStorageSync("Last__Visit__Time")),
											n)),
										(this.statData.lvts = (function () {
											var t = uni.getStorageSync("Last__Visit__Time"),
												e = 0;
											return (e = t || ""), uni.setStorageSync("Last__Visit__Time", f()), e;
										})()),
										(this.statData.tvc = (function () {
											var t = uni.getStorageSync("Total__Visit__Count"),
												e = 1;
											return t && ((e = t), e++), uni.setStorageSync("Total__Visit__Count", e), e;
										})()),
										"n" === d() ? this.getProperty() : this.getNetworkInfo();
								},
							},
							{
								key: "_sendPageRequest",
								value: function (t) {
									var e = t.url,
										n = t.urlref,
										i = t.urlref_ts;
									this._navigationBarTitle.lt = "11";
									var o = {
										ak: this.statData.ak,
										uuid: this.statData.uuid,
										lt: "11",
										ut: this.statData.ut,
										url: e,
										tt: this.statData.tt,
										urlref: n,
										urlref_ts: i,
										ch: this.statData.ch,
										usv: this.statData.usv,
										t: f(),
										p: this.statData.p,
									};
									this.request(o);
								},
							},
							{
								key: "_sendHideRequest",
								value: function (t, e) {
									var n = t.urlref,
										i = t.urlref_ts,
										o = {
											ak: this.statData.ak,
											uuid: this.statData.uuid,
											lt: "3",
											ut: this.statData.ut,
											urlref: n,
											urlref_ts: i,
											ch: this.statData.ch,
											usv: this.statData.usv,
											t: f(),
											p: this.statData.p,
										};
									this.request(o, e);
								},
							},
							{
								key: "_sendEventRequest",
								value: function () {
									var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
										e = t.key,
										n = void 0 === e ? "" : e,
										i = t.value,
										o = void 0 === i ? "" : i,
										a = this._lastPageRoute,
										r = {
											ak: this.statData.ak,
											uuid: this.statData.uuid,
											lt: "21",
											ut: this.statData.ut,
											url: a,
											ch: this.statData.ch,
											e_n: n,
											e_v: "object" == typeof o ? JSON.stringify(o) : o.toString(),
											usv: this.statData.usv,
											t: f(),
											p: this.statData.p,
										};
									this.request(r);
								},
							},
							{
								key: "getNetworkInfo",
								value: function () {
									var t = this;
									uni.getNetworkType({
										success: function (e) {
											(t.statData.net = e.networkType), t.getLocation();
										},
									});
								},
							},
							{
								key: "getProperty",
								value: function () {
									var t = this;
									plus.runtime.getProperty(plus.runtime.appid, function (e) {
										(t.statData.v = e.version || ""), t.getNetworkInfo();
									});
								},
							},
							{
								key: "getLocation",
								value: function () {
									var t = this;
									w.getLocation
										? uni.getLocation({
												type: "wgs84",
												geocode: !0,
												success: function (e) {
													e.address && ((t.statData.cn = e.address.country), (t.statData.pn = e.address.province), (t.statData.ct = e.address.city)),
														(t.statData.lat = e.latitude),
														(t.statData.lng = e.longitude),
														t.request(t.statData);
												},
										  })
										: ((this.statData.lat = 0), (this.statData.lng = 0), this.request(this.statData));
								},
							},
							{
								key: "request",
								value: function (t, e) {
									var n = this,
										i = f(),
										o = this._navigationBarTitle;
									(t.ttn = o.page), (t.ttpj = o.config), (t.ttc = o.report);
									var a = this._reportingRequestData;
									if (
										("n" === d() && (a = uni.getStorageSync("__UNI__STAT__DATA") || {}),
										a[t.lt] || (a[t.lt] = []),
										a[t.lt].push(t),
										"n" === d() && uni.setStorageSync("__UNI__STAT__DATA", a),
										(h = f()),
										"n" === d() && (g = uni.getStorageSync("__page__residence__time")),
										!(h - g < 10) || e)
									) {
										var r = this._reportingRequestData;
										"n" === d() && (r = uni.getStorageSync("__UNI__STAT__DATA")), _();
										var s = [],
											u = [],
											c = [],
											p = function (t) {
												r[t].forEach(function (e) {
													var n = (function (t) {
														var e = "";
														for (var n in t) e += n + "=" + t[n] + "&";
														return e.substr(0, e.length - 1);
													})(e);
													0 === t ? s.push(n) : 3 === t ? c.push(n) : u.push(n);
												});
											};
										for (var v in r) p(v);
										s.push.apply(s, u.concat(c));
										var y = { usv: l, t: i, requests: JSON.stringify(s) };
										(this._reportingRequestData = {}),
											"n" === d() && uni.removeStorageSync("__UNI__STAT__DATA"),
											"h5" !== t.ut
												? "n" !== d() || "a" !== this.statData.p
													? this._sendRequest(y)
													: setTimeout(function () {
															n._sendRequest(y);
													  }, 200)
												: this.imageRequest(y);
									}
								},
							},
							{
								key: "_sendRequest",
								value: function (t) {
									var e = this;
									uni.request({
										url: "https://tongji.dcloud.io/uni/stat",
										method: "POST",
										data: t,
										success: function () {},
										fail: function (n) {
											++e._retry < 3 &&
												setTimeout(function () {
													e._sendRequest(t);
												}, 1e3);
										},
									});
								},
							},
							{
								key: "imageRequest",
								value: function (t) {
									var e = new Image(),
										n = (function (t) {
											var e = Object.keys(t).sort(),
												n = {},
												i = "";
											for (var o in e) (n[e[o]] = t[e[o]]), (i += e[o] + "=" + t[e[o]] + "&");
											return { sign: "", options: i.substr(0, i.length - 1) };
										})(
											(function (t) {
												var e = {};
												for (var n in t) e[n] = encodeURIComponent(t[n]);
												return e;
											})(t),
										).options;
									e.src = "https://tongji.dcloud.io/uni/stat.gif?" + n;
								},
							},
							{
								key: "sendEvent",
								value: function (t, e) {
									var n, i;
									((i = e),
									(n = t)
										? "string" != typeof n
											? (console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"), 1)
											: n.length > 255
											? (console.error("uni.report [eventName] 参数长度不能大于 255"), 1)
											: "string" != typeof i && "object" != typeof i
											? (console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"), 1)
											: "string" == typeof i && i.length > 255
											? (console.error("uni.report [options] 参数长度不能大于 255"), 1)
											: "title" === n && "string" != typeof i
											? (console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"), 1)
											: void 0
										: (console.error("uni.report 缺少 [eventName] 参数"), 1)) ||
										("title" !== t
											? this._sendEventRequest({ key: t, value: "object" == typeof e ? JSON.stringify(e) : e }, 1)
											: (this._navigationBarTitle.report = e));
								},
							},
						]),
						t
					);
				})(),
			).getInstance(),
			x = !1,
			I = {
				onLaunch: function (t) {
					q.report(t, this);
				},
				onReady: function () {
					q.ready(this);
				},
				onLoad: function (t) {
					if ((q.load(t, this), this.$scope && this.$scope.onShareAppMessage)) {
						var e = this.$scope.onShareAppMessage;
						this.$scope.onShareAppMessage = function (t) {
							return q.interceptShare(!1), e.call(this, t);
						};
					}
				},
				onShow: function () {
					(x = !1), q.show(this);
				},
				onHide: function () {
					(x = !0), q.hide(this);
				},
				onUnload: function () {
					x ? (x = !1) : q.hide(this);
				},
				onError: function (t) {
					q.error(t);
				},
			};
		!(function () {
			var t = n(14);
			(t.default || t).mixin(I),
				(uni.report = function (t, e) {
					q.sendEvent(t, e);
				});
		})();
	},
	function (t) {
		t.exports = {
			_from: "@dcloudio/uni-stat@alpha",
			_id: "@dcloudio/uni-stat@2.0.0-alpha-26920200411001",
			_inBundle: !1,
			_integrity: "sha512-cUEIJ3It6EFJT0kIyVgcRMgNa2UBm+4autJWCuzggwnlOr6JdM3/ZVntz1YdwXFTEoKDWi8GLF7wWsZ2vwE0UA==",
			_location: "/@dcloudio/uni-stat",
			_phantomChildren: {},
			_requested: {
				type: "tag",
				registry: !0,
				raw: "@dcloudio/uni-stat@alpha",
				name: "@dcloudio/uni-stat",
				escapedName: "@dcloudio%2funi-stat",
				scope: "@dcloudio",
				rawSpec: "alpha",
				saveSpec: null,
				fetchSpec: "alpha",
			},
			_requiredBy: ["#USER", "/", "/@dcloudio/vue-cli-plugin-uni"],
			_resolved: "https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-26920200411001.tgz",
			_shasum: "dfab45e371df540c477880ae512b82546ac6e6d0",
			_spec: "@dcloudio/uni-stat@alpha",
			_where: "/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",
			author: "",
			bugs: { url: "https://github.com/dcloudio/uni-app/issues" },
			bundleDependencies: !1,
			deprecated: !1,
			description: "",
			devDependencies: {
				"@babel/core": "^7.5.5",
				"@babel/preset-env": "^7.5.5",
				eslint: "^6.1.0",
				rollup: "^1.19.3",
				"rollup-plugin-babel": "^4.3.3",
				"rollup-plugin-clear": "^2.0.7",
				"rollup-plugin-commonjs": "^10.0.2",
				"rollup-plugin-copy": "^3.1.0",
				"rollup-plugin-eslint": "^7.0.0",
				"rollup-plugin-json": "^4.0.0",
				"rollup-plugin-node-resolve": "^5.2.0",
				"rollup-plugin-replace": "^2.2.0",
				"rollup-plugin-uglify": "^6.0.2",
			},
			files: ["dist", "package.json", "LICENSE"],
			gitHead: "6090d656df76642953b405984451ec4a76bae2f5",
			homepage: "https://github.com/dcloudio/uni-app#readme",
			license: "Apache-2.0",
			main: "dist/index.js",
			name: "@dcloudio/uni-stat",
			repository: { type: "git", url: "git+https://github.com/dcloudio/uni-app.git", directory: "packages/uni-stat" },
			scripts: { build: "NODE_ENV=production rollup -c rollup.config.js", dev: "NODE_ENV=development rollup -w -c rollup.config.js" },
			version: "2.0.0-alpha-26920200411001",
		};
	},
	function (t, e, n) {
		"use strict";
		n.r(e), (e.default = { pages: {}, globalStyle: {} });
	},
	function (t, e) {
		t.exports = Vue;
	},
	function (t, e, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(16).default, Vue.prototype.__$appStyle__);
	},
	function (t, e, n) {
		"use strict";
		n.r(e);
		var i = n(0),
			o = n.n(i);
		for (var a in i)
			"default" !== a &&
				(function (t) {
					n.d(e, t, function () {
						return i[t];
					});
				})(a);
		e.default = o.a;
	},
	,
	,
	function (t, e, n) {
		"use strict";
		n.r(e);
		n(11), n(15);
		var i = n(4);
		(i.default.mpType = "page"), (i.default.route = "pages/sample/ext-module"), (i.default.el = "#root"), new Vue(i.default);
	},
	function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.default = function (t) {
				return weex.requireModule(t);
			});
	},
]);
