(window.webpackJsonp = window.webpackJsonp || []).push([
    [9],
    {
        71: function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    props: { data: {} },
                    data: () => ({ featuresScrolled: 0 }),
                    mounted() {
                        new IntersectionObserver(
                            (e) => {
                                for (const t of e)
                                    try {
                                        t.isIntersecting ? this.$refs.banner.classList.add("isActive") : this.$refs.banner.classList.remove("isActive");
                                    } catch (e) {}
                            },
                            { threshold: 0.3 }
                        ).observe(this.$refs.cross);
                    },
                    methods: {
                        handleFeaturesScroll() {
                            if (this.$refs.featuresSection) {
                                const e = this.$refs.featuresSection,
                                    rect = this.$refs.featuresSection.getBoundingClientRect();
                                if (rect.y < 0 && -rect.top < rect.height && this.featuresScrolled <= 1) {
                                    const t = 1 + (e.offsetTop - window.pageYOffset + rect.height - document.documentElement.clientHeight) / (document.documentElement.clientHeight - rect.height);
                                    (this.featuresScrolled = (10 * t) / 10), this.featuresScrolled > 1 && (this.featuresScrolled = 1);
                                }
                                this.featuresScrolled > 0 && window.pageYOffset < e.offsetTop - 200 && (this.featuresScrolled = 0);
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
                        return r("section", { ref: "featuresSection", staticClass: "home__Features" }, [
                            r("div", { staticClass: "container" }, [
                                r("div", { staticClass: "home__FeaturesInner" }, [
                                    r("div", { ref: "banner", staticClass: "home__FeaturesBanner" }, [
                                        r("h2", { domProps: { innerHTML: e._s(e.$t("homeFeatures.title")) } }),
                                        e._v(" "),
                                        r("div", { staticClass: "home__FeaturesCross" }, [
                                            r("img", {
                                                directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                ref: "cross",
                                                staticClass: "features__CrossLeft",
                                                attrs: { "data-src": "./resources/images/cross-scroll-left.svg", alt: "Business", width: "450", height: "450" },
                                            }),
                                            e._v(" "),
                                            r("img", {
                                                directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                staticClass: "features__CrossRight",
                                                attrs: { "data-src": "./resources/images/cross-scroll-right.svg", alt: "Business", width: "450", height: "450" },
                                            }),
                                        ]),
                                    ]),
                                    e._v(" "),
                                    r(
                                        "div",
                                        { directives: [{ name: "animate", rawName: "v-animate" }], staticClass: "home__FeaturesList" },
                                        [
                                            r("span", { staticClass: "category", domProps: { textContent: e._s(e.data.value.small_title) } }),
                                            e._v(" "),
                                            e._l(e.data.value.items, function (t) {
                                                return r("div", { key: t.id }, [r("h3", { domProps: { textContent: e._s(t.title) } }), e._v(" "), r("p", { domProps: { textContent: e._s(t.lead) } })]);
                                            }),
                                            e._v(" "),
                                            r(
                                                "div",
                                                { staticClass: "home__FeaturesListBtn" },
                                                [
                                                    r("n-link", { staticClass: "btn--White", attrs: { to: e.$store.getters.link("AboutUs") } }, [
                                                        e._v("\n            " + e._s(e.$t("homeFeatures.btn")) + "\n            "),
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
        },
    },
]);
