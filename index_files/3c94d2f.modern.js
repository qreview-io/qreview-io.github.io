(window.webpackJsonp = window.webpackJsonp || []).push([
    [25],
    [
        ,
        ,
        function (e, t, r) {
            "use strict";
            r.d(t, "k", function () {
                return l;
            }),
                r.d(t, "m", function () {
                    return m;
                }),
                r.d(t, "l", function () {
                    return d;
                }),
                r.d(t, "e", function () {
                    return c;
                }),
                r.d(t, "b", function () {
                    return h;
                }),
                r.d(t, "s", function () {
                    return _;
                }),
                r.d(t, "g", function () {
                    return f;
                }),
                r.d(t, "h", function () {
                    return x;
                }),
                r.d(t, "d", function () {
                    return w;
                }),
                r.d(t, "r", function () {
                    return v;
                }),
                r.d(t, "j", function () {
                    return y;
                }),
                r.d(t, "t", function () {
                    return k;
                }),
                r.d(t, "o", function () {
                    return F;
                }),
                r.d(t, "q", function () {
                    return T;
                }),
                r.d(t, "f", function () {
                    return C;
                }),
                r.d(t, "c", function () {
                    return L;
                }),
                r.d(t, "i", function () {
                    return S;
                }),
                r.d(t, "p", function () {
                    return I;
                }),
                r.d(t, "a", function () {
                    return N;
                }),
                r.d(t, "v", function () {
                    return $;
                }),
                r.d(t, "n", function () {
                    return B;
                }),
                r.d(t, "u", function () {
                    return A;
                });
            var o = r(1),
                n = r(7);
            function l(e) {
                o.default.config.errorHandler && o.default.config.errorHandler(e);
            }
            function m(e) {
                return e.then((e) => e.default || e);
            }
            function d(e) {
                return e.$options && "function" == typeof e.$options.fetch && !e.$options.fetch.length;
            }
            function c(e, t = []) {
                const r = e.$children || [];
                for (const e of r) e.$fetch ? t.push(e) : e.$children && c(e, t);
                return t;
            }
            function h(e, t) {
                if (!t && e.options.__hasNuxtData) return;
                const r =
                    e.options._originDataFn ||
                    e.options.data ||
                    function () {
                        return {};
                    };
                (e.options._originDataFn = r),
                    (e.options.data = function () {
                        const data = r.call(this, this);
                        return this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]), { ...data, ...t };
                    }),
                    (e.options.__hasNuxtData = !0),
                    e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data);
            }
            function _(e) {
                return (e.options && e._Ctor === e) || (e.options ? ((e._Ctor = e), (e.extendOptions = e.options)) : ((e = o.default.extend(e))._Ctor = e), !e.options.name && e.options.__file && (e.options.name = e.options.__file)), e;
            }
            function f(e, t = !1, r = "components") {
                return Array.prototype.concat.apply(
                    [],
                    e.matched.map((e, o) => Object.keys(e[r]).map((n) => (t && t.push(o), e[r][n])))
                );
            }
            function x(e, t = !1) {
                return f(e, t, "instances");
            }
            function w(e, t) {
                return Array.prototype.concat.apply(
                    [],
                    e.matched.map((e, r) => Object.keys(e.components).reduce((o, n) => (e.components[n] ? o.push(t(e.components[n], e.instances[n], e, n, r)) : delete e.components[n], o), []))
                );
            }
            function v(e, t) {
                return Promise.all(
                    w(e, async (e, r, o, n) => {
                        if ("function" == typeof e && !e.options)
                            try {
                                e = await e();
                            } catch (e) {
                                if (e && "ChunkLoadError" === e.name && window.sessionStorage) {
                                    const e = Date.now(),
                                        t = parseInt(window.sessionStorage.getItem("nuxt-reload"));
                                    (!t || t + 6e4 < e) && (window.sessionStorage.setItem("nuxt-reload", e), window.location.reload(!0));
                                }
                                throw e;
                            }
                        return (o.components[n] = e = _(e)), "function" == typeof t ? t(e, r, o, n) : e;
                    })
                );
            }
            async function y(e) {
                if (e) return await v(e), { ...e, meta: f(e).map((t, r) => ({ ...t.options.meta, ...(e.matched[r] || {}).meta })) };
            }
            async function k(e, t) {
                e.context ||
                    ((e.context = { isStatic: !1, isDev: !1, isHMR: !1, app: e, store: e.store, payload: t.payload, error: t.error, base: e.router.options.base, env: {} }),
                    t.req && (e.context.req = t.req),
                    t.res && (e.context.res = t.res),
                    t.ssrContext && (e.context.ssrContext = t.ssrContext),
                    (e.context.redirect = (t, path, r) => {
                        if (!t) return;
                        e.context._redirected = !0;
                        let o = typeof path;
                        if (
                            ("number" == typeof t || ("undefined" !== o && "object" !== o) || ((r = path || {}), (o = typeof (path = t)), (t = 302)),
                            "object" === o && (path = e.router.resolve(path).route.fullPath),
                            !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                        )
                            throw ((path = Object(n.d)(path, r)), window.location.replace(path), new Error("ERR_REDIRECT"));
                        e.context.next({ path: path, query: r, status: t });
                    }),
                    (e.context.nuxtState = window.__NUXT__));
                const [r, o] = await Promise.all([y(t.route), y(t.from)]);
                t.route && (e.context.route = r),
                    t.from && (e.context.from = o),
                    (e.context.next = t.next),
                    (e.context._redirected = !1),
                    (e.context._errored = !1),
                    (e.context.isHMR = !1),
                    (e.context.params = e.context.route.params || {}),
                    (e.context.query = e.context.route.query || {});
            }
            function F(e, t) {
                return !e.length || t._redirected || t._errored ? Promise.resolve() : T(e[0], t).then(() => F(e.slice(1), t));
            }
            function T(e, t) {
                let r;
                return (
                    (r =
                        2 === e.length
                            ? new Promise((r) => {
                                  e(t, function (e, data) {
                                      e && t.error(e), r((data = data || {}));
                                  });
                              })
                            : e(t)),
                    r && r instanceof Promise && "function" == typeof r.then ? r : Promise.resolve(r)
                );
            }
            function C(base, e) {
                if ("hash" === e) return window.location.hash.replace(/^#\//, "");
                base = decodeURI(base).slice(0, -1);
                let path = decodeURI(window.location.pathname);
                base && path.startsWith(base) && (path = path.slice(base.length));
                const t = (path || "/") + window.location.search + window.location.hash;
                return Object(n.c)(t);
            }
            function L(e, t) {
                return (function (e, t) {
                    const r = new Array(e.length);
                    for (let i = 0; i < e.length; i++) "object" == typeof e[i] && (r[i] = new RegExp("^(?:" + e[i].pattern + ")$", W(t)));
                    return function (t, o) {
                        let path = "";
                        const data = t || {},
                            n = (o || {}).pretty ? z : encodeURIComponent;
                        for (let i = 0; i < e.length; i++) {
                            const t = e[i];
                            if ("string" == typeof t) {
                                path += t;
                                continue;
                            }
                            const o = data[t.name || "pathMatch"];
                            let l;
                            if (null == o) {
                                if (t.optional) {
                                    t.partial && (path += t.prefix);
                                    continue;
                                }
                                throw new TypeError('Expected "' + t.name + '" to be defined');
                            }
                            if (Array.isArray(o)) {
                                if (!t.repeat) throw new TypeError('Expected "' + t.name + '" to not repeat, but received `' + JSON.stringify(o) + "`");
                                if (0 === o.length) {
                                    if (t.optional) continue;
                                    throw new TypeError('Expected "' + t.name + '" to not be empty');
                                }
                                for (let e = 0; e < o.length; e++) {
                                    if (((l = n(o[e])), !r[i].test(l))) throw new TypeError('Expected all "' + t.name + '" to match "' + t.pattern + '", but received `' + JSON.stringify(l) + "`");
                                    path += (0 === e ? t.prefix : t.delimiter) + l;
                                }
                            } else {
                                if (((l = t.asterisk ? P(o) : n(o)), !r[i].test(l))) throw new TypeError('Expected "' + t.name + '" to match "' + t.pattern + '", but received "' + l + '"');
                                path += t.prefix + l;
                            }
                        }
                        return path;
                    };
                })(
                    (function (e, t) {
                        const r = [];
                        let o = 0,
                            n = 0,
                            path = "";
                        const l = (t && t.delimiter) || "/";
                        let m;
                        for (; null != (m = D.exec(e)); ) {
                            const t = m[0],
                                d = m[1],
                                c = m.index;
                            if (((path += e.slice(n, c)), (n = c + t.length), d)) {
                                path += d[1];
                                continue;
                            }
                            const h = e[n],
                                _ = m[2],
                                f = m[3],
                                x = m[4],
                                w = m[5],
                                v = m[6],
                                y = m[7];
                            path && (r.push(path), (path = ""));
                            const k = null != _ && null != h && h !== _,
                                F = "+" === v || "*" === v,
                                T = "?" === v || "*" === v,
                                C = m[2] || l,
                                pattern = x || w;
                            r.push({ name: f || o++, prefix: _ || "", delimiter: C, optional: T, repeat: F, partial: k, asterisk: Boolean(y), pattern: pattern ? j(pattern) : y ? ".*" : "[^" + E(C) + "]+?" });
                        }
                        n < e.length && (path += e.substr(n));
                        path && r.push(path);
                        return r;
                    })(e, t),
                    t
                );
            }
            function S(e, t) {
                const r = {},
                    o = { ...e, ...t };
                for (const n in o) String(e[n]) !== String(t[n]) && (r[n] = !0);
                return r;
            }
            function I(e) {
                let t;
                if (e.message || "string" == typeof e) t = e.message || e;
                else
                    try {
                        t = JSON.stringify(e, null, 2);
                    } catch (r) {
                        t = `[${e.constructor.name}]`;
                    }
                return { ...e, message: t, statusCode: e.statusCode || e.status || (e.response && e.response.status) || 500 };
            }
            (window.onNuxtReadyCbs = []),
                (window.onNuxtReady = (e) => {
                    window.onNuxtReadyCbs.push(e);
                });
            const D = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
            function z(e, t) {
                const r = t ? /[?#]/g : /[/?#]/g;
                return encodeURI(e).replace(r, (e) => "%" + e.charCodeAt(0).toString(16).toUpperCase());
            }
            function P(e) {
                return z(e, !0);
            }
            function E(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
            }
            function j(e) {
                return e.replace(/([=!:$/()])/g, "\\$1");
            }
            function W(e) {
                return e && e.sensitive ? "" : "i";
            }
            function N(e, t, r) {
                e.$options[t] || (e.$options[t] = []), e.$options[t].includes(r) || e.$options[t].push(r);
            }
            const $ = n.b,
                B = (n.e, n.a);
            function A(e) {
                try {
                    window.history.scrollRestoration = e;
                } catch (e) {}
            }
        },
        ,
        ,
        ,
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = { name: "StreamField", props: { data: {} }, components: { DynamicBlock: r(38).default } },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r(
                            "div",
                            e._l(e.data, function (e) {
                                return r("DynamicBlock", { key: e.id, attrs: { data: e } });
                            }),
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { DynamicBlock: r(38).default });
        },
        ,
        function (e, r, o) {
            "use strict";
            o.d(r, "b", function () {
                return At;
            }),
                o.d(r, "a", function () {
                    return I;
                });
            var n = {};
            o.r(n),
                o.d(n, "Button", function () {
                    return G;
                }),
                o.d(n, "CustomCursor", function () {
                    return U;
                }),
                o.d(n, "DragSlider", function () {
                    return J;
                }),
                o.d(n, "FaqItem", function () {
                    return Y;
                }),
                o.d(n, "Footer", function () {
                    return K;
                }),
                o.d(n, "Loading", function () {
                    return X;
                }),
                o.d(n, "MobilePhone", function () {
                    return Z;
                }),
                o.d(n, "Navigation", function () {
                    return Q;
                }),
                o.d(n, "DynamicBlock", function () {
                    return ee;
                }),
                o.d(n, "StreamField", function () {
                    return te;
                }),
                o.d(n, "CheckboxField", function () {
                    return ie;
                }),
                o.d(n, "FieldGroup", function () {
                    return re;
                }),
                o.d(n, "FileField", function () {
                    return ae;
                }),
                o.d(n, "FormError", function () {
                    return oe;
                }),
                o.d(n, "FormLabel", function () {
                    return ne;
                }),
                o.d(n, "GenericForm", function () {
                    return se;
                }),
                o.d(n, "GenericFormFactory", function () {
                    return le;
                }),
                o.d(n, "RadioField", function () {
                    return me;
                }),
                o.d(n, "RangeField", function () {
                    return de;
                }),
                o.d(n, "SelectField", function () {
                    return ce;
                }),
                o.d(n, "TextField", function () {
                    return pe;
                }),
                o.d(n, "TextareaField", function () {
                    return he;
                }),
                o.d(n, "Tooltip", function () {
                    return ge;
                });
            var l = o(1),
                m = o(23),
                d = o(22),
                c = o(39),
                h = o.n(c),
                _ = o(12),
                f = o.n(_),
                x = o(40),
                w = o(7),
                v = o(2);
            "scrollRestoration" in window.history &&
                (Object(v.u)("manual"),
                window.addEventListener("beforeunload", () => {
                    Object(v.u)("auto");
                }),
                window.addEventListener("load", () => {
                    Object(v.u)("manual");
                }));
            const y = () => {};
            l.default.use(x.a);
            const k = {
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function (e, t, r) {
                    let o = !1;
                    const n = e !== t;
                    r
                        ? (o = r)
                        : n &&
                          (function (e) {
                              const t = Object(v.g)(e);
                              if (1 === t.length) {
                                  const { options: e = {} } = t[0];
                                  return !1 !== e.scrollToTop;
                              }
                              return t.some(({ options: e }) => e && e.scrollToTop);
                          })(e) &&
                          (o = { x: 0, y: 0 });
                    const l = window.$nuxt;
                    return (
                        (!n || (e.path === t.path && e.hash !== t.hash)) && l.$nextTick(() => l.$emit("triggerScroll")),
                        new Promise((t) => {
                            l.$once("triggerScroll", () => {
                                if (e.hash) {
                                    let t = e.hash;
                                    void 0 !== window.CSS && void 0 !== window.CSS.escape && (t = "#" + window.CSS.escape(t.substr(1)));
                                    try {
                                        document.querySelector(t) && (o = { selector: t });
                                    } catch (e) {
                                        console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).");
                                    }
                                }
                                t(o);
                            });
                        })
                    );
                },
                routes: [
                    { path: "/en/about-us/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 161))), meta: { sameTemplate: !0 }, alias: ["/de/about-us/"], pathToRegexpOptions: { strict: !0 }, name: "AboutUs" },
                    {
                        path: "/en/news/blog/:slug/",
                        component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 172))),
                        meta: { sameTemplate: !0 },
                        alias: ["/de/news/blog/:slug/"],
                        pathToRegexpOptions: { strict: !0 },
                        name: "BlogDetail",
                    },
                    { path: "/en/news/blog/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 173))), meta: { sameTemplate: !0 }, alias: ["/de/news/blog/"], pathToRegexpOptions: { strict: !0 }, name: "BlogList" },
                    { path: "/en/customers/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 162))), meta: { sameTemplate: !0 }, alias: ["/de/customers/"], pathToRegexpOptions: { strict: !0 }, name: "ComplexCustomers" },
                    { path: "/en/cookies/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 174))), meta: { sameTemplate: !0 }, alias: ["/de/cookies/"], pathToRegexpOptions: { strict: !0 }, name: "Cookies" },
                    { path: "/en/features/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 163))), meta: { sameTemplate: !0 }, alias: ["/de/features/"], pathToRegexpOptions: { strict: !0 }, name: "Features" },
                    { path: "/en/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 175))), meta: { sameTemplate: !0 }, alias: ["/de/"], pathToRegexpOptions: { strict: !0 }, name: "Home" },
                    { path: "/en/jobs/:slug/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 164))), meta: { sameTemplate: !0 }, alias: ["/de/jobs/:slug/"], pathToRegexpOptions: { strict: !0 }, name: "JobDetail" },
                    { path: "/en/jobs/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 165))), meta: { sameTemplate: !0 }, alias: ["/de/jobs/"], pathToRegexpOptions: { strict: !0 }, name: "JobList" },
                    { path: "/en/join/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 166))), meta: { sameTemplate: !0 }, alias: ["/de/join/"], pathToRegexpOptions: { strict: !0 }, name: "Join" },
                    { path: "/en/join/thank-you/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 167))), meta: { sameTemplate: !0 }, alias: ["/de/join/danke/"], pathToRegexpOptions: { strict: !0 }, name: "JoinThankYou" },
                    { path: "/en/news/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 168))), meta: { sameTemplate: !0 }, alias: ["/de/news/"], pathToRegexpOptions: { strict: !0 }, name: "NewsList" },
                    { path: "/en/partners/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 176))), meta: { sameTemplate: !0 }, alias: ["/de/partner/"], pathToRegexpOptions: { strict: !0 }, name: "Partners" },
                    {
                        path: "/en/news/press/:slug/",
                        component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 177))),
                        meta: { sameTemplate: !0 },
                        alias: ["/de/news/press/:slug/"],
                        pathToRegexpOptions: { strict: !0 },
                        name: "PressDetail",
                    },
                    { path: "/en/news/press/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 178))), meta: { sameTemplate: !0 }, alias: ["/de/news/press/"], pathToRegexpOptions: { strict: !0 }, name: "PressList" },
                    { path: "/en/pricing/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 169))), meta: { sameTemplate: !0 }, alias: ["/de/pricing/"], pathToRegexpOptions: { strict: !0 }, name: "Pricing" },
                    {
                        path: "/en/privacy-policy/",
                        component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 170))),
                        meta: { sameTemplate: !0 },
                        alias: ["/de/privacy-policy/"],
                        pathToRegexpOptions: { strict: !0 },
                        name: "PrivacyPolicy",
                    },
                    { path: "/en/support/", component: () => Object(v.m)(Promise.resolve().then(o.bind(null, 171))), meta: { sameTemplate: !0 }, alias: ["/de/support/"], pathToRegexpOptions: { strict: !0 }, name: "Support" },
                ],
                fallback: !1,
            };
            var F = {
                name: "NuxtChild",
                functional: !0,
                props: { nuxtChildKey: { type: String, default: "" }, keepAlive: Boolean, keepAliveProps: { type: Object, default: void 0 } },
                render(e, { parent: t, data: data, props: r }) {
                    const o = t.$createElement;
                    data.nuxtChild = !0;
                    const n = t,
                        l = t.$nuxt.nuxt.transitions,
                        m = t.$nuxt.nuxt.defaultTransition;
                    let d = 0;
                    for (; t; ) t.$vnode && t.$vnode.data.nuxtChild && d++, (t = t.$parent);
                    data.nuxtChildDepth = d;
                    const c = l[d] || m,
                        h = {};
                    T.forEach((e) => {
                        void 0 !== c[e] && (h[e] = c[e]);
                    });
                    const _ = {};
                    C.forEach((e) => {
                        "function" == typeof c[e] && (_[e] = c[e].bind(n));
                    });
                    {
                        const e = _.beforeEnter;
                        _.beforeEnter = (t) => {
                            if (
                                (window.$nuxt.$nextTick(() => {
                                    window.$nuxt.$emit("triggerScroll");
                                }),
                                e)
                            )
                                return e.call(n, t);
                        };
                    }
                    if (!1 === c.css) {
                        const e = _.leave;
                        (!e || e.length < 2) &&
                            (_.leave = (t, r) => {
                                e && e.call(n, t), n.$nextTick(r);
                            });
                    }
                    let f = o("routerView", data);
                    return r.keepAlive && (f = o("keep-alive", { props: r.keepAliveProps }, [f])), o("transition", { props: h, on: _ }, [f]);
                },
            };
            const T = [
                    "name",
                    "mode",
                    "appear",
                    "css",
                    "type",
                    "duration",
                    "enterClass",
                    "leaveClass",
                    "appearClass",
                    "enterActiveClass",
                    "enterActiveClass",
                    "leaveActiveClass",
                    "appearActiveClass",
                    "enterToClass",
                    "leaveToClass",
                    "appearToClass",
                ],
                C = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"];
            var L = {
                    props: { error: {} },
                    mounted() {
                        this.$store.dispatch("setAxiosHeaders");
                    },
                },
                S = o(0),
                I = Object(S.a)(
                    L,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("div", { staticClass: "errorPage" }, [
                            e._m(0),
                            e._v(" "),
                            r(
                                "div",
                                { staticClass: "error__Button" },
                                [
                                    r("n-link", { staticClass: "btn--Black", attrs: { to: e.$store.getters.link("Home") } }, [
                                        e._v("\n      Homepage\n      "),
                                        r("span", [
                                            r(
                                                "svg",
                                                {
                                                    directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                    attrs: { viewBox: "0 0 15 14", xmlns: "http://www.w3.org/2000/svg", inline: "", "data-src": "@/assets/svgs/arrow.svg", role: "presentation", focusable: "false", tabindex: "-1" },
                                                },
                                                [
                                                    r("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                        r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                    ]),
                                                ]
                                            ),
                                        ]),
                                    ]),
                                ],
                                1
                            ),
                        ]);
                    },
                    [
                        function () {
                            var e = this,
                                t = e.$createElement,
                                r = e._self._c || t;
                            return r("h1", { staticClass: "title--Light" }, [r("span", [r("b", [e._v("404")]), e._v("\n      ERROR PAGE\n    ")])]);
                        },
                    ],
                    !1,
                    null,
                    null,
                    null
                ).exports,
                D = {
                    name: "Nuxt",
                    components: { NuxtChild: F, NuxtError: I },
                    props: { nuxtChildKey: { type: String, default: void 0 }, keepAlive: Boolean, keepAliveProps: { type: Object, default: void 0 }, name: { type: String, default: "default" } },
                    errorCaptured(e) {
                        this.displayingNuxtError && ((this.errorFromNuxtError = e), this.$forceUpdate());
                    },
                    computed: {
                        routerViewKey() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(v.c)(this.$route.matched[0].path)(this.$route.params);
                            const [e] = this.$route.matched;
                            if (!e) return this.$route.path;
                            const t = e.components.default;
                            if (t && t.options) {
                                const { options: e } = t;
                                if (e.key) return "function" == typeof e.key ? e.key(this.$route) : e.key;
                            }
                            return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "");
                        },
                    },
                    beforeCreate() {
                        l.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
                    },
                    render(e) {
                        return this.nuxt.err
                            ? this.errorFromNuxtError
                                ? (this.$nextTick(() => (this.errorFromNuxtError = !1)),
                                  e("div", {}, [
                                      e("h2", "An error occurred while showing the error page"),
                                      e("p", "Unfortunately an error occurred and while showing the error page another error occurred"),
                                      e("p", `Error details: ${this.errorFromNuxtError.toString()}`),
                                      e("nuxt-link", { props: { to: "/" } }, "Go back to home"),
                                  ]))
                                : ((this.displayingNuxtError = !0), this.$nextTick(() => (this.displayingNuxtError = !1)), e(I, { props: { error: this.nuxt.err } }))
                            : e("NuxtChild", { key: this.routerViewKey, props: this.$props });
                    },
                },
                z = o(64),
                P = (o(102), { mounted() {} }),
                E = Object(S.a)(
                    P,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("main", { staticClass: "page about" }, [r("Navigation"), e._v(" "), r("nuxt"), e._v(" "), r("CustomCursor"), e._v(" "), r("Footer")], 1);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                ),
                j = E.exports;
            installComponents(E, { Navigation: o(35).default, CustomCursor: o(36).default, Footer: o(26).default });
            var W = { mounted() {} },
                N = Object(S.a)(
                    W,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("main", { staticClass: "page" }, [r("Navigation"), e._v(" "), r("nuxt"), e._v(" "), r("CustomCursor"), e._v(" "), r("Footer")], 1);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                ),
                $ = N.exports;
            installComponents(N, { Navigation: o(35).default, CustomCursor: o(36).default, Footer: o(26).default });
            var B = { mounted() {} },
                A = Object(S.a)(
                    B,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("main", { staticClass: "page welcome" }, [r("Navigation"), e._v(" "), r("nuxt"), e._v(" "), r("CustomCursor"), e._v(" "), r("Footer")], 1);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                ),
                O = A.exports;
            installComponents(A, { Navigation: o(35).default, CustomCursor: o(36).default, Footer: o(26).default });
            const R = { _about: Object(v.s)(j), _default: Object(v.s)($), _welcome: Object(v.s)(O) };
            var M = {
                render(e, t) {
                    const r = e("NuxtLoading", { ref: "loading" }),
                        o = e(this.layout || "nuxt"),
                        n = e("div", { domProps: { id: "__layout" }, key: this.layoutName }, [o]),
                        l = e(
                            "transition",
                            {
                                props: { name: "layout", mode: "out-in" },
                                on: {
                                    beforeEnter(e) {
                                        window.$nuxt.$nextTick(() => {
                                            window.$nuxt.$emit("triggerScroll");
                                        });
                                    },
                                },
                            },
                            [n]
                        );
                    return e("div", { domProps: { id: "__nuxt" } }, [r, l]);
                },
                data: () => ({ isOnline: !0, layout: null, layoutName: "", nbFetching: 0 }),
                beforeCreate() {
                    l.default.util.defineReactive(this, "nuxt", this.$options.nuxt);
                },
                created() {
                    (this.$root.$options.$nuxt = this),
                        (window.$nuxt = this),
                        this.refreshOnlineStatus(),
                        window.addEventListener("online", this.refreshOnlineStatus),
                        window.addEventListener("offline", this.refreshOnlineStatus),
                        (this.error = this.nuxt.error),
                        (this.context = this.$options.context);
                },
                async mounted() {
                    this.$loading = this.$refs.loading;
                },
                watch: { "nuxt.err": "errorChanged" },
                computed: {
                    isOffline() {
                        return !this.isOnline;
                    },
                    isFetching() {
                        return this.nbFetching > 0;
                    },
                },
                methods: {
                    refreshOnlineStatus() {
                        void 0 === window.navigator.onLine ? (this.isOnline = !0) : (this.isOnline = window.navigator.onLine);
                    },
                    async refresh() {
                        const e = Object(v.h)(this.$route);
                        if (!e.length) return;
                        this.$loading.start();
                        const t = e.map((e) => {
                            const p = [];
                            if ((e.$options.fetch && e.$options.fetch.length && p.push(Object(v.q)(e.$options.fetch, this.context)), e.$fetch)) p.push(e.$fetch());
                            else for (const component of Object(v.e)(e.$vnode.componentInstance)) p.push(component.$fetch());
                            return (
                                e.$options.asyncData &&
                                    p.push(
                                        Object(v.q)(e.$options.asyncData, this.context).then((t) => {
                                            for (const r in t) l.default.set(e.$data, r, t[r]);
                                        })
                                    ),
                                Promise.all(p)
                            );
                        });
                        try {
                            await Promise.all(t);
                        } catch (e) {
                            this.$loading.fail(e), Object(v.k)(e), this.error(e);
                        }
                        this.$loading.finish();
                    },
                    errorChanged() {
                        if (this.nuxt.err) {
                            this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                            let e = (I.options || I).layout;
                            "function" == typeof e && (e = e(this.context)), this.setLayout(e);
                        }
                    },
                    setLayout(e) {
                        return (e && R["_" + e]) || (e = "default"), (this.layoutName = e), (this.layout = R["_" + e]), this.layout;
                    },
                    loadLayout: (e) => ((e && R["_" + e]) || (e = "default"), Promise.resolve(R["_" + e])),
                },
                components: { NuxtLoading: z.default },
            };
            l.default.use(m.a);
            let H = {};
            (H = (function (e, t) {
                if ((e = e.default || e).commit) throw new Error(`[nuxt] ${t} should export a method that returns a Vuex instance.`);
                return (
                    "function" != typeof e && (e = Object.assign({}, e)),
                    (function (e, t) {
                        if (e.state && "function" != typeof e.state) {
                            console.warn(`'state' should be a method that returns an object in ${t}`);
                            const r = Object.assign({}, e.state);
                            e = Object.assign({}, e, { state: () => r });
                        }
                        return e;
                    })(e, t)
                );
            })(o(104), "store/index.js")),
                (H.modules = H.modules || {});
            const V = H instanceof Function ? H : () => new m.a.Store(Object.assign({ strict: !1 }, H));
            const G = () =>
                    Promise.resolve()
                        .then(o.bind(null, 10))
                        .then((e) => ue(e.default || e)),
                U = () =>
                    Promise.resolve()
                        .then(o.bind(null, 36))
                        .then((e) => ue(e.default || e)),
                J = () =>
                    o
                        .e(28)
                        .then(o.bind(null, 183))
                        .then((e) => ue(e.default || e)),
                Y = () =>
                    o
                        .e(29)
                        .then(o.bind(null, 188))
                        .then((e) => ue(e.default || e)),
                K = () =>
                    Promise.resolve()
                        .then(o.bind(null, 26))
                        .then((e) => ue(e.default || e)),
                X = () =>
                    Promise.resolve()
                        .then(o.bind(null, 64))
                        .then((e) => ue(e.default || e)),
                Z = () =>
                    o
                        .e(32)
                        .then(o.bind(null, 185))
                        .then((e) => ue(e.default || e)),
                Q = () =>
                    Promise.resolve()
                        .then(o.bind(null, 35))
                        .then((e) => ue(e.default || e)),
                ee = () =>
                    Promise.resolve()
                        .then(o.bind(null, 38))
                        .then((e) => ue(e.default || e)),
                te = () =>
                    Promise.resolve()
                        .then(o.bind(null, 6))
                        .then((e) => ue(e.default || e)),
                ie = () =>
                    o
                        .e(27)
                        .then(o.bind(null, 184))
                        .then((e) => ue(e.default || e)),
                re = () =>
                    o
                        .e(30)
                        .then(o.bind(null, 189))
                        .then((e) => ue(e.default || e)),
                ae = () =>
                    Promise.resolve()
                        .then(o.bind(null, 70))
                        .then((e) => ue(e.default || e)),
                oe = () =>
                    Promise.resolve()
                        .then(o.bind(null, 15))
                        .then((e) => ue(e.default || e)),
                ne = () =>
                    Promise.resolve()
                        .then(o.bind(null, 16))
                        .then((e) => ue(e.default || e)),
                se = () =>
                    Promise.all([o.e(0), o.e(31)])
                        .then(o.bind(null, 204))
                        .then((e) => ue(e.default || e)),
                le = () =>
                    o
                        .e(0)
                        .then(o.bind(null, 186))
                        .then((e) => ue(e.default || e)),
                me = () =>
                    o
                        .e(33)
                        .then(o.bind(null, 191))
                        .then((e) => ue(e.default || e)),
                de = () =>
                    o
                        .e(34)
                        .then(o.bind(null, 192))
                        .then((e) => ue(e.default || e)),
                ce = () =>
                    o
                        .e(35)
                        .then(o.bind(null, 190))
                        .then((e) => ue(e.default || e)),
                pe = () =>
                    Promise.resolve()
                        .then(o.bind(null, 29))
                        .then((e) => ue(e.default || e)),
                he = () =>
                    Promise.resolve()
                        .then(o.bind(null, 69))
                        .then((e) => ue(e.default || e)),
                ge = () =>
                    Promise.resolve()
                        .then(o.bind(null, 37))
                        .then((e) => ue(e.default || e));
            function ue(e) {
                if (!e || !e.functional) return e;
                const t = Array.isArray(e.props) ? e.props : Object.keys(e.props || {});
                return {
                    render(r) {
                        const o = {},
                            n = {};
                        for (const e in this.$attrs) t.includes(e) ? (n[e] = this.$attrs[e]) : (o[e] = this.$attrs[e]);
                        return r(e, { on: this.$listeners, attrs: o, props: n, scopedSlots: this.$scopedSlots }, this.$slots.default);
                    },
                };
            }
            for (const e in n) l.default.component(e, n[e]), l.default.component("Lazy" + e, n[e]);
            var _e = o(41),
                fe = o(65),
                be = o(66),
                xe = o(67),
                we = o(68),
                ve = (e, t) => {
                    l.default.component("GMap", fe.a),
                        l.default.component("GMapMarker", be.a),
                        l.default.component("GMapCircle", xe.a),
                        l.default.component("GMapInfoWindow", we.a),
                        t("GMaps", { apiKey: "AIzaSyC50nNHXYOWVS321x4--JGaZWiDSE5Gw-Q", loaded: !1, libraries: void 0 });
                },
                ye = o(9),
                ke = {
                    btnPreregister: "Open an account",
                    homeHero: {
                        title: "<span>Your online</span> <span><b>business</b></span> <span>account</span>",
                        titleMobile: "<span>Your online</span> <span><b>business</b> account</span>",
                        list: "\n          <li>Swiss IBAN</li>\n          <li>Online account opening</li>\n          <li>No minimum deposit amount</li>",
                        business: "<span>The <b>New</b></span> <span>Business class</span>",
                    },
                    scrollItems: {
                        itemTitle1: "Swiss business account",
                        itemText1: "Your digital account with a Swiss IBAN, specially developed for business customers.",
                        itemTitle2: "Premium support",
                        itemText2: "You will have a personal contact person at Relio who will assist you with all your needs.",
                        itemTitle3: "Foreign currencies",
                        itemText3: "Exchange money at attractive rates and hold multiple currencies in separate wallets.",
                        itemTitle4: "International payments",
                        itemText4: "Make international transactions without additional fees or hidden costs.",
                        itemTitle5: "Smart debit cards",
                        itemText5: "Give physical and virtual cards to your teams and employees and set individual budget limits.",
                        itemTitle6: "Software integrations",
                        itemText6: "Become more productive thanks to integrations with your business and accounting tools.",
                    },
                    homeFit: {
                        title: "The perfect fit for any type of company",
                        itemCategory1: "SMALL",
                        itemCategoryTitle1: "Freelancer",
                        itemCategoryText1: "Work more productively with an intuitive app.",
                        itemCategory2: "MEDIUM",
                        itemCategoryTitle2: "Startup",
                        itemCategoryText2: "Get started faster with online account opening.",
                        itemCategory3: "LARGE",
                        itemCategoryTitle3: "SME",
                        itemCategoryText3: "Save time with useful business features.",
                    },
                    homeSolutions: {
                        category: "S-L COMPLEX BUSINESS CASES",
                        title: "Tailor-made solutions for complex business cases:",
                        button: "GET A CUSTOM SOLUTION",
                        item1: "International business activities ",
                        item2: "Foreign owners and directors",
                        item3: "Complex ownership structures",
                        item4: "Innovative business models",
                        item5: "Industry-specific requirements",
                        btn: "Get a custom solution",
                    },
                    homeFeatures: {
                        category: "ABOUT US",
                        title: "Swissness for <br> your business",
                        itemTitle1: "Swiss Fintech",
                        itemText1: "Relio is a Swiss company headquartered in Zurich.",
                        itemTitle2: "FINMA regulation",
                        itemText2: "Relio is seeking a fintech license by the Swiss Financial Market Supervisory Authority (FINMA).",
                        itemTitle3: "SNB deposits",
                        itemText3: "Client funds are deposited securely at the Swiss National Bank (SNB).",
                        btn: "LEARN MORE ABOUT RELIO",
                    },
                    homePricing: {
                        category: "PRICING",
                        title: "The full package at an all-inclusive price",
                        text: "Pay a fixed monthly fee, without any additional hidden costs. Get a price tailored to your company needs.",
                        btn: "CALCULATE YOUR PRICE",
                        from: "From",
                    },
                    homeRegister: {
                        title: "<span>Register <b>online</b></span> <span>in minutes</span>",
                        itemStep1: "Step 1",
                        itemText1: "Answer some questions about your company.",
                        itemStep2: "Step 2",
                        itemText2: "Receive a price offer tailored to your business.",
                        itemStep3: "Step 3",
                        itemText3: "Start using your account as soon as your application is approved.",
                        btn: "REGISTER NOW",
                    },
                    homeNews: {
                        title: "Relio in the news",
                        itemTitle1: "HANDELSZEITUNG",
                        itemText1: "New FinTech launching: new offerings for SMEs are coming",
                        itemTitle2: "MONEYTODAY",
                        itemText2: "FinTech raises capital for digital SME account",
                        itemTitle3: "FINNEWS",
                        itemText3: "The co-founder of Penta launches the first Swiss digital account for SMEs",
                        itemTitle4: "TAGESANZEIGER",
                        itemText4: "FinTech start-ups and SMEs: win-win-win",
                    },
                    footer: {
                        terms1: "By clicking the submit button you confirm that you have read and understood our",
                        terms2: "",
                        termsLink: "Privacy Policy",
                        termsLink2: "privacy policy.",
                        category: "SUBSCRIBE TO NEWSLETTER",
                        btn: "SUBMIT",
                        placeholder: "Your Email",
                        success: "Thank you! Your submission has been received.",
                        error: "Something went wrong. Please try again or reach out to us at <a href='mailto:contact@relio.ch'>contact@relio.ch</a>",
                        cookieSettings: "Cookie Preferences",
                    },
                    about: {
                        heroTitle: "<span>WE'VE GOT</span> <span>YOU <b>COVERED</b></span>",
                        heroCategory: "MEET RELIO",
                        heroText1: "Opening a business account at traditional banks often means weeks of waiting, lots of paperwork, and poor service.",
                        heroText2: "Digital banks can do things differently. Unfortunately, the one-size-fits-all compliance and customer service of these neobanks just don't work for complex business clients.",
                        heroAbout: "Relio now offers the benefits of a digital <span>business account</span> to <span>complex companies</span> in need of a fully <span>customized approach.</span>",
                        heroBtn: "GET A CUSTOM SOLUTION",
                        heroUnderImage: "Relio Founder Team",
                        regulationDesktop: "<span>Swiss</span> <span>Regulation</span>",
                        regulationMobile: "<span>Swiss Regulation</span>",
                        regulationText1: "Relio is seeking a fintech license from the Swiss Financial Market Supervisory Authority FINMA.",
                        regulationText2:
                            "Customer funds get deposited at the Swiss National Bank and cannot be used for risk transactions, investments, or other purposes. Due to these restrictions, Relio's deposits are not covered by deposit insurance.",
                        regulationSpan: "Please note that Relio is not currently supervised by FINMA and will not offer financial services until the licensing process is complete.",
                        investorTitle: "Supported by leading investors",
                        investorBtn: "CONTACT FOR INVESTORS",
                        mapTitle: "Based in the heart of Zurich",
                        mapView: "Map View",
                        mapCity: "Switzerland",
                        jobsTitle: "Jobs at Relio",
                        jobsBtn: "All job listings",
                    },
                    jobList: { jobTitle: "<span><b>Jobs</b></span><span>at Relio</span>", formTitle: "Apply now", noPosition: "At the moment we have no open positions" },
                    navLang: "de",
                    join: {
                        title: "<span>Join <b>Relio</b></span>",
                        text: "Pre-register now and be among the first to use the latest Swiss digital account for businesses. Just type in your email address to start your application.",
                        note: "Note: the service is currently in development and is launching soon.",
                        label: "ENTER YOUR EMAIL ADDRESS",
                        formText: "By clicking the submit button you confirm that you have read and understood our {privacyPolicy}.",
                        formTextPrivacy: "privacy policy",
                        button: "Submit",
                        successTitle: "Please check your inbox!",
                        successText: "We have sent you a link to confirm your email address and to continue your pre-registration.",
                        errorTitle: "Something went <b>wrong.</b>",
                        errorText: "Please try again or reach out to us at <a href='mailto:contact@relio.ch'>contact@relio.ch</a>",
                    },
                    nav: { title: "<span>GESCHÄFTSKONTO</span> <span>PREISE</span> <span>ÜBER UNS</span> <span>HILFE</span>" },
                    support: {
                        title: "<span>You can</span><span><b>Count on us</b></span>",
                        submit: "By clicking the submit button you confirm that you have read and understood our {submitLink}.",
                        submitTextPrivacy: "privacy policy",
                        success: "Thank you! Your request has been received.",
                        error: "Something went wrong. Please try again or reach out to us at <a href='mailto:contact@relio.ch'>contact@relio.ch</a>",
                    },
                    pricing: { title: "<span>You <b>Set</b> The</span><span>Price</span>" },
                    partners: { title: "<span>Partner</span><span>With <b>US</b></span>", button: "Pre-register now" },
                    customers: { title: "<span>Business as</span><span><b>Unusual</b></span>" },
                    features: { title: "<span>The digital</span><span><b>Business</b> Account</span>" },
                    news: {
                        blogLoad: "All blog posts",
                        pressLoad: "All press releases",
                        blogListLead: "Latest insights about Relio and helpful tips for your business.",
                        blogListNewsletter: "Subscribe to our Newsletter",
                        pressListLead: "All press releases and media coverage about Relio",
                    },
                    jobDetail: {
                        terms1: "By clicking the submit button you confirm that you have read and understood our ",
                        terms2: ".",
                        termsLink: "privacy policy",
                        error: "Something went wrong. Please try again or reach out to us at <a href='mailto:contact@relio.ch'>contact@relio.ch</a>",
                        success: "Thank you! Your application has been received.",
                    },
                    privacyPage: {
                        content:
                            '\n    <h1>Privacy policy</h1>\n    <div class="intro">\n    <strong>\n    The responsible party within the meaning of data protection laws, in particular the Swiss Data Protection Act (DSG) and the EU General Data Protection Regulation (DSGVO), is:\n    </strong>\n    <p>\n    Relio AG\n    <br>\n    Hohlstrasse 188\n    <br>\n    8004 Zurich\n    <br>\n    E-mail: <a href="mailto:privacy@relio.ch">privacy@relio.ch</a>\n    <br>\n    WebSite <a href="http://www.relio.ch/">http://www.relio.ch/</a>\n    </p>\n    </div>\n    <h3>General notice</h3>\n    <p>\n    Based on Article 13 of the Swiss Federal Constitution and the data protection provisions of the Swiss Confederation (Data Protection Act, DSG), every person has the right to protection of their privacy as well as protection against misuse of their personal data. The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the legal data protection regulations as well as this privacy policy.\n    </p>\n    <p>\n    In cooperation with our hosting providers, we make every effort to protect the databases as well as possible against unauthorized access, loss, misuse or falsification. We would like to point out that data transmission on the Internet (e.g. communication by e-mail) can have security gaps. A complete protection of data against access by third parties is not possible. By using this website, you consent to the collection, processing and use of data in accordance with the following description. This website can generally be visited without registration. Data such as pages accessed or names of files accessed, date and time are stored on the server for statistical purposes without this data being directly related to your person. Personal data, in particular name, address or e-mail address are collected as far as possible on a voluntary basis. Without your consent, the data will not be passed on to third parties. Exceptions to this policy are the governing laws and regulations in Switzerland (StGB, OR, GwG, GwV etc.)\n    </p>\n    <h3>Privacy policy for cookies</h3>\n    <p>\n    This website uses cookies. These are small text files that make it possible to store specific information related to the user on the user\'s terminal device while the user is using the website. Cookies make it possible, in particular, to determine the frequency of use and number of users of the pages, to analyze behavior patterns of page use, but also to make our offer more customer-friendly. Cookies remain stored beyond the end of a browser session and can be retrieved when you visit the site again. If you do not wish this to happen, you should set your Internet browser so that it refuses to accept cookies. A general objection to the use of cookies used for online marketing purposes can be declared for a large number of the services, especially in the case of tracking, via the U.S. site <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a> or the EU site <a href="http://www.youronlinechoices.com/">http://www.youronlinechoices.com/</a>. Furthermore, the storage of cookies can be achieved by disabling them in the browser settings. Please note that in this case not all functions of this online offer can be used.\n    </p>\n    <h3>\n    Privacy policy for SSL/TLS encryption\n    </h3>\n    <p>\n    This website uses SSL/TLS encryption for security reasons and to protect the transmission of confidential content, such as inquiries that you send to us as the site operator. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line. If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.\n    </p>\n    <h3>\n    Third-party services\n    </h3>\n    <p>\n    This website may use Google Maps for embedding maps, Google Invisible reCAPTCHA for protection against bots and spam, and YouTube for embedding videos. These services of the American Google LLC use cookies, among other things, and as a result, data is transferred to Google in the USA, although we assume that no personal tracking takes place in this context solely through the use of our website. Google has undertaken to ensure adequate data protection in accordance with the US-European and the US-Swiss Privacy Shield. Further information can be found in Google\'s privacy policy.\n    </p>\n    <h3>\n    Privacy Policy for Pre-Registration and Contact Forms\n    </h3>\n    <p>\n    If you send us inquiries via contact form, your data from the inquiry form, including the contact data you provide there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. At the instruction of our users, we delete data records unless Relio is subject to a legal or regulatory retention obligation.\n    </p>\n    <h3>\n    Data protection declaration for newsletter data\n    </h3>\n    <p>\n    If you would like to receive the newsletter offered on this website, we require an e-mail address from you as well as information that allows us to verify that you are the owner of the specified e-mail address and agree to receive the newsletter. Further data will not be collected. We use this data exclusively for sending the requested information and do not pass it on to third parties. You can revoke your consent to the storage of the data, the e-mail address and their use for sending the newsletter at any time, for example via the "unsubscribe link" in the newsletter.\n    </p>\n    <h3>\n    Privacy policy for objection advertising mails\n    </h3>\n    <p>\n    The use of contact data published within the framework of the imprint obligation to send advertising and information material not expressly requested is hereby objected to. The operators of the pages expressly reserve the right to take legal action in the event of the unsolicited sending of advertising information, such as spam e-mails.\n    </p>\n    <h3>\n    Privacy policy for Google Analytics\n    </h3>\n    <p>\n    This website uses Google Analytics, a web analytics service provided by Google Ireland Limited. If the data controller on this website is located outside the European Economic Area or Switzerland, Google Analytics data processing is carried out by Google LLC. Google LLC and Google Ireland Limited are hereinafter referred to as "Google". The statistics obtained enable us to improve our offer and make it more interesting for you as a user. This website also uses Google Analytics for a cross-device analysis of visitor flows, which is carried out via a user ID. If you have a Google user account, you can deactivate the cross-device analysis of your usage in the settings there under "My data", "Personal data". The legal basis for the use of Google Analytics is Art. 6 para. 1 p. 1 lit. f DS-GVO. The IP address transmitted by your browser as part of Google Analytics will not be merged with other data from Google. We would like to point out that on this website Google Analytics has been extended by the code "_anonymizeIp();" to ensure anonymized collection of IP addresses. This means that IP addresses are processed in abbreviated form, which means that they cannot be linked to a specific person. If the data collected about you is related to a person, this is immediately excluded and the personal data is deleted immediately. Only in exceptional cases will the full IP address be transferred to a Google server in the USA and shortened there. On behalf of the operator of this website, Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity and providing other services relating to website activity and internet usage to the website operator. For the exceptional cases in which personal data is transferred to the USA, Google has submitted to the EU-US Privacy Shield, <a href="https://www.privacyshield.gov/EU-US-Framework">https://www.privacyshield.gov/EU-US-Framework</a>. Google Analytics uses cookies. The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. You can also prevent the collection of data generated by the cookie and related to your use of the website (including your IP address) to Google and the processing of this data by Google by downloading and installing the browser plugin available at the following link: Disable Google Analytics. In addition, you can also prevent the use of Google Analytics by clicking on this link: Disable Google Analytics. This will save a so-called opt-out cookie on your data carrier, which prevents the processing of personal data by Google Analytics. Please note that if you delete all cookies on your terminal device, these opt-out cookies will also be deleted, i.e. you will have to set the opt-out cookies again if you wish to continue to prevent this form of data collection. The opt-out cookies are set per browser and computer/end device and must therefore be activated separately for each browser, computer or other end device.\n    </p>\n    <h3>Google Tag Manager</h3>\n    <p>\n    Google Tag Manager is a solution with which we can manage so-called website tags via an interface and thus integrate Google Analytics and other Google marketing services into our online offering, for example. The Tag Manager itself, which implements the tags, does not process any personal data of the users. With regard to the processing of users\' personal data, please refer to the following information on Google services. Usage Policy: <a href="https://www.google.com/intl/de/tagmanager/use-policy.html">https://www.google.com/intl/de/tagmanager/use-policy.html</a>.\n    </p>\n    <h3>Changes</h3>\n    <p>\n    We may amend this privacy policy at any time without prior notice. The current version published on our website shall apply. Insofar as the data protection declaration is part of an agreement with you, we will inform you of the change by e-mail or other suitable means in the event of an update.\n    </p>\n    <h3>Questions to the data protection officer</h3>\n    <p>\n    If you have any questions about data protection, please write us an email or contact directly the responsible person in our organization listed for data protection at the beginning of this privacy statement.\n    </p>\n    <p>\n      <b>Zürich, 26.04.2021</b>\n    </p>\n    ',
                        imprint:
                            '<h2>Imprint</h2>\n    <div class="intro">\n      <p>\n        This website is operated by:\n        <br>\n        Relio AG\n        <br>\n        Hohlstrasse 188\n        <br>\n        8004 Zürich\n        <br>\n        E-Mail: <a href="mailto:contact@relio.ch">contact@relio.ch</a>\n      </p>\n    </div>',
                    },
                },
                Fe = {
                    btnPreregister: "Konto eröffnen",
                    homeHero: {
                        title: "<span>IHR ONLINE</span> <span><b>BUSINESS-</b></span> <span>KONTO</span>",
                        titleMobile: "<span>IHR ONLINE</span> <span><b>BUSINESS-</b></span> <span>KONTO</span>",
                        list: "\n          <li>Schweizer IBAN</li>\n          <li>Online-Kontoeröffnung</li>\n          <li>Kein Mindestbetrag</li>",
                        business: "<span>DIE <b>NEUE</b></span> <span>BUSINESS CLASS</span>",
                    },
                    scrollItems: {
                        itemTitle1: "Schweizer Geschäftskonto",
                        itemText1: "Ihr digitales Konto mit Schweizer IBAN, speziell entwickelt für Firmenkunden.",
                        itemTitle2: "Persönlicher Support",
                        itemText2: "Sie haben eine persönliche Kontaktperson bei Relio, die Ihnen bei allen Angelegenheiten zur Seite steht.",
                        itemTitle3: "Fremdwährungen",
                        itemText3: "Wechseln Sie Geld zu attraktiven Kursen und halten Sie mehrere Währungen in separaten Wallets.",
                        itemTitle4: "Internationale Zahlungen",
                        itemText4: "Tätigen Sie internationale Transaktionen ohne Zusatzgebühren und versteckte Kosten.",
                        itemTitle5: "Smart Debit-Cards",
                        itemText5: "Vergeben Sie physische und virtuelle Karten an Ihre Teams und Mitarbeiter mit individuellen Budget-Limits.",
                        itemTitle6: "Software-Integrationen",
                        itemText6: "Werden Sie produktiver dank Integrationen mit Ihren Business- und Buchhaltungstools.",
                    },
                    homeFit: {
                        title: "Passend für jeden Unternehmenstyp",
                        itemCategory1: "SMALL",
                        itemCategoryTitle1: "Freelancer",
                        itemCategoryText1: "Produktiver arbeiten mit einer intuitiven App.",
                        itemCategory2: "MEDIUM",
                        itemCategoryTitle2: "Startup",
                        itemCategoryText2: "Schneller starten dank Online-Kontoeröffnung.",
                        itemCategory3: "LARGE",
                        itemCategoryTitle3: "KMU",
                        itemCategoryText3: "Zeit sparen mit nützlichen Business-Features.",
                    },
                    homeSolutions: {
                        category: "S-L KOMPLEXE BUSINESS-CASES",
                        title: "Massgeschneiderte Lösungen für komplexe Business-Cases:",
                        button: "MASSGESCHNEIDERTE LÖSUNG ANFORDERN",
                        item1: "Internationale Geschäftsaktivitäten",
                        item2: "Ausländische Inhaber und Geschäftsführer",
                        item3: "Komplexe Eigentümerstrukturen",
                        item4: "Innovative Business-Modelle",
                        item5: "Industriespezifische Anforderungen",
                        btn: "Angebot anfordern",
                    },
                    homeFeatures: {
                        category: "ÜBER UNS",
                        title: "Swissness für <br> Ihr Business",
                        itemTitle1: "Schweizer Fintech",
                        itemText1: "Relio ist ein Schweizer Unternehmen mit Hauptsitz in Zürich.",
                        itemTitle2: "FINMA-Regulierung",
                        itemText2: "Relio strebt eine Fintech-Lizenz der Eidgenössischen Finanzmarktaufsicht (FINMA) an.",
                        itemTitle3: "Depots bei der SNB",
                        itemText3: "Kundengelder werden sicher bei der Schweizer Nationalbank (SNB) hinterlegt.",
                        btn: "Mehr über Relio erfahren",
                    },
                    homePricing: {
                        category: "PRICING",
                        title: "Das Gesamtpaket zum All-inclusive-Preis",
                        text: "Sie zahlen eine fixe Monatsgebühr, ohne versteckte Kosten. Sie erhalten einen Preis, der auf die Bedürfnisse Ihres Unternehmens zugeschnitten ist.",
                        btn: "PREIS BERECHNEN",
                        from: "Ab",
                    },
                    homeRegister: {
                        title: "<span>ONLINE <b>ANMELDEN</b></span> <span>IN MINUTEN</span>",
                        itemStep1: "Step 1",
                        itemText1: "Beantworten Sie einige Fragen zu Ihrem Unternehmen.",
                        itemStep2: "Step 2",
                        itemText2: "Sie erhalten ein auf Ihr Unternehmen zugeschnittenes Preisangebot.",
                        itemStep3: "Step 3",
                        itemText3: "Nach der Überprüfung Ihrer Anmeldung ist Ihr Konto sofort bereit.",
                        btn: "JETZT VORANMELDEN",
                    },
                    homeNews: {
                        title: "Relio in den Nachrichten",
                        itemTitle1: "HANDELSZEITUNG",
                        itemText1: "Neues Fintech am Start: Jetzt kommen Angebote für die KMU",
                        itemTitle2: "MONEYTODAY",
                        itemText2: "Der Mitgründer von Penta lanciert das erste Schweizer Digital-Konto für KMU",
                        itemTitle3: "FINNEWS",
                        itemText3: "Fintech sammelt Kapital für digitales KMU-Konto",
                        itemTitle4: "TAGESANZEIGER",
                        itemText4: "Fintech-Startups und KMU: Win-win-win",
                    },
                    footer: {
                        terms1: 'Mit dem Klick auf "Senden" bestätigen Sie, dass Sie unsere ',
                        terms2: "gelesen und verstanden haben.",
                        termsLink: "Datenschutzbestimmungen",
                        termsLink2: "Datenschutzbestimmungen",
                        category: "NEWSLETTER ABONNIEREN",
                        btn: "SENDEN",
                        placeholder: "Ihre E-Mail",
                        success: "Vielen Dank! Ihre Anmeldung ist bei uns eingegangen.",
                        error: "Die Anmeldung konnte nicht abgeschlossen werden. Bitte versuchen Sie es erneut oder schreiben Sie uns an <a href='mailto:contact@relio.ch'>contact@relio.ch</a>",
                        cookieSettings: "Cookie-Einstellungen",
                    },
                    about: {
                        heroTitle: "<span>IN JEDEM</span><span><b>FALL BEREIT</b></span>",
                        heroCategory: "WIR SIND RELIO",
                        heroText1: "Ein Geschäftskonto eröffnen bedeutet bei traditionellen Banken oft wochenlanges Warten, viel Bürokratie und schlechter Service.",
                        heroText2: "Digitalbanken haben gezeigt, dass es auch anders geht. Leider passen die standardisierten Angebote von Neobanken nicht für kompliziertere Firmenkunden.",
                        heroAbout: "Relio bietet jetzt die Vorteile eines digitalen <span>Geschäftskontos</span> erstmals für <span>komplexe Unternehmen</span>, die einen <span>individuellen Ansatz</span> benötigen.",
                        heroBtn: "Angebot anfordern",
                        heroUnderImage: "Relio Gründerteam",
                        regulationDesktop: "<span>SCHWEIZER</span><span>REGULIERUNG</span>",
                        regulationMobile: "<span>SCHWEIZER</span><span>REGULIERUNG</span>",
                        regulationText1: "Relio strebt eine Fintech-Lizenz der Eidgenössischen Finanzmarktaufsicht FINMA an.",
                        regulationText2:
                            "Die Kundengelder werden vollständig bei der Schweizerischen Nationalbank hinterlegt und dürfen nicht für Risikotransaktionen, Investitionen oder andere Zwecke verwendet werden. Aufgrund dieser Einschränkungen sind die Einlagen von Relio nicht durch die Einlagensicherung gedeckt.",
                        regulationSpan: "Bitte beachten Sie, dass Relio derzeit nicht von der FINMA beaufsichtigt wird und keine Finanzdienstleistungen anbieten wird, bevor das Bewilligungsverfahren abgeschlossen ist.",
                        investorTitle: "Unterstützt von führenden Investoren",
                        investorBtn: "KONTAKT FÜR INVESTOREN",
                        mapTitle: "In Zürich zu Hause",
                        mapView: "Karte öffnen",
                        mapCity: "Schweiz",
                        jobsTitle: "Jobs bei Relio",
                        jobsBtn: "ALLE JOBINSERATE",
                    },
                    jobList: { jobTitle: "<span><b>Jobs</b></span><span>bei Relio</span>", formTitle: "Jetzt bewerben", noPosition: "Zur Zeit haben wir keine offenen Stellen" },
                    navLang: "en",
                    join: {
                        title: "<span><b>JETZT</b></span> <span>ANMELDEN</span>",
                        text:
                            "Gehören Sie zu den Ersten, die das digitale Geschäftskonto von Relio nutzen. Bitte beachten Sie, dass unsere Dienstleistung noch in der Entwicklung ist und in Kürze lanciert wird. Geben Sie Ihre E-Mail-Adresse ein, um Ihre Anmeldung zu starten.",
                        note: "Note: the service is currently in development and is launching soon.",
                        label: "E-MAIL ADRESSE EINGEBEN",
                        formText: 'Mit dem Klick auf "Senden" bestätigen Sie, dass Sie unsere {privacyPolicy} gelesen und verstanden haben.',
                        formTextPrivacy: "Datenschutzbestimmungen",
                        button: "SENDEN",
                        successTitle: "Bitte prüfen Sie Ihr Email-Postfach",
                        successText: "Wir haben Ihnen einen Link geschickt, mit dem Sie Ihre E-Mail-Adresse bestätigen und die Voranmeldung fortsetzen können.",
                        errorTitle: "Die Anmeldung konnte <b>nicht abgeschlossen</b> werden.",
                        errorText: "Bitte versuchen Sie es erneut oder schreiben Sie uns an <a href='mailto:contact@relio.ch'>contact@relio.ch</a>",
                    },
                    nav: { title: "<span>GESCHÄFTSKONTO</span> <span>PREISE</span> <span>ÜBER UNS</span> <span>HILFE</span>" },
                    support: {
                        title: "<span><b>WIR SIND</b> FÜR</span><span>SIE DA</span>",
                        submit: 'Mit dem Klick auf "Senden" bestätigen Sie, dass Sie unsere {submitLink} gelesen und verstanden haben.',
                        submitTextPrivacy: "Datenschutzbestimmungen",
                        success: "Vielen Dank! Ihre Anfrage ist bei uns eingegangen.",
                        error: "Die Anfrage konnte nicht versendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns an <a href='mailto:contact@relio.ch'>contact@relio.ch</a>",
                    },
                    pricing: { title: "<span>SIE <b>BESTIMMEN</b></span><span>DEN PREIS</span>" },
                    partners: { title: "<span>Gemeinsam</span><span><b>stark</b></span>" },
                    customers: { title: "<span>Business as</span><span><b>Unusual</b></span>" },
                    features: { title: "<span>DAS DIGITALE</span><span><b>GESCHÄFTSKONTO</b></span>", button: "" },
                    news: {
                        blogLoad: "Alle Blogbeiträge",
                        pressLoad: "Alle Pressemitteilungen",
                        blogListLead: "Aktuelles über Relio und hilfreiche Tipps für Ihr Unternehmen.",
                        blogListNewsletter: "Newsletter abonnieren",
                        pressListLead: "Alle Pressemeldungen und Medienberichte über Relio",
                    },
                    jobDetail: {
                        terms1: 'Mit dem Klick auf "Senden" bestätigen Sie, dass Sie unsere',
                        terms2: " gelesen und verstanden haben.",
                        termsLink: "Datenschutzbestimmungen",
                        error: "Ihre Bewerbung konnte nicht versendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns an <a href='mailto:contact@relio.ch'>contact@relio.ch</a>",
                        success: "Vielen Dank! Ihre Bewerbung ist bei uns eingegangen.",
                    },
                    privacyPage: {
                        content:
                            '\n    <h1>Datenschutzbestimmungen</h1>\n    <div class="intro">\n    <strong>\n    Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere des schweizer Datenschutzgesetzes (DSG) und der EU-Datenschutzgrundverordnung (DSGVO), ist:\n    </strong>\n    <p>\n    Relio AG\n    <br>\n    Hohlstrasse 188\n    <br>\n    8004 Zürich\n    <br>\n    E-mail: <a href="mailto:privacy@relio.ch">privacy@relio.ch</a>\n    <br>\n    WebSite <a href="http://www.relio.ch/">http://www.relio.ch/</a>\n    </p>\n    </div>\n    <h3>Allgemeiner Hinweis</h3>\n    <p>\n    ‍Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.\n    </p>\n    <p>\n    In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Durch die Nutzung dieser Website erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten gemäss der nachfolgenden Beschreibung einverstanden. Diese Website kann grundsätzlich ohne Registrierung besucht werden. Dabei werden Daten wie beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar auf Ihre Person bezogen werden. Personenbezogene Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt grundsätzlich keine Weitergabe der Daten an Dritte.\n    Ausgenommen von dieser Regelung, sind die nach Schweizerischen Gesetzen verbindliche Auskunftspflichten (StGB, OR, GwG, GwV etc.).\n    </p>\n    <h3>‍Datenschutzerklärung für Cookies</h3>\n    <p>\n    ‍Diese Website verwendet Cookies. Das sind kleine Textdateien, die es möglich machen, auf dem Endgerät des Nutzers spezifische, auf den Nutzer bezogene Informationen zu speichern, während er die Website nutzt. Cookies ermöglichen es, insbesondere Nutzungshäufigkeit und Nutzeranzahl der Seiten zu ermitteln, Verhaltensweisen der Seitennutzung zu analysieren, aber auch unser Angebot kundenfreundlicher zu gestalten. Cookies bleiben über das Ende einer Browser-Sitzung gespeichert und können bei einem erneuten Seitenbesuch wieder aufgerufen werden. Wenn Sie das nicht wünschen, sollten Sie Ihren Internetbrowser so einstellen, dass er die Annahme von Cookies verweigert. Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a> oder die EU-Seite <a href="http://www.youronlinechoices.com/">http://www.youronlinechoices.com/</a> erklärt werden. Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.\n    </p>\n    <h3>\n    Datenschutzerklärung für SSL-/TLS-Verschlüsselung\n    </h3>\n    <p>\n    Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL bzw. TLS Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.\n    </p>\n    <h3>\n    Dienste von Dritten\n    </h3>\n    <p>\n    Diese Website verwenden allenfalls Google Maps für das Einbetten von Karten, Google Invisible reCAPTCHA für den Schutz gegen Bots und Spam sowie YouTube für das Einbetten von Videos. Diese Dienste der amerikanischen Google LLC verwenden unter anderem Cookies und infolgedessen werden Daten an Google in den USA übertragen, wobei wir davon ausgehen, dass in diesem Rahmen kein personenbezogenes Tracking allein durch die Nutzung unserer Website stattfindet. Google hat sich verpflichtet, einen angemessenen Datenschutz gemäss dem amerikanisch-europäischen und dem amerikanisch-schweizerischen Privacy Shield zu gewährleisten. Weitere Informationen finden sich in der Datenschutzerklärung von Google.\n    </p>\n    <h3>\n    Datenschutzerklärung für Voranmeldung und Kontaktformulare\n    </h3>\n    <p>\n    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Auf Anweisung unserer Nutzer löschen wir Datensätze, soweit Relio nicht gesetzlich oder regulatorisch einer Aufbewahrungspflicht untersteht.\n    </p>\n    <h3>\n    Datenschutzerklärung für Newsletterdaten\n    </h3>\n    <p>\n    Wenn Sie den auf dieser Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht erhoben. Diese Daten verwenden wir ausschliesslich für den Versand der angeforderten Informationen und geben sie nicht an Dritte weiter. Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den «Austragen-Link» im Newsletter.\n    </p>\n    <h3>\n    Datenschutzerklärung für Widerspruch Werbe-Mails\n    </h3>\n    <p>\n    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.\n    </p>\n    <h3>‍Datenschutzerklärung für Google Analytics</h3>\n    <p>\n‍Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Wenn der Verantwortliche für die Datenverarbeitung auf dieser Website ausserhalb des Europäischen Wirtschaftsraumes oder der Schweiz sitzt, dann erfolgt die Google Analytics Datenverarbeitung durch Google LLC. Google LLC und Google Ireland Limited werden nachfolgend «Google» genannt. Über die gewonnenen Statistiken können wir unser Angebot verbessern und für Sie als Nutzer interessanter ausgestalten. Diese Website verwendet Google Analytics zudem für eine geräteübergreifende Analyse von Besucherströmen, die über eine User-ID durchgeführt wird. Sofern Sie über ein Google-Benutzerkonto verfügen, können Sie in den dortigen Einstellungen unter «Meine Daten», «persönliche Daten» die geräteübergreifende Analyse Ihrer Nutzung deaktivieren. Rechtsgrundlage für die Nutzung von Google Analytics ist Art. 6 Abs. 1 S. 1 lit. f DS-GVO. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Wir weisen Sie darauf hin, dass auf dieser Website Google Analytics um den Code «_anonymizeIp();» erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen zu gewährleisten. Dadurch werden IP-Adressen gekürzt weiterverarbeitet, eine Personenbeziehbarkeit kann damit ausgeschlossen werden. Soweit den über Sie erhobenen Daten ein Personenbezug zukommt, wird dieser also sofort ausgeschlossen und die personenbezogenen Daten damit umgehend gelöscht. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websitenaktivitäten zusammenzustellen und um weitere mit der Websitennutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitenbetreiber zu erbringen. Für die Ausnahmefälle, in denen personenbezogene Daten in die USA übertragen werden, hat sich Google dem EU-US Privacy Shield unterworfen, <a href="https://www.privacyshield.gov/EU-US-Framework">https://www.privacyshield.gov/EU-US-Framework</a>. Google Analytics verwendet Cookies. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: Google Analytics deaktivieren.\n    </p>\n    <p>\n    Ausserdem können Sie die Nutzung von Google Analytics auch verhindern, indem sie auf diesen Link klicken: Google Analytics deaktivieren. Hierdurch wird ein sog. opt-out Cookie auf ihrem Datenträger gespeichert, der die Verarbeitung personenbezogener Daten durch Google Analytics verhindert. Bitte beachten Sie, dass bei einem Löschen sämtlicher Cookies auf Ihrem Endgerät auch diese Opt-out-Cookies gelöscht werden, d.h., dass Sie erneut die Opt-out-Cookies setzen müssen, wenn Sie weiterhin diese Form der Datenerhebung verhindern wollen. Die Opt-out-Cookies sind pro Browser und Rechner/Endgerät gesetzt und müssen daher für jeden Browser, Rechner oder anderes Endgerät gesondert aktiviert werden.\n    </p>\n    <h3>‍Google Tag Manager</h3>\n    <p>\n    ‍Google Tag Manager ist eine Lösung, mit der wir sog. Website-Tags über eine Oberfläche verwalten können und so z.B. Google Analytics sowie andere Google-Marketing-Dienste in unser Onlineangebot einbinden können. Der Tag Manager selbst, welcher die Tags implementiert, verarbeitet keine personenbezogenen Daten der Nutzer. Im Hinblick auf die Verarbeitung der personenbezogenen Daten der Nutzer wird auf die folgenden Angaben zu den Google-Diensten verwiesen. Nutzungsrichtlinien: <a href="https://www.google.com/intl/de/tagmanager/use-policy.html">https://www.google.com/intl/de/tagmanager/use-policy.html</a>.\n    </p>\n    <h3>‍Änderungen</h3>\n    <p>\n    ‍Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung. Soweit die Datenschutzerklärung Teil einer Vereinbarung mit Ihnen ist, werden wir Sie im Falle einer Aktualisierung über die Änderung per E-Mail oder auf andere geeignete Weise informieren.\n    </p>\n    <h3>‍Fragen an den Datenschutzbeauftragten</h3>\n    <p>\n    Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz zu Beginn der Datenschutzerklärung aufgeführten, verantwortlichen Person in unserer Organisation.\n    </p>\n    <p>\n      <b>Zürich, 26.04.2021</b>\n    </p>\n    ',
                        imprint:
                            '<h2>Imprint</h2>\n    <div class="intro">\n      <p>\n        This website is operated by:\n        <br>\n        Relio AG\n        <br>\n        Hohlstrasse 188\n        <br>\n        8004 Zürich\n        <br>\n        E-Mail: <a href="mailto:contact@relio.ch">contact@relio.ch</a>\n      </p>\n    </div>',
                    },
                };
            const Te = {
                    COMPONENT_OPTIONS_KEY: "nuxtI18n",
                    STRATEGIES: { PREFIX: "prefix", PREFIX_EXCEPT_DEFAULT: "prefix_except_default", PREFIX_AND_DEFAULT: "prefix_and_default", NO_PREFIX: "no_prefix" },
                    REDIRECT_ON_OPTIONS: { ALL: "all", ROOT: "root", NO_PREFIX: "no prefix" },
                },
                Ce = !1,
                Le = {
                    vueI18n: {},
                    vueI18nLoader: !1,
                    locales: [
                        { code: "en", file: "en.js" },
                        { code: "de", file: "de.js" },
                    ],
                    defaultLocale: "en",
                    defaultDirection: "ltr",
                    routesNameSeparator: "___",
                    defaultLocaleRouteNameSuffix: "default",
                    sortRoutes: !0,
                    strategy: "no_prefix",
                    lazy: !1,
                    langDir: "/home/no42/404-relio/frontend/locale",
                    rootRedirect: null,
                    detectBrowserLanguage: { alwaysRedirect: !1, cookieAge: 365, cookieCrossOrigin: !1, cookieDomain: null, cookieKey: "i18n_redirected", cookieSecure: !1, fallbackLocale: "", redirectOn: "root", useCookie: !0 },
                    differentDomains: !1,
                    baseUrl: "",
                    vuex: { moduleName: "i18n", syncRouteParams: !0 },
                    parsePages: !1,
                    pages: {},
                    skipSettingLocaleOnNavigate: !1,
                    onBeforeLanguageSwitch: () => {},
                    onLanguageSwitched: () => null,
                    normalizedLocales: [
                        { code: "en", file: "en.js" },
                        { code: "de", file: "de.js" },
                    ],
                    localeCodes: ["en", "de"],
                    additionalMessages: [],
                },
                Se = { "en.js": () => Promise.resolve(ke), "de.js": () => Promise.resolve(Fe) };
            o(138);
            var Ie = o(42),
                De = o.n(Ie);
            function ze(text) {
                return `[@nuxtjs/i18n] ${text}`;
            }
            function Pe(e, t) {
                const r = [],
                    o = [];
                for (const t of e) {
                    const { code: code } = t,
                        e = t.iso || code;
                    o.push({ code: code, iso: e });
                }
                for (const [e, n] of t.entries()) {
                    const l = o.find((e) => e.iso.toLowerCase() === n.toLowerCase());
                    if (l) {
                        r.push({ code: l.code, score: 1 - e / t.length });
                        break;
                    }
                }
                for (const [e, n] of t.entries()) {
                    const l = n.split("-")[0].toLowerCase(),
                        m = o.find((e) => e.iso.split("-")[0].toLowerCase() === l);
                    if (m) {
                        r.push({ code: m.code, score: 0.999 - e / t.length });
                        break;
                    }
                }
                return r.length > 1 && r.sort((e, t) => (e.score === t.score ? t.code.length - e.code.length : t.score - e.score)), r.length ? r[0].code : void 0;
            }
            function Ee(e) {
                return new RegExp(`^/(${e.join("|")})(?:/|$)`);
            }
            async function je(e, t) {
                const { app: r } = e,
                    { i18n: o } = r;
                if ((o.loadedLanguages || (o.loadedLanguages = []), !o.loadedLanguages.includes(t))) {
                    const r = Le.normalizedLocales.find((e) => e.code === t);
                    if (r) {
                        const { file: n } = r;
                        if (n) {
                            let r;
                            {
                                const { nuxtState: o } = e;
                                o && o.__i18n && o.__i18n.langs[t] && ((r = o.__i18n.langs[t]), e.isDev && Se[n]());
                            }
                            if (!r)
                                try {
                                    const o = await Se[n]().then((e) => e.default || e);
                                    r = "function" == typeof o ? await Promise.resolve(o(e, t)) : o;
                                } catch (e) {
                                    console.error(ze(`Failed loading async locale export: ${e.message}`));
                                }
                            r && (o.setLocaleMessage(t, r), $e(o, Le.additionalMessages, Le.localeCodes, [t]), o.loadedLanguages.push(t));
                        } else console.warn(ze(`Could not find lang file for locale ${t}`));
                    } else console.warn(ze(`Attempted to load messages for non-existant locale code "${t}"`));
                }
            }
            function We(e, t, r, { differentDomains: o, normalizedLocales: n }) {
                if ("function" == typeof e) return e(t);
                if (o && r) {
                    const e = Ne(r, t.req, { normalizedLocales: n });
                    if (e) return e;
                }
                return e;
            }
            function Ne(e, t, { normalizedLocales: r }) {
                const o = r.find((t) => t.code === e);
                if (o && o.domain) {
                    if (Object(ye.hasProtocol)(o.domain)) return o.domain;
                    let e;
                    return (e = window.location.protocol.split(":")[0]), `${e}://${o.domain}`;
                }
                console.warn(ze(`Could not find domain name for locale ${e}`));
            }
            function $e(e, t, r, o) {
                const n = o || r;
                for (const r of t)
                    for (const t of n) {
                        const o = e.getLocaleMessage(t);
                        e.mergeLocaleMessage(t, r[t]), e.mergeLocaleMessage(t, o);
                    }
            }
            function Be(e, t) {
                const r = Re.call(this, e, t);
                return r ? r.route.redirectedFrom || r.route.fullPath : "";
            }
            function Ae(e, t) {
                const r = Re.call(this, e, t);
                return r ? r.route : void 0;
            }
            function Oe(e, t) {
                const r = Re.call(this, e, t);
                return r ? r.location : void 0;
            }
            function Re(e, t) {
                if (!e) return;
                const { i18n: r } = this;
                if (!(t = t || r.locale)) return;
                "string" == typeof e && (e = "/" === e[0] ? { path: e } : { name: e });
                let o = Object.assign({}, e);
                if (o.path && !o.name) {
                    const e = this.router.resolve(o).route,
                        n = this.getRouteBaseName(e);
                    if (n) o = { name: Ve(n, t), params: e.params, query: e.query, hash: e.hash };
                    else {
                        !((t === Le.defaultLocale && [Te.STRATEGIES.PREFIX_EXCEPT_DEFAULT, Te.STRATEGIES.PREFIX_AND_DEFAULT].includes(Le.strategy)) || Le.strategy === Te.STRATEGIES.NO_PREFIX || r.differentDomains) &&
                            (o.path = `/${t}${o.path}`),
                            (o.path = Ce ? Object(ye.withTrailingSlash)(o.path, !0) : Object(ye.withoutTrailingSlash)(o.path, !0));
                    }
                } else {
                    o.name || o.path || (o.name = this.getRouteBaseName()), (o.name = Ve(o.name, t));
                    const { params: e } = o;
                    e && void 0 === e[0] && e.pathMatch && (e[0] = e.pathMatch);
                }
                const n = this.router.resolve(o);
                return n.route.name ? n : this.router.resolve(e);
            }
            function Me(e) {
                const t = this.getRouteBaseName();
                if (!t) return "";
                const { i18n: r, route: o, store: n } = this,
                    { params: l, ...m } = o;
                let d = {};
                Le.vuex && Le.vuex.syncRouteParams && n && (d = n.getters[`${Le.vuex.moduleName}/localeRouteParams`](e));
                const c = Object.assign({}, m, { name: t, params: { ...l, ...d, 0: l.pathMatch } });
                let path = this.localePath(c, e);
                if (r.differentDomains) {
                    const t = { differentDomains: r.differentDomains, normalizedLocales: Le.normalizedLocales },
                        o = Ne(e, this.req, t);
                    o && (path = o + path);
                }
                return path;
            }
            function He(e) {
                const t = void 0 !== e ? e : this.route;
                if (t && t.name) return t.name.split(Le.routesNameSeparator)[0];
            }
            function Ve(e, t) {
                let r = e + (Le.strategy === Te.STRATEGIES.NO_PREFIX ? "" : Le.routesNameSeparator + t);
                return t === Le.defaultLocale && Le.strategy === Te.STRATEGIES.PREFIX_AND_DEFAULT && (r += Le.routesNameSeparator + Le.defaultLocaleRouteNameSuffix), r;
            }
            o(21).a.nuxti18n = async (e) => {
                const { app: t, isHMR: r } = e;
                if (r) return;
                const [o, n, l] = await t.i18n.__onNavigate(e.route);
                if (o && n) {
                    const t = l ? e.route.query : void 0;
                    e.redirect(o, n, t);
                }
            };
            const Ge = function (e) {
                    return function () {
                        const t = {
                            getRouteBaseName: this.getRouteBaseName,
                            i18n: this.$i18n,
                            localePath: this.localePath,
                            localeRoute: this.localeRoute,
                            localeLocation: this.localeLocation,
                            req: null,
                            route: this.$route,
                            router: this.$router,
                            store: this.$store,
                        };
                        return e.call(t, ...arguments);
                    };
                },
                Ue = function (e, t) {
                    return function () {
                        const { app: r, req: o, route: n, store: l } = e,
                            m = { getRouteBaseName: r.getRouteBaseName, i18n: r.i18n, localePath: r.localePath, localeLocation: r.localeLocation, localeRoute: r.localeRoute, req: null, route: n, router: r.router, store: l };
                        return t.call(m, ...arguments);
                    };
                },
                qe = {
                    install(e) {
                        e.mixin({ methods: { localePath: Ge(Be), localeRoute: Ge(Ae), localeLocation: Ge(Oe), switchLocalePath: Ge(Me), getRouteBaseName: Ge(He) } });
                    },
                };
            var Je = (e) => {
                    l.default.use(qe);
                    const { app: t, store: r } = e;
                    (t.localePath = e.localePath = Ue(e, Be)),
                        (t.localeRoute = e.localeRoute = Ue(e, Ae)),
                        (t.localeLocation = e.localeLocation = Ue(e, Oe)),
                        (t.switchLocalePath = e.switchLocalePath = Ue(e, Me)),
                        (t.getRouteBaseName = e.getRouteBaseName = Ue(e, He)),
                        r && ((r.localePath = t.localePath), (r.localeRoute = t.localeRoute), (r.localeLocation = t.localeLocation), (r.switchLocalePath = t.switchLocalePath), (r.getRouteBaseName = t.getRouteBaseName));
                },
                Ye = o(43),
                Ke = o(14);
            function Xe({ addDirAttribute: e = !1, addSeoAttributes: t = !1 } = {}) {
                if (!this.$i18n) return {};
                const r = { htmlAttrs: {}, link: [], meta: [] },
                    o = this.$i18n.localeProperties,
                    n = o.iso,
                    l = o.dir || Le.defaultDirection;
                if ((e && (r.htmlAttrs.dir = l), t && (d.a.hasMetaInfo ? d.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales)) {
                    n && (r.htmlAttrs.lang = n);
                    const e = this.$i18n.locales;
                    (function (e, t, link) {
                        if (Le.strategy === Te.STRATEGIES.NO_PREFIX) return;
                        const r = new Map();
                        for (const t of e) {
                            const e = t.iso;
                            if (!e) {
                                console.warn(ze("Locale ISO code is required to generate alternate link"));
                                continue;
                            }
                            const [o, n] = e.split("-");
                            o && n && (t.isCatchallLocale || !r.has(o)) && r.set(o, t), r.set(e, t);
                        }
                        for (const [e, o] of r.entries()) {
                            const r = this.switchLocalePath(o.code);
                            r && link.push({ hid: `i18n-alt-${e}`, rel: "alternate", href: c(r, t), hreflang: e });
                        }
                        if (Le.defaultLocale) {
                            const e = this.switchLocalePath(Le.defaultLocale);
                            e && link.push({ hid: "i18n-xd", rel: "alternate", href: c(e, t), hreflang: "x-default" });
                        }
                    }.bind(this)(e, this.$i18n.__baseUrl, r.link),
                        function (e, link, t) {
                            const r = this.localeRoute({ ...this.$route, name: this.getRouteBaseName() });
                            if (r) {
                                let o = c(r.path, e);
                                const n = ("boolean" != typeof t && t.canonicalQueries) || [];
                                if (n.length) {
                                    const e = r.query,
                                        t = new URLSearchParams();
                                    for (const r of n)
                                        if (r in e) {
                                            const o = e[r];
                                            Array.isArray(o) ? o.forEach((e) => t.append(r, e || "")) : t.append(r, o || "");
                                        }
                                    const l = t.toString();
                                    l && (o = `${o}?${l}`);
                                }
                                link.push({ hid: "i18n-can", rel: "canonical", href: o });
                            }
                        }.bind(this)(this.$i18n.__baseUrl, r.link, t),
                        function (e, t, meta) {
                            const r = e && t;
                            if (!r) return;
                            meta.push({ hid: "i18n-og", property: "og:locale", content: m(t) });
                        }.bind(this)(o, n, r.meta),
                        function (e, t, meta) {
                            const r = e.filter((e) => {
                                const r = e.iso;
                                return r && r !== t;
                            });
                            if (r.length) {
                                const e = r.map((e) => ({ hid: `i18n-og-alt-${e.iso}`, property: "og:locale:alternate", content: m(e.iso) }));
                                meta.push(...e);
                            }
                        }.bind(this)(e, n, r.meta));
                }
                function m(e) {
                    return (e || "").replace(/-/g, "_");
                }
                function c(e, t) {
                    return e.match(/^https?:\/\//) ? e : t + e;
                }
                return r;
            }
            l.default.use(Ye.a);
            var Ze = async (e) => {
                    const { app: t, route: r, store: o, req: n, res: m, redirect: d } = e;
                    Le.vuex &&
                        o &&
                        (function (e, t, r) {
                            const o = {
                                namespaced: !0,
                                state: () => ({ ...(t.syncRouteParams ? { routeParams: {} } : {}) }),
                                actions: {
                                    ...(t.syncRouteParams
                                        ? {
                                              setRouteParams({ commit: e }, t) {
                                                  e("setRouteParams", t);
                                              },
                                          }
                                        : {}),
                                },
                                mutations: {
                                    ...(t.syncRouteParams
                                        ? {
                                              setRouteParams(e, t) {
                                                  e.routeParams = t;
                                              },
                                          }
                                        : {}),
                                },
                                getters: { ...(t.syncRouteParams ? { localeRouteParams: ({ routeParams: e }) => (t) => (e && e[t]) || {} } : {}) },
                            };
                            e.registerModule(t.moduleName, o, { preserveState: !!e.state[t.moduleName] });
                        })(o, Le.vuex, Le.localeCodes);
                    const { lazy: c } = Le;
                    c && (!0 === c || c.skipNuxtState);
                    const { alwaysRedirect: h, fallbackLocale: _, redirectOn: f, useCookie: x, cookieAge: w, cookieKey: v, cookieDomain: y, cookieSecure: k, cookieCrossOrigin: F } = Le.detectBrowserLanguage,
                        T = (function (e, { routesNameSeparator: t, defaultLocaleRouteNameSuffix: r }) {
                            const o = `(${e.join("|")})`,
                                n = new RegExp(`${t}${o}(?:${t}${r})?$`),
                                l = Ee(e);
                            return (e) => {
                                if (e.name) {
                                    const t = e.name.match(n);
                                    if (t && t.length > 1) return t[1];
                                } else if (e.path) {
                                    const t = e.path.match(l);
                                    if (t && t.length > 1) return t[1];
                                }
                                return "";
                            };
                        })(Le.localeCodes, { routesNameSeparator: Le.routesNameSeparator, defaultLocaleRouteNameSuffix: Le.defaultLocaleRouteNameSuffix }),
                        C = async (r, { initialSetup: o = !1 } = {}) => {
                            if (!r) return;
                            if (!o && t.i18n.differentDomains) return;
                            const n = t.i18n.locale;
                            if (r === n) return;
                            const m = t.i18n.onBeforeLanguageSwitch(n, r, o, e);
                            if (m && t.i18n.localeCodes.includes(m)) {
                                if (m === n) return;
                                r = m;
                            }
                            if ((x && t.i18n.setLocaleCookie(r), Le.langDir)) {
                                const o = t.i18n.fallbackLocale;
                                if (Le.lazy) {
                                    if (o) {
                                        let t = [];
                                        Array.isArray(o)
                                            ? (t = o.map((t) => je(e, t)))
                                            : "object" == typeof o
                                            ? (o[r] && (t = t.concat(o[r].map((t) => je(e, t)))), o.default && (t = t.concat(o.default.map((t) => je(e, t)))))
                                            : r !== o && t.push(je(e, o)),
                                            await Promise.all(t);
                                    }
                                    await je(e, r);
                                } else await Promise.all(Le.localeCodes.map((t) => je(e, t)));
                            } else $e(t.i18n, Le.additionalMessages, Le.localeCodes);
                            t.i18n.locale = r;
                            const c = Le.normalizedLocales.find((e) => e.code === r) || { code: r };
                            for (const e of Object.keys(t.i18n.localeProperties)) t.i18n.localeProperties[e] = void 0;
                            for (const [e, r] of Object.entries(c)) l.default.set(t.i18n.localeProperties, e, Object(Ke.a)(r));
                            const { route: h } = e;
                            let _ = "";
                            if (!t.i18n.differentDomains && Le.strategy !== Te.STRATEGIES.NO_PREFIX && (T(h) !== r || (Le.strategy === Te.STRATEGIES.PREFIX_AND_DEFAULT && r === Le.defaultLocale))) {
                                const e = t.switchLocalePath(r) || t.localePath(h.fullPath, r);
                                !e || Object(ye.isEqual)(e, h.fullPath) || e.startsWith("//") || (_ = e);
                            }
                            o ? (t.i18n.__redirect = _) : (t.i18n.onLanguageSwitched(n, r), _ && d(_));
                        },
                        L = async () => {
                            t.i18n.__pendingLocale && (await t.i18n.setLocale(t.i18n.__pendingLocale), t.i18n.__resolvePendingLocalePromise(""), (t.i18n.__pendingLocale = null));
                        },
                        S = async () => {
                            t.i18n.__pendingLocale && (await t.i18n.__pendingLocalePromise);
                        },
                        I = () =>
                            "undefined" != typeof navigator && navigator.languages
                                ? Pe(Le.normalizedLocales, navigator.languages)
                                : n && void 0 !== n.headers["accept-language"]
                                ? Pe(
                                      Le.normalizedLocales,
                                      n.headers["accept-language"].split(",").map((e) => e.split(";")[0])
                                  )
                                : void 0,
                        D = (e) => {
                            if (Le.strategy !== Te.STRATEGIES.NO_PREFIX)
                                if (f === Te.REDIRECT_ON_OPTIONS.ROOT) {
                                    if ("/" !== e.path) return "";
                                } else if (f === Te.REDIRECT_ON_OPTIONS.NO_PREFIX && !h && e.path.match(Ee(Le.localeCodes))) return "";
                            let r;
                            (x && (r = t.i18n.getLocaleCookie())) || (r = I());
                            const o = r || _;
                            return !o || (x && !h && t.i18n.getLocaleCookie()) || o === t.i18n.locale ? "" : o;
                        },
                        z = (e) => {
                            (e.locales = Object(Ke.a)(Le.locales)),
                                (e.localeCodes = Object(Ke.a)(Le.localeCodes)),
                                (e.localeProperties = l.default.observable(Object(Ke.a)(Le.normalizedLocales.find((t) => t.code === e.locale) || { code: e.locale }))),
                                (e.defaultLocale = Le.defaultLocale),
                                (e.differentDomains = Le.differentDomains),
                                (e.onBeforeLanguageSwitch = Le.onBeforeLanguageSwitch),
                                (e.onLanguageSwitched = Le.onLanguageSwitched),
                                (e.setLocaleCookie = (e) =>
                                    (function (e, t, { useCookie: r, cookieAge: o, cookieDomain: n, cookieKey: l, cookieSecure: m, cookieCrossOrigin: d }) {
                                        if (r) {
                                            const t = { expires: o, path: "/", sameSite: d ? "none" : "lax", secure: d || m, ...(n ? { domain: n } : {}) };
                                            De.a.set(l, e, t);
                                        }
                                    })(e, 0, { useCookie: x, cookieAge: w, cookieDomain: y, cookieKey: v, cookieSecure: k, cookieCrossOrigin: F })),
                                (e.getLocaleCookie = () =>
                                    (function (e, { useCookie: t, cookieKey: r, localeCodes: o }) {
                                        if (t) {
                                            let e;
                                            if (((e = De.a.get(r)), e && o.includes(e))) return e;
                                        }
                                    })(0, { useCookie: x, cookieKey: v, localeCodes: Le.localeCodes })),
                                (e.setLocale = (e) => C(e)),
                                (e.getBrowserLocale = () => I()),
                                (e.finalizePendingLocaleChange = L),
                                (e.waitForPendingLocaleChange = S),
                                (e.__baseUrl = t.i18n.__baseUrl),
                                (e.__pendingLocale = t.i18n.__pendingLocale),
                                (e.__pendingLocalePromise = t.i18n.__pendingLocalePromise),
                                (e.__resolvePendingLocalePromise = t.i18n.__resolvePendingLocalePromise);
                        },
                        P = "function" == typeof Le.vueI18n ? await Le.vueI18n(e) : Object(Ke.a)(Le.vueI18n);
                    if (((P.componentInstanceCreatedListener = z), (t.i18n = e.i18n = new Ye.a(P)), (t.i18n.locale = ""), (t.i18n.fallbackLocale = P.fallbackLocale || ""), o && ((o.$i18n = t.i18n), o.state.localeDomains)))
                        for (const [e, t] of Le.normalizedLocales.entries()) {
                            const r = o.state.localeDomains[t.code];
                            if (r) {
                                t.domain = r;
                                const o = Le.locales[e];
                                "string" != typeof o && (o.domain = r);
                            }
                        }
                    z(t.i18n);
                    const E = { differentDomains: Le.differentDomains, normalizedLocales: Le.normalizedLocales };
                    (t.i18n.__baseUrl = We(Le.baseUrl, e, "", E)),
                        (t.i18n.__onNavigate = async (r) => {
                            if ("/" === r.path && Le.rootRedirect) {
                                let e = 302,
                                    path = Le.rootRedirect;
                                return "string" != typeof Le.rootRedirect && ((e = Le.rootRedirect.statusCode), (path = Le.rootRedirect.path)), [e, `/${path}`, !0];
                            }
                            const o = t.i18n.__redirect;
                            if (o) return (t.i18n.__redirect = null), [302, o];
                            const n = { differentDomains: Le.differentDomains, normalizedLocales: Le.normalizedLocales };
                            t.i18n.__baseUrl = We(Le.baseUrl, e, t.i18n.locale, n);
                            const l = (Le.detectBrowserLanguage && D(r)) || (!Le.differentDomains && Le.strategy !== Te.STRATEGIES.NO_PREFIX && T(r)) || t.i18n.locale || t.i18n.defaultLocale || "";
                            return (
                                Le.skipSettingLocaleOnNavigate
                                    ? ((t.i18n.__pendingLocale = l),
                                      (t.i18n.__pendingLocalePromise = new Promise((e) => {
                                          t.i18n.__resolvePendingLocalePromise = e;
                                      })))
                                    : await t.i18n.setLocale(l),
                                [null, null]
                            );
                        }),
                        (l.default.prototype.$nuxtI18nHead = Xe);
                    let j = Le.detectBrowserLanguage ? D(r) : "";
                    if (!j)
                        if (t.i18n.differentDomains) {
                            j = (function (e, t) {
                                let r;
                                if (((r = window.location.host), r)) {
                                    const t = e.find((e) => e.domain === r);
                                    if (t) return t.code;
                                }
                                return "";
                            })(Le.normalizedLocales);
                        } else if (Le.strategy !== Te.STRATEGIES.NO_PREFIX) {
                            j = T(r);
                        }
                    !j && x && (j = t.i18n.getLocaleCookie()), j || (j = t.i18n.defaultLocale || ""), await C(j, { initialSetup: !0 });
                },
                Qe = o(44),
                et = o.n(Qe);
            l.default.use(et.a, {});
            var tt = function (e, t) {
                t("scrollTo", et.a.scrollTo);
            };
            o(139);
            let it = { images: !0, videos: !0, audios: !0, iframes: !0, native: !1, directiveOnly: !1, loadingClass: "isLoading", loadedClass: "isLoaded", appendClass: "lazyLoad", observerConfig: {}, globalName: "nuxt" },
                at = null,
                ot = ["src", "poster", "srcset"],
                nt = { img: "images", video: "videos", audio: "audios", iframe: "iframes", picture: "images" };
            const st = (e, t = !1) => {
                    let r = e.tagName.toLowerCase();
                    if ("svg" !== r) {
                        (e.children && e.children.length > 0 ? [...e.children, e] : [e]).forEach((e) => {
                            for (let o of ot)
                                e.dataset[o] && ((e[o] = t ? it.defaultImage : e.dataset[o]), t || e.removeAttribute(`data-${o}`)),
                                    e.load && e.load(),
                                    "audio" === r && "true" === e.getAttribute("data-lazy-controls") && (e.removeAttribute("controls"), e.removeAttribute("data-lazy-controls"));
                        });
                    }
                },
                lt = (e) => {
                    (e.style.backgroundImage = `url(${e.getAttribute("lazy-background")})`), e.removeAttribute("lazy-background"), !1 !== it.loadedClass && e.classList.add(it.loadedClass);
                },
                mt = (e, t) => {
                    let r = e.tagName.toLowerCase();
                    if (["img", "picture", "video"].includes(r)) {
                        e = "picture" === r ? e.querySelector("img") : e;
                        let o = "video" === r ? "loadeddata" : "load";
                        const n = "picture" === r ? e.parentNode : e;
                        !1 !== it.loadingClass && "loading" === t
                            ? (n.classList.add(it.loadingClass),
                              e.addEventListener(o, () => {
                                  n.classList.remove(it.loadingClass);
                              }))
                            : !1 !== it.loadedClass &&
                              "loaded" === t &&
                              e.addEventListener(o, () => {
                                  n.classList.add(it.loadedClass);
                              });
                    } else "loaded" === t && !1 !== it.loadedClass && e.classList.add(it.loadedClass);
                },
                ct = (e) => {
                    e.removeAttribute("data-no-lazy"), e.removeAttribute("data-not-lazy");
                };
            {
                let e = !1,
                    t = ("string" != typeof (s = it.globalName) ? "" : s.charAt(0).toUpperCase() + s.slice(1)) || "Nuxt";
                window[`on${t}Ready`](() => {
                    e = !0;
                }),
                    (at = new IntersectionObserver((t, r) => {
                        e &&
                            t.forEach((e) => {
                                if (e.isIntersecting) {
                                    let t = e.target;
                                    t.getAttribute("lazy-background") ? lt(t) : (st(t), mt(t, "loaded"), mt(t, "loading"), r.unobserve(t));
                                }
                            });
                    }, it.observerConfig));
            }
            var s;
            const pt = l.default.directive("lazy-load", {
                    inserted(e, { value: t, def: r }) {
                        r.set(e, t);
                    },
                    update(e, { value: t, def: r }, o, n) {
                        for (let l of ot)
                            if (n.data.attrs && o.data.attrs && n.data.attrs[`data-${l}`] !== o.data.attrs[`data-${l}`]) {
                                r.set(e, t);
                                break;
                            }
                    },
                    set(e, t) {
                        if (!0 === it.native)
                            it.appendClass && e.classList.add(it.appendClass),
                                ["notLazy", "noLazy"].every((t) => void 0 === e.dataset[t]) &&
                                    (e.setAttribute("loading", "lazy"),
                                    ct(e),
                                    it.loadedClass &&
                                        e.addEventListener("load", () => {
                                            e.classList.add(it.loadedClass);
                                        }));
                        else if ((it.defaultImage && st(e, !0), t)) {
                            let r = [];
                            t.replace(/( )src=/g, " data-src="), t.replace(/( )srcset=/g, " data-srcset="), t.replace(/( )poster=/g, " data-poster="), (e.innerHTML = t);
                            for (let t in nt) it[nt[t]] && r.push(...e.querySelectorAll(t));
                            for (let element of r) !1 !== it.appendClass && element.classList.add(it.appendClass), at.observe(element);
                        } else {
                            let element = "source" === e.tagName.toLowerCase() ? e.parentNode : e;
                            !0 !== it[nt[element.tagName.toLowerCase()]] || ["notLazy", "noLazy"].some((e) => void 0 !== element.dataset[e])
                                ? (st(element), ct(element))
                                : void 0 === element.dataset.manualLazy &&
                                  (!1 !== it.appendClass && element.classList.add(it.appendClass),
                                  "audio" !== element.tagName.toLowerCase() || element.getAttribute("controls") || (element.setAttribute("controls", ""), element.setAttribute("data-lazy-controls", "true")),
                                  at.observe(element));
                        }
                    },
                }),
                ht = l.default.directive("lazy-background", {
                    inserted(e, { def: t }) {
                        t.set(e);
                    },
                    update(e, { def: t }, r, o) {
                        t.set(e, r.data.attrs["lazy-background"] !== o.data.attrs["lazy-background"]);
                    },
                    set(e, t = !1) {
                        it.defaultImage && (e.style.backgroundImage = `url(${it.defaultImage})`),
                            ["notLazy", "noLazy"].some((t) => void 0 !== e.dataset[t])
                                ? lt(e)
                                : (void 0 === e.dataset.manualLazy && (!1 !== it.appendClass && e.classList.add(it.appendClass), at.observe(e)), t && (at.unobserve(e), at.observe(e)));
                    },
                });
            l.default.use(pt), l.default.use(ht);
            const gt = (e) => {
                    e.removeAttribute("data-manual-lazy"), !1 !== it.appendClass && e.classList.add(it.appendClass), e.getAttribute("lazy-background") ? lt(e) : (st(e), mt(e, "loading"), mt(e, "loaded"));
                },
                ut = (e) => {
                    if (e.target) {
                        [...e.target.querySelectorAll("[data-manual-lazy]")].forEach((e) => gt(e));
                    } else gt(e);
                };
            var _t = (e, t) => {
                    t("lazyLoad", ut);
                },
                ft = o(24),
                bt = o.n(ft),
                xt = o(61);
            const wt = {
                setBaseURL(e) {
                    this.defaults.baseURL = e;
                },
                setHeader(e, t, r = "common") {
                    for (const o of Array.isArray(r) ? r : [r]) t ? (this.defaults.headers[o][e] = t) : delete this.defaults.headers[o][e];
                },
                setToken(e, t, r = "common") {
                    const o = e ? (t ? t + " " : "") + e : null;
                    this.setHeader("Authorization", o, r);
                },
                onRequest(e) {
                    this.interceptors.request.use((t) => e(t) || t);
                },
                onResponse(e) {
                    this.interceptors.response.use((t) => e(t) || t);
                },
                onRequestError(e) {
                    this.interceptors.request.use(void 0, (t) => e(t) || Promise.reject(t));
                },
                onResponseError(e) {
                    this.interceptors.response.use(void 0, (t) => e(t) || Promise.reject(t));
                },
                onError(e) {
                    this.onRequestError(e), this.onResponseError(e);
                },
                create(e) {
                    return vt(Object(xt.a)(e, this.defaults));
                },
            };
            for (const e of ["request", "delete", "get", "head", "options", "post", "put", "patch"])
                wt["$" + e] = function () {
                    return this[e].apply(this, arguments).then((e) => e && e.data);
                };
            const vt = (e) => {
                    const t = bt.a.create(e);
                    return (
                        (t.CancelToken = bt.a.CancelToken),
                        (t.isCancel = bt.a.isCancel),
                        ((e) => {
                            for (const t in wt) e[t] = wt[t].bind(e);
                        })(t),
                        t.onRequest((e) => {
                            e.headers = { ...t.defaults.headers.common, ...e.headers };
                        }),
                        yt(t),
                        kt(t),
                        t
                    );
                },
                yt = (e) => {
                    e.onRequest((e) => {
                        void 0 === e.withCredentials && ((/^https?:\/\//i.test(e.url) && 0 !== e.url.indexOf(e.baseURL)) || (e.withCredentials = !0));
                    });
                },
                kt = (e) => {
                    const t = { finish: () => {}, start: () => {}, fail: () => {}, set: () => {} },
                        r = () => {
                            const e = window.$nuxt;
                            return e && e.$loading && e.$loading.set ? e.$loading : t;
                        };
                    let o = 0;
                    e.onRequest((e) => {
                        (e && !1 === e.progress) || o++;
                    }),
                        e.onResponse((e) => {
                            (e && e.config && !1 === e.config.progress) || (o--, o <= 0 && ((o = 0), r().finish()));
                        }),
                        e.onError((e) => {
                            (e && e.config && !1 === e.config.progress) || (o--, bt.a.isCancel(e) ? o <= 0 && ((o = 0), r().finish()) : (r().fail(), r().finish()));
                        });
                    const n = (e) => {
                        if (!o || !e.total) return;
                        const progress = (100 * e.loaded) / (e.total * o);
                        r().set(Math.min(100, progress));
                    };
                    (e.defaults.onUploadProgress = n), (e.defaults.onDownloadProgress = n);
                };
            var Ft = (e, t) => {
                    const r = (e.$config && e.$config.axios) || {},
                        o = r.browserBaseURL || r.browserBaseUrl || r.baseURL || r.baseUrl || "https://relio.ch/api/";
                    const n = vt({ baseURL: o, headers: { common: { Accept: "application/json, text/plain, */*" }, delete: {}, get: {}, head: {}, post: {}, put: {}, patch: {} } });
                    (e.$axios = n), t("axios", n);
                },
                Tt = {
                    async mounted() {
                        this.$store.dispatch("setAxiosHeaders"),
                            this.$store.dispatch("setLanguage", { app: null, route: this.$route }),
                            setTimeout(() => {
                                window.scrollTo(0, 0);
                            }, 0);
                    },
                    head() {
                        return this.$store.getters.getPageHead(this.$store.state.currentPage);
                    },
                    async asyncData(e) {
                        await e.store.dispatch("getPageData", e);
                    },
                    computed: {
                        page() {
                            return this.$store.state.currentPage;
                        },
                        template() {
                            if (this.page && this.page.meta && this.page.meta.type) return this.page.meta.type.replace("common.", "").replace("Page", "");
                        },
                    },
                };
            const Ct = o(159);
            Ct.keys().map((e) => {
                let component = Ct(e).default;
                component.mixins ? component.mixins.push(Tt) : (component.mixins = [Tt]);
            });
            const Lt = (e, t) => {
                    if (void 0 !== e) return "string" == typeof e ? e : e[t];
                },
                St = {
                    required: (e, t, r) => ({ isError: [void 0, null].includes(t) || 0 === t.length || "" === t, message: Lt(r.message, "required") || "This field is required" }),
                    number(e, t, r) {
                        if (!r.strict) return { isError: !/^\d*$/.test(t), message: Lt(r.message, "number") || "Must be a number" };
                        e.componentInstance.fieldValue = t.replace(/[^\d]/g, "");
                    },
                    phone(e, t, r) {
                        if (!r.strict) return { isError: !/((^0\d{1,2})|(^(\+|00[- \/]?)\d{1,3}([- \/]?\d{1,2})))(?:[- \/]?\d{3,4}[- \/]?\d{3,4})/.test(t), message: Lt(r.message, "phone") || "Must be a valid phone number" };
                        e.componentInstance.fieldValue = t.replace(/[^ \-\/\+\d]/g, "");
                    },
                    decimal: (e, t, r) => (
                        r.strict && ((e.componentInstance.fieldValue = t.replace(/[^\d|\.]/g, "")), e.componentInstance.fieldValue.split(".").length - 1 > 1 && (e.componentInstance.fieldValue = t.slice(0, -1))),
                        { isError: !/^(?!(0\d))\d+\.\d+$/.test(t), message: Lt(r.message, "decimal") || "Must be a decimal number" }
                    ),
                    email: (e, t, r) => ({
                        isError: !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),
                        message: Lt(r.message, "email") || "Must be a valid email",
                    }),
                    minlength(e, t, r) {
                        let o = parseInt(r.minlength || e.componentInstance.minlength);
                        return { isError: (t = Array.isArray(t) ? t : t.toString()).length < o, message: Lt(r.message, "minlength") || `Min length is ${o}` };
                    },
                    maxlength(e, t, r) {
                        let o = parseInt(r.maxlength || e.componentInstance.maxlength);
                        if (((t = Array.isArray(t) ? t : t.toString()), !r.strict)) return { isError: t.length > o, message: Lt(r.message, "maxlength") || `Max length is ${o}` };
                        e.componentInstance.fieldValue = e.componentInstance.fieldValue.slice(0, o);
                    },
                    min(e, t, r) {
                        let o = parseInt(r.min || e.componentInstance.min);
                        return { isError: t < o, message: Lt(r.message, "min") || `Number must be larger than ${o} or equal` };
                    },
                    max(e, t, r) {
                        let o = parseInt(r.max || e.componentInstance.max);
                        return { isError: t > o, message: Lt(r.message, "max") || `Number must be larger than ${o} or equal` };
                    },
                    pattern(e, t, r) {
                        let pattern = "";
                        for (let p of r.pattern) /^((?![`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]).)*$/.test(p) ? (pattern += ".") : (pattern += "\\" + p);
                        return { isError: !new RegExp(pattern + "$").test(t), message: Lt(r.message, "pattern") || `Pattern must be ${r.pattern}` };
                    },
                    date(e, t, r) {
                        let o = t.split(r.delimiter),
                            n = r.pattern.split(r.delimiter),
                            l = o[n.findIndex((i) => i.toLowerCase().includes("d"))],
                            m = o[n.findIndex((i) => i.toLowerCase().includes("m"))],
                            d = o[n.findIndex((i) => i.toLowerCase().includes("y"))],
                            c = Date.parse(`${d}-${m}-${l}`);
                        return { isError: [l, m, d].some((e) => void 0 === e || 0 === e.length) || !c, message: Lt(r.message, "date") || "Date is not valid", date: new Date(c) };
                    },
                    minAge(e, t, r) {
                        const { date: o, isError: n } = this.date(e, t, r);
                        if (n) return { isError: !0, message: Lt(r.message, "date") || 'Please add verification message for "date" verification as well.' };
                        const { date: l, isError: m } = this.date(e, r.minAge, r);
                        if (m) return { isError: !0, message: `Wrong minimum age ('minAge' parameter) format (should be ${r.pattern}): ${r.minAge}` };
                        let d = new Date();
                        d.setFullYear(d.getFullYear() - l.getFullYear()), d.setMonth(d.getMonth() - l.getMonth()), d.setDate(d.getDate() - l.getDate() + 1);
                        return { isError: o > d, message: Lt(r.message, "minAge") || "Date is not valid and does not fultill minimum age requirements" };
                    },
                    checked: (e, t, r) => ({ isError: !e.componentInstance.isChecked, message: Lt(r.message, "checked") || "Field should be checked" }),
                },
                It = (e, t) => {
                    if (t) {
                        let r = e.componentInstance.validationErrors;
                        t.isError
                            ? void 0 !== r
                                ? r.includes(t.message) || (e.componentInstance.validationErrors = [...r, t.message])
                                : (e.componentInstance.validationErrors = [t.message])
                            : void 0 !== r &&
                              r.includes(t.message) &&
                              e.componentInstance.validationErrors.splice(
                                  r.findIndex((e) => e === t.message),
                                  1
                              );
                    }
                },
                Dt = async (e, t, r, o) => {
                    "string" == typeof e ? await It(o, St[e](o, r, t)) : await It(o, { isError: !Object.values(e)[0](r, t, o), message: Lt(t.message, Object.keys(e)[0]) }), t.required && (await It(o, St.required(o, r, t)));
                },
                zt = (e, r, o = {}) => {
                    let n = [],
                        l = "date" === e ? ["date", "pattern"] : void 0;
                    l = Array.isArray(l) ? e : [e];
                    for (let e of l) "string" == typeof e ? n.push(St[e](void 0, r, o)) : n.push({ isError: !Object.values(e)[0](r, o), message: Lt(o.message, Object.keys(t)[0]) });
                    let m = n.filter((e) => e.isError),
                        d = { isError: m.length > 0 };
                    if (d.isError) {
                        let e = m.map((e) => e.message);
                        d.message = e.length > 1 ? e : e[0];
                    }
                    return d;
                };
            l.default.directive("validate", {
                async update(e, { value: t }, r, o) {
                    if (r.data.model.value !== o.data.model.value && t.type)
                        if (Array.isArray(t.type)) for (let e of t.type) await Dt(e, t, r.componentInstance.fieldValue, r);
                        else await Dt(t.type, t, r.componentInstance.fieldValue, r);
                },
            });
            var Pt = function (e, t) {
                t("validate", zt);
            };
            let Et = null;
            (Et = new IntersectionObserver(
                (e, t) => {
                    e.forEach((e) => {
                        let t = e.target;
                        e.isIntersecting && t.classList.remove("isAnimated");
                    });
                },
                { threshold: 0.25 }
            )),
                l.default.directive("animate", {
                    inserted(e, { value: t }) {
                        !1 !== t && (e.classList.add("isAnimated"), e.classList.add("animate"), t ? e.classList.add(t) : e.classList.add("isBottom"), Et.observe(e));
                    },
                });
            var jt = o(62),
                Wt = o.n(jt);
            l.default.component("Roller", Wt.a),
                l.default.component(h.a.name, h.a),
                l.default.component(f.a.name, {
                    ...f.a,
                    render: (e, t) => (f.a._warned || ((f.a._warned = !0), console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), f.a.render(e, t)),
                }),
                l.default.component(F.name, F),
                l.default.component("NChild", F),
                l.default.component(D.name, D),
                Object.defineProperty(l.default.prototype, "$nuxt", {
                    get() {
                        const e = this.$root.$options.$nuxt;
                        return e || window.$nuxt;
                    },
                    configurable: !0,
                }),
                l.default.use(d.a, { keyName: "head", attribute: "data-n-head", ssrAttribute: "data-n-head-ssr", tagIDKeyName: "hid" });
            const Nt = { name: "page", mode: "out-in", appear: !1, appearClass: "appear", appearActiveClass: "appear-active", appearToClass: "appear-to" },
                $t = m.a.Store.prototype.registerModule;
            function Bt(path, e, t = {}) {
                const r = Array.isArray(path) ? !!path.reduce((e, path) => e && e[path], this.state) : path in this.state;
                return $t.call(this, path, e, { preserveState: r, ...t });
            }
            async function At(e, t = {}) {
                const r = await (function (e, t) {
                        const base = (t._app && t._app.basePath) || k.base,
                            r = new x.a({ ...k, base: base }),
                            o = r.push;
                        r.push = function (e, t = y, r) {
                            return o.call(this, e, t, r);
                        };
                        const n = r.resolve.bind(r);
                        return (r.resolve = (e, t, r) => ("string" == typeof e && (e = Object(w.c)(e)), n(e, t, r))), r;
                    })(0, t),
                    o = V(e);
                (o.$router = r), (o.registerModule = Bt);
                const n = {
                    head: {
                        title: "Website",
                        meta: [
                            { charset: "utf-8" },
                            { name: "viewport", content: "height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0" },
                            { hid: "description", name: "description", content: "This is a default page description" },
                        ],
                        style: [],
                    },
                    store: o,
                    router: r,
                    nuxt: {
                        defaultTransition: Nt,
                        transitions: [Nt],
                        setTransitions(e) {
                            return Array.isArray(e) || (e = [e]), (e = e.map((e) => (e = e ? ("string" == typeof e ? Object.assign({}, Nt, { name: e }) : Object.assign({}, Nt, e)) : Nt))), (this.$options.nuxt.transitions = e), e;
                        },
                        err: null,
                        dateErr: null,
                        error(t) {
                            (t = t || null), (n.context._errored = Boolean(t)), (t = t ? Object(v.p)(t) : null);
                            let r = n.nuxt;
                            return this && (r = this.nuxt || this.$options.nuxt), (r.dateErr = Date.now()), (r.err = t), e && (e.nuxt.error = t), t;
                        },
                    },
                    ...M,
                };
                o.app = n;
                const m = e ? e.next : (e) => n.router.push(e);
                let d;
                if (e) d = r.resolve(e.url).route;
                else {
                    const path = Object(v.f)(r.options.base, r.options.mode);
                    d = r.resolve(path).route;
                }
                function c(e, t) {
                    if (!e) throw new Error("inject(key, value) has no key provided");
                    if (void 0 === t) throw new Error(`inject('${e}', value) has no value provided`);
                    (n[(e = "$" + e)] = t), n.context[e] || (n.context[e] = t), (o[e] = n[e]);
                    const r = "__nuxt_" + e + "_installed__";
                    l.default[r] ||
                        ((l.default[r] = !0),
                        l.default.use(() => {
                            Object.prototype.hasOwnProperty.call(l.default.prototype, e) ||
                                Object.defineProperty(l.default.prototype, e, {
                                    get() {
                                        return this.$root.$options[e];
                                    },
                                });
                        }));
                }
                return (
                    await Object(v.t)(n, {
                        store: o,
                        route: d,
                        next: m,
                        error: n.nuxt.error.bind(n),
                        payload: e ? e.payload : void 0,
                        req: e ? e.req : void 0,
                        res: e ? e.res : void 0,
                        beforeRenderFns: e ? e.beforeRenderFns : void 0,
                        ssrContext: e,
                    }),
                    c("config", t),
                    window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state),
                    "function" == typeof _e.a && (await Object(_e.a)(n.context, c)),
                    await ve(n.context, c),
                    await Je(n.context),
                    await Ze(n.context),
                    await tt(n.context, c),
                    await _t(n.context, c),
                    await Ft(n.context, c),
                    await Pt(n.context, c),
                    await new Promise((e, t) => {
                        r.replace(n.context.route.fullPath, e, (o) => {
                            if (!o._isRouter) return t(o);
                            if (2 !== o.type) return e();
                            const l = r.afterEach(async (t, r) => {
                                (n.context.route = await Object(v.j)(t)), (n.context.params = t.params || {}), (n.context.query = t.query || {}), l(), e();
                            });
                        });
                    }),
                    { store: o, app: n, router: r }
                );
            }
        },
        ,
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = { props: { button: {}, color: "" } },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r(
                            "div",
                            [
                                e.button.external
                                    ? r("a", { class: `btn--${e.color}`, attrs: { target: "_blank", href: e.button.sef } }, [
                                          e._v("\n    " + e._s(e.button.cta) + "\n    "),
                                          r("span", [
                                              r(
                                                  "svg",
                                                  {
                                                      directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                      attrs: { viewBox: "0 0 15 14", xmlns: "http://www.w3.org/2000/svg", inline: "", "data-src": "@/assets/svgs/arrow.svg", role: "presentation", focusable: "false", tabindex: "-1" },
                                                  },
                                                  [
                                                      r("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                          r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                      ]),
                                                  ]
                                              ),
                                          ]),
                                      ])
                                    : e.button.external
                                    ? e._e()
                                    : r("n-link", { class: `btn--${e.color}`, attrs: { to: e.button.sef } }, [
                                          e._v("\n    " + e._s(e.button.cta) + "\n    "),
                                          r("span", [
                                              r(
                                                  "svg",
                                                  {
                                                      directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                      attrs: { viewBox: "0 0 15 14", xmlns: "http://www.w3.org/2000/svg", inline: "", "data-src": "@/assets/svgs/arrow.svg", role: "presentation", focusable: "false", tabindex: "-1" },
                                                  },
                                                  [
                                                      r("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                          r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                      ]),
                                                  ]
                                              ),
                                          ]),
                                      ]),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        function (e, t, r) {
            "use strict";
            var o = r(15),
                n = r(16);
            t.a = {
                props: { label: {}, error: {}, info: {}, inline: {}, fromGeneric: { default: !1 }, disabled: { default: !1 }, tooltip: {}, required: { default: !1 }, name: {}, tooltipClickOnly: {} },
                data: () => ({ validationErrors: void 0 }),
                components: { FormError: o.default, FormLabel: n.default },
                computed: {
                    isDisabled() {
                        return !1 !== this.disabled;
                    },
                    isRequired() {
                        return !1 !== this.required;
                    },
                    hasTooltip() {
                        return void 0 !== this.tooltip || void 0 !== this.$slots.tooltip;
                    },
                    formLabelProps() {
                        return { forID: this._uid, label: this.label, tooltip: this.tooltip, hasTooltip: this.hasTooltip, tooltipClickOnly: this.tooltipClickOnly };
                    },
                },
            };
        },
        ,
        function (e, t, r) {
            "use strict";
            (function (e) {
                r.d(t, "a", function () {
                    return n;
                });
                const o = [
                        { name: "width", shortName: "w" },
                        { name: "height", shortName: "h" },
                        { name: "cropMode", shortName: "c" },
                        { name: "quality", shortName: "q" },
                        { name: "aspectRatio", shortName: "ar" },
                    ],
                    n = (e, t, r = !0) => {
                        if (t && e && e.meta && "DOCUMENT" !== e.meta.type) {
                            if (!e.meta.base_url) return e.meta.url || "";
                            const r = [];
                            for (const param of o) t[param.name] && r.push(`${param.shortName}_${t[param.name]}`);
                            return r.push("f_auto"), r.push("q_90"), `${e.meta.base_url}${r.join(";")}/${e.meta.filename}`;
                        }
                        return e && e.meta && e.meta.url ? e.meta.url : "";
                    };
            }.call(this, r(5)));
        },
        ,
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = { props: { error: {}, className: {} } },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return e.error
                            ? r(
                                  "ul",
                                  { staticClass: "form__Errors" },
                                  e._l(Array.isArray(e.error) ? e.error : [e.error], function (t, i) {
                                      return r("li", { key: "error" + i, class: ["form__Error", e.className], domProps: { textContent: e._s(t) } });
                                  }),
                                  0
                              )
                            : e._e();
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = { components: { Tooltip: r(37).default }, props: { forID: {}, label: {}, tooltip: {}, hasTooltip: {}, tooltipClickOnly: {} } },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return void 0 !== e.label || void 0 !== e.tooltip
                            ? r(
                                  "label",
                                  { staticClass: "form__Label", attrs: { for: e.forID } },
                                  [
                                      e.$slots.label && void 0 !== e.label ? [e._v("\n    " + e._s(e.label) + " "), e._t("label")] : e.$slots.label ? [e._t("label")] : void 0 !== e.label ? [e._v("\n    " + e._s(e.label) + "\n  ")] : e._e(),
                                      e._v(" "),
                                      e.hasTooltip ? r("Tooltip", { attrs: { text: e.tooltip, "click-only": e.tooltipClickOnly } }, [e._t("default")], 2) : e._e(),
                                  ],
                                  2
                              )
                            : e._e();
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { Tooltip: r(37).default });
        },
        ,
        ,
        ,
        ,
        function (e, t, r) {
            "use strict";
            const o = {};
            (o.isJoined = r(98)), (o.isJoined = o.isJoined.default || o.isJoined), (o.page = r(99)), (o.page = o.page.default || o.page), (t.a = o);
        },
        ,
        ,
        ,
        ,
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    data: () => ({ formData: { email: "" }, placeholderText: "", imprintLink: "", imprintText: "Imprint", isFormSent: !1, isFormError: !1, isValid: void 0, year: "" }),
                    mounted() {
                        (this.placeholderText = "en" === this.$store.state.lang ? "Enter your email address" : "Ihre E-mail"),
                            (this.imprintText = "en" === this.$store.state.lang ? "Imprint" : "Impressum"),
                            (this.imprintLink = "en" === this.$store.state.lang ? this.$store.getters.link("PrivacyPolicy") + "#imprint" : this.$store.getters.link("PrivacyPolicy") + "#impressum"),
                            (this.year = new Date().getFullYear());
                    },
                    methods: {
                        scrollTop() {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        },
                        isEmailValid() {
                            this.isValid = !this.$validate("email", this.formData.email).isError;
                        },
                        async sendNewsletter() {
                            try {
                                await this.$axios.post("newsletter/", this.formData);
                                (this.isFormSent = !0),
                                    (this.isFormError = !1),
                                    setTimeout(() => {
                                        (this.isFormSent = !1), (this.formData.email = ""), (this.isValid = !1);
                                    }, 8e3);
                            } catch (e) {
                                console.log(e), (this.isFormSent = !0), (this.isFormError = !0);
                            }
                        },
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("footer", [
                            r("div", { staticClass: "container" }, [
                                r(
                                    "div",
                                    { staticClass: "footer__Top" },
                                    [
                                        r("button", { staticClass: "btn--scrollTop", on: { click: e.scrollTop } }, [
                                            e._v("\n        Scroll to top\n        "),
                                            r(
                                                "svg",
                                                {
                                                    directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                    attrs: { viewBox: "0 0 25 25", xmlns: "http://www.w3.org/2000/svg", inline: "", "data-src": "@/assets/svgs/arrow-top.svg", role: "presentation", focusable: "false", tabindex: "-1" },
                                                },
                                                [
                                                    r("g", { attrs: { stroke: "currentColor", "stroke-width": "1.28", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                        r("path", { attrs: { d: "M12.309 22.924V8.49M19.032 15.226l-6.724-6.735-6.724 6.735" } }),
                                                    ]),
                                                ]
                                            ),
                                        ]),
                                        e._v(" "),
                                        r("n-link", { staticClass: "footer__Logo", attrs: { to: e.$store.getters.link("Home") } }, [
                                            r(
                                                "svg",
                                                {
                                                    directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                    attrs: { viewBox: "0 0 127 24", xmlns: "http://www.w3.org/2000/svg", inline: "", "data-src": "@/assets/svgs/logo.svg", role: "presentation", focusable: "false", tabindex: "-1" },
                                                },
                                                [
                                                    r("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                                                        r("path", { attrs: { fill: "#FF4650", d: "M11.725.259h12.513v10.806H11.71v12.642H1V11.08z" } }),
                                                        r("path", {
                                                            attrs: {
                                                                fill: "currentColor",
                                                                d:
                                                                    "M55.95 14.606h9.938V9.463H55.95V5.486h12.996V.343H50.139v23.314h19.147v-5.143H55.95zM78.666.342h-5.81v23.315h17.783v-5.143H78.666zM93.63 23.657h5.81V.342h-5.81zM114.107 18.642c-3.41 0-6.176-2.55-6.176-6.642 0-3.893 2.766-6.642 6.176-6.642 3.411 0 6.177 2.673 6.177 6.642 0 4.091-2.766 6.642-6.177 6.642m0-18.642c-6.568 0-11.892 5.373-11.892 12s5.324 12 11.892 12C120.676 24 126 18.627 126 12s-5.324-12-11.893-12M39.641 10.217c-.589.503-1.473.754-2.65.754h-4.708V5.417h4.912c1.132 0 1.97.211 2.514.634.544.424.816 1.08.816 1.972 0 .96-.295 1.691-.884 2.194m3.483 3.771a7.207 7.207 0 002.719-2.64c.668-1.12 1.002-2.4 1.002-3.84 0-4.81-3.454-7.166-7.928-7.166H26.473V23.657h5.81V15.84h4.408l4.275 7.817h6.253l-5.244-9.155c.399-.14.783-.308 1.15-.514",
                                                            },
                                                        }),
                                                    ]),
                                                ]
                                            ),
                                        ]),
                                        e._v(" "),
                                        r("div", { staticClass: "footer__Right" }, [
                                            r("span", { staticClass: "category" }, [e._v(" " + e._s(e.$t("footer.category")) + " ")]),
                                            e._v(" "),
                                            r(
                                                "div",
                                                { staticClass: "footer__FormWrapper" },
                                                [
                                                    e.isFormSent
                                                        ? e._e()
                                                        : [
                                                              r(
                                                                  "form",
                                                                  {
                                                                      class: { isValid: e.isValid },
                                                                      attrs: { id: "newsletter" },
                                                                      on: {
                                                                          submit: function (t) {
                                                                              return t.preventDefault(), e.sendNewsletter.apply(null, arguments);
                                                                          },
                                                                          keyup: e.isEmailValid,
                                                                      },
                                                                  },
                                                                  [
                                                                      r("TextField", {
                                                                          attrs: { type: "email", placeholder: e.placeholderText },
                                                                          model: {
                                                                              value: e.formData.email,
                                                                              callback: function (t) {
                                                                                  e.$set(e.formData, "email", t);
                                                                              },
                                                                              expression: "formData.email",
                                                                          },
                                                                      }),
                                                                      e._v(" "),
                                                                      r("div", { staticClass: "form__Privacy" }, [
                                                                          r(
                                                                              "p",
                                                                              [
                                                                                  e._v("\n                  " + e._s(e.$t("footer.terms1")) + " "),
                                                                                  r("n-link", { attrs: { to: e.$store.getters.link("PrivacyPolicy") || "" } }, [e._v(" " + e._s(e.$t("footer.termsLink2")) + " ")]),
                                                                                  e._v(" " + e._s(e.$t("footer.terms2")) + "\n                "),
                                                                              ],
                                                                              1
                                                                          ),
                                                                          e._v(" "),
                                                                          r("div", [
                                                                              r("button", { staticClass: "btn--Black", attrs: { disabled: !e.isValid } }, [
                                                                                  e._v("\n                    " + e._s(e.$t("footer.btn")) + "\n                    "),
                                                                                  r("span", [
                                                                                      r(
                                                                                          "svg",
                                                                                          {
                                                                                              directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                                              attrs: {
                                                                                                  viewBox: "0 0 15 14",
                                                                                                  xmlns: "http://www.w3.org/2000/svg",
                                                                                                  inline: "",
                                                                                                  "data-src": "@/assets/svgs/arrow.svg",
                                                                                                  role: "presentation",
                                                                                                  focusable: "false",
                                                                                                  tabindex: "-1",
                                                                                              },
                                                                                          },
                                                                                          [
                                                                                              r(
                                                                                                  "g",
                                                                                                  {
                                                                                                      attrs: {
                                                                                                          stroke: "currentColor",
                                                                                                          "stroke-width": ".96",
                                                                                                          fill: "none",
                                                                                                          "fill-rule": "evenodd",
                                                                                                          "stroke-linecap": "round",
                                                                                                          "stroke-linejoin": "round",
                                                                                                      },
                                                                                                  },
                                                                                                  [r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } })]
                                                                                              ),
                                                                                          ]
                                                                                      ),
                                                                                  ]),
                                                                              ]),
                                                                          ]),
                                                                      ]),
                                                                  ],
                                                                  1
                                                              ),
                                                          ],
                                                    e._v(" "),
                                                    e.isFormSent
                                                        ? r("div", { staticClass: "footer__FormSuccess" }, [
                                                              e.isFormError ? e._e() : r("p", [e._v("\n              " + e._s(e.$t("footer.success")) + "\n            ")]),
                                                              e._v(" "),
                                                              e.isFormError ? r("p", { domProps: { innerHTML: e._s(e.$t("footer.error")) } }) : e._e(),
                                                          ])
                                                        : e._e(),
                                                ],
                                                2
                                            ),
                                            e._v(" "),
                                            r("div", { staticClass: "footer__Navigation" }, [
                                                r(
                                                    "ul",
                                                    e._l(e.$store.state.menus.footer, function (t) {
                                                        return r(
                                                            "li",
                                                            { key: t.id },
                                                            [
                                                                t.external
                                                                    ? [
                                                                          t.new_tab
                                                                              ? r("a", { attrs: { href: t.url, target: "_blank" } }, [e._v(" " + e._s(t.title) + " ")])
                                                                              : r("a", { attrs: { href: t.url } }, [e._v(" " + e._s(t.title) + " ")]),
                                                                      ]
                                                                    : r("n-link", { attrs: { to: t.url } }, [e._v(" " + e._s(t.title) + " ")]),
                                                            ],
                                                            2
                                                        );
                                                    }),
                                                    0
                                                ),
                                                e._v(" "),
                                                e._m(0),
                                            ]),
                                            e._v(" "),
                                            r("div", { staticClass: "footer__Bottom" }, [
                                                r(
                                                    "div",
                                                    [
                                                        r("n-link", { attrs: { to: e.$store.getters.link("PrivacyPolicy") } }, [e._v(e._s(e.$t("footer.termsLink")))]),
                                                        e._v(" "),
                                                        r("n-link", { attrs: { to: e.imprintLink } }, [e._v(e._s(e.imprintText))]),
                                                        e._v(" "),
                                                        r("button", { staticClass: "ot-sdk-show-settings", attrs: { id: "ot-sdk-btn" } }, [e._v(e._s(e.$t("footer.cookieSettings")))]),
                                                    ],
                                                    1
                                                ),
                                                e._v(" "),
                                                r("p", [e._v("© " + e._s(e.year) + " Relio")]),
                                            ]),
                                        ]),
                                    ],
                                    1
                                ),
                            ]),
                        ]);
                    },
                    [
                        function () {
                            var e = this,
                                t = e.$createElement,
                                r = e._self._c || t;
                            return r("div", { staticClass: "footer__Social" }, [
                                r("a", { attrs: { href: "https://www.linkedin.com/company/relioch/" } }, [e._v("Linkedin")]),
                                e._v(" "),
                                r("a", { attrs: { href: "https://twitter.com/relio_ch" } }, [e._v("Twitter")]),
                            ]);
                        },
                    ],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { Button: r(10).default, TextField: r(29).default, Footer: r(26).default });
        },
        ,
        function (e, t, r) {
            "use strict";
            var o = r(1);
            const n =
                    window.requestIdleCallback ||
                    function (e) {
                        const t = Date.now();
                        return setTimeout(function () {
                            e({ didTimeout: !1, timeRemaining: () => Math.max(0, 50 - (Date.now() - t)) });
                        }, 1);
                    },
                l =
                    window.cancelIdleCallback ||
                    function (e) {
                        clearTimeout(e);
                    },
                m =
                    window.IntersectionObserver &&
                    new window.IntersectionObserver((e) => {
                        e.forEach(({ intersectionRatio: e, target: link }) => {
                            e <= 0 || !link.__prefetch || link.__prefetch();
                        });
                    });
            t.a = {
                name: "NuxtLink",
                extends: o.default.component("RouterLink"),
                props: { prefetch: { type: Boolean, default: !0 }, noPrefetch: { type: Boolean, default: !1 } },
                mounted() {
                    this.prefetch && !this.noPrefetch && (this.handleId = n(this.observe, { timeout: 2e3 }));
                },
                beforeDestroy() {
                    l(this.handleId), this.__observed && (m.unobserve(this.$el), delete this.$el.__prefetch);
                },
                methods: {
                    observe() {
                        m && this.shouldPrefetch() && ((this.$el.__prefetch = this.prefetchLink.bind(this)), m.observe(this.$el), (this.__observed = !0));
                    },
                    shouldPrefetch() {
                        return this.getPrefetchComponents().length > 0;
                    },
                    canPrefetch() {
                        const e = navigator.connection;
                        return !(this.$nuxt.isOffline || (e && ((e.effectiveType || "").includes("2g") || e.saveData)));
                    },
                    getPrefetchComponents() {
                        return this.$router
                            .resolve(this.to, this.$route, this.append)
                            .resolved.matched.map((e) => e.components.default)
                            .filter((e) => "function" == typeof e && !e.options && !e.__prefetched);
                    },
                    prefetchLink() {
                        if (!this.canPrefetch()) return;
                        m.unobserve(this.$el);
                        const e = this.getPrefetchComponents();
                        for (const t of e) {
                            const e = t();
                            e instanceof Promise && e.catch(() => {}), (t.__prefetched = !0);
                        }
                    },
                },
            };
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    props: { value: {}, placeholder: {}, type: { default: "text" }, minlength: {}, maxlength: {}, min: {}, max: {}, inverted: {} },
                    mixins: [r(11).a],
                    computed: {
                        fieldValue: {
                            get() {
                                return this.value;
                            },
                            set(e) {
                                this.$emit("input", e);
                            },
                        },
                        hasValue() {
                            return ![null, void 0].includes(this.value) && (this.value.toString().length > 0 || "" !== this.value.toString());
                        },
                    },
                    data: () => ({ isFocused: !1 }),
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r(
                            "div",
                            {
                                class: [
                                    "form__Field",
                                    "textField",
                                    { isFocused: e.isFocused },
                                    { hasValue: e.hasValue },
                                    { isError: void 0 !== e.error },
                                    { isDisabled: e.isDisabled },
                                    { isInline: void 0 !== e.inline },
                                    { "textField--Inverted": void 0 !== e.inverted },
                                ],
                            },
                            [
                                r(
                                    "FormLabel",
                                    e._b(
                                        {
                                            scopedSlots: e._u(
                                                [
                                                    {
                                                        key: "label",
                                                        fn: function () {
                                                            return [e._t("label")];
                                                        },
                                                        proxy: !0,
                                                    },
                                                ],
                                                null,
                                                !0
                                            ),
                                        },
                                        "FormLabel",
                                        e.formLabelProps,
                                        !1
                                    ),
                                    [e._v(" "), e._t("tooltip")],
                                    2
                                ),
                                e._v(" "),
                                r("div", { staticClass: "textField__Wrapper" }, [
                                    e.$slots.prepend ? r("div", { staticClass: "textField__Prepend" }, [e._t("prepend")], 2) : e._e(),
                                    e._v(" "),
                                    "checkbox" === e.type
                                        ? r("input", {
                                              directives: [{ name: "model", rawName: "v-model", value: e.fieldValue, expression: "fieldValue" }],
                                              attrs: {
                                                  name: e.name,
                                                  id: e._uid,
                                                  minlength: e.minlength,
                                                  maxlength: e.maxlength,
                                                  min: e.min,
                                                  max: e.max,
                                                  required: e.isRequired,
                                                  disabled: e.isDisabled,
                                                  placeholder: e.placeholder,
                                                  type: "checkbox",
                                              },
                                              domProps: { checked: Array.isArray(e.fieldValue) ? e._i(e.fieldValue, null) > -1 : e.fieldValue },
                                              on: {
                                                  focus: function (t) {
                                                      e.isFocused = !0;
                                                  },
                                                  blur: function (t) {
                                                      e.isFocused = !1;
                                                  },
                                                  change: function (t) {
                                                      var r = e.fieldValue,
                                                          o = t.target,
                                                          n = !!o.checked;
                                                      if (Array.isArray(r)) {
                                                          var l = e._i(r, null);
                                                          o.checked ? l < 0 && (e.fieldValue = r.concat([null])) : l > -1 && (e.fieldValue = r.slice(0, l).concat(r.slice(l + 1)));
                                                      } else e.fieldValue = n;
                                                  },
                                              },
                                          })
                                        : "radio" === e.type
                                        ? r("input", {
                                              directives: [{ name: "model", rawName: "v-model", value: e.fieldValue, expression: "fieldValue" }],
                                              attrs: {
                                                  name: e.name,
                                                  id: e._uid,
                                                  minlength: e.minlength,
                                                  maxlength: e.maxlength,
                                                  min: e.min,
                                                  max: e.max,
                                                  required: e.isRequired,
                                                  disabled: e.isDisabled,
                                                  placeholder: e.placeholder,
                                                  type: "radio",
                                              },
                                              domProps: { checked: e._q(e.fieldValue, null) },
                                              on: {
                                                  focus: function (t) {
                                                      e.isFocused = !0;
                                                  },
                                                  blur: function (t) {
                                                      e.isFocused = !1;
                                                  },
                                                  change: function (t) {
                                                      e.fieldValue = null;
                                                  },
                                              },
                                          })
                                        : r("input", {
                                              directives: [{ name: "model", rawName: "v-model", value: e.fieldValue, expression: "fieldValue" }],
                                              attrs: {
                                                  name: e.name,
                                                  id: e._uid,
                                                  minlength: e.minlength,
                                                  maxlength: e.maxlength,
                                                  min: e.min,
                                                  max: e.max,
                                                  required: e.isRequired,
                                                  disabled: e.isDisabled,
                                                  placeholder: e.placeholder,
                                                  type: e.type,
                                              },
                                              domProps: { value: e.fieldValue },
                                              on: {
                                                  focus: function (t) {
                                                      e.isFocused = !0;
                                                  },
                                                  blur: function (t) {
                                                      e.isFocused = !1;
                                                  },
                                                  input: function (t) {
                                                      t.target.composing || (e.fieldValue = t.target.value);
                                                  },
                                              },
                                          }),
                                    e._v(" "),
                                    e.$slots.append ? r("div", { staticClass: "textField__Append" }, [e._t("append")], 2) : e._e(),
                                ]),
                                e._v(" "),
                                r("FormError", { attrs: { error: e.error, className: "textField__Error" } }),
                                e._v(" "),
                                r("FormError", { attrs: { error: e.validationErrors, className: "textField__Error" } }),
                                e._v(" "),
                                e.info ? r("span", { staticClass: "textField__Info form__Info", domProps: { textContent: e._s(e.info) } }) : e._e(),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { FormLabel: r(16).default, FormError: r(15).default });
        },
        ,
        ,
        ,
        ,
        ,
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    data: () => ({ isScrolled: !1, isVisible: !0, isEnglish: !1, isDeutsch: !1 }),
                    mounted() {
                        let e = 10;
                        window.addEventListener("scroll", () => {
                            window.scrollY > 0 ? (this.isScrolled = !0) : (this.isScrolled = !1);
                            let t = window.pageYOffset || document.documentElement.scrollTop;
                            (this.isVisible = t <= e), (e = t <= 0 ? 0 : t);
                        }),
                            "en" === this.$store.state.lang && (this.isEnglish = !0),
                            "de" === this.$store.state.lang && (this.isDeutsch = !0);
                    },
                    destroyed() {
                        window.removeEventListener("scroll", this.handleScroll);
                    },
                    methods: {
                        handleScroll() {},
                        toggleNavigation() {
                            document.documentElement.classList.toggle("isNavigationOpen");
                        },
                        toggleLanguage() {
                            document.documentElement.classList.toggle("isLanguageOpen");
                        },
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("header", { staticClass: "navigation", class: { isScrolled: e.isScrolled, isVisible: e.isVisible } }, [
                            r("div", { staticClass: "container" }, [
                                r(
                                    "div",
                                    { staticClass: "navigation__Inner" },
                                    [
                                        r("n-link", { staticClass: "navigation__Logo", attrs: { to: e.$store.getters.link("Home") } }, [
                                            r(
                                                "svg",
                                                {
                                                    directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                    attrs: { viewBox: "0 0 127 24", xmlns: "http://www.w3.org/2000/svg", inline: "", "data-src": "@/assets/svgs/logo.svg", role: "presentation", focusable: "false", tabindex: "-1" },
                                                },
                                                [
                                                    r("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                                                        r("path", { attrs: { fill: "#FF4650", d: "M11.725.259h12.513v10.806H11.71v12.642H1V11.08z" } }),
                                                        r("path", {
                                                            attrs: {
                                                                fill: "currentColor",
                                                                d:
                                                                    "M55.95 14.606h9.938V9.463H55.95V5.486h12.996V.343H50.139v23.314h19.147v-5.143H55.95zM78.666.342h-5.81v23.315h17.783v-5.143H78.666zM93.63 23.657h5.81V.342h-5.81zM114.107 18.642c-3.41 0-6.176-2.55-6.176-6.642 0-3.893 2.766-6.642 6.176-6.642 3.411 0 6.177 2.673 6.177 6.642 0 4.091-2.766 6.642-6.177 6.642m0-18.642c-6.568 0-11.892 5.373-11.892 12s5.324 12 11.892 12C120.676 24 126 18.627 126 12s-5.324-12-11.893-12M39.641 10.217c-.589.503-1.473.754-2.65.754h-4.708V5.417h4.912c1.132 0 1.97.211 2.514.634.544.424.816 1.08.816 1.972 0 .96-.295 1.691-.884 2.194m3.483 3.771a7.207 7.207 0 002.719-2.64c.668-1.12 1.002-2.4 1.002-3.84 0-4.81-3.454-7.166-7.928-7.166H26.473V23.657h5.81V15.84h4.408l4.275 7.817h6.253l-5.244-9.155c.399-.14.783-.308 1.15-.514",
                                                            },
                                                        }),
                                                    ]),
                                                ]
                                            ),
                                            e._v("\n        Homepage\n      "),
                                        ]),
                                        e._v(" "),
                                        r("button", { staticClass: "navigation__Toggle", on: { click: e.toggleNavigation } }, [e._v("\n        Menu\n      ")]),
                                        e._v(" "),
                                        r(
                                            "div",
                                            [
                                                r("nav", [
                                                    e.$store.state.menus.footer
                                                        ? r("div", { directives: [{ name: "animate", rawName: "v-animate" }], staticClass: "navigation__MobileTop" }, [
                                                              r(
                                                                  "ul",
                                                                  e._l(e.$store.state.menus.footer, function (t) {
                                                                      return r("li", { key: t.id, staticClass: "title--Light" }, [
                                                                          r(
                                                                              "span",
                                                                              [
                                                                                  t.external
                                                                                      ? [
                                                                                            t.new_tab
                                                                                                ? r("a", { attrs: { href: t.url, target: "_blank" } }, [e._v(" " + e._s(t.title) + " ")])
                                                                                                : r("a", { attrs: { href: t.url } }, [e._v(" " + e._s(t.title) + " ")]),
                                                                                        ]
                                                                                      : r("n-link", { attrs: { to: t.url } }, [e._v(" " + e._s(t.title) + " ")]),
                                                                              ],
                                                                              2
                                                                          ),
                                                                      ]);
                                                                  }),
                                                                  0
                                                              ),
                                                              e._v(" "),
                                                              r("div", { staticClass: "navigation__LanguageSwitcher isMobile", on: { click: e.toggleLanguage } }, [
                                                                  "en" == e.$store.state.lang
                                                                      ? r("span", [
                                                                            e._v("\n                English\n                "),
                                                                            r(
                                                                                "svg",
                                                                                {
                                                                                    directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                                    attrs: {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        viewBox: "0 0 12 8",
                                                                                        inline: "",
                                                                                        "data-src": "@/assets/svgs/icon-dropdown.svg",
                                                                                        role: "presentation",
                                                                                        focusable: "false",
                                                                                        tabindex: "-1",
                                                                                    },
                                                                                },
                                                                                [r("path", { attrs: { fill: "currentColor", "fill-rule": "evenodd", d: "M6.3 8l5.5-8H.8z" } })]
                                                                            ),
                                                                        ])
                                                                      : r("span", [
                                                                            e._v("\n                Deutsch\n                "),
                                                                            r(
                                                                                "svg",
                                                                                {
                                                                                    directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                                    attrs: {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        viewBox: "0 0 12 8",
                                                                                        inline: "",
                                                                                        "data-src": "@/assets/svgs/icon-dropdown.svg",
                                                                                        role: "presentation",
                                                                                        focusable: "false",
                                                                                        tabindex: "-1",
                                                                                    },
                                                                                },
                                                                                [r("path", { attrs: { fill: "currentColor", "fill-rule": "evenodd", d: "M6.3 8l5.5-8H.8z" } })]
                                                                            ),
                                                                        ]),
                                                                  e._v(" "),
                                                                  e.$store.state.currentPage
                                                                      ? r("div", [
                                                                            r("a", { staticClass: "lang", class: { isDisabled: e.isEnglish }, attrs: { href: e.$store.state.currentPage.language_switcher.en } }, [e._v("EN")]),
                                                                            e._v(" "),
                                                                            r("a", { staticClass: "lang", class: { isDisabled: e.isDeutsch }, attrs: { href: e.$store.state.currentPage.language_switcher.de } }, [e._v("DE")]),
                                                                        ])
                                                                      : e._e(),
                                                              ]),
                                                          ])
                                                        : e._e(),
                                                    e._v(" "),
                                                    r("div", { staticClass: "navigation__MobileBottom" }, [
                                                        r(
                                                            "ul",
                                                            e._l(e.$store.state.menus.main, function (t) {
                                                                return r(
                                                                    "li",
                                                                    { key: t.id },
                                                                    [
                                                                        t.external
                                                                            ? [
                                                                                  t.new_tab
                                                                                      ? r("a", { attrs: { href: t.url, target: "_blank" } }, [e._v(" " + e._s(t.title) + " ")])
                                                                                      : r("a", { attrs: { href: t.url } }, [e._v(" " + e._s(t.title) + " ")]),
                                                                              ]
                                                                            : r("n-link", { attrs: { to: t.url } }, [e._v(" " + e._s(t.title) + " ")]),
                                                                    ],
                                                                    2
                                                                );
                                                            }),
                                                            0
                                                        ),
                                                        e._v(" "),
                                                        e._m(0),
                                                    ]),
                                                ]),
                                                e._v(" "),
                                                r("div", { staticClass: "navigation__LanguageSwitcher isDesktop", on: { click: e.toggleLanguage } }, [
                                                    r("span", [
                                                        e._v("\n            " + e._s(e.$store.state.lang) + "\n            "),
                                                        r(
                                                            "svg",
                                                            {
                                                                directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                attrs: {
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    viewBox: "0 0 12 8",
                                                                    inline: "",
                                                                    "data-src": "@/assets/svgs/icon-dropdown.svg",
                                                                    role: "presentation",
                                                                    focusable: "false",
                                                                    tabindex: "-1",
                                                                },
                                                            },
                                                            [r("path", { attrs: { fill: "currentColor", "fill-rule": "evenodd", d: "M6.3 8l5.5-8H.8z" } })]
                                                        ),
                                                    ]),
                                                    e._v(" "),
                                                    e.$store.state.currentPage
                                                        ? r("div", [
                                                              r("a", { staticClass: "lang", class: { isDisabled: e.isEnglish }, attrs: { href: e.$store.state.currentPage.language_switcher.en } }, [e._v("EN")]),
                                                              e._v(" "),
                                                              r("a", { staticClass: "lang", class: { isDisabled: e.isDeutsch }, attrs: { href: e.$store.state.currentPage.language_switcher.de } }, [e._v("DE")]),
                                                          ])
                                                        : e._e(),
                                                ]),
                                                e._v(" "),
                                                r("n-link", { staticClass: "btn--White", attrs: { to: e.$store.getters.link("Join") } }, [
                                                    e._v("\n          " + e._s(e.$t("btnPreregister")) + "\n          "),
                                                    r("span", [
                                                        r(
                                                            "svg",
                                                            {
                                                                directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                attrs: {
                                                                    viewBox: "0 0 15 14",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    inline: "",
                                                                    "data-src": "@/assets/svgs/arrow.svg",
                                                                    role: "presentation",
                                                                    focusable: "false",
                                                                    tabindex: "-1",
                                                                },
                                                            },
                                                            [
                                                                r("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                                    r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                                ]),
                                                            ]
                                                        ),
                                                    ]),
                                                ]),
                                            ],
                                            1
                                        ),
                                    ],
                                    1
                                ),
                            ]),
                        ]);
                    },
                    [
                        function () {
                            var e = this,
                                t = e.$createElement,
                                r = e._self._c || t;
                            return r("div", { staticClass: "navigation__Social" }, [
                                r("a", { attrs: { href: "https://twitter.com/relio_ch" } }, [e._v("Twitter")]),
                                e._v(" "),
                                r("a", { attrs: { href: "https://www.linkedin.com/company/relioch/" } }, [e._v("Linkedin")]),
                            ]);
                        },
                    ],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { Button: r(10).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    name: "CustomCursor",
                    data: () => ({ isActive: !1, cursor: { x: 0, y: 0 }, isReadMore: !1, isDrag: !1, text: void 0 }),
                    mounted() {
                        document.addEventListener("mousemove", this.render),
                            document.addEventListener("scroll", this.handleScroll),
                            document.addEventListener("mouseout", (e) => {
                                null == e.toElement && null == e.relatedTarget && (this.isActive = !1);
                            });
                    },
                    computed: {
                        getStyle() {
                            return { transform: `matrix(1, 0, 0, 1, ${this.cursor.x}, ${this.cursor.y})` };
                        },
                    },
                    methods: {
                        render(e) {
                            if (((this.cursor.x = e.clientX), (this.cursor.y = e.clientY), (this.isActive = e.target.closest(".isCustomCursor")), this.isActive)) {
                                if (e.target.closest(".isNotCustomCursor")) return (this.isActive = void 0), void (this.text = void 0);
                                this.text = this.isActive.getAttribute("data-cursor");
                            } else this.text = void 0;
                        },
                        getOffset(e) {
                            const rect = e.getBoundingClientRect();
                            return { left: rect.left + window.scrollX, top: rect.top + window.scrollY };
                        },
                        handleScroll(e) {
                            this.isActive && document.elementFromPoint(this.cursor.x, this.cursor.y).closest(".isCustomCursor") !== this.isActive && ((this.isActive = !1), (this.text = void 0));
                        },
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r(
                            "div",
                            { staticClass: "customCursor" },
                            [
                                r("transition", { attrs: { name: "fade" } }, [
                                    e.isActive
                                        ? r("span", { staticClass: "customCursor__Block", style: e.getStyle }, [
                                              r("span", { staticClass: "customCursor__Circle", class: { isDrag: "Drag" === e.text } }, [e.text ? r("span", { domProps: { textContent: e._s(e.text) } }) : e._e()]),
                                          ])
                                        : e._e(),
                                ]),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    props: { text: {}, clickOnly: {} },
                    data() {
                        return { isOpened: !1, isClickOnly: void 0 !== this.clickOnly, stylesSet: !1, style: {}, timeout: 0, styleMap: { left: "-8px", right: "-8px", top: "calc(100% + 8px)", bottom: "calc(100% + 8px)" } };
                    },
                    watch: {
                        isOpened() {
                            setTimeout(() => {
                                this.setStyles();
                            }, this.timeout);
                        },
                    },
                    mounted() {
                        document.documentElement.clientWidth < 768 && (this.isClickOnly = !0),
                            window.addEventListener("scroll", () => {
                                this.isOpened && ((this.timeout = 0), (this.isOpened = !1));
                            });
                    },
                    methods: {
                        show(e) {
                            this.isClickOnly && "click" === e && (this.isOpened = !this.isOpened), this.isClickOnly || "hover" !== e || (this.isOpened = !0), (this.timeout = 0);
                        },
                        close(e) {
                            ("click" === e || (!this.isClickOnly && "hover" === e)) && (this.isOpened = !1), (this.timeout = 200);
                        },
                        setStyles() {
                            this.stylesSet = !0;
                            let e = this.checkOverflow(this.$refs.tooltipText);
                            for (let t in e) e[t] ? this.$set(this.style, t, this.styleMap[t]) : this.$set(this.style, t, "auto");
                            document.documentElement.clientWidth > 768
                                ? ("auto" === this.style.top && this.$set(this.style, "bottom", "calc(100% + 8px)"), "auto" === this.style.left && this.$set(this.style, "right", "-8px"))
                                : this.$set(this.style, "top", `${this.getVerticalOffset()}px`);
                        },
                        checkOverflow(e) {
                            let t = e.getBoundingClientRect(),
                                r = {};
                            return (
                                (r.top = t.top < 0),
                                (r.left = t.left < 0),
                                (r.bottom = t.bottom > (window.innerHeight || document.documentElement.clientHeight)),
                                (r.right = t.right > (window.innerWidth || document.documentElement.clientWidth)),
                                (r.any = r.top || r.left || r.bottom || r.right),
                                r
                            );
                        },
                        getVerticalOffset() {
                            let e = this.$refs.tooltipIcon.getBoundingClientRect(),
                                t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                                r = document.documentElement.clientTop || document.body.clientTop || 0;
                            return Math.round(e.top + t - r - window.pageYOffset);
                        },
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r(
                            "div",
                            {
                                directives: [
                                    {
                                        name: "click-outside",
                                        rawName: "v-click-outside",
                                        value: function () {
                                            return e.close("click");
                                        },
                                        expression: "() => close('click')",
                                    },
                                ],
                                class: ["form__FieldTooltip", { isClickOnly: e.isClickOnly }, { isOpened: e.isOpened }, { isArrowOnBottom: "auto" !== e.style.top }],
                                on: {
                                    click: function (t) {
                                        return t.preventDefault(), e.show("click");
                                    },
                                    mouseenter: function (t) {
                                        return t.preventDefault(), e.show("hover");
                                    },
                                    mouseleave: function (t) {
                                        return t.preventDefault(), e.close("hover");
                                    },
                                },
                            },
                            [
                                r("span", { ref: "tooltipIcon", staticClass: "form__FieldTooltipIcon" }, [e._v("i")]),
                                e._v(" "),
                                void 0 !== e.text || e.$slots.default
                                    ? r("div", { ref: "tooltipText", staticClass: "form__FieldTooltipText", style: e.style }, [r("div", { domProps: { innerHTML: e._s(e.text) } }), e._v(" "), e._t("default")], 2)
                                    : e._e(),
                            ]
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    name: "DynamicBlock",
                    props: { data: {} },
                    computed: {
                        cmsComponent() {
                            return async () => {
                                try {
                                    return await r(160)(`./${this.toPascalCase(this.data.type)}`);
                                } catch (e) {
                                    console.dir(e);
                                }
                            };
                        },
                    },
                    methods: {
                        toPascalCase(text) {
                            try {
                                return text
                                    .split("_")
                                    .map((i) => i[0].toUpperCase() + i.slice(1, i.length))
                                    .join("");
                            } catch (e) {
                                return "";
                            }
                        },
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement;
                        return (e._self._c || t)(e.cmsComponent, { tag: "component", attrs: { data: e.data } });
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        ,
        ,
        function (e, t, r) {
            "use strict";
            (function (e) {
                var o = r(27);
                const n = "redis://127.0.0.1:6379/1",
                    l = "relioweb-",
                    m = !0,
                    d = !1,
                    c = !0;
                t.a = ({ req: t }, r) => {
                    r("cacheFetch", ({ key: r, expire: h, disable: _ = d, url: f = n, prefix: x = l, ignoreConnectionErrors: w = c }, v) => {
                        if (_) return v();
                        const y = t && t.headers ? t.headers.host : "";
                        r = m ? r + "-" + y : r;
                        return new o.a(f, !0, x, e && !1, w).fetch(r, h, v, !0);
                    }),
                        r("cacheWrite", ({ key: r, expire: h, disable: _ = d, url: f = n, prefix: x = l, ignoreConnectionErrors: w = c }, v) => {
                            if (_) return new Promise((e) => e(!1));
                            const y = t && t.headers ? t.headers.host : "";
                            r = m ? r + "-" + y : r;
                            const k = new o.a(f, !1, x, e && !1, w);
                            try {
                                return k.write(r, v, h);
                            } catch (e) {
                                return console.error(e), new Promise((e) => e(!1));
                            } finally {
                                k.disconnect();
                            }
                        }),
                        r("cacheRead", ({ key: r, disable: h = d, url: _ = n, prefix: f = l, ignoreConnectionErrors: x = c }) => {
                            if (h) return new Promise((e) => e(null));
                            const w = t && t.headers ? t.headers.host : "";
                            r = m ? r + "-" + w : r;
                            const v = new o.a(_, !1, f, e && !1, x);
                            try {
                                return v.read(r);
                            } catch (e) {
                                return console.error(e), new Promise((e) => e(null));
                            } finally {
                                v.disconnect();
                            }
                        });
                };
            }.call(this, r(5)));
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, r) {
            "use strict";
            var o = r(1),
                n = r(2);
            const l = window.__NUXT__;
            function m() {
                if (!this._hydrated) return this.$fetch();
            }
            function d() {
                if (!((e = this).$vnode && e.$vnode.elm && e.$vnode.elm.dataset && e.$vnode.elm.dataset.fetchKey)) return;
                var e;
                (this._hydrated = !0), (this._fetchKey = this.$vnode.elm.dataset.fetchKey);
                const data = l.fetch[this._fetchKey];
                if (data && data._error) this.$fetchState.error = data._error;
                else for (const e in data) o.default.set(this.$data, e, data[e]);
            }
            function c() {
                return (
                    this._fetchPromise ||
                        (this._fetchPromise = h.call(this).then(() => {
                            delete this._fetchPromise;
                        })),
                    this._fetchPromise
                );
            }
            async function h() {
                this.$nuxt.nbFetching++, (this.$fetchState.pending = !0), (this.$fetchState.error = null), (this._hydrated = !1);
                let e = null;
                const t = Date.now();
                try {
                    await this.$options.fetch.call(this);
                } catch (t) {
                    0, (e = Object(n.p)(t));
                }
                const r = this._fetchDelay - (Date.now() - t);
                r > 0 && (await new Promise((e) => setTimeout(e, r))), (this.$fetchState.error = e), (this.$fetchState.pending = !1), (this.$fetchState.timestamp = Date.now()), this.$nextTick(() => this.$nuxt.nbFetching--);
            }
            t.a = {
                beforeCreate() {
                    Object(n.l)(this) &&
                        ((this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200),
                        o.default.util.defineReactive(this, "$fetchState", { pending: !1, error: null, timestamp: Date.now() }),
                        (this.$fetch = c.bind(this)),
                        Object(n.a)(this, "created", d),
                        Object(n.a)(this, "beforeMount", m));
                },
            };
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    data: () => ({ isLoading: !1 }),
                    methods: {
                        start() {
                            this.isLoading = !0;
                        },
                        finish() {
                            this.isLoading = !1;
                        },
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement;
                        return (e._self._c || t)("div", { staticClass: "loading", class: { isLoading: e.isLoading } }, [e._v("\n  " + e._s(e.isLoading ? "Loading..." : "Loaded") + "\n")]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        ,
        ,
        ,
        ,
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    mixins: [r(11).a],
                    props: { value: {}, placeholder: {} },
                    data: () => ({ isFocused: !1 }),
                    computed: {
                        inputValue: {
                            get() {
                                return this.value;
                            },
                            set(e) {
                                this.$emit("input", e);
                            },
                        },
                        hasValue() {
                            return this.value.toString().length > 0 || "" !== this.value.toString();
                        },
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r(
                            "div",
                            { class: ["form__Field", "textareaField", { isFocused: e.isFocused }, { hasValue: e.hasValue }, { isDisabled: e.isDisabled }, { isError: void 0 !== e.error }, { isInline: void 0 !== e.inline }] },
                            [
                                r("FormLabel", e._b({}, "FormLabel", e.formLabelProps, !1), [e._t("tooltip")], 2),
                                e._v(" "),
                                r("div", { staticClass: "textareaField__Wrapper" }, [
                                    r("textarea", {
                                        directives: [{ name: "model", rawName: "v-model", value: e.inputValue, expression: "inputValue" }],
                                        attrs: { tabindex: e.isDisabled ? -1 : 0, name: e.name, id: e._uid, required: e.isRequired, disabled: e.isDisabled, placeholder: e.placeholder },
                                        domProps: { value: e.inputValue },
                                        on: {
                                            focus: function (t) {
                                                e.isFocused = !0;
                                            },
                                            blur: function (t) {
                                                e.isFocused = !1;
                                            },
                                            input: function (t) {
                                                t.target.composing || (e.inputValue = t.target.value);
                                            },
                                        },
                                    }),
                                ]),
                                e._v(" "),
                                r("FormError", { attrs: { error: e.error, className: "textareaField__Error" } }),
                                e._v(" "),
                                r("FormError", { attrs: { error: e.validationErrors, className: "textareaField__Error" } }),
                                e._v(" "),
                                e.info ? r("span", { staticClass: "textareaField__Info form__Info", domProps: { textContent: e._s(e.info) } }) : e._e(),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { FormLabel: r(16).default, FormError: r(15).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    props: {
                        value: {},
                        placeholder: {},
                        multiple: {},
                        accept: {},
                        browseText: { default: "Browse" },
                        empty: { default: "No items selected" },
                        filesAttached: { default: "Files attached" },
                        fileType: { default: "Accepted multiple file types: PDF, DOC, JPG" },
                        fileSize: { default: "Maximum file size: 10MB" },
                        showFileTitle: { default: !0 },
                    },
                    mixins: [r(11).a],
                    data: () => ({ isFocused: !1 }),
                    computed: {
                        inputValue: {
                            get() {
                                return this.value;
                            },
                            set(e) {
                                this.$emit("input", e);
                            },
                        },
                        hasValue() {
                            return ![null, void 0].includes(this.inputValue) && this.inputValue.length > 0;
                        },
                        text() {
                            return this.hasValue ? this.inputValue.map((e) => e.name).join(", ") : this.placeholder || this.empty;
                        },
                    },
                    methods: {
                        changeInputValue(e) {
                            this.inputValue = [...e.target.files];
                        },
                        deleteFile(i) {
                            this.inputValue.splice(i, 1), 0 === this.inputValue.length && (this.$refs.fileInput.value = "");
                        },
                        keydown(e) {
                            [0, 13, 32].includes(e.keyCode) && !1 === this.disabled && (e.preventDefault(), this.$el.querySelector('[type="file"]').click());
                        },
                        clickOnEmptyBox(e) {
                            this.hasValue || this.$el.querySelector('[type="file"]').click();
                        },
                        toMegaBytes: (e) => (e /= 1048576).toFixed(2),
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("div", { class: ["form__Field", "fileField", { isFocused: e.isFocused }, { hasValue: e.hasValue > 0 }, { isError: void 0 !== e.error }, { isDisabled: e.isDisabled }, { isInline: void 0 !== e.inline }] }, [
                            r(
                                "div",
                                { staticClass: "fileField__InputWrapper" },
                                [
                                    r(
                                        "FormLabel",
                                        e._b(
                                            {
                                                scopedSlots: e._u(
                                                    [
                                                        {
                                                            key: "label",
                                                            fn: function () {
                                                                return [e._t("label")];
                                                            },
                                                            proxy: !0,
                                                        },
                                                    ],
                                                    null,
                                                    !0
                                                ),
                                            },
                                            "FormLabel",
                                            e.formLabelProps,
                                            !1
                                        ),
                                        [e._v(" "), e._t("tooltip")],
                                        2
                                    ),
                                    e._v(" "),
                                    r("div", { staticClass: "fileField__Wrapper" }, [
                                        r("label", { staticClass: "fileField__Label", attrs: { for: `file-field-${e._uid}`, tabindex: e.isDisabled ? -1 : 0 }, on: { keydown: e.keydown } }, [e._t("icon")], 2),
                                        e._v(" "),
                                        e.hasValue
                                            ? e._e()
                                            : r("div", { staticClass: "fileField__PrependText" }, [
                                                  e.$slots.prepend ? r("div", { staticClass: "fileField__Prepend" }, [e._t("prepend")], 2) : e._e(),
                                                  e._v(" "),
                                                  e.showFileTitle ? r("span", { staticClass: "fileField__Text", domProps: { textContent: e._s(e.text) } }) : e._e(),
                                                  e._v(" "),
                                                  r("p", { domProps: { textContent: e._s(e.fileType) } }),
                                                  e._v(" "),
                                                  r("p", { domProps: { textContent: e._s(e.fileSize) } }),
                                              ]),
                                        e._v(" "),
                                        r("div", { staticClass: "formField__Files" }, [
                                            e.hasValue
                                                ? r(
                                                      "div",
                                                      [
                                                          r("p", { domProps: { textContent: e._s(e.filesAttached) } }),
                                                          e._v(" "),
                                                          e._l(e.inputValue, function (t, i) {
                                                              return r("div", { key: "file" + i, staticClass: "formField__File" }, [
                                                                  r("div", { staticClass: "formField__FileName" }, [r("span", [e._v(e._s(t.name))]), e._v(" "), r("span", [e._v("(" + e._s(e.toMegaBytes(t.size)) + " MB)")])]),
                                                                  e._v(" "),
                                                                  r(
                                                                      "button",
                                                                      {
                                                                          on: {
                                                                              click: function (t) {
                                                                                  return t.preventDefault(), e.deleteFile(i);
                                                                              },
                                                                          },
                                                                      },
                                                                      [r("span", [e._v("X")])]
                                                                  ),
                                                              ]);
                                                          }),
                                                      ],
                                                      2
                                                  )
                                                : e._e(),
                                        ]),
                                        e._v(" "),
                                        r("input", {
                                            ref: "fileInput",
                                            attrs: {
                                                name: e.name,
                                                type: "file",
                                                id: `file-field-${e._uid}`,
                                                required: e.isRequired,
                                                disabled: e.isDisabled,
                                                multiple: e.multiple,
                                                accept: e.accept,
                                                placeholder: e.placeholder,
                                                tabindex: "-1",
                                            },
                                            on: {
                                                focus: function (t) {
                                                    e.isFocused = !0;
                                                },
                                                blur: function (t) {
                                                    e.isFocused = !1;
                                                },
                                                input: e.changeInputValue,
                                            },
                                        }),
                                    ]),
                                    e._v(" "),
                                    r("FormError", { attrs: { error: e.error, className: "fileField__Error" } }),
                                    e._v(" "),
                                    r("FormError", { attrs: { error: e.validationErrors, className: "fileField__Error" } }),
                                    e._v(" "),
                                    e.info ? r("span", { staticClass: "fileField__Info form__Info", domProps: { textContent: e._s(e.info) } }) : e._e(),
                                ],
                                1
                            ),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { FormLabel: r(16).default, Button: r(10).default, FormError: r(15).default });
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, r) {
            r(96), (e.exports = r(97));
        },
        ,
        function (e, t, r) {
            "use strict";
            r.r(t),
                function (e) {
                    var t = r(1),
                        o = r(58),
                        n = r(21),
                        l = r(2),
                        m = r(8),
                        d = r(63),
                        c = r(28);
                    t.default.__nuxt__fetch__mixin__ || (t.default.mixin(d.a), (t.default.__nuxt__fetch__mixin__ = !0)), t.default.component(c.a.name, c.a), t.default.component("NLink", c.a), e.fetch || (e.fetch = o.a);
                    let h,
                        _,
                        f,
                        x = [];
                    const w = window.__NUXT__ || {},
                        v = w.config || {};
                    v._app && (r.p = Object(l.v)(v._app.cdnURL, v._app.assetsPath)), Object.assign(t.default.config, { silent: !0, performance: !1 });
                    const y = t.default.config.errorHandler || console.error;
                    function k(e, t, r) {
                        const o = (component) => {
                                const e =
                                    (function (component, e, ...t) {
                                        if (!component || !component.options || !component.options[e]) return {};
                                        const option = component.options[e];
                                        return "function" == typeof option ? option(...t) : option;
                                    })(component, "transition", t, r) || {};
                                return "string" == typeof e ? { name: e } : e;
                            },
                            n = r ? Object(l.g)(r) : [],
                            m = Math.max(e.length, n.length),
                            d = [];
                        for (let i = 0; i < m; i++) {
                            const t = Object.assign({}, o(e[i])),
                                r = Object.assign({}, o(n[i]));
                            Object.keys(t)
                                .filter((e) => void 0 !== t[e] && !e.toLowerCase().includes("leave"))
                                .forEach((e) => {
                                    r[e] = t[e];
                                }),
                                d.push(r);
                        }
                        return d;
                    }
                    async function F(e, t, r) {
                        (this._routeChanged = Boolean(h.nuxt.err) || t.name !== e.name),
                            (this._paramChanged = !this._routeChanged && t.path !== e.path),
                            (this._queryChanged = !this._paramChanged && t.fullPath !== e.fullPath),
                            (this._diffQuery = this._queryChanged ? Object(l.i)(e.query, t.query) : []),
                            (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                        try {
                            if (this._queryChanged) {
                                const r = await Object(l.r)(e, (e, t) => ({ Component: e, instance: t }));
                                r.some(({ Component: r, instance: o }) => {
                                    const n = r.options.watchQuery;
                                    return !0 === n || (Array.isArray(n) ? n.some((e) => this._diffQuery[e]) : "function" == typeof n && n.apply(o, [e.query, t.query]));
                                }) &&
                                    this.$loading.start &&
                                    !this.$loading.manual &&
                                    this.$loading.start();
                            }
                            r();
                        } catch (o) {
                            const n = o || {},
                                l = n.statusCode || n.status || (n.response && n.response.status) || 500,
                                m = n.message || "";
                            if (/^Loading( CSS)? chunk (\d)+ failed\./.test(m)) return void window.location.reload(!0);
                            this.error({ statusCode: l, message: m }), this.$nuxt.$emit("routeChanged", e, t, n), r();
                        }
                    }
                    function T(e, t, r) {
                        let o = ["page", "nuxti18n"],
                            m = !1;
                        if (
                            (void 0 !== r &&
                                ((o = []),
                                (r = Object(l.s)(r)).options.middleware && (o = o.concat(r.options.middleware)),
                                e.forEach((e) => {
                                    e.options.middleware && (o = o.concat(e.options.middleware));
                                })),
                            (o = o.map((e) => ("function" == typeof e ? e : ("function" != typeof n.a[e] && ((m = !0), this.error({ statusCode: 500, message: "Unknown middleware " + e })), n.a[e])))),
                            !m)
                        )
                            return Object(l.o)(o, t);
                    }
                    async function C(e, t, r) {
                        if (!1 === this._routeChanged && !1 === this._paramChanged && !1 === this._queryChanged) return r();
                        let o = !1;
                        if (e === t) (x = []), (o = !0);
                        else {
                            const e = [];
                            x = Object(l.g)(t, e).map((r, i) => Object(l.c)(t.matched[e[i]].path)(t.params));
                        }
                        let n = !1;
                        await Object(l.t)(h, {
                            route: e,
                            from: t,
                            next: ((path) => {
                                t.path === path.path && this.$loading.finish && this.$loading.finish(), t.path !== path.path && this.$loading.pause && this.$loading.pause(), n || ((n = !0), r(path));
                            }).bind(this),
                        }),
                            (this._dateLastError = h.nuxt.dateErr),
                            (this._hadError = Boolean(h.nuxt.err));
                        const d = [],
                            c = Object(l.g)(e, d);
                        if (!c.length) {
                            if ((await T.call(this, c, h.context), n)) return;
                            const e = (m.a.options || m.a).layout,
                                t = await this.loadLayout("function" == typeof e ? e.call(m.a, h.context) : e);
                            if ((await T.call(this, c, h.context, t), n)) return;
                            return h.context.error({ statusCode: 404, message: "This page could not be found" }), r();
                        }
                        c.forEach((e) => {
                            e._Ctor && e._Ctor.options && ((e.options.asyncData = e._Ctor.options.asyncData), (e.options.fetch = e._Ctor.options.fetch));
                        }),
                            this.setTransitions(k(c, e, t));
                        try {
                            if ((await T.call(this, c, h.context), n)) return;
                            if (h.context._errored) return r();
                            let o = c[0].options.layout;
                            if (("function" == typeof o && (o = o(h.context)), (o = await this.loadLayout(o)), await T.call(this, c, h.context, o), n)) return;
                            if (h.context._errored) return r();
                            let m,
                                _ = !0;
                            try {
                                for (const e of c) if ("function" == typeof e.options.validate && ((_ = await e.options.validate(h.context)), !_)) break;
                            } catch (e) {
                                return this.error({ statusCode: e.statusCode || "500", message: e.message }), r();
                            }
                            if (!_) return this.error({ statusCode: 404, message: "This page could not be found" }), r();
                            await Promise.all(
                                c.map(async (r, i) => {
                                    (r._path = Object(l.c)(e.matched[d[i]].path)(e.params)), (r._dataRefresh = !1);
                                    const o = r._path !== x[i];
                                    if (this._routeChanged && o) r._dataRefresh = !0;
                                    else if (this._paramChanged && o) {
                                        const e = r.options.watchParam;
                                        r._dataRefresh = !1 !== e;
                                    } else if (this._queryChanged) {
                                        const o = r.options.watchQuery;
                                        !0 === o
                                            ? (r._dataRefresh = !0)
                                            : Array.isArray(o)
                                            ? (r._dataRefresh = o.some((e) => this._diffQuery[e]))
                                            : "function" == typeof o && (m || (m = Object(l.h)(e)), (r._dataRefresh = o.apply(m[i], [e.query, t.query])));
                                    }
                                    if (!this._hadError && this._isMounted && !r._dataRefresh) return;
                                    const n = [],
                                        c = r.options.asyncData && "function" == typeof r.options.asyncData,
                                        _ = Boolean(r.options.fetch) && r.options.fetch.length,
                                        f = c && _ ? 30 : 45;
                                    if (c) {
                                        const e = Object(l.q)(r.options.asyncData, h.context);
                                        e.then((e) => {
                                            Object(l.b)(r, e), this.$loading.increase && this.$loading.increase(f);
                                        }),
                                            n.push(e);
                                    }
                                    if (((this.$loading.manual = !1 === r.options.loading), _)) {
                                        let p = r.options.fetch(h.context);
                                        (p && (p instanceof Promise || "function" == typeof p.then)) || (p = Promise.resolve(p)),
                                            p.then((e) => {
                                                this.$loading.increase && this.$loading.increase(f);
                                            }),
                                            n.push(p);
                                    }
                                    return Promise.all(n);
                                })
                            ),
                                n || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), r());
                        } catch (o) {
                            const n = o || {};
                            if ("ERR_REDIRECT" === n.message) return this.$nuxt.$emit("routeChanged", e, t, n);
                            (x = []), Object(l.k)(n);
                            let d = (m.a.options || m.a).layout;
                            "function" == typeof d && (d = d(h.context)), await this.loadLayout(d), this.error(n), this.$nuxt.$emit("routeChanged", e, t, n), r();
                        }
                    }
                    function L(e, r) {
                        Object(l.d)(e, (e, r, o, n) => ("object" != typeof e || e.options || (((e = t.default.extend(e))._Ctor = e), (o.components[n] = e)), e));
                    }
                    function S(e) {
                        let t = Boolean(this.$options.nuxt.err);
                        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (t = !1);
                        let r = t ? (m.a.options || m.a).layout : e.matched[0].components.default.options.layout;
                        "function" == typeof r && (r = r(h.context)), this.setLayout(r);
                    }
                    function I(e) {
                        e._hadError && e._dateLastError === e.$options.nuxt.dateErr && e.error();
                    }
                    function D(e, r) {
                        if (!1 === this._routeChanged && !1 === this._paramChanged && !1 === this._queryChanged) return;
                        const o = Object(l.h)(e),
                            n = Object(l.g)(e);
                        let m = !1;
                        t.default.nextTick(() => {
                            o.forEach((e, i) => {
                                if (e && !e._isDestroyed && e.constructor._dataRefresh && n[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                    const r = e.constructor.options.data.call(e);
                                    for (const o in r) t.default.set(e.$data, o, r[o]);
                                    m = !0;
                                }
                            }),
                                m &&
                                    window.$nuxt.$nextTick(() => {
                                        window.$nuxt.$emit("triggerScroll");
                                    }),
                                I(this);
                        });
                    }
                    Object(m.b)(null, w.config)
                        .then(async function (e) {
                            (h = e.app), (_ = e.router), (f = e.store);
                            const r = new t.default(h),
                                o = w.layout || "default";
                            await r.loadLayout(o), r.setLayout(o);
                            const n = () => {
                                    r.$mount("#__nuxt"),
                                        _.afterEach(L),
                                        _.afterEach(S.bind(r)),
                                        _.afterEach(D.bind(r)),
                                        t.default.nextTick(() => {
                                            !(function (e) {
                                                window.onNuxtReadyCbs.forEach((t) => {
                                                    "function" == typeof t && t(e);
                                                }),
                                                    "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e);
                                                _.afterEach((r, o) => {
                                                    t.default.nextTick(() => e.$nuxt.$emit("routeChanged", r, o));
                                                });
                                            })(r);
                                        });
                                },
                                m = await Promise.all(
                                    ((d = h.context.route),
                                    Object(l.d)(d, async (e, t, r, o, n) => {
                                        "function" != typeof e || e.options || (e = await e());
                                        const m = (function (e, t) {
                                            return w.serverRendered && t && Object(l.b)(e, t), (e._Ctor = e), e;
                                        })(Object(l.s)(e), w.data ? w.data[n] : null);
                                        return (r.components[o] = m), m;
                                    }))
                                );
                            var d;
                            (r.setTransitions = r.$options.nuxt.setTransitions.bind(r)), m.length && (r.setTransitions(k(m, _.currentRoute)), (x = _.currentRoute.matched.map((e) => Object(l.c)(e.path)(_.currentRoute.params))));
                            (r.$loading = {}), w.error && r.error(w.error);
                            if ((_.beforeEach(F.bind(r)), _.beforeEach(C.bind(r)), w.serverRendered && Object(l.n)(w.routePath, r.context.route.path))) return n();
                            const c = () => {
                                L(_.currentRoute, _.currentRoute), S.call(r, _.currentRoute), I(r), n();
                            };
                            await new Promise((e) => setTimeout(e, 0)),
                                C.call(r, _.currentRoute, _.currentRoute, (path) => {
                                    if (!path) return void c();
                                    const e = _.afterEach((t, r) => {
                                        e(), c();
                                    });
                                    _.push(path, void 0, (e) => {
                                        if (e && e.name !== 'NavigationDuplicated') {
                                            y(e);
                                        }
                                    });
                                });
                        })
                        .catch(y);
                }.call(this, r(4));
        },
        function (e, t, r) {
            "use strict";
            r.r(t),
                (t.default = function ({ store: e, redirect: t, route: r }) {
                    if (!e.state.isJoined) return t(e.getters.link("Join"));
                });
        },
        function (e, t, r) {
            "use strict";
            r.r(t),
                (t.default = function ({ store: e, route: t, redirect: r, isServer: o, $cookies: n }) {
                    if ((t.path.includes("healthcheck") || "/" === t.path[t.path.length - 1] || r(`${t.path.replace(/\/+/g, "/")}/`, t.query), document.documentElement.classList.remove("isNavigationOpen"), !o))
                        return new Promise((e) => {
                            setTimeout(e, 350);
                        });
                });
        },
        ,
        ,
        function (e, t, r) {
            var content = r(103);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[e.i, content, ""]]), content.locals && (e.exports = content.locals);
            (0, r(46).default)("56ae6b69", content, !0, { sourceMap: !1 });
        },
        function (e, t, r) {
            var o = r(45)(!1);
            o.push([
                e.i,
                '@font-face{font-family:"Aeonik";src:url("./resources/fonts/aeonik-regular.woff2") format("woff2"),url("./resources/fonts/aeonik-regular.woff") format("woff");font-weight:400;font-style:normal;font-display:swap}font-face{font-family:"Aeonik";src:url("/.resources/fonts/aeonik-medium.woff2") format("woff2"),url("/.resources/fonts/aeonik-medium.woff") format("woff");font-weight:500;font-style:normal;font-display:swap}html{font-size:.0625vw}@media(max-width: 900px){html{font-size:0.1111111111vmin}}@media(max-width: 518px){html{font-size:0.1930501931vw}}@media(min-width: 1441px){html{font-size:1px}}body{font-size:16rem}@media(min-width: 901px){body{font-size:18rem}}.container,.container--Mid{margin:0 auto;max-width:1440rem;padding:0 50rem}@media(max-width: 900px){.container,.container--Mid{padding:0 30rem}}.container--Mid{max-width:1250rem}.title,.title--Dark,.title--Light{font-size:160rem;line-height:152rem;letter-spacing:-1.6rem;text-transform:uppercase;font-weight:normal}@media(max-width: 900px){.title,.title--Dark,.title--Light{font-size:90rem;line-height:82rem;letter-spacing:-1.2rem}}@media(max-width: 518px){.title,.title--Dark,.title--Light{font-size:45rem;line-height:45rem}}@media(max-width: 518px){.title.isDesktop,.isDesktop.title--Dark,.isDesktop.title--Light{display:none}}.title.isMobile,.isMobile.title--Dark,.isMobile.title--Light{display:none}@media(max-width: 518px){.title.isMobile,.isMobile.title--Dark,.isMobile.title--Light{display:block}}.title span,.title--Dark span,.title--Light span{display:block;padding:0 0 17rem 25rem;border-bottom:1px solid rgba(20,10,35,.15)}@media(max-width: 518px){.title span,.title--Dark span,.title--Light span{padding:0 0 10rem}}.title span+span,.title--Dark span+span,.title--Light span+span{margin-top:15rem}@media(max-width: 518px){.title span+span,.title--Dark span+span,.title--Light span+span{margin-top:5rem}}.title b,.title--Dark b,.title--Light b{color:#ff4650;font-weight:inherit}.title--Dark span{border-color:rgba(255,255,255,.2)}.btn,.btn--Red,.btn--Black,.btn--White{position:relative;display:flex;justify-content:center;align-items:center;font-size:12rem;font-weight:600;line-height:14rem;letter-spacing:1.56rem;padding-left:25rem;letter-spacing:2rem;overflow:hidden;border-radius:14rem;text-transform:uppercase;color:#140a23;transition:background-color 200ms,color 200ms;cursor:pointer;width:fit-content}.btn span,.btn--Red span,.btn--Black span,.btn--White span{position:relative;display:block;height:100%;padding:18rem;margin-left:15rem;display:flex;justify-content:center;align-items:center}@media(max-width: 518px){.btn span,.btn--Red span,.btn--Black span,.btn--White span{padding:20rem}}.btn span:before,.btn--Red span:before,.btn--Black span:before,.btn--White span:before{position:absolute;content:"";top:50%;left:50%;transform:translate(-50%, -50%) scale(0.3124, 0.3124);width:32rem;height:32rem;border-radius:50%;background-color:#ff4650;transform-origin:center;transition:transform 300ms}.btn svg,.btn--Red svg,.btn--Black svg,.btn--White svg{width:15rem;height:14rem;transform:scale(0, 0);transition:transform 400ms}.btn:hover span:before,.btn--Red:hover span:before,.btn--Black:hover span:before,.btn--White:hover span:before{transform:translate(-50%, -50%) scale(1, 1)}.btn:hover svg,.btn--Red:hover svg,.btn--Black:hover svg,.btn--White:hover svg{transform:scale(1, 1)}.btn--White{background-color:#fff;border:1rem solid #e9e7e9}.btn--White span{border-left:1rem solid #e9e7e9}.btn--White:hover{background-color:#140a23;color:#fff}.btn--Black{background-color:#140a23;border:1rem solid #545056;color:#fff}.btn--Black span{border-left:1rem solid #545056}.btn--Black:hover{background-color:#fff;color:#140a23}.btn--Black:hover svg{color:#fff}.btn--Red{background-color:#ff4650;color:#fff;border-color:#ff4650}.btn--Red span{border-left:1px solid #ffb4b9}.btn--Red span:before{background-color:#140a23}.category,.testimonials__TextWrap .bullet{position:relative;display:flex;justify-content:space-between;align-items:flex-end;font-size:13rem;letter-spacing:3rem;text-transform:uppercase;font-weight:600;padding:0 0 25rem 25rem;margin-bottom:85rem}.category:before,.testimonials__TextWrap .bullet:before{position:absolute;content:"";left:0;bottom:28rem;min-width:10rem;max-width:10rem;min-height:10rem;max-height:10rem;border-radius:50%;background-color:#ff4650}.category:after,.testimonials__TextWrap .bullet:after{position:absolute;content:"";left:0;bottom:0;width:100%;height:1px;background-color:#e9e7e9}@keyframes rotate-animation{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.fade-enter-active,.fade-leave-active{transition:opacity 200ms}.fade-enter,.fade-leave-to{opacity:0}.animate.isRight,.animate.isTop,.animate.isBottom,.animate.isLeft{transition:500ms transform 100ms,600ms opacity 300ms}.animate.isAnimated{opacity:0}.animate.isAnimated.isLeft{transform:translateX(-50rem)}.animate.isAnimated.isRight{transform:translateX(50rem)}.animate.isAnimated.isTop{transform:translateY(-50rem)}.animate.isAnimated.isBottom{transform:translateY(50rem)}body.isBlack .home{background-color:#140a23}body.isBlack .home__ScrollProgress{opacity:1}body.isBlack .home__Hero,body.isBlack .home__Business,body.isBlack .home__Scroll,body.isBlack .home__ScrollProgress,body.isBlack .navigation__Logo svg,body.isBlack .card__Small{color:#fff}body.isBlack .title span,body.isBlack .title--Light span,body.isBlack .title--Dark span{border-bottom:solid 1rem rgba(255,255,255,.2)}body.isBlack .navigation:not(.isScrolled) .lang,body.isBlack .navigation:not(.isScrolled) li a{color:#fff}body.isBlack .card__SmallItems .card__SmallItem:before{transition:border-color 600ms;border-color:#140a23 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.home{background-color:#fff;transition:background-color 600ms}.btn--View{position:relative;margin-top:40rem;font-size:16rem;line-height:12rem;padding-left:40rem;text-decoration:underline;text-underline-offset:10rem;color:#fff;transition:color 200ms}.btn--View:hover{color:#ff4650}.btn--View:before{position:absolute;content:"";top:50%;left:0;display:block;width:10rem;height:10rem;transform:translateY(-50%);border-radius:50%;border:4rem solid #e9e7e9}@keyframes popin{from{opacity:0}to{opacity:1}}#onetrust-banner-sdk.otFloatingRoundedIcon{left:50% !important;transform:translateX(-50%) !important}#onetrust-button-group{position:relative !important;display:flex !important;flex-direction:row !important;align-items:center;gap:15rem !important}@media(max-width: 518px){#onetrust-button-group{flex-direction:column !important;gap:5rem !important;justify-content:center !important}}input,textarea{font-family:"Aeonik",sans-serif}.ot-floating-button__front{background-image:url("/.resources/images/cookie.svg") !important}.ot-sdk-container>.ot-sdk-row{display:flex !important;flex-direction:column;align-items:center;justify-content:center;padding:15rem 0 0 !important}.ot-sdk-container #onetrust-group-container{position:relative !important;top:unset !important;transform:unset !important;left:unset !important;width:initial !important}.ot-sdk-container #onetrust-button-group-parent{margin-left:unset !important;left:unset !important;float:unset !important;position:relative !important;width:initial !important}.ot-sdk-container #onetrust-button-group{padding-top:0 !important}.ot-sdk-container #onetrust-button-group>*{position:relative !important}.ot-sdk-container #onetrust-accept-btn-container button{background-color:#ff4650 !important;border-color:#ff4650 !important}.ot-sdk-container #onetrust-reject-btn-container button{background-color:#140a23 !important;border-color:#140a23 !important;color:#fff !important}.ot-sdk-container #onetrust-pc-btn-container button{background-color:#140a23 !important;border-color:#140a23 !important;color:#fff !important}.ot-sdk-container #onetrust-accept-btn-container,.ot-sdk-container #onetrust-reject-btn-container,.ot-sdk-container #onetrust-pc-btn-container{width:fit-content !important;min-width:170rem !important;margin:0 !important}#onetrust-policy-text{max-width:calc(100% - 20rem) !important;color:#140a23 !important;margin-bottom:15rem !important}#onetrust-banner-sdk #onetrust-accept-btn-container{margin-top:0 !important}#onetrust-close-btn-container{margin:0 !important}#ot-sdk-btn-floating .ot-floating-button__front.custom-persistent-icon{display:none !important}#ot-sdk-btn-floating{display:none !important}#onetrust-banner-sdk .banner-content{padding:0 !important}#onetrust-cookie-btn{display:none !important}.page-enter-active,.page-leave-active{transition:0s}@media(min-width: 901px){.page.about .navigation__Inner ul a{color:#fff}.page.about .lang:before{border-color:#fff}.page.about .lang:after{background-color:#fff}.page.about .isScrolled .navigation__Inner ul a{color:#140a23}}.about__Hero{background-color:#140a23;color:#fff;padding:130rem 0 100rem}.about__HeroText{margin-top:51rem}@media(min-width: 901px){.about__HeroText{min-width:440rem;max-width:440rem;margin-top:0}}.about__HeroTeam{display:flex;margin-top:100rem;gap:50rem}@media(max-width: 900px){.about__HeroTeam{flex-direction:column;margin-top:50rem}}.about__HeroTeam img{min-width:742rem;max-width:742rem;height:auto;object-fit:cover}@media(max-width: 1920px){.about__HeroTeam img{margin-left:calc(-50vw + 670rem);min-width:50vw;max-width:50vw}}@media(max-width: 900px){.about__HeroTeam img{margin-left:-30rem;min-width:calc(100% + 60rem);max-width:calc(100% + 60rem);min-height:unset;max-height:unset}}.about__HeroTeam img+span{display:block;margin:30rem 0 0 100rem;font-size:11rem;letter-spacing:.99rem;font-weight:500;opacity:.5}@media(max-width: 900px){.about__HeroTeam img+span{font-size:14rem;margin-left:0}}.about__HeroTeam .category,.about__HeroTeam .testimonials__TextWrap .bullet,.testimonials__TextWrap .about__HeroTeam .bullet{margin-bottom:65rem;padding-bottom:21rem}@media(max-width: 900px){.about__HeroTeam .category,.about__HeroTeam .testimonials__TextWrap .bullet,.testimonials__TextWrap .about__HeroTeam .bullet{margin-bottom:40rem}}.about__HeroTeam .category:before,.about__HeroTeam .testimonials__TextWrap .bullet:before,.testimonials__TextWrap .about__HeroTeam .bullet:before{top:4rem}.about__HeroTeam .category:after,.about__HeroTeam .testimonials__TextWrap .bullet:after,.testimonials__TextWrap .about__HeroTeam .bullet:after{background-color:rgba(255,255,255,.2);height:1rem}.about__HeroTeam p{font-size:28rem;line-height:35rem;margin-bottom:25rem}.about__HeroSolution{display:flex;flex-direction:column;padding-bottom:100rem;background-color:#140a23;color:#fff}.about__HeroSolution h2{font-size:64rem;line-height:61rem;letter-spacing:.64rem;font-weight:400;margin:0 120rem 0 100rem}@media(max-width: 900px){.about__HeroSolution h2{margin:0;font-size:48rem;line-height:44rem;max-width:unset}}.about__HeroSolution h2 b{color:#ff4650;font-weight:inherit}.about__HeroSolution .btn--Black{width:fit-content;align-self:center;margin:100rem auto 0}@media(max-width: 900px){.about__HeroSolution .btn--Black{margin:100rem auto 0}}.about__HeroSolution .btn--Black:hover{background-color:#fff;border:1rem solid #e9e7e9;color:#140a23}.about__HeroSolution .btn--Black:hover svg{color:#fff}.about__HeroSolution .btn--Black:hover span{border-left:1rem solid #e9e7e9}.about__LogoSlider{background-color:#f4f4f4;padding:105rem 0}@media(max-width: 900px){.about__LogoSlider{padding:60rem 0 100rem}}@media(max-width: 900px){.about__LogoSlider .container,.about__LogoSlider .container--Mid{display:flex;flex-direction:column}}@media(min-width: 900px){.about__LogoSlider.isFullWidth .about__LogoSliderWrap{scrollbar-width:none;justify-content:center}.about__LogoSlider.isFullWidth .about__LogoSliderWrap::-webkit-scrollbar{display:none}}.about__LogoSliderHeading{display:flex;align-items:flex-end;justify-content:space-between;padding-right:100rem;margin-left:100rem}@media(max-width: 900px){.about__LogoSliderHeading{padding-left:0;padding-right:0;flex-direction:column;align-items:flex-start;justify-content:initial;gap:35rem;order:1;margin-left:0}}.about__LogoSliderHeading h2{font-size:64rem;line-height:61rem;max-width:609rem;font-weight:400}@media(max-width: 900px){.about__LogoSliderHeading h2{max-width:100%}}@media(max-width: 518px){.about__LogoSliderHeading h2{font-size:38rem;line-height:42rem}}.about__LogoSliderWrap{margin-top:135rem;margin-left:100rem;mix-blend-mode:darken}.about__LogoSliderWrap::-webkit-scrollbar{width:4px;height:4px}.about__LogoSliderWrap::-webkit-scrollbar-corner,.about__LogoSliderWrap::-webkit-scrollbar-track{background:#e9e7e9}.about__LogoSliderWrap::-webkit-scrollbar-thumb{background:#140a23}@media(max-width: 900px){.about__LogoSliderWrap{margin-left:0;padding-bottom:60rem;order:3;margin-top:67rem}}.about__LogoSliderWrap .dragSlider__Items{gap:65rem;padding-bottom:84rem}@media(max-width: 518px){.about__LogoSliderWrap .dragSlider__Items{gap:40rem;padding-bottom:0}}.about__LogoSliderWrap img{width:100%;max-width:285rem;min-width:285rem;height:auto}.about__LogoButton{display:flex;justify-content:center;align-items:center;margin-top:90rem}@media(max-width: 900px){.about__LogoButton{order:3;margin-top:74rem}}@media(max-width: 518px){.about__LogoButton{margin-top:0}}.about__Map{background-color:#140a23;color:#fff}.about__MapWrap{display:flex;align-items:center;gap:110rem}@media(max-width: 900px){.about__MapWrap{flex-direction:column;gap:90rem}}.about__MapText{max-width:435rem;min-width:435rem;margin-left:100rem;flex:1}@media(max-width: 900px){.about__MapText{max-width:100%;min-width:100%;padding-top:90rem;margin-left:0}}.about__MapText h2{font-size:64rem;line-height:61rem;letter-spacing:.64rem;font-weight:400;margin-bottom:80rem}@media(max-width: 518px){.about__MapText h2{font-size:38rem;line-height:42rem}}.about__MapText p{font-size:21rem;line-height:33rem}.about__MapText p+a{color:#fff;font-size:21rem;line-height:33rem;transition:color 200ms;margin-top:50rem}.about__MapText p+a:hover{color:#ff4650}.about__MapText a{display:block}.about__MapText .btn--View{position:relative;margin-top:40rem;font-size:16rem;line-height:12rem;padding-left:40rem;text-decoration:underline;text-underline-offset:10rem;color:#fff;transition:color 200ms}.about__MapText .btn--View:hover{color:#ff4650}.about__MapText .btn--View:before{position:absolute;content:"";top:50%;left:0;display:block;width:10rem;height:10rem;transform:translateY(-50%);border-radius:50%;border:4rem solid #e9e7e9}.about__MapContainer{display:block;width:100%}@media(max-width: 1920px){.about__MapContainer{margin-right:calc(-50vw + 674rem)}}@media(max-width: 900px){.about__MapContainer{transform:unset;margin-left:-30rem;margin-right:-30rem;width:calc(100% + 60rem)}}.about__MapContainer .GMap__Wrapper{height:700rem}@media(max-width: 518px){.about__MapContainer .GMap__Wrapper{height:500rem}}.about__Jobs{padding:150rem 0 70rem}@media(max-width: 900px){.about__Jobs{padding:90rem 0 30rem}}.about__JobsHeading{display:flex;align-items:flex-end;justify-content:space-between;margin:0 100rem;font-weight:400}@media(max-width: 900px){.about__JobsHeading{margin:0;flex-direction:column;align-items:flex-start;justify-content:initial;gap:40rem}}.about__JobsHeading h2{font-size:64rem;line-height:61rem;letter-spacing:.64rem;font-weight:400}.about__noJob{margin:115rem 100rem 0 100rem}@media(max-width: 900px){.about__noJob{margin:115rem 0 50rem}}.about__noJob h3{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;font-weight:400}.about__JobsWrap{display:flex;flex-direction:column;margin:115rem 100rem 0 100rem}@media(max-width: 900px){.about__JobsWrap{margin:115rem 0 0}}.about__JobsWrap a{display:block;color:#140a23;position:relative;padding-bottom:30rem;border-bottom:1px solid rgba(20,10,35,.15);margin-bottom:40rem;padding-right:80rem}.about__JobsWrap a:hover span::before{transform:scale(1, 1)}.about__JobsWrap a:hover svg{color:#fff}.about__JobsWrap h3{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;font-weight:400}.about__JobsWrap p{color:#ff4650;margin-top:18rem;font-size:13rem;font-weight:600;letter-spacing:3rem;text-transform:uppercase}.about__JobsWrap span{position:absolute;top:0;right:0;width:50px;height:50px;border-radius:50%;display:flex;justify-content:center;align-items:center}.about__JobsWrap span:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;border-radius:50%;background-color:#140a23;transform:scale(0, 0);transition:transform 200ms}.about__JobsWrap svg{min-width:30rem;max-width:30rem;min-height:30rem;max-height:30rem;color:#140a23;transform:rotate(45deg) translate(-1rem, -3rem);transition:color 400ms}.about__JobsButtonWrap{display:flex;align-items:center;justify-content:center;margin:30rem 0 0}@media(max-width: 900px){.about__JobsButtonWrap{margin:0}}.blogDetail{background-color:#f4f4f4;margin-top:109rem}@media(max-width: 900px){.blogDetail{margin-top:72rem}}.blogDetail__Hero{padding:63rem 0 32rem}@media(max-width: 900px){.blogDetail__Hero{padding:70rem 0 0}}@media(max-width: 518px){.blogDetail__Hero+div .sections{padding-top:150rem}}.blogDetail__HeroWrap{display:grid;grid-template-columns:repeat(2, 1fr);gap:55rem}@media(max-width: 900px){.blogDetail__HeroWrap{grid-template-columns:1fr}}@media(max-width: 518px){.blogDetail__HeroWrap{gap:40rem}}.blogDetail__HeroWrap img{display:block;min-width:648rem;max-width:648rem;min-height:648rem;max-height:648rem;object-fit:cover}@media(max-width: 900px){.blogDetail__HeroWrap img{min-width:100%;max-width:100%;min-height:100%;max-height:100%;aspect-ratio:1/1}}.blogDetail__HeroWrap div{padding:22rem 0 0;display:flex;flex-direction:column;justify-content:space-between}@media(max-width: 900px){.blogDetail__HeroWrap div{padding:0 0 50rem}}.blogDetail__HeroWrap h1{font-size:70rem;line-height:68rem;font-weight:500;letter-spacing:-0.7rem;margin-bottom:55rem}@media(max-width: 900px){.blogDetail__HeroWrap h1{font-size:38rem;line-height:42rem;letter-spacing:-0.38rem;margin-top:27rem;margin-bottom:0}}@media(max-width: 518px){.blogDetail__HeroWrap h1{margin-top:0}}.blogDetail__HeroWrap p{position:relative;font-size:16rem;letter-spacing:1.82rem;font-weight:600;text-transform:uppercase;padding-bottom:25rem;border-bottom:1px solid #e9e7e9}@media(max-width: 900px){.blogDetail__HeroWrap p{margin-top:25rem;margin-left:-30rem;width:calc(100% + 90rem);padding:30rem 0 30rem 30rem;border-bottom:none}}@media(max-width: 518px){.blogDetail__HeroWrap p{font-size:12rem}}@media(max-width: 900px){.blogDetail__HeroWrap p:after{position:absolute;content:"";display:block;left:30rem;bottom:12rem;width:calc(100% - 60rem);height:1px;background:#e9e7e9}}.blogDetail__HeroWrap span{opacity:.43;margin-right:15rem;text-transform:initial}.blogDetail__Related{background-color:#fff;padding:105rem 0 65rem;margin-top:25rem}@media(max-width: 900px){.blogDetail__Related{margin-top:15rem;padding:45rem 0}}@media(max-width: 518px){.blogDetail__Related{margin-top:30rem;padding:55rem 0}}.blogDetail__Related .blogDetail__RelatedTitle{text-align:center;font-size:70rem;line-height:68rem;letter-spacing:.7rem;font-weight:400;padding-bottom:12rem}@media(max-width: 900px){.blogDetail__Related .blogDetail__RelatedTitle{font-size:38rem;line-height:42rem;letter-spacing:-0.38rem;padding-bottom:0}}.blogDetail__Breadcrumbs{position:relative;display:flex;padding-left:22rem;gap:14rem;margin-top:65rem}@media(max-width: 900px){.blogDetail__Breadcrumbs{margin-top:35rem}}@media(max-width: 518px){.blogDetail__Breadcrumbs{margin-top:60rem}}.blogDetail__Breadcrumbs:before{position:absolute;content:"";display:block;top:50%;left:0;transform:translateY(-50%);width:10rem;height:10rem;border-radius:50%;border:1px solid #140a23}.blogDetail__Breadcrumbs li{padding:0;margin:0;display:flex}.blogDetail__Breadcrumbs li:before{content:none}.blogDetail__Breadcrumbs li:after{content:"/";font-size:16rem;font-weight:bold;margin-left:14rem;transform:translateY(-4rem)}.blogDetail__Breadcrumbs li:last-child:after{content:none}.blogDetail__Breadcrumbs a{display:flex;position:relative;border-bottom:1px solid #140a23;color:#140a23;transition:color 300ms,border-color 300ms;font-weight:bold;font-size:16rem;line-height:12rem;padding-bottom:10rem}.blogDetail__Breadcrumbs a:hover{color:#ff4650;border-color:#ff4650}.blogDetail__LeadWrap{background-color:#fff;padding:90rem 80rem 108rem}@media(max-width: 900px){.blogDetail__LeadWrap{padding:40rem 0 75rem}}@media(max-width: 518px){.blogDetail__LeadWrap{padding-bottom:65rem}}.blogDetail__LeadWrap h1{margin-left:475rem;max-width:680rem}@media(max-width: 900px){.blogDetail__LeadWrap h1{margin-left:0;max-width:100%}}.blogDetail__LeadWrap h2{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;margin-left:475rem;font-weight:400;max-width:680rem}@media(max-width: 900px){.blogDetail__LeadWrap h2{font-size:28rem;line-height:30rem;letter-spacing:-0.28rem;margin-left:0;max-width:100%}}.blogDetail__LeadWrap+div>.sections{padding-top:0 !important}.complexCustomers__Hero{padding:130rem 0 0}.complexCustomersPage .solutions{background-color:#f4f4f4}@media(max-width: 900px){.complexCustomersPage .home__FeaturesBanner{padding-bottom:120rem}}.complexCustomersPage .home__FeaturesBanner h2{text-align:left}.complexCustomersPage .home__FeaturesBanner h2 b{font-weight:400;color:#140a23}.complexCustomersPage .changingImages{background-color:#fff;padding-top:94rem}@media(max-width: 900px){.complexCustomersPage .changingImages{padding-top:50rem}}@media(max-width: 518px){.complexCustomersPage .changingImages{padding-top:5rem}}.complexCustomersPage .changingImages__TitleWide{margin-top:0;font-weight:400 !important}.errorPage{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh}.errorPage h1{margin-bottom:60rem;font-weight:600;text-align:center}.errorPage b{display:block}.errorPage span{border:none}.features{position:relative;padding:130rem 0 50rem;z-index:10;background-color:#140a23}.features .changingImages .category img,.features .changingImages .testimonials__TextWrap .bullet img,.testimonials__TextWrap .features .changingImages .bullet img{display:none}.features__Hero{position:relative;color:#fff;padding-bottom:70rem;display:flex;flex-direction:column}.features__Hero h1{font-size:139rem;line-height:146rem;letter-spacing:-1.44rem}@media(max-width: 900px){.features__Hero h1{font-size:84rem;line-height:76rem;letter-spacing:-1.2rem}}@media(max-width: 518px){.features__Hero h1{font-size:45rem;line-height:45rem}}.features__Hero h2{font-size:64rem;line-height:61rem;letter-spacing:.64rem;font-weight:500}@media(max-width: 900px){.features__Hero h2{font-size:38rem;line-height:42rem;letter-spacing:-0.38rem;max-width:initial}}.features__Hero h2 b{color:#ff4650;font-weight:inherit}.features__Hero .btnWrap{max-width:770rem}@media(max-width: 900px){.features__Hero .btnWrap{max-width:initial}}.features__Hero .btn--Black{margin-top:60rem;width:fit-content}@media(max-width: 900px){.features__Hero .btn--Black{margin:65rem 0 25rem}}.features__HeroLeadWrap{display:flex;gap:70rem;margin-top:65rem}@media(max-width: 900px){.features__HeroLeadWrap{margin-top:40rem}}@media(max-width: 518px){.features__HeroLeadWrap{flex-direction:column-reverse;gap:35rem}}.features__HeroLeadLeft{margin-left:115rem;max-width:770rem}@media(max-width: 900px){.features__HeroLeadLeft{margin-left:0}}@media(max-width: 518px){.features__HeroLeadLeft{max-width:initial}}.features__HeroImage{margin-left:auto;margin-right:85rem}@media(max-width: 900px){.features__HeroImage{margin:0}}@media(max-width: 518px){.features__HeroImage{margin-top:35rem}}.features__HeroImage img{display:block;min-width:298rem;max-width:298rem;min-height:409rem;max-height:409rem}.features__Items{background-color:#fff;padding:60rem 0 155rem}@media(max-width: 900px){.features__Items{padding:35rem 0 65rem}}@media(max-width: 518px){.features__Items{padding:35rem 0 100rem}}.features__Items h2{padding:20rem 0 0;font-size:64rem;line-height:61rem;letter-spacing:.64rem;font-weight:400;margin:0 115rem;max-width:651rem}@media(max-width: 900px){.features__Items h2{font-size:38rem;line-height:42rem;letter-spacing:-0.38rem;margin:0;padding:0;max-width:100%}}.features__Items+.changingImages .category img,.features__Items+.changingImages .testimonials__TextWrap .bullet img,.testimonials__TextWrap .features__Items+.changingImages .bullet img{display:none !important}@media(max-width: 518px){.features__Items .category,.features__Items .testimonials__TextWrap .bullet,.testimonials__TextWrap .features__Items .bullet{margin-bottom:65rem}}.features__List{margin:125rem 115rem 0;display:flex;flex-direction:column;gap:160rem}@media(max-width: 900px){.features__List{margin:55rem 0 0;gap:55rem}}@media(max-width: 518px){.features__List{margin:100rem 0 0}}.features__Item{display:flex;gap:40rem;counter-increment:features-counter}@media(min-width: 900px){.features__Item:nth-of-type(even){flex-direction:row-reverse}}@media(max-width: 900px){.features__Item{flex-direction:column;gap:40rem}}.features__ItemImg{background-color:#ff4650;display:flex;justify-content:center;align-items:center;padding:90rem;width:50%}@media(max-width: 900px){.features__ItemImg{width:100%}}.features__ItemImg img{display:block;min-height:409rem;max-height:409rem;width:auto;object-fit:cover}@media(max-width: 900px){.features__ItemImg img{min-height:372rem;max-height:372rem}}.features__ItemText{position:relative;width:50%;display:flex;flex-direction:column}@media(max-width: 900px){.features__ItemText{width:100%}}.features__ItemText:before{content:counter(features-counter, decimal-leading-zero);display:block;color:#ff4650;font-size:13rem;letter-spacing:2.99rem;font-weight:600;border-bottom:1px solid rgba(20,10,35,.15);padding:0 0 25rem;margin-left:75rem}@media(max-width: 900px){.features__ItemText:before{max-width:unset;margin-left:0}}.features__ItemText h3{font-size:46rem;letter-spacing:-0.46rem;font-weight:500;margin:33rem 0 0 75rem;max-width:435rem;line-height:51rem}@media(max-width: 900px){.features__ItemText h3{margin:20rem 0 0;font-size:34rem;letter-spacing:-0.32rem;line-height:34rem;max-width:unset}}.features__ItemText p{font-size:28rem;line-height:35rem;margin:25rem 0 0 75rem;max-width:398rem}@media(max-width: 900px){.features__ItemText p{margin:40rem 0 0;font-size:21rem;line-height:30rem;max-width:unset}}.features__ItemText .btn--View{color:#140a23;padding-left:20rem;font-size:16rem;line-height:12rem;font-weight:600;margin:25rem 75rem 0}@media(max-width: 900px){.features__ItemText .btn--View{margin:40rem 0 0}}.features__ItemText .btn--View:before{border:1px solid rgba(20,10,35,.5);transition:border-color 300ms}.features__ItemText .btn--View:hover{color:#ff4650}.features__ItemText .btn--View:hover:before{border-color:#ff4650}.home__Hero{position:relative;padding:130rem 0 50rem;z-index:10}@media(min-width: 1201px){.home__Hero{min-height:100vh}}@media(max-width: 1200px){.home__Hero{display:flex;flex-direction:column;padding:130rem 0 250rem}}@media(max-width: 518px){.home__Hero{padding:115rem 0 50rem}}@media(min-width: 518px){.home__Hero.de .home__HeroPhone{top:380rem}}@media(min-width: 900px){.home__Hero.de .home__HeroPhone{top:440rem}}@media(min-width: 518px){.home__Hero.de .title--Light{font-size:90rem;line-height:82rem;letter-spacing:-1.2rem}}@media(min-width: 900px){.home__Hero.de .title--Light{font-size:150rem;line-height:142rem}}.home__HeroList{display:flex;align-items:baseline;margin-top:40rem;margin-left:25rem}@media(max-width: 1200px){.home__HeroList{flex-direction:column-reverse;align-items:flex-start}}@media(max-width: 900px){.home__HeroList{margin-left:0}}.home__HeroList ul{margin-left:80rem}@media(max-width: 1200px){.home__HeroList ul{margin-left:0rem}}.home__HeroList li{font-size:28rem;line-height:35rem;margin-bottom:10rem}@media(max-width: 1200px){.home__HeroList li{font-size:22rem;line-height:29rem}}@media(max-width: 900px){.home__HeroList li{font-size:21rem;line-height:25rem;padding-left:40rem}}.home__HeroList .btn--Red{margin-top:auto}@media(max-width: 1200px){.home__HeroList .btn--Red{margin-left:0;margin-top:35rem}}@media(max-width: 900px){.home__HeroList .btn--Red svg{transform:scale(1, 1)}}@media(max-width: 900px){.home__HeroList .btn--Red span:before{content:none}}.home__HeroImage{position:absolute;top:0;left:0;bottom:0;width:100%;max-width:1920rem;pointer-events:none}@media(max-width: 518px){.home__HeroImage{position:relative;display:flex;justify-content:center;margin-top:54rem}}.home__HeroPhone{position:absolute;top:400rem;right:130rem;width:100%;min-width:372rem;max-width:372rem;min-height:584rem;max-height:584rem;height:auto;transition:opacity 1200ms;opacity:0;animation-name:popin;animation-delay:1s;animation-duration:1200ms;animation-fill-mode:forwards}@media(max-width: 900px){.home__HeroPhone{right:15rem;top:480rem}}@media(max-width: 518px){.home__HeroPhone{position:relative;top:unset;right:unset;min-width:290rem;max-width:290rem;min-height:416rem;max-height:416rem}}.home__HeroCard img{position:absolute;top:140rem;left:0;z-index:2;width:100%;height:auto}.home__HeroBadge{position:absolute;top:-30rem;right:-20rem;width:130rem;height:130rem;border-radius:50%;box-shadow:5rem 4rem 33rem 0 rgba(0,0,0,.2);background-color:#ff4650}@media(max-width: 518px){.home__HeroBadge{right:-20rem;width:120rem;height:120rem}}.home__HeroBadge img:first-child{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:33rem;height:33rem}@media(max-width: 1200px){.home__HeroBadge img:first-child{width:23rem;height:23rem}}.home__HeroBadge img:last-child{position:absolute;top:10rem;left:10rem;width:108rem;height:108rem;transform-origin:center;animation:rotate-animation 10s infinite linear}@media(max-width: 518px){.home__HeroBadge img:last-child{width:98rem;height:98rem;top:12rem;left:12rem}}.home__Business{position:relative;color:#140a23;padding-top:120rem;z-index:2}.home__Business:before{position:absolute;content:"";top:0;left:0;right:0;bottom:0;background-color:#140a23;opacity:0;z-index:-1;transition:opacity 600ms}@media(max-width: 900px){.home__Business{padding:50rem 0 180rem}}@media(max-width: 518px){.home__Business{padding-bottom:0}}@media(min-width: 518px){.home__Business.de .title--Light{font-size:90rem;line-height:82rem;letter-spacing:-1.2rem}}@media(min-width: 900px){.home__Business.de .title--Light{font-size:150rem;line-height:142rem}}.home__Scroll{position:relative;z-index:20;padding-top:360rem;color:#140a23}@media(max-width: 900px){.home__Scroll{padding:0 0 30rem}}.home__ScrollInner{position:relative;margin-left:150rem;display:flex;align-items:flex-start;gap:65rem}@media(max-width: 1200px){.home__ScrollInner{margin-left:0rem}}@media(max-width: 900px){.home__ScrollInner{padding-bottom:80rem}}.home__ScrollInner .btn--Black{width:fit-content;position:sticky;top:50%;left:0;transform:translateY(-50%)}.home__ScrollInner .btn--Black:hover{background-color:#fff;color:#140a23;border-color:#140a23}.home__ScrollProgress{display:flex;position:sticky;top:50%;left:0;flex-direction:column;justify-content:center;align-items:center;min-width:44rem;max-width:44rem;overflow:hidden;color:#140a23;transform:translateY(-50%);transition:color 300ms;opacity:0}@media(max-width: 900px){.home__ScrollProgress{position:absolute;top:initial;bottom:5rem;flex-direction:row;min-width:fit-content;max-width:fit-content;justify-content:flex-start;left:50%;transform:translateX(-50%) !important}}.home__ScrollProgress:before{position:absolute;content:"";z-index:1;top:20rem;left:50%;transform:translateX(-50%);width:2rem;height:calc(100% - 40rem);background-color:rgba(190,189,190,.5)}@media(max-width: 900px){.home__ScrollProgress:before{left:20rem;top:50%;transform:translateY(-50%);width:calc(100% - 40rem);height:2rem}}.home__ScrollProgress:after{position:absolute;content:none;z-index:2;top:20rem;left:50%;transform:translate(-50%, calc(-100% - 20rem));width:2rem;height:calc(100% - 40rem);background-color:currentColor}.home__ScrollProgress span{position:relative;z-index:10;margin-bottom:20rem;width:44rem;height:44rem;border-radius:50%;background-color:rgba(0,0,0,0);transition:background-color 300ms;cursor:pointer}@media(max-width: 900px){.home__ScrollProgress span{margin-bottom:0;margin-right:20rem}}.home__ScrollProgress span:last-child{margin-bottom:0}@media(max-width: 900px){.home__ScrollProgress span:last-child{margin-right:0}}.home__ScrollProgress span:last-child:before{content:none}.home__ScrollProgress span:before{position:absolute;z-index:-1;content:"";top:20rem;left:50%;transform:translateX(-50%) scaleY(0);transform-origin:-50% 0;width:2rem;height:calc(100% + 20rem);background-color:#fff;transition:transform 300ms}@media(max-width: 900px){.home__ScrollProgress span:before{left:20rem;top:50%;transform:translateY(-50%) scaleX(0);transform-origin:0 -50%;width:calc(100% + 20rem);height:2rem}}.home__ScrollProgress span:after{position:absolute;content:"";top:50%;left:50%;z-index:10;border-radius:50%;transform:translate(-50%, -50%) scale(0.6, 0.6);width:18rem;height:18rem;background-color:#747474;border:4rem solid #140a23;transform-origin:center;transition:transform 300ms,background-color 300ms}.home__ScrollProgress span.isFinished:after{background-color:#fff}.home__ScrollProgress span.isFinished:before{transform:translateX(-50%) scaleY(1)}@media(max-width: 900px){.home__ScrollProgress span.isFinished:before{transform:translateY(-50%) scaleX(1)}}.home__ScrollProgress span.isActive{background-color:rgba(255,180,185,.3)}.home__ScrollProgress span.isActive:after{transform:scale(1, 1) translate(-50%, -50%);background-color:#ff4650;border:none}.home__ScrollBox{padding:0 0 800rem 0;margin-top:-200rem}@media(max-width: 1200px){.home__ScrollBox{margin-left:55rem}}@media(max-width: 900px){.home__ScrollBox{margin:-150rem 0 0;padding:0;width:100%;display:flex;overflow-x:scroll;scroll-snap-type:x mandatory;gap:50rem;scrollbar-width:none;padding-bottom:35rem}.home__ScrollBox::-webkit-scrollbar{display:none}}@media(max-width: 518px){.home__ScrollBox{margin:0}}.home__ScrollItem{padding-top:20rem;max-width:400rem;opacity:0;transition:opacity 300ms;display:flex;flex-direction:column}@media(max-width: 900px){.home__ScrollItem{max-width:unset;opacity:1;min-width:100%;scroll-snap-align:start}}@media(min-width: 900px){.home__ScrollItem:last-child{padding-bottom:400rem}}@media(max-width: 518px){.home__ScrollItem{padding-top:55rem}}.home__ScrollItem.isActive{opacity:1}.home__ScrollItem+.home__ScrollItem{margin-top:150rem}@media(max-width: 900px){.home__ScrollItem+.home__ScrollItem{margin-top:0}}.home__ScrollItem h3{font-size:46rem;margin-bottom:25rem;order:2;font-weight:600;transition:color 600ms}@media(max-width: 518px){.home__ScrollItem h3{margin-top:30rem;font-size:34rem;line-height:34rem}}.home__ScrollItem p{font-size:28rem;line-height:35rem;order:3;transition:color 600ms}@media(max-width: 518px){.home__ScrollItem p{font-size:21rem;line-height:32rem}}.home__ScrollItem .home__ScrollPhone{order:1}@media(max-width: 518px){.home__ScrollItem:nth-of-type(1) img{left:calc(50% + 1rem)}}@media(max-width: 518px){.home__ScrollItem:nth-of-type(5) img{left:calc(50% + 2rem)}}@media(max-width: 518px){.home__ScrollItem:nth-of-type(6) img{left:calc(50% - 10rem)}}.home__ScrollPhoneWrapper{min-width:485rem;max-width:485rem;min-height:645rem;max-height:645rem}@media(max-width: 518px){.home__ScrollPhoneWrapper{min-width:293rem;max-width:293rem;min-height:416rem;max-height:416rem}}.home__ScrollPhoneWrapper.isDesktop{position:sticky;top:50%;right:0;transform:translateY(-50%);margin-left:auto}@media(max-width: 900px){.home__ScrollPhoneWrapper.isDesktop{display:none}}.home__ScrollPhoneWrapper.isMobile{position:relative;display:none;align-self:center}@media(max-width: 900px){.home__ScrollPhoneWrapper.isMobile{display:block}}.home__ScrollPhoneWrapper.isMobile img{opacity:1}@media(max-width: 518px){.home__ScrollPhoneWrapper.isMobile .mobilePhone{min-width:221rem;max-width:221rem;min-height:426rem;max-height:426rem}}.home__ScrollPhoneWrapper img{position:absolute;top:0;left:1.5rem;min-width:485rem;max-width:485rem;min-height:645rem;max-height:645rem;opacity:0;transition:opacity 300ms}@media(max-width: 518px){.home__ScrollPhoneWrapper img{top:calc(50% + 15rem);left:50%;min-width:354rem;max-width:354rem;min-height:471rem;max-height:471rem;transform:translate(-50%, -50%)}}.home__ScrollPhoneWrapper img.isActive{opacity:1}@media(min-width: 900px){.home__ScrollPhoneWrapper img:nth-of-type(5){left:4rem}}.home__ScrollButtonDesktop{margin-top:90rem}@media(max-width: 900px){.home__ScrollButtonDesktop{display:none !important}}.home__ScrollButtonMobile{display:none}@media(max-width: 900px){.home__ScrollButtonMobile{display:flex;justify-content:center;margin-top:50rem}}.home__FeaturesInner{display:flex;align-items:flex-start}@media(max-width: 900px){.home__FeaturesInner{flex-direction:column;padding-top:0}}.home__FeaturesBanner{position:sticky;top:0;display:flex;flex-direction:column;align-items:center;background-color:#ff4650;padding:130rem;color:#fff;margin-left:calc(50% - 50vw);max-width:50vw;min-width:50vw;min-height:100vh;overflow:hidden}.home__FeaturesBanner.isActive .features__CrossLeft{transition:opacity 900ms;transition-delay:400ms;opacity:1 !important}@media(max-width: 900px){.home__FeaturesBanner{position:relative;max-width:unset;min-width:unset;margin-left:-30rem;width:calc(100% + 60rem);min-height:unset;padding-bottom:0}}@media(max-width: 518px){.home__FeaturesBanner{margin-left:-30rem;width:calc(100% + 60rem);padding:70rem 40rem 0;align-items:flex-start}}.home__FeaturesBanner h2{position:relative;z-index:20;font-size:64rem;line-height:61rem;font-weight:400}@media(max-width: 518px){.home__FeaturesBanner h2{font-size:42rem;line-height:42rem}}.home__FeaturesCross{position:relative;z-index:20;display:block;margin:80rem 0;width:100%;max-width:550rem;height:auto;object-fit:cover}@media(max-height: 800px){.home__FeaturesCross{max-width:280rem}}@media(max-width: 900px){.home__FeaturesCross{min-height:400rem;max-height:400rem;max-width:400rem;min-width:400rem}}@media(max-width: 518px){.home__FeaturesCross{max-width:300rem;min-width:300rem;align-self:center}}.home__FeaturesCross img{position:absolute;width:100%}@media(max-width: 900px){.home__FeaturesCross img{height:100%}}.features__CrossLeft{opacity:0;transition:opacity 400ms}.home__FeaturesList{margin-left:120rem;margin-top:75rem;flex-grow:1}@media(max-width: 900px){.home__FeaturesList{margin-left:0;width:100%}}.home__FeaturesList .home__FeaturesListLead{margin-bottom:120rem;max-width:390rem}@media(max-width: 1440px){.home__FeaturesList .home__FeaturesListLead{max-width:435rem}}@media(max-width: 900px){.home__FeaturesList .home__FeaturesListLead{margin-bottom:70rem;max-width:100%}}@media(max-width: 518px){.home__FeaturesList .home__FeaturesListLead{margin-bottom:50rem}}.home__FeaturesList div:not(.home__FeaturesListBtn){padding-bottom:35rem;margin-bottom:120rem;border-bottom:1rem solid #ff4650;max-width:390rem}@media(max-width: 1440px){.home__FeaturesList div:not(.home__FeaturesListBtn){max-width:435rem}}@media(max-width: 900px){.home__FeaturesList div:not(.home__FeaturesListBtn){margin-left:60rem;margin-bottom:60rem;max-width:100%}}@media(max-width: 518px){.home__FeaturesList div:not(.home__FeaturesListBtn){margin-bottom:50rem}}.home__FeaturesList h3{position:relative;font-size:33rem;margin-bottom:15rem;font-weight:600}@media(max-width: 518px){.home__FeaturesList h3{font-size:30rem;line-height:30rem}}.home__FeaturesList h3:before{position:absolute;content:"";top:5rem;left:-60rem;width:34rem;height:31rem;background:url("/.resources/images/icon-square-check.svg") no-repeat center/100% 100%}@media(max-width: 900px){.home__FeaturesList h3:before{left:-60rem}}.home__FeaturesList p{font-size:28rem;line-height:35rem}@media(max-width: 518px){.home__FeaturesList p{font-size:21rem;line-height:30rem}}.home__FeaturesListBtn{display:flex;justify-content:flex-start;margin-top:-55rem;padding-bottom:88rem}@media(max-width: 900px){.home__FeaturesListBtn{margin-top:0;justify-content:center}}.home__News{padding:135rem 0 160rem;background-color:#f4f4f4;overflow-x:hidden}@media(max-width: 518px){.home__News{padding-top:85rem;padding-bottom:55rem}}.home__News h2{font-size:64rem;line-height:61rem;margin-bottom:50rem;font-weight:400}@media(max-width: 518px){.home__News h2{font-size:42rem;line-height:47rem}}.home__NewsSlider{display:flex;min-width:calc(50vw + 50%);max-width:calc(50vw + 50%)}.dragSlider__Items{gap:25rem}.home__NewsItem{position:relative;display:flex;flex-direction:column;align-items:center;min-width:415rem;max-width:415rem;min-height:415rem;padding:40rem 40rem 116rem;background-color:#fff;color:#140a23;pointer-events:all !important}@media(max-width: 900px){.home__NewsItem{padding:30rem 30rem 65rem}}@media(max-width: 518px){.home__NewsItem{min-width:calc(100% - 30rem);max-width:calc(100% - 30rem)}}.home__NewsItem:hover p{opacity:.5}@media(min-width: 901px){.home__NewsItem:hover img{top:90rem;transform:translate(-50%, 0)}}.home__NewsItem h3{align-self:flex-start;font-size:13rem;padding-bottom:10rem;letter-spacing:3rem;text-transform:uppercase;border-bottom:1px solid #e9e7e9;margin-bottom:40rem;font-weight:600}@media(min-width: 901px){.home__NewsItem h3+div div{max-height:90rem;min-height:90rem}}.home__NewsItem img{position:absolute;top:50%;left:50%;max-height:100rem;min-height:100rem;transform:translate(-50%, -50%);transition:top 300ms,transform 300ms;width:fit-content;max-width:300rem;aspect-ratio:3/1}@media(max-width: 900px){.home__NewsItem img{position:relative;top:unset;left:unset;transform:unset;display:block;margin:0 auto}}.home__NewsItem p{font-size:21rem;line-height:30rem;color:#140a23;opacity:0;transition:opacity 300ms}@media(max-width: 900px){.home__NewsItem p{opacity:.5}}.home__NewsItem a{position:absolute;left:0;bottom:0;right:0;color:#140a23;font-size:0;pointer-events:all !important;width:100%;height:100rem}.home__NewsItem a svg{position:absolute;right:20rem;bottom:40rem;transform:rotate(45deg);width:22rem;height:22rem}.jobDetail{background-color:#f4f4f4}.jobDetail__Content{padding:106rem 104rem 100rem 124rem;background-color:#fff;margin-left:420rem;width:calc(100% - 260rem)}@media(max-width: 1800px){.jobDetail__Content{width:calc(100% - 370rem)}}@media(max-width: 900px){.jobDetail__Content{margin:0 -30rem;padding:50rem 30rem;width:calc(100% + 60rem)}}.jobDetail__Content h1,.jobDetail__Content h2{padding-top:100rem;font-weight:400;font-size:70rem;line-height:68rem;margin-bottom:90rem}@media(max-width: 518px){.jobDetail__Content h1,.jobDetail__Content h2{font-size:50rem;line-height:58rem;padding-top:60rem;margin-bottom:40rem}}.jobDetail__Content h3{margin-top:65rem;font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;margin-bottom:90rem}@media(max-width: 518px){.jobDetail__Content h3{margin-top:45rem;font-size:28rem;line-height:28rem;letter-spacing:-0.28rem;margin-bottom:40rem}}@media(min-width: 900px){.jobDetail__Content h3+ul{margin-top:-50rem}}.jobDetail__Content h3+p b{display:block;margin-top:-50rem}@media(max-width: 518px){.jobDetail__Content h3+p{margin-top:80rem}}.jobDetail__Content p{margin-top:15rem;font-size:21rem;line-height:33rem}@media(max-width: 518px){.jobDetail__Content p{font-size:21rem;line-height:30rem}}.jobDetail__Content p br{height:40rem}.jobDetail__Content p+p{margin-top:40rem}@media(max-width: 518px){.jobDetail__Content p+p{margin-top:25rem}}.jobDetail__Content a{color:#140a23;transition:color 200ms;text-decoration:underline}.jobDetail__Content a:hover{color:#ff4650}.jobDetail__Content ul{margin:30rem 0 20rem}.jobDetail__Content ul+p b{display:block;margin-top:50rem}@media(max-width: 518px){.jobDetail__Content ul+p b{margin-top:30rem}}.jobDetail__Content li{padding-left:25rem;font-size:23rem;line-height:33rem}.jobDetail__Content li:before{background:none;width:10rem;height:10rem;border-radius:50%;border:1px solid #979797;background-color:rgba(0,0,0,0);top:10rem;transform:unset}.jobDetail__Form{margin-left:420rem;padding:104rem 104rem 140rem 124rem}@media(max-width: 900px){.jobDetail__Form{margin-left:0;padding:50rem 30rem}}.jobDetail__Form h2{font-size:46rem;letter-spacing:-0.46rem;margin-bottom:60rem}.jobDetail__Form h3{font-size:32rem;line-height:38rem;letter-spacing:-0.32rem;max-width:630rem}@media(max-width: 518px){.jobDetail__Form h3{font-size:24rem;line-height:30rem;letter-spacing:-0.24rem;max-width:initial}}.jobDetail__Form h3 a{color:inherit;transition:color 300ms}.jobDetail__Form h3 a:hover{color:#ff4650}.jobDetail__Form form{max-width:485rem}@media(max-width: 900px){.jobDetail__Form form{max-width:unset}}.jobDetail__Form .textField__Wrapper,.jobDetail__Form .fileField__Wrapper{border-bottom:1px solid rgba(20,10,35,.15)}.jobDetail__Form .textField__Wrapper input,.jobDetail__Form .fileField__Wrapper input{font-size:16rem;line-height:24rem;color:#140a23}.jobDetail__Form .textareaField__Wrapper{border-bottom:1px solid rgba(20,10,35,.15)}.jobDetail__Form .textareaField__Wrapper textarea{font-size:16rem;line-height:24rem;color:#140a23;height:35rem}.jobDetail__Form .isFocused .textareaField__Wrapper,.jobDetail__Form .isFocused .textField__Wrapper,.jobDetail__Form .isFocused .fileField__Wrapper{border-bottom:1px solid #140a23 !important}.jobDetail__Form .btn--Black{background-color:#140a23 !important;line-height:0 !important}.jobDetail__Form .btn--Black:disabled{background-color:#c9c4c9 !important;border-color:#c9c4c9}.jobDetail__Form .btn--Black:disabled span{border-color:inherit}.jobDetail__Form .btn--Black:disabled span:before{background:#140a23}.jobDetail__Form .btn--Black:hover{background-color:#fff !important}.jobDetail__Form .form__Privacy{flex-direction:row;align-items:flex-end;gap:82rem}@media(max-width: 900px){.jobDetail__Form .form__Privacy{flex-direction:column}}.jobDetail__Form p a{color:#140a23}.jobDetail__Name,.jobDetail__Message,.jobDetail__Email{position:relative}.jobDetail__Name:before,.jobDetail__Message:before,.jobDetail__Email:before{position:absolute;content:"";display:block;left:0;top:5rem;width:30rem;height:30rem;background:url("/.resources/images/icon-job-name.svg") no-repeat center/cover}.jobDetail__Name.hasValue .textField__Wrapper,.jobDetail__Name.hasValue .fileField__Wrapper,.hasValue.jobDetail__Message .textField__Wrapper,.hasValue.jobDetail__Message .fileField__Wrapper,.hasValue.jobDetail__Email .textField__Wrapper,.hasValue.jobDetail__Email .fileField__Wrapper,.jobDetail__Name.hasValue .textareaField__Wrapper,.hasValue.jobDetail__Message .textareaField__Wrapper,.hasValue.jobDetail__Email .textareaField__Wrapper{border-color:#140a23}.jobDetail__Name .textField__Wrapper,.jobDetail__Name .fileField__Wrapper,.jobDetail__Message .textField__Wrapper,.jobDetail__Message .fileField__Wrapper,.jobDetail__Email .textField__Wrapper,.jobDetail__Email .fileField__Wrapper,.jobDetail__Name .textareaField__Wrapper,.jobDetail__Message .textareaField__Wrapper,.jobDetail__Email .textareaField__Wrapper{padding-left:40rem}.jobDetail__Name .textField__Wrapper input,.jobDetail__Name .fileField__Wrapper input,.jobDetail__Message .textField__Wrapper input,.jobDetail__Message .fileField__Wrapper input,.jobDetail__Email .textField__Wrapper input,.jobDetail__Email .fileField__Wrapper input,.jobDetail__Name .textField__Wrapper textarea,.jobDetail__Name .fileField__Wrapper textarea,.jobDetail__Message .textField__Wrapper textarea,.jobDetail__Message .fileField__Wrapper textarea,.jobDetail__Email .textField__Wrapper textarea,.jobDetail__Email .fileField__Wrapper textarea,.jobDetail__Name .textareaField__Wrapper input,.jobDetail__Message .textareaField__Wrapper input,.jobDetail__Email .textareaField__Wrapper input,.jobDetail__Name .textareaField__Wrapper textarea,.jobDetail__Message .textareaField__Wrapper textarea,.jobDetail__Email .textareaField__Wrapper textarea{font-size:16rem;line-height:24rem;font-weight:500;padding-bottom:20rem}.jobDetail__Email:before{background:url("/.resources/images/icon-job-email.svg") no-repeat center/cover}.jobDetail__Message:before{background:url("/.resources/images/icon-job-message.svg") no-repeat center/cover}.jobDetail__Message .textareaField__Wrapper textarea{height:50rem}.jobDetail__FileUpload .fileField__Wrapper{border:none !important;padding-left:0;margin-bottom:0;justify-content:flex-start}.jobDetail__FileUpload.isFocused .fileField__Wrapper{border:none !important}.jobDetail__FileUpload .fileField__InputWrapper{border:1px solid rgba(20,10,35,.15);border-radius:14rem;padding:18rem 20rem;margin-bottom:35rem}.jobDetail__FileUpload label{margin-left:0;min-width:48rem;max-width:48rem;min-height:48rem;max-height:48rem;border-radius:14rem;background-color:rgba(0,0,0,0);border:1px solid #c9c4c9;display:flex;justify-content:center;align-items:center;margin-right:30rem}@media(max-width: 518px){.jobDetail__FileUpload label{border-radius:10rem}}.jobDetail__FileUpload label:hover{background-color:#140a23}.jobDetail__FileUpload label:hover img{filter:invert(1)}.jobDetail__FileUpload label img{display:block;min-width:23rem;max-width:23rem;min-height:23rem;max-height:23rem}.jobDetail__FileUpload .fileField__PrependText{display:block;max-width:100% !important}.jobDetail__FileUpload .fileField__PrependText span{display:block;font-size:13rem;line-height:22rem;letter-spacing:2.99rem;font-weight:600;text-transform:uppercase;margin-bottom:7rem}@media(max-width: 900px){.jobDetail__FileUpload .fileField__PrependText span{letter-spacing:1rem}}.jobDetail__FileUpload .fileField__PrependText p{font-size:12rem;line-height:18rem;color:#858087}.hasValue .fileField__InputWrapper{background-color:#fff}.hasValue .fileField__InputWrapper label{background-color:#140a23}.hasValue .fileField__InputWrapper label img{filter:invert(1)}.formField__Files{margin-top:0 !important;width:calc(100% - 80rem) !important}.formField__Files p{font-size:13rem;line-height:22rem;letter-spacing:2.99rem;font-weight:600;text-transform:uppercase;margin-bottom:10rem}.formField__File{position:relative;justify-content:initial !important}.formField__File button{background-color:rgba(0,0,0,0) !important;display:flex;justify-content:center;align-items:center;font-size:12rem;font-weight:600}.formField__File button span{width:10rem !important;height:10rem !important;background-image:url("/.resources/images/icon-delete-black.svg") !important;background-size:10rem 10rem !important}.formField__File:hover .formField__FileName{color:#140a23}.formField__File:hover button span{background-image:url("/.resources/images/icon-delete-red.svg") !important}.formField__FileName{color:#858087;font-size:12rem !important;line-height:20rem;transition:color}.jobList{padding:150rem 0 70rem}@media(max-width: 900px){.jobList{padding:90rem 0 30rem}}.jobList__noJob{margin:115rem 100rem 0 100rem}@media(max-width: 900px){.jobList__noJob{margin:115rem 0 50rem}}.jobList__noJob h3{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;font-weight:400}.jobList__JobsWrap{display:flex;flex-direction:column;margin:115rem 100rem 0 100rem}@media(max-width: 900px){.jobList__JobsWrap{margin:115rem 0 0}}@media(max-width: 518px){.jobList__JobsWrap{margin:70rem 0 0}}.jobList__JobsWrap a{display:block;color:#140a23;position:relative;padding-bottom:30rem;border-bottom:1px solid rgba(20,10,35,.15);margin-bottom:40rem;padding-right:80rem}.jobList__JobsWrap a:hover span::before{transform:scale(1, 1)}.jobList__JobsWrap a:hover svg{color:#fff}.jobList__JobsWrap h3{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;font-weight:400}.jobList__JobsWrap p{color:#ff4650;margin-top:18rem;font-size:13rem;font-weight:600;letter-spacing:3rem;text-transform:uppercase}.jobList__JobsWrap span{position:absolute;top:0;right:0;width:50px;height:50px;border-radius:50%;display:flex;justify-content:center;align-items:center}.jobList__JobsWrap span:before{position:absolute;content:"";top:0;left:0;width:100%;height:100%;border-radius:50%;background-color:#140a23;transform:scale(0, 0);transition:transform 200ms}.jobList__JobsWrap svg{min-width:30rem;max-width:30rem;min-height:30rem;max-height:30rem;color:#140a23;transform:rotate(45deg) translate(-1rem, -3rem);transition:color 400ms}.page.welcome .navigation__Inner .btn--White{display:none}.join{padding:130rem 0 115rem}.join__Wrapper{display:flex;margin:0 45rem;padding-top:50rem}@media(max-width: 900px){.join__Wrapper{flex-direction:column;align-items:center;margin:0}}.join__Card{position:relative;min-width:320rem;max-width:320rem}@media(max-width: 900px){.join__Card{margin-bottom:40rem}}.join__Card>img{width:100%;height:auto;margin-top:30rem}.join__Badge{position:absolute;top:-30rem;right:-40rem;width:130rem;height:130rem;border-radius:50%;box-shadow:5rem 4rem 33rem 0 rgba(0,0,0,.2);background-color:#ff4650}.join__Badge img:first-child{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:33rem;height:33rem}@media(max-width: 1200px){.join__Badge img:first-child{width:23rem;height:23rem}}.join__Badge img:last-child{position:absolute;top:10rem;left:10rem;width:108rem;height:108rem;transform-origin:center;animation:rotate-animation 10s infinite linear}.join__Form{max-width:630rem;min-height:340rem;margin:30rem 0 0 120rem}@media(max-width: 900px){.join__Form{max-width:initial;margin:0}}.join__Form>p{font-size:28rem;line-height:35rem}.join__Form .note{margin-top:30rem;padding-top:30rem;border-top:1px solid rgba(20,10,35,.15)}.join__Form form{margin-top:50rem}.join__Form form .textField__Wrapper,.join__Form form .fileField__Wrapper{border-color:rgba(20,10,35,.3);transition:border-color 300ms}.join__Form form label{opacity:0;transform:opacity 300ms}.join__Form form .textField.hasValue label,.join__Form form .hasValue.fileField label{opacity:1}.join__Form form .textField.hasValue input,.join__Form form .hasValue.fileField input{color:#140a23}.join__Form form .textField.hasValue .textField__Wrapper,.join__Form form .hasValue.fileField .textField__Wrapper,.join__Form form .textField.hasValue .fileField__Wrapper,.join__Form form .hasValue.fileField .fileField__Wrapper{border-color:#140a23 !important}.join__Form form.isValid .textField__Wrapper,.join__Form form.isValid .fileField__Wrapper{border-color:#140a23 !important}.join__Form form.isValid .textField__Wrapper:after,.join__Form form.isValid .fileField__Wrapper:after{opacity:1}.join__Form label{font-size:13rem;letter-spacing:2.99rem;font-weight:500;opacity:.4;text-transform:uppercase}.join__Form .textField__Wrapper,.join__Form .fileField__Wrapper{border-color:#140a23}.join__Form .textField__Wrapper:after,.join__Form .fileField__Wrapper:after{position:absolute;content:"";top:50%;right:0;width:28rem;height:23rem;transform:translateY(-50%);background:url("/.resources/images/checkmark.svg") no-repeat center/100% 100%;opacity:0;transition:opacity 200ms}.join__Form .textField__Wrapper input,.join__Form .fileField__Wrapper input{color:#140a23;opacity:1;padding-right:35rem}.join__Form .isFocused .textField__Wrapper,.join__Form .isFocused .fileField__Wrapper{border-color:#ff4650 !important}.join__FormButton{display:flex;justify-content:space-between;margin-top:45rem}@media(max-width: 518px){.join__FormButton{flex-direction:column}}.join__FormButton p{margin-right:30rem;font-size:12rem;line-height:14rem}@media(max-width: 518px){.join__FormButton p{margin-right:0;margin-bottom:30rem}}.join__FormButton a{color:#140a23;text-decoration:underline;transition:color 300ms}.join__FormButton a:hover{color:#ff4650}.join__FormButton .btn--Red{flex-grow:1;width:fit-content;border-color:rgba(0,0,0,0)}.join__FormButton .btn--Red:disabled{filter:grayscale(100%);opacity:.75;pointer-events:none}.join__Success{margin-left:100rem;max-width:630rem;min-height:340rem}@media(max-width: 900px){.join__Success{max-width:initial;margin-left:0;text-align:center}}.join__Success h2{font-size:70rem;letter-spacing:-0.7rem;line-height:68rem;font-weight:400;margin-bottom:32rem}@media(max-width: 900px){.join__Success h2{font-size:46rem;line-height:44rem}}.join__Success p{font-size:28rem;line-height:35rem}.join__ErrorTitle{font-size:70rem;line-height:68rem;letter-spacing:-0.7rem;font-weight:400;margin-bottom:40rem}@media(max-width: 900px){.join__ErrorTitle{font-size:46rem;line-height:44rem}}.join__ErrorTitle b{font-weight:400;color:#ff4650}.join__ErrorText{font-size:28rem;line-height:35rem}.join__ErrorText a{color:#140a23;transition:color 300ms}.join__ErrorText a:hover{color:red}.newsList{padding:130rem 0 0}@media(max-width: 518px){.newsList .title--Light{font-size:40rem;line-height:53rem}}.newsList__Heading{display:flex;gap:150rem}@media(max-width: 900px){.newsList__Heading{flex-direction:column;gap:32rem}}.newsList__Heading div{margin-top:18rem;max-width:545rem}.newsList__Heading p{font-size:33rem;line-height:35rem;margin-bottom:35rem}@media(max-width: 900px){.newsList__Heading p{font-size:28rem;line-height:30rem;margin-bottom:40rem}}.newsList__Heading .btn--View{color:#140a23;padding-left:25rem;text-underline-offset:15rem;letter-spacing:1.01rem;font-weight:bold}.newsList__Heading .btn--View:before{border:1px solid rgba(20,10,35,.5);transition:border-color 300ms;top:calc(50% + 5rem)}.newsList__Heading .btn--View:hover{color:#ff4650}.newsList__Heading .btn--View:hover:before{border-color:#ff4650}.newsList__Blog .newsList__Heading span{padding-left:0}.newsList__BlogList{margin-top:68rem;display:grid;grid-template-columns:repeat(3, 1fr);gap:25rem}@media(max-width: 900px){.newsList__BlogList{grid-template-columns:repeat(2, 1fr);margin-top:44rem}}@media(max-width: 518px){.newsList__BlogList{grid-template-columns:1fr;gap:30rem}}.newsList__BlogItem{padding:22rem 19rem;background-color:#f4f4f4;color:#140a23;display:flex;flex-direction:column;justify-content:space-between;transition:background-color 300ms,color 300ms}@media(max-width: 900px){.newsList__BlogItem{padding:18rem 14rem}}.newsList__BlogItem:hover{background-color:#ffe8ea;color:#ff4650}.newsList__BlogItem:hover div{border-color:#ff4650}.newsList__BlogItem img{display:block;min-width:100%;max-width:100%;height:auto;object-fit:cover;aspect-ratio:1/1}.newsList__BlogItem h2{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;margin:25rem 18rem 35rem 0;font-weight:400}@media(max-width: 900px){.newsList__BlogItem h2{font-size:28rem;letter-spacing:-0.28rem;margin-bottom:25rem}}.newsList__BlogItem div{display:flex;align-items:center;padding-top:22rem;margin-top:0;border-top:1px solid rgba(20,10,35,.15);transition:border-color 300ms}@media(max-width: 518px){.newsList__BlogItem div{padding-top:17rem}}.newsList__BlogItem span{font-size:16rem;letter-spacing:1.82rem;font-weight:600;text-transform:uppercase}@media(max-width: 518px){.newsList__BlogItem span{font-size:12rem;letter-spacing:1.56rem}}.newsList__BlogItem svg{margin-left:auto;width:30rem;height:30rem;transform:rotate(45deg)}@media(max-width: 518px){.newsList__BlogItem svg{width:35rem;height:35rem}}.newsList__BlogButton{display:flex;justify-content:center;padding:85rem 0}@media(max-width: 900px){.newsList__BlogButton{padding:69rem 0 47rem}}@media(max-width: 518px){.newsList__BlogButton{padding:100rem 0 75rem;padding:40rem 0}}.newsList__Press{background-color:#f4f4f4;padding-top:125rem}@media(max-width: 518px){.newsList__Press{padding-top:60rem}}.newsList__Press .newsList__Heading{align-items:flex-start;border-bottom:1px solid rgba(20,10,35,.15)}@media(max-width: 900px){.newsList__Press .newsList__Heading{align-items:flex-start;border-bottom:none}}@media(max-width: 900px){.newsList__Press .newsList__Heading h2{width:100%}}.newsList__Press .newsList__Heading h2 span{padding-left:0}.newsList__Press .newsList__Heading p{margin-bottom:0;max-width:548rem}.newsList__Press .newsList__Heading span{border-bottom:none}@media(max-width: 900px){.newsList__Press .newsList__Heading span{border-bottom:1px solid rgba(20,10,35,.15);text-align:left;padding-left:0}}@media(max-width: 518px){.newsList__Press .newsList__BlogButton{padding:75rem 0 75rem}}.newsList__PressList{display:flex;flex-direction:column;max-width:1100rem;margin:71rem auto 0}@media(max-width: 900px){.newsList__PressList{margin:20rem auto 0}}.newsList__PressItem{position:relative;padding:34rem 0 25rem;border-bottom:1rem solid rgba(20,10,35,.15);color:#140a23}.newsList__PressItem:hover .arrow{background-color:#140a23}.newsList__PressItem:hover svg{color:#fff}.newsList__PressItem .arrow{position:absolute;top:50%;right:0;transform:translateY(-50%);display:flex;justify-content:center;align-items:center;min-width:50rem;max-width:50rem;min-height:50rem;max-height:50rem;border-radius:50%;transition:background-color 300ms}@media(max-width: 518px){.newsList__PressItem .arrow{top:unset;transform:unset;bottom:18rem;min-width:40rem;max-width:40rem;min-height:40rem;max-height:40rem}}.newsList__PressItem svg{min-width:19rem;max-width:19rem;min-height:19rem;max-height:19rem;transform:rotate(-45deg);transition:color 300ms}@media(max-width: 518px){.newsList__PressItem svg{min-width:22rem;max-width:22rem;min-height:22rem;max-height:22rem}}.newsList__PressItem h3{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;font-weight:400;padding-right:110rem;margin-bottom:25rem}@media(max-width: 900px){.newsList__PressItem h3{font-size:28rem;letter-spacing:-0.28rem;padding-right:36rem;margin-bottom:22rem}}.newsList__PressItem div{display:flex;align-items:flex-end;width:calc(100% - 60rem)}@media(max-width: 900px){.newsList__PressItem div{flex-direction:column;align-items:initial}}.newsList__PressItem p{color:#ff4650;font-size:16rem;font-weight:600;letter-spacing:2.99rem;color:#ff4650;margin-right:13rem;text-transform:uppercase;flex-grow:0}@media(max-width: 518px){.newsList__PressItem p{font-size:12rem;letter-spacing:1.56rem;margin-bottom:3rem}}.newsList__PressItem span{font-size:16rem;font-weight:600;letter-spacing:1.69rem;text-transform:uppercase;flex-shrink:0}@media(max-width: 518px){.newsList__PressItem span{font-size:12rem;letter-spacing:1.56rem}}.partners__Hero{padding:130rem 0 0}@media(max-width: 518px){.partners__Hero h1{font-size:50rem;line-height:60rem;letter-spacing:-0.5rem}}.partners__Hero p{margin:60rem 0 0 117rem;max-width:1089rem;font-size:64rem;line-height:61rem;font-weight:400;letter-spacing:.64rem}@media(max-width: 900px){.partners__Hero p{margin:40rem 0 0 0}}@media(max-width: 518px){.partners__Hero p{font-size:38rem;line-height:42rem;letter-spacing:-0.38rem;margin-top:75rem}}.partners__Hero p b{color:#ff4650;font-weight:inherit}.partners__Hero img{display:block;width:100%;height:auto;margin-top:90rem}.partnersPage .clients{padding-top:60rem;background-color:#f4f4f4}.partnersPage .clients .category,.partnersPage .clients .testimonials__TextWrap .bullet,.testimonials__TextWrap .partnersPage .clients .bullet{margin-bottom:78rem}@media(max-width: 518px){.partnersPage .clients .category,.partnersPage .clients .testimonials__TextWrap .bullet,.testimonials__TextWrap .partnersPage .clients .bullet{margin-bottom:0}}.partnersPage .clients__Inner{margin-left:104rem}@media(max-width: 900px){.partnersPage .clients__Inner{margin-left:0}}.partnersPage .clients__Inner h2{font-size:64rem;line-height:61rem;letter-spacing:.64rem;font-weight:400}@media(max-width: 518px){.partnersPage .clients__Inner h2{font-size:38rem;line-height:42rem;letter-spacing:-0.38rem}}.partnersPage .clients__Inner p{margin:53rem 0 0 95rem;max-width:400rem;font-size:28rem;line-height:35rem}@media(max-width: 900px){.partnersPage .clients__Inner p{margin:40rem 0 0}}@media(max-width: 518px){.partnersPage .clients__Inner p{font-size:21rem;line-height:30rem}}.partnersPage .clients__Text{display:flex;gap:106rem;padding-bottom:173rem}@media(max-width: 900px){.partnersPage .clients__Text{flex-direction:column-reverse;gap:40rem;padding-bottom:40rem}}@media(max-width: 518px){.partnersPage .clients__Text{padding-bottom:70rem}}.partnersPage .clients__TextLeft{max-width:650rem;min-width:650rem}@media(max-width: 900px){.partnersPage .clients__TextLeft{max-width:initial;min-width:initial}}.partnersPage .clients__TextRight{max-width:480rem;min-width:480rem;display:flex;justify-content:center;align-items:center}@media(max-width: 900px){.partnersPage .clients__TextRight{margin:0 auto}}.partnersPage .clients__TextRight img{width:100%;height:auto;object-fit:cover}.partnersPage .clients__TextButtons{margin:53rem 0 0 95rem;display:flex;gap:16rem}@media(max-width: 900px){.partnersPage .clients__TextButtons{margin:40rem 0 0;flex-direction:column}.partnersPage .clients__TextButtons a{width:fit-content}}.partnersPage .testimonials__Wrap{overflow-x:hidden;padding-bottom:108rem}@media(min-width: 900px){.partnersPage .testimonials__Wrap .testimonials__FullWidth{min-width:calc(50vw + 560rem);max-width:calc(50vw + 560rem);margin-left:104rem}}.partnersPage .testimonials__Item{background-color:#fff}.partnersPage .testimonials__Item:before{border-color:#f4f4f4 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.partnersPage .testimonials__TextWrap blockquote p{margin:0;padding:0;max-width:100%;font-size:46rem;line-height:49rem;letter-spacing:-0.46rem;font-weight:600}@media(max-width: 518px){.partnersPage .testimonials__TextWrap blockquote p{font-size:32rem;line-height:35rem;letter-spacing:-0.32rem}}.partnersPage .testimonials__TextWrap .bullet{margin-bottom:7rem !important;padding:0 0 0 25rem;font-weight:600}.partnersPage .testimonials__TextWrap .bullet:after{top:-12rem}@media(max-width: 900px){.partnersPage .testimonials__TextWrap .bullet:after{top:-22rem}}.partnersPage .testimonials__TextWrap .bullet:before{bottom:3rem}.partnersPage .testimonials__TextWrap small{font-weight:600}.pressDetail{background-color:#f4f4f4;margin-top:109rem}@media(max-width: 900px){.pressDetail{margin-top:72rem}}.pressDetail__Hero{padding:63rem 0 39rem}@media(max-width: 900px){.pressDetail__Hero{padding:70rem 0 40rem}}.pressDetail__HeroWrap{padding:0 133rem}@media(max-width: 900px){.pressDetail__HeroWrap{padding:0}}.pressDetail__HeroWrap h1{font-size:70rem;line-height:68rem;letter-spacing:-0.7rem;margin-bottom:61rem;font-weight:500}@media(max-width: 900px){.pressDetail__HeroWrap h1{font-size:38rem;line-height:42rem;letter-spacing:-0.38rem;margin-top:27rem}}.pressDetail__HeroWrap p{position:relative;font-size:16rem;letter-spacing:1.82rem;font-weight:600;text-transform:uppercase;padding-bottom:25rem;border-bottom:1px solid #e9e7e9}@media(max-width: 518px){.pressDetail__HeroWrap p{font-size:12rem}}.pressDetail__HeroWrap span{opacity:.43;margin-right:15rem;text-transform:initial}.pressDetail__Wrapper{background-color:#fff;padding:90rem 0}@media(max-width: 900px){.pressDetail__Wrapper{padding:40rem 0 75rem}}.pressDetail__Content{padding:0 0 0 450rem}@media(max-width: 900px){.pressDetail__Content{padding:0}}.pressDetail__Content h2{font-size:46rem;line-height:46rem;letter-spacing:-0.46rem;margin-bottom:20rem}@media(max-width: 900px){.pressDetail__Content h2{font-size:28rem;line-height:30rem;letter-spacing:-0.28rem;margin-bottom:25rem}}.pressDetail__Content h3{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;margin-bottom:20rem}@media(max-width: 900px){.pressDetail__Content h3{font-size:28rem;line-height:30rem;letter-spacing:-0.28rem;margin-bottom:25rem}}.pressDetail__Content p{font-size:21rem;line-height:33rem}@media(max-width: 900px){.pressDetail__Content p{line-height:30rem}}.pressDetail__Content p+p{margin-top:35rem}@media(max-width: 900px){.pressDetail__Content p+p{margin-top:25rem}}.pressDetail__Content p+h3{margin-top:50px}@media(max-width: 900px){.pressDetail__Content p+h3{margin-top:40px}}.pressDetail__Content .lead{max-width:710rem}@media(max-width: 900px){.pressDetail__Content .lead{max-width:100%}}.pressDetail__Content .lead p{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;margin-bottom:108rem}@media(max-width: 900px){.pressDetail__Content .lead p{font-size:28rem;line-height:30rem;letter-spacing:-0.28rem;margin-bottom:75rem}}.pressDetail__Content a{color:#140a23;transition:color 300ms;text-decoration:underline}.pressDetail__Content a:hover{color:#ff4650}.pressDetail__ContentInner{max-width:670rem}@media(max-width: 900px){.pressDetail__ContentInner{max-width:100%}}.pressDetail__Related h2{text-align:center;font-size:70rem;line-height:68rem;letter-spacing:.7rem;font-weight:500;padding:15rem 0 90rem}@media(max-width: 900px){.pressDetail__Related h2{font-size:38rem;line-height:42rem;letter-spacing:-0.38rem;padding:45rem 0}}.pressDetail__Related .newsList__PressList{padding-bottom:105rem}.pressDetail__BreadcrumbsWrap{background-color:#fff;padding:45rem 0 60rem}.pressDetail__BreadcrumbsWrap .blogDetail__Breadcrumbs{margin-top:0}.pricingPage{background-color:#140a23}.pricing__Hero{color:#fff;padding:130rem 0 16rem}@media(max-width: 518px){.pricing__Hero h1{font-size:50rem;line-height:60rem;letter-spacing:-0.5rem}}.pricing__Hero h2{max-width:1090rem;font-weight:400;font-size:64rem;line-height:64rem;letter-spacing:.64rem;margin:90rem 0 0}@media(max-width: 518px){.pricing__Hero h2{font-size:38rem;line-height:42rem;letter-spacing:-0.38rem;margin-top:55rem}}.pricing__Hero h2 b{color:#ff4650;font-weight:inherit}.pricingPage .card__Small{background-color:#fff;margin-top:0}.pricingPage .costControl{padding-bottom:185rem}@media(max-width: 900px){.pricingPage .costControl{padding-top:100rem;padding-bottom:125rem}}.pricingPage .costControl__Numbers p{font-size:28rem;line-height:35rem;max-width:400rem}@media(max-width: 900px){.pricingPage .costControl__Numbers p{font-size:21rem;line-height:28rem}}@media(min-width: 900px){.pricingPage .testimonials__Slider{margin-left:100rem}}.privacy p a{color:#140a23;transition:color 300ms}.privacy p a:hover{color:#ff4650}.privacy a{color:#140a23;transition:color 300ms}.privacy a:hover{color:#ff4650}.privacy .sections__Text h3{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem}@media(max-width: 900px){.privacy .sections__Text h3{font-size:28rem;line-height:30rem;letter-spacing:-0.28rem;margin-bottom:25rem}}@media(max-width: 900px){.privacy .sections__Text h2{margin-bottom:45rem}}.privacy .sections__Text section+section{margin-top:65rem}@media(max-width: 900px){.privacy .sections__Text section+section{margin-top:45rem}}.privacy .sections__Content+h3,.privacy .sections__Content+h2{margin-top:65rem}@media(max-width: 900px){.privacy .sections__Content+h3,.privacy .sections__Content+h2{margin-top:45rem}}@media(max-width: 900px){.privacy .sections{padding-top:0}}.privacy .sections__Sidebar a{text-transform:uppercase}.privacy__LeadWrap{background-color:#fff;padding:100rem 80rem 0;margin-bottom:-25rem}@media(max-width: 900px){.privacy__LeadWrap{padding:40rem 0 30rem}}@media(max-width: 518px){.privacy__LeadWrap{padding-bottom:95rem}}.privacy__LeadWrap h1,.privacy__LeadWrap h2{margin-left:475rem;max-width:680rem;padding-top:100rem;font-weight:400;font-size:70rem;line-height:70rem;margin-bottom:70rem}@media(max-width: 900px){.privacy__LeadWrap h1,.privacy__LeadWrap h2{margin-left:0;max-width:100%}}@media(max-width: 518px){.privacy__LeadWrap h1,.privacy__LeadWrap h2{font-size:50rem;line-height:58rem;padding-top:60rem;margin-bottom:30rem}}.privacy__LeadWrap h1{margin-bottom:75rem}@media(max-width: 518px){.privacy__LeadWrap h1{margin-bottom:30rem}}.supportPage{background-color:#140a23}.support__Hero{color:#fff;padding:130rem 0 0}@media(max-width: 518px){.support__Hero h1{font-size:50rem;line-height:60rem;letter-spacing:-0.5rem}}.support__HeroForm{margin:90rem 0 0 93rem;padding-bottom:113rem;color:#fff}@media(max-width: 900px){.support__HeroForm{margin:90rem 0 0}}@media(max-width: 518px){.support__HeroForm{margin:44rem 0 0;padding-bottom:47rem}}.support__HeroForm h2{max-width:1090rem;font-weight:400;font-size:64rem;line-height:64rem;letter-spacing:.64rem}@media(max-width: 518px){.support__HeroForm h2{font-size:38rem;line-height:42rem;letter-spacing:-0.38rem}}.support__HeroForm h2 b{color:#ff4650;font-weight:inherit}.support__HeroForm form{margin:100rem 0 0 89rem;max-width:630rem}@media(max-width: 900px){.support__HeroForm form{margin:100rem 0 0}}@media(max-width: 518px){.support__HeroForm form{margin:79rem 0 0}}.support__HeroForm form.isValid .textField__Wrapper:after,.support__HeroForm form.isValid .fileField__Wrapper:after{width:28rem;height:28rem;background:url("/.resources/images/checkmark-white.svg") no-repeat center/100% 100%}.support__HeroForm .form__Privacy p{color:#fff;font-size:12rem}.support__HeroForm .form__Privacy a{text-decoration:underline}.support__HeroForm .form__Privacy button{font-weight:600;font-size:12rem}.support__HeroForm .form__Privacy button:disabled{background-color:#9a9a9a;pointer-events:none;color:#fff}.support__HeroForm .form__Privacy button:disabled span:before{background-color:#4a4a4a}@media(max-width: 900px){.support__HeroForm .form__Privacy{flex-direction:row;gap:15rem}}.support__HeroForm .textField__Wrapper:after,.support__HeroForm .fileField__Wrapper:after{position:absolute;content:"";right:0;bottom:10rem;width:28rem;height:28rem;background:url("/.resources/images/icon-email.svg") no-repeat center/100% 100%;transition:opacity 200ms}.support__HeroForm .textareaField__Wrapper ::-webkit-resizer{display:none}.support__HeroForm .textareaField__Wrapper:after{position:absolute;content:"";right:0;bottom:10rem;width:28rem;height:28rem;background:url("/.resources/images/icon-textarea.svg") no-repeat center/100% 100%;transition:opacity 200ms;pointer-events:none}.support__HeroForm .footer__FormSuccess{justify-content:initial;margin:100rem 0 0 89rem;max-width:630rem}@media(max-width: 900px){.support__HeroForm .footer__FormSuccess{margin:100rem 0 0}}@media(max-width: 518px){.support__HeroForm .footer__FormSuccess{margin:79rem 0 0}}.support__Business{padding:47rem 0 78rem;background-color:#fff}@media(max-width: 900px){.support__Business .category,.support__Business .testimonials__TextWrap .bullet,.testimonials__TextWrap .support__Business .bullet{margin-bottom:60rem}}.support__BusinessWrap{display:flex;gap:100rem;margin-left:93rem}@media(max-width: 900px){.support__BusinessWrap{flex-direction:column-reverse;gap:0;margin-left:0}}.support__BusinessWrap h2{font-size:64rem;line-height:61rem;letter-spacing:.64rem;font-weight:500}@media(max-width: 900px){.support__BusinessWrap h2{margin-top:71rem}}@media(max-width: 518px){.support__BusinessWrap h2{font-size:38rem;line-height:42rem;letter-spacing:.38rem}}.support__BusinessWrap p{font-size:28rem;line-height:35rem;margin:40rem 0 0 95rem;max-width:430rem}@media(max-width: 900px){.support__BusinessWrap p{margin:23rem 0 0;max-width:100%}}@media(max-width: 518px){.support__BusinessWrap p{font-size:21rem;line-height:30rem}}.support__BusinessWrap .btn--White{margin:40rem 0 0 95rem;width:fit-content}@media(max-width: 900px){.support__BusinessWrap .btn--White{margin:40rem 0 0}}.support__BusinessPhoneWrapper{min-width:536rem;max-width:536rem;display:flex;justify-content:center;align-self:center;max-height:483rem}@media(max-width: 900px){.support__BusinessPhoneWrapper{min-width:unset;max-width:unset;max-height:unset}}.support__BusinessPhoneWrapper img{display:block;min-width:257rem;max-width:257rem;height:auto}.support__Faq{background-color:#f4f4f4;padding:60rem 0 85rem}@media(max-width: 900px){.support__Faq .category,.support__Faq .testimonials__TextWrap .bullet,.testimonials__TextWrap .support__Faq .bullet{margin-bottom:42rem}}.support__Faq h2{margin:0 0 0 93rem;font-size:64rem;line-height:61rem;letter-spacing:.64rem;font-weight:500}@media(max-width: 900px){.support__Faq h2{margin:0}}.support__FaqWrapper{margin:60rem 0 0 240rem}@media(max-width: 900px){.support__FaqWrapper{margin:49rem 0 0}}@media(max-width: 518px){.support__FaqWrapper{margin:70rem 0 0}}.faqItem{cursor:pointer;border-bottom:1px solid rgba(20,10,35,.15);padding-bottom:52rem;counter-increment:faq-counter;margin-left:37rem}@media(max-width: 900px){.faqItem{margin-left:0;padding-bottom:27rem}}.faqItem p{font-size:28rem;line-height:35rem;margin-top:68rem;max-width:740rem}@media(max-width: 900px){.faqItem p{margin-top:30rem}}@media(max-width: 518px){.faqItem p{font-size:21rem;line-height:30rem}}.faqItem.isActive .faqItem__Title h3{opacity:1}.faqItem.isActive .faqItem__Title span{background-color:#140a23}.faqItem.isActive .faqItem__Title svg{transform:rotate(0);color:#fff}.faqItem+.faqItem{margin-top:35rem}.faqItem__Title{position:relative;display:flex;justify-content:space-between}.faqItem__Title:before{content:counter(faq-counter, decimal-leading-zero);position:absolute;left:-37rem;top:7rem;display:block;color:#ff4650;font-size:13rem;letter-spacing:2.99rem;font-weight:600}@media(max-width: 900px){.faqItem__Title:before{position:relative;left:0;margin-right:15rem}}.faqItem__Title h3{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;font-weight:400;padding-right:50rem;opacity:.34;transition:opacity 300ms}@media(max-width: 518px){.faqItem__Title h3{font-size:28rem;letter-spacing:-0.28rem}}.faqItem__Title span{display:flex;justify-content:center;align-items:center;min-width:50rem;max-width:50rem;min-height:50rem;max-height:50rem;border-radius:50%;background-color:rgba(0,0,0,0);transition:background-color 300ms}.faqItem__Title svg{min-width:19rem;max-width:19rem;min-height:19rem;max-height:19rem;transition:transform 300ms,color 300ms;transform:rotate(180deg)}.home .card__Small{margin-top:-350rem}@media(max-width: 900px){.home .card__Small{margin-top:0}}.card__Small{position:relative;z-index:20;padding:120rem 0 40rem}@media(max-width: 518px){.card__Small{padding:50rem 0}}.card__Small h2{font-size:64rem;line-height:61rem;font-weight:400;max-width:750rem;margin-bottom:85rem;padding-left:100rem;transition:color 600ms}@media(max-width: 900px){.card__Small h2{padding-left:0}}@media(max-width: 518px){.card__Small h2{font-size:42rem;line-height:42rem;margin-bottom:50rem}}.card__Small .btn--White{width:fit-content;margin:50rem auto 0}.card__SmallItems{display:flex;grid-gap:50rem;overflow-x:scroll;scroll-snap-type:x mandatory;padding-bottom:15rem;scrollbar-width:none}.card__SmallItems::-webkit-scrollbar{display:none}.card__SmallItems .card__SmallItem{position:relative;padding:35rem 40rem 75rem;cursor:default;background-color:#f4f4f4;display:flex;flex-direction:column;color:#140a23;width:33.3333333333%;min-width:415rem;scroll-snap-align:start;transition:color 300ms,background-color 300ms}@media(max-width: 518px){.card__SmallItems .card__SmallItem{padding:25rem 30rem;min-width:355rem}}.card__SmallItems .card__SmallItem:before{position:absolute;content:"";top:0;left:0;width:0;height:0;border-style:solid;border-width:101rem 101rem 0 0;border-color:#fff rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);transition:border-color 600ms}.card__SmallItems .card__SmallItem:hover{background-color:#ff4650;color:#fff}.card__SmallItems .card__SmallItem:hover .category:before,.card__SmallItems .card__SmallItem:hover .testimonials__TextWrap .bullet:before,.testimonials__TextWrap .card__SmallItems .card__SmallItem:hover .bullet:before{background-color:#140a23}.card__SmallItems .card__SmallItem:hover svg{color:#fff}.card__SmallItems .card__SmallItem .card__SmallItemIcon{align-self:flex-end;margin-bottom:130rem;min-width:77rem;max-width:77rem;min-height:77rem;max-height:77rem}@media(max-width: 518px){.card__SmallItems .card__SmallItem .card__SmallItemIcon{min-width:55rem;max-width:55rem;min-height:55rem;max-height:55rem}}.card__SmallItems .card__SmallItem svg{color:#ff4650;min-width:77rem;max-width:77rem;min-height:77rem;max-height:77rem}@media(max-width: 518px){.card__SmallItems .card__SmallItem svg{min-width:55rem;max-width:55rem;min-height:55rem;max-height:55rem}}.card__SmallItems .card__SmallItem .category,.card__SmallItems .card__SmallItem .testimonials__TextWrap .bullet,.testimonials__TextWrap .card__SmallItems .card__SmallItem .bullet{margin-bottom:35rem}.card__SmallItems .card__SmallItem h3{font-size:46rem;line-height:50rem;margin-bottom:25rem;font-weight:600}@media(max-width: 518px){.card__SmallItems .card__SmallItem h3{font-size:34rem;line-height:34rem}}.card__SmallItems .card__SmallItem p{font-size:28rem;line-height:35rem}@media(max-width: 900px){.card__SmallItems .card__SmallItem p{font-size:21rem;line-height:28rem}}.card__SmallItems .category:after,.card__SmallItems .testimonials__TextWrap .bullet:after,.testimonials__TextWrap .card__SmallItems .bullet:after{width:calc(100% + 40rem)}@media(max-width: 518px){.card__SmallItems .category:after,.card__SmallItems .testimonials__TextWrap .bullet:after,.testimonials__TextWrap .card__SmallItems .bullet:after{width:calc(100% + 30rem)}}.card__Register{padding:115rem 0 85rem;background-color:#fff}@media(max-width: 900px){.card__Register{padding-top:60rem}}@media(max-width: 518px){.card__Register{padding-bottom:50rem}}.card__Register .btn--Red{width:fit-content;margin:50rem auto 0}@media(min-width: 900px){.card__Register.de h2{font-size:150rem;line-height:142rem}}.card__RegisterItems{position:relative;display:flex;grid-gap:70rem;overflow-x:auto;scroll-snap-type:x mandatory;scroll-snap-align:center;padding-bottom:15rem;margin-top:35rem;scrollbar-width:none}.card__RegisterItems::-webkit-scrollbar{display:none}.card__RegisterItem{position:relative;display:flex;flex-direction:column;padding:35rem 25rem 50rem;background-color:#f4f4f4;width:33.3333333333%;min-width:320rem;min-height:400rem;transition:background-color 200ms;color:#140a23;scroll-snap-align:start}@media(max-width: 518px){.card__RegisterItem{padding-bottom:45rem}}.card__RegisterItem:before{position:absolute;content:"";top:0;left:-1rem;width:0;height:0;border-style:solid;border-width:100rem 100rem 0 0;border-color:#fff rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.card__RegisterItem:hover{background-color:#ff4650;color:#fff}.card__RegisterItem:hover .category:before,.card__RegisterItem:hover .testimonials__TextWrap .bullet:before,.testimonials__TextWrap .card__RegisterItem:hover .bullet:before{background-color:#140a23}.card__RegisterItem:hover svg{color:#fff}.card__RegisterItem .card__RegisterItemIcon{width:100%;max-width:85rem;max-height:85rem;align-self:flex-end;margin-bottom:50rem}.card__RegisterItem svg{color:#ff4650;transition:color 200ms}.card__RegisterItem .category,.card__RegisterItem .testimonials__TextWrap .bullet,.testimonials__TextWrap .card__RegisterItem .bullet{margin-bottom:15rem;transition:border-color 200ms,color 200ms}.card__RegisterItem .category:before,.card__RegisterItem .testimonials__TextWrap .bullet:before,.testimonials__TextWrap .card__RegisterItem .bullet:before{transition:background-color 200ms}.card__RegisterItem .category:after,.card__RegisterItem .testimonials__TextWrap .bullet:after,.testimonials__TextWrap .card__RegisterItem .bullet:after{width:calc(100% + 25rem)}.card__RegisterItem h3{font-size:28rem;line-height:35rem;font-weight:400;transition:color 200ms}@media(max-width: 518px){.card__RegisterItem h3{font-size:21rem;line-height:30rem}}.changingImages{position:relative;background-color:#f4f4f4;padding:20rem 0 90rem}.changingImages .category,.changingImages .testimonials__TextWrap .bullet,.testimonials__TextWrap .changingImages .bullet{margin-bottom:0}@media(max-width: 1200px){.changingImages .category,.changingImages .testimonials__TextWrap .bullet,.testimonials__TextWrap .changingImages .bullet{margin-left:0;padding-top:50rem}}@media(max-width: 900px){.changingImages .category,.changingImages .testimonials__TextWrap .bullet,.testimonials__TextWrap .changingImages .bullet{padding-top:0}.changingImages .category img,.changingImages .testimonials__TextWrap .bullet img,.testimonials__TextWrap .changingImages .bullet img{max-width:71rem}}.changingImages__Wrapper{position:relative;padding-bottom:70rem}@media(max-width: 518px){.changingImages__Wrapper{padding:40rem 0}}.changingImages__Wrapper h2{margin-top:81rem;font-size:46rem;line-height:51rem;font-weight:600}@media(max-width: 1200px){.changingImages__Wrapper h2{max-width:initial;padding:0;margin:44rem 0 50rem;text-align:center}}@media(max-width: 518px){.changingImages__Wrapper h2{text-align:left;font-size:34rem;line-height:34rem;font-weight:600}}.changingImages__Wrapper h2.changingImages__TitleWide{max-width:1130rem;font-size:64rem;line-height:61rem;letter-spacing:-0.64rem;margin-bottom:30rem;padding-left:115rem}@media(max-width: 1200px){.changingImages__Wrapper h2.changingImages__TitleWide{text-align:left;padding-left:0}}@media(max-width: 900px){.changingImages__Wrapper h2.changingImages__TitleWide{font-size:40rem;line-height:41rem;letter-spacing:-0.4rem}}@media(max-width: 518px){.changingImages__Wrapper h2.changingImages__TitleWide{margin-bottom:75rem;font-size:28rem;line-height:-0.28rem;font-weight:600}}.changingImages__Wrapper h2 b{color:#ff4650;font-weight:inherit}.changingImages__TitleDesktop{display:none}@media(max-width: 1200px){.changingImages__TitleDesktop{display:block}}.changingImages__Button{display:flex;justify-content:center;align-items:center;gap:21rem;flex-direction:column}@media(min-width: 900px){.changingImages__Button{flex-direction:row}}.changingImages__Button.isPrivacy{justify-content:initial;margin-left:calc(50% + 50rem)}@media(max-width: 1200px){.changingImages__Button.isPrivacy{margin-left:0;justify-content:center}}.changingImages__Button.isCustomer{justify-content:initial;margin-left:calc(50% + 13rem)}@media(max-width: 1200px){.changingImages__Button.isCustomer{justify-content:center;margin:0 auto;align-items:flex-start;width:fit-content}}.changingImages__Button.isFeatures{justify-content:initial;margin-left:calc(50% + 40rem)}@media(max-width: 1440px){.changingImages__Button.isFeatures{margin-left:50%}}@media(max-width: 1200px){.changingImages__Button.isFeatures{margin-left:0;justify-content:center}}.changingImages__Inner{display:flex}@media(max-width: 1200px){.changingImages__Inner{flex-direction:column}}.changingImages__Carousel{position:relative;align-self:flex-end;width:50%;margin-left:70rem;transform:translateY(60rem)}@media(max-width: 1440px){.changingImages__Carousel{margin-left:0}}@media(max-width: 1200px){.changingImages__Carousel{transform:initial;align-self:center;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:50rem;margin-top:0;width:100%}}.changingImages__Carousel img{min-width:560rem;max-width:560rem;min-height:369rem;max-height:369rem}@media(max-width: 518px){.changingImages__Carousel img{min-width:520rem;max-width:520rem;min-height:329rem;max-height:329rem}}.changingImages__Images{position:absolute;top:0;left:0}@media(max-width: 1200px){.changingImages__Images{top:initial;left:50%;bottom:0;transform:translateX(-50%);min-width:560rem;max-width:560rem;min-height:369rem;max-height:369rem}}@media(max-width: 518px){.changingImages__Images{min-width:520rem;max-width:520rem;min-height:329rem;max-height:329rem}}.changingImages__Images img{position:absolute;top:15rem;left:80rem;min-width:396rem;max-width:396rem;min-height:276rem;max-height:276rem;opacity:0;transition:opacity 200ms}@media(max-width: 1200px){.changingImages__Images img{top:initial;bottom:70rem;left:50%;transform:translateX(-50%)}}@media(max-width: 518px){.changingImages__Images img{min-width:356rem;max-width:356rem;min-height:246rem;max-height:246rem;bottom:62rem}}.changingImages__Images img.isActive{opacity:1}.changingImages__Text{display:flex;flex-direction:column;justify-content:flex-end;width:50%}@media(max-width: 1200px){.changingImages__Text{width:100%;justify-content:center;align-items:center}}@media(max-width: 1200px){.changingImages__Text h2{display:none}}.changingImages__Text .category:after,.changingImages__Text .testimonials__TextWrap .bullet:after,.testimonials__TextWrap .changingImages__Text .bullet:after{width:calc(100% + 40rem)}.changingImages__Text .category img,.changingImages__Text .testimonials__TextWrap .bullet img,.testimonials__TextWrap .changingImages__Text .bullet img{width:100%;max-width:64rem;transform:translateY(15rem)}.changingImages__Text ul{margin-top:75rem}@media(max-width: 1200px){.changingImages__Text ul{margin:0}}.changingImages__Text li{font-size:28rem;line-height:35rem;margin-bottom:20rem;transition:color 200ms;cursor:pointer}.changingImages__Text li:hover{color:#ff4650}.changingImages__Text li:before{transition:opacity 200ms}.changingImages__Text li:last-child{margin-bottom:0}.changingImages__Text li.isActive{color:#ff4650}.changingImages__Text li.isActive:before{opacity:0}.changingImages__Text li.isActive span{opacity:1}.changingImages__Text li.isActive span:before{transform:scaleX(1)}@media(max-width: 900px){.changingImages__Text li.isActive span:before{transform:scaleY(1)}}.changingImages__Text li span{position:absolute;top:50%;left:-110rem;transform:translateY(-50%);width:140rem;height:2rem;background-color:#e9e7e9;opacity:0;transition:opacity 200ms}@media(max-width: 900px){.changingImages__Text li span{width:2rem;height:100%;left:10rem}}.changingImages__Text li span:before{position:absolute;content:"";width:100%;height:100%;background-color:#ff4650;transform:scaleX(0);transform-origin:0 0;transition:transform 4000ms}@media(max-width: 900px){.changingImages__Text li span:before{transform:scaleY(0)}}.pricingPage .changingImages{padding-top:55rem}.pricingPage .changingImages__Wrapper .category img,.pricingPage .changingImages__Wrapper .testimonials__TextWrap .bullet img,.testimonials__TextWrap .pricingPage .changingImages__Wrapper .bullet img{display:none}.features .changingImages{padding-top:55rem}@media(max-width: 1200px){.features .category,.features .testimonials__TextWrap .bullet,.testimonials__TextWrap .features .bullet{padding-top:0}}@media(max-width: 900px){.features .changingImages__Wrapper{padding-top:0}}.costControl{z-index:10;padding:55rem 0 125rem;background-color:#140a23;color:#fff;margin-top:-1rem}@media(max-width: 518px){.costControl{padding-bottom:55rem}}.costControl h2{position:relative;font-size:64rem;line-height:61rem;font-weight:400;max-width:612rem;padding-bottom:84rem}.costControl h2:after{position:absolute;content:"";display:block;left:0;bottom:0;width:calc(100% - 133rem);height:100%;border-bottom:1px solid rgba(255,255,255,.15)}@media(max-width: 900px){.costControl h2:after{content:none}}@media(max-width: 900px){.costControl h2{font-size:42rem;line-height:42rem}}@media(max-width: 518px){.costControl h2{margin-bottom:20rem;padding-bottom:0}}.costControl__Numbers{display:flex;align-items:flex-start;justify-content:space-between;padding-top:52rem}@media(max-width: 900px){.costControl__Numbers{flex-direction:column;border-top:1px solid rgba(255,255,255,.15)}}@media(max-width: 518px){.costControl__Numbers{padding-top:15rem}}.costControl__Numbers .costControl__Roller{position:relative}.costControl__Numbers .costControl__From{position:absolute;top:-72rem;left:10rem;font-size:28rem;line-height:35rem}@media(max-width: 900px){.costControl__Numbers .costControl__From{position:relative;display:block;left:initial;top:initial;margin-bottom:75rem;margin-top:-75rem;font-size:22rem;line-height:27rem}}.costControl__Numbers p{font-size:21rem;line-height:30rem;max-width:440rem}@media(max-width: 1200px){.costControl__Numbers p{margin-bottom:50rem}}@media(max-width: 900px){.costControl__Numbers p{font-size:16rem;line-height:25rem;margin-bottom:100rem;min-width:400rem;max-width:400rem}}.costControl__Numbers h3{font-size:160rem;line-height:152rem;font-weight:500;display:flex;align-items:center;margin-top:-70rem}@media(max-width: 1200px){.costControl__Numbers h3{margin-top:-35rem}}@media(max-width: 900px){.costControl__Numbers h3{font-size:75rem;line-height:75rem;margin-top:-90rem}}.costControl__Numbers h3 span{color:#ff4650;display:flex;line-height:230rem}@media(max-width: 900px){.costControl__Numbers h3 span{line-height:110rem}}.costControl__Numbers h3 ul{all:unset}.costControl__Numbers h3 li{all:unset}.costControl__Numbers h3 li:before{content:none}.costControl__Numbers .button__Wrapper{margin-top:35rem;display:flex;justify-content:flex-start;margin-left:2rem;margin-right:60rem;gap:21rem}@media(max-width: 900px){.costControl__Numbers .button__Wrapper{margin-right:0;margin-left:0;justify-content:flex-start}.costControl__Numbers .button__Wrapper span{padding:20rem}}@media(max-width: 518px){.costControl__Numbers .button__Wrapper{flex-direction:column;gap:30rem}}.costControl__Numbers .roller__wrapper>ul{text-align:right}.customCursor{position:fixed;z-index:1000000;transition:opacity 200ms;pointer-events:none}@media(max-width: 900px){.customCursor{display:none}}.customCursor.isInactive,.customCursor.isHidden{opacity:0}.customCursor.isReadMore .customCursor__Circle,.customCursor.isDrag .customCursor__Circle{opacity:1;transform:translate(-50%, -50%)}.customCursor.isDrag .customCursor__Circle img{position:absolute;top:calc(50% - 7rem)}.customCursor.isDrag .customCursor__Circle img:first-of-type{left:10rem;transform:translateY(-50%) rotate(180deg)}.customCursor.isDrag .customCursor__Circle img:last-of-type{right:10rem;transform:translateY(-50%)}.customCursor__Block{position:fixed;top:0;left:0}.customCursor__Circle{width:120rem;height:120rem;background-color:rgba(40,20,40,.25);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border-radius:50%;display:flex;padding:10rem;align-items:center;justify-content:center;flex-direction:column;transform:translate(-50%, -50%)}.customCursor__Circle.isDrag:before,.customCursor__Circle.isDrag:after{position:absolute;content:"";top:50%;transform:translateY(-50%);width:0;height:0;border-style:solid}.customCursor__Circle.isDrag:before{left:-15rem;border-width:8rem 10rem 8rem 0;border-color:rgba(0,0,0,0) #140a23 rgba(0,0,0,0) rgba(0,0,0,0)}.customCursor__Circle.isDrag:after{right:-15rem;border-width:8rem 0 8rem 10rem;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #140a23}.customCursor__Circle span{color:#fff !important;text-align:center;font-size:24rem;font-weight:400}.customCursor__Circle img{margin-top:6rem;max-width:18rem}footer{position:relative;padding:55rem 0 40rem;background-color:#140a23;color:#fff}footer .container,footer .container--Mid{position:relative}.footer__Logo svg{width:100%;max-width:125rem;min-width:125rem;height:auto;object-fit:cover;color:#fff}.footer__Top{position:relative;display:flex}@media(max-width: 1200px){.footer__Top{flex-direction:column}}.footer__Top .category,.footer__Top .testimonials__TextWrap .bullet,.testimonials__TextWrap .footer__Top .bullet{flex-grow:1;max-width:650rem;margin-bottom:30rem}@media(max-width: 1200px){.footer__Top .category,.footer__Top .testimonials__TextWrap .bullet,.testimonials__TextWrap .footer__Top .bullet{margin-left:0;margin-top:65rem;max-width:100%}}.footer__Top .category:after,.footer__Top .testimonials__TextWrap .bullet:after,.testimonials__TextWrap .footer__Top .bullet:after{background-color:rgba(255,255,255,.2)}.footer__Top .category:before,.footer__Top .testimonials__TextWrap .bullet:before,.testimonials__TextWrap .footer__Top .bullet:before{top:3rem;bottom:0}.footer__Top>div{flex-grow:1}.footer__Right{margin-left:330rem}@media(max-width: 1200px){.footer__Right{margin-left:0}}.footer__FormWrapper{display:flex;justify-content:space-between}@media(max-width: 900px){.footer__FormWrapper{margin-left:0;flex-direction:column}}.footer__FormWrapper form{max-width:650rem;min-width:650rem}@media(max-width: 1200px){.footer__FormWrapper form{max-width:100%;min-width:unset}}.footer__FormWrapper form.isValid .textField__Wrapper:after,.footer__FormWrapper form.isValid .fileField__Wrapper:after{width:28rem;height:28rem;background:url("/.resources/images/checkmark-white.svg") no-repeat center/100% 100%}.footer__FormWrapper form.isValid .btn--Black{background-color:#fff;color:#140a23}.footer__FormWrapper .textField__Wrapper:after,.footer__FormWrapper .fileField__Wrapper:after{position:absolute;content:"";top:50%;right:0;transform:translateY(-50%);width:28rem;height:28rem;background:url("/.resources/images/icon-email.svg") no-repeat center/100% 100%;transition:opacity 200ms}.form__Privacy{display:flex;justify-content:space-between;align-items:center;gap:40rem}@media(max-width: 900px){.form__Privacy{flex-direction:column;align-items:flex-start;gap:0}}.form__Privacy p{font-size:14rem;line-height:18rem;color:#858087;font-weight:400}@media(max-width: 900px){.form__Privacy p{margin-bottom:35rem}}.form__Privacy a{color:#fff;transition:color 200ms}.form__Privacy a:hover{color:#ff4650}.form__Privacy .btn--Black{padding-right:0;cursor:pointer;background-color:rgba(0,0,0,0);transition:background-color 300ms,color 300ms;font-size:12rem;font-weight:600}.form__Privacy .btn--Black:hover{background-color:#fff;color:#140a23}.form__Privacy .btn--Black:disabled{pointer-events:none}.footer__Bottom{display:flex;justify-content:space-between;align-items:center;margin-top:47rem;padding-top:36rem;border-top:1px solid rgba(255,255,255,.15)}@media(max-width: 900px){.footer__Bottom{margin-top:20rem}}@media(max-width: 768px){.footer__Bottom{margin-top:60rem;padding-top:60rem;flex-direction:column;align-items:flex-start}}.footer__Bottom div{display:flex;grid-gap:28rem}@media(max-width: 768px){.footer__Bottom div{flex-direction:column;grid-gap:0}}.footer__Bottom div a{color:#fff;transition:color 200ms;font-size:14rem;line-height:18rem}@media(max-width: 768px){.footer__Bottom div a{line-height:26rem}}.footer__Bottom div a:hover{color:#ff4650}@media(max-width: 768px){.footer__Bottom div button#ot-sdk-btn{line-height:26rem !important}}.footer__Bottom p{font-size:33rem;line-height:50rem}@media(max-width: 900px){.footer__Bottom p{font-size:28rem;line-height:38rem}}@media(max-width: 768px){.footer__Bottom p{font-size:20rem;line-height:28rem;margin:2rem 0 0}}.btn--scrollTop{position:absolute;z-index:20;top:25rem;right:0;width:50rem;height:50rem;border-radius:50%;font-size:0;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,0);border:1px solid rgba(255,255,255,.25);cursor:pointer;transition:background-color 200ms}@media(max-width: 900px){.btn--scrollTop{top:-12rem}}.btn--scrollTop:hover{background-color:#fff}.btn--scrollTop:hover svg{color:#1c0e1c}.btn--scrollTop svg{width:25rem;height:25rem;color:#fff;transform:translateY(-3rem);transition:color 200ms}.footer__Navigation{margin-top:74rem;display:flex;justify-content:space-between}@media(max-width: 900px){.footer__Navigation{flex-direction:column;margin-top:40rem;border-top:1px solid rgba(255,255,255,.2);padding-top:20rem}}.footer__Navigation li{padding:0;margin:0;width:50%}@media(max-width: 900px){.footer__Navigation li{width:100%}}.footer__Navigation li:before{content:none}.footer__Navigation ul{display:flex;flex-wrap:wrap;justify-content:space-between;flex-grow:1}@media(max-width: 900px){.footer__Navigation ul{flex-direction:column}}.footer__Navigation ul a{display:block;font-size:33rem;letter-spacing:-0.66rem;line-height:38rem;color:#fff;transition:color 200ms;padding:10rem 0}.footer__Navigation ul a:hover{color:#ff4650}.footer__Social{display:flex;flex-direction:column;margin:20rem 0 0}@media(max-width: 900px){.footer__Social{margin:35rem 0 0}}.footer__Social a{font-size:14rem;line-height:26rem;transition:color 200ms;color:#fff;text-align:right}@media(max-width: 900px){.footer__Social a{text-align:left}}.footer__Social a:hover{color:#ff4650}.footer__FormSuccess{font-size:33rem;line-height:50rem;min-height:150rem;display:flex;justify-content:center;align-items:center}.footer__FormSuccess a{color:#fff;transform:color 300ms}.footer__FormSuccess a:hover{color:#ff4650}#ot-sdk-btn{all:unset !important;color:#fff !important;transition:color 200ms !important;font-size:14rem !important;background:none !important;border:none !important;padding:0 !important;line-height:18rem !important;cursor:pointer !important}#ot-sdk-btn:hover{color:#ff4650 !important}.loading{position:fixed;top:0;left:0;right:0;bottom:0;font-size:0;z-index:100000;pointer-events:none}.loading:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background-color:#ff4650;height:100vh;z-index:100;pointer-events:none;transform:scaleX(0);transform-origin:0 50%;transition:transform 350ms}.loading.isLoading:before{transform-origin:100% 50%;transform:scaleX(1)}.mobilePhone{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#140a23;border-radius:54rem;border:10rem solid #fff;min-width:295rem;max-width:295rem;min-height:584rem;max-height:584rem;box-shadow:-21rem 4rem 30rem 0 rgba(0,0,0,.2)}@media(max-width: 518px){.mobilePhone{min-width:214rem;max-width:214rem;min-height:416rem;max-height:416rem;border-radius:34rem}}.mobilePhone div{position:absolute;top:35rem;left:25rem;min-width:28rem;max-width:28rem}.mobilePhone div span{display:block;background-color:#fff;width:100%;height:2rem;border-radius:2rem;margin-bottom:8rem}.mobilePhone div span:last-child{width:19rem}.navigation{padding:15rem 0;position:fixed;left:0;top:0;right:0;background-color:rgba(0,0,0,0);transition:background-color 200ms,transform 200ms,opacity 400ms;z-index:1000;opacity:0;visibility:hidden}@media(max-width: 900px){.navigation{z-index:100000;background-color:#fff}}.navigation.isVisible{transition:opacity 400ms;opacity:1;visibility:visible}@media(max-width: 518px){.navigation .btn--White{padding:15rem 18rem}}@media(max-width: 900px){.navigation .btn--White{background-color:#140a23;color:#fff}}@media(max-width: 518px){.navigation .btn--White span{display:none}}.navigation.isScrolled{background-color:#fff;box-shadow:0 2rem 18rem 0 rgba(0,0,0,.07)}.navigation.isScrolled .btn--White{background-color:#140a23;color:#fff}.navigation.isScrolled .navigation__Logo svg{color:#140a23}.navigation.isScrolled .navigation__Inner ul a:hover{border-color:#140a23}.navigation__Inner{display:flex;align-items:center;justify-content:space-between;min-height:52rem}@media(max-width: 900px){.navigation__Inner{padding-right:70rem}}.navigation__Inner div{display:flex;align-items:center;gap:35rem}@media(max-width: 900px){.navigation__Inner nav{position:fixed;top:75rem;left:0;right:0;bottom:0;display:flex;flex-direction:column;overflow-y:auto;background-color:#fff;transform:translateX(100%);transition:transform 300ms}}.navigation__Inner .navigation__MobileTop{padding:33rem 17rem 18rem;flex-direction:column;align-items:flex-start;display:none}@media(max-width: 900px){.navigation__Inner .navigation__MobileTop{display:flex}}.navigation__Inner .navigation__MobileTop ul{width:100%}.navigation__Inner .navigation__MobileTop li{margin-bottom:15rem}.navigation__Inner .navigation__MobileTop li:last-child{margin-bottom:0}@media(max-width: 900px){.navigation__Inner .navigation__MobileTop li:first-child span{padding-top:10rem;border-top:1px solid rgba(20,10,35,.15)}}.navigation__Inner .navigation__MobileTop li a{color:#140a23 !important}@media(max-width: 900px){.navigation__Inner .navigation__MobileBottom{background-color:#140a23;flex-grow:1;padding:33rem 17rem;flex-direction:column;align-items:flex-start;justify-content:flex-end;display:none}}@media(max-width: 900px)and (max-width: 900px){.navigation__Inner .navigation__MobileBottom{display:flex}}@media(max-width: 900px){.navigation__Inner .navigation__MobileBottom a{color:#fff}}.navigation__Inner .navigation__MobileBottom ul{display:flex;gap:46rem;align-items:center}@media(max-width: 900px){.navigation__Inner .navigation__MobileBottom ul{display:none}}@media(max-width: 900px){.navigation__Inner ul{margin-bottom:auto}}.navigation__Inner ul li{all:unset;display:block}.navigation__Inner ul li:before{content:none}.navigation__Inner ul a{font-size:14rem;text-transform:uppercase;letter-spacing:.6rem;font-weight:600;color:#140a23;transition:color 200ms,border 200ms;border-bottom:1px solid rgba(0,0,0,0)}.navigation__Inner ul a:hover{border-color:#fff}@media(max-width: 900px){.navigation__Inner ul a{font-size:28rem;letter-spacing:-0.56rem;line-height:32rem;text-transform:capitalize}}.navigation__Inner .lang{position:relative;font-size:14rem;letter-spacing:.14rem;font-weight:600;color:#140a23;transition:color 200ms;text-transform:uppercase;padding:16rem 30rem;background-color:#fff}.navigation__Inner .lang.isDisabled{background-color:rgba(0,0,0,.07);pointer-events:none;opacity:.3}@media(max-width: 900px){.navigation__Inner .lang{color:#140a23 !important}}.navigation__Logo{font-size:0}.navigation__Logo svg{width:100%;max-width:125rem;height:auto;object-fit:cover;color:#140a23;transition:color 200ms}main.about .navigation__Logo svg{color:#fff}@media(max-width: 900px){main.about .navigation__Logo svg{color:#140a23}}main.about .lang{color:#fff}main.about .isScrolled .navigation__Logo svg{color:#140a23 !important}main.about .isScrolled .lang{color:#140a23 !important}main.about .isScrolled .lang:before{border-color:#140a23 !important}main.about .isScrolled .lang:after{background-color:#140a23}.navigation__Social{display:flex;gap:0 !important;flex-direction:column;text-align:left;justify-content:flex-end}@media(min-width: 901px){.navigation__Social{display:none !important}}.navigation__Social a{color:#fff;font-size:14rem;line-height:34rem}.navigation__Lang{background-color:#fff;margin:0 -17rem 30rem}@media(min-width: 901px){.navigation__Lang{display:none !important}}.navigation__Lang a{position:relative;text-transform:uppercase;padding:30rem 17rem;width:100%;font-size:14rem;color:#140a23;font-weight:bold;letter-spacing:.14rem}.navigation__Lang a:before{position:absolute;content:"";top:0;left:17rem;right:17rem;height:1rem;background-color:rgba(0,0,0,.12)}.navigation__Toggle{position:absolute;top:50%;right:30rem;font-size:0;min-height:40rem;min-width:40rem;transform:translateY(-50%);background-color:rgba(0,0,0,0);border:0;outline:0}.navigation__Toggle:before,.navigation__Toggle:after{position:absolute;content:"";left:0;right:0;height:2px;background-color:#140a23;transition:transform 300ms}.navigation__Toggle:before{transform:translateY(-8rem)}.navigation__Toggle:after{transform:translateY(8rem)}@media(min-width: 901px){.navigation__Toggle{display:none !important}}.navigation__LanguageSwitcher{position:relative;cursor:pointer}@media(max-width: 900px){.navigation__LanguageSwitcher.isDesktop{display:none !important}}.navigation__LanguageSwitcher.isMobile{display:none !important}@media(max-width: 900px){.navigation__LanguageSwitcher.isMobile{display:block !important}}.navigation__LanguageSwitcher div{position:absolute;top:25rem;left:-20rem;gap:0;border-top:1rem solid #140a23;flex-direction:column;pointer-events:none;display:none;background-color:#fff;box-shadow:0 2rem 18rem 0 rgba(0,0,0,.07)}@media(max-width: 900px){.navigation__LanguageSwitcher div{position:relative;top:initial;left:initial;min-height:0;max-height:0;background-color:rgba(0,0,0,0);box-shadow:initial;align-items:flex-start;padding:0;transition:initial}}.navigation__LanguageSwitcher a{display:block}.navigation__LanguageSwitcher span{display:flex;align-items:center;font-size:14rem;gap:5rem;font-weight:600;text-transform:uppercase}@media(max-width: 900px){.navigation__LanguageSwitcher span{font-size:18rem;transform:initial}}.navigation__LanguageSwitcher svg{min-width:12rem;max-width:12rem;min-height:8rem;max-height:8rem;color:#140a23;margin-top:2rem;transition:transform 300ms}html.isLanguageOpen .navigation__LanguageSwitcher div{display:block;pointer-events:initial}@media(max-width: 900px){html.isLanguageOpen .navigation__LanguageSwitcher div{min-height:90rem;max-height:90rem;margin-top:20rem}}html.isLanguageOpen .navigation__LanguageSwitcher svg{transform:rotate(180deg);color:#ff4650 !important}html.isLanguageOpen .navigation.isScrolled .navigation__LanguageSwitcher svg{color:#ff4650 !important}@media(min-width: 900px){.page.about .navigation__LanguageSwitcher span{color:#fff}}@media(min-width: 900px){.page.about .navigation__LanguageSwitcher svg{color:#fff}}.page.about .navigation__LanguageSwitcher div{background-color:#fff}@media(min-width: 900px){.page.about .navigation__LanguageSwitcher div .lang{color:#140a23}.page.about .navigation__LanguageSwitcher div .lang.isDisabled{color:#140a23}}@media(min-width: 900px){.navigation.isScrolled .navigation__LanguageSwitcher span{color:#140a23 !important}}@media(min-width: 900px){.navigation.isScrolled .navigation__LanguageSwitcher svg{color:#140a23 !important}}@media(min-width: 900px){.navigation.isScrolled .navigation__LanguageSwitcher div{border-color:#140a23}}@media(min-width: 900px){.navigation.isScrolled .navigation__LanguageSwitcher div .lang{color:#140a23 !important}.navigation.isScrolled .navigation__LanguageSwitcher div .lang:before{border-color:#140a23 !important}}@media(max-width: 900px){html.isNavigationOpen{overflow-y:hidden}html.isNavigationOpen body{overflow-y:hidden}}html.isNavigationOpen .navigation__Toggle:before{transform:rotate(45deg)}html.isNavigationOpen .navigation__Toggle:after{transform:rotate(-45deg)}html.isNavigationOpen .navigation{visibility:visible;opacity:1}html.isNavigationOpen .navigation nav{transform:translateX(0)}html.isNavigationOpen .navigation.isVisible{opacity:1;visibility:visible}.pricing{position:relative;z-index:10;padding:55rem 0 125rem;background-color:#140a23;color:#fff;margin-top:-1rem}@media(max-width: 518px){.pricing{padding-bottom:55rem}}.pricing:before{position:absolute;z-index:-1;content:"";top:0;left:0;right:0;bottom:0;opacity:0;background-color:#140a23;transition:opacity 600ms}.pricing .category,.pricing .testimonials__TextWrap .bullet,.testimonials__TextWrap .pricing .bullet{margin-bottom:85rem}.pricing .category:after,.pricing .testimonials__TextWrap .bullet:after,.testimonials__TextWrap .pricing .bullet:after{background-color:rgba(255,255,255,.15)}.pricing h2{position:relative;font-size:64rem;line-height:61rem;font-weight:400;max-width:515rem;padding-bottom:84rem}.pricing h2:after{position:absolute;content:"";display:block;left:0;bottom:0;width:calc(100% - 33rem);height:100%;border-bottom:1px solid rgba(255,255,255,.15)}@media(max-width: 900px){.pricing h2:after{content:none}}@media(max-width: 900px){.pricing h2{font-size:42rem;line-height:42rem}}.pricing__Numbers{display:flex;align-items:flex-start;justify-content:space-between;padding-top:52rem}@media(max-width: 900px){.pricing__Numbers{flex-direction:column;border-top:1px solid rgba(255,255,255,.15)}}@media(max-width: 518px){.pricing__Numbers{padding-top:15rem}}.pricing__Numbers .pricing__Roller{position:relative}.pricing__Numbers .pricing__From{position:absolute;top:-72rem;left:15rem;font-size:28rem;line-height:35rem}@media(max-width: 900px){.pricing__Numbers .pricing__From{position:relative;display:block;left:initial;top:initial;margin-bottom:75rem;margin-top:-75rem;font-size:22rem;line-height:27rem}}.pricing__Numbers p{position:relative;font-size:21rem;line-height:30rem;max-width:400rem;margin-top:23rem}.pricing__Numbers p:before{position:absolute;display:block;left:0;top:-55rem;width:100%;height:1px;background:rgba(255,255,255,.15)}@media(max-width: 900px){.pricing__Numbers p:before{content:none}}@media(max-width: 1200px){.pricing__Numbers p{margin-bottom:50rem}}@media(max-width: 900px){.pricing__Numbers p{font-size:21rem;line-height:25rem;margin-bottom:100rem;min-width:initial;max-width:initial}}@media(max-width: 518px){.pricing__Numbers p{max-width:400rem}}.pricing__Numbers h3{font-size:160rem;line-height:152rem;font-weight:500;display:flex;align-items:center;margin-top:-70rem}@media(max-width: 1200px){.pricing__Numbers h3{margin-top:-35rem}}@media(max-width: 900px){.pricing__Numbers h3{font-size:75rem;line-height:75rem;margin-top:-75rem}}.pricing__Numbers h3 span{color:#ff4650;display:flex;line-height:230rem}@media(max-width: 900px){.pricing__Numbers h3 span{line-height:110rem}}.pricing__Numbers h3 ul{all:unset}.pricing__Numbers h3 li{all:unset}.pricing__Numbers h3 li:before{content:none}.pricing__Numbers .button__Wrapper{margin-top:35rem;display:flex;justify-content:flex-end;margin-right:60rem;gap:21rem}@media(max-width: 900px){.pricing__Numbers .button__Wrapper{margin-right:0rem;justify-content:flex-start}.pricing__Numbers .button__Wrapper span{padding:20rem}}@media(max-width: 518px){.pricing__Numbers .button__Wrapper{flex-direction:column;gap:30rem}}.pricing__Numbers .roller__wrapper>ul{text-align:right}.complexCustomersPage .pricing h2{max-width:initial}.complexCustomersPage .pricing h2:after{width:470rem}.regulations{background-color:#ff4650;padding:105rem 0;color:#fff}@media(max-width: 900px){.regulations{padding:50rem 0 75rem}}.regulations h2 span{border-color:rgba(255,255,255,.2)}.regulations.isActive .regulations__CrossLeft{transition:opacity 900ms;transition-delay:800ms;opacity:1 !important}.regulations__Text{margin-top:100rem;display:flex;justify-content:space-between;gap:90rem}@media(max-width: 900px){.regulations__Text{flex-direction:column-reverse;gap:60rem}}.regulations__Info{max-width:440rem;margin-left:100rem}@media(max-width: 900px){.regulations__Info{max-width:unset;margin-left:0}}.regulations__Info p{font-size:28rem;line-height:35rem;margin-bottom:25rem}.regulations__Info span{display:block;margin-top:80rem;padding-top:35rem;border-top:1rem solid rgba(255,255,255,.2);font-size:21rem;line-height:30rem}@media(max-width: 900px){.regulations__Info span{margin-top:40rem}}.regulations__Image{position:relative;display:flex;flex:1;justify-content:center;align-items:center}@media(max-width: 900px){.regulations__Image{margin:0 auto;min-width:380rem;max-width:380rem;min-height:380rem;max-height:380rem}}@media(max-width: 518px){.regulations__Image{min-width:304rem;max-width:304rem;min-height:304rem;max-height:304rem}}.regulations__Image img{position:absolute;height:100%;width:auto}.regulations__CrossLeft{opacity:0;transition:opacity 400ms}.sections{background-color:#fff;padding:90rem 80rem 145rem}@media(max-width: 900px){.sections{padding:40rem 0 50rem}}@media(max-width: 518px){.sections{padding:40rem 0 80rem}}.sections__Wrapper{display:grid;grid-template-columns:220rem 1fr;gap:260rem}@media(max-width: 900px){.sections__Wrapper{grid-template-columns:1fr}}.sections__Sidebar{position:relative}@media(max-width: 900px){.sections__Sidebar{display:none}}.sections__Sidebar div{position:sticky;top:150rem;display:flex;flex-direction:column}.sections__Sidebar span{position:relative;font-size:16rem;letter-spacing:4rem;font-weight:bold;text-transform:uppercase;padding-left:25rem;margin-bottom:35rem}.sections__Sidebar span:before{position:absolute;content:"";top:5rem;left:0;width:10rem;height:10rem;border-radius:50%;background-color:#ff4650}.sections__Sidebar a{font-size:16rem;font-weight:bold;color:#140a23;margin-bottom:10rem;opacity:.3;transition:opacity 200ms;cursor:pointer}.sections__Sidebar a:hover,.sections__Sidebar a.isActive{opacity:1}.sections__Text{max-width:680rem}@media(max-width: 900px){.sections__Text{max-width:100%}}.sections__Text section+section{margin-top:100rem}@media(max-width: 518px){.sections__Text section+section{margin-top:60rem}}.sections__Text h2{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;margin-bottom:95rem;font-weight:700}@media(max-width: 900px){.sections__Text h2{font-size:28rem;line-height:30rem;letter-spacing:-0.28rem;margin-bottom:63rem}}@media(max-width: 518px){.sections__Text h2{margin-bottom:85rem}}.sections__Text h3{font-size:33rem;line-height:36rem;letter-spacing:-0.33rem;margin-bottom:30rem}@media(max-width: 900px){.sections__Text h3{font-size:28rem;line-height:30rem;letter-spacing:-0.28rem;margin-bottom:25rem}}.sections__Text p{font-size:21rem;line-height:33rem}@media(max-width: 900px){.sections__Text p{line-height:30rem}}.sections__Text p+p{margin-top:35rem}@media(max-width: 900px){.sections__Text p+p{margin-top:20rem}}.sections__Text p+img{margin-top:60rem}@media(max-width: 900px){.sections__Text p+img{margin-top:30rem}}.sections__Text p+h2,.sections__Text p+h3{margin-top:15rem}.sections__Text p+ul{margin-top:25rem}.sections__Text img{display:block;width:calc(100% + 100rem);height:auto;object-fit:cover}@media(max-width: 900px){.sections__Text img{width:100%}}.sections__Text img+p{margin-top:60rem}@media(max-width: 900px){.sections__Text img+p{margin-top:30rem}}.sections__Text ul li{font-size:21rem;line-height:33rem;margin-bottom:15rem;padding-left:25rem}.sections__Text ul li:before{background:none;width:10rem;height:10rem;border-radius:50%;border:1px solid #979797;background-color:rgba(0,0,0,0);top:10rem;transform:unset}.sections__Text ul+*{margin-top:25rem}.sections__Text a{color:#140a23;transition:color 300ms;text-decoration:underline}.sections__Text a:hover{color:#ff4650}.sections__Content+h3,.sections__Content+h2{margin-top:100rem}@media(max-width: 518px){.sections__Content+h3,.sections__Content+h2{margin-top:60rem}}.solutions__Inner{display:flex;align-items:flex-start}@media(max-width: 900px){.solutions__Inner{flex-direction:column;padding-top:0}}.solutions__Banner{position:sticky;top:0;display:flex;flex-direction:column;align-items:center;background-color:#ff4650;padding:170rem 130rem;color:#fff;margin-left:calc(50% - 50vw);max-width:50vw;min-width:50vw;min-height:100vh;overflow:hidden}.solutions__Banner.isActive .solutions__CrossRight{transition:opacity 900ms;transition-delay:400ms;opacity:1 !important}@media(max-width: 900px){.solutions__Banner{position:relative;max-width:unset;min-width:unset;margin-left:-30rem;width:calc(100% + 60rem);min-height:unset;padding-bottom:0}}@media(max-width: 518px){.solutions__Banner{margin-left:-30rem;width:calc(100% + 60rem);padding:80rem 40rem 0;align-items:flex-start}}.solutions__Banner h2{position:relative;z-index:20;font-size:64rem;line-height:61rem;font-weight:400;max-width:453rem}@media(max-width: 518px){.solutions__Banner h2{font-size:42rem;line-height:42rem}}.solutions__Banner h2 b{color:#140a23;font-weight:inherit}.solutions__Cross{position:relative;z-index:20;display:block;margin:80rem 0;width:100%;max-width:449rem;min-width:449rem;min-height:449rem;max-height:449rem;height:auto;object-fit:cover}@media(max-height: 800px){.solutions__Cross{max-width:280rem;min-width:280rem}}@media(max-width: 900px){.solutions__Cross{min-height:400rem;max-height:400rem;max-width:400rem;min-width:400rem}}@media(max-width: 518px){.solutions__Cross{min-height:300rem;max-height:300rem;max-width:300rem;min-width:300rem;align-self:center}}.solutions__Cross img{position:absolute;width:100%}@media(max-width: 900px){.solutions__Cross img{height:100%}}.solutions__CrossRight{opacity:0;transition:opacity 400ms}.solutions__List{margin-left:120rem;margin-top:75rem;flex-grow:1}@media(max-width: 900px){.solutions__List{margin-left:0;width:100%}}.solutions__List .solutions__ListLead{margin-bottom:100rem;max-width:390rem}@media(max-width: 1440px){.solutions__List .solutions__ListLead{max-width:435rem}}@media(max-width: 900px){.solutions__List .solutions__ListLead{margin-bottom:70rem;max-width:100%}}@media(max-width: 518px){.solutions__List .solutions__ListLead{margin-bottom:50rem;font-size:32rem;line-height:32rem}}.solutions__List .solutions__ListItems{margin-bottom:125rem}@media(max-width: 900px){.solutions__List .solutions__ListItems{margin-bottom:65rem}}.solutions__List .solutions__ListItem{padding-bottom:35rem;margin-bottom:90rem;border-bottom:1rem solid #ff4650;max-width:390rem}@media(max-width: 1440px){.solutions__List .solutions__ListItem{max-width:435rem}}@media(max-width: 900px){.solutions__List .solutions__ListItem{margin-left:60rem;margin-bottom:60rem;max-width:100%}}@media(max-width: 518px){.solutions__List .solutions__ListItem{margin-bottom:50rem}}.solutions__List .solutions__ListItem:last-of-type{margin-bottom:0}.solutions__List h3{position:relative;font-size:33rem;margin-bottom:15rem;font-weight:600}@media(max-width: 518px){.solutions__List h3{font-size:23rem;line-height:28rem}}.solutions__List h3:before{position:absolute;content:"";top:5rem;left:-60rem;width:34rem;height:31rem;background:url("/.resources/images/icon-square-check.svg") no-repeat center/100% 100%}@media(max-width: 900px){.solutions__List h3:before{left:-60rem}}@media(max-width: 518px){.solutions__List h3:before{width:27rem;height:25rem}}.solutions__List p{font-size:28rem;line-height:35rem}@media(max-width: 518px){.solutions__List p{font-size:21rem;line-height:30rem}}.solutions__ListButton{display:flex;justify-content:flex-start;padding-bottom:45rem}.solutions__ListButton>div{margin-top:-75rem;padding-bottom:45rem}@media(max-width: 900px){.solutions__ListButton>div{margin-top:40rem;margin-top:-30rem;margin-left:60rem}}.solutions__ListButton div{border-bottom:none !important;padding:none !important;margin:none !important;max-width:unset !important}.complexCustomersPage .solutions__List .solutions__ListItem{padding-bottom:40rem;margin-bottom:40rem}.complexCustomersPage .solutions__List .solutions__ListItem:last-of-type{margin-bottom:0}.complexCustomersPage .solutions__List .solutions__ListItem h3{margin-bottom:0}@media(max-width: 900px){.complexCustomersPage .solutions__Banner{padding-bottom:170rem}}@media(max-width: 518px){.complexCustomersPage .solutions__Banner{padding-bottom:80rem}}.testimonials__Container{overflow-x:hidden}.testimonials{background-color:#fff;padding:50rem 0 93rem}.testimonials .category,.testimonials .testimonials__TextWrap .bullet,.testimonials__TextWrap .testimonials .bullet{font-weight:600;letter-spacing:3rem;margin-bottom:0}.testimonials h2{margin:88rem 0 0 100rem;font-size:64rem;line-height:61rem;letter-spacing:.61rem;font-weight:400;max-width:653rem}@media(max-width: 900px){.testimonials h2{margin:47rem 0 0;font-size:38rem;line-height:42rem;letter-spacing:-0.38rem}}.testimonials__Slider{margin:74rem 0 0 100rem;margin:57rem 0 0}@media(min-width: 900px){.testimonials__Slider{min-width:calc(50vw + 560rem);max-width:calc(50vw + 560rem)}}.testimonials__Slider .dragSlider__Wrapper{padding-bottom:65rem}.testimonials__Item{display:flex;gap:43rem;padding:43rem 28rem 0;background-color:#f4f4f4;min-width:1115rem;max-width:1115rem;position:relative}@media(max-width: 900px){.testimonials__Item{min-width:100%;max-width:100%;flex-direction:column;padding:30rem 24rem 0;gap:29rem}}.testimonials__Item:before{position:absolute;content:"";top:0;left:-1rem;width:0;height:0;border-style:solid;border-width:100rem 100rem 0 0;border-color:#fff rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.testimonials__ImageWrap{min-width:360rem;max-width:360rem}@media(max-width: 900px){.testimonials__ImageWrap{align-self:center;min-width:unset;max-width:100%;margin-left:0}}.testimonials__ImageWrap img{display:block;height:100%;width:100%;object-fit:cover}@media(max-width: 900px){.testimonials__ImageWrap img{min-height:395rem;max-height:395rem;width:unset;max-width:333rem}}.testimonials__TextWrap{display:flex;flex-direction:column;padding:0 0 35rem;margin-top:32rem}@media(max-width: 900px){.testimonials__TextWrap{padding:0 0 24rem;height:100%;margin-top:0}}.testimonials__TextWrap h3{font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;min-height:75rem;max-height:75rem}@media(max-width: 518px){.testimonials__TextWrap h3{font-size:28rem;line-height:30rem;letter-spacing:-0.28rem}}.testimonials__TextWrap .bullet{margin:25rem 0 32rem;text-transform:initial;padding-bottom:23rem;letter-spacing:1.04rem !important;font-weight:600 !important;min-height:57rem;max-height:57rem}.testimonials__TextWrap .bullet:after{width:calc(100% + 28rem)}@media(max-width: 900px){.testimonials__TextWrap .bullet:after{width:100%}}.testimonials__TextWrap .bullet:before{bottom:unset;top:4rem}.testimonials__TextWrap blockquote{margin:30rem 0;font-size:33rem;line-height:35rem;letter-spacing:-0.33rem;font-weight:500}@media(max-width: 900px){.testimonials__TextWrap blockquote{margin-bottom:83rem;margin-top:32rem}}@media(max-width: 518px){.testimonials__TextWrap blockquote{font-size:28rem;line-height:32rem;letter-spacing:-0.28rem}}.testimonials__TextWrap h4{font-size:46rem;line-height:49rem;letter-spacing:-0.46rem;font-weight:600;margin-top:auto}@media(max-width: 518px){.testimonials__TextWrap h4{font-size:43rem;line-height:45rem;letter-spacing:-0.32rem;margin-top:0}}.pricingPage .testimonials__TextWrap{flex-grow:1}.pricingPage .testimonials__TextWrap h4{margin-top:auto}.pricingPage .testimonials__TextWrap .bullet{align-items:flex-start}.pricingPage .testimonials__TextWrap .bullet:after{bottom:-4rem}.testimonials.isCustomersPage{background-color:#f4f4f4;padding:60rem 0 134rem}.testimonials.isCustomersPage .testimonials__ImageWrap{min-width:360rem;max-width:360rem;min-height:450rem;max-height:450rem;margin-top:10rem}@media(max-width: 900px){.testimonials.isCustomersPage .testimonials__ImageWrap{min-width:unset;max-width:100%;margin-top:0;min-height:unset;max-height:unset}}.testimonials.isCustomersPage blockquote{margin-top:0}.testimonials.isCustomersPage blockquote+div{margin-top:auto}.testimonials.isCustomersPage .testimonials__Slider{margin-top:52rem;margin:52rem 0 0 136rem}@media(max-width: 900px){.testimonials.isCustomersPage .testimonials__Slider{margin:52rem 0 0}}.testimonials.isCustomersPage .testimonials__Item{background-color:#fff}.testimonials.isCustomersPage .testimonials__Item:before{border-color:#f4f4f4 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.testimonials.isCustomersPage .testimonials__TextWrap blockquote p{margin:0;padding:0;max-width:100%;font-size:46rem;line-height:49rem;letter-spacing:-0.46rem;font-weight:600}@media(max-width: 518px){.testimonials.isCustomersPage .testimonials__TextWrap blockquote p{font-size:32rem;line-height:35rem;letter-spacing:-0.32rem}}.testimonials.isCustomersPage .testimonials__TextWrap .bullet{margin-bottom:9rem !important;padding:0 0 0 25rem;font-weight:600;min-height:unset;max-height:unset}.testimonials.isCustomersPage .testimonials__TextWrap .bullet:after{top:-15rem}@media(max-width: 900px){.testimonials.isCustomersPage .testimonials__TextWrap .bullet:after{top:-22rem}}.testimonials.isCustomersPage .testimonials__TextWrap .bullet:before{bottom:3rem}.testimonials.isCustomersPage .testimonials__TextWrap small{font-size:13rem;font-weight:600;letter-spacing:1.95rem}@media(max-width: 900px){.partnersPage .testimonials__TextWrap blockquote{margin-top:0}}.partnersPage .testimonials__TextWrap blockquote+div{margin-top:auto}.partnersPage .testimonials__TextWrap .bullet{min-height:unset;max-height:unset}@media(max-width: 900px){.partnersPage .testimonials__Item{padding-bottom:15rem}}.checkboxField label{position:relative;width:20px;height:20px;min-width:20px;min-height:20px;cursor:pointer;outline:0;border:1px solid #000}.checkboxField label:before{position:absolute;content:"";top:3px;left:3px;right:3px;bottom:3px;opacity:0;will-change:opacity;background-color:#000;transition:opacity 200ms,background-color 200ms}.checkboxField label:focus:before{opacity:.25}.checkboxField input{position:absolute;opacity:0;cursor:pointer}.checkboxField.isDisabled{opacity:.5}.checkboxField.isChecked label:before{opacity:1}.checkboxField.isChecked label:focus:before{opacity:.5}.checkboxField.isError label{border-color:red}.checkboxField.isError label:before{background-color:red}.checkboxField.isDark label{background-color:#000}.checkboxField.isDark label:before{background-color:#fff}.checkboxField__Wrapper{display:flex;align-items:flex-start}.checkboxField__Label{cursor:pointer}.checkboxField__Error,.checkboxField__Label{padding-left:10px}.checkboxField--Toggle label{opacity:1;width:40px;border-radius:20px}.checkboxField--Toggle label:before{top:2px;left:2px;right:auto;bottom:2px;width:14px;height:14px;opacity:1;border-radius:50%;transition:transform 200ms,opacity 200ms}.checkboxField--Toggle.isChecked label:before{transform:translateX(20px)}.fileField__Wrapper{padding-left:10px;align-items:stretch;overflow:hidden;justify-content:space-between}.fileField__Wrapper input{position:absolute;opacity:0;width:0 !important;height:0 !important;padding:0 !important;overflow:hidden;pointer-events:none}.fileField__Text{font-size:16px;line-height:1.3;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.fileField__Label{position:relative;width:100px;min-width:100px;padding:20px 10px;margin-left:10px;background-color:#000;color:#fff;text-align:center;font-size:14px;cursor:pointer;align-self:stretch;transition:background-color 200ms;backface-visibility:hidden}.fileField__Label span{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%)}.fileField__Label:hover{background-color:#333}.fileField.isDisabled .fileField__Text{color:#aaa}.fileField.isDisabled .fileField__Label{background-color:#888}.fileField.isDisabled .formField__File{color:#aaa}.fileField.isDisabled .formField__File button{background-color:#aaa}.fileField.isError .fileField__Text{color:red}.fileField.isError .fileField__Label{background-color:red}.fileField.isInline{display:block !important}.fileField.isInline .formField__Files{min-width:100%}.fileField.isInline .fileField__InputWrapper{display:flex;align-items:center}.fileField__Prepend{padding-right:10px}.fileField__PrependText{display:flex;align-items:center;width:100%;max-width:calc(100% - 110px)}.formField__Files{margin-top:10px}.formField__File{display:flex;justify-content:space-between;align-items:center}.formField__File+.formField__File{margin-top:10px}.formField__File button{position:relative;border:0;padding:0;outline:0;background-color:#000;border-radius:50%;width:20px;margin-left:10px;height:20px;min-width:20px;min-height:20px;transition:background-color 200ms;backface-visibility:hidden;cursor:pointer;color:#fff}.formField__File button:hover{background-color:#333}.formField__File button span{position:absolute;top:50%;left:50%;font-size:0;display:block;width:8px;height:8px;transform:translate(-50%, -50%);background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 16 16\'%3E%3Cg fill=\'%23FFF\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M.929 13.657L13.657.929l1.414 1.414L2.343 15.071z\'/%3E%3Cpath d=\'M15.071 13.657L2.343.929.93 2.343l12.728 12.728z\'/%3E%3C/g%3E%3C/svg%3E%0A");background-position:center center;background-size:8px 8px}.formField__FileName{width:calc(100% - 40rem);display:flex}.formField__FileName span:first-child{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;display:block;max-width:calc(100% - 100rem)}.field__Group.isError .form__Field .textField__Wrapper,.field__Group.isError .form__Field .fileField__Wrapper,.field__Group.isError .form__Field .selectField__Input{border-color:red}.field__Group.isError .form__Field .textField__Wrapper:after,.field__Group.isError .form__Field .fileField__Wrapper:after,.field__Group.isError .form__Field .selectField__Input:after{border-color:red rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.field__Group.isError .form__Field.radioField label,.field__Group.isError .form__Field.checkboxField label{border-color:red}.field__Group.isError .form__Field.radioField label:before,.field__Group.isError .form__Field.checkboxField label:before{background-color:red}.field__Group.isError .form__Field .form__Label{color:red}.field__Group.isInline .form__Field+.form__Field{margin-top:0}.field__GroupInfo,.field__GroupError{display:block;margin-top:5px}.field__GroupLabel{margin-bottom:5px}.form__Errors{display:flex;flex-direction:column;margin:0;padding:0}.form__Error{font-size:12px;color:red;display:block;white-space:nowrap}.form__Error+.form__Error{margin-top:5px}.form__Info{display:block;font-size:12px;color:#aaa}.form__Label{position:relative;z-index:1000;display:flex;font-size:16px;line-height:20px;align-items:flex-start;justify-content:space-between}.form__Label:empty{display:none}.form__Field.isInline .form__Label{white-space:nowrap}.form__Field.isError .form__Label{color:red}.form__Field.isDisabled{pointer-events:none}.form__Field:not(.isInline) .form__Label{margin-bottom:5px}.form__Field:not(.isInline) .form__Info,.form__Field:not(.isInline) .form__Error{margin-top:5px}.form__Field .form__FieldTooltip{margin:2px 0 0 5px}.form__Field+.form__Field,.form__Field.field__Group,.field__Group+.form__Field,.field__Group.field__Group{margin-top:30px}.field__Group+.field__Group{margin-top:30px}.row .form__Field+.form__Field,.row .form__Field.field__Group,.row .field__Group+.form__Field,.row .field__Group.field__Group{margin-top:0}*{box-sizing:border-box}.row{display:flex;flex-wrap:wrap;align-items:flex-start}.row>*+*{margin-left:30px}.row{margin-right:-30px}.column{display:flex;flex-direction:column}.column>*:not(:first-of-type){margin-top:30px}.xs1{width:calc(8.3333333333% - 0px)}.xs0{width:calc(16.6666666667% - 0px)}.xs-1{width:calc(25% - 0px)}.xs-2{width:calc(33.3333333333% - 0px)}.xs-3{width:calc(41.6666666667% - 0px)}.xs-4{width:calc(50% - 0px)}.xs-5{width:calc(58.3333333333% - 0px)}.xs-6{width:calc(66.6666666667% - 0px)}.xs-7{width:calc(75% - 0px)}.xs-8{width:calc(83.3333333333% - 0px)}.xs-9{width:calc(91.6666666667% - 0px)}.xs-10{width:calc(100% - 0px)}.column .xs1:not(.row){width:calc(8.3333333333% - 30px)}.column .xs0:not(.row){width:calc(16.6666666667% - 30px)}.column .xs-1:not(.row){width:calc(25% - 30px)}.column .xs-2:not(.row){width:calc(33.3333333333% - 30px)}.column .xs-3:not(.row){width:calc(41.6666666667% - 30px)}.column .xs-4:not(.row){width:calc(50% - 30px)}.column .xs-5:not(.row){width:calc(58.3333333333% - 30px)}.column .xs-6:not(.row){width:calc(66.6666666667% - 30px)}.column .xs-7:not(.row){width:calc(75% - 30px)}.column .xs-8:not(.row){width:calc(83.3333333333% - 30px)}.column .xs-9:not(.row){width:calc(91.6666666667% - 30px)}.column .xs-10:not(.row){width:calc(100% - 30px)}.row .xs1{width:calc(8.3333333333% - 30px)}.row .xs0{width:calc(16.6666666667% - 30px)}.row .xs-1{width:calc(25% - 30px)}.row .xs-2{width:calc(33.3333333333% - 30px)}.row .xs-3{width:calc(41.6666666667% - 30px)}.row .xs-4{width:calc(50% - 30px)}.row .xs-5{width:calc(58.3333333333% - 30px)}.row .xs-6{width:calc(66.6666666667% - 30px)}.row .xs-7{width:calc(75% - 30px)}.row .xs-8{width:calc(83.3333333333% - 30px)}.row .xs-9{width:calc(91.6666666667% - 30px)}.row .xs-10{width:calc(100% - 30px)}@media screen and (max-width: 1366px){.lg1{width:calc(8.3333333333% - 0px)}.lg0{width:calc(16.6666666667% - 0px)}.lg-1{width:calc(25% - 0px)}.lg-2{width:calc(33.3333333333% - 0px)}.lg-3{width:calc(41.6666666667% - 0px)}.lg-4{width:calc(50% - 0px)}.lg-5{width:calc(58.3333333333% - 0px)}.lg-6{width:calc(66.6666666667% - 0px)}.lg-7{width:calc(75% - 0px)}.lg-8{width:calc(83.3333333333% - 0px)}.lg-9{width:calc(91.6666666667% - 0px)}.lg-10{width:calc(100% - 0px)}.column .lg1:not(.row){width:calc(8.3333333333% - 30px)}.column .lg0:not(.row){width:calc(16.6666666667% - 30px)}.column .lg-1:not(.row){width:calc(25% - 30px)}.column .lg-2:not(.row){width:calc(33.3333333333% - 30px)}.column .lg-3:not(.row){width:calc(41.6666666667% - 30px)}.column .lg-4:not(.row){width:calc(50% - 30px)}.column .lg-5:not(.row){width:calc(58.3333333333% - 30px)}.column .lg-6:not(.row){width:calc(66.6666666667% - 30px)}.column .lg-7:not(.row){width:calc(75% - 30px)}.column .lg-8:not(.row){width:calc(83.3333333333% - 30px)}.column .lg-9:not(.row){width:calc(91.6666666667% - 30px)}.column .lg-10:not(.row){width:calc(100% - 30px)}.row .lg1{width:calc(8.3333333333% - 30px)}.row .lg0{width:calc(16.6666666667% - 30px)}.row .lg-1{width:calc(25% - 30px)}.row .lg-2{width:calc(33.3333333333% - 30px)}.row .lg-3{width:calc(41.6666666667% - 30px)}.row .lg-4{width:calc(50% - 30px)}.row .lg-5{width:calc(58.3333333333% - 30px)}.row .lg-6{width:calc(66.6666666667% - 30px)}.row .lg-7{width:calc(75% - 30px)}.row .lg-8{width:calc(83.3333333333% - 30px)}.row .lg-9{width:calc(91.6666666667% - 30px)}.row .lg-10{width:calc(100% - 30px)}}@media screen and (max-width: 1024px){.md1{width:calc(8.3333333333% - 0px)}.md0{width:calc(16.6666666667% - 0px)}.md-1{width:calc(25% - 0px)}.md-2{width:calc(33.3333333333% - 0px)}.md-3{width:calc(41.6666666667% - 0px)}.md-4{width:calc(50% - 0px)}.md-5{width:calc(58.3333333333% - 0px)}.md-6{width:calc(66.6666666667% - 0px)}.md-7{width:calc(75% - 0px)}.md-8{width:calc(83.3333333333% - 0px)}.md-9{width:calc(91.6666666667% - 0px)}.md-10{width:calc(100% - 0px)}.column .md1:not(.row){width:calc(8.3333333333% - 30px)}.column .md0:not(.row){width:calc(16.6666666667% - 30px)}.column .md-1:not(.row){width:calc(25% - 30px)}.column .md-2:not(.row){width:calc(33.3333333333% - 30px)}.column .md-3:not(.row){width:calc(41.6666666667% - 30px)}.column .md-4:not(.row){width:calc(50% - 30px)}.column .md-5:not(.row){width:calc(58.3333333333% - 30px)}.column .md-6:not(.row){width:calc(66.6666666667% - 30px)}.column .md-7:not(.row){width:calc(75% - 30px)}.column .md-8:not(.row){width:calc(83.3333333333% - 30px)}.column .md-9:not(.row){width:calc(91.6666666667% - 30px)}.column .md-10:not(.row){width:calc(100% - 30px)}.row .md1{width:calc(8.3333333333% - 30px)}.row .md0{width:calc(16.6666666667% - 30px)}.row .md-1{width:calc(25% - 30px)}.row .md-2{width:calc(33.3333333333% - 30px)}.row .md-3{width:calc(41.6666666667% - 30px)}.row .md-4{width:calc(50% - 30px)}.row .md-5{width:calc(58.3333333333% - 30px)}.row .md-6{width:calc(66.6666666667% - 30px)}.row .md-7{width:calc(75% - 30px)}.row .md-8{width:calc(83.3333333333% - 30px)}.row .md-9{width:calc(91.6666666667% - 30px)}.row .md-10{width:calc(100% - 30px)}}@media screen and (max-width: 768px){.sm1{width:calc(8.3333333333% - 0px)}.sm0{width:calc(16.6666666667% - 0px)}.sm-1{width:calc(25% - 0px)}.sm-2{width:calc(33.3333333333% - 0px)}.sm-3{width:calc(41.6666666667% - 0px)}.sm-4{width:calc(50% - 0px)}.sm-5{width:calc(58.3333333333% - 0px)}.sm-6{width:calc(66.6666666667% - 0px)}.sm-7{width:calc(75% - 0px)}.sm-8{width:calc(83.3333333333% - 0px)}.sm-9{width:calc(91.6666666667% - 0px)}.sm-10{width:calc(100% - 0px)}.column .sm1:not(.row){width:calc(8.3333333333% - 30px)}.column .sm0:not(.row){width:calc(16.6666666667% - 30px)}.column .sm-1:not(.row){width:calc(25% - 30px)}.column .sm-2:not(.row){width:calc(33.3333333333% - 30px)}.column .sm-3:not(.row){width:calc(41.6666666667% - 30px)}.column .sm-4:not(.row){width:calc(50% - 30px)}.column .sm-5:not(.row){width:calc(58.3333333333% - 30px)}.column .sm-6:not(.row){width:calc(66.6666666667% - 30px)}.column .sm-7:not(.row){width:calc(75% - 30px)}.column .sm-8:not(.row){width:calc(83.3333333333% - 30px)}.column .sm-9:not(.row){width:calc(91.6666666667% - 30px)}.column .sm-10:not(.row){width:calc(100% - 30px)}.row .sm1{width:calc(8.3333333333% - 30px)}.row .sm0{width:calc(16.6666666667% - 30px)}.row .sm-1{width:calc(25% - 30px)}.row .sm-2{width:calc(33.3333333333% - 30px)}.row .sm-3{width:calc(41.6666666667% - 30px)}.row .sm-4{width:calc(50% - 30px)}.row .sm-5{width:calc(58.3333333333% - 30px)}.row .sm-6{width:calc(66.6666666667% - 30px)}.row .sm-7{width:calc(75% - 30px)}.row .sm-8{width:calc(83.3333333333% - 30px)}.row .sm-9{width:calc(91.6666666667% - 30px)}.row .sm-10{width:calc(100% - 30px)}}.radioField label{position:relative;width:20px;height:20px;min-width:20px;min-height:20px;cursor:pointer;outline:0;border:1px solid #000}.radioField label:before{position:absolute;content:"";top:3px;left:3px;right:3px;bottom:3px;opacity:0;will-change:opacity;background-color:#000;transition:opacity 200ms,background-color 200ms}.radioField label:focus:before{opacity:.25}.radioField input{position:absolute;opacity:0}.radioField.isDisabled{opacity:.5}.radioField.isChecked label:before{opacity:1}.radioField.isChecked label:focus:before{opacity:.5}.radioField.isError label{border-color:red}.radioField.isError label:before{background-color:red}.radioField label,.radioField label:before{border-radius:50%}.radioField__Wrapper{display:flex;align-items:flex-start}.radioField__Label{cursor:pointer}.radioField__Error,.radioField__Label{padding-left:10px}.rangeField input{position:absolute;height:0;opacity:0;z-index:-1;backface-visibility:hidden}.rangeField .form__Label{user-select:none;transform:translateZ(0)}.rangeField.isError .rangeField__DraggerInline{background-color:red}.rangeField.isError .rangeField__Scroller{background-color:red}.rangeField.isError .rangeField__Value{color:red}.rangeField.isDisabled .rangeField__DraggerInline{background-color:#aaa}.rangeField.isDisabled .rangeField__Scroller{background-color:#aaa}.rangeField.isDisabled .rangeField__Value{color:#aaa}.rangeField.isFocused:not(.isDisabled) .rangeField__DraggerInline{background-color:#000}.rangeField__Dragger{position:absolute;top:50%;left:0;cursor:pointer;will-change:transform;transform:translateY(-50%)}.rangeField__Dragger>*{pointer-events:none}.rangeField__Dragger:focus{outline:0}.rangeField__DraggerInline{pointer-events:none;display:block;width:20px;height:20px;border-radius:50%;border:1px solid #000;background-color:#eee;transition:background-color 200ms;backface-visibility:hidden}.rangeField__Wrapper{position:relative;margin-top:-10px;cursor:pointer}.rangeField__Scroller{position:absolute;top:50%;left:0;right:0;transform:translateY(-50%) translateZ(0);background-color:#000}.rangeField__Value{position:absolute;left:50%;bottom:-2px;transform:translate3d(-50%, 100%, 0);text-align:center;font-size:12px;font-weight:bold;user-select:none}.rangeField__StepLine{position:absolute;top:50%;width:1px;height:10px;pointer-events:none;transform:translate3d(-50%, -50%, 0);background-color:#000}.selectField{position:relative}.selectField.isOpened{z-index:10000}.selectField.isOpened .selectField__Options{transition:opacity 200ms,visibility 200ms;opacity:1;visibility:visible}.selectField.isOpened .selectField__Input:after{transform:translateY(-50%) rotate(180deg)}.selectField.isOpened .selectField__InputAutocomplete{opacity:1}.selectField.isError .selectField__Input{border-color:red}.selectField.isError .selectField__Input:after{border-color:red rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.selectField.isDisabled .selectField__Wrapper,.selectField.isDisabled .selectField__Input{background-color:#eee;border-color:#aaa}@media screen and (min-width: 769px){.selectField.isInline{display:flex;align-items:center}.selectField.isInline .selectField__Wrapper{margin:0 0 0 10px}.selectField.isInline .selectField__Wrapper+*{margin-left:10px}}.selectField.isAutocomplete .selectField__InputText,.selectField.isAutocomplete .selectField__InputAutocomplete{pointer-events:none}@media screen and (max-width: 768px){.selectField:not(.isAutocomplete) .selectField__Options{display:none}}.selectField__Wrapper{position:relative;width:100%}.selectField__Input{position:relative;padding:10px;z-index:2;display:flex;overflow:hidden;min-height:43px;align-items:center;border:1px solid #000;background-color:#fff;border-radius:10px}.selectField__Input input:not(.selectField__InputAutocomplete){position:absolute;opacity:0;pointer-events:none}.selectField__Input:after{position:absolute;content:"";top:50%;right:10px;width:0;height:0;border-style:solid;border-width:6px 5px 0 5px;transition:transform 200ms;border-color:#000 rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);transform:translateY(-50%)}.selectField__InputAutocomplete{position:absolute;top:0;left:0;right:0;bottom:0;border:0;outline:0;opacity:0;padding:10px;pointer-events:none}.selectField__InputText,.selectField__InputAutocomplete{width:100%;font-size:16px;line-height:1.3;padding-right:25px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.selectField__InputPlaceholder{color:#aaa}.selectField__Mobile{position:absolute;background-color:rgba(0,0,0,0);top:0;left:0;right:0;bottom:0;opacity:0;width:100%}@media screen and (min-width: 769px){.selectField__Mobile{display:none}}.selectField__EmptyOptions{padding:0 10px}.selectField__EmptyOptionsText{padding:10px 0;font-size:12px;margin:0}.selectField__Options{position:absolute;top:calc(100% - 10px);left:0;right:0;margin:0;opacity:0;padding:0;visibility:hidden;max-height:300px;overflow-y:auto;overflow-x:hidden;background-color:#fff;border:1px solid #000;border-top:0;padding-top:10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.selectField__Options::-webkit-scrollbar{width:4px;background:#ddd}.selectField__Options::-webkit-scrollbar-corner,.selectField__Options ::-webkit-scrollbar-track{background:#ddd}.selectField__Options::-webkit-scrollbar-thumb{background:#888}.selectField__Options li{position:relative;outline:0;padding:10px;cursor:pointer}.selectField__Options li:focus,.selectField__Options li:hover{background-color:#eee}.selectField__Options li.isSelected{background-color:#ddd}.selectField__Options .checkboxField{width:100%}.selectField__Options .checkboxField__Wrapper label{width:14px;min-width:14px;height:14px;min-height:14px}.selectField__Options .checkboxField__Wrapper label:before{top:2px;left:2px;right:2px;bottom:2px}.selectField__Options .checkboxField__Label{position:static;font-size:14px;line-height:1}.selectField__Options .checkboxField__Label:before{position:absolute;content:"";top:0;left:0;right:0;bottom:0}.selectField__Options.isMultiple li{display:flex;align-items:center}.selectField__Prepend{padding-right:10px}.selectField__Append{padding-right:20px}.selectField__Prepend,.selectField__Append{white-space:nowrap}.selectField__Prepend img,.selectField__Append img{display:block;max-width:20px}.textareaField__Wrapper{position:relative;border-bottom:1px solid rgba(255,255,255,.15);width:100%;overflow:hidden;margin-bottom:35rem}.textareaField__Wrapper textarea{border:0;outline:0;width:100%;display:block;height:65rem;padding-left:0;padding-right:0;transition:border 200ms;font-size:33rem;line-height:50rem;background-color:rgba(0,0,0,0);color:#fff}.textareaField__Wrapper textarea::-webkit-scrollbar{width:4px;background:#ddd}.textareaField__Wrapper textarea::-webkit-scrollbar-corner,.textareaField__Wrapper textarea ::-webkit-scrollbar-track{background:#ddd}.textareaField__Wrapper textarea::-webkit-scrollbar-thumb{background:#888}.textareaField__Wrapper textarea:disabled{background-color:#eee}.textareaField{position:relative}.textareaField.isDisabled .textareaField__Wrapper{opacity:.5}.textareaField.isDisabled input{background-color:#eee}.textareaField.isError .textareaField__Wrapper{border-color:red}@media screen and (min-width: 769px){.textareaField.isInline{display:flex;align-items:flex-start}.textareaField.isInline .textareaField__Wrapper{margin:0 10px}}.textField__Wrapper,.fileField__Wrapper{position:relative;display:flex;width:100%;min-height:43px;align-items:center;background-color:rgba(0,0,0,0);border-bottom:1px solid rgba(255,255,255,.15);margin-bottom:35rem;transition:border 200ms}.textField__Wrapper input,.fileField__Wrapper input{border:0;outline:0;width:100%;padding:5rem 0;font-size:33rem;line-height:50rem;background-color:rgba(0,0,0,0);color:#fff}.textField,.fileField{position:relative}.textField.isDisabled .textField__Wrapper,.isDisabled.fileField .textField__Wrapper,.textField.isDisabled .fileField__Wrapper,.isDisabled.fileField .fileField__Wrapper{border-color:#aaa;background-color:#eee}.textField.isDisabled input,.isDisabled.fileField input{background-color:#eee}.textField.isError .textField__Wrapper,.isError.fileField .textField__Wrapper,.textField.isError .fileField__Wrapper,.isError.fileField .fileField__Wrapper{border-color:red}@media screen and (min-width: 769px){.textField.isInline,.isInline.fileField{display:flex;align-items:center}.textField.isInline .textField__Wrapper,.isInline.fileField .textField__Wrapper,.textField.isInline .fileField__Wrapper,.isInline.fileField .fileField__Wrapper{margin:0 0 0 10px}.textField.isInline .textField__Wrapper+*,.isInline.fileField .textField__Wrapper+*,.textField.isInline .fileField__Wrapper+*,.isInline.fileField .fileField__Wrapper+*{margin-left:10px}}.textField.isFocused .textField__Wrapper,.isFocused.fileField .textField__Wrapper,.textField.isFocused .fileField__Wrapper,.isFocused.fileField .fileField__Wrapper{border-bottom:1px solid #fff}.textField__Prepend{padding-left:10px;white-space:nowrap}.textField__Append{padding-right:10px;white-space:nowrap}.form__FieldTooltip{position:relative;z-index:1000;width:16px;height:16px}.form__FieldTooltip.isOpened .form__FieldTooltipIcon+.form__FieldTooltipText,.form__FieldTooltip.isOpened .form__FieldTooltipIcon:before{transition:opacity 200ms,visibility 200ms;opacity:1;visibility:visible}@media screen and (min-width: 769px){.form__FieldTooltip.isArrowOnBottom .form__FieldTooltipIcon:before{top:auto;bottom:-8px;border-width:0 8px 8px 8px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #aaa rgba(0,0,0,0)}}.form__FieldTooltip.isClickOnly{cursor:pointer}.form__FieldTooltipIcon{position:relative;display:block;width:16px;height:16px;line-height:16px;border-radius:50%;background-color:#aaa;text-align:center;color:#fff;font-size:10px;z-index:100}.form__FieldTooltipIcon:before{position:absolute;content:"";top:-8px;left:50%;width:0;height:0;opacity:0;visibility:hidden;border-style:solid;border-width:8px 8px 0 8px;border-color:#aaa rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);transform:translateX(-50%)}@media screen and (min-width: 769px){.form__FieldTooltipIcon:before{transition:opacity 200ms,visibility 200ms}}.form__FieldTooltipText{position:absolute;right:8px;bottom:100%;width:250px;background-color:#aaa;color:#fff;opacity:0;padding:10px;font-size:14px;visibility:hidden;font-weight:normal;will-change:opacity}@media screen and (min-width: 769px){.form__FieldTooltipText{transition:opacity 200ms,visibility 200ms}}.form__FieldTooltipText:before{position:absolute;content:"";top:0;left:0;right:0;bottom:-24px}@media screen and (max-width: 768px){.form__FieldTooltipText{position:fixed;left:5px !important;right:5px !important;bottom:auto !important;width:auto;transform:translateY(-100%) translateY(-8px)}}*{box-sizing:border-box}@media(min-width: 901px){*::-webkit-scrollbar{width:8px;height:8px}*::-webkit-scrollbar-corner,*::-webkit-scrollbar-track{background:#e9e7e9}*::-webkit-scrollbar-thumb{background:#140a23}}html,body,ul,ol{margin:0;padding:0}@media(max-width: 900px){html,body{overflow-x:hidden}}body{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:"Aeonik",sans-serif;font-size:16rem;color:#140a23}h1,h2,h3,h4,h5,h6,p{margin:0}svg{outline:0}ul{list-style:none}ul li{position:relative;padding-left:50rem;margin-bottom:25rem}@media(max-width: 900px){ul li{padding-left:40rem}}ul li:last-child{margin-bottom:0}ul li:before{position:absolute;content:"";top:50%;left:0;transform:translateY(-50%);width:22rem;height:22rem;background:url("/.resources/images/icon-list.svg") no-repeat center/100% 100%}a{text-decoration:none}@media(max-width: 518px){#ot-sdk-btn-floating.ot-floating-button{bottom:90rem !important;right:30rem !important;left:unset !important}}',
                "",
            ]),
                (e.exports = o);
        },
        function (e, t, r) {
            "use strict";
            r.r(t),
                r.d(t, "state", function () {
                    return l;
                }),
                r.d(t, "mutations", function () {
                    return m;
                }),
                r.d(t, "actions", function () {
                    return d;
                }),
                r.d(t, "getters", function () {
                    return c;
                });
            var o = r(1),
                n = r(13);
            const l = () => ({ pages: {}, links: {}, menus: {}, lang: "en", domain: void 0, isAxiosReady: !1, isJoined: !1 }),
                m = {
                    SET_DATA(e, { storage: t = e, key: r, data: data }) {
                        o.default.set(t, r, data);
                    },
                },
                d = {
                    async loadNextPage({ commit: e, dispatch: t }, r) {
                        let data = await t("getData", {
                            endpoint: r.endpoint,
                            template: r.template,
                            itemsOnPage: r.itemsOnPage,
                            filters: r.storage[r.key].filters,
                            offset: r.storage[r.key].offset,
                            fields: r.storage[r.key].fields,
                            order: r.order,
                        });
                        data.results = [...r.storage[r.key].results, ...data.results];
                        try {
                            data.next = data.count > data.results.length;
                        } catch (e) {}
                        e("SET_DATA", { storage: r.storage, key: r.key, data: data });
                    },
                    async setLanguage({ commit: e, dispatch: t }, { app: r, route: o }) {
                        let n = o.path.split("/")[1];
                        this.$i18n.localeCodes.includes(n) || (n = this.$i18n.defaultLocale), await e("SET_DATA", { key: "lang", data: n }), this.$i18n.setLocale(n), await t("setAxiosHeaders");
                    },
                    async setAxiosHeaders({ state: e, commit: t }) {
                        this.$axios.setHeader("accept-language", e.lang), (this.$axios.defaults.headers.common["accept-language"] = e.lang), t("SET_DATA", { key: "isAxiosReady", data: !0 });
                    },
                    async getData({}, e) {
                        let t,
                            r = {},
                            template = e.templates || (e.template ? [e.template] : void 0);
                        if ("string" == typeof e) t = e;
                        else if ("object" == typeof e) {
                            (t = e.endpoint),
                                (r = { params: { offset: 0, limit: e.itemsOnPage } }),
                                "offset" in e && (r.params.offset = e.offset),
                                "order" in e && (r.params.order = e.order),
                                e.fields && template && (r.params.fields = e.fields.join(","));
                            for (let t in e.filters) void 0 !== e.filters[t] && (r.params[t] = e.filters[t]);
                        }
                        template && (r.params.type = template.map((i) => `common.${i}Page`).join(","));
                        let data = await this.$axios.$get(t || "v2/pages/", r);
                        template && (data.results = data.items);
                        try {
                            (data.count = data.meta.total_count), (data.next = data.count > data.results.length), delete data.items, delete data.meta;
                        } catch (e) {}
                        return "object" == typeof e && ((data.offset = r.params.offset + r.params.limit), (data.filters = e.filters), (data.fields = e.fields)), data;
                    },
                    async getPageData({ state: e, commit: t }, { route: r, error: o, url: n, isDev: l }) {
                        let m = new Date();
                        if ((m.setSeconds(m.getSeconds() - 300), !e.pages.hasOwnProperty(r.path) || e.pages[r.path].last_nuxt_checked < m))
                            try {
                                let o = await this.$axios.get(`v2/pages/find/?html_path=${n || r.path}`);
                                o = o.data;
                                let l = { ...o, last_nuxt_checked: new Date() };
                                await t("SET_DATA", { storage: e.pages, key: r.path, data: l });
                            } catch (e) {
                                console.dir(e);
                                let t = e.response ? e.response.status : 404;
                                return void (l || o({ statusCode: t }));
                            }
                        await t("SET_DATA", { key: "currentPage", data: e.pages[r.path] });
                    },
                    async nuxtServerInit({ commit: e, dispatch: t }, r) {
                        let o = `http${r.req.connection.encrypted ? "s" : ""}://${r.req.headers.host}`;
                        await e("SET_DATA", { key: "domain", data: o }), await t("callSetup", r);
                    },
                    async callSetup({ dispatch: e, commit: t }, r) {
                        await e("setLanguage", r);
                        try {
                            const e = await this.$axios.get("setup/");
                            await t("SET_DATA", { key: "menus", data: e.data.menus }), await t("SET_DATA", { key: "links", data: e.data.links });
                        } catch (e) {
                            console.dir(e);
                        }
                    },
                },
                c = {
                    stripHtmlTags: () => (content) => {
                        if (content) {
                            let e = content.split(/<\/?[^>]+(>|$)/g),
                                t = [];
                            return (
                                e.forEach((e) => {
                                    "" !== e && ">" !== e && t.push(e);
                                }),
                                t.join(" ")
                            );
                        }
                        return "";
                    },
                    link: (e) => (t) => e.links[t] || "/",
                    formatText: () => (text) => (text ? text.replace(/({{(.*?)}})/g, (a, b, e) => `<b>${e}</b>`) : text),
                    getDominantColor: () => (image) => {
                        try {
                            return { color: image.meta.dominant_colors[0] || "#efefef" };
                        } catch (e) {}
                        return { color: "#b3b3b3" };
                    },
                    getSrcset: () => (image, e) => {
                        const t = { ...e };
                        return t.width ? (t.width *= 2) : t.height && (t.height *= 2), `${Object(n.a)(image, e)} 1x, ${Object(n.a)(image, t)} 2x`;
                    },
                    getSrcsetSizes: () => (image, e) => {
                        if (image) return `\n    ${Object(n.a)(image, { width: 900 })} 900w,\n    ${Object(n.a)(image, { width: 1920 })} 1920w,\n    ${Object(n.a)(image, { width: 2400 })} 2400w`;
                    },
                    getPageHead: (e, t) => (r, o = {}) => {
                        let n = "Website",
                            l = `${e.domain}/resources/images/default_share_image.jpg`,
                            m = "This is a default page description";
                        r &&
                            (r.image && r.image.meta && r.image.meta.url && (l = r.image.meta.url),
                            "" !== r.meta.search_description ? (m = r.meta.search_description) : r.lead && (m = t.stripHtmlTags(r.lead)),
                            "" !== r.meta.seo_title ? (n = r.meta.seo_title) : r.title && (n = r.title));
                        let head = {
                            htmlAttrs: { lang: "en" },
                            title: n,
                            meta: [
                                { hid: "description", name: "description", content: m },
                                { hid: "og:title", property: "og:title", content: n },
                                { hid: "og:description", property: "og:description", content: m },
                                { hid: "og:image", property: "og:image", content: l },
                                { hid: "og:url", property: "og:url", content: `${e.domain}${r ? r.sef : ""}` },
                                { hid: "twitter:card", name: "twitter:card", content: "summary" },
                                { hid: "twitter:title", name: "twitter:title", content: n },
                                { hid: "twitter:description", name: "twitter:description", content: m },
                                { hid: "twitter:image", name: "twitter:image", content: l },
                            ],
                        };
                        if (r && r.canonical && "" !== r.canonical) {
                            let link = { hid: "canonical", rel: "canonical", href: r.canonical };
                            head.link ? head.link.push(link) : (head.link = [link]);
                        }
                        return Object.assign(head, o);
                    },
                };
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, r) {
            var map = {
                "./AboutUs.vue": 161,
                "./BlogDetail.vue": 172,
                "./BlogList.vue": 173,
                "./ComplexCustomers.vue": 162,
                "./Cookies.vue": 174,
                "./Features.vue": 163,
                "./Home.vue": 175,
                "./JobDetail.vue": 164,
                "./JobList.vue": 165,
                "./Join.vue": 166,
                "./JoinThankYou.vue": 167,
                "./NewsList.vue": 168,
                "./Partners.vue": 176,
                "./PressDetail.vue": 177,
                "./PressList.vue": 178,
                "./Pricing.vue": 169,
                "./PrivacyPolicy.vue": 170,
                "./Support.vue": 171,
            };
            function o(e) {
                var t = n(e);
                return r(t);
            }
            function n(e) {
                if (!r.o(map, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw ((t.code = "MODULE_NOT_FOUND"), t);
                }
                return map[e];
            }
            (o.keys = function () {
                return Object.keys(map);
            }),
                (o.resolve = n),
                (e.exports = o),
                (o.id = 159);
        },
        function (e, t, r) {
            var map = {
                "./AboutUs": [71, 9],
                "./AboutUs.vue": [71, 9],
                "./BusinessClass": [72, 7],
                "./BusinessClass.vue": [72, 7],
                "./Cards": [73, 1],
                "./Cards.vue": [73, 1],
                "./ChangingImages": [74, 10],
                "./ChangingImages.vue": [74, 10],
                "./Clients": [75, 2],
                "./Clients.vue": [75, 2],
                "./Consultations": [76, 11],
                "./Consultations.vue": [76, 11],
                "./CostControl": [77, 12],
                "./CostControl.vue": [77, 12],
                "./Email": [78, 13],
                "./Email.vue": [78, 13],
                "./FAQ": [79, 6],
                "./FAQ.vue": [79, 6],
                "./Features": [80, 14],
                "./Features.vue": [80, 14],
                "./Hero": [81, 8],
                "./Hero.vue": [81, 8],
                "./Investors": [82, 3],
                "./Investors.vue": [82, 3],
                "./JobsList": [83, 15],
                "./JobsList.vue": [83, 15],
                "./Map": [84, 16],
                "./Map.vue": [84, 16],
                "./NewsMentions": [85, 4],
                "./NewsMentions.vue": [85, 4],
                "./Pricing": [86, 17],
                "./Pricing.vue": [86, 17],
                "./Regulations": [87, 18],
                "./Regulations.vue": [87, 18],
                "./RichText": [88, 19],
                "./RichText.vue": [88, 19],
                "./Sections": [89, 20],
                "./Sections.vue": [89, 20],
                "./Solutions": [90, 21],
                "./Solutions.vue": [90, 21],
                "./Testimonials": [91, 5],
                "./Testimonials.vue": [91, 5],
                "./TextImage": [92, 22],
                "./TextImage.vue": [92, 22],
                "./TextLink": [93, 23],
                "./TextLink.vue": [93, 23],
                "./TwoTexts": [94, 24],
                "./TwoTexts.vue": [94, 24],
            };
            function o(e) {
                if (!r.o(map, e))
                    return Promise.resolve().then(function () {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw ((t.code = "MODULE_NOT_FOUND"), t);
                    });
                var t = map[e],
                    o = t[0];
                return r.e(t[1]).then(function () {
                    return r(o);
                });
            }
            (o.keys = function () {
                return Object.keys(map);
            }),
                (o.id = 160),
                (e.exports = o);
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    layout: "about",
                    data: () => ({ jobList: "", isLoading: !1 }),
                    async asyncData(e) {
                        await e.store.dispatch("getPageData", e);
                        let t = {};
                        try {
                            t = await e.store.dispatch("getData", { endpoint: "/openings", itemsOnPage: 4 });
                        } catch (e) {
                            console.log(e);
                        }
                        return { jobs: t };
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return e.jobs.results
                            ? r(
                                  "div",
                                  [
                                      "AboutUs" === e.template && e.page.content ? r("StreamField", { staticClass: "about", attrs: { data: e.page.content } }) : e._e(),
                                      e._v(" "),
                                      r("section", { staticClass: "about__Jobs" }, [
                                          r(
                                              "div",
                                              { staticClass: "container" },
                                              [
                                                  r("div", { staticClass: "about__JobsHeading" }, [r("h2", [e._v(e._s(e.$t("about.jobsTitle")))])]),
                                                  e._v(" "),
                                                  e.jobs.results.length
                                                      ? [
                                                            r(
                                                                "div",
                                                                { staticClass: "about__JobsWrap" },
                                                                e._l(e.jobs.results, function (t) {
                                                                    return r("n-link", { key: t.id, attrs: { to: t.sef } }, [
                                                                        r("h3", { domProps: { textContent: e._s(t.title) } }),
                                                                        e._v(" "),
                                                                        r("p", [e._v(e._s(t.country) + " " + e._s(t.city))]),
                                                                        e._v(" "),
                                                                        r("span", [
                                                                            r(
                                                                                "svg",
                                                                                {
                                                                                    directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                                    attrs: {
                                                                                        viewBox: "0 0 25 25",
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        inline: "",
                                                                                        "data-src": "@/assets/svgs/arrow-top.svg",
                                                                                        role: "presentation",
                                                                                        focusable: "false",
                                                                                        tabindex: "-1",
                                                                                    },
                                                                                },
                                                                                [
                                                                                    r(
                                                                                        "g",
                                                                                        {
                                                                                            attrs: {
                                                                                                stroke: "currentColor",
                                                                                                "stroke-width": "1.28",
                                                                                                fill: "none",
                                                                                                "fill-rule": "evenodd",
                                                                                                "stroke-linecap": "round",
                                                                                                "stroke-linejoin": "round",
                                                                                            },
                                                                                        },
                                                                                        [r("path", { attrs: { d: "M12.309 22.924V8.49M19.032 15.226l-6.724-6.735-6.724 6.735" } })]
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                        ]),
                                                                    ]);
                                                                }),
                                                                1
                                                            ),
                                                            e._v(" "),
                                                            r(
                                                                "div",
                                                                { staticClass: "about__JobsButtonWrap" },
                                                                [
                                                                    r("n-link", { staticClass: "btn--White", attrs: { to: e.$store.getters.link("JobList") } }, [
                                                                        e._v("\n            " + e._s(e.$t("about.jobsBtn")) + "\n            "),
                                                                        r("span", [
                                                                            r(
                                                                                "svg",
                                                                                {
                                                                                    directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                                    attrs: {
                                                                                        viewBox: "0 0 15 14",
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        inline: "",
                                                                                        "data-src": "@/assets/svgs/arrow.svg",
                                                                                        role: "presentation",
                                                                                        focusable: "false",
                                                                                        tabindex: "-1",
                                                                                    },
                                                                                },
                                                                                [
                                                                                    r(
                                                                                        "g",
                                                                                        {
                                                                                            attrs: {
                                                                                                stroke: "currentColor",
                                                                                                "stroke-width": ".96",
                                                                                                fill: "none",
                                                                                                "fill-rule": "evenodd",
                                                                                                "stroke-linecap": "round",
                                                                                                "stroke-linejoin": "round",
                                                                                            },
                                                                                        },
                                                                                        [r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } })]
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                        ]),
                                                                    ]),
                                                                ],
                                                                1
                                                            ),
                                                        ]
                                                      : r("div", { staticClass: "about__noJob" }, [r("h3", [e._v(e._s(e.$t("jobList.noPosition")))])]),
                                              ],
                                              2
                                          ),
                                      ]),
                                  ],
                                  1
                              )
                            : e._e();
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { StreamField: r(6).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {},
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r(
                            "div",
                            { staticClass: "complexCustomersPage" },
                            [
                                r("section", { staticClass: "complexCustomers__Hero" }, [r("div", { staticClass: "container" }, [r("h1", { staticClass: "title--Light", domProps: { innerHTML: e._s(e.$t("customers.title")) } })])]),
                                e._v(" "),
                                "ComplexCustomers" === e.template && e.page.content ? r("StreamField", { attrs: { data: e.page.content } }) : e._e(),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { StreamField: r(6).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = { layout: "about" },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return e.page
                            ? r(
                                  "div",
                                  { staticClass: "features" },
                                  [
                                      r("div", { staticClass: "container" }, [
                                          r("div", { staticClass: "features__Hero" }, [
                                              r("div", { staticClass: "features__HeroWrap" }, [
                                                  r("div", { staticClass: "features__HeroText" }, [r("h1", { staticClass: "title--Dark", domProps: { innerHTML: e._s(e.$t("features.title")) } })]),
                                              ]),
                                              e._v(" "),
                                              r("div", { staticClass: "features__HeroLeadWrap" }, [
                                                  r("div", { staticClass: "features__HeroLeadLeft" }, [
                                                      r("h2", { domProps: { innerHTML: e._s(e.$store.getters.formatText(e.page.lead)) } }),
                                                      e._v(" "),
                                                      r(
                                                          "div",
                                                          { staticClass: "btnWrap" },
                                                          [
                                                              e.page.lead_cta
                                                                  ? r("n-link", { staticClass: "btn--Black", attrs: { to: e.$store.getters.link("Join") } }, [
                                                                        e._v("\n              " + e._s(e.page.lead_cta) + "\n              "),
                                                                        r("span", [
                                                                            r(
                                                                                "svg",
                                                                                {
                                                                                    directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                                    attrs: {
                                                                                        viewBox: "0 0 15 14",
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        inline: "",
                                                                                        "data-src": "@/assets/svgs/arrow.svg",
                                                                                        role: "presentation",
                                                                                        focusable: "false",
                                                                                        tabindex: "-1",
                                                                                    },
                                                                                },
                                                                                [
                                                                                    r(
                                                                                        "g",
                                                                                        {
                                                                                            attrs: {
                                                                                                stroke: "currentColor",
                                                                                                "stroke-width": ".96",
                                                                                                fill: "none",
                                                                                                "fill-rule": "evenodd",
                                                                                                "stroke-linecap": "round",
                                                                                                "stroke-linejoin": "round",
                                                                                            },
                                                                                        },
                                                                                        [r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } })]
                                                                                    ),
                                                                                ]
                                                                            ),
                                                                        ]),
                                                                    ])
                                                                  : e._e(),
                                                          ],
                                                          1
                                                      ),
                                                  ]),
                                                  e._v(" "),
                                                  r("div", { staticClass: "features__HeroImage" }, [
                                                      r("img", {
                                                          directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                          attrs: { "data-src": "/.resources/images/features-mobile-phone.png", alt: "Features hero", width: "307", height: "427" },
                                                      }),
                                                  ]),
                                              ]),
                                          ]),
                                      ]),
                                      e._v(" "),
                                      "Features" === e.template && e.page.content ? r("StreamField", { attrs: { data: e.page.content } }) : e._e(),
                                  ],
                                  1
                              )
                            : e._e();
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { StreamField: r(6).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    props: { data: {} },
                    data: () => ({
                        formData: { fullName: "", email: "", position: "", message: "", attachments: [] },
                        filesTooLarge: !1,
                        placeholderEmail: "",
                        placeholderName: "",
                        placeholderMessage: "",
                        emptyText: "",
                        filesAttached: "",
                        fileSize: "",
                        fileType: "",
                        isFormSent: !1,
                        isFormError: !1,
                        isValid: void 0,
                        pageTitle: "",
                    }),
                    mounted() {
                        (this.pageTitle = this.page.title),
                            "en" == this.$store.state.lang
                                ? ((this.placeholderEmail = "*E-Mail"),
                                  (this.placeholderName = "*Full name"),
                                  (this.placeholderMessage = "*Message"),
                                  (this.emptyText = "Please attach your resume"),
                                  (this.filesAttached = "Files attached"),
                                  (this.fileType = "Accepted multiple file types: PDF, DOC, JPG"),
                                  (this.fileSize = "Maximum file size: 10MB"))
                                : ((this.placeholderEmail = "*E-Mail"),
                                  (this.placeholderName = "*Vor - und Nachname"),
                                  (this.placeholderMessage = "*Nachricht"),
                                  (this.emptyText = "Bitte fügen Sie Ihren Lebenslauf bei"),
                                  (this.filesAttached = "Dateien angehängt"),
                                  (this.fileType = "Akzeptierte Dateitypen: PDF, DOC, JPG"),
                                  (this.fileSize = "Maximale Dateigröße: 10MB"));
                    },
                    methods: {
                        isFormValid() {
                            this.isValid = !this.$validate("email", this.formData.email).isError && this.formData.message.length > 0 && this.formData.fullName.length > 0 && this.formData.attachments.length > 0 && !this.filesTooLarge;
                        },
                        resizeTextArea() {
                            const element = document.querySelector("textarea");
                            "" !== element.value ? (element.style.height = `${element.scrollHeight}px`) : (element.style.height = "50rem");
                        },
                        async sendEmail() {
                            this.formData.position = this.page.title;
                            const e = new FormData();
                            for (const t in this.formData)
                                if ("attachments" !== t) e.append(t, this.formData[t]);
                                else for (const r of this.formData[t]) e.append("attachments", r);
                            try {
                                await this.$axios.post(this.$config.jobUrl, e, { headers: { "Content-Type": "multipart/form-data" } });
                                (this.isFormSent = !0),
                                    (this.isFormError = !1),
                                    setTimeout(() => {
                                        (this.isFormSent = !1), (this.formData.fullName = ""), (this.formData.email = ""), (this.formData.position = ""), (this.formData.message = ""), (this.formData.attachments = []), (this.isValid = !1);
                                    }, 8e3);
                            } catch (e) {
                                console.log(e), (this.isFormSent = !0), (this.isFormError = !0);
                            }
                        },
                    },
                    watch: {
                        "formData.attachments"() {
                            if (this.formData.attachments && this.formData.attachments.length > 0) {
                                this.formData.attachments.reduce((e, i) => (e += i.size), 0) > 10485760 && (this.filesTooLarge = !0);
                            } else this.filesTooLarge = !1;
                            this.isFormValid();
                        },
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("div", { staticClass: "jobDetail" }, [
                            r("div", { staticClass: "container" }, [
                                r("div", { staticClass: "jobDetail__Content" }, [
                                    e.page ? r("h1", { domProps: { textContent: e._s(e.page.title) } }) : e._e(),
                                    e._v(" "),
                                    e.page ? r("div", { domProps: { innerHTML: e._s(e.page.content) } }) : e._e(),
                                ]),
                                e._v(" "),
                                r("div", { staticClass: "jobDetail__Form" }, [
                                    r("h2", [e._v(e._s(e.$t("jobList.formTitle")))]),
                                    e._v(" "),
                                    e.isFormSent
                                        ? r("div", [
                                              e.isFormError ? e._e() : r("h3", { domProps: { innerHTML: e._s(e.$t("jobDetail.success")) } }),
                                              e._v(" "),
                                              e.isFormError ? r("h3", { domProps: { innerHTML: e._s(e.$t("jobDetail.error")) } }) : e._e(),
                                          ])
                                        : r(
                                              "form",
                                              {
                                                  class: { isValid: e.isValid },
                                                  on: {
                                                      submit: function (t) {
                                                          return t.preventDefault(), e.sendEmail.apply(null, arguments);
                                                      },
                                                      keyup: e.isFormValid,
                                                      input: e.isFormValid,
                                                  },
                                              },
                                              [
                                                  r("TextField", {
                                                      staticClass: "jobDetail__Name",
                                                      attrs: { type: "name", placeholder: e.placeholderName },
                                                      model: {
                                                          value: e.formData.fullName,
                                                          callback: function (t) {
                                                              e.$set(e.formData, "fullName", t);
                                                          },
                                                          expression: "formData.fullName",
                                                      },
                                                  }),
                                                  e._v(" "),
                                                  r("TextField", {
                                                      staticClass: "jobDetail__Email",
                                                      attrs: { type: "email", placeholder: e.placeholderEmail },
                                                      model: {
                                                          value: e.formData.email,
                                                          callback: function (t) {
                                                              e.$set(e.formData, "email", t);
                                                          },
                                                          expression: "formData.email",
                                                      },
                                                  }),
                                                  e._v(" "),
                                                  r("TextareaField", {
                                                      ref: "textarea",
                                                      staticClass: "jobDetail__Message",
                                                      attrs: { placeholder: e.placeholderMessage },
                                                      on: { input: e.resizeTextArea },
                                                      model: {
                                                          value: e.formData.message,
                                                          callback: function (t) {
                                                              e.$set(e.formData, "message", t);
                                                          },
                                                          expression: "formData.message",
                                                      },
                                                  }),
                                                  e._v(" "),
                                                  r("FileField", {
                                                      staticClass: "jobDetail__FileUpload",
                                                      attrs: {
                                                          empty: e.emptyText,
                                                          filesAttached: e.filesAttached,
                                                          fileType: e.fileType,
                                                          fileSize: e.fileSize,
                                                          multiple: "",
                                                          accept: "image/jpg, image/jpeg, application/pdf, .doc, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                                      },
                                                      scopedSlots: e._u(
                                                          [
                                                              {
                                                                  key: "icon",
                                                                  fn: function () {
                                                                      return [
                                                                          r("img", {
                                                                              directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                              attrs: { "data-src": "/.resources/images/icon-job-file.svg", alt: "Icon job", width: "30", height: "30" },
                                                                          }),
                                                                      ];
                                                                  },
                                                                  proxy: !0,
                                                              },
                                                          ],
                                                          null,
                                                          !1,
                                                          872565644
                                                      ),
                                                      model: {
                                                          value: e.formData.attachments,
                                                          callback: function (t) {
                                                              e.$set(e.formData, "attachments", t);
                                                          },
                                                          expression: "formData.attachments",
                                                      },
                                                  }),
                                                  e._v(" "),
                                                  r("div", { staticClass: "form__Privacy" }, [
                                                      r(
                                                          "p",
                                                          [
                                                              e._v("\n            " + e._s(e.$t("jobDetail.terms1")) + " "),
                                                              r("n-link", { attrs: { to: e.$store.getters.link("PrivacyPolicy") || "" } }, [e._v(" " + e._s(e.$t("jobDetail.termsLink")) + " ")]),
                                                              e._v(" " + e._s(e.$t("jobDetail.terms2")) + "\n          "),
                                                          ],
                                                          1
                                                      ),
                                                      e._v(" "),
                                                      r("div", [
                                                          r("button", { staticClass: "btn--Black", attrs: { disabled: !e.isValid } }, [
                                                              e._v("\n              " + e._s(e.$t("footer.btn")) + "\n              "),
                                                              r("span", [
                                                                  r(
                                                                      "svg",
                                                                      {
                                                                          directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                          attrs: {
                                                                              viewBox: "0 0 15 14",
                                                                              xmlns: "http://www.w3.org/2000/svg",
                                                                              inline: "",
                                                                              "data-src": "@/assets/svgs/arrow.svg",
                                                                              role: "presentation",
                                                                              focusable: "false",
                                                                              tabindex: "-1",
                                                                          },
                                                                      },
                                                                      [
                                                                          r("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                                              r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                                          ]),
                                                                      ]
                                                                  ),
                                                              ]),
                                                          ]),
                                                      ]),
                                                  ]),
                                              ],
                                              1
                                          ),
                                ]),
                            ]),
                            e._v(" "),
                            r("div", { staticClass: "pressDetail__BreadcrumbsWrap" }, [
                                r("div", { staticClass: "container" }, [
                                    r("ul", { staticClass: "blogDetail__Breadcrumbs" }, [
                                        r("li", [r("n-link", { staticClass: "navigation__Logo", attrs: { to: e.$store.getters.link("Home") } }, [e._v("Homepage")])], 1),
                                        e._v(" "),
                                        r("li", [r("n-link", { staticClass: "navigation__Logo", attrs: { to: e.$store.getters.link("AboutUs") } }, [e._v("About Us")])], 1),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { TextField: r(29).default, TextareaField: r(69).default, FileField: r(70).default, Button: r(10).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    data: () => ({ jobList: "", isLoading: !1 }),
                    async asyncData(e) {
                        await e.store.dispatch("getPageData", e);
                        let t = {};
                        try {
                            t = await e.store.dispatch("getData", { endpoint: "/openings" });
                        } catch (e) {
                            console.log(e);
                        }
                        return { jobs: t };
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("section", { staticClass: "jobList" }, [
                            r("div", { staticClass: "container" }, [
                                r("div", { staticClass: "jobList__JobsHeading" }, [r("h1", { staticClass: "title--Light", domProps: { innerHTML: e._s(e.$t("jobList.jobTitle")) } })]),
                                e._v(" "),
                                e.jobs.results.length
                                    ? r(
                                          "div",
                                          { staticClass: "jobList__JobsWrap" },
                                          e._l(e.jobs.results, function (t) {
                                              return r("n-link", { key: t.id, attrs: { to: t.sef } }, [
                                                  r("h3", { domProps: { textContent: e._s(t.title) } }),
                                                  e._v(" "),
                                                  r("p", [e._v(e._s(t.country) + " " + e._s(t.city))]),
                                                  e._v(" "),
                                                  r("span", [
                                                      r(
                                                          "svg",
                                                          {
                                                              directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                              attrs: {
                                                                  viewBox: "0 0 25 25",
                                                                  xmlns: "http://www.w3.org/2000/svg",
                                                                  inline: "",
                                                                  "data-src": "@/assets/svgs/arrow-top.svg",
                                                                  role: "presentation",
                                                                  focusable: "false",
                                                                  tabindex: "-1",
                                                              },
                                                          },
                                                          [
                                                              r("g", { attrs: { stroke: "currentColor", "stroke-width": "1.28", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                                  r("path", { attrs: { d: "M12.309 22.924V8.49M19.032 15.226l-6.724-6.735-6.724 6.735" } }),
                                                              ]),
                                                          ]
                                                      ),
                                                  ]),
                                              ]);
                                          }),
                                          1
                                      )
                                    : r("div", { staticClass: "jobList__noJob" }, [r("h3", [e._v(e._s(e.$t("jobList.noPosition")))])]),
                            ]),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    layout: "welcome",
                    data: () => ({ isFormSent: !1, isValid: void 0, isDisabled: !0, isError: !1, formData: { email: "", notificationSubscription: "" }, placeholderText: "" }),
                    mounted() {
                        this.placeholderText = "en" === this.$store.state.lang ? "Enter your email address" : "Ihre E-mail";
                    },
                    methods: {
                        async sendForm() {
                            this.isDisabled = !0;
                            try {
                                "success" === (await this.$axios.post("register/", this.formData)).data.result
                                    ? (await this.$store.commit("SET_DATA", { key: "isJoined", data: !0 }), this.$router.push(this.$store.getters.link("JoinThankYou")))
                                    : ((this.isError = !0), (this.formData.email = ""), (this.isValid = !1));
                            } catch (e) {
                                console.log(e), (this.isError = !0), (this.formData.email = ""), (this.isValid = !1);
                            }
                            setTimeout(() => {
                                this.isValid = !1;
                            }, 300);
                        },
                        isEmailValid(e) {
                            e &&
                                ((e.key && "enter" !== e.key.toLowerCase()) || (e.type && "paste" === e.type)) &&
                                setTimeout(() => {
                                    (this.isValid = !this.$validate("email", this.formData.email).isError), (this.isDisabled = this.$validate("email", this.formData.email).isError);
                                }, 1);
                        },
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("div", { staticClass: "join" }, [
                            r("div", { staticClass: "container" }, [
                                r("h1", { staticClass: "title--Light", domProps: { innerHTML: e._s(e.$t("join.title")) } }),
                                e._v(" "),
                                r("div", { staticClass: "join__Wrapper" }, [
                                    r("div", { staticClass: "join__Card" }, [
                                        r("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-src": "/.resources/images/heroCard.png", alt: "Card", width: "372", height: "218" } }),
                                        e._v(" "),
                                        e._e(),
                                    ]),
                                    e._v(" "),
                                    r(
                                        "div",
                                        { staticClass: "join__Form" },
                                        [
                                            e.isError ? e._e() : r("p", { domProps: { innerHTML: e._s(e.page.lead) } }),
                                            e._v(" "),
                                            e.isError ? e._e() : r("p", { staticClass: "note", domProps: { textContent: e._s(e.page.note) } }),
                                            e._v(" "),
                                            e.isError
                                                ? [
                                                      r("h2", { staticClass: "join__ErrorTitle", domProps: { innerHTML: e._s(e.$t("join.errorTitle")) } }),
                                                      e._v(" "),
                                                      r("p", { staticClass: "join__ErrorText", domProps: { innerHTML: e._s(e.$t("join.errorText")) } }),
                                                  ]
                                                : e._e(),
                                            e._v(" "),
                                            r(
                                                "form",
                                                {
                                                    class: { isValid: e.isValid },
                                                    on: {
                                                        submit: function (t) {
                                                            return t.preventDefault(), e.sendForm.apply(null, arguments);
                                                        },
                                                        keyup: e.isEmailValid,
                                                        input: e.isEmailValid,
                                                        paste: e.isEmailValid,
                                                    },
                                                },
                                                [
                                                    r("TextField", {
                                                        attrs: { type: "email", label: e.$t("join.label"), placeholder: e.placeholderText },
                                                        model: {
                                                            value: e.formData.email,
                                                            callback: function (t) {
                                                                e.$set(e.formData, "email", t);
                                                            },
                                                            expression: "formData.email",
                                                        },
                                                    }),
                                                    e._v(" "),
                                                    r(
                                                        "div",
                                                        { staticClass: "join__FormButton" },
                                                        [
                                                            r("i18n", {
                                                                attrs: { tag: "p", path: "join.formText" },
                                                                scopedSlots: e._u([
                                                                    {
                                                                        key: "privacyPolicy",
                                                                        fn: function () {
                                                                            return [r("n-link", { attrs: { to: e.$store.getters.link("PrivacyPolicy") } }, [e._v(e._s(e.$t("join.formTextPrivacy")))])];
                                                                        },
                                                                        proxy: !0,
                                                                    },
                                                                ]),
                                                            }),
                                                            e._v(" "),
                                                            r("div", [
                                                                r("button", { staticClass: "btn--Red", attrs: { disabled: e.isDisabled } }, [
                                                                    e._v("\n                " + e._s(e.$t("join.button")) + "\n                "),
                                                                    r("span", [
                                                                        r(
                                                                            "svg",
                                                                            {
                                                                                directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                                attrs: {
                                                                                    viewBox: "0 0 15 14",
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    inline: "",
                                                                                    "data-src": "@/assets/svgs/arrow.svg",
                                                                                    role: "presentation",
                                                                                    focusable: "false",
                                                                                    tabindex: "-1",
                                                                                },
                                                                            },
                                                                            [
                                                                                r(
                                                                                    "g",
                                                                                    { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } },
                                                                                    [r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } })]
                                                                                ),
                                                                            ]
                                                                        ),
                                                                    ]),
                                                                ]),
                                                            ]),
                                                        ],
                                                        1
                                                    ),
                                                ],
                                                1
                                            ),
                                        ],
                                        2
                                    ),
                                ]),
                            ]),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { TextField: r(29).default, Button: r(10).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = { layout: "welcome", middleware: "isJoined" },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("div", { staticClass: "join" }, [
                            r("div", { staticClass: "container" }, [
                                r("h1", { staticClass: "title--Light", domProps: { innerHTML: e._s(e.$t("join.title")) } }),
                                e._v(" "),
                                r("div", { staticClass: "join__Wrapper" }, [
                                    r("div", { staticClass: "join__Card" }, [
                                        r("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-src": "/.resources/images/heroCard.png", alt: "Card", width: "372", height: "218" } }),
                                        e._v(" "),
                                        e._e(),
                                    ]),
                                    e._v(" "),
                                    e.page ? r("div", { staticClass: "join__Success" }, [r("h2", { domProps: { innerHTML: e._s(e.page.title) } }), e._v(" "), r("p", { domProps: { innerHTML: e._s(e.page.lead) } })]) : e._e(),
                                ]),
                            ]),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    async asyncData(e) {
                        await e.store.dispatch("getPageData", e);
                        let t = {},
                            r = {};
                        try {
                            let o = await e.store.dispatch("getData", { template: ["PressDetail"], itemsOnPage: 4, fields: ["title", "formated_date", "sef", "news_site", "date_published"], order: "-date_published" });
                            (t = o),
                                (o = await e.store.dispatch("getData", { template: ["BlogDetail"], itemsOnPage: 6, fields: ["title", "page_image", "read_time", "formated_date", "sef", "date_published"], order: "-date_published" })),
                                (r = o);
                        } catch (e) {
                            console.log(e);
                        }
                        return { press: t, blogs: r, isLoading: !1 };
                    },
                    methods: {
                        async loadMore(e, template) {
                            this.isLoading = !0;
                            try {
                                await this.$store.dispatch("loadNextPage", { template: [template], itemsOnPage: 3, storage: this, key: e }), (this.isLoading = !1);
                            } catch (e) {}
                        },
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("div", { staticClass: "newsList" }, [
                            r("div", { staticClass: "newsList__Blog", attrs: { id: "newsListBlog" } }, [
                                r("div", { staticClass: "container" }, [
                                    r("div", { staticClass: "newsList__Heading" }, [
                                        e._m(0),
                                        e._v(" "),
                                        r("div", [r("p", [e._v(e._s(e.$t("news.blogListLead")))]), e._v(" "), r("a", { staticClass: "btn--View", attrs: { href: "#newsletter" } }, [e._v(e._s(e.$t("news.blogListNewsletter")))])]),
                                    ]),
                                    e._v(" "),
                                    r(
                                        "div",
                                        { staticClass: "newsList__BlogList" },
                                        e._l(e.blogs.results, function (t) {
                                            return r("n-link", { key: t.id, staticClass: "newsList__BlogItem", attrs: { to: t.sef } }, [
                                                t.page_image
                                                    ? r("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-src": t.page_image.meta.url, alt: t.page_image.alt, width: "370", height: "370" } })
                                                    : e._e(),
                                                e._v(" "),
                                                r("h2", { domProps: { innerHTML: e._s(t.title) } }),
                                                e._v(" "),
                                                r("div", [
                                                    e._e(),
                                                    e._v(" "),
                                                    r("span", { domProps: { innerHTML: e._s(t.formated_date) } }),
                                                    e._v(" "),
                                                    r(
                                                        "svg",
                                                        {
                                                            directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                            attrs: {
                                                                viewBox: "0 0 25 25",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                inline: "",
                                                                "data-src": "@/assets/svgs/arrow-top.svg",
                                                                role: "presentation",
                                                                focusable: "false",
                                                                tabindex: "-1",
                                                            },
                                                        },
                                                        [
                                                            r("g", { attrs: { stroke: "currentColor", "stroke-width": "1.28", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                                r("path", { attrs: { d: "M12.309 22.924V8.49M19.032 15.226l-6.724-6.735-6.724 6.735" } }),
                                                            ]),
                                                        ]
                                                    ),
                                                ]),
                                            ]);
                                        }),
                                        1
                                    ),
                                    e._v(" "),
                                    r("div", { staticClass: "newsList__BlogButton" }, [
                                        e.blogs.next
                                            ? r(
                                                  "button",
                                                  {
                                                      staticClass: "btn--White",
                                                      attrs: { disabled: e.isLoading },
                                                      on: {
                                                          click: function (t) {
                                                              return e.loadMore("blogs", "BlogDetail");
                                                          },
                                                      },
                                                  },
                                                  [
                                                      e._v("\n            " + e._s(e.$t("news.blogLoad")) + "\n            "),
                                                      r("span", [
                                                          r(
                                                              "svg",
                                                              {
                                                                  directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                  attrs: {
                                                                      viewBox: "0 0 15 14",
                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                      inline: "",
                                                                      "data-src": "@/assets/svgs/arrow.svg",
                                                                      role: "presentation",
                                                                      focusable: "false",
                                                                      tabindex: "-1",
                                                                  },
                                                              },
                                                              [
                                                                  r("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                                      r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                                  ]),
                                                              ]
                                                          ),
                                                      ]),
                                                  ]
                                              )
                                            : e._e(),
                                    ]),
                                ]),
                            ]),
                            e._v(" "),
                            r("div", { staticClass: "newsList__Press", attrs: { id: "newsListPress" } }, [
                                r("div", { staticClass: "container" }, [
                                    r("div", { staticClass: "newsList__Heading" }, [e._m(1), e._v(" "), r("div", [r("p", [e._v(e._s(e.$t("news.pressListLead")))])])]),
                                    e._v(" "),
                                    r(
                                        "div",
                                        { staticClass: "newsList__PressList" },
                                        e._l(e.press.results, function (t) {
                                            return r("n-link", { key: t.id, staticClass: "newsList__PressItem", attrs: { to: t.sef } }, [
                                                r("div", { staticClass: "arrow" }, [
                                                    r(
                                                        "svg",
                                                        {
                                                            directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                            attrs: { viewBox: "0 0 15 14", xmlns: "http://www.w3.org/2000/svg", inline: "", "data-src": "@/assets/svgs/arrow.svg", role: "presentation", focusable: "false", tabindex: "-1" },
                                                        },
                                                        [
                                                            r("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                                r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                            ]),
                                                        ]
                                                    ),
                                                ]),
                                                e._v(" "),
                                                r("h3", { domProps: { innerHTML: e._s(t.title) } }),
                                                e._v(" "),
                                                r("div", [r("p", { domProps: { innerHTML: e._s(t.news_site) } }), e._v(" "), r("span", { domProps: { innerHTML: e._s(t.formated_date) } })]),
                                            ]);
                                        }),
                                        1
                                    ),
                                    e._v(" "),
                                    r("div", { staticClass: "newsList__BlogButton" }, [
                                        e.press.next
                                            ? r(
                                                  "button",
                                                  {
                                                      staticClass: "btn--White",
                                                      attrs: { disabled: e.isLoading },
                                                      on: {
                                                          click: function (t) {
                                                              return e.loadMore("press", "PressDetail");
                                                          },
                                                      },
                                                  },
                                                  [
                                                      e._v("\n          " + e._s(e.$t("news.pressLoad")) + "\n          "),
                                                      r("span", [
                                                          r(
                                                              "svg",
                                                              {
                                                                  directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                  attrs: {
                                                                      viewBox: "0 0 15 14",
                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                      inline: "",
                                                                      "data-src": "@/assets/svgs/arrow.svg",
                                                                      role: "presentation",
                                                                      focusable: "false",
                                                                      tabindex: "-1",
                                                                  },
                                                              },
                                                              [
                                                                  r("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                                      r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                                  ]),
                                                              ]
                                                          ),
                                                      ]),
                                                  ]
                                              )
                                            : e._e(),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                    [
                        function () {
                            var e = this,
                                t = e.$createElement,
                                r = e._self._c || t;
                            return r("h1", { staticClass: "title--Light" }, [r("span", [e._v("Blog")])]);
                        },
                        function () {
                            var e = this,
                                t = e.$createElement,
                                r = e._self._c || t;
                            return r("h2", { staticClass: "title--Light" }, [r("span", [e._v("Press")])]);
                        },
                    ],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { Button: r(10).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = { layout: "about" },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r(
                            "div",
                            { staticClass: "pricingPage" },
                            [
                                r("section", { staticClass: "pricing__Hero" }, [
                                    r("div", { staticClass: "container" }, [r("h1", { staticClass: "title--Dark", domProps: { innerHTML: e._s(e.$t("pricing.title")) } })]),
                                    e._v(" "),
                                    r("div", { staticClass: "container--Mid" }, [e.page.lead ? r("h2", { domProps: { innerHTML: e._s(e.$store.getters.formatText(e.page.lead)) } }) : e._e()]),
                                ]),
                                e._v(" "),
                                "Pricing" === e.template && e.page.content ? r("StreamField", { attrs: { data: e.page.content } }) : e._e(),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { StreamField: r(6).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    mounted() {
                        setTimeout(() => {
                            const e = document.querySelector("#imprint"),
                                t = document.querySelector("#impressum");
                            this.$route.hash.includes("imprint") && e && e.scrollIntoView({ behavior: "smooth" }), this.$route.hash.includes("impressum") && t && t.scrollIntoView({ behavior: "smooth" });
                        }, 15);
                    },
                },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r(
                            "div",
                            { staticClass: "privacy" },
                            [
                                r("div", { staticClass: "privacy__LeadWrap" }, [
                                    r("div", { staticClass: "container" }, [
                                        e.page.title ? r("h1", { domProps: { innerHTML: e._s(e.page.title) } }) : e._e(),
                                        e._v(" "),
                                        r("div", [e.page.lead ? r("h2", { domProps: { innerHTML: e._s(e.page.lead) } }) : e._e()]),
                                    ]),
                                ]),
                                e._v(" "),
                                "PrivacyPolicy" === e.template && e.page.content ? r("StreamField", { attrs: { data: e.page.content } }) : e._e(),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { StreamField: r(6).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = { layout: "about" },
                n = r(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r(
                            "div",
                            { staticClass: "supportPage" },
                            [
                                r("section", { staticClass: "support__Hero" }, [r("div", { staticClass: "container" }, [r("h1", { staticClass: "title--Dark", domProps: { innerHTML: e._s(e.$t("support.title")) } })])]),
                                e._v(" "),
                                "Support" === e.template && e.page.content ? r("StreamField", { attrs: { data: e.page.content } }) : e._e(),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { StreamField: r(6).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = r(0),
                component = Object(o.a)(
                    {},
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r(
                            "div",
                            { staticClass: "blogDetail" },
                            [
                                r("div", { staticClass: "blogDetail__Hero" }, [
                                    r("div", { staticClass: "container" }, [
                                        r("div", { staticClass: "blogDetail__HeroWrap" }, [
                                            e.page.page_image
                                                ? r("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-src": e.page.page_image.meta.url, alt: e.page.page_image.alt, width: "606", height: "404" } })
                                                : e._e(),
                                            e._v(" "),
                                            r("div", [
                                                r("h1", { domProps: { innerHTML: e._s(e.page.title) } }),
                                                e._v(" "),
                                                r("p", [r("span", [e._v(e._s(e.page.read_time) + " min")]), e._v("\n            " + e._s(e.page.formated_date) + "\n          ")]),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                                e._v(" "),
                                e.page.lead ? r("div", { staticClass: "blogDetail__LeadWrap" }, [r("div", { staticClass: "container" }, [r("div", [r("h2", { domProps: { innerHTML: e._s(e.page.lead) } })])])]) : e._e(),
                                e._v(" "),
                                "BlogDetail" === e.template && e.page.content ? r("StreamField", { attrs: { data: e.page.content } }) : e._e(),
                                e._v(" "),
                                r("div", { staticClass: "blogDetail__Related" }, [
                                    r("div", { staticClass: "container" }, [
                                        r("h2", { staticClass: "blogDetail__RelatedTitle" }, [e._v("Insights from our Blog")]),
                                        e._v(" "),
                                        r(
                                            "div",
                                            { staticClass: "newsList__BlogList" },
                                            e._l(e.page.latest_blogs, function (t) {
                                                return r("n-link", { key: t.id, staticClass: "newsList__BlogItem", attrs: { to: t.sef } }, [
                                                    t.page_image
                                                        ? r("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-src": t.page_image.meta.url, alt: t.page_image.alt, width: "370", height: "370" } })
                                                        : e._e(),
                                                    e._v(" "),
                                                    r("h2", { domProps: { innerHTML: e._s(t.title) } }),
                                                    e._v(" "),
                                                    r("div", [
                                                        e._e(),
                                                        e._v(" "),
                                                        r("span", { domProps: { innerHTML: e._s(t.formated_date) } }),
                                                        e._v(" "),
                                                        r(
                                                            "svg",
                                                            {
                                                                directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                attrs: {
                                                                    viewBox: "0 0 25 25",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    inline: "",
                                                                    "data-src": "@/assets/svgs/arrow-top.svg",
                                                                    role: "presentation",
                                                                    focusable: "false",
                                                                    tabindex: "-1",
                                                                },
                                                            },
                                                            [
                                                                r("g", { attrs: { stroke: "currentColor", "stroke-width": "1.28", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                                    r("path", { attrs: { d: "M12.309 22.924V8.49M19.032 15.226l-6.724-6.735-6.724 6.735" } }),
                                                                ]),
                                                            ]
                                                        ),
                                                    ]),
                                                ]);
                                            }),
                                            1
                                        ),
                                        e._v(" "),
                                        r("ul", { staticClass: "blogDetail__Breadcrumbs" }, [
                                            r("li", [r("n-link", { staticClass: "navigation__Logo", attrs: { to: e.$store.getters.link("Home") } }, [e._v("Homepage")])], 1),
                                            e._v(" "),
                                            r("li", [r("n-link", { staticClass: "navigation__Logo", attrs: { to: e.$store.getters.link("NewsList") } }, [e._v("Blog")])], 1),
                                        ]),
                                    ]),
                                ]),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { StreamField: r(6).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = r(0),
                component = Object(o.a)(
                    {},
                    function () {
                        var e = this,
                            t = e.$createElement;
                        return (e._self._c || t)("div", [e._v("\n  BlogList\n")]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = r(0),
                component = Object(o.a)(
                    {},
                    function () {
                        var e = this,
                            t = e.$createElement;
                        e._self._c;
                        return e._m(0);
                    },
                    [
                        function () {
                            var e = this,
                                t = e.$createElement,
                                r = e._self._c || t;
                            return r("div", { staticClass: "privacy" }, [
                                r("div", { staticClass: "container" }, [
                                    r("div", { staticClass: "privacy__Wrapper" }, [
                                        r("div", { staticClass: "privacy__Sidebar" }),
                                        e._v(" "),
                                        r("div", { staticClass: "privacy__Content" }, [
                                            r("section", { attrs: { id: "privacyPolicy" } }, [
                                                r("div", { staticClass: "content" }, [
                                                    r("h1", [e._v("Cookie policy")]),
                                                    e._v(" "),
                                                    r("div", { staticClass: "intro" }, [r("strong", [e._v("\n                General information about cookies and how they are used\n              ")])]),
                                                    e._v(" "),
                                                    r("p", [
                                                        e._v("\n              Cookies are a piece of data sent from a web site and stored in your browser's memory.\n              "),
                                                        r("br"),
                                                        e._v(
                                                            "\n              Cookies can be required to allow a web site to function properly as web sites are stateless (they don't remember user information from one internal page to another) but sometimes they are used to track user actions within one web or across multiple webs in order to collect usage information or identify interests and map behavior to be able to offer relevant advertisements.\n              "
                                                        ),
                                                        r("br"),
                                                        e._v(
                                                            "\n              When web sites use the CookieHub Consent Management Platform (CMP) they offer you the choice to allow or deny certain cookie categories which helps protect your privacy. Below is a description on the most common cookie categories.\n            "
                                                        ),
                                                    ]),
                                                    e._v(" "),
                                                    r("h3", [e._v("Necessary cookies")]),
                                                    e._v(" "),
                                                    r("p", [
                                                        e._v("\n              Necessary cookies are used to make a web site function properly, they are generally not used for tracking and are not shared between webs.\n              "),
                                                        r("br"),
                                                        e._v(
                                                            "\n              The most common necessary action performed using a cookie is user authentication. When you log in to any web site, a cookie is stored in your browser including some piece of data used by the web to remember who is authenticated when you go to another internal page or refresh the site.\n              "
                                                        ),
                                                        r("br"),
                                                        e._v("\n              Cookies are also used so that a web knows what's in your shopping cart, load balancing information and more.\n            "),
                                                    ]),
                                                    e._v(" "),
                                                    r("h3", [e._v("Preference cookies")]),
                                                    e._v(" "),
                                                    r("p", [
                                                        e._v(
                                                            "\n              Preference cookies enables the web site to remember information to customize how the web site looks or behaves for each user. This may include storing selected currency, region, language or color theme.\n            "
                                                        ),
                                                    ]),
                                                    e._v(" "),
                                                    r("h3", [e._v("Marketing cookies")]),
                                                    e._v(" "),
                                                    r("p", [e._v("\n              Marketing cookies are used to track visitors across websites to allow publishers to display relevant and engaging advertisements.\n            ")]),
                                                ]),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                            ]);
                        },
                    ],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = r(0),
                component = Object(o.a)(
                    {},
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("div", { ref: "home", staticClass: "home" }, ["Home" === e.template && e.page.content ? r("StreamField", { attrs: { data: e.page.content } }) : e._e()], 1);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { StreamField: r(6).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = r(0),
                component = Object(o.a)(
                    {},
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r(
                            "div",
                            { staticClass: "partnersPage" },
                            [
                                r("div", { staticClass: "partners__Hero" }, [
                                    r("div", { staticClass: "container" }, [
                                        r("h1", { staticClass: "title--Light", domProps: { innerHTML: e._s(e.$t("partners.title")) } }),
                                        e._v(" "),
                                        r("p", { domProps: { innerHTML: e._s(e.$store.getters.formatText(e.page.lead)) } }),
                                    ]),
                                    e._v(" "),
                                    e.page.page_image
                                        ? r("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-src": e.page.page_image.meta.url, alt: e.page.page_image.alt, width: "1440", height: "670" } })
                                        : e._e(),
                                ]),
                                e._v(" "),
                                "Partners" === e.template && e.page.content ? r("StreamField", { attrs: { data: e.page.content } }) : e._e(),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { StreamField: r(6).default });
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = r(0),
                component = Object(o.a)(
                    {},
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("div", { staticClass: "pressDetail" }, [
                            r("div", { staticClass: "pressDetail__Hero" }, [
                                r("div", { staticClass: "container" }, [
                                    r("div", { staticClass: "pressDetail__HeroWrap" }, [
                                        r("div", [
                                            r("h1", { domProps: { innerHTML: e._s(e.page.title) } }),
                                            e._v(" "),
                                            r("p", [r("span", [e._v(e._s(e.page.read_time) + " min")]), e._v("\n            " + e._s(e.page.formated_date) + "\n          ")]),
                                        ]),
                                    ]),
                                ]),
                            ]),
                            e._v(" "),
                            r("div", { staticClass: "pressDetail__Wrapper" }, [
                                r("div", { staticClass: "container" }, [
                                    r("div", { staticClass: "pressDetail__Content" }, [
                                        r("div", { staticClass: "lead", domProps: { innerHTML: e._s(e.page.lead) } }),
                                        e._v(" "),
                                        r("div", { staticClass: "pressDetail__ContentInner", domProps: { innerHTML: e._s(e.page.content) } }),
                                    ]),
                                ]),
                            ]),
                            e._v(" "),
                            r("div", { staticClass: "pressDetail__Related" }, [
                                r("div", { staticClass: "container" }, [
                                    r(
                                        "div",
                                        { staticClass: "newsList__PressList" },
                                        [
                                            r("h2", [e._v("Press releases")]),
                                            e._v(" "),
                                            e._l(e.page.latest_press, function (t) {
                                                return r("n-link", { key: t.id, staticClass: "newsList__PressItem", attrs: { to: t.sef } }, [
                                                    r("div", { staticClass: "arrow" }, [
                                                        r(
                                                            "svg",
                                                            {
                                                                directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                attrs: {
                                                                    viewBox: "0 0 15 14",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    inline: "",
                                                                    "data-src": "@/assets/svgs/arrow.svg",
                                                                    role: "presentation",
                                                                    focusable: "false",
                                                                    tabindex: "-1",
                                                                },
                                                            },
                                                            [
                                                                r("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                                    r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                                ]),
                                                            ]
                                                        ),
                                                    ]),
                                                    e._v(" "),
                                                    r("h3", { domProps: { innerHTML: e._s(t.title) } }),
                                                    e._v(" "),
                                                    r("div", [r("p", [e._v("Prnewswire")]), e._v(" "), r("span", { domProps: { innerHTML: e._s(t.formated_date) } })]),
                                                ]);
                                            }),
                                        ],
                                        2
                                    ),
                                ]),
                                e._v(" "),
                                r("div", { staticClass: "pressDetail__BreadcrumbsWrap" }, [
                                    r("div", { staticClass: "container" }, [
                                        r("ul", { staticClass: "blogDetail__Breadcrumbs" }, [
                                            r("li", [r("n-link", { staticClass: "navigation__Logo", attrs: { to: e.$store.getters.link("Home") } }, [e._v("Homepage")])], 1),
                                            e._v(" "),
                                            r("li", [r("n-link", { staticClass: "navigation__Logo", attrs: { to: e.$store.getters.link("NewsList") } }, [e._v("Press")])], 1),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        function (e, t, r) {
            "use strict";
            r.r(t);
            var o = r(0),
                component = Object(o.a)(
                    {},
                    function () {
                        var e = this,
                            t = e.$createElement;
                        return (e._self._c || t)("div", [e._v("\n  PressList\n")]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
    ],
    [[95, 36, 26, 37]],
]);
