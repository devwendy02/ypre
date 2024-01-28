"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [688], {
        29695: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return K
                }
            });
            var s = a(85893),
                i = a(25675),
                n = a.n(i),
                r = a(67294),
                l = a(82169),
                o = a(64146),
                c = a(2593);
            a(241), a(57632);
            let d = [{
                inputs: [],
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
                    indexed: !1,
                    internalType: "address",
                    name: "account",
                    type: "address"
                }],
                name: "Paused",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "account",
                    type: "address"
                }],
                name: "Unpaused",
                type: "event"
            }, {
                inputs: [{
                    internalType: "int256",
                    name: "amount",
                    type: "int256"
                }],
                name: "_getPriceOfGivenTokenInMatic",
                outputs: [{
                    internalType: "int256",
                    name: "",
                    type: "int256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "buyTokensMATIC",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "buyTokensUSDT",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "i_matic_usd_priceFeed",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "i_usdt_usd_priceFeed",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
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
                name: "pause",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "paused",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
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
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "s_investemetByAddress",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "s_maxAmountToInvest",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "s_minAmountToInvest",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "s_tokenSold",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "s_tokensForSale",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "s_usdt",
                outputs: [{
                    internalType: "contract IERC20",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "s_usdtPrice",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "s_vesting",
                outputs: [{
                    internalType: "contract IVestingHub",
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
                inputs: [],
                name: "unpause",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "updateMaxInvestment",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "updateMinInvestment",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "newPrice",
                    type: "uint256"
                }],
                name: "updatePrice",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract IERC20",
                    name: "usdt",
                    type: "address"
                }],
                name: "updateUsdt",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract IVestingHub",
                    name: "newVesting",
                    type: "address"
                }],
                name: "updateVesting",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "withdraw",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }];
            var x = a(873),
                p = a(96630),
                m = a(86501),
                u = a(37918),
                f = a.n(u);
            let h = e => {
                    let {
                        isOpen: t,
                        onClose: a,
                        order: i
                    } = e, [n, l] = (0, r.useState)(""), [o, c] = (0, r.useState)(""), d = () => {
                        fetch("https://rensketech.com/api/scrach_cards/email/", {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                walletAdress: i.address,
                                from: n,
                                email: o
                            })
                        }).then(e => e.json()).then(e => {
                            (null == e ? void 0 : e.response) === "success" ? (m.ZP.success("Allocation requested, It takes upto 12 hours for team to verify & allocate tokens to your provided wallet", {
                                duration: 5e3
                            }), a()) : m.ZP.error("Error! Please Try Again.")
                        }, e => {
                            m.ZP.error("Error! Please Try Again.")
                        })
                    };
                    return (0, r.useEffect)(() => {
                        c(i.email), l(i._from)
                    }, [i]), t ? (0, s.jsxs)("div", {
                        className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3 sm:px-0",
                        children: [(0, s.jsx)("div", {
                            className: "absolute top-0 right-0 left-0 bottom-0 bg-neutral-900 opacity-40",
                            onClick: a
                        }), (0, s.jsxs)("div", {
                            className: "relative w-auto my-0 md:my-6 mx-auto max-w-3xl md:max-w-full",
                            children: [(0, s.jsx)("div", {
                                className: "absolute z-10 right-2 md:px-1 top-1 items-stretch px-0 py-1 text-black-500 font-bold uppercase outline-1 text-lg",
                                children: (0, s.jsx)("button", {
                                    className: "float-right align-right px-1 md:px-3 text-2xl",
                                    type: "button",
                                    onClick: a,
                                    children: "X"
                                })
                            }), (0, s.jsxs)("div", {
                                className: "max-h-screen w-[95vw] md:w-[80vw] lg:w-[60vw] xl:w-[40vw] min-h-[15rem] relative border-0 rounded-2xl shadow-lg flex flex-col justify-between bg-white outline-none focus:outline-none overflow-y-auto overflow-x-hidden text-sm lg-text-lg py-4 pt-0 px-6 md:px-10 ",
                                children: [(0, s.jsx)("div", {
                                    className: "w-[100%] h-[6px] bg-black self-center rounded-xl mb-2",
                                    style: {
                                        background: "radial-gradient(circle at top left, #f03985, #5144f8)"
                                    }
                                }), (0, s.jsxs)("div", {
                                    className: "flex-1 w-full h-fit mt-4",
                                    children: [(0, s.jsx)("h3", {
                                        className: "text-center font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF387A]  via-[#A63EBA]  to-[#4845FF]",
                                        children: "Please confirm the address to which you would like to allocate your tokens"
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col items-center mt-[24px]",
                                        children: [(0, s.jsx)("div", {
                                            className: "w-full max-w-[350px]",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-center space-x-1 border p-2 rounded-xl",
                                                children: [(0, s.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-4 w-4",
                                                    viewBox: "0 0 417.6 417.6",
                                                    children: (0, s.jsx)("g", {
                                                        children: (0, s.jsx)("g", {
                                                            children: (0, s.jsxs)("g", {
                                                                children: [(0, s.jsx)("path", {
                                                                    fill: "#E53B8E",
                                                                    d: "M409.6,154.6c-5.2-4.8-12-8-19.6-8c0.4,0,0.8,0,1.2,0v-41.2c0-16.8-6.8-32-18-43.2c-11.2-11.2-26.4-18-43.2-18H61.2     c-16.8,0-32,6.8-43.2,18C6.8,73.4,0,88.6,0,105.4v206.8c0,16.8,6.8,32,18,43.2s26.4,18,43.2,18H330c16.8,0,32-6.8,43.2-18     s18-26.4,18-43.2v-41.6c-0.4,0-0.8,0-1.2,0c7.6,0,14.4-3.2,19.6-8c4.8-4.8,8-12,8-19.6v-68.8     C417.6,166.6,414.4,159.8,409.6,154.6z M369.2,311.8c0,10.8-4.4,20.4-11.6,27.6S340.8,351,330,351H61.2     c-10.8,0-20.4-4.4-27.6-11.6c-7.2-7.2-11.6-16.8-11.6-27.6V105.4c0-10.8,4.4-20.4,11.6-27.6c7.2-7.2,16.8-11.6,27.6-11.6H330     c10.8,0,20.4,4.4,27.6,11.6s11.6,16.8,11.6,27.6v41.2h-124c-16.8,0-31.6,6.8-42.8,17.6c-10.8,10.8-17.6,26-17.6,42.8v2.8     c0,16.8,6.8,31.6,17.6,42.8c10.8,10.8,26,17.6,42.8,17.6h124V311.8z M395.6,243L395.6,243c0,1.6-0.8,3.2-1.6,4     c-1.2,1.2-2.4,1.6-4,1.6H245.2c-10.4,0-20.4-4.4-27.2-11.2s-11.2-16.8-11.2-27.2v-2.8c0-10.8,4.4-20.4,11.2-27.2     c7.2-7.2,16.8-11.2,27.2-11.2H390c1.6,0,3.2,0.8,4,1.6c1.2,1.2,1.6,2.4,1.6,4V243z"
                                                                }), (0, s.jsx)("path", {
                                                                    fill: "#E53B8E",
                                                                    d: "M248,190.6c-4.8,0-9.2,2-12.4,5.2c-3.2,3.2-5.2,7.6-5.2,12.4s2,9.2,5.2,12.4s7.6,5.2,12.4,5.2s9.2-2,12.8-5.2     c3.2-3.2,5.2-7.6,5.2-12.8c0-4.8-2-9.2-5.2-12.8C257.2,192.6,252.8,190.6,248,190.6z"
                                                                })]
                                                            })
                                                        })
                                                    })
                                                }), (0, s.jsx)("input", {
                                                    value: n,
                                                    onChange: e => l(e.target.value),
                                                    className: "w-full border-black outline-0 text-[#A0A0A0] text-[12px] text-center placeholder-gray-500",
                                                    placeholder: "Enter your address"
                                                })]
                                            })
                                        }), (0, s.jsx)("div", {
                                            className: "w-full max-w-[350px] mt-[24px] mb-[32px]",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-center space-x-1 border p-2 rounded-xl",
                                                children: [(0, s.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-4 w-4",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, s.jsx)("path", {
                                                        fill: "#E53B8E",
                                                        d: "M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"
                                                    })
                                                }), (0, s.jsx)("input", {
                                                    value: o,
                                                    readOnly: !0,
                                                    onChange: e => c(e.target.value),
                                                    className: "w-full border-black outline-0 text-[#A0A0A0] text-[12px] text-center placeholder-gray-500",
                                                    placeholder: "Enter your email"
                                                })]
                                            })
                                        }), (0, s.jsxs)("button", {
                                            disabled: !o || !o.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
                                            onClick: d,
                                            className: "flex mt-1 flex-row justify-center items-center btn-grad-1 self-center w-full max-w-[300px] text-center disabled:opacity-60",
                                            children: [(0, s.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-4 w-4",
                                                children: (0, s.jsxs)("g", {
                                                    id: "Icons",
                                                    children: [(0, s.jsx)("path", {
                                                        fill: "#fff",
                                                        d: "m12 18a1 1 0 0 1 -1-1v-15a1 1 0 0 1 2 0v15a1 1 0 0 1 -1 1z"
                                                    }), (0, s.jsx)("path", {
                                                        fill: "#fff",
                                                        d: "m9 5a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.42l3-3a1 1 0 1 1 1.42 1.42l-3 3a1 1 0 0 1 -.71.29z"
                                                    }), (0, s.jsx)("path", {
                                                        fill: "#fff",
                                                        d: "m15 5a1 1 0 0 1 -.71-.29l-3-3a1 1 0 0 1 1.42-1.42l3 3a1 1 0 0 1 0 1.42 1 1 0 0 1 -.71.29z"
                                                    }), (0, s.jsx)("path", {
                                                        fill: "#fff",
                                                        d: "m19 24h-14a5 5 0 0 1 -5-5v-10a1 1 0 0 1 .4-.8l4-3a1 1 0 0 1 1.2 1.6l-3.6 2.7v9.5a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9.5l-3.6-2.7a1 1 0 0 1 1.2-1.6l4 3a1 1 0 0 1 .4.8v10a5 5 0 0 1 -5 5z"
                                                    })]
                                                })
                                            }), (0, s.jsx)("span", {
                                                className: "pl-2",
                                                children: "Request allocation"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    }) : null
                },
                y = {
                    PE: "Payment not received.",
                    AL: "Allocation success.",
                    PA: "Payment received, allocation pending."
                },
                k = e => {
                    let {
                        orders: t
                    } = e, [a, i] = (0, r.useState)({}), n = (e, t, a) => "Transaction underpaid by ".concat(e, " ").concat(t, ". Please pay the ").concat(e, " ").concat(t, ' to your assigned wallet address and notify support via email (<a style="color:dodgerblue;" href="mailto:help@ypredict.ai">help@ypredict.ai</a>) Payment Wallet Address: ').concat(a, "."), {
                        isOpen: l,
                        onClose: o,
                        onOpen: c
                    } = (0, x.Z)();
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(h, {
                            isOpen: l,
                            onClose: o,
                            order: a
                        }), (0, s.jsxs)("table", {
                            className: "w-full min-w-fit divide-y divide-gray-200 min-h-[10rem]",
                            children: [(0, s.jsx)("thead", {
                                className: "bg-gray-100 w-full sticky top-0 z-10",
                                children: (0, s.jsx)("tr", {
                                    children: ["Date & Time", "Amount", "Amount Paid", "YPRED", "Allocation Address", "Paid to", "Email", "Allocation Status"].map((e, t) => (0, s.jsx)("th", {
                                        className: "w-fit py-3 px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 whitespace-nowrap",
                                        children: e
                                    }, t))
                                })
                            }), (0, s.jsx)("tbody", {
                                className: "bg-white divide-y divide-gray-200",
                                children: null == t ? void 0 : t.map((e, t) => (0, s.jsxs)("tr", {
                                    className: "hover:bg-gray-100",
                                    children: [(0, s.jsx)("td", {
                                        className: "py-2 px-3 text-xs font-normal text-gray-700 max-w-[300px]",
                                        children: "".concat(new Date(e.datetime).toLocaleDateString(), ", ").concat(new Date(e.datetime).toLocaleTimeString())
                                    }), (0, s.jsxs)("td", {
                                        className: "py-2 px-3 text-xs font-normal text-gray-700 whitespace-nowrap",
                                        children: [e.value, " ", e.currency]
                                    }), (0, s.jsxs)("td", {
                                        className: "py-2 px-3 text-xs font-normal text-gray-700 whitespace-nowrap",
                                        children: [e.balance, " ", e.currency]
                                    }), (0, s.jsxs)("td", {
                                        className: "py-2 px-3 text-xs font-normal text-gray-700 whitespace-nowrap",
                                        children: [e.ypred, " YPRED"]
                                    }), (0, s.jsxs)("td", {
                                        className: "py-2 px-3 text-xs font-normal text-gray-700",
                                        children: [(0, s.jsx)("p", {
                                            children: (null == e ? void 0 : e._from) || "NA, Contact support"
                                        }), "PA" === e.status && (0, s.jsx)("button", {
                                            onClick: () => {
                                                c(), i(e)
                                            },
                                            className: "text-skin-pink underline mt-2",
                                            children: "Request Allocation"
                                        })]
                                    }), (0, s.jsx)("td", {
                                        className: "py-2 px-3 text-xs font-normal text-gray-700",
                                        children: null == e ? void 0 : e.address
                                    }), (0, s.jsx)("td", {
                                        className: "py-2 px-3 text-xs font-normal text-gray-700",
                                        children: null == e ? void 0 : e.email
                                    }), (0, s.jsx)("td", {
                                        className: "py-2 px-3 text-xs font-normal text-gray-700 max-w-fit min-w-[300px]",
                                        children: (null == e ? void 0 : e.status) === "UP" ? (0, s.jsx)("p", {
                                            dangerouslySetInnerHTML: {
                                                __html: "".concat(n(Number(Number(null == e ? void 0 : e.value) - e.balance), e.currency, e.address))
                                            }
                                        }) : y[null == e ? void 0 : e.status] || ""
                                    })]
                                }, t))
                            })]
                        })]
                    })
                },
                b = e => {
                    let {
                        isOpen: t,
                        onClose: a
                    } = e, [i, n] = (0, r.useState)(), [l, o] = (0, r.useState)(""), {
                        fetchOrders: c,
                        orders: d,
                        resetOrders: x,
                        isLoading: u,
                        isFetched: h
                    } = (0, p.Z)(), y = async e => {
                        if (e.preventDefault(), !i) return m.ZP.error("Please choose email or address");
                        try {
                            await c({
                                [i]: l
                            })
                        } catch (e) {}
                    };
                    return (0, r.useEffect)(() => {
                        t || (o(""), x())
                    }, [t]), t ? (0, s.jsxs)("div", {
                        className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3 sm:px-0",
                        children: [(0, s.jsx)("div", {
                            className: "absolute top-0 right-0 left-0 bottom-0 bg-neutral-900 opacity-25",
                            onClick: a
                        }), (0, s.jsxs)("div", {
                            className: "relative w-auto my-0 md:my-6 mx-auto max-w-3xl md:max-w-full",
                            children: [(0, s.jsx)("div", {
                                className: "absolute z-10 right-2 md:px-1 top-1 items-stretch px-0 py-1 text-black-500 font-bold uppercase outline-1 text-lg",
                                children: (0, s.jsx)("button", {
                                    className: "float-right align-right px-1 md:px-3 text-2xl",
                                    type: "button",
                                    onClick: a,
                                    children: "X"
                                })
                            }), (0, s.jsxs)("div", {
                                className: "max-h-screen w-[98vw] md:w-[90vw] lg:w-[80vw] xl:w-[70vw] min-h-[15rem] relative border-0 rounded-2xl shadow-lg flex flex-col justify-between bg-white outline-none focus:outline-none overflow-y-auto overflow-x-hidden text-sm lg-text-lg py-4 pt-0 px-6 md:px-10 ",
                                children: [(0, s.jsx)("div", {
                                    className: "w-[100%] h-[6px] bg-black self-center rounded-xl mb-2",
                                    style: {
                                        background: "radial-gradient(circle at top left, #f03985, #5144f8)"
                                    }
                                }), (0, s.jsxs)("div", {
                                    className: "flex-1 w-full h-fit mt-4",
                                    children: [(0, s.jsx)("h3", {
                                        className: "text-center font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#FF387A]  via-[#A63EBA]  to-[#4845FF]",
                                        children: "Check allocation status by wallet address / email"
                                    }), (0, s.jsx)("div", {
                                        className: "w-full max-w-[350px] mx-auto mt-[24px] mb-[32px]",
                                        children: (0, s.jsxs)("form", {
                                            onSubmit: y,
                                            children: [(0, s.jsxs)("select", {
                                                value: i,
                                                onChange: e => n(e.target.value),
                                                className: "border p-2 rounded-xl w-full outline-0 text-sm text-center placeholder-gray-400 ".concat(i ? "text-gray-600" : "gray-400"),
                                                children: [(0, s.jsx)("option", {
                                                    value: "",
                                                    children: "Choose type"
                                                }), (0, s.jsx)("option", {
                                                    value: "email",
                                                    children: "Email"
                                                }), (0, s.jsx)("option", {
                                                    value: "from",
                                                    children: "Address"
                                                })]
                                            }), (0, s.jsx)("input", {
                                                value: l,
                                                onChange: e => o(e.target.value),
                                                className: "mt-4 border p-2 rounded-xl w-full outline-0 text-sm text-center text-gray-600 placeholder-gray-400",
                                                placeholder: "Wallet address or email"
                                            }), (0, s.jsxs)("button", {
                                                onClick: () => {},
                                                type: "submit",
                                                disabled: u || !i || !l || "from" === i && !f().utils.isAddress(l) || "email" === i && !l.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
                                                className: "flex disabled:opacity-60 mt-4 flex-row justify-center items-center btn-grad-1 mb-4 self-center w-full text-center",
                                                children: [u && (0, s.jsx)("img", {
                                                    className: "w-5 h-5",
                                                    src: "img/icon/img-loading.gif"
                                                }), "Check status"]
                                            })]
                                        })
                                    }), (null == d ? void 0 : d.length) > 0 && (0, s.jsx)("div", {
                                        className: "mt-4 w-full overflow-auto pb-4 max-h-[500px]",
                                        children: (0, s.jsx)(k, {
                                            orders: d
                                        })
                                    }), h && 0 === d.length && (0, s.jsx)("p", {
                                        className: "text-center text-gray-600 text-sm",
                                        children: "No orders found"
                                    })]
                                })]
                            })]
                        })]
                    }) : null
                };
            var w = a(1954),
                g = a(23939),
                v = a(23314),
                j = a(46351),
                N = a(12308),
                E = a(55362),
                S = a(48764);
            let A = () => {
                    let e = async e => fetch("https://rensketech.com/api/scrach_cards/mark-card-payment/", {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }
                    }).then(e => e.json());
                    return {
                        markPayment: e
                    }
                },
                D = {
                    color_background: "transparent",
                    color_buttons: "#ffffff",
                    color_buttons_text: "#f327f2",
                    theme: "dark"
                },
                B = e => {
                    let {
                        value: t,
                        ypredAmount: a,
                        onSuccess: i,
                        inputUSD: n,
                        USDT: l
                    } = e, {
                        markPayment: o
                    } = A(), {
                        account: c
                    } = (0, j.q)(), d = sessionStorage.getItem("clickId"), x = new(f())(window.ethereum), p = () => {
                        window.plausible("sale-final", {
                            revenue: {
                                currency: "USD",
                                amount: Number(l)
                            }
                        })
                    }, u = e => {
                        null == window || window.dataLayer.push({
                            event: "workflowStep",
                            workflowName: "swap",
                            workflowStepNumber: 3,
                            workflowStepName: "swapSuccessful",
                            workflowCompleteFlag: 1,
                            workflowErrorCode: "",
                            walletAddress: null == c ? void 0 : c.toLowerCase(),
                            transactionId: e,
                            swapFromCurrency: "usd",
                            swapFromValue: n,
                            swapToCurrency: "$YPRED",
                            swapToValue: a
                        })
                    }, h = e => {
                        null == window || window.fbq("track", "Purchase", {
                            value: e,
                            currency: "USD"
                        })
                    }, y = () => {
                        null == window || window.dataLayer.push({
                            event: "workflowStep",
                            workflowName: "swap",
                            workflowStepNumber: 2,
                            workflowStepName: "confirmTransaction",
                            workflowCompleteFlag: 0,
                            workflowErrorCode: "",
                            walletAddress: c
                        })
                    }, k = x.eth.abi.encodeFunctionCall({
                        inputs: [{
                            internalType: "address",
                            name: "user",
                            type: "address"
                        }],
                        name: "buyTokensWert",
                        outputs: [],
                        stateMutability: "payable",
                        type: "function"
                    }, [c]), b = (0, E.signSmartContractData)({
                        address: c,
                        commodity: "MATIC",
                        network: "polygon",
                        sc_address: "0xA728Aa2De568766E2Fa4544Ec7A77f79c0bf9F97",
                        sc_input_data: k,
                        commodity_amount: t
                    }, "0xb669a45a0622b4e5792e0689504335f0144c21fb457182cf2badd1bc43935a00"), w = {
                        partner_id: "01GYWK6RTTBHQ5R99A1N30WE48",
                        origin: "https://widget.wert.io",
                        container_id: "widget-widget",
                        click_id: d,
                        autosize: !0,
                        ...D,
                        currency: "USD",
                        listeners: {
                            loaded: () => console.log("loaded"),
                            "payment-status": async e => {
                                if ("success" === e.status) try {
                                    i(), await o({
                                        clickId: d
                                    }), u((null == e ? void 0 : e.tx_id) || ""), p(), h(l)
                                } catch (e) {
                                    m.ZP.error("Transaction failed.")
                                }
                                "failed" === e.status && m.ZP.error("Transaction failed."), "pending" === e.status && y()
                            }
                        },
                        ...b
                    };
                    return (0, r.useEffect)(() => {
                        window.Buffer = S.Buffer
                    }, []), (0, s.jsx)(N.Z, {
                        options: w
                    })
                };
            var T = a(86010),
                F = a(42746);
            a(61744);
            var P = a(68285),
                V = a(89402);
            let C = () => {
                let e = async e => fetch("https://rensketech.com/api/scrach_cards/create-order/", {
                    method: "POST",
                    body: JSON.stringify(e),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    }
                }).then(e => e.json());
                return {
                    createOrder: e
                }
            };
            var _ = a(11163);
            let G = () => {
                    let e = async e => fetch("https://rensketech.com/api/scrach_cards/check-transaction/", {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        }
                    }).then(e => e.json());
                    return {
                        checkTransaction: e
                    }
                },
                M = () => {
                    let [e, t] = (0, r.useState)({
                        price: .1,
                        round: 7,
                        raised: 5e4,
                        target: 16e6,
                        next_price: .11,
                        percent_increase: 11.11,
                        ypred_sum: 0
                    }), [a, s] = (0, r.useState)(!1), i = async () => {
                        s(!0), fetch("https://rensketech.com/api/scrach_cards/round/").then(e => e.json()).then(e => {
                            let {
                                data: a
                            } = e;
                            t(a)
                        }).catch(e => {}).finally(() => {
                            s(!1)
                        })
                    };
                    return (0, r.useEffect)(() => {
                        i()
                    }, []), {
                        round: e,
                        isLoadingRound: a
                    }
                },
                z = {
                    1: 72e3,
                    2: 3e5,
                    3: 60551.25,
                    4: 5e5,
                    5: 7e5,
                    6: 135e4,
                    7: 16e5,
                    8: 1925e3
                },
                O = e => {
                    let t = 0;
                    return Object.entries(z).forEach(a => {
                        let [s, i] = a;
                        parseInt(s) < e && (t += i)
                    }), t
                };
            var I = a(9008),
                U = a.n(I),
                Z = a(69260),
                R = a.n(Z),
                L = JSON.parse('{"v":"5.6.3","fr":29.9700012207031,"ip":0,"op":47.0000019143492,"w":1920,"h":1080,"nm":"Successful","ddd":0,"assets":[],"fonts":{"list":[{"fName":"SFUIDisplay-Bold","fFamily":"SF UI Display","fStyle":"Bold","ascent":73.828125}]},"layers":[{"ddd":0,"ind":1,"ty":5,"nm":"Payment Successful","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[0]},{"t":37.0000015070409,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[664.641,864,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"t":{"d":{"k":[{"s":{"s":64,"f":"SFUIDisplay-Bold","t":"Payment Successful","j":0,"tr":0,"lh":76.8,"ls":0,"fc":[0,1,0.592]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":47.0000019143492,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"check","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[961.141,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[376.304,376.304,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-23,-3.5],[-7.5,12],[20.5,-16]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":14,"s":[0]},{"t":27.0000010997325,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":47.0000019143492,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"elipse bold","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":14,"s":[81]},{"t":27.0000010997325,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,535.5,0],"ix":2},"a":{"a":0,"k":[-62,-4.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[41.25,41.25,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":14,"s":[532.5,532.5,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":21,"s":[413.25,413.25,100]},{"t":27.0000010997325,"s":[508.75,508.75,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[80,80],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0,1,0.590551338944,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-62,-4.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":47.0000019143492,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"elipse light","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":14,"s":[80]},{"t":27.0000010997325,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,535.5,0],"ix":2},"a":{"a":0,"k":[-60.75,-4.5,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":14,"s":[530,530,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":21,"s":[431,431,100]},{"t":27.0000010997325,"s":[535,535,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[122.5,122.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.501960754395,1,0.794924986596,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-60.75,-4.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":47.0000019143492,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"stars","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":21,"s":[100]},{"t":33.0000013441176,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[89.979,89.979,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":21,"s":[440.397,440.397,100]},{"t":33.0000013441176,"s":[554.944,554.944,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"sr","sy":1,"d":1,"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"r":{"a":0,"k":0,"ix":5},"ir":{"a":0,"k":4.301,"ix":6},"is":{"a":0,"k":0,"ix":8},"or":{"a":0,"k":8.602,"ix":7},"os":{"a":0,"k":0,"ix":9},"ix":1,"nm":"Polystar Path 1","mn":"ADBE Vector Shape - Star","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011764706817,1,0.596078431373,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[2.5,81],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Polystar 7","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"sr","sy":1,"d":1,"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"r":{"a":0,"k":0,"ix":5},"ir":{"a":0,"k":2.761,"ix":6},"is":{"a":0,"k":0,"ix":8},"or":{"a":0,"k":5.523,"ix":7},"os":{"a":0,"k":0,"ix":9},"ix":1,"nm":"Polystar Path 1","mn":"ADBE Vector Shape - Star","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011764706817,1,0.596078431373,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-3.5,-91.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Polystar 6","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"sr","sy":1,"d":1,"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"r":{"a":0,"k":0,"ix":5},"ir":{"a":0,"k":4.301,"ix":6},"is":{"a":0,"k":0,"ix":8},"or":{"a":0,"k":8.602,"ix":7},"os":{"a":0,"k":0,"ix":9},"ix":1,"nm":"Polystar Path 1","mn":"ADBE Vector Shape - Star","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011764706817,1,0.596078431373,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-82,-12],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Polystar 4","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ty":"sr","sy":1,"d":1,"pt":{"a":0,"k":5,"ix":3},"p":{"a":0,"k":[0,0],"ix":4},"r":{"a":0,"k":0,"ix":5},"ir":{"a":0,"k":3.64,"ix":6},"is":{"a":0,"k":0,"ix":8},"or":{"a":0,"k":7.28,"ix":7},"os":{"a":0,"k":0,"ix":9},"ix":1,"nm":"Polystar Path 1","mn":"ADBE Vector Shape - Star","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011764706817,1,0.596078431373,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[89.5,-14.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Polystar 2","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":47.0000019143492,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"circle","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":9,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":21,"s":[100]},{"t":33.0000013441176,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":9,"s":[139.752,139.752,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":21,"s":[535.117,535.117,100]},{"t":33.0000013441176,"s":[785.336,785.336,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[7.5,7.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011764706817,1,0.596078431373,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.25,58.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 8","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[6.5,6.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011764706817,1,0.596078431373,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-4.25,-61.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 7","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[7,7],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011764706817,1,0.596078431373,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[55,-14],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 6","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[6,6],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011764706817,1,0.596078431373,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-56.5,9.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 5","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[11.5,11.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011764706817,1,0.596078431373,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[54.25,32.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 4","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[14.5,14.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011764706817,1,0.596078431373,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-50.25,41.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 3","np":3,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[12.5,12.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011764706817,1,0.596078431373,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-46.75,-50.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 2","np":3,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[15.5,15.5],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.011764706817,1,0.596078431373,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[45.25,-60.75],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":47.0000019143492,"st":0,"bm":0}],"markers":[],"chars":[{"ch":"P","size":64,"style":"Bold","w":62.5,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,14.453],[14.453,0]],"o":[[0,0],[0,0],[0,0],[0,0],[14.844,0],[0,-14.502],[0,0]],"v":[[5.859,-70.459],[5.859,0],[20.605,0],[20.605,-22.217],[34.521,-22.217],[59.668,-46.338],[35.254,-70.459]],"c":true},"ix":2},"nm":"P","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-8.008],[8.447,0],[0,0]],"o":[[0,0],[8.447,0],[0,8.057],[0,0],[0,0]],"v":[[20.605,-58.789],[31.348,-58.789],[44.678,-46.289],[31.299,-33.74],[20.605,-33.74]],"c":true},"ix":2},"nm":"P","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"P","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"},{"ch":"a","size":64,"style":"Bold","w":56.01,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.592,0],[0,3.955],[-5.957,0.391],[0,0],[0,0]],"o":[[-5.176,0],[0,-3.955],[0,0],[0,0],[0,5.859]],"v":[[25.391,-9.766],[16.846,-16.211],[25.977,-22.9],[37.256,-23.682],[37.256,-19.727]],"c":true},"ix":2},"nm":"a","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-10.352,0],[-2.93,5.615],[0,0],[0,0],[0,0],[0,0],[13.818,0],[0.391,-10.254],[0,0],[-5.176,0],[0,-5.176],[0,0],[0,0],[0,-9.766]],"o":[[6.885,0],[0,0],[0,0],[0,0],[0,0],[0,-10.742],[-13.428,0],[0,0],[0.684,-3.906],[5.859,0],[0,0],[0,0],[-13.721,0.83],[0,9.619]],"v":[[20.752,0.635],[37.207,-8.301],[37.5,-8.301],[37.5,0],[51.27,0],[51.27,-36.865],[28.418,-54.688],[5.322,-37.354],[18.359,-37.354],[27.832,-43.994],[37.256,-35.986],[37.256,-32.422],[23.828,-31.592],[2.637,-15.479]],"c":true},"ix":2},"nm":"a","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"a","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"},{"ch":"y","size":64,"style":"Bold","w":56.2,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.537,0],[-4.59,13.721],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[5.322,0],[0.488,0.098],[0,0]],"o":[[13.428,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-1.123,4.297],[-0.586,0],[0,0],[0.537,0.098]],"v":[[11.67,19.629],[36.279,1.074],[54.883,-53.76],[39.844,-53.76],[28.174,-11.572],[27.881,-11.572],[16.26,-53.76],[0.635,-53.76],[19.482,0.342],[18.994,2.393],[9.473,8.545],[6.25,8.398],[6.25,19.434]],"c":true},"ix":2},"nm":"y","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"y","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"},{"ch":"m","size":64,"style":"Bold","w":88.43,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-5.615,0],[0,-5.762],[0,0],[0,0],[0,0],[-5.615,0],[0,-6.299],[0,0],[0,0],[0,0],[10.547,0],[2.441,-6.738],[0,0],[7.715,0],[2.295,-6.494],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,-6.104],[5.518,0],[0,0],[0,0],[0,0],[0,-6.104],[5.811,0],[0,0],[0,0],[0,0],[0,-10.84],[-7.813,0],[0,0],[-1.807,-7.031],[-7.178,0],[0,0],[0,0],[0,0],[0,0]],"v":[[4.834,0],[19.092,0],[19.092,-32.324],[28.613,-42.725],[37.451,-33.496],[37.451,0],[51.221,0],[51.221,-32.52],[60.596,-42.725],[69.58,-32.959],[69.58,0],[83.838,0],[83.838,-36.523],[66.211,-54.541],[49.512,-43.555],[49.219,-43.555],[34.229,-54.541],[18.896,-43.994],[18.604,-43.994],[18.604,-53.76],[4.834,-53.76]],"c":true},"ix":2},"nm":"m","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"m","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"},{"ch":"e","size":64,"style":"Bold","w":56.84,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-6.494,0],[-0.244,-7.031],[0,0]],"o":[[6.592,0],[0,0],[0.488,-6.885]],"v":[[28.809,-44.043],[40.234,-32.422],[17.041,-32.422]],"c":true},"ix":2},"nm":"e","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[5.371,0],[0,7.764],[0,0],[0,0],[0,0],[15.479,0],[0,-17.09],[-16.357,0],[-1.563,10.4]],"o":[[-1.367,4.15],[-7.52,0],[0,0],[0,0],[0,0],[0,-16.357],[-15.771,0],[0,17.09],[13.086,0],[0,0]],"v":[[40.43,-16.406],[29.443,-9.717],[16.895,-22.705],[16.895,-23.584],[54.004,-23.584],[54.004,-27.979],[28.662,-54.688],[2.832,-26.66],[29.199,0.928],[53.564,-16.406]],"c":true},"ix":2},"nm":"e","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"e","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"},{"ch":"n","size":64,"style":"Bold","w":58.94,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-6.836,0],[0,-7.129],[0,0],[0,0],[0,0],[11.914,0],[3.076,-6.787],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,-7.129],[6.738,0],[0,0],[0,0],[0,0],[0,-12.549],[-8.252,0],[0,0],[0,0],[0,0],[0,0]],"v":[[4.834,0],[19.092,0],[19.092,-30.664],[30.029,-42.676],[40.088,-31.494],[40.088,0],[54.346,0],[54.346,-34.473],[35.693,-54.541],[18.896,-44.141],[18.604,-44.141],[18.604,-53.76],[4.834,-53.76]],"c":true},"ix":2},"nm":"n","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"n","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"},{"ch":"t","size":64,"style":"Bold","w":36.18,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-12.451,0],[-1.465,0.293],[0,0],[1.27,0],[0,4.15],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,10.498],[2.881,0],[0,0],[-0.879,0.146],[-4.346,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[8.643,-65.723],[8.643,-53.76],[1.367,-53.76],[1.367,-42.969],[8.643,-42.969],[8.643,-14.502],[25.977,0.195],[32.861,-0.391],[32.861,-10.938],[29.297,-10.693],[22.9,-16.846],[22.9,-42.969],[32.861,-42.969],[32.861,-53.76],[22.9,-53.76],[22.9,-65.723]],"c":true},"ix":2},"nm":"t","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"t","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"},{"ch":" ","size":64,"style":"Bold","w":21.48,"data":{},"fFamily":"SF UI Display"},{"ch":"S","size":64,"style":"Bold","w":63.13,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-16.943,0],[0,13.672],[14.111,3.027],[0,0],[0,4.346],[-7.275,0],[-0.488,-5.957],[0,0],[16.406,0],[0,-12.988],[-12.988,-2.783],[0,0],[0,-4.59],[7.861,0],[0.684,5.811]],"o":[[0.439,13.232],[17.48,0],[0,-10.742],[0,0],[-8.105,-1.855],[0,-5.225],[7.373,0],[0,0],[-0.244,-12.744],[-15.723,0],[0,10.303],[0,0],[8.496,1.904],[0,5.176],[-7.813,0],[0,0]],"v":[[3.223,-20.068],[31.396,1.221],[59.961,-21.094],[39.697,-40.918],[31.152,-42.725],[19.629,-51.367],[31.787,-60.059],[44.873,-50.488],[58.691,-50.488],[31.738,-71.68],[4.785,-50.098],[24.17,-30.42],[33.35,-28.418],[45.215,-19.385],[31.982,-10.449],[17.432,-20.068]],"c":true},"ix":2},"nm":"S","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"S","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"},{"ch":"u","size":64,"style":"Bold","w":58.94,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[6.641,0],[0,7.275],[0,0],[0,0],[0,0],[-11.621,0],[-2.734,6.738],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,7.275],[-6.592,0],[0,0],[0,0],[0,0],[0,12.5],[8.154,0],[0,0],[0,0],[0,0],[0,0]],"v":[[54.102,-53.76],[39.844,-53.76],[39.844,-23.145],[29.053,-11.084],[18.848,-22.266],[18.848,-53.76],[4.59,-53.76],[4.59,-19.287],[23.877,0.781],[40.039,-9.717],[40.332,-9.717],[40.332,0],[54.102,0]],"c":true},"ix":2},"nm":"u","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"u","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"},{"ch":"c","size":64,"style":"Bold","w":55.76,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[14.453,0],[0,-17.041],[-16.064,0],[-0.83,12.5],[0,0],[6.006,0],[0,10.498],[-7.324,0],[-0.781,-5.566]],"o":[[-0.684,-11.963],[-15.967,0],[0,17.285],[14.111,0],[0,0],[-0.928,5.908],[-7.373,0],[0,-10.303],[6.201,0],[0,0]],"v":[[53.418,-33.936],[29.053,-54.688],[2.832,-26.904],[29.15,0.928],[53.467,-19.531],[40.186,-19.531],[29.297,-10.352],[17.285,-26.904],[29.248,-43.457],[40.137,-33.936]],"c":true},"ix":2},"nm":"c","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"c","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"},{"ch":"s","size":64,"style":"Bold","w":52.64,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-10.107],[-10.107,-2.295],[0,0],[0,-2.783],[5.664,0],[0.684,4.541],[0,0],[-14.16,0],[0,10.449],[10.791,2.441],[0,0],[0,2.686],[-5.127,0],[-0.293,-4.248],[0,0],[13.281,0]],"o":[[0,7.861],[0,0],[4.883,1.172],[0,3.516],[-5.908,0],[0,0],[0.732,10.352],[14.063,0],[0,-8.008],[0,0],[-4.834,-1.123],[0,-3.467],[5.469,0],[0,0],[-0.195,-10.254],[-13.623,0]],"v":[[3.906,-37.939],[19.238,-22.559],[29.15,-20.313],[35.889,-14.893],[26.758,-9.18],[16.504,-16.26],[2.588,-16.26],[26.367,0.928],[50.049,-16.406],[34.961,-31.006],[24.854,-33.203],[17.676,-38.818],[26.221,-44.58],[35.547,-37.646],[48.73,-37.646],[26.416,-54.688]],"c":true},"ix":2},"nm":"s","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"s","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"},{"ch":"f","size":64,"style":"Bold","w":35.84,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-4.297,0],[-1.025,-0.195],[0,0],[2.441,0],[0,-10.352],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.049,-3.76],[1.563,0],[0,0],[-1.953,-0.293],[-12.451,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[8.643,0],[22.9,0],[22.9,-42.969],[32.666,-42.969],[32.666,-53.76],[22.607,-53.76],[22.607,-57.715],[28.711,-63.086],[32.617,-62.744],[32.617,-72.656],[26.025,-73.145],[8.643,-58.545],[8.643,-53.76],[1.367,-53.76],[1.367,-42.969],[8.643,-42.969]],"c":true},"ix":2},"nm":"f","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"f","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"},{"ch":"l","size":64,"style":"Bold","w":24.66,"data":{"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[5.225,0],[19.482,0],[19.482,-73.828],[5.225,-73.828]],"c":true},"ix":2},"nm":"l","mn":"ADBE Vector Shape - Group","hd":false}],"nm":"l","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}]},"fFamily":"SF UI Display"}]}');
            let H = e => {
                    let {
                        isOpen: t,
                        onClose: a,
                        revenue: i
                    } = e;
                    return (0, r.useEffect)(() => {
                        t && setTimeout(() => {
                            a()
                        }, 5e3)
                    }, [t]), t ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(U(), {
                            children: [(0, s.jsx)("script", {
                                type: "text/javascript",
                                src: "https://rajsharma.iljmp.com/improvely.js"
                            }), (0, s.jsx)("script", {
                                type: "text/javascript",
                                dangerouslySetInnerHTML: {
                                    __html: "\n          improvely.init('rajsharma', 1);\nimprovely.conversion({\n	goal: 'sale',    \n	revenue: ".concat(i, ",\n	reference: '1160'\n});\n          ")
                                }
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3 sm:px-0",
                            children: [(0, s.jsx)("div", {
                                className: "absolute top-0 right-0 left-0 bottom-0 bg-neutral-900 opacity-25",
                                onClick: a
                            }), (0, s.jsxs)("div", {
                                className: "relative w-auto my-0 md:my-6 mx-auto max-w-3xl md:max-w-full",
                                children: [(0, s.jsx)("div", {
                                    className: "absolute z-10 right-2 md:px-1 top-1 items-stretch px-0 py-1 text-black-500 font-bold uppercase outline-1 text-lg",
                                    children: (0, s.jsx)("button", {
                                        className: "float-right align-right px-1 md:px-3 text-2xl",
                                        type: "button",
                                        onClick: a,
                                        children: "X"
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "max-h-screen w-[400px] h-[400px] relative border-0 rounded-2xl shadow-lg flex flex-col justify-between outline-none focus:outline-none overflow-y-auto overflow-x-hidden text-sm lg-text-lg py-4 pt-0 px-6 md:px-10 ",
                                    children: [(0, s.jsx)(R(), {
                                        animationData: L,
                                        loop: !1
                                    }), ";", (0, s.jsx)("img", {
                                        className: "hidden",
                                        src: "https://d.adroll.com/ipixel/LEJIIZ33LNBX3KFS52AJIA/RFC36FDTHBHCXDG4VVPPDW?name=c2dcd5a0&conversion_value=".concat(i, "&currency=USD"),
                                        width: "1",
                                        height: "1",
                                        alt: "pixel img"
                                    })]
                                })]
                            })]
                        })]
                    }) : null
                },
                Y = e => {
                    let {
                        type: t,
                        id: a,
                        label: i,
                        ...n
                    } = e;
                    return (0, s.jsx)("div", {
                        className: "flex items-center justify-center gap-3",
                        children: (0, s.jsxs)("label", {
                            className: "w-fit flex items-center justify-center gap-2",
                            htmlFor: "analytics",
                            children: [(0, s.jsx)("input", {
                                id: "analytics",
                                type: "checkbox",
                                className: (0, T.default)("relative float-left bg-transparent -ml-[1rem] mr-[3px] mt-[0.15rem] h-5 w-5 appearance-none rounded-sm border-[0.125rem] border-solid border-neutral-300 outline-none", "before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-['']", "checked:bg-skin-pink checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-[0.9px] checked:after:ml-[0.289rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"),
                                ...n
                            }), (0, s.jsx)("span", {
                                className: "text-darkText dark:text-[#eeeeee] text-sm font-normal cursor-pointer select-none",
                                children: i
                            })]
                        })
                    })
                },
                J = e => {
                    let {
                        isOpen: t,
                        onClose: a
                    } = e;
                    return t ? (0, s.jsxs)("div", {
                        className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3 sm:px-0",
                        children: [(0, s.jsx)("div", {
                            className: "absolute top-0 right-0 left-0 bottom-0 bg-neutral-900 opacity-25",
                            onClick: a
                        }), (0, s.jsxs)("div", {
                            className: "relative w-auto my-0 md:my-6 mx-auto max-w-3xl md:max-w-full",
                            children: [(0, s.jsx)("div", {
                                className: "absolute z-10 right-2 md:px-1 top-1 items-stretch px-0 py-2 text-black-500 font-bold uppercase outline-1 text-lg",
                                children: (0, s.jsx)("button", {
                                    className: "float-right align-right px-1 md:px-3 text-2xl hover:text-red-600",
                                    type: "button",
                                    onClick: a,
                                    children: (0, s.jsx)(w.JO, {
                                        icon: "ic:outline-cancel"
                                    })
                                })
                            }), (0, s.jsxs)("div", {
                                className: "max-h-screen w-[95vw] md:w-[90vw] lg:w-[60vw] xl:w-[40vw] min-h-[15rem] relative border-0 rounded-2xl shadow-lg flex flex-col justify-between bg-white outline-none focus:outline-none overflow-y-auto overflow-x-hidden text-sm lg-text-lg py-4 pt-0 px-6 md:px-10 ",
                                children: [(0, s.jsx)("div", {
                                    className: "w-[100%] h-[6px] bg-black self-center rounded-xl mb-2",
                                    style: {
                                        background: "radial-gradient(circle at top left, #f03985, #5144f8)"
                                    }
                                }), (0, s.jsx)("div", {
                                    className: "flex-1 w-full h-fit mt-4",
                                    children: (0, s.jsx)("div", {
                                        className: "w-full  mt-[24px] mb-[32px]",
                                        children: (0, s.jsx)("p", {
                                            children: "Your purchased tokens will be allocated to vesting smart contract upon purchase, and will not available to claim to your wallet just yet, You will be able to claim your available tokens during exchange listing event. Tokens will be listed after the end of all presale rounds. Estimated end date of each presale is mentioned on the buy widget itself."
                                        })
                                    })
                                })]
                            })]
                        })]
                    }) : null
                };
            var q = a(48623);
            let W = async () => {
                    try {
                        await (0, V.I)(P.B.polygon, !0), window.ethereum.request({
                            method: "wallet_watchAsset",
                            params: {
                                type: "ERC20",
                                options: {
                                    address: q.Tv,
                                    symbol: "YPRED",
                                    decimals: 18,
                                    image: "https://ypredict.ai/img/icon/logo_ic.png"
                                }
                            }
                        }).then(e => {
                            if (m.ZP.dismiss(), e) m.ZP.success("Token added successfully.");
                            else throw m.ZP.error("Something went wrong."), Error("Something went wrong.")
                        }).catch(console.error)
                    } catch (e) {}
                },
                $ = e => {
                    let {
                        isOpen: t,
                        onClose: a
                    } = e, i = (0, F.useTranslations)("Landing");
                    return t ? (0, s.jsxs)("div", {
                        className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-3 sm:px-0",
                        children: [(0, s.jsx)("div", {
                            className: "absolute top-0 right-0 left-0 bottom-0 bg-neutral-900 opacity-25",
                            onClick: a
                        }), (0, s.jsxs)("div", {
                            className: "relative w-auto my-0 md:my-6 mx-auto max-w-3xl md:max-w-full",
                            children: [(0, s.jsx)("div", {
                                className: "absolute z-10 right-2 md:px-1 top-1 items-stretch px-0 py-2 text-black-500 font-bold uppercase outline-1 text-lg",
                                children: (0, s.jsx)("button", {
                                    className: "float-right align-right px-1 md:px-3 text-2xl hover:text-red-600",
                                    type: "button",
                                    onClick: a,
                                    children: (0, s.jsx)(w.JO, {
                                        icon: "ic:outline-cancel"
                                    })
                                })
                            }), (0, s.jsxs)("div", {
                                className: "max-h-screen w-[95vw] md:w-[90vw] lg:w-[60vw] xl:w-[40vw] min-h-[15rem] relative border-0 rounded-2xl shadow-lg flex flex-col justify-between bg-white outline-none focus:outline-none overflow-y-auto overflow-x-hidden text-sm lg-text-lg py-4 pt-0 px-6 md:px-10 ",
                                children: [(0, s.jsx)("div", {
                                    className: "w-[100%] h-[6px] bg-black self-center rounded-xl mb-2",
                                    style: {
                                        background: "radial-gradient(circle at top left, #f03985, #5144f8)"
                                    }
                                }), (0, s.jsx)("div", {
                                    className: "flex-1 w-full h-fit mt-4",
                                    children: (0, s.jsxs)("div", {
                                        className: "w-full  mt-[24px] mb-[32px]",
                                        children: [(0, s.jsx)("p", {
                                            children: "Your purchased tokens are available to claim but cannot be traded until exchange listing event. First exchange listing will be announced in February."
                                        }), (0, s.jsxs)("div", {
                                            className: "mt-8 flex gap-10 items-center justify-end",
                                            children: [(0, s.jsx)("button", {
                                                onClick: () => a(),
                                                className: "relative items-center overflow-hidden text-md font-medium text-red-500",
                                                children: i("cancel")
                                            }), (0, s.jsx)("button", {
                                                className: "relative px-6 h-11 inline-flex items-center overflow-hidden text-md font-medium group gap-2 justify-center rounded-full hover:scale-[99.5%] bg-gradient text-white",
                                                onClick: () => a(),
                                                children: "Continue"
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })]
                    }) : null
                },
                X = () => {
                    var e;
                    let t = (0, _.useRouter)(),
                        {
                            theme: a
                        } = (0, j.q)(),
                        i = (0, F.useTranslations)("Landing"),
                        {
                            isOpen: u,
                            onOpen: f
                        } = (0, x.Z)(),
                        {
                            isOpen: h,
                            onClose: y,
                            onOpen: k
                        } = (0, x.Z)(),
                        {
                            isOpen: N,
                            onClose: E,
                            onOpen: S
                        } = (0, x.Z)(),
                        {
                            round: A,
                            isLoadingRound: D
                        } = M(),
                        {
                            createOrder: P
                        } = C(),
                        {
                            orders: V,
                            fetchOrders: z,
                            isLoading: I,
                            bonus: U
                        } = (0, p.Z)(),
                        {
                            checkTransaction: Z
                        } = G(),
                        [R, L] = (0, r.useState)(!1),
                        [X, K] = (0, r.useState)(!1),
                        [Q, ee] = (0, r.useState)(!1),
                        et = () => ee(!1),
                        {
                            isOpen: ea,
                            onClose: es,
                            onOpen: ei
                        } = (0, x.Z)(),
                        [en, er] = (0, r.useState)("eth"),
                        [el, eo] = (0, r.useState)(0),
                        [ec, ed] = (0, r.useState)("eth"),
                        [ex, ep] = (0, r.useState)(0),
                        [em, eu] = (0, r.useState)({
                            eth: 0,
                            bsc: 0,
                            polygon: 0
                        }),
                        [ef] = r.useState(2072e3),
                        [eh, ey] = (0, r.useState)(0),
                        [ek, eb] = (0, r.useState)(0),
                        [ew, eg] = (0, r.useState)(!1),
                        [ev, ej] = r.useState(null),
                        [eN, eE] = r.useState(1092062),
                        [eS, eA] = r.useState(""),
                        [eD, eB] = (0, r.useState)({
                            show: !1,
                            message: "",
                            type: "error"
                        }),
                        eT = () => {
                            navigator.clipboard.writeText("".concat(q.Tv)), m.ZP.dismiss(), m.ZP.success("Token address copied.")
                        },
                        eF = e => {
                            "usdt" === en || "card" === en ? eb(Math.floor(Number(e) / A.price)) : "eth" === en ? eb(Math.floor(Number(em.eth) / A.price * e)) : "matic" === en ? eb(Math.floor(Number(em.polygon) / A.price * e)) : "bnb" === en && eb(Math.floor(Number(em.bsc) / A.price * e))
                        },
                        eP = e => {
                            if (eg(e.target.checked), "usdt" === en || "card" === en) return ep(t => e.target.checked ? +t + 500 : +t - 500);
                            if ("bnb" === en) {
                                let t = Math.floor(500 / em.bsc * 100) / 100;
                                return ep(a => Math.ceil((e.target.checked ? +a + +t : +a - +t) * 100) / 100)
                            }
                            if ("eth" === en) {
                                let t = Math.floor(500 / em.eth * 100) / 100;
                                return ep(a => Math.ceil((e.target.checked ? +a + +t : +a - +t) * 100) / 100)
                            }
                            if ("matic" === en) {
                                let t = Math.floor(500 / em.polygon * 100) / 100;
                                return ep(a => Math.ceil((e.target.checked ? +a + +t : +a - +t) * 100) / 100)
                            }
                        };
                    (0, r.useEffect)(() => {
                        eF(ex)
                    }, [ex, en]);
                    let eV = async () => {
                        let e = new l.r("https://polygon-rpc.com"),
                            t = new o.CH("0x55fE745545376155e91898d275a2a95279b9d51a", d, e),
                            a = await t.s_tokenSold(),
                            s = c.O$.from(a.toString()).div(c.O$.from("1000000000000000000")).toNumber(),
                            i = await t.s_usdtPrice(),
                            n = (parseFloat("1") / (parseFloat("1000000") / parseFloat(i.toString()))).toFixed(3),
                            r = (parseFloat(s.toString()) * parseFloat(n.toString())).toFixed(0);
                        ej(Number(r))
                    };
                    (0, r.useEffect)(() => {
                        eV()
                    }, []), (0, r.useMemo)(() => {
                        let e = Number(ex);
                        if (e >= 250 && e <= 500) {
                            let e = .02 * Number(eh);
                            return "2% bonus YPREDs (".concat(Number(e.toFixed(2)), " YPRED)")
                        }
                        if (e > 500 && e <= 2500) {
                            let e = .03 * Number(eh);
                            return "3% bonus YPREDs (".concat(Number(e.toFixed(2)), " YPRED)")
                        }
                        if (e > 2500 && e <= 5e3) {
                            let e = .04 * Number(eh);
                            return "4% bonus YPREDs (".concat(Number(e.toFixed(2)), " YPRED)")
                        } {
                            if (!(e > 5e3) || !(e <= 15e3)) return "Sorry, No bonus";
                            let t = .05 * Number(eh);
                            return "5% bonus YPREDs (".concat(Number(t.toFixed(2)), " YPRED)")
                        }
                    }, [ex, eh]);
                    let eC = () => {
                            let e = ["eth", "polygon", "bsc"];
                            Promise.all(e.map(e => fetch("https://rpc.ankr.com/multichain/ca9a40e30bc6647008af1d7f01d6b51afb0619254c90e9d7c29736d19c48afe7", {
                                method: "POST",
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    jsonrpc: "2.0",
                                    method: "ankr_getTokenPrice",
                                    params: {
                                        blockchain: e
                                    },
                                    id: 1
                                })
                            }))).then(e => Promise.all(e.map(e => e.json()))).then(t => {
                                t.forEach((t, a) => {
                                    var s, i;
                                    if (t.result && (null === (s = t.result) || void 0 === s ? void 0 : s.usdPrice)) {
                                        let s = Number(null === (i = t.result) || void 0 === i ? void 0 : i.usdPrice);
                                        eu(t => ({ ...t,
                                            [e[a]]: s
                                        }))
                                    }
                                })
                            }).catch(e => {
                                console.log(e)
                            })
                        },
                        {
                            account: e_,
                            isBuyingWithCard: eG,
                            setIsBuyingWithCard: eM
                        } = (0, j.q)();
                    A.raised, O(A.round), D || (null == A ? void 0 : A.ypred_sum) === 0 || (A.target, O(A.round));
                    let {
                        getAllAllocatedTokens: ez,
                        setClaimedTokens: eO,
                        setAllocatedTokens: eI,
                        isCalculatingAll: eU,
                        allocatedTokens: eZ,
                        claimTokens: eR
                    } = (0, v.Z)(), eL = async () => {};
                    (0, r.useEffect)(() => {
                        eC()
                    }, [eS]);
                    let eH = () => {
                        e_ ? ez(e_) : (eI(null), eO("0.00"))
                    };
                    (0, r.useEffect)(() => {
                        eH(), e_ && z({
                            from: e_
                        })
                    }, [e_]);
                    let eY = (0, r.useMemo)(() => {
                            let e = Number(ex),
                                t = 0;
                            return ("usdt" === en || "card" === en ? t = 500 : "bnb" === en ? t = 500 / em.bsc * 100 / 100 : "matic" === en ? t = 500 / em.polygon * 100 / 100 : "eth" === en && (t = 500 / em.eth * 100 / 100), e >= t) ? (eg(!0), i("Bonus included")) : (eg(!1), i("Add more to include bonus", {
                                amount: "".concat(Math.ceil((t - e) * 100) / 100, " ").concat(["card", "usdt"].includes(en) ? "USD" : en.toUpperCase())
                            }))
                        }, [ex, em, t.locale, en]),
                        eJ = async () => {
                            try {
                                await eR()
                            } catch (e) {
                                console.log(e)
                            }
                        };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)($, {
                            isOpen: N,
                            onClose: E
                        }), (0, s.jsx)(J, {
                            isOpen: h,
                            onClose: y
                        }), (0, s.jsx)(H, {
                            isOpen: Q,
                            onClose: et,
                            revenue: ek * A.price
                        }), (0, s.jsxs)("div", {
                            className: (0, T.default)("rounded-2xl overflow-hidden relative flex flex-col align-center mt-5 lg:mt-0 pb-8 gap-5 backdrop-blur-[32px]", eG ? "bg-[#3d414e45]" : "bg-transparent"),
                            children: [eG ? (0, s.jsx)(B, {
                                value: Number(Math.ceil(ex / em.polygon * 1e3) / 1e3),
                                USDT: Number(ek) * A.price,
                                inputUSD: ex,
                                ypredAmount: ek,
                                onSuccess: eL
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(b, {
                                    isOpen: ea,
                                    onClose: es
                                }), (0, s.jsx)("div", {
                                    className: (0, T.default)("rounded-2xl", "dark" === a ? "bg-transparent p-0" : "p-[1px] overflow-hidden bg-gradient"),
                                    children: (0, s.jsxs)("div", {
                                        className: "bg-white dark:bg-[#2f32417f] px-4 py-6 md:p-6 rounded-2xl",
                                        children: [(0, s.jsx)("div", {
                                            className: "mb-3"
                                        }), (0, s.jsx)("div", {
                                            children: (0, s.jsxs)("div", {
                                                className: "top flex justify-between",
                                                children: [(0, s.jsxs)("div", {
                                                    className: "flex gap-2 items-center",
                                                    children: [(0, s.jsx)(n(), {
                                                        width: 6,
                                                        height: 6,
                                                        src: "/img/icon/vaticalsape.png",
                                                        alt: "vaticalsape.png"
                                                    }), (0, s.jsx)("div", {
                                                        children: (0, s.jsxs)("h2", {
                                                            className: "text-base md:text-lg lg:text-xl text-darkText dark:text-white",
                                                            children: [(0, s.jsx)("span", {
                                                                className: "font-medium",
                                                                children: "Presale is over"
                                                            }), (0, s.jsx)("span", {
                                                                className: "text-darkText dark:text-white font-extralight"
                                                            })]
                                                        })
                                                    })]
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0, s.jsx)(n(), {
                                                        src: "/img/icon/active.png",
                                                        alt: "active-icon",
                                                        width: 10,
                                                        height: 10
                                                    }), (0, s.jsx)("span", {
                                                        className: "text-darkText dark:text-white text-base md:text-lg",
                                                        children: i("Closed")
                                                    })]
                                                })]
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "prograssbar py-4",
                                            children: [(0, s.jsx)("div", {
                                                className: "flex flex-col gap-y-8 pb-6 border-b-2 border-dotted border-[#2e3141]"
                                            }), e_ && (0, s.jsx)("div", {
                                                className: "flex justify-center mt-4",
                                                children: (0, s.jsx)("div", {
                                                    className: "w-full p-[1px] overflow-hidden bg-gradient-to-br from-[#6042ef] to-skin-pink rounded-md",
                                                    children: (0, s.jsxs)("div", {
                                                        className: "bg-white dark:bg-[#000000] p-4 rounded-md",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "flex items-center gap-1 justify-center",
                                                            children: (0, s.jsxs)("h5", {
                                                                className: "text-darkText dark:text-white text-sm font-medium flex w-fit items-center gap-1",
                                                                children: [(0, s.jsx)("button", {
                                                                    className: "w-5 h-fit",
                                                                    disabled: eU,
                                                                    onClick: () => eU ? {} : eH(),
                                                                    children: (0, s.jsx)(w.JO, {
                                                                        icon: "material-symbols:rotate-right",
                                                                        fontSize: 18
                                                                    })
                                                                }), i("My Wallet Balance")]
                                                            })
                                                        }), (0, s.jsxs)("div", {
                                                            className: "font-bold text-2xl text-darkText dark:text-white flex items-center justify-center mt-2 gap-3",
                                                            children: [(eU || I || X) && (0, s.jsx)("span", {
                                                                className: "w-5",
                                                                children: (0, s.jsx)(w.JO, {
                                                                    icon: "svg-spinners:6-dots-rotate",
                                                                    fontSize: 20,
                                                                    color: "#f327f2"
                                                                })
                                                            }), !eU && !I && !X && (0, s.jsxs)("div", {
                                                                children: [(0, s.jsxs)("h5", {
                                                                    className: "font-bold text-2xl text-darkText dark:text-white",
                                                                    children: [Number(eZ) + el, " ", (0, s.jsx)("span", {
                                                                        className: "text-sm font-medium",
                                                                        children: "YPRED"
                                                                    })]
                                                                }), (0, s.jsxs)("p", {
                                                                    className: "text-sm",
                                                                    children: ["(exc.", " ", null === (e = (null == U ? void 0 : U.bonus_tokens) || 0) || void 0 === e ? void 0 : e.toFixed(0), " ", "bonus)"]
                                                                })]
                                                            }), !eU && !I && !X && (0, s.jsx)("button", {
                                                                className: "z-20 relative inline-flex items-center justify-center p-[1px] overflow-hidden text-xs font-medium  rounded-md group bg-gradient-to-br from-[#6042ef] to-skin-pink",
                                                                children: (0, s.jsx)("div", {
                                                                    className: (0, T.default)("relative w-full rounded-md px-2 md:px-3 lg:px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#161a24] text-darkText dark:text-white group-hover:bg-opacity-0"),
                                                                    onClick: () => eJ(),
                                                                    children: (0, s.jsx)("span", {
                                                                        className: "text-darkText dark:text-white text-xs flex items-center gap-1 group-hover:text-white",
                                                                        children: "Claim"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "mt-4",
                                                children: D || 0 === A.ypred_sum ? (0, s.jsx)("div", {
                                                    className: "relative animate-pulse rounded-md h-6 w-full bg-gray-100 dark:bg-dashboard-dark-purple"
                                                }) : (0, s.jsx)("h4", {
                                                    className: "flex flex-row items-center gap-2 text-center text-[1rem] font-semibold leading-[30px] text-darkText dark:text-white before:h-[0.5px] before:w-auto before:flex-1 before:bg-gradient-to-r before:from-skin-pink  before:via-skin-pink  before:to-[#572bf7] before:inline-block before:align-middle after:h-[0.5px] after:w-auto after:bg-gradient-to-r after:from-[#572bf7]  after:via-skin-pink  after:to-skin-pink after:inline-block after:align-middle after:flex-1",
                                                    children: "1 YPRED = $0.12"
                                                })
                                            }), u && (0, s.jsxs)("div", {
                                                className: "mt-3 mb-4",
                                                children: [(0, s.jsxs)("p", {
                                                    className: "mb-3 text-sm text-darkText dark:text-white flex items-center gap-2 justify-center",
                                                    children: [(0, s.jsx)("span", {
                                                        className: "text-skin-pink text-xl",
                                                        children: (0, s.jsx)(w.JO, {
                                                            icon: "mdi:gift"
                                                        })
                                                    }), " ", eY]
                                                }), (0, s.jsx)(Y, {
                                                    checked: ew,
                                                    onChange: eP,
                                                    label: "Life time access to yPredict Analytics"
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "max-w-full sm:max-w-[295px] flex flex-col mx-auto gap-3",
                                                children: [(0, s.jsx)("br", {}), (0, s.jsx)(g.Z, {
                                                    callbackOpen: () => S(),
                                                    callbackClose: () => E()
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "mt-6 bg-transparent border border-[#ffffff26] bg-darkBg p-2 rounded-md",
                                                children: [(0, s.jsxs)("div", {
                                                    className: "flex items-center justify-center gap-4 md:gap-6",
                                                    children: [(0, s.jsx)("span", {
                                                        className: "text-sm text-darkText dark:text-white",
                                                        title: q.Tv,
                                                        children: "[".concat(q.Tv.slice(0, 10), "...").concat(q.Tv.slice(-4), "]")
                                                    }), (0, s.jsx)("button", {
                                                        onClick: () => W(),
                                                        className: "z-20 relative inline-flex items-center justify-center p-[1px] overflow-hidden text-xs font-medium  rounded-md group bg-gradient-to-br from-[#6042ef] to-skin-pink",
                                                        children: (0, s.jsx)("div", {
                                                            className: (0, T.default)("relative w-full rounded-md px-2 md:px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#161a24] text-white group-hover:bg-opacity-0"),
                                                            children: (0, s.jsx)("span", {
                                                                className: "text-darkText dark:text-white text-xs flex items-center gap-1",
                                                                children: (0, s.jsx)(w.JO, {
                                                                    fontSize: 16,
                                                                    icon: "logos:metamask-icon"
                                                                })
                                                            })
                                                        })
                                                    }), (0, s.jsx)("button", {
                                                        onClick: () => eT(),
                                                        className: "z-20 relative inline-flex items-center justify-center p-[1px] overflow-hidden text-xs font-medium  rounded-md group bg-gradient-to-br from-[#6042ef] to-skin-pink",
                                                        children: (0, s.jsx)("div", {
                                                            className: (0, T.default)("relative w-full rounded-md px-2 md:px-3 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#161a24] text-darkText dark:text-white group-hover:bg-opacity-0"),
                                                            children: (0, s.jsx)(w.JO, {
                                                                fontSize: 16,
                                                                icon: "ion:copy-outline"
                                                            })
                                                        })
                                                    })]
                                                }), (0, s.jsxs)("div", {
                                                    className: "mt-3 flex items-center justify-center text-yellow-600 dark:text-yellow-200 gap-2",
                                                    children: [(0, s.jsx)(w.JO, {
                                                        icon: "octicon:alert-24",
                                                        fontSize: 14
                                                    }), (0, s.jsx)("span", {
                                                        className: "text-xs",
                                                        children: i("Do not pay directly to this address")
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            }), eG ? (0, s.jsx)("div", {
                                className: "flex justify-center",
                                children: (0, s.jsx)("button", {
                                    className: "underline text-white z-20 hover:text-skin-pink text-base font-normal",
                                    onClick: () => eM(!1),
                                    children: i("Cancel Transaction")
                                })
                            }) : null]
                        })]
                    })
                };
            var K = X
        },
        23939: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return u
                }
            });
            var s = a(85893),
                i = a(46351),
                n = a(51308),
                r = a(25675),
                l = a.n(r),
                o = a(67294),
                c = a(69077),
                d = a(42746),
                x = a(11163),
                p = a(86010);
            let m = e => {
                let {
                    callbackClose: t,
                    callbackOpen: a,
                    className: r = "bg-gradient text-white",
                    showIcon: m = !0
                } = e, {
                    setIsAuthenticated: u
                } = (0, i.q)(), f = (0, d.useTranslations)("Landing"), {
                    address: h,
                    isDisconnected: y,
                    isConnected: k,
                    isConnecting: b
                } = (0, c.mA)(), {
                    setAccount: w
                } = (0, i.q)(), [g, v] = (0, o.useState)(!1);
                (0, x.useRouter)();
                let j = async () => {
                        try {
                            window.lintrk("track", {
                                conversion_id: 14229529
                            }), window.plausible("wallet-connect")
                        } catch (e) {}
                    },
                    N = () => {
                        null == window || window.dataLayer.push({
                            event: "workflowStep",
                            workflowName: "connectWallet",
                            workflowStepNumber: 1,
                            workflowStepName: "start",
                            workflowCompleteFlag: 0,
                            workflowErrorCode: ""
                        })
                    },
                    E = e => {
                        null == window || window.dataLayer.push({
                            event: "workflowStep",
                            workflowName: "connectWallet",
                            workflowStepNumber: 2,
                            workflowStepName: "successful",
                            workflowCompleteFlag: 1,
                            walletAddress: e,
                            workflowErrorCode: ""
                        })
                    };
                return (0, o.useEffect)(() => {
                    k && (w(h), u(!0)), y && (w(null), u(!1)), b && v(!0)
                }, [h, y, k, b]), (0, o.useEffect)(() => {
                    g && k ? (a(), j()) : t()
                }, [g, k]), (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(n.x3.Custom, {
                        children: e => {
                            let {
                                isConnected: t,
                                address: a,
                                show: i,
                                truncatedAddress: n
                            } = e;
                            return (0, s.jsxs)("button", {
                                onClick: () => {
                                    i && i(), t ? t && E(a) : N()
                                },
                                className: (0, p.default)("z-20 relative w-full h-11 inline-flex items-center overflow-hidden text-xs font-medium group gap-2 justify-center rounded-full hover:scale-[99.5%]", r),
                                children: [!t && m && (0, s.jsx)(l(), {
                                    src: "/img/icon/card.svg",
                                    alt: "behance",
                                    width: 18,
                                    height: 18
                                }), (0, s.jsx)("span", {
                                    className: "text-sm",
                                    children: t && a ? f("Disconnect", {
                                        address: "[".concat(n, "]")
                                    }) : f("Connect Wallet")
                                })]
                            })
                        }
                    })
                })
            };
            var u = m
        },
        53945: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return r
                }
            });
            var s = a(85893),
                i = a(86010);
            a(67294);
            let n = e => {
                let {
                    children: t,
                    roundedClass: a = "rounded-[20px]"
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, i.default)("p-[1px] bg-gradient", a && a),
                    children: (0, s.jsx)("div", {
                        className: (0, i.default)("bg-[#030B1C] overflow-hidden h-full", a && a),
                        children: t
                    })
                })
            };
            var r = n
        }
    }
]);