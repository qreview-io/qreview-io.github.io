(window.webpackJsonp = window.webpackJsonp || []).push([
    [21],
    {
        90: function (t, e, l) {
            "use strict";
            l.r(e);
            var o = {
                    props: { data: {} },
                    data: () => ({ featuresScrolled: 0 }),
                    mounted() {
                        new IntersectionObserver(
                            (t) => {
                                for (const e of t) e.isIntersecting ? e.target.classList.add("isActive") : e.target.classList.remove("isActive");
                            },
                            { threshold: 0.5 }
                        ).observe(this.$refs.banner);
                    },
                    methods: {
                        handleFeaturesScroll() {
                            if (this.$refs.featuresSection) {
                                const t = this.$refs.featuresSection,
                                    rect = this.$refs.featuresSection.getBoundingClientRect();
                                if (rect.y < 0 && -rect.top < rect.height && this.featuresScrolled <= 1) {
                                    const e = 1 + (t.offsetTop - window.pageYOffset + rect.height - document.documentElement.clientHeight) / (document.documentElement.clientHeight - rect.height);
                                    (this.featuresScrolled = (10 * e) / 10), this.featuresScrolled > 1 && (this.featuresScrolled = 1);
                                }
                                this.featuresScrolled > 0 && window.pageYOffset < t.offsetTop - 200 && (this.featuresScrolled = 0);
                            }
                        },
                    },
                },
                n = l(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            l = t._self._c || e;
                        return l("section", { ref: "featuresSection", staticClass: "solutions" }, [
                            l("div", { staticClass: "container" }, [
                                l("div", { staticClass: "solutions__Inner" }, [
                                    l("div", { ref: "banner", staticClass: "solutions__Banner" }, [
                                        l("h2", { domProps: { innerHTML: t._s(t.$store.getters.formatText(t.data.value.left_title)) } }),
                                        t._v(" "),
                                        t.data.value.left_image
                                            ? l("div", { staticClass: "solutions__Cross" }, [
                                                  l("img", {
                                                      directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                      staticClass: "solutions__CrossLeft",
                                                      attrs: { "data-src": "/resources/images/solutions-scroll-left.svg", alt: "Business", width: "450", height: "450" },
                                                  }),
                                                  t._v(" "),
                                                  l("img", {
                                                      directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                      staticClass: "solutions__CrossRight",
                                                      attrs: { "data-src": "/resources/images/solutions-scroll-right.svg", alt: "Business", width: "450", height: "450" },
                                                  }),
                                              ])
                                            : t._e(),
                                    ]),
                                    t._v(" "),
                                    l("div", { directives: [{ name: "animate", rawName: "v-animate" }], staticClass: "solutions__List" }, [
                                        l("span", { staticClass: "category" }, [t._v(" " + t._s(t.data.value.small_title) + " ")]),
                                        t._v(" "),
                                        l("p", { staticClass: "solutions__ListLead", domProps: { innerHTML: t._s(t.data.value.lead) } }),
                                        t._v(" "),
                                        l(
                                            "div",
                                            { staticClass: "solutions__ListItems" },
                                            t._l(t.data.value.items, function (e) {
                                                return l("div", { key: e.id, staticClass: "solutions__ListItem" }, [l("h3", { domProps: { innerHTML: t._s(e.title) } }), t._v(" "), l("p", { domProps: { innerHTML: t._s(e.lead) } })]);
                                            }),
                                            0
                                        ),
                                        t._v(" "),
                                        null !== t.data.value.link
                                            ? l("div", { staticClass: "solutions__ListButton" }, [null !== t.data.value.link ? l("Button", { attrs: { button: t.data.value.link, color: "White" } }) : t._e()], 1)
                                            : t._e(),
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
            installComponents(component, { Button: l(10).default });
        },
    },
]);
