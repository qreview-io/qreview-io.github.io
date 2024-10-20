(window.webpackJsonp = window.webpackJsonp || []).push([
    [13],
    {
        78: function (e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    props: { data: {} },
                    data: () => ({ formData: { email: "", message: "" }, placeholderEmail: "", placeholderMessage: "", isFormSent: !1, isFormError: !1, isValid: void 0 }),
                    mounted() {
                        console.log(this.$config.supportUrl),
                            "en" == this.$store.state.lang
                                ? ((this.placeholderEmail = "Enter your email*"), (this.placeholderMessage = "Type your message*"))
                                : ((this.placeholderEmail = "Ihre Email*"), (this.placeholderMessage = "Ihre Nachricht eingeben*"));
                    },
                    methods: {
                        isEmailValid() {
                            this.isValid = !this.$validate("email", this.formData.email).isError && this.formData.message.length > 0;
                        },
                        resizeTextArea() {
                            const element = document.querySelector("textarea");
                            "" !== element.value ? (element.style.height = `${element.scrollHeight}px`) : (element.style.height = "65rem");
                        },
                        async sendEmail() {
                            try {
                                await this.$axios.post(this.$config.supportUrl, this.formData, { headers: { "Content-Type": "application/json" } });
                                (this.isFormSent = !0),
                                    (this.isFormError = !1),
                                    setTimeout(() => {
                                        (this.isFormSent = !1), (this.formData.email = ""), (this.formData.message = ""), (this.isValid = !1);
                                    }, 8e3);
                            } catch (e) {
                                (this.isFormSent = !0), (this.isFormError = !0), console.log(e);
                            }
                        },
                    },
                },
                l = r(0),
                component = Object(l.a)(
                    o,
                    function () {
                        var e = this,
                            t = e.$createElement,
                            r = e._self._c || t;
                        return r("div", { staticClass: "container" }, [
                            r(
                                "div",
                                { staticClass: "support__HeroForm" },
                                [
                                    r("h2", { domProps: { innerHTML: e._s(e.$store.getters.formatText(e.data.value.text)) } }),
                                    e._v(" "),
                                    e.isFormSent
                                        ? e._e()
                                        : [
                                              r(
                                                  "form",
                                                  {
                                                      class: { isValid: e.isValid },
                                                      on: {
                                                          submit: function (t) {
                                                              return t.preventDefault(), e.sendEmail.apply(null, arguments);
                                                          },
                                                          keyup: e.isEmailValid,
                                                      },
                                                  },
                                                  [
                                                      r("TextField", {
                                                          attrs: { type: "email", placeholder: e.placeholderEmail },
                                                          model: {
                                                              value: e.formData.email,
                                                              callback: function (t) {
                                                                  e.$set(e.formData, "email", t);
                                                              },
                                                              expression: "formData.email",
                                                          },
                                                      }),
                                                      e._v(" "),
                                                      r("TextareaField", {
                                                          ref: "textarea",
                                                          attrs: { placeholder: e.placeholderMessage },
                                                          on: { input: e.resizeTextArea },
                                                          model: {
                                                              value: e.formData.message,
                                                              callback: function (t) {
                                                                  e.$set(e.formData, "message", t);
                                                              },
                                                              expression: "formData.message",
                                                          },
                                                      }),
                                                      e._v(" "),
                                                      r(
                                                          "div",
                                                          { staticClass: "form__Privacy" },
                                                          [
                                                              r("i18n", {
                                                                  attrs: { tag: "p", path: "support.submit" },
                                                                  scopedSlots: e._u(
                                                                      [
                                                                          {
                                                                              key: "submitLink",
                                                                              fn: function () {
                                                                                  return [r("n-link", { attrs: { to: e.$store.getters.link("PrivacyPolicy") } }, [e._v(e._s(e.$t("support.submitTextPrivacy")))])];
                                                                              },
                                                                              proxy: !0,
                                                                          },
                                                                      ],
                                                                      null,
                                                                      !1,
                                                                      3021741314
                                                                  ),
                                                              }),
                                                              e._v(" "),
                                                              r("div", [
                                                                  r("button", { staticClass: "btn--Black", attrs: { disabled: !e.isValid } }, [
                                                                      e._v("\n              " + e._s(e.$t("footer.btn")) + "\n              "),
                                                                      r("span", [
                                                                          r(
                                                                              "svg",
                                                                              {
                                                                                  directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                                                                                  attrs: {
                                                                                      viewBox: "0 0 15 14",
                                                                                      xmlns: "http://www.w3.org/2000/svg",
                                                                                      inline: "",
                                                                                      "data-src": "@/assets/svgs/arrow.svg",
                                                                                      role: "presentation",
                                                                                      focusable: "false",
                                                                                      tabindex: "-1",
                                                                                  },
                                                                              },
                                                                              [
                                                                                  r(
                                                                                      "g",
                                                                                      { attrs: { stroke: "currentColor", "stroke-width": ".96", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" } },
                                                                                      [r("path", { attrs: { d: "M1 6.909h13M7.933 12.818L14 6.91 7.933 1" } })]
                                                                                  ),
                                                                              ]
                                                                          ),
                                                                      ]),
                                                                  ]),
                                                              ]),
                                                          ],
                                                          1
                                                      ),
                                                  ],
                                                  1
                                              ),
                                          ],
                                    e._v(" "),
                                    e.isFormSent
                                        ? r("div", { staticClass: "footer__FormSuccess" }, [
                                              e.isFormError ? e._e() : r("p", [e._v("\n        " + e._s(e.$t("support.success")) + "\n      ")]),
                                              e._v(" "),
                                              e.isFormError ? r("p", { domProps: { innerHTML: e._s(e.$t("support.error")) } }) : e._e(),
                                          ])
                                        : e._e(),
                                ],
                                2
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
            installComponents(component, { TextField: r(29).default, TextareaField: r(69).default, Button: r(10).default });
        },
    },
]);
