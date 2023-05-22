import { defineComponent as h, ref as g, inject as N, watch as T, resolveComponent as t, openBlock as f, createElementBlock as b, Fragment as q, createVNode as e, withCtx as n, renderSlot as C, createCommentVNode as R, unref as _, createBlock as x, useSlots as S, provide as X, computed as Y, onMounted as I, createElementVNode as D, reactive as L, normalizeClass as j } from "vue";
const z = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=", Z = { key: 0 }, H = /* @__PURE__ */ h({
  __name: "IconFeature",
  props: {
    coordinates: null,
    selected: { type: Boolean },
    icon: null,
    id: null
  },
  setup(o) {
    const l = o, r = g(!1), s = N("ol-format");
    new s.GeoJSON();
    const m = N("ol-selectconditions").pointerMove, p = (u) => {
    }, c = (u) => u.values_.id != null, i = N("selectedFeature");
    return T(
      [i],
      () => {
        i && i.value === l.id ? r.value = !0 : r.value = !1;
      },
      { immediate: !0 }
    ), (u, k) => {
      const d = t("ol-overlay"), v = t("ol-style-icon"), w = t("ol-style"), y = t("ol-interaction-select"), A = t("ol-geom-point"), B = t("ol-feature"), F = t("ol-source-vector"), M = t("ol-vector-layer");
      return f(), b(q, null, [
        e(d, { position: o.coordinates }, {
          default: n(() => [
            r.value ? (f(), b("div", Z, [
              C(u.$slots, "overlay")
            ])) : R("", !0)
          ]),
          _: 3
        }, 8, ["position"]),
        e(y, {
          onSelect: p,
          condition: _(m),
          filter: c
        }, {
          default: n(() => [
            e(w, null, {
              default: n(() => [
                e(v, {
                  src: o.icon || _(z)
                }, null, 8, ["src"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["condition"]),
        e(M, null, {
          default: n(() => [
            e(F, null, {
              default: n(() => [
                e(B, {
                  properties: { id: o.id }
                }, {
                  default: n(() => [
                    e(A, { coordinates: o.coordinates }, null, 8, ["coordinates"])
                  ]),
                  _: 1
                }, 8, ["properties"])
              ]),
              _: 1
            }),
            e(w, null, {
              default: n(() => [
                e(v, {
                  src: o.icon || _(z),
                  scale: 0.75
                }, null, 8, ["src", "scale"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
}), E = /* @__PURE__ */ h({
  __name: "LineFeature",
  props: {
    from: null,
    to: null,
    color: null,
    width: null
  },
  setup(o) {
    return (l, r) => {
      const s = t("ol-geom-line-string"), a = t("ol-style-stroke"), m = t("ol-style"), p = t("ol-feature"), c = t("ol-source-vector"), i = t("ol-vector-layer");
      return f(), x(i, null, {
        default: n(() => [
          e(c, null, {
            default: n(() => [
              e(p, null, {
                default: n(() => [
                  e(s, {
                    coordinates: [o.from, o.to]
                  }, null, 8, ["coordinates"]),
                  e(m, null, {
                    default: n(() => [
                      e(a, {
                        color: o.color || "yellow",
                        width: o.width || 5
                      }, null, 8, ["color", "width"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), U = /* @__PURE__ */ h({
  __name: "Map",
  props: {
    clickAllowed: { type: Boolean, default: !0 },
    center: { default: [40, 40] },
    projection: { default: "EPSG:4326" },
    zoom: { default: 8 },
    rotation: { default: 0 },
    tileUrl: { default: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png" }
  },
  setup(o) {
    const l = o, r = S(), s = g(), a = g(null), m = g(!0);
    return X(
      "selectedFeature",
      Y(() => a.value)
    ), I(() => {
      if (l.clickAllowed !== !1 && r.default !== void 0) {
        const p = r.default().filter((c) => c.type.__name === "IconFeature");
        s.value.map.on("click", (c) => {
          if (!m.value)
            return;
          const i = c.map.getView().getZoom(), u = Math.pow(2, i), d = p.sort((v, w) => {
            const y = v.props.coordinates, A = w.props.coordinates, B = y[0], F = y[1], M = A[0], W = A[1], O = Math.sqrt(
              Math.pow(B - c.coordinate[0], 2) + Math.pow(F - c.coordinate[1], 2)
            ), P = Math.sqrt(
              Math.pow(M - c.coordinate[0], 2) + Math.pow(W - c.coordinate[1], 2)
            );
            return O - P;
          })[0];
          d !== void 0 && (Math.sqrt(
            // @ts-ignore
            Math.pow(d.props.coordinates[0] - c.coordinate[0], 2) + // @ts-ignore
            Math.pow(d.props.coordinates[1] - c.coordinate[1], 2)
          ) < 40 / u ? a.value = d.props.id : a.value = null);
        });
      }
    }), (p, c) => {
      const i = t("ol-view"), u = t("ol-source-osm"), k = t("ol-tile-layer"), d = t("ol-map");
      return f(), x(d, {
        loadTilesWhileAnimating: !0,
        loadTilesWhileInteracting: !0,
        style: { height: "400px", width: "1000px" },
        ref_key: "olmap",
        ref: s
      }, {
        default: n(() => [
          e(i, {
            ref: "view",
            center: l.center,
            rotation: l.rotation,
            zoom: l.zoom,
            projection: l.projection
          }, null, 8, ["center", "rotation", "zoom", "projection"]),
          e(k, null, {
            default: n(() => [
              e(u, {
                url: l.tileUrl
              }, null, 8, ["url"])
            ]),
            _: 1
          }),
          C(p.$slots, "default", { test: 1 })
        ]),
        _: 3
      }, 512);
    };
  }
}), G = /* @__PURE__ */ D("div", null, "F1", -1), K = /* @__PURE__ */ D("div", null, "F2", -1), V = /* @__PURE__ */ h({
  __name: "HelloWorld",
  setup(o) {
    return (l, r) => (f(), x(U, {
      center: [40, 40],
      rotation: 0,
      zoom: 8,
      projection: "EPSG:4326"
    }, {
      default: n(() => [
        e(H, {
          icon: _(z),
          coordinates: [40, 40],
          id: "f1"
        }, {
          overlay: n(() => [
            G
          ]),
          _: 1
        }, 8, ["icon"]),
        e(H, {
          icon: _(z),
          coordinates: [41, 41],
          id: "f2"
        }, {
          overlay: n(() => [
            K
          ]),
          _: 1
        }, 8, ["icon"]),
        e(E, {
          from: [40, 40],
          to: [41, 41]
        })
      ]),
      _: 1
    }));
  }
}), Q = /* @__PURE__ */ h({
  __name: "MyButton",
  props: {
    primary: { type: Boolean, default: !1 }
  },
  setup(o) {
    const l = o, { primary: r } = L(l);
    return (s, a) => (f(), b("button", {
      class: j(["btn", { primary: _(r) }])
    }, [
      C(s.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const J = (o, l) => {
  const r = o.__vccOpts || o;
  for (const [s, a] of l)
    r[s] = a;
  return r;
}, $ = /* @__PURE__ */ J(Q, [["__scopeId", "data-v-24f788ad"]]), eo = {
  install: (o) => {
    o.component("HelloWorld", V), o.component("MyButton", $), o.component("wfc-icon", H), o.component("wfc-line", E), o.component("wfc-map", U);
  }
};
export {
  V as HelloWorld,
  $ as MyButton,
  eo as default
};
