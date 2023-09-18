import{_ as p,o as u,e as g,w as l,b as e,f as t,a as o,n as _,g as m,C as $,h as x,j as v,p as y,c as w,F as C,H as k,k as B,l as T,T as D,M as P}from"./entry.68beb385.js";const V={},A=e("p",null,[t(" Unstyled mode consists of two solutions. First part is removal of the component specific style classes from the DOM, when "),e("i",null,"unstyled"),t(" setting is enabled components do not include any CSS selectors while core functionality is still available. For example, in the default styled mode, the dropdown component adds "),e("i",null,".p-dropdown"),t(" style class to the root element and includes CSS to corresponding style. In unstyled setting, this style class is not added to the root element and the CSS is not included in the page. ")],-1),N=e("i",null,"pt",-1);function F(c,h){const a=$,r=x;return u(),g(r,_(m(c.$attrs)),{default:l(()=>[A,e("p",null,[t(" The second part is custom styling as components are displayed as transparent without their styles. "),o(a,{to:"/passthrough"},{default:l(()=>[t("Pass Through Props")]),_:1}),t(" feature is the key of since it also supports a global configuration to create themes in unstyled mode. In fact, the upcoming Tailwind theme is basically a custom "),N,t(" configuration. ")])]),_:1},16)}const M=p(V,[["render",F]]),O={data(){return{code:{basic:`<Button label="Check" icon="pi pi-check" unstyled
    :pt="{
        root: { class: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-3 border-round border-none flex gap-2' },
        label: { class: 'text-white font-bold text-xl' },
        icon: 'text-white text-2xl' // OR { class: 'text-white text-2xl' }
    }"
/>`,options:`<template>
    <div class="card">
        <Button label="Check" icon="pi pi-check" unstyled
            :pt="{
                root: { class: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-3 border-round border-none flex gap-2' },
                label: { class: 'text-white font-bold text-xl' },
                icon: 'text-white text-2xl' // OR { class: 'text-white text-2xl' }
            }"
        />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <Button label="Check" icon="pi pi-check" unstyled
        :pt="{
            root: { class: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-3 border-round border-none flex gap-2' },
            label: { class: 'text-white font-bold text-xl' },
            icon: 'text-white text-2xl' // OR { class: 'text-white text-2xl' }
        }"
    />
</template>

<script setup>
<\/script>`}}}},R=e("i",null,"root",-1),z=e("i",null,"label",-1),H=e("i",null,"icon",-1),U={class:"card flex justify-content-center"};function j(c,h,a,r,n,b){const s=$,i=v("Button"),d=y,f=x;return u(),g(f,_(m(c.$attrs)),{default:l(()=>[e("p",null,[t(" Here is a sample that provides a style using PrimeFlex CSS library. Before beginning, head over to the pass through section "),o(s,{to:"/button"},{default:l(()=>[t("button")]),_:1}),t(" documentation to learn more about the components internals. We'll be using the "),R,t(", "),z,t(" and "),H,t(" elements to add a custom style. ")]),e("div",U,[o(i,{label:"Check",icon:"pi pi-check",unstyled:"",pt:{root:{class:"bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-3 border-round border-none flex gap-2"},label:{class:"text-white font-bold text-xl"},icon:"text-white text-2xl"}})]),o(d,{code:n.code},null,8,["code"])]),_:1},16)}const E=p(O,[["render",j]]),I={data(){return{code1:{basic:`import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, { unstyled: true });`},code2:{basic:`<Button label="Check" icon="pi pi-check" unstyled></Button>
`}}}},L=e("p",null,[t("Unstyled mode is enabled for the whole suite by setting "),e("i",null,"unstyled"),t(" as true during PrimeVue installation.")],-1),W=e("p",null,[t("Alternatively even in the default styled mode, a particular component can still be used as unstyled by adding the "),e("i",null,"unstyled"),t(" prop of the component.")],-1),q={class:"card flex justify-content-center"};function G(c,h,a,r,n,b){const s=y,i=v("Button"),d=x;return u(),g(d,_(m(c.$attrs)),{default:l(()=>[L,o(s,{code:n.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),W,e("div",q,[o(i,{label:"Check",icon:"pi pi-check",unstyled:""})]),o(s,{code:n.code2,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])]),_:1},16)}const J=p(I,[["render",G]]),K={data(){return{code:{basic:`import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, { 
    pt: {
        button: {
            root: { class: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-3 border-round border-none flex gap-2' },
            label: 'text-white font-bold text-xl', // OR { class: 'text-white font-bold text-xl' }
            icon: 'text-white text-2xl' 
        },
        panel: {
            header: 'bg-primary border-primary',
            content: 'border-primary text-lg text-primary-700',
            title: 'bg-primary text-xl',
            toggler: 'bg-primary hover:bg-primary-reverse'
        }
    } 
});`}}}},Q=e("p",null,[t(" An unstyled theme is basically a global "),e("i",null,"pt"),t(" configuration so that it can be defined only once from a single location, still a particular component can override a global configuration since the "),e("i",null,"pt"),t(" props of a component and the global setting is merged with component having higher precedencee. ")],-1);function X(c,h,a,r,n,b){const s=x,i=y;return u(),w(C,null,[o(s,_(m(c.$attrs)),{default:l(()=>[Q]),_:1},16),o(i,{code:n.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Y=p(K,[["render",X]]),Z={data(){return{docs:[{id:"architecture",label:"Architecture",component:M},{id:"setup",label:"Setup",component:J},{id:"example",label:"Example",component:E},{id:"theme",label:"Theme",component:Y}]}}},ee={class:"doc"},te={class:"doc-main"},oe=e("div",{class:"doc-intro"},[e("h1",null,"Unstyled Mode"),e("p",null,"Styling PrimeVue with your favorite CSS library.")],-1);function ne(c,h,a,r,n,b){const s=D,i=P,d=k,f=B,S=T;return u(),w("div",null,[o(d,null,{default:l(()=>[o(s,null,{default:l(()=>[t("Unstyled - PrimeVue")]),_:1}),o(i,{name:"description",content:"Styling PrimeVue with your favorite CSS library."})]),_:1}),e("div",ee,[e("div",te,[oe,o(f,{docs:n.docs},null,8,["docs"])]),o(S,{docs:n.docs},null,8,["docs"])])])}const se=p(Z,[["render",ne]]);export{se as default};
