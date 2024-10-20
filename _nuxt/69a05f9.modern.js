(window.webpackJsonp = window.webpackJsonp || []).push([
    [23],
    {
        93: function (t, e, l) {
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
                        return l("div", { staticClass: "about__HeroSolution" }, [
                            l(
                                "div",
                                { staticClass: "container" },
                                [
                                    l("h2", { domProps: { innerHTML: t._s(t.$store.getters.formatText(t.data.value.text)) } }),
                                    t._v(" "),
                                    null !== t.data.value.link && t.data.value.link.external
                                        ? l("a", { staticClass: "btn--Black", attrs: { href: t.data.value.link.sef } }, [
                                              t._v("\n      " + t._s(t.data.value.link.cta) + "\n      "),
                                              l("span", [
                                                  l(
                                                      "svg",
                                                      {
                                                          directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                          attrs: { viewBox: "0 0 15 14", xmlns: "http://www.w3.org/2000/svg", inline: "", "data-src": "@/assets/svgs/arrow.svg", role: "presentation", focusable: "false", tabindex: "-1" },
                                                      },
                                                      [
                                                          l("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                              l("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                          ]),
                                                      ]
                                                  ),
                                              ]),
                                          ])
                                        : t._e(),
                                    t._v(" "),
                                    null === t.data.value.link || t.data.value.link.external
                                        ? t._e()
                                        : l("n-link", { staticClass: "btn--Black", attrs: { to: t.data.value.link.sef } }, [
                                              t._v("\n      " + t._s(t.data.value.link.cta) + "\n      "),
                                              l("span", [
                                                  l(
                                                      "svg",
                                                      {
                                                          directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                          attrs: { viewBox: "0 0 15 14", xmlns: "http://www.w3.org/2000/svg", inline: "", "data-src": "@/assets/svgs/arrow.svg", role: "presentation", focusable: "false", tabindex: "-1" },
                                                      },
                                                      [
                                                          l("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                              l("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                          ]),
                                                      ]
                                                  ),
                                              ]),
                                          ]),
                                ],
                                1
                            ),
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
