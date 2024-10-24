(window.webpackJsonp = window.webpackJsonp || []).push([
    [7, 32],
    {
        185: function (e, t, l) {
            "use strict";
            l.r(t);
            var o = l(0),
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
                                l = e._self._c || t;
                            return l("div", { staticClass: "mobilePhone" }, [l("div", [l("span"), e._v(" "), l("span")])]);
                        },
                    ],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        72: function (e, t, l) {
            "use strict";
            l.r(t);
            var o = {
                    props: { data: {} },
                    data: () => ({ index: 0, hideProgressY: 0 }),
                    mounted() {
                        window.innerWidth > 900 && window.addEventListener("scroll", this.handleScroll);
                        new IntersectionObserver(
                            (e) => {
                                for (const t of e) t.isIntersecting ? document.body.classList.add("isBlack") : document.body.classList.remove("isBlack");
                            },
                            { threshold: 0.12 }
                        ).observe(this.$refs.scrollSection);
                    },
                    methods: {
                        handleScroll() {
                            if (this.$refs.scrollSection) {
                                for (let i = 0; i < this.$refs.scrollItems.length; i++) {
                                    this.$refs.scrollItems[i].getBoundingClientRect().y < document.documentElement.clientHeight / 2 && i !== this.index && (this.index = i);
                                }
                                const rect = this.$refs.scrollSection.parentElement.nextElementSibling.children[0].getBoundingClientRect();
                                -(rect.y - rect.height) < rect.height ? (this.hideProgressY = rect.y - rect.height < 0 ? rect.y - rect.height : 0) : (this.hideProgressY = rect.height);
                            }
                        },
                        goToItem(e) {
                            window.innerWidth > 900
                                ? this.$scrollTo(this.$refs.scrollItems[e], 100, { offset: -document.documentElement.clientHeight / 2 + this.$refs.scrollItems[e].clientHeight })
                                : this.$refs.scrollBox.scrollTo({ top: 0, left: this.$refs.scrollItems[e].offsetLeft, behavior: "smooth" });
                        },
                        handleMobileScroll() {
                            this.index = Math.floor(this.$refs.scrollBox.scrollLeft / this.$refs.scrollBox.clientWidth);
                        },
                    },
                },
                n = l(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            l = e._self._c || t;
                        return l("div", [
                            l("section", { ref: "business", staticClass: "home__Business", class: e.$store.state.lang }, [
                                l("div", { staticClass: "container" }, [l("h2", { directives: [{ name: "animate", rawName: "v-animate" }], staticClass: "title--Light", domProps: { innerHTML: e._s(e.$t("homeHero.business")) } })]),
                            ]),
                            e._v(" "),
                            l("section", { ref: "scrollSection", staticClass: "home__Scroll" }, [
                                l(
                                    "div",
                                    { staticClass: "container" },
                                    [
                                        l("div", { staticClass: "home__ScrollInner" }, [
                                            l(
                                                "div",
                                                { staticClass: "home__ScrollProgress", style: { transform: `translateY(calc(-50% + ${e.hideProgressY}px)` } },
                                                e._l(e.data.value.items, function (t, i) {
                                                    return l("span", {
                                                        key: t.id,
                                                        class: { isActive: i === e.index, isFinished: i < e.index },
                                                        on: {
                                                            click: function (t) {
                                                                return e.goToItem(i);
                                                            },
                                                        },
                                                    });
                                                }),
                                                0
                                            ),
                                            e._v(" "),
                                            l(
                                                "div",
                                                { ref: "scrollBox", staticClass: "home__ScrollBox", on: { scroll: e.handleMobileScroll } },
                                                [
                                                    e._l(e.data.value.items, function (t, i) {
                                                        return l("div", { key: t.id, ref: "scrollItems", refInFor: !0, staticClass: "home__ScrollItem", class: { isActive: i === e.index } }, [
                                                            l("h3", { domProps: { textContent: e._s(t.title) } }),
                                                            e._v(" "),
                                                            l("p", { domProps: { textContent: e._s(t.lead) } }),
                                                            e._v(" "),
                                                            l(
                                                                "div",
                                                                { staticClass: "home__ScrollPhoneWrapper isMobile" },
                                                                [
                                                                    l("MobilePhone"),
                                                                    e._v(" "),
                                                                    l("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-src": t.item_image.meta.url, alt: t.item_image.alt, width: "360", height: "450" } }),
                                                                ],
                                                                1
                                                            ),
                                                        ]);
                                                    }),
                                                    e._v(" "),
                                                    null !== e.data.value.link
                                                        ? l("Button", {
                                                              directives: [{ name: "show", rawName: "v-show", value: e.index === e.data.value.items.length - 1, expression: "index === data.value.items.length - 1" }],
                                                              staticClass: "home__ScrollButtonDesktop",
                                                              attrs: { color: "Black", button: e.data.value.link },
                                                          })
                                                        : e._e(),
                                                ],
                                                2
                                            ),
                                            e._v(" "),
                                            l(
                                                "div",
                                                { directives: [{ name: "animate", rawName: "v-animate" }], staticClass: "home__ScrollPhoneWrapper isDesktop" },
                                                [
                                                    l("MobilePhone"),
                                                    e._v(" "),
                                                    e._l(e.data.value.items, function (t, i) {
                                                        return l("img", {
                                                            directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                            key: t.id,
                                                            class: { isActive: i === e.index },
                                                            attrs: { "data-src": t.item_image.meta.url, alt: "", width: "360", height: "450" },
                                                        });
                                                    }),
                                                ],
                                                2
                                            ),
                                        ]),
                                        e._v(" "),
                                        null !== e.data.value.link ? l("Button", { staticClass: "home__ScrollButtonMobile", attrs: { color: "Black", button: e.data.value.link } }) : e._e(),
                                    ],
                                    1
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
            t.default = component.exports;
            installComponents(component, { MobilePhone: l(185).default, Button: l(10).default });
        },
    },
]);
