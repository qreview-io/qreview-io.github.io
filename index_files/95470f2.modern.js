(window.webpackJsonp = window.webpackJsonp || []).push([
    [30],
    {
        189: function (r, e, o) {
            "use strict";
            o.r(e);
            var l = { mixins: [o(11).a], props: { fromGeneric: { default: !1 } } },
                n = o(0),
                component = Object(n.a)(
                    l,
                    function () {
                        var r = this,
                            e = r.$createElement,
                            o = r._self._c || e;
                        return o(
                            "div",
                            { class: ["field__Group", { isInline: void 0 !== r.inline }, { isError: void 0 !== r.error }] },
                            [
                                r.label ? o("label", { staticClass: "field__GroupLabel form__Label", domProps: { innerHTML: r._s(r.label) } }) : r._e(),
                                r._v(" "),
                                o("div", { class: void 0 === r.inline || r.fromGeneric ? "column" : "row" }, [r._t("default")], 2),
                                r._v(" "),
                                o("FormError", { attrs: { error: r.error, className: "field__GroupError" } }),
                                r._v(" "),
                                r.info ? o("span", { staticClass: "field__GroupInfo form__Info", domProps: { innerHTML: r._s(r.info) } }) : r._e(),
                            ],
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            e.default = component.exports;
            installComponents(component, { FormError: o(15).default });
        },
    },
]);
