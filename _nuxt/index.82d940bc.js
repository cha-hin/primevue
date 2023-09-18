import{_ as s,o as c,e as x,w as y,a as e,m as $,b as n,f as p,p as h,h as v,j as B,c as m,n as _,g as f,F as g,t as w,D,k as S,l as k,v as j,x as C}from"./entry.68beb385.js";import{g as T}from"./PTHelper.11558b27.js";import{_ as P}from"./PrimeVueNuxtLink.f51d0c80.js";const F={data(){return{code:{basic:`<Button icon="pi pi-check" aria-label="Submit" />

<Button icon="pi pi-check" label="Submit" />

<Button class="youtube p-0" aria-label="Youtube">
    <i class="pi pi-youtube px-2"></i>
    <span class="px-3">Youtube</span>
</Button>`}}}},I=n("h3",null,"Screen Reader",-1),N=n("p",null,[p(" Button component renders a native button element that implicitly includes any passed prop. Text to describe the button is defined with the "),n("i",null,"aria-label"),p(" prop, if not present "),n("i",null,"label"),p(" prop is used as the value. If the button is icon only or custom templating is used, it is recommended to use "),n("i",null,"aria-label"),p(" so that screen readers would be able to read the element properly. ")],-1),W=n("h3",null,"Keyboard Support",-1),H=n("div",{class:"doc-tablewrapper"},[n("table",{class:"doc-table"},[n("thead",null,[n("tr",null,[n("th",null,"Key"),n("th",null,"Function")])]),n("tbody",null,[n("tr",null,[n("td",null,[n("i",null,"tab")]),n("td",null,"Moves focus to the button.")]),n("tr",null,[n("td",null,[n("i",null,"enter")]),n("td",null,"Activates the button.")]),n("tr",null,[n("td",null,[n("i",null,"space")]),n("td",null,"Activates the button.")])])])],-1);function U(i,d,l,b,o,u){const a=h,t=v;return c(),x(t,$({id:"accessibility",label:"Accessibility"},i.$attrs),{default:y(()=>[I,N,e(a,$({code:o.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},i.$attrs),null,16,["code"]),W,H]),_:1},16)}const z=s(F,[["render",U]]),L={data(){return{code:{basic:`<Button type="button" label="Emails" badge="8" />
<Button type="button" label="Messages" icon="pi pi-users" badge="8" badgeClass="p-badge-danger" outlined />`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" badge="8" badgeClass="p-badge-danger" outlined />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" badge="8" badgeClass="p-badge-danger" outlined />
    </div>
</template>

<script setup>
<\/script>`}}}},R=n("p",null,[p("Buttons have built-in badge support with "),n("i",null,"badge"),p(" and "),n("i",null,"badgeClass"),p(" properties.")],-1),A={class:"card flex justify-content-center flex-wrap gap-3"};function O(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[R]),_:1},16),n("div",A,[e(t,{type:"button",label:"Emails",badge:"8"}),e(t,{type:"button",label:"Messages",icon:"pi pi-users",badge:"8",badgeClass:"p-badge-danger",outlined:""})]),e(r,{code:o.code},null,8,["code"])],64)}const V=s(L,[["render",O]]),E={data(){return{code:{basic:'<Button label="Submit" />',options:`<template>
    <div class="card flex justify-content-center">
        <Button label="Submit" />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button label="Submit" />
    </div>
</template>

<script setup>
<\/script>`}}}},M=n("p",null,[p("Text to display on a button is defined with the "),n("i",null,"label"),p(" property.")],-1),K={class:"card flex justify-content-center"};function Y(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[M]),_:1},16),n("div",K,[e(t,{label:"Submit"})]),e(r,{code:o.code},null,8,["code"])],64)}const q=s(E,[["render",Y]]),G={data(){return{code:{basic:`<span class="p-buttonset">
    <Button label="Save" icon="pi pi-check" />
    <Button label="Delete" icon="pi pi-trash" />
    <Button label="Cancel" icon="pi pi-times" />
</span>`,options:`<template>
    <div class="card flex justify-content-center">
        <span class="p-buttonset">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </span>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <span class="p-buttonset">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Delete" icon="pi pi-trash" />
            <Button label="Cancel" icon="pi pi-times" />
        </span>
    </div>
</template>

<script setup>
<\/script>`}}}},J=n("p",null,[p("Multiple buttons are grouped when wrapped inside an element with "),n("i",null,"p-buttonset"),p(" class.")],-1),Q={class:"card flex justify-content-center"},X={class:"p-buttonset"};function Z(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[J]),_:1},16),n("div",Q,[n("span",X,[e(t,{label:"Save",icon:"pi pi-check"}),e(t,{label:"Delete",icon:"pi pi-trash"}),e(t,{label:"Cancel",icon:"pi pi-times"})])]),e(r,{code:o.code},null,8,["code"])],64)}const ee=s(G,[["render",Z]]),te={data(){return{code:{basic:'<Button label="Submit" disabled />',options:`<template>
    <div class="card flex justify-content-center">
        <Button label="Submit" disabled />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button label="Submit" disabled />
    </div>
</template>

<script setup>
<\/script>`}}}},ne=n("p",null,[p("When "),n("i",null,"disabled"),p(" is present, the element cannot be edited and focused.")],-1),oe={class:"card flex justify-content-center"};function ie(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[ne]),_:1},16),n("div",oe,[e(t,{label:"Submit",disabled:""})]),e(r,{code:o.code},null,8,["code"])],64)}const ae=s(te,[["render",ie]]),re={data(){return{code:{basic:`<Button icon="pi pi-check" aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" aria-label="Search" />
<Button icon="pi pi-user" severity="info" aria-label="User" />
<Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" aria-label="Cancel" />

<Button icon="pi pi-check" rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" rounded aria-label="Search" />
<Button icon="pi pi-user" severity="info" rounded aria-label="User" />
<Button icon="pi pi-bell" severity="warning" rounded aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />

<Button icon="pi pi-check" rounded outlined aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" rounded outlined aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" rounded outlined aria-label="Search" />
<Button icon="pi pi-user" severity="info" rounded outlined aria-label="User" />
<Button icon="pi pi-bell" severity="warning" rounded outlined aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" rounded outlined aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" />

<Button icon="pi pi-check" text raised rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" text raised rounded aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" text raised rounded aria-label="Search" />
<Button icon="pi pi-user" severity="info" text raised rounded aria-label="User" />
<Button icon="pi pi-bell" severity="warning" text raised rounded aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" text raised rounded aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" />

<Button icon="pi pi-check" text rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" text rounded aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" text rounded aria-label="Search" />
<Button icon="pi pi-user" severity="info" text rounded aria-label="User" />
<Button icon="pi pi-bell" severity="warning" text rounded aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" text rounded aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" />`,options:`<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" aria-label="Search" />
            <Button icon="pi pi-user" severity="info" aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded outlined aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" rounded outlined aria-label="Search" />
            <Button icon="pi pi-user" severity="info" rounded outlined aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" rounded outlined aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" rounded outlined aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" text raised rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" text raised rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" text raised rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" text raised rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" text raised rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" text raised rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-check" text rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" text rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" text rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" text rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" text rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" text rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" />
        </div>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" aria-label="Search" />
            <Button icon="pi pi-user" severity="info" aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" rounded outlined aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" rounded outlined aria-label="Search" />
            <Button icon="pi pi-user" severity="info" rounded outlined aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" rounded outlined aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" rounded outlined aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3 mb-4">
            <Button icon="pi pi-check" text raised rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" text raised rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" text raised rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" text raised rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" text raised rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" text raised rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" />
        </div>

        <div class="flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-check" text rounded aria-label="Filter" />
            <Button icon="pi pi-bookmark" severity="secondary" text rounded aria-label="Bookmark" />
            <Button icon="pi pi-search" severity="success" text rounded aria-label="Search" />
            <Button icon="pi pi-user" severity="info" text rounded aria-label="User" />
            <Button icon="pi pi-bell" severity="warning" text rounded aria-label="Notification" />
            <Button icon="pi pi-heart" severity="help" text rounded aria-label="Favorite" />
            <Button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" />
        </div>
    </div>
</template>

<script setup>
<\/script>`}}}},le=n("p",null,"Buttons can have icons without labels.",-1),se={class:"card"},ce={class:"flex flex-wrap justify-content-center gap-3 mb-4"},de={class:"flex flex-wrap justify-content-center gap-3 mb-4"},pe={class:"flex flex-wrap justify-content-center gap-3 mb-4"},ue={class:"flex flex-wrap justify-content-center gap-3 mb-4"},be={class:"flex flex-wrap justify-content-center gap-3"};function ye(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[le]),_:1},16),n("div",se,[n("div",ce,[e(t,{icon:"pi pi-check","aria-label":"Filter"}),e(t,{icon:"pi pi-bookmark",severity:"secondary","aria-label":"Bookmark"}),e(t,{icon:"pi pi-search",severity:"success","aria-label":"Search"}),e(t,{icon:"pi pi-user",severity:"info","aria-label":"User"}),e(t,{icon:"pi pi-bell",severity:"warning","aria-label":"Notification"}),e(t,{icon:"pi pi-heart",severity:"help","aria-label":"Favorite"}),e(t,{icon:"pi pi-times",severity:"danger","aria-label":"Cancel"})]),n("div",de,[e(t,{icon:"pi pi-check",rounded:"","aria-label":"Filter"}),e(t,{icon:"pi pi-bookmark",severity:"secondary",rounded:"","aria-label":"Bookmark"}),e(t,{icon:"pi pi-search",severity:"success",rounded:"","aria-label":"Search"}),e(t,{icon:"pi pi-user",severity:"info",rounded:"","aria-label":"User"}),e(t,{icon:"pi pi-bell",severity:"warning",rounded:"","aria-label":"Notification"}),e(t,{icon:"pi pi-heart",severity:"help",rounded:"","aria-label":"Favorite"}),e(t,{icon:"pi pi-times",severity:"danger",rounded:"","aria-label":"Cancel"})]),n("div",pe,[e(t,{icon:"pi pi-check",rounded:"",outlined:"","aria-label":"Filter"}),e(t,{icon:"pi pi-bookmark",severity:"secondary",rounded:"",outlined:"","aria-label":"Bookmark"}),e(t,{icon:"pi pi-search",severity:"success",rounded:"",outlined:"","aria-label":"Search"}),e(t,{icon:"pi pi-user",severity:"info",rounded:"",outlined:"","aria-label":"User"}),e(t,{icon:"pi pi-bell",severity:"warning",rounded:"",outlined:"","aria-label":"Notification"}),e(t,{icon:"pi pi-heart",severity:"help",rounded:"",outlined:"","aria-label":"Favorite"}),e(t,{icon:"pi pi-times",severity:"danger",rounded:"",outlined:"","aria-label":"Cancel"})]),n("div",ue,[e(t,{icon:"pi pi-check",text:"",raised:"",rounded:"","aria-label":"Filter"}),e(t,{icon:"pi pi-bookmark",severity:"secondary",text:"",raised:"",rounded:"","aria-label":"Bookmark"}),e(t,{icon:"pi pi-search",severity:"success",text:"",raised:"",rounded:"","aria-label":"Search"}),e(t,{icon:"pi pi-user",severity:"info",text:"",raised:"",rounded:"","aria-label":"User"}),e(t,{icon:"pi pi-bell",severity:"warning",text:"",raised:"",rounded:"","aria-label":"Notification"}),e(t,{icon:"pi pi-heart",severity:"help",text:"",raised:"",rounded:"","aria-label":"Favorite"}),e(t,{icon:"pi pi-times",severity:"danger",text:"",raised:"",rounded:"","aria-label":"Cancel"})]),n("div",be,[e(t,{icon:"pi pi-check",text:"",rounded:"","aria-label":"Filter"}),e(t,{icon:"pi pi-bookmark",severity:"secondary",text:"",rounded:"","aria-label":"Bookmark"}),e(t,{icon:"pi pi-search",severity:"success",text:"",rounded:"","aria-label":"Search"}),e(t,{icon:"pi pi-user",severity:"info",text:"",rounded:"","aria-label":"User"}),e(t,{icon:"pi pi-bell",severity:"warning",text:"",rounded:"","aria-label":"Notification"}),e(t,{icon:"pi pi-heart",severity:"help",text:"",rounded:"","aria-label":"Favorite"}),e(t,{icon:"pi pi-times",severity:"danger",text:"",rounded:"","aria-label":"Cancel"})])]),e(r,{code:o.code},null,8,["code"])],64)}const ve=s(re,[["render",ye]]),me={data(){return{code:{basic:`<Button icon="pi pi-check" aria-label="Submit" />
<Button label="Submit" icon="pi pi-check" />
<Button label="Submit" icon="pi pi-check" iconPos="right" />`,options:`<template>
    <div class="card flex flex-wrap gap-3  justify-content-center">
        <Button icon="pi pi-check" aria-label="Submit" />
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" iconPos="right" />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap gap-3  justify-content-center">
        <Button icon="pi pi-check" aria-label="Submit" />
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" iconPos="right" />
    </div>s
</template>

<script setup>
<\/script>`}}}},ge=n("p",null,[p("Icon of a button is specified with "),n("i",null,"icon"),p(" property and position is configured using "),n("i",null,"iconPos"),p(" attribute.")],-1),_e={class:"card flex flex-wrap gap-3 justify-content-center"};function fe(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[ge]),_:1},16),n("div",_e,[e(t,{icon:"pi pi-check","aria-label":"Submit"}),e(t,{label:"Submit",icon:"pi pi-check"}),e(t,{label:"Submit",icon:"pi pi-check",iconPos:"right"})]),e(r,{code:o.code},null,8,["code"])],64)}const he=s(me,[["render",fe]]),Be={data(){return{code:{basic:"import Button from 'primevue/button';"}}}};function xe(i,d,l,b,o,u){const a=v,t=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),null,16),e(t,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const $e=s(Be,[["render",xe]]),Se={data(){return{code:{basic:'<Button label="Link" link />',options:`<template>
    <div class="card flex justify-content-center">
        <Button label="Link" link />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button label="Link" link />
    </div>
</template>

<script setup>
<\/script>`}}}},ke=n("p",null,"A button can be rendered as a link as well.",-1),we={class:"card flex justify-content-center"};function De(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[ke]),_:1},16),n("div",we,[e(t,{label:"Link",link:""})]),e(r,{code:o.code},null,8,["code"])],64)}const je=s(Se,[["render",De]]),Ce={data(){return{loading:!1,code:{basic:'<Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load" />',options:`<template>
    <div class="card flex justify-content-center">
        <Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false
        };
    },
    methods: {
        load() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="load" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};
<\/script>`}}},methods:{load(){this.loading=!0,setTimeout(()=>{this.loading=!1},2e3)}}},Te=n("p",null,[p("Busy state is controlled with the "),n("i",null,"loading"),p(" property.")],-1),Pe={class:"card flex justify-content-center"};function Fe(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[Te]),_:1},16),n("div",Pe,[e(t,{type:"button",label:"Search",icon:"pi pi-check",loading:o.loading,onClick:u.load},null,8,["loading","onClick"])]),e(r,{code:o.code},null,8,["code"])],64)}const Ie=s(Ce,[["render",Fe]]),Ne={data(){return{code:{basic:`<Button label="Primary" outlined />
<Button label="Secondary" severity="secondary" outlined />
<Button label="Success" severity="success" outlined />
<Button label="Info" severity="info" outlined />
<Button label="Warning" severity="warning" outlined />
<Button label="Help" severity="help" outlined />
<Button label="Danger" severity="danger" outlined />`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" outlined />
        <Button label="Secondary" severity="secondary" outlined />
        <Button label="Success" severity="success" outlined />
        <Button label="Info" severity="info" outlined />
        <Button label="Warning" severity="warning" outlined />
        <Button label="Help" severity="help" outlined />
        <Button label="Danger" severity="danger" outlined />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" outlined />
        <Button label="Secondary" severity="secondary" outlined />
        <Button label="Success" severity="success" outlined />
        <Button label="Info" severity="info" outlined />
        <Button label="Warning" severity="warning" outlined />
        <Button label="Help" severity="help" outlined />
        <Button label="Danger" severity="danger" outlined />
    </div>
</template>

<script setup>
<\/script>`}}}},We=n("p",null,"Outlined buttons display a border without a background initially.",-1),He={class:"card flex justify-content-center flex-wrap gap-3"};function Ue(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[We]),_:1},16),n("div",He,[e(t,{label:"Primary",outlined:""}),e(t,{label:"Secondary",severity:"secondary",outlined:""}),e(t,{label:"Success",severity:"success",outlined:""}),e(t,{label:"Info",severity:"info",outlined:""}),e(t,{label:"Warning",severity:"warning",outlined:""}),e(t,{label:"Help",severity:"help",outlined:""}),e(t,{label:"Danger",severity:"danger",outlined:""})]),e(r,{code:o.code},null,8,["code"])],64)}const ze=s(Ne,[["render",Ue]]),Le={data(){return{code:{basic:`<Button label="Primary" raised />
<Button label="Secondary" severity="secondary" raised />
<Button label="Success" severity="success" raised />
<Button label="Info" severity="info" raised />
<Button label="Warning" severity="warning" raised />
<Button label="Help" severity="help" raised />
<Button label="Danger" severity="danger" raised />`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" raised />
        <Button label="Secondary" severity="secondary" raised />
        <Button label="Success" severity="success" raised />
        <Button label="Info" severity="info" raised />
        <Button label="Warning" severity="warning" raised />
        <Button label="Help" severity="help" raised />
        <Button label="Danger" severity="danger" raised />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" raised />
        <Button label="Secondary" severity="secondary" raised />
        <Button label="Success" severity="success" raised />
        <Button label="Info" severity="info" raised />
        <Button label="Warning" severity="warning" raised />
        <Button label="Help" severity="help" raised />
        <Button label="Danger" severity="danger" raised />
    </div>
</template>

<script setup>
<\/script>`}}}},Re=n("p",null,"Raised buttons display a shadow to indicate elevation.",-1),Ae={class:"card flex justify-content-center flex-wrap gap-3"};function Oe(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[Re]),_:1},16),n("div",Ae,[e(t,{label:"Primary",raised:""}),e(t,{label:"Secondary",severity:"secondary",raised:""}),e(t,{label:"Success",severity:"success",raised:""}),e(t,{label:"Info",severity:"info",raised:""}),e(t,{label:"Warning",severity:"warning",raised:""}),e(t,{label:"Help",severity:"help",raised:""}),e(t,{label:"Danger",severity:"danger",raised:""})]),e(r,{code:o.code},null,8,["code"])],64)}const Ve=s(Le,[["render",Oe]]),Ee={data(){return{code:{basic:`<Button label="Primary" text raised />
<Button label="Secondary" severity="secondary" text raised />
<Button label="Success" severity="success" text raised />
<Button label="Info" severity="info" text raised />
<Button label="Warning" severity="warning" text raised />
<Button label="Help" severity="help" text raised />
<Button label="Danger" severity="danger" text raised />
<Button label="Plain" plain text raised />`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" text raised />
        <Button label="Secondary" severity="secondary" text raised />
        <Button label="Success" severity="success" text raised />
        <Button label="Info" severity="info" text raised />
        <Button label="Warning" severity="warning" text raised />
        <Button label="Help" severity="help" text raised />
        <Button label="Danger" severity="danger" text raised />
        <Button label="Plain" plain text raised />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" text raised />
        <Button label="Secondary" severity="secondary" text raised />
        <Button label="Success" severity="success" text raised />
        <Button label="Info" severity="info" text raised />
        <Button label="Warning" severity="warning" text raised />
        <Button label="Help" severity="help" text raised />
        <Button label="Danger" severity="danger" text raised />
        <Button label="Plain" plain text raised />
    </div>
</template>

<script setup>
<\/script>`}}}},Me=n("p",null,"Text buttons can be displayed as raised as well for elevation.",-1),Ke={class:"card flex justify-content-center flex-wrap gap-3"};function Ye(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[Me]),_:1},16),n("div",Ke,[e(t,{label:"Primary",text:"",raised:""}),e(t,{label:"Secondary",severity:"secondary",text:"",raised:""}),e(t,{label:"Success",severity:"success",text:"",raised:""}),e(t,{label:"Info",severity:"info",text:"",raised:""}),e(t,{label:"Warning",severity:"warning",text:"",raised:""}),e(t,{label:"Help",severity:"help",text:"",raised:""}),e(t,{label:"Danger",severity:"danger",text:"",raised:""}),e(t,{label:"Plain",plain:"",text:"",raised:""})]),e(r,{code:o.code},null,8,["code"])],64)}const qe=s(Ee,[["render",Ye]]),Ge={data(){return{code:{basic:`<Button label="Primary" rounded />
<Button label="Secondary" severity="secondary" rounded />
<Button label="Success" severity="success" rounded />
<Button label="Info" severity="info" rounded />
<Button label="Warning" severity="warning" rounded />
<Button label="Help" severity="help" rounded />
<Button label="Danger" severity="danger" rounded />`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" rounded />
        <Button label="Secondary" severity="secondary" rounded />
        <Button label="Success" severity="success" rounded />
        <Button label="Info" severity="info" rounded />
        <Button label="Warning" severity="warning" rounded />
        <Button label="Help" severity="help" rounded />
        <Button label="Danger" severity="danger" rounded />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" rounded />
        <Button label="Secondary" severity="secondary" rounded />
        <Button label="Success" severity="success" rounded />
        <Button label="Info" severity="info" rounded />
        <Button label="Warning" severity="warning" rounded />
        <Button label="Help" severity="help" rounded />
        <Button label="Danger" severity="danger" rounded />
    </div>
</template>

<script setup>
<\/script>`}}}},Je=n("p",null,"Rounded buttons have a circular border radius.",-1),Qe={class:"card flex justify-content-center flex-wrap gap-3"};function Xe(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[Je]),_:1},16),n("div",Qe,[e(t,{label:"Primary",rounded:""}),e(t,{label:"Secondary",severity:"secondary",rounded:""}),e(t,{label:"Success",severity:"success",rounded:""}),e(t,{label:"Info",severity:"info",rounded:""}),e(t,{label:"Warning",severity:"warning",rounded:""}),e(t,{label:"Help",severity:"help",rounded:""}),e(t,{label:"Danger",severity:"danger",rounded:""})]),e(r,{code:o.code},null,8,["code"])],64)}const Ze=s(Ge,[["render",Xe]]),et={data(){return{code:{basic:`<Button label="Primary" />
<Button label="Secondary" severity="secondary" />
<Button label="Success" severity="success" />
<Button label="Info" severity="info" />
<Button label="Warning" severity="warning" />
<Button label="Help" severity="help" />
<Button label="Danger" severity="danger" />`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
    </div>
</template>

<script setup>
<\/script>`}}}},tt=n("p",null,"Severity defines the type of button.",-1),nt={class:"card flex justify-content-center flex-wrap gap-3"};function ot(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[tt]),_:1},16),n("div",nt,[e(t,{label:"Primary"}),e(t,{label:"Secondary",severity:"secondary"}),e(t,{label:"Success",severity:"success"}),e(t,{label:"Info",severity:"info"}),e(t,{label:"Warning",severity:"warning"}),e(t,{label:"Help",severity:"help"}),e(t,{label:"Danger",severity:"danger"})]),e(r,{code:o.code},null,8,["code"])],64)}const it=s(et,[["render",ot]]),at={data(){return{code:{basic:`<Button label="Small" icon="pi pi-check" size="small" />
<Button label="Normal" icon="pi pi-check" />
<Button label="Large" icon="pi pi-check" size="large" />`,options:`<template>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
        <Button label="Small" icon="pi pi-check" size="small" />
        <Button label="Normal" icon="pi pi-check" />
        <Button label="Large" icon="pi pi-check" size="large" />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap align-items-center justify-content-center gap-3">
        <Button label="Small" icon="pi pi-check" size="small" />
        <Button label="Normal" icon="pi pi-check" />
        <Button label="Large" icon="pi pi-check" size="large" />
    </div>
</template>

<script setup>
<\/script>`}}}},rt=n("p",null,[p("Button provides "),n("i",null,"small"),p(" and "),n("i",null,"large"),p(" sizes as alternatives to the standard.")],-1),lt={class:"card flex flex-wrap align-items-center justify-content-center gap-3"};function st(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[rt]),_:1},16),n("div",lt,[e(t,{label:"Small",icon:"pi pi-check",size:"small"}),e(t,{label:"Normal",icon:"pi pi-check"}),e(t,{label:"Large",icon:"pi pi-check",size:"large"})]),e(r,{code:o.code},null,8,["code"])],64)}const ct=s(at,[["render",st]]),dt={data(){return{code:{basic:`<Button class="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
    <img alt="logo" src="/images/logo.svg" class="h-2rem" />
</Button>`,options:`<template>
    <div class="card flex justify-content-center">
        <Button class="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/primevue-logo-light.svg" class="h-2rem" />
        </Button>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button class="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/primevue-logo-light.svg" class="h-2rem" />
        </Button>
    </div>
</template>

<script setup>
<\/script>`}}}},pt=n("p",null,"Custom content inside a button is defined as children.",-1),ut={class:"card flex justify-content-center"},bt=n("img",{alt:"logo",src:"https://primefaces.org/cdn/primevue/images/primevue-logo-light.svg",class:"h-2rem"},null,-1);function yt(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[pt]),_:1},16),n("div",ut,[e(t,{class:"bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700"},{default:y(()=>[bt]),_:1})]),e(r,{code:o.code},null,8,["code"])],64)}const vt=s(dt,[["render",yt]]),mt={data(){return{code:{basic:`<Button label="Primary" text />
<Button label="Secondary" severity="secondary" text />
<Button label="Success" severity="success" text />
<Button label="Info" severity="info" text />
<Button label="Warning" severity="warning" text />
<Button label="Help" severity="help" text />
<Button label="Danger" severity="danger" text />
<Button label="Plain" plain text />`,options:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" text />
        <Button label="Secondary" severity="secondary" text />
        <Button label="Success" severity="success" text />
        <Button label="Info" severity="info" text />
        <Button label="Warning" severity="warning" text />
        <Button label="Help" severity="help" text />
        <Button label="Danger" severity="danger" text />
        <Button label="Plain" plain text />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Primary" text />
        <Button label="Secondary" severity="secondary" text />
        <Button label="Success" severity="success" text />
        <Button label="Info" severity="info" text />
        <Button label="Warning" severity="warning" text />
        <Button label="Help" severity="help" text />
        <Button label="Danger" severity="danger" text />
        <Button label="Plain" plain text />
    </div>
</template>

<script setup>
<\/script>`}}}},gt=n("p",null,"Text buttons are displayed as textual elements.",-1),_t={class:"card flex justify-content-center flex-wrap gap-3"};function ft(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),{default:y(()=>[gt]),_:1},16),n("div",_t,[e(t,{label:"Primary",text:""}),e(t,{label:"Secondary",severity:"secondary",text:""}),e(t,{label:"Success",severity:"success",text:""}),e(t,{label:"Info",severity:"info",text:""}),e(t,{label:"Warning",severity:"warning",text:""}),e(t,{label:"Help",severity:"help",text:""}),e(t,{label:"Danger",severity:"danger",text:""}),e(t,{label:"Plain",plain:"",text:""})]),e(r,{code:o.code},null,8,["code"])],64)}const ht=s(mt,[["render",ft]]),Bt={data(){return{code:{basic:`<Button label="Submit" icon="pi pi-check"
    :pt="{ 
        root: { class: 'bg-indigo-600 border-indigo-600' } 
    }"
/>`,options:`<template>
    <div class="card flex flex-wrap gap-3 justify-content-center">
        <Button label="Submit" icon="pi pi-check"
            :pt="{ 
                root: { class: 'bg-indigo-600 border-indigo-600' } 
            }"
        />
    </div>
</template>`,composition:`<template>
    <div class="card flex flex-wrap gap-3 justify-content-center">
        <Button label="Submit" icon="pi pi-check"
            :pt="{ 
                root: { class: 'bg-indigo-600 border-indigo-600' } 
            }"
        />
    </div>
</template>`}}}},xt={class:"card flex flex-wrap gap-3 justify-content-center"};function $t(i,d,l,b,o,u){const a=v,t=B("Button"),r=h;return c(),m(g,null,[e(a,_(f(i.$attrs)),null,16),n("div",xt,[e(t,{label:"Submit",icon:"pi pi-check",pt:{root:{class:"bg-indigo-600 border-indigo-600"}}})]),e(r,{code:o.code},null,8,["code"])],64)}const St=s(Bt,[["render",$t]]),kt={},wt=n("div",{class:"card"},[n("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/button.jpg"})],-1);function Dt(i,d){const l=v;return c(),m(g,null,[e(l,_(f(i.$attrs)),{default:y(()=>[n("p",null,w(i.$attrs.description),1)]),_:1},16),wt],64)}const jt=s(kt,[["render",Dt]]),Ct={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:jt},{id:"pt.doc.button",label:"Button PT Options",component:D,data:T("Button")},{id:"pt.demo",label:"Demo",component:St}]}}},Tt={class:"doc-main"},Pt=n("div",{class:"doc-intro"},[n("h1",null,"Button Pass Through")],-1);function Ft(i,d,l,b,o,u){const a=S,t=k;return c(),m(g,null,[n("div",Tt,[Pt,e(a,{docs:o.docs},null,8,["docs"])]),e(t,{docs:o.docs},null,8,["docs"])],64)}const It=s(Ct,[["render",Ft]]),Nt={},Wt=n("p",null,"List of class names used in the styled mode.",-1),Ht=j('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-button</td><td>Button element</td></tr><tr><td>p-button-icon</td><td>Icon element</td></tr><tr><td>p-button-label</td><td>Label element of the button</td></tr><tr><td>p-button-sm</td><td>Smaller button element</td></tr><tr><td>p-button-lg</td><td>Larger button element</td></tr></tbody></table></div>',1);function Ut(i,d){const l=v;return c(),m(g,null,[e(l,_(f(i.$attrs)),{default:y(()=>[Wt]),_:1},16),Ht],64)}const zt=s(Nt,[["render",Ut]]),Lt={data(){return{code1:{basic:`
export default {
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
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center flex-wrap gap-3">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
    </div>
</template>`}}}},Rt=n("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function At(i,d,l,b,o,u){const a=P,t=h,r=v;return c(),x(r,_(f(i.$attrs)),{default:y(()=>[n("p",null,[p(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),e(a,{to:"/tailwind"},{default:y(()=>[p("Tailwind Customization")]),_:1}),p(" section for an example. ")]),e(t,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Rt,e(t,{code:o.code2,embedded:""},null,8,["code"])]),_:1},16)}const Ot=s(Lt,[["render",At]]),Vt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:zt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Ot}]}]}}},Et={class:"doc-main"},Mt=n("div",{class:"doc-intro"},[n("h1",null,"Button Theming")],-1);function Kt(i,d,l,b,o,u){const a=S,t=k;return c(),m(g,null,[n("div",Et,[Mt,e(a,{docs:o.docs},null,8,["docs"])]),e(t,{docs:o.docs},null,8,["docs"])],64)}const Yt=s(Vt,[["render",Kt]]),qt={data(){return{docs:[{id:"import",label:"Import",component:$e},{id:"basic",label:"Basic",component:q},{id:"link",label:"Link",component:je},{id:"icons",label:"Icons",component:he},{id:"loading",label:"Loading",component:Ie},{id:"severity",label:"Severity",component:it},{id:"disabled",label:"Disabled",component:ae},{id:"raised",label:"Raised",component:Ve},{id:"rounded",label:"Rounded",component:Ze},{id:"text",label:"Text",component:ht},{id:"raisedtext",label:"Raised Text",component:qe},{id:"outlined",label:"Outlined",component:ze},{id:"icononly",label:"Icon Only",component:ve},{id:"badges",label:"Badges",component:V},{id:"buttonset",label:"Button Set",component:ee},{id:"sizes",label:"Sizes",component:ct},{id:"template",label:"Template",component:vt},{id:"accessibility",label:"Accessibility",component:z}],ptComponent:It,themingDoc:Yt}}};function Gt(i,d,l,b,o,u){const a=C;return c(),x(a,{title:"Vue Button Component",header:"Button",description:"Button is an extension to standard input element with icons and theming.",componentDocs:o.docs,apiDocs:["Button"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Zt=s(qt,[["render",Gt]]);export{Zt as default};
