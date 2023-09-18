import{_ as p,o as r,e as $,w as h,a as o,m as C,b as e,f as u,p as k,h as _,j as z,c as m,n as y,g as x,F as b,q as V,t as R,B as w,D,k as S,l as I,v as P,x as T}from"./entry.68beb385.js";import{u as M,a as F}from"./vee-validate.esm.3b430014.js";import{g as j}from"./PTHelper.11558b27.js";import{_ as O}from"./PrimeVueNuxtLink.f51d0c80.js";const A={data(){return{code:{basic:`<label for="rb1">One</label>
<RadioButton inputId="rb1" />

<span id="rb2">Two</span>
<RadioButton aria-labelledby="rb2" />

<RadioButton aria-label="Three" />`}}}},U=e("h3",null,"Screen Reader",-1),N=e("p",null,[u(" RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via "),e("i",null,"label"),u(" tag combined with "),e("i",null,"id"),u(" prop or using "),e("i",null,"aria-labelledby"),u(", "),e("i",null,"aria-label"),u(" props. ")],-1),q=e("h3",null,"Keyboard Support",-1),L=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the checked radio button, if there is none within the group then first radio button receives the focus.")]),e("tr",null,[e("td",null,[e("span",{class:"inline-flex flex-column"},[e("i",{class:"mb-1"},"left arrow"),e("i",null,"up arrow")])]),e("td",null,"Moves focus to the previous radio button, if there is none then last radio button receives the focus.")]),e("tr",null,[e("td",null,[e("span",{class:"inline-flex flex-column"},[e("i",{class:"mb-1"},"right arrow"),e("i",null,"down arrow")])]),e("td",null,"Moves focus to the next radio button, if there is none then first radio button receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"If the focused radio button is unchecked, changes the state to checked.")])])])],-1);function E(l,n,c,s,t,v){const a=k,i=_;return r(),$(i,C({id:"accessibility",label:"Accessibility"},l.$attrs),{default:h(()=>[U,N,o(a,C({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},l.$attrs),null,16,["code"]),q,L]),_:1},16)}const G=p(A,[["render",E]]),K={data(){return{checked:!0,code:{basic:'<RadioButton v-model="checked" disabled :value="checked" />',options:`<template>
    <div class="card flex justify-content-center">
        <RadioButton v-model="checked" disabled :value="checked" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: true
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <RadioButton v-model="checked" disabled :value="checked" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
<\/script>`}}}},W=e("p",null,[u("When "),e("i",null,"disabled"),u(" is present, the element cannot be edited and focused.")],-1),H={class:"card flex justify-content-center"};function J(l,n,c,s,t,v){const a=_,i=z("RadioButton"),f=k;return r(),m(b,null,[o(a,y(x(l.$attrs)),{default:h(()=>[W]),_:1},16),e("div",H,[o(i,{modelValue:t.checked,"onUpdate:modelValue":n[0]||(n[0]=d=>t.checked=d),disabled:"",value:t.checked},null,8,["modelValue","value"])]),o(f,{code:t.code},null,8,["code"])],64)}const Q=p(K,[["render",J]]),X={data(){return{categories:[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}],selectedCategory:"Production",code:{basic:`<div v-for="category in categories" :key="category.key" class="flex align-items-center">
    <RadioButton v-model="selectedCategory" :inputId="category.key" name="pizza" :value="category.name" />
    <label :for="category.key" class="ml-2">{{ category.name }}</label>
</div>
`,options:`<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div v-for="category in categories" :key="category.key" class="flex align-items-center">
                <RadioButton v-model="selectedCategory" :inputId="category.key" name="pizza" :value="category.name" />
                <label :for="category.key" class="ml-2">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCategory: 'Production',
            categories: [
                { name: 'Accounting', key: 'A' },
                { name: 'Marketing', key: 'M' },
                { name: 'Production', key: 'P' },
                { name: 'Research', key: 'R' }
            ]
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div v-for="category in categories" :key="category.key" class="flex align-items-center">
                <RadioButton v-model="selectedCategory" :inputId="category.key" name="pizza" :value="category.name" />
                <label :for="category.key" class="ml-2">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedCategory = ref('Production');
const categories = ref([
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
]);
<\/script>`}}}},Y=e("p",null,"RadioButtons can be generated using a list of values.",-1),Z={class:"card flex justify-content-center"},ee={class:"flex flex-column gap-3"},te=["for"];function ne(l,n,c,s,t,v){const a=_,i=z("RadioButton"),f=k;return r(),m(b,null,[o(a,y(x(l.$attrs)),{default:h(()=>[Y]),_:1},16),e("div",Z,[e("div",ee,[(r(!0),m(b,null,V(t.categories,d=>(r(),m("div",{key:d.key,class:"flex align-items-center"},[o(i,{modelValue:t.selectedCategory,"onUpdate:modelValue":n[0]||(n[0]=g=>t.selectedCategory=g),inputId:d.key,name:"pizza2",value:d.name},null,8,["modelValue","inputId","value"]),e("label",{for:d.key,class:"ml-2"},R(d.name),9,te)]))),128))])]),o(f,{code:t.code},null,8,["code"])],64)}const oe=p(X,[["render",ne]]),ie={data(){return{ingredient:"",code:{basic:`<div class="flex flex-wrap gap-3">
    <div class="flex align-items-center">
        <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1" class="ml-2">Cheese</label>
    </div>
    <div class="flex align-items-center">
        <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
        <label for="ingredient2" class="ml-2">Mushroom</label>
    </div>
    <div class="flex align-items-center">
        <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
        <label for="ingredient3" class="ml-2">Pepper</label>
    </div>
    <div class="flex align-items-center">
        <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
        <label for="ingredient4" class="ml-2">Onion</label>
    </div>
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="ingredient1" class="ml-2">Cheese</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="ingredient2" class="ml-2">Mushroom</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
                <label for="ingredient3" class="ml-2">Pepper</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
                <label for="ingredient4" class="ml-2">Onion</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ingredient: ''
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="ingredient1" class="ml-2">Cheese</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="ingredient2" class="ml-2">Mushroom</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
                <label for="ingredient3" class="ml-2">Pepper</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
                <label for="ingredient4" class="ml-2">Onion</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const ingredient = ref('');
<\/script>`}}}},le=e("p",null,[u("Two-way value binding is defined using "),e("i",null,"v-model"),u(".")],-1),ae={class:"card flex justify-content-center"},se={class:"flex flex-wrap gap-3"},de={class:"flex align-items-center"},re=e("label",{for:"ingredient1",class:"ml-2"},"Cheese",-1),ce={class:"flex align-items-center"},ue=e("label",{for:"ingredient2",class:"ml-2"},"Mushroom",-1),me={class:"flex align-items-center"},pe=e("label",{for:"ingredient3",class:"ml-2"},"Pepper",-1),ve={class:"flex align-items-center"},fe=e("label",{for:"ingredient4",class:"ml-2"},"Onion",-1);function ge(l,n,c,s,t,v){const a=_,i=z("RadioButton"),f=k;return r(),m(b,null,[o(a,y(x(l.$attrs)),{default:h(()=>[le]),_:1},16),e("div",ae,[e("div",se,[e("div",de,[o(i,{modelValue:t.ingredient,"onUpdate:modelValue":n[0]||(n[0]=d=>t.ingredient=d),inputId:"ingredient1",name:"pizza",value:"Cheese"},null,8,["modelValue"]),re]),e("div",ce,[o(i,{modelValue:t.ingredient,"onUpdate:modelValue":n[1]||(n[1]=d=>t.ingredient=d),inputId:"ingredient2",name:"pizza",value:"Mushroom"},null,8,["modelValue"]),ue]),e("div",me,[o(i,{modelValue:t.ingredient,"onUpdate:modelValue":n[2]||(n[2]=d=>t.ingredient=d),inputId:"ingredient3",name:"pizza",value:"Pepper"},null,8,["modelValue"]),pe]),e("div",ve,[o(i,{modelValue:t.ingredient,"onUpdate:modelValue":n[3]||(n[3]=d=>t.ingredient=d),inputId:"ingredient4",name:"pizza",value:"Onion"},null,8,["modelValue"]),fe])])]),o(f,{code:t.code},null,8,["code"])],64)}const be=p(ie,[["render",ge]]),_e={data(){return{code:{basic:"import RadioButton from 'primevue/radiobutton';"}}}};function he(l,n,c,s,t,v){const a=_,i=k;return r(),m(b,null,[o(a,y(x(l.$attrs)),null,16),o(i,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ye=p(_e,[["render",he]]),xe={data(){return{checked:!1,code:{basic:'<RadioButton class="p-invalid" />',options:`<template>
    <div class="card flex justify-content-center">
        <RadioButton class="p-invalid" />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <RadioButton class="p-invalid" />
    </div>
</template>

<script setup>
<\/script>`}}}},ke=e("p",null,[u("Invalid state style is added using the "),e("i",null,"p-invalid"),u(" class to indicate a failed validation.")],-1),ze={class:"card flex justify-content-center"};function Re(l,n,c,s,t,v){const a=_,i=z("RadioButton"),f=k;return r(),m(b,null,[o(a,y(x(l.$attrs)),{default:h(()=>[ke]),_:1},16),e("div",ze,[o(i,{class:"p-invalid"})]),o(f,{code:t.code},null,8,["code"])],64)}const Be=p(xe,[["render",Re]]),$e={setup(){const{handleSubmit:l,resetForm:n}=M(),{value:c,errorMessage:s}=F("value",v),t=w();function v(i){return i?!0:"Value is required."}const a=l(i=>{i.value&&i.value.length>0&&(t.add({severity:"info",summary:"Form Submitted",detail:i.value,life:3e3}),n())});return{value:c,handleSubmit:l,onSubmit:a,errorMessage:s}},data(){return{code:{basic:`<div class="card flex justify-content-center">
    <form @submit="onSubmit" class="flex flex-column gap-2">
        <div>Please choose your ingredient.</div>
        <div class="flex flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButton v-model="value" inputId="ingredient1" name="pizza2" value="Cheese" />
                <label for="ingredient1" class="ml-2">Cheese</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="value" inputId="ingredient2" name="pizza2" value="Mushroom" />
                <label for="ingredient2" class="ml-2">Mushroom</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="value" inputId="ingredient3" name="pizza2" value="Pepper" />
                <label for="ingredient3" class="ml-2">Pepper</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="value" inputId="ingredient4" name="pizza2" value="Onion" />
                <label for="ingredient4" class="ml-2">Onion</label>
            </div>
        </div>

        <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
        <Button type="submit" label="Submit" />
    </form>
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <div>Please choose your ingredient.</div>
            <div class="flex flex-wrap gap-3">
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient1" name="pizza2" value="Cheese" />
                    <label for="ingredient1" class="ml-2">Cheese</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient2" name="pizza2" value="Mushroom" />
                    <label for="ingredient2" class="ml-2">Mushroom</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient3" name="pizza2" value="Pepper" />
                    <label for="ingredient3" class="ml-2">Pepper</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient4" name="pizza2" value="Onion" />
                    <label for="ingredient4" class="ml-2">Onion</label>
                </div>
            </div>

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
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <div>Please choose your ingredient.</div>
            <div class="flex flex-wrap gap-3">
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient1" name="pizza2" value="Cheese" />
                    <label for="ingredient1" class="ml-2">Cheese</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient2" name="pizza2" value="Mushroom" />
                    <label for="ingredient2" class="ml-2">Mushroom</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient3" name="pizza2" value="Pepper" />
                    <label for="ingredient3" class="ml-2">Pepper</label>
                </div>
                <div class="flex align-items-center">
                    <RadioButton v-model="value" inputId="ingredient4" name="pizza2" value="Onion" />
                    <label for="ingredient4" class="ml-2">Onion</label>
                </div>
            </div>

            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
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
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm();
    }
});
<\/script>`}}}},Ce=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),u(" is a popular library for handling forms in Vue.")],-1),Ve={class:"card flex justify-content-center"},Se=e("div",null,"Please choose your ingredient.",-1),Ie={class:"flex flex-wrap gap-3"},we={class:"flex align-items-center"},De=e("label",{for:"ingredient1",class:"ml-2"},"Cheese",-1),Pe={class:"flex align-items-center"},Te=e("label",{for:"ingredient2",class:"ml-2"},"Mushroom",-1),Me={class:"flex align-items-center"},Fe=e("label",{for:"ingredient3",class:"ml-2"},"Pepper",-1),je={class:"flex align-items-center"},Oe=e("label",{for:"ingredient4",class:"ml-2"},"Onion",-1),Ae={id:"text-error",class:"p-error"};function Ue(l,n,c,s,t,v){const a=_,i=z("RadioButton"),f=z("Button"),d=k;return r(),m(b,null,[o(a,y(x(l.$attrs)),{default:h(()=>[Ce]),_:1},16),e("div",Ve,[e("form",{onSubmit:n[4]||(n[4]=(...g)=>s.onSubmit&&s.onSubmit(...g)),class:"flex flex-column gap-2"},[Se,e("div",Ie,[e("div",we,[o(i,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=g=>s.value=g),inputId:"ingredient1",name:"pizza2",value:"Cheese"},null,8,["modelValue"]),De]),e("div",Pe,[o(i,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=g=>s.value=g),inputId:"ingredient2",name:"pizza2",value:"Mushroom"},null,8,["modelValue"]),Te]),e("div",Me,[o(i,{modelValue:s.value,"onUpdate:modelValue":n[2]||(n[2]=g=>s.value=g),inputId:"ingredient3",name:"pizza2",value:"Pepper"},null,8,["modelValue"]),Fe]),e("div",je,[o(i,{modelValue:s.value,"onUpdate:modelValue":n[3]||(n[3]=g=>s.value=g),inputId:"ingredient4",name:"pizza2",value:"Onion"},null,8,["modelValue"]),Oe])]),e("small",Ae,R(s.errorMessage||" "),1),o(f,{type:"submit",label:"Submit"})],32)]),o(d,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const Ne=p($e,[["render",Ue]]),qe={data(){return{categories:[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}],selectedCategory:"Production",code:{basic:`<div v-for="(category, index) in categories" :key="category.key" class="flex align-items-center">
    <RadioButton
        v-model="selectedCategory"
        :inputId="category.key"
        name="pizza"
        :value="category.name"
        :pt="{
            input: ({ props }) => ({
                class: props.modelValue === categories[index].name ? 'bg-orange-500 border-orange-500' : undefined
            })
        }"
    />
    <label :for="category.key" class="ml-2">{{ category.name }}</label>
</div>
`,options:`<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div v-for="(category, index) in categories" :key="category.key" class="flex align-items-center">
                <RadioButton
                    v-model="selectedCategory"
                    :inputId="category.key"
                    name="pizza"
                    :value="category.name"
                    :pt="{
                        input: ({ props }) => ({
                            class: props.modelValue === categories[index].name ? 'bg-orange-500 border-orange-500' : undefined
                        })
                    }"
                />
                <label :for="category.key" class="ml-2">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCategory: 'Production',
            categories: [
                { name: 'Accounting', key: 'A' },
                { name: 'Marketing', key: 'M' },
                { name: 'Production', key: 'P' },
                { name: 'Research', key: 'R' }
            ]
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <div v-for="(category, index) in categories" :key="category.key" class="flex align-items-center">
                <RadioButton
                    v-model="selectedCategory"
                    :inputId="category.key"
                    name="pizza"
                    :value="category.name"
                    :pt="{
                        input: ({ props }) => ({
                            class: props.modelValue === categories[index].name ? 'bg-orange-500 border-orange-500' : undefined
                        })
                    }"
                />
                <label :for="category.key" class="ml-2">{{ category.name }}</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedCategory = ref('Production');
const categories = ref([
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
]);
<\/script>`}}}},Le={class:"card flex justify-content-center"},Ee={class:"flex flex-column gap-3"},Ge=["for"];function Ke(l,n,c,s,t,v){const a=_,i=z("RadioButton"),f=k;return r(),m(b,null,[o(a,y(x(l.$attrs)),null,16),e("div",Le,[e("div",Ee,[(r(!0),m(b,null,V(t.categories,(d,g)=>(r(),m("div",{key:d.key,class:"flex align-items-center"},[o(i,{modelValue:t.selectedCategory,"onUpdate:modelValue":n[0]||(n[0]=B=>t.selectedCategory=B),inputId:d.key,name:"pizza",value:d.name,pt:{input:({props:B})=>({class:B.modelValue===t.categories[g].name?"bg-orange-500 border-orange-500":void 0})}},null,8,["modelValue","inputId","value","pt"]),e("label",{for:d.key,class:"ml-2"},R(d.name),9,Ge)]))),128))])]),o(f,{code:t.code},null,8,["code"])],64)}const We=p(qe,[["render",Ke]]),He={},Je=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/radiobutton.jpg"})],-1);function Qe(l,n){const c=_;return r(),m(b,null,[o(c,y(x(l.$attrs)),{default:h(()=>[e("p",null,R(l.$attrs.description),1)]),_:1},16),Je],64)}const Xe=p(He,[["render",Qe]]),Ye={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Xe},{id:"pt.doc.radiobutton",label:"RadioButton PT Options",component:D,data:j("RadioButton")},{id:"pt.demo",label:"Demo",component:We}]}}},Ze={class:"doc-main"},et=e("div",{class:"doc-intro"},[e("h1",null,"RadioButton Pass Through")],-1);function tt(l,n,c,s,t,v){const a=S,i=I;return r(),m(b,null,[e("div",Ze,[et,o(a,{docs:t.docs},null,8,["docs"])]),o(i,{docs:t.docs},null,8,["docs"])],64)}const nt=p(Ye,[["render",tt]]),ot={},it=e("p",null,"List of class names used in the styled mode.",-1),lt=P('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-radiobutton</td><td>Container element</td></tr><tr><td>p-radiobutton-box</td><td>Container of icon.</td></tr><tr><td>p-radiobutton-icon</td><td>Icon element.</td></tr></tbody></table></div>',1);function at(l,n){const c=_;return r(),m(b,null,[o(c,y(x(l.$attrs)),{default:h(()=>[it]),_:1},16),lt],64)}const st=p(ot,[["render",at]]),dt={data(){return{code1:{basic:`
export default {
    radiobutton: {
        root: {
            class: ['relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6']
        },
        input: ({ props }) => ({
            class: [
                'flex justify-center items-center',
                'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
                {
                    'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80': props.value !== props.modelValue,
                    'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400': props.value == props.modelValue
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        }),
        icon: ({ props }) => ({
            class: [
                'transform rounded-full',
                'block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900',
                {
                    'backface-hidden scale-10 invisible': props.value !== props.modelValue,
                    'transform scale-100 visible': props.value == props.modelValue
                }
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <div class="flex flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="ingredient1" class="text-gray-700 dark:text-white/80 ml-2">Cheese</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="ingredient2" class="text-gray-700 dark:text-white/80 ml-2">Mushroom</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
                <label for="ingredient3" class="text-gray-700 dark:text-white/80 ml-2">Pepper</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
                <label for="ingredient4" class="text-gray-700 dark:text-white/80 ml-2">Onion</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const ingredient = ref('');
<\/script>`}}}},rt=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function ct(l,n,c,s,t,v){const a=O,i=k,f=_;return r(),$(f,y(x(l.$attrs)),{default:h(()=>[e("p",null,[u(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(a,{to:"/tailwind"},{default:h(()=>[u("Tailwind Customization")]),_:1}),u(" section for an example. ")]),o(i,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),rt,o(i,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const ut=p(dt,[["render",ct]]),mt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:st},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ut}]}]}}},pt={class:"doc-main"},vt=e("div",{class:"doc-intro"},[e("h1",null,"RadioButton Theming")],-1);function ft(l,n,c,s,t,v){const a=S,i=I;return r(),m(b,null,[e("div",pt,[vt,o(a,{docs:t.docs},null,8,["docs"])]),o(i,{docs:t.docs},null,8,["docs"])],64)}const gt=p(mt,[["render",ft]]),bt={data(){return{docs:[{id:"import",label:"Import",component:ye},{id:"group",label:"Group",component:be},{id:"dynamic",label:"Dynamic",component:oe},{id:"invalid",label:"Invalid",component:Be},{id:"disabled",label:"Disabled",component:Q},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Ne}]},{id:"accessibility",label:"Accessibility",component:G}],ptComponent:nt,themingDoc:gt}}};function _t(l,n,c,s,t,v){const a=T;return r(),$(a,{title:"Vue RadioButton Component",header:"RadioButton",description:"RadioButton is an extension to standard radio button element with theming.",componentDocs:t.docs,apiDocs:["RadioButton"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const zt=p(bt,[["render",_t]]);export{zt as default};
