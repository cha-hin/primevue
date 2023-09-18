import{_ as r,o as p,e as D,w as l,b as e,f as o,a as t,m as S,C as T,h,j as y,c as f,n as g,g as v,F as b,p as x,t as I,D as P,k as w,l as q,v as V,x as k}from"./entry.68beb385.js";import{P as N}from"./ProductService.ed9696ca.js";import{g as E}from"./PTHelper.11558b27.js";import{_ as L}from"./PrimeVueNuxtLink.f51d0c80.js";const U={},z=e("h3",null,"Screen Reader",-1),B=e("p",null,[o("Inplace component defines "),e("i",null,"aria-live"),o(' as "polite" by default, since any valid attribute is passed to the main container aria roles and attributes of the root element can be customized easily.')],-1),A=e("p",null,[o(" Display element uses "),e("i",null,"button"),o(" role in view mode by default, "),e("i",null,"displayProps"),o(" can be used for customizations like adding "),e("i",null,"aria-label"),o(" or "),e("i",null,"aria-labelledby"),o(" attributes to describe the content of the view mode or even overriding the default role. ")],-1),j=e("i",null,"aria-label",-1),F=e("i",null,"aria.close",-1),K=e("i",null,"closeButtonProps",-1),O=e("i",null,"aria-label",-1),Q=e("h3",null,"View Mode Keyboard Support",-1),R=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Switches to content.")])])])],-1),M=e("h3",null,"Close Button Keyboard Support",-1),W=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Switches to display.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Switches to display.")])])])],-1);function G(a,d){const s=T,u=h;return p(),D(u,S({id:"accessibility",label:"Accessibility"},a.$attrs),{default:l(()=>[z,B,A,e("p",null,[o(" Closable inplace components displays a button with an "),j,o(" that refers to the "),F,o(" property of the "),t(s,{to:"/configuration/#locale"},{default:l(()=>[o("locale")]),_:1}),o(" API by default, you may use "),K,o(" to customize the element and override the default "),O,o(". ")]),Q,R,M,W]),_:1},16)}const H=r(U,[["render",G]]),J={data(){return{code:{basic:`<Inplace>
    <template #display> View Content </template>
    <template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </template>
</Inplace>`,options:`<template>
    <div class="card">
        <Inplace>
            <template #display> View Content </template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </template>
        </Inplace>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card">
        <Inplace>
            <template #display> View Content </template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </template>
        </Inplace>
    </div>
</template>

<script setup>

<\/script>`}}}},X=e("p",null,[e("i",null,"Inplace"),o(" component requires "),e("i",null,"display"),o(" and "),e("i",null,"content"),o(" templates to define the content of each state.")],-1),Y={class:"card"},Z=e("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function ee(a,d,s,u,n,_){const c=h,i=y("Inplace"),m=x;return p(),f(b,null,[t(c,g(v(a.$attrs)),{default:l(()=>[X]),_:1},16),e("div",Y,[t(i,null,{display:l(()=>[o(" View Content ")]),content:l(()=>[Z]),_:1})]),t(m,{code:n.code},null,8,["code"])],64)}const te=r(J,[["render",ee]]),ne={data(){return{code:{basic:`<Inplace>
    <template #display>
        <span class="pi pi-search" style="vertical-align: middle"></span>
        <span style="margin-left: 0.5rem; vertical-align: middle">View Picture</span>
    </template>
    <template #content>
        <img class="w-full" alt="Nature" src="/images/nature/nature1.jpg" />
    </template>
</Inplace>`,options:`<template>
    <div class="card">
        <Inplace>
            <template #display>
                <span class="pi pi-search" style="vertical-align: middle"></span>
                <span style="margin-left: 0.5rem; vertical-align: middle">View Picture</span>
            </template>
            <template #content>
                <img class="w-full" src="https://primefaces.org/cdn/primevue/images/nature/nature1.jpg"/>
            </template>
        </Inplace>
    </div>
</template>
<script>

<\/script>`,composition:`<template>
    <div class="card">
        <Inplace>
            <template #display>
                <span class="pi pi-search" style="vertical-align: middle"></span>
                <span style="margin-left: 0.5rem; vertical-align: middle">View Picture</span>
            </template>
            <template #content>
                <img class="w-full" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature1.jpg" />
            </template>
        </Inplace>
    </div>
</template>

<script setup>

<\/script>`}}}},oe=e("p",null,"Any content such as an image can be placed inside an Inplace.",-1),ae={class:"card"},ie=e("span",{class:"pi pi-search",style:{"vertical-align":"middle"}},null,-1),le=e("span",{style:{"margin-left":"0.5rem","vertical-align":"middle"}},"View Picture",-1),ce=e("img",{class:"w-full",alt:"Nature",src:"https://primefaces.org/cdn/primevue/images/nature/nature1.jpg"},null,-1);function se(a,d,s,u,n,_){const c=h,i=y("Inplace"),m=x;return p(),f(b,null,[t(c,g(v(a.$attrs)),{default:l(()=>[oe]),_:1},16),e("div",ae,[t(i,{class:"w-full"},{display:l(()=>[ie,le]),content:l(()=>[ce]),_:1})]),t(m,{code:n.code},null,8,["code"])],64)}const de=r(ne,[["render",se]]),re={data(){return{code:{basic:"import Inplace from 'primevue/inplace';"}}}};function pe(a,d,s,u,n,_){const c=h,i=x;return p(),f(b,null,[t(c,g(v(a.$attrs)),null,16),t(i,{code:n.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ue=r(re,[["render",pe]]),me={data(){return{text:null,code:{basic:`<Inplace :closable="true">
    <template #display>
        {{ text || 'Click to Edit' }}
    </template>
    <template #content>
        <InputText v-model="text" autofocus />
    </template>
</Inplace>`,options:`<template>
    <div class="card">
        <Inplace :closable="true">
            <template #display>
                {{ text || 'Click to Edit' }}
            </template>
            <template #content>
                <InputText v-model="text" autofocus />
            </template>
        </Inplace>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: null
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <Inplace :closable="true">
            <template #display>
                {{ text || 'Click to Edit' }}
            </template>
            <template #content>
                <InputText v-model="text" autofocus />
            </template>
        </Inplace>
    </div>
</template>

<script setup>
import { ref } from "vue";

const text = ref();
<\/script>`}}}},_e=e("p",null,[o("Inplace can be used within a form to display a value as read only before making it editable. The "),e("i",null,"closable"),o(" property adds a close button next to the content to switch back to read only mode.")],-1),he={class:"card"};function fe(a,d,s,u,n,_){const c=h,i=y("InputText"),m=y("Inplace"),$=x;return p(),f(b,null,[t(c,g(v(a.$attrs)),{default:l(()=>[_e]),_:1},16),e("div",he,[t(m,{closable:!0},{display:l(()=>[o(I(n.text||"Click to Edit"),1)]),content:l(()=>[t(i,{modelValue:n.text,"onUpdate:modelValue":d[0]||(d[0]=C=>n.text=C),autofocus:""},null,8,["modelValue"])]),_:1})]),t($,{code:n.code},null,8,["code"])],64)}const be=r(me,[["render",fe]]),ge={data(){return{products:null,code:{basic:`<Inplace @open="loadData">
    <template #display> View Data </template>
    <template #content>
        <DataTable :value="products">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </template>
</Inplace>`,options:`<template>
    <div class="card">
        <Inplace @open="loadData">
            <template #display> View Data </template>
            <template #content>
                <DataTable :value="products">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </template>
        </Inplace>
    </div>
</template>

<script>
import {ProductService} from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        }
    },
    methods: {
        loadData() {
            ProductService.getProductsSmall().then((data) => (this.products = data));
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <Inplace @open="loadData">
            <template #display> View Data </template>
            <template #content>
                <DataTable :value="products">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </template>
        </Inplace>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {ProductService} from "@/service/ProductService";


const products = ref();
const loadData = () => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
}
<\/script>`}}},methods:{loadData(){N.getProductsSmall().then(a=>this.products=a)}}},ve=e("p",null,[o("Using the "),e("i",null,"open"),o(" event, data can be loaded in a lazy manner before displaying it in a table.")],-1),ye={class:"card"};function xe(a,d,s,u,n,_){const c=h,i=y("Column"),m=y("DataTable"),$=y("Inplace"),C=x;return p(),f(b,null,[t(c,g(v(a.$attrs)),{default:l(()=>[ve]),_:1},16),e("div",ye,[t($,{onOpen:_.loadData},{display:l(()=>[o(" View Data ")]),content:l(()=>[t(m,{value:n.products},{default:l(()=>[t(i,{field:"code",header:"Code"}),t(i,{field:"name",header:"Name"}),t(i,{field:"category",header:"Category"}),t(i,{field:"quantity",header:"Quantity"})]),_:1},8,["value"])]),_:1},8,["onOpen"])]),t(C,{code:n.code,service:["ProductService"]},null,8,["code"])],64)}const $e=r(ge,[["render",xe]]),Ce={data(){return{code:{basic:`<Inplace
    :pt="{
        display: { class: 'bg-primary' }
    }"
>
    <template #display> View Content </template>
    <template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </template>
</Inplace>`,options:`<template>
    <div class="card">
        <Inplace
            :pt="{
                display: { class: 'bg-primary' }
            }"
        >
            <template #display> View Content </template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </template>
        </Inplace>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card">
        <Inplace
            :pt="{
                display: { class: 'bg-primary' }
            }"
        >
            <template #display> View Content </template>
            <template #content>
                <p class="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </template>
        </Inplace>
    </div>
</template>

<script setup>

<\/script>`}}}},De={class:"card"},Ie=e("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function we(a,d,s,u,n,_){const c=h,i=y("Inplace"),m=x;return p(),f(b,null,[t(c,g(v(a.$attrs)),null,16),e("div",De,[t(i,{pt:{display:{class:"bg-primary"}}},{display:l(()=>[o(" View Content ")]),content:l(()=>[Ie]),_:1})]),t(m,{code:n.code},null,8,["code"])],64)}const qe=r(Ce,[["render",we]]),Se={},Te=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/inplace.jpg"})],-1);function Pe(a,d){const s=h;return p(),f(b,null,[t(s,g(v(a.$attrs)),{default:l(()=>[e("p",null,I(a.$attrs.description),1)]),_:1},16),Te],64)}const Ve=r(Se,[["render",Pe]]),ke={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ve},{id:"pt.doc.inplace",label:"Inplace PT Options",component:P,data:E("Inplace")},{id:"pt.demo",label:"Demo",component:qe}]}}},Ne={class:"doc-main"},Ee=e("div",{class:"doc-intro"},[e("h1",null,"Inplace Pass Through")],-1);function Le(a,d,s,u,n,_){const c=w,i=q;return p(),f(b,null,[e("div",Ne,[Ee,t(c,{docs:n.docs},null,8,["docs"])]),t(i,{docs:n.docs},null,8,["docs"])],64)}const Ue=r(ke,[["render",Le]]),ze={},Be=e("p",null,"List of class names used in the styled mode.",-1),Ae=V('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-inplace</td><td>Container element</td></tr><tr><td>p-inplace-display</td><td>Display container</td></tr><tr><td>p-inplace-content</td><td>Content container</td></tr></tbody></table></div>',1);function je(a,d){const s=h;return p(),f(b,null,[t(s,g(v(a.$attrs)),{default:l(()=>[Be]),_:1},16),Ae],64)}const Fe=r(ze,[["render",je]]),Ke={data(){return{code1:{basic:`
export default {
    inplace: {
        display: {
            class: ['p-3 rounded-md transition duration-200 text-gray-700 dark:text-white/80', 'inline cursor-pointer', 'hover:bg-gray-200 hover:text-gray-700 dark:hover:bg-gray-800/80 dark:hover:text-white/80']
        }
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Inplace>
            <template #display>
                <span class="text-gray-700 dark:text-white/80"> View Content </span>    
            </template>
            <template #content>
                <p class="text-gray-700 dark:text-white/80 m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </template>
        </Inplace>
    </div>
</template>

<script setup>

<\/script>`}}}},Oe=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Qe(a,d,s,u,n,_){const c=L,i=x,m=h;return p(),D(m,g(v(a.$attrs)),{default:l(()=>[e("p",null,[o(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(c,{to:"/tailwind"},{default:l(()=>[o("Tailwind Customization")]),_:1}),o(" section for an example. ")]),t(i,{code:n.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Oe,t(i,{code:n.code2,embedded:""},null,8,["code"])]),_:1},16)}const Re=r(Ke,[["render",Qe]]),Me={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Fe},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Re}]}]}}},We={class:"doc-main"},Ge=e("div",{class:"doc-intro"},[e("h1",null,"Inplace Theming")],-1);function He(a,d,s,u,n,_){const c=w,i=q;return p(),f(b,null,[e("div",We,[Ge,t(c,{docs:n.docs},null,8,["docs"])]),t(i,{docs:n.docs},null,8,["docs"])],64)}const Je=r(Me,[["render",He]]),Xe={data(){return{docs:[{id:"import",label:"Import",component:ue},{id:"basic",label:"Basic",component:te},{id:"input",label:"Input",component:be},{id:"image",label:"Image",component:de},{id:"lazy",label:"Lazy",component:$e},{id:"accessibility",label:"Accessibility",component:H}],ptComponent:Ue,themingDoc:Je}}};function Ye(a,d,s,u,n,_){const c=k;return p(),D(c,{title:"Vue Inplace Component",header:"Inplace",description:"Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.",componentDocs:n.docs,apiDocs:["Inplace"],ptTabComponent:n.ptComponent,themingDocs:n.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ot=r(Xe,[["render",Ye]]);export{ot as default};
