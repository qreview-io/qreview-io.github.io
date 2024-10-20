(window.webpackJsonp = window.webpackJsonp || []).push([
    [0, 27, 30, 33, 34, 35],
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
        186: function (e, t, l) {
            "use strict";
            l.r(t);
            var r = l(189),
                o = l(29),
                n = l(190),
                d = l(184),
                c = l(191),
                h = l(192),
                m = l(69),
                f = l(70),
                v = {
                    name: "GenericFormFactory",
                    props: { fields: { type: Object } },
                    components: {
                        GenericFormFactory: x,
                        FieldGroup: r.default,
                        TextField: o.default,
                        SelectField: n.default,
                        CheckboxField: d.default,
                        RadioField: c.default,
                        RangeField: h.default,
                        TextareaField: m.default,
                        FileField: f.default,
                    },
                    data() {
                        return { formFields: this.fields };
                    },
                    beforeMount() {
                        for (let e in this.formFields) void 0 === this.formFields[e].value && (this.formFields[e].value = "");
                    },
                    watch: {
                        formFields: {
                            handler() {
                                this.$emit("input", this.formFields);
                            },
                            deep: !0,
                        },
                    },
                },
                _ = l(0),
                component = Object(_.a)(
                    v,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            l = e._self._c || t;
                        return l(
                            "div",
                            e._l(e.formFields, function (t) {
                                return l(
                                    t.is,
                                    e._b(
                                        {
                                            key: t.id,
                                            tag: "component",
                                            attrs: { "from-generic": !0 },
                                            model: {
                                                value: t.value,
                                                callback: function (l) {
                                                    e.$set(t, "value", l);
                                                },
                                                expression: "item.value",
                                            },
                                        },
                                        "component",
                                        t.props,
                                        !1
                                    ),
                                    [t.fields ? l("GenericFormFactory", { class: { row: t.props.inline }, attrs: { fields: t.fields } }) : e._e()],
                                    1
                                );
                            }),
                            1
                        );
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                ),
                x = (t.default = component.exports);
            installComponents(component, { GenericFormFactory: l(186).default });
        },
        189: function (e, t, l) {
            "use strict";
            l.r(t);
            var r = { mixins: [l(11).a], props: { fromGeneric: { default: !1 } } },
                o = l(0),
                component = Object(o.a)(
                    r,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            l = e._self._c || t;
                        return l(
                            "div",
                            { class: ["field__Group", { isInline: void 0 !== e.inline }, { isError: void 0 !== e.error }] },
                            [
                                e.label ? l("label", { staticClass: "field__GroupLabel form__Label", domProps: { innerHTML: e._s(e.label) } }) : e._e(),
                                e._v(" "),
                                l("div", { class: void 0 === e.inline || e.fromGeneric ? "column" : "row" }, [e._t("default")], 2),
                                e._v(" "),
                                l("FormError", { attrs: { error: e.error, className: "field__GroupError" } }),
                                e._v(" "),
                                e.info ? l("span", { staticClass: "field__GroupInfo form__Info", domProps: { innerHTML: e._s(e.info) } }) : e._e(),
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
            t.default = component.exports;
            installComponents(component, { FormError: l(15).default });
        },
        190: function (e, t, l) {
            "use strict";
            l.r(t);
            var r = l(184),
                o = {
                    props: {
                        selected: {},
                        options: {},
                        multiple: { default: void 0 },
                        closeOnSelect: { default: !1 },
                        placeholder: {},
                        valueKey: {},
                        textKey: {},
                        disabledKey: { default: "disabled" },
                        optionTextKey: {},
                        autocomplete: {},
                        empty: {},
                        debounceDuration: { default: 500 },
                        minSearchLength: { default: 2 },
                        autocompleteHighlight: { default: !1 },
                    },
                    model: { prop: "selected", event: "change" },
                    mixins: [l(11).a],
                    data() {
                        return { isOpened: !1, autocompleteText: "", debounceTimeout: null, selectedValuesText: [], selectOptions: this.options || [], isDragging: !1 };
                    },
                    components: { CheckboxField: r.default },
                    computed: {
                        selectValue: {
                            get() {
                                return void 0 === this.selected ? "" : this.selected;
                            },
                            set(e) {
                                this.$emit("change", e);
                            },
                        },
                        getSelectedValuesText() {
                            if (0 === this.selectValue.length) return this.placeholder;
                            if (void 0 === this.autocomplete || 0 === this.autocomplete.length) {
                                if (void 0 === this.multiple) return this.getSelectedValuesTextHelper(this.selectValue);
                                if (void 0 === this.autocomplete) return this.selectValue.map((e) => this.getSelectedValuesTextHelper(e)).join(", ");
                            }
                            return this.selectedValuesText.join(", ");
                        },
                    },
                    watch: {
                        isOpened(e) {
                            void 0 !== this.autocomplete && e && this.$refs.inputAutocomplete.focus();
                        },
                        options(e) {
                            this.selectOptions = e;
                        },
                        async autocompleteText(e) {
                            void 0 === this.autocomplete || e.length < this.minSearchLength
                                ? (clearTimeout(this.debounceTimeout), (this.selectOptions = this.options))
                                : (clearTimeout(this.debounceTimeout),
                                  (this.debounceTimeout = setTimeout(async () => {
                                      if ("function" == typeof this.autocomplete)
                                          try {
                                              let t = await this.autocomplete(e);
                                              this.selectOptions = t;
                                          } catch (e) {
                                              console.dir(e);
                                          }
                                      else this.selectOptions = this.options.filter((option) => this.getOptionProperty(option, "optionText", "textKey").toLowerCase().includes(e.toLowerCase()));
                                      (this.debounceTimeout = null), this.$emit("autocomplete-change", e);
                                  }, this.debounceDuration)));
                        },
                    },
                    mounted() {
                        (void 0 === this.multiple && "string" != typeof this.selectValue) ||
                            (void 0 !== this.multiple && "object" != typeof this.selectValue && console.error("SelectField - For multiple select value must be Object or Array"));
                    },
                    methods: {
                        getSelectedValuesTextHelper(e) {
                            try {
                                return this.getOptionProperty(
                                    this.options.find((t) => this.getOptionProperty(t, "value") === e),
                                    "text"
                                );
                            } catch (e) {
                                return "";
                            }
                        },
                        getOptionProperty(option, e, t) {
                            return this[(e = `${e}Key`)] && option && option[this[e]] ? option[this[e]] : this[t] && option && option[this[t]] ? option[this[t]] : option;
                        },
                        clearDragging() {
                            this.isDragging = !1;
                        },
                        startDragging() {
                            this.isDragging = !0;
                        },
                        changeSelectValue(option, e) {
                            if (!0 === this.getOptionProperty(option, "disabled")) return;
                            const t = document.documentElement.clientWidth <= 900;
                            if ((t && "touchend" === e.type && !this.isDragging) || (!t && "click" === e.type) || "keydown" === e.type) {
                                let e = this.getOptionProperty(option, "text");
                                void 0 === this.multiple
                                    ? ((this.selectValue = this.getOptionProperty(option, "value")), this.close())
                                    : void 0 !== this.autocomplete &&
                                      (this.selectedValuesText.includes(e)
                                          ? this.selectedValuesText.splice(
                                                this.selectedValuesText.findIndex((t) => t === e),
                                                1
                                            )
                                          : this.selectedValuesText.push(e)),
                                    this.closeOnSelect && this.close();
                            }
                            t && "change" === e.type && (this.selectedValuesText = [...e.target.querySelectorAll("option:checked")].map((e) => e.dataset.text));
                        },
                        keydown(option, e) {
                            [0, 13, 32].includes(e.keyCode) && (e.preventDefault(), this.changeSelectValue(option, e), void 0 !== this.multiple && (e.target.click(), e.target.querySelector('[type="checkbox"]').click()));
                        },
                        isSelected(option) {
                            return this.selectValue && this.selectValue.includes
                                ? this.selectValue.includes(this.getOptionProperty(option, "value"))
                                : this.selectValue === this.getOptionProperty(option, "value") || this.selectValue === option;
                        },
                        toggleVisibility(e) {
                            void 0 === this.autocomplete ? (this.isOpened = !this.isOpened) : (e.stopPropagation(), (this.isOpened = !0), this.$refs.inputAutocomplete.focus());
                        },
                        close() {
                            this.isOpened && (this.isOpened = !1);
                        },
                        optionBlured(e) {
                            e === this.selectOptions.length - 1 && this.close();
                        },
                    },
                },
                n = l(0),
                component = Object(n.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            l = e._self._c || t;
                        return l(
                            "div",
                            {
                                class: [
                                    "form__Field",
                                    "selectField",
                                    { isOpened: e.isOpened },
                                    { hasValue: e.selectValue && e.selectValue.toString().length > 0 },
                                    { isError: void 0 !== e.error },
                                    { isAutocomplete: void 0 !== e.autocomplete },
                                    { isDisabled: e.isDisabled },
                                    { isInline: void 0 !== e.inline },
                                ],
                            },
                            [
                                l("FormLabel", e._b({}, "FormLabel", e.formLabelProps, !1), [e._t("tooltip")], 2),
                                e._v(" "),
                                l("div", { staticClass: "selectField__Wrapper" }, [
                                    l(
                                        "div",
                                        {
                                            directives: [
                                                {
                                                    name: "click-outside",
                                                    rawName: "v-click-outside",
                                                    value: function () {
                                                        return e.close();
                                                    },
                                                    expression: "() => close()",
                                                },
                                            ],
                                            staticClass: "selectField__Input",
                                            on: { click: e.toggleVisibility },
                                        },
                                        [
                                            e.$slots.prepend ? l("div", { staticClass: "selectField__Prepend" }, [e._t("prepend")], 2) : e._e(),
                                            e._v(" "),
                                            l("input", {
                                                directives: [{ name: "model", rawName: "v-model", value: e.selectValue, expression: "selectValue" }],
                                                attrs: { id: e._uid, required: e.isRequired, name: e.name, tabindex: e.isDisabled ? -1 : 0 },
                                                domProps: { value: e.selectValue },
                                                on: {
                                                    focus: function (t) {
                                                        e.isOpened = !e.isDisabled;
                                                    },
                                                    input: function (t) {
                                                        t.target.composing || (e.selectValue = t.target.value);
                                                    },
                                                },
                                            }),
                                            e._v(" "),
                                            void 0 !== e.autocomplete
                                                ? l("input", {
                                                      directives: [{ name: "model", rawName: "v-model", value: e.autocompleteText, expression: "autocompleteText" }],
                                                      ref: "inputAutocomplete",
                                                      staticClass: "selectField__InputAutocomplete",
                                                      domProps: { value: e.autocompleteText },
                                                      on: {
                                                          input: function (t) {
                                                              t.target.composing || (e.autocompleteText = t.target.value);
                                                          },
                                                      },
                                                  })
                                                : e._e(),
                                            e._v(" "),
                                            l("div", { class: ["selectField__InputText", { selectField__InputPlaceholder: 0 === e.selectValue.length }], domProps: { textContent: e._s(e.getSelectedValuesText) } }),
                                            e._v(" "),
                                            l(
                                                "button",
                                                {
                                                    staticClass: "selectField__InputArrow",
                                                    attrs: { type: "button", "aria-label": "Open options menu" },
                                                    on: {
                                                        click: function (t) {
                                                            t.stopPropagation(), (e.isOpened = !e.isOpened);
                                                        },
                                                    },
                                                },
                                                [
                                                    e.$slots.inputArrow
                                                        ? [e._t("inputArrow")]
                                                        : [
                                                              l("svg", { attrs: { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg" } }, [
                                                                  l("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                                                                      l("path", { attrs: { fill: "#262626", d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" } }),
                                                                      e._v(" "),
                                                                      l("path", { attrs: { d: "M0 0h24v24H0z" } }),
                                                                  ]),
                                                              ]),
                                                          ],
                                                ],
                                                2
                                            ),
                                            e._v(" "),
                                            e.$slots.append ? l("div", { staticClass: "selectField__Append" }, [e._t("append")], 2) : e._e(),
                                            e._v(" "),
                                            void 0 === e.autocomplete
                                                ? l(
                                                      "select",
                                                      {
                                                          directives: [{ name: "model", rawName: "v-model", value: e.selectValue, expression: "selectValue" }],
                                                          staticClass: "selectField__Mobile",
                                                          attrs: { multiple: e.multiple },
                                                          on: {
                                                              change: [
                                                                  function (t) {
                                                                      var l = Array.prototype.filter
                                                                          .call(t.target.options, function (e) {
                                                                              return e.selected;
                                                                          })
                                                                          .map(function (e) {
                                                                              return "_value" in e ? e._value : e.value;
                                                                          });
                                                                      e.selectValue = t.target.multiple ? l : l[0];
                                                                  },
                                                                  function (t) {
                                                                      return e.changeSelectValue(null, t);
                                                                  },
                                                              ],
                                                              click: function (e) {
                                                                  e.stopPropagation();
                                                              },
                                                          },
                                                      },
                                                      e._l(e.selectOptions, function (option) {
                                                          return l("option", {
                                                              key: option.id,
                                                              attrs: { "data-text": e.getOptionProperty(option, "optionText", "textKey") },
                                                              domProps: { value: e.getOptionProperty(option, "value"), textContent: e._s(e.getOptionProperty(option, "text")) },
                                                          });
                                                      }),
                                                      0
                                                  )
                                                : e._e(),
                                        ]
                                    ),
                                    e._v(" "),
                                    l(
                                        "ul",
                                        { class: ["selectField__Options", { isMultiple: void 0 !== e.multiple }] },
                                        [
                                            e._l(e.selectOptions, function (option, i) {
                                                return l(
                                                    "li",
                                                    {
                                                        key: option.id,
                                                        class: { isSelected: e.isSelected(option), isOptionDisabled: !0 === e.getOptionProperty(option, "disabled") },
                                                        attrs: { tabindex: e.isDisabled ? -1 : 0 },
                                                        on: {
                                                            click: function (t) {
                                                                return t.stopPropagation(), e.changeSelectValue(option, t);
                                                            },
                                                            touchstart: function (t) {
                                                                return t.stopPropagation(), e.clearDragging.apply(null, arguments);
                                                            },
                                                            touchmove: function (t) {
                                                                return t.stopPropagation(), e.startDragging.apply(null, arguments);
                                                            },
                                                            touchend: function (t) {
                                                                return t.stopPropagation(), e.changeSelectValue(option, t);
                                                            },
                                                            keydown: function (t) {
                                                                return e.keydown(option, t);
                                                            },
                                                            blur: function (t) {
                                                                return e.optionBlured(i);
                                                            },
                                                        },
                                                    },
                                                    [
                                                        void 0 !== e.multiple && e.selectOptions.length > 0
                                                            ? [
                                                                  l("CheckboxField", {
                                                                      attrs: {
                                                                          tabindex: "-1",
                                                                          id: `${e._uid}-${e.getOptionProperty(option, "value")}`,
                                                                          value: e.getOptionProperty(option, "value"),
                                                                          label: e.getOptionProperty(option, "optionText", "textKey"),
                                                                      },
                                                                      model: {
                                                                          value: e.selectValue,
                                                                          callback: function (t) {
                                                                              e.selectValue = t;
                                                                          },
                                                                          expression: "selectValue",
                                                                      },
                                                                  }),
                                                              ]
                                                            : l("label", { attrs: { for: `${e._uid}-${e.getOptionProperty(option, "value")}` }, domProps: { textContent: e._s(e.getOptionProperty(option, "optionText", "textKey")) } }),
                                                    ],
                                                    2
                                                );
                                            }),
                                            e._v(" "),
                                            0 === e.selectOptions.length
                                                ? l(
                                                      "div",
                                                      { staticClass: "selectField__EmptyOptions" },
                                                      [e.empty ? l("p", { staticClass: "selectField__EmptyOptionsText", domProps: { innerHTML: e._s(e.empty) } }) : e._e(), e._v(" "), e._t("empty")],
                                                      2
                                                  )
                                                : e._e(),
                                        ],
                                        2
                                    ),
                                ]),
                                e._v(" "),
                                l("FormError", { attrs: { error: e.error, className: "selectField__Error" } }),
                                e._v(" "),
                                l("FormError", { attrs: { error: e.validationErrors, className: "selectField__Error" } }),
                                e._v(" "),
                                e.info ? l("span", { staticClass: "selectField__Info form__Info", domProps: { textContent: e._s(e.info) } }) : e._e(),
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
            t.default = component.exports;
            installComponents(component, { FormLabel: l(16).default, Button: l(10).default, CheckboxField: l(184).default, FormError: l(15).default });
        },
        191: function (e, t, l) {
            "use strict";
            l.r(t);
            var r = {
                    model: { prop: "modelValue", event: "change" },
                    props: { value: {}, modelValue: { default: !1 } },
                    mixins: [l(11).a],
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
                o = l(0),
                component = Object(o.a)(
                    r,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            l = e._self._c || t;
                        return l("div", { class: ["form__Field", "radioField", { isError: void 0 !== e.error }, { isDisabled: e.isDisabled }, { isChecked: e.isChecked }] }, [
                            l("div", { staticClass: "radioField__Wrapper" }, [
                                l("label", { attrs: { for: e._uid, tabindex: e.isDisabled ? -1 : 0 }, on: { keydown: e.keydown } }, [
                                    l("input", { attrs: { type: "radio", id: e._uid, required: e.isRequired, name: e.name, tabindex: "-1" }, domProps: { checked: e.isChecked, value: e.value }, on: { change: e.updateInput } }),
                                ]),
                                e._v(" "),
                                l(
                                    "div",
                                    [
                                        e.label ? l("span", { staticClass: "radioField__Label form__Label", domProps: { textContent: e._s(e.label) }, on: { click: e.updateInput } }) : e._e(),
                                        e._v(" "),
                                        l("FormError", { attrs: { error: e.error, className: "radioField__Error" } }),
                                        e._v(" "),
                                        l("FormError", { attrs: { error: e.validationErrors, className: "radioField__Error" } }),
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
        192: function (e, t, l) {
            "use strict";
            l.r(t);
            var r = {
                    props: { min: { default: 0 }, max: { default: 100 }, value: {}, step: { default: 1 }, lineThickness: { default: 1 }, decimals: { default: 0 }, stepLines: {}, transitionDuration: { default: 300 } },
                    mixins: [l(11).a],
                    data: () => ({ isActive: !1, currentX: 0, initialX: 0, xOffset: 0, width: 1, fakeValue: 0, dragger: null, dragItemWidth: 0, dragItemHeight: 0, isFocused: !1, changeValueTimeout: null }),
                    computed: {
                        fieldValue: {
                            get() {
                                return (this.fakeValue = this.value), this.value;
                            },
                            set(e) {
                                this.$emit("input", e);
                            },
                        },
                        floatValues() {
                            return { min: parseFloat(this.min), max: parseFloat(this.max), step: parseFloat(this.step), decimals: parseFloat(this.decimals) };
                        },
                        stepCount() {
                            return Math.floor(this.rangeOfValues / this.floatValues.step);
                        },
                        stepSize() {
                            return (this.width - this.dragItemWidth) / this.stepCount;
                        },
                        fullWidth() {
                            return this.width - this.dragItemWidth;
                        },
                        rangeOfValues() {
                            return this.floatValues.max - this.floatValues.min;
                        },
                    },
                    mounted() {
                        this.$nextTick(() => {
                            (this.dragger = this.$slots.default ? this.$slots.default[0].elm : this.$refs.dragItem),
                                (this.width = this.$refs.scroller.scrollWidth),
                                "img" === this.dragger.tagName.toLowerCase() ? this.dragger.addEventListener("load", this.setSize.bind(this)) : this.setSize(),
                                (this.dragger.draggable = !1),
                                this.setCurrentX();
                        }),
                            setTimeout(() => {
                                this.fakeValue = this.value.toFixed(this.decimals);
                            }, this.transitionDuration);
                    },
                    methods: {
                        setSize() {
                            (this.dragItemWidth = this.dragger.scrollWidth), (this.dragItemHeight = this.dragger.scrollHeight);
                        },
                        dragStart(e) {
                            this.isActive = !0;
                            let t = this.getX(e, "touchstart");
                            this.initialX = t - this.xOffset;
                        },
                        dragEnd(e) {
                            (this.isActive = !1), (this.isFocused = !1), (this.initialX = this.currentX), this.setCurrentX();
                        },
                        drag(e) {
                            if (this.isActive) {
                                e.preventDefault();
                                let t = this.getX(e, "touchmove");
                                (t -= this.initialX), (this.currentX = this.xOffset = this.getBoundedX(t)), this.changeValue();
                            }
                        },
                        mouseleave() {
                            (this.isActive = !1), this.setCurrentX();
                        },
                        clicked(e) {
                            let t = this.getX(e, "touchstart", "offsetX");
                            (t -= this.dragItemWidth / 2), (this.currentX = this.xOffset = this.getBoundedX(t)), this.changeValue();
                        },
                        getX: (e, t, l = "clientX") => (e.type === t ? e.touches[0][l] : e[l]),
                        getBoundedX(e) {
                            return e > this.fullWidth ? (e = this.fullWidth) : e <= 0 && (e = 0), e;
                        },
                        setCurrentX() {
                            let e = this.fullWidth / this.rangeOfValues;
                            (e *= this.fieldValue - this.floatValues.min), (this.currentX = this.xOffset = this.getBoundedX(e));
                        },
                        changeValue() {
                            let e = (this.xOffset / this.fullWidth) * this.rangeOfValues + this.floatValues.min;
                            (this.fakeValue = (Math.floor(e / this.floatValues.step) * this.floatValues.step).toFixed(this.floatValues.decimals)), (this.fieldValue = this.fakeValue);
                        },
                    },
                    watch: {
                        value() {
                            this.value !== this.fakeValue &&
                                (clearTimeout(this.changeValueTimeout),
                                (this.changeValueTimeout = setTimeout(() => {
                                    this.setCurrentX();
                                }, 250)));
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
                        return l(
                            "div",
                            {
                                class: ["rangeField", "form__Field", { isError: void 0 !== e.error }, { isDisabled: e.isDisabled }, { isInline: void 0 !== e.inline }, { isFocused: e.isActive || e.isFocused }],
                                on: { mousemove: e.drag, touchmove: e.drag, mouseup: e.dragEnd, touchend: e.dragEnd, mouseleave: e.mouseleave },
                            },
                            [
                                l("input", {
                                    directives: [{ name: "model", rawName: "v-model", value: e.value, expression: "value" }],
                                    attrs: { type: "text", required: e.isRequired, id: e._uid, tabindex: "-1" },
                                    domProps: { value: e.value },
                                    on: {
                                        input: function (t) {
                                            t.target.composing || (e.value = t.target.value);
                                        },
                                    },
                                }),
                                e._v(" "),
                                l("FormLabel", e._b({}, "FormLabel", e.formLabelProps, !1), [e._t("tooltip")], 2),
                                e._v(" "),
                                l(
                                    "div",
                                    {
                                        staticClass: "rangeField__Wrapper",
                                        style: { height: `${e.dragItemHeight + 20}px` },
                                        on: {
                                            mousedown: function (t) {
                                                return t.preventDefault(), e.clicked.apply(null, arguments);
                                            },
                                        },
                                    },
                                    [
                                        l(
                                            "div",
                                            { ref: "scroller", staticClass: "rangeField__Scroller", style: { height: `${e.lineThickness}px` } },
                                            [
                                                void 0 !== e.stepLines
                                                    ? e._l(e.stepCount + 1, function (i) {
                                                          return l("span", { staticClass: "rangeField__StepLine", style: { left: e.stepSize * (i - 1) + e.dragItemWidth / 2 + "px" } });
                                                      })
                                                    : e._e(),
                                                e._v(" "),
                                                l(
                                                    "span",
                                                    {
                                                        staticClass: "rangeField__Dragger",
                                                        style: { transform: `translate3d(${e.currentX}px, -50%, 0)`, cursor: e.isActive ? "grabbing" : "pointer", transition: `transform ${e.isActive ? 0 : e.transitionDuration}ms` },
                                                        attrs: { tabindex: e.isDisabled ? -1 : 0 },
                                                        on: {
                                                            mousedown: function (t) {
                                                                return t.stopPropagation(), e.dragStart.apply(null, arguments);
                                                            },
                                                            touchstart: function (t) {
                                                                return t.stopPropagation(), e.dragStart.apply(null, arguments);
                                                            },
                                                            focus: function (t) {
                                                                e.isFocused = !0;
                                                            },
                                                            blur: function (t) {
                                                                e.isFocused = !1;
                                                            },
                                                        },
                                                    },
                                                    [
                                                        e._t("default", function () {
                                                            return [l("span", { ref: "dragItem", staticClass: "rangeField__DraggerInline" })];
                                                        }),
                                                        e._v(" "),
                                                        l("span", { staticClass: "rangeField__Value", domProps: { textContent: e._s(e.fakeValue) } }),
                                                    ],
                                                    2
                                                ),
                                            ],
                                            2
                                        ),
                                    ]
                                ),
                                e._v(" "),
                                l("FormError", { attrs: { error: e.errors, className: "selectField__Error" } }),
                                e._v(" "),
                                l("FormError", { attrs: { error: e.validationErrors, className: "selectField__Error" } }),
                                e._v(" "),
                                e.info ? l("span", { staticClass: "selectField__Info form__Info", domProps: { textContent: e._s(e.info) } }) : e._e(),
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
            t.default = component.exports;
            installComponents(component, { FormLabel: l(16).default, FormError: l(15).default });
        },
    },
]);
