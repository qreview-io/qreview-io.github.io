(window.webpackJsonp = window.webpackJsonp || []).push([
    [2, 28],
    {
        180: function (e, t, r) {
            var content = r(182);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [[e.i, content, ""]]), content.locals && (e.exports = content.locals);
            (0, r(46).default)("0c4d6023", content, !0, { sourceMap: !1 });
        },
        181: function (e, t, r) {
            "use strict";
            r(180);
        },
        182: function (e, t, r) {
            var l = r(45)(!1);
            l.push([
                e.i,
                ".dragSlider__Wrapper{overflow-x:scroll;padding-bottom:46px;scrollbar-width:auto;cursor:initial !important;scrollbar-color:#140a23 #e9e7e9;scrollbar-width:thin}.dragSlider__Wrapper::-webkit-scrollbar{display:block;width:8px;height:4px}.dragSlider__Wrapper::-webkit-scrollbar-corner,.dragSlider__Wrapper::-webkit-scrollbar-track{background:#e9e7e9}.dragSlider__Wrapper::-webkit-scrollbar-thumb{background:#140a23}.dragSlider__Wrapper *{pointer-events:none}@media screen and (max-width: 900px){.dragSlider__Wrapper{padding-bottom:46px;scrollbar-width:auto}.dragSlider__Wrapper::-webkit-scrollbar{display:block;width:8px;height:4px}.dragSlider__Wrapper::-webkit-scrollbar-corner,.dragSlider__Wrapper::-webkit-scrollbar-track{background:#e9e7e9}.dragSlider__Wrapper::-webkit-scrollbar-thumb{background:#140a23}}.dragSlider__Items{display:flex}",
                "",
            ]),
                (e.exports = l);
        },
        183: function (e, t, r) {
            "use strict";
            r.r(t);
            var l = {
                    data: () => ({ pos: { left: 0, x: 0 }, el: void 0, isMouseDown: !1 }),
                    mounted() {
                        (this.el = this.$el.querySelector(".dragSlider__Wrapper")), this.setEvents();
                    },
                    methods: {
                        mouseMoveHandler(e) {
                            const t = e.clientX - this.pos.x;
                            this.el.scrollLeft = this.pos.left - t;
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
                o = (r(181), r(0)),
                component = Object(o.a)(
                    l,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("section", { staticClass: "dragSlider" }, [r("div", { staticClass: "dragSlider__Wrapper isDrag" }, [r("div", { staticClass: "dragSlider__Items wrapper" }, [e._t("default")], 2)])]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
        },
        75: function (e, t, r) {
            "use strict";
            r.r(t);
            var l = { props: { data: {} } },
                o = r(0),
                component = Object(o.a)(
                    l,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("div", { staticClass: "clients" }, [
                            r("div", { staticClass: "container" }, [
                                r("span", { staticClass: "category" }, [e._v(e._s(e.data.value.small_title))]),
                                e._v(" "),
                                r("div", { staticClass: "clients__Inner" }, [
                                    r("div", { staticClass: "clients__Text" }, [
                                        r("div", { staticClass: "clients__TextLeft" }, [
                                            r("h2", { domProps: { innerHTML: e._s(e.data.value.title) } }),
                                            e._v(" "),
                                            r("p", { domProps: { innerHTML: e._s(e.data.value.lead) } }),
                                            e._v(" "),
                                            e.data.value.links.length > 0
                                                ? r(
                                                      "div",
                                                      { staticClass: "clients__TextButtons" },
                                                      [
                                                          e._l(e.data.value.links, function (link) {
                                                              return [null !== link ? r("Button", { key: link.id, attrs: { button: link, color: "White" } }) : e._e()];
                                                          }),
                                                      ],
                                                      2
                                                  )
                                                : e._e(),
                                        ]),
                                        e._v(" "),
                                        r("div", { staticClass: "clients__TextRight" }, [
                                            r("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-src": "./resources/images/for-your-clients.svg", alt: "clients", width: "411", height: "372" } }),
                                        ]),
                                    ]),
                                ]),
                            ]),
                            e._v(" "),
                            e._e(),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { Button: r(10).default, DragSlider: r(183).default });
        },
    },
]);
