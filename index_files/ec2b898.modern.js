(window.webpackJsonp = window.webpackJsonp || []).push([
    [8, 32],
    {
        185: function (t, e, l) {
            "use strict";
            l.r(e);
            var o = l(0),
                component = Object(o.a)(
                    {},
                    function () {
                        var t = this,
                            e = t.$createElement;
                        t._self._c;
                        return t._m(0);
                    },
                    [
                        function () {
                            var t = this,
                                e = t.$createElement,
                                l = t._self._c || e;
                            return l("div", { staticClass: "mobilePhone" }, [l("div", [l("span"), t._v(" "), l("span")])]);
                        },
                    ],
                    !1,
                    null,
                    null,
                    null
                );
            e.default = component.exports;
        },
        81: function (t, e, l) {
            "use strict";
            l.r(e);
            var o = { props: { data: {} } },
                r = l(0),
                component = Object(r.a)(
                    o,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            l = t._self._c || e;
                        return l("div", { staticClass: "container" }, [
                            l("section", { staticClass: "home__Hero" }, [
                                l("h1", { staticClass: "title--Light isDesktop", domProps: { innerHTML: t._s(t.$t("homeHero.title")) } }),
                                t._v(" "),
                                l("h2", { staticClass: "title--Light isMobile", domProps: { innerHTML: t._s(t.$t("homeHero.titleMobile")) } }),
                                t._v(" "),
                                l(
                                    "div",
                                    { staticClass: "home__HeroList" },
                                    [
                                        null !== t.data.value.link ? l("Button", { attrs: { color: "Red", button: t.data.value.link } }) : t._e(),
                                        t._v(" "),
                                        l(
                                            "ul",
                                            t._l(t.data.value.items, function (e) {
                                                return l("li", { key: e.id, domProps: { textContent: t._s(e) } });
                                            }),
                                            0
                                        ),
                                    ],
                                    1
                                ),
                                t._v(" "),
                                l("div", { staticClass: "home__HeroImage" }, [
                                    l(
                                        "div",
                                        { ref: "heroPhone", staticClass: "home__HeroPhone" },
                                        [
                                            l("MobilePhone"),
                                            t._v(" "),
                                            l("div", { staticClass: "home__HeroCard" }, [
                                                l("img", {
                                                    directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                    attrs: { "data-not-lazy": "", "data-src": "/resources/images/heroCard.png", alt: "Hero Card", width: "353", height: "207" },
                                                }),
                                            ]),
                                            t._v(" "),
                                            l("div", { staticClass: "home__HeroBadge" }, [
                                                l("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-not-lazy": "", "data-src": "/resources/images/hero-logo.svg", alt: "", width: "150", height: "150" } }),
                                                t._v(" "),
                                                "en" === t.$store.state.lang
                                                    ? l("img", {
                                                          directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                          attrs: { "data-src": "/resources/images/badge_eng.svg", alt: "", "data-not-lazy": "", width: "150", height: "150" },
                                                      })
                                                    : l("img", {
                                                          directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                          attrs: { "data-src": "/resources/images/badge_ger.svg", alt: "", "data-not-lazy": "", width: "150", height: "150" },
                                                      }),
                                            ]),
                                        ],
                                        1
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
            e.default = component.exports;
            installComponents(component, { Button: l(10).default, MobilePhone: l(185).default });
        },
    },
]);
