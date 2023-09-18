import{_ as l,o as s,e as x,w as _,m as C,b as e,f as i,h as m,c as d,a as n,n as b,g,F as v,C as T,p as y,r as w,i as $,s as k,u as P,t as j,D as R,k as D,l as S,v as V,x as A}from"./entry.68beb385.js";import{g as B}from"./PTHelper.11558b27.js";import{_ as I}from"./PrimeVueNuxtLink.f51d0c80.js";const N={},z=e("h3",null,"Screen Reader",-1),O=e("p",null,[i("Ripple element has the "),e("i",null,"aria-hidden"),i(" attribute as true so that it gets ignored by the screen readers.")],-1),G=e("h3",null,"Keyboard Support",-1),L=e("p",null,"Component does not include any interactive elements.",-1);function E(t,a){const p=m;return s(),x(p,C({id:"accessibility",label:"Accessibility"},t.$attrs),{default:_(()=>[z,O,G,L]),_:1},16)}const F=l(N,[["render",E]]),q={data(){return{code:{basic:`
mounted() {
    this.$primevue.config.ripple = true;
}`,options:`
mounted() {
    this.$primevue.config.ripple = true;
}`,composition:`
import { usePrimeVue } from 'primevue/config';

const PrimeVue = usePrimeVue();

PrimeVue.config.ripple = true;`}}}};function H(t,a,p,f,o,h){const c=T,r=m,u=y;return s(),d(v,null,[n(r,b(g(t.$attrs)),{default:_(()=>[e("p",null,[i("To start with, Ripple needs to be enabled globally. See the "),n(c,{to:"/configuration/#ripple"},{default:_(()=>[i("Configuration API")]),_:1}),i(" for details.")])]),_:1},16),n(u,{code:o.code,importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const K=l(q,[["render",H]]);const U={data(){return{code:{basic:`<div v-ripple class="p-ripple card shadow-2 styled-box-green">Green</div>
<div v-ripple class="p-ripple card shadow-2 styled-box-orange">Orange</div>
<div v-ripple class="p-ripple card shadow-2 styled-box-purple">Purple</div>`,options:`<template>
    <div class="flex justify-content-center align-items-center">
        <div v-ripple class="p-ripple card shadow-2 styled-box-green">Green</div>
        <div v-ripple class="p-ripple card shadow-2 styled-box-orange">Orange</div>
        <div v-ripple class="p-ripple card shadow-2 styled-box-purple">Purple</div>
    </div>
</template>

<script>
<\/script>

<style scoped>
::v-deep(.styled-box-green .p-ink) {
    background: rgba(75, 175, 80, 0.3);
}
::v-deep(.styled-box-orange .p-ink) {
    background: rgba(255, 193, 6, 0.3);
}

::v-deep(.styled-box-purple .p-ink) {
    background: rgba(156, 39, 176, 0.3);
}
</style>`,composition:`<template>
    <div class="flex justify-content-center align-items-center">
        <div v-ripple class="p-ripple card shadow-2 styled-box-green">Green</div>
        <div v-ripple class="p-ripple card shadow-2 styled-box-orange">Orange</div>
        <div v-ripple class="p-ripple card shadow-2 styled-box-purple">Purple</div>
    </div>
</template>

<script setup>
<\/script>

<style scoped>
::v-deep(.styled-box-green .p-ink) {
    background: rgba(75, 175, 80, 0.3);
}
::v-deep(.styled-box-orange .p-ink) {
    background: rgba(255, 193, 6, 0.3);
}

::v-deep(.styled-box-purple .p-ink) {
    background: rgba(156, 39, 176, 0.3);
}
</style>`}}}},W=t=>(k("data-v-c20a5543"),t=t(),P(),t),J=W(()=>e("p",null,[i("Default styling of the animation adds a shade of white. This can easily be customized using css that changes the color of "),e("i",null,"p-ink"),i(" element.")],-1)),M={class:"card flex justify-content-center align-items-center gap-2"},Q={class:"p-ripple card shadow-2 styled-box-green"},X={class:"p-ripple card shadow-2 styled-box-orange"},Y={class:"p-ripple card shadow-2 styled-box-purple"};function Z(t,a,p,f,o,h){const c=m,r=y,u=w("ripple");return s(),d(v,null,[n(c,b(g(t.$attrs)),{default:_(()=>[J]),_:1},16),e("div",M,[$((s(),d("div",Q,[i("Green")])),[[u]]),$((s(),d("div",X,[i("Orange")])),[[u]]),$((s(),d("div",Y,[i("Purple")])),[[u]])]),n(r,{code:o.code},null,8,["code"])],64)}const ee=l(U,[["render",Z],["__scopeId","data-v-c20a5543"]]),te={data(){return{code:{basic:'<div v-ripple class="p-ripple bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold">Default</div>',options:`<template>
    <div class="card card-container flex justify-content-center align-items-center">
        <div v-ripple class="p-ripple bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold">Default</div>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card card-container flex justify-content-center align-items-center">
        <div v-ripple class="p-ripple bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold">Default</div>
    </div>
</template>

<script setup>
<\/script>`}}}},oe=e("p",null,[i("Ripple is enabled by adding add "),e("i",null,"p-ripple"),i(" class to the target and attach the directive with the v- prefix.")],-1),ne={class:"card flex justify-content-center align-items-center"},ie={class:"p-ripple bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold"};function ce(t,a,p,f,o,h){const c=m,r=y,u=w("ripple");return s(),d(v,null,[n(c,b(g(t.$attrs)),{default:_(()=>[oe]),_:1},16),e("div",ne,[$((s(),d("div",ie,[i("Default")])),[[u]])]),n(r,{code:o.code},null,8,["code"])],64)}const se=l(te,[["render",ce]]),re={data(){return{code1:{basic:`import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue, { ripple: true });`},code2:{basic:`import Ripple from 'primevue/ripple';

app.directive('ripple', Ripple);`}}}},pe=e("p",null,"Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at your app's entry file (e.g. main.js) during the PrimeVue setup.",-1),de=e("p",null,[i("Ripple describes how to use it with your own components and standard elements that needs to be imported and configured with a name of your choice. Global configuration is done with the "),e("i",null,"app.directive"),i(" function.")],-1);function le(t,a,p,f,o,h){const c=y,r=m;return s(),x(r,b(g(t.$attrs)),{default:_(()=>[pe,n(c,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),de,n(c,{code:o.code2,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])]),_:1},16)}const ae=l(re,[["render",le]]),ue={data(){return{code:{basic:`<div
    v-ripple="{
        pt: {
            root: 'bg-yellow-400'
        }
    }"
    class="p-ripple bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold"
>
    Default
</div>`,options:`<template>
    <div class="card card-container flex justify-content-center align-items-center">
        <div
            v-ripple="{
                pt: {
                    root: 'bg-yellow-400'
                }
            }"
            class="p-ripple bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold"
        >
            Default
        </div>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card card-container flex justify-content-center align-items-center">
        <div
            v-ripple="{
                pt: {
                    root: 'bg-yellow-400'
                }
            }"
            class="p-ripple bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold"
        >
            Default
        </div>
    </div>
</template>

<script setup>
<\/script>`}}}},_e={class:"card flex justify-content-center align-items-center"},me={class:"p-ripple bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold"};function fe(t,a,p,f,o,h){const c=m,r=y,u=w("ripple");return s(),d(v,null,[n(c,b(g(t.$attrs)),null,16),e("div",_e,[$((s(),d("div",me,[i(" Default ")])),[[u,{pt:{root:"bg-yellow-400"}}]])]),n(r,{code:o.code},null,8,["code"])],64)}const he=l(ue,[["render",fe]]),be={},ge=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/wireframe-placeholder.jpg"})],-1);function ve(t,a){const p=m;return s(),d(v,null,[n(p,b(g(t.$attrs)),{default:_(()=>[e("p",null,j(t.$attrs.description),1)]),_:1},16),ge],64)}const ye=l(be,[["render",ve]]),$e={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ye},{id:"pt.doc.steps",label:"Ripple PT Options",component:R,data:B("Ripple")},{id:"pt.demo",label:"Demo",component:he}]}}},xe={class:"doc-main"},we=e("div",{class:"doc-intro"},[e("h1",null,"Ripple Pass Through")],-1);function De(t,a,p,f,o,h){const c=D,r=S;return s(),d(v,null,[e("div",xe,[we,n(c,{docs:o.docs},null,8,["docs"])]),n(r,{docs:o.docs},null,8,["docs"])],64)}const Se=l($e,[["render",De]]),Ce={},Te=e("p",null,"List of class names used in the styled mode.",-1),ke=V('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-ripple</td><td>Host element.</td></tr><tr><td>p-ink</td><td>Ripple element.</td></tr><tr><td>p-ink-active</td><td>Ripple element during animating.</td></tr></tbody></table></div>',1);function Pe(t,a){const p=m;return s(),d(v,null,[n(p,b(g(t.$attrs)),{default:_(()=>[Te]),_:1},16),ke],64)}const je=l(Ce,[["render",Pe]]),Re={data(){return{code1:{basic:`
export default {
    global: {
        css: \`
        *[data-pd-ripple="true"]{
            overflow: hidden;
            position: relative;
        }
        span[data-p-ink-active="true"]{
            animation: ripple 0.4s linear;
        }
        @keyframes ripple {
            100% {
                opacity: 0;
                transform: scale(2.5);
            }
        }
    \`
    },
    directives: {
        ripple: {
            root: {
                class: ['block absolute bg-white/50 rounded-full pointer-events-none'],
                style: 'transform: scale(0)'
            }
        }
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Button label="Submit" />
    </div>
</template>

<script setup>
<\/script>`}}}},Ve=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ae(t,a,p,f,o,h){const c=I,r=y,u=m;return s(),x(u,b(g(t.$attrs)),{default:_(()=>[e("p",null,[i(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(c,{to:"/tailwind"},{default:_(()=>[i("Tailwind Customization")]),_:1}),i(" section for an example. ")]),n(r,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ve,n(r,{code:o.code2,embedded:""},null,8,["code"])]),_:1},16)}const Be=l(Re,[["render",Ae]]),Ie={data(){return{docs:[{id:"theming.styled",label:"Styled",component:je},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Be}]}]}}},Ne={class:"doc-main"},ze=e("div",{class:"doc-intro"},[e("h1",null,"Ripple Theming")],-1);function Oe(t,a,p,f,o,h){const c=D,r=S;return s(),d(v,null,[e("div",Ne,[ze,n(c,{docs:o.docs},null,8,["docs"])]),n(r,{docs:o.docs},null,8,["docs"])],64)}const Ge=l(Ie,[["render",Oe]]),Le={data(){return{docs:[{id:"import",label:"Import",component:ae},{id:"configuration",label:"Configuration",component:K},{id:"default",label:"Default",component:se},{id:"custom",label:"Custom",component:ee},{id:"accessibility",label:"Accessibility",component:F}],ptComponent:Se,themingDoc:Ge}}};function Ee(t,a,p,f,o,h){const c=A;return s(),x(c,{title:"Vue Ripple Component",header:"Ripple",description:"Ripple directive adds ripple effect to the host element.",componentDocs:o.docs,apiDocs:["Ripple"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ke=l(Le,[["render",Ee]]);export{Ke as default};
