(window.webpackJsonp = window.webpackJsonp || []).push([
    [10],
    {
        74: function (t, e, n) {
            "use strict";
            n.r(e);
            var l = {
                    props: { data: {} },
                    data: () => ({ imagesVisible: !1, solutionIndex: 0, length: 0, isPrivacy: !1, isCustomer: !1, isFeatures: !1, observerOptions: { root: null, rootMargin: "0px", threshold: 0 }, observer: null }),
                    mounted() {
                        this.observer = new IntersectionObserver(this.observerHandler, this.observerOptions);
                        const element = document.querySelector(".changingImages");
                        this.observer.observe(element),
                            setTimeout(() => {
                                this.length = this.data.value.items.length;
                            }, 300),
                            this.$store.state.currentPage.meta.type.toLowerCase().includes("pricing") && (this.isPrivacy = !0),
                            this.$store.state.currentPage.meta.type.toLowerCase().includes("customers") && (this.isCustomer = !0),
                            this.$store.state.currentPage.meta.type.toLowerCase().includes("features") && (this.isFeatures = !0);
                    },
                    methods: {
                        goToSolutionItem(t) {
                            (this.solutionIndex = t), clearInterval(this.solutionAutoplayInterval), (this.solutionAutoplayInterval = setInterval(this.changeActiveSolutionImage, 4e3));
                        },
                        changeActiveSolutionImage() {
                            this.solutionIndex = (this.solutionIndex + 1) % this.length;
                        },
                        observerHandler(t) {
                            t.forEach((t) => {
                                t.isIntersecting && (this.imagesVisible = !0);
                            });
                        },
                    },
                    watch: {
                        imagesVisible(t) {
                            t && (this.solutionAutoplayInterval = setInterval(this.changeActiveSolutionImage, 4e3));
                        },
                    },
                },
                o = n(0),
                component = Object(o.a)(
                    l,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("section", { staticClass: "changingImages" }, [
                            n("div", { staticClass: "container" }, [
                                n("div", { staticClass: "changingImages__Wrapper" }, [
                                    t.data.value.small_title
                                        ? n("span", { staticClass: "category" }, [
                                              t._v(t._s(t.data.value.small_title) + "\n        "),
                                              n("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-src": "./resources/images/icon-changing-images.svg", alt: "Solutions", width: "85", height: "85" } }),
                                          ])
                                        : t._e(),
                                    t._v(" "),
                                    t.data.value.wide_title ? n("h2", { staticClass: "changingImages__TitleWide", domProps: { innerHTML: t._s(t.$store.getters.formatText(t.data.value.title)) } }) : t._e(),
                                    t._v(" "),
                                    t.data.value.wide_title ? t._e() : n("h2", { staticClass: "changingImages__TitleDesktop", domProps: { innerHTML: t._s(t.$store.getters.formatText(t.data.value.title)) } }),
                                    t._v(" "),
                                    n("div", { staticClass: "changingImages__Inner" }, [
                                        n("div", { staticClass: "changingImages__Carousel" }, [
                                            n("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-src": "./resources/images/laptop-blank-new.png", alt: "Solutions", width: "369", height: "560" } }),
                                            t._v(" "),
                                            n(
                                                "div",
                                                { staticClass: "changingImages__Images" },
                                                t._l(t.data.value.items, function (e, i) {
                                                    return n("img", {
                                                        directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                        key: e.id,
                                                        class: { isActive: i === t.solutionIndex },
                                                        attrs: { "data-src": e.item_image.meta.url, alt: e.item_image.alt, width: "369", height: "560" },
                                                    });
                                                }),
                                                0
                                            ),
                                        ]),
                                        t._v(" "),
                                        n("div", { staticClass: "changingImages__Text" }, [
                                            t.data.value.wide_title ? t._e() : n("h2", { domProps: { innerHTML: t._s(t.$store.getters.formatText(t.data.value.title)) } }),
                                            t._v(" "),
                                            n(
                                                "ul",
                                                t._l(t.data.value.items, function (e, i) {
                                                    return n(
                                                        "li",
                                                        {
                                                            key: e.id,
                                                            class: { isActive: i === t.solutionIndex },
                                                            on: {
                                                                click: function (e) {
                                                                    return t.goToSolutionItem(i);
                                                                },
                                                            },
                                                        },
                                                        [n("span"), t._v("\n              " + t._s(e.title) + "\n            ")]
                                                    );
                                                }),
                                                0
                                            ),
                                        ]),
                                    ]),
                                ]),
                                t._v(" "),
                                n(
                                    "div",
                                    { staticClass: "changingImages__Button", class: { isPrivacy: t.isPrivacy, isCustomer: t.isCustomer, isFeatures: t.isFeatures } },
                                    [
                                        t._l(t.data.value.links, function (link) {
                                            return [null !== link ? n("Button", { key: link.id, attrs: { button: link, color: "White" } }) : t._e()];
                                        }),
                                    ],
                                    2
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
            installComponents(component, { Button: n(10).default });
        },
    },
]);
