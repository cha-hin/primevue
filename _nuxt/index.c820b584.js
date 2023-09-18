import{_ as r,o as d,e as g,w as a,m as z,b as t,f as p,h,j as v,c as S,a as e,n as f,g as b,F as k,p as w,t as D,D as T,k as x,l as $,v as R,x as P}from"./entry.68beb385.js";import{g as N}from"./PTHelper.11558b27.js";import{_ as q}from"./PrimeVueNuxtLink.f51d0c80.js";const A={},V=t("h3",null,"Screen Reader",-1),j=t("p",null,[p(" Skeleton uses "),t("i",null,"aria-hidden"),p(' as "true" so that it gets ignored by screen readers, any valid attribute is passed to the root element so you may customize it further if required. If multiple skeletons are grouped inside a container, you may use '),t("i",null,"aria-busy"),p(" on the container element as well to indicate the loading process. ")],-1),B=t("h3",null,"Keyboard Support",-1),F=t("div",{class:"doc-tablewrapper"},[t("p",null,"Component does not include any interactive elements.")],-1);function I(o,m){const i=h;return d(),g(i,z({id:"accessibility",label:"Accessibility"},o.$attrs),{default:a(()=>[V,j,B,F]),_:1},16)}const L=r(A,[["render",I]]),Q={data(){return{code:{basic:`<div class="border-round border-1 surface-border p-4 surface-card">
    <div class="flex mb-3">
        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
        <div>
            <Skeleton width="10rem" class="mb-2"></Skeleton>
            <Skeleton width="5rem" class="mb-2"></Skeleton>
            <Skeleton height=".5rem"></Skeleton>
        </div>
    </div>
    <Skeleton width="100%" height="150px"></Skeleton>
    <div class="flex justify-content-between mt-3">
        <Skeleton width="4rem" height="2rem"></Skeleton>
        <Skeleton width="4rem" height="2rem"></Skeleton>
    </div>
</div>`,options:`<template>
    <div class="card">
        <div class="border-round border-1 surface-border p-4 surface-card">
            <div class="flex mb-3">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div>
                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                    <Skeleton width="5rem" class="mb-2"></Skeleton>
                    <Skeleton height=".5rem"></Skeleton>
                </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div class="flex justify-content-between mt-3">
                <Skeleton width="4rem" height="2rem"></Skeleton>
                <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
        </div>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <div class="border-round border-1 surface-border p-4 surface-card">
            <div class="flex mb-3">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div>
                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                    <Skeleton width="5rem" class="mb-2"></Skeleton>
                    <Skeleton height=".5rem"></Skeleton>
                </div>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
            <div class="flex justify-content-between mt-3">
                <Skeleton width="4rem" height="2rem"></Skeleton>
                <Skeleton width="4rem" height="2rem"></Skeleton>
            </div>
        </div>
    </div>
</template>

<script setup>
<\/script>`}}}},E=t("p",null,"Sample Card implementation using different Skeleton components and PrimeFlex CSS utilities.",-1),O={class:"card"},K={class:"border-round border-1 surface-border p-4 surface-card"},U={class:"flex mb-3"},W={class:"flex justify-content-between mt-3"};function G(o,m,i,u,s,_){const n=h,l=v("Skeleton"),c=w;return d(),S(k,null,[e(n,f(b(o.$attrs)),{default:a(()=>[E]),_:1},16),t("div",O,[t("div",K,[t("div",U,[e(l,{shape:"circle",size:"4rem",class:"mr-2"}),t("div",null,[e(l,{width:"10rem",class:"mb-2"}),e(l,{width:"5rem",class:"mb-2"}),e(l,{height:".5rem"})])]),e(l,{width:"100%",height:"150px"}),t("div",W,[e(l,{width:"4rem",height:"2rem"}),e(l,{width:"4rem",height:"2rem"})])])]),e(c,{code:s.code},null,8,["code"])],64)}const H=r(Q,[["render",G]]),J={data(){return{code:{basic:`<DataTable :value="products">
    <Column field="code" header="Code">
        <template #body>
            <Skeleton></Skeleton>
        </template>
    </Column>
    <Column field="name" header="Name">
        <template #body>
            <Skeleton></Skeleton>
        </template>
    </Column>
    <Column field="category" header="Category">
        <template #body>
            <Skeleton></Skeleton>
        </template>
    </Column>
    <Column field="quantity" header="Quantity">
        <template #body>
            <Skeleton></Skeleton>
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products">
            <Column field="code" header="Code">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="name" header="Name">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="category" header="Category">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="quantity" header="Quantity">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: new Array(4)
        };
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products">
            <Column field="code" header="Code">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="name" header="Name">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="category" header="Category">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
            <Column field="quantity" header="Quantity">
                <template #body>
                    <Skeleton></Skeleton>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref(new Array(4));
<\/script>`},products:new Array(4)}}},M=t("p",null,"Sample DataTable implementation using different Skeleton components and PrimeFlex CSS utilities.",-1),X={class:"card"};function Y(o,m,i,u,s,_){const n=h,l=v("Skeleton"),c=v("Column"),y=v("DataTable"),C=w;return d(),S(k,null,[e(n,f(b(o.$attrs)),{default:a(()=>[M]),_:1},16),t("div",X,[e(y,{value:s.products},{default:a(()=>[e(c,{field:"code",header:"Code"},{body:a(()=>[e(l)]),_:1}),e(c,{field:"name",header:"Name"},{body:a(()=>[e(l)]),_:1}),e(c,{field:"category",header:"Category"},{body:a(()=>[e(l)]),_:1}),e(c,{field:"quantity",header:"Quantity"},{body:a(()=>[e(l)]),_:1})]),_:1},8,["value"])]),e(C,{code:s.code},null,8,["code"])],64)}const Z=r(J,[["render",Y]]),ee={data(){return{code:{basic:"import Skeleton from 'primevue/skeleton';"}}}};function te(o,m,i,u,s,_){const n=h,l=w;return d(),S(k,null,[e(n,f(b(o.$attrs)),null,16),e(l,{code:s.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const le=r(ee,[["render",te]]),se={data(){return{code:{basic:`<div class="border-round border-1 surface-border p-4 surface-card">
    <ul class="m-0 p-0 list-none">
        <li class="mb-3">
            <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div class="align-self-center" style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li class="mb-3">
            <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div class="align-self-center" style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li class="mb-3">
            <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div class="align-self-center" style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li>
            <div class="flex">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <div class="align-self-center" style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
    </ul>
</div>`,options:`<template>
    <div class="border-round border-1 surface-border p-4 surface-card">
        <ul class="m-0 p-0 list-none">
            <li class="mb-3">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-3">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-3">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="border-round border-1 surface-border p-4 surface-card">
        <ul class="m-0 p-0 list-none">
            <li class="mb-3">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-3">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-3">
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <div class="align-self-center" style="flex: 1">
                        <Skeleton width="100%" class="mb-2"></Skeleton>
                        <Skeleton width="75%"></Skeleton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
<\/script>`}}}},oe=t("p",null,"Sample List implementation using different Skeleton components and PrimeFlex CSS utilities.",-1),ne={class:"card"},ie={class:"border-round border-1 surface-border p-4 surface-card"},ce={class:"m-0 p-0 list-none"},ae={class:"mb-3"},re={class:"flex"},de={class:"align-self-center",style:{flex:"1"}},me={class:"mb-3"},pe={class:"flex"},he={class:"align-self-center",style:{flex:"1"}},Se={class:"mb-3"},ke={class:"flex"},ue={class:"align-self-center",style:{flex:"1"}},_e={class:"flex"},fe={class:"align-self-center",style:{flex:"1"}};function be(o,m,i,u,s,_){const n=h,l=v("Skeleton"),c=w;return d(),S(k,null,[e(n,f(b(o.$attrs)),{default:a(()=>[oe]),_:1},16),t("div",ne,[t("div",ie,[t("ul",ce,[t("li",ae,[t("div",re,[e(l,{shape:"circle",size:"4rem",class:"mr-2"}),t("div",de,[e(l,{width:"100%",class:"mb-2"}),e(l,{width:"75%"})])])]),t("li",me,[t("div",pe,[e(l,{shape:"circle",size:"4rem",class:"mr-2"}),t("div",he,[e(l,{width:"100%",class:"mb-2"}),e(l,{width:"75%"})])])]),t("li",Se,[t("div",ke,[e(l,{shape:"circle",size:"4rem",class:"mr-2"}),t("div",ue,[e(l,{width:"100%",class:"mb-2"}),e(l,{width:"75%"})])])]),t("li",null,[t("div",_e,[e(l,{shape:"circle",size:"4rem",class:"mr-2"}),t("div",fe,[e(l,{width:"100%",class:"mb-2"}),e(l,{width:"75%"})])])])])])]),e(c,{code:s.code},null,8,["code"])],64)}const ve=r(se,[["render",be]]),we={data(){return{code:{basic:`<h5>Rectangle</h5>
<Skeleton class="mb-2"></Skeleton>
<Skeleton width="10rem" class="mb-2"></Skeleton>
<Skeleton width="5rem" class="mb-2"></Skeleton>
<Skeleton height="2rem" class="mb-2"></Skeleton>
<Skeleton width="10rem" height="4rem"></Skeleton>

<h5>Rounded</h5>
<Skeleton class="mb-2" borderRadius="16px"></Skeleton>
<Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
<Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
<Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
<Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>

<h5 class="mt-3">Square</h5>
<Skeleton size="2rem" class="mr-2"></Skeleton>
<Skeleton size="3rem" class="mr-2"></Skeleton>
<Skeleton size="4rem" class="mr-2"></Skeleton>
<Skeleton size="5rem"></Skeleton>

<h5 class="mt-3">Circle</h5>
<Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
<Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
<Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
<Skeleton shape="circle" size="5rem"></Skeleton>`,options:`<template>
    <div class="card">
        <div class="flex flex-wrap">
            <div class="w-full md:w-6 p-3">
                <h5>Rectangle</h5>
                <Skeleton class="mb-2"></Skeleton>
                <Skeleton width="10rem" class="mb-2"></Skeleton>
                <Skeleton width="5rem" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2"></Skeleton>
                <Skeleton width="10rem" height="4rem"></Skeleton>
            </div>
            <div class="field col-12 md:col-6">
                <h5>Rounded</h5>
                <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
            </div>
            <div class="field col-12 md:col-6">
                <h5 class="mt-3">Square</h5>
                <div class="flex align-items-end">
                    <Skeleton size="2rem" class="mr-2"></Skeleton>
                    <Skeleton size="3rem" class="mr-2"></Skeleton>
                    <Skeleton size="4rem" class="mr-2"></Skeleton>
                    <Skeleton size="5rem"></Skeleton>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <h5 class="mt-3">Circle</h5>
                <div class="flex align-items-end">
                    <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="5rem"></Skeleton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex flex-wrap">
            <div class="w-full md:w-6 p-3">
                <h5>Rectangle</h5>
                <Skeleton class="mb-2"></Skeleton>
                <Skeleton width="10rem" class="mb-2"></Skeleton>
                <Skeleton width="5rem" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2"></Skeleton>
                <Skeleton width="10rem" height="4rem"></Skeleton>
            </div>
            <div class="field col-12 md:col-6">
                <h5>Rounded</h5>
                <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
                <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
            </div>
            <div class="field col-12 md:col-6">
                <h5 class="mt-3">Square</h5>
                <div class="flex align-items-end">
                    <Skeleton size="2rem" class="mr-2"></Skeleton>
                    <Skeleton size="3rem" class="mr-2"></Skeleton>
                    <Skeleton size="4rem" class="mr-2"></Skeleton>
                    <Skeleton size="5rem"></Skeleton>
                </div>
            </div>
            <div class="field col-12 md:col-6">
                <h5 class="mt-3">Circle</h5>
                <div class="flex align-items-end">
                    <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="5rem"></Skeleton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
<\/script>`}}}},ge=t("p",null,[p("Various shapes and sizes can be created using styling properties like "),t("i",null,"shape"),p(", "),t("i",null,"width"),p(", "),t("i",null,"height"),p(", "),t("i",null,"borderRadius"),p(" and "),t("i",null,"class"),p(".")],-1),xe={class:"card"},$e={class:"flex flex-wrap"},ye={class:"w-full md:w-6 p-3"},Ce=t("h5",null,"Rectangle",-1),ze={class:"field col-12 md:col-6"},De=t("h5",null,"Rounded",-1),Te={class:"field col-12 md:col-6"},Re=t("h5",{class:"mt-3"},"Square",-1),Pe={class:"flex align-items-end"},Ne={class:"field col-12 md:col-6"},qe=t("h5",{class:"mt-3"},"Circle",-1),Ae={class:"flex align-items-end"};function Ve(o,m,i,u,s,_){const n=h,l=v("Skeleton"),c=w;return d(),S(k,null,[e(n,f(b(o.$attrs)),{default:a(()=>[ge]),_:1},16),t("div",xe,[t("div",$e,[t("div",ye,[Ce,e(l,{class:"mb-2"}),e(l,{width:"10rem",class:"mb-2"}),e(l,{width:"5rem",class:"mb-2"}),e(l,{height:"2rem",class:"mb-2"}),e(l,{width:"10rem",height:"4rem"})]),t("div",ze,[De,e(l,{class:"mb-2",borderRadius:"16px"}),e(l,{width:"10rem",class:"mb-2",borderRadius:"16px"}),e(l,{width:"5rem",borderRadius:"16px",class:"mb-2"}),e(l,{height:"2rem",class:"mb-2",borderRadius:"16px"}),e(l,{width:"10rem",height:"4rem",borderRadius:"16px"})]),t("div",Te,[Re,t("div",Pe,[e(l,{size:"2rem",class:"mr-2"}),e(l,{size:"3rem",class:"mr-2"}),e(l,{size:"4rem",class:"mr-2"}),e(l,{size:"5rem"})])]),t("div",Ne,[qe,t("div",Ae,[e(l,{shape:"circle",size:"2rem",class:"mr-2"}),e(l,{shape:"circle",size:"3rem",class:"mr-2"}),e(l,{shape:"circle",size:"4rem",class:"mr-2"}),e(l,{shape:"circle",size:"5rem"})])])])]),e(c,{code:s.code},null,8,["code"])],64)}const je=r(we,[["render",Ve]]),Be={data(){return{code:{basic:`<Skeleton
    :pt="{
        root: { class: 'w-3rem h-3rem' }
    }"
/>`,options:`<template>
    <Skeleton
        :pt="{
            root: { class: 'w-3rem h-3rem' }
        }"
    />
</template>`,composition:`<template>
    <Skeleton
        :pt="{
            root: { class: 'w-3rem h-3rem' }
        }"
    />
</template>`}}}},Fe={class:"card flex justify-content-center"};function Ie(o,m,i,u,s,_){const n=h,l=v("Skeleton"),c=w;return d(),S(k,null,[e(n,f(b(o.$attrs)),null,16),t("div",Fe,[e(l,{pt:{root:{class:"w-3rem h-3rem"}}})]),e(c,{code:s.code},null,8,["code"])],64)}const Le=r(Be,[["render",Ie]]),Qe={},Ee=t("div",{class:"card"},[t("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/skeleton.jpg"})],-1);function Oe(o,m){const i=h;return d(),S(k,null,[e(i,f(b(o.$attrs)),{default:a(()=>[t("p",null,D(o.$attrs.description),1)]),_:1},16),Ee],64)}const Ke=r(Qe,[["render",Oe]]),Ue={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ke},{id:"pt.doc.skeleton",label:"Skeleton PT Options",component:T,data:N("Skeleton")},{id:"pt.demo",label:"Demo",component:Le}]}}},We={class:"doc-main"},Ge=t("div",{class:"doc-intro"},[t("h1",null,"Skeleton Pass Through")],-1);function He(o,m,i,u,s,_){const n=x,l=$;return d(),S(k,null,[t("div",We,[Ge,e(n,{docs:s.docs},null,8,["docs"])]),e(l,{docs:s.docs},null,8,["docs"])],64)}const Je=r(Ue,[["render",He]]),Me={},Xe=t("p",null,"List of class names used in the styled mode.",-1),Ye=R('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-skeleton</td><td>Container element.</td></tr><tr><td>p-skeleton-circle</td><td>Container element of a determinate progressbar.</td></tr><tr><td>p-skeleton-animation-none</td><td>Container element of an indeterminate progressbar.</td></tr></tbody></table></div>',1);function Ze(o,m){const i=h;return d(),S(k,null,[e(i,f(b(o.$attrs)),{default:a(()=>[Xe]),_:1},16),Ye],64)}const et=r(Me,[["render",Ze]]),tt={data(){return{code1:{basic:`
export default {
    skeleton: {
        root: ({ props }) => ({
            class: [
                'overflow-hidden',
                '!mb-2',
                'bg-gray-300 dark:bg-gray-800',
                'after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:content after:w-full after:h-full after:bg-blue-400 after:left-full after:transform after:translate-x-full after:z-10 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent animate-pulse',
                {
                    'rounded-md': props.shape !== 'circle',
                    'rounded-full': props.shape == 'circle'
                }
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card text-gray-700 dark:text-white/80">
        <div class="w-full">
            <h5>Rectangle</h5>
            <Skeleton class="mb-2"></Skeleton>
            <Skeleton width="10rem" class="mb-2"></Skeleton>
            <Skeleton width="5rem" class="mb-2"></Skeleton>
            <Skeleton height="2rem" class="mb-2"></Skeleton>
            <Skeleton width="10rem" height="4rem"></Skeleton>
        </div>
        <div class="w-full">
            <h5>Rounded</h5>
            <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
            <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
            <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
            <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
            <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
        </div>
        <div class="w-full">
            <h5 class="mt-3">Square</h5>
            <div class="flex items-end">
                <Skeleton size="2rem" class="mr-2"></Skeleton>
                <Skeleton size="3rem" class="mr-2"></Skeleton>
                <Skeleton size="4rem" class="mr-2"></Skeleton>
                <Skeleton size="5rem"></Skeleton>
            </div>
        </div>
        <div class="w-full">
            <h5 class="mt-3">Circle</h5>
            <div class="flex items-end">
                <Skeleton shape="circle" size="2rem" class="mr-2"></Skeleton>
                <Skeleton shape="circle" size="3rem" class="mr-2"></Skeleton>
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                <Skeleton shape="circle" size="5rem"></Skeleton>
            </div>
        </div>
    </div>
</template>

<script setup>
<\/script>`}}}},lt=t("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function st(o,m,i,u,s,_){const n=q,l=w,c=h;return d(),g(c,f(b(o.$attrs)),{default:a(()=>[t("p",null,[p(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),e(n,{to:"/tailwind"},{default:a(()=>[p("Tailwind Customization")]),_:1}),p(" section for an example. ")]),e(l,{code:s.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),lt,e(l,{code:s.code2,embedded:""},null,8,["code"])]),_:1},16)}const ot=r(tt,[["render",st]]),nt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:et},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ot}]}]}}},it={class:"doc-main"},ct=t("div",{class:"doc-intro"},[t("h1",null,"Skeleton Theming")],-1);function at(o,m,i,u,s,_){const n=x,l=$;return d(),S(k,null,[t("div",it,[ct,e(n,{docs:s.docs},null,8,["docs"])]),e(l,{docs:s.docs},null,8,["docs"])],64)}const rt=r(nt,[["render",at]]);const dt={data(){return{docs:[{id:"import",label:"Import",component:le},{id:"shapes",label:"Shapes",component:je},{id:"card",label:"Card",component:H},{id:"list",label:"List",component:ve},{id:"datatable",label:"Datatable",component:Z},{id:"accessibility",label:"Accessibility",component:L}],ptComponent:Je,themingDoc:rt}}};function mt(o,m,i,u,s,_){const n=P;return d(),g(n,{title:"Vue Skeleton Component",header:"Skeleton",description:"Skeleton is a placeholder to display instead of the actual content.",componentDocs:s.docs,apiDocs:["Skeleton"],ptTabComponent:s.ptComponent,themingDocs:s.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const kt=r(dt,[["render",mt],["__scopeId","data-v-50fcd50d"]]);export{kt as default};
