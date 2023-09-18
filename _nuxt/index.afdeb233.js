import{_ as s,o as p,e as x,w as m,m as D,b as e,f as c,h,j as C,c as u,a as t,n as f,g as v,F as _,p as y,t as T,D as S,k as $,l as w,v as A,x as k}from"./entry.68beb385.js";import{g as P}from"./PTHelper.11558b27.js";import{_ as E}from"./PrimeVueNuxtLink.f51d0c80.js";const I={},M=e("h3",null,"Screen Reader",-1),F=e("p",null,[c(" Chip uses the "),e("i",null,"label"),c(" property as the default "),e("i",null,"aria-label"),c(", since any attribute is passed to the root element "),e("i",null,"aria-labelledby"),c(" or "),e("i",null,"aria-label"),c(" can be used to override the default behavior. Removable chips have a "),e("i",null,"tabindex"),c(" and focusable with the tab key. ")],-1),R=e("h3",null,"Keyboard Support",-1),j=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"backspace")]),e("td",null,"Hides removable.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Hides removable.")])])])],-1);function B(n,r){const l=h;return p(),x(l,D({id:"accessibility",label:"Accessibility"},n.$attrs),{default:m(()=>[M,F,R,j]),_:1},16)}const N=s(I,[["render",B]]),V={data(){return{code:{basic:`<Chip label="Action" />
<Chip label="Comedy" />
<Chip label="Mystery" />
<Chip label="Thriller" removable />`,options:`<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Action" />
        <Chip label="Comedy" />
        <Chip label="Mystery" />
        <Chip label="Thriller" removable />
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Action" />
        <Chip label="Comedy" />
        <Chip label="Mystery" />
        <Chip label="Thriller" removable />
    </div>
</template>

<script setup>

<\/script>`}}}},L=e("p",null,[c("A basic chip with a text is created with the "),e("i",null,"label"),c(" property. In addition when "),e("i",null,"removable"),c(" is added, a delete icon is displayed to remove a chip.")],-1),O={class:"card flex flex-wrap gap-2"};function G(n,r,l,b,a,g){const i=h,o=C("Chip"),d=y;return p(),u(_,null,[t(i,f(v(n.$attrs)),{default:m(()=>[L]),_:1},16),e("div",O,[t(o,{label:"Action"}),t(o,{label:"Comedy"}),t(o,{label:"Mystery"}),t(o,{label:"Thriller",removable:""})]),t(d,{code:a.code},null,8,["code"])],64)}const z=s(V,[["render",G]]),J={data(){return{code:{basic:`<Chip label="Apple" icon="pi pi-apple" />
<Chip label="Facebook" icon="pi pi-facebook" />
<Chip label="Google" icon="pi pi-google" />
<Chip label="Microsoft" icon="pi pi-microsoft" removable />`,options:`<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Apple" icon="pi pi-apple" />
        <Chip label="Facebook" icon="pi pi-facebook" />
        <Chip label="Google" icon="pi pi-google" />
        <Chip label="Microsoft" icon="pi pi-microsoft" removable />
    </div>
</template>
<script>

<\/script>`,composition:`<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Apple" icon="pi pi-apple" />
        <Chip label="Facebook" icon="pi pi-facebook" />
        <Chip label="Google" icon="pi pi-google" />
        <Chip label="Microsoft" icon="pi pi-microsoft" removable />
    </div>
</template>
<script setup>

<\/script>`}}}},X=e("p",null,[c("A font icon next to the label can be displayed with the "),e("i",null,"icon"),c(" property.")],-1),H={class:"card flex flex-wrap gap-2"};function K(n,r,l,b,a,g){const i=h,o=C("Chip"),d=y;return p(),u(_,null,[t(i,f(v(n.$attrs)),{default:m(()=>[X]),_:1},16),e("div",H,[t(o,{label:"Apple",icon:"pi pi-apple"}),t(o,{label:"Facebook",icon:"pi pi-facebook"}),t(o,{label:"Google",icon:"pi pi-google"}),t(o,{label:"Microsoft",icon:"pi pi-microsoft",removable:""})]),t(d,{code:a.code},null,8,["code"])],64)}const q=s(J,[["render",K]]),U={data(){return{code:{basic:`<Chip label="Amy Elsner" image="/images/avatar/amyelsner.png" />
<Chip label="Asiya Javayant" image="/images/avatar/asiyajavayant.png" />
<Chip label="Onyama Limba" image="/images/avatar/onyamalimba.png" />
<Chip label="Xuxue Feng" image="/images/avatar/xuxuefeng.png" removable />`,options:`<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Amy Elsner" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
        <Chip label="Asiya Javayant" image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
        <Chip label="Onyama Limba" image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
        <Chip label="Xuxue Feng" image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" removable />
    </div>
</template>

<script >

<\/script>`,composition:`<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Amy Elsner" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
        <Chip label="Asiya Javayant" image=https://primefaces.org/cdn/primevue"/images/avatar/asiyajavayant.png" />
        <Chip label="Onyama Limba" image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
        <Chip label="Xuxue Feng" image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" removable />
    </div>
</template>

<script setup>

<\/script>`}}}},W=e("p",null,[c("The "),e("i",null,"image"),c(" property is used to display an image like an avatar.")],-1),Q={class:"card flex flex-wrap gap-2"};function Y(n,r,l,b,a,g){const i=h,o=C("Chip"),d=y;return p(),u(_,null,[t(i,f(v(n.$attrs)),{default:m(()=>[W]),_:1},16),e("div",Q,[t(o,{label:"Amy Elsner",image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"}),t(o,{label:"Asiya Javayant",image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png"}),t(o,{label:"Onyama Limba",image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png"}),t(o,{label:"Xuxue Feng",image:"https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",removable:""})]),t(d,{code:a.code},null,8,["code"])],64)}const Z=s(U,[["render",Y]]),ee={data(){return{code:{basic:"import Chip from 'primevue/chip';"}}}};function te(n,r,l,b,a,g){const i=h,o=y;return p(),u(_,null,[t(i,f(v(n.$attrs)),null,16),t(o,{code:a.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const oe=s(ee,[["render",te]]),ae={data(){return{code:{basic:`<Chip class="pl-0 pr-3">
    <span class="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
    <span class="ml-2 font-medium">PRIME</span>
</Chip>`,options:`<template>
    <div class="card">
        <Chip class="pl-0 pr-3">
            <span class="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
            <span class="ml-2 font-medium">PRIME</span>
        </Chip>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card">
        <Chip class="pl-0 pr-3">
            <span class="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
            <span class="ml-2 font-medium">PRIME</span>
        </Chip>
    </div>
</template>

<script setup>

<\/script>`}}}},ne=e("p",null,"The default slot allows displaying custom content inside a chip.",-1),ie={class:"card"},ce=e("span",{class:"bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center"},"P",-1),le=e("span",{class:"ml-2 font-medium"},"PRIME",-1);function se(n,r,l,b,a,g){const i=h,o=C("Chip"),d=y;return p(),u(_,null,[t(i,f(v(n.$attrs)),{default:m(()=>[ne]),_:1},16),e("div",ie,[t(o,{class:"pl-0 pr-3"},{default:m(()=>[ce,le]),_:1})]),t(d,{code:a.code},null,8,["code"])],64)}const pe=s(ae,[["render",se]]),re={data(){return{code:{basic:`<Chip
    label="Amy Elsner"
    image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
    :pt="{
        root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } },
        label: { class: 'text-white' }
    }"
/>`,options:`<template>
    <Chip
        label="Amy Elsner"
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        :pt="{
            root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } },
            label: { class: 'text-white' }
        }"
    />
</template>`,composition:`<template>
    <Chip
        label="Amy Elsner"
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        :pt="{
            root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } },
            label: { class: 'text-white' }
        }"
    />
</template>`}}}},de={class:"card flex justify-content-center"};function me(n,r,l,b,a,g){const i=h,o=C("Chip"),d=y;return p(),u(_,null,[t(i,f(v(n.$attrs)),null,16),e("div",de,[t(o,{label:"Amy Elsner",image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",pt:{root:{style:{background:"linear-gradient(to right, #8e2de2, #4a00e0)",borderRadius:"24px"}},label:{class:"text-white"}}},null,8,["pt"])]),t(d,{code:a.code},null,8,["code"])],64)}const he=s(re,[["render",me]]),ue={},_e=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/chip.jpg"})],-1);function be(n,r){const l=h;return p(),u(_,null,[t(l,f(v(n.$attrs)),{default:m(()=>[e("p",null,T(n.$attrs.description),1)]),_:1},16),_e],64)}const ge=s(ue,[["render",be]]),fe={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ge},{id:"pt.doc.chip",label:"Chip PT Options",component:S,data:P("Chip")},{id:"pt.demo",label:"Demo",component:he}]}}},ve={class:"doc-main"},ye=e("div",{class:"doc-intro"},[e("h1",null,"Chip Pass Through")],-1);function Ce(n,r,l,b,a,g){const i=$,o=w;return p(),u(_,null,[e("div",ve,[ye,t(i,{docs:a.docs},null,8,["docs"])]),t(o,{docs:a.docs},null,8,["docs"])],64)}const xe=s(fe,[["render",Ce]]),$e={},we=e("p",null,"List of class names used in the styled mode.",-1),De=A('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-chip</td><td>Container element.</td></tr><tr><td>p-chip-image</td><td>Container element in image mode.</td></tr><tr><td>p-chip-text</td><td>Text of the chip.</td></tr><tr><td>pi-chip-remove-icon</td><td>Remove icon.</td></tr></tbody></table></div>',1);function Te(n,r){const l=h;return p(),u(_,null,[t(l,f(v(n.$attrs)),{default:m(()=>[we]),_:1},16),De],64)}const Se=s($e,[["render",Te]]),Ae={data(){return{code1:{basic:`
export default {
    chip: {
        root: {
            class: ['inline-flex items-center', 'bg-gray-200 text-gray-800 rounded-[16px] px-3 dark:text-white/80 dark:bg-gray-900']
        },
        label: 'leading-6 mt-1.5 mb-1.5',
        icon: 'leading-6 mr-2',
        image: {
            class: ['w-9 h-9 ml-[-0.75rem] mr-2', 'rounded-full']
        },
        removeIcon: {
            class: ['ml-2 rounded-md transition duration-200 ease-in-out', 'cursor-pointer leading-6']
        }
    }
}
`},code2:{composition:`<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Apple" icon="pi pi-apple" />
        <Chip label="Facebook" icon="pi pi-facebook" />
        <Chip label="Google" icon="pi pi-google" />
        <Chip label="Microsoft" icon="pi pi-microsoft" removable />
    </div>
</template>
<script setup>

<\/script>`}}}},ke=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Pe(n,r,l,b,a,g){const i=E,o=y,d=h;return p(),x(d,f(v(n.$attrs)),{default:m(()=>[e("p",null,[c(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(i,{to:"/tailwind"},{default:m(()=>[c("Tailwind Customization")]),_:1}),c(" section for an example. ")]),t(o,{code:a.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),ke,t(o,{code:a.code2,embedded:""},null,8,["code"])]),_:1},16)}const Ee=s(Ae,[["render",Pe]]),Ie={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Se},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Ee}]}]}}},Me={class:"doc-main"},Fe=e("div",{class:"doc-intro"},[e("h1",null,"Chip Theming")],-1);function Re(n,r,l,b,a,g){const i=$,o=w;return p(),u(_,null,[e("div",Me,[Fe,t(i,{docs:a.docs},null,8,["docs"])]),t(o,{docs:a.docs},null,8,["docs"])],64)}const je=s(Ie,[["render",Re]]),Be={data(){return{docs:[{id:"import",label:"Import",component:oe},{id:"basic",label:"Basic",component:z},{id:"icon",label:"Icon",component:q},{id:"image",label:"Image",component:Z},{id:"templatedoc",label:"Template",component:pe},{id:"accessibility",label:"Accessibility",component:N}],ptComponent:xe,themingDoc:je}}};function Ne(n,r,l,b,a,g){const i=k;return p(),x(i,{title:"Vue Chip Component",header:"Chip",description:"Chip represents entities using icons, labels and images.",componentDocs:a.docs,apiDocs:["Chip"],ptTabComponent:a.ptComponent,themingDocs:a.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ge=s(Be,[["render",Ne]]);export{Ge as default};
