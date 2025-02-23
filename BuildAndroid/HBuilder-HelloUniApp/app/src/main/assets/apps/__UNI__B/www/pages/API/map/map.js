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
		n((n.s = 651));
})({
	0: function (t, e, n) {
		"use strict";
		function o(t, e, n, o, i, a, l, r, s, c) {
			var u,
				d = "function" == typeof t ? t.options : t;
			if (s) {
				d.components || (d.components = {});
				var p = Object.prototype.hasOwnProperty;
				for (var f in s) p.call(s, f) && !p.call(d.components, f) && (d.components[f] = s[f]);
			}
			if (
				(c &&
					((c.beforeCreate || (c.beforeCreate = [])).unshift(function () {
						this[c.__module] = this;
					}),
					(d.mixins || (d.mixins = [])).push(c)),
				e && ((d.render = e), (d.staticRenderFns = n), (d._compiled = !0)),
				o && (d.functional = !0),
				a && (d._scopeId = "data-v-" + a),
				l
					? ((u = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								i && i.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(l);
					  }),
					  (d._ssrRegister = u))
					: i &&
					  (u = r
							? function () {
									i.call(this, this.$root.$options.shadowRoot);
							  }
							: i),
				u)
			)
				if (d.functional) {
					d._injectStyles = u;
					var g = d.render;
					d.render = function (t, e) {
						return u.call(e), g(t, e);
					};
				} else {
					var h = d.beforeCreate;
					d.beforeCreate = h ? [].concat(h, u) : [u];
				}
			return { exports: t, options: d };
		}
		n.d(e, "a", function () {
			return o;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	14: function (t, e, n) {
		"use strict";
		function o(t) {
			var e = Object.prototype.toString.call(t);
			return e.substring(8, e.length - 1);
		}
		function i() {
			return "string" == typeof __channelId__ && __channelId__;
		}
		function a(t, e) {
			switch (o(e)) {
				case "Function":
					return "function() { [native code] }";
				default:
					return e;
			}
		}
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.log = function (t) {
				for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
				console[t].apply(console, n);
			}),
			(e.default = function () {
				for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				var l = e.shift();
				if (i()) return e.push(e.pop().replace("at ", "uni-app:///")), console[l].apply(console, e);
				var r = e.map(function (t) {
						var e = Object.prototype.toString.call(t).toLowerCase();
						if ("[object object]" === e || "[object array]" === e)
							try {
								t = "---BEGIN:JSON---" + JSON.stringify(t, a) + "---END:JSON---";
							} catch (n) {
								t = e;
							}
						else if (null === t) t = "---NULL---";
						else if (void 0 === t) t = "---UNDEFINED---";
						else {
							var n = o(t).toUpperCase();
							t = "NUMBER" === n || "BOOLEAN" === n ? "---BEGIN:" + n + "---" + t + "---END:" + n + "---" : String(t);
						}
						return t;
					}),
					s = "";
				if (r.length > 1) {
					var c = r.pop();
					(s = r.join("---COMMA---")), 0 === c.indexOf(" at ") ? (s += c) : (s += "---COMMA---" + c);
				} else s = r[0];
				console[l](s);
			});
	},
	154: function (t, e, n) {
		"use strict";
		var o = n(155),
			i = n.n(o);
		e.default = i.a;
	},
	155: function (t, e, n) {
		(function (e) {
			function n(t, e, n) {
				return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
			}
			var o = [
					{
						id: 0,
						latitude: 39.989631,
						longitude: 116.481018,
						title: "\u65b9\u6052\u56fd\u9645 \u961c\u901a\u4e1c\u5927\u88576\u53f7",
						zIndex: "1",
						rotate: 0,
						width: 20,
						height: 20,
						anchor: { x: 0.5, y: 1 },
						callout: {
							content: "\u65b9\u6052\u56fd\u9645 \u961c\u901a\u4e1c\u5927\u88576\u53f7",
							color: "#00BFFF",
							fontSize: 10,
							borderRadius: 4,
							borderWidth: 1,
							borderColor: "#333300",
							bgColor: "#CCFF99",
							padding: "5",
							display: "ALWAYS",
						},
					},
					{
						id: 1,
						latitude: 39.908692,
						longitude: 116.397477,
						title: "\u5929\u5b89\u95e8",
						zIndex: "1",
						iconPath: "/static/location.png",
						width: 40,
						height: 40,
						anchor: { x: 0.5, y: 1 },
						callout: {
							content: "\u9996\u90fd\u5317\u4eac\n\u5929\u5b89\u95e8",
							color: "#00BFFF",
							fontSize: 12,
							borderRadius: 2,
							borderWidth: 0,
							borderColor: "#333300",
							bgColor: "#CCFF11",
							padding: "1",
							display: "ALWAYS",
						},
					},
				],
				i = [
					{
						points: [
							{ latitude: 39.925539, longitude: 116.279037 },
							{ latitude: 39.925539, longitude: 116.520285 },
						],
						color: "#FFCCFF",
						width: 7,
						dottedLine: !0,
						arrowLine: !0,
						borderColor: "#000000",
						borderWidth: 2,
					},
					{
						points: [
							{ latitude: 39.938698, longitude: 116.275177 },
							{ latitude: 39.966069, longitude: 116.289253 },
							{ latitude: 39.944226, longitude: 116.306076 },
							{ latitude: 39.966069, longitude: 116.322899 },
							{ latitude: 39.938698, longitude: 116.336975 },
						],
						color: "#CCFFFF",
						width: 5,
						dottedLine: !0,
						arrowLine: !0,
						borderColor: "#CC0000",
						borderWidth: 3,
					},
				],
				a = [
					{
						points: [
							{ latitude: 39.781892, longitude: 116.293413 },
							{ latitude: 39.7876, longitude: 116.391842 },
							{ latitude: 39.733187, longitude: 116.417932 },
							{ latitude: 39.704653, longitude: 116.338255 },
						],
						fillColor: "#FFCCFF",
						strokeWidth: 3,
						strokeColor: "#CC99CC",
						zIndex: 11,
					},
					{
						points: [
							{ latitude: 39.8876, longitude: 116.518932 },
							{ latitude: 39.781892, longitude: 116.518932 },
							{ latitude: 39.781892, longitude: 116.428932 },
							{ latitude: 39.8876, longitude: 116.428932 },
						],
						fillColor: "#CCFFFF",
						strokeWidth: 5,
						strokeColor: "#CC0000",
						zIndex: 3,
					},
				],
				l = [
					{ latitude: 39.996441, longitude: 116.411146, radius: 15e3, strokeWidth: 5, color: "#CCFFFF", fillColor: "#CC0000" },
					{ latitude: 40.096441, longitude: 116.511146, radius: 12e3, strokeWidth: 3, color: "#CCFFFF", fillColor: "#FFCCFF" },
					{ latitude: 39.896441, longitude: 116.311146, radius: 9e3, strokeWidth: 1, color: "#CCFFFF", fillColor: "#CC0000" },
				],
				r = [
					{ latitude: 39.989631, longitude: 116.481018 },
					{ latitude: 39.908692, longitude: 116.397477 },
				];
			t.exports = {
				data: function () {
					var t;
					return (
						n(
							(t = {
								location: { longitude: 116.397477, latitude: 39.908692 },
								controls: [{ id: 1, position: { left: 5, top: 180, width: 30, height: 30 }, iconPath: "/static/logo.png", clickable: !0 }],
								showLocation: !1,
								scale: 13,
								showCompass: !0,
								enable3D: !0,
								enableOverlooking: !0,
							}),
							"enableOverlooking",
							!0,
						),
						n(t, "enableZoom", !0),
						n(t, "enableScroll", !0),
						n(t, "enableRotate", !0),
						n(t, "enableSatellite", !1),
						n(t, "enableTraffic", !1),
						n(t, "polyline", []),
						n(t, "markers", []),
						n(t, "polygons", []),
						n(t, "circles", []),
						n(t, "includePoints", []),
						n(t, "rotate", 0),
						n(t, "skew", 0),
						t
					);
				},
				onLoad: function () {},
				onReady: function () {
					this.map = uni.createMapContext("map1", this);
				},
				methods: {
					changeScale: function () {
						this.scale = 9 == this.scale ? 15 : 9;
					},
					changeRotate: function () {
						this.rotate = 90 == this.rotate ? 0 : 90;
					},
					changeSkew: function () {
						this.skew = 30 == this.skew ? 0 : 30;
					},
					enableThreeD: function (t) {
						this.enable3D = t.detail.value;
					},
					changeShowCompass: function (t) {
						this.showCompass = t.detail.value;
					},
					changeEnableOverlooking: function (t) {
						this.enableOverlooking = t.detail.value;
					},
					changeEnableZoom: function (t) {
						this.enableZoom = t.detail.value;
					},
					changeEnableScroll: function (t) {
						this.enableScroll = t.detail.value;
					},
					changeEnableRotate: function (t) {
						this.enableRotate = t.detail.value;
					},
					changeEnableSatellite: function (t) {
						this.enableSatellite = t.detail.value;
					},
					changeEnableTraffic: function (t) {
						this.enableTraffic = t.detail.value;
					},
					addMarkers: function () {
						this.markers = o;
					},
					addPolyline: function () {
						this.polyline = i;
					},
					addPolygons: function () {
						this.polygons = a;
					},
					addCircles: function () {
						this.circles = l;
					},
					includePoint: function () {
						this.includePoints = r;
					},
					handleGetCenterLocation: function () {
						this.map.getCenterLocation({
							success: function (t) {
								e("log", JSON.stringify(t), " at pages/API/map/map.nvue:332"), uni.showModal({ content: JSON.stringify(t) });
							},
						});
					},
					handleGetRegion: function () {
						this.map.getRegion({
							success: function (t) {
								e("log", JSON.stringify(t), " at pages/API/map/map.nvue:342"), uni.showModal({ content: JSON.stringify(t) });
							},
						});
					},
					handleTranslateMarker: function () {
						this.map.translateMarker({ markerId: 1, destination: { latitude: 39.989631, longitude: 116.481018 }, duration: 2e3 }, function (t) {
							e("log", JSON.stringify(t), " at pages/API/map/map.nvue:358"), uni.showModal({ content: JSON.stringify(t) });
						});
					},
					maptap: function (t) {
						uni.showModal({ content: JSON.stringify(t) });
					},
					onmarkertap: function (t) {
						uni.showModal({ content: JSON.stringify(t) });
					},
					oncontroltap: function (t) {
						uni.showModal({ content: JSON.stringify(t) });
					},
					oncallouttap: function (t) {
						uni.showModal({ content: JSON.stringify(t) });
					},
					onupdated: function (t) {
						e("log", JSON.stringify(t), " at pages/API/map/map.nvue:385");
					},
					onregionchange: function (t) {
						e("log", JSON.stringify(t), " at pages/API/map/map.nvue:388");
					},
					onpoitap: function (t) {
						uni.showModal({ content: JSON.stringify(t) });
					},
				},
			};
		}).call(this, n(14).default);
	},
	156: function (t, e) {
		t.exports = {
			".content": { "": { flex: [1, 0, 0, 0] } },
			".map": { "": { width: ["750rpx", 0, 0, 1], height: ["250", 0, 0, 1], backgroundColor: ["#f0f0f0", 0, 0, 1] } },
			".scrollview": {
				"": { flex: [1, 0, 0, 2], paddingTop: ["10", 0, 0, 2], paddingRight: ["10", 0, 0, 2], paddingBottom: ["10", 0, 0, 2], paddingLeft: ["10", 0, 0, 2] },
			},
			".list-item": {
				"": {
					flexDirection: ["row", 0, 0, 3],
					flexWrap: ["nowrap", 0, 0, 3],
					alignItems: ["center", 0, 0, 3],
					paddingTop: ["5", 0, 0, 3],
					paddingRight: ["0", 0, 0, 3],
					paddingBottom: ["5", 0, 0, 3],
					paddingLeft: ["0", 0, 0, 3],
				},
			},
			".list-text": { "": { flex: [1, 0, 0, 4] } },
			".button": { "": { marginTop: ["5", 0, 0, 5], marginBottom: ["5", 0, 0, 5] } },
			"@VERSION": 2,
		};
	},
	456: function (t, e, n) {
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
				return n("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					n(
						"view",
						{ staticClass: ["content"] },
						[
							n("map", {
								ref: "map1",
								staticClass: ["map"],
								attrs: {
									id: "map1",
									controls: t.controls,
									scale: t.scale,
									longitude: t.location.longitude,
									latitude: t.location.latitude,
									showLocation: t.showLocation,
									enable3D: t.enable3D,
									rotate: t.rotate,
									skew: t.skew,
									showCompass: t.showCompass,
									enableOverlooking: t.enableOverlooking,
									enableZoom: t.enableZoom,
									enableScroll: t.enableScroll,
									enableRotate: t.enableRotate,
									enableSatellite: t.enableSatellite,
									enableTraffic: t.enableTraffic,
									markers: t.markers,
									polyline: t.polyline,
									circles: t.circles,
									polygons: t.polygons,
									includePoints: t.includePoints,
								},
								on: {
									tap: t.maptap,
									controltap: t.oncontroltap,
									markertap: t.onmarkertap,
									callouttap: t.oncallouttap,
									poitap: t.onpoitap,
									updated: t.onupdated,
									regionchange: t.onregionchange,
								},
							}),
							n(
								"scroll-view",
								{ staticClass: ["scrollview"], attrs: { scrollY: "true" } },
								[
									n("button", { staticClass: ["button"], on: { click: t.changeScale } }, [t._v("changeScale")]),
									n("button", { staticClass: ["button"], on: { click: t.changeRotate } }, [t._v("changeRotate")]),
									n("button", { staticClass: ["button"], on: { click: t.changeSkew } }, [t._v("skew")]),
									n("button", { staticClass: ["button"], on: { click: t.addMarkers } }, [t._v("addMarkers")]),
									n("button", { staticClass: ["button"], on: { click: t.addPolyline } }, [t._v("addPolyline")]),
									n("button", { staticClass: ["button"], on: { click: t.addPolygons } }, [t._v("addPolygons")]),
									n("button", { staticClass: ["button"], on: { click: t.addCircles } }, [t._v("addCircles")]),
									n("button", { staticClass: ["button"], on: { click: t.includePoint } }, [t._v("includePoints")]),
									n("button", { staticClass: ["button"], on: { click: t.handleGetCenterLocation } }, [t._v("getCenterLocation")]),
									n("button", { staticClass: ["button"], on: { click: t.handleGetRegion } }, [t._v("getRegion")]),
									n("button", { staticClass: ["button"], on: { click: t.handleTranslateMarker } }, [t._v("translateMarker")]),
								],
								1,
							),
						],
						1,
					),
				]);
			},
			i = [];
	},
	550: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(156),
			i = n.n(o);
		for (var a in o)
			"default" !== a &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(a);
		e.default = i.a;
	},
	6: function (t, e, n) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(n(7).default, Vue.prototype.__$appStyle__);
	},
	651: function (t, e, n) {
		"use strict";
		n.r(e);
		n(6);
		var o = n(74);
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
			(o.default.route = "pages/API/map/map"),
			(o.default.el = "#root"),
			new Vue(o.default);
	},
	7: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(1),
			i = n.n(o);
		for (var a in o)
			"default" !== a &&
				(function (t) {
					n.d(e, t, function () {
						return o[t];
					});
				})(a);
		e.default = i.a;
	},
	74: function (t, e, n) {
		"use strict";
		var o = n(456),
			i = n(154),
			a = n(0);
		var l = Object(a.a)(i.default, o.b, o.c, !1, null, null, "e6aa9216", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(550).default, this.options.style) : Object.assign(this.options.style, n(550).default);
		}).call(l),
			(e.default = l.exports);
	},
});
