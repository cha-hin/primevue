import{_ as i,o as d,e as y,w as h,a as o,m as D,b as e,f as c,p as $,h as f,j as w,c as v,n as g,g as S,F as b,t as C,D as j,k as T,l as V,x as k}from"./entry.68beb385.js";import{g as I}from"./PTHelper.11558b27.js";import{_ as z}from"./PrimeVueNuxtLink.f51d0c80.js";const P={data(){return{code:{basic:`<span id="label_number">Number</span>
<Slider aria-labelledby="label_number" />

<Slider aria-label="Number" />`}}}},B=e("h3",null,"Screen Reader",-1),N=e("p",null,[c(" Slider element component uses "),e("i",null,"slider"),c(" role on the handle in addition to the "),e("i",null,"aria-orientation"),c(", "),e("i",null,"aria-valuemin"),c(", "),e("i",null,"aria-valuemax"),c(" and "),e("i",null,"aria-valuenow"),c(" attributes. Value to describe the component can be defined using "),e("i",null,"aria-labelledby"),c(" and "),e("i",null,"aria-label"),c(" props. ")],-1),U=e("h3",null,"Keyboard Support",-1),A=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the slider.")]),e("tr",null,[e("td",null,[e("span",{class:"inline-flex flex-column"},[e("i",{class:"mb-1"},"left arrow"),e("i",null,"up arrow")])]),e("td",null,"Decrements the value.")]),e("tr",null,[e("td",null,[e("span",{class:"inline-flex flex-column"},[e("i",{class:"mb-1"},"right arrow"),e("i",null,"down arrow")])]),e("td",null,"Increments the value.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Set the minimum value.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Set the maximum value.")]),e("tr",null,[e("td",null,[e("i",null,"page up")]),e("td",null,"Increments the value by 10 steps.")]),e("tr",null,[e("td",null,[e("i",null,"page down")]),e("td",null,"Decrements the value by 10 steps.")])])])],-1);function R(l,n,a,p,t,m){const r=$,s=f;return d(),y(s,D({id:"accessibility",label:"Accessibility"},l.$attrs),{default:h(()=>[B,N,o(r,D({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},l.$attrs),null,16,["code"]),U,A]),_:1},16)}const F=i(P,[["render",R]]),E={data(){return{value:null,code:{basic:'<Slider v-model="value" class="w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Slider v-model="value" class="w-14rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Slider v-model="value" class="w-14rem" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},K=e("p",null,[c("Two-way binding is defined using the standard "),e("i",null,"v-model"),c(" directive.")],-1),L={class:"card flex justify-content-center"};function M(l,n,a,p,t,m){const r=f,s=w("Slider"),u=$;return d(),v(b,null,[o(r,g(S(l.$attrs)),{default:h(()=>[K]),_:1},16),e("div",L,[o(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=_=>t.value=_),class:"w-14rem"},null,8,["modelValue"])]),o(u,{code:t.code},null,8,["code"])],64)}const O=i(E,[["render",M]]),W={data(){return{code:{basic:"import Slider from 'primevue/slider';"}}}};function q(l,n,a,p,t,m){const r=f,s=$;return d(),v(b,null,[o(r,g(S(l.$attrs)),null,16),o(s,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const H=i(W,[["render",q]]),G={data(){return{value:50,code:{basic:`<InputText v-model.number="value" />
<Slider v-model="value" />`,options:`<template>
    <div class="card flex justify-content-center">
        <div class="w-14rem">
            <InputText v-model.number="value" class="w-full" />
            <Slider v-model="value" class="w-full" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 50
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <div class="w-14rem">
            <InputText v-model.number="value" class="w-full" />
            <Slider v-model="value" class="w-full" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
<\/script>`}}}},J=e("p",null,"Slider is connected to an input field using two-way binding.",-1),Q={class:"card flex justify-content-center"},X={class:"w-14rem"};function Y(l,n,a,p,t,m){const r=f,s=w("InputText"),u=w("Slider"),_=$;return d(),v(b,null,[o(r,g(S(l.$attrs)),{default:h(()=>[J]),_:1},16),e("div",Q,[e("div",X,[o(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=x=>t.value=x),modelModifiers:{number:!0},class:"w-full"},null,8,["modelValue"]),o(u,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=x=>t.value=x),class:"w-full"},null,8,["modelValue"])])]),o(_,{code:t.code},null,8,["code"])],64)}const Z=i(G,[["render",Y]]),ee={data(){return{value:[20,80],code:{basic:'<Slider v-model="value" range class="w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Slider v-model="value" range class="w-14rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: [20, 80]
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Slider v-model="value" range class="w-14rem" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref([20, 80]);
<\/script>`}}}},te=e("p",null,[c("When "),e("i",null,"range"),c(" property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value.")],-1),oe={class:"card flex justify-content-center"};function ne(l,n,a,p,t,m){const r=f,s=w("Slider"),u=$;return d(),v(b,null,[o(r,g(S(l.$attrs)),{default:h(()=>[te]),_:1},16),e("div",oe,[o(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=_=>t.value=_),range:"",class:"w-14rem"},null,8,["modelValue"])]),o(u,{code:t.code},null,8,["code"])],64)}const le=i(ee,[["render",ne]]),re={data(){return{value:20,code:{basic:'<Slider v-model="value" :step="20" class="w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Slider v-model="value" :step="20" class="w-14rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 20
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Slider v-model="value" :step="20" class="w-14rem" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(20);
<\/script>`}}}},se=e("p",null,[c("Size of each movement is defined with the "),e("i",null,"step"),c(" property.")],-1),ce={class:"card flex justify-content-center"};function ae(l,n,a,p,t,m){const r=f,s=w("Slider"),u=$;return d(),v(b,null,[o(r,g(S(l.$attrs)),{default:h(()=>[se]),_:1},16),e("div",ce,[o(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=_=>t.value=_),step:20,class:"w-14rem"},null,8,["modelValue"])]),o(u,{code:t.code},null,8,["code"])],64)}const ie=i(re,[["render",ae]]),de={data(){return{value:50,code:{basic:'<Slider v-model="value" orientation="vertical" class="h-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Slider v-model="value" orientation="vertical" class="h-14rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 50
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Slider v-model="value" orientation="vertical" class="h-14rem" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
<\/script>`}}}},ue=e("p",null,[c("Default layout of slider is "),e("i",null,"horizontal"),c(", use "),e("i",null,"orientation"),c(" property for the alternative "),e("i",null,"vertical"),c(" mode.")],-1),pe={class:"card flex justify-content-center"};function me(l,n,a,p,t,m){const r=f,s=w("Slider"),u=$;return d(),v(b,null,[o(r,g(S(l.$attrs)),{default:h(()=>[ue]),_:1},16),e("div",pe,[o(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=_=>t.value=_),orientation:"vertical",class:"h-14rem"},null,8,["modelValue"])]),o(u,{code:t.code},null,8,["code"])],64)}const _e=i(de,[["render",me]]),fe={data(){return{value:null,code:{basic:`<Slider
    v-model="value"
    :pt="{
        root: { class: 'w-14rem' },
        handle: { class: 'bg-orange-400 border-900' },
        range: { class: 'bg-orange-400' }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Slider
            v-model="value"
            :pt="{
                root: { class: 'w-14rem' },
                handle: { class: 'bg-orange-400 border-900' },
                range: { class: 'bg-orange-400' }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Slider
            v-model="value"
            :pt="{
                root: { class: 'w-14rem' },
                handle: { class: 'bg-orange-400 border-900' },
                range: { class: 'bg-orange-400' }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},ve={class:"card flex justify-content-center"};function be(l,n,a,p,t,m){const r=f,s=w("Slider"),u=$;return d(),v(b,null,[o(r,g(S(l.$attrs)),null,16),e("div",ve,[o(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=_=>t.value=_),pt:{root:{class:"w-14rem"},handle:{class:"bg-orange-400 border-900"},range:{class:"bg-orange-400"}}},null,8,["modelValue"])]),o(u,{code:t.code},null,8,["code"])],64)}const he=i(fe,[["render",be]]),ge={},Se=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/slider.jpg"})],-1);function $e(l,n){const a=f;return d(),v(b,null,[o(a,g(S(l.$attrs)),{default:h(()=>[e("p",null,C(l.$attrs.description),1)]),_:1},16),Se],64)}const we=i(ge,[["render",$e]]),xe={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:we},{id:"pt.doc.steps",label:"Slider PT Options",component:j,data:I("Slider")},{id:"pt.demo",label:"Demo",component:he}]}}},ye={class:"doc-main"},De=e("div",{class:"doc-intro"},[e("h1",null,"Slider Pass Through")],-1);function Te(l,n,a,p,t,m){const r=T,s=V;return d(),v(b,null,[e("div",ye,[De,o(r,{docs:t.docs},null,8,["docs"])]),o(s,{docs:t.docs},null,8,["docs"])],64)}const Ve=i(xe,[["render",Te]]),Ce={},je=e("p",null,"List of class names used in the styled mode.",-1),ke=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Element")])]),e("tbody",null,[e("tr",null,[e("td",null,"p-slider"),e("td",null,"Container element")]),e("tr",null,[e("td",null,"p-slider-handle"),e("td",null,"Handle element.")])])])],-1);function Ie(l,n){const a=f;return d(),v(b,null,[o(a,g(S(l.$attrs)),{default:h(()=>[je]),_:1},16),ke],64)}const ze=i(Ce,[["render",Ie]]),Pe={data(){return{code1:{basic:`
export default {
    slider: {
        root: ({ props }) => ({
            class: [
                'relative',
                'bg-gray-100 dark:bg-gray-800 border-0 rounded-6',
                { 'h-1 w-56': props.orientation == 'horizontal', 'w-1 h-56': props.orientation == 'vertical' },
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        range: ({ props }) => ({
            class: [
                'bg-blue-500',
                'block absolute',
                {
                    'top-0 left-0 h-full': props.orientation == 'horizontal',
                    'bottom-0 left-0 w-full': props.orientation == 'vertical'
                }
            ]
        }),
        handle: ({ props }) => ({
            class: [
                'h-4 w-4 bg-white dark:bg-gray-600 border-2 border-blue-500 rounded-full transition duration-200',
                'cursor-grab touch-action-none block',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                'hover:bg-blue-500 hover:border hover:border-blue-500',
                {
                    'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                    'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
                }
            ]
        }),
        starthandler: ({ props }) => ({
            class: [
                'h-4 w-4 bg-white dark:bg-gray-600 border-2 border-blue-500 rounded-full transition duration-200',
                'cursor-grab touch-action-none block',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                'hover:bg-blue-500 hover:border hover:border-blue-500',
                {
                    'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                    'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
                }
            ]
        }),
        endhandler: ({ props }) => ({
            class: [
                'h-4 w-4 bg-white dark:bg-gray-600 border-2 border-blue-500 rounded-full transition duration-200',
                'cursor-grab touch-action-none block',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                'hover:bg-blue-500 hover:border hover:border-blue-500',
                {
                    'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                    'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
                }
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Slider v-model="value" class="w-14rem" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},Be=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ne(l,n,a,p,t,m){const r=z,s=$,u=f;return d(),y(u,g(S(l.$attrs)),{default:h(()=>[e("p",null,[c(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(r,{to:"/tailwind"},{default:h(()=>[c("Tailwind Customization")]),_:1}),c(" section for an example. ")]),o(s,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Be,o(s,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const Ue=i(Pe,[["render",Ne]]),Ae={data(){return{docs:[{id:"theming.styled",label:"Styled",component:ze},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Ue}]}]}}},Re={class:"doc-main"},Fe=e("div",{class:"doc-intro"},[e("h1",null,"Slider Theming")],-1);function Ee(l,n,a,p,t,m){const r=T,s=V;return d(),v(b,null,[e("div",Re,[Fe,o(r,{docs:t.docs},null,8,["docs"])]),o(s,{docs:t.docs},null,8,["docs"])],64)}const Ke=i(Ae,[["render",Ee]]),Le={data(){return{docs:[{id:"import",label:"Import",component:H},{id:"basic",label:"Basic",component:O},{id:"input",label:"Input",component:Z},{id:"step",label:"Step",component:ie},{id:"range",label:"Range",component:le},{id:"vertical",label:"Vertical",component:_e},{id:"accessibility",label:"Accessibility",component:F}],ptComponent:Ve,themingDoc:Ke}}};function Me(l,n,a,p,t,m){const r=k;return d(),y(r,{title:"Vue Slider Component",header:"Slider",description:"Slider is a component to provide input with a drag handle.",componentDocs:t.docs,apiDocs:["Slider"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const He=i(Le,[["render",Me]]);export{He as default};
