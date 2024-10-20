(window.webpackJsonp = window.webpackJsonp || []).push([
    [20],
    {
        89: function (t, e, o) {
            "use strict";
            o.r(e);
            var n = {
                    props: { data: {} },
                    data: () => ({ activeAnchor: null, sections: null }),
                    mounted() {
                        setTimeout(() => {
                            this.handleScroll();
                        }, 5),
                            (this.sections = document.querySelectorAll('.sections__Text section[id]:not(.sections__Text section[id=""])')),
                            window.addEventListener("scroll", this.handleScroll);
                    },
                    destroyed() {
                        window.removeEventListener("scroll", this.handleScroll);
                    },
                    methods: {
                        scrollToSection(t) {
                            t = t.replace(/\s/g, "").toLowerCase();
                            const section = document.querySelector(`#${t}`);
                            section && window.scrollTo({ top: this.getOffset(section).top - 80, behavior: "smooth" });
                        },
                        handleScroll() {
                            for (const section of this.sections) section.getBoundingClientRect().y < document.documentElement.clientHeight / 2 && (this.activeAnchor = section.id.replace(/\s/g, "").toLowerCase());
                        },
                        getOffset(t) {
                            const rect = t.getBoundingClientRect();
                            return { left: rect.left + window.scrollX, top: rect.top + window.scrollY };
                        },
                    },
                },
                c = o(0),
                component = Object(c.a)(
                    n,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            o = t._self._c || e;
                        return o("div", { staticClass: "sections" }, [
                            o("div", { staticClass: "container" }, [
                                o("div", { staticClass: "sections__Wrapper" }, [
                                    o("div", { staticClass: "sections__Sidebar" }, [
                                        o(
                                            "div",
                                            [
                                                o("span", [t._v("Sections")]),
                                                t._v(" "),
                                                t._l(t.data.value.sections, function (e) {
                                                    return "" !== e.anchor
                                                        ? o("a", {
                                                              key: e.id,
                                                              class: { isActive: t.activeAnchor === e.anchor.replace(/\s/g, "").toLowerCase() },
                                                              attrs: { role: "button" },
                                                              domProps: { textContent: t._s(e.anchor) },
                                                              on: {
                                                                  click: function (o) {
                                                                      return t.scrollToSection(e.anchor);
                                                                  },
                                                              },
                                                          })
                                                        : t._e();
                                                }),
                                            ],
                                            2
                                        ),
                                    ]),
                                    t._v(" "),
                                    o(
                                        "div",
                                        { staticClass: "sections__Text" },
                                        [
                                            t._l(t.data.value.sections, function (e) {
                                                return [
                                                    o("section", { attrs: { id: e.anchor.replace(/\s/g, "").toLowerCase() } }, [
                                                        e.lead ? o("h2", { key: e.id, domProps: { textContent: t._s(e.lead) } }) : t._e(),
                                                        t._v(" "),
                                                        e.title ? o("h3", { key: e.id, ref: "sectionAnchor", refInFor: !0, domProps: { textContent: t._s(e.title) } }) : t._e(),
                                                        t._v(" "),
                                                        e.content ? o("div", { key: e.id, staticClass: "sections__Content", domProps: { innerHTML: t._s(e.content) } }) : t._e(),
                                                    ]),
                                                ];
                                            }),
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
            e.default = component.exports;
        },
    },
]);
