import{_ as r,o as l,e as $,w as b,m as T,b as e,f as i,h as g,j as x,c as u,a as t,n as f,g as y,F as m,p as h,r as w,i as B,t as C,D as j,k as D,l as z,v as k,x as P}from"./entry.68beb385.js";import{g as N}from"./PTHelper.11558b27.js";import{_ as E}from"./PrimeVueNuxtLink.f51d0c80.js";const V={},A=e("h3",null,"Screen Reader",-1),I=e("p",null,[i(" Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic, "),e("i",null,"aria-live"),i(" may be utilized as well. In case badges need to be tabbable, "),e("i",null,"tabindex"),i(" can be added to implement custom key handlers. ")],-1),M=e("h3",null,"Keyboard Support",-1),L=e("p",null,"Component does not include any interactive elements.",-1);function q(o,p){const c=g;return l(),$(c,T({id:"accessibility",label:"Accessibility"},o.$attrs),{default:b(()=>[A,I,M,L]),_:1},16)}const F=r(V,[["render",q]]),O={data(){return{code:{basic:'<Badge value="2"></Badge>',options:`<template>
    <div class="card flex justify-content-center">
        <Badge value="2"></Badge>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Badge value="2"></Badge>
    </div>
</template>

<script setup>

<\/script>`}}}},R=e("p",null,[i("Text to display is defined with the "),e("i",null,"value"),i(" property.")],-1),U={class:"card flex justify-content-center"};function W(o,p,c,_,a,v){const s=g,n=x("Badge"),d=h;return l(),u(m,null,[t(s,f(y(o.$attrs)),{default:b(()=>[R]),_:1},16),e("div",U,[t(n,{value:"2"})]),t(d,{code:a.code},null,8,["code"])],64)}const K=r(O,[["render",W]]),G={data(){return{code:{basic:`<Button type="button" label="Emails" badge="8" />
<Button type="button" label="Messages" icon="pi pi-users" severity="warning" badge="8" badgeClass="p-badge-danger" />`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" severity="warning" badge="8" badgeClass="p-badge-danger" />
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" severity="warning" badge="8" badgeClass="p-badge-danger" />
    </div>
</template>

<script setup>

<\/script>`}}}},H=e("p",null,"Buttons have built-in support for badges to display a badge inline.",-1),J={class:"card flex flex-wrap justify-content-center gap-2"};function Q(o,p,c,_,a,v){const s=g,n=x("Button"),d=h;return l(),u(m,null,[t(s,f(y(o.$attrs)),{default:b(()=>[H]),_:1},16),e("div",J,[t(n,{type:"button",label:"Emails",badge:"8"}),t(n,{type:"button",label:"Messages",icon:"pi pi-users",severity:"warning",badge:"8",badgeClass:"p-badge-danger"})]),t(d,{code:a.code},null,8,["code"])],64)}const X=r(G,[["render",Q]]),Y={data(){return{code:{basic:`// import as component
import Badge from 'primevue/badge';

// import as directive
import BadgeDirective from 'primevue/badgedirective';

app.directive('badge', BadgeDirective);`}}}};function Z(o,p,c,_,a,v){const s=g,n=h;return l(),u(m,null,[t(s,f(y(o.$attrs)),null,16),t(n,{code:a.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ee=r(Y,[["render",Z]]),te={data(){return{code:{basic:`<i v-badge="2" class="pi pi-bell p-overlay-badge" style="font-size: 2rem" />
<i v-badge.danger="'5+'" class="pi pi-calendar p-overlay-badge" style="font-size: 2rem" />
<i v-badge.danger class="pi pi-envelope p-overlay-badge" style="font-size: 2rem" />`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-4">
        <i v-badge="2" class="pi pi-bell p-overlay-badge" style="font-size: 2rem" />
        <i v-badge.danger="'5+'" class="pi pi-calendar p-overlay-badge" style="font-size: 2rem" />
        <i v-badge.danger class="pi pi-envelope p-overlay-badge" style="font-size: 2rem" />
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-4">
        <i v-badge="2" class="pi pi-bell p-overlay-badge" style="font-size: 2rem" />
        <i v-badge.danger="'5+'" class="pi pi-calendar p-overlay-badge" style="font-size: 2rem" />
        <i v-badge.danger class="pi pi-envelope p-overlay-badge" style="font-size: 2rem" />
    </div>
</template>

<script setup>

<\/script>`}}}},ne=e("p",null,[i("A Badge can be positioned at the top right corner of an element by adding "),e("i",null,"p-overlay-badge"),i(" style class to the element and embedding the badge inside.")],-1),ae={class:"card flex flex-wrap justify-content-center gap-4"},oe={class:"pi pi-bell p-overlay-badge",style:{"font-size":"2rem"}},se={class:"pi pi-calendar p-overlay-badge",style:{"font-size":"2rem"}},ie={class:"pi pi-envelope p-overlay-badge",style:{"font-size":"2rem"}};function ce(o,p,c,_,a,v){const s=g,n=h,d=w("badge");return l(),u(m,null,[t(s,f(y(o.$attrs)),{default:b(()=>[ne]),_:1},16),e("div",ae,[B(e("i",oe,null,512),[[d,2]]),B(e("i",se,null,512),[[d,"5+",void 0,{danger:!0}]]),B(e("i",ie,null,512),[[d,void 0,void 0,{danger:!0}]])]),t(n,{code:a.code},null,8,["code"])],64)}const de=r(te,[["render",ce]]),re={data(){return{code:{basic:`<Badge value="2"></Badge>
<Badge value="8" severity="success"></Badge>
<Badge value="4" severity="info"></Badge>
<Badge value="12" severity="warning"></Badge>
<Badge value="3" severity="danger"></Badge>`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="12" severity="warning"></Badge>
        <Badge value="3" severity="danger"></Badge>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="12" severity="warning"></Badge>
        <Badge value="3" severity="danger"></Badge>
    </div>
</template>

<script setup>

<\/script>`}}}},le=e("p",null,[i("Severity defines the color of the badge, possible values are "),e("i",null,"success"),i(", "),e("i",null,"info"),i(", "),e("i",null,"warning"),i(" and "),e("i",null,"danger"),i(" in addition to the default theme color.")],-1),pe={class:"card flex flex-wrap justify-content-center gap-2"};function ge(o,p,c,_,a,v){const s=g,n=x("Badge"),d=h;return l(),u(m,null,[t(s,f(y(o.$attrs)),{default:b(()=>[le]),_:1},16),e("div",pe,[t(n,{value:"2"}),t(n,{value:"8",severity:"success"}),t(n,{value:"4",severity:"info"}),t(n,{value:"12",severity:"warning"}),t(n,{value:"3",severity:"danger"})]),t(d,{code:a.code},null,8,["code"])],64)}const ue=r(re,[["render",ge]]),me={data(){return{code:{basic:`<Badge value="6" size="xlarge" severity="success"></Badge>
<Badge value="4" size="large" severity="warning"></Badge>
<Badge value="2"></Badge>`,options:`<template>
    <div class="card flex flex-wrap justify-content-center align-items-end gap-2">
        <Badge value="6" size="xlarge" severity="success"></Badge>
        <Badge value="4" size="large" severity="warning"></Badge>
        <Badge value="2"></Badge>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center align-items-end gap-2">
        <Badge value="6" size="xlarge" severity="success"></Badge>
        <Badge value="4" size="large" severity="warning"></Badge>
        <Badge value="2"></Badge>
    </div>
</template>

<script setup>

<\/script>`}}}},_e=e("p",null,[i("Use the "),e("i",null,"size"),i(" property to customize the size of a Badge, currently "),e("i",null,"large"),i(" and "),e("i",null,"xlarge"),i(" are available as size options.")],-1),ve={class:"card flex flex-wrap justify-content-center align-items-end gap-2"};function be(o,p,c,_,a,v){const s=g,n=x("Badge"),d=h;return l(),u(m,null,[t(s,f(y(o.$attrs)),{default:b(()=>[_e]),_:1},16),e("div",ve,[t(n,{value:"6",size:"xlarge",severity:"success"}),t(n,{value:"4",size:"large",severity:"warning"}),t(n,{value:"2"})]),t(d,{code:a.code},null,8,["code"])],64)}const fe=r(me,[["render",be]]),ye={data(){return{code:{basic:`
// component
<Badge
    value="2"
    :pt="{
        root: 'bg-primary border-round-xl'
    }"
/>

// directive
<i
    v-badge.danger="{
        value: '5+',
        pt: {
            root: 'bg-primary'
        }
    }"
    class="pi pi-calendar text-4xl"
/>`,options:`<template>
    <div class="card flex justify-content-center align-items-center gap-2">
        // component
        <Badge
            value="2"
            :pt="{
                root: 'bg-primary border-round-xl'
            }"
        />

        // directive
        <i
            v-badge.danger="{
                value: '5+',
                pt: {
                    root: 'bg-primary'
                }
            }"
            class="pi pi-calendar text-4xl"
        />
    </div>
</template>`,composition:`<template>
    <div class="card flex justify-content-center align-items-center gap-2">
        // component
        <Badge
            value="2"
            :pt="{
                root: 'bg-primary border-round-xl'
            }"
        />

        // directive
        <i
            v-badge.danger="{
                value: '5+',
                pt: {
                    root: 'bg-primary'
                }
            }"
            class="pi pi-calendar text-4xl"
        />
    </div>
</template>`}}}},he={class:"card flex justify-content-center align-items-center gap-2"},xe={class:"pi pi-calendar text-4xl"};function Be(o,p,c,_,a,v){const s=g,n=x("Badge"),d=h,S=w("badge");return l(),u(m,null,[t(s,f(y(o.$attrs)),null,16),e("div",he,[t(n,{value:"2",pt:{root:"bg-primary border-round-xl"}}),B(e("i",xe,null,512),[[S,{value:"5+",pt:{root:"bg-primary"}},void 0,{danger:!0}]])]),t(d,{code:a.code},null,8,["code"])],64)}const $e=r(ye,[["render",Be]]),we={},De=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/badge.jpg"})],-1);function ze(o,p){const c=g;return l(),u(m,null,[t(c,f(y(o.$attrs)),{default:b(()=>[e("p",null,C(o.$attrs.description),1)]),_:1},16),De],64)}const Se=r(we,[["render",ze]]),Te={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Se},{id:"pt.doc.badge",label:"Badge PT Options",component:j,data:N("Badge")},{id:"pt.demo",label:"Demo",component:$e}]}}},Ce={class:"doc-main"},je=e("div",{class:"doc-intro"},[e("h1",null,"Badge Pass Through")],-1);function ke(o,p,c,_,a,v){const s=D,n=z;return l(),u(m,null,[e("div",Ce,[je,t(s,{docs:a.docs},null,8,["docs"])]),t(n,{docs:a.docs},null,8,["docs"])],64)}const Pe=r(Te,[["render",ke]]),Ne={},Ee=e("p",null,"List of class names used in the styled mode.",-1),Ve=k('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-badge</td><td>Badge element</td></tr><tr><td>p-overlay-badge</td><td>Wrapper of a badge and its target.</td></tr><tr><td>p-badge-dot</td><td>Badge element with no value.</td></tr><tr><td>p-badge-success</td><td>Badge element with success severity.</td></tr><tr><td>p-badge-info</td><td>Badge element with info severity.</td></tr><tr><td>p-badge-warning</td><td>Badge element with warning severity.</td></tr><tr><td>p-badge-danger</td><td>Badge element with danger severity.</td></tr><tr><td>p-badge-lg</td><td>Large badge element</td></tr><tr><td>p-badge-xl</td><td>Extra large badge element</td></tr></tbody></table></div>',1);function Ae(o,p){const c=g;return l(),u(m,null,[t(c,f(y(o.$attrs)),{default:b(()=>[Ee]),_:1},16),Ve],64)}const Ie=r(Ne,[["render",Ae]]),Me={data(){return{code1:{basic:`
export default {
    directives: {
        badge: {
            root: ({ context }) => ({
                class: [
                    'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right m-0',
                    'text-xs leading-6 flex items-center justify-center',
                    'text-center text-white font-bold',
                    {
                        'rounded-full p-0': context.nogutter || context.dot,
                        'rounded-[10px] px-2': !context.nogutter && !context.dot,
                        'min-w-[0.5rem] w-2 h-2': context.dot,
                        'min-w-[1.5rem] h-6': !context.dot
                    },
                    {
                        'bg-blue-500 ': context.info || (!context.info && !context.success && !context.warning && !context.danger),
                        'bg-green-500 ': context.success,
                        'bg-orange-500 ': context.warning,
                        'bg-red-500 ': context.danger
                    }
                ]
            })
        }
    },
    badge: {
        root: ({ props }) => ({
            class: [
                'rounded-full p-0 text-center inline-block',
                'bg-blue-500 text-white font-bold',
                {
                    'bg-gray-500 ': props.severity == 'secondary',
                    'bg-green-500 ': props.severity == 'success',
                    'bg-blue-500 ': props.severity == 'info',
                    'bg-orange-500 ': props.severity == 'warning',
                    'bg-purple-500 ': props.severity == 'help',
                    'bg-red-500 ': props.severity == 'danger'
                },
                {
                    'text-xs min-w-[1.5rem] h-[1.5rem] leading-[1.5rem]': props.size == null,
                    'text-lg min-w-[2.25rem] h-[2.25rem] leading-[2.25rem]': props.size == 'large',
                    'text-2xl min-w-[3rem] h-[3rem] leading-[3rem]': props.size == 'xlarge'
                }
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Badge value="2"></Badge>
        <Badge value="8" severity="success"></Badge>
        <Badge value="4" severity="info"></Badge>
        <Badge value="12" severity="warning"></Badge>
        <Badge value="3" severity="danger"></Badge>
    </div>

    <div class="card flex flex-wrap justify-center gap-4 mt-4">
        <i v-badge="2" class="pi pi-bell relative text-gray-700 dark:text-white/80" style="font-size: 2rem" />
        <i v-badge.danger="'5+'" class="pi pi-calendar relative text-gray-700 dark:text-white/80" style="font-size: 2rem" />
        <i v-badge.danger class="pi pi-envelope relative text-gray-700 dark:text-white/80" style="font-size: 2rem" />
    </div>
</template>

<script setup>

<\/script>`}}}},Le=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function qe(o,p,c,_,a,v){const s=E,n=h,d=g;return l(),$(d,f(y(o.$attrs)),{default:b(()=>[e("p",null,[i(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(s,{to:"/tailwind"},{default:b(()=>[i("Tailwind Customization")]),_:1}),i(" section for an example. ")]),t(n,{code:a.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Le,t(n,{code:a.code2,embedded:""},null,8,["code"])]),_:1},16)}const Fe=r(Me,[["render",qe]]),Oe={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ie},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Fe}]}]}}},Re={class:"doc-main"},Ue=e("div",{class:"doc-intro"},[e("h1",null,"Badge Theming")],-1);function We(o,p,c,_,a,v){const s=D,n=z;return l(),u(m,null,[e("div",Re,[Ue,t(s,{docs:a.docs},null,8,["docs"])]),t(n,{docs:a.docs},null,8,["docs"])],64)}const Ke=r(Oe,[["render",We]]),Ge={data(){return{docs:[{id:"import",label:"Import",component:ee},{id:"basic",label:"Basic",component:K},{id:"severity",label:"Severity",component:ue},{id:"size",label:"Size",component:fe},{id:"positioned",label:"Position",component:de},{id:"button",label:"Button",component:X},{id:"accessibility",label:"Accessibility",component:F}],ptComponent:Pe,themingDoc:Ke}}};function He(o,p,c,_,a,v){const s=P;return l(),$(s,{title:"Vue Badge Component",header:"Badge",description:"Badge is a small status indicator for another element.",componentDocs:a.docs,apiDocs:["Badge","BadgeDirective"],ptTabComponent:a.ptComponent,themingDocs:a.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ye=r(Ge,[["render",He]]);export{Ye as default};
