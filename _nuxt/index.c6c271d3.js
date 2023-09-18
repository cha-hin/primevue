import{_ as p,o as h,e as w,w as f,a,m as I,b as e,f as l,p as C,h as v,j as S,c as g,n as y,g as _,F as b,y as F,z as V,A as T,t as x,B as P,D as q,k as $,l as M,v as G,x as B}from"./entry.68beb385.js";import{_ as D}from"./PrimeVueNuxtLink.f51d0c80.js";import{u as N,a as j}from"./vee-validate.esm.3b430014.js";import{g as U}from"./PTHelper.11558b27.js";const K={data(){return{code:{basic:`<label for="ac1">;Username</label>
<AutoComplete inputId="ac1" />

<span id="ac2">Email</span>
<AutoComplete aria-labelledby="ac2" />

<AutoComplete aria-label="City" />`}}}},O=e("h3",null,"Screen Reader",-1),R=e("p",null,[l(" Value to describe the component can either be provided via "),e("i",null,"label"),l(" tag combined with "),e("i",null,"inputId"),l(" prop or using "),e("i",null,"aria-labelledby"),l(", "),e("i",null,"aria-label"),l(" props. The input element has "),e("i",null,"combobox"),l(" role in addition to "),e("i",null,"aria-autocomplete"),l(", "),e("i",null,"aria-haspopup"),l(" and "),e("i",null,"aria-expanded"),l(" attributes. The relation between the input and the popup is created with "),e("i",null,"aria-controls"),l(" and "),e("i",null,"aria-activedescendant"),l(" attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list. ")],-1),E=e("p",null,[l("In multiple mode, chip list uses "),e("i",null,"listbox"),l(" role with "),e("i",null,"aria-orientation"),l(" set to horizontal whereas each chip has the "),e("i",null,"option"),l(" role with "),e("i",null,"aria-label"),l(" set to the label of the chip.")],-1),H=e("p",null,[l(" The popup list has an id that refers to the "),e("i",null,"aria-controls"),l(" attribute of the input element and uses "),e("i",null,"listbox"),l(" as the role. Each list item has "),e("i",null,"option"),l(" role and an id to match the "),e("i",null,"aria-activedescendant"),l(" of the input element. ")],-1),z=e("h3",null,"Closed State Keyboard Support",-1),Y=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the autocomplete element.")]),e("tr",null,[e("td",null,[e("i",null,"any printable character")]),e("td",null,"Opens the popup and moves focus to the first option.")])])])],-1),J=e("h3",null,"Popup Keyboard Support",-1),W=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),l(" + "),e("i",null,"tab")]),e("td",null,"Moves focus to the previous focusable element in the popup. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Selects the focused option and closes the popup, then moves focus to the autocomplete element.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Selects the focused option and closes the popup, then moves focus to the autocomplete element.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup, then moves focus to the autocomplete element.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next option, if there is none then visual focus does not change.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous option, if there is none then visual focus does not change.")]),e("tr",null,[e("td",null,[e("i",null,"alt"),l(" + "),e("i",null,"up arrow")]),e("td",null,"Selects the focused option and closes the popup, then moves focus to the autocomplete element.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Removes the visual focus from the current option and moves input cursor to one character left.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Removes the visual focus from the current option and moves input cursor to one character right.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves input cursor at the end, if not then moves focus to the first option.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves input cursor at the beginning, if not then moves focus to the last option.")]),e("tr",null,[e("td",null,[e("i",null,"pageUp")]),e("td",null,"Jumps visual focus to first option.")]),e("tr",null,[e("td",null,[e("i",null,"pageDown")]),e("td",null,"Jumps visual focus to last option.")])])])],-1),Z=e("h3",null,"Chips Input Keyboard Support",-1),Q=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"backspace")]),e("td",null,"Deletes the previous chip if the input field is empty.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Moves focus to the previous chip if available and input field is empty.")])])])],-1),X=e("h3",null,"Chip Keyboard Support",-1),ee=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Moves focus to the previous chip if available.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Moves focus to the next chip, if there is none then input field receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"backspace")]),e("td",null,"Deletes the chips and adds focus to the input field.")])])])],-1);function te(o,n,c,r,t,d){const i=C,s=v;return h(),w(s,I({id:"accessibility",label:"Accessibility"},o.$attrs),{default:f(()=>[O,R,E,H,a(i,I({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},o.$attrs),null,16,["code"]),z,Y,J,W,Z,Q,X,ee]),_:1},16)}const oe=p(K,[["render",te]]),ne={data(){return{value:"",items:[],code:{basic:'<AutoComplete v-model="value" :suggestions="items" @complete="search" />',options:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            items: []
        };
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>`}}},methods:{search(o){this.items=[...Array(10).keys()].map(n=>o.query+"-"+n)}}},le=e("p",null,[l("AutoComplete is used as a controlled component with "),e("i",null,"v-model"),l(" property. In addition, "),e("i",null,"suggestions"),l(" property and a "),e("i",null,"complete"),l(" method are required to query the results.")],-1),ae={class:"card flex justify-content-center"};function se(o,n,c,r,t,d){const i=v,s=S("AutoComplete"),m=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),{default:f(()=>[le]),_:1},16),e("div",ae,[a(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=u=>t.value=u),suggestions:t.items,onComplete:d.search},null,8,["modelValue","suggestions","onComplete"])]),a(m,{code:t.code},null,8,["code"])],64)}const ie=p(ne,[["render",se]]),re={data(){return{code:{basic:'<AutoComplete disabled placeholder="Disabled" />',options:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete disabled placeholder="Disabled" />
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete disabled placeholder="Disabled" />
    </div>
</template>

<script setup>

<\/script>`}}},methods:{search(o){this.items=[...Array(10).keys()].map(n=>o.query+"-"+n)}}},ce=e("p",null,[l("When "),e("i",null,"disabled"),l(" is present, the element cannot be edited and focused.")],-1),de={class:"card flex justify-content-center"};function ue(o,n,c,r,t,d){const i=v,s=S("AutoComplete"),m=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),{default:f(()=>[ce]),_:1},16),e("div",de,[a(s,{disabled:"",placeholder:"Disabled"})]),a(m,{code:t.code},null,8,["code"])],64)}const me=p(re,[["render",ue]]),pe={data(){return{value:"",items:[],code:{basic:'<AutoComplete v-model="value" dropdown :suggestions="items" @complete="search" />',options:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" dropdown :suggestions="items" @complete="search" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            items: []
        };
    },
    methods: {
        search(event) {
            let _items = [...Array(10).keys()];

            this.items = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" dropdown :suggestions="items" @complete="search" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    let _items = [...Array(10).keys()];

    items.value = event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : _items;
}
<\/script>`}}},methods:{search(o){let n=[...Array(10).keys()];this.items=o.query?[...Array(10).keys()].map(c=>o.query+"-"+c):n}}},he=e("p",null,[l(" Enabling "),e("i",null,"dropdown"),l(" property displays a button next to the input field where click behavior of the button is defined using "),e("i",null,"dropdownMode"),l(" property that takes "),e("strong",null,"blank"),l(" or "),e("strong",null,"current"),l(" as possible values. "),e("i",null,"blank"),l(" is the default mode to send a query with an empty string whereas "),e("i",null,"current"),l(" setting sends a query with the current value of the input. ")],-1),fe={class:"card flex justify-content-center"};function ve(o,n,c,r,t,d){const i=v,s=S("AutoComplete"),m=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),{default:f(()=>[he]),_:1},16),e("div",fe,[a(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=u=>t.value=u),dropdown:"",suggestions:t.items,onComplete:d.search},null,8,["modelValue","suggestions","onComplete"])]),a(m,{code:t.code},null,8,["code"])],64)}const ge=p(pe,[["render",ve]]),be={data(){return{value:"",items:[],code:{basic:`<span class="p-float-label">
    <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
    <label for="ac">Float Label</label>
</span>`,options:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
            <label for="ac">Float Label</label>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            items: []
        };
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
            <label for="ac">Float Label</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>`}}},methods:{search(o){this.items=[...Array(10).keys()].map(n=>o.query+"-"+n)}}},ye=e("p",null,"A floating label appears on top of the input field when focused.",-1),_e={class:"card flex justify-content-center"},Ce={class:"p-float-label"},Se=e("label",{for:"ac"},"Float Label",-1);function Ae(o,n,c,r,t,d){const i=v,s=S("AutoComplete"),m=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),{default:f(()=>[ye]),_:1},16),e("div",_e,[e("span",Ce,[a(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=u=>t.value=u),inputId:"ac",suggestions:t.items,onComplete:d.search},null,8,["modelValue","suggestions","onComplete"]),Se])]),a(m,{code:t.code},null,8,["code"])],64)}const xe=p(be,[["render",Ae]]),we={data(){return{value:"",items:[],code:{basic:'<AutoComplete v-model="value" :suggestions="items" @complete="search" forceSelection />',options:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" forceSelection />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            items: []
        };
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" forceSelection />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>`}}},methods:{search(o){this.items=[...Array(10).keys()].map(n=>o.query+"-"+n)}}},ke=e("p",null,[l(" ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared to make sure the value passed to the model is always one of the suggestions. Simply enable "),e("i",null,"forceSelection"),l(" to enforce that input is always from the suggestion list. ")],-1),Ie={class:"card flex justify-content-center"};function Te(o,n,c,r,t,d){const i=v,s=S("AutoComplete"),m=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),{default:f(()=>[ke]),_:1},16),e("div",Ie,[a(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=u=>t.value=u),suggestions:t.items,onComplete:d.search,forceSelection:""},null,8,["modelValue","suggestions","onComplete"])]),a(m,{code:t.code},null,8,["code"])],64)}const $e=p(we,[["render",Te]]),Me={data(){return{cities:null,selectedCity:null,filteredCities:null,groupedCities:[{label:"Germany",code:"DE",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",code:"US",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",code:"JP",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}],code:{basic:`<AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="search" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Hint: type 'a'">
    <template #optiongroup="slotProps">
        <div class="flex align-items-center country-item">
            <img :alt="slotProps.item.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.item.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.item.label }}</div>
        </div>
    </template>
</AutoComplete>`,options:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="search" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Hint: type 'a'">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center country-item">
                    <img :alt="slotProps.item.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.item.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.item.label }}</div>
                </div>
            </template>
        </AutoComplete>
    </div>
</template>

<script>
import { FilterMatchMode, FilterService } from 'primevue/api';

export default {
    data() {
        return {
            cities: null,
            selectedCity: null,
            filteredCities: null,
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
    },
    methods: {
        search(event) {
            let query = event.query;
            let filteredCities = [];

            for (let country of this.groupedCities) {
                let filteredItems = FilterService.filter(country.items, ['label'], query, FilterMatchMode.CONTAINS);

                if (filteredItems && filteredItems.length) {
                    filteredCities.push({ ...country, ...{ items: filteredItems } });
                }
            }

            this.filteredCities = filteredCities;
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="selectedCity" :suggestions="filteredCities" @complete="search" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" placeholder="Hint: type 'a'">
            <template #optiongroup="slotProps">
                <div class="flex align-items-center country-item">
                    <img :alt="slotProps.item.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.item.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.item.label }}</div>
                </div>
            </template>
        </AutoComplete>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { FilterMatchMode, FilterService } from 'primevue/api';

const cities = ref();
const selectedCity = ref();
const filteredCities = ref();
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

const search = (event) => {
    let query = event.query;
    let newFilteredCities = [];

    for (let country of groupedCities.value) {
        let filteredItems = FilterService.filter(country.items, ['label'], query, FilterMatchMode.CONTAINS);
        if (filteredItems && filteredItems.length) {
            newFilteredCities.push({...country, ...{items: filteredItems}});
        }
    }

    filteredCities.value = newFilteredCities;

}
<\/script>`}}},methods:{search(o){let n=o.query,c=[];for(let r of this.groupedCities){let t=F.filter(r.items,["label"],n,V.CONTAINS);t&&t.length&&c.push({...r,items:t})}this.filteredCities=c}}},De=e("p",null,[l("Option groups are specified with the "),e("i",null,"optionGroupLabel"),l(" and "),e("i",null,"optionGroupChildren"),l(" properties.")],-1),Le={class:"card flex justify-content-center"},Fe={class:"flex align-items-center country-item"},Ve=["alt"];function Pe(o,n,c,r,t,d){const i=v,s=S("AutoComplete"),m=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),{default:f(()=>[De]),_:1},16),e("div",Le,[a(s,{modelValue:t.selectedCity,"onUpdate:modelValue":n[0]||(n[0]=u=>t.selectedCity=u),suggestions:t.filteredCities,onComplete:d.search,optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",placeholder:"Hint: type 'a'"},{optiongroup:f(u=>[e("div",Fe,[e("img",{alt:u.item.label,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:T(`flag flag-${u.item.code.toLowerCase()} mr-2`),style:{width:"18px"}},null,10,Ve),e("div",null,x(u.item.label),1)])]),_:1},8,["modelValue","suggestions","onComplete"])]),a(m,{code:t.code},null,8,["code"])],64)}const qe=p(Me,[["render",Pe]]),Ge={data(){return{code:{basic:"import AutoComplete from 'primevue/autocomplete';"}}}};function Be(o,n,c,r,t,d){const i=v,s=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),null,16),a(s,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Ne=p(Ge,[["render",Be]]),je={data(){return{value:"",items:[],code:{basic:'<AutoComplete v-model="value" :suggestions="items" @complete="search" class="p-invalid" />',options:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" class="p-invalid" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            items: []
        };
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" class="p-invalid" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>`}}},methods:{search(o){this.items=[...Array(10).keys()].map(n=>o.query+"-"+n)}}},Ue=e("p",null,[l("Invalid state style is added using the "),e("i",null,"p-invalid"),l(" class to indicate a failed validation.")],-1),Ke={class:"card flex justify-content-center"};function Oe(o,n,c,r,t,d){const i=v,s=S("AutoComplete"),m=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),{default:f(()=>[Ue]),_:1},16),e("div",Ke,[a(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=u=>t.value=u),suggestions:t.items,onComplete:d.search,class:"p-invalid"},null,8,["modelValue","suggestions","onComplete"])]),a(m,{code:t.code},null,8,["code"])],64)}const Re=p(je,[["render",Oe]]),Ee={data(){return{value:"",items:[],code:{basic:'<AutoComplete v-model="value" multiple :suggestions="items" @complete="search" />',options:`<template>
    <div class="card p-fluid">
        <AutoComplete v-model="value" multiple :suggestions="items" @complete="search" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            items: []
        };
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card p-fluid">
        <AutoComplete v-model="value" multiple :suggestions="items" @complete="search" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>`}}},methods:{search(o){this.items=[...Array(10).keys()].map(n=>o.query+"-"+n)}}},He=e("p",null,[l("Multiple mode is enabled using "),e("i",null,"multiple"),l(" property used to select more than one value from the autocomplete. In this case, value reference should be an array.")],-1),ze={class:"card p-fluid"};function Ye(o,n,c,r,t,d){const i=v,s=S("AutoComplete"),m=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),{default:f(()=>[He]),_:1},16),e("div",ze,[a(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=u=>t.value=u),multiple:"",suggestions:t.items,onComplete:d.search},null,8,["modelValue","suggestions","onComplete"])]),a(m,{code:t.code},null,8,["code"])],64)}const Je=p(Ee,[["render",Ye]]),L={getData(){return[{name:"Afghanistan",code:"AF"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:'Cote D"Ivoire',code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:'Korea, Democratic People"S Republic of',code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:'Lao People"S Democratic Republic',code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}]},getCountries(){return Promise.resolve(this.getData())}},We={data(){return{countries:null,selectedCountry:null,filteredCountries:null,code:{basic:'<AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search" />',options:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search" />
    </div>
</template>

<script>
import { CountryService } from '@/service/CountryService';

export default {
    data() {
        return {
            countries: null,
            selectedCountry: null,
            filteredCountries: null
        };
    },
    mounted() {
        CountryService.getCountries().then((data) => (this.countries = data));
    },
    methods: {
        search(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                } else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CountryService } from "@/service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();


const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
}
<\/script>`}}},mounted(){L.getCountries().then(o=>this.countries=o)},methods:{search(o){setTimeout(()=>{o.query.trim().length?this.filteredCountries=this.countries.filter(n=>n.name.toLowerCase().startsWith(o.query.toLowerCase())):this.filteredCountries=[...this.countries]},250)}}},Ze=e("p",null,[l(" AutoComplete can work with objects using the "),e("i",null,"optionLabel"),l(" property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. Here is an example with a Country object that has name and code fields such as "),e("i",null,'{name: "United States", code:"USA"}'),l(". ")],-1),Qe={class:"card flex justify-content-center"};function Xe(o,n,c,r,t,d){const i=v,s=S("AutoComplete"),m=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),{default:f(()=>[Ze]),_:1},16),e("div",Qe,[a(s,{modelValue:t.selectedCountry,"onUpdate:modelValue":n[0]||(n[0]=u=>t.selectedCountry=u),optionLabel:"name",suggestions:t.filteredCountries,onComplete:d.search},null,8,["modelValue","suggestions","onComplete"])]),a(m,{code:t.code,service:["CountryService"]},null,8,["code"])],64)}const et=p(We,[["render",Xe]]),tt={data(){return{selectedCountry:null,countries:null,filteredCountries:null,code:{basic:`<AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
    <template #option="slotProps">
        <div class="flex align-options-center">
            <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
            <div>{{ slotProps.option.name }}</div>
        </div>
    </template>
</AutoComplete>`,options:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
            <template #option="slotProps">
                <div class="flex align-options-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </AutoComplete>
    </div>
</template>

<script>
import { CountryService } from '@/service/CountryService';

export default {
    data() {
        return {
            countries: null,
            selectedCountry: null,
            filteredCountries: null
        };
    },
    mounted() {
        CountryService.getCountries().then((data) => (this.countries = data));
    },
    methods: {
        search(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                } else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="selectedCountry" optionLabel="name" :suggestions="filteredCountries" @complete="search">
            <template #option="slotProps">
                <div class="flex align-options-center">
                    <img :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px" />
                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
        </AutoComplete>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { CountryService } from "@/service/CountryService";

onMounted(() => {
    CountryService.getCountries().then((data) => (countries.value = data));
});

const countries = ref();
const selectedCountry = ref();
const filteredCountries = ref();


const search = (event) => {
    setTimeout(() => {
        if (!event.query.trim().length) {
            filteredCountries.value = [...countries.value];
        } else {
            filteredCountries.value = countries.value.filter((country) => {
                return country.name.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }
    }, 250);
}
<\/script>`}}},mounted(){L.getCountries().then(o=>this.countries=o)},methods:{search(o){setTimeout(()=>{o.query.trim().length?this.filteredCountries=this.countries.filter(n=>n.name.toLowerCase().startsWith(o.query.toLowerCase())):this.filteredCountries=[...this.countries]},250)}}},ot=e("p",null,[l(" Item template allows displaying custom content inside the suggestions panel. The slotProps variable passed to the template provides an item property to represent an item in the suggestions collection. In addition "),e("i",null,"optiongroup"),l(", "),e("i",null,"chip"),l(", "),e("i",null,"header"),l(" and "),e("i",null,"footer"),l(" slots are provided for further customization ")],-1),nt={class:"card flex justify-content-center"},lt={class:"flex align-options-center"},at=["alt"];function st(o,n,c,r,t,d){const i=v,s=S("AutoComplete"),m=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),{default:f(()=>[ot]),_:1},16),e("div",nt,[a(s,{modelValue:t.selectedCountry,"onUpdate:modelValue":n[0]||(n[0]=u=>t.selectedCountry=u),optionLabel:"name",suggestions:t.filteredCountries,onComplete:d.search},{option:f(u=>[e("div",lt,[e("img",{alt:u.option.name,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:T(`flag flag-${u.option.code.toLowerCase()} mr-2`),style:{width:"18px"}},null,10,at),e("div",null,x(u.option.name),1)])]),_:1},8,["modelValue","suggestions","onComplete"])]),a(m,{code:t.code,service:["CountryService"]},null,8,["code"])],64)}const it=p(tt,[["render",st]]),rt={data(){return{items:Array.from({length:1e3},(o,n)=>({label:`Item #${n}`,value:n})),selectedItem:null,filteredItems:null,code:{basic:`<AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems"
    :virtualScrollerOptions="{ itemSize: 38 }" optionLabel="label" dropdown />`,options:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 38 }" optionLabel="label" dropdown />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: Array.from({ length: 1000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })),
            selectedItem: null,
            filteredItems: null,
        };
    },
    methods: {
        searchItems(event) {
            //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
            let query = event.query;
            let _filteredItems = [];

            for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];

                if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                    _filteredItems.push(item);
                }
            }

            this.filteredItems = _filteredItems;
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete v-model="selectedItem" :suggestions="filteredItems" @complete="searchItems" :virtualScrollerOptions="{ itemSize: 38 }" optionLabel="label" dropdown />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref(Array.from({ length: 1000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i })));
const selectedItem = ref();
const filteredItems = ref();
const searchItems = (event) => {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let query = event.query;
    let _filteredItems = [];

    for (let i = 0; i < items.value.length; i++) {
        let item = items.value[i];

        if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
            _filteredItems.push(item);
        }
    }

    filteredItems.value = _filteredItems;
};
<\/script>`}}},methods:{searchItems(o){let n=o.query,c=[];for(let r=0;r<this.items.length;r++){let t=this.items[r];t.label.toLowerCase().indexOf(n.toLowerCase())===0&&c.push(t)}this.filteredItems=c}}},ct=e("i",null,"virtualScrollerOptions",-1),dt=e("i",null,"itemSize",-1),ut={class:"card flex justify-content-center"};function mt(o,n,c,r,t,d){const i=D,s=v,m=S("AutoComplete"),u=C;return h(),g(b,null,[a(s,y(_(o.$attrs)),{default:f(()=>[e("p",null,[l(" Virtual Scrolling is a performant way to render large lists. Configuration of the scroll behavior is defined with "),ct,l(" that requires "),dt,l(" as the mandatory value to set the height of an item. Visit "),a(i,{to:"/virtualscroller"},{default:f(()=>[l("VirtualScroller")]),_:1}),l(" documentation for more information about the configuration API. ")])]),_:1},16),e("div",ut,[a(m,{modelValue:t.selectedItem,"onUpdate:modelValue":n[0]||(n[0]=A=>t.selectedItem=A),suggestions:t.filteredItems,onComplete:d.searchItems,virtualScrollerOptions:{itemSize:38},optionLabel:"label",dropdown:""},null,8,["modelValue","suggestions","onComplete"])]),a(u,{code:t.code},null,8,["code"])],64)}const pt=p(rt,[["render",mt]]),ht={setup(){const{handleSubmit:o,resetForm:n}=N(),{value:c,errorMessage:r}=j("value",d),t=P();function d(s){return s?!0:"Value is required."}const i=o(s=>{s.value&&s.value.length>0&&(t.add({severity:"info",summary:"Form Submitted",detail:s.value,life:3e3}),n())});return{value:c,handleSubmit:o,onSubmit:i,errorMessage:r}},data(){return{items:[],code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="ac">Value</label>
            <AutoComplete v-model="value" :inputClass="{ 'p-invalid': errorMessage }" inputId="ac" :suggestions="items" @complete="search" aria-describedby="ac-error" />
            <small class="p-error" id="ac-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="ac">Value</label>
            <AutoComplete v-model="value" :inputClass="{ 'p-invalid': errorMessage }" inputId="ac" :suggestions="items" @complete="search" aria-describedby="ac-error" />
            <small class="p-error" id="ac-error">{{ errorMessage || '&nbsp;' }}</small>
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
    data() {
        return {
            items: []
        }
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="ac">Value</label>
            <AutoComplete v-model="value" :inputClass="{ 'p-invalid': errorMessage }" inputId="ac" :suggestions="items" @complete="search" aria-describedby="ac-error" />
            <small class="p-error" id="ac-error">{{ errorMessage || '&nbsp;' }}</small>
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
const items = ref([]);

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

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
};
<\/script>
`}}},methods:{search(o){this.items=[...Array(10).keys()].map(n=>o.query+"-"+n)}}},ft=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),l(" is a popular library for handling forms in Vue.")],-1),vt={class:"card flex justify-content-center"},gt=e("label",{for:"ac"},"Value",-1),bt={id:"ac-error",class:"p-error"};function yt(o,n,c,r,t,d){const i=v,s=S("AutoComplete"),m=S("Button"),u=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),{default:f(()=>[ft]),_:1},16),e("div",vt,[e("form",{onSubmit:n[1]||(n[1]=(...A)=>r.onSubmit&&r.onSubmit(...A)),class:"flex flex-column gap-2"},[gt,a(s,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=A=>r.value=A),inputClass:{"p-invalid":r.errorMessage},inputId:"ac",suggestions:t.items,onComplete:d.search,"aria-describedby":"ac-error"},null,8,["modelValue","inputClass","suggestions","onComplete"]),e("small",bt,x(r.errorMessage||" "),1),a(m,{type:"submit",label:"Submit"})],32)]),a(u,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const _t=p(ht,[["render",yt]]),Ct={data(){return{value:"",items:[],code:{basic:`<AutoComplete
    v-model="value"
    :suggestions="items"
    @complete="search"
    :pt="{
        input: { class: 'w-16rem' },
        item: ({ props, state, context }) => ({
            class: context.selected ? 'bg-blue-300' : context.focused ? 'bg-blue-100' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete
            v-model="value"
            :suggestions="items"
            @complete="search"
            :pt="{
                input: { class: 'w-16rem' },
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
            value: '',
            items: []
        };
    },
    methods: {
        search(event) {
            this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <AutoComplete
            v-model="value"
            :suggestions="items"
            @complete="search"
            :pt="{
                input: { class: 'w-16rem' },
                item: ({ props, state, context }) => ({
                    class: context.selected ? 'bg-blue-300' : context.focused ? 'bg-blue-100' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>`}}},methods:{search(o){this.items=[...Array(10).keys()].map(n=>o.query+"-"+n)}}},St={class:"card flex justify-content-center"};function At(o,n,c,r,t,d){const i=v,s=S("AutoComplete"),m=C;return h(),g(b,null,[a(i,y(_(o.$attrs)),null,16),e("div",St,[a(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=u=>t.value=u),suggestions:t.items,onComplete:d.search,pt:{input:{class:"w-16rem"},item:({props:u,state:A,context:k})=>({class:k.selected?"bg-blue-300":k.focused?"bg-blue-100":void 0})}},null,8,["modelValue","suggestions","onComplete","pt"])]),a(m,{code:t.code},null,8,["code"])],64)}const xt=p(Ct,[["render",At]]),wt={},kt=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/autocomplete.jpg"})],-1);function It(o,n){const c=v;return h(),g(b,null,[a(c,y(_(o.$attrs)),{default:f(()=>[e("p",null,x(o.$attrs.description),1)]),_:1},16),kt],64)}const Tt=p(wt,[["render",It]]),$t={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Tt},{id:"pt.doc.autocomplete",label:"AutoComplete PT Options",component:q,data:U("AutoComplete")},{id:"pt.demo",label:"Demo",component:xt}]}}},Mt={class:"doc-main"},Dt=e("div",{class:"doc-intro"},[e("h1",null,"AutoComplete Pass Through")],-1);function Lt(o,n,c,r,t,d){const i=$,s=M;return h(),g(b,null,[e("div",Mt,[Dt,a(i,{docs:t.docs},null,8,["docs"])]),a(s,{docs:t.docs},null,8,["docs"])],64)}const Ft=p($t,[["render",Lt]]),Vt={},Pt=e("p",null,"List of class names used in the styled mode.",-1),qt=G('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-autocomplete</td><td>Container element</td></tr><tr><td>p-autocomplete-panel</td><td>Overlay panel of suggestions.</td></tr><tr><td>p-autocomplete-items</td><td>List container of suggestions.</td></tr><tr><td>p-autocomplete-item</td><td>List item of a suggestion.</td></tr><tr><td>p-autocomplete-token</td><td>Element of a selected item in multiple mode.</td></tr><tr><td>p-autocomplete-token-icon</td><td>Close icon element of a selected item in multiple mode.</td></tr><tr><td>p-autocomplete-token-label</td><td>Label of a selected item in multiple mode.</td></tr><tr><td>p-autocomplete-empty-message</td><td>Container element when there is no suggestion to display.</td></tr><tr><td>p-overlay-open</td><td>Container element when overlay is visible.</td></tr></tbody></table></div>',1);function Gt(o,n){const c=v;return h(),g(b,null,[a(c,y(_(o.$attrs)),{default:f(()=>[Pt]),_:1},16),qt],64)}const Bt=p(Vt,[["render",Gt]]),Nt={data(){return{code1:{basic:`
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    autocomplete: {
        root: ({ props }) => ({
            class: [
                'relative inline-flex',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                },
                { 'w-full': props.multiple }
            ]
        }),
        container: {
            class: [
                'm-0 list-none cursor-text overflow-hidden flex items-center flex-wrap w-full',
                'px-3 py-2 gap-2',
                'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40  transition duration-200 ease-in-out appearance-none rounded-md',
                'focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] hover:border-blue-500 focus:outline-none dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        inputtoken: {
            class: ['py-0.375rem px-0', 'flex-1 inline-flex']
        },
        input: ({ props }) => ({
            class: [
                'm-0',
                ' transition-colors duration-200 appearance-none rounded-lg',
                { 'rounded-tr-none rounded-br-none': props.dropdown },
                {
                    'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] hover:border-blue-500 focus:outline-none':
                        !props.multiple,
                    'font-sans text-base text-gray-700 dark:text-white/80 border-0 outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full': props.multiple
                }
            ]
        }),
        token: {
            class: ['py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center']
        },
        dropdownbutton: {
            root: 'rounded-tl-none rounded-bl-none'
        },
        panel: {
            class: ['bg-white text-gray-700 border-0 rounded-md shadow-lg', 'max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80']
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
                    'bg-blue-500 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected
                }
            ]
        }),
        itemgroup: {
            class: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        },
        transition: TRANSITIONS.overlay
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>`}}}},jt=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ut(o,n,c,r,t,d){const i=D,s=C,m=v;return h(),w(m,y(_(o.$attrs)),{default:f(()=>[e("p",null,[l(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),a(i,{to:"/tailwind"},{default:f(()=>[l("Tailwind Customization")]),_:1}),l(" section for an example. ")]),a(s,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),jt,a(s,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const Kt=p(Nt,[["render",Ut]]),Ot={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Bt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Kt}]}]}}},Rt={class:"doc-main"},Et=e("div",{class:"doc-intro"},[e("h1",null,"AutoComplete Theming")],-1);function Ht(o,n,c,r,t,d){const i=$,s=M;return h(),g(b,null,[e("div",Rt,[Et,a(i,{docs:t.docs},null,8,["docs"])]),a(s,{docs:t.docs},null,8,["docs"])],64)}const zt=p(Ot,[["render",Ht]]),Yt={data(){return{docs:[{id:"import",label:"Import",component:Ne},{id:"basic",label:"Basic",component:ie},{id:"dropdown",label:"Dropdown",component:ge},{id:"objects",label:"Objects",component:et},{id:"template",label:"Template",component:it},{id:"group",label:"Group",component:qe},{id:"forceselection",label:"Force Selection",component:$e},{id:"virtualscroll",label:"Virtual Scroll",component:pt},{id:"multiple",label:"Multiple",component:Je},{id:"floatlabel",label:"Float Label",component:xe},{id:"invalid",label:"Invalid",component:Re},{id:"disabled",label:"Disabled",component:me},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:_t}]},{id:"accessibility",label:"Accessibility",component:oe}],ptComponent:Ft,themingDoc:zt}}};function Jt(o,n,c,r,t,d){const i=B;return h(),w(i,{title:"Vue AutoComplete Component",header:"AutoComplete",description:"AutoComplete is an input component that provides real-time suggestions when being typed.",componentDocs:t.docs,apiDocs:["AutoComplete"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const eo=p(Yt,[["render",Jt]]);export{eo as default};
