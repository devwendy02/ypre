(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [71], {
        81516: function(e, t, n) {
            "use strict";

            function r(e, t, r, o) {
                {
                    let i = n(13162).normalizeLocalePath,
                        l = n(2249).detectDomainLocale,
                        a = t || i(e, r).detectedLocale,
                        u = l(o, void 0, a);
                    if (u) {
                        let t = "http".concat(u.http ? "" : "s", "://"),
                            n = a === u.defaultLocale ? "" : "/".concat(a);
                        return "".concat(t).concat(u.domain).concat("").concat(n).concat(e)
                    }
                    return !1
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getDomainLocale", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        93740: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return w
                }
            });
            let r = n(34788),
                o = n(38754),
                i = n(61757),
                l = n(20224),
                a = i._(n(67294)),
                u = o._(n(42636)),
                s = n(97757),
                c = n(3735),
                f = n(83341);
            n(34210);
            let d = o._(n(57746)),
                p = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image/",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !0
                };

            function h(e) {
                return void 0 !== e.default
            }

            function m(e) {
                return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function g(e, t, n, o, i, l, a) {
                if (!e || e["data-loaded-src"] === t) return;
                e["data-loaded-src"] = t;
                let u = "decode" in e ? e.decode() : Promise.resolve();
                u.catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("blur" === n && l(!0), null == o ? void 0 : o.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let n = !1,
                                i = !1;
                            o.current(r._({}, t, {
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => n,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    n = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, t.stopPropagation()
                                }
                            }))
                        }(null == i ? void 0 : i.current) && i.current(e)
                    }
                })
            }

            function v(e) {
                let [t, n] = a.version.split("."), r = parseInt(t, 10), o = parseInt(n, 10);
                return r > 18 || 18 === r && o >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let y = (0, a.forwardRef)((e, t) => {
                    var {
                        imgAttributes: n,
                        heightInt: o,
                        widthInt: i,
                        qualityInt: u,
                        className: s,
                        imgStyle: c,
                        blurStyle: f,
                        isLazy: d,
                        fetchPriority: p,
                        fill: h,
                        placeholder: m,
                        loading: y,
                        srcString: b,
                        config: w,
                        unoptimized: x,
                        loader: E,
                        onLoadRef: S,
                        onLoadingCompleteRef: I,
                        setBlurComplete: j,
                        setShowAltText: _,
                        onLoad: O,
                        onError: k
                    } = e, M = l._(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fetchPriority", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
                    return y = d ? "lazy" : y, a.default.createElement(a.default.Fragment, null, a.default.createElement("img", r._({}, M, v(p), {
                        loading: y,
                        width: i,
                        height: o,
                        decoding: "async",
                        "data-nimg": h ? "fill" : "1",
                        className: s,
                        style: r._({}, c, f)
                    }, n, {
                        ref: (0, a.useCallback)(e => {
                            t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (k && (e.src = e.src), e.complete && g(e, b, m, S, I, j, x))
                        }, [b, m, S, I, j, k, x, t]),
                        onLoad: e => {
                            let t = e.currentTarget;
                            g(t, b, m, S, I, j, x)
                        },
                        onError: e => {
                            _(!0), "blur" === m && j(!0), k && k(e)
                        }
                    })))
                }),
                b = (0, a.forwardRef)((e, t) => {
                    let n, o;
                    var i, {
                            src: g,
                            sizes: b,
                            unoptimized: w = !1,
                            priority: x = !1,
                            loading: E,
                            className: S,
                            quality: I,
                            width: j,
                            height: _,
                            fill: O,
                            style: k,
                            onLoad: M,
                            onLoadingComplete: P,
                            placeholder: C = "empty",
                            blurDataURL: R,
                            fetchPriority: L,
                            layout: F,
                            objectFit: T,
                            objectPosition: N,
                            lazyBoundary: A,
                            lazyRoot: D
                        } = e,
                        z = l._(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "fetchPriority", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
                    let U = (0, a.useContext)(f.ImageConfigContext),
                        H = (0, a.useMemo)(() => {
                            let e = p || U || c.imageConfigDefault,
                                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                                n = e.deviceSizes.sort((e, t) => e - t);
                            return r._({}, e, {
                                allSizes: t,
                                deviceSizes: n
                            })
                        }, [U]),
                        $ = z,
                        q = $.loader || d.default;
                    delete $.loader;
                    let B = "__next_img_default" in q;
                    if (B) {
                        if ("custom" === H.loader) throw Error('Image with src "'.concat(g, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                    } else {
                        let e = q;
                        q = t => {
                            let {
                                config: n
                            } = t, r = l._(t, ["config"]);
                            return e(r)
                        }
                    }
                    if (F) {
                        "fill" === F && (O = !0);
                        let e = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        }[F];
                        e && (k = r._({}, k, e));
                        let t = {
                            responsive: "100vw",
                            fill: "100vw"
                        }[F];
                        t && !b && (b = t)
                    }
                    let K = "",
                        W = m(j),
                        Q = m(_);
                    if ("object" == typeof(i = g) && (h(i) || void 0 !== i.src)) {
                        let e = h(g) ? g.default : g;
                        if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));
                        if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));
                        if (n = e.blurWidth, o = e.blurHeight, R = R || e.blurDataURL, K = e.src, !O) {
                            if (W || Q) {
                                if (W && !Q) {
                                    let t = W / e.width;
                                    Q = Math.round(e.height * t)
                                } else if (!W && Q) {
                                    let t = Q / e.height;
                                    W = Math.round(e.width * t)
                                }
                            } else W = e.width, Q = e.height
                        }
                    }
                    let V = !x && ("lazy" === E || void 0 === E);
                    (!(g = "string" == typeof g ? g : K) || g.startsWith("data:") || g.startsWith("blob:")) && (w = !0, V = !1), H.unoptimized && (w = !0), B && g.endsWith(".svg") && !H.dangerouslyAllowSVG && (w = !0), x && (L = "high");
                    let [G, J] = (0, a.useState)(!1), [X, Y] = (0, a.useState)(!1), Z = m(I), ee = Object.assign(O ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: T,
                        objectPosition: N
                    } : {}, X ? {} : {
                        color: "transparent"
                    }, k), et = "blur" === C && R && !G ? {
                        backgroundSize: ee.objectFit || "cover",
                        backgroundPosition: ee.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat((0, s.getImageBlurSvg)({
                            widthInt: W,
                            heightInt: Q,
                            blurWidth: n,
                            blurHeight: o,
                            blurDataURL: R,
                            objectFit: ee.objectFit
                        }), '")')
                    } : {}, en = function(e) {
                        let {
                            config: t,
                            src: n,
                            unoptimized: r,
                            width: o,
                            quality: i,
                            sizes: l,
                            loader: a
                        } = e;
                        if (r) return {
                            src: n,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: u,
                            kind: s
                        } = function(e, t, n) {
                            let {
                                deviceSizes: r,
                                allSizes: o
                            } = e;
                            if (n) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let r; r = e.exec(n); r) t.push(parseInt(r[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: o.filter(t => t >= r[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: o,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof t) return {
                                widths: r,
                                kind: "w"
                            };
                            let i = [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))];
                            return {
                                widths: i,
                                kind: "x"
                            }
                        }(t, o, l), c = u.length - 1;
                        return {
                            sizes: l || "w" !== s ? l : "100vw",
                            srcSet: u.map((e, r) => "".concat(a({
                                config: t,
                                src: n,
                                quality: i,
                                width: e
                            }), " ").concat("w" === s ? e : r + 1).concat(s)).join(", "),
                            src: a({
                                config: t,
                                src: n,
                                quality: i,
                                width: u[c]
                            })
                        }
                    }({
                        config: H,
                        src: g,
                        unoptimized: w,
                        width: W,
                        quality: Z,
                        sizes: b,
                        loader: q
                    }), er = g, eo = (0, a.useRef)(M);
                    (0, a.useEffect)(() => {
                        eo.current = M
                    }, [M]);
                    let ei = (0, a.useRef)(P);
                    (0, a.useEffect)(() => {
                        ei.current = P
                    }, [P]);
                    let el = r._({
                        isLazy: V,
                        imgAttributes: en,
                        heightInt: Q,
                        widthInt: W,
                        qualityInt: Z,
                        className: S,
                        imgStyle: ee,
                        blurStyle: et,
                        loading: E,
                        config: H,
                        fetchPriority: L,
                        fill: O,
                        unoptimized: w,
                        placeholder: C,
                        loader: q,
                        srcString: er,
                        onLoadRef: eo,
                        onLoadingCompleteRef: ei,
                        setBlurComplete: J,
                        setShowAltText: Y
                    }, $);
                    return a.default.createElement(a.default.Fragment, null, a.default.createElement(y, r._({}, el, {
                        ref: t
                    })), x ? a.default.createElement(u.default, null, a.default.createElement("link", r._({
                        key: "__nimg-" + en.src + en.srcSet + en.sizes,
                        rel: "preload",
                        as: "image",
                        href: en.srcSet ? void 0 : en.src,
                        imageSrcSet: en.srcSet,
                        imageSizes: en.sizes,
                        crossOrigin: $.crossOrigin
                    }, v(L)))) : null)
                }),
                w = b;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        95569: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return x
                }
            });
            let r = n(34788),
                o = n(38754),
                i = n(20224),
                l = o._(n(67294)),
                a = n(14532),
                u = n(83353),
                s = n(61410),
                c = n(79064),
                f = n(370),
                d = n(69955),
                p = n(24224),
                h = n(80508),
                m = n(81516),
                g = n(64266),
                v = new Set;

            function y(e, t, n, r, o) {
                if (o || (0, u.isLocalURL)(t)) {
                    if (!r.bypassPrefetchedCheck) {
                        let o = void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0,
                            i = t + "%" + n + "%" + o;
                        if (v.has(i)) return;
                        v.add(i)
                    }
                    Promise.resolve(e.prefetch(t, n, r)).catch(e => {})
                }
            }

            function b(e) {
                return "string" == typeof e ? e : (0, s.formatUrl)(e)
            }
            let w = l.default.forwardRef(function(e, t) {
                    let n, o;
                    let {
                        href: s,
                        as: v,
                        children: w,
                        prefetch: x,
                        passHref: E,
                        replace: S,
                        shallow: I,
                        scroll: j,
                        locale: _,
                        onClick: O,
                        onMouseEnter: k,
                        onTouchStart: M,
                        legacyBehavior: P = !1
                    } = e, C = i._(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                    n = w, P && ("string" == typeof n || "number" == typeof n) && (n = l.default.createElement("a", null, n));
                    let R = !1 !== x,
                        L = l.default.useContext(d.RouterContext),
                        F = l.default.useContext(p.AppRouterContext),
                        T = null != L ? L : F,
                        N = !L,
                        {
                            href: A,
                            as: D
                        } = l.default.useMemo(() => {
                            if (!L) {
                                let e = b(s);
                                return {
                                    href: e,
                                    as: v ? b(v) : e
                                }
                            }
                            let [e, t] = (0, a.resolveHref)(L, s, !0);
                            return {
                                href: e,
                                as: v ? (0, a.resolveHref)(L, v) : t || e
                            }
                        }, [L, s, v]),
                        z = l.default.useRef(A),
                        U = l.default.useRef(D);
                    P && (o = l.default.Children.only(n));
                    let H = P ? o && "object" == typeof o && o.ref : t,
                        [$, q, B] = (0, h.useIntersection)({
                            rootMargin: "200px"
                        }),
                        K = l.default.useCallback(e => {
                            (U.current !== D || z.current !== A) && (B(), U.current = D, z.current = A), $(e), H && ("function" == typeof H ? H(e) : "object" == typeof H && (H.current = e))
                        }, [D, H, A, B, $]);
                    l.default.useEffect(() => {
                        T && q && R && y(T, A, D, {
                            locale: _
                        }, N)
                    }, [D, A, q, _, R, null == L ? void 0 : L.locale, T, N]);
                    let W = {
                        ref: K,
                        onClick(e) {
                            P || "function" != typeof O || O(e), P && o.props && "function" == typeof o.props.onClick && o.props.onClick(e), T && !e.defaultPrevented && function(e, t, n, r, o, i, a, s, c, f) {
                                let {
                                    nodeName: d
                                } = e.currentTarget, p = "A" === d.toUpperCase();
                                if (p && (function(e) {
                                        let t = e.currentTarget,
                                            n = t.getAttribute("target");
                                        return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                    }(e) || !c && !(0, u.isLocalURL)(n))) return;
                                e.preventDefault();
                                let h = () => {
                                    "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                                        shallow: i,
                                        locale: s,
                                        scroll: a
                                    }) : t[o ? "replace" : "push"](r || n, {
                                        forceOptimisticNavigation: !f
                                    })
                                };
                                c ? l.default.startTransition(h) : h()
                            }(e, T, A, D, S, I, j, _, N, R)
                        },
                        onMouseEnter(e) {
                            P || "function" != typeof k || k(e), P && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), T && (R || !N) && y(T, A, D, {
                                locale: _,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, N)
                        },
                        onTouchStart(e) {
                            P || "function" != typeof M || M(e), P && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), T && (R || !N) && y(T, A, D, {
                                locale: _,
                                priority: !0,
                                bypassPrefetchedCheck: !0
                            }, N)
                        }
                    };
                    if ((0, c.isAbsoluteUrl)(D)) W.href = D;
                    else if (!P || E || "a" === o.type && !("href" in o.props)) {
                        let e = void 0 !== _ ? _ : null == L ? void 0 : L.locale,
                            t = (null == L ? void 0 : L.isLocaleDomain) && (0, m.getDomainLocale)(D, e, null == L ? void 0 : L.locales, null == L ? void 0 : L.domainLocales);
                        W.href = t || (0, g.addBasePath)((0, f.addLocale)(D, e, null == L ? void 0 : L.defaultLocale))
                    }
                    return P ? l.default.cloneElement(o, W) : l.default.createElement("a", r._({}, C, W), n)
                }),
                x = w;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        13162: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeLocalePath", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = (e, t) => n(34842).normalizeLocalePath(e, t);
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        80508: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useIntersection", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(67294),
                o = n(10029),
                i = "function" == typeof IntersectionObserver,
                l = new Map,
                a = [];

            function u(e) {
                let {
                    rootRef: t,
                    rootMargin: n,
                    disabled: u
                } = e, s = u || !i, [c, f] = (0, r.useState)(!1), d = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                    d.current = e
                }, []);
                (0, r.useEffect)(() => {
                    if (i) {
                        if (s || c) return;
                        let e = d.current;
                        if (e && e.tagName) {
                            let r = function(e, t, n) {
                                let {
                                    id: r,
                                    observer: o,
                                    elements: i
                                } = function(e) {
                                    let t;
                                    let n = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        r = a.find(e => e.root === n.root && e.margin === n.margin);
                                    if (r && (t = l.get(r))) return t;
                                    let o = new Map,
                                        i = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = o.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            })
                                        }, e);
                                    return t = {
                                        id: n,
                                        observer: i,
                                        elements: o
                                    }, a.push(n), l.set(n, t), t
                                }(n);
                                return i.set(e, t), o.observe(e),
                                    function() {
                                        if (i.delete(e), o.unobserve(e), 0 === i.size) {
                                            o.disconnect(), l.delete(r);
                                            let e = a.findIndex(e => e.root === r.root && e.margin === r.margin);
                                            e > -1 && a.splice(e, 1)
                                        }
                                    }
                            }(e, e => e && f(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: n
                            });
                            return r
                        }
                    } else if (!c) {
                        let e = (0, o.requestIdleCallback)(() => f(!0));
                        return () => (0, o.cancelIdleCallback)(e)
                    }
                }, [s, n, t, c, d.current]);
                let h = (0, r.useCallback)(() => {
                    f(!1)
                }, []);
                return [p, c, h]
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        97757: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: r,
                    blurHeight: o,
                    blurDataURL: i,
                    objectFit: l
                } = e, a = r || t, u = o || n, s = i.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                return a && u ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a, " ").concat(u, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r && o ? "1" : "20", "'/%3E").concat(s, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain" === l ? "xMidYMid" : "cover" === l ? "xMidYMid slice" : "none", "' x='0' y='0' height='100%25' width='100%25' href='").concat(i, "'/%3E%3C/svg%3E")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return n
                }
            })
        },
        57746: function(e, t) {
            "use strict";

            function n(e) {
                let {
                    config: t,
                    src: n,
                    width: r,
                    quality: o
                } = e;
                return "".concat(t.path, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(o || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n.__next_img_default = !0;
            let r = n
        },
        9008: function(e, t, n) {
            e.exports = n(42636)
        },
        25675: function(e, t, n) {
            e.exports = n(93740)
        },
        41664: function(e, t, n) {
            e.exports = n(95569)
        },
        95746: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return eg
                }
            });
            var r, o, i, l, a, u, s, c, f, d, p, h, m, g, v = n(67294);

            function y(e, t, ...n) {
                if (e in t) {
                    let r = t[e];
                    return "function" == typeof r ? r(...n) : r
                }
                let r = Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);
                throw Error.captureStackTrace && Error.captureStackTrace(r, y), r
            }

            function b(...e) {
                return e.filter(Boolean).join(" ")
            }
            var w = ((r = w || {})[r.None = 0] = "None", r[r.RenderStrategy = 1] = "RenderStrategy", r[r.Static = 2] = "Static", r),
                x = ((o = x || {})[o.Unmount = 0] = "Unmount", o[o.Hidden = 1] = "Hidden", o);

            function E({
                ourProps: e,
                theirProps: t,
                slot: n,
                defaultTag: r,
                features: o,
                visible: i = !0,
                name: l
            }) {
                let a = I(t, e);
                if (i) return S(a, n, r, l);
                let u = null != o ? o : 0;
                if (2 & u) {
                    let {
                        static: e = !1,
                        ...t
                    } = a;
                    if (e) return S(t, n, r, l)
                }
                if (1 & u) {
                    let {
                        unmount: e = !0,
                        ...t
                    } = a;
                    return y(e ? 0 : 1, {
                        0: () => null,
                        1: () => S({ ...t,
                            hidden: !0,
                            style: {
                                display: "none"
                            }
                        }, n, r, l)
                    })
                }
                return S(a, n, r, l)
            }

            function S(e, t = {}, n, r) {
                let {
                    as: o = n,
                    children: i,
                    refName: l = "ref",
                    ...a
                } = O(e, ["unmount", "static"]), u = void 0 !== e.ref ? {
                    [l]: e.ref
                } : {}, s = "function" == typeof i ? i(t) : i;
                "className" in a && a.className && "function" == typeof a.className && (a.className = a.className(t));
                let c = {};
                if (t) {
                    let e = !1,
                        n = [];
                    for (let [r, o] of Object.entries(t)) "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
                    e && (c["data-headlessui-state"] = n.join(" "))
                }
                if (o === v.Fragment && Object.keys(_(a)).length > 0) {
                    if (!(0, v.isValidElement)(s) || Array.isArray(s) && s.length > 1) throw Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(a).map(e => `  - ${e}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(e => `  - ${e}`).join(`
`)].join(`
`));
                    let e = s.props,
                        t = "function" == typeof(null == e ? void 0 : e.className) ? (...t) => b(null == e ? void 0 : e.className(...t), a.className) : b(null == e ? void 0 : e.className, a.className);
                    return (0, v.cloneElement)(s, Object.assign({}, I(s.props, _(O(a, ["ref"]))), c, u, function(...e) {
                        return {
                            ref: e.every(e => null == e) ? void 0 : t => {
                                for (let n of e) null != n && ("function" == typeof n ? n(t) : n.current = t)
                            }
                        }
                    }(s.ref, u.ref), t ? {
                        className: t
                    } : {}))
                }
                return (0, v.createElement)(o, Object.assign({}, O(a, ["ref"]), o !== v.Fragment && u, o !== v.Fragment && c), s)
            }

            function I(...e) {
                if (0 === e.length) return {};
                if (1 === e.length) return e[0];
                let t = {},
                    n = {};
                for (let r of e)
                    for (let e in r) e.startsWith("on") && "function" == typeof r[e] ? (null != n[e] || (n[e] = []), n[e].push(r[e])) : t[e] = r[e];
                if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(e => [e, void 0])));
                for (let e in n) Object.assign(t, {
                    [e](t, ...r) {
                        for (let o of n[e]) {
                            if ((t instanceof Event || (null == t ? void 0 : t.nativeEvent) instanceof Event) && t.defaultPrevented) return;
                            o(t, ...r)
                        }
                    }
                });
                return t
            }

            function j(e) {
                var t;
                return Object.assign((0, v.forwardRef)(e), {
                    displayName: null != (t = e.displayName) ? t : e.name
                })
            }

            function _(e) {
                let t = Object.assign({}, e);
                for (let e in t) void 0 === t[e] && delete t[e];
                return t
            }

            function O(e, t = []) {
                let n = Object.assign({}, e);
                for (let e of t) e in n && delete n[e];
                return n
            }

            function k() {
                let e = [],
                    t = {
                        addEventListener: (e, n, r, o) => (e.addEventListener(n, r, o), t.add(() => e.removeEventListener(n, r, o))),
                        requestAnimationFrame(...e) {
                            let n = requestAnimationFrame(...e);
                            return t.add(() => cancelAnimationFrame(n))
                        },
                        nextFrame: (...e) => t.requestAnimationFrame(() => t.requestAnimationFrame(...e)),
                        setTimeout(...e) {
                            let n = setTimeout(...e);
                            return t.add(() => clearTimeout(n))
                        },
                        microTask(...e) {
                            var n;
                            let r = {
                                current: !0
                            };
                            return n = () => {
                                r.current && e[0]()
                            }, "function" == typeof queueMicrotask ? queueMicrotask(n) : Promise.resolve().then(n).catch(e => setTimeout(() => {
                                throw e
                            })), t.add(() => {
                                r.current = !1
                            })
                        },
                        style(e, t, n) {
                            let r = e.style.getPropertyValue(t);
                            return Object.assign(e.style, {
                                [t]: n
                            }), this.add(() => {
                                Object.assign(e.style, {
                                    [t]: r
                                })
                            })
                        },
                        group(e) {
                            let t = k();
                            return e(t), this.add(() => t.dispose())
                        },
                        add: t => (e.push(t), () => {
                            let n = e.indexOf(t);
                            if (n >= 0)
                                for (let t of e.splice(n, 1)) t()
                        }),
                        dispose() {
                            for (let t of e.splice(0)) t()
                        }
                    };
                return t
            }

            function M() {
                let [e] = (0, v.useState)(k);
                return (0, v.useEffect)(() => () => e.dispose(), [e]), e
            }
            var P = Object.defineProperty,
                C = (e, t, n) => t in e ? P(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                R = (e, t, n) => (C(e, "symbol" != typeof t ? t + "" : t, n), n);
            let L = new class {
                    constructor() {
                        R(this, "current", this.detect()), R(this, "handoffState", "pending"), R(this, "currentId", 0)
                    }
                    set(e) {
                        this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e)
                    }
                    reset() {
                        this.set(this.detect())
                    }
                    nextId() {
                        return ++this.currentId
                    }
                    get isServer() {
                        return "server" === this.current
                    }
                    get isClient() {
                        return "client" === this.current
                    }
                    detect() {
                        return "undefined" == typeof window || "undefined" == typeof document ? "server" : "client"
                    }
                    handoff() {
                        "pending" === this.handoffState && (this.handoffState = "complete")
                    }
                    get isHandoffComplete() {
                        return "complete" === this.handoffState
                    }
                },
                F = (e, t) => {
                    L.isServer ? (0, v.useEffect)(e, t) : (0, v.useLayoutEffect)(e, t)
                };

            function T(e) {
                let t = (0, v.useRef)(e);
                return F(() => {
                    t.current = e
                }, [e]), t
            }
            let N = function(e) {
                    let t = T(e);
                    return v.useCallback((...e) => t.current(...e), [t])
                },
                A = Symbol();

            function D(...e) {
                let t = (0, v.useRef)(e);
                (0, v.useEffect)(() => {
                    t.current = e
                }, [e]);
                let n = N(e => {
                    for (let n of t.current) null != n && ("function" == typeof n ? n(e) : n.current = e)
                });
                return e.every(e => null == e || (null == e ? void 0 : e[A])) ? void 0 : n
            }
            let z = null != (g = v.useId) ? g : function() {
                let e = function() {
                        let [e, t] = (0, v.useState)(L.isHandoffComplete);
                        return e && !1 === L.isHandoffComplete && t(!1), (0, v.useEffect)(() => {
                            !0 !== e && t(!0)
                        }, [e]), (0, v.useEffect)(() => L.handoff(), []), e
                    }(),
                    [t, n] = v.useState(e ? () => L.nextId() : null);
                return F(() => {
                    null === t && n(L.nextId())
                }, [t]), null != t ? "" + t : void 0
            };
            var U = ((i = U || {}).Space = " ", i.Enter = "Enter", i.Escape = "Escape", i.Backspace = "Backspace", i.Delete = "Delete", i.ArrowLeft = "ArrowLeft", i.ArrowUp = "ArrowUp", i.ArrowRight = "ArrowRight", i.ArrowDown = "ArrowDown", i.Home = "Home", i.End = "End", i.PageUp = "PageUp", i.PageDown = "PageDown", i.Tab = "Tab", i),
                H = ((l = H || {})[l.First = 0] = "First", l[l.Previous = 1] = "Previous", l[l.Next = 2] = "Next", l[l.Last = 3] = "Last", l[l.Specific = 4] = "Specific", l[l.Nothing = 5] = "Nothing", l);

            function $(e) {
                return L.isServer ? null : e instanceof Node ? e.ownerDocument : null != e && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
            }
            let q = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
            var B = ((a = B || {})[a.First = 1] = "First", a[a.Previous = 2] = "Previous", a[a.Next = 4] = "Next", a[a.Last = 8] = "Last", a[a.WrapAround = 16] = "WrapAround", a[a.NoScroll = 32] = "NoScroll", a),
                K = ((u = K || {})[u.Error = 0] = "Error", u[u.Overflow = 1] = "Overflow", u[u.Success = 2] = "Success", u[u.Underflow = 3] = "Underflow", u),
                W = ((s = W || {})[s.Previous = -1] = "Previous", s[s.Next = 1] = "Next", s);

            function Q(e = document.body) {
                return null == e ? [] : Array.from(e.querySelectorAll(q)).sort((e, t) => Math.sign((e.tabIndex || Number.MAX_SAFE_INTEGER) - (t.tabIndex || Number.MAX_SAFE_INTEGER)))
            }
            var V = ((c = V || {})[c.Strict = 0] = "Strict", c[c.Loose = 1] = "Loose", c);

            function G(e, t = 0) {
                var n;
                return e !== (null == (n = $(e)) ? void 0 : n.body) && y(t, {
                    0: () => e.matches(q),
                    1() {
                        let t = e;
                        for (; null !== t;) {
                            if (t.matches(q)) return !0;
                            t = t.parentElement
                        }
                        return !1
                    }
                })
            }

            function J(e) {
                let t = $(e);
                k().nextFrame(() => {
                    t && !G(t.activeElement, 0) && (null == e || e.focus({
                        preventScroll: !0
                    }))
                })
            }
            var X = ((f = X || {})[f.Keyboard = 0] = "Keyboard", f[f.Mouse = 1] = "Mouse", f);

            function Y(e, t = e => e) {
                return e.slice().sort((e, n) => {
                    let r = t(e),
                        o = t(n);
                    if (null === r || null === o) return 0;
                    let i = r.compareDocumentPosition(o);
                    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
                })
            }

            function Z(e, t, n) {
                let r = T(t);
                (0, v.useEffect)(() => {
                    function t(e) {
                        r.current(e)
                    }
                    return document.addEventListener(e, t, n), () => document.removeEventListener(e, t, n)
                }, [e, n])
            }
            "undefined" != typeof window && "undefined" != typeof document && (document.addEventListener("keydown", e => {
                e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0), document.addEventListener("click", e => {
                1 === e.detail ? delete document.documentElement.dataset.headlessuiFocusVisible : 0 === e.detail && (document.documentElement.dataset.headlessuiFocusVisible = "")
            }, !0));
            let ee = (0, v.createContext)(null);
            ee.displayName = "OpenClosedContext";
            var et = ((d = et || {})[d.Open = 1] = "Open", d[d.Closed = 2] = "Closed", d[d.Closing = 4] = "Closing", d[d.Opening = 8] = "Opening", d);

            function en({
                value: e,
                children: t
            }) {
                return v.createElement(ee.Provider, {
                    value: e
                }, t)
            }

            function er(e) {
                var t;
                if (e.type) return e.type;
                let n = null != (t = e.as) ? t : "button";
                if ("string" == typeof n && "button" === n.toLowerCase()) return "button"
            }

            function eo(e) {
                return [e.screenX, e.screenY]
            }
            var ei = ((p = ei || {})[p.Open = 0] = "Open", p[p.Closed = 1] = "Closed", p),
                el = ((h = el || {})[h.Pointer = 0] = "Pointer", h[h.Other = 1] = "Other", h),
                ea = ((m = ea || {})[m.OpenMenu = 0] = "OpenMenu", m[m.CloseMenu = 1] = "CloseMenu", m[m.GoToItem = 2] = "GoToItem", m[m.Search = 3] = "Search", m[m.ClearSearch = 4] = "ClearSearch", m[m.RegisterItem = 5] = "RegisterItem", m[m.UnregisterItem = 6] = "UnregisterItem", m);

            function eu(e, t = e => e) {
                let n = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
                    r = Y(t(e.items.slice()), e => e.dataRef.current.domRef.current),
                    o = n ? r.indexOf(n) : null;
                return -1 === o && (o = null), {
                    items: r,
                    activeItemIndex: o
                }
            }
            let es = {
                    1: e => 1 === e.menuState ? e : { ...e,
                        activeItemIndex: null,
                        menuState: 1
                    },
                    0: e => 0 === e.menuState ? e : { ...e,
                        menuState: 0
                    },
                    2: (e, t) => {
                        var n;
                        let r = eu(e),
                            o = function(e, t) {
                                let n = t.resolveItems();
                                if (n.length <= 0) return null;
                                let r = t.resolveActiveIndex(),
                                    o = null != r ? r : -1,
                                    i = (() => {
                                        switch (e.focus) {
                                            case 0:
                                                return n.findIndex(e => !t.resolveDisabled(e));
                                            case 1:
                                                {
                                                    let e = n.slice().reverse().findIndex((e, n, r) => (-1 === o || !(r.length - n - 1 >= o)) && !t.resolveDisabled(e));
                                                    return -1 === e ? e : n.length - 1 - e
                                                }
                                            case 2:
                                                return n.findIndex((e, n) => !(n <= o) && !t.resolveDisabled(e));
                                            case 3:
                                                {
                                                    let e = n.slice().reverse().findIndex(e => !t.resolveDisabled(e));
                                                    return -1 === e ? e : n.length - 1 - e
                                                }
                                            case 4:
                                                return n.findIndex(n => t.resolveId(n) === e.id);
                                            case 5:
                                                return null;
                                            default:
                                                ! function(e) {
                                                    throw Error("Unexpected object: " + e)
                                                }(e)
                                        }
                                    })();
                                return -1 === i ? r : i
                            }(t, {
                                resolveItems: () => r.items,
                                resolveActiveIndex: () => r.activeItemIndex,
                                resolveId: e => e.id,
                                resolveDisabled: e => e.dataRef.current.disabled
                            });
                        return { ...e,
                            ...r,
                            searchQuery: "",
                            activeItemIndex: o,
                            activationTrigger: null != (n = t.trigger) ? n : 1
                        }
                    },
                    3: (e, t) => {
                        let n = "" !== e.searchQuery ? 0 : 1,
                            r = e.searchQuery + t.value.toLowerCase(),
                            o = (null !== e.activeItemIndex ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find(e => {
                                var t;
                                return (null == (t = e.dataRef.current.textValue) ? void 0 : t.startsWith(r)) && !e.dataRef.current.disabled
                            }),
                            i = o ? e.items.indexOf(o) : -1;
                        return -1 === i || i === e.activeItemIndex ? { ...e,
                            searchQuery: r
                        } : { ...e,
                            searchQuery: r,
                            activeItemIndex: i,
                            activationTrigger: 1
                        }
                    },
                    4: e => "" === e.searchQuery ? e : { ...e,
                        searchQuery: "",
                        searchActiveItemIndex: null
                    },
                    5: (e, t) => {
                        let n = eu(e, e => [...e, {
                            id: t.id,
                            dataRef: t.dataRef
                        }]);
                        return { ...e,
                            ...n
                        }
                    },
                    6: (e, t) => {
                        let n = eu(e, e => {
                            let n = e.findIndex(e => e.id === t.id);
                            return -1 !== n && e.splice(n, 1), e
                        });
                        return { ...e,
                            ...n,
                            activationTrigger: 1
                        }
                    }
                },
                ec = (0, v.createContext)(null);

            function ef(e) {
                let t = (0, v.useContext)(ec);
                if (null === t) {
                    let t = Error(`<${e} /> is missing a parent <Menu /> component.`);
                    throw Error.captureStackTrace && Error.captureStackTrace(t, ef), t
                }
                return t
            }

            function ed(e, t) {
                return y(t.type, es, e, t)
            }
            ec.displayName = "MenuContext";
            let ep = v.Fragment,
                eh = w.RenderStrategy | w.Static,
                em = v.Fragment,
                eg = Object.assign(j(function(e, t) {
                    let n = (0, v.useReducer)(ed, {
                            menuState: 1,
                            buttonRef: (0, v.createRef)(),
                            itemsRef: (0, v.createRef)(),
                            items: [],
                            searchQuery: "",
                            activeItemIndex: null,
                            activationTrigger: 1
                        }),
                        [{
                            menuState: r,
                            itemsRef: o,
                            buttonRef: i
                        }, l] = n,
                        a = D(t);
                    ! function(e, t, n = !0) {
                        let r = (0, v.useRef)(!1);

                        function o(n, o) {
                            if (!r.current || n.defaultPrevented) return;
                            let i = function e(t) {
                                    return "function" == typeof t ? e(t()) : Array.isArray(t) || t instanceof Set ? t : [t]
                                }(e),
                                l = o(n);
                            if (null !== l && l.getRootNode().contains(l)) {
                                for (let e of i) {
                                    if (null === e) continue;
                                    let t = e instanceof HTMLElement ? e : e.current;
                                    if (null != t && t.contains(l) || n.composed && n.composedPath().includes(t)) return
                                }
                                return G(l, V.Loose) || -1 === l.tabIndex || n.preventDefault(), t(n, l)
                            }
                        }(0, v.useEffect)(() => {
                            requestAnimationFrame(() => {
                                r.current = n
                            })
                        }, [n]);
                        let i = (0, v.useRef)(null);
                        Z("mousedown", e => {
                            var t, n;
                            r.current && (i.current = (null == (n = null == (t = e.composedPath) ? void 0 : t.call(e)) ? void 0 : n[0]) || e.target)
                        }, !0), Z("click", e => {
                            i.current && (o(e, () => i.current), i.current = null)
                        }, !0), Z("blur", e => o(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
                    }([i, o], (e, t) => {
                        var n;
                        l({
                            type: 1
                        }), G(t, V.Loose) || (e.preventDefault(), null == (n = i.current) || n.focus())
                    }, 0 === r);
                    let u = N(() => {
                            l({
                                type: 1
                            })
                        }),
                        s = (0, v.useMemo)(() => ({
                            open: 0 === r,
                            close: u
                        }), [r, u]);
                    return v.createElement(ec.Provider, {
                        value: n
                    }, v.createElement(en, {
                        value: y(r, {
                            0: et.Open,
                            1: et.Closed
                        })
                    }, E({
                        ourProps: {
                            ref: a
                        },
                        theirProps: e,
                        slot: s,
                        defaultTag: ep,
                        name: "Menu"
                    })))
                }), {
                    Button: j(function(e, t) {
                        var n;
                        let r = z(),
                            {
                                id: o = `headlessui-menu-button-${r}`,
                                ...i
                            } = e,
                            [l, a] = ef("Menu.Button"),
                            u = D(l.buttonRef, t),
                            s = M(),
                            c = N(e => {
                                switch (e.key) {
                                    case U.Space:
                                    case U.Enter:
                                    case U.ArrowDown:
                                        e.preventDefault(), e.stopPropagation(), a({
                                            type: 0
                                        }), s.nextFrame(() => a({
                                            type: 2,
                                            focus: H.First
                                        }));
                                        break;
                                    case U.ArrowUp:
                                        e.preventDefault(), e.stopPropagation(), a({
                                            type: 0
                                        }), s.nextFrame(() => a({
                                            type: 2,
                                            focus: H.Last
                                        }))
                                }
                            }),
                            f = N(e => {
                                e.key === U.Space && e.preventDefault()
                            }),
                            d = N(t => {
                                if (function(e) {
                                        let t = e.parentElement,
                                            n = null;
                                        for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
                                        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
                                        return !(r && function(e) {
                                            if (!e) return !1;
                                            let t = e.previousElementSibling;
                                            for (; null !== t;) {
                                                if (t instanceof HTMLLegendElement) return !1;
                                                t = t.previousElementSibling
                                            }
                                            return !0
                                        }(n)) && r
                                    }(t.currentTarget)) return t.preventDefault();
                                e.disabled || (0 === l.menuState ? (a({
                                    type: 1
                                }), s.nextFrame(() => {
                                    var e;
                                    return null == (e = l.buttonRef.current) ? void 0 : e.focus({
                                        preventScroll: !0
                                    })
                                })) : (t.preventDefault(), a({
                                    type: 0
                                })))
                            }),
                            p = (0, v.useMemo)(() => ({
                                open: 0 === l.menuState
                            }), [l]);
                        return E({
                            ourProps: {
                                ref: u,
                                id: o,
                                type: function(e, t) {
                                    let [n, r] = (0, v.useState)(() => er(e));
                                    return F(() => {
                                        r(er(e))
                                    }, [e.type, e.as]), F(() => {
                                        n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
                                    }, [n, t]), n
                                }(e, l.buttonRef),
                                "aria-haspopup": "menu",
                                "aria-controls": null == (n = l.itemsRef.current) ? void 0 : n.id,
                                "aria-expanded": e.disabled ? void 0 : 0 === l.menuState,
                                onKeyDown: c,
                                onKeyUp: f,
                                onClick: d
                            },
                            theirProps: i,
                            slot: p,
                            defaultTag: "button",
                            name: "Menu.Button"
                        })
                    }),
                    Items: j(function(e, t) {
                        var n, r;
                        let o = z(),
                            {
                                id: i = `headlessui-menu-items-${o}`,
                                ...l
                            } = e,
                            [a, u] = ef("Menu.Items"),
                            s = D(a.itemsRef, t),
                            c = function(...e) {
                                return (0, v.useMemo)(() => $(...e), [...e])
                            }(a.itemsRef),
                            f = M(),
                            d = (0, v.useContext)(ee),
                            p = null !== d ? (d & et.Open) === et.Open : 0 === a.menuState;
                        (0, v.useEffect)(() => {
                            let e = a.itemsRef.current;
                            e && 0 === a.menuState && e !== (null == c ? void 0 : c.activeElement) && e.focus({
                                preventScroll: !0
                            })
                        }, [a.menuState, a.itemsRef, c]),
                        function({
                            container: e,
                            accept: t,
                            walk: n,
                            enabled: r = !0
                        }) {
                            let o = (0, v.useRef)(t),
                                i = (0, v.useRef)(n);
                            (0, v.useEffect)(() => {
                                o.current = t, i.current = n
                            }, [t, n]), F(() => {
                                if (!e || !r) return;
                                let t = $(e);
                                if (!t) return;
                                let n = o.current,
                                    l = i.current,
                                    a = Object.assign(e => n(e), {
                                        acceptNode: n
                                    }),
                                    u = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, a, !1);
                                for (; u.nextNode();) l(u.currentNode)
                            }, [e, r, o, i])
                        }({
                            container: a.itemsRef.current,
                            enabled: 0 === a.menuState,
                            accept: e => "menuitem" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                            walk(e) {
                                e.setAttribute("role", "none")
                            }
                        });
                        let h = N(e => {
                                var t, n;
                                switch (f.dispose(), e.key) {
                                    case U.Space:
                                        if ("" !== a.searchQuery) return e.preventDefault(), e.stopPropagation(), u({
                                            type: 3,
                                            value: e.key
                                        });
                                    case U.Enter:
                                        if (e.preventDefault(), e.stopPropagation(), u({
                                                type: 1
                                            }), null !== a.activeItemIndex) {
                                            let {
                                                dataRef: e
                                            } = a.items[a.activeItemIndex];
                                            null == (n = null == (t = e.current) ? void 0 : t.domRef.current) || n.click()
                                        }
                                        J(a.buttonRef.current);
                                        break;
                                    case U.ArrowDown:
                                        return e.preventDefault(), e.stopPropagation(), u({
                                            type: 2,
                                            focus: H.Next
                                        });
                                    case U.ArrowUp:
                                        return e.preventDefault(), e.stopPropagation(), u({
                                            type: 2,
                                            focus: H.Previous
                                        });
                                    case U.Home:
                                    case U.PageUp:
                                        return e.preventDefault(), e.stopPropagation(), u({
                                            type: 2,
                                            focus: H.First
                                        });
                                    case U.End:
                                    case U.PageDown:
                                        return e.preventDefault(), e.stopPropagation(), u({
                                            type: 2,
                                            focus: H.Last
                                        });
                                    case U.Escape:
                                        e.preventDefault(), e.stopPropagation(), u({
                                            type: 1
                                        }), k().nextFrame(() => {
                                            var e;
                                            return null == (e = a.buttonRef.current) ? void 0 : e.focus({
                                                preventScroll: !0
                                            })
                                        });
                                        break;
                                    case U.Tab:
                                        e.preventDefault(), e.stopPropagation(), u({
                                            type: 1
                                        }), k().nextFrame(() => {
                                            var t, n;
                                            t = a.buttonRef.current, n = e.shiftKey ? B.Previous : B.Next,
                                                function(e, t, {
                                                    sorted: n = !0,
                                                    relativeTo: r = null,
                                                    skipElements: o = []
                                                } = {}) {
                                                    var i, l, a;
                                                    let u = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
                                                        s = Array.isArray(e) ? n ? Y(e) : e : Q(e);
                                                    o.length > 0 && s.length > 1 && (s = s.filter(e => !o.includes(e))), r = null != r ? r : u.activeElement;
                                                    let c = (() => {
                                                            if (5 & t) return 1;
                                                            if (10 & t) return -1;
                                                            throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                                                        })(),
                                                        f = (() => {
                                                            if (1 & t) return 0;
                                                            if (2 & t) return Math.max(0, s.indexOf(r)) - 1;
                                                            if (4 & t) return Math.max(0, s.indexOf(r)) + 1;
                                                            if (8 & t) return s.length - 1;
                                                            throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
                                                        })(),
                                                        d = 32 & t ? {
                                                            preventScroll: !0
                                                        } : {},
                                                        p = 0,
                                                        h = s.length,
                                                        m;
                                                    do {
                                                        if (p >= h || p + h <= 0) return 0;
                                                        let e = f + p;
                                                        if (16 & t) e = (e + h) % h;
                                                        else {
                                                            if (e < 0) return 3;
                                                            if (e >= h) return 1
                                                        }
                                                        null == (m = s[e]) || m.focus(d), p += c
                                                    } while (m !== u.activeElement);
                                                    6 & t && null != (a = null == (l = null == (i = m) ? void 0 : i.matches) ? void 0 : l.call(i, "textarea,input")) && a && m.select()
                                                }(Q(), n, {
                                                    relativeTo: t
                                                })
                                        });
                                        break;
                                    default:
                                        1 === e.key.length && (u({
                                            type: 3,
                                            value: e.key
                                        }), f.setTimeout(() => u({
                                            type: 4
                                        }), 350))
                                }
                            }),
                            m = N(e => {
                                e.key === U.Space && e.preventDefault()
                            }),
                            g = (0, v.useMemo)(() => ({
                                open: 0 === a.menuState
                            }), [a]);
                        return E({
                            ourProps: {
                                "aria-activedescendant": null === a.activeItemIndex || null == (n = a.items[a.activeItemIndex]) ? void 0 : n.id,
                                "aria-labelledby": null == (r = a.buttonRef.current) ? void 0 : r.id,
                                id: i,
                                onKeyDown: h,
                                onKeyUp: m,
                                role: "menu",
                                tabIndex: 0,
                                ref: s
                            },
                            theirProps: l,
                            slot: g,
                            defaultTag: "div",
                            features: eh,
                            visible: p,
                            name: "Menu.Items"
                        })
                    }),
                    Item: j(function(e, t) {
                        let n, r = z(),
                            {
                                id: o = `headlessui-menu-item-${r}`,
                                disabled: i = !1,
                                ...l
                            } = e,
                            [a, u] = ef("Menu.Item"),
                            s = null !== a.activeItemIndex && a.items[a.activeItemIndex].id === o,
                            c = (0, v.useRef)(null),
                            f = D(t, c);
                        F(() => {
                            if (0 !== a.menuState || !s || 0 === a.activationTrigger) return;
                            let e = k();
                            return e.requestAnimationFrame(() => {
                                var e, t;
                                null == (t = null == (e = c.current) ? void 0 : e.scrollIntoView) || t.call(e, {
                                    block: "nearest"
                                })
                            }), e.dispose
                        }, [c, s, a.menuState, a.activationTrigger, a.activeItemIndex]);
                        let d = (0, v.useRef)({
                            disabled: i,
                            domRef: c
                        });
                        F(() => {
                            d.current.disabled = i
                        }, [d, i]), F(() => {
                            var e, t;
                            d.current.textValue = null == (t = null == (e = c.current) ? void 0 : e.textContent) ? void 0 : t.toLowerCase()
                        }, [d, c]), F(() => (u({
                            type: 5,
                            id: o,
                            dataRef: d
                        }), () => u({
                            type: 6,
                            id: o
                        })), [d, o]);
                        let p = N(() => {
                                u({
                                    type: 1
                                })
                            }),
                            h = N(e => {
                                if (i) return e.preventDefault();
                                u({
                                    type: 1
                                }), J(a.buttonRef.current)
                            }),
                            m = N(() => {
                                if (i) return u({
                                    type: 2,
                                    focus: H.Nothing
                                });
                                u({
                                    type: 2,
                                    focus: H.Specific,
                                    id: o
                                })
                            }),
                            g = (n = (0, v.useRef)([-1, -1]), {
                                wasMoved(e) {
                                    let t = eo(e);
                                    return (n.current[0] !== t[0] || n.current[1] !== t[1]) && (n.current = t, !0)
                                },
                                update(e) {
                                    n.current = eo(e)
                                }
                            }),
                            y = N(e => g.update(e)),
                            b = N(e => {
                                g.wasMoved(e) && (i || s || u({
                                    type: 2,
                                    focus: H.Specific,
                                    id: o,
                                    trigger: 0
                                }))
                            }),
                            w = N(e => {
                                g.wasMoved(e) && (i || s && u({
                                    type: 2,
                                    focus: H.Nothing
                                }))
                            }),
                            x = (0, v.useMemo)(() => ({
                                active: s,
                                disabled: i,
                                close: p
                            }), [s, i, p]);
                        return E({
                            ourProps: {
                                id: o,
                                ref: f,
                                role: "menuitem",
                                tabIndex: !0 === i ? void 0 : -1,
                                "aria-disabled": !0 === i || void 0,
                                disabled: void 0,
                                onClick: h,
                                onFocus: m,
                                onPointerEnter: y,
                                onMouseEnter: y,
                                onPointerMove: b,
                                onMouseMove: b,
                                onPointerLeave: w,
                                onMouseLeave: w
                            },
                            theirProps: l,
                            slot: x,
                            defaultTag: em,
                            name: "Menu.Item"
                        })
                    })
                })
        },
        1954: function(e, t, n) {
            "use strict";
            n.d(t, {
                JO: function() {
                    return ew
                }
            });
            var r = n(67294);
            let o = /^[a-z0-9]+(-[a-z0-9]+)*$/,
                i = (e, t, n, r = "") => {
                    let o = e.split(":");
                    if ("@" === e.slice(0, 1)) {
                        if (o.length < 2 || o.length > 3) return null;
                        r = o.shift().slice(1)
                    }
                    if (o.length > 3 || !o.length) return null;
                    if (o.length > 1) {
                        let e = o.pop(),
                            n = o.pop(),
                            i = {
                                provider: o.length > 0 ? o[0] : r,
                                prefix: n,
                                name: e
                            };
                        return t && !l(i) ? null : i
                    }
                    let i = o[0],
                        a = i.split("-");
                    if (a.length > 1) {
                        let e = {
                            provider: r,
                            prefix: a.shift(),
                            name: a.join("-")
                        };
                        return t && !l(e) ? null : e
                    }
                    if (n && "" === r) {
                        let e = {
                            provider: r,
                            prefix: "",
                            name: i
                        };
                        return t && !l(e, n) ? null : e
                    }
                    return null
                },
                l = (e, t) => !!e && !!(("" === e.provider || e.provider.match(o)) && (t && "" === e.prefix || e.prefix.match(o)) && e.name.match(o)),
                a = Object.freeze({
                    left: 0,
                    top: 0,
                    width: 16,
                    height: 16
                }),
                u = Object.freeze({
                    rotate: 0,
                    vFlip: !1,
                    hFlip: !1
                }),
                s = Object.freeze({ ...a,
                    ...u
                }),
                c = Object.freeze({ ...s,
                    body: "",
                    hidden: !1
                });

            function f(e, t) {
                let n = function(e, t) {
                    let n = {};
                    !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
                    let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
                    return r && (n.rotate = r), n
                }(e, t);
                for (let r in c) r in u ? r in e && !(r in n) && (n[r] = u[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
                return n
            }

            function d(e, t) {
                let n = [];
                if ("object" != typeof e || "object" != typeof e.icons) return n;
                e.not_found instanceof Array && e.not_found.forEach(e => {
                    t(e, null), n.push(e)
                });
                let r = function(e, t) {
                    let n = e.icons,
                        r = e.aliases || Object.create(null),
                        o = Object.create(null);
                    return Object.keys(n).concat(Object.keys(r)).forEach(function e(t) {
                        if (n[t]) return o[t] = [];
                        if (!(t in o)) {
                            o[t] = null;
                            let n = r[t] && r[t].parent,
                                i = n && e(n);
                            i && (o[t] = [n].concat(i))
                        }
                        return o[t]
                    }), o
                }(e);
                for (let o in r) {
                    let i = r[o];
                    i && (t(o, function(e, t, n) {
                        let r = e.icons,
                            o = e.aliases || Object.create(null),
                            i = {};

                        function l(e) {
                            i = f(r[e] || o[e], i)
                        }
                        return l(t), n.forEach(l), f(e, i)
                    }(e, o, i)), n.push(o))
                }
                return n
            }
            let p = {
                provider: "",
                aliases: {},
                not_found: {},
                ...a
            };

            function h(e, t) {
                for (let n in t)
                    if (n in e && typeof e[n] != typeof t[n]) return !1;
                return !0
            }

            function m(e) {
                if ("object" != typeof e || null === e || "string" != typeof e.prefix || !e.icons || "object" != typeof e.icons || !h(e, p)) return null;
                let t = e.icons;
                for (let e in t) {
                    let n = t[e];
                    if (!e.match(o) || "string" != typeof n.body || !h(n, c)) return null
                }
                let n = e.aliases || Object.create(null);
                for (let e in n) {
                    let r = n[e],
                        i = r.parent;
                    if (!e.match(o) || "string" != typeof i || !t[i] && !n[i] || !h(r, c)) return null
                }
                return e
            }
            let g = Object.create(null);

            function v(e, t) {
                let n = g[e] || (g[e] = Object.create(null));
                return n[t] || (n[t] = {
                    provider: e,
                    prefix: t,
                    icons: Object.create(null),
                    missing: new Set
                })
            }

            function y(e, t) {
                return m(t) ? d(t, (t, n) => {
                    n ? e.icons[t] = n : e.missing.add(t)
                }) : []
            }
            let b = !1;

            function w(e) {
                return "boolean" == typeof e && (b = e), b
            }
            let x = Object.freeze({
                    width: null,
                    height: null
                }),
                E = Object.freeze({ ...x,
                    ...u
                }),
                S = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
                I = /^-?[0-9.]*[0-9]+[0-9.]*$/g;

            function j(e, t, n) {
                if (1 === t) return e;
                if (n = n || 100, "number" == typeof e) return Math.ceil(e * t * n) / n;
                if ("string" != typeof e) return e;
                let r = e.split(S);
                if (null === r || !r.length) return e;
                let o = [],
                    i = r.shift(),
                    l = I.test(i);
                for (;;) {
                    if (l) {
                        let e = parseFloat(i);
                        isNaN(e) ? o.push(i) : o.push(Math.ceil(e * t * n) / n)
                    } else o.push(i);
                    if (void 0 === (i = r.shift())) return o.join("");
                    l = !l
                }
            }
            let _ = e => "unset" === e || "undefined" === e || "none" === e,
                O = /\sid="(\S+)"/g,
                k = "IconifyId" + Date.now().toString(16) + (16777216 * Math.random() | 0).toString(16),
                M = 0,
                P = Object.create(null);

            function C(e) {
                return P[e] || P[""]
            }

            function R(e) {
                let t;
                if ("string" == typeof e.resources) t = [e.resources];
                else if (!((t = e.resources) instanceof Array) || !t.length) return null;
                let n = {
                    resources: t,
                    path: e.path || "/",
                    maxURL: e.maxURL || 500,
                    rotate: e.rotate || 750,
                    timeout: e.timeout || 5e3,
                    random: !0 === e.random,
                    index: e.index || 0,
                    dataAfterTimeout: !1 !== e.dataAfterTimeout
                };
                return n
            }
            let L = Object.create(null),
                F = ["https://api.simplesvg.com", "https://api.unisvg.com"],
                T = [];
            for (; F.length > 0;) 1 === F.length ? T.push(F.shift()) : Math.random() > .5 ? T.push(F.shift()) : T.push(F.pop());
            L[""] = R({
                resources: ["https://api.iconify.design"].concat(T)
            });
            let N = (() => {
                    let e;
                    try {
                        if (e = fetch, "function" == typeof e) return e
                    } catch (e) {}
                })(),
                A = (e, t, n) => {
                    let r = [],
                        o = function(e, t) {
                            let n;
                            let r = L[e];
                            if (!r) return 0;
                            if (r.maxURL) {
                                let e = 0;
                                r.resources.forEach(t => {
                                    e = Math.max(e, t.length)
                                }), n = r.maxURL - e - r.path.length - (t + ".json?icons=").length
                            } else n = 0;
                            return n
                        }(e, t),
                        i = "icons",
                        l = {
                            type: i,
                            provider: e,
                            prefix: t,
                            icons: []
                        },
                        a = 0;
                    return n.forEach((n, u) => {
                        (a += n.length + 1) >= o && u > 0 && (r.push(l), l = {
                            type: i,
                            provider: e,
                            prefix: t,
                            icons: []
                        }, a = n.length), l.icons.push(n)
                    }), r.push(l), r
                },
                D = (e, t, n) => {
                    if (!N) {
                        n("abort", 424);
                        return
                    }
                    let r = function(e) {
                        if ("string" == typeof e) {
                            let t = L[e];
                            if (t) return t.path
                        }
                        return "/"
                    }(t.provider);
                    switch (t.type) {
                        case "icons":
                            {
                                let e = t.prefix,
                                    n = t.icons,
                                    o = n.join(","),
                                    i = new URLSearchParams({
                                        icons: o
                                    });r += e + ".json?" + i.toString();
                                break
                            }
                        case "custom":
                            {
                                let e = t.uri;r += "/" === e.slice(0, 1) ? e.slice(1) : e;
                                break
                            }
                        default:
                            n("abort", 400);
                            return
                    }
                    let o = 503;
                    N(e + r).then(e => {
                        let t = e.status;
                        if (200 !== t) {
                            setTimeout(() => {
                                n(404 === t ? "abort" : "next", t)
                            });
                            return
                        }
                        return o = 501, e.json()
                    }).then(e => {
                        if ("object" != typeof e || null === e) {
                            setTimeout(() => {
                                404 === e ? n("abort", e) : n("next", o)
                            });
                            return
                        }
                        setTimeout(() => {
                            n("success", e)
                        })
                    }).catch(() => {
                        n("next", o)
                    })
                };

            function z(e, t) {
                e.forEach(e => {
                    let n = e.loaderCallbacks;
                    n && (e.loaderCallbacks = n.filter(e => e.id !== t))
                })
            }
            let U = 0;
            var H = {
                resources: [],
                index: 0,
                timeout: 2e3,
                rotate: 750,
                random: !1,
                dataAfterTimeout: !1
            };

            function $(e) {
                let t = { ...H,
                        ...e
                    },
                    n = [];

                function r() {
                    n = n.filter(e => "pending" === e().status)
                }
                return {
                    query: function(e, o, i) {
                        let l = function(e, t, n, r) {
                            let o, i;
                            let l = e.resources.length,
                                a = e.random ? Math.floor(Math.random() * l) : e.index;
                            if (e.random) {
                                let t = e.resources.slice(0);
                                for (o = []; t.length > 1;) {
                                    let e = Math.floor(Math.random() * t.length);
                                    o.push(t[e]), t = t.slice(0, e).concat(t.slice(e + 1))
                                }
                                o = o.concat(t)
                            } else o = e.resources.slice(a).concat(e.resources.slice(0, a));
                            let u = Date.now(),
                                s = "pending",
                                c = 0,
                                f = null,
                                d = [],
                                p = [];

                            function h() {
                                f && (clearTimeout(f), f = null)
                            }

                            function m() {
                                "pending" === s && (s = "aborted"), h(), d.forEach(e => {
                                    "pending" === e.status && (e.status = "aborted")
                                }), d = []
                            }

                            function g(e, t) {
                                t && (p = []), "function" == typeof e && p.push(e)
                            }

                            function v() {
                                s = "failed", p.forEach(e => {
                                    e(void 0, i)
                                })
                            }

                            function y() {
                                d.forEach(e => {
                                    "pending" === e.status && (e.status = "aborted")
                                }), d = []
                            }
                            return "function" == typeof r && p.push(r), setTimeout(function r() {
                                    if ("pending" !== s) return;
                                    h();
                                    let l = o.shift();
                                    if (void 0 === l) {
                                        if (d.length) {
                                            f = setTimeout(() => {
                                                h(), "pending" === s && (y(), v())
                                            }, e.timeout);
                                            return
                                        }
                                        v();
                                        return
                                    }
                                    let a = {
                                        status: "pending",
                                        resource: l,
                                        callback: (t, n) => {
                                            ! function(t, n, l) {
                                                let a = "success" !== n;
                                                switch (d = d.filter(e => e !== t), s) {
                                                    case "pending":
                                                        break;
                                                    case "failed":
                                                        if (a || !e.dataAfterTimeout) return;
                                                        break;
                                                    default:
                                                        return
                                                }
                                                if ("abort" === n) {
                                                    i = l, v();
                                                    return
                                                }
                                                if (a) {
                                                    i = l, d.length || (o.length ? r() : v());
                                                    return
                                                }
                                                if (h(), y(), !e.random) {
                                                    let n = e.resources.indexOf(t.resource); - 1 !== n && n !== e.index && (e.index = n)
                                                }
                                                s = "completed", p.forEach(e => {
                                                    e(l)
                                                })
                                            }(a, t, n)
                                        }
                                    };
                                    d.push(a), c++, f = setTimeout(r, e.rotate), n(l, t, a.callback)
                                }),
                                function() {
                                    return {
                                        startTime: u,
                                        payload: t,
                                        status: s,
                                        queriesSent: c,
                                        queriesPending: d.length,
                                        subscribe: g,
                                        abort: m
                                    }
                                }
                        }(t, e, o, (e, t) => {
                            r(), i && i(e, t)
                        });
                        return n.push(l), l
                    },
                    find: function(e) {
                        return n.find(t => e(t)) || null
                    },
                    setIndex: e => {
                        t.index = e
                    },
                    getIndex: () => t.index,
                    cleanup: r
                }
            }
            let q = Object.create(null),
                B = "iconify2",
                K = "iconify",
                W = K + "-count",
                Q = K + "-version";

            function V(e, t) {
                try {
                    return e.getItem(t)
                } catch (e) {}
            }

            function G(e, t, n) {
                try {
                    return e.setItem(t, n), !0
                } catch (e) {}
            }

            function J(e, t) {
                try {
                    e.removeItem(t)
                } catch (e) {}
            }

            function X(e, t) {
                return G(e, W, t.toString())
            }

            function Y(e) {
                return parseInt(V(e, W)) || 0
            }
            let Z = {
                    local: !0,
                    session: !0
                },
                ee = {
                    local: new Set,
                    session: new Set
                },
                et = !1,
                en = "undefined" == typeof window ? {} : window;

            function er(e) {
                let t = e + "Storage";
                try {
                    if (en && en[t] && "number" == typeof en[t].length) return en[t]
                } catch (e) {}
                Z[e] = !1
            }

            function eo(e, t) {
                let n = er(e);
                if (!n) return;
                let r = V(n, Q);
                if (r !== B) {
                    if (r) {
                        let e = Y(n);
                        for (let t = 0; t < e; t++) J(n, K + t.toString())
                    }
                    G(n, Q, B), X(n, 0);
                    return
                }
                let o = Math.floor(Date.now() / 36e5) - 168,
                    i = e => {
                        let r = K + e.toString(),
                            i = V(n, r);
                        if ("string" == typeof i) {
                            try {
                                let n = JSON.parse(i);
                                if ("object" == typeof n && "number" == typeof n.cached && n.cached > o && "string" == typeof n.provider && "object" == typeof n.data && "string" == typeof n.data.prefix && t(n, e)) return !0
                            } catch (e) {}
                            J(n, r)
                        }
                    },
                    l = Y(n);
                for (let t = l - 1; t >= 0; t--) i(t) || (t === l - 1 ? X(n, --l) : ee[e].add(t))
            }

            function ei() {
                if (!et)
                    for (let e in et = !0, Z) eo(e, e => {
                        let t = e.data,
                            n = e.provider,
                            r = t.prefix,
                            o = v(n, r);
                        if (!y(o, t).length) return !1;
                        let i = t.lastModified || -1;
                        return o.lastModifiedCached = o.lastModifiedCached ? Math.min(o.lastModifiedCached, i) : i, !0
                    })
            }

            function el() {}
            let ea = (e, t) => {
                    let n, r;
                    let o = function(e, t = !0, n = !1) {
                            let r = [];
                            return e.forEach(e => {
                                let o = "string" == typeof e ? i(e, t, n) : e;
                                o && r.push(o)
                            }), r
                        }(e, !0, w()),
                        l = function(e) {
                            let t = {
                                    loaded: [],
                                    missing: [],
                                    pending: []
                                },
                                n = Object.create(null);
                            e.sort((e, t) => e.provider !== t.provider ? e.provider.localeCompare(t.provider) : e.prefix !== t.prefix ? e.prefix.localeCompare(t.prefix) : e.name.localeCompare(t.name));
                            let r = {
                                provider: "",
                                prefix: "",
                                name: ""
                            };
                            return e.forEach(e => {
                                if (r.name === e.name && r.prefix === e.prefix && r.provider === e.provider) return;
                                r = e;
                                let o = e.provider,
                                    i = e.prefix,
                                    l = e.name,
                                    a = n[o] || (n[o] = Object.create(null)),
                                    u = a[i] || (a[i] = v(o, i));
                                (l in u.icons ? t.loaded : "" === i || u.missing.has(l) ? t.missing : t.pending).push({
                                    provider: o,
                                    prefix: i,
                                    name: l
                                })
                            }), t
                        }(o);
                    if (!l.pending.length) {
                        let e = !0;
                        return t && setTimeout(() => {
                            e && t(l.loaded, l.missing, l.pending, el)
                        }), () => {
                            e = !1
                        }
                    }
                    let a = Object.create(null),
                        u = [];
                    return l.pending.forEach(e => {
                        let {
                            provider: t,
                            prefix: o
                        } = e;
                        if (o === r && t === n) return;
                        n = t, r = o, u.push(v(t, o));
                        let i = a[t] || (a[t] = Object.create(null));
                        i[o] || (i[o] = [])
                    }), l.pending.forEach(e => {
                        let {
                            provider: t,
                            prefix: n,
                            name: r
                        } = e, o = v(t, n), i = o.pendingIcons || (o.pendingIcons = new Set);
                        i.has(r) || (i.add(r), a[t][n].push(r))
                    }), u.forEach(e => {
                        let {
                            provider: t,
                            prefix: n
                        } = e;
                        if (a[t][n].length) {
                            var r, o;
                            r = e, o = a[t][n], r.iconsToLoad ? r.iconsToLoad = r.iconsToLoad.concat(o).sort() : r.iconsToLoad = o, r.iconsQueueFlag || (r.iconsQueueFlag = !0, setTimeout(() => {
                                let e;
                                r.iconsQueueFlag = !1;
                                let {
                                    provider: t,
                                    prefix: n
                                } = r, o = r.iconsToLoad;
                                if (delete r.iconsToLoad, !o || !(e = C(t))) return;
                                let i = e.prepare(t, n, o);
                                i.forEach(e => {
                                    ! function(e, t, n) {
                                        let r, o;
                                        if ("string" == typeof e) {
                                            let t = C(e);
                                            if (!t) return n(void 0, 424);
                                            o = t.send;
                                            let i = function(e) {
                                                if (!q[e]) {
                                                    let t = L[e];
                                                    if (!t) return;
                                                    let n = $(t);
                                                    q[e] = {
                                                        config: t,
                                                        redundancy: n
                                                    }
                                                }
                                                return q[e]
                                            }(e);
                                            i && (r = i.redundancy)
                                        } else {
                                            let t = R(e);
                                            if (t) {
                                                r = $(t);
                                                let n = e.resources ? e.resources[0] : "",
                                                    i = C(n);
                                                i && (o = i.send)
                                            }
                                        }
                                        r && o ? r.query(t, o, n)().abort : n(void 0, 424)
                                    }(t, e, t => {
                                        var n;
                                        if ("object" != typeof t) e.icons.forEach(e => {
                                            r.missing.add(e)
                                        });
                                        else try {
                                            let e = y(r, t);
                                            if (!e.length) return;
                                            let n = r.pendingIcons;
                                            n && e.forEach(e => {
                                                    n.delete(e)
                                                }),
                                                function(e, t) {
                                                    function n(n) {
                                                        let r, o;
                                                        if (!Z[n] || !(r = er(n))) return;
                                                        let i = ee[n];
                                                        if (i.size) i.delete(o = Array.from(i).shift());
                                                        else if (o = Y(r), !X(r, o + 1)) return;
                                                        let l = {
                                                            cached: Math.floor(Date.now() / 36e5),
                                                            provider: e.provider,
                                                            data: t
                                                        };
                                                        return G(r, K + o.toString(), JSON.stringify(l))
                                                    }
                                                    et || ei(), (!t.lastModified || function(e, t) {
                                                        let n = e.lastModifiedCached;
                                                        if (n && n >= t) return n === t;
                                                        if (e.lastModifiedCached = t, n)
                                                            for (let n in Z) eo(n, n => {
                                                                let r = n.data;
                                                                return n.provider !== e.provider || r.prefix !== e.prefix || r.lastModified === t
                                                            });
                                                        return !0
                                                    }(e, t.lastModified)) && Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"))
                                                }(r, t)
                                        } catch (e) {
                                            console.error(e)
                                        }(n = r).iconsLoaderFlag || (n.iconsLoaderFlag = !0, setTimeout(() => {
                                            var e;
                                            n.iconsLoaderFlag = !1, (e = n).pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
                                                e.pendingCallbacksFlag = !1;
                                                let t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
                                                if (!t.length) return;
                                                let n = !1,
                                                    r = e.provider,
                                                    o = e.prefix;
                                                t.forEach(t => {
                                                    let i = t.icons,
                                                        l = i.pending.length;
                                                    i.pending = i.pending.filter(t => {
                                                        if (t.prefix !== o) return !0;
                                                        let l = t.name;
                                                        if (e.icons[l]) i.loaded.push({
                                                            provider: r,
                                                            prefix: o,
                                                            name: l
                                                        });
                                                        else {
                                                            if (!e.missing.has(l)) return n = !0, !0;
                                                            i.missing.push({
                                                                provider: r,
                                                                prefix: o,
                                                                name: l
                                                            })
                                                        }
                                                        return !1
                                                    }), i.pending.length !== l && (n || z([e], t.id), t.callback(i.loaded.slice(0), i.missing.slice(0), i.pending.slice(0), t.abort))
                                                })
                                            }))
                                        }))
                                    })
                                })
                            }))
                        }
                    }), t ? function(e, t, n) {
                        let r = U++,
                            o = z.bind(null, n, r);
                        if (!t.pending.length) return o;
                        let i = {
                            id: r,
                            icons: t,
                            callback: e,
                            abort: o
                        };
                        return n.forEach(e => {
                            (e.loaderCallbacks || (e.loaderCallbacks = [])).push(i)
                        }), o
                    }(t, l, u) : el
                },
                eu = /[\s,]+/,
                es = { ...E,
                    inline: !1
                },
                ec = {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    "aria-hidden": !0,
                    role: "img"
                },
                ef = {
                    display: "inline-block"
                },
                ed = {
                    backgroundColor: "currentColor"
                },
                ep = {
                    backgroundColor: "transparent"
                },
                eh = {
                    Image: "var(--svg)",
                    Repeat: "no-repeat",
                    Size: "100% 100%"
                },
                em = {
                    webkitMask: ed,
                    mask: ed,
                    background: ep
                };
            for (let e in em) {
                let t = em[e];
                for (let n in eh) t[e + n] = eh[n]
            }
            let eg = { ...es,
                inline: !0
            };

            function ev(e) {
                return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
            }
            let ey = (e, t, n, o) => {
                let i = n ? eg : es,
                    l = function(e, t) {
                        let n = { ...e
                        };
                        for (let e in t) {
                            let r = t[e],
                                o = typeof r;
                            e in x ? (null === r || r && ("string" === o || "number" === o)) && (n[e] = r) : o === typeof n[e] && (n[e] = "rotate" === e ? r % 4 : r)
                        }
                        return n
                    }(i, t),
                    a = t.mode || "svg",
                    u = {},
                    c = t.style || {},
                    f = { ..."svg" === a ? ec : {},
                        ref: o
                    };
                for (let e in t) {
                    let n = t[e];
                    if (void 0 !== n) switch (e) {
                        case "icon":
                        case "style":
                        case "children":
                        case "onLoad":
                        case "mode":
                        case "_ref":
                        case "_inline":
                            break;
                        case "inline":
                        case "hFlip":
                        case "vFlip":
                            l[e] = !0 === n || "true" === n || 1 === n;
                            break;
                        case "flip":
                            "string" == typeof n && function(e, t) {
                                t.split(eu).forEach(t => {
                                    let n = t.trim();
                                    switch (n) {
                                        case "horizontal":
                                            e.hFlip = !0;
                                            break;
                                        case "vertical":
                                            e.vFlip = !0
                                    }
                                })
                            }(l, n);
                            break;
                        case "color":
                            u.color = n;
                            break;
                        case "rotate":
                            "string" == typeof n ? l[e] = function(e, t = 0) {
                                let n = e.replace(/^-?[0-9.]*/, "");

                                function r(e) {
                                    for (; e < 0;) e += 4;
                                    return e % 4
                                }
                                if ("" === n) {
                                    let t = parseInt(e);
                                    return isNaN(t) ? 0 : r(t)
                                }
                                if (n !== e) {
                                    let t = 0;
                                    switch (n) {
                                        case "%":
                                            t = 25;
                                            break;
                                        case "deg":
                                            t = 90
                                    }
                                    if (t) {
                                        let o = parseFloat(e.slice(0, e.length - n.length));
                                        return isNaN(o) ? 0 : (o /= t) % 1 == 0 ? r(o) : 0
                                    }
                                }
                                return t
                            }(n) : "number" == typeof n && (l[e] = n);
                            break;
                        case "ariaHidden":
                        case "aria-hidden":
                            !0 !== n && "true" !== n && delete f["aria-hidden"];
                            break;
                        default:
                            void 0 === i[e] && (f[e] = n)
                    }
                }
                let d = function(e, t) {
                        let n, r;
                        let o = { ...s,
                                ...e
                            },
                            i = { ...E,
                                ...t
                            },
                            l = {
                                left: o.left,
                                top: o.top,
                                width: o.width,
                                height: o.height
                            },
                            a = o.body;
                        [o, i].forEach(e => {
                            let t;
                            let n = [],
                                r = e.hFlip,
                                o = e.vFlip,
                                i = e.rotate;
                            switch (r ? o ? i += 2 : (n.push("translate(" + (l.width + l.left).toString() + " " + (0 - l.top).toString() + ")"), n.push("scale(-1 1)"), l.top = l.left = 0) : o && (n.push("translate(" + (0 - l.left).toString() + " " + (l.height + l.top).toString() + ")"), n.push("scale(1 -1)"), l.top = l.left = 0), i < 0 && (i -= 4 * Math.floor(i / 4)), i %= 4) {
                                case 1:
                                    n.unshift("rotate(90 " + (t = l.height / 2 + l.top).toString() + " " + t.toString() + ")");
                                    break;
                                case 2:
                                    n.unshift("rotate(180 " + (l.width / 2 + l.left).toString() + " " + (l.height / 2 + l.top).toString() + ")");
                                    break;
                                case 3:
                                    n.unshift("rotate(-90 " + (t = l.width / 2 + l.left).toString() + " " + t.toString() + ")")
                            }
                            i % 2 == 1 && (l.left !== l.top && (t = l.left, l.left = l.top, l.top = t), l.width !== l.height && (t = l.width, l.width = l.height, l.height = t)), n.length && (a = '<g transform="' + n.join(" ") + '">' + a + "</g>")
                        });
                        let u = i.width,
                            c = i.height,
                            f = l.width,
                            d = l.height;
                        null === u ? n = j(r = null === c ? "1em" : "auto" === c ? d : c, f / d) : (n = "auto" === u ? f : u, r = null === c ? j(n, d / f) : "auto" === c ? d : c);
                        let p = {},
                            h = (e, t) => {
                                _(t) || (p[e] = t.toString())
                            };
                        return h("width", n), h("height", r), p.viewBox = l.left.toString() + " " + l.top.toString() + " " + f.toString() + " " + d.toString(), {
                            attributes: p,
                            body: a
                        }
                    }(e, l),
                    p = d.attributes;
                if (l.inline && (u.verticalAlign = "-0.125em"), "svg" === a) {
                    f.style = { ...u,
                        ...c
                    }, Object.assign(f, p);
                    let e = 0,
                        n = t.id;
                    return "string" == typeof n && (n = n.replace(/-/g, "_")), f.dangerouslySetInnerHTML = {
                        __html: function(e, t = k) {
                            let n;
                            let r = [];
                            for (; n = O.exec(e);) r.push(n[1]);
                            if (!r.length) return e;
                            let o = "suffix" + (16777216 * Math.random() | Date.now()).toString(16);
                            return r.forEach(n => {
                                let r = "function" == typeof t ? t(n) : t + (M++).toString(),
                                    i = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                                e = e.replace(RegExp('([#;"])(' + i + ')([")]|\\.[a-z])', "g"), "$1" + r + o + "$3")
                            }), e = e.replace(RegExp(o, "g"), "")
                        }(d.body, n ? () => n + "ID" + e++ : "iconifyReact")
                    }, r.createElement("svg", f)
                }
                let {
                    body: h,
                    width: m,
                    height: g
                } = e, v = "mask" === a || "bg" !== a && -1 !== h.indexOf("currentColor"), y = function(e, t) {
                    let n = -1 === e.indexOf("xlink:") ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
                    for (let e in t) n += " " + e + '="' + t[e] + '"';
                    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
                }(h, { ...p,
                    width: m + "",
                    height: g + ""
                });
                return f.style = { ...u,
                    "--svg": 'url("data:image/svg+xml,' + y.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ") + '")',
                    width: ev(p.width),
                    height: ev(p.height),
                    ...ef,
                    ...v ? ed : ep,
                    ...c
                }, r.createElement("span", f)
            };
            if (w(!0), P[""] = {
                    prepare: A,
                    send: D
                }, "undefined" != typeof document && "undefined" != typeof window) {
                ei();
                let e = window;
                if (void 0 !== e.IconifyPreload) {
                    let t = e.IconifyPreload,
                        n = "Invalid IconifyPreload syntax.";
                    "object" == typeof t && null !== t && (t instanceof Array ? t : [t]).forEach(e => {
                        try {
                            ("object" != typeof e || null === e || e instanceof Array || "object" != typeof e.icons || "string" != typeof e.prefix || ! function(e, t) {
                                if ("object" != typeof e) return !1;
                                if ("string" != typeof t && (t = e.provider || ""), b && !t && !e.prefix) {
                                    let t = !1;
                                    return m(e) && (e.prefix = "", d(e, (e, n) => {
                                        n && function(e, t) {
                                            let n = i(e, !0, b);
                                            if (!n) return !1;
                                            let r = v(n.provider, n.prefix);
                                            return function(e, t, n) {
                                                try {
                                                    if ("string" == typeof n.body) return e.icons[t] = { ...n
                                                    }, !0
                                                } catch (e) {}
                                                return !1
                                            }(r, n.name, t)
                                        }(e, n) && (t = !0)
                                    })), t
                                }
                                let n = e.prefix;
                                if (!l({
                                        provider: t,
                                        prefix: n,
                                        name: "a"
                                    })) return !1;
                                let r = v(t, n);
                                return !!y(r, e)
                            }(e)) && console.error(n)
                        } catch (e) {
                            console.error(n)
                        }
                    })
                }
                if (void 0 !== e.IconifyProviders) {
                    let t = e.IconifyProviders;
                    if ("object" == typeof t && null !== t)
                        for (let e in t) {
                            let n = "IconifyProviders[" + e + "] is invalid.";
                            try {
                                let r = t[e];
                                if ("object" != typeof r || !r || void 0 === r.resources) continue;
                                ! function(e, t) {
                                    let n = R(t);
                                    return null !== n && (L[e] = n, !0)
                                }(e, r) && console.error(n)
                            } catch (e) {
                                console.error(n)
                            }
                        }
                }
            }
            class eb extends r.Component {
                constructor(e) {
                    super(e), this.state = {
                        icon: null
                    }
                }
                _abortLoading() {
                    this._loading && (this._loading.abort(), this._loading = null)
                }
                _setData(e) {
                    this.state.icon !== e && this.setState({
                        icon: e
                    })
                }
                _checkIcon(e) {
                    let t;
                    let n = this.state,
                        r = this.props.icon;
                    if ("object" == typeof r && null !== r && "string" == typeof r.body) {
                        this._icon = "", this._abortLoading(), (e || null === n.icon) && this._setData({
                            data: r
                        });
                        return
                    }
                    if ("string" != typeof r || null === (t = i(r, !1, !0))) {
                        this._abortLoading(), this._setData(null);
                        return
                    }
                    let o = function(e) {
                        let t = "string" == typeof e ? i(e, !0, b) : e;
                        if (t) {
                            let e = v(t.provider, t.prefix),
                                n = t.name;
                            return e.icons[n] || (e.missing.has(n) ? null : void 0)
                        }
                    }(t);
                    if (!o) {
                        this._loading && this._loading.name === r || (this._abortLoading(), this._icon = "", this._setData(null), null !== o && (this._loading = {
                            name: r,
                            abort: ea([t], this._checkIcon.bind(this, !1))
                        }));
                        return
                    }
                    if (this._icon !== r || null === n.icon) {
                        this._abortLoading(), this._icon = r;
                        let e = ["iconify"];
                        "" !== t.prefix && e.push("iconify--" + t.prefix), "" !== t.provider && e.push("iconify--" + t.provider), this._setData({
                            data: o,
                            classes: e
                        }), this.props.onLoad && this.props.onLoad(r)
                    }
                }
                componentDidMount() {
                    this._checkIcon(!1)
                }
                componentDidUpdate(e) {
                    e.icon !== this.props.icon && this._checkIcon(!0)
                }
                componentWillUnmount() {
                    this._abortLoading()
                }
                render() {
                    let e = this.props,
                        t = this.state.icon;
                    if (null === t) return e.children ? e.children : r.createElement("span", {});
                    let n = e;
                    return t.classes && (n = { ...e,
                        className: ("string" == typeof e.className ? e.className + " " : "") + t.classes.join(" ")
                    }), ey({ ...s,
                        ...t.data
                    }, n, e._inline, e._ref)
                }
            }
            let ew = r.forwardRef(function(e, t) {
                let n = { ...e,
                    _ref: t,
                    _inline: !1
                };
                return r.createElement(eb, n)
            });
            r.forwardRef(function(e, t) {
                let n = { ...e,
                    _ref: t,
                    _inline: !0
                };
                return r.createElement(eb, n)
            })
        },
        73445: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ue: function() {
                    return u
                }
            });
            var r = n(43973),
                o = n(67294),
                i = n(52798);
            let {
                useSyncExternalStoreWithSelector: l
            } = i, a = e => {
                "function" != typeof e && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
                let t = "function" == typeof e ? (0, r.M)(e) : e,
                    n = (e, n) => (function(e, t = e.getState, n) {
                        let r = l(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
                        return (0, o.useDebugValue)(r), r
                    })(t, e, n);
                return Object.assign(n, t), n
            }, u = e => e ? a(e) : a
        }
    }
]);