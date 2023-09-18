import{_ as i,o as l,e as y,w as _,a as s,m as B,b as e,f as a,p as f,h as g,j as $,c as h,n as b,g as P,F as v,t as D,D as x,k as w,l as T,v as S,x as C}from"./entry.68beb385.js";import{g as V}from"./PTHelper.11558b27.js";import{_ as k}from"./PrimeVueNuxtLink.f51d0c80.js";const I={data(){return{code:{basic:`<span id="label_status" />
<ProgressBar aria-labelledby="label_status" />

<ProgressBar aria-label="Status" />`}}}},M=e("h3",null,"Screen Reader",-1),N=e("p",null,[a(" ProgressBar components uses "),e("i",null,"progressbar"),a(" role along with "),e("i",null,"aria-valuemin"),a(", "),e("i",null,"aria-valuemax"),a(" and "),e("i",null,"aria-valuenow"),a(" attributes. Value to describe the component can be defined using "),e("i",null,"aria-labelledby"),a(" and "),e("i",null,"aria-label"),a(" props. ")],-1),z=e("h3",null,"Keyboard Support",-1),U=e("p",null,"Not applicable.",-1);function A(o,d,c,p,t,m){const r=f,n=g;return l(),y(n,B({id:"accessibility",label:"Accessibility"},o.$attrs),{default:_(()=>[M,N,s(r,B({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},o.$attrs),null,16,["code"]),z,U]),_:1},16)}const j=i(I,[["render",A]]),E={data(){return{code:{basic:'<ProgressBar :value="50"></ProgressBar>',options:`<template>
    <div class="card">
        <ProgressBar :value="50"></ProgressBar>
    </div>
</template>

<script >

<\/script>`,composition:`<template>
    <div class="card">
        <ProgressBar :value="50"></ProgressBar>
    </div>
</template>

<script setup>

<\/script>`}}}},F=e("p",null,[a("ProgressBar is used with the "),e("i",null,"value"),a(" property.")],-1),L={class:"card"};function O(o,d,c,p,t,m){const r=g,n=$("ProgressBar"),u=f;return l(),h(v,null,[s(r,b(P(o.$attrs)),{default:_(()=>[F]),_:1},16),e("div",L,[s(n,{value:50})]),s(u,{code:t.code},null,8,["code"])],64)}const R=i(E,[["render",O]]),q={data(){return{value:0,interval:null,code:{basic:'<ProgressBar :value="value"></ProgressBar>',options:`<template>
    <div class="card">
        <Toast></Toast>
        <ProgressBar :value="value1" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 0,
            interval: null
        };
    },
    mounted() {
        this.startProgress();
    },
    beforeUnmount() {
        this.endProgress();
    },
    methods: {
        startProgress() {
            this.interval = setInterval(() => {
                let newValue = this.value1 + Math.floor(Math.random() * 10) + 1;

                if (newValue >= 100) {
                    newValue = 100;
                    this.$toast.add({ severity: 'info', summary: 'Success', detail: 'Process Completed', life: 1000 });
                }

                this.value1 = newValue;
            }, 2000);
        },
        endProgress() {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Toast></Toast>
        <ProgressBar :value="value1" />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useToast } from "primevue/usetoast";

onMounted(() => {
    startProgress();
});

onBeforeUnmount(() => {
    endProgress();
});

const toast = useToast();
const value1 = ref(0);
const interval = ref();
const startProgress = () => {
    interval.value = setInterval(() => {
        let newValue = value1.value + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
            newValue = 100;
            toast.add({ severity: 'info', summary: 'Success', detail: 'Process Completed', life: 1000 });
        }
        value1.value = newValue;
    }, 2000);
};
const endProgress = () => {
    clearInterval(interval.value);
    interval.value = null;
};
<\/script>`}}},mounted(){this.startProgress()},beforeUnmount(){this.endProgress()},methods:{startProgress(){this.interval=setInterval(()=>{let o=this.value+Math.floor(Math.random()*10)+1;o>=100&&(o=100,this.$toast.add({severity:"info",summary:"Success",detail:"Process Completed",life:1e3}),this.endProgress()),this.value=o},2e3)},endProgress(){clearInterval(this.interval),this.interval=null}}},K=e("p",null,"Value is reactive so updating it dynamically changes the bar as well.",-1),W={class:"card"};function G(o,d,c,p,t,m){const r=g,n=$("ProgressBar"),u=f;return l(),h(v,null,[s(r,b(P(o.$attrs)),{default:_(()=>[K]),_:1},16),e("div",W,[s(n,{value:t.value},null,8,["value"])]),s(u,{code:t.code},null,8,["code"])],64)}const H=i(q,[["render",G]]),J={data(){return{code:{basic:"import ProgressBar from 'primevue/progressbar';"}}}};function Q(o,d,c,p,t,m){const r=g,n=f;return l(),h(v,null,[s(r,b(P(o.$attrs)),null,16),s(n,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const X=i(J,[["render",Q]]),Y={data(){return{code:{basic:'<ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>',options:`<template>
    <div class="card">
        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card">
        <ProgressBar mode="indeterminate" style="height: 6px"></ProgressBar>
    </div>
</template>

<script setup>

<\/script>`}}}},Z=e("p",null,[a("For progresses with no value to track, set the "),e("i",null,"mode"),a(" property to "),e("i",null,"indeterminate"),a(".")],-1),ee={class:"card"};function te(o,d,c,p,t,m){const r=g,n=$("ProgressBar"),u=f;return l(),h(v,null,[s(r,b(P(o.$attrs)),{default:_(()=>[Z]),_:1},16),e("div",ee,[s(n,{mode:"indeterminate",style:{height:"6px"}})]),s(u,{code:t.code},null,8,["code"])],64)}const oe=i(Y,[["render",te]]),se={data(){return{value:40,code:{basic:'<ProgressBar :value="40"> {{ value }}/100 </ProgressBar>',options:`<template>
    <div class="card">
        <ProgressBar :value="40"> {{ value }}/100 </ProgressBar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 40
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <ProgressBar :value="40"> {{ value }}/100 </ProgressBar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(40);
<\/script>`}}}},re=e("p",null,[a("Custom content inside the ProgressBar is defined with the "),e("i",null,"default"),a(" slot.")],-1),ne={class:"card"};function ae(o,d,c,p,t,m){const r=g,n=$("ProgressBar"),u=f;return l(),h(v,null,[s(r,b(P(o.$attrs)),{default:_(()=>[re]),_:1},16),e("div",ne,[s(n,{value:t.value},{default:_(()=>[a(D(t.value)+"/100 ",1)]),_:1},8,["value"])]),s(u,{code:t.code},null,8,["code"])],64)}const ce=i(se,[["render",ae]]),ie={data(){return{code:{basic:`<ProgressBar :value="50"
    :pt="{
        value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)' } }
    }" />`,options:`<template>
    <div class="card">
        <ProgressBar :value="50"
            :pt="{
                value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)' } }
            }" />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <ProgressBar :value="50"
            :pt="{
                value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)' } }
            }" />
    </div>
</template>

<script setup>
<\/script>`}}}},le={class:"card"};function de(o,d,c,p,t,m){const r=g,n=$("ProgressBar"),u=f;return l(),h(v,null,[s(r,B(o.$attrs,{level:2}),null,16),e("div",le,[s(n,{value:50,pt:{value:{style:{background:"linear-gradient(to right, #8e2de2, #4a00e0)"}}}},null,8,["pt"])]),s(u,{code:t.code},null,8,["code"])],64)}const ue=i(ie,[["render",de]]),pe={},me=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/progressbar.jpg"})],-1);function _e(o,d){const c=g;return l(),h(v,null,[s(c,b(P(o.$attrs)),{default:_(()=>[e("p",null,D(o.$attrs.description),1)]),_:1},16),me],64)}const ge=i(pe,[["render",_e]]),he={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ge},{id:"pt.doc.progressbar",label:"ProgressBar PT Options",component:x,data:V("ProgressBar")},{id:"pt.demo",label:"Demo",component:ue}]}}},ve={class:"doc-main"},fe=e("div",{class:"doc-intro"},[e("h1",null,"ProgressBar Pass Through")],-1);function be(o,d,c,p,t,m){const r=w,n=T;return l(),h(v,null,[e("div",ve,[fe,s(r,{docs:t.docs},null,8,["docs"])]),s(n,{docs:t.docs},null,8,["docs"])],64)}const Pe=i(he,[["render",be]]),$e={},Be=e("p",null,"List of class names used in the styled mode.",-1),ye=S('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-progressbar</td><td>Container element.</td></tr><tr><td>p-progressbar-determinate</td><td>Container element of a determinate progressbar.</td></tr><tr><td>p-progressbar-indeterminate</td><td>Container element of an indeterminate progressbar.</td></tr><tr><td>p-progressbar-value</td><td>Element whose width changes according to value.</td></tr><tr><td>p-progressbar-label</td><td>Label element that displays the current value.</td></tr></tbody></table></div>',1);function De(o,d){const c=g;return l(),h(v,null,[s(c,b(P(o.$attrs)),{default:_(()=>[Be]),_:1},16),ye],64)}const we=i($e,[["render",De]]),Te={data(){return{code1:{basic:`
export default {
    global: {
        css: \`
        .progressbar-value-animate::after {
            will-change: left, right;
            animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        }
        .progressbar-value-animate::before {
            will-change: left, right;
            animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
        }
        @keyframes p-progressbar-indeterminate-anim {
            0% {
                left: -35%;
                right: 100%;
            }
            60% {
                left: 100%;
                right: -90%;
            }
            100% {
                left: 100%;
                right: -90%;
            }
        }
    \`
    },
    progressbar: {
        root: {
            class: ['overflow-hidden relative', 'border-0 h-6 bg-gray-200 rounded-md dark:bg-gray-800']
        },
        value: ({ props }) => ({
            class: [
                'border-0 m-0 bg-blue-500',
                {
                    'transition-width duration-1000 ease-in-out absolute items-center border-0 flex h-full justify-center overflow-hidden w-0': props.mode !== 'indeterminate',
                    'progressbar-value-animate before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:delay-1000': props.mode == 'indeterminate'
                }
            ]
        }),
        label: {
            class: ['inline-flex', 'text-white leading-6']
        }
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <ProgressBar :value="50"></ProgressBar>
    </div>
    <div class="card">
        <Toast></Toast>
        <ProgressBar :value="value1" />
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useToast } from "primevue/usetoast";

onMounted(() => {
    startProgress();
});

onBeforeUnmount(() => {
    endProgress();
});

const toast = useToast();
const value1 = ref(0);
const interval = ref();
const startProgress = () => {
    interval.value = setInterval(() => {
        let newValue = value1.value + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
            newValue = 100;
            toast.add({ severity: 'info', summary: 'Success', detail: 'Process Completed', life: 1000 });
        }
        value1.value = newValue;
    }, 2000);
};
const endProgress = () => {
    clearInterval(interval.value);
    interval.value = null;
};
<\/script>`}}}},xe=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Se(o,d,c,p,t,m){const r=k,n=f,u=g;return l(),y(u,b(P(o.$attrs)),{default:_(()=>[e("p",null,[a(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),s(r,{to:"/tailwind"},{default:_(()=>[a("Tailwind Customization")]),_:1}),a(" section for an example. ")]),s(n,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),xe,s(n,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const Ce=i(Te,[["render",Se]]),Ve={data(){return{docs:[{id:"theming.styled",label:"Styled",component:we},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Ce}]}]}}},ke={class:"doc-main"},Ie=e("div",{class:"doc-intro"},[e("h1",null,"ProgressBar Theming")],-1);function Me(o,d,c,p,t,m){const r=w,n=T;return l(),h(v,null,[e("div",ke,[Ie,s(r,{docs:t.docs},null,8,["docs"])]),s(n,{docs:t.docs},null,8,["docs"])],64)}const Ne=i(Ve,[["render",Me]]),ze={data(){return{docs:[{id:"import",label:"Import",component:X},{id:"basic",label:"Basic",component:R},{id:"dynamic",label:"Dynamic",component:H},{id:"template",label:"Template",component:ce},{id:"indeterminate",label:"Indeterminate",component:oe},{id:"accessibility",label:"Accessibility",component:j}],ptComponent:Pe,themingDoc:Ne}}};function Ue(o,d,c,p,t,m){const r=C;return l(),y(r,{title:"Vue ProgressBar Component",header:"ProgressBar",description:"ProgressBar is a process status indicator.",componentDocs:t.docs,apiDocs:["ProgressBar"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Fe=i(ze,[["render",Ue]]);export{Fe as default};
