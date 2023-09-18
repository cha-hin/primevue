import{_ as u,j as i,o as r,c as x,a as p,w as h,n as f,g,b as e,F as b,f as I,h as $,p as w,e as T,x as V}from"./entry.68beb385.js";const B={data(){return{code:{basic:`<div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">
        <i class="pi pi-user"></i>
    </span>
    <InputText placeholder="Username" />
</div>

<div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">$</span>
    <InputNumber placeholder="Price" />
    <span class="p-inputgroup-addon">.00</span>
</div>

<div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">www</span>
    <InputText placeholder="Website" />
</div>`,options:`<template>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">$</span>
            <InputNumber placeholder="Price" />
            <span class="p-inputgroup-addon">.00</span>
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">www</span>
            <InputText placeholder="Website" />
        </div>
    </div>
</template>`,composition:`<template>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">$</span>
            <InputNumber placeholder="Price" />
            <span class="p-inputgroup-addon">.00</span>
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">www</span>
            <InputText placeholder="Website" />
        </div>
    </div>
</template>`}}}},y=e("p",null,[I("An InputGroup is created by wrapping the input and add-ons inside an element with a "),e("i",null,"p-inputgroup"),I(" class where add-ons also should be inside an element with "),e("i",null,".p-inputgroup-addon"),I(" class.")],-1),C={class:"card flex flex-column md:flex-row gap-3"},D={class:"p-inputgroup flex-1"},P=e("span",{class:"p-inputgroup-addon"},[e("i",{class:"pi pi-user"})],-1),N={class:"p-inputgroup flex-1"},S=e("span",{class:"p-inputgroup-addon"},"$",-1),U=e("span",{class:"p-inputgroup-addon"},".00",-1),R={class:"p-inputgroup flex-1"},K=e("span",{class:"p-inputgroup-addon"},"www",-1);function W(c,s,m,_,n,v){const a=$,o=i("InputText"),t=i("InputNumber"),d=w;return r(),x(b,null,[p(a,f(g(c.$attrs)),{default:h(()=>[y]),_:1},16),e("div",C,[e("div",D,[P,p(o,{placeholder:"Username"})]),e("div",N,[S,p(t,{placeholder:"Price"}),U]),e("div",R,[K,p(o,{placeholder:"Website"})])]),p(d,{code:n.code},null,8,["code"])],64)}const j=u(B,[["render",W]]),G={data(){return{code:{basic:`<div class="p-inputgroup flex-1">
    <Button label="Search" />
    <InputText placeholder="Keyword" />
</div>

<div class="p-inputgroup flex-1">
    <InputText placeholder="Keyword" />
    <Button icon="pi pi-search" severity="warning" />
</div>

<div class="p-inputgroup flex-1">
    <Button icon="pi pi-check" severity="success" />
    <InputText placeholder="Vote" />
    <Button icon="pi pi-times" severity="danger" />
</div>`,options:`<template>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <Button label="Search" />
            <InputText placeholder="Keyword" />
        </div>

        <div class="p-inputgroup flex-1">
            <InputText placeholder="Keyword" />
            <Button icon="pi pi-search" severity="warning" />
        </div>

        <div class="p-inputgroup flex-1">
            <Button icon="pi pi-check" severity="success" />
            <InputText placeholder="Vote" />
            <Button icon="pi pi-times" severity="danger" />
        </div>
    </div>
</template>`,composition:`<template>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <Button label="Search" />
            <InputText placeholder="Keyword" />
        </div>

        <div class="p-inputgroup flex-1">
            <InputText placeholder="Keyword" />
            <Button icon="pi pi-search" severity="warning" />
        </div>

        <div class="p-inputgroup flex-1">
            <Button icon="pi pi-check" severity="success" />
            <InputText placeholder="Vote" />
            <Button icon="pi pi-times" severity="danger" />
        </div>
    </div>
</template>`}}}},M=e("p",null,"Buttons can be placed at either side of an input element.",-1),F={class:"card flex flex-column md:flex-row gap-3"},z={class:"p-inputgroup flex-1"},A={class:"p-inputgroup flex-1"},E={class:"p-inputgroup flex-1"};function q(c,s,m,_,n,v){const a=$,o=i("Button"),t=i("InputText"),d=w;return r(),x(b,null,[p(a,f(g(c.$attrs)),{default:h(()=>[M]),_:1},16),e("div",F,[e("div",z,[p(o,{label:"Search"}),p(t,{placeholder:"Keyword"})]),e("div",A,[p(t,{placeholder:"Keyword"}),p(o,{icon:"pi pi-search",severity:"warning"})]),e("div",E,[p(o,{icon:"pi pi-check",severity:"success"}),p(t,{placeholder:"Vote"}),p(o,{icon:"pi pi-times",severity:"danger"})])]),p(d,{code:n.code},null,8,["code"])],64)}const H=u(G,[["render",q]]),J={data(){return{checked1:!1,checked2:!1,radioValue1:"",radioValue2:"",code:{basic:`<div class="p-inputgroup flex-1">
    <InputText placeholder="Price" />
    <span class="p-inputgroup-addon">
        <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
    </span>
</div>

<div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">
        <Checkbox v-model="checked1" :binary="true" />
    </span>
    <InputText placeholder="Username" />
</div>

<div class="p-inputgroup flex-1">
    <span class="p-inputgroup-addon">
        <Checkbox v-model="checked2" :binary="true" />
    </span>
    <InputText placeholder="Website" />
    <span class="p-inputgroup-addon">
        <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
    </span>
</div>`,options:`<template>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <InputText placeholder="Price" />
            <span class="p-inputgroup-addon">
                <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
            </span>
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <Checkbox v-model="checked1" :binary="true" />
            </span>
            <InputText placeholder="Username" />
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <Checkbox v-model="checked2" :binary="true" />
            </span>
            <InputText placeholder="Website" />
            <span class="p-inputgroup-addon">
                <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: false,
            radioValue1: '',
            radioValue2: ''
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1">
            <InputText placeholder="Price" />
            <span class="p-inputgroup-addon">
                <RadioButton v-model="radioValue1" name="rb1" value="rb1" />
            </span>
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <Checkbox v-model="checked1" :binary="true" />
            </span>
            <InputText placeholder="Username" />
        </div>

        <div class="p-inputgroup flex-1">
            <span class="p-inputgroup-addon">
                <Checkbox v-model="checked2" :binary="true" />
            </span>
            <InputText placeholder="Website" />
            <span class="p-inputgroup-addon">
                <RadioButton v-model="radioValue2" name="rb2" value="rb2" />
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked1 = ref(false);
const checked2 = ref(false);
const radioValue1 = ref('');
const radioValue2 = ref('');
<\/script>`}}}},L=e("p",null,"Checkbox and RadioButton components can be combined with an input element under the same group.",-1),O={class:"card flex flex-column md:flex-row gap-3"},Q={class:"p-inputgroup flex-1"},X={class:"p-inputgroup-addon"},Y={class:"p-inputgroup flex-1"},Z={class:"p-inputgroup-addon"},ee={class:"p-inputgroup flex-1"},pe={class:"p-inputgroup-addon"},ne={class:"p-inputgroup-addon"};function oe(c,s,m,_,n,v){const a=$,o=i("InputText"),t=i("RadioButton"),d=i("Checkbox"),k=w;return r(),x(b,null,[p(a,f(g(c.$attrs)),{default:h(()=>[L]),_:1},16),e("div",O,[e("div",Q,[p(o,{placeholder:"Price"}),e("span",X,[p(t,{modelValue:n.radioValue1,"onUpdate:modelValue":s[0]||(s[0]=l=>n.radioValue1=l),name:"rb1",value:"rb1"},null,8,["modelValue"])])]),e("div",Y,[e("span",Z,[p(d,{modelValue:n.checked1,"onUpdate:modelValue":s[1]||(s[1]=l=>n.checked1=l),binary:!0},null,8,["modelValue"])]),p(o,{placeholder:"Username"})]),e("div",ee,[e("span",pe,[p(d,{modelValue:n.checked2,"onUpdate:modelValue":s[2]||(s[2]=l=>n.checked2=l),binary:!0},null,8,["modelValue"])]),p(o,{placeholder:"Website"}),e("span",ne,[p(t,{modelValue:n.radioValue2,"onUpdate:modelValue":s[3]||(s[3]=l=>n.radioValue2=l),name:"rb2",value:"rb2"},null,8,["modelValue"])])])]),p(k,{code:n.code},null,8,["code"])],64)}const se=u(J,[["render",oe]]),te={data(){return{code:{basic:`<div class="p-inputgroup w-full md:w-30rem">
    <span class="p-inputgroup-addon">
        <i class="pi pi-clock"></i>
    </span>
    <span class="p-inputgroup-addon">
        <i class="pi pi-star-fill"></i>
    </span>
    <InputNumber placeholder="Price" />
    <span class="p-inputgroup-addon">$</span>
    <span class="p-inputgroup-addon">.00</span>
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <div class="p-inputgroup w-full md:w-30rem">
            <span class="p-inputgroup-addon">
                <i class="pi pi-clock"></i>
            </span>
            <span class="p-inputgroup-addon">
                <i class="pi pi-star-fill"></i>
            </span>
            <InputNumber placeholder="Price" />
            <span class="p-inputgroup-addon">$</span>
            <span class="p-inputgroup-addon">.00</span>
        </div>
    </div>
</template>`,composition:`<template>
    <div class="card flex justify-content-center">
        <div class="p-inputgroup w-full md:w-30rem">
            <span class="p-inputgroup-addon">
                <i class="pi pi-clock"></i>
            </span>
            <span class="p-inputgroup-addon">
                <i class="pi pi-star-fill"></i>
            </span>
            <InputNumber placeholder="Price" />
            <span class="p-inputgroup-addon">$</span>
            <span class="p-inputgroup-addon">.00</span>
        </div>
    </div>
</template>`}}}},ae=e("p",null,"Multiple add-ons can be placed inside the same group.",-1),ce={class:"card flex justify-content-center"},ie={class:"p-inputgroup w-full md:w-30rem"},le=e("span",{class:"p-inputgroup-addon"},[e("i",{class:"pi pi-clock"})],-1),de=e("span",{class:"p-inputgroup-addon"},[e("i",{class:"pi pi-star-fill"})],-1),ue=e("span",{class:"p-inputgroup-addon"},"$",-1),re=e("span",{class:"p-inputgroup-addon"},".00",-1);function me(c,s,m,_,n,v){const a=$,o=i("InputNumber"),t=w;return r(),x(b,null,[p(a,f(g(c.$attrs)),{default:h(()=>[ae]),_:1},16),e("div",ce,[e("div",ie,[le,de,p(o,{placeholder:"Price"}),ue,re])]),p(t,{code:n.code},null,8,["code"])],64)}const _e=u(te,[["render",me]]),ve={data(){return{docs:[{id:"basic",label:"Basic",component:j},{id:"multiple",label:"Multiple",component:_e},{id:"button",label:"Button",component:H},{id:"checkbox",label:"Checkbox & RadioButton",component:se}]}}};function xe(c,s,m,_,n,v){const a=V;return r(),T(a,{title:"Vue InputGroup Component",header:"InputGroup",description:"Text, icon, buttons and other content can be grouped next to an input.",componentDocs:n.docs},null,8,["componentDocs"])}const fe=u(ve,[["render",xe]]);export{fe as default};
