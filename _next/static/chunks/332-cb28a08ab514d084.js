(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [332], {
        12308: function(t, e, r) {
            var n = r(67294),
                i = r(87854),
                o = function(t) {
                    if (t && t.__esModule) return t;
                    var e = Object.create(null);
                    return t && Object.keys(t).forEach(function(r) {
                        if ("default" !== r) {
                            var n = Object.getOwnPropertyDescriptor(t, r);
                            Object.defineProperty(e, r, n.get ? n : {
                                enumerable: !0,
                                get: function() {
                                    return t[r]
                                }
                            })
                        }
                    }), e.default = t, Object.freeze(e)
                }(n),
                a = i && "object" == typeof i && "default" in i ? i : {
                    default: i
                },
                s = function(t, e) {
                    return (s = Object.setPrototypeOf || ({
                        __proto__: []
                    }) instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    })(t, e)
                },
                l = function() {
                    return (l = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                u = function(t) {
                    function e(e) {
                        var r = t.call(this, e) || this,
                            n = "wert-module",
                            i = new a.default(l({
                                container_id: n
                            }, e.options)),
                            o = l(l({
                                id: e.options.container_id || n
                            }, e), {
                                options: void 0
                            });
                        return r.wertWidget = i, r.state = {
                            passThroughProps: o
                        }, r
                    }
                    return ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        s(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                    }(e, t), e.prototype.componentDidMount = function() {
                        this.wertWidget.mount()
                    }, e.prototype.componentDidUpdate = function(t) {
                        var e = this,
                            r = this.props.options.theme !== t.options.theme,
                            n = Object.keys(this.props.options).filter(function(t) {
                                return t.startsWith("color")
                            }).reduce(function(r, n) {
                                var i = e.props.options[n];
                                return i !== t.options[n] && (r[n] = i), r
                            }, {}),
                            i = !!Object.keys(n).length;
                        (r || i) && this.wertWidget.setTheme({
                            theme: this.props.options.theme,
                            colors: n
                        })
                    }, e.prototype.componentWillUnmount = function() {
                        this.wertWidget.destroy()
                    }, e.prototype.render = function() {
                        return o.createElement("div", l({}, this.state.passThroughProps))
                    }, e
                }(o.Component);
            e.Z = u
        },
        87854: function(t, e, r) {
            "use strict";
            let n = r(94713);
            t.exports = class {
                constructor(t = {}) {
                    this.onMessage = t => {
                        let e = t.source === this.widgetWindow,
                            r = "object" == typeof t.data;
                        if (!e || !r) return;
                        "loaded" === t.data.type && this.sendEvent({
                            type: "extra",
                            origin: t.origin,
                            data: this.extraOptions
                        });
                        let n = this.listeners[t.data.type];
                        n && n(t.data.data)
                    };
                    let e = Object.assign({}, t);
                    this.partner_id = e.partner_id, this.container_id = e.container_id, this.origin = e.origin || "https://widget.wert.io", this.width = e.autosize ? void 0 : e.width, this.height = e.autosize ? void 0 : e.height, this.extraOptions = e.extra ? Object.assign({}, e.extra) : void 0, this.listeners = e.listeners || {}, this.widgetWindow = null, this.checkIntervalId = void 0, delete e.partner_id, delete e.container_id, delete e.origin, delete e.width, delete e.height, delete e.autosize, delete e.extra, delete e.listeners, e.await_data = e.await_data || this.extraOptions ? "1" : void 0, this.options = e
                }
                static get eventTypes() {
                    return ["close", "error", "loaded", "payment-status", "position"]
                }
                mount() {
                    if (!this.container_id) throw Error("No container_id was provided");
                    let t = document.querySelector("#" + this.container_id);
                    if (!t) throw Error("Container wasn't found");
                    this.unlistenWidget();
                    let e = document.createElement("iframe"),
                        r = !!(this.options.color_background || "dark" === this.options.theme);
                    e.style.border = "none", e.style.width = this.width ? this.width + "px" : "100%", e.style.height = this.height ? this.height + "px" : "100%", e.setAttribute("src", this.getEmbedUrl()), e.setAttribute("allow", "camera *; microphone *"), e.setAttribute("sandbox", "allow-scripts allow-forms allow-popups allow-same-origin"), r && (e.style.background = this.options.color_background || "#040405"), t.innerHTML = "", t.appendChild(e), this.widgetWindow = e.contentWindow, this.listenWidget()
                }
                open() {
                    this.unlistenWidget();
                    let t = this.getRedirectUrl();
                    this.widgetWindow = window.open(t), this.listenWidget()
                }
                destroy() {
                    this.unlistenWidget()
                }
                listenWidget() {
                    window.addEventListener("message", this.onMessage);
                    let t = () => {
                        let t = this.widgetWindow && !this.widgetWindow.closed;
                        t || this.unlistenWidget()
                    };
                    this.checkIntervalId = window.setInterval(t, 200)
                }
                unlistenWidget() {
                    this.checkIntervalId && (clearInterval(this.checkIntervalId), this.checkIntervalId = void 0, window.removeEventListener("message", this.onMessage))
                }
                sendEvent(t) {
                    var e;
                    t.data && (null === (e = this.widgetWindow) || void 0 === e || e.postMessage({
                        type: t.type,
                        data: t.data
                    }, t.origin))
                }
                getEmbedCode() {
                    let t = `<script type="text/javascript" src="https://javascript.wert.io/wert-${n.version}.js">`,
                        e = "</script>",
                        r = Object.assign({
                            partner_id: this.partner_id,
                            container_id: this.container_id,
                            origin: this.origin,
                            width: this.width,
                            height: this.height
                        }, this.options),
                        i = `const wertWidget = new WertWidget(${JSON.stringify(r,null,2)});`;
                    return t + e + '\n<script type="text/javascript">\n' + i + "\nwertWidget.mount();\n" + e
                }
                getEmbedUrl() {
                    let t = this.getParametersString(),
                        e = this.origin + "/" + this.partner_id + "/widget" + t;
                    return e
                }
                getRedirectUrl() {
                    let t = this.getParametersString(),
                        e = this.origin + "/" + this.partner_id + "/redirect" + t;
                    return e
                }
                getParametersString() {
                    let t = Object.entries(this.options).reduce((t, [e, r]) => {
                        if (void 0 === r) return t;
                        let n = t.length ? "&" : "?";
                        return t + n + e + "=" + encodeURIComponent(r)
                    }, "");
                    return t
                }
                setTheme(t) {
                    t && Object.keys(t).length && this.sendEvent({
                        type: "theme",
                        origin: this.origin,
                        data: t
                    })
                }
            }
        },
        55362: function(t, e, r) {
            "use strict";
            var n = r(48764).Buffer;
            let i = r(86266),
                o = ["address", "commodity", "commodity_amount", "network", "sc_address", "sc_input_data"],
                a = new i.eddsa("ed25519"),
                s = t => t && "0x" === t.substring(0, 2) ? t.substring(2) : t,
                l = (t, e) => {
                    let r = o.every(e => e in t),
                        i = Object.keys(t).filter(t => !o.includes(t));
                    if (!r) throw Error(`All of following keys in options (as first argument) are required for signing: ${o.map(t=>`"${t}"`).join(", ")}`);
                    if (!e) throw Error("Private key (as second argument) is required for signing");
                    if (i.length) throw Error(`Unexpected keys provided in options: ${i.map(t=>`"${t}"`).join(", ")}`);
                    let l = a.keyFromSecret(s(e)),
                        u = o.map(e => {
                            let r;
                            switch (e) {
                                case "commodity_amount":
                                    r = String("string" == typeof t.commodity_amount ? t.commodity_amount : parseFloat(t.commodity_amount));
                                    break;
                                case "commodity":
                                case "network":
                                    r = String(t[e]).toLowerCase();
                                    break;
                                default:
                                    r = String(t[e])
                            }
                            return `${e}:${r}`
                        }).join("\n"),
                        c = n.from(u, "utf8").toString("hex"),
                        d = l.sign(c).toHex();
                    return Object.assign(Object.assign({}, t), {
                        signature: d
                    })
                },
                u = [...o, "signature"];
            t.exports = {
                signSmartContractData: l,
                scKeysList: u
            }
        },
        69260: function(t, e, r) {
            ! function(t, e, r) {
                "use strict";

                function n(t) {
                    return t && "object" == typeof t && "default" in t ? t : {
                        default: t
                    }
                }
                var i = n(e),
                    o = n(r);

                function a(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })), r.push.apply(r, n)
                    }
                    return r
                }

                function s(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? a(Object(r), !0).forEach(function(e) {
                            var n, i, o;
                            n = t, i = e, o = r[e], (i = function(t) {
                                var e = function(t, e) {
                                    if ("object" != typeof t || null === t) return t;
                                    var r = t[Symbol.toPrimitive];
                                    if (void 0 !== r) {
                                        var n = r.call(t, e || "default");
                                        if ("object" != typeof n) return n;
                                        throw TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return ("string" === e ? String : Number)(t)
                                }(t, "string");
                                return "symbol" == typeof e ? e : String(e)
                            }(i)) in n ? Object.defineProperty(n, i, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[i] = o
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }

                function l(t, e) {
                    if (null == t) return {};
                    var r, n, i = function(t, e) {
                        if (null == t) return {};
                        var r, n, i = {},
                            o = Object.keys(t);
                        for (n = 0; n < o.length; n++) r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
                        return i
                    }(t, e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(t);
                        for (n = 0; n < o.length; n++) r = o[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
                    }
                    return i
                }

                function u(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                    return n
                }
                var c = ["animationData", "loop", "autoplay", "initialSegment", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart", "onConfigReady", "onDataReady", "onDataFailed", "onLoadedImages", "onDOMLoaded", "onDestroy", "lottieRef", "renderer", "name", "assetsPath", "rendererSettings"],
                    d = function(t, e) {
                        var n, a = t.animationData,
                            d = t.loop,
                            p = t.autoplay,
                            f = t.initialSegment,
                            m = t.onComplete,
                            y = t.onLoopComplete,
                            h = t.onEnterFrame,
                            g = t.onSegmentStart,
                            v = t.onConfigReady,
                            w = t.onDataReady,
                            b = t.onDataFailed,
                            O = t.onLoadedImages,
                            j = t.onDOMLoaded,
                            S = t.onDestroy;
                        t.lottieRef, t.renderer, t.name, t.assetsPath, t.rendererSettings;
                        var _ = l(t, c),
                            E = function(t) {
                                if (Array.isArray(t)) return t
                            }(n = r.useState(!1)) || function(t, e) {
                                var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (null != r) {
                                    var n, i, o, a, s = [],
                                        l = !0,
                                        u = !1;
                                    try {
                                        if (o = (r = r.call(t)).next, 0 === e) {
                                            if (Object(r) !== r) return;
                                            l = !1
                                        } else
                                            for (; !(l = (n = o.call(r)).done) && (s.push(n.value), s.length !== e); l = !0);
                                    } catch (t) {
                                        u = !0, i = t
                                    } finally {
                                        try {
                                            if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                                        } finally {
                                            if (u) throw i
                                        }
                                    }
                                    return s
                                }
                            }(n, 2) || function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return u(t, e);
                                    var r = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(t, e)
                                }
                            }(n, 2) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(),
                            x = E[0],
                            D = E[1],
                            P = r.useRef(),
                            k = r.useRef(null),
                            A = function() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (k.current) {
                                    null === (e = P.current) || void 0 === e || e.destroy();
                                    var n = s(s(s({}, t), r), {}, {
                                        container: k.current
                                    });
                                    return P.current = i.default.loadAnimation(n), D(!!P.current),
                                        function() {
                                            var t;
                                            null === (t = P.current) || void 0 === t || t.destroy(), P.current = void 0
                                        }
                                }
                            };
                        return r.useEffect(function() {
                            var t = A();
                            return function() {
                                return null == t ? void 0 : t()
                            }
                        }, [a, d]), r.useEffect(function() {
                            P.current && (P.current.autoplay = !!p)
                        }, [p]), r.useEffect(function() {
                            if (P.current) {
                                if (!f) {
                                    P.current.resetSegments(!0);
                                    return
                                }
                                Array.isArray(f) && f.length && ((P.current.currentRawFrame < f[0] || P.current.currentRawFrame > f[1]) && (P.current.currentRawFrame = f[0]), P.current.setSegment(f[0], f[1]))
                            }
                        }, [f]), r.useEffect(function() {
                            var t = [{
                                name: "complete",
                                handler: m
                            }, {
                                name: "loopComplete",
                                handler: y
                            }, {
                                name: "enterFrame",
                                handler: h
                            }, {
                                name: "segmentStart",
                                handler: g
                            }, {
                                name: "config_ready",
                                handler: v
                            }, {
                                name: "data_ready",
                                handler: w
                            }, {
                                name: "data_failed",
                                handler: b
                            }, {
                                name: "loaded_images",
                                handler: O
                            }, {
                                name: "DOMLoaded",
                                handler: j
                            }, {
                                name: "destroy",
                                handler: S
                            }].filter(function(t) {
                                return null != t.handler
                            });
                            if (t.length) {
                                var e = t.map(function(t) {
                                    var e;
                                    return null === (e = P.current) || void 0 === e || e.addEventListener(t.name, t.handler),
                                        function() {
                                            var e;
                                            null === (e = P.current) || void 0 === e || e.removeEventListener(t.name, t.handler)
                                        }
                                });
                                return function() {
                                    e.forEach(function(t) {
                                        return t()
                                    })
                                }
                            }
                        }, [m, y, h, g, v, w, b, O, j, S]), {
                            View: o.default.createElement("div", s({
                                style: e,
                                ref: k
                            }, _)),
                            play: function() {
                                var t;
                                null === (t = P.current) || void 0 === t || t.play()
                            },
                            stop: function() {
                                var t;
                                null === (t = P.current) || void 0 === t || t.stop()
                            },
                            pause: function() {
                                var t;
                                null === (t = P.current) || void 0 === t || t.pause()
                            },
                            setSpeed: function(t) {
                                var e;
                                null === (e = P.current) || void 0 === e || e.setSpeed(t)
                            },
                            goToAndStop: function(t, e) {
                                var r;
                                null === (r = P.current) || void 0 === r || r.goToAndStop(t, e)
                            },
                            goToAndPlay: function(t, e) {
                                var r;
                                null === (r = P.current) || void 0 === r || r.goToAndPlay(t, e)
                            },
                            setDirection: function(t) {
                                var e;
                                null === (e = P.current) || void 0 === e || e.setDirection(t)
                            },
                            playSegments: function(t, e) {
                                var r;
                                null === (r = P.current) || void 0 === r || r.playSegments(t, e)
                            },
                            setSubframe: function(t) {
                                var e;
                                null === (e = P.current) || void 0 === e || e.setSubframe(t)
                            },
                            getDuration: function(t) {
                                var e;
                                return null === (e = P.current) || void 0 === e ? void 0 : e.getDuration(t)
                            },
                            destroy: function() {
                                var t;
                                null === (t = P.current) || void 0 === t || t.destroy(), P.current = void 0
                            },
                            animationContainerRef: k,
                            animationLoaded: x,
                            animationItem: P.current
                        }
                    },
                    p = function(t) {
                        var e = t.wrapperRef,
                            n = t.animationItem,
                            i = t.mode,
                            o = t.actions;
                        r.useEffect(function() {
                            var t, r, a, s, l, u = e.current;
                            if (u && n && o.length) switch (n.stop(), i) {
                                case "scroll":
                                    return t = null, r = function() {
                                            var e, r, i, a = (r = (e = u.getBoundingClientRect()).top, i = e.height, (window.innerHeight - r) / (window.innerHeight + i)),
                                                s = o.find(function(t) {
                                                    var e = t.visibility;
                                                    return e && a >= e[0] && a <= e[1]
                                                });
                                            if (s) {
                                                if ("seek" === s.type && s.visibility && 2 === s.frames.length) {
                                                    var l = s.frames[0] + Math.ceil((a - s.visibility[0]) / (s.visibility[1] - s.visibility[0]) * s.frames[1]); //! goToAndStop must be relative to the start of the current segment
                                                    n.goToAndStop(l - n.firstFrame - 1, !0)
                                                }
                                                "loop" === s.type && (null === t ? (n.playSegments(s.frames, !0), t = s.frames) : t !== s.frames ? (n.playSegments(s.frames, !0), t = s.frames) : n.isPaused && (n.playSegments(s.frames, !0), t = s.frames)), "play" === s.type && n.isPaused && (n.resetSegments(!0), n.play()), "stop" === s.type && n.goToAndStop(s.frames[0] - n.firstFrame - 1, !0)
                                            }
                                        }, document.addEventListener("scroll", r),
                                        function() {
                                            document.removeEventListener("scroll", r)
                                        };
                                case "cursor":
                                    return a = function(t, e) {
                                            var r = t,
                                                i = e;
                                            if (-1 !== r && -1 !== i) {
                                                var a, s, l, c, d = (a = r, s = i, c = (l = u.getBoundingClientRect()).top, {
                                                    x: (a - l.left) / l.width,
                                                    y: (s - c) / l.height
                                                });
                                                r = d.x, i = d.y
                                            }
                                            var p = o.find(function(t) {
                                                var e = t.position;
                                                return e && Array.isArray(e.x) && Array.isArray(e.y) ? r >= e.x[0] && r <= e.x[1] && i >= e.y[0] && i <= e.y[1] : !(!e || Number.isNaN(e.x) || Number.isNaN(e.y)) && r === e.x && i === e.y
                                            });
                                            if (p) {
                                                if ("seek" === p.type && p.position && Array.isArray(p.position.x) && Array.isArray(p.position.y) && 2 === p.frames.length) {
                                                    var f = (r - p.position.x[0]) / (p.position.x[1] - p.position.x[0]),
                                                        m = (i - p.position.y[0]) / (p.position.y[1] - p.position.y[0]);
                                                    n.playSegments(p.frames, !0), n.goToAndStop(Math.ceil((f + m) / 2 * (p.frames[1] - p.frames[0])), !0)
                                                }
                                                "loop" === p.type && n.playSegments(p.frames, !0), "play" === p.type && (n.isPaused && n.resetSegments(!1), n.playSegments(p.frames)), "stop" === p.type && n.goToAndStop(p.frames[0], !0)
                                            }
                                        }, s = function(t) {
                                            a(t.clientX, t.clientY)
                                        }, l = function() {
                                            a(-1, -1)
                                        }, u.addEventListener("mousemove", s), u.addEventListener("mouseout", l),
                                        function() {
                                            u.removeEventListener("mousemove", s), u.removeEventListener("mouseout", l)
                                        }
                            }
                        }, [i, n])
                    },
                    f = function(t) {
                        var e = t.actions,
                            r = t.mode,
                            n = t.lottieObj,
                            i = n.animationItem,
                            o = n.View;
                        return p({
                            actions: e,
                            animationItem: i,
                            mode: r,
                            wrapperRef: n.animationContainerRef
                        }), o
                    },
                    m = ["style", "interactivity"];
                Object.defineProperty(t, "LottiePlayer", {
                    enumerable: !0,
                    get: function() {
                        return i.default
                    }
                }), t.default = function(t) {
                    var e, n, i, o = t.style,
                        a = t.interactivity,
                        s = d(l(t, m), o),
                        u = s.View,
                        c = s.play,
                        p = s.stop,
                        y = s.pause,
                        h = s.setSpeed,
                        g = s.goToAndStop,
                        v = s.goToAndPlay,
                        w = s.setDirection,
                        b = s.playSegments,
                        O = s.setSubframe,
                        j = s.getDuration,
                        S = s.destroy,
                        _ = s.animationContainerRef,
                        E = s.animationLoaded,
                        x = s.animationItem;
                    return r.useEffect(function() {
                        t.lottieRef && (t.lottieRef.current = {
                            play: c,
                            stop: p,
                            pause: y,
                            setSpeed: h,
                            goToAndPlay: v,
                            goToAndStop: g,
                            setDirection: w,
                            playSegments: b,
                            setSubframe: O,
                            getDuration: j,
                            destroy: S,
                            animationContainerRef: _,
                            animationLoaded: E,
                            animationItem: x
                        })
                    }, [null === (e = t.lottieRef) || void 0 === e ? void 0 : e.current]), f({
                        lottieObj: {
                            View: u,
                            play: c,
                            stop: p,
                            pause: y,
                            setSpeed: h,
                            goToAndStop: g,
                            goToAndPlay: v,
                            setDirection: w,
                            playSegments: b,
                            setSubframe: O,
                            getDuration: j,
                            destroy: S,
                            animationContainerRef: _,
                            animationLoaded: E,
                            animationItem: x
                        },
                        actions: null !== (n = null == a ? void 0 : a.actions) && void 0 !== n ? n : [],
                        mode: null !== (i = null == a ? void 0 : a.mode) && void 0 !== i ? i : "scroll"
                    })
                }, t.useLottie = d, t.useLottieInteractivity = f, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }(e, r(11248), r(67294))
        },
        13156: function() {},
        88357: function(t, e, r) {
            "use strict";
            r.d(e, {
                w_: function() {
                    return l
                }
            });
            var n = r(67294),
                i = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                o = n.createContext && n.createContext(i),
                a = function() {
                    return (a = Object.assign || function(t) {
                        for (var e, r = 1, n = arguments.length; r < n; r++)
                            for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                        return t
                    }).apply(this, arguments)
                },
                s = function(t, e) {
                    var r = {};
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) 0 > e.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
                    return r
                };

            function l(t) {
                return function(e) {
                    return n.createElement(u, a({
                        attr: a({}, t.attr)
                    }, e), function t(e) {
                        return e && e.map(function(e, r) {
                            return n.createElement(e.tag, a({
                                key: r
                            }, e.attr), t(e.child))
                        })
                    }(t.child))
                }
            }

            function u(t) {
                var e = function(e) {
                    var r, i = t.attr,
                        o = t.size,
                        l = t.title,
                        u = s(t, ["attr", "size", "title"]),
                        c = o || e.size || "1em";
                    return e.className && (r = e.className), t.className && (r = (r ? r + " " : "") + t.className), n.createElement("svg", a({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, e.attr, i, u, {
                        className: r,
                        style: a(a({
                            color: t.color || e.color
                        }, e.style), t.style),
                        height: c,
                        width: c,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), l && n.createElement("title", null, l), t.children)
                };
                return void 0 !== o ? n.createElement(o.Consumer, null, function(t) {
                    return e(t)
                }) : e(i)
            }
        },
        9058: function(t, e, r) {
            "use strict";
            var n = r(67294);

            function i() {
                return (i = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }
            var o = function(t, e) {
                switch (t) {
                    case "left":
                        return {
                            top: 0,
                            left: 0,
                            transform: "translate3d(-100%, 0, 0)",
                            width: e,
                            height: "100vh"
                        };
                    case "right":
                        return {
                            top: 0,
                            right: 0,
                            transform: "translate3d(100%, 0, 0)",
                            width: e,
                            height: "100vh"
                        };
                    case "bottom":
                        return {
                            left: 0,
                            right: 0,
                            bottom: 0,
                            transform: "translate3d(0, 100%, 0)",
                            width: "100%",
                            height: e
                        };
                    case "top":
                        return {
                            left: 0,
                            right: 0,
                            top: 0,
                            transform: "translate3d(0, -100%, 0)",
                            width: "100%",
                            height: e
                        };
                    default:
                        return {}
                }
            };
            e.Z = function(t) {
                var e = t.open,
                    r = t.onClose,
                    a = t.children,
                    s = t.style,
                    l = t.enableOverlay,
                    u = t.overlayColor,
                    c = t.overlayOpacity,
                    d = t.zIndex,
                    p = void 0 === d ? 100 : d,
                    f = t.duration,
                    m = t.direction,
                    y = t.size,
                    h = t.className,
                    g = t.customIdSuffix,
                    v = t.lockBackgroundScroll,
                    w = void 0 !== v && v,
                    b = (0, n.useRef)(null);
                (0, n.useEffect)(function() {
                    b.current = window.document.querySelector("body"), b.current && w && (e ? b.current.style.overflow = "hidden" : b.current.style.overflow = "")
                }, [e]);
                var O = (0, n.useMemo)(function() {
                        return g || (Math.random() + 1).toString(36).substring(7)
                    }, [g]),
                    j = i({
                        zIndex: p + 1,
                        transitionDuration: (void 0 === f ? 500 : f) + "ms"
                    }, o(m, void 0 === y ? 250 : y), s);
                return n.createElement("div", {
                    id: "EZDrawer" + O,
                    className: "EZDrawer"
                }, n.createElement("input", {
                    type: "checkbox",
                    id: "EZDrawer__checkbox" + O,
                    className: "EZDrawer__checkbox",
                    onChange: void 0 === r ? function() {} : r,
                    checked: e
                }), n.createElement("nav", {
                    role: "navigation",
                    id: "EZDrawer__container" + O,
                    style: j,
                    className: "EZDrawer__container " + h
                }, a), (void 0 === l || l) && n.createElement("label", {
                    htmlFor: "EZDrawer__checkbox" + O,
                    id: "EZDrawer__overlay" + O,
                    className: "EZDrawer__overlay",
                    style: {
                        backgroundColor: "" + (void 0 === u ? "#000" : u),
                        opacity: "" + (void 0 === c ? .4 : c),
                        zIndex: p
                    }
                }))
            }
        },
        57632: function(t, e, r) {
            "use strict";
            let n;
            r.d(e, {
                Z: function() {
                    return u
                }
            });
            let i = "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto);
            var o = {
                randomUUID: i
            };
            let a = new Uint8Array(16);

            function s() {
                if (!n && !(n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return n(a)
            }
            let l = [];
            for (let t = 0; t < 256; ++t) l.push((t + 256).toString(16).slice(1));
            var u = function(t, e, r) {
                if (o.randomUUID && !e && !t) return o.randomUUID();
                t = t || {};
                let n = t.random || (t.rng || s)();
                if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, e) {
                    r = r || 0;
                    for (let t = 0; t < 16; ++t) e[r + t] = n[t];
                    return e
                }
                return function(t, e = 0) {
                    return (l[t[e + 0]] + l[t[e + 1]] + l[t[e + 2]] + l[t[e + 3]] + "-" + l[t[e + 4]] + l[t[e + 5]] + "-" + l[t[e + 6]] + l[t[e + 7]] + "-" + l[t[e + 8]] + l[t[e + 9]] + "-" + l[t[e + 10]] + l[t[e + 11]] + l[t[e + 12]] + l[t[e + 13]] + l[t[e + 14]] + l[t[e + 15]]).toLowerCase()
                }(n)
            }
        },
        94713: function(t) {
            "use strict";
            t.exports = JSON.parse('{"name":"@wert-io/widget-initializer","version":"3.1.0","description":"WertWidget helper","main":"index.js","types":"index.d.ts","repository":{"type":"git","url":"https://github.com/wert-io/widget-initializer.git"},"scripts":{"build":"tsc -p .","build-script":"rollup -c","test":"jest --ci --reporters=default --reporters=jest-junit"},"author":"@wert-io","license":"ISC","devDependencies":{"@babel/core":"^7.13.16","@babel/preset-env":"^7.13.15","@rollup/plugin-babel":"^5.3.0","@rollup/plugin-commonjs":"^18.0.0","@rollup/plugin-json":"^4.1.0","@rollup/plugin-node-resolve":"^13.1.3","@typescript-eslint/eslint-plugin":"^4.28.1","@typescript-eslint/parser":"^4.28.1","eslint":"^7.25.0","eslint-plugin-import":"^2.22.1","jest":"^27.0.5","jest-junit":"^12.0.0","rollup":"^2.45.2","typescript":"^4.3.5"},"dependencies":{},"jest-junit":{"outputDirectory":"reports","outputName":"jest-junit.xml","ancestorSeparator":" › ","uniqueOutputName":"false","suiteNameTemplate":"{filepath}","classNameTemplate":"{classname}","titleTemplate":"{title}"}}')
        }
    }
]);