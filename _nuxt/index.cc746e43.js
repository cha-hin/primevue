import{_ as m,o as u,e as $,w as h,a as t,m as D,b as e,f as r,p as w,h as g,j as C,c as y,n as _,g as b,F as v,A as j,t as B,D as P,k as T,l as k,x as S}from"./entry.68beb385.js";import{g as R}from"./PTHelper.11558b27.js";import{_ as A}from"./PrimeVueNuxtLink.f51d0c80.js";const Y={data(){return{code1:{basic:`<ConfirmDialog id="confirm" />

<Button @click="openDialog()" label="Confirm" :aria-expanded="visible" :aria-controls="visible ? 'confirm' : null"></Button>`},code2:{basic:`<script setup>
const confirm = useConfirm();
const isVisible = ref(false);

const openDialog = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        onShow: () => {
            isVisible.value = true;
        },
        onHide: () => {
            isVisible.value = false;
        }
    });
};
<\/script>`}}}},q=e("h3",null,"Screen Reader",-1),z=e("p",null,[r(" ConfirmDialog component uses "),e("i",null,"alertdialog"),r(" role along with "),e("i",null,"aria-labelledby"),r(" referring to the header element however any attribute is passed to the root element so you may use "),e("i",null,"aria-labelledby"),r(" to override this default behavior. In addition "),e("i",null,"aria-modal"),r(" is added since focus is kept within the popup. ")],-1),I=e("p",null,[r(" When "),e("i",null,"require"),r(" method of the "),e("i",null,"$confirm"),r(" instance is used and a trigger is passed as a parameter, ConfirmDialog adds "),e("i",null,"aria-expanded"),r(" state attribute and "),e("i",null,"aria-controls"),r(" to the trigger so that the relation between the trigger and the dialog is defined. ")],-1),L=e("h3",null,"Overlay Keyboard Support",-1),F=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next the focusable element within the dialog.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),r(" + "),e("i",null,"tab")]),e("td",null,"Moves focus to the previous the focusable element within the dialog.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the dialog.")])])])],-1),V=e("h3",null,"Buttons Keyboard Support",-1),N=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Closes the dialog.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Closes the dialog.")])])])],-1);function O(n,o,d,f,i,s){const a=w,c=g;return u(),$(c,D({id:"accessibility",label:"Accessibility"},n.$attrs),{default:h(()=>[q,z,I,t(a,D({code:i.code1,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},n.$attrs),null,16,["code"]),t(a,D({code:i.code2,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},n.$attrs),null,16,["code"]),L,F,V,N]),_:1},16)}const K=m(Y,[["render",O]]),U={data(){return{code:{basic:`<ConfirmDialog></ConfirmDialog>
<Button @click="confirm1()" icon="pi pi-check" label="Confirm"></Button>
<Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button>`,options:`<template>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm1()" icon="pi pi-check" label="Confirm"></Button>
        <Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        confirm1() {
            this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        },
        confirm2() {
            this.$confirm.require({
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        }
    }
};
<\/script>`,composition:`<template>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm1()" icon="pi pi-check" label="Confirm"></Button>
        <Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm1 = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

const confirm2 = () => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
<\/script>`}}},methods:{confirm1(){this.$confirm.require({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})},confirm2(){this.$confirm.require({message:"Do you want to delete this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:()=>{this.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}}},E=e("p",null,[r("ConfirmDialog is displayed by calling the "),e("i",null,"require"),r(" method of the "),e("i",null,"$confirm"),r(" instance by passing the options to customize the Dialog. "),e("i",null,"target"),r(" attribute is mandatory to align the popup to its caller.")],-1),M={class:"card flex flex-wrap gap-2 justify-content-center"};function W(n,o,d,f,i,s){const a=g,c=C("ConfirmDialog"),l=C("Button"),x=w;return u(),y(v,null,[t(a,_(b(n.$attrs)),{default:h(()=>[E]),_:1},16),t(c),e("div",M,[t(l,{onClick:o[0]||(o[0]=p=>s.confirm1()),icon:"pi pi-check",label:"Confirm"}),t(l,{onClick:o[1]||(o[1]=p=>s.confirm2()),icon:"pi pi-times",label:"Delete"})]),t(x,{code:i.code},null,8,["code"])],64)}const H=m(U,[["render",W]]),G={data(){return{code1:{basic:`import {createApp} from 'vue';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);
app.use(ConfirmationService);`},code2:{basic:`import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();`}}}},J=e("p",null,[r("ConfirmDialog is controlled via the "),e("i",null,"ConfirmationService"),r(" that needs to be installed as an application plugin.")],-1),Q=e("div",{class:"doc-section-description"},[e("p",null,[e("i",null,"$confirm"),r(" is available as a property in the application instance for Options API. The service can be injected with the "),e("i",null,"useConfirm"),r(" function for Composition API.")])],-1);function X(n,o,d,f,i,s){const a=g,c=w;return u(),y(v,null,[t(a,_(b(n.$attrs)),{default:h(()=>[J]),_:1},16),t(c,{code:i.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Q,t(c,{code:i.code2,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Z=m(G,[["render",X]]),ee={data(){return{code:{basic:"import ConfirmDialog from 'primevue/confirmdialog';"}}}};function te(n,o,d,f,i,s){const a=g,c=w;return u(),y(v,null,[t(a,_(b(n.$attrs)),null,16),t(c,{code:i.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const oe=m(ee,[["render",te]]),ie={data(){return{code:{basic:`<ConfirmDialog group="positionDialog"></ConfirmDialog>
<div class="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" severity="help" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" severity="help" style="min-width: 10rem"></Button>
</div>
<div class="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" severity="warning" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" severity="warning" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" severity="warning" style="min-width: 10rem"></Button>
</div>
<div class="flex flex-wrap justify-content-center gap-2">
    <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" severity="success" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="success" style="min-width: 10rem"></Button>
    <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" severity="success" style="min-width: 10rem"></Button>
</div>`,options:`<template>
    <Toast />
    <ConfirmDialog group="positionDialog"></ConfirmDialog>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" severity="help" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" severity="help" style="min-width: 10rem"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" severity="warning" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" severity="warning" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" severity="warning" style="min-width: 10rem"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" severity="success" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="success" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" severity="success" style="min-width: 10rem"></Button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        confirmPosition(position) {
            this.$confirm.require({
                group: 'positionDialog',
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                position: position,
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        },
    }
};
<\/script>`,composition:`<template>
    <Toast />
    <ConfirmDialog group="positionDialog"></ConfirmDialog>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button @click="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" severity="help" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" severity="help" style="min-width: 10rem"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button @click="confirmPosition('topleft')" icon="pi pi-arrow-down-right" label="TopLeft" severity="warning" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" severity="warning" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('topright')" icon="pi pi-arrow-down-left" label="TopRight" severity="warning" style="min-width: 10rem"></Button>
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button @click="confirmPosition('bottomleft')" icon="pi pi-arrow-up-right" label="BottomLeft" severity="success" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" severity="success" style="min-width: 10rem"></Button>
            <Button @click="confirmPosition('bottomright')" icon="pi pi-arrow-up-left" label="BottomRight" severity="success" style="min-width: 10rem"></Button>
        </div>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirmPosition = (position) => {
    confirm.require({
        group: 'positionDialog',
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        position: position,
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
<\/script>`}}},methods:{confirmPosition(n){this.$confirm.require({group:"positionDialog",message:"Do you want to delete this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",position:n,accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:()=>{this.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}}},ne=e("p",null,[r("The "),e("i",null,"position"),r(" property of the confirm options is used to display a Dialog at all edges and corners of the screen.")],-1),re={class:"card"},se={class:"flex flex-wrap justify-content-center gap-2 mb-2"},ae={class:"flex flex-wrap justify-content-center gap-2 mb-2"},ce={class:"flex flex-wrap justify-content-center gap-2"};function le(n,o,d,f,i,s){const a=g,c=C("ConfirmDialog"),l=C("Button"),x=w;return u(),y(v,null,[t(a,_(b(n.$attrs)),{default:h(()=>[ne]),_:1},16),t(c,{group:"positionDialog"}),e("div",re,[e("div",se,[t(l,{onClick:o[0]||(o[0]=p=>s.confirmPosition("left")),icon:"pi pi-arrow-right",label:"Left",severity:"help",style:{"min-width":"10rem"}}),t(l,{onClick:o[1]||(o[1]=p=>s.confirmPosition("right")),icon:"pi pi-arrow-left",label:"Right",severity:"help",style:{"min-width":"10rem"}})]),e("div",ae,[t(l,{onClick:o[2]||(o[2]=p=>s.confirmPosition("topleft")),icon:"pi pi-arrow-down-right",label:"TopLeft",severity:"warning",style:{"min-width":"10rem"}}),t(l,{onClick:o[3]||(o[3]=p=>s.confirmPosition("top")),icon:"pi pi-arrow-down",label:"Top",severity:"warning",style:{"min-width":"10rem"}}),t(l,{onClick:o[4]||(o[4]=p=>s.confirmPosition("topright")),icon:"pi pi-arrow-down-left",label:"TopRight",severity:"warning",style:{"min-width":"10rem"}})]),e("div",ce,[t(l,{onClick:o[5]||(o[5]=p=>s.confirmPosition("bottomleft")),icon:"pi pi-arrow-up-right",label:"BottomLeft",severity:"success",style:{"min-width":"10rem"}}),t(l,{onClick:o[6]||(o[6]=p=>s.confirmPosition("bottom")),icon:"pi pi-arrow-up",label:"Bottom",severity:"success",style:{"min-width":"10rem"}}),t(l,{onClick:o[7]||(o[7]=p=>s.confirmPosition("bottomright")),icon:"pi pi-arrow-up-left",label:"BottomRight",severity:"success",style:{"min-width":"10rem"}})])]),t(x,{code:i.code},null,8,["code"])],64)}const de=m(ie,[["render",le]]),pe={data(){return{code:{basic:`<ConfirmDialog group="templating">
    <template #message="slotProps">
        <div class="flex p-4">
            <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
            <p class="pl-2">{{ slotProps.message.message }}</p>
        </div>
    </template>
</ConfirmDialog>
<Button @click="showTemplate()" icon="pi pi-check" label="Terms and Conditions" class="mr-2"></Button>`,options:`<template>
    <Toast />
    <ConfirmDialog group="templating">
        <template #message="slotProps">
            <div class="flex p-4">
                <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                <p class="pl-2">{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="showTemplate()" icon="pi pi-check" label="Terms and Conditions" class="mr-2"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        showTemplate() {
            this.$confirm.require({
                group: 'templating',
                header: 'Terms and Conditions',
                message: 'Do you accept that?',
                icon: 'pi pi-question-circle',
                acceptIcon: 'pi pi-check',
                rejectIcon: 'pi pi-times',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        }
    }
};
<\/script>`,composition:`<template>
    <Toast />
    <ConfirmDialog group="templating">
        <template #message="slotProps">
            <div class="flex p-4">
                <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                <p class="pl-2">{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="showTemplate()" icon="pi pi-check" label="Terms and Conditions" class="mr-2"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const showTemplate = () => {
    confirm.require({
        group: 'templating',
        header: 'Terms and Conditions',
        message: 'Do you accept that?',
        icon: 'pi pi-question-circle',
        acceptIcon: 'pi pi-check',
        rejectIcon: 'pi pi-times',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
<\/script>`}}},methods:{showTemplate(){this.$confirm.require({group:"templating",header:"Terms and Conditions",message:"Do you accept that?",icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}}},me=e("p",null,"Templating allows customizing the content where the message instance is available as the implicit variable.",-1),ue={class:"flex p-4"},fe={class:"pl-2"},he={class:"card flex flex-wrap gap-2 justify-content-center"};function ge(n,o,d,f,i,s){const a=g,c=C("ConfirmDialog"),l=C("Button"),x=w;return u(),y(v,null,[t(a,_(b(n.$attrs)),{default:h(()=>[me]),_:1},16),t(c,{group:"templating"},{message:h(p=>[e("div",ue,[e("i",{class:j(p.message.icon),style:{"font-size":"1.5rem"}},null,2),e("p",fe,B(p.message.message),1)])]),_:1}),e("div",he,[t(l,{onClick:o[0]||(o[0]=p=>s.showTemplate()),icon:"pi pi-check",label:"Terms and Conditions",class:"mr-2"})]),t(x,{code:i.code},null,8,["code"])],64)}const ye=m(pe,[["render",ge]]),ve={data(){return{code:{basic:`<ConfirmDialog
    group="pt"
    :pt="{
        headerTitle: { class: 'text-primary' }
    }"
/>`,options:`<template>
    <ConfirmDialog
        group="pt"
        :pt="{
            headerTitle: { class: 'text-primary' }
        }"
    />
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm()" icon="pi pi-check" label="Confirm"></Button>
    </div>
    <Toast />
</template>

<script>
export default {
    methods: {
        confirm() {
            this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        }
    }
};
<\/script>`,composition:`<template>
    <ConfirmDialog
        group="pt"
        :pt="{
            headerTitle: { class: 'text-primary' }
        }"
    />
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm()" icon="pi pi-check" label="Confirm"></Button>
    </div>
    <Toast />
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
<\/script>`}}},methods:{confirm(){this.$confirm.require({group:"pt",message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}}},_e={class:"card flex flex-wrap gap-2 justify-content-center"};function be(n,o,d,f,i,s){const a=g,c=C("ConfirmDialog"),l=C("Button"),x=w;return u(),y(v,null,[t(a,_(b(n.$attrs)),null,16),t(c,{group:"pt",pt:{headerTitle:{class:"text-primary"}}}),e("div",_e,[t(l,{onClick:o[0]||(o[0]=p=>s.confirm()),icon:"pi pi-check",label:"Confirm"})]),t(x,{code:i.code},null,8,["code"])],64)}const Ce=m(ve,[["render",be]]),we={},xe=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/confirmdialog.jpg"})],-1);function De(n,o){const d=g;return u(),y(v,null,[t(d,_(b(n.$attrs)),{default:h(()=>[e("p",null,B(n.$attrs.description),1)]),_:1},16),xe],64)}const $e=m(we,[["render",De]]),Be={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:$e},{id:"pt.doc.confirmdialog",label:"ConfirmDialog PT Options",component:P,data:R("ConfirmDialog")},{id:"pt.demo",label:"Demo",component:Ce}]}}},Te={class:"doc-main"},ke=e("div",{class:"doc-intro"},[e("h1",null,"ConfirmDialog Pass Through")],-1);function je(n,o,d,f,i,s){const a=T,c=k;return u(),y(v,null,[e("div",Te,[ke,t(a,{docs:i.docs},null,8,["docs"])]),t(c,{docs:i.docs},null,8,["docs"])],64)}const Pe=m(Be,[["render",je]]),Se={},Re=e("p",null,"List of class names used in the styled mode.",-1),Ae=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Element")])]),e("tbody",null,[e("tr",null,[e("td",null,"p-confirm-dialog"),e("td",null,"Container element.")])])])],-1);function Ye(n,o){const d=g;return u(),y(v,null,[t(d,_(b(n.$attrs)),{default:h(()=>[Re]),_:1},16),Ae],64)}const qe=m(Se,[["render",Ye]]),ze={data(){return{code1:{basic:`
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
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="confirm1()" icon="pi pi-check" label="Confirm"></Button>
        <Button @click="confirm2()" icon="pi pi-times" label="Delete"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm1 = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

const confirm2 = () => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
<\/script>`}}}},Ie=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Le(n,o,d,f,i,s){const a=A,c=w,l=g;return u(),$(l,_(b(n.$attrs)),{default:h(()=>[e("p",null,[r(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(a,{to:"/tailwind"},{default:h(()=>[r("Tailwind Customization")]),_:1}),r(" section for an example. ")]),t(c,{code:i.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ie,t(c,{code:i.code2,embedded:""},null,8,["code"])]),_:1},16)}const Fe=m(ze,[["render",Le]]),Ve={data(){return{docs:[{id:"theming.styled",label:"Styled",component:qe},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Fe}]}]}}},Ne={class:"doc-main"},Oe=e("div",{class:"doc-intro"},[e("h1",null,"ConfirmDialog Theming")],-1);function Ke(n,o,d,f,i,s){const a=T,c=k;return u(),y(v,null,[e("div",Ne,[Oe,t(a,{docs:i.docs},null,8,["docs"])]),t(c,{docs:i.docs},null,8,["docs"])],64)}const Ue=m(Ve,[["render",Ke]]),Ee={data(){return{docs:[{id:"import",label:"Import",component:oe},{id:"confirmation-service",label:"Confirmation Service",component:Z},{id:"basic",label:"Basic",component:H},{id:"position",label:"Position",component:de},{id:"template",label:"Template",component:ye},{id:"accessibility",label:"Accessibility",component:K}],ptComponent:Pe,themingDoc:Ue}}};function Me(n,o,d,f,i,s){const a=S;return u(),$(a,{title:"Vue Confirmation Dialog Component",header:"ConfirmDialog",description:"ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API.",componentDocs:i.docs,apiDocs:["ConfirmDialog","ConfirmationService-UseConfirm","ConfirmationOptions"],ptTabComponent:i.ptComponent,themingDocs:i.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Je=m(Ee,[["render",Me]]);export{Je as default};
