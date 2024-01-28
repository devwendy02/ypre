(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [296], {
        11248: function(module, exports, __webpack_require__) {
            "undefined" != typeof navigator && function(u, P) {
                module.exports = P()
            }(0, function() {
                "use strict";
                var svgNS = "http://www.w3.org/2000/svg",
                    locationHref = "",
                    _useWebWorker = !1,
                    initialDefaultFrame = -999999,
                    setWebWorker = function(u) {
                        _useWebWorker = !!u
                    },
                    getWebWorker = function() {
                        return _useWebWorker
                    },
                    setLocationHref = function(u) {
                        locationHref = u
                    },
                    getLocationHref = function() {
                        return locationHref
                    };

                function createTag(u) {
                    return document.createElement(u)
                }

                function extendPrototype(u, P) {
                    var D, S, E = u.length;
                    for (D = 0; D < E; D += 1)
                        for (var T in S = u[D].prototype) Object.prototype.hasOwnProperty.call(S, T) && (P.prototype[T] = S[T])
                }

                function getDescriptor(u, P) {
                    return Object.getOwnPropertyDescriptor(u, P)
                }

                function createProxyFunction(u) {
                    function P() {}
                    return P.prototype = u, P
                }
                var audioControllerFactory = function() {
                        function u(u) {
                            this.audios = [], this.audioFactory = u, this._volume = 1, this._isMuted = !1
                        }
                        return u.prototype = {
                                addAudio: function(u) {
                                    this.audios.push(u)
                                },
                                pause: function() {
                                    var u, P = this.audios.length;
                                    for (u = 0; u < P; u += 1) this.audios[u].pause()
                                },
                                resume: function() {
                                    var u, P = this.audios.length;
                                    for (u = 0; u < P; u += 1) this.audios[u].resume()
                                },
                                setRate: function(u) {
                                    var P, D = this.audios.length;
                                    for (P = 0; P < D; P += 1) this.audios[P].setRate(u)
                                },
                                createAudio: function(u) {
                                    return this.audioFactory ? this.audioFactory(u) : window.Howl ? new window.Howl({
                                        src: [u]
                                    }) : {
                                        isPlaying: !1,
                                        play: function() {
                                            this.isPlaying = !0
                                        },
                                        seek: function() {
                                            this.isPlaying = !1
                                        },
                                        playing: function() {},
                                        rate: function() {},
                                        setVolume: function() {}
                                    }
                                },
                                setAudioFactory: function(u) {
                                    this.audioFactory = u
                                },
                                setVolume: function(u) {
                                    this._volume = u, this._updateVolume()
                                },
                                mute: function() {
                                    this._isMuted = !0, this._updateVolume()
                                },
                                unmute: function() {
                                    this._isMuted = !1, this._updateVolume()
                                },
                                getVolume: function() {
                                    return this._volume
                                },
                                _updateVolume: function() {
                                    var u, P = this.audios.length;
                                    for (u = 0; u < P; u += 1) this.audios[u].volume(this._volume * (this._isMuted ? 0 : 1))
                                }
                            },
                            function() {
                                return new u
                            }
                    }(),
                    createTypedArray = function() {
                        function u(u, P) {
                            var D, S = 0,
                                E = [];
                            switch (u) {
                                case "int16":
                                case "uint8c":
                                    D = 1;
                                    break;
                                default:
                                    D = 1.1
                            }
                            for (S = 0; S < P; S += 1) E.push(D);
                            return E
                        }

                        function P(P, D) {
                            return "float32" === P ? new Float32Array(D) : "int16" === P ? new Int16Array(D) : "uint8c" === P ? new Uint8ClampedArray(D) : u(P, D)
                        }
                        return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? P : u
                    }();

                function createSizedArray(u) {
                    return Array.apply(null, {
                        length: u
                    })
                }

                function _typeof$6(u) {
                    return (_typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }
                var subframeEnabled = !0,
                    expressionsPlugin = null,
                    expressionsInterfaces = null,
                    idPrefix$1 = "",
                    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                    _shouldRoundValues = !1,
                    bmPow = Math.pow,
                    bmSqrt = Math.sqrt,
                    bmFloor = Math.floor,
                    bmMax = Math.max,
                    bmMin = Math.min,
                    BMMath = {};

                function ProjectInterface$1() {
                    return {}
                }! function() {
                    var u, P = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                        D = P.length;
                    for (u = 0; u < D; u += 1) BMMath[P[u]] = Math[P[u]]
                }(), BMMath.random = Math.random, BMMath.abs = function(u) {
                    if ("object" === _typeof$6(u) && u.length) {
                        var P, D = createSizedArray(u.length),
                            S = u.length;
                        for (P = 0; P < S; P += 1) D[P] = Math.abs(u[P]);
                        return D
                    }
                    return Math.abs(u)
                };
                var defaultCurveSegments = 150,
                    degToRads = Math.PI / 180,
                    roundCorner = .5519;

                function roundValues(u) {
                    _shouldRoundValues = !!u
                }

                function bmRnd(u) {
                    return _shouldRoundValues ? Math.round(u) : u
                }

                function styleDiv(u) {
                    u.style.position = "absolute", u.style.top = 0, u.style.left = 0, u.style.display = "block", u.style.transformOrigin = "0 0", u.style.webkitTransformOrigin = "0 0", u.style.backfaceVisibility = "visible", u.style.webkitBackfaceVisibility = "visible", u.style.transformStyle = "preserve-3d", u.style.webkitTransformStyle = "preserve-3d", u.style.mozTransformStyle = "preserve-3d"
                }

                function BMEnterFrameEvent(u, P, D, S) {
                    this.type = u, this.currentTime = P, this.totalTime = D, this.direction = S < 0 ? -1 : 1
                }

                function BMCompleteEvent(u, P) {
                    this.type = u, this.direction = P < 0 ? -1 : 1
                }

                function BMCompleteLoopEvent(u, P, D, S) {
                    this.type = u, this.currentLoop = D, this.totalLoops = P, this.direction = S < 0 ? -1 : 1
                }

                function BMSegmentStartEvent(u, P, D) {
                    this.type = u, this.firstFrame = P, this.totalFrames = D
                }

                function BMDestroyEvent(u, P) {
                    this.type = u, this.target = P
                }

                function BMRenderFrameErrorEvent(u, P) {
                    this.type = "renderFrameError", this.nativeError = u, this.currentTime = P
                }

                function BMConfigErrorEvent(u) {
                    this.type = "configError", this.nativeError = u
                }

                function BMAnimationConfigErrorEvent(u, P) {
                    this.type = u, this.nativeError = P
                }
                var createElementID = function() {
                    var u = 0;
                    return function() {
                        return idPrefix$1 + "__lottie_element_" + (u += 1)
                    }
                }();

                function HSVtoRGB(u, P, D) {
                    var S, E, T, M, F, I, L, V;
                    switch (M = Math.floor(6 * u), F = 6 * u - M, I = D * (1 - P), L = D * (1 - F * P), V = D * (1 - (1 - F) * P), M % 6) {
                        case 0:
                            S = D, E = V, T = I;
                            break;
                        case 1:
                            S = L, E = D, T = I;
                            break;
                        case 2:
                            S = I, E = D, T = V;
                            break;
                        case 3:
                            S = I, E = L, T = D;
                            break;
                        case 4:
                            S = V, E = I, T = D;
                            break;
                        case 5:
                            S = D, E = I, T = L
                    }
                    return [S, E, T]
                }

                function RGBtoHSV(u, P, D) {
                    var S, E = Math.max(u, P, D),
                        T = Math.min(u, P, D),
                        M = E - T,
                        F = 0 === E ? 0 : M / E,
                        I = E / 255;
                    switch (E) {
                        case T:
                            S = 0;
                            break;
                        case u:
                            S = (P - D + M * (P < D ? 6 : 0)) / (6 * M);
                            break;
                        case P:
                            S = (D - u + 2 * M) / (6 * M);
                            break;
                        case D:
                            S = (u - P + 4 * M) / (6 * M)
                    }
                    return [S, F, I]
                }

                function addSaturationToRGB(u, P) {
                    var D = RGBtoHSV(255 * u[0], 255 * u[1], 255 * u[2]);
                    return D[1] += P, D[1] > 1 ? D[1] = 1 : D[1] <= 0 && (D[1] = 0), HSVtoRGB(D[0], D[1], D[2])
                }

                function addBrightnessToRGB(u, P) {
                    var D = RGBtoHSV(255 * u[0], 255 * u[1], 255 * u[2]);
                    return D[2] += P, D[2] > 1 ? D[2] = 1 : D[2] < 0 && (D[2] = 0), HSVtoRGB(D[0], D[1], D[2])
                }

                function addHueToRGB(u, P) {
                    var D = RGBtoHSV(255 * u[0], 255 * u[1], 255 * u[2]);
                    return D[0] += P / 360, D[0] > 1 ? D[0] -= 1 : D[0] < 0 && (D[0] += 1), HSVtoRGB(D[0], D[1], D[2])
                }
                var rgbToHex = function() {
                        var u, P, D = [];
                        for (u = 0; u < 256; u += 1) P = u.toString(16), D[u] = 1 === P.length ? "0" + P : P;
                        return function(u, P, S) {
                            return u < 0 && (u = 0), P < 0 && (P = 0), S < 0 && (S = 0), "#" + D[u] + D[P] + D[S]
                        }
                    }(),
                    setSubframeEnabled = function(u) {
                        subframeEnabled = !!u
                    },
                    getSubframeEnabled = function() {
                        return subframeEnabled
                    },
                    setExpressionsPlugin = function(u) {
                        expressionsPlugin = u
                    },
                    getExpressionsPlugin = function() {
                        return expressionsPlugin
                    },
                    setExpressionInterfaces = function(u) {
                        expressionsInterfaces = u
                    },
                    getExpressionInterfaces = function() {
                        return expressionsInterfaces
                    },
                    setDefaultCurveSegments = function(u) {
                        defaultCurveSegments = u
                    },
                    getDefaultCurveSegments = function() {
                        return defaultCurveSegments
                    },
                    setIdPrefix = function(u) {
                        idPrefix$1 = u
                    },
                    getIdPrefix = function() {
                        return idPrefix$1
                    };

                function createNS(u) {
                    return document.createElementNS(svgNS, u)
                }

                function _typeof$5(u) {
                    return (_typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }
                var dataManager = function() {
                        var u, P, D = 1,
                            S = [],
                            E = {
                                onmessage: function() {},
                                postMessage: function(P) {
                                    u({
                                        data: P
                                    })
                                }
                            },
                            T = {
                                postMessage: function(u) {
                                    E.onmessage({
                                        data: u
                                    })
                                }
                            };

                        function M(P) {
                            if (window.Worker && window.Blob && getWebWorker()) {
                                var D = new Blob(["var _workerSelf = self; self.onmessage = ", P.toString()], {
                                        type: "text/javascript"
                                    }),
                                    S = URL.createObjectURL(D);
                                return new Worker(S)
                            }
                            return u = P, E
                        }

                        function F() {
                            P || ((P = M(function(u) {
                                function P() {
                                    function u(P, D) {
                                        var M, F, I, L, V, R, O = P.length;
                                        for (F = 0; F < O; F += 1)
                                            if ("ks" in (M = P[F]) && !M.completed) {
                                                if (M.completed = !0, M.hasMask) {
                                                    var G = M.masksProperties;
                                                    for (I = 0, L = G.length; I < L; I += 1)
                                                        if (G[I].pt.k.i) T(G[I].pt.k);
                                                        else
                                                            for (V = 0, R = G[I].pt.k.length; V < R; V += 1) G[I].pt.k[V].s && T(G[I].pt.k[V].s[0]), G[I].pt.k[V].e && T(G[I].pt.k[V].e[0])
                                                }
                                                0 === M.ty ? (M.layers = S(M.refId, D), u(M.layers, D)) : 4 === M.ty ? E(M.shapes) : 5 === M.ty && N(M)
                                            }
                                    }

                                    function P(P, D) {
                                        if (P) {
                                            var E = 0,
                                                T = P.length;
                                            for (E = 0; E < T; E += 1) 1 === P[E].t && (P[E].data.layers = S(P[E].data.refId, D), u(P[E].data.layers, D))
                                        }
                                    }

                                    function D(u, P) {
                                        for (var D = 0, S = P.length; D < S;) {
                                            if (P[D].id === u) return P[D];
                                            D += 1
                                        }
                                        return null
                                    }

                                    function S(u, P) {
                                        var S = D(u, P);
                                        return S ? S.layers.__used ? JSON.parse(JSON.stringify(S.layers)) : (S.layers.__used = !0, S.layers) : null
                                    }

                                    function E(u) {
                                        var P, D, S;
                                        for (P = u.length - 1; P >= 0; P -= 1)
                                            if ("sh" === u[P].ty) {
                                                if (u[P].ks.k.i) T(u[P].ks.k);
                                                else
                                                    for (D = 0, S = u[P].ks.k.length; D < S; D += 1) u[P].ks.k[D].s && T(u[P].ks.k[D].s[0]), u[P].ks.k[D].e && T(u[P].ks.k[D].e[0])
                                            } else "gr" === u[P].ty && E(u[P].it)
                                    }

                                    function T(u) {
                                        var P, D = u.i.length;
                                        for (P = 0; P < D; P += 1) u.i[P][0] += u.v[P][0], u.i[P][1] += u.v[P][1], u.o[P][0] += u.v[P][0], u.o[P][1] += u.v[P][1]
                                    }

                                    function M(u, P) {
                                        var D = P ? P.split(".") : [100, 100, 100];
                                        return u[0] > D[0] || !(D[0] > u[0]) && (u[1] > D[1] || !(D[1] > u[1]) && (u[2] > D[2] || !(D[2] > u[2]) && null))
                                    }
                                    var F = function() {
                                            var u = [4, 4, 14];

                                            function P(u) {
                                                var P = u.t.d;
                                                u.t.d = {
                                                    k: [{
                                                        s: P,
                                                        t: 0
                                                    }]
                                                }
                                            }

                                            function D(u) {
                                                var D, S = u.length;
                                                for (D = 0; D < S; D += 1) 5 === u[D].ty && P(u[D])
                                            }
                                            return function(P) {
                                                if (M(u, P.v) && (D(P.layers), P.assets)) {
                                                    var S, E = P.assets.length;
                                                    for (S = 0; S < E; S += 1) P.assets[S].layers && D(P.assets[S].layers)
                                                }
                                            }
                                        }(),
                                        I = function() {
                                            var u = [4, 7, 99];
                                            return function(P) {
                                                if (P.chars && !M(u, P.v)) {
                                                    var D, S = P.chars.length;
                                                    for (D = 0; D < S; D += 1) {
                                                        var T = P.chars[D];
                                                        T.data && T.data.shapes && (E(T.data.shapes), T.data.ip = 0, T.data.op = 99999, T.data.st = 0, T.data.sr = 1, T.data.ks = {
                                                            p: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            s: {
                                                                k: [100, 100],
                                                                a: 0
                                                            },
                                                            a: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            r: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            o: {
                                                                k: 100,
                                                                a: 0
                                                            }
                                                        }, P.chars[D].t || (T.data.shapes.push({
                                                            ty: "no"
                                                        }), T.data.shapes[0].it.push({
                                                            p: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            s: {
                                                                k: [100, 100],
                                                                a: 0
                                                            },
                                                            a: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            r: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            o: {
                                                                k: 100,
                                                                a: 0
                                                            },
                                                            sk: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            sa: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            ty: "tr"
                                                        })))
                                                    }
                                                }
                                            }
                                        }(),
                                        L = function() {
                                            var u = [5, 7, 15];

                                            function P(u) {
                                                var P = u.t.p;
                                                "number" == typeof P.a && (P.a = {
                                                    a: 0,
                                                    k: P.a
                                                }), "number" == typeof P.p && (P.p = {
                                                    a: 0,
                                                    k: P.p
                                                }), "number" == typeof P.r && (P.r = {
                                                    a: 0,
                                                    k: P.r
                                                })
                                            }

                                            function D(u) {
                                                var D, S = u.length;
                                                for (D = 0; D < S; D += 1) 5 === u[D].ty && P(u[D])
                                            }
                                            return function(P) {
                                                if (M(u, P.v) && (D(P.layers), P.assets)) {
                                                    var S, E = P.assets.length;
                                                    for (S = 0; S < E; S += 1) P.assets[S].layers && D(P.assets[S].layers)
                                                }
                                            }
                                        }(),
                                        V = function() {
                                            var u = [4, 1, 9];

                                            function P(u) {
                                                var D, S, E, T = u.length;
                                                for (D = 0; D < T; D += 1)
                                                    if ("gr" === u[D].ty) P(u[D].it);
                                                    else if ("fl" === u[D].ty || "st" === u[D].ty) {
                                                    if (u[D].c.k && u[D].c.k[0].i)
                                                        for (S = 0, E = u[D].c.k.length; S < E; S += 1) u[D].c.k[S].s && (u[D].c.k[S].s[0] /= 255, u[D].c.k[S].s[1] /= 255, u[D].c.k[S].s[2] /= 255, u[D].c.k[S].s[3] /= 255), u[D].c.k[S].e && (u[D].c.k[S].e[0] /= 255, u[D].c.k[S].e[1] /= 255, u[D].c.k[S].e[2] /= 255, u[D].c.k[S].e[3] /= 255);
                                                    else u[D].c.k[0] /= 255, u[D].c.k[1] /= 255, u[D].c.k[2] /= 255, u[D].c.k[3] /= 255
                                                }
                                            }

                                            function D(u) {
                                                var D, S = u.length;
                                                for (D = 0; D < S; D += 1) 4 === u[D].ty && P(u[D].shapes)
                                            }
                                            return function(P) {
                                                if (M(u, P.v) && (D(P.layers), P.assets)) {
                                                    var S, E = P.assets.length;
                                                    for (S = 0; S < E; S += 1) P.assets[S].layers && D(P.assets[S].layers)
                                                }
                                            }
                                        }(),
                                        R = function() {
                                            var u = [4, 4, 18];

                                            function P(u) {
                                                var D, S, E;
                                                for (D = u.length - 1; D >= 0; D -= 1)
                                                    if ("sh" === u[D].ty) {
                                                        if (u[D].ks.k.i) u[D].ks.k.c = u[D].closed;
                                                        else
                                                            for (S = 0, E = u[D].ks.k.length; S < E; S += 1) u[D].ks.k[S].s && (u[D].ks.k[S].s[0].c = u[D].closed), u[D].ks.k[S].e && (u[D].ks.k[S].e[0].c = u[D].closed)
                                                    } else "gr" === u[D].ty && P(u[D].it)
                                            }

                                            function D(u) {
                                                var D, S, E, T, M, F, I = u.length;
                                                for (S = 0; S < I; S += 1) {
                                                    if ((D = u[S]).hasMask) {
                                                        var L = D.masksProperties;
                                                        for (E = 0, T = L.length; E < T; E += 1)
                                                            if (L[E].pt.k.i) L[E].pt.k.c = L[E].cl;
                                                            else
                                                                for (M = 0, F = L[E].pt.k.length; M < F; M += 1) L[E].pt.k[M].s && (L[E].pt.k[M].s[0].c = L[E].cl), L[E].pt.k[M].e && (L[E].pt.k[M].e[0].c = L[E].cl)
                                                    }
                                                    4 === D.ty && P(D.shapes)
                                                }
                                            }
                                            return function(P) {
                                                if (M(u, P.v) && (D(P.layers), P.assets)) {
                                                    var S, E = P.assets.length;
                                                    for (S = 0; S < E; S += 1) P.assets[S].layers && D(P.assets[S].layers)
                                                }
                                            }
                                        }();

                                    function O(D) {
                                        D.__complete || (V(D), F(D), I(D), L(D), R(D), u(D.layers, D.assets), P(D.chars, D.assets), D.__complete = !0)
                                    }

                                    function N(u) {
                                        0 === u.t.a.length && u.t.p
                                    }
                                    var G = {};
                                    return G.completeData = O, G.checkColors = V, G.checkChars = I, G.checkPathProperties = L, G.checkShapes = R, G.completeLayers = u, G
                                }
                                if (T.dataManager || (T.dataManager = P()), T.assetLoader || (T.assetLoader = function() {
                                        function u(u) {
                                            var P = u.getResponseHeader("content-type");
                                            return P && "json" === u.responseType && -1 !== P.indexOf("json") || u.response && "object" === _typeof$5(u.response) ? u.response : u.response && "string" == typeof u.response ? JSON.parse(u.response) : u.responseText ? JSON.parse(u.responseText) : null
                                        }
                                        return {
                                            load: function(P, D, S, E) {
                                                var T, M = new XMLHttpRequest;
                                                try {
                                                    M.responseType = "json"
                                                } catch (u) {}
                                                M.onreadystatechange = function() {
                                                    if (4 === M.readyState) {
                                                        if (200 === M.status) S(T = u(M));
                                                        else try {
                                                            T = u(M), S(T)
                                                        } catch (u) {
                                                            E && E(u)
                                                        }
                                                    }
                                                };
                                                try {
                                                    M.open("GET", P, !0)
                                                } catch (u) {
                                                    M.open("GET", D + "/" + P, !0)
                                                }
                                                M.send()
                                            }
                                        }
                                    }()), "loadAnimation" === u.data.type) T.assetLoader.load(u.data.path, u.data.fullPath, function(P) {
                                    T.dataManager.completeData(P), T.postMessage({
                                        id: u.data.id,
                                        payload: P,
                                        status: "success"
                                    })
                                }, function() {
                                    T.postMessage({
                                        id: u.data.id,
                                        status: "error"
                                    })
                                });
                                else if ("complete" === u.data.type) {
                                    var D = u.data.animation;
                                    T.dataManager.completeData(D), T.postMessage({
                                        id: u.data.id,
                                        payload: D,
                                        status: "success"
                                    })
                                } else "loadData" === u.data.type && T.assetLoader.load(u.data.path, u.data.fullPath, function(P) {
                                    T.postMessage({
                                        id: u.data.id,
                                        payload: P,
                                        status: "success"
                                    })
                                }, function() {
                                    T.postMessage({
                                        id: u.data.id,
                                        status: "error"
                                    })
                                })
                            })).onmessage = function(u) {
                                var P = u.data,
                                    D = P.id,
                                    E = S[D];
                                S[D] = null, "success" === P.status ? E.onComplete(P.payload) : E.onError && E.onError()
                            })
                        }

                        function I(u, P) {
                            var E = "processId_" + (D += 1);
                            return S[E] = {
                                onComplete: u,
                                onError: P
                            }, E
                        }
                        return {
                            loadAnimation: function(u, D, S) {
                                F();
                                var E = I(D, S);
                                P.postMessage({
                                    type: "loadAnimation",
                                    path: u,
                                    fullPath: window.location.origin + window.location.pathname,
                                    id: E
                                })
                            },
                            loadData: function(u, D, S) {
                                F();
                                var E = I(D, S);
                                P.postMessage({
                                    type: "loadData",
                                    path: u,
                                    fullPath: window.location.origin + window.location.pathname,
                                    id: E
                                })
                            },
                            completeAnimation: function(u, D, S) {
                                F();
                                var E = I(D, S);
                                P.postMessage({
                                    type: "complete",
                                    animation: u,
                                    id: E
                                })
                            }
                        }
                    }(),
                    ImagePreloader = function() {
                        var u = function() {
                            var u = createTag("canvas");
                            u.width = 1, u.height = 1;
                            var P = u.getContext("2d");
                            return P.fillStyle = "rgba(0,0,0,0)", P.fillRect(0, 0, 1, 1), u
                        }();

                        function P() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function D() {
                            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function S(u, P, D) {
                            var S = "";
                            if (u.e) S = u.p;
                            else if (P) {
                                var E = u.p; - 1 !== E.indexOf("images/") && (E = E.split("/")[1]), S = P + E
                            } else S = D + (u.u ? u.u : "") + u.p;
                            return S
                        }

                        function E(u) {
                            var P = 0,
                                D = setInterval((function() {
                                    (u.getBBox().width || P > 500) && (this._imageLoaded(), clearInterval(D)), P += 1
                                }).bind(this), 50)
                        }

                        function T(P) {
                            var D = S(P, this.assetsPath, this.path),
                                E = createNS("image");
                            isSafari ? this.testImageLoaded(E) : E.addEventListener("load", this._imageLoaded, !1), E.addEventListener("error", (function() {
                                T.img = u, this._imageLoaded()
                            }).bind(this), !1), E.setAttributeNS("http://www.w3.org/1999/xlink", "href", D), this._elementHelper.append ? this._elementHelper.append(E) : this._elementHelper.appendChild(E);
                            var T = {
                                img: E,
                                assetData: P
                            };
                            return T
                        }

                        function M(P) {
                            var D = S(P, this.assetsPath, this.path),
                                E = createTag("img");
                            E.crossOrigin = "anonymous", E.addEventListener("load", this._imageLoaded, !1), E.addEventListener("error", (function() {
                                T.img = u, this._imageLoaded()
                            }).bind(this), !1), E.src = D;
                            var T = {
                                img: E,
                                assetData: P
                            };
                            return T
                        }

                        function F(u) {
                            var P = {
                                    assetData: u
                                },
                                D = S(u, this.assetsPath, this.path);
                            return dataManager.loadData(D, (function(u) {
                                P.img = u, this._footageLoaded()
                            }).bind(this), (function() {
                                P.img = {}, this._footageLoaded()
                            }).bind(this)), P
                        }

                        function I(u, P) {
                            this.imagesLoadedCb = P;
                            var D, S = u.length;
                            for (D = 0; D < S; D += 1) u[D].layers || (u[D].t && "seq" !== u[D].t ? 3 === u[D].t && (this.totalFootages += 1, this.images.push(this.createFootageData(u[D]))) : (this.totalImages += 1, this.images.push(this._createImageData(u[D]))))
                        }

                        function L(u) {
                            this.path = u || ""
                        }

                        function V(u) {
                            this.assetsPath = u || ""
                        }

                        function R(u) {
                            for (var P = 0, D = this.images.length; P < D;) {
                                if (this.images[P].assetData === u) return this.images[P].img;
                                P += 1
                            }
                            return null
                        }

                        function O() {
                            this.imagesLoadedCb = null, this.images.length = 0
                        }

                        function N() {
                            return this.totalImages === this.loadedAssets
                        }

                        function G() {
                            return this.totalFootages === this.loadedFootagesCount
                        }

                        function W(u, P) {
                            "svg" === u ? (this._elementHelper = P, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                        }

                        function Y() {
                            this._imageLoaded = P.bind(this), this._footageLoaded = D.bind(this), this.testImageLoaded = E.bind(this), this.createFootageData = F.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                        }
                        return Y.prototype = {
                            loadAssets: I,
                            setAssetsPath: V,
                            setPath: L,
                            loadedImages: N,
                            loadedFootages: G,
                            destroy: O,
                            getAsset: R,
                            createImgData: M,
                            createImageData: T,
                            imageLoaded: P,
                            footageLoaded: D,
                            setCacheType: W
                        }, Y
                    }();

                function BaseEvent() {}
                BaseEvent.prototype = {
                    triggerEvent: function(u, P) {
                        if (this._cbs[u])
                            for (var D = this._cbs[u], S = 0; S < D.length; S += 1) D[S](P)
                    },
                    addEventListener: function(u, P) {
                        return this._cbs[u] || (this._cbs[u] = []), this._cbs[u].push(P), (function() {
                            this.removeEventListener(u, P)
                        }).bind(this)
                    },
                    removeEventListener: function(u, P) {
                        if (P) {
                            if (this._cbs[u]) {
                                for (var D = 0, S = this._cbs[u].length; D < S;) this._cbs[u][D] === P && (this._cbs[u].splice(D, 1), D -= 1, S -= 1), D += 1;
                                this._cbs[u].length || (this._cbs[u] = null)
                            }
                        } else this._cbs[u] = null
                    }
                };
                var markerParser = function() {
                        function u(u) {
                            for (var P, D = u.split("\r\n"), S = {}, E = 0, T = 0; T < D.length; T += 1) 2 === (P = D[T].split(":")).length && (S[P[0]] = P[1].trim(), E += 1);
                            if (0 === E) throw Error();
                            return S
                        }
                        return function(P) {
                            for (var D = [], S = 0; S < P.length; S += 1) {
                                var E = P[S],
                                    T = {
                                        time: E.tm,
                                        duration: E.dr
                                    };
                                try {
                                    T.payload = JSON.parse(P[S].cm)
                                } catch (D) {
                                    try {
                                        T.payload = u(P[S].cm)
                                    } catch (u) {
                                        T.payload = {
                                            name: P[S].cm
                                        }
                                    }
                                }
                                D.push(T)
                            }
                            return D
                        }
                    }(),
                    ProjectInterface = function() {
                        function u(u) {
                            this.compositions.push(u)
                        }
                        return function() {
                            function P(u) {
                                for (var P = 0, D = this.compositions.length; P < D;) {
                                    if (this.compositions[P].data && this.compositions[P].data.nm === u) return this.compositions[P].prepareFrame && this.compositions[P].data.xt && this.compositions[P].prepareFrame(this.currentFrame), this.compositions[P].compInterface;
                                    P += 1
                                }
                                return null
                            }
                            return P.compositions = [], P.currentFrame = 0, P.registerComposition = u, P
                        }
                    }(),
                    renderers = {},
                    registerRenderer = function(u, P) {
                        renderers[u] = P
                    };

                function getRenderer(u) {
                    return renderers[u]
                }

                function getRegisteredRenderer() {
                    if (renderers.canvas) return "canvas";
                    for (var u in renderers)
                        if (renderers[u]) return u;
                    return ""
                }

                function _typeof$4(u) {
                    return (_typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }
                var AnimationItem = function() {
                    this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)
                };
                extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(u) {
                    (u.wrapper || u.container) && (this.wrapper = u.wrapper || u.container);
                    var P = "svg";
                    u.animType ? P = u.animType : u.renderer && (P = u.renderer);
                    var D = getRenderer(P);
                    this.renderer = new D(this, u.rendererSettings), this.imagePreloader.setCacheType(P, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = P, "" === u.loop || null === u.loop || void 0 === u.loop || !0 === u.loop ? this.loop = !0 : !1 === u.loop ? this.loop = !1 : this.loop = parseInt(u.loop, 10), this.autoplay = !("autoplay" in u) || u.autoplay, this.name = u.name ? u.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(u, "autoloadSegments") || u.autoloadSegments, this.assetsPath = u.assetsPath, this.initialSegment = u.initialSegment, u.audioFactory && this.audioController.setAudioFactory(u.audioFactory), u.animationData ? this.setupAnimation(u.animationData) : u.path && (-1 !== u.path.lastIndexOf("\\") ? this.path = u.path.substr(0, u.path.lastIndexOf("\\") + 1) : this.path = u.path.substr(0, u.path.lastIndexOf("/") + 1), this.fileName = u.path.substr(u.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(u.path, this.configAnimation, this.onSetupError))
                }, AnimationItem.prototype.onSetupError = function() {
                    this.trigger("data_failed")
                }, AnimationItem.prototype.setupAnimation = function(u) {
                    dataManager.completeAnimation(u, this.configAnimation)
                }, AnimationItem.prototype.setData = function(u, P) {
                    P && "object" !== _typeof$4(P) && (P = JSON.parse(P));
                    var D = {
                            wrapper: u,
                            animationData: P
                        },
                        S = u.attributes;
                    D.path = S.getNamedItem("data-animation-path") ? S.getNamedItem("data-animation-path").value : S.getNamedItem("data-bm-path") ? S.getNamedItem("data-bm-path").value : S.getNamedItem("bm-path") ? S.getNamedItem("bm-path").value : "", D.animType = S.getNamedItem("data-anim-type") ? S.getNamedItem("data-anim-type").value : S.getNamedItem("data-bm-type") ? S.getNamedItem("data-bm-type").value : S.getNamedItem("bm-type") ? S.getNamedItem("bm-type").value : S.getNamedItem("data-bm-renderer") ? S.getNamedItem("data-bm-renderer").value : S.getNamedItem("bm-renderer") ? S.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
                    var E = S.getNamedItem("data-anim-loop") ? S.getNamedItem("data-anim-loop").value : S.getNamedItem("data-bm-loop") ? S.getNamedItem("data-bm-loop").value : S.getNamedItem("bm-loop") ? S.getNamedItem("bm-loop").value : "";
                    "false" === E ? D.loop = !1 : "true" === E ? D.loop = !0 : "" !== E && (D.loop = parseInt(E, 10));
                    var T = S.getNamedItem("data-anim-autoplay") ? S.getNamedItem("data-anim-autoplay").value : S.getNamedItem("data-bm-autoplay") ? S.getNamedItem("data-bm-autoplay").value : !S.getNamedItem("bm-autoplay") || S.getNamedItem("bm-autoplay").value;
                    D.autoplay = "false" !== T, D.name = S.getNamedItem("data-name") ? S.getNamedItem("data-name").value : S.getNamedItem("data-bm-name") ? S.getNamedItem("data-bm-name").value : S.getNamedItem("bm-name") ? S.getNamedItem("bm-name").value : "", "false" === (S.getNamedItem("data-anim-prerender") ? S.getNamedItem("data-anim-prerender").value : S.getNamedItem("data-bm-prerender") ? S.getNamedItem("data-bm-prerender").value : S.getNamedItem("bm-prerender") ? S.getNamedItem("bm-prerender").value : "") && (D.prerender = !1), D.path ? this.setParams(D) : this.trigger("destroy")
                }, AnimationItem.prototype.includeLayers = function(u) {
                    u.op > this.animationData.op && (this.animationData.op = u.op, this.totalFrames = Math.floor(u.op - this.animationData.ip));
                    var P, D, S = this.animationData.layers,
                        E = S.length,
                        T = u.layers,
                        M = T.length;
                    for (D = 0; D < M; D += 1)
                        for (P = 0; P < E;) {
                            if (S[P].id === T[D].id) {
                                S[P] = T[D];
                                break
                            }
                            P += 1
                        }
                    if ((u.chars || u.fonts) && (this.renderer.globalData.fontManager.addChars(u.chars), this.renderer.globalData.fontManager.addFonts(u.fonts, this.renderer.globalData.defs)), u.assets)
                        for (P = 0, E = u.assets.length; P < E; P += 1) this.animationData.assets.push(u.assets[P]);
                    this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
                }, AnimationItem.prototype.onSegmentComplete = function(u) {
                    this.animationData = u;
                    var P = getExpressionsPlugin();
                    P && P.initExpressions(this), this.loadNextSegment()
                }, AnimationItem.prototype.loadNextSegment = function() {
                    var u = this.animationData.segments;
                    if (!u || 0 === u.length || !this.autoloadSegments) {
                        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
                        return
                    }
                    var P = u.shift();
                    this.timeCompleted = P.time * this.frameRate;
                    var D = this.path + this.fileName + "_" + this.segmentPos + ".json";
                    this.segmentPos += 1, dataManager.loadData(D, this.includeLayers.bind(this), (function() {
                        this.trigger("data_failed")
                    }).bind(this))
                }, AnimationItem.prototype.loadSegments = function() {
                    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                }, AnimationItem.prototype.imagesLoaded = function() {
                    this.trigger("loaded_images"), this.checkLoaded()
                }, AnimationItem.prototype.preloadImages = function() {
                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                }, AnimationItem.prototype.configAnimation = function(u) {
                    if (this.renderer) try {
                        this.animationData = u, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(u), u.assets || (u.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(u.assets), this.markers = markerParser(u.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                    } catch (u) {
                        this.triggerConfigError(u)
                    }
                }, AnimationItem.prototype.waitForFontsLoaded = function() {
                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                }, AnimationItem.prototype.checkLoaded = function() {
                    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                        this.isLoaded = !0;
                        var u = getExpressionsPlugin();
                        u && u.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
                            this.trigger("DOMLoaded")
                        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
                    }
                }, AnimationItem.prototype.resize = function(u, P) {
                    var D = "number" == typeof u ? u : void 0,
                        S = "number" == typeof P ? P : void 0;
                    this.renderer.updateContainerSize(D, S)
                }, AnimationItem.prototype.setSubframe = function(u) {
                    this.isSubframeEnabled = !!u
                }, AnimationItem.prototype.gotoFrame = function() {
                    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                }, AnimationItem.prototype.renderFrame = function() {
                    if (!1 !== this.isLoaded && this.renderer) try {
                        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (u) {
                        this.triggerRenderFrameError(u)
                    }
                }, AnimationItem.prototype.play = function(u) {
                    (!u || this.name === u) && !0 === this.isPaused && (this.isPaused = !1, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                }, AnimationItem.prototype.pause = function(u) {
                    u && this.name !== u || !1 !== this.isPaused || (this.isPaused = !0, this.trigger("_play"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                }, AnimationItem.prototype.togglePause = function(u) {
                    u && this.name !== u || (!0 === this.isPaused ? this.play() : this.pause())
                }, AnimationItem.prototype.stop = function(u) {
                    u && this.name !== u || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                }, AnimationItem.prototype.getMarkerData = function(u) {
                    for (var P, D = 0; D < this.markers.length; D += 1)
                        if ((P = this.markers[D]).payload && P.payload.name === u) return P;
                    return null
                }, AnimationItem.prototype.goToAndStop = function(u, P, D) {
                    if (!D || this.name === D) {
                        if (isNaN(Number(u))) {
                            var S = this.getMarkerData(u);
                            S && this.goToAndStop(S.time, !0)
                        } else P ? this.setCurrentRawFrameValue(u) : this.setCurrentRawFrameValue(u * this.frameModifier);
                        this.pause()
                    }
                }, AnimationItem.prototype.goToAndPlay = function(u, P, D) {
                    if (!D || this.name === D) {
                        var S = Number(u);
                        if (isNaN(S)) {
                            var E = this.getMarkerData(u);
                            E && (E.duration ? this.playSegments([E.time, E.time + E.duration], !0) : this.goToAndStop(E.time, !0))
                        } else this.goToAndStop(S, P, D);
                        this.play()
                    }
                }, AnimationItem.prototype.advanceTime = function(u) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                        var P = this.currentRawFrame + u * this.frameModifier,
                            D = !1;
                        P >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? P >= this.totalFrames ? (this.playCount += 1, this.checkSegments(P % this.totalFrames) || (this.setCurrentRawFrameValue(P % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(P) : this.checkSegments(P > this.totalFrames ? P % this.totalFrames : 0) || (D = !0, P = this.totalFrames - 1) : P < 0 ? this.checkSegments(P % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && !0 !== this.loop) ? (this.setCurrentRawFrameValue(this.totalFrames + P % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (D = !0, P = 0)) : this.setCurrentRawFrameValue(P), D && (this.setCurrentRawFrameValue(P), this.pause(), this.trigger("complete"))
                    }
                }, AnimationItem.prototype.adjustSegment = function(u, P) {
                    this.playCount = 0, u[1] < u[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = u[0] - u[1], this.timeCompleted = this.totalFrames, this.firstFrame = u[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - P)) : u[1] > u[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = u[1] - u[0], this.timeCompleted = this.totalFrames, this.firstFrame = u[0], this.setCurrentRawFrameValue(.001 + P)), this.trigger("segmentStart")
                }, AnimationItem.prototype.setSegment = function(u, P) {
                    var D = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < u ? D = u : this.currentRawFrame + this.firstFrame > P && (D = P - u)), this.firstFrame = u, this.totalFrames = P - u, this.timeCompleted = this.totalFrames, -1 !== D && this.goToAndStop(D, !0)
                }, AnimationItem.prototype.playSegments = function(u, P) {
                    if (P && (this.segments.length = 0), "object" === _typeof$4(u[0])) {
                        var D, S = u.length;
                        for (D = 0; D < S; D += 1) this.segments.push(u[D])
                    } else this.segments.push(u);
                    this.segments.length && P && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                }, AnimationItem.prototype.resetSegments = function(u) {
                    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), u && this.checkSegments(0)
                }, AnimationItem.prototype.checkSegments = function(u) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), u), !0)
                }, AnimationItem.prototype.destroy = function(u) {
                    (!u || this.name === u) && this.renderer && (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
                }, AnimationItem.prototype.setCurrentRawFrameValue = function(u) {
                    this.currentRawFrame = u, this.gotoFrame()
                }, AnimationItem.prototype.setSpeed = function(u) {
                    this.playSpeed = u, this.updaFrameModifier()
                }, AnimationItem.prototype.setDirection = function(u) {
                    this.playDirection = u < 0 ? -1 : 1, this.updaFrameModifier()
                }, AnimationItem.prototype.setLoop = function(u) {
                    this.loop = u
                }, AnimationItem.prototype.setVolume = function(u, P) {
                    P && this.name !== P || this.audioController.setVolume(u)
                }, AnimationItem.prototype.getVolume = function() {
                    return this.audioController.getVolume()
                }, AnimationItem.prototype.mute = function(u) {
                    u && this.name !== u || this.audioController.mute()
                }, AnimationItem.prototype.unmute = function(u) {
                    u && this.name !== u || this.audioController.unmute()
                }, AnimationItem.prototype.updaFrameModifier = function() {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                }, AnimationItem.prototype.getPath = function() {
                    return this.path
                }, AnimationItem.prototype.getAssetsPath = function(u) {
                    var P = "";
                    if (u.e) P = u.p;
                    else if (this.assetsPath) {
                        var D = u.p; - 1 !== D.indexOf("images/") && (D = D.split("/")[1]), P = this.assetsPath + D
                    } else P = this.path + (u.u ? u.u : "") + u.p;
                    return P
                }, AnimationItem.prototype.getAssetData = function(u) {
                    for (var P = 0, D = this.assets.length; P < D;) {
                        if (u === this.assets[P].id) return this.assets[P];
                        P += 1
                    }
                    return null
                }, AnimationItem.prototype.hide = function() {
                    this.renderer.hide()
                }, AnimationItem.prototype.show = function() {
                    this.renderer.show()
                }, AnimationItem.prototype.getDuration = function(u) {
                    return u ? this.totalFrames : this.totalFrames / this.frameRate
                }, AnimationItem.prototype.updateDocumentData = function(u, P, D) {
                    try {
                        this.renderer.getElementByPath(u).updateDocumentData(P, D)
                    } catch (u) {}
                }, AnimationItem.prototype.trigger = function(u) {
                    if (this._cbs && this._cbs[u]) switch (u) {
                        case "enterFrame":
                            this.triggerEvent(u, new BMEnterFrameEvent(u, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case "drawnFrame":
                            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(u, this.drawnFrameEvent);
                            break;
                        case "loopComplete":
                            this.triggerEvent(u, new BMCompleteLoopEvent(u, this.loop, this.playCount, this.frameMult));
                            break;
                        case "complete":
                            this.triggerEvent(u, new BMCompleteEvent(u, this.frameMult));
                            break;
                        case "segmentStart":
                            this.triggerEvent(u, new BMSegmentStartEvent(u, this.firstFrame, this.totalFrames));
                            break;
                        case "destroy":
                            this.triggerEvent(u, new BMDestroyEvent(u, this));
                            break;
                        default:
                            this.triggerEvent(u)
                    }
                    "enterFrame" === u && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(u, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === u && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(u, this.loop, this.playCount, this.frameMult)), "complete" === u && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(u, this.frameMult)), "segmentStart" === u && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(u, this.firstFrame, this.totalFrames)), "destroy" === u && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(u, this))
                }, AnimationItem.prototype.triggerRenderFrameError = function(u) {
                    var P = new BMRenderFrameErrorEvent(u, this.currentFrame);
                    this.triggerEvent("error", P), this.onError && this.onError.call(this, P)
                }, AnimationItem.prototype.triggerConfigError = function(u) {
                    var P = new BMConfigErrorEvent(u, this.currentFrame);
                    this.triggerEvent("error", P), this.onError && this.onError.call(this, P)
                };
                var animationManager = function() {
                        var u = {},
                            P = [],
                            D = 0,
                            S = 0,
                            E = 0,
                            T = !0,
                            M = !1;

                        function F(u) {
                            for (var D = 0, E = u.target; D < S;) P[D].animation !== E || (P.splice(D, 1), D -= 1, S -= 1, E.isPaused || R()), D += 1
                        }

                        function I(u, D) {
                            if (!u) return null;
                            for (var E = 0; E < S;) {
                                if (P[E].elem === u && null !== P[E].elem) return P[E].animation;
                                E += 1
                            }
                            var T = new AnimationItem;
                            return O(T, u), T.setData(u, D), T
                        }

                        function L() {
                            var u, D = P.length,
                                S = [];
                            for (u = 0; u < D; u += 1) S.push(P[u].animation);
                            return S
                        }

                        function V() {
                            E += 1, te()
                        }

                        function R() {
                            E -= 1
                        }

                        function O(u, D) {
                            u.addEventListener("destroy", F), u.addEventListener("_active", V), u.addEventListener("_idle", R), P.push({
                                elem: D,
                                animation: u
                            }), S += 1
                        }

                        function N(u) {
                            var P = new AnimationItem;
                            return O(P, null), P.setParams(u), P
                        }

                        function G(u, D) {
                            var E;
                            for (E = 0; E < S; E += 1) P[E].animation.setSpeed(u, D)
                        }

                        function W(u, D) {
                            var E;
                            for (E = 0; E < S; E += 1) P[E].animation.setDirection(u, D)
                        }

                        function Y(u) {
                            var D;
                            for (D = 0; D < S; D += 1) P[D].animation.play(u)
                        }

                        function H(u) {
                            var F, I = u - D;
                            for (F = 0; F < S; F += 1) P[F].animation.advanceTime(I);
                            D = u, E && !M ? window.requestAnimationFrame(H) : T = !0
                        }

                        function X(u) {
                            D = u, window.requestAnimationFrame(H)
                        }

                        function K(u) {
                            var D;
                            for (D = 0; D < S; D += 1) P[D].animation.pause(u)
                        }

                        function J(u, D, E) {
                            var T;
                            for (T = 0; T < S; T += 1) P[T].animation.goToAndStop(u, D, E)
                        }

                        function Z(u) {
                            var D;
                            for (D = 0; D < S; D += 1) P[D].animation.stop(u)
                        }

                        function U(u) {
                            var D;
                            for (D = 0; D < S; D += 1) P[D].animation.togglePause(u)
                        }

                        function Q(u) {
                            var D;
                            for (D = S - 1; D >= 0; D -= 1) P[D].animation.destroy(u)
                        }

                        function $(u, P, D) {
                            var S, E = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                T = E.length;
                            for (S = 0; S < T; S += 1) D && E[S].setAttribute("data-bm-type", D), I(E[S], u);
                            if (P && 0 === T) {
                                D || (D = "svg");
                                var M = document.getElementsByTagName("body")[0];
                                M.innerText = "";
                                var F = createTag("div");
                                F.style.width = "100%", F.style.height = "100%", F.setAttribute("data-bm-type", D), M.appendChild(F), I(F, u)
                            }
                        }

                        function tt() {
                            var u;
                            for (u = 0; u < S; u += 1) P[u].animation.resize()
                        }

                        function te() {
                            !M && E && T && (window.requestAnimationFrame(X), T = !1)
                        }

                        function ts() {
                            M = !0
                        }

                        function tr() {
                            M = !1, te()
                        }

                        function ta(u, D) {
                            var E;
                            for (E = 0; E < S; E += 1) P[E].animation.setVolume(u, D)
                        }

                        function tn(u) {
                            var D;
                            for (D = 0; D < S; D += 1) P[D].animation.mute(u)
                        }

                        function th(u) {
                            var D;
                            for (D = 0; D < S; D += 1) P[D].animation.unmute(u)
                        }
                        return u.registerAnimation = I, u.loadAnimation = N, u.setSpeed = G, u.setDirection = W, u.play = Y, u.pause = K, u.stop = Z, u.togglePause = U, u.searchAnimations = $, u.resize = tt, u.goToAndStop = J, u.destroy = Q, u.freeze = ts, u.unfreeze = tr, u.setVolume = ta, u.mute = tn, u.unmute = th, u.getRegisteredAnimations = L, u
                    }(),
                    BezierFactory = function() {
                        var u = {};
                        u.getBezierEasing = D;
                        var P = {};

                        function D(u, D, S, E, T) {
                            var M = T || ("bez_" + u + "_" + D + "_" + S + "_" + E).replace(/\./g, "p");
                            if (P[M]) return P[M];
                            var F = new H([u, D, S, E]);
                            return P[M] = F, F
                        }
                        var S = 4,
                            E = .001,
                            T = 1e-7,
                            M = 10,
                            F = 11,
                            I = .1,
                            L = "function" == typeof Float32Array;

                        function V(u, P) {
                            return 1 - 3 * P + 3 * u
                        }

                        function R(u, P) {
                            return 3 * P - 6 * u
                        }

                        function O(u) {
                            return 3 * u
                        }

                        function N(u, P, D) {
                            return ((V(P, D) * u + R(P, D)) * u + O(P)) * u
                        }

                        function G(u, P, D) {
                            return 3 * V(P, D) * u * u + 2 * R(P, D) * u + O(P)
                        }

                        function W(u, P, D, S, E) {
                            var F, I, L = 0;
                            do(F = N(I = P + (D - P) / 2, S, E) - u) > 0 ? D = I : P = I; while (Math.abs(F) > T && ++L < M);
                            return I
                        }

                        function Y(u, P, D, E) {
                            for (var T = 0; T < S; ++T) {
                                var M = G(P, D, E);
                                if (0 === M) break;
                                var F = N(P, D, E) - u;
                                P -= F / M
                            }
                            return P
                        }

                        function H(u) {
                            this._p = u, this._mSampleValues = L ? new Float32Array(F) : Array(F), this._precomputed = !1, this.get = this.get.bind(this)
                        }
                        return H.prototype = {
                            get: function(u) {
                                var P = this._p[0],
                                    D = this._p[1],
                                    S = this._p[2],
                                    E = this._p[3];
                                return (this._precomputed || this._precompute(), P === D && S === E) ? u : 0 === u ? 0 : 1 === u ? 1 : N(this._getTForX(u), D, E)
                            },
                            _precompute: function() {
                                var u = this._p[0],
                                    P = this._p[1],
                                    D = this._p[2],
                                    S = this._p[3];
                                this._precomputed = !0, (u !== P || D !== S) && this._calcSampleValues()
                            },
                            _calcSampleValues: function() {
                                for (var u = this._p[0], P = this._p[2], D = 0; D < F; ++D) this._mSampleValues[D] = N(D * I, u, P)
                            },
                            _getTForX: function(u) {
                                for (var P = this._p[0], D = this._p[2], S = this._mSampleValues, T = 0, M = 1, L = F - 1; M !== L && S[M] <= u; ++M) T += I;
                                var V = T + (u - S[--M]) / (S[M + 1] - S[M]) * I,
                                    R = G(V, P, D);
                                return R >= E ? Y(u, V, P, D) : 0 === R ? V : W(u, T, T + I, P, D)
                            }
                        }, u
                    }(),
                    pooling = function() {
                        return {
                            double: function(u) {
                                return u.concat(createSizedArray(u.length))
                            }
                        }
                    }(),
                    poolFactory = function() {
                        return function(u, P, D) {
                            var S = 0,
                                E = u,
                                T = createSizedArray(E);
                            return {
                                newElement: function() {
                                    var u;
                                    return S ? (S -= 1, u = T[S]) : u = P(), u
                                },
                                release: function(u) {
                                    S === E && (T = pooling.double(T), E *= 2), D && D(u), T[S] = u, S += 1
                                }
                            }
                        }
                    }(),
                    bezierLengthPool = function() {
                        return poolFactory(8, function() {
                            return {
                                addedLength: 0,
                                percents: createTypedArray("float32", getDefaultCurveSegments()),
                                lengths: createTypedArray("float32", getDefaultCurveSegments())
                            }
                        })
                    }(),
                    segmentsLengthPool = function() {
                        function u(u) {
                            var P, D = u.lengths.length;
                            for (P = 0; P < D; P += 1) bezierLengthPool.release(u.lengths[P]);
                            u.lengths.length = 0
                        }
                        return poolFactory(8, function() {
                            return {
                                lengths: [],
                                totalLength: 0
                            }
                        }, u)
                    }();

                function bezFunction() {
                    var u = Math;

                    function P(u, P, D, S, E, T) {
                        var M = u * S + P * E + D * T - E * S - T * u - D * P;
                        return M > -.001 && M < .001
                    }

                    function D(D, S, E, T, M, F, I, L, V) {
                        if (0 === E && 0 === F && 0 === V) return P(D, S, T, M, I, L);
                        var R, O = u.sqrt(u.pow(T - D, 2) + u.pow(M - S, 2) + u.pow(F - E, 2)),
                            N = u.sqrt(u.pow(I - D, 2) + u.pow(L - S, 2) + u.pow(V - E, 2)),
                            G = u.sqrt(u.pow(I - T, 2) + u.pow(L - M, 2) + u.pow(V - F, 2));
                        return (R = O > N ? O > G ? O - N - G : G - N - O : G > N ? G - N - O : N - O - G) > -.0001 && R < 1e-4
                    }
                    var S = function() {
                        return function(u, P, D, S) {
                            var E, T, M, F, I, L, V = getDefaultCurveSegments(),
                                R = 0,
                                O = [],
                                N = [],
                                G = bezierLengthPool.newElement();
                            for (E = 0, M = D.length; E < V; E += 1) {
                                for (T = 0, I = E / (V - 1), L = 0; T < M; T += 1) F = bmPow(1 - I, 3) * u[T] + 3 * bmPow(1 - I, 2) * I * D[T] + 3 * (1 - I) * bmPow(I, 2) * S[T] + bmPow(I, 3) * P[T], O[T] = F, null !== N[T] && (L += bmPow(O[T] - N[T], 2)), N[T] = O[T];
                                L && (R += L = bmSqrt(L)), G.percents[E] = I, G.lengths[E] = R
                            }
                            return G.addedLength = R, G
                        }
                    }();

                    function E(u) {
                        var P, D = segmentsLengthPool.newElement(),
                            E = u.c,
                            T = u.v,
                            M = u.o,
                            F = u.i,
                            I = u._length,
                            L = D.lengths,
                            V = 0;
                        for (P = 0; P < I - 1; P += 1) L[P] = S(T[P], T[P + 1], M[P], F[P + 1]), V += L[P].addedLength;
                        return E && I && (L[P] = S(T[P], T[0], M[P], F[0]), V += L[P].addedLength), D.totalLength = V, D
                    }

                    function T(u) {
                        this.segmentLength = 0, this.points = Array(u)
                    }

                    function M(u, P) {
                        this.partialLength = u, this.point = P
                    }
                    var F = function() {
                        var u = {};
                        return function(D, S, E, F) {
                            var I = (D[0] + "_" + D[1] + "_" + S[0] + "_" + S[1] + "_" + E[0] + "_" + E[1] + "_" + F[0] + "_" + F[1]).replace(/\./g, "p");
                            if (!u[I]) {
                                var L, V, R, O, N, G, W, Y = getDefaultCurveSegments(),
                                    H = 0,
                                    X = null;
                                2 === D.length && (D[0] !== S[0] || D[1] !== S[1]) && P(D[0], D[1], S[0], S[1], D[0] + E[0], D[1] + E[1]) && P(D[0], D[1], S[0], S[1], S[0] + F[0], S[1] + F[1]) && (Y = 2);
                                var K = new T(Y);
                                for (L = 0, R = E.length; L < Y; L += 1) {
                                    for (V = 0, W = createSizedArray(R), N = L / (Y - 1), G = 0; V < R; V += 1) O = bmPow(1 - N, 3) * D[V] + 3 * bmPow(1 - N, 2) * N * (D[V] + E[V]) + 3 * (1 - N) * bmPow(N, 2) * (S[V] + F[V]) + bmPow(N, 3) * S[V], W[V] = O, null !== X && (G += bmPow(W[V] - X[V], 2));
                                    H += G = bmSqrt(G), K.points[L] = new M(G, W), X = W
                                }
                                K.segmentLength = H, u[I] = K
                            }
                            return u[I]
                        }
                    }();

                    function I(u, P) {
                        var D = P.percents,
                            S = P.lengths,
                            E = D.length,
                            T = bmFloor((E - 1) * u),
                            M = u * P.addedLength,
                            F = 0;
                        if (T === E - 1 || 0 === T || M === S[T]) return D[T];
                        for (var I = S[T] > M ? -1 : 1, L = !0; L;)
                            if (S[T] <= M && S[T + 1] > M ? (F = (M - S[T]) / (S[T + 1] - S[T]), L = !1) : T += I, T < 0 || T >= E - 1) {
                                if (T === E - 1) return D[T];
                                L = !1
                            }
                        return D[T] + (D[T + 1] - D[T]) * F
                    }

                    function L(P, D, S, E, T, M) {
                        var F = I(T, M),
                            L = 1 - F;
                        return [u.round((L * L * L * P[0] + (F * L * L + L * F * L + L * L * F) * S[0] + (F * F * L + L * F * F + F * L * F) * E[0] + F * F * F * D[0]) * 1e3) / 1e3, u.round((L * L * L * P[1] + (F * L * L + L * F * L + L * L * F) * S[1] + (F * F * L + L * F * F + F * L * F) * E[1] + F * F * F * D[1]) * 1e3) / 1e3]
                    }
                    var V = createTypedArray("float32", 8);
                    return {
                        getSegmentsLength: E,
                        getNewSegment: function(P, D, S, E, T, M, F) {
                            T < 0 ? T = 0 : T > 1 && (T = 1);
                            var L, R = I(T, F),
                                O = I(M = M > 1 ? 1 : M, F),
                                N = P.length,
                                G = 1 - R,
                                W = 1 - O,
                                Y = G * G * G,
                                H = R * G * G * 3,
                                X = R * R * G * 3,
                                K = R * R * R,
                                J = G * G * W,
                                Z = R * G * W + G * R * W + G * G * O,
                                U = R * R * W + G * R * O + R * G * O,
                                Q = R * R * O,
                                $ = G * W * W,
                                tt = R * W * W + G * O * W + G * W * O,
                                te = R * O * W + G * O * O + R * W * O,
                                ts = R * O * O,
                                tr = W * W * W,
                                ta = O * W * W + W * O * W + W * W * O,
                                tn = O * O * W + W * O * O + O * W * O,
                                th = O * O * O;
                            for (L = 0; L < N; L += 1) V[4 * L] = u.round((Y * P[L] + H * S[L] + X * E[L] + K * D[L]) * 1e3) / 1e3, V[4 * L + 1] = u.round((J * P[L] + Z * S[L] + U * E[L] + Q * D[L]) * 1e3) / 1e3, V[4 * L + 2] = u.round(($ * P[L] + tt * S[L] + te * E[L] + ts * D[L]) * 1e3) / 1e3, V[4 * L + 3] = u.round((tr * P[L] + ta * S[L] + tn * E[L] + th * D[L]) * 1e3) / 1e3;
                            return V
                        },
                        getPointInSegment: L,
                        buildBezierData: F,
                        pointOnLine2D: P,
                        pointOnLine3D: D
                    }
                }
                var bez = bezFunction(),
                    initFrame = initialDefaultFrame,
                    mathAbs = Math.abs;

                function interpolateValue(u, P) {
                    var D, S, E, T, M, F = this.offsetTime;
                    "multidimensional" === this.propType && (Y = createTypedArray("float32", this.pv.length));
                    for (var I = P.lastIndex, L = I, V = this.keyframes.length - 1, R = !0; R;) {
                        if (H = this.keyframes[L], X = this.keyframes[L + 1], L === V - 1 && u >= X.t - F) {
                            H.h && (H = X), I = 0;
                            break
                        }
                        if (X.t - F > u) {
                            I = L;
                            break
                        }
                        L < V - 1 ? L += 1 : (I = 0, R = !1)
                    }
                    K = this.keyframesMetadata[L] || {};
                    var O = X.t - F,
                        N = H.t - F;
                    if (H.to) {
                        K.bezierData || (K.bezierData = bez.buildBezierData(H.s, X.s || H.e, H.to, H.ti));
                        var G = K.bezierData;
                        if (u >= O || u < N) {
                            var W = u >= O ? G.points.length - 1 : 0;
                            for (J = 0, Z = G.points[W].point.length; J < Z; J += 1) Y[J] = G.points[W].point[J]
                        } else {
                            K.__fnct ? tt = K.__fnct : (tt = BezierFactory.getBezierEasing(H.o.x, H.o.y, H.i.x, H.i.y, H.n).get, K.__fnct = tt), U = tt((u - N) / (O - N));
                            var Y, H, X, K, J, Z, U, Q, $, tt, te, ts, tr = G.segmentLength * U,
                                ta = P.lastFrame < u && P._lastKeyframeIndex === L ? P._lastAddedLength : 0;
                            for ($ = P.lastFrame < u && P._lastKeyframeIndex === L ? P._lastPoint : 0, R = !0, Q = G.points.length; R;) {
                                if (ta += G.points[$].partialLength, 0 === tr || 0 === U || $ === G.points.length - 1) {
                                    for (J = 0, Z = G.points[$].point.length; J < Z; J += 1) Y[J] = G.points[$].point[J];
                                    break
                                }
                                if (tr >= ta && tr < ta + G.points[$ + 1].partialLength) {
                                    for (J = 0, ts = (tr - ta) / G.points[$ + 1].partialLength, Z = G.points[$].point.length; J < Z; J += 1) Y[J] = G.points[$].point[J] + (G.points[$ + 1].point[J] - G.points[$].point[J]) * ts;
                                    break
                                }
                                $ < Q - 1 ? $ += 1 : R = !1
                            }
                            P._lastPoint = $, P._lastAddedLength = ta - G.points[$].partialLength, P._lastKeyframeIndex = L
                        }
                    } else if (V = H.s.length, te = X.s || H.e, this.sh && 1 !== H.h) u >= O ? (Y[0] = te[0], Y[1] = te[1], Y[2] = te[2]) : u <= N ? (Y[0] = H.s[0], Y[1] = H.s[1], Y[2] = H.s[2]) : quaternionToEuler(Y, slerp(createQuaternion(H.s), createQuaternion(te), (u - N) / (O - N)));
                    else
                        for (L = 0; L < V; L += 1) 1 !== H.h && (u >= O ? U = 1 : u < N ? U = 0 : (H.o.x.constructor === Array ? (K.__fnct || (K.__fnct = []), K.__fnct[L] ? tt = K.__fnct[L] : (D = void 0 === H.o.x[L] ? H.o.x[0] : H.o.x[L], S = void 0 === H.o.y[L] ? H.o.y[0] : H.o.y[L], E = void 0 === H.i.x[L] ? H.i.x[0] : H.i.x[L], T = void 0 === H.i.y[L] ? H.i.y[0] : H.i.y[L], tt = BezierFactory.getBezierEasing(D, S, E, T).get, K.__fnct[L] = tt)) : K.__fnct ? tt = K.__fnct : (D = H.o.x, S = H.o.y, E = H.i.x, T = H.i.y, tt = BezierFactory.getBezierEasing(D, S, E, T).get, H.keyframeMetadata = tt), U = tt((u - N) / (O - N)))), te = X.s || H.e, M = 1 === H.h ? H.s[L] : H.s[L] + (te[L] - H.s[L]) * U, "multidimensional" === this.propType ? Y[L] = M : Y = M;
                    return P.lastIndex = I, Y
                }

                function slerp(u, P, D) {
                    var S, E, T, M, F, I = [],
                        L = u[0],
                        V = u[1],
                        R = u[2],
                        O = u[3],
                        N = P[0],
                        G = P[1],
                        W = P[2],
                        Y = P[3];
                    return (E = L * N + V * G + R * W + O * Y) < 0 && (E = -E, N = -N, G = -G, W = -W, Y = -Y), 1 - E > 1e-6 ? (T = Math.sin(S = Math.acos(E)), M = Math.sin((1 - D) * S) / T, F = Math.sin(D * S) / T) : (M = 1 - D, F = D), I[0] = M * L + F * N, I[1] = M * V + F * G, I[2] = M * R + F * W, I[3] = M * O + F * Y, I
                }

                function quaternionToEuler(u, P) {
                    var D = P[0],
                        S = P[1],
                        E = P[2],
                        T = P[3],
                        M = Math.atan2(2 * S * T - 2 * D * E, 1 - 2 * S * S - 2 * E * E),
                        F = Math.asin(2 * D * S + 2 * E * T),
                        I = Math.atan2(2 * D * T - 2 * S * E, 1 - 2 * D * D - 2 * E * E);
                    u[0] = M / degToRads, u[1] = F / degToRads, u[2] = I / degToRads
                }

                function createQuaternion(u) {
                    var P = u[0] * degToRads,
                        D = u[1] * degToRads,
                        S = u[2] * degToRads,
                        E = Math.cos(P / 2),
                        T = Math.cos(D / 2),
                        M = Math.cos(S / 2),
                        F = Math.sin(P / 2),
                        I = Math.sin(D / 2),
                        L = Math.sin(S / 2),
                        V = E * T * M - F * I * L;
                    return [F * I * M + E * T * L, F * T * M + E * I * L, E * I * M - F * T * L, V]
                }

                function getValueAtCurrentTime() {
                    var u = this.comp.renderedFrame - this.offsetTime,
                        P = this.keyframes[0].t - this.offsetTime,
                        D = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(u === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= D && u >= D || this._caching.lastFrame < P && u < P))) {
                        this._caching.lastFrame >= u && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                        var S = this.interpolateValue(u, this._caching);
                        this.pv = S
                    }
                    return this._caching.lastFrame = u, this.pv
                }

                function setVValue(u) {
                    var P;
                    if ("unidimensional" === this.propType) P = u * this.mult, mathAbs(this.v - P) > 1e-5 && (this.v = P, this._mdf = !0);
                    else
                        for (var D = 0, S = this.v.length; D < S;) P = u[D] * this.mult, mathAbs(this.v[D] - P) > 1e-5 && (this.v[D] = P, this._mdf = !0), D += 1
                }

                function processEffectsSequence() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
                        if (this.lock) {
                            this.setVValue(this.pv);
                            return
                        }
                        this.lock = !0, this._mdf = this._isFirstFrame;
                        var u, P = this.effectsSequence.length,
                            D = this.kf ? this.pv : this.data.k;
                        for (u = 0; u < P; u += 1) D = this.effectsSequence[u](D);
                        this.setVValue(D), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }

                function addEffect(u) {
                    this.effectsSequence.push(u), this.container.addDynamicProperty(this)
                }

                function ValueProperty(u, P, D, S) {
                    this.propType = "unidimensional", this.mult = D || 1, this.data = P, this.v = D ? P.k * D : P.k, this.pv = P.k, this._mdf = !1, this.elem = u, this.container = S, this.comp = u.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
                }

                function MultiDimensionalProperty(u, P, D, S) {
                    this.propType = "multidimensional", this.mult = D || 1, this.data = P, this._mdf = !1, this.elem = u, this.container = S, this.comp = u.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                    var E, T = P.k.length;
                    for (E = 0, this.v = createTypedArray("float32", T), this.pv = createTypedArray("float32", T), this.vel = createTypedArray("float32", T); E < T; E += 1) this.v[E] = P.k[E] * this.mult, this.pv[E] = P.k[E];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
                }

                function KeyframedValueProperty(u, P, D, S) {
                    this.propType = "unidimensional", this.keyframes = P.k, this.keyframesMetadata = [], this.offsetTime = u.data.st, this.frameId = -1, this._caching = {
                        lastFrame: initFrame,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    }, this.k = !0, this.kf = !0, this.data = P, this.mult = D || 1, this.elem = u, this.container = S, this.comp = u.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
                }

                function KeyframedMultidimensionalProperty(u, P, D, S) {
                    this.propType = "multidimensional";
                    var E, T, M, F, I, L = P.k.length;
                    for (E = 0; E < L - 1; E += 1) P.k[E].to && P.k[E].s && P.k[E + 1] && P.k[E + 1].s && (T = P.k[E].s, M = P.k[E + 1].s, F = P.k[E].to, I = P.k[E].ti, (2 === T.length && !(T[0] === M[0] && T[1] === M[1]) && bez.pointOnLine2D(T[0], T[1], M[0], M[1], T[0] + F[0], T[1] + F[1]) && bez.pointOnLine2D(T[0], T[1], M[0], M[1], M[0] + I[0], M[1] + I[1]) || 3 === T.length && !(T[0] === M[0] && T[1] === M[1] && T[2] === M[2]) && bez.pointOnLine3D(T[0], T[1], T[2], M[0], M[1], M[2], T[0] + F[0], T[1] + F[1], T[2] + F[2]) && bez.pointOnLine3D(T[0], T[1], T[2], M[0], M[1], M[2], M[0] + I[0], M[1] + I[1], M[2] + I[2])) && (P.k[E].to = null, P.k[E].ti = null), T[0] === M[0] && T[1] === M[1] && 0 === F[0] && 0 === F[1] && 0 === I[0] && 0 === I[1] && (2 === T.length || T[2] === M[2] && 0 === F[2] && 0 === I[2]) && (P.k[E].to = null, P.k[E].ti = null));
                    this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = P, this.keyframes = P.k, this.keyframesMetadata = [], this.offsetTime = u.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = D || 1, this.elem = u, this.container = S, this.comp = u.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
                    var V = P.k[0].s.length;
                    for (E = 0, this.v = createTypedArray("float32", V), this.pv = createTypedArray("float32", V); E < V; E += 1) this.v[E] = initFrame, this.pv[E] = initFrame;
                    this._caching = {
                        lastFrame: initFrame,
                        lastIndex: 0,
                        value: createTypedArray("float32", V)
                    }, this.addEffect = addEffect
                }
                var PropertyFactory = function() {
                    return {
                        getProp: function(u, P, D, S, E) {
                            var T;
                            if (P.sid && (P = u.globalData.slotManager.getProp(P)), P.k.length) {
                                if ("number" == typeof P.k[0]) T = new MultiDimensionalProperty(u, P, S, E);
                                else switch (D) {
                                    case 0:
                                        T = new KeyframedValueProperty(u, P, S, E);
                                        break;
                                    case 1:
                                        T = new KeyframedMultidimensionalProperty(u, P, S, E)
                                }
                            } else T = new ValueProperty(u, P, S, E);
                            return T.effectsSequence.length && E.addDynamicProperty(T), T
                        }
                    }
                }();

                function DynamicPropertyContainer() {}
                DynamicPropertyContainer.prototype = {
                    addDynamicProperty: function(u) {
                        -1 === this.dynamicProperties.indexOf(u) && (this.dynamicProperties.push(u), this.container.addDynamicProperty(this), this._isAnimated = !0)
                    },
                    iterateDynamicProperties: function() {
                        this._mdf = !1;
                        var u, P = this.dynamicProperties.length;
                        for (u = 0; u < P; u += 1) this.dynamicProperties[u].getValue(), this.dynamicProperties[u]._mdf && (this._mdf = !0)
                    },
                    initDynamicPropertyContainer: function(u) {
                        this.container = u, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                    }
                };
                var pointPool = function() {
                    return poolFactory(8, function() {
                        return createTypedArray("float32", 2)
                    })
                }();

                function ShapePath() {
                    this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                }
                ShapePath.prototype.setPathData = function(u, P) {
                    this.c = u, this.setLength(P);
                    for (var D = 0; D < P;) this.v[D] = pointPool.newElement(), this.o[D] = pointPool.newElement(), this.i[D] = pointPool.newElement(), D += 1
                }, ShapePath.prototype.setLength = function(u) {
                    for (; this._maxLength < u;) this.doubleArrayLength();
                    this._length = u
                }, ShapePath.prototype.doubleArrayLength = function() {
                    this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                }, ShapePath.prototype.setXYAt = function(u, P, D, S, E) {
                    var T;
                    switch (this._length = Math.max(this._length, S + 1), this._length >= this._maxLength && this.doubleArrayLength(), D) {
                        case "v":
                            T = this.v;
                            break;
                        case "i":
                            T = this.i;
                            break;
                        case "o":
                            T = this.o;
                            break;
                        default:
                            T = []
                    }
                    T[S] && (!T[S] || E) || (T[S] = pointPool.newElement()), T[S][0] = u, T[S][1] = P
                }, ShapePath.prototype.setTripleAt = function(u, P, D, S, E, T, M, F) {
                    this.setXYAt(u, P, "v", M, F), this.setXYAt(D, S, "o", M, F), this.setXYAt(E, T, "i", M, F)
                }, ShapePath.prototype.reverse = function() {
                    var u, P = new ShapePath;
                    P.setPathData(this.c, this._length);
                    var D = this.v,
                        S = this.o,
                        E = this.i,
                        T = 0;
                    this.c && (P.setTripleAt(D[0][0], D[0][1], E[0][0], E[0][1], S[0][0], S[0][1], 0, !1), T = 1);
                    var M = this._length - 1,
                        F = this._length;
                    for (u = T; u < F; u += 1) P.setTripleAt(D[M][0], D[M][1], E[M][0], E[M][1], S[M][0], S[M][1], u, !1), M -= 1;
                    return P
                }, ShapePath.prototype.length = function() {
                    return this._length
                };
                var shapePool = function() {
                    function u(u) {
                        var P, D = u._length;
                        for (P = 0; P < D; P += 1) pointPool.release(u.v[P]), pointPool.release(u.i[P]), pointPool.release(u.o[P]), u.v[P] = null, u.i[P] = null, u.o[P] = null;
                        u._length = 0, u.c = !1
                    }

                    function P(u) {
                        var P, S = D.newElement(),
                            E = void 0 === u._length ? u.v.length : u._length;
                        for (S.setLength(E), S.c = u.c, P = 0; P < E; P += 1) S.setTripleAt(u.v[P][0], u.v[P][1], u.o[P][0], u.o[P][1], u.i[P][0], u.i[P][1], P);
                        return S
                    }
                    var D = poolFactory(4, function() {
                        return new ShapePath
                    }, u);
                    return D.clone = P, D
                }();

                function ShapeCollection() {
                    this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                }
                ShapeCollection.prototype.addShape = function(u) {
                    this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = u, this._length += 1
                }, ShapeCollection.prototype.releaseShapes = function() {
                    var u;
                    for (u = 0; u < this._length; u += 1) shapePool.release(this.shapes[u]);
                    this._length = 0
                };
                var shapeCollectionPool = function() {
                        var u = {
                                newShapeCollection: E,
                                release: T
                            },
                            P = 0,
                            D = 4,
                            S = createSizedArray(4);

                        function E() {
                            var u;
                            return P ? (P -= 1, u = S[P]) : u = new ShapeCollection, u
                        }

                        function T(u) {
                            var E, T = u._length;
                            for (E = 0; E < T; E += 1) shapePool.release(u.shapes[E]);
                            u._length = 0, P === D && (S = pooling.double(S), D *= 2), S[P] = u, P += 1
                        }
                        return u
                    }(),
                    ShapePropertyFactory = function() {
                        var u = -999999;

                        function P(u, P, D) {
                            var S = D.lastIndex,
                                E = this.keyframes;
                            if (u < E[0].t - this.offsetTime) T = E[0].s[0], F = !0, S = 0;
                            else if (u >= E[E.length - 1].t - this.offsetTime) T = E[E.length - 1].s ? E[E.length - 1].s[0] : E[E.length - 2].e[0], F = !0;
                            else {
                                for (var T, M, F, I, L, V, R, O, N, G, W, Y, H, X = S, K = E.length - 1, J = !0; J && (G = E[X], !((W = E[X + 1]).t - this.offsetTime > u));) X < K - 1 ? X += 1 : J = !1;
                                Y = this.keyframesMetadata[X] || {}, F = 1 === G.h, S = X, F || (u >= W.t - this.offsetTime ? O = 1 : u < G.t - this.offsetTime ? O = 0 : (Y.__fnct ? H = Y.__fnct : (H = BezierFactory.getBezierEasing(G.o.x, G.o.y, G.i.x, G.i.y).get, Y.__fnct = H), O = H((u - (G.t - this.offsetTime)) / (W.t - this.offsetTime - (G.t - this.offsetTime)))), M = W.s ? W.s[0] : G.e[0]), T = G.s[0]
                            }
                            for (I = 0, V = P._length, R = T.i[0].length, D.lastIndex = S; I < V; I += 1)
                                for (L = 0; L < R; L += 1) N = F ? T.i[I][L] : T.i[I][L] + (M.i[I][L] - T.i[I][L]) * O, P.i[I][L] = N, N = F ? T.o[I][L] : T.o[I][L] + (M.o[I][L] - T.o[I][L]) * O, P.o[I][L] = N, N = F ? T.v[I][L] : T.v[I][L] + (M.v[I][L] - T.v[I][L]) * O, P.v[I][L] = N
                        }

                        function D() {
                            var P = this.comp.renderedFrame - this.offsetTime,
                                D = this.keyframes[0].t - this.offsetTime,
                                S = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                E = this._caching.lastFrame;
                            return E !== u && (E < D && P < D || E > S && P > S) || (this._caching.lastIndex = E < P ? this._caching.lastIndex : 0, this.interpolateShape(P, this.pv, this._caching)), this._caching.lastFrame = P, this.pv
                        }

                        function S() {
                            this.paths = this.localShapeCollection
                        }

                        function E(u, P) {
                            if (u._length !== P._length || u.c !== P.c) return !1;
                            var D, S = u._length;
                            for (D = 0; D < S; D += 1)
                                if (u.v[D][0] !== P.v[D][0] || u.v[D][1] !== P.v[D][1] || u.o[D][0] !== P.o[D][0] || u.o[D][1] !== P.o[D][1] || u.i[D][0] !== P.i[D][0] || u.i[D][1] !== P.i[D][1]) return !1;
                            return !0
                        }

                        function T(u) {
                            E(this.v, u) || (this.v = shapePool.clone(u), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                        }

                        function M() {
                            if (this.elem.globalData.frameId !== this.frameId) {
                                if (!this.effectsSequence.length) {
                                    this._mdf = !1;
                                    return
                                }
                                if (this.lock) {
                                    this.setVValue(this.pv);
                                    return
                                }
                                this.lock = !0, this._mdf = !1, u = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                var u, P, D = this.effectsSequence.length;
                                for (P = 0; P < D; P += 1) u = this.effectsSequence[P](u);
                                this.setVValue(u), this.lock = !1, this.frameId = this.elem.globalData.frameId
                            }
                        }

                        function F(u, P, D) {
                            this.propType = "shape", this.comp = u.comp, this.container = u, this.elem = u, this.data = P, this.k = !1, this.kf = !1, this._mdf = !1;
                            var E = 3 === D ? P.pt.k : P.ks.k;
                            this.v = shapePool.clone(E), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = S, this.effectsSequence = []
                        }

                        function I(u) {
                            this.effectsSequence.push(u), this.container.addDynamicProperty(this)
                        }

                        function L(P, E, T) {
                            this.propType = "shape", this.comp = P.comp, this.elem = P, this.container = P, this.offsetTime = P.data.st, this.keyframes = 3 === T ? E.pt.k : E.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                            var M = this.keyframes[0].s[0].i.length;
                            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, M), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = u, this.reset = S, this._caching = {
                                lastFrame: u,
                                lastIndex: 0
                            }, this.effectsSequence = [D.bind(this)]
                        }
                        F.prototype.interpolateShape = P, F.prototype.getValue = M, F.prototype.setVValue = T, F.prototype.addEffect = I, L.prototype.getValue = M, L.prototype.interpolateShape = P, L.prototype.setVValue = T, L.prototype.addEffect = I;
                        var V = function() {
                                var u = roundCorner;

                                function P(u, P) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = P.d, this.elem = u, this.comp = u.comp, this.frameId = -1, this.initDynamicPropertyContainer(u), this.p = PropertyFactory.getProp(u, P.p, 1, 0, this), this.s = PropertyFactory.getProp(u, P.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                }
                                return P.prototype = {
                                    reset: S,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                    },
                                    convertEllToPath: function() {
                                        var P = this.p.v[0],
                                            D = this.p.v[1],
                                            S = this.s.v[0] / 2,
                                            E = this.s.v[1] / 2,
                                            T = 3 !== this.d,
                                            M = this.v;
                                        M.v[0][0] = P, M.v[0][1] = D - E, M.v[1][0] = T ? P + S : P - S, M.v[1][1] = D, M.v[2][0] = P, M.v[2][1] = D + E, M.v[3][0] = T ? P - S : P + S, M.v[3][1] = D, M.i[0][0] = T ? P - S * u : P + S * u, M.i[0][1] = D - E, M.i[1][0] = T ? P + S : P - S, M.i[1][1] = D - E * u, M.i[2][0] = T ? P + S * u : P - S * u, M.i[2][1] = D + E, M.i[3][0] = T ? P - S : P + S, M.i[3][1] = D + E * u, M.o[0][0] = T ? P + S * u : P - S * u, M.o[0][1] = D - E, M.o[1][0] = T ? P + S : P - S, M.o[1][1] = D + E * u, M.o[2][0] = T ? P - S * u : P + S * u, M.o[2][1] = D + E, M.o[3][0] = T ? P - S : P + S, M.o[3][1] = D - E * u
                                    }
                                }, extendPrototype([DynamicPropertyContainer], P), P
                            }(),
                            R = function() {
                                function u(u, P) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = u, this.comp = u.comp, this.data = P, this.frameId = -1, this.d = P.d, this.initDynamicPropertyContainer(u), 1 === P.sy ? (this.ir = PropertyFactory.getProp(u, P.ir, 0, 0, this), this.is = PropertyFactory.getProp(u, P.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(u, P.pt, 0, 0, this), this.p = PropertyFactory.getProp(u, P.p, 1, 0, this), this.r = PropertyFactory.getProp(u, P.r, 0, degToRads, this), this.or = PropertyFactory.getProp(u, P.or, 0, 0, this), this.os = PropertyFactory.getProp(u, P.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                }
                                return u.prototype = {
                                    reset: S,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                    },
                                    convertStarToPath: function() {
                                        var u, P, D, S, E = 2 * Math.floor(this.pt.v),
                                            T = 2 * Math.PI / E,
                                            M = !0,
                                            F = this.or.v,
                                            I = this.ir.v,
                                            L = this.os.v,
                                            V = this.is.v,
                                            R = 2 * Math.PI * F / (2 * E),
                                            O = 2 * Math.PI * I / (2 * E),
                                            N = -Math.PI / 2;
                                        N += this.r.v;
                                        var G = 3 === this.data.d ? -1 : 1;
                                        for (u = 0, this.v._length = 0; u < E; u += 1) {
                                            P = M ? F : I, D = M ? L : V, S = M ? R : O;
                                            var W = P * Math.cos(N),
                                                Y = P * Math.sin(N),
                                                H = 0 === W && 0 === Y ? 0 : Y / Math.sqrt(W * W + Y * Y),
                                                X = 0 === W && 0 === Y ? 0 : -W / Math.sqrt(W * W + Y * Y);
                                            W += +this.p.v[0], Y += +this.p.v[1], this.v.setTripleAt(W, Y, W - H * S * D * G, Y - X * S * D * G, W + H * S * D * G, Y + X * S * D * G, u, !0), M = !M, N += T * G
                                        }
                                    },
                                    convertPolygonToPath: function() {
                                        var u, P = Math.floor(this.pt.v),
                                            D = 2 * Math.PI / P,
                                            S = this.or.v,
                                            E = this.os.v,
                                            T = 2 * Math.PI * S / (4 * P),
                                            M = -(.5 * Math.PI),
                                            F = 3 === this.data.d ? -1 : 1;
                                        for (M += this.r.v, this.v._length = 0, u = 0; u < P; u += 1) {
                                            var I = S * Math.cos(M),
                                                L = S * Math.sin(M),
                                                V = 0 === I && 0 === L ? 0 : L / Math.sqrt(I * I + L * L),
                                                R = 0 === I && 0 === L ? 0 : -I / Math.sqrt(I * I + L * L);
                                            I += +this.p.v[0], L += +this.p.v[1], this.v.setTripleAt(I, L, I - V * T * E * F, L - R * T * E * F, I + V * T * E * F, L + R * T * E * F, u, !0), M += D * F
                                        }
                                        this.paths.length = 0, this.paths[0] = this.v
                                    }
                                }, extendPrototype([DynamicPropertyContainer], u), u
                            }(),
                            O = function() {
                                function u(u, P) {
                                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = u, this.comp = u.comp, this.frameId = -1, this.d = P.d, this.initDynamicPropertyContainer(u), this.p = PropertyFactory.getProp(u, P.p, 1, 0, this), this.s = PropertyFactory.getProp(u, P.s, 1, 0, this), this.r = PropertyFactory.getProp(u, P.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                }
                                return u.prototype = {
                                    convertRectToPath: function() {
                                        var u = this.p.v[0],
                                            P = this.p.v[1],
                                            D = this.s.v[0] / 2,
                                            S = this.s.v[1] / 2,
                                            E = bmMin(D, S, this.r.v),
                                            T = E * (1 - roundCorner);
                                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(u + D, P - S + E, u + D, P - S + E, u + D, P - S + T, 0, !0), this.v.setTripleAt(u + D, P + S - E, u + D, P + S - T, u + D, P + S - E, 1, !0), 0 !== E ? (this.v.setTripleAt(u + D - E, P + S, u + D - E, P + S, u + D - T, P + S, 2, !0), this.v.setTripleAt(u - D + E, P + S, u - D + T, P + S, u - D + E, P + S, 3, !0), this.v.setTripleAt(u - D, P + S - E, u - D, P + S - E, u - D, P + S - T, 4, !0), this.v.setTripleAt(u - D, P - S + E, u - D, P - S + T, u - D, P - S + E, 5, !0), this.v.setTripleAt(u - D + E, P - S, u - D + E, P - S, u - D + T, P - S, 6, !0), this.v.setTripleAt(u + D - E, P - S, u + D - T, P - S, u + D - E, P - S, 7, !0)) : (this.v.setTripleAt(u - D, P + S, u - D + T, P + S, u - D, P + S, 2), this.v.setTripleAt(u - D, P - S, u - D, P - S + T, u - D, P - S, 3))) : (this.v.setTripleAt(u + D, P - S + E, u + D, P - S + T, u + D, P - S + E, 0, !0), 0 !== E ? (this.v.setTripleAt(u + D - E, P - S, u + D - E, P - S, u + D - T, P - S, 1, !0), this.v.setTripleAt(u - D + E, P - S, u - D + T, P - S, u - D + E, P - S, 2, !0), this.v.setTripleAt(u - D, P - S + E, u - D, P - S + E, u - D, P - S + T, 3, !0), this.v.setTripleAt(u - D, P + S - E, u - D, P + S - T, u - D, P + S - E, 4, !0), this.v.setTripleAt(u - D + E, P + S, u - D + E, P + S, u - D + T, P + S, 5, !0), this.v.setTripleAt(u + D - E, P + S, u + D - T, P + S, u + D - E, P + S, 6, !0), this.v.setTripleAt(u + D, P + S - E, u + D, P + S - E, u + D, P + S - T, 7, !0)) : (this.v.setTripleAt(u - D, P - S, u - D + T, P - S, u - D, P - S, 1, !0), this.v.setTripleAt(u - D, P + S, u - D, P + S - T, u - D, P + S, 2, !0), this.v.setTripleAt(u + D, P + S, u + D - T, P + S, u + D, P + S, 3, !0)))
                                    },
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                    },
                                    reset: S
                                }, extendPrototype([DynamicPropertyContainer], u), u
                            }();

                        function N(u, P, D) {
                            var S;
                            return 3 === D || 4 === D ? S = (3 === D ? P.pt : P.ks).k.length ? new L(u, P, D) : new F(u, P, D) : 5 === D ? S = new O(u, P) : 6 === D ? S = new V(u, P) : 7 === D && (S = new R(u, P)), S.k && u.addDynamicProperty(S), S
                        }

                        function G() {
                            return F
                        }

                        function W() {
                            return L
                        }
                        var Y = {};
                        return Y.getShapeProp = N, Y.getConstructorFunction = G, Y.getKeyframedConstructorFunction = W, Y
                    }(),
                    Matrix = function() {
                        var u = Math.cos,
                            P = Math.sin,
                            D = Math.tan,
                            S = Math.round;

                        function E() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                        }

                        function T(D) {
                            if (0 === D) return this;
                            var S = u(D),
                                E = P(D);
                            return this._t(S, -E, 0, 0, E, S, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function M(D) {
                            if (0 === D) return this;
                            var S = u(D),
                                E = P(D);
                            return this._t(1, 0, 0, 0, 0, S, -E, 0, 0, E, S, 0, 0, 0, 0, 1)
                        }

                        function F(D) {
                            if (0 === D) return this;
                            var S = u(D),
                                E = P(D);
                            return this._t(S, 0, E, 0, 0, 1, 0, 0, -E, 0, S, 0, 0, 0, 0, 1)
                        }

                        function I(D) {
                            if (0 === D) return this;
                            var S = u(D),
                                E = P(D);
                            return this._t(S, -E, 0, 0, E, S, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function L(u, P) {
                            return this._t(1, P, u, 1, 0, 0)
                        }

                        function V(u, P) {
                            return this.shear(D(u), D(P))
                        }

                        function R(S, E) {
                            var T = u(E),
                                M = P(E);
                            return this._t(T, M, 0, 0, -M, T, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, D(S), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(T, -M, 0, 0, M, T, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function O(u, P, D) {
                            return (D || 0 === D || (D = 1), 1 === u && 1 === P && 1 === D) ? this : this._t(u, 0, 0, 0, 0, P, 0, 0, 0, 0, D, 0, 0, 0, 0, 1)
                        }

                        function N(u, P, D, S, E, T, M, F, I, L, V, R, O, N, G, W) {
                            return this.props[0] = u, this.props[1] = P, this.props[2] = D, this.props[3] = S, this.props[4] = E, this.props[5] = T, this.props[6] = M, this.props[7] = F, this.props[8] = I, this.props[9] = L, this.props[10] = V, this.props[11] = R, this.props[12] = O, this.props[13] = N, this.props[14] = G, this.props[15] = W, this
                        }

                        function G(u, P, D) {
                            return (D = D || 0, 0 !== u || 0 !== P || 0 !== D) ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, u, P, D, 1) : this
                        }

                        function W(u, P, D, S, E, T, M, F, I, L, V, R, O, N, G, W) {
                            var Y = this.props;
                            if (1 === u && 0 === P && 0 === D && 0 === S && 0 === E && 1 === T && 0 === M && 0 === F && 0 === I && 0 === L && 1 === V && 0 === R) return Y[12] = Y[12] * u + Y[15] * O, Y[13] = Y[13] * T + Y[15] * N, Y[14] = Y[14] * V + Y[15] * G, Y[15] *= W, this._identityCalculated = !1, this;
                            var H = Y[0],
                                X = Y[1],
                                K = Y[2],
                                J = Y[3],
                                Z = Y[4],
                                U = Y[5],
                                Q = Y[6],
                                $ = Y[7],
                                tt = Y[8],
                                te = Y[9],
                                ts = Y[10],
                                tr = Y[11],
                                ta = Y[12],
                                tn = Y[13],
                                th = Y[14],
                                tl = Y[15];
                            return Y[0] = H * u + X * E + K * I + J * O, Y[1] = H * P + X * T + K * L + J * N, Y[2] = H * D + X * M + K * V + J * G, Y[3] = H * S + X * F + K * R + J * W, Y[4] = Z * u + U * E + Q * I + $ * O, Y[5] = Z * P + U * T + Q * L + $ * N, Y[6] = Z * D + U * M + Q * V + $ * G, Y[7] = Z * S + U * F + Q * R + $ * W, Y[8] = tt * u + te * E + ts * I + tr * O, Y[9] = tt * P + te * T + ts * L + tr * N, Y[10] = tt * D + te * M + ts * V + tr * G, Y[11] = tt * S + te * F + ts * R + tr * W, Y[12] = ta * u + tn * E + th * I + tl * O, Y[13] = ta * P + tn * T + th * L + tl * N, Y[14] = ta * D + tn * M + th * V + tl * G, Y[15] = ta * S + tn * F + th * R + tl * W, this._identityCalculated = !1, this
                        }

                        function Y() {
                            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                        }

                        function H(u) {
                            for (var P = 0; P < 16;) {
                                if (u.props[P] !== this.props[P]) return !1;
                                P += 1
                            }
                            return !0
                        }

                        function X(u) {
                            var P;
                            for (P = 0; P < 16; P += 1) u.props[P] = this.props[P];
                            return u
                        }

                        function K(u) {
                            var P;
                            for (P = 0; P < 16; P += 1) this.props[P] = u[P]
                        }

                        function J(u, P, D) {
                            return {
                                x: u * this.props[0] + P * this.props[4] + D * this.props[8] + this.props[12],
                                y: u * this.props[1] + P * this.props[5] + D * this.props[9] + this.props[13],
                                z: u * this.props[2] + P * this.props[6] + D * this.props[10] + this.props[14]
                            }
                        }

                        function Z(u, P, D) {
                            return u * this.props[0] + P * this.props[4] + D * this.props[8] + this.props[12]
                        }

                        function U(u, P, D) {
                            return u * this.props[1] + P * this.props[5] + D * this.props[9] + this.props[13]
                        }

                        function Q(u, P, D) {
                            return u * this.props[2] + P * this.props[6] + D * this.props[10] + this.props[14]
                        }

                        function $() {
                            var u = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                P = this.props[5] / u,
                                D = -this.props[1] / u,
                                S = -this.props[4] / u,
                                E = this.props[0] / u,
                                T = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / u,
                                M = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / u,
                                F = new Matrix;
                            return F.props[0] = P, F.props[1] = D, F.props[4] = S, F.props[5] = E, F.props[12] = T, F.props[13] = M, F
                        }

                        function tt(u) {
                            return this.getInverseMatrix().applyToPointArray(u[0], u[1], u[2] || 0)
                        }

                        function te(u) {
                            var P, D = u.length,
                                S = [];
                            for (P = 0; P < D; P += 1) S[P] = tt(u[P]);
                            return S
                        }

                        function ts(u, P, D) {
                            var S = createTypedArray("float32", 6);
                            if (this.isIdentity()) S[0] = u[0], S[1] = u[1], S[2] = P[0], S[3] = P[1], S[4] = D[0], S[5] = D[1];
                            else {
                                var E = this.props[0],
                                    T = this.props[1],
                                    M = this.props[4],
                                    F = this.props[5],
                                    I = this.props[12],
                                    L = this.props[13];
                                S[0] = u[0] * E + u[1] * M + I, S[1] = u[0] * T + u[1] * F + L, S[2] = P[0] * E + P[1] * M + I, S[3] = P[0] * T + P[1] * F + L, S[4] = D[0] * E + D[1] * M + I, S[5] = D[0] * T + D[1] * F + L
                            }
                            return S
                        }

                        function tr(u, P, D) {
                            return this.isIdentity() ? [u, P, D] : [u * this.props[0] + P * this.props[4] + D * this.props[8] + this.props[12], u * this.props[1] + P * this.props[5] + D * this.props[9] + this.props[13], u * this.props[2] + P * this.props[6] + D * this.props[10] + this.props[14]]
                        }

                        function ta(u, P) {
                            if (this.isIdentity()) return u + "," + P;
                            var D = this.props;
                            return Math.round((u * D[0] + P * D[4] + D[12]) * 100) / 100 + "," + Math.round((u * D[1] + P * D[5] + D[13]) * 100) / 100
                        }

                        function tn() {
                            for (var u = 0, P = this.props, D = "matrix3d(", E = 1e4; u < 16;) D += S(P[u] * E) / E + (15 === u ? ")" : ","), u += 1;
                            return D
                        }

                        function th(u) {
                            var P = 1e4;
                            return u < 1e-6 && u > 0 || u > -.000001 && u < 0 ? S(u * P) / P : u
                        }

                        function tl() {
                            var u = this.props;
                            return "matrix(" + th(u[0]) + "," + th(u[1]) + "," + th(u[4]) + "," + th(u[5]) + "," + th(u[12]) + "," + th(u[13]) + ")"
                        }
                        return function() {
                            this.reset = E, this.rotate = T, this.rotateX = M, this.rotateY = F, this.rotateZ = I, this.skew = V, this.skewFromAxis = R, this.shear = L, this.scale = O, this.setTransform = N, this.translate = G, this.transform = W, this.applyToPoint = J, this.applyToX = Z, this.applyToY = U, this.applyToZ = Q, this.applyToPointArray = tr, this.applyToTriplePoints = ts, this.applyToPointStringified = ta, this.toCSS = tn, this.to2dCSS = tl, this.clone = X, this.cloneFromProps = K, this.equals = H, this.inversePoints = te, this.inversePoint = tt, this.getInverseMatrix = $, this._t = this.transform, this.isIdentity = Y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                        }
                    }();

                function _typeof$3(u) {
                    return (_typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }
                var lottie = {},
                    standalone = "__[STANDALONE]__",
                    animationData = "__[ANIMATIONDATA]__",
                    renderer = "";

                function setLocation(u) {
                    setLocationHref(u)
                }

                function searchAnimations() {
                    !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                }

                function setSubframeRendering(u) {
                    setSubframeEnabled(u)
                }

                function setPrefix(u) {
                    setIdPrefix(u)
                }

                function loadAnimation(u) {
                    return !0 === standalone && (u.animationData = JSON.parse(animationData)), animationManager.loadAnimation(u)
                }

                function setQuality(u) {
                    if ("string" == typeof u) switch (u) {
                        case "high":
                            setDefaultCurveSegments(200);
                            break;
                        default:
                        case "medium":
                            setDefaultCurveSegments(50);
                            break;
                        case "low":
                            setDefaultCurveSegments(10)
                    } else !isNaN(u) && u > 1 && setDefaultCurveSegments(u);
                    getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
                }

                function inBrowser() {
                    return "undefined" != typeof navigator
                }

                function installPlugin(u, P) {
                    "expressions" === u && setExpressionsPlugin(P)
                }

                function getFactory(u) {
                    switch (u) {
                        case "propertyFactory":
                            return PropertyFactory;
                        case "shapePropertyFactory":
                            return ShapePropertyFactory;
                        case "matrix":
                            return Matrix;
                        default:
                            return null
                    }
                }

                function checkReady() {
                    "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                }

                function getQueryVariable(u) {
                    for (var P = queryString.split("&"), D = 0; D < P.length; D += 1) {
                        var S = P[D].split("=");
                        if (decodeURIComponent(S[0]) == u) return decodeURIComponent(S[1])
                    }
                    return null
                }
                lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.11.0";
                var queryString = "";
                if (standalone) {
                    var scripts = document.getElementsByTagName("script"),
                        index = scripts.length - 1,
                        myScript = scripts[index] || {
                            src: ""
                        };
                    queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
                }
                var readyStateCheckInterval = setInterval(checkReady, 100);
                try {
                    "object" !== _typeof$3(exports) && __webpack_require__.amdO
                } catch (err) {}
                var ShapeModifiers = function() {
                    var u = {},
                        P = {};

                    function D(u, D) {
                        P[u] || (P[u] = D)
                    }

                    function S(u, D, S) {
                        return new P[u](D, S)
                    }
                    return u.registerModifier = D, u.getModifier = S, u
                }();

                function ShapeModifier() {}

                function TrimModifier() {}

                function PuckerAndBloatModifier() {}
                ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(u) {
                    if (!this.closed) {
                        u.sh.container.addDynamicProperty(u.sh);
                        var P = {
                            shape: u.sh,
                            data: u,
                            localShapeCollection: shapeCollectionPool.newShapeCollection()
                        };
                        this.shapes.push(P), this.addShapeToModifier(P), this._isAnimated && u.setAsAnimated()
                    }
                }, ShapeModifier.prototype.init = function(u, P) {
                    this.shapes = [], this.elem = u, this.initDynamicPropertyContainer(u), this.initModifierProperties(u, P), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, ShapeModifier.prototype.processKeys = function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(u, P) {
                    this.s = PropertyFactory.getProp(u, P.s, 0, .01, this), this.e = PropertyFactory.getProp(u, P.e, 0, .01, this), this.o = PropertyFactory.getProp(u, P.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = P.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                }, TrimModifier.prototype.addShapeToModifier = function(u) {
                    u.pathsData = []
                }, TrimModifier.prototype.calculateShapeEdges = function(u, P, D, S, E) {
                    var T, M, F = [];
                    P <= 1 ? F.push({
                        s: u,
                        e: P
                    }) : u >= 1 ? F.push({
                        s: u - 1,
                        e: P - 1
                    }) : (F.push({
                        s: u,
                        e: 1
                    }), F.push({
                        s: 0,
                        e: P - 1
                    }));
                    var I = [],
                        L = F.length;
                    for (T = 0; T < L; T += 1)(M = F[T]).e * E < S || M.s * E > S + D || I.push([M.s * E <= S ? 0 : (M.s * E - S) / D, M.e * E >= S + D ? 1 : (M.e * E - S) / D]);
                    return I.length || I.push([0, 0]), I
                }, TrimModifier.prototype.releasePathsData = function(u) {
                    var P, D = u.length;
                    for (P = 0; P < D; P += 1) segmentsLengthPool.release(u[P]);
                    return u.length = 0, u
                }, TrimModifier.prototype.processShapes = function(u) {
                    if (this._mdf || u) {
                        var P = this.o.v % 360 / 360;
                        if (P < 0 && (P += 1), (T = this.s.v > 1 ? 1 + P : this.s.v < 0 ? 0 + P : this.s.v + P) > (M = this.e.v > 1 ? 1 + P : this.e.v < 0 ? 0 + P : this.e.v + P)) {
                            var D = T;
                            T = M, M = D
                        }
                        T = 1e-4 * Math.round(1e4 * T), M = 1e-4 * Math.round(1e4 * M), this.sValue = T, this.eValue = M
                    } else T = this.sValue, M = this.eValue;
                    var S = this.shapes.length,
                        E = 0;
                    if (M === T)
                        for (I = 0; I < S; I += 1) this.shapes[I].localShapeCollection.releaseShapes(), this.shapes[I].shape._mdf = !0, this.shapes[I].shape.paths = this.shapes[I].localShapeCollection, this._mdf && (this.shapes[I].pathsData.length = 0);
                    else if (1 === M && 0 === T || 0 === M && 1 === T) {
                        if (this._mdf)
                            for (I = 0; I < S; I += 1) this.shapes[I].pathsData.length = 0, this.shapes[I].shape._mdf = !0
                    } else {
                        var T, M, F, I, L, V, R, O, N, G, W, Y, H = [];
                        for (I = 0; I < S; I += 1)
                            if ((G = this.shapes[I]).shape._mdf || this._mdf || u || 2 === this.m) {
                                if (V = (F = G.shape.paths)._length, N = 0, !G.shape._mdf && G.pathsData.length) N = G.totalShapeLength;
                                else {
                                    for (L = 0, R = this.releasePathsData(G.pathsData); L < V; L += 1) O = bez.getSegmentsLength(F.shapes[L]), R.push(O), N += O.totalLength;
                                    G.totalShapeLength = N, G.pathsData = R
                                }
                                E += N, G.shape._mdf = !0
                            } else G.shape.paths = G.localShapeCollection;
                        var X = T,
                            K = M,
                            J = 0;
                        for (I = S - 1; I >= 0; I -= 1)
                            if ((G = this.shapes[I]).shape._mdf) {
                                for ((W = G.localShapeCollection).releaseShapes(), 2 === this.m && S > 1 ? (Y = this.calculateShapeEdges(T, M, G.totalShapeLength, J, E), J += G.totalShapeLength) : Y = [
                                        [X, K]
                                    ], V = Y.length, L = 0; L < V; L += 1) {
                                    X = Y[L][0], K = Y[L][1], H.length = 0, K <= 1 ? H.push({
                                        s: G.totalShapeLength * X,
                                        e: G.totalShapeLength * K
                                    }) : X >= 1 ? H.push({
                                        s: G.totalShapeLength * (X - 1),
                                        e: G.totalShapeLength * (K - 1)
                                    }) : (H.push({
                                        s: G.totalShapeLength * X,
                                        e: G.totalShapeLength
                                    }), H.push({
                                        s: 0,
                                        e: G.totalShapeLength * (K - 1)
                                    }));
                                    var Z = this.addShapes(G, H[0]);
                                    if (H[0].s !== H[0].e) {
                                        if (H.length > 1) {
                                            if (G.shape.paths.shapes[G.shape.paths._length - 1].c) {
                                                var U = Z.pop();
                                                this.addPaths(Z, W), Z = this.addShapes(G, H[1], U)
                                            } else this.addPaths(Z, W), Z = this.addShapes(G, H[1])
                                        }
                                        this.addPaths(Z, W)
                                    }
                                }
                                G.shape.paths = W
                            }
                    }
                }, TrimModifier.prototype.addPaths = function(u, P) {
                    var D, S = u.length;
                    for (D = 0; D < S; D += 1) P.addShape(u[D])
                }, TrimModifier.prototype.addSegment = function(u, P, D, S, E, T, M) {
                    E.setXYAt(P[0], P[1], "o", T), E.setXYAt(D[0], D[1], "i", T + 1), M && E.setXYAt(u[0], u[1], "v", T), E.setXYAt(S[0], S[1], "v", T + 1)
                }, TrimModifier.prototype.addSegmentFromArray = function(u, P, D, S) {
                    P.setXYAt(u[1], u[5], "o", D), P.setXYAt(u[2], u[6], "i", D + 1), S && P.setXYAt(u[0], u[4], "v", D), P.setXYAt(u[3], u[7], "v", D + 1)
                }, TrimModifier.prototype.addShapes = function(u, P, D) {
                    var S, E, T, M, F, I, L, V, R = u.pathsData,
                        O = u.shape.paths.shapes,
                        N = u.shape.paths._length,
                        G = 0,
                        W = [],
                        Y = !0;
                    for (D ? (F = D._length, V = D._length) : (D = shapePool.newElement(), F = 0, V = 0), W.push(D), S = 0; S < N; S += 1) {
                        for (E = 1, I = R[S].lengths, D.c = O[S].c, T = O[S].c ? I.length : I.length + 1; E < T; E += 1)
                            if (G + (M = I[E - 1]).addedLength < P.s) G += M.addedLength, D.c = !1;
                            else if (G > P.e) {
                            D.c = !1;
                            break
                        } else P.s <= G && P.e >= G + M.addedLength ? (this.addSegment(O[S].v[E - 1], O[S].o[E - 1], O[S].i[E], O[S].v[E], D, F, Y), Y = !1) : (L = bez.getNewSegment(O[S].v[E - 1], O[S].v[E], O[S].o[E - 1], O[S].i[E], (P.s - G) / M.addedLength, (P.e - G) / M.addedLength, I[E - 1]), this.addSegmentFromArray(L, D, F, Y), Y = !1, D.c = !1), G += M.addedLength, F += 1;
                        if (O[S].c && I.length) {
                            if (M = I[E - 1], G <= P.e) {
                                var H = I[E - 1].addedLength;
                                P.s <= G && P.e >= G + H ? (this.addSegment(O[S].v[E - 1], O[S].o[E - 1], O[S].i[0], O[S].v[0], D, F, Y), Y = !1) : (L = bez.getNewSegment(O[S].v[E - 1], O[S].v[0], O[S].o[E - 1], O[S].i[0], (P.s - G) / H, (P.e - G) / H, I[E - 1]), this.addSegmentFromArray(L, D, F, Y), Y = !1, D.c = !1)
                            } else D.c = !1;
                            G += M.addedLength, F += 1
                        }
                        if (D._length && (D.setXYAt(D.v[V][0], D.v[V][1], "i", V), D.setXYAt(D.v[D._length - 1][0], D.v[D._length - 1][1], "o", D._length - 1)), G > P.e) break;
                        S < N - 1 && (D = shapePool.newElement(), Y = !0, W.push(D), F = 0)
                    }
                    return W
                }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(u, P) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(u, P.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                }, PuckerAndBloatModifier.prototype.processPath = function(u, P) {
                    var D, S, E, T, M, F, I = P / 100,
                        L = [0, 0],
                        V = u._length,
                        R = 0;
                    for (R = 0; R < V; R += 1) L[0] += u.v[R][0], L[1] += u.v[R][1];
                    L[0] /= V, L[1] /= V;
                    var O = shapePool.newElement();
                    for (R = 0, O.c = u.c; R < V; R += 1) D = u.v[R][0] + (L[0] - u.v[R][0]) * I, S = u.v[R][1] + (L[1] - u.v[R][1]) * I, E = u.o[R][0] + -((L[0] - u.o[R][0]) * I), T = u.o[R][1] + -((L[1] - u.o[R][1]) * I), M = u.i[R][0] + -((L[0] - u.i[R][0]) * I), F = u.i[R][1] + -((L[1] - u.i[R][1]) * I), O.setTripleAt(D, S, E, T, M, F, R);
                    return O
                }, PuckerAndBloatModifier.prototype.processShapes = function(u) {
                    var P, D, S, E, T, M, F = this.shapes.length,
                        I = this.amount.v;
                    if (0 !== I)
                        for (D = 0; D < F; D += 1) {
                            if (M = (T = this.shapes[D]).localShapeCollection, !(!T.shape._mdf && !this._mdf && !u))
                                for (M.releaseShapes(), T.shape._mdf = !0, P = T.shape.paths.shapes, E = T.shape.paths._length, S = 0; S < E; S += 1) M.addShape(this.processPath(P[S], I));
                            T.shape.paths = T.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var TransformPropertyFactory = function() {
                    var u = [0, 0];

                    function P(u) {
                        var P = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || P, this.a && u.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && u.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && u.skewFromAxis(-this.sk.v, this.sa.v), this.r ? u.rotate(-this.r.v) : u.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? u.translate(this.px.v, this.py.v, -this.pz.v) : u.translate(this.px.v, this.py.v, 0) : u.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }

                    function D(P) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || P) {
                                var D;
                                if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                    if (D = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (S = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / D, 0), E = this.p.getValueAtTime(this.p.keyframes[0].t / D, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (S = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / D, 0), E = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / D, 0)) : (S = this.p.pv, E = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / D, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        S = [], E = [];
                                        var S, E, T = this.px,
                                            M = this.py;
                                        T._caching.lastFrame + T.offsetTime <= T.keyframes[0].t ? (S[0] = T.getValueAtTime((T.keyframes[0].t + .01) / D, 0), S[1] = M.getValueAtTime((M.keyframes[0].t + .01) / D, 0), E[0] = T.getValueAtTime(T.keyframes[0].t / D, 0), E[1] = M.getValueAtTime(M.keyframes[0].t / D, 0)) : T._caching.lastFrame + T.offsetTime >= T.keyframes[T.keyframes.length - 1].t ? (S[0] = T.getValueAtTime(T.keyframes[T.keyframes.length - 1].t / D, 0), S[1] = M.getValueAtTime(M.keyframes[M.keyframes.length - 1].t / D, 0), E[0] = T.getValueAtTime((T.keyframes[T.keyframes.length - 1].t - .01) / D, 0), E[1] = M.getValueAtTime((M.keyframes[M.keyframes.length - 1].t - .01) / D, 0)) : (S = [T.pv, M.pv], E[0] = T.getValueAtTime((T._caching.lastFrame + T.offsetTime - .01) / D, T.offsetTime), E[1] = M.getValueAtTime((M._caching.lastFrame + M.offsetTime - .01) / D, M.offsetTime))
                                    } else S = E = u;
                                    this.v.rotate(-Math.atan2(S[1] - E[1], S[0] - E[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    }

                    function S() {
                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                        }
                    }

                    function E() {}

                    function T(u) {
                        this._addDynamicProperty(u), this.elem.addDynamicProperty(u), this._isDirty = !0
                    }

                    function M(u, P, D) {
                        if (this.elem = u, this.frameId = -1, this.propType = "transform", this.data = P, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(D || u), P.p && P.p.s ? (this.px = PropertyFactory.getProp(u, P.p.x, 0, 0, this), this.py = PropertyFactory.getProp(u, P.p.y, 0, 0, this), P.p.z && (this.pz = PropertyFactory.getProp(u, P.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(u, P.p || {
                                k: [0, 0, 0]
                            }, 1, 0, this), P.rx) {
                            if (this.rx = PropertyFactory.getProp(u, P.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(u, P.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(u, P.rz, 0, degToRads, this), P.or.k[0].ti) {
                                var S, E = P.or.k.length;
                                for (S = 0; S < E; S += 1) P.or.k[S].to = null, P.or.k[S].ti = null
                            }
                            this.or = PropertyFactory.getProp(u, P.or, 1, degToRads, this), this.or.sh = !0
                        } else this.r = PropertyFactory.getProp(u, P.r || {
                            k: 0
                        }, 0, degToRads, this);
                        P.sk && (this.sk = PropertyFactory.getProp(u, P.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(u, P.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(u, P.a || {
                            k: [0, 0, 0]
                        }, 1, 0, this), this.s = PropertyFactory.getProp(u, P.s || {
                            k: [100, 100, 100]
                        }, 1, .01, this), P.o ? this.o = PropertyFactory.getProp(u, P.o, 0, .01, u) : this.o = {
                            _mdf: !1,
                            v: 1
                        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                    }
                    return M.prototype = {
                        applyToMatrix: P,
                        getValue: D,
                        precalculateMatrix: S,
                        autoOrient: E
                    }, extendPrototype([DynamicPropertyContainer], M), M.prototype.addDynamicProperty = T, M.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                        getTransformProperty: function(u, P, D) {
                            return new M(u, P, D)
                        }
                    }
                }();

                function RepeaterModifier() {}

                function RoundCornersModifier() {}

                function floatEqual(u, P) {
                    return 1e5 * Math.abs(u - P) <= Math.min(Math.abs(u), Math.abs(P))
                }

                function floatZero(u) {
                    return 1e-5 >= Math.abs(u)
                }

                function lerp(u, P, D) {
                    return u * (1 - D) + P * D
                }

                function lerpPoint(u, P, D) {
                    return [lerp(u[0], P[0], D), lerp(u[1], P[1], D)]
                }

                function quadRoots(u, P, D) {
                    if (0 === u) return [];
                    var S = P * P - 4 * u * D;
                    if (S < 0) return [];
                    var E = -P / (2 * u);
                    if (0 === S) return [E];
                    var T = Math.sqrt(S) / (2 * u);
                    return [E - T, E + T]
                }

                function polynomialCoefficients(u, P, D, S) {
                    return [-u + 3 * P - 3 * D + S, 3 * u - 6 * P + 3 * D, -3 * u + 3 * P, u]
                }

                function singlePoint(u) {
                    return new PolynomialBezier(u, u, u, u, !1)
                }

                function PolynomialBezier(u, P, D, S, E) {
                    E && pointEqual(u, P) && (P = lerpPoint(u, S, 1 / 3)), E && pointEqual(D, S) && (D = lerpPoint(u, S, 2 / 3));
                    var T = polynomialCoefficients(u[0], P[0], D[0], S[0]),
                        M = polynomialCoefficients(u[1], P[1], D[1], S[1]);
                    this.a = [T[0], M[0]], this.b = [T[1], M[1]], this.c = [T[2], M[2]], this.d = [T[3], M[3]], this.points = [u, P, D, S]
                }

                function extrema(u, P) {
                    var D = u.points[0][P],
                        S = u.points[u.points.length - 1][P];
                    if (D > S) {
                        var E = S;
                        S = D, D = E
                    }
                    for (var T = quadRoots(3 * u.a[P], 2 * u.b[P], u.c[P]), M = 0; M < T.length; M += 1)
                        if (T[M] > 0 && T[M] < 1) {
                            var F = u.point(T[M])[P];
                            F < D ? D = F : F > S && (S = F)
                        }
                    return {
                        min: D,
                        max: S
                    }
                }

                function intersectData(u, P, D) {
                    var S = u.boundingBox();
                    return {
                        cx: S.cx,
                        cy: S.cy,
                        width: S.width,
                        height: S.height,
                        bez: u,
                        t: (P + D) / 2,
                        t1: P,
                        t2: D
                    }
                }

                function splitData(u) {
                    var P = u.bez.split(.5);
                    return [intersectData(P[0], u.t1, u.t), intersectData(P[1], u.t, u.t2)]
                }

                function boxIntersect(u, P) {
                    return 2 * Math.abs(u.cx - P.cx) < u.width + P.width && 2 * Math.abs(u.cy - P.cy) < u.height + P.height
                }

                function intersectsImpl(u, P, D, S, E, T) {
                    if (boxIntersect(u, P)) {
                        if (D >= T || u.width <= S && u.height <= S && P.width <= S && P.height <= S) {
                            E.push([u.t, P.t]);
                            return
                        }
                        var M = splitData(u),
                            F = splitData(P);
                        intersectsImpl(M[0], F[0], D + 1, S, E, T), intersectsImpl(M[0], F[1], D + 1, S, E, T), intersectsImpl(M[1], F[0], D + 1, S, E, T), intersectsImpl(M[1], F[1], D + 1, S, E, T)
                    }
                }

                function crossProduct(u, P) {
                    return [u[1] * P[2] - u[2] * P[1], u[2] * P[0] - u[0] * P[2], u[0] * P[1] - u[1] * P[0]]
                }

                function lineIntersection(u, P, D, S) {
                    var E = [u[0], u[1], 1],
                        T = [P[0], P[1], 1],
                        M = [D[0], D[1], 1],
                        F = [S[0], S[1], 1],
                        I = crossProduct(crossProduct(E, T), crossProduct(M, F));
                    return floatZero(I[2]) ? null : [I[0] / I[2], I[1] / I[2]]
                }

                function polarOffset(u, P, D) {
                    return [u[0] + Math.cos(P) * D, u[1] - Math.sin(P) * D]
                }

                function pointDistance(u, P) {
                    return Math.hypot(u[0] - P[0], u[1] - P[1])
                }

                function pointEqual(u, P) {
                    return floatEqual(u[0], P[0]) && floatEqual(u[1], P[1])
                }

                function ZigZagModifier() {}

                function setPoint(u, P, D, S, E, T, M) {
                    var F = D - Math.PI / 2,
                        I = D + Math.PI / 2,
                        L = P[0] + Math.cos(D) * S * E,
                        V = P[1] - Math.sin(D) * S * E;
                    u.setTripleAt(L, V, L + Math.cos(F) * T, V - Math.sin(F) * T, L + Math.cos(I) * M, V - Math.sin(I) * M, u.length())
                }

                function getPerpendicularVector(u, P) {
                    var D = [P[0] - u[0], P[1] - u[1]],
                        S = -(.5 * Math.PI);
                    return [Math.cos(S) * D[0] - Math.sin(S) * D[1], Math.sin(S) * D[0] + Math.cos(S) * D[1]]
                }

                function getProjectingAngle(u, P) {
                    var D = 0 === P ? u.length() - 1 : P - 1,
                        S = (P + 1) % u.length(),
                        E = getPerpendicularVector(u.v[D], u.v[S]);
                    return Math.atan2(0, 1) - Math.atan2(E[1], E[0])
                }

                function zigZagCorner(u, P, D, S, E, T, M) {
                    var F = getProjectingAngle(P, D),
                        I = P.v[D % P._length],
                        L = P.v[0 === D ? P._length - 1 : D - 1],
                        V = P.v[(D + 1) % P._length],
                        R = 2 === T ? Math.sqrt(Math.pow(I[0] - L[0], 2) + Math.pow(I[1] - L[1], 2)) : 0,
                        O = 2 === T ? Math.sqrt(Math.pow(I[0] - V[0], 2) + Math.pow(I[1] - V[1], 2)) : 0;
                    setPoint(u, P.v[D % P._length], F, M, S, O / ((E + 1) * 2), R / ((E + 1) * 2), T)
                }

                function zigZagSegment(u, P, D, S, E, T) {
                    for (var M = 0; M < S; M += 1) {
                        var F = (M + 1) / (S + 1),
                            I = 2 === E ? Math.sqrt(Math.pow(P.points[3][0] - P.points[0][0], 2) + Math.pow(P.points[3][1] - P.points[0][1], 2)) : 0,
                            L = P.normalAngle(F);
                        setPoint(u, P.point(F), L, T, D, I / ((S + 1) * 2), I / ((S + 1) * 2), E), T = -T
                    }
                    return T
                }

                function linearOffset(u, P, D) {
                    var S = Math.atan2(P[0] - u[0], P[1] - u[1]);
                    return [polarOffset(u, S, D), polarOffset(P, S, D)]
                }

                function offsetSegment(u, P) {
                    D = (I = linearOffset(u.points[0], u.points[1], P))[0], S = I[1], E = (I = linearOffset(u.points[1], u.points[2], P))[0], T = I[1], M = (I = linearOffset(u.points[2], u.points[3], P))[0], F = I[1];
                    var D, S, E, T, M, F, I, L = lineIntersection(D, S, E, T);
                    null === L && (L = S);
                    var V = lineIntersection(M, F, E, T);
                    return null === V && (V = M), new PolynomialBezier(D, L, V, F)
                }

                function joinLines(u, P, D, S, E) {
                    var T = P.points[3],
                        M = D.points[0];
                    if (3 === S || pointEqual(T, M)) return T;
                    if (2 === S) {
                        var F = -P.tangentAngle(1),
                            I = -D.tangentAngle(0) + Math.PI,
                            L = lineIntersection(T, polarOffset(T, F + Math.PI / 2, 100), M, polarOffset(M, F + Math.PI / 2, 100)),
                            V = L ? pointDistance(L, T) : pointDistance(T, M) / 2,
                            R = polarOffset(T, F, 2 * V * roundCorner);
                        return u.setXYAt(R[0], R[1], "o", u.length() - 1), R = polarOffset(M, I, 2 * V * roundCorner), u.setTripleAt(M[0], M[1], M[0], M[1], R[0], R[1], u.length()), M
                    }
                    var O = pointEqual(T, P.points[2]) ? P.points[0] : P.points[2],
                        N = pointEqual(M, D.points[1]) ? D.points[3] : D.points[1],
                        G = lineIntersection(O, T, M, N);
                    return G && pointDistance(G, T) < E ? (u.setTripleAt(G[0], G[1], G[0], G[1], G[0], G[1], u.length()), G) : T
                }

                function getIntersection(u, P) {
                    var D = u.intersections(P);
                    return (D.length && floatEqual(D[0][0], 1) && D.shift(), D.length) ? D[0] : null
                }

                function pruneSegmentIntersection(u, P) {
                    var D = u.slice(),
                        S = P.slice(),
                        E = getIntersection(u[u.length - 1], P[0]);
                    return (E && (D[u.length - 1] = u[u.length - 1].split(E[0])[0], S[0] = P[0].split(E[1])[1]), u.length > 1 && P.length > 1 && (E = getIntersection(u[0], P[P.length - 1]))) ? [
                        [u[0].split(E[0])[0]],
                        [P[P.length - 1].split(E[1])[1]]
                    ] : [D, S]
                }

                function pruneIntersections(u) {
                    for (var P, D = 1; D < u.length; D += 1) P = pruneSegmentIntersection(u[D - 1], u[D]), u[D - 1] = P[0], u[D] = P[1];
                    return u.length > 1 && (P = pruneSegmentIntersection(u[u.length - 1], u[0]), u[u.length - 1] = P[0], u[0] = P[1]), u
                }

                function offsetSegmentSplit(u, P) {
                    var D, S, E, T, M = u.inflectionPoints();
                    if (0 === M.length) return [offsetSegment(u, P)];
                    if (1 === M.length || floatEqual(M[1], 1)) return D = (E = u.split(M[0]))[0], S = E[1], [offsetSegment(D, P), offsetSegment(S, P)];
                    D = (E = u.split(M[0]))[0];
                    var F = (M[1] - M[0]) / (1 - M[0]);
                    return T = (E = E[1].split(F))[0], S = E[1], [offsetSegment(D, P), offsetSegment(T, P), offsetSegment(S, P)]
                }

                function OffsetPathModifier() {}

                function getFontProperties(u) {
                    for (var P = u.fStyle ? u.fStyle.split(" ") : [], D = "normal", S = "normal", E = P.length, T = 0; T < E; T += 1) switch (P[T].toLowerCase()) {
                        case "italic":
                            S = "italic";
                            break;
                        case "bold":
                            D = "700";
                            break;
                        case "black":
                            D = "900";
                            break;
                        case "medium":
                            D = "500";
                            break;
                        case "regular":
                        case "normal":
                            D = "400";
                            break;
                        case "light":
                        case "thin":
                            D = "200"
                    }
                    return {
                        style: S,
                        weight: u.fWeight || D
                    }
                }
                extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(u, P) {
                    this.getValue = this.processKeys, this.c = PropertyFactory.getProp(u, P.c, 0, null, this), this.o = PropertyFactory.getProp(u, P.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(u, P.tr, this), this.so = PropertyFactory.getProp(u, P.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(u, P.tr.eo, 0, .01, this), this.data = P, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                }, RepeaterModifier.prototype.applyTransforms = function(u, P, D, S, E, T) {
                    var M = T ? -1 : 1,
                        F = S.s.v[0] + (1 - S.s.v[0]) * (1 - E),
                        I = S.s.v[1] + (1 - S.s.v[1]) * (1 - E);
                    u.translate(S.p.v[0] * M * E, S.p.v[1] * M * E, S.p.v[2]), P.translate(-S.a.v[0], -S.a.v[1], S.a.v[2]), P.rotate(-S.r.v * M * E), P.translate(S.a.v[0], S.a.v[1], S.a.v[2]), D.translate(-S.a.v[0], -S.a.v[1], S.a.v[2]), D.scale(T ? 1 / F : F, T ? 1 / I : I), D.translate(S.a.v[0], S.a.v[1], S.a.v[2])
                }, RepeaterModifier.prototype.init = function(u, P, D, S) {
                    for (this.elem = u, this.arr = P, this.pos = D, this.elemsData = S, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(u), this.initModifierProperties(u, P[D]); D > 0;) D -= 1, this._elements.unshift(P[D]);
                    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, RepeaterModifier.prototype.resetElements = function(u) {
                    var P, D = u.length;
                    for (P = 0; P < D; P += 1) u[P]._processed = !1, "gr" === u[P].ty && this.resetElements(u[P].it)
                }, RepeaterModifier.prototype.cloneElements = function(u) {
                    var P = JSON.parse(JSON.stringify(u));
                    return this.resetElements(P), P
                }, RepeaterModifier.prototype.changeGroupRender = function(u, P) {
                    var D, S = u.length;
                    for (D = 0; D < S; D += 1) u[D]._render = P, "gr" === u[D].ty && this.changeGroupRender(u[D].it, P)
                }, RepeaterModifier.prototype.processShapes = function(u) {
                    var P = !1;
                    if (this._mdf || u) {
                        var D, S, E, T, M, F, I, L, V = Math.ceil(this.c.v);
                        if (this._groups.length < V) {
                            for (; this._groups.length < V;) {
                                var R = {
                                    it: this.cloneElements(this._elements),
                                    ty: "gr"
                                };
                                R.it.push({
                                    a: {
                                        a: 0,
                                        ix: 1,
                                        k: [0, 0]
                                    },
                                    nm: "Transform",
                                    o: {
                                        a: 0,
                                        ix: 7,
                                        k: 100
                                    },
                                    p: {
                                        a: 0,
                                        ix: 2,
                                        k: [0, 0]
                                    },
                                    r: {
                                        a: 1,
                                        ix: 6,
                                        k: [{
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        }, {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }]
                                    },
                                    s: {
                                        a: 0,
                                        ix: 3,
                                        k: [100, 100]
                                    },
                                    sa: {
                                        a: 0,
                                        ix: 5,
                                        k: 0
                                    },
                                    sk: {
                                        a: 0,
                                        ix: 4,
                                        k: 0
                                    },
                                    ty: "tr"
                                }), this.arr.splice(0, 0, R), this._groups.splice(0, 0, R), this._currentCopies += 1
                            }
                            this.elem.reloadShapes(), P = !0
                        }
                        for (E = 0, M = 0; E <= this._groups.length - 1; E += 1) {
                            if (F = M < V, this._groups[E]._render = F, this.changeGroupRender(this._groups[E].it, F), !F) {
                                var O = this.elemsData[E].it,
                                    N = O[O.length - 1];
                                0 !== N.transform.op.v ? (N.transform.op._mdf = !0, N.transform.op.v = 0) : N.transform.op._mdf = !1
                            }
                            M += 1
                        }
                        this._currentCopies = V;
                        var G = this.o.v,
                            W = G % 1,
                            Y = G > 0 ? Math.floor(G) : Math.ceil(G),
                            H = this.pMatrix.props,
                            X = this.rMatrix.props,
                            K = this.sMatrix.props;
                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                        var J = 0;
                        if (G > 0) {
                            for (; J < Y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), J += 1;
                            W && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, W, !1), J += W)
                        } else if (G < 0) {
                            for (; J > Y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), J -= 1;
                            W && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -W, !0), J -= W)
                        }
                        for (E = 1 === this.data.m ? 0 : this._currentCopies - 1, T = 1 === this.data.m ? 1 : -1, M = this._currentCopies; M;) {
                            if (L = (S = (D = this.elemsData[E].it)[D.length - 1].transform.mProps.v.props).length, D[D.length - 1].transform.mProps._mdf = !0, D[D.length - 1].transform.op._mdf = !0, D[D.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (E / (this._currentCopies - 1)), 0 !== J) {
                                for ((0 !== E && 1 === T || E !== this._currentCopies - 1 && -1 === T) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(X[0], X[1], X[2], X[3], X[4], X[5], X[6], X[7], X[8], X[9], X[10], X[11], X[12], X[13], X[14], X[15]), this.matrix.transform(K[0], K[1], K[2], K[3], K[4], K[5], K[6], K[7], K[8], K[9], K[10], K[11], K[12], K[13], K[14], K[15]), this.matrix.transform(H[0], H[1], H[2], H[3], H[4], H[5], H[6], H[7], H[8], H[9], H[10], H[11], H[12], H[13], H[14], H[15]), I = 0; I < L; I += 1) S[I] = this.matrix.props[I];
                                this.matrix.reset()
                            } else
                                for (this.matrix.reset(), I = 0; I < L; I += 1) S[I] = this.matrix.props[I];
                            J += 1, M -= 1, E += T
                        }
                    } else
                        for (M = this._currentCopies, E = 0, T = 1; M;) S = (D = this.elemsData[E].it)[D.length - 1].transform.mProps.v.props, D[D.length - 1].transform.mProps._mdf = !1, D[D.length - 1].transform.op._mdf = !1, M -= 1, E += T;
                    return P
                }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(u, P) {
                    this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(u, P.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                }, RoundCornersModifier.prototype.processPath = function(u, P) {
                    var D, S, E, T, M, F, I, L, V, R, O, N, G, W = shapePool.newElement();
                    W.c = u.c;
                    var Y = u._length,
                        H = 0;
                    for (D = 0; D < Y; D += 1) S = u.v[D], T = u.o[D], E = u.i[D], S[0] === T[0] && S[1] === T[1] && S[0] === E[0] && S[1] === E[1] ? 0 !== D && D !== Y - 1 || u.c ? (M = 0 === D ? u.v[Y - 1] : u.v[D - 1], I = (F = Math.sqrt(Math.pow(S[0] - M[0], 2) + Math.pow(S[1] - M[1], 2))) ? Math.min(F / 2, P) / F : 0, L = N = S[0] + (M[0] - S[0]) * I, V = G = S[1] - (S[1] - M[1]) * I, R = L - (L - S[0]) * roundCorner, O = V - (V - S[1]) * roundCorner, W.setTripleAt(L, V, R, O, N, G, H), H += 1, M = D === Y - 1 ? u.v[0] : u.v[D + 1], I = (F = Math.sqrt(Math.pow(S[0] - M[0], 2) + Math.pow(S[1] - M[1], 2))) ? Math.min(F / 2, P) / F : 0, L = R = S[0] + (M[0] - S[0]) * I, V = O = S[1] + (M[1] - S[1]) * I, N = L - (L - S[0]) * roundCorner, G = V - (V - S[1]) * roundCorner, W.setTripleAt(L, V, R, O, N, G, H), H += 1) : (W.setTripleAt(S[0], S[1], T[0], T[1], E[0], E[1], H), H += 1) : (W.setTripleAt(u.v[D][0], u.v[D][1], u.o[D][0], u.o[D][1], u.i[D][0], u.i[D][1], H), H += 1);
                    return W
                }, RoundCornersModifier.prototype.processShapes = function(u) {
                    var P, D, S, E, T, M, F = this.shapes.length,
                        I = this.rd.v;
                    if (0 !== I)
                        for (D = 0; D < F; D += 1) {
                            if (M = (T = this.shapes[D]).localShapeCollection, !(!T.shape._mdf && !this._mdf && !u))
                                for (M.releaseShapes(), T.shape._mdf = !0, P = T.shape.paths.shapes, E = T.shape.paths._length, S = 0; S < E; S += 1) M.addShape(this.processPath(P[S], I));
                            T.shape.paths = T.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, PolynomialBezier.prototype.point = function(u) {
                    return [((this.a[0] * u + this.b[0]) * u + this.c[0]) * u + this.d[0], ((this.a[1] * u + this.b[1]) * u + this.c[1]) * u + this.d[1]]
                }, PolynomialBezier.prototype.derivative = function(u) {
                    return [(3 * u * this.a[0] + 2 * this.b[0]) * u + this.c[0], (3 * u * this.a[1] + 2 * this.b[1]) * u + this.c[1]]
                }, PolynomialBezier.prototype.tangentAngle = function(u) {
                    var P = this.derivative(u);
                    return Math.atan2(P[1], P[0])
                }, PolynomialBezier.prototype.normalAngle = function(u) {
                    var P = this.derivative(u);
                    return Math.atan2(P[0], P[1])
                }, PolynomialBezier.prototype.inflectionPoints = function() {
                    var u = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                    if (floatZero(u)) return [];
                    var P = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / u,
                        D = P * P - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / u;
                    if (D < 0) return [];
                    var S = Math.sqrt(D);
                    return floatZero(S) ? S > 0 && S < 1 ? [P] : [] : [P - S, P + S].filter(function(u) {
                        return u > 0 && u < 1
                    })
                }, PolynomialBezier.prototype.split = function(u) {
                    if (u <= 0) return [singlePoint(this.points[0]), this];
                    if (u >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                    var P = lerpPoint(this.points[0], this.points[1], u),
                        D = lerpPoint(this.points[1], this.points[2], u),
                        S = lerpPoint(this.points[2], this.points[3], u),
                        E = lerpPoint(P, D, u),
                        T = lerpPoint(D, S, u),
                        M = lerpPoint(E, T, u);
                    return [new PolynomialBezier(this.points[0], P, E, M, !0), new PolynomialBezier(M, T, S, this.points[3], !0)]
                }, PolynomialBezier.prototype.bounds = function() {
                    return {
                        x: extrema(this, 0),
                        y: extrema(this, 1)
                    }
                }, PolynomialBezier.prototype.boundingBox = function() {
                    var u = this.bounds();
                    return {
                        left: u.x.min,
                        right: u.x.max,
                        top: u.y.min,
                        bottom: u.y.max,
                        width: u.x.max - u.x.min,
                        height: u.y.max - u.y.min,
                        cx: (u.x.max + u.x.min) / 2,
                        cy: (u.y.max + u.y.min) / 2
                    }
                }, PolynomialBezier.prototype.intersections = function(u, P, D) {
                    void 0 === P && (P = 2), void 0 === D && (D = 7);
                    var S = [];
                    return intersectsImpl(intersectData(this, 0, 1), intersectData(u, 0, 1), 0, P, S, D), S
                }, PolynomialBezier.shapeSegment = function(u, P) {
                    var D = (P + 1) % u.length();
                    return new PolynomialBezier(u.v[P], u.o[P], u.i[D], u.v[D], !0)
                }, PolynomialBezier.shapeSegmentInverted = function(u, P) {
                    var D = (P + 1) % u.length();
                    return new PolynomialBezier(u.v[D], u.i[D], u.o[P], u.v[P], !0)
                }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(u, P) {
                    this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(u, P.s, 0, null, this), this.frequency = PropertyFactory.getProp(u, P.r, 0, null, this), this.pointsType = PropertyFactory.getProp(u, P.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
                }, ZigZagModifier.prototype.processPath = function(u, P, D, S) {
                    var E = u._length,
                        T = shapePool.newElement();
                    if (T.c = u.c, u.c || (E -= 1), 0 === E) return T;
                    var M = -1,
                        F = PolynomialBezier.shapeSegment(u, 0);
                    zigZagCorner(T, u, 0, P, D, S, M);
                    for (var I = 0; I < E; I += 1) M = zigZagSegment(T, F, P, D, S, -M), F = I !== E - 1 || u.c ? PolynomialBezier.shapeSegment(u, (I + 1) % E) : null, zigZagCorner(T, u, I + 1, P, D, S, M);
                    return T
                }, ZigZagModifier.prototype.processShapes = function(u) {
                    var P, D, S, E, T, M, F = this.shapes.length,
                        I = this.amplitude.v,
                        L = Math.max(0, Math.round(this.frequency.v)),
                        V = this.pointsType.v;
                    if (0 !== I)
                        for (D = 0; D < F; D += 1) {
                            if (M = (T = this.shapes[D]).localShapeCollection, !(!T.shape._mdf && !this._mdf && !u))
                                for (M.releaseShapes(), T.shape._mdf = !0, P = T.shape.paths.shapes, E = T.shape.paths._length, S = 0; S < E; S += 1) M.addShape(this.processPath(P[S], I, L, V));
                            T.shape.paths = T.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(u, P) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(u, P.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(u, P.ml, 0, null, this), this.lineJoin = P.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
                }, OffsetPathModifier.prototype.processPath = function(u, P, D, S) {
                    var E, T, M, F = shapePool.newElement();
                    F.c = u.c;
                    var I = u.length();
                    u.c || (I -= 1);
                    var L = [];
                    for (E = 0; E < I; E += 1) M = PolynomialBezier.shapeSegment(u, E), L.push(offsetSegmentSplit(M, P));
                    if (!u.c)
                        for (E = I - 1; E >= 0; E -= 1) M = PolynomialBezier.shapeSegmentInverted(u, E), L.push(offsetSegmentSplit(M, P));
                    L = pruneIntersections(L);
                    var V = null,
                        R = null;
                    for (E = 0; E < L.length; E += 1) {
                        var O = L[E];
                        for (R && (V = joinLines(F, R, O[0], D, S)), R = O[O.length - 1], T = 0; T < O.length; T += 1) M = O[T], V && pointEqual(M.points[0], V) ? F.setXYAt(M.points[1][0], M.points[1][1], "o", F.length() - 1) : F.setTripleAt(M.points[0][0], M.points[0][1], M.points[1][0], M.points[1][1], M.points[0][0], M.points[0][1], F.length()), F.setTripleAt(M.points[3][0], M.points[3][1], M.points[3][0], M.points[3][1], M.points[2][0], M.points[2][1], F.length()), V = M.points[3]
                    }
                    return L.length && joinLines(F, R, L[0][0], D, S), F
                }, OffsetPathModifier.prototype.processShapes = function(u) {
                    var P, D, S, E, T, M, F = this.shapes.length,
                        I = this.amount.v,
                        L = this.miterLimit.v,
                        V = this.lineJoin;
                    if (0 !== I)
                        for (D = 0; D < F; D += 1) {
                            if (M = (T = this.shapes[D]).localShapeCollection, !(!T.shape._mdf && !this._mdf && !u))
                                for (M.releaseShapes(), T.shape._mdf = !0, P = T.shape.paths.shapes, E = T.shape.paths._length, S = 0; S < E; S += 1) M.addShape(this.processPath(P[S], I, V, L));
                            T.shape.paths = T.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                };
                var FontManager = function() {
                    var u = 5e3,
                        P = {
                            w: 0,
                            size: 0,
                            shapes: [],
                            data: {
                                shapes: []
                            }
                        },
                        D = [];
                    D = D.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                    var S = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                        E = [65039, 8205];

                    function T(u) {
                        var P, D = u.split(","),
                            S = D.length,
                            E = [];
                        for (P = 0; P < S; P += 1) "sans-serif" !== D[P] && "monospace" !== D[P] && E.push(D[P]);
                        return E.join(",")
                    }

                    function M(u, P) {
                        var D = createTag("span");
                        D.setAttribute("aria-hidden", !0), D.style.fontFamily = P;
                        var S = createTag("span");
                        S.innerText = "giItT1WQy@!-/#", D.style.position = "absolute", D.style.left = "-10000px", D.style.top = "-10000px", D.style.fontSize = "300px", D.style.fontVariant = "normal", D.style.fontStyle = "normal", D.style.fontWeight = "normal", D.style.letterSpacing = "0", D.appendChild(S), document.body.appendChild(D);
                        var E = S.offsetWidth;
                        return S.style.fontFamily = T(u) + ", " + P, {
                            node: S,
                            w: E,
                            parent: D
                        }
                    }

                    function F() {
                        var P, D, S, E = this.fonts.length,
                            T = E;
                        for (P = 0; P < E; P += 1) this.fonts[P].loaded ? T -= 1 : "n" === this.fonts[P].fOrigin || 0 === this.fonts[P].origin ? this.fonts[P].loaded = !0 : (D = this.fonts[P].monoCase.node, S = this.fonts[P].monoCase.w, D.offsetWidth !== S ? (T -= 1, this.fonts[P].loaded = !0) : (D = this.fonts[P].sansCase.node, S = this.fonts[P].sansCase.w, D.offsetWidth !== S && (T -= 1, this.fonts[P].loaded = !0)), this.fonts[P].loaded && (this.fonts[P].sansCase.parent.parentNode.removeChild(this.fonts[P].sansCase.parent), this.fonts[P].monoCase.parent.parentNode.removeChild(this.fonts[P].monoCase.parent)));
                        0 !== T && Date.now() - this.initTime < u ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    }

                    function I(u, P) {
                        var D, S = document.body && P ? "svg" : "canvas",
                            E = getFontProperties(u);
                        if ("svg" === S) {
                            var T = createNS("text");
                            T.style.fontSize = "100px", T.setAttribute("font-family", u.fFamily), T.setAttribute("font-style", E.style), T.setAttribute("font-weight", E.weight), T.textContent = "1", u.fClass ? (T.style.fontFamily = "inherit", T.setAttribute("class", u.fClass)) : T.style.fontFamily = u.fFamily, P.appendChild(T), D = T
                        } else {
                            var M = new OffscreenCanvas(500, 500).getContext("2d");
                            M.font = E.style + " " + E.weight + " 100px " + u.fFamily, D = M
                        }
                        return {
                            measureText: function(u) {
                                return "svg" === S ? (D.textContent = u, D.getComputedTextLength()) : D.measureText(u).width
                            }
                        }
                    }

                    function L(u, P) {
                        if (!u) {
                            this.isLoaded = !0;
                            return
                        }
                        if (this.chars) {
                            this.isLoaded = !0, this.fonts = u.list;
                            return
                        }
                        if (!document.body) {
                            this.isLoaded = !0, u.list.forEach(function(u) {
                                u.helper = I(u), u.cache = {}
                            }), this.fonts = u.list;
                            return
                        }
                        var D = u.list,
                            S = D.length,
                            E = S;
                        for (T = 0; T < S; T += 1) {
                            var T, F, L, V = !0;
                            if (D[T].loaded = !1, D[T].monoCase = M(D[T].fFamily, "monospace"), D[T].sansCase = M(D[T].fFamily, "sans-serif"), D[T].fPath) {
                                if ("p" === D[T].fOrigin || 3 === D[T].origin) {
                                    if ((F = document.querySelectorAll('style[f-forigin="p"][f-family="' + D[T].fFamily + '"], style[f-origin="3"][f-family="' + D[T].fFamily + '"]')).length > 0 && (V = !1), V) {
                                        var R = createTag("style");
                                        R.setAttribute("f-forigin", D[T].fOrigin), R.setAttribute("f-origin", D[T].origin), R.setAttribute("f-family", D[T].fFamily), R.type = "text/css", R.innerText = "@font-face {font-family: " + D[T].fFamily + "; font-style: normal; src: url('" + D[T].fPath + "');}", P.appendChild(R)
                                    }
                                } else if ("g" === D[T].fOrigin || 1 === D[T].origin) {
                                    for (L = 0, F = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'); L < F.length; L += 1) - 1 !== F[L].href.indexOf(D[T].fPath) && (V = !1);
                                    if (V) {
                                        var O = createTag("link");
                                        O.setAttribute("f-forigin", D[T].fOrigin), O.setAttribute("f-origin", D[T].origin), O.type = "text/css", O.rel = "stylesheet", O.href = D[T].fPath, document.body.appendChild(O)
                                    }
                                } else if ("t" === D[T].fOrigin || 2 === D[T].origin) {
                                    for (L = 0, F = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'); L < F.length; L += 1) D[T].fPath === F[L].src && (V = !1);
                                    if (V) {
                                        var N = createTag("link");
                                        N.setAttribute("f-forigin", D[T].fOrigin), N.setAttribute("f-origin", D[T].origin), N.setAttribute("rel", "stylesheet"), N.setAttribute("href", D[T].fPath), P.appendChild(N)
                                    }
                                }
                            } else D[T].loaded = !0, E -= 1;
                            D[T].helper = I(D[T], P), D[T].cache = {}, this.fonts.push(D[T])
                        }
                        0 === E ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                    }

                    function V(u) {
                        if (u) {
                            this.chars || (this.chars = []);
                            var P, D, S, E = u.length,
                                T = this.chars.length;
                            for (P = 0; P < E; P += 1) {
                                for (D = 0, S = !1; D < T;) this.chars[D].style === u[P].style && this.chars[D].fFamily === u[P].fFamily && this.chars[D].ch === u[P].ch && (S = !0), D += 1;
                                S || (this.chars.push(u[P]), T += 1)
                            }
                        }
                    }

                    function R(u, D, S) {
                        for (var E = 0, T = this.chars.length; E < T;) {
                            if (this.chars[E].ch === u && this.chars[E].style === D && this.chars[E].fFamily === S) return this.chars[E];
                            E += 1
                        }
                        return ("string" == typeof u && 13 !== u.charCodeAt(0) || !u) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", u, D, S)), P
                    }

                    function O(u, P, D) {
                        var S = this.getFontByName(P),
                            E = u.charCodeAt(0);
                        if (!S.cache[E + 1]) {
                            var T = S.helper;
                            if (" " === u) {
                                var M = T.measureText("|" + u + "|"),
                                    F = T.measureText("||");
                                S.cache[E + 1] = (M - F) / 100
                            } else S.cache[E + 1] = T.measureText(u) / 100
                        }
                        return S.cache[E + 1] * D
                    }

                    function N(u) {
                        for (var P = 0, D = this.fonts.length; P < D;) {
                            if (this.fonts[P].fName === u) return this.fonts[P];
                            P += 1
                        }
                        return this.fonts[0]
                    }

                    function G(u, P) {
                        var D = u.toString(16) + P.toString(16);
                        return -1 !== S.indexOf(D)
                    }

                    function W(u, P) {
                        return P ? u === E[0] && P === E[1] : u === E[1]
                    }

                    function Y(u) {
                        return -1 !== D.indexOf(u)
                    }

                    function H() {
                        this.isLoaded = !0
                    }
                    var X = function() {
                        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                    };
                    X.isModifier = G, X.isZeroWidthJoiner = W, X.isCombinedCharacter = Y;
                    var K = {
                        addChars: V,
                        addFonts: L,
                        getCharData: R,
                        getFontByName: N,
                        measureText: O,
                        checkLoadedFonts: F,
                        setIsLoaded: H
                    };
                    return X.prototype = K, X
                }();

                function SlotManager(u) {
                    this.animationData = u
                }

                function slotFactory(u) {
                    return new SlotManager(u)
                }

                function RenderableElement() {}
                SlotManager.prototype.getProp = function(u) {
                    return this.animationData.slots && this.animationData.slots[u.sid] ? Object.assign(u, this.animationData.slots[u.sid].p) : u
                }, RenderableElement.prototype = {
                    initRenderable: function() {
                        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                    },
                    addRenderableComponent: function(u) {
                        -1 === this.renderableComponents.indexOf(u) && this.renderableComponents.push(u)
                    },
                    removeRenderableComponent: function(u) {
                        -1 !== this.renderableComponents.indexOf(u) && this.renderableComponents.splice(this.renderableComponents.indexOf(u), 1)
                    },
                    prepareRenderableFrame: function(u) {
                        this.checkLayerLimits(u)
                    },
                    checkTransparency: function() {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                    },
                    checkLayerLimits: function(u) {
                        this.data.ip - this.data.st <= u && this.data.op - this.data.st > u ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                    },
                    renderRenderable: function() {
                        var u, P = this.renderableComponents.length;
                        for (u = 0; u < P; u += 1) this.renderableComponents[u].renderFrame(this._isFirstFrame)
                    },
                    sourceRectAtTime: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    getLayerSize: function() {
                        return 5 === this.data.ty ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height
                        } : {
                            w: this.data.width,
                            h: this.data.height
                        }
                    }
                };
                var getBlendMode = function() {
                    var u = {
                        0: "source-over",
                        1: "multiply",
                        2: "screen",
                        3: "overlay",
                        4: "darken",
                        5: "lighten",
                        6: "color-dodge",
                        7: "color-burn",
                        8: "hard-light",
                        9: "soft-light",
                        10: "difference",
                        11: "exclusion",
                        12: "hue",
                        13: "saturation",
                        14: "color",
                        15: "luminosity"
                    };
                    return function(P) {
                        return u[P] || ""
                    }
                }();

                function SliderEffect(u, P, D) {
                    this.p = PropertyFactory.getProp(P, u.v, 0, 0, D)
                }

                function AngleEffect(u, P, D) {
                    this.p = PropertyFactory.getProp(P, u.v, 0, 0, D)
                }

                function ColorEffect(u, P, D) {
                    this.p = PropertyFactory.getProp(P, u.v, 1, 0, D)
                }

                function PointEffect(u, P, D) {
                    this.p = PropertyFactory.getProp(P, u.v, 1, 0, D)
                }

                function LayerIndexEffect(u, P, D) {
                    this.p = PropertyFactory.getProp(P, u.v, 0, 0, D)
                }

                function MaskIndexEffect(u, P, D) {
                    this.p = PropertyFactory.getProp(P, u.v, 0, 0, D)
                }

                function CheckboxEffect(u, P, D) {
                    this.p = PropertyFactory.getProp(P, u.v, 0, 0, D)
                }

                function NoValueEffect() {
                    this.p = {}
                }

                function EffectsManager(u, P) {
                    var D, S, E = u.ef || [];
                    this.effectElements = [];
                    var T = E.length;
                    for (D = 0; D < T; D += 1) S = new GroupEffect(E[D], P), this.effectElements.push(S)
                }

                function GroupEffect(u, P) {
                    this.init(u, P)
                }

                function BaseElement() {}

                function FrameElement() {}

                function FootageElement(u, P, D) {
                    this.initFrame(), this.initRenderable(), this.assetData = P.getAssetData(u.refId), this.footageData = P.imageLoader.getAsset(this.assetData), this.initBaseData(u, P, D)
                }

                function AudioElement(u, P, D) {
                    this.initFrame(), this.initRenderable(), this.assetData = P.getAssetData(u.refId), this.initBaseData(u, P, D), this._isPlaying = !1, this._canPlay = !1;
                    var S = this.globalData.getAssetsPath(this.assetData);
                    this.audio = this.globalData.audioController.createAudio(S), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = u.tm ? PropertyFactory.getProp(this, u.tm, 0, P.frameRate, this) : {
                        _placeholder: !0
                    }, this.lv = PropertyFactory.getProp(this, u.au && u.au.lv ? u.au.lv : {
                        k: [100]
                    }, 1, .01, this)
                }

                function BaseRenderer() {}

                function TransformElement() {}

                function MaskElement(u, P, D) {
                    this.data = u, this.element = P, this.globalData = D, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                    var S = this.globalData.defs,
                        E = this.masksProperties ? this.masksProperties.length : 0;
                    this.viewData = createSizedArray(E), this.solidPath = "";
                    var T = this.masksProperties,
                        M = 0,
                        F = [],
                        I = createElementID(),
                        L = "clipPath",
                        V = "clip-path";
                    for (R = 0; R < E; R += 1)
                        if (("a" !== T[R].mode && "n" !== T[R].mode || T[R].inv || 100 !== T[R].o.k || T[R].o.x) && (L = "mask", V = "mask"), ("s" === T[R].mode || "i" === T[R].mode) && 0 === M ? ((W = createNS("rect")).setAttribute("fill", "#ffffff"), W.setAttribute("width", this.element.comp.data.w || 0), W.setAttribute("height", this.element.comp.data.h || 0), F.push(W)) : W = null, O = createNS("path"), "n" === T[R].mode) this.viewData[R] = {
                            op: PropertyFactory.getProp(this.element, T[R].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, T[R], 3),
                            elem: O,
                            lastPath: ""
                        }, S.appendChild(O);
                        else {
                            if (M += 1, O.setAttribute("fill", "s" === T[R].mode ? "#000000" : "#ffffff"), O.setAttribute("clip-rule", "nonzero"), 0 !== T[R].x.k ? (L = "mask", V = "mask", X = PropertyFactory.getProp(this.element, T[R].x, 0, null, this.element), K = createElementID(), (Y = createNS("filter")).setAttribute("id", K), (H = createNS("feMorphology")).setAttribute("operator", "erode"), H.setAttribute("in", "SourceGraphic"), H.setAttribute("radius", "0"), Y.appendChild(H), S.appendChild(Y), O.setAttribute("stroke", "s" === T[R].mode ? "#000000" : "#ffffff")) : (H = null, X = null), this.storedData[R] = {
                                    elem: O,
                                    x: X,
                                    expan: H,
                                    lastPath: "",
                                    lastOperator: "",
                                    filterId: K,
                                    lastRadius: 0
                                }, "i" === T[R].mode) {
                                G = F.length;
                                var R, O, N, G, W, Y, H, X, K, J = createNS("g");
                                for (N = 0; N < G; N += 1) J.appendChild(F[N]);
                                var Z = createNS("mask");
                                Z.setAttribute("mask-type", "alpha"), Z.setAttribute("id", I + "_" + M), Z.appendChild(O), S.appendChild(Z), J.setAttribute("mask", "url(" + getLocationHref() + "#" + I + "_" + M + ")"), F.length = 0, F.push(J)
                            } else F.push(O);
                            T[R].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[R] = {
                                elem: O,
                                lastPath: "",
                                op: PropertyFactory.getProp(this.element, T[R].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, T[R], 3),
                                invRect: W
                            }, this.viewData[R].prop.k || this.drawPath(T[R], this.viewData[R].prop.v, this.viewData[R])
                        }
                    for (R = 0, this.maskElement = createNS(L), E = F.length; R < E; R += 1) this.maskElement.appendChild(F[R]);
                    M > 0 && (this.maskElement.setAttribute("id", I), this.element.maskedElement.setAttribute(V, "url(" + getLocationHref() + "#" + I + ")"), S.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                }
                extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(u, P) {
                    this.data = u, this.effectElements = [], this.initDynamicPropertyContainer(P);
                    var D, S, E = this.data.ef.length,
                        T = this.data.ef;
                    for (D = 0; D < E; D += 1) {
                        switch (S = null, T[D].ty) {
                            case 0:
                                S = new SliderEffect(T[D], P, this);
                                break;
                            case 1:
                                S = new AngleEffect(T[D], P, this);
                                break;
                            case 2:
                                S = new ColorEffect(T[D], P, this);
                                break;
                            case 3:
                                S = new PointEffect(T[D], P, this);
                                break;
                            case 4:
                            case 7:
                                S = new CheckboxEffect(T[D], P, this);
                                break;
                            case 10:
                                S = new LayerIndexEffect(T[D], P, this);
                                break;
                            case 11:
                                S = new MaskIndexEffect(T[D], P, this);
                                break;
                            case 5:
                                S = new EffectsManager(T[D], P, this);
                                break;
                            default:
                                S = new NoValueEffect(T[D], P, this)
                        }
                        S && this.effectElements.push(S)
                    }
                }, BaseElement.prototype = {
                    checkMasks: function() {
                        if (!this.data.hasMask) return !1;
                        for (var u = 0, P = this.data.masksProperties.length; u < P;) {
                            if ("n" !== this.data.masksProperties[u].mode && !1 !== this.data.masksProperties[u].cl) return !0;
                            u += 1
                        }
                        return !1
                    },
                    initExpressions: function() {
                        var u = getExpressionInterfaces();
                        if (u) {
                            var P = u("layer"),
                                D = u("effects"),
                                S = u("shape"),
                                E = u("text"),
                                T = u("comp");
                            this.layerInterface = P(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                            var M = D.createEffectsInterface(this, this.layerInterface);
                            this.layerInterface.registerEffectsInterface(M), 0 === this.data.ty || this.data.xt ? this.compInterface = T(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = S(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = E(this), this.layerInterface.text = this.layerInterface.textInterface)
                        }
                    },
                    setBlendMode: function() {
                        var u = getBlendMode(this.data.bm);
                        (this.baseElement || this.layerElement).style["mix-blend-mode"] = u
                    },
                    initBaseData: function(u, P, D) {
                        this.globalData = P, this.comp = D, this.data = u, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                    },
                    getType: function() {
                        return this.type
                    },
                    sourceRectAtTime: function() {}
                }, FrameElement.prototype = {
                    initFrame: function() {
                        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                    },
                    prepareProperties: function(u, P) {
                        var D, S = this.dynamicProperties.length;
                        for (D = 0; D < S; D += 1)(P || this._isParent && "transform" === this.dynamicProperties[D].propType) && (this.dynamicProperties[D].getValue(), this.dynamicProperties[D]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                    },
                    addDynamicProperty: function(u) {
                        -1 === this.dynamicProperties.indexOf(u) && this.dynamicProperties.push(u)
                    }
                }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                    return null
                }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                    var u = getExpressionInterfaces();
                    if (u) {
                        var P = u("footage");
                        this.layerInterface = P(this)
                    }
                }, FootageElement.prototype.getFootageData = function() {
                    return this.footageData
                }, AudioElement.prototype.prepareFrame = function(u) {
                    if (this.prepareRenderableFrame(u, !0), this.prepareProperties(u, !0), this.tm._placeholder) this._currentTime = u / this.data.sr;
                    else {
                        var P = this.tm.v;
                        this._currentTime = P
                    }
                    this._volume = this.lv.v[0];
                    var D = this._volume * this._volumeMultiplier;
                    this._previousVolume !== D && (this._previousVolume = D, this.audio.volume(D))
                }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                    this.audio.pause(), this._isPlaying = !1
                }, AudioElement.prototype.pause = function() {
                    this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                }, AudioElement.prototype.resume = function() {
                    this._canPlay = !0
                }, AudioElement.prototype.setRate = function(u) {
                    this.audio.rate(u)
                }, AudioElement.prototype.volume = function(u) {
                    this._volumeMultiplier = u, this._previousVolume = u * this._volume, this.audio.volume(this._previousVolume)
                }, AudioElement.prototype.getBaseElement = function() {
                    return null
                }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(u) {
                    var P, D, S = this.layers.length;
                    for (this.completeLayers = !0, P = S - 1; P >= 0; P -= 1) !this.elements[P] && (D = this.layers[P]).ip - D.st <= u - this.layers[P].st && D.op - D.st > u - this.layers[P].st && this.buildItem(P), this.completeLayers = !!this.elements[P] && this.completeLayers;
                    this.checkPendingElements()
                }, BaseRenderer.prototype.createItem = function(u) {
                    switch (u.ty) {
                        case 2:
                            return this.createImage(u);
                        case 0:
                            return this.createComp(u);
                        case 1:
                            return this.createSolid(u);
                        case 3:
                        default:
                            return this.createNull(u);
                        case 4:
                            return this.createShape(u);
                        case 5:
                            return this.createText(u);
                        case 6:
                            return this.createAudio(u);
                        case 13:
                            return this.createCamera(u);
                        case 15:
                            return this.createFootage(u)
                    }
                }, BaseRenderer.prototype.createCamera = function() {
                    throw Error("You're using a 3d camera. Try the html renderer.")
                }, BaseRenderer.prototype.createAudio = function(u) {
                    return new AudioElement(u, this.globalData, this)
                }, BaseRenderer.prototype.createFootage = function(u) {
                    return new FootageElement(u, this.globalData, this)
                }, BaseRenderer.prototype.buildAllItems = function() {
                    var u, P = this.layers.length;
                    for (u = 0; u < P; u += 1) this.buildItem(u);
                    this.checkPendingElements()
                }, BaseRenderer.prototype.includeLayers = function(u) {
                    this.completeLayers = !1;
                    var P, D, S = u.length,
                        E = this.layers.length;
                    for (P = 0; P < S; P += 1)
                        for (D = 0; D < E;) {
                            if (this.layers[D].id === u[P].id) {
                                this.layers[D] = u[P];
                                break
                            }
                            D += 1
                        }
                }, BaseRenderer.prototype.setProjectInterface = function(u) {
                    this.globalData.projectInterface = u
                }, BaseRenderer.prototype.initItems = function() {
                    this.globalData.progressiveLoad || this.buildAllItems()
                }, BaseRenderer.prototype.buildElementParenting = function(u, P, D) {
                    for (var S = this.elements, E = this.layers, T = 0, M = E.length; T < M;) E[T].ind == P && (S[T] && !0 !== S[T] ? (D.push(S[T]), S[T].setAsParent(), void 0 !== E[T].parent ? this.buildElementParenting(u, E[T].parent, D) : u.setHierarchy(D)) : (this.buildItem(T), this.addPendingElement(u))), T += 1
                }, BaseRenderer.prototype.addPendingElement = function(u) {
                    this.pendingElements.push(u)
                }, BaseRenderer.prototype.searchExtraCompositions = function(u) {
                    var P, D = u.length;
                    for (P = 0; P < D; P += 1)
                        if (u[P].xt) {
                            var S = this.createComp(u[P]);
                            S.initExpressions(), this.globalData.projectInterface.registerComposition(S)
                        }
                }, BaseRenderer.prototype.getElementById = function(u) {
                    var P, D = this.elements.length;
                    for (P = 0; P < D; P += 1)
                        if (this.elements[P].data.ind === u) return this.elements[P];
                    return null
                }, BaseRenderer.prototype.getElementByPath = function(u) {
                    var P = u.shift();
                    if ("number" == typeof P) D = this.elements[P];
                    else {
                        var D, S, E = this.elements.length;
                        for (S = 0; S < E; S += 1)
                            if (this.elements[S].data.nm === P) {
                                D = this.elements[S];
                                break
                            }
                    }
                    return 0 === u.length ? D : D.getElementByPath(u)
                }, BaseRenderer.prototype.setupGlobalData = function(u, P) {
                    this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(u), this.globalData.fontManager.addChars(u.chars), this.globalData.fontManager.addFonts(u.fonts, P), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = u.fr, this.globalData.nm = u.nm, this.globalData.compSize = {
                        w: u.w,
                        h: u.h
                    }
                }, TransformElement.prototype = {
                    initTransform: function() {
                        this.finalTransform = {
                            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                o: 0
                            },
                            _matMdf: !1,
                            _opMdf: !1,
                            mat: new Matrix
                        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                    },
                    renderTransform: function() {
                        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                            var u, P = this.finalTransform.mat,
                                D = 0,
                                S = this.hierarchy.length;
                            if (!this.finalTransform._matMdf)
                                for (; D < S;) {
                                    if (this.hierarchy[D].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break
                                    }
                                    D += 1
                                }
                            if (this.finalTransform._matMdf)
                                for (u = this.finalTransform.mProp.v.props, P.cloneFromProps(u), D = 0; D < S; D += 1) u = this.hierarchy[D].finalTransform.mProp.v.props, P.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15])
                        }
                    },
                    globalToLocal: function(u) {
                        var P, D, S = [];
                        S.push(this.finalTransform);
                        for (var E = !0, T = this.comp; E;) T.finalTransform ? (T.data.hasMask && S.splice(0, 0, T.finalTransform), T = T.comp) : E = !1;
                        var M = S.length;
                        for (P = 0; P < M; P += 1) D = S[P].mat.applyToPointArray(0, 0, 0), u = [u[0] - D[0], u[1] - D[1], 0];
                        return u
                    },
                    mHelper: new Matrix
                }, MaskElement.prototype.getMaskProperty = function(u) {
                    return this.viewData[u].prop
                }, MaskElement.prototype.renderFrame = function(u) {
                    var P, D = this.element.finalTransform.mat,
                        S = this.masksProperties.length;
                    for (P = 0; P < S; P += 1)
                        if ((this.viewData[P].prop._mdf || u) && this.drawPath(this.masksProperties[P], this.viewData[P].prop.v, this.viewData[P]), (this.viewData[P].op._mdf || u) && this.viewData[P].elem.setAttribute("fill-opacity", this.viewData[P].op.v), "n" !== this.masksProperties[P].mode && (this.viewData[P].invRect && (this.element.finalTransform.mProp._mdf || u) && this.viewData[P].invRect.setAttribute("transform", D.getInverseMatrix().to2dCSS()), this.storedData[P].x && (this.storedData[P].x._mdf || u))) {
                            var E = this.storedData[P].expan;
                            this.storedData[P].x.v < 0 ? ("erode" !== this.storedData[P].lastOperator && (this.storedData[P].lastOperator = "erode", this.storedData[P].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[P].filterId + ")")), E.setAttribute("radius", -this.storedData[P].x.v)) : ("dilate" !== this.storedData[P].lastOperator && (this.storedData[P].lastOperator = "dilate", this.storedData[P].elem.setAttribute("filter", null)), this.storedData[P].elem.setAttribute("stroke-width", 2 * this.storedData[P].x.v))
                        }
                }, MaskElement.prototype.getMaskelement = function() {
                    return this.maskElement
                }, MaskElement.prototype.createLayerSolidPath = function() {
                    return "M0,0 " + (" h" + this.globalData.compSize.w + " v" + this.globalData.compSize.h + " h-" + this.globalData.compSize.w + " v-" + this.globalData.compSize.h) + " "
                }, MaskElement.prototype.drawPath = function(u, P, D) {
                    var S, E, T = " M" + P.v[0][0] + "," + P.v[0][1];
                    for (S = 1, E = P._length; S < E; S += 1) T += " C" + P.o[S - 1][0] + "," + P.o[S - 1][1] + " " + P.i[S][0] + "," + P.i[S][1] + " " + P.v[S][0] + "," + P.v[S][1];
                    if (P.c && E > 1 && (T += " C" + P.o[S - 1][0] + "," + P.o[S - 1][1] + " " + P.i[0][0] + "," + P.i[0][1] + " " + P.v[0][0] + "," + P.v[0][1]), D.lastPath !== T) {
                        var M = "";
                        D.elem && (P.c && (M = u.inv ? this.solidPath + T : T), D.elem.setAttribute("d", M)), D.lastPath = T
                    }
                }, MaskElement.prototype.destroy = function() {
                    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                };
                var filtersFactory = function() {
                        var u = {};

                        function P(u, P) {
                            var D = createNS("filter");
                            return D.setAttribute("id", u), !0 !== P && (D.setAttribute("filterUnits", "objectBoundingBox"), D.setAttribute("x", "0%"), D.setAttribute("y", "0%"), D.setAttribute("width", "100%"), D.setAttribute("height", "100%")), D
                        }

                        function D() {
                            var u = createNS("feColorMatrix");
                            return u.setAttribute("type", "matrix"), u.setAttribute("color-interpolation-filters", "sRGB"), u.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), u
                        }
                        return u.createFilter = P, u.createAlphaToLuminanceFilter = D, u
                    }(),
                    featureSupport = function() {
                        var u = {
                            maskType: !0,
                            svgLumaHidden: !0,
                            offscreenCanvas: "undefined" != typeof OffscreenCanvas
                        };
                        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (u.maskType = !1), /firefox/i.test(navigator.userAgent) && (u.svgLumaHidden = !1), u
                    }(),
                    registeredEffects = {},
                    idPrefix = "filter_result_";

                function SVGEffects(u) {
                    var P, D, S = "SourceGraphic",
                        E = u.data.ef ? u.data.ef.length : 0,
                        T = createElementID(),
                        M = filtersFactory.createFilter(T, !0),
                        F = 0;
                    for (P = 0, this.filters = []; P < E; P += 1) {
                        D = null;
                        var I = u.data.ef[P].ty;
                        registeredEffects[I] && (D = new registeredEffects[I].effect(M, u.effectsManager.effectElements[P], u, idPrefix + F, S), S = idPrefix + F, registeredEffects[I].countsAsEffect && (F += 1)), D && this.filters.push(D)
                    }
                    F && (u.globalData.defs.appendChild(M), u.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + T + ")")), this.filters.length && u.addRenderableComponent(this)
                }

                function registerEffect(u, P, D) {
                    registeredEffects[u] = {
                        effect: P,
                        countsAsEffect: D
                    }
                }

                function SVGBaseElement() {}

                function HierarchyElement() {}

                function RenderableDOMElement() {}

                function IImageElement(u, P, D) {
                    this.assetData = P.getAssetData(u.refId), this.assetData && this.assetData.sid && (this.assetData = P.slotManager.getProp(this.assetData)), this.initElement(u, P, D), this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    }
                }

                function ProcessedElement(u, P) {
                    this.elem = u, this.pos = P
                }

                function IShapeElement() {}
                SVGEffects.prototype.renderFrame = function(u) {
                        var P, D = this.filters.length;
                        for (P = 0; P < D; P += 1) this.filters[P].renderFrame(u)
                    }, SVGBaseElement.prototype = {
                        initRendererElement: function() {
                            this.layerElement = createNS("g")
                        },
                        createContainerElements: function() {
                            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                            var u = null;
                            if (this.data.td) {
                                this.matteMasks = {};
                                var P = createNS("g");
                                P.setAttribute("id", this.layerId), P.appendChild(this.layerElement), u = P, this.globalData.defs.appendChild(P)
                            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), u = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                                var D = createNS("clipPath"),
                                    S = createNS("path");
                                S.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                                var E = createElementID();
                                if (D.setAttribute("id", E), D.appendChild(S), this.globalData.defs.appendChild(D), this.checkMasks()) {
                                    var T = createNS("g");
                                    T.setAttribute("clip-path", "url(" + getLocationHref() + "#" + E + ")"), T.appendChild(this.layerElement), this.transformedElement = T, u ? u.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                                } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + E + ")")
                            }
                            0 !== this.data.bm && this.setBlendMode()
                        },
                        renderElement: function() {
                            this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                        },
                        destroyBaseElement: function() {
                            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                        },
                        getBaseElement: function() {
                            return this.data.hd ? null : this.baseElement
                        },
                        createRenderableComponents: function() {
                            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                        },
                        getMatte: function(u) {
                            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[u]) {
                                var P, D, S, E, T = this.layerId + "_" + u;
                                if (1 === u || 3 === u) {
                                    var M = createNS("mask");
                                    M.setAttribute("id", T), M.setAttribute("mask-type", 3 === u ? "luminance" : "alpha"), (S = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), M.appendChild(S), this.globalData.defs.appendChild(M), featureSupport.maskType || 1 !== u || (M.setAttribute("mask-type", "luminance"), P = createElementID(), D = filtersFactory.createFilter(P), this.globalData.defs.appendChild(D), D.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (E = createNS("g")).appendChild(S), M.appendChild(E), E.setAttribute("filter", "url(" + getLocationHref() + "#" + P + ")"))
                                } else if (2 === u) {
                                    var F = createNS("mask");
                                    F.setAttribute("id", T), F.setAttribute("mask-type", "alpha");
                                    var I = createNS("g");
                                    F.appendChild(I), P = createElementID(), D = filtersFactory.createFilter(P);
                                    var L = createNS("feComponentTransfer");
                                    L.setAttribute("in", "SourceGraphic"), D.appendChild(L);
                                    var V = createNS("feFuncA");
                                    V.setAttribute("type", "table"), V.setAttribute("tableValues", "1.0 0.0"), L.appendChild(V), this.globalData.defs.appendChild(D);
                                    var R = createNS("rect");
                                    R.setAttribute("width", this.comp.data.w), R.setAttribute("height", this.comp.data.h), R.setAttribute("x", "0"), R.setAttribute("y", "0"), R.setAttribute("fill", "#ffffff"), R.setAttribute("opacity", "0"), I.setAttribute("filter", "url(" + getLocationHref() + "#" + P + ")"), I.appendChild(R), (S = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), I.appendChild(S), featureSupport.maskType || (F.setAttribute("mask-type", "luminance"), D.appendChild(filtersFactory.createAlphaToLuminanceFilter()), E = createNS("g"), I.appendChild(R), E.appendChild(this.layerElement), I.appendChild(E)), this.globalData.defs.appendChild(F)
                                }
                                this.matteMasks[u] = T
                            }
                            return this.matteMasks[u]
                        },
                        setMatte: function(u) {
                            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + u + ")")
                        }
                    }, HierarchyElement.prototype = {
                        initHierarchy: function() {
                            this.hierarchy = [], this._isParent = !1, this.checkParenting()
                        },
                        setHierarchy: function(u) {
                            this.hierarchy = u
                        },
                        setAsParent: function() {
                            this._isParent = !0
                        },
                        checkParenting: function() {
                            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                        }
                    },
                    function() {
                        extendPrototype([RenderableElement, createProxyFunction({
                            initElement: function(u, P, D) {
                                this.initFrame(), this.initBaseData(u, P, D), this.initTransform(u, P, D), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                            },
                            hide: function() {
                                this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                            },
                            show: function() {
                                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                            },
                            renderFrame: function() {
                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                            },
                            renderInnerContent: function() {},
                            prepareFrame: function(u) {
                                this._mdf = !1, this.prepareRenderableFrame(u), this.prepareProperties(u, this.isInRange), this.checkTransparency()
                            },
                            destroy: function() {
                                this.innerElem = null, this.destroyBaseElement()
                            }
                        })], RenderableDOMElement)
                    }(), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                        var u = this.globalData.getAssetsPath(this.assetData);
                        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", u), this.layerElement.appendChild(this.innerElem)
                    }, IImageElement.prototype.sourceRectAtTime = function() {
                        return this.sourceRect
                    }, IShapeElement.prototype = {
                        addShapeToModifiers: function(u) {
                            var P, D = this.shapeModifiers.length;
                            for (P = 0; P < D; P += 1) this.shapeModifiers[P].addShape(u)
                        },
                        isShapeInAnimatedModifiers: function(u) {
                            for (var P = 0, D = this.shapeModifiers.length; P < D;)
                                if (this.shapeModifiers[P].isAnimatedWithShape(u)) return !0;
                            return !1
                        },
                        renderModifiers: function() {
                            if (this.shapeModifiers.length) {
                                var u, P = this.shapes.length;
                                for (u = 0; u < P; u += 1) this.shapes[u].sh.reset();
                                for (u = (P = this.shapeModifiers.length) - 1; u >= 0 && !this.shapeModifiers[u].processShapes(this._isFirstFrame); u -= 1);
                            }
                        },
                        searchProcessedElement: function(u) {
                            for (var P = this.processedElements, D = 0, S = P.length; D < S;) {
                                if (P[D].elem === u) return P[D].pos;
                                D += 1
                            }
                            return 0
                        },
                        addProcessedElement: function(u, P) {
                            for (var D = this.processedElements, S = D.length; S;)
                                if (D[S -= 1].elem === u) {
                                    D[S].pos = P;
                                    return
                                }
                            D.push(new ProcessedElement(u, P))
                        },
                        prepareFrame: function(u) {
                            this.prepareRenderableFrame(u), this.prepareProperties(u, this.isInRange)
                        }
                    };
                var lineCapEnum = {
                        1: "butt",
                        2: "round",
                        3: "square"
                    },
                    lineJoinEnum = {
                        1: "miter",
                        2: "round",
                        3: "bevel"
                    };

                function SVGShapeData(u, P, D) {
                    this.caches = [], this.styles = [], this.transformers = u, this.lStr = "", this.sh = D, this.lvl = P, this._isAnimated = !!D.k;
                    for (var S = 0, E = u.length; S < E;) {
                        if (u[S].mProps.dynamicProperties.length) {
                            this._isAnimated = !0;
                            break
                        }
                        S += 1
                    }
                }

                function SVGStyleData(u, P) {
                    this.data = u, this.type = u.ty, this.d = "", this.lvl = P, this._mdf = !1, this.closed = !0 === u.hd, this.pElem = createNS("path"), this.msElem = null
                }

                function DashProperty(u, P, D, S) {
                    this.elem = u, this.frameId = -1, this.dataProps = createSizedArray(P.length), this.renderer = D, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", P.length ? P.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(S);
                    var E, T, M = P.length || 0;
                    for (E = 0; E < M; E += 1) T = PropertyFactory.getProp(u, P[E].v, 0, 0, this), this.k = T.k || this.k, this.dataProps[E] = {
                        n: P[E].n,
                        p: T
                    };
                    this.k || this.getValue(!0), this._isAnimated = this.k
                }

                function SVGStrokeStyleData(u, P, D) {
                    this.initDynamicPropertyContainer(u), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(u, P.o, 0, .01, this), this.w = PropertyFactory.getProp(u, P.w, 0, null, this), this.d = new DashProperty(u, P.d || {}, "svg", this), this.c = PropertyFactory.getProp(u, P.c, 1, 255, this), this.style = D, this._isAnimated = !!this._isAnimated
                }

                function SVGFillStyleData(u, P, D) {
                    this.initDynamicPropertyContainer(u), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(u, P.o, 0, .01, this), this.c = PropertyFactory.getProp(u, P.c, 1, 255, this), this.style = D
                }

                function SVGNoStyleData(u, P, D) {
                    this.initDynamicPropertyContainer(u), this.getValue = this.iterateDynamicProperties, this.style = D
                }

                function GradientProperty(u, P, D) {
                    this.data = P, this.c = createTypedArray("uint8c", 4 * P.p);
                    var S = P.k.k[0].s ? P.k.k[0].s.length - 4 * P.p : P.k.k.length - 4 * P.p;
                    this.o = createTypedArray("float32", S), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = S, this.initDynamicPropertyContainer(D), this.prop = PropertyFactory.getProp(u, P.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                }

                function SVGGradientFillStyleData(u, P, D) {
                    this.initDynamicPropertyContainer(u), this.getValue = this.iterateDynamicProperties, this.initGradientData(u, P, D)
                }

                function SVGGradientStrokeStyleData(u, P, D) {
                    this.initDynamicPropertyContainer(u), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(u, P.w, 0, null, this), this.d = new DashProperty(u, P.d || {}, "svg", this), this.initGradientData(u, P, D), this._isAnimated = !!this._isAnimated
                }

                function ShapeGroupData() {
                    this.it = [], this.prevViewData = [], this.gr = createNS("g")
                }

                function SVGTransformData(u, P, D) {
                    this.transform = {
                        mProps: u,
                        op: P,
                        container: D
                    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                }
                SVGShapeData.prototype.setAsAnimated = function() {
                    this._isAnimated = !0
                }, SVGStyleData.prototype.reset = function() {
                    this.d = "", this._mdf = !1
                }, DashProperty.prototype.getValue = function(u) {
                    if ((this.elem.globalData.frameId !== this.frameId || u) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || u, this._mdf)) {
                        var P = 0,
                            D = this.dataProps.length;
                        for ("svg" === this.renderer && (this.dashStr = ""), P = 0; P < D; P += 1) "o" !== this.dataProps[P].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[P].p.v : this.dashArray[P] = this.dataProps[P].p.v : this.dashoffset[0] = this.dataProps[P].p.v
                    }
                }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(u, P) {
                    for (var D = 0, S = this.o.length / 2; D < S;) {
                        if (Math.abs(u[4 * D] - u[4 * P + 2 * D]) > .01) return !1;
                        D += 1
                    }
                    return !0
                }, GradientProperty.prototype.checkCollapsable = function() {
                    if (this.o.length / 2 != this.c.length / 4) return !1;
                    if (this.data.k.k[0].s)
                        for (var u = 0, P = this.data.k.k.length; u < P;) {
                            if (!this.comparePoints(this.data.k.k[u].s, this.data.p)) return !1;
                            u += 1
                        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                    return !0
                }, GradientProperty.prototype.getValue = function(u) {
                    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || u) {
                        var P, D, S, E = 4 * this.data.p;
                        for (P = 0; P < E; P += 1) D = P % 4 == 0 ? 100 : 255, S = Math.round(this.prop.v[P] * D), this.c[P] !== S && (this.c[P] = S, this._cmdf = !u);
                        if (this.o.length)
                            for (E = this.prop.v.length, P = 4 * this.data.p; P < E; P += 1) D = P % 2 == 0 ? 100 : 1, S = P % 2 == 0 ? Math.round(100 * this.prop.v[P]) : this.prop.v[P], this.o[P - 4 * this.data.p] !== S && (this.o[P - 4 * this.data.p] = S, this._omdf = !u);
                        this._mdf = !u
                    }
                }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(u, P, D) {
                    this.o = PropertyFactory.getProp(u, P.o, 0, .01, this), this.s = PropertyFactory.getProp(u, P.s, 1, null, this), this.e = PropertyFactory.getProp(u, P.e, 1, null, this), this.h = PropertyFactory.getProp(u, P.h || {
                        k: 0
                    }, 0, .01, this), this.a = PropertyFactory.getProp(u, P.a || {
                        k: 0
                    }, 0, degToRads, this), this.g = new GradientProperty(u, P.g, this), this.style = D, this.stops = [], this.setGradientData(D.pElem, P), this.setGradientOpacity(P, D), this._isAnimated = !!this._isAnimated
                }, SVGGradientFillStyleData.prototype.setGradientData = function(u, P) {
                    var D, S, E, T = createElementID(),
                        M = createNS(1 === P.t ? "linearGradient" : "radialGradient");
                    M.setAttribute("id", T), M.setAttribute("spreadMethod", "pad"), M.setAttribute("gradientUnits", "userSpaceOnUse");
                    var F = [];
                    for (S = 0, E = 4 * P.g.p; S < E; S += 4) D = createNS("stop"), M.appendChild(D), F.push(D);
                    u.setAttribute("gf" === P.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + T + ")"), this.gf = M, this.cst = F
                }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(u, P) {
                    if (this.g._hasOpacity && !this.g._collapsable) {
                        var D, S, E, T = createNS("mask"),
                            M = createNS("path");
                        T.appendChild(M);
                        var F = createElementID(),
                            I = createElementID();
                        T.setAttribute("id", I);
                        var L = createNS(1 === u.t ? "linearGradient" : "radialGradient");
                        L.setAttribute("id", F), L.setAttribute("spreadMethod", "pad"), L.setAttribute("gradientUnits", "userSpaceOnUse"), E = u.g.k.k[0].s ? u.g.k.k[0].s.length : u.g.k.k.length;
                        var V = this.stops;
                        for (S = 4 * u.g.p; S < E; S += 2)(D = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), L.appendChild(D), V.push(D);
                        M.setAttribute("gf" === u.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + F + ")"), "gs" === u.ty && (M.setAttribute("stroke-linecap", lineCapEnum[u.lc || 2]), M.setAttribute("stroke-linejoin", lineJoinEnum[u.lj || 2]), 1 === u.lj && M.setAttribute("stroke-miterlimit", u.ml)), this.of = L, this.ms = T, this.ost = V, this.maskId = I, P.msElem = M
                    }
                }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                var buildShapeString = function(u, P, D, S) {
                        if (0 === P) return "";
                        var E, T = u.o,
                            M = u.i,
                            F = u.v,
                            I = " M" + S.applyToPointStringified(F[0][0], F[0][1]);
                        for (E = 1; E < P; E += 1) I += " C" + S.applyToPointStringified(T[E - 1][0], T[E - 1][1]) + " " + S.applyToPointStringified(M[E][0], M[E][1]) + " " + S.applyToPointStringified(F[E][0], F[E][1]);
                        return D && P && (I += " C" + S.applyToPointStringified(T[E - 1][0], T[E - 1][1]) + " " + S.applyToPointStringified(M[0][0], M[0][1]) + " " + S.applyToPointStringified(F[0][0], F[0][1]) + "z"), I
                    },
                    SVGElementsRenderer = function() {
                        var u = new Matrix,
                            P = new Matrix;

                        function D(u, P, D) {
                            (D || P.transform.op._mdf) && P.transform.container.setAttribute("opacity", P.transform.op.v), (D || P.transform.mProps._mdf) && P.transform.container.setAttribute("transform", P.transform.mProps.v.to2dCSS())
                        }

                        function S() {}

                        function E(D, S, E) {
                            var T, M, F, I, L, V, R, O, N, G, W, Y = S.styles.length,
                                H = S.lvl;
                            for (V = 0; V < Y; V += 1) {
                                if (I = S.sh._mdf || E, S.styles[V].lvl < H) {
                                    for (O = P.reset(), G = H - S.styles[V].lvl, W = S.transformers.length - 1; !I && G > 0;) I = S.transformers[W].mProps._mdf || I, G -= 1, W -= 1;
                                    if (I)
                                        for (G = H - S.styles[V].lvl, W = S.transformers.length - 1; G > 0;) N = S.transformers[W].mProps.v.props, O.transform(N[0], N[1], N[2], N[3], N[4], N[5], N[6], N[7], N[8], N[9], N[10], N[11], N[12], N[13], N[14], N[15]), G -= 1, W -= 1
                                } else O = u;
                                if (M = (R = S.sh.paths)._length, I) {
                                    for (T = 0, F = ""; T < M; T += 1)(L = R.shapes[T]) && L._length && (F += buildShapeString(L, L._length, L.c, O));
                                    S.caches[V] = F
                                } else F = S.caches[V];
                                S.styles[V].d += !0 === D.hd ? "" : F, S.styles[V]._mdf = I || S.styles[V]._mdf
                            }
                        }

                        function T(u, P, D) {
                            var S = P.style;
                            (P.c._mdf || D) && S.pElem.setAttribute("fill", "rgb(" + bmFloor(P.c.v[0]) + "," + bmFloor(P.c.v[1]) + "," + bmFloor(P.c.v[2]) + ")"), (P.o._mdf || D) && S.pElem.setAttribute("fill-opacity", P.o.v)
                        }

                        function M(u, P, D) {
                            F(u, P, D), I(u, P, D)
                        }

                        function F(u, P, D) {
                            var S, E, T, M, F, I = P.gf,
                                L = P.g._hasOpacity,
                                V = P.s.v,
                                R = P.e.v;
                            if (P.o._mdf || D) {
                                var O = "gf" === u.ty ? "fill-opacity" : "stroke-opacity";
                                P.style.pElem.setAttribute(O, P.o.v)
                            }
                            if (P.s._mdf || D) {
                                var N = 1 === u.t ? "x1" : "cx",
                                    G = "x1" === N ? "y1" : "cy";
                                I.setAttribute(N, V[0]), I.setAttribute(G, V[1]), L && !P.g._collapsable && (P.of.setAttribute(N, V[0]), P.of.setAttribute(G, V[1]))
                            }
                            if (P.g._cmdf || D) {
                                S = P.cst;
                                var W = P.g.c;
                                for (E = 0, T = S.length; E < T; E += 1)(M = S[E]).setAttribute("offset", W[4 * E] + "%"), M.setAttribute("stop-color", "rgb(" + W[4 * E + 1] + "," + W[4 * E + 2] + "," + W[4 * E + 3] + ")")
                            }
                            if (L && (P.g._omdf || D)) {
                                var Y = P.g.o;
                                for (E = 0, T = (S = P.g._collapsable ? P.cst : P.ost).length; E < T; E += 1) M = S[E], P.g._collapsable || M.setAttribute("offset", Y[2 * E] + "%"), M.setAttribute("stop-opacity", Y[2 * E + 1])
                            }
                            if (1 === u.t)(P.e._mdf || D) && (I.setAttribute("x2", R[0]), I.setAttribute("y2", R[1]), L && !P.g._collapsable && (P.of.setAttribute("x2", R[0]), P.of.setAttribute("y2", R[1])));
                            else if ((P.s._mdf || P.e._mdf || D) && (F = Math.sqrt(Math.pow(V[0] - R[0], 2) + Math.pow(V[1] - R[1], 2)), I.setAttribute("r", F), L && !P.g._collapsable && P.of.setAttribute("r", F)), P.e._mdf || P.h._mdf || P.a._mdf || D) {
                                F || (F = Math.sqrt(Math.pow(V[0] - R[0], 2) + Math.pow(V[1] - R[1], 2)));
                                var H = Math.atan2(R[1] - V[1], R[0] - V[0]),
                                    X = P.h.v;
                                X >= 1 ? X = .99 : X <= -1 && (X = -.99);
                                var K = F * X,
                                    J = Math.cos(H + P.a.v) * K + V[0],
                                    Z = Math.sin(H + P.a.v) * K + V[1];
                                I.setAttribute("fx", J), I.setAttribute("fy", Z), L && !P.g._collapsable && (P.of.setAttribute("fx", J), P.of.setAttribute("fy", Z))
                            }
                        }

                        function I(u, P, D) {
                            var S = P.style,
                                E = P.d;
                            E && (E._mdf || D) && E.dashStr && (S.pElem.setAttribute("stroke-dasharray", E.dashStr), S.pElem.setAttribute("stroke-dashoffset", E.dashoffset[0])), P.c && (P.c._mdf || D) && S.pElem.setAttribute("stroke", "rgb(" + bmFloor(P.c.v[0]) + "," + bmFloor(P.c.v[1]) + "," + bmFloor(P.c.v[2]) + ")"), (P.o._mdf || D) && S.pElem.setAttribute("stroke-opacity", P.o.v), (P.w._mdf || D) && (S.pElem.setAttribute("stroke-width", P.w.v), S.msElem && S.msElem.setAttribute("stroke-width", P.w.v))
                        }
                        return {
                            createRenderFunction: function(u) {
                                switch (u.ty) {
                                    case "fl":
                                        return T;
                                    case "gf":
                                        return F;
                                    case "gs":
                                        return M;
                                    case "st":
                                        return I;
                                    case "sh":
                                    case "el":
                                    case "rc":
                                    case "sr":
                                        return E;
                                    case "tr":
                                        return D;
                                    case "no":
                                        return S;
                                    default:
                                        return null
                                }
                            }
                        }
                    }();

                function SVGShapeElement(u, P, D) {
                    this.shapes = [], this.shapesData = u.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(u, P, D), this.prevViewData = []
                }

                function LetterProps(u, P, D, S, E, T) {
                    this.o = u, this.sw = P, this.sc = D, this.fc = S, this.m = E, this.p = T, this._mdf = {
                        o: !0,
                        sw: !!P,
                        sc: !!D,
                        fc: !!S,
                        m: !0,
                        p: !0
                    }
                }

                function TextProperty(u, P) {
                    this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, P.d && P.d.sid && (P.d = u.globalData.slotManager.getProp(P.d)), this.data = P, this.elem = u, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                        ascent: 0,
                        boxWidth: this.defaultBoxWidth,
                        f: "",
                        fStyle: "",
                        fWeight: "",
                        fc: "",
                        j: "",
                        justifyOffset: "",
                        l: [],
                        lh: 0,
                        lineWidths: [],
                        ls: "",
                        of: "",
                        s: "",
                        sc: "",
                        sw: 0,
                        t: 0,
                        tr: 0,
                        sz: 0,
                        ps: null,
                        fillColorAnim: !1,
                        strokeColorAnim: !1,
                        strokeWidthAnim: !1,
                        yOffset: 0,
                        finalSize: 0,
                        finalText: [],
                        finalLineHeight: 0,
                        __complete: !1
                    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                }
                extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                    var u, P, D, S, E = this.shapes.length,
                        T = this.stylesList.length,
                        M = [],
                        F = !1;
                    for (D = 0; D < T; D += 1) {
                        for (u = 0, S = this.stylesList[D], F = !1, M.length = 0; u < E; u += 1) - 1 !== (P = this.shapes[u]).styles.indexOf(S) && (M.push(P), F = P._isAnimated || F);
                        M.length > 1 && F && this.setShapesAsAnimated(M)
                    }
                }, SVGShapeElement.prototype.setShapesAsAnimated = function(u) {
                    var P, D = u.length;
                    for (P = 0; P < D; P += 1) u[P].setAsAnimated()
                }, SVGShapeElement.prototype.createStyleElement = function(u, P) {
                    var D, S = new SVGStyleData(u, P),
                        E = S.pElem;
                    return "st" === u.ty ? D = new SVGStrokeStyleData(this, u, S) : "fl" === u.ty ? D = new SVGFillStyleData(this, u, S) : "gf" === u.ty || "gs" === u.ty ? (D = new("gf" === u.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, u, S), this.globalData.defs.appendChild(D.gf), D.maskId && (this.globalData.defs.appendChild(D.ms), this.globalData.defs.appendChild(D.of), E.setAttribute("mask", "url(" + getLocationHref() + "#" + D.maskId + ")"))) : "no" === u.ty && (D = new SVGNoStyleData(this, u, S)), ("st" === u.ty || "gs" === u.ty) && (E.setAttribute("stroke-linecap", lineCapEnum[u.lc || 2]), E.setAttribute("stroke-linejoin", lineJoinEnum[u.lj || 2]), E.setAttribute("fill-opacity", "0"), 1 === u.lj && E.setAttribute("stroke-miterlimit", u.ml)), 2 === u.r && E.setAttribute("fill-rule", "evenodd"), u.ln && E.setAttribute("id", u.ln), u.cl && E.setAttribute("class", u.cl), u.bm && (E.style["mix-blend-mode"] = getBlendMode(u.bm)), this.stylesList.push(S), this.addToAnimatedContents(u, D), D
                }, SVGShapeElement.prototype.createGroupElement = function(u) {
                    var P = new ShapeGroupData;
                    return u.ln && P.gr.setAttribute("id", u.ln), u.cl && P.gr.setAttribute("class", u.cl), u.bm && (P.gr.style["mix-blend-mode"] = getBlendMode(u.bm)), P
                }, SVGShapeElement.prototype.createTransformElement = function(u, P) {
                    var D = TransformPropertyFactory.getTransformProperty(this, u, this),
                        S = new SVGTransformData(D, D.o, P);
                    return this.addToAnimatedContents(u, S), S
                }, SVGShapeElement.prototype.createShapeElement = function(u, P, D) {
                    var S = 4;
                    "rc" === u.ty ? S = 5 : "el" === u.ty ? S = 6 : "sr" === u.ty && (S = 7);
                    var E = ShapePropertyFactory.getShapeProp(this, u, S, this),
                        T = new SVGShapeData(P, D, E);
                    return this.shapes.push(T), this.addShapeToModifiers(T), this.addToAnimatedContents(u, T), T
                }, SVGShapeElement.prototype.addToAnimatedContents = function(u, P) {
                    for (var D = 0, S = this.animatedContents.length; D < S;) {
                        if (this.animatedContents[D].element === P) return;
                        D += 1
                    }
                    this.animatedContents.push({
                        fn: SVGElementsRenderer.createRenderFunction(u),
                        element: P,
                        data: u
                    })
                }, SVGShapeElement.prototype.setElementStyles = function(u) {
                    var P, D = u.styles,
                        S = this.stylesList.length;
                    for (P = 0; P < S; P += 1) this.stylesList[P].closed || D.push(this.stylesList[P])
                }, SVGShapeElement.prototype.reloadShapes = function() {
                    this._isFirstFrame = !0;
                    var u, P = this.itemsData.length;
                    for (u = 0; u < P; u += 1) this.prevViewData[u] = this.itemsData[u];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), P = this.dynamicProperties.length, u = 0; u < P; u += 1) this.dynamicProperties[u].getValue();
                    this.renderModifiers()
                }, SVGShapeElement.prototype.searchShapes = function(u, P, D, S, E, T, M) {
                    var F, I, L, V, R, O, N = [].concat(T),
                        G = u.length - 1,
                        W = [],
                        Y = [];
                    for (F = G; F >= 0; F -= 1) {
                        if ((O = this.searchProcessedElement(u[F])) ? P[F] = D[O - 1] : u[F]._render = M, "fl" === u[F].ty || "st" === u[F].ty || "gf" === u[F].ty || "gs" === u[F].ty || "no" === u[F].ty) O ? P[F].style.closed = !1 : P[F] = this.createStyleElement(u[F], E), u[F]._render && P[F].style.pElem.parentNode !== S && S.appendChild(P[F].style.pElem), W.push(P[F].style);
                        else if ("gr" === u[F].ty) {
                            if (O)
                                for (I = 0, L = P[F].it.length; I < L; I += 1) P[F].prevViewData[I] = P[F].it[I];
                            else P[F] = this.createGroupElement(u[F]);
                            this.searchShapes(u[F].it, P[F].it, P[F].prevViewData, P[F].gr, E + 1, N, M), u[F]._render && P[F].gr.parentNode !== S && S.appendChild(P[F].gr)
                        } else "tr" === u[F].ty ? (O || (P[F] = this.createTransformElement(u[F], S)), V = P[F].transform, N.push(V)) : "sh" === u[F].ty || "rc" === u[F].ty || "el" === u[F].ty || "sr" === u[F].ty ? (O || (P[F] = this.createShapeElement(u[F], N, E)), this.setElementStyles(P[F])) : "tm" === u[F].ty || "rd" === u[F].ty || "ms" === u[F].ty || "pb" === u[F].ty || "zz" === u[F].ty || "op" === u[F].ty ? (O ? (R = P[F]).closed = !1 : ((R = ShapeModifiers.getModifier(u[F].ty)).init(this, u[F]), P[F] = R, this.shapeModifiers.push(R)), Y.push(R)) : "rp" === u[F].ty && (O ? (R = P[F]).closed = !0 : (R = ShapeModifiers.getModifier(u[F].ty), P[F] = R, R.init(this, u, F, P), this.shapeModifiers.push(R), M = !1), Y.push(R));
                        this.addProcessedElement(u[F], F + 1)
                    }
                    for (F = 0, G = W.length; F < G; F += 1) W[F].closed = !0;
                    for (F = 0, G = Y.length; F < G; F += 1) Y[F].closed = !0
                }, SVGShapeElement.prototype.renderInnerContent = function() {
                    this.renderModifiers();
                    var u, P = this.stylesList.length;
                    for (u = 0; u < P; u += 1) this.stylesList[u].reset();
                    for (this.renderShape(), u = 0; u < P; u += 1)(this.stylesList[u]._mdf || this._isFirstFrame) && (this.stylesList[u].msElem && (this.stylesList[u].msElem.setAttribute("d", this.stylesList[u].d), this.stylesList[u].d = "M0 0" + this.stylesList[u].d), this.stylesList[u].pElem.setAttribute("d", this.stylesList[u].d || "M0 0"))
                }, SVGShapeElement.prototype.renderShape = function() {
                    var u, P, D = this.animatedContents.length;
                    for (u = 0; u < D; u += 1) P = this.animatedContents[u], (this._isFirstFrame || P.element._isAnimated) && !0 !== P.data && P.fn(P.data, P.element, this._isFirstFrame)
                }, SVGShapeElement.prototype.destroy = function() {
                    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                }, LetterProps.prototype.update = function(u, P, D, S, E, T) {
                    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                    var M = !1;
                    return this.o !== u && (this.o = u, this._mdf.o = !0, M = !0), this.sw !== P && (this.sw = P, this._mdf.sw = !0, M = !0), this.sc !== D && (this.sc = D, this._mdf.sc = !0, M = !0), this.fc !== S && (this.fc = S, this._mdf.fc = !0, M = !0), this.m !== E && (this.m = E, this._mdf.m = !0, M = !0), T.length && (this.p[0] !== T[0] || this.p[1] !== T[1] || this.p[4] !== T[4] || this.p[5] !== T[5] || this.p[12] !== T[12] || this.p[13] !== T[13]) && (this.p = T, this._mdf.p = !0, M = !0), M
                }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(u, P) {
                    for (var D in P) Object.prototype.hasOwnProperty.call(P, D) && (u[D] = P[D]);
                    return u
                }, TextProperty.prototype.setCurrentData = function(u) {
                    u.__complete || this.completeTextData(u), this.currentData = u, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                }, TextProperty.prototype.searchProperty = function() {
                    return this.searchKeyframes()
                }, TextProperty.prototype.searchKeyframes = function() {
                    return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                }, TextProperty.prototype.addEffect = function(u) {
                    this.effectsSequence.push(u), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.getValue = function(u) {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || u) {
                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                        var P, D = this.currentData,
                            S = this.keysIndex;
                        if (this.lock) {
                            this.setCurrentData(this.currentData);
                            return
                        }
                        this.lock = !0, this._mdf = !1;
                        var E = this.effectsSequence.length,
                            T = u || this.data.d.k[this.keysIndex].s;
                        for (P = 0; P < E; P += 1) T = S !== this.keysIndex ? this.effectsSequence[P](T, T.t) : this.effectsSequence[P](this.currentData, T.t);
                        D !== T && this.setCurrentData(T), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
                }, TextProperty.prototype.getKeyframeValue = function() {
                    for (var u = this.data.d.k, P = this.elem.comp.renderedFrame, D = 0, S = u.length; D <= S - 1 && D !== S - 1 && !(u[D + 1].t > P);) D += 1;
                    return this.keysIndex !== D && (this.keysIndex = D), this.data.d.k[this.keysIndex].s
                }, TextProperty.prototype.buildFinalText = function(u) {
                    for (var P, D, S = [], E = 0, T = u.length, M = !1; E < T;) P = u.charCodeAt(E), FontManager.isCombinedCharacter(P) ? S[S.length - 1] += u.charAt(E) : P >= 55296 && P <= 56319 ? (D = u.charCodeAt(E + 1)) >= 56320 && D <= 57343 ? (M || FontManager.isModifier(P, D) ? (S[S.length - 1] += u.substr(E, 2), M = !1) : S.push(u.substr(E, 2)), E += 1) : S.push(u.charAt(E)) : P > 56319 ? (D = u.charCodeAt(E + 1), FontManager.isZeroWidthJoiner(P, D) ? (M = !0, S[S.length - 1] += u.substr(E, 2), E += 1) : S.push(u.charAt(E))) : FontManager.isZeroWidthJoiner(P) ? (S[S.length - 1] += u.charAt(E), M = !0) : S.push(u.charAt(E)), E += 1;
                    return S
                }, TextProperty.prototype.completeTextData = function(u) {
                    u.__complete = !0;
                    var P = this.elem.globalData.fontManager,
                        D = this.data,
                        S = [],
                        E = 0,
                        T = D.m.g,
                        M = 0,
                        F = 0,
                        I = 0,
                        L = [],
                        V = 0,
                        R = 0,
                        O = P.getFontByName(u.f),
                        N = 0,
                        G = getFontProperties(O);
                    u.fWeight = G.weight, u.fStyle = G.style, u.finalSize = u.s, u.finalText = this.buildFinalText(u.t), H = u.finalText.length, u.finalLineHeight = u.lh;
                    var W = u.tr / 1e3 * u.finalSize;
                    if (u.sz)
                        for (var Y, H, X, K, J, Z, U, Q, $, tt, te = !0, ts = u.sz[0], tr = u.sz[1]; te;) {
                            tt = this.buildFinalText(u.t), $ = 0, V = 0, H = tt.length, W = u.tr / 1e3 * u.finalSize;
                            var ta = -1;
                            for (Y = 0; Y < H; Y += 1) Q = tt[Y].charCodeAt(0), X = !1, " " === tt[Y] ? ta = Y : (13 === Q || 3 === Q) && (V = 0, X = !0, $ += u.finalLineHeight || 1.2 * u.finalSize), P.chars ? (U = P.getCharData(tt[Y], O.fStyle, O.fFamily), N = X ? 0 : U.w * u.finalSize / 100) : N = P.measureText(tt[Y], u.f, u.finalSize), V + N > ts && " " !== tt[Y] ? (-1 === ta ? H += 1 : Y = ta, $ += u.finalLineHeight || 1.2 * u.finalSize, tt.splice(Y, ta === Y ? 1 : 0, "\r"), ta = -1, V = 0) : V += N + W;
                            $ += O.ascent * u.finalSize / 100, this.canResize && u.finalSize > this.minimumFontSize && tr < $ ? (u.finalSize -= 1, u.finalLineHeight = u.finalSize * u.lh / u.s) : (u.finalText = tt, H = u.finalText.length, te = !1)
                        }
                    V = -W, N = 0;
                    var tn = 0;
                    for (Y = 0; Y < H; Y += 1)
                        if (X = !1, 13 === (Q = (tp = u.finalText[Y]).charCodeAt(0)) || 3 === Q ? (tn = 0, L.push(V), R = V > R ? V : R, V = -2 * W, K = "", X = !0, I += 1) : K = tp, P.chars ? (U = P.getCharData(tp, O.fStyle, P.getFontByName(u.f).fFamily), N = X ? 0 : U.w * u.finalSize / 100) : N = P.measureText(K, u.f, u.finalSize), " " === tp ? tn += N + W : (V += N + W + tn, tn = 0), S.push({
                                l: N,
                                an: N,
                                add: M,
                                n: X,
                                anIndexes: [],
                                val: K,
                                line: I,
                                animatorJustifyOffset: 0
                            }), 2 == T) {
                            if (M += N, "" === K || " " === K || Y === H - 1) {
                                for (("" === K || " " === K) && (M -= N); F <= Y;) S[F].an = M, S[F].ind = E, S[F].extra = N, F += 1;
                                E += 1, M = 0
                            }
                        } else if (3 == T) {
                        if (M += N, "" === K || Y === H - 1) {
                            for ("" === K && (M -= N); F <= Y;) S[F].an = M, S[F].ind = E, S[F].extra = N, F += 1;
                            M = 0, E += 1
                        }
                    } else S[E].ind = E, S[E].extra = 0, E += 1;
                    if (u.l = S, R = V > R ? V : R, L.push(V), u.sz) u.boxWidth = u.sz[0], u.justifyOffset = 0;
                    else switch (u.boxWidth = R, u.j) {
                        case 1:
                            u.justifyOffset = -u.boxWidth;
                            break;
                        case 2:
                            u.justifyOffset = -u.boxWidth / 2;
                            break;
                        default:
                            u.justifyOffset = 0
                    }
                    u.lineWidths = L;
                    var th = D.a;
                    Z = th.length;
                    var tl = [];
                    for (J = 0; J < Z; J += 1) {
                        for ((tf = th[J]).a.sc && (u.strokeColorAnim = !0), tf.a.sw && (u.strokeWidthAnim = !0), (tf.a.fc || tf.a.fh || tf.a.fs || tf.a.fb) && (u.fillColorAnim = !0), tu = 0, tc = tf.s.b, Y = 0; Y < H; Y += 1)(tm = S[Y]).anIndexes[J] = tu, (1 == tc && "" !== tm.val || 2 == tc && "" !== tm.val && " " !== tm.val || 3 == tc && (tm.n || " " == tm.val || Y == H - 1) || 4 == tc && (tm.n || Y == H - 1)) && (1 === tf.s.rn && tl.push(tu), tu += 1);
                        D.a[J].s.totalChars = tu;
                        var tp, tf, tm, tc, tu, td, tg = -1;
                        if (1 === tf.s.rn)
                            for (Y = 0; Y < H; Y += 1) tg != (tm = S[Y]).anIndexes[J] && (tg = tm.anIndexes[J], td = tl.splice(Math.floor(Math.random() * tl.length), 1)[0]), tm.anIndexes[J] = td
                    }
                    u.yOffset = u.finalLineHeight || 1.2 * u.finalSize, u.ls = u.ls || 0, u.ascent = O.ascent * u.finalSize / 100
                }, TextProperty.prototype.updateDocumentData = function(u, P) {
                    P = void 0 === P ? this.keysIndex : P;
                    var D = this.copyData({}, this.data.d.k[P].s);
                    D = this.copyData(D, u), this.data.d.k[P].s = D, this.recalculate(P), this.setCurrentData(D), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.recalculate = function(u) {
                    var P = this.data.d.k[u].s;
                    P.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(P)
                }, TextProperty.prototype.canResizeFont = function(u) {
                    this.canResize = u, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.setMinimumFontSize = function(u) {
                    this.minimumFontSize = Math.floor(u) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                };
                var TextSelectorProp = function() {
                    var u = Math.max,
                        P = Math.min,
                        D = Math.floor;

                    function S(u, P) {
                        this._currentTextLength = -1, this.k = !1, this.data = P, this.elem = u, this.comp = u.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(u), this.s = PropertyFactory.getProp(u, P.s || {
                            k: 0
                        }, 0, 0, this), "e" in P ? this.e = PropertyFactory.getProp(u, P.e, 0, 0, this) : this.e = {
                            v: 100
                        }, this.o = PropertyFactory.getProp(u, P.o || {
                            k: 0
                        }, 0, 0, this), this.xe = PropertyFactory.getProp(u, P.xe || {
                            k: 0
                        }, 0, 0, this), this.ne = PropertyFactory.getProp(u, P.ne || {
                            k: 0
                        }, 0, 0, this), this.sm = PropertyFactory.getProp(u, P.sm || {
                            k: 100
                        }, 0, 0, this), this.a = PropertyFactory.getProp(u, P.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                    }
                    return S.prototype = {
                        getMult: function(S) {
                            this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                            var E = 0,
                                T = 0,
                                M = 1,
                                F = 1;
                            this.ne.v > 0 ? E = this.ne.v / 100 : T = -this.ne.v / 100, this.xe.v > 0 ? M = 1 - this.xe.v / 100 : F = 1 + this.xe.v / 100;
                            var I = BezierFactory.getBezierEasing(E, T, M, F).get,
                                L = 0,
                                V = this.finalS,
                                R = this.finalE,
                                O = this.data.sh;
                            if (2 === O) L = I(L = R === V ? S >= R ? 1 : 0 : u(0, P(.5 / (R - V) + (S - V) / (R - V), 1)));
                            else if (3 === O) L = I(L = R === V ? S >= R ? 0 : 1 : 1 - u(0, P(.5 / (R - V) + (S - V) / (R - V), 1)));
                            else if (4 === O) R === V ? L = 0 : (L = u(0, P(.5 / (R - V) + (S - V) / (R - V), 1))) < .5 ? L *= 2 : L = 1 - 2 * (L - .5), L = I(L);
                            else if (5 === O) {
                                if (R === V) L = 0;
                                else {
                                    var N = R - V,
                                        G = -N / 2 + (S = P(u(0, S + .5 - V), R - V)),
                                        W = N / 2;
                                    L = Math.sqrt(1 - G * G / (W * W))
                                }
                                L = I(L)
                            } else 6 === O ? L = I(L = R === V ? 0 : (1 + Math.cos(Math.PI + 2 * Math.PI * (S = P(u(0, S + .5 - V), R - V)) / (R - V))) / 2) : (S >= D(V) && (L = S - V < 0 ? u(0, P(P(R, 1) - (V - S), 1)) : u(0, P(R - S, 1))), L = I(L));
                            if (100 !== this.sm.v) {
                                var Y = .01 * this.sm.v;
                                0 === Y && (Y = 1e-8);
                                var H = .5 - .5 * Y;
                                L < H ? L = 0 : (L = (L - H) / Y) > 1 && (L = 1)
                            }
                            return L * this.a.v
                        },
                        getValue: function(u) {
                            this.iterateDynamicProperties(), this._mdf = u || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, u && 2 === this.data.r && (this.e.v = this._currentTextLength);
                            var P = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                D = this.o.v / P,
                                S = this.s.v / P + D,
                                E = this.e.v / P + D;
                            if (S > E) {
                                var T = S;
                                S = E, E = T
                            }
                            this.finalS = S, this.finalE = E
                        }
                    }, extendPrototype([DynamicPropertyContainer], S), {
                        getTextSelectorProp: function(u, P, D) {
                            return new S(u, P, D)
                        }
                    }
                }();

                function TextAnimatorDataProperty(u, P, D) {
                    var S = {
                            propType: !1
                        },
                        E = PropertyFactory.getProp,
                        T = P.a;
                    this.a = {
                        r: T.r ? E(u, T.r, 0, degToRads, D) : S,
                        rx: T.rx ? E(u, T.rx, 0, degToRads, D) : S,
                        ry: T.ry ? E(u, T.ry, 0, degToRads, D) : S,
                        sk: T.sk ? E(u, T.sk, 0, degToRads, D) : S,
                        sa: T.sa ? E(u, T.sa, 0, degToRads, D) : S,
                        s: T.s ? E(u, T.s, 1, .01, D) : S,
                        a: T.a ? E(u, T.a, 1, 0, D) : S,
                        o: T.o ? E(u, T.o, 0, .01, D) : S,
                        p: T.p ? E(u, T.p, 1, 0, D) : S,
                        sw: T.sw ? E(u, T.sw, 0, 0, D) : S,
                        sc: T.sc ? E(u, T.sc, 1, 0, D) : S,
                        fc: T.fc ? E(u, T.fc, 1, 0, D) : S,
                        fh: T.fh ? E(u, T.fh, 0, 0, D) : S,
                        fs: T.fs ? E(u, T.fs, 0, .01, D) : S,
                        fb: T.fb ? E(u, T.fb, 0, .01, D) : S,
                        t: T.t ? E(u, T.t, 0, 0, D) : S
                    }, this.s = TextSelectorProp.getTextSelectorProp(u, P.s, D), this.s.t = P.s.t
                }

                function TextAnimatorProperty(u, P, D) {
                    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = u, this._renderType = P, this._elem = D, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                        alignment: {}
                    }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(D)
                }

                function ITextElement() {}
                TextAnimatorProperty.prototype.searchProperties = function() {
                    var u, P, D = this._textData.a.length,
                        S = PropertyFactory.getProp;
                    for (u = 0; u < D; u += 1) P = this._textData.a[u], this._animatorsData[u] = new TextAnimatorDataProperty(this._elem, P, this);
                    this._textData.p && "m" in this._textData.p ? (this._pathData = {
                        a: S(this._elem, this._textData.p.a, 0, 0, this),
                        f: S(this._elem, this._textData.p.f, 0, 0, this),
                        l: S(this._elem, this._textData.p.l, 0, 0, this),
                        r: S(this._elem, this._textData.p.r, 0, 0, this),
                        p: S(this._elem, this._textData.p.p, 0, 0, this),
                        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = S(this._elem, this._textData.m.a, 1, 0, this)
                }, TextAnimatorProperty.prototype.getMeasures = function(u, P) {
                    if (this.lettersChangedFlag = P, this._mdf || this._isFirstFrame || P || this._hasMaskedPath && this._pathData.m._mdf) {
                        this._isFirstFrame = !1;
                        var D, S, E, T, M, F, I, L, V, R, O, N, G, W, Y, H, X, K, J = this._moreOptions.alignment.v,
                            Z = this._animatorsData,
                            U = this._textData,
                            Q = this.mHelper,
                            $ = this._renderType,
                            tt = this.renderedLetters.length,
                            te = u.l;
                        if (this._hasMaskedPath) {
                            if (tC = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                var ts, tr, ta, tn, th, tl, tp, tf, tm, tc, tu, td, tg, tv, tb, t_, tk, tC, tA, tP = tC.v;
                                for (this._pathData.r.v && (tP = tP.reverse()), th = {
                                        tLength: 0,
                                        segments: []
                                    }, tn = tP._length - 1, t_ = 0, ta = 0; ta < tn; ta += 1) tA = bez.buildBezierData(tP.v[ta], tP.v[ta + 1], [tP.o[ta][0] - tP.v[ta][0], tP.o[ta][1] - tP.v[ta][1]], [tP.i[ta + 1][0] - tP.v[ta + 1][0], tP.i[ta + 1][1] - tP.v[ta + 1][1]]), th.tLength += tA.segmentLength, th.segments.push(tA), t_ += tA.segmentLength;
                                ta = tn, tC.v.c && (tA = bez.buildBezierData(tP.v[ta], tP.v[0], [tP.o[ta][0] - tP.v[ta][0], tP.o[ta][1] - tP.v[ta][1]], [tP.i[0][0] - tP.v[0][0], tP.i[0][1] - tP.v[0][1]]), th.tLength += tA.segmentLength, th.segments.push(tA), t_ += tA.segmentLength), this._pathData.pi = th
                            }
                            if (th = this._pathData.pi, tl = this._pathData.f.v, tu = 0, tc = 1, tf = 0, tm = !0, tv = th.segments, tl < 0 && tC.v.c)
                                for (th.tLength < Math.abs(tl) && (tl = -Math.abs(tl) % th.tLength), tu = tv.length - 1, tc = (tg = tv[tu].points).length - 1; tl < 0;) tl += tg[tc].partialLength, (tc -= 1) < 0 && (tu -= 1, tc = (tg = tv[tu].points).length - 1);
                            td = (tg = tv[tu].points)[tc - 1], tb = (tp = tg[tc]).partialLength
                        }
                        tn = te.length, ts = 0, tr = 0;
                        var tw = 1.2 * u.finalSize * .714,
                            tD = !0;
                        T = Z.length;
                        var tS = -1,
                            tE = tl,
                            tT = tu,
                            tM = tc,
                            tF = -1,
                            tI = "",
                            tL = this.defaultPropsArray;
                        if (2 === u.j || 1 === u.j) {
                            var tB = 0,
                                tV = 0,
                                tR = 2 === u.j ? -.5 : -1,
                                tO = 0,
                                tN = !0;
                            for (ta = 0; ta < tn; ta += 1)
                                if (te[ta].n) {
                                    for (tB && (tB += tV); tO < ta;) te[tO].animatorJustifyOffset = tB, tO += 1;
                                    tB = 0, tN = !0
                                } else {
                                    for (E = 0; E < T; E += 1)(D = Z[E].a).t.propType && (tN && 2 === u.j && (tV += D.t.v * tR), (F = (S = Z[E].s).getMult(te[ta].anIndexes[E], U.a[E].s.totalChars)).length ? tB += D.t.v * F[0] * tR : tB += D.t.v * F * tR);
                                    tN = !1
                                }
                            for (tB && (tB += tV); tO < ta;) te[tO].animatorJustifyOffset = tB, tO += 1
                        }
                        for (ta = 0; ta < tn; ta += 1) {
                            if (Q.reset(), R = 1, te[ta].n) ts = 0, tr += u.yOffset + (tD ? 1 : 0), tl = tE, tD = !1, this._hasMaskedPath && (tu = tT, tc = tM, td = (tg = tv[tu].points)[tc - 1], tb = (tp = tg[tc]).partialLength, tf = 0), tI = "", X = "", Y = "", K = "", tL = this.defaultPropsArray;
                            else {
                                if (this._hasMaskedPath) {
                                    if (tF !== te[ta].line) {
                                        switch (u.j) {
                                            case 1:
                                                tl += t_ - u.lineWidths[te[ta].line];
                                                break;
                                            case 2:
                                                tl += (t_ - u.lineWidths[te[ta].line]) / 2
                                        }
                                        tF = te[ta].line
                                    }
                                    tS !== te[ta].ind && (te[tS] && (tl += te[tS].extra), tl += te[ta].an / 2, tS = te[ta].ind), tl += J[0] * te[ta].an * .005;
                                    var tG = 0;
                                    for (E = 0; E < T; E += 1)(D = Z[E].a).p.propType && ((F = (S = Z[E].s).getMult(te[ta].anIndexes[E], U.a[E].s.totalChars)).length ? tG += D.p.v[0] * F[0] : tG += D.p.v[0] * F), D.a.propType && ((F = (S = Z[E].s).getMult(te[ta].anIndexes[E], U.a[E].s.totalChars)).length ? tG += D.a.v[0] * F[0] : tG += D.a.v[0] * F);
                                    for (tm = !0, this._pathData.a.v && (tl = .5 * te[0].an + (t_ - this._pathData.f.v - .5 * te[0].an - .5 * te[te.length - 1].an) * tS / (tn - 1) + this._pathData.f.v); tm;) tf + tb >= tl + tG || !tg ? (tk = (tl + tG - tf) / tp.partialLength, L = td.point[0] + (tp.point[0] - td.point[0]) * tk, V = td.point[1] + (tp.point[1] - td.point[1]) * tk, Q.translate(-J[0] * te[ta].an * .005, -(.01 * (J[1] * tw))), tm = !1) : tg && (tf += tp.partialLength, (tc += 1) >= tg.length && (tc = 0, tv[tu += 1] ? tg = tv[tu].points : tC.v.c ? (tc = 0, tg = tv[tu = 0].points) : (tf -= tp.partialLength, tg = null)), tg && (td = tp, tb = (tp = tg[tc]).partialLength));
                                    I = te[ta].an / 2 - te[ta].add, Q.translate(-I, 0, 0)
                                } else I = te[ta].an / 2 - te[ta].add, Q.translate(-I, 0, 0), Q.translate(-J[0] * te[ta].an * .005, -J[1] * tw * .01, 0);
                                for (E = 0; E < T; E += 1)(D = Z[E].a).t.propType && (F = (S = Z[E].s).getMult(te[ta].anIndexes[E], U.a[E].s.totalChars), (0 !== ts || 0 !== u.j) && (this._hasMaskedPath ? F.length ? tl += D.t.v * F[0] : tl += D.t.v * F : F.length ? ts += D.t.v * F[0] : ts += D.t.v * F));
                                for (u.strokeWidthAnim && (N = u.sw || 0), u.strokeColorAnim && (O = u.sc ? [u.sc[0], u.sc[1], u.sc[2]] : [0, 0, 0]), u.fillColorAnim && u.fc && (G = [u.fc[0], u.fc[1], u.fc[2]]), E = 0; E < T; E += 1)(D = Z[E].a).a.propType && ((F = (S = Z[E].s).getMult(te[ta].anIndexes[E], U.a[E].s.totalChars)).length ? Q.translate(-D.a.v[0] * F[0], -D.a.v[1] * F[1], D.a.v[2] * F[2]) : Q.translate(-D.a.v[0] * F, -D.a.v[1] * F, D.a.v[2] * F));
                                for (E = 0; E < T; E += 1)(D = Z[E].a).s.propType && ((F = (S = Z[E].s).getMult(te[ta].anIndexes[E], U.a[E].s.totalChars)).length ? Q.scale(1 + (D.s.v[0] - 1) * F[0], 1 + (D.s.v[1] - 1) * F[1], 1) : Q.scale(1 + (D.s.v[0] - 1) * F, 1 + (D.s.v[1] - 1) * F, 1));
                                for (E = 0; E < T; E += 1) {
                                    if (D = Z[E].a, F = (S = Z[E].s).getMult(te[ta].anIndexes[E], U.a[E].s.totalChars), D.sk.propType && (F.length ? Q.skewFromAxis(-D.sk.v * F[0], D.sa.v * F[1]) : Q.skewFromAxis(-D.sk.v * F, D.sa.v * F)), D.r.propType && (F.length ? Q.rotateZ(-D.r.v * F[2]) : Q.rotateZ(-D.r.v * F)), D.ry.propType && (F.length ? Q.rotateY(D.ry.v * F[1]) : Q.rotateY(D.ry.v * F)), D.rx.propType && (F.length ? Q.rotateX(D.rx.v * F[0]) : Q.rotateX(D.rx.v * F)), D.o.propType && (F.length ? R += (D.o.v * F[0] - R) * F[0] : R += (D.o.v * F - R) * F), u.strokeWidthAnim && D.sw.propType && (F.length ? N += D.sw.v * F[0] : N += D.sw.v * F), u.strokeColorAnim && D.sc.propType)
                                        for (W = 0; W < 3; W += 1) F.length ? O[W] += (D.sc.v[W] - O[W]) * F[0] : O[W] += (D.sc.v[W] - O[W]) * F;
                                    if (u.fillColorAnim && u.fc) {
                                        if (D.fc.propType)
                                            for (W = 0; W < 3; W += 1) F.length ? G[W] += (D.fc.v[W] - G[W]) * F[0] : G[W] += (D.fc.v[W] - G[W]) * F;
                                        D.fh.propType && (G = F.length ? addHueToRGB(G, D.fh.v * F[0]) : addHueToRGB(G, D.fh.v * F)), D.fs.propType && (G = F.length ? addSaturationToRGB(G, D.fs.v * F[0]) : addSaturationToRGB(G, D.fs.v * F)), D.fb.propType && (G = F.length ? addBrightnessToRGB(G, D.fb.v * F[0]) : addBrightnessToRGB(G, D.fb.v * F))
                                    }
                                }
                                for (E = 0; E < T; E += 1)(D = Z[E].a).p.propType && (F = (S = Z[E].s).getMult(te[ta].anIndexes[E], U.a[E].s.totalChars), this._hasMaskedPath ? F.length ? Q.translate(0, D.p.v[1] * F[0], -D.p.v[2] * F[1]) : Q.translate(0, D.p.v[1] * F, -D.p.v[2] * F) : F.length ? Q.translate(D.p.v[0] * F[0], D.p.v[1] * F[1], -D.p.v[2] * F[2]) : Q.translate(D.p.v[0] * F, D.p.v[1] * F, -D.p.v[2] * F));
                                if (u.strokeWidthAnim && (Y = N < 0 ? 0 : N), u.strokeColorAnim && (H = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"), u.fillColorAnim && u.fc && (X = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), this._hasMaskedPath) {
                                    if (Q.translate(0, -u.ls), Q.translate(0, J[1] * tw * .01 + tr, 0), this._pathData.p.v) {
                                        var tj = 180 * Math.atan((tp.point[1] - td.point[1]) / (tp.point[0] - td.point[0])) / Math.PI;
                                        tp.point[0] < td.point[0] && (tj += 180), Q.rotate(-tj * Math.PI / 180)
                                    }
                                    Q.translate(L, V, 0), tl -= J[0] * te[ta].an * .005, te[ta + 1] && tS !== te[ta + 1].ind && (tl += te[ta].an / 2 + .001 * u.tr * u.finalSize)
                                } else {
                                    switch (Q.translate(ts, tr, 0), u.ps && Q.translate(u.ps[0], u.ps[1] + u.ascent, 0), u.j) {
                                        case 1:
                                            Q.translate(te[ta].animatorJustifyOffset + u.justifyOffset + (u.boxWidth - u.lineWidths[te[ta].line]), 0, 0);
                                            break;
                                        case 2:
                                            Q.translate(te[ta].animatorJustifyOffset + u.justifyOffset + (u.boxWidth - u.lineWidths[te[ta].line]) / 2, 0, 0)
                                    }
                                    Q.translate(0, -u.ls), Q.translate(I, 0, 0), Q.translate(J[0] * te[ta].an * .005, J[1] * tw * .01, 0), ts += te[ta].l + .001 * u.tr * u.finalSize
                                }
                                "html" === $ ? tI = Q.toCSS() : "svg" === $ ? tI = Q.to2dCSS() : tL = [Q.props[0], Q.props[1], Q.props[2], Q.props[3], Q.props[4], Q.props[5], Q.props[6], Q.props[7], Q.props[8], Q.props[9], Q.props[10], Q.props[11], Q.props[12], Q.props[13], Q.props[14], Q.props[15]], K = R
                            }
                            tt <= ta ? (M = new LetterProps(K, Y, H, X, tI, tL), this.renderedLetters.push(M), tt += 1, this.lettersChangedFlag = !0) : (M = this.renderedLetters[ta], this.lettersChangedFlag = M.update(K, Y, H, X, tI, tL) || this.lettersChangedFlag)
                        }
                    }
                }, TextAnimatorProperty.prototype.getValue = function() {
                    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(u, P, D) {
                    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(u, P, D), this.textProperty = new TextProperty(this, u.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(u.t, this.renderType, this), this.initTransform(u, P, D), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                }, ITextElement.prototype.prepareFrame = function(u) {
                    this._mdf = !1, this.prepareRenderableFrame(u), this.prepareProperties(u, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                }, ITextElement.prototype.createPathShape = function(u, P) {
                    var D, S, E = P.length,
                        T = "";
                    for (D = 0; D < E; D += 1) "sh" === P[D].ty && (T += buildShapeString(S = P[D].ks.k, S.i.length, !0, u));
                    return T
                }, ITextElement.prototype.updateDocumentData = function(u, P) {
                    this.textProperty.updateDocumentData(u, P)
                }, ITextElement.prototype.canResizeFont = function(u) {
                    this.textProperty.canResizeFont(u)
                }, ITextElement.prototype.setMinimumFontSize = function(u) {
                    this.textProperty.setMinimumFontSize(u)
                }, ITextElement.prototype.applyTextPropertiesToMatrix = function(u, P, D, S, E) {
                    switch (u.ps && P.translate(u.ps[0], u.ps[1] + u.ascent, 0), P.translate(0, -u.ls, 0), u.j) {
                        case 1:
                            P.translate(u.justifyOffset + (u.boxWidth - u.lineWidths[D]), 0, 0);
                            break;
                        case 2:
                            P.translate(u.justifyOffset + (u.boxWidth - u.lineWidths[D]) / 2, 0, 0)
                    }
                    P.translate(S, E, 0)
                }, ITextElement.prototype.buildColor = function(u) {
                    return "rgb(" + Math.round(255 * u[0]) + "," + Math.round(255 * u[1]) + "," + Math.round(255 * u[2]) + ")"
                }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {};
                var emptyShapeData = {
                    shapes: []
                };

                function SVGTextLottieElement(u, P, D) {
                    this.textSpans = [], this.renderType = "svg", this.initElement(u, P, D)
                }

                function ISolidElement(u, P, D) {
                    this.initElement(u, P, D)
                }

                function NullElement(u, P, D) {
                    this.initFrame(), this.initBaseData(u, P, D), this.initFrame(), this.initTransform(u, P, D), this.initHierarchy()
                }

                function SVGRendererBase() {}

                function ICompElement() {}

                function SVGCompElement(u, P, D) {
                    this.layers = u.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(u, P, D), this.tm = u.tm ? PropertyFactory.getProp(this, u.tm, 0, P.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function SVGRenderer(u, P) {
                    this.animationItem = u, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                    var D = "";
                    if (P && P.title) {
                        var S = createNS("title"),
                            E = createElementID();
                        S.setAttribute("id", E), S.textContent = P.title, this.svgElement.appendChild(S), D += E
                    }
                    if (P && P.description) {
                        var T = createNS("desc"),
                            M = createElementID();
                        T.setAttribute("id", M), T.textContent = P.description, this.svgElement.appendChild(T), D += " " + M
                    }
                    D && this.svgElement.setAttribute("aria-labelledby", D);
                    var F = createNS("defs");
                    this.svgElement.appendChild(F);
                    var I = createNS("g");
                    this.svgElement.appendChild(I), this.layerElement = I, this.renderConfig = {
                        preserveAspectRatio: P && P.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: P && P.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: P && P.contentVisibility || "visible",
                        progressiveLoad: P && P.progressiveLoad || !1,
                        hideOnTransparent: !(P && !1 === P.hideOnTransparent),
                        viewBoxOnly: P && P.viewBoxOnly || !1,
                        viewBoxSize: P && P.viewBoxSize || !1,
                        className: P && P.className || "",
                        id: P && P.id || "",
                        focusable: P && P.focusable,
                        filterSize: {
                            width: P && P.filterSize && P.filterSize.width || "100%",
                            height: P && P.filterSize && P.filterSize.height || "100%",
                            x: P && P.filterSize && P.filterSize.x || "0%",
                            y: P && P.filterSize && P.filterSize.y || "0%"
                        },
                        width: P && P.width,
                        height: P && P.height,
                        runExpressions: !P || void 0 === P.runExpressions || P.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        defs: F,
                        renderConfig: this.renderConfig
                    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                }

                function CVContextData() {
                    this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
                    var u, P = 15;
                    for (u = 0, this.savedOp = createTypedArray("float32", P); u < P; u += 1) this.saved[u] = createTypedArray("float32", 16);
                    this._length = P
                }

                function ShapeTransformManager() {
                    this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                }
                extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                }, SVGTextLottieElement.prototype.buildTextContents = function(u) {
                    for (var P = 0, D = u.length, S = [], E = ""; P < D;) "\r" === u[P] || "\x03" === u[P] ? (S.push(E), E = "") : E += u[P], P += 1;
                    return S.push(E), S
                }, SVGTextLottieElement.prototype.buildShapeData = function(u, P) {
                    if (u.shapes && u.shapes.length) {
                        var D = u.shapes[0];
                        if (D.it) {
                            var S = D.it[D.it.length - 1];
                            S.s && (S.s.k[0] = P, S.s.k[1] = P)
                        }
                    }
                    return u
                }, SVGTextLottieElement.prototype.buildNewText = function() {
                    this.addDynamicProperty(this);
                    var u = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(u ? u.l.length : 0), u.fc ? this.layerElement.setAttribute("fill", this.buildColor(u.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), u.sc && (this.layerElement.setAttribute("stroke", this.buildColor(u.sc)), this.layerElement.setAttribute("stroke-width", u.sw)), this.layerElement.setAttribute("font-size", u.finalSize);
                    var P = this.globalData.fontManager.getFontByName(u.f);
                    if (P.fClass) this.layerElement.setAttribute("class", P.fClass);
                    else {
                        this.layerElement.setAttribute("font-family", P.fFamily);
                        var D = u.fWeight,
                            S = u.fStyle;
                        this.layerElement.setAttribute("font-style", S), this.layerElement.setAttribute("font-weight", D)
                    }
                    this.layerElement.setAttribute("aria-label", u.t);
                    var E = u.l || [],
                        T = !!this.globalData.fontManager.chars;
                    Y = E.length;
                    var M = this.mHelper,
                        F = "",
                        I = this.data.singleShape,
                        L = 0,
                        V = 0,
                        R = !0,
                        O = .001 * u.tr * u.finalSize;
                    if (!I || T || u.sz) {
                        var N = this.textSpans.length;
                        for (W = 0; W < Y; W += 1) {
                            if (this.textSpans[W] || (this.textSpans[W] = {
                                    span: null,
                                    childSpan: null,
                                    glyph: null
                                }), !T || !I || 0 === W) {
                                if (H = N > W ? this.textSpans[W].span : createNS(T ? "g" : "text"), N <= W) {
                                    if (H.setAttribute("stroke-linecap", "butt"), H.setAttribute("stroke-linejoin", "round"), H.setAttribute("stroke-miterlimit", "4"), this.textSpans[W].span = H, T) {
                                        var G = createNS("g");
                                        H.appendChild(G), this.textSpans[W].childSpan = G
                                    }
                                    this.textSpans[W].span = H, this.layerElement.appendChild(H)
                                }
                                H.style.display = "inherit"
                            }
                            if (M.reset(), I && (E[W].n && (L = -O, V += u.yOffset + (R ? 1 : 0), R = !1), this.applyTextPropertiesToMatrix(u, M, E[W].line, L, V), L += (E[W].l || 0) + O), T) {
                                if (1 === (X = this.globalData.fontManager.getCharData(u.finalText[W], P.fStyle, this.globalData.fontManager.getFontByName(u.f).fFamily)).t) K = new SVGCompElement(X.data, this.globalData, this);
                                else {
                                    var W, Y, H, X, K, J = emptyShapeData;
                                    X.data && X.data.shapes && (J = this.buildShapeData(X.data, u.finalSize)), K = new SVGShapeElement(J, this.globalData, this)
                                }
                                if (this.textSpans[W].glyph) {
                                    var Z = this.textSpans[W].glyph;
                                    this.textSpans[W].childSpan.removeChild(Z.layerElement), Z.destroy()
                                }
                                this.textSpans[W].glyph = K, K._debug = !0, K.prepareFrame(0), K.renderFrame(), this.textSpans[W].childSpan.appendChild(K.layerElement), 1 === X.t && this.textSpans[W].childSpan.setAttribute("transform", "scale(" + u.finalSize / 100 + "," + u.finalSize / 100 + ")")
                            } else I && H.setAttribute("transform", "translate(" + M.props[12] + "," + M.props[13] + ")"), H.textContent = E[W].val, H.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                        }
                        I && H && H.setAttribute("d", F)
                    } else {
                        var U = this.textContainer,
                            Q = "start";
                        switch (u.j) {
                            case 1:
                                Q = "end";
                                break;
                            case 2:
                                Q = "middle";
                                break;
                            default:
                                Q = "start"
                        }
                        U.setAttribute("text-anchor", Q), U.setAttribute("letter-spacing", O);
                        var $ = this.buildTextContents(u.finalText);
                        for (W = 0, Y = $.length, V = u.ps ? u.ps[1] + u.ascent : 0; W < Y; W += 1)(H = this.textSpans[W].span || createNS("tspan")).textContent = $[W], H.setAttribute("x", 0), H.setAttribute("y", V), H.style.display = "inherit", U.appendChild(H), this.textSpans[W] || (this.textSpans[W] = {
                            span: null,
                            glyph: null
                        }), this.textSpans[W].span = H, V += u.finalLineHeight;
                        this.layerElement.appendChild(U)
                    }
                    for (; W < this.textSpans.length;) this.textSpans[W].span.style.display = "none", W += 1;
                    this._sizeChanged = !0
                }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                        this._sizeChanged = !1;
                        var u = this.layerElement.getBBox();
                        this.bbox = {
                            top: u.y,
                            left: u.x,
                            width: u.width,
                            height: u.height
                        }
                    }
                    return this.bbox
                }, SVGTextLottieElement.prototype.getValue = function() {
                    var u, P, D = this.textSpans.length;
                    for (u = 0, this.renderedFrame = this.comp.renderedFrame; u < D; u += 1)(P = this.textSpans[u].glyph) && (P.prepareFrame(this.comp.renderedFrame - this.data.st), P._mdf && (this._mdf = !0))
                }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                    if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        this._sizeChanged = !0;
                        var u, P, D, S, E, T = this.textAnimator.renderedLetters,
                            M = this.textProperty.currentData.l;
                        for (u = 0, P = M.length; u < P; u += 1) !M[u].n && (D = T[u], S = this.textSpans[u].span, (E = this.textSpans[u].glyph) && E.renderFrame(), D._mdf.m && S.setAttribute("transform", D.m), D._mdf.o && S.setAttribute("opacity", D.o), D._mdf.sw && S.setAttribute("stroke-width", D.sw), D._mdf.sc && S.setAttribute("stroke", D.sc), D._mdf.fc && S.setAttribute("fill", D.fc))
                    }
                }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                    var u = createNS("rect");
                    u.setAttribute("width", this.data.sw), u.setAttribute("height", this.data.sh), u.setAttribute("fill", this.data.sc), this.layerElement.appendChild(u)
                }, NullElement.prototype.prepareFrame = function(u) {
                    this.prepareProperties(u, !0)
                }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                    return null
                }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(u) {
                    return new NullElement(u, this.globalData, this)
                }, SVGRendererBase.prototype.createShape = function(u) {
                    return new SVGShapeElement(u, this.globalData, this)
                }, SVGRendererBase.prototype.createText = function(u) {
                    return new SVGTextLottieElement(u, this.globalData, this)
                }, SVGRendererBase.prototype.createImage = function(u) {
                    return new IImageElement(u, this.globalData, this)
                }, SVGRendererBase.prototype.createSolid = function(u) {
                    return new ISolidElement(u, this.globalData, this)
                }, SVGRendererBase.prototype.configAnimation = function(u) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + u.w + " " + u.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", u.w), this.svgElement.setAttribute("height", u.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                    var P = this.globalData.defs;
                    this.setupGlobalData(u, P), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = u;
                    var D = createNS("clipPath"),
                        S = createNS("rect");
                    S.setAttribute("width", u.w), S.setAttribute("height", u.h), S.setAttribute("x", 0), S.setAttribute("y", 0);
                    var E = createElementID();
                    D.setAttribute("id", E), D.appendChild(S), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + E + ")"), P.appendChild(D), this.layers = u.layers, this.elements = createSizedArray(u.layers.length)
                }, SVGRendererBase.prototype.destroy = function() {
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                    var u, P = this.layers ? this.layers.length : 0;
                    for (u = 0; u < P; u += 1) this.elements[u] && this.elements[u].destroy && this.elements[u].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(u) {
                    var P = 0,
                        D = this.layers.length;
                    for (P = 0; P < D; P += 1)
                        if (this.layers[P].ind === u) return P;
                    return -1
                }, SVGRendererBase.prototype.buildItem = function(u) {
                    var P = this.elements;
                    if (!P[u] && 99 !== this.layers[u].ty) {
                        P[u] = !0;
                        var D = this.createItem(this.layers[u]);
                        if (P[u] = D, getExpressionsPlugin() && (0 === this.layers[u].ty && this.globalData.projectInterface.registerComposition(D), D.initExpressions()), this.appendElementInPos(D, u), this.layers[u].tt) {
                            var S = "tp" in this.layers[u] ? this.findIndexByInd(this.layers[u].tp) : u - 1;
                            if (-1 === S) return;
                            if (this.elements[S] && !0 !== this.elements[S]) {
                                var E = P[S].getMatte(this.layers[u].tt);
                                D.setMatte(E)
                            } else this.buildItem(S), this.addPendingElement(D)
                        }
                    }
                }, SVGRendererBase.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) {
                        var u = this.pendingElements.pop();
                        if (u.checkParenting(), u.data.tt)
                            for (var P = 0, D = this.elements.length; P < D;) {
                                if (this.elements[P] === u) {
                                    var S = "tp" in u.data ? this.findIndexByInd(u.data.tp) : P - 1,
                                        E = this.elements[S].getMatte(this.layers[P].tt);
                                    u.setMatte(E);
                                    break
                                }
                                P += 1
                            }
                    }
                }, SVGRendererBase.prototype.renderFrame = function(u) {
                    if (this.renderedFrame !== u && !this.destroyed) {
                        null === u ? u = this.renderedFrame : this.renderedFrame = u, this.globalData.frameNum = u, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = u, this.globalData._mdf = !1;
                        var P, D = this.layers.length;
                        for (this.completeLayers || this.checkLayers(u), P = D - 1; P >= 0; P -= 1)(this.completeLayers || this.elements[P]) && this.elements[P].prepareFrame(u - this.layers[P].st);
                        if (this.globalData._mdf)
                            for (P = 0; P < D; P += 1)(this.completeLayers || this.elements[P]) && this.elements[P].renderFrame()
                    }
                }, SVGRendererBase.prototype.appendElementInPos = function(u, P) {
                    var D, S = u.getBaseElement();
                    if (S) {
                        for (var E = 0; E < P;) this.elements[E] && !0 !== this.elements[E] && this.elements[E].getBaseElement() && (D = this.elements[E].getBaseElement()), E += 1;
                        D ? this.layerElement.insertBefore(S, D) : this.layerElement.appendChild(S)
                    }
                }, SVGRendererBase.prototype.hide = function() {
                    this.layerElement.style.display = "none"
                }, SVGRendererBase.prototype.show = function() {
                    this.layerElement.style.display = "block"
                }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(u, P, D) {
                    this.initFrame(), this.initBaseData(u, P, D), this.initTransform(u, P, D), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !P.progressiveLoad) && this.buildAllItems(), this.hide()
                }, ICompElement.prototype.prepareFrame = function(u) {
                    if (this._mdf = !1, this.prepareRenderableFrame(u), this.prepareProperties(u, this.isInRange), this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) this.renderedFrame = u / this.data.sr;
                        else {
                            var P, D = this.tm.v;
                            D === this.data.op && (D = this.data.op - 1), this.renderedFrame = D
                        }
                        var S = this.elements.length;
                        for (this.completeLayers || this.checkLayers(this.renderedFrame), P = S - 1; P >= 0; P -= 1)(this.completeLayers || this.elements[P]) && (this.elements[P].prepareFrame(this.renderedFrame - this.layers[P].st), this.elements[P]._mdf && (this._mdf = !0))
                    }
                }, ICompElement.prototype.renderInnerContent = function() {
                    var u, P = this.layers.length;
                    for (u = 0; u < P; u += 1)(this.completeLayers || this.elements[u]) && this.elements[u].renderFrame()
                }, ICompElement.prototype.setElements = function(u) {
                    this.elements = u
                }, ICompElement.prototype.getElements = function() {
                    return this.elements
                }, ICompElement.prototype.destroyElements = function() {
                    var u, P = this.layers.length;
                    for (u = 0; u < P; u += 1) this.elements[u] && this.elements[u].destroy()
                }, ICompElement.prototype.destroy = function() {
                    this.destroyElements(), this.destroyBaseElement()
                }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(u) {
                    return new SVGCompElement(u, this.globalData, this)
                }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(u) {
                    return new SVGCompElement(u, this.globalData, this)
                }, CVContextData.prototype.duplicate = function() {
                    var u = 2 * this._length,
                        P = this.savedOp;
                    this.savedOp = createTypedArray("float32", u), this.savedOp.set(P);
                    var D = 0;
                    for (D = this._length; D < u; D += 1) this.saved[D] = createTypedArray("float32", 16);
                    this._length = u
                }, CVContextData.prototype.reset = function() {
                    this.cArrPos = 0, this.cTr.reset(), this.cO = 1
                }, CVContextData.prototype.popTransform = function() {
                    var u, P = this.saved[this.cArrPos],
                        D = this.cTr.props;
                    for (u = 0; u < 16; u += 1) D[u] = P[u];
                    return P
                }, CVContextData.prototype.popOpacity = function() {
                    var u = this.savedOp[this.cArrPos];
                    return this.cO = u, u
                }, CVContextData.prototype.pop = function() {
                    return this.cArrPos -= 1, {
                        transform: this.popTransform(),
                        opacity: this.popOpacity()
                    }
                }, CVContextData.prototype.push = function() {
                    var u, P = this.cTr.props;
                    this._length <= this.cArrPos && this.duplicate();
                    var D = this.saved[this.cArrPos];
                    for (u = 0; u < 16; u += 1) D[u] = P[u];
                    this.savedOp[this.cArrPos] = this.cO, this.cArrPos += 1
                }, CVContextData.prototype.getTransform = function() {
                    return this.cTr
                }, CVContextData.prototype.getOpacity = function() {
                    return this.cO
                }, CVContextData.prototype.setOpacity = function(u) {
                    this.cO = u
                }, ShapeTransformManager.prototype = {
                    addTransformSequence: function(u) {
                        var P, D = u.length,
                            S = "_";
                        for (P = 0; P < D; P += 1) S += u[P].transform.key + "_";
                        var E = this.sequences[S];
                        return E || (E = {
                            transforms: [].concat(u),
                            finalTransform: new Matrix,
                            _mdf: !1
                        }, this.sequences[S] = E, this.sequenceList.push(E)), E
                    },
                    processSequence: function(u, P) {
                        for (var D, S = 0, E = u.transforms.length, T = P; S < E && !P;) {
                            if (u.transforms[S].transform.mProps._mdf) {
                                T = !0;
                                break
                            }
                            S += 1
                        }
                        if (T)
                            for (u.finalTransform.reset(), S = E - 1; S >= 0; S -= 1) D = u.transforms[S].transform.mProps.v.props, u.finalTransform.transform(D[0], D[1], D[2], D[3], D[4], D[5], D[6], D[7], D[8], D[9], D[10], D[11], D[12], D[13], D[14], D[15]);
                        u._mdf = T
                    },
                    processSequences: function(u) {
                        var P, D = this.sequenceList.length;
                        for (P = 0; P < D; P += 1) this.processSequence(this.sequenceList[P], u)
                    },
                    getNewKey: function() {
                        return this.transform_key_count += 1, "_" + this.transform_key_count
                    }
                };
                var lumaLoader = function() {
                    var u = "__lottie_element_luma_buffer",
                        P = null,
                        D = null,
                        S = null;

                    function E() {
                        var P = createNS("svg"),
                            D = createNS("filter"),
                            S = createNS("feColorMatrix");
                        return D.setAttribute("id", u), S.setAttribute("type", "matrix"), S.setAttribute("color-interpolation-filters", "sRGB"), S.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), D.appendChild(S), P.appendChild(D), P.setAttribute("id", u + "_svg"), featureSupport.svgLumaHidden && (P.style.display = "none"), P
                    }

                    function T() {
                        P || (S = E(), document.body.appendChild(S), (D = (P = createTag("canvas")).getContext("2d")).filter = "url(#" + u + ")", D.fillStyle = "rgba(0,0,0,0)", D.fillRect(0, 0, 1, 1))
                    }

                    function M(S) {
                        return P || T(), P.width = S.width, P.height = S.height, D.filter = "url(#" + u + ")", P
                    }
                    return {
                        load: T,
                        get: M
                    }
                };

                function createCanvas(u, P) {
                    if (featureSupport.offscreenCanvas) return new OffscreenCanvas(u, P);
                    var D = createTag("canvas");
                    return D.width = u, D.height = P, D
                }
                var assetLoader = function() {
                    return {
                        loadLumaCanvas: lumaLoader.load,
                        getLumaCanvas: lumaLoader.get,
                        createCanvas: createCanvas
                    }
                }();

                function CVEffects() {}

                function CVMaskElement(u, P) {
                    this.data = u, this.element = P, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                    var D, S = this.masksProperties.length,
                        E = !1;
                    for (D = 0; D < S; D += 1) "n" !== this.masksProperties[D].mode && (E = !0), this.viewData[D] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[D], 3);
                    this.hasMasks = E, E && this.element.addRenderableComponent(this)
                }

                function CVBaseElement() {}
                CVEffects.prototype.renderFrame = function() {}, CVMaskElement.prototype.renderFrame = function() {
                    if (this.hasMasks) {
                        var u = this.element.finalTransform.mat,
                            P = this.element.canvasContext,
                            D = this.masksProperties.length;
                        for (P.beginPath(), S = 0; S < D; S += 1)
                            if ("n" !== this.masksProperties[S].mode) {
                                this.masksProperties[S].inv && (P.moveTo(0, 0), P.lineTo(this.element.globalData.compSize.w, 0), P.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), P.lineTo(0, this.element.globalData.compSize.h), P.lineTo(0, 0)), M = this.viewData[S].v, E = u.applyToPointArray(M.v[0][0], M.v[0][1], 0), P.moveTo(E[0], E[1]);
                                var S, E, T, M, F, I = M._length;
                                for (F = 1; F < I; F += 1) T = u.applyToTriplePoints(M.o[F - 1], M.i[F], M.v[F]), P.bezierCurveTo(T[0], T[1], T[2], T[3], T[4], T[5]);
                                T = u.applyToTriplePoints(M.o[F - 1], M.i[0], M.v[0]), P.bezierCurveTo(T[0], T[1], T[2], T[3], T[4], T[5])
                            }
                        this.element.globalData.renderer.save(!0), P.clip()
                    }
                }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                    this.element = null
                };
                var operationsMap = {
                    1: "source-in",
                    2: "source-out",
                    3: "source-in",
                    4: "source-out"
                };

                function CVShapeData(u, P, D, S) {
                    this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                    var E, T, M = 4;
                    "rc" === P.ty ? M = 5 : "el" === P.ty ? M = 6 : "sr" === P.ty && (M = 7), this.sh = ShapePropertyFactory.getShapeProp(u, P, M, u);
                    var F = D.length;
                    for (E = 0; E < F; E += 1) D[E].closed || (T = {
                        transforms: S.addTransformSequence(D[E].transforms),
                        trNodes: []
                    }, this.styledShapes.push(T), D[E].elements.push(T))
                }

                function CVShapeElement(u, P, D) {
                    this.shapes = [], this.shapesData = u.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(u, P, D)
                }

                function CVTextElement(u, P, D) {
                    this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                        fill: "rgba(0,0,0,0)",
                        stroke: "rgba(0,0,0,0)",
                        sWidth: 0,
                        fValue: ""
                    }, this.initElement(u, P, D)
                }

                function CVImageElement(u, P, D) {
                    this.assetData = P.getAssetData(u.refId), this.img = P.imageLoader.getAsset(this.assetData), this.initElement(u, P, D)
                }

                function CVSolidElement(u, P, D) {
                    this.initElement(u, P, D)
                }

                function CanvasRendererBase(u, P) {
                    this.animationItem = u, this.renderConfig = {
                        clearCanvas: !P || void 0 === P.clearCanvas || P.clearCanvas,
                        context: P && P.context || null,
                        progressiveLoad: P && P.progressiveLoad || !1,
                        preserveAspectRatio: P && P.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: P && P.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: P && P.contentVisibility || "visible",
                        className: P && P.className || "",
                        id: P && P.id || ""
                    }, this.renderConfig.dpr = P && P.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = P && P.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                        frameNum: -1,
                        _mdf: !1,
                        renderConfig: this.renderConfig,
                        currentGlobalAlpha: -1
                    }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                }

                function CVCompElement(u, P, D) {
                    this.completeLayers = !1, this.layers = u.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(u, P, D), this.tm = u.tm ? PropertyFactory.getProp(this, u.tm, 0, P.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function CanvasRenderer(u, P) {
                    this.animationItem = u, this.renderConfig = {
                        clearCanvas: !P || void 0 === P.clearCanvas || P.clearCanvas,
                        context: P && P.context || null,
                        progressiveLoad: P && P.progressiveLoad || !1,
                        preserveAspectRatio: P && P.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: P && P.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: P && P.contentVisibility || "visible",
                        className: P && P.className || "",
                        id: P && P.id || "",
                        runExpressions: !P || void 0 === P.runExpressions || P.runExpressions
                    }, this.renderConfig.dpr = P && P.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = P && P.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                        frameNum: -1,
                        _mdf: !1,
                        renderConfig: this.renderConfig,
                        currentGlobalAlpha: -1
                    }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                }

                function HBaseElement() {}

                function HSolidElement(u, P, D) {
                    this.initElement(u, P, D)
                }

                function HShapeElement(u, P, D) {
                    this.shapes = [], this.shapesData = u.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(u, P, D), this.prevViewData = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }
                }

                function HTextElement(u, P, D) {
                    this.textSpans = [], this.textPaths = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }, this.renderType = "svg", this.isMasked = !1, this.initElement(u, P, D)
                }

                function HCameraElement(u, P, D) {
                    this.initFrame(), this.initBaseData(u, P, D), this.initHierarchy();
                    var S = PropertyFactory.getProp;
                    if (this.pe = S(this, u.pe, 0, 0, this), u.ks.p.s ? (this.px = S(this, u.ks.p.x, 1, 0, this), this.py = S(this, u.ks.p.y, 1, 0, this), this.pz = S(this, u.ks.p.z, 1, 0, this)) : this.p = S(this, u.ks.p, 1, 0, this), u.ks.a && (this.a = S(this, u.ks.a, 1, 0, this)), u.ks.or.k.length && u.ks.or.k[0].to) {
                        var E, T = u.ks.or.k.length;
                        for (E = 0; E < T; E += 1) u.ks.or.k[E].to = null, u.ks.or.k[E].ti = null
                    }
                    this.or = S(this, u.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = S(this, u.ks.rx, 0, degToRads, this), this.ry = S(this, u.ks.ry, 0, degToRads, this), this.rz = S(this, u.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                        mProp: this
                    }
                }

                function HImageElement(u, P, D) {
                    this.assetData = P.getAssetData(u.refId), this.initElement(u, P, D)
                }

                function HybridRendererBase(u, P) {
                    this.animationItem = u, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: P && P.className || "",
                        imagePreserveAspectRatio: P && P.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(P && !1 === P.hideOnTransparent),
                        filterSize: {
                            width: P && P.filterSize && P.filterSize.width || "400%",
                            height: P && P.filterSize && P.filterSize.height || "400%",
                            x: P && P.filterSize && P.filterSize.x || "-100%",
                            y: P && P.filterSize && P.filterSize.y || "-100%"
                        }
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }

                function HCompElement(u, P, D) {
                    this.layers = u.layers, this.supports3d = !u.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(u, P, D), this.tm = u.tm ? PropertyFactory.getProp(this, u.tm, 0, P.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function HybridRenderer(u, P) {
                    this.animationItem = u, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: P && P.className || "",
                        imagePreserveAspectRatio: P && P.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(P && !1 === P.hideOnTransparent),
                        filterSize: {
                            width: P && P.filterSize && P.filterSize.width || "400%",
                            height: P && P.filterSize && P.filterSize.height || "400%",
                            x: P && P.filterSize && P.filterSize.x || "-100%",
                            y: P && P.filterSize && P.filterSize.y || "-100%"
                        },
                        runExpressions: !P || void 0 === P.runExpressions || P.runExpressions
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }
                CVBaseElement.prototype = {
                    createElements: function() {},
                    initRendererElement: function() {},
                    createContainerElements: function() {
                        if (this.data.tt >= 1) {
                            this.buffers = [];
                            var u = this.globalData.canvasContext,
                                P = assetLoader.createCanvas(u.canvas.width, u.canvas.height);
                            this.buffers.push(P);
                            var D = assetLoader.createCanvas(u.canvas.width, u.canvas.height);
                            this.buffers.push(D), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                        }
                        this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this)
                    },
                    createContent: function() {},
                    setBlendMode: function() {
                        var u = this.globalData;
                        if (u.blendMode !== this.data.bm) {
                            u.blendMode = this.data.bm;
                            var P = getBlendMode(this.data.bm);
                            u.canvasContext.globalCompositeOperation = P
                        }
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new CVMaskElement(this.data, this)
                    },
                    hideElement: function() {
                        this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                    },
                    showElement: function() {
                        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                    },
                    clearCanvas: function(u) {
                        u.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
                    },
                    prepareLayer: function() {
                        if (this.data.tt >= 1) {
                            var u = this.buffers[0].getContext("2d");
                            this.clearCanvas(u), u.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
                        }
                    },
                    exitLayer: function() {
                        if (this.data.tt >= 1) {
                            var u = this.buffers[1],
                                P = u.getContext("2d");
                            if (this.clearCanvas(P), P.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                                var D = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                                D.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(D, 0, 0)
                            }
                            this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(u, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
                        }
                    },
                    renderFrame: function(u) {
                        if (!this.hidden && !this.data.hd && (1 !== this.data.td || u)) {
                            this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                            var P = 0 === this.data.ty;
                            this.prepareLayer(), this.globalData.renderer.save(P), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(P), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                        }
                    },
                    destroy: function() {
                        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                    },
                    mHelper: new Matrix
                }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                    opacity: 1,
                    _opMdf: !1
                }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                }, CVShapeElement.prototype.createStyleElement = function(u, P) {
                    var D = {
                            data: u,
                            type: u.ty,
                            preTransforms: this.transformsManager.addTransformSequence(P),
                            transforms: [],
                            elements: [],
                            closed: !0 === u.hd
                        },
                        S = {};
                    if ("fl" === u.ty || "st" === u.ty ? (S.c = PropertyFactory.getProp(this, u.c, 1, 255, this), S.c.k || (D.co = "rgb(" + bmFloor(S.c.v[0]) + "," + bmFloor(S.c.v[1]) + "," + bmFloor(S.c.v[2]) + ")")) : ("gf" === u.ty || "gs" === u.ty) && (S.s = PropertyFactory.getProp(this, u.s, 1, null, this), S.e = PropertyFactory.getProp(this, u.e, 1, null, this), S.h = PropertyFactory.getProp(this, u.h || {
                            k: 0
                        }, 0, .01, this), S.a = PropertyFactory.getProp(this, u.a || {
                            k: 0
                        }, 0, degToRads, this), S.g = new GradientProperty(this, u.g, this)), S.o = PropertyFactory.getProp(this, u.o, 0, .01, this), "st" === u.ty || "gs" === u.ty) {
                        if (D.lc = lineCapEnum[u.lc || 2], D.lj = lineJoinEnum[u.lj || 2], 1 == u.lj && (D.ml = u.ml), S.w = PropertyFactory.getProp(this, u.w, 0, null, this), S.w.k || (D.wi = S.w.v), u.d) {
                            var E = new DashProperty(this, u.d, "canvas", this);
                            S.d = E, S.d.k || (D.da = S.d.dashArray, D.do = S.d.dashoffset[0])
                        }
                    } else D.r = 2 === u.r ? "evenodd" : "nonzero";
                    return this.stylesList.push(D), S.style = D, S
                }, CVShapeElement.prototype.createGroupElement = function() {
                    return {
                        it: [],
                        prevViewData: []
                    }
                }, CVShapeElement.prototype.createTransformElement = function(u) {
                    return {
                        transform: {
                            opacity: 1,
                            _opMdf: !1,
                            key: this.transformsManager.getNewKey(),
                            op: PropertyFactory.getProp(this, u.o, 0, .01, this),
                            mProps: TransformPropertyFactory.getTransformProperty(this, u, this)
                        }
                    }
                }, CVShapeElement.prototype.createShapeElement = function(u) {
                    var P = new CVShapeData(this, u, this.stylesList, this.transformsManager);
                    return this.shapes.push(P), this.addShapeToModifiers(P), P
                }, CVShapeElement.prototype.reloadShapes = function() {
                    this._isFirstFrame = !0;
                    var u, P = this.itemsData.length;
                    for (u = 0; u < P; u += 1) this.prevViewData[u] = this.itemsData[u];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), P = this.dynamicProperties.length, u = 0; u < P; u += 1) this.dynamicProperties[u].getValue();
                    this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                }, CVShapeElement.prototype.addTransformToStyleList = function(u) {
                    var P, D = this.stylesList.length;
                    for (P = 0; P < D; P += 1) this.stylesList[P].closed || this.stylesList[P].transforms.push(u)
                }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                    var u, P = this.stylesList.length;
                    for (u = 0; u < P; u += 1) this.stylesList[u].closed || this.stylesList[u].transforms.pop()
                }, CVShapeElement.prototype.closeStyles = function(u) {
                    var P, D = u.length;
                    for (P = 0; P < D; P += 1) u[P].closed = !0
                }, CVShapeElement.prototype.searchShapes = function(u, P, D, S, E) {
                    var T, M, F, I, L, V, R = u.length - 1,
                        O = [],
                        N = [],
                        G = [].concat(E);
                    for (T = R; T >= 0; T -= 1) {
                        if ((I = this.searchProcessedElement(u[T])) ? P[T] = D[I - 1] : u[T]._shouldRender = S, "fl" === u[T].ty || "st" === u[T].ty || "gf" === u[T].ty || "gs" === u[T].ty) I ? P[T].style.closed = !1 : P[T] = this.createStyleElement(u[T], G), O.push(P[T].style);
                        else if ("gr" === u[T].ty) {
                            if (I)
                                for (M = 0, F = P[T].it.length; M < F; M += 1) P[T].prevViewData[M] = P[T].it[M];
                            else P[T] = this.createGroupElement(u[T]);
                            this.searchShapes(u[T].it, P[T].it, P[T].prevViewData, S, G)
                        } else "tr" === u[T].ty ? (I || (V = this.createTransformElement(u[T]), P[T] = V), G.push(P[T]), this.addTransformToStyleList(P[T])) : "sh" === u[T].ty || "rc" === u[T].ty || "el" === u[T].ty || "sr" === u[T].ty ? I || (P[T] = this.createShapeElement(u[T])) : "tm" === u[T].ty || "rd" === u[T].ty || "pb" === u[T].ty || "zz" === u[T].ty || "op" === u[T].ty ? (I ? (L = P[T]).closed = !1 : ((L = ShapeModifiers.getModifier(u[T].ty)).init(this, u[T]), P[T] = L, this.shapeModifiers.push(L)), N.push(L)) : "rp" === u[T].ty && (I ? (L = P[T]).closed = !0 : (L = ShapeModifiers.getModifier(u[T].ty), P[T] = L, L.init(this, u, T, P), this.shapeModifiers.push(L), S = !1), N.push(L));
                        this.addProcessedElement(u[T], T + 1)
                    }
                    for (this.removeTransformFromStyleList(), this.closeStyles(O), R = N.length, T = 0; T < R; T += 1) N[T].closed = !0
                }, CVShapeElement.prototype.renderInnerContent = function() {
                    this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                }, CVShapeElement.prototype.renderShapeTransform = function(u, P) {
                    (u._opMdf || P.op._mdf || this._isFirstFrame) && (P.opacity = u.opacity, P.opacity *= P.op.v, P._opMdf = !0)
                }, CVShapeElement.prototype.drawLayer = function() {
                    var u, P, D, S, E, T, M, F, I, L = this.stylesList.length,
                        V = this.globalData.renderer,
                        R = this.globalData.canvasContext;
                    for (u = 0; u < L; u += 1)
                        if (!(("st" === (F = (I = this.stylesList[u]).type) || "gs" === F) && 0 === I.wi || !I.data._shouldRender || 0 === I.coOp || 0 === this.globalData.currentGlobalAlpha)) {
                            for (V.save(), T = I.elements, "st" === F || "gs" === F ? (R.strokeStyle = "st" === F ? I.co : I.grd, R.lineWidth = I.wi, R.lineCap = I.lc, R.lineJoin = I.lj, R.miterLimit = I.ml || 0) : R.fillStyle = "fl" === F ? I.co : I.grd, V.ctxOpacity(I.coOp), "st" !== F && "gs" !== F && R.beginPath(), V.ctxTransform(I.preTransforms.finalTransform.props), D = T.length, P = 0; P < D; P += 1) {
                                for (("st" === F || "gs" === F) && (R.beginPath(), I.da && (R.setLineDash(I.da), R.lineDashOffset = I.do)), E = (M = T[P].trNodes).length, S = 0; S < E; S += 1) "m" === M[S].t ? R.moveTo(M[S].p[0], M[S].p[1]) : "c" === M[S].t ? R.bezierCurveTo(M[S].pts[0], M[S].pts[1], M[S].pts[2], M[S].pts[3], M[S].pts[4], M[S].pts[5]) : R.closePath();
                                ("st" === F || "gs" === F) && (R.stroke(), I.da && R.setLineDash(this.dashResetter))
                            }
                            "st" !== F && "gs" !== F && R.fill(I.r), V.restore()
                        }
                }, CVShapeElement.prototype.renderShape = function(u, P, D, S) {
                    var E, T, M = P.length - 1;
                    for (T = u, E = M; E >= 0; E -= 1) "tr" === P[E].ty ? (T = D[E].transform, this.renderShapeTransform(u, T)) : "sh" === P[E].ty || "el" === P[E].ty || "rc" === P[E].ty || "sr" === P[E].ty ? this.renderPath(P[E], D[E]) : "fl" === P[E].ty ? this.renderFill(P[E], D[E], T) : "st" === P[E].ty ? this.renderStroke(P[E], D[E], T) : "gf" === P[E].ty || "gs" === P[E].ty ? this.renderGradientFill(P[E], D[E], T) : "gr" === P[E].ty ? this.renderShape(T, P[E].it, D[E].it) : P[E].ty;
                    S && this.drawLayer()
                }, CVShapeElement.prototype.renderStyledShape = function(u, P) {
                    if (this._isFirstFrame || P._mdf || u.transforms._mdf) {
                        var D, S, E, T = u.trNodes,
                            M = P.paths,
                            F = M._length;
                        T.length = 0;
                        var I = u.transforms.finalTransform;
                        for (E = 0; E < F; E += 1) {
                            var L = M.shapes[E];
                            if (L && L.v) {
                                for (D = 1, S = L._length; D < S; D += 1) 1 === D && T.push({
                                    t: "m",
                                    p: I.applyToPointArray(L.v[0][0], L.v[0][1], 0)
                                }), T.push({
                                    t: "c",
                                    pts: I.applyToTriplePoints(L.o[D - 1], L.i[D], L.v[D])
                                });
                                1 === S && T.push({
                                    t: "m",
                                    p: I.applyToPointArray(L.v[0][0], L.v[0][1], 0)
                                }), L.c && S && (T.push({
                                    t: "c",
                                    pts: I.applyToTriplePoints(L.o[D - 1], L.i[0], L.v[0])
                                }), T.push({
                                    t: "z"
                                }))
                            }
                        }
                        u.trNodes = T
                    }
                }, CVShapeElement.prototype.renderPath = function(u, P) {
                    if (!0 !== u.hd && u._shouldRender) {
                        var D, S = P.styledShapes.length;
                        for (D = 0; D < S; D += 1) this.renderStyledShape(P.styledShapes[D], P.sh)
                    }
                }, CVShapeElement.prototype.renderFill = function(u, P, D) {
                    var S = P.style;
                    (P.c._mdf || this._isFirstFrame) && (S.co = "rgb(" + bmFloor(P.c.v[0]) + "," + bmFloor(P.c.v[1]) + "," + bmFloor(P.c.v[2]) + ")"), (P.o._mdf || D._opMdf || this._isFirstFrame) && (S.coOp = P.o.v * D.opacity)
                }, CVShapeElement.prototype.renderGradientFill = function(u, P, D) {
                    var S = P.style;
                    if (!S.grd || P.g._mdf || P.s._mdf || P.e._mdf || 1 !== u.t && (P.h._mdf || P.a._mdf)) {
                        var E, T, M = this.globalData.canvasContext,
                            F = P.s.v,
                            I = P.e.v;
                        if (1 === u.t) E = M.createLinearGradient(F[0], F[1], I[0], I[1]);
                        else {
                            var L = Math.sqrt(Math.pow(F[0] - I[0], 2) + Math.pow(F[1] - I[1], 2)),
                                V = Math.atan2(I[1] - F[1], I[0] - F[0]),
                                R = P.h.v;
                            R >= 1 ? R = .99 : R <= -1 && (R = -.99);
                            var O = L * R,
                                N = Math.cos(V + P.a.v) * O + F[0],
                                G = Math.sin(V + P.a.v) * O + F[1];
                            E = M.createRadialGradient(N, G, 0, F[0], F[1], L)
                        }
                        var W = u.g.p,
                            Y = P.g.c,
                            H = 1;
                        for (T = 0; T < W; T += 1) P.g._hasOpacity && P.g._collapsable && (H = P.g.o[2 * T + 1]), E.addColorStop(Y[4 * T] / 100, "rgba(" + Y[4 * T + 1] + "," + Y[4 * T + 2] + "," + Y[4 * T + 3] + "," + H + ")");
                        S.grd = E
                    }
                    S.coOp = P.o.v * D.opacity
                }, CVShapeElement.prototype.renderStroke = function(u, P, D) {
                    var S = P.style,
                        E = P.d;
                    E && (E._mdf || this._isFirstFrame) && (S.da = E.dashArray, S.do = E.dashoffset[0]), (P.c._mdf || this._isFirstFrame) && (S.co = "rgb(" + bmFloor(P.c.v[0]) + "," + bmFloor(P.c.v[1]) + "," + bmFloor(P.c.v[2]) + ")"), (P.o._mdf || D._opMdf || this._isFirstFrame) && (S.coOp = P.o.v * D.opacity), (P.w._mdf || this._isFirstFrame) && (S.wi = P.w.v)
                }, CVShapeElement.prototype.destroy = function() {
                    this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                    var u, P, D, S, E, T, M, F, I, L, V, R, O = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(O.l ? O.l.length : 0);
                    var N = !1;
                    O.fc ? (N = !0, this.values.fill = this.buildColor(O.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = N;
                    var G = !1;
                    O.sc && (G = !0, this.values.stroke = this.buildColor(O.sc), this.values.sWidth = O.sw);
                    var W = this.globalData.fontManager.getFontByName(O.f),
                        Y = O.l,
                        H = this.mHelper;
                    this.stroke = G, this.values.fValue = O.finalSize + "px " + this.globalData.fontManager.getFontByName(O.f).fFamily, P = O.finalText.length;
                    var X = this.data.singleShape,
                        K = .001 * O.tr * O.finalSize,
                        J = 0,
                        Z = 0,
                        U = !0,
                        Q = 0;
                    for (u = 0; u < P; u += 1) {
                        S = (D = this.globalData.fontManager.getCharData(O.finalText[u], W.fStyle, this.globalData.fontManager.getFontByName(O.f).fFamily)) && D.data || {}, H.reset(), X && Y[u].n && (J = -K, Z += O.yOffset + (U ? 1 : 0), U = !1), I = (M = S.shapes ? S.shapes[0].it : []).length, H.scale(O.finalSize / 100, O.finalSize / 100), X && this.applyTextPropertiesToMatrix(O, H, Y[u].line, J, Z), V = createSizedArray(I - 1);
                        var $ = 0;
                        for (F = 0; F < I; F += 1)
                            if ("sh" === M[F].ty) {
                                for (E = 1, T = M[F].ks.k.i.length, L = M[F].ks.k, R = []; E < T; E += 1) 1 === E && R.push(H.applyToX(L.v[0][0], L.v[0][1], 0), H.applyToY(L.v[0][0], L.v[0][1], 0)), R.push(H.applyToX(L.o[E - 1][0], L.o[E - 1][1], 0), H.applyToY(L.o[E - 1][0], L.o[E - 1][1], 0), H.applyToX(L.i[E][0], L.i[E][1], 0), H.applyToY(L.i[E][0], L.i[E][1], 0), H.applyToX(L.v[E][0], L.v[E][1], 0), H.applyToY(L.v[E][0], L.v[E][1], 0));
                                R.push(H.applyToX(L.o[E - 1][0], L.o[E - 1][1], 0), H.applyToY(L.o[E - 1][0], L.o[E - 1][1], 0), H.applyToX(L.i[0][0], L.i[0][1], 0), H.applyToY(L.i[0][0], L.i[0][1], 0), H.applyToX(L.v[0][0], L.v[0][1], 0), H.applyToY(L.v[0][0], L.v[0][1], 0)), V[$] = R, $ += 1
                            }
                        X && (J += Y[u].l + K), this.textSpans[Q] ? this.textSpans[Q].elem = V : this.textSpans[Q] = {
                            elem: V
                        }, Q += 1
                    }
                }, CVTextElement.prototype.renderInnerContent = function() {
                    var u, P, D, S, E, T, M, F, I, L = this.canvasContext;
                    L.font = this.values.fValue, L.lineCap = "butt", L.lineJoin = "miter", L.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                    var V = this.textAnimator.renderedLetters,
                        R = this.textProperty.currentData.l;
                    P = R.length;
                    var O = null,
                        N = null,
                        G = null;
                    for (u = 0; u < P; u += 1)
                        if (!R[u].n) {
                            if ((M = V[u]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(M.p), this.globalData.renderer.ctxOpacity(M.o)), this.fill) {
                                for (M && M.fc ? O !== M.fc && (O = M.fc, L.fillStyle = M.fc) : O !== this.values.fill && (O = this.values.fill, L.fillStyle = this.values.fill), S = (F = this.textSpans[u].elem).length, this.globalData.canvasContext.beginPath(), D = 0; D < S; D += 1)
                                    for (T = (I = F[D]).length, this.globalData.canvasContext.moveTo(I[0], I[1]), E = 2; E < T; E += 6) this.globalData.canvasContext.bezierCurveTo(I[E], I[E + 1], I[E + 2], I[E + 3], I[E + 4], I[E + 5]);
                                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                            }
                            if (this.stroke) {
                                for (M && M.sw ? G !== M.sw && (G = M.sw, L.lineWidth = M.sw) : G !== this.values.sWidth && (G = this.values.sWidth, L.lineWidth = this.values.sWidth), M && M.sc ? N !== M.sc && (N = M.sc, L.strokeStyle = M.sc) : N !== this.values.stroke && (N = this.values.stroke, L.strokeStyle = this.values.stroke), S = (F = this.textSpans[u].elem).length, this.globalData.canvasContext.beginPath(), D = 0; D < S; D += 1)
                                    for (T = (I = F[D]).length, this.globalData.canvasContext.moveTo(I[0], I[1]), E = 2; E < T; E += 6) this.globalData.canvasContext.bezierCurveTo(I[E], I[E + 1], I[E + 2], I[E + 3], I[E + 4], I[E + 5]);
                                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                            }
                            M && this.globalData.renderer.restore()
                        }
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                        var u, P, D = createTag("canvas");
                        D.width = this.assetData.w, D.height = this.assetData.h;
                        var S = D.getContext("2d"),
                            E = this.img.width,
                            T = this.img.height,
                            M = E / T,
                            F = this.assetData.w / this.assetData.h,
                            I = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                        M > F && "xMidYMid slice" === I || M < F && "xMidYMid slice" !== I ? u = (P = T) * F : P = (u = E) / F, S.drawImage(this.img, (E - u) / 2, (T - P) / 2, u, P, 0, 0, this.assetData.w, this.assetData.h), this.img = D
                    }
                }, CVImageElement.prototype.renderInnerContent = function() {
                    this.canvasContext.drawImage(this.img, 0, 0)
                }, CVImageElement.prototype.destroy = function() {
                    this.img = null
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                    var u = this.canvasContext;
                    u.fillStyle = this.data.sc, u.fillRect(0, 0, this.data.sw, this.data.sh)
                }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(u) {
                    return new CVShapeElement(u, this.globalData, this)
                }, CanvasRendererBase.prototype.createText = function(u) {
                    return new CVTextElement(u, this.globalData, this)
                }, CanvasRendererBase.prototype.createImage = function(u) {
                    return new CVImageElement(u, this.globalData, this)
                }, CanvasRendererBase.prototype.createSolid = function(u) {
                    return new CVSolidElement(u, this.globalData, this)
                }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(u) {
                    if (1 !== u[0] || 0 !== u[1] || 0 !== u[4] || 1 !== u[5] || 0 !== u[12] || 0 !== u[13]) {
                        if (!this.renderConfig.clearCanvas) {
                            this.canvasContext.transform(u[0], u[1], u[4], u[5], u[12], u[13]);
                            return
                        }
                        this.transformMat.cloneFromProps(u);
                        var P = this.contextData.getTransform(),
                            D = P.props;
                        this.transformMat.transform(D[0], D[1], D[2], D[3], D[4], D[5], D[6], D[7], D[8], D[9], D[10], D[11], D[12], D[13], D[14], D[15]), P.cloneFromProps(this.transformMat.props);
                        var S = P.props;
                        this.canvasContext.setTransform(S[0], S[1], S[4], S[5], S[12], S[13])
                    }
                }, CanvasRendererBase.prototype.ctxOpacity = function(u) {
                    var P = this.contextData.getOpacity();
                    if (!this.renderConfig.clearCanvas) {
                        this.canvasContext.globalAlpha *= u < 0 ? 0 : u, this.globalData.currentGlobalAlpha = P;
                        return
                    }
                    P *= u < 0 ? 0 : u, this.contextData.setOpacity(P), this.globalData.currentGlobalAlpha !== P && (this.canvasContext.globalAlpha = P, this.globalData.currentGlobalAlpha = P)
                }, CanvasRendererBase.prototype.reset = function() {
                    if (!this.renderConfig.clearCanvas) {
                        this.canvasContext.restore();
                        return
                    }
                    this.contextData.reset()
                }, CanvasRendererBase.prototype.save = function(u) {
                    if (!this.renderConfig.clearCanvas) {
                        this.canvasContext.save();
                        return
                    }
                    u && this.canvasContext.save(), this.contextData.push()
                }, CanvasRendererBase.prototype.restore = function(u) {
                    if (!this.renderConfig.clearCanvas) {
                        this.canvasContext.restore();
                        return
                    }
                    u && (this.canvasContext.restore(), this.globalData.blendMode = "source-over");
                    var P = this.contextData.pop(),
                        D = P.transform,
                        S = P.opacity;
                    this.canvasContext.setTransform(D[0], D[1], D[4], D[5], D[12], D[13]), this.globalData.currentGlobalAlpha !== S && (this.canvasContext.globalAlpha = S, this.globalData.currentGlobalAlpha = S)
                }, CanvasRendererBase.prototype.configAnimation = function(u) {
                    if (this.animationItem.wrapper) {
                        this.animationItem.container = createTag("canvas");
                        var P = this.animationItem.container.style;
                        P.width = "100%", P.height = "100%";
                        var D = "0px 0px 0px";
                        P.transformOrigin = D, P.mozTransformOrigin = D, P.webkitTransformOrigin = D, P["-webkit-transform"] = D, P.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                    } else this.canvasContext = this.renderConfig.context;
                    this.data = u, this.layers = u.layers, this.transformCanvas = {
                        w: u.w,
                        h: u.h,
                        sx: 0,
                        sy: 0,
                        tx: 0,
                        ty: 0
                    }, this.setupGlobalData(u, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(u.layers.length), this.updateContainerSize()
                }, CanvasRendererBase.prototype.updateContainerSize = function(u, P) {
                    if (this.reset(), u ? (D = u, S = P, this.canvasContext.canvas.width = D, this.canvasContext.canvas.height = S) : (this.animationItem.wrapper && this.animationItem.container ? (D = this.animationItem.wrapper.offsetWidth, S = this.animationItem.wrapper.offsetHeight) : (D = this.canvasContext.canvas.width, S = this.canvasContext.canvas.height), this.canvasContext.canvas.width = D * this.renderConfig.dpr, this.canvasContext.canvas.height = S * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                        var D, S, E, T, M = this.renderConfig.preserveAspectRatio.split(" "),
                            F = M[1] || "meet",
                            I = M[0] || "xMidYMid",
                            L = I.substr(0, 4),
                            V = I.substr(4);
                        E = D / S, (T = this.transformCanvas.w / this.transformCanvas.h) > E && "meet" === F || T < E && "slice" === F ? (this.transformCanvas.sx = D / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = D / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = S / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = S / (this.transformCanvas.h / this.renderConfig.dpr)), "xMid" === L && (T < E && "meet" === F || T > E && "slice" === F) ? this.transformCanvas.tx = (D - this.transformCanvas.w * (S / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === L && (T < E && "meet" === F || T > E && "slice" === F) ? this.transformCanvas.tx = (D - this.transformCanvas.w * (S / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, "YMid" === V && (T > E && "meet" === F || T < E && "slice" === F) ? this.transformCanvas.ty = (S - this.transformCanvas.h * (D / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === V && (T > E && "meet" === F || T < E && "slice" === F) ? this.transformCanvas.ty = (S - this.transformCanvas.h * (D / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0
                    } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = D / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = S / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                }, CanvasRendererBase.prototype.destroy = function() {
                    var u;
                    for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), u = (this.layers ? this.layers.length : 0) - 1; u >= 0; u -= 1) this.elements[u] && this.elements[u].destroy && this.elements[u].destroy();
                    this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                }, CanvasRendererBase.prototype.renderFrame = function(u, P) {
                    if ((this.renderedFrame !== u || !0 !== this.renderConfig.clearCanvas || P) && !this.destroyed && -1 !== u) {
                        this.renderedFrame = u, this.globalData.frameNum = u - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || P, this.globalData.projectInterface.currentFrame = u;
                        var D, S = this.layers.length;
                        for (this.completeLayers || this.checkLayers(u), D = 0; D < S; D += 1)(this.completeLayers || this.elements[D]) && this.elements[D].prepareFrame(u - this.layers[D].st);
                        if (this.globalData._mdf) {
                            for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), D = S - 1; D >= 0; D -= 1)(this.completeLayers || this.elements[D]) && this.elements[D].renderFrame();
                            !0 !== this.renderConfig.clearCanvas && this.restore()
                        }
                    }
                }, CanvasRendererBase.prototype.buildItem = function(u) {
                    var P = this.elements;
                    if (!P[u] && 99 !== this.layers[u].ty) {
                        var D = this.createItem(this.layers[u], this, this.globalData);
                        P[u] = D, D.initExpressions()
                    }
                }, CanvasRendererBase.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, CanvasRendererBase.prototype.hide = function() {
                    this.animationItem.container.style.display = "none"
                }, CanvasRendererBase.prototype.show = function() {
                    this.animationItem.container.style.display = "block"
                }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                    var u, P = this.canvasContext;
                    for (P.beginPath(), P.moveTo(0, 0), P.lineTo(this.data.w, 0), P.lineTo(this.data.w, this.data.h), P.lineTo(0, this.data.h), P.lineTo(0, 0), P.clip(), u = this.layers.length - 1; u >= 0; u -= 1)(this.completeLayers || this.elements[u]) && this.elements[u].renderFrame()
                }, CVCompElement.prototype.destroy = function() {
                    var u;
                    for (u = this.layers.length - 1; u >= 0; u -= 1) this.elements[u] && this.elements[u].destroy();
                    this.layers = null, this.elements = null
                }, CVCompElement.prototype.createComp = function(u) {
                    return new CVCompElement(u, this.globalData, this)
                }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(u) {
                    return new CVCompElement(u, this.globalData, this)
                }, HBaseElement.prototype = {
                    checkBlendMode: function() {},
                    initRendererElement: function() {
                        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                    },
                    createContainerElements: function() {
                        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        var u = this.transformedElement ? this.transformedElement.style : {};
                        if (this.finalTransform._matMdf) {
                            var P = this.finalTransform.mat.toCSS();
                            u.transform = P, u.webkitTransform = P
                        }
                        this.finalTransform._opMdf && (u.opacity = this.finalTransform.mProp.o.v)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    destroy: function() {
                        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData)
                    },
                    addEffects: function() {},
                    setMatte: function() {}
                }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                    var u;
                    this.data.hasMask ? ((u = createNS("rect")).setAttribute("width", this.data.sw), u.setAttribute("height", this.data.sh), u.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((u = createTag("div")).style.width = this.data.sw + "px", u.style.height = this.data.sh + "px", u.style.backgroundColor = this.data.sc), this.layerElement.appendChild(u)
                }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                    var u;
                    if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), u = this.svgElement;
                    else {
                        u = createNS("svg");
                        var P = this.comp.data ? this.comp.data : this.globalData.compSize;
                        u.setAttribute("width", P.w), u.setAttribute("height", P.h), u.appendChild(this.shapesContainer), this.layerElement.appendChild(u)
                    }
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = u
                }, HShapeElement.prototype.getTransformedPoint = function(u, P) {
                    var D, S = u.length;
                    for (D = 0; D < S; D += 1) P = u[D].mProps.v.applyToPointArray(P[0], P[1], 0);
                    return P
                }, HShapeElement.prototype.calculateShapeBoundingBox = function(u, P) {
                    var D, S, E, T, M, F = u.sh.v,
                        I = u.transformers,
                        L = F._length;
                    if (!(L <= 1)) {
                        for (D = 0; D < L - 1; D += 1) S = this.getTransformedPoint(I, F.v[D]), E = this.getTransformedPoint(I, F.o[D]), T = this.getTransformedPoint(I, F.i[D + 1]), M = this.getTransformedPoint(I, F.v[D + 1]), this.checkBounds(S, E, T, M, P);
                        F.c && (S = this.getTransformedPoint(I, F.v[D]), E = this.getTransformedPoint(I, F.o[D]), T = this.getTransformedPoint(I, F.i[0]), M = this.getTransformedPoint(I, F.v[0]), this.checkBounds(S, E, T, M, P))
                    }
                }, HShapeElement.prototype.checkBounds = function(u, P, D, S, E) {
                    this.getBoundsOfCurve(u, P, D, S);
                    var T = this.shapeBoundingBox;
                    E.x = bmMin(T.left, E.x), E.xMax = bmMax(T.right, E.xMax), E.y = bmMin(T.top, E.y), E.yMax = bmMax(T.bottom, E.yMax)
                }, HShapeElement.prototype.shapeBoundingBox = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, HShapeElement.prototype.tempBoundingBox = {
                    x: 0,
                    xMax: 0,
                    y: 0,
                    yMax: 0,
                    width: 0,
                    height: 0
                }, HShapeElement.prototype.getBoundsOfCurve = function(u, P, D, S) {
                    for (var E, T, M, F, I, L, V, R = [
                            [u[0], S[0]],
                            [u[1], S[1]]
                        ], O = 0; O < 2; ++O) T = 6 * u[O] - 12 * P[O] + 6 * D[O], E = -3 * u[O] + 9 * P[O] - 9 * D[O] + 3 * S[O], M = 3 * P[O] - 3 * u[O], T |= 0, M |= 0, 0 == (E |= 0) && 0 === T || (0 === E ? (F = -M / T) > 0 && F < 1 && R[O].push(this.calculateF(F, u, P, D, S, O)) : (I = T * T - 4 * M * E) >= 0 && ((L = (-T + bmSqrt(I)) / (2 * E)) > 0 && L < 1 && R[O].push(this.calculateF(L, u, P, D, S, O)), (V = (-T - bmSqrt(I)) / (2 * E)) > 0 && V < 1 && R[O].push(this.calculateF(V, u, P, D, S, O))));
                    this.shapeBoundingBox.left = bmMin.apply(null, R[0]), this.shapeBoundingBox.top = bmMin.apply(null, R[1]), this.shapeBoundingBox.right = bmMax.apply(null, R[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, R[1])
                }, HShapeElement.prototype.calculateF = function(u, P, D, S, E, T) {
                    return bmPow(1 - u, 3) * P[T] + 3 * bmPow(1 - u, 2) * u * D[T] + 3 * (1 - u) * bmPow(u, 2) * S[T] + bmPow(u, 3) * E[T]
                }, HShapeElement.prototype.calculateBoundingBox = function(u, P) {
                    var D, S = u.length;
                    for (D = 0; D < S; D += 1) u[D] && u[D].sh ? this.calculateShapeBoundingBox(u[D], P) : u[D] && u[D].it ? this.calculateBoundingBox(u[D].it, P) : u[D] && u[D].style && u[D].w && this.expandStrokeBoundingBox(u[D].w, P)
                }, HShapeElement.prototype.expandStrokeBoundingBox = function(u, P) {
                    var D = 0;
                    if (u.keyframes) {
                        for (var S = 0; S < u.keyframes.length; S += 1) {
                            var E = u.keyframes[S].s;
                            E > D && (D = E)
                        }
                        D *= u.mult
                    } else D = u.v * u.mult;
                    P.x -= D, P.xMax += D, P.y -= D, P.yMax += D
                }, HShapeElement.prototype.currentBoxContains = function(u) {
                    return this.currentBBox.x <= u.x && this.currentBBox.y <= u.y && this.currentBBox.width + this.currentBBox.x >= u.x + u.width && this.currentBBox.height + this.currentBBox.y >= u.y + u.height
                }, HShapeElement.prototype.renderInnerContent = function() {
                    if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var u = this.tempBoundingBox,
                            P = 999999;
                        if (u.x = P, u.xMax = -P, u.y = P, u.yMax = -P, this.calculateBoundingBox(this.itemsData, u), u.width = u.xMax < u.x ? 0 : u.xMax - u.x, u.height = u.yMax < u.y ? 0 : u.yMax - u.y, !this.currentBoxContains(u)) {
                            var D = !1;
                            if (this.currentBBox.w !== u.width && (this.currentBBox.w = u.width, this.shapeCont.setAttribute("width", u.width), D = !0), this.currentBBox.h !== u.height && (this.currentBBox.h = u.height, this.shapeCont.setAttribute("height", u.height), D = !0), D || this.currentBBox.x !== u.x || this.currentBBox.y !== u.y) {
                                this.currentBBox.w = u.width, this.currentBBox.h = u.height, this.currentBBox.x = u.x, this.currentBBox.y = u.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                                var S = this.shapeCont.style,
                                    E = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                S.transform = E, S.webkitTransform = E
                            }
                        }
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                    if (this.isMasked = this.checkMasks(), this.isMasked) {
                        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                        var u = createNS("g");
                        this.maskedElement.appendChild(u), this.innerElem = u
                    } else this.renderType = "html", this.innerElem = this.layerElement;
                    this.checkParenting()
                }, HTextElement.prototype.buildNewText = function() {
                    var u = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(u.l ? u.l.length : 0);
                    var P = this.innerElem.style,
                        D = u.fc ? this.buildColor(u.fc) : "rgba(0,0,0,0)";
                    P.fill = D, P.color = D, u.sc && (P.stroke = this.buildColor(u.sc), P.strokeWidth = u.sw + "px");
                    var S = this.globalData.fontManager.getFontByName(u.f);
                    if (!this.globalData.fontManager.chars) {
                        if (P.fontSize = u.finalSize + "px", P.lineHeight = u.finalSize + "px", S.fClass) this.innerElem.className = S.fClass;
                        else {
                            P.fontFamily = S.fFamily;
                            var E = u.fWeight,
                                T = u.fStyle;
                            P.fontStyle = T, P.fontWeight = E
                        }
                    }
                    var M = u.l;
                    R = M.length;
                    var F = this.mHelper,
                        I = "",
                        L = 0;
                    for (V = 0; V < R; V += 1) {
                        if (this.globalData.fontManager.chars ? (this.textPaths[L] ? O = this.textPaths[L] : ((O = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), O.setAttribute("stroke-linejoin", lineJoinEnum[2]), O.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[L] ? G = (N = this.textSpans[L]).children[0] : ((N = createTag("div")).style.lineHeight = 0, (G = createNS("svg")).appendChild(O), styleDiv(N)))) : this.isMasked ? O = this.textPaths[L] ? this.textPaths[L] : createNS("text") : this.textSpans[L] ? (N = this.textSpans[L], O = this.textPaths[L]) : (styleDiv(N = createTag("span")), styleDiv(O = createTag("span")), N.appendChild(O)), this.globalData.fontManager.chars) {
                            var V, R, O, N, G, W, Y, H = this.globalData.fontManager.getCharData(u.finalText[V], S.fStyle, this.globalData.fontManager.getFontByName(u.f).fFamily);
                            if (Y = H ? H.data : null, F.reset(), Y && Y.shapes && Y.shapes.length && (W = Y.shapes[0].it, F.scale(u.finalSize / 100, u.finalSize / 100), I = this.createPathShape(F, W), O.setAttribute("d", I)), this.isMasked) this.innerElem.appendChild(O);
                            else {
                                if (this.innerElem.appendChild(N), Y && Y.shapes) {
                                    document.body.appendChild(G);
                                    var X = G.getBBox();
                                    G.setAttribute("width", X.width + 2), G.setAttribute("height", X.height + 2), G.setAttribute("viewBox", X.x - 1 + " " + (X.y - 1) + " " + (X.width + 2) + " " + (X.height + 2));
                                    var K = G.style,
                                        J = "translate(" + (X.x - 1) + "px," + (X.y - 1) + "px)";
                                    K.transform = J, K.webkitTransform = J, M[V].yOffset = X.y - 1
                                } else G.setAttribute("width", 1), G.setAttribute("height", 1);
                                N.appendChild(G)
                            }
                        } else if (O.textContent = M[V].val, O.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(O);
                        else {
                            this.innerElem.appendChild(N);
                            var Z = O.style,
                                U = "translate3d(0," + -u.finalSize / 1.2 + "px,0)";
                            Z.transform = U, Z.webkitTransform = U
                        }
                        this.isMasked ? this.textSpans[L] = O : this.textSpans[L] = N, this.textSpans[L].style.display = "block", this.textPaths[L] = O, L += 1
                    }
                    for (; L < this.textSpans.length;) this.textSpans[L].style.display = "none", L += 1
                }, HTextElement.prototype.renderInnerContent = function() {
                    if (this.data.singleShape) {
                        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                        if (this.isMasked && this.finalTransform._matMdf) {
                            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), u = this.svgElement.style;
                            var u, P, D, S, E, T, M = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                            u.transform = M, u.webkitTransform = M
                        }
                    }
                    if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                        var F = 0,
                            I = this.textAnimator.renderedLetters,
                            L = this.textProperty.currentData.l;
                        for (P = 0, D = L.length; P < D; P += 1) L[P].n ? F += 1 : (E = this.textSpans[P], T = this.textPaths[P], S = I[F], F += 1, S._mdf.m && (this.isMasked ? E.setAttribute("transform", S.m) : (E.style.webkitTransform = S.m, E.style.transform = S.m)), E.style.opacity = S.o, S.sw && S._mdf.sw && T.setAttribute("stroke-width", S.sw), S.sc && S._mdf.sc && T.setAttribute("stroke", S.sc), S.fc && S._mdf.fc && (T.setAttribute("fill", S.fc), T.style.color = S.fc));
                        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var V = this.innerElem.getBBox();
                            this.currentBBox.w !== V.width && (this.currentBBox.w = V.width, this.svgElement.setAttribute("width", V.width)), this.currentBBox.h !== V.height && (this.currentBBox.h = V.height, this.svgElement.setAttribute("height", V.height));
                            var R = 1;
                            if (this.currentBBox.w !== V.width + 2 * R || this.currentBBox.h !== V.height + 2 * R || this.currentBBox.x !== V.x - R || this.currentBBox.y !== V.y - R) {
                                this.currentBBox.w = V.width + 2 * R, this.currentBBox.h = V.height + 2 * R, this.currentBBox.x = V.x - R, this.currentBBox.y = V.y - R, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), u = this.svgElement.style;
                                var O = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                u.transform = O, u.webkitTransform = O
                            }
                        }
                    }
                }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                    var u, P, D, S, E = this.comp.threeDElements.length;
                    for (u = 0; u < E; u += 1)
                        if ("3d" === (P = this.comp.threeDElements[u]).type) {
                            D = P.perspectiveElem.style, S = P.container.style;
                            var T = this.pe.v + "px",
                                M = "0px 0px 0px",
                                F = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            D.perspective = T, D.webkitPerspective = T, S.transformOrigin = M, S.mozTransformOrigin = M, S.webkitTransformOrigin = M, D.transform = F, D.webkitTransform = F
                        }
                }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                    var u = this._isFirstFrame;
                    if (this.hierarchy)
                        for (D = 0, S = this.hierarchy.length; D < S; D += 1) u = this.hierarchy[D].finalTransform.mProp._mdf || u;
                    if (u || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                        if (this.mat.reset(), this.hierarchy)
                            for (D = S = this.hierarchy.length - 1; D >= 0; D -= 1) {
                                var P = this.hierarchy[D].finalTransform.mProp;
                                this.mat.translate(-P.p.v[0], -P.p.v[1], P.p.v[2]), this.mat.rotateX(-P.or.v[0]).rotateY(-P.or.v[1]).rotateZ(P.or.v[2]), this.mat.rotateX(-P.rx.v).rotateY(-P.ry.v).rotateZ(P.rz.v), this.mat.scale(1 / P.s.v[0], 1 / P.s.v[1], 1 / P.s.v[2]), this.mat.translate(P.a.v[0], P.a.v[1], P.a.v[2])
                            }
                        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                            var D, S, E, T = Math.sqrt(Math.pow((E = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]])[0], 2) + Math.pow(E[1], 2) + Math.pow(E[2], 2)),
                                M = [E[0] / T, E[1] / T, E[2] / T],
                                F = Math.sqrt(M[2] * M[2] + M[0] * M[0]),
                                I = Math.atan2(M[1], F),
                                L = Math.atan2(M[0], -M[2]);
                            this.mat.rotateY(L).rotateX(-I)
                        }
                        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                        var V = !this._prevMat.equals(this.mat);
                        if ((V || this.pe._mdf) && this.comp.threeDElements) {
                            for (D = 0, S = this.comp.threeDElements.length; D < S; D += 1)
                                if ("3d" === (R = this.comp.threeDElements[D]).type) {
                                    if (V) {
                                        var R, O, N, G = this.mat.toCSS();
                                        (N = R.container.style).transform = G, N.webkitTransform = G
                                    }
                                    this.pe._mdf && ((O = R.perspectiveElem.style).perspective = this.pe.v + "px", O.webkitPerspective = this.pe.v + "px")
                                }
                            this.mat.clone(this._prevMat)
                        }
                    }
                    this._isFirstFrame = !1
                }, HCameraElement.prototype.prepareFrame = function(u) {
                    this.prepareProperties(u, !0)
                }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                    return null
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                    var u = this.globalData.getAssetsPath(this.assetData),
                        P = new Image;
                    this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", u), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(P), P.crossOrigin = "anonymous", P.src = u, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, HybridRendererBase.prototype.appendElementInPos = function(u, P) {
                    var D = u.getBaseElement();
                    if (D) {
                        var S = this.layers[P];
                        if (S.ddd && this.supports3d) this.addTo3dContainer(D, P);
                        else if (this.threeDElements) this.addTo3dContainer(D, P);
                        else {
                            for (var E, T, M = 0; M < P;) this.elements[M] && !0 !== this.elements[M] && this.elements[M].getBaseElement && (T = this.elements[M], E = (this.layers[M].ddd ? this.getThreeDContainerByPos(M) : T.getBaseElement()) || E), M += 1;
                            E ? S.ddd && this.supports3d || this.layerElement.insertBefore(D, E) : S.ddd && this.supports3d || this.layerElement.appendChild(D)
                        }
                    }
                }, HybridRendererBase.prototype.createShape = function(u) {
                    return this.supports3d ? new HShapeElement(u, this.globalData, this) : new SVGShapeElement(u, this.globalData, this)
                }, HybridRendererBase.prototype.createText = function(u) {
                    return this.supports3d ? new HTextElement(u, this.globalData, this) : new SVGTextLottieElement(u, this.globalData, this)
                }, HybridRendererBase.prototype.createCamera = function(u) {
                    return this.camera = new HCameraElement(u, this.globalData, this), this.camera
                }, HybridRendererBase.prototype.createImage = function(u) {
                    return this.supports3d ? new HImageElement(u, this.globalData, this) : new IImageElement(u, this.globalData, this)
                }, HybridRendererBase.prototype.createSolid = function(u) {
                    return this.supports3d ? new HSolidElement(u, this.globalData, this) : new ISolidElement(u, this.globalData, this)
                }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(u) {
                    for (var P = 0, D = this.threeDElements.length; P < D;) {
                        if (this.threeDElements[P].startPos <= u && this.threeDElements[P].endPos >= u) return this.threeDElements[P].perspectiveElem;
                        P += 1
                    }
                    return null
                }, HybridRendererBase.prototype.createThreeDContainer = function(u, P) {
                    var D, S, E = createTag("div");
                    styleDiv(E);
                    var T = createTag("div");
                    if (styleDiv(T), "3d" === P) {
                        (D = E.style).width = this.globalData.compSize.w + "px", D.height = this.globalData.compSize.h + "px";
                        var M = "50% 50%";
                        D.webkitTransformOrigin = M, D.mozTransformOrigin = M, D.transformOrigin = M;
                        var F = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        (S = T.style).transform = F, S.webkitTransform = F
                    }
                    E.appendChild(T);
                    var I = {
                        container: T,
                        perspectiveElem: E,
                        startPos: u,
                        endPos: u,
                        type: P
                    };
                    return this.threeDElements.push(I), I
                }, HybridRendererBase.prototype.build3dContainers = function() {
                    var u, P, D = this.layers.length,
                        S = "";
                    for (u = 0; u < D; u += 1) this.layers[u].ddd && 3 !== this.layers[u].ty ? ("3d" !== S && (S = "3d", P = this.createThreeDContainer(u, "3d")), P.endPos = Math.max(P.endPos, u)) : ("2d" !== S && (S = "2d", P = this.createThreeDContainer(u, "2d")), P.endPos = Math.max(P.endPos, u));
                    for (u = (D = this.threeDElements.length) - 1; u >= 0; u -= 1) this.resizerElem.appendChild(this.threeDElements[u].perspectiveElem)
                }, HybridRendererBase.prototype.addTo3dContainer = function(u, P) {
                    for (var D = 0, S = this.threeDElements.length; D < S;) {
                        if (P <= this.threeDElements[D].endPos) {
                            for (var E, T = this.threeDElements[D].startPos; T < P;) this.elements[T] && this.elements[T].getBaseElement && (E = this.elements[T].getBaseElement()), T += 1;
                            E ? this.threeDElements[D].container.insertBefore(u, E) : this.threeDElements[D].container.appendChild(u);
                            break
                        }
                        D += 1
                    }
                }, HybridRendererBase.prototype.configAnimation = function(u) {
                    var P = createTag("div"),
                        D = this.animationItem.wrapper,
                        S = P.style;
                    S.width = u.w + "px", S.height = u.h + "px", this.resizerElem = P, styleDiv(P), S.transformStyle = "flat", S.mozTransformStyle = "flat", S.webkitTransformStyle = "flat", this.renderConfig.className && P.setAttribute("class", this.renderConfig.className), D.appendChild(P), S.overflow = "hidden";
                    var E = createNS("svg");
                    E.setAttribute("width", "1"), E.setAttribute("height", "1"), styleDiv(E), this.resizerElem.appendChild(E);
                    var T = createNS("defs");
                    E.appendChild(T), this.data = u, this.setupGlobalData(u, E), this.globalData.defs = T, this.layers = u.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                }, HybridRendererBase.prototype.destroy = function() {
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                    var u, P = this.layers ? this.layers.length : 0;
                    for (u = 0; u < P; u += 1) this.elements[u] && this.elements[u].destroy && this.elements[u].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, HybridRendererBase.prototype.updateContainerSize = function() {
                    var u, P, D, S, E = this.animationItem.wrapper.offsetWidth,
                        T = this.animationItem.wrapper.offsetHeight,
                        M = E / T;
                    this.globalData.compSize.w / this.globalData.compSize.h > M ? (u = E / this.globalData.compSize.w, P = E / this.globalData.compSize.w, D = 0, S = (T - this.globalData.compSize.h * (E / this.globalData.compSize.w)) / 2) : (u = T / this.globalData.compSize.h, P = T / this.globalData.compSize.h, D = (E - this.globalData.compSize.w * (T / this.globalData.compSize.h)) / 2, S = 0);
                    var F = this.resizerElem.style;
                    F.webkitTransform = "matrix3d(" + u + ",0,0,0,0," + P + ",0,0,0,0,1,0," + D + "," + S + ",0,1)", F.transform = F.webkitTransform
                }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
                    this.resizerElem.style.display = "none"
                }, HybridRendererBase.prototype.show = function() {
                    this.resizerElem.style.display = "block"
                }, HybridRendererBase.prototype.initItems = function() {
                    if (this.buildAllItems(), this.camera) this.camera.setup();
                    else {
                        var u, P = this.globalData.compSize.w,
                            D = this.globalData.compSize.h,
                            S = this.threeDElements.length;
                        for (u = 0; u < S; u += 1) {
                            var E = this.threeDElements[u].perspectiveElem.style;
                            E.webkitPerspective = Math.sqrt(Math.pow(P, 2) + Math.pow(D, 2)) + "px", E.perspective = E.webkitPerspective
                        }
                    }
                }, HybridRendererBase.prototype.searchExtraCompositions = function(u) {
                    var P, D = u.length,
                        S = createTag("div");
                    for (P = 0; P < D; P += 1)
                        if (u[P].xt) {
                            var E = this.createComp(u[P], S, this.globalData.comp, null);
                            E.initExpressions(), this.globalData.projectInterface.registerComposition(E)
                        }
                }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                    this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                }, HCompElement.prototype.addTo3dContainer = function(u, P) {
                    for (var D, S = 0; S < P;) this.elements[S] && this.elements[S].getBaseElement && (D = this.elements[S].getBaseElement()), S += 1;
                    D ? this.layerElement.insertBefore(u, D) : this.layerElement.appendChild(u)
                }, HCompElement.prototype.createComp = function(u) {
                    return this.supports3d ? new HCompElement(u, this.globalData, this) : new SVGCompElement(u, this.globalData, this)
                }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(u) {
                    return this.supports3d ? new HCompElement(u, this.globalData, this) : new SVGCompElement(u, this.globalData, this)
                };
                var CompExpressionInterface = function() {
                        return function(u) {
                            function P(P) {
                                for (var D = 0, S = u.layers.length; D < S;) {
                                    if (u.layers[D].nm === P || u.layers[D].ind === P) return u.elements[D].layerInterface;
                                    D += 1
                                }
                                return null
                            }
                            return Object.defineProperty(P, "_name", {
                                value: u.data.nm
                            }), P.layer = P, P.pixelAspect = 1, P.height = u.data.h || u.globalData.compSize.h, P.width = u.data.w || u.globalData.compSize.w, P.pixelAspect = 1, P.frameDuration = 1 / u.globalData.frameRate, P.displayStartTime = 0, P.numLayers = u.layers.length, P
                        }
                    }(),
                    Expressions = function() {
                        var u = {};

                        function P(u) {
                            var P = 0,
                                D = [];

                            function S() {
                                P += 1
                            }

                            function E() {
                                0 == (P -= 1) && M()
                            }

                            function T(u) {
                                -1 === D.indexOf(u) && D.push(u)
                            }

                            function M() {
                                var u, P = D.length;
                                for (u = 0; u < P; u += 1) D[u].release();
                                D.length = 0
                            }
                            u.renderer.compInterface = CompExpressionInterface(u.renderer), u.renderer.globalData.projectInterface.registerComposition(u.renderer), u.renderer.globalData.pushExpression = S, u.renderer.globalData.popExpression = E, u.renderer.globalData.registerExpressionProperty = T
                        }
                        return u.initExpressions = P, u
                    }(),
                    MaskManagerInterface = function() {
                        function u(u, P) {
                            this._mask = u, this._data = P
                        }
                        return Object.defineProperty(u.prototype, "maskPath", {
                                get: function() {
                                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                                }
                            }), Object.defineProperty(u.prototype, "maskOpacity", {
                                get: function() {
                                    return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                                }
                            }),
                            function(P) {
                                var D, S = createSizedArray(P.viewData.length),
                                    E = P.viewData.length;
                                for (D = 0; D < E; D += 1) S[D] = new u(P.viewData[D], P.masksProperties[D]);
                                return function(u) {
                                    for (D = 0; D < E;) {
                                        if (P.masksProperties[D].nm === u) return S[D];
                                        D += 1
                                    }
                                    return null
                                }
                            }
                    }(),
                    ExpressionPropertyInterface = function() {
                        var u = {
                                pv: 0,
                                v: 0,
                                mult: 1
                            },
                            P = {
                                pv: [0, 0, 0],
                                v: [0, 0, 0],
                                mult: 1
                            };

                        function D(u, P, D) {
                            Object.defineProperty(u, "velocity", {
                                get: function() {
                                    return P.getVelocityAtTime(P.comp.currentFrame)
                                }
                            }), u.numKeys = P.keyframes ? P.keyframes.length : 0, u.key = function(S) {
                                if (!u.numKeys) return 0;
                                var E = "";
                                E = "s" in P.keyframes[S - 1] ? P.keyframes[S - 1].s : "e" in P.keyframes[S - 2] ? P.keyframes[S - 2].e : P.keyframes[S - 2].s;
                                var T = "unidimensional" === D ? new Number(E) : Object.assign({}, E);
                                return T.time = P.keyframes[S - 1].t / P.elem.comp.globalData.frameRate, T.value = "unidimensional" === D ? E[0] : E, T
                            }, u.valueAtTime = P.getValueAtTime, u.speedAtTime = P.getSpeedAtTime, u.velocityAtTime = P.getVelocityAtTime, u.propertyGroup = P.propertyGroup
                        }

                        function S(P) {
                            P && "pv" in P || (P = u);
                            var S = 1 / P.mult,
                                E = P.pv * S,
                                T = new Number(E);
                            return T.value = E, D(T, P, "unidimensional"),
                                function() {
                                    return P.k && P.getValue(), E = P.v * S, T.value !== E && ((T = new Number(E)).value = E, D(T, P, "unidimensional")), T
                                }
                        }

                        function E(u) {
                            u && "pv" in u || (u = P);
                            var S = 1 / u.mult,
                                E = u.data && u.data.l || u.pv.length,
                                T = createTypedArray("float32", E),
                                M = createTypedArray("float32", E);
                            return T.value = M, D(T, u, "multidimensional"),
                                function() {
                                    u.k && u.getValue();
                                    for (var P = 0; P < E; P += 1) M[P] = u.v[P] * S, T[P] = M[P];
                                    return T
                                }
                        }

                        function T() {
                            return u
                        }
                        return function(u) {
                            return u ? "unidimensional" === u.propType ? S(u) : E(u) : T
                        }
                    }(),
                    TransformExpressionInterface = function() {
                        return function(u) {
                            var P, D, S, E;

                            function T(u) {
                                switch (u) {
                                    case "scale":
                                    case "Scale":
                                    case "ADBE Scale":
                                    case 6:
                                        return T.scale;
                                    case "rotation":
                                    case "Rotation":
                                    case "ADBE Rotation":
                                    case "ADBE Rotate Z":
                                    case 10:
                                        return T.rotation;
                                    case "ADBE Rotate X":
                                        return T.xRotation;
                                    case "ADBE Rotate Y":
                                        return T.yRotation;
                                    case "position":
                                    case "Position":
                                    case "ADBE Position":
                                    case 2:
                                        return T.position;
                                    case "ADBE Position_0":
                                        return T.xPosition;
                                    case "ADBE Position_1":
                                        return T.yPosition;
                                    case "ADBE Position_2":
                                        return T.zPosition;
                                    case "anchorPoint":
                                    case "AnchorPoint":
                                    case "Anchor Point":
                                    case "ADBE AnchorPoint":
                                    case 1:
                                        return T.anchorPoint;
                                    case "opacity":
                                    case "Opacity":
                                    case 11:
                                        return T.opacity;
                                    default:
                                        return null
                                }
                            }
                            return Object.defineProperty(T, "rotation", {
                                get: ExpressionPropertyInterface(u.r || u.rz)
                            }), Object.defineProperty(T, "zRotation", {
                                get: ExpressionPropertyInterface(u.rz || u.r)
                            }), Object.defineProperty(T, "xRotation", {
                                get: ExpressionPropertyInterface(u.rx)
                            }), Object.defineProperty(T, "yRotation", {
                                get: ExpressionPropertyInterface(u.ry)
                            }), Object.defineProperty(T, "scale", {
                                get: ExpressionPropertyInterface(u.s)
                            }), u.p ? E = ExpressionPropertyInterface(u.p) : (P = ExpressionPropertyInterface(u.px), D = ExpressionPropertyInterface(u.py), u.pz && (S = ExpressionPropertyInterface(u.pz))), Object.defineProperty(T, "position", {
                                get: function() {
                                    return u.p ? E() : [P(), D(), S ? S() : 0]
                                }
                            }), Object.defineProperty(T, "xPosition", {
                                get: ExpressionPropertyInterface(u.px)
                            }), Object.defineProperty(T, "yPosition", {
                                get: ExpressionPropertyInterface(u.py)
                            }), Object.defineProperty(T, "zPosition", {
                                get: ExpressionPropertyInterface(u.pz)
                            }), Object.defineProperty(T, "anchorPoint", {
                                get: ExpressionPropertyInterface(u.a)
                            }), Object.defineProperty(T, "opacity", {
                                get: ExpressionPropertyInterface(u.o)
                            }), Object.defineProperty(T, "skew", {
                                get: ExpressionPropertyInterface(u.sk)
                            }), Object.defineProperty(T, "skewAxis", {
                                get: ExpressionPropertyInterface(u.sa)
                            }), Object.defineProperty(T, "orientation", {
                                get: ExpressionPropertyInterface(u.or)
                            }), T
                        }
                    }(),
                    LayerExpressionInterface = function() {
                        function u(u) {
                            var P = new Matrix;
                            return void 0 !== u ? this._elem.finalTransform.mProp.getValueAtTime(u).clone(P) : this._elem.finalTransform.mProp.applyToMatrix(P), P
                        }

                        function P(u, P) {
                            var D = this.getMatrix(P);
                            return D.props[12] = 0, D.props[13] = 0, D.props[14] = 0, this.applyPoint(D, u)
                        }

                        function D(u, P) {
                            var D = this.getMatrix(P);
                            return this.applyPoint(D, u)
                        }

                        function S(u, P) {
                            var D = this.getMatrix(P);
                            return D.props[12] = 0, D.props[13] = 0, D.props[14] = 0, this.invertPoint(D, u)
                        }

                        function E(u, P) {
                            var D = this.getMatrix(P);
                            return this.invertPoint(D, u)
                        }

                        function T(u, P) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var D, S = this._elem.hierarchy.length;
                                for (D = 0; D < S; D += 1) this._elem.hierarchy[D].finalTransform.mProp.applyToMatrix(u)
                            }
                            return u.applyToPointArray(P[0], P[1], P[2] || 0)
                        }

                        function M(u, P) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var D, S = this._elem.hierarchy.length;
                                for (D = 0; D < S; D += 1) this._elem.hierarchy[D].finalTransform.mProp.applyToMatrix(u)
                            }
                            return u.inversePoint(P)
                        }

                        function F(u) {
                            var P = new Matrix;
                            if (P.reset(), this._elem.finalTransform.mProp.applyToMatrix(P), this._elem.hierarchy && this._elem.hierarchy.length) {
                                var D, S = this._elem.hierarchy.length;
                                for (D = 0; D < S; D += 1) this._elem.hierarchy[D].finalTransform.mProp.applyToMatrix(P)
                            }
                            return P.inversePoint(u)
                        }

                        function I() {
                            return [1, 1, 1, 1]
                        }
                        return function(L) {
                            function V(u) {
                                O.mask = new MaskManagerInterface(u, L)
                            }

                            function R(u) {
                                O.effect = u
                            }

                            function O(u) {
                                switch (u) {
                                    case "ADBE Root Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return O.shapeInterface;
                                    case 1:
                                    case 6:
                                    case "Transform":
                                    case "transform":
                                    case "ADBE Transform Group":
                                        return N;
                                    case 4:
                                    case "ADBE Effect Parade":
                                    case "effects":
                                    case "Effects":
                                        return O.effect;
                                    case "ADBE Text Properties":
                                        return O.textInterface;
                                    default:
                                        return null
                                }
                            }
                            O.getMatrix = u, O.invertPoint = M, O.applyPoint = T, O.toWorld = D, O.toWorldVec = P, O.fromWorld = E, O.fromWorldVec = S, O.toComp = D, O.fromComp = F, O.sampleImage = I, O.sourceRectAtTime = L.sourceRectAtTime.bind(L), O._elem = L;
                            var N, G = getDescriptor(N = TransformExpressionInterface(L.finalTransform.mProp), "anchorPoint");
                            return Object.defineProperties(O, {
                                hasParent: {
                                    get: function() {
                                        return L.hierarchy.length
                                    }
                                },
                                parent: {
                                    get: function() {
                                        return L.hierarchy[0].layerInterface
                                    }
                                },
                                rotation: getDescriptor(N, "rotation"),
                                scale: getDescriptor(N, "scale"),
                                position: getDescriptor(N, "position"),
                                opacity: getDescriptor(N, "opacity"),
                                anchorPoint: G,
                                anchor_point: G,
                                transform: {
                                    get: function() {
                                        return N
                                    }
                                },
                                active: {
                                    get: function() {
                                        return L.isInRange
                                    }
                                }
                            }), O.startTime = L.data.st, O.index = L.data.ind, O.source = L.data.refId, O.height = 0 === L.data.ty ? L.data.h : 100, O.width = 0 === L.data.ty ? L.data.w : 100, O.inPoint = L.data.ip / L.comp.globalData.frameRate, O.outPoint = L.data.op / L.comp.globalData.frameRate, O._name = L.data.nm, O.registerMaskInterface = V, O.registerEffectsInterface = R, O
                        }
                    }(),
                    propertyGroupFactory = function() {
                        return function(u, P) {
                            return function(D) {
                                return (D = void 0 === D ? 1 : D) <= 0 ? u : P(D - 1)
                            }
                        }
                    }(),
                    PropertyInterface = function() {
                        return function(u, P) {
                            var D = {
                                _name: u
                            };
                            return function(u) {
                                return (u = void 0 === u ? 1 : u) <= 0 ? D : P(u - 1)
                            }
                        }
                    }(),
                    EffectsExpressionInterface = function() {
                        function u(D, S, E, T) {
                            function M(u) {
                                for (var P = D.ef, S = 0, E = P.length; S < E;) {
                                    if (u === P[S].nm || u === P[S].mn || u === P[S].ix) {
                                        if (5 === P[S].ty) return L[S];
                                        return L[S]()
                                    }
                                    S += 1
                                }
                                throw Error()
                            }
                            var F, I = propertyGroupFactory(M, E),
                                L = [],
                                V = D.ef.length;
                            for (F = 0; F < V; F += 1) 5 === D.ef[F].ty ? L.push(u(D.ef[F], S.effectElements[F], S.effectElements[F].propertyGroup, T)) : L.push(P(S.effectElements[F], D.ef[F].ty, T, I));
                            return "ADBE Color Control" === D.mn && Object.defineProperty(M, "color", {
                                get: function() {
                                    return L[0]()
                                }
                            }), Object.defineProperties(M, {
                                numProperties: {
                                    get: function() {
                                        return D.np
                                    }
                                },
                                _name: {
                                    value: D.nm
                                },
                                propertyGroup: {
                                    value: I
                                }
                            }), M.enabled = 0 !== D.en, M.active = M.enabled, M
                        }

                        function P(u, P, D, S) {
                            var E = ExpressionPropertyInterface(u.p);

                            function T() {
                                return 10 === P ? D.comp.compInterface(u.p.v) : E()
                            }
                            return u.p.setGroupProperty && u.p.setGroupProperty(PropertyInterface("", S)), T
                        }
                        return {
                            createEffectsInterface: function(P, D) {
                                if (P.effectsManager) {
                                    var S, E = [],
                                        T = P.data.ef,
                                        M = P.effectsManager.effectElements.length;
                                    for (S = 0; S < M; S += 1) E.push(u(T[S], P.effectsManager.effectElements[S], D, P));
                                    var F = P.data.ef || [],
                                        I = function(u) {
                                            for (S = 0, M = F.length; S < M;) {
                                                if (u === F[S].nm || u === F[S].mn || u === F[S].ix) return E[S];
                                                S += 1
                                            }
                                            return null
                                        };
                                    return Object.defineProperty(I, "numProperties", {
                                        get: function() {
                                            return F.length
                                        }
                                    }), I
                                }
                                return null
                            }
                        }
                    }(),
                    ShapePathInterface = function() {
                        return function(u, P, D) {
                            var S = P.sh;

                            function E(u) {
                                return "Shape" === u || "shape" === u || "Path" === u || "path" === u || "ADBE Vector Shape" === u || 2 === u ? E.path : null
                            }
                            var T = propertyGroupFactory(E, D);
                            return S.setGroupProperty(PropertyInterface("Path", T)), Object.defineProperties(E, {
                                path: {
                                    get: function() {
                                        return S.k && S.getValue(), S
                                    }
                                },
                                shape: {
                                    get: function() {
                                        return S.k && S.getValue(), S
                                    }
                                },
                                _name: {
                                    value: u.nm
                                },
                                ix: {
                                    value: u.ix
                                },
                                propertyIndex: {
                                    value: u.ix
                                },
                                mn: {
                                    value: u.mn
                                },
                                propertyGroup: {
                                    value: D
                                }
                            }), E
                        }
                    }(),
                    ShapeExpressionInterface = function() {
                        function u(u, P, I) {
                            var G, W = [],
                                Y = u ? u.length : 0;
                            for (G = 0; G < Y; G += 1) "gr" === u[G].ty ? W.push(D(u[G], P[G], I)) : "fl" === u[G].ty ? W.push(S(u[G], P[G], I)) : "st" === u[G].ty ? W.push(M(u[G], P[G], I)) : "tm" === u[G].ty ? W.push(F(u[G], P[G], I)) : "tr" === u[G].ty || ("el" === u[G].ty ? W.push(L(u[G], P[G], I)) : "sr" === u[G].ty ? W.push(V(u[G], P[G], I)) : "sh" === u[G].ty ? W.push(ShapePathInterface(u[G], P[G], I)) : "rc" === u[G].ty ? W.push(R(u[G], P[G], I)) : "rd" === u[G].ty ? W.push(O(u[G], P[G], I)) : "rp" === u[G].ty ? W.push(N(u[G], P[G], I)) : "gf" === u[G].ty ? W.push(E(u[G], P[G], I)) : W.push(T(u[G], P[G], I)));
                            return W
                        }

                        function P(P, D, S) {
                            var E, T = function(u) {
                                for (var P = 0, D = E.length; P < D;) {
                                    if (E[P]._name === u || E[P].mn === u || E[P].propertyIndex === u || E[P].ix === u || E[P].ind === u) return E[P];
                                    P += 1
                                }
                                return "number" == typeof u ? E[u - 1] : null
                            };
                            T.propertyGroup = propertyGroupFactory(T, S), E = u(P.it, D.it, T.propertyGroup), T.numProperties = E.length;
                            var M = I(P.it[P.it.length - 1], D.it[D.it.length - 1], T.propertyGroup);
                            return T.transform = M, T.propertyIndex = P.cix, T._name = P.nm, T
                        }

                        function D(u, D, S) {
                            var E = function(u) {
                                switch (u) {
                                    case "ADBE Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return E.content;
                                    default:
                                        return E.transform
                                }
                            };
                            E.propertyGroup = propertyGroupFactory(E, S);
                            var T = P(u, D, E.propertyGroup),
                                M = I(u.it[u.it.length - 1], D.it[D.it.length - 1], E.propertyGroup);
                            return E.content = T, E.transform = M, Object.defineProperty(E, "_name", {
                                get: function() {
                                    return u.nm
                                }
                            }), E.numProperties = u.np, E.propertyIndex = u.ix, E.nm = u.nm, E.mn = u.mn, E
                        }

                        function S(u, P, D) {
                            function S(u) {
                                return "Color" === u || "color" === u ? S.color : "Opacity" === u || "opacity" === u ? S.opacity : null
                            }
                            return Object.defineProperties(S, {
                                color: {
                                    get: ExpressionPropertyInterface(P.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(P.o)
                                },
                                _name: {
                                    value: u.nm
                                },
                                mn: {
                                    value: u.mn
                                }
                            }), P.c.setGroupProperty(PropertyInterface("Color", D)), P.o.setGroupProperty(PropertyInterface("Opacity", D)), S
                        }

                        function E(u, P, D) {
                            function S(u) {
                                return "Start Point" === u || "start point" === u ? S.startPoint : "End Point" === u || "end point" === u ? S.endPoint : "Opacity" === u || "opacity" === u ? S.opacity : null
                            }
                            return Object.defineProperties(S, {
                                startPoint: {
                                    get: ExpressionPropertyInterface(P.s)
                                },
                                endPoint: {
                                    get: ExpressionPropertyInterface(P.e)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(P.o)
                                },
                                type: {
                                    get: function() {
                                        return "a"
                                    }
                                },
                                _name: {
                                    value: u.nm
                                },
                                mn: {
                                    value: u.mn
                                }
                            }), P.s.setGroupProperty(PropertyInterface("Start Point", D)), P.e.setGroupProperty(PropertyInterface("End Point", D)), P.o.setGroupProperty(PropertyInterface("Opacity", D)), S
                        }

                        function T() {
                            return function() {
                                return null
                            }
                        }

                        function M(u, P, D) {
                            var S, E = propertyGroupFactory(L, D),
                                T = propertyGroupFactory(I, E);

                            function M(D) {
                                Object.defineProperty(I, u.d[D].nm, {
                                    get: ExpressionPropertyInterface(P.d.dataProps[D].p)
                                })
                            }
                            var F = u.d ? u.d.length : 0,
                                I = {};
                            for (S = 0; S < F; S += 1) M(S), P.d.dataProps[S].p.setGroupProperty(T);

                            function L(u) {
                                return "Color" === u || "color" === u ? L.color : "Opacity" === u || "opacity" === u ? L.opacity : "Stroke Width" === u || "stroke width" === u ? L.strokeWidth : null
                            }
                            return Object.defineProperties(L, {
                                color: {
                                    get: ExpressionPropertyInterface(P.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(P.o)
                                },
                                strokeWidth: {
                                    get: ExpressionPropertyInterface(P.w)
                                },
                                dash: {
                                    get: function() {
                                        return I
                                    }
                                },
                                _name: {
                                    value: u.nm
                                },
                                mn: {
                                    value: u.mn
                                }
                            }), P.c.setGroupProperty(PropertyInterface("Color", E)), P.o.setGroupProperty(PropertyInterface("Opacity", E)), P.w.setGroupProperty(PropertyInterface("Stroke Width", E)), L
                        }

                        function F(u, P, D) {
                            function S(P) {
                                return P === u.e.ix || "End" === P || "end" === P ? S.end : P === u.s.ix ? S.start : P === u.o.ix ? S.offset : null
                            }
                            var E = propertyGroupFactory(S, D);
                            return S.propertyIndex = u.ix, P.s.setGroupProperty(PropertyInterface("Start", E)), P.e.setGroupProperty(PropertyInterface("End", E)), P.o.setGroupProperty(PropertyInterface("Offset", E)), S.propertyIndex = u.ix, S.propertyGroup = D, Object.defineProperties(S, {
                                start: {
                                    get: ExpressionPropertyInterface(P.s)
                                },
                                end: {
                                    get: ExpressionPropertyInterface(P.e)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(P.o)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), S.mn = u.mn, S
                        }

                        function I(u, P, D) {
                            function S(P) {
                                return u.a.ix === P || "Anchor Point" === P ? S.anchorPoint : u.o.ix === P || "Opacity" === P ? S.opacity : u.p.ix === P || "Position" === P ? S.position : u.r.ix === P || "Rotation" === P || "ADBE Vector Rotation" === P ? S.rotation : u.s.ix === P || "Scale" === P ? S.scale : u.sk && u.sk.ix === P || "Skew" === P ? S.skew : u.sa && u.sa.ix === P || "Skew Axis" === P ? S.skewAxis : null
                            }
                            var E = propertyGroupFactory(S, D);
                            return P.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", E)), P.transform.mProps.p.setGroupProperty(PropertyInterface("Position", E)), P.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", E)), P.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", E)), P.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", E)), P.transform.mProps.sk && (P.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", E)), P.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", E))), P.transform.op.setGroupProperty(PropertyInterface("Opacity", E)), Object.defineProperties(S, {
                                opacity: {
                                    get: ExpressionPropertyInterface(P.transform.mProps.o)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(P.transform.mProps.p)
                                },
                                anchorPoint: {
                                    get: ExpressionPropertyInterface(P.transform.mProps.a)
                                },
                                scale: {
                                    get: ExpressionPropertyInterface(P.transform.mProps.s)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(P.transform.mProps.r)
                                },
                                skew: {
                                    get: ExpressionPropertyInterface(P.transform.mProps.sk)
                                },
                                skewAxis: {
                                    get: ExpressionPropertyInterface(P.transform.mProps.sa)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), S.ty = "tr", S.mn = u.mn, S.propertyGroup = D, S
                        }

                        function L(u, P, D) {
                            function S(P) {
                                return u.p.ix === P ? S.position : u.s.ix === P ? S.size : null
                            }
                            var E = propertyGroupFactory(S, D);
                            S.propertyIndex = u.ix;
                            var T = "tm" === P.sh.ty ? P.sh.prop : P.sh;
                            return T.s.setGroupProperty(PropertyInterface("Size", E)), T.p.setGroupProperty(PropertyInterface("Position", E)), Object.defineProperties(S, {
                                size: {
                                    get: ExpressionPropertyInterface(T.s)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(T.p)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), S.mn = u.mn, S
                        }

                        function V(u, P, D) {
                            function S(P) {
                                return u.p.ix === P ? S.position : u.r.ix === P ? S.rotation : u.pt.ix === P ? S.points : u.or.ix === P || "ADBE Vector Star Outer Radius" === P ? S.outerRadius : u.os.ix === P ? S.outerRoundness : u.ir && (u.ir.ix === P || "ADBE Vector Star Inner Radius" === P) ? S.innerRadius : u.is && u.is.ix === P ? S.innerRoundness : null
                            }
                            var E = propertyGroupFactory(S, D),
                                T = "tm" === P.sh.ty ? P.sh.prop : P.sh;
                            return S.propertyIndex = u.ix, T.or.setGroupProperty(PropertyInterface("Outer Radius", E)), T.os.setGroupProperty(PropertyInterface("Outer Roundness", E)), T.pt.setGroupProperty(PropertyInterface("Points", E)), T.p.setGroupProperty(PropertyInterface("Position", E)), T.r.setGroupProperty(PropertyInterface("Rotation", E)), u.ir && (T.ir.setGroupProperty(PropertyInterface("Inner Radius", E)), T.is.setGroupProperty(PropertyInterface("Inner Roundness", E))), Object.defineProperties(S, {
                                position: {
                                    get: ExpressionPropertyInterface(T.p)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(T.r)
                                },
                                points: {
                                    get: ExpressionPropertyInterface(T.pt)
                                },
                                outerRadius: {
                                    get: ExpressionPropertyInterface(T.or)
                                },
                                outerRoundness: {
                                    get: ExpressionPropertyInterface(T.os)
                                },
                                innerRadius: {
                                    get: ExpressionPropertyInterface(T.ir)
                                },
                                innerRoundness: {
                                    get: ExpressionPropertyInterface(T.is)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), S.mn = u.mn, S
                        }

                        function R(u, P, D) {
                            function S(P) {
                                return u.p.ix === P ? S.position : u.r.ix === P ? S.roundness : u.s.ix === P || "Size" === P || "ADBE Vector Rect Size" === P ? S.size : null
                            }
                            var E = propertyGroupFactory(S, D),
                                T = "tm" === P.sh.ty ? P.sh.prop : P.sh;
                            return S.propertyIndex = u.ix, T.p.setGroupProperty(PropertyInterface("Position", E)), T.s.setGroupProperty(PropertyInterface("Size", E)), T.r.setGroupProperty(PropertyInterface("Rotation", E)), Object.defineProperties(S, {
                                position: {
                                    get: ExpressionPropertyInterface(T.p)
                                },
                                roundness: {
                                    get: ExpressionPropertyInterface(T.r)
                                },
                                size: {
                                    get: ExpressionPropertyInterface(T.s)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), S.mn = u.mn, S
                        }

                        function O(u, P, D) {
                            function S(P) {
                                return u.r.ix === P || "Round Corners 1" === P ? S.radius : null
                            }
                            var E = propertyGroupFactory(S, D),
                                T = P;
                            return S.propertyIndex = u.ix, T.rd.setGroupProperty(PropertyInterface("Radius", E)), Object.defineProperties(S, {
                                radius: {
                                    get: ExpressionPropertyInterface(T.rd)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), S.mn = u.mn, S
                        }

                        function N(u, P, D) {
                            function S(P) {
                                return u.c.ix === P || "Copies" === P ? S.copies : u.o.ix === P || "Offset" === P ? S.offset : null
                            }
                            var E = propertyGroupFactory(S, D),
                                T = P;
                            return S.propertyIndex = u.ix, T.c.setGroupProperty(PropertyInterface("Copies", E)), T.o.setGroupProperty(PropertyInterface("Offset", E)), Object.defineProperties(S, {
                                copies: {
                                    get: ExpressionPropertyInterface(T.c)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(T.o)
                                },
                                _name: {
                                    value: u.nm
                                }
                            }), S.mn = u.mn, S
                        }
                        return function(P, D, S) {
                            var E;

                            function T(u) {
                                if ("number" == typeof u) return 0 === (u = void 0 === u ? 1 : u) ? S : E[u - 1];
                                for (var P = 0, D = E.length; P < D;) {
                                    if (E[P]._name === u) return E[P];
                                    P += 1
                                }
                                return null
                            }

                            function M() {
                                return S
                            }
                            return T.propertyGroup = propertyGroupFactory(T, M), E = u(P, D, T.propertyGroup), T.numProperties = E.length, T._name = "Contents", T
                        }
                    }(),
                    TextExpressionInterface = function() {
                        return function(u) {
                            var P;

                            function D(u) {
                                return "ADBE Text Document" === u ? D.sourceText : null
                            }
                            return Object.defineProperty(D, "sourceText", {
                                get: function() {
                                    u.textProperty.getValue();
                                    var D = u.textProperty.currentData.t;
                                    return P && D === P.value || ((P = new String(D)).value = D || new String(D), Object.defineProperty(P, "style", {
                                        get: function() {
                                            return {
                                                fillColor: u.textProperty.currentData.fc
                                            }
                                        }
                                    })), P
                                }
                            }), D
                        }
                    }();

                function _typeof$2(u) {
                    return (_typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }
                var FootageInterface = function() {
                        var u = function(u) {
                                var P = "",
                                    D = u.getFootageData();

                                function S(u) {
                                    if (D[u]) return (P = u, "object" === _typeof$2(D = D[u])) ? S : D;
                                    var E = u.indexOf(P);
                                    return -1 !== E ? "object" === _typeof$2(D = D[parseInt(u.substr(E + P.length), 10)]) ? S : D : ""
                                }
                                return function() {
                                    return P = "", D = u.getFootageData(), S
                                }
                            },
                            P = function(P) {
                                function D(u) {
                                    return "Outline" === u ? D.outlineInterface() : null
                                }
                                return D._name = "Outline", D.outlineInterface = u(P), D
                            };
                        return function(u) {
                            function D(u) {
                                return "Data" === u ? D.dataInterface : null
                            }
                            return D._name = "Data", D.dataInterface = P(u), D
                        }
                    }(),
                    interfaces = {
                        layer: LayerExpressionInterface,
                        effects: EffectsExpressionInterface,
                        comp: CompExpressionInterface,
                        shape: ShapeExpressionInterface,
                        text: TextExpressionInterface,
                        footage: FootageInterface
                    };

                function getInterface(u) {
                    return interfaces[u] || null
                }

                function _typeof$1(u) {
                    return (_typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }

                function seedRandom(u, P) {
                    var D, S = this,
                        E = 256,
                        T = 6,
                        M = 52,
                        F = "random",
                        I = P.pow(E, T),
                        L = P.pow(2, M),
                        V = 2 * L,
                        R = E - 1;

                    function O(D, S, M) {
                        var R = [],
                            O = Y(W((S = !0 === S ? {
                                entropy: !0
                            } : S || {}).entropy ? [D, X(u)] : null === D ? H() : D, 3), R),
                            K = new N(R),
                            J = function() {
                                for (var u = K.g(T), P = I, D = 0; u < L;) u = (u + D) * E, P *= E, D = K.g(1);
                                for (; u >= V;) u /= 2, P /= 2, D >>>= 1;
                                return (u + D) / P
                            };
                        return J.int32 = function() {
                            return 0 | K.g(4)
                        }, J.quick = function() {
                            return K.g(4) / 4294967296
                        }, J.double = J, Y(X(K.S), u), (S.pass || M || function(u, D, S, E) {
                            return (E && (E.S && G(E, K), u.state = function() {
                                return G(K, {})
                            }), S) ? (P[F] = u, D) : u
                        })(J, O, "global" in S ? S.global : this == P, S.state)
                    }

                    function N(u) {
                        var P, D = u.length,
                            S = this,
                            T = 0,
                            M = S.i = S.j = 0,
                            F = S.S = [];
                        for (D || (u = [D++]); T < E;) F[T] = T++;
                        for (T = 0; T < E; T++) F[T] = F[M = R & M + u[T % D] + (P = F[T])], F[M] = P;
                        S.g = function(u) {
                            for (var P, D = 0, T = S.i, M = S.j, F = S.S; u--;) P = F[T = R & T + 1], D = D * E + F[R & (F[T] = F[M = R & M + P]) + (F[M] = P)];
                            return S.i = T, S.j = M, D
                        }
                    }

                    function G(u, P) {
                        return P.i = u.i, P.j = u.j, P.S = u.S.slice(), P
                    }

                    function W(u, P) {
                        var D, S = [],
                            E = _typeof$1(u);
                        if (P && "object" == E)
                            for (D in u) try {
                                S.push(W(u[D], P - 1))
                            } catch (u) {}
                        return S.length ? S : "string" == E ? u : u + "\x00"
                    }

                    function Y(u, P) {
                        for (var D, S = u + "", E = 0; E < S.length;) P[R & E] = R & (D ^= 19 * P[R & E]) + S.charCodeAt(E++);
                        return X(P)
                    }

                    function H() {
                        try {
                            if (D) return X(D.randomBytes(E));
                            var P = new Uint8Array(E);
                            return (S.crypto || S.msCrypto).getRandomValues(P), X(P)
                        } catch (P) {
                            var T = S.navigator,
                                M = T && T.plugins;
                            return [+new Date, S, M, S.screen, X(u)]
                        }
                    }

                    function X(u) {
                        return String.fromCharCode.apply(0, u)
                    }
                    P["seed" + F] = O, Y(P.random(), u)
                }

                function initialize$2(u) {
                    seedRandom([], u)
                }
                var propTypes = {
                    SHAPE: "shape"
                };

                function _typeof(u) {
                    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                        return typeof u
                    } : function(u) {
                        return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                    })(u)
                }
                var ExpressionManager = function() {
                        var ob = {},
                            Math = BMMath,
                            window = null,
                            document = null,
                            XMLHttpRequest = null,
                            fetch = null,
                            frames = null;

                        function $bm_isInstanceOfArray(u) {
                            return u.constructor === Array || u.constructor === Float32Array
                        }

                        function isNumerable(u, P) {
                            return "number" === u || "boolean" === u || "string" === u || P instanceof Number
                        }

                        function $bm_neg(u) {
                            var P = _typeof(u);
                            if ("number" === P || "boolean" === P || u instanceof Number) return -u;
                            if ($bm_isInstanceOfArray(u)) {
                                var D, S = u.length,
                                    E = [];
                                for (D = 0; D < S; D += 1) E[D] = -u[D];
                                return E
                            }
                            return u.propType ? u.v : -u
                        }
                        initialize$2(BMMath);
                        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                        function sum(u, P) {
                            var D = _typeof(u),
                                S = _typeof(P);
                            if ("string" === D || "string" === S || isNumerable(D, u) && isNumerable(S, P)) return u + P;
                            if ($bm_isInstanceOfArray(u) && isNumerable(S, P)) return u = u.slice(0), u[0] += P, u;
                            if (isNumerable(D, u) && $bm_isInstanceOfArray(P)) return (P = P.slice(0))[0] = u + P[0], P;
                            if ($bm_isInstanceOfArray(u) && $bm_isInstanceOfArray(P)) {
                                for (var E = 0, T = u.length, M = P.length, F = []; E < T || E < M;)("number" == typeof u[E] || u[E] instanceof Number) && ("number" == typeof P[E] || P[E] instanceof Number) ? F[E] = u[E] + P[E] : F[E] = void 0 === P[E] ? u[E] : u[E] || P[E], E += 1;
                                return F
                            }
                            return 0
                        }
                        var add = sum;

                        function sub(u, P) {
                            var D = _typeof(u),
                                S = _typeof(P);
                            if (isNumerable(D, u) && isNumerable(S, P)) return "string" === D && (u = parseInt(u, 10)), "string" === S && (P = parseInt(P, 10)), u - P;
                            if ($bm_isInstanceOfArray(u) && isNumerable(S, P)) return u = u.slice(0), u[0] -= P, u;
                            if (isNumerable(D, u) && $bm_isInstanceOfArray(P)) return (P = P.slice(0))[0] = u - P[0], P;
                            if ($bm_isInstanceOfArray(u) && $bm_isInstanceOfArray(P)) {
                                for (var E = 0, T = u.length, M = P.length, F = []; E < T || E < M;)("number" == typeof u[E] || u[E] instanceof Number) && ("number" == typeof P[E] || P[E] instanceof Number) ? F[E] = u[E] - P[E] : F[E] = void 0 === P[E] ? u[E] : u[E] || P[E], E += 1;
                                return F
                            }
                            return 0
                        }

                        function mul(u, P) {
                            var D, S, E, T = _typeof(u),
                                M = _typeof(P);
                            if (isNumerable(T, u) && isNumerable(M, P)) return u * P;
                            if ($bm_isInstanceOfArray(u) && isNumerable(M, P)) {
                                for (S = 0, D = createTypedArray("float32", E = u.length); S < E; S += 1) D[S] = u[S] * P;
                                return D
                            }
                            if (isNumerable(T, u) && $bm_isInstanceOfArray(P)) {
                                for (S = 0, D = createTypedArray("float32", E = P.length); S < E; S += 1) D[S] = u * P[S];
                                return D
                            }
                            return 0
                        }

                        function div(u, P) {
                            var D, S, E, T = _typeof(u),
                                M = _typeof(P);
                            if (isNumerable(T, u) && isNumerable(M, P)) return u / P;
                            if ($bm_isInstanceOfArray(u) && isNumerable(M, P)) {
                                for (S = 0, D = createTypedArray("float32", E = u.length); S < E; S += 1) D[S] = u[S] / P;
                                return D
                            }
                            if (isNumerable(T, u) && $bm_isInstanceOfArray(P)) {
                                for (S = 0, D = createTypedArray("float32", E = P.length); S < E; S += 1) D[S] = u / P[S];
                                return D
                            }
                            return 0
                        }

                        function mod(u, P) {
                            return "string" == typeof u && (u = parseInt(u, 10)), "string" == typeof P && (P = parseInt(P, 10)), u % P
                        }
                        var $bm_sum = sum,
                            $bm_sub = sub,
                            $bm_mul = mul,
                            $bm_div = div,
                            $bm_mod = mod;

                        function clamp(u, P, D) {
                            if (P > D) {
                                var S = D;
                                D = P, P = S
                            }
                            return Math.min(Math.max(u, P), D)
                        }

                        function radiansToDegrees(u) {
                            return u / degToRads
                        }
                        var radians_to_degrees = radiansToDegrees;

                        function degreesToRadians(u) {
                            return u * degToRads
                        }
                        var degrees_to_radians = radiansToDegrees,
                            helperLengthArray = [0, 0, 0, 0, 0, 0];

                        function length(u, P) {
                            if ("number" == typeof u || u instanceof Number) return P = P || 0, Math.abs(u - P);
                            P || (P = helperLengthArray);
                            var D, S = Math.min(u.length, P.length),
                                E = 0;
                            for (D = 0; D < S; D += 1) E += Math.pow(P[D] - u[D], 2);
                            return Math.sqrt(E)
                        }

                        function normalize(u) {
                            return div(u, length(u))
                        }

                        function rgbToHsl(u) {
                            var P, D, S = u[0],
                                E = u[1],
                                T = u[2],
                                M = Math.max(S, E, T),
                                F = Math.min(S, E, T),
                                I = (M + F) / 2;
                            if (M === F) P = 0, D = 0;
                            else {
                                var L = M - F;
                                switch (D = I > .5 ? L / (2 - M - F) : L / (M + F), M) {
                                    case S:
                                        P = (E - T) / L + (E < T ? 6 : 0);
                                        break;
                                    case E:
                                        P = (T - S) / L + 2;
                                        break;
                                    case T:
                                        P = (S - E) / L + 4
                                }
                                P /= 6
                            }
                            return [P, D, I, u[3]]
                        }

                        function hue2rgb(u, P, D) {
                            return (D < 0 && (D += 1), D > 1 && (D -= 1), D < 1 / 6) ? u + (P - u) * 6 * D : D < .5 ? P : D < 2 / 3 ? u + (P - u) * (2 / 3 - D) * 6 : u
                        }

                        function hslToRgb(u) {
                            var P, D, S, E = u[0],
                                T = u[1],
                                M = u[2];
                            if (0 === T) P = M, S = M, D = M;
                            else {
                                var F = M < .5 ? M * (1 + T) : M + T - M * T,
                                    I = 2 * M - F;
                                P = hue2rgb(I, F, E + 1 / 3), D = hue2rgb(I, F, E), S = hue2rgb(I, F, E - 1 / 3)
                            }
                            return [P, D, S, u[3]]
                        }

                        function linear(u, P, D, S, E) {
                            if ((void 0 === S || void 0 === E) && (S = P, E = D, P = 0, D = 1), D < P) {
                                var T, M = D;
                                D = P, P = M
                            }
                            if (u <= P) return S;
                            if (u >= D) return E;
                            var F = D === P ? 0 : (u - P) / (D - P);
                            if (!S.length) return S + (E - S) * F;
                            var I = S.length,
                                L = createTypedArray("float32", I);
                            for (T = 0; T < I; T += 1) L[T] = S[T] + (E[T] - S[T]) * F;
                            return L
                        }

                        function random(u, P) {
                            if (void 0 === P && (void 0 === u ? (u = 0, P = 1) : (P = u, u = void 0)), P.length) {
                                var D, S = P.length;
                                u || (u = createTypedArray("float32", S));
                                var E = createTypedArray("float32", S),
                                    T = BMMath.random();
                                for (D = 0; D < S; D += 1) E[D] = u[D] + T * (P[D] - u[D]);
                                return E
                            }
                            return void 0 === u && (u = 0), u + BMMath.random() * (P - u)
                        }

                        function createPath(u, P, D, S) {
                            var E, T, M, F = u.length,
                                I = shapePool.newElement();
                            I.setPathData(!!S, F);
                            var L = [0, 0];
                            for (E = 0; E < F; E += 1) T = P && P[E] ? P[E] : L, M = D && D[E] ? D[E] : L, I.setTripleAt(u[E][0], u[E][1], M[0] + u[E][0], M[1] + u[E][1], T[0] + u[E][0], T[1] + u[E][1], E, !0);
                            return I
                        }

                        function initiateExpression(elem, data, property) {
                            function noOp(u) {
                                return u
                            }
                            if (!elem.globalData.renderConfig.runExpressions) return noOp;
                            var transform, $bm_transform, content, effect, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, time, velocity, value, text, textIndex, textTotal, selectorValue, parent, val = data.x,
                                needsVelocity = /velocity(?![\w\d])/.test(val),
                                _needsRandom = -1 !== val.indexOf("random"),
                                elemType = elem.data.ty,
                                thisProperty = property;
                            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                get: function() {
                                    return thisProperty.v
                                }
                            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                width = elem.data.sw ? elem.data.sw : 0,
                                height = elem.data.sh ? elem.data.sh : 0,
                                name = elem.data.nm,
                                expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                numKeys = property.kf ? data.k.length : 0,
                                active = !this.data || !0 !== this.data.hd,
                                wiggle = (function(u, P) {
                                    var D, S, E = this.pv.length ? this.pv.length : 1,
                                        T = createTypedArray("float32", E);
                                    u = 5;
                                    var M = Math.floor(time * u);
                                    for (D = 0, S = 0; D < M;) {
                                        for (S = 0; S < E; S += 1) T[S] += -P + 2 * P * BMMath.random();
                                        D += 1
                                    }
                                    var F = time * u,
                                        I = F - Math.floor(F),
                                        L = createTypedArray("float32", E);
                                    if (E > 1) {
                                        for (S = 0; S < E; S += 1) L[S] = this.pv[S] + T[S] + (-P + 2 * P * BMMath.random()) * I;
                                        return L
                                    }
                                    return this.pv + T[0] + (-P + 2 * P * BMMath.random()) * I
                                }).bind(this);

                            function loopInDuration(u, P) {
                                return loopIn(u, P, !0)
                            }

                            function loopOutDuration(u, P) {
                                return loopOut(u, P, !0)
                            }
                            thisProperty.loopIn && (loop_in = loopIn = thisProperty.loopIn.bind(thisProperty)), thisProperty.loopOut && (loop_out = loopOut = thisProperty.loopOut.bind(thisProperty)), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

                            function lookAt(u, P) {
                                var D = [P[0] - u[0], P[1] - u[1], P[2] - u[2]],
                                    S = Math.atan2(D[0], Math.sqrt(D[1] * D[1] + D[2] * D[2])) / degToRads;
                                return [-Math.atan2(D[1], D[2]) / degToRads, S, 0]
                            }

                            function easeOut(u, P, D, S, E) {
                                return applyEase(easeOutBez, u, P, D, S, E)
                            }

                            function easeIn(u, P, D, S, E) {
                                return applyEase(easeInBez, u, P, D, S, E)
                            }

                            function ease(u, P, D, S, E) {
                                return applyEase(easeInOutBez, u, P, D, S, E)
                            }

                            function applyEase(u, P, D, S, E, T) {
                                void 0 === E ? (E = D, T = S) : P = (P - D) / (S - D), P > 1 ? P = 1 : P < 0 && (P = 0);
                                var M = u(P);
                                if ($bm_isInstanceOfArray(E)) {
                                    var F, I = E.length,
                                        L = createTypedArray("float32", I);
                                    for (F = 0; F < I; F += 1) L[F] = (T[F] - E[F]) * M + E[F];
                                    return L
                                }
                                return (T - E) * M + E
                            }

                            function nearestKey(u) {
                                var P, D, S, E = data.k.length;
                                if (data.k.length && "number" != typeof data.k[0]) {
                                    if (D = -1, (u *= elem.comp.globalData.frameRate) < data.k[0].t) D = 1, S = data.k[0].t;
                                    else {
                                        for (P = 0; P < E - 1; P += 1) {
                                            if (u === data.k[P].t) {
                                                D = P + 1, S = data.k[P].t;
                                                break
                                            }
                                            if (u > data.k[P].t && u < data.k[P + 1].t) {
                                                u - data.k[P].t > data.k[P + 1].t - u ? (D = P + 2, S = data.k[P + 1].t) : (D = P + 1, S = data.k[P].t);
                                                break
                                            }
                                        } - 1 === D && (D = P + 1, S = data.k[P].t)
                                    }
                                } else D = 0, S = 0;
                                var T = {};
                                return T.index = D, T.time = S / elem.comp.globalData.frameRate, T
                            }

                            function key(u) {
                                if (!data.k.length || "number" == typeof data.k[0]) throw Error("The property has no keyframe at index " + u);
                                u -= 1, P = {
                                    time: data.k[u].t / elem.comp.globalData.frameRate,
                                    value: []
                                };
                                var P, D, S, E = Object.prototype.hasOwnProperty.call(data.k[u], "s") ? data.k[u].s : data.k[u - 1].e;
                                for (D = 0, S = E.length; D < S; D += 1) P[D] = E[D], P.value[D] = E[D];
                                return P
                            }

                            function framesToTime(u, P) {
                                return P || (P = elem.comp.globalData.frameRate), u / P
                            }

                            function timeToFrames(u, P) {
                                return u || 0 === u || (u = time), P || (P = elem.comp.globalData.frameRate), u * P
                            }

                            function seedRandom(u) {
                                BMMath.seedrandom(randSeed + u)
                            }

                            function sourceRectAtTime() {
                                return elem.sourceRectAtTime()
                            }

                            function substring(u, P) {
                                return "string" == typeof value ? void 0 === P ? value.substring(u) : value.substring(u, P) : ""
                            }

                            function substr(u, P) {
                                return "string" == typeof value ? void 0 === P ? value.substr(u) : value.substr(u, P) : ""
                            }

                            function posterizeTime(u) {
                                value = valueAtTime(time = 0 === u ? 0 : Math.floor(time * u) / u)
                            }
                            var index = elem.data.ind,
                                hasParent = !!(elem.hierarchy && elem.hierarchy.length),
                                randSeed = Math.floor(1e6 * Math.random()),
                                globalData = elem.globalData;

                            function executeExpression(u) {
                                return (value = u, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType) ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), !transform && ($bm_transform = transform = elem.layerInterface("ADBE Transform Group"), transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !!(elem.hierarchy && elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
                            }
                            return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
                        }
                        return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath], ob
                    }(),
                    expressionHelpers = function() {
                        return {
                            searchExpressions: function(u, P, D) {
                                P.x && (D.k = !0, D.x = !0, D.initiateExpression = ExpressionManager.initiateExpression, D.effectsSequence.push(D.initiateExpression(u, P, D).bind(D)))
                            },
                            getSpeedAtTime: function(u) {
                                var P, D = -.01,
                                    S = this.getValueAtTime(u),
                                    E = this.getValueAtTime(u + D),
                                    T = 0;
                                if (S.length) {
                                    for (P = 0; P < S.length; P += 1) T += Math.pow(E[P] - S[P], 2);
                                    T = 100 * Math.sqrt(T)
                                } else T = 0;
                                return T
                            },
                            getVelocityAtTime: function(u) {
                                if (void 0 !== this.vel) return this.vel;
                                var P, D, S = -.001,
                                    E = this.getValueAtTime(u),
                                    T = this.getValueAtTime(u + S);
                                if (E.length)
                                    for (D = 0, P = createTypedArray("float32", E.length); D < E.length; D += 1) P[D] = (T[D] - E[D]) / S;
                                else P = (T - E) / S;
                                return P
                            },
                            getValueAtTime: function(u) {
                                return u *= this.elem.globalData.frameRate, (u -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < u ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(u, this._cachingAtTime), this._cachingAtTime.lastFrame = u), this._cachingAtTime.value
                            },
                            getStaticValueAtTime: function() {
                                return this.pv
                            },
                            setGroupProperty: function(u) {
                                this.propertyGroup = u
                            }
                        }
                    }();

                function addPropertyDecorator() {
                    function u(u, P, D) {
                        if (!this.k || !this.keyframes) return this.pv;
                        u = u ? u.toLowerCase() : "";
                        var S, E, T, M, F, I = this.comp.renderedFrame,
                            L = this.keyframes,
                            V = L[L.length - 1].t;
                        if (I <= V) return this.pv;
                        if (D ? (S = P ? Math.abs(V - this.elem.comp.globalData.frameRate * P) : Math.max(0, V - this.elem.data.ip), E = V - S) : ((!P || P > L.length - 1) && (P = L.length - 1), S = V - (E = L[L.length - 1 - P].t)), "pingpong" === u) {
                            if (Math.floor((I - E) / S) % 2 != 0) return this.getValueAtTime((S - (I - E) % S + E) / this.comp.globalData.frameRate, 0)
                        } else if ("offset" === u) {
                            var R = this.getValueAtTime(E / this.comp.globalData.frameRate, 0),
                                O = this.getValueAtTime(V / this.comp.globalData.frameRate, 0),
                                N = this.getValueAtTime(((I - E) % S + E) / this.comp.globalData.frameRate, 0),
                                G = Math.floor((I - E) / S);
                            if (this.pv.length) {
                                for (T = 0, M = (F = Array(R.length)).length; T < M; T += 1) F[T] = (O[T] - R[T]) * G + N[T];
                                return F
                            }
                            return (O - R) * G + N
                        } else if ("continue" === u) {
                            var W = this.getValueAtTime(V / this.comp.globalData.frameRate, 0),
                                Y = this.getValueAtTime((V - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (T = 0, M = (F = Array(W.length)).length; T < M; T += 1) F[T] = W[T] + (W[T] - Y[T]) * ((I - V) / this.comp.globalData.frameRate) / 5e-4;
                                return F
                            }
                            return W + (W - Y) * ((I - V) / .001)
                        }
                        return this.getValueAtTime(((I - E) % S + E) / this.comp.globalData.frameRate, 0)
                    }

                    function P(u, P, D) {
                        if (!this.k) return this.pv;
                        u = u ? u.toLowerCase() : "";
                        var S, E, T, M, F, I = this.comp.renderedFrame,
                            L = this.keyframes,
                            V = L[0].t;
                        if (I >= V) return this.pv;
                        if (D ? (S = P ? Math.abs(this.elem.comp.globalData.frameRate * P) : Math.max(0, this.elem.data.op - V), E = V + S) : ((!P || P > L.length - 1) && (P = L.length - 1), S = (E = L[P].t) - V), "pingpong" === u) {
                            if (Math.floor((V - I) / S) % 2 == 0) return this.getValueAtTime(((V - I) % S + V) / this.comp.globalData.frameRate, 0)
                        } else if ("offset" === u) {
                            var R = this.getValueAtTime(V / this.comp.globalData.frameRate, 0),
                                O = this.getValueAtTime(E / this.comp.globalData.frameRate, 0),
                                N = this.getValueAtTime((S - (V - I) % S + V) / this.comp.globalData.frameRate, 0),
                                G = Math.floor((V - I) / S) + 1;
                            if (this.pv.length) {
                                for (T = 0, M = (F = Array(R.length)).length; T < M; T += 1) F[T] = N[T] - (O[T] - R[T]) * G;
                                return F
                            }
                            return N - (O - R) * G
                        } else if ("continue" === u) {
                            var W = this.getValueAtTime(V / this.comp.globalData.frameRate, 0),
                                Y = this.getValueAtTime((V + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (T = 0, M = (F = Array(W.length)).length; T < M; T += 1) F[T] = W[T] + (W[T] - Y[T]) * (V - I) / .001;
                                return F
                            }
                            return W + (W - Y) * (V - I) / .001
                        }
                        return this.getValueAtTime((S - ((V - I) % S + V)) / this.comp.globalData.frameRate, 0)
                    }

                    function D(u, P) {
                        if (!this.k || (u = .5 * (u || .4), (P = Math.floor(P || 5)) <= 1)) return this.pv;
                        var D, S, E = this.comp.renderedFrame / this.comp.globalData.frameRate,
                            T = E - u,
                            M = E + u,
                            F = P > 1 ? (M - T) / (P - 1) : 1,
                            I = 0,
                            L = 0;
                        for (D = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; I < P;) {
                            if (S = this.getValueAtTime(T + I * F), this.pv.length)
                                for (L = 0; L < this.pv.length; L += 1) D[L] += S[L];
                            else D += S;
                            I += 1
                        }
                        if (this.pv.length)
                            for (L = 0; L < this.pv.length; L += 1) D[L] /= P;
                        else D /= P;
                        return D
                    }

                    function S(u) {
                        this._transformCachingAtTime || (this._transformCachingAtTime = {
                            v: new Matrix
                        });
                        var P = this._transformCachingAtTime.v;
                        if (P.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                            var D = this.a.getValueAtTime(u);
                            P.translate(-D[0] * this.a.mult, -D[1] * this.a.mult, D[2] * this.a.mult)
                        }
                        if (this.appliedTransformations < 2) {
                            var S = this.s.getValueAtTime(u);
                            P.scale(S[0] * this.s.mult, S[1] * this.s.mult, S[2] * this.s.mult)
                        }
                        if (this.sk && this.appliedTransformations < 3) {
                            var E = this.sk.getValueAtTime(u),
                                T = this.sa.getValueAtTime(u);
                            P.skewFromAxis(-E * this.sk.mult, T * this.sa.mult)
                        }
                        if (this.r && this.appliedTransformations < 4) {
                            var M = this.r.getValueAtTime(u);
                            P.rotate(-M * this.r.mult)
                        } else if (!this.r && this.appliedTransformations < 4) {
                            var F = this.rz.getValueAtTime(u),
                                I = this.ry.getValueAtTime(u),
                                L = this.rx.getValueAtTime(u),
                                V = this.or.getValueAtTime(u);
                            P.rotateZ(-F * this.rz.mult).rotateY(I * this.ry.mult).rotateX(L * this.rx.mult).rotateZ(-V[2] * this.or.mult).rotateY(V[1] * this.or.mult).rotateX(V[0] * this.or.mult)
                        }
                        if (this.data.p && this.data.p.s) {
                            var R = this.px.getValueAtTime(u),
                                O = this.py.getValueAtTime(u);
                            if (this.data.p.z) {
                                var N = this.pz.getValueAtTime(u);
                                P.translate(R * this.px.mult, O * this.py.mult, -N * this.pz.mult)
                            } else P.translate(R * this.px.mult, O * this.py.mult, 0)
                        } else {
                            var G = this.p.getValueAtTime(u);
                            P.translate(G[0] * this.p.mult, G[1] * this.p.mult, -G[2] * this.p.mult)
                        }
                        return P
                    }

                    function E() {
                        return this.v.clone(new Matrix)
                    }
                    var T = TransformPropertyFactory.getTransformProperty;
                    TransformPropertyFactory.getTransformProperty = function(u, P, D) {
                        var M = T(u, P, D);
                        return M.dynamicProperties.length ? M.getValueAtTime = S.bind(M) : M.getValueAtTime = E.bind(M), M.setGroupProperty = expressionHelpers.setGroupProperty, M
                    };
                    var M = PropertyFactory.getProp;

                    function F(u) {
                        return this._cachingAtTime || (this._cachingAtTime = {
                            shapeValue: shapePool.clone(this.pv),
                            lastIndex: 0,
                            lastTime: initialDefaultFrame
                        }), u *= this.elem.globalData.frameRate, (u -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < u ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = u, this.interpolateShape(u, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                    }
                    PropertyFactory.getProp = function(S, E, T, F, I) {
                        var L = M(S, E, T, F, I);
                        L.kf ? L.getValueAtTime = expressionHelpers.getValueAtTime.bind(L) : L.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(L), L.setGroupProperty = expressionHelpers.setGroupProperty, L.loopOut = u, L.loopIn = P, L.smooth = D, L.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(L), L.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(L), L.numKeys = 1 === E.a ? E.k.length : 0, L.propertyIndex = E.ix;
                        var V = 0;
                        return 0 !== T && (V = createTypedArray("float32", 1 === E.a ? E.k[0].s.length : E.k.length)), L._cachingAtTime = {
                            lastFrame: initialDefaultFrame,
                            lastIndex: 0,
                            value: V
                        }, expressionHelpers.searchExpressions(S, E, L), L.k && I.addDynamicProperty(L), L
                    };
                    var I = ShapePropertyFactory.getConstructorFunction(),
                        L = ShapePropertyFactory.getKeyframedConstructorFunction();

                    function V() {}
                    V.prototype = {
                        vertices: function(u, P) {
                            this.k && this.getValue();
                            var D, S = this.v;
                            void 0 !== P && (S = this.getValueAtTime(P, 0));
                            var E = S._length,
                                T = S[u],
                                M = S.v,
                                F = createSizedArray(E);
                            for (D = 0; D < E; D += 1) "i" === u || "o" === u ? F[D] = [T[D][0] - M[D][0], T[D][1] - M[D][1]] : F[D] = [T[D][0], T[D][1]];
                            return F
                        },
                        points: function(u) {
                            return this.vertices("v", u)
                        },
                        inTangents: function(u) {
                            return this.vertices("i", u)
                        },
                        outTangents: function(u) {
                            return this.vertices("o", u)
                        },
                        isClosed: function() {
                            return this.v.c
                        },
                        pointOnPath: function(u, P) {
                            var D, S = this.v;
                            void 0 !== P && (S = this.getValueAtTime(P, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(S));
                            for (var E = this._segmentsLength, T = E.lengths, M = E.totalLength * u, F = 0, I = T.length, L = 0; F < I;) {
                                if (L + T[F].addedLength > M) {
                                    var V = F,
                                        R = S.c && F === I - 1 ? 0 : F + 1,
                                        O = (M - L) / T[F].addedLength;
                                    D = bez.getPointInSegment(S.v[V], S.v[R], S.o[V], S.i[R], O, T[F]);
                                    break
                                }
                                L += T[F].addedLength, F += 1
                            }
                            return D || (D = S.c ? [S.v[0][0], S.v[0][1]] : [S.v[S._length - 1][0], S.v[S._length - 1][1]]), D
                        },
                        vectorOnPath: function(u, P, D) {
                            1 == u ? u = this.v.c : 0 == u && (u = .999);
                            var S = this.pointOnPath(u, P),
                                E = this.pointOnPath(u + .001, P),
                                T = E[0] - S[0],
                                M = E[1] - S[1],
                                F = Math.sqrt(Math.pow(T, 2) + Math.pow(M, 2));
                            return 0 === F ? [0, 0] : "tangent" === D ? [T / F, M / F] : [-M / F, T / F]
                        },
                        tangentOnPath: function(u, P) {
                            return this.vectorOnPath(u, P, "tangent")
                        },
                        normalOnPath: function(u, P) {
                            return this.vectorOnPath(u, P, "normal")
                        },
                        setGroupProperty: expressionHelpers.setGroupProperty,
                        getValueAtTime: expressionHelpers.getStaticValueAtTime
                    }, extendPrototype([V], I), extendPrototype([V], L), L.prototype.getValueAtTime = F, L.prototype.initiateExpression = ExpressionManager.initiateExpression;
                    var R = ShapePropertyFactory.getShapeProp;
                    ShapePropertyFactory.getShapeProp = function(u, P, D, S, E) {
                        var T = R(u, P, D, S, E);
                        return T.propertyIndex = P.ix, T.lock = !1, 3 === D ? expressionHelpers.searchExpressions(u, P.pt, T) : 4 === D && expressionHelpers.searchExpressions(u, P.ks, T), T.k && u.addDynamicProperty(T), T
                    }
                }

                function initialize$1() {
                    addPropertyDecorator()
                }

                function addDecorator() {
                    function u() {
                        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                    }
                    TextProperty.prototype.getExpressionValue = function(u, P) {
                        var D = this.calculateExpression(P);
                        if (u.t !== D) {
                            var S = {};
                            return this.copyData(S, u), S.t = D.toString(), S.__complete = !1, S
                        }
                        return u
                    }, TextProperty.prototype.searchProperty = function() {
                        var u = this.searchKeyframes(),
                            P = this.searchExpressions();
                        return this.kf = u || P, this.kf
                    }, TextProperty.prototype.searchExpressions = u
                }

                function initialize() {
                    addDecorator()
                }

                function SVGComposableEffect() {}
                SVGComposableEffect.prototype = {
                    createMergeNode: function(u, P) {
                        var D, S, E = createNS("feMerge");
                        for (E.setAttribute("result", u), S = 0; S < P.length; S += 1)(D = createNS("feMergeNode")).setAttribute("in", P[S]), E.appendChild(D), E.appendChild(D);
                        return E
                    }
                };
                var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

                function SVGTintFilter(u, P, D, S, E) {
                    this.filterManager = P;
                    var T = createNS("feColorMatrix");
                    T.setAttribute("type", "matrix"), T.setAttribute("color-interpolation-filters", "linearRGB"), T.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = T, T.setAttribute("result", S + "_tint_1"), u.appendChild(T), (T = createNS("feColorMatrix")).setAttribute("type", "matrix"), T.setAttribute("color-interpolation-filters", "sRGB"), T.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), T.setAttribute("result", S + "_tint_2"), u.appendChild(T), this.matrixFilter = T;
                    var M = this.createMergeNode(S, [E, S + "_tint_1", S + "_tint_2"]);
                    u.appendChild(M)
                }

                function SVGFillFilter(u, P, D, S) {
                    this.filterManager = P;
                    var E = createNS("feColorMatrix");
                    E.setAttribute("type", "matrix"), E.setAttribute("color-interpolation-filters", "sRGB"), E.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), E.setAttribute("result", S), u.appendChild(E), this.matrixFilter = E
                }

                function SVGStrokeEffect(u, P, D) {
                    this.initialized = !1, this.filterManager = P, this.elem = D, this.paths = []
                }

                function SVGTritoneFilter(u, P, D, S) {
                    this.filterManager = P;
                    var E = createNS("feColorMatrix");
                    E.setAttribute("type", "matrix"), E.setAttribute("color-interpolation-filters", "linearRGB"), E.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), u.appendChild(E);
                    var T = createNS("feComponentTransfer");
                    T.setAttribute("color-interpolation-filters", "sRGB"), T.setAttribute("result", S), this.matrixFilter = T;
                    var M = createNS("feFuncR");
                    M.setAttribute("type", "table"), T.appendChild(M), this.feFuncR = M;
                    var F = createNS("feFuncG");
                    F.setAttribute("type", "table"), T.appendChild(F), this.feFuncG = F;
                    var I = createNS("feFuncB");
                    I.setAttribute("type", "table"), T.appendChild(I), this.feFuncB = I, u.appendChild(T)
                }

                function SVGProLevelsFilter(u, P, D, S) {
                    this.filterManager = P;
                    var E = this.filterManager.effectElements,
                        T = createNS("feComponentTransfer");
                    (E[10].p.k || 0 !== E[10].p.v || E[11].p.k || 1 !== E[11].p.v || E[12].p.k || 1 !== E[12].p.v || E[13].p.k || 0 !== E[13].p.v || E[14].p.k || 1 !== E[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", T)), (E[17].p.k || 0 !== E[17].p.v || E[18].p.k || 1 !== E[18].p.v || E[19].p.k || 1 !== E[19].p.v || E[20].p.k || 0 !== E[20].p.v || E[21].p.k || 1 !== E[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", T)), (E[24].p.k || 0 !== E[24].p.v || E[25].p.k || 1 !== E[25].p.v || E[26].p.k || 1 !== E[26].p.v || E[27].p.k || 0 !== E[27].p.v || E[28].p.k || 1 !== E[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", T)), (E[31].p.k || 0 !== E[31].p.v || E[32].p.k || 1 !== E[32].p.v || E[33].p.k || 1 !== E[33].p.v || E[34].p.k || 0 !== E[34].p.v || E[35].p.k || 1 !== E[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", T)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (T.setAttribute("color-interpolation-filters", "sRGB"), u.appendChild(T)), (E[3].p.k || 0 !== E[3].p.v || E[4].p.k || 1 !== E[4].p.v || E[5].p.k || 1 !== E[5].p.v || E[6].p.k || 0 !== E[6].p.v || E[7].p.k || 1 !== E[7].p.v) && ((T = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), T.setAttribute("result", S), u.appendChild(T), this.feFuncRComposed = this.createFeFunc("feFuncR", T), this.feFuncGComposed = this.createFeFunc("feFuncG", T), this.feFuncBComposed = this.createFeFunc("feFuncB", T))
                }

                function SVGDropShadowEffect(u, P, D, S, E) {
                    var T = P.container.globalData.renderConfig.filterSize,
                        M = P.data.fs || T;
                    u.setAttribute("x", M.x || T.x), u.setAttribute("y", M.y || T.y), u.setAttribute("width", M.width || T.width), u.setAttribute("height", M.height || T.height), this.filterManager = P;
                    var F = createNS("feGaussianBlur");
                    F.setAttribute("in", "SourceAlpha"), F.setAttribute("result", S + "_drop_shadow_1"), F.setAttribute("stdDeviation", "0"), this.feGaussianBlur = F, u.appendChild(F);
                    var I = createNS("feOffset");
                    I.setAttribute("dx", "25"), I.setAttribute("dy", "0"), I.setAttribute("in", S + "_drop_shadow_1"), I.setAttribute("result", S + "_drop_shadow_2"), this.feOffset = I, u.appendChild(I);
                    var L = createNS("feFlood");
                    L.setAttribute("flood-color", "#00ff00"), L.setAttribute("flood-opacity", "1"), L.setAttribute("result", S + "_drop_shadow_3"), this.feFlood = L, u.appendChild(L);
                    var V = createNS("feComposite");
                    V.setAttribute("in", S + "_drop_shadow_3"), V.setAttribute("in2", S + "_drop_shadow_2"), V.setAttribute("operator", "in"), V.setAttribute("result", S + "_drop_shadow_4"), u.appendChild(V);
                    var R = this.createMergeNode(S, [S + "_drop_shadow_4", E]);
                    u.appendChild(R)
                }
                extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(u) {
                    if (u || this.filterManager._mdf) {
                        var P = this.filterManager.effectElements[0].p.v,
                            D = this.filterManager.effectElements[1].p.v,
                            S = this.filterManager.effectElements[2].p.v / 100;
                        this.linearFilter.setAttribute("values", linearFilterValue + " " + S + " 0"), this.matrixFilter.setAttribute("values", D[0] - P[0] + " 0 0 0 " + P[0] + " " + (D[1] - P[1]) + " 0 0 0 " + P[1] + " " + (D[2] - P[2]) + " 0 0 0 " + P[2] + " 0 0 0 1 0")
                    }
                }, SVGFillFilter.prototype.renderFrame = function(u) {
                    if (u || this.filterManager._mdf) {
                        var P = this.filterManager.effectElements[2].p.v,
                            D = this.filterManager.effectElements[6].p.v;
                        this.matrixFilter.setAttribute("values", "0 0 0 0 " + P[0] + " 0 0 0 0 " + P[1] + " 0 0 0 0 " + P[2] + " 0 0 0 " + D + " 0")
                    }
                }, SVGStrokeEffect.prototype.initialize = function() {
                    var u, P, D, S, E = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                    for (1 === this.filterManager.effectElements[1].p.v ? (S = this.elem.maskManager.masksProperties.length, D = 0) : S = (D = this.filterManager.effectElements[0].p.v - 1) + 1, (P = createNS("g")).setAttribute("fill", "none"), P.setAttribute("stroke-linecap", "round"), P.setAttribute("stroke-dashoffset", 1); D < S; D += 1) u = createNS("path"), P.appendChild(u), this.paths.push({
                        p: u,
                        m: D
                    });
                    if (3 === this.filterManager.effectElements[10].p.v) {
                        var T = createNS("mask"),
                            M = createElementID();
                        T.setAttribute("id", M), T.setAttribute("mask-type", "alpha"), T.appendChild(P), this.elem.globalData.defs.appendChild(T);
                        var F = createNS("g");
                        for (F.setAttribute("mask", "url(" + getLocationHref() + "#" + M + ")"); E[0];) F.appendChild(E[0]);
                        this.elem.layerElement.appendChild(F), this.masker = T, P.setAttribute("stroke", "#fff")
                    } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                        if (2 === this.filterManager.effectElements[10].p.v)
                            for (E = this.elem.layerElement.children || this.elem.layerElement.childNodes; E.length;) this.elem.layerElement.removeChild(E[0]);
                        this.elem.layerElement.appendChild(P), this.elem.layerElement.removeAttribute("mask"), P.setAttribute("stroke", "#fff")
                    }
                    this.initialized = !0, this.pathMasker = P
                }, SVGStrokeEffect.prototype.renderFrame = function(u) {
                    this.initialized || this.initialize();
                    var P = this.paths.length;
                    for (D = 0; D < P; D += 1)
                        if (-1 !== this.paths[D].m && (S = this.elem.maskManager.viewData[this.paths[D].m], E = this.paths[D].p, (u || this.filterManager._mdf || S.prop._mdf) && E.setAttribute("d", S.lastPath), u || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || S.prop._mdf)) {
                            if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                var D, S, E, T, M, F = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    I = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    L = E.getTotalLength();
                                T = "0 0 0 " + L * F + " ";
                                var V = Math.floor(L * (I - F) / (1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01));
                                for (M = 0; M < V; M += 1) T += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                                T += "0 " + 10 * L + " 0 0"
                            } else T = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                            E.setAttribute("stroke-dasharray", T)
                        }
                    if ((u || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (u || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (u || this.filterManager.effectElements[3].p._mdf)) {
                        var R = this.filterManager.effectElements[3].p.v;
                        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * R[0]) + "," + bmFloor(255 * R[1]) + "," + bmFloor(255 * R[2]) + ")")
                    }
                }, SVGTritoneFilter.prototype.renderFrame = function(u) {
                    if (u || this.filterManager._mdf) {
                        var P = this.filterManager.effectElements[0].p.v,
                            D = this.filterManager.effectElements[1].p.v,
                            S = this.filterManager.effectElements[2].p.v,
                            E = S[0] + " " + D[0] + " " + P[0],
                            T = S[1] + " " + D[1] + " " + P[1],
                            M = S[2] + " " + D[2] + " " + P[2];
                        this.feFuncR.setAttribute("tableValues", E), this.feFuncG.setAttribute("tableValues", T), this.feFuncB.setAttribute("tableValues", M)
                    }
                }, SVGProLevelsFilter.prototype.createFeFunc = function(u, P) {
                    var D = createNS(u);
                    return D.setAttribute("type", "table"), P.appendChild(D), D
                }, SVGProLevelsFilter.prototype.getTableValue = function(u, P, D, S, E) {
                    for (var T, M, F = 0, I = 256, L = Math.min(u, P), V = Math.max(u, P), R = Array.call(null, {
                            length: 256
                        }), O = 0, N = E - S, G = P - u; F <= 256;) M = (T = F / 256) <= L ? G < 0 ? E : S : T >= V ? G < 0 ? S : E : S + N * Math.pow((T - u) / G, 1 / D), R[O] = M, O += 1, F += 256 / (I - 1);
                    return R.join(" ")
                }, SVGProLevelsFilter.prototype.renderFrame = function(u) {
                    if (u || this.filterManager._mdf) {
                        var P, D = this.filterManager.effectElements;
                        this.feFuncRComposed && (u || D[3].p._mdf || D[4].p._mdf || D[5].p._mdf || D[6].p._mdf || D[7].p._mdf) && (P = this.getTableValue(D[3].p.v, D[4].p.v, D[5].p.v, D[6].p.v, D[7].p.v), this.feFuncRComposed.setAttribute("tableValues", P), this.feFuncGComposed.setAttribute("tableValues", P), this.feFuncBComposed.setAttribute("tableValues", P)), this.feFuncR && (u || D[10].p._mdf || D[11].p._mdf || D[12].p._mdf || D[13].p._mdf || D[14].p._mdf) && (P = this.getTableValue(D[10].p.v, D[11].p.v, D[12].p.v, D[13].p.v, D[14].p.v), this.feFuncR.setAttribute("tableValues", P)), this.feFuncG && (u || D[17].p._mdf || D[18].p._mdf || D[19].p._mdf || D[20].p._mdf || D[21].p._mdf) && (P = this.getTableValue(D[17].p.v, D[18].p.v, D[19].p.v, D[20].p.v, D[21].p.v), this.feFuncG.setAttribute("tableValues", P)), this.feFuncB && (u || D[24].p._mdf || D[25].p._mdf || D[26].p._mdf || D[27].p._mdf || D[28].p._mdf) && (P = this.getTableValue(D[24].p.v, D[25].p.v, D[26].p.v, D[27].p.v, D[28].p.v), this.feFuncB.setAttribute("tableValues", P)), this.feFuncA && (u || D[31].p._mdf || D[32].p._mdf || D[33].p._mdf || D[34].p._mdf || D[35].p._mdf) && (P = this.getTableValue(D[31].p.v, D[32].p.v, D[33].p.v, D[34].p.v, D[35].p.v), this.feFuncA.setAttribute("tableValues", P))
                    }
                }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(u) {
                    if (u || this.filterManager._mdf) {
                        if ((u || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), u || this.filterManager.effectElements[0].p._mdf) {
                            var P = this.filterManager.effectElements[0].p.v;
                            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * P[0]), Math.round(255 * P[1]), Math.round(255 * P[2])))
                        }
                        if ((u || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), u || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                            var D = this.filterManager.effectElements[3].p.v,
                                S = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                E = D * Math.cos(S),
                                T = D * Math.sin(S);
                            this.feOffset.setAttribute("dx", E), this.feOffset.setAttribute("dy", T)
                        }
                    }
                };
                var _svgMatteSymbols = [];

                function SVGMatte3Effect(u, P, D) {
                    this.initialized = !1, this.filterManager = P, this.filterElem = u, this.elem = D, D.matteElement = createNS("g"), D.matteElement.appendChild(D.layerElement), D.matteElement.appendChild(D.transformedElement), D.baseElement = D.matteElement
                }

                function SVGGaussianBlurEffect(u, P, D, S) {
                    u.setAttribute("x", "-100%"), u.setAttribute("y", "-100%"), u.setAttribute("width", "300%"), u.setAttribute("height", "300%"), this.filterManager = P;
                    var E = createNS("feGaussianBlur");
                    E.setAttribute("result", S), u.appendChild(E), this.feGaussianBlur = E
                }
                return SVGMatte3Effect.prototype.findSymbol = function(u) {
                    for (var P = 0, D = _svgMatteSymbols.length; P < D;) {
                        if (_svgMatteSymbols[P] === u) return _svgMatteSymbols[P];
                        P += 1
                    }
                    return null
                }, SVGMatte3Effect.prototype.replaceInParent = function(u, P) {
                    var D, S = u.layerElement.parentNode;
                    if (S) {
                        for (var E = S.children, T = 0, M = E.length; T < M && E[T] !== u.layerElement;) T += 1;
                        T <= M - 2 && (D = E[T + 1]);
                        var F = createNS("use");
                        F.setAttribute("href", "#" + P), D ? S.insertBefore(F, D) : S.appendChild(F)
                    }
                }, SVGMatte3Effect.prototype.setElementAsMask = function(u, P) {
                    if (!this.findSymbol(P)) {
                        var D = createElementID(),
                            S = createNS("mask");
                        S.setAttribute("id", P.layerId), S.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(P);
                        var E = u.globalData.defs;
                        E.appendChild(S);
                        var T = createNS("symbol");
                        T.setAttribute("id", D), this.replaceInParent(P, D), T.appendChild(P.layerElement), E.appendChild(T);
                        var M = createNS("use");
                        M.setAttribute("href", "#" + D), S.appendChild(M), P.data.hd = !1, P.show()
                    }
                    u.setMatte(P.layerId)
                }, SVGMatte3Effect.prototype.initialize = function() {
                    for (var u = this.filterManager.effectElements[0].p.v, P = this.elem.comp.elements, D = 0, S = P.length; D < S;) P[D] && P[D].data.ind === u && this.setElementAsMask(this.elem, P[D]), D += 1;
                    this.initialized = !0
                }, SVGMatte3Effect.prototype.renderFrame = function() {
                    this.initialized || this.initialize()
                }, SVGGaussianBlurEffect.prototype.renderFrame = function(u) {
                    if (u || this.filterManager._mdf) {
                        var P = .3,
                            D = this.filterManager.effectElements[0].p.v * P,
                            S = this.filterManager.effectElements[1].p.v,
                            E = 3 == S ? 0 : D,
                            T = 2 == S ? 0 : D;
                        this.feGaussianBlur.setAttribute("stdDeviation", E + " " + T);
                        var M = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                        this.feGaussianBlur.setAttribute("edgeMode", M)
                    }
                }, registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, !0), registerEffect(21, SVGFillFilter, !0), registerEffect(22, SVGStrokeEffect, !1), registerEffect(23, SVGTritoneFilter, !0), registerEffect(24, SVGProLevelsFilter, !0), registerEffect(25, SVGDropShadowEffect, !0), registerEffect(28, SVGMatte3Effect, !1), registerEffect(29, SVGGaussianBlurEffect, !0), lottie
            })
        }
    }
]);