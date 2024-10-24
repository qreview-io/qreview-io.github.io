(window.webpackJsonp = window.webpackJsonp || []).push([
    [4, 28],
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
        85: function (e, t, r) {
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
                        return r("section", { staticClass: "home__News" }, [
                            r(
                                "div",
                                { staticClass: "container--Mid" },
                                [
                                    r("h2", { directives: [{ name: "animate", rawName: "v-animate" }], domProps: { textContent: e._s(e.data.value.title) } }),
                                    e._v(" "),
                                    r(
                                        "DragSlider",
                                        { staticClass: "home__NewsSlider" },
                                        e._l(e.data.value.items, function (t) {
                                            return r("div", { key: t.id, staticClass: "home__NewsItem" }, [
                                                r("h3", { domProps: { textContent: e._s(t.small_title) } }),
                                                e._v(" "),
                                                r("div", [
                                                    r("div", [r("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], attrs: { "data-src": t.item_image.meta.url, alt: t.item_image.alt, width: "300", height: "100" } })]),
                                                    e._v(" "),
                                                    r("p", { domProps: { textContent: e._s(t.lead) } }),
                                                ]),
                                                e._v(" "),
                                                r("a", { staticClass: "isNotCustomCursor", attrs: { target: "_blank", href: t.link, draggable: "false" } }, [
                                                    r(
                                                        "svg",
                                                        {
                                                            directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                            attrs: {
                                                                viewBox: "0 0 25 25",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                inline: "",
                                                                "data-src": "@/assets/svgs/arrow-top.svg",
                                                                role: "presentation",
                                                                focusable: "false",
                                                                tabindex: "-1",
                                                            },
                                                        },
                                                        [
                                                            r("g", { attrs: { stroke: "currentColor", "stroke-width": "1.28", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } }, [
                                                                r("path", { attrs: { d: "M12.309 22.924V8.49M19.032 15.226l-6.724-6.735-6.724 6.735" } }),
                                                            ]),
                                                        ]
                                                    ),
                                                    e._v("\n          " + e._s(t.small_title) + "\n        "),
                                                ]),
                                            ]);
                                        }),
                                        0
                                    ),
                                ],
                                1
                            ),
                        ]);
                    },
                    [],
                    !1,
                    null,
                    null,
                    null
                );
            t.default = component.exports;
            installComponents(component, { DragSlider: r(183).default });
        },
    },
]);
