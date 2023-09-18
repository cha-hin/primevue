import{_ as m,o as v,e as T,w as l,b as e,f as o,a as t,m as k,C as B,h as f,j as u,c as y,n as O,g as x,t as b,F as P,p as w,D as K,k as $,l as V,v as D,x as I}from"./entry.68beb385.js";import{P as C}from"./ProductService.ed9696ca.js";import{g as N}from"./PTHelper.11558b27.js";import{_ as W}from"./PrimeVueNuxtLink.f51d0c80.js";const L={},F=e("h3",null,"Screen Reader",-1),M=e("p",null,[o(" Carousel uses "),e("i",null,"region"),o(" role and since any attribute is passed to the main container element, attributes such as "),e("i",null,"aria-label"),o(" and "),e("i",null,"aria-roledescription"),o(" can be used as well. The slides container has "),e("i",null,"aria-live"),o(' attribute set as "polite" if carousel is not in autoplay mode, otherwise "off" would be the value in autoplay. ')],-1),U=e("i",null,"group",-1),A=e("i",null,"aria.slideNumber",-1),j=e("i",null,"aria.slide",-1),q=e("i",null,"aria-roledescription",-1),z=e("i",null,"aria-hidden",-1),H=e("i",null,"aria-label",-1),R=e("i",null,"aria.prevPageLabel",-1),E=e("i",null,"aria.nextPageLabel",-1),Q=e("i",null,"nextButtonProps",-1),G=e("i",null,"prevButtonProps",-1),J=e("i",null,"aria-label",-1),X=e("i",null,"aria.pageLabel",-1),Y=e("i",null,"aria-current",-1),Z=e("h3",null,"Next/Prev Keyboard Support",-1),ee=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus through interactive elements in the carousel.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Activates navigation.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Activates navigation.")])])])],-1),te=e("h3",null,"Quick Navigation Keyboard Support",-1),se=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus through the active slide link.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Activates the focused slide link.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Activates the focused slide link.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Moves focus to the next slide link.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Moves focus to the previous slide link.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first slide link.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last slide link.")])])])],-1);function oe(s,h){const d=B,g=f;return v(),T(g,k({id:"accessibility",label:"Accessibility"},s.$attrs),{default:l(()=>[F,M,e("p",null,[o(" A slide has a "),U,o(" role with an aria-label that refers to the "),A,o(" property of the "),t(d,{to:"/configuration/#locale"},{default:l(()=>[o("locale")]),_:1}),o(" API. Similarly "),j,o(" is used as the "),q,o(" of the item. Inactive slides are hidden from the readers with "),z,o(". ")]),e("p",null,[o(" Next and Previous navigators are button elements with "),H,o(" attributes referring to the "),R,o(" and "),E,o(" properties of the "),t(d,{to:"/configuration/#locale"},{default:l(()=>[o("locale")]),_:1}),o(" API by default respectively, you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using "),Q,o(" and "),G,o(". ")]),e("p",null,[o(" Quick navigation elements are button elements with an "),J,o(" attribute referring to the "),X,o(" of the "),t(d,{to:"/configuration/#locale"},{default:l(()=>[o("locale")]),_:1}),o(" API. Current page is marked with "),Y,o(". ")]),Z,ee,te,se]),_:1},16)}const re=m(L,[["render",oe]]),ie={data(){return{products:null,responsiveOptions:[{breakpoint:"1199px",numVisible:3,numScroll:3},{breakpoint:"991px",numVisible:2,numScroll:2},{breakpoint:"767px",numVisible:1,numScroll:1}],code:{basic:`<Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div class="mb-3">
                <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
            </div>
            <div>
                <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                <div class="mt-5">
                    <Button icon="pi pi-search" rounded class="mr-2" />
                    <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" 
                </div>
            </div>
        </div>
    </template>
</Carousel>`,options:`<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            responsiveOptions: [
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '991px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '767px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 9)));
    },
    methods: {
        getSeverity(status) {
            switch (status) {
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
        <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
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
...`}}},mounted(){C.getProductsSmall().then(s=>this.products=s.slice(0,9))},methods:{getSeverity(s){switch(s){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},ne=e("p",null,"Carousel requires a collection of items as its value along with a template to render each item.",-1),ae={class:"card"},ce={class:"border-1 surface-border border-round m-2 text-center py-5 px-3"},le={class:"mb-3"},de=["src","alt"],ue={class:"mb-1"},pe={class:"mt-0 mb-3"},me={class:"mt-5"};function ve(s,h,d,g,i,p){const a=f,c=u("Tag"),n=u("Button"),_=u("Carousel"),S=w;return v(),y(P,null,[t(a,O(x(s.$attrs)),{default:l(()=>[ne]),_:1},16),e("div",ae,[t(_,{value:i.products,numVisible:3,numScroll:3,responsiveOptions:i.responsiveOptions},{item:l(r=>[e("div",ce,[e("div",le,[e("img",{src:"https://primefaces.org/cdn/primevue/images/product/"+r.data.image,alt:r.data.name,class:"w-6 shadow-2"},null,8,de)]),e("div",null,[e("h4",ue,b(r.data.name),1),e("h6",pe,"$"+b(r.data.price),1),t(c,{value:r.data.inventoryStatus,severity:p.getSeverity(r.data.inventoryStatus)},null,8,["value","severity"]),e("div",me,[t(n,{icon:"pi pi-search",rounded:"",class:"mr-2"}),t(n,{icon:"pi pi-star-fill",rounded:"",severity:"success",class:"mr-2"})])])])]),_:1},8,["value","responsiveOptions"])]),t(S,{code:i.code,service:["ProductService"]},null,8,["code"])],64)}const he=m(ie,[["render",ve]]),be={data(){return{products:null,responsiveOptions:[{breakpoint:"1199px",numVisible:3,numScroll:3},{breakpoint:"991px",numVisible:2,numScroll:2},{breakpoint:"767px",numVisible:1,numScroll:1}],code:{basic:`<Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
    <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div class="mb-3">
                <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
            </div>
            <div>
                <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                <div class="mt-5">
                    <Button icon="pi pi-search" rounded class="mr-2" />
                    <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                    <Button icon="pi pi-cog" rounded severity="help" />
                </div>
            </div>
        </div>
    </template>
</Carousel>`,options:`<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                            <Button icon="pi pi-cog" rounded severity="help" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            responsiveOptions: [
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '991px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '767px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 9)));
    },
    methods: {
        getSeverity(status) {
            switch (status) {
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
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                            <Button icon="pi pi-cog" rounded severity="help" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
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
...`}}},mounted(){C.getProductsSmall().then(s=>this.products=s.slice(0,9))},methods:{getSeverity(s){switch(s){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},ge=e("p",null,[o("When "),e("i",null,"autoplayInterval"),o(" is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling "),e("i",null,"circular"),o(" property needs to be added which is enabled automatically in auto play mode.")],-1),_e={class:"card"},Se={class:"border-1 surface-border border-round m-2 text-center py-5 px-3"},fe={class:"mb-3"},ye=["src","alt"],Pe={class:"mb-1"},Oe={class:"mt-0 mb-3"},xe={class:"mt-5"};function we(s,h,d,g,i,p){const a=f,c=u("Tag"),n=u("Button"),_=u("Carousel"),S=w;return v(),y(P,null,[t(a,O(x(s.$attrs)),{default:l(()=>[ge]),_:1},16),e("div",_e,[t(_,{value:i.products,numVisible:3,numScroll:1,responsiveOptions:i.responsiveOptions,circular:"",autoplayInterval:3e3},{item:l(r=>[e("div",Se,[e("div",fe,[e("img",{src:"https://primefaces.org/cdn/primevue/images/product/"+r.data.image,alt:r.data.name,class:"w-6 shadow-2"},null,8,ye)]),e("div",null,[e("h4",Pe,b(r.data.name),1),e("h6",Oe,"$"+b(r.data.price),1),t(c,{value:r.data.inventoryStatus,severity:p.getSeverity(r.data.inventoryStatus)},null,8,["value","severity"]),e("div",xe,[t(n,{icon:"pi pi-search",rounded:"",class:"mr-2"}),t(n,{icon:"pi pi-star-fill",rounded:"",severity:"success",class:"mr-2"}),t(n,{icon:"pi pi-cog",rounded:"",severity:"help"})])])])]),_:1},8,["value","responsiveOptions"])]),t(S,{code:i.code,service:["ProductService"]},null,8,["code"])],64)}const Ce=m(be,[["render",we]]),Te={data(){return{code:{basic:"import Carousel from 'primevue/carousel';"}}}};function $e(s,h,d,g,i,p){const a=f,c=w;return v(),y(P,null,[t(a,O(x(s.$attrs)),null,16),t(c,{code:i.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Ve=m(Te,[["render",$e]]),ke={data(){return{products:null,responsiveOptions:[{breakpoint:"1199px",numVisible:3,numScroll:3},{breakpoint:"991px",numVisible:2,numScroll:2},{breakpoint:"767px",numVisible:1,numScroll:1}],code:{basic:`<Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div class="mb-3">
                <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
            </div>
            <div>
                <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                <div class="mt-5">
                    <Button icon="pi pi-search" rounded class="mr-2" />
                    <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                    <Button icon="pi pi-cog" rounded severity="help" />
                </div>
            </div>
        </div>
    </template>
</Carousel>`,options:`<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                            <Button icon="pi pi-cog" rounded severity="help" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            responsiveOptions: [
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '991px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '767px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 9)));
    },
    methods: {
        getSeverity(status) {
            switch (status) {
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
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                            <Button icon="pi pi-cog" rounded severity="help" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
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
...`}}},mounted(){C.getProductsSmall().then(s=>this.products=s.slice(0,9))},methods:{getSeverity(s){switch(s){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},Be=e("p",null,"Carousel requires a collection of items as its value along with a template to render each item.",-1),Ke={class:"card"},De={class:"border-1 surface-border border-round m-2 text-center py-5 px-3"},Ie={class:"mb-3"},Ne=["src","alt"],We={class:"mb-1"},Le={class:"mt-0 mb-3"},Fe={class:"mt-5"};function Me(s,h,d,g,i,p){const a=f,c=u("Tag"),n=u("Button"),_=u("Carousel"),S=w;return v(),y(P,null,[t(a,O(x(s.$attrs)),{default:l(()=>[Be]),_:1},16),e("div",Ke,[t(_,{value:i.products,numVisible:3,numScroll:1,responsiveOptions:i.responsiveOptions},{item:l(r=>[e("div",De,[e("div",Ie,[e("img",{src:"https://primefaces.org/cdn/primevue/images/product/"+r.data.image,alt:r.data.name,class:"w-6 shadow-2"},null,8,Ne)]),e("div",null,[e("h4",We,b(r.data.name),1),e("h6",Le,"$"+b(r.data.price),1),t(c,{value:r.data.inventoryStatus,severity:p.getSeverity(r.data.inventoryStatus)},null,8,["value","severity"]),e("div",Fe,[t(n,{icon:"pi pi-search",rounded:"",class:"mr-2"}),t(n,{icon:"pi pi-star-fill",rounded:"",severity:"success",class:"mr-2"}),t(n,{icon:"pi pi-cog",rounded:"",severity:"help"})])])])]),_:1},8,["value","responsiveOptions"])]),t(S,{code:i.code,service:["ProductService"]},null,8,["code"])],64)}const Ue=m(ke,[["render",Me]]),Ae={data(){return{products:null,responsiveOptions:[{breakpoint:"1199px",numVisible:3,numScroll:3},{breakpoint:"991px",numVisible:2,numScroll:2},{breakpoint:"767px",numVisible:1,numScroll:1}],code:{basic:`<Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div class="mb-3">
                <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
            </div>
            <div>
                <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                <div class="mt-5">
                    <Button icon="pi pi-search" rounded class="mr-2" />
                    <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                    <Button icon="pi pi-cog" rounded severity="help" />
                </div>
            </div>
        </div>
    </template>
</Carousel>`,options:`<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                            <Button icon="pi pi-cog" rounded severity="help" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            responsiveOptions: [
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '991px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '767px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 9)));
    },
    methods: {
        getSeverity(status) {
            switch (status) {
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
        <Carousel :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                            <Button icon="pi pi-cog" rounded severity="help" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
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
...`}}},mounted(){C.getProductsSmall().then(s=>this.products=s.slice(0,9))},methods:{getSeverity(s){switch(s){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},je=e("p",null,[o(" Carousel supports specific configuration per screen size with the "),e("i",null,"responsiveOptions"),o(" property that takes an array of objects where each object defines the max-width "),e("i",null,"breakpoint"),o(", "),e("i",null,"numVisible"),o(" for the number of items items per page and "),e("i",null,"numScroll"),o(" for number of items to scroll. When "),e("i",null,"responsiveOptions"),o(" is defined, the "),e("i",null,"numScroll"),o(" and "),e("i",null,"numVisible"),o(" properties of the Carousel are used as default when there is breakpoint that applies. ")],-1),qe={class:"card"},ze={class:"border-1 surface-border border-round m-2 text-center py-5 px-3"},He={class:"mb-3"},Re=["src","alt"],Ee={class:"mb-1"},Qe={class:"mt-0 mb-3"},Ge={class:"mt-5"};function Je(s,h,d,g,i,p){const a=f,c=u("Tag"),n=u("Button"),_=u("Carousel"),S=w;return v(),y(P,null,[t(a,O(x(s.$attrs)),{default:l(()=>[je]),_:1},16),e("div",qe,[t(_,{value:i.products,numVisible:3,numScroll:1,responsiveOptions:i.responsiveOptions},{item:l(r=>[e("div",ze,[e("div",He,[e("img",{src:"https://primefaces.org/cdn/primevue/images/product/"+r.data.image,alt:r.data.name,class:"w-6 shadow-2"},null,8,Re)]),e("div",null,[e("h4",Ee,b(r.data.name),1),e("h6",Qe,"$"+b(r.data.price),1),t(c,{value:r.data.inventoryStatus,severity:p.getSeverity(r.data.inventoryStatus)},null,8,["value","severity"]),e("div",Ge,[t(n,{icon:"pi pi-search",rounded:"",class:"mr-2"}),t(n,{icon:"pi pi-star-fill",rounded:"",severity:"success",class:"mr-2"}),t(n,{icon:"pi pi-cog",rounded:"",severity:"help"})])])])]),_:1},8,["value","responsiveOptions"])]),t(S,{code:i.code,service:["ProductService"]},null,8,["code"])],64)}const Xe=m(Ae,[["render",Je]]),Ye={data(){return{products:null,responsiveOptions:[{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"600px",numVisible:2,numScroll:2},{breakpoint:"480px",numVisible:1,numScroll:1}],code:{basic:`<Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="360px"
    :responsiveOptions="responsiveOptions" containerClass="w-30rem" contentClass="flex align-items-center">
    <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div class="mb-3">
                <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
            </div>
            <div>
                <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                <div class="mt-5">
                    <Button icon="pi pi-search" rounded class="mr-2" />
                    <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                    <Button icon="pi pi-cog" rounded severity="help" />
                </div>
            </div>
        </div>
    </template>
</Carousel>`,options:`<template>
    <div class="card">
        <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="360px"
            :responsiveOptions="responsiveOptions" containerClass="w-30rem" contentClass="flex align-items-center">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                            <Button icon="pi pi-cog" rounded severity="help" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '600px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '480px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 9)));
    },
    methods: {
        getSeverity(status) {
            switch (status) {
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
        <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="vertical" verticalViewPortHeight="360px"
            :responsiveOptions="responsiveOptions" containerClass="w-30rem" contentClass="flex align-items-center">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                            <Button icon="pi pi-cog" rounded severity="help" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '600px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
    }
]);
const getSeverity = (status) => {
    switch (status) {
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
...`}}},mounted(){C.getProductsSmall().then(s=>this.products=s.slice(0,9))},methods:{getSeverity(s){switch(s){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},Ze=e("p",null,[o("To create a vertical Carousel, "),e("i",null,"orientation"),o(" needs to be set to "),e("i",null,"vertical"),o(" along with a "),e("i",null,"verticalViewPortHeight"),o(".")],-1),et={class:"card"},tt={class:"border-1 surface-border border-round m-2 text-center py-5 px-3"},st={class:"mb-3"},ot=["src","alt"],rt={class:"mb-1"},it={class:"mt-0 mb-3"},nt={class:"mt-5"};function at(s,h,d,g,i,p){const a=f,c=u("Tag"),n=u("Button"),_=u("Carousel"),S=w;return v(),y(P,null,[t(a,O(x(s.$attrs)),{default:l(()=>[Ze]),_:1},16),e("div",et,[t(_,{value:i.products,numVisible:1,numScroll:1,orientation:"vertical",verticalViewPortHeight:"360px",responsiveOptions:i.responsiveOptions,containerClass:"w-30rem",contentClass:"flex align-items-center"},{item:l(r=>[e("div",tt,[e("div",st,[e("img",{src:"https://primefaces.org/cdn/primevue/images/product/"+r.data.image,alt:r.data.name,class:"w-6 shadow-2"},null,8,ot)]),e("div",null,[e("h4",rt,b(r.data.name),1),e("h6",it,"$"+b(r.data.price),1),t(c,{value:r.data.inventoryStatus,severity:p.getSeverity(r.data.inventoryStatus)},null,8,["value","severity"]),e("div",nt,[t(n,{icon:"pi pi-search",rounded:"",class:"mr-2"}),t(n,{icon:"pi pi-star-fill",rounded:"",severity:"success",class:"mr-2"}),t(n,{icon:"pi pi-cog",rounded:"",severity:"help"})])])])]),_:1},8,["value","responsiveOptions"])]),t(S,{code:i.code,service:["ProductService"]},null,8,["code"])],64)}const ct=m(Ye,[["render",at]]),lt={data(){return{products:null,responsiveOptions:[{breakpoint:"1199px",numVisible:3,numScroll:3},{breakpoint:"991px",numVisible:2,numScroll:2},{breakpoint:"767px",numVisible:1,numScroll:1}],code:{basic:`<Carousel
    :value="products"
    :numVisible="3"
    :numScroll="3"
    :responsiveOptions="responsiveOptions"
    :pt="{
        indicatorButton: { class: 'border-round-lg' }
    }"
>
    <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div class="mb-3">
                <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
            </div>
            <div>
                <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                <div class="mt-5">
                    <Button icon="pi pi-search" rounded class="mr-2" />
                    <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                </div>
            </div>
        </div>
    </template>
</Carousel>`,options:`<template>
    <div class="card">
        <Carousel
            :value="products"
            :numVisible="3"
            :numScroll="3"
            :responsiveOptions="responsiveOptions"
            :pt="{
                indicatorButton: { class: 'border-round-lg' }
            }"
        >
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            responsiveOptions: [
                {
                    breakpoint: '1199px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '991px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '767px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data.slice(0, 9)));
    },
    methods: {
        getSeverity(status) {
            switch (status) {
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
        <Carousel
            :value="products"
            :numVisible="3"
            :numScroll="3"
            :responsiveOptions="responsiveOptions"
            :pt="{
                indicatorButton: { class: 'border-round-lg' }
            }"
        >
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-6 shadow-2" />
                    </div>
                    <div>
                        <h4 class="mb-1">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
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
...`}}},mounted(){C.getProductsSmall().then(s=>this.products=s.slice(0,9))},methods:{getSeverity(s){switch(s){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},dt={class:"card"},ut={class:"border-1 surface-border border-round m-2 text-center py-5 px-3"},pt={class:"mb-3"},mt=["src","alt"],vt={class:"mb-1"},ht={class:"mt-0 mb-3"},bt={class:"mt-5"};function gt(s,h,d,g,i,p){const a=f,c=u("Tag"),n=u("Button"),_=u("Carousel"),S=w;return v(),y(P,null,[t(a,O(x(s.$attrs)),null,16),e("div",dt,[t(_,{value:i.products,numVisible:3,numScroll:3,responsiveOptions:i.responsiveOptions,pt:{indicatorButton:{class:"border-round-lg"}}},{item:l(r=>[e("div",ut,[e("div",pt,[e("img",{src:"https://primefaces.org/cdn/primevue/images/product/"+r.data.image,alt:r.data.name,class:"w-6 shadow-2"},null,8,mt)]),e("div",null,[e("h4",vt,b(r.data.name),1),e("h6",ht,"$"+b(r.data.price),1),t(c,{value:r.data.inventoryStatus,severity:p.getSeverity(r.data.inventoryStatus)},null,8,["value","severity"]),e("div",bt,[t(n,{icon:"pi pi-search",rounded:"",class:"mr-2"}),t(n,{icon:"pi pi-star-fill",rounded:"",severity:"success",class:"mr-2"})])])])]),_:1},8,["value","responsiveOptions"])]),t(S,{code:i.code,service:["ProductService"]},null,8,["code"])],64)}const _t=m(lt,[["render",gt]]),St={},ft=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/wireframe-placeholder.jpg"})],-1);function yt(s,h){const d=f;return v(),y(P,null,[t(d,O(x(s.$attrs)),{default:l(()=>[e("p",null,b(s.$attrs.description),1)]),_:1},16),ft],64)}const Pt=m(St,[["render",yt]]),Ot={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Pt},{id:"pt.doc.carousel",label:"Carousel PT Options",component:K,data:N("Carousel")},{id:"pt.demo",label:"Demo",component:_t}]}}},xt={class:"doc-main"},wt=e("div",{class:"doc-intro"},[e("h1",null,"Carousel Pass Through")],-1);function Ct(s,h,d,g,i,p){const a=$,c=V;return v(),y(P,null,[e("div",xt,[wt,t(a,{docs:i.docs},null,8,["docs"])]),t(c,{docs:i.docs},null,8,["docs"])],64)}const Tt=m(Ot,[["render",Ct]]),$t={},Vt=e("p",null,"List of class names used in the styled mode.",-1),kt=D('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-carousel</td><td>Container element.</td></tr><tr><td>p-carousel-header</td><td>Header section.</td></tr><tr><td>p-carousel-footer</td><td>Footer section.</td></tr><tr><td>p-carousel-content</td><td>Main content element. It contains the container of the viewport.</td></tr><tr><td>p-carousel-container</td><td>Container of the viewport. It contains navigation buttons and viewport.</td></tr><tr><td>p-carousel-items-content</td><td>Viewport.</td></tr><tr><td>p-carousel-indicators</td><td>Container of the indicators.</td></tr><tr><td>p-carousel-indicator</td><td>Indicator element.</td></tr></tbody></table></div>',1);function Bt(s,h){const d=f;return v(),y(P,null,[t(d,O(x(s.$attrs)),{default:l(()=>[Vt]),_:1},16),kt],64)}const Kt=m($t,[["render",Bt]]),Dt={data(){return{code1:{basic:`
export default {
    carousel: {
        root: 'flex flex-col',
        content: 'flex flex-col overflow-auto',
        container: ({ props }) => ({
            class: [
                'flex',
                {
                    'flex-row': props.orientation !== 'vertical',
                    'flex-col': props.orientation == 'vertical'
                }
            ]
        }),
        previousbutton: {
            class: ['flex justify-center items-center self-center overflow-hidden relative shrink-0 grow-0', 'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mx-2']
        },
        itemscontent: 'overflow-hidden w-full',
        itemscontainer: ({ props }) => ({
            class: [
                'flex ',
                {
                    'flex-row': props.orientation !== 'vertical',
                    'flex-col h-full': props.orientation == 'vertical'
                }
            ]
        }),
        item: ({ props }) => ({
            class: [
                'flex shrink-0 grow',
                {
                    'w-1/3': props.orientation !== 'vertical',
                    'w-full': props.orientation == 'vertical'
                }
            ]
        }),
        indicators: {
            class: ['flex flex-row justify-center flex-wrap']
        },
        indicator: 'mr-2 mb-2',
        indicatorbutton: ({ context }) => ({
            class: [
                'w-8 h-2 transition duration-200 rounded-0',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600': !context.highlighted,
                    'bg-blue-500 hover:bg-blue-600': context.highlighted
                }
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40 rounded-lg m-2 text-center py-5 px-3">
                    <div class="mb-3">
                        <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-1/2 shadow-sm" />
                    </div>
                    <div>
                        <h4 class="mb-1 text-gray-700 dark:text-white/80">{{ slotProps.data.name }}</h4>
                        <h6 class="mt-0 mb-3 text-gray-700 dark:text-white/80">\${{ slotProps.data.price }}</h6>
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" />
                        <div class="mt-5">
                            <Button icon="pi pi-search" rounded class="mr-2 text-gray-700 dark:text-white/80 inline-flex" />
                            <Button icon="pi pi-star-fill" rounded severity="success" class="mr-2 text-gray-700 dark:text-white/80 inline-flex" />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);

const getSeverity = (status) => {
    switch (status) {
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

<\/script>`}}}},It=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Nt(s,h,d,g,i,p){const a=W,c=w,n=f;return v(),T(n,O(x(s.$attrs)),{default:l(()=>[e("p",null,[o(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(a,{to:"/tailwind"},{default:l(()=>[o("Tailwind Customization")]),_:1}),o(" section for an example. ")]),t(c,{code:i.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),It,t(c,{code:i.code2,embedded:"",service:["ProductService"]},null,8,["code"])]),_:1},16)}const Wt=m(Dt,[["render",Nt]]),Lt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Kt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Wt}]}]}}},Ft={class:"doc-main"},Mt=e("div",{class:"doc-intro"},[e("h1",null,"Carousel Theming")],-1);function Ut(s,h,d,g,i,p){const a=$,c=V;return v(),y(P,null,[e("div",Ft,[Mt,t(a,{docs:i.docs},null,8,["docs"])]),t(c,{docs:i.docs},null,8,["docs"])],64)}const At=m(Lt,[["render",Ut]]),jt={data(){return{docs:[{id:"import",label:"Import",component:Ve},{id:"basic",label:"Basic",component:he},{id:"circular",label:"Circular",component:Ce},{id:"numscroll",label:"Num Scroll",component:Ue},{id:"responsive",label:"Responsive",component:Xe},{id:"vertical",label:"Vertical",component:ct},{id:"accessibility",label:"Accessibility",component:re}],ptComponent:Tt,themingDoc:At}}};function qt(s,h,d,g,i,p){const a=I;return v(),T(a,{title:"Vue Carousel Component",header:"Carousel",description:"Carousel is a content slider featuring various customization options.",componentDocs:i.docs,apiDocs:["Carousel"],ptTabComponent:i.ptComponent,themingDocs:i.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Qt=m(jt,[["render",qt]]);export{Qt as default};
