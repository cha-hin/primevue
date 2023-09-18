import{_ as m,o as l,e as M,w as u,m as S,b as e,f as o,h as v,j as x,c as h,a as n,n as c,g as d,F as g,p as $,t as C,E as j,D as N,k as U,l as A,v as P,x as I}from"./entry.68beb385.js";import{g as O}from"./PTHelper.11558b27.js";import{_ as B}from"./PrimeVueNuxtLink.f51d0c80.js";const V={},L=e("h3",null,"Screen Reader",-1),R=e("p",null,[o(" Menu component uses the "),e("i",null,"menu"),o(" role and the value to describe the menu can either be provided with "),e("i",null,"aria-labelledby"),o(" or "),e("i",null,"aria-label"),o(" props. Each list item has a "),e("i",null,"menuitem"),o(" role with "),e("i",null,"aria-label"),o(" referring to the label of the item and "),e("i",null,"aria-disabled"),o(" defined if the item is disabled. ")],-1),E=e("p",null,[o("In popup mode, the component implicitly manages the "),e("i",null,"aria-expanded"),o(", "),e("i",null,"aria-haspopup"),o(" and "),e("i",null,"aria-controls"),o(" attributes of the target element to define the relation between the target and the popup.")],-1),W=e("h3",null,"Keyboard Support",-1),H=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),o(" + "),e("i",null,"tab")]),e("td",null,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"If menu is in overlay mode, popup gets closes and focus moves to target.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next menuitem.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous menuitem.")]),e("tr",null,[e("td",null,[e("i",null,"alt"),o(" + "),e("i",null,"up arrow")]),e("td",null,"If menu is in overlay mode, popup gets closes and focus moves to the target.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first menuitem.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last menuitem.")])])])],-1);function z(s,p){const r=v;return l(),M(r,S({id:"accessibility",label:"Accessibility"},s.$attrs),{default:u(()=>[L,R,E,W,H]),_:1},16)}const q=m(V,[["render",z]]),F={data(){return{items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Delete",icon:"pi pi-fw pi-trash"}],code:{basic:'<Menu :model="items" />',options:`<template>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'New', icon: 'pi pi-fw pi-plus' },
                { label: 'Delete', icon: 'pi pi-fw pi-trash' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { label: 'New', icon: 'pi pi-fw pi-plus' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' }
]);
<\/script>`}}}},G=e("p",null,[o("Menu requires a collection of menuitems as its "),e("i",null,"model"),o(".")],-1),K={class:"card flex justify-content-center"};function J(s,p,r,y,t,f){const a=v,i=x("Menu"),b=$;return l(),h(g,null,[n(a,c(d(s.$attrs)),{default:u(()=>[G]),_:1},16),e("div",K,[n(i,{model:t.items},null,8,["model"])]),n(b,{code:t.code},null,8,["code"])],64)}const Q=m(F,[["render",J]]),X={data(){return{items:[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}}]}],code:{basic:`<Menu :model="items" />
<Toast />`,options:`<template>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
        <Toast />
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
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Menu :model="items" />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
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
    }
]);
<\/script>`}}}},Y=e("p",null,[o("Menu supports one level of nesting by defining children with "),e("i",null,"items"),o(" property.")],-1),Z={class:"card flex justify-content-center"};function ee(s,p,r,y,t,f){const a=v,i=x("Menu"),b=$;return l(),h(g,null,[n(a,c(d(s.$attrs)),{default:u(()=>[Y]),_:1},16),e("div",Z,[n(i,{model:t.items},null,8,["model"])]),n(b,{code:t.code},null,8,["code"])],64)}const te=m(X,[["render",ee]]),oe={data(){return{code:{basic:"import Menu from 'primevue/menu';"}}}};function ne(s,p,r,y,t,f){const a=v,i=$;return l(),h(g,null,[n(a,c(d(s.$attrs)),null,16),n(i,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const se=m(oe,[["render",ne]]),ae={data(){return{items:[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}}]}],code:{basic:`<Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
<Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
<Toast />`,options:`<template>
    <div class="card flex justify-content-center">
        <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        <Toast />
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
                }
            ]
        };
    },
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
        save() {
            this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
        }
    },
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const menu = ref();
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
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

const save = () => {
    toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});
};
<\/script>`}}},methods:{toggle(s){this.$refs.menu.toggle(s)},save(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}}},ie=e("p",null,[o("Popup mode is enabled by adding "),e("i",null,"popup"),o(" property and calling "),e("i",null,"toggle"),o(" method with an event of the target.")],-1),le={class:"card flex justify-content-center"};function re(s,p,r,y,t,f){const a=v,i=x("Button"),b=x("Menu"),w=$;return l(),h(g,null,[n(a,c(d(s.$attrs)),{default:u(()=>[ie]),_:1},16),e("div",le,[n(i,{type:"button",label:"Toggle",onClick:f.toggle,"aria-haspopup":"true","aria-controls":"overlay_menu"},null,8,["onClick"]),n(b,{ref:"menu",id:"overlay_menu",model:t.items,popup:!0},null,8,["model"])]),n(w,{code:t.code},null,8,["code"])],64)}const ce=m(ae,[["render",re]]),de={data(){return{items:[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}}]},{label:"Navigate",items:[{label:"Vue Website",icon:"pi pi-external-link",url:"https://vuejs.org/",target:"_blank"},{label:"Upload",icon:"pi pi-upload",route:"/fileupload"}]}],code:{basic:`<Menu :model="items">
    <template #item="{ label, item, props }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
        </a>
    </template>
</Menu>`,options:`<template>
    <div class="card flex justify-content-center">
        <Menu :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </Menu>
        <Toast />
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
                            url: 'https://vuejs.org/',
                            target: '_blank',
                        },
                        {
                            label: 'Upload',
                            icon: 'pi pi-upload',
                            route: '/fileupload'
                        }
                    ]
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Menu :model="items">
            <template #item="{ label, item, props }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </template>
        </Menu>
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref(items: [
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
                url: 'https://vuejs.org/',
                target: '_blank',
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                route: '/fileupload'
            }
        ]
    }
]);
<\/script>`}}}},pe=e("p",null,[o(" Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as "),e("i",null,"NuxtLink"),o(" or "),e("i",null,"router-link"),o(". Here is an example with vue-router. ")],-1),ue={class:"card flex justify-content-center"},me=["href"],fe=["href","target"];function be(s,p,r,y,t,f){const a=v,i=x("router-link"),b=x("Menu"),w=$;return l(),h(g,null,[n(a,c(d(s.$attrs)),{default:u(()=>[pe]),_:1},16),e("div",ue,[n(b,{model:t.items},{item:u(({label:k,item:_,props:D})=>[_.route?(l(),M(i,{key:0,to:_.route,custom:""},{default:u(T=>[e("a",S({href:T.href},D.action),[e("span",c(d(D.icon)),null,16),e("span",c(d(D.label)),C(k),17)],16,me)]),_:2},1032,["to"])):(l(),h("a",S({key:1,href:_.url,target:_.target},D.action),[e("span",c(d(D.icon)),null,16),e("span",c(d(D.label)),C(k),17)],16,fe))]),_:1},8,["model"])]),n(w,{code:t.code},null,8,["code"])],64)}const he=m(de,[["render",be]]),_e={data(){return{items:[{separator:!0},{label:"Profile",icon:"pi pi-fw pi-user"},{label:"Settings",icon:"pi pi-fw pi-cog",badge:2},{separator:!0}],code:{basic:`<Menu :model="items">
    <template #start>
        <button @click="profileClick" class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
            <div class="flex flex-column align">
                <span class="font-bold">Amy Elsner</span>
                <span class="text-sm">Agent</span>
            </div>
        </button>
    </template>
    <template #item="{ item, label, props }">
        <a class="flex" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
            <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
        </a>
    </template>
    <template #end>
        <button class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround">
            <i class="pi pi-sign-out" />
            <span class="ml-2">Log Out</span>
        </button>
    </template>
</Menu>`,options:`<template>
    <div class="card flex justify-content-center">
        <Menu :model="items">
            <template #start>
                <button @click="profileClick" class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
                    <div class="flex flex-column align">
                        <span class="font-bold">Amy Elsner</span>
                        <span class="text-sm">Agent</span>
                    </div>
                </button>
            </template>
            <template #item="{ item, label, props }">
                <a class="flex" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                </a>
            </template>
            <template #end>
                <button class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround">
                    <i class="pi pi-sign-out" />
                    <span class="ml-2">Log Out</span>
                </button>
            </template>
        </Menu>
        <Toast />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { separator: true },
                {
                    label: 'Profile',
                    icon: 'pi pi-fw pi-user'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    badge: 2
                },
                { separator: true }
            ]
        };
    },
    methods: {
        profileClick() {
            this.toast.add({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Menu :model="items">
            <template #start>
                <button @click="profileClick" class="w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
                    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="mr-2" shape="circle" />
                    <div class="flex flex-column align">
                        <span class="font-bold">Amy Elsner</span>
                        <span class="text-sm">Agent</span>
                    </div>
                </button>
            </template>
            <template #item="{ item, label, props }">
                <a class="flex" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
                </a>
            </template>
            <template #end>
                <button class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround">
                    <i class="pi pi-sign-out" />
                    <span class="ml-2">Log Out</span>
                </button>
            </template>
        </Menu>
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const items = ref([
    { separator: true },
    {
        label: 'Profile',
        icon: 'pi pi-fw pi-user'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        badge: 2
    },
    { separator: true }
]);

const toast = useToast();

const profileClick = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
}
<\/script>`}}},methods:{profileClick(){this.toast.add({severity:"info",summary:"Info",detail:"Item Selected",life:3e3})}}},ve=e("p",null,[o(" Menu offers item customization with the "),e("i",null,"item"),o(" template that receives the menuitem instance from the model as a parameter. When item templating is used, it is suggested to bind the "),e("i",null,"action"),o(" prop from the slot props to handle accessibility and pass through attributes. Additionally, two slots named "),e("i",null,"start"),o(" and "),e("i",null,"end"),o(" are provided to embed content before or after the menu. ")],-1),ge={class:"card flex justify-content-center"},ye=e("div",{class:"flex flex-column align"},[e("span",{class:"font-bold"},"Amy Elsner"),e("span",{class:"text-sm"},"Agent")],-1),xe=e("button",{class:"w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround"},[e("i",{class:"pi pi-sign-out"}),e("span",{class:"ml-2"},"Log Out")],-1);function De(s,p,r,y,t,f){const a=v,i=x("Avatar"),b=x("Badge"),w=x("Menu"),k=$;return l(),h(g,null,[n(a,c(d(s.$attrs)),{default:u(()=>[ve]),_:1},16),e("div",ge,[n(w,{model:t.items},{start:u(()=>[e("button",{onClick:p[0]||(p[0]=(..._)=>f.profileClick&&f.profileClick(..._)),class:"w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround"},[n(i,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",class:"mr-2",shape:"circle"}),ye])]),item:u(({item:_,label:D,props:T})=>[e("a",S({class:"flex"},T.action),[e("span",c(d(T.icon)),null,16),e("span",c(d(T.label)),C(D),17),_.badge?(l(),M(b,{key:0,class:"ml-auto",value:_.badge},null,8,["value"])):j("",!0)],16)]),end:u(()=>[xe]),_:1},8,["model"])]),n(k,{code:t.code},null,8,["code"])],64)}const $e=m(_e,[["render",De]]),we={data(){return{items:[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{this.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}}]},{label:"Navigate",items:[{label:"Vue Website",icon:"pi pi-external-link",url:"https://vuejs.org/"},{label:"Router",icon:"pi pi-upload",to:"/fileupload"}]}],code:{basic:`<Menu
    :model="items"
    :pt="{
        submenuHeader: { class: 'text-surface-900' },
        action: ({ props, state, context }) => ({
            class: context.focused ? 'bg-primary-400' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Menu
            :model="items"
            :pt="{
                submenuHeader: { class: 'text-surface-900' },
                action: ({ props, state, context }) => ({
                    class: context.focused ? 'bg-primary-400' : undefined
                })
            }"
        />
        <Toast />
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
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Menu
            :model="items"
            :pt="{
                submenuHeader: { class: 'text-surface-900' },
                action: ({ props, state, context }) => ({
                    class: context.focused ? 'bg-primary-400' : undefined
                })
            }"
        />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
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
<\/script>`}}}},ke={class:"card flex justify-content-center"};function Te(s,p,r,y,t,f){const a=v,i=x("Menu"),b=$;return l(),h(g,null,[n(a,c(d(s.$attrs)),null,16),e("div",ke,[n(i,{model:t.items,pt:{submenuHeader:{class:"text-surface-900"},action:({props:w,state:k,context:_})=>({class:_.focused?"bg-primary-400":void 0})}},null,8,["model","pt"])]),n(b,{code:t.code},null,8,["code"])],64)}const Me=m(we,[["render",Te]]),Se={},Ce=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/menu.jpg"})],-1);function Ue(s,p){const r=v;return l(),h(g,null,[n(r,c(d(s.$attrs)),{default:u(()=>[e("p",null,C(s.$attrs.description),1)]),_:1},16),Ce],64)}const Ae=m(Se,[["render",Ue]]),je={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ae},{id:"pt.doc.menu",label:"Menu PT Options",component:N,data:O("Menu")},{id:"pt.demo",label:"Demo",component:Me}]}}},Ne={class:"doc-main"},Pe=e("div",{class:"doc-intro"},[e("h1",null,"Menu Pass Through")],-1);function Ie(s,p,r,y,t,f){const a=U,i=A;return l(),h(g,null,[e("div",Ne,[Pe,n(a,{docs:t.docs},null,8,["docs"])]),n(i,{docs:t.docs},null,8,["docs"])],64)}const Oe=m(je,[["render",Ie]]),Be={},Ve=e("p",null,"List of class names used in the styled mode.",-1),Le=P('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-menu</td><td>Container element.</td></tr><tr><td>p-menu-start</td><td>Container of the start slot.</td></tr><tr><td>p-menu-end</td><td>Container of the end slot.</td></tr><tr><td>p-menu-list</td><td>List element.</td></tr><tr><td>p-submenu-header</td><td>Header of the submenu list element.</td></tr><tr><td>p-menuitem</td><td>Menuitem element.</td></tr><tr><td>p-menuitem-active</td><td>Active menuitem element.</td></tr><tr><td>p-menuitem-content</td><td>Content of menuitem.</td></tr><tr><td>p-menuitem-link</td><td>Link element of the menuitem.</td></tr><tr><td>p-menuitem-text</td><td>Label of a menuitem.</td></tr><tr><td>p-menuitem-icon</td><td>Icon of a menuitem.</td></tr></tbody></table></div>',1);function Re(s,p){const r=v;return l(),h(g,null,[n(r,c(d(s.$attrs)),{default:u(()=>[Ve]),_:1},16),Le],64)}const Ee=m(Be,[["render",Re]]),We={data(){return{code1:{basic:`
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    menu: {
        root: 'py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border border-gray-300 dark:border-blue-900/40 rounded-md w-48',
        menu: {
            class: ['m-0 p-0 list-none', 'outline-none']
        },
        content: ({ context }) => ({
            class: [
                'text-gray-700 dark:text-white/80 transition-shadow duration-200 rounded-none',
                'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80', // Hover
                {
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused
                }
            ]
        }),
        action: {
            class: ['text-gray-700 dark:text-white/80 py-3 px-5 select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative']
        },
        icon: 'text-gray-600 dark:text-white/70 mr-2',
        submenuheader: {
            class: ['m-0 p-3 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-bold rounded-tl-none rounded-tr-none']
        },
        transition: TRANSITIONS.overlay
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Menu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    { label: 'New', icon: 'pi pi-fw pi-plus' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' }
]);
<\/script>`}}}},He=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function ze(s,p,r,y,t,f){const a=B,i=$,b=v;return l(),M(b,c(d(s.$attrs)),{default:u(()=>[e("p",null,[o(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(a,{to:"/tailwind"},{default:u(()=>[o("Tailwind Customization")]),_:1}),o(" section for an example. ")]),n(i,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),He,n(i,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const qe=m(We,[["render",ze]]),Fe={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ee},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:qe}]}]}}},Ge={class:"doc-main"},Ke=e("div",{class:"doc-intro"},[e("h1",null,"Menu Theming")],-1);function Je(s,p,r,y,t,f){const a=U,i=A;return l(),h(g,null,[e("div",Ge,[Ke,n(a,{docs:t.docs},null,8,["docs"])]),n(i,{docs:t.docs},null,8,["docs"])],64)}const Qe=m(Fe,[["render",Je]]),Xe={data(){return{docs:[{id:"import",label:"Import",component:se},{id:"basic",label:"Basic",component:Q},{id:"group",label:"Group",component:te},{id:"popup",label:"Popup",component:ce},{id:"template",label:"Template",component:$e},{id:"router",label:"Router",component:he},{id:"accessibility",label:"Accessibility",component:q}],ptComponent:Oe,themingDoc:Qe}}};function Ye(s,p,r,y,t,f){const a=I;return l(),M(a,{title:"Vue Menu Component",header:"Menu",description:"Menu is a navigation/command component that supports dynamic and static positioning.",componentDocs:t.docs,apiDocs:["Menu","MenuItem"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ot=m(Xe,[["render",Ye]]);export{ot as default};
