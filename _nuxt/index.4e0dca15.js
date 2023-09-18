import{_ as p,o as m,e as M,w as h,a as o,m as g,b as e,f as c,p as $,h as v,j as y,c as _,n as k,g as x,F as b,B as V,A as C,t as I,D as w,k as D,l as T,x as F}from"./entry.68beb385.js";import{u as j,a as P}from"./vee-validate.esm.3b430014.js";import{g as B}from"./PTHelper.11558b27.js";import{_ as N}from"./PrimeVueNuxtLink.f51d0c80.js";const U={data(){return{code:{basic:`<label for="date">Date</label>
<InputMask id="date" />

<span id="phone">Phone</span>
<InputMask aria-labelledby="phone" />

<InputMask aria-label="Age" />`}}}},A=e("h3",null,"Screen Reader",-1),z=e("p",null,[c(" InputMask component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via "),e("i",null,"label"),c(" tag combined with "),e("i",null,"id"),c(" prop or using "),e("i",null,"aria-labelledby"),c(", "),e("i",null,"aria-label"),c(" props. ")],-1),q=e("h3",null,"Keyboard Support",-1),L=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the input.")])])])],-1);function O(s,l,r,i,t,f){const n=$,a=v;return m(),M(a,g({id:"accessibility",label:"Accessibility"},s.$attrs),{default:h(()=>[A,z,o(n,g({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},s.$attrs),null,16,["code"]),q,L]),_:1},16)}const W=p(U,[["render",O]]),E={data(){return{value:"",code:{basic:'<InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />',options:`<template>
    <div class="card flex justify-content-center">
        <InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
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
        <InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
        `}}}},K=e("p",null,[c("InputMask is used as a controlled input with "),e("i",null,"v-model"),c(" properties.")],-1),R={class:"card flex justify-content-center"};function G(s,l,r,i,t,f){const n=v,a=y("InputMask"),d=$;return m(),_(b,null,[o(n,k(x(s.$attrs)),{default:h(()=>[K]),_:1},16),e("div",R,[o(a,{id:"basic",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),mask:"99-999999",placeholder:"99-999999"},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const H=p(E,[["render",G]]),J={data(){return{value:"",code:{basic:'<InputMask mask="99-999999" placeholder="99-999999" disabled />',options:`<template>
    <div class="card flex justify-content-center">
        <InputMask mask="99-999999" placeholder="99-999999" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
<\/script>
        `,composition:`<template>
    <div class="card flex justify-content-center">
        <InputMask mask="99-999999" placeholder="99-999999" disabled />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
        `}}}},Q=e("p",null,[c("When "),e("i",null,"disabled"),c(" is present, the element cannot be edited and focused.")],-1),X={class:"card flex justify-content-center"};function Y(s,l,r,i,t,f){const n=v,a=y("InputMask"),d=$;return m(),_(b,null,[o(n,k(x(s.$attrs)),{default:h(()=>[Q]),_:1},16),e("div",X,[o(a,{mask:"99-999999",placeholder:"99-999999",disabled:""})]),o(d,{code:t.code},null,8,["code"])],64)}const Z=p(J,[["render",Y]]),ee={data(){return{value:"",code:{basic:`<span class="p-float-label">
    <InputMask id="ssn" v-model="value" mask="999-99-9999" placeholder="999-99-9999" />
    <label for="ssn">SSN</label>
</span>`,options:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <InputMask id="ssn" v-model="value" mask="999-99-9999" placeholder="999-99-9999" />
            <label for="ssn">SSN</label>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
<\/script>
        `,composition:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <InputMask id="ssn" v-model="val2" mask="999-99-9999" placeholder="999-99-9999" />
            <label for="ssn">SSN</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
        `}}}},te=e("p",null,"A floating label appears on top of the input field when focused.",-1),oe={class:"card flex justify-content-center"},le={class:"p-float-label"},ae=e("label",{for:"ssn"},"SSN",-1);function se(s,l,r,i,t,f){const n=v,a=y("InputMask"),d=$;return m(),_(b,null,[o(n,k(x(s.$attrs)),{default:h(()=>[te]),_:1},16),e("div",oe,[e("span",le,[o(a,{id:"ssn",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),mask:"999-99-9999",placeholder:"999-99-9999"},null,8,["modelValue"]),ae])]),o(d,{code:t.code},null,8,["code"])],64)}const ne=p(ee,[["render",se]]),ce={data(){return{code:{basic:"import InputMask from 'primevue/inputmask';"}}}};function ie(s,l,r,i,t,f){const n=v,a=$;return m(),_(b,null,[o(n,k(x(s.$attrs)),null,16),o(a,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const re=p(ce,[["render",ie]]),de={data(){return{value:"",code:{basic:'<InputMask v-model="value" mask="99-999999" placeholder="99-999999" class="p-invalid"/>',options:`<template>
    <div class="card flex justify-content-center">
        <InputMask v-model="value" mask="99-999999" placeholder="99-999999" class="p-invalid"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
<\/script>
        `,composition:`<template>
    <div class="card flex justify-content-center">
        <InputMask v-model="value" mask="99-999999" placeholder="99-999999" class="p-invalid"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
        `}}}},ue=e("p",null,[c("Invalid state style is added using the "),e("i",null,"p-invalid"),c(" class to indicate a failed validation.")],-1),pe={class:"card flex justify-content-center"};function me(s,l,r,i,t,f){const n=v,a=y("InputMask"),d=$;return m(),_(b,null,[o(n,k(x(s.$attrs)),{default:h(()=>[ue]),_:1},16),e("div",pe,[o(a,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),mask:"99-999999",placeholder:"99-999999",class:"p-invalid"},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const fe=p(de,[["render",me]]),ve={data(){return{value1:"",value2:"",value3:"",code:{basic:`<div class="flex-auto">
    <label for="ssn">SSN</label>
    <InputMask id="ssn" v-model="value1" mask="999-99-9999" placeholder="999-99-9999" />
</div>

<div class="flex-auto">
    <label for="phone">Phone</label>
    <InputMask v-model="value2" date="phone" mask="(999) 999-9999" placeholder="(999) 999-9999" />
</div>

<div class="flex-auto">
    <label for="serial">Serial</label>
    <InputMask id="serial" v-model="value3" mask="a*-999-a999" placeholder="a*-999-a999" />
</div>`,options:`<template>
    <div class="card p-fluid flex flex-wrap gap-3">
        <div class="flex-auto">
            <label for="ssn">SSN</label>
            <InputMask id="ssn" v-model="value1" mask="999-99-9999" placeholder="999-99-9999" />
        </div>

        <div class="flex-auto">
            <label for="phone">Phone</label>
            <InputMask v-model="value2" date="phone" mask="(999) 999-9999" placeholder="(999) 999-9999" />
        </div>

        <div class="flex-auto">
            <label for="serial">Serial</label>
            <InputMask id="serial" v-model="value2" mask="a*-999-a999" placeholder="a*-999-a999" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: ''
        }
    }
}
<\/script>
        `,composition:`<template>
    <div class="card p-fluid flex flex-wrap gap-3">
        <div class="flex-auto">
            <label for="ssn">SSN</label>
            <InputMask id="ssn" v-model="value1" mask="999-99-9999" placeholder="999-99-9999" />
        </div>

        <div class="flex-auto">
            <label for="phone">Phone</label>
            <InputMask v-model="value2" date="phone" mask="(999) 999-9999" placeholder="(999) 999-9999" />
        </div>

        <div class="flex-auto">
            <label for="serial">Serial</label>
            <InputMask id="serial" v-model="value3" mask="a*-999-a999" placeholder="a*-999-a999" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
<\/script>`}}}},_e=e("p",null,[c(" Mask format can be a combination of the following definitions; "),e("i",null,"a"),c(" for alphabetic characters, "),e("i",null,"9"),c(" for numeric characters and "),e("i",null,"*"),c(" for alphanumberic characters. In addition, formatting characters like "),e("i",null,"("),c(", "),e("i",null,")"),c(" , "),e("i",null,"-"),c(" are also accepted. ")],-1),be={class:"card p-fluid flex flex-wrap gap-3"},he={class:"flex-auto"},ke=e("label",{for:"ssn"},"SSN",-1),xe={class:"flex-auto"},$e=e("label",{for:"phone"},"Phone",-1),ye={class:"flex-auto"},Se=e("label",{for:"serial"},"Serial",-1);function Me(s,l,r,i,t,f){const n=v,a=y("InputMask"),d=$;return m(),_(b,null,[o(n,k(x(s.$attrs)),{default:h(()=>[_e]),_:1},16),e("div",be,[e("div",he,[ke,o(a,{id:"ssn",modelValue:t.value1,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value1=u),mask:"999-99-9999",placeholder:"999-99-9999"},null,8,["modelValue"])]),e("div",xe,[$e,o(a,{id:"phone",modelValue:t.value2,"onUpdate:modelValue":l[1]||(l[1]=u=>t.value2=u),mask:"(999) 999-9999",placeholder:"(999) 999-9999"},null,8,["modelValue"])]),e("div",ye,[Se,o(a,{id:"serial",modelValue:t.value3,"onUpdate:modelValue":l[2]||(l[2]=u=>t.value3=u),mask:"a*-999-a999",placeholder:"a*-999-a999"},null,8,["modelValue"])])]),o(d,{code:t.code},null,8,["code"])],64)}const ge=p(ve,[["render",Me]]),Ie={data(){return{value:"",code:{basic:'<InputMask v-model="value" mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />',options:`<template>
    <div class="card flex justify-content-center">
        <InputMask v-model="value" mask="(999) 999-9999? x99999"  placeholder="(999) 999-9999? x99999" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
<\/script>
        `,composition:`<template>
    <div class="card flex justify-content-center">
        <InputMask v-model="value" mask="(999) 999-9999? x99999"  placeholder="(999) 999-9999? x99999" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>
        `}}}},De=e("p",null,[c("When the input does not complete the mask definition, it is cleared by default. Use "),e("i",null,"autoClear"),c(" property to control this behavior. In addition, "),e("i",null,"?"),c(" is used to mark anything after the question mark optional.")],-1),Te={class:"card flex justify-content-center"};function Ve(s,l,r,i,t,f){const n=v,a=y("InputMask"),d=$;return m(),_(b,null,[o(n,k(x(s.$attrs)),{default:h(()=>[De]),_:1},16),e("div",Te,[o(a,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),mask:"(999) 999-9999? x99999",placeholder:"(999) 999-9999? x99999"},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const Ce=p(Ie,[["render",Ve]]),we={data(){return{value:"",code:{basic:'<InputMask id="basic" v-model="value" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />',options:`<template>
    <div class="card flex justify-content-center">
        <InputMask id="basic" v-model="value" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
    </div>
</template>

<script>
export default {
  data() {
      return {
          value: ''
      }
  }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InputMask id="basic" v-model="value" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`}}}},Fe=e("p",null,[c("Default placeholder for a mask is underscore that can be customized using "),e("i",null,"slotChar"),c(" property.")],-1),je={class:"card flex justify-content-center"};function Pe(s,l,r,i,t,f){const n=v,a=y("InputMask"),d=$;return m(),_(b,null,[o(n,k(x(s.$attrs)),{default:h(()=>[Fe]),_:1},16),e("div",je,[o(a,{id:"basic",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),placeholder:"99/99/9999",mask:"99/99/9999",slotChar:"mm/dd/yyyy"},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const Be=p(we,[["render",Pe]]),Ne={setup(){const{handleSubmit:s,resetForm:l}=j(),{value:r,errorMessage:i}=P("value",f),t=V();function f(a){return a?!0:"Phone is required."}const n=s(a=>{a.value&&a.value.length>0&&(t.add({severity:"info",summary:"Form Submitted",detail:a.value,life:3e3}),l())});return{value:r,handleSubmit:s,onSubmit:n,errorMessage:i}},data(){return{code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <InputMask v-model="value" mask="(999) 999-9999" placeholder="(999) 999-9999"
                :class="{ 'p-invalid': errorMessage }" aria-describedby="mask-error" />
            <small class="p-error" id="mask-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <InputMask v-model="value" mask="(999) 999-9999" placeholder="(999) 999-9999"
                :class="{ 'p-invalid': errorMessage }" aria-describedby="mask-error" />
            <small class="p-error" id="mask-error">{{ errorMessage || '&nbsp;' }}</small>
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
                return 'Phone is required.';
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
            <InputMask v-model="value" mask="(999) 999-9999" placeholder="(999) 999-9999"
                :class="{ 'p-invalid': errorMessage }" aria-describedby="mask-error" />
            <small class="p-error" id="mask-error">{{ errorMessage || '&nbsp;' }}</small>
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
        return 'Phone is required.';
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
`}}}},Ue=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),c(" is a popular library for handling forms in Vue.")],-1),Ae={class:"card flex justify-content-center"},ze={id:"mask-error",class:"p-error"};function qe(s,l,r,i,t,f){const n=v,a=y("InputMask"),d=y("Button"),u=$;return m(),_(b,null,[o(n,k(x(s.$attrs)),{default:h(()=>[Ue]),_:1},16),e("div",Ae,[e("form",{onSubmit:l[1]||(l[1]=(...S)=>i.onSubmit&&i.onSubmit(...S)),class:"flex flex-column gap-2"},[o(a,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=S=>i.value=S),mask:"(999) 999-9999",placeholder:"(999) 999-9999",class:C({"p-invalid":i.errorMessage}),"aria-describedby":"mask-error"},null,8,["modelValue","class"]),e("small",ze,I(i.errorMessage||" "),1),o(d,{type:"submit",label:"Submit"})],32)]),o(u,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const Le=p(Ne,[["render",qe]]),Oe={data(){return{value:"",code:{basic:`<InputMask
    id="basic"
    v-model="value"
    mask="99-999999"
    placeholder="99-999999"
    :pt="{
        root: { class: 'border-teal-400' }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <InputMask
            id="basic"
            v-model="value"
            mask="99-999999"
            placeholder="99-999999"
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
        <InputMask
            id="basic"
            v-model="value"
            mask="99-999999"
            placeholder="99-999999"
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
        `}}}},We={class:"card flex justify-content-center"};function Ee(s,l,r,i,t,f){const n=v,a=y("InputMask"),d=$;return m(),_(b,null,[o(n,k(x(s.$attrs)),null,16),e("div",We,[o(a,{id:"basic",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=u=>t.value=u),mask:"99-999999",placeholder:"99-999999",pt:{root:{class:"border-teal-400"}}},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const Ke=p(Oe,[["render",Ee]]),Re={},Ge=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/inputmask.jpg"})],-1);function He(s,l){const r=v;return m(),_(b,null,[o(r,k(x(s.$attrs)),{default:h(()=>[e("p",null,I(s.$attrs.description),1)]),_:1},16),Ge],64)}const Je=p(Re,[["render",He]]),Qe={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Je},{id:"pt.doc.inputmask",label:"InputMask PT Options",component:w,data:B("InputMask")},{id:"pt.demo",label:"Demo",component:Ke}]}}},Xe={class:"doc-main"},Ye=e("div",{class:"doc-intro"},[e("h1",null,"InputMask Pass Through")],-1);function Ze(s,l,r,i,t,f){const n=D,a=T;return m(),_(b,null,[e("div",Xe,[Ye,o(n,{docs:t.docs},null,8,["docs"])]),o(a,{docs:t.docs},null,8,["docs"])],64)}const et=p(Qe,[["render",Ze]]),tt={},ot=e("p",null,"List of class names used in the styled mode.",-1),lt=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Element")])]),e("tbody",null,[e("tr",null,[e("td",null,"p-inputmask p-inputtext"),e("td",null,"Input element")])])])],-1);function at(s,l){const r=v;return m(),_(b,null,[o(r,k(x(s.$attrs)),{default:h(()=>[ot]),_:1},16),lt],64)}const st=p(tt,[["render",at]]),nt={data(){return{code1:{basic:`
export default {
    inputmask: {
        root: 'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 py-3 px-3 border border-gray-300 dark:border-blue-900/40 hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] transition duration-200 ease-in-out appearance-none rounded-md'
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>
`}}}},ct=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function it(s,l,r,i,t,f){const n=N,a=$,d=v;return m(),M(d,k(x(s.$attrs)),{default:h(()=>[e("p",null,[c(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(n,{to:"/tailwind"},{default:h(()=>[c("Tailwind Customization")]),_:1}),c(" section for an example. ")]),o(a,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),ct,o(a,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const rt=p(nt,[["render",it]]),dt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:st},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:rt}]}]}}},ut={class:"doc-main"},pt=e("div",{class:"doc-intro"},[e("h1",null,"InputMask Theming")],-1);function mt(s,l,r,i,t,f){const n=D,a=T;return m(),_(b,null,[e("div",ut,[pt,o(n,{docs:t.docs},null,8,["docs"])]),o(a,{docs:t.docs},null,8,["docs"])],64)}const ft=p(dt,[["render",mt]]),vt={data(){return{docs:[{id:"import",label:"Import",component:re},{id:"basic",label:"Basic",component:H},{id:"mask",label:"Mask",component:ge},{id:"optional",label:"Optional",component:Ce},{id:"slotchar",label:"SlotChar",component:Be},{id:"floatlabel",label:"FloatLabel",component:ne},{id:"invalid",label:"Invalid",component:fe},{id:"disabled",label:"Disabled",component:Z},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Le}]},{id:"accessibility",label:"Accessibility",component:W}],ptComponent:et,themingDoc:ft}}};function _t(s,l,r,i,t,f){const n=F;return m(),M(n,{title:"Vue Mask Component",header:"InputMask",description:"InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.",componentDocs:t.docs,apiDocs:["InputMask"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const $t=p(vt,[["render",_t]]);export{$t as default};
