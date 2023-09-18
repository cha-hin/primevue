import{_ as c,o as u,e as b,w as i,a as o,b as e,f as t,n as m,g as h,p as w,C as $,h as _,c as v,F as S,H as P,k as C,l as V,T as D,M as z}from"./entry.68beb385.js";import{_ as x}from"./PrimeVueNuxtLink.f51d0c80.js";const A={data(){return{code1:{basic:`import {createApp} from "vue";
import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";

const app = createApp(App);

//My Design System with Tailwind
const MyDesignSystem = {
    panel: {
        header: ({ props }) => ({
            class: [
                'flex items-center justify-between', // flex and alignments
                'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
                { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
            ]
        }),
        title: {
            class: ['leading-none font-bold']
        },
        toggler: {
            class: [
                'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
                'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
                'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
            ]
        },
        togglerIcon: {
            class: ['inline-block']
        },
        content: {
            class: [
                'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
            ] // padding, borders, and colors
        }
    }
}

app.use(PrimeVue, { unstyled: true, pt: MyDesignSystem });`},code2:{basic:`import {createApp} from "vue";
import PrimeVue from "primevue/config";
import { usePassThrough } from "primevue/passthrough";
import Tailwind from "primevue/passthrough/tailwind";

const app = createApp(App);

//Tailwind customization
const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            title: {
                class: ['leading-none font-light text-2xl']
            }
        }
    },
    {
        mergeSections: true,
        mergeProps: false
    }
);

app.use(PrimeVue, { unstyled: true, pt: CustomTailwind });`}}}},j=e("p",null,[t(" The built-in preset is based on the PrimeOne Design and meant to serve as a template to implement your own design. For customization, the pass through values need to be overriden or defined from the ground up. The unstyled section of the theming documentation for each component demonstrates the theme with an editable example. For the complete list visit the "),e("a",{href:"https://github.com/primefaces/primevue/tree/master/components/lib/passthrough/tailwind"},"Tailwind Preset"),t(". ")],-1),B=e("p",null,"First approach is building everything from the ground up and consult the default preset to get hints about the implementation details. This technique is suggested when implementing your own design system.",-1),N=e("i",null,"usePassThrough",-1);function F(s,p,d,g,n,f){const r=w,a=$,l=_;return u(),b(l,m(h(s.$attrs)),{default:i(()=>[j,B,o(r,{code:n.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),e("p",null,[t(" Alternative way is overriding the opinionated PrimeOne theme with "),N,t(". This approach is suggested when you prefer to customize the default preset for your own requirements. For the merge configuration behavior, visit "),o(a,{to:"/passthrough/#usepassthrough"},{default:i(()=>[t("usePassThrough")]),_:1}),t(" documentation. ")]),o(r,{code:n.code2,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])]),_:1},16)}const M=c(A,[["render",F]]),I={},O=e("p",null,"This example covers how to enable the default Tailwind based PrimeOne Design implementation and the customization options.",-1),q=e("div",{class:"flex justify-content-center"},[e("iframe",{class:"w-full h-full",style:{border:"1px solid rgba(0, 0, 0, 0.1)","border-radius":"2px","min-height":"800px"},allowfullscreen:"",src:"https://stackblitz.com/edit/vitejs-vite-3gg5r4?file=src%2FApp.vue&embed=1"})],-1);function E(s,p){const d=_;return u(),v(S,null,[o(d,m(h(s.$attrs)),{default:i(()=>[O]),_:1},16),q],64)}const H=c(I,[["render",E]]),L={data(){return{code1:{basic:`import {createApp} from "vue";
import PrimeVue from "primevue/config";
import Tailwind from "primevue/passthrough/tailwind";

const app = createApp(App);

app.use(PrimeVue, { unstyled: true, pt: Tailwind });`},code2:{basic:`export default {
    ...
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
    ],
    ...
}`}}}},U=e("a",{href:"https://tailwindcss.com/docs/installation/framework-guides"},"framework guides",-1),R=e("i",null,"primevue/passthrough/tailwind",-1),G=e("i",null,"unstyled",-1),J=e("p",null,[t(" Tailwind uses PurgeCSS internally to remove unused classes, as PrimeVue components are loaded from "),e("i",null,"node_modules"),t(" the "),e("i",null,"content"),t(" property at "),e("i",null,"tailwind.config.js"),t(" needs to be aware of PrimeVue, otherwise the classes utilized in the theme will be removed as well. ")],-1),K=e("p",null,"Voilà 💚, you now have 90+ awesome Vue UI components styled with Tailwind that will work in harmony with the rest of your application. Time to customize it to bring in your own style with Tailwind.",-1);function Q(s,p,d,g,n,f){const r=x,a=w,l=_;return u(),b(l,m(h(s.$attrs)),{default:i(()=>[e("p",null,[t(" This section assumes that Tailwind is already available in your application, if not visit the Tailwind CSS "),U,t(" like Vite or Nuxt for the installation. The built-in default theme is basically a "),o(r,{to:"/passthrough"},{default:i(()=>[t("global pass through")]),_:1}),t(" preset that needs to be imported from "),R,t(" path and then defined during setup. Since the theme is exclusive to unstyled mode, the "),G,t(" setting is required in addition. ")]),o(a,{code:n.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),J,o(a,{code:n.code2,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),K]),_:1},16)}const W=c(L,[["render",Q]]),X={data(){return{docs:[{id:"setup",label:"Setup",component:W},{id:"customization",label:"Customization",component:M},{id:"example",label:"Example",component:H}]}}},Y={class:"doc"},Z={class:"doc-main"},ee={class:"doc-intro"},te=e("h1",null,"Tailwind CSS",-1),oe=e("b",null,"built-in Tailwind theme",-1);function ne(s,p,d,g,n,f){const r=D,a=z,l=P,y=x,T=C,k=V;return u(),v("div",null,[o(l,null,{default:i(()=>[o(r,null,{default:i(()=>[t("Tailwind - PrimeVue")]),_:1}),o(a,{name:"description",content:"Tailwind UI Components for Vue"})]),_:1}),e("div",Y,[e("div",Z,[e("div",ee,[te,e("p",null,[t(" The exclusive Tailwind integration of PrimeVue is a great choice for developers who want the flexibility of Tailwind with the convenience of a UI Component library. Tailwind simply fits perfectly to the unstyled mode of PrimeVue to implement design systems. A "),oe,t(" based on "),o(y,{to:"/uikit",class:"text-primary hover:underline font-semibold"},{default:i(()=>[t("PrimeOne Design")]),_:1}),t(" is even available to get started in no time. In the upcoming iterations, PrimeVue will provide more presets to implement various design systems. ")])]),o(T,{docs:n.docs},null,8,["docs"])]),o(k,{docs:n.docs},null,8,["docs"])])])}const re=c(X,[["render",ne]]);export{re as default};
