(window.webpackJsonp = window.webpackJsonp || []).push([
    [18],
    {
        87: function (t, e, l) {
            "use strict";
            l.r(e);
            var o = {
                    props: { data: {} },
                    data: () => ({ isAboutActive: !1 }),
                    mounted() {
                        new IntersectionObserver(
                            (t) => {
                                this.isAboutActive = t[0].isIntersecting;
                            },
                            { threshold: 0.33 }
                        ).observe(this.$refs.about);
                    },
                },
                r = l(0),
                component = Object(r.a)(
                    o,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            l = t._self._c || e;
                        return l("section", { ref: "about", staticClass: "regulations", class: { isActive: t.isAboutActive } }, [
                            l("div", { staticClass: "container" }, [
                                l("h2", { staticClass: "title--Light isDesktop", domProps: { innerHTML: t._s(t.$t("about.regulationDesktop")) } }),
                                t._v(" "),
                                l("h2", { staticClass: "title--Light isMobile", domProps: { innerHTML: t._s(t.$t("about.regulationMobile")) } }),
                                t._v(" "),
                                l("div", { staticClass: "regulations__Text" }, [
                                    l("div", { staticClass: "regulations__Info" }, [
                                        l("p", { domProps: { innerHTML: t._s(t.data.value.text) } }),
                                        t._v(" "),
                                        t.data.value.small_text ? l("span", { domProps: { textContent: t._s(t.data.value.small_text) } }) : t._e(),
                                    ]),
                                    t._v(" "),
                                    l("div", { staticClass: "regulations__Image", class: t.$store.state.lang }, [
                                        l("img", {
                                            directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                            staticClass: "regulations__CrossLeft",
                                            attrs: { "data-not-lazy": "", "data-src": "./resources/images/cross-scroll-left.svg", alt: "Business", width: "450", height: "450" },
                                        }),
                                        t._v(" "),
                                        l("img", {
                                            directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                            attrs: { "data-not-lazy": "", "data-src": "./resources/images/cross-scroll-right.svg", alt: "Business", width: "450", height: "450" },
                                        }),
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
