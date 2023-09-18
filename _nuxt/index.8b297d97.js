import{_ as d,o as u,e as D,w as r,m as T,b as e,f as a,h as p,j as h,c as _,a as t,n as B,g as v,F as b,p as $,t as S,D as y,k as U,l as q,x as C}from"./entry.68beb385.js";import{g as P}from"./PTHelper.11558b27.js";import{_ as w}from"./PrimeVueNuxtLink.f51d0c80.js";const E={},L=e("h3",null,"Screen Reader",-1),N=e("p",null,[a(" BlockUI manages "),e("i",null,"aria-busy"),a(" state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes like "),e("i",null,"role"),a(" and "),e("i",null,"aria-live"),a(" can be used to define live regions. ")],-1),A=e("h3",null,"Keyboard Support",-1),V=e("p",null,"Component does not include any interactive elements.",-1);function z(n,c){const s=p;return u(),D(s,T({id:"accessibility",label:"Accessibility"},n.$attrs),{default:r(()=>[L,N,A,V]),_:1},16)}const j=d(E,[["render",z]]),F={data(){return{blocked:!1,code:{basic:`<div class="mb-3">
    <Button label="Block" @click="blocked = true" class="mr-2"></Button>
    <Button label="Unblock" @click="blocked = false"></Button>
</div>
<BlockUI :blocked="blocked">
    <Panel header="Basic">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Panel>
</BlockUI>`,options:`<template>
    <div class="card">
        <div class="mb-3">
            <Button label="Block" @click="blocked = true" class="mr-2"></Button>
            <Button label="Unblock" @click="blocked = false"></Button>
        </div>
        <BlockUI :blocked="blocked">
            <Panel header="Basic">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>
        </BlockUI>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blocked: false
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <div class="mb-3">
            <Button label="Block" @click="blocked = true" class="mr-2"></Button>
            <Button label="Unblock" @click="blocked = false"></Button>
        </div>
        <BlockUI :blocked="blocked">
            <Panel header="Basic">
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>
        </BlockUI>
    </div>
</template>

<script setup>
import { ref } from "vue";

const blocked = ref(false);
<\/script>`}}}},M=e("p",null,[a("The element to block should be placed as a child of BlockUI and "),e("i",null,"blocked"),a(" property is required to control the state.")],-1),O={class:"card"},R={class:"mb-3"},K=e("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function W(n,c,s,k,o,m){const l=p,i=h("Button"),f=h("Panel"),g=h("BlockUI"),x=$;return u(),_(b,null,[t(l,B(v(n.$attrs)),{default:r(()=>[M]),_:1},16),e("div",O,[e("div",R,[t(i,{label:"Block",onClick:c[0]||(c[0]=I=>o.blocked=!0),class:"mr-2"}),t(i,{label:"Unblock",onClick:c[1]||(c[1]=I=>o.blocked=!1)})]),t(g,{blocked:o.blocked},{default:r(()=>[t(f,{header:"Basic"},{default:r(()=>[K]),_:1})]),_:1},8,["blocked"])]),t(x,{code:o.code},null,8,["code"])],64)}const G=d(F,[["render",W]]),H={data(){return{blocked:!1,code:{basic:`<BlockUI :blocked="blocked" fullScreen />
<Button label="Block" @click="blocked = true" />`,options:`<template>
    <div class="card">
        <BlockUI :blocked="blocked" fullScreen />
        <Button label="Block" @click="blockDocument" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            blocked: false
        }
    },
    methods: {
        blockDocument() {
            this.blocked = true;

            setTimeout(() => {
                this.blocked = false;
            }, 3000);
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <BlockUI :blocked="blocked" fullScreen />
        <Button label="Block" @click="blockDocument" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const blocked = ref(false);
const blockDocument = () => {
    blocked.value = true;

    setTimeout(() => {
        blocked.value = false;
    }, 3000);
}
<\/script>`}}},methods:{blockDocument(){this.blocked=!0,setTimeout(()=>{this.blocked=!1},3e3)}}},J=e("p",null,[a("Enabling "),e("i",null,"fullScreen"),a(" property controls the document.")],-1),Q={class:"card"};function X(n,c,s,k,o,m){const l=p,i=h("BlockUI"),f=h("Button"),g=$;return u(),_(b,null,[t(l,B(v(n.$attrs)),{default:r(()=>[J]),_:1},16),e("div",Q,[t(i,{blocked:o.blocked,fullScreen:""},null,8,["blocked"]),t(f,{label:"Block",onClick:m.blockDocument},null,8,["onClick"])]),t(g,{code:o.code},null,8,["code"])],64)}const Y=d(H,[["render",X]]),Z={data(){return{code:{basic:"import BlockUI from 'primevue/blockui';"}}}};function ee(n,c,s,k,o,m){const l=p,i=$;return u(),_(b,null,[t(l,B(v(n.$attrs)),null,16),t(i,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const oe=d(Z,[["render",ee]]),te={data(){return{blocked:!1,code:{basic:`<BlockUI :blocked="blocked" :pt="{ root: { class: 'surface-ground p-2 border-round-sm' } }">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</BlockUI>`,options:`<template>
    <BlockUI :blocked="blocked" :pt="{ root: { class: 'surface-ground p-2 border-round-sm' } }">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </BlockUI>
</template>`,composition:`<template>
    <BlockUI :blocked="blocked" :pt="{ root: { class: 'surface-ground p-2 border-round-sm' } }">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </BlockUI>
</template>`}}}},ne={class:"card"},ce={class:"mb-3"},ie=e("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function le(n,c,s,k,o,m){const l=p,i=h("Button"),f=h("BlockUI"),g=$;return u(),_(b,null,[t(l,B(v(n.$attrs)),null,16),e("div",ne,[e("div",ce,[t(i,{label:"Block",onClick:c[0]||(c[0]=x=>o.blocked=!0),class:"mr-2"}),t(i,{label:"Unblock",onClick:c[1]||(c[1]=x=>o.blocked=!1)})]),t(f,{blocked:o.blocked,pt:{root:{class:"surface-ground p-2 border-round-sm"}}},{default:r(()=>[ie]),_:1},8,["blocked"])]),t(g,{code:o.code},null,8,["code"])],64)}const se=d(te,[["render",le]]),ae={},de=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/blockui.jpg"})],-1);function ue(n,c){const s=p;return u(),_(b,null,[t(s,B(v(n.$attrs)),{default:r(()=>[e("p",null,S(n.$attrs.description),1)]),_:1},16),de],64)}const re=d(ae,[["render",ue]]),me={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:re},{id:"pt.doc.blockui",label:"BlockUI PT Options",component:y,data:P("BlockUI")},{id:"pt.demo",label:"Demo",component:se}]}}},pe={class:"doc-main"},_e=e("div",{class:"doc-intro"},[e("h1",null,"BlockUI Pass Through")],-1);function be(n,c,s,k,o,m){const l=U,i=q;return u(),_(b,null,[e("div",pe,[_e,t(l,{docs:o.docs},null,8,["docs"])]),t(i,{docs:o.docs},null,8,["docs"])],64)}const ke=d(me,[["render",be]]),fe={},he=e("p",null,"List of class names used in the styled mode.",-1),Be=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Element")])]),e("tbody",null,[e("tr",null,[e("td",null,"p-blockui"),e("td",null,"Mask element.")]),e("tr",null,[e("td",null,"p-blockui-document"),e("td",null,"Mask element in full screen mode.")])])])],-1);function ve(n,c){const s=p;return u(),_(b,null,[t(s,B(v(n.$attrs)),{default:r(()=>[he]),_:1},16),Be],64)}const ge=d(fe,[["render",ve]]),$e={data(){return{code1:{basic:`
export default {
    blockui: {
        root: 'relative',
        mask: 'bg-black/40'
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <div class="mb-3">
            <Button label="Block" @click="blocked = true" class="mr-2"></Button>
            <Button label="Unblock" @click="blocked = false"></Button>
        </div>
        <BlockUI :blocked="blocked">
            <Panel header="Basic">
                <p class="text-gray-700 dark:text-white/80 m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>
        </BlockUI>
    </div>
</template>

<script setup>
import { ref } from "vue";

const blocked = ref(false);
<\/script>`}}}},xe=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function De(n,c,s,k,o,m){const l=w,i=$,f=p;return u(),D(f,B(v(n.$attrs)),{default:r(()=>[e("p",null,[a(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(l,{to:"/tailwind"},{default:r(()=>[a("Tailwind Customization")]),_:1}),a(" section for an example. ")]),t(i,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),xe,t(i,{code:o.code2,embedded:""},null,8,["code"])]),_:1},16)}const Ue=d($e,[["render",De]]),qe={data(){return{docs:[{id:"theming.styled",label:"Styled",component:ge},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Ue}]}]}}},Ie={class:"doc-main"},Te=e("div",{class:"doc-intro"},[e("h1",null,"BlockUI Theming")],-1);function Se(n,c,s,k,o,m){const l=U,i=q;return u(),_(b,null,[e("div",Ie,[Te,t(l,{docs:o.docs},null,8,["docs"])]),t(i,{docs:o.docs},null,8,["docs"])],64)}const ye=d(qe,[["render",Se]]);const Ce={data(){return{docs:[{id:"import",label:"Import",component:oe},{id:"basic",label:"Basic",component:G},{id:"document",label:"Document",component:Y},{id:"accessibility",label:"Accessibility",component:j}],ptComponent:ke,themingDoc:ye}}};function Pe(n,c,s,k,o,m){const l=C;return u(),D(l,{title:"Vue BlockUI Component",header:"BlockUI",description:"BlockUI can either block other components or the whole page.",componentDocs:o.docs,apiDocs:["BlockUI"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ne=d(Ce,[["render",Pe],["__scopeId","data-v-adb33ee1"]]);export{Ne as default};
