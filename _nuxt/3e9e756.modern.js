(window.webpackJsonp = window.webpackJsonp || []).push([
    [33],
    {
        191: function (e, r, t) {
            "use strict";
            t.r(r);
            var o = {
                    model: { prop: "modelValue", event: "change" },
                    props: { value: {}, modelValue: { default: !1 } },
                    mixins: [t(11).a],
                    computed: {
                        isChecked() {
                            return this.modelValue === this.value;
                        },
                    },
                    methods: {
                        updateInput() {
                            this.$emit("change", this.value);
                        },
                        keydown(e) {
                            [0, 13, 32].includes(e.keyCode) && !this.isDisabled && (e.preventDefault(), e.target.querySelector('[type="radio"]').click());
                        },
                    },
                },
                d = t(0),
                component = Object(d.a)(
                    o,
                    function () {
                        var e = this,
                            r = e.$createElement,
                            t = e._self._c || r;
                        return t("div", { class: ["form__Field", "radioField", { isError: void 0 !== e.error }, { isDisabled: e.isDisabled }, { isChecked: e.isChecked }] }, [
                            t("div", { staticClass: "radioField__Wrapper" }, [
                                t("label", { attrs: { for: e._uid, tabindex: e.isDisabled ? -1 : 0 }, on: { keydown: e.keydown } }, [
                                    t("input", { attrs: { type: "radio", id: e._uid, required: e.isRequired, name: e.name, tabindex: "-1" }, domProps: { checked: e.isChecked, value: e.value }, on: { change: e.updateInput } }),
                                ]),
                                e._v(" "),
                                t(
                                    "div",
                                    [
                                        e.label ? t("span", { staticClass: "radioField__Label form__Label", domProps: { textContent: e._s(e.label) }, on: { click: e.updateInput } }) : e._e(),
                                        e._v(" "),
                                        t("FormError", { attrs: { error: e.error, className: "radioField__Error" } }),
                                        e._v(" "),
                                        t("FormError", { attrs: { error: e.validationErrors, className: "radioField__Error" } }),
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
            r.default = component.exports;
            installComponents(component, { FormError: t(15).default });
        },
    },
]);
