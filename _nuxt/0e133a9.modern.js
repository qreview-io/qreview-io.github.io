(window.webpackJsonp = window.webpackJsonp || []).push([
    [17],
    {
        86: function (t, e, r) {
            "use strict";
            r.r(e);
            var n = {
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
                l = r(0),
                component = Object(l.a)(
                    n,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            r = t._self._c || e;
                        return r("section", { ref: "homePricing", staticClass: "pricing" }, [
                            r("div", { staticClass: "container" }, [r("span", { staticClass: "category" }, [t._v(t._s(t.data.value.small_title))])]),
                            t._v(" "),
                            r("div", { staticClass: "container--Mid" }, [
                                r("h2", { directives: [{ name: "animate", rawName: "v-animate" }] }, [t._v(t._s(t.data.value.title))]),
                                t._v(" "),
                                r("div", { staticClass: "pricing__Numbers" }, [
                                    r("p", { domProps: { textContent: t._s(t.data.value.lead) } }),
                                    t._v(" "),
                                    r("div", { staticClass: "pricing__Roller" }, [
                                        r("span", { staticClass: "pricing__From", domProps: { innerHTML: t._s(t.data.value.short_text) } }),
                                        t._v(" "),
                                        r("h3", { ref: "roller" }, [
                                            t._v("\n          " + t._s(t.data.value.currency_code) + " \n          "),
                                            r(
                                                "span",
                                                [
                                                    t.rollerVisible ? r("Roller", { attrs: { defaultChar: t.data.value.start_number.toString(), transition: 1.4, text: t.data.value.end_number.toString(), duration: "3000" } }) : t._e(),
                                                    t._v(".–\n          "),
                                                ],
                                                1
                                            ),
                                        ]),
                                        t._v(" "),
                                        r(
                                            "div",
                                            { staticClass: "button__Wrapper" },
                                            [
                                                t._l(t.data.value.links, function (link) {
                                                    return [
                                                        link.external
                                                            ? r("a", { key: link.id, staticClass: "btn--Black", attrs: { href: link.sef } }, [
                                                                  t._v("\n              " + t._s(link.cta) + "\n              "),
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
                                                              ])
                                                            : r("n-link", { key: link.id, staticClass: "btn--Black", attrs: { to: link.sef } }, [
                                                                  t._v("\n              " + t._s(link.cta) + "\n              "),
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
                                                    ];
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
        },
    },
]);
