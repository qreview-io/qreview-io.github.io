(window.webpackJsonp = window.webpackJsonp || []).push([
    [31],
    {
        204: function (e, t, l) {
            "use strict";
            l.r(t);
            var n = l(186),
                o = {
                    props: { value: { type: Object } },
                    components: { GenericFormFactory: n.default },
                    computed: {
                        fields: {
                            get() {
                                return this.value;
                            },
                            set(e) {
                                this.$emit("input", this.value);
                            },
                        },
                    },
                    methods: {
                        cleanForm(e) {
                            let t = {};
                            for (let l in e) e[l].fields ? (t = { ...t, ...this.cleanForm(e[l].fields) }) : (t[l] = e[l].value);
                            return t;
                        },
                    },
                },
                r = l(0),
                component = Object(r.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            l = e._self._c || t;
                        return l(
                            "form",
                            {
                                on: {
                                    submit: function (t) {
                                        t.preventDefault(), e.$emit("submit", e.cleanForm(e.value));
                                    },
                                },
                            },
                            [
                                l("GenericFormFactory", {
                                    attrs: { fields: e.fields },
                                    model: {
                                        value: e.fields,
                                        callback: function (t) {
                                            e.fields = t;
                                        },
                                        expression: "fields",
                                    },
                                }),
                                e._v(" "),
                                e._t("default"),
                            ],
                            2
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { GenericFormFactory: l(186).default });
        },
    },
]);
