import{_ as r,o as d,e as $,w as a,b as e,f as s,a as n,m as C,C as D,h as g,j as I,c as f,n as v,g as b,F as h,p as y,t as T,D as S,k as x,l as M,v as U,x as j}from"./entry.68beb385.js";import{g as P}from"./PTHelper.11558b27.js";import{_ as q}from"./PrimeVueNuxtLink.f51d0c80.js";const B={data(){return{code1:{basic:`<ConfirmDialog id="confirm" />

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
<\/script>`}}}},k=e("h3",null,"Screen Reader",-1),A=e("p",null,[s(" Message components use "),e("i",null,"alert"),s(" role that implicitly defines "),e("i",null,"aria-live"),s(' as "assertive" and '),e("i",null,"aria-atomic"),s(' as "true". Since any attribute is passed to the root element, attributes like '),e("i",null,"aria-labelledby"),s(" and "),e("i",null,"aria-label"),s(" can optionally be used as well. ")],-1),E=e("i",null,"button",-1),V=e("i",null,"aria-label",-1),W=e("i",null,"aria.close",-1),N=e("i",null,"closeButtonProps",-1),z=e("i",null,"aria-label",-1),F=e("h3",null,"Close Button Keyboard Support",-1),L=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Closes the message.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Closes the message.")])])])],-1);function K(i,p,c,u,t,_){const l=D,o=g;return d(),$(o,C({id:"accessibility",label:"Accessibility"},i.$attrs),{default:a(()=>[k,A,e("p",null,[s(" Close element is a "),E,s(" with an "),V,s(" that refers to the "),W,s(" property of the "),n(l,{to:"/configuration/#locale"},{default:a(()=>[s("locale")]),_:1}),s(" API by default, you may use "),N,s(" to customize the element and override the default "),z,s(". ")]),F,L]),_:1},16)}const O=r(B,[["render",K]]),R={data(){return{code:{basic:'<InlineMessage severity="info">Username is required</InlineMessage>',options:`<template>
    <div class="card flex justify-content-center">
        <InlineMessage severity="info">Username is required</InlineMessage>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InlineMessage severity="info">Username is required</InlineMessage>
    </div>
</template>

<script setup>
<\/script>`}}}},H=e("p",null,"InlineMessage component requires a content to display.",-1),G={class:"card flex justify-content-center"};function J(i,p,c,u,t,_){const l=g,o=I("InlineMessage"),m=y;return d(),f(h,null,[n(l,v(b(i.$attrs)),{default:a(()=>[H]),_:1},16),e("div",G,[n(o,{severity:"info"},{default:a(()=>[s("Username is required")]),_:1})]),n(m,{code:t.code},null,8,["code"])],64)}const Q=r(R,[["render",J]]),X={data(){return{code:{basic:`<div class="flex flex-wrap align-items-center mb-3 gap-2">
    <label for="username" class="p-sr-only">Username</label>
    <InputText id="username" placeholder="Username" class="p-invalid" />
    <InlineMessage>Username is required</InlineMessage>
</div>
<div class="flex flex-wrap align-items-center gap-2">
    <label for="email" class="p-sr-only">email</label>
    <InputText id="email" placeholder="Email" class="p-invalid" />
    <InlineMessage />
</div>`,options:`<template>
    <div class="card">
        <div class="flex flex-wrap align-items-center mb-3 gap-2">
            <label for="username" class="p-sr-only">Username</label>
            <InputText id="username" placeholder="Username" class="p-invalid" />
            <InlineMessage>Username is required</InlineMessage>
        </div>
        <div class="flex flex-wrap align-items-center gap-2">
            <label for="email" class="p-sr-only">email</label>
            <InputText id="email" placeholder="Email" class="p-invalid" />
            <InlineMessage />
        </div>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex flex-wrap align-items-center mb-3 gap-2">
            <label for="username" class="p-sr-only">Username</label>
            <InputText id="username" placeholder="Username" class="p-invalid" />
            <InlineMessage>Username is required</InlineMessage>
        </div>
        <div class="flex flex-wrap align-items-center gap-2">
            <label for="email" class="p-sr-only">email</label>
            <InputText id="email" placeholder="Email" class="p-invalid" />
            <InlineMessage />
        </div>
    </div>
</template>

<script setup>
<\/script>`}}}},Y=e("p",null,"Message component is handy when displaying error messages next to form elements.",-1),Z={class:"card"},ee={class:"flex flex-wrap align-items-center mb-3 gap-2"},ne=e("label",{for:"username",class:"p-sr-only"},"Username",-1),se={class:"flex flex-wrap align-items-center gap-2"},te=e("label",{for:"email",class:"p-sr-only"},"email",-1);function oe(i,p,c,u,t,_){const l=g,o=I("InputText"),m=I("InlineMessage"),w=y;return d(),f(h,null,[n(l,v(b(i.$attrs)),{default:a(()=>[Y]),_:1},16),e("div",Z,[e("div",ee,[ne,n(o,{id:"username",placeholder:"Username",class:"p-invalid"}),n(m,null,{default:a(()=>[s("Username is required")]),_:1})]),e("div",se,[te,n(o,{id:"email",placeholder:"Email",class:"p-invalid"}),n(m)])]),n(w,{code:t.code},null,8,["code"])],64)}const ie=r(X,[["render",oe]]),le={data(){return{code:{basic:"import InlineMessage from 'primevue/inlinemessage';"}}}};function ae(i,p,c,u,t,_){const l=g,o=y;return d(),f(h,null,[n(l,v(b(i.$attrs)),null,16),n(o,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ce=r(le,[["render",ae]]),re={data(){return{code:{basic:`<InlineMessage severity="success">Success Content</InlineMessage>
<InlineMessage severity="info">Info Content</InlineMessage>
<InlineMessage severity="warn">Warning Content</InlineMessage>
<InlineMessage severity="error">Error Content</InlineMessage>`,options:`<template>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
        <InlineMessage severity="success">Success Content</InlineMessage>
        <InlineMessage severity="info">Info Content</InlineMessage>
        <InlineMessage severity="warn">Warning Content</InlineMessage>
        <InlineMessage severity="error">Error Content</InlineMessage>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
        <InlineMessage severity="success">Success Content</InlineMessage>
        <InlineMessage severity="info">Info Content</InlineMessage>
        <InlineMessage severity="warn">Warning Content</InlineMessage>
        <InlineMessage severity="error">Error Content</InlineMessage>
    </div>
</template>

<script setup>
<\/script>`}}}},de=e("p",null,[s("The "),e("i",null,"severity"),s(" option specifies the type of the message.")],-1),pe={class:"card flex flex-wrap align-items-center justify-content-center gap-3"};function me(i,p,c,u,t,_){const l=g,o=I("InlineMessage"),m=y;return d(),f(h,null,[n(l,v(b(i.$attrs)),{default:a(()=>[de]),_:1},16),e("div",pe,[n(o,{severity:"success"},{default:a(()=>[s("Success Content")]),_:1}),n(o,{severity:"info"},{default:a(()=>[s("Info Content")]),_:1}),n(o,{severity:"warn"},{default:a(()=>[s("Warning Content")]),_:1}),n(o,{severity:"error"},{default:a(()=>[s("Error Content")]),_:1})]),n(m,{code:t.code},null,8,["code"])],64)}const ue=r(re,[["render",me]]),_e={data(){return{code:{basic:`<InlineMessage :style="{  border: 'solid #696cff', borderWidth: '0 0 0 6px', color: '#696cff' }"
        severity="info" class="border-primary w-full justify-content-start">
    <div class="flex align-items-center">
        <img alt="logo" src="/images/logo.svg" width="32" />
        <div class="ml-2">Always bet on Prime.</div>
    </div>
</InlineMessage>`,options:`<template>
    <div class="card">
        <InlineMessage :style="{  border: 'solid #696cff', borderWidth: '0 0 0 6px', color: '#696cff' }"
                severity="info" class="border-primary w-full justify-content-start">
            <div class="flex align-items-center">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" width="32" />
                <div class="ml-2">Always bet on Prime.</div>
            </div>
        </InlineMessage>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <InlineMessage :style="{  border: 'solid #696cff', borderWidth: '0 0 0 6px', color: '#696cff' }"
                severity="info" class="border-primary w-full justify-content-start">
            <div class="flex align-items-center">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" width="32" />
                <div class="ml-2">Always bet on Prime.</div>
            </div>
        </InlineMessage>
    </div>
</template>

<script setup>
<\/script>`}}}},ge=e("p",null,[s("Custom content inside a message is defined with the "),e("i",null,"default"),s(" slot.")],-1),fe={class:"card"},he=e("div",{class:"flex align-items-center"},[e("img",{alt:"logo",src:"https://primefaces.org/cdn/primevue/images/logo.svg",width:"32"}),e("div",{class:"ml-2"},"Always bet on Prime.")],-1);function ve(i,p,c,u,t,_){const l=g,o=I("InlineMessage"),m=y;return d(),f(h,null,[n(l,v(b(i.$attrs)),{default:a(()=>[ge]),_:1},16),e("div",fe,[n(o,{style:{border:"solid #696cff",borderWidth:"0 0 0 6px",color:"#696cff"},severity:"info",class:"border-primary w-full justify-content-start"},{default:a(()=>[he]),_:1})]),n(m,{code:t.code},null,8,["code"])],64)}const be=r(_e,[["render",ve]]),ye={data(){return{code:{basic:`<InlineMessage
    :pt="{
        root: { class: 'bg-yellow-100' },
        icon: { class: 'hidden' }
    }"
>
    Username is required
</InlineMessage>`,options:`<template>
    <div class="card flex justify-content-center">
        <InlineMessage
            :pt="{
                root: { class: 'bg-indigo-100' },
                icon: { class: 'hidden' }
            }"
        >
            Username is required
        </InlineMessage>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <InlineMessage
            :pt="{
                root: { class: 'bg-indigo-100' },
                icon: { class: 'hidden' }
            }"
        >
            Username is required
        </InlineMessage>
    </div>
</template>

<script setup>
<\/script>`}}}},Ie={class:"card flex justify-content-center"};function $e(i,p,c,u,t,_){const l=g,o=I("InlineMessage"),m=y;return d(),f(h,null,[n(l,v(b(i.$attrs)),null,16),e("div",Ie,[n(o,{pt:{root:{class:"bg-yellow-100"},icon:{class:"hidden"}}},{default:a(()=>[s(" Username is required ")]),_:1})]),n(m,{code:t.code},null,8,["code"])],64)}const xe=r(ye,[["render",$e]]),Me={},we=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/inlinemessage.jpg"})],-1);function Ce(i,p){const c=g;return d(),f(h,null,[n(c,v(b(i.$attrs)),{default:a(()=>[e("p",null,T(i.$attrs.description),1)]),_:1},16),we],64)}const De=r(Me,[["render",Ce]]),Te={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:De},{id:"pt.doc.inlinemessage",label:"InlineMessage PT Options",component:S,data:P("InlineMessage")},{id:"pt.demo",label:"Demo",component:xe}]}}},Se={class:"doc-main"},Ue=e("div",{class:"doc-intro"},[e("h1",null,"InlineMessage Pass Through")],-1);function je(i,p,c,u,t,_){const l=x,o=M;return d(),f(h,null,[e("div",Se,[Ue,n(l,{docs:t.docs},null,8,["docs"])]),n(o,{docs:t.docs},null,8,["docs"])],64)}const Pe=r(Te,[["render",je]]),qe={},Be=e("p",null,"List of class names used in the styled mode.",-1),ke=U('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-inline-message</td><td>Container element.</td></tr><tr><td>p-inline-message-info</td><td>Container element when displaying info messages.</td></tr><tr><td>p-inline-message-warn</td><td>Container element when displaying warning messages.</td></tr><tr><td>p-inline-message-error</td><td>Container element when displaying error messages.</td></tr><tr><td>p-inline-message-success</td><td>Container element when displaying success messages.</td></tr><tr><td>p-inline-message-close</td><td>Close icon.</td></tr><tr><td>p-inline-message-icon</td><td>Severity icon.</td></tr><tr><td>p-inline-message-text</td><td>Content of a message.</td></tr></tbody></table></div>',1);function Ae(i,p){const c=g;return d(),f(h,null,[n(c,v(b(i.$attrs)),{default:a(()=>[Be]),_:1},16),ke],64)}const Ee=r(qe,[["render",Ae]]),Ve={data(){return{code1:{basic:`
export default {
    inlinemessage: {
        root: ({ props }) => ({
            class: [
                'inline-flex items-center justify-center align-top',
                'p-3 m-0 rounded-md',
                {
                    'bg-blue-100 border-0 text-blue-700': props.severity == 'info',
                    'bg-green-100 border-0 text-green-700': props.severity == 'success',
                    'bg-orange-100 border-0 text-orange-700': props.severity == 'warn',
                    'bg-red-100 border-0 text-red-700': props.severity == 'error'
                }
            ]
        }),
        icon: 'text-base mr-2'
    }
}
`},code2:{composition:`<template>
    <div class="card flex flex-wrap items-center justify-center gap-3">
        <InlineMessage severity="success">Success Content</InlineMessage>
        <InlineMessage severity="info">Info Content</InlineMessage>
        <InlineMessage severity="warn">Warning Content</InlineMessage>
        <InlineMessage severity="error">Error Content</InlineMessage>
    </div>
</template>

<script setup>
<\/script>`}}}},We=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ne(i,p,c,u,t,_){const l=q,o=y,m=g;return d(),$(m,v(b(i.$attrs)),{default:a(()=>[e("p",null,[s(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(l,{to:"/tailwind"},{default:a(()=>[s("Tailwind Customization")]),_:1}),s(" section for an example. ")]),n(o,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),We,n(o,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const ze=r(Ve,[["render",Ne]]),Fe={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ee},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ze}]}]}}},Le={class:"doc-main"},Ke=e("div",{class:"doc-intro"},[e("h1",null,"InlineMessage Theming")],-1);function Oe(i,p,c,u,t,_){const l=x,o=M;return d(),f(h,null,[e("div",Le,[Ke,n(l,{docs:t.docs},null,8,["docs"])]),n(o,{docs:t.docs},null,8,["docs"])],64)}const Re=r(Fe,[["render",Oe]]),He={data(){return{docs:[{id:"import",label:"Import",component:ce},{id:"basic",label:"Basic",component:Q},{id:"severity",label:"Severity",component:ue},{id:"form",label:"Form",component:ie},{id:"template",label:"Template",component:be},{id:"accessibility",label:"Accessibility",component:O}],ptComponent:Pe,themingDoc:Re}}};function Ge(i,p,c,u,t,_){const l=j;return d(),$(l,{title:"Vue InlineMessage Component",header:"InlineMessage",description:"Inline Message component displays information related to another element such as invalid input.",componentDocs:t.docs,apiDocs:["InlineMessage"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ye=r(He,[["render",Ge]]);export{Ye as default};
