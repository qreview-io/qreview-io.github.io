(window.webpackJsonp = window.webpackJsonp || []).push([
    [5, 28],
    {
        180: function (e, r, t) {
            var content = t(182);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[e.i, content, ""]]), content.locals && (e.exports = content.locals);
            (0, t(46).default)("0c4d6023", content, !0, { sourceMap: !1 });
        },
        181: function (e, r, t) {
            "use strict";
            t(180);
        },
        182: function (e, r, t) {
            var l = t(45)(!1);
            l.push([
                e.i,
                ".dragSlider__Wrapper{overflow-x:scroll;padding-bottom:46px;scrollbar-width:auto;cursor:initial !important;scrollbar-color:#140a23 #e9e7e9;scrollbar-width:thin}.dragSlider__Wrapper::-webkit-scrollbar{display:block;width:8px;height:4px}.dragSlider__Wrapper::-webkit-scrollbar-corner,.dragSlider__Wrapper::-webkit-scrollbar-track{background:#e9e7e9}.dragSlider__Wrapper::-webkit-scrollbar-thumb{background:#140a23}.dragSlider__Wrapper *{pointer-events:none}@media screen and (max-width: 900px){.dragSlider__Wrapper{padding-bottom:46px;scrollbar-width:auto}.dragSlider__Wrapper::-webkit-scrollbar{display:block;width:8px;height:4px}.dragSlider__Wrapper::-webkit-scrollbar-corner,.dragSlider__Wrapper::-webkit-scrollbar-track{background:#e9e7e9}.dragSlider__Wrapper::-webkit-scrollbar-thumb{background:#140a23}}.dragSlider__Items{display:flex}",
                "",
            ]),
                (e.exports = l);
        },
        183: function (e, r, t) {
            "use strict";
            t.r(r);
            var l = {
                    data: () => ({ pos: { left: 0, x: 0 }, el: void 0, isMouseDown: !1 }),
                    mounted() {
                        (this.el = this.$el.querySelector(".dragSlider__Wrapper")), this.setEvents();
                    },
                    methods: {
                        mouseMoveHandler(e) {
                            const r = e.clientX - this.pos.x;
                            this.el.scrollLeft = this.pos.left - r;
                        },
                        mouseDownHandler(e) {
                            (this.isMouseDown = !0),
                                (this.el.style.cursor = "grabbing"),
                                (this.el.style.userSelect = "none"),
                                (this.pos = { left: this.el.scrollLeft, x: e.clientX }),
                                document.addEventListener("mousemove", this.mouseMoveHandler),
                                document.addEventListener("mouseup", this.mouseUpHandler);
                        },
                        mouseUpHandler() {
                            (this.isMouseDown = !1),
                                (this.el.style.cursor = "grab"),
                                this.el.style.removeProperty("user-select"),
                                document.removeEventListener("mousemove", this.mouseMoveHandler),
                                document.removeEventListener("mouseup", this.mouseUpHandler);
                        },
                        scrollHandler(e) {
                            this.isMouseDown || (this.pos = { left: this.el.scrollLeft, x: e.clientX });
                        },
                        setEvents() {
                            (this.el.style.cursor = "grab"), this.el.addEventListener("mousedown", this.mouseDownHandler), this.el.addEventListener("scroll", this.scrollHandler);
                        },
                    },
                },
                o = (t(181), t(0)),
                component = Object(o.a)(
                    l,
                    function () {
                        var e = this,
                            r = e.$createElement,
                            t = e._self._c || r;
                        return t("section", { staticClass: "dragSlider" }, [t("div", { staticClass: "dragSlider__Wrapper isDrag" }, [t("div", { staticClass: "dragSlider__Items wrapper" }, [e._t("default")], 2)])]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            r.default = component.exports;
        },
        91: function (e, r, t) {
            "use strict";
            t.r(r);
            var l = {
                    props: { data: {} },
                    data: () => ({ isCustomersPage: !1 }),
                    mounted() {
                        this.$store.state.currentPage.meta.type.toLowerCase().includes("customers") && (this.isCustomersPage = !0);
                    },
                },
                o = t(0),
                component = Object(o.a)(
                    l,
                    function () {
                        var e = this,
                            r = e.$createElement;
                        e._self._c;
                        return e._e();
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            r.default = component.exports;
            installComponents(component, { DragSlider: t(183).default });
        },
    },
]);
