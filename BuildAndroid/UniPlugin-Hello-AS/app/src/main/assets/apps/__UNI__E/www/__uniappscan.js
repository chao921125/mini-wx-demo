!(function (e) {
	var t = {};
	function n(a) {
		if (t[a]) return t[a].exports;
		var o = (t[a] = { i: a, l: !1, exports: {} });
		return e[a].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	(n.m = e),
		(n.c = t),
		(n.d = function (e, t, a) {
			n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
		}),
		(n.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		}),
		(n.t = function (e, t) {
			if ((1 & t && (e = n(e)), 8 & t)) return e;
			if (4 & t && "object" == typeof e && e && e.__esModule) return e;
			var a = Object.create(null);
			if ((n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
				for (var o in e)
					n.d(
						a,
						o,
						function (t) {
							return e[t];
						}.bind(null, o),
					);
			return a;
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
		n((n.s = 43));
})([
	function (e, t) {
		e.exports = {};
	},
	function (e, t, n) {
		"use strict";
		function a(e, t, n, a, o, r, i, s, c, u) {
			var l,
				f = "function" == typeof e ? e.options : e;
			if (
				(c && (f.components = Object.assign(c, f.components || {})),
				u &&
					((u.beforeCreate || (u.beforeCreate = [])).unshift(function () {
						this[u.__module] = this;
					}),
					(f.mixins || (f.mixins = [])).push(u)),
				t && ((f.render = t), (f.staticRenderFns = n), (f._compiled = !0)),
				a && (f.functional = !0),
				r && (f._scopeId = "data-v-" + r),
				i
					? ((l = function (e) {
							(e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(e = __VUE_SSR_CONTEXT__),
								o && o.call(this, e),
								e && e._registeredComponents && e._registeredComponents.add(i);
					  }),
					  (f._ssrRegister = l))
					: o &&
					  (l = s
							? function () {
									o.call(this, this.$root.$options.shadowRoot);
							  }
							: o),
				l)
			)
				if (f.functional) {
					f._injectStyles = l;
					var d = f.render;
					f.render = function (e, t) {
						return l.call(t), d(e, t);
					};
				} else {
					var p = f.beforeCreate;
					f.beforeCreate = p ? [].concat(p, l) : [l];
				}
			return { exports: e, options: f };
		}
		n.d(t, "a", function () {
			return a;
		});
	},
	function (e, t, n) {
		"use strict";
		var a;
		Object.defineProperty(t, "__esModule", { value: !0 }),
			(t.weexPlus = t.default = void 0),
			(a =
				"function" == typeof getUni
					? getUni
					: function () {
							var e = function (e) {
									return "function" == typeof e;
								},
								t = /^\$|^on|^create|Sync$|Manager$|^pause/,
								n = [
									"os",
									"getCurrentSubNVue",
									"getSubNVueById",
									"stopRecord",
									"stopVoice",
									"stopBackgroundAudio",
									"stopPullDownRefresh",
									"hideKeyboard",
									"hideToast",
									"hideLoading",
									"showNavigationBarLoading",
									"hideNavigationBarLoading",
									"canIUse",
									"navigateBack",
									"closeSocket",
									"pageScrollTo",
									"drawCanvas",
								],
								a = function (e) {
									return !((t.test(e) && "createBLEConnection" !== e) || ~n.indexOf(e));
								},
								r = function (t) {
									return function () {
										for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
										var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
										return e(r.success) || e(r.fail) || e(r.complete)
											? t.apply(void 0, [r].concat(a))
											: new Promise(function (e, n) {
													t.apply(void 0, [Object.assign({}, r, { success: e, fail: n })].concat(a)),
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
														});
											  })
													.then(function (e) {
														return [null, e];
													})
													.catch(function (e) {
														return [e];
													});
									};
								},
								i = [],
								s = void 0;
							function c(e) {
								i.forEach(function (t) {
									return t({ origin: s, data: e });
								});
							}
							var u = o.webview.currentWebview().id,
								l = new BroadcastChannel("UNI-APP-SUBNVUE");
							function f(e) {
								e.$processed = !0;
								var t = o.webview.currentWebview().id === e.id,
									n = "uniNView" === e.__uniapp_origin_type && e.__uniapp_origin_id,
									a = e.id;
								if (
									((e.postMessage = function (e) {
										n ? l.postMessage({ data: e, to: t ? n : a }) : _({ type: "UniAppSubNVue", data: e });
									}),
									(e.onMessage = function (e) {
										i.push(e);
									}),
									e.__uniapp_mask_id)
								) {
									s = e.__uniapp_host;
									var r = e.__uniapp_mask,
										c = o.webview.getWebviewById(e.__uniapp_mask_id);
									c = c.parent() || c;
									var u = e.show,
										f = e.hide,
										d = e.close,
										p = function () {
											c.setStyle({ mask: "none" });
										};
									(e.show = function () {
										c.setStyle({ mask: r });
										for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
										return u.apply(e, n);
									}),
										(e.hide = function () {
											p();
											for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
											return f.apply(e, n);
										}),
										(e.close = function () {
											p();
											for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
											return d.apply(e, n);
										});
								}
							}
							function d(e) {
								var t = o.webview.getWebviewById(e);
								return t && !t.$processed && f(t), t;
							}
							l.onmessage = function (e) {
								e.data.to === u && c(e.data.data);
							};
							var p = weex.requireModule("plus"),
								g = weex.requireModule("globalEvent"),
								v = 0,
								h = {},
								y = "__uniapp__service";
							g.addEventListener("plusMessage", function (e) {
								"UniAppJsApi" === e.data.type
									? A(e.data.id, e.data.data)
									: "UniAppSubNVue" === e.data.type
									? c(e.data.data, e.data.options)
									: "onNavigationBarButtonTap" === e.data.type
									? "function" == typeof S && S(e.data.data)
									: "onNavigationBarSearchInputChanged" === e.data.type
									? "function" == typeof C && C(e.data.data)
									: "onNavigationBarSearchInputConfirmed" === e.data.type
									? "function" == typeof w && w(e.data.data)
									: "onNavigationBarSearchInputClicked" === e.data.type && "function" == typeof E && E(e.data.data);
							});
							var A = function (e, t) {
									var n = h[e];
									n ? (n(t), n.keepAlive || delete h[e]) : console.error("callback[" + e + "] is undefined");
								},
								m = function (t) {
									var n,
										a,
										o = t.id,
										r = t.type,
										i = t.params;
									(h[o] =
										((a = function (t) {
											e(n)
												? n(t)
												: n &&
												  (~t.errMsg.indexOf(":ok") ? e(n.success) && n.success(t) : ~t.errMsg.indexOf(":fail") && e(n.fail) && n.fail(t),
												  e(n.complete) && n.complete(t));
										}),
										(e((n = i)) || (n && e(n.callback))) && (a.keepAlive = !0),
										a)),
										p.postMessage({ id: o, type: r, params: i }, y);
								};
							function _(e) {
								p.postMessage(e, y);
							}
							var b = function (e) {
									return function (t) {
										m({ id: v++, type: e, params: t });
									};
								},
								S = void 0,
								C = void 0,
								w = void 0,
								E = void 0;
							function M(e) {
								S = e;
							}
							function k(e) {
								C = e;
							}
							function B(e) {
								w = e;
							}
							function O(e) {
								E = e;
							}
							function I(e) {
								return weex.requireModule(e);
							}
							var N = weex.requireModule("dom"),
								P = weex.requireModule("globalEvent"),
								T = [];
							function D(e) {
								"function" == typeof e && (this.isUniAppReady ? e() : T.push(e));
							}
							P.addEventListener("plusMessage", function (e) {
								"UniAppReady" === e.data.type &&
									((D.isUniAppReady = !0),
									T.length &&
										(T.forEach(function (e) {
											return e();
										}),
										(T = [])));
							});
							var x =
									"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
										? function (e) {
												return typeof e;
										  }
										: function (e) {
												return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
										  },
								U = weex.requireModule("stream"),
								R = "GET",
								V = function (e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : R,
										n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "application/x-www-form-urlencoded";
									return "object" === (void 0 === e ? "undefined" : x(e))
										? "POST" === t.toUpperCase() && "application/json" === n.toLowerCase()
											? JSON.stringify(e)
											: Object.keys(e)
													.map(function (t) {
														return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
													})
													.join("&")
										: e;
								},
								F = weex.requireModule("plusstorage"),
								j = "__TYPE",
								$ = weex.requireModule("clipboard"),
								L = (function () {
									if ("function" == typeof getUniEmitter) return getUniEmitter;
									var e = {
										$on: function () {
											console.warn("uni.$on failed");
										},
										$off: function () {
											console.warn("uni.$off failed");
										},
										$once: function () {
											console.warn("uni.$once failed");
										},
										$emit: function () {
											console.warn("uni.$emit failed");
										},
									};
									return function () {
										return e;
									};
								})();
							function Q(e, t, n) {
								return e[t].apply(e, n);
							}
							var J = Object.freeze({
									loadFontFace: function (t) {
										var n = t.family,
											a = t.source,
											o = (t.desc, t.success),
											r = (t.fail, t.complete);
										N.addRule("fontFace", { fontFamily: n, src: a.replace(/"/g, "'") });
										var i = { errMsg: "loadFontFace:ok", status: "loaded" };
										e(o) && o(i), e(r) && r(i);
									},
									ready: D,
									request: function (t) {
										var n = t.url,
											a = t.data,
											o = t.header,
											r = t.method,
											i = void 0 === r ? "GET" : r,
											s = t.dataType,
											c = void 0 === s ? "json" : s,
											u = (t.responseType, t.success),
											l = t.fail,
											f = t.complete,
											d = !1,
											p = !1,
											g = {};
										if (o) for (var v in o) p || "content-type" !== v.toLowerCase() ? (g[v] = o[v]) : ((p = !0), (g["Content-Type"] = o[v]));
										return (
											i === R && a && (n = n + (~n.indexOf("?") ? ("&" === n.substr(-1) || "?" === n.substr(-1) ? "" : "&") : "?") + V(a)),
											U.fetch(
												{ url: n, method: i, headers: g, type: "json" === c ? "json" : "text", body: i !== R ? V(a, i, g["Content-Type"]) : "" },
												function (t) {
													var n = t.status,
														a = (t.ok, t.statusText, t.data),
														o = t.headers,
														r = {};
													!n || -1 === n || d ? ((r.errMsg = "request:fail"), e(l) && l(r)) : ((r.data = a), (r.statusCode = n), (r.header = o), e(u) && u(r)),
														e(f) && f(r);
												},
											),
											{
												abort: function () {
													d = !0;
												},
											}
										);
									},
									getStorage: function (t) {
										var n = t.key,
											a = (t.data, t.success),
											o = t.fail,
											r = t.complete;
										F.getItem(n + j, function (t) {
											if ("success" === t.result) {
												var i = t.data;
												F.getItem(n, function (t) {
													if ("success" === t.result) {
														var n = t.data;
														i && n
															? ("String" !== i && (n = JSON.parse(n)), e(a) && a({ errMsg: "getStorage:ok", data: n }))
															: ((t.errMsg = "setStorage:fail"), e(o) && o(t));
													} else (t.errMsg = "setStorage:fail"), e(o) && o(t);
													e(r) && r(t);
												});
											} else (t.errMsg = "setStorage:fail"), e(o) && o(t), e(r) && r(t);
										});
									},
									setStorage: function (t) {
										var n = t.key,
											a = t.data,
											o = t.success,
											r = t.fail,
											i = t.complete,
											s = "String";
										"object" === (void 0 === a ? "undefined" : x(a)) && ((s = "Object"), (a = JSON.stringify(a))),
											F.setItem(n, a, function (t) {
												"success" === t.result
													? F.setItem(n + j, s, function (t) {
															"success" === t.result ? e(o) && o({ errMsg: "setStorage:ok" }) : ((t.errMsg = "setStorage:fail"), e(r) && r(t));
													  })
													: ((t.errMsg = "setStorage:fail"), e(r) && r(t)),
													e(i) && i(t);
											});
									},
									removeStorage: function (t) {
										var n = t.key,
											a = (t.data, t.success),
											o = t.fail,
											r = t.complete;
										F.removeItem(n, function (t) {
											"success" === t.result ? e(a) && a({ errMsg: "removeStorage:ok" }) : ((t.errMsg = "removeStorage:fail"), e(o) && o(t)), e(r) && r(t);
										}),
											F.removeItem(n + j);
									},
									clearStorage: function (e) {
										e.key, e.data, e.success, e.fail, e.complete;
									},
									getClipboardData: function (t) {
										var n = t.success,
											a = (t.fail, t.complete);
										$.getString(function (t) {
											var o = { errMsg: "getClipboardData:ok", data: t.data };
											e(n) && n(o), e(a) && a(o);
										});
									},
									setClipboardData: function (t) {
										var n = t.data,
											a = t.success,
											o = (t.fail, t.complete),
											r = { errMsg: "setClipboardData:ok" };
										$.setString(n), e(a) && a(r), e(o) && o(r);
									},
									onSubNVueMessage: c,
									getSubNVueById: d,
									getCurrentSubNVue: function () {
										return d(o.webview.currentWebview().id);
									},
									$on: function () {
										return Q(L(), "$on", [].concat(Array.prototype.slice.call(arguments)));
									},
									$off: function () {
										return Q(L(), "$off", [].concat(Array.prototype.slice.call(arguments)));
									},
									$once: function () {
										return Q(L(), "$once", [].concat(Array.prototype.slice.call(arguments)));
									},
									$emit: function () {
										return Q(L(), "$emit", [].concat(Array.prototype.slice.call(arguments)));
									},
								}),
								q = { os: { nvue: !0 } },
								K = {};
							return (
								"undefined" != typeof Proxy
									? (K = new Proxy(
											{},
											{
												get: function (e, t) {
													if ("os" === t) return { nvue: !0 };
													if ("postMessage" === t) return _;
													if ("requireNativePlugin" === t) return I;
													if ("onNavigationBarButtonTap" === t) return M;
													if ("onNavigationBarSearchInputChanged" === t) return k;
													if ("onNavigationBarSearchInputConfirmed" === t) return B;
													if ("onNavigationBarSearchInputClicked" === t) return O;
													var n = J[t];
													return n || (n = b(t)), a(t) ? r(n) : n;
												},
											},
									  ))
									: (Object.keys(q).forEach(function (e) {
											K[e] = q[e];
									  }),
									  (K.postMessage = _),
									  (K.requireNativePlugin = I),
									  (K.onNavigationBarButtonTap = M),
									  (K.onNavigationBarSearchInputChanged = k),
									  (K.onNavigationBarSearchInputConfirmed = B),
									  (K.onNavigationBarSearchInputClicked = O),
									  Object.keys({
											uploadFile: !0,
											downloadFile: !0,
											chooseImage: !0,
											previewImage: !0,
											getImageInfo: !0,
											saveImageToPhotosAlbum: !0,
											chooseVideo: !0,
											saveVideoToPhotosAlbum: !0,
											saveFile: !0,
											getSavedFileList: !0,
											getSavedFileInfo: !0,
											removeSavedFile: !0,
											openDocument: !0,
											setStorage: !0,
											getStorage: !0,
											getStorageInfo: !0,
											removeStorage: !0,
											clearStorage: !0,
											getLocation: !0,
											chooseLocation: !0,
											openLocation: !0,
											getSystemInfo: !0,
											getNetworkType: !0,
											makePhoneCall: !0,
											scanCode: !0,
											setScreenBrightness: !0,
											getScreenBrightness: !0,
											setKeepScreenOn: !0,
											vibrateLong: !0,
											vibrateShort: !0,
											addPhoneContact: !0,
											showToast: !0,
											showLoading: !0,
											hideToast: !0,
											hideLoading: !0,
											showModal: !0,
											showActionSheet: !0,
											setNavigationBarTitle: !0,
											setNavigationBarColor: !0,
											navigateTo: !0,
											redirectTo: !0,
											reLaunch: !0,
											switchTab: !0,
											navigateBack: !0,
											getProvider: !0,
											login: !0,
											getUserInfo: !0,
											share: !0,
											requestPayment: !0,
											subscribePush: !0,
											unsubscribePush: !0,
											onPush: !0,
											offPush: !0,
									  }).forEach(function (e) {
											var t = J[e];
											t || (t = b(e)), a(e) ? (K[e] = r(t)) : (K[e] = t);
									  })),
								K
							);
					  });
		var o = new WeexPlus(weex);
		t.weexPlus = o;
		var r = a(weex, o, BroadcastChannel);
		t.default = r;
	},
	function (e, t, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(4).default, Vue.prototype.__$appStyle__);
	},
	function (e, t, n) {
		"use strict";
		n.r(t);
		var a = n(0),
			o = n.n(a);
		for (var r in a)
			"default" !== r &&
				(function (e) {
					n.d(t, e, function () {
						return a[e];
					});
				})(r);
		t.default = o.a;
	},
	function (e, t, n) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
			var n = {
				onLoad: function () {
					this.initMessage();
				},
				methods: {
					initMessage: function () {
						var t = this,
							n = e.webview.currentWebview().extras || {},
							a = n.from,
							o = (n.callback, n.runtime),
							r = n.data,
							i = void 0 === r ? {} : r,
							s = n.useGlobalEvent;
						(this.__from = a),
							(this.__runtime = o),
							(this.__page = e.webview.currentWebview().id),
							(this.__useGlobalEvent = s),
							(this.data = JSON.parse(JSON.stringify(i))),
							e.key.addEventListener("backbutton", function () {
								"function" == typeof t.onClose ? t.onClose() : e.webview.currentWebview().close("auto");
							});
						var c = this,
							u = function (e) {
								var t = e.data && e.data.__message;
								t && c.__onMessageCallback && c.__onMessageCallback(t.data);
							};
						this.__useGlobalEvent ? weex.requireModule("globalEvent").addEventListener("plusMessage", u) : (new BroadcastChannel(this.__page).onmessage = u);
					},
					postMessage: function () {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							a = { __message: { __page: this.__page, data: t, keep: n } },
							o = this.__from;
						if ("v8" === this.__runtime) {
							if (this.__useGlobalEvent) e.webview.postMessageToUniNView(a, o);
							else new BroadcastChannel(o).postMessage(a);
						} else {
							var r = e.webview.getWebviewById(o);
							r && r.evalJS("__plusMessage&&__plusMessage(".concat(JSON.stringify({ data: a }), ")"));
						}
					},
					onMessage: function (e) {
						this.__onMessageCallback = e;
					},
				},
			};
			t.default = n;
		}).call(this, n(2).weexPlus);
	},
	,
	,
	function (e, t, n) {
		"use strict";
		var a = n(32),
			o = n(17),
			r = n(1);
		var i = Object(r.a)(o.default, a.b, a.c, !1, null, null, "57707442", !1, a.a, void 0);
		(function (e) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(38).default, this.options.style) : Object.assign(this.options.style, n(38).default);
		}).call(i),
			(t.default = i.exports);
	},
	,
	,
	,
	,
	,
	,
	,
	,
	function (e, t, n) {
		"use strict";
		var a = n(18),
			o = n.n(a);
		t.default = o.a;
	},
	function (e, t, n) {
		"use strict";
		(function (e) {
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
			var a,
				o,
				r = (a = n(5)) && a.__esModule ? a : { default: a };
			function i(e, t, n) {
				return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
			}
			var s = e.barcode,
				c = {
					qrCode: [s.QR, s.AZTEC, s.MAXICODE],
					barCode: [s.EAN13, s.EAN8, s.UPCA, s.UPCE, s.CODABAR, s.CODE128, s.CODE39, s.CODE93, s.ITF, s.RSS14, s.RSSEXPANDED],
					datamatrix: [s.DATAMATRIX],
					pdf417: [s.PDF417],
				},
				u =
					(i((o = {}), s.QR, "QR_CODE"),
					i(o, s.EAN13, "EAN_13"),
					i(o, s.EAN8, "EAN_8"),
					i(o, s.DATAMATRIX, "DATA_MATRIX"),
					i(o, s.UPCA, "UPC_A"),
					i(o, s.UPCE, "UPC_E"),
					i(o, s.CODABAR, "CODABAR"),
					i(o, s.CODE39, "CODE_39"),
					i(o, s.CODE93, "CODE_93"),
					i(o, s.CODE128, "CODE_128"),
					i(o, s.ITF, "CODE_25"),
					i(o, s.PDF417, "PDF_417"),
					i(o, s.AZTEC, "AZTEC"),
					i(o, s.RSS14, "RSS_14"),
					i(o, s.RSSEXPANDED, "RSSEXPANDED"),
					o),
				l = {
					mixins: [r.default],
					data: {
						filters: [0, 2, 1],
						backgroud: "#000000",
						frameColor: "#118ce9",
						scanbarColor: "#118ce9",
						enabledFlash: !1,
						flashImage0:
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABjklEQVRoQ+1ZbVHEQAx9TwE4ABTcOQAknANQAKcAUAAOAAXgAHAACsDCKQiTmbYDzJZtNt2bFrJ/m6+Xl2yyU2LmhzOPH/8PgIjcADirxNyapNoffMwMiMgzgMPBHmyCLySPLCoBwJKtAbJbYaBmD1yRvBwAtBMxl5DF+DZkiwCIyBLAzsgBbki+Wm2WAlCaL6zOMvKnJO+sNksB7ALQbO1ZHfbIv5FUVs2nCIB6EZETALdmj2mFY5I6X8ynGEADQllYmL1+VzBfnV/VvQB0aj45ARyQ/Ci14QLQsOBZLe5JaikWnzEA7AN4L4hgA2Dpyb76dANwsOCq/TZhASAYKGie0a7R1lDPI0ebtF0NUi+4yfdAtxr3PEMnD6BbD0QkNfACQO05EAwMuaBqDrIVycdmTpwDuP4R0OR7QFftVRP0g+49cwOQq4DJMxAAchmofY3m/EcJBQOZbTRKKJeBKKEoIePvpFRJ1VzmciUccyCa+C81cerBkuuB7sGTE/zt+yhN7AnAqxsAvBn06n8CkyPwMZKwm+UAAAAASUVORK5CYII=",
						flashImage1:
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAA3kvI3lfY2k/VAl+43k/U3k/Q4k/M3kvI3k/M4k/Q4lPU2lPU2k/Vdq843k/WWSpNKAAAAD3RSTlMAwD+QINCAcPBgUDDgoBAE044kAAAAdklEQVQ4y2OgOrD/DwffUSTkERIfyZXAtOMbca7iVoKDDSgSbAijJqBI8J2HiX9FM2s+TOITmgQrTEIATYIJJuEA5mJ68S+Gg/0hEi0YEoxQK2gs0WyPQyKBGYeEAhPtJRaw45AIccXpwVEJekuwQyQWMFAfAACeDBJY9aXa3QAAAABJRU5ErkJggg==",
					},
					onLoad: function () {
						var e = this,
							t = this.data.scanType,
							n = [];
						Array.isArray(t) &&
							t.length &&
							t.forEach(function (e) {
								var t = c[e];
								t && (n = n.concat(t));
							}),
							n.length || (n = n.concat(c.qrCode).concat(c.barCode).concat(c.datamatrix).concat(c.pdf417)),
							(this.filters = n),
							this.onMessage(function (t) {
								e.gallery();
							});
					},
					onUnload: function () {
						this.cancel();
					},
					methods: {
						start: function () {
							this.$refs.barcode.start({ conserve: !0, filename: "_doc/barcode/" });
						},
						scan: function (t) {
							var n = this;
							s.scan(
								t,
								function (e, t, a) {
									n.scanSuccess(e, t, a);
								},
								function () {
									e.nativeUI.toast("识别失败");
								},
								this.filters,
							);
						},
						cancel: function () {
							this.$refs.barcode.cancel();
						},
						gallery: function () {
							var t = this;
							e.gallery.pick(
								function (e) {
									t.scan(e);
								},
								function (t) {
									12 !== t.code && e.nativeUI.toast("选择失败");
								},
								{ multiple: !1, system: !1 },
							);
						},
						onmarked: function (e) {
							var t = e.detail;
							this.scanSuccess(t.code, t.message, t.file);
						},
						scanSuccess: function (e, t, n) {
							this.postMessage({ event: "marked", detail: { scanType: u[e], result: t, charSet: "utf8", path: n || "" } });
						},
						onerror: function (e) {
							this.postMessage({ event: "fail", message: JSON.stringify(e) });
						},
						setFlash: function () {
							(this.enabledFlash = !this.enabledFlash), this.$refs.barcode.setFlash(this.enabledFlash);
						},
					},
				};
			t.default = l;
		}).call(this, n(2).weexPlus);
	},
	function (e, t) {
		e.exports = {
			content: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#000000" },
			barcode: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0, zIndex: 1 },
			"set-flash": { alignItems: "center", justifyContent: "center", transform: "translateY(80px)", zIndex: 2 },
			"image-flash": { width: "26", height: "26", marginBottom: "2" },
			"image-flash-text": { fontSize: "10", color: "#FFFFFF" },
		};
	},
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	function (e, t, n) {
		"use strict";
		var a = function () {
				var e = this,
					t = e.$createElement,
					n = e._self._c || t;
				return n("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, enableBackToTop: !0, bubble: "true" } }, [
					n(
						"view",
						{ staticClass: ["content"] },
						[
							n("barcode", {
								ref: "barcode",
								staticClass: ["barcode"],
								attrs: { autostart: "true", backgroud: e.backgroud, frameColor: e.frameColor, scanbarColor: e.scanbarColor, filters: e.filters },
								on: { marked: e.onmarked, error: e.onerror },
							}),
							n(
								"view",
								{ staticClass: ["set-flash"], on: { click: e.setFlash } },
								[
									n("u-image", { staticClass: ["image-flash"], attrs: { src: e.enabledFlash ? e.flashImage1 : e.flashImage0, resize: "stretch" } }),
									n("u-text", { staticClass: ["image-flash-text"] }, [e._v(e._s(e.enabledFlash ? "轻触关闭" : "轻触照亮"))]),
								],
								1,
							),
						],
						1,
					),
				]);
			},
			o = [];
		n.d(t, "b", function () {
			return a;
		}),
			n.d(t, "c", function () {
				return o;
			}),
			n.d(t, "a", function () {});
	},
	,
	,
	,
	,
	,
	function (e, t, n) {
		"use strict";
		n.r(t);
		var a = n(19),
			o = n.n(a);
		for (var r in a)
			"default" !== r &&
				(function (e) {
					n.d(t, e, function () {
						return a[e];
					});
				})(r);
		t.default = o.a;
	},
	,
	,
	,
	,
	function (e, t, n) {
		"use strict";
		n.r(t);
		n(3);
		var a = n(8);
		(a.default.mpType = "page"), (a.default.route = "template/__uniappscan"), (a.default.el = "#root"), new Vue(a.default);
	},
]);
