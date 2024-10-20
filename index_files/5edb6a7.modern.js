(window.webpackJsonp = window.webpackJsonp || []).push([
    [12],
    {
        77: function (t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    props: { data: {} },
                    data: () => ({ rollerVisible: !1, numStart: "", numEnd: "" }),
                    mounted() {
                        new IntersectionObserver((t) => {
                            t.forEach((t) => {
                                t.isIntersecting ? (this.rollerVisible = !0) : (this.rollerVisible = !1);
                            });
                        }).observe(this.$refs.roller);
                    },
                },
                o = n(0),
                component = Object(o.a)(
                    r,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("section", { ref: "homePricing", staticClass: "costControl" }, [
                            n("div", { staticClass: "container--Mid" }, [
                                n("h2", { directives: [{ name: "animate", rawName: "v-animate" }], domProps: { textContent: t._s(t.data.value.title) } }),
                                t._v(" "),
                                n("div", { staticClass: "costControl__Numbers" }, [
                                    n("p", { domProps: { textContent: t._s(t.data.value.lead) } }),
                                    t._v(" "),
                                    n("div", { staticClass: "costControl__Roller" }, [
                                        n("span", { staticClass: "costControl__From", domProps: { innerHTML: t._s(t.data.value.short_text) } }),
                                        t._v(" "),
                                        n("h3", { ref: "roller" }, [
                                            t._v(t._s(t.data.value.currency_code) + " \n          "),
                                            n(
                                                "span",
                                                [
                                                    t.rollerVisible ? n("Roller", { attrs: { defaultChar: t.data.value.start_number.toString(), transition: 1.4, text: t.data.value.end_number.toString(), duration: "5000" } }) : t._e(),
                                                    t._v("\n            .–\n          "),
                                                ],
                                                1
                                            ),
                                        ]),
                                        t._v(" "),
                                        n(
                                            "div",
                                            { staticClass: "button__Wrapper" },
                                            [
                                                t._l(t.data.value.links, function (link) {
                                                    return [null !== link ? n("Button", { key: link.id, attrs: { button: link, color: "Black" } }) : t._e()];
                                                }),
                                            ],
                                            2
                                        ),
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
            installComponents(component, { Button: n(10).default });
        },
    },
]);
