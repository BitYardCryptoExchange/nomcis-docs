(window.webpackJsonp = window.webpackJsonp || []).push([[35], {
    412: function (t, s, a) {
        "use strict";
        a.r(s);
        var n = a(26), r = Object(n.a)({}, (function () {
            var t = this, s = t.$createElement, a = t._self._c || s;
            return a("ContentSlotsDistributor", {attrs: {"slot-key": t.$parent.slotKey}}, [a("h1", {attrs: {id: "Market Interface"}}, [a("a", {
                staticClass: "header-anchor",
                attrs: {href: "#Market Interface"}
            }, [t._v("#")]), t._v(" Market Interface")]), t._v(" "), a("h2", {attrs: {id: "_1-Contract Information"}}, [a("a", {
                staticClass: "header-anchor",
                attrs: {href: "#_1-Contract Information"}
            }, [t._v("#")]), t._v(" 1. Contract Information")]), t._v(" "), a("p", [a("strong", [t._v("HTTP Request")])]), t._v(" "), a("div", {staticClass: "language-http extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-http"}
            }, [a("code", [t._v("    # Request\n    GET api/v1/market/getAllContracts\n    \n    example： https://api-swap-rest.bingbon.pro/api/v1/market/getAllContracts\n")])])]), a("p", [a("strong", [t._v("返回值说明")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("返回字段")]), t._v(" "), a("th", {staticStyle: {"text-align": "center"}}, [t._v("字段说明")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("code")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("是否有错误信息，0为正常，1为有错误")])]), t._v(" "), a("tr", [a("td", [t._v("msg")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("错误信息描述")])]), t._v(" "), a("tr", [a("td", [t._v("contractId")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("合约ID")])]), t._v(" "), a("tr", [a("td", [t._v("symbol")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("合约产品符号，以A_B的形式返回")])]), t._v(" "), a("tr", [a("td", [t._v("name")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("合约产品名字")])]), t._v(" "), a("tr", [a("td", [t._v("size")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("合约大小，例如0.0001 BTC")])]), t._v(" "), a("tr", [a("td", [t._v("volumePrecision")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("交易数量精度")])]), t._v(" "), a("tr", [a("td", [t._v("pricePrecision")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("价格精度")])]), t._v(" "), a("tr", [a("td", [t._v("feeRate")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("交易手续费")])]), t._v(" "), a("tr", [a("td", [t._v("tradeMinLimit")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("交易最小单位，单位为张")])]), t._v(" "), a("tr", [a("td", [t._v("currency")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("结算和保证金货币资产")])]), t._v(" "), a("tr", [a("td", [t._v("asset")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("合约交易资产")])]), t._v(" "), a("tr", [a("td", [t._v("maxLongLeverage")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("多头交易的最大杠杆倍数")])]), t._v(" "), a("tr", [a("td", [t._v("maxShortLeverage")]), t._v(" "), a("td", {staticStyle: {"text-align": "center"}}, [t._v("空头交易的最大杠杆倍数")])])])]), t._v(" "), a("div", {staticClass: "language-javascript extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-javascript"}
            }, [a("code", [t._v("    # Response\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"code"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"msg"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('""')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"data"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("[")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"contractId"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"100"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"symbol"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"BTC-USDT"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"name"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"BTC合约"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"size"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"0.0001"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volumePrecision"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"pricePrecision"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("2")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"feeRate"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0.001")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"tradeMinLimit"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"currency"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"USDT"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"asset"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"BTC"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"maxLongLeverage"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("100")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"maxShortLeverage"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("100")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"contractId"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"101"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"symbol"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ETH_USDT"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"name"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ETH合约"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"size"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"0.01"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volumePrecision"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"pricePrecision"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("2")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"feeRate"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0.001")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"tradeMinLimit"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"currency"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"USDT"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"asset"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ETH"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"maxLongLeverage"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("50")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"maxShortLeverage"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("50")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {pre: !0, attrs: {class: "token punctuation"}}, [t._v("]")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v("...")]), t._v("\n   "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v(" \n")])])]), a("h2", {attrs: {id: "_2-Get Market Depth"}}, [a("a", {
                staticClass: "header-anchor",
                attrs: {href: "#_2-Get Market Depth"}
            }, [t._v("#")]), t._v(" 2. Get Market Depth")]), t._v(" "), a("p", [a("strong", [t._v("HTTP Request")])]), t._v(" "), a("div", {staticClass: "language-http extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-http"}
            }, [a("code", [t._v("    # Request\n    GET api/v1/market/getLatestPrice\n")])])]), a("p", [a("strong", [t._v("请求参数")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("必填")]), t._v(" "), a("th", [t._v("字段描述")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("symbol")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("是")]), t._v(" "), a("td", [t._v("合约名称")]), t._v(" "), a("td", [t._v('合约名称中需有"-"，如BTC-USDT')])])])]), t._v(" "), a("p", [a("strong", [t._v("返回值说明")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("tradePrice")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("成交价格")])]), t._v(" "), a("tr", [a("td", [t._v("indexPrice")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("指数价格")])]), t._v(" "), a("tr", [a("td", [t._v("fairPrice")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("标记价格")])])])]), t._v(" "), a("div", {staticClass: "language-javascript extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-javascript"}
            }, [a("code", [t._v("# Response\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"code"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"msg"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('""')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"data"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"tradePrice"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"50000.18"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"indexPrice"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"50000.18"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"fairPrice"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"50000.18"')]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n")])])]), a("h2", {attrs: {id: "_3-11"}}, [a("a", {
                staticClass: "header-anchor",
                attrs: {href: "#_3-11"}
            }, [t._v("#")]), t._v(" 3. 11")]), t._v(" "), a("p", [a("strong", [t._v("HTTP Request")])]), t._v(" "), a("div", {staticClass: "language-http extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-http"}
            }, [a("code", [t._v("    # Request\n    GET api/v1/market/getMarketDepth\n")])])]), a("p", [a("strong", [t._v("请求参数")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("必填")]), t._v(" "), a("th", [t._v("字段描述")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("symbol")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("是")]), t._v(" "), a("td", [t._v("合约名称")]), t._v(" "), a("td", [t._v('合约名称中需有"-"，如BTC-USDT')])]), t._v(" "), a("tr", [a("td", [t._v("level")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("否")]), t._v(" "), a("td", [t._v("层数")]), t._v(" "), a("td", [t._v("若为空，则默认返回5层")])])])]), t._v(" "), a("p", [a("strong", [t._v("返回值说明")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("code")]), t._v(" "), a("td", [t._v("Int64")]), t._v(" "), a("td", [t._v("是否有错误信息，0为正常，1为有错误")])]), t._v(" "), a("tr", [a("td", [t._v("msg")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("错误信息描述")])]), t._v(" "), a("tr", [a("td", [t._v("asks")]), t._v(" "), a("td", [t._v("数组")]), t._v(" "), a("td", [t._v("卖方深度")])]), t._v(" "), a("tr", [a("td", [t._v("bids")]), t._v(" "), a("td", [t._v("数组")]), t._v(" "), a("td", [t._v("买方深度")])]), t._v(" "), a("tr", [a("td", [t._v("p")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("price价格")])]), t._v(" "), a("tr", [a("td", [t._v("v")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("volume数量")])])])]), t._v(" "), a("div", {staticClass: "language-javascript extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-javascript"}
            }, [a("code", [t._v("    # Response\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"code"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"msg"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('""')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"data"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"asks"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("[")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"p"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("5319.94")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"v"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0.05483456")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {pre: !0, attrs: {class: "token punctuation"}}, [t._v(",")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"p"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("5320.19")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"v"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1.05734545")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {pre: !0, attrs: {class: "token punctuation"}}, [t._v(",")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"p"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("5320.39")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"v"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1.16307999")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {pre: !0, attrs: {class: "token punctuation"}}, [t._v(",")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"p"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("5320.94")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"v"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0.05483456")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {pre: !0, attrs: {class: "token punctuation"}}, [t._v(",")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"p"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("5330.19")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"v"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1.05734545")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {pre: !0, attrs: {class: "token punctuation"}}, [t._v(",")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"p"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("5330.39")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"v"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1.16307999")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("]")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"bids"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("[")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"p"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("5319.93")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"v"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0.05483456")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {pre: !0, attrs: {class: "token punctuation"}}, [t._v(",")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"p"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("5318.19")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"v"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1.05734545")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {pre: !0, attrs: {class: "token punctuation"}}, [t._v(",")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"p"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("5317.39")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"v"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1.16307999")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {pre: !0, attrs: {class: "token punctuation"}}, [t._v(",")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"p"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("5316.94")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"v"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0.05483456")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {pre: !0, attrs: {class: "token punctuation"}}, [t._v(",")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"p"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("5315.19")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"v"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1.05734545")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {pre: !0, attrs: {class: "token punctuation"}}, [t._v(",")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"p"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("5314.39")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"v"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1.16307999")]), t._v("\n              "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("]")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n")])])]), a("h2", {attrs: {id: "_4-13"}}, [a("a", {
                staticClass: "header-anchor",
                attrs: {href: "#_4-13"}
            }, [t._v("#")]), t._v(" 4. 13")]), t._v(" "), a("p", [a("strong", [t._v("HTTP Request")])]), t._v(" "), a("div", {staticClass: "language-http extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-http"}
            }, [a("code", [t._v("    # Request\n    GET api/v1/market/getMarketTrades\n")])])]), a("p", [a("strong", [t._v("请求参数")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("必填")]), t._v(" "), a("th", [t._v("字段描述")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("symbol")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("是")]), t._v(" "), a("td", [t._v("合约名称")]), t._v(" "), a("td", [t._v('合约名称中需有"-"，如BTC-USDT')])])])]), t._v(" "), a("p", [a("strong", [t._v("返回值说明")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("time")]), t._v(" "), a("td", [t._v("data")]), t._v(" "), a("td", [t._v("成交时间")])]), t._v(" "), a("tr", [a("td", [t._v("makerSide")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("吃单方向(Buy / Sell 买/卖)")])]), t._v(" "), a("tr", [a("td", [t._v("price")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("成交价格")])]), t._v(" "), a("tr", [a("td", [t._v("volume")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("成交数量")])])])]), t._v(" "), a("div", {staticClass: "language-javascript extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-javascript"}
            }, [a("code", [t._v("    # Response\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"code"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"msg"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('""')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"data"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"trades"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("[")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"time"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"2018-04-25T15:00:51.999Z"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"makerSide"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"Buy"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"price"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0.279563")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("100")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"time"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"2018-04-25T15:00:51.000Z"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"makerSide"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"Sell"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"price"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0.279563")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("300")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("]")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n")])])]), a("h2", {attrs: {id: "_5-14"}}, [a("a", {
                staticClass: "header-anchor",
                attrs: {href: "#_5-14"}
            }, [t._v("#")]), t._v(" 5. 14")]), t._v(" "), a("p", [a("strong", [t._v("HTTP Request")])]), t._v(" "), a("div", {staticClass: "language-http extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-http"}
            }, [a("code", [t._v("    # Request\n    GET api/v1/market/getLatestFunding\n")])])]), a("p", [a("strong", [t._v("请求参数")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("必填")]), t._v(" "), a("th", [t._v("字段描述")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("symbol")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("是")]), t._v(" "), a("td", [t._v("合约名称")]), t._v(" "), a("td", [t._v('合约名称中需有"-"，如BTC-USDT')])])])]), t._v(" "), a("p", [a("strong", [t._v("返回值说明")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("fundingRate")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("当前资金费率")])]), t._v(" "), a("tr", [a("td", [t._v("fairPrice")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("当前的标记价格")])]), t._v(" "), a("tr", [a("td", [t._v("leftSeconds")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("下次结算剩余时间，单位为秒")])])])]), t._v(" "), a("div", {staticClass: "language-javascript extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-javascript"}
            }, [a("code", [t._v("# Response\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"code"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"msg"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('""')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"data"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"fundingRate"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"0.3000"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"fairPrice"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"182.90"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"leftSeconds"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"1024"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n")])])]), a("h2", {attrs: {id: "_6-15"}}, [a("a", {
                staticClass: "header-anchor",
                attrs: {href: "#_6-15"}
            }, [t._v("#")]), t._v(" 6. 15")]), t._v(" "), a("p", [a("strong", [t._v("HTTP Request")])]), t._v(" "), a("div", {staticClass: "language-http extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-http"}
            }, [a("code", [t._v("    # Request\n    GET api/v1/market/getHistoryFunding\n")])])]), a("p", [a("strong", [t._v("请求参数")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("必填")]), t._v(" "), a("th", [t._v("字段描述")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("symbol")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("是")]), t._v(" "), a("td", [t._v("合约名称")]), t._v(" "), a("td", [t._v('合约名称中需有"-"，如BTC-USDT')])])])]), t._v(" "), a("p", [a("strong", [t._v("返回值说明")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("historyId")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("历史ID号")])]), t._v(" "), a("tr", [a("td", [t._v("fundingRate")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("资金费率")])]), t._v(" "), a("tr", [a("td", [t._v("fairPrice")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("标记价格")])]), t._v(" "), a("tr", [a("td", [t._v("interval")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("资金费率结算周期，单位：小时")])]), t._v(" "), a("tr", [a("td", [t._v("time")]), t._v(" "), a("td", [t._v("data")]), t._v(" "), a("td", [t._v("结算时间")])])])]), t._v(" "), a("div", {staticClass: "language-javascript extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-javascript"}
            }, [a("code", [t._v("    # Response\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"code"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"msg"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('""')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"data"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"fundings"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("[")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"historyId"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"687"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"symbol"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ETH-USDT"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"fundingRate"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"0.3000"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"fairPrice"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"182.73"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"interval"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"8"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"time"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"2019-10-28T16:00:00.000Z"')]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"historyId"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"686"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"symbol"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ETH-USDT"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"fundingRate"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"0.3000"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"fairPrice"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"182.90"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"interval"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"8"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"time"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"2019-10-28T15:00:00.000Z"')]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("]")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n")])])]), a("h2", {attrs: {id: "_7-16"}}, [a("a", {
                staticClass: "header-anchor",
                attrs: {href: "#_7-16"}
            }, [t._v("#")]), t._v(" 7. 16")]), t._v(" "), a("div", {staticClass: "language- extra-class"}, [a("pre", [a("code", [t._v(" 查询最新成交价格的K线最新数据。\n")])])]), a("p", [a("strong", [t._v("HTTP Request")])]), t._v(" "), a("div", {staticClass: "language-http extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-http"}
            }, [a("code", [t._v("    # Request\n    GET api/v1/market/getLatestKline\n")])])]), a("p", [a("strong", [t._v("请求参数")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("必填")]), t._v(" "), a("th", [t._v("字段描述")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("symbol")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("是")]), t._v(" "), a("td", [t._v("合约名称")]), t._v(" "), a("td", [t._v('合约名称中需有"-"，如BTC-USDT')])]), t._v(" "), a("tr", [a("td", [t._v("klineType")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("是")]), t._v(" "), a("td", [t._v("k线Types")]), t._v(" "), a("td", [t._v("参考字段说明，如分钟，小时，周等")])])])]), t._v(" "), a("p", [a("strong", [t._v("备注")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("klineType 字段说明")]), t._v(" "), a("th")])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("1")]), t._v(" "), a("td", [t._v("1m一分钟K线")])]), t._v(" "), a("tr", [a("td", [t._v("3")]), t._v(" "), a("td", [t._v("3m三分钟K线")])]), t._v(" "), a("tr", [a("td", [t._v("5")]), t._v(" "), a("td", [t._v("5m五分钟K线")])]), t._v(" "), a("tr", [a("td", [t._v("15")]), t._v(" "), a("td", [t._v("15m十五分钟K线")])]), t._v(" "), a("tr", [a("td", [t._v("30")]), t._v(" "), a("td", [t._v("30m三十分钟K线")])]), t._v(" "), a("tr", [a("td", [t._v("60")]), t._v(" "), a("td", [t._v("1h一小时K线")])]), t._v(" "), a("tr", [a("td", [t._v("120")]), t._v(" "), a("td", [t._v("2h两小时K线")])]), t._v(" "), a("tr", [a("td", [t._v("240")]), t._v(" "), a("td", [t._v("4h四小时K线")])]), t._v(" "), a("tr", [a("td", [t._v("360")]), t._v(" "), a("td", [t._v("6h六小时K线")])]), t._v(" "), a("tr", [a("td", [t._v("720")]), t._v(" "), a("td", [t._v("12h十二小时K线")])]), t._v(" "), a("tr", [a("td", [t._v("1D")]), t._v(" "), a("td", [t._v("1D日K线")])]), t._v(" "), a("tr", [a("td", [t._v("1W")]), t._v(" "), a("td", [t._v("1W周K线")])]), t._v(" "), a("tr", [a("td", [t._v("1M")]), t._v(" "), a("td", [t._v("1M月K线")])])])]), t._v(" "), a("p", [a("strong", [t._v("返回值说明")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("open")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("开盘价")])]), t._v(" "), a("tr", [a("td", [t._v("close")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("收盘价")])]), t._v(" "), a("tr", [a("td", [t._v("high")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("最高价")])]), t._v(" "), a("tr", [a("td", [t._v("low")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("最低价")])]), t._v(" "), a("tr", [a("td", [t._v("volume")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("交易数量")])]), t._v(" "), a("tr", [a("td", [t._v("ts")]), t._v(" "), a("td", [t._v("int64")]), t._v(" "), a("td", [t._v("k线时间戳，单位毫秒")])])])]), t._v(" "), a("div", {staticClass: "language-javascript extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-javascript"}
            }, [a("code", [t._v("# Response\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"code"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"msg"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('""')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"data"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"kline"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ts"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1572253500000")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"open"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.41")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"close"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.54")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"high"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.54")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"low"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.39")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("281")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n")])])]), a("h2", {attrs: {id: "_8-17"}}, [a("a", {
                staticClass: "header-anchor",
                attrs: {href: "#_8-17"}
            }, [t._v("#")]), t._v(" 8. 17")]), t._v(" "), a("div", {staticClass: "language- extra-class"}, [a("pre", [a("code", [t._v(" 查询一段时间周期内成交价格的K线历史数据。\n")])])]), a("p", [a("strong", [t._v("HTTP Request")])]), t._v(" "), a("div", {staticClass: "language-http extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-http"}
            }, [a("code", [t._v("    # Request\n    GET api/v1/market/getHistoryKlines\n")])])]), a("p", [a("strong", [t._v("请求参数")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("必填")]), t._v(" "), a("th", [t._v("字段描述")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("symbol")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("是")]), t._v(" "), a("td", [t._v("合约名称")]), t._v(" "), a("td", [t._v('合约名称中需有"-"，如BTC-USDT')])]), t._v(" "), a("tr", [a("td", [t._v("klineType")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("是")]), t._v(" "), a("td", [t._v("k线Types")]), t._v(" "), a("td", [t._v("参考字段说明，如分钟，小时，周等")])]), t._v(" "), a("tr", [a("td", [t._v("startTs")]), t._v(" "), a("td", [t._v("int64")]), t._v(" "), a("td", [t._v("是")]), t._v(" "), a("td", [t._v("起始时间戳，单位毫秒")]), t._v(" "), a("td")]), t._v(" "), a("tr", [a("td", [t._v("endTs")]), t._v(" "), a("td", [t._v("int64")]), t._v(" "), a("td", [t._v("是")]), t._v(" "), a("td", [t._v("结束时间戳，单位毫秒")]), t._v(" "), a("td")])])]), t._v(" "), a("p", [a("strong", [t._v("备注")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("klineType 字段说明")]), t._v(" "), a("th")])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("1")]), t._v(" "), a("td", [t._v("1m一分钟K线")])]), t._v(" "), a("tr", [a("td", [t._v("3")]), t._v(" "), a("td", [t._v("3m三分钟K线")])]), t._v(" "), a("tr", [a("td", [t._v("5")]), t._v(" "), a("td", [t._v("5m五分钟K线")])]), t._v(" "), a("tr", [a("td", [t._v("15")]), t._v(" "), a("td", [t._v("15m十五分钟K线")])]), t._v(" "), a("tr", [a("td", [t._v("30")]), t._v(" "), a("td", [t._v("30m三十分钟K线")])]), t._v(" "), a("tr", [a("td", [t._v("60")]), t._v(" "), a("td", [t._v("1h一小时K线")])]), t._v(" "), a("tr", [a("td", [t._v("120")]), t._v(" "), a("td", [t._v("2h两小时K线")])]), t._v(" "), a("tr", [a("td", [t._v("240")]), t._v(" "), a("td", [t._v("4h四小时K线")])]), t._v(" "), a("tr", [a("td", [t._v("360")]), t._v(" "), a("td", [t._v("6h六小时K线")])]), t._v(" "), a("tr", [a("td", [t._v("720")]), t._v(" "), a("td", [t._v("12h十二小时K线")])]), t._v(" "), a("tr", [a("td", [t._v("1D")]), t._v(" "), a("td", [t._v("1D日K线")])]), t._v(" "), a("tr", [a("td", [t._v("1W")]), t._v(" "), a("td", [t._v("1W周K线")])]), t._v(" "), a("tr", [a("td", [t._v("1M")]), t._v(" "), a("td", [t._v("1M月K线")])])])]), t._v(" "), a("p", [a("strong", [t._v("返回值说明")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("klines")]), t._v(" "), a("td", [t._v("数组")]), t._v(" "), a("td", [t._v("K线数据")])]), t._v(" "), a("tr", [a("td", [t._v("open")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("开盘价")])]), t._v(" "), a("tr", [a("td", [t._v("close")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("收盘价")])]), t._v(" "), a("tr", [a("td", [t._v("high")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("最高价")])]), t._v(" "), a("tr", [a("td", [t._v("low")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("最低价")])]), t._v(" "), a("tr", [a("td", [t._v("volume")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("交易数量")])]), t._v(" "), a("tr", [a("td", [t._v("ts")]), t._v(" "), a("td", [t._v("int64")]), t._v(" "), a("td", [t._v("k线时间戳，单位毫秒")])])])]), t._v(" "), a("div", {staticClass: "language-javascript extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-javascript"}
            }, [a("code", [t._v("# Response\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"code"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"msg"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('""')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"data"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"klines"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("[")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ts"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1572253140000")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"open"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.89")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"close"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.97")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"high"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("182.04")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"low"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.89")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("2136")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ts"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1572253200000")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"open"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.94")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"close"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.72")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"high"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.94")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"low"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.72")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("965")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ts"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1572253260000")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"open"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.69")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"close"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.72")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"high"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.72")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"low"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.56")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1245")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ts"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1572253320000")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"open"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.72")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"close"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.73")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"high"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.81")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"low"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.69")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("541")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ts"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1572253380000")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"open"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.77")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"close"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.59")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"high"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.77")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"low"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.53")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("933")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ts"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1572253440000")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"open"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.59")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"close"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.38")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"high"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.62")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"low"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.38")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1425")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"ts"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("1572253500000")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"open"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.41")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"close"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.64")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"high"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.64")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"low"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("181.39")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n                    "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("923")]), t._v("\n                "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n            "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("]")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n")])])]), a("h2", {attrs: {id: "_9-18"}}, [a("a", {
                staticClass: "header-anchor",
                attrs: {href: "#_9-18"}
            }, [t._v("#")]), t._v(" 9. 18")]), t._v(" "), a("p", [a("strong", [t._v("HTTP Request")])]), t._v(" "), a("div", {staticClass: "language-http extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-http"}
            }, [a("code", [t._v("    # Request\n    GET api/v1/market/getOpenPositions\n")])])]), a("p", [a("strong", [t._v("请求参数")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("必填")]), t._v(" "), a("th", [t._v("字段描述")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("symbol")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("是")]), t._v(" "), a("td", [t._v("合约名称")]), t._v(" "), a("td", [t._v('合约名称中需有"-"，如BTC-USDT')])])])]), t._v(" "), a("p", [a("strong", [t._v("返回值说明")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("volume")]), t._v(" "), a("td", [t._v("float64")]), t._v(" "), a("td", [t._v("持仓数量")])]), t._v(" "), a("tr", [a("td", [t._v("unit")]), t._v(" "), a("td", [t._v("string")]), t._v(" "), a("td", [t._v("持仓数量对应的单位，CONT(张), BTC, ETH, LINK, BCH等等")])])])]), t._v(" "), a("div", {staticClass: "language-javascript extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-javascript"}
            }, [a("code", [t._v("# Response\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"code"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"msg"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('""')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"data"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"10.00"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"unit"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"BTC"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n")])])]), a("h2", {attrs: {id: "_10-19"}}, [a("a", {
                staticClass: "header-anchor",
                attrs: {href: "#_10-19"}
            }, [t._v("#")]), t._v(" 10. 19")]), t._v(" "), a("p", [a("strong", [t._v("HTTP Request")])]), t._v(" "), a("div", {staticClass: "language-http extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-http"}
            }, [a("code", [t._v("    # Request\n    GET api/v1/market/getTicker\n")])])]), a("p", [a("strong", [t._v("请求参数")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("必填")]), t._v(" "), a("th", [t._v("字段描述")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("symbol")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("否")]), t._v(" "), a("td", [t._v("合约名称")]), t._v(" "), a("td", [t._v('合约名称中需有"-"，如BTC-USDT')])])])]), t._v(" "), a("p", [a("strong", [t._v("返回值说明")])]), t._v(" "), a("table", [a("thead", [a("tr", [a("th", [t._v("参数名")]), t._v(" "), a("th", [t._v("参数Types")]), t._v(" "), a("th", [t._v("描述")])])]), t._v(" "), a("tbody", [a("tr", [a("td", [t._v("symbol")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("合约名称")])]), t._v(" "), a("tr", [a("td", [t._v("priceChange")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("价格变动, 单位是USDT")])]), t._v(" "), a("tr", [a("td", [t._v("priceChangePercent")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("价格变动百分比")])]), t._v(" "), a("tr", [a("td", [t._v("lastPrice")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("最新交易价格")])]), t._v(" "), a("tr", [a("td", [t._v("lastVolume")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("最新交易数量")])]), t._v(" "), a("tr", [a("td", [t._v("highPrice")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("24小时最高价")])]), t._v(" "), a("tr", [a("td", [t._v("lowPrice")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("24小时最低价")])]), t._v(" "), a("tr", [a("td", [t._v("volume")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("24小时成交量")])]), t._v(" "), a("tr", [a("td", [t._v("dayVolume")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("24小时成交额, 单位是USDT")])]), t._v(" "), a("tr", [a("td", [t._v("openPrice")]), t._v(" "), a("td", [t._v("String")]), t._v(" "), a("td", [t._v("24小时内第一个价格")])])])]), t._v(" "), a("div", {staticClass: "language-javascript extra-class"}, [a("pre", {
                pre: !0,
                attrs: {class: "language-javascript"}
            }, [a("code", [t._v("# Response\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"code"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token number"}
            }, [t._v("0")]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"msg"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('""')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"data"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("{")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"symbol"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"BTC-USDT"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"priceChange"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"10.00"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"priceChangePercent"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"10"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"lastPrice"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"5738.23"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"lastVolume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"31.21"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"highPrice"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"5938.23"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"lowPrice"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"5238.23"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"volume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"23211231.13"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"dayVolume"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"213124412412.47"')]), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v(",")]), t._v("\n          "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"openPrice"')]), a("span", {
                pre: !0,
                attrs: {class: "token operator"}
            }, [t._v(":")]), t._v(" "), a("span", {
                pre: !0,
                attrs: {class: "token string"}
            }, [t._v('"5828.32"')]), t._v("\n        "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n    "), a("span", {
                pre: !0,
                attrs: {class: "token punctuation"}
            }, [t._v("}")]), t._v("\n")])])])])
        }), [], !1, null, null, null);
        s.default = r.exports
    }
}]);