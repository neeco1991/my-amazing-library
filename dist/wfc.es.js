import { defineComponent as _, ref as i, openBlock as u, createElementBlock as d, Fragment as m, createElementVNode as e, toDisplayString as c, pushScopeId as f, popScopeId as v, createTextVNode as l, reactive as h, normalizeClass as y, unref as g, renderSlot as b } from "vue";
const a = (t) => (f("data-v-1d5be6d4"), t = t(), v(), t), k = { class: "card" }, B = /* @__PURE__ */ a(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ l(" Edit "),
  /* @__PURE__ */ e("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ l(" to test HMR ")
], -1)), I = /* @__PURE__ */ a(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ l(" Check out "),
  /* @__PURE__ */ e("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, "create-vue"),
  /* @__PURE__ */ l(", the official Vue + Vite starter ")
], -1)), V = /* @__PURE__ */ a(() => /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ l(" Install "),
  /* @__PURE__ */ e("a", {
    href: "https://github.com/vuejs/language-tools",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ l(" in your IDE for a better DX ")
], -1)), x = /* @__PURE__ */ a(() => /* @__PURE__ */ e("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1)), H = /* @__PURE__ */ _({
  __name: "HelloWorld",
  props: {
    msg: null
  },
  setup(t) {
    const o = i(0);
    return (s, n) => (u(), d(m, null, [
      e("h1", null, c(t.msg), 1),
      e("div", k, [
        e("button", {
          type: "button",
          onClick: n[0] || (n[0] = (r) => o.value++)
        }, "count is " + c(o.value), 1),
        B
      ]),
      I,
      V,
      x
    ], 64));
  }
});
const p = (t, o) => {
  const s = t.__vccOpts || t;
  for (const [n, r] of o)
    s[n] = r;
  return s;
}, C = /* @__PURE__ */ p(H, [["__scopeId", "data-v-1d5be6d4"]]), M = /* @__PURE__ */ _({
  __name: "MyButton",
  props: {
    primary: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = t, { primary: s } = h(o);
    return (n, r) => (u(), d("button", {
      class: y(["btn", { primary: g(s) }])
    }, [
      b(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const S = /* @__PURE__ */ p(M, [["__scopeId", "data-v-24f788ad"]]), E = {
  install: (t) => {
    t.component("HelloWorld", C), t.component("MyButton", S);
  }
};
export {
  C as HelloWorld,
  S as MyButton,
  E as default
};
