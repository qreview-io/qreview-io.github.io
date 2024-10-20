(window.webpackJsonp = window.webpackJsonp || []).push([
    [27],
    {
        184: function (e, t, l) {
            "use strict";
            l.r(t);
            var r = {
                    model: { prop: "modelValue", event: "change" },
                    props: { value: {}, tabindex: {}, modelValue: { default: !1 }, trueValue: { default: !0 }, falseValue: { default: !1 } },
                    mixins: [l(11).a],
                    computed: {
                        shouldBeChecked() {
                            return this.modelValue instanceof Array ? this.modelValue.includes(this.value) : this.modelValue === this.trueValue;
                        },
                    },
                    methods: {
                        updateInput(e, t) {
                            let l = null;
                            if (((l = t ? !this.shouldBeChecked : e.target.checked), this.modelValue instanceof Array)) {
                                let e = [...this.modelValue];
                                l ? e.push(this.value) : e.splice(e.indexOf(this.value), 1), this.$emit("change", e);
                            } else this.$emit("change", l ? this.trueValue : this.falseValue);
                        },
                        keydown(e) {
                            [0, 13, 32].includes(e.keyCode) && !1 === this.disabled && (e.preventDefault(), e.target.querySelector('[type="checkbox"]').click());
                        },
                    },
                },
                o = l(0),
                component = Object(o.a)(
                    r,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            l = e._self._c || t;
                        return l("div", { class: ["form__Field", "checkboxField", { isError: void 0 !== e.error }, { isDisabled: e.isDisabled }, { isChecked: e.shouldBeChecked }] }, [
                            l("div", { staticClass: "checkboxField__Wrapper" }, [
                                l("label", { attrs: { for: e._uid, tabindex: e.isDisabled || void 0 !== e.tabindex ? -1 : 0 }, on: { keydown: e.keydown } }, [
                                    l("input", {
                                        attrs: { type: "checkbox", id: e._uid, required: e.isRequired, name: e.name, tabindex: "-1" },
                                        domProps: { checked: e.shouldBeChecked, value: e.value },
                                        on: {
                                            change: function (t) {
                                                return e.updateInput(t);
                                            },
                                        },
                                    }),
                                ]),
                                e._v(" "),
                                l(
                                    "div",
                                    [
                                        l(
                                            "span",
                                            {
                                                staticClass: "checkboxField__Label form__Label",
                                                on: {
                                                    click: function (t) {
                                                        return e.updateInput(t, !0);
                                                    },
                                                },
                                            },
                                            [
                                                e._t("default", function () {
                                                    return [e._v(e._s(e.label))];
                                                }),
                                            ],
                                            2
                                        ),
                                        e._v(" "),
                                        l("FormError", { attrs: { error: e.error, className: "checkboxField__Error" } }),
                                        e._v(" "),
                                        l("FormError", { attrs: { error: e.validationErrors, className: "checkboxField__Error" } }),
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
            t.default = component.exports;
            installComponents(component, { FormError: l(15).default });
        },
    },
]);
