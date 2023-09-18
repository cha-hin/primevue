import{_ as d,o as u,e as w,w as g,a as o,m as k,b as e,f as a,p as T,h as f,j as y,c as _,n as v,g as x,F as b,B as V,A as C,t as S,D as I,k as B,l as D,v as F,x as j}from"./entry.68beb385.js";import{u as M,a as L}from"./vee-validate.esm.3b430014.js";import{g as P}from"./PTHelper.11558b27.js";import{_ as z}from"./PrimeVueNuxtLink.f51d0c80.js";const N={data(){return{code:{basic:`<span id="rememberme">Remember Me</span>
<ToggleButton aria-labelledby="rememberme" />

<ToggleButton aria-label="Remember Me" />`}}}},A=e("h3",null,"Screen Reader",-1),U=e("p",null,[a(" ToggleButton component uses a hidden native checkbox element as the switch element internally that is only visible to screen readers. Value to describe the component can be defined with "),e("i",null,"aria-labelledby"),a(" or "),e("i",null,"aria-label"),a(" props, it is highly suggested to use either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an aria label that does not change related to state. ")],-1),q=e("h3",null,"Keyboard Support",-1),R=e("p",null,"Keyboard interaction is derived from the native browser handling of checkboxs in a group.",-1),K=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the button.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the checked state.")])])])],-1);function E(n,s,i,r,t,m){const l=T,c=f;return u(),w(c,k({id:"accessibility",label:"Accessibility"},n.$attrs),{default:g(()=>[A,U,o(l,k({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},n.$attrs),null,16,["code"]),q,R,K]),_:1},16)}const O=d(N,[["render",E]]),W={data(){return{checked:!1,code:{basic:'<ToggleButton v-model="checked" />',options:`<template>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked" class="w-8rem" />
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
        <ToggleButton v-model="checked" class="w-8rem" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`}}}},G=e("p",null,"Two-way binding to a boolean property is defined using the standard v-model directive.",-1),H={class:"card flex justify-content-center"};function J(n,s,i,r,t,m){const l=f,c=y("ToggleButton"),p=T;return u(),_(b,null,[o(l,v(x(n.$attrs)),{default:g(()=>[G]),_:1},16),e("div",H,[o(c,{modelValue:t.checked,"onUpdate:modelValue":s[0]||(s[0]=h=>t.checked=h),class:"w-8rem"},null,8,["modelValue"])]),o(p,{code:t.code},null,8,["code"])],64)}const Q=d(W,[["render",J]]),X={data(){return{checked:!1,code:{basic:`<ToggleButton v-model="checked1" onLabel="I confirm" offLabel="I reject"
    onIcon="pi pi-check" offIcon="pi pi-times" class="w-9rem" />`,options:`<template>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked" onLabel="I confirm" offLabel="I reject"
            onIcon="pi pi-check" offIcon="pi pi-times" class="w-9rem" />
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
        <ToggleButton v-model="checked" onLabel="I confirm" offLabel="I reject"
            onIcon="pi pi-check" offIcon="pi pi-times" class="w-9rem" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`}}}},Y=e("p",null,[a("Icons and Labels can be customized using "),e("i",null,"onLabel"),a(", "),e("i",null,"offLabel"),a(", "),e("i",null,"onIcon"),a(" and "),e("i",null,"offIcon"),a(" properties.")],-1),Z={class:"card flex justify-content-center"};function ee(n,s,i,r,t,m){const l=f,c=y("ToggleButton"),p=T;return u(),_(b,null,[o(l,v(x(n.$attrs)),{default:g(()=>[Y]),_:1},16),e("div",Z,[o(c,{modelValue:t.checked,"onUpdate:modelValue":s[0]||(s[0]=h=>t.checked=h),onLabel:"I confirm",offLabel:"I reject",onIcon:"pi pi-check",offIcon:"pi pi-times",class:"w-9rem","aria-label":"do you confirm"},null,8,["modelValue"])]),o(p,{code:t.code},null,8,["code"])],64)}const te=d(X,[["render",ee]]),oe={data(){return{checked:!1,code:{basic:`<ToggleButton v-model="checked" disabled onIcon="pi pi-check" offIcon="pi pi-times"
    class="w-full sm:w-10rem" aria-label="Confirmation" />`,options:`<template>
    <div class="card flex justify-content-center">
        <ToggleButton v-model="checked" disabled onIcon="pi pi-check" offIcon="pi pi-times"
            class="w-full sm:w-10rem" aria-label="Confirmation" />
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
        <ToggleButton v-model="checked" disabled onIcon="pi pi-check" offIcon="pi pi-times"
            class="w-full sm:w-10rem" aria-label="Confirmation" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`}}}},ne=e("p",null,[a("When "),e("i",null,"disabled"),a(" is present, the element cannot be edited and focused.")],-1),se={class:"card flex justify-content-center"};function ce(n,s,i,r,t,m){const l=f,c=y("ToggleButton"),p=T;return u(),_(b,null,[o(l,v(x(n.$attrs)),{default:g(()=>[ne]),_:1},16),e("div",se,[o(c,{modelValue:t.checked,"onUpdate:modelValue":s[0]||(s[0]=h=>t.checked=h),disabled:"",onIcon:"pi pi-check",offIcon:"pi pi-times",class:"w-full sm:w-10rem","aria-label":"Confirmation"},null,8,["modelValue"])]),o(p,{code:t.code},null,8,["code"])],64)}const le=d(oe,[["render",ce]]),re={data(){return{code:{basic:"import ToggleButton from 'primevue/togglebutton';"}}}};function ie(n,s,i,r,t,m){const l=f,c=T;return u(),_(b,null,[o(l,v(x(n.$attrs)),null,16),o(c,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ae=d(re,[["render",ie]]),de={setup(){const{handleSubmit:n,resetForm:s}=M(),{value:i,errorMessage:r}=L("value",m),t=V();function m(c){return c?!0:"Value is required."}const l=n(c=>{c.value&&(t.add({severity:"info",summary:"Form Submitted",detail:"The form is successfully submitted.",life:3e3}),s())});return{value:i,handleSubmit:n,onSubmit:l,errorMessage:r}},data(){return{nodes:null,code:{basic:`<div class="card flex justify-content-center">
    <form @submit="onSubmit" class="flex flex-column gap-2">
        <ToggleButton v-model="value" :class="['w-8rem', { 'p-invalid': errorMessage }]" aria-describedby="text-error" />
        <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
        <Button type="submit" label="Submit" />
    </form>
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <ToggleButton v-model="value" :class="['w-8rem', { 'p-invalid': errorMessage }]" aria-describedby="text-error" />
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
            <ToggleButton v-model="value" :class="['w-8rem', { 'p-invalid': errorMessage }]" aria-describedby="text-error" />
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
<\/script>`}}}},ue=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),a(" is a popular library for handling forms in Vue.")],-1),me={class:"card flex justify-content-center"},pe={id:"text-error",class:"p-error"};function fe(n,s,i,r,t,m){const l=f,c=y("ToggleButton"),p=y("Button"),h=T;return u(),_(b,null,[o(l,v(x(n.$attrs)),{default:g(()=>[ue]),_:1},16),e("div",me,[e("form",{onSubmit:s[1]||(s[1]=(...$)=>r.onSubmit&&r.onSubmit(...$)),class:"flex flex-column gap-2"},[o(c,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=$=>r.value=$),class:C(["w-8rem",{"p-invalid":r.errorMessage}]),"aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",pe,S(r.errorMessage||" "),1),o(p,{type:"submit",label:"Submit"})],32)]),o(h,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const _e=d(de,[["render",fe]]),be={data(){return{checked:!1,code:{basic:`<ToggleButton
    v-model="checked"
    :pt="{
        root: {
            class: ['w-8rem', { 'bg-teal-400 border-white': checked }]
        }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <ToggleButton
            v-model="checked"
            :pt="{
                root: {
                    class: ['w-8rem', { 'bg-teal-400 border-white': checked }]
                }
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
        <ToggleButton
            v-model="checked"
            :pt="{
                root: {
                    class: ['w-8rem', { 'bg-teal-400 border-white': checked }]
                }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`}}}},he={class:"card flex justify-content-center"};function ge(n,s,i,r,t,m){const l=f,c=y("ToggleButton"),p=T;return u(),_(b,null,[o(l,v(x(n.$attrs)),null,16),e("div",he,[o(c,{modelValue:t.checked,"onUpdate:modelValue":s[0]||(s[0]=h=>t.checked=h),pt:{root:{class:["w-8rem",{"bg-teal-400 border-white":t.checked}]}}},null,8,["modelValue","pt"])]),o(p,{code:t.code},null,8,["code"])],64)}const ve=d(be,[["render",ge]]),xe={},Te=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/togglebutton.jpg"})],-1);function ye(n,s){const i=f;return u(),_(b,null,[o(i,v(x(n.$attrs)),{default:g(()=>[e("p",null,S(n.$attrs.description),1)]),_:1},16),Te],64)}const $e=d(xe,[["render",ye]]),we={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:$e},{id:"pt.doc.steps",label:"ToggleButton PT Options",component:I,data:P("ToggleButton")},{id:"pt.demo",label:"Demo",component:ve}]}}},ke={class:"doc-main"},Se=e("div",{class:"doc-intro"},[e("h1",null,"ToggleButton Pass Through")],-1);function Be(n,s,i,r,t,m){const l=B,c=D;return u(),_(b,null,[e("div",ke,[Se,o(l,{docs:t.docs},null,8,["docs"])]),o(c,{docs:t.docs},null,8,["docs"])],64)}const De=d(we,[["render",Be]]),Ve={},Ce=e("p",null,"List of class names used in the styled mode.",-1),Ie=F('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-togglebutton</td><td>Container element</td></tr><tr><td>p-button-icon</td><td>Icon element.</td></tr><tr><td>p-button-text</td><td>Label element.</td></tr></tbody></table></div>',1);function Fe(n,s){const i=f;return u(),_(b,null,[o(i,v(x(n.$attrs)),{default:g(()=>[Ce]),_:1},16),Ie],64)}const je=d(Ve,[["render",Fe]]),Me={data(){return{code1:{basic:`
export default {
    togglebutton: {
        root: ({ props, context }) => ({
            class: [
                'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
                'px-4 py-3 rounded-md text-base w-36',
                'border transition duration-200 ease-in-out',
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
                },
                {
                    'bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:border-gray-300 dark:hover:bg-gray-800/70 hover:text-gray-700 dark:hover:text-white/80':
                        !props.modelValue,
                    'bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600': props.modelValue
                },
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        label: 'font-bold text-center w-full',
        icon: ({ props }) => ({
            class: [
                ' mr-2',
                {
                    'text-gray-600 dark:text-white/70': !props.modelValue,
                    'text-white': props.modelValue
                }
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <ToggleButton v-model="checked" class="w-8rem" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`}}}},Le=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Pe(n,s,i,r,t,m){const l=z,c=T,p=f;return u(),w(p,v(x(n.$attrs)),{default:g(()=>[e("p",null,[a(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(l,{to:"/tailwind"},{default:g(()=>[a("Tailwind Customization")]),_:1}),a(" section for an example. ")]),o(c,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Le,o(c,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const ze=d(Me,[["render",Pe]]),Ne={data(){return{docs:[{id:"theming.styled",label:"Styled",component:je},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ze}]}]}}},Ae={class:"doc-main"},Ue=e("div",{class:"doc-intro"},[e("h1",null,"ToggleButton Theming")],-1);function qe(n,s,i,r,t,m){const l=B,c=D;return u(),_(b,null,[e("div",Ae,[Ue,o(l,{docs:t.docs},null,8,["docs"])]),o(c,{docs:t.docs},null,8,["docs"])],64)}const Re=d(Ne,[["render",qe]]),Ke={data(){return{docs:[{id:"import",label:"Import",component:ae},{id:"basic",label:"Basic",component:Q},{id:"customized",label:"Customized",component:te},{id:"disabled",label:"Disabled",component:le},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:_e}]},{id:"accessibility",label:"Accessibility",component:O}],ptComponent:De,themingDoc:Re}}};function Ee(n,s,i,r,t,m){const l=j;return u(),w(l,{title:"Vue ToggleButton Component",header:"ToggleButton",description:"ToggleButton is used to select a boolean value using a button.",componentDocs:t.docs,apiDocs:["ToggleButton"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Je=d(Ke,[["render",Ee]]);export{Je as default};
