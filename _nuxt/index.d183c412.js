import{_ as f,o as h,e as L,w as p,b as e,f as t,a as n,m as $,C as D,p as w,h as b,j as x,c as v,n as g,g as S,F as _,A as M,t as C,B as I,D as P,k as N,l as T,v as R,x as V}from"./entry.68beb385.js";import{u as A,a as F}from"./vee-validate.esm.3b430014.js";import{g as Y}from"./PTHelper.11558b27.js";import{_ as j}from"./PrimeVueNuxtLink.f51d0c80.js";const B={data(){return{code:{basic:`<span id="dd1"></span>Options</span>
<MultiSelect aria-labelledby="dd1" />

<MultiSelect aria-label="Options" />`}}}},U=e("h3",null,"Screen Reader",-1),O=e("p",null,[t(" Value to describe the component can either be provided with "),e("i",null,"aria-labelledby"),t(" or "),e("i",null,"aria-label"),t(" props. The multiselect component has a "),e("i",null,"combobox"),t(" role in addition to "),e("i",null,"aria-haspopup"),t(" and "),e("i",null,"aria-expanded"),t(" attributes. The relation between the combobox and the popup is created with "),e("i",null,"aria-controls"),t(" attribute that refers to the id of the popup listbox. ")],-1),G=e("p",null,[t("The popup listbox uses "),e("i",null,"listbox"),t(" as the role with "),e("i",null,"aria-multiselectable"),t(" enabled. Each list item has an "),e("i",null,"option"),t(" role along with "),e("i",null,"aria-label"),t(", "),e("i",null,"aria-selected"),t(" and "),e("i",null,"aria-disabled"),t(" attributes.")],-1),E=e("i",null,"selectAll",-1),K=e("i",null,"unselectAll",-1),z=e("i",null,"aria",-1),J=e("p",null,[t("If filtering is enabled, "),e("i",null,"filterInputProps"),t(" can be defined to give "),e("i",null,"aria-*"),t(" props to the input element.")],-1),H=e("i",null,"close",-1),q=e("i",null,"aria",-1),W=e("i",null,"aria-label",-1),Q=e("i",null,"closeButtonProps",-1),X=e("h3",null,"Closed State Keyboard Support",-1),Z=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the multiselect element.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"any printable character")]),e("td",null,"Opens the popup and moves focus to the option whose label starts with the characters being typed, if there is none then first option receives the focus.")])])])],-1),ee=e("h3",null,"Popup Keyboard Support",-1),te=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),t(" + "),e("i",null,"tab")]),e("td",null,"Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Toggles the selection state of the focused option, then moves focus to the multiselect element.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the selection state of the focused option, then moves focus to the multiselect element.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup, moves focus to the multiselect element.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next option, if there is none then visual focus does not change.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous option, if there is none then visual focus does not change.")]),e("tr",null,[e("td",null,[e("i",null,"alt"),t(" + "),e("i",null,"up arrow")]),e("td",null,"Selects the focused option and closes the popup, then moves focus to the multiselect element.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),t(" + "),e("i",null,"down arrow")]),e("td",null,"Moves focus to the next option and toggles the selection state.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),t(" + "),e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous option and toggles the selection state.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),t(" + "),e("i",null,"space")]),e("td",null,"Selects the items between the most recently selected option and the focused option.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first option.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last option.")]),e("tr",null,[e("td",null,[e("i",null,"control"),t(" + "),e("i",null,"shift"),t(" + "),e("i",null,"home")]),e("td",null,"Selects the focused options and all the options up to the first one.")]),e("tr",null,[e("td",null,[e("i",null,"control"),t(" + "),e("i",null,"shift"),t(" + "),e("i",null,"end")]),e("td",null,"Selects the focused options and all the options down to the last one.")]),e("tr",null,[e("td",null,[e("i",null,"control"),t(" + "),e("i",null,"a")]),e("td",null,"Selects all options.")]),e("tr",null,[e("td",null,[e("i",null,"pageUp")]),e("td",null,"Jumps visual focus to first option.")]),e("tr",null,[e("td",null,[e("i",null,"pageDown")]),e("td",null,"Jumps visual focus to last option.")]),e("tr",null,[e("td",null,[e("i",null,"any printable character")]),e("td",null,"Moves focus to the option whose label starts with the characters being typed.")])])])],-1),le=e("h3",null,"Toggle All Checkbox Keyboard Support",-1),oe=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the checked state.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup and moves focus to the multiselect element.")])])])],-1),ne=e("h3",null,"Filter Input Keyboard Support",-1),se=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next option, if there is none then visual focus does not change.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous option, if there is none then visual focus does not change.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Removes the visual focus from the current option and moves input cursor to one character left.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Removes the visual focus from the current option and moves input cursor to one character right.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves input cursor at the end, if not then moves focus to the first option.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves input cursor at the beginning, if not then moves focus to the last option.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Closes the popup and moves focus to the multiselect element.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup and moves focus to the multiselect element.")]),e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.")])])])],-1),ie=e("h3",null,"Close Button Keyboard Support",-1),ae=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Closes the popup and moves focus to the multiselect element.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Closes the popup and moves focus to the multiselect element.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup and moves focus to the multiselect element.")])])])],-1);function ce(s,o,u,d,l,m){const a=D,i=w,c=b;return h(),L(c,$({id:"accessibility",label:"Accessibility"},s.$attrs),{default:p(()=>[U,O,G,e("p",null,[t(" Checkbox component at the header uses a hidden native checkbox element internally that is only visible to screen readers. Value to read is defined with the "),E,t(" and "),K,t(" keys of the "),z,t(" property from the "),n(a,{to:"/configuration/#locale"},{default:p(()=>[t("locale")]),_:1}),t(" API. ")]),J,e("p",null,[t("Close button uses "),H,t(" key of the "),q,t(" property from the "),n(a,{to:"/configuration/#locale"},{default:p(()=>[t("locale")]),_:1}),t(" API as the "),W,t(" by default, this can be overriden with the "),Q,t(".")]),n(i,$({code:l.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},s.$attrs),null,16,["code"]),X,Z,ee,te,le,oe,ne,se,ie,ae]),_:1},16)}const re=f(B,[["render",ce]]),de={data(){return{selectedCities:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:`<MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"
    :maxSelectedLabels="3" class="w-full md:w-20rem" />`,options:`<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"  
            :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
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
        <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},ue=e("p",null,[t(" MultiSelect is used as a controlled component with "),e("i",null,"v-model"),t(" property along with an "),e("i",null,"options"),t(" collection. Label and value of an option are defined with the "),e("i",null,"optionLabel"),t(" and "),e("i",null,"optionValue"),t(" properties respectively. Note that, when options are simple primitive values such as a string array, no "),e("i",null,"optionLabel"),t(" and "),e("i",null,"optionValue"),t(" would be necessary. ")],-1),pe={class:"card flex justify-content-center"};function me(s,o,u,d,l,m){const a=b,i=x("MultiSelect"),c=w;return h(),v(_,null,[n(a,g(S(s.$attrs)),{default:p(()=>[ue]),_:1},16),e("div",pe,[n(i,{modelValue:l.selectedCities,"onUpdate:modelValue":o[0]||(o[0]=r=>l.selectedCities=r),options:l.cities,optionLabel:"name",placeholder:"Select Cities",maxSelectedLabels:3,class:"w-full md:w-20rem"},null,8,["modelValue","options"])]),n(c,{code:l.code},null,8,["code"])],64)}const fe=f(de,[["render",me]]),he={data(){return{selectedCities:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:`<MultiSelect v-model="selectedCities" display="chip" :options="cities" optionLabel="name" placeholder="Select Cities"
    :maxSelectedLabels="3" class="w-full md:w-20rem" />`,options:`<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" display="chip" :options="cities" optionLabel="name" placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
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
        <MultiSelect v-model="selectedCities" display="chip" :options="cities" optionLabel="name" placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},be=e("p",null,[t("Selected values are displayed as a comma separated list by default, setting "),e("i",null,"display"),t(" as "),e("i",null,"chip"),t(" displays them as chips.")],-1),ve={class:"card flex justify-content-center"};function _e(s,o,u,d,l,m){const a=b,i=x("MultiSelect"),c=w;return h(),v(_,null,[n(a,g(S(s.$attrs)),{default:p(()=>[be]),_:1},16),e("div",ve,[n(i,{modelValue:l.selectedCities,"onUpdate:modelValue":o[0]||(o[0]=r=>l.selectedCities=r),display:"chip",options:l.cities,optionLabel:"name",placeholder:"Select Cities",maxSelectedLabels:3,class:"w-full md:w-20rem"},null,8,["modelValue","options"])]),n(c,{code:l.code},null,8,["code"])],64)}const ge=f(he,[["render",_e]]),Se={data(){return{code:{basic:'<MultiSelect disabled placeholder="Select Cities" class="w-full md:w-20rem" />',options:`<template>
    <div class="flex justify-content-center">
        <MultiSelect disabled placeholder="Select Cities" class="w-full md:w-20rem" />
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="flex justify-content-center">
        <MultiSelect disabled placeholder="Select Cities" class="w-full md:w-20rem" />
    </div>
</template>

<script setup>

<\/script>`}}}},we=e("p",null,[t("When "),e("i",null,"disabled"),t(" is present, the element cannot be edited and focused.")],-1),xe={class:"card flex justify-content-center"};function ye(s,o,u,d,l,m){const a=b,i=x("MultiSelect"),c=w;return h(),v(_,null,[n(a,g(S(s.$attrs)),{default:p(()=>[we]),_:1},16),e("div",xe,[n(i,{disabled:"",placeholder:"Select Cities",class:"w-full md:w-20rem"})]),n(c,{code:l.code},null,8,["code"])],64)}const Ce=f(Se,[["render",ye]]),Le={data(){return{selectedCities:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:`<MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select Cities"
    :maxSelectedLabels="3" class="w-full md:w-20rem" />`,options:`<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select Cities"  
            :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
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
        <MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},Me=e("p",null,[t(" Filtering allows searching items in the list using an input field at the header. In order to use filtering, enable "),e("i",null,"filter"),t(" property. By default, optionLabel is used when searching and "),e("i",null,"filterFields"),t(" can be used to customize the fields being utilized. Furthermore, "),e("i",null,"filterMatchMode"),t(' is available to define the search algorithm. Valid values are "contains" (default), "startsWith" and "endsWith". ')],-1),ke={class:"card flex justify-content-center"};function $e(s,o,u,d,l,m){const a=b,i=x("MultiSelect"),c=w;return h(),v(_,null,[n(a,g(S(s.$attrs)),{default:p(()=>[Me]),_:1},16),e("div",ke,[n(i,{modelValue:l.selectedCities,"onUpdate:modelValue":o[0]||(o[0]=r=>l.selectedCities=r),options:l.cities,filter:"",optionLabel:"name",placeholder:"Select Cities",maxSelectedLabels:3,class:"w-full md:w-20rem"},null,8,["modelValue","options"])]),n(c,{code:l.code},null,8,["code"])],64)}const De=f(Le,[["render",$e]]),Ne={data(){return{selectedCities:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:`<span class="p-float-label">
    <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-20rem" />
    <label for="ms-cities">MultiSelect</label>
</span>`,options:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-20rem" />
            <label for="ms-cities">MultiSelect</label>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
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
        <span class="p-float-label">
            <MultiSelect id="ms-cities" v-model="selectedCities" :options="cities" optionLabel="name" :maxSelectedLabels="3" class="w-full md:w-20rem" />
            <label for="ms-cities">MultiSelect</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},Te=e("p",null,"A floating label appears on top of the input field when focused.",-1),Ie={class:"card flex justify-content-center"},Pe={class:"p-float-label"},Re=e("label",{for:"ms-cities"},"MultiSelect",-1);function Ve(s,o,u,d,l,m){const a=b,i=x("MultiSelect"),c=w;return h(),v(_,null,[n(a,g(S(s.$attrs)),{default:p(()=>[Te]),_:1},16),e("div",Ie,[e("span",Pe,[n(i,{id:"ms-cities",modelValue:l.selectedCities,"onUpdate:modelValue":o[0]||(o[0]=r=>l.selectedCities=r),options:l.cities,optionLabel:"name",maxSelectedLabels:3,class:"w-full md:w-20rem"},null,8,["modelValue","options"]),Re])]),n(c,{code:l.code},null,8,["code"])],64)}const Ae=f(Ne,[["render",Ve]]),Fe={data(){return{selectedCities:null,groupedCities:[{label:"Germany",code:"DE",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",code:"US",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",code:"JP",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}],code:{basic:`<MultiSelect v-model="selectedCities" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" display="chip" placeholder="Select Cities" class="w-full md:w-20rem">
    <template #optiongroup="slotProps">
        <div class="flex align-items-center">
            <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.label }}</div>
        </div>
    </template>
</MultiSelect>`,options:`<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" display="chip" placeholder="Select Cities" class="w-full md:w-20rem">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
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
        <MultiSelect v-model="selectedCities" :options="groupedCities" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" display="chip" placeholder="Select Cities" class="w-full md:w-20rem">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.label }}</div>
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
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
<\/script>`}}}},Ye=e("p",null,[t(" Options can be grouped when a nested data structures is provided. To define the label of a group "),e("i",null,"optionGroupLabel"),t(" property is needed and also "),e("i",null,"optionGroupChildren"),t(" is required to define the property that refers to the children of a group. ")],-1),je={class:"card flex justify-content-center"},Be={class:"flex align-items-center"},Ue=["alt"];function Oe(s,o,u,d,l,m){const a=b,i=x("MultiSelect"),c=w;return h(),v(_,null,[n(a,g(S(s.$attrs)),{default:p(()=>[Ye]),_:1},16),e("div",je,[n(i,{modelValue:l.selectedCities,"onUpdate:modelValue":o[0]||(o[0]=r=>l.selectedCities=r),options:l.groupedCities,optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",display:"chip",placeholder:"Select Cities",class:"w-full md:w-20rem"},{optiongroup:p(r=>[e("div",Be,[e("img",{alt:r.option.label,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:M(`flag flag-${r.option.code.toLowerCase()} mr-2`),style:{width:"18px"}},null,10,Ue),e("div",null,C(r.option.label),1)])]),_:1},8,["modelValue","options"])]),n(c,{code:l.code},null,8,["code"])],64)}const Ge=f(Fe,[["render",Oe]]),Ee={data(){return{code:{basic:"import MultiSelect from 'primevue/multiselect';"}}}};function Ke(s,o,u,d,l,m){const a=b,i=w;return h(),v(_,null,[n(a,g(S(s.$attrs)),null,16),n(i,{code:l.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ze=f(Ee,[["render",Ke]]),Je={data(){return{selectedCities:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:`<MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"
    :maxSelectedLabels="3" class="p-invalid w-full md:w-20rem" />`,options:`<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"  
            :maxSelectedLabels="3" class="p-invalid w-full md:w-20rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
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
        <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"
            :maxSelectedLabels="3" class="p-invalid w-full md:w-20rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},He=e("p",null,[t("Invalid state style is added using the "),e("i",null,"p-invalid"),t(" class to indicate a failed validation.")],-1),qe={class:"card flex justify-content-center"};function We(s,o,u,d,l,m){const a=b,i=x("MultiSelect"),c=w;return h(),v(_,null,[n(a,g(S(s.$attrs)),{default:p(()=>[He]),_:1},16),e("div",qe,[n(i,{modelValue:l.selectedCities,"onUpdate:modelValue":o[0]||(o[0]=r=>l.selectedCities=r),options:l.cities,optionLabel:"name",placeholder:"Select Cities",maxSelectedLabels:3,class:"p-invalid w-full md:w-20rem"},null,8,["modelValue","options"])]),n(c,{code:l.code},null,8,["code"])],64)}const Qe=f(Je,[["render",We]]),Xe={data(){return{code:{basic:'<MultiSelect placeholder="Loading..." loading class="w-full md:w-20rem"></MultiSelect>',options:`<template>
    <div class="card flex justify-content-center">
        <MultiSelect placeholder="Loading..." loading class="w-full md:w-20rem"></MultiSelect>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <MultiSelect placeholder="Loading..." loading class="w-full md:w-20rem"></MultiSelect>
    </div>
</template>

<script setup>
<\/script>`}}}},Ze=e("p",null,[t("Loading state can be used "),e("i",null,"loading"),t(" property.")],-1),et={class:"card flex justify-content-center"};function tt(s,o,u,d,l,m){const a=b,i=x("MultiSelect"),c=w;return h(),v(_,null,[n(a,g(S(s.$attrs)),{default:p(()=>[Ze]),_:1},16),e("div",et,[n(i,{placeholder:"Loading...",loading:"",class:"w-full md:w-20rem"})]),n(c,{code:l.code},null,8,["code"])],64)}const lt=f(Xe,[["render",tt]]),ot={data(){return{selectedCountries:null,countries:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}],code:{basic:`<MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" placeholder="Select Countries" display="chip" class="w-full md:w-20rem">
    <template #option="slotProps">
        <div class="flex align-items-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
    <template #footer>
        <div class="py-2 px-3">
            <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{ (selectedCountries ? selectedCountries.length : 0) > 1 ? 's' : '' }} selected.
        </div>
    </template>
</MultiSelect>`,options:`<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" placeholder="Select Countries" display="chip" class="w-full md:w-20rem">
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #footer>
                <div class="py-2 px-3">
                    <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{ (selectedCountries ? selectedCountries.length : 0) > 1 ? 's' : '' }} selected.
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCountries: null,
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
        <MultiSelect v-model="selectedCountries" :options="countries" optionLabel="name" placeholder="Select Countries" display="chip" class="w-full md:w-20rem">
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #footer>
                <div class="py-2 px-3">
                    <b>{{ selectedCountries ? selectedCountries.length : 0 }}</b> item{{ (selectedCountries ? selectedCountries.length : 0) > 1 ? 's' : '' }} selected.
                </div>
            </template>
        </MultiSelect>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCountries = ref();
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
<\/script>`}}}},nt=e("p",null,[t(" Label of an option is used as the display text of an item by default, for custom content support define an "),e("i",null,"option"),t(" template that gets the option instance as a parameter. In addition "),e("i",null,"value"),t(", "),e("i",null,"optiongroup"),t(", "),e("i",null,"chip"),t(", "),e("i",null,"header"),t(", "),e("i",null,"footer"),t(", "),e("i",null,"emptyfilter"),t(" and "),e("i",null,"empty"),t(" slots are provided for further customization. ")],-1),st={class:"card flex justify-content-center"},it={class:"flex align-items-center"},at=["alt"],ct={class:"py-2 px-3"};function rt(s,o,u,d,l,m){const a=b,i=x("MultiSelect"),c=w;return h(),v(_,null,[n(a,g(S(s.$attrs)),{default:p(()=>[nt]),_:1},16),e("div",st,[n(i,{modelValue:l.selectedCountries,"onUpdate:modelValue":o[0]||(o[0]=r=>l.selectedCountries=r),options:l.countries,optionLabel:"name",placeholder:"Select Countries",display:"chip",class:"w-full md:w-20rem"},{option:p(r=>[e("div",it,[e("img",{alt:r.option.name,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:M(`flag flag-${r.option.code.toLowerCase()} mr-2`),style:{width:"18px"}},null,10,at),e("div",null,C(r.option.name),1)])]),footer:p(()=>[e("div",ct,[e("b",null,C(l.selectedCountries?l.selectedCountries.length:0),1),t(" item"+C((l.selectedCountries?l.selectedCountries.length:0)>1?"s":"")+" selected. ",1)])]),_:1},8,["modelValue","options"])]),n(c,{code:l.code},null,8,["code"])],64)}const dt=f(ot,[["render",rt]]),ut={data(){return{selectedItems:null,selectAll:!1,items:Array.from({length:1e5},(s,o)=>({label:`Item #${o}`,value:o})),code:{basic:`<MultiSelect v-model="selectedItems" :options="items" :maxSelectedLabels="3" :selectAll="selectAll" optionLabel="label" optionValue="value"
    @selectall-change="onSelectAllChange($event)" @change="onChange($event)" :virtualScrollerOptions="{ itemSize: 44 }" placeholder="Select Item" class="w-full md:w-20rem" />`,options:`<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedItems" :options="items" :maxSelectedLabels="3" :selectAll="selectAll" optionLabel="label" optionValue="value"
            @selectall-change="onSelectAllChange($event)" @change="onChange($event)" :virtualScrollerOptions="{ itemSize: 44 }" placeholder="Select Item" class="w-full md:w-20rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedItems: null,
            selectAll: false,
            items: Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }))
        };
    },
    methods: {
        onSelectAllChange(event) {
            this.selectedItems = event.checked ? this.items.map((item) => item.value) : [];
            this.selectAll = event.checked;
        },
        onChange(event) {
            this.selectAll = event.value.length === this.items.length;
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedItems" :options="items" :maxSelectedLabels="3" :selectAll="selectAll" optionLabel="label" optionValue="value"
            @selectall-change="onSelectAllChange($event)" @change="onChange($event)" :virtualScrollerOptions="{ itemSize: 44 }" placeholder="Select Item" class="w-full md:w-20rem" />
    </div>
</template>

<script setup>
import { ref } from 'vue';


const selectedItems = ref();
const selectAll = ref(false);
const items = ref(Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })));

const onSelectAllChange = (event) => {
    selectedItems.value = event.checked ? items.value.map((item) => item.value) : [];
    selectAll.value = event.checked;
};
onChange(event) {
    selectAll.value = event.value.length === items.value.length;
}

<\/script>`}}},methods:{onSelectAllChange(s){this.selectedItems=s.checked?this.items.map(o=>o.value):[],this.selectAll=s.checked},onChange(s){this.selectAll=s.value.length===this.items.length}}},pt=e("i",null,"virtualScrollerOptions",-1),mt={class:"card flex justify-content-center"};function ft(s,o,u,d,l,m){const a=D,i=b,c=x("MultiSelect"),r=w;return h(),v(_,null,[n(i,g(S(s.$attrs)),{default:p(()=>[e("p",null,[t(" VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with "),pt,t(" property, refer to the "),n(a,{to:"/virtualscroller"},{default:p(()=>[t("VirtualScroller")]),_:1}),t(" for more information about the available options as it is used internally by MultiSelect. ")])]),_:1},16),e("div",mt,[n(c,{modelValue:l.selectedItems,"onUpdate:modelValue":o[0]||(o[0]=y=>l.selectedItems=y),options:l.items,maxSelectedLabels:3,selectAll:l.selectAll,onSelectallChange:o[1]||(o[1]=y=>m.onSelectAllChange(y)),onChange:o[2]||(o[2]=y=>m.onChange(y)),optionLabel:"label",optionValue:"value",virtualScrollerOptions:{itemSize:44},placeholder:"Select Item",class:"w-full md:w-20rem"},null,8,["modelValue","options","selectAll"])]),n(r,{code:l.code},null,8,["code"])],64)}const ht=f(ut,[["render",ft]]),bt={setup(){const{handleSubmit:s,resetForm:o}=A(),{value:u,errorMessage:d}=F("value",m),l=I();function m(i){return i?!0:"City is required."}const a=s(i=>{let c="";i.value.map((r,y)=>{c+=r.name+(y<i.value.length-1?", ":"")}),i.value&&i.value.length>0&&(l.add({severity:"info",summary:"Form Submitted",detail:c,life:3e3}),o())});return{value:u,handleSubmit:s,onSubmit:a,errorMessage:d}},data(){return{cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <MultiSelect v-model="value" :class="{ 'p-invalid': errorMessage }" :options="cities" optionLabel="name" placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-20rem" aria-describedby="text-error" />
            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <MultiSelect v-model="value" :class="{ 'p-invalid': errorMessage }" :options="cities" optionLabel="name" placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-20rem" aria-describedby="text-error" />
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
            let detail = '';

            values.value.map((value, i) => {
                detail += value.name + (i < values.value.length - 1 ? ', ' : '');
            });

            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: detail, life: 3000 });
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
            <MultiSelect v-model="value" :class="{ 'p-invalid': errorMessage }" :options="cities" optionLabel="name" placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-20rem" aria-describedby="text-error" />
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
    let detail = '';

    values.value.map((value, i) => {
        detail += value.name + (i < values.value.length - 1 ? ', ' : '');
    });

    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: detail, life: 3000 });
        resetForm();
    }
});
<\/script>
`}}}},vt=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),t(" is a popular library for handling forms in Vue.")],-1),_t={class:"card flex justify-content-center"},gt={id:"text-error",class:"p-error"};function St(s,o,u,d,l,m){const a=b,i=x("MultiSelect"),c=x("Button"),r=w;return h(),v(_,null,[n(a,g(S(s.$attrs)),{default:p(()=>[vt]),_:1},16),e("div",_t,[e("form",{onSubmit:o[1]||(o[1]=(...y)=>d.onSubmit&&d.onSubmit(...y)),class:"flex flex-column align-items-center gap-2"},[n(i,{modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=y=>d.value=y),class:M([{"p-invalid":d.errorMessage},"w-full md:w-20rem"]),options:l.cities,optionLabel:"name",placeholder:"Select Cities",maxSelectedLabels:3,"aria-describedby":"text-error"},null,8,["modelValue","class","options"]),e("small",gt,C(d.errorMessage||" "),1),n(c,{type:"submit",label:"Submit"})],32)]),n(r,{code:l.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const wt=f(bt,[["render",St]]),xt={data(){return{selectedCities:null,cities:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],code:{basic:`<MultiSelect
    v-model="selectedCities"
    :options="cities"
    optionLabel="name"
    placeholder="Select Cities"
    :maxSelectedLabels="3"
    :pt="{
        root: { class: 'w-full md:w-14rem' },
        item: ({ props, state, context }) => ({
            class: context.selected ? 'bg-blue-300' : context.focused ? 'bg-blue-100' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <MultiSelect
            v-model="selectedCities"
            :options="cities"
            optionLabel="name"
            placeholder="Select Cities"
            :maxSelectedLabels="3"
            :pt="{
                root: { class: 'w-full md:w-14rem' },
                item: ({ props, state, context }) => ({
                    class: context.selected ? 'bg-blue-300' : context.focused ? 'bg-blue-100' : undefined
                })
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCities: null,
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
        <MultiSelect
            v-model="selectedCities"
            :options="cities"
            optionLabel="name"
            placeholder="Select Cities"
            :maxSelectedLabels="3"
            :pt="{
                root: { class: 'w-full md:w-14rem' },
                item: ({ props, state, context }) => ({
                    class: context.selected ? 'bg-blue-300' : context.focused ? 'bg-blue-100' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},yt={class:"card flex justify-content-center"};function Ct(s,o,u,d,l,m){const a=b,i=x("MultiSelect"),c=w;return h(),v(_,null,[n(a,g(S(s.$attrs)),null,16),e("div",yt,[n(i,{modelValue:l.selectedCities,"onUpdate:modelValue":o[0]||(o[0]=r=>l.selectedCities=r),options:l.cities,optionLabel:"name",placeholder:"Select Cities",maxSelectedLabels:3,pt:{root:{class:"w-full md:w-14rem"},item:({props:r,state:y,context:k})=>({class:k.selected?"bg-blue-300":k.focused?"bg-blue-100":void 0})}},null,8,["modelValue","options","pt"])]),n(c,{code:l.code},null,8,["code"])],64)}const Lt=f(xt,[["render",Ct]]),Mt={},kt=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/multiselect.jpg"})],-1);function $t(s,o){const u=b;return h(),v(_,null,[n(u,g(S(s.$attrs)),{default:p(()=>[e("p",null,C(s.$attrs.description),1)]),_:1},16),kt],64)}const Dt=f(Mt,[["render",$t]]),Nt={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Dt},{id:"pt.doc.multiselect",label:"MultiSelect PT Options",component:P,data:Y("MultiSelect")},{id:"pt.demo",label:"Demo",component:Lt}]}}},Tt={class:"doc-main"},It=e("div",{class:"doc-intro"},[e("h1",null,"MultiSelect Pass Through")],-1);function Pt(s,o,u,d,l,m){const a=N,i=T;return h(),v(_,null,[e("div",Tt,[It,n(a,{docs:l.docs},null,8,["docs"])]),n(i,{docs:l.docs},null,8,["docs"])],64)}const Rt=f(Nt,[["render",Pt]]),Vt={},At=e("p",null,"List of class names used in the styled mode.",-1),Ft=R('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-multiselect</td><td>Container element.</td></tr><tr><td>p-multiselect-label-container</td><td>Container of the label to display selected items.</td></tr><tr><td>p-multiselect-label-container</td><td>Label to display selected items.</td></tr><tr><td>p-multiselect-trigger</td><td>Dropdown button.</td></tr><tr><td>p-multiselect-filter-container</td><td>Container of filter input.</td></tr><tr><td>p-multiselect-panel</td><td>Overlay panel for items.</td></tr><tr><td>p-multiselect-items</td><td>List container of items.</td></tr><tr><td>p-multiselect-item</td><td>An item in the list.</td></tr><tr><td>p-overlay-open</td><td>Container element when overlay is visible.</td></tr></tbody></table></div>',1);function Yt(s,o){const u=b;return h(),v(_,null,[n(u,g(S(s.$attrs)),{default:p(()=>[At]),_:1},16),Ft],64)}const jt=f(Vt,[["render",Yt]]),Bt={data(){return{code1:{basic:`
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    multiselect: {
        root: ({ props }) => ({
            class: [
                'inline-flex cursor-pointer select-none',
                'bg-white dark:bg-gray-900 border border-gray-400 dark:border-blue-900/40  transition-colors duration-200 ease-in-out rounded-md',
                'w-full md:w-80',
                { 'opacity-60 select-none pointer-events-none cursor-default': props?.disabled }
            ]
        }),
        labelContainer: 'overflow-hidden flex flex-auto cursor-pointer',
        label: ({ props }) => ({
            class: [
                'block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis',
                'text-gray-800 dark:text-white/80',
                'p-3 transition duration-200',
                {
                    '!p-3': props.display !== 'chip' && (props?.modelValue == null || props?.modelValue == undefined),
                    '!py-1.5 px-3': props.display == 'chip' && props?.modelValue !== null,
                    '!p-3': props.display == 'chip' && props?.modelValue == null
                }
            ]
        }),
        token: {
            class: ['py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center']
        },
        removeTokenIcon: 'ml-2',
        trigger: {
            class: ['flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg']
        },
        panel: {
            class: ['bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg']
        },
        header: {
            class: ['p-3 border-b border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 bg-gray-100 dark:bg-gray-800 rounded-t-lg', 'flex items-center justify-between']
        },
        headerCheckboxContainer: {
            class: ['inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6']
        },
        headerCheckbox: ({ context }) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 dark:text-white/70 rounded-lg transition-colors duration-200',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900': !context?.selected,
                    'border-blue-500 bg-blue-500': context?.selected
                }
            ]
        }),
        headercheckboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base',
        closeButton: {
            class: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 dark:text-white/70 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
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
        checkboxContainer: {
            class: ['inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6']
        },
        checkbox: ({ context }) => ({
            class: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 dark:text-white/80 rounded-lg transition-colors duration-200',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 dark:border-blue-900/40  bg-white dark:bg-gray-900': !context?.selected,
                    'border-blue-500 bg-blue-500': context?.selected
                }
            ]
        }),
        checkboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base',
        itemgroup: {
            class: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
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
        <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"
            :maxSelectedLabels="3" class="w-full md:w-20rem" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>`}}}},Ut=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ot(s,o,u,d,l,m){const a=j,i=w,c=b;return h(),L(c,g(S(s.$attrs)),{default:p(()=>[e("p",null,[t(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(a,{to:"/tailwind"},{default:p(()=>[t("Tailwind Customization")]),_:1}),t(" section for an example. ")]),n(i,{code:l.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ut,n(i,{code:l.code2,embedded:""},null,8,["code"])]),_:1},16)}const Gt=f(Bt,[["render",Ot]]),Et={data(){return{docs:[{id:"theming.styled",label:"Styled",component:jt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Gt}]}]}}},Kt={class:"doc-main"},zt=e("div",{class:"doc-intro"},[e("h1",null,"MultiSelect Theming")],-1);function Jt(s,o,u,d,l,m){const a=N,i=T;return h(),v(_,null,[e("div",Kt,[zt,n(a,{docs:l.docs},null,8,["docs"])]),n(i,{docs:l.docs},null,8,["docs"])],64)}const Ht=f(Et,[["render",Jt]]),qt={data(){return{docs:[{id:"import",label:"Import",component:ze},{id:"basic",label:"Basic",component:fe},{id:"chips",label:"Chips",component:ge},{id:"group",label:"Group",component:Ge},{id:"template",label:"Template",component:dt},{id:"filter",label:"Filter",component:De},{id:"loadingstate",label:"Loading State",component:lt},{id:"virtualscroll",label:"VirtualScroll",component:ht},{id:"floatlabel",label:"Float Label",component:Ae},{id:"invalid",label:"Invalid",component:Qe},{id:"disabled",label:"Disabled",component:Ce},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:wt}]},{id:"accessibility",label:"Accessibility",component:re}],ptComponent:Rt,themingDoc:Ht}}};function Wt(s,o,u,d,l,m){const a=V;return h(),L(a,{title:"Vue MultiSelect Component",header:"MultiSelect",description:"MultiSelect is used to select multiple items from a collection.",componentDocs:l.docs,apiDocs:["MultiSelect"],ptTabComponent:l.ptComponent,themingDocs:l.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const tl=f(qt,[["render",Wt]]);export{tl as default};
