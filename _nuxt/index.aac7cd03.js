import{_ as d,o as p,e as y,w as l,b as e,f as t,a as o,m as C,C as T,h as m,j as x,c as _,n as h,g as b,F as P,p as w,t as L,D as F,k as $,l as D,v as S,x as N}from"./entry.68beb385.js";import{g as j}from"./PTHelper.11558b27.js";import{_ as B}from"./PrimeVueNuxtLink.f51d0c80.js";const M={},I=e("h3",null,"Screen Reader",-1),A=e("p",null,[t("Paginator is placed inside a "),e("i",null,"nav"),t(" element to indicate a navigation section. All of the paginator elements can be customized using templating however the default behavious is listed below.")],-1),O=e("i",null,"aria-label",-1),J=e("i",null,"aria.firstPageLabel",-1),z=e("i",null,"aria.prevPageLabel",-1),V=e("i",null,"aria.nextPageLabel",-1),E=e("i",null,"aria.lastPageLabel",-1),H=e("i",null,"aria-label",-1),K=e("i",null,"aria.pageLabel",-1),U=e("i",null,"aria-current",-1),q=e("p",null,[t("Current page report uses "),e("i",null,'aria-live="polite"'),t(" to instruct screen reader about the changes to the pagination state.")],-1),W=e("i",null,"aria-label",-1),G=e("i",null,"aria.rowsPerPageLabel",-1),Q=e("i",null,"input",-1),X=e("i",null,"aria-label",-1),Y=e("i",null,"aria.jumpToPageInputLabel",-1),Z=e("i",null,"aria-label",-1),ee=e("i",null,"aria.jumpToPageDropdownLabel",-1),te=e("h3",null,"Keyboard Support",-1),oe=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus through the paginator elements.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Executes the paginator element action.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Executes the paginator element action.")])])])],-1),ne=e("h3",null,"Rows Per Page Dropdown Keyboard Support",-1);function ae(a,c){const r=T,g=m;return p(),y(g,C({id:"accessibility",label:"Accessibility"},a.$attrs),{default:l(()=>[I,A,e("p",null,[t(" First, previous, next and last page navigators elements with "),O,t(" attributes referring to the "),J,t(", "),z,t(", "),V,t(" and "),E,t(" properties of the "),o(r,{to:"/configuration/#locale"},{default:l(()=>[t("locale")]),_:1}),t(" API respectively. ")]),e("p",null,[t(" Page links are also button elements with an "),H,t(" attribute derived from the "),K,t(" of the "),o(r,{to:"/configuration/#locale"},{default:l(()=>[t("locale")]),_:1}),t(" API. Current page is marked with "),U,t(' set to "page" as well. ')]),q,e("p",null,[t(" Rows per page dropdown internally uses a dropdown component, refer to the "),o(r,{to:"/dropdown"},{default:l(()=>[t("dropdown")]),_:1}),t(" documentation for accessibility details. Additionally, the dropdown uses an "),W,t(" from the "),G,t(" property of the "),o(r,{to:"/configuration/#locale"},{default:l(()=>[t("locale")]),_:1}),t(" API. ")]),e("p",null,[t(" Jump to page input is an "),Q,t(" element with an "),X,t(" that refers to the "),Y,t(" property and jump to page dropdown internally uses a dropdown component, with an "),Z,t(" that refers to the "),ee,t(" property of the "),o(r,{to:"/configuration/#locale"},{default:l(()=>[t("locale")]),_:1}),t(" API. ")]),te,oe,ne,e("p",null,[t("Refer to the "),o(r,{to:"/dropdown"},{default:l(()=>[t("dropdown")]),_:1}),t(" documentation for more details about keyboard support.")])]),_:1},16)}const re=d(M,[["render",ae]]),se={data(){return{code:{basic:'<Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>',options:`<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
    </div>
</template>

<script setup>
<\/script>`}}}},ie=e("p",null,[t(" Paginator is used as a controlled component with "),e("i",null,"first"),t(" and "),e("i",null,"rows"),t(" properties to manage the first index and number of records to display per page. Total number of records need to be with "),e("i",null,"totalRecords"),t(" property. Default template includes a dropdown to change the "),e("i",null,"rows"),t(" so "),e("i",null,"rowsPerPageOptions"),t(" is also necessary for the dropdown options. ")],-1),le={class:"card"};function ce(a,c,r,g,n,f){const s=m,i=x("Paginator"),u=w;return p(),_(P,null,[o(s,h(b(a.$attrs)),{default:l(()=>[ie]),_:1},16),e("div",le,[o(i,{rows:10,totalRecords:120,rowsPerPageOptions:[10,20,30]})]),o(u,{code:n.code},null,8,["code"])],64)}const de=d(se,[["render",ce]]),pe={data(){return{first:0,code:{basic:`<Paginator :rows="10" :totalRecords="120" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />`,options:`<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            first: 0
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const first = ref(0);
<\/script>`}}}},ue=e("p",null,"Current page report item in the template displays information about the pagination state. Default value is ({currentPage} of {totalPages}) whereas available placeholders are the following;",-1),ge=e("ul",{class:"mb-4 line-height-4"},[e("li",null,"{currentPage}"),e("li",null,"{totalPages}"),e("li",null,"{rows}"),e("li",null,"{first}"),e("li",null,"{last}"),e("li",null,"{totalRecords}")],-1),me={class:"card"};function _e(a,c,r,g,n,f){const s=m,i=x("Paginator"),u=w;return p(),_(P,null,[o(s,h(b(a.$attrs)),{default:l(()=>[ue,ge]),_:1},16),e("div",me,[o(i,{rows:10,totalRecords:120,template:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"})]),o(u,{code:n.code},null,8,["code"])],64)}const Pe=d(pe,[["render",_e]]),fe={data(){return{code:{basic:`<Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]">
    <template #start="slotProps">
        Page: {{ slotProps.state.page }}
        First: {{ slotProps.state.first }}
        Rows: {{ slotProps.state.rows }}
    </template>
    <template #end>
        <Button type="button" icon="pi pi-search" />
    </template>
</Paginator>`,options:`<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]">
            <template #start="slotProps">
                Page: {{ slotProps.state.page }}
                First: {{ slotProps.state.first }}
                Rows: {{ slotProps.state.rows }}
            </template>
            <template #end>
                <Button type="button" icon="pi pi-search" />
            </template>
        </Paginator>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]">
            <template #start="slotProps">
                Page: {{ slotProps.state.page }}
                First: {{ slotProps.state.first }}
                Rows: {{ slotProps.state.rows }}
            </template>
            <template #end>
                <Button type="button" icon="pi pi-search" />
            </template>
        </Paginator>
    </div>
</template>

<script setup>
<\/script>`}}}},he=e("p",null,[t("There are two templates available named "),e("i",null,"start"),t(" and "),e("i",null,"end"),t(" to add custom content to these locations. Both templates get a state object as a slot property to provide the current page, first index and the rows.")],-1),be={class:"card"};function we(a,c,r,g,n,f){const s=m,i=x("Button"),u=x("Paginator"),k=w;return p(),_(P,null,[o(s,h(b(a.$attrs)),{default:l(()=>[he]),_:1},16),e("div",be,[o(u,{rows:10,totalRecords:120,rowsPerPageOptions:[10,20,30]},{start:l(v=>[t(" Page: "+L(v.state.page)+" First: "+L(v.state.first)+" Rows: "+L(v.state.rows),1)]),end:l(()=>[o(i,{type:"button",icon:"pi pi-search"})]),_:1})]),o(k,{code:n.code},null,8,["code"])],64)}const xe=d(fe,[["render",we]]),ke={data(){return{code:{basic:"import Paginator from 'primevue/paginator';"}}}};function ve(a,c,r,g,n,f){const s=m,i=w;return p(),_(P,null,[o(s,h(b(a.$attrs)),null,16),o(i,{code:n.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Le=d(ke,[["render",ve]]),ye={data(){return{code:{basic:`<Paginator
    :template="{
        '640px': 'PrevPageLink CurrentPageReport NextPageLink',
        '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
        '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
        default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput'
    }"
    :rows="10"
    :totalRecords="120">
</Paginator>`,options:`<template>
    <div class="card">
        <Paginator
            :template="{
                '640px': 'PrevPageLink CurrentPageReport NextPageLink',
                '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
                '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
                default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput'
            }"
            :rows="10"
            :totalRecords="120">
        </Paginator>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Paginator
            :template="{
                '640px': 'PrevPageLink CurrentPageReport NextPageLink',
                '960px': 'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink',
                '1300px': 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink',
                default: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput'
            }"
            :rows="10"
            :totalRecords="120">
        </Paginator>
    </div>
</template>

<script setup>
<\/script>`}}}},$e=e("p",null," Paginator elements can be customized per screen size by defining a template per breakpoint. Note that breakpoints are based on max-width setting, if default key is omitted then the default template would be used. Example below has 4 settings; up to 640px, between 641px-960px, between 961px-1300px and larger than 1301px which is the default. ",-1),De={class:"card"};function Re(a,c,r,g,n,f){const s=m,i=x("Paginator"),u=w;return p(),_(P,null,[o(s,h(b(a.$attrs)),{default:l(()=>[$e]),_:1},16),e("div",De,[o(i,{template:{"640px":"PrevPageLink CurrentPageReport NextPageLink","960px":"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink","1300px":"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink",default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink JumpToPageDropdown JumpToPageInput"},rows:10,totalRecords:120})]),o(u,{code:n.code},null,8,["code"])],64)}const Ce=d(ye,[["render",Re]]),Te={data(){return{first:0,code:{basic:`<Paginator v-model:first="first" :rows="1" :totalRecords="1" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

<div class="p-3 text-center">
    <img :src="\`https://primefaces.org/cdn/primevue/images/nature/nature\${first + 1}.jpg\`" :alt="first" class="shadow-2 border-round w-full sm:w-30rem" />
</div>`,options:`<template>
    <div class="card">
        <Paginator v-model:first="first" :rows="1" :totalRecords="12" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

        <div class="p-3 text-center">
            <img :src="\`https://primefaces.org/cdn/primevue/images/nature/nature\${first + 1}.jpg\`" :alt="first" class="shadow-2 border-round w-full sm:w-30rem" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            first: 0
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Paginator v-model:first="first" :rows="1" :totalRecords="12" template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

        <div class="p-3 text-center">
            <img :src="\`https://primefaces.org/cdn/primevue/images/nature/nature\${first + 1}.jpg\`" :alt="first" class="shadow-2 border-round w-full sm:w-30rem" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const first = ref(0);
<\/script>`}}}},Fe=e("p",null,[t(" Paginator elements can be customized using the "),e("i",null,"template"),t(' property using the predefined keys, default value is "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown". Here are the available elements that can be placed inside a paginator in any order. ')],-1),Se=e("ul",{class:"mb-4 line-height-4"},[e("li",null,"FirstPageLink"),e("li",null,"PrevPageLink"),e("li",null,"PageLinks"),e("li",null,"NextPageLink"),e("li",null,"LastPageLink"),e("li",null,"RowsPerPageDropdown"),e("li",null,"JumpToPageDropdown"),e("li",null,"JumpToPageInput"),e("li",null,"CurrentPageReport")],-1),Ne={class:"card"},je={class:"p-3 text-center"},Be=["src","alt"];function Me(a,c,r,g,n,f){const s=m,i=x("Paginator"),u=w;return p(),_(P,null,[o(s,h(b(a.$attrs)),{default:l(()=>[Fe,Se]),_:1},16),e("div",Ne,[o(i,{first:n.first,"onUpdate:first":c[0]||(c[0]=k=>n.first=k),rows:1,totalRecords:12,template:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"},null,8,["first"]),e("div",je,[e("img",{src:`https://primefaces.org/cdn/primevue/images/nature/nature${n.first+1}.jpg`,alt:n.first,class:"shadow-2 border-round w-full sm:w-30rem"},null,8,Be)])]),o(u,{code:n.code},null,8,["code"])],64)}const Ie=d(Te,[["render",Me]]),Ae={data(){return{code:{basic:`<Paginator
    :rows="10"
    :totalRecords="120"
    :pt="{
        pageButton: ({ props, state, context }) => ({
            class: context.active ? 'bg-primary' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card">
        <Paginator
            :rows="10"
            :totalRecords="120"
            :pt="{
                pageButton: ({ props, state, context }) => ({
                    class: context.active ? 'bg-primary' : undefined
                })
            }"
        />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Paginator
            :rows="10"
            :totalRecords="120"
            :pt="{
                pageButton: ({ props, state, context }) => ({
                    class: context.active ? 'bg-primary' : undefined
                })
            }"
        />
    </div>
</template>

<script setup>
<\/script>`}}}},Oe={class:"card"};function Je(a,c,r,g,n,f){const s=m,i=x("Paginator"),u=w;return p(),_(P,null,[o(s,h(b(a.$attrs)),null,16),e("div",Oe,[o(i,{rows:10,totalRecords:120,pt:{pageButton:({props:k,state:v,context:R})=>({class:R.active?"bg-primary":void 0})}},null,8,["pt"])]),o(u,{code:n.code},null,8,["code"])],64)}const ze=d(Ae,[["render",Je]]),Ve={},Ee=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/paginator.png"})],-1);function He(a,c){const r=m;return p(),_(P,null,[o(r,h(b(a.$attrs)),{default:l(()=>[e("p",null,L(a.$attrs.description),1)]),_:1},16),Ee],64)}const Ke=d(Ve,[["render",He]]),Ue={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ke},{id:"pt.doc.paginator",label:"Paginator PT Options",component:F,data:j("Paginator")},{id:"pt.demo",label:"Demo",component:ze}]}}},qe={class:"doc-main"},We=e("div",{class:"doc-intro"},[e("h1",null,"Paginator Pass Through")],-1);function Ge(a,c,r,g,n,f){const s=$,i=D;return p(),_(P,null,[e("div",qe,[We,o(s,{docs:n.docs},null,8,["docs"])]),o(i,{docs:n.docs},null,8,["docs"])],64)}const Qe=d(Ue,[["render",Ge]]),Xe={},Ye=e("p",null,"List of class names used in the styled mode.",-1),Ze=S('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-paginator</td><td>Container element.</td></tr><tr><td>p-paginator-first</td><td>First page element.</td></tr><tr><td>p-paginator-prev</td><td>Previous page element.</td></tr><tr><td>p-paginator-pages</td><td>Container of page links.</td></tr><tr><td>p-paginator-page</td><td>A page link.</td></tr><tr><td>p-paginator-next</td><td>Next pge element.</td></tr><tr><td>p-paginator-last</td><td>Last page element.</td></tr><tr><td>p-paginator-rpp-options</td><td>Rows per page dropdown.</td></tr></tbody></table></div>',1);function et(a,c){const r=m;return p(),_(P,null,[o(r,h(b(a.$attrs)),{default:l(()=>[Ye]),_:1},16),Ze],64)}const tt=d(Xe,[["render",et]]),ot={data(){return{code1:{basic:`
export default {
    paginator: {
        root: {
            class: [
                'flex items-center justify-center flex-wrap',
                'bg-white text-gray-500 border-0 px-4 py-2 rounded-md',
                'dark:bg-gray-900 dark:text-white/60 dark:border-blue-900/40' // Dark Mode
            ]
        },
        firstpagebutton: ({ context }) => ({
            class: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500  min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            ]
        }),
        previouspagebutton: ({ context }) => ({
            class: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            ]
        }),
        nextpagebutton: ({ context }) => ({
            class: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            ]
        }),
        lastpagebutton: ({ context }) => ({
            class: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            ]
        }),
        pagebutton: ({ context }) => ({
            class: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:border-blue-300 dark:text-white', // Dark Mode
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                {
                    'bg-blue-50 border-blue-50 text-blue-700 dark:bg-blue-300': context.active
                }
            ]
        }),
        rowperpagedropdown: {
            root: ({ props, state }) => ({
                class: [
                    'inline-flex relative cursor-pointer user-none',
                    'bg-white border rounded-md',
                    'transition duration-200',
                    'h-12 mx-2',
                    'dark:bg-gray-950 dark:border-blue-900/40', //DarkMode
                    {
                        'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500': state.focused && !props.disabled, //Focus
                        'border-gray-300': !state.focused,
                        'hover:border-blue-500': !props.disabled //Hover
                    }
                ]
            }),
            input: {
                class: [
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                    'focus:outline-none focus:outline-offset-0',
                    'dark:text-white' //Dark Mode
                ]
            },
            trigger: {
                class: ['flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md']
            },
            panel: {
                class: [
                    'bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                    'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
                ]
            },
            wrapper: 'overflow-auto',
            list: 'm-0 p-0 py-3 list-none',
            item: ({ context }) => ({
                class: [
                    'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                    'm-0 py-3 px-5 border-none text-gray-600 rounded-none',
                    'transition duration-200',
                    'dark:text-white/80', // Dark Mode
                    {
                        'text-blue-700 bg-blue-50 dark:text-white/80 dark:bg-blue-300': !context.focused && context.selected,
                        'bg-blue-300/40': context.focused && context.selected,
                        'text-gray-600 bg-gray-300 dark:text-white/80 dark:bg-blue-900/40': context.focused && !context.selected
                    }
                ]
            })
        },
        jumptopageinput: {
            root: 'inline-flex mx-2',
            input: {
                class: [
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border border-gray-300 pr-0',
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] focus:border-blue-300',
                    'dark:text-white dark:bg-gray-950 dark:border-blue-900/40', //Dark Mode
                    'm-0 flex-auto max-w-[3rem]'
                ]
            }
        },
        jumptopagedropdown: {
            root: ({ props, state }) => ({
                class: [
                    'inline-flex relative cursor-pointer user-none',
                    'bg-white border rounded-md',
                    'transition duration-200',
                    'h-12 mx-2',
                    'dark:bg-gray-950 dark:border-blue-900/40', //DarkMode
                    {
                        'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500': state.focused && !props.disabled, //Focus
                        'border-gray-300': !state.focused,
                        'hover:border-blue-500': !props.disabled //Hover
                    }
                ]
            }),
            input: {
                class: [
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                    'focus:outline-none focus:outline-offset-0',
                    'dark:text-white' //Dark Mode
                ]
            },
            trigger: {
                class: ['flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md']
            },
            panel: {
                class: [
                    'bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                    'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
                ]
            },
            wrapper: 'overflow-auto',
            list: 'm-0 p-0 py-3 list-none',
            item: ({ context }) => ({
                class: [
                    'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                    'm-0 py-3 px-5 border-none text-gray-600 rounded-none',
                    'transition duration-200',
                    'dark:text-white/80', // Dark Mode
                    {
                        'text-blue-700 bg-blue-50 dark:text-white/80 dark:bg-blue-300': !context.focused && context.selected,
                        'bg-blue-300/40': context.focused && context.selected,
                        'text-gray-600 bg-gray-300 dark:text-white/80 dark:bg-blue-900/40': context.focused && !context.selected
                    }
                ]
            })
        }
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator>
    </div>
</template>

<script setup>
<\/script>`}}}},nt=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function at(a,c,r,g,n,f){const s=B,i=w,u=m;return p(),y(u,h(b(a.$attrs)),{default:l(()=>[e("p",null,[t(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(s,{to:"/tailwind"},{default:l(()=>[t("Tailwind Customization")]),_:1}),t(" section for an example. ")]),o(i,{code:n.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),nt,o(i,{code:n.code2,embedded:""},null,8,["code"])]),_:1},16)}const rt=d(ot,[["render",at]]),st={data(){return{docs:[{id:"theming.styled",label:"Styled",component:tt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:rt}]}]}}},it={class:"doc-main"},lt=e("div",{class:"doc-intro"},[e("h1",null,"Paginator Theming")],-1);function ct(a,c,r,g,n,f){const s=$,i=D;return p(),_(P,null,[e("div",it,[lt,o(s,{docs:n.docs},null,8,["docs"])]),o(i,{docs:n.docs},null,8,["docs"])],64)}const dt=d(st,[["render",ct]]),pt={data(){return{docs:[{id:"import",label:"Import",component:Le},{id:"basic",label:"Basic",component:de},{id:"template",label:"Template",component:Ie},{id:"currentpagereport",label:"Current Page Report",component:Pe},{id:"responsive",label:"Responsive",component:Ce},{id:"customcontent",label:"Custom Content",component:xe},{id:"accessibility",label:"Accessibility",component:re}],ptComponent:Qe,themingDoc:dt}}};function ut(a,c,r,g,n,f){const s=N;return p(),y(s,{title:"Vue Paginator Component",header:"Paginator",description:"Paginator displays data in paged format and provides navigation between pages.",componentDocs:n.docs,apiDocs:["Paginator"],ptTabComponent:n.ptComponent,themingDocs:n.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Pt=d(pt,[["render",ut]]);export{Pt as default};
