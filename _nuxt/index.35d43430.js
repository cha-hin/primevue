import{_ as p,o as d,e as w,w as f,a as o,m as x,b as e,f as i,p as C,h,j as $,c as _,n as y,g as b,F as g,A as k,t as j,D as S,k as P,l as D,v as B,x as Y}from"./entry.68beb385.js";import{g as A}from"./PTHelper.11558b27.js";import{_ as R}from"./PrimeVueNuxtLink.f51d0c80.js";const q={data(){return{code1:{basic:`<ConfirmPopup id="confirm" aria-label="popup" />

<Button @click="openPopup($event)" label="Confirm" id="confirmButton" :aria-expanded="isVisible" :aria-controls="isVisible ? 'confirm' : null" />`},code2:{basic:`<script setup>
const confirm = useConfirm();
const isVisible = ref(false);
const openPopup = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        onShow: () => {
            isVisible.value = true;
        },
        onHide: () => {
            isVisible.value = false;
        }
    });
}
<\/script>`}}}},z=e("h3",null,"Screen Reader",-1),I=e("p",null,[i(" ConfirmPopup component uses "),e("i",null,"alertdialog"),i(" role and since any attribute is passed to the root element you may define attributes like "),e("i",null,"aria-label"),i(" or "),e("i",null,"aria-labelledby"),i(" to describe the popup contents. In addition "),e("i",null,"aria-modal"),i(" is added since focus is kept within the popup. ")],-1),N=e("p",null,[i(" When "),e("i",null,"require"),i(" method of the "),e("i",null,"$confirm"),i(" instance is used and a trigger is passed as a parameter, ConfirmDialog adds "),e("i",null,"aria-expanded"),i(" state attribute and "),e("i",null,"aria-controls"),i(" to the trigger so that the relation between the trigger and the dialog is defined. ")],-1),V=e("h3",null,"Overlay Keyboard Support",-1),O=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next the focusable element within the popup.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),i(" + "),e("i",null,"tab")]),e("td",null,"Moves focus to the previous the focusable element within the popup.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup and moves focus to the trigger.")])])])],-1),F=e("h3",null,"Buttons Keyboard Support",-1),K=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Triggers the action, closes the popup and moves focus to the trigger.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Triggers the action, closes the popup and moves focus to the trigger.")])])])],-1);function M(t,c,a,m,n,l){const r=C,s=h;return d(),w(s,x({id:"accessibility",label:"Accessibility"},t.$attrs),{default:f(()=>[z,I,N,o(r,x({code:n.code1,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},t.$attrs),null,16,["code"]),o(r,x({code:n.code2,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},t.$attrs),null,16,["code"]),V,O,F,K]),_:1},16)}const E=p(q,[["render",M]]),L={data(){return{code:{basic:`<ConfirmPopup></ConfirmPopup>
<div class="card flex flex-wrap gap-2 justify-content-center">
    <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm"></Button>
    <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" outlined severity="danger"></Button>
</div>`,options:`<template>
    <Toast />
    <ConfirmPopup></ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm"></Button>
        <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" outlined severity="danger"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        confirm1(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        },
        confirm2(event) {
            this.$confirm.require({
                target: event.currentTarget,
                message: 'Do you want to delete this record?',
                icon: 'pi pi-info-circle',
                acceptClass: 'p-button-danger',
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
    <ConfirmPopup></ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm"></Button>
        <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" outlined severity="danger"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm1 = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

const confirm2 = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'Do you want to delete this record?',
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
<\/script>`}}},methods:{confirm1(t){this.$confirm.require({target:t.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})},confirm2(t){this.$confirm.require({target:t.currentTarget,message:"Do you want to delete this record?",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:()=>{this.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}}},U=e("p",null,[i("ConfirmDialog is displayed by calling the "),e("i",null,"require"),i(" method of the "),e("i",null,"$confirm"),i(" instance by passing the options to customize the Popup. "),e("i",null,"target"),i(" attribute is mandatory to align the popup to its caller.")],-1),W={class:"card flex flex-wrap gap-2 justify-content-center"};function H(t,c,a,m,n,l){const r=h,s=$("ConfirmPopup"),v=$("Button"),T=C;return d(),_(g,null,[o(r,y(b(t.$attrs)),{default:f(()=>[U]),_:1},16),o(s),e("div",W,[o(v,{onClick:c[0]||(c[0]=u=>l.confirm1(u)),icon:"pi pi-check",label:"Confirm"}),o(v,{onClick:c[1]||(c[1]=u=>l.confirm2(u)),icon:"pi pi-times",label:"Delete",outlined:"",severity:"danger"})]),o(T,{code:n.code},null,8,["code"])],64)}const G=p(L,[["render",H]]),J={data(){return{code1:{basic:`import {createApp} from 'vue';
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);
app.use(ConfirmationService);`},code2:{basic:`import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();`}}}},Q=e("p",null,[i("ConfirmPopup is controlled via the "),e("i",null,"ConfirmationService"),i(" that needs to be installed as an application plugin.")],-1),X=e("div",{class:"doc-section-description"},[e("p",null,[e("i",null,"$confirm"),i(" is available as a property in the application instance for Options API. The service can be injected with the "),e("i",null,"useConfirm"),i(" function for Composition API.")])],-1);function Z(t,c,a,m,n,l){const r=h,s=C;return d(),_(g,null,[o(r,y(b(t.$attrs)),{default:f(()=>[Q]),_:1},16),o(s,{code:n.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),X,o(s,{code:n.code2,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ee=p(J,[["render",Z]]),te={data(){return{code:{basic:"import ConfirmPopup from 'primevue/confirmpopup';"}}}};function oe(t,c,a,m,n,l){const r=h,s=C;return d(),_(g,null,[o(r,y(b(t.$attrs)),null,16),o(s,{code:n.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ne=p(te,[["render",oe]]),ie={data(){return{code:{basic:`<ConfirmPopup group="demo">
    <template #message="slotProps">
        <div class="flex p-4">
            <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
            <p class="pl-2">{{ slotProps.message.message }}</p>
        </div>
    </template>
</ConfirmPopup>
<div class="card flex flex-wrap gap-2 justify-content-center">
    <Button @click="showTemplate($event)" icon="pi pi-check" label="Terms and Conditions"></Button>
</div>`,options:`<template>
    <Toast />
    <ConfirmPopup group="demo">
        <template #message="slotProps">
            <div class="flex p-4">
                <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                <p class="pl-2">{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="showTemplate($event)" icon="pi pi-check" label="Terms and Conditions"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        showTemplate(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'demo',
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
    <ConfirmPopup group="demo">
        <template #message="slotProps">
            <div class="flex p-4">
                <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>
                <p class="pl-2">{{ slotProps.message.message }}</p>
            </div>
        </template>
    </ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="showTemplate($event)" icon="pi pi-check" label="Terms and Conditions"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const showTemplate = (event) => {
    confirm.require({
        target: event.currentTarget,
        group: 'demo',
        message: 'Do you accept that?',
        icon: 'pi pi-question-circle',
        acceptIcon: 'pi pi-check',
        rejectIcon: 'pi pi-times',
        accept: () => {
            toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
        },
        reject: () => {
            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
        }
    });
}
<\/script>`}}},methods:{showTemplate(t){this.$confirm.require({target:t.currentTarget,group:"demo",message:"Do you accept that?",icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}}},re=e("p",null,"Templating allows customizing the content where the message instance is available as the implicit variable.",-1),ce={class:"flex p-4"},se={class:"pl-2"},ae={class:"card flex flex-wrap gap-2 justify-content-center"};function le(t,c,a,m,n,l){const r=h,s=$("ConfirmPopup"),v=$("Button"),T=C;return d(),_(g,null,[o(r,y(b(t.$attrs)),{default:f(()=>[re]),_:1},16),o(s,{group:"demo"},{message:f(u=>[e("div",ce,[e("i",{class:k(u.message.icon),style:{"font-size":"1.5rem"}},null,2),e("p",se,j(u.message.message),1)])]),_:1}),e("div",ae,[o(v,{onClick:c[0]||(c[0]=u=>l.showTemplate(u)),icon:"pi pi-check",label:"Terms and Conditions"})]),o(T,{code:n.code},null,8,["code"])],64)}const pe=p(ie,[["render",le]]),de={data(){return{code:{basic:`<ConfirmPopup
    group="pt"
    :pt="{
        root: { class: 'surface-100' }
    }"
/>`,options:`<template>
    <ConfirmPopup
        group="pt"
        :pt="{
            root: { class: 'surface-100' }
        }"
    />
    <Toast />
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm($event)" icon="pi pi-check" label="Confirm"></Button>
    </div>
</template>

<script>
export default {
    methods: {
        confirm(event) {
            this.$confirm.require({
                group: 'pt',
                target: event.currentTarget,
                message: 'Are you sure you want to proceed?',
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
    <ConfirmPopup
        group="pt"
        :pt="{
            root: { class: 'surface-100' }
        }"
    />
    <Toast />
    <div class="card flex flex-wrap gap-2 justify-content-center">
        <Button @click="confirm($event)" icon="pi pi-check" label="Confirm"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm = (event) => {
    confirm.require({
        group: 'pt',
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
<\/script>`}}},methods:{confirm(t){this.$confirm.require({group:"pt",target:t.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",accept:()=>{this.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}}},ue={class:"card flex flex-wrap gap-2 justify-content-center"};function me(t,c,a,m,n,l){const r=h,s=$("ConfirmPopup"),v=$("Button"),T=C;return d(),_(g,null,[o(r,y(b(t.$attrs)),null,16),o(s,{group:"pt",pt:{root:{class:"surface-100"}}}),e("div",ue,[o(v,{onClick:c[0]||(c[0]=u=>l.confirm(u)),icon:"pi pi-check",label:"Confirm"})]),o(T,{code:n.code},null,8,["code"])],64)}const fe=p(de,[["render",me]]),he={},_e=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/confirmpopup.jpg"})],-1);function ge(t,c){const a=h;return d(),_(g,null,[o(a,y(b(t.$attrs)),{default:f(()=>[e("p",null,j(t.$attrs.description),1)]),_:1},16),_e],64)}const ve=p(he,[["render",ge]]),ye={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ve},{id:"pt.doc.confirmpopup",label:"ConfirmPopup PT Options",component:S,data:A("ConfirmPopup")},{id:"pt.demo",label:"Demo",component:fe}]}}},be={class:"doc-main"},Ce=e("div",{class:"doc-intro"},[e("h1",null,"ConfirmPopup Pass Through")],-1);function $e(t,c,a,m,n,l){const r=P,s=D;return d(),_(g,null,[e("div",be,[Ce,o(r,{docs:n.docs},null,8,["docs"])]),o(s,{docs:n.docs},null,8,["docs"])],64)}const Te=p(ye,[["render",$e]]),xe={},we=e("p",null,"List of class names used in the styled mode.",-1),je=B('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-confirm-popup</td><td>Container element.</td></tr><tr><td>p-confirm-popup-content</td><td>Content element.</td></tr><tr><td>p-confirm-popup-icon</td><td>Message icon.</td></tr><tr><td>p-confirm-popup-message</td><td>Message text.</td></tr><tr><td>p-confirm-popup-footer</td><td>Footer element for buttons.</td></tr></tbody></table></div>',1);function Pe(t,c){const a=h;return d(),_(g,null,[o(a,y(b(t.$attrs)),{default:f(()=>[we]),_:1},16),je],64)}const De=p(xe,[["render",Pe]]),ke={data(){return{code1:{basic:`
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
export default {
    confirmpopup: {
        root: {
            class: [
                'bg-white text-gray-700 border-0 rounded-md shadow-lg',
                'z-40 transform origin-center',
                'mt-3 absolute left-0 top-0',
                'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-white dark:before:border-b-gray-900',
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            ]
        },
        content: 'p-5 items-center flex',
        icon: 'text-2xl',
        message: 'ml-4',
        footer: 'text-right px-5 py-5 pt-0 ',
        transition: TRANSITIONS.overlay
    }
}
`},code2:{composition:`<template>
    <Toast />
    <ConfirmPopup></ConfirmPopup>
    <div class="card flex flex-wrap gap-2 justify-center">
        <Button @click="confirm1($event)" icon="pi pi-check" label="Confirm"></Button>
        <Button @click="confirm2($event)" icon="pi pi-times" label="Delete" outlined severity="danger"></Button>
    </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();

const confirm1 = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

const confirm2 = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'Do you want to delete this record?',
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
<\/script>`}}}},Se=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Be(t,c,a,m,n,l){const r=R,s=C,v=h;return d(),w(v,y(b(t.$attrs)),{default:f(()=>[e("p",null,[i(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(r,{to:"/tailwind"},{default:f(()=>[i("Tailwind Customization")]),_:1}),i(" section for an example. ")]),o(s,{code:n.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Se,o(s,{code:n.code2,embedded:""},null,8,["code"])]),_:1},16)}const Ye=p(ke,[["render",Be]]),Ae={data(){return{docs:[{id:"theming.styled",label:"Styled",component:De},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Ye}]}]}}},Re={class:"doc-main"},qe=e("div",{class:"doc-intro"},[e("h1",null,"ConfirmPopup Theming")],-1);function ze(t,c,a,m,n,l){const r=P,s=D;return d(),_(g,null,[e("div",Re,[qe,o(r,{docs:n.docs},null,8,["docs"])]),o(s,{docs:n.docs},null,8,["docs"])],64)}const Ie=p(Ae,[["render",ze]]),Ne={data(){return{docs:[{id:"import",label:"Import",component:ne},{id:"confirmation-service",label:"Confirmation Service",component:ee},{id:"basic",label:"Basic",component:G},{id:"template",label:"Template",component:pe},{id:"accessibility",label:"Accessibility",component:E}],ptComponent:Te,themingDoc:Ie}}};function Ve(t,c,a,m,n,l){const r=Y;return d(),w(r,{title:"Vue Confirmation Popup Component",header:"ConfirmPopup",description:"ConfirmPopup displays a confirmation overlay displayed relatively to its target.",componentDocs:n.docs,apiDocs:["ConfirmPopup","ConfirmationService-UseConfirm","ConfirmationOptions"],ptTabComponent:n.ptComponent,themingDocs:n.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Me=p(Ne,[["render",Ve]]);export{Me as default};
