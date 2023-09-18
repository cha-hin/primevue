import{_ as l,j as P,o as c,c as h,a as o,w as r,n as g,g as _,b as e,F as f,f as t,h as b,p as y,e as C,H as S,k as $,l as w,T as k,M as D}from"./entry.68beb385.js";const q={data(){return{code:{basic:`<Panel header="Header" toggleable
    :pt="{
        header: (options) => ({
            id: 'myPanelHeader',
            style: {
                'user-select': 'none'
            },
            class: [
                'border-primary',
                {
                    'bg-primary': options.state.d_collapsed,
                    'bg-primary-reverse': !options.state.d_collapsed
                }
            ]
        }),
        content: { class: 'border-primary text-lg text-primary-700' },
        title: 'text-xl',                                     // OR { class: 'text-xl' }
        toggler: () => 'bg-primary hover:bg-primary-reverse'  // OR { class: 'bg-primary hover:bg-primary-reverse' }
    }">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>`,options:`<template>
    <div class="card">
        <Panel header="Header" toggleable
            :pt="{
                header: (options) => ({
                    id: 'myPanelHeader',
                    style: {
                        'user-select': 'none'
                    },
                    class: [
                        'border-primary',
                        {
                            'bg-primary': options.state.d_collapsed,
                            'bg-primary-reverse': !options.state.d_collapsed
                        }
                    ]
                }),
                content: { class: 'border-primary text-lg text-primary-700' },
                title: 'text-xl',                                     // OR { class: 'text-xl' }
                toggler: () => 'bg-primary hover:bg-primary-reverse'  // OR { class: 'bg-primary hover:bg-primary-reverse' }
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
                header: (options) => ({
                    id: 'myPanelHeader',
                    style: {
                        'user-select': 'none'
                    },
                    class: [
                        'border-primary',
                        {
                            'bg-primary': options.state.d_collapsed,
                            'bg-primary-reverse': !options.state.d_collapsed
                        }
                    ]
                }),
                content: { class: 'border-primary text-lg text-primary-700' },
                title: 'text-xl',                                     // OR { class: 'text-xl' }
                toggler: () => 'bg-primary hover:bg-primary-reverse'  // OR { class: 'bg-primary hover:bg-primary-reverse' }
            }">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    </div>
</template>

<script setup>
<\/script>`}}}},B=e("p",null,[t(" Each component has a special "),e("i",null,"pt"),t(" property to define an object with keys corresponding to the available DOM elements. Each value can either be a string, an object or a function that returns a string or an object to define the arbitrary properties to apply to the element such as styling, aria, data-* or custom attributes. If the value is a string or a function that returns a string, it is considered as a class definition and added to the class attribute of the element. Every component documentation has a dedicated section to document the available section names exposed via PT. ")],-1),O=e("p",null,[t(" Most common usage of "),e("i",null,"pt"),t(" is styling and customization. The "),e("i",null,"class"),t(" and "),e("i",null,"style"),t(" properties support the exact syntax of the corresponding "),e("a",{href:"https://vuejs.org/guide/essentials/class-and-style.html"},"Vue bindings"),t(" like arrays, objects and conditionals. Example below styles a Panel component with PrimeFlex CSS library. ")],-1),z={class:"card"},H=e("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function A(s,d,p,u,a,m){const n=b,i=P("Panel"),v=y;return c(),h(f,null,[o(n,g(_(s.$attrs)),{default:r(()=>[B,O]),_:1},16),e("div",z,[o(i,{header:"Header",toggleable:"",pt:{header:x=>({id:"myPanelHeader",style:{"user-select":"none"},class:["border-primary",{"bg-primary":x.state.d_collapsed,"bg-primary-reverse":!x.state.d_collapsed}]}),content:{class:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:()=>"bg-primary hover:bg-primary-reverse"}},{default:r(()=>[H]),_:1},8,["pt"])]),o(v,{code:a.code},null,8,["code"])],64)}const U=l(q,[["render",A]]),V={data(){return{code:{basic:`import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, { 
    pt: {
        global: {
            css: \`
                button {
                    padding: 2rem;
                }

                .p-ink {
                    display: block;
                    position: absolute;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 100%;
                    transform: scale(0);
                    pointer-events: none;
                }

                .p-ink-active {
                    animation: ripple 0.4s linear;
                }

                @keyframes ripple {
                    100% {
                        opacity: 0;
                        transform: scale(2.5);
                    }
                }
            \`
        }
    } 
});`}}}},M=e("p",null,[t(" The "),e("i",null,"global"),t(" property has a "),e("i",null,"css"),t(" option to define custom css that belongs to a global "),e("i",null,"pt"),t(" configuration. Common use case of this feature is defining global styles and animations related to the pass through props configuration. ")],-1);function E(s,d,p,u,a,m){const n=b,i=y;return c(),h(f,null,[o(n,g(_(s.$attrs)),{default:r(()=>[M]),_:1},16),o(i,{code:a.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const R=l(V,[["render",E]]),j={data(){return{code:{basic:`import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, { 
    pt: {
        panel: {
            header: {
                class: 'bg-primary'
            }
        },
        autocomplete: {
            input: { 
                root: 'w-16rem' // OR { class: 'w-16rem' }
            }
        }
    } 
});`}}}},L=e("p",null,[t(" Defines the shared pass through properties per component type. For example, with the configuration below all panel headers have the "),e("i",null,"bg-primary"),t(" style class and the all autocomplete components have a fixed width. These settings can be overriden by a particular component as components "),e("i",null,"pt"),t(" property has higher precedence over global "),e("i",null,"pt"),t(". ")],-1);function F(s,d,p,u,a,m){const n=b,i=y;return c(),h(f,null,[o(n,g(_(s.$attrs)),{default:r(()=>[L]),_:1},16),o(i,{code:a.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const N=l(j,[["render",F]]),I={data(){return{code:{basic:`<Panel header="Header" :pt="panelPT">
    Content
</Panel>`,options:`<template>
    <Panel header="Header" :pt="panelPT">
        Content
    </Panel>
</template>

<script>
export default {
    data() {
        return {
            panelPT: {
                hooks: {
                    onMounted: () => {
                        //panel mounted
                    },
                    onUnmounted: () => {
                        //panel unmounted
                    }
                }
            }
        }
    }
};
<\/script>`,composition:`<template>
    <Panel header="Header" :pt="panelPT">
        Content
    </Panel>
</template>

<script setup>
import { ref } from 'vue';

const panelPt = ref({
    hooks: {
        onMounted: () => {
            //panel mounted
        },
        onUnmounted: () => {
            //panel unmounted
        }
    }
);
<\/script>`}}}},G=e("p",null,[t(" Lifecycle hooks of components are exposed as pass through using the "),e("i",null,"hooks"),t(" property so that callback functions can be registered. Available callbacks are "),e("i",null,"onBeforeCreate"),t(", "),e("i",null,"onCreated"),t(", "),e("i",null,"onBeforeUpdate"),t(", "),e("i",null,"onUpdated"),t(", "),e("i",null,"onBeforeMount"),t(", "),e("i",null,"onMounted"),t(", "),e("i",null,"onBeforeUnmount"),t(" and "),e("i",null,"onUnmounted"),t(". Refer to the Vue.js documentation for detailed information about lifecycle hooks. ")],-1);function J(s,d,p,u,a,m){const n=b,i=y;return c(),h(f,null,[o(n,g(_(s.$attrs)),{default:r(()=>[G]),_:1},16),o(i,{code:a.code,hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const K=l(I,[["render",J]]),Q={data(){return{code1:{basic:`import {createApp} from "vue";
import PrimeVue from "primevue/config";
import { usePassThrough } from "primevue/passthrough";
import Tailwind from "primevue/passthrough/tailwind";

const app = createApp(App);

const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            title: {
                class: ['leading-none font-light text-2xl']
            }
        }
    },
    {
        mergeSections: true,
        mergeProps: false
    }
);

app.use(PrimeVue, { unstyled: true, pt: CustomTailwind });`},code2:{basic:`const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: true, mergeProps: false }
);

// Output: 
// panel.header.class => 'my_panel_header'
// panel.title.class => Tailwind.panel.title.class`},code3:{basic:`const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: true, mergeProps: true }
);

// Output: 
// panel.header.class => [Tailwind.panel.header.class, 'my_panel_header']
// panel.title.class => Tailwind.panel.title.class`},code4:{basic:`const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: false, mergeProps: true }
);

// Output: 
// panel.header.class => [Tailwind.panel.header.class, 'my_panel_header']
// panel.title.class => undefined`},code5:{basic:`const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: false, mergeProps: false }
);

// Output: 
// panel.header.class => 'my_panel_header'
// panel.title.class => undefined`}}}},W=e("p",null,[t(" An existing pass through configuration is customized with the "),e("i",null,"usePassThrough"),t(" utility. The first parameter is the object to customize, the second parameter is the customizations and the final parameter is the behavior of merging. One of the example use cases is customizing existing unstyled themes like Tailwind. ")],-1),X=e("p",null,[t(" The "),e("i",null,"mergeSections"),t(" defines whether the sections from the main configuration gets added and the "),e("i",null,"mergeProps"),t(" controls whether to override or merge the defined props. Defaults are "),e("i",null,"true"),t(" for "),e("i",null,"mergeSections"),t(" and "),e("i",null,"false"),t(" for "),e("i",null,"mergeProps"),t(". ")],-1);function Y(s,d,p,u,a,m){const n=y,i=b;return c(),C(i,g(_(s.$attrs)),{default:r(()=>[W,o(n,{code:a.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),X,o(n,{code:a.code2,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),o(n,{code:a.code3,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),o(n,{code:a.code4,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),o(n,{code:a.code5,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])]),_:1},16)}const Z=l(Q,[["render",Y]]),ee={data(){return{docs:[{id:"basic",label:"Basic",component:U},{id:"lifecycle",label:"Lifecycle",component:K},{id:"global",label:"Global",component:N},{id:"customcss",label:"Custom CSS",component:R},{id:"usepassthrough",label:"UsePassThrough",component:Z}]}}},te={class:"doc"},oe={class:"doc-main"},ae=e("div",{class:"doc-intro"},[e("h1",null,"Pass Through"),e("p",null,"The Pass Through props is an API to access the internal DOM Structure of the components.")],-1);function ne(s,d,p,u,a,m){const n=k,i=D,v=S,x=$,T=w;return c(),h(f,null,[o(v,null,{default:r(()=>[o(n,null,{default:r(()=>[t("PrimeVue - Pass Through")]),_:1}),o(i,{name:"description",content:"The Pass Through props is an API to access the internal DOM Structure of the components."})]),_:1}),e("div",te,[e("div",oe,[ae,o(x,{docs:a.docs},null,8,["docs"])]),o(T,{docs:a.docs},null,8,["docs"])])],64)}const se=l(ee,[["render",ne]]);export{se as default};
