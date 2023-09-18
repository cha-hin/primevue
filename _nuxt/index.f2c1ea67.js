import{_ as u,o as p,e as D,w as x,a as o,m as S,b as e,f as i,p as $,h as f,j as y,c as v,n as h,g as T,F as b,B as F,A as j,t as w,D as z,k as V,l as C,x as B}from"./entry.68beb385.js";import{u as k,a as A}from"./vee-validate.esm.3b430014.js";import{g as M}from"./PTHelper.11558b27.js";import{_ as U}from"./PrimeVueNuxtLink.f51d0c80.js";const P={data(){return{code:{basic:`<label for="address1">Address 1</label>
<Textarea id="address1" />

<span id="address2">Address 2</span>
<Textarea aria-labelledby="address2" />

<Textarea aria-label="Address Details"/>`}}}},R=e("h3",null,"Screen Reader",-1),N=e("p",null,[i(" Textarea component renders a native textarea element that implicitly includes any passed prop. Value to describe the component can either be provided via "),e("i",null,"label"),i(" tag combined with "),e("i",null,"id"),i(" prop or using "),e("i",null,"aria-labelledby"),i(", "),e("i",null,"aria-label"),i(" props. ")],-1),I=e("h3",null,"Keyboard Support",-1),q=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the input.")])])])],-1);function L(a,s,c,r,t,m){const l=$,n=f;return p(),D(n,S({id:"accessibility",label:"Accessibility"},a.$attrs),{default:x(()=>[R,N,o(l,S({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},a.$attrs),null,16,["code"]),I,q]),_:1},16)}const W=u(P,[["render",L]]),E={data(){return{value:"",code:{basic:'<Textarea v-model="value" autoResize rows="5" cols="30" />',options:`<template>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" autoResize rows="5" cols="30" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" autoResize rows="5" cols="30" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`}}}},K=e("p",null,[i("When "),e("i",null,"autoResize"),i(" is enabled, textarea grows instead of displaying a scrollbar.")],-1),O={class:"card flex justify-content-center"};function G(a,s,c,r,t,m){const l=f,n=y("Textarea"),d=$;return p(),v(b,null,[o(l,h(T(a.$attrs)),{default:x(()=>[K]),_:1},16),e("div",O,[o(n,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=_=>t.value=_),autoResize:"",rows:"5",cols:"30"},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const H=u(E,[["render",G]]),J={data(){return{value:"",code:{basic:'<Textarea v-model="value" rows="5" cols="30" />',options:`<template>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" rows="5" cols="30" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" rows="5" cols="30" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`}}}},Q=e("p",null,[i("A model can be bound using the standard "),e("i",null,"v-model"),i(" directive.")],-1),X={class:"card flex justify-content-center"};function Y(a,s,c,r,t,m){const l=f,n=y("Textarea"),d=$;return p(),v(b,null,[o(l,h(T(a.$attrs)),{default:x(()=>[Q]),_:1},16),e("div",X,[o(n,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=_=>t.value=_),rows:"5",cols:"30"},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const Z=u(J,[["render",Y]]),ee={data(){return{value:"Disabled",code:{basic:'<Textarea v-model="value" rows="5" cols="30" disabled />',options:`<template>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" rows="5" cols="30" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'Disabled'
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" rows="5" cols="30" disabled />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('Disabled');
<\/script>`}}}},te=e("p",null,[i("When "),e("i",null,"disabled"),i(" is present, the element cannot be edited and focused.")],-1),oe={class:"card flex justify-content-center"};function se(a,s,c,r,t,m){const l=f,n=y("Textarea"),d=$;return p(),v(b,null,[o(l,h(T(a.$attrs)),{default:x(()=>[te]),_:1},16),e("div",oe,[o(n,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=_=>t.value=_),rows:"5",cols:"30",disabled:""},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const ae=u(ee,[["render",se]]),ne={data(){return{value:"",code:{basic:`<span class="p-float-label">
    <Textarea v-model="value" rows="5" cols="30" />
    <label>Username</label>
</span>`,options:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <Textarea v-model="value" rows="5" cols="30" />
            <label>Username</label>
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
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <Textarea v-model="value" rows="5" cols="30" />
            <label>Username</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`}}}},le=e("p",null,"A floating label appears on top of the input field when focused.",-1),re={class:"card flex justify-content-center"},ce={class:"p-float-label"},ie=e("label",null,"Username",-1);function de(a,s,c,r,t,m){const l=f,n=y("Textarea"),d=$;return p(),v(b,null,[o(l,h(T(a.$attrs)),{default:x(()=>[le]),_:1},16),e("div",re,[e("span",ce,[o(n,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=_=>t.value=_),rows:"5",cols:"30"},null,8,["modelValue"]),ie])]),o(d,{code:t.code},null,8,["code"])],64)}const ue=u(ne,[["render",de]]),pe={data(){return{code:{basic:"import Textarea from 'primevue/textarea';"}}}};function me(a,s,c,r,t,m){const l=f,n=$;return p(),v(b,null,[o(l,h(T(a.$attrs)),null,16),o(n,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const _e=u(pe,[["render",me]]),fe={data(){return{value:"",code:{basic:'<Textarea v-model="value" rows="5" cols="30" />',options:`<template>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" rows="5" cols="30" class="p-invalid" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Textarea v-model="value" rows="5" cols="30"   class="p-invalid" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`}}}},ve=e("p",null,[i("Invalid state style is added using the "),e("i",null,"p-invalid"),i(" class to indicate a failed validation.")],-1),be={class:"card flex justify-content-center"};function xe(a,s,c,r,t,m){const l=f,n=y("Textarea"),d=$;return p(),v(b,null,[o(l,h(T(a.$attrs)),{default:x(()=>[ve]),_:1},16),e("div",be,[o(n,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=_=>t.value=_),rows:"5",cols:"30",class:"p-invalid"},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const he=u(fe,[["render",xe]]),Te={setup(){const{handleSubmit:a,resetForm:s}=k(),{value:c,errorMessage:r}=A("value",m),t=F();function m(n){return n?!0:"Description is required."}const l=a(n=>{n.value&&n.value.length>0&&(t.add({severity:"info",summary:"Form Submitted",detail:n.value,life:3e3}),s())});return{value:c,handleSubmit:a,onSubmit:l,errorMessage:r}},data(){return{code:{basic:`<div class="card flex justify-content-center">
    <form @submit="onSubmit" class="flex flex-column gap-2">
        <span class="p-float-label">
            <Textarea id="value" v-model="value" :class="{ 'p-invalid': errorMessage }" rows="4" cols="30" aria-describedby="text-error" />
            <label for="value">Description</label>
        </span>
        <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
        <Button type="submit" label="Submit" />
    </form>
    <Toast />
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <span class="p-float-label">
                <Textarea id="value" v-model="value" :class="{ 'p-invalid': errorMessage }" rows="4" cols="30" aria-describedby="text-error" />
                <label for="value">Description</label>
            </span>
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
                return 'Description is required.';
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
                <Textarea id="value" v-model="value" :class="{ 'p-invalid': errorMessage }" rows="4" cols="30" aria-describedby="text-error" />
                <label for="value">Description</label>
            </span>
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
        return 'Description is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm();
    }
});
<\/script>`}}}},$e=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),i(" is a popular library for handling forms in Vue.")],-1),ye={class:"card flex justify-content-center"},ge={class:"p-float-label"},De=e("label",{for:"value"},"Description",-1),Se={id:"text-error",class:"p-error"};function we(a,s,c,r,t,m){const l=f,n=y("Textarea"),d=y("Button"),_=$;return p(),v(b,null,[o(l,h(T(a.$attrs)),{default:x(()=>[$e]),_:1},16),e("div",ye,[e("form",{onSubmit:s[1]||(s[1]=(...g)=>r.onSubmit&&r.onSubmit(...g)),class:"flex flex-column gap-2"},[e("span",ge,[o(n,{id:"value",modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=g=>r.value=g),class:j({"p-invalid":r.errorMessage}),rows:"4",cols:"30","aria-describedby":"text-error"},null,8,["modelValue","class"]),De]),e("small",Se,w(r.errorMessage||" "),1),o(d,{type:"submit",label:"Submit"})],32)]),o(_,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const Ve=u(Te,[["render",we]]),Ce={data(){return{value:"",code:{basic:`<Textarea
    v-model="value"
    :pt="{
        root: {
            rows: 5,
            cols: 30
        }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Textarea
            v-model="value"
            :pt="{
                root: {
                    rows: 5,
                    cols: 30
                }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Textarea
            v-model="value"
            :pt="{
                root: {
                    rows: 5,
                    cols: 30
                }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`}}}},Fe={class:"card flex justify-content-center"};function je(a,s,c,r,t,m){const l=f,n=y("Textarea"),d=$;return p(),v(b,null,[o(l,h(T(a.$attrs)),null,16),e("div",Fe,[o(n,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=_=>t.value=_),pt:{root:{rows:5,cols:30}}},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const ze=u(Ce,[["render",je]]),Be={},ke=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/textarea.jpg"})],-1);function Ae(a,s){const c=f;return p(),v(b,null,[o(c,h(T(a.$attrs)),{default:x(()=>[e("p",null,w(a.$attrs.description),1)]),_:1},16),ke],64)}const Me=u(Be,[["render",Ae]]),Ue={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Me},{id:"pt.doc.textarea",label:"Textarea PT Options",component:z,data:M("Textarea")},{id:"pt.demo",label:"Demo",component:ze}]}}},Pe={class:"doc-main"},Re=e("div",{class:"doc-intro"},[e("h1",null,"Textarea Pass Through")],-1);function Ne(a,s,c,r,t,m){const l=V,n=C;return p(),v(b,null,[e("div",Pe,[Re,o(l,{docs:t.docs},null,8,["docs"])]),o(n,{docs:t.docs},null,8,["docs"])],64)}const Ie=u(Ue,[["render",Ne]]),qe={},Le=e("p",null,"List of class names used in the styled mode.",-1),We=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Element")])]),e("tbody",null,[e("tr",null,[e("td",null,"p-inputtextarea"),e("td",null,"Textarea element")])])])],-1);function Ee(a,s){const c=f;return p(),v(b,null,[o(c,h(T(a.$attrs)),{default:x(()=>[Le]),_:1},16),We],64)}const Ke=u(qe,[["render",Ee]]),Oe={data(){return{code1:{basic:`
export default {
    textarea: {
        root: ({ context }) => ({
            class: [
                'm-0',
                'font-sans text-base text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled }
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Textarea v-model="value" rows="5" cols="30" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`}}}},Ge=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function He(a,s,c,r,t,m){const l=U,n=$,d=f;return p(),D(d,h(T(a.$attrs)),{default:x(()=>[e("p",null,[i(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(l,{to:"/tailwind"},{default:x(()=>[i("Tailwind Customization")]),_:1}),i(" section for an example. ")]),o(n,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ge,o(n,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const Je=u(Oe,[["render",He]]),Qe={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ke},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Je}]}]}}},Xe={class:"doc-main"},Ye=e("div",{class:"doc-intro"},[e("h1",null,"Textarea Theming")],-1);function Ze(a,s,c,r,t,m){const l=V,n=C;return p(),v(b,null,[e("div",Xe,[Ye,o(l,{docs:t.docs},null,8,["docs"])]),o(n,{docs:t.docs},null,8,["docs"])],64)}const et=u(Qe,[["render",Ze]]),tt={data(){return{docs:[{id:"import",label:"Import",component:_e},{id:"basic",label:"Basic",component:Z},{id:"auto-resize",label:"Auto Resize",component:H},{id:"float-label",label:"Float Label",component:ue},{id:"invalid",label:"Invalid",component:he},{id:"disabled",label:"Disabled",component:ae},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Ve}]},{id:"accessibility",label:"Accessibility",component:W}],ptComponent:Ie,themingDoc:et}}};function ot(a,s,c,r,t,m){const l=B;return p(),D(l,{title:"Vue Textarea Component",header:"Textarea",description:"Textarea adds styling, key filtering and autoResize functionality to standard textarea element.",componentDocs:t.docs,apiDocs:["Textarea"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const rt=u(tt,[["render",ot]]);export{rt as default};
