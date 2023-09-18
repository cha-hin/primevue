import{_ as r,o as l,e as b,w as u,m as w,b as t,f as s,h as g,j as x,c as m,a as e,n as T,g as y,F as _,p as h,G as S,t as C,D as P,k as $,l as D,v as I,x as j}from"./entry.68beb385.js";import{g as k}from"./PTHelper.11558b27.js";import{_ as W}from"./PrimeVueNuxtLink.f51d0c80.js";const F={},N=t("h3",null,"Screen Reader",-1),A=t("p",null,[s(" Tag does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the tags are dynamic, "),t("i",null,"aria-live"),s(" may be utilized as well. In case badges need to be tabbable, "),t("i",null,"tabindex"),s(" can be added to implement custom key handlers. ")],-1),B=t("h3",null,"Keyboard Support",-1),V=t("p",null,"Component does not include any interactive elements.",-1);function z(o,d){const c=g;return l(),b(c,w({id:"accessibility",label:"Accessibility"},o.$attrs),{default:u(()=>[N,A,B,V]),_:1},16)}const E=r(F,[["render",z]]),R={data(){return{code:{basic:'<Tag value="New"></Tag>',options:`<template>
    <div class="flex justify-content-center">
        <Tag value="New"></Tag>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="flex justify-content-center">
        <Tag value="New"></Tag>
    </div>
</template>

<script setup>

<\/script>`}}}},L=t("p",null,[s("Label of the tag is defined with the "),t("i",null,"value"),s(" property.")],-1),q={class:"card flex justify-content-center"};function O(o,d,c,v,a,f){const i=g,n=x("Tag"),p=h;return l(),m(_,null,[e(i,T(y(o.$attrs)),{default:u(()=>[L]),_:1},16),t("div",q,[e(n,{value:"New"})]),e(p,{code:a.code},null,8,["code"])],64)}const G=r(R,[["render",O]]),K={data(){return{code:{basic:`<Tag icon="pi pi-user" value="Primary"></Tag>
<Tag icon="pi pi-check" severity="success" value="Success"></Tag>
<Tag icon="pi pi-info-circle" severity="info" value="Info"></Tag>
<Tag icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
<Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Tag icon="pi pi-user" value="Primary"></Tag>
        <Tag icon="pi pi-check" severity="success" value="Success"></Tag>
        <Tag icon="pi pi-info-circle" severity="info" value="Info"></Tag>
        <Tag icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
        <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Tag icon="pi pi-user" value="Primary"></Tag>
        <Tag icon="pi pi-check" severity="success" value="Success"></Tag>
        <Tag icon="pi pi-info-circle" severity="info" value="Info"></Tag>
        <Tag icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
        <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
    </div>
</template>

<script setup>

<\/script>`}}}},U=t("p",null,[s("A font icon next to the value can be displayed with the "),t("i",null,"icon"),s(" property.")],-1),H={class:"card flex flex-wrap justify-content-center gap-2"};function J(o,d,c,v,a,f){const i=g,n=x("Tag"),p=h;return l(),m(_,null,[e(i,T(y(o.$attrs)),{default:u(()=>[U]),_:1},16),t("div",H,[e(n,{icon:"pi pi-user",value:"Primary"}),e(n,{icon:"pi pi-check",severity:"success",value:"Success"}),e(n,{icon:"pi pi-info-circle",severity:"info",value:"Info"}),e(n,{icon:"pi pi-exclamation-triangle",severity:"warning",value:"Warning"}),e(n,{icon:"pi pi-times",severity:"danger",value:"Danger"})]),e(p,{code:a.code},null,8,["code"])],64)}const M=r(K,[["render",J]]),Q={data(){return{code:{basic:"import Tag from 'primevue/tag';"}}}};function X(o,d,c,v,a,f){const i=g,n=h;return l(),m(_,null,[e(i,T(y(o.$attrs)),null,16),e(n,{code:a.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Y=r(Q,[["render",X]]),Z={data(){return{code:{basic:`<Tag value="Primary" rounded></Tag>
<Tag severity="success" value="Success" rounded></Tag>
<Tag severity="info" value="Info" rounded></Tag>
<Tag severity="warning" value="Warning" rounded></Tag>
<Tag severity="danger" value="Danger" rounded></Tag>`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Tag value="Primary" rounded></Tag>
        <Tag severity="success" value="Success" rounded></Tag>
        <Tag severity="info" value="Info" rounded></Tag>
        <Tag severity="warning" value="Warning" rounded></Tag>
        <Tag severity="danger" value="Danger" rounded></Tag>
    </div>    
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Tag value="Primary" rounded></Tag>
        <Tag severity="success" value="Success" rounded></Tag>
        <Tag severity="info" value="Info" rounded></Tag>
        <Tag severity="warning" value="Warning" rounded></Tag>
        <Tag severity="danger" value="Danger" rounded></Tag>
    </div>    
</template>

<script setup>

<\/script>`}}}},ee=t("p",null,[s("Enabling "),t("i",null,"rounded"),s(", displays a tag as a pill.")],-1),te={class:"card flex flex-wrap justify-content-center gap-2"};function ne(o,d,c,v,a,f){const i=g,n=x("Tag"),p=h;return l(),m(_,null,[e(i,T(y(o.$attrs)),{default:u(()=>[ee]),_:1},16),t("div",te,[e(n,{value:"Primary",rounded:""}),e(n,{severity:"success",value:"Success",rounded:""}),e(n,{severity:"info",value:"Info",rounded:""}),e(n,{severity:"warning",value:"Warning",rounded:""}),e(n,{severity:"danger",value:"Danger",rounded:""})]),e(p,{code:a.code},null,8,["code"])],64)}const ae=r(Z,[["render",ne]]),oe={data(){return{code:{basic:`<Tag value="Primary"></Tag>
<Tag severity="success" value="Success"></Tag>
<Tag severity="info" value="Info"></Tag>
<Tag severity="warning" value="Warning"></Tag>
<Tag severity="danger" value="Danger"></Tag>`,options:`<template>
    <div class="flex flex-wrap justify-content-center gap-2">
        <Tag value="Primary"></Tag>
        <Tag severity="success" value="Success"></Tag>
        <Tag severity="info" value="Info"></Tag>
        <Tag severity="warning" value="Warning"></Tag>
        <Tag severity="danger" value="Danger"></Tag>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="flex flex-wrap justify-content-center gap-2">
        <Tag value="Primary"></Tag>
        <Tag severity="success" value="Success"></Tag>
        <Tag severity="info" value="Info"></Tag>
        <Tag severity="warning" value="Warning"></Tag>
        <Tag severity="danger" value="Danger"></Tag>
    </div>
</template>

<script setup>

<\/script>
        `}}}},ie=t("p",null,[s("Severity defines the color of the tag, possible values are "),t("i",null,"success"),s(", "),t("i",null,"info"),s(", "),t("i",null,"warning"),s(" and "),t("i",null,"danger"),s(" in addition to the default theme color.")],-1),se={class:"card flex flex-wrap justify-content-center gap-2"};function ce(o,d,c,v,a,f){const i=g,n=x("Tag"),p=h;return l(),m(_,null,[e(i,T(y(o.$attrs)),{default:u(()=>[ie]),_:1},16),t("div",se,[e(n,{value:"Primary"}),e(n,{severity:"success",value:"Success"}),e(n,{severity:"info",value:"Info"}),e(n,{severity:"warning",value:"Warning"}),e(n,{severity:"danger",value:"Danger"})]),e(p,{code:a.code},null,8,["code"])],64)}const re=r(oe,[["render",ce]]),le={data(){return{code:{basic:`<Tag :style="{ background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)' }">
    <div class="flex align-items-center gap-2">
        <img alt="Country" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" class="flag flag-it" style="width: 18px" />
        <span class="text-base">Italia</span>
        <i class="pi pi-times text-xs"></i>
    </div>
</Tag>`,options:`<template>
    <div class="card flex justify-content-center">
        <Tag :style="{ background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)' }">
            <div class="flex align-items-center gap-2">
                <img alt="Country" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" class="flag flag-it" style="width: 18px" />
                <span class="text-base">Italia</span>
                <i class="pi pi-times text-xs"></i>
            </div>
        </Tag>
    </div>    
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Tag :style="{ background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)' }">
            <div class="flex align-items-center gap-2">
                <img alt="Country" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" class="flag flag-it" style="width: 18px" />
                <span class="text-base">Italia</span>
                <i class="pi pi-times text-xs"></i>
            </div>
        </Tag>
    </div>    
</template>

<script setup>

<\/script>`}}}},de=t("p",null,"Children of the component are passed as the content for templating.",-1),pe={class:"card flex justify-content-center"},ue=t("div",{class:"flex align-items-center gap-2"},[t("img",{alt:"Country",src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:"flag flag-it",style:{width:"18px"}}),t("span",{class:"text-base"},"Italia"),t("i",{class:"pi pi-times text-xs"})],-1);function ge(o,d,c,v,a,f){const i=g,n=x("Tag"),p=h;return l(),m(_,null,[e(i,T(y(o.$attrs)),{default:u(()=>[de]),_:1},16),t("div",pe,[e(n,{style:S({background:"linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)"})},{default:u(()=>[ue]),_:1},8,["style"])]),e(p,{code:a.code},null,8,["code"])],64)}const me=r(le,[["render",ge]]),_e={data(){return{code:{basic:`<Tag icon="pi pi-user" value="Waiting"
    :pt="{
        root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Tag icon="pi pi-user" value="Waiting"
            :pt="{
                root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
            }"
        />
    </div>
</template>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Tag icon="pi pi-user" value="Waiting"
            :pt="{
                root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
            }"
        />
    </div>
</template>`}}}},ve={class:"card flex justify-content-center"};function fe(o,d,c,v,a,f){const i=g,n=x("Tag"),p=h;return l(),m(_,null,[e(i,T(y(o.$attrs)),null,16),t("div",ve,[e(n,{icon:"pi pi-user",value:"Waiting",pt:{root:{style:{background:"linear-gradient(to right, #8e2de2, #4a00e0)",borderRadius:"24px"}}}},null,8,["pt"])]),e(p,{code:a.code},null,8,["code"])],64)}const Te=r(_e,[["render",fe]]),ye={},he=t("div",{class:"card"},[t("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/tag.jpg"})],-1);function xe(o,d){const c=g;return l(),m(_,null,[e(c,T(y(o.$attrs)),{default:u(()=>[t("p",null,C(o.$attrs.description),1)]),_:1},16),he],64)}const be=r(ye,[["render",xe]]),$e={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:be},{id:"pt.doc.tag",label:"Tag PT Options",component:P,data:k("Tag")},{id:"pt.demo",label:"Demo",component:Te}]}}},De={class:"doc-main"},we=t("div",{class:"doc-intro"},[t("h1",null,"Tag Pass Through")],-1);function Se(o,d,c,v,a,f){const i=$,n=D;return l(),m(_,null,[t("div",De,[we,e(i,{docs:a.docs},null,8,["docs"])]),e(n,{docs:a.docs},null,8,["docs"])],64)}const Ce=r($e,[["render",Se]]),Pe={},Ie=t("p",null,"List of class names used in the styled mode.",-1),je=I('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-tag</td><td>Tag element</td></tr><tr><td>p-tag-rounded</td><td>Rounded element</td></tr><tr><td>p-tag-icon</td><td>Icon of the tag</td></tr><tr><td>p-tag-value</td><td>Value of the tag</td></tr></tbody></table></div>',1);function ke(o,d){const c=g;return l(),m(_,null,[e(c,T(y(o.$attrs)),{default:u(()=>[Ie]),_:1},16),je],64)}const We=r(Pe,[["render",ke]]),Fe={data(){return{code1:{basic:`
export default {
    tag: {
        root: ({ props }) => ({
            class: [
                'inline-flex items-center justify-center',
                'bg-blue-500 text-white text-xs font-semibold px-2 py-1 ',
                {
                    'bg-green-500 ': props.severity == 'success',
                    'bg-blue-500 ': props.severity == 'info',
                    'bg-orange-500 ': props.severity == 'warning',
                    'bg-red-500 ': props.severity == 'danger'
                },
                {
                    'rounded-md': !props.rounded,
                    'rounded-full': props.rounded
                }
            ]
        }),
        value: 'leading-6',
        icon: 'mr-1 text-sm'
    }
}
`},code2:{composition:`<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Tag value="Primary"></Tag>
        <Tag severity="success" value="Success"></Tag>
        <Tag severity="info" value="Info"></Tag>
        <Tag severity="warning" value="Warning"></Tag>
        <Tag severity="danger" value="Danger"></Tag>
    </div>
</template>

<script setup>

<\/script>
        `}}}},Ne=t("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ae(o,d,c,v,a,f){const i=W,n=h,p=g;return l(),b(p,T(y(o.$attrs)),{default:u(()=>[t("p",null,[s(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),e(i,{to:"/tailwind"},{default:u(()=>[s("Tailwind Customization")]),_:1}),s(" section for an example. ")]),e(n,{code:a.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ne,e(n,{code:a.code2,embedded:""},null,8,["code"])]),_:1},16)}const Be=r(Fe,[["render",Ae]]),Ve={data(){return{docs:[{id:"theming.styled",label:"Styled",component:We},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Be}]}]}}},ze={class:"doc-main"},Ee=t("div",{class:"doc-intro"},[t("h1",null,"Tag Theming")],-1);function Re(o,d,c,v,a,f){const i=$,n=D;return l(),m(_,null,[t("div",ze,[Ee,e(i,{docs:a.docs},null,8,["docs"])]),e(n,{docs:a.docs},null,8,["docs"])],64)}const Le=r(Ve,[["render",Re]]),qe={data(){return{docs:[{id:"import",label:"Import",component:Y},{id:"basic",label:"Basic",component:G},{id:"severity",label:"Severity",component:re},{id:"pill",label:"Pill",component:ae},{id:"icons",label:"Icon",component:M},{id:"template",label:"Template",component:me},{id:"accessibility",label:"Accessibility",component:E}],ptComponent:Ce,themingDoc:Le}}};function Oe(o,d,c,v,a,f){const i=j;return l(),b(i,{title:"Vue Tag Component",header:"Tag",description:"Tag component is used to categorize content.",componentDocs:a.docs,apiDocs:["Tag"],ptTabComponent:a.ptComponent,themingDocs:a.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const He=r(qe,[["render",Oe]]);export{He as default};
