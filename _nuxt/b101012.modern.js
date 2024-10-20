(window.webpackJsonp = window.webpackJsonp || []).push([
    [14],
    {
        80: function (t, e, l) {
            "use strict";
            l.r(e);
            var n = { props: { data: {} } },
                r = l(0),
                component = Object(r.a)(
                    n,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            l = t._self._c || e;
                        return l("div", { staticClass: "features__Items" }, [
                            l("div", { staticClass: "container" }, [
                                l("span", { staticClass: "category", domProps: { textContent: t._s(t.data.value.small_title) } }),
                                t._v(" "),
                                l("h2", { domProps: { textContent: t._s(t.data.value.title) } }),
                                t._v(" "),
                                l(
                                    "div",
                                    { staticClass: "features__List" },
                                    t._l(t.data.value.items, function (e) {
                                        return l("div", { key: e.id, staticClass: "features__Item" }, [
                                            l("div", { staticClass: "features__ItemImg" }, [
                                                l("img", {
                                                    directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                    attrs: { "data-not-lazy": "", "data-src": e.item_image.meta.url, alt: e.item_image.alt, width: "305", height: "410" },
                                                }),
                                            ]),
                                            t._v(" "),
                                            l(
                                                "div",
                                                { staticClass: "features__ItemText" },
                                                [
                                                    l("h3", { domProps: { textContent: t._s(e.title) } }),
                                                    t._v(" "),
                                                    l("p", { domProps: { textContent: t._s(e.lead) } }),
                                                    t._v(" "),
                                                    null !== e.link && e.link.external && "" !== e.link.cta
                                                        ? l("a", { staticClass: "btn--View", attrs: { href: e.link.sef } }, [t._v("\n            " + t._s(e.link.cta) + "\n          ")])
                                                        : t._e(),
                                                    t._v(" "),
                                                    null === e.link || e.link.external || "" === e.link.cta
                                                        ? t._e()
                                                        : l("n-link", { staticClass: "btn--View", attrs: { to: e.link.sef } }, [t._v("\n            " + t._s(e.link.cta) + "\n          ")]),
                                                ],
                                                1
                                            ),
                                        ]);
                                    }),
                                    0
                                ),
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
        },
    },
]);
