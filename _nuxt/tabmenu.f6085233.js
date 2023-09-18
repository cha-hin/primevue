import{_ as s,j as x,o as p,c as b,a as n,n as d,g as u,b as e,F as v,h as f,p as $,w as m,t as I,D as H,k as P,l as N,v as B,e as T,f as i,m as E,I as A,E as R,x as V}from"./entry.68beb385.js";import{g as F}from"./PTHelper.11558b27.js";import{_ as U}from"./PrimeVueNuxtLink.f51d0c80.js";const K={data(){return{items:[{label:"Home",icon:"pi pi-fw pi-home"},{label:"Calendar",icon:"pi pi-fw pi-calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil"},{label:"Documentation",icon:"pi pi-fw pi-file"},{label:"Settings",icon:"pi pi-fw pi-cog"}],code:{basic:`<TabMenu
    :model="items"
    :pt="{
        action: ({ props, state, context }) => ({
            class: context.order === state.d_activeIndex ? 'bg-primary' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card">
        <TabMenu
            :model="items"
            :pt="{
                action: ({ props, state, context }) => ({
                    class: context.order === state.d_activeIndex ? 'bg-primary' : undefined
                })
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home'
                },
                {
                    label: 'Calendar',
                    icon: 'pi pi-fw pi-calendar'
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil'
                },
                {
                    label: 'Documentation',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog'
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <TabMenu
            :model="items"
            :pt="{
                action: ({ props, state, context }) => ({
                    class: context.order === state.d_activeIndex ? 'bg-primary' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home'
    },
    {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog'
    }
]);
<\/script>`}}}},L={class:"card"};function z(o,a,c,h,t,_){const l=f,r=x("TabMenu"),w=$;return p(),b(v,null,[n(l,d(u(o.$attrs)),null,16),e("div",L,[n(r,{model:t.items,pt:{action:({props:D,state:g,context:C})=>({class:C.order===g.d_activeIndex?"bg-primary":void 0})}},null,8,["model","pt"])]),n(w,{code:t.code},null,8,["code"])],64)}const q=s(K,[["render",z]]),j={},O=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/tabmenu.jpg"})],-1);function W(o,a){const c=f;return p(),b(v,null,[n(c,d(u(o.$attrs)),{default:m(()=>[e("p",null,I(o.$attrs.description),1)]),_:1},16),O],64)}const G=s(j,[["render",W]]),J={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:G},{id:"pt.doc.tabmenu",label:"TabMenu PT Options",component:H,data:F("TabMenu")},{id:"pt.demo",label:"Demo",component:q}]}}},Q={class:"doc-main"},X=e("div",{class:"doc-intro"},[e("h1",null,"TabMenu Pass Through")],-1);function Y(o,a,c,h,t,_){const l=P,r=N;return p(),b(v,null,[e("div",Q,[X,n(l,{docs:t.docs},null,8,["docs"])]),n(r,{docs:t.docs},null,8,["docs"])],64)}const Z=s(J,[["render",Y]]),ee={},te=e("p",null,"List of class names used in the styled mode.",-1),oe=B('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-tabmenu</td><td>Container element.</td></tr><tr><td>p-tabmenu-nav</td><td>List element.</td></tr><tr><td>p-tabmenuitem</td><td>Menuitem element.</td></tr><tr><td>p-menuitem-link</td><td>Link element of the menuitem.</td></tr><tr><td>p-menuitem-icon</td><td>Icon of a menuitem.</td></tr><tr><td>p-menuitem-text</td><td>Text of a menuitem.</td></tr></tbody></table></div>',1);function ne(o,a){const c=f;return p(),b(v,null,[n(c,d(u(o.$attrs)),{default:m(()=>[te]),_:1},16),oe],64)}const ie=s(ee,[["render",ne]]),ae={data(){return{code1:{basic:`
export default {
    tabmenu: {
        root: 'overflow-x-auto',
        menu: {
            class: ['flex m-0 p-0 list-none flex-nowrap', 'bg-white border-solid border-gray-300 border-b-2', 'outline-none no-underline text-base list-none']
        },
        menuitem: 'mr-0',
        action: ({ context, state }) => ({
            class: [
                'cursor-pointer select-none flex items-center relative no-underline overflow-hidden',
                'border-b-2 p-5 font-bold rounded-t-lg ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80': state.d_activeIndex !== context.index, // Condition-based hover styles.
                    'bg-white border-blue-500 text-blue-500 dark:bg-gray-900 dark:border-blue-300 dark:text-blue-300': state.d_activeIndex === context.index // Condition-based active styles.
                }
            ],
            style: 'top:2px'
        }),
        icon: 'mr-2'
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <TabMenu :model="items" />
        <router-view />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        to: '/'
    },
    {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar',
        to: '/calendar'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        to: '/edit'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        to: '/documentation'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        to: '/settings'
    }
]);

<\/script>`,pages:[{tabName:"HomeDemo",content:`
<template>
    <div class="p-4">
        <h5>Home Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`},{tabName:"CalendarDemo",content:`
<template>
    <div class="p-4">
        <h5>Calendar Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`},{tabName:"EditDemo",content:`
<template>
    <div class="p-4">
        <h5>Edit Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`},{tabName:"DocumentationDemo",content:`
<template>
    <div class="p-4">
        <h5>Documentation Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`},{tabName:"SettingsDemo",content:`
<template>
    <div class="p-4">
        <h5>Settings Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>`}]}}}},le=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function re(o,a,c,h,t,_){const l=U,r=$,w=f;return p(),T(w,d(u(o.$attrs)),{default:m(()=>[e("p",null,[i(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(l,{to:"/tailwind"},{default:m(()=>[i("Tailwind Customization")]),_:1}),i(" section for an example. ")]),n(r,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),le,n(r,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const ce=s(ae,[["render",re]]),pe={data(){return{docs:[{id:"theming.styled",label:"Styled",component:ie},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ce}]}]}}},se={class:"doc-main"},de=e("div",{class:"doc-intro"},[e("h1",null,"TabMenu Theming")],-1);function ue(o,a,c,h,t,_){const l=P,r=N;return p(),b(v,null,[e("div",se,[de,n(l,{docs:t.docs},null,8,["docs"])]),n(r,{docs:t.docs},null,8,["docs"])],64)}const me=s(pe,[["render",ue]]),be={},ve=e("h3",null,"Screen Reader",-1),fe=e("p",null,[i(" TabMenu component uses the "),e("i",null,"menubar"),i(" role and the value to describe the menu can either be provided with "),e("i",null,"aria-labelledby"),i(" or "),e("i",null,"aria-label"),i(" props. Each list item has a "),e("i",null,"presentation"),i(" role whereas anchor elements have a "),e("i",null,"menuitem"),i(" role with "),e("i",null,"aria-label"),i(" referring to the label of the item and "),e("i",null,"aria-disabled"),i(" defined if the item is disabled. ")],-1),he=e("h3",null,"Keyboard Support",-1),_e=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Adds focus to the active tab header when focus moves in to the component, if there is already a focused tab header moves the focus out of the component based on the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Activates the focused tab header.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Activates the focused tab header.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Moves focus to the next header.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Moves focus to the previous header.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first header.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last header.")])])])],-1);function we(o,a){const c=f;return p(),T(c,E({id:"accessibility",label:"Accessibility"},o.$attrs),{default:m(()=>[ve,fe,he,_e]),_:1},16)}const ge=s(be,[["render",we]]),xe={data(){return{active:0,items:[{label:"Home",icon:"pi pi-fw pi-home",route:"/tabmenu"},{label:"Calendar",icon:"pi pi-fw pi-calendar",route:"/tabmenu/calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil",route:"/tabmenu/edit"},{label:"Documentation",icon:"pi pi-fw pi-file",route:"/tabmenu/documentation"},{label:"Settings",icon:"pi pi-fw pi-cog",route:"/tabmenu/settings"}],code:{basic:`<TabMenu v-model:activeIndex="active" :model="items">
    <template #item="{ label, item, props }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter.space="($event) => routerProps.navigate($event)">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
    </template>
</TabMenu>
<router-view />`,options:`<template>
    <div class="card">
        <TabMenu v-model:activeIndex="active" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter.space="($event) => routerProps.navigate($event)">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
            </template>
        </TabMenu>
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                    route: '/'
                },
                {
                    label: 'Calendar',
                    icon: 'pi pi-fw pi-calendar',
                    route: '/calendar'
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    route: '/edit'
                },
                {
                    label: 'Documentation',
                    icon: 'pi pi-fw pi-file',
                    route: '/documentation'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    route: '/settings'
                }
            ]
        }
    },
    watch: {
        $route() {
            this.active = this.items.findIndex((item) => this.$route.path === this.$router.resolve(item.route).path);
        }
    },
    mounted() {
        this.active = this.items.findIndex((item) => this.$route.path === this.$router.resolve(item.route).path);
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TabMenu v-model:activeIndex="active" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter.space="($event) => routerProps.navigate($event)">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
            </template>
        </TabMenu>
        <router-view />
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const active = ref(0);
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        route: '/'
    },
    {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar',
        route: '/calendar'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        route: '/edit'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        route: '/documentation'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        route: '/settings'
    }
]);

onMounted(() => {
    active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
})

watch(
    route,
    () => {
        active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
    },
    { immediate: true }
);
<\/script>`,pages:[{tabName:"HomeDemo",content:`
<template>
    <div class="p-4">
        <h5>Home Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`},{tabName:"CalendarDemo",content:`
<template>
    <div class="p-4">
        <h5>Calendar Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`},{tabName:"EditDemo",content:`
<template>
    <div class="p-4">
        <h5>Edit Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`},{tabName:"DocumentationDemo",content:`
<template>
    <div class="p-4">
        <h5>Documentation Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`},{tabName:"SettingsDemo",content:`
<template>
    <div class="p-4">
        <h5>Settings Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>`}]}}},watch:{$route(){this.active=this.items.findIndex(o=>this.$route.path===this.$router.resolve(o.route).path)}},mounted(){this.active=this.items.findIndex(o=>this.$route.path===this.$router.resolve(o.route).path)}},$e=e("p",null,[i("TabMenu requires a collection of menuitems as its "),e("i",null,"model"),i(".")],-1),Ce={class:"card"},De=["href","onClick","onKeydown"];function Te(o,a,c,h,t,_){const l=f,r=x("router-link"),w=x("TabMenu"),D=x("router-view"),g=$;return p(),b(v,null,[n(l,d(u(o.$attrs)),{default:m(()=>[$e]),_:1},16),e("div",Ce,[n(w,{activeIndex:t.active,"onUpdate:activeIndex":a[0]||(a[0]=C=>t.active=C),model:t.items},{item:m(({label:C,item:M,props:y})=>[M.route?(p(),T(r,{key:0,to:M.route,custom:""},{default:m(k=>[e("a",E({href:k.href},y.action,{onClick:S=>k.navigate(S),onKeydown:A(S=>k.navigate(S),["enter","space"])}),[e("span",d(u(y.icon)),null,16),e("span",d(u(y.label)),I(C),17)],16,De)]),_:2},1032,["to"])):R("",!0)]),_:1},8,["activeIndex","model"]),n(D)]),n(g,{code:t.code},null,8,["code"])],64)}const ye=s(xe,[["render",Te]]),ke={data(){return{active:3,items:[{label:"Home",icon:"pi pi-fw pi-home"},{label:"Calendar",icon:"pi pi-fw pi-calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil"},{label:"Documentation",icon:"pi pi-fw pi-file"},{label:"Settings",icon:"pi pi-fw pi-cog"}],code:{basic:`<Button @click="active = 0" text outlined label="Activate 1st" />
<TabMenu v-model:activeIndex="active" :model="items" />`,options:`<template>
    <div class="card">
        <Button @click="active = 0" text outlined label="Activate 1st" />
        <TabMenu v-model:activeIndex="active" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 3,
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home'
                },
                {
                    label: 'Calendar',
                    icon: 'pi pi-fw pi-calendar'
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil'
                },
                {
                    label: 'Documentation',
                    icon: 'pi pi-fw pi-file'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog'
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Button @click="active = 0" text outlined label="Activate 1st" />
        <TabMenu v-model:activeIndex="active" :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(3);
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home'
    },
    {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog'
    }
]);
<\/script>`}}}},Se=e("p",null,[i("Visibility of the content is specified with the "),e("i",null,"activeIndex"),i(" property that supports one or two-way binding.")],-1),Me={class:"card"};function Ie(o,a,c,h,t,_){const l=f,r=x("Button"),w=x("TabMenu"),D=$;return p(),b(v,null,[n(l,d(u(o.$attrs)),{default:m(()=>[Se]),_:1},16),e("div",Me,[n(r,{onClick:a[0]||(a[0]=g=>t.active=0),text:"",outlined:"",class:"mb-2",label:"Activate 1st"}),n(w,{activeIndex:t.active,"onUpdate:activeIndex":a[1]||(a[1]=g=>t.active=g),model:t.items},null,8,["activeIndex","model"])]),n(D,{code:t.code},null,8,["code"])],64)}const Pe=s(ke,[["render",Ie]]),Ne={data(){return{code:{basic:"import TabMenu from 'primevue/tabmenu';"}}}};function Ee(o,a,c,h,t,_){const l=f,r=$;return p(),b(v,null,[n(l,d(u(o.$attrs)),null,16),n(r,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const He=s(Ne,[["render",Ee]]),Be={data(){return{active:0,items:[{label:"Home",icon:"pi pi-fw pi-home",route:"/tabmenu"},{label:"Calendar",icon:"pi pi-fw pi-calendar",route:"/tabmenu/calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil",route:"/tabmenu/edit"},{label:"Documentation",icon:"pi pi-fw pi-file",route:"/tabmenu/documentation"},{label:"Settings",icon:"pi pi-fw pi-cog",route:"/tabmenu/settings"},{label:"FileUpload",icon:"pi pi-fw pi-upload",url:"/fileupload"}],code:{basic:`<TabMenu v-model:activeIndex="active" :model="items">
    <template #item="{ label, item, props }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter.space="($event) => routerProps.navigate($event)">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
        </a>
    </template>
</TabMenu>
<router-view />`,options:`<template>
    <div class="card">
        <TabMenu v-model:activeIndex="active" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter.space="($event) => routerProps.navigate($event)">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </TabMenu>
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                    route: '/'
                },
                {
                    label: 'Calendar',
                    icon: 'pi pi-fw pi-calendar',
                    route: '/calendar'
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    route: '/edit'
                },
                {
                    label: 'Documentation',
                    icon: 'pi pi-fw pi-file',
                    route: '/documentation'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    route: '/settings'
                },
                { 
                    label: 'FileUpload',
                    icon: 'pi pi-fw pi-upload',
                    url: '/fileupload'
                }
            ]
        }
    },
    watch: {
        $route() {
            this.active = this.items.findIndex((item) => this.$route.path === this.$router.resolve(item.route).path);
        }
    },
    mounted() {
        this.active = this.items.findIndex((item) => this.$route.path === this.$router.resolve(item.route).path);
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TabMenu v-model:activeIndex="active" :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter.space="($event) => routerProps.navigate($event)">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </TabMenu>
        <router-view />
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const active = ref(0);
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        route: '/'
    },
    {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar',
        route: '/calendar'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        route: '/edit'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        route: '/documentation'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        route: '/settings'
    },
    { 
        label: 'FileUpload',
        icon: 'pi pi-fw pi-upload',
        url: '/fileupload'
    }
]);

onMounted(() => {
    active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
})

watch(
    route,
    () => {
        active.value = items.value.findIndex((item) => route.path === router.resolve(item.route).path);
    },
    { immediate: true }
);

<\/script>`,pages:[{tabName:"HomeDemo",content:`
<template>
    <div class="p-4">
        <h5>Home Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`},{tabName:"CalendarDemo",content:`
<template>
    <div class="p-4">
        <h5>Calendar Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`},{tabName:"EditDemo",content:`
<template>
    <div class="p-4">
        <h5>Edit Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`},{tabName:"DocumentationDemo",content:`
<template>
    <div class="p-4">
        <h5>Documentation Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`},{tabName:"SettingsDemo",content:`
<template>
    <div class="p-4">
        <h5>Settings Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>`}]}}}},Ae=e("p",null,[i(" Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as "),e("i",null,"NuxtLink"),i(" or "),e("i",null,"router-link"),i(". Here is an example with vue-router. ")],-1);function Re(o,a,c,h,t,_){const l=f,r=$;return p(),b(v,null,[n(l,d(u(o.$attrs)),{default:m(()=>[Ae]),_:1},16),n(r,{code:t.code},null,8,["code"])],64)}const Ve=s(Be,[["render",Re]]),Fe={data(){return{docs:[{id:"import",label:"Import",component:He},{id:"basic",label:"Basic",component:ye},{id:"controlled",label:"Controlled",component:Pe},{id:"router",label:"Router",component:Ve},{id:"accessibility",label:"Accessibility",component:ge}],ptComponent:Z,themingDoc:me}}};function Ue(o,a,c,h,t,_){const l=V;return p(),T(l,{title:"Vue TabMenu Component",header:"TabMenu",description:"TabMenu is a navigation/command component that displays items as tab headers.",componentDocs:t.docs,apiDocs:["TabMenu","MenuItem"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const qe=s(Fe,[["render",Ue]]);export{qe as default};
