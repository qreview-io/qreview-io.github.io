(window.webpackJsonp = window.webpackJsonp || []).push([
    [34],
    {
        192: function (t, e, r) {
            "use strict";
            r.r(e);
            var l = {
                    props: { min: { default: 0 }, max: { default: 100 }, value: {}, step: { default: 1 }, lineThickness: { default: 1 }, decimals: { default: 0 }, stepLines: {}, transitionDuration: { default: 300 } },
                    mixins: [r(11).a],
                    data: () => ({ isActive: !1, currentX: 0, initialX: 0, xOffset: 0, width: 1, fakeValue: 0, dragger: null, dragItemWidth: 0, dragItemHeight: 0, isFocused: !1, changeValueTimeout: null }),
                    computed: {
                        fieldValue: {
                            get() {
                                return (this.fakeValue = this.value), this.value;
                            },
                            set(t) {
                                this.$emit("input", t);
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
                        dragStart(t) {
                            this.isActive = !0;
                            let e = this.getX(t, "touchstart");
                            this.initialX = e - this.xOffset;
                        },
                        dragEnd(t) {
                            (this.isActive = !1), (this.isFocused = !1), (this.initialX = this.currentX), this.setCurrentX();
                        },
                        drag(t) {
                            if (this.isActive) {
                                t.preventDefault();
                                let e = this.getX(t, "touchmove");
                                (e -= this.initialX), (this.currentX = this.xOffset = this.getBoundedX(e)), this.changeValue();
                            }
                        },
                        mouseleave() {
                            (this.isActive = !1), this.setCurrentX();
                        },
                        clicked(t) {
                            let e = this.getX(t, "touchstart", "offsetX");
                            (e -= this.dragItemWidth / 2), (this.currentX = this.xOffset = this.getBoundedX(e)), this.changeValue();
                        },
                        getX: (t, e, r = "clientX") => (t.type === e ? t.touches[0][r] : t[r]),
                        getBoundedX(t) {
                            return t > this.fullWidth ? (t = this.fullWidth) : t <= 0 && (t = 0), t;
                        },
                        setCurrentX() {
                            let t = this.fullWidth / this.rangeOfValues;
                            (t *= this.fieldValue - this.floatValues.min), (this.currentX = this.xOffset = this.getBoundedX(t));
                        },
                        changeValue() {
                            let t = (this.xOffset / this.fullWidth) * this.rangeOfValues + this.floatValues.min;
                            (this.fakeValue = (Math.floor(t / this.floatValues.step) * this.floatValues.step).toFixed(this.floatValues.decimals)), (this.fieldValue = this.fakeValue);
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
                n = r(0),
                component = Object(n.a)(
                    l,
                    function () {
                        var t = this,
                            e = t.$createElement,
                            r = t._self._c || e;
                        return r(
                            "div",
                            {
                                class: ["rangeField", "form__Field", { isError: void 0 !== t.error }, { isDisabled: t.isDisabled }, { isInline: void 0 !== t.inline }, { isFocused: t.isActive || t.isFocused }],
                                on: { mousemove: t.drag, touchmove: t.drag, mouseup: t.dragEnd, touchend: t.dragEnd, mouseleave: t.mouseleave },
                            },
                            [
                                r("input", {
                                    directives: [{ name: "model", rawName: "v-model", value: t.value, expression: "value" }],
                                    attrs: { type: "text", required: t.isRequired, id: t._uid, tabindex: "-1" },
                                    domProps: { value: t.value },
                                    on: {
                                        input: function (e) {
                                            e.target.composing || (t.value = e.target.value);
                                        },
                                    },
                                }),
                                t._v(" "),
                                r("FormLabel", t._b({}, "FormLabel", t.formLabelProps, !1), [t._t("tooltip")], 2),
                                t._v(" "),
                                r(
                                    "div",
                                    {
                                        staticClass: "rangeField__Wrapper",
                                        style: { height: `${t.dragItemHeight + 20}px` },
                                        on: {
                                            mousedown: function (e) {
                                                return e.preventDefault(), t.clicked.apply(null, arguments);
                                            },
                                        },
                                    },
                                    [
                                        r(
                                            "div",
                                            { ref: "scroller", staticClass: "rangeField__Scroller", style: { height: `${t.lineThickness}px` } },
                                            [
                                                void 0 !== t.stepLines
                                                    ? t._l(t.stepCount + 1, function (i) {
                                                          return r("span", { staticClass: "rangeField__StepLine", style: { left: t.stepSize * (i - 1) + t.dragItemWidth / 2 + "px" } });
                                                      })
                                                    : t._e(),
                                                t._v(" "),
                                                r(
                                                    "span",
                                                    {
                                                        staticClass: "rangeField__Dragger",
                                                        style: { transform: `translate3d(${t.currentX}px, -50%, 0)`, cursor: t.isActive ? "grabbing" : "pointer", transition: `transform ${t.isActive ? 0 : t.transitionDuration}ms` },
                                                        attrs: { tabindex: t.isDisabled ? -1 : 0 },
                                                        on: {
                                                            mousedown: function (e) {
                                                                return e.stopPropagation(), t.dragStart.apply(null, arguments);
                                                            },
                                                            touchstart: function (e) {
                                                                return e.stopPropagation(), t.dragStart.apply(null, arguments);
                                                            },
                                                            focus: function (e) {
                                                                t.isFocused = !0;
                                                            },
                                                            blur: function (e) {
                                                                t.isFocused = !1;
                                                            },
                                                        },
                                                    },
                                                    [
                                                        t._t("default", function () {
                                                            return [r("span", { ref: "dragItem", staticClass: "rangeField__DraggerInline" })];
                                                        }),
                                                        t._v(" "),
                                                        r("span", { staticClass: "rangeField__Value", domProps: { textContent: t._s(t.fakeValue) } }),
                                                    ],
                                                    2
                                                ),
                                            ],
                                            2
                                        ),
                                    ]
                                ),
                                t._v(" "),
                                r("FormError", { attrs: { error: t.errors, className: "selectField__Error" } }),
                                t._v(" "),
                                r("FormError", { attrs: { error: t.validationErrors, className: "selectField__Error" } }),
                                t._v(" "),
                                t.info ? r("span", { staticClass: "selectField__Info form__Info", domProps: { textContent: t._s(t.info) } }) : t._e(),
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
            installComponents(component, { FormLabel: r(16).default, FormError: r(15).default });
        },
    },
]);
