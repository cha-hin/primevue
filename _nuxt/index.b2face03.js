import{_ as x,o as h,e as D,w as n,b as e,f as l,a as t,m as j,C as L,h as y,j as c,c as _,n as O,g as T,t as m,F as S,p as $,D as C,k as B,l as F,v as R,x as U}from"./entry.68beb385.js";import{_ as k}from"./PrimeVueNuxtLink.f51d0c80.js";import{P as V}from"./ProductService.ed9696ca.js";import{g as K}from"./PTHelper.11558b27.js";const N={},I=e("h3",null,"Screen Reader",-1),W=e("i",null,"group",-1),M=e("i",null,"button",-1),A=e("i",null,"aria-pressed",-1),q=e("i",null,"aria.listView",-1),z=e("i",null,"aria.gridView",-1),H=e("h3",null,"Keyboard Support",-1),E=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the buttons.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the checked state of a button.")])])])],-1);function G(a,i){const u=L,b=k,o=y;return h(),D(o,j({id:"accessibility",label:"Accessibility"},a.$attrs),{default:n(()=>[I,e("p",null,[l(" The container element that wraps the layout options buttons has a "),W,l(" role whereas each button element uses "),M,l(" role and "),A,l(" is updated depending on selection state. Values to describe the buttons are derived from the "),q,l(" and "),z,l(" properties of the "),t(u,{to:"/configuration/#locale"},{default:n(()=>[l("locale")]),_:1}),l(" API respectively. ")]),e("p",null,[l("Refer to "),t(b,{to:"/paginator"},{default:n(()=>[l("paginator")]),_:1}),l(" accessibility documentation for the paginator of the component.")]),H,E]),_:1},16)}const J=x(N,[["render",G]]),Q={data(){return{products:null,code:{basic:`<DataView :value="products">
    <template #list="slotProps">
        <div class="col-12">
            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                        <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                        <div class="flex align-items-center gap-3">
                            <span class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </span>
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                        </div>
                    </div>
                    <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                        <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>`,options:`<template>
    <div class="card">
        <DataView :value="products">
            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 5)));
    },
    methods: {
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataView :value="products">
            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 5)));
});

const products = ref();
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
<\/script>`,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){V.getProductsSmall().then(a=>this.products=a.slice(0,5))},methods:{getSeverity(a){switch(a.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},X=e("p",null,[l(" DataView requires a "),e("i",null,"value"),l(" to display along with a "),e("i",null,"list"),l(" slot that receives an object in the collection to return content. The root element should have the PrimeFlex Grid classes e.g. col-12 to define how items are displayed. ")],-1),Y={class:"card"},Z={class:"col-12"},ee={class:"flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"},te=["src","alt"],se={class:"flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"},ae={class:"flex flex-column align-items-center sm:align-items-start gap-3"},oe={class:"text-2xl font-bold text-900"},le={class:"flex align-items-center gap-3"},ie={class:"flex align-items-center gap-2"},ne=e("i",{class:"pi pi-tag"},null,-1),re={class:"font-semibold"},ce={class:"flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"},de={class:"text-2xl font-semibold"};function pe(a,i,u,b,o,g){const d=y,p=c("Rating"),f=c("Tag"),r=c("Button"),w=c("DataView"),P=$;return h(),_(S,null,[t(d,O(T(a.$attrs)),{default:n(()=>[X]),_:1},16),e("div",Y,[t(w,{value:o.products},{list:n(v=>[e("div",Z,[e("div",ee,[e("img",{class:"w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round",src:`https://primefaces.org/cdn/primevue/images/product/${v.data.image}`,alt:v.data.name},null,8,te),e("div",se,[e("div",ae,[e("div",oe,m(v.data.name),1),t(p,{modelValue:v.data.rating,readonly:"",cancel:!1},null,8,["modelValue"]),e("div",le,[e("span",ie,[ne,e("span",re,m(v.data.category),1)]),t(f,{value:v.data.inventoryStatus,severity:g.getSeverity(v.data)},null,8,["value","severity"])])]),e("div",ce,[e("span",de,"$"+m(v.data.price),1),t(r,{icon:"pi pi-shopping-cart",rounded:"",disabled:v.data.inventoryStatus==="OUTOFSTOCK"},null,8,["disabled"])])])])])]),_:1},8,["value"])]),t(P,{code:o.code,service:["ProductService"]},null,8,["code"])],64)}const me=x(Q,[["render",pe]]),ue={data(){return{code:{basic:`import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'   // optional`}}}};function ge(a,i,u,b,o,g){const d=y,p=$;return h(),_(S,null,[t(d,O(T(a.$attrs)),null,16),t(p,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ve=x(ue,[["render",ge]]),fe={data(){return{products:null,layout:"grid",code:{basic:`<DataView :value="products" :layout="layout">
    <template #header>
        <div class="flex justify-content-end">
            <DataViewLayoutOptions v-model="layout" />
        </div>
    </template>

    <template #list="slotProps">
        <div class="col-12">
            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                        <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                        <div class="flex align-items-center gap-3">
                            <span class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </span>
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                        </div>
                    </div>
                    <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                        <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <template #grid="slotProps">
        <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
            <div class="p-4 border-1 surface-border surface-card border-round">
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-tag"></i>
                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                    </div>
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                </div>
                <div class="flex flex-column align-items-center gap-3 py-5">
                    <img class="w-9 shadow-2 border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                    <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
                                    <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                </div>
                <div class="flex align-items-center justify-content-between">
                    <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                    <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                </div>
            </div>
        </div>
    </template>
</DataView>`,options:`<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                    <div class="p-4 border-1 surface-border surface-card border-round">
                        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </div>
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                        </div>
                        <div class="flex flex-column align-items-center gap-3 py-5">
                            <img class="w-9 shadow-2 border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                            <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
                                            <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                        </div>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                            <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            layout: 'grid'
        }
    },
    mounted() {
        ProductService.getProducts().then((data) => (this.products = data.slice(0, 12)));
    },
    methods: {
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                    <div class="p-4 border-1 surface-border surface-card border-round">
                        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </div>
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                        </div>
                        <div class="flex flex-column align-items-center gap-3 py-5">
                            <img class="w-9 shadow-2 border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                            <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
                                            <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                        </div>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                            <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
});

const products = ref();
const layout = ref('grid');

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}

<\/script>`,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){V.getProducts().then(a=>this.products=a.slice(0,12))},methods:{getSeverity(a){switch(a.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},xe=e("p",null,[l(" DataView supports "),e("i",null,"list"),l(" and "),e("i",null,"grid"),l(" display modes defined with the "),e("i",null,"layout"),l(" property. The helper "),e("i",null,"DataViewLayoutOptions"),l(" component can be used to switch between the modes however this component is optional and you may use your own UI to switch modes as well. As in "),e("i",null,"list"),l(" layout, the "),e("i",null,"grid"),l(" layout also requires PrimeFlex Grid classes to define how the grid is displayed per screen sizes. ")],-1),he={class:"card"},be={class:"flex justify-content-end"},we={class:"col-12"},ye={class:"flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"},_e=["src","alt"],Se={class:"flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"},Pe={class:"flex flex-column align-items-center sm:align-items-start gap-3"},Oe={class:"text-2xl font-bold text-900"},Te={class:"flex align-items-center gap-3"},$e={class:"flex align-items-center gap-2"},Ve=e("i",{class:"pi pi-tag"},null,-1),ke={class:"font-semibold"},De={class:"flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"},Ce={class:"text-2xl font-semibold"},Ke={class:"col-12 sm:col-6 lg:col-12 xl:col-4 p-2"},Be={class:"p-4 border-1 surface-border surface-card border-round"},Fe={class:"flex flex-wrap align-items-center justify-content-between gap-2"},je={class:"flex align-items-center gap-2"},Le=e("i",{class:"pi pi-tag"},null,-1),Re={class:"font-semibold"},Ue={class:"flex flex-column align-items-center gap-3 py-5"},Ne=["src","alt"],Ie={class:"text-2xl font-bold"},We={class:"flex align-items-center justify-content-between"},Me={class:"text-2xl font-semibold"};function Ae(a,i,u,b,o,g){const d=y,p=c("DataViewLayoutOptions"),f=c("Rating"),r=c("Tag"),w=c("Button"),P=c("DataView"),v=$;return h(),_(S,null,[t(d,O(T(a.$attrs)),{default:n(()=>[xe]),_:1},16),e("div",he,[t(P,{value:o.products,layout:o.layout},{header:n(()=>[e("div",be,[t(p,{modelValue:o.layout,"onUpdate:modelValue":i[0]||(i[0]=s=>o.layout=s)},null,8,["modelValue"])])]),list:n(s=>[e("div",we,[e("div",ye,[e("img",{class:"w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round",src:`https://primefaces.org/cdn/primevue/images/product/${s.data.image}`,alt:s.data.name},null,8,_e),e("div",Se,[e("div",Pe,[e("div",Oe,m(s.data.name),1),t(f,{modelValue:s.data.rating,readonly:"",cancel:!1},null,8,["modelValue"]),e("div",Te,[e("span",$e,[Ve,e("span",ke,m(s.data.category),1)]),t(r,{value:s.data.inventoryStatus,severity:g.getSeverity(s.data)},null,8,["value","severity"])])]),e("div",De,[e("span",Ce,"$"+m(s.data.price),1),t(w,{icon:"pi pi-shopping-cart",rounded:"",disabled:s.data.inventoryStatus==="OUTOFSTOCK"},null,8,["disabled"])])])])])]),grid:n(s=>[e("div",Ke,[e("div",Be,[e("div",Fe,[e("div",je,[Le,e("span",Re,m(s.data.category),1)]),t(r,{value:s.data.inventoryStatus,severity:g.getSeverity(s.data)},null,8,["value","severity"])]),e("div",Ue,[e("img",{class:"w-9 shadow-2 border-round",src:`https://primefaces.org/cdn/primevue/images/product/${s.data.image}`,alt:s.data.name},null,8,Ne),e("div",Ie,m(s.data.name),1),t(f,{modelValue:s.data.rating,readonly:"",cancel:!1},null,8,["modelValue"])]),e("div",We,[e("span",Me,"$"+m(s.data.price),1),t(w,{icon:"pi pi-shopping-cart",rounded:"",disabled:s.data.inventoryStatus==="OUTOFSTOCK"},null,8,["disabled"])])])])]),_:1},8,["value","layout"])]),t(v,{code:o.code,service:["ProductService"]},null,8,["code"])],64)}const qe=x(fe,[["render",Ae]]),ze={data(){return{products:null,layout:"grid",code:{basic:`<DataView :value="products" :layout="layout">
    <template #header>
        <div class="flex justify-content-end">
            <DataViewLayoutOptions v-model="layout" />
        </div>
    </template>

    <template #list>
        <div class="col-12">
            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <Skeleton class="w-9 sm:w-16rem xl:w-10rem shadow-2 h-6rem block xl:block mx-auto border-round" />
                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                        <Skeleton class="w-8rem border-round h-2rem" />
                        <Skeleton class="w-6rem border-round h-1rem" />
                        <div class="flex align-items-center gap-3">
                            <Skeleton class="w-6rem border-round h-1rem" />
                            <Skeleton class="w-3rem border-round h-1rem" />
                        </div>
                    </div>
                    <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <Skeleton class="w-4rem border-round h-2rem" />
                        <Skeleton shape="circle" class="w-3rem h-3rem" />
                    </div>
                </div>
            </div>
        </div>
    </template>

    <template #grid>
        <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
            <div class="p-4 border-1 surface-border surface-card border-round">
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <Skeleton class="w-6rem border-round h-2rem" />
                    <Skeleton class="w-3rem border-round h-1rem" />
                </div>
                <div class="flex flex-column align-items-center gap-3 py-5">
                    <Skeleton class="w-9 shadow-2 border-round h-10rem" />
                    <Skeleton class="w-8rem border-round h-2rem" />
                    <Skeleton class="w-6rem border-round h-1rem" />
                </div>
                <div class="flex align-items-center justify-content-between">
                    <Skeleton class="w-4rem border-round h-2rem" />
                    <Skeleton shape="circle" class="w-3rem h-3rem" />
                </div>
            </div>
        </div>
    </template>
</DataView>`,options:`<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list>
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <Skeleton class="w-9 sm:w-16rem xl:w-10rem shadow-2 h-6rem block xl:block mx-auto border-round" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <Skeleton class="w-8rem border-round h-2rem" />
                                <Skeleton class="w-6rem border-round h-1rem" />
                                <div class="flex align-items-center gap-3">
                                    <Skeleton class="w-6rem border-round h-1rem" />
                                    <Skeleton class="w-3rem border-round h-1rem" />
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <Skeleton class="w-4rem border-round h-2rem" />
                                <Skeleton shape="circle" class="w-3rem h-3rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid>
                <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                    <div class="p-4 border-1 surface-border surface-card border-round">
                        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                            <Skeleton class="w-6rem border-round h-2rem" />
                            <Skeleton class="w-3rem border-round h-1rem" />
                        </div>
                        <div class="flex flex-column align-items-center gap-3 py-5">
                            <Skeleton class="w-9 shadow-2 border-round h-10rem" />
                            <Skeleton class="w-8rem border-round h-2rem" />
                            <Skeleton class="w-6rem border-round h-1rem" />
                        </div>
                        <div class="flex align-items-center justify-content-between">
                            <Skeleton class="w-4rem border-round h-2rem" />
                            <Skeleton shape="circle" class="w-3rem h-3rem" />
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            layout: 'grid'
        }
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 6)));
    },
    methods: {
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list>
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <Skeleton class="w-9 sm:w-16rem xl:w-10rem shadow-2 h-6rem block xl:block mx-auto border-round" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <Skeleton class="w-8rem border-round h-2rem" />
                                <Skeleton class="w-6rem border-round h-1rem" />
                                <div class="flex align-items-center gap-3">
                                    <Skeleton class="w-6rem border-round h-1rem" />
                                    <Skeleton class="w-3rem border-round h-1rem" />
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <Skeleton class="w-4rem border-round h-2rem" />
                                <Skeleton shape="circle" class="w-3rem h-3rem" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid>
                <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                    <div class="p-4 border-1 surface-border surface-card border-round">
                        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                            <Skeleton class="w-6rem border-round h-2rem" />
                            <Skeleton class="w-3rem border-round h-1rem" />
                        </div>
                        <div class="flex flex-column align-items-center gap-3 py-5">
                            <Skeleton class="w-9 shadow-2 border-round h-10rem" />
                            <Skeleton class="w-8rem border-round h-2rem" />
                            <Skeleton class="w-6rem border-round h-1rem" />
                        </div>
                        <div class="flex align-items-center justify-content-between">
                            <Skeleton class="w-4rem border-round h-2rem" />
                            <Skeleton shape="circle" class="w-3rem h-3rem" />
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 6)));
});

const products = ref();
const layout = ref('grid');

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}

<\/script>`,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){V.getProductsSmall().then(a=>this.products=a.slice(0,6))},methods:{getSeverity(a){switch(a.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},He={class:"card"},Ee={class:"flex justify-content-end"},Ge={class:"col-12"},Je={class:"flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"},Qe={class:"flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"},Xe={class:"flex flex-column align-items-center sm:align-items-start gap-3"},Ye={class:"flex align-items-center gap-3"},Ze={class:"flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"},et={class:"col-12 sm:col-6 lg:col-12 xl:col-4 p-2"},tt={class:"p-4 border-1 surface-border surface-card border-round"},st={class:"flex flex-wrap align-items-center justify-content-between gap-2"},at={class:"flex flex-column align-items-center gap-3 py-5"},ot={class:"flex align-items-center justify-content-between"};function lt(a,i,u,b,o,g){const d=k,p=y,f=c("DataViewLayoutOptions"),r=c("Skeleton"),w=c("DataView"),P=$;return h(),_(S,null,[t(p,O(T(a.$attrs)),{default:n(()=>[e("p",null,[l("While data is being loaded. "),t(d,{to:"/skeleton"},{default:n(()=>[l("Skeleton")]),_:1}),l(" component may be used to indicate the busy state.")])]),_:1},16),e("div",He,[t(w,{value:o.products,layout:o.layout},{header:n(()=>[e("div",Ee,[t(f,{modelValue:o.layout,"onUpdate:modelValue":i[0]||(i[0]=v=>o.layout=v)},null,8,["modelValue"])])]),list:n(()=>[e("div",Ge,[e("div",Je,[t(r,{class:"w-9 sm:w-16rem xl:w-10rem shadow-2 h-6rem block xl:block mx-auto border-round"}),e("div",Qe,[e("div",Xe,[t(r,{class:"w-8rem border-round h-2rem"}),t(r,{class:"w-6rem border-round h-1rem"}),e("div",Ye,[t(r,{class:"w-6rem border-round h-1rem"}),t(r,{class:"w-3rem border-round h-1rem"})])]),e("div",Ze,[t(r,{class:"w-4rem border-round h-2rem"}),t(r,{shape:"circle",class:"w-3rem h-3rem"})])])])])]),grid:n(()=>[e("div",et,[e("div",tt,[e("div",st,[t(r,{class:"w-6rem border-round h-2rem"}),t(r,{class:"w-3rem border-round h-1rem"})]),e("div",at,[t(r,{class:"w-9 shadow-2 border-round h-10rem"}),t(r,{class:"w-8rem border-round h-2rem"}),t(r,{class:"w-6rem border-round h-1rem"})]),e("div",ot,[t(r,{class:"w-4rem border-round h-2rem"}),t(r,{shape:"circle",class:"w-3rem h-3rem"})])])])]),_:1},8,["value","layout"])]),t(P,{code:o.code,service:["ProductService"]},null,8,["code"])],64)}const it=x(ze,[["render",lt]]),nt={data(){return{products:null,code:{basic:`<DataView :value="products" paginator :rows="5">
    <template #list="slotProps">
        <div class="col-12">
            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                        <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                        <div class="flex align-items-center gap-3">
                            <span class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </span>
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                        </div>
                    </div>
                    <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                        <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>`,options:`<template>
    <div class="card">
        <DataView :value="products" paginator :rows="5">
            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data));
    },
    methods: {
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataView :value="products" paginator :rows="5">
            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
});

const products = ref();
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
<\/script>`,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){V.getProductsSmall().then(a=>this.products=a)},methods:{getSeverity(a){switch(a.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},rt=e("i",null,"paginator",-1),ct=e("i",null,"rows",-1),dt={class:"card"},pt={class:"col-12"},mt={class:"flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"},ut=["src","alt"],gt={class:"flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"},vt={class:"flex flex-column align-items-center sm:align-items-start gap-3"},ft={class:"text-2xl font-bold text-900"},xt={class:"flex align-items-center gap-3"},ht={class:"flex align-items-center gap-2"},bt=e("i",{class:"pi pi-tag"},null,-1),wt={class:"font-semibold"},yt={class:"flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"},_t={class:"text-2xl font-semibold"};function St(a,i,u,b,o,g){const d=k,p=y,f=c("Rating"),r=c("Tag"),w=c("Button"),P=c("DataView"),v=$;return h(),_(S,null,[t(p,O(T(a.$attrs)),{default:n(()=>[e("p",null,[l("Pagination is enabled with the "),rt,l(" and "),ct,l(" properties. Refer to the "),t(d,{to:"/paginator"},{default:n(()=>[l("Paginator")]),_:1}),l(" for more information about customizing the paginator.")])]),_:1},16),e("div",dt,[t(P,{value:o.products,paginator:"",rows:5},{list:n(s=>[e("div",pt,[e("div",mt,[e("img",{class:"w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round",src:`https://primefaces.org/cdn/primevue/images/product/${s.data.image}`,alt:s.data.name},null,8,ut),e("div",gt,[e("div",vt,[e("div",ft,m(s.data.name),1),t(f,{modelValue:s.data.rating,readonly:"",cancel:!1},null,8,["modelValue"]),e("div",xt,[e("span",ht,[bt,e("span",wt,m(s.data.category),1)]),t(r,{value:s.data.inventoryStatus,severity:g.getSeverity(s.data)},null,8,["value","severity"])])]),e("div",yt,[e("span",_t,"$"+m(s.data.price),1),t(w,{icon:"pi pi-shopping-cart",rounded:"",disabled:s.data.inventoryStatus==="OUTOFSTOCK"},null,8,["disabled"])])])])])]),_:1},8,["value"])]),t(v,{code:o.code,service:["ProductService"]},null,8,["code"])],64)}const Pt=x(nt,[["render",St]]),Ot={data(){return{code1:{basic:"npm install primeflex"},code2:{basic:"import 'primeflex/primeflex.css';"}}}},Tt=e("p",null,"DataView depends on PrimeFlex Grid functionality so it needs to be installed and imported.",-1);function $t(a,i,u,b,o,g){const d=y,p=$;return h(),_(S,null,[t(d,O(T(a.$attrs)),{default:n(()=>[Tt]),_:1},16),t(p,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),t(p,{code:o.code2,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Vt=x(Ot,[["render",$t]]),kt={data(){return{products:null,sortKey:null,sortOrder:null,sortField:null,sortOptions:[{label:"Price High to Low",value:"!price"},{label:"Price Low to High",value:"price"}],code:{basic:`<DataView :value="products" :sortOrder="sortOrder" :sortField="sortField">
    <template #header>
        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
    </template>
    <template #list="slotProps">
        <div class="col-12">
            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                        <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                        <div class="flex align-items-center gap-3">
                            <span class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </span>
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                        </div>
                    </div>
                    <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                        <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                    </div>
                </div>
            </div>
        </div>
    </template>
</DataView>`,options:`<template>
    <div class="card">
        <DataView :value="products" :sortOrder="sortOrder" :sortField="sortField">
            <template #header>
                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
            </template>
            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            sortKey: null,
            sortOrder: null,
            sortField: null,
            sortOptions: [
                { label: 'Price High to Low', value: '!price' },
                { label: 'Price Low to High', value: 'price' }
            ]
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 5)));
    },
    methods: {
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        },
        onSortChange(event) {
            const value = event.value.value;
            const sortValue = event.value;

            if (value.indexOf('!') === 0) {
                this.sortOrder = -1;
                this.sortField = value.substring(1, value.length);
                this.sortKey = sortValue;
            } else {
                this.sortOrder = 1;
                this.sortField = value;
                this.sortKey = sortValue;
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataView :value="products" :sortOrder="sortOrder" :sortField="sortField">
            <template #header>
                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price" @change="onSortChange($event)" />
            </template>
            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 5)));
});

const products = ref();
const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
    {label: 'Price High to Low', value: '!price'},
    {label: 'Price Low to High', value: 'price'},
]);
const onSortChange = (event) => {
    const value = event.value.value;
    const sortValue = event.value;

    if (value.indexOf('!') === 0) {
        sortOrder.value = -1;
        sortField.value = value.substring(1, value.length);
        sortKey.value = sortValue;
    }
    else {
        sortOrder.value = 1;
        sortField.value = value;
        sortKey.value = sortValue;
    }
};
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
<\/script>`,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){V.getProductsSmall().then(a=>this.products=a.slice(0,5))},methods:{getSeverity(a){switch(a.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}},onSortChange(a){const i=a.value.value,u=a.value;i.indexOf("!")===0?(this.sortOrder=-1,this.sortField=i.substring(1,i.length),this.sortKey=u):(this.sortOrder=1,this.sortField=i,this.sortKey=u)}}},Dt=e("p",null,[l("Built-in sorting is controlled by bindings "),e("i",null,"sortField"),l(" and "),e("i",null,"sortField"),l(" properties from a custom UI.")],-1),Ct={class:"card"},Kt={class:"col-12"},Bt={class:"flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"},Ft=["src","alt"],jt={class:"flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"},Lt={class:"flex flex-column align-items-center sm:align-items-start gap-3"},Rt={class:"text-2xl font-bold text-900"},Ut={class:"flex align-items-center gap-3"},Nt={class:"flex align-items-center gap-2"},It=e("i",{class:"pi pi-tag"},null,-1),Wt={class:"font-semibold"},Mt={class:"flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"},At={class:"text-2xl font-semibold"};function qt(a,i,u,b,o,g){const d=y,p=c("Dropdown"),f=c("Rating"),r=c("Tag"),w=c("Button"),P=c("DataView"),v=$;return h(),_(S,null,[t(d,O(T(a.$attrs)),{default:n(()=>[Dt]),_:1},16),e("div",Ct,[t(P,{value:o.products,sortOrder:o.sortOrder,sortField:o.sortField},{header:n(()=>[t(p,{modelValue:o.sortKey,"onUpdate:modelValue":i[0]||(i[0]=s=>o.sortKey=s),options:o.sortOptions,optionLabel:"label",placeholder:"Sort By Price",onChange:i[1]||(i[1]=s=>g.onSortChange(s))},null,8,["modelValue","options"])]),list:n(s=>[e("div",Kt,[e("div",Bt,[e("img",{class:"w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round",src:`https://primefaces.org/cdn/primevue/images/product/${s.data.image}`,alt:s.data.name},null,8,Ft),e("div",jt,[e("div",Lt,[e("div",Rt,m(s.data.name),1),t(f,{modelValue:s.data.rating,readonly:"",cancel:!1},null,8,["modelValue"]),e("div",Ut,[e("span",Nt,[It,e("span",Wt,m(s.data.category),1)]),t(r,{value:s.data.inventoryStatus,severity:g.getSeverity(s.data)},null,8,["value","severity"])])]),e("div",Mt,[e("span",At,"$"+m(s.data.price),1),t(w,{icon:"pi pi-shopping-cart",rounded:"",disabled:s.data.inventoryStatus==="OUTOFSTOCK"},null,8,["disabled"])])])])])]),_:1},8,["value","sortOrder","sortField"])]),t(v,{code:o.code,service:["ProductService"]},null,8,["code"])],64)}const zt=x(kt,[["render",qt]]),Ht={data(){return{products:null,layout:"grid",code:{basic:`<DataView
    :value="products"
    :layout="layout"
    :pt="{
        grid: { class: 'surface-ground' }
    }"
>
    <template #header>
        <div class="flex justify-content-end">
            <DataViewLayoutOptions
                v-model="layout"
                :pt="{
                    listButton: ({ props }) => ({ class: props.modelValue === 'list' ? 'bg-teal-400 border-teal-400' : 'undefined' }),
                    gridButton: ({ props }) => ({ class: props.modelValue === 'grid' ? 'bg-teal-400 border-teal-400' : 'undefined' })
                }"
            />
        </div>
    </template>

    <template #list="slotProps">
        <div class="col-12">
            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                        <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                        <div class="flex align-items-center gap-3">
                            <span class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </span>
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                        </div>
                    </div>
                    <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                        <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <template #grid="slotProps">
        <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
            <div class="p-4 border-1 surface-border surface-card border-round">
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <div class="flex align-items-center gap-2">
                        <i class="pi pi-tag"></i>
                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                    </div>
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                </div>
                <div class="flex flex-column align-items-center gap-3 py-5">
                    <img class="w-9 shadow-2 border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                    <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
                    <Rating value="{product.rating}" readonly :cancel="false"></Rating>
                </div>
                <div class="flex align-items-center justify-content-between">
                    <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                    <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                </div>
            </div>
        </div>
    </template>
</DataView>`,options:`<template>
    <div class="card">
        <DataView
            :value="products"
            :layout="layout"
            :pt="{
                grid: { class: 'surface-ground' }
            }"
        >
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions
                        v-model="layout"
                        :pt="{
                            listButton: ({ props }) => ({ class: props.modelValue === 'list' ? 'bg-teal-400 border-teal-400' : 'undefined' }),
                            gridButton: ({ props }) => ({ class: props.modelValue === 'grid' ? 'bg-teal-400 border-teal-400' : 'undefined' })
                        }"
                    />
                </div>
            </template>

            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                    <div class="p-4 border-1 surface-border surface-card border-round">
                        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </div>
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                        </div>
                        <div class="flex flex-column align-items-center gap-3 py-5">
                            <img class="w-9 shadow-2 border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                            <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
                            <Rating value="{product.rating}" readonly :cancel="false"></Rating>
                        </div>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                            <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            layout: 'grid'
        }
    },
    mounted() {
        ProductService.getProducts().then((data) => (this.products = data.slice(0, 6)));
    },
    methods: {
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <DataView
            :value="products"
            :layout="layout"
            :pt="{
                grid: { class: 'surface-ground' }
            }"
        >
            <template #header>
                <div class="flex justify-content-end">
                    <DataViewLayoutOptions
                        v-model="layout"
                        :pt="{
                            listButton: ({ props }) => ({ class: props.modelValue === 'list' ? 'bg-teal-400 border-teal-400' : 'undefined' }),
                            gridButton: ({ props }) => ({ class: props.modelValue === 'grid' ? 'bg-teal-400 border-teal-400' : 'undefined' })
                        }"
                    />
                </div>
            </template>

            <template #list="slotProps">
                <div class="col-12">
                    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                    <div class="p-4 border-1 surface-border surface-card border-round">
                        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                            <div class="flex align-items-center gap-2">
                                <i class="pi pi-tag"></i>
                                <span class="font-semibold">{{ slotProps.data.category }}</span>
                            </div>
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                        </div>
                        <div class="flex flex-column align-items-center gap-3 py-5">
                            <img class="w-9 shadow-2 border-round" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                            <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
                            <Rating value="{product.rating}" readonly :cancel="false"></Rating>
                        </div>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-2xl font-semibold">\${{ slotProps.data.price }}</span>
                            <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProducts().then((data) => (products.value = data.slice(0, 6)));
});

const products = ref();
const layout = ref('grid');

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}

<\/script>`,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){V.getProducts().then(a=>this.products=a.slice(0,6))},methods:{getSeverity(a){switch(a.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},Et={class:"card"},Gt={class:"flex justify-content-end"},Jt={class:"col-12"},Qt={class:"flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"},Xt=["src","alt"],Yt={class:"flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"},Zt={class:"flex flex-column align-items-center sm:align-items-start gap-3"},es={class:"text-2xl font-bold text-900"},ts={class:"flex align-items-center gap-3"},ss={class:"flex align-items-center gap-2"},as=e("i",{class:"pi pi-tag"},null,-1),os={class:"font-semibold"},ls={class:"flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"},is={class:"text-2xl font-semibold"},ns={class:"col-12 sm:col-6 lg:col-12 xl:col-4 p-2"},rs={class:"p-4 border-1 surface-border surface-card border-round"},cs={class:"flex flex-wrap align-items-center justify-content-between gap-2"},ds={class:"flex align-items-center gap-2"},ps=e("i",{class:"pi pi-tag"},null,-1),ms={class:"font-semibold"},us={class:"flex flex-column align-items-center gap-3 py-5"},gs=["src","alt"],vs={class:"text-2xl font-bold"},fs={class:"flex align-items-center justify-content-between"},xs={class:"text-2xl font-semibold"};function hs(a,i,u,b,o,g){const d=y,p=c("DataViewLayoutOptions"),f=c("Rating"),r=c("Tag"),w=c("Button"),P=c("DataView"),v=$;return h(),_(S,null,[t(d,O(T(a.$attrs)),null,16),e("div",Et,[t(P,{value:o.products,layout:o.layout,pt:{grid:{class:"surface-ground"}}},{header:n(()=>[e("div",Gt,[t(p,{modelValue:o.layout,"onUpdate:modelValue":i[0]||(i[0]=s=>o.layout=s),pt:{listButton:({props:s})=>({class:s.modelValue==="list"?"bg-teal-400 border-teal-400":"undefined"}),gridButton:({props:s})=>({class:s.modelValue==="grid"?"bg-teal-400 border-teal-400":"undefined"})}},null,8,["modelValue","pt"])])]),list:n(s=>[e("div",Jt,[e("div",Qt,[e("img",{class:"w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round",src:`https://primefaces.org/cdn/primevue/images/product/${s.data.image}`,alt:s.data.name},null,8,Xt),e("div",Yt,[e("div",Zt,[e("div",es,m(s.data.name),1),t(f,{modelValue:s.data.rating,readonly:"",cancel:!1},null,8,["modelValue"]),e("div",ts,[e("span",ss,[as,e("span",os,m(s.data.category),1)]),t(r,{value:s.data.inventoryStatus,severity:g.getSeverity(s.data)},null,8,["value","severity"])])]),e("div",ls,[e("span",is,"$"+m(s.data.price),1),t(w,{icon:"pi pi-shopping-cart",rounded:"",disabled:s.data.inventoryStatus==="OUTOFSTOCK"},null,8,["disabled"])])])])])]),grid:n(s=>[e("div",ns,[e("div",rs,[e("div",cs,[e("div",ds,[ps,e("span",ms,m(s.data.category),1)]),t(r,{value:s.data.inventoryStatus,severity:g.getSeverity(s.data)},null,8,["value","severity"])]),e("div",us,[e("img",{class:"w-9 shadow-2 border-round",src:`https://primefaces.org/cdn/primevue/images/product/${s.data.image}`,alt:s.data.name},null,8,gs),e("div",vs,m(s.data.name),1),t(f,{value:"{product.rating}",readonly:"",cancel:!1})]),e("div",fs,[e("span",xs,"$"+m(s.data.price),1),t(w,{icon:"pi pi-shopping-cart",rounded:"",disabled:s.data.inventoryStatus==="OUTOFSTOCK"},null,8,["disabled"])])])])]),_:1},8,["value","layout"])]),t(v,{code:o.code,service:["ProductService"]},null,8,["code"])],64)}const bs=x(Ht,[["render",hs]]),ws={},ys=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/dataview.jpg"})],-1);function _s(a,i){const u=y;return h(),_(S,null,[t(u,O(T(a.$attrs)),{default:n(()=>[e("p",null,m(a.$attrs.description),1)]),_:1},16),ys],64)}const Ss=x(ws,[["render",_s]]),Ps={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ss},{id:"pt.doc.dataview",label:"DataView PT Options",component:C,data:K("DataView")},{id:"pt.doc.dataviewlayoutoptions",label:"DataViewLayoutOptions PT Options",component:C,data:K("DataViewLayoutOptions")},{id:"pt.demo",label:"Demo",component:bs}]}}},Os={class:"doc-main"},Ts=e("div",{class:"doc-intro"},[e("h1",null,"DataView Pass Through")],-1);function $s(a,i,u,b,o,g){const d=B,p=F;return h(),_(S,null,[e("div",Os,[Ts,t(d,{docs:o.docs},null,8,["docs"])]),t(p,{docs:o.docs},null,8,["docs"])],64)}const Vs=x(Ps,[["render",$s]]),ks={},Ds=e("p",null,"List of class names used in the styled mode.",-1),Cs=R('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-dataview</td><td>Container element.</td></tr><tr><td>p-dataview-list</td><td>Container element in list layout.</td></tr><tr><td>p-dataview-grid</td><td>Container element in grid layout.</td></tr><tr><td>p-dataview-header</td><td>Header section.</td></tr><tr><td>p-dataview-footer</td><td>Footer section.</td></tr><tr><td>p-dataview-content</td><td>Container of items.</td></tr><tr><td>p-dataview-emptymessage</td><td>Empty message element.</td></tr></tbody></table></div>',1);function Ks(a,i){const u=y;return h(),_(S,null,[t(u,O(T(a.$attrs)),{default:n(()=>[Ds]),_:1},16),Cs],64)}const Bs=x(ks,[["render",Ks]]),Fs={data(){return{code1:{basic:`
export default {
    dataview: {
        content: {
            class: [
                'bg-white blue-gray-700 border-0 p-0',
                'dark:bg-gray-900 dark:text-white/80' // Dark Mode
            ]
        },
        grid: 'flex flex-wrap ml-0 mr-0 mt-0 bg-white dark:bg-gray-900',
        header: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white/80 border-gray-200 dark:border-blue-900/40 border-t border-b p-4 font-bold'
    },
    dataviewlayoutoptions: {
        listbutton: ({ props }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
                'transition duration-200',
                'w-12 pt-3 pb-3 rounded-lg rounded-r-none',
                props.modelValue === 'list' ? 'bg-blue-500 border-blue-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' : 'bg-white border-gray-300 text-blue-gray-700 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // highlighted state
            ]
        }),
        gridbutton: ({ props }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
                'transition duration-200',
                'w-12 pt-3 pb-3 rounded-lg rounded-l-none',
                props.modelValue === 'grid' ? 'bg-blue-500 border-blue-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' : 'bg-white border-gray-300 text-blue-gray-700 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // highlighted state
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-end bg-gray-100 dark:bg-gray-800">
                    <DataViewLayoutOptions v-model="layout" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="flex-initial shrink-0 w-full">
                    <div class="flex flex-col xl:flex-row xl:items-start p-4 gap-4 bg-white dark:bg-gray-900">
                        <img class="w-3/4 sm:w-64 xl:w-40 shadow-md block xl:block mx-auto rounded-md " :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                        <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                            <div class="flex flex-col items-center sm:items-start gap-3">
                                <div class="text-2xl font-bold text-gray-700 dark:text-white/80">
                                    {{ slotProps.data.name }}
                                </div>
                                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                                <div class="flex items-center gap-3">
                                    <span class="flex items-center gap-2">
                                        <i class="pi pi-tag text-gray-700 dark:text-white/80"></i>
                                        <span class="font-semibold text-gray-700 dark:text-white/80">{{ slotProps.data.category }}</span>
                                    </span>
                                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                                </div>
                            </div>
                            <div class="flex sm:flex-col items-center sm:align-end gap-3 sm:gap-2">
                                <span class="text-2xl font-semibold text-gray-700 dark:text-white/80">\${{ slotProps.data.price }}</span>
                                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="flex-initial shrink-0 w-full sm:w-1/2 lg:w-full xl:w-1/3 p-2">
                    <div class="p-4 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <div class="flex items-center gap-2">
                                <i class="pi pi-tag text-gray-700 dark:text-white/80"></i>
                                <span class="font-semibold text-gray-700 dark:text-white/80">{{ slotProps.data.category }}</span>
                            </div>
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                        </div>
                        <div class="flex flex-col items-center gap-3 py-5">
                            <img class="w-3/4 shadow-md rounded-md" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.name" />
                            <div class="text-2xl font-bold text-gray-700 dark:text-white/80">{{ slotProps.data.name }}</div>
                            <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-2xl font-semibold text-gray-700 dark:text-white/80">\${{ slotProps.data.price }}</span>
                            <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProducts().then((data) => (products.value = data.slice(0, 12)));
});

const products = ref();
const layout = ref('grid');

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
}

<\/script>`}}}},js=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ls(a,i,u,b,o,g){const d=k,p=$,f=y;return h(),D(f,O(T(a.$attrs)),{default:n(()=>[e("p",null,[l(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(d,{to:"/tailwind"},{default:n(()=>[l("Tailwind Customization")]),_:1}),l(" section for an example. ")]),t(p,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),js,t(p,{code:o.code2,service:["ProductService"],embedded:""},null,8,["code"])]),_:1},16)}const Rs=x(Fs,[["render",Ls]]),Us={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Bs},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Rs}]}]}}},Ns={class:"doc-main"},Is=e("div",{class:"doc-intro"},[e("h1",null,"DataView Theming")],-1);function Ws(a,i,u,b,o,g){const d=B,p=F;return h(),_(S,null,[e("div",Ns,[Is,t(d,{docs:o.docs},null,8,["docs"])]),t(p,{docs:o.docs},null,8,["docs"])],64)}const Ms=x(Us,[["render",Ws]]),As={data(){return{docs:[{id:"import",label:"Import",component:ve},{id:"primeflex",label:"PrimeFlex",component:Vt},{id:"basic",label:"Basic",component:me},{id:"pagination",label:"Pagination",component:Pt},{id:"sorting",label:"Sorting",component:zt},{id:"layout",label:"Layout",component:qe},{id:"loading",label:"Loading",component:it},{id:"accessibility",label:"Accessibility",component:J}],ptComponent:Vs,themingDoc:Ms}}};function qs(a,i,u,b,o,g){const d=U;return h(),D(d,{title:"Vue DataView Component",header:"DataView",description:"DataView displays data in grid or list layout with pagination and sorting features.",componentDocs:o.docs,apiDocs:["DataView","DataViewLayoutOptions"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Js=x(As,[["render",qs]]);export{Js as default};
