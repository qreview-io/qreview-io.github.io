(window.webpackJsonp = window.webpackJsonp || []).push([
    [24],
    {
        94: function (t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    props: { data: {} },
                    data: () => ({ formattedText: "" }),
                    mounted() {
                        this.formattedText = this.data.value.big_text.replace(/{{/g, "<b>").replace(/}}/g, "</b>");
                    },
                },
                o = n(0),
                component = Object(o.a)(
                    r,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", { staticClass: "container" }, [
                            n("div", { staticClass: "pricing__HeroText" }, [n("h2", { domProps: { innerHTML: t._s(t.formattedText) } }), t._v(" "), n("p", { domProps: { innerHTML: t._s(t.data.value.small_text) } })]),
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
