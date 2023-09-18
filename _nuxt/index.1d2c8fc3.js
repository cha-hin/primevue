import{_ as d,o as u,e as x,w as v,a as o,m as k,b as e,f as a,p as g,h as f,j as y,c as _,n as S,g as w,F as b,B as V,A as C,t as I,D as F,k as D,l as T,v as j,x as M}from"./entry.68beb385.js";import{u as B,a as P}from"./vee-validate.esm.3b430014.js";import{g as N}from"./PTHelper.11558b27.js";import{_ as A}from"./PrimeVueNuxtLink.f51d0c80.js";const U={data(){return{code:{basic:`<label for="switch1">Remember Me</label>
<InputSwitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<InputSwitch aria-labelledby="switch2" />

<InputSwitch aria-label="Remember Me" />`}}}},z=e("h3",null,"Screen Reader",-1),R=e("p",null,[a(" InputSwitch component uses a hidden native checkbox element with "),e("i",null,"switch"),a(" role internally that is only visible to screen readers. Value to describe the component can either be provided via "),e("i",null,"label"),a(" tag combined with "),e("i",null,"id"),a(" prop or using "),e("i",null,"aria-labelledby"),a(", "),e("i",null,"aria-label"),a(" props. ")],-1),q=e("h3",null,"Keyboard Support",-1),E=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the switch.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the checked state.")])])])],-1);function K(n,c,r,l,t,p){const i=g,s=f;return u(),x(s,k({id:"accessibility",label:"Accessibility"},n.$attrs),{default:v(()=>[z,R,o(i,k({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},n.$attrs),null,16,["code"]),q,E]),_:1},16)}const L=d(U,[["render",K]]),O={data(){return{checked:!1,code:{basic:'<InputSwitch v-model="checked" />',options:`<template>
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`}}}},W=e("p",null,"Two-way value binding is defined using v-model.",-1),G={class:"card flex justify-content-center"};function H(n,c,r,l,t,p){const i=f,s=y("InputSwitch"),m=g;return u(),_(b,null,[o(i,S(w(n.$attrs)),{default:v(()=>[W]),_:1},16),e("div",G,[o(s,{modelValue:t.checked,"onUpdate:modelValue":c[0]||(c[0]=h=>t.checked=h)},null,8,["modelValue"])]),o(m,{code:t.code},null,8,["code"])],64)}const J=d(O,[["render",H]]),Q={data(){return{checked:!1,code:{basic:'<InputSwitch v-model="checked" disabled />',options:`<template>
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" disabled />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`}}}},X=e("p",null,[a("When "),e("i",null,"disabled"),a(" is present, the element cannot be edited and focused.")],-1),Y={class:"card flex justify-content-center"};function Z(n,c,r,l,t,p){const i=f,s=y("InputSwitch"),m=g;return u(),_(b,null,[o(i,S(w(n.$attrs)),{default:v(()=>[X]),_:1},16),e("div",Y,[o(s,{modelValue:t.checked,"onUpdate:modelValue":c[0]||(c[0]=h=>t.checked=h),disabled:""},null,8,["modelValue"])]),o(m,{code:t.code},null,8,["code"])],64)}const ee=d(Q,[["render",Z]]),te={data(){return{code:{basic:"import InputSwitch from 'primevue/inputswitch';"}}}};function oe(n,c,r,l,t,p){const i=f,s=g;return u(),_(b,null,[o(i,S(w(n.$attrs)),null,16),o(s,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ne=d(te,[["render",oe]]),ce={data(){return{checked:!1,code:{basic:'<InputSwitch v-model="checked" class="p-invalid" />',options:`<template>
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" class="p-invalid" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" class="p-invalid" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`}}}},se=e("p",null,[a("Invalid state style is added using the "),e("i",null,"p-invalid"),a(" class to indicate a failed validation.")],-1),ie={class:"card flex justify-content-center"};function le(n,c,r,l,t,p){const i=f,s=y("InputSwitch"),m=g;return u(),_(b,null,[o(i,S(w(n.$attrs)),{default:v(()=>[se]),_:1},16),e("div",ie,[o(s,{modelValue:t.checked,"onUpdate:modelValue":c[0]||(c[0]=h=>t.checked=h),class:"p-invalid"},null,8,["modelValue"])]),o(m,{code:t.code},null,8,["code"])],64)}const re=d(ce,[["render",le]]),ae={data(){return{checked:!0,code:{basic:'<InputSwitch v-model="checked" />',options:`<template>
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: true
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InputSwitch v-model="checked" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(true);
<\/script>`}}}},de=e("p",null,[a("Enabling "),e("i",null,"checked"),a(" property displays the component as active initially.")],-1),ue={class:"card flex justify-content-center"};function pe(n,c,r,l,t,p){const i=f,s=y("InputSwitch"),m=g;return u(),_(b,null,[o(i,S(w(n.$attrs)),{default:v(()=>[de]),_:1},16),e("div",ue,[o(s,{modelValue:t.checked,"onUpdate:modelValue":c[0]||(c[0]=h=>t.checked=h)},null,8,["modelValue"])]),o(m,{code:t.code},null,8,["code"])],64)}const me=d(ae,[["render",pe]]),he={setup(){const{handleSubmit:n,resetForm:c}=B(),{value:r,errorMessage:l}=P("value",p),t=V();function p(s){return s?!0:"Accept is required."}const i=n(s=>{s.value&&(t.add({severity:"info",summary:"Form Submitted",detail:"The form is successfully submitted.",life:3e3}),c())});return{value:r,handleSubmit:n,onSubmit:i,errorMessage:l}},data(){return{code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <div>I've read and accept the terms & conditions.</div>
            <InputSwitch v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <div>I've read and accept the terms & conditions.</div>
            <InputSwitch v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
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
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Value is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: 'The form is successfully submitted.', life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <div>I've read and accept the terms & conditions.</div>
            <InputSwitch v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'Value is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: 'The form is successfully submitted.', life: 3000 });
        resetForm();
    }
});
<\/script>
`}}}},fe=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),a(" is a popular library for handling forms in Vue.")],-1),_e={class:"card flex justify-content-center"},be=e("div",null,"I've read and accept the terms & conditions.",-1),ve={id:"text-error",class:"p-error"};function Se(n,c,r,l,t,p){const i=f,s=y("InputSwitch"),m=y("Button"),h=g;return u(),_(b,null,[o(i,S(w(n.$attrs)),{default:v(()=>[fe]),_:1},16),e("div",_e,[e("form",{onSubmit:c[1]||(c[1]=(...$)=>l.onSubmit&&l.onSubmit(...$)),class:"flex flex-column gap-2"},[be,o(s,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=$=>l.value=$),class:C({"p-invalid":l.errorMessage}),"aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",ve,I(l.errorMessage||" "),1),o(m,{type:"submit",label:"Submit"})],32)]),o(h,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const we=d(he,[["render",Se]]),ge={data(){return{checked:!1,code:{basic:`<InputSwitch
    v-model="checked"
    :pt="{
        slider: ({ props }) => ({
            class: props.modelValue ? 'bg-teal-400' : 'bg-red-400'
        })
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <InputSwitch
            v-model="checked"
            :pt="{
                slider: ({ props }) => ({
                    class: props.modelValue ? 'bg-teal-400' : 'bg-red-400'
                })
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InputSwitch
            v-model="checked"
            :pt="{
                slider: ({ props }) => ({
                    class: props.modelValue ? 'bg-teal-400' : 'bg-red-400'
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`}}}},ye={class:"card flex justify-content-center"};function $e(n,c,r,l,t,p){const i=f,s=y("InputSwitch"),m=g;return u(),_(b,null,[o(i,S(w(n.$attrs)),null,16),e("div",ye,[o(s,{modelValue:t.checked,"onUpdate:modelValue":c[0]||(c[0]=h=>t.checked=h),pt:{slider:({props:h})=>({class:h.modelValue?"bg-teal-400":"bg-red-400"})}},null,8,["modelValue","pt"])]),o(m,{code:t.code},null,8,["code"])],64)}const xe=d(ge,[["render",$e]]),ke={},Ie=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/inputswitch.jpg"})],-1);function De(n,c){const r=f;return u(),_(b,null,[o(r,S(w(n.$attrs)),{default:v(()=>[e("p",null,I(n.$attrs.description),1)]),_:1},16),Ie],64)}const Te=d(ke,[["render",De]]),Ve={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Te},{id:"pt.doc.inputswitch",label:"InputSwitch PT Options",component:F,data:N("InputSwitch")},{id:"pt.demo",label:"Demo",component:xe}]}}},Ce={class:"doc-main"},Fe=e("div",{class:"doc-intro"},[e("h1",null,"InputSwitch Pass Through")],-1);function je(n,c,r,l,t,p){const i=D,s=T;return u(),_(b,null,[e("div",Ce,[Fe,o(i,{docs:t.docs},null,8,["docs"])]),o(s,{docs:t.docs},null,8,["docs"])],64)}const Me=d(Ve,[["render",je]]),Be={},Pe=e("p",null,"List of class names used in the styled mode.",-1),Ne=j('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-inputswitch</td><td>Container element.</td></tr><tr><td>p-inputswitch-checked</td><td>Container element in active state.</td></tr><tr><td>p-inputswitch-slider</td><td>Slider element behind the handle.</td></tr></tbody></table></div>',1);function Ae(n,c){const r=f;return u(),_(b,null,[o(r,S(w(n.$attrs)),{default:v(()=>[Pe]),_:1},16),Ne],64)}const Ue=d(Be,[["render",Ae]]),ze={data(){return{code1:{basic:`
export default {
    inputswitch: {
        root: ({ props }) => ({
            class: [
                'inline-block relative',
                'w-12 h-7',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        slider: ({ props }) => ({
            class: [
                'absolute cursor-pointer top-0 left-0 right-0 bottom-0 border border-transparent',
                'transition-colors duration-200 rounded-2xl',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                "before:absolute before:content-'' before:top-1/2 before:bg-white before:dark:bg-gray-900 before:w-5 before:h-5 before:left-1 before:-mt-2.5 before:rounded-full before:transition-duration-200",
                {
                    'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 hover:dark:bg-gray-700 ': !props.modelValue,
                    'bg-blue-500 before:transform before:translate-x-5': props.modelValue
                }
            ]
        })
    },
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <InputSwitch v-model="checked" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`}}}},Re=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function qe(n,c,r,l,t,p){const i=A,s=g,m=f;return u(),x(m,S(w(n.$attrs)),{default:v(()=>[e("p",null,[a(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(i,{to:"/tailwind"},{default:v(()=>[a("Tailwind Customization")]),_:1}),a(" section for an example. ")]),o(s,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Re,o(s,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const Ee=d(ze,[["render",qe]]),Ke={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ue},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Ee}]}]}}},Le={class:"doc-main"},Oe=e("div",{class:"doc-intro"},[e("h1",null,"InputSwitch Theming")],-1);function We(n,c,r,l,t,p){const i=D,s=T;return u(),_(b,null,[e("div",Le,[Oe,o(i,{docs:t.docs},null,8,["docs"])]),o(s,{docs:t.docs},null,8,["docs"])],64)}const Ge=d(Ke,[["render",We]]),He={data(){return{docs:[{id:"import",label:"Import",component:ne},{id:"basic",label:"Basic",component:J},{id:"preselection",label:"Preselection",component:me},{id:"invalid",label:"Invalid",component:re},{id:"disabled",label:"Disabled",component:ee},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:we}]},{id:"accessibility",label:"Accessibility",component:L}],ptComponent:Me,themingDoc:Ge}}};function Je(n,c,r,l,t,p){const i=M;return u(),x(i,{title:"Vue InputSwitch Component",header:"InputSwitch",description:"InputSwitch is used to select a boolean value.",componentDocs:t.docs,apiDocs:["InputSwitch"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const et=d(He,[["render",Je]]);export{et as default};
