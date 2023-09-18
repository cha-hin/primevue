import{_ as p,o as u,e as $,w as d,b as t,f as e,a as n,m as w,C as T,p as P,h as g,j as S,c as b,n as v,g as y,t as _,F as x,D as O,k,l as D,v as C,x as B}from"./entry.68beb385.js";import{P as L}from"./ProductService.ed9696ca.js";import{g as M}from"./PTHelper.11558b27.js";import{_ as j}from"./PrimeVueNuxtLink.f51d0c80.js";const K={data(){return{code:{basic:`<span id="lb">Options</span>
<OrderList aria-labelledby="lb" />

<OrderList aria-label="City" />`}}}},V=t("h3",null,"Screen Reader",-1),N=t("p",null,[e(" Value to describe the listbox can be provided with "),t("i",null,"listProps"),e(" by passing "),t("i",null,"aria-labelledby"),e(" or "),t("i",null,"aria-label"),e(" props. The list element has a "),t("i",null,"listbox"),e(" role with the "),t("i",null,"aria-multiselectable"),e(" attribute. Each list item has an "),t("i",null,"option"),e(" role with "),t("i",null,"aria-selected"),e(" and "),t("i",null,"aria-disabled"),e(" as their attributes. ")],-1),A=t("i",null,"button",-1),U=t("i",null,"aria-label",-1),z=t("i",null,"aria.moveTop",-1),I=t("i",null,"aria.moveUp",-1),E=t("i",null,"aria.moveDown",-1),q=t("i",null,"aria.moveBottom",-1),F=t("i",null,"moveTopButtonProps",-1),W=t("i",null,"moveUpButtonProps",-1),R=t("i",null,"moveDownButtonProps",-1),G=t("i",null,"moveBottomButtonProps",-1),H=t("i",null,"aria-label",-1),J=t("h3",null,"ListBox Keyboard Support",-1),Q=t("div",{class:"doc-tablewrapper"},[t("table",{class:"doc-table"},[t("thead",null,[t("tr",null,[t("th",null,"Key"),t("th",null,"Function")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("i",null,"tab")]),t("td",null,"Moves focus to the first selected option, if there is none then first option receives the focus.")]),t("tr",null,[t("td",null,[t("i",null,"up arrow")]),t("td",null,"Moves focus to the previous option.")]),t("tr",null,[t("td",null,[t("i",null,"down arrow")]),t("td",null,"Moves focus to the next option.")]),t("tr",null,[t("td",null,[t("i",null,"enter")]),t("td",null,"Toggles the selected state of the focused option.")]),t("tr",null,[t("td",null,[t("i",null,"space")]),t("td",null,"Toggles the selected state of the focused option.")]),t("tr",null,[t("td",null,[t("i",null,"home")]),t("td",null,"Moves focus to the first option.")]),t("tr",null,[t("td",null,[t("i",null,"end")]),t("td",null,"Moves focus to the last option.")]),t("tr",null,[t("td",null,[t("i",null,"shift"),e(" + "),t("i",null,"down arrow")]),t("td",null,"Moves focus to the next option and toggles the selection state.")]),t("tr",null,[t("td",null,[t("i",null,"shift"),e(" + "),t("i",null,"up arrow")]),t("td",null,"Moves focus to the previous option and toggles the selection state.")]),t("tr",null,[t("td",null,[t("i",null,"shift"),e(" + "),t("i",null,"space")]),t("td",null,"Selects the items between the most recently selected option and the focused option.")]),t("tr",null,[t("td",null,[t("i",null,"control"),e(" + "),t("i",null,"shift"),e(" + "),t("i",null,"home")]),t("td",null,"Selects the focused options and all the options up to the first one.")]),t("tr",null,[t("td",null,[t("i",null,"control"),e(" + "),t("i",null,"shift"),e(" + "),t("i",null,"end")]),t("td",null,"Selects the focused options and all the options down to the first one.")]),t("tr",null,[t("td",null,[t("i",null,"control"),e(" + "),t("i",null,"a")]),t("td",null,"Selects all options.")])])])],-1),X=t("h3",null,"Buttons Keyboard Support",-1),Y=t("div",{class:"doc-tablewrapper"},[t("table",{class:"doc-table"},[t("thead",null,[t("tr",null,[t("th",null,"Key"),t("th",null,"Function")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("i",null,"enter")]),t("td",null,"Executes button action.")]),t("tr",null,[t("td",null,[t("i",null,"space")]),t("td",null,"Executes button action.")])])])],-1);function Z(o,a,c,m,s,f){const l=T,r=P,h=g;return u(),$(h,w({id:"accessibility",label:"Accessibility"},o.$attrs),{default:d(()=>[V,N,t("p",null,[e(" Controls buttons are "),A,e(" elements with an "),U,e(" that refers to the "),z,e(", "),I,e(", "),E,e(" and "),q,e(" properties of the "),n(l,{to:"/configuration/#locale"},{default:d(()=>[e("locale")]),_:1}),e(" API by default, alternatively you may use "),F,e(", "),W,e(", "),R,e(" and "),G,e(" to customize the buttons like overriding the default "),H,e(" attributes. ")]),n(r,w({code:s.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},o.$attrs),null,16,["code"]),J,Q,X,Y]),_:1},16)}const tt=p(K,[["render",Z]]),et={data(){return{products:null,code:{basic:`<OrderList v-model="products" listStyle="height:auto" dataKey="id">
    <template #header> List of Products </template>
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
</OrderList>`,options:`<template>
    <div class="card xl:flex xl:justify-content-center">
        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
            <template #header> List of Products </template>
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
        </OrderList>
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
        ProductService.getProductsSmall().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card xl:flex xl:justify-content-center">
        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
            <template #header> List of Products </template>
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
        </OrderList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService'

const products = ref(null);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
});
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
...`}}},mounted(){L.getProductsSmall().then(o=>this.products=o)}},ot=t("p",null,[e("OrderList requires an array as its value bound with the "),t("i",null,"v-model"),e(" directive and "),t("i",null,"item"),e(" template for its content.")],-1),st={class:"card xl:flex xl:justify-content-center"},nt={class:"flex flex-wrap p-2 align-items-center gap-3"},lt=["src","alt"],it={class:"flex-1 flex flex-column gap-2"},rt={class:"font-bold"},at={class:"flex align-items-center gap-2"},ct=t("i",{class:"pi pi-tag text-sm"},null,-1),dt={class:"font-bold text-900"};function pt(o,a,c,m,s,f){const l=g,r=S("OrderList"),h=P;return u(),b(x,null,[n(l,v(y(o.$attrs)),{default:d(()=>[ot]),_:1},16),t("div",st,[n(r,{modelValue:s.products,"onUpdate:modelValue":a[0]||(a[0]=i=>s.products=i),listStyle:"height:auto",dataKey:"id"},{header:d(()=>[e(" List of Products ")]),item:d(i=>[t("div",nt,[t("img",{class:"w-4rem shadow-2 flex-shrink-0 border-round",src:"https://primefaces.org/cdn/primevue/images/product/"+i.item.image,alt:i.item.name},null,8,lt),t("div",it,[t("span",rt,_(i.item.name),1),t("div",at,[ct,t("span",null,_(i.item.category),1)])]),t("span",dt,"$"+_(i.item.price),1)])]),_:1},8,["modelValue"])]),n(h,w({code:s.code},o.$attrs,{service:["ProductService"]}),null,16,["code"])],64)}const ut=p(et,[["render",pt]]),mt={data(){return{code:{basic:"import OrderList from 'primevue/orderlist';"}}}};function ft(o,a,c,m,s,f){const l=g,r=P;return u(),b(x,null,[n(l,v(y(o.$attrs)),null,16),n(r,{code:s.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ht=p(mt,[["render",ft]]),_t={data(){return{products:null,code:{basic:`<OrderList
    v-model="products"
    dataKey="id"
    :pt="{
        list: { style: { height: 'auto' } },
        moveUpButton: {
            root: { class: 'bg-teal-400 border-teal-400' }
        }
    }"
>
    <template #header> List of Products </template>
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
</OrderList>`,options:`<template>
    <div class="card xl:flex xl:justify-content-center">
        <OrderList
            v-model="products"
            dataKey="id"
            :pt="{
                list: { style: { height: 'auto' } },
                moveUpButton: {
                    root: { class: 'bg-teal-400 border-teal-400' }
                }
            }"
        >
            <template #header> List of Products </template>
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
        </OrderList>
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
        ProductService.getProductsSmall().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card xl:flex xl:justify-content-center">
        <OrderList
            v-model="products"
            dataKey="id"
            :pt="{
                list: { style: { height: 'auto' } },
                moveUpButton: {
                    root: { class: 'bg-teal-400 border-teal-400' }
                }
            }"
        >
            <template #header> List of Products </template>
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
        </OrderList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService'

const products = ref(null);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (this.products = data));
});
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
...`}}},mounted(){L.getProductsSmall().then(o=>this.products=o)}},gt={class:"card xl:flex xl:justify-content-center"},bt={class:"flex flex-wrap p-2 align-items-center gap-3"},xt=["src","alt"],vt={class:"flex-1 flex flex-column gap-2"},yt={class:"font-bold"},Pt={class:"flex align-items-center gap-2"},wt=t("i",{class:"pi pi-tag text-sm"},null,-1),$t={class:"font-bold text-900"};function St(o,a,c,m,s,f){const l=g,r=S("OrderList"),h=P;return u(),b(x,null,[n(l,v(y(o.$attrs)),null,16),t("div",gt,[n(r,{modelValue:s.products,"onUpdate:modelValue":a[0]||(a[0]=i=>s.products=i),dataKey:"id",pt:{list:{style:{height:"auto"}},moveUpButton:{root:{class:"bg-teal-400 border-teal-400"}}}},{header:d(()=>[e(" List of Products ")]),item:d(i=>[t("div",bt,[t("img",{class:"w-4rem shadow-2 flex-shrink-0 border-round",src:"https://primefaces.org/cdn/primevue/images/product/"+i.item.image,alt:i.item.name},null,8,xt),t("div",vt,[t("span",yt,_(i.item.name),1),t("div",Pt,[wt,t("span",null,_(i.item.category),1)])]),t("span",$t,"$"+_(i.item.price),1)])]),_:1},8,["modelValue"])]),n(h,w({code:s.code},o.$attrs,{service:["ProductService"]}),null,16,["code"])],64)}const kt=p(_t,[["render",St]]),Dt={},Lt=t("div",{class:"card"},[t("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/orderlist.jpg"})],-1);function Tt(o,a){const c=g;return u(),b(x,null,[n(c,v(y(o.$attrs)),{default:d(()=>[t("p",null,_(o.$attrs.description),1)]),_:1},16),Lt],64)}const Ot=p(Dt,[["render",Tt]]),Ct={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ot},{id:"pt.doc.orderlist",label:"OrderList PT Options",component:O,data:M("OrderList")},{id:"pt.demo",label:"Demo",component:kt}]}}},Bt={class:"doc-main"},Mt=t("div",{class:"doc-intro"},[t("h1",null,"OrderList Pass Through")],-1);function jt(o,a,c,m,s,f){const l=k,r=D;return u(),b(x,null,[t("div",Bt,[Mt,n(l,{docs:s.docs},null,8,["docs"])]),n(r,{docs:s.docs},null,8,["docs"])],64)}const Kt=p(Ct,[["render",jt]]),Vt={},Nt=t("p",null,"List of class names used in the styled mode.",-1),At=C('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-orderlist</td><td>Container element.</td></tr><tr><td>p-orderlist-list</td><td>List container.</td></tr><tr><td>p-orderlist-item</td><td>An item in the list</td></tr></tbody></table></div>',1);function Ut(o,a){const c=g;return u(),b(x,null,[n(c,v(y(o.$attrs)),{default:d(()=>[Nt]),_:1},16),At],64)}const zt=p(Vt,[["render",Ut]]),It={data(){return{code1:{basic:`
export default {
    orderlist: {
        root: 'flex',
        controls: 'flex flex-col justify-center p-5',
        moveupbutton: {
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
        movetopbutton: {
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
        movedownbutton: {
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
        movebottombutton: {
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
        container: 'flex-auto',
        header: {
            class: [
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            ]
        },
        list: {
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
        })
    }
}
`},code2:{composition:`<template>
    <div class="card xl:flex xl:justify-center">
        <OrderList v-model="products" listStyle="height:auto" dataKey="id">
            <template #header> List of Products </template>
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
        </OrderList>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService'

const products = ref(null);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
});
<\/script>`}}}},Et=t("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function qt(o,a,c,m,s,f){const l=j,r=P,h=g;return u(),$(h,v(y(o.$attrs)),{default:d(()=>[t("p",null,[e(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(l,{to:"/tailwind"},{default:d(()=>[e("Tailwind Customization")]),_:1}),e(" section for an example. ")]),n(r,{code:s.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Et,n(r,{code:s.code2,service:["ProductService"],embedded:""},null,8,["code"])]),_:1},16)}const Ft=p(It,[["render",qt]]),Wt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:zt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Ft}]}]}}},Rt={class:"doc-main"},Gt=t("div",{class:"doc-intro"},[t("h1",null,"OrderList Theming")],-1);function Ht(o,a,c,m,s,f){const l=k,r=D;return u(),b(x,null,[t("div",Rt,[Gt,n(l,{docs:s.docs},null,8,["docs"])]),n(r,{docs:s.docs},null,8,["docs"])],64)}const Jt=p(Wt,[["render",Ht]]),Qt={data(){return{docs:[{id:"import",label:"Import",component:ht},{id:"basic",label:"Basic",component:ut},{id:"accessibility",label:"Accessibility",component:tt}],ptComponent:Kt,themingDoc:Jt}}};function Xt(o,a,c,m,s,f){const l=B;return u(),$(l,{title:"Vue OrderList Component",header:"OrderList",description:"OrderList is used to sort a collection.",componentDocs:s.docs,apiDocs:["OrderList"],ptTabComponent:s.ptComponent,themingDocs:s.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const oe=p(Qt,[["render",Xt]]);export{oe as default};
