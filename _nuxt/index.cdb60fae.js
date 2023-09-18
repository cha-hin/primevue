import{_ as a,o as l,e as x,w as g,a as n,m as y,b as e,f as c,p as $,h as u,j as D,c as m,n as S,g as b,F as h,s as k,u as C,t as T,D as w,k as v,l as P,v as B,x as j}from"./entry.68beb385.js";import{g as W}from"./PTHelper.11558b27.js";import{_ as V}from"./PrimeVueNuxtLink.f51d0c80.js";const N={data(){return{code:{basic:'<ProgressSpinner aria-label="Loading" />'}}}},z=e("h3",null,"Screen Reader",-1),A=e("p",null,[c("ProgressSpinner components uses "),e("i",null,"progressbar"),c(" role. Value to describe the component can be defined using "),e("i",null,"aria-labelledby"),c(" and "),e("i",null,"aria-label"),c(" props.")],-1),E=e("h3",null,"Keyboard Support",-1),F=e("p",null,"Component does not include any interactive elements.",-1);function I(t,p,i,d,o,_){const s=$,r=u;return l(),x(r,y({id:"accessibility",label:"Accessibility"},t.$attrs),{default:g(()=>[z,A,n(s,y({code:o.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},t.$attrs),null,16,["code"]),E,F]),_:1},16)}const L=a(N,[["render",I]]),O={data(){return{code:{basic:"<ProgressSpinner />",options:`<template>
    <div class="card flex justify-content-center">
        <ProgressSpinner />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <ProgressSpinner />
    </div>
</template>

<script setup>
<\/script>`}}}},R=e("p",null,"An infinite spin animation is displayed by default.",-1),q={class:"card flex justify-content-center"};function G(t,p,i,d,o,_){const s=u,r=D("ProgressSpinner"),f=$;return l(),m(h,null,[n(s,S(b(t.$attrs)),{default:g(()=>[R]),_:1},16),e("div",q,[n(r)]),n(f,{code:o.code},null,8,["code"])],64)}const K=a(O,[["render",G]]);const U={data(){return{code:{basic:`<ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
    animationDuration=".5s" aria-label="Custom ProgressSpinner" />`,options:`<template>
    <div class="card flex justify-content-center">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    </div>
</template>

<script setup>
<\/script>`}}}},H=t=>(k("data-v-558af42a"),t=t(),C(),t),J=H(()=>e("p",null,[c("ProgressSpinner can be customized with styling property like "),e("i",null,"style"),c(", "),e("i",null,"strokeWidth"),c(),e("i",null,"fill"),c(" and "),e("i",null,"animationDuration"),c(".")],-1)),M={class:"card flex justify-content-center"};function Q(t,p,i,d,o,_){const s=u,r=D("ProgressSpinner"),f=$;return l(),m(h,null,[n(s,S(b(t.$attrs)),{default:g(()=>[J]),_:1},16),e("div",M,[n(r,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})]),n(f,{code:o.code},null,8,["code"])],64)}const X=a(U,[["render",Q],["__scopeId","data-v-558af42a"]]),Y={data(){return{code:{basic:"import ProgressSpinner from 'primevue/progressspinner';"}}}};function Z(t,p,i,d,o,_){const s=u,r=$;return l(),m(h,null,[n(s,S(b(t.$attrs)),null,16),n(r,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ee=a(Y,[["render",Z]]),te={data(){return{code:{basic:`<ProgressSpinner
    :pt="{
        spinner: { style: { animationDuration: '0s' } },
        circle: { style: { stroke: '#F59E0B', strokeWidth: 3, animation: 'none' } }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <ProgressSpinner
            :pt="{
                spinner: { style: { animationDuration: '0s' } },
                circle: { style: { stroke: '#F59E0B', strokeWidth: 3, animation: 'none' } }
            }"
        />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <ProgressSpinner
            :pt="{
                spinner: { style: { animationDuration: '0s' } },
                circle: { style: { stroke: '#F59E0B', strokeWidth: 3, animation: 'none' } }
            }"
        />
    </div>
</template>

<script setup>
<\/script>`}}}},oe={class:"card flex justify-content-center"};function ne(t,p,i,d,o,_){const s=u,r=D("ProgressSpinner"),f=$;return l(),m(h,null,[n(s,y(t.$attrs,{level:2}),null,16),e("div",oe,[n(r,{pt:{spinner:{style:{animationDuration:"0s"}},circle:{style:{stroke:"#F59E0B",strokeWidth:3,animation:"none"}}}})]),n(f,{code:o.code},null,8,["code"])],64)}const se=a(te,[["render",ne]]),re={},ie=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/progressspinner.jpg"})],-1);function ce(t,p){const i=u;return l(),m(h,null,[n(i,S(b(t.$attrs)),{default:g(()=>[e("p",null,T(t.$attrs.description),1)]),_:1},16),ie],64)}const ae=a(re,[["render",ce]]),le={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ae},{id:"pt.doc.progressspinner",label:"ProgressSpinner PT Options",component:w,data:W("ProgressSpinner")},{id:"pt.demo",label:"Demo",component:se}]}}},pe={class:"doc-main"},de=e("div",{class:"doc-intro"},[e("h1",null,"ProgressSpinner Pass Through")],-1);function _e(t,p,i,d,o,_){const s=v,r=P;return l(),m(h,null,[e("div",pe,[de,n(s,{docs:o.docs},null,8,["docs"])]),n(r,{docs:o.docs},null,8,["docs"])],64)}const ue=a(le,[["render",_e]]),me={},he=e("p",null,"List of class names used in the styled mode.",-1),fe=B('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-progress-spinner</td><td>Container element.</td></tr><tr><td>p-progress-circle</td><td>SVG element.</td></tr><tr><td>p-progress-path</td><td>Circle element.</td></tr></tbody></table></div>',1);function ge(t,p){const i=u;return l(),m(h,null,[n(i,S(b(t.$attrs)),{default:g(()=>[he]),_:1},16),fe],64)}const $e=a(me,[["render",ge]]),Se={data(){return{code1:{basic:`
export default {
    global: {
        css: \`
        .progress-spinner-circle {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: 0;
            animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
            stroke-linecap: round;
        }

        @keyframes p-progress-spinner-dash{
            0% {
                stroke-dasharray: 1, 200;
                stroke-dashoffset: 0;
            }
            
            50% {
                stroke-dasharray: 89, 200;
                stroke-dashoffset: -35px;
            }
            100% {
                stroke-dasharray: 89, 200;
                stroke-dashoffset: -124px;
            }
        }
        @keyframes p-progress-spinner-color {
            100%, 0% {
                stroke: #ff5757;
            }
            40% {
                stroke: #696cff;
            }
            66% {
                stroke: #1ea97c;
            }
            80%, 90% {
                stroke: #cc8925;
            }
        }
    \`
    },
    progressspinner: {
        root: {
            class: ['relative mx-auto w-28 h-28 inline-block', 'before:block before:pt-full']
        },
        spinner: 'absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-full transform origin-center animate-spin',
        circle: 'text-red-500 progress-spinner-circle'
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-content-center">
        <ProgressSpinner />
    </div>
</template>

<script setup>
<\/script>`}}}},be=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function ye(t,p,i,d,o,_){const s=V,r=$,f=u;return l(),x(f,S(b(t.$attrs)),{default:g(()=>[e("p",null,[c(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(s,{to:"/tailwind"},{default:g(()=>[c("Tailwind Customization")]),_:1}),c(" section for an example. ")]),n(r,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),be,n(r,{code:o.code2,embedded:""},null,8,["code"])]),_:1},16)}const xe=a(Se,[["render",ye]]),De={data(){return{docs:[{id:"theming.styled",label:"Styled",component:$e},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:xe}]}]}}},ve={class:"doc-main"},Pe=e("div",{class:"doc-intro"},[e("h1",null,"ProgressSpinner Theming")],-1);function ke(t,p,i,d,o,_){const s=v,r=P;return l(),m(h,null,[e("div",ve,[Pe,n(s,{docs:o.docs},null,8,["docs"])]),n(r,{docs:o.docs},null,8,["docs"])],64)}const Ce=a(De,[["render",ke]]),Te={data(){return{docs:[{id:"import",label:"import",component:ee},{id:"basic",label:"Basic",component:K},{id:"custom",label:"Custom",component:X},{id:"accessibility",label:"Accessibility",component:L}],ptComponent:ue,themingDoc:Ce}}};function we(t,p,i,d,o,_){const s=j;return l(),x(s,{title:"Vue ProgressSpinner Component",header:"ProgressSpinner",description:"ProgressBar is a process status indicator.",componentDocs:o.docs,apiDocs:["ProgressSpinner"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ve=a(Te,[["render",we]]);export{Ve as default};
