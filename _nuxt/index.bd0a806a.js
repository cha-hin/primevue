import{_ as v,o as u,e as L,w as m,a as l,m as P,b as e,f as o,p as y,h as b,j as S,c as f,n as g,g as w,F as _,A as D,t as C,C as k,B as N,D as R,k as I,l as T,v as V,x as F}from"./entry.68beb385.js";import{u as Y,a as M}from"./vee-validate.esm.3b430014.js";import{g as j}from"./PTHelper.11558b27.js";import{_ as z}from"./PrimeVueNuxtLink.f51d0c80.js";const A={data(){return{code:{basic:`<span id="dd1"></span>Options</span>
<Dropdown aria-labelledby="dd1" />

<Dropdown aria-label="Options" />`}}}},U=e("h3",null,"Screen Reader",-1),B=e("p",null,[o(" Value to describe the component can either be provided with "),e("i",null,"aria-labelledby"),o(" or "),e("i",null,"aria-label"),o(" props. The dropdown element has a "),e("i",null,"combobox"),o(" role in addition to "),e("i",null,"aria-haspopup"),o(" and "),e("i",null,"aria-expanded"),o(" attributes. If the editable option is enabled "),e("i",null,"aria-autocomplete"),o(" is also added. The relation between the combobox and the popup is created with "),e("i",null,"aria-controls"),o(" and "),e("i",null,"aria-activedescendant"),o(" attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list. ")],-1),E=e("p",null,[o(" The popup list has an id that refers to the "),e("i",null,"aria-controls"),o(" attribute of the "),e("i",null,"combobox"),o(" element and uses "),e("i",null,"listbox"),o(" as the role. Each list item has an "),e("i",null,"option"),o(" role, an id to match the "),e("i",null,"aria-activedescendant"),o(" of the input element along with "),e("i",null,"aria-label"),o(", "),e("i",null,"aria-selected"),o(" and "),e("i",null,"aria-disabled"),o(" attributes. ")],-1),O=e("p",null,[o("If filtering is enabled, "),e("i",null,"filterInputProps"),o(" can be defined to give "),e("i",null,"aria-*"),o(" props to the filter input element.")],-1),G=e("h3",null,"Closed State Keyboard Support",-1),J=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the dropdown element.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then last option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"any printable character")]),e("td",null,"Opens the popup and moves focus to the option whose label starts with the characters being typed, if there is none and dropdown is not editable then first option receives the focus.")])])])],-1),K=e("h3",null,"Popup Keyboard Support",-1),H=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),o(" + "),e("i",null,"tab")]),e("td",null,"Moves focus to the previous focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Selects the focused option and closes the popup, then moves focus to the dropdown element.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Selects the focused option and closes the popup, then moves focus to the dropdown element.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup, then moves focus to the dropdown element.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next option, if there is none then visual focus does not change.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous option, if there is none then visual focus does not change.")]),e("tr",null,[e("td",null,[e("i",null,"alt"),o(" + "),e("i",null,"up arrow")]),e("td",null,"Selects the focused option and closes the popup, then moves focus to the dropdown element.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"If the dropdown is editable, removes the visual focus from the current option and moves input cursor to one character left.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"If the dropdown is editable, removes the visual focus from the current option and moves input cursor to one character right.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"If the dropdown is editable, moves input cursor at the end, if not then moves focus to the first option.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"If the dropdown is editable, moves input cursor at the beginning, if not then moves focus to the last option.")]),e("tr",null,[e("td",null,[e("i",null,"pageUp")]),e("td",null,"Jumps visual focus to first option.")]),e("tr",null,[e("td",null,[e("i",null,"pageDown")]),e("td",null,"Jumps visual focus to last option.")]),e("tr",null,[e("td",null,[e("i",null,"any printable character")]),e("td",null,"Moves focus to the option whose label starts with the characters being typed if dropdown is not editable.")])])])],-1),q=e("h3",null,"Filter Input Keyboard Support",-1),W=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next option, if there is none then visual focus does not change.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous option, if there is none then visual focus does not change.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Removes the visual focus from the current option and moves input cursor to one character left.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Removes the visual focus from the current option and moves input cursor to one character right.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves input cursor at the end, if not then moves focus to the first option.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves input cursor at the beginning, if not then moves focus to the last option.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Closes the popup and moves focus to the dropdown element.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup and moves focus to the dropdown element.")]),e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.")])])])],-1);function Q(a,n,p,c,t,h){const r=y,i=b;return u(),L(i,P({id:"accessibility",label:"Accessibility"},a.$attrs),{default:m(()=>[U,B,E,O,l(r,P({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},a.$attrs),null,16,["code"]),G,J,K,H,q,W]),_:1},16)}const X=v(A,[["render",Q]]),Z={data(){return{selectedCity:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:'<Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
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
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
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
<\/script>`}}}},ee=e("p",null,[o(" Dropdown is used as a controlled component with "),e("i",null,"v-model"),o(" property along with an "),e("i",null,"options"),o(" collection. Label and value of an option are defined with the "),e("i",null,"optionLabel"),o(" and "),e("i",null,"optionValue"),o(" properties respectively. Note that, when options are simple primitive values such as a string array, no "),e("i",null,"optionLabel"),o(" and "),e("i",null,"optionValue"),o(" would be necessary. ")],-1),te={class:"card flex justify-content-center"};function oe(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),{default:m(()=>[ee]),_:1},16),e("div",te,[l(i,{modelValue:t.selectedCity,"onUpdate:modelValue":n[0]||(n[0]=s=>t.selectedCity=s),options:t.cities,optionLabel:"name",placeholder:"Select a City",class:"w-full md:w-14rem"},null,8,["modelValue","options"])]),l(d,{code:t.code},null,8,["code"])],64)}const le=v(Z,[["render",oe]]),ne={data(){return{selectedCity:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:'<Dropdown v-model="selectedCity" :options="cities" showClear optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedCity" :options="cities" showClear optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
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
        <Dropdown v-model="selectedCity" :options="cities" showClear optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
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
<\/script>`}}}},ae=e("p",null,[o("When "),e("i",null,"showClear"),o(" is enabled, a clear icon is added to reset the Dropdown.")],-1),se={class:"card flex justify-content-center"};function ie(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),{default:m(()=>[ae]),_:1},16),e("div",se,[l(i,{modelValue:t.selectedCity,"onUpdate:modelValue":n[0]||(n[0]=s=>t.selectedCity=s),options:t.cities,showClear:"",optionLabel:"name",placeholder:"Select a City",class:"w-full md:w-14rem"},null,8,["modelValue","options"])]),l(d,{code:t.code},null,8,["code"])],64)}const re=v(ne,[["render",ie]]),ce={data(){return{code:{basic:'<Dropdown disabled placeholder="Select a City" class="w-full md:w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Dropdown disabled placeholder="Select a City" class="w-full md:w-14rem" />
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Dropdown disabled placeholder="Select a City" class="w-full md:w-14rem" />
    </div>
</template>

<script setup>

<\/script>`}}}},de=e("p",null,[o("When "),e("i",null,"disabled"),o(" is present, the element cannot be edited and focused.")],-1),pe={class:"card flex justify-content-center"};function ue(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),{default:m(()=>[de]),_:1},16),e("div",pe,[l(i,{disabled:"",placeholder:"Select a City",class:"w-full md:w-14rem"})]),l(d,{code:t.code},null,8,["code"])],64)}const me=v(ce,[["render",ue]]),fe={data(){return{selectedCity:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:'<Dropdown v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
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
        <Dropdown v-model="selectedCity" editable :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
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
<\/script>`}}}},he=e("p",null,[o("When "),e("i",null,"editable"),o(" is present, the input can also be entered with typing.")],-1),ve={class:"card flex justify-content-center"};function be(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),{default:m(()=>[he]),_:1},16),e("div",ve,[l(i,{modelValue:t.selectedCity,"onUpdate:modelValue":n[0]||(n[0]=s=>t.selectedCity=s),editable:"",options:t.cities,optionLabel:"name",placeholder:"Select a City",class:"w-full md:w-14rem"},null,8,["modelValue","options"])]),l(d,{code:t.code},null,8,["code"])],64)}const _e=v(fe,[["render",be]]),ge={data(){return{selectedCountry:null,countries:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}],code:{basic:`<Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Select a Country" class="w-full md:w-14rem">
    <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
            <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.value.code.toLowerCase()}\`" style="width: 18px" />
            <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
            {{ slotProps.placeholder }}
        </span>
    </template>
    <template #option="slotProps">
        <div class="flex align-items-center">
            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
</Dropdown>`,options:`<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Select a Country" class="w-full md:w-14rem">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex align-items-center">
                    <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.value.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </Dropdown>
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
        <Dropdown v-model="selectedCountry" :options="countries" filter optionLabel="name" placeholder="Select a Country" class="w-full md:w-14rem">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex align-items-center">
                    <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.value.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </Dropdown>
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
<\/script>`}}}},we=e("p",null,[o("Dropdown provides built-in filtering that is enabled by adding the "),e("i",null,"filter"),o(" property.")],-1),ye={class:"card flex justify-content-center"},Se={key:0,class:"flex align-items-center"},Ce=["alt"],xe={key:1},De={class:"flex align-items-center"},Le=["alt"];function $e(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),{default:m(()=>[we]),_:1},16),e("div",ye,[l(i,{modelValue:t.selectedCountry,"onUpdate:modelValue":n[0]||(n[0]=s=>t.selectedCountry=s),options:t.countries,filter:"",optionLabel:"name",placeholder:"Select a Country",class:"w-full md:w-14rem"},{value:m(s=>[s.value?(u(),f("div",Se,[e("img",{alt:s.value.label,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:D(`mr-2 flag flag-${s.value.code.toLowerCase()}`),style:{width:"18px"}},null,10,Ce),e("div",null,C(s.value.name),1)])):(u(),f("span",xe,C(s.placeholder),1))]),option:m(s=>[e("div",De,[e("img",{alt:s.option.label,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:D(`mr-2 flag flag-${s.option.code.toLowerCase()}`),style:{width:"18px"}},null,10,Le),e("div",null,C(s.option.name),1)])]),_:1},8,["modelValue","options"])]),l(d,{code:t.code},null,8,["code"])],64)}const Pe=v(ge,[["render",$e]]),Ie={data(){return{selectedCity:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:`<div class="p-float-label">
    <Dropdown v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
    <label for="dd-city">Select a City</label>
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <div class="p-float-label">
            <Dropdown v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
            <label for="dd-city">Select a City</label>
        </div>
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
        <div class="p-float-label">
            <Dropdown v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
            <label for="dd-city">Select a City</label>
        </div>
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
<\/script>`}}}},Te=e("p",null,"A floating label appears on top of the input field when focused.",-1),ke={class:"card flex justify-content-center"},Ne={class:"p-float-label"},Re=e("label",{for:"dd-city"},"Select a City",-1);function Ve(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),{default:m(()=>[Te]),_:1},16),e("div",ke,[e("div",Ne,[l(i,{modelValue:t.selectedCity,"onUpdate:modelValue":n[0]||(n[0]=s=>t.selectedCity=s),inputId:"dd-city",options:t.cities,optionLabel:"name",placeholder:"Select a City",class:"w-full md:w-14rem"},null,8,["modelValue","options"]),Re])]),l(d,{code:t.code},null,8,["code"])],64)}const Fe=v(Ie,[["render",Ve]]),Ye={data(){return{selectedCity:null,groupedCities:[{label:"Germany",code:"DE",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",code:"US",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",code:"JP",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}],code:{basic:`<Dropdown v-model="selectedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Select a City" class="w-full md:w-14rem">
    <template #optiongroup="slotProps">
        <div class="flex align-items-center">
            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
            <div>{{ slotProps.option.label }}</div>
        </div>
    </template>
</Dropdown>`,options:`<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Select a City" class="w-full md:w-14rem">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </Dropdown>
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
        <Dropdown v-model="selectedCity" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Select a City" class="w-full md:w-14rem">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </Dropdown>
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
<\/script>`}}}},Me=e("p",null,[o(" Options can be grouped when a nested data structures is provided. To define the label of a group "),e("i",null,"optionGroupLabel"),o(" property is needed and also "),e("i",null,"optionGroupChildren"),o(" is required to define the property that refers to the children of a group. ")],-1),je={class:"card flex justify-content-center"},ze={class:"flex align-items-center"},Ae=["alt"];function Ue(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),{default:m(()=>[Me]),_:1},16),e("div",je,[l(i,{modelValue:t.selectedCity,"onUpdate:modelValue":n[0]||(n[0]=s=>t.selectedCity=s),options:t.groupedCities,optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",placeholder:"Select a City",class:"w-full md:w-14rem"},{optiongroup:m(s=>[e("div",ze,[e("img",{alt:s.option.label,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:D(`mr-2 flag flag-${s.option.code.toLowerCase()}`),style:{width:"18px"}},null,10,Ae),e("div",null,C(s.option.label),1)])]),_:1},8,["modelValue","options"])]),l(d,{code:t.code},null,8,["code"])],64)}const Be=v(Ye,[["render",Ue]]),Ee={data(){return{code:{basic:"import Dropdown from 'primevue/dropdown';"}}}};function Oe(a,n,p,c,t,h){const r=b,i=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),null,16),l(i,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Ge=v(Ee,[["render",Oe]]),Je={data(){return{selectedCity:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:'<Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="p-invalid w-full md:w-14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="p-invalid w-full md:w-14rem" />
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
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="p-invalid w-full md:w-14rem" />
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
<\/script>`}}}},Ke=e("p",null,[o("Invalid state style is added using the "),e("i",null,"p-invalid"),o(" class to indicate a failed validation.")],-1),He={class:"card flex justify-content-center"};function qe(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),{default:m(()=>[Ke]),_:1},16),e("div",He,[l(i,{modelValue:t.selectedCity,"onUpdate:modelValue":n[0]||(n[0]=s=>t.selectedCity=s),options:t.cities,optionLabel:"name",placeholder:"Select a City",class:"p-invalid w-full md:w-14rem"},null,8,["modelValue","options"])]),l(d,{code:t.code},null,8,["code"])],64)}const We=v(Je,[["render",qe]]),Qe={data(){return{selectedItem:null,items:Array.from({length:1e5}),loading:!1,code:{basic:`<Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" class="w-full md:w-14rem"
    :virtualScrollerOptions="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }" placeholder="Select Item" />`,options:`<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" class="w-full md:w-14rem"
            :virtualScrollerOptions="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }" placeholder="Select Item" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedItem: null,
            items: Array.from({ length: 100000 }),
            loading: false
        };
    },
    loadLazyTimeout: null,
    methods: {
        onLazyLoad(event) {
            this.loading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(() => {
                const { first, last } = event;
                const _items = [...this.items];

                for (let i = first; i < last; i++) {
                    _items[i] = { label: \`Item #\${i}\`, value: i };
                }

                this.items = _items;
                this.loading = false;
            }, Math.random() * 1000 + 250);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value" class="w-full md:w-14rem"
            :virtualScrollerOptions="{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }" placeholder="Select Item" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedItem = ref();
const items = ref(Array.from({ length: 100000 }));
const loading = ref(false);
const loadLazyTimeout = ref();
const onLazyLoad = (event) => {
    loading.value = true;

    if (loadLazyTimeout.value) {
        clearTimeout(loadLazyTimeout.value);
    }

    //imitate delay of a backend call
    loadLazyTimeout.value = setTimeout(() => {
        const { first, last } = event;
        const _items = [...items.value];

        for (let i = first; i < last; i++) {
            _items[i] = { label: \`Item #\${i}\`, value: i };
        }

        items.value = _items;
        loading.value = false;
    }, Math.random() * 1000 + 250);
}
<\/script>`}}},loadLazyTimeout:null,methods:{onLazyLoad(a){this.loading=!0,this.loadLazyTimeout&&clearTimeout(this.loadLazyTimeout),this.loadLazyTimeout=setTimeout(()=>{const{first:n,last:p}=a,c=[...this.items];for(let t=n;t<p;t++)c[t]={label:`Item #${t}`,value:t};this.items=c,this.loading=!1},Math.random()*1e3+250)}}},Xe={class:"card flex justify-content-center"};function Ze(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),null,16),e("div",Xe,[l(i,{modelValue:t.selectedItem,"onUpdate:modelValue":n[0]||(n[0]=s=>t.selectedItem=s),options:t.items,optionLabel:"label",optionValue:"value",virtualScrollerOptions:{lazy:!0,onLazyLoad:h.onLazyLoad,itemSize:38,showLoader:!0,loading:t.loading,delay:250},placeholder:"Select Item",class:"w-full md:w-14rem"},null,8,["modelValue","options","virtualScrollerOptions"])]),l(d,{code:t.code},null,8,["code"])],64)}const et=v(Qe,[["render",Ze]]),tt={data(){return{code:{basic:'<Dropdown placeholder="Loading..." loading class="w-full md:w-14rem"></Dropdown>',options:`<template>
    <div class="card flex justify-content-center">
        <Dropdown placeholder="Loading..." loading class="w-full md:w-14rem"></Dropdown>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Dropdown placeholder="Loading..." loading class="w-full md:w-14rem"></Dropdown>
    </div>
</template>

<script setup>
<\/script>`}}}},ot=e("p",null,[o("Loading state can be used "),e("i",null,"loading"),o(" property.")],-1),lt={class:"card flex justify-content-center"};function nt(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),{default:m(()=>[ot]),_:1},16),e("div",lt,[l(i,{placeholder:"Loading...",loading:"",class:"w-full md:w-14rem"})]),l(d,{code:t.code},null,8,["code"])],64)}const at=v(tt,[["render",nt]]),st={data(){return{selectedCountry:null,countries:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}],code:{basic:`<Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country" class="w-full md:w-14rem">
    <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
            <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.value.code.toLowerCase()}\`" style="width: 18px" />
            <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
            {{ slotProps.placeholder }}
        </span>
    </template>
    <template #option="slotProps">
        <div class="flex align-items-center">
            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
</Dropdown>`,options:`<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country" class="w-full md:w-14rem">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex align-items-center">
                    <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.value.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </Dropdown>
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
        <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country" class="w-full md:w-14rem">
            <template #value="slotProps">
                <div v-if="slotProps.value" class="flex align-items-center">
                    <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.value.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                    {{ slotProps.placeholder }}
                </span>
            </template>
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`mr-2 flag flag-\${slotProps.option.code.toLowerCase()}\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </Dropdown>
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
<\/script>`}}}},it=e("p",null,[o("Options and the selected option display support templating with "),e("i",null,"option"),o(" and "),e("i",null,"value"),o(" respectively.")],-1),rt={class:"card flex justify-content-center"},ct={key:0,class:"flex align-items-center"},dt=["alt"],pt={key:1},ut={class:"flex align-items-center"},mt=["alt"];function ft(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),{default:m(()=>[it]),_:1},16),e("div",rt,[l(i,{modelValue:t.selectedCountry,"onUpdate:modelValue":n[0]||(n[0]=s=>t.selectedCountry=s),options:t.countries,optionLabel:"name",placeholder:"Select a Country",class:"w-full md:w-14rem"},{value:m(s=>[s.value?(u(),f("div",ct,[e("img",{alt:s.value.label,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:D(`mr-2 flag flag-${s.value.code.toLowerCase()}`),style:{width:"18px"}},null,10,dt),e("div",null,C(s.value.name),1)])):(u(),f("span",pt,C(s.placeholder),1))]),option:m(s=>[e("div",ut,[e("img",{alt:s.option.label,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:D(`mr-2 flag flag-${s.option.code.toLowerCase()}`),style:{width:"18px"}},null,10,mt),e("div",null,C(s.option.name),1)])]),_:1},8,["modelValue","options"])]),l(d,{code:t.code},null,8,["code"])],64)}const ht=v(st,[["render",ft]]),vt={data(){return{selectedItem:null,items:Array.from({length:1e5},(a,n)=>({label:`Item #${n}`,value:n})),code:{basic:`<Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value"
    :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item" class="w-full md:w-14rem" />`,options:`<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value"
            :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item" class="w-full md:w-14rem" />
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
        <Dropdown v-model="selectedItem" :options="items" optionLabel="label" optionValue="value"
            :virtualScrollerOptions="{ itemSize: 38 }" placeholder="Select Item" class="w-full md:w-14rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedItem = ref();
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })));
<\/script>`}}}},bt=e("i",null,"virtualScrollerOptions",-1),_t={class:"card flex justify-content-center"};function gt(a,n,p,c,t,h){const r=k,i=b,d=S("Dropdown"),s=y;return u(),f(_,null,[l(i,g(w(a.$attrs)),{default:m(()=>[e("p",null,[o(" VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with "),bt,o(" property, refer to the "),l(r,{to:"/virtualscroller"},{default:m(()=>[o("VirtualScroller")]),_:1}),o(" for more information about the available options as it is used internally by Dropdown. ")])]),_:1},16),e("div",_t,[l(d,{modelValue:t.selectedItem,"onUpdate:modelValue":n[0]||(n[0]=x=>t.selectedItem=x),options:t.items,optionLabel:"label",optionValue:"value",virtualScrollerOptions:{itemSize:38},placeholder:"Select Item",class:"w-full md:w-14rem"},null,8,["modelValue","options"])]),l(s,{code:t.code},null,8,["code"])],64)}const wt=v(vt,[["render",gt]]),yt={setup(){const{handleSubmit:a,resetForm:n}=Y(),{value:p,errorMessage:c}=M("value",h),t=N();function h(i){return i?!0:"City is required."}const r=a(i=>{i.value&&i.value.name&&(t.add({severity:"info",summary:"Form Submitted",detail:i.value.name,life:3e3}),n())});return{value:p,handleSubmit:a,onSubmit:r,errorMessage:c}},data(){return{cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <span class="p-float-label">
                <Dropdown id="dd" v-model="value" :options="cities" optionLabel="name"
                    :class="['w-full md:w-14rem', { 'p-invalid': errorMessage }]" aria-describedby="dd-error" />
                <label for="dd">Select a City</label>
            </span>
            <small class="p-error" id="dd-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <span class="p-float-label">
                <Dropdown id="dd" v-model="value" :options="cities" optionLabel="name"
                    :class="['w-full md:w-14rem', { 'p-invalid': errorMessage }]" aria-describedby="dd-error" />
                <label for="dd">Select a City</label>
            </span>
            <small class="p-error" id="dd-error">{{ errorMessage || '&nbsp;' }}</small>
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
            if (values.value && values.value.name) {
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
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <span class="p-float-label">
                <Dropdown id="dd" v-model="value" :options="cities" optionLabel="name"
                    :class="['w-full md:w-14rem', { 'p-invalid': errorMessage }]" aria-describedby="dd-error" />
                <label for="dd">Select a City</label>
            </span>
            <small class="p-error" id="dd-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

function validateField(value) {
    if (!value) {
        return 'City is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.name) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.name, life: 3000 });
        resetForm();
    }
});
<\/script>
`}}}},St=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),o(" is a popular library for handling forms in Vue.")],-1),Ct={class:"card flex justify-content-center"},xt={class:"p-float-label"},Dt=e("label",{for:"dd"},"Select a City",-1),Lt={id:"dd-error",class:"p-error"};function $t(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=S("Button"),s=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),{default:m(()=>[St]),_:1},16),e("div",Ct,[e("form",{onSubmit:n[1]||(n[1]=(...x)=>c.onSubmit&&c.onSubmit(...x)),class:"flex flex-column gap-2"},[e("span",xt,[l(i,{id:"dd",modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=x=>c.value=x),options:t.cities,optionLabel:"name",class:D(["w-full md:w-14rem",{"p-invalid":c.errorMessage}]),"aria-describedby":"dd-error"},null,8,["modelValue","options","class"]),Dt]),e("small",Lt,C(c.errorMessage||" "),1),l(d,{type:"submit",label:"Submit"})],32)]),l(s,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const Pt=v(yt,[["render",$t]]),It={data(){return{selectedCity:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:`<Dropdown
    v-model="selectedCity"
    :options="cities"
    optionLabel="name"
    placeholder="Select a City"
    :pt="{
        root: { class: 'w-full md:w-14rem' },
        item: ({ props, state, context }) => ({
            class: context.selected ? 'bg-primary' : context.focused ? 'bg-blue-100' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Dropdown
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            placeholder="Select a City"
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
        <Dropdown
            v-model="selectedCity"
            :options="cities"
            optionLabel="name"
            placeholder="Select a City"
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
<\/script>`}}}},Tt={class:"card flex justify-content-center"};function kt(a,n,p,c,t,h){const r=b,i=S("Dropdown"),d=y;return u(),f(_,null,[l(r,g(w(a.$attrs)),null,16),e("div",Tt,[l(i,{modelValue:t.selectedCity,"onUpdate:modelValue":n[0]||(n[0]=s=>t.selectedCity=s),options:t.cities,optionLabel:"name",placeholder:"Select a City",pt:{root:{class:"w-full md:w-14rem"},item:({props:s,state:x,context:$})=>({class:$.selected?"bg-primary":$.focused?"bg-blue-100":void 0})}},null,8,["modelValue","options","pt"])]),l(d,{code:t.code},null,8,["code"])],64)}const Nt=v(It,[["render",kt]]),Rt={},Vt=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/dropdown.jpg"})],-1);function Ft(a,n){const p=b;return u(),f(_,null,[l(p,g(w(a.$attrs)),{default:m(()=>[e("p",null,C(a.$attrs.description),1)]),_:1},16),Vt],64)}const Yt=v(Rt,[["render",Ft]]),Mt={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Yt},{id:"pt.doc.dropdown",label:"Dropdown PT Options",component:R,data:j("Dropdown")},{id:"pt.demo",label:"Demo",component:Nt}]}}},jt={class:"doc-main"},zt=e("div",{class:"doc-intro"},[e("h1",null,"Dropdown Pass Through")],-1);function At(a,n,p,c,t,h){const r=I,i=T;return u(),f(_,null,[e("div",jt,[zt,l(r,{docs:t.docs},null,8,["docs"])]),l(i,{docs:t.docs},null,8,["docs"])],64)}const Ut=v(Mt,[["render",At]]),Bt={},Et=e("p",null,"List of class names used in the styled mode.",-1),Ot=V('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-dropdown</td><td>Container element.</td></tr><tr><td>p-dropdown-label</td><td>Element to display label of selected option.</td></tr><tr><td>p-dropdown-trigger</td><td>Icon element.</td></tr><tr><td>p-dropdown-panel</td><td>Icon element.</td></tr><tr><td>p-dropdown-items-wrapper</td><td>Wrapper element of items list.</td></tr><tr><td>p-dropdown-items</td><td>List element of items.</td></tr><tr><td>p-dropdown-item</td><td>An item in the list.</td></tr><tr><td>p-dropdown-filter-container</td><td>Container of filter input.</td></tr><tr><td>p-dropdown-filter</td><td>Filter element.</td></tr><tr><td>p-overlay-open</td><td>Container element when overlay is visible.</td></tr></tbody></table></div>',1);function Gt(a,n){const p=b;return u(),f(_,null,[l(p,g(w(a.$attrs)),{default:m(()=>[Et]),_:1},16),Ot],64)}const Jt=v(Bt,[["render",Gt]]),Kt={data(){return{code1:{basic:`
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    dropdown: {
        root: ({ props }) => ({
            class: [
                'cursor-pointer inline-flex relative select-none',
                'bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300',
                'w-full md:w-56',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        input: ({ props }) => ({
            class: [
                'cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative',
                'bg-transparent border-0 text-gray-800',
                'dark:text-white/80',
                'p-3 transition duration-200 bg-transparent rounded appearance-none font-sans text-base',
                'focus:outline-none focus:shadow-none',
                { 'pr-7': props.showClear }
            ]
        }),
        trigger: {
            class: ['flex items-center justify-center shrink-0', 'bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg']
        },
        wrapper: {
            class: ['max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80']
        },
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
        filtericon: '-mt-2 absolute top-1/2',
        clearicon: 'text-gray-500 right-12 -mt-2 absolute top-1/2',
        transition: TRANSITIONS.overlay
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
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
<\/script>`}}}},Ht=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function qt(a,n,p,c,t,h){const r=z,i=y,d=b;return u(),L(d,g(w(a.$attrs)),{default:m(()=>[e("p",null,[o(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),l(r,{to:"/tailwind"},{default:m(()=>[o("Tailwind Customization")]),_:1}),o(" section for an example. ")]),l(i,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ht,l(i,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const Wt=v(Kt,[["render",qt]]),Qt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Jt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Wt}]}]}}},Xt={class:"doc-main"},Zt=e("div",{class:"doc-intro"},[e("h1",null,"Dropdown Theming")],-1);function eo(a,n,p,c,t,h){const r=I,i=T;return u(),f(_,null,[e("div",Xt,[Zt,l(r,{docs:t.docs},null,8,["docs"])]),l(i,{docs:t.docs},null,8,["docs"])],64)}const to=v(Qt,[["render",eo]]),oo={data(){return{docs:[{id:"import",label:"Import",component:Ge},{id:"basic",label:"Basic",component:le},{id:"editable",label:"Editable",component:_e},{id:"group",label:"Group",component:Be},{id:"template",label:"Template",component:ht},{id:"filter",label:"Filter",component:Pe},{id:"clearicon",label:"Clear Icon",component:re},{id:"loadingstate",label:"Loading State",component:at},{id:"virtualscroll",label:"Virtual Scroll",component:wt},{id:"lazyvirtualscroll",label:"Lazy Virtual Scroll",component:et},{id:"floatlabel",label:"Float Label",component:Fe},{id:"invalid",label:"Invalid",component:We},{id:"disabled",label:"Disabled",component:me},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Pt}]},{id:"accessibility",label:"Accessibility",component:X}],ptComponent:Ut,themingDoc:to}}};function lo(a,n,p,c,t,h){const r=F;return u(),L(r,{title:"Vue Select Component",header:"Dropdown",description:"Dropdown also known as Select, is used to choose an item from a collection of options.",componentDocs:t.docs,apiDocs:["Dropdown"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ro=v(oo,[["render",lo]]);export{ro as default};
