import{_ as u,o as d,e as S,w as r,m as B,b as e,f as a,h as _,j as h,c as g,a as n,n as b,g as y,F as f,p as w,t as $,E as k,D as j,k as C,l as T,v as I,x as N}from"./entry.68beb385.js";import{P as W}from"./ProductService.ed9696ca.js";import{g as A}from"./PTHelper.11558b27.js";import{_ as M}from"./PrimeVueNuxtLink.f51d0c80.js";const V={},z=e("h3",null,"Screen Reader",-1),R=e("p",null,[a(" OverlayPanel component uses "),e("i",null,"dialog"),a(" role and since any attribute is passed to the root element you may define attributes like "),e("i",null,"aria-label"),a(" or "),e("i",null,"aria-labelledby"),a(" to describe the popup contents. In addition "),e("i",null,"aria-modal"),a(" is added since focus is kept within the popup. ")],-1),F=e("p",null,[a("OverlayPanel adds "),e("i",null,"aria-expanded"),a(" state attribute and "),e("i",null,"aria-controls"),a(" to the trigger so that the relation between the trigger and the popup is defined.")],-1),K=e("h3",null,"OverlayPanel Keyboard Support",-1),E=e("p",null,[a("When the popup gets opened, the first focusable element receives the focus and this can be customized by adding "),e("i",null,"autofocus"),a(" to an element within the popup.")],-1),q=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next the focusable element within the popup.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),a(" + "),e("i",null,"tab")]),e("td",null,"Moves focus to the previous the focusable element within the popup.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup and moves focus to the trigger.")])])])],-1),L=e("h3",null,"Close Button Keyboard Support",-1),U=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Closes the popup and moves focus to the trigger.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Closes the popup and moves focus to the trigger.")])])])],-1);function G(o,i){const l=_;return d(),S(l,B({id:"accessibility",label:"Accessibility"},o.$attrs),{default:r(()=>[z,R,F,K,E,q,L,U]),_:1},16)}const H=u(V,[["render",G]]),J={data(){return{code:{basic:`<Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

<OverlayPanel ref="op">
    <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
</OverlayPanel>`,options:`<template>
    <div class="card flex justify-content-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <OverlayPanel ref="op">
            <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
        </OverlayPanel>
    </div>
</template>

<script>
export default {
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <OverlayPanel ref="op">
            <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
        </OverlayPanel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}
<\/script>`}}},methods:{toggle(o){this.$refs.op.toggle(o)}}},Q=e("p",null,[a("OverlayPanel is accessed via its reference and visibility is controlled using "),e("i",null,"toggle"),a(", "),e("i",null,"show"),a(" and "),e("i",null,"hide"),a(" methods with an event of the target.")],-1),X={class:"card flex justify-content-center"},Y=e("img",{src:"https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg",alt:"Bamboo Watch"},null,-1);function Z(o,i,l,v,t,p){const c=_,s=h("Button"),m=h("OverlayPanel"),x=w;return d(),g(f,null,[n(c,b(y(o.$attrs)),{default:r(()=>[Q]),_:1},16),e("div",X,[n(s,{type:"button",icon:"pi pi-image",label:"Image",onClick:p.toggle},null,8,["onClick"]),n(m,{ref:"op"},{default:r(()=>[Y]),_:1},512)]),n(x,{code:t.code},null,8,["code"])],64)}const ee=u(J,[["render",Z]]),te={data(){return{products:null,selectedProduct:null,code:{basic:`<Toast />
<Button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" />

<div v-if="selectedProduct" class="p-5 surface-card shadow-2 border-round">
    <div class="relative">
        <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="selectedProduct.name" class="w-4rem shadow-1" />
    </div>
    <div class="flex align-items-center justify-content-between mt-3 mb-2">
        <span class="text-900 font-medium text-xl">{{ selectedProduct.name }}</span>
        <span class="text-900 text-xl ml-3">{{ '$' + selectedProduct.price }}</span>
    </div>
    <span class="text-600">{{ selectedProduct.category }}</span>
</div>

<OverlayPanel ref="op" appendTo="body">
    <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
        <Column field="name" header="Name" sortable style="width: 50%"></Column>
        <Column header="Image" style="width: 20%">
            <template #body="slotProps">
                <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="slotProps.data.image" class="w-4rem shadow-1" />
            </template>
        </Column>
        <Column field="price" header="Price" sortable style="width: 30%">
            <template #body="slotProps">
                {{ slotProps.data.price }}
            </template>
        </Column>
    </DataTable>
</OverlayPanel>`,options:`<template>
    <div class="card flex flex-column align-items-center gap-3">
        <Toast />
        <Button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" />

        <div v-if="selectedProduct" class="p-5 surface-card shadow-2 border-round">
            <div class="relative">
                <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="selectedProduct.name" />
            </div>
            <div class="flex align-items-center justify-content-between mt-3 mb-2">
                <span class="text-900 font-medium text-xl">{{ selectedProduct.name }}</span>
                <span class="text-900 text-xl ml-3">{{ '$' + selectedProduct.price }}</span>
            </div>
            <span class="text-600">{{ selectedProduct.category }}</span>
        </div>

        <OverlayPanel ref="op" appendTo="body">
            <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
                <Column field="name" header="Name" sortable style="min-width: 12rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="slotProps.data.image" class="w-4rem shadow-1" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width: 8rem">
                    <template #body="slotProps">
                        {{ slotProps.data.price }}
                    </template>
                </Column>
            </DataTable>
        </OverlayPanel>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null
        };
    },
    mounted() {
        ProductService.getProductsSmall()
            .then((data) => (this.products = data))
            .then(() => (this.selectedProduct = this.products[0]));
    },
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        },
        onProductSelect(event) {
            this.$refs.op.hide();
            this.$toast.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name, life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-column align-items-center gap-3">
        <Toast />
        <Button type="button" icon="pi pi-search" :label="selectedProduct ? selectedProduct.name : 'Select a Product'" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" />

        <div v-if="selectedProduct" class="p-5 surface-card shadow-2 border-round">
            <div class="relative">
                <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="selectedProduct.name" />
            </div>
            <div class="flex align-items-center justify-content-between mt-3 mb-2">
                <span class="text-900 font-medium text-xl">{{ selectedProduct.name }}</span>
                <span class="text-900 text-xl ml-3">{{ '$' + selectedProduct.price }}</span>
            </div>
            <span class="text-600">{{ selectedProduct.category }}</span>
        </div>

        <OverlayPanel ref="op" appendTo="body">
            <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" :paginator="true" :rows="5" @row-select="onProductSelect">
                <Column field="name" header="Name" sortable style="min-width: 12rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${selectedProduct.image}\`" :alt="slotProps.data.image" class="w-4rem shadow-1" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width: 8rem">
                    <template #body="slotProps">
                        {{ slotProps.data.price }}
                    </template>
                </Column>
            </DataTable>
        </OverlayPanel>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "primevue/usetoast";
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall()
        .then((data) => (products.value = data))
        .then(() => (selectedProduct.value = products.value[0]));
});

const toast = useToast();
const op = ref();
const products = ref();
const selectedProduct = ref();

const toggle = (event) => {
    op.value.toggle(event);
};

const onProductSelect = (event) => {
    op.value.hide();
    toast.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name, life: 3000 });
}
<\/script>`,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: '/bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){W.getProductsSmall().then(o=>this.products=o).then(()=>this.selectedProduct=this.products[0])},methods:{toggle(o){this.$refs.op.toggle(o)},onProductSelect(o){this.$refs.op.hide(),this.$toast.add({severity:"info",summary:"Product Selected",detail:o.data.name,life:3e3})}}},oe=e("p",null,"An example that displays a DataTable inside a popup to select an item.",-1),ne={class:"card flex flex-column align-items-center gap-3"},ae={key:0,class:"p-5 surface-card shadow-2 border-round"},ce={class:"relative"},se=["src","alt"],le={class:"flex align-items-center justify-content-between mt-3 mb-2"},re={class:"text-900 font-medium text-xl"},ie={class:"text-900 text-xl ml-3"},de={class:"text-600"},pe=["src","alt"];function ue(o,i,l,v,t,p){const c=_,s=h("Button"),m=h("Column"),x=h("DataTable"),D=h("OverlayPanel"),O=w;return d(),g(f,null,[n(c,b(y(o.$attrs)),{default:r(()=>[oe]),_:1},16),e("div",ne,[n(s,{type:"button",icon:"pi pi-search",label:t.selectedProduct?t.selectedProduct.name:"Select a Product",onClick:p.toggle,"aria-haspopup":"true","aria-controls":"overlay_panel"},null,8,["label","onClick"]),t.selectedProduct?(d(),g("div",ae,[e("div",ce,[e("img",{src:`https://primefaces.org/cdn/primevue/images/product/${t.selectedProduct.image}`,alt:t.selectedProduct.name},null,8,se)]),e("div",le,[e("span",re,$(t.selectedProduct.name),1),e("span",ie,$("$"+t.selectedProduct.price),1)]),e("span",de,$(t.selectedProduct.category),1)])):k("",!0),n(D,{ref:"op",appendTo:"body"},{default:r(()=>[n(x,{selection:t.selectedProduct,"onUpdate:selection":i[0]||(i[0]=P=>t.selectedProduct=P),value:t.products,selectionMode:"single",paginator:!0,rows:5,onRowSelect:p.onProductSelect},{default:r(()=>[n(m,{field:"name",header:"Name",sortable:"",style:{"min-width":"12rem"}}),n(m,{header:"Image"},{body:r(P=>[e("img",{src:`https://primefaces.org/cdn/primevue/images/product/${P.data.image}`,alt:P.data.image,class:"w-4rem shadow-1"},null,8,pe)]),_:1}),n(m,{field:"price",header:"Price",sortable:"",style:{"min-width":"8rem"}},{body:r(P=>[a($(P.data.price),1)]),_:1})]),_:1},8,["selection","value","onRowSelect"])]),_:1},512)]),n(O,{code:t.code,service:["ProductService"]},null,8,["code"])],64)}const me=u(te,[["render",ue]]),ge={data(){return{code:{basic:"import OverlayPanel from 'primevue/overlaypanel';"}}}};function he(o,i,l,v,t,p){const c=_,s=w;return d(),g(f,null,[n(c,b(y(o.$attrs)),null,16),n(s,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const _e=u(ge,[["render",he]]),fe={data(){return{code:{basic:`<Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

<OverlayPanel ref="op"
    :pt="{
        root: { class: 'surface-ground' }
    }"
>
    <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
</OverlayPanel>`,options:`<template>
    <div class="card flex justify-content-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <OverlayPanel ref="op"
            :pt="{
                root: { class: 'surface-ground' }
            }"
        >
            <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
        </OverlayPanel>
    </div>
</template>

<script>
export default {
    methods: {
        toggle(event) {
            this.$refs.op.toggle(event);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <OverlayPanel ref="op"
            :pt="{
                root: { class: 'surface-ground' }
            }"
        >
            <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
        </OverlayPanel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}
<\/script>`}}},methods:{toggle(o){this.$refs.op.toggle(o)}}},ve={class:"card flex justify-content-center"},be=e("img",{src:"https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg",alt:"Bamboo Watch"},null,-1);function ye(o,i,l,v,t,p){const c=_,s=h("Button"),m=h("OverlayPanel"),x=w;return d(),g(f,null,[n(c,b(y(o.$attrs)),null,16),e("div",ve,[n(s,{type:"button",icon:"pi pi-image",label:"Image",onClick:p.toggle},null,8,["onClick"]),n(m,{ref:"op",pt:{root:{class:"surface-ground"}}},{default:r(()=>[be]),_:1},512)]),n(x,{code:t.code},null,8,["code"])],64)}const Pe=u(fe,[["render",ye]]),xe={},$e=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/overlaypanel.jpg"})],-1);function we(o,i){const l=_;return d(),g(f,null,[n(l,b(y(o.$attrs)),{default:r(()=>[e("p",null,$(o.$attrs.description),1)]),_:1},16),$e],64)}const Se=u(xe,[["render",we]]),Ce={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Se},{id:"pt.doc.overlaypanel",label:"OverlayPanel PT Options",component:j,data:A("OverlayPanel")},{id:"pt.demo",label:"Demo",component:Pe}]}}},Te={class:"doc-main"},De=e("div",{class:"doc-intro"},[e("h1",null,"OverlayPanel Pass Through")],-1);function Oe(o,i,l,v,t,p){const c=C,s=T;return d(),g(f,null,[e("div",Te,[De,n(c,{docs:t.docs},null,8,["docs"])]),n(s,{docs:t.docs},null,8,["docs"])],64)}const Be=u(Ce,[["render",Oe]]),ke={},je=e("p",null,"List of class names used in the styled mode.",-1),Ie=I('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-overlaypanel</td><td>Container element.</td></tr><tr><td>p-overlaypanel-content</td><td>Content of the panel.</td></tr><tr><td>p-overlaypanel-close</td><td>Close icon.</td></tr></tbody></table></div>',1);function Ne(o,i){const l=_;return d(),g(f,null,[n(l,b(y(o.$attrs)),{default:r(()=>[je]),_:1},16),Ie],64)}const We=u(ke,[["render",Ne]]),Ae={data(){return{code1:{basic:`
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
export default {
    overlaypanel: {
        root: {
            class: [
                'bg-white text-gray-700 border-0 rounded-md shadow-lg',
                'z-40 transform origin-center',
                'absolute left-0 top-0',
                'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-white dark:before:border-b-gray-900',
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            ]
        },
        content: 'p-5 items-center flex',
        transition: TRANSITIONS.overlay
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Button type="button" icon="pi pi-image" label="Image" @click="toggle" />

        <OverlayPanel ref="op">
            <img src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg" alt="Bamboo Watch" />
        </OverlayPanel>
    </div>
</template>

<script setup>
import { ref } from "vue";

const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}
<\/script>`}}}},Me=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ve(o,i,l,v,t,p){const c=M,s=w,m=_;return d(),S(m,b(y(o.$attrs)),{default:r(()=>[e("p",null,[a(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(c,{to:"/tailwind"},{default:r(()=>[a("Tailwind Customization")]),_:1}),a(" section for an example. ")]),n(s,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Me,n(s,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const ze=u(Ae,[["render",Ve]]),Re={data(){return{docs:[{id:"theming.styled",label:"Styled",component:We},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ze}]}]}}},Fe={class:"doc-main"},Ke=e("div",{class:"doc-intro"},[e("h1",null,"OverlayPanel Theming")],-1);function Ee(o,i,l,v,t,p){const c=C,s=T;return d(),g(f,null,[e("div",Fe,[Ke,n(c,{docs:t.docs},null,8,["docs"])]),n(s,{docs:t.docs},null,8,["docs"])],64)}const qe=u(Re,[["render",Ee]]),Le={data(){return{docs:[{id:"import",label:"Import",component:_e},{id:"basic",label:"Basic",component:ee},{id:"dataTable",label:"DataTable",component:me},{id:"accessibility",label:"Accessibility",component:H}],ptComponent:Be,themingDoc:qe}}};function Ue(o,i,l,v,t,p){const c=N;return d(),S(c,{title:"Vue Popover Component",header:"OverlayPanel",description:"OverlayPanel, also known as Popover, is a container component that can overlay other components on page.",componentDocs:t.docs,apiDocs:["OverlayPanel"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Xe=u(Le,[["render",Ue]]);export{Xe as default};
