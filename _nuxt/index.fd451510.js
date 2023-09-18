import{_ as p,o as m,e as O,w as v,m as V,b as e,f as a,h as b,j as x,c as _,a as n,n as y,g,F as h,p as S,A as B,B as j,t as D,D as C,k as T,l as w,v as F,x as L}from"./entry.68beb385.js";import{u as M,a as P}from"./vee-validate.esm.3b430014.js";import{g as k}from"./PTHelper.11558b27.js";import{_ as N}from"./PrimeVueNuxtLink.f51d0c80.js";const E={data(){return{code:{basic:`<span id="label_number">Number</span>
<Slider aria-labelledby="label_number" />

<Slider aria-label="Number" />`}}}},U=e("h3",null,"Screen Reader",-1),I=e("p",null,[a(" SelectButton component uses hidden native checkbox role for multiple selection and hidden radio role for single selection that is only visible to screen readers. Value to describe the component can be provided via "),e("i",null,"aria-labelledby"),a(" property. ")],-1),K=e("h3",null,"Keyboard Support",-1),A=e("p",null,"Keyboard interaction is derived from the native browser handling of checkboxs in a group.",-1),z=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the first selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("span",{class:"inline-flex flex-column"},[e("i",{class:"mb-1"},"right arrow"),e("i",null,"up arrow")])]),e("td",null,"Moves focus to the previous option.")]),e("tr",null,[e("td",null,[e("span",{class:"inline-flex flex-column"},[e("i",{class:"mb-1"},"left arrow"),e("i",null,"down arrow")])]),e("td",null,"Moves focus to the next option.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the checked state of a button.")])])])],-1);function R(l,o,u,c,t,f){const s=b;return m(),O(s,V({id:"accessibility",label:"Accessibility"},l.$attrs),{default:v(()=>[U,I,K,A,z]),_:1},16)}const q=p(E,[["render",R]]),J={data(){return{value:"Off",options:["Off","On"],code:{basic:'<SelectButton v-model="value" :options="options" aria-labelledby="basic" />',options:`<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'Off',
            options: ['Off', 'On']
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('Off');
const options = ref(['Off', 'On']);
<\/script>`}}}},W=e("p",null,[a(" SelectButton is used as a controlled component with "),e("i",null,"modelValue"),a(" property along with an "),e("i",null,"options"),a(" collection. Label and value of an option are defined with the "),e("i",null,"optionLabel"),a(" and "),e("i",null,"optionValue"),a(" properties respectively. Note that, when options are simple primitive values such as a string array, no "),e("i",null,"optionLabel"),a(" and "),e("i",null,"optionValue"),a(" would be necessary. ")],-1),G={class:"card flex justify-content-center"};function H(l,o,u,c,t,f){const s=b,i=x("SelectButton"),d=S;return m(),_(h,null,[n(s,y(g(l.$attrs)),{default:v(()=>[W]),_:1},16),e("div",G,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),options:t.options,"aria-labelledby":"basic"},null,8,["modelValue","options"])]),n(d,{code:t.code},null,8,["code"])],64)}const Q=p(J,[["render",H]]),X={data(){return{value:"Off",value2:null,options1:["Off","On"],options2:[{name:"Option 1",value:1,constant:!1},{name:"Option 2",value:2,constant:!0}],code:{basic:`<SelectButton v-model="value" :options="options" disabled />
<SelectButton v-model="value" :options="options2" optionDisabled="constant" optionLabel="name" />`,options:`<template>
    <div class="card flex flex-wrap justify-content-center flex-wrap gap-3">
        <SelectButton v-model="value" :options="options" disabled />
        <SelectButton v-model="value" :options="options2" optionDisabled="constant" optionLabel="name" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'Off',
            value2: null,
            options1: ['Off', 'On'],
            options2: [
                { name: 'Option 1', value: 1 },
                { name: 'Option 2', value: 2, constant: true }
            ]
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center flex-wrap gap-3">
        <SelectButton v-model="value" :options="options" disabled />
        <SelectButton v-model="value" :options="options2" optionDisabled="constant" optionLabel="name" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('Off');
const value2 = ref();
const options1 = ref(['Off', 'On']);
const options2 = ref([
                { name: 'Option 1', value: 1 },
                { name: 'Option 2', value: 2, constant: true }
            ]);
<\/script>`}}}},Y=e("p",null,[a("When "),e("i",null,"disabled"),a(" is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the "),e("i",null,"optionDisabled"),a(" property.")],-1),Z={class:"card flex flex-wrap justify-content-center flex-wrap gap-3"};function ee(l,o,u,c,t,f){const s=b,i=x("SelectButton"),d=S;return m(),_(h,null,[n(s,y(g(l.$attrs)),{default:v(()=>[Y]),_:1},16),e("div",Z,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),options:t.options1,disabled:""},null,8,["modelValue","options"]),n(i,{modelValue:t.value2,"onUpdate:modelValue":o[1]||(o[1]=r=>t.value2=r),options:t.options2,optionDisabled:"constant",optionLabel:"name"},null,8,["modelValue","options"])]),n(d,{code:t.code},null,8,["code"])],64)}const te=p(X,[["render",ee]]),oe={data(){return{code:{basic:"import SelectButton from 'primevue/selectbutton';"}}}};function ne(l,o,u,c,t,f){const s=b,i=S;return m(),_(h,null,[n(s,y(g(l.$attrs)),null,16),n(i,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const le=p(oe,[["render",ne]]),ie={data(){return{value:"Off",options:["Off","On"],code:{basic:'<SelectButton v-model="value" :options="options" aria-labelledby="basic" class="p-invalid" />',options:`<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" class="p-invalid" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'off',
            options: ['Off', 'On']
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" class="p-invalid" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('off');
const options = ref(['Off', 'On']);
<\/script>`}}}},se=e("p",null,[a("Invalid state style is added using the "),e("i",null,"p-invalid"),a(" class to indicate a failed validation.")],-1),ae={class:"card flex justify-content-center"};function ce(l,o,u,c,t,f){const s=b,i=x("SelectButton"),d=S;return m(),_(h,null,[n(s,y(g(l.$attrs)),{default:v(()=>[se]),_:1},16),e("div",ae,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),options:t.options,"aria-labelledby":"basic",class:"p-invalid"},null,8,["modelValue","options"])]),n(d,{code:t.code},null,8,["code"])],64)}const re=p(ie,[["render",ce]]),ue={data(){return{value:null,options:[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}],code:{basic:'<SelectButton v-model="value" :options="options" optionLabel="name" multiple aria-labelledby="multiple" />',options:`<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" optionLabel="name" multiple aria-labelledby="multiple" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null,
            options: [
                { name: 'Option 1', value: 1 },
                { name: 'Option 2', value: 2 },
                { name: 'Option 3', value: 3 }
            ]
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" optionLabel="name" multiple aria-labelledby="multiple" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = ref([
                { name: 'Option 1', value: 1 },
                { name: 'Option 2', value: 2 },
                { name: 'Option 3', value: 3 }
            ]);
<\/script>`}}}},de=e("p",null,[a("SelectButton allows selecting only one item by default and setting "),e("i",null,"multiple"),a(" option enables choosing more than one item. In multiple case, model property should be an array.")],-1),pe={class:"card flex justify-content-center"};function me(l,o,u,c,t,f){const s=b,i=x("SelectButton"),d=S;return m(),_(h,null,[n(s,y(g(l.$attrs)),{default:v(()=>[de]),_:1},16),e("div",pe,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),options:t.options,optionLabel:"name",multiple:"","aria-labelledby":"multiple"},null,8,["modelValue","options"])]),n(d,{code:t.code},null,8,["code"])],64)}const fe=p(ue,[["render",me]]),ve={data(){return{value:null,options:[{icon:"pi pi-align-left",value:"Left"},{icon:"pi pi-align-right",value:"Right"},{icon:"pi pi-align-center",value:"Center"},{icon:"pi pi-align-justify",value:"Justify"}],code:{basic:`<SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom">
    <template #option="slotProps">
        <i :class="slotProps.option.icon"></i>
    </template>
</SelectButton>`,options:`<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom">
            <template #option="slotProps">
                <i :class="slotProps.option.icon"></i>
            </template>
        </SelectButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null,
            options: [
                { icon: 'pi pi-align-left', value: 'Left' },
                { icon: 'pi pi-align-right', value: 'Right' },
                { icon: 'pi pi-align-center', value: 'Center' },
                { icon: 'pi pi-align-justify', value: 'Justify' }
            ]
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <SelectButton v-model="value" :options="options" optionLabel="value" dataKey="value" aria-labelledby="custom">
            <template #option="slotProps">
                <i :class="slotProps.option.icon"></i>
            </template>
        </SelectButton>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
const options = ref([
                { icon: 'pi pi-align-left', value: 'Left' },
                { icon: 'pi pi-align-right', value: 'Right' },
                { icon: 'pi pi-align-center', value: 'Center' },
                { icon: 'pi pi-align-justify', value: 'Justify' }
            ]);
<\/script>`}}}},be=e("p",null,[a("Label of an option is used as the display text of an item by default, for custom content support define an "),e("i",null,"option"),a(" template that gets the option instance as a parameter.")],-1),_e={class:"card flex justify-content-center"};function he(l,o,u,c,t,f){const s=b,i=x("SelectButton"),d=S;return m(),_(h,null,[n(s,y(g(l.$attrs)),{default:v(()=>[be]),_:1},16),e("div",_e,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),options:t.options,optionLabel:"value",dataKey:"value","aria-labelledby":"custom"},{option:v(r=>[e("i",{class:B(r.option.icon)},null,2)]),_:1},8,["modelValue","options"])]),n(d,{code:t.code},null,8,["code"])],64)}const ye=p(ve,[["render",he]]),ge={setup(){const{handleSubmit:l,resetForm:o}=M(),{value:u,errorMessage:c}=P("value",f),t=j();function f(i){return i?!0:"Engine State is required."}const s=l(i=>{i.value&&i.value.length>0&&(t.add({severity:"info",summary:"Form Submitted",detail:i.value,life:3e3}),o())});return{value:u,handleSubmit:l,onSubmit:s,errorMessage:c}},data(){return{options:["Off","On"],code:{basic:`<div class="card flex justify-content-center">
    <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
        <label for="item" :class="['flex justify-content-center', { 'p-error': errorMessage }]"> Engine State </label>
        <SelectButton id="item" v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" :options="options" />
        <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
        <Button type="submit" label="Submit" />
    </form>
    <Toast />
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <label for="item" :class="['flex justify-content-center', { 'p-error': errorMessage }]"> Engine State </label>
            <SelectButton id="item" v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" :options="options" />
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
                return 'Engine State is required.';
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
    data() {
        return {
            options: ['Off', 'On']
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <label for="item" :class="['flex justify-content-center', { 'p-error': errorMessage }]"> Engine State </label>
            <SelectButton id="item" v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" :options="options" />
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

const options = ['Off', 'On'];

function validateField(value) {
    if (!value) {
        return 'Engine State is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm();
    }
});
<\/script>`}}}},Se=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),a(" is a popular library for handling forms in Vue.")],-1),xe={class:"card flex justify-content-center"},$e={id:"text-error",class:"p-error"};function Be(l,o,u,c,t,f){const s=b,i=x("SelectButton"),d=x("Button"),r=S;return m(),_(h,null,[n(s,y(g(l.$attrs)),{default:v(()=>[Se]),_:1},16),e("div",xe,[e("form",{onSubmit:o[1]||(o[1]=(...$)=>c.onSubmit&&c.onSubmit(...$)),class:"flex flex-column align-items-center gap-2"},[e("label",{for:"item",class:B(["flex justify-content-center",{"p-error":c.errorMessage}])}," Engine State ",2),n(i,{id:"item",modelValue:c.value,"onUpdate:modelValue":o[0]||(o[0]=$=>c.value=$),class:B({"p-invalid":c.errorMessage}),"aria-describedby":"text-error",options:t.options},null,8,["modelValue","class","options"]),e("small",$e,D(c.errorMessage||" "),1),n(d,{type:"submit",label:"Submit"})],32)]),n(r,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const Oe=p(ge,[["render",Be]]),De={data(){return{value:"Off",options:["Off","On"],code:{basic:`<SelectButton
    v-model="value"
    :options="options"
    aria-labelledby="basic"
    :pt="{
        button: ({ context }) => ({
            class: context.active ? 'bg-cyan-400 border-cyan-400' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <SelectButton
            v-model="value"
            :options="options"
            aria-labelledby="basic"
            :pt="{
                button: ({ context }) => ({
                    class: context.active ? 'bg-cyan-400 border-cyan-400' : undefined
                })
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'off',
            options: ['Off', 'On']
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <SelectButton
            v-model="value"
            :options="options"
            aria-labelledby="basic"
            :pt="{
                button: ({ context }) => ({
                    class: context.active ? 'bg-cyan-400 border-cyan-400' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('off');
const options = ref(['Off', 'On']);
<\/script>`}}}},Te={class:"card flex justify-content-center"};function we(l,o,u,c,t,f){const s=b,i=x("SelectButton"),d=S;return m(),_(h,null,[n(s,y(g(l.$attrs)),null,16),e("div",Te,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),options:t.options,"aria-labelledby":"basic",pt:{button:({context:r})=>({class:r.active?"bg-cyan-400 border-cyan-400":void 0})}},null,8,["modelValue","options","pt"])]),n(d,{code:t.code},null,8,["code"])],64)}const Ve=p(De,[["render",we]]),je={},Ce=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/selectbutton.jpg"})],-1);function Fe(l,o){const u=b;return m(),_(h,null,[n(u,y(g(l.$attrs)),{default:v(()=>[e("p",null,D(l.$attrs.description),1)]),_:1},16),Ce],64)}const Le=p(je,[["render",Fe]]),Me={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Le},{id:"pt.doc.steps",label:"SelectButton PT Options",component:C,data:k("SelectButton")},{id:"pt.demo",label:"Demo",component:Ve}]}}},Pe={class:"doc-main"},ke=e("div",{class:"doc-intro"},[e("h1",null,"SelectButton Pass Through")],-1);function Ne(l,o,u,c,t,f){const s=T,i=w;return m(),_(h,null,[e("div",Pe,[ke,n(s,{docs:t.docs},null,8,["docs"])]),n(i,{docs:t.docs},null,8,["docs"])],64)}const Ee=p(Me,[["render",Ne]]),Ue={},Ie=e("p",null,"List of class names used in the styled mode.",-1),Ke=F('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-select-button</td><td>SelectButton element</td></tr><tr><td>p-button</td><td>Button element</td></tr><tr><td>p-button-label</td><td>Label element of the button</td></tr></tbody></table></div>',1);function Ae(l,o){const u=b;return m(),_(h,null,[n(u,y(g(l.$attrs)),{default:v(()=>[Ie]),_:1},16),Ke],64)}const ze=p(Ue,[["render",Ae]]),Re={data(){return{code1:{basic:`
export default {
    selectbutton: {
        root: ({ props }) => ({
            class: [{ 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
        }),
        button: ({ context }) => ({
            class: [
                'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
                'px-4 py-3',
                'transition duration-200 border border-r-0',
                'first:rounded-l-md first:rounded-tr-none first:rounded-br-none last:border-r last:rounded-tl-none last:rounded-bl-none last:rounded-r-md',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-gray-300 dark:border-blue-900/40 hover:bg-gray-50 dark:hover:bg-gray-800/80 ': !context.active,
                    'bg-blue-500 border-blue-500 text-white hover:bg-blue-600': context.active,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                }
            ]
        }),
        label: 'font-bold'
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('Off');
const options = ref(['Off', 'On']);
<\/script>`}}}},qe=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Je(l,o,u,c,t,f){const s=N,i=S,d=b;return m(),O(d,y(g(l.$attrs)),{default:v(()=>[e("p",null,[a(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(s,{to:"/tailwind"},{default:v(()=>[a("Tailwind Customization")]),_:1}),a(" section for an example. ")]),n(i,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),qe,n(i,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const We=p(Re,[["render",Je]]),Ge={data(){return{docs:[{id:"theming.styled",label:"Styled",component:ze},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:We}]}]}}},He={class:"doc-main"},Qe=e("div",{class:"doc-intro"},[e("h1",null,"SelectButton Theming")],-1);function Xe(l,o,u,c,t,f){const s=T,i=w;return m(),_(h,null,[e("div",He,[Qe,n(s,{docs:t.docs},null,8,["docs"])]),n(i,{docs:t.docs},null,8,["docs"])],64)}const Ye=p(Ge,[["render",Xe]]),Ze={data(){return{docs:[{id:"import",label:"Import",component:le},{id:"basic",label:"Basic",component:Q},{id:"multiple",label:"Multiple",component:fe},{id:"template",label:"Template",component:ye},{id:"invalid",label:"Invalid",component:re},{id:"disabled",label:"Disabled",component:te},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Oe}]},{id:"accessibility",label:"Accessibility",component:q}],ptComponent:Ee,themingDoc:Ye}}};function et(l,o,u,c,t,f){const s=L;return m(),O(s,{title:"Vue SelectButton Component",header:"SelectButton",description:"Slider is a component to provide input with a drag handle.",componentDocs:t.docs,apiDocs:["SelectButton"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const it=p(Ze,[["render",et]]);export{it as default};
