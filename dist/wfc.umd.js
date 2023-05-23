(function(r,o){typeof exports=="object"&&typeof module<"u"?o(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],o):(r=typeof globalThis<"u"?globalThis:r||self,o(r.myLibraryVueTs={},r.Vue))})(this,function(r,o){"use strict";var b=document.createElement("style");b.textContent=`button[data-v-24f788ad]{padding:.6rem 1.25rem;background-color:#747bff;border:0}button[data-v-24f788ad]:hover{background-color:#535bf2}
`,document.head.appendChild(b);const _="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=",M={key:0},u=o.defineComponent({__name:"IconFeature",props:{coordinates:null,selected:{type:Boolean},icon:null,id:null},setup(e){const t=e,l=o.ref(!1),c=o.inject("ol-format");new c.GeoJSON;const f=o.inject("ol-selectconditions").pointerMove,p=i=>{},n=i=>i.values_.id!=null,s=o.inject("selectedFeature");return o.watch([s],()=>{s&&s.value===t.id?l.value=!0:l.value=!1},{immediate:!0}),(i,g)=>{const d=o.resolveComponent("ol-overlay"),m=o.resolveComponent("ol-style-icon"),h=o.resolveComponent("ol-style"),w=o.resolveComponent("ol-interaction-select"),C=o.resolveComponent("ol-geom-point"),A=o.resolveComponent("ol-feature"),k=o.resolveComponent("ol-source-vector"),B=o.resolveComponent("ol-vector-layer");return o.openBlock(),o.createElementBlock(o.Fragment,null,[o.createVNode(d,{position:e.coordinates},{default:o.withCtx(()=>[l.value?(o.openBlock(),o.createElementBlock("div",M,[o.renderSlot(i.$slots,"overlay")])):o.createCommentVNode("",!0)]),_:3},8,["position"]),o.createVNode(w,{onSelect:p,condition:o.unref(f),filter:n},{default:o.withCtx(()=>[o.createVNode(h,null,{default:o.withCtx(()=>[o.createVNode(m,{src:e.icon||o.unref(_)},null,8,["src"])]),_:1})]),_:1},8,["condition"]),o.createVNode(B,null,{default:o.withCtx(()=>[o.createVNode(k,null,{default:o.withCtx(()=>[o.createVNode(A,{properties:{id:e.id}},{default:o.withCtx(()=>[o.createVNode(C,{coordinates:e.coordinates},null,8,["coordinates"])]),_:1},8,["properties"])]),_:1}),o.createVNode(h,null,{default:o.withCtx(()=>[o.createVNode(m,{src:e.icon||o.unref(_),scale:.75},null,8,["src","scale"])]),_:1})]),_:1})],64)}}}),y=o.defineComponent({__name:"LineFeature",props:{from:null,to:null,color:null,width:null},setup(e){return(t,l)=>{const c=o.resolveComponent("ol-geom-line-string"),a=o.resolveComponent("ol-style-stroke"),f=o.resolveComponent("ol-style"),p=o.resolveComponent("ol-feature"),n=o.resolveComponent("ol-source-vector"),s=o.resolveComponent("ol-vector-layer");return o.openBlock(),o.createBlock(s,null,{default:o.withCtx(()=>[o.createVNode(n,null,{default:o.withCtx(()=>[o.createVNode(p,null,{default:o.withCtx(()=>[o.createVNode(c,{coordinates:[e.from,e.to]},null,8,["coordinates"]),o.createVNode(f,null,{default:o.withCtx(()=>[o.createVNode(a,{color:e.color||"yellow",width:e.width||5},null,8,["color","width"])]),_:1})]),_:1})]),_:1})]),_:1})}}}),N=o.defineComponent({__name:"Map",props:{clickAllowed:{type:Boolean,default:!0},center:{default:[40,40]},projection:{default:"EPSG:4326"},zoom:{default:8},rotation:{default:0},tileUrl:{default:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},setup(e){const t=e,l=o.useSlots(),c=o.ref(),a=o.ref(null),f=o.ref(!0);return o.provide("selectedFeature",o.computed(()=>a.value)),o.onMounted(()=>{if(t.clickAllowed!==!1&&l.default!==void 0){const p=l.default().filter(n=>n.type.__name==="IconFeature");c.value.map.on("click",n=>{if(!f.value)return;const s=n.map.getView().getZoom(),i=Math.pow(2,s),d=p.sort((m,h)=>{const w=m.props.coordinates,C=h.props.coordinates,A=w[0],k=w[1],B=C[0],T=C[1],D=Math.sqrt(Math.pow(A-n.coordinate[0],2)+Math.pow(k-n.coordinate[1],2)),O=Math.sqrt(Math.pow(B-n.coordinate[0],2)+Math.pow(T-n.coordinate[1],2));return D-O})[0];d!==void 0&&(Math.sqrt(Math.pow(d.props.coordinates[0]-n.coordinate[0],2)+Math.pow(d.props.coordinates[1]-n.coordinate[1],2))<40/i?a.value=d.props.id:a.value=null)})}}),(p,n)=>{const s=o.resolveComponent("ol-view"),i=o.resolveComponent("ol-source-osm"),g=o.resolveComponent("ol-tile-layer"),d=o.resolveComponent("ol-map");return o.openBlock(),o.createBlock(d,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,style:{height:"400px",width:"1000px"},ref_key:"olmap",ref:c},{default:o.withCtx(()=>[o.createVNode(s,{ref:"view",center:t.center,rotation:t.rotation,zoom:t.zoom,projection:t.projection},null,8,["center","rotation","zoom","projection"]),o.createVNode(g,null,{default:o.withCtx(()=>[o.createVNode(i,{url:t.tileUrl},null,8,["url"])]),_:1}),o.renderSlot(p.$slots,"default",{test:1})]),_:3},512)}}}),z=o.createElementVNode("div",null,"F1",-1),F=o.createElementVNode("div",null,"F2",-1),x=o.defineComponent({__name:"HelloWorld",setup(e){return(t,l)=>(o.openBlock(),o.createBlock(N,{center:[40,40],rotation:0,zoom:8,projection:"EPSG:4326"},{default:o.withCtx(()=>[o.createVNode(u,{icon:o.unref(_),coordinates:[40,40],id:"f1"},{overlay:o.withCtx(()=>[z]),_:1},8,["icon"]),o.createVNode(u,{icon:o.unref(_),coordinates:[41,41],id:"f2"},{overlay:o.withCtx(()=>[F]),_:1},8,["icon"]),o.createVNode(y,{from:[40,40],to:[41,41]})]),_:1}))}}),E=o.defineComponent({__name:"MyButton",props:{primary:{type:Boolean,default:!1}},setup(e){const t=e,{primary:l}=o.reactive(t);return(c,a)=>(o.openBlock(),o.createElementBlock("button",{class:o.normalizeClass(["btn",{primary:o.unref(l)}])},[o.renderSlot(c.$slots,"default",{},void 0,!0)],2))}}),P="",V=((e,t)=>{const l=e.__vccOpts||e;for(const[c,a]of t)l[c]=a;return l})(E,[["__scopeId","data-v-24f788ad"]]),H={install:e=>{e.component("HelloWorld",x),e.component("MyButton",V),e.component("wfc-icon",u),e.component("wfc-line",y),e.component("wfc-map",N)}};r.HelloWorld=x,r.IconFeature=u,r.LineFeature=y,r.Map=N,r.MyButton=V,r.default=H,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
