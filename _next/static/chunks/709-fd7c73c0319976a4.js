(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [709], {
        77726: function(e, t, n) {
            "use strict";
            n.d(t, {
                V4: function() {
                    return i
                },
                dL: function() {
                    return a
                }
            });
            let a = [{
                    inputs: [{
                        internalType: "contract IERC20",
                        name: "token_",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "start_",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "TokensAllocated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "TokensClaimed",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "address[]",
                        name: "benificiaries",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    name: "allocateTokens",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address[]",
                        name: "beneficiaries",
                        type: "address[]"
                    }],
                    name: "claimTokens",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "duration",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "endDate",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }],
                    name: "getAllocatedTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }],
                    name: "getClaimableTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }],
                    name: "getClaimedTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256"
                    }],
                    name: "getReleasedTokensAtTimestamp",
                    outputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "initialReleasePercentage",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "start",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "token",
                    outputs: [{
                        internalType: "contract IERC20",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_start",
                        type: "uint256"
                    }],
                    name: "updateStart",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }],
                i = [{
                    inputs: [{
                        internalType: "contract IERC20",
                        name: "token_",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "start_",
                        type: "uint256"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "previousOwner",
                        type: "address"
                    }, {
                        indexed: !0,
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "OwnershipTransferred",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "TokensAllocated",
                    type: "event"
                }, {
                    anonymous: !1,
                    inputs: [{
                        indexed: !0,
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }, {
                        indexed: !1,
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    }],
                    name: "TokensClaimed",
                    type: "event"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newManager",
                        type: "address"
                    }],
                    name: "addManager",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address[]",
                        name: "benificiaries",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    name: "allocateTokens",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address[]",
                        name: "benificiaries",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "amounts",
                        type: "uint256[]"
                    }],
                    name: "allocateTokensForMultipleManager",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "benificiaries",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "allocateTokensManager",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "user",
                        type: "address"
                    }, {
                        internalType: "bool",
                        name: "isBlackList",
                        type: "bool"
                    }],
                    name: "blackList",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address[]",
                        name: "beneficiaries",
                        type: "address[]"
                    }],
                    name: "claimTokens",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "duration",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "endDate",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }],
                    name: "getAllocatedTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }],
                    name: "getClaimableTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }],
                    name: "getClaimedTokens",
                    outputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "beneficiary",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256"
                    }],
                    name: "getReleasedTokensAtTimestamp",
                    outputs: [{
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "initialReleasePercentage",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "lockEndDate",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "lockPeriod",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "owner",
                    outputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "manager",
                        type: "address"
                    }],
                    name: "removeManager",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "s_blackList",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "",
                        type: "address"
                    }],
                    name: "s_manager",
                    outputs: [{
                        internalType: "bool",
                        name: "",
                        type: "bool"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "start",
                    outputs: [{
                        internalType: "uint256",
                        name: "",
                        type: "uint256"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [],
                    name: "token",
                    outputs: [{
                        internalType: "contract IERC20",
                        name: "",
                        type: "address"
                    }],
                    stateMutability: "view",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "address",
                        name: "newOwner",
                        type: "address"
                    }],
                    name: "transferOwnership",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_lockPeriod",
                        type: "uint256"
                    }],
                    name: "updateLockPeriod",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }, {
                    inputs: [{
                        internalType: "uint256",
                        name: "_start",
                        type: "uint256"
                    }],
                    name: "updateStart",
                    outputs: [],
                    stateMutability: "nonpayable",
                    type: "function"
                }]
        },
        68285: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return a
                }
            });
            let a = {
                eth: 1,
                bsc: 56,
                polygon: 137,
                arbitrum: 42161,
                avalanche: 43114,
                fantom: 250,
                harmony: 16666e5,
                optimism: 10,
                gnosis: 100,
                heco: 128
            }
        },
        23314: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return w
                }
            });
            var a = n(77726),
                i = n(48623),
                s = n(46351),
                u = n(19930),
                p = n(8198),
                r = n(64146),
                l = n(2593),
                o = n(241),
                y = n(67294),
                d = n(86501),
                m = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"token_","type":"address"},{"internalType":"uint256","name":"start_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TokensAllocated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TokensClaimed","type":"event"},{"inputs":[{"internalType":"address[]","name":"benificiaries","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"allocateTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"beneficiaries","type":"address[]"}],"name":"claimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"duration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"beneficiary","type":"address"}],"name":"getAllocatedTokens","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"beneficiary","type":"address"}],"name":"getClaimableTokens","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"beneficiary","type":"address"}],"name":"getClaimedTokens","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"getReleasedTokensAtTimestamp","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialRealeseBuffer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialReleasePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"start","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lockedDuration","type":"uint256"}],"name":"updateLockDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_start","type":"uint256"}],"name":"updateStart","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),
                c = n(92365),
                f = n(89402),
                b = n(68285);
            let T = () => {
                let {
                    account: e,
                    provider: t
                } = (0, s.q)(), [n, T] = (0, y.useState)(null), [w, v] = (0, y.useState)("0.00"), {
                    currentContract: g
                } = (0, s.q)(), [h, M] = (0, y.useState)(!1), {
                    contractList: k
                } = (0, s.q)();
                new p.vU(m);
                let C = () => {
                        let e = Number(parseFloat(n || "0.00") - parseFloat(w)).toFixed(2),
                            t = e.toString();
                        return t
                    },
                    _ = async e => {
                        let n = new r.CH(g.address, a.dL, t),
                            i = await n.getClaimableTokens(e),
                            s = i.toString();
                        if (s.length < 19) {
                            let e = "";
                            for (let t = s.length; t < 19; t++) e += "0";
                            let t = e + s,
                                n = (0, u.$)(t, 4);
                            v(n)
                        } else {
                            let e = (0, u.$)(s, 4);
                            v(e)
                        }
                    },
                    P = () => {
                        if (!n) return "0";
                        let e = (parseFloat(null != n ? n : 0) - parseFloat(w)).toFixed(2),
                            t = (100 * parseFloat(null != e ? e : 0) / parseFloat(null != n ? n : 0)).toFixed(2);
                        return Number(t) ? t.toString() : 0
                    },
                    S = async e => {
                        M(!0);
                        let n = "0000000000000000000",
                            i = [];
                        for (let n = 0; n < k.length; n++) {
                            let s = new r.CH(k[n].address, a.dL, t),
                                u = (await s.getAllocatedTokens(e)).toString();
                            if (console.log({
                                    allocatedToken: u
                                }), u.length < 19) {
                                let e = "";
                                for (let t = u.length; t < 19; t++) e += "0";
                                i.push(e + u)
                            } else i.push(u)
                        }
                        for (let e = 0; e < i.length; e++) n = l.O$.from(n).add(l.O$.from(i[e])).toString();
                        if (n.length < 19) {
                            let e = "";
                            for (let t = n.length; t < 19; t++) e += "0";
                            let t = e + n,
                                a = (0, u.$)(t, 2);
                            T(a), M(!1)
                        } else {
                            let e = (0, u.$)(n, 2);
                            T(e), M(!1)
                        }
                    },
                    x = async e => {
                        M(!0);
                        let n = "0000000000000000000",
                            i = [];
                        for (let n = 0; n < k.length; n++) {
                            let s = new r.CH(k[n].address, a.dL, t),
                                u = (await s.getClaimableTokens(e)).toString();
                            if (u.length < 19) {
                                let e = "";
                                for (let t = u.length; t < 19; t++) e += "0";
                                i.push(e + u)
                            } else i.push(u)
                        }
                        for (let e = 0; e < i.length; e++) n = l.O$.from(n).add(l.O$.from(i[e])).toString();
                        if (n.length < 19) {
                            let e = "";
                            for (let t = n.length; t < 19; t++) e += "0";
                            let t = e + n,
                                a = (0, u.$)(t, 2);
                            v(a)
                        } else {
                            let e = (0, u.$)(n, 2);
                            v(e)
                        }
                    },
                    O = async e => {
                        M(!0);
                        let n = new r.CH(g.address, a.dL, t),
                            i = await n.getAllocatedTokens(e),
                            s = i.toString();
                        if (s.length < 19) {
                            let e = "";
                            for (let t = s.length; t < 19; t++) e += "0";
                            let t = e + s,
                                n = (0, u.$)(t, 4);
                            M(!1), T(n)
                        } else {
                            let e = (0, u.$)(s, 4);
                            M(!1), T(e)
                        }
                    },
                    Z = async () => {
                        let e = new r.CH(i.AH, a.V4, t);
                        return await e.lockEndDate()
                    },
                    E = (e, t) => {
                        d.ZP.dismiss(), e && ("ACTION_REJECTED" === e.code || 4001 === e.code) ? d.ZP.error("You have rejected the transaction.") : e && ("INSUFFICIENT_FUNDS" === e.code || e.error && -32e3 === e.error.code || e.data && -32e3 === e.data.code) ? d.ZP.error("Insufficient funds in your wallet") : e && (null == e ? void 0 : e.message) ? d.ZP.error("Error occured. Please check your transaction details in block explorer.") : t && d.ZP.error(t)
                    },
                    I = async () => {
                        await (0, f.I)(b.B.polygon);
                        try {
                            if (e) {
                                if ((null == window ? void 0 : window.ethereum) !== void 0) {
                                    d.ZP.dismiss(), d.ZP.loading("Please wait, your request is in processing...", {
                                        duration: 1 / 0
                                    });
                                    let t = new o.Q(window.ethereum),
                                        n = t.getSigner(),
                                        s = new r.CH(i.AH, a.V4, n),
                                        u = await s.claimTokens([e], {
                                            gasLimit: 1e5
                                        });
                                    await u.wait(), d.ZP.dismiss(), d.ZP.success("Successfully Claimed")
                                } else {
                                    let t = new c.Z({
                                        infuraId: i.Kr,
                                        qrcode: !0
                                    });
                                    await t.enable();
                                    let n = new o.Q(t),
                                        s = n.getSigner(),
                                        u = new r.CH(i.AH, a.V4, s),
                                        p = await u.claimTokens([e], {
                                            gasLimit: 1e6
                                        });
                                    await p.wait(), d.ZP.dismiss(), d.ZP.success("Successfully Claimed")
                                }
                            } else d.ZP.dismiss(), d.ZP.error("Connect Wallet")
                        } catch (e) {
                            console.log(e), E(e, "Failed to claim tokens. Please check transaction details in block explorer.")
                        }
                    };
                return {
                    getAllocatedTokens: O,
                    allocatedTokens: n,
                    provider: t,
                    isCalculatingAll: h,
                    getLockedToken: C,
                    getLockedTokenPercentage: P,
                    claimTokens: I,
                    getAllClaimableTokens: x,
                    setClaimedTokens: v,
                    getClaimableTokens: _,
                    getAllAllocatedTokens: S,
                    setAllocatedTokens: T,
                    claimedTokens: w,
                    getLockendDate: Z
                }
            };
            var w = T
        },
        873: function(e, t, n) {
            "use strict";
            var a = n(67294);
            let i = () => {
                let [e, t] = (0, a.useState)(!1), n = () => t(!0), i = () => t(!1), s = () => t(e => !e);
                return {
                    isOpen: e,
                    onClose: i,
                    onOpen: n,
                    onToggle: s
                }
            };
            t.Z = i
        },
        96630: function(e, t, n) {
            "use strict";
            var a = n(67294);
            let i = () => {
                let [e, t] = (0, a.useState)([]), [n, i] = (0, a.useState)(null), [s, u] = (0, a.useState)(!1), p = () => {
                    t([]), u(!1)
                }, [r, l] = (0, a.useState)(!1), o = async e => {
                    l(!0), fetch("https://rensketech.com/api/scrach_cards/filter_orders/", {
                        method: "POST",
                        body: JSON.stringify(e)
                    }).then(e => e.json()).then(e => {
                        var n, a, s, u, p, r, l;
                        t(() => null == e ? void 0 : e.orders), i({
                            bonus_tokens: (null == e ? void 0 : null === (n = e.bonus) || void 0 === n ? void 0 : n.bonus_tokens) || 0,
                            cards_claimed: (null == e ? void 0 : null === (a = e.bonus) || void 0 === a ? void 0 : a.cards_claimed) || 0,
                            id: -1,
                            last_claimed: (null == e ? void 0 : null === (s = e.bonus) || void 0 === s ? void 0 : s.last_claimed) || 0,
                            nfts: (null == e ? void 0 : null === (u = e.bonus) || void 0 === u ? void 0 : u.nfts) || 0,
                            nfts_dates: (null == e ? void 0 : null === (p = e.bonus) || void 0 === p ? void 0 : p.nfts_dates) || "",
                            wallet_address: (null == e ? void 0 : null === (r = e.bonus) || void 0 === r ? void 0 : r.wallet_address) || "",
                            ypred_balance: (null == e ? void 0 : null === (l = e.bonus) || void 0 === l ? void 0 : l.ypred_balance) || 0
                        })
                    }).catch(e => {}).finally(() => {
                        l(!1), u(!0)
                    })
                };
                return {
                    orders: e,
                    fetchOrders: o,
                    isLoading: r,
                    resetOrders: p,
                    isFetched: s,
                    bonus: n
                }
            };
            t.Z = i
        },
        89402: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return s
                }
            });
            var a = n(241),
                i = n(86501);
            let s = async function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!window.ethereum) {
                    window.location.assign("dapp://ypredict.ai");
                    return
                }
                let n = new a.Q(window.ethereum);
                try {
                    t && await n.send("wallet_addEthereumChain", [{
                        chainId: "0x" + e.toString(16),
                        chainName: "Polygon Mainnet",
                        rpcUrls: ["https://polygon-rpc.com"],
                        nativeCurrency: {
                            decimals: 18,
                            name: "Polygon",
                            symbol: "MATIC"
                        },
                        blockExplorerUrls: ["https://polygonscan.com/"]
                    }]);
                    let a = await n.getNetwork();
                    if (a.chainId !== e) return i.ZP.dismiss(), i.ZP.loading("Please switch network", {
                        duration: 1 / 0
                    }), n.send("wallet_switchEthereumChain", [{
                        chainId: "0x" + e.toString(16)
                    }])
                } catch (e) {
                    t && 4902 === e.code && i.ZP.error("Please add the network first.")
                } finally {
                    i.ZP.dismiss()
                }
            }
        },
        36563: function() {},
        89214: function() {},
        85568: function() {},
        40127: function() {},
        27790: function() {},
        52361: function() {},
        94616: function() {}
    }
]);