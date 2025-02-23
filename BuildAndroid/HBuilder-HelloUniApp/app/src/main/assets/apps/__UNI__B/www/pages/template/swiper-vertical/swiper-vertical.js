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
		i((i.s = 750));
})({
	0: function (t, e, i) {
		"use strict";
		function n(t, e, i, n, o, r, s, a, u, l) {
			var d,
				c = "function" == typeof t ? t.options : t;
			if (u) {
				c.components || (c.components = {});
				var p = Object.prototype.hasOwnProperty;
				for (var f in u) p.call(u, f) && !p.call(c.components, f) && (c.components[f] = u[f]);
			}
			if (
				(l &&
					((l.beforeCreate || (l.beforeCreate = [])).unshift(function () {
						this[l.__module] = this;
					}),
					(c.mixins || (c.mixins = [])).push(l)),
				e && ((c.render = e), (c.staticRenderFns = i), (c._compiled = !0)),
				n && (c.functional = !0),
				r && (c._scopeId = "data-v-" + r),
				s
					? ((d = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								o && o.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(s);
					  }),
					  (c._ssrRegister = d))
					: o &&
					  (d = a
							? function () {
									o.call(this, this.$root.$options.shadowRoot);
							  }
							: o),
				d)
			)
				if (c.functional) {
					c._injectStyles = d;
					var h = c.render;
					c.render = function (t, e) {
						return d.call(e), h(t, e);
					};
				} else {
					var v = c.beforeCreate;
					c.beforeCreate = v ? [].concat(v, d) : [d];
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
	120: function (t, e, i) {
		"use strict";
		var n = i(482),
			o = i(420),
			r = i(0);
		var s = Object(r.a)(o.default, n.b, n.c, !1, null, null, "558ed585", !1, n.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(i(637).default, this.options.style) : Object.assign(this.options.style, i(637).default);
		}).call(s),
			(e.default = s.exports);
	},
	14: function (t, e, i) {
		"use strict";
		function n(t) {
			var e = Object.prototype.toString.call(t);
			return e.substring(8, e.length - 1);
		}
		function o() {
			return "string" == typeof __channelId__ && __channelId__;
		}
		function r(t, e) {
			switch (n(e)) {
				case "Function":
					return "function() { [native code] }";
				default:
					return e;
			}
		}
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.log = function (t) {
				for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
				console[t].apply(console, i);
			}),
			(e.default = function () {
				for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
				var s = e.shift();
				if (o()) return e.push(e.pop().replace("at ", "uni-app:///")), console[s].apply(console, e);
				var a = e.map(function (t) {
						var e = Object.prototype.toString.call(t).toLowerCase();
						if ("[object object]" === e || "[object array]" === e)
							try {
								t = "---BEGIN:JSON---" + JSON.stringify(t, r) + "---END:JSON---";
							} catch (i) {
								t = e;
							}
						else if (null === t) t = "---NULL---";
						else if (void 0 === t) t = "---UNDEFINED---";
						else {
							var i = n(t).toUpperCase();
							t = "NUMBER" === i || "BOOLEAN" === i ? "---BEGIN:" + i + "---" + t + "---END:" + i + "---" : String(t);
						}
						return t;
					}),
					u = "";
				if (a.length > 1) {
					var l = a.pop();
					(u = a.join("---COMMA---")), 0 === l.indexOf(" at ") ? (u += l) : (u += "---COMMA---" + l);
				} else u = a[0];
				console[s](u);
			});
	},
	420: function (t, e, i) {
		"use strict";
		var n = i(421),
			o = i.n(n);
		e.default = o.a;
	},
	421: function (t, e, i) {
		"use strict";
		(function (t) {
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
			var i = [
					{ src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4" },
					{ src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4" },
					{ src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4" },
					{ src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-01.mp4" },
					{ src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-02.mp4" },
					{ src: "https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hellouniapp/hello-nvue-swiper-vertical-03.mp4" },
				],
				n = {
					data: function () {
						return {
							circular: !0,
							videoList: [
								{ id: "video0", src: "", img: "" },
								{ id: "video1", src: "", img: "" },
								{ id: "video2", src: "", img: "" },
							],
							videoDataList: [],
						};
					},
					onLoad: function (t) {},
					onReady: function () {
						this.init(), this.getData();
					},
					methods: {
						init: function () {
							(this._videoIndex = 0), (this._videoContextList = []);
							for (var t = 0; t < this.videoList.length; t++) this._videoContextList.push(uni.createVideoContext("video" + t, this));
							this._videoDataIndex = 0;
						},
						getData: function (t) {
							var e = this;
							(this.videoDataList = i),
								setTimeout(function () {
									e.updateVideo(!0);
								}, 200);
						},
						onSwiperChange: function (t) {
							var e = this,
								i = t.detail.current;
							if (i !== this._videoIndex) {
								var n = !1;
								0 === i && this._videoIndex === this.videoList.length - 1
									? (n = !0)
									: i === this.videoList.length - 1 && 0 === this._videoIndex
									? (n = !1)
									: i > this._videoIndex && (n = !0),
									n ? this._videoDataIndex++ : this._videoDataIndex--,
									this._videoDataIndex < 0
										? (this._videoDataIndex = this.videoDataList.length - 1)
										: this._videoDataIndex >= this.videoDataList.length && (this._videoDataIndex = 0),
									(this.circular = 0 != this._videoDataIndex),
									this._videoIndex >= 0 && (this._videoContextList[this._videoIndex].pause(), this._videoContextList[this._videoIndex].seek(0)),
									(this._videoIndex = i),
									setTimeout(function () {
										e.updateVideo(n);
									}, 200);
							}
						},
						getNextIndex: function (t) {
							var e = this._videoIndex + (t ? 1 : -1);
							return e < 0 ? this.videoList.length - 1 : e >= this.videoList.length ? 0 : e;
						},
						getNextDataIndex: function (t) {
							var e = this._videoDataIndex + (t ? 1 : -1);
							return e < 0 ? this.videoDataList.length - 1 : e >= this.videoDataList.length ? 0 : e;
						},
						updateVideo: function (e) {
							var i = this;
							this.$set(this.videoList[this._videoIndex], "src", this.videoDataList[this._videoDataIndex].src),
								this.$set(this.videoList[this.getNextIndex(e)], "src", this.videoDataList[this.getNextDataIndex(e)].src),
								setTimeout(function () {
									i._videoContextList[i._videoIndex].play();
								}, 200),
								t(
									"log",
									"v:" + this._videoIndex + " d:" + this._videoDataIndex + "; next v:" + this.getNextIndex(e) + " next d:" + this.getNextDataIndex(e),
									" at pages/template/swiper-vertical/swiper-vertical.nvue:139",
								);
						},
					},
				};
			e.default = n;
		}).call(this, i(14).default);
	},
	422: function (t, e) {
		t.exports = {
			".page": { "": { flex: [1, 0, 0, 0] } },
			".swiper": { "": { flex: [1, 0, 0, 1], backgroundColor: ["#007AFF", 0, 0, 1] } },
			".swiper-item": { "": { flex: [1, 0, 0, 2] } },
			".video": { "": { flex: [1, 0, 0, 3] } },
			"@VERSION": 2,
		};
	},
	482: function (t, e, i) {
		"use strict";
		i.d(e, "b", function () {
			return n;
		}),
			i.d(e, "c", function () {
				return o;
			}),
			i.d(e, "a", function () {});
		var n = function () {
				var t = this.$createElement,
					e = this._self._c || t;
				return e("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					e(
						"view",
						{ staticClass: ["page"] },
						[
							e(
								"swiper",
								{ staticClass: ["swiper"], attrs: { circular: this.circular, vertical: !0 }, on: { change: this.onSwiperChange } },
								this._l(this.videoList, function (t) {
									return e(
										"swiper-item",
										{ key: t.id },
										[
											e("u-video", {
												ref: t.id,
												refInFor: !0,
												staticClass: ["video"],
												attrs: { id: t.id, src: t.src, controls: !1, loop: !0, showCenterPlayBtn: !1 },
											}),
										],
										1,
									);
								}),
								1,
							),
						],
						1,
					),
				]);
			},
			o = [];
	},
	6: function (t, e, i) {
		(Vue.prototype.__$appStyle__ = {}), Vue.prototype.__merge_style && Vue.prototype.__merge_style(i(7).default, Vue.prototype.__$appStyle__);
	},
	637: function (t, e, i) {
		"use strict";
		i.r(e);
		var n = i(422),
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
	750: function (t, e, i) {
		"use strict";
		i.r(e);
		i(6);
		var n = i(120);
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
			(n.default.route = "pages/template/swiper-vertical/swiper-vertical"),
			(n.default.el = "#root"),
			new Vue(n.default);
	},
});
