(window.webpackJsonp = window.webpackJsonp || []).push([
    [22],
    {
        92: function (t, e, l) {
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
                        return l("section", { staticClass: "about__Hero" }, [
                            l("div", { staticClass: "container" }, [
                                l("h1", { staticClass: "title--Dark", domProps: { innerHTML: t._s(t.$t("about.heroTitle")) } }),
                                t._v(" "),
                                l("div", { staticClass: "about__HeroTeam" }, [
                                    l("div", [
                                        t.data.value.block_image
                                            ? l("img", {
                                                  directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                  attrs: { "data-src": t.data.value.block_image.meta.url, alt: t.data.value.block_image.alt, width: "742", height: "504" },
                                              })
                                            : t._e(),
                                        t._v(" "),
                                        l("span", [t._v(t._s(t.$t("about.heroUnderImage")))]),
                                    ]),
                                    t._v(" "),
                                    l("div", { staticClass: "about__HeroText" }, [
                                        l("span", { staticClass: "category", domProps: { textContent: t._s(t.data.value.small_title) } }),
                                        t._v(" "),
                                        l("p", { domProps: { innerHTML: t._s(t.data.value.text) } }),
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
            e.default = component.exports;
        },
    },
]);
