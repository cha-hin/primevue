import{_ as d,o as c,e as q,w as r,m as T,b as e,f as t,h as m,j as $,c as b,a as o,n as h,g as f,F as v,p as x,t as F,D as w,k as y,l as D,x as C}from"./entry.68beb385.js";import{g as S}from"./PTHelper.11558b27.js";import{_ as k}from"./PrimeVueNuxtLink.f51d0c80.js";const U={},L=e("h3",null,"Screen Reader",-1),E=e("p",null,[t(" Fieldset component uses the semantic "),e("i",null,"fieldset"),t(" element. When toggleable option is enabled, a clickable element with "),e("i",null,"button"),t(" role is included inside the "),e("i",null,"legend"),t(" element, this button has "),e("i",null,"aria-controls"),t(" to define the id of the content section along with "),e("i",null,"aria-expanded"),t(" for the visibility state. The value to read the button defaults to the value of the "),e("i",null,"legend"),t(" property and can be customized by defining an "),e("i",null,"aria-label"),t(" or "),e("i",null,"aria-labelledby"),t(" via the "),e("i",null,"toggleButtonProps"),t(" property. ")],-1),H=e("p",null,[t("The content uses "),e("i",null,"region"),t(", defines an id that matches the "),e("i",null,"aria-controls"),t(" of the content toggle button and "),e("i",null,"aria-labelledby"),t(" referring to the id of the header.")],-1),I=e("h6",null,"Content Toggle Button Keyboard Support",-1),P=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next the focusable element in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),t(" + "),e("i",null,"tab")]),e("td",null,"Moves focus to the previous the focusable element in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Toggles the visibility of the content.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the visibility of the content.")])])])],-1);function A(n,u){const s=m;return c(),q(s,T({id:"accessibility",label:"Accessibility"},n.$attrs),{default:r(()=>[L,E,H,I,P]),_:1},16)}const B=d(U,[["render",A]]),N={data(){return{code:{basic:`<Fieldset legend="Header">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>`,options:`<template>
    <div class="card">
        <Fieldset legend="Header">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Fieldset legend="Header">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>

<script setup>
<\/script>`}}}},z=e("p",null,[t("A simple Fieldset is created with a "),e("i",null,"legend"),t(" property along with the content as children.")],-1),V={class:"card"},j=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function O(n,u,s,g,i,_){const l=m,a=$("Fieldset"),p=x;return c(),b(v,null,[o(l,h(f(n.$attrs)),{default:r(()=>[z]),_:1},16),e("div",V,[o(a,{legend:"Header"},{default:r(()=>[j]),_:1})]),o(p,{code:i.code},null,8,["code"])],64)}const R=d(N,[["render",O]]),M={data(){return{code:{basic:"import Fieldset from 'primevue/fieldset';"}}}};function K(n,u,s,g,i,_){const l=m,a=x;return c(),b(v,null,[o(l,h(f(n.$attrs)),null,16),o(a,{code:i.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const W=d(M,[["render",K]]),G={data(){return{code:{basic:`<Fieldset>
    <template #legend>
        <div class="flex align-items-center text-primary">
            <span class="pi pi-user mr-2"></span>
            <span class="font-bold text-lg">User Details</span>
        </div>
    </template>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>`,options:`<template>
    <div class="card">
        <Fieldset>
            <template #legend>
                <div class="flex align-items-center text-primary">
                    <span class="pi pi-user mr-2"></span>
                    <span class="font-bold text-lg">User Details</span>
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Fieldset>
            <template #legend>
                <div class="flex align-items-center text-primary">
                    <span class="pi pi-user mr-2"></span>
                    <span class="font-bold text-lg">User Details</span>
                </div>
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>

<script setup>
<\/script>`}}}},J=e("p",null,"Legend section can also be defined with custom content instead of primitive values.",-1),Q={class:"card"},X=e("div",{class:"flex align-items-center text-primary"},[e("span",{class:"pi pi-user mr-2"}),e("span",{class:"font-bold text-lg"},"User Details")],-1),Y=e("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function Z(n,u,s,g,i,_){const l=m,a=$("Fieldset"),p=x;return c(),b(v,null,[o(l,h(f(n.$attrs)),{default:r(()=>[J]),_:1},16),e("div",Q,[o(a,null,{legend:r(()=>[X]),default:r(()=>[Y]),_:1})]),o(p,{code:i.code},null,8,["code"])],64)}const ee=d(G,[["render",Z]]),te={data(){return{code:{basic:`<Fieldset legend="Header" :toggleable="true">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>`,options:`<template>
    <div class="card">
        <Fieldset legend="Header" :toggleable="true">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Fieldset legend="Header" :toggleable="true">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>

<script setup>
<\/script>`}}}},ie=e("p",null,[t(" Content of the fieldset can be expanded and collapsed when "),e("i",null,"toggleable"),t(" option is enabled. A toggleable fieldset can either be used as a Controlled or Uncontrolled component. In controlled mode a binding to "),e("i",null,"collapsed"),t("property along with "),e("i",null,"toggle"),t(" event are needed to manage the content state. ")],-1),oe={class:"card"},ne=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function le(n,u,s,g,i,_){const l=m,a=$("Fieldset"),p=x;return c(),b(v,null,[o(l,h(f(n.$attrs)),{default:r(()=>[ie]),_:1},16),e("div",oe,[o(a,{legend:"Header",toggleable:!0},{default:r(()=>[ne]),_:1})]),o(p,{code:i.code},null,8,["code"])],64)}const ae=d(te,[["render",le]]),se={data(){return{code:{basic:`<Fieldset
    legend="Header"
    :toggleable="true"
    :pt="{
        legend: { class: 'bg-primary' },
        legendTitle: { class: 'text-white' },
        togglerIcon: { class: 'text-white' }
    }">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>`,options:`<template>
    <div class="card">
        <Fieldset
            legend="Header"
            :toggleable="true"
            :pt="{
                legend: { class: 'bg-primary' },
                legendTitle: { class: 'text-white' },
                togglerIcon: { class: 'text-white' }
            }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>`,composition:`<template>
    <div class="card">
        <Fieldset
            legend="Header"
            :toggleable="true"
            :pt="{
                legend: { class: 'bg-primary' },
                legendTitle: { class: 'text-white' },
                togglerIcon: { class: 'text-white' }
            }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>`}}}},re={class:"card"},de=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function ce(n,u,s,g,i,_){const l=m,a=$("Fieldset"),p=x;return c(),b(v,null,[o(l,h(f(n.$attrs)),null,16),e("div",re,[o(a,{legend:"Header",toggleable:!0,pt:{legend:{class:"bg-primary"},legendTitle:{class:"text-white"},togglerIcon:{class:"text-white"}}},{default:r(()=>[de]),_:1})]),o(p,{code:i.code},null,8,["code"])],64)}const ue=d(se,[["render",ce]]),pe={},me=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/fieldset.jpg"})],-1);function ge(n,u){const s=m;return c(),b(v,null,[o(s,h(f(n.$attrs)),{default:r(()=>[e("p",null,F(n.$attrs.description),1)]),_:1},16),me],64)}const _e=d(pe,[["render",ge]]),be={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:_e},{id:"pt.doc.fieldset",label:"Fieldset PT Options",component:w,data:S("Fieldset")},{id:"pt.demo",label:"Demo",component:ue}]}}},he={class:"doc-main"},fe=e("div",{class:"doc-intro"},[e("h1",null,"Fieldset Pass Through")],-1);function ve(n,u,s,g,i,_){const l=y,a=D;return c(),b(v,null,[e("div",he,[fe,o(l,{docs:i.docs},null,8,["docs"])]),o(a,{docs:i.docs},null,8,["docs"])],64)}const xe=d(be,[["render",ve]]),qe={},$e=e("p",null,"List of class names used in the styled mode.",-1),ye=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Element")])]),e("tbody",null,[e("tr",null,[e("td",null,"p-fieldset"),e("td",null,"Fieldset element.")]),e("tr",null,[e("td",null,"p-fieldset-toggleable"),e("td",null,"Toggleable fieldset element.")]),e("tr",null,[e("td",null,"p-fieldset-legend"),e("td",null,"Legend element.")]),e("tr",null,[e("td",null,"p-fieldset-content"),e("td",null,"Content element.")])])])],-1);function De(n,u){const s=m;return c(),q(s,h(f(n.$attrs)),{default:r(()=>[$e,ye]),_:1},16)}const Te=d(qe,[["render",De]]),Fe={data(){return{code1:{basic:`
export const TRANSITIONS = {
    toggleable: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40	',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    }
};

export default {
    fieldset: {
        root: {
            class: [
                'border border-gray-300 bg-white text-gray-700 rounded-md block mx-2 my-0.5 pl-4 pr-5 inline-size-min', // Borders, background, text color, spacing, and inline size.
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' //dark
            ]
        },
        legend: ({ props }) => ({
            class: [
                'border border-gray-300 text-gray-700 bg-gray-50 font-bold rounded-md',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ', //dark
                {
                    'p-0 transition-none hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': props.toggleable,
                    'p-5': !props.toggleable
                }
            ]
        }),
        toggler: ({ props }) => ({
            class: [
                'flex items-center justify-center',
                {
                    'p-5 text-gray-700 rounded-md transition-none cursor-pointer overflow-hidden relative select-none hover:text-gray-900 focus:focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:text-white/80 dark:hover:text-white/80 dark:hover:bg-gray-800/60 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                        props.toggleable
                }
            ]
        }),
        togglerIcon: 'mr-2 inline-block', // Margin and display style.
        legendTitle: 'flex items-center justify-center leading-none', // alignments, and leading style.
        content: 'p-5', // Padding.
        transition: TRANSITIONS.toggleable
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Fieldset legend="Header" :toggleable="true">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Fieldset>
    </div>
</template>

<script setup>
<\/script>`}}}},we=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ce(n,u,s,g,i,_){const l=k,a=x,p=m;return c(),q(p,h(f(n.$attrs)),{default:r(()=>[e("p",null,[t(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(l,{to:"/tailwind"},{default:r(()=>[t("Tailwind Customization")]),_:1}),t(" section for an example. ")]),o(a,{code:i.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),we,o(a,{code:i.code2,embedded:""},null,8,["code"])]),_:1},16)}const Se=d(Fe,[["render",Ce]]),ke={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Te},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Se}]}]}}},Ue={class:"doc-main"},Le=e("div",{class:"doc-intro"},[e("h1",null,"Fieldset Theming")],-1);function Ee(n,u,s,g,i,_){const l=y,a=D;return c(),b(v,null,[e("div",Ue,[Le,o(l,{docs:i.docs},null,8,["docs"])]),o(a,{docs:i.docs},null,8,["docs"])],64)}const He=d(ke,[["render",Ee]]),Ie={data(){return{docs:[{id:"import",label:"Import",component:W},{id:"basic",label:"Basic",component:R},{id:"toggleable",label:"Toggleable",component:ae},{id:"template",label:"Template",component:ee},{id:"accessibility",label:"Accessibility",component:B}],ptComponent:xe,themingDoc:He}}};function Pe(n,u,s,g,i,_){const l=C;return c(),q(l,{title:"Vue Fieldset Component",header:"Fieldset",description:"Fieldset is a grouping component with a content toggle feature.",componentDocs:i.docs,apiDocs:["Fieldset"],ptTabComponent:i.ptComponent,themingDocs:i.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ze=d(Ie,[["render",Pe]]);export{ze as default};
