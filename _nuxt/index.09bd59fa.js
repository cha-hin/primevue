import{_ as p,o as m,e as $,w as s,m as O,b as e,h,j as w,c as b,a as n,n as v,g as x,t as g,F as _,f as c,p as C,A as z,D,k,l as P,v as S,x as T}from"./entry.68beb385.js";import{g as A}from"./PTHelper.11558b27.js";import{_ as M}from"./PrimeVueNuxtLink.f51d0c80.js";const F={},E=e("h3",null,"Screen Reader",-1),U=e("p",null," Component currently uses a table based implementation and does not provide high level of screen reader support, a nested list implementation replacement is planned with aria roles and attributes aligned to a tree widget for high level of reader support in the upcoming versions. ",-1),N=e("h3",null,"Keyboard Support",-1),I=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus through the focusable elements within the chart.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Toggles the expanded state of a node.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the expanded state of a node.")])])])],-1);function K(o,d){const i=h;return m(),$(i,O({id:"accessibility",label:"Accessibility"},o.$attrs),{default:s(()=>[E,U,N,I]),_:1},16)}const B=p(F,[["render",K]]),V={data(){return{data:{label:"Argentina",children:[{label:"Argentina",children:[{label:"Argentina"},{label:"Croatia"}]},{label:"France",children:[{label:"France"},{label:"Morocco"}]}]},code:{basic:`<OrganizationChart :value="data">
    <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
    </template>
</OrganizationChart>`,options:`<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data">
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                label: 'Argentina',
                children: [
                    {
                        label: 'Argentina',
                        children: [
                            {
                                label: 'Argentina'
                            },
                            {
                                label: 'Croatia'
                            }
                        ]
                    },
                    {
                        label: 'France',
                        children: [
                            {
                                label: 'France'
                            },
                            {
                                label: 'Morocco'
                            }
                        ]
                    }
                ]
            }
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data">
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    label: 'Argentina',
    children: [
        {
            label: 'Argentina',
            children: [
                {
                    label: 'Argentina'
                },
                {
                    label: 'Croatia'
                }
            ]
        },
        {
            label: 'France',
            children: [
                {
                    label: 'France'
                },
                {
                    label: 'Morocco'
                }
            ]
        }
    ]
});
<\/script>`}}}},X=e("p",null,[c("OrganizationChart requires a collection of "),e("i",null,"TreeNode"),c(" instances as a "),e("i",null,"value"),c(".")],-1),L={class:"card overflow-x-auto"};function R(o,d,i,f,t,y){const l=h,r=w("OrganizationChart"),u=C;return m(),b(_,null,[n(l,v(x(o.$attrs)),{default:s(()=>[X]),_:1},16),e("div",L,[n(r,{value:t.data},{default:s(a=>[e("span",null,g(a.node.label),1)]),_:1},8,["value"])]),n(u,{code:t.code},null,8,["code"])],64)}const j=p(V,[["render",R]]),q={data(){return{data:{key:"0",type:"person",styleClass:"bg-indigo-500 text-white border-round-xl",data:{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",name:"Amy Elsner",title:"CEO"},children:[{key:"0_0",type:"person",styleClass:"bg-purple-500 text-white border-round-xl",data:{image:"https://primefaces.org/cdn/primevue/images/avatar/annafali.png",name:"Anna Fali",title:"CMO"},children:[{label:"Sales",styleClass:"bg-purple-500 text-white border-round-xl"},{label:"Marketing",styleClass:"bg-purple-500 text-white border-round-xl"}]},{key:"0_1",type:"person",styleClass:"bg-teal-500 text-white border-round-xl",data:{image:"https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png",name:"Stephen Shaw",title:"CTO"},children:[{label:"Development",styleClass:"bg-teal-500 text-white border-round-xl"},{label:"UI/UX Design",styleClass:"bg-teal-500 text-white border-round-xl"}]}]},code:{basic:`<OrganizationChart :value="data" collapsible>
    <template #person="slotProps">
        <div class="flex flex-column">
            <div class="flex flex-column align-items-center">
                <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                <span>{{ slotProps.node.data.title }}</span>
            </div>
        </div>
    </template>
    <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
    </template>
</OrganizationChart>`,options:`<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #person="slotProps">
                <div class="flex flex-column">
                    <div class="flex flex-column align-items-center">
                        <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                        <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                        <span>{{ slotProps.node.data.title }}</span>
                    </div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                key: '0',
                type: 'person',
                styleClass: 'bg-indigo-500 text-white border-round-xl',
                data: {
                    image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
                    name: 'Amy Elsner',
                    title: 'CEO'
                },
                children: [
                    {
                        key: '0_0',
                        type: 'person',
                        styleClass: 'bg-purple-500 text-white border-round-xl',
                        data: {
                            image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                            name: 'Anna Fali',
                            title: 'CMO'
                        },
                        children: [
                            {
                                label: 'Sales',
                                styleClass: 'bg-purple-500 text-white border-round-xl'
                            },
                            {
                                label: 'Marketing',
                                styleClass: 'bg-purple-500 text-white border-round-xl'
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        type: 'person',
                        styleClass: 'bg-teal-500 text-white border-round-xl',
                        data: {
                            image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                            name: 'Stephen Shaw',
                            title: 'CTO'
                        },
                        children: [
                            {
                                label: 'Development',
                                styleClass: 'bg-teal-500 text-white border-round-xl'
                            },
                            {
                                label: 'UI/UX Design',
                                styleClass: 'bg-teal-500 text-white border-round-xl'
                            }
                        ]
                    }
                ]
            }
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #person="slotProps">
                <div class="flex flex-column">
                    <div class="flex flex-column align-items-center">
                        <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                        <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                        <span>{{ slotProps.node.data.title }}</span>
                    </div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    key: '0',
    type: 'person',
    styleClass: 'bg-indigo-500 text-white border-round-xl',
    data: {
        image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
        name: 'Amy Elsner',
        title: 'CEO'
    },
    children: [
        {
            key: '0_0',
            type: 'person',
            styleClass: 'bg-purple-500 text-white border-round-xl',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'CMO'
            },
            children: [
                {
                    label: 'Sales',
                    styleClass: 'bg-purple-500 text-white border-round-xl'
                },
                {
                    label: 'Marketing',
                    styleClass: 'bg-purple-500 text-white border-round-xl'
                }
            ]
        },
        {
            key: '0_1',
            type: 'person',
            styleClass: 'bg-teal-500 text-white border-round-xl',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                name: 'Stephen Shaw',
                title: 'CTO'
            },
            children: [
                {
                    label: 'Development',
                    styleClass: 'bg-teal-500 text-white border-round-xl'
                },
                {
                    label: 'UI/UX Design',
                    styleClass: 'bg-teal-500 text-white border-round-xl'
                }
            ]
        }
    ]
});
<\/script>`}}}},W=e("p",null,[c("Styling a specific node is configured with "),e("i",null,"styleClass"),c(" and "),e("i",null,"style"),c(" options of a TreeNode.")],-1),G={class:"card overflow-x-auto"},H={class:"flex flex-column"},J={class:"flex flex-column align-items-center"},Q=["alt","src"],Y={class:"font-bold mb-2"};function Z(o,d,i,f,t,y){const l=h,r=w("OrganizationChart"),u=C;return m(),b(_,null,[n(l,v(x(o.$attrs)),{default:s(()=>[W]),_:1},16),e("div",G,[n(r,{value:t.data,collapsible:""},{person:s(a=>[e("div",H,[e("div",J,[e("img",{alt:a.node.data.name,src:a.node.data.image,class:"mb-3 w-3rem h-3rem"},null,8,Q),e("span",Y,g(a.node.data.name),1),e("span",null,g(a.node.data.title),1)])])]),default:s(a=>[e("span",null,g(a.node.label),1)]),_:1},8,["value"])]),n(u,{code:t.code},null,8,["code"])],64)}const ee=p(q,[["render",Z]]),te={data(){return{code:{basic:"import OrganizationChart from 'primevue/organizationchart';"}}}};function ae(o,d,i,f,t,y){const l=h,r=C;return m(),b(_,null,[n(l,v(x(o.$attrs)),null,16),n(r,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ne=p(te,[["render",ae]]),oe={data(){return{data:{key:"0",type:"person",data:{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",name:"Amy Elsner",title:"CEO"},children:[{key:"0_0",type:"person",data:{image:"https://primefaces.org/cdn/primevue/images/avatar/annafali.png",name:"Anna Fali",title:"CMO"},children:[{key:"0_0_0",label:"Sales"},{key:'0_0_"1',label:"Marketing"}]},{key:"0_1",type:"person",data:{image:"https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png",name:"Stephen Shaw",title:"CTO"},children:[{key:"0_1_0",label:"Development"},{key:"0_1_1",label:"UI/UX Design"}]}]},selection:{},code:{basic:`<OrganizationChart v-model:selectionKeys="selection" :value="data" collapsible selectionMode="multiple">
    <template #person="slotProps">
        <div class="flex flex-column">
            <div class="flex flex-column align-items-center">
                <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                <span>{{ slotProps.node.data.title }}</span>
            </div>
        </div>
    </template>
    <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
    </template>
</OrganizationChart>`,options:`<template>
    <OrganizationChart v-model:selectionKeys="selection" :value="data" collapsible selectionMode="multiple">
        <template #person="slotProps">
            <div class="flex flex-column">
                <div class="flex flex-column align-items-center">
                    <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                    <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                    <span>{{ slotProps.node.data.title }}</span>
                </div>
            </div>
        </template>
        <template #default="slotProps">
            <span>{{ slotProps.node.label }}</span>
        </template>
    </OrganizationChart>
</template>

<script>
export default {
    data() {
        return {
            data: {
                key: '0',
                type: 'person',
                data: {
                    image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
                    name: 'Amy Elsner',
                    title: 'CEO'
                },
                children: [
                    {
                        key: '0_0',
                        type: 'person',
                        data: {
                            image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                            name: 'Anna Fali',
                            title: 'CMO'
                        },
                        children: [
                            {
                                key: '0_0_0',
                                label: 'Sales'
                            },
                            {
                                key: '0_0_"1',
                                label: 'Marketing'
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        type: 'person',
                        data: {
                            image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                            name: 'Stephen Shaw',
                            title: 'CTO'
                        },
                        children: [
                            {
                                key: '0_1_0',
                                label: 'Development'
                            },
                            {
                                key: '0_1_1',
                                label: 'UI/UX Design'
                            }
                        ]
                    }
                ]
            },
            selection: {}
        };
    },
};
<\/script>`,composition:`<template>
    <OrganizationChart v-model:selectionKeys="selection" :value="data" collapsible selectionMode="multiple">
        <template #person="slotProps">
            <div class="flex flex-column">
                <div class="flex flex-column align-items-center">
                    <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-3 w-3rem h-3rem" />
                    <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                    <span>{{ slotProps.node.data.title }}</span>
                </div>
            </div>
        </template>
        <template #default="slotProps">
            <span>{{ slotProps.node.label }}</span>
        </template>
    </OrganizationChart>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    key: '0',
    type: 'person',
    data: {
        image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
        name: 'Amy Elsner',
        title: 'CEO'
    },
    children: [
        {
            key: '0_0',
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                name: 'Anna Fali',
                title: 'CMO'
            },
            children: [
                {
                    key: '0_0_0',
                    label: 'Sales'
                },
                {
                    key: '0_0_"1',
                    label: 'Marketing'
                }
            ]
        },
        {
            key: '0_1',
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                name: 'Stephen Shaw',
                title: 'CTO'
            },
            children: [
                {
                    key: '0_1_0',
                    label: 'Development'
                },
                {
                    key: '0_1_1',
                    label: 'UI/UX Design'
                }
            ]
        }
    ]
});
const selection = ref({});
<\/script>`}}}},le=e("p",null,[c(" Selection is enabled by defining the "),e("i",null,"selectionMode"),c(' to either "single" or "multiple" and specifying the '),e("i",null,"selectionKeys"),c(" with the v-model directive. Note that selection on a particular node can be disabled if the "),e("i",null,"selectable"),c(" is false on the node instance. ")],-1),re={class:"card overflow-x-auto"},se={class:"flex flex-column"},ie={class:"flex flex-column align-items-center"},ce=["alt","src"],de={class:"font-bold mb-2"};function pe(o,d,i,f,t,y){const l=h,r=w("OrganizationChart"),u=C;return m(),b(_,null,[n(l,v(x(o.$attrs)),{default:s(()=>[le]),_:1},16),e("div",re,[n(r,{selectionKeys:t.selection,"onUpdate:selectionKeys":d[0]||(d[0]=a=>t.selection=a),value:t.data,collapsible:"",selectionMode:"multiple"},{person:s(a=>[e("div",se,[e("div",ie,[e("img",{alt:a.node.data.name,src:a.node.data.image,class:"mb-3 w-3rem h-3rem"},null,8,ce),e("span",de,g(a.node.data.name),1),e("span",null,g(a.node.data.title),1)])])]),default:s(a=>[e("span",null,g(a.node.label),1)]),_:1},8,["selectionKeys","value"])]),n(u,{code:t.code},null,8,["code"])],64)}const me=p(oe,[["render",pe]]),ue={data(){return{data:{key:"0",type:"country",label:"Argentina",data:"ar",children:[{key:"0_0",type:"country",label:"Argentina",data:"ar",children:[{key:"0_0_0",type:"country",label:"Argentina",data:"ar"},{key:"0_0_1",type:"country",label:"Croatia",data:"hr"}]},{key:"0_1",type:"country",label:"France",data:"fr",children:[{key:"0_1_0",type:"country",label:"France",data:"fr"},{key:"0_1_1",type:"country",label:"Morocco",data:"ma"}]}]},code:{basic:`<OrganizationChart :value="data" collapsible>
    <template #country="slotProps">
        <div class="flex flex-column align-items-center">
            <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`w-2rem shadow-2 flag flag-\${slotProps.node.data}\`" />
            <div class="mt-3 font-medium text-lg">{{ slotProps.node.label }}</div>
        </div>
    </template>
    <template #default="slotProps">
        <span>{{slotProps.node.data.label}}</span>
    </template>
</OrganizationChart>`,options:`<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #country="slotProps">
                <div class="flex flex-column align-items-center">
                    <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`w-2rem shadow-2 flag flag-\${slotProps.node.data}\`" />
                    <div class="mt-3 font-medium text-lg">{{ slotProps.node.label }}</div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{slotProps.node.data.label}}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                key: '0',
                type: 'country',
                label: 'Argentina',
                data: 'ar',
                children: [
                    {
                        key: '0_0',
                        type: 'country',
                        label: 'Argentina',
                        data: 'ar',
                        children: [
                            {
                                key: '0_0_0',
                                type: 'country',
                                label: 'Argentina',
                                data: 'ar'
                            },
                            {
                                key: '0_0_1',
                                type: 'country',
                                label: 'Croatia',
                                data: 'hr'
                            }
                        ]
                    },
                    {
                        key: '0_1',
                        type: 'country',
                        label: 'France',
                        data: 'fr',
                        children: [
                            {
                                key: '0_1_0',
                                type: 'country',
                                label: 'France',
                                data: 'fr'
                            },
                            {
                                key: '0_1_1',
                                type: 'country',
                                label: 'Morocco',
                                data: 'ma'
                            }
                        ]
                    }
                ]
            }
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #country="slotProps">
                <div class="flex flex-column align-items-center">
                    <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`w-2rem shadow-2 flag flag-\${slotProps.node.data}\`" />
                    <div class="mt-3 font-medium text-lg">{{ slotProps.node.label }}</div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{slotProps.node.data.label}}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    key: '0',
    type: 'country',
    label: 'Argentina',
    data: 'ar',
    children: [
        {
            key: '0_0',
            type: 'country',
            label: 'Argentina',
            data: 'ar',
            children: [
                {
                    key: '0_0_0',
                    type: 'country',
                    label: 'Argentina',
                    data: 'ar'
                },
                {
                    key: '0_0_1',
                    type: 'country',
                    label: 'Croatia',
                    data: 'hr'
                }
            ]
        },
        {
            key: '0_1',
            type: 'country',
            label: 'France',
            data: 'fr',
            children: [
                {
                    key: '0_1_0',
                    type: 'country',
                    label: 'France',
                    data: 'fr'
                },
                {
                    key: '0_1_1',
                    type: 'country',
                    label: 'Morocco',
                    data: 'ma'
                }
            ]
        }
    ]
});
<\/script>`}}}},ge=e("p",null,[c("The "),e("i",null,"type"),c(" property of an OrganizationChartNode is used to map a template to a node. If it is undefined, the default template is used.")],-1),he={class:"card overflow-x-auto"},be={class:"flex flex-column align-items-center"},_e=["alt"],fe={class:"mt-3 font-medium text-lg"};function ye(o,d,i,f,t,y){const l=h,r=w("OrganizationChart"),u=C;return m(),b(_,null,[n(l,v(x(o.$attrs)),{default:s(()=>[ge]),_:1},16),e("div",he,[n(r,{value:t.data,collapsible:""},{country:s(a=>[e("div",be,[e("img",{alt:a.node.label,src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:z(`w-2rem shadow-2 flag flag-${a.node.data}`)},null,10,_e),e("div",fe,g(a.node.label),1)])]),default:s(a=>[e("span",null,g(a.node.data.label),1)]),_:1},8,["value"])]),n(u,{code:t.code},null,8,["code"])],64)}const ve=p(ue,[["render",ye]]),xe={data(){return{data:{label:"Argentina",children:[{label:"Argentina",children:[{label:"Argentina"},{label:"Croatia"}]},{label:"France",children:[{label:"France"},{label:"Morocco"}]}]},code:{basic:`<OrganizationChart
    :value="data"
    collapsible
    :pt="{
        node: ({ context }) => ({
            class: context.toggleable ? 'border-orange-400 border-round-sm' : 'border-teal-400 border-round-sm'
        })
    }"
>
    <template #default="slotProps">
        <span>{{ slotProps.node.label }}</span>
    </template>
</OrganizationChart>`,options:`<template>
    <div class="card overflow-x-auto">
        <OrganizationChart
            :value="data"
            collapsible
            :pt="{
                node: ({ context }) => ({
                    class: context.toggleable ? 'border-orange-400 border-round-sm' : 'border-teal-400 border-round-sm'
                })
            }"
        >
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                label: 'Argentina',
                children: [
                    {
                        label: 'Argentina',
                        children: [
                            {
                                label: 'Argentina'
                            },
                            {
                                label: 'Croatia'
                            }
                        ]
                    },
                    {
                        label: 'France',
                        children: [
                            {
                                label: 'France'
                            },
                            {
                                label: 'Morocco'
                            }
                        ]
                    }
                ]
            }
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card overflow-x-auto">
        <OrganizationChart
            :value="data"
            collapsible
            :pt="{
                node: ({ context }) => ({
                    class: context.toggleable ? 'border-orange-400 border-round-sm' : 'border-teal-400 border-round-sm'
                })
            }"
        >
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    label: 'Argentina',
    children: [
        {
            label: 'Argentina',
            children: [
                {
                    label: 'Argentina'
                },
                {
                    label: 'Croatia'
                }
            ]
        },
        {
            label: 'France',
            children: [
                {
                    label: 'France'
                },
                {
                    label: 'Morocco'
                }
            ]
        }
    ]
});
<\/script>`}}}},Ce={class:"card overflow-x-auto"};function we(o,d,i,f,t,y){const l=h,r=w("OrganizationChart"),u=C;return m(),b(_,null,[n(l,v(x(o.$attrs)),null,16),e("div",Ce,[n(r,{value:t.data,collapsible:"",pt:{node:({context:a})=>({class:a.toggleable?"border-orange-400 border-round-sm":"border-teal-400 border-round-sm"})}},{default:s(a=>[e("span",null,g(a.node.label),1)]),_:1},8,["value","pt"])]),n(u,{code:t.code},null,8,["code"])],64)}const $e=p(xe,[["render",we]]),ke={},Pe=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/orgchart.jpg"})],-1);function Oe(o,d){const i=h;return m(),b(_,null,[n(i,v(x(o.$attrs)),{default:s(()=>[e("p",null,g(o.$attrs.description),1)]),_:1},16),Pe],64)}const ze=p(ke,[["render",Oe]]),De={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ze},{id:"pt.doc.organizationchart",label:"OrganizationChart PT Options",component:D,data:A("OrganizationChart")},{id:"pt.demo",label:"Demo",component:$e}]}}},Se={class:"doc-main"},Te=e("div",{class:"doc-intro"},[e("h1",null,"OrganizationChart Pass Through")],-1);function Ae(o,d,i,f,t,y){const l=k,r=P;return m(),b(_,null,[e("div",Se,[Te,n(l,{docs:t.docs},null,8,["docs"])]),n(r,{docs:t.docs},null,8,["docs"])],64)}const Me=p(De,[["render",Ae]]),Fe={},Ee=e("p",null,"List of class names used in the styled mode.",-1),Ue=S('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-organizationchart</td><td>Container element.</td></tr><tr><td>p-organizationchart-table</td><td>Table container of a node.</td></tr><tr><td>p-organizationchart-lines</td><td>Connector lines container.</td></tr><tr><td>p-organizationchart-nodes</td><td>Contained of node children.</td></tr><tr><td>p-organizationchart-line-right</td><td>Right side line of a node connector.</td></tr><tr><td>p-organizationchart-line-left</td><td>Left side line of a node connector.</td></tr><tr><td>p-organizationchart-line-top</td><td>Top side line of a node connector.</td></tr></tbody></table></div>',1);function Ne(o,d){const i=h;return m(),b(_,null,[n(i,v(x(o.$attrs)),{default:s(()=>[Ee]),_:1},16),Ue],64)}const Ie=p(Fe,[["render",Ne]]),Ke={data(){return{code1:{basic:`
export default {
    organizationchart: {
        table: 'mx-auto my-0 border-spacing-0 border-separate',
        cell: 'text-center align-top py-0 px-3',
        node: {
            class: [
                'relative inline-block bg-white border border-gray-300 text-gray-600 p-5',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' // Dark Mode
            ]
        },
        linecell: 'text-center align-top py-0 px-3',
        linedown: {
            class: [
                'mx-auto my-0 w-px h-[20px] bg-gray-300',
                'dark:bg-blue-900/40' //Dark Mode
            ]
        },
        lineleft: ({ context }) => ({
            class: [
                'text-center align-top py-0 px-3 rounded-none border-r border-gray-300',
                'dark:border-blue-900/40', //Dark Mode
                {
                    'border-t': context.lineTop
                }
            ]
        }),
        lineright: ({ context }) => ({
            class: [
                'text-center align-top py-0 px-3 rounded-none',
                'dark:border-blue-900/40', //Dark Mode
                {
                    'border-t border-gray-300': context.lineTop
                }
            ]
        }),
        nodecell: 'text-center align-top py-0 px-3',
        nodetoggler: {
            class: [
                'absolute bottom-[-0.75rem] left-2/4 -ml-3 w-6 h-6 bg-inherit text-inherit rounded-full z-2 cursor-pointer no-underline select-none',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]' // Focus styles
            ]
        },
        nodetogglericon: 'relative inline-block w-4 h-4'
    }
}
`},code2:{composition:`<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #country="slotProps">
                <div class="flex flex-col items-center">
                    <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`w-8 shadow-md flag flag-\${slotProps.node.data}\`" />
                    <div class="mt-3 font-medium text-lg">{{ slotProps.node.label }}</div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{slotProps.node.data.label}}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    key: '0',
    type: 'country',
    label: 'Argentina',
    data: 'ar',
    children: [
        {
            key: '0_0',
            type: 'country',
            label: 'Argentina',
            data: 'ar',
            children: [
                {
                    key: '0_0_0',
                    type: 'country',
                    label: 'Argentina',
                    data: 'ar'
                },
                {
                    key: '0_0_1',
                    type: 'country',
                    label: 'Croatia',
                    data: 'hr'
                }
            ]
        },
        {
            key: '0_1',
            type: 'country',
            label: 'France',
            data: 'fr',
            children: [
                {
                    key: '0_1_0',
                    type: 'country',
                    label: 'France',
                    data: 'fr'
                },
                {
                    key: '0_1_1',
                    type: 'country',
                    label: 'Morocco',
                    data: 'ma'
                }
            ]
        }
    ]
});
<\/script>`}}}},Be=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ve(o,d,i,f,t,y){const l=M,r=C,u=h;return m(),$(u,v(x(o.$attrs)),{default:s(()=>[e("p",null,[c(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(l,{to:"/tailwind"},{default:s(()=>[c("Tailwind Customization")]),_:1}),c(" section for an example. ")]),n(r,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Be,n(r,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const Xe=p(Ke,[["render",Ve]]),Le={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ie},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Xe}]}]}}},Re={class:"doc-main"},je=e("div",{class:"doc-intro"},[e("h1",null,"OrganizationChart Theming")],-1);function qe(o,d,i,f,t,y){const l=k,r=P;return m(),b(_,null,[e("div",Re,[je,n(l,{docs:t.docs},null,8,["docs"])]),n(r,{docs:t.docs},null,8,["docs"])],64)}const We=p(Le,[["render",qe]]),Ge={data(){return{docs:[{id:"import",label:"Import",component:ne},{id:"basic",label:"Basic",component:j},{id:"template",label:"Template",component:ve},{id:"selection",label:"Selection",component:me},{id:"colored",label:"Colored",component:ee},{id:"accessibility",label:"Accessibility",component:B}],ptComponent:Me,themingDoc:We}}};function He(o,d,i,f,t,y){const l=T;return m(),$(l,{title:"Vue Organization Chart Component",header:"OrganizationChart",description:"OrganizationChart visualizes hierarchical organization data.",componentDocs:t.docs,apiDocs:["OrganizationChart"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ze=p(Ge,[["render",He]]);export{Ze as default};
