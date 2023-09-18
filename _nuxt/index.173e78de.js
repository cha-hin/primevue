import{_ as d,o as m,e as S,w as b,a as n,m as I,b as e,f as i,p as T,h as f,j as g,c as _,n as h,g as y,F as x,B as C,A as F,t as D,D as j,k as V,l as w,x as z}from"./entry.68beb385.js";import{u as U,a as N}from"./vee-validate.esm.3b430014.js";import{g as B}from"./PTHelper.11558b27.js";import{_ as k}from"./PrimeVueNuxtLink.f51d0c80.js";const M={data(){return{code:{basic:`<label for="firstname">Firstname</label>
<InputText id="firstname" />

<span id="lastname">Lastname</span>
<InputText aria-labelledby="lastname" />

<InputText aria-label="Age"/>`}}}},P=e("h3",null,"Screen Reader",-1),A=e("p",null,[i(" InputText component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via "),e("i",null,"label"),i(" tag combined with "),e("i",null,"id"),i(" prop or using "),e("i",null,"aria-labelledby"),i(", "),e("i",null,"aria-label"),i(" props. ")],-1),L=e("h3",null,"Keyboard Support",-1),E=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the input.")])])])],-1);function q(s,l,u,r,t,v){const a=T,o=f;return m(),S(o,I({id:"accessibility",label:"Accessibility"},s.$attrs),{default:b(()=>[P,A,n(a,I({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},s.$attrs),null,16,["code"]),L,E]),_:1},16)}const H=d(M,[["render",q]]),K={data(){return{value:null,code:{basic:'<InputText type="text" v-model="value" />',options:`<template>
    <div class="card flex justify-content-center">
        <InputText type="text" v-model="value" />
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
<\/script>
        `,composition:`<template>
    <div class="card flex justify-content-center">
        <InputText type="text" v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
        `}}}},O=e("p",null,[i("InputText is used as a controlled input with "),e("i",null,"v-model"),i(" properties.")],-1),R={class:"card flex justify-content-center"};function W(s,l,u,r,t,v){const a=f,o=g("InputText"),p=T;return m(),_(x,null,[n(a,h(y(s.$attrs)),{default:b(()=>[O]),_:1},16),e("div",R,[n(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=c=>t.value=c),type:"text"},null,8,["modelValue"])]),n(p,{code:t.code},null,8,["code"])],64)}const G=d(K,[["render",W]]),J={data(){return{value:null,code:{basic:'<InputText v-model="value" disabled placeholder="Disabled" />',options:`<template>
    <div class="card flex justify-content-center">
        <InputText v-model="value" disabled placeholder="Disabled" />
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InputText v-model="value" disabled placeholder="Disabled" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},Q=e("p",null,[i("When "),e("i",null,"disabled"),i(" is present, the element cannot be edited and focused.")],-1),X={class:"card flex justify-content-center"};function Y(s,l,u,r,t,v){const a=f,o=g("InputText"),p=T;return m(),_(x,null,[n(a,h(y(s.$attrs)),{default:b(()=>[Q]),_:1},16),e("div",X,[n(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=c=>t.value=c),disabled:"",placeholder:"Disabled"},null,8,["modelValue"])]),n(p,{code:t.code},null,8,["code"])],64)}const Z=d(J,[["render",Y]]),ee={data(){return{value:null,code:{basic:`<span class="p-float-label">
    <InputText id="username" v-model="value" />
    <label for="username">Username</label>
</span>`,options:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <InputText id="username" v-model="value" />
            <label for="username">Username</label>
        </span>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>
                `,composition:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <InputText id="username" v-model="value" />
            <label for="username">Username</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
                `}}}},te=e("p",null,"A floating label appears on top of the input field when focused.",-1),le={class:"card flex justify-content-center"},ne={class:"p-float-label"},oe=e("label",{for:"username"},"Username",-1);function se(s,l,u,r,t,v){const a=f,o=g("InputText"),p=T;return m(),_(x,null,[n(a,h(y(s.$attrs)),{default:b(()=>[te]),_:1},16),e("div",le,[e("span",ne,[n(o,{id:"username",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=c=>t.value=c)},null,8,["modelValue"]),oe])]),n(p,{code:t.code},null,8,["code"])],64)}const ae=d(ee,[["render",se]]),ce={data(){return{value:null,code:{basic:`<div class="flex flex-column gap-2">
    <label for="username">Username</label>
    <InputText id="username" v-model="value" aria-describedby="username-help" />
    <small id="username-help">Enter your username to reset your password.</small>
</div>
                `,options:`<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-2">
            <label for="username">Username</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <small id="username-help">Enter your username to reset your password.</small>
        </div>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>
                `,composition:`<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-2">
            <label for="username">Username</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <small id="username-help">Enter your username to reset your password.</small>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
                `}}}},ie=e("p",null,[i("An advisory text can be defined with the semantic "),e("i",null,"small"),i(" tag.")],-1),re={class:"card flex justify-content-center"},ue={class:"flex flex-column gap-2"},pe=e("label",{for:"username"},"Username",-1),de=e("small",{id:"username-help"},"Enter your username to reset your password.",-1);function me(s,l,u,r,t,v){const a=f,o=g("InputText"),p=T;return m(),_(x,null,[n(a,h(y(s.$attrs)),{default:b(()=>[ie]),_:1},16),e("div",re,[e("div",ue,[pe,n(o,{id:"username",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=c=>t.value=c),"aria-describedby":"username-help"},null,8,["modelValue"]),de])]),n(p,{code:t.code},null,8,["code"])],64)}const ve=d(ce,[["render",me]]),fe={data(){return{value1:null,value2:null,code:{basic:`<span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText v-model="value1" placeholder="Search" />
</span>

<span class="p-input-icon-right">
    <i class="pi pi-spin pi-spinner" />
    <InputText v-model="value2" />
</span>`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-3">
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" />
        </span>
            
        <span class="p-input-icon-right">
            <i class="pi pi-spin pi-spinner" />
            <InputText v-model="value2" />
        </span>
    </div>
</template>

<script setup>
export default {
    data() {
        return {
            value1: null,
            value2: null
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-3">
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="value1" placeholder="Search" />
            </span>
            
            <span class="p-input-icon-right">
                <i class="pi pi-spin pi-spinner" />
            <InputText v-model="value2" />
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
<\/script>`}}}},_e=e("p",null,[i("Icons can be placed inside an input element by wrapping both the input and the icon with an element that has either "),e("i",null,".p-input-icon-left"),i(" or "),e("i",null,".p-input-icon-right"),i(" class.")],-1),xe={class:"card flex flex-wrap justify-content-center gap-3"},be={class:"p-input-icon-left"},he=e("i",{class:"pi pi-search"},null,-1),ye={class:"p-input-icon-right"},Te=e("i",{class:"pi pi-spin pi-spinner"},null,-1);function ge(s,l,u,r,t,v){const a=f,o=g("InputText"),p=T;return m(),_(x,null,[n(a,h(y(s.$attrs)),{default:b(()=>[_e]),_:1},16),e("div",xe,[e("span",be,[he,n(o,{modelValue:t.value1,"onUpdate:modelValue":l[0]||(l[0]=c=>t.value1=c),placeholder:"Search"},null,8,["modelValue"])]),e("span",ye,[Te,n(o,{modelValue:t.value2,"onUpdate:modelValue":l[1]||(l[1]=c=>t.value2=c)},null,8,["modelValue"])])]),n(p,{code:t.code},null,8,["code"])],64)}const $e=d(fe,[["render",ge]]),Se={data(){return{code:{basic:"import InputText from 'primevue/inputtext';"}}}};function Ie(s,l,u,r,t,v){const a=f,o=T;return m(),_(x,null,[n(a,h(y(s.$attrs)),null,16),n(o,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const De=d(Se,[["render",Ie]]),Ve={data(){return{value:null,code:{basic:'<InputText v-model="value" class="p-invalid" />',options:`<template>
    <div class="card flex justify-content-center">
        <InputText v-model="value" class="p-invalid" />
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
        <InputText v-model="value" class="p-invalid" />
    </div> 
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},we=e("p",null,[i("Invalid state style is added using the "),e("i",null,".p-invalid"),i(" class to indicate a failed validation.")],-1),Ce={class:"card flex justify-content-center"};function Fe(s,l,u,r,t,v){const a=f,o=g("InputText"),p=T;return m(),_(x,null,[n(a,h(y(s.$attrs)),{default:b(()=>[we]),_:1},16),e("div",Ce,[n(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=c=>t.value=c),class:"p-invalid"},null,8,["modelValue"])]),n(p,{code:t.code},null,8,["code"])],64)}const je=d(Ve,[["render",Fe]]),ze={data(){return{value1:null,value2:null,value3:null,code:{basic:`<InputText v-model="value1" type="text" size="small" placeholder="Small" />
<InputText v-model="value2" type="text" placeholder="Normal" />
<InputText v-model="value3" type="text" size="large" placeholder="Large" />`,options:`<template>
    <div class="card flex flex-column align-items-center gap-3">
        <InputText v-model="value1" type="text" size="small" placeholder="Small" />
        <InputText v-model="value2" type="text" placeholder="Normal" />
        <InputText v-model="value3" type="text" size="large" placeholder="Large" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            value3: null
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex flex-column align-items-center gap-3">
        <InputText v-model="value1" type="text" size="small" placeholder="Small" />
        <InputText v-model="value2" type="text" placeholder="Normal" />
        <InputText v-model="value3" type="text" size="large" placeholder="Large" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
<\/script>`}}}},Ue=e("p",null,[i("InputText provides "),e("i",null,"small"),i(" and "),e("i",null,"large"),i(" sizes as alternatives to the standard.")],-1),Ne={class:"card flex flex-column align-items-center gap-3"};function Be(s,l,u,r,t,v){const a=f,o=g("InputText"),p=T;return m(),_(x,null,[n(a,h(y(s.$attrs)),{default:b(()=>[Ue]),_:1},16),e("div",Ne,[n(o,{modelValue:t.value1,"onUpdate:modelValue":l[0]||(l[0]=c=>t.value1=c),type:"text",size:"small",placeholder:"Small"},null,8,["modelValue"]),n(o,{modelValue:t.value2,"onUpdate:modelValue":l[1]||(l[1]=c=>t.value2=c),type:"text",placeholder:"Normal"},null,8,["modelValue"]),n(o,{modelValue:t.value3,"onUpdate:modelValue":l[2]||(l[2]=c=>t.value3=c),type:"text",size:"large",placeholder:"Large"},null,8,["modelValue"])]),n(p,{code:t.code},null,8,["code"])],64)}const ke=d(ze,[["render",Be]]),Me={setup(){const{handleSubmit:s,resetForm:l}=U(),{value:u,errorMessage:r}=N("value",v),t=C();function v(o){return o?!0:"Name - Surname is required."}const a=s(o=>{o.value&&o.value.length>0&&(t.add({severity:"info",summary:"Form Submitted",detail:o.value,life:3e3}),l())});return{value:u,handleSubmit:s,onSubmit:a,errorMessage:r}},data(){return{code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <span class="p-float-label">
                <InputText id="value" v-model="value" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                <label for="value">Name - Surname</label>
            </span>
            <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <span class="p-float-label">
                <InputText id="value" v-model="value" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                <label for="value">Name - Surname</label>
            </span>
            <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
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
                return 'Name - Surname is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <span class="p-float-label">
                <InputText id="value" v-model="value" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                <label for="value">Name - Surname</label>
            </span>
            <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
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
        return 'Name - Surname is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm();
    }
});
<\/script>
`}}}},Pe=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),i(" is a popular library for handling forms in Vue.")],-1),Ae={class:"card flex justify-content-center"},Le={class:"p-float-label"},Ee=e("label",{for:"value"},"Name - Surname",-1),qe={id:"text-error",class:"p-error"};function He(s,l,u,r,t,v){const a=f,o=g("InputText"),p=g("Button"),c=T;return m(),_(x,null,[n(a,h(y(s.$attrs)),{default:b(()=>[Pe]),_:1},16),e("div",Ae,[e("form",{onSubmit:l[1]||(l[1]=(...$)=>r.onSubmit&&r.onSubmit(...$)),class:"flex flex-column gap-2"},[e("span",Le,[n(o,{id:"value",modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=$=>r.value=$),type:"text",class:F({"p-invalid":r.errorMessage}),"aria-describedby":"text-error"},null,8,["modelValue","class"]),Ee]),e("small",qe,D(r.errorMessage||" "),1),n(p,{type:"submit",label:"Submit"})],32)]),n(c,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const Ke=d(Me,[["render",He]]),Oe={data(){return{value:null,code:{basic:`<InputText
    v-model="value"
    type="text"
    :pt="{
        root: { class: 'border-teal-400' }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <InputText
            v-model="value"
            type="text"
            :pt="{
                root: { class: 'border-teal-400' }
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
}
<\/script>
        `,composition:`<template>
    <div class="card flex justify-content-center">
        <InputText
            v-model="value"
            type="text"
            :pt="{
                root: { class: 'border-teal-400' }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
        `}}}},Re={class:"card flex justify-content-center"};function We(s,l,u,r,t,v){const a=f,o=g("InputText"),p=T;return m(),_(x,null,[n(a,h(y(s.$attrs)),null,16),e("div",Re,[n(o,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=c=>t.value=c),type:"text",pt:{root:{class:"border-teal-400"}}},null,8,["modelValue"])]),n(p,{code:t.code},null,8,["code"])],64)}const Ge=d(Oe,[["render",We]]),Je={},Qe=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/inputtext.jpg"})],-1);function Xe(s,l){const u=f;return m(),_(x,null,[n(u,h(y(s.$attrs)),{default:b(()=>[e("p",null,D(s.$attrs.description),1)]),_:1},16),Qe],64)}const Ye=d(Je,[["render",Xe]]),Ze={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ye},{id:"pt.doc.inputtext",label:"InputText PT Options",component:j,data:B("InputText")},{id:"pt.demo",label:"Demo",component:Ge}]}}},et={class:"doc-main"},tt=e("div",{class:"doc-intro"},[e("h1",null,"InputText Pass Through")],-1);function lt(s,l,u,r,t,v){const a=V,o=w;return m(),_(x,null,[e("div",et,[tt,n(a,{docs:t.docs},null,8,["docs"])]),n(o,{docs:t.docs},null,8,["docs"])],64)}const nt=d(Ze,[["render",lt]]),ot={},st=e("p",null,"List of class names used in the styled mode.",-1),at=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Element")])]),e("tbody",null,[e("tr",null,[e("td",null,"p-inputtext"),e("td",null,"Input element")])])])],-1);function ct(s,l){const u=f;return m(),_(x,null,[n(u,h(y(s.$attrs)),{default:b(()=>[st]),_:1},16),at],64)}const it=d(ot,[["render",ct]]),rt={data(){return{code1:{basic:`
export default {
    inputtext: {
        root: ({ props, context }) => ({
            class: [
                'm-0',
                'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                {
                    'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                },
                {
                    'text-lg px-4 py-4': props.size == 'large',
                    'text-xs px-2 py-2': props.size == 'small',
                    'p-3 text-base': props.size == null
                }
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <InputText type="text" v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
        `}}}},ut=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function pt(s,l,u,r,t,v){const a=k,o=T,p=f;return m(),S(p,h(y(s.$attrs)),{default:b(()=>[e("p",null,[i(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(a,{to:"/tailwind"},{default:b(()=>[i("Tailwind Customization")]),_:1}),i(" section for an example. ")]),n(o,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),ut,n(o,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const dt=d(rt,[["render",pt]]),mt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:it},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:dt}]}]}}},vt={class:"doc-main"},ft=e("div",{class:"doc-intro"},[e("h1",null,"InputText Theming")],-1);function _t(s,l,u,r,t,v){const a=V,o=w;return m(),_(x,null,[e("div",vt,[ft,n(a,{docs:t.docs},null,8,["docs"])]),n(o,{docs:t.docs},null,8,["docs"])],64)}const xt=d(mt,[["render",_t]]),bt={data(){return{docs:[{id:"import",label:"Import",component:De},{id:"basic",label:"Basic",component:G},{id:"icons",label:"Icons",component:$e},{id:"sizes",label:"Sizes",component:ke},{id:"helptext",label:"HelpText",component:ve},{id:"floatlabel",label:"FloatLabel",component:ae},{id:"invalid",label:"Invalid",component:je},{id:"disabled",label:"Disabled",component:Z},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Ke}]},{id:"accessibility",label:"Accessibility",component:H}],ptComponent:nt,themingDoc:xt}}};function ht(s,l,u,r,t,v){const a=z;return m(),S(a,{title:"Vue Input Component",header:"InputText",description:"InputText is an extension to standard input element with theming.",componentDocs:t.docs,apiDocs:["InputText"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const St=d(bt,[["render",ht]]);export{St as default};
