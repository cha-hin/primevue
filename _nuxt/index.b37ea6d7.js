import{_ as m,o as r,e as C,w as u,m as D,b as e,f as i,h,j as y,c as b,a as o,n as l,g as d,F as f,p as $,t as T,E as A,A as S,D as j,k as N,l as I,v as V,x as z}from"./entry.68beb385.js";import{g as L}from"./PTHelper.11558b27.js";import{_ as R}from"./PrimeVueNuxtLink.f51d0c80.js";const q={},E=e("h3",null,"Screen Reader",-1),F=e("p",null,[i(" Breadcrumb uses the "),e("i",null,"nav"),i(" element and since any attribute is passed to the root implicitly "),e("i",null,"aria-labelledby"),i(" or "),e("i",null,"aria-label"),i(" can be used to describe the component. Inside an ordered list is used where the list item separators have "),e("i",null,"aria-hidden"),i(" to be able to ignored by the screen readers. If the last link represents the current route, "),e("i",null,"aria-current"),i(' is added with "page" as the value. ')],-1),O=e("h3",null,"Keyboard Support",-1),M=e("p",null,"No special keyboard interaction is needed, all menuitems are focusable based on the page tab sequence.",-1);function H(n,p){const a=h;return r(),C(a,D({id:"accessibility",label:"Accessibility"},n.$attrs),{default:u(()=>[E,F,O,M]),_:1},16)}const K=m(q,[["render",H]]),U={data(){return{home:{icon:"pi pi-home",to:"/"},items:[{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}],code:{basic:'<Breadcrumb :home="home" :model="items" />',options:`<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home',
                to: '/',
            },
            items: [
                {label: 'Computer'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home',
    to: '/',
});
const items = ref([
    {label: 'Computer'},
    {label: 'Notebook'},
    {label: 'Accessories'},
    {label: 'Backpacks'},
    {label: 'Item'}
]);
<\/script>`}}}},W=e("p",null,[i("Breadcrumb requires a collection of menuitems as its "),e("i",null,"model"),i(".")],-1),G={class:"card flex justify-content-center"};function J(n,p,a,v,t,g){const c=h,s=y("Breadcrumb"),_=$;return r(),b(f,null,[o(c,l(d(n.$attrs)),{default:u(()=>[W]),_:1},16),e("div",G,[o(s,{home:t.home,model:t.items},null,8,["home","model"])]),o(_,{code:t.code},null,8,["code"])],64)}const Q=m(U,[["render",J]]),X={data(){return{code:{basic:"import Breadcrumb from 'primevue/breadcrumb';"}}}};function Y(n,p,a,v,t,g){const c=h,s=$;return r(),b(f,null,[o(c,l(d(n.$attrs)),null,16),o(s,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Z=m(X,[["render",Y]]),ee={data(){return{home:{icon:"pi pi-home",route:"/"},items:[{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}],code:{basic:`<Breadcrumb :home="home" :model="items">
    <template #item="{ label, item, props }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-if="item.icon" v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
        </a>
    </template>
</Breadcrumb>`,options:`<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-if="item.icon" v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </Breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home',
                route: '/'
            },
            items: [
                {label: 'Computer'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-if="item.icon" v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </Breadcrumb>
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home',
    route: '/'
});
const items = ref([
    {label: 'Computer'},
    {label: 'Notebook'},
    {label: 'Accessories'},
    {label: 'Backpacks'},
    {label: 'Item'}
]);
<\/script>`}}}},te=e("p",null,[i(" Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as "),e("i",null,"NuxtLink"),i(" or "),e("i",null,"router-link"),i(". Here is an example with vue-router. ")],-1),oe={class:"card flex justify-content-center"},ne=["href"],ce=["href","target"];function se(n,p,a,v,t,g){const c=h,s=y("router-link"),_=y("Breadcrumb"),k=$;return r(),b(f,null,[o(c,l(d(n.$attrs)),{default:u(()=>[te]),_:1},16),e("div",oe,[o(_,{home:t.home,model:t.items},{item:u(({label:w,item:B,props:x})=>[B.route?(r(),C(s,{key:0,to:B.route,custom:""},{default:u(P=>[e("a",D({href:P.href},x.action),[e("span",l(d(x.icon)),null,16),e("span",l(d(x.label)),T(w),17)],16,ne)]),_:2},1032,["to"])):(r(),b("a",D({key:1,href:B.url,target:B.target},x.action),[B.icon?(r(),b("span",l(D({key:0},x.icon)),null,16)):A("",!0),e("span",l(d(x.label)),T(w),17)],16,ce))]),_:1},8,["home","model"])]),o(k,{code:t.code},null,8,["code"])],64)}const ie=m(ee,[["render",se]]),re={data(){return{home:{icon:"pi pi-home",url:"https://primevue.org/"},items:[{icon:"pi pi-sitemap"},{icon:"pi pi-book"},{icon:"pi pi-wallet"},{icon:"pi pi-shopping-bag"},{icon:"pi pi-calculator"}],code:{basic:`<Breadcrumb :home="home" :model="items">
    <template #item="item">
        <a :class="item.class">
            <span :class="item.icon"></span>
        </a>
    </template>
</Breadcrumb>`,options:`<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{item}">
                <a :class="item.class">
                    <span :class="item.icon"></span>
                </a>
            </template>
        </Breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: { icon: 'pi pi-home', url: 'https://primevue.org/' },
            items: [{ icon: 'pi pi-sitemap' }, { icon: 'pi pi-book' }, { icon: 'pi pi-wallet' }, { icon: 'pi pi-shopping-bag' }, { icon: 'pi pi-calculator' }]
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items">
            <template #item="{item}">
                <a :class="item.class">
                    <span :class="item.icon"></span>
                </a>
            </template>
        </Breadcrumb>
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({ icon: 'pi pi-home', url: 'https://primevue.org/' });
const items = ref([{ icon: 'pi pi-sitemap' }, { icon: 'pi pi-book' }, { icon: 'pi pi-wallet' }, { icon: 'pi pi-shopping-bag' }, { icon: 'pi pi-calculator' }]);
}
<\/script>`}}}},ae=e("p",null,[i("Custom content can be placed inside the menuitem using the "),e("i",null,"item"),i(" templating.")],-1),le={class:"card flex justify-content-center"},me=["href"];function pe(n,p,a,v,t,g){const c=h,s=y("Breadcrumb"),_=$;return r(),b(f,null,[o(c,l(d(n.$attrs)),{default:u(()=>[ae]),_:1},16),e("div",le,[o(s,{home:t.home,model:t.items},{item:u(({item:k})=>[e("a",{class:S(k.class),href:k.url},[e("span",{class:S(k.icon)},null,2)],10,me)]),_:1},8,["home","model"])]),o(_,{code:t.code},null,8,["code"])],64)}const de=m(re,[["render",pe]]),ue={data(){return{home:{icon:"pi pi-home",to:"/"},items:[{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}],code:{basic:`<Breadcrumb :home="home" :model="items"
    :pt="{
        root: { class: 'surface-ground' },
        label: ({ props }) => ({
            class: props.index === items.length - 1 ? 'font-italic' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items"
            :pt="{
                root: { class: 'surface-ground' },
                label: ({ props }) => ({
                    class: props.index === items.length - 1 ? 'font-italic' : undefined
                })
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            home: {
                icon: 'pi pi-home',
                to: '/',
            },
            items: [
                {label: 'Computer'},
                {label: 'Notebook'},
                {label: 'Accessories'},
                {label: 'Backpacks'},
                {label: 'Item'}
            ]
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Breadcrumb :home="home" :model="items"
            :pt="{
                root: { class: 'surface-ground' },
                label: ({ props }) => ({
                    class: props.index === items.length - 1 ? 'font-italic' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home',
    to: '/',
});

const items = ref([
    {label: 'Computer'},
    {label: 'Notebook'},
    {label: 'Accessories'},
    {label: 'Backpacks'},
    {label: 'Item'}
]);
<\/script>`}}}},be={class:"card flex justify-content-center"};function _e(n,p,a,v,t,g){const c=h,s=y("Breadcrumb"),_=$;return r(),b(f,null,[o(c,l(d(n.$attrs)),null,16),e("div",be,[o(s,{home:t.home,model:t.items,pt:{root:{class:"surface-ground"},label:({props:k})=>({class:k.index===t.items.length-1?"font-italic":void 0})}},null,8,["home","model","pt"])]),o(_,{code:t.code},null,8,["code"])],64)}const he=m(ue,[["render",_e]]),fe={},ve=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/breadcrumb.jpg"})],-1);function ge(n,p){const a=h;return r(),b(f,null,[o(a,l(d(n.$attrs)),{default:u(()=>[e("p",null,T(n.$attrs.description),1)]),_:1},16),ve],64)}const ke=m(fe,[["render",ge]]),xe={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ke},{id:"pt.doc.breadcrumb",label:"Breadcrumb PT Options",component:j,data:L("Breadcrumb")},{id:"pt.demo",label:"Demo",component:he}]}}},$e={class:"doc-main"},Be=e("div",{class:"doc-intro"},[e("h1",null,"Breadcrumb Pass Through")],-1);function ye(n,p,a,v,t,g){const c=N,s=I;return r(),b(f,null,[e("div",$e,[Be,o(c,{docs:t.docs},null,8,["docs"])]),o(s,{docs:t.docs},null,8,["docs"])],64)}const De=m(xe,[["render",ye]]),Ce={},Te=e("p",null,"List of class names used in the styled mode.",-1),we=V('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-breadcrumb</td><td>Container element.</td></tr><tr><td>p-breadcrumb-list</td><td>Ordered list element.</td></tr><tr><td>p-breadcrumb-home</td><td>First list element.</td></tr><tr><td>p-menuitem</td><td>Menuitem element.</td></tr><tr><td>p-menuitem-link</td><td>Link element of the menuitem.</td></tr><tr><td>p-menuitem-text</td><td>Label of a menuitem.</td></tr><tr><td>p-menuitem-icon</td><td>Icon of a menuitem.</td></tr></tbody></table></div>',1);function Se(n,p){const a=h;return r(),b(f,null,[o(a,l(d(n.$attrs)),{default:u(()=>[Te]),_:1},16),we],64)}const Ne=m(Ce,[["render",Se]]),Ie={data(){return{code1:{basic:`
export default {
    breadcrumb: {
        root: {
            class: ['overflow-x-auto', 'bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 rounded-md p-4']
        },
        menu: 'm-0 p-0 list-none flex items-center flex-nowrap',
        action: {
            class: [
                'text-decoration-none flex items-center',
                'transition-shadow duration-200 rounded-md text-gray-600 dark:text-white/70',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        icon: 'text-gray-600 dark:text-white/70',
        separator: {
            class: ['mx-2 text-gray-600 dark:text-white/70', 'flex items-center']
        }
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Breadcrumb :home="home" :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const home = ref({
    icon: 'pi pi-home',
    to: '/',
});
const items = ref([
    {label: 'Computer'},
    {label: 'Notebook'},
    {label: 'Accessories'},
    {label: 'Backpacks'},
    {label: 'Item'}
]);
<\/script>`}}}},Pe=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ae(n,p,a,v,t,g){const c=R,s=$,_=h;return r(),C(_,l(d(n.$attrs)),{default:u(()=>[e("p",null,[i(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(c,{to:"/tailwind"},{default:u(()=>[i("Tailwind Customization")]),_:1}),i(" section for an example. ")]),o(s,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Pe,o(s,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const je=m(Ie,[["render",Ae]]),Ve={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ne},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:je}]}]}}},ze={class:"doc-main"},Le=e("div",{class:"doc-intro"},[e("h1",null,"Breadcrumb Theming")],-1);function Re(n,p,a,v,t,g){const c=N,s=I;return r(),b(f,null,[e("div",ze,[Le,o(c,{docs:t.docs},null,8,["docs"])]),o(s,{docs:t.docs},null,8,["docs"])],64)}const qe=m(Ve,[["render",Re]]),Ee={data(){return{docs:[{id:"import",label:"Import",component:Z},{id:"basic",label:"Basic",component:Q},{id:"template",label:"Template",component:de},{id:"router",label:"Router",component:ie},{id:"accessibility",label:"Accessibility",component:K}],ptComponent:De,themingDoc:qe}}};function Fe(n,p,a,v,t,g){const c=z;return r(),C(c,{title:"Vue Breadcrumb Component",header:"Breadcrumb",description:"Breadcrumb provides contextual information about page hierarchy.",componentDocs:t.docs,apiDocs:["Breadcrumb","MenuItem"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ke=m(Ee,[["render",Fe]]);export{Ke as default};
