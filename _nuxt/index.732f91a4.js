import{_ as d,o as u,c as _,a as t,w as n,n as m,g as f,F as b,b as e,h,e as C,f as o,C as $,p as y,H as w,k as U,l as T,T as V,M as j}from"./entry.68beb385.js";const k={},D=e("p",null,"An example to demonstrate how to use the default preset of UnoCSS to style the panel component via a global pass through configuration.",-1),B=e("div",{class:"flex justify-content-center"},[e("iframe",{class:"w-full h-full",style:{border:"1px solid rgba(0, 0, 0, 0.1)","border-radius":"2px","min-height":"800px"},allowfullscreen:"",src:"https://stackblitz.com/edit/vitejs-vite-cowgnp?file=src%2FApp.vue&embed=1"})],-1);function N(s,p){const c=h;return u(),_(b,null,[t(c,m(f(s.$attrs)),{default:n(()=>[D]),_:1},16),B],64)}const P=d(k,[["render",N]]),A={data(){return{code1:{basic:`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS({
    presets: [
      presetUno(),
      presetAttributify()
    ],
    include: ["./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"]
  })]
})`}}}},F=e("a",{href:"https://unocss.dev/integrations/"},"documentation",-1),z=e("p",null,[o(" UnoCSS adds the utilities on demand so it needs to be aware of PrimeVue components path otherwise the classes used will not be included in the page, sample below configures UnoCSS with Vite. For other environments like Nuxt, visit the "),e("a",{href:"https://unocss.dev/integrations/"},"integrations documentation"),o(". ")],-1);function E(s,p,c,S,i,v){const a=$,r=y,l=h;return u(),C(l,m(f(s.$attrs)),{default:n(()=>[e("p",null,[o(" To get started, UnoCSS should already be available in your application, if not visit the UnoCSS "),F,o(" for the installation in various environments. Theming of PrimeVue components with UnoCSS is mainly achieved with unstyled mode either using global setting or for a particular component only. Visit the "),t(a,{to:"/unstyled"},{default:n(()=>[o("unstyled")]),_:1}),o(" mode documentation for more information. ")]),z,t(r,{code:i.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])]),_:1},16)}const H=d(A,[["render",E]]),M={data(){return{docs:[{id:"setup",label:"Setup",component:H},{id:"example",label:"Example",component:P}]}}},L={class:"doc"},R={class:"doc-main"},q=e("div",{class:"doc-intro"},[e("h1",null,"UnoCSS"),e("p",null,[e("a",{href:"https://unocss.dev",class:"font-semibold hover:underline text-primary"},"UnoCSS"),o(" is an instant atomic CSS engine designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets. ")])],-1);function G(s,p,c,S,i,v){const a=V,r=j,l=w,x=U,g=T;return u(),_("div",null,[t(l,null,{default:n(()=>[t(a,null,{default:n(()=>[o("UnoCSS - PrimeVue")]),_:1}),t(r,{name:"description",content:"Styling PrimeVue with Boostrap."})]),_:1}),e("div",L,[e("div",R,[q,t(x,{docs:i.docs},null,8,["docs"])]),t(g,{docs:i.docs},null,8,["docs"])])])}const J=d(M,[["render",G]]);export{J as default};
