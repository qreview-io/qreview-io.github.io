(window.webpackJsonp = window.webpackJsonp || []).push([
    [11],
    {
        76: function (t, e, l) {
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
                        return l("section", { staticClass: "support__Business" }, [
                            l("div", { staticClass: "container" }, [
                                l("span", { staticClass: "category", domProps: { textContent: t._s(t.data.value.small_title) } }),
                                t._v(" "),
                                l("div", { staticClass: "support__BusinessWrap" }, [
                                    l(
                                        "div",
                                        [
                                            l("h2", { domProps: { textContent: t._s(t.data.value.title) } }),
                                            t._v(" "),
                                            l("p", { domProps: { textContent: t._s(t.data.value.lead) } }),
                                            t._v(" "),
                                            t.data.value.link.external
                                                ? [
                                                      l("a", { staticClass: "btn--White", attrs: { href: t.data.value.link.sef } }, [
                                                          t._v("\n            " + t._s(t.data.value.link.cta) + "\n            "),
                                                          l("span", [
                                                              l(
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
                                                                      l("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                                          l("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                                      ]),
                                                                  ]
                                                              ),
                                                          ]),
                                                      ]),
                                                  ]
                                                : [
                                                      l("n-link", { staticClass: "btn--White", attrs: { to: t.data.value.link.sef } }, [
                                                          t._v("\n            " + t._s(t.data.value.link.cta) + "\n            "),
                                                          l("span", [
                                                              l(
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
                                                                      l("g", { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                                          l("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } }),
                                                                      ]),
                                                                  ]
                                                              ),
                                                          ]),
                                                      ]),
                                                  ],
                                        ],
                                        2
                                    ),
                                    t._v(" "),
                                    l("div", { staticClass: "support__BusinessPhoneWrapper" }, [
                                        l("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-src": t.data.value.block_image.meta.url, alt: t.data.value.block_image.alt, width: "267", height: "451" } }),
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
