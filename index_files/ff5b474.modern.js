!(function (e) {
    function r(data) {
        for (var r, n, f = data[0], d = data[1], l = data[2], i = 0, h = []; i < f.length; i++) (n = f[i]), Object.prototype.hasOwnProperty.call(o, n) && o[n] && h.push(o[n][0]), (o[n] = 0);
        for (r in d) Object.prototype.hasOwnProperty.call(d, r) && (e[r] = d[r]);
        for (v && v(data); h.length; ) h.shift()();
        return c.push.apply(c, l || []), t();
    }
    function t() {
        for (var e, i = 0; i < c.length; i++) {
            for (var r = c[i], t = !0, n = 1; n < r.length; n++) {
                var d = r[n];
                0 !== o[d] && (t = !1);
            }
            t && (c.splice(i--, 1), (e = f((f.s = r[0]))));
        }
        return e;
    }
    var n = {},
        o = { 36: 0 },
        c = [];
    function f(r) {
        if (n[r]) return n[r].exports;
        var t = (n[r] = { i: r, l: !1, exports: {} });
        return e[r].call(t.exports, t, t.exports, f), (t.l = !0), t.exports;
    }

    (f.e = function (e) {
    var r = [],
        t = o[e];
    if (0 !== t)
        if (t) r.push(t[2]);
        else {
            var n = new Promise(function (r, n) {
                t = o[e] = [r, n];
            });
            r.push((t[2] = n));
            var c,
                script = document.createElement("script");
            script.charset = "utf-8";
            script.timeout = 120;
            if (f.nc) script.setAttribute("nonce", f.nc);

            console.log("Attempting to load:", f.p + "" + {/* chunk mappings */}[e] + ".modern.js");
              
            script.src = f.p + "" + {
                                0: "eab1433",
                                1: "816cfbc",
                                2: "9993b2d",
                                3: "08a03d7",
                                4: "0fac5ea",
                                5: "d6464ec",
                                6: "02f21cb",
                                7: "bad3eca",
                                8: "ec2b898",
                                9: "d957850",
                                10: "dd27eb8",
                                11: "e70ef57",
                                12: "5edb6a7",
                                13: "5e6ab0d",
                                14: "b101012",
                                15: "cf95e63",
                                16: "c764d1e",
                                17: "0e133a9",
                                18: "7b92fa8",
                                19: "dc81e55",
                                20: "6651f5c",
                                21: "13543aa",
                                22: "12022ec",
                                23: "69a05f9",
                                24: "ebd5ed2",
                                27: "008a328",
                                28: "9de67c4",
                                29: "b6cd757",
                                30: "95470f2",
                                31: "d1815da",
                                32: "bbbd758",
                                33: "3e9e756",
                                34: "c2970de",
                                35: "d388cae",
            }[e] + ".modern.js";

            c = function (r) {
                // script.onerror = script.onload = null;
                clearTimeout(l);
                var t = o[e];
                if (0 !== t) {
                    if (t) {
                        var n = r && (r.type === "load" ? "missing" : r.type);
                        var c = r && r.target && r.target.src;
                        console.warn("Chunk " + e + " failed to load", n, c);
                        // Resolve the promise instead of rejecting
                        t[0]();
                    }
                    o[e] = undefined;
                }
            };

            var l = setTimeout(function () {
                c({ type: "timeout", target: script });
            }, 120000);

            // script.onerror = script.onload = c;
            document.head.appendChild(script);
        }
    return Promise.all(r);
}),
        
        (f.m = e),
        (f.c = n),
        (f.d = function (e, r, t) {
            f.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
        }),
        (f.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (f.t = function (e, r) {
            if ((1 & r && (e = f(e)), 8 & r)) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var t = Object.create(null);
            if ((f.r(t), Object.defineProperty(t, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e))
                for (var n in e)
                    f.d(
                        t,
                        n,
                        function (r) {
                            return e[r];
                        }.bind(null, n)
                    );
            return t;
        }),
        (f.n = function (e) {
            var r =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return f.d(r, "a", r), r;
        }),
        (f.o = function (object, e) {
            return Object.prototype.hasOwnProperty.call(object, e);
        }),
        (f.p = "/_nuxt/"),
        (f.oe = function (e) {
            throw (console.error(e), e);
        });
    var d = (window.webpackJsonp = window.webpackJsonp || []),
        l = d.push.bind(d);
    (d.push = r), (d = d.slice());
    for (var i = 0; i < d.length; i++) r(d[i]);
    var v = l;
    t();
})([]);
window.addEventListener('error', function(event) {
    console.warn('Global error:', event.error);
    event.preventDefault(); // Prevent the error from causing a page reload
    return true; // Prevent the error from being reported
});
window.addEventListener('unhandledrejection', function(event) {
    console.warn('Unhandled promise rejection:', event.reason);
    event.preventDefault();
});
