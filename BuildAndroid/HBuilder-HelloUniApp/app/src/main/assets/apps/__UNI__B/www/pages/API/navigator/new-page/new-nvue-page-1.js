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
		n((n.s = 653));
})({
	0: function (t, e, n) {
		"use strict";
		function o(t, e, n, o, r, i, a, s, c, u) {
			var p,
				f = "function" == typeof t ? t.options : t;
			if (c) {
				f.components || (f.components = {});
				var l = Object.prototype.hasOwnProperty;
				for (var d in c) l.call(c, d) && !l.call(f.components, d) && (f.components[d] = c[d]);
			}
			if (
				(u &&
					((u.beforeCreate || (u.beforeCreate = [])).unshift(function () {
						this[u.__module] = this;
					}),
					(f.mixins || (f.mixins = [])).push(u)),
				e && ((f.render = e), (f.staticRenderFns = n), (f._compiled = !0)),
				o && (f.functional = !0),
				i && (f._scopeId = "data-v-" + i),
				a
					? ((p = function (t) {
							(t = t || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
								"undefined" == typeof __VUE_SSR_CONTEXT__ ||
								(t = __VUE_SSR_CONTEXT__),
								r && r.call(this, t),
								t && t._registeredComponents && t._registeredComponents.add(a);
					  }),
					  (f._ssrRegister = p))
					: r &&
					  (p = s
							? function () {
									r.call(this, this.$root.$options.shadowRoot);
							  }
							: r),
				p)
			)
				if (f.functional) {
					f._injectStyles = p;
					var h = f.render;
					f.render = function (t, e) {
						return p.call(e), h(t, e);
					};
				} else {
					var _ = f.beforeCreate;
					f.beforeCreate = _ ? [].concat(_, p) : [p];
				}
			return { exports: t, options: f };
		}
		n.d(e, "a", function () {
			return o;
		});
	},
	1: function (t, e) {
		t.exports = { "@VERSION": 2 };
	},
	160: function (t, e, n) {
		"use strict";
		var o = n(161),
			r = n.n(o);
		e.default = r.a;
	},
	161: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
		var o = n(45);
		function r(t, e) {
			var n = Object.keys(t);
			if (Object.getOwnPropertySymbols) {
				var o = Object.getOwnPropertySymbols(t);
				e &&
					(o = o.filter(function (e) {
						return Object.getOwnPropertyDescriptor(t, e).enumerable;
					})),
					n.push.apply(n, o);
			}
			return n;
		}
		function i(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = null != arguments[e] ? arguments[e] : {};
				e % 2
					? r(Object(n), !0).forEach(function (e) {
							a(t, e, n[e]);
					  })
					: Object.getOwnPropertyDescriptors
					? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
					: r(Object(n)).forEach(function (e) {
							Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
					  });
			}
			return t;
		}
		function a(t, e, n) {
			return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
		}
		var s = {
			data: function () {
				return {};
			},
			computed: i(i({}, (0, o.mapState)(["colorIndex", "colorList"])), (0, o.mapGetters)(["currentColor"])),
			methods: i(
				i({}, (0, o.mapMutations)(["setColorIndex"])),
				{},
				{
					navToNvue: function () {
						uni.navigateTo({ url: "new-nvue-page-2" });
					},
					navToVue: function () {
						uni.navigateTo({ url: "new-vue-page-2" });
					},
				},
			),
		};
		e.default = s;
	},
	162: function (t, e) {
		t.exports = {
			".new-page__text": { "": { fontSize: ["14", 0, 0, 0], color: ["#666666", 0, 0, 0] } },
			".root": { "": { flexDirection: ["column", 0, 0, 1] } },
			".page-body": {
				"": {
					flex: [1, 0, 0, 2],
					flexDirection: ["column", 0, 0, 2],
					justifyContent: ["flex-start", 0, 0, 2],
					alignItems: ["center", 0, 0, 2],
					paddingTop: ["50", 0, 0, 2],
				},
			},
			".new-page__text-box": {
				"": { paddingTop: ["20", 0, 0, 3], paddingRight: ["20", 0, 0, 3], paddingBottom: ["20", 0, 0, 3], paddingLeft: ["20", 0, 0, 3] },
			},
			".new-page__color": { "": { width: ["200", 0, 0, 4], height: ["100", 0, 0, 4], justifyContent: ["center", 0, 0, 4], alignItems: ["center", 0, 0, 4] } },
			".new-page__color-text": { "": { fontSize: ["14", 0, 0, 5], color: ["#FFFFFF", 0, 0, 5], lineHeight: ["30", 0, 0, 5], textAlign: ["center", 0, 0, 5] } },
			".new-page__button-item": { "": { marginTop: ["15", 0, 0, 6], width: ["300", 0, 0, 6] } },
			"@VERSION": 2,
		};
	},
	45: function (t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.install = y),
			(e.mapState = e.mapMutations = e.mapGetters = e.mapActions = e.createNamespacedHelpers = e.Store = e.default = void 0);
		var o = ("undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;
		function r(t, e) {
			Object.keys(t).forEach(function (n) {
				return e(t[n], n);
			});
		}
		function i(t) {
			return null !== t && "object" == typeof t;
		}
		var a = function (t, e) {
				(this.runtime = e), (this._children = Object.create(null)), (this._rawModule = t);
				var n = t.state;
				this.state = ("function" == typeof n ? n() : n) || {};
			},
			s = { namespaced: { configurable: !0 } };
		(s.namespaced.get = function () {
			return !!this._rawModule.namespaced;
		}),
			(a.prototype.addChild = function (t, e) {
				this._children[t] = e;
			}),
			(a.prototype.removeChild = function (t) {
				delete this._children[t];
			}),
			(a.prototype.getChild = function (t) {
				return this._children[t];
			}),
			(a.prototype.hasChild = function (t) {
				return t in this._children;
			}),
			(a.prototype.update = function (t) {
				(this._rawModule.namespaced = t.namespaced),
					t.actions && (this._rawModule.actions = t.actions),
					t.mutations && (this._rawModule.mutations = t.mutations),
					t.getters && (this._rawModule.getters = t.getters);
			}),
			(a.prototype.forEachChild = function (t) {
				r(this._children, t);
			}),
			(a.prototype.forEachGetter = function (t) {
				this._rawModule.getters && r(this._rawModule.getters, t);
			}),
			(a.prototype.forEachAction = function (t) {
				this._rawModule.actions && r(this._rawModule.actions, t);
			}),
			(a.prototype.forEachMutation = function (t) {
				this._rawModule.mutations && r(this._rawModule.mutations, t);
			}),
			Object.defineProperties(a.prototype, s);
		var c = function (t) {
			this.register([], t, !1);
		};
		(c.prototype.get = function (t) {
			return t.reduce(function (t, e) {
				return t.getChild(e);
			}, this.root);
		}),
			(c.prototype.getNamespace = function (t) {
				var e = this.root;
				return t.reduce(function (t, n) {
					return t + ((e = e.getChild(n)).namespaced ? n + "/" : "");
				}, "");
			}),
			(c.prototype.update = function (t) {
				!(function t(e, n, o) {
					0;
					if ((n.update(o), o.modules))
						for (var r in o.modules) {
							if (!n.getChild(r)) return void 0;
							t(e.concat(r), n.getChild(r), o.modules[r]);
						}
				})([], this.root, t);
			}),
			(c.prototype.register = function (t, e, n) {
				var o = this;
				void 0 === n && (n = !0);
				var i = new a(e, n);
				0 === t.length ? (this.root = i) : this.get(t.slice(0, -1)).addChild(t[t.length - 1], i);
				e.modules &&
					r(e.modules, function (e, r) {
						o.register(t.concat(r), e, n);
					});
			}),
			(c.prototype.unregister = function (t) {
				var e = this.get(t.slice(0, -1)),
					n = t[t.length - 1];
				e.getChild(n).runtime && e.removeChild(n);
			}),
			(c.prototype.isRegistered = function (t) {
				var e = this.get(t.slice(0, -1)),
					n = t[t.length - 1];
				return e.hasChild(n);
			});
		var u;
		var p = function (t) {
			var e = this;
			void 0 === t && (t = {}), !u && "undefined" != typeof window && window.Vue && y(window.Vue);
			var n = t.plugins;
			void 0 === n && (n = []);
			var r = t.strict;
			void 0 === r && (r = !1),
				(this._committing = !1),
				(this._actions = Object.create(null)),
				(this._actionSubscribers = []),
				(this._mutations = Object.create(null)),
				(this._wrappedGetters = Object.create(null)),
				(this._modules = new c(t)),
				(this._modulesNamespaceMap = Object.create(null)),
				(this._subscribers = []),
				(this._watcherVM = new u()),
				(this._makeLocalGettersCache = Object.create(null));
			var i = this,
				a = this.dispatch,
				s = this.commit;
			(this.dispatch = function (t, e) {
				return a.call(i, t, e);
			}),
				(this.commit = function (t, e, n) {
					return s.call(i, t, e, n);
				}),
				(this.strict = r);
			var p = this._modules.root.state;
			_(this, p, [], this._modules.root),
				h(this, p),
				n.forEach(function (t) {
					return t(e);
				}),
				(void 0 !== t.devtools ? t.devtools : u.config.devtools) &&
					(function (t) {
						o &&
							((t._devtoolHook = o),
							o.emit("vuex:init", t),
							o.on("vuex:travel-to-state", function (e) {
								t.replaceState(e);
							}),
							t.subscribe(
								function (t, e) {
									o.emit("vuex:mutation", t, e);
								},
								{ prepend: !0 },
							),
							t.subscribeAction(
								function (t, e) {
									o.emit("vuex:action", t, e);
								},
								{ prepend: !0 },
							));
					})(this);
		};
		e.Store = p;
		var f = { state: { configurable: !0 } };
		function l(t, e, n) {
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
			_(t, n, [], t._modules.root, !0), h(t, n, e);
		}
		function h(t, e, n) {
			var o = t._vm;
			(t.getters = {}), (t._makeLocalGettersCache = Object.create(null));
			var i = t._wrappedGetters,
				a = {};
			r(i, function (e, n) {
				(a[n] = (function (t, e) {
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
			var s = u.config.silent;
			(u.config.silent = !0),
				(t._vm = new u({ data: { $$state: e }, computed: a })),
				(u.config.silent = s),
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
				o &&
					(n &&
						t._withCommit(function () {
							o._data.$$state = null;
						}),
					u.nextTick(function () {
						return o.$destroy();
					}));
		}
		function _(t, e, n, o, r) {
			var i = !n.length,
				a = t._modules.getNamespace(n);
			if ((o.namespaced && (t._modulesNamespaceMap[a], (t._modulesNamespaceMap[a] = o)), !i && !r)) {
				var s = m(e, n.slice(0, -1)),
					c = n[n.length - 1];
				t._withCommit(function () {
					u.set(s, c, o.state);
				});
			}
			var p = (o.context = (function (t, e, n) {
				var o = "" === e,
					r = {
						dispatch: o
							? t.dispatch
							: function (n, o, r) {
									var i = v(n, o, r),
										a = i.payload,
										s = i.options,
										c = i.type;
									return (s && s.root) || (c = e + c), t.dispatch(c, a);
							  },
						commit: o
							? t.commit
							: function (n, o, r) {
									var i = v(n, o, r),
										a = i.payload,
										s = i.options,
										c = i.type;
									(s && s.root) || (c = e + c), t.commit(c, a, s);
							  },
					};
				return (
					Object.defineProperties(r, {
						getters: {
							get: o
								? function () {
										return t.getters;
								  }
								: function () {
										return (function (t, e) {
											if (!t._makeLocalGettersCache[e]) {
												var n = {},
													o = e.length;
												Object.keys(t.getters).forEach(function (r) {
													if (r.slice(0, o) === e) {
														var i = r.slice(o);
														Object.defineProperty(n, i, {
															get: function () {
																return t.getters[r];
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
								return m(t.state, n);
							},
						},
					}),
					r
				);
			})(t, a, n));
			o.forEachMutation(function (e, n) {
				!(function (t, e, n, o) {
					(t._mutations[e] || (t._mutations[e] = [])).push(function (e) {
						n.call(t, o.state, e);
					});
				})(t, a + n, e, p);
			}),
				o.forEachAction(function (e, n) {
					var o = e.root ? n : a + n,
						r = e.handler || e;
					!(function (t, e, n, o) {
						(t._actions[e] || (t._actions[e] = [])).push(function (e) {
							var r,
								i = n.call(t, { dispatch: o.dispatch, commit: o.commit, getters: o.getters, state: o.state, rootGetters: t.getters, rootState: t.state }, e);
							return (
								((r = i) && "function" == typeof r.then) || (i = Promise.resolve(i)),
								t._devtoolHook
									? i.catch(function (e) {
											throw (t._devtoolHook.emit("vuex:error", e), e);
									  })
									: i
							);
						});
					})(t, o, r, p);
				}),
				o.forEachGetter(function (e, n) {
					!(function (t, e, n, o) {
						if (t._wrappedGetters[e]) return void 0;
						t._wrappedGetters[e] = function (t) {
							return n(o.state, o.getters, t.state, t.getters);
						};
					})(t, a + n, e, p);
				}),
				o.forEachChild(function (o, i) {
					_(t, e, n.concat(i), o, r);
				});
		}
		function m(t, e) {
			return e.reduce(function (t, e) {
				return t[e];
			}, t);
		}
		function v(t, e, n) {
			return i(t) && t.type && ((n = e), (e = t), (t = t.type)), { type: t, payload: e, options: n };
		}
		function y(t) {
			(u && t === u) ||
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
				})((u = t));
		}
		(f.state.get = function () {
			return this._vm._data.$$state;
		}),
			(f.state.set = function (t) {
				0;
			}),
			(p.prototype.commit = function (t, e, n) {
				var o = this,
					r = v(t, e, n),
					i = r.type,
					a = r.payload,
					s = (r.options, { type: i, payload: a }),
					c = this._mutations[i];
				c &&
					(this._withCommit(function () {
						c.forEach(function (t) {
							t(a);
						});
					}),
					this._subscribers.slice().forEach(function (t) {
						return t(s, o.state);
					}));
			}),
			(p.prototype.dispatch = function (t, e) {
				var n = this,
					o = v(t, e),
					r = o.type,
					i = o.payload,
					a = { type: r, payload: i },
					s = this._actions[r];
				if (s) {
					try {
						this._actionSubscribers
							.slice()
							.filter(function (t) {
								return t.before;
							})
							.forEach(function (t) {
								return t.before(a, n.state);
							});
					} catch (t) {
						0;
					}
					var c =
						s.length > 1
							? Promise.all(
									s.map(function (t) {
										return t(i);
									}),
							  )
							: s[0](i);
					return new Promise(function (t, e) {
						c.then(
							function (e) {
								try {
									n._actionSubscribers
										.filter(function (t) {
											return t.after;
										})
										.forEach(function (t) {
											return t.after(a, n.state);
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
											return e.error(a, n.state, t);
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
			(p.prototype.subscribe = function (t, e) {
				return l(t, this._subscribers, e);
			}),
			(p.prototype.subscribeAction = function (t, e) {
				return l("function" == typeof t ? { before: t } : t, this._actionSubscribers, e);
			}),
			(p.prototype.watch = function (t, e, n) {
				var o = this;
				return this._watcherVM.$watch(
					function () {
						return t(o.state, o.getters);
					},
					e,
					n,
				);
			}),
			(p.prototype.replaceState = function (t) {
				var e = this;
				this._withCommit(function () {
					e._vm._data.$$state = t;
				});
			}),
			(p.prototype.registerModule = function (t, e, n) {
				void 0 === n && (n = {}),
					"string" == typeof t && (t = [t]),
					this._modules.register(t, e),
					_(this, this.state, t, this._modules.get(t), n.preserveState),
					h(this, this.state);
			}),
			(p.prototype.unregisterModule = function (t) {
				var e = this;
				"string" == typeof t && (t = [t]),
					this._modules.unregister(t),
					this._withCommit(function () {
						var n = m(e.state, t.slice(0, -1));
						u.delete(n, t[t.length - 1]);
					}),
					d(this);
			}),
			(p.prototype.hasModule = function (t) {
				return "string" == typeof t && (t = [t]), this._modules.isRegistered(t);
			}),
			(p.prototype.hotUpdate = function (t) {
				this._modules.update(t), d(this, !0);
			}),
			(p.prototype._withCommit = function (t) {
				var e = this._committing;
				(this._committing = !0), t(), (this._committing = e);
			}),
			Object.defineProperties(p.prototype, f);
		var g = j(function (t, e) {
			var n = {};
			return (
				x(e).forEach(function (e) {
					var o = e.key,
						r = e.val;
					(n[o] = function () {
						var e = this.$store.state,
							n = this.$store.getters;
						if (t) {
							var o = S(this.$store, "mapState", t);
							if (!o) return;
							(e = o.context.state), (n = o.context.getters);
						}
						return "function" == typeof r ? r.call(this, e, n) : e[r];
					}),
						(n[o].vuex = !0);
				}),
				n
			);
		});
		e.mapState = g;
		var b = j(function (t, e) {
			var n = {};
			return (
				x(e).forEach(function (e) {
					var o = e.key,
						r = e.val;
					n[o] = function () {
						for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
						var o = this.$store.commit;
						if (t) {
							var i = S(this.$store, "mapMutations", t);
							if (!i) return;
							o = i.context.commit;
						}
						return "function" == typeof r ? r.apply(this, [o].concat(e)) : o.apply(this.$store, [r].concat(e));
					};
				}),
				n
			);
		});
		e.mapMutations = b;
		var w = j(function (t, e) {
			var n = {};
			return (
				x(e).forEach(function (e) {
					var o = e.key,
						r = e.val;
					(r = t + r),
						(n[o] = function () {
							if (!t || S(this.$store, "mapGetters", t)) return this.$store.getters[r];
						}),
						(n[o].vuex = !0);
				}),
				n
			);
		});
		e.mapGetters = w;
		var O = j(function (t, e) {
			var n = {};
			return (
				x(e).forEach(function (e) {
					var o = e.key,
						r = e.val;
					n[o] = function () {
						for (var e = [], n = arguments.length; n--; ) e[n] = arguments[n];
						var o = this.$store.dispatch;
						if (t) {
							var i = S(this.$store, "mapActions", t);
							if (!i) return;
							o = i.context.dispatch;
						}
						return "function" == typeof r ? r.apply(this, [o].concat(e)) : o.apply(this.$store, [r].concat(e));
					};
				}),
				n
			);
		});
		e.mapActions = O;
		var C = function (t) {
			return { mapState: g.bind(null, t), mapGetters: w.bind(null, t), mapMutations: b.bind(null, t), mapActions: O.bind(null, t) };
		};
		function x(t) {
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
		function j(t) {
			return function (e, n) {
				return "string" != typeof e ? ((n = e), (e = "")) : "/" !== e.charAt(e.length - 1) && (e += "/"), t(e, n);
			};
		}
		function S(t, e, n) {
			return t._modulesNamespaceMap[n];
		}
		e.createNamespacedHelpers = C;
		var $ = { Store: p, install: y, version: "3.4.0", mapState: g, mapMutations: b, mapGetters: w, mapActions: O, createNamespacedHelpers: C };
		e.default = $;
	},
	452: function (t, e, n) {
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
				return n("scroll-view", { staticStyle: { flexDirection: "column" }, attrs: { scrollY: !0, showScrollbar: !0, enableBackToTop: !0, bubble: "true" } }, [
					n("view", { staticClass: ["root"] }, [
						n("view", { staticClass: ["page-body"] }, [
							n(
								"view",
								{
									staticClass: ["new-page__color"],
									style: { backgroundColor: t.currentColor },
									on: {
										click: function (e) {
											t.setColorIndex(t.colorIndex > 1 ? 0 : t.colorIndex + 1);
										},
									},
								},
								[
									n("u-text", { staticClass: ["new-page__color-text"], appendAsTree: !0, attrs: { append: "tree" } }, [
										t._v("\u70b9\u51fb\u6539\u53d8\u989c\u8272"),
									]),
								],
							),
							n("view", { staticClass: ["new-page__text-box"] }, [
								n("u-text", { staticClass: ["new-page__text"], appendAsTree: !0, attrs: { append: "tree" } }, [
									t._v("\u70b9\u51fb\u4e0a\u65b9\u8272\u5757\u4f7f\u7528vuex\u5728\u9875\u9762\u4e4b\u95f4\u8fdb\u884c\u901a\u8baf"),
								]),
							]),
							n(
								"view",
								{ staticClass: ["new-page__button"] },
								[
									n("button", { staticClass: ["new-page__button-item"], on: { click: t.navToNvue } }, [t._v("\u8df3\u8f6cNVUE\u9875\u9762")]),
									n("button", { staticClass: ["new-page__button-item"], on: { click: t.navToVue } }, [t._v("\u8df3\u8f6cVUE\u9875\u9762")]),
								],
								1,
							),
						]),
					]),
				]);
			},
			r = [];
	},
	552: function (t, e, n) {
		"use strict";
		n.r(e);
		var o = n(162),
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
	653: function (t, e, n) {
		"use strict";
		n.r(e);
		n(6);
		var o = n(76);
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
			(o.default.route = "pages/API/navigator/new-page/new-nvue-page-1"),
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
	76: function (t, e, n) {
		"use strict";
		var o = n(452),
			r = n(160),
			i = n(0);
		var a = Object(i.a)(r.default, o.b, o.c, !1, null, null, "222abafb", !1, o.a, void 0);
		(function (t) {
			this.options.style || (this.options.style = {}),
				Vue.prototype.__merge_style && Vue.prototype.__$appStyle__ && Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style),
				Vue.prototype.__merge_style ? Vue.prototype.__merge_style(n(552).default, this.options.style) : Object.assign(this.options.style, n(552).default);
		}).call(a),
			(e.default = a.exports);
	},
});
