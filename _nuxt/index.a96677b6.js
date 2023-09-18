import{_ as d,o as u,e as $,w as c,m as D,b as e,f as a,h as g,j as q,c as h,a as t,n as f,g as v,F as _,p as x,t as S,D as C,k as y,l as P,v as k,x as U}from"./entry.68beb385.js";import{g as E}from"./PTHelper.11558b27.js";import{_ as H}from"./PrimeVueNuxtLink.f51d0c80.js";const L={},N=e("h3",null,"Screen Reader",-1),A=e("p",null,[a(" Toggleable panels use a content toggle button at the header that has "),e("i",null,"aria-controls"),a(" to define the id of the content section along with "),e("i",null,"aria-expanded"),a(" for the visibility state. The value to read the button defaults to the value of the "),e("i",null,"header"),a(" property and can be customized by defining an "),e("i",null,"aria-label"),a(" or "),e("i",null,"aria-labelledby"),a(" via the "),e("i",null,"toggleButtonProps"),a(" property. ")],-1),B=e("p",null,[a("The content uses "),e("i",null,"region"),a(", defines an id that matches the "),e("i",null,"aria-controls"),a(" of the content toggle button and "),e("i",null,"aria-labelledby"),a(" referring to the id of the header.")],-1),V=e("h3",null,"Content Toggle Button Keyboard Support",-1),R=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next the focusable element in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),a(" + "),e("i",null,"tab")]),e("td",null,"Moves focus to the previous the focusable element in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Toggles the visibility of the content.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the visibility of the content.")])])])],-1);function I(i,r){const s=g;return u(),$(s,D({id:"accessibility",label:"Accessibility"},i.$attrs),{default:c(()=>[N,A,B,V,R]),_:1},16)}const M=d(L,[["render",I]]),j={data(){return{code:{basic:`<Panel header="Header">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>`,options:`<template>
    <div class="card">
        <Panel header="Header">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Panel header="Header">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script setup>
<\/script>`}}}},O=e("p",null,[a("A simple Panel is created with a "),e("i",null,"header"),a(" property along with the content as children.")],-1),z={class:"card"},F=e("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function W(i,r,s,b,o,p){const n=g,l=q("Panel"),m=x;return u(),h(_,null,[t(n,f(v(i.$attrs)),{default:c(()=>[O]),_:1},16),e("div",z,[t(l,{header:"Header"},{default:c(()=>[F]),_:1})]),t(m,{code:o.code},null,8,["code"])],64)}const K=d(j,[["render",W]]),G={data(){return{code:{basic:"import Panel from 'primevue/panel';"}}}};function J(i,r,s,b,o,p){const n=g,l=x;return u(),h(_,null,[t(n,f(v(i.$attrs)),null,16),t(l,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Q=d(G,[["render",J]]),X={data(){return{items:[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}}]},{label:"Navigate",items:[{label:"Vue Website",icon:"pi pi-external-link",url:"https://vuejs.org/"},{label:"Router",icon:"pi pi-upload",to:"/fileupload"}]}],code:{basic:`<Panel header="Header" toggleable>
    <template #icons>
        <button class="p-panel-header-icon p-link mr-2" @click="toggle">
            <span class="pi pi-cog"></span>
        </button>
        <Menu ref="menu" id="config_menu" :model="items" popup />
    </template>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>`,options:`<template>
    <div class="card">
        <Toast />
        <Panel header="Header" toggleable>
            <template #icons>
                <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                    <span class="pi pi-cog"></span>
                </button>
                <Menu ref="menu" id="config_menu" :model="items" popup />
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Options',
                    items: [
                        {
                            label: 'Update',
                            icon: 'pi pi-refresh',
                            command: () => {
                                this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                            }
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-times',
                            command: () => {
                                this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                            }
                        }
                    ]
                },
                {
                    label: 'Navigate',
                    items: [
                        {
                            label: 'Vue Website',
                            icon: 'pi pi-external-link',
                            url: 'https://vuejs.org/'
                        },
                        {
                            label: 'Router',
                            icon: 'pi pi-upload',
                            to: '/fileupload'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <Toast />
        <Panel header="Header" toggleable>
            <template #icons>
                <button class="p-panel-header-icon p-link mr-2" @click="toggle">
                    <span class="pi pi-cog"></span>
                </button>
                <Menu ref="menu" id="config_menu" :model="items" popup />
            </template>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";
import { useRouter } from 'vue-router';
import Menu from 'primevue/menu';

const menu = ref(null);
const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                }
            }
        ]
    },
    {
        label: 'Navigate',
        items: [
            {
                label: 'Vue Website',
                icon: 'pi pi-external-link',
                url: 'https://vuejs.org/'
            },
            {
                label: 'Router',
                icon: 'pi pi-upload',
                to: '/fileupload'
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`}}},methods:{toggle(i){this.$refs.menu.toggle(i)},save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},Y=e("p",null,"Header of the panel is either defined with the header property or the header template.",-1),Z={class:"card"},ee=e("span",{class:"pi pi-cog"},null,-1),te=[ee],ie=e("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function oe(i,r,s,b,o,p){const n=g,l=q("Menu"),m=q("Panel"),T=x;return u(),h(_,null,[t(n,f(v(i.$attrs)),{default:c(()=>[Y]),_:1},16),e("div",Z,[t(m,{header:"Header",toggleable:""},{icons:c(()=>[e("button",{class:"p-panel-header-icon p-link mr-2",onClick:r[0]||(r[0]=(...w)=>p.toggle&&p.toggle(...w))},te),t(l,{ref:"menu",id:"config_menu",model:o.items,popup:""},null,8,["model"])]),default:c(()=>[ie]),_:1})]),t(T,{code:o.code},null,8,["code"])],64)}const ae=d(X,[["render",oe]]),ne={data(){return{code:{basic:`<Panel header="Header" toggleable>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>`,options:`<template>
    <div class="card">
        <Panel header="Header" toggleable>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Panel header="Header" toggleable>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script setup>
<\/script>`}}}},le=e("p",null,[a("Content of the panel can be expanded and collapsed using "),e("i",null,"toggleable"),a(" option.")],-1),se={class:"card"},re=e("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function ce(i,r,s,b,o,p){const n=g,l=q("Panel"),m=x;return u(),h(_,null,[t(n,f(v(i.$attrs)),{default:c(()=>[le]),_:1},16),e("div",se,[t(l,{header:"Header",toggleable:""},{default:c(()=>[re]),_:1})]),t(m,{code:o.code},null,8,["code"])],64)}const de=d(ne,[["render",ce]]),ue={data(){return{code:{basic:`<Panel header="Header" toggleable
    :pt="{
        header: { class: 'bg-primary' },
        title: { class: 'text-white' },
        toggler: { class: 'text-white hover:bg-primary-reverse' }
    }">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>`,options:`<template>
    <div class="card">
        <Panel header="Header" toggleable
            :pt="{
                header: { class: 'bg-primary' },
                title: { class: 'text-white' },
                toggler: { class: 'text-white hover:bg-primary-reverse' }
            }">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Panel header="Header" toggleable
            :pt="{
                header: { class: 'bg-primary' },
                title: { class: 'text-white' },
                toggler: { class: 'text-white hover:bg-primary-reverse' }
            }">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script setup>
<\/script>`}}}},pe={class:"card"},me=e("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function ge(i,r,s,b,o,p){const n=g,l=q("Panel"),m=x;return u(),h(_,null,[t(n,D(i.$attrs,{level:2}),null,16),e("div",pe,[t(l,{header:"Header",pt:{header:{class:"bg-primary"},title:{class:"text-white"},toggler:{class:"text-white hover:bg-primary-reverse"}},toggleable:""},{default:c(()=>[me]),_:1})]),t(m,{code:o.code},null,8,["code"])],64)}const he=d(ue,[["render",ge]]),_e={},be=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/panel.jpg"})],-1);function fe(i,r){const s=g;return u(),h(_,null,[t(s,f(v(i.$attrs)),{default:c(()=>[e("p",null,S(i.$attrs.description),1)]),_:1},16),be],64)}const ve=d(_e,[["render",fe]]),xe={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ve},{id:"pt.doc.panel",label:"Panel PT Options",component:C,data:E("Panel")},{id:"pt.demo",label:"Demo",component:he}]}}},qe={class:"doc-main"},$e=e("div",{class:"doc-intro"},[e("h1",null,"Panel Pass Through")],-1);function De(i,r,s,b,o,p){const n=y,l=P;return u(),h(_,null,[e("div",qe,[$e,t(n,{docs:o.docs},null,8,["docs"])]),t(l,{docs:o.docs},null,8,["docs"])],64)}const ye=d(xe,[["render",De]]),Pe={},Te=e("p",null,"List of class names used in the styled mode.",-1),we=k('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-panel</td><td>Container element.</td></tr><tr><td>p-panel-header</td><td>Header section.</td></tr><tr><td>p-panel-title</td><td>Title text of panel.</td></tr><tr><td>p-panel-header-icon</td><td>Action icons inside header.</td></tr><tr><td>p-panel-toggler</td><td>Toggle icon.</td></tr><tr><td>p-panel-content</td><td>Content of panel.</td></tr></tbody></table></div>',1);function Se(i,r){const s=g;return u(),h(_,null,[t(s,f(v(i.$attrs)),{default:c(()=>[Te]),_:1},16),we],64)}const Ce=d(Pe,[["render",Se]]),ke={data(){return{code1:{basic:`
export const TRANSITIONS = {
    toggleable: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40	',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    }
};

export default {
    panel: {
        header: ({ props }) => ({
            class: [
                'flex items-center justify-between', // flex and alignments
                'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
                { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
            ]
        }),
        title: 'leading-none font-bold',
        toggler: {
            class: [
                'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
                'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
                'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
            ]
        },
        togglerIcon: 'inline-block',
        content: {
            class: [
                'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
            ]
        },
        transition: TRANSITIONS.toggleable
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Panel header="Header">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script setup>
<\/script>`}}}},Ue=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ee(i,r,s,b,o,p){const n=H,l=x,m=g;return u(),$(m,f(v(i.$attrs)),{default:c(()=>[e("p",null,[a(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(n,{to:"/tailwind"},{default:c(()=>[a("Tailwind Customization")]),_:1}),a(" section for an example. ")]),t(l,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ue,t(l,{code:o.code2,embedded:""},null,8,["code"])]),_:1},16)}const He=d(ke,[["render",Ee]]),Le={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ce},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:He}]}]}}},Ne={class:"doc-main"},Ae=e("div",{class:"doc-intro"},[e("h1",null,"Panel Theming")],-1);function Be(i,r,s,b,o,p){const n=y,l=P;return u(),h(_,null,[e("div",Ne,[Ae,t(n,{docs:o.docs},null,8,["docs"])]),t(l,{docs:o.docs},null,8,["docs"])],64)}const Ve=d(Le,[["render",Be]]),Re={data(){return{docs:[{id:"import",label:"Import",component:Q},{id:"basic",label:"Basic",component:K},{id:"toggleable",label:"Toggleable",component:de},{id:"template",label:"Template",component:ae},{id:"accessibility",label:"Accessibility",component:M}],ptComponent:ye,themingDoc:Ve}}};function Ie(i,r,s,b,o,p){const n=U;return u(),$(n,{title:"Vue Panel Component",header:"Panel",description:"Panel is a grouping component providing with content toggle feature.",componentDocs:o.docs,apiDocs:["Panel"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ze=d(Re,[["render",Ie]]);export{ze as default};
