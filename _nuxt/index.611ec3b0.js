import{_ as m,o as p,e as D,w as x,a as l,m as $,b as e,f as s,p as h,h as f,j as g,c as v,n as y,g as I,F as _,B as V,A as k,t as S,D as U,k as w,l as B,v as F,x as C}from"./entry.68beb385.js";import{u as T,a as E}from"./vee-validate.esm.3b430014.js";import{g as M}from"./PTHelper.11558b27.js";import{_ as L}from"./PrimeVueNuxtLink.f51d0c80.js";const j={data(){return{code:{basic:`<label for="price">Price</label>
<InputNumber inputId="price" />

<span id="label_number">Number</span>
<InputNumber aria-labelledby="label_number" />

<InputNumber aria-label="Number" />`}}}},z=e("h3",null,"Screen Reader",-1),P=e("p",null,[s(" Value to describe the component can either be provided via "),e("i",null,"label"),s(" tag combined with "),e("i",null,"inputId"),s(" prop or using "),e("i",null,"aria-labelledby"),s(", "),e("i",null,"aria-label"),s(" props. The input element uses "),e("i",null,"spinbutton"),s(" role in addition to the "),e("i",null,"aria-valuemin"),s(", "),e("i",null,"aria-valuemax"),s(" and "),e("i",null,"aria-valuenow"),s(" attributes. ")],-1),G=e("h3",null,"Keyboard Support",-1),R=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the input.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Increments the value.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Decrements the value.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Set the minimum value if provided.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Set the maximum value if provided.")])])])],-1);function J(u,o,d,c,t,b){const r=h,a=f;return p(),D(a,$({id:"accessibility",label:"Accessibility"},u.$attrs),{default:x(()=>[z,P,l(r,$({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},u.$attrs),null,16,["code"]),G,R]),_:1},16)}const A=m(j,[["render",J]]),O={data(){return{value1:20,value2:25,value3:10.5,code:{basic:`<InputNumber v-model="value1" inputId="stacked-buttons" showButtons mode="currency" currency="USD" />
<InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" />
<InputNumber v-model="value3" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="0.25"
    decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
    mode="currency" currency="EUR" />`,options:`<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="stacked-buttons" class="font-bold block mb-2"> Stacked </label>
            <InputNumber v-model="value1" inputId="stacked-buttons" showButtons mode="currency" currency="USD" />
        </div>

        <div class="flex-auto">
            <label for="minmax-buttons" class="font-bold block mb-2"> Min-Max Boundaries </label>
            <InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" />
        </div>
        <div class="flex-auto">
            <label for="horizontal-buttons" class="font-bold block mb-2"> Horizontal with Step </label>
            <InputNumber v-model="value3" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="0.25"
                decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                mode="currency" currency="EUR" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 20,
            value2: 25,
            value3: 10.5
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="stacked-buttons" class="font-bold block mb-2"> Stacked </label>
            <InputNumber v-model="value1" inputId="stacked-buttons" showButtons mode="currency" currency="USD" />
        </div>

        <div class="flex-auto">
            <label for="minmax-buttons" class="font-bold block mb-2"> Min-Max Boundaries </label>
            <InputNumber v-model="value2" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" />
        </div>
        <div class="flex-auto">
            <label for="horizontal-buttons" class="font-bold block mb-2"> Horizontal with Step </label>
            <InputNumber v-model="value3" inputId="horizontal-buttons" showButtons buttonLayout="horizontal" :step="0.25"
                decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                mode="currency" currency="EUR" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(20);
const value2 = ref(25);
const value3 = ref(10.5);
<\/script>`}}}},Y=e("p",null,[s("Spinner buttons are enabled using the "),e("i",null,"showButtons"),s(" property and layout is defined with the "),e("i",null,"buttonLayout"),s(".")],-1),W={class:"card flex flex-wrap gap-3 p-fluid"},q={class:"flex-auto"},H=e("label",{for:"stacked-buttons",class:"font-bold block mb-2"}," Stacked ",-1),K={class:"flex-auto"},Q=e("label",{for:"minmax-buttons",class:"font-bold block mb-2"}," Min-Max Boundaries ",-1),X={class:"flex-auto"},Z=e("label",{for:"horizontal-buttons",class:"font-bold block mb-2"}," Horizontal with Step ",-1);function ee(u,o,d,c,t,b){const r=f,a=g("InputNumber"),i=h;return p(),v(_,null,[l(r,y(I(u.$attrs)),{default:x(()=>[Y]),_:1},16),e("div",W,[e("div",q,[H,l(a,{modelValue:t.value1,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value1=n),inputId:"stacked-buttons",showButtons:"",mode:"currency",currency:"USD"},null,8,["modelValue"])]),e("div",K,[Q,l(a,{modelValue:t.value2,"onUpdate:modelValue":o[1]||(o[1]=n=>t.value2=n),inputId:"minmax-buttons",mode:"decimal",showButtons:"",min:0,max:100},null,8,["modelValue"])]),e("div",X,[Z,l(a,{modelValue:t.value3,"onUpdate:modelValue":o[2]||(o[2]=n=>t.value3=n),inputId:"horizontal-buttons",showButtons:"",buttonLayout:"horizontal",step:.25,decrementButtonClass:"p-button-danger",incrementButtonClass:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus",mode:"currency",currency:"EUR"},null,8,["modelValue"])])]),l(i,{code:t.code},null,8,["code"])],64)}const te=m(O,[["render",ee]]),oe={data(){return{value1:1500,value2:2500,value3:4250,value4:5002,code:{basic:`<InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
<InputNumber v-model="value2" inputId="currency-germany" mode="currency" currency="EUR" locale="de-DE" />
<InputNumber v-model="value3" inputId="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
<InputNumber v-model="value4" inputId="currency-japan" mode="currency" currency="JPY" locale="jp-JP" />`,options:`<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="currency-us" class="font-bold block mb-2"> United States </label>
            <InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
        </div>
        <div class="flex-auto">
            <label for="currency-germany" class="font-bold block mb-2"> Germany </label>
            <InputNumber v-model="value2" inputId="currency-germany" mode="currency" currency="EUR" locale="de-DE" />
        </div>
        <div class="flex-auto">
            <label for="currency-india" class="font-bold block mb-2"> India </label>
            <InputNumber v-model="value3" inputId="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
        </div>
        <div class="flex-auto">
            <label for="currency-japan" class="font-bold block mb-2"> Japan </label>
            <InputNumber v-model="value4" inputId="currency-japan" mode="currency" currency="JPY" locale="jp-JP" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 1500,
            value2: 2500,
            value3: 4250,
            value4: 5002
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="currency-us" class="font-bold block mb-2"> United States </label>
            <InputNumber v-model="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US" />
        </div>
        <div class="flex-auto">
            <label for="currency-germany" class="font-bold block mb-2"> Germany </label>
            <InputNumber v-model="value2" inputId="currency-germany" mode="currency" currency="EUR" locale="de-DE" />
        </div>
        <div class="flex-auto">
            <label for="currency-india" class="font-bold block mb-2"> India </label>
            <InputNumber v-model="value3" inputId="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
        </div>
        <div class="flex-auto">
            <label for="currency-japan" class="font-bold block mb-2"> Japan </label>
            <InputNumber v-model="value4" inputId="currency-japan" mode="currency" currency="JPY" locale="jp-JP" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(1500);
const value2 = ref(2500);
const value3 = ref(4250);
const value4 = ref(5002);
<\/script>`}}}},le=e("p",null,[s("Monetary values are enabled by setting "),e("i",null,"mode"),s(" property as "),e("i",null,"currency"),s(". In this setting, "),e("i",null,"currency"),s(' property also needs to be defined using ISO 4217 standard such as "USD" for the US dollar.')],-1),ne={class:"card flex flex-wrap gap-3 p-fluid"},ae={class:"flex-auto"},ue=e("label",{for:"currency-us",class:"font-bold block mb-2"}," United States ",-1),re={class:"flex-auto"},se=e("label",{for:"currency-germany",class:"font-bold block mb-2"}," Germany ",-1),ie={class:"flex-auto"},ce=e("label",{for:"currency-india",class:"font-bold block mb-2"}," India ",-1),de={class:"flex-auto"},me=e("label",{for:"currency-japan",class:"font-bold block mb-2"}," Japan ",-1);function pe(u,o,d,c,t,b){const r=f,a=g("InputNumber"),i=h;return p(),v(_,null,[l(r,y(I(u.$attrs)),{default:x(()=>[le]),_:1},16),e("div",ne,[e("div",ae,[ue,l(a,{modelValue:t.value1,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value1=n),inputId:"currency-us",mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue"])]),e("div",re,[se,l(a,{modelValue:t.value2,"onUpdate:modelValue":o[1]||(o[1]=n=>t.value2=n),inputId:"currency-germany",mode:"currency",currency:"EUR",locale:"de-DE"},null,8,["modelValue"])]),e("div",ie,[ce,l(a,{modelValue:t.value3,"onUpdate:modelValue":o[2]||(o[2]=n=>t.value3=n),inputId:"currency-india",mode:"currency",currency:"INR",currencyDisplay:"code",locale:"en-IN"},null,8,["modelValue"])]),e("div",de,[me,l(a,{modelValue:t.value4,"onUpdate:modelValue":o[3]||(o[3]=n=>t.value4=n),inputId:"currency-japan",mode:"currency",currency:"JPY",locale:"jp-JP"},null,8,["modelValue"])])]),l(i,{code:t.code},null,8,["code"])],64)}const be=m(oe,[["render",pe]]),fe={data(){return{value:50,code:{basic:'<InputNumber v-model="value" disabled prefix="%" />',options:`<template>
    <div class="card flex justify-content-center">
        <InputNumber v-model="value" disabled prefix="%" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 50
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InputNumber v-model="value" disabled prefix="%" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(50);
<\/script>`}}}},ve=e("p",null,[s("When "),e("i",null,"disabled"),s(" is present, the element cannot be edited and focused.")],-1),_e={class:"card flex justify-content-center"};function xe(u,o,d,c,t,b){const r=f,a=g("InputNumber"),i=h;return p(),v(_,null,[l(r,y(I(u.$attrs)),{default:x(()=>[ve]),_:1},16),e("div",_e,[l(a,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n),disabled:"",prefix:"%"},null,8,["modelValue"])]),l(i,{code:t.code},null,8,["code"])],64)}const ye=m(fe,[["render",xe]]),Ie={data(){return{value:null,code:{basic:`<span class="p-float-label">
    <InputNumber id="number-input" v-model="value" />
    <label for="number-input">Number</label>
</span>`,options:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <InputNumber id="number-input" v-model="value" />
            <label for="number-input">Number</label>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <InputNumber id="number-input" v-model="value" />
            <label for="number-input">Number</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`}}}},he=e("p",null,"A floating label appears on top of the input field when focused.",-1),ge={class:"card flex justify-content-center"},Ne={class:"p-float-label"},De=e("label",{for:"number-input"},"Number",-1);function $e(u,o,d,c,t,b){const r=f,a=g("InputNumber"),i=h;return p(),v(_,null,[l(r,y(I(u.$attrs)),{default:x(()=>[he]),_:1},16),e("div",ge,[e("span",Ne,[l(a,{id:"number-input",modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n)},null,8,["modelValue"]),De])]),l(i,{code:t.code},null,8,["code"])],64)}const Se=m(Ie,[["render",$e]]),we={data(){return{code:{basic:"import InputNumber from 'primevue/inputnumber';"}}}};function Be(u,o,d,c,t,b){const r=f,a=h;return p(),v(_,null,[l(r,y(I(u.$attrs)),null,16),l(a,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Ve=m(we,[["render",Be]]),ke={data(){return{value:null,code:{basic:'<InputNumber v-model="value" class="p-invalid" mode="decimal" :minFractionDigits="2" />',options:`<template>
    <div class="card flex justify-content-center">
        <InputNumber v-model="value" class="p-invalid" mode="decimal" :minFractionDigits="2" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InputNumber v-model="value" class="p-invalid" mode="decimal" :minFractionDigits="2" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`}}}},Ue=e("p",null,[s("Invalid state style is added using the "),e("i",null,"p-invalid"),s(" class to indicate a failed validation.")],-1),Fe={class:"card flex justify-content-center"};function Ce(u,o,d,c,t,b){const r=f,a=g("InputNumber"),i=h;return p(),v(_,null,[l(r,y(I(u.$attrs)),{default:x(()=>[Ue]),_:1},16),e("div",Fe,[l(a,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n),class:"p-invalid",mode:"decimal",minFractionDigits:2},null,8,["modelValue"])]),l(i,{code:t.code},null,8,["code"])],64)}const Te=m(ke,[["render",Ce]]),Ee={data(){return{value1:151351,value2:115744,value3:635524,value4:732762,code:{basic:`<InputNumber v-model="value1" inputId="locale-user" :minFractionDigits="2" />
<InputNumber v-model="value2" inputId="locale-us" locale="en-US" :minFractionDigits="2" />
<InputNumber v-model="value3" inputId="locale-german" locale="de-DE" :minFractionDigits="2" />
<InputNumber v-model="value4" inputId="locale-indian" locale="en-IN" :minFractionDigits="2" />`,options:`<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="locale-user" class="font-bold block mb-2"> User Locale </label>
            <InputNumber v-model="value1" inputId="locale-user" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-us" class="font-bold block mb-2"> United States Locale </label>
            <InputNumber v-model="value2" inputId="locale-us" locale="en-US" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-german" class="font-bold block mb-2"> German Locale </label>
            <InputNumber v-model="value3" inputId="locale-german" locale="de-DE" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-indian" class="font-bold block mb-2"> Indian Locale </label>
            <InputNumber v-model="value4" inputId="locale-indian" locale="en-IN" :minFractionDigits="2" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 151351,
            value2: 115744,
            value3: 635524,
            value4: 732762
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="locale-user" class="font-bold block mb-2"> User Locale </label>
            <InputNumber v-model="value1" inputId="locale-user" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-us" class="font-bold block mb-2"> United States Locale </label>
            <InputNumber v-model="value2" inputId="locale-us" locale="en-US" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-german" class="font-bold block mb-2"> German Locale </label>
            <InputNumber v-model="value3" inputId="locale-german" locale="de-DE" :minFractionDigits="2" />
        </div>
        <div class="flex-auto">
            <label for="locale-indian" class="font-bold block mb-2"> Indian Locale </label>
            <InputNumber v-model="value4" inputId="locale-indian" locale="en-IN" :minFractionDigits="2" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(151351);
const value2 = ref(115744);
const value3 = ref(635524);
const value4 = ref(732762);
<\/script>`}}}},Me=e("p",null,[s("Localization information such as grouping and decimal symbols are defined with the "),e("i",null,"locale"),s(" property which defaults to the user locale.")],-1),Le={class:"card flex flex-wrap gap-3 p-fluid"},je={class:"flex-auto"},ze=e("label",{for:"locale-user",class:"font-bold block mb-2"}," User Locale ",-1),Pe={class:"flex-auto"},Ge=e("label",{for:"locale-us",class:"font-bold block mb-2"}," United States Locale ",-1),Re={class:"flex-auto"},Je=e("label",{for:"locale-german",class:"font-bold block mb-2"}," German Locale ",-1),Ae={class:"flex-auto"},Oe=e("label",{for:"locale-indian",class:"font-bold block mb-2"}," Indian Locale ",-1);function Ye(u,o,d,c,t,b){const r=f,a=g("InputNumber"),i=h;return p(),v(_,null,[l(r,y(I(u.$attrs)),{default:x(()=>[Me]),_:1},16),e("div",Le,[e("div",je,[ze,l(a,{modelValue:t.value1,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value1=n),inputId:"locale-user",minFractionDigits:2},null,8,["modelValue"])]),e("div",Pe,[Ge,l(a,{modelValue:t.value2,"onUpdate:modelValue":o[1]||(o[1]=n=>t.value2=n),inputId:"locale-us",locale:"en-US",minFractionDigits:2},null,8,["modelValue"])]),e("div",Re,[Je,l(a,{modelValue:t.value3,"onUpdate:modelValue":o[2]||(o[2]=n=>t.value3=n),inputId:"locale-german",locale:"de-DE",minFractionDigits:2},null,8,["modelValue"])]),e("div",Ae,[Oe,l(a,{modelValue:t.value4,"onUpdate:modelValue":o[3]||(o[3]=n=>t.value4=n),inputId:"locale-indian",locale:"en-IN",minFractionDigits:2},null,8,["modelValue"])])]),l(i,{code:t.code},null,8,["code"])],64)}const We=m(Ee,[["render",Ye]]),qe={data(){return{value1:42723,value2:58151,value3:2351.35,value4:50,code:{basic:`<InputNumber v-model="value1" inputId="integeronly" />
<InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" />
<InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" />
<InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" />`,options:`<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="integeronly" class="font-bold block mb-2"> Integer Only </label>
            <InputNumber v-model="value1" inputId="integeronly" />
        </div>
        <div class="flex-auto">
            <label for="withoutgrouping" class="font-bold block mb-2"> Without Grouping </label>
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" />
        </div>
        <div class="flex-auto">
            <label for="minmaxfraction" class="font-bold block mb-2"> Min-Max Fraction Digits </label>
            <InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" />
        </div>
        <div class="flex-auto">
            <label for="minmax" class="font-bold block mb-2"> Min-Max Boundaries </label>
            <InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 42723,
            value2: 58151,
            value3: 2351.35,
            value4: 50
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="integeronly" class="font-bold block mb-2"> Integer Only </label>
            <InputNumber v-model="value1" inputId="integeronly" />
        </div>
        <div class="flex-auto">
            <label for="withoutgrouping" class="font-bold block mb-2"> Without Grouping </label>
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" />
        </div>
        <div class="flex-auto">
            <label for="minmaxfraction" class="font-bold block mb-2"> Min-Max Fraction Digits </label>
            <InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" />
        </div>
        <div class="flex-auto">
            <label for="minmax" class="font-bold block mb-2"> Min-Max Boundaries </label>
            <InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(42723);
const value2 = ref(58151);
const value3 = ref(2351.35);
const value4 = ref(50);
<\/script>`}}}},He=e("p",null,[s("InputNumber is used as a controlled input with "),e("i",null,"v-model"),s(" property.")],-1),Ke={class:"card flex flex-wrap gap-3 p-fluid"},Qe={class:"flex-auto"},Xe=e("label",{for:"integeronly",class:"font-bold block mb-2"}," Integer Only ",-1),Ze={class:"flex-auto"},et=e("label",{for:"withoutgrouping",class:"font-bold block mb-2"}," Without Grouping ",-1),tt={class:"flex-auto"},ot=e("label",{for:"minmaxfraction",class:"font-bold block mb-2"}," Min-Max Fraction Digits ",-1),lt={class:"flex-auto"},nt=e("label",{for:"minmax",class:"font-bold block mb-2"}," Min-Max Boundaries ",-1);function at(u,o,d,c,t,b){const r=f,a=g("InputNumber"),i=h;return p(),v(_,null,[l(r,y(I(u.$attrs)),{default:x(()=>[He]),_:1},16),e("div",Ke,[e("div",Qe,[Xe,l(a,{modelValue:t.value1,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value1=n),inputId:"integeronly"},null,8,["modelValue"])]),e("div",Ze,[et,l(a,{modelValue:t.value2,"onUpdate:modelValue":o[1]||(o[1]=n=>t.value2=n),inputId:"withoutgrouping",useGrouping:!1},null,8,["modelValue"])]),e("div",tt,[ot,l(a,{modelValue:t.value3,"onUpdate:modelValue":o[2]||(o[2]=n=>t.value3=n),inputId:"minmaxfraction",minFractionDigits:2,maxFractionDigits:5},null,8,["modelValue"])]),e("div",lt,[nt,l(a,{modelValue:t.value4,"onUpdate:modelValue":o[3]||(o[3]=n=>t.value4=n),inputId:"minmax",min:0,max:100},null,8,["modelValue"])])]),l(i,{code:t.code},null,8,["code"])],64)}const ut=m(qe,[["render",at]]),rt={data(){return{value1:20,value2:50,value3:10,value4:20,code:{basic:`<InputNumber v-model="value1" inputId="mile" suffix=" mi" />
<InputNumber v-model="value2" inputId="percent" prefix="%" />
<InputNumber v-model="value3" inputId="expiry" prefix="Expires in " suffix=" days" />
<InputNumber v-model="value4" inputId="temperature" prefix="&uarr; " suffix="℃" :min="0" :max="40" />`,options:`<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="mile" class="font-bold block mb-2"> Mile </label>
            <InputNumber v-model="value1" inputId="mile" suffix=" mi" />
        </div>
        <div class="flex-auto">
            <label for="percent" class="font-bold block mb-2"> Percent </label>
            <InputNumber v-model="value2" inputId="percent" prefix="%" />
        </div>
        <div class="flex-auto">
            <label for="expiry" class="font-bold block mb-2"> Expiry </label>
            <InputNumber v-model="value3" inputId="expiry" prefix="Expires in " suffix=" days" />
        </div>
        <div class="flex-auto">
            <label for="temperature" class="font-bold block mb-2"> Temperature </label>
            <InputNumber v-model="value4" inputId="temperature" prefix="&uarr; " suffix="℃" :min="0" :max="40" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: 20,
            value2: 50,
            value3: 10,
            value4: 20
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="mile" class="font-bold block mb-2"> Mile </label>
            <InputNumber v-model="value1" inputId="mile" suffix=" mi" />
        </div>
        <div class="flex-auto">
            <label for="percent" class="font-bold block mb-2"> Percent </label>
            <InputNumber v-model="value2" inputId="percent" prefix="%" />
        </div>
        <div class="flex-auto">
            <label for="expiry" class="font-bold block mb-2"> Expiry </label>
            <InputNumber v-model="value3" inputId="expiry" prefix="Expires in " suffix=" days" />
        </div>
        <div class="flex-auto">
            <label for="temperature" class="font-bold block mb-2"> Temperature </label>
            <InputNumber v-model="value4" inputId="temperature" prefix="&uarr; " suffix="℃" :min="0" :max="40" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(20);
const value2 = ref(50);
const value3 = ref(10);
const value4 = ref(20);
<\/script>`}}}},st=e("p",null,[s("Custom texts e.g. units can be placed before or after the input section with the "),e("i",null,"prefix"),s(" and "),e("i",null,"suffix"),s(" properties.")],-1),it={class:"card flex flex-wrap gap-3 p-fluid"},ct={class:"flex-auto"},dt=e("label",{for:"mile",class:"font-bold block mb-2"}," Mile ",-1),mt={class:"flex-auto"},pt=e("label",{for:"percent",class:"font-bold block mb-2"}," Percent ",-1),bt={class:"flex-auto"},ft=e("label",{for:"expiry",class:"font-bold block mb-2"}," Expiry ",-1),vt={class:"flex-auto"},_t=e("label",{for:"temperature",class:"font-bold block mb-2"}," Temperature ",-1);function xt(u,o,d,c,t,b){const r=f,a=g("InputNumber"),i=h;return p(),v(_,null,[l(r,y(I(u.$attrs)),{default:x(()=>[st]),_:1},16),e("div",it,[e("div",ct,[dt,l(a,{modelValue:t.value1,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value1=n),inputId:"mile",suffix:" mi"},null,8,["modelValue"])]),e("div",mt,[pt,l(a,{modelValue:t.value2,"onUpdate:modelValue":o[1]||(o[1]=n=>t.value2=n),inputId:"percent",prefix:"%"},null,8,["modelValue"])]),e("div",bt,[ft,l(a,{modelValue:t.value3,"onUpdate:modelValue":o[2]||(o[2]=n=>t.value3=n),inputId:"expiry",prefix:"Expires in ",suffix:" days"},null,8,["modelValue"])]),e("div",vt,[_t,l(a,{modelValue:t.value4,"onUpdate:modelValue":o[3]||(o[3]=n=>t.value4=n),inputId:"temperature",prefix:"↑ ",suffix:"℃",min:0,max:40},null,8,["modelValue"])])]),l(i,{code:t.code},null,8,["code"])],64)}const yt=m(rt,[["render",xt]]),It={data(){return{value:50,code:{basic:`<InputNumber v-model="value" showButtons buttonLayout="vertical" style="width: 4rem"
    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />`,options:`<template>
    <div class="card flex justify-content-center">
        <InputNumber v-model="value" showButtons buttonLayout="vertical" style="width: 4rem"
            decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 50
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InputNumber v-model="value" showButtons buttonLayout="vertical" style="width: 4rem"
            decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
    </div>
</template>

<script setup>
import { ref } from "vuetest";

const value = ref(50);
<\/script>`}}}},ht=e("p",null,[s("Buttons can also placed vertically by setting "),e("i",null,"buttonLayout"),s(" as "),e("i",null,"vertical"),s(".")],-1),gt={class:"card flex justify-content-center"};function Nt(u,o,d,c,t,b){const r=f,a=g("InputNumber"),i=h;return p(),v(_,null,[l(r,y(I(u.$attrs)),{default:x(()=>[ht]),_:1},16),e("div",gt,[l(a,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n),showButtons:"",buttonLayout:"vertical",style:{width:"4rem"},decrementButtonClassName:"p-button-secondary",incrementButtonClassName:"p-button-secondary",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"},null,8,["modelValue"])]),l(i,{code:t.code},null,8,["code"])],64)}const Dt=m(It,[["render",Nt]]),$t={setup(){const{handleSubmit:u,resetForm:o}=T(),{value:d,errorMessage:c,errors:t}=E("value",r),b=V();function r(i){return i?!0:"Year is required."}const a=u((i,n)=>{i.value&&i.value>=1960&&i.value<=2050?(b.add({severity:"info",summary:"Form Submitted",detail:i.value,life:3e3}),o()):n.setErrors({value:"Enter a valid year."})});return{value:d,handleSubmit:u,onSubmit:a,errorMessage:c,errors:t}},data(){return{code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="year">Enter a year between 1960-2050.</label>
            <InputNumber id="year" v-model="value" :class="{ 'p-invalid': errorMessage }" :useGrouping="false" aria-describedby="number-error" />
            <small class="p-error" id="number-error">{{ errorMessage || (errors.length > 0 ? errors : '&nbsp;') }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="year">Enter a year between 1960-2050.</label>
            <InputNumber id="year" v-model="value" :class="{ 'p-invalid': errorMessage }" :useGrouping="false" aria-describedby="number-error" />
            <small class="p-error" id="number-error">{{ errorMessage || (errors.length > 0 ? errors : '&nbsp;') }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

export default {
    setup() {
        const { handleSubmit, resetForm } = useForm();
        const { value, errorMessage, errors } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Year is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values, actions) => {
            if (values.value && values.value >= 1960 && values.value <= 2050) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
                resetForm();
            } else {
                actions.setErrors({ value: 'Enter a valid year.' });
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage, errors };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="year">Enter a year between 1960-2050.</label>
            <InputNumber id="year" v-model="value" :class="{ 'p-invalid': errorMessage }" :useGrouping="false" aria-describedby="number-error" />
            <small class="p-error" id="number-error">{{ errorMessage || (errors.length > 0 ? errors : '&nbsp;') }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage, errors } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'Year is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values, actions) => {
    if (values.value && values.value >= 1960 && values.value <= 2050) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm();
    } else {
        actions.setErrors({ value: 'Enter a valid year.' });
    }
});
<\/script>
`}}}},St=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),s(" is a popular library for handling forms in Vue.")],-1),wt={class:"card flex justify-content-center"},Bt=e("label",{for:"year"},"Enter a year between 1960-2050.",-1),Vt={id:"number-error",class:"p-error"};function kt(u,o,d,c,t,b){const r=f,a=g("InputNumber"),i=g("Button"),n=h;return p(),v(_,null,[l(r,y(I(u.$attrs)),{default:x(()=>[St]),_:1},16),e("div",wt,[e("form",{onSubmit:o[1]||(o[1]=(...N)=>c.onSubmit&&c.onSubmit(...N)),class:"flex flex-column gap-2"},[Bt,l(a,{id:"year",modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=N=>c.value=N),class:k({"p-invalid":c.errorMessage}),useGrouping:!1,"aria-describedby":"number-error"},null,8,["modelValue","class"]),e("small",Vt,S(c.errorMessage||(c.errors.length>0?c.errors:" ")),1),l(i,{type:"submit",label:"Submit"})],32)]),l(n,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const Ut=m($t,[["render",kt]]),Ft={data(){return{value:20,code:{basic:`<InputNumber
    v-model="value"
    showButtons
    buttonLayout="horizontal"
    :step="0.25"
    incrementButtonIcon="pi pi-plus"
    decrementButtonIcon="pi pi-minus"
    mode="currency"
    currency="EUR"
    :pt="{
        incrementButton: { class: 'bg-teal-500 border-teal-500' },
        decrementButton: { class: 'bg-orange-500 border-orange-500' }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <InputNumber
            v-model="value"
            showButtons
            buttonLayout="horizontal"
            :step="0.25"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="currency"
            currency="EUR"
            :pt="{
                incrementButton: { class: 'bg-teal-500 border-teal-500' },
                decrementButton: { class: 'bg-orange-500 border-orange-500' }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 20
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InputNumber
            v-model="value"
            showButtons
            buttonLayout="horizontal"
            :step="0.25"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="currency"
            currency="EUR"
            :pt="{
                incrementButton: { class: 'bg-teal-500 border-teal-500' },
                decrementButton: { class: 'bg-orange-500 border-orange-500' }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(20);
<\/script>`}}}},Ct={class:"card flex justify-content-center"};function Tt(u,o,d,c,t,b){const r=f,a=g("InputNumber"),i=h;return p(),v(_,null,[l(r,y(I(u.$attrs)),null,16),e("div",Ct,[l(a,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n),showButtons:"",buttonLayout:"horizontal",step:.25,incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus",mode:"currency",currency:"EUR",pt:{incrementButton:{class:"bg-teal-500 border-teal-500"},decrementButton:{class:"bg-orange-500 border-orange-500"}}},null,8,["modelValue"])]),l(i,{code:t.code},null,8,["code"])],64)}const Et=m(Ft,[["render",Tt]]),Mt={},Lt=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/inputnumber.jpg"})],-1);function jt(u,o){const d=f;return p(),v(_,null,[l(d,y(I(u.$attrs)),{default:x(()=>[e("p",null,S(u.$attrs.description),1)]),_:1},16),Lt],64)}const zt=m(Mt,[["render",jt]]),Pt={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:zt},{id:"pt.doc.inputnumber",label:"InputNumber PT Options",component:U,data:M("InputNumber")},{id:"pt.demo",label:"Demo",component:Et}]}}},Gt={class:"doc-main"},Rt=e("div",{class:"doc-intro"},[e("h1",null,"InputNumber Pass Through")],-1);function Jt(u,o,d,c,t,b){const r=w,a=B;return p(),v(_,null,[e("div",Gt,[Rt,l(r,{docs:t.docs},null,8,["docs"])]),l(a,{docs:t.docs},null,8,["docs"])],64)}const At=m(Pt,[["render",Jt]]),Ot={},Yt=e("p",null,"List of class names used in the styled mode.",-1),Wt=F('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-inputnumber</td><td>Container element</td></tr><tr><td>p-inputnumber-stacked</td><td>Container element with stacked buttons.</td></tr><tr><td>p-inputnumber-horizontal</td><td>Container element with horizontal buttons.</td></tr><tr><td>p-inputnumber-vertical</td><td>Container element with vertical buttons.</td></tr><tr><td>p-inputnumber-input</td><td>Input element</td></tr><tr><td>p-inputnumber-button</td><td>Input element</td></tr><tr><td>p-inputnumber-button-up</td><td>Increment button</td></tr><tr><td>p-inputnumber-button-down</td><td>Decrement button</td></tr><tr><td>p-inputnumber-button-icon</td><td>Button icon</td></tr></tbody></table></div>',1);function qt(u,o){const d=f;return p(),v(_,null,[l(d,y(I(u.$attrs)),{default:x(()=>[Yt]),_:1},16),Wt],64)}const Ht=m(Ot,[["render",qt]]),Kt={data(){return{code1:{basic:`
export default {
    inputnumber: {
        root: 'w-full inline-flex',
        input: ({ props }) => ({
            class: [{ 'rounded-tr-none rounded-br-none': props.showButtons && props.buttonLayout == 'stacked' }]
        }),
        buttongroup: ({ props }) => ({
            class: [{ 'flex flex-col': props.showButtons && props.buttonLayout == 'stacked' }]
        }),
        incrementbutton: ({ props }) => ({
            class: [
                'flex !items-center !justify-center',
                {
                    'rounded-br-none rounded-bl-none rounded-bl-none !p-0 flex-1 w-[3rem]': props.showButtons && props.buttonLayout == 'stacked'
                }
            ]
        }),
        label: 'hidden',
        decrementbutton: ({ props }) => ({
            class: [
                'flex !items-center !justify-center',
                {
                    'rounded-tr-none rounded-tl-none rounded-tl-none !p-0 flex-1 w-[3rem]': props.showButtons && props.buttonLayout == 'stacked'
                }
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card flex flex-wrap">
        <div class="flex-auto">
            <label for="integeronly" class="font-bold block mb-2 text-gray-700 dark:text-white/80"> Integer Only </label>
            <InputNumber v-model="value1" inputId="integeronly" />
        </div>
        <div class="flex-auto">
            <label for="withoutgrouping" class="font-bold block mb-2 text-gray-700 dark:text-white/80"> Without Grouping </label>
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" />
        </div>
        <div class="flex-auto">
            <label for="minmaxfraction" class="font-bold block mb-2 text-gray-700 dark:text-white/80"> Min-Max Fraction Digits </label>
            <InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" />
        </div>
        <div class="flex-auto">
            <label for="minmax" class="font-bold block mb-2 text-gray-700 dark:text-white/80"> Min-Max Boundaries </label>
            <InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(42723);
const value2 = ref(58151);
const value3 = ref(2351.35);
const value4 = ref(50);
<\/script>`}}}},Qt=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Xt(u,o,d,c,t,b){const r=L,a=h,i=f;return p(),D(i,y(I(u.$attrs)),{default:x(()=>[e("p",null,[s(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),l(r,{to:"/tailwind"},{default:x(()=>[s("Tailwind Customization")]),_:1}),s(" section for an example. ")]),l(a,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Qt,l(a,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const Zt=m(Kt,[["render",Xt]]),eo={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ht},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Zt}]}]}}},to={class:"doc-main"},oo=e("div",{class:"doc-intro"},[e("h1",null,"InputNumber Theming")],-1);function lo(u,o,d,c,t,b){const r=w,a=B;return p(),v(_,null,[e("div",to,[oo,l(r,{docs:t.docs},null,8,["docs"])]),l(a,{docs:t.docs},null,8,["docs"])],64)}const no=m(eo,[["render",lo]]),ao={data(){return{docs:[{id:"import",label:"Import",component:Ve},{id:"numerals",label:"Numerals",component:ut},{id:"locale",label:"Locale",component:We},{id:"currency",label:"Currency",component:be},{id:"prefixsuffix",label:"Prefix & Suffix",component:yt},{id:"buttons",label:"Buttons",component:te},{id:"vertical",label:"Vertical",component:Dt},{id:"floatlabel",label:"Float Label",component:Se},{id:"invalid",label:"Invalid",component:Te},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Ut}]},{id:"disabled",label:"Disabled",component:ye},{id:"accessibility",label:"Accessibility",component:A}],ptComponent:At,themingDoc:no}}};function uo(u,o,d,c,t,b){const r=C;return p(),D(r,{title:"Vue InputNumber Component",header:"InputNumber",description:"InputNumber is an input component to provide numerical input.",componentDocs:t.docs,apiDocs:["InputNumber"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const mo=m(ao,[["render",uo]]);export{mo as default};
