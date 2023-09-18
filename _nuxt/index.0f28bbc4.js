import{_ as d,o as s,e as b,w as m,a as o,m as $,b as e,f as y,p as D,h as u,j as g,c as _,n as h,g as C,F as f,t as P,D as L,k as S,l as T,x as I}from"./entry.68beb385.js";import{P as z}from"./ProductService.ed9696ca.js";import{g as N}from"./PTHelper.11558b27.js";const k={data(){return{code:{basic:`<DeferredContent role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
    Content
</DeferredContent>`}}}},B=e("h3",null,"Screen Reader",-1),R=e("p",null,[y(" DeferredContent can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so you have full control over the roles like "),e("a",{href:"https://www.w3.org/TR/wai-aria/#landmark",alt:"Landmark Roles"},"landmark"),y(" and attributes like "),e("i",null,"aria-live"),y(". ")],-1),j=e("h3",null,"Keyboard Support",-1),A=e("p",null,"Component does not include any interactive elements.",-1);function q(t,l,c,p,n,i){const r=D,a=u;return s(),b(a,$({id:"accessibility",label:"Accessibility"},t.$attrs),{default:m(()=>[B,R,o(r,$({code:n.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},t.$attrs),null,16,["code"]),j,A]),_:1},16)}const Q=d(k,[["render",q]]),V={data(){return{code:{basic:`<DeferredContent @load="onImageLoad">
    <img src="/images/nature/nature4.jpg" alt="Nature" />
</DeferredContent>`,options:`<template>
    <div class="card">
        <Toast />
        <div style="height: 800px">Scroll down to lazy load an image.</div>

        <DeferredContent @load="onImageLoad">
            <img src="https://primefaces.org/cdn/primevue/images/nature/nature4.jpg" alt="Nature" />
        </DeferredContent>
    </div>
</template>

<script>
export default {
    methods: {
        onImageLoad() {
            this.$toast.add({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable', life: 2000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Toast />
        <div style="height: 800px">Scroll down to lazy load an image.</div>

        <DeferredContent @load="onImageLoad">
            <img src="https://primefaces.org/cdn/primevue/images/nature/nature4.jpg" alt="Nature" />
        </DeferredContent>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const onImageLoad = () => {
    toast.add({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable', life: 2000 });
};
<\/script>`}}},methods:{onImageLoad(){this.$toast.add({severity:"success",summary:"Success",detail:"Image loaded",life:2e3})}}},F=e("p",null,"DeferredContent is used by wrapping the target.",-1),O={class:"card"},E=e("div",{style:{height:"800px"}},"Scroll down to lazy load an image.",-1),K=e("img",{src:"https://primefaces.org/cdn/primevue/images/nature/nature4.jpg",alt:"Nature"},null,-1);function W(t,l,c,p,n,i){const r=u,a=g("DeferredContent"),v=D;return s(),_(f,null,[o(r,h(C(t.$attrs)),{default:m(()=>[F]),_:1},16),e("div",O,[E,o(a,{onLoad:i.onImageLoad},{default:m(()=>[K]),_:1},8,["onLoad"])]),o(v,{code:n.code},null,8,["code"])],64)}const G=d(V,[["render",W]]),H={data(){return{code:{basic:`<DeferredContent @load="onDataLoad" role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
    <DataTable :value="products">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</DeferredContent>`,options:`<template>
    <div class="card">
        <Toast />
        <div style="height: 800px">Scroll down to lazy load a DataTable.</div>
        
        <DeferredContent @load="onDataLoad" role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
            <DataTable :value="products">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </DeferredContent>
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
    methods: {
        onDataLoad() {
            ProductService.getProductsSmall().then((data) => (this.products = data));
            this.$toast.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed', life: 2000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Toast />
        <div style="height: 800px">Scroll down to lazy load a DataTable.</div>

        <DeferredContent @load="onDataLoad" role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
            <DataTable :value="products">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </DeferredContent>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ProductService } from '@/service/ProductService';

const products = ref(null);

const onDataLoad = () => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
    toast.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed', life: 2000 });
};
<\/script>`},products:null}},methods:{onDataLoad(){z.getProductsSmall().then(t=>this.products=t),this.$toast.add({severity:"success",summary:"Data Initialized",detail:"Render Completed",life:2e3})}}},J=e("p",null,"A practical example that loads only when table becomes visible in viewport.",-1),M={class:"card"},U=e("div",{style:{height:"800px"}},"Scroll down to lazy load a DataTable.",-1);function X(t,l,c,p,n,i){const r=u,a=g("Column"),v=g("DataTable"),x=g("DeferredContent"),w=D;return s(),_(f,null,[o(r,h(C(t.$attrs)),{default:m(()=>[J]),_:1},16),e("div",M,[U,o(x,{onLoad:i.onDataLoad,role:"region","aria-live":"polite","aria-label":"Content loaded after page scrolled down"},{default:m(()=>[o(v,{value:n.products},{default:m(()=>[o(a,{field:"code",header:"Code"}),o(a,{field:"name",header:"Name"}),o(a,{field:"category",header:"Category"}),o(a,{field:"quantity",header:"Quantity"})]),_:1},8,["value"])]),_:1},8,["onLoad"])]),o(w,$({code:n.code,service:["ProductService"]},t.$attrs),null,16,["code"])],64)}const Y=d(H,[["render",X]]),Z={data(){return{code:{basic:"import DeferredContent from 'primevue/deferredcontent';"}}}};function ee(t,l,c,p,n,i){const r=u,a=D;return s(),_(f,null,[o(r,h(C(t.$attrs)),null,16),o(a,{code:n.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const te=d(Z,[["render",ee]]),oe={},ne=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/deferred.jpg"})],-1);function ae(t,l){const c=u;return s(),_(f,null,[o(c,h(C(t.$attrs)),{default:m(()=>[e("p",null,P(t.$attrs.description),1)]),_:1},16),ne],64)}const re=d(oe,[["render",ae]]),ce={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:re},{id:"pt.doc.deferredcontent",label:"DeferredContent PT Options",component:L,data:N("DeferredContent")}]}}},de={class:"doc-main"},se=e("div",{class:"doc-intro"},[e("h1",null,"DeferredContent Pass Through")],-1);function le(t,l,c,p,n,i){const r=S,a=T;return s(),_(f,null,[e("div",de,[se,o(r,{docs:n.docs},null,8,["docs"])]),o(a,{docs:n.docs},null,8,["docs"])],64)}const ie=d(ce,[["render",le]]),me={},pe=e("p",null,"Component does not apply any styling.",-1);function ue(t,l){const c=u;return s(),b(c,h(C(t.$attrs)),{default:m(()=>[pe]),_:1},16)}const _e=d(me,[["render",ue]]),fe={data(){return{docs:[{id:"theming.styled",label:"Styled",component:_e}]}}},he={class:"doc-main"},Ce=e("div",{class:"doc-intro"},[e("h1",null,"DeferredContent Theming")],-1);function ge(t,l,c,p,n,i){const r=S,a=T;return s(),_(f,null,[e("div",he,[Ce,o(r,{docs:n.docs},null,8,["docs"])]),o(a,{docs:n.docs},null,8,["docs"])],64)}const De=d(fe,[["render",ge]]),ve={data(){return{docs:[{id:"import",label:"Import",component:te},{id:"basic",label:"Basic",component:G},{id:"datatable",label:"DataTable",component:Y},{id:"accessibility",label:"Accessibility",component:Q}],ptComponent:ie,themingDoc:De}}};function ye(t,l,c,p,n,i){const r=I;return s(),b(r,{title:"Vue Deferred Content Component",header:"DeferredContent",description:"DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.",componentDocs:n.docs,apiDocs:["DeferredContent"],ptTabComponent:n.ptComponent,themingDocs:n.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Te=d(ve,[["render",ye]]);export{Te as default};
