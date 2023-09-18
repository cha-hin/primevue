import{_ as m,o as p,e as C,w as b,a as n,m as N,b as e,f as o,p as y,h,j as w,c as v,n as g,g as x,F as _,A as $,t as S,C as T,B as R,D as I,k,l as P,v as M,x as V}from"./entry.68beb385.js";import{u as Y,a as F}from"./vee-validate.esm.3b430014.js";import{g as j}from"./PTHelper.11558b27.js";import{_ as A}from"./PrimeVueNuxtLink.f51d0c80.js";const B={data(){return{code:{basic:`<span id="lb"></span>Options</span>
<Listbox aria-labelledby="lb" />

<Listbox aria-label="City" />`}}}},U=e("h3",null,"Screen Reader",-1),G=e("p",null,[o(" Value to describe the component can be provided "),e("i",null,"aria-labelledby"),o(" or "),e("i",null,"aria-label"),o(" props. The list element has a "),e("i",null,"listbox"),o(" role with the "),e("i",null,"aria-multiselectable"),o(" attribute that sets to true when multiple selection is enabled. Each list item has an "),e("i",null,"option"),o(" role with "),e("i",null,"aria-selected"),o(" and "),e("i",null,"aria-disabled"),o(" as their attributes. ")],-1),E=e("p",null,[o("If filtering is enabled, "),e("i",null,"filterInputProps"),o(" can be defined to give "),e("i",null,"aria-*"),o(" props to the input element. Alternatively "),e("i",null,"filterPlaceholder"),o(" is usually utilized by the screen readers as well.")],-1),O=e("h3",null,"Keyboard Support",-1),z=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the first selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous option.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next option.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Toggles the selected state of the focused option.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the selected state of the focused option.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first option.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last option.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),o(" + "),e("i",null,"down arrow")]),e("td",null,"Moves focus to the next option and toggles the selection state.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),o(" + "),e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous option and toggles the selection state.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),o(" + "),e("i",null,"space")]),e("td",null,"Selects the items between the most recently selected option and the focused option.")]),e("tr",null,[e("td",null,[e("i",null,"control"),o(" + "),e("i",null,"shift"),o(" + "),e("i",null,"home")]),e("td",null,"Selects the focused options and all the options up to the first one.")]),e("tr",null,[e("td",null,[e("i",null,"control"),o(" + "),e("i",null,"shift"),o(" + "),e("i",null,"end")]),e("td",null,"Selects the focused options and all the options down to the last one.")]),e("tr",null,[e("td",null,[e("i",null,"control"),o(" + "),e("i",null,"a")]),e("td",null,"Selects all options.")]),e("tr",null,[e("td",null,[e("i",null,"pageUp")]),e("td",null,"Jumps visual focus to first option.")]),e("tr",null,[e("td",null,[e("i",null,"pageDown")]),e("td",null,"Jumps visual focus to last option.")]),e("tr",null,[e("td",null,[e("i",null,"any printable character")]),e("td",null,"Moves focus to the option whose label starts with the characters being typed.")])])])],-1),J=e("h3",null,"Filter Input Keyboard Support",-1),K=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next option, if there is none then visual focus does not change.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous option, if there is none then visual focus does not change.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Removes the visual focus from the current option and moves input cursor to one character left.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Removes the visual focus from the current option and moves input cursor to one character right.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves input cursor at the end, if not then moves focus to the first option.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves input cursor at the beginning, if not then moves focus to the last option.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Closes the popup and moves focus to the multiselect element.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup and moves focus to the multiselect element.")]),e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next focusable element in the component. If there is none, moves focus to next element in page.")])])])],-1);function H(s,l,d,r,t,f){const a=y,i=h;return p(),C(i,N({id:"accessibility",label:"Accessibility"},s.$attrs),{default:b(()=>[U,G,E,n(a,N({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},s.$attrs),null,16,["code"]),O,z,J,K]),_:1},16)}const q=m(B,[["render",H]]),W={data(){return{selectedCity:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:'<Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-14rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-14rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},Q=e("p",null,[o(" Listbox is used as a controlled component with "),e("i",null,"v-model"),o(" property along with an "),e("i",null,"options"),o(" collection. Label and value of an option are defined with the "),e("i",null,"optionLabel"),o(" and "),e("i",null,"optionValue"),o(" properties respectively. Note that, when options are simple primitive values such as a string array, no "),e("i",null,"optionLabel"),o(" and "),e("i",null,"optionValue"),o(" would be necessary. ")],-1),X={class:"card flex justify-content-center"};function Z(s,l,d,r,t,f){const a=h,i=w("Listbox"),u=y;return p(),v(_,null,[n(a,g(x(s.$attrs)),{default:b(()=>[Q]),_:1},16),e("div",X,[n(i,{modelValue:t.selectedCity,"onUpdate:modelValue":l[0]||(l[0]=c=>t.selectedCity=c),options:t.cities,optionLabel:"name",class:"w-full md:w-14rem"},null,8,["modelValue","options"])]),n(u,{code:t.code},null,8,["code"])],64)}const ee=m(W,[["render",Z]]),te={data(){return{selectedCity:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:'<Listbox v-model="selectedCity" disabled :options="cities" optionLabel="name" class="w-full md:w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" disabled :options="cities" optionLabel="name" class="w-full md:w-14rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" disabled :options="cities" optionLabel="name" class="w-full md:w-14rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},oe=e("p",null,[o("When "),e("i",null,"disabled"),o(" is present, the element cannot be edited and focused.")],-1),le={class:"card flex justify-content-center"};function ne(s,l,d,r,t,f){const a=h,i=w("Listbox"),u=y;return p(),v(_,null,[n(a,g(x(s.$attrs)),{default:b(()=>[oe]),_:1},16),e("div",le,[n(i,{modelValue:t.selectedCity,"onUpdate:modelValue":l[0]||(l[0]=c=>t.selectedCity=c),disabled:"",options:t.cities,optionLabel:"name",class:"w-full md:w-14rem"},null,8,["modelValue","options"])]),n(u,{code:t.code},null,8,["code"])],64)}const se=m(te,[["render",ne]]),ie={data(){return{selectedCity:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:'<Listbox v-model="selectedCity" :options="cities" filter optionLabel="name" class="w-full md:w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" :options="cities" filter optionLabel="name" class="w-full md:w-14rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" :options="cities" filter optionLabel="name" class="w-full md:w-14rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},ae=e("p",null,[o("Listbox provides built-in filtering that is enabled by adding the "),e("i",null,"filter"),o(" property.")],-1),ce={class:"card flex justify-content-center"};function re(s,l,d,r,t,f){const a=h,i=w("Listbox"),u=y;return p(),v(_,null,[n(a,g(x(s.$attrs)),{default:b(()=>[ae]),_:1},16),e("div",ce,[n(i,{modelValue:t.selectedCity,"onUpdate:modelValue":l[0]||(l[0]=c=>t.selectedCity=c),options:t.cities,filter:"",optionLabel:"name",class:"w-full md:w-14rem"},null,8,["modelValue","options"])]),n(u,{code:t.code},null,8,["code"])],64)}const de=m(ie,[["render",re]]),ue={data(){return{selectedCity:null,groupedCities:[{label:"Germany",code:"DE",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",code:"US",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",code:"JP",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}],code:{basic:`<Listbox v-model="selectedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" class="w-full md:w-14rem" listStyle="max-height:250px">
    <template #optiongroup="slotProps">
        <div class="flex align-items-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.label }}</div>
        </div>
    </template>
</Listbox>`,options:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" class="w-full md:w-14rem" listStyle="max-height:250px">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </Listbox>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            groupedCities: [
                {
                    label: 'Germany',
                    code: 'DE',
                    items: [
                        { label: 'Berlin', value: 'Berlin' },
                        { label: 'Frankfurt', value: 'Frankfurt' },
                        { label: 'Hamburg', value: 'Hamburg' },
                        { label: 'Munich', value: 'Munich' }
                    ]
                },
                {
                    label: 'USA',
                    code: 'US',
                    items: [
                        { label: 'Chicago', value: 'Chicago' },
                        { label: 'Los Angeles', value: 'Los Angeles' },
                        { label: 'New York', value: 'New York' },
                        { label: 'San Francisco', value: 'San Francisco' }
                    ]
                },
                {
                    label: 'Japan',
                    code: 'JP',
                    items: [
                        { label: 'Kyoto', value: 'Kyoto' },
                        { label: 'Osaka', value: 'Osaka' },
                        { label: 'Tokyo', value: 'Tokyo' },
                        { label: 'Yokohama', value: 'Yokohama' }
                    ]
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" class="w-full md:w-14rem" listStyle="max-height:250px">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </Listbox>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const groupedCities = ref([
    {
        label: 'Germany',
        code: 'DE',
        items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'USA',
        code: 'US',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
        ]
    },
    {
        label: 'Japan',
        code: 'JP',
        items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
        ]
    }
]);
<\/script>`}}}},me=e("p",null,[o(" Options can be grouped when a nested data structures is provided. To define the label of a group "),e("i",null,"optionGroupLabel"),o(" property is needed and also "),e("i",null,"optionGroupChildren"),o(" is required to define the property that refers to the children of a group. ")],-1),pe={class:"card flex justify-content-center"},fe={class:"flex align-items-center"},be=["alt"];function he(s,l,d,r,t,f){const a=h,i=w("Listbox"),u=y;return p(),v(_,null,[n(a,g(x(s.$attrs)),{default:b(()=>[me]),_:1},16),e("div",pe,[n(i,{modelValue:t.selectedCity,"onUpdate:modelValue":l[0]||(l[0]=c=>t.selectedCity=c),options:t.groupedCities,optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",class:"w-full md:w-14rem",listStyle:"max-height:250px"},{optiongroup:b(c=>[e("div",fe,[e("img",{alt:c.option.name,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:$(`flag flag-${c.option.code.toLowerCase()} mr-2`),style:{width:"18px"}},null,10,be),e("div",null,S(c.option.label),1)])]),_:1},8,["modelValue","options"])]),n(u,{code:t.code},null,8,["code"])],64)}const ve=m(ue,[["render",he]]),_e={data(){return{code:{basic:"import Listbox from 'primevue/listbox';"}}}};function ge(s,l,d,r,t,f){const a=h,i=y;return p(),v(_,null,[n(a,g(x(s.$attrs)),null,16),n(i,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const xe=m(_e,[["render",ge]]),ye={data(){return{selectedCity:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:'<Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="p-invalid w-full md:w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="p-invalid w-full md:w-14rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="p-invalid w-full md:w-14rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},we=e("p",null,[o("Invalid state style is added using the "),e("i",null,"p-invalid"),o(" class to indicate a failed validation.")],-1),Le={class:"card flex justify-content-center"};function Se(s,l,d,r,t,f){const a=h,i=w("Listbox"),u=y;return p(),v(_,null,[n(a,g(x(s.$attrs)),{default:b(()=>[we]),_:1},16),e("div",Le,[n(i,{modelValue:t.selectedCity,"onUpdate:modelValue":l[0]||(l[0]=c=>t.selectedCity=c),options:t.cities,optionLabel:"name",class:"p-invalid w-full md:w-14rem"},null,8,["modelValue","options"])]),n(u,{code:t.code},null,8,["code"])],64)}const Ce=m(ye,[["render",Se]]),$e={data(){return{selectedCity:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:'<Listbox v-model="selectedCity" :options="cities" multiple optionLabel="name" class="w-full md:w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" :options="cities" multiple optionLabel="name" class="w-full md:w-14rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCity" :options="cities" multiple optionLabel="name" class="w-full md:w-14rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},De=e("p",null,[o(" Listbox allows choosing a single item by default, enable "),e("i",null,"multiple"),o(" property to choose more than one. When the optional "),e("i",null,"metaKeySelection"),o(" is present, behavior is changed in a way that selecting a new item requires meta key to be present. ")],-1),Ne={class:"card flex justify-content-center"};function ke(s,l,d,r,t,f){const a=h,i=w("Listbox"),u=y;return p(),v(_,null,[n(a,g(x(s.$attrs)),{default:b(()=>[De]),_:1},16),e("div",Ne,[n(i,{modelValue:t.selectedCity,"onUpdate:modelValue":l[0]||(l[0]=c=>t.selectedCity=c),options:t.cities,multiple:"",optionLabel:"name",class:"w-full md:w-14rem"},null,8,["modelValue","options"])]),n(u,{code:t.code},null,8,["code"])],64)}const Pe=m($e,[["render",ke]]),Te={data(){return{selectedCountry:null,countries:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}],code:{basic:`<Listbox v-model="selectedCountry" :options="countries" optionLabel="name" class="w-full md:w-14rem" listStyle="max-height:250px">
    <template #option="slotProps">
        <div class="flex align-items-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
</Listbox>`,options:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCountry" :options="countries" optionLabel="name" class="w-full md:w-14rem" listStyle="max-height:250px">
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </Listbox>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCountry: null,
            countries: [
                { name: 'Australia', code: 'AU' },
                { name: 'Brazil', code: 'BR' },
                { name: 'China', code: 'CN' },
                { name: 'Egypt', code: 'EG' },
                { name: 'France', code: 'FR' },
                { name: 'Germany', code: 'DE' },
                { name: 'India', code: 'IN' },
                { name: 'Japan', code: 'JP' },
                { name: 'Spain', code: 'ES' },
                { name: 'United States', code: 'US' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedCountry" :options="countries" optionLabel="name" class="w-full md:w-14rem" listStyle="max-height:250px">
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </Listbox>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCountry = ref();
const countries = ref([
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
]);
<\/script>`}}}},Re=e("p",null,[o("Custom content for an option is displayed with the "),e("i",null,"option"),o(" slot that takes an option as a parameter. Additional available templating sections are "),e("i",null,"filter"),o(" and "),e("i",null,"optionGroup"),o(".")],-1),Ie={class:"card flex justify-content-center"},Me={class:"flex align-items-center"},Ve=["alt"];function Ye(s,l,d,r,t,f){const a=h,i=w("Listbox"),u=y;return p(),v(_,null,[n(a,g(x(s.$attrs)),{default:b(()=>[Re]),_:1},16),e("div",Ie,[n(i,{modelValue:t.selectedCountry,"onUpdate:modelValue":l[0]||(l[0]=c=>t.selectedCountry=c),options:t.countries,optionLabel:"name",class:"w-full md:w-14rem",listStyle:"max-height:250px"},{option:b(c=>[e("div",Me,[e("img",{alt:c.option.name,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:$(`flag flag-${c.option.code.toLowerCase()} mr-2`),style:{width:"18px"}},null,10,Ve),e("div",null,S(c.option.name),1)])]),_:1},8,["modelValue","options"])]),n(u,{code:t.code},null,8,["code"])],64)}const Fe=m(Te,[["render",Ye]]),je={data(){return{selectedItem:null,items:Array.from({length:1e5},(s,l)=>({label:`Item #${l}`,value:l})),code:{basic:`<Listbox v-model="selectedItem" :options="items" optionLabel="label" optionValue="value"
    :virtualScrollerOptions="{ itemSize: 38 }" class="w-full md:w-14rem" listStyle="height:250px" />`,options:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedItem" :options="items" optionLabel="label" optionValue="value"    
            :virtualScrollerOptions="{ itemSize: 38 }" class="w-full md:w-14rem" listStyle="height:250px" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedItem: null,
            items: Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }))
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Listbox v-model="selectedItem" :options="items" optionLabel="label" optionValue="value"
            :virtualScrollerOptions="{ itemSize: 38 }" class="w-full md:w-14rem" listStyle="height:250px" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedItem = ref();
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })));
<\/script>`}}}},Ae=e("i",null,"virtualScrollerOptions",-1),Be={class:"card flex justify-content-center"};function Ue(s,l,d,r,t,f){const a=T,i=h,u=w("Listbox"),c=y;return p(),v(_,null,[n(i,g(x(s.$attrs)),{default:b(()=>[e("p",null,[o(" VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with "),Ae,o(" property, refer to the "),n(a,{to:"/virtualscroller"},{default:b(()=>[o("VirtualScroller")]),_:1}),o(" for more information about the available options as it is used internally by Listbox. ")])]),_:1},16),e("div",Be,[n(u,{modelValue:t.selectedItem,"onUpdate:modelValue":l[0]||(l[0]=L=>t.selectedItem=L),options:t.items,optionLabel:"label",optionValue:"value",virtualScrollerOptions:{itemSize:38},class:"w-full md:w-14rem",listStyle:"height:250px"},null,8,["modelValue","options"])]),n(c,{code:t.code},null,8,["code"])],64)}const Ge=m(je,[["render",Ue]]),Ee={setup(){const{handleSubmit:s,resetForm:l}=Y(),{value:d,errorMessage:r}=F("value",f),t=R();function f(i){return i?!0:"City is required."}const a=s(i=>{i.value&&(t.add({severity:"info",summary:"Form Submitted",detail:i.value.name,life:3e3}),l())});return{value:d,handleSubmit:s,onSubmit:a,errorMessage:r}},data(){return{cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <Listbox v-model="value" :class="{ 'p-invalid': errorMessage }" class="w-full md:w-14rem" :options="cities" optionLabel="name" placeholder="Select Cities" :maxSelectedLabels="3" aria-describedby="text-error" />
            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <Listbox v-model="value" :class="{ 'p-invalid': errorMessage }" class="w-full md:w-14rem" :options="cities" optionLabel="name" placeholder="Select Cities" :maxSelectedLabels="3" aria-describedby="text-error" />
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
                return 'City is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.name, life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <Listbox v-model="value" :class="{ 'p-invalid': errorMessage }" class="w-full md:w-14rem" :options="cities" optionLabel="name" placeholder="Select Cities" :maxSelectedLabels="3" aria-describedby="text-error" />
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

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

function validateField(value) {
    if (!value) {
        return 'City is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.name, life: 3000 });
        resetForm();
    }
});
<\/script>
`}}}},Oe=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),o(" is a popular library for handling forms in Vue.")],-1),ze={class:"card flex justify-content-center"},Je={id:"text-error",class:"p-error"};function Ke(s,l,d,r,t,f){const a=h,i=w("Listbox"),u=w("Button"),c=y;return p(),v(_,null,[n(a,g(x(s.$attrs)),{default:b(()=>[Oe]),_:1},16),e("div",ze,[e("form",{onSubmit:l[1]||(l[1]=(...L)=>r.onSubmit&&r.onSubmit(...L)),class:"flex flex-column align-items-center gap-2"},[n(i,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=L=>r.value=L),class:$([{"p-invalid":r.errorMessage},"w-full md:w-14rem"]),options:t.cities,optionLabel:"name",placeholder:"Select Cities",maxSelectedLabels:3,"aria-describedby":"text-error"},null,8,["modelValue","class","options"]),e("small",Je,S(r.errorMessage||" "),1),n(u,{type:"submit",label:"Submit"})],32)]),n(c,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const He=m(Ee,[["render",Ke]]),qe={data(){return{selectedCity:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:`<Listbox
    v-model="selectedCity"
    :options="cities"
    optionLabel="name"
    :pt="{
        root: { class: 'w-full md:w-14rem' },
        item: ({ props, state, context }) => ({
            class: context.selected ? 'bg-primary' : context.focused ? 'bg-blue-100' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Listbox
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            :pt="{
                root: { class: 'w-full md:w-14rem' },
                item: ({ props, state, context }) => ({
                    class: context.selected ? 'bg-primary' : context.focused ? 'bg-blue-100' : undefined
                })
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            cities: [
                { name: 'New York', code: 'NY' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Listbox
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            :pt="{
                root: { class: 'w-full md:w-14rem' },
                item: ({ props, state, context }) => ({
                    class: context.selected ? 'bg-primary' : context.focused ? 'bg-blue-100' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},We={class:"card flex justify-content-center"};function Qe(s,l,d,r,t,f){const a=h,i=w("Listbox"),u=y;return p(),v(_,null,[n(a,g(x(s.$attrs)),null,16),e("div",We,[n(i,{modelValue:t.selectedCity,"onUpdate:modelValue":l[0]||(l[0]=c=>t.selectedCity=c),options:t.cities,optionLabel:"name",pt:{root:{class:"w-full md:w-14rem"},item:({props:c,state:L,context:D})=>({class:D.selected?"bg-primary":D.focused?"bg-blue-100":void 0})}},null,8,["modelValue","options","pt"])]),n(u,{code:t.code},null,8,["code"])],64)}const Xe=m(qe,[["render",Qe]]),Ze={},et=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/listbox.jpg"})],-1);function tt(s,l){const d=h;return p(),v(_,null,[n(d,g(x(s.$attrs)),{default:b(()=>[e("p",null,S(s.$attrs.description),1)]),_:1},16),et],64)}const ot=m(Ze,[["render",tt]]),lt={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ot},{id:"pt.doc.listbox",label:"Listbox PT Options",component:I,data:j("Listbox")},{id:"pt.demo",label:"Demo",component:Xe}]}}},nt={class:"doc-main"},st=e("div",{class:"doc-intro"},[e("h1",null,"Listbox Pass Through")],-1);function it(s,l,d,r,t,f){const a=k,i=P;return p(),v(_,null,[e("div",nt,[st,n(a,{docs:t.docs},null,8,["docs"])]),n(i,{docs:t.docs},null,8,["docs"])],64)}const at=m(lt,[["render",it]]),ct={},rt=e("p",null,"List of class names used in the styled mode.",-1),dt=M('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-listbox</td><td>Main container element.</td></tr><tr><td>p-listbox-header</td><td>Header element.</td></tr><tr><td>p-listbox-list-wrapper</td><td>Container of list element.</td></tr><tr><td>p-listbox-list</td><td>List element.</td></tr><tr><td>p-listbox-item</td><td>An item in the list element.</td></tr></tbody></table></div>',1);function ut(s,l){const d=h;return p(),v(_,null,[n(d,g(x(s.$attrs)),{default:b(()=>[rt]),_:1},16),dt],64)}const mt=m(ct,[["render",ut]]),pt={data(){return{code1:{basic:`
export default {
    listbox: {
        root: {
            class: ['bg-white dark:bg-gray-900 border border-gray-400 dark:border-blue-900/40 transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-56']
        },
        wrapper: 'overflow-auto',
        list: 'py-3 list-none m-0',
        item: ({ context }) => ({
            class: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                'dark:text-white/80 dark:hover:bg-gray-800',
                'hover:text-gray-700 hover:bg-gray-200',
                {
                    'text-gray-700': !context.focused && !context.selected,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.selected,
                    'bg-blue-400 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected
                }
            ]
        }),
        itemgroup: {
            class: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        },
        header: {
            class: ['p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg', 'dark:bg-gray-800 dark:text-white/80 dark:border-blue-900/40']
        },
        filtercontainer: 'relative',
        filterinput: {
            class: [
                'pr-7 -mr-7',
                'w-full',
                'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        filtericon: '-mt-2 absolute top-1/2'
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-14rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},ft=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function bt(s,l,d,r,t,f){const a=A,i=y,u=h;return p(),C(u,g(x(s.$attrs)),{default:b(()=>[e("p",null,[o(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(a,{to:"/tailwind"},{default:b(()=>[o("Tailwind Customization")]),_:1}),o(" section for an example. ")]),n(i,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),ft,n(i,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const ht=m(pt,[["render",bt]]),vt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:mt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ht}]}]}}},_t={class:"doc-main"},gt=e("div",{class:"doc-intro"},[e("h1",null,"Listbox Theming")],-1);function xt(s,l,d,r,t,f){const a=k,i=P;return p(),v(_,null,[e("div",_t,[gt,n(a,{docs:t.docs},null,8,["docs"])]),n(i,{docs:t.docs},null,8,["docs"])],64)}const yt=m(vt,[["render",xt]]),wt={data(){return{docs:[{id:"import",label:"Import",component:xe},{id:"basic",label:"Basic",component:ee},{id:"multiple",label:"Multiple",component:Pe},{id:"group",label:"Group",component:ve},{id:"filter",label:"Filter",component:de},{id:"template",label:"Template",component:Fe},{id:"virtualscroll",label:"Virtual Scroll",component:Ge},{id:"invalid",label:"Invalid",component:Ce},{id:"disabled",label:"Disabled",component:se},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:He}]},{id:"accessibility",label:"Accessibility",component:q}],ptComponent:at,themingDoc:yt}}};function Lt(s,l,d,r,t,f){const a=V;return p(),C(a,{title:"Vue Listbox Component",header:"Listbox",description:"Listbox is used to select one or more values from a list of items.",componentDocs:t.docs,apiDocs:["Listbox"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Nt=m(wt,[["render",Lt]]);export{Nt as default};
