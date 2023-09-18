import{_ as r,o as p,e as B,w as l,m as D,b as t,f as c,h as m,j as y,c as u,a as e,n as f,g,F as _,p as $,t as k,D as C,k as w,l as x,v as N,x as U}from"./entry.68beb385.js";import{g as V}from"./PTHelper.11558b27.js";import{_ as P}from"./PrimeVueNuxtLink.f51d0c80.js";const j={},A=t("h3",null,"Screen Reader",-1),R=t("p",null,[c(" Toolbar uses "),t("i",null,"toolbar"),c(" role to the root element, "),t("i",null,"aria-orientation"),c(' is not included as it defaults to "horizontal". Any valid attribute is passed to the root element so you may add additional properties like '),t("i",null,"aria-labelledby"),c(" to define the element if required. ")],-1),z=t("h3",null,"Keyboard Support",-1),W=t("p",null,"Component does not include any interactive elements. Arbitrary content can be placed with templating and elements like buttons inside should follow the page tab sequence.",-1);function q(i,d){const a=m;return p(),B(a,D({id:"accessibility",label:"Accessibility"},i.$attrs),{default:l(()=>[A,R,z,W]),_:1},16)}const E=r(j,[["render",q]]),I={data(){return{items:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.$router.push("fileupload")}}],code:{basic:`<Toolbar>
    <template #start>
        <Button label="New" icon="pi pi-plus" class="mr-2" />
        <Button label="Upload" icon="pi pi-upload" severity="success" />
        <i class="pi pi-bars p-toolbar-separator mr-2" />
        <SplitButton label="Save" icon="pi pi-check" :model="items" severity="warning"></SplitButton>
    </template>

    <template #end>
        <Button icon="pi pi-search" class="mr-2" />
        <Button icon="pi pi-calendar" severity="success" class="mr-2" />
        <Button icon="pi pi-times" severity="danger" />
    </template>
</Toolbar>`,options:`<template>
    <div class="card">
        <Toolbar>
            <template #start>
                <Button label="New" icon="pi pi-plus" class="mr-2" />
                <Button label="Upload" icon="pi pi-upload" severity="success" />
                <i class="pi pi-bars p-toolbar-separator mr-2" />
                <SplitButton label="Save" icon="pi pi-check" :model="items" severity="warning"></SplitButton>
            </template>

            <template #end>
                <Button icon="pi pi-search" class="mr-2" />
                <Button icon="pi pi-calendar" severity="success" class="mr-2" />
                <Button icon="pi pi-times" severity="danger" />
            </template>
        </Toolbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        this.$router.push('fileupload');
                    }
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Toolbar>
            <template #start>
                <Button label="New" icon="pi pi-plus" class="mr-2" />
                <Button label="Upload" icon="pi pi-upload" severity="success" />
                <i class="pi pi-bars p-toolbar-separator mr-2" />
                <SplitButton label="Save" icon="pi pi-check" :model="items" severity="warning"></SplitButton>
            </template>

            <template #end>
                <Button icon="pi pi-search" class="mr-2" />
                <Button icon="pi pi-calendar" severity="success" class="mr-2" />
                <Button icon="pi pi-times" severity="danger" />
            </template>
        </Toolbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        label: 'Update',
        icon: 'pi pi-refresh'
    },
    {
        label: 'Delete',
        icon: 'pi pi-times'
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            this.$router.push('fileupload');
        }
    }
])
<\/script>`}}}},F=t("p",null,[c("Toolbar provides "),t("i",null,"start"),c(", "),t("i",null,"center"),c(" and "),t("i",null,"end"),c(" properties to place content at these sections.")],-1),L={class:"card"},O=t("i",{class:"pi pi-bars p-toolbar-separator mr-2"},null,-1);function K(i,d,a,b,o,h){const s=m,n=y("Button"),v=y("SplitButton"),T=y("Toolbar"),S=$;return p(),u(_,null,[e(s,f(g(i.$attrs)),{default:l(()=>[F]),_:1},16),t("div",L,[e(T,null,{start:l(()=>[e(n,{label:"New",icon:"pi pi-plus",class:"mr-2"}),e(n,{label:"Upload",icon:"pi pi-upload",severity:"success"}),O,e(v,{label:"Save",icon:"pi pi-check",model:o.items,severity:"warning"},null,8,["model"])]),end:l(()=>[e(n,{icon:"pi pi-search",class:"mr-2"}),e(n,{icon:"pi pi-calendar",severity:"success",class:"mr-2"}),e(n,{icon:"pi pi-times",severity:"danger"})]),_:1})]),e(S,{code:o.code},null,8,["code"])],64)}const M=r(I,[["render",K]]),G={data(){return{code:{basic:"import Toolbar from 'primevue/toolbar';"}}}};function H(i,d,a,b,o,h){const s=m,n=$;return p(),u(_,null,[e(s,f(g(i.$attrs)),null,16),e(n,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const J=r(G,[["render",H]]),Q={data(){return{code:{basic:`<TabView>
    <Toolbar
        :pt="{
            root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
        }">
        <template #start>
            <Button label="New" icon="pi pi-plus" class="p-button-help" />
        </template>

        <template #end>
            <Button icon="pi pi-search" class="mr-2" />
            <Button icon="pi pi-times" severity="danger" />
        </template>
    </Toolbar>
</TabView>`,options:`<template>
    <div class="card">
        <Toolbar
            :pt="{
                root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
            }">
            <template #start>
                <Button label="New" icon="pi pi-plus" class="p-button-help" />
            </template>

            <template #end>
                <Button icon="pi pi-search" class="mr-2" />
                <Button icon="pi pi-times" severity="danger" />
            </template>
        </Toolbar>
    </div>
</template>`,composition:`<template>
    <div class="card">
        <Toolbar
            :pt="{
                root: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)', borderRadius: '24px' } }
            }">
            <template #start>
                <Button label="New" icon="pi pi-plus" class="p-button-help" />
            </template>

            <template #end>
                <Button icon="pi pi-search" class="mr-2" />
                <Button icon="pi pi-times" severity="danger" />
            </template>
        </Toolbar>
    </div>
</template>`}}}},X={class:"card"};function Y(i,d,a,b,o,h){const s=m,n=y("Button"),v=y("Toolbar"),T=$;return p(),u(_,null,[e(s,f(g(i.$attrs)),null,16),t("div",X,[e(v,{pt:{root:{style:{background:"linear-gradient(to right, #8e2de2, #4a00e0)",borderRadius:"24px"}}}},{start:l(()=>[e(n,{label:"New",icon:"pi pi-plus",class:"p-button-help"})]),end:l(()=>[e(n,{icon:"pi pi-search",class:"mr-2"}),e(n,{icon:"pi pi-times",severity:"danger"})]),_:1},8,["pt"])]),e(T,{code:o.code},null,8,["code"])],64)}const Z=r(Q,[["render",Y]]),ee={},te=t("div",{class:"card"},[t("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/toolbar.jpg"})],-1);function oe(i,d){const a=m;return p(),u(_,null,[e(a,f(g(i.$attrs)),{default:l(()=>[t("p",null,k(i.$attrs.description),1)]),_:1},16),te],64)}const ne=r(ee,[["render",oe]]),ie={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ne},{id:"pt.doc.toolbar",label:"Toolbar PT Options",component:C,data:V("Toolbar")},{id:"pt.demo",label:"Demo",component:Z}]}}},se={class:"doc-main"},ae=t("div",{class:"doc-intro"},[t("h1",null,"Toolbar Pass Through")],-1);function ce(i,d,a,b,o,h){const s=w,n=x;return p(),u(_,null,[t("div",se,[ae,e(s,{docs:o.docs},null,8,["docs"])]),e(n,{docs:o.docs},null,8,["docs"])],64)}const le=r(ie,[["render",ce]]),re={},pe=t("p",null,"List of class names used in the styled mode.",-1),de=N('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-toolbar</td><td>Main container element.</td></tr><tr><td>p-toolbar-group-start</td><td>Start content container.</td></tr><tr><td>p-toolbar-group-center</td><td>Center content container.</td></tr><tr><td>p-toolbar-group-end</td><td>End content container.</td></tr></tbody></table></div>',1);function me(i,d){const a=m;return p(),u(_,null,[e(a,f(g(i.$attrs)),{default:l(()=>[pe]),_:1},16),de],64)}const ue=r(re,[["render",me]]),_e={data(){return{code1:{basic:`
export default {
    toolbar: {
        root: {
            class: ['flex items-center justify-between flex-wrap', 'bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-blue-900/40  p-5 rounded-md gap-2']
        },
        start: 'flex items-center',
        center: 'flex items-center',
        end: 'flex items-center'
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Toolbar>
            <template #start>
                <Button label="New" icon="pi pi-plus" class="mr-2" />
                <Button label="Upload" icon="pi pi-upload" severity="success" class="mr-2" />
                <i class="pi pi-bars text-gray-700 dark:text-white/80 mr-2" />
                <SplitButton label="Save" icon="pi pi-check" :model="items" severity="warning"></SplitButton>
            </template>

            <template #end>
                <Button icon="pi pi-search" class="mr-2" />
                <Button icon="pi pi-calendar" severity="success" class="mr-2" />
                <Button icon="pi pi-times" severity="danger" />
            </template>
        </Toolbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        label: 'Update',
        icon: 'pi pi-refresh'
    },
    {
        label: 'Delete',
        icon: 'pi pi-times'
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            this.$router.push('fileupload');
        }
    }
])
<\/script>`}}}},be=t("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function he(i,d,a,b,o,h){const s=P,n=$,v=m;return p(),B(v,f(g(i.$attrs)),{default:l(()=>[t("p",null,[c(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),e(s,{to:"/tailwind"},{default:l(()=>[c("Tailwind Customization")]),_:1}),c(" section for an example. ")]),e(n,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),be,e(n,{code:o.code2,embedded:""},null,8,["code"])]),_:1},16)}const fe=r(_e,[["render",he]]),ge={data(){return{docs:[{id:"theming.styled",label:"Styled",component:ue},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:fe}]}]}}},ve={class:"doc-main"},ye=t("div",{class:"doc-intro"},[t("h1",null,"Toolbar Theming")],-1);function $e(i,d,a,b,o,h){const s=w,n=x;return p(),u(_,null,[t("div",ve,[ye,e(s,{docs:o.docs},null,8,["docs"])]),e(n,{docs:o.docs},null,8,["docs"])],64)}const Te=r(ge,[["render",$e]]),Be={data(){return{docs:[{id:"import",label:"Import",component:J},{id:"basic",label:"Basic",component:M},{id:"accessibility",label:"Accessibility",component:E}],ptComponent:le,themingDoc:Te}}};function we(i,d,a,b,o,h){const s=U;return p(),B(s,{title:"Vue Toolbar Component",header:"Toolbar",description:"Toolbar is a grouping component for buttons and other content.",componentDocs:o.docs,apiDocs:["Toolbar"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ke=r(Be,[["render",we]]);export{ke as default};
