(window.webpackJsonp = window.webpackJsonp || []).push([
    [16],
    {
        84: function (e, t, l) {
            "use strict";
            l.r(t);
            var o = {
                    props: { data: {} },
                    data: () => ({
                        locations: [{ lat: 47.3812214, lng: 8.5181801, name: "Zürich" }],
                        mapStyle: [
                            { featureType: "all", elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
                            { featureType: "all", elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#140a23" }, { weight: 2 }, { gamma: 0.84 }] },
                            { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
                            { featureType: "administrative", elementType: "geometry", stylers: [{ weight: 0.6 }, { color: "#353535" }] },
                            { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#140a23" }] },
                            { featureType: "poi", elementType: "geometry", stylers: [{ color: "#353535" }] },
                            { featureType: "poi.attraction", elementType: "geometry.stroke", stylers: [{ color: "#140a23" }, { visibility: "off" }] },
                            { featureType: "poi.attraction", elementType: "labels", stylers: [{ visibility: "on" }, { lightness: "14" }] },
                            { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#140a23" }, { visibility: "simplified" }] },
                            { featureType: "road", elementType: "geometry", stylers: [{ color: "#3b3b3b" }, { lightness: "-30" }] },
                            { featureType: "transit", elementType: "geometry", stylers: [{ color: "#c0c3c8" }, { lightness: "-20" }] },
                            { featureType: "water", elementType: "geometry", stylers: [{ color: "#140a23" }] },
                        ],
                    }),
                },
                r = l(0),
                component = Object(r.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            l = e._self._c || t;
                        return l("section", { staticClass: "about__Map" }, [
                            l("div", { staticClass: "container" }, [
                                l("div", { staticClass: "about__MapWrap" }, [
                                    l("div", { staticClass: "about__MapText" }, [
                                        l("h2", { domProps: { textContent: e._s(e.data.value.title) } }),
                                        e._v(" "),
                                        l("p", { domProps: { textContent: e._s(e.data.value.name) } }),
                                        e._v(" "),
                                        l("p", { domProps: { textContent: e._s(e.data.value.address_street) } }),
                                        e._v(" "),
                                        l("p", { domProps: { textContent: e._s(e.data.value.address_city) } }),
                                        e._v(" "),
                                        l("p", { domProps: { textContent: e._s(e.data.value.address_country) } }),
                                        e._v(" "),
                                        l("a", { attrs: { href: `mailto:${e.data.value.email}` } }, [e._v(" " + e._s(e.data.value.email) + " ")]),
                                        e._v(" "),
                                        l(
                                            "a",
                                            {
                                                staticClass: "btn--View",
                                                attrs: {
                                                    target: "_blank",
                                                    href:
                                                        "https://www.google.com/maps/place/Hohlstrasse+188,+8004+Z%C3%BCrich/@47.3812214,8.5159914,17z/data=!3m1!4b1!4m5!3m4!1s0x47900a3daf8ca56f:0xe148bacd3bc9a330!8m2!3d47.3812214!4d8.5181801?shorturl=1",
                                                },
                                            },
                                            [e._v(e._s(e.$t("about.mapView")))]
                                        ),
                                    ]),
                                    e._v(" "),
                                    l(
                                        "div",
                                        { staticClass: "about__MapContainer" },
                                        [
                                            l(
                                                "GMap",
                                                {
                                                    ref: "gMap",
                                                    attrs: {
                                                        language: "en",
                                                        zoom: 15,
                                                        center: { lat: e.locations[0].lat, lng: e.locations[0].lng },
                                                        options: { fullscreenControl: !1, streetViewControl: !1, mapTypeControl: !1, zoomControl: !0, gestureHandling: "cooperative", styles: e.mapStyle },
                                                    },
                                                },
                                                e._l(e.locations, function (e) {
                                                    return l("GMapMarker", { key: e.id, attrs: { position: { lat: e.lat, lng: e.lng } } });
                                                }),
                                                1
                                            ),
                                        ],
                                        1
                                    ),
                                ]),
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
        },
    },
]);
