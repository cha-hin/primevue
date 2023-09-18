import{_ as l,o as n,e as $,w as m,m as z,b as e,f as i,h as f,j as A,c as g,a,n as _,g as b,F as v,p as x,r as w,i as k,t as j,D,k as T,l as S,v as G,x as P}from"./entry.68beb385.js";import{g as C}from"./PTHelper.11558b27.js";import{_ as B}from"./PrimeVueNuxtLink.f51d0c80.js";const I={},V=e("h3",null,"Screen Reader",-1),U=e("p",null,[i(" Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like "),e("i",null,"img"),i(" along with "),e("i",null,"aria-labelledby"),i(" or "),e("i",null,"aria-label"),i(" to describe the component. In case avatars need to be tabbable, "),e("i",null,"tabindex"),i(" can be added as well to implement custom key handlers. ")],-1),N=e("h3",null,"Keyboard Support",-1),L=e("p",null,"Component does not include any interactive elements.",-1);function F(r,p){const o=f;return n(),$(o,z({id:"accessibility",label:"Accessibility"},r.$attrs),{default:m(()=>[V,U,N,L]),_:1},16)}const O=l(I,[["render",F]]),E={data(){return{code:{basic:`<AvatarGroup>
    <Avatar image="/images/avatar/amyelsner.png" size="large" shape="circle" />
    <Avatar image="/images/avatar/asiyajavayant.png" size="large" shape="circle" />
    <Avatar image="/images/avatar/onyamalimba.png" size="large" shape="circle" />
    <Avatar image="/images/avatar/ionibowcher.png" size="large" shape="circle" />
    <Avatar image="/images/avatar/xuxuefeng.png" size="large" shape="circle" />
    <Avatar label="+2" shape="circle" size="large" style="background-color: '#9c27b0', color: '#ffffff'" />
</AvatarGroup>`,options:`<template>
    <div class="card flex justify-content-center">
        <AvatarGroup>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" size="large" shape="circle" />
            <Avatar label="+2" shape="circle" size="large" style="background-color: '#9c27b0', color: '#ffffff'" />
        </AvatarGroup>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <AvatarGroup>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" size="large" shape="circle" />
            <Avatar label="+2" shape="circle" size="large" style="background-color: '#9c27b0', color: '#ffffff'" />
        </AvatarGroup>
    </div>
</template>

<script setup>

<\/script>`}}}},q=e("p",null,"Grouping is available by wrapping multiple Avatar components inside an AvatarGroup.",-1),R={class:"card flex justify-content-center"};function K(r,p,o,u,s,h){const c=f,t=A("Avatar"),d=A("AvatarGroup"),y=x;return n(),g(v,null,[a(c,_(b(r.$attrs)),{default:m(()=>[q]),_:1},16),e("div",R,[a(d,null,{default:m(()=>[a(t,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",size:"large",shape:"circle"}),a(t,{image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",size:"large",shape:"circle"}),a(t,{image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",size:"large",shape:"circle"}),a(t,{image:"https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",size:"large",shape:"circle"}),a(t,{image:"https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",size:"large",shape:"circle"}),a(t,{label:"+2",shape:"circle",size:"large",style:{"background-color":"'#9c27b0', color: '#ffffff'"}})]),_:1})]),a(y,{code:s.code},null,8,["code"])],64)}const W=l(E,[["render",K]]),H={data(){return{code:{basic:`<Avatar icon="pi pi-user" class="mr-2" size="xlarge" />
<Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" />
<Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" />

<Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
<Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" shape="circle" />
<Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" shape="circle" />

<Avatar v-badge="4" class="p-overlay-badge" icon="pi pi-user" size="xlarge" />`,options:`<template>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Icon</h5>
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" />
                <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" />
                <Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" />
            </div>

            <div class="flex-auto">
                <h5>Circle</h5>
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" shape="circle" />
                <Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge="4" class="p-overlay-badge" icon="pi pi-user" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Icon</h5>
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" />
                <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" />
                <Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" />
            </div>

            <div class="flex-auto">
                <h5>Circle</h5>
                <Avatar icon="pi pi-user" class="mr-2" size="xlarge" shape="circle" />
                <Avatar icon="pi pi-user" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" shape="circle" />
                <Avatar icon="pi pi-user" style="background-color: #9c27b0; color: #ffffff" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge="4" class="p-overlay-badge" icon="pi pi-user" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script setup>

<\/script>`}}}},J=e("p",null,[i("A font icon is displayed as an Avatar with the "),e("i",null,"icon"),i(" property.")],-1),M={class:"card"},Q={class:"flex flex-wrap gap-5"},X={class:"flex-auto"},Y=e("h5",null,"Icon",-1),Z={class:"flex-auto"},ee=e("h5",null,"Circle",-1),ae={class:"flex-auto"},te=e("h5",null,"Badge",-1);function re(r,p,o,u,s,h){const c=f,t=A("Avatar"),d=x,y=w("badge");return n(),g(v,null,[a(c,_(b(r.$attrs)),{default:m(()=>[J]),_:1},16),e("div",M,[e("div",Q,[e("div",X,[Y,a(t,{icon:"pi pi-user",class:"mr-2",size:"xlarge"}),a(t,{icon:"pi pi-user",class:"mr-2",size:"large",style:{"background-color":"#2196f3",color:"#ffffff"}}),a(t,{icon:"pi pi-user",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),e("div",Z,[ee,a(t,{icon:"pi pi-user",class:"mr-2",size:"xlarge",shape:"circle"}),a(t,{icon:"pi pi-user",class:"mr-2",size:"large",style:{"background-color":"#2196f3",color:"#ffffff"},shape:"circle"}),a(t,{icon:"pi pi-user",style:{"background-color":"#9c27b0",color:"#ffffff"},shape:"circle"})]),e("div",ae,[te,k(a(t,{class:"p-overlay-badge",icon:"pi pi-user",size:"xlarge"},null,512),[[y,4]])])])]),a(d,{code:s.code},null,8,["code"])],64)}const se=l(H,[["render",re]]),ce={data(){return{code:{basic:`<Avatar image="/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
<Avatar image="/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
<Avatar image="/images/avatar/onyamalimba.png" shape="circle" />

<Avatar v-badge.danger="4" class="p-overlay-badge" image="/images/organization/walter.jpg" size="xlarge" />

<Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex align-items-center justify-content-center mr-2" size="xlarge" />`,options:`<template>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Image</h5>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge.danger="4" class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
            </div>

            <div class="flex-auto">
                <h5>Gravatar</h5>
                <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex align-items-center justify-content-center mr-2" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div class="flex-auto">
                <h5>Image</h5>
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            </div>

            <div class="flex-auto">
                <h5>Badge</h5>
                <Avatar v-badge.danger="4" class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
            </div>

            <div class="flex-auto">
                <h5>Gravatar</h5>
                <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex align-items-center justify-content-center mr-2" size="xlarge" />
            </div>
        </div>
    </div>
</template>

<script setup>

<\/script>`}}}},oe=e("p",null,[i("Use the "),e("i",null,"image"),i(" property to display an image as an Avatar.")],-1),ie={class:"card"},le={class:"flex flex-wrap gap-5"},ne={class:"flex-auto"},pe=e("h5",null,"Image",-1),de={class:"flex-auto"},me=e("h5",null,"Badge",-1),fe={class:"flex-auto"},ge=e("h5",null,"Gravatar",-1);function ve(r,p,o,u,s,h){const c=f,t=A("Avatar"),d=x,y=w("badge");return n(),g(v,null,[a(c,_(b(r.$attrs)),{default:m(()=>[oe]),_:1},16),e("div",ie,[e("div",le,[e("div",ne,[pe,a(t,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",class:"mr-2",size:"xlarge",shape:"circle"}),a(t,{image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",class:"mr-2",size:"large",shape:"circle"}),a(t,{image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",shape:"circle"})]),e("div",de,[me,k(a(t,{class:"p-overlay-badge",image:"https://primefaces.org/cdn/primevue/images/organization/walter.jpg",size:"xlarge"},null,512),[[y,4,void 0,{danger:!0}]])]),e("div",fe,[ge,a(t,{image:"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp",class:"flex align-items-center justify-content-center mr-2",size:"xlarge"})])])]),a(d,{code:s.code},null,8,["code"])],64)}const ue=l(ce,[["render",ve]]),he={data(){return{code:{basic:`import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';   //Optional for grouping`}}}};function _e(r,p,o,u,s,h){const c=f,t=x;return n(),g(v,null,[a(c,_(b(r.$attrs)),null,16),a(t,{code:s.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const be=l(he,[["render",_e]]),ye={data(){return{code:{basic:`<Avatar label="P" class="mr-2" size="xlarge" />
<Avatar label="V" class="mr-2" size="large" style="background-color:#2196F3; color: #ffffff"/>
<Avatar label="U" class="mr-2" style="background-color:#9c27b0; color: #ffffff" />

<Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
<Avatar label="V" class="mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle"  />
<Avatar label="U" class="mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle" />

<Avatar label="U" size="xlarge" style="background-color:#4caf4f; color: #ffffff" v-badge="4" />`,options:`<template>
    <div class="flex flex-wrap gap-5">
        <div class="flex-auto">
            <h5>Label</h5>
            <Avatar label="P" class="mr-2" size="xlarge" />
            <Avatar label="V" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" />
            <Avatar label="U" class="mr-2" style="background-color: #9c27b0; color: #ffffff" />
        </div>

        <div class="flex-auto">
            <h5>Circle</h5>
            <Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
            <Avatar label="V" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" shape="circle" />
            <Avatar label="U" class="mr-2" style="background-color: #9c27b0; color: #ffffff" shape="circle" />
        </div>

        <div class="flex-auto">
            <h5>Badge</h5>
            <Avatar v-badge="4" label="U" size="xlarge" style="background-color: #4caf4f; color: #ffffff" />
        </div>
    </div>
</template>

<script>

<\/script>`,composition:`<template>
    <div class="flex flex-wrap gap-5">
        <div class="flex-auto">
            <h5>Label</h5>
            <Avatar label="P" class="mr-2" size="xlarge" />
            <Avatar label="V" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" />
            <Avatar label="U" class="mr-2" style="background-color: #9c27b0; color: #ffffff" />
        </div>

        <div class="flex-auto">
            <h5>Circle</h5>
            <Avatar label="P" class="mr-2" size="xlarge" shape="circle" />
            <Avatar label="V" class="mr-2" size="large" style="background-color: #2196f3; color: #ffffff" shape="circle" />
            <Avatar label="U" class="mr-2" style="background-color: #9c27b0; color: #ffffff" shape="circle" />
        </div>

        <div class="flex-auto">
            <h5>Badge</h5>
            <Avatar v-badge="4" label="U" size="xlarge" style="background-color: #4caf4f; color: #ffffff" />
        </div>
    </div>
</template>

<script setup>

<\/script>`}}}},xe=e("p",null,[i("A letter Avatar is defined with the "),e("i",null,"label"),i(" property.")],-1),Ae={class:"card"},ze={class:"flex flex-wrap gap-5"},$e={class:"flex-auto"},we=e("h5",null,"Label",-1),ke={class:"flex-auto"},De=e("h5",null,"Circle",-1),Ce={class:"flex-auto"},Te=e("h5",null,"Badge",-1);function Se(r,p,o,u,s,h){const c=f,t=A("Avatar"),d=x,y=w("badge");return n(),g(v,null,[a(c,_(b(r.$attrs)),{default:m(()=>[xe]),_:1},16),e("div",Ae,[e("div",ze,[e("div",$e,[we,a(t,{label:"P",class:"mr-2",size:"xlarge"}),a(t,{label:"V",class:"mr-2",size:"large",style:{"background-color":"#2196f3",color:"#ffffff"}}),a(t,{label:"U",class:"mr-2",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),e("div",ke,[De,a(t,{label:"P",class:"mr-2",size:"xlarge",shape:"circle"}),a(t,{label:"V",class:"mr-2",size:"large",style:{"background-color":"#2196f3",color:"#ffffff"},shape:"circle"}),a(t,{label:"U",class:"mr-2",style:{"background-color":"#9c27b0",color:"#ffffff"},shape:"circle"})]),e("div",Ce,[Te,k(a(t,{label:"U",size:"xlarge",style:{"background-color":"#4caf4f",color:"#ffffff"}},null,512),[[y,4]])])])]),a(d,{code:s.code},null,8,["code"])],64)}const je=l(ye,[["render",Se]]),Ge={data(){return{code:{basic:`<Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
    :pt="{
        image: { class: 'w-4rem h-4rem' }
    }"
/>`,options:`<template>
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        :pt="{
            image: { class: 'w-4rem h-4rem' }
        }"
    />
</template>`,composition:`<template>
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        :pt="{
            image: { class: 'w-4rem h-4rem' }
        }"
    />
</template>`}}}},Pe={class:"card flex justify-content-center"};function Be(r,p,o,u,s,h){const c=f,t=A("Avatar"),d=x;return n(),g(v,null,[a(c,_(b(r.$attrs)),null,16),e("div",Pe,[a(t,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",pt:{image:{class:"w-4rem h-4rem"}}})]),a(d,{code:s.code},null,8,["code"])],64)}const Ie=l(Ge,[["render",Be]]),Ve={},Ue=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/avatar.jpg"})],-1);function Ne(r,p){const o=f;return n(),g(v,null,[a(o,_(b(r.$attrs)),{default:m(()=>[e("p",null,j(r.$attrs.description),1)]),_:1},16),Ue],64)}const Le=l(Ve,[["render",Ne]]),Fe={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Le},{id:"pt.doc.avatar",label:"Avatar PT Options",component:D,data:C("Avatar")},{id:"pt.doc.avatar",label:"AvatarGroup PT Options",component:D,data:C("AvatarGroup")},{id:"pt.demo",label:"Demo",component:Ie}]}}},Oe={class:"doc-main"},Ee=e("div",{class:"doc-intro"},[e("h1",null,"Avatar Pass Through")],-1);function qe(r,p,o,u,s,h){const c=T,t=S;return n(),g(v,null,[e("div",Oe,[Ee,a(c,{docs:s.docs},null,8,["docs"])]),a(t,{docs:s.docs},null,8,["docs"])],64)}const Re=l(Fe,[["render",qe]]),Ke={},We=e("p",null,"List of class names used in the styled mode.",-1),He=G('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-avatar</td><td>Container element.</td></tr><tr><td>p-avatar-image</td><td>Container element in image mode.</td></tr><tr><td>p-avatar-circle</td><td>Container element with a circle shape.</td></tr><tr><td>p-avatar-text</td><td>Text of the Avatar.</td></tr><tr><td>p-avatar-icon</td><td>Icon of the Avatar.</td></tr><tr><td>p-avatar-lg</td><td>Container element with a large size.</td></tr><tr><td>p-avatar-xl</td><td>Container element with an xlarge size.</td></tr></tbody></table></div>',1),Je=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Element")])]),e("tbody",null,[e("tr",null,[e("td",null,"p-avatar-group"),e("td",null,"Container element.")])])])],-1);function Me(r,p){const o=f;return n(),g(v,null,[a(o,z({id:"stylingofavatar",label:"Styling of Avatar"},r.$attrs),{default:m(()=>[We]),_:1},16),He,a(o,z({id:"stylingofavatargroup",label:"Styling of AvatarGroup"},r.$attrs),null,16),Je],64)}const Qe=l(Ke,[["render",Me]]),Xe={data(){return{code1:{basic:`
export default {
    avatar: {
        root: ({ props, parent }) => ({
            class: [
                'flex items-center justify-center',
                'bg-gray-300 dark:bg-gray-800',
                {
                    'rounded-lg': props.shape == 'square',
                    'rounded-full': props.shape == 'circle'
                },
                {
                    'text-base h-8 w-8': props.size == null || props.size == 'normal',
                    'w-12 h-12 text-xl': props.size == 'large',
                    'w-16 h-16 text-2xl': props.size == 'xlarge'
                },
                {
                    '-ml-4 border-2 border-white dark:border-gray-900': parent.instance.$css !== undefined
                }
            ]
        }),
        image: 'h-full w-full'
    },
    avatargroup: {
        root: 'flex items-center'
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <div class="flex flex-wrap gap-5">
            <div>
                <h5>Image</h5>
                <div class="flex">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" size="xlarge" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" class="mr-2" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
                </div>
            </div>

            <div>
                <h5>Badge</h5>
                <Avatar v-badge.danger="4" class="p-overlay-badge" image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge" />
            </div>

            <div>
                <h5>Gravatar</h5>
                <Avatar image="https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp" class="flex align-items-center justify-content-center mr-2" size="xlarge" />
            </div>
        </div>
    </div>
    <div class="card flex justify-content-center">
        <AvatarGroup>
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png" size="large" shape="circle" />
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png" size="large" shape="circle" />
            <Avatar label="+2" shape="circle" size="large" style="background-color: '#9c27b0', color: '#ffffff'" />
        </AvatarGroup>
    </div>
</template>

<script setup>

<\/script>`}}}},Ye=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ze(r,p,o,u,s,h){const c=B,t=x,d=f;return n(),$(d,_(b(r.$attrs)),{default:m(()=>[e("p",null,[i(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),a(c,{to:"/tailwind"},{default:m(()=>[i("Tailwind Customization")]),_:1}),i(" section for an example. ")]),a(t,{code:s.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ye,a(t,{code:s.code2,embedded:""},null,8,["code"])]),_:1},16)}const ea=l(Xe,[["render",Ze]]),aa={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Qe},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ea}]}]}}},ta={class:"doc-main"},ra=e("div",{class:"doc-intro"},[e("h1",null,"Avatar Theming")],-1);function sa(r,p,o,u,s,h){const c=T,t=S;return n(),g(v,null,[e("div",ta,[ra,a(c,{docs:s.docs},null,8,["docs"])]),a(t,{docs:s.docs},null,8,["docs"])],64)}const ca=l(aa,[["render",sa]]),oa={data(){return{docs:[{id:"import",label:"Import",component:be},{id:"label",label:"Label",component:je},{id:"icon",label:"Icon",component:se},{id:"image",label:"Image",component:ue},{id:"avatargroup",label:"AvatarGroup",component:W},{id:"accessibility",label:"Accessibility",component:O}],ptComponent:Re,themingDoc:ca}}};function ia(r,p,o,u,s,h){const c=P;return n(),$(c,{title:"Vue Avatar Component",header:"Avatar",description:"Avatar represents people using icons, labels and images.",componentDocs:s.docs,apiDocs:["Avatar","AvatarGroup"],ptTabComponent:s.ptComponent,themingDocs:s.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const da=l(oa,[["render",ia]]);export{da as default};
