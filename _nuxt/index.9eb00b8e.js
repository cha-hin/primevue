import{_ as c,o as d,e as S,w as a,n as m,g as h,b as e,f as t,h as p,c as g,a as o,F as v,p as y,j as w,A as T,s as k,u as P,v as B,H as D,k as V,l as z,T as I,M as j}from"./entry.68beb385.js";import{_ as A}from"./PrimeVueNuxtLink.f51d0c80.js";const q={},F=e("p",{class:"line-height-3 bg-indigo-600 text-white p-3 text-lg",style:{"border-radius":"10px"}},[e("strong",null,"Note"),t(": In upcoming versions, theming architecture will be redesigned to utilize CSS variables instead of SCSS variables in a backward compatible way for a dynamic approach. ")],-1),N=e("p",null," PrimeVue is a design agnostic library so unlike other UI libraries it does not enforce a certain styling such as material or bootstrap. In order to achieve this, styling has been separated into two parts, core and theme. The core resides inside PrimeVue to implement the structure of the components such as positioning whereas theme brings the colors and spacing. ",-1),U=e("img",{alt:"Architecture",src:"https://primefaces.org/cdn/primevue/images/architecture.jpg",class:"w-full"},null,-1);function E(s,u){const l=p;return d(),S(l,m(h(s.$attrs)),{default:a(()=>[F,N,U]),_:1},16)}const M=c(q,[["render",E]]),H={data(){return{code:{basic:`primevue/resources/themes/bootstrap4-light-blue/theme.css
primevue/resources/themes/bootstrap4-light-purple/theme.css
primevue/resources/themes/bootstrap4-dark-blue/theme.css
primevue/resources/themes/bootstrap4-dark-purple/theme.css
primevue/resources/themes/md-light-indigo/theme.css
primevue/resources/themes/md-light-deeppurple/theme.css
primevue/resources/themes/md-dark-indigo/theme.css
primevue/resources/themes/md-dark-deeppurple/theme.css
primevue/resources/themes/mdc-light-indigo/theme.css
primevue/resources/themes/mdc-light-deeppurple/theme.css
primevue/resources/themes/mdc-dark-indigo/theme.css
primevue/resources/themes/mdc-dark-deeppurple/theme.css
primevue/resources/themes/fluent-light/theme.css
primevue/resources/themes/lara-light-blue/theme.css
primevue/resources/themes/lara-light-indigo/theme.css
primevue/resources/themes/lara-light-purple/theme.css
primevue/resources/themes/lara-light-teal/theme.css
primevue/resources/themes/lara-dark-blue/theme.css
primevue/resources/themes/lara-dark-indigo/theme.css
primevue/resources/themes/lara-dark-purple/theme.css
primevue/resources/themes/lara-dark-teal/theme.css
primevue/resources/themes/soho-light/theme.css
primevue/resources/themes/soho-dark/theme.css
primevue/resources/themes/viva-light/theme.css
primevue/resources/themes/viva-dark/theme.css
primevue/resources/themes/mira/theme.css
primevue/resources/themes/nano/theme.css
primevue/resources/themes/saga-blue/theme.css
primevue/resources/themes/saga-green/theme.css
primevue/resources/themes/saga-orange/theme.css
primevue/resources/themes/saga-purple/theme.css
primevue/resources/themes/vela-blue/theme.css
primevue/resources/themes/vela-green/theme.css
primevue/resources/themes/vela-orange/theme.css
primevue/resources/themes/vela-purple/theme.css
primevue/resources/themes/arya-blue/theme.css
primevue/resources/themes/arya-green/theme.css
primevue/resources/themes/arya-orange/theme.css
primevue/resources/themes/arya-purple/theme.css`}}}},L=e("p",null,[t(" PrimeVue ships with various free themes to choose from. The list below states all the available themes in the npm distribution with import paths. For a live preview, use the configurator "),e("span",{class:"border-round inline-flex border-1 w-2rem h-2rem p-0 align-items-center justify-content-center bg-primary"},[e("span",{class:"pi pi-cog"})]),t(" at the topbar to switch themes. ")],-1),R={class:"h-20rem overflow-auto"};function O(s,u,l,_,i,f){const r=p,n=y;return d(),g(v,null,[o(r,m(h(s.$attrs)),{default:a(()=>[L]),_:1},16),e("div",R,[o(n,{code:i.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:"",codeClassName:"h-20rem overflow-auto"},null,8,["code"])])],64)}const Z=c(H,[["render",O]]),W="_myinput_1f48w_2",Y={myinput:W},G={data(){return{code1:{basic:`<style module>
.myinput {
    border-radius: 2rem;
    padding: 1rem 2rem;
    border-width: 2px;
}
</style>
        `},code2:{basic:`<template>
    <InputText :class="$style.myinput" placeholder="Search" />
</template>
        `}}}},J=e("p",null,[e("a",{href:"https://github.com/css-modules/css-modules"},"CSS modules"),t(" are supported by enabling the "),e("i",null,"module"),t(" property on a style element within your component and using the "),e("i",null,"$style"),t(" keyword to apply classes to a PrimeVue component. ")],-1),K={class:"card flex justify-content-center"};function Q(s,u,l,_,i,f){const r=p,n=w("InputText"),b=y;return d(),g(v,null,[o(r,m(h(s.$attrs)),{default:a(()=>[J]),_:1},16),e("div",K,[o(n,{class:T(s.$style.myinput),placeholder:"Search"},null,8,["class"])]),o(b,{code:i.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),o(b,{code:i.code2,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const X={$style:Y},ee=c(G,[["render",Q],["__cssModules",X]]),te={data(){return{code1:{basic:`
sass --update themes/mytheme/theme.scss:themes/mytheme/theme.css
        `},code2:{basic:`import './assets/theme.css';
        `}}}},oe=e("p",null,[t(" Themes are created with SASS using the "),e("i",null,"primevue-sass-theme"),t(" project available at "),e("a",{href:"http://github.com/primefaces/primevue-sass-theme"},"github"),t(". This repository contains all the scss files for the components and the variables of the built-in themes so that you may customize an existing theme or create your own. The scss variables used in a theme are available at the "),e("a",{href:"https://www.primefaces.org/designer/api/primevue/3.9.0"},"SASS API"),t(" documentation. ")],-1),se=e("p",null," There are 3 alternatives to create your own theme. First option is using the Visual Editor, second one is compiling a theme with command line sass and final alternative is embedding scss files within your project to let your build environment do the compilation. In all cases, the generated theme file should be imported to your project. We've created a video tutorial that demonstrates all three options. ",-1),ie=e("div",{class:"video-container"},[e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/iZp_l0Yl3Zw",frameborder:"0",allowfullscreen:""})],-1),ne=e("h3",null,"Visual Editor",-1),re=e("p",null,[e("a",{href:"https://designer.primevue.org"},"Visual Editor"),t(" is an easy way to quickly customize an existing theme without dealing with the details of the SASS API. The editor allows changing common settings like primary color for built-in themes. Once you have completed the design, click the download button to access the generated "),e("i",null,"theme.css"),t(" file and import it to your project as an asset. In near future, an advanced UI Designer will be available with the ability to edit all variables and components where you'll also be able to save your themes when accessed with an account. ")],-1),ae=e("h3",null,"Theme SCSS",-1),le=e("p",null,[t(" The theme scss is available as open source at "),e("a",{href:"http://github.com/primefaces/primevue-sass-theme"},"primevue-sass-theme"),t(" repository. The "),e("i",null,"theme-base"),t(" folder contains the theming structure of the components, themes under "),e("i",null,"themes"),t(" folder import the base and define the SCSS variables. The "),e("i",null,"themes"),t(" folder also contains all the built-in themes so you can customize their code as well. ")],-1),ce=e("p",null,[t(" To create your own theme, "),e("a",{href:"https://github.com/primefaces/primevue-sass-theme/releases"},"download"),t(" the release matching your PrimeVue version and access the "),e("i",null,"themes/mytheme"),t(" folder. The sass variables to customize are available under the "),e("i",null,"variables"),t(" folder. The "),e("i",null,"_fonts"),t(" file can be used to define a custom font for your project whereas the optional "),e("i",null,"_extensions"),t(" file is provided to add overrides to the components designs. The "),e("i",null,"theme.scss"),t(" file imports the theme files along with the "),e("i",null,"theme-base"),t(" folder at the root to combine everything together. Next step would be compilation of the scss that can either be command line or within your project. ")],-1),de=e("h3",null,"Compile SCSS Manually",-1),ue=e("p",null,[t("Once your theme is ready run the following command to compile it. Note that "),e("a",{href:"https://www.npmjs.com/package/sass"},"sass"),t(" command should be available in your terminal.")],-1),me=e("p",null,[t(" Then copy and import the theme.css file in your application. For example, in a Vite based template like "),e("a",{href:"https://github.com/vuejs/create-vue"},"create-vue"),t(", you may place theme.css under assets folder and then import it an "),e("i",null,"main.js"),t(". ")],-1),he=e("h3",null,"Build Time Compilation",-1),pe=e("p",null,[t(" This approach eliminates the manual compilation by delegating it to your build environment that has the ability to compile SCSS. Copy the "),e("i",null,"theme-base"),t(" folder along with "),e("i",null,"themes/mytheme"),t(" folder to your application where assets reside. At a suitable location like "),e("i",null,"main.js"),t(" or "),e("i",null,"App.vue"),t(", import the "),e("i",null,"theme.scss"),t(" from "),e("i",null,"assets/themes/mytheme"),t(". That would be it, during build time, your project will compile the sass and import the theme. Any changes to your theme will be reflected instantly. ")],-1);function _e(s,u,l,_,i,f){const r=y,n=p;return d(),S(n,m(h(s.$attrs)),{default:a(()=>[oe,se,ie,ne,re,ae,le,ce,de,ue,o(r,{code:i.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),me,o(r,{code:i.code2,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),he,pe]),_:1},16)}const be=c(te,[["render",_e]]),ge={data(){return{code:{basic:`<div class="flex flex-column md:flex-row md:justify-content-between row-gap-3">
    <Button type="button" label="Button 1"></Button>
    <Button type="button" label="Button 2" severity="secondary"></Button>
    <Button type="button" label="Button 3" severity="help"></Button>
</div>`}}}},fe=e("p",null,[e("a",{href:"https://primeflex.org/"},"PrimeFlex"),t(" is a lightweight responsive CSS utility library to accompany Prime UI libraries and static webpages as well. PrimeVue can be used with any CSS utility library like bootstrap and tailwind however PrimeFlex has benefits like integration with PrimeVue themes using CSS variables so that colors classes e.g. "),e("i",null,"bg-blue-500"),t(" receive the color code from the PrimeVue theme being used. PrimeVue follows the CSS utility approach of PrimeFlex and currently does not provide an extended style property like "),e("i",null,"sx"),t(". Same approach is also utilized in "),e("a",{href:"https://blocks.primevue.org"},"PrimeBlocks for PrimeVue"),t(" project as well. ")],-1),ve=e("p",null,"Here is an example to demonstrate how to align 3 buttons horizontally on bigger screens and display them as stacked on smaller ones.",-1),ye={class:"card flex flex-column md:flex-row md:justify-content-between row-gap-3"};function Se(s,u,l,_,i,f){const r=p,n=w("Button"),b=y;return d(),g(v,null,[o(r,m(h(s.$attrs)),{default:a(()=>[fe,ve]),_:1},16),e("div",ye,[o(n,{type:"button",label:"Button 1"}),o(n,{type:"button",label:"Button 2",severity:"secondary"}),o(n,{type:"button",label:"Button 3",severity:"help"})]),o(b,{code:i.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const we=c(ge,[["render",Se]]),xe={data(){return{code:{basic:`html {
    font-size: 14px;
}`}}}},Ce=e("p",null,[t(" PrimeVue utilizes "),e("i",null,"rem"),t(" units to make sure the components blend in with the rest of your UI perfectly. This also enables scaling, for example changing the size of the components is easy as configuring the font size of your document. Code below sets the scale of the components based on "),e("i",null,"16px"),t(". If you require bigger or smaller components, just change this variable and components will scale accordingly. ")],-1);function $e(s,u,l,_,i,f){const r=p,n=y;return d(),g(v,null,[o(r,m(h(s.$attrs)),{default:a(()=>[Ce]),_:1},16),o(n,{code:i.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Te=c(xe,[["render",$e]]);const ke={data(){return{code1:{basic:`<style scoped>
:deep(.p-panel .p-panel-header) {
    background-color: var(--teal-500);
    border-color: var(--teal-500);
    color: #ffffff;
}

:deep(.p-panel .p-panel-content) {
    border-color: var(--teal-500);
}
</style>
        `},code2:{basic:`<template>
    <Panel header="Scoped Panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Panel>
</template>`}}}},x=s=>(k("data-v-1a795772"),s=s(),P(),s),Pe=x(()=>e("p",null,[t("Scoped CSS allows overriding the styles of a particular PrimeVue component using "),e("i",null,"scoped"),t(" SFC style and "),e("i",null,":deep"),t(".")],-1)),Be={class:"card"},De=x(()=>e("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1));function Ve(s,u,l,_,i,f){const r=p,n=w("Panel"),b=y;return d(),g(v,null,[o(r,m(h(s.$attrs)),{default:a(()=>[Pe]),_:1},16),e("div",Be,[o(n,{header:"Scoped Panel"},{default:a(()=>[De]),_:1})]),o(b,{code:i.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),o(b,{code:i.code2,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ze=c(ke,[["render",Ve],["__scopeId","data-v-1a795772"]]),Ie={},je=e("p",null,"In addition to PrimeFlex, PrimeVue has a couple of css utility classes on its own as well.",-1),Ae=B('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>p-component</td><td>Applies component theming such as font-family and font-size to an element.</td></tr><tr><td>p-fluid</td><td>Applies 100% width to all descendant components.</td></tr><tr><td>p-disabled</td><td>Applies an opacity to display as disabled.</td></tr><tr><td>p-sr-only</td><td>Element becomes visually hidden however accessibility is still available.</td></tr><tr><td>p-reset</td><td>Resets the browsers defaults.</td></tr><tr><td>p-link</td><td>Renders a button as a link.</td></tr><tr><td>p-error</td><td>Indicates an error text.</td></tr><tr><td>p-invalid</td><td>Applies the invalid style to a text or a form field.</td></tr></tbody></table></div>',1);function qe(s,u){const l=p;return d(),g(v,null,[o(l,m(h(s.$attrs)),{default:a(()=>[je]),_:1},16),Ae],64)}const Fe=c(Ie,[["render",qe]]),Ne={};function Ue(s,u){const l=A,_=p;return d(),S(_,m(h(s.$attrs)),{default:a(()=>[e("p",null,[t("Each PrimeVue theme exports numerous CSS variables, refer to "),o(l,{to:"/colors"},{default:a(()=>[t("Colors")]),_:1}),t(" page for more details.")])]),_:1},16)}const Ee=c(Ne,[["render",Ue]]),Me={data(){return{code1:{basic:`
primevue.changeTheme(currentTheme: string, newTheme: string, linkElementId: string, callback: Function)
        `},code2:{basic:`
// Options API
this.$primevue.changeTheme('md-dark-indigo', 'md-light-indigo', 'theme-link', () => {});
        `},code3:{basic:`
// Composition API
import { usePrimeVue } from 'primevue/config';

const PrimeVue = usePrimeVue();
PrimeVue.changeTheme('md-dark-indigo', 'md-light-indigo', 'theme-link', () => {});
        `},code4:{basic:`<link id="theme-link" rel="stylesheet" href="/themes/lara-light-blue/theme.css">
        `},code5:{basic:`
const baseUrl = '/';

export default defineNuxtConfig({
    app: {
        baseURL: baseUrl,
        head: {
            link: [
                {
                    id: 'theme-link',
                    rel: 'stylesheet',
                    href: baseUrl + 'themes/lara-light-blue/theme.css'
                }
            ],
                `}}}},He=e("p",{class:"line-height-3 bg-indigo-600 text-white p-3 text-lg",style:{"border-radius":"10px"}}," Solution below works however there is room for improvement. The upcoming styling api will greatly improve dynamic theme switching ability, eliminates the prerequisites with the introduction of CSS variables and dynamic imports. ",-1),Le=e("p",null,[t(" Themes can be dynamically changed using the "),e("i",null,"PrimeVue.changeTheme"),t(" function. For this feature to work, there are two prerequisites. To begin with, the themes should be publicly available under the "),e("i",null,"public"),t(" folder in your project by copying them from PrimeVue "),e("i",null,"resources/themes"),t(" folder. Second part is making the theme.css accessible via a link element so that the id of the link can be provided as the 3rd parameter to the "),e("i",null,"changeTheme"),t(" function. ")],-1),Re=e("div",{class:"doc-section-description"},[e("p",null,[t("In a Vite based project like "),e("a",{href:"https://github.com/vuejs/create-vue"},"create-vue"),t(", the link can be placed at index.html.")])],-1),Oe=e("div",{class:"doc-section-description"},[e("p",null,[e("a",{href:"https://nuxtjs.org/"},"Nuxt"),t(" applications can configure the link element using "),e("i",null,"nuxt.config.js"),t(".")])],-1);function Ze(s,u,l,_,i,f){const r=p,n=y;return d(),g(v,null,[o(r,m(h(s.$attrs)),{default:a(()=>[He,Le]),_:1},16),o(n,{code:i.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),o(n,{code:i.code2,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),o(n,{code:i.code3,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Re,o(n,{code:i.code4,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Oe,o(n,{code:i.code5,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const We=c(Me,[["render",Ze]]),Ye={data(){return{docs:[{id:"architecture",label:"Architecture",component:M},{id:"builtinthemes",label:"Built-in Themes",component:Z},{id:"switchthemes",label:"Switch Themes",component:We},{id:"customtheme",label:"Custom Theme",component:be},{id:"scopedcss",label:"Scoped CSS",component:ze},{id:"cssmodules",label:"CSS Modules",component:ee},{id:"scale",label:"Scale",component:Te},{id:"primeflex",label:"PrimeFlex",component:we},{id:"utils",label:"Utils",component:Fe},{id:"cssvariables",label:"CSS Variables",component:Ee}]}}},Ge={class:"doc"},Je={class:"doc-main"},Ke=e("div",{class:"doc-intro"},[e("h1",null,"Theming"),e("p",null,"Choose from a variety of themes or develop your own theme easily.")],-1);function Qe(s,u,l,_,i,f){const r=I,n=j,b=D,C=V,$=z;return d(),g("div",null,[o(b,null,{default:a(()=>[o(r,null,{default:a(()=>[t("Theming - PrimeVue")]),_:1}),o(n,{name:"description",content:"Choose from a variety of themes or develop your own theme easily."})]),_:1}),e("div",Ge,[e("div",Je,[Ke,o(C,{docs:i.docs},null,8,["docs"])]),o($,{docs:i.docs},null,8,["docs"])])])}const tt=c(Ye,[["render",Qe]]);export{tt as default};
