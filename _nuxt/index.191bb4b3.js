import{_ as S,o as m,e as T,w as C,a as n,m as w,b as e,f as o,p as U,h as f,j as _,c as u,n as A,g as y,F as b,A as D,E as g,t as O,B as $,D as M,k as x,l as L,v as F,x as Q}from"./entry.68beb385.js";import{u as N,a as W}from"./vee-validate.esm.3b430014.js";import{g as G}from"./PTHelper.11558b27.js";import{_ as B}from"./PrimeVueNuxtLink.f51d0c80.js";const k={data(){return{code:{basic:`<span id="dd1"></span>Options</span>
<CascadeSelect aria-labelledby="dd1" />

<CascadeSelect aria-label="Options" />`}}}},R=e("h3",null,"Screen Reader",-1),H=e("p",null,[o(" Value to describe the component can either be provided with "),e("i",null,"aria-labelledby"),o(" or "),e("i",null,"aria-label"),o(" props. The cascadeselect element has a "),e("i",null,"combobox"),o(" role in addition to "),e("i",null,"aria-haspopup"),o(" and "),e("i",null,"aria-expanded"),o(" attributes. The relation between the combobox and the popup is created with "),e("i",null,"aria-controls"),o(" that refers to the id of the popup. ")],-1),I=e("p",null,[o(" The popup list has an id that refers to the "),e("i",null,"aria-controls"),o(" attribute of the "),e("i",null,"combobox"),o(" element and uses "),e("i",null,"tree"),o(" as the role. Each list item has a "),e("i",null,"treeitem"),o(" role along with "),e("i",null,"aria-label"),o(", "),e("i",null,"aria-selected"),o(" and "),e("i",null,"aria-expanded"),o(" attributes. The container element of a treenode has the "),e("i",null,"group"),o(" role. The "),e("i",null,"aria-setsize"),o(", "),e("i",null,"aria-posinset"),o(" and "),e("i",null,"aria-level"),o(" attributes are calculated implicitly and added to each treeitem. ")],-1),J=e("h3",null,"Closed State Keyboard Support",-1),V=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the cascadeselect element.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then last option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"any printable character")]),e("td",null,"Opens the popup and moves focus to the option whose label starts with the characters being typed, if there is none then first option receives the focus.")])])])],-1),P=e("h3",null,"Popup Keyboard Support",-1),j=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Hides the popup and moves focus to the next tabbable element. If there is none, the focusable option is selected and the overlay is closed then moves focus to next element in page.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),o(" + "),e("i",null,"tab")]),e("td",null,"Hides the popup and moves focus to the previous tabbable element.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Selects the focused option and closes the popup.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Selects the focused option and closes the popup.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup, moves focus to the cascadeselect element.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next option.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous option.")]),e("tr",null,[e("td",null,[e("i",null,"alt"),o(" + "),e("i",null,"up arrow")]),e("td",null,"Selects the focused option and closes the popup, then moves focus to the cascadeselect element.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"If option is closed, opens the option otherwise moves focus to the first child option.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"If option is open, closes the option otherwise moves focus to the parent option.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves input cursor at the end, if not then moves focus to the first option.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves input cursor at the beginning, if not then moves focus to the last option.")]),e("tr",null,[e("td",null,[e("i",null,"any printable character")]),e("td",null,"Moves focus to the option whose label starts with the characters being typed.")])])])],-1);function E(a,c,d,l,t,h){const i=U,s=f;return m(),T(s,w({id:"accessibility",label:"Accessibility"},a.$attrs),{default:C(()=>[R,H,I,n(i,w({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},a.$attrs),null,16,["code"]),J,V,P,j]),_:1},16)}const Y=S(k,[["render",E]]),z={data(){return{selectedCity:null,countries:[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}],code:{basic:`<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
    :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />`,options:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            countries: [
                {
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        {
                            name: 'New South Wales',
                            cities: [
                                { cname: 'Sydney', code: 'A-SY' },
                                { cname: 'Newcastle', code: 'A-NE' },
                                { cname: 'Wollongong', code: 'A-WO' }
                            ]
                        },
                        {
                            name: 'Queensland',
                            cities: [
                                { cname: 'Brisbane', code: 'A-BR' },
                                { cname: 'Townsville', code: 'A-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Canada',
                    code: 'CA',
                    states: [
                        {
                            name: 'Quebec',
                            cities: [
                                { cname: 'Montreal', code: 'C-MO' },
                                { cname: 'Quebec City', code: 'C-QU' }
                            ]
                        },
                        {
                            name: 'Ontario',
                            cities: [
                                { cname: 'Ottawa', code: 'C-OT' },
                                { cname: 'Toronto', code: 'C-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'United States',
                    code: 'US',
                    states: [
                        {
                            name: 'California',
                            cities: [
                                { cname: 'Los Angeles', code: 'US-LA' },
                                { cname: 'San Diego', code: 'US-SD' },
                                { cname: 'San Francisco', code: 'US-SF' }
                            ]
                        },
                        {
                            name: 'Florida',
                            cities: [
                                { cname: 'Jacksonville', code: 'US-JA' },
                                { cname: 'Miami', code: 'US-MI' },
                                { cname: 'Tampa', code: 'US-TA' },
                                { cname: 'Orlando', code: 'US-OR' }
                            ]
                        },
                        {
                            name: 'Texas',
                            cities: [
                                { cname: 'Austin', code: 'US-AU' },
                                { cname: 'Dallas', code: 'US-DA' },
                                { cname: 'Houston', code: 'US-HO' }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>`}}}},q=e("p",null,[o(" CascadeSelect is used as a controlled component with "),e("i",null,"v-model"),o(" property along with an "),e("i",null,"options"),o(" collection. To define the label of a group "),e("i",null,"optionGroupLabel"),o(" property is needed and also "),e("i",null,"optionGroupChildren"),o(" is required to define the property that refers to the children of a group. Note that order of the "),e("i",null,"optionGroupChildren"),o(" matters as it should correspond to the data hierarchy. ")],-1),K={class:"card flex justify-content-center"};function X(a,c,d,l,t,h){const i=f,s=_("CascadeSelect"),p=U;return m(),u(b,null,[n(i,A(y(a.$attrs)),{default:C(()=>[q]),_:1},16),e("div",K,[n(s,{modelValue:t.selectedCity,"onUpdate:modelValue":c[0]||(c[0]=r=>t.selectedCity=r),options:t.countries,optionLabel:"cname",optionGroupLabel:"name",optionGroupChildren:["states","cities"],style:{"min-width":"14rem"},placeholder:"Select a City"},null,8,["modelValue","options"])]),n(p,{code:t.code},null,8,["code"])],64)}const Z=S(z,[["render",X]]),ee={data(){return{code:{basic:'<CascadeSelect disabled placeholder="Disabled" style="min-width: 14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect disabled placeholder="Disabled" style="min-width: 14rem" />
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect disabled placeholder="Disabled" style="min-width: 14rem" />
    </div>
</template>

<script setup>

<\/script>`}}}},te=e("p",null,[o("When "),e("i",null,"disabled"),o(" is present, the element cannot be edited and focused.")],-1),oe={class:"card flex justify-content-center"};function ne(a,c,d,l,t,h){const i=f,s=_("CascadeSelect"),p=U;return m(),u(b,null,[n(i,A(y(a.$attrs)),{default:C(()=>[te]),_:1},16),e("div",oe,[n(s,{disabled:"",placeholder:"Disabled",style:{"min-width":"14rem"}})]),n(p,{code:t.code},null,8,["code"])],64)}const ae=S(ee,[["render",ne]]),ce={data(){return{selectedCity:null,countries:[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}],code:{basic:`<span class="p-float-label">
    <CascadeSelect v-model="selectedCity" inputId="cs-city" :options="countries" optionLabel="cname" optionGroupLabel="name"
        :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />
    <label for="cs-city">City</label>
</span>`,options:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <CascadeSelect v-model="selectedCity" inputId="cs-city" :options="countries" optionLabel="cname" optionGroupLabel="name"
                :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />
            <label for="cs-city">City</label>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            countries: [
                {
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        {
                            name: 'New South Wales',
                            cities: [
                                { cname: 'Sydney', code: 'A-SY' },
                                { cname: 'Newcastle', code: 'A-NE' },
                                { cname: 'Wollongong', code: 'A-WO' }
                            ]
                        },
                        {
                            name: 'Queensland',
                            cities: [
                                { cname: 'Brisbane', code: 'A-BR' },
                                { cname: 'Townsville', code: 'A-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Canada',
                    code: 'CA',
                    states: [
                        {
                            name: 'Quebec',
                            cities: [
                                { cname: 'Montreal', code: 'C-MO' },
                                { cname: 'Quebec City', code: 'C-QU' }
                            ]
                        },
                        {
                            name: 'Ontario',
                            cities: [
                                { cname: 'Ottawa', code: 'C-OT' },
                                { cname: 'Toronto', code: 'C-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'United States',
                    code: 'US',
                    states: [
                        {
                            name: 'California',
                            cities: [
                                { cname: 'Los Angeles', code: 'US-LA' },
                                { cname: 'San Diego', code: 'US-SD' },
                                { cname: 'San Francisco', code: 'US-SF' }
                            ]
                        },
                        {
                            name: 'Florida',
                            cities: [
                                { cname: 'Jacksonville', code: 'US-JA' },
                                { cname: 'Miami', code: 'US-MI' },
                                { cname: 'Tampa', code: 'US-TA' },
                                { cname: 'Orlando', code: 'US-OR' }
                            ]
                        },
                        {
                            name: 'Texas',
                            cities: [
                                { cname: 'Austin', code: 'US-AU' },
                                { cname: 'Dallas', code: 'US-DA' },
                                { cname: 'Houston', code: 'US-HO' }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <CascadeSelect v-model="selectedCity" inputId="cs-city" :options="countries" optionLabel="cname" optionGroupLabel="name"
                :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />
            <label for="cs-city">City</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>`}}}},se=e("p",null,"A floating label appears on top of the input field when focused.",-1),ie={class:"card flex justify-content-center"},le={class:"p-float-label"},de=e("label",{for:"cs-city"},"City",-1);function re(a,c,d,l,t,h){const i=f,s=_("CascadeSelect"),p=U;return m(),u(b,null,[n(i,A(y(a.$attrs)),{default:C(()=>[se]),_:1},16),e("div",ie,[e("span",le,[n(s,{modelValue:t.selectedCity,"onUpdate:modelValue":c[0]||(c[0]=r=>t.selectedCity=r),inputId:"cs-city",options:t.countries,optionLabel:"cname",optionGroupLabel:"name",optionGroupChildren:["states","cities"],style:{"min-width":"14rem"},placeholder:"Select a City"},null,8,["modelValue","options"]),de])]),n(p,{code:t.code},null,8,["code"])],64)}const me=S(ce,[["render",re]]),pe={data(){return{code:{basic:"import CascadeSelect from 'primevue/cascadeselect';"}}}};function ue(a,c,d,l,t,h){const i=f,s=U;return m(),u(b,null,[n(i,A(y(a.$attrs)),null,16),n(s,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Se=S(pe,[["render",ue]]),he={data(){return{selectedCity:null,countries:[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}],code:{basic:`<CascadeSelect v-model="selectedCity" class="p-invalid" :options="countries" optionLabel="cname" optionGroupLabel="name"
    :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />`,options:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect v-model="selectedCity" class="p-invalid" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            countries: [
                {
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        {
                            name: 'New South Wales',
                            cities: [
                                { cname: 'Sydney', code: 'A-SY' },
                                { cname: 'Newcastle', code: 'A-NE' },
                                { cname: 'Wollongong', code: 'A-WO' }
                            ]
                        },
                        {
                            name: 'Queensland',
                            cities: [
                                { cname: 'Brisbane', code: 'A-BR' },
                                { cname: 'Townsville', code: 'A-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Canada',
                    code: 'CA',
                    states: [
                        {
                            name: 'Quebec',
                            cities: [
                                { cname: 'Montreal', code: 'C-MO' },
                                { cname: 'Quebec City', code: 'C-QU' }
                            ]
                        },
                        {
                            name: 'Ontario',
                            cities: [
                                { cname: 'Ottawa', code: 'C-OT' },
                                { cname: 'Toronto', code: 'C-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'United States',
                    code: 'US',
                    states: [
                        {
                            name: 'California',
                            cities: [
                                { cname: 'Los Angeles', code: 'US-LA' },
                                { cname: 'San Diego', code: 'US-SD' },
                                { cname: 'San Francisco', code: 'US-SF' }
                            ]
                        },
                        {
                            name: 'Florida',
                            cities: [
                                { cname: 'Jacksonville', code: 'US-JA' },
                                { cname: 'Miami', code: 'US-MI' },
                                { cname: 'Tampa', code: 'US-TA' },
                                { cname: 'Orlando', code: 'US-OR' }
                            ]
                        },
                        {
                            name: 'Texas',
                            cities: [
                                { cname: 'Austin', code: 'US-AU' },
                                { cname: 'Dallas', code: 'US-DA' },
                                { cname: 'Houston', code: 'US-HO' }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect v-model="selectedCity" class="p-invalid" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>`}}}},Ce=e("p",null,[o("Invalid state style is added using the "),e("i",null,"p-invalid"),o(" class to indicate a failed validation.")],-1),fe={class:"card flex justify-content-center"};function be(a,c,d,l,t,h){const i=f,s=_("CascadeSelect"),p=U;return m(),u(b,null,[n(i,A(y(a.$attrs)),{default:C(()=>[Ce]),_:1},16),e("div",fe,[n(s,{modelValue:t.selectedCity,"onUpdate:modelValue":c[0]||(c[0]=r=>t.selectedCity=r),class:"p-invalid",options:t.countries,optionLabel:"cname",optionGroupLabel:"name",optionGroupChildren:["states","cities"],style:{"min-width":"14rem"},placeholder:"Select a City"},null,8,["modelValue","options"])]),n(p,{code:t.code},null,8,["code"])],64)}const Ae=S(he,[["render",be]]),ye={data(){return{code:{basic:'<CascadeSelect loading placeholder="Loading..."  style="min-width: 14rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect loading placeholder="Loading..."  style="min-width: 14rem" />
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect loading placeholder="Loading..."  style="min-width: 14rem" />
    </div>
</template>

<script setup>

<\/script>`}}}},Ue=e("p",null,[o("Loading state can be used "),e("i",null,"loading"),o(" property.")],-1),_e={class:"card flex justify-content-center"};function ve(a,c,d,l,t,h){const i=f,s=_("CascadeSelect"),p=U;return m(),u(b,null,[n(i,A(y(a.$attrs)),{default:C(()=>[Ue]),_:1},16),e("div",_e,[n(s,{loading:"",placeholder:"Loading...",style:{"min-width":"14rem"}})]),n(p,{code:t.code},null,8,["code"])],64)}const ge=S(ye,[["render",ve]]),Te={data(){return{selectedCity:null,countries:[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}],code:{basic:`<CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
    :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City">
    <template #option="slotProps">
        <div class="flex align-items-center">
            <img v-if="slotProps.option.states" :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px"  />
            <i v-if="slotProps.option.cities" class="pi pi-compass mr-2"></i>
            <i v-if="slotProps.option.cname" class="pi pi-map-marker mr-2"></i>
            <span>{{ slotProps.option.cname || slotProps.option.name }}</span>
        </div>
    </template>
</CascadeSelect>`,options:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City">
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img v-if="slotProps.option.states" :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px"  />
                    <i v-if="slotProps.option.cities" class="pi pi-compass mr-2"></i>
                    <i v-if="slotProps.option.cname" class="pi pi-map-marker mr-2"></i>
                    <span>{{ slotProps.option.cname || slotProps.option.name }}</span>
                </div>
            </template>
        </CascadeSelect>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            countries: [
                {
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        {
                            name: 'New South Wales',
                            cities: [
                                { cname: 'Sydney', code: 'A-SY' },
                                { cname: 'Newcastle', code: 'A-NE' },
                                { cname: 'Wollongong', code: 'A-WO' }
                            ]
                        },
                        {
                            name: 'Queensland',
                            cities: [
                                { cname: 'Brisbane', code: 'A-BR' },
                                { cname: 'Townsville', code: 'A-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Canada',
                    code: 'CA',
                    states: [
                        {
                            name: 'Quebec',
                            cities: [
                                { cname: 'Montreal', code: 'C-MO' },
                                { cname: 'Quebec City', code: 'C-QU' }
                            ]
                        },
                        {
                            name: 'Ontario',
                            cities: [
                                { cname: 'Ottawa', code: 'C-OT' },
                                { cname: 'Toronto', code: 'C-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'United States',
                    code: 'US',
                    states: [
                        {
                            name: 'California',
                            cities: [
                                { cname: 'Los Angeles', code: 'US-LA' },
                                { cname: 'San Diego', code: 'US-SD' },
                                { cname: 'San Francisco', code: 'US-SF' }
                            ]
                        },
                        {
                            name: 'Florida',
                            cities: [
                                { cname: 'Jacksonville', code: 'US-JA' },
                                { cname: 'Miami', code: 'US-MI' },
                                { cname: 'Tampa', code: 'US-TA' },
                                { cname: 'Orlando', code: 'US-OR' }
                            ]
                        },
                        {
                            name: 'Texas',
                            cities: [
                                { cname: 'Austin', code: 'US-AU' },
                                { cname: 'Dallas', code: 'US-DA' },
                                { cname: 'Houston', code: 'US-HO' }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City">
            <template #option="slotProps">
                <div class="flex align-items-center">
                    <img v-if="slotProps.option.states" :alt="slotProps.option.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.option.code.toLowerCase()} mr-2\`" style="width: 18px"  />
                    <i v-if="slotProps.option.cities" class="pi pi-compass mr-2"></i>
                    <i v-if="slotProps.option.cname" class="pi pi-map-marker mr-2"></i>
                    <span>{{ slotProps.option.cname || slotProps.option.name }}</span>
                </div>
            </template>
        </CascadeSelect>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>`}}}},Oe=e("p",null,[o(" CascadeSelect is used as a controlled component with "),e("i",null,"v-model"),o(" property along with an "),e("i",null,"options"),o(" collection. To define the label of a group "),e("i",null,"optionGroupLabel"),o(" property is needed and also "),e("i",null,"optionGroupChildren"),o(" is required to define the property that refers to the children of a group. Note that order of the "),e("i",null,"optionGroupChildren"),o(" matters as it should correspond to the data hierarchy. ")],-1),we={class:"card flex justify-content-center"},De={class:"flex align-items-center"},xe=["alt"],Le={key:1,class:"pi pi-compass mr-2"},$e={key:2,class:"pi pi-map-marker mr-2"};function Me(a,c,d,l,t,h){const i=f,s=_("CascadeSelect"),p=U;return m(),u(b,null,[n(i,A(y(a.$attrs)),{default:C(()=>[Oe]),_:1},16),e("div",we,[n(s,{modelValue:t.selectedCity,"onUpdate:modelValue":c[0]||(c[0]=r=>t.selectedCity=r),options:t.countries,optionLabel:"cname",optionGroupLabel:"name",optionGroupChildren:["states","cities"],style:{"min-width":"14rem"},placeholder:"Select a City"},{option:C(r=>[e("div",De,[r.option.states?(m(),u("img",{key:0,alt:r.option.name,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:D(`flag flag-${r.option.code.toLowerCase()} mr-2`),style:{width:"18px"}},null,10,xe)):g("",!0),r.option.cities?(m(),u("i",Le)):g("",!0),r.option.cname?(m(),u("i",$e)):g("",!0),e("span",null,O(r.option.cname||r.option.name),1)])]),_:1},8,["modelValue","options"])]),n(p,{code:t.code},null,8,["code"])],64)}const Fe=S(Te,[["render",Me]]),Qe={setup(){const{handleSubmit:a,resetForm:c}=N(),{value:d,errorMessage:l}=W("value",h),t=$();function h(s){return s?!0:"City is required."}const i=a(s=>{s.value&&(t.add({severity:"info",summary:"Form Submitted",detail:s.value.cname,life:3e3}),c())});return{value:d,handleSubmit:a,onSubmit:i,errorMessage:l}},data(){return{selectedCity:null,countries:[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}],code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <CascadeSelect v-model="value" :class="{ 'p-invalid': errorMessage }" :options="countries" optionLabel="cname"
                optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" aria-describedby="cc-error" />
            <small class="p-error" id="cc-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <CascadeSelect v-model="value" :class="{ 'p-invalid': errorMessage }" :options="countries" optionLabel="cname"
                optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" aria-describedby="cc-error" />
            <small class="p-error" id="cc-error">{{ errorMessage || '&nbsp;' }}</small>
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
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.cname, life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            selectedCity: null,
            countries: [
                {
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        {
                            name: 'New South Wales',
                            cities: [
                                { cname: 'Sydney', code: 'A-SY' },
                                { cname: 'Newcastle', code: 'A-NE' },
                                { cname: 'Wollongong', code: 'A-WO' }
                            ]
                        },
                        {
                            name: 'Queensland',
                            cities: [
                                { cname: 'Brisbane', code: 'A-BR' },
                                { cname: 'Townsville', code: 'A-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Canada',
                    code: 'CA',
                    states: [
                        {
                            name: 'Quebec',
                            cities: [
                                { cname: 'Montreal', code: 'C-MO' },
                                { cname: 'Quebec City', code: 'C-QU' }
                            ]
                        },
                        {
                            name: 'Ontario',
                            cities: [
                                { cname: 'Ottawa', code: 'C-OT' },
                                { cname: 'Toronto', code: 'C-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'United States',
                    code: 'US',
                    states: [
                        {
                            name: 'California',
                            cities: [
                                { cname: 'Los Angeles', code: 'US-LA' },
                                { cname: 'San Diego', code: 'US-SD' },
                                { cname: 'San Francisco', code: 'US-SF' }
                            ]
                        },
                        {
                            name: 'Florida',
                            cities: [
                                { cname: 'Jacksonville', code: 'US-JA' },
                                { cname: 'Miami', code: 'US-MI' },
                                { cname: 'Tampa', code: 'US-TA' },
                                { cname: 'Orlando', code: 'US-OR' }
                            ]
                        },
                        {
                            name: 'Texas',
                            cities: [
                                { cname: 'Austin', code: 'US-AU' },
                                { cname: 'Dallas', code: 'US-DA' },
                                { cname: 'Houston', code: 'US-HO' }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <CascadeSelect v-model="value" :class="{ 'p-invalid': errorMessage }" :options="countries" optionLabel="cname"
                optionGroupLabel="name" :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" aria-describedby="cc-error" />
            <small class="p-error" id="cc-error">{{ errorMessage || '&nbsp;' }}</small>
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
const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);

function validateField(value) {
    if (!value) {
        return 'City is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.cname, life: 3000 });
        resetForm();
    }
});
<\/script>
`}}}},Ne=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),o(" is a popular library for handling forms in Vue.")],-1),We={class:"card flex justify-content-center"},Ge={id:"cc-error",class:"p-error"};function Be(a,c,d,l,t,h){const i=f,s=_("CascadeSelect"),p=_("Button"),r=U;return m(),u(b,null,[n(i,A(y(a.$attrs)),{default:C(()=>[Ne]),_:1},16),e("div",We,[e("form",{onSubmit:c[1]||(c[1]=(...v)=>l.onSubmit&&l.onSubmit(...v)),class:"flex flex-column gap-2"},[n(s,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=v=>l.value=v),class:D({"p-invalid":l.errorMessage}),options:t.countries,optionLabel:"cname",optionGroupLabel:"name",optionGroupChildren:["states","cities"],style:{"min-width":"14rem"},placeholder:"Select a City","aria-describedby":"cc-error"},null,8,["modelValue","class","options"]),e("small",Ge,O(l.errorMessage||" "),1),n(p,{type:"submit",label:"Submit"})],32)]),n(r,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const ke=S(Qe,[["render",Be]]),Re={data(){return{selectedCity:null,countries:[{name:"Australia",code:"AU",states:[{name:"New South Wales",cities:[{cname:"Sydney",code:"A-SY"},{cname:"Newcastle",code:"A-NE"},{cname:"Wollongong",code:"A-WO"}]},{name:"Queensland",cities:[{cname:"Brisbane",code:"A-BR"},{cname:"Townsville",code:"A-TO"}]}]},{name:"Canada",code:"CA",states:[{name:"Quebec",cities:[{cname:"Montreal",code:"C-MO"},{cname:"Quebec City",code:"C-QU"}]},{name:"Ontario",cities:[{cname:"Ottawa",code:"C-OT"},{cname:"Toronto",code:"C-TO"}]}]},{name:"United States",code:"US",states:[{name:"California",cities:[{cname:"Los Angeles",code:"US-LA"},{cname:"San Diego",code:"US-SD"},{cname:"San Francisco",code:"US-SF"}]},{name:"Florida",cities:[{cname:"Jacksonville",code:"US-JA"},{cname:"Miami",code:"US-MI"},{cname:"Tampa",code:"US-TA"},{cname:"Orlando",code:"US-OR"}]},{name:"Texas",cities:[{cname:"Austin",code:"US-AU"},{cname:"Dallas",code:"US-DA"},{cname:"Houston",code:"US-HO"}]}]}],code:{basic:`<CascadeSelect
    v-model="selectedCity"
    :options="countries"
    optionLabel="cname"
    optionGroupLabel="name"
    :optionGroupChildren="['states', 'cities']"
    placeholder="Select a City"
    :pt="{
        root: { style: { minWidth: '14rem' } }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect
            v-model="selectedCity"
            :options="countries"
            optionLabel="cname"
            optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']"
            placeholder="Select a City"
            :pt="{
                root: { style: { minWidth: '14rem' } }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedCity: null,
            countries: [
                {
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        {
                            name: 'New South Wales',
                            cities: [
                                { cname: 'Sydney', code: 'A-SY' },
                                { cname: 'Newcastle', code: 'A-NE' },
                                { cname: 'Wollongong', code: 'A-WO' }
                            ]
                        },
                        {
                            name: 'Queensland',
                            cities: [
                                { cname: 'Brisbane', code: 'A-BR' },
                                { cname: 'Townsville', code: 'A-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Canada',
                    code: 'CA',
                    states: [
                        {
                            name: 'Quebec',
                            cities: [
                                { cname: 'Montreal', code: 'C-MO' },
                                { cname: 'Quebec City', code: 'C-QU' }
                            ]
                        },
                        {
                            name: 'Ontario',
                            cities: [
                                { cname: 'Ottawa', code: 'C-OT' },
                                { cname: 'Toronto', code: 'C-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'United States',
                    code: 'US',
                    states: [
                        {
                            name: 'California',
                            cities: [
                                { cname: 'Los Angeles', code: 'US-LA' },
                                { cname: 'San Diego', code: 'US-SD' },
                                { cname: 'San Francisco', code: 'US-SF' }
                            ]
                        },
                        {
                            name: 'Florida',
                            cities: [
                                { cname: 'Jacksonville', code: 'US-JA' },
                                { cname: 'Miami', code: 'US-MI' },
                                { cname: 'Tampa', code: 'US-TA' },
                                { cname: 'Orlando', code: 'US-OR' }
                            ]
                        },
                        {
                            name: 'Texas',
                            cities: [
                                { cname: 'Austin', code: 'US-AU' },
                                { cname: 'Dallas', code: 'US-DA' },
                                { cname: 'Houston', code: 'US-HO' }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect
            v-model="selectedCity"
            :options="countries"
            optionLabel="cname"
            optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']"
            placeholder="Select a City"
            :pt="{
                root: { style: { minWidth: '14rem' } }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>`}}}},He={class:"card flex justify-content-center"};function Ie(a,c,d,l,t,h){const i=f,s=_("CascadeSelect"),p=U;return m(),u(b,null,[n(i,A(y(a.$attrs)),null,16),e("div",He,[n(s,{modelValue:t.selectedCity,"onUpdate:modelValue":c[0]||(c[0]=r=>t.selectedCity=r),options:t.countries,optionLabel:"cname",optionGroupLabel:"name",optionGroupChildren:["states","cities"],placeholder:"Select a City",pt:{root:{style:{minWidth:"14rem"}}}},null,8,["modelValue","options"])]),n(p,{code:t.code},null,8,["code"])],64)}const Je=S(Re,[["render",Ie]]),Ve={},Pe=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/cascadeselect.jpg"})],-1);function je(a,c){const d=f;return m(),u(b,null,[n(d,A(y(a.$attrs)),{default:C(()=>[e("p",null,O(a.$attrs.description),1)]),_:1},16),Pe],64)}const Ee=S(Ve,[["render",je]]),Ye={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ee},{id:"pt.doc.cascadeselect",label:"CascadeSelect PT Options",component:M,data:G("CascadeSelect")},{id:"pt.demo",label:"Demo",component:Je}]}}},ze={class:"doc-main"},qe=e("div",{class:"doc-intro"},[e("h1",null,"CascadeSelect Pass Through")],-1);function Ke(a,c,d,l,t,h){const i=x,s=L;return m(),u(b,null,[e("div",ze,[qe,n(i,{docs:t.docs},null,8,["docs"])]),n(s,{docs:t.docs},null,8,["docs"])],64)}const Xe=S(Ye,[["render",Ke]]),Ze={},et=e("p",null,"List of class names used in the styled mode.",-1),tt=F('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-cascadeselect</td><td>Container element.</td></tr><tr><td>p-cascadeselect-label</td><td>Element to display label of selected option.</td></tr><tr><td>p-cascadeselect-trigger</td><td>Icon element.</td></tr><tr><td>p-cascadeselect-panel</td><td>Icon element.</td></tr><tr><td>p-cascadeselect-items-wrapper</td><td>Wrapper element of items list.</td></tr><tr><td>p-cascadeselect-items</td><td>List element of items.</td></tr><tr><td>p-cascadeselect-item</td><td>An item in the list.</td></tr><tr><td>p-overlay-open</td><td>Container element when overlay is visible.</td></tr></tbody></table></div>',1);function ot(a,c){const d=f;return m(),u(b,null,[n(d,A(y(a.$attrs)),{default:C(()=>[et]),_:1},16),tt],64)}const nt=S(Ze,[["render",ot]]),at={data(){return{code1:{basic:`
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    cascadeselect: {
        root: ({ props }) => ({
            class: [
                'inline-flex cursor-pointer select-none relative',
                'bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition duration-200 ease-in-out rounded-lg',
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        label: {
            class: ['block whitespace-nowrap overflow-hidden flex flex-1 w-1 text-overflow-ellipsis cursor-pointer', 'bg-transparent border-0 p-3 text-gray-700 dark:text-white/80', 'appearance-none rounded-md']
        },
        dropdownbutton: {
            class: ['flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/80 w-[3rem] rounded-tr-6 rounded-br-6']
        },
        panel: 'absolute py-3 bg-white dark:bg-gray-900 border-0 shadow-md',
        list: 'm-0 sm:p-0 list-none',
        item: {
            class: [
                'cursor-pointer font-normal whitespace-nowrap',
                'm-0 border-0 bg-transparent transition-shadow rounded-none',
                'text-gray-700 dark:text-white/80 hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80'
            ]
        },
        content: {
            class: ['flex items-center overflow-hidden relative', 'py-3 px-5']
        },
        groupicon: 'ml-auto',
        sublist: {
            class: ['block absolute left-full top-0', 'min-w-full z-10', 'py-3 bg-white dark:bg-gray-900 border-0 shadow-md']
        },
        transition: TRANSITIONS.overlay
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-content-center">
        <CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name"
            :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
<\/script>`}}}},ct=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function st(a,c,d,l,t,h){const i=B,s=U,p=f;return m(),T(p,A(y(a.$attrs)),{default:C(()=>[e("p",null,[o(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(i,{to:"/tailwind"},{default:C(()=>[o("Tailwind Customization")]),_:1}),o(" section for an example. ")]),n(s,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),ct,n(s,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const it=S(at,[["render",st]]),lt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:nt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:it}]}]}}},dt={class:"doc-main"},rt=e("div",{class:"doc-intro"},[e("h1",null,"CascadeSelect Theming")],-1);function mt(a,c,d,l,t,h){const i=x,s=L;return m(),u(b,null,[e("div",dt,[rt,n(i,{docs:t.docs},null,8,["docs"])]),n(s,{docs:t.docs},null,8,["docs"])],64)}const pt=S(lt,[["render",mt]]),ut={data(){return{docs:[{id:"import",label:"Import",component:Se},{id:"basic",label:"Basic",component:Z},{id:"template",label:"Template",component:Fe},{id:"loadingstate",label:"Loading State",component:ge},{id:"floatlabel",label:"Float Label",component:me},{id:"invalid",label:"Invalid",component:Ae},{id:"disabled",label:"Disabled",component:ae},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:ke}]},{id:"accessibility",label:"Accessibility",component:Y}],ptComponent:Xe,themingDoc:pt}}};function St(a,c,d,l,t,h){const i=Q;return m(),T(i,{title:"Vue CascadeSelect Component",header:"CascadeSelect",description:"CascadeSelect is a form component to select a value from a nested structure of options.",componentDocs:t.docs,apiDocs:["CascadeSelect"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const At=S(ut,[["render",St]]);export{At as default};
