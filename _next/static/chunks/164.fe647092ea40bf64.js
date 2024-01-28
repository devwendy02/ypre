(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [164], {
        98099: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(97117);

            function i(e, t, r) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t
            }

            function s(e, t, r) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t
            }

            function o(e, t) {
                return void 0 === t && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
            }

            function a(e, t) {
                return void 0 === t && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
            }

            function c(e, t) {
                return void 0 === t && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
            }

            function u(e, t) {
                return void 0 === t && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0
            }

            function l(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t
            }

            function h(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t
            }

            function f(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), l(e / 4294967296 >>> 0, t, r), l(e >>> 0, t, r + 4), t
            }

            function p(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), h(e >>> 0, t, r), h(e / 4294967296 >>> 0, t, r + 4), t
            }
            t.readInt16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16
            }, t.readUint16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0
            }, t.readInt16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16
            }, t.readUint16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0
            }, t.writeUint16BE = i, t.writeInt16BE = i, t.writeUint16LE = s, t.writeInt16LE = s, t.readInt32BE = o, t.readUint32BE = a, t.readInt32LE = c, t.readUint32LE = u, t.writeUint32BE = l, t.writeInt32BE = l, t.writeUint32LE = h, t.writeInt32LE = h, t.readInt64BE = function(e, t) {
                void 0 === t && (t = 0);
                var r = o(e, t),
                    n = o(e, t + 4);
                return 4294967296 * r + n - (n >> 31) * 4294967296
            }, t.readUint64BE = function(e, t) {
                return void 0 === t && (t = 0), 4294967296 * a(e, t) + a(e, t + 4)
            }, t.readInt64LE = function(e, t) {
                void 0 === t && (t = 0);
                var r = c(e, t);
                return 4294967296 * c(e, t + 4) + r - (r >> 31) * 4294967296
            }, t.readUint64LE = function(e, t) {
                void 0 === t && (t = 0);
                var r = u(e, t);
                return 4294967296 * u(e, t + 4) + r
            }, t.writeUint64BE = f, t.writeInt64BE = f, t.writeUint64LE = p, t.writeInt64LE = p, t.readUintBE = function(e, t, r) {
                if (void 0 === r && (r = 0), e % 8 != 0) throw Error("readUintBE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - r) throw Error("readUintBE: array is too short for the given bitLength");
                for (var n = 0, i = 1, s = e / 8 + r - 1; s >= r; s--) n += t[s] * i, i *= 256;
                return n
            }, t.readUintLE = function(e, t, r) {
                if (void 0 === r && (r = 0), e % 8 != 0) throw Error("readUintLE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - r) throw Error("readUintLE: array is too short for the given bitLength");
                for (var n = 0, i = 1, s = r; s < r + e / 8; s++) n += t[s] * i, i *= 256;
                return n
            }, t.writeUintBE = function(e, t, r, i) {
                if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === i && (i = 0), e % 8 != 0) throw Error("writeUintBE supports only bitLengths divisible by 8");
                if (!n.isSafeInteger(t)) throw Error("writeUintBE value must be an integer");
                for (var s = 1, o = e / 8 + i - 1; o >= i; o--) r[o] = t / s & 255, s *= 256;
                return r
            }, t.writeUintLE = function(e, t, r, i) {
                if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === i && (i = 0), e % 8 != 0) throw Error("writeUintLE supports only bitLengths divisible by 8");
                if (!n.isSafeInteger(t)) throw Error("writeUintLE value must be an integer");
                for (var s = 1, o = i; o < i + e / 8; o++) r[o] = t / s & 255, s *= 256;
                return r
            }, t.readFloat32BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
            }, t.readFloat32LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
            }, t.readFloat64BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
            }, t.readFloat64LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
            }, t.writeFloat32BE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e), t
            }, t.writeFloat32LE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e, !0), t
            }, t.writeFloat64BE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e), t
            }, t.writeFloat64LE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e, !0), t
            }
        },
        25439: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(98099),
                i = r(17309);

            function s(e, t, r, s, o) {
                if (void 0 === o && (o = 0), 32 !== e.length) throw Error("ChaCha: key size must be 32 bytes");
                if (s.length < r.length) throw Error("ChaCha: destination is shorter than source");
                if (0 === o) {
                    if (8 !== t.length && 12 !== t.length) throw Error("ChaCha nonce must be 8 or 12 bytes");
                    c = (a = new Uint8Array(16)).length - t.length, a.set(t, c)
                } else {
                    if (16 !== t.length) throw Error("ChaCha nonce with counter must be 16 bytes");
                    a = t, c = o
                }
                for (var a, c, u = new Uint8Array(64), l = 0; l < r.length; l += 64) {
                    ! function(e, t, r) {
                        for (var i = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], s = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], o = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], a = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], c = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], u = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], l = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], h = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], f = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], p = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], d = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], g = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], y = 1634760805, v = 857760878, m = 2036477234, _ = 1797285236, b = i, w = s, E = o, D = a, S = c, I = u, O = l, P = h, C = f, A = p, N = d, x = g, R = 0; R < 20; R += 2) C ^= y = y + b | 0, b ^= S = S + (C = C >>> 16 | C << 16) | 0, b = b >>> 20 | b << 12, A ^= v = v + w | 0, w ^= I = I + (A = A >>> 16 | A << 16) | 0, w = w >>> 20 | w << 12, N ^= m = m + E | 0, E ^= O = O + (N = N >>> 16 | N << 16) | 0, E = E >>> 20 | E << 12, x ^= _ = _ + D | 0, D ^= P = P + (x = x >>> 16 | x << 16) | 0, D = D >>> 20 | D << 12, N ^= m = m + E | 0, E ^= O = O + (N = N >>> 24 | N << 8) | 0, E = E >>> 25 | E << 7, x ^= _ = _ + D | 0, D ^= P = P + (x = x >>> 24 | x << 8) | 0, D = D >>> 25 | D << 7, A ^= v = v + w | 0, w ^= I = I + (A = A >>> 24 | A << 8) | 0, w = w >>> 25 | w << 7, C ^= y = y + b | 0, b ^= S = S + (C = C >>> 24 | C << 8) | 0, b = b >>> 25 | b << 7, x ^= y = y + w | 0, w ^= O = O + (x = x >>> 16 | x << 16) | 0, w = w >>> 20 | w << 12, C ^= v = v + E | 0, E ^= P = P + (C = C >>> 16 | C << 16) | 0, E = E >>> 20 | E << 12, A ^= m = m + D | 0, D ^= S = S + (A = A >>> 16 | A << 16) | 0, D = D >>> 20 | D << 12, N ^= _ = _ + b | 0, b ^= I = I + (N = N >>> 16 | N << 16) | 0, b = b >>> 20 | b << 12, A ^= m = m + D | 0, D ^= S = S + (A = A >>> 24 | A << 8) | 0, D = D >>> 25 | D << 7, N ^= _ = _ + b | 0, b ^= I = I + (N = N >>> 24 | N << 8) | 0, b = b >>> 25 | b << 7, C ^= v = v + E | 0, E ^= P = P + (C = C >>> 24 | C << 8) | 0, E = E >>> 25 | E << 7, x ^= y = y + w | 0, w ^= O = O + (x = x >>> 24 | x << 8) | 0, w = w >>> 25 | w << 7;
                        n.writeUint32LE(y + 1634760805 | 0, e, 0), n.writeUint32LE(v + 857760878 | 0, e, 4), n.writeUint32LE(m + 2036477234 | 0, e, 8), n.writeUint32LE(_ + 1797285236 | 0, e, 12), n.writeUint32LE(b + i | 0, e, 16), n.writeUint32LE(w + s | 0, e, 20), n.writeUint32LE(E + o | 0, e, 24), n.writeUint32LE(D + a | 0, e, 28), n.writeUint32LE(S + c | 0, e, 32), n.writeUint32LE(I + u | 0, e, 36), n.writeUint32LE(O + l | 0, e, 40), n.writeUint32LE(P + h | 0, e, 44), n.writeUint32LE(C + f | 0, e, 48), n.writeUint32LE(A + p | 0, e, 52), n.writeUint32LE(N + d | 0, e, 56), n.writeUint32LE(x + g | 0, e, 60)
                    }(u, a, e);
                    for (var h = l; h < l + 64 && h < r.length; h++) s[h] = r[h] ^ u[h - l];
                    ! function(e, t, r) {
                        for (var n = 1; r--;) n = n + (255 & e[t]) | 0, e[t] = 255 & n, n >>>= 8, t++;
                        if (n > 0) throw Error("ChaCha: counter overflow")
                    }(a, 0, c)
                }
                return i.wipe(u), 0 === o && i.wipe(a), s
            }
            t.streamXOR = s, t.stream = function(e, t, r, n) {
                return void 0 === n && (n = 0), i.wipe(r), s(e, t, r, r, n)
            }
        },
        15501: function(e, t, r) {
            "use strict";
            var n = r(25439),
                i = r(63027),
                s = r(17309),
                o = r(98099),
                a = r(4153);
            t.Cv = 32, t.WH = 12, t.pg = 16;
            var c = new Uint8Array(16),
                u = function() {
                    function e(e) {
                        if (this.nonceLength = t.WH, this.tagLength = t.pg, e.length !== t.Cv) throw Error("ChaCha20Poly1305 needs 32-byte key");
                        this._key = new Uint8Array(e)
                    }
                    return e.prototype.seal = function(e, t, r, i) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        var o, a = new Uint8Array(16);
                        a.set(e, a.length - e.length);
                        var c = new Uint8Array(32);
                        n.stream(this._key, a, c, 4);
                        var u = t.length + this.tagLength;
                        if (i) {
                            if (i.length !== u) throw Error("ChaCha20Poly1305: incorrect destination length");
                            o = i
                        } else o = new Uint8Array(u);
                        return n.streamXOR(this._key, a, t, o, 4), this._authenticate(o.subarray(o.length - this.tagLength, o.length), c, o.subarray(0, o.length - this.tagLength), r), s.wipe(a), o
                    }, e.prototype.open = function(e, t, r, i) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        if (t.length < this.tagLength) return null;
                        var o, c = new Uint8Array(16);
                        c.set(e, c.length - e.length);
                        var u = new Uint8Array(32);
                        n.stream(this._key, c, u, 4);
                        var l = new Uint8Array(this.tagLength);
                        if (this._authenticate(l, u, t.subarray(0, t.length - this.tagLength), r), !a.equal(l, t.subarray(t.length - this.tagLength, t.length))) return null;
                        var h = t.length - this.tagLength;
                        if (i) {
                            if (i.length !== h) throw Error("ChaCha20Poly1305: incorrect destination length");
                            o = i
                        } else o = new Uint8Array(h);
                        return n.streamXOR(this._key, c, t.subarray(0, t.length - this.tagLength), o, 4), s.wipe(c), o
                    }, e.prototype.clean = function() {
                        return s.wipe(this._key), this
                    }, e.prototype._authenticate = function(e, t, r, n) {
                        var a = new i.Poly1305(t);
                        n && (a.update(n), n.length % 16 > 0 && a.update(c.subarray(n.length % 16))), a.update(r), r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
                        var u = new Uint8Array(8);
                        n && o.writeUint64LE(n.length, u), a.update(u), o.writeUint64LE(r.length, u), a.update(u);
                        for (var l = a.digest(), h = 0; h < l.length; h++) e[h] = l[h];
                        a.clean(), s.wipe(l), s.wipe(u)
                    }, e
                }();
            t.OK = u
        },
        4153: function(e, t) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return 0;
                for (var r = 0, n = 0; n < e.length; n++) r |= e[n] ^ t[n];
                return 1 & r - 1 >>> 8
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.select = function(e, t, r) {
                return ~(e - 1) & t | e - 1 & r
            }, t.lessOrEqual = function(e, t) {
                return (0 | e) - (0 | t) - 1 >>> 31 & 1
            }, t.compare = r, t.equal = function(e, t) {
                return 0 !== e.length && 0 !== t.length && 0 !== r(e, t)
            }
        },
        31050: function(e, t, r) {
            "use strict";
            t.Xx = t._w = t.aP = t.KS = t.jQ = void 0, r(31416);
            let n = r(93350);

            function i(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            r(17309), t.jQ = 64, t.KS = 64, t.aP = 32;
            let s = new Uint8Array(32);
            s[0] = 9;
            let o = i(),
                a = i([1]),
                c = (i([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), i([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                u = i([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                l = i([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);

            function h(e, t) {
                for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function f(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let n = e[r] + t + 65535;
                    t = Math.floor(n / 65536), e[r] = n - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function p(e, t, r) {
                let n = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let i = n & (e[r] ^ t[r]);
                    e[r] ^= i, t[r] ^= i
                }
            }

            function d(e, t) {
                let r = i(),
                    n = i();
                for (let e = 0; e < 16; e++) n[e] = t[e];
                f(n), f(n), f(n);
                for (let e = 0; e < 2; e++) {
                    r[0] = n[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = n[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
                    let e = r[15] >> 16 & 1;
                    r[14] &= 65535, p(n, r, 1 - e)
                }
                for (let t = 0; t < 16; t++) e[2 * t] = 255 & n[t], e[2 * t + 1] = n[t] >> 8
            }
            i([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function g(e, t, r) {
                for (let n = 0; n < 16; n++) e[n] = t[n] + r[n]
            }

            function y(e, t, r) {
                for (let n = 0; n < 16; n++) e[n] = t[n] - r[n]
            }

            function v(e, t, r) {
                let n, i, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    l = 0,
                    h = 0,
                    f = 0,
                    p = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    _ = 0,
                    b = 0,
                    w = 0,
                    E = 0,
                    D = 0,
                    S = 0,
                    I = 0,
                    O = 0,
                    P = 0,
                    C = 0,
                    A = 0,
                    N = 0,
                    x = 0,
                    R = 0,
                    T = 0,
                    j = 0,
                    U = 0,
                    L = r[0],
                    k = r[1],
                    M = r[2],
                    z = r[3],
                    $ = r[4],
                    q = r[5],
                    H = r[6],
                    F = r[7],
                    V = r[8],
                    B = r[9],
                    K = r[10],
                    W = r[11],
                    G = r[12],
                    J = r[13],
                    Y = r[14],
                    Z = r[15];
                s += (n = t[0]) * L, o += n * k, a += n * M, c += n * z, u += n * $, l += n * q, h += n * H, f += n * F, p += n * V, d += n * B, g += n * K, y += n * W, v += n * G, m += n * J, _ += n * Y, b += n * Z, o += (n = t[1]) * L, a += n * k, c += n * M, u += n * z, l += n * $, h += n * q, f += n * H, p += n * F, d += n * V, g += n * B, y += n * K, v += n * W, m += n * G, _ += n * J, b += n * Y, w += n * Z, a += (n = t[2]) * L, c += n * k, u += n * M, l += n * z, h += n * $, f += n * q, p += n * H, d += n * F, g += n * V, y += n * B, v += n * K, m += n * W, _ += n * G, b += n * J, w += n * Y, E += n * Z, c += (n = t[3]) * L, u += n * k, l += n * M, h += n * z, f += n * $, p += n * q, d += n * H, g += n * F, y += n * V, v += n * B, m += n * K, _ += n * W, b += n * G, w += n * J, E += n * Y, D += n * Z, u += (n = t[4]) * L, l += n * k, h += n * M, f += n * z, p += n * $, d += n * q, g += n * H, y += n * F, v += n * V, m += n * B, _ += n * K, b += n * W, w += n * G, E += n * J, D += n * Y, S += n * Z, l += (n = t[5]) * L, h += n * k, f += n * M, p += n * z, d += n * $, g += n * q, y += n * H, v += n * F, m += n * V, _ += n * B, b += n * K, w += n * W, E += n * G, D += n * J, S += n * Y, I += n * Z, h += (n = t[6]) * L, f += n * k, p += n * M, d += n * z, g += n * $, y += n * q, v += n * H, m += n * F, _ += n * V, b += n * B, w += n * K, E += n * W, D += n * G, S += n * J, I += n * Y, O += n * Z, f += (n = t[7]) * L, p += n * k, d += n * M, g += n * z, y += n * $, v += n * q, m += n * H, _ += n * F, b += n * V, w += n * B, E += n * K, D += n * W, S += n * G, I += n * J, O += n * Y, P += n * Z, p += (n = t[8]) * L, d += n * k, g += n * M, y += n * z, v += n * $, m += n * q, _ += n * H, b += n * F, w += n * V, E += n * B, D += n * K, S += n * W, I += n * G, O += n * J, P += n * Y, C += n * Z, d += (n = t[9]) * L, g += n * k, y += n * M, v += n * z, m += n * $, _ += n * q, b += n * H, w += n * F, E += n * V, D += n * B, S += n * K, I += n * W, O += n * G, P += n * J, C += n * Y, A += n * Z, g += (n = t[10]) * L, y += n * k, v += n * M, m += n * z, _ += n * $, b += n * q, w += n * H, E += n * F, D += n * V, S += n * B, I += n * K, O += n * W, P += n * G, C += n * J, A += n * Y, N += n * Z, y += (n = t[11]) * L, v += n * k, m += n * M, _ += n * z, b += n * $, w += n * q, E += n * H, D += n * F, S += n * V, I += n * B, O += n * K, P += n * W, C += n * G, A += n * J, N += n * Y, x += n * Z, v += (n = t[12]) * L, m += n * k, _ += n * M, b += n * z, w += n * $, E += n * q, D += n * H, S += n * F, I += n * V, O += n * B, P += n * K, C += n * W, A += n * G, N += n * J, x += n * Y, R += n * Z, m += (n = t[13]) * L, _ += n * k, b += n * M, w += n * z, E += n * $, D += n * q, S += n * H, I += n * F, O += n * V, P += n * B, C += n * K, A += n * W, N += n * G, x += n * J, R += n * Y, T += n * Z, _ += (n = t[14]) * L, b += n * k, w += n * M, E += n * z, D += n * $, S += n * q, I += n * H, O += n * F, P += n * V, C += n * B, A += n * K, N += n * W, x += n * G, R += n * J, T += n * Y, j += n * Z, b += (n = t[15]) * L, w += n * k, E += n * M, D += n * z, S += n * $, I += n * q, O += n * H, P += n * F, C += n * V, A += n * B, N += n * K, x += n * W, R += n * G, T += n * J, j += n * Y, U += n * Z, s += 38 * w, o += 38 * E, a += 38 * D, c += 38 * S, u += 38 * I, l += 38 * O, h += 38 * P, f += 38 * C, p += 38 * A, d += 38 * N, g += 38 * x, y += 38 * R, v += 38 * T, m += 38 * j, _ += 38 * U, i = Math.floor((n = s + (i = 1) + 65535) / 65536), s = n - 65536 * i, i = Math.floor((n = o + i + 65535) / 65536), o = n - 65536 * i, i = Math.floor((n = a + i + 65535) / 65536), a = n - 65536 * i, i = Math.floor((n = c + i + 65535) / 65536), c = n - 65536 * i, i = Math.floor((n = u + i + 65535) / 65536), u = n - 65536 * i, i = Math.floor((n = l + i + 65535) / 65536), l = n - 65536 * i, i = Math.floor((n = h + i + 65535) / 65536), h = n - 65536 * i, i = Math.floor((n = f + i + 65535) / 65536), f = n - 65536 * i, i = Math.floor((n = p + i + 65535) / 65536), p = n - 65536 * i, i = Math.floor((n = d + i + 65535) / 65536), d = n - 65536 * i, i = Math.floor((n = g + i + 65535) / 65536), g = n - 65536 * i, i = Math.floor((n = y + i + 65535) / 65536), y = n - 65536 * i, i = Math.floor((n = v + i + 65535) / 65536), v = n - 65536 * i, i = Math.floor((n = m + i + 65535) / 65536), m = n - 65536 * i, i = Math.floor((n = _ + i + 65535) / 65536), _ = n - 65536 * i, i = Math.floor((n = b + i + 65535) / 65536), b = n - 65536 * i, s += i - 1 + 37 * (i - 1), i = Math.floor((n = s + (i = 1) + 65535) / 65536), s = n - 65536 * i, i = Math.floor((n = o + i + 65535) / 65536), o = n - 65536 * i, i = Math.floor((n = a + i + 65535) / 65536), a = n - 65536 * i, i = Math.floor((n = c + i + 65535) / 65536), c = n - 65536 * i, i = Math.floor((n = u + i + 65535) / 65536), u = n - 65536 * i, i = Math.floor((n = l + i + 65535) / 65536), l = n - 65536 * i, i = Math.floor((n = h + i + 65535) / 65536), h = n - 65536 * i, i = Math.floor((n = f + i + 65535) / 65536), f = n - 65536 * i, i = Math.floor((n = p + i + 65535) / 65536), p = n - 65536 * i, i = Math.floor((n = d + i + 65535) / 65536), d = n - 65536 * i, i = Math.floor((n = g + i + 65535) / 65536), g = n - 65536 * i, i = Math.floor((n = y + i + 65535) / 65536), y = n - 65536 * i, i = Math.floor((n = v + i + 65535) / 65536), v = n - 65536 * i, i = Math.floor((n = m + i + 65535) / 65536), m = n - 65536 * i, i = Math.floor((n = _ + i + 65535) / 65536), _ = n - 65536 * i, i = Math.floor((n = b + i + 65535) / 65536), b = n - 65536 * i, s += i - 1 + 37 * (i - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = l, e[6] = h, e[7] = f, e[8] = p, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = _, e[15] = b
            }

            function m(e, t) {
                let r = i(),
                    n = i(),
                    s = i(),
                    o = i(),
                    a = i(),
                    u = i(),
                    l = i(),
                    h = i(),
                    f = i();
                y(r, e[1], e[0]), y(f, t[1], t[0]), v(r, r, f), g(n, e[0], e[1]), g(f, t[0], t[1]), v(n, n, f), v(s, e[3], t[3]), v(s, s, c), v(o, e[2], t[2]), g(o, o, o), y(a, n, r), y(u, o, s), g(l, o, s), g(h, n, r), v(e[0], a, u), v(e[1], h, l), v(e[2], l, u), v(e[3], a, h)
            }

            function _(e, t, r) {
                for (let n = 0; n < 4; n++) p(e[n], t[n], r)
            }

            function b(e, t) {
                let r = i(),
                    n = i(),
                    s = i();
                (function(e, t) {
                    let r;
                    let n = i();
                    for (r = 0; r < 16; r++) n[r] = t[r];
                    for (r = 253; r >= 0; r--) v(n, n, n), 2 !== r && 4 !== r && v(n, n, t);
                    for (r = 0; r < 16; r++) e[r] = n[r]
                })(s, t[2]), v(r, t[0], s), v(n, t[1], s), d(e, n), e[31] ^= function(e) {
                    let t = new Uint8Array(32);
                    return d(t, e), 1 & t[0]
                }(r) << 7
            }

            function w(e, t) {
                let r = [i(), i(), i(), i()];
                h(r[0], u), h(r[1], l), h(r[2], a), v(r[3], u, l),
                    function(e, t, r) {
                        h(e[0], o), h(e[1], a), h(e[2], a), h(e[3], o);
                        for (let n = 255; n >= 0; --n) {
                            let i = r[n / 8 | 0] >> (7 & n) & 1;
                            _(e, t, i), m(t, e), m(e, e), _(e, t, i)
                        }
                    }(e, r, t)
            }
            t._w = function(e) {
                if (e.length !== t.aP) throw Error(`ed25519: seed must be ${t.aP} bytes`);
                let r = (0, n.hash)(e);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                let s = new Uint8Array(32),
                    o = [i(), i(), i(), i()];
                w(o, r), b(s, o);
                let a = new Uint8Array(64);
                return a.set(e), a.set(s, 32), {
                    publicKey: s,
                    secretKey: a
                }
            };
            let E = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function D(e, t) {
                let r, n, i, s;
                for (n = 63; n >= 32; --n) {
                    for (r = 0, i = n - 32, s = n - 12; i < s; ++i) t[i] += r - 16 * t[n] * E[i - (n - 32)], r = Math.floor((t[i] + 128) / 256), t[i] -= 256 * r;
                    t[i] += r, t[n] = 0
                }
                for (i = 0, r = 0; i < 32; i++) t[i] += r - (t[31] >> 4) * E[i], r = t[i] >> 8, t[i] &= 255;
                for (i = 0; i < 32; i++) t[i] -= r * E[i];
                for (n = 0; n < 32; n++) t[n + 1] += t[n] >> 8, e[n] = 255 & t[n]
            }

            function S(e) {
                let t = new Float64Array(64);
                for (let r = 0; r < 64; r++) t[r] = e[r];
                for (let t = 0; t < 64; t++) e[t] = 0;
                D(e, t)
            }
            t.Xx = function(e, t) {
                let r = new Float64Array(64),
                    s = [i(), i(), i(), i()],
                    o = (0, n.hash)(e.subarray(0, 32));
                o[0] &= 248, o[31] &= 127, o[31] |= 64;
                let a = new Uint8Array(64);
                a.set(o.subarray(32), 32);
                let c = new n.SHA512;
                c.update(a.subarray(32)), c.update(t);
                let u = c.digest();
                c.clean(), S(u), w(s, u), b(a, s), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                let l = c.digest();
                S(l);
                for (let e = 0; e < 32; e++) r[e] = u[e];
                for (let e = 0; e < 32; e++)
                    for (let t = 0; t < 32; t++) r[e + t] += l[e] * o[t];
                return D(a.subarray(32), r), a
            }
        },
        79984: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSerializableHash = function(e) {
                return void 0 !== e.saveState && void 0 !== e.restoreState && void 0 !== e.cleanSavedState
            }
        },
        512: function(e, t, r) {
            "use strict";
            var n = r(25629),
                i = r(17309),
                s = function() {
                    function e(e, t, r, i) {
                        void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = i;
                        var s = n.hmac(this._hash, r, t);
                        this._hmac = new n.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
                    }
                    return e.prototype._fillBuffer = function() {
                        this._counter[0]++;
                        var e = this._counter[0];
                        if (0 === e) throw Error("hkdf: cannot expand more");
                        this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
                    }, e.prototype.expand = function(e) {
                        for (var t = new Uint8Array(e), r = 0; r < t.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), t[r] = this._buffer[this._bufpos++];
                        return t
                    }, e.prototype.clean = function() {
                        this._hmac.clean(), i.wipe(this._buffer), i.wipe(this._counter), this._bufpos = 0
                    }, e
                }();
            t.t = s
        },
        25629: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(79984),
                i = r(4153),
                s = r(17309),
                o = function() {
                    function e(e, t) {
                        this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
                        var r = new Uint8Array(this.blockSize);
                        t.length > this.blockSize ? this._inner.update(t).finish(r).clean() : r.set(t);
                        for (var i = 0; i < r.length; i++) r[i] ^= 54;
                        this._inner.update(r);
                        for (var i = 0; i < r.length; i++) r[i] ^= 106;
                        this._outer.update(r), n.isSerializableHash(this._inner) && n.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), s.wipe(r)
                    }
                    return e.prototype.reset = function() {
                        if (!n.isSerializableHash(this._inner) || !n.isSerializableHash(this._outer)) throw Error("hmac: can't reset() because hash doesn't implement restoreState()");
                        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.clean = function() {
                        n.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), n.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
                    }, e.prototype.update = function(e) {
                        return this._inner.update(e), this
                    }, e.prototype.finish = function(e) {
                        return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this)
                    }, e.prototype.digest = function() {
                        var e = new Uint8Array(this.digestLength);
                        return this.finish(e), e
                    }, e.prototype.saveState = function() {
                        if (!n.isSerializableHash(this._inner)) throw Error("hmac: can't saveState() because hash doesn't implement it");
                        return this._inner.saveState()
                    }, e.prototype.restoreState = function(e) {
                        if (!n.isSerializableHash(this._inner) || !n.isSerializableHash(this._outer)) throw Error("hmac: can't restoreState() because hash doesn't implement it");
                        return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.cleanSavedState = function(e) {
                        if (!n.isSerializableHash(this._inner)) throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");
                        this._inner.cleanSavedState(e)
                    }, e
                }();
            t.HMAC = o, t.hmac = function(e, t, r) {
                var n = new o(e, t);
                n.update(r);
                var i = n.digest();
                return n.clean(), i
            }, t.equal = i.equal
        },
        97117: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mul = Math.imul || function(e, t) {
                var r = 65535 & e,
                    n = 65535 & t;
                return r * n + ((e >>> 16 & 65535) * n + r * (t >>> 16 & 65535) << 16 >>> 0) | 0
            }, t.add = function(e, t) {
                return e + t | 0
            }, t.sub = function(e, t) {
                return e - t | 0
            }, t.rotl = function(e, t) {
                return e << t | e >>> 32 - t
            }, t.rotr = function(e, t) {
                return e << 32 - t | e >>> t
            }, t.isInteger = Number.isInteger || function(e) {
                return "number" == typeof e && isFinite(e) && Math.floor(e) === e
            }, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(e) {
                return t.isInteger(e) && e >= -t.MAX_SAFE_INTEGER && e <= t.MAX_SAFE_INTEGER
            }
        },
        63027: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(4153),
                i = r(17309);
            t.DIGEST_LENGTH = 16;
            var s = function() {
                function e(e) {
                    this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
                    var r = e[0] | e[1] << 8;
                    this._r[0] = 8191 & r;
                    var n = e[2] | e[3] << 8;
                    this._r[1] = (r >>> 13 | n << 3) & 8191;
                    var i = e[4] | e[5] << 8;
                    this._r[2] = (n >>> 10 | i << 6) & 7939;
                    var s = e[6] | e[7] << 8;
                    this._r[3] = (i >>> 7 | s << 9) & 8191;
                    var o = e[8] | e[9] << 8;
                    this._r[4] = (s >>> 4 | o << 12) & 255, this._r[5] = o >>> 1 & 8190;
                    var a = e[10] | e[11] << 8;
                    this._r[6] = (o >>> 14 | a << 2) & 8191;
                    var c = e[12] | e[13] << 8;
                    this._r[7] = (a >>> 11 | c << 5) & 8065;
                    var u = e[14] | e[15] << 8;
                    this._r[8] = (c >>> 8 | u << 8) & 8191, this._r[9] = u >>> 5 & 127, this._pad[0] = e[16] | e[17] << 8, this._pad[1] = e[18] | e[19] << 8, this._pad[2] = e[20] | e[21] << 8, this._pad[3] = e[22] | e[23] << 8, this._pad[4] = e[24] | e[25] << 8, this._pad[5] = e[26] | e[27] << 8, this._pad[6] = e[28] | e[29] << 8, this._pad[7] = e[30] | e[31] << 8
                }
                return e.prototype._blocks = function(e, t, r) {
                    for (var n = this._fin ? 0 : 2048, i = this._h[0], s = this._h[1], o = this._h[2], a = this._h[3], c = this._h[4], u = this._h[5], l = this._h[6], h = this._h[7], f = this._h[8], p = this._h[9], d = this._r[0], g = this._r[1], y = this._r[2], v = this._r[3], m = this._r[4], _ = this._r[5], b = this._r[6], w = this._r[7], E = this._r[8], D = this._r[9]; r >= 16;) {
                        var S, I = e[t + 0] | e[t + 1] << 8;
                        i += 8191 & I;
                        var O = e[t + 2] | e[t + 3] << 8;
                        s += (I >>> 13 | O << 3) & 8191;
                        var P = e[t + 4] | e[t + 5] << 8;
                        o += (O >>> 10 | P << 6) & 8191;
                        var C = e[t + 6] | e[t + 7] << 8;
                        a += (P >>> 7 | C << 9) & 8191;
                        var A = e[t + 8] | e[t + 9] << 8;
                        c += (C >>> 4 | A << 12) & 8191, u += A >>> 1 & 8191;
                        var N = e[t + 10] | e[t + 11] << 8;
                        l += (A >>> 14 | N << 2) & 8191;
                        var x = e[t + 12] | e[t + 13] << 8;
                        h += (N >>> 11 | x << 5) & 8191;
                        var R = e[t + 14] | e[t + 15] << 8;
                        f += (x >>> 8 | R << 8) & 8191, p += R >>> 5 | n;
                        var T = 0;
                        T = (S = 0 + i * d + s * (5 * D) + o * (5 * E) + a * (5 * w) + c * (5 * b)) >>> 13, S &= 8191, S += u * (5 * _) + l * (5 * m) + h * (5 * v) + f * (5 * y) + p * (5 * g), T += S >>> 13, S &= 8191;
                        var j = T;
                        j += i * g + s * d + o * (5 * D) + a * (5 * E) + c * (5 * w), T = j >>> 13, j &= 8191, j += u * (5 * b) + l * (5 * _) + h * (5 * m) + f * (5 * v) + p * (5 * y), T += j >>> 13, j &= 8191;
                        var U = T;
                        U += i * y + s * g + o * d + a * (5 * D) + c * (5 * E), T = U >>> 13, U &= 8191, U += u * (5 * w) + l * (5 * b) + h * (5 * _) + f * (5 * m) + p * (5 * v), T += U >>> 13, U &= 8191;
                        var L = T;
                        L += i * v + s * y + o * g + a * d + c * (5 * D), T = L >>> 13, L &= 8191, L += u * (5 * E) + l * (5 * w) + h * (5 * b) + f * (5 * _) + p * (5 * m), T += L >>> 13, L &= 8191;
                        var k = T;
                        k += i * m + s * v + o * y + a * g + c * d, T = k >>> 13, k &= 8191, k += u * (5 * D) + l * (5 * E) + h * (5 * w) + f * (5 * b) + p * (5 * _), T += k >>> 13, k &= 8191;
                        var M = T;
                        M += i * _ + s * m + o * v + a * y + c * g, T = M >>> 13, M &= 8191, M += u * d + l * (5 * D) + h * (5 * E) + f * (5 * w) + p * (5 * b), T += M >>> 13, M &= 8191;
                        var z = T;
                        z += i * b + s * _ + o * m + a * v + c * y, T = z >>> 13, z &= 8191, z += u * g + l * d + h * (5 * D) + f * (5 * E) + p * (5 * w), T += z >>> 13, z &= 8191;
                        var $ = T;
                        $ += i * w + s * b + o * _ + a * m + c * v, T = $ >>> 13, $ &= 8191, $ += u * y + l * g + h * d + f * (5 * D) + p * (5 * E), T += $ >>> 13, $ &= 8191;
                        var q = T;
                        q += i * E + s * w + o * b + a * _ + c * m, T = q >>> 13, q &= 8191, q += u * v + l * y + h * g + f * d + p * (5 * D), T += q >>> 13, q &= 8191;
                        var H = T;
                        H += i * D + s * E + o * w + a * b + c * _, T = H >>> 13, H &= 8191, H += u * m + l * v + h * y + f * g + p * d, T += H >>> 13, H &= 8191, S = 8191 & (T = (T = (T << 2) + T | 0) + S | 0), T >>>= 13, j += T, i = S, s = j, o = U, a = L, c = k, u = M, l = z, h = $, f = q, p = H, t += 16, r -= 16
                    }
                    this._h[0] = i, this._h[1] = s, this._h[2] = o, this._h[3] = a, this._h[4] = c, this._h[5] = u, this._h[6] = l, this._h[7] = h, this._h[8] = f, this._h[9] = p
                }, e.prototype.finish = function(e, t) {
                    void 0 === t && (t = 0);
                    var r, n, i, s, o = new Uint16Array(10);
                    if (this._leftover) {
                        for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++) this._buffer[s] = 0;
                        this._fin = 1, this._blocks(this._buffer, 0, 16)
                    }
                    for (r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++) this._h[s] += r, r = this._h[s] >>> 13, this._h[s] &= 8191;
                    for (this._h[0] += 5 * r, r = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += r, r = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += r, o[0] = this._h[0] + 5, r = o[0] >>> 13, o[0] &= 8191, s = 1; s < 10; s++) o[s] = this._h[s] + r, r = o[s] >>> 13, o[s] &= 8191;
                    for (o[9] -= 8192, n = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= n;
                    for (s = 0, n = ~n; s < 10; s++) this._h[s] = this._h[s] & n | o[s];
                    for (s = 1, this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, i = this._h[0] + this._pad[0], this._h[0] = 65535 & i; s < 8; s++) i = (this._h[s] + this._pad[s] | 0) + (i >>> 16) | 0, this._h[s] = 65535 & i;
                    return e[t + 0] = this._h[0] >>> 0, e[t + 1] = this._h[0] >>> 8, e[t + 2] = this._h[1] >>> 0, e[t + 3] = this._h[1] >>> 8, e[t + 4] = this._h[2] >>> 0, e[t + 5] = this._h[2] >>> 8, e[t + 6] = this._h[3] >>> 0, e[t + 7] = this._h[3] >>> 8, e[t + 8] = this._h[4] >>> 0, e[t + 9] = this._h[4] >>> 8, e[t + 10] = this._h[5] >>> 0, e[t + 11] = this._h[5] >>> 8, e[t + 12] = this._h[6] >>> 0, e[t + 13] = this._h[6] >>> 8, e[t + 14] = this._h[7] >>> 0, e[t + 15] = this._h[7] >>> 8, this._finished = !0, this
                }, e.prototype.update = function(e) {
                    var t, r = 0,
                        n = e.length;
                    if (this._leftover) {
                        (t = 16 - this._leftover) > n && (t = n);
                        for (var i = 0; i < t; i++) this._buffer[this._leftover + i] = e[r + i];
                        if (n -= t, r += t, this._leftover += t, this._leftover < 16) return this;
                        this._blocks(this._buffer, 0, 16), this._leftover = 0
                    }
                    if (n >= 16 && (t = n - n % 16, this._blocks(e, r, t), r += t, n -= t), n) {
                        for (var i = 0; i < n; i++) this._buffer[this._leftover + i] = e[r + i];
                        this._leftover += n
                    }
                    return this
                }, e.prototype.digest = function() {
                    if (this._finished) throw Error("Poly1305 was finished");
                    var e = new Uint8Array(16);
                    return this.finish(e), e
                }, e.prototype.clean = function() {
                    return i.wipe(this._buffer), i.wipe(this._r), i.wipe(this._h), i.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
                }, e
            }();
            t.Poly1305 = s, t.oneTimeAuth = function(e, t) {
                var r = new s(e);
                r.update(t);
                var n = r.digest();
                return r.clean(), n
            }, t.equal = function(e, r) {
                return e.length === t.DIGEST_LENGTH && r.length === t.DIGEST_LENGTH && n.equal(e, r)
            }
        },
        31416: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
            let n = r(46008),
                i = r(98099),
                s = r(17309);

            function o(e, r = t.defaultRandomSource) {
                return r.randomBytes(e)
            }
            t.defaultRandomSource = new n.SystemRandomSource, t.randomBytes = o, t.randomUint32 = function(e = t.defaultRandomSource) {
                let r = o(4, e),
                    n = (0, i.readUint32LE)(r);
                return (0, s.wipe)(r), n
            };
            let a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            function c(e, r = a, n = t.defaultRandomSource) {
                if (r.length < 2) throw Error("randomString charset is too short");
                if (r.length > 256) throw Error("randomString charset is too long");
                let i = "",
                    c = r.length,
                    u = 256 - 256 % c;
                for (; e > 0;) {
                    let t = o(Math.ceil(256 * e / u), n);
                    for (let n = 0; n < t.length && e > 0; n++) {
                        let s = t[n];
                        s < u && (i += r.charAt(s % c), e--)
                    }(0, s.wipe)(t)
                }
                return i
            }
            t.randomString = c, t.randomStringForEntropy = function(e, r = a, n = t.defaultRandomSource) {
                let i = Math.ceil(e / (Math.log(r.length) / Math.LN2));
                return c(i, r, n)
            }
        },
        75455: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BrowserRandomSource = void 0, t.BrowserRandomSource = class {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1;
                    let e = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                    e && void 0 !== e.getRandomValues && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw Error("Browser random byte generator is not available.");
                    let t = new Uint8Array(e);
                    for (let e = 0; e < t.length; e += 65536) this._crypto.getRandomValues(t.subarray(e, e + Math.min(t.length - e, 65536)));
                    return t
                }
            }
        },
        58871: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NodeRandomSource = void 0;
            let n = r(17309);
            t.NodeRandomSource = class {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1; {
                        let e = r(35883);
                        e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                    }
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw Error("Node.js random byte generator is not available.");
                    let t = this._crypto.randomBytes(e);
                    if (t.length !== e) throw Error("NodeRandomSource: got fewer bytes than requested");
                    let r = new Uint8Array(e);
                    for (let e = 0; e < r.length; e++) r[e] = t[e];
                    return (0, n.wipe)(t), r
                }
            }
        },
        46008: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SystemRandomSource = void 0;
            let n = r(75455),
                i = r(58871);
            t.SystemRandomSource = class {
                constructor() {
                    if (this.isAvailable = !1, this.name = "", this._source = new n.BrowserRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Browser";
                        return
                    }
                    if (this._source = new i.NodeRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Node";
                        return
                    }
                }
                randomBytes(e) {
                    if (!this.isAvailable) throw Error("System random byte generator is not available.");
                    return this._source.randomBytes(e)
                }
            }
        },
        73294: function(e, t, r) {
            "use strict";
            var n = r(98099),
                i = r(17309);
            t.k = 32, t.cn = 64;
            var s = function() {
                function e() {
                    this.digestLength = t.k, this.blockSize = t.cn, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    i.wipe(this._buffer), i.wipe(this._temp), this.reset()
                }, e.prototype.update = function(e, t) {
                    if (void 0 === t && (t = e.length), this._finished) throw Error("SHA256: can't update because hash was finished.");
                    var r = 0;
                    if (this._bytesHashed += t, this._bufferLength > 0) {
                        for (; this._bufferLength < this.blockSize && t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                        this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (t >= this.blockSize && (r = a(this._temp, this._state, e, r, t), t %= this.blockSize); t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            i = t % 64 < 56 ? 64 : 128;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < i - 8; s++) this._buffer[s] = 0;
                        n.writeUint32BE(t / 536870912 | 0, this._buffer, i - 8), n.writeUint32BE(t << 3, this._buffer, i - 4), a(this._temp, this._state, this._buffer, 0, i), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 4; s++) n.writeUint32BE(this._state[s], e, 4 * s);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        state: new Int32Array(this._state),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._state.set(e.state), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    i.wipe(e.state), e.buffer && i.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.mE = s;
            var o = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

            function a(e, t, r, i, s) {
                for (; s >= 64;) {
                    for (var a = t[0], c = t[1], u = t[2], l = t[3], h = t[4], f = t[5], p = t[6], d = t[7], g = 0; g < 16; g++) {
                        var y = i + 4 * g;
                        e[g] = n.readUint32BE(r, y)
                    }
                    for (var g = 16; g < 64; g++) {
                        var v = e[g - 2],
                            m = (v >>> 17 | v << 15) ^ (v >>> 19 | v << 13) ^ v >>> 10,
                            _ = ((v = e[g - 15]) >>> 7 | v << 25) ^ (v >>> 18 | v << 14) ^ v >>> 3;
                        e[g] = (m + e[g - 7] | 0) + (_ + e[g - 16] | 0)
                    }
                    for (var g = 0; g < 64; g++) {
                        var m = (((h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7)) + (h & f ^ ~h & p) | 0) + (d + (o[g] + e[g] | 0) | 0) | 0,
                            _ = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & c ^ a & u ^ c & u) | 0;
                        d = p, p = f, f = h, h = l + m | 0, l = u, u = c, c = a, a = m + _ | 0
                    }
                    t[0] += a, t[1] += c, t[2] += u, t[3] += l, t[4] += h, t[5] += f, t[6] += p, t[7] += d, i += 64, s -= 64
                }
                return i
            }
            t.vp = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        93350: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(98099),
                i = r(17309);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var s = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    i.wipe(this._buffer), i.wipe(this._tempHi), i.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, r) {
                    if (void 0 === r && (r = e.length), this._finished) throw Error("SHA512: can't update because hash was finished.");
                    var n = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[n++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (n = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, n, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[n++], r--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            i = t % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < i - 8; s++) this._buffer[s] = 0;
                        n.writeUint32BE(t / 536870912 | 0, this._buffer, i - 8), n.writeUint32BE(t << 3, this._buffer, i - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, i), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 8; s++) n.writeUint32BE(this._stateHi[s], e, 8 * s), n.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    i.wipe(e.stateHi), i.wipe(e.stateLo), e.buffer && i.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, r, i, s, a, c) {
                for (var u, l, h, f, p, d, g, y, v = r[0], m = r[1], _ = r[2], b = r[3], w = r[4], E = r[5], D = r[6], S = r[7], I = i[0], O = i[1], P = i[2], C = i[3], A = i[4], N = i[5], x = i[6], R = i[7]; c >= 128;) {
                    for (var T = 0; T < 16; T++) {
                        var j = 8 * T + a;
                        e[T] = n.readUint32BE(s, j), t[T] = n.readUint32BE(s, j + 4)
                    }
                    for (var T = 0; T < 80; T++) {
                        var U = v,
                            L = m,
                            k = _,
                            M = b,
                            z = w,
                            $ = E,
                            q = D,
                            H = S,
                            F = I,
                            V = O,
                            B = P,
                            K = C,
                            W = A,
                            G = N,
                            J = x,
                            Y = R;
                        if (u = S, p = 65535 & (l = R), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = (w >>> 14 | A << 18) ^ (w >>> 18 | A << 14) ^ (A >>> 9 | w << 23), p += 65535 & (l = (A >>> 14 | w << 18) ^ (A >>> 18 | w << 14) ^ (w >>> 9 | A << 23)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = w & E ^ ~w & D, p += 65535 & (l = A & N ^ ~A & x), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = o[2 * T], p += 65535 & (l = o[2 * T + 1]), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = e[T % 16], p += 65535 & (l = t[T % 16]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, h = 65535 & g | y << 16, f = 65535 & p | d << 16, u = h, p = 65535 & (l = f), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = (v >>> 28 | I << 4) ^ (I >>> 2 | v << 30) ^ (I >>> 7 | v << 25), p += 65535 & (l = (I >>> 28 | v << 4) ^ (v >>> 2 | I << 30) ^ (v >>> 7 | I << 25)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = v & m ^ v & _ ^ m & _, p += 65535 & (l = I & O ^ I & P ^ O & P), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, H = 65535 & g | y << 16, Y = 65535 & p | d << 16, u = M, p = 65535 & (l = K), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = h, p += 65535 & (l = f), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, M = 65535 & g | y << 16, K = 65535 & p | d << 16, m = U, _ = L, b = k, w = M, E = z, D = $, S = q, v = H, O = F, P = V, C = B, A = K, N = W, x = G, R = J, I = Y, T % 16 == 15)
                            for (var j = 0; j < 16; j++) u = e[j], p = 65535 & (l = t[j]), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = e[(j + 9) % 16], p += 65535 & (l = t[(j + 9) % 16]), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = ((h = e[(j + 1) % 16]) >>> 1 | (f = t[(j + 1) % 16]) << 31) ^ (h >>> 8 | f << 24) ^ h >>> 7, p += 65535 & (l = (f >>> 1 | h << 31) ^ (f >>> 8 | h << 24) ^ (f >>> 7 | h << 25)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = ((h = e[(j + 14) % 16]) >>> 19 | (f = t[(j + 14) % 16]) << 13) ^ (f >>> 29 | h << 3) ^ h >>> 6, p += 65535 & (l = (f >>> 19 | h << 13) ^ (h >>> 29 | f << 3) ^ (f >>> 6 | h << 26)), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, e[j] = 65535 & g | y << 16, t[j] = 65535 & p | d << 16
                    }
                    u = v, p = 65535 & (l = I), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[0], p += 65535 & (l = i[0]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[0] = v = 65535 & g | y << 16, i[0] = I = 65535 & p | d << 16, u = m, p = 65535 & (l = O), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[1], p += 65535 & (l = i[1]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[1] = m = 65535 & g | y << 16, i[1] = O = 65535 & p | d << 16, u = _, p = 65535 & (l = P), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[2], p += 65535 & (l = i[2]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[2] = _ = 65535 & g | y << 16, i[2] = P = 65535 & p | d << 16, u = b, p = 65535 & (l = C), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[3], p += 65535 & (l = i[3]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[3] = b = 65535 & g | y << 16, i[3] = C = 65535 & p | d << 16, u = w, p = 65535 & (l = A), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[4], p += 65535 & (l = i[4]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[4] = w = 65535 & g | y << 16, i[4] = A = 65535 & p | d << 16, u = E, p = 65535 & (l = N), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[5], p += 65535 & (l = i[5]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[5] = E = 65535 & g | y << 16, i[5] = N = 65535 & p | d << 16, u = D, p = 65535 & (l = x), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[6], p += 65535 & (l = i[6]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[6] = D = 65535 & g | y << 16, i[6] = x = 65535 & p | d << 16, u = S, p = 65535 & (l = R), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[7], p += 65535 & (l = i[7]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[7] = S = 65535 & g | y << 16, i[7] = R = 65535 & p | d << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        17309: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.wipe = function(e) {
                for (var t = 0; t < e.length; t++) e[t] = 0;
                return e
            }
        },
        57664: function(e, t, r) {
            "use strict";
            t.gi = t.Au = t.KS = t.kz = void 0;
            let n = r(31416),
                i = r(17309);

            function s(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            t.kz = 32, t.KS = 32;
            let o = new Uint8Array(32);
            o[0] = 9;
            let a = s([56129, 1]);

            function c(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let n = e[r] + t + 65535;
                    t = Math.floor(n / 65536), e[r] = n - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function u(e, t, r) {
                let n = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let i = n & (e[r] ^ t[r]);
                    e[r] ^= i, t[r] ^= i
                }
            }

            function l(e, t, r) {
                for (let n = 0; n < 16; n++) e[n] = t[n] + r[n]
            }

            function h(e, t, r) {
                for (let n = 0; n < 16; n++) e[n] = t[n] - r[n]
            }

            function f(e, t, r) {
                let n, i, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    l = 0,
                    h = 0,
                    f = 0,
                    p = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    _ = 0,
                    b = 0,
                    w = 0,
                    E = 0,
                    D = 0,
                    S = 0,
                    I = 0,
                    O = 0,
                    P = 0,
                    C = 0,
                    A = 0,
                    N = 0,
                    x = 0,
                    R = 0,
                    T = 0,
                    j = 0,
                    U = 0,
                    L = r[0],
                    k = r[1],
                    M = r[2],
                    z = r[3],
                    $ = r[4],
                    q = r[5],
                    H = r[6],
                    F = r[7],
                    V = r[8],
                    B = r[9],
                    K = r[10],
                    W = r[11],
                    G = r[12],
                    J = r[13],
                    Y = r[14],
                    Z = r[15];
                s += (n = t[0]) * L, o += n * k, a += n * M, c += n * z, u += n * $, l += n * q, h += n * H, f += n * F, p += n * V, d += n * B, g += n * K, y += n * W, v += n * G, m += n * J, _ += n * Y, b += n * Z, o += (n = t[1]) * L, a += n * k, c += n * M, u += n * z, l += n * $, h += n * q, f += n * H, p += n * F, d += n * V, g += n * B, y += n * K, v += n * W, m += n * G, _ += n * J, b += n * Y, w += n * Z, a += (n = t[2]) * L, c += n * k, u += n * M, l += n * z, h += n * $, f += n * q, p += n * H, d += n * F, g += n * V, y += n * B, v += n * K, m += n * W, _ += n * G, b += n * J, w += n * Y, E += n * Z, c += (n = t[3]) * L, u += n * k, l += n * M, h += n * z, f += n * $, p += n * q, d += n * H, g += n * F, y += n * V, v += n * B, m += n * K, _ += n * W, b += n * G, w += n * J, E += n * Y, D += n * Z, u += (n = t[4]) * L, l += n * k, h += n * M, f += n * z, p += n * $, d += n * q, g += n * H, y += n * F, v += n * V, m += n * B, _ += n * K, b += n * W, w += n * G, E += n * J, D += n * Y, S += n * Z, l += (n = t[5]) * L, h += n * k, f += n * M, p += n * z, d += n * $, g += n * q, y += n * H, v += n * F, m += n * V, _ += n * B, b += n * K, w += n * W, E += n * G, D += n * J, S += n * Y, I += n * Z, h += (n = t[6]) * L, f += n * k, p += n * M, d += n * z, g += n * $, y += n * q, v += n * H, m += n * F, _ += n * V, b += n * B, w += n * K, E += n * W, D += n * G, S += n * J, I += n * Y, O += n * Z, f += (n = t[7]) * L, p += n * k, d += n * M, g += n * z, y += n * $, v += n * q, m += n * H, _ += n * F, b += n * V, w += n * B, E += n * K, D += n * W, S += n * G, I += n * J, O += n * Y, P += n * Z, p += (n = t[8]) * L, d += n * k, g += n * M, y += n * z, v += n * $, m += n * q, _ += n * H, b += n * F, w += n * V, E += n * B, D += n * K, S += n * W, I += n * G, O += n * J, P += n * Y, C += n * Z, d += (n = t[9]) * L, g += n * k, y += n * M, v += n * z, m += n * $, _ += n * q, b += n * H, w += n * F, E += n * V, D += n * B, S += n * K, I += n * W, O += n * G, P += n * J, C += n * Y, A += n * Z, g += (n = t[10]) * L, y += n * k, v += n * M, m += n * z, _ += n * $, b += n * q, w += n * H, E += n * F, D += n * V, S += n * B, I += n * K, O += n * W, P += n * G, C += n * J, A += n * Y, N += n * Z, y += (n = t[11]) * L, v += n * k, m += n * M, _ += n * z, b += n * $, w += n * q, E += n * H, D += n * F, S += n * V, I += n * B, O += n * K, P += n * W, C += n * G, A += n * J, N += n * Y, x += n * Z, v += (n = t[12]) * L, m += n * k, _ += n * M, b += n * z, w += n * $, E += n * q, D += n * H, S += n * F, I += n * V, O += n * B, P += n * K, C += n * W, A += n * G, N += n * J, x += n * Y, R += n * Z, m += (n = t[13]) * L, _ += n * k, b += n * M, w += n * z, E += n * $, D += n * q, S += n * H, I += n * F, O += n * V, P += n * B, C += n * K, A += n * W, N += n * G, x += n * J, R += n * Y, T += n * Z, _ += (n = t[14]) * L, b += n * k, w += n * M, E += n * z, D += n * $, S += n * q, I += n * H, O += n * F, P += n * V, C += n * B, A += n * K, N += n * W, x += n * G, R += n * J, T += n * Y, j += n * Z, b += (n = t[15]) * L, w += n * k, E += n * M, D += n * z, S += n * $, I += n * q, O += n * H, P += n * F, C += n * V, A += n * B, N += n * K, x += n * W, R += n * G, T += n * J, j += n * Y, U += n * Z, s += 38 * w, o += 38 * E, a += 38 * D, c += 38 * S, u += 38 * I, l += 38 * O, h += 38 * P, f += 38 * C, p += 38 * A, d += 38 * N, g += 38 * x, y += 38 * R, v += 38 * T, m += 38 * j, _ += 38 * U, i = Math.floor((n = s + (i = 1) + 65535) / 65536), s = n - 65536 * i, i = Math.floor((n = o + i + 65535) / 65536), o = n - 65536 * i, i = Math.floor((n = a + i + 65535) / 65536), a = n - 65536 * i, i = Math.floor((n = c + i + 65535) / 65536), c = n - 65536 * i, i = Math.floor((n = u + i + 65535) / 65536), u = n - 65536 * i, i = Math.floor((n = l + i + 65535) / 65536), l = n - 65536 * i, i = Math.floor((n = h + i + 65535) / 65536), h = n - 65536 * i, i = Math.floor((n = f + i + 65535) / 65536), f = n - 65536 * i, i = Math.floor((n = p + i + 65535) / 65536), p = n - 65536 * i, i = Math.floor((n = d + i + 65535) / 65536), d = n - 65536 * i, i = Math.floor((n = g + i + 65535) / 65536), g = n - 65536 * i, i = Math.floor((n = y + i + 65535) / 65536), y = n - 65536 * i, i = Math.floor((n = v + i + 65535) / 65536), v = n - 65536 * i, i = Math.floor((n = m + i + 65535) / 65536), m = n - 65536 * i, i = Math.floor((n = _ + i + 65535) / 65536), _ = n - 65536 * i, i = Math.floor((n = b + i + 65535) / 65536), b = n - 65536 * i, s += i - 1 + 37 * (i - 1), i = Math.floor((n = s + (i = 1) + 65535) / 65536), s = n - 65536 * i, i = Math.floor((n = o + i + 65535) / 65536), o = n - 65536 * i, i = Math.floor((n = a + i + 65535) / 65536), a = n - 65536 * i, i = Math.floor((n = c + i + 65535) / 65536), c = n - 65536 * i, i = Math.floor((n = u + i + 65535) / 65536), u = n - 65536 * i, i = Math.floor((n = l + i + 65535) / 65536), l = n - 65536 * i, i = Math.floor((n = h + i + 65535) / 65536), h = n - 65536 * i, i = Math.floor((n = f + i + 65535) / 65536), f = n - 65536 * i, i = Math.floor((n = p + i + 65535) / 65536), p = n - 65536 * i, i = Math.floor((n = d + i + 65535) / 65536), d = n - 65536 * i, i = Math.floor((n = g + i + 65535) / 65536), g = n - 65536 * i, i = Math.floor((n = y + i + 65535) / 65536), y = n - 65536 * i, i = Math.floor((n = v + i + 65535) / 65536), v = n - 65536 * i, i = Math.floor((n = m + i + 65535) / 65536), m = n - 65536 * i, i = Math.floor((n = _ + i + 65535) / 65536), _ = n - 65536 * i, i = Math.floor((n = b + i + 65535) / 65536), b = n - 65536 * i, s += i - 1 + 37 * (i - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = l, e[6] = h, e[7] = f, e[8] = p, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = _, e[15] = b
            }

            function p(e, t) {
                let r = new Uint8Array(32),
                    n = new Float64Array(80),
                    i = s(),
                    o = s(),
                    p = s(),
                    d = s(),
                    g = s(),
                    y = s();
                for (let t = 0; t < 31; t++) r[t] = e[t];
                r[31] = 127 & e[31] | 64, r[0] &= 248,
                    function(e, t) {
                        for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
                        e[15] &= 32767
                    }(n, t);
                for (let e = 0; e < 16; e++) o[e] = n[e];
                i[0] = d[0] = 1;
                for (let e = 254; e >= 0; --e) {
                    let t = r[e >>> 3] >>> (7 & e) & 1;
                    u(i, o, t), u(p, d, t), l(g, i, p), h(i, i, p), l(p, o, d), h(o, o, d), f(d, g, g), f(y, i, i), f(i, p, i), f(p, o, g), l(g, i, p), h(i, i, p), f(o, i, i), h(p, d, y), f(i, p, a), l(i, i, d), f(p, p, i), f(i, d, y), f(d, o, n), f(o, g, g), u(i, o, t), u(p, d, t)
                }
                for (let e = 0; e < 16; e++) n[e + 16] = i[e], n[e + 32] = p[e], n[e + 48] = o[e], n[e + 64] = d[e];
                let v = n.subarray(32),
                    m = n.subarray(16);
                ! function(e, t) {
                    let r = s();
                    for (let e = 0; e < 16; e++) r[e] = t[e];
                    for (let e = 253; e >= 0; e--) f(r, r, r), 2 !== e && 4 !== e && f(r, r, t);
                    for (let t = 0; t < 16; t++) e[t] = r[t]
                }(v, v), f(m, m, v);
                let _ = new Uint8Array(32);
                return ! function(e, t) {
                    let r = s(),
                        n = s();
                    for (let e = 0; e < 16; e++) n[e] = t[e];
                    c(n), c(n), c(n);
                    for (let e = 0; e < 2; e++) {
                        r[0] = n[0] - 65517;
                        for (let e = 1; e < 15; e++) r[e] = n[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                        r[15] = n[15] - 32767 - (r[14] >> 16 & 1);
                        let e = r[15] >> 16 & 1;
                        r[14] &= 65535, u(n, r, 1 - e)
                    }
                    for (let t = 0; t < 16; t++) e[2 * t] = 255 & n[t], e[2 * t + 1] = n[t] >> 8
                }(_, m), _
            }
            t.Au = function(e) {
                let r = (0, n.randomBytes)(32, e),
                    s = function(e) {
                        if (e.length !== t.KS) throw Error(`x25519: seed must be ${t.KS} bytes`);
                        let r = new Uint8Array(e),
                            n = p(r, o);
                        return {
                            publicKey: n,
                            secretKey: r
                        }
                    }(r);
                return (0, i.wipe)(r), s
            }, t.gi = function(e, r, n = !1) {
                if (e.length !== t.kz) throw Error("X25519: incorrect secret key length");
                if (r.length !== t.kz) throw Error("X25519: incorrect public key length");
                let i = p(e, r);
                if (n) {
                    let e = 0;
                    for (let t = 0; t < i.length; t++) e |= i[t];
                    if (0 === e) throw Error("X25519: invalid shared key")
                }
                return i
            }
        },
        74164: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                EthereumProvider: function() {
                    return sY
                },
                OPTIONAL_EVENTS: function() {
                    return sk
                },
                OPTIONAL_METHODS: function() {
                    return sU
                },
                REQUIRED_EVENTS: function() {
                    return sL
                },
                REQUIRED_METHODS: function() {
                    return sj
                },
                default: function() {
                    return sJ
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                identity: function() {
                    return q
                }
            });
            var i = {};
            r.r(i), r.d(i, {
                base2: function() {
                    return H
                }
            });
            var s = {};
            r.r(s), r.d(s, {
                base8: function() {
                    return F
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                base10: function() {
                    return V
                }
            });
            var a = {};
            r.r(a), r.d(a, {
                base16: function() {
                    return B
                },
                base16upper: function() {
                    return K
                }
            });
            var c = {};
            r.r(c), r.d(c, {
                base32: function() {
                    return W
                },
                base32hex: function() {
                    return Z
                },
                base32hexpad: function() {
                    return Q
                },
                base32hexpadupper: function() {
                    return ee
                },
                base32hexupper: function() {
                    return X
                },
                base32pad: function() {
                    return J
                },
                base32padupper: function() {
                    return Y
                },
                base32upper: function() {
                    return G
                },
                base32z: function() {
                    return et
                }
            });
            var u = {};
            r.r(u), r.d(u, {
                base36: function() {
                    return er
                },
                base36upper: function() {
                    return en
                }
            });
            var l = {};
            r.r(l), r.d(l, {
                base58btc: function() {
                    return ei
                },
                base58flickr: function() {
                    return es
                }
            });
            var h = {};
            r.r(h), r.d(h, {
                base64: function() {
                    return eo
                },
                base64pad: function() {
                    return ea
                },
                base64url: function() {
                    return ec
                },
                base64urlpad: function() {
                    return eu
                }
            });
            var f = {};
            r.r(f), r.d(f, {
                base256emoji: function() {
                    return ep
                }
            });
            var p = {};
            r.r(p), r.d(p, {
                sha256: function() {
                    return eS
                },
                sha512: function() {
                    return eI
                }
            });
            var d = {};
            r.r(d), r.d(d, {
                identity: function() {
                    return eP
                }
            });
            var g = {};
            r.r(g), r.d(g, {
                code: function() {
                    return eA
                },
                decode: function() {
                    return ex
                },
                encode: function() {
                    return eN
                },
                name: function() {
                    return eC
                }
            });
            var y = {};
            r.r(y), r.d(y, {
                code: function() {
                    return eU
                },
                decode: function() {
                    return ek
                },
                encode: function() {
                    return eL
                },
                name: function() {
                    return ej
                }
            });
            var v = r(17187),
                m = r.n(v),
                _ = r(15501),
                b = r(512),
                w = r(31416),
                E = r(73294),
                D = r(57664);

            function S(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function I(e = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? S(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
            }

            function O(e, t) {
                t || (t = e.reduce((e, t) => e + t.length, 0));
                let r = I(t),
                    n = 0;
                for (let t of e) r.set(t, n), n += t.length;
                return S(r)
            }
            var P = function(e, t) {
                if (e.length >= 255) throw TypeError("Alphabet too long");
                for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
                for (var i = 0; i < e.length; i++) {
                    var s = e.charAt(i),
                        o = s.charCodeAt(0);
                    if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                    r[o] = i
                }
                var a = e.length,
                    c = e.charAt(0),
                    u = Math.log(a) / Math.log(256),
                    l = Math.log(256) / Math.log(a);

                function h(e) {
                    if ("string" != typeof e) throw TypeError("Expected String");
                    if (0 === e.length) return new Uint8Array;
                    var t = 0;
                    if (" " !== e[0]) {
                        for (var n = 0, i = 0; e[t] === c;) n++, t++;
                        for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                            var l = r[e.charCodeAt(t)];
                            if (255 === l) return;
                            for (var h = 0, f = s - 1;
                                (0 !== l || h < i) && -1 !== f; f--, h++) l += a * o[f] >>> 0, o[f] = l % 256 >>> 0, l = l / 256 >>> 0;
                            if (0 !== l) throw Error("Non-zero carry");
                            i = h, t++
                        }
                        if (" " !== e[t]) {
                            for (var p = s - i; p !== s && 0 === o[p];) p++;
                            for (var d = new Uint8Array(n + (s - p)), g = n; p !== s;) d[g++] = o[p++];
                            return d
                        }
                    }
                }
                return {
                    encode: function(t) {
                        if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                        if (0 === t.length) return "";
                        for (var r = 0, n = 0, i = 0, s = t.length; i !== s && 0 === t[i];) i++, r++;
                        for (var o = (s - i) * l + 1 >>> 0, u = new Uint8Array(o); i !== s;) {
                            for (var h = t[i], f = 0, p = o - 1;
                                (0 !== h || f < n) && -1 !== p; p--, f++) h += 256 * u[p] >>> 0, u[p] = h % a >>> 0, h = h / a >>> 0;
                            if (0 !== h) throw Error("Non-zero carry");
                            n = f, i++
                        }
                        for (var d = o - n; d !== o && 0 === u[d];) d++;
                        for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
                        return g
                    },
                    decodeUnsafe: h,
                    decode: function(e) {
                        var r = h(e);
                        if (r) return r;
                        throw Error(`Non-${t} character`)
                    }
                }
            };
            new Uint8Array(0);
            let C = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                A = e => new TextEncoder().encode(e),
                N = e => new TextDecoder().decode(e);
            class x {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class R {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return j(this, e)
                }
            }
            class T {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return j(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let j = (e, t) => new T({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class U {
                constructor(e, t, r, n) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = n, this.encoder = new x(e, t, r), this.decoder = new R(e, t, n)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let L = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: n
                }) => new U(e, t, r, n),
                k = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: n,
                        decode: i
                    } = P(r, t);
                    return L({
                        prefix: e,
                        name: t,
                        encode: n,
                        decode: e => C(i(e))
                    })
                },
                M = (e, t, r, n) => {
                    let i = {};
                    for (let e = 0; e < t.length; ++e) i[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        u = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = i[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${n} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                z = (e, t, r) => {
                    let n = "=" === t[t.length - 1],
                        i = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let n = 0; n < e.length; ++n)
                        for (a = a << 8 | e[n], o += 8; o > r;) o -= r, s += t[i & a >> o];
                    if (o && (s += t[i & a << r - o]), n)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                $ = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: n
                }) => L({
                    prefix: t,
                    name: e,
                    encode: e => z(e, n, r),
                    decode: t => M(t, n, r, e)
                }),
                q = L({
                    prefix: "\x00",
                    name: "identity",
                    encode: e => N(e),
                    decode: e => A(e)
                }),
                H = $({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                F = $({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                V = k({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                B = $({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                K = $({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                }),
                W = $({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                G = $({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                J = $({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                Y = $({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                Z = $({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                X = $({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                Q = $({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                ee = $({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                et = $({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                }),
                er = k({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                en = k({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                }),
                ei = k({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                es = k({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                }),
                eo = $({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                ea = $({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                ec = $({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                eu = $({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                el = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                eh = el.reduce((e, t, r) => (e[r] = t, e), []),
                ef = el.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []),
                ep = L({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += eh[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = ef[r.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                });

            function ed(e, t, r) {
                t = t || [];
                for (var n = r = r || 0; e >= 2147483648;) t[r++] = 255 & e | 128, e /= 128;
                for (; - 128 & e;) t[r++] = 255 & e | 128, e >>>= 7;
                return t[r] = 0 | e, ed.bytes = r - n + 1, t
            }

            function eg(e, t) {
                var r, n = 0,
                    t = t || 0,
                    i = 0,
                    s = t,
                    o = e.length;
                do {
                    if (s >= o) throw eg.bytes = 0, RangeError("Could not decode varint");
                    r = e[s++], n += i < 28 ? (127 & r) << i : (127 & r) * Math.pow(2, i), i += 7
                } while (r >= 128);
                return eg.bytes = s - t, n
            }
            var ey = {
                encode: ed,
                decode: eg,
                encodingLength: function(e) {
                    return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                }
            };
            let ev = (e, t, r = 0) => (ey.encode(e, t, r), t),
                em = e => ey.encodingLength(e),
                e_ = (e, t) => {
                    let r = t.byteLength,
                        n = em(e),
                        i = n + em(r),
                        s = new Uint8Array(i + r);
                    return ev(e, s, 0), ev(r, s, n), s.set(t, i), new eb(e, r, t, s)
                };
            class eb {
                constructor(e, t, r, n) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = n
                }
            }
            let ew = ({
                name: e,
                code: t,
                encode: r
            }) => new eE(e, t, r);
            class eE {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? e_(this.code, t) : t.then(e => e_(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let eD = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                eS = ew({
                    name: "sha2-256",
                    code: 18,
                    encode: eD("SHA-256")
                }),
                eI = ew({
                    name: "sha2-512",
                    code: 19,
                    encode: eD("SHA-512")
                }),
                eO = e => e_(0, C(e)),
                eP = {
                    code: 0,
                    name: "identity",
                    encode: C,
                    digest: eO
                },
                eC = "raw",
                eA = 85,
                eN = e => C(e),
                ex = e => C(e),
                eR = new TextEncoder,
                eT = new TextDecoder,
                ej = "json",
                eU = 512,
                eL = e => eR.encode(JSON.stringify(e)),
                ek = e => JSON.parse(eT.decode(e));
            class eM {
                constructor(e, t, r, n) {
                    this.code = t, this.version = e, this.multihash = r, this.bytes = n, this.byteOffset = n.byteOffset, this.byteLength = n.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
                        byteOffset: eW,
                        byteLength: eW,
                        code: eK,
                        version: eK,
                        multihash: eK,
                        bytes: eK,
                        _baseCache: eW,
                        asCID: eW
                    })
                }
                toV0() {
                    if (0 === this.version) return this; {
                        let {
                            code: e,
                            multihash: t
                        } = this;
                        if (e !== eH) throw Error("Cannot convert a non dag-pb CID to CIDv0");
                        if (t.code !== eF) throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                        return eM.createV0(t)
                    }
                }
                toV1() {
                    switch (this.version) {
                        case 0:
                            {
                                let {
                                    code: e,
                                    digest: t
                                } = this.multihash,
                                r = Digest.create(e, t);
                                return eM.createV1(this.code, r)
                            }
                        case 1:
                            return this;
                        default:
                            throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
                    }
                }
                equals(e) {
                    return e && this.code === e.code && this.version === e.version && Digest.equals(this.multihash, e.multihash)
                }
                toString(e) {
                    let {
                        bytes: t,
                        version: r,
                        _baseCache: n
                    } = this;
                    return 0 === r ? e$(t, n, e || base58btc.encoder) : eq(t, n, e || base32.encoder)
                }
                toJSON() {
                    return {
                        code: this.code,
                        version: this.version,
                        hash: this.multihash.bytes
                    }
                }
                get[Symbol.toStringTag]() {
                    return "CID"
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return "CID(" + this.toString() + ")"
                }
                static isCID(e) {
                    return eG(/^0\.0/, eJ), !!(e && (e[eB] || e.asCID === e))
                }
                get toBaseEncodedString() {
                    throw Error("Deprecated, use .toString()")
                }
                get codec() {
                    throw Error('"codec" property is deprecated, use integer "code" property instead')
                }
                get buffer() {
                    throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
                }
                get multibaseName() {
                    throw Error('"multibaseName" property is deprecated')
                }
                get prefix() {
                    throw Error('"prefix" property is deprecated')
                }
                static asCID(e) {
                    if (e instanceof eM) return e;
                    if (null != e && e.asCID === e) {
                        let {
                            version: t,
                            code: r,
                            multihash: n,
                            bytes: i
                        } = e;
                        return new eM(t, r, n, i || eV(t, r, n.bytes))
                    }
                    if (null == e || !0 !== e[eB]) return null; {
                        let {
                            version: t,
                            multihash: r,
                            code: n
                        } = e, i = Digest.decode(r);
                        return eM.create(t, n, i)
                    }
                }
                static create(e, t, r) {
                    if ("number" != typeof t) throw Error("String codecs are no longer supported");
                    switch (e) {
                        case 0:
                            if (t === eH) return new eM(e, t, r, r.bytes);
                            throw Error(`Version 0 CID must use dag-pb (code: ${eH}) block encoding`);
                        case 1:
                            {
                                let n = eV(e, t, r.bytes);
                                return new eM(e, t, r, n)
                            }
                        default:
                            throw Error("Invalid version")
                    }
                }
                static createV0(e) {
                    return eM.create(0, eH, e)
                }
                static createV1(e, t) {
                    return eM.create(1, e, t)
                }
                static decode(e) {
                    let [t, r] = eM.decodeFirst(e);
                    if (r.length) throw Error("Incorrect length");
                    return t
                }
                static decodeFirst(e) {
                    let t = eM.inspectBytes(e),
                        r = t.size - t.multihashSize,
                        n = coerce(e.subarray(r, r + t.multihashSize));
                    if (n.byteLength !== t.multihashSize) throw Error("Incorrect length");
                    let i = n.subarray(t.multihashSize - t.digestSize),
                        s = new Digest.Digest(t.multihashCode, t.digestSize, i, n),
                        o = 0 === t.version ? eM.createV0(s) : eM.createV1(t.codec, s);
                    return [o, e.subarray(t.size)]
                }
                static inspectBytes(e) {
                    let t = 0,
                        r = () => {
                            let [r, n] = varint.decode(e.subarray(t));
                            return t += n, r
                        },
                        n = r(),
                        i = eH;
                    if (18 === n ? (n = 0, t = 0) : 1 === n && (i = r()), 0 !== n && 1 !== n) throw RangeError(`Invalid CID version ${n}`);
                    let s = t,
                        o = r(),
                        a = r(),
                        c = t + a;
                    return {
                        version: n,
                        codec: i,
                        multihashCode: o,
                        digestSize: a,
                        multihashSize: c - s,
                        size: c
                    }
                }
                static parse(e, t) {
                    let [r, n] = ez(e, t), i = eM.decode(n);
                    return i._baseCache.set(r, e), i
                }
            }
            let ez = (e, t) => {
                    switch (e[0]) {
                        case "Q":
                            {
                                let r = t || base58btc;
                                return [base58btc.prefix, r.decode(`${base58btc.prefix}${e}`)]
                            }
                        case base58btc.prefix:
                            {
                                let r = t || base58btc;
                                return [base58btc.prefix, r.decode(e)]
                            }
                        case base32.prefix:
                            {
                                let r = t || base32;
                                return [base32.prefix, r.decode(e)]
                            }
                        default:
                            if (null == t) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
                            return [e[0], t.decode(e)]
                    }
                },
                e$ = (e, t, r) => {
                    let {
                        prefix: n
                    } = r;
                    if (n !== base58btc.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
                    let i = t.get(n);
                    if (null != i) return i; {
                        let i = r.encode(e).slice(1);
                        return t.set(n, i), i
                    }
                },
                eq = (e, t, r) => {
                    let {
                        prefix: n
                    } = r, i = t.get(n);
                    if (null != i) return i; {
                        let i = r.encode(e);
                        return t.set(n, i), i
                    }
                },
                eH = 112,
                eF = 18,
                eV = (e, t, r) => {
                    let n = varint.encodingLength(e),
                        i = n + varint.encodingLength(t),
                        s = new Uint8Array(i + r.byteLength);
                    return varint.encodeTo(e, s, 0), varint.encodeTo(t, s, n), s.set(r, i), s
                },
                eB = Symbol.for("@ipld/js-cid/CID"),
                eK = {
                    writable: !1,
                    configurable: !1,
                    enumerable: !0
                },
                eW = {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1
                },
                eG = (e, t) => {
                    if (e.test("0.0.0-dev")) console.warn(t);
                    else throw Error(t)
                },
                eJ = null,
                eY = { ...n,
                    ...i,
                    ...s,
                    ...o,
                    ...a,
                    ...c,
                    ...u,
                    ...l,
                    ...h,
                    ...f
                };

            function eZ(e, t, r, n) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: n
                    }
                }
            }({ ...p,
                ...d
            });
            let eX = eZ("utf8", "u", e => {
                    let t = new TextDecoder("utf8");
                    return "u" + t.decode(e)
                }, e => {
                    let t = new TextEncoder;
                    return t.encode(e.substring(1))
                }),
                eQ = eZ("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    e = e.substring(1);
                    let t = I(e.length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                e0 = {
                    utf8: eX,
                    "utf-8": eX,
                    hex: eY.base16,
                    latin1: eQ,
                    ascii: eQ,
                    binary: eQ,
                    ...eY
                };

            function e1(e, t = "utf8") {
                let r = e0[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? S(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
            }

            function e5(e, t = "utf8") {
                let r = e0[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1)
            }
            var e3 = r(66736),
                e6 = r(62873),
                e2 = r(65755);
            r(87283), r(61882);
            let e8 = {
                waku: {
                    publish: "waku_publish",
                    batchPublish: "waku_batchPublish",
                    subscribe: "waku_subscribe",
                    batchSubscribe: "waku_batchSubscribe",
                    subscription: "waku_subscription",
                    unsubscribe: "waku_unsubscribe",
                    batchUnsubscribe: "waku_batchUnsubscribe"
                },
                irn: {
                    publish: "irn_publish",
                    batchPublish: "irn_batchPublish",
                    subscribe: "irn_subscribe",
                    batchSubscribe: "irn_batchSubscribe",
                    subscription: "irn_subscription",
                    unsubscribe: "irn_unsubscribe",
                    batchUnsubscribe: "irn_batchUnsubscribe"
                },
                iridium: {
                    publish: "iridium_publish",
                    batchPublish: "iridium_batchPublish",
                    subscribe: "iridium_subscribe",
                    batchSubscribe: "iridium_batchSubscribe",
                    subscription: "iridium_subscription",
                    unsubscribe: "iridium_unsubscribe",
                    batchUnsubscribe: "iridium_batchUnsubscribe"
                }
            };
            r(34155), Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let e4 = {
                INVALID_METHOD: {
                    message: "Invalid method.",
                    code: 1001
                },
                INVALID_EVENT: {
                    message: "Invalid event.",
                    code: 1002
                },
                INVALID_UPDATE_REQUEST: {
                    message: "Invalid update request.",
                    code: 1003
                },
                INVALID_EXTEND_REQUEST: {
                    message: "Invalid extend request.",
                    code: 1004
                },
                INVALID_SESSION_SETTLE_REQUEST: {
                    message: "Invalid session settle request.",
                    code: 1005
                },
                UNAUTHORIZED_METHOD: {
                    message: "Unauthorized method.",
                    code: 3001
                },
                UNAUTHORIZED_EVENT: {
                    message: "Unauthorized event.",
                    code: 3002
                },
                UNAUTHORIZED_UPDATE_REQUEST: {
                    message: "Unauthorized update request.",
                    code: 3003
                },
                UNAUTHORIZED_EXTEND_REQUEST: {
                    message: "Unauthorized extend request.",
                    code: 3004
                },
                USER_REJECTED: {
                    message: "User rejected.",
                    code: 5e3
                },
                USER_REJECTED_CHAINS: {
                    message: "User rejected chains.",
                    code: 5001
                },
                USER_REJECTED_METHODS: {
                    message: "User rejected methods.",
                    code: 5002
                },
                USER_REJECTED_EVENTS: {
                    message: "User rejected events.",
                    code: 5003
                },
                UNSUPPORTED_CHAINS: {
                    message: "Unsupported chains.",
                    code: 5100
                },
                UNSUPPORTED_METHODS: {
                    message: "Unsupported methods.",
                    code: 5101
                },
                UNSUPPORTED_EVENTS: {
                    message: "Unsupported events.",
                    code: 5102
                },
                UNSUPPORTED_ACCOUNTS: {
                    message: "Unsupported accounts.",
                    code: 5103
                },
                UNSUPPORTED_NAMESPACE_KEY: {
                    message: "Unsupported namespace key.",
                    code: 5104
                },
                USER_DISCONNECTED: {
                    message: "User disconnected.",
                    code: 6e3
                },
                SESSION_SETTLEMENT_FAILED: {
                    message: "Session settlement failed.",
                    code: 7e3
                },
                WC_METHOD_UNSUPPORTED: {
                    message: "Unsupported wc_ method.",
                    code: 10001
                }
            };

            function e9(e, t) {
                return !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
            }
            var e7 = r(85150),
                te = r(90772),
                tt = r(9107),
                tr = r(38200);
            class tn extends tr.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class ti extends tr.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class ts {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class to extends tr.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class ta extends tr.q {
                constructor(e) {
                    super()
                }
            }
            class tc {
                constructor(e, t, r, n) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class tu extends tr.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class tl extends tr.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class th {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class tf {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class tp {
                constructor(e) {
                    this.client = e
                }
            }
            var td = r(85094),
                tg = r(31050);
            let ty = "base64url",
                tv = "base58btc";

            function tm(e) {
                return e5(e1((0, td.u)(e), "utf8"), ty)
            }

            function t_(e) {
                let t = e1("K36", tv),
                    r = "z" + e5(O([t, e]), tv);
                return ["did", "key", r].join(":")
            }

            function tb(e = (0, w.randomBytes)(32)) {
                return tg._w(e)
            }
            async function tw(e, t, r, n, i = (0, e3.fromMiliseconds)(Date.now())) {
                var s, o;
                let a = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    c = t_(n.publicKey),
                    u = {
                        iss: c,
                        sub: e,
                        aud: t,
                        iat: i,
                        exp: i + r
                    },
                    l = e1([tm((s = {
                        header: a,
                        payload: u
                    }).header), tm(s.payload)].join("."), "utf8"),
                    h = tg.Xx(n.secretKey, l);
                return [tm((o = {
                    header: a,
                    payload: u,
                    signature: h
                }).header), tm(o.payload), e5(o.signature, ty)].join(".")
            }
            r(43014);
            var tE = r(43631),
                tD = r(87338),
                tS = r(34155);

            function tI(e, t) {
                return e.includes(":") ? [e] : t.chains || []
            }
            let tO = "base10",
                tP = "base16",
                tC = "base64pad",
                tA = "utf8";

            function tN() {
                let e = (0, w.randomBytes)(32);
                return e5(e, tP)
            }

            function tx(e) {
                let t = (0, E.vp)(e1(e, tA));
                return e5(t, tP)
            }

            function tR(e) {
                return Number(e5(e, tO))
            }

            function tT(e) {
                let t = e1(e, tC),
                    r = t.slice(0, 1);
                if (1 === tR(r)) {
                    let e = t.slice(1, 33),
                        n = t.slice(33, 45),
                        i = t.slice(45);
                    return {
                        type: r,
                        sealed: i,
                        iv: n,
                        senderPublicKey: e
                    }
                }
                let n = t.slice(1, 13),
                    i = t.slice(13);
                return {
                    type: r,
                    sealed: i,
                    iv: n
                }
            }

            function tj(e) {
                let t = e ? .type || 0;
                if (1 === t) {
                    if (typeof e ? .senderPublicKey > "u") throw Error("missing sender public key");
                    if (typeof e ? .receiverPublicKey > "u") throw Error("missing receiver public key")
                }
                return {
                    type: t,
                    senderPublicKey: e ? .senderPublicKey,
                    receiverPublicKey: e ? .receiverPublicKey
                }
            }

            function tU(e) {
                return 1 === e.type && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
            }
            var tL = Object.defineProperty,
                tk = Object.getOwnPropertySymbols,
                tM = Object.prototype.hasOwnProperty,
                tz = Object.prototype.propertyIsEnumerable,
                t$ = (e, t, r) => t in e ? tL(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                tq = (e, t) => {
                    for (var r in t || (t = {})) tM.call(t, r) && t$(e, r, t[r]);
                    if (tk)
                        for (var r of tk(t)) tz.call(t, r) && t$(e, r, t[r]);
                    return e
                };
            let tH = {
                reactNative: "react-native",
                node: "node",
                browser: "browser",
                unknown: "unknown"
            };

            function tF() {
                return "u" > typeof tS && "u" > typeof tS.versions && "u" > typeof tS.versions.node
            }

            function tV() {
                return !(0, e6.getDocument)() && !!(0, e6.getNavigator)() && "ReactNative" === navigator.product
            }

            function tB() {
                return !tF() && !!(0, e6.getNavigator)()
            }

            function tK() {
                return tV() ? tH.reactNative : tF() ? tH.node : tB() ? tH.browser : tH.unknown
            }

            function tW(e, t) {
                return e.filter(e => t.includes(e)).length === e.length
            }

            function tG(e) {
                return Object.fromEntries(e.entries())
            }

            function tJ(e) {
                return new Map(Object.entries(e))
            }

            function tY(e = e3.FIVE_MINUTES, t) {
                let r, n, i;
                let s = (0, e3.toMiliseconds)(e || e3.FIVE_MINUTES);
                return {
                    resolve: e => {
                        i && r && (clearTimeout(i), r(e))
                    },
                    reject: e => {
                        i && n && (clearTimeout(i), n(e))
                    },
                    done: () => new Promise((e, o) => {
                        i = setTimeout(() => {
                            o(Error(t))
                        }, s), r = e, n = o
                    })
                }
            }

            function tZ(e, t, r) {
                return new Promise(async (n, i) => {
                    let s = setTimeout(() => i(Error(r)), t);
                    try {
                        let t = await e;
                        n(t)
                    } catch (e) {
                        i(e)
                    }
                    clearTimeout(s)
                })
            }

            function tX(e, t) {
                if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
                if ("topic" === e.toLowerCase()) {
                    if ("string" != typeof t) throw Error('Value must be "string" for expirer target type: topic');
                    return `topic:${t}`
                }
                if ("id" === e.toLowerCase()) {
                    if ("number" != typeof t) throw Error('Value must be "number" for expirer target type: id');
                    return `id:${t}`
                }
                throw Error(`Unknown expirer target type: ${e}`)
            }

            function tQ(e) {
                let [t, r] = e.split(":"), n = {
                    id: void 0,
                    topic: void 0
                };
                if ("topic" === t && "string" == typeof r) n.topic = r;
                else if ("id" === t && Number.isInteger(Number(r))) n.id = Number(r);
                else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
                return n
            }

            function t0(e, t) {
                return (0, e3.fromMiliseconds)((t || Date.now()) + (0, e3.toMiliseconds)(e))
            }

            function t1(e) {
                return Date.now() >= (0, e3.toMiliseconds)(e)
            }

            function t5(e, t) {
                return `${e}${t?`:${t}`:""}`
            }
            async function t3({
                id: e,
                topic: t,
                wcDeepLink: n
            }) {
                try {
                    if (!n) return;
                    let i = "string" == typeof n ? JSON.parse(n) : n,
                        s = i ? .href;
                    if ("string" != typeof s) return;
                    s.endsWith("/") && (s = s.slice(0, -1));
                    let o = `${s}/wc?requestId=${e}&sessionTopic=${t}`,
                        a = tK();
                    a === tH.browser ? window.open(o, "_self", "noreferrer noopener") : a === tH.reactNative && "u" > typeof(null == r.g ? void 0 : r.g.Linking) && await r.g.Linking.openURL(o)
                } catch (e) {
                    console.error(e)
                }
            }

            function t6(e) {
                return e ? .relay || {
                    protocol: "irn"
                }
            }

            function t2(e) {
                let t = e8[e];
                if (typeof t > "u") throw Error(`Relay Protocol not supported: ${e}`);
                return t
            }
            var t8 = Object.defineProperty,
                t4 = Object.getOwnPropertySymbols,
                t9 = Object.prototype.hasOwnProperty,
                t7 = Object.prototype.propertyIsEnumerable,
                re = (e, t, r) => t in e ? t8(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rt = (e, t) => {
                    for (var r in t || (t = {})) t9.call(t, r) && re(e, r, t[r]);
                    if (t4)
                        for (var r of t4(t)) t7.call(t, r) && re(e, r, t[r]);
                    return e
                };

            function rr(e) {
                let t = [];
                return e.forEach(e => {
                    let [r, n] = e.split(":");
                    t.push(`${r}:${n}`)
                }), t
            }
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let rn = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                ri = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function rs(e, t) {
                let {
                    message: r,
                    code: n
                } = ri[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: n
                }
            }

            function ro(e, t) {
                let {
                    message: r,
                    code: n
                } = rn[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: n
                }
            }

            function ra(e, t) {
                return !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
            }

            function rc(e) {
                return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
            }

            function ru(e) {
                return typeof e > "u"
            }

            function rl(e, t) {
                return !!(t && ru(e)) || "string" == typeof e && !!e.trim().length
            }

            function rh(e, t) {
                return !!(t && ru(e)) || "number" == typeof e && !isNaN(e)
            }

            function rf(e) {
                return !!(rl(e, !1) && e.includes(":")) && 2 === e.split(":").length
            }

            function rp(e) {
                let t = !0;
                return ra(e) ? e.length && (t = e.every(e => rl(e, !1))) : t = !1, t
            }

            function rd(e, t) {
                let r = null;
                return Object.values(e).forEach(e => {
                    var n;
                    let i;
                    if (r) return;
                    let s = (n = `${t}, namespace`, i = null, rp(e ? .methods) ? rp(e ? .events) || (i = ro("UNSUPPORTED_EVENTS", `${n}, events should be an array of strings or empty array for no events`)) : i = ro("UNSUPPORTED_METHODS", `${n}, methods should be an array of strings or empty array for no methods`), i);
                    s && (r = s)
                }), r
            }

            function rg(e, t) {
                let r = null;
                if (e && rc(e)) {
                    let n;
                    let i = rd(e, t);
                    i && (r = i);
                    let s = (n = null, Object.values(e).forEach(e => {
                        var r, i;
                        let s;
                        if (n) return;
                        let o = (r = e ? .accounts, i = `${t} namespace`, s = null, ra(r) ? r.forEach(e => {
                            s || function(e) {
                                if (rl(e, !1) && e.includes(":")) {
                                    let t = e.split(":");
                                    if (3 === t.length) {
                                        let e = t[0] + ":" + t[1];
                                        return !!t[2] && rf(e)
                                    }
                                }
                                return !1
                            }(e) || (s = ro("UNSUPPORTED_ACCOUNTS", `${i}, account ${e} should be a string and conform to "namespace:chainId:address" format`))
                        }) : s = ro("UNSUPPORTED_ACCOUNTS", `${i}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), s);
                        o && (n = o)
                    }), n);
                    s && (r = s)
                } else r = rs("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
                return r
            }

            function ry(e) {
                return rl(e.protocol, !0)
            }

            function rv(e) {
                return "u" > typeof e
            }

            function rm(e, t) {
                return !(!rf(t) || !(function(e) {
                    let t = [];
                    return Object.values(e).forEach(e => {
                        t.push(...rr(e.accounts))
                    }), t
                })(e).includes(t))
            }

            function r_(e, t, r) {
                let n = null,
                    i = function(e) {
                        let t = {};
                        return Object.keys(e).forEach(r => {
                            var n;
                            r.includes(":") ? t[r] = e[r] : null == (n = e[r].chains) || n.forEach(n => {
                                t[n] = {
                                    methods: e[r].methods,
                                    events: e[r].events
                                }
                            })
                        }), t
                    }(e),
                    s = function(e) {
                        let t = {};
                        return Object.keys(e).forEach(r => {
                            if (r.includes(":")) t[r] = e[r];
                            else {
                                let n = rr(e[r].accounts);
                                n ? .forEach(n => {
                                    t[n] = {
                                        accounts: e[r].accounts.filter(e => e.includes(`${n}:`)),
                                        methods: e[r].methods,
                                        events: e[r].events
                                    }
                                })
                            }
                        }), t
                    }(t),
                    o = Object.keys(i),
                    a = Object.keys(s),
                    c = rb(Object.keys(e)),
                    u = rb(Object.keys(t)),
                    l = c.filter(e => !u.includes(e));
                return l.length && (n = rs("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(t).toString()}`)), tW(o, a) || (n = rs("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(t).forEach(e => {
                    if (!e.includes(":") || n) return;
                    let i = rr(t[e].accounts);
                    i.includes(e) || (n = rs("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${i.toString()}`))
                }), o.forEach(e => {
                    n || (tW(i[e].methods, s[e].methods) ? tW(i[e].events, s[e].events) || (n = rs("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${e}`)) : n = rs("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${e}`))
                }), n
            }

            function rb(e) {
                return [...new Set(e.map(e => e.includes(":") ? e.split(":")[0] : e))]
            }
            var rw = r(46160),
                rE = r(56186);
            let rD = () => "undefined" != typeof window,
                rS = void 0 !== r.g && void 0 !== r.g.WebSocket ? r.g.WebSocket : "undefined" != typeof window && void 0 !== window.WebSocket ? window.WebSocket : r(57026);
            var rI = class {
                    constructor(e) {
                        if (this.url = e, this.events = new v.EventEmitter, this.registering = !1, !(0, rE.isWsUrl)(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                        this.url = e
                    }
                    get connected() {
                        return void 0 !== this.socket
                    }
                    get connecting() {
                        return this.registering
                    }
                    on(e, t) {
                        this.events.on(e, t)
                    }
                    once(e, t) {
                        this.events.once(e, t)
                    }
                    off(e, t) {
                        this.events.off(e, t)
                    }
                    removeListener(e, t) {
                        this.events.removeListener(e, t)
                    }
                    async open(e = this.url) {
                        await this.register(e)
                    }
                    async close() {
                        return new Promise((e, t) => {
                            if (void 0 === this.socket) {
                                t(Error("Connection already closed"));
                                return
                            }
                            this.socket.onclose = t => {
                                this.onClose(t), e()
                            }, this.socket.close()
                        })
                    }
                    async send(e, t) {
                        void 0 === this.socket && (this.socket = await this.register());
                        try {
                            this.socket.send((0, td.u)(e))
                        } catch (t) {
                            this.onError(e.id, t)
                        }
                    }
                    register(e = this.url) {
                        if (!(0, rE.isWsUrl)(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                        if (this.registering) {
                            let e = this.events.getMaxListeners();
                            return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                                this.events.once("register_error", e => {
                                    this.resetMaxListeners(), t(e)
                                }), this.events.once("open", () => {
                                    if (this.resetMaxListeners(), void 0 === this.socket) return t(Error("WebSocket connection is missing or invalid"));
                                    e(this.socket)
                                })
                            })
                        }
                        return this.url = e, this.registering = !0, new Promise((t, r) => {
                            let n = (0, rE.isReactNative)() ? void 0 : {
                                    rejectUnauthorized: !(0, rE.isLocalhostUrl)(e)
                                },
                                i = new rS(e, [], n);
                            rD() ? i.onerror = e => {
                                r(this.emitError(e.error))
                            } : i.on("error", e => {
                                r(this.emitError(e))
                            }), i.onopen = () => {
                                this.onOpen(i), t(i)
                            }
                        })
                    }
                    onOpen(e) {
                        e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                    }
                    onClose(e) {
                        this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                    }
                    onPayload(e) {
                        if (void 0 === e.data) return;
                        let t = "string" == typeof e.data ? (0, td.D)(e.data) : e.data;
                        this.events.emit("payload", t)
                    }
                    onError(e, t) {
                        let r = this.parseError(t),
                            n = r.message || r.toString(),
                            i = (0, rE.formatJsonRpcError)(e, n);
                        this.events.emit("payload", i)
                    }
                    parseError(e, t = this.url) {
                        return (0, rE.parseConnectionError)(e, t, "WS")
                    }
                    resetMaxListeners() {
                        this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                    }
                    emitError(e) {
                        let t = this.parseError(Error((null == e ? void 0 : e.message) || `WebSocket connection failed for URL: ${this.url}`));
                        return this.events.emit("register_error", t), t
                    }
                },
                rO = r(72307),
                rP = r.n(rO),
                rC = r(34155),
                rA = function(e, t) {
                    if (e.length >= 255) throw TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
                    for (var i = 0; i < e.length; i++) {
                        var s = e.charAt(i),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                        r[o] = i
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        l = Math.log(256) / Math.log(a);

                    function h(e) {
                        if ("string" != typeof e) throw TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[0]) {
                            for (var n = 0, i = 0; e[t] === c;) n++, t++;
                            for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                                var l = r[e.charCodeAt(t)];
                                if (255 === l) return;
                                for (var h = 0, f = s - 1;
                                    (0 !== l || h < i) && -1 !== f; f--, h++) l += a * o[f] >>> 0, o[f] = l % 256 >>> 0, l = l / 256 >>> 0;
                                if (0 !== l) throw Error("Non-zero carry");
                                i = h, t++
                            }
                            if (" " !== e[t]) {
                                for (var p = s - i; p !== s && 0 === o[p];) p++;
                                for (var d = new Uint8Array(n + (s - p)), g = n; p !== s;) d[g++] = o[p++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var r = 0, n = 0, i = 0, s = t.length; i !== s && 0 === t[i];) i++, r++;
                            for (var o = (s - i) * l + 1 >>> 0, u = new Uint8Array(o); i !== s;) {
                                for (var h = t[i], f = 0, p = o - 1;
                                    (0 !== h || f < n) && -1 !== p; p--, f++) h += 256 * u[p] >>> 0, u[p] = h % a >>> 0, h = h / a >>> 0;
                                if (0 !== h) throw Error("Non-zero carry");
                                n = f, i++
                            }
                            for (var d = o - n; d !== o && 0 === u[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
                            return g
                        },
                        decodeUnsafe: h,
                        decode: function(e) {
                            var r = h(e);
                            if (r) return r;
                            throw Error(`Non-${t} character`)
                        }
                    }
                };
            let rN = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                rx = e => new TextEncoder().encode(e),
                rR = e => new TextDecoder().decode(e);
            class rT {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class rj {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return rL(this, e)
                }
            }
            class rU {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return rL(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let rL = (e, t) => new rU({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class rk {
                constructor(e, t, r, n) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = n, this.encoder = new rT(e, t, r), this.decoder = new rj(e, t, n)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let rM = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: n
                }) => new rk(e, t, r, n),
                rz = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: n,
                        decode: i
                    } = rA(r, t);
                    return rM({
                        prefix: e,
                        name: t,
                        encode: n,
                        decode: e => rN(i(e))
                    })
                },
                r$ = (e, t, r, n) => {
                    let i = {};
                    for (let e = 0; e < t.length; ++e) i[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        u = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = i[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${n} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                rq = (e, t, r) => {
                    let n = "=" === t[t.length - 1],
                        i = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let n = 0; n < e.length; ++n)
                        for (a = a << 8 | e[n], o += 8; o > r;) o -= r, s += t[i & a >> o];
                    if (o && (s += t[i & a << r - o]), n)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                rH = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: n
                }) => rM({
                    prefix: t,
                    name: e,
                    encode: e => rq(e, n, r),
                    decode: t => r$(t, n, r, e)
                }),
                rF = rM({
                    prefix: "\x00",
                    name: "identity",
                    encode: e => rR(e),
                    decode: e => rx(e)
                });
            var rV = Object.freeze({
                __proto__: null,
                identity: rF
            });
            let rB = rH({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var rK = Object.freeze({
                __proto__: null,
                base2: rB
            });
            let rW = rH({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var rG = Object.freeze({
                __proto__: null,
                base8: rW
            });
            let rJ = rz({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var rY = Object.freeze({
                __proto__: null,
                base10: rJ
            });
            let rZ = rH({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                rX = rH({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var rQ = Object.freeze({
                __proto__: null,
                base16: rZ,
                base16upper: rX
            });
            let r0 = rH({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                r1 = rH({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                r5 = rH({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                r3 = rH({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                r6 = rH({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                r2 = rH({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                r8 = rH({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                r4 = rH({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                r9 = rH({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var r7 = Object.freeze({
                __proto__: null,
                base32: r0,
                base32upper: r1,
                base32pad: r5,
                base32padupper: r3,
                base32hex: r6,
                base32hexupper: r2,
                base32hexpad: r8,
                base32hexpadupper: r4,
                base32z: r9
            });
            let ne = rz({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                nt = rz({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var nr = Object.freeze({
                __proto__: null,
                base36: ne,
                base36upper: nt
            });
            let nn = rz({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                ni = rz({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var ns = Object.freeze({
                __proto__: null,
                base58btc: nn,
                base58flickr: ni
            });
            let no = rH({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                na = rH({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                nc = rH({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                nu = rH({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var nl = Object.freeze({
                __proto__: null,
                base64: no,
                base64pad: na,
                base64url: nc,
                base64urlpad: nu
            });
            let nh = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                nf = nh.reduce((e, t, r) => (e[r] = t, e), []),
                np = nh.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []),
                nd = rM({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += nf[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = np[r.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                });
            var ng = Object.freeze({
                __proto__: null,
                base256emoji: nd
            });

            function ny(e, t, r) {
                t = t || [], r = r || 0;
                for (var n = r; e >= 2147483648;) t[r++] = 255 & e | 128, e /= 128;
                for (; - 128 & e;) t[r++] = 255 & e | 128, e >>>= 7;
                return t[r] = 0 | e, ny.bytes = r - n + 1, t
            }

            function nv(e, t) {
                var r, n = 0,
                    t = t || 0,
                    i = 0,
                    s = t,
                    o = e.length;
                do {
                    if (s >= o) throw nv.bytes = 0, RangeError("Could not decode varint");
                    r = e[s++], n += i < 28 ? (127 & r) << i : (127 & r) * Math.pow(2, i), i += 7
                } while (r >= 128);
                return nv.bytes = s - t, n
            }
            var nm = {
                encode: ny,
                decode: nv,
                encodingLength: function(e) {
                    return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                }
            };
            let n_ = (e, t, r = 0) => (nm.encode(e, t, r), t),
                nb = e => nm.encodingLength(e),
                nw = (e, t) => {
                    let r = t.byteLength,
                        n = nb(e),
                        i = n + nb(r),
                        s = new Uint8Array(i + r);
                    return n_(e, s, 0), n_(r, s, n), s.set(t, i), new nE(e, r, t, s)
                };
            class nE {
                constructor(e, t, r, n) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = n
                }
            }
            let nD = ({
                name: e,
                code: t,
                encode: r
            }) => new nS(e, t, r);
            class nS {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? nw(this.code, t) : t.then(e => nw(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let nI = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                nO = nD({
                    name: "sha2-256",
                    code: 18,
                    encode: nI("SHA-256")
                }),
                nP = nD({
                    name: "sha2-512",
                    code: 19,
                    encode: nI("SHA-512")
                });
            var nC = Object.freeze({
                __proto__: null,
                sha256: nO,
                sha512: nP
            });
            let nA = e => nw(0, rN(e));
            var nN = Object.freeze({
                __proto__: null,
                identity: {
                    code: 0,
                    name: "identity",
                    encode: rN,
                    digest: nA
                }
            });
            new TextEncoder, new TextDecoder;
            let nx = { ...rV,
                ...rK,
                ...rG,
                ...rY,
                ...rQ,
                ...r7,
                ...nr,
                ...ns,
                ...nl,
                ...ng
            };

            function nR(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function nT(e, t, r, n) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: n
                    }
                }
            }({ ...nC,
                ...nN
            });
            let nj = nT("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                nU = nT("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    e = e.substring(1);
                    let t = function(e = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? nR(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
                    }(e.length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                nL = {
                    utf8: nj,
                    "utf-8": nj,
                    hex: nx.base16,
                    latin1: nU,
                    ascii: nU,
                    binary: nU,
                    ...nx
                },
                nk = "core",
                nM = `wc@2:${nk}:`,
                nz = {
                    name: nk,
                    logger: "error"
                },
                n$ = {
                    database: ":memory:"
                },
                nq = "client_ed25519_seed",
                nH = e3.ONE_DAY,
                nF = e3.SIX_HOURS,
                nV = "wss://relay.walletconnect.com",
                nB = {
                    message: "relayer_message",
                    message_ack: "relayer_message_ack",
                    connect: "relayer_connect",
                    disconnect: "relayer_disconnect",
                    error: "relayer_error",
                    connection_stalled: "relayer_connection_stalled",
                    transport_closed: "relayer_transport_closed",
                    publish: "relayer_publish"
                },
                nK = {
                    payload: "payload",
                    connect: "connect",
                    disconnect: "disconnect",
                    error: "error"
                },
                nW = e3.ONE_SECOND / 2,
                nG = {
                    created: "subscription_created",
                    deleted: "subscription_deleted",
                    expired: "subscription_expired",
                    disabled: "subscription_disabled",
                    sync: "subscription_sync",
                    resubscribed: "subscription_resubscribed"
                },
                nJ = 1e3 * e3.FIVE_SECONDS,
                nY = {
                    wc_pairingDelete: {
                        req: {
                            ttl: e3.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: e3.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: e3.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: e3.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: e3.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: e3.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                nZ = {
                    created: "history_created",
                    updated: "history_updated",
                    deleted: "history_deleted",
                    sync: "history_sync"
                },
                nX = {
                    created: "expirer_created",
                    deleted: "expirer_deleted",
                    expired: "expirer_expired",
                    sync: "expirer_sync"
                },
                nQ = "verify-api",
                n0 = "https://verify.walletconnect.com";
            class n1 {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = nM, this.init = async () => {
                        if (!this.initialized) {
                            let e = await this.getKeyChain();
                            "u" > typeof e && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.keychain.get(e);
                        if (typeof t > "u") {
                            let {
                                message: t
                            } = rs("NO_MATCHING_KEY", `${this.name}: ${e}`);
                            throw Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = (0, tt.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, tG(e))
                }
                async getKeyChain() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? tJ(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = rs("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class n5 {
                constructor(e, t, r) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => {
                        this.isInitialized();
                        let e = await this.getClientSeed(),
                            t = tb(e);
                        return t_(t.publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        let e = function() {
                            let e = D.Au();
                            return {
                                privateKey: e5(e.secretKey, tP),
                                publicKey: e5(e.publicKey, tP)
                            }
                        }();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        let t = await this.getClientSeed(),
                            r = tb(t),
                            n = tN();
                        return await tw(n, e, nH, r)
                    }, this.generateSharedKey = (e, t, r) => {
                        this.isInitialized();
                        let n = this.getPrivateKey(e),
                            i = function(e, t) {
                                let r = D.gi(e1(e, tP), e1(t, tP)),
                                    n = new b.t(E.mE, r).expand(32);
                                return e5(n, tP)
                            }(n, t);
                        return this.setSymKey(i, r)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        let r = t || function(e) {
                            let t = (0, E.vp)(e1(e, tP));
                            return e5(t, tP)
                        }(e);
                        return await this.keychain.set(r, e), r
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, r) => {
                        this.isInitialized();
                        let n = tj(r),
                            i = (0, td.u)(t);
                        if (tU(n)) {
                            let t = n.senderPublicKey,
                                r = n.receiverPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        let s = this.getSymKey(e),
                            {
                                type: o,
                                senderPublicKey: a
                            } = n;
                        return function(e) {
                            let t = e1(`${"u">typeof e.type?e.type:0}`, tO);
                            if (1 === tR(t) && typeof e.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                            let r = "u" > typeof e.senderPublicKey ? e1(e.senderPublicKey, tP) : void 0,
                                n = "u" > typeof e.iv ? e1(e.iv, tP) : (0, w.randomBytes)(12),
                                i = new _.OK(e1(e.symKey, tP)).seal(n, e1(e.message, tA));
                            return function(e) {
                                if (1 === tR(e.type)) {
                                    if (typeof e.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                                    return e5(O([e.type, e.senderPublicKey, e.iv, e.sealed]), tC)
                                }
                                return e5(O([e.type, e.iv, e.sealed]), tC)
                            }({
                                type: t,
                                sealed: i,
                                iv: n,
                                senderPublicKey: r
                            })
                        }({
                            type: o,
                            symKey: s,
                            message: i,
                            senderPublicKey: a
                        })
                    }, this.decode = async (e, t, r) => {
                        this.isInitialized();
                        let n = function(e, t) {
                            let r = tT(e);
                            return tj({
                                type: tR(r.type),
                                senderPublicKey: "u" > typeof r.senderPublicKey ? e5(r.senderPublicKey, tP) : void 0,
                                receiverPublicKey: t ? .receiverPublicKey
                            })
                        }(t, r);
                        if (tU(n)) {
                            let t = n.receiverPublicKey,
                                r = n.senderPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        let i = this.getSymKey(e),
                            s = function(e) {
                                let t = new _.OK(e1(e.symKey, tP)),
                                    {
                                        sealed: r,
                                        iv: n
                                    } = tT(e.encoded),
                                    i = t.open(n, r);
                                if (null === i) throw Error("Failed to decrypt");
                                return e5(i, tA)
                            }({
                                symKey: i,
                                encoded: t
                            });
                        return (0, td.D)(s)
                    }, this.getPayloadType = e => {
                        let t = tT(e);
                        return tR(t.type)
                    }, this.getPayloadSenderPublicKey = e => {
                        let t = tT(e);
                        return t.senderPublicKey ? e5(t.senderPublicKey, tP) : void 0
                    }, this.core = e, this.logger = (0, tt.generateChildLogger)(t, this.name), this.keychain = r || new n1(this.core, this.logger)
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get(nq)
                    } catch {
                        e = tN(), await this.keychain.set(nq, e)
                    }
                    return function(e, t = "utf8") {
                        let r = nL[t];
                        if (!r) throw Error(`Unsupported encoding "${t}"`);
                        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? nR(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = rs("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class n3 extends ts {
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = nM, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                let e = await this.getRelayerMessages();
                                "u" > typeof e && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        let r = tx(t),
                            n = this.messages.get(e);
                        return typeof n > "u" && (n = {}), "u" > typeof n[r] || (n[r] = t, this.messages.set(e, n), await this.persist()), r
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => {
                        this.isInitialized();
                        let r = this.get(e),
                            n = tx(t);
                        return "u" > typeof r[n]
                    }, this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = (0, tt.generateChildLogger)(e, this.name), this.core = t
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, tG(e))
                }
                async getRelayerMessages() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? tJ(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = rs("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class n6 extends to {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new v.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = 1e4, this.publish = async (e, t, r) => {
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: r
                            }
                        });
                        try {
                            let n = r ? .ttl || nF,
                                i = t6(r),
                                s = r ? .prompt || !1,
                                o = r ? .tag || 0,
                                a = r ? .id || (0, rE.getBigIntRpcId)().toString(),
                                c = {
                                    topic: e,
                                    message: t,
                                    opts: {
                                        ttl: n,
                                        relay: i,
                                        prompt: s,
                                        tag: o,
                                        id: a
                                    }
                                };
                            this.queue.set(a, c);
                            try {
                                await await tZ(this.rpcPublish(e, t, n, i, s, o, a), this.publishTimeout), this.relayer.events.emit(nB.publish, c)
                            } catch {
                                this.logger.debug("Publishing Payload stalled"), this.relayer.events.emit(nB.connection_stalled);
                                return
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: e,
                                    message: t,
                                    opts: r
                                }
                            })
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(e), e
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = (0, tt.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, r, n, i, s, o) {
                    var a, c, u, l;
                    let h = {
                        method: t2(n.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: i,
                            tag: s
                        },
                        id: o
                    };
                    return ru(null == (a = h.params) ? void 0 : a.prompt) && (null == (c = h.params) || delete c.prompt), ru(null == (u = h.params) ? void 0 : u.tag) && (null == (l = h.params) || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: h
                    }), this.relayer.request(h)
                }
                onPublish(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach(async e => {
                        let {
                            topic: t,
                            message: r,
                            opts: n
                        } = e;
                        await this.publish(t, r, n)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(te.HEARTBEAT_EVENTS.pulse, () => {
                        this.checkQueue()
                    }), this.relayer.on(nB.message_ack, e => {
                        this.onPublish(e.id.toString())
                    })
                }
            }
            class n2 {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        let r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") {
                            this.map.delete(e);
                            return
                        }
                        if (!this.map.has(e)) return;
                        let r = this.get(e);
                        if (!this.exists(e, t)) return;
                        let n = r.filter(e => e !== t);
                        if (!n.length) {
                            this.map.delete(e);
                            return
                        }
                        this.map.set(e, n)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var n8 = Object.defineProperty,
                n4 = Object.defineProperties,
                n9 = Object.getOwnPropertyDescriptors,
                n7 = Object.getOwnPropertySymbols,
                ie = Object.prototype.hasOwnProperty,
                it = Object.prototype.propertyIsEnumerable,
                ir = (e, t, r) => t in e ? n8(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ii = (e, t) => {
                    for (var r in t || (t = {})) ie.call(t, r) && ir(e, r, t[r]);
                    if (n7)
                        for (var r of n7(t)) it.call(t, r) && ir(e, r, t[r]);
                    return e
                },
                is = (e, t) => n4(e, n9(t));
            class io extends tu {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new n2, this.events = new v.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = nM, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            let r = t6(t),
                                n = {
                                    topic: e,
                                    relay: r
                                };
                            this.pending.set(e, n);
                            let i = await this.rpcSubscribe(e, r);
                            return this.onSubscribe(i, n), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            }), i
                        } catch (e) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(e), e
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), "u" > typeof t ? .id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise((t, r) => {
                        let n = new e3.Watch;
                        n.start(this.pendingSubscriptionWatchLabel);
                        let i = setInterval(() => {
                            !this.pending.has(e) && this.topics.includes(e) && (clearInterval(i), n.stop(this.pendingSubscriptionWatchLabel), t(!0)), n.elapsed(this.pendingSubscriptionWatchLabel) >= nJ && (clearInterval(i), n.stop(this.pendingSubscriptionWatchLabel), r(Error("Subscription resolution timeout")))
                        }, this.pollingInterval)
                    }).catch(() => !1), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = (0, tt.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    let r = this.topicMap.get(e);
                    await Promise.all(r.map(async r => await this.unsubscribeById(e, r, t)))
                }
                async unsubscribeById(e, t, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: r
                        }
                    });
                    try {
                        let n = t6(r);
                        await this.rpcUnsubscribe(e, t, n);
                        let i = ro("USER_DISCONNECTED", `${this.name}, ${e}`);
                        await this.onUnsubscribe(e, t, i), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        })
                    } catch (e) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(e), e
                    }
                }
                async rpcSubscribe(e, t) {
                    let r = {
                        method: t2(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await tZ(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(nB.connection_stalled)
                    }
                    return tx(e + this.clientId)
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    let t = e[0].relay,
                        r = {
                            method: t2(t.protocol).batchSubscribe,
                            params: {
                                topics: e.map(e => e.topic)
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await tZ(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(nB.connection_stalled)
                    }
                }
                rpcUnsubscribe(e, t, r) {
                    let n = {
                        method: t2(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: n
                    }), this.relayer.request(n)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, is(ii({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(e => {
                        this.setSubscription(e.id, ii({}, e)), this.pending.delete(e.topic)
                    })
                }
                async onUnsubscribe(e, t, r) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, ii({}, t)), this.topicMap.set(t.topic, e), this.events.emit(nG.created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    let t = this.subscriptions.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = rs("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    let r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(nG.deleted, is(ii({}, r), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(nG.sync)
                }
                async reset() {
                    if (this.cached.length) {
                        let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let t = 0; t < e; t++) {
                            let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(e)
                        }
                    }
                    this.events.emit(nG.resubscribed)
                }
                async restore() {
                    try {
                        let e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            let {
                                message: e
                            } = rs("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    if (!e.length) return;
                    let t = await this.rpcBatchSubscribe(e);
                    ra(t) && this.onBatchSubscribe(t.map((t, r) => is(ii({}, e[r]), {
                        id: t
                    })))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (this.relayer.transportExplicitlyClosed) return;
                    let e = [];
                    this.pending.forEach(t => {
                        e.push(t)
                    }), await this.batchSubscribe(e)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(te.HEARTBEAT_EVENTS.pulse, async () => {
                        await this.checkPending()
                    }), this.relayer.on(nB.connect, async () => {
                        await this.onConnect()
                    }), this.relayer.on(nB.disconnect, () => {
                        this.onDisconnect()
                    }), this.events.on(nG.created, async e => {
                        let t = nG.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }), this.events.on(nG.deleted, async e => {
                        let t = nG.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = rs("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise(e => {
                        let t = setInterval(() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }, this.pollingInterval)
                    })
                }
            }
            var ia = Object.defineProperty,
                ic = Object.getOwnPropertySymbols,
                iu = Object.prototype.hasOwnProperty,
                il = Object.prototype.propertyIsEnumerable,
                ih = (e, t, r) => t in e ? ia(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ip = (e, t) => {
                    for (var r in t || (t = {})) iu.call(t, r) && ih(e, r, t[r]);
                    if (ic)
                        for (var r of ic(t)) il.call(t, r) && ih(e, r, t[r]);
                    return e
                };
            class id extends ta {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new v.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.reconnecting = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async e => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(e)
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(e), e
                        }
                    }, this.core = e.core, this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? (0, tt.generateChildLogger)(e.logger, this.name) : (0, tt.pino)((0, tt.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new n3(this.logger, e.core), this.subscriber = new io(this, this.logger), this.publisher = new n6(this, this.logger), this.relayUrl = e ? .relayUrl || nV, this.projectId = e.projectId, this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.transportOpen(), this.subscriber.init()]), this.registerEventListeners(), this.initialized = !0, setTimeout(async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribted to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }, 1e4)
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(e, t, r) {
                    this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    var r;
                    this.isInitialized();
                    let n = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
                    return n || (await Promise.all([new Promise(t => {
                        this.subscriber.once(nG.created, r => {
                            r.topic === e && t()
                        })
                    }), new Promise(async r => {
                        n = await this.subscriber.subscribe(e, t), r()
                    })]), n)
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.connected && (await this.provider.disconnect(), this.events.emit(nB.transport_closed))
                }
                async transportOpen(e) {
                    if (this.transportExplicitlyClosed = !1, !this.reconnecting) {
                        this.relayUrl = e || this.relayUrl, this.reconnecting = !0;
                        try {
                            await Promise.all([new Promise(e => {
                                this.initialized || e(), this.subscriber.once(nG.resubscribed, () => {
                                    e()
                                })
                            }), await Promise.race([new Promise(async (e, t) => {
                                await tZ(this.provider.connect(), 5e3, "socket stalled").catch(e => t(e)).then(() => e()).finally(() => this.removeListener(nB.transport_closed, this.rejectTransportOpen))
                            }), new Promise(e => this.once(nB.transport_closed, this.rejectTransportOpen))])])
                        } catch (e) {
                            if (this.logger.error(e), !this.isConnectionStalled(e.message)) throw e;
                            this.events.emit(nB.transport_closed)
                        } finally {
                            this.reconnecting = !1
                        }
                    }
                }
                async restartTransport(e) {
                    this.transportExplicitlyClosed || this.reconnecting || (this.relayUrl = e || this.relayUrl, this.connected && await Promise.all([new Promise(e => {
                        this.provider.once(nK.disconnect, () => {
                            e()
                        })
                    }), this.transportClose()]), await this.createProvider(), await this.transportOpen())
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                rejectTransportOpen() {
                    throw Error("closeTransport called before connection was established")
                }
                async createProvider() {
                    let e = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new rw.r(new rI(function({
                        protocol: e,
                        version: t,
                        relayUrl: r,
                        sdkVersion: n,
                        auth: i,
                        projectId: s,
                        useOnCloseEvent: o
                    }) {
                        var a;
                        let c;
                        let u = r.split("?"),
                            l = function(e, t, r) {
                                let n = function() {
                                        let e = (0, tE.qY)();
                                        if (null === e) return "unknown";
                                        let t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
                                        return "browser" === e.type ? [t, e.name, e.version].join("-") : [t, e.version].join("-")
                                    }(),
                                    i = function() {
                                        var e;
                                        let t = tK();
                                        return t === tH.browser ? [t, (null == (e = (0, e6.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
                                    }();
                                return [
                                    [e, t].join("-"), ["js", r].join("-"), n, i
                                ].join("/")
                            }(e, t, n),
                            h = (a = u[1] || "", c = tq(tq({}, c = tD.parse(a)), {
                                auth: i,
                                ua: l,
                                projectId: s,
                                useOnCloseEvent: o || void 0
                            }), a = tD.stringify(c));
                        return u[0] + "?" + h
                    }({
                        sdkVersion: "2.8.0",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e,
                        useOnCloseEvent: !0
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    await this.messages.set(t, r)
                }
                async shouldIgnoreMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    return !await this.subscriber.isSubscribed(t) || this.messages.has(t, r)
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), (0, rE.isJsonRpcRequest)(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        let t = e.params,
                            {
                                topic: r,
                                message: n,
                                publishedAt: i
                            } = t.data,
                            s = {
                                topic: r,
                                message: n,
                                publishedAt: i
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(ip({
                            type: "event",
                            event: t.id
                        }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
                    } else(0, rE.isJsonRpcResponse)(e) && this.events.emit(nB.message_ack, e)
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(nB.message, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    let t = (0, rE.formatJsonRpcResult)(e.id, !0);
                    await this.provider.connection.send(t)
                }
                registerProviderListeners() {
                    this.provider.on(nK.payload, e => this.onProviderPayload(e)), this.provider.on(nK.connect, () => {
                        this.events.emit(nB.connect)
                    }), this.provider.on(nK.disconnect, () => {
                        this.onProviderDisconnect()
                    }), this.provider.on(nK.error, e => {
                        this.logger.error(e), this.events.emit(nB.error, e)
                    })
                }
                registerEventListeners() {
                    this.events.on(nB.connection_stalled, async () => {
                        await this.restartTransport()
                    })
                }
                onProviderDisconnect() {
                    this.events.emit(nB.disconnect), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || setTimeout(async () => {
                        await this.restartTransport()
                    }, (0, e3.toMiliseconds)(nW))
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = rs("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async toEstablishConnection() {
                    if (!this.connected) {
                        if (this.connecting) return await new Promise(e => {
                            let t = setInterval(() => {
                                this.connected && (clearInterval(t), e())
                            }, this.connectionStatusPollingInterval)
                        });
                        await this.restartTransport()
                    }
                }
            }
            var ig = Object.defineProperty,
                iy = Object.getOwnPropertySymbols,
                iv = Object.prototype.hasOwnProperty,
                im = Object.prototype.propertyIsEnumerable,
                i_ = (e, t, r) => t in e ? ig(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ib = (e, t) => {
                    for (var r in t || (t = {})) iv.call(t, r) && i_(e, r, t[r]);
                    if (iy)
                        for (var r of iy(t)) im.call(t, r) && i_(e, r, t[r]);
                    return e
                };
            class iw extends tc {
                constructor(e, t, r, n = nM, i) {
                    super(e, t, r, n), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = nM, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => {
                            var t;
                            this.getKey && null !== e && !ru(e) ? this.map.set(this.getKey(e), e) : (null == (t = e ? .proposer) ? void 0 : t.publicKey) ? this.map.set(e.id, e) : e ? .topic && this.map.set(e.topic, e)
                        }), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter(t => Object.keys(e).every(r => rP()(t[r], e[r]))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        let r = ib(ib({}, this.getData(e)), t);
                        this.map.set(e, r), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), await this.persist())
                    }, this.logger = (0, tt.generateChildLogger)(t, this.name), this.storagePrefix = n, this.getKey = i
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    let t = this.map.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = rs("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        let e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            let {
                                message: e
                            } = rs("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = rs("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class iE {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(m()), this.initialized = !1, this.storagePrefix = nM, this.ignoredPayloadTypes = [1], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: e
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                    }, this.create = async () => {
                        var e;
                        this.isInitialized();
                        let t = tN(),
                            r = await this.core.crypto.setSymKey(t),
                            n = t0(e3.FIVE_MINUTES),
                            i = {
                                protocol: "irn"
                            },
                            s = (e = {
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: r,
                                symKey: t,
                                relay: i
                            }, `${e.protocol}:${e.topic}@${e.version}?` + tD.stringify(rt({
                                symKey: e.symKey
                            }, function(e, t = "-") {
                                let r = {};
                                return Object.keys(e).forEach(n => {
                                    e[n] && (r["relay" + t + n] = e[n])
                                }), r
                            }(e.relay))));
                        return await this.pairings.set(r, {
                            topic: r,
                            expiry: n,
                            relay: i,
                            active: !1
                        }), await this.core.relayer.subscribe(r), this.core.expirer.set(r, n), {
                            topic: r,
                            uri: s
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        let {
                            topic: t,
                            symKey: r,
                            relay: n
                        } = function(e) {
                            var t;
                            let r = e.indexOf(":"),
                                n = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                                i = e.substring(0, r),
                                s = e.substring(r + 1, n).split("@"),
                                o = "u" > typeof n ? e.substring(n) : "",
                                a = tD.parse(o);
                            return {
                                protocol: i,
                                topic: (t = s[0]).startsWith("//") ? t.substring(2) : t,
                                version: parseInt(s[1], 10),
                                symKey: a.symKey,
                                relay: function(e, t = "-") {
                                    let r = {},
                                        n = "relay" + t;
                                    return Object.keys(e).forEach(t => {
                                        if (t.startsWith(n)) {
                                            let i = t.replace(n, ""),
                                                s = e[t];
                                            r[i] = s
                                        }
                                    }), r
                                }(a)
                            }
                        }(e.uri);
                        if (this.pairings.keys.includes(t)) throw Error(`Pairing already exists: ${t}`);
                        if (this.core.crypto.hasKeys(t)) throw Error(`Keychain already exists: ${t}`);
                        let i = t0(e3.FIVE_MINUTES),
                            s = {
                                topic: t,
                                relay: n,
                                expiry: i,
                                active: !1
                            };
                        return await this.pairings.set(t, s), await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                            relay: n
                        }), this.core.expirer.set(t, i), e.activatePairing && await this.activate({
                            topic: t
                        }), s
                    }, this.activate = async ({
                        topic: e
                    }) => {
                        this.isInitialized();
                        let t = t0(e3.THIRTY_DAYS);
                        await this.pairings.update(e, {
                            active: !0,
                            expiry: t
                        }), this.core.expirer.set(e, t)
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            let e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: n,
                                    reject: i
                                } = tY();
                            this.events.once(t5("pairing_ping", e), ({
                                error: e
                            }) => {
                                e ? i(e) : n()
                            }), await r()
                        }
                    }, this.updateExpiry = async ({
                        topic: e,
                        expiry: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            expiry: t
                        })
                    }, this.updateMetadata = async ({
                        topic: e,
                        metadata: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            peerMetadata: t
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", ro("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, r) => {
                        let n = (0, rE.formatJsonRpcRequest)(t, r),
                            i = await this.core.crypto.encode(e, n),
                            s = nY[t].req;
                        return this.core.history.set(e, n), this.core.relayer.publish(e, i, s), n.id
                    }, this.sendResult = async (e, t, r) => {
                        let n = (0, rE.formatJsonRpcResult)(e, r),
                            i = await this.core.crypto.encode(t, n),
                            s = await this.core.history.get(t, e),
                            o = nY[s.request.method].res;
                        await this.core.relayer.publish(t, i, o), await this.core.history.resolve(n)
                    }, this.sendError = async (e, t, r) => {
                        let n = (0, rE.formatJsonRpcError)(e, r),
                            i = await this.core.crypto.encode(t, n),
                            s = await this.core.history.get(t, e),
                            o = nY[s.request.method] ? nY[s.request.method].res : nY.unregistered_method.res;
                        await this.core.relayer.publish(t, i, o), await this.core.history.resolve(n)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, ro("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        let e = this.pairings.getAll().filter(e => t1(e.expiry));
                        await Promise.all(e.map(e => this.deletePairing(e.topic)))
                    }, this.onRelayEventRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, n = r.method;
                        if (this.pairings.keys.includes(t)) switch (n) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, r);
                            default:
                                return this.onUnknownRpcMethodRequest(t, r)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, n = (await this.core.history.get(t, r.id)).request.method;
                        if (this.pairings.keys.includes(t)) return "wc_pairingPing" === n ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(n)
                    }, this.onPairingPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.events.emit("pairing_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            (0, rE.isJsonRpcResult)(t) ? this.events.emit(t5("pairing_ping", r), {}): (0, rE.isJsonRpcError)(t) && this.events.emit(t5("pairing_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit("pairing_delete", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        let {
                            id: r,
                            method: n
                        } = t;
                        try {
                            if (this.registeredMethods.includes(n)) return;
                            let t = ro("WC_METHOD_UNSUPPORTED", n);
                            await this.sendError(r, e, t), this.logger.error(t)
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error(ro("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `pair() params: ${e}`);
                            throw Error(t)
                        }
                        if (! function(e) {
                                if (rl(e, !1)) try {
                                    return "u" > typeof new URL(e)
                                } catch {}
                                return !1
                            }(e.uri)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                            throw Error(t)
                        }
                    }, this.isValidPing = async e => {
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!rl(e, !1)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                            throw Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            let {
                                message: t
                            } = rs("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                            throw Error(t)
                        }
                        if (t1(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            let {
                                message: t
                            } = rs("EXPIRED", `pairing topic: ${e}`);
                            throw Error(t)
                        }
                    }, this.core = e, this.logger = (0, tt.generateChildLogger)(t, this.name), this.pairings = new iw(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = rs("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(nB.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        let n = await this.core.crypto.decode(t, r);
                        (0, rE.isJsonRpcRequest)(n) ? (this.core.history.set(t, n), this.onRelayEventRequest({
                            topic: t,
                            payload: n
                        })) : (0, rE.isJsonRpcResponse)(n) && (await this.core.history.resolve(n), this.onRelayEventResponse({
                            topic: t,
                            payload: n
                        }))
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(nX.expired, async e => {
                        let {
                            topic: t
                        } = tQ(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit("pairing_expire", {
                            topic: t
                        }))
                    })
                }
            }
            class iD extends ti {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new v.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = nM, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.records.set(e.id, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: r
                            }), this.records.has(t.id)) return;
                        let n = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r
                        };
                        this.records.set(n.id, n), this.events.emit(nZ.created, n)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        let t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = (0, rE.isJsonRpcError)(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.events.emit(nZ.updated, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach(r => {
                            r.topic !== e || "u" > typeof t && r.id !== t || (this.records.delete(r.id), this.events.emit(nZ.deleted, r))
                        })
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, tt.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    let e = [];
                    return this.values.forEach(t => {
                        if ("u" > typeof t.response) return;
                        let r = {
                            topic: t.topic,
                            request: (0, rE.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    }), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    let t = this.records.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = rs("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(nZ.sync)
                }
                async restore() {
                    try {
                        let e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            let {
                                message: e
                            } = rs("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(nZ.created, e => {
                        let t = nZ.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(nZ.updated, e => {
                        let t = nZ.updated;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(nZ.deleted, e => {
                        let t = nZ.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = rs("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class iS extends tl {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new v.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = nM, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.expirations.set(e.target, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            let t = this.formatTarget(e);
                            return "u" > typeof this.getExpiration(t)
                        } catch {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        let r = this.formatTarget(e),
                            n = {
                                target: r,
                                expiry: t
                            };
                        this.expirations.set(r, n), this.checkExpiry(r, n), this.events.emit(nX.created, {
                            target: r,
                            expiration: n
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            let t = this.formatTarget(e),
                                r = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(nX.deleted, {
                                target: t,
                                expiration: r
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, tt.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return tX("topic", e);
                    if ("number" == typeof e) return tX("id", e);
                    let {
                        message: t
                    } = rs("UNKNOWN_TYPE", `Target type: ${typeof e}`);
                    throw Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(nX.sync)
                }
                async restore() {
                    try {
                        let e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            let {
                                message: e
                            } = rs("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    let t = this.expirations.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = rs("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    let {
                        expiry: r
                    } = t;
                    (0, e3.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(nX.expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(te.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(nX.created, e => {
                        let t = nX.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(nX.expired, e => {
                        let t = nX.expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(nX.deleted, e => {
                        let t = nX.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = rs("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class iI extends th {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.name = nQ, this.initialized = !1, this.init = async e => {
                        tV() || !tB() || (this.verifyUrl = e ? .verifyUrl || n0, await this.createIframe())
                    }, this.register = async e => {
                        var t;
                        this.initialized || await this.init(), this.iframe && (null == (t = this.iframe.contentWindow) || t.postMessage(e.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${e.attestationId} ${this.verifyUrl}`))
                    }, this.resolve = async e => {
                        var t;
                        if (this.isDevEnv) return "";
                        this.logger.info(`resolving attestation: ${e.attestationId}`);
                        let r = this.startAbortTimer(e3.FIVE_SECONDS),
                            n = await fetch(`${this.verifyUrl}/attestation/${e.attestationId}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === n.status ? null == (t = await n.json()) ? void 0 : t.origin : ""
                    }, this.createIframe = async () => {
                        try {
                            await Promise.race([new Promise((e, t) => {
                                if (document.getElementById(nQ)) return e();
                                let r = document.createElement("iframe");
                                r.setAttribute("id", nQ), r.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), r.style.display = "none", r.addEventListener("load", () => {
                                    this.initialized = !0, e()
                                }), r.addEventListener("error", e => {
                                    t(e)
                                }), document.body.append(r), this.iframe = r
                            }), new Promise(e => {
                                setTimeout(() => e("iframe load timeout"), (0, e3.toMiliseconds)(e3.ONE_SECOND / 2))
                            })])
                        } catch (e) {
                            this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(e)
                        }
                    }, this.logger = (0, tt.generateChildLogger)(t, this.name), this.verifyUrl = n0, this.abortController = new AbortController, this.isDevEnv = tF() && rC.env.IS_VITEST
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                startAbortTimer(e) {
                    return setTimeout(() => this.abortController.abort(), (0, e3.toMiliseconds)(e))
                }
            }
            var iO = Object.defineProperty,
                iP = Object.getOwnPropertySymbols,
                iC = Object.prototype.hasOwnProperty,
                iA = Object.prototype.propertyIsEnumerable,
                iN = (e, t, r) => t in e ? iO(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ix = (e, t) => {
                    for (var r in t || (t = {})) iC.call(t, r) && iN(e, r, t[r]);
                    if (iP)
                        for (var r of iP(t)) iA.call(t, r) && iN(e, r, t[r]);
                    return e
                };
            class iR extends tn {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = nk, this.events = new v.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || nV;
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, tt.pino)((0, tt.getDefaultLoggerOptions)({
                        level: e ? .logger || nz.logger
                    }));
                    this.logger = (0, tt.generateChildLogger)(t, this.name), this.heartbeat = new te.HeartBeat, this.crypto = new n5(this, this.logger, e ? .keychain), this.history = new iD(this, this.logger), this.expirer = new iS(this, this.logger), this.storage = null != e && e.storage ? e.storage : new e7.ZP(ix(ix({}, n$), e ? .storageOptions)), this.relayer = new id({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new iE(this, this.logger), this.verify = new iI(this.projectId || "", this.logger)
                }
                static async init(e) {
                    let t = new iR(e);
                    await t.initialize();
                    let r = await t.crypto.getClientId();
                    return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
                    }
                }
            }
            let iT = "client",
                ij = `wc@2:${iT}:`,
                iU = {
                    name: iT,
                    logger: "error",
                    controller: !1,
                    relayUrl: "wss://relay.walletconnect.com"
                },
                iL = "Proposal expired",
                ik = e3.SEVEN_DAYS,
                iM = {
                    wc_sessionPropose: {
                        req: {
                            ttl: e3.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: e3.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: e3.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: e3.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: e3.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: e3.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: e3.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: e3.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: e3.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: e3.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: e3.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: e3.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: e3.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: e3.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: e3.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: e3.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                iz = {
                    min: e3.FIVE_MINUTES,
                    max: e3.SEVEN_DAYS
                },
                i$ = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var iq = Object.defineProperty,
                iH = Object.defineProperties,
                iF = Object.getOwnPropertyDescriptors,
                iV = Object.getOwnPropertySymbols,
                iB = Object.prototype.hasOwnProperty,
                iK = Object.prototype.propertyIsEnumerable,
                iW = (e, t, r) => t in e ? iq(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iG = (e, t) => {
                    for (var r in t || (t = {})) iB.call(t, r) && iW(e, r, t[r]);
                    if (iV)
                        for (var r of iV(t)) iK.call(t, r) && iW(e, r, t[r]);
                    return e
                },
                iJ = (e, t) => iH(e, iF(t));
            class iY extends tp {
                constructor(e) {
                    super(e), this.name = "engine", this.events = new(m()), this.initialized = !1, this.ignoredPayloadTypes = [1], this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({
                            methods: Object.keys(iM)
                        }), this.initialized = !0)
                    }, this.connect = async e => {
                        this.isInitialized();
                        let t = iJ(iG({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        let {
                            pairingTopic: r,
                            requiredNamespaces: n,
                            optionalNamespaces: i,
                            sessionProperties: s,
                            relays: o
                        } = t, a = r, c, u = !1;
                        if (a && (u = this.client.core.pairing.pairings.get(a).active), !a || !u) {
                            let {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            a = e, c = t
                        }
                        let l = await this.client.core.crypto.generateKeyPair(),
                            h = iG({
                                requiredNamespaces: n,
                                optionalNamespaces: i,
                                relays: o ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: l,
                                    metadata: this.client.metadata
                                }
                            }, s && {
                                sessionProperties: s
                            }),
                            {
                                reject: f,
                                resolve: p,
                                done: d
                            } = tY(e3.FIVE_MINUTES, iL);
                        if (this.events.once(t5("session_connect"), async ({
                                error: e,
                                session: t
                            }) => {
                                if (e) f(e);
                                else if (t) {
                                    t.self.publicKey = l;
                                    let e = iJ(iG({}, t), {
                                        requiredNamespaces: t.requiredNamespaces,
                                        optionalNamespaces: t.optionalNamespaces
                                    });
                                    await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), a && await this.client.core.pairing.updateMetadata({
                                        topic: a,
                                        metadata: t.peer.metadata
                                    }), p(e)
                                }
                            }), !a) {
                            let {
                                message: e
                            } = rs("NO_MATCHING_KEY", `connect() pairing topic: ${a}`);
                            throw Error(e)
                        }
                        let g = await this.sendRequest(a, "wc_sessionPropose", h),
                            y = t0(e3.FIVE_MINUTES);
                        return await this.setProposal(g, iG({
                            id: g,
                            expiry: y
                        }, h)), {
                            uri: c,
                            approval: d
                        }
                    }, this.pair = async e => (this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
                        this.isInitialized(), await this.isValidApprove(e);
                        let {
                            id: t,
                            relayProtocol: r,
                            namespaces: n,
                            sessionProperties: i
                        } = e, s = this.client.proposal.get(t), {
                            pairingTopic: o,
                            proposer: a,
                            requiredNamespaces: c,
                            optionalNamespaces: u
                        } = s;
                        o = o || "", rc(c) || (c = function(e, t) {
                            let r = rg(e, t);
                            if (r) throw Error(r.message);
                            let n = {};
                            for (let [t, r] of Object.entries(e)) n[t] = {
                                methods: r.methods,
                                events: r.events,
                                chains: r.accounts.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
                            };
                            return n
                        }(n, "approve()"));
                        let l = await this.client.core.crypto.generateKeyPair(),
                            h = a.publicKey,
                            f = await this.client.core.crypto.generateSharedKey(l, h);
                        o && t && (await this.client.core.pairing.updateMetadata({
                            topic: o,
                            metadata: a.metadata
                        }), await this.sendResult(t, o, {
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            responderPublicKey: l
                        }), await this.client.proposal.delete(t, ro("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: o
                        }));
                        let p = iG({
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            namespaces: n,
                            requiredNamespaces: c,
                            optionalNamespaces: u,
                            pairingTopic: o,
                            controller: {
                                publicKey: l,
                                metadata: this.client.metadata
                            },
                            expiry: t0(ik)
                        }, i && {
                            sessionProperties: i
                        });
                        await this.client.core.relayer.subscribe(f), await this.sendRequest(f, "wc_sessionSettle", p);
                        let d = iJ(iG({}, p), {
                            topic: f,
                            pairingTopic: o,
                            acknowledged: !1,
                            self: p.controller,
                            peer: {
                                publicKey: a.publicKey,
                                metadata: a.metadata
                            },
                            controller: l
                        });
                        return await this.client.session.set(f, d), await this.setExpiry(f, t0(ik)), {
                            topic: f,
                            acknowledged: () => new Promise(e => setTimeout(() => e(this.client.session.get(f)), 500))
                        }
                    }, this.reject = async e => {
                        this.isInitialized(), await this.isValidReject(e);
                        let {
                            id: t,
                            reason: r
                        } = e, {
                            pairingTopic: n
                        } = this.client.proposal.get(t);
                        n && (await this.sendError(t, n, r), await this.client.proposal.delete(t, ro("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        this.isInitialized(), await this.isValidUpdate(e);
                        let {
                            topic: t,
                            namespaces: r
                        } = e, n = await this.sendRequest(t, "wc_sessionUpdate", {
                            namespaces: r
                        }), {
                            done: i,
                            resolve: s,
                            reject: o
                        } = tY();
                        return this.events.once(t5("session_update", n), ({
                            error: e
                        }) => {
                            e ? o(e) : s()
                        }), await this.client.session.update(t, {
                            namespaces: r
                        }), {
                            acknowledged: i
                        }
                    }, this.extend = async e => {
                        this.isInitialized(), await this.isValidExtend(e);
                        let {
                            topic: t
                        } = e, r = await this.sendRequest(t, "wc_sessionExtend", {}), {
                            done: n,
                            resolve: i,
                            reject: s
                        } = tY();
                        return this.events.once(t5("session_extend", r), ({
                            error: e
                        }) => {
                            e ? s(e) : i()
                        }), await this.setExpiry(t, t0(ik)), {
                            acknowledged: n
                        }
                    }, this.request = async e => {
                        this.isInitialized(), await this.isValidRequest(e);
                        let {
                            chainId: t,
                            request: r,
                            topic: n,
                            expiry: i
                        } = e, s = await this.sendRequest(n, "wc_sessionRequest", {
                            request: r,
                            chainId: t
                        }, i), {
                            done: o,
                            resolve: a,
                            reject: c
                        } = tY(i);
                        this.events.once(t5("session_request", s), ({
                            error: e,
                            result: t
                        }) => {
                            e ? c(e) : a(t)
                        }), this.client.events.emit("session_request_sent", {
                            topic: n,
                            request: r,
                            chainId: t,
                            id: s
                        });
                        let u = await this.client.core.storage.getItem("WALLETCONNECT_DEEPLINK_CHOICE");
                        return t3({
                            id: s,
                            topic: n,
                            wcDeepLink: u
                        }), await o()
                    }, this.respond = async e => {
                        this.isInitialized(), await this.isValidRespond(e);
                        let {
                            topic: t,
                            response: r
                        } = e, {
                            id: n
                        } = r;
                        (0, rE.isJsonRpcResult)(r) ? await this.sendResult(n, t, r.result): (0, rE.isJsonRpcError)(r) && await this.sendError(n, t, r.error), this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        })
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            let e = await this.sendRequest(t, "wc_sessionPing", {}),
                                {
                                    done: r,
                                    resolve: n,
                                    reject: i
                                } = tY();
                            this.events.once(t5("session_ping", e), ({
                                error: e
                            }) => {
                                e ? i(e) : n()
                            }), await r()
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        this.isInitialized(), await this.isValidEmit(e);
                        let {
                            topic: t,
                            event: r,
                            chainId: n
                        } = e;
                        await this.sendRequest(t, "wc_sessionEvent", {
                            event: r,
                            chainId: n
                        })
                    }, this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            let e;
                            let r = (0, rE.getBigIntRpcId)().toString(),
                                n = t => {
                                    t ? .id.toString() === r && (this.client.core.relayer.events.removeListener(nB.message_ack, n), e())
                                };
                            await Promise.all([new Promise(t => {
                                e = t, this.client.core.relayer.on(nB.message_ack, n)
                            }), this.sendRequest(t, "wc_sessionDelete", ro("USER_DISCONNECTED"), void 0, r)]), await this.deleteSession(t)
                        } else await this.client.core.pairing.disconnect({
                            topic: t
                        })
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(t => (function(e, t) {
                        let {
                            requiredNamespaces: r
                        } = t, n = Object.keys(e.namespaces), i = Object.keys(r), s = !0;
                        return !!tW(i, n) && (n.forEach(t => {
                            let {
                                accounts: n,
                                methods: i,
                                events: o
                            } = e.namespaces[t], a = rr(n), c = r[t];
                            tW(tI(t, c), a) && tW(c.methods, i) && tW(c.events, o) || (s = !1)
                        }), s)
                    })(t, e))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async e => {
                        try {
                            let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter(r => {
                                    var n, i;
                                    return (null == (n = r.peerMetadata) ? void 0 : n.url) && (null == (i = r.peerMetadata) ? void 0 : i.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                                });
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map(e => this.client.core.pairing.disconnect({
                                topic: e.topic
                            }))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async (e, t) => {
                        let {
                            self: r
                        } = this.client.session.get(e);
                        await this.client.core.relayer.unsubscribe(e), this.client.session.delete(e, ro("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), t || this.client.core.expirer.del(e)
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, ro("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.deletePendingSessionRequest = async (e, t, r = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && await this.client.session.update(e, {
                            expiry: t
                        }), this.client.core.expirer.set(e, t)
                    }, this.setProposal = async (e, t) => {
                        await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry)
                    }, this.setPendingSessionRequest = async e => {
                        let t = iM.wc_sessionRequest.req.ttl,
                            {
                                id: r,
                                topic: n,
                                params: i
                            } = e;
                        await this.client.pendingRequest.set(r, {
                            id: r,
                            topic: n,
                            params: i
                        }), t && this.client.core.expirer.set(r, t0(t))
                    }, this.sendRequest = async (e, t, r, n, i) => {
                        let s = (0, rE.formatJsonRpcRequest)(t, r);
                        if (tB() && i$.includes(t)) {
                            let e = tx(JSON.stringify(s));
                            await this.client.core.verify.register({
                                attestationId: e
                            })
                        }
                        let o = await this.client.core.crypto.encode(e, s),
                            a = iM[t].req;
                        return n && (a.ttl = n), i && (a.id = i), this.client.core.history.set(e, s), this.client.core.relayer.publish(e, o, a), s.id
                    }, this.sendResult = async (e, t, r) => {
                        let n = (0, rE.formatJsonRpcResult)(e, r),
                            i = await this.client.core.crypto.encode(t, n),
                            s = await this.client.core.history.get(t, e),
                            o = iM[s.request.method].res;
                        this.client.core.relayer.publish(t, i, o), await this.client.core.history.resolve(n)
                    }, this.sendError = async (e, t, r) => {
                        let n = (0, rE.formatJsonRpcError)(e, r),
                            i = await this.client.core.crypto.encode(t, n),
                            s = await this.client.core.history.get(t, e),
                            o = iM[s.request.method].res;
                        this.client.core.relayer.publish(t, i, o), await this.client.core.history.resolve(n)
                    }, this.cleanup = async () => {
                        let e = [],
                            t = [];
                        this.client.session.getAll().forEach(t => {
                            t1(t.expiry) && e.push(t.topic)
                        }), this.client.proposal.getAll().forEach(e => {
                            t1(e.expiry) && t.push(e.id)
                        }), await Promise.all([...e.map(e => this.deleteSession(e)), ...t.map(e => this.deleteProposal(e))])
                    }, this.onRelayEventRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, n = r.method;
                        switch (n) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${n}`)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, n = (await this.client.core.history.get(t, r.id)).request.method;
                        switch (n) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${n}`)
                        }
                    }, this.onRelayEventUnknownPayload = e => {
                        let {
                            topic: t
                        } = e, {
                            message: r
                        } = rs("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                        throw Error(r)
                    }, this.onSessionProposeRequest = async (e, t) => {
                        let {
                            params: r,
                            id: n
                        } = t;
                        try {
                            this.isValidConnect(iG({}, t.params));
                            let i = t0(e3.FIVE_MINUTES),
                                s = iG({
                                    id: n,
                                    pairingTopic: e,
                                    expiry: i
                                }, r);
                            await this.setProposal(n, s);
                            let o = tx(JSON.stringify(t)),
                                a = await this.getVerifyContext(o, s.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: n,
                                params: s,
                                verifyContext: a
                            })
                        } catch (t) {
                            await this.sendError(n, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        if ((0, rE.isJsonRpcResult)(t)) {
                            let {
                                result: n
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: n
                            });
                            let i = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: i
                            });
                            let s = i.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            let o = n.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            let a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            let c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else(0, rE.isJsonRpcError)(t) && (await this.client.proposal.delete(r, ro("USER_DISCONNECTED")), this.events.emit(t5("session_connect"), {
                            error: t.error
                        }))
                    }, this.onSessionSettleRequest = async (e, t) => {
                        let {
                            id: r,
                            params: n
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(n);
                            let {
                                relay: r,
                                controller: i,
                                expiry: s,
                                namespaces: o,
                                requiredNamespaces: a,
                                optionalNamespaces: c,
                                sessionProperties: u,
                                pairingTopic: l
                            } = t.params, h = iG({
                                topic: e,
                                relay: r,
                                expiry: s,
                                namespaces: o,
                                acknowledged: !0,
                                pairingTopic: l,
                                requiredNamespaces: a,
                                optionalNamespaces: c,
                                controller: i.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: i.publicKey,
                                    metadata: i.metadata
                                }
                            }, u && {
                                sessionProperties: u
                            });
                            await this.sendResult(t.id, e, !0), this.events.emit(t5("session_connect"), {
                                session: h
                            }), this.cleanupDuplicatePairings(h)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, rE.isJsonRpcResult)(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit(t5("session_approve", r), {})) : (0, rE.isJsonRpcError)(t) && (await this.client.session.delete(e, ro("USER_DISCONNECTED")), this.events.emit(t5("session_approve", r), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        let {
                            params: r,
                            id: n
                        } = t;
                        try {
                            this.isValidUpdate(iG({
                                topic: e
                            }, r)), await this.client.session.update(e, {
                                namespaces: r.namespaces
                            }), await this.sendResult(n, e, !0), this.client.events.emit("session_update", {
                                id: n,
                                topic: e,
                                params: r
                            })
                        } catch (t) {
                            await this.sendError(n, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionUpdateResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, rE.isJsonRpcResult)(t) ? this.events.emit(t5("session_update", r), {}): (0, rE.isJsonRpcError)(t) && this.events.emit(t5("session_update", r), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, t0(ik)), await this.sendResult(r, e, !0), this.client.events.emit("session_extend", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, rE.isJsonRpcResult)(t) ? this.events.emit(t5("session_extend", r), {}): (0, rE.isJsonRpcError)(t) && this.events.emit(t5("session_extend", r), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.client.events.emit("session_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            (0, rE.isJsonRpcResult)(t) ? this.events.emit(t5("session_ping", r), {}): (0, rE.isJsonRpcError)(t) && this.events.emit(t5("session_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), await Promise.all([new Promise(t => {
                                this.client.core.relayer.once(nB.publish, async () => {
                                    t(await this.deleteSession(e))
                                })
                            }), this.sendResult(r, e, !0)]), this.client.events.emit("session_delete", {
                                id: r,
                                topic: e
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        let {
                            id: r,
                            params: n
                        } = t;
                        try {
                            this.isValidRequest(iG({
                                topic: e
                            }, n)), await this.setPendingSessionRequest({
                                id: r,
                                topic: e,
                                params: n
                            });
                            let i = tx(JSON.stringify(t)),
                                s = this.client.session.get(e),
                                o = await this.getVerifyContext(i, s.peer.metadata);
                            this.client.events.emit("session_request", {
                                id: r,
                                topic: e,
                                params: n,
                                verifyContext: o
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        (0, rE.isJsonRpcResult)(t) ? this.events.emit(t5("session_request", r), {
                            result: t.result
                        }): (0, rE.isJsonRpcError)(t) && this.events.emit(t5("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        let {
                            id: r,
                            params: n
                        } = t;
                        try {
                            this.isValidEmit(iG({
                                topic: e
                            }, n)), this.client.events.emit("session_event", {
                                id: r,
                                topic: e,
                                params: n
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.isValidConnect = async e => {
                        let t;
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                            throw Error(t)
                        }
                        let {
                            pairingTopic: r,
                            requiredNamespaces: n,
                            optionalNamespaces: i,
                            sessionProperties: s,
                            relays: o
                        } = e;
                        if (ru(r) || await this.isValidPairingTopic(r), t = !1, o ? o && ra(o) && o.length && o.forEach(e => {
                                t = ry(e)
                            }) : t = !0, !t) {
                            let {
                                message: e
                            } = rs("MISSING_OR_INVALID", `connect() relays: ${o}`);
                            throw Error(e)
                        }
                        ru(n) || 0 === rc(n) || this.validateNamespaces(n, "requiredNamespaces"), ru(i) || 0 === rc(i) || this.validateNamespaces(i, "optionalNamespaces"), ru(s) || this.validateSessionProps(s, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        let r = function(e, t, r) {
                            let n = null;
                            if (e && rc(e)) {
                                let r;
                                let i = rd(e, t);
                                i && (n = i);
                                let s = (r = null, Object.entries(e).forEach(([e, n]) => {
                                    var i, s;
                                    let o;
                                    if (r) return;
                                    let a = (i = tI(e, n), s = `${t} requiredNamespace`, o = null, ra(i) ? i.forEach(t => {
                                        !o && (rf(t) && t.includes(e) || (o = ro("UNSUPPORTED_CHAINS", `${s}, chain ${t} should be a string and conform to "namespace:chainId" format`)))
                                    }) : o = ro("UNSUPPORTED_CHAINS", `${s}, chains ${i} should be an array of strings conforming to "namespace:chainId" format`), o);
                                    a && (r = a)
                                }), r);
                                s && (n = s)
                            } else n = rs("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
                            return n
                        }(e, "connect()", t);
                        if (r) throw Error(r.message)
                    }, this.isValidApprove = async e => {
                        if (!rv(e)) throw Error(rs("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                        let {
                            id: t,
                            namespaces: r,
                            relayProtocol: n,
                            sessionProperties: i
                        } = e;
                        await this.isValidProposalId(t);
                        let s = this.client.proposal.get(t),
                            o = rg(r, "approve()");
                        if (o) throw Error(o.message);
                        let a = r_(s.requiredNamespaces, r, "approve()");
                        if (a) throw Error(a.message);
                        if (!rl(n, !0)) {
                            let {
                                message: e
                            } = rs("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
                            throw Error(e)
                        }
                        ru(i) || this.validateSessionProps(i, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `reject() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            id: t,
                            reason: r
                        } = e;
                        if (await this.isValidProposalId(t), !r || "object" != typeof r || !r.code || !rh(r.code, !1) || !r.message || !rl(r.message, !1)) {
                            let {
                                message: e
                            } = rs("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        let t;
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            relay: r,
                            controller: n,
                            namespaces: i,
                            expiry: s
                        } = e;
                        if (!ry(r)) {
                            let {
                                message: e
                            } = rs("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw Error(e)
                        }
                        let o = (t = null, rl(n ? .publicKey, !1) || (t = rs("MISSING_OR_INVALID", "onSessionSettleRequest() controller public key should be a string")), t);
                        if (o) throw Error(o.message);
                        let a = rg(i, "onSessionSettleRequest()");
                        if (a) throw Error(a.message);
                        if (t1(s)) {
                            let {
                                message: e
                            } = rs("EXPIRED", "onSessionSettleRequest()");
                            throw Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `update() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            namespaces: r
                        } = e;
                        await this.isValidSessionTopic(t);
                        let n = this.client.session.get(t),
                            i = rg(r, "update()");
                        if (i) throw Error(i.message);
                        let s = r_(n.requiredNamespaces, r, "update()");
                        if (s) throw Error(s.message)
                    }, this.isValidExtend = async e => {
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `extend() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        var t;
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `request() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            request: n,
                            chainId: i,
                            expiry: s
                        } = e;
                        await this.isValidSessionTopic(r);
                        let {
                            namespaces: o
                        } = this.client.session.get(r);
                        if (!rm(o, i)) {
                            let {
                                message: e
                            } = rs("MISSING_OR_INVALID", `request() chainId: ${i}`);
                            throw Error(e)
                        }
                        if (ru(n) || !rl(n.method, !1)) {
                            let {
                                message: e
                            } = rs("MISSING_OR_INVALID", `request() ${JSON.stringify(n)}`);
                            throw Error(e)
                        }
                        if (!(rl(t = n.method, !1) && (function(e, t) {
                                let r = [];
                                return Object.values(e).forEach(e => {
                                    rr(e.accounts).includes(t) && r.push(...e.methods)
                                }), r
                            })(o, i).includes(t))) {
                            let {
                                message: e
                            } = rs("MISSING_OR_INVALID", `request() method: ${n.method}`);
                            throw Error(e)
                        }
                        if (s && (!rh(s, !1) || !(s <= iz.max) || !(s >= iz.min))) {
                            let {
                                message: e
                            } = rs("MISSING_OR_INVALID", `request() expiry: ${s}. Expiry must be a number (in seconds) between ${iz.min} and ${iz.max}`);
                            throw Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `respond() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            response: r
                        } = e;
                        if (await this.isValidSessionTopic(t), ru(r) || ru(r.result) && ru(r.error) || !rh(r.id, !1) || !rl(r.jsonrpc, !1)) {
                            let {
                                message: e
                            } = rs("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        var t;
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `emit() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            event: n,
                            chainId: i
                        } = e;
                        await this.isValidSessionTopic(r);
                        let {
                            namespaces: s
                        } = this.client.session.get(r);
                        if (!rm(s, i)) {
                            let {
                                message: e
                            } = rs("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                            throw Error(e)
                        }
                        if (ru(n) || !rl(n.name, !1)) {
                            let {
                                message: e
                            } = rs("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
                            throw Error(e)
                        }
                        if (!(rl(t = n.name, !1) && (function(e, t) {
                                let r = [];
                                return Object.values(e).forEach(e => {
                                    rr(e.accounts).includes(t) && r.push(...e.events)
                                }), r
                            })(s, i).includes(t))) {
                            let {
                                message: e
                            } = rs("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(n)}`);
                            throw Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!rv(e)) {
                            let {
                                message: t
                            } = rs("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.getVerifyContext = async (e, t) => {
                        let r = {
                            verified: {
                                verifyUrl: t.verifyUrl || "",
                                validation: "UNKNOWN",
                                origin: t.url || ""
                            }
                        };
                        try {
                            let n = await this.client.core.verify.resolve({
                                attestationId: e,
                                verifyUrl: t.verifyUrl
                            });
                            n && (r.verified.origin = n, r.verified.validation = n === t.url ? "VALID" : "INVALID")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach(e => {
                            if (!rl(e, !1)) {
                                let {
                                    message: r
                                } = rs("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                                throw Error(r)
                            }
                        })
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = rs("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(nB.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        let n = await this.client.core.crypto.decode(t, r);
                        (0, rE.isJsonRpcRequest)(n) ? (this.client.core.history.set(t, n), this.onRelayEventRequest({
                            topic: t,
                            payload: n
                        })) : (0, rE.isJsonRpcResponse)(n) ? (await this.client.core.history.resolve(n), this.onRelayEventResponse({
                            topic: t,
                            payload: n
                        })) : this.onRelayEventUnknownPayload({
                            topic: t,
                            payload: n
                        })
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(nX.expired, async e => {
                        let {
                            topic: t,
                            id: r
                        } = tQ(e.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, rs("EXPIRED"), !0);
                        t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
                            topic: t
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    })
                }
                isValidPairingTopic(e) {
                    if (!rl(e, !1)) {
                        let {
                            message: t
                        } = rs("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        let {
                            message: t
                        } = rs("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if (t1(this.client.core.pairing.pairings.get(e).expiry)) {
                        let {
                            message: t
                        } = rs("EXPIRED", `pairing topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!rl(e, !1)) {
                        let {
                            message: t
                        } = rs("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.session.keys.includes(e)) {
                        let {
                            message: t
                        } = rs("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if (t1(this.client.session.get(e).expiry)) {
                        await this.deleteSession(e);
                        let {
                            message: t
                        } = rs("EXPIRED", `session topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
                    else if (rl(e, !1)) {
                        let {
                            message: t
                        } = rs("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    } else {
                        let {
                            message: t
                        } = rs("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidProposalId(e) {
                    if ("number" != typeof e) {
                        let {
                            message: t
                        } = rs("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        let {
                            message: t
                        } = rs("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if (t1(this.client.proposal.get(e).expiry)) {
                        await this.deleteProposal(e);
                        let {
                            message: t
                        } = rs("EXPIRED", `proposal id: ${e}`);
                        throw Error(t)
                    }
                }
            }
            class iZ extends iw {
                constructor(e, t) {
                    super(e, t, "proposal", ij), this.core = e, this.logger = t
                }
            }
            class iX extends iw {
                constructor(e, t) {
                    super(e, t, "session", ij), this.core = e, this.logger = t
                }
            }
            class iQ extends iw {
                constructor(e, t) {
                    super(e, t, "request", ij, e => e.id), this.core = e, this.logger = t
                }
            }
            class i0 extends tf {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = iU.name, this.events = new v.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = e ? .name || iU.name, this.metadata = e ? .metadata || (0, e2.D)() || {
                        name: "",
                        description: "",
                        url: "",
                        icons: [""]
                    };
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, tt.pino)((0, tt.getDefaultLoggerOptions)({
                        level: e ? .logger || iU.logger
                    }));
                    this.core = e ? .core || new iR(e), this.logger = (0, tt.generateChildLogger)(t, this.name), this.session = new iX(this.core, this.logger), this.proposal = new iZ(this.core, this.logger), this.pendingRequest = new iQ(this.core, this.logger), this.engine = new iY(this)
                }
                static async init(e) {
                    let t = new i0(e);
                    return await t.initialize(), t
                }
                get context() {
                    return (0, tt.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (e) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
                    }
                }
            }

            function i1(e = [], t = []) {
                return [...new Set([...e, ...t])]
            }

            function i5(e) {
                return e.includes(":")
            }

            function i3(e) {
                return i5(e) ? e.split(":")[0] : e
            }
            r(94543), r(34155), Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let i6 = {
                INVALID_METHOD: {
                    message: "Invalid method.",
                    code: 1001
                },
                INVALID_EVENT: {
                    message: "Invalid event.",
                    code: 1002
                },
                INVALID_UPDATE_REQUEST: {
                    message: "Invalid update request.",
                    code: 1003
                },
                INVALID_EXTEND_REQUEST: {
                    message: "Invalid extend request.",
                    code: 1004
                },
                INVALID_SESSION_SETTLE_REQUEST: {
                    message: "Invalid session settle request.",
                    code: 1005
                },
                UNAUTHORIZED_METHOD: {
                    message: "Unauthorized method.",
                    code: 3001
                },
                UNAUTHORIZED_EVENT: {
                    message: "Unauthorized event.",
                    code: 3002
                },
                UNAUTHORIZED_UPDATE_REQUEST: {
                    message: "Unauthorized update request.",
                    code: 3003
                },
                UNAUTHORIZED_EXTEND_REQUEST: {
                    message: "Unauthorized extend request.",
                    code: 3004
                },
                USER_REJECTED: {
                    message: "User rejected.",
                    code: 5e3
                },
                USER_REJECTED_CHAINS: {
                    message: "User rejected chains.",
                    code: 5001
                },
                USER_REJECTED_METHODS: {
                    message: "User rejected methods.",
                    code: 5002
                },
                USER_REJECTED_EVENTS: {
                    message: "User rejected events.",
                    code: 5003
                },
                UNSUPPORTED_CHAINS: {
                    message: "Unsupported chains.",
                    code: 5100
                },
                UNSUPPORTED_METHODS: {
                    message: "Unsupported methods.",
                    code: 5101
                },
                UNSUPPORTED_EVENTS: {
                    message: "Unsupported events.",
                    code: 5102
                },
                UNSUPPORTED_ACCOUNTS: {
                    message: "Unsupported accounts.",
                    code: 5103
                },
                UNSUPPORTED_NAMESPACE_KEY: {
                    message: "Unsupported namespace key.",
                    code: 5104
                },
                USER_DISCONNECTED: {
                    message: "User disconnected.",
                    code: 6e3
                },
                SESSION_SETTLEMENT_FAILED: {
                    message: "Session settlement failed.",
                    code: 7e3
                },
                WC_METHOD_UNSUPPORTED: {
                    message: "Unsupported wc_ method.",
                    code: 10001
                }
            };

            function i2(e, t) {
                let {
                    message: r,
                    code: n
                } = i6[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: n
                }
            }
            var i8 = r(96641);
            let i4 = "error",
                i9 = "wc@2:universal_provider:",
                i7 = {
                    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
                };
            var se = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                st = {
                    exports: {}
                };
            /**
             * @license
             * Lodash <https://lodash.com/>
             * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */
            ! function(e, t) {
                (function() {
                    var r, n = "Expected a function",
                        i = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 1 / 0,
                        a = 0 / 0,
                        c = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        u = "[object Arguments]",
                        l = "[object Array]",
                        h = "[object Boolean]",
                        f = "[object Date]",
                        p = "[object Error]",
                        d = "[object Function]",
                        g = "[object GeneratorFunction]",
                        y = "[object Map]",
                        v = "[object Number]",
                        m = "[object Object]",
                        _ = "[object Promise]",
                        b = "[object RegExp]",
                        w = "[object Set]",
                        E = "[object String]",
                        D = "[object Symbol]",
                        S = "[object WeakMap]",
                        I = "[object ArrayBuffer]",
                        O = "[object DataView]",
                        P = "[object Float32Array]",
                        C = "[object Float64Array]",
                        A = "[object Int8Array]",
                        N = "[object Int16Array]",
                        x = "[object Int32Array]",
                        R = "[object Uint8Array]",
                        T = "[object Uint8ClampedArray]",
                        j = "[object Uint16Array]",
                        U = "[object Uint32Array]",
                        L = /\b__p \+= '';/g,
                        k = /\b(__p \+=) '' \+/g,
                        M = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        z = /&(?:amp|lt|gt|quot|#39);/g,
                        $ = /[&<>"']/g,
                        q = RegExp(z.source),
                        H = RegExp($.source),
                        F = /<%-([\s\S]+?)%>/g,
                        V = /<%([\s\S]+?)%>/g,
                        B = /<%=([\s\S]+?)%>/g,
                        K = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        W = /^\w*$/,
                        G = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        J = /[\\^$.*+?()[\]{}|]/g,
                        Y = RegExp(J.source),
                        Z = /^\s+/,
                        X = /\s/,
                        Q = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        et = /,? & /,
                        er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        en = /[()=,{}\[\]\/\s]/,
                        ei = /\\(\\)?/g,
                        es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        eo = /\w*$/,
                        ea = /^[-+]0x[0-9a-f]+$/i,
                        ec = /^0b[01]+$/i,
                        eu = /^\[object .+?Constructor\]$/,
                        el = /^0o[0-7]+$/i,
                        eh = /^(?:0|[1-9]\d*)$/,
                        ef = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        ep = /($^)/,
                        ed = /['\n\r\u2028\u2029\\]/g,
                        eg = "\ud800-\udfff",
                        ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        ev = "\\u2700-\\u27bf",
                        em = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        e_ = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        eb = "\\ufe0e\\ufe0f",
                        ew = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        eE = "['’]",
                        eD = "[" + ew + "]",
                        eS = "[" + ey + "]",
                        eI = "[" + em + "]",
                        eO = "[^" + eg + ew + "\\d+" + ev + em + e_ + "]",
                        eP = "\ud83c[\udffb-\udfff]",
                        eC = "[^" + eg + "]",
                        eA = "(?:\ud83c[\udde6-\uddff]){2}",
                        eN = "[\ud800-\udbff][\udc00-\udfff]",
                        ex = "[" + e_ + "]",
                        eR = "\\u200d",
                        eT = "(?:" + eI + "|" + eO + ")",
                        ej = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?",
                        eU = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?",
                        eL = "(?:" + eS + "|" + eP + ")?",
                        ek = "[" + eb + "]?",
                        eM = "(?:" + eR + "(?:" + [eC, eA, eN].join("|") + ")" + ek + eL + ")*",
                        ez = ek + eL + eM,
                        e$ = "(?:" + ["[" + ev + "]", eA, eN].join("|") + ")" + ez,
                        eq = "(?:" + [eC + eS + "?", eS, eA, eN, "[" + eg + "]"].join("|") + ")",
                        eH = RegExp(eE, "g"),
                        eF = RegExp(eS, "g"),
                        eV = RegExp(eP + "(?=" + eP + ")|" + eq + ez, "g"),
                        eB = RegExp([ex + "?" + eI + "+" + ej + "(?=" + [eD, ex, "$"].join("|") + ")", "(?:" + ex + "|" + eO + ")+" + eU + "(?=" + [eD, ex + eT, "$"].join("|") + ")", ex + "?" + eT + "+" + ej, ex + "+" + eU, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", e$].join("|"), "g"),
                        eK = RegExp("[" + eR + eg + ey + eb + "]"),
                        eW = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        eG = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        eJ = -1,
                        eY = {};
                    eY[P] = eY[C] = eY[A] = eY[N] = eY[x] = eY[R] = eY[T] = eY[j] = eY[U] = !0, eY[u] = eY[l] = eY[I] = eY[h] = eY[O] = eY[f] = eY[p] = eY[d] = eY[y] = eY[v] = eY[m] = eY[b] = eY[w] = eY[E] = eY[S] = !1;
                    var eZ = {};
                    eZ[u] = eZ[l] = eZ[I] = eZ[O] = eZ[h] = eZ[f] = eZ[P] = eZ[C] = eZ[A] = eZ[N] = eZ[x] = eZ[y] = eZ[v] = eZ[m] = eZ[b] = eZ[w] = eZ[E] = eZ[D] = eZ[R] = eZ[T] = eZ[j] = eZ[U] = !0, eZ[p] = eZ[d] = eZ[S] = !1;
                    var eX = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        eQ = parseFloat,
                        e0 = parseInt,
                        e1 = "object" == typeof se && se && se.Object === Object && se,
                        e5 = "object" == typeof self && self && self.Object === Object && self,
                        e3 = e1 || e5 || Function("return this")(),
                        e6 = t && !t.nodeType && t,
                        e2 = e6 && e && !e.nodeType && e,
                        e8 = e2 && e2.exports === e6,
                        e4 = e8 && e1.process,
                        e9 = function() {
                            try {
                                return e2 && e2.require && e2.require("util").types || e4 && e4.binding && e4.binding("util")
                            } catch {}
                        }(),
                        e7 = e9 && e9.isArrayBuffer,
                        te = e9 && e9.isDate,
                        tt = e9 && e9.isMap,
                        tr = e9 && e9.isRegExp,
                        tn = e9 && e9.isSet,
                        ti = e9 && e9.isTypedArray;

                    function ts(e, t, r) {
                        switch (r.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2])
                        }
                        return e.apply(t, r)
                    }

                    function to(e, t, r, n) {
                        for (var i = -1, s = null == e ? 0 : e.length; ++i < s;) {
                            var o = e[i];
                            t(n, o, r(o), e)
                        }
                        return n
                    }

                    function ta(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
                        return e
                    }

                    function tc(e, t) {
                        for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                        return e
                    }

                    function tu(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                            if (!t(e[r], r, e)) return !1;
                        return !0
                    }

                    function tl(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length, i = 0, s = []; ++r < n;) {
                            var o = e[r];
                            t(o, r, e) && (s[i++] = o)
                        }
                        return s
                    }

                    function th(e, t) {
                        return !!(null == e ? 0 : e.length) && tw(e, t, 0) > -1
                    }

                    function tf(e, t, r) {
                        for (var n = -1, i = null == e ? 0 : e.length; ++n < i;)
                            if (r(t, e[n])) return !0;
                        return !1
                    }

                    function tp(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
                        return i
                    }

                    function td(e, t) {
                        for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
                        return e
                    }

                    function tg(e, t, r, n) {
                        var i = -1,
                            s = null == e ? 0 : e.length;
                        for (n && s && (r = e[++i]); ++i < s;) r = t(r, e[i], i, e);
                        return r
                    }

                    function ty(e, t, r, n) {
                        var i = null == e ? 0 : e.length;
                        for (n && i && (r = e[--i]); i--;) r = t(r, e[i], i, e);
                        return r
                    }

                    function tv(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                            if (t(e[r], r, e)) return !0;
                        return !1
                    }
                    var tm = tI("length");

                    function t_(e, t, r) {
                        var n;
                        return r(e, function(e, r, i) {
                            if (t(e, r, i)) return n = r, !1
                        }), n
                    }

                    function tb(e, t, r, n) {
                        for (var i = e.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i;)
                            if (t(e[s], s, e)) return s;
                        return -1
                    }

                    function tw(e, t, r) {
                        return t == t ? function(e, t, r) {
                            for (var n = r - 1, i = e.length; ++n < i;)
                                if (e[n] === t) return n;
                            return -1
                        }(e, t, r) : tb(e, tD, r)
                    }

                    function tE(e, t, r, n) {
                        for (var i = r - 1, s = e.length; ++i < s;)
                            if (n(e[i], t)) return i;
                        return -1
                    }

                    function tD(e) {
                        return e != e
                    }

                    function tS(e, t) {
                        var r = null == e ? 0 : e.length;
                        return r ? tC(e, t) / r : a
                    }

                    function tI(e) {
                        return function(t) {
                            return null == t ? r : t[e]
                        }
                    }

                    function tO(e) {
                        return function(t) {
                            return null == e ? r : e[t]
                        }
                    }

                    function tP(e, t, r, n, i) {
                        return i(e, function(e, i, s) {
                            r = n ? (n = !1, e) : t(r, e, i, s)
                        }), r
                    }

                    function tC(e, t) {
                        for (var n, i = -1, s = e.length; ++i < s;) {
                            var o = t(e[i]);
                            o !== r && (n = n === r ? o : n + o)
                        }
                        return n
                    }

                    function tA(e, t) {
                        for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                        return n
                    }

                    function tN(e) {
                        return e && e.slice(0, tK(e) + 1).replace(Z, "")
                    }

                    function tx(e) {
                        return function(t) {
                            return e(t)
                        }
                    }

                    function tR(e, t) {
                        return tp(t, function(t) {
                            return e[t]
                        })
                    }

                    function tT(e, t) {
                        return e.has(t)
                    }

                    function tj(e, t) {
                        for (var r = -1, n = e.length; ++r < n && tw(t, e[r], 0) > -1;);
                        return r
                    }

                    function tU(e, t) {
                        for (var r = e.length; r-- && tw(t, e[r], 0) > -1;);
                        return r
                    }
                    var tL = tO({
                            À: "A",
                            Á: "A",
                            Â: "A",
                            Ã: "A",
                            Ä: "A",
                            Å: "A",
                            à: "a",
                            á: "a",
                            â: "a",
                            ã: "a",
                            ä: "a",
                            å: "a",
                            Ç: "C",
                            ç: "c",
                            Ð: "D",
                            ð: "d",
                            È: "E",
                            É: "E",
                            Ê: "E",
                            Ë: "E",
                            è: "e",
                            é: "e",
                            ê: "e",
                            ë: "e",
                            Ì: "I",
                            Í: "I",
                            Î: "I",
                            Ï: "I",
                            ì: "i",
                            í: "i",
                            î: "i",
                            ï: "i",
                            Ñ: "N",
                            ñ: "n",
                            Ò: "O",
                            Ó: "O",
                            Ô: "O",
                            Õ: "O",
                            Ö: "O",
                            Ø: "O",
                            ò: "o",
                            ó: "o",
                            ô: "o",
                            õ: "o",
                            ö: "o",
                            ø: "o",
                            Ù: "U",
                            Ú: "U",
                            Û: "U",
                            Ü: "U",
                            ù: "u",
                            ú: "u",
                            û: "u",
                            ü: "u",
                            Ý: "Y",
                            ý: "y",
                            ÿ: "y",
                            Æ: "Ae",
                            æ: "ae",
                            Þ: "Th",
                            þ: "th",
                            ß: "ss",
                            Ā: "A",
                            Ă: "A",
                            Ą: "A",
                            ā: "a",
                            ă: "a",
                            ą: "a",
                            Ć: "C",
                            Ĉ: "C",
                            Ċ: "C",
                            Č: "C",
                            ć: "c",
                            ĉ: "c",
                            ċ: "c",
                            č: "c",
                            Ď: "D",
                            Đ: "D",
                            ď: "d",
                            đ: "d",
                            Ē: "E",
                            Ĕ: "E",
                            Ė: "E",
                            Ę: "E",
                            Ě: "E",
                            ē: "e",
                            ĕ: "e",
                            ė: "e",
                            ę: "e",
                            ě: "e",
                            Ĝ: "G",
                            Ğ: "G",
                            Ġ: "G",
                            Ģ: "G",
                            ĝ: "g",
                            ğ: "g",
                            ġ: "g",
                            ģ: "g",
                            Ĥ: "H",
                            Ħ: "H",
                            ĥ: "h",
                            ħ: "h",
                            Ĩ: "I",
                            Ī: "I",
                            Ĭ: "I",
                            Į: "I",
                            İ: "I",
                            ĩ: "i",
                            ī: "i",
                            ĭ: "i",
                            į: "i",
                            ı: "i",
                            Ĵ: "J",
                            ĵ: "j",
                            Ķ: "K",
                            ķ: "k",
                            ĸ: "k",
                            Ĺ: "L",
                            Ļ: "L",
                            Ľ: "L",
                            Ŀ: "L",
                            Ł: "L",
                            ĺ: "l",
                            ļ: "l",
                            ľ: "l",
                            ŀ: "l",
                            ł: "l",
                            Ń: "N",
                            Ņ: "N",
                            Ň: "N",
                            Ŋ: "N",
                            ń: "n",
                            ņ: "n",
                            ň: "n",
                            ŋ: "n",
                            Ō: "O",
                            Ŏ: "O",
                            Ő: "O",
                            ō: "o",
                            ŏ: "o",
                            ő: "o",
                            Ŕ: "R",
                            Ŗ: "R",
                            Ř: "R",
                            ŕ: "r",
                            ŗ: "r",
                            ř: "r",
                            Ś: "S",
                            Ŝ: "S",
                            Ş: "S",
                            Š: "S",
                            ś: "s",
                            ŝ: "s",
                            ş: "s",
                            š: "s",
                            Ţ: "T",
                            Ť: "T",
                            Ŧ: "T",
                            ţ: "t",
                            ť: "t",
                            ŧ: "t",
                            Ũ: "U",
                            Ū: "U",
                            Ŭ: "U",
                            Ů: "U",
                            Ű: "U",
                            Ų: "U",
                            ũ: "u",
                            ū: "u",
                            ŭ: "u",
                            ů: "u",
                            ű: "u",
                            ų: "u",
                            Ŵ: "W",
                            ŵ: "w",
                            Ŷ: "Y",
                            ŷ: "y",
                            Ÿ: "Y",
                            Ź: "Z",
                            Ż: "Z",
                            Ž: "Z",
                            ź: "z",
                            ż: "z",
                            ž: "z",
                            Ĳ: "IJ",
                            ĳ: "ij",
                            Œ: "Oe",
                            œ: "oe",
                            ŉ: "'n",
                            ſ: "s"
                        }),
                        tk = tO({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function tM(e) {
                        return "\\" + eX[e]
                    }

                    function tz(e) {
                        return eK.test(e)
                    }

                    function t$(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e, n) {
                            r[++t] = [n, e]
                        }), r
                    }

                    function tq(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    }

                    function tH(e, t) {
                        for (var r = -1, n = e.length, i = 0, o = []; ++r < n;) {
                            var a = e[r];
                            (a === t || a === s) && (e[r] = s, o[i++] = r)
                        }
                        return o
                    }

                    function tF(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e) {
                            r[++t] = e
                        }), r
                    }

                    function tV(e) {
                        return tz(e) ? function(e) {
                            for (var t = eV.lastIndex = 0; eV.test(e);) ++t;
                            return t
                        }(e) : tm(e)
                    }

                    function tB(e) {
                        return tz(e) ? e.match(eV) || [] : e.split("")
                    }

                    function tK(e) {
                        for (var t = e.length; t-- && X.test(e.charAt(t)););
                        return t
                    }
                    var tW = tO({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        tG = function e(t) {
                            var X, eg, ey, ev, em = (t = null == t ? e3 : tG.defaults(e3.Object(), t, tG.pick(e3, eG))).Array,
                                e_ = t.Date,
                                eb = t.Error,
                                ew = t.Function,
                                eE = t.Math,
                                eD = t.Object,
                                eS = t.RegExp,
                                eI = t.String,
                                eO = t.TypeError,
                                eP = em.prototype,
                                eC = ew.prototype,
                                eA = eD.prototype,
                                eN = t["__core-js_shared__"],
                                ex = eC.toString,
                                eR = eA.hasOwnProperty,
                                eT = 0,
                                ej = (X = /[^.]+$/.exec(eN && eN.keys && eN.keys.IE_PROTO || "")) ? "Symbol(src)_1." + X : "",
                                eU = eA.toString,
                                eL = ex.call(eD),
                                ek = e3._,
                                eM = eS("^" + ex.call(eR).replace(J, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                ez = e8 ? t.Buffer : r,
                                e$ = t.Symbol,
                                eq = t.Uint8Array,
                                eV = ez ? ez.allocUnsafe : r,
                                eK = tq(eD.getPrototypeOf, eD),
                                eX = eD.create,
                                e1 = eA.propertyIsEnumerable,
                                e5 = eP.splice,
                                e6 = e$ ? e$.isConcatSpreadable : r,
                                e2 = e$ ? e$.iterator : r,
                                e4 = e$ ? e$.toStringTag : r,
                                e9 = function() {
                                    try {
                                        var e = i_(eD, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch {}
                                }(),
                                tm = t.clearTimeout !== e3.clearTimeout && t.clearTimeout,
                                tO = e_ && e_.now !== e3.Date.now && e_.now,
                                tJ = t.setTimeout !== e3.setTimeout && t.setTimeout,
                                tY = eE.ceil,
                                tZ = eE.floor,
                                tX = eD.getOwnPropertySymbols,
                                tQ = ez ? ez.isBuffer : r,
                                t0 = t.isFinite,
                                t1 = eP.join,
                                t5 = tq(eD.keys, eD),
                                t3 = eE.max,
                                t6 = eE.min,
                                t2 = e_.now,
                                t8 = t.parseInt,
                                t4 = eE.random,
                                t9 = eP.reverse,
                                t7 = i_(t, "DataView"),
                                re = i_(t, "Map"),
                                rt = i_(t, "Promise"),
                                rr = i_(t, "Set"),
                                rn = i_(t, "WeakMap"),
                                ri = i_(eD, "create"),
                                rs = rn && new rn,
                                ro = {},
                                ra = iV(t7),
                                rc = iV(re),
                                ru = iV(rt),
                                rl = iV(rr),
                                rh = iV(rn),
                                rf = e$ ? e$.prototype : r,
                                rp = rf ? rf.valueOf : r,
                                rd = rf ? rf.toString : r;

                            function rg(e) {
                                if (sZ(e) && !s$(e) && !(e instanceof r_)) {
                                    if (e instanceof rm) return e;
                                    if (eR.call(e, "__wrapped__")) return iB(e)
                                }
                                return new rm(e)
                            }
                            var ry = function() {
                                function e() {}
                                return function(t) {
                                    if (!sY(t)) return {};
                                    if (eX) return eX(t);
                                    e.prototype = t;
                                    var n = new e;
                                    return e.prototype = r, n
                                }
                            }();

                            function rv() {}

                            function rm(e, t) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r
                            }

                            function r_(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                            }

                            function rb(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var n = e[t];
                                    this.set(n[0], n[1])
                                }
                            }

                            function rw(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var n = e[t];
                                    this.set(n[0], n[1])
                                }
                            }

                            function rE(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var n = e[t];
                                    this.set(n[0], n[1])
                                }
                            }

                            function rD(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.__data__ = new rE; ++t < r;) this.add(e[t])
                            }

                            function rS(e) {
                                var t = this.__data__ = new rw(e);
                                this.size = t.size
                            }

                            function rI(e, t) {
                                var r = s$(e),
                                    n = !r && sz(e),
                                    i = !r && !n && sV(e),
                                    s = !r && !n && !i && s2(e),
                                    o = r || n || i || s,
                                    a = o ? tA(e.length, eI) : [],
                                    c = a.length;
                                for (var u in e)(t || eR.call(e, u)) && !(o && ("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || iO(u, c))) && a.push(u);
                                return a
                            }

                            function rO(e) {
                                var t = e.length;
                                return t ? e[nf(0, t - 1)] : r
                            }

                            function rP(e, t) {
                                return iq(nB(e), rL(t, 0, e.length))
                            }

                            function rC(e) {
                                return iq(nB(e))
                            }

                            function rA(e, t, n) {
                                (n === r || sL(e[t], n)) && (n !== r || t in e) || rj(e, t, n)
                            }

                            function rN(e, t, n) {
                                var i = e[t];
                                eR.call(e, t) && sL(i, n) && (n !== r || t in e) || rj(e, t, n)
                            }

                            function rx(e, t) {
                                for (var r = e.length; r--;)
                                    if (sL(e[r][0], t)) return r;
                                return -1
                            }

                            function rR(e, t, r, n) {
                                return rq(e, function(e, i, s) {
                                    t(n, e, r(e), s)
                                }), n
                            }

                            function rT(e, t) {
                                return e && nK(t, ov(t), e)
                            }

                            function rj(e, t, r) {
                                "__proto__" == t && e9 ? e9(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r,
                                    writable: !0
                                }) : e[t] = r
                            }

                            function rU(e, t) {
                                for (var n = -1, i = t.length, s = em(i), o = null == e; ++n < i;) s[n] = o ? r : of (e, t[n]);
                                return s
                            }

                            function rL(e, t, n) {
                                return e == e && (n !== r && (e = e <= n ? e : n), t !== r && (e = e >= t ? e : t)), e
                            }

                            function rk(e, t, n, i, s, o) {
                                var a, c = 1 & t,
                                    l = 2 & t;
                                if (n && (a = s ? n(e, i, s, o) : n(e)), a !== r) return a;
                                if (!sY(e)) return e;
                                var p = s$(e);
                                if (p) {
                                    if (_ = e.length, S = new e.constructor(_), _ && "string" == typeof e[0] && eR.call(e, "index") && (S.index = e.index, S.input = e.input), a = S, !c) return nB(e, a)
                                } else {
                                    var _, S, L, k, M, z = iE(e),
                                        $ = z == d || z == g;
                                    if (sV(e)) return nz(e, c);
                                    if (z == m || z == u || $ && !s) {
                                        if (a = l || $ ? {} : iS(e), !c) return l ? (L = (M = a) && nK(e, om(e), M), nK(e, iw(e), L)) : (k = rT(a, e), nK(e, ib(e), k))
                                    } else {
                                        if (!eZ[z]) return s ? e : {};
                                        a = function(e, t, r) {
                                            var n, i, s = e.constructor;
                                            switch (t) {
                                                case I:
                                                    return n$(e);
                                                case h:
                                                case f:
                                                    return new s(+e);
                                                case O:
                                                    return n = r ? n$(e.buffer) : e.buffer, new e.constructor(n, e.byteOffset, e.byteLength);
                                                case P:
                                                case C:
                                                case A:
                                                case N:
                                                case x:
                                                case R:
                                                case T:
                                                case j:
                                                case U:
                                                    return nq(e, r);
                                                case y:
                                                    return new s;
                                                case v:
                                                case E:
                                                    return new s(e);
                                                case b:
                                                    return (i = new e.constructor(e.source, eo.exec(e))).lastIndex = e.lastIndex, i;
                                                case w:
                                                    return new s;
                                                case D:
                                                    return rp ? eD(rp.call(e)) : {}
                                            }
                                        }(e, z, c)
                                    }
                                }
                                o || (o = new rS);
                                var q = o.get(e);
                                if (q) return q;
                                o.set(e, a), s5(e) ? e.forEach(function(r) {
                                    a.add(rk(r, t, n, r, e, o))
                                }) : sX(e) && e.forEach(function(r, i) {
                                    a.set(i, rk(r, t, n, i, e, o))
                                });
                                var H = p ? r : (4 & t ? l ? ih : il : l ? om : ov)(e);
                                return ta(H || e, function(r, i) {
                                    H && (r = e[i = r]), rN(a, i, rk(r, t, n, i, e, o))
                                }), a
                            }

                            function rM(e, t, n) {
                                var i = n.length;
                                if (null == e) return !i;
                                for (e = eD(e); i--;) {
                                    var s = n[i],
                                        o = t[s],
                                        a = e[s];
                                    if (a === r && !(s in e) || !o(a)) return !1
                                }
                                return !0
                            }

                            function rz(e, t, i) {
                                if ("function" != typeof e) throw new eO(n);
                                return ik(function() {
                                    e.apply(r, i)
                                }, t)
                            }

                            function r$(e, t, r, n) {
                                var i = -1,
                                    s = th,
                                    o = !0,
                                    a = e.length,
                                    c = [],
                                    u = t.length;
                                if (!a) return c;
                                r && (t = tp(t, tx(r))), n ? (s = tf, o = !1) : t.length >= 200 && (s = tT, o = !1, t = new rD(t));
                                e: for (; ++i < a;) {
                                    var l = e[i],
                                        h = null == r ? l : r(l);
                                    if (l = n || 0 !== l ? l : 0, o && h == h) {
                                        for (var f = u; f--;)
                                            if (t[f] === h) continue e;
                                        c.push(l)
                                    } else s(t, h, n) || c.push(l)
                                }
                                return c
                            }
                            rg.templateSettings = {
                                escape: F,
                                evaluate: V,
                                interpolate: B,
                                variable: "",
                                imports: {
                                    _: rg
                                }
                            }, rg.prototype = rv.prototype, rg.prototype.constructor = rg, rm.prototype = ry(rv.prototype), rm.prototype.constructor = rm, r_.prototype = ry(rv.prototype), r_.prototype.constructor = r_, rb.prototype.clear = function() {
                                this.__data__ = ri ? ri(null) : {}, this.size = 0
                            }, rb.prototype.delete = function(e) {
                                var t = this.has(e) && delete this.__data__[e];
                                return this.size -= t ? 1 : 0, t
                            }, rb.prototype.get = function(e) {
                                var t = this.__data__;
                                if (ri) {
                                    var n = t[e];
                                    return n === i ? r : n
                                }
                                return eR.call(t, e) ? t[e] : r
                            }, rb.prototype.has = function(e) {
                                var t = this.__data__;
                                return ri ? t[e] !== r : eR.call(t, e)
                            }, rb.prototype.set = function(e, t) {
                                var n = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, n[e] = ri && t === r ? i : t, this
                            }, rw.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, rw.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = rx(t, e);
                                return !(r < 0) && (r == t.length - 1 ? t.pop() : e5.call(t, r, 1), --this.size, !0)
                            }, rw.prototype.get = function(e) {
                                var t = this.__data__,
                                    n = rx(t, e);
                                return n < 0 ? r : t[n][1]
                            }, rw.prototype.has = function(e) {
                                return rx(this.__data__, e) > -1
                            }, rw.prototype.set = function(e, t) {
                                var r = this.__data__,
                                    n = rx(r, e);
                                return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
                            }, rE.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new rb,
                                    map: new(re || rw),
                                    string: new rb
                                }
                            }, rE.prototype.delete = function(e) {
                                var t = iv(this, e).delete(e);
                                return this.size -= t ? 1 : 0, t
                            }, rE.prototype.get = function(e) {
                                return iv(this, e).get(e)
                            }, rE.prototype.has = function(e) {
                                return iv(this, e).has(e)
                            }, rE.prototype.set = function(e, t) {
                                var r = iv(this, e),
                                    n = r.size;
                                return r.set(e, t), this.size += r.size == n ? 0 : 1, this
                            }, rD.prototype.add = rD.prototype.push = function(e) {
                                return this.__data__.set(e, i), this
                            }, rD.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rS.prototype.clear = function() {
                                this.__data__ = new rw, this.size = 0
                            }, rS.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = t.delete(e);
                                return this.size = t.size, r
                            }, rS.prototype.get = function(e) {
                                return this.__data__.get(e)
                            }, rS.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rS.prototype.set = function(e, t) {
                                var r = this.__data__;
                                if (r instanceof rw) {
                                    var n = r.__data__;
                                    if (!re || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
                                    r = this.__data__ = new rE(n)
                                }
                                return r.set(e, t), this.size = r.size, this
                            };
                            var rq = nJ(rJ),
                                rH = nJ(rY, !0);

                            function rF(e, t) {
                                var r = !0;
                                return rq(e, function(e, n, i) {
                                    return r = !!t(e, n, i)
                                }), r
                            }

                            function rV(e, t, n) {
                                for (var i = -1, s = e.length; ++i < s;) {
                                    var o = e[i],
                                        a = t(o);
                                    if (null != a && (c === r ? a == a && !s6(a) : n(a, c))) var c = a,
                                        u = o
                                }
                                return u
                            }

                            function rB(e, t) {
                                var r = [];
                                return rq(e, function(e, n, i) {
                                    t(e, n, i) && r.push(e)
                                }), r
                            }

                            function rK(e, t, r, n, i) {
                                var s = -1,
                                    o = e.length;
                                for (r || (r = iI), i || (i = []); ++s < o;) {
                                    var a = e[s];
                                    t > 0 && r(a) ? t > 1 ? rK(a, t - 1, r, n, i) : td(i, a) : n || (i[i.length] = a)
                                }
                                return i
                            }
                            var rW = nY(),
                                rG = nY(!0);

                            function rJ(e, t) {
                                return e && rW(e, t, ov)
                            }

                            function rY(e, t) {
                                return e && rG(e, t, ov)
                            }

                            function rZ(e, t) {
                                return tl(t, function(t) {
                                    return sW(e[t])
                                })
                            }

                            function rX(e, t) {
                                t = nL(t, e);
                                for (var n = 0, i = t.length; null != e && n < i;) e = e[iF(t[n++])];
                                return n && n == i ? e : r
                            }

                            function rQ(e, t, r) {
                                var n = t(e);
                                return s$(e) ? n : td(n, r(e))
                            }

                            function r0(e) {
                                return null == e ? e === r ? "[object Undefined]" : "[object Null]" : e4 && e4 in eD(e) ? function(e) {
                                    var t = eR.call(e, e4),
                                        n = e[e4];
                                    try {
                                        e[e4] = r;
                                        var i = !0
                                    } catch {}
                                    var s = eU.call(e);
                                    return i && (t ? e[e4] = n : delete e[e4]), s
                                }(e) : eU.call(e)
                            }

                            function r1(e, t) {
                                return e > t
                            }

                            function r5(e, t) {
                                return null != e && eR.call(e, t)
                            }

                            function r3(e, t) {
                                return null != e && t in eD(e)
                            }

                            function r6(e, t, n) {
                                for (var i = n ? tf : th, s = e[0].length, o = e.length, a = o, c = em(o), u = 1 / 0, l = []; a--;) {
                                    var h = e[a];
                                    a && t && (h = tp(h, tx(t))), u = t6(h.length, u), c[a] = !n && (t || s >= 120 && h.length >= 120) ? new rD(a && h) : r
                                }
                                h = e[0];
                                var f = -1,
                                    p = c[0];
                                e: for (; ++f < s && l.length < u;) {
                                    var d = h[f],
                                        g = t ? t(d) : d;
                                    if (d = n || 0 !== d ? d : 0, !(p ? tT(p, g) : i(l, g, n))) {
                                        for (a = o; --a;) {
                                            var y = c[a];
                                            if (!(y ? tT(y, g) : i(e[a], g, n))) continue e
                                        }
                                        p && p.push(g), l.push(d)
                                    }
                                }
                                return l
                            }

                            function r2(e, t, n) {
                                t = nL(t, e);
                                var i = null == (e = ij(e, t)) ? e : e[iF(i5(t))];
                                return null == i ? r : ts(i, e, n)
                            }

                            function r8(e) {
                                return sZ(e) && r0(e) == u
                            }

                            function r4(e, t, n, i, s) {
                                return e === t || (null != e && null != t && (sZ(e) || sZ(t)) ? function(e, t, n, i, s, o) {
                                    var a = s$(e),
                                        c = s$(t),
                                        d = a ? l : iE(e),
                                        g = c ? l : iE(t);
                                    d = d == u ? m : d, g = g == u ? m : g;
                                    var _ = d == m,
                                        S = g == m,
                                        P = d == g;
                                    if (P && sV(e)) {
                                        if (!sV(t)) return !1;
                                        a = !0, _ = !1
                                    }
                                    if (P && !_) return o || (o = new rS), a || s2(e) ? ic(e, t, n, i, s, o) : function(e, t, r, n, i, s, o) {
                                        switch (r) {
                                            case O:
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                                e = e.buffer, t = t.buffer;
                                            case I:
                                                return !(e.byteLength != t.byteLength || !s(new eq(e), new eq(t)));
                                            case h:
                                            case f:
                                            case v:
                                                return sL(+e, +t);
                                            case p:
                                                return e.name == t.name && e.message == t.message;
                                            case b:
                                            case E:
                                                return e == t + "";
                                            case y:
                                                var a = t$;
                                            case w:
                                                var c = 1 & n;
                                                if (a || (a = tF), e.size != t.size && !c) break;
                                                var u = o.get(e);
                                                if (u) return u == t;
                                                n |= 2, o.set(e, t);
                                                var l = ic(a(e), a(t), n, i, s, o);
                                                return o.delete(e), l;
                                            case D:
                                                if (rp) return rp.call(e) == rp.call(t)
                                        }
                                        return !1
                                    }(e, t, d, n, i, s, o);
                                    if (!(1 & n)) {
                                        var C = _ && eR.call(e, "__wrapped__"),
                                            A = S && eR.call(t, "__wrapped__");
                                        if (C || A) {
                                            var N = C ? e.value() : e,
                                                x = A ? t.value() : t;
                                            return o || (o = new rS), s(N, x, n, i, o)
                                        }
                                    }
                                    return !!P && (o || (o = new rS), function(e, t, n, i, s, o) {
                                        var a = 1 & n,
                                            c = il(e),
                                            u = c.length;
                                        if (u != il(t).length && !a) return !1;
                                        for (var l = u; l--;) {
                                            var h = c[l];
                                            if (!(a ? h in t : eR.call(t, h))) return !1
                                        }
                                        var f = o.get(e),
                                            p = o.get(t);
                                        if (f && p) return f == t && p == e;
                                        var d = !0;
                                        o.set(e, t), o.set(t, e);
                                        for (var g = a; ++l < u;) {
                                            var y = e[h = c[l]],
                                                v = t[h];
                                            if (i) var m = a ? i(v, y, h, t, e, o) : i(y, v, h, e, t, o);
                                            if (!(m === r ? y === v || s(y, v, n, i, o) : m)) {
                                                d = !1;
                                                break
                                            }
                                            g || (g = "constructor" == h)
                                        }
                                        if (d && !g) {
                                            var _ = e.constructor,
                                                b = t.constructor;
                                            _ != b && "constructor" in e && "constructor" in t && !("function" == typeof _ && _ instanceof _ && "function" == typeof b && b instanceof b) && (d = !1)
                                        }
                                        return o.delete(e), o.delete(t), d
                                    }(e, t, n, i, s, o))
                                }(e, t, n, i, r4, s) : e != e && t != t)
                            }

                            function r9(e, t, n, i) {
                                var s = n.length,
                                    o = s,
                                    a = !i;
                                if (null == e) return !o;
                                for (e = eD(e); s--;) {
                                    var c = n[s];
                                    if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                                }
                                for (; ++s < o;) {
                                    var u = (c = n[s])[0],
                                        l = e[u],
                                        h = c[1];
                                    if (a && c[2]) {
                                        if (l === r && !(u in e)) return !1
                                    } else {
                                        var f = new rS;
                                        if (i) var p = i(l, h, u, e, t, f);
                                        if (!(p === r ? r4(h, l, 3, i, f) : p)) return !1
                                    }
                                }
                                return !0
                            }

                            function r7(e) {
                                return !(!sY(e) || ej && ej in e) && (sW(e) ? eM : eu).test(iV(e))
                            }

                            function ne(e) {
                                return "function" == typeof e ? e : null == e ? oF : "object" == typeof e ? s$(e) ? ns(e[0], e[1]) : ni(e) : oX(e)
                            }

                            function nt(e) {
                                if (!ix(e)) return t5(e);
                                var t = [];
                                for (var r in eD(e)) eR.call(e, r) && "constructor" != r && t.push(r);
                                return t
                            }

                            function nr(e, t) {
                                return e < t
                            }

                            function nn(e, t) {
                                var r = -1,
                                    n = sH(e) ? em(e.length) : [];
                                return rq(e, function(e, i, s) {
                                    n[++r] = t(e, i, s)
                                }), n
                            }

                            function ni(e) {
                                var t = im(e);
                                return 1 == t.length && t[0][2] ? iR(t[0][0], t[0][1]) : function(r) {
                                    return r === e || r9(r, e, t)
                                }
                            }

                            function ns(e, t) {
                                var n;
                                return iC(e) && (n = t) == n && !sY(n) ? iR(iF(e), t) : function(n) {
                                    var i = of (n, e);
                                    return i === r && i === t ? op(n, e) : r4(t, i, 3)
                                }
                            }

                            function no(e, t, n, i, s) {
                                e !== t && rW(t, function(o, a) {
                                    if (s || (s = new rS), sY(o)) ! function(e, t, n, i, s, o, a) {
                                        var c = iU(e, n),
                                            u = iU(t, n),
                                            l = a.get(u);
                                        if (l) {
                                            rA(e, n, l);
                                            return
                                        }
                                        var h = o ? o(c, u, n + "", e, t, a) : r,
                                            f = h === r;
                                        if (f) {
                                            var p = s$(u),
                                                d = !p && sV(u),
                                                g = !p && !d && s2(u);
                                            h = u, p || d || g ? s$(c) ? h = c : sF(c) ? h = nB(c) : d ? (f = !1, h = nz(u, !0)) : g ? (f = !1, h = nq(u, !0)) : h = [] : s0(u) || sz(u) ? (h = c, sz(c) ? h = on(c) : (!sY(c) || sW(c)) && (h = iS(u))) : f = !1
                                        }
                                        f && (a.set(u, h), s(h, u, i, o, a), a.delete(u)), rA(e, n, h)
                                    }(e, t, a, n, no, i, s);
                                    else {
                                        var c = i ? i(iU(e, a), o, a + "", e, t, s) : r;
                                        c === r && (c = o), rA(e, a, c)
                                    }
                                }, om)
                            }

                            function na(e, t) {
                                var n = e.length;
                                if (n) return iO(t += t < 0 ? n : 0, n) ? e[t] : r
                            }

                            function nc(e, t, r) {
                                t = t.length ? tp(t, function(e) {
                                    return s$(e) ? function(t) {
                                        return rX(t, 1 === e.length ? e[0] : e)
                                    } : e
                                }) : [oF];
                                var n = -1;
                                return t = tp(t, tx(iy())),
                                    function(e, t) {
                                        var r = e.length;
                                        for (e.sort(t); r--;) e[r] = e[r].value;
                                        return e
                                    }(nn(e, function(e, r, i) {
                                        return {
                                            criteria: tp(t, function(t) {
                                                return t(e)
                                            }),
                                            index: ++n,
                                            value: e
                                        }
                                    }), function(e, t) {
                                        return function(e, t, r) {
                                            for (var n = -1, i = e.criteria, s = t.criteria, o = i.length, a = r.length; ++n < o;) {
                                                var c = nH(i[n], s[n]);
                                                if (c) {
                                                    if (n >= a) return c;
                                                    return c * ("desc" == r[n] ? -1 : 1)
                                                }
                                            }
                                            return e.index - t.index
                                        }(e, t, r)
                                    })
                            }

                            function nu(e, t, r) {
                                for (var n = -1, i = t.length, s = {}; ++n < i;) {
                                    var o = t[n],
                                        a = rX(e, o);
                                    r(a, o) && nv(s, nL(o, e), a)
                                }
                                return s
                            }

                            function nl(e, t, r, n) {
                                var i = n ? tE : tw,
                                    s = -1,
                                    o = t.length,
                                    a = e;
                                for (e === t && (t = nB(t)), r && (a = tp(e, tx(r))); ++s < o;)
                                    for (var c = 0, u = t[s], l = r ? r(u) : u;
                                        (c = i(a, l, c, n)) > -1;) a !== e && e5.call(a, c, 1), e5.call(e, c, 1);
                                return e
                            }

                            function nh(e, t) {
                                for (var r = e ? t.length : 0, n = r - 1; r--;) {
                                    var i = t[r];
                                    if (r == n || i !== s) {
                                        var s = i;
                                        iO(i) ? e5.call(e, i, 1) : nC(e, i)
                                    }
                                }
                                return e
                            }

                            function nf(e, t) {
                                return e + tZ(t4() * (t - e + 1))
                            }

                            function np(e, t) {
                                var r = "";
                                if (!e || t < 1 || t > 9007199254740991) return r;
                                do t % 2 && (r += e), (t = tZ(t / 2)) && (e += e); while (t);
                                return r
                            }

                            function nd(e, t) {
                                return iM(iT(e, t, oF), e + "")
                            }

                            function ng(e) {
                                return rO(oO(e))
                            }

                            function ny(e, t) {
                                var r = oO(e);
                                return iq(r, rL(t, 0, r.length))
                            }

                            function nv(e, t, n, i) {
                                if (!sY(e)) return e;
                                t = nL(t, e);
                                for (var s = -1, o = t.length, a = o - 1, c = e; null != c && ++s < o;) {
                                    var u = iF(t[s]),
                                        l = n;
                                    if ("__proto__" === u || "constructor" === u || "prototype" === u) break;
                                    if (s != a) {
                                        var h = c[u];
                                        (l = i ? i(h, u, c) : r) === r && (l = sY(h) ? h : iO(t[s + 1]) ? [] : {})
                                    }
                                    rN(c, u, l), c = c[u]
                                }
                                return e
                            }
                            var nm = rs ? function(e, t) {
                                return rs.set(e, t), e
                            } : oF;

                            function n_(e) {
                                return iq(oO(e))
                            }

                            function nb(e, t, r) {
                                var n = -1,
                                    i = e.length;
                                t < 0 && (t = -t > i ? 0 : i + t), (r = r > i ? i : r) < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
                                for (var s = em(i); ++n < i;) s[n] = e[n + t];
                                return s
                            }

                            function nw(e, t) {
                                var r;
                                return rq(e, function(e, n, i) {
                                    return !(r = t(e, n, i))
                                }), !!r
                            }

                            function nE(e, t, r) {
                                var n = 0,
                                    i = null == e ? n : e.length;
                                if ("number" == typeof t && t == t && i <= 2147483647) {
                                    for (; n < i;) {
                                        var s = n + i >>> 1,
                                            o = e[s];
                                        null !== o && !s6(o) && (r ? o <= t : o < t) ? n = s + 1 : i = s
                                    }
                                    return i
                                }
                                return nD(e, t, oF, r)
                            }

                            function nD(e, t, n, i) {
                                var s = 0,
                                    o = null == e ? 0 : e.length;
                                if (0 === o) return 0;
                                t = n(t);
                                for (var a = t != t, c = null === t, u = s6(t), l = t === r; s < o;) {
                                    var h = tZ((s + o) / 2),
                                        f = n(e[h]),
                                        p = f !== r,
                                        d = null === f,
                                        g = f == f,
                                        y = s6(f);
                                    if (a) var v = i || g;
                                    else v = l ? g && (i || p) : c ? g && p && (i || !d) : u ? g && p && !d && (i || !y) : !d && !y && (i ? f <= t : f < t);
                                    v ? s = h + 1 : o = h
                                }
                                return t6(o, 4294967294)
                            }

                            function nS(e, t) {
                                for (var r = -1, n = e.length, i = 0, s = []; ++r < n;) {
                                    var o = e[r],
                                        a = t ? t(o) : o;
                                    if (!r || !sL(a, c)) {
                                        var c = a;
                                        s[i++] = 0 === o ? 0 : o
                                    }
                                }
                                return s
                            }

                            function nI(e) {
                                return "number" == typeof e ? e : s6(e) ? a : +e
                            }

                            function nO(e) {
                                if ("string" == typeof e) return e;
                                if (s$(e)) return tp(e, nO) + "";
                                if (s6(e)) return rd ? rd.call(e) : "";
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function nP(e, t, r) {
                                var n = -1,
                                    i = th,
                                    s = e.length,
                                    o = !0,
                                    a = [],
                                    c = a;
                                if (r) o = !1, i = tf;
                                else if (s >= 200) {
                                    var u = t ? null : it(e);
                                    if (u) return tF(u);
                                    o = !1, i = tT, c = new rD
                                } else c = t ? [] : a;
                                e: for (; ++n < s;) {
                                    var l = e[n],
                                        h = t ? t(l) : l;
                                    if (l = r || 0 !== l ? l : 0, o && h == h) {
                                        for (var f = c.length; f--;)
                                            if (c[f] === h) continue e;
                                        t && c.push(h), a.push(l)
                                    } else i(c, h, r) || (c !== a && c.push(h), a.push(l))
                                }
                                return a
                            }

                            function nC(e, t) {
                                return t = nL(t, e), null == (e = ij(e, t)) || delete e[iF(i5(t))]
                            }

                            function nA(e, t, r, n) {
                                return nv(e, t, r(rX(e, t)), n)
                            }

                            function nN(e, t, r, n) {
                                for (var i = e.length, s = n ? i : -1;
                                    (n ? s-- : ++s < i) && t(e[s], s, e););
                                return r ? nb(e, n ? 0 : s, n ? s + 1 : i) : nb(e, n ? s + 1 : 0, n ? i : s)
                            }

                            function nx(e, t) {
                                var r = e;
                                return r instanceof r_ && (r = r.value()), tg(t, function(e, t) {
                                    return t.func.apply(t.thisArg, td([e], t.args))
                                }, r)
                            }

                            function nR(e, t, r) {
                                var n = e.length;
                                if (n < 2) return n ? nP(e[0]) : [];
                                for (var i = -1, s = em(n); ++i < n;)
                                    for (var o = e[i], a = -1; ++a < n;) a != i && (s[i] = r$(s[i] || o, e[a], t, r));
                                return nP(rK(s, 1), t, r)
                            }

                            function nT(e, t, n) {
                                for (var i = -1, s = e.length, o = t.length, a = {}; ++i < s;) {
                                    var c = i < o ? t[i] : r;
                                    n(a, e[i], c)
                                }
                                return a
                            }

                            function nj(e) {
                                return sF(e) ? e : []
                            }

                            function nU(e) {
                                return "function" == typeof e ? e : oF
                            }

                            function nL(e, t) {
                                return s$(e) ? e : iC(e, t) ? [e] : iH(oi(e))
                            }

                            function nk(e, t, n) {
                                var i = e.length;
                                return n = n === r ? i : n, !t && n >= i ? e : nb(e, t, n)
                            }
                            var nM = tm || function(e) {
                                return e3.clearTimeout(e)
                            };

                            function nz(e, t) {
                                if (t) return e.slice();
                                var r = e.length,
                                    n = eV ? eV(r) : new e.constructor(r);
                                return e.copy(n), n
                            }

                            function n$(e) {
                                var t = new e.constructor(e.byteLength);
                                return new eq(t).set(new eq(e)), t
                            }

                            function nq(e, t) {
                                var r = t ? n$(e.buffer) : e.buffer;
                                return new e.constructor(r, e.byteOffset, e.length)
                            }

                            function nH(e, t) {
                                if (e !== t) {
                                    var n = e !== r,
                                        i = null === e,
                                        s = e == e,
                                        o = s6(e),
                                        a = t !== r,
                                        c = null === t,
                                        u = t == t,
                                        l = s6(t);
                                    if (!c && !l && !o && e > t || o && a && u && !c && !l || i && a && u || !n && u || !s) return 1;
                                    if (!i && !o && !l && e < t || l && n && s && !i && !o || c && n && s || !a && s || !u) return -1
                                }
                                return 0
                            }

                            function nF(e, t, r, n) {
                                for (var i = -1, s = e.length, o = r.length, a = -1, c = t.length, u = t3(s - o, 0), l = em(c + u), h = !n; ++a < c;) l[a] = t[a];
                                for (; ++i < o;)(h || i < s) && (l[r[i]] = e[i]);
                                for (; u--;) l[a++] = e[i++];
                                return l
                            }

                            function nV(e, t, r, n) {
                                for (var i = -1, s = e.length, o = -1, a = r.length, c = -1, u = t.length, l = t3(s - a, 0), h = em(l + u), f = !n; ++i < l;) h[i] = e[i];
                                for (var p = i; ++c < u;) h[p + c] = t[c];
                                for (; ++o < a;)(f || i < s) && (h[p + r[o]] = e[i++]);
                                return h
                            }

                            function nB(e, t) {
                                var r = -1,
                                    n = e.length;
                                for (t || (t = em(n)); ++r < n;) t[r] = e[r];
                                return t
                            }

                            function nK(e, t, n, i) {
                                var s = !n;
                                n || (n = {});
                                for (var o = -1, a = t.length; ++o < a;) {
                                    var c = t[o],
                                        u = i ? i(n[c], e[c], c, n, e) : r;
                                    u === r && (u = e[c]), s ? rj(n, c, u) : rN(n, c, u)
                                }
                                return n
                            }

                            function nW(e, t) {
                                return function(r, n) {
                                    var i = s$(r) ? to : rR,
                                        s = t ? t() : {};
                                    return i(r, e, iy(n, 2), s)
                                }
                            }

                            function nG(e) {
                                return nd(function(t, n) {
                                    var i = -1,
                                        s = n.length,
                                        o = s > 1 ? n[s - 1] : r,
                                        a = s > 2 ? n[2] : r;
                                    for (o = e.length > 3 && "function" == typeof o ? (s--, o) : r, a && iP(n[0], n[1], a) && (o = s < 3 ? r : o, s = 1), t = eD(t); ++i < s;) {
                                        var c = n[i];
                                        c && e(t, c, i, o)
                                    }
                                    return t
                                })
                            }

                            function nJ(e, t) {
                                return function(r, n) {
                                    if (null == r) return r;
                                    if (!sH(r)) return e(r, n);
                                    for (var i = r.length, s = t ? i : -1, o = eD(r);
                                        (t ? s-- : ++s < i) && !1 !== n(o[s], s, o););
                                    return r
                                }
                            }

                            function nY(e) {
                                return function(t, r, n) {
                                    for (var i = -1, s = eD(t), o = n(t), a = o.length; a--;) {
                                        var c = o[e ? a : ++i];
                                        if (!1 === r(s[c], c, s)) break
                                    }
                                    return t
                                }
                            }

                            function nZ(e) {
                                return function(t) {
                                    var n = tz(t = oi(t)) ? tB(t) : r,
                                        i = n ? n[0] : t.charAt(0),
                                        s = n ? nk(n, 1).join("") : t.slice(1);
                                    return i[e]() + s
                                }
                            }

                            function nX(e) {
                                return function(t) {
                                    return tg(ok(oA(t).replace(eH, "")), e, "")
                                }
                            }

                            function nQ(e) {
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t[0]);
                                        case 2:
                                            return new e(t[0], t[1]);
                                        case 3:
                                            return new e(t[0], t[1], t[2]);
                                        case 4:
                                            return new e(t[0], t[1], t[2], t[3]);
                                        case 5:
                                            return new e(t[0], t[1], t[2], t[3], t[4]);
                                        case 6:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 7:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                    }
                                    var r = ry(e.prototype),
                                        n = e.apply(r, t);
                                    return sY(n) ? n : r
                                }
                            }

                            function n0(e) {
                                return function(t, n, i) {
                                    var s = eD(t);
                                    if (!sH(t)) {
                                        var o = iy(n, 3);
                                        t = ov(t), n = function(e) {
                                            return o(s[e], e, s)
                                        }
                                    }
                                    var a = e(t, n, i);
                                    return a > -1 ? s[o ? t[a] : a] : r
                                }
                            }

                            function n1(e) {
                                return iu(function(t) {
                                    var i = t.length,
                                        s = i,
                                        o = rm.prototype.thru;
                                    for (e && t.reverse(); s--;) {
                                        var a = t[s];
                                        if ("function" != typeof a) throw new eO(n);
                                        if (o && !c && "wrapper" == id(a)) var c = new rm([], !0)
                                    }
                                    for (s = c ? s : i; ++s < i;) {
                                        var u = id(a = t[s]),
                                            l = "wrapper" == u ? ip(a) : r;
                                        c = l && iA(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? c[id(l[0])].apply(c, l[3]) : 1 == a.length && iA(a) ? c[u]() : c.thru(a)
                                    }
                                    return function() {
                                        var e = arguments,
                                            r = e[0];
                                        if (c && 1 == e.length && s$(r)) return c.plant(r).value();
                                        for (var n = 0, s = i ? t[n].apply(this, e) : r; ++n < i;) s = t[n].call(this, s);
                                        return s
                                    }
                                })
                            }

                            function n5(e, t, n, i, s, o, a, c, u, l) {
                                var h = 128 & t,
                                    f = 1 & t,
                                    p = 2 & t,
                                    d = 24 & t,
                                    g = 512 & t,
                                    y = p ? r : nQ(e);
                                return function v() {
                                    for (var m = arguments.length, _ = em(m), b = m; b--;) _[b] = arguments[b];
                                    if (d) var w = ig(v),
                                        E = function(e, t) {
                                            for (var r = e.length, n = 0; r--;) e[r] === t && ++n;
                                            return n
                                        }(_, w);
                                    if (i && (_ = nF(_, i, s, d)), o && (_ = nV(_, o, a, d)), m -= E, d && m < l) {
                                        var D = tH(_, w);
                                        return n7(e, t, n5, v.placeholder, n, _, D, c, u, l - m)
                                    }
                                    var S = f ? n : this,
                                        I = p ? S[e] : e;
                                    return m = _.length, c ? _ = function(e, t) {
                                        for (var n = e.length, i = t6(t.length, n), s = nB(e); i--;) {
                                            var o = t[i];
                                            e[i] = iO(o, n) ? s[o] : r
                                        }
                                        return e
                                    }(_, c) : g && m > 1 && _.reverse(), h && u < m && (_.length = u), this && this !== e3 && this instanceof v && (I = y || nQ(I)), I.apply(S, _)
                                }
                            }

                            function n3(e, t) {
                                return function(r, n) {
                                    var i, s;
                                    return i = t(n), s = {}, rJ(r, function(t, r, n) {
                                        e(s, i(t), r, n)
                                    }), s
                                }
                            }

                            function n6(e, t) {
                                return function(n, i) {
                                    var s;
                                    if (n === r && i === r) return t;
                                    if (n !== r && (s = n), i !== r) {
                                        if (s === r) return i;
                                        "string" == typeof n || "string" == typeof i ? (n = nO(n), i = nO(i)) : (n = nI(n), i = nI(i)), s = e(n, i)
                                    }
                                    return s
                                }
                            }

                            function n2(e) {
                                return iu(function(t) {
                                    return t = tp(t, tx(iy())), nd(function(r) {
                                        var n = this;
                                        return e(t, function(e) {
                                            return ts(e, n, r)
                                        })
                                    })
                                })
                            }

                            function n8(e, t) {
                                var n = (t = t === r ? " " : nO(t)).length;
                                if (n < 2) return n ? np(t, e) : t;
                                var i = np(t, tY(e / tV(t)));
                                return tz(t) ? nk(tB(i), 0, e).join("") : i.slice(0, e)
                            }

                            function n4(e) {
                                return function(t, n, i) {
                                    return i && "number" != typeof i && iP(t, n, i) && (n = i = r), t = s7(t), n === r ? (n = t, t = 0) : n = s7(n), i = i === r ? t < n ? 1 : -1 : s7(i),
                                        function(e, t, r, n) {
                                            for (var i = -1, s = t3(tY((t - e) / (r || 1)), 0), o = em(s); s--;) o[n ? s : ++i] = e, e += r;
                                            return o
                                        }(t, n, i, e)
                                }
                            }

                            function n9(e) {
                                return function(t, r) {
                                    return "string" == typeof t && "string" == typeof r || (t = or(t), r = or(r)), e(t, r)
                                }
                            }

                            function n7(e, t, n, i, s, o, a, c, u, l) {
                                var h = 8 & t;
                                t |= h ? 32 : 64, 4 & (t &= ~(h ? 64 : 32)) || (t &= -4);
                                var f = [e, t, s, h ? o : r, h ? a : r, h ? r : o, h ? r : a, c, u, l],
                                    p = n.apply(r, f);
                                return iA(e) && iL(p, f), p.placeholder = i, iz(p, e, t)
                            }

                            function ie(e) {
                                var t = eE[e];
                                return function(e, r) {
                                    if (e = or(e), (r = null == r ? 0 : t6(oe(r), 292)) && t0(e)) {
                                        var n = (oi(e) + "e").split("e");
                                        return +((n = (oi(t(n[0] + "e" + (+n[1] + r))) + "e").split("e"))[0] + "e" + (+n[1] - r))
                                    }
                                    return t(e)
                                }
                            }
                            var it = rr && 1 / tF(new rr([, -0]))[1] == o ? function(e) {
                                return new rr(e)
                            } : oG;

                            function ir(e) {
                                return function(t) {
                                    var r, n, i = iE(t);
                                    return i == y ? t$(t) : i == w ? (r = -1, n = Array(t.size), t.forEach(function(e) {
                                        n[++r] = [e, e]
                                    }), n) : tp(e(t), function(e) {
                                        return [e, t[e]]
                                    })
                                }
                            }

                            function ii(e, t, i, o, a, c, u, l) {
                                var h = 2 & t;
                                if (!h && "function" != typeof e) throw new eO(n);
                                var f = o ? o.length : 0;
                                if (f || (t &= -97, o = a = r), u = u === r ? u : t3(oe(u), 0), l = l === r ? l : oe(l), f -= a ? a.length : 0, 64 & t) {
                                    var p = o,
                                        d = a;
                                    o = a = r
                                }
                                var g = h ? r : ip(e),
                                    y = [e, t, i, o, a, p, d, c, u, l];
                                if (g && function(e, t) {
                                        var r = e[1],
                                            n = t[1],
                                            i = r | n,
                                            o = i < 131,
                                            a = 128 == n && 8 == r || 128 == n && 256 == r && e[7].length <= t[8] || 384 == n && t[7].length <= t[8] && 8 == r;
                                        if (o || a) {
                                            1 & n && (e[2] = t[2], i |= 1 & r ? 0 : 4);
                                            var c = t[3];
                                            if (c) {
                                                var u = e[3];
                                                e[3] = u ? nF(u, c, t[4]) : c, e[4] = u ? tH(e[3], s) : t[4]
                                            }(c = t[5]) && (u = e[5], e[5] = u ? nV(u, c, t[6]) : c, e[6] = u ? tH(e[5], s) : t[6]), (c = t[7]) && (e[7] = c), 128 & n && (e[8] = null == e[8] ? t[8] : t6(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = i
                                        }
                                    }(y, g), e = y[0], t = y[1], i = y[2], o = y[3], a = y[4], (l = y[9] = y[9] === r ? h ? 0 : e.length : t3(y[9] - f, 0)) || !(24 & t) || (t &= -25), t && 1 != t) 8 == t || 16 == t ? (v = e, m = t, _ = l, b = nQ(v), R = function e() {
                                    for (var t = arguments.length, n = em(t), i = t, s = ig(e); i--;) n[i] = arguments[i];
                                    var o = t < 3 && n[0] !== s && n[t - 1] !== s ? [] : tH(n, s);
                                    return (t -= o.length) < _ ? n7(v, m, n5, e.placeholder, r, n, o, r, r, _ - t) : ts(this && this !== e3 && this instanceof e ? b : v, this, n)
                                }) : 32 != t && 33 != t || a.length ? R = n5.apply(r, y) : (w = e, E = t, D = i, S = o, I = 1 & E, O = nQ(w), R = function e() {
                                    for (var t = -1, r = arguments.length, n = -1, i = S.length, s = em(i + r), o = this && this !== e3 && this instanceof e ? O : w; ++n < i;) s[n] = S[n];
                                    for (; r--;) s[n++] = arguments[++t];
                                    return ts(o, I ? D : this, s)
                                });
                                else var v, m, _, b, w, E, D, S, I, O, P, C, A, N, x, R = (P = e, C = t, A = i, N = 1 & C, x = nQ(P), function e() {
                                    return (this && this !== e3 && this instanceof e ? x : P).apply(N ? A : this, arguments)
                                });
                                return iz((g ? nm : iL)(R, y), e, t)
                            }

                            function is(e, t, n, i) {
                                return e === r || sL(e, eA[n]) && !eR.call(i, n) ? t : e
                            }

                            function io(e, t, n, i, s, o) {
                                return sY(e) && sY(t) && (o.set(t, e), no(e, t, r, io, o), o.delete(t)), e
                            }

                            function ia(e) {
                                return s0(e) ? r : e
                            }

                            function ic(e, t, n, i, s, o) {
                                var a = 1 & n,
                                    c = e.length,
                                    u = t.length;
                                if (c != u && !(a && u > c)) return !1;
                                var l = o.get(e),
                                    h = o.get(t);
                                if (l && h) return l == t && h == e;
                                var f = -1,
                                    p = !0,
                                    d = 2 & n ? new rD : r;
                                for (o.set(e, t), o.set(t, e); ++f < c;) {
                                    var g = e[f],
                                        y = t[f];
                                    if (i) var v = a ? i(y, g, f, t, e, o) : i(g, y, f, e, t, o);
                                    if (v !== r) {
                                        if (v) continue;
                                        p = !1;
                                        break
                                    }
                                    if (d) {
                                        if (!tv(t, function(e, t) {
                                                if (!tT(d, t) && (g === e || s(g, e, n, i, o))) return d.push(t)
                                            })) {
                                            p = !1;
                                            break
                                        }
                                    } else if (!(g === y || s(g, y, n, i, o))) {
                                        p = !1;
                                        break
                                    }
                                }
                                return o.delete(e), o.delete(t), p
                            }

                            function iu(e) {
                                return iM(iT(e, r, iZ), e + "")
                            }

                            function il(e) {
                                return rQ(e, ov, ib)
                            }

                            function ih(e) {
                                return rQ(e, om, iw)
                            }
                            var ip = rs ? function(e) {
                                return rs.get(e)
                            } : oG;

                            function id(e) {
                                for (var t = e.name + "", r = ro[t], n = eR.call(ro, t) ? r.length : 0; n--;) {
                                    var i = r[n],
                                        s = i.func;
                                    if (null == s || s == e) return i.name
                                }
                                return t
                            }

                            function ig(e) {
                                return (eR.call(rg, "placeholder") ? rg : e).placeholder
                            }

                            function iy() {
                                var e = rg.iteratee || oV;
                                return e = e === oV ? ne : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function iv(e, t) {
                                var r, n = e.__data__;
                                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                            }

                            function im(e) {
                                for (var t = ov(e), r = t.length; r--;) {
                                    var n = t[r],
                                        i = e[n];
                                    t[r] = [n, i, i == i && !sY(i)]
                                }
                                return t
                            }

                            function i_(e, t) {
                                var n = null == e ? r : e[t];
                                return r7(n) ? n : r
                            }
                            var ib = tX ? function(e) {
                                    return null == e ? [] : tl(tX(e = eD(e)), function(t) {
                                        return e1.call(e, t)
                                    })
                                } : o1,
                                iw = tX ? function(e) {
                                    for (var t = []; e;) td(t, ib(e)), e = eK(e);
                                    return t
                                } : o1,
                                iE = r0;

                            function iD(e, t, r) {
                                t = nL(t, e);
                                for (var n = -1, i = t.length, s = !1; ++n < i;) {
                                    var o = iF(t[n]);
                                    if (!(s = null != e && r(e, o))) break;
                                    e = e[o]
                                }
                                return s || ++n != i ? s : !!(i = null == e ? 0 : e.length) && sJ(i) && iO(o, i) && (s$(e) || sz(e))
                            }

                            function iS(e) {
                                return "function" != typeof e.constructor || ix(e) ? {} : ry(eK(e))
                            }

                            function iI(e) {
                                return s$(e) || sz(e) || !!(e6 && e && e[e6])
                            }

                            function iO(e, t) {
                                var r = typeof e;
                                return !!(t = t ? ? 9007199254740991) && ("number" == r || "symbol" != r && eh.test(e)) && e > -1 && e % 1 == 0 && e < t
                            }

                            function iP(e, t, r) {
                                if (!sY(r)) return !1;
                                var n = typeof t;
                                return ("number" == n ? !!(sH(r) && iO(t, r.length)) : "string" == n && t in r) && sL(r[t], e)
                            }

                            function iC(e, t) {
                                if (s$(e)) return !1;
                                var r = typeof e;
                                return !!("number" == r || "symbol" == r || "boolean" == r || null == e || s6(e)) || W.test(e) || !K.test(e) || null != t && e in eD(t)
                            }

                            function iA(e) {
                                var t = id(e),
                                    r = rg[t];
                                if ("function" != typeof r || !(t in r_.prototype)) return !1;
                                if (e === r) return !0;
                                var n = ip(r);
                                return !!n && e === n[0]
                            }(t7 && iE(new t7(new ArrayBuffer(1))) != O || re && iE(new re) != y || rt && iE(rt.resolve()) != _ || rr && iE(new rr) != w || rn && iE(new rn) != S) && (iE = function(e) {
                                var t = r0(e),
                                    n = t == m ? e.constructor : r,
                                    i = n ? iV(n) : "";
                                if (i) switch (i) {
                                    case ra:
                                        return O;
                                    case rc:
                                        return y;
                                    case ru:
                                        return _;
                                    case rl:
                                        return w;
                                    case rh:
                                        return S
                                }
                                return t
                            });
                            var iN = eN ? sW : o5;

                            function ix(e) {
                                var t = e && e.constructor,
                                    r = "function" == typeof t && t.prototype || eA;
                                return e === r
                            }

                            function iR(e, t) {
                                return function(n) {
                                    return null != n && n[e] === t && (t !== r || e in eD(n))
                                }
                            }

                            function iT(e, t, n) {
                                return t = t3(t === r ? e.length - 1 : t, 0),
                                    function() {
                                        for (var r = arguments, i = -1, s = t3(r.length - t, 0), o = em(s); ++i < s;) o[i] = r[t + i];
                                        i = -1;
                                        for (var a = em(t + 1); ++i < t;) a[i] = r[i];
                                        return a[t] = n(o), ts(e, this, a)
                                    }
                            }

                            function ij(e, t) {
                                return t.length < 2 ? e : rX(e, nb(t, 0, -1))
                            }

                            function iU(e, t) {
                                if (!("constructor" === t && "function" == typeof e[t]) && "__proto__" != t) return e[t]
                            }
                            var iL = i$(nm),
                                ik = tJ || function(e, t) {
                                    return e3.setTimeout(e, t)
                                },
                                iM = i$(e9 ? function(e, t) {
                                    return e9(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: o$(t),
                                        writable: !0
                                    })
                                } : oF);

                            function iz(e, t, r) {
                                var n, i, s = t + "";
                                return iM(e, function(e, t) {
                                    var r = t.length;
                                    if (!r) return e;
                                    var n = r - 1;
                                    return t[n] = (r > 1 ? "& " : "") + t[n], t = t.join(r > 2 ? ", " : " "), e.replace(Q, `{
/* [wrapped with ` + t + `] */
`)
                                }(s, (n = (i = s.match(ee)) ? i[1].split(et) : [], ta(c, function(e) {
                                    var t = "_." + e[0];
                                    r & e[1] && !th(n, t) && n.push(t)
                                }), n.sort())))
                            }

                            function i$(e) {
                                var t = 0,
                                    n = 0;
                                return function() {
                                    var i = t2(),
                                        s = 16 - (i - n);
                                    if (n = i, s > 0) {
                                        if (++t >= 800) return arguments[0]
                                    } else t = 0;
                                    return e.apply(r, arguments)
                                }
                            }

                            function iq(e, t) {
                                var n = -1,
                                    i = e.length,
                                    s = i - 1;
                                for (t = t === r ? i : t; ++n < t;) {
                                    var o = nf(n, s),
                                        a = e[o];
                                    e[o] = e[n], e[n] = a
                                }
                                return e.length = t, e
                            }
                            var iH = (ey = (eg = sN(function(e) {
                                var t = [];
                                return 46 === e.charCodeAt(0) && t.push(""), e.replace(G, function(e, r, n, i) {
                                    t.push(n ? i.replace(ei, "$1") : r || e)
                                }), t
                            }, function(e) {
                                return 500 === ey.size && ey.clear(), e
                            })).cache, eg);

                            function iF(e) {
                                if ("string" == typeof e || s6(e)) return e;
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function iV(e) {
                                if (null != e) {
                                    try {
                                        return ex.call(e)
                                    } catch {}
                                    try {
                                        return e + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function iB(e) {
                                if (e instanceof r_) return e.clone();
                                var t = new rm(e.__wrapped__, e.__chain__);
                                return t.__actions__ = nB(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                            }
                            var iK = nd(function(e, t) {
                                    return sF(e) ? r$(e, rK(t, 1, sF, !0)) : []
                                }),
                                iW = nd(function(e, t) {
                                    var n = i5(t);
                                    return sF(n) && (n = r), sF(e) ? r$(e, rK(t, 1, sF, !0), iy(n, 2)) : []
                                }),
                                iG = nd(function(e, t) {
                                    var n = i5(t);
                                    return sF(n) && (n = r), sF(e) ? r$(e, rK(t, 1, sF, !0), r, n) : []
                                });

                            function iJ(e, t, r) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var i = null == r ? 0 : oe(r);
                                return i < 0 && (i = t3(n + i, 0)), tb(e, iy(t, 3), i)
                            }

                            function iY(e, t, n) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var s = i - 1;
                                return n !== r && (s = oe(n), s = n < 0 ? t3(i + s, 0) : t6(s, i - 1)), tb(e, iy(t, 3), s, !0)
                            }

                            function iZ(e) {
                                return (null == e ? 0 : e.length) ? rK(e, 1) : []
                            }

                            function iX(e) {
                                return e && e.length ? e[0] : r
                            }
                            var iQ = nd(function(e) {
                                    var t = tp(e, nj);
                                    return t.length && t[0] === e[0] ? r6(t) : []
                                }),
                                i0 = nd(function(e) {
                                    var t = i5(e),
                                        n = tp(e, nj);
                                    return t === i5(n) ? t = r : n.pop(), n.length && n[0] === e[0] ? r6(n, iy(t, 2)) : []
                                }),
                                i1 = nd(function(e) {
                                    var t = i5(e),
                                        n = tp(e, nj);
                                    return (t = "function" == typeof t ? t : r) && n.pop(), n.length && n[0] === e[0] ? r6(n, r, t) : []
                                });

                            function i5(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? e[t - 1] : r
                            }
                            var i3 = nd(i6);

                            function i6(e, t) {
                                return e && e.length && t && t.length ? nl(e, t) : e
                            }
                            var i2 = iu(function(e, t) {
                                var r = null == e ? 0 : e.length,
                                    n = rU(e, t);
                                return nh(e, tp(t, function(e) {
                                    return iO(e, r) ? +e : e
                                }).sort(nH)), n
                            });

                            function i8(e) {
                                return null == e ? e : t9.call(e)
                            }
                            var i4 = nd(function(e) {
                                    return nP(rK(e, 1, sF, !0))
                                }),
                                i9 = nd(function(e) {
                                    var t = i5(e);
                                    return sF(t) && (t = r), nP(rK(e, 1, sF, !0), iy(t, 2))
                                }),
                                i7 = nd(function(e) {
                                    var t = i5(e);
                                    return t = "function" == typeof t ? t : r, nP(rK(e, 1, sF, !0), r, t)
                                });

                            function se(e) {
                                if (!(e && e.length)) return [];
                                var t = 0;
                                return e = tl(e, function(e) {
                                    if (sF(e)) return t = t3(e.length, t), !0
                                }), tA(t, function(t) {
                                    return tp(e, tI(t))
                                })
                            }

                            function st(e, t) {
                                if (!(e && e.length)) return [];
                                var n = se(e);
                                return null == t ? n : tp(n, function(e) {
                                    return ts(t, r, e)
                                })
                            }
                            var sr = nd(function(e, t) {
                                    return sF(e) ? r$(e, t) : []
                                }),
                                sn = nd(function(e) {
                                    return nR(tl(e, sF))
                                }),
                                si = nd(function(e) {
                                    var t = i5(e);
                                    return sF(t) && (t = r), nR(tl(e, sF), iy(t, 2))
                                }),
                                ss = nd(function(e) {
                                    var t = i5(e);
                                    return t = "function" == typeof t ? t : r, nR(tl(e, sF), r, t)
                                }),
                                so = nd(se),
                                sa = nd(function(e) {
                                    var t = e.length,
                                        n = t > 1 ? e[t - 1] : r;
                                    return n = "function" == typeof n ? (e.pop(), n) : r, st(e, n)
                                });

                            function sc(e) {
                                var t = rg(e);
                                return t.__chain__ = !0, t
                            }

                            function su(e, t) {
                                return t(e)
                            }
                            var sl = iu(function(e) {
                                    var t = e.length,
                                        n = t ? e[0] : 0,
                                        i = this.__wrapped__,
                                        s = function(t) {
                                            return rU(t, e)
                                        };
                                    return !(t > 1) && !this.__actions__.length && i instanceof r_ && iO(n) ? ((i = i.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                                        func: su,
                                        args: [s],
                                        thisArg: r
                                    }), new rm(i, this.__chain__).thru(function(e) {
                                        return t && !e.length && e.push(r), e
                                    })) : this.thru(s)
                                }),
                                sh = nW(function(e, t, r) {
                                    eR.call(e, r) ? ++e[r] : rj(e, r, 1)
                                }),
                                sf = n0(iJ),
                                sp = n0(iY);

                            function sd(e, t) {
                                return (s$(e) ? ta : rq)(e, iy(t, 3))
                            }

                            function sg(e, t) {
                                return (s$(e) ? tc : rH)(e, iy(t, 3))
                            }
                            var sy = nW(function(e, t, r) {
                                    eR.call(e, r) ? e[r].push(t) : rj(e, r, [t])
                                }),
                                sv = nd(function(e, t, r) {
                                    var n = -1,
                                        i = "function" == typeof t,
                                        s = sH(e) ? em(e.length) : [];
                                    return rq(e, function(e) {
                                        s[++n] = i ? ts(t, e, r) : r2(e, t, r)
                                    }), s
                                }),
                                sm = nW(function(e, t, r) {
                                    rj(e, r, t)
                                });

                            function s_(e, t) {
                                return (s$(e) ? tp : nn)(e, iy(t, 3))
                            }
                            var sb = nW(function(e, t, r) {
                                    e[r ? 0 : 1].push(t)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                sw = nd(function(e, t) {
                                    if (null == e) return [];
                                    var r = t.length;
                                    return r > 1 && iP(e, t[0], t[1]) ? t = [] : r > 2 && iP(t[0], t[1], t[2]) && (t = [t[0]]), nc(e, rK(t, 1), [])
                                }),
                                sE = tO || function() {
                                    return e3.Date.now()
                                };

                            function sD(e, t, n) {
                                return t = n ? r : t, t = e && null == t ? e.length : t, ii(e, 128, r, r, r, r, t)
                            }

                            function sS(e, t) {
                                var i;
                                if ("function" != typeof t) throw new eO(n);
                                return e = oe(e),
                                    function() {
                                        return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = r), i
                                    }
                            }
                            var sI = nd(function(e, t, r) {
                                    var n = 1;
                                    if (r.length) {
                                        var i = tH(r, ig(sI));
                                        n |= 32
                                    }
                                    return ii(e, n, t, r, i)
                                }),
                                sO = nd(function(e, t, r) {
                                    var n = 3;
                                    if (r.length) {
                                        var i = tH(r, ig(sO));
                                        n |= 32
                                    }
                                    return ii(t, n, e, r, i)
                                });

                            function sP(e, t, i) {
                                var s, o, a, c, u, l, h = 0,
                                    f = !1,
                                    p = !1,
                                    d = !0;
                                if ("function" != typeof e) throw new eO(n);

                                function g(t) {
                                    var n = s,
                                        i = o;
                                    return s = o = r, h = t, c = e.apply(i, n)
                                }

                                function y(e) {
                                    var n = e - l,
                                        i = e - h;
                                    return l === r || n >= t || n < 0 || p && i >= a
                                }

                                function v() {
                                    var e, r, n, i = sE();
                                    if (y(i)) return m(i);
                                    u = ik(v, (e = i - l, r = i - h, n = t - e, p ? t6(n, a - r) : n))
                                }

                                function m(e) {
                                    return u = r, d && s ? g(e) : (s = o = r, c)
                                }

                                function _() {
                                    var e, n = sE(),
                                        i = y(n);
                                    if (s = arguments, o = this, l = n, i) {
                                        if (u === r) return h = e = l, u = ik(v, t), f ? g(e) : c;
                                        if (p) return nM(u), u = ik(v, t), g(l)
                                    }
                                    return u === r && (u = ik(v, t)), c
                                }
                                return t = or(t) || 0, sY(i) && (f = !!i.leading, a = (p = "maxWait" in i) ? t3(or(i.maxWait) || 0, t) : a, d = "trailing" in i ? !!i.trailing : d), _.cancel = function() {
                                    u !== r && nM(u), h = 0, s = l = o = u = r
                                }, _.flush = function() {
                                    return u === r ? c : m(sE())
                                }, _
                            }
                            var sC = nd(function(e, t) {
                                    return rz(e, 1, t)
                                }),
                                sA = nd(function(e, t, r) {
                                    return rz(e, or(t) || 0, r)
                                });

                            function sN(e, t) {
                                if ("function" != typeof e || null != t && "function" != typeof t) throw new eO(n);
                                var r = function() {
                                    var n = arguments,
                                        i = t ? t.apply(this, n) : n[0],
                                        s = r.cache;
                                    if (s.has(i)) return s.get(i);
                                    var o = e.apply(this, n);
                                    return r.cache = s.set(i, o) || s, o
                                };
                                return r.cache = new(sN.Cache || rE), r
                            }

                            function sx(e) {
                                if ("function" != typeof e) throw new eO(n);
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, t[0]);
                                        case 2:
                                            return !e.call(this, t[0], t[1]);
                                        case 3:
                                            return !e.call(this, t[0], t[1], t[2])
                                    }
                                    return !e.apply(this, t)
                                }
                            }
                            sN.Cache = rE;
                            var sR = nd(function(e, t) {
                                    var r = (t = 1 == t.length && s$(t[0]) ? tp(t[0], tx(iy())) : tp(rK(t, 1), tx(iy()))).length;
                                    return nd(function(n) {
                                        for (var i = -1, s = t6(n.length, r); ++i < s;) n[i] = t[i].call(this, n[i]);
                                        return ts(e, this, n)
                                    })
                                }),
                                sT = nd(function(e, t) {
                                    var n = tH(t, ig(sT));
                                    return ii(e, 32, r, t, n)
                                }),
                                sj = nd(function(e, t) {
                                    var n = tH(t, ig(sj));
                                    return ii(e, 64, r, t, n)
                                }),
                                sU = iu(function(e, t) {
                                    return ii(e, 256, r, r, r, t)
                                });

                            function sL(e, t) {
                                return e === t || e != e && t != t
                            }
                            var sk = n9(r1),
                                sM = n9(function(e, t) {
                                    return e >= t
                                }),
                                sz = r8(function() {
                                    return arguments
                                }()) ? r8 : function(e) {
                                    return sZ(e) && eR.call(e, "callee") && !e1.call(e, "callee")
                                },
                                s$ = em.isArray,
                                sq = e7 ? tx(e7) : function(e) {
                                    return sZ(e) && r0(e) == I
                                };

                            function sH(e) {
                                return null != e && sJ(e.length) && !sW(e)
                            }

                            function sF(e) {
                                return sZ(e) && sH(e)
                            }
                            var sV = tQ || o5,
                                sB = te ? tx(te) : function(e) {
                                    return sZ(e) && r0(e) == f
                                };

                            function sK(e) {
                                if (!sZ(e)) return !1;
                                var t = r0(e);
                                return t == p || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !s0(e)
                            }

                            function sW(e) {
                                if (!sY(e)) return !1;
                                var t = r0(e);
                                return t == d || t == g || "[object AsyncFunction]" == t || "[object Proxy]" == t
                            }

                            function sG(e) {
                                return "number" == typeof e && e == oe(e)
                            }

                            function sJ(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                            }

                            function sY(e) {
                                var t = typeof e;
                                return null != e && ("object" == t || "function" == t)
                            }

                            function sZ(e) {
                                return null != e && "object" == typeof e
                            }
                            var sX = tt ? tx(tt) : function(e) {
                                return sZ(e) && iE(e) == y
                            };

                            function sQ(e) {
                                return "number" == typeof e || sZ(e) && r0(e) == v
                            }

                            function s0(e) {
                                if (!sZ(e) || r0(e) != m) return !1;
                                var t = eK(e);
                                if (null === t) return !0;
                                var r = eR.call(t, "constructor") && t.constructor;
                                return "function" == typeof r && r instanceof r && ex.call(r) == eL
                            }
                            var s1 = tr ? tx(tr) : function(e) {
                                    return sZ(e) && r0(e) == b
                                },
                                s5 = tn ? tx(tn) : function(e) {
                                    return sZ(e) && iE(e) == w
                                };

                            function s3(e) {
                                return "string" == typeof e || !s$(e) && sZ(e) && r0(e) == E
                            }

                            function s6(e) {
                                return "symbol" == typeof e || sZ(e) && r0(e) == D
                            }
                            var s2 = ti ? tx(ti) : function(e) {
                                    return sZ(e) && sJ(e.length) && !!eY[r0(e)]
                                },
                                s8 = n9(nr),
                                s4 = n9(function(e, t) {
                                    return e <= t
                                });

                            function s9(e) {
                                if (!e) return [];
                                if (sH(e)) return s3(e) ? tB(e) : nB(e);
                                if (e2 && e[e2]) return function(e) {
                                    for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                                    return r
                                }(e[e2]());
                                var t = iE(e);
                                return (t == y ? t$ : t == w ? tF : oO)(e)
                            }

                            function s7(e) {
                                return e ? (e = or(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function oe(e) {
                                var t = s7(e),
                                    r = t % 1;
                                return t == t ? r ? t - r : t : 0
                            }

                            function ot(e) {
                                return e ? rL(oe(e), 0, 4294967295) : 0
                            }

                            function or(e) {
                                if ("number" == typeof e) return e;
                                if (s6(e)) return a;
                                if (sY(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = sY(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = tN(e);
                                var r = ec.test(e);
                                return r || el.test(e) ? e0(e.slice(2), r ? 2 : 8) : ea.test(e) ? a : +e
                            }

                            function on(e) {
                                return nK(e, om(e))
                            }

                            function oi(e) {
                                return null == e ? "" : nO(e)
                            }
                            var os = nG(function(e, t) {
                                    if (ix(t) || sH(t)) {
                                        nK(t, ov(t), e);
                                        return
                                    }
                                    for (var r in t) eR.call(t, r) && rN(e, r, t[r])
                                }),
                                oo = nG(function(e, t) {
                                    nK(t, om(t), e)
                                }),
                                oa = nG(function(e, t, r, n) {
                                    nK(t, om(t), e, n)
                                }),
                                oc = nG(function(e, t, r, n) {
                                    nK(t, ov(t), e, n)
                                }),
                                ou = iu(rU),
                                ol = nd(function(e, t) {
                                    e = eD(e);
                                    var n = -1,
                                        i = t.length,
                                        s = i > 2 ? t[2] : r;
                                    for (s && iP(t[0], t[1], s) && (i = 1); ++n < i;)
                                        for (var o = t[n], a = om(o), c = -1, u = a.length; ++c < u;) {
                                            var l = a[c],
                                                h = e[l];
                                            (h === r || sL(h, eA[l]) && !eR.call(e, l)) && (e[l] = o[l])
                                        }
                                    return e
                                }),
                                oh = nd(function(e) {
                                    return e.push(r, io), ts(ob, r, e)
                                });

                            function of (e, t, n) {
                                var i = null == e ? r : rX(e, t);
                                return i === r ? n : i
                            }

                            function op(e, t) {
                                return null != e && iD(e, t, r3)
                            }
                            var od = n3(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = eU.call(t)), e[t] = r
                                }, o$(oF)),
                                og = n3(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = eU.call(t)), eR.call(e, t) ? e[t].push(r) : e[t] = [r]
                                }, iy),
                                oy = nd(r2);

                            function ov(e) {
                                return sH(e) ? rI(e) : nt(e)
                            }

                            function om(e) {
                                return sH(e) ? rI(e, !0) : function(e) {
                                    if (!sY(e)) return function(e) {
                                        var t = [];
                                        if (null != e)
                                            for (var r in eD(e)) t.push(r);
                                        return t
                                    }(e);
                                    var t = ix(e),
                                        r = [];
                                    for (var n in e) "constructor" == n && (t || !eR.call(e, n)) || r.push(n);
                                    return r
                                }(e)
                            }
                            var o_ = nG(function(e, t, r) {
                                    no(e, t, r)
                                }),
                                ob = nG(function(e, t, r, n) {
                                    no(e, t, r, n)
                                }),
                                ow = iu(function(e, t) {
                                    var r = {};
                                    if (null == e) return r;
                                    var n = !1;
                                    t = tp(t, function(t) {
                                        return t = nL(t, e), n || (n = t.length > 1), t
                                    }), nK(e, ih(e), r), n && (r = rk(r, 7, ia));
                                    for (var i = t.length; i--;) nC(r, t[i]);
                                    return r
                                }),
                                oE = iu(function(e, t) {
                                    return null == e ? {} : nu(e, t, function(t, r) {
                                        return op(e, r)
                                    })
                                });

                            function oD(e, t) {
                                if (null == e) return {};
                                var r = tp(ih(e), function(e) {
                                    return [e]
                                });
                                return t = iy(t), nu(e, r, function(e, r) {
                                    return t(e, r[0])
                                })
                            }
                            var oS = ir(ov),
                                oI = ir(om);

                            function oO(e) {
                                return null == e ? [] : tR(e, ov(e))
                            }
                            var oP = nX(function(e, t, r) {
                                return t = t.toLowerCase(), e + (r ? oC(t) : t)
                            });

                            function oC(e) {
                                return oL(oi(e).toLowerCase())
                            }

                            function oA(e) {
                                return (e = oi(e)) && e.replace(ef, tL).replace(eF, "")
                            }
                            var oN = nX(function(e, t, r) {
                                    return e + (r ? "-" : "") + t.toLowerCase()
                                }),
                                ox = nX(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toLowerCase()
                                }),
                                oR = nZ("toLowerCase"),
                                oT = nX(function(e, t, r) {
                                    return e + (r ? "_" : "") + t.toLowerCase()
                                }),
                                oj = nX(function(e, t, r) {
                                    return e + (r ? " " : "") + oL(t)
                                }),
                                oU = nX(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toUpperCase()
                                }),
                                oL = nZ("toUpperCase");

                            function ok(e, t, n) {
                                var i;
                                return e = oi(e), (t = n ? r : t) === r ? (i = e, eW.test(i)) ? e.match(eB) || [] : e.match(er) || [] : e.match(t) || []
                            }
                            var oM = nd(function(e, t) {
                                    try {
                                        return ts(e, r, t)
                                    } catch (e) {
                                        return sK(e) ? e : new eb(e)
                                    }
                                }),
                                oz = iu(function(e, t) {
                                    return ta(t, function(t) {
                                        rj(e, t = iF(t), sI(e[t], e))
                                    }), e
                                });

                            function o$(e) {
                                return function() {
                                    return e
                                }
                            }
                            var oq = n1(),
                                oH = n1(!0);

                            function oF(e) {
                                return e
                            }

                            function oV(e) {
                                return ne("function" == typeof e ? e : rk(e, 1))
                            }
                            var oB = nd(function(e, t) {
                                    return function(r) {
                                        return r2(r, e, t)
                                    }
                                }),
                                oK = nd(function(e, t) {
                                    return function(r) {
                                        return r2(e, r, t)
                                    }
                                });

                            function oW(e, t, r) {
                                var n = ov(t),
                                    i = rZ(t, n);
                                null != r || sY(t) && (i.length || !n.length) || (r = t, t = e, e = this, i = rZ(t, ov(t)));
                                var s = !(sY(r) && "chain" in r) || !!r.chain,
                                    o = sW(e);
                                return ta(i, function(r) {
                                    var n = t[r];
                                    e[r] = n, o && (e.prototype[r] = function() {
                                        var t = this.__chain__;
                                        if (s || t) {
                                            var r = e(this.__wrapped__);
                                            return (r.__actions__ = nB(this.__actions__)).push({
                                                func: n,
                                                args: arguments,
                                                thisArg: e
                                            }), r.__chain__ = t, r
                                        }
                                        return n.apply(e, td([this.value()], arguments))
                                    })
                                }), e
                            }

                            function oG() {}
                            var oJ = n2(tp),
                                oY = n2(tu),
                                oZ = n2(tv);

                            function oX(e) {
                                return iC(e) ? tI(iF(e)) : function(t) {
                                    return rX(t, e)
                                }
                            }
                            var oQ = n4(),
                                o0 = n4(!0);

                            function o1() {
                                return []
                            }

                            function o5() {
                                return !1
                            }
                            var o3 = n6(function(e, t) {
                                    return e + t
                                }, 0),
                                o6 = ie("ceil"),
                                o2 = n6(function(e, t) {
                                    return e / t
                                }, 1),
                                o8 = ie("floor"),
                                o4 = n6(function(e, t) {
                                    return e * t
                                }, 1),
                                o9 = ie("round"),
                                o7 = n6(function(e, t) {
                                    return e - t
                                }, 0);
                            return rg.after = function(e, t) {
                                if ("function" != typeof t) throw new eO(n);
                                return e = oe(e),
                                    function() {
                                        if (--e < 1) return t.apply(this, arguments)
                                    }
                            }, rg.ary = sD, rg.assign = os, rg.assignIn = oo, rg.assignInWith = oa, rg.assignWith = oc, rg.at = ou, rg.before = sS, rg.bind = sI, rg.bindAll = oz, rg.bindKey = sO, rg.castArray = function() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return s$(e) ? e : [e]
                            }, rg.chain = sc, rg.chunk = function(e, t, n) {
                                t = (n ? iP(e, t, n) : t === r) ? 1 : t3(oe(t), 0);
                                var i = null == e ? 0 : e.length;
                                if (!i || t < 1) return [];
                                for (var s = 0, o = 0, a = em(tY(i / t)); s < i;) a[o++] = nb(e, s, s += t);
                                return a
                            }, rg.compact = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, n = 0, i = []; ++t < r;) {
                                    var s = e[t];
                                    s && (i[n++] = s)
                                }
                                return i
                            }, rg.concat = function() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var t = em(e - 1), r = arguments[0], n = e; n--;) t[n - 1] = arguments[n];
                                return td(s$(r) ? nB(r) : [r], rK(t, 1))
                            }, rg.cond = function(e) {
                                var t = null == e ? 0 : e.length,
                                    r = iy();
                                return e = t ? tp(e, function(e) {
                                    if ("function" != typeof e[1]) throw new eO(n);
                                    return [r(e[0]), e[1]]
                                }) : [], nd(function(r) {
                                    for (var n = -1; ++n < t;) {
                                        var i = e[n];
                                        if (ts(i[0], this, r)) return ts(i[1], this, r)
                                    }
                                })
                            }, rg.conforms = function(e) {
                                var t, r;
                                return r = ov(t = rk(e, 1)),
                                    function(e) {
                                        return rM(e, t, r)
                                    }
                            }, rg.constant = o$, rg.countBy = sh, rg.create = function(e, t) {
                                var r = ry(e);
                                return null == t ? r : rT(r, t)
                            }, rg.curry = function e(t, n, i) {
                                n = i ? r : n;
                                var s = ii(t, 8, r, r, r, r, r, n);
                                return s.placeholder = e.placeholder, s
                            }, rg.curryRight = function e(t, n, i) {
                                n = i ? r : n;
                                var s = ii(t, 16, r, r, r, r, r, n);
                                return s.placeholder = e.placeholder, s
                            }, rg.debounce = sP, rg.defaults = ol, rg.defaultsDeep = oh, rg.defer = sC, rg.delay = sA, rg.difference = iK, rg.differenceBy = iW, rg.differenceWith = iG, rg.drop = function(e, t, n) {
                                var i = null == e ? 0 : e.length;
                                return i ? nb(e, (t = n || t === r ? 1 : oe(t)) < 0 ? 0 : t, i) : []
                            }, rg.dropRight = function(e, t, n) {
                                var i = null == e ? 0 : e.length;
                                return i ? nb(e, 0, (t = i - (t = n || t === r ? 1 : oe(t))) < 0 ? 0 : t) : []
                            }, rg.dropRightWhile = function(e, t) {
                                return e && e.length ? nN(e, iy(t, 3), !0, !0) : []
                            }, rg.dropWhile = function(e, t) {
                                return e && e.length ? nN(e, iy(t, 3), !0) : []
                            }, rg.fill = function(e, t, n, i) {
                                var s = null == e ? 0 : e.length;
                                return s ? (n && "number" != typeof n && iP(e, t, n) && (n = 0, i = s), function(e, t, n, i) {
                                    var s = e.length;
                                    for ((n = oe(n)) < 0 && (n = -n > s ? 0 : s + n), (i = i === r || i > s ? s : oe(i)) < 0 && (i += s), i = n > i ? 0 : ot(i); n < i;) e[n++] = t;
                                    return e
                                }(e, t, n, i)) : []
                            }, rg.filter = function(e, t) {
                                return (s$(e) ? tl : rB)(e, iy(t, 3))
                            }, rg.flatMap = function(e, t) {
                                return rK(s_(e, t), 1)
                            }, rg.flatMapDeep = function(e, t) {
                                return rK(s_(e, t), o)
                            }, rg.flatMapDepth = function(e, t, n) {
                                return n = n === r ? 1 : oe(n), rK(s_(e, t), n)
                            }, rg.flatten = iZ, rg.flattenDeep = function(e) {
                                return (null == e ? 0 : e.length) ? rK(e, o) : []
                            }, rg.flattenDepth = function(e, t) {
                                return (null == e ? 0 : e.length) ? rK(e, t = t === r ? 1 : oe(t)) : []
                            }, rg.flip = function(e) {
                                return ii(e, 512)
                            }, rg.flow = oq, rg.flowRight = oH, rg.fromPairs = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, n = {}; ++t < r;) {
                                    var i = e[t];
                                    n[i[0]] = i[1]
                                }
                                return n
                            }, rg.functions = function(e) {
                                return null == e ? [] : rZ(e, ov(e))
                            }, rg.functionsIn = function(e) {
                                return null == e ? [] : rZ(e, om(e))
                            }, rg.groupBy = sy, rg.initial = function(e) {
                                return (null == e ? 0 : e.length) ? nb(e, 0, -1) : []
                            }, rg.intersection = iQ, rg.intersectionBy = i0, rg.intersectionWith = i1, rg.invert = od, rg.invertBy = og, rg.invokeMap = sv, rg.iteratee = oV, rg.keyBy = sm, rg.keys = ov, rg.keysIn = om, rg.map = s_, rg.mapKeys = function(e, t) {
                                var r = {};
                                return t = iy(t, 3), rJ(e, function(e, n, i) {
                                    rj(r, t(e, n, i), e)
                                }), r
                            }, rg.mapValues = function(e, t) {
                                var r = {};
                                return t = iy(t, 3), rJ(e, function(e, n, i) {
                                    rj(r, n, t(e, n, i))
                                }), r
                            }, rg.matches = function(e) {
                                return ni(rk(e, 1))
                            }, rg.matchesProperty = function(e, t) {
                                return ns(e, rk(t, 1))
                            }, rg.memoize = sN, rg.merge = o_, rg.mergeWith = ob, rg.method = oB, rg.methodOf = oK, rg.mixin = oW, rg.negate = sx, rg.nthArg = function(e) {
                                return e = oe(e), nd(function(t) {
                                    return na(t, e)
                                })
                            }, rg.omit = ow, rg.omitBy = function(e, t) {
                                return oD(e, sx(iy(t)))
                            }, rg.once = function(e) {
                                return sS(2, e)
                            }, rg.orderBy = function(e, t, n, i) {
                                return null == e ? [] : (s$(t) || (t = null == t ? [] : [t]), s$(n = i ? r : n) || (n = null == n ? [] : [n]), nc(e, t, n))
                            }, rg.over = oJ, rg.overArgs = sR, rg.overEvery = oY, rg.overSome = oZ, rg.partial = sT, rg.partialRight = sj, rg.partition = sb, rg.pick = oE, rg.pickBy = oD, rg.property = oX, rg.propertyOf = function(e) {
                                return function(t) {
                                    return null == e ? r : rX(e, t)
                                }
                            }, rg.pull = i3, rg.pullAll = i6, rg.pullAllBy = function(e, t, r) {
                                return e && e.length && t && t.length ? nl(e, t, iy(r, 2)) : e
                            }, rg.pullAllWith = function(e, t, n) {
                                return e && e.length && t && t.length ? nl(e, t, r, n) : e
                            }, rg.pullAt = i2, rg.range = oQ, rg.rangeRight = o0, rg.rearg = sU, rg.reject = function(e, t) {
                                return (s$(e) ? tl : rB)(e, sx(iy(t, 3)))
                            }, rg.remove = function(e, t) {
                                var r = [];
                                if (!(e && e.length)) return r;
                                var n = -1,
                                    i = [],
                                    s = e.length;
                                for (t = iy(t, 3); ++n < s;) {
                                    var o = e[n];
                                    t(o, n, e) && (r.push(o), i.push(n))
                                }
                                return nh(e, i), r
                            }, rg.rest = function(e, t) {
                                if ("function" != typeof e) throw new eO(n);
                                return nd(e, t = t === r ? t : oe(t))
                            }, rg.reverse = i8, rg.sampleSize = function(e, t, n) {
                                return t = (n ? iP(e, t, n) : t === r) ? 1 : oe(t), (s$(e) ? rP : ny)(e, t)
                            }, rg.set = function(e, t, r) {
                                return null == e ? e : nv(e, t, r)
                            }, rg.setWith = function(e, t, n, i) {
                                return i = "function" == typeof i ? i : r, null == e ? e : nv(e, t, n, i)
                            }, rg.shuffle = function(e) {
                                return (s$(e) ? rC : n_)(e)
                            }, rg.slice = function(e, t, n) {
                                var i = null == e ? 0 : e.length;
                                return i ? (n && "number" != typeof n && iP(e, t, n) ? (t = 0, n = i) : (t = null == t ? 0 : oe(t), n = n === r ? i : oe(n)), nb(e, t, n)) : []
                            }, rg.sortBy = sw, rg.sortedUniq = function(e) {
                                return e && e.length ? nS(e) : []
                            }, rg.sortedUniqBy = function(e, t) {
                                return e && e.length ? nS(e, iy(t, 2)) : []
                            }, rg.split = function(e, t, n) {
                                return n && "number" != typeof n && iP(e, t, n) && (t = n = r), (n = n === r ? 4294967295 : n >>> 0) ? (e = oi(e)) && ("string" == typeof t || null != t && !s1(t)) && !(t = nO(t)) && tz(e) ? nk(tB(e), 0, n) : e.split(t, n) : []
                            }, rg.spread = function(e, t) {
                                if ("function" != typeof e) throw new eO(n);
                                return t = null == t ? 0 : t3(oe(t), 0), nd(function(r) {
                                    var n = r[t],
                                        i = nk(r, 0, t);
                                    return n && td(i, n), ts(e, this, i)
                                })
                            }, rg.tail = function(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? nb(e, 1, t) : []
                            }, rg.take = function(e, t, n) {
                                return e && e.length ? nb(e, 0, (t = n || t === r ? 1 : oe(t)) < 0 ? 0 : t) : []
                            }, rg.takeRight = function(e, t, n) {
                                var i = null == e ? 0 : e.length;
                                return i ? nb(e, (t = i - (t = n || t === r ? 1 : oe(t))) < 0 ? 0 : t, i) : []
                            }, rg.takeRightWhile = function(e, t) {
                                return e && e.length ? nN(e, iy(t, 3), !1, !0) : []
                            }, rg.takeWhile = function(e, t) {
                                return e && e.length ? nN(e, iy(t, 3)) : []
                            }, rg.tap = function(e, t) {
                                return t(e), e
                            }, rg.throttle = function(e, t, r) {
                                var i = !0,
                                    s = !0;
                                if ("function" != typeof e) throw new eO(n);
                                return sY(r) && (i = "leading" in r ? !!r.leading : i, s = "trailing" in r ? !!r.trailing : s), sP(e, t, {
                                    leading: i,
                                    maxWait: t,
                                    trailing: s
                                })
                            }, rg.thru = su, rg.toArray = s9, rg.toPairs = oS, rg.toPairsIn = oI, rg.toPath = function(e) {
                                return s$(e) ? tp(e, iF) : s6(e) ? [e] : nB(iH(oi(e)))
                            }, rg.toPlainObject = on, rg.transform = function(e, t, r) {
                                var n = s$(e),
                                    i = n || sV(e) || s2(e);
                                if (t = iy(t, 4), null == r) {
                                    var s = e && e.constructor;
                                    r = i ? n ? new s : [] : sY(e) && sW(s) ? ry(eK(e)) : {}
                                }
                                return (i ? ta : rJ)(e, function(e, n, i) {
                                    return t(r, e, n, i)
                                }), r
                            }, rg.unary = function(e) {
                                return sD(e, 1)
                            }, rg.union = i4, rg.unionBy = i9, rg.unionWith = i7, rg.uniq = function(e) {
                                return e && e.length ? nP(e) : []
                            }, rg.uniqBy = function(e, t) {
                                return e && e.length ? nP(e, iy(t, 2)) : []
                            }, rg.uniqWith = function(e, t) {
                                return t = "function" == typeof t ? t : r, e && e.length ? nP(e, r, t) : []
                            }, rg.unset = function(e, t) {
                                return null == e || nC(e, t)
                            }, rg.unzip = se, rg.unzipWith = st, rg.update = function(e, t, r) {
                                return null == e ? e : nA(e, t, nU(r))
                            }, rg.updateWith = function(e, t, n, i) {
                                return i = "function" == typeof i ? i : r, null == e ? e : nA(e, t, nU(n), i)
                            }, rg.values = oO, rg.valuesIn = function(e) {
                                return null == e ? [] : tR(e, om(e))
                            }, rg.without = sr, rg.words = ok, rg.wrap = function(e, t) {
                                return sT(nU(t), e)
                            }, rg.xor = sn, rg.xorBy = si, rg.xorWith = ss, rg.zip = so, rg.zipObject = function(e, t) {
                                return nT(e || [], t || [], rN)
                            }, rg.zipObjectDeep = function(e, t) {
                                return nT(e || [], t || [], nv)
                            }, rg.zipWith = sa, rg.entries = oS, rg.entriesIn = oI, rg.extend = oo, rg.extendWith = oa, oW(rg, rg), rg.add = o3, rg.attempt = oM, rg.camelCase = oP, rg.capitalize = oC, rg.ceil = o6, rg.clamp = function(e, t, n) {
                                return n === r && (n = t, t = r), n !== r && (n = (n = or(n)) == n ? n : 0), t !== r && (t = (t = or(t)) == t ? t : 0), rL(or(e), t, n)
                            }, rg.clone = function(e) {
                                return rk(e, 4)
                            }, rg.cloneDeep = function(e) {
                                return rk(e, 5)
                            }, rg.cloneDeepWith = function(e, t) {
                                return rk(e, 5, t = "function" == typeof t ? t : r)
                            }, rg.cloneWith = function(e, t) {
                                return rk(e, 4, t = "function" == typeof t ? t : r)
                            }, rg.conformsTo = function(e, t) {
                                return null == t || rM(e, t, ov(t))
                            }, rg.deburr = oA, rg.defaultTo = function(e, t) {
                                return null == e || e != e ? t : e
                            }, rg.divide = o2, rg.endsWith = function(e, t, n) {
                                e = oi(e), t = nO(t);
                                var i = e.length,
                                    s = n = n === r ? i : rL(oe(n), 0, i);
                                return (n -= t.length) >= 0 && e.slice(n, s) == t
                            }, rg.eq = sL, rg.escape = function(e) {
                                return (e = oi(e)) && H.test(e) ? e.replace($, tk) : e
                            }, rg.escapeRegExp = function(e) {
                                return (e = oi(e)) && Y.test(e) ? e.replace(J, "\\$&") : e
                            }, rg.every = function(e, t, n) {
                                var i = s$(e) ? tu : rF;
                                return n && iP(e, t, n) && (t = r), i(e, iy(t, 3))
                            }, rg.find = sf, rg.findIndex = iJ, rg.findKey = function(e, t) {
                                return t_(e, iy(t, 3), rJ)
                            }, rg.findLast = sp, rg.findLastIndex = iY, rg.findLastKey = function(e, t) {
                                return t_(e, iy(t, 3), rY)
                            }, rg.floor = o8, rg.forEach = sd, rg.forEachRight = sg, rg.forIn = function(e, t) {
                                return null == e ? e : rW(e, iy(t, 3), om)
                            }, rg.forInRight = function(e, t) {
                                return null == e ? e : rG(e, iy(t, 3), om)
                            }, rg.forOwn = function(e, t) {
                                return e && rJ(e, iy(t, 3))
                            }, rg.forOwnRight = function(e, t) {
                                return e && rY(e, iy(t, 3))
                            }, rg.get = of , rg.gt = sk, rg.gte = sM, rg.has = function(e, t) {
                                return null != e && iD(e, t, r5)
                            }, rg.hasIn = op, rg.head = iX, rg.identity = oF, rg.includes = function(e, t, r, n) {
                                e = sH(e) ? e : oO(e), r = r && !n ? oe(r) : 0;
                                var i = e.length;
                                return r < 0 && (r = t3(i + r, 0)), s3(e) ? r <= i && e.indexOf(t, r) > -1 : !!i && tw(e, t, r) > -1
                            }, rg.indexOf = function(e, t, r) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var i = null == r ? 0 : oe(r);
                                return i < 0 && (i = t3(n + i, 0)), tw(e, t, i)
                            }, rg.inRange = function(e, t, n) {
                                var i, s, o;
                                return t = s7(t), n === r ? (n = t, t = 0) : n = s7(n), (i = e = or(e)) >= t6(s = t, o = n) && i < t3(s, o)
                            }, rg.invoke = oy, rg.isArguments = sz, rg.isArray = s$, rg.isArrayBuffer = sq, rg.isArrayLike = sH, rg.isArrayLikeObject = sF, rg.isBoolean = function(e) {
                                return !0 === e || !1 === e || sZ(e) && r0(e) == h
                            }, rg.isBuffer = sV, rg.isDate = sB, rg.isElement = function(e) {
                                return sZ(e) && 1 === e.nodeType && !s0(e)
                            }, rg.isEmpty = function(e) {
                                if (null == e) return !0;
                                if (sH(e) && (s$(e) || "string" == typeof e || "function" == typeof e.splice || sV(e) || s2(e) || sz(e))) return !e.length;
                                var t = iE(e);
                                if (t == y || t == w) return !e.size;
                                if (ix(e)) return !nt(e).length;
                                for (var r in e)
                                    if (eR.call(e, r)) return !1;
                                return !0
                            }, rg.isEqual = function(e, t) {
                                return r4(e, t)
                            }, rg.isEqualWith = function(e, t, n) {
                                var i = (n = "function" == typeof n ? n : r) ? n(e, t) : r;
                                return i === r ? r4(e, t, r, n) : !!i
                            }, rg.isError = sK, rg.isFinite = function(e) {
                                return "number" == typeof e && t0(e)
                            }, rg.isFunction = sW, rg.isInteger = sG, rg.isLength = sJ, rg.isMap = sX, rg.isMatch = function(e, t) {
                                return e === t || r9(e, t, im(t))
                            }, rg.isMatchWith = function(e, t, n) {
                                return n = "function" == typeof n ? n : r, r9(e, t, im(t), n)
                            }, rg.isNaN = function(e) {
                                return sQ(e) && e != +e
                            }, rg.isNative = function(e) {
                                if (iN(e)) throw new eb("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return r7(e)
                            }, rg.isNil = function(e) {
                                return null == e
                            }, rg.isNull = function(e) {
                                return null === e
                            }, rg.isNumber = sQ, rg.isObject = sY, rg.isObjectLike = sZ, rg.isPlainObject = s0, rg.isRegExp = s1, rg.isSafeInteger = function(e) {
                                return sG(e) && e >= -9007199254740991 && e <= 9007199254740991
                            }, rg.isSet = s5, rg.isString = s3, rg.isSymbol = s6, rg.isTypedArray = s2, rg.isUndefined = function(e) {
                                return e === r
                            }, rg.isWeakMap = function(e) {
                                return sZ(e) && iE(e) == S
                            }, rg.isWeakSet = function(e) {
                                return sZ(e) && "[object WeakSet]" == r0(e)
                            }, rg.join = function(e, t) {
                                return null == e ? "" : t1.call(e, t)
                            }, rg.kebabCase = oN, rg.last = i5, rg.lastIndexOf = function(e, t, n) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var s = i;
                                return n !== r && (s = (s = oe(n)) < 0 ? t3(i + s, 0) : t6(s, i - 1)), t == t ? function(e, t, r) {
                                    for (var n = r + 1; n-- && e[n] !== t;);
                                    return n
                                }(e, t, s) : tb(e, tD, s, !0)
                            }, rg.lowerCase = ox, rg.lowerFirst = oR, rg.lt = s8, rg.lte = s4, rg.max = function(e) {
                                return e && e.length ? rV(e, oF, r1) : r
                            }, rg.maxBy = function(e, t) {
                                return e && e.length ? rV(e, iy(t, 2), r1) : r
                            }, rg.mean = function(e) {
                                return tS(e, oF)
                            }, rg.meanBy = function(e, t) {
                                return tS(e, iy(t, 2))
                            }, rg.min = function(e) {
                                return e && e.length ? rV(e, oF, nr) : r
                            }, rg.minBy = function(e, t) {
                                return e && e.length ? rV(e, iy(t, 2), nr) : r
                            }, rg.stubArray = o1, rg.stubFalse = o5, rg.stubObject = function() {
                                return {}
                            }, rg.stubString = function() {
                                return ""
                            }, rg.stubTrue = function() {
                                return !0
                            }, rg.multiply = o4, rg.nth = function(e, t) {
                                return e && e.length ? na(e, oe(t)) : r
                            }, rg.noConflict = function() {
                                return e3._ === this && (e3._ = ek), this
                            }, rg.noop = oG, rg.now = sE, rg.pad = function(e, t, r) {
                                e = oi(e);
                                var n = (t = oe(t)) ? tV(e) : 0;
                                if (!t || n >= t) return e;
                                var i = (t - n) / 2;
                                return n8(tZ(i), r) + e + n8(tY(i), r)
                            }, rg.padEnd = function(e, t, r) {
                                e = oi(e);
                                var n = (t = oe(t)) ? tV(e) : 0;
                                return t && n < t ? e + n8(t - n, r) : e
                            }, rg.padStart = function(e, t, r) {
                                e = oi(e);
                                var n = (t = oe(t)) ? tV(e) : 0;
                                return t && n < t ? n8(t - n, r) + e : e
                            }, rg.parseInt = function(e, t, r) {
                                return r || null == t ? t = 0 : t && (t = +t), t8(oi(e).replace(Z, ""), t || 0)
                            }, rg.random = function(e, t, n) {
                                if (n && "boolean" != typeof n && iP(e, t, n) && (t = n = r), n === r && ("boolean" == typeof t ? (n = t, t = r) : "boolean" == typeof e && (n = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = s7(e), t === r ? (t = e, e = 0) : t = s7(t)), e > t) {
                                    var i = e;
                                    e = t, t = i
                                }
                                if (n || e % 1 || t % 1) {
                                    var s = t4();
                                    return t6(e + s * (t - e + eQ("1e-" + ((s + "").length - 1))), t)
                                }
                                return nf(e, t)
                            }, rg.reduce = function(e, t, r) {
                                var n = s$(e) ? tg : tP,
                                    i = arguments.length < 3;
                                return n(e, iy(t, 4), r, i, rq)
                            }, rg.reduceRight = function(e, t, r) {
                                var n = s$(e) ? ty : tP,
                                    i = arguments.length < 3;
                                return n(e, iy(t, 4), r, i, rH)
                            }, rg.repeat = function(e, t, n) {
                                return t = (n ? iP(e, t, n) : t === r) ? 1 : oe(t), np(oi(e), t)
                            }, rg.replace = function() {
                                var e = arguments,
                                    t = oi(e[0]);
                                return e.length < 3 ? t : t.replace(e[1], e[2])
                            }, rg.result = function(e, t, n) {
                                t = nL(t, e);
                                var i = -1,
                                    s = t.length;
                                for (s || (s = 1, e = r); ++i < s;) {
                                    var o = null == e ? r : e[iF(t[i])];
                                    o === r && (i = s, o = n), e = sW(o) ? o.call(e) : o
                                }
                                return e
                            }, rg.round = o9, rg.runInContext = e, rg.sample = function(e) {
                                return (s$(e) ? rO : ng)(e)
                            }, rg.size = function(e) {
                                if (null == e) return 0;
                                if (sH(e)) return s3(e) ? tV(e) : e.length;
                                var t = iE(e);
                                return t == y || t == w ? e.size : nt(e).length
                            }, rg.snakeCase = oT, rg.some = function(e, t, n) {
                                var i = s$(e) ? tv : nw;
                                return n && iP(e, t, n) && (t = r), i(e, iy(t, 3))
                            }, rg.sortedIndex = function(e, t) {
                                return nE(e, t)
                            }, rg.sortedIndexBy = function(e, t, r) {
                                return nD(e, t, iy(r, 2))
                            }, rg.sortedIndexOf = function(e, t) {
                                var r = null == e ? 0 : e.length;
                                if (r) {
                                    var n = nE(e, t);
                                    if (n < r && sL(e[n], t)) return n
                                }
                                return -1
                            }, rg.sortedLastIndex = function(e, t) {
                                return nE(e, t, !0)
                            }, rg.sortedLastIndexBy = function(e, t, r) {
                                return nD(e, t, iy(r, 2), !0)
                            }, rg.sortedLastIndexOf = function(e, t) {
                                if (null == e ? 0 : e.length) {
                                    var r = nE(e, t, !0) - 1;
                                    if (sL(e[r], t)) return r
                                }
                                return -1
                            }, rg.startCase = oj, rg.startsWith = function(e, t, r) {
                                return e = oi(e), r = null == r ? 0 : rL(oe(r), 0, e.length), t = nO(t), e.slice(r, r + t.length) == t
                            }, rg.subtract = o7, rg.sum = function(e) {
                                return e && e.length ? tC(e, oF) : 0
                            }, rg.sumBy = function(e, t) {
                                return e && e.length ? tC(e, iy(t, 2)) : 0
                            }, rg.template = function(e, t, n) {
                                var i = rg.templateSettings;
                                n && iP(e, t, n) && (t = r), e = oi(e), t = oa({}, t, i, is);
                                var s, o, a = oa({}, t.imports, i.imports, is),
                                    c = ov(a),
                                    u = tR(a, c),
                                    l = 0,
                                    h = t.interpolate || ep,
                                    f = "__p += '",
                                    p = eS((t.escape || ep).source + "|" + h.source + "|" + (h === B ? es : ep).source + "|" + (t.evaluate || ep).source + "|$", "g"),
                                    d = "//# sourceURL=" + (eR.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++eJ + "]") + `
`;
                                e.replace(p, function(t, r, n, i, a, c) {
                                    return n || (n = i), f += e.slice(l, c).replace(ed, tM), r && (s = !0, f += `' +
__e(` + r + `) +
'`), a && (o = !0, f += `';
` + a + `;
__p += '`), n && (f += `' +
((__t = (` + n + `)) == null ? '' : __t) +
'`), l = c + t.length, t
                                }), f += `';
`;
                                var g = eR.call(t, "variable") && t.variable;
                                if (g) {
                                    if (en.test(g)) throw new eb("Invalid `variable` option passed into `_.template`")
                                } else f = `with (obj) {
` + f + `
}
`;
                                f = (o ? f.replace(L, "") : f).replace(k, "$1").replace(M, "$1;"), f = "function(" + (g || "obj") + `) {
` + (g ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + f + `return __p
}`;
                                var y = oM(function() {
                                    return ew(c, d + "return " + f).apply(r, u)
                                });
                                if (y.source = f, sK(y)) throw y;
                                return y
                            }, rg.times = function(e, t) {
                                if ((e = oe(e)) < 1 || e > 9007199254740991) return [];
                                var r = 4294967295,
                                    n = t6(e, 4294967295);
                                t = iy(t), e -= 4294967295;
                                for (var i = tA(n, t); ++r < e;) t(r);
                                return i
                            }, rg.toFinite = s7, rg.toInteger = oe, rg.toLength = ot, rg.toLower = function(e) {
                                return oi(e).toLowerCase()
                            }, rg.toNumber = or, rg.toSafeInteger = function(e) {
                                return e ? rL(oe(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
                            }, rg.toString = oi, rg.toUpper = function(e) {
                                return oi(e).toUpperCase()
                            }, rg.trim = function(e, t, n) {
                                if ((e = oi(e)) && (n || t === r)) return tN(e);
                                if (!e || !(t = nO(t))) return e;
                                var i = tB(e),
                                    s = tB(t),
                                    o = tj(i, s),
                                    a = tU(i, s) + 1;
                                return nk(i, o, a).join("")
                            }, rg.trimEnd = function(e, t, n) {
                                if ((e = oi(e)) && (n || t === r)) return e.slice(0, tK(e) + 1);
                                if (!e || !(t = nO(t))) return e;
                                var i = tB(e),
                                    s = tU(i, tB(t)) + 1;
                                return nk(i, 0, s).join("")
                            }, rg.trimStart = function(e, t, n) {
                                if ((e = oi(e)) && (n || t === r)) return e.replace(Z, "");
                                if (!e || !(t = nO(t))) return e;
                                var i = tB(e),
                                    s = tj(i, tB(t));
                                return nk(i, s).join("")
                            }, rg.truncate = function(e, t) {
                                var n = 30,
                                    i = "...";
                                if (sY(t)) {
                                    var s = "separator" in t ? t.separator : s;
                                    n = "length" in t ? oe(t.length) : n, i = "omission" in t ? nO(t.omission) : i
                                }
                                var o = (e = oi(e)).length;
                                if (tz(e)) {
                                    var a = tB(e);
                                    o = a.length
                                }
                                if (n >= o) return e;
                                var c = n - tV(i);
                                if (c < 1) return i;
                                var u = a ? nk(a, 0, c).join("") : e.slice(0, c);
                                if (s === r) return u + i;
                                if (a && (c += u.length - c), s1(s)) {
                                    if (e.slice(c).search(s)) {
                                        var l, h = u;
                                        for (s.global || (s = eS(s.source, oi(eo.exec(s)) + "g")), s.lastIndex = 0; l = s.exec(h);) var f = l.index;
                                        u = u.slice(0, f === r ? c : f)
                                    }
                                } else if (e.indexOf(nO(s), c) != c) {
                                    var p = u.lastIndexOf(s);
                                    p > -1 && (u = u.slice(0, p))
                                }
                                return u + i
                            }, rg.unescape = function(e) {
                                return (e = oi(e)) && q.test(e) ? e.replace(z, tW) : e
                            }, rg.uniqueId = function(e) {
                                var t = ++eT;
                                return oi(e) + t
                            }, rg.upperCase = oU, rg.upperFirst = oL, rg.each = sd, rg.eachRight = sg, rg.first = iX, oW(rg, (ev = {}, rJ(rg, function(e, t) {
                                eR.call(rg.prototype, t) || (ev[t] = e)
                            }), ev), {
                                chain: !1
                            }), rg.VERSION = "4.17.21", ta(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                rg[e].placeholder = rg
                            }), ta(["drop", "take"], function(e, t) {
                                r_.prototype[e] = function(n) {
                                    n = n === r ? 1 : t3(oe(n), 0);
                                    var i = this.__filtered__ && !t ? new r_(this) : this.clone();
                                    return i.__filtered__ ? i.__takeCount__ = t6(n, i.__takeCount__) : i.__views__.push({
                                        size: t6(n, 4294967295),
                                        type: e + (i.__dir__ < 0 ? "Right" : "")
                                    }), i
                                }, r_.prototype[e + "Right"] = function(t) {
                                    return this.reverse()[e](t).reverse()
                                }
                            }), ta(["filter", "map", "takeWhile"], function(e, t) {
                                var r = t + 1,
                                    n = 1 == r || 3 == r;
                                r_.prototype[e] = function(e) {
                                    var t = this.clone();
                                    return t.__iteratees__.push({
                                        iteratee: iy(e, 3),
                                        type: r
                                    }), t.__filtered__ = t.__filtered__ || n, t
                                }
                            }), ta(["head", "last"], function(e, t) {
                                var r = "take" + (t ? "Right" : "");
                                r_.prototype[e] = function() {
                                    return this[r](1).value()[0]
                                }
                            }), ta(["initial", "tail"], function(e, t) {
                                var r = "drop" + (t ? "" : "Right");
                                r_.prototype[e] = function() {
                                    return this.__filtered__ ? new r_(this) : this[r](1)
                                }
                            }), r_.prototype.compact = function() {
                                return this.filter(oF)
                            }, r_.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, r_.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, r_.prototype.invokeMap = nd(function(e, t) {
                                return "function" == typeof e ? new r_(this) : this.map(function(r) {
                                    return r2(r, e, t)
                                })
                            }), r_.prototype.reject = function(e) {
                                return this.filter(sx(iy(e)))
                            }, r_.prototype.slice = function(e, t) {
                                e = oe(e);
                                var n = this;
                                return n.__filtered__ && (e > 0 || t < 0) ? new r_(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== r && (n = (t = oe(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
                            }, r_.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, r_.prototype.toArray = function() {
                                return this.take(4294967295)
                            }, rJ(r_.prototype, function(e, t) {
                                var n = /^(?:filter|find|map|reject)|While$/.test(t),
                                    i = /^(?:head|last)$/.test(t),
                                    s = rg[i ? "take" + ("last" == t ? "Right" : "") : t],
                                    o = i || /^find/.test(t);
                                s && (rg.prototype[t] = function() {
                                    var t = this.__wrapped__,
                                        a = i ? [1] : arguments,
                                        c = t instanceof r_,
                                        u = a[0],
                                        l = c || s$(t),
                                        h = function(e) {
                                            var t = s.apply(rg, td([e], a));
                                            return i && f ? t[0] : t
                                        };
                                    l && n && "function" == typeof u && 1 != u.length && (c = l = !1);
                                    var f = this.__chain__,
                                        p = !!this.__actions__.length,
                                        d = o && !f,
                                        g = c && !p;
                                    if (!o && l) {
                                        t = g ? t : new r_(this);
                                        var y = e.apply(t, a);
                                        return y.__actions__.push({
                                            func: su,
                                            args: [h],
                                            thisArg: r
                                        }), new rm(y, f)
                                    }
                                    return d && g ? e.apply(this, a) : (y = this.thru(h), d ? i ? y.value()[0] : y.value() : y)
                                })
                            }), ta(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var t = eP[e],
                                    r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    n = /^(?:pop|shift)$/.test(e);
                                rg.prototype[e] = function() {
                                    var e = arguments;
                                    if (n && !this.__chain__) {
                                        var i = this.value();
                                        return t.apply(s$(i) ? i : [], e)
                                    }
                                    return this[r](function(r) {
                                        return t.apply(s$(r) ? r : [], e)
                                    })
                                }
                            }), rJ(r_.prototype, function(e, t) {
                                var r = rg[t];
                                if (r) {
                                    var n = r.name + "";
                                    eR.call(ro, n) || (ro[n] = []), ro[n].push({
                                        name: t,
                                        func: r
                                    })
                                }
                            }), ro[n5(r, 2).name] = [{
                                name: "wrapper",
                                func: r
                            }], r_.prototype.clone = function() {
                                var e = new r_(this.__wrapped__);
                                return e.__actions__ = nB(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = nB(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = nB(this.__views__), e
                            }, r_.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var e = new r_(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else e = this.clone(), e.__dir__ *= -1;
                                return e
                            }, r_.prototype.value = function() {
                                var e = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    r = s$(e),
                                    n = t < 0,
                                    i = r ? e.length : 0,
                                    s = function(e, t, r) {
                                        for (var n = -1, i = r.length; ++n < i;) {
                                            var s = r[n],
                                                o = s.size;
                                            switch (s.type) {
                                                case "drop":
                                                    e += o;
                                                    break;
                                                case "dropRight":
                                                    t -= o;
                                                    break;
                                                case "take":
                                                    t = t6(t, e + o);
                                                    break;
                                                case "takeRight":
                                                    e = t3(e, t - o)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: t
                                        }
                                    }(0, i, this.__views__),
                                    o = s.start,
                                    a = s.end,
                                    c = a - o,
                                    u = n ? a : o - 1,
                                    l = this.__iteratees__,
                                    h = l.length,
                                    f = 0,
                                    p = t6(c, this.__takeCount__);
                                if (!r || !n && i == c && p == c) return nx(e, this.__actions__);
                                var d = [];
                                e: for (; c-- && f < p;) {
                                    u += t;
                                    for (var g = -1, y = e[u]; ++g < h;) {
                                        var v = l[g],
                                            m = v.iteratee,
                                            _ = v.type,
                                            b = m(y);
                                        if (2 == _) y = b;
                                        else if (!b) {
                                            if (1 == _) continue e;
                                            break e
                                        }
                                    }
                                    d[f++] = y
                                }
                                return d
                            }, rg.prototype.at = sl, rg.prototype.chain = function() {
                                return sc(this)
                            }, rg.prototype.commit = function() {
                                return new rm(this.value(), this.__chain__)
                            }, rg.prototype.next = function() {
                                this.__values__ === r && (this.__values__ = s9(this.value()));
                                var e = this.__index__ >= this.__values__.length,
                                    t = e ? r : this.__values__[this.__index__++];
                                return {
                                    done: e,
                                    value: t
                                }
                            }, rg.prototype.plant = function(e) {
                                for (var t, n = this; n instanceof rv;) {
                                    var i = iB(n);
                                    i.__index__ = 0, i.__values__ = r, t ? s.__wrapped__ = i : t = i;
                                    var s = i;
                                    n = n.__wrapped__
                                }
                                return s.__wrapped__ = e, t
                            }, rg.prototype.reverse = function() {
                                var e = this.__wrapped__;
                                if (e instanceof r_) {
                                    var t = e;
                                    return this.__actions__.length && (t = new r_(this)), (t = t.reverse()).__actions__.push({
                                        func: su,
                                        args: [i8],
                                        thisArg: r
                                    }), new rm(t, this.__chain__)
                                }
                                return this.thru(i8)
                            }, rg.prototype.toJSON = rg.prototype.valueOf = rg.prototype.value = function() {
                                return nx(this.__wrapped__, this.__actions__)
                            }, rg.prototype.first = rg.prototype.head, e2 && (rg.prototype[e2] = function() {
                                return this
                            }), rg
                        }();
                    e2 ? ((e2.exports = tG)._ = tG, e6._ = tG) : e3._ = tG
                }).call(se)
            }(st, st.exports);
            var sr = Object.defineProperty,
                sn = Object.defineProperties,
                si = Object.getOwnPropertyDescriptors,
                ss = Object.getOwnPropertySymbols,
                so = Object.prototype.hasOwnProperty,
                sa = Object.prototype.propertyIsEnumerable,
                sc = (e, t, r) => t in e ? sr(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                su = (e, t) => {
                    for (var r in t || (t = {})) so.call(t, r) && sc(e, r, t[r]);
                    if (ss)
                        for (var r of ss(t)) sa.call(t, r) && sc(e, r, t[r]);
                    return e
                },
                sl = (e, t) => sn(e, si(t));

            function sh(e, t, r) {
                let n;
                let i = sf(e);
                return t.rpcMap && (n = t.rpcMap[i]), n || (n = `https://rpc.walletconnect.com/v1?chainId=eip155:${i}&projectId=${r}`), n
            }

            function sf(e) {
                return e.includes("eip155") ? Number(e.split(":")[1]) : Number(e)
            }

            function sp(e) {
                var t, r, n, i;
                let s = {};
                if (!(Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length)) return s;
                for (let [o, a] of Object.entries(e)) {
                    let e = i5(o) ? [o] : a.chains,
                        c = a.methods || [],
                        u = a.events || [],
                        l = a.rpcMap || {},
                        h = i3(o);
                    s[h] = sl(su(su({}, s[h]), a), {
                        chains: i1(e, null == (t = s[h]) ? void 0 : t.chains),
                        methods: i1(c, null == (r = s[h]) ? void 0 : r.methods),
                        events: i1(u, null == (n = s[h]) ? void 0 : n.events),
                        rpcMap: su(su({}, l), null == (i = s[h]) ? void 0 : i.rpcMap)
                    })
                }
                return s
            }
            let sd = {},
                sg = e => sd[e],
                sy = (e, t) => {
                    sd[e] = t
                };
            class sv {
                constructor(e) {
                    this.name = "polkadot", this.namespace = e.namespace, this.events = sg("events"), this.client = sg("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || sh(`${this.name}:${e}`, this.namespace);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(i7.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || sh(e, this.namespace);
                    return typeof r > "u" ? void 0 : new rw.r(new i8.Z(r, sg("disableProviderPing")))
                }
            }
            class sm {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.events = sg("events"), this.client = sg("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(e) {
                    var t;
                    switch (e.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return this.handleSwitchChain(e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0"), null;
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    let r = sf(e);
                    if (!this.httpProviders[r]) {
                        let e = t || sh(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
                        if (!e) throw Error(`No RPC url provided for chainId: ${r}`);
                        this.setHttpProvider(r, e)
                    }
                    this.chainId = r, this.events.emit(i7.DEFAULT_CHAIN_CHANGED, `${this.name}:${r}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    let r = t || sh(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new rw.r(new i8.k(r, sg("disableProviderPing")))
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let n = sf(t);
                        e[n] = this.createHttpProvider(n, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                getHttpProvider() {
                    let e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                handleSwitchChain(e) {
                    let t = parseInt(e, 16),
                        r = `${this.name}:${t}`;
                    (function(e, t) {
                        if (!t.includes(e)) throw Error(`Chain '${e}' not approved. Please use one of the following: ${t.toString()}`)
                    })(r, this.namespace.chains), this.setDefaultChain(`${t}`)
                }
            }
            class s_ {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = sg("events"), this.client = sg("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (!this.httpProviders[e]) {
                        let r = t || sh(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.chainId = e, this.events.emit(i7.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || sh(e, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new rw.r(new i8.Z(r, sg("disableProviderPing")))
                }
            }
            class sb {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = sg("events"), this.client = sg("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || sh(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(i7.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || sh(e, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new rw.r(new i8.Z(r, sg("disableProviderPing")))
                }
            }
            class sw {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = sg("events"), this.client = sg("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || this.getCardanoRPCUrl(e);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(i7.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        let r = this.getCardanoRPCUrl(t);
                        e[t] = this.createHttpProvider(t, r)
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                getCardanoRPCUrl(e) {
                    let t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || this.getCardanoRPCUrl(e);
                    return typeof r > "u" ? void 0 : new rw.r(new i8.Z(r, sg("disableProviderPing")))
                }
            }
            class sE {
                constructor(e) {
                    this.name = "elrond", this.namespace = e.namespace, this.events = sg("events"), this.client = sg("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (!this.httpProviders[e]) {
                        let r = t || sh(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.chainId = e, this.events.emit(i7.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || sh(e, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new rw.r(new i8.Z(r, sg("disableProviderPing")))
                }
            }
            class sD {
                constructor(e) {
                    this.name = "multiversx", this.namespace = e.namespace, this.events = sg("events"), this.client = sg("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (!this.httpProviders[e]) {
                        let r = t || sh(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.chainId = e, this.events.emit(i7.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || sh(e, this.namespace, this.client.core.projectId);
                    return typeof r > "u" ? void 0 : new rw.r(new i8.Z(r, sg("disableProviderPing")))
                }
            }
            var sS = Object.defineProperty,
                sI = Object.defineProperties,
                sO = Object.getOwnPropertyDescriptors,
                sP = Object.getOwnPropertySymbols,
                sC = Object.prototype.hasOwnProperty,
                sA = Object.prototype.propertyIsEnumerable,
                sN = (e, t, r) => t in e ? sS(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                sx = (e, t) => {
                    for (var r in t || (t = {})) sC.call(t, r) && sN(e, r, t[r]);
                    if (sP)
                        for (var r of sP(t)) sA.call(t, r) && sN(e, r, t[r]);
                    return e
                },
                sR = (e, t) => sI(e, sO(t));
            class sT {
                constructor(e) {
                    this.events = new(m()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, tt.pino)((0, tt.getDefaultLoggerOptions)({
                        level: e ? .logger || i4
                    })), this.disableProviderPing = e ? .disableProviderPing || !1
                }
                static async init(e) {
                    let t = new sT(e);
                    return await t.initialize(), t
                }
                async request(e, t) {
                    let [r, n] = this.validateChain(t);
                    if (!this.session) throw Error("Please call connect() before request()");
                    return await this.getProvider(r).request({
                        request: sx({}, e),
                        chainId: `${r}:${n}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(e, t, r) {
                    this.request(e, r).then(e => t(null, e)).catch(e => t(e, void 0))
                }
                async enable() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var e;
                    if (!this.session) throw Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (e = this.session) ? void 0 : e.topic,
                        reason: i2("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(e) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(e) {
                    this.shouldAbortPairingAttempt = !1;
                    let t = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
                        if (t >= this.maxPairingAttempts) throw Error("Max auto pairing attempts reached");
                        let {
                            uri: r,
                            approval: n
                        } = await this.client.connect({
                            pairingTopic: e,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await n().then(e => {
                            this.session = e
                        }).catch(e => {
                            if (e.message !== iL) throw e;
                            t++
                        })
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(e, t) {
                    try {
                        let [r, n] = this.validateChain(e);
                        this.getProvider(r).setDefaultChain(n, t)
                    } catch (e) {
                        if (!/Please call connect/.test(e.message)) throw e
                    }
                }
                async cleanupPendingPairings(e = {}) {
                    var t;
                    this.logger.info("Cleaning up inactive pairings...");
                    let r = this.client.pairing.getAll();
                    if (Array.isArray(r) && (!("u" > typeof t) || !r.length || r.every(t))) {
                        for (let t of r) e.deletePairings ? this.client.core.expirer.set(t.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(t.topic);
                        this.logger.info(`Inactive pairings cleared: ${r.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        let e = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await i0.init({
                        logger: this.providerOpts.logger || i4,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (!this.session) throw Error("Session not initialized. Please call connect() before enable()");
                    let e = [...new Set(Object.keys(this.session.namespaces).map(e => i3(e)))];
                    sy("client", this.client), sy("events", this.events), sy("disableProviderPing", this.disableProviderPing), e.forEach(e => {
                        if (!this.session) return;
                        let t = function(e, t) {
                                let r = Object.keys(t.namespaces).filter(t => t.includes(e));
                                if (!r.length) return [];
                                let n = [];
                                return r.forEach(e => {
                                    let r = t.namespaces[e].accounts;
                                    n.push(...r)
                                }), n
                            }(e, this.session),
                            r = t.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`),
                            n = function(e, t = {}) {
                                let r = sp(e),
                                    n = sp(t);
                                return st.exports.merge(r, n)
                            }(this.namespaces, this.optionalNamespaces),
                            i = sR(sx({}, n[e]), {
                                accounts: t,
                                chains: r
                            });
                        switch (e) {
                            case "eip155":
                                this.rpcProviders[e] = new sm({
                                    namespace: i
                                });
                                break;
                            case "solana":
                                this.rpcProviders[e] = new s_({
                                    namespace: i
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[e] = new sb({
                                    namespace: i
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[e] = new sv({
                                    namespace: i
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[e] = new sw({
                                    namespace: i
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[e] = new sE({
                                    namespace: i
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[e] = new sD({
                                    namespace: i
                                })
                        }
                    })
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw Error("Sign Client is not initialized");
                    this.client.on("session_ping", e => {
                        this.events.emit("session_ping", e)
                    }), this.client.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? this.events.emit("accountsChanged", r.data) : "chainChanged" === r.name ? this.onChainChanged(t.chainId) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    }), this.client.on("session_update", ({
                        topic: e,
                        params: t
                    }) => {
                        var r;
                        let {
                            namespaces: n
                        } = t, i = null == (r = this.client) ? void 0 : r.session.get(e);
                        this.session = sR(sx({}, i), {
                            namespaces: n
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: e,
                            params: t
                        })
                    }), this.client.on("session_delete", async e => {
                        await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", sR(sx({}, i2("USER_DISCONNECTED")), {
                            data: e.topic
                        }))
                    }), this.on(i7.DEFAULT_CHAIN_CHANGED, e => {
                        this.onChainChanged(e, !0)
                    })
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    })
                }
                setNamespaces(e) {
                    let {
                        namespaces: t,
                        optionalNamespaces: r,
                        sessionProperties: n
                    } = e;
                    if (!t || !Object.keys(t).length) throw Error("Namespaces must be not empty");
                    this.namespaces = t, this.optionalNamespaces = r, this.sessionProperties = n, this.persist("namespaces", t), this.persist("optionalNamespaces", r)
                }
                validateChain(e) {
                    let [t, r] = e ? .split(":") || ["", ""];
                    if (t && !Object.keys(this.namespaces).map(e => i3(e)).includes(t)) throw Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && r) return [t, r];
                    let n = i3(Object.keys(this.namespaces)[0]),
                        i = this.rpcProviders[n].getDefaultChain();
                    return [n, i]
                }
                async requestAccounts() {
                    let [e] = this.validateChain();
                    return await this.getProvider(e).requestAccounts()
                }
                onChainChanged(e, t = !1) {
                    var r;
                    let [n, i] = this.validateChain(e);
                    t || this.getProvider(n).setDefaultChain(i), (null != (r = this.namespaces[n]) ? r : this.namespaces[`${n}:${i}`]).defaultChain = i, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", i)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(e, t) {
                    this.client.core.storage.setItem(`${i9}/${e}`, t)
                }
                async getFromStore(e) {
                    return await this.client.core.storage.getItem(`${i9}/${e}`)
                }
            }
            let sj = ["eth_sendTransaction", "personal_sign"],
                sU = ["eth_accounts", "eth_requestAccounts", "eth_call", "eth_getBalance", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                sL = ["chainChanged", "accountsChanged"],
                sk = ["message", "disconnect", "connect"];
            var sM = Object.defineProperty,
                sz = Object.defineProperties,
                s$ = Object.getOwnPropertyDescriptors,
                sq = Object.getOwnPropertySymbols,
                sH = Object.prototype.hasOwnProperty,
                sF = Object.prototype.propertyIsEnumerable,
                sV = (e, t, r) => t in e ? sM(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                sB = (e, t) => {
                    for (var r in t || (t = {})) sH.call(t, r) && sV(e, r, t[r]);
                    if (sq)
                        for (var r of sq(t)) sF.call(t, r) && sV(e, r, t[r]);
                    return e
                },
                sK = (e, t) => sz(e, s$(t));

            function sW(e) {
                return Number(e[0].split(":")[1])
            }

            function sG(e) {
                return `0x${e.toString(16)}`
            }
            class sJ {
                constructor() {
                    this.events = new v.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static async init(e) {
                    let t = new sJ;
                    return await t.initialize(e), t
                }
                async request(e) {
                    return await this.signer.request(e, this.formatChainId(this.chainId))
                }
                sendAsync(e, t) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    let {
                        required: t,
                        optional: r
                    } = function(e) {
                        let {
                            chains: t,
                            optionalChains: r,
                            methods: n,
                            optionalMethods: i,
                            events: s,
                            optionalEvents: o,
                            rpcMap: a
                        } = e;
                        if (!e9(t)) throw Error("Invalid chains");
                        let c = n || sj,
                            u = s || sL,
                            l = {
                                [sW(t)]: a[sW(t)]
                            },
                            h = {
                                chains: t,
                                methods: c,
                                events: u,
                                rpcMap: l
                            },
                            f = s ? .filter(e => !sL.includes(e)),
                            p = n ? .filter(e => !sj.includes(e));
                        if (!r && !o && !i && !(null != f && f.length) && !(null != p && p.length)) return {
                            required: h
                        };
                        let d = f ? .length && p ? .length || !r,
                            g = {
                                chains: [...new Set(d ? t.concat(r || []) : r)],
                                methods: [...new Set(c.concat(i || []))],
                                events: [...new Set(u.concat(o || []))],
                                rpcMap: a
                            };
                        return {
                            required: h,
                            optional: g
                        }
                    }(this.rpc);
                    try {
                        let n = await new Promise(async (n, i) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(e => {
                                e.open || this.signer.session || (this.signer.abortPairingAttempt(), i(Error("Connection request reset. Please try again.")))
                            })), await this.signer.connect(sK(sB({
                                namespaces: {
                                    [this.namespace]: t
                                }
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: e ? .pairingTopic
                            })).then(e => {
                                n(e)
                            }).catch(e => {
                                i(Error(e.message))
                            })
                        });
                        if (!n) return;
                        this.setChainIds(this.rpc.chains);
                        let i = function(e, t = []) {
                            let r = [];
                            return Object.keys(e).forEach(n => {
                                if (t.length && !t.includes(n)) return;
                                let i = e[n];
                                r.push(...i.accounts)
                            }), r
                        }(n.namespaces, [this.namespace]);
                        this.setAccounts(i), this.events.emit("connect", {
                            chainId: sG(this.chainId)
                        })
                    } catch (e) {
                        throw this.signer.logger.error(e), e
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    }), this.signer.on("chainChanged", e => {
                        let t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", sG(this.chainId)), this.persist()
                    }), this.signer.on("session_update", e => {
                        this.events.emit("session_update", e)
                    }), this.signer.on("session_delete", e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", sK(sB({}, function(e, t) {
                            let {
                                message: r,
                                code: n
                            } = e4[e];
                            return {
                                message: t ? `${r} ${t}` : r,
                                code: n
                            }
                        }("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", e => {
                        var t, r;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    })
                }
                setHttpProvider(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith(`${this.namespace}:`)
                }
                formatChainId(e) {
                    return `${this.namespace}:${e}`
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    let t = e.filter(e => this.isCompatibleChainId(e)).map(e => this.parseChainId(e));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", sG(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        let t = this.parseChainId(e);
                        this.chainId = t, this.setHttpProvider(t)
                    }
                }
                parseAccountId(e) {
                    let [t, r, n] = e.split(":");
                    return {
                        chainId: `${t}:${r}`,
                        address: n
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, r;
                    return {
                        chains: (null == (t = e.chains) ? void 0 : t.map(e => this.formatChainId(e))) || [`${this.namespace}:1`],
                        optionalChains: e.optionalChains ? e.optionalChains.map(e => this.formatChainId(e)) : void 0,
                        methods: e ? .methods || sj,
                        events: e ? .events || sL,
                        optionalMethods: e ? .optionalMethods || [],
                        optionalEvents: e ? .optionalEvents || [],
                        rpcMap: e ? .rpcMap || this.buildRpcMap(e.chains.concat(e.optionalChains || []), e.projectId),
                        showQrModal: !!(null != e && e.showQrModal),
                        qrModalOptions: null != (r = e ? .qrModalOptions) ? r : void 0,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    let r = {};
                    return e.forEach(e => {
                        r[e] = this.getRpcUrl(e, t)
                    }), r
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = sW(this.rpc.chains), this.signer = await sT.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: e.disableProviderPing
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let e;
                        try {
                            let {
                                WalletConnectModal: t
                            } = await r.e(343).then(r.bind(r, 59343));
                            e = t
                        } catch {
                            throw Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (e) try {
                            this.modal = new e(sB({
                                walletConnectVersion: 2,
                                projectId: this.rpc.projectId,
                                standaloneChains: this.rpc.chains
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    let {
                        chains: t,
                        optionalChains: r,
                        rpcMap: n
                    } = e;
                    t && e9(t) && (this.rpc.chains = t.map(e => this.formatChainId(e)), t.forEach(e => {
                        this.rpc.rpcMap[e] = n ? .[e] || this.getRpcUrl(e)
                    })), r && e9(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map(e => this.formatChainId(e)), r.forEach(e => {
                        this.rpc.rpcMap[e] = n ? .[e] || this.getRpcUrl(e)
                    }))
                }
                getRpcUrl(e, t) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`);
                    this.setChainIds(e ? [this.formatChainId(e)] : this.session.namespaces[this.namespace].accounts), this.setAccounts(this.session.namespaces[this.namespace].accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e => this.parseAccount(e))
                }
            }
            let sY = sJ
        },
        87283: function(e, t, r) {
            "use strict";
            let n = r(70610),
                i = r(44020),
                s = r(80500),
                o = r(92806),
                a = e => null == e,
                c = Symbol("encodeFragmentIdentifier");

            function u(e) {
                if ("string" != typeof e || 1 !== e.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function l(e, t) {
                return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
            }

            function h(e, t) {
                return t.decode ? i(e) : e
            }

            function f(e) {
                let t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function p(e) {
                e = f(e);
                let t = e.indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function d(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                u((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                let r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, n) => {
                                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                        n[e] = r;
                                        return
                                    }
                                    void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r
                                };
                            case "bracket":
                                return (e, r, n) => {
                                    if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), !t) {
                                        n[e] = r;
                                        return
                                    }
                                    if (void 0 === n[e]) {
                                        n[e] = [r];
                                        return
                                    }
                                    n[e] = [].concat(n[e], r)
                                };
                            case "colon-list-separator":
                                return (e, r, n) => {
                                    if (t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), !t) {
                                        n[e] = r;
                                        return
                                    }
                                    if (void 0 === n[e]) {
                                        n[e] = [r];
                                        return
                                    }
                                    n[e] = [].concat(n[e], r)
                                };
                            case "comma":
                            case "separator":
                                return (t, r, n) => {
                                    let i = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                        s = "string" == typeof r && !i && h(r, e).includes(e.arrayFormatSeparator);
                                    r = s ? h(r, e) : r;
                                    let o = i || s ? r.split(e.arrayFormatSeparator).map(t => h(t, e)) : null === r ? r : h(r, e);
                                    n[t] = o
                                };
                            case "bracket-separator":
                                return (t, r, n) => {
                                    let i = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !i) {
                                        n[t] = r ? h(r, e) : r;
                                        return
                                    }
                                    let s = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => h(t, e));
                                    if (void 0 === n[t]) {
                                        n[t] = s;
                                        return
                                    }
                                    n[t] = [].concat(n[t], s)
                                };
                            default:
                                return (e, t, r) => {
                                    if (void 0 === r[e]) {
                                        r[e] = t;
                                        return
                                    }
                                    r[e] = [].concat(r[e], t)
                                }
                        }
                    }(t),
                    n = Object.create(null);
                if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, ""))) return n;
                for (let i of e.split("&")) {
                    if ("" === i) continue;
                    let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t), r(h(e, t), o, n)
                }
                for (let e of Object.keys(n)) {
                    let r = n[e];
                    if ("object" == typeof r && null !== r)
                        for (let e of Object.keys(r)) r[e] = d(r[e], t);
                    else n[e] = d(r, t)
                }
                return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce((e, t) => {
                    let r = n[t];
                    return r && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
                    }(r) : e[t] = r, e
                }, Object.create(null))
            }
            t.extract = p, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                u((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                let r = r => t.skipNull && a(e[r]) || t.skipEmptyString && "" === e[r],
                    n = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, n) => {
                                    let i = r.length;
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [l(t, e), "[", i, "]"].join("")] : [...r, [l(t, e), "[", l(i, e), "]=", l(n, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [l(t, e), "[]"].join("")] : [...r, [l(t, e), "[]=", l(n, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [l(t, e), ":list="].join("")] : [...r, [l(t, e), ":list=", l(n, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : (i = null === i ? "" : i, 0 === n.length) ? [
                                        [l(r, e), t, l(i, e)].join("")
                                    ] : [
                                        [n, l(i, e)].join(e.arrayFormatSeparator)
                                    ]
                                }
                            default:
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, l(t, e)] : [...r, [l(t, e), "=", l(n, e)].join("")]
                        }
                    }(t),
                    i = {};
                for (let t of Object.keys(e)) r(t) || (i[t] = e[t]);
                let s = Object.keys(i);
                return !1 !== t.sort && s.sort(t.sort), s.map(r => {
                    let i = e[r];
                    return void 0 === i ? "" : null === i ? l(r, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? l(r, t) + "[]" : i.reduce(n(r), []).join("&") : l(r, t) + "=" + l(i, t)
                }).filter(e => e.length > 0).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                let [r, n] = s(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(p(e), t)
                }, t && t.parseFragmentIdentifier && n ? {
                    fragmentIdentifier: h(n, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [c]: !0
                }, r);
                let n = f(e.url).split("?")[0] || "",
                    i = t.extract(e.url),
                    s = t.parse(i, {
                        sort: !1
                    }),
                    o = Object.assign(s, e.query),
                    a = t.stringify(o, r);
                a && (a = `?${a}`);
                let u = function(e) {
                    let t = "",
                        r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (u = `#${r[c]?l(e.fragmentIdentifier,r):e.fragmentIdentifier}`), `${n}${a}${u}`
            }, t.pick = (e, r, n) => {
                n = Object.assign({
                    parseFragmentIdentifier: !0,
                    [c]: !1
                }, n);
                let {
                    url: i,
                    query: s,
                    fragmentIdentifier: a
                } = t.parseUrl(e, n);
                return t.stringifyUrl({
                    url: i,
                    query: o(s, r),
                    fragmentIdentifier: a
                }, n)
            }, t.exclude = (e, r, n) => {
                let i = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, i, n)
            }
        },
        38200: function(e, t, r) {
            "use strict";
            r.d(t, {
                q: function() {
                    return n
                }
            });
            class n {}
        },
        30997: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                IEvents: function() {
                    return n.q
                }
            });
            var n = r(38200)
        },
        32568: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
            let n = r(66736);
            t.HEARTBEAT_INTERVAL = n.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        53401: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(39653);
            n.__exportStar(r(32568), t)
        },
        38969: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HeartBeat = void 0;
            let n = r(39653),
                i = r(17187),
                s = r(66736),
                o = r(1614),
                a = r(53401);
            class c extends o.IHeartBeat {
                constructor(e) {
                    super(e), this.events = new i.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(e) {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        let t = new c(e);
                        return yield t.init(), t
                    })
                }
                init() {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                initialize() {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), s.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            t.HeartBeat = c
        },
        90772: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(39653);
            n.__exportStar(r(38969), t), n.__exportStar(r(1614), t), n.__exportStar(r(53401), t)
        },
        44174: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IHeartBeat = void 0;
            let n = r(30997);
            class i extends n.IEvents {
                constructor(e) {
                    super()
                }
            }
            t.IHeartBeat = i
        },
        1614: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(39653);
            n.__exportStar(r(44174), t)
        },
        39653: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return b
                },
                __asyncGenerator: function() {
                    return _
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return I
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return D
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var n = function(e, t) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function i(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                return r
            }

            function a(e, t, r, n) {
                var i, s = arguments.length,
                    o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, n) {
                return new(r || (r = Promise))(function(i, s) {
                    function o(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, n, i, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                                switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, n = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < i[1]) {
                                            o.label = i[1], i = s;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(s);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = s.next()).done;) o.push(n.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = s.return) && r.call(s)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var n = Array(e), i = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o];
                return n
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function _(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(e, t || []),
                    s = [];
                return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function o(e) {
                    i[e] && (n[e] = function(t) {
                        return new Promise(function(r, n) {
                            s.push([e, t, r, n]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = i[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function b(e) {
                var t, r;
                return t = {}, n("next"), n("throw", function(e) {
                    throw e
                }), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, i) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[n](t)),
                            done: "return" === n
                        } : i ? i(t) : t
                    } : i
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(n, i) {
                            ! function(e, t, r, n) {
                                Promise.resolve(n).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(n, i, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function D(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function I(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        96641: function(e, t, r) {
            "use strict";
            r.d(t, {
                k: function() {
                    return u
                },
                Z: function() {
                    return l
                }
            });
            var n = r(17187),
                i = r(54098),
                s = r.n(i),
                o = r(85094),
                a = r(56186);
            let c = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class u {
                constructor(e, t = !1) {
                    if (this.url = e, this.disableProviderPing = t, this.events = new n.EventEmitter, this.isAvailable = !1, this.registering = !1, !(0, a.isHttpUrl)(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    this.url = e, this.disableProviderPing = t
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    if (!this.isAvailable) throw Error("Connection already closed");
                    this.onClose()
                }
                async send(e, t) {
                    this.isAvailable || await this.register();
                    try {
                        let t = (0, o.u)(e),
                            r = await s()(this.url, Object.assign(Object.assign({}, c), {
                                body: t
                            })),
                            n = await r.json();
                        this.onPayload({
                            data: n
                        })
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                async register(e = this.url) {
                    if (!(0, a.isHttpUrl)(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), void 0 === this.isAvailable) return t(Error("HTTP connection is missing or invalid"));
                                e()
                            })
                        })
                    }
                    this.url = e, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            let t = (0, o.u)({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await s()(e, Object.assign(Object.assign({}, c), {
                                body: t
                            }))
                        }
                        this.onOpen()
                    } catch (t) {
                        let e = this.parseError(t);
                        throw this.events.emit("register_error", e), this.onClose(), e
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(e) {
                    if (void 0 === e.data) return;
                    let t = "string" == typeof e.data ? (0, o.D)(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        n = r.message || r.toString(),
                        i = (0, a.formatJsonRpcError)(e, n);
                    this.events.emit("payload", i)
                }
                parseError(e, t = this.url) {
                    return (0, a.parseConnectionError)(e, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            var l = u
        },
        46160: function(e, t, r) {
            "use strict";
            r.d(t, {
                r: function() {
                    return s
                }
            });
            var n = r(17187),
                i = r(56186);
            class s extends i.IJsonRpcProvider {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
                }
                async connect(e = this.connection) {
                    await this.open(e)
                }
                async disconnect() {
                    await this.close()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async request(e, t) {
                    return this.requestStrict((0, i.formatJsonRpcRequest)(e.method, e.params || [], e.id || (0, i.getBigIntRpcId)().toString()), t)
                }
                async requestStrict(e, t) {
                    return new Promise(async (r, n) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (e) {
                            n(e)
                        }
                        this.events.on(`${e.id}`, e => {
                            (0, i.isJsonRpcError)(e) ? n(e.error): r(e.result)
                        });
                        try {
                            await this.connection.send(e, t)
                        } catch (e) {
                            n(e)
                        }
                    })
                }
                setConnection(e = this.connection) {
                    return e
                }
                onPayload(e) {
                    this.events.emit("payload", e), (0, i.isJsonRpcResponse)(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                onClose(e) {
                    e && 3e3 === e.code && this.events.emit("error", Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(e = this.connection) {
                    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
        },
        85150: function(e, t, r) {
            "use strict";
            let n = r(33893),
                i = r(63954),
                s = n.__importDefault(r(30653)),
                o = r(59728);
            t.ZP = class {
                constructor() {
                    this.localStorage = s.default
                }
                getKeys() {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        return Object.keys(this.localStorage)
                    })
                }
                getEntries() {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        return Object.entries(this.localStorage).map(o.parseEntry)
                    })
                }
                getItem(e) {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        let t = this.localStorage.getItem(e);
                        if (null !== t) return i.safeJsonParse(t)
                    })
                }
                setItem(e, t) {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        this.localStorage.setItem(e, i.safeJsonStringify(t))
                    })
                }
                removeItem(e) {
                    return n.__awaiter(this, void 0, void 0, function*() {
                        this.localStorage.removeItem(e)
                    })
                }
            }
        },
        30653: function(e, t, r) {
            "use strict";
            ! function() {
                let t;

                function n() {}(t = n).prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, t.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, t.prototype.removeItem = function(e) {
                    delete this[e]
                }, t.prototype.clear = function() {
                    let e = this;
                    Object.keys(e).forEach(function(t) {
                        e[t] = void 0, delete e[t]
                    })
                }, t.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, t.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), void 0 !== r.g && r.g.localStorage ? e.exports = r.g.localStorage : "undefined" != typeof window && window.localStorage ? e.exports = window.localStorage : e.exports = new n
            }()
        },
        59728: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(33893);
            n.__exportStar(r(39076), t), n.__exportStar(r(20496), t)
        },
        39076: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IKeyValueStorage = void 0, t.IKeyValueStorage = class {}
        },
        20496: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseEntry = void 0;
            let n = r(63954);
            t.parseEntry = function(e) {
                var t;
                return [e[0], n.safeJsonParse(null !== (t = e[1]) && void 0 !== t ? t : "")]
            }
        },
        33893: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return b
                },
                __asyncGenerator: function() {
                    return _
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return I
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return D
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var n = function(e, t) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function i(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                return r
            }

            function a(e, t, r, n) {
                var i, s = arguments.length,
                    o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, n) {
                return new(r || (r = Promise))(function(i, s) {
                    function o(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, n, i, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                                switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, n = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < i[1]) {
                                            o.label = i[1], i = s;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(s);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = s.next()).done;) o.push(n.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = s.return) && r.call(s)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var n = Array(e), i = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o];
                return n
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function _(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(e, t || []),
                    s = [];
                return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function o(e) {
                    i[e] && (n[e] = function(t) {
                        return new Promise(function(r, n) {
                            s.push([e, t, r, n]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = i[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function b(e) {
                var t, r;
                return t = {}, n("next"), n("throw", function(e) {
                    throw e
                }), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, i) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[n](t)),
                            done: "return" === n
                        } : i ? i(t) : t
                    } : i
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(n, i) {
                            ! function(e, t, r, n) {
                                Promise.resolve(n).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(n, i, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function D(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function I(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        65727: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0, t.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        9107: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pino = void 0;
            let n = r(57121),
                i = n.__importDefault(r(36559));
            Object.defineProperty(t, "pino", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), n.__exportStar(r(65727), t), n.__exportStar(r(58048), t)
        },
        58048: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
            let n = r(65727);

            function i(e, t = n.PINO_CUSTOM_CONTEXT_KEY) {
                return e[t] || ""
            }

            function s(e, t, r = n.PINO_CUSTOM_CONTEXT_KEY) {
                return e[r] = t, e
            }

            function o(e, t = n.PINO_CUSTOM_CONTEXT_KEY) {
                return void 0 === e.bindings ? i(e, t) : e.bindings().context || ""
            }

            function a(e, t, r = n.PINO_CUSTOM_CONTEXT_KEY) {
                let i = o(e, r),
                    s = i.trim() ? `${i}/${t}` : t;
                return s
            }
            t.getDefaultLoggerOptions = function(e) {
                return Object.assign(Object.assign({}, e), {
                    level: (null == e ? void 0 : e.level) || n.PINO_LOGGER_DEFAULTS.level
                })
            }, t.getBrowserLoggerContext = i, t.setBrowserLoggerContext = s, t.getLoggerContext = o, t.formatChildLoggerContext = a, t.generateChildLogger = function(e, t, r = n.PINO_CUSTOM_CONTEXT_KEY) {
                let i = a(e, t, r),
                    o = e.child({
                        context: i
                    });
                return s(o, i, r)
            }
        },
        57121: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return b
                },
                __asyncGenerator: function() {
                    return _
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return I
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return D
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var n = function(e, t) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function i(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                return r
            }

            function a(e, t, r, n) {
                var i, s = arguments.length,
                    o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, n) {
                return new(r || (r = Promise))(function(i, s) {
                    function o(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, n, i, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                                switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, n = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < i[1]) {
                                            o.label = i[1], i = s;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(s);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = s.next()).done;) o.push(n.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = s.return) && r.call(s)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var n = Array(e), i = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o];
                return n
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function _(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(e, t || []),
                    s = [];
                return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function o(e) {
                    i[e] && (n[e] = function(t) {
                        return new Promise(function(r, n) {
                            s.push([e, t, r, n]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = i[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function b(e) {
                var t, r;
                return t = {}, n("next"), n("throw", function(e) {
                    throw e
                }), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, i) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[n](t)),
                            done: "return" === n
                        } : i ? i(t) : t
                    } : i
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(n, i) {
                            ! function(e, t, r, n) {
                                Promise.resolve(n).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(n, i, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function D(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function I(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        61882: function() {},
        43014: function() {},
        85094: function(e, t, r) {
            "use strict";
            r.d(t, {
                D: function() {
                    return s
                },
                u: function() {
                    return o
                }
            });
            let n = e => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() + "n" : t),
                i = e => {
                    let t = e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(t, (e, t) => {
                        let r = "string" == typeof t && t.match(/^\d+n$/);
                        return r ? BigInt(t.substring(0, t.length - 1)) : t
                    })
                };

            function s(e) {
                if ("string" != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
                try {
                    return i(e)
                } catch (t) {
                    return e
                }
            }

            function o(e) {
                return "string" == typeof e ? e : n(e) || ""
            }
        },
        87338: function(e, t, r) {
            "use strict";
            let n = r(70610),
                i = r(44020),
                s = r(80500),
                o = r(92806),
                a = e => null == e,
                c = Symbol("encodeFragmentIdentifier");

            function u(e) {
                if ("string" != typeof e || 1 !== e.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function l(e, t) {
                return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
            }

            function h(e, t) {
                return t.decode ? i(e) : e
            }

            function f(e) {
                let t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function p(e) {
                e = f(e);
                let t = e.indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function d(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                u((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                let r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, n) => {
                                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                        n[e] = r;
                                        return
                                    }
                                    void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r
                                };
                            case "bracket":
                                return (e, r, n) => {
                                    if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), !t) {
                                        n[e] = r;
                                        return
                                    }
                                    if (void 0 === n[e]) {
                                        n[e] = [r];
                                        return
                                    }
                                    n[e] = [].concat(n[e], r)
                                };
                            case "colon-list-separator":
                                return (e, r, n) => {
                                    if (t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), !t) {
                                        n[e] = r;
                                        return
                                    }
                                    if (void 0 === n[e]) {
                                        n[e] = [r];
                                        return
                                    }
                                    n[e] = [].concat(n[e], r)
                                };
                            case "comma":
                            case "separator":
                                return (t, r, n) => {
                                    let i = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                        s = "string" == typeof r && !i && h(r, e).includes(e.arrayFormatSeparator);
                                    r = s ? h(r, e) : r;
                                    let o = i || s ? r.split(e.arrayFormatSeparator).map(t => h(t, e)) : null === r ? r : h(r, e);
                                    n[t] = o
                                };
                            case "bracket-separator":
                                return (t, r, n) => {
                                    let i = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !i) {
                                        n[t] = r ? h(r, e) : r;
                                        return
                                    }
                                    let s = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => h(t, e));
                                    if (void 0 === n[t]) {
                                        n[t] = s;
                                        return
                                    }
                                    n[t] = [].concat(n[t], s)
                                };
                            default:
                                return (e, t, r) => {
                                    if (void 0 === r[e]) {
                                        r[e] = t;
                                        return
                                    }
                                    r[e] = [].concat(r[e], t)
                                }
                        }
                    }(t),
                    n = Object.create(null);
                if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, ""))) return n;
                for (let i of e.split("&")) {
                    if ("" === i) continue;
                    let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t), r(h(e, t), o, n)
                }
                for (let e of Object.keys(n)) {
                    let r = n[e];
                    if ("object" == typeof r && null !== r)
                        for (let e of Object.keys(r)) r[e] = d(r[e], t);
                    else n[e] = d(r, t)
                }
                return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce((e, t) => {
                    let r = n[t];
                    return r && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
                    }(r) : e[t] = r, e
                }, Object.create(null))
            }
            t.extract = p, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                u((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                let r = r => t.skipNull && a(e[r]) || t.skipEmptyString && "" === e[r],
                    n = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, n) => {
                                    let i = r.length;
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [l(t, e), "[", i, "]"].join("")] : [...r, [l(t, e), "[", l(i, e), "]=", l(n, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [l(t, e), "[]"].join("")] : [...r, [l(t, e), "[]=", l(n, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [l(t, e), ":list="].join("")] : [...r, [l(t, e), ":list=", l(n, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : (i = null === i ? "" : i, 0 === n.length) ? [
                                        [l(r, e), t, l(i, e)].join("")
                                    ] : [
                                        [n, l(i, e)].join(e.arrayFormatSeparator)
                                    ]
                                }
                            default:
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, l(t, e)] : [...r, [l(t, e), "=", l(n, e)].join("")]
                        }
                    }(t),
                    i = {};
                for (let t of Object.keys(e)) r(t) || (i[t] = e[t]);
                let s = Object.keys(i);
                return !1 !== t.sort && s.sort(t.sort), s.map(r => {
                    let i = e[r];
                    return void 0 === i ? "" : null === i ? l(r, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? l(r, t) + "[]" : i.reduce(n(r), []).join("&") : l(r, t) + "=" + l(i, t)
                }).filter(e => e.length > 0).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                let [r, n] = s(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(p(e), t)
                }, t && t.parseFragmentIdentifier && n ? {
                    fragmentIdentifier: h(n, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [c]: !0
                }, r);
                let n = f(e.url).split("?")[0] || "",
                    i = t.extract(e.url),
                    s = t.parse(i, {
                        sort: !1
                    }),
                    o = Object.assign(s, e.query),
                    a = t.stringify(o, r);
                a && (a = `?${a}`);
                let u = function(e) {
                    let t = "",
                        r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (u = `#${r[c]?l(e.fragmentIdentifier,r):e.fragmentIdentifier}`), `${n}${a}${u}`
            }, t.pick = (e, r, n) => {
                n = Object.assign({
                    parseFragmentIdentifier: !0,
                    [c]: !1
                }, n);
                let {
                    url: i,
                    query: s,
                    fragmentIdentifier: a
                } = t.parseUrl(e, n);
                return t.stringifyUrl({
                    url: i,
                    query: o(s, r),
                    fragmentIdentifier: a
                }, n)
            }, t.exclude = (e, r, n) => {
                let i = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, i, n)
            }
        },
        36900: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(30004);
            n.__exportStar(r(46869), t), n.__exportStar(r(88033), t)
        },
        46869: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_THOUSAND = t.ONE_HUNDRED = void 0, t.ONE_HUNDRED = 100, t.ONE_THOUSAND = 1e3
        },
        88033: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = 5 * t.ONE_MINUTE, t.TEN_MINUTES = 10 * t.ONE_MINUTE, t.THIRTY_MINUTES = 30 * t.ONE_MINUTE, t.SIXTY_MINUTES = 60 * t.ONE_MINUTE, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = 3 * t.ONE_HOUR, t.SIX_HOURS = 6 * t.ONE_HOUR, t.TWELVE_HOURS = 12 * t.ONE_HOUR, t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = 3 * t.ONE_DAY, t.FIVE_DAYS = 5 * t.ONE_DAY, t.SEVEN_DAYS = 7 * t.ONE_DAY, t.THIRTY_DAYS = 30 * t.ONE_DAY, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = 2 * t.ONE_WEEK, t.THREE_WEEKS = 3 * t.ONE_WEEK, t.FOUR_WEEKS = 4 * t.ONE_WEEK, t.ONE_YEAR = 365 * t.ONE_DAY
        },
        66736: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(30004);
            n.__exportStar(r(44273), t), n.__exportStar(r(47001), t), n.__exportStar(r(52939), t), n.__exportStar(r(36900), t)
        },
        52939: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(30004);
            n.__exportStar(r(88766), t)
        },
        88766: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IWatch = void 0, t.IWatch = class {}
        },
        83207: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromMiliseconds = t.toMiliseconds = void 0;
            let n = r(36900);
            t.toMiliseconds = function(e) {
                return e * n.ONE_THOUSAND
            }, t.fromMiliseconds = function(e) {
                return Math.floor(e / n.ONE_THOUSAND)
            }
        },
        83873: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.delay = void 0, t.delay = function(e) {
                return new Promise(t => {
                    setTimeout(() => {
                        t(!0)
                    }, e)
                })
            }
        },
        44273: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let n = r(30004);
            n.__exportStar(r(83873), t), n.__exportStar(r(83207), t)
        },
        47001: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Watch = void 0;
            class r {
                constructor() {
                    this.timestamps = new Map
                }
                start(e) {
                    if (this.timestamps.has(e)) throw Error(`Watch already started for label: ${e}`);
                    this.timestamps.set(e, {
                        started: Date.now()
                    })
                }
                stop(e) {
                    let t = this.get(e);
                    if (void 0 !== t.elapsed) throw Error(`Watch already stopped for label: ${e}`);
                    let r = Date.now() - t.started;
                    this.timestamps.set(e, {
                        started: t.started,
                        elapsed: r
                    })
                }
                get(e) {
                    let t = this.timestamps.get(e);
                    if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
                    return t
                }
                elapsed(e) {
                    let t = this.get(e),
                        r = t.elapsed || Date.now() - t.started;
                    return r
                }
            }
            t.Watch = r, t.default = r
        },
        30004: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return b
                },
                __asyncGenerator: function() {
                    return _
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return I
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return i
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return S
                },
                __importStar: function() {
                    return D
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var n = function(e, t) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function i(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
                return r
            }

            function a(e, t, r, n) {
                var i, s = arguments.length,
                    o = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, r, o) : i(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, n) {
                    t(r, n, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, n) {
                return new(r || (r = Promise))(function(i, s) {
                    function o(e) {
                        try {
                            c(n.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, n, i, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                                switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        i = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, n = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < i[1]) {
                                            o.label = i[1], i = s;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(s);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = s.next()).done;) o.push(n.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = s.return) && r.call(s)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var n = Array(e), i = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) n[i] = s[o];
                return n
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function _(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var n, i = r.apply(e, t || []),
                    s = [];
                return n = {}, o("next"), o("throw"), o("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n;

                function o(e) {
                    i[e] && (n[e] = function(t) {
                        return new Promise(function(r, n) {
                            s.push([e, t, r, n]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = i[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function b(e) {
                var t, r;
                return t = {}, n("next"), n("throw", function(e) {
                    throw e
                }), n("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function n(n, i) {
                    t[n] = e[n] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[n](t)),
                            done: "return" === n
                        } : i ? i(t) : t
                    } : i
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function n(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(n, i) {
                            ! function(e, t, r, n) {
                                Promise.resolve(n).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(n, i, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function D(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function I(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        94543: function(e, t, r) {
            "use strict";
            let n = r(70610),
                i = r(44020),
                s = r(80500),
                o = r(92806),
                a = e => null == e,
                c = Symbol("encodeFragmentIdentifier");

            function u(e) {
                if ("string" != typeof e || 1 !== e.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function l(e, t) {
                return t.encode ? t.strict ? n(e) : encodeURIComponent(e) : e
            }

            function h(e, t) {
                return t.decode ? i(e) : e
            }

            function f(e) {
                let t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function p(e) {
                e = f(e);
                let t = e.indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function d(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                u((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                let r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, n) => {
                                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                        n[e] = r;
                                        return
                                    }
                                    void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r
                                };
                            case "bracket":
                                return (e, r, n) => {
                                    if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), !t) {
                                        n[e] = r;
                                        return
                                    }
                                    if (void 0 === n[e]) {
                                        n[e] = [r];
                                        return
                                    }
                                    n[e] = [].concat(n[e], r)
                                };
                            case "colon-list-separator":
                                return (e, r, n) => {
                                    if (t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), !t) {
                                        n[e] = r;
                                        return
                                    }
                                    if (void 0 === n[e]) {
                                        n[e] = [r];
                                        return
                                    }
                                    n[e] = [].concat(n[e], r)
                                };
                            case "comma":
                            case "separator":
                                return (t, r, n) => {
                                    let i = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                        s = "string" == typeof r && !i && h(r, e).includes(e.arrayFormatSeparator);
                                    r = s ? h(r, e) : r;
                                    let o = i || s ? r.split(e.arrayFormatSeparator).map(t => h(t, e)) : null === r ? r : h(r, e);
                                    n[t] = o
                                };
                            case "bracket-separator":
                                return (t, r, n) => {
                                    let i = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !i) {
                                        n[t] = r ? h(r, e) : r;
                                        return
                                    }
                                    let s = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => h(t, e));
                                    if (void 0 === n[t]) {
                                        n[t] = s;
                                        return
                                    }
                                    n[t] = [].concat(n[t], s)
                                };
                            default:
                                return (e, t, r) => {
                                    if (void 0 === r[e]) {
                                        r[e] = t;
                                        return
                                    }
                                    r[e] = [].concat(r[e], t)
                                }
                        }
                    }(t),
                    n = Object.create(null);
                if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, ""))) return n;
                for (let i of e.split("&")) {
                    if ("" === i) continue;
                    let [e, o] = s(t.decode ? i.replace(/\+/g, " ") : i, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t), r(h(e, t), o, n)
                }
                for (let e of Object.keys(n)) {
                    let r = n[e];
                    if ("object" == typeof r && null !== r)
                        for (let e of Object.keys(r)) r[e] = d(r[e], t);
                    else n[e] = d(r, t)
                }
                return !1 === t.sort ? n : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce((e, t) => {
                    let r = n[t];
                    return r && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
                    }(r) : e[t] = r, e
                }, Object.create(null))
            }
            t.extract = p, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                u((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                let r = r => t.skipNull && a(e[r]) || t.skipEmptyString && "" === e[r],
                    n = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, n) => {
                                    let i = r.length;
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [l(t, e), "[", i, "]"].join("")] : [...r, [l(t, e), "[", l(i, e), "]=", l(n, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [l(t, e), "[]"].join("")] : [...r, [l(t, e), "[]=", l(n, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, [l(t, e), ":list="].join("")] : [...r, [l(t, e), ":list=", l(n, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (n, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? n : (i = null === i ? "" : i, 0 === n.length) ? [
                                        [l(r, e), t, l(i, e)].join("")
                                    ] : [
                                        [n, l(i, e)].join(e.arrayFormatSeparator)
                                    ]
                                }
                            default:
                                return t => (r, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : null === n ? [...r, l(t, e)] : [...r, [l(t, e), "=", l(n, e)].join("")]
                        }
                    }(t),
                    i = {};
                for (let t of Object.keys(e)) r(t) || (i[t] = e[t]);
                let s = Object.keys(i);
                return !1 !== t.sort && s.sort(t.sort), s.map(r => {
                    let i = e[r];
                    return void 0 === i ? "" : null === i ? l(r, t) : Array.isArray(i) ? 0 === i.length && "bracket-separator" === t.arrayFormat ? l(r, t) + "[]" : i.reduce(n(r), []).join("&") : l(r, t) + "=" + l(i, t)
                }).filter(e => e.length > 0).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                let [r, n] = s(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(p(e), t)
                }, t && t.parseFragmentIdentifier && n ? {
                    fragmentIdentifier: h(n, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [c]: !0
                }, r);
                let n = f(e.url).split("?")[0] || "",
                    i = t.extract(e.url),
                    s = t.parse(i, {
                        sort: !1
                    }),
                    o = Object.assign(s, e.query),
                    a = t.stringify(o, r);
                a && (a = `?${a}`);
                let u = function(e) {
                    let t = "",
                        r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (u = `#${r[c]?l(e.fragmentIdentifier,r):e.fragmentIdentifier}`), `${n}${a}${u}`
            }, t.pick = (e, r, n) => {
                n = Object.assign({
                    parseFragmentIdentifier: !0,
                    [c]: !1
                }, n);
                let {
                    url: i,
                    query: s,
                    fragmentIdentifier: a
                } = t.parseUrl(e, n);
                return t.stringifyUrl({
                    url: i,
                    query: o(s, r),
                    fragmentIdentifier: a
                }, n)
            }, t.exclude = (e, r, n) => {
                let i = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, i, n)
            }
        },
        62873: function(e, t) {
            "use strict";

            function r(e) {
                let t;
                return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t
            }

            function n(e) {
                let t = r(e);
                if (!t) throw Error(`${e} is not defined in Window`);
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = r, t.getFromWindowOrThrow = n, t.getDocumentOrThrow = function() {
                return n("document")
            }, t.getDocument = function() {
                return r("document")
            }, t.getNavigatorOrThrow = function() {
                return n("navigator")
            }, t.getNavigator = function() {
                return r("navigator")
            }, t.getLocationOrThrow = function() {
                return n("location")
            }, t.getLocation = function() {
                return r("location")
            }, t.getCryptoOrThrow = function() {
                return n("crypto")
            }, t.getCrypto = function() {
                return r("crypto")
            }, t.getLocalStorageOrThrow = function() {
                return n("localStorage")
            }, t.getLocalStorage = function() {
                return r("localStorage")
            }
        },
        65755: function(e, t, r) {
            "use strict";
            t.D = void 0;
            let n = r(62873);
            t.D = function() {
                let e, t, r;
                try {
                    e = n.getDocumentOrThrow(), t = n.getLocationOrThrow()
                } catch (e) {
                    return null
                }

                function i(...t) {
                    let r = e.getElementsByTagName("meta");
                    for (let e = 0; e < r.length; e++) {
                        let n = r[e],
                            i = ["itemprop", "property", "name"].map(e => n.getAttribute(e)).filter(e => !!e && t.includes(e));
                        if (i.length && i) {
                            let e = n.getAttribute("content");
                            if (e) return e
                        }
                    }
                    return ""
                }
                let s = ((r = i("name", "og:site_name", "og:title", "twitter:title")) || (r = e.title), r),
                    o = function() {
                        let e = i("description", "og:description", "twitter:description", "keywords");
                        return e
                    }(),
                    a = t.origin,
                    c = function() {
                        let r = e.getElementsByTagName("link"),
                            n = [];
                        for (let e = 0; e < r.length; e++) {
                            let i = r[e],
                                s = i.getAttribute("rel");
                            if (s && s.toLowerCase().indexOf("icon") > -1) {
                                let e = i.getAttribute("href");
                                if (e) {
                                    if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                                        let r = t.protocol + "//" + t.host;
                                        if (0 === e.indexOf("/")) r += e;
                                        else {
                                            let n = t.pathname.split("/");
                                            n.pop();
                                            let i = n.join("/");
                                            r += i + "/" + e
                                        }
                                        n.push(r)
                                    } else if (0 === e.indexOf("//")) {
                                        let r = t.protocol + e;
                                        n.push(r)
                                    } else n.push(e)
                                }
                            }
                        }
                        return n
                    }();
                return {
                    description: o,
                    url: a,
                    icons: c,
                    name: s
                }
            }
        },
        92806: function(e) {
            "use strict";
            e.exports = function(e, t) {
                for (var r = {}, n = Object.keys(e), i = Array.isArray(t), s = 0; s < n.length; s++) {
                    var o = n[s],
                        a = e[o];
                    (i ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a)
                }
                return r
            }
        },
        72307: function(e, t, r) {
            e = r.nmd(e);
            var n, i, s, o = "__lodash_hash_undefined__",
                a = "[object Arguments]",
                c = "[object Array]",
                u = "[object Boolean]",
                l = "[object Date]",
                h = "[object Error]",
                f = "[object Function]",
                p = "[object Map]",
                d = "[object Number]",
                g = "[object Object]",
                y = "[object Promise]",
                v = "[object RegExp]",
                m = "[object Set]",
                _ = "[object String]",
                b = "[object WeakMap]",
                w = "[object ArrayBuffer]",
                E = "[object DataView]",
                D = /^\[object .+?Constructor\]$/,
                S = /^(?:0|[1-9]\d*)$/,
                I = {};
            I["[object Float32Array]"] = I["[object Float64Array]"] = I["[object Int8Array]"] = I["[object Int16Array]"] = I["[object Int32Array]"] = I["[object Uint8Array]"] = I["[object Uint8ClampedArray]"] = I["[object Uint16Array]"] = I["[object Uint32Array]"] = !0, I[a] = I[c] = I[w] = I[u] = I[E] = I[l] = I[h] = I[f] = I[p] = I[d] = I[g] = I[v] = I[m] = I[_] = I[b] = !1;
            var O = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                P = "object" == typeof self && self && self.Object === Object && self,
                C = O || P || Function("return this")(),
                A = t && !t.nodeType && t,
                N = A && e && !e.nodeType && e,
                x = N && N.exports === A,
                R = x && O.process,
                T = function() {
                    try {
                        return R && R.binding && R.binding("util")
                    } catch (e) {}
                }(),
                j = T && T.isTypedArray;

            function U(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e, n) {
                    r[++t] = [n, e]
                }), r
            }

            function L(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e) {
                    r[++t] = e
                }), r
            }
            var k = Array.prototype,
                M = Function.prototype,
                z = Object.prototype,
                $ = C["__core-js_shared__"],
                q = M.toString,
                H = z.hasOwnProperty,
                F = (n = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                V = z.toString,
                B = RegExp("^" + q.call(H).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                K = x ? C.Buffer : void 0,
                W = C.Symbol,
                G = C.Uint8Array,
                J = z.propertyIsEnumerable,
                Y = k.splice,
                Z = W ? W.toStringTag : void 0,
                X = Object.getOwnPropertySymbols,
                Q = K ? K.isBuffer : void 0,
                ee = (i = Object.keys, s = Object, function(e) {
                    return i(s(e))
                }),
                et = eI(C, "DataView"),
                er = eI(C, "Map"),
                en = eI(C, "Promise"),
                ei = eI(C, "Set"),
                es = eI(C, "WeakMap"),
                eo = eI(Object, "create"),
                ea = eC(et),
                ec = eC(er),
                eu = eC(en),
                el = eC(ei),
                eh = eC(es),
                ef = W ? W.prototype : void 0,
                ep = ef ? ef.valueOf : void 0;

            function ed(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function eg(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function ey(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var n = e[t];
                    this.set(n[0], n[1])
                }
            }

            function ev(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new ey; ++t < r;) this.add(e[t])
            }

            function em(e) {
                var t = this.__data__ = new eg(e);
                this.size = t.size
            }

            function e_(e, t) {
                for (var r = e.length; r--;)
                    if (eA(e[r][0], t)) return r;
                return -1
            }

            function eb(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Z && Z in Object(e) ? function(e) {
                    var t = H.call(e, Z),
                        r = e[Z];
                    try {
                        e[Z] = void 0;
                        var n = !0
                    } catch (e) {}
                    var i = V.call(e);
                    return n && (t ? e[Z] = r : delete e[Z]), i
                }(e) : V.call(e)
            }

            function ew(e) {
                return eL(e) && eb(e) == a
            }

            function eE(e, t, r, n, i, s) {
                var o = 1 & r,
                    a = e.length,
                    c = t.length;
                if (a != c && !(o && c > a)) return !1;
                var u = s.get(e);
                if (u && s.get(t)) return u == t;
                var l = -1,
                    h = !0,
                    f = 2 & r ? new ev : void 0;
                for (s.set(e, t), s.set(t, e); ++l < a;) {
                    var p = e[l],
                        d = t[l];
                    if (n) var g = o ? n(d, p, l, t, e, s) : n(p, d, l, e, t, s);
                    if (void 0 !== g) {
                        if (g) continue;
                        h = !1;
                        break
                    }
                    if (f) {
                        if (! function(e, t) {
                                for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
                                    if (t(e[r], r, e)) return !0;
                                return !1
                            }(t, function(e, t) {
                                if (!f.has(t) && (p === e || i(p, e, r, n, s))) return f.push(t)
                            })) {
                            h = !1;
                            break
                        }
                    } else if (!(p === d || i(p, d, r, n, s))) {
                        h = !1;
                        break
                    }
                }
                return s.delete(e), s.delete(t), h
            }

            function eD(e) {
                var t;
                return t = function(e) {
                    return null != e && ej(e.length) && !eT(e) ? function(e, t) {
                        var r, n, i = ex(e),
                            s = !i && eN(e),
                            o = !i && !s && eR(e),
                            a = !i && !s && !o && ek(e),
                            c = i || s || o || a,
                            u = c ? function(e, t) {
                                for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
                                return n
                            }(e.length, String) : [],
                            l = u.length;
                        for (var h in e) H.call(e, h) && !(c && ("length" == h || o && ("offset" == h || "parent" == h) || a && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || (r = h, (n = null == (n = l) ? 9007199254740991 : n) && ("number" == typeof r || S.test(r)) && r > -1 && r % 1 == 0 && r < n))) && u.push(h);
                        return u
                    }(e) : function(e) {
                        if (r = "function" == typeof(t = e && e.constructor) && t.prototype || z, e !== r) return ee(e);
                        var t, r, n = [];
                        for (var i in Object(e)) H.call(e, i) && "constructor" != i && n.push(i);
                        return n
                    }(e)
                }(e), ex(e) ? t : function(e, t) {
                    for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
                    return e
                }(t, eO(e))
            }

            function eS(e, t) {
                var r, n = e.__data__;
                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? n["string" == typeof t ? "string" : "hash"] : n.map
            }

            function eI(e, t) {
                var r = null == e ? void 0 : e[t];
                return !(!eU(r) || F && F in r) && (eT(r) ? B : D).test(eC(r)) ? r : void 0
            }
            ed.prototype.clear = function() {
                this.__data__ = eo ? eo(null) : {}, this.size = 0
            }, ed.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ed.prototype.get = function(e) {
                var t = this.__data__;
                if (eo) {
                    var r = t[e];
                    return r === o ? void 0 : r
                }
                return H.call(t, e) ? t[e] : void 0
            }, ed.prototype.has = function(e) {
                var t = this.__data__;
                return eo ? void 0 !== t[e] : H.call(t, e)
            }, ed.prototype.set = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = eo && void 0 === t ? o : t, this
            }, eg.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, eg.prototype.delete = function(e) {
                var t = this.__data__,
                    r = e_(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : Y.call(t, r, 1), --this.size, !0)
            }, eg.prototype.get = function(e) {
                var t = this.__data__,
                    r = e_(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, eg.prototype.has = function(e) {
                return e_(this.__data__, e) > -1
            }, eg.prototype.set = function(e, t) {
                var r = this.__data__,
                    n = e_(r, e);
                return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
            }, ey.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new ed,
                    map: new(er || eg),
                    string: new ed
                }
            }, ey.prototype.delete = function(e) {
                var t = eS(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, ey.prototype.get = function(e) {
                return eS(this, e).get(e)
            }, ey.prototype.has = function(e) {
                return eS(this, e).has(e)
            }, ey.prototype.set = function(e, t) {
                var r = eS(this, e),
                    n = r.size;
                return r.set(e, t), this.size += r.size == n ? 0 : 1, this
            }, ev.prototype.add = ev.prototype.push = function(e) {
                return this.__data__.set(e, o), this
            }, ev.prototype.has = function(e) {
                return this.__data__.has(e)
            }, em.prototype.clear = function() {
                this.__data__ = new eg, this.size = 0
            }, em.prototype.delete = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }, em.prototype.get = function(e) {
                return this.__data__.get(e)
            }, em.prototype.has = function(e) {
                return this.__data__.has(e)
            }, em.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof eg) {
                    var n = r.__data__;
                    if (!er || n.length < 199) return n.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new ey(n)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var eO = X ? function(e) {
                    return null == e ? [] : function(e, t) {
                        for (var r = -1, n = null == e ? 0 : e.length, i = 0, s = []; ++r < n;) {
                            var o = e[r];
                            t(o, r, e) && (s[i++] = o)
                        }
                        return s
                    }(X(e = Object(e)), function(t) {
                        return J.call(e, t)
                    })
                } : function() {
                    return []
                },
                eP = eb;

            function eC(e) {
                if (null != e) {
                    try {
                        return q.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }

            function eA(e, t) {
                return e === t || e != e && t != t
            }(et && eP(new et(new ArrayBuffer(1))) != E || er && eP(new er) != p || en && eP(en.resolve()) != y || ei && eP(new ei) != m || es && eP(new es) != b) && (eP = function(e) {
                var t = eb(e),
                    r = t == g ? e.constructor : void 0,
                    n = r ? eC(r) : "";
                if (n) switch (n) {
                    case ea:
                        return E;
                    case ec:
                        return p;
                    case eu:
                        return y;
                    case el:
                        return m;
                    case eh:
                        return b
                }
                return t
            });
            var eN = ew(function() {
                    return arguments
                }()) ? ew : function(e) {
                    return eL(e) && H.call(e, "callee") && !J.call(e, "callee")
                },
                ex = Array.isArray,
                eR = Q || function() {
                    return !1
                };

            function eT(e) {
                if (!eU(e)) return !1;
                var t = eb(e);
                return t == f || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function ej(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }

            function eU(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function eL(e) {
                return null != e && "object" == typeof e
            }
            var ek = j ? function(e) {
                return j(e)
            } : function(e) {
                return eL(e) && ej(e.length) && !!I[eb(e)]
            };
            e.exports = function(e, t) {
                return function e(t, r, n, i, s) {
                    return t === r || (null != t && null != r && (eL(t) || eL(r)) ? function(e, t, r, n, i, s) {
                        var o = ex(e),
                            f = ex(t),
                            y = o ? c : eP(e),
                            b = f ? c : eP(t);
                        y = y == a ? g : y, b = b == a ? g : b;
                        var D = y == g,
                            S = b == g,
                            I = y == b;
                        if (I && eR(e)) {
                            if (!eR(t)) return !1;
                            o = !0, D = !1
                        }
                        if (I && !D) return s || (s = new em), o || ek(e) ? eE(e, t, r, n, i, s) : function(e, t, r, n, i, s, o) {
                            switch (r) {
                                case E:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                    e = e.buffer, t = t.buffer;
                                case w:
                                    if (e.byteLength != t.byteLength || !s(new G(e), new G(t))) break;
                                    return !0;
                                case u:
                                case l:
                                case d:
                                    return eA(+e, +t);
                                case h:
                                    return e.name == t.name && e.message == t.message;
                                case v:
                                case _:
                                    return e == t + "";
                                case p:
                                    var a = U;
                                case m:
                                    var c = 1 & n;
                                    if (a || (a = L), e.size != t.size && !c) break;
                                    var f = o.get(e);
                                    if (f) return f == t;
                                    n |= 2, o.set(e, t);
                                    var g = eE(a(e), a(t), n, i, s, o);
                                    return o.delete(e), g;
                                case "[object Symbol]":
                                    if (ep) return ep.call(e) == ep.call(t)
                            }
                            return !1
                        }(e, t, y, r, n, i, s);
                        if (!(1 & r)) {
                            var O = D && H.call(e, "__wrapped__"),
                                P = S && H.call(t, "__wrapped__");
                            if (O || P) {
                                var C = O ? e.value() : e,
                                    A = P ? t.value() : t;
                                return s || (s = new em), i(C, A, r, n, s)
                            }
                        }
                        return !!I && (s || (s = new em), function(e, t, r, n, i, s) {
                            var o = 1 & r,
                                a = eD(e),
                                c = a.length;
                            if (c != eD(t).length && !o) return !1;
                            for (var u = c; u--;) {
                                var l = a[u];
                                if (!(o ? l in t : H.call(t, l))) return !1
                            }
                            var h = s.get(e);
                            if (h && s.get(t)) return h == t;
                            var f = !0;
                            s.set(e, t), s.set(t, e);
                            for (var p = o; ++u < c;) {
                                var d = e[l = a[u]],
                                    g = t[l];
                                if (n) var y = o ? n(g, d, l, t, e, s) : n(d, g, l, e, t, s);
                                if (!(void 0 === y ? d === g || i(d, g, r, n, s) : y)) {
                                    f = !1;
                                    break
                                }
                                p || (p = "constructor" == l)
                            }
                            if (f && !p) {
                                var v = e.constructor,
                                    m = t.constructor;
                                v != m && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof m && m instanceof m) && (f = !1)
                            }
                            return s.delete(e), s.delete(t), f
                        }(e, t, r, n, i, s))
                    }(t, r, n, i, e, s) : t != t && r != r)
                }(e, t)
            }
        },
        85346: function(e) {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, r, n) {
                var i = n && n.stringify || t;
                if ("object" == typeof e && null !== e) {
                    var s = r.length + 1;
                    if (1 === s) return e;
                    var o = Array(s);
                    o[0] = i(e);
                    for (var a = 1; a < s; a++) o[a] = i(r[a]);
                    return o.join(" ")
                }
                if ("string" != typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var u = "", l = 0, h = -1, f = e && e.length || 0, p = 0; p < f;) {
                    if (37 === e.charCodeAt(p) && p + 1 < f) {
                        switch (h = h > -1 ? h : 0, e.charCodeAt(p + 1)) {
                            case 100:
                            case 102:
                                if (l >= c || null == r[l]) break;
                                h < p && (u += e.slice(h, p)), u += Number(r[l]), h = p + 2, p++;
                                break;
                            case 105:
                                if (l >= c || null == r[l]) break;
                                h < p && (u += e.slice(h, p)), u += Math.floor(Number(r[l])), h = p + 2, p++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (l >= c || void 0 === r[l]) break;
                                h < p && (u += e.slice(h, p));
                                var d = typeof r[l];
                                if ("string" === d) {
                                    u += "'" + r[l] + "'", h = p + 2, p++;
                                    break
                                }
                                if ("function" === d) {
                                    u += r[l].name || "<anonymous>", h = p + 2, p++;
                                    break
                                }
                                u += i(r[l]), h = p + 2, p++;
                                break;
                            case 115:
                                if (l >= c) break;
                                h < p && (u += e.slice(h, p)), u += String(r[l]), h = p + 2, p++;
                                break;
                            case 37:
                                h < p && (u += e.slice(h, p)), u += "%", h = p + 2, p++, l--
                        }++l
                    }++p
                }
                return -1 === h ? e : (h < f && (u += e.slice(h)), u)
            }
        },
        63954: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.safeJsonParse = function(e) {
                if ("string" != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }, t.safeJsonStringify = function(e) {
                return "string" == typeof e ? e : JSON.stringify(e, (e, t) => void 0 === t ? null : t)
            }
        },
        57026: function(e) {
            "use strict";
            e.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        36559: function(e, t, r) {
            "use strict";
            let n = r(85346);
            e.exports = s;
            let i = function() {
                function e(e) {
                    return void 0 !== e && e
                }
                try {
                    if ("undefined" != typeof globalThis) return globalThis;
                    return Object.defineProperty(Object.prototype, "globalThis", {
                        get: function() {
                            return delete Object.prototype.globalThis, this.globalThis = this
                        },
                        configurable: !0
                    }), globalThis
                } catch (t) {
                    return e(self) || e(window) || e(this) || {}
                }
            }().console || {};

            function s(e) {
                var t;
                (e = e || {}).browser = e.browser || {};
                let r = e.browser.transmit;
                if (r && "function" != typeof r.send) throw Error("pino: transmit option must have a send function");
                let n = e.browser.write || i;
                e.browser.write && (e.browser.asObject = !0);
                let l = e.serializers || {},
                    h = function(e, t) {
                        if (Array.isArray(e)) {
                            let t = e.filter(function(e) {
                                return "!stdSerializers.err" !== e
                            });
                            return t
                        }
                        return !0 === e && Object.keys(t)
                    }(e.browser.serialize, l),
                    g = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (g = !1), "function" == typeof n && (n.error = n.fatal = n.warn = n.info = n.debug = n.trace = n), !1 === e.enabled && (e.level = "silent");
                let y = e.level || "info",
                    v = Object.create(n);
                v.log || (v.log = f), Object.defineProperty(v, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(v, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, o(m, v, "error", "log"), o(m, v, "fatal", "error"), o(m, v, "warn", "error"), o(m, v, "info", "log"), o(m, v, "debug", "log"), o(m, v, "trace", "log")
                    }
                });
                let m = {
                    transmit: r,
                    serialize: h,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: "function" == typeof(t = e).timestamp ? t.timestamp : !1 === t.timestamp ? p : d
                };
                return v.levels = s.levels, v.level = y, v.setMaxListeners = v.getMaxListeners = v.emit = v.addListener = v.on = v.prependListener = v.once = v.prependOnceListener = v.removeListener = v.removeAllListeners = v.listeners = v.listenerCount = v.eventNames = v.write = v.flush = f, v.serializers = l, v._serialize = h, v._stdErrSerialize = g, v.child = function(t, n) {
                    if (!t) throw Error("missing bindings for child Pino");
                    n = n || {}, h && t.serializers && (n.serializers = t.serializers);
                    let i = n.serializers;
                    if (h && i) {
                        var s = Object.assign({}, l, i),
                            o = !0 === e.browser.serialize ? Object.keys(s) : h;
                        delete t.serializers, a([t], o, s, this._stdErrSerialize)
                    }

                    function f(e) {
                        this._childLevel = (0 | e._childLevel) + 1, this.error = c(e, t, "error"), this.fatal = c(e, t, "fatal"), this.warn = c(e, t, "warn"), this.info = c(e, t, "info"), this.debug = c(e, t, "debug"), this.trace = c(e, t, "trace"), s && (this.serializers = s, this._serialize = o), r && (this._logEvent = u([].concat(e._logEvent.bindings, t)))
                    }
                    return f.prototype = this, new f(this)
                }, r && (v._logEvent = u()), v
            }

            function o(e, t, r, o) {
                let c = Object.getPrototypeOf(t);
                t[r] = t.levelVal > t.levels.values[r] ? f : c[r] ? c[r] : i[r] || i[o] || f,
                    function(e, t, r) {
                        if (e.transmit || t[r] !== f) {
                            var o;
                            t[r] = (o = t[r], function() {
                                let c = e.timestamp(),
                                    l = Array(arguments.length),
                                    h = Object.getPrototypeOf && Object.getPrototypeOf(this) === i ? i : this;
                                for (var f = 0; f < l.length; f++) l[f] = arguments[f];
                                if (e.serialize && !e.asObject && a(l, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? o.call(h, function(e, t, r, i) {
                                        e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                                        let o = r.slice(),
                                            c = o[0],
                                            u = {};
                                        i && (u.time = i), u.level = s.levels.values[t];
                                        let l = (0 | e._childLevel) + 1;
                                        if (l < 1 && (l = 1), null !== c && "object" == typeof c) {
                                            for (; l-- && "object" == typeof o[0];) Object.assign(u, o.shift());
                                            c = o.length ? n(o.shift(), o) : void 0
                                        } else "string" == typeof c && (c = n(o.shift(), o));
                                        return void 0 !== c && (u.msg = c), u
                                    }(this, r, l, c)) : o.apply(h, l), e.transmit) {
                                    let n = e.transmit.level || t.level,
                                        i = s.levels.values[n],
                                        o = s.levels.values[r];
                                    if (o < i) return;
                                    (function(e, t, r) {
                                        let n = t.send,
                                            i = t.ts,
                                            s = t.methodLevel,
                                            o = t.methodValue,
                                            c = t.val,
                                            l = e._logEvent.bindings;
                                        a(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = i, e._logEvent.messages = r.filter(function(e) {
                                            return -1 === l.indexOf(e)
                                        }), e._logEvent.level.label = s, e._logEvent.level.value = o, n(s, e._logEvent, c), e._logEvent = u(l)
                                    })(this, {
                                        ts: c,
                                        methodLevel: r,
                                        methodValue: o,
                                        transmitLevel: n,
                                        transmitValue: s.levels.values[e.transmit.level || t.level],
                                        send: e.transmit.send,
                                        val: t.levelVal
                                    }, l)
                                }
                            })
                        }
                    }(e, t, r)
            }

            function a(e, t, r, n) {
                for (let i in e)
                    if (n && e[i] instanceof Error) e[i] = s.stdSerializers.err(e[i]);
                    else if ("object" == typeof e[i] && !Array.isArray(e[i]))
                    for (let n in e[i]) t && t.indexOf(n) > -1 && n in r && (e[i][n] = r[n](e[i][n]))
            }

            function c(e, t, r) {
                return function() {
                    let n = Array(1 + arguments.length);
                    n[0] = t;
                    for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
                    return e[r].apply(this, n)
                }
            }

            function u(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function l() {
                return {}
            }

            function h(e) {
                return e
            }

            function f() {}

            function p() {
                return !1
            }

            function d() {
                return Date.now()
            }
            s.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, s.stdSerializers = {
                mapHttpRequest: l,
                mapHttpResponse: l,
                wrapRequestSerializer: h,
                wrapResponseSerializer: h,
                wrapErrorSerializer: h,
                req: l,
                res: l,
                err: function(e) {
                    let t = {
                        type: e.constructor.name,
                        msg: e.message,
                        stack: e.stack
                    };
                    for (let r in e) void 0 === t[r] && (t[r] = e[r]);
                    return t
                }
            }, s.stdTimeFunctions = Object.assign({}, {
                nullTime: p,
                epochTime: d,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);