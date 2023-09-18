import{_ as d,o as f,e as D,w as n,n as m,g as p,b as e,f as t,h,c as _,a,F as M,p as y,z as x,y as V,j as $,t as I,A as O,H as R,k as W,l as w,T as k,M as P}from"./entry.68beb385.js";import{C as N}from"./CustomerService.9bb688be.js";const U={},E=e("p",null,[t("Configuration is managed by the Locale API imported from "),e("i",null,"primevue/config"),t(".")],-1),q=e("h3",null,"FilterService API",-1),A=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Parameters"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"filter"),e("td",null,[t(" value[]: An array of values to filter"),e("br"),t(" fields[]: An array of properties in the value object"),e("br"),t(" filterValue: Filter value"),e("br"),t(" filterMatchMode: Constraint"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the property values of the given value collection matches the filter.")]),e("tr",null,[e("td",null,"filters"),e("td",null,"-"),e("td",null,"Property to access constraints collection.")]),e("tr",null,[e("td",null,"register"),e("td",null,[t(" name: string "),e("br"),t(" fn: Filter callback ")]),e("td",null,"Registers a new constraint in filters.")])])])],-1);function Y(l,i){const c=h;return f(),D(c,m(p(l.$attrs)),{default:n(()=>[E,q,A]),_:1},16)}const B=d(U,[["render",Y]]),H={},z=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Parameters"),e("th",null,"Description")])]),e("tbody",null,[e("tr",null,[e("td",null,"startsWith"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the value starts with the filter value")]),e("tr",null,[e("td",null,"contains"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the value contains the filter value")]),e("tr",null,[e("td",null,"endsWith"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the value ends with the filter value")]),e("tr",null,[e("td",null,"equals"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the value equals the filter value")]),e("tr",null,[e("td",null,"notEquals"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the value does not equal the filter value")]),e("tr",null,[e("td",null,"in"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter[]: An array of filter values"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the value contains the filter value")]),e("tr",null,[e("td",null,"lt"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the value is less than the filter value")]),e("tr",null,[e("td",null,"lte"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the value is less than or equals to the filter value")]),e("tr",null,[e("td",null,"gt"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the value is greater than the filter value")]),e("tr",null,[e("td",null,"gte"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the value is greater than or equals to the filter value")]),e("tr",null,[e("td",null,"is"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the value equals the filter value, alias to equals")]),e("tr",null,[e("td",null,"isNot"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the value does not equal the filter value, alias to notEquals.")]),e("tr",null,[e("td",null,"before"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the date value is before the filter date.")]),e("tr",null,[e("td",null,"after"),e("td",null,[t(" value: Value to filter"),e("br"),t(" filter: Filter value"),e("br"),t(" filterLocale: Locale to use in filtering ")]),e("td",null,"Whether the date value is after the filter date.")])])])],-1);function K(l,i){const c=h;return f(),D(c,m(p(l.$attrs)),{default:n(()=>[z]),_:1},16)}const j=d(H,[["render",K]]),G={data(){return{code:{basic:`
FilterService.register('isPrimeNumber', (value, filter): boolean => {
    if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
    }

    if (value === undefined || value === null) {
        return false;
    }
    
    return value.toString() === filter.toString();
});

FilterService.filters['isPrimeNumber'](3);                      //true
FilterService.filters['isPrimeNumber'](5);                      //true
FilterService.filters['isPrimeNumber'](568985673);              //false
`}}}},J=e("p",null,"FilterService can be extended by adding new constraints using the register function.",-1);function Q(l,i,c,g,r,b){const s=h,u=y;return f(),_(M,null,[a(s,m(p(l.$attrs)),{default:n(()=>[J]),_:1},16),a(u,{code:r.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const X=d(G,[["render",Q]]),Z={data(){return{code:{basic:"import { FilterService } from 'primevue/api';"}}}};function ee(l,i,c,g,r,b){const s=h,u=y;return f(),_(M,null,[a(s,m(p(l.$attrs)),null,16),a(u,{code:r.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const te=d(Z,[["render",ee]]),L="YOUR FILTER",le={data(){return{customers:null,filters:{name:{value:null,matchMode:L},"country.name":{value:null,matchMode:x.STARTS_WITH}},matchModeOptions:[{label:"Your Equals",value:L},{label:"Starts With",value:x.STARTS_WITH}],loading:!0,code:{basic:`<DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading">
    <template #empty> No customers found. </template>
    <template #loading> Loading customers data. Please wait. </template>
    <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions">
        <template #body="{ data }">
            {{ data.name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \${filterModel.matchMode}\`" />
        </template>
    </Column>
    <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions">
        <template #body="{ data }">
            <img :alt="data.country.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code} mr-2\`" width="18" />
            <span>{{ data.country.name }}</span>
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by country - \${filterModel.matchMode}\`" />
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading">
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \${filterModel.matchMode}\`" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions">
                <template #body="{ data }">
                    <img :alt="data.country.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code} mr-2\`" width="18" />
                    <span>{{ data.country.name }}</span>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by country - \${filterModel.matchMode}\`" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterService } from 'primevue/api';

const YOUR_FILTER = 'YOUR FILTER';

export default {
    data() {
        return {
            customers: null,
            filters: {
                name: { value: null, matchMode: YOUR_FILTER },
                'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH }
            },
            matchModeOptions: [
                { label: 'Your Equals', value: YOUR_FILTER },
                { label: 'Starts With', value: FilterMatchMode.STARTS_WITH }
            ],
            loading: true
        };
    },
    mounted() {
        CustomerService.getCustomersLarge().then((data) => {
            this.customers = data;
            this.loading = false;
        });

        FilterService.register(YOUR_FILTER, (value, filter) => {
            if (filter === undefined || filter === null || filter.trim() === '') {
                return true;
            }

            if (value === undefined || value === null) {
                return false;
            }

            return value.toString() === filter.toString();
        });
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading">
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" :filterMatchModeOptions="matchModeOptions">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by name - \${filterModel.matchMode}\`" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" :filterMatchModeOptions="matchModeOptions">
                <template #body="{ data }">
                    <img :alt="data.country.name" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code} mr-2\`" width="18" />
                    <span>{{ data.country.name }}</span>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" :placeholder="\`Search by country - \${filterModel.matchMode}\`" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterService } from 'primevue/api';


onMounted(() => {
    CustomerService.getCustomersLarge().then((data) => {
        customers.value = data; 
        loading.value = false;
    });

    FilterService.register(YOUR_FILTER.value, (value, filter) => {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value.toString() === filter.toString();
    });
});

const YOUR_FILTER = ref('YOUR FILTER');
const customers = ref();
const filters = ref({
    'name': {value: null, matchMode: YOUR_FILTER.value},
    'country.name': {value: null, matchMode: FilterMatchMode.STARTS_WITH}
});
const matchModeOptions = ref([
    {label: 'Your Equals', value: YOUR_FILTER.value},
    {label: 'Starts With', value: FilterMatchMode.STARTS_WITH}
]);
const loading = ref(true);

<\/script>`}}},mounted(){N.getCustomersLarge().then(l=>{this.customers=l,this.loading=!1}),V.register(L,(l,i)=>i==null||i.trim()===""?!0:l==null?!1:l.toString()===i.toString())}},ae=e("p",null,"A custom equals filter that checks for exact case sensitive value is registered and defined as a match mode of a column filter.",-1),re={class:"card"},oe=["alt"];function ne(l,i,c,g,r,b){const s=h,u=$("InputText"),S=$("Column"),F=$("DataTable"),C=y;return f(),_(M,null,[a(s,m(p(l.$attrs)),{default:n(()=>[ae]),_:1},16),e("div",re,[a(F,{filters:r.filters,"onUpdate:filters":i[0]||(i[0]=o=>r.filters=o),value:r.customers,paginator:"",rows:10,dataKey:"id",filterDisplay:"row",loading:r.loading},{empty:n(()=>[t(" No customers found. ")]),loading:n(()=>[t(" Loading customers data. Please wait. ")]),default:n(()=>[a(S,{field:"name",header:"Name",filterMatchModeOptions:r.matchModeOptions},{body:n(({data:o})=>[t(I(o.name),1)]),filter:n(({filterModel:o,filterCallback:T})=>[a(u,{modelValue:o.value,"onUpdate:modelValue":v=>o.value=v,type:"text",onInput:v=>T(),class:"p-column-filter",placeholder:`Search by name - ${o.matchMode}`},null,8,["modelValue","onUpdate:modelValue","onInput","placeholder"])]),_:1},8,["filterMatchModeOptions"]),a(S,{header:"Country",filterField:"country.name",filterMatchModeOptions:r.matchModeOptions},{body:n(({data:o})=>[e("img",{alt:o.country.name,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:O(`flag flag-${o.country.code} mr-2`),width:"18"},null,10,oe),e("span",null,I(o.country.name),1)]),filter:n(({filterModel:o,filterCallback:T})=>[a(u,{modelValue:o.value,"onUpdate:modelValue":v=>o.value=v,type:"text",onInput:v=>T(),class:"p-column-filter",placeholder:`Search by country - ${o.matchMode}`},null,8,["modelValue","onUpdate:modelValue","onInput","placeholder"])]),_:1},8,["filterMatchModeOptions"])]),_:1},8,["filters","value","loading"])]),a(C,{code:r.code,service:["CustomerService"]},null,8,["code"])],64)}const ie=d(le,[["render",ne]]),ue={data(){return{code:{basic:`
const value = 'PrimeVue';

FilterService.filters.equals(value, 'Vue');                            //false
FilterService.filters.equals(value, 8);                                //false
FilterService.filters.equals(value, new Date());                       //false
FilterService.filters.contains(value, 'Vue');                          //true
FilterService.filters.startsWith(value, 'Vue');                        //false
FilterService.filters.endsWith(value, 'Vue');                          //true
FilterService.filters.lt(10, 20);                                      //true
FilterService.filters.gt(50, 20);                                      //true
FilterService.filters.in(value, ['PrimeFaces', 'PrimeVue']);           //true   `}}}},se=e("p",null,[t("Filters are accessed with "),e("i",null,"FilterService.filters"),t(".")],-1);function ce(l,i,c,g,r,b){const s=h,u=y;return f(),_(M,null,[a(s,m(p(l.$attrs)),{default:n(()=>[se]),_:1},16),a(u,{code:r.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const de=d(ue,[["render",ce]]),fe={data(){return{docs:[{id:"import",label:"Import",component:te},{id:"usage",label:"Usage",component:de},{id:"built-in-constraint",label:"Built-in Constraint",component:j},{id:"custom-constraint",label:"Custom Constraint",component:X},{id:"api",label:"API",component:B},{id:"table-integration",label:"Table Integration",component:ie}]}}},me={class:"doc"},pe={class:"doc-main"},he=e("div",{class:"doc-intro"},[e("h1",null,"FilterService"),e("p",null,"FilterService is a helper utility to filter collections against constraints.")],-1);function ve(l,i,c,g,r,b){const s=k,u=P,S=R,F=W,C=w;return f(),_("div",null,[a(S,null,{default:n(()=>[a(s,null,{default:n(()=>[t("Vue Filter Service")]),_:1}),a(u,{name:"description",content:"PrimeVue Filter Service is a helper utility to filter."})]),_:1}),e("div",me,[e("div",pe,[he,a(F,{docs:r.docs},null,8,["docs"])]),a(C,{docs:r.docs},null,8,["docs"])])])}const be=d(fe,[["render",ve]]);export{be as default};
