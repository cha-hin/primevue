import{_ as u,o as p,e as w,w as c,b as e,f as t,a as s,m as P,C as L,p as k,h as f,j as S,c as x,n as _,g as y,t as g,F as v,D as C,k as $,l as T,v as A,x as B}from"./entry.68beb385.js";import{P as D}from"./ProductService.ed9696ca.js";import{g as M}from"./PTHelper.11558b27.js";import{_ as j}from"./PrimeVueNuxtLink.f51d0c80.js";const K={data(){return{code:{basic:`<span id="lb">Options</span>
<PickList aria-labelledby="lb" />

<PickList aria-label="City" />`}}}},V=e("h3",null,"Screen Reader",-1),N=e("p",null,[t(" Value to describe the source listbox and target listbox can be provided with "),e("i",null,"sourceListProps"),t(" and "),e("i",null,"targetListProps"),t(" by passing "),e("i",null,"aria-labelledby"),t(" or "),e("i",null,"aria-label"),t(" props. The list elements has a "),e("i",null,"listbox"),t(" role with the "),e("i",null,"aria-multiselectable"),t(" attribute. Each list item has an "),e("i",null,"option"),t(" role with "),e("i",null,"aria-selected"),t(" as their attributes. ")],-1),F=e("i",null,"button",-1),z=e("i",null,"aria-label",-1),I=e("i",null,"aria.moveTop",-1),E=e("i",null,"aria.moveUp",-1),O=e("i",null,"aria.moveDown",-1),U=e("i",null,"aria.moveBottom",-1),q=e("i",null,"aria.moveToTarget",-1),W=e("i",null,"aria.moveAllToTarget",-1),R=e("i",null,"aria.moveToSource",-1),G=e("i",null,"aria.moveAllToSource",-1),H=e("i",null,"moveTopButtonProps",-1),J=e("i",null,"moveUpButtonProps",-1),Q=e("i",null,"moveDownButtonProps",-1),X=e("i",null,"moveToButtonProps",-1),Y=e("i",null,"moveAllToButtonProps",-1),Z=e("i",null,"moveFromButtonProps",-1),ee=e("i",null,"moveFromButtonProps",-1),te=e("i",null,"moveAllFromButtonProps",-1),oe=e("i",null,"moveToTargetProps",-1),ne=e("i",null,"moveAllToTargetProps",-1),se=e("i",null,"moveToSourceProps",-1),re=e("i",null,"moveAllToSourceProps",-1),le=e("i",null,"aria-label",-1),ie=e("h3",null,"ListBox Keyboard Support",-1),ae=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the first selected option, if there is none then first option receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous option.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next option.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Toggles the selected state of the focused option.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the selected state of the focused option.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first option.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last option.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),t(" + "),e("i",null,"down arrow")]),e("td",null,"Moves focus to the next option and toggles the selection state.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),t(" + "),e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous option and toggles the selection state.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),t(" + "),e("i",null,"space")]),e("td",null,"Selects the items between the most recently selected option and the focused option.")]),e("tr",null,[e("td",null,[e("i",null,"control"),t(" + "),e("i",null,"shift"),t(" + "),e("i",null,"home")]),e("td",null,"Selects the focused options and all the options up to the first one.")]),e("tr",null,[e("td",null,[e("i",null,"control"),t(" + "),e("i",null,"shift"),t(" + "),e("i",null,"end")]),e("td",null,"Selects the focused options and all the options down to the first one.")]),e("tr",null,[e("td",null,[e("i",null,"control"),t(" + "),e("i",null,"a")]),e("td",null,"Selects all options.")])])])],-1),ce=e("h3",null,"Buttons Keyboard Support",-1),de=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Executes button action.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Executes button action.")])])])],-1);function ue(o,a,d,m,n,b){const r=L,i=k,h=f;return p(),w(h,P({id:"accessibility",label:"Accessibility"},o.$attrs),{default:c(()=>[V,N,e("p",null,[t(" Controls buttons are "),F,t(" elements with an "),z,t(" that refers to the "),I,t(", "),E,t(", "),O,t(", "),U,t(","),q,t(", "),W,t(", "),R,t(" and "),G,t(" properties of the "),s(r,{to:"/configuration/#locale"},{default:c(()=>[t("locale")]),_:1}),t(" API by default, alternatively you may use "),H,t(", "),J,t(", "),Q,t(", "),X,t(", "),Y,t(", "),Z,t(", "),ee,t(),te,t(),oe,t(", "),ne,t(", "),se,t(" and "),re,t(" to customize the buttons like overriding the default "),le,t(" attributes. ")]),s(i,P({code:n.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},o.$attrs),null,16,["code"]),ie,ae,ce,de]),_:1},16)}const pe=u(K,[["render",ue]]),me={data(){return{products:null,code:{basic:`<PickList v-model="products" listStyle="height:342px" dataKey="id">
    <template #sourceheader> Available </template>
    <template #targetheader> Selected </template>
    <template #item="slotProps">
        <div class="flex flex-wrap p-2 align-items-center gap-3">
            <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
            <div class="flex-1 flex flex-column gap-2">
                <span class="font-bold">{{ slotProps.item.name }}</span>
                <div class="flex align-items-center gap-2">
                    <i class="pi pi-tag text-sm"></i>
                    <span>{{ slotProps.item.category }}</span>
                </div>
            </div>
            <span class="font-bold text-900">$ {{ slotProps.item.price }}</span>
        </div>
    </template>
</PickList>`,options:`<template>
    <div class="card">
        <PickList v-model="products" listStyle="height:342px" dataKey="id">
            <template #sourceheader> Available </template>
            <template #targetheader> Selected </template>
            <template #item="slotProps">
                <div class="flex flex-wrap p-2 align-items-center gap-3">
                    <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                    <div class="flex-1 flex flex-column gap-2">
                        <span class="font-bold">{{ slotProps.item.name }}</span>
                        <div class="flex align-items-center gap-2">
                            <i class="pi pi-tag text-sm"></i>
                            <span>{{ slotProps.item.category }}</span>
                        </div>
                    </div>
                    <span class="font-bold text-900">$ {{ slotProps.item.price }}</span>
                </div>
            </template>
        </PickList>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService'
export default {
    data() {
        return {
            products: null
        }
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = [data, []]));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <PickList v-model="products" listStyle="height:342px" dataKey="id">
            <template #sourceheader> Available </template>
            <template #targetheader> Selected </template>
            <template #item="slotProps">
                <div class="flex flex-wrap p-2 align-items-center gap-3">
                    <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                    <div class="flex-1 flex flex-column gap-2">
                        <span class="font-bold">{{ slotProps.item.name }}</span>
                        <div class="flex align-items-center gap-2">
                            <i class="pi pi-tag text-sm"></i>
                            <span>{{ slotProps.item.category }}</span>
                        </div>
                    </div>
                    <span class="font-bold text-900">$ {{ slotProps.item.price }}</span>
                </div>
            </template>
        </PickList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService'

const products = ref(null);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = [data, []]));
});
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
        `}}},mounted(){D.getProductsSmall().then(o=>this.products=[o,[]])}},be=e("p",null,[t("PickList requires a multidimensional array as its value bound with the "),e("i",null,"v-model "),t("directive and a template for its content that gets the "),e("i",null,"item"),t(" instance and the index via slotProps.")],-1),he={class:"card"},ge={class:"flex flex-wrap p-2 align-items-center gap-3"},fe=["src","alt"],xe={class:"flex-1 flex flex-column gap-2"},ve={class:"font-bold"},_e={class:"flex align-items-center gap-2"},ye=e("i",{class:"pi pi-tag text-sm"},null,-1),ke={class:"font-bold text-900"};function Pe(o,a,d,m,n,b){const r=f,i=S("PickList"),h=k;return p(),x(v,null,[s(r,_(y(o.$attrs)),{default:c(()=>[be]),_:1},16),e("div",he,[s(i,{modelValue:n.products,"onUpdate:modelValue":a[0]||(a[0]=l=>n.products=l),listStyle:"height:342px",dataKey:"id"},{sourceheader:c(()=>[t(" Available ")]),targetheader:c(()=>[t(" Selected ")]),item:c(l=>[e("div",ge,[e("img",{class:"w-4rem shadow-2 flex-shrink-0 border-round",src:"https://primefaces.org/cdn/primevue/images/product/"+l.item.image,alt:l.item.name},null,8,fe),e("div",xe,[e("span",ve,g(l.item.name),1),e("div",_e,[ye,e("span",null,g(l.item.category),1)])]),e("span",ke,"$"+g(l.item.price),1)])]),_:1},8,["modelValue"])]),s(h,P({code:n.code},o.$attrs,{service:["ProductService"]}),null,16,["code"])],64)}const we=u(me,[["render",Pe]]),Se={data(){return{code:{basic:"import PickList from 'primevue/picklist';"}}}};function $e(o,a,d,m,n,b){const r=f,i=k;return p(),x(v,null,[s(r,_(y(o.$attrs)),null,16),s(i,{code:n.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Te=u(Se,[["render",$e]]),De={data(){return{products:null,code:{basic:`<PickList
    v-model="products"
    dataKey="id"
    :pt="{
        sourceList: { style: { height: '342px' } },
        targetList: { style: { height: '342px' } },
        moveAllToTargetButton: {
            root: { class: 'bg-teal-400 border-teal-400' }
        },
        moveAllToSourceButton: {
            root: { class: 'bg-teal-400 border-teal-400' }
        }
    }"
>
    <template #sourceheader> Available </template>
    <template #targetheader> Selected </template>
    <template #item="slotProps">
        <div class="flex flex-wrap p-2 align-items-center gap-3">
            <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
            <div class="flex-1 flex flex-column gap-2">
                <span class="font-bold">{{ slotProps.item.name }}</span>
                <div class="flex align-items-center gap-2">
                    <i class="pi pi-tag text-sm"></i>
                    <span>{{ slotProps.item.category }}</span>
                </div>
            </div>
            <span class="font-bold text-900">$ {{ slotProps.item.price }}</span>
        </div>
    </template>
</PickList>`,options:`<template>
    <div class="card">
        <PickList
            v-model="products"
            dataKey="id"
            :pt="{
                sourceList: { style: { height: '342px' } },
                targetList: { style: { height: '342px' } },
                moveAllToTargetButton: {
                    root: { class: 'bg-teal-400 border-teal-400' }
                },
                moveAllToSourceButton: {
                    root: { class: 'bg-teal-400 border-teal-400' }
                }
            }"
        >
            <template #sourceheader> Available </template>
            <template #targetheader> Selected </template>
            <template #item="slotProps">
                <div class="flex flex-wrap p-2 align-items-center gap-3">
                    <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                    <div class="flex-1 flex flex-column gap-2">
                        <span class="font-bold">{{ slotProps.item.name }}</span>
                        <div class="flex align-items-center gap-2">
                            <i class="pi pi-tag text-sm"></i>
                            <span>{{ slotProps.item.category }}</span>
                        </div>
                    </div>
                    <span class="font-bold text-900">$ {{ slotProps.item.price }}</span>
                </div>
            </template>
        </PickList>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService'
export default {
    data() {
        return {
            products: null
        }
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = [data, []]));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <PickList
            v-model="products"
            dataKey="id"
            :pt="{
                sourceList: { style: { height: '342px' } },
                targetList: { style: { height: '342px' } },
                moveAllToTargetButton: {
                    root: { class: 'bg-teal-400 border-teal-400' }
                },
                moveAllToSourceButton: {
                    root: { class: 'bg-teal-400 border-teal-400' }
                }
            }"
        >
            <template #sourceheader> Available </template>
            <template #targetheader> Selected </template>
            <template #item="slotProps">
                <div class="flex flex-wrap p-2 align-items-center gap-3">
                    <img class="w-4rem shadow-2 flex-shrink-0 border-round" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                    <div class="flex-1 flex flex-column gap-2">
                        <span class="font-bold">{{ slotProps.item.name }}</span>
                        <div class="flex align-items-center gap-2">
                            <i class="pi pi-tag text-sm"></i>
                            <span>{{ slotProps.item.category }}</span>
                        </div>
                    </div>
                    <span class="font-bold text-900">$ {{ slotProps.item.price }}</span>
                </div>
            </template>
        </PickList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService'

const products = ref(null);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = [data, []]));
});
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
        `}}},mounted(){D.getProductsSmall().then(o=>this.products=[o,[]])}},Le={class:"card"},Ce={class:"flex flex-wrap p-2 align-items-center gap-3"},Ae=["src","alt"],Be={class:"flex-1 flex flex-column gap-2"},Me={class:"font-bold"},je={class:"flex align-items-center gap-2"},Ke=e("i",{class:"pi pi-tag text-sm"},null,-1),Ve={class:"font-bold text-900"};function Ne(o,a,d,m,n,b){const r=f,i=S("PickList"),h=k;return p(),x(v,null,[s(r,_(y(o.$attrs)),null,16),e("div",Le,[s(i,{modelValue:n.products,"onUpdate:modelValue":a[0]||(a[0]=l=>n.products=l),dataKey:"id",pt:{sourceList:{style:{height:"342px"}},targetList:{style:{height:"342px"}},moveAllToTargetButton:{root:{class:"bg-teal-400 border-teal-400"}},moveAllToSourceButton:{root:{class:"bg-teal-400 border-teal-400"}}}},{sourceheader:c(()=>[t(" Available ")]),targetheader:c(()=>[t(" Selected ")]),item:c(l=>[e("div",Ce,[e("img",{class:"w-4rem shadow-2 flex-shrink-0 border-round",src:"https://primefaces.org/cdn/primevue/images/product/"+l.item.image,alt:l.item.name},null,8,Ae),e("div",Be,[e("span",Me,g(l.item.name),1),e("div",je,[Ke,e("span",null,g(l.item.category),1)])]),e("span",Ve,"$"+g(l.item.price),1)])]),_:1},8,["modelValue"])]),s(h,P({code:n.code},o.$attrs,{service:["ProductService"]}),null,16,["code"])],64)}const Fe=u(De,[["render",Ne]]),ze={},Ie=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/picklist.jpg"})],-1);function Ee(o,a){const d=f;return p(),x(v,null,[s(d,_(y(o.$attrs)),{default:c(()=>[e("p",null,g(o.$attrs.description),1)]),_:1},16),Ie],64)}const Oe=u(ze,[["render",Ee]]),Ue={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Oe},{id:"pt.doc.picklist",label:"PickList PT Options",component:C,data:M("PickList")},{id:"pt.demo",label:"Demo",component:Fe}]}}},qe={class:"doc-main"},We=e("div",{class:"doc-intro"},[e("h1",null,"PickList Pass Through")],-1);function Re(o,a,d,m,n,b){const r=$,i=T;return p(),x(v,null,[e("div",qe,[We,s(r,{docs:n.docs},null,8,["docs"])]),s(i,{docs:n.docs},null,8,["docs"])],64)}const Ge=u(Ue,[["render",Re]]),He={},Je=e("p",null,"List of class names used in the styled mode.",-1),Qe=A('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-picklist</td><td>Container element.</td></tr><tr><td>p-picklist-source-controls</td><td>Container of source list buttons.</td></tr><tr><td>p-picklist-target-controls</td><td>Container of target list buttons.</td></tr><tr><td>p-picklist-buttons</td><td>Container of buttons.</td></tr><tr><td>p-picklist-listwrapper</td><td>Parent of a list element.</td></tr><tr><td>p-picklist-list</td><td>List element.</td></tr><tr><td>p-picklist-item</td><td>An item in the list.</td></tr></tbody></table></div>',1);function Xe(o,a){const d=f;return p(),x(v,null,[s(d,_(y(o.$attrs)),{default:c(()=>[Je]),_:1},16),Qe],64)}const Ye=u(He,[["render",Xe]]),Ze={data(){return{code1:{basic:`
export default {
    picklist: {
        root: 'flex',
        sourcecontrols: 'flex flex-col justify-center p-5',
        sourcemoveupbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        sourcemovetopbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        sourcemovedownbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        sourcemovebottombutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        sourcewrapper: 'grow shrink basis-2/4',
        sourceheader: {
            class: [
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            ]
        },
        sourcelist: {
            class: [
                'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
                'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' //Dark Mode
            ]
        },
        item: ({ context }) => ({
            class: [
                'relative cursor-pointer overflow-hidden',
                'py-3 px-5 m-0 border-none text-gray-600 dark:text-white/80',
                'transition duration-200',
                {
                    'text-blue-700 bg-blue-500/20 dark:bg-blue-300/20': context.active && !context.focused,
                    'text-blue-700 bg-blue-500/30 dark:bg-blue-300/30': context.active && context.focused,
                    'text-gray-600 bg-gray-300 dark:bg-blue-900/40': !context.active && context.focused
                }
            ]
        }),
        buttons: 'flex flex-col justify-center p-5',
        movetotargetbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        movealltotargetbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        movetosourcebutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        movealltosourcebutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        targetcontrols: 'flex flex-col justify-center p-5',
        targetmoveupbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        targetmovetopbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        targetmovedownbutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        targetmovebottombutton: {
            root: ({ context }) => ({
                class: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        targetwrapper: 'grow shrink basis-2/4',
        targetheader: {
            class: [
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            ]
        },
        targetlist: {
            class: [
                'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
                'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' //Dark Mode
            ]
        },
        transition: {
            enterFromClass: '!transition-none',
            enterActiveClass: '!transition-none',
            leaveActiveClass: '!transition-none',
            leaveToClass: '!transition-none'
        }
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <PickList v-model="products" listStyle="height:342px" dataKey="id">
            <template #sourceheader> Available </template>
            <template #targetheader> Selected </template>
            <template #item="slotProps">
                <div class="flex flex-wrap p-2 items-center gap-3">
                    <img class="w-16 shadow-md shrink-0 rounded" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
                    <div class="flex-1 flex flex-col gap-2">
                        <span class="font-bold text-gray-700 dark:text-white/80">{{ slotProps.item.name }}</span>
                        <div class="flex items-center gap-2">
                            <i class="pi pi-tag text-sm text-gray-700 dark:text-white/80"></i>
                            <span class="text-gray-700 dark:text-white/80">{{ slotProps.item.category }}</span>
                        </div>
                    </div>
                    <span class="font-bold text-gray-700 dark:text-white/80">$ {{ slotProps.item.price }}</span>
                </div>
            </template>
        </PickList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService'

const products = ref(null);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = [data, []]));
});
<\/script>`}}}},et=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function tt(o,a,d,m,n,b){const r=j,i=k,h=f;return p(),w(h,_(y(o.$attrs)),{default:c(()=>[e("p",null,[t(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),s(r,{to:"/tailwind"},{default:c(()=>[t("Tailwind Customization")]),_:1}),t(" section for an example. ")]),s(i,{code:n.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),et,s(i,{code:n.code2,service:["ProductService"],embedded:""},null,8,["code"])]),_:1},16)}const ot=u(Ze,[["render",tt]]),nt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ye},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ot}]}]}}},st={class:"doc-main"},rt=e("div",{class:"doc-intro"},[e("h1",null,"PickList Theming")],-1);function lt(o,a,d,m,n,b){const r=$,i=T;return p(),x(v,null,[e("div",st,[rt,s(r,{docs:n.docs},null,8,["docs"])]),s(i,{docs:n.docs},null,8,["docs"])],64)}const it=u(nt,[["render",lt]]),at={data(){return{docs:[{id:"import",label:"Import",component:Te},{id:"basic",label:"Basic",component:we},{id:"accessibility",label:"Accessibility",component:pe}],ptComponent:Ge,themingDoc:it}}};function ct(o,a,d,m,n,b){const r=B;return p(),w(r,{title:"Vue PickList Component",header:"PickList",description:"PickList is used to reorder items between different lists.",componentDocs:n.docs,apiDocs:["PickList"],ptTabComponent:n.ptComponent,themingDocs:n.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const bt=u(at,[["render",ct]]);export{bt as default};
