import{_ as u,o as m,e as $,w as b,b as e,f as c,a as o,m as y,C as w,p as S,h as _,j as k,c as v,n as x,g,t as T,F as h,B as F,A as B,D as M,k as D,l as V,v as I,x as P}from"./entry.68beb385.js";import{u as A,a as N}from"./vee-validate.esm.3b430014.js";import{g as j}from"./PTHelper.11558b27.js";import{_ as z}from"./PrimeVueNuxtLink.f51d0c80.js";const L={data(){return{code:{basic:`<span id="chkbox1">Remember Me</span>
<TriStateCheckbox aria-labelledby="chkbox1" />

<TriStateCheckbox aria-label="Remember Me" />`}}}},U=e("h3",null,"Screen Reader",-1),q=e("i",null,"checkbox",-1),R=e("i",null,"aria-labelledby",-1),W=e("i",null,"aria-label",-1),E=e("i",null,"aria-live",-1),K=e("i",null,"trueLabel",-1),O=e("i",null,"falseLabel",-1),G=e("i",null,"nullLabel",-1),H=e("i",null,"aria",-1),J=e("h3",null,"Keyboard Support",-1),Q=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the checkbox.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles between the values.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Toggles between the values.")])])])],-1);function X(l,n,r,i,t,p){const s=w,a=S,d=_;return m(),$(d,y({id:"accessibility",label:"Accessibility"},l.$attrs),{default:b(()=>[U,e("p",null,[c(" TriStateCheckbox component uses an element with "),q,c(" role. Value to describe the component can either be provided with "),R,c(" or "),W,c(" props. Component adds an element with "),E,c(" attribute that is only visible to screen readers to read the value displayed. Values to read are defined with the "),K,c(", "),O,c(" and "),G,c(" keys of the "),H,c(" property from the "),o(s,{to:"/configuration/#locale"},{default:b(()=>[c("locale")]),_:1}),c(" API. This is an example of a custom accessibility implementation as there is no one to one mapping between the component design and the WCAG specification. ")]),o(a,y({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},l.$attrs),null,16,["code"]),J,Q]),_:1},16)}const Y=u(L,[["render",X]]),Z={data(){return{value:null,code:{basic:'<TriStateCheckbox v-model="value" />',options:`<template>
    <div class="card flex flex-column align-items-center gap-3">
        <TriStateCheckbox v-model="value" />
        <label for="checkbox">{{ value == null ? 'null' : value }}</label>
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
    <div class="card flex flex-column align-items-center gap-3">
        <TriStateCheckbox v-model="value" />
        <label for="checkbox">{{ value == null ? 'null' : value }}</label>
    </div>  
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},ee=e("p",null,"A model can be bound using the standard v-model directive.",-1),te={class:"card flex flex-column align-items-center gap-3"},oe={for:"checkbox"};function le(l,n,r,i,t,p){const s=_,a=k("TriStateCheckbox"),d=S;return m(),v(h,null,[o(s,x(g(l.$attrs)),{default:b(()=>[ee]),_:1},16),e("div",te,[o(a,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=f=>t.value=f)},null,8,["modelValue"]),e("label",oe,T(t.value==null?"null":t.value),1)]),o(d,{code:t.code},null,8,["code"])],64)}const ne=u(Z,[["render",le]]),ae={data(){return{value:null,code:{basic:'<TriStateCheckbox v-model="value" />',options:`<template>
    <div class="card flex flex-column align-items-center gap-3">
        <TriStateCheckbox v-model="value" disabled />
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
    <div class="card flex flex-column align-items-center gap-3">
        <TriStateCheckbox v-model="value" disabled />
    </div>  
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},se=e("p",null,[c("When "),e("i",null,"disabled"),c(" is present, the element cannot be edited and focused.")],-1),ce={class:"card flex flex-column align-items-center gap-3"};function ie(l,n,r,i,t,p){const s=_,a=k("TriStateCheckbox"),d=S;return m(),v(h,null,[o(s,x(g(l.$attrs)),{default:b(()=>[se]),_:1},16),e("div",ce,[o(a,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=f=>t.value=f),disabled:""},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const re=u(ae,[["render",ie]]),de={data(){return{code:{basic:"import TriStateCheckbox from 'primevue/tristatecheckbox';"}}}};function ue(l,n,r,i,t,p){const s=_,a=S;return m(),v(h,null,[o(s,x(g(l.$attrs)),null,16),o(a,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const me=u(de,[["render",ue]]),pe={data(){return{value:null,code:{basic:'<TriStateCheckbox v-model="value" class="p-invalid" />',options:`<template>
    <div class="card flex flex-column align-items-center gap-3">
        <TriStateCheckbox v-model="value" class="p-invalid" />
        <label for="checkbox">{{ value == null ? 'null' : value }}</label>
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
    <div class="card flex flex-column align-items-center gap-3">
        <TriStateCheckbox v-model="value" class="p-invalid" />
        <label for="checkbox">{{ value == null ? 'null' : value }}</label>
    </div>  
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},be=e("p",null,[c("Invalid state style is added using the "),e("i",null,"p-invalid"),c(" class to indicate a failed validation.")],-1),_e={class:"card flex flex-column align-items-center gap-3"},ve={for:"checkbox"};function he(l,n,r,i,t,p){const s=_,a=k("TriStateCheckbox"),d=S;return m(),v(h,null,[o(s,x(g(l.$attrs)),{default:b(()=>[be]),_:1},16),e("div",_e,[o(a,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=f=>t.value=f),class:"p-invalid"},null,8,["modelValue"]),e("label",ve,T(t.value==null?"null":t.value),1)]),o(d,{code:t.code},null,8,["code"])],64)}const fe=u(pe,[["render",he]]),xe={setup(){const{handleSubmit:l,resetForm:n}=A(),{value:r,errorMessage:i}=N("value",p),t=F();function p(a){return typeof a>"u"||a===null?"Value is required.":!0}const s=l(a=>{a.value&&(t.add({severity:"info",summary:"Form Submitted",detail:a.value,life:3e3}),n())});return{value:r,handleSubmit:l,onSubmit:s,errorMessage:i}},data(){return{code:{basic:`<div class="card flex justify-content-center">
    <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
        <TriStateCheckbox v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
        <div>* I've read and accept the terms & conditions.</div>
        <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
        <Button type="submit" label="Submit" />
    </form>
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <TriStateCheckbox v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
            <div>* I've read and accept the terms & conditions.</div>
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
            if (typeof value === 'undefined' || value === null) {
                return 'Value is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <TriStateCheckbox v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
            <div>* I've read and accept the terms & conditions.</div>
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
    if (typeof value === 'undefined' || value === null) {
        return 'Value is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm();
    }
});
<\/script>`}}}},ge=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),c(" is a popular library for handling forms in Vue.")],-1),Se={class:"card flex justify-content-center"},ke=e("div",null,"* I've read and accept the terms & conditions.",-1),Te={id:"text-error",class:"p-error"};function Ce(l,n,r,i,t,p){const s=_,a=k("TriStateCheckbox"),d=k("Button"),f=S;return m(),v(h,null,[o(s,x(g(l.$attrs)),{default:b(()=>[ge]),_:1},16),e("div",Se,[e("form",{onSubmit:n[1]||(n[1]=(...C)=>i.onSubmit&&i.onSubmit(...C)),class:"flex flex-column align-items-center gap-2"},[o(a,{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=C=>i.value=C),class:B({"p-invalid":i.errorMessage}),"aria-describedby":"text-error"},null,8,["modelValue","class"]),ke,e("small",Te,T(i.errorMessage||" "),1),o(d,{type:"submit",label:"Submit"})],32)]),o(f,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const $e=u(xe,[["render",Ce]]),ye={data(){return{value:null,code:{basic:`<TriStateCheckbox
    v-model="value"
    :pt="{
        checkbox: {
            class: value ? 'bg-teal-500 border-white' : undefined
        }
    }"
/>`,options:`<template>
    <div class="card flex flex-column align-items-center gap-3">
        <TriStateCheckbox
            v-model="value"
            :pt="{
                checkbox: {
                    class: value ? 'bg-teal-500 border-white' : undefined
                }
            }"
        />
        <label for="checkbox">{{ value == null ? 'null' : value }}</label>
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
    <div class="card flex flex-column align-items-center gap-3">
        <TriStateCheckbox
            v-model="value"
            :pt="{
                checkbox: {
                    class: value ? 'bg-teal-500 border-white' : undefined
                }
            }"
        />
        <label for="checkbox">{{ value == null ? 'null' : value }}</label>
    </div>  
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},De={class:"card flex flex-column align-items-center gap-3"},Ve={for:"checkbox"};function we(l,n,r,i,t,p){const s=_,a=k("TriStateCheckbox"),d=S;return m(),v(h,null,[o(s,x(g(l.$attrs)),null,16),e("div",De,[o(a,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=f=>t.value=f),pt:{checkbox:{class:t.value?"bg-teal-500 border-white":void 0}}},null,8,["modelValue","pt"]),e("label",Ve,T(t.value==null?"null":t.value),1)]),o(d,{code:t.code},null,8,["code"])],64)}const Fe=u(ye,[["render",we]]),Be={},Me=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/tristatecheckbox.jpg"})],-1);function Ie(l,n){const r=_;return m(),v(h,null,[o(r,x(g(l.$attrs)),{default:b(()=>[e("p",null,T(l.$attrs.description),1)]),_:1},16),Me],64)}const Pe=u(Be,[["render",Ie]]),Ae={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Pe},{id:"pt.doc.steps",label:"TriStateCheckbox PT Options",component:M,data:j("TriStateCheckbox")},{id:"pt.demo",label:"Demo",component:Fe}]}}},Ne={class:"doc-main"},je=e("div",{class:"doc-intro"},[e("h1",null,"TriStateCheckbox Pass Through")],-1);function ze(l,n,r,i,t,p){const s=D,a=V;return m(),v(h,null,[e("div",Ne,[je,o(s,{docs:t.docs},null,8,["docs"])]),o(a,{docs:t.docs},null,8,["docs"])],64)}const Le=u(Ae,[["render",ze]]),Ue={},qe=e("p",null,"List of class names used in the styled mode.",-1),Re=I('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-chkbox</td><td>Container element</td></tr><tr><td>p-tristatechkbox</td><td>Container element</td></tr><tr><td>p-chkbox-box</td><td>Container of icon.</td></tr><tr><td>p-chkbox-icon</td><td>Icon element.</td></tr></tbody></table></div>',1);function We(l,n){const r=_;return m(),v(h,null,[o(r,x(g(l.$attrs)),{default:b(()=>[qe]),_:1},16),Re],64)}const Ee=u(Ue,[["render",We]]),Ke={data(){return{code1:{basic:`
export default {
    tristatecheckbox: {
        root: {
            class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
        },
        checkbox: ({ props }) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 rounded-lg transition-colors duration-200',
                {
                    'border-blue-500 bg-blue-500 text-white dark:border-blue-400 dark:bg-blue-400': props.modelValue || !props.modelValue,
                    'border-gray-300 text-gray-600 bg-white dark:border-blue-900/40 dark:bg-gray-900': props.modelValue == null
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card flex flex-col items-center">
        <TriStateCheckbox v-model="value" />
        <label for="checkbox" class="text-gray-700 dark:text-white/80 mt-1">{{ value == null ? 'null' : value }}</label>
    </div>  
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},Oe=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ge(l,n,r,i,t,p){const s=z,a=S,d=_;return m(),$(d,x(g(l.$attrs)),{default:b(()=>[e("p",null,[c(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(s,{to:"/tailwind"},{default:b(()=>[c("Tailwind Customization")]),_:1}),c(" section for an example. ")]),o(a,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Oe,o(a,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const He=u(Ke,[["render",Ge]]),Je={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ee},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:He}]}]}}},Qe={class:"doc-main"},Xe=e("div",{class:"doc-intro"},[e("h1",null,"TriStateCheckbox Theming")],-1);function Ye(l,n,r,i,t,p){const s=D,a=V;return m(),v(h,null,[e("div",Qe,[Xe,o(s,{docs:t.docs},null,8,["docs"])]),o(a,{docs:t.docs},null,8,["docs"])],64)}const Ze=u(Je,[["render",Ye]]),et={data(){return{docs:[{id:"import",label:"Import",component:me},{id:"basic",label:"Basic",component:ne},{id:"invalid",label:"Invalid",component:fe},{id:"disabled",label:"Disabled",component:re},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:$e}]},{id:"accessibility",label:"Accessibility",component:Y}],ptComponent:Le,themingDoc:Ze}}};function tt(l,n,r,i,t,p){const s=P;return m(),$(s,{title:"Vue TriStateCheckbox Component",header:"TriStateCheckbox",description:"TriStateCheckbox is used to select either true, false or null as the value.",componentDocs:t.docs,apiDocs:["TriStateCheckbox"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const st=u(et,[["render",tt]]);export{st as default};
