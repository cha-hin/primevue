import{_ as u,o as p,e as P,w as m,b as e,f as s,a as t,m as S,C as x,h as f,c as h,n as g,g as _,F as D,p as b,j as y,t as $,a4 as B,D as R,k as w,l as k,x as j}from"./entry.68beb385.js";import{P as I}from"./ProductService.ed9696ca.js";import{g as L}from"./PTHelper.11558b27.js";import{_ as T}from"./PrimeVueNuxtLink.f51d0c80.js";const N={};function A(n,c){const l=x,r=f;return p(),P(r,S({id:"accessibility",label:"Accessibility"},n.$attrs),{default:m(()=>[e("p",null,[s("DynamicDialog uses the Dialog component internally, visit "),t(l,{to:"/dialog/#accessibility"},{default:m(()=>[s("dialog")]),_:1}),s(" for more information.")])]),_:1},16)}const F=u(N,[["render",A]]),z={data(){return{code:{basic:`
export default {
    inject: ['dialogRef'],
    methods:{
        closeDialog() {
            this.dialogRef.close();
        }
    }
}`,options:`
export default {
    inject: ['dialogRef'],
    methods:{
        closeDialog() {
            this.dialogRef.close();
        }
    }
}`,composition:`
import { inject } from "vue";

const dialogRef = inject('dialogRef');
const closeDialog = () => {
    dialogRef.value.close();
}`}}}},M=e("p",null,[s("The "),e("i",null,"close"),s(" function of the "),e("i",null,"dialogRef"),s(" is used to hide a Dialog. The "),e("i",null,"dialogRef"),s(" is injected to the component that is loaded by the dialog.")],-1);function Y(n,c,l,r,o,d){const i=f,a=b;return p(),h(D,null,[t(i,g(_(n.$attrs)),{default:m(()=>[M]),_:1},16),t(a,{code:o.code,importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const q=u(z,[["render",Y]]),O={data(){return{code:{basic:`import { markRaw } from 'vue';
import ProductListDemo from './ProductListDemo';
import FooterDemo from './FooterDemo';

export default {
    methods:{
        showProducts() {
            const dialogRef = this.$dialog.open(ProductListDemo, {
                props: {
                    header: 'Product List',
                    style: {
                        width: '50vw',
                    },
                    breakpoints:{
                        '960px': '75vw',
                        '640px': '90vw'
                    },
                    modal: true
                },
                templates: {
                    footer: markRaw(FooterDemo)
                },
                onClose: (options) => {
                    const data = options.data;
                    if (data) {
                        this.$toast.add({ severity:'info', summary: 'Info Message', detail:'Order submitted', life: 3000 });
                    }
                }
            });
        }
    }
}`}}}};function V(n,c,l,r,o,d){const i=x,a=f,v=b;return p(),h(D,null,[t(a,g(_(n.$attrs)),{default:m(()=>[e("p",null,[s("DynamicDialog uses the Dialog component internally, visit "),t(i,{to:"/dialog"},{default:m(()=>[s("dialog")]),_:1}),s(" for more information.")])]),_:1},16),t(v,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Q=u(O,[["render",V]]),U={data(){return{code1:{basic:`import {createApp} from 'vue';
import DialogService from 'primevue/dialogservice';

const app = createApp(App);
app.use(DialogService);`},code2:{basic:`import { useDialog } from 'primevue/usedialog';

const dialog = useDialog();`,options:"const dialogRef = this.$dialog;",composition:`
import { useDialog } from 'primevue/usedialog';

const dialog = useDialog();`}}}},E=e("p",null,[s("Dynamic dialogs are controlled via the "),e("i",null,"DialogService"),s(" that needs to be installed as an application plugin.")],-1),W=e("div",{class:"doc-section-description"},[e("p",null,[e("i",null,"$dialog"),s(" is available as a property in the application instance for Options API. The service can be injected with the "),e("i",null,"useDialog"),s(" function for Composition API.")])],-1);function K(n,c,l,r,o,d){const i=f,a=b;return p(),h(D,null,[t(i,g(_(n.$attrs)),{default:m(()=>[E]),_:1},16),t(a,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),W,t(a,{code:o.code2,importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const G=u(U,[["render",K]]),H={data(){return{code1:{basic:`
this.$dialog.open(ProductListDemo, {
    emits: {
        onInfo: (e) => {     // The 'on' prefix and same emit name are required.
            console.log(e);  // {user: 'primetime'}
        }
    },
};`},code2:{basic:`
// ProductListDemo
<template>
    <Button label="Submit" @click="showInfo" />
</template>

<script>
export default {
    emits: ['info'],
    methods: {
        showInfo() {
            this.$emit('info', { user: 'primetime' });
        }
    }
};
<\/script>
`}}}},J=e("p",null,[s(" The "),e("i",null,"emits"),s(" object can be used to handle events emitted by the child component. Each method name used in this object must begin with 'on'. Then the emit name should come. This is an "),e("a",{href:"https://vuejs.org/guide/essentials/event-handling.html#listening-to-events"},"event handling"),s(" rule of Vue. ")],-1);function X(n,c,l,r,o,d){const i=b,a=f;return p(),P(a,g(_(n.$attrs)),{default:m(()=>[J,t(i,{code:o.code1,importCode:"",hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),t(i,{code:o.code2,importCode:"",hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])]),_:1},16)}const Z=u(H,[["render",X]]),tt={data(){return{code:{basic:"import DynamicDialog from 'primevue/dynamicdialog';"}}}};function et(n,c,l,r,o,d){const i=f,a=b;return p(),h(D,null,[t(i,g(_(n.$attrs)),null,16),t(a,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ot=u(tt,[["render",et]]),nt={data(){return{code:{basic:`import ProductListDemo from './ProductListDemo';

export default {
    methods:{
        showProducts() {
            this.$dialog.open(ProductListDemo, {});
        }
    }
}`,options:`
import ProductListDemo from './ProductListDemo';

export default {
    methods:{
        showProducts() {
            this.$dialog.open(ProductListDemo, {});
        }
    }
}`,composition:`
import ProductListDemo from './ProductListDemo';
import { useDialog } from 'primevue/usedialog';

const showProducts = () => {
    const dialog = useDialog();
    dialog.open(ProductListDemo, {});
}`}}}},it=e("p",null,[s("The "),e("i",null,"open"),s(" function of the "),e("i",null,"DialogService"),s(" is used to open a Dialog. First parameter is the component to load and second one is the configuration object to customize the Dialog.")],-1);function st(n,c,l,r,o,d){const i=f,a=b;return p(),h(D,null,[t(i,g(_(n.$attrs)),{default:m(()=>[it]),_:1},16),t(a,{code:o.code,importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const at=u(nt,[["render",st]]),ct={data(){return{code1:{basic:`
this.$dialog.open(ProductListDemo, {
    data: {
        user: 'primetime'
    }
};`},code2:{basic:`
export default {
    inject: ['dialogRef'],
    mounted:{
        const params = this.dialogRef.data; // {user: 'primetime'}
    }
}`},code3:{basic:`
this.$dialog.open(ProductListDemo, {
    onClose(options) {
        const callbackParams = options.data; // {id: 12}
    }
);`},code4:{basic:`
export default {
    inject: ['dialogRef'],
    methods:{
        closeDialog() {
            this.dialogRef.close({id: 12});
        }
    }
}`}}}},lt=e("p",null,[s("Data can be passed to the component that is loaded by the Dialog and also from the component back to the caller component. Use the "),e("i",null,"open"),s(" function and pass your parameters with the "),e("i",null,"data"),s(" property in the options object.")],-1),rt=e("p",null,[s("Similarly when hiding a Dialog, any parameter passed to the "),e("i",null,"close"),s(" function is received from the "),e("i",null,"onClose"),s(" callback defined by the "),e("i",null,"open"),s(" function at the caller.")],-1);function dt(n,c,l,r,o,d){const i=b,a=f;return p(),P(a,g(_(n.$attrs)),{default:m(()=>[lt,t(i,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),t(i,{code:o.code2,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),rt,t(i,{code:o.code3,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),t(i,{code:o.code4,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])]),_:1},16)}const ut=u(ct,[["render",dt]]),pt={inject:["dialogRef"],methods:{closeDialog(n){this.dialogRef.close(n)}}};function mt(n,c,l,r,o,d){const i=y("Button");return p(),h(D,null,[t(i,{type:"button",label:"No",icon:"pi pi-times",onClick:c[0]||(c[0]=a=>d.closeDialog({buttonType:"No"})),text:""}),t(i,{type:"button",label:"Yes",icon:"pi pi-check",onClick:c[1]||(c[1]=a=>d.closeDialog({buttonType:"Yes"})),autofocus:""})],64)}const ft=u(pt,[["render",mt]]),ht={inject:["dialogRef"],data(){return{totalProducts:0}},mounted(){this.totalProducts=this.dialogRef.data.totalProducts},methods:{closeDialog(){this.dialogRef.close()}}},gt={class:"flex justify-content-end"};function _t(n,c,l,r,o,d){const i=y("Button");return p(),h("div",null,[e("p",null,[s(" There are "),e("strong",null,$(o.totalProducts),1),s(" products in total in this list. ")]),e("div",gt,[t(i,{autofocus:"",type:"button",label:"Close",onClick:d.closeDialog},null,8,["onClick"])])])}const Dt=u(ht,[["render",_t]]),bt={inject:["dialogRef"],data(){return{products:null}},mounted(){I.getProductsSmall().then(n=>this.products=n.slice(0,5))},methods:{selectProduct(n){this.dialogRef.close(n)},showInfo(){this.$dialog.open(Dt,{props:{header:"Information",modal:!0,dismissableMask:!0},data:{totalProducts:this.products?this.products.length:0}})}}},vt={class:"flex justify-content-end mt-1 mb-3"},yt=["src","alt"];function Ct(n,c,l,r,o,d){const i=y("Button"),a=y("Column"),v=y("DataTable");return p(),h("div",null,[e("div",vt,[t(i,{icon:"pi pi-external-link",label:"Nested Dialog",outlined:"",severity:"success",onClick:d.showInfo},null,8,["onClick"])]),t(v,{value:o.products},{default:m(()=>[t(a,{field:"code",header:"Code"}),t(a,{field:"name",header:"Name"}),t(a,{header:"Image"},{body:m(C=>[e("img",{src:"https://primefaces.org/cdn/primevue/images/product/"+C.data.image,alt:C.data.name,class:"shadow-2 w-4rem"},null,8,yt)]),_:1}),t(a,{field:"category",header:"Category"}),t(a,{field:"quantity",header:"Quantity"}),t(a,{style:{width:"5rem"}},{body:m(C=>[t(i,{type:"button",icon:"pi pi-plus",text:"",rounded:"",onClick:ee=>d.selectProduct(C.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])])}const Pt=u(bt,[["render",Ct]]),xt={data(){return{code:{basic:`<Button label="Select a Product" icon="pi pi-search" @click="showProducts" />

<DynamicDialog />`,options:`<template>
    <div class="card flex justify-content-center">
        <Button label="Select a Product" icon="pi pi-search" @click="showProducts" />
        <Toast />
        <DynamicDialog />
    </div>
</template>

<script>
import Button from 'primevue/button';
import { markRaw, defineAsyncComponent } from 'vue';
const ProductListDemo = defineAsyncComponent(() => import('./components/ProductListDemo.vue'));
const FooterDemo = defineAsyncComponent(() => import('./components/FooterDemo.vue'));

export default {
    methods: {
        showProducts() {
            const dialogRef = this.$dialog.open(ProductListDemo, {
                props: {
                    header: 'Product List',
                    style: {
                        width: '50vw'
                    },
                    breakpoints: {
                        '960px': '75vw',
                        '640px': '90vw'
                    },
                    modal: true
                },
                templates: {
                    footer: markRaw(FooterDemo)
                },
                onClose: (options) => {
                    const data = options.data;

                    if (data) {
                        const buttonType = data.buttonType;
                        const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: \`Pressed '\${buttonType}' button\` } : { summary: 'Product Selected', detail: data.name };

                        this.$toast.add({ severity: 'info', ...summary_and_detail, life: 3000 });
                    }
                }
            });
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button label="Select a Product" icon="pi pi-search" @click="showProducts" />
        <Toast />
        <DynamicDialog />
    </div>
</template>

<script setup>
import { markRaw, defineAsyncComponent } from 'vue';
import { useDialog } from 'primevue/usedialog';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
const ProductListDemo = defineAsyncComponent(() => import('./components/ProductListDemo.vue'));
const FooterDemo = defineAsyncComponent(() => import('./components/FooterDemo.vue'));

const dialog = useDialog();
const toast = useToast();

const showProducts = () => {
    const dialogRef = dialog.open(ProductListDemo, {
        props: {
            header: 'Product List',
            style: {
                width: '50vw',
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },
            modal: true
        },
        templates: {
            footer: markRaw(FooterDemo)
        },
        onClose: (options) => {
            const data = options.data;
            if (data) {
                const buttonType = data.buttonType;
                const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: \`Pressed '\${buttonType}' button\` } : { summary: 'Product Selected', detail: data.name };

                toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
            }
        }
    });
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
...`},extFiles:{options:{"src/components/ProductListDemo.vue":{content:`
<template>
	<div>
        <div class="flex justify-content-end mt-1 mb-3">
            <Button icon="pi pi-external-link" label="Nested Dialog" outlined severity="success" @click="showInfo" />
        </div>
        <DataTable :value="products">
			<Column field="code" header="Code"></Column>
			<Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="shadow-2 w-4rem" />
                </template>
            </Column>
			<Column field="category" header="Category"></Column>
			<Column field="quantity" header="Quantity"></Column>
            <Column style="width:5rem">
                <template #body="slotProps">
                    <Button type="button" icon="pi pi-plus" text rounded @click="selectProduct(slotProps.data)"></Button>
                </template>
            </Column>
		</DataTable>

	</div>
</template>

<script>
import { ProductService } from '@/service/ProductService';
import InfoDemo from './InfoDemo.vue';

export default {
    inject: ['dialogRef'],
    data() {
        return {
            products: null
        }
    },
    mounted() {
        ProductService.getProductsSmall().then(data => this.products = data.slice(0,5));
    },
    methods: {
        selectProduct(data) {
            this.dialogRef.close(data);
        },
        showInfo() {
            this.$dialog.open(InfoDemo, {
                props: {
                    header: 'Information',
                    modal: true,
                    dismissableMask: true
                },
                data: {
                    totalProducts: this.products ? this.products.length : 0
                }
            });
        }
    }
}
<\/script>`},"src/components/InfoDemo.vue":{content:`
<template>
    <div>
        <p>There are <strong>{{totalProducts}}</strong> products in total in this list.</p>
        <div class="flex justify-content-end">
            <Button type="button" label="Close" @click="closeDialog"></Button>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['dialogRef'],
    data() {
        return {
            totalProducts: 0
        }
    },
    mounted() {
        this.totalProducts = this.dialogRef.data.totalProducts;
    },
    methods: {
        closeDialog() {
            this.dialogRef.close();
        }
    }
}
<\/script>
                            `},"src/components/FooterDemo.vue":{content:`
<template>
    <Button type="button" label="No" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
    <Button type="button" label="Yes" icon="pi pi-check" @click="closeDialog({ buttonType: 'Yes' })" autofocus></Button>
</template>

<script>
export default {
    inject: ['dialogRef'],
    methods: {
        closeDialog(e) {
            this.dialogRef.close(e);
        }
    }
};
<\/script>`}},composition:{"src/components/ProductListDemo.vue":{content:`
<template>
	<div>
        <div class="flex justify-content-end mt-1 mb-3">
            <Button icon="pi pi-external-link" label="Nested Dialog" outlined severity="success" @click="showInfo" />
        </div>
        <DataTable :value="products">
			<Column field="code" header="Code"></Column>
			<Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="shadow-2 w-4rem" />
                </template>
            </Column>
			<Column field="category" header="Category"></Column>
			<Column field="quantity" header="Quantity"></Column>
            <Column style="width:5rem">
                <template #body="slotProps">
                    <Button type="button" icon="pi pi-plus" text rounded @click="selectProduct(slotProps.data)"></Button>
                </template>
            </Column>
		</DataTable>

	</div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import { useDialog } from "primevue/usedialog";
import { ProductService } from "@/service/ProductService";
import InfoDemo from "./InfoDemo.vue";

const dialogRef = inject("dialogRef");
const dialog = useDialog();
const products = ref(null);

onMounted(() => {
    ProductService
        .getProductsSmall()
        .then((data) => (products.value = data.slice(0, 5)));
});

const selectProduct = (data) => {
    dialogRef.value.close(data);
};

const showInfo = () => {
    dialog.open(InfoDemo, {
        props: {
            header: "Information",
            modal: true,
            dismissableMask: true,
        },
        data: {
            totalProducts: products.value ? products.value.length : 0,
        }
    });
};
<\/script>`},"src/components/InfoDemo.vue":{content:`
<template>
    <div>
        <p>There are <strong>{{totalProducts}}</strong> products in total in this list.</p>
        <div class="flex justify-content-end">
            <Button type="button" label="Close" @click="closeDialog"></Button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";

const totalProducts = ref(0);
const dialogRef = inject("dialogRef");

onMounted(() => {
    totalProducts.value = dialogRef.value.data.totalProducts;
});

const closeDialog = () => {
    dialogRef.value.close();
};
<\/script>
                            `},"src/components/FooterDemo.vue":{content:`
<template>
    <Button type="button" label="No" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
    <Button type="button" label="Yes" icon="pi pi-check" @click="closeDialog({ buttonType: 'Yes' })" autofocus></Button>
</template>

<script setup>
import { inject } from "vue";

const dialogRef = inject("dialogRef");

const closeDialog = (e) => {
    dialogRef.value.close(e);
};
<\/script>`}}}}},methods:{showProducts(){this.$dialog.open(Pt,{props:{header:"Product List",style:{width:"50vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},templates:{footer:B(ft)},onClose:n=>{const c=n.data;if(c){const l=c.buttonType,r=l?{summary:"No Product Selected",detail:`Pressed '${l}' button`}:{summary:"Product Selected",detail:c.name};this.$toast.add({severity:"info",...r,life:3e3})}}})}}},$t=e("p",null,[s(" Dialogs can be created dynamically with any component as the content using a DialogService along with a "),e("i",null,"DynamicDialog"),s(" component. Ideal location of a DynamicDialog is the main template so that it can be used by any component within the application. ")],-1),wt={class:"card flex justify-content-center"};function kt(n,c,l,r,o,d){const i=f,a=y("Button"),v=y("DynamicDialog"),C=b;return p(),h(D,null,[t(i,g(_(n.$attrs)),{default:m(()=>[$t]),_:1},16),e("div",wt,[t(a,{label:"Select a Product",icon:"pi pi-search",onClick:d.showProducts},null,8,["onClick"]),t(v)]),t(C,{code:o.code,extFiles:o.extFiles,service:["ProductService"]},null,8,["code","extFiles"])],64)}const Tt=u(xt,[["render",kt]]),St={data(){return{code:{basic:`<DynamicDialog
    :pt="{
        root: { class: 'w-12 sm:w-9 md:w-6' }
    }"
/>`,options:`<template>
    <DynamicDialog
        :pt="{
            root: { class: 'w-12 sm:w-9 md:w-6' }
        }"
    />
</template>`,composition:`<template>
    <DynamicDialog
        :pt="{
            root: { class: 'w-12 sm:w-9 md:w-6' }
        }"
    />
</template>`}}}};function Bt(n,c,l,r,o,d){const i=f,a=b;return p(),h(D,null,[t(i,g(_(n.$attrs)),null,16),t(a,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Rt=u(St,[["render",Bt]]),jt={},It=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/dialog.jpg"})],-1);function Lt(n,c){const l=f;return p(),h(D,null,[t(l,g(_(n.$attrs)),{default:m(()=>[e("p",null,$(n.$attrs.description),1)]),_:1},16),It],64)}const Nt=u(jt,[["render",Lt]]),At={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Nt},{id:"pt.doc.dynamicdialog",label:"Dialog PT Options",component:R,data:L("Dialog")},{id:"pt.demo",label:"Demo",component:Rt}]}}},Ft={class:"doc-main"},zt=e("div",{class:"doc-intro"},[e("h1",null,"Dynamic Dialog Pass Through")],-1);function Mt(n,c,l,r,o,d){const i=w,a=k;return p(),h(D,null,[e("div",Ft,[zt,t(i,{docs:o.docs},null,8,["docs"])]),t(a,{docs:o.docs},null,8,["docs"])],64)}const Yt=u(At,[["render",Mt]]),qt={};function Ot(n,c){const l=T,r=f;return p(),P(r,g(_(n.$attrs)),{default:m(()=>[e("p",null,[s("List of class names can be found in "),t(l,{to:"/dialog/#styled"},{default:m(()=>[s("Dialog")]),_:1}),s(" theming documentation.")])]),_:1},16)}const Vt=u(qt,[["render",Ot]]),Qt={data(){return{code1:{basic:`
export default {
    dialog: {
        root: ({ state }) => ({
            class: [
                'rounded-lg shadow-lg border-0',
                'max-h-90 transform scale-100',
                'm-0 w-[50vw]',
                'dark:border dark:border-blue-900/40',
                {
                    'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': state.maximized
                }
            ]
        }),
        header: {
            class: ['flex items-center justify-between shrink-0', 'bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6', 'dark:bg-gray-900  dark:text-white/80']
        },
        headerTitle: 'font-bold text-lg',
        headerIcons: 'flex items-center',
        closeButton: {
            class: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        content: ({ state }) => ({
            class: [
                'overflow-y-auto',
                'bg-white text-gray-700 px-6 pb-8 pt-0',
                'rounded-bl-lg rounded-br-lg',
                'dark:bg-gray-900  dark:text-white/80 ',
                {
                    grow: state.maximized
                }
            ]
        }),
        footer: {
            class: ['shrink-0 ', 'border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg', 'dark:bg-gray-900  dark:text-white/80']
        },
        mask: ({ props }) => ({
            class: ['transition duration-200', { 'bg-black/40': props.modal }]
        }),
        transition: ({ props }) => {
            return props.position === 'top'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0'
                  }
                : props.position === 'bottom'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-y-full',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0'
                  }
                : props.position === 'left' || props.position === 'topleft' || props.position === 'bottomleft'
                ? {
                      enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0'
                  }
                : props.position === 'right' || props.position === 'topright' || props.position === 'bottomright'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
                  }
                : {
                      enterFromClass: 'opacity-0 scale-75',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75'
                  };
        }
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Button label="Select a Product" icon="pi pi-search" @click="showProducts" />
        <Toast />
        <DynamicDialog />
    </div>
</template>

<script setup>
import { markRaw, defineAsyncComponent } from 'vue';
import { useDialog } from 'primevue/usedialog';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';
const ProductListDemo = defineAsyncComponent(() => import('./components/ProductListDemo.vue'));
const FooterDemo = defineAsyncComponent(() => import('./components/FooterDemo.vue'));

const dialog = useDialog();
const toast = useToast();

const showProducts = () => {
    const dialogRef = dialog.open(ProductListDemo, {
        props: {
            header: 'Product List',
            style: {
                width: '50vw',
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },
            modal: true
        },
        templates: {
            footer: markRaw(FooterDemo)
        },
        onClose: (options) => {
            const data = options.data;
            if (data) {
                const buttonType = data.buttonType;
                const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: \`Pressed '\${buttonType}' button\` } : { summary: 'Product Selected', detail: data.name };

                toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
            }
        }
    });
}
<\/script>`},extFiles:{options:{"src/components/ProductListDemo.vue":{content:`
<template>
	<div>
        <div class="flex justify-content-end mt-1 mb-3">
            <Button icon="pi pi-external-link" label="Nested Dialog" outlined severity="success" @click="showInfo" />
        </div>
        <DataTable :value="products">
			<Column field="code" header="Code"></Column>
			<Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="shadow-2 w-4rem" />
                </template>
            </Column>
			<Column field="category" header="Category"></Column>
			<Column field="quantity" header="Quantity"></Column>
            <Column style="width:5rem">
                <template #body="slotProps">
                    <Button type="button" icon="pi pi-plus" text rounded @click="selectProduct(slotProps.data)"></Button>
                </template>
            </Column>
		</DataTable>

	</div>
</template>

<script>
import { ProductService } from '@/service/ProductService';
import InfoDemo from './InfoDemo.vue';

export default {
    inject: ['dialogRef'],
    data() {
        return {
            products: null
        }
    },
    mounted() {
        ProductService.getProductsSmall().then(data => this.products = data.slice(0,5));
    },
    methods: {
        selectProduct(data) {
            this.dialogRef.close(data);
        },
        showInfo() {
            this.$dialog.open(InfoDemo, {
                props: {
                    header: 'Information',
                    modal: true,
                    dismissableMask: true
                },
                data: {
                    totalProducts: this.products ? this.products.length : 0
                }
            });
        }
    }
}
<\/script>`},"src/components/InfoDemo.vue":{content:`
<template>
    <div>
        <p>There are <strong>{{totalProducts}}</strong> products in total in this list.</p>
        <div class="flex justify-content-end">
            <Button type="button" label="Close" @click="closeDialog"></Button>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['dialogRef'],
    data() {
        return {
            totalProducts: 0
        }
    },
    mounted() {
        this.totalProducts = this.dialogRef.data.totalProducts;
    },
    methods: {
        closeDialog() {
            this.dialogRef.close();
        }
    }
}
<\/script>
                            `},"src/components/FooterDemo.vue":{content:`
<template>
    <Button type="button" label="No" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
    <Button type="button" label="Yes" icon="pi pi-check" @click="closeDialog({ buttonType: 'Yes' })" autofocus></Button>
</template>

<script>
export default {
    inject: ['dialogRef'],
    methods: {
        closeDialog(e) {
            this.dialogRef.close(e);
        }
    }
};
<\/script>`}},composition:{"src/components/ProductListDemo.vue":{content:`
<template>
	<div>
        <div class="flex justify-end mt-1 mb-3">
            <Button icon="pi pi-external-link" label="Nested Dialog" outlined severity="success" @click="showInfo" />
        </div>
        <DataTable :value="products">
			<Column field="code" header="Code"></Column>
			<Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="shadow-2 w-4rem" />
                </template>
            </Column>
			<Column field="category" header="Category"></Column>
			<Column field="quantity" header="Quantity"></Column>
            <Column style="width:5rem">
                <template #body="slotProps">
                    <Button type="button" icon="pi pi-plus" text rounded @click="selectProduct(slotProps.data)"></Button>
                </template>
            </Column>
		</DataTable>

	</div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import { useDialog } from "primevue/usedialog";
import { ProductService } from "@/service/ProductService";
import InfoDemo from "./InfoDemo.vue";

const dialogRef = inject("dialogRef");
const dialog = useDialog();
const products = ref(null);

onMounted(() => {
    ProductService
        .getProductsSmall()
        .then((data) => (products.value = data.slice(0, 5)));
});

const selectProduct = (data) => {
    dialogRef.value.close(data);
};

const showInfo = () => {
    dialog.open(InfoDemo, {
        props: {
            header: "Information",
            modal: true,
            dismissableMask: true,
        },
        data: {
            totalProducts: products.value ? products.value.length : 0,
        }
    });
};
<\/script>`},"src/components/InfoDemo.vue":{content:`
<template>
    <div>
        <p>There are <strong>{{totalProducts}}</strong> products in total in this list.</p>
        <div class="flex justify-end">
            <Button type="button" label="Close" @click="closeDialog"></Button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";

const totalProducts = ref(0);
const dialogRef = inject("dialogRef");

onMounted(() => {
    totalProducts.value = dialogRef.value.data.totalProducts;
});

const closeDialog = () => {
    dialogRef.value.close();
};
<\/script>
                            `},"src/components/FooterDemo.vue":{content:`
<template>
    <Button type="button" label="No" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
    <Button type="button" label="Yes" icon="pi pi-check" @click="closeDialog({ buttonType: 'Yes' })" autofocus></Button>
</template>

<script setup>
import { inject } from "vue";

const dialogRef = inject("dialogRef");

const closeDialog = (e) => {
    dialogRef.value.close(e);
};
<\/script>`}}}}}},Ut=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Et(n,c,l,r,o,d){const i=T,a=b,v=f;return p(),P(v,g(_(n.$attrs)),{default:m(()=>[e("p",null,[s(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(i,{to:"/tailwind"},{default:m(()=>[s("Tailwind Customization")]),_:1}),s(" section for an example. ")]),t(a,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ut,t(a,{code:o.code2,embedded:""},null,8,["code"])]),_:1},16)}const Wt=u(Qt,[["render",Et]]),Kt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Vt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Wt}]}]}}},Gt={class:"doc-main"},Ht=e("div",{class:"doc-intro"},[e("h1",null,"DynamicDialog Theming")],-1);function Jt(n,c,l,r,o,d){const i=w,a=k;return p(),h(D,null,[e("div",Gt,[Ht,t(i,{docs:o.docs},null,8,["docs"])]),t(a,{docs:o.docs},null,8,["docs"])],64)}const Xt=u(Kt,[["render",Jt]]),Zt={data(){return{docs:[{id:"import",label:"Import",component:ot},{id:"dialogservice",label:"Dialog Service",component:G},{id:"usage",label:"Usage",component:Tt},{id:"open",label:"Open",component:at},{id:"close",label:"Close",component:q},{id:"passingdata",label:"Passing Data",component:ut},{id:"emits",label:"Emits",component:Z},{id:"customization",label:"Customization",component:Q},{id:"accessibility",label:"Accessibility",component:F}],ptComponent:Yt,themingDoc:Xt}}};function te(n,c,l,r,o,d){const i=j;return p(),P(i,{title:"Vue Dynamic Dialog Component",header:"Dynamic Dialog",description:"Dialogs can be created dynamically with any component as the content using a DialogService.",componentDocs:o.docs,apiDocs:["DynamicDialog","Dialog","DialogService-UseDialog","DynamicDialogOptions"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ae=u(Zt,[["render",te]]);export{ae as default};
