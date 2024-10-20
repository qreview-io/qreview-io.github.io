(window.webpackJsonp = window.webpackJsonp || []).push([
    [29],
    {
        188: function (t, e, n) {
            "use strict";
            n.r(e);
            var o = { props: { question: "", answer: "" }, data: () => ({ isActive: !1 }) },
                r = n(0),
                component = Object(r.a)(
                    o,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n(
                            "div",
                            {
                                staticClass: "faqItem",
                                class: { isActive: t.isActive },
                                on: {
                                    click: function (e) {
                                        t.isActive = !t.isActive;
                                    },
                                },
                            },
                            [
                                n("div", { staticClass: "faqItem__Title" }, [
                                    n("h3", { domProps: { textContent: t._s(t.question) } }),
                                    t._v(" "),
                                    n("span", [
                                        n(
                                            "svg",
                                            {
                                                directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                attrs: {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 16 16",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    inline: "",
                                                    "data-src": "@/assets/svgs/arrow-faq.svg",
                                                    role: "presentation",
                                                    focusable: "false",
                                                    tabindex: "-1",
                                                },
                                            },
                                            [n("path", { attrs: { d: "M8 15.14V2.263M14 7.01L8 1 2 7.01", stroke: "currentColor", "stroke-width": "1.28", "stroke-linecap": "round", "stroke-linejoin": "round" } })]
                                        ),
                                    ]),
                                ]),
                                t._v(" "),
                                t.isActive ? n("p", { domProps: { textContent: t._s(t.answer) } }) : t._e(),
                            ]
                        );
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
