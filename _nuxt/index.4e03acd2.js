import{_ as d,o as r,e as g,w as m,a as i,m as x,b as e,f as n,p as B,h as b,j as _,c as S,n as f,g as h,F as y,t as U,D as C,k,l as D,v as $,x as T}from"./entry.68beb385.js";import{g as j}from"./PTHelper.11558b27.js";import{_ as V}from"./PrimeVueNuxtLink.f51d0c80.js";const W={data(){return{code:{basic:`<SplitButton :buttonProps="{'aria-label': 'Default Action'}" :menuButtonProps="{'aria-label': 'More Options'}" />`}}}},P=e("h3",null,"Screen Reader",-1),z=e("p",null,[n(" SplitButton component renders two native button elements, main button uses the label property to define "),e("i",null,"aria-label"),n(" by default which can be customized with "),e("i",null,"buttonProps"),n(". Dropdown button requires an explicit definition to describe it using "),e("i",null,"menuButtonProps"),n(" option and also includes "),e("i",null,"aria-haspopup"),n(", "),e("i",null,"aria-expanded"),n(" for states along with "),e("i",null,"aria-controls"),n(" to define the relation between the popup and the button. ")],-1),A=e("p",null,[n("The popup overlay uses "),e("i",null,"menu"),n(" role on the list and each action item has a "),e("i",null,"menuitem"),n(" role with an "),e("i",null,"aria-label"),n(" as the menuitem label. The id of the menu refers to the "),e("i",null,"aria-controls"),n(" of the dropdown button.")],-1),I=e("h3",null,"Main Button Keyboard Support",-1),N=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Activates the button.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Activates the button.")])])])],-1),R=e("h3",null,"Menu Button Keyboard Support",-1),O=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("span",{class:"inline-flex flex-column"},[e("i",{class:"mb-1"},"enter"),e("i",{class:"mb-1"},"space"),e("i",{class:"mb-1"},"down arrow"),e("i",null,"up arrow")])]),e("td",null,"Opens the menu and moves focus to the first item.")])])])],-1),M=e("h3",null,"Menu Keyboard Support",-1),F=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"If menuitem has a submenu, opens the submenu otherwise activates the menuitem and closes all open overlays.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"If menuitem has a submenu, opens the submenu otherwise activates the menuitem and closes all open overlays.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next menuitem within the submenu.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous menuitem within the submenu.")]),e("tr",null,[e("td",null,[e("i",null,"alt"),n(" + "),e("i",null,"up arrow")]),e("td",null,"Closes the popup, then moves focus to the target element.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"In nested mode if option is closed, opens the option otherwise moves focus to the first child option.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"In nested mode if option is open, closes the option otherwise moves focus to the parent option.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first menuitem within the submenu.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last menuitem within the submenu.")]),e("tr",null,[e("td",null,[e("i",null,"any printable character")]),e("td",null,"Moves focus to the menuitem whose label starts with the characters being typed.")])])])],-1);function K(o,u,p,v,t,s){const a=B,l=b;return r(),g(l,x({id:"accessibility",label:"Accessibility"},o.$attrs),{default:m(()=>[P,z,A,i(a,x({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},o.$attrs),null,16,["code"]),I,N,R,O,M,F]),_:1},16)}const q=d(W,[["render",K]]),E={data(){return{items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",to:"/fileupload"}],code:{basic:'<SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items" />',options:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}},methods:{save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},L=e("p",null,[n("SplitButton has a default command button and a collection of additional options defined by the "),e("i",null,"model"),n(" property.")],-1),H={class:"card flex justify-content-center"};function G(o,u,p,v,t,s){const a=b,l=_("SplitButton"),c=B;return r(),S(y,null,[i(a,f(h(o.$attrs)),{default:m(()=>[L]),_:1},16),e("div",H,[i(l,{label:"Save",icon:"pi pi-plus",onClick:s.save,model:t.items},null,8,["onClick","model"])]),i(c,{code:t.code},null,8,["code"])],64)}const J=d(E,[["render",G]]),Q={data(){return{items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",to:"/fileupload"}],code:{basic:'<SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items" disabled />',options:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items" disabled />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}},methods:{save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},X=e("p",null,[n("When "),e("i",null,"disabled"),n(" is present, the element cannot be edited and focused.")],-1),Y={class:"card flex justify-content-center"};function Z(o,u,p,v,t,s){const a=b,l=_("SplitButton"),c=B;return r(),S(y,null,[i(a,f(h(o.$attrs)),{default:m(()=>[X]),_:1},16),e("div",Y,[i(l,{label:"Save",icon:"pi pi-plus",onClick:s.save,model:t.items,disabled:""},null,8,["onClick","model"])]),i(c,{code:t.code},null,8,["code"])],64)}const ee=d(Q,[["render",Z]]),te={data(){return{code:{basic:"import SplitButton from 'primevue/splitbutton';"}}}};function ie(o,u,p,v,t,s){const a=b,l=B;return r(),S(y,null,[i(a,f(h(o.$attrs)),null,16),i(l,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const le=d(te,[["render",ie]]),se={data(){return{items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",to:"/fileupload"}],code:{basic:`<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="secondary" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="success" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="info" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="warning" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="help" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="danger" class="mb-2"></SplitButton>`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ]
        }
    },
    methods: {
        toast() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" outlined severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}},methods:{save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},oe=e("p",null,"Outlined buttons display a border without a background initially.",-1),ae={class:"card flex justify-content-center flex-wrap gap-3"};function ne(o,u,p,v,t,s){const a=b,l=_("SplitButton"),c=B;return r(),S(y,null,[i(a,f(h(o.$attrs)),{default:m(()=>[oe]),_:1},16),e("div",ae,[i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,outlined:"",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,outlined:"",severity:"secondary",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,outlined:"",severity:"success",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,outlined:"",severity:"info",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,outlined:"",severity:"warning",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,outlined:"",severity:"help",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,outlined:"",severity:"danger",class:"mb-2"},null,8,["model","onClick"])]),i(c,{code:t.code},null,8,["code"])],64)}const ce=d(se,[["render",ne]]),pe={data(){return{items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",to:"/fileupload"}],code:{basic:`<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="secondary" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="success" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="info" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="warning" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="help" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="danger" class="mb-2"></SplitButton>`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}},methods:{save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},de=e("p",null,"Raised buttons display a shadow to indicate elevation.",-1),re={class:"card flex justify-content-center flex-wrap gap-3"};function ue(o,u,p,v,t,s){const a=b,l=_("SplitButton"),c=B;return r(),S(y,null,[i(a,f(h(o.$attrs)),{default:m(()=>[de]),_:1},16),e("div",re,[i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",severity:"secondary",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",severity:"success",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",severity:"info",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",severity:"warning",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",severity:"help",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",severity:"danger",class:"mb-2"},null,8,["model","onClick"])]),i(c,{code:t.code},null,8,["code"])],64)}const me=d(pe,[["render",ue]]),ve={data(){return{items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",to:"/fileupload"}],code:{basic:`<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="secondary" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="success" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="info" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="warning" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="help" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="danger" class="mb-2"></SplitButton>`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" raised text severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}},methods:{save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},be=e("p",null,"Text buttons can be displayed as raised as well for elevation.",-1),Se={class:"card flex justify-content-center flex-wrap gap-3"};function ye(o,u,p,v,t,s){const a=b,l=_("SplitButton"),c=B;return r(),S(y,null,[i(a,f(h(o.$attrs)),{default:m(()=>[be]),_:1},16),e("div",Se,[i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",text:"",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",text:"",severity:"secondary",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",text:"",severity:"success",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",text:"",severity:"info",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",text:"",severity:"warning",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",text:"",severity:"help",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,raised:"",text:"",severity:"danger",class:"mb-2"},null,8,["model","onClick"])]),i(c,{code:t.code},null,8,["code"])],64)}const fe=d(ve,[["render",ye]]),he={data(){return{items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",to:"/fileupload"}],code:{basic:`<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="secondary" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="success" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="info" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="warning" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="help" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="danger" class="mb-2"></SplitButton>`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" rounded severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}},methods:{save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},Be=e("p",null,"Rounded buttons have a circular border radius.",-1),_e={class:"card flex justify-content-center flex-wrap gap-3"};function ge(o,u,p,v,t,s){const a=b,l=_("SplitButton"),c=B;return r(),S(y,null,[i(a,f(h(o.$attrs)),{default:m(()=>[Be]),_:1},16),e("div",_e,[i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,rounded:"",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,rounded:"",severity:"secondary",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,rounded:"",severity:"success",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,rounded:"",severity:"info",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,rounded:"",severity:"warning",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,rounded:"",severity:"help",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,rounded:"",severity:"danger",class:"mb-2"},null,8,["model","onClick"])]),i(c,{code:t.code},null,8,["code"])],64)}const xe=d(he,[["render",ge]]),ke={data(){return{items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",to:"/fileupload"}],code:{basic:`<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="secondary" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="success" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="info" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="warning" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="help" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="danger" class="mb-2"></SplitButton>`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}},methods:{save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},De=e("p",null,[n("The "),e("i",null,"severity"),n(" option specifies the type of the message.")],-1),we={class:"card flex justify-content-center flex-wrap gap-3"};function Ue(o,u,p,v,t,s){const a=b,l=_("SplitButton"),c=B;return r(),S(y,null,[i(a,f(h(o.$attrs)),{default:m(()=>[De]),_:1},16),e("div",we,[i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,severity:"secondary",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,severity:"success",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,severity:"info",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,severity:"warning",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,severity:"help",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,severity:"danger",class:"mb-2"},null,8,["model","onClick"])]),i(c,{code:t.code},null,8,["code"])],64)}const Ce=d(ke,[["render",Ue]]),$e={data(){return{items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",to:"/fileupload"}],code:{basic:`<SplitButton label="Save" :model="items" icon="pi pi-plus" size="small"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" size="large"></SplitButton>`,options:`<template>
    <div class="card flex align-items-center justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" size="small"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" size="large"></SplitButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex align-items-center justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" size="small"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" size="large"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
{
    label: 'Update',
    icon: 'pi pi-refresh',
    command: () => {
        toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
    }
},
{
    label: 'Delete',
    icon: 'pi pi-times',
    command: () => {
        toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
    }
},
{
    label: 'Vue Website',
    icon: 'pi pi-external-link',
    command: () => {
        window.location.href = 'https://vuejs.org/';
    }
},
{ label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}},methods:{save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},Te=e("p",null,[n("SplitButton provides "),e("i",null,"small"),n(" and "),e("i",null,"large"),n(" sizes as alternatives to the standard.")],-1),je={class:"card flex align-items-center justify-content-center flex-wrap gap-3"};function Ve(o,u,p,v,t,s){const a=b,l=_("SplitButton"),c=B;return r(),S(y,null,[i(a,f(h(o.$attrs)),{default:m(()=>[Te]),_:1},16),e("div",je,[i(l,{label:"Save",model:t.items,icon:"pi pi-plus",size:"small"},null,8,["model"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus"},null,8,["model"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",size:"large"},null,8,["model"])]),i(c,{code:t.code},null,8,["code"])],64)}const We=d($e,[["render",Ve]]),Pe={data(){return{items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",to:"/fileupload"}],code:{basic:`<SplitButton :model="items" icon="pi pi-plus" class="bg-primary border-round">
    <Button @click="save">
        <img alt="logo" src="/images/logo.svg" style="width: 1rem" />
        <span class="ml-2 flex align-items-center font-bold">PrimeVue</span>
    </Button>
</SplitButton>`,options:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <SplitButton :model="items" icon="pi pi-plus" class="bg-primary border-round">
            <Button @click="save">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" style="width: 1rem" />
                <span class="ml-2 flex align-items-center font-bold">PrimeVue</span>
            </Button>
        </SplitButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <SplitButton :model="items" icon="pi pi-plus" class="bg-primary border-round">
            <Button @click="save">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" style="width: 1rem" />
                <span class="ml-2 flex align-items-center font-bold">PrimeVue</span>
            </Button>
        </SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}},methods:{save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},ze=e("p",null,"Custom content inside a button is defined as children.",-1),Ae={class:"card flex justify-content-center"},Ie=e("img",{alt:"logo",src:"https://primefaces.org/cdn/primevue/images/logo.svg",style:{width:"1rem"}},null,-1),Ne=e("span",{class:"ml-2 flex align-items-center font-bold"},"PrimeVue",-1);function Re(o,u,p,v,t,s){const a=b,l=_("Button"),c=_("SplitButton"),w=B;return r(),S(y,null,[i(a,f(h(o.$attrs)),{default:m(()=>[ze]),_:1},16),e("div",Ae,[i(c,{model:t.items,icon:"pi pi-plus",class:"bg-primary border-round"},{default:m(()=>[i(l,{onClick:s.save},{default:m(()=>[Ie,Ne]),_:1},8,["onClick"])]),_:1},8,["model"])]),i(w,{code:t.code},null,8,["code"])],64)}const Oe=d(Pe,[["render",Re]]),Me={data(){return{items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",to:"/fileupload"}],code:{basic:`<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="secondary" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="success" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="info" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="warning" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="help" class="mb-2"></SplitButton>
<SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="danger" class="mb-2"></SplitButton>`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" text severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}},methods:{save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},Fe=e("p",null,"Text buttons are displayed as textual elements.",-1),Ke={class:"card flex justify-content-center flex-wrap gap-3"};function qe(o,u,p,v,t,s){const a=b,l=_("SplitButton"),c=B;return r(),S(y,null,[i(a,f(h(o.$attrs)),{default:m(()=>[Fe]),_:1},16),e("div",Ke,[i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,text:"",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,text:"",severity:"secondary",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,text:"",severity:"success",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,text:"",severity:"info",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,text:"",severity:"warning",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,text:"",severity:"help",class:"mb-2"},null,8,["model","onClick"]),i(l,{label:"Save",model:t.items,icon:"pi pi-plus",onClick:s.save,text:"",severity:"danger",class:"mb-2"},null,8,["model","onClick"])]),i(c,{code:t.code},null,8,["code"])],64)}const Ee=d(Me,[["render",qe]]),Le={data(){return{items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",to:"/fileupload"}],code:{basic:`<SplitButton label="Save"
    @click="save"
    :model="items"
    :pt="{
        menu: {
            root: { class: 'surface-ground' }
        }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <SplitButton
            label="Save"
            icon="pi pi-plus"
            @click="save"
            :model="items"
            :pt="{
                menu: {
                    root: { class: 'surface-ground' }
                }
            }"
        />
    </div>
    <Toast />
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
            ]
        };
    },
    methods: {
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <SplitButton
            label="Save"
            icon="pi pi-plus"
            @click="save"
            :model="items"
            :pt="{
                menu: {
                    root: { class: 'surface-ground' }
                }
            }"
        />
    </div>
    <Toast />
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}},methods:{save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},He={class:"card flex justify-content-center"};function Ge(o,u,p,v,t,s){const a=b,l=_("SplitButton"),c=B;return r(),S(y,null,[i(a,f(h(o.$attrs)),null,16),e("div",He,[i(l,{label:"Save",onClick:s.save,model:t.items,pt:{menu:{root:{class:"surface-ground"}}}},null,8,["onClick","model"])]),i(c,{code:t.code},null,8,["code"])],64)}const Je=d(Le,[["render",Ge]]),Qe={},Xe=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/splitbutton.jpg"})],-1);function Ye(o,u){const p=b;return r(),S(y,null,[i(p,f(h(o.$attrs)),{default:m(()=>[e("p",null,U(o.$attrs.description),1)]),_:1},16),Xe],64)}const Ze=d(Qe,[["render",Ye]]),et={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ze},{id:"pt.doc.splitbutton",label:"SplitButton PT Options",component:C,data:j("SplitButton")},{id:"pt.demo",label:"Demo",component:Je}]}}},tt={class:"doc-main"},it=e("div",{class:"doc-intro"},[e("h1",null,"SplitButton Pass Through")],-1);function lt(o,u,p,v,t,s){const a=k,l=D;return r(),S(y,null,[e("div",tt,[it,i(a,{docs:t.docs},null,8,["docs"])]),i(l,{docs:t.docs},null,8,["docs"])],64)}const st=d(et,[["render",lt]]),ot={},at=e("p",null,"List of class names used in the styled mode.",-1),nt=$('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-splitbutton</td><td>Container element.</td></tr><tr><td>p-splitbutton-defaultbutton</td><td>Default button.</td></tr><tr><td>p-splitbutton-menubutton</td><td>Dropdown button.</td></tr><tr><td>p-tieredmenu</td><td>Overlay menu.</td></tr></tbody></table></div>',1);function ct(o,u){const p=b;return r(),S(y,null,[i(p,f(h(o.$attrs)),{default:m(()=>[at]),_:1},16),nt],64)}const pt=d(ot,[["render",ct]]),dt={data(){return{code1:{basic:`export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    splitbutton: {
        root: ({ props }) => ({
            class: ['inline-flex relative', 'rounded-md', { 'shadow-lg': props.raised }]
        }),
        button: {
            root: ({ parent }) => ({
                class: ['rounded-r-none border-r-0', { 'rounded-l-full': parent.props.rounded }]
            }),
            icon: 'mr-2'
        },
        menubutton: {
            root: ({ parent }) => ({
                class: ['rounded-l-none', { 'rounded-r-full': parent.props.rounded }]
            }),
            label: 'hidden'
        }
    },
    button: {
        root: ({ props, context }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom h-full',
                'transition duration-200 ease-in-out',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]', // Primary button focus
                {
                    'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                    'text-blue-600 bg-transparent border-transparent': props.link
                },
                {
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-green-500 border border-green-500 hover:bg-green-600 hover:border-green-600': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-orange-500 border border-orange-500 hover:bg-orange-600 hover:border-orange-600': props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:border-purple-600': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-red-500 border border-red-500 hover:bg-red-600 hover:border-red-600': props.severity === 'danger' && !props.text && !props.outlined && !props.plain
                },
                { 'shadow-lg': props.raised },
                { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
                {
                    'bg-transparent border-transparent': props.text && !props.plain,
                    'text-blue-500 hover:bg-blue-300/20': props.text && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 hover:bg-gray-300/20': props.text && props.severity === 'secondary' && !props.plain,
                    'text-green-500 hover:bg-green-300/20': props.text && props.severity === 'success' && !props.plain,
                    'text-orange-500 hover:bg-orange-300/20': props.text && props.severity === 'warning' && !props.plain,
                    'text-purple-500 hover:bg-purple-300/20': props.text && props.severity === 'help' && !props.plain,
                    'text-red-500 hover:bg-red-300/20': props.text && props.severity === 'danger' && !props.plain
                },
                { 'shadow-lg': props.raised && props.text },
                {
                    'text-gray-500 hover:bg-gray-300/20': props.plain & props.text,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.plain & props.outlined,
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain & !props.outlined & !props.text
                },
                {
                    'bg-transparent border': props.outlined && !props.plain,
                    'text-blue-500 border border-blue-500 hover:bg-blue-300/20': props.outlined && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.outlined && props.severity === 'secondary' && !props.plain,
                    'text-green-500 border border-green-500 hover:bg-green-300/20': props.outlined && props.severity === 'success' && !props.plain,
                    'text-orange-500 border border-orange-500 hover:bg-orange-300/20': props.outlined && props.severity === 'warning' && !props.plain,
                    'text-purple-500 border border-purple-500 hover:bg-purple-300/20': props.outlined && props.severity === 'help' && !props.plain,
                    'text-red-500 border border-red-500 hover:bg-red-300/20': props.outlined && props.severity === 'danger' && !props.plain
                },
                { 'px-4 py-3 text-base': props.size === null, 'text-xs py-2 px-3': props.size === 'small', 'text-xl py-3 px-4': props.size === 'large' },
                { 'opacity-60 pointer-events-none cursor-default': context.disabled }
            ]
        }),
        label: ({ props }) => ({
            class: [
                'flex-1',
                'duration-200',
                'font-bold',
                {
                    'hover:underline': props.link
                }
            ]
        }),
        icon: ({ props }) => ({
            class: [
                'mx-0',
                {
                    'mr-2': props.iconPos == 'left' && props.label != null,
                    'ml-2': props.iconPos == 'right' && props.label != null,
                    'mb-2': props.iconPos == 'top' && props.label != null,
                    'mt-2': props.iconPos == 'bottom' && props.label != null
                }
            ]
        }),
        badge: ({ props }) => ({
            class: [{ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge }]
        })
    },
    tieredmenu: {
        root: {
            class: ['py-1 bg-white border border-gray-300 rounded-lg w-[12.5rem]', 'dark:border-blue-900/40 dark:bg-gray-900']
        },
        menu: {
            class: ['outline-none', 'm-0 p-0 list-none']
        },
        menuitem: 'relative',
        content: ({ context }) => ({
            class: [
                'transition-shadow duration-200 border-none rounded-none',
                'hover:bg-gray-200 hover:text-gray-700 dark:hover:text-white/80 dark:hover:bg-gray-800/80', //Hover
                {
                    'text-gray-700': !context.focused && !context.active,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.active,
                    'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.active
                }
            ]
        }),
        action: ({ context }) => ({
            class: [
                'py-3 px-5 select-none',
                'flex items-center cursor-pointer no-underline relative overflow-hidden',
                {
                    'text-gray-700 dark:text-white/80 hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.active,
                    'text-blue-600 bg-blue-100': context.active
                }
            ]
        }),
        icon: 'mr-2',
        submenuicon: 'ml-auto',
        separator: 'border-t border-gray-300 my-1 dark:border-blue-900/40',
        submenu: {
            class: ['py-1 bg-white dark:bg-gray-900 border-0 shadow-md min-w-full', 'absolute z-10', 'left-full top-0']
        },
        transition: TRANSITIONS.overlay
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center flex-wrap">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}}},rt=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function ut(o,u,p,v,t,s){const a=V,l=B,c=b;return r(),g(c,f(h(o.$attrs)),{default:m(()=>[e("p",null,[n(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),i(a,{to:"/tailwind"},{default:m(()=>[n("Tailwind Customization")]),_:1}),n(" section for an example. ")]),i(l,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),rt,i(l,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const mt=d(dt,[["render",ut]]),vt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:pt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:mt}]}]}}},bt={class:"doc-main"},St=e("div",{class:"doc-intro"},[e("h1",null,"SplitButton Theming")],-1);function yt(o,u,p,v,t,s){const a=k,l=D;return r(),S(y,null,[e("div",bt,[St,i(a,{docs:t.docs},null,8,["docs"])]),i(l,{docs:t.docs},null,8,["docs"])],64)}const ft=d(vt,[["render",yt]]),ht={data(){return{docs:[{id:"import",label:"Import",component:le},{id:"basic",label:"Basic",component:J},{id:"severity",label:"Severity",component:Ce},{id:"raised",label:"Raised",component:me},{id:"rounded",label:"Rounded",component:xe},{id:"text",label:"Text",component:Ee},{id:"raisedtext",label:"Raised Text",component:fe},{id:"outlined",label:"Outlined",component:ce},{id:"sizes",label:"Sizes",component:We},{id:"template",label:"Template",component:Oe},{id:"disabled",label:"Disabled",component:ee},{id:"accessibility",label:"Accessibility",component:q}],ptComponent:st,themingDoc:ft}}};function Bt(o,u,p,v,t,s){const a=T;return r(),g(a,{title:"Vue SplitButton Component",header:"SplitButton",description:"SplitButton groups a set of commands in an overlay with a default command.",componentDocs:t.docs,apiDocs:["SplitButton"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const kt=d(ht,[["render",Bt]]);export{kt as default};
