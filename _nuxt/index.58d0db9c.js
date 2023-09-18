import{_ as m,o as d,e as z,w as v,a as n,m as S,b as e,f as u,p as k,h as _,j as y,c as f,n as x,g,F as h,q as T,t as $,B as I,A as M,D as w,k as D,l as V,v as j,x as P}from"./entry.68beb385.js";import{u as F,a as B}from"./vee-validate.esm.3b430014.js";import{g as A}from"./PTHelper.11558b27.js";import{_ as R}from"./PrimeVueNuxtLink.f51d0c80.js";const U={data(){return{code:{basic:`<label for="chkbox1">Remember Me</label>
<Checkbox inputId="chkbox1" />

<span id="chkbox2">Remember Me</span>
<Checkbox aria-labelledby="chkbox2" />

<Checkbox aria-label="Remember Me" />`}}}},O=e("h3",null,"Screen Reader",-1),N=e("p",null,[u(" Checkbox component uses a hidden native checkbox element internally that is only visible to screen readers. Value to describe the component can either be provided via "),e("i",null,"label"),u(" tag combined with "),e("i",null,"inputId"),u(" prop or using "),e("i",null,"aria-labelledby"),u(", "),e("i",null,"aria-label"),u(" props. ")],-1),q=e("h3",null,"Keyboard Support",-1),L=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the checkbox.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the checked state.")])])])],-1);function E(c,o,r,a,t,b){const l=k,s=_;return d(),z(s,S({id:"accessibility",label:"Accessibility"},c.$attrs),{default:v(()=>[O,N,n(l,S({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},c.$attrs),null,16,["code"]),q,L]),_:1},16)}const G=m(U,[["render",E]]),K={data(){return{checked:!1,code:{basic:'<Checkbox v-model="checked" :binary="true" />',options:`<template>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" :binary="true" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" :binary="true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>`}}}},W=e("p",null,[u("Binary checkbox is used as a controlled input with "),e("i",null,"v-model"),u(" and "),e("i",null,"binary"),u(" properties.")],-1),H={class:"card flex justify-content-center"};function J(c,o,r,a,t,b){const l=_,s=y("Checkbox"),p=k;return d(),f(h,null,[n(l,x(g(c.$attrs)),{default:v(()=>[W]),_:1},16),e("div",H,[n(s,{modelValue:t.checked,"onUpdate:modelValue":o[0]||(o[0]=i=>t.checked=i),binary:!0},null,8,["modelValue"])]),n(p,{code:t.code},null,8,["code"])],64)}const Q=m(K,[["render",J]]),X={data(){return{checked:!1,code:{basic:'<Checkbox v-model="checked" disabled />',options:`<template>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" disabled />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>`}}}},Y=e("p",null,[u("When "),e("i",null,"disabled"),u(" is present, the element cannot be edited and focused.")],-1),Z={class:"card flex justify-content-center"};function ee(c,o,r,a,t,b){const l=_,s=y("Checkbox"),p=k;return d(),f(h,null,[n(l,x(g(c.$attrs)),{default:v(()=>[Y]),_:1},16),e("div",Z,[n(s,{modelValue:t.checked,"onUpdate:modelValue":o[0]||(o[0]=i=>t.checked=i),disabled:""},null,8,["modelValue"])]),n(p,{code:t.code},null,8,["code"])],64)}const te=m(X,[["render",ee]]),oe={data(){return{selectedCategories:["Marketing"],categories:[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}],code:{basic:`<div v-for="category of categories" :key="category.key" class="flex align-items-center">
    <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
    <label :for="category.key">{{ category.name }}</label>
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div v-for="category of categories" :key="category.key" class="flex align-items-center">
                <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                <label :for="category.key">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCategories: ['Marketing'],
            categories: [
                { name: "Accounting", key: "A" },
                { name: "Marketing", key: "M" },
                { name: "Production", key: "P" },
                { name: "Research", key: "R" }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div v-for="category of categories" :key="category.key" class="flex align-items-center">
                <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name" />
                <label :for="category.key">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const categories = ref([
    {name: "Accounting", key: "A"},
    {name: "Marketing", key: "M"},
    {name: "Production", key: "P"},
    {name: "Research", key: "R"}
]);
const selectedCategories = ref(['Marketing']);
<\/script>`}}}},ne=e("p",null,"Checkboxes can be generated using a list of values.",-1),ce={class:"card flex justify-content-center"},le={class:"flex flex-column gap-3"},se=["for"];function ie(c,o,r,a,t,b){const l=_,s=y("Checkbox"),p=k;return d(),f(h,null,[n(l,x(g(c.$attrs)),{default:v(()=>[ne]),_:1},16),e("div",ce,[e("div",le,[(d(!0),f(h,null,T(t.categories,i=>(d(),f("div",{key:i.key,class:"flex align-items-center"},[n(s,{modelValue:t.selectedCategories,"onUpdate:modelValue":o[0]||(o[0]=C=>t.selectedCategories=C),inputId:i.key,name:"category",value:i.name},null,8,["modelValue","inputId","value"]),e("label",{for:i.key,class:"ml-2"},$(i.name),9,se)]))),128))])]),n(p,{code:t.code},null,8,["code"])],64)}const ae=m(oe,[["render",ie]]),re={data(){return{pizza:null,code:{basic:`<div class="card flex flex-wrap justify-content-center gap-3">
    <div class="flex align-items-center">
        <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1" class="ml-2"> Cheese </label>
    </div>
    <div class="flex align-items-center">
        <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
        <label for="ingredient2" class="ml-2"> Mushroom </label>
    </div>
    <div class="flex align-items-center">
        <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
        <label for="ingredient3" class="ml-2"> Pepper </label>
    </div>
    <div class="flex align-items-center">
        <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
        <label for="ingredient4" class="ml-2"> Onion </label>
    </div>
</div>`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-3">
        <div class="flex align-items-center">
            <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1" class="ml-2"> Cheese </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
            <label for="ingredient2" class="ml-2"> Mushroom </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
            <label for="ingredient3" class="ml-2"> Pepper </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4" class="ml-2"> Onion </label>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pizza: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-3">
        <div class="flex align-items-center">
            <Checkbox v-model="pizza" inputId="ingredient1" name="pizza" value="Cheese" />
            <label for="ingredient1" class="ml-2"> Cheese </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="pizza" inputId="ingredient2" name="pizza" value="Mushroom" />
            <label for="ingredient2" class="ml-2"> Mushroom </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="pizza" inputId="ingredient3" name="pizza" value="Pepper" />
            <label for="ingredient3" class="ml-2"> Pepper </label>
        </div>
        <div class="flex align-items-center">
            <Checkbox v-model="pizza" inputId="ingredient4" name="pizza" value="Onion" />
            <label for="ingredient4" class="ml-2"> Onion </label>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const pizza = ref();
<\/script>`}}}},de=e("p",null,"Multiple checkboxes can be grouped together.",-1),ue={class:"card flex flex-wrap justify-content-center gap-3"},pe={class:"flex align-items-center"},me=e("label",{for:"ingredient1",class:"ml-2"}," Cheese ",-1),be={class:"flex align-items-center"},fe=e("label",{for:"ingredient2",class:"ml-2"}," Mushroom ",-1),he={class:"flex align-items-center"},_e=e("label",{for:"ingredient3",class:"ml-2"}," Pepper ",-1),ve={class:"flex align-items-center"},xe=e("label",{for:"ingredient4",class:"ml-2"}," Onion ",-1);function ge(c,o,r,a,t,b){const l=_,s=y("Checkbox"),p=k;return d(),f(h,null,[n(l,x(g(c.$attrs)),{default:v(()=>[de]),_:1},16),e("div",ue,[e("div",pe,[n(s,{modelValue:t.pizza,"onUpdate:modelValue":o[0]||(o[0]=i=>t.pizza=i),inputId:"ingredient1",name:"pizza",value:"Cheese"},null,8,["modelValue"]),me]),e("div",be,[n(s,{modelValue:t.pizza,"onUpdate:modelValue":o[1]||(o[1]=i=>t.pizza=i),inputId:"ingredient2",name:"pizza",value:"Mushroom"},null,8,["modelValue"]),fe]),e("div",he,[n(s,{modelValue:t.pizza,"onUpdate:modelValue":o[2]||(o[2]=i=>t.pizza=i),inputId:"ingredient3",name:"pizza",value:"Pepper"},null,8,["modelValue"]),_e]),e("div",ve,[n(s,{modelValue:t.pizza,"onUpdate:modelValue":o[3]||(o[3]=i=>t.pizza=i),inputId:"ingredient4",name:"pizza",value:"Onion"},null,8,["modelValue"]),xe])]),n(p,{code:t.code},null,8,["code"])],64)}const ke=m(re,[["render",ge]]),ye={data(){return{code:{basic:"import Checkbox from 'primevue/checkbox';"}}}};function Ce(c,o,r,a,t,b){const l=_,s=k;return d(),f(h,null,[n(l,x(g(c.$attrs)),null,16),n(s,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ze=m(ye,[["render",Ce]]),$e={data(){return{checked:!1,code:{basic:'<Checkbox v-model="checked" class="p-invalid" />',options:`<template>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" class="p-invalid" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Checkbox v-model="checked" class="p-invalid" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>`}}}},Se=e("p",null,[u("Invalid state style is added using the "),e("i",null,"p-invalid"),u(" class to indicate a failed validation.")],-1),De={class:"card flex justify-content-center"};function Ve(c,o,r,a,t,b){const l=_,s=y("Checkbox"),p=k;return d(),f(h,null,[n(l,x(g(c.$attrs)),{default:v(()=>[Se]),_:1},16),e("div",De,[n(s,{modelValue:t.checked,"onUpdate:modelValue":o[0]||(o[0]=i=>t.checked=i),class:"p-invalid"},null,8,["modelValue"])]),n(p,{code:t.code},null,8,["code"])],64)}const Te=m($e,[["render",Ve]]),Ie={setup(){const{handleSubmit:c}=F(),{value:o,errorMessage:r}=B("value",t),a=I();function t(l){return l?!0:"Accept is required."}const b=c(l=>{l.value&&l.value.length>0&&a.add({severity:"info",summary:"Form Submitted",detail:l.value,life:3e3})});return{value:o,handleSubmit:c,onSubmit:b,errorMessage:r}},data(){return{code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <label for="chbx">I've read and accept the terms & conditions.</label>
            <Checkbox id="chbx" v-model="value" :class="{ 'p-invalid': errorMessage }" binary aria-describedby="chbx-error" />
            <small class="p-error" id="chbx-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <label for="chbx">I've read and accept the terms & conditions.</label>
            <Checkbox id="chbx" v-model="value" :class="{ 'p-invalid': errorMessage }" binary aria-describedby="chbx-error" />
            <small class="p-error" id="chbx-error">{{ errorMessage || '&nbsp;' }}</small>
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
        const { handleSubmit } = useForm();
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Accept is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <label for="chbx">I've read and accept the terms & conditions.</label>
            <Checkbox id="chbx" v-model="value" :class="{ 'p-invalid': errorMessage }" binary aria-describedby="chbx-error" />
            <small class="p-error" id="chbx-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'Accept is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
    }
});
<\/script>
`}}}},Me=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),u(" is a popular library for handling forms in Vue.")],-1),we={class:"card flex justify-content-center"},je=e("label",{for:"chbx"},"I've read and accept the terms & conditions.",-1),Pe={id:"chbx-error",class:"p-error"};function Fe(c,o,r,a,t,b){const l=_,s=y("Checkbox"),p=y("Button"),i=k;return d(),f(h,null,[n(l,x(g(c.$attrs)),{default:v(()=>[Me]),_:1},16),e("div",we,[e("form",{onSubmit:o[1]||(o[1]=(...C)=>a.onSubmit&&a.onSubmit(...C)),class:"flex flex-column align-items-center gap-2"},[je,n(s,{id:"chbx",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=C=>a.value=C),class:M({"p-invalid":a.errorMessage}),binary:"","aria-describedby":"chbx-error"},null,8,["modelValue","class"]),e("small",Pe,$(a.errorMessage||" "),1),n(p,{type:"submit",label:"Submit"})],32)]),n(i,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const Be=m(Ie,[["render",Fe]]),Ae={data(){return{checked:!1,code:{basic:`<Checkbox
    v-model="checked"
    binary
    :pt="{
        input: ({ props, state }) => ({
            class: state.focused ? 'border-orange-400' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Checkbox
            v-model="checked"
            binary
            :pt="{
                input: ({ props, state }) => ({
                    class: state.focused ? 'border-orange-400' : undefined
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
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Checkbox
            v-model="checked"
            binary
            :pt="{
                input: ({ props, state }) => ({
                    class: state.focused ? 'border-orange-400' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>`}}}},Re={class:"card flex justify-content-center"};function Ue(c,o,r,a,t,b){const l=_,s=y("Checkbox"),p=k;return d(),f(h,null,[n(l,x(g(c.$attrs)),null,16),e("div",Re,[n(s,{modelValue:t.checked,"onUpdate:modelValue":o[0]||(o[0]=i=>t.checked=i),binary:"",pt:{input:({props:i,state:C})=>({class:C.focused?"border-orange-400":void 0})}},null,8,["modelValue","pt"])]),n(p,{code:t.code},null,8,["code"])],64)}const Oe=m(Ae,[["render",Ue]]),Ne={},qe=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/checkbox.jpg"})],-1);function Le(c,o){const r=_;return d(),f(h,null,[n(r,x(g(c.$attrs)),{default:v(()=>[e("p",null,$(c.$attrs.description),1)]),_:1},16),qe],64)}const Ee=m(Ne,[["render",Le]]),Ge={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ee},{id:"pt.doc.checkbox",label:"Checkbox PT Options",component:w,data:A("Checkbox")},{id:"pt.demo",label:"Demo",component:Oe}]}}},Ke={class:"doc-main"},We=e("div",{class:"doc-intro"},[e("h1",null,"Checkbox Pass Through")],-1);function He(c,o,r,a,t,b){const l=D,s=V;return d(),f(h,null,[e("div",Ke,[We,n(l,{docs:t.docs},null,8,["docs"])]),n(s,{docs:t.docs},null,8,["docs"])],64)}const Je=m(Ge,[["render",He]]),Qe={},Xe=e("p",null,"List of class names used in the styled mode.",-1),Ye=j('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-checkbox</td><td>Container element</td></tr><tr><td>p-checkbox-box</td><td>Container of icon.</td></tr><tr><td>p-checkbox-icon</td><td>Icon element.</td></tr></tbody></table></div>',1);function Ze(c,o){const r=_;return d(),f(h,null,[n(r,x(g(c.$attrs)),{default:v(()=>[Xe]),_:1},16),Ye],64)}const et=m(Qe,[["render",Ze]]),tt={data(){return{code1:{basic:`
export default {
    checkbox: {
        root: {
            class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
        },
        input: ({ props, context }) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                {
                    'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900': !context.checked,
                    'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400': context.checked
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        }),
        icon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900'
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Checkbox v-model="checked" :binary="true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>`}}}},ot=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function nt(c,o,r,a,t,b){const l=R,s=k,p=_;return d(),z(p,x(g(c.$attrs)),{default:v(()=>[e("p",null,[u(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(l,{to:"/tailwind"},{default:v(()=>[u("Tailwind Customization")]),_:1}),u(" section for an example. ")]),n(s,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),ot,n(s,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const ct=m(tt,[["render",nt]]),lt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:et},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ct}]}]}}},st={class:"doc-main"},it=e("div",{class:"doc-intro"},[e("h1",null,"Checkbox Theming")],-1);function at(c,o,r,a,t,b){const l=D,s=V;return d(),f(h,null,[e("div",st,[it,n(l,{docs:t.docs},null,8,["docs"])]),n(s,{docs:t.docs},null,8,["docs"])],64)}const rt=m(lt,[["render",at]]),dt={data(){return{docs:[{id:"import",label:"Import",component:ze},{id:"basic",label:"Basic",component:Q},{id:"group",label:"Group",component:ke},{id:"dynamic",label:"Dynamic",component:ae},{id:"invalid",label:"Invalid",component:Te},{id:"disabled",label:"Disabled",component:te},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Be}]},{id:"accessibility",label:"Accessibility",component:G}],ptComponent:Je,themingDoc:rt}}};function ut(c,o,r,a,t,b){const l=P;return d(),z(l,{title:"Vue Checkbox Component",header:"Checkbox",description:"Checkbox is an extension to standard checkbox element with theming.",componentDocs:t.docs,apiDocs:["Checkbox"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ht=m(dt,[["render",ut]]);export{ht as default};
