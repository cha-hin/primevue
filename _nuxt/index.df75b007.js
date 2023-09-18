import{_ as d,o as u,e as x,w as m,b as t,f as n,a as e,m as M,C as D,h,j as w,c as _,n as g,g as v,F as y,p as b,t as T,D as I,k,l as B,v as j,x as P}from"./entry.68beb385.js";import{g as L}from"./PTHelper.11558b27.js";import{_ as W}from"./PrimeVueNuxtLink.f51d0c80.js";const E={data(){return{code1:{basic:`<ConfirmDialog id="confirm" />

<Button @click="openDialog()" label="Confirm" :aria-expanded="visible" :aria-controls="visible ? 'confirm' : null"></Button>

`},code2:{basic:`<script setup>
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
<\/script>`}}}},A=t("h3",null,"Screen Reader",-1),R=t("p",null,[n("Toast component use "),t("i",null,"alert"),n(" role that implicitly defines "),t("i",null,"aria-live"),n(' as "assertive" and '),t("i",null,"aria-atomic"),n(' as "true".')],-1),z=t("i",null,"button",-1),N=t("i",null,"aria-label",-1),V=t("i",null,"aria.close",-1),F=t("i",null,"closeButtonProps",-1),G=t("i",null,"aria-label",-1),Y=t("h3",null,"Close Button Keyboard Support",-1),O=t("div",{class:"doc-tablewrapper"},[t("table",{class:"doc-table"},[t("thead",null,[t("tr",null,[t("th",null,"Key"),t("th",null,"Function")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("i",null,"enter")]),t("td",null,"Closes the message.")]),t("tr",null,[t("td",null,[t("i",null,"space")]),t("td",null,"Closes the message.")])])])],-1);function q(a,c,r,f,s,i){const l=D,o=h;return u(),x(o,M({id:"accessibility",label:"Accessibility"},a.$attrs),{default:m(()=>[A,R,t("p",null,[n(" Close element is a "),z,n(" with an "),N,n(" that refers to the "),V,n(" property of the "),e(l,{to:"/configuration/#locale"},{default:m(()=>[n("locale")]),_:1}),n(" API by default, you may use "),F,n(" to customize the element and override the default "),G,n(". ")]),Y,O]),_:1},16)}const K=d(E,[["render",q]]),U={data(){return{code:{basic:`<Toast />
<Button label="Show" @click="show()" />`,options:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Button label="Show" @click="show()" />
    </div>
</template>

<script>
export default {
    methods: {
        show() {
            this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Button label="Show" @click="show()" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};
<\/script>`}}},methods:{show(){this.$toast.add({severity:"info",summary:"Info",detail:"Message Content",life:3e3})}}},H=t("p",null," Ideal location of a Toast is the main application template so that it can be used by any component within the application. A single message is represented by the Message interface in PrimeVue that defines various properties such as severity, summary and detail. ",-1),J={class:"card flex justify-content-center"};function Q(a,c,r,f,s,i){const l=h,o=w("Button"),p=b;return u(),_(y,null,[e(l,g(v(a.$attrs)),{default:m(()=>[H]),_:1},16),t("div",J,[e(o,{label:"Show",onClick:c[0]||(c[0]=$=>i.show())})]),e(p,{code:s.code},null,8,["code"])],64)}const X=d(U,[["render",Q]]),Z={data(){return{code:{basic:"import Toast from 'primevue/toast';"}}}};function tt(a,c,r,f,s,i){const l=h,o=b;return u(),_(y,null,[e(l,g(v(a.$attrs)),null,16),e(o,{code:s.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const et=d(Z,[["render",tt]]),ot={data(){return{code:{basic:`<Toast />
<div class="flex flex-wrap gap-2">
    <Button label="Multiple" severity="warning" @click="showMultiple()" />
    <Button label="Clear" @click="clear()" />
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Multiple" severity="warning" @click="showMultiple()" />
            <Button label="Clear" @click="clear()" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showMultiple() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
            this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 });
            this.$toast.add({ severity: 'warn', summary: 'Warning', detail: 'Message Content', life: 3100 });
            this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 });
        },
        clear() {
            this.$toast.removeAllGroups();
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Multiple" severity="warning" @click="showMultiple()" />
            <Button label="Clear" @click="clear()" />
        </div>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showMultiple = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 });
    toast.add({ severity: 'warn', summary: 'Warning', detail: 'Message Content', life: 3100 });
    toast.add({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 });
};

const clear = () => {
    toast.removeAllGroups();
};
<\/script>`}}},methods:{showMultiple(){this.$toast.add({severity:"success",summary:"Success",detail:"Message Content",life:3e3}),this.$toast.add({severity:"info",summary:"Info",detail:"Message Content",life:3050}),this.$toast.add({severity:"warn",summary:"Warning",detail:"Message Content",life:3100}),this.$toast.add({severity:"error",summary:"Error",detail:"Message Content",life:3150})},clear(){this.$toast.removeAllGroups()}}},st=t("p",null,[n("Multiple messages are displayed by passing an array to the "),t("i",null,"show"),n(" method.")],-1),nt={class:"card flex justify-content-center"},at={class:"flex flex-wrap gap-2"};function it(a,c,r,f,s,i){const l=h,o=w("Button"),p=b;return u(),_(y,null,[e(l,g(v(a.$attrs)),{default:m(()=>[st]),_:1},16),t("div",nt,[t("div",at,[e(o,{label:"Multiple",severity:"warning",onClick:c[0]||(c[0]=$=>i.showMultiple())}),e(o,{label:"Clear",onClick:c[1]||(c[1]=$=>i.clear())})])]),e(p,{code:s.code},null,8,["code"])],64)}const ct=d(ot,[["render",it]]),lt={data(){return{code:{basic:`<Toast position="top-left" group="tl" />
<Toast position="bottom-left" group="bl" />
<Toast position="bottom-right" group="br" />

<div class="flex flex-wrap gap-2">
    <Button label="Top Left" class="mr-2" @click="showTopLeft" />
    <Button label="Bottom Left" severity="warning" @click="showBottomLeft" />
    <Button label="Bottom Right" severity="success" @click="showBottomRight" />
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <Toast position="top-left" group="tl" />
        <Toast position="bottom-left" group="bl" />
        <Toast position="bottom-right" group="br" />

        <div class="flex flex-wrap gap-2">
            <Button label="Top Left" class="mr-2" @click="showTopLeft" />
            <Button label="Bottom Left" severity="warning" @click="showBottomLeft" />
            <Button label="Bottom Right" severity="success" @click="showBottomRight" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showTopLeft() {
            this.$toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000 });
        },
        showBottomLeft() {
            this.$toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group: 'bl', life: 3000 });
        },
        showBottomRight() {
            this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast position="top-left" group="tl" />
        <Toast position="bottom-left" group="bl" />
        <Toast position="bottom-right" group="br" />
        
        <div class="flex flex-wrap gap-2">
            <Button label="Top Left" class="mr-2" @click="showTopLeft" />
            <Button label="Bottom Left" severity="warning" @click="showBottomLeft" />
            <Button label="Bottom Right" severity="success" @click="showBottomRight" />
        </div>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showTopLeft = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', group: 'tl', life: 3000 });
};

const showBottomLeft = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', group: 'bl', life: 3000 });
};

const showBottomRight = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', group: 'br', life: 3000 });
};
<\/script>`}}},methods:{showTopLeft(){this.$toast.add({severity:"info",summary:"Info Message",detail:"Message Content",group:"tl",life:3e3})},showBottomLeft(){this.$toast.add({severity:"warn",summary:"Warn Message",detail:"Message Content",group:"bl",life:3e3})},showBottomRight(){this.$toast.add({severity:"success",summary:"Success Message",detail:"Message Content",group:"br",life:3e3})}}},rt=t("p",null,[n("Location of the messages is customized with the "),t("i",null,"position"),n(" property.")],-1),dt={class:"card flex justify-content-center"},ut={class:"flex flex-wrap gap-2"};function pt(a,c,r,f,s,i){const l=h,o=w("Button"),p=b;return u(),_(y,null,[e(l,g(v(a.$attrs)),{default:m(()=>[rt]),_:1},16),t("div",dt,[t("div",ut,[e(o,{label:"Top Left",class:"mr-2",onClick:i.showTopLeft},null,8,["onClick"]),e(o,{label:"Bottom Left",severity:"warning",onClick:i.showBottomLeft},null,8,["onClick"]),e(o,{label:"Bottom Right",severity:"success",onClick:i.showBottomRight},null,8,["onClick"])])]),e(p,{code:s.code},null,8,["code"])],64)}const mt=d(lt,[["render",pt]]),ft={data(){return{code:{basic:`<Toast />
<div class="flex flex-wrap gap-2">
    <Button label="Success" severity="success" @click="showSuccess" />
    <Button label="Info" severity="info" @click="showInfo" />
    <Button label="Warn" severity="warning" @click="showWarn" />
    <Button label="Error" severity="danger" @click="showError" />
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Success" severity="success" @click="showSuccess" />
            <Button label="Info" severity="info" @click="showInfo" />
            <Button label="Warn" severity="warning" @click="showWarn" />
            <Button label="Error" severity="danger" @click="showError" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showSuccess() {
            this.$toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
        },
        showInfo() {
            this.$toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
        },
        showWarn() {
            this.$toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
        },
        showError() {
            this.$toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Success" severity="success" @click="showSuccess" />
            <Button label="Info" severity="info" @click="showInfo" />
            <Button label="Warn" severity="warning" @click="showWarn" />
            <Button label="Error" severity="danger" @click="showError" />
        </div>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};

const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
};

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
};

const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
};
<\/script>`}}},methods:{showSuccess(){this.$toast.add({severity:"success",summary:"Success Message",detail:"Message Content",life:3e3})},showInfo(){this.$toast.add({severity:"info",summary:"Info Message",detail:"Message Content",life:3e3})},showWarn(){this.$toast.add({severity:"warn",summary:"Warn Message",detail:"Message Content",life:3e3})},showError(){this.$toast.add({severity:"error",summary:"Error Message",detail:"Message Content",life:3e3})}}},ht=t("p",null,[n("The "),t("i",null,"severity"),n(" option specifies the type of the message.")],-1),_t={class:"card flex justify-content-center"},yt={class:"flex flex-wrap gap-2"};function gt(a,c,r,f,s,i){const l=h,o=w("Button"),p=b;return u(),_(y,null,[e(l,g(v(a.$attrs)),{default:m(()=>[ht]),_:1},16),t("div",_t,[t("div",yt,[e(o,{label:"Success",severity:"success",onClick:i.showSuccess},null,8,["onClick"]),e(o,{label:"Info",severity:"info",onClick:i.showInfo},null,8,["onClick"]),e(o,{label:"Warn",severity:"warning",onClick:i.showWarn},null,8,["onClick"]),e(o,{label:"Error",severity:"danger",onClick:i.showError},null,8,["onClick"])])]),e(p,{code:s.code},null,8,["code"])],64)}const vt=d(ft,[["render",gt]]),bt={data(){return{code:{basic:`<Toast />
<Button @click="showSticky" label="Sticky" />`,options:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Button @click="showSticky" label="Sticky" />
    </div>
</template>

<script>
export default {
    methods: {
        showSticky() {
            this.$toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content'});
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Button @click="showSticky" label="Sticky" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSticky = () => {
    toast.add({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content'});
};
<\/script>`}}},methods:{showSticky(){this.$toast.add({severity:"info",summary:"Sticky Message",detail:"Message Content"})}}},wt=t("p",null,[n("A message disappears after 3000ms defined the "),t("i",null,"life"),n(" option, set "),t("i",null,"sticky"),n(" option to display messages that do not hide automatically.")],-1),$t={class:"card flex justify-content-center"};function xt(a,c,r,f,s,i){const l=h,o=w("Button"),p=b;return u(),_(y,null,[e(l,g(v(a.$attrs)),{default:m(()=>[wt]),_:1},16),t("div",$t,[e(o,{onClick:i.showSticky,label:"Sticky"},null,8,["onClick"])]),e(p,{code:s.code},null,8,["code"])],64)}const Ct=d(bt,[["render",xt]]),Tt={data(){return{code:{basic:`<Toast position="bottom-center" group="bc">
    <template #message="slotProps">
        <div class="flex flex-column align-items-center" style="flex: 1">
            <div class="text-center">
                <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
                <div class="font-bold text-xl my-3">{{ slotProps.message.summary }}</div>
            </div>
            <div class="flex gap-2">
                <Button severity="success" label="Yes" @click="onConfirm()"></Button>
                <Button severity="secondary" label="No" @click="onReject()"></Button>
            </div>
        </div>
    </template>
</Toast>
<Button @click="showTemplate" label="Confirm" />`,options:`<template>
    <div class="card flex justify-content-center">
        <Toast position="bottom-center" group="bc">
            <template #message="slotProps">
                <div class="flex flex-column align-items-center" style="flex: 1">
                    <div class="text-center">
                        <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
                        <div class="font-bold text-xl my-3">{{ slotProps.message.summary }}</div>
                    </div>
                    <div class="flex gap-2">
                        <Button severity="success" label="Yes" @click="onConfirm()"></Button>
                        <Button severity="secondary" label="No" @click="onReject()"></Button>
                    </div>
                </div>
            </template>
        </Toast>
        <Button @click="showTemplate" label="Confirm" />
    </div>
</template>

<script>
export default {
    methods: {
        showTemplate() {
            this.$toast.add({ severity: 'warn', summary: 'Are you sure?', detail: 'Proceed to confirm', group: 'bc' });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast position="bottom-center" group="bc">
            <template #message="slotProps">
                <div class="flex flex-column align-items-center" style="flex: 1">
                    <div class="text-center">
                        <i class="pi pi-exclamation-triangle" style="font-size: 3rem"></i>
                        <div class="font-bold text-xl my-3">{{ slotProps.message.summary }}</div>
                    </div>
                    <div class="flex gap-2">
                        <Button severity="success" label="Yes" @click="onConfirm()"></Button>
                        <Button severity="secondary" label="No" @click="onReject()"></Button>
                    </div>
                </div>
            </template>
        </Toast>
        <Button @click="showTemplate" label="Confirm" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showTemplate = () => {
    toast.add({ severity: 'warn', summary: 'Are you sure?', detail: 'Proceed to confirm', group: 'bc' });
};
<\/script>`}}},methods:{showTemplate(){this.$toast.add({severity:"warn",summary:"Are you sure?",detail:"Proceed to confirm",group:"bc"})},onConfirm(){this.$toast.removeGroup("bc")},onReject(){this.$toast.removeGroup("bc")}}},kt=t("p",null,[n("Custom content inside a message is defined with the "),t("i",null,"content"),n(" option.")],-1),Bt={class:"card flex justify-content-center"},St={class:"flex flex-column align-items-center",style:{flex:"1"}},Mt={class:"text-center"},Dt=t("i",{class:"pi pi-exclamation-triangle",style:{"font-size":"3rem"}},null,-1),It={class:"font-bold text-xl my-3"},jt={class:"flex gap-2"};function Pt(a,c,r,f,s,i){const l=h,o=w("Button"),p=w("Toast"),$=b;return u(),_(y,null,[e(l,g(v(a.$attrs)),{default:m(()=>[kt]),_:1},16),t("div",Bt,[e(p,{position:"bottom-center",group:"bc"},{message:m(C=>[t("div",St,[t("div",Mt,[Dt,t("div",It,T(C.message.summary),1)]),t("div",jt,[e(o,{severity:"success",label:"Yes",onClick:c[0]||(c[0]=S=>i.onConfirm())}),e(o,{severity:"secondary",label:"No",onClick:c[1]||(c[1]=S=>i.onReject())})])])]),_:1}),e(o,{onClick:i.showTemplate,label:"Confirm"},null,8,["onClick"])]),e($,{code:s.code},null,8,["code"])],64)}const Lt=d(Tt,[["render",Pt]]),Wt={data(){return{code1:{basic:`import {createApp} from 'vue';
import ToastService from 'primevue/toastservice';

const app = createApp(App);
app.use(ToastService);`},code2:{basic:`import { useToast } from 'primevue/usetoast';

const toast = useToast();`}}}},Et=t("p",null,[n("Toast component is controlled via the "),t("i",null,"ToastService"),n(" that needs to be installed as an application plugin.")],-1),At=t("div",{class:"doc-section-description"},[t("p",null,[t("i",null,"$toast"),n(" is available as a property in the application instance for Options API. The service can be injected with the "),t("i",null,"useToast"),n(" function for Composition API.")])],-1);function Rt(a,c,r,f,s,i){const l=h,o=b;return u(),_(y,null,[e(l,g(v(a.$attrs)),{default:m(()=>[Et]),_:1},16),e(o,{code:s.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),At,e(o,{code:s.code2,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const zt=d(Wt,[["render",Rt]]),Nt={data(){return{code:{basic:`<Toast
    group="pt"
    :pt="{
        container: { class: 'bg-yellow-100' }
    }"
/>
<Button label="Show" @click="show()" />`,options:`<template>
    <div class="card flex justify-content-center">
        <Toast
            group="pt"
            :pt="{
                container: { class: 'bg-yellow-100' }
            }"
        />
        <Button label="Show" @click="show()" />
    </div>
</template>

<script>
export default {
    methods: {
        show() {
            this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', group: 'pt', life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast
            group="pt"
            :pt="{
                container: { class: 'bg-yellow-100' }
            }"
        />
        <Button label="Show" @click="show()" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', group: 'pt', life: 3000 });
};
<\/script>`}}},methods:{show(){this.$toast.add({severity:"info",summary:"Info",detail:"Message Content",group:"pt",life:3e3})}}},Vt={class:"card flex justify-content-center"};function Ft(a,c,r,f,s,i){const l=h,o=w("Toast"),p=w("Button"),$=b;return u(),_(y,null,[e(l,g(v(a.$attrs)),null,16),t("div",Vt,[e(o,{group:"pt",pt:{container:{class:"bg-yellow-100"}}}),e(p,{label:"Show",onClick:c[0]||(c[0]=C=>i.show())})]),e($,{code:s.code},null,8,["code"])],64)}const Gt=d(Nt,[["render",Ft]]),Yt={},Ot=t("div",{class:"card"},[t("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/toast.jpg"})],-1);function qt(a,c){const r=h;return u(),_(y,null,[e(r,g(v(a.$attrs)),{default:m(()=>[t("p",null,T(a.$attrs.description),1)]),_:1},16),Ot],64)}const Kt=d(Yt,[["render",qt]]),Ut={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Kt},{id:"pt.doc.toast",label:"Toast PT Options",component:I,data:L("Toast")},{id:"pt.demo",label:"Demo",component:Gt}]}}},Ht={class:"doc-main"},Jt=t("div",{class:"doc-intro"},[t("h1",null,"Toast Pass Through")],-1);function Qt(a,c,r,f,s,i){const l=k,o=B;return u(),_(y,null,[t("div",Ht,[Jt,e(l,{docs:s.docs},null,8,["docs"])]),e(o,{docs:s.docs},null,8,["docs"])],64)}const Xt=d(Ut,[["render",Qt]]),Zt={},te=t("p",null,"List of class names used in the styled mode.",-1),ee=j('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-toast</td><td>Main container element.</td></tr><tr><td>p-toast-message</td><td>Container of a message item.</td></tr><tr><td>p-toast-icon-close</td><td>Close icon of a message.</td></tr><tr><td>p-toast-icon</td><td>Severity icon.</td></tr><tr><td>p-toast-message-content</td><td>Container of message texts.</td></tr><tr><td>p-toast-summary</td><td>Summary of the message.</td></tr><tr><td>p-toast-detail</td><td>Detail of the message.</td></tr></tbody></table></div>',1);function oe(a,c){const r=h;return u(),_(y,null,[e(r,g(v(a.$attrs)),{default:m(()=>[te]),_:1},16),ee],64)}const se=d(Zt,[["render",oe]]),ne={data(){return{code1:{basic:`
export default {
    toast: {
        root: {
            class: ['w-96', 'opacity-90']
        },
        container: ({ props }) => ({
            class: [
                'my-4 rounded-md w-full',
                {
                    'bg-blue-100 border-solid border-0 border-l-4 border-blue-500 text-blue-700': props.message.severity == 'info',
                    'bg-green-100 border-solid border-0 border-l-4 border-green-500 text-green-700': props.message.severity == 'success',
                    'bg-orange-100 border-solid border-0 border-l-4 border-orange-500 text-orange-700': props.message.severity == 'warn',
                    'bg-red-100 border-solid border-0 border-l-4 border-red-500 text-red-700': props.message.severity == 'error'
                }
            ]
        }),
        content: 'flex items-center py-5 px-7',
        icon: {
            class: ['w-6 h-6', 'text-lg mr-2']
        },
        text: 'text-base font-normal flex flex-col flex-1 grow shrink ml-4',
        summary: 'font-bold block',
        detail: 'mt-1 block',
        closebutton: {
            class: ['w-8 h-8 rounded-full bg-transparent transition duration-200 ease-in-out', 'ml-auto overflow-hidden relative', 'flex items-center justify-center', 'hover:bg-white/30']
        },
        transition: {
            enterFromClass: 'opacity-0 translate-x-0 translate-y-2/4 translate-z-0',
            enterActiveClass: 'transition-transform transition-opacity duration-300',
            leaveFromClass: 'max-h-40',
            leaveActiveClass: 'transition-all duration-500 ease-in',
            leaveToClass: 'max-h-0 opacity-0 mb-0 overflow-hidden'
        }
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Toast />
        <div class="flex flex-wrap gap-2">
            <Button label="Success" severity="success" @click="showSuccess" />
            <Button label="Info" severity="info" @click="showInfo" />
            <Button label="Warn" severity="warning" @click="showWarn" />
            <Button label="Error" severity="danger" @click="showError" />
        </div>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};

const showInfo = () => {
    toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
};

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
};

const showError = () => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
};
<\/script>`}}}},ae=t("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function ie(a,c,r,f,s,i){const l=W,o=b,p=h;return u(),x(p,g(v(a.$attrs)),{default:m(()=>[t("p",null,[n(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),e(l,{to:"/tailwind"},{default:m(()=>[n("Tailwind Customization")]),_:1}),n(" section for an example. ")]),e(o,{code:s.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),ae,e(o,{code:s.code2,embedded:""},null,8,["code"])]),_:1},16)}const ce=d(ne,[["render",ie]]),le={data(){return{docs:[{id:"theming.styled",label:"Styled",component:se},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ce}]}]}}},re={class:"doc-main"},de=t("div",{class:"doc-intro"},[t("h1",null,"Toast Theming")],-1);function ue(a,c,r,f,s,i){const l=k,o=B;return u(),_(y,null,[t("div",re,[de,e(l,{docs:s.docs},null,8,["docs"])]),e(o,{docs:s.docs},null,8,["docs"])],64)}const pe=d(le,[["render",ue]]),me={data(){return{docs:[{id:"import",label:"Import",component:et},{id:"toast-service",label:"Toast Service",component:zt},{id:"basic",label:"Basic",component:X},{id:"severity",label:"Severity",component:vt},{id:"position",label:"Position",component:mt},{id:"multiple",label:"Multiple",component:ct},{id:"sticky",label:"Sticky",component:Ct},{id:"template",label:"Template",component:Lt},{id:"accessibility",label:"Accessibility",component:K}],ptComponent:Xt,themingDoc:pe}}};function fe(a,c,r,f,s,i){const l=P;return u(),x(l,{title:"Vue Toast Component",header:"Toast",description:"Toast is used to display messages in an overlay.",componentDocs:s.docs,apiDocs:["Toast","ToastService-UseToast"],ptTabComponent:s.ptComponent,themingDocs:s.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ge=d(me,[["render",fe]]);export{ge as default};
