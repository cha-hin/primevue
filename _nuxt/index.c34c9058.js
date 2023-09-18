import{_ as d,o as r,e as D,w as f,m as R,b as e,f as n,h as w,j as $,c as b,a as o,n as u,g as m,F as g,p as k,t as S,D as L,k as M,l as I,v as j,x as E}from"./entry.68beb385.js";import{g as N}from"./PTHelper.11558b27.js";import{_ as V}from"./PrimeVueNuxtLink.f51d0c80.js";const P={},F=e("h3",null,"Screen Reader",-1),A=e("p",null,[n(" ContextMenu component uses the "),e("i",null,"menubar"),n(" role with "),e("i",null,"aria-orientation"),n(' set to "vertical" and the value to describe the menu can either be provided with '),e("i",null,"aria-labelledby"),n(" or "),e("i",null,"aria-label"),n(" props. Each list item has a "),e("i",null,"menuitem"),n(" role with "),e("i",null,"aria-label"),n(" referring to the label of the item and "),e("i",null,"aria-disabled"),n(" defined if the item is disabled. A submenu within a ContextMenu uses the "),e("i",null,"menu"),n(" role with an "),e("i",null,"aria-labelledby"),n(" defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have "),e("i",null,"aria-haspopup"),n(", "),e("i",null,"aria-expanded"),n(" and "),e("i",null,"aria-controls"),n(" to define the relation between the item and the submenu. ")],-1),B=e("h3",null,"Keyboard Support",-1),U=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"When focus is in the menu, closes the context menu and moves focus to the next focusable element in the page sequence.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the context menu.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"If focus is not inside the menu and menu is open, add focus to the first item. If an item is already focused, moves focus to the next menuitem within the submenu.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"If focus is not inside the menu and menu is open, add focus to the last item. If an item is already focused, moves focus to the next menuitem within the submenu.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Opens a submenu if there is one available and moves focus to the first item.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Closes a submenu and moves focus to the root item of the closed submenu.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first menuitem within the submenu.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last menuitem within the submenu.")]),e("tr",null,[e("td",null,[e("i",null,"any printable character")]),e("td",null,"Moves focus to the menuitem whose label starts with the characters being typed.")])])])],-1);function J(i,l){const s=w;return r(),D(s,R({id:"accessibility",label:"Accessibility"},i.$attrs),{default:f(()=>[F,A,B,U]),_:1},16)}const Q=d(P,[["render",J]]),z={data(){return{items:[{label:"View",icon:"pi pi-fw pi-search"},{label:"Delete",icon:"pi pi-fw pi-trash"}],code:{basic:`<img alt="Logo" src="/images/nature/nature3.jpg" class="w-full md:w-auto" @contextmenu="onImageRightClick" aria-haspopup="true" />
<ContextMenu ref="menu" :model="items" />`,options:`<template>
    <div class="card flex md:justify-content-center">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="w-full md:w-auto" aria-haspopup="true" />
        <ContextMenu ref="menu" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'View', icon: 'pi pi-fw pi-search' },
                { label: 'Delete', icon: 'pi pi-fw pi-trash' }
            ]
        };
    },
    methods: {
        onImageRightClick(event) {
            this.$refs.menu.show(event);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="w-full md:w-auto" aria-haspopup="true" />
        <ContextMenu ref="menu" :model="items" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();
const items = ref([
    { label: 'View', icon: 'pi pi-fw pi-search' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' }
]);

const onImageRightClick = (event) => {
    menu.value.show(event);
};

<\/script>`}}},methods:{onImageRightClick(i){this.$refs.menu.show(i)}}},q=e("p",null,[n("ContextMenu requires a collection of menuitems as its "),e("i",null,"model"),n(" and the "),e("i",null,"show"),n(" method needs to be called explicity using the "),e("i",null,"contextmenu"),n(" event of the target to display the menu.")],-1),O={class:"card flex md:justify-content-center"};function H(i,l,s,_,t,c){const a=w,p=$("ContextMenu"),h=k;return r(),b(g,null,[o(a,u(m(i.$attrs)),{default:f(()=>[q]),_:1},16),e("div",O,[e("img",{alt:"Logo",src:"https://primefaces.org/cdn/primevue/images/nature/nature3.jpg",class:"w-full md:w-auto",onContextmenu:l[0]||(l[0]=(...v)=>c.onImageRightClick&&c.onImageRightClick(...v)),"aria-haspopup":"true"},null,32),o(p,{ref:"menu",model:t.items},null,8,["model"])]),o(h,{code:t.code},null,8,["code"])],64)}const K=d(z,[["render",H]]),W={data(){return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-power-off"}],code:{basic:`<p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
<ContextMenu global :model="items" />`,options:`<template>
    <div class="card text-center">
        <p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
        <ContextMenu global :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'File',
                    icon: 'pi pi-fw pi-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [
                                {
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                }
                            ]
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus'
                        },
                        {
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [
                                {
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [
                                        {
                                            label: 'Print',
                                            icon: 'pi pi-fw pi-print'
                                        }
                                    ]
                                },
                                {
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [
                                {
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            label: 'Archieve',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [
                                {
                                    label: 'Remove',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        }
                    ]
                },
                {
                    separator: true
                },
                {
                    label: 'Quit',
                    icon: 'pi pi-fw pi-power-off'
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card text-center">
        <p class="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
        <ContextMenu global :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    }
                ]
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-user-minus'
            },
            {
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                            {
                                label: 'Print',
                                icon: 'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                    }
                ]
            }
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archieve',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);
<\/script>`}}}},G=e("p",null,"Setting global property attaches the context menu to the document.",-1),X={class:"card text-center"},Y=e("p",{class:"mb-0"},"Right-Click anywhere on this page to view the global ContextMenu.",-1);function Z(i,l,s,_,t,c){const a=w,p=$("ContextMenu"),h=k;return r(),b(g,null,[o(a,u(m(i.$attrs)),{default:f(()=>[G]),_:1},16),e("div",X,[Y,o(p,{global:"",model:t.items},null,8,["model"])]),o(h,{code:t.code},null,8,["code"])],64)}const ee=d(W,[["render",Z]]),ie={data(){return{code:{basic:"import ContextMenu from 'primevue/contextmenu';"}}}};function te(i,l,s,_,t,c){const a=w,p=k;return r(),b(g,null,[o(a,u(m(i.$attrs)),null,16),o(p,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ne=d(ie,[["render",te]]),oe={data(){return{items:[{label:"View",icon:"pi pi-fw pi-search"},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Upload",icon:"pi pi-upload",route:"/fileupload"}],code:{basic:`<img alt="Logo" src="/images/nature/nature3.jpg" class="w-full md:w-auto" @contextmenu="onImageRightClick" aria-haspopup="true" />
<ContextMenu ref="routemenu" :model="items" />`,options:`<template>
    <div class="card flex md:justify-content-center">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="w-full md:w-auto" aria-haspopup="true" />
        <ContextMenu ref="routemenu" :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: 'View', icon: 'pi pi-fw pi-search' },
                { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    route: '/fileupload'
                }
            ]
        };
    },
    methods: {
        onImageRightClick(event) {
            this.$refs.routemenu.show(event);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="w-full md:w-auto" aria-haspopup="true" />
        <ContextMenu ref="routemenu" :model="items" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const routemenu = ref();
const items = ref([
    { label: 'View', icon: 'pi pi-fw pi-search' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        route: '/fileupload'
    }
]);

const onImageRightClick = (event) => {
    routemenu.value.show(event);
};

<\/script>`}}},methods:{onImageRightClick(i){this.$refs.routemenu.show(i)}}},le=e("p",null,[n(" Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as "),e("i",null,"NuxtLink"),n(" or "),e("i",null,"router-link"),n(". Here is an example with vue-router. ")],-1),ae={class:"card flex md:justify-content-center"},pe=["href"],se=["href","target"];function ce(i,l,s,_,t,c){const a=w,p=$("router-link"),h=$("ContextMenu"),v=k;return r(),b(g,null,[o(a,u(m(i.$attrs)),{default:f(()=>[le]),_:1},16),e("div",ae,[e("img",{alt:"Logo",src:"https://primefaces.org/cdn/primevue/images/nature/nature3.jpg",class:"w-full md:w-auto",onContextmenu:l[0]||(l[0]=(...y)=>c.onImageRightClick&&c.onImageRightClick(...y)),"aria-haspopup":"true"},null,32),o(h,{ref:"routemenu",model:t.items},{item:f(({label:y,item:x,props:C})=>[x.route?(r(),D(p,{key:0,to:x.route,custom:""},{default:f(T=>[e("a",R({href:T.href},C.action),[e("span",u(m(C.icon)),null,16),e("span",u(m(C.label)),S(y),17)],16,pe)]),_:2},1032,["to"])):(r(),b("a",R({key:1,href:x.url,target:x.target},C.action),[e("span",u(m(C.icon)),null,16),e("span",u(m(C.label)),S(y),17)],16,se))]),_:1},8,["model"])]),o(v,{code:t.code},null,8,["code"])],64)}const re=d(oe,[["render",ce]]),ue={data(){return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-power-off"}],code:{basic:`<img alt="Logo" src="/images/nature/nature3.jpg" class="w-full md:w-auto" @contextmenu="onImageRightClick" aria-haspopup="true" />
<ContextMenu
    ref="menu"
    :model="items"
    :pt="{
        action: ({ props, state, context }) => ({ class: context.active ? 'bg-primary-200' : context.focused ? 'bg-primary-300' : undefined })
    }"
/>`,options:`<template>
    <div class="card flex md:justify-content-center">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="w-full md:w-auto" aria-haspopup="true" />
        <ContextMenu
            ref="menu"
            :model="items"
            :pt="{
                action: ({ props, state, context }) => ({ class: context.active ? 'bg-primary-200' : context.focused ? 'bg-primary-300' : undefined })
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
                    label: 'File',
                    icon: 'pi pi-fw pi-file',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [
                                {
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                }
                            ]
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus'
                        },
                        {
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [
                                {
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [
                                        {
                                            label: 'Print',
                                            icon: 'pi pi-fw pi-print'
                                        }
                                    ]
                                },
                                {
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [
                                {
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            label: 'Archieve',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [
                                {
                                    label: 'Remove',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        }
                    ]
                },
                {
                    separator: true
                },
                {
                    label: 'Quit',
                    icon: 'pi pi-fw pi-power-off'
                }
            ]
        };
    },
    methods: {
        onImageRightClick(event) {
            this.$refs.menu.show(event);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="w-full md:w-auto" aria-haspopup="true" />
        <ContextMenu
            ref="menu"
            :model="items"
            :pt="{
                action: ({ props, state, context }) => ({ class: context.active ? 'bg-primary-200' : context.focused ? 'bg-primary-300' : undefined })
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();
const items = ref([
    {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    }
                ]
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-user-minus'
            },
            {
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                            {
                                label: 'Print',
                                icon: 'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                    }
                ]
            }
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archieve',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);

const onImageRightClick = (event) => {
    menu.value.show(event);
};

<\/script>`}}},methods:{onImageRightClick(i){this.$refs.menu.show(i)}}},me={class:"card flex md:justify-content-center"};function de(i,l,s,_,t,c){const a=w,p=$("ContextMenu"),h=k;return r(),b(g,null,[o(a,u(m(i.$attrs)),null,16),e("div",me,[e("img",{alt:"Logo",src:"https://primefaces.org/cdn/primevue/images/nature/nature3.jpg",class:"w-full md:w-auto",onContextmenu:l[0]||(l[0]=(...v)=>c.onImageRightClick&&c.onImageRightClick(...v)),"aria-haspopup":"true"},null,32),o(p,{ref:"menu",model:t.items,pt:{action:({props:v,state:y,context:x})=>({class:x.active?"bg-primary-200":x.focused?"bg-primary-300":void 0})}},null,8,["model","pt"])]),o(h,{code:t.code},null,8,["code"])],64)}const fe=d(ue,[["render",de]]),be={},he=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/contextmenu.jpg"})],-1);function we(i,l){const s=w;return r(),b(g,null,[o(s,u(m(i.$attrs)),{default:f(()=>[e("p",null,S(i.$attrs.description),1)]),_:1},16),he],64)}const ge=d(be,[["render",we]]),_e={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ge},{id:"pt.doc.contextmenu",label:"ContextMenu PT Options",component:L,data:N("ContextMenu")},{id:"pt.demo",label:"Demo",component:fe}]}}},xe={class:"doc-main"},ve=e("div",{class:"doc-intro"},[e("h1",null,"ContextMenu Pass Through")],-1);function Ce(i,l,s,_,t,c){const a=M,p=I;return r(),b(g,null,[e("div",xe,[ve,o(a,{docs:t.docs},null,8,["docs"])]),o(p,{docs:t.docs},null,8,["docs"])],64)}const ke=d(_e,[["render",Ce]]),ye={},$e=e("p",null,"List of class names used in the styled mode.",-1),De=j('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-contextmenu</td><td>Container element.</td></tr><tr><td>p-contextmenu-root-list</td><td>Root list element.</td></tr><tr><td>p-submenu-list</td><td>Submenu list element.</td></tr><tr><td>p-menuitem</td><td>Menuitem element.</td></tr><tr><td>p-menuitem-active</td><td>Active menuitem element.</td></tr><tr><td>p-menuitem-content</td><td>Content of menuitem.</td></tr><tr><td>p-menuitem-link</td><td>Link element of the menuitem.</td></tr><tr><td>p-menuitem-text</td><td>Label of a menuitem.</td></tr><tr><td>p-menuitem-icon</td><td>Icon of a menuitem.</td></tr><tr><td>p-submenu-icon</td><td>Arrow icon of a submenu.</td></tr></tbody></table></div>',1);function Re(i,l){const s=w;return r(),b(g,null,[o(s,u(m(i.$attrs)),{default:f(()=>[$e]),_:1},16),De],64)}const Se=d(ye,[["render",Re]]),Me={data(){return{code1:{basic:`
xport default {
    contextmenu: {
        root: 'py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-none shadow-md rounded-lg w-52',
        menu: {
            class: ['m-0 p-0 list-none', 'outline-none']
        },
        menuitem: 'relative',
        content: ({ context }) => ({
            class: [
                'transition-shadow duration-200 rounded-none',
                'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80', // Hover
                {
                    'text-gray-700': !context.focused && !context.active,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.active,
                    'bg-blue-500 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.active
                }
            ]
        }),
        action: {
            class: ['cursor-pointer flex items-center no-underline overflow-hidden relative', 'text-gray-700 dark:text-white/80 py-3 px-5 select-none']
        },
        icon: 'text-gray-600 dark:text-white/70 mr-2',
        label: 'text-gray-600 dark:text-white/70',
        transition: {
            enterFromClass: 'opacity-0',
            enterActiveClass: 'transition-opacity duration-250'
        }
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="w-full md:w-auto" aria-haspopup="true" />
        <ContextMenu ref="menu" :model="items" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();
const items = ref([
    { label: 'View', icon: 'pi pi-fw pi-search' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' }
]);

const onImageRightClick = (event) => {
    menu.value.show(event);
};

<\/script>`}}}},Ie=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Te(i,l,s,_,t,c){const a=V,p=k,h=w;return r(),D(h,u(m(i.$attrs)),{default:f(()=>[e("p",null,[n(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(a,{to:"/tailwind"},{default:f(()=>[n("Tailwind Customization")]),_:1}),n(" section for an example. ")]),o(p,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ie,o(p,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const Le=d(Me,[["render",Te]]),je={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Se},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Le}]}]}}},Ee={class:"doc-main"},Ne=e("div",{class:"doc-intro"},[e("h1",null,"ContextMenu Theming")],-1);function Ve(i,l,s,_,t,c){const a=M,p=I;return r(),b(g,null,[e("div",Ee,[Ne,o(a,{docs:t.docs},null,8,["docs"])]),o(p,{docs:t.docs},null,8,["docs"])],64)}const Pe=d(je,[["render",Ve]]),Fe={data(){return{docs:[{id:"import",label:"Import",component:ne},{id:"basic",label:"Basic",component:K},{id:"document",label:"Document",component:ee},{id:"router",label:"Router",component:re},{id:"accessibility",label:"Accessibility",component:Q}],ptComponent:ke,themingDoc:Pe}}};function Ae(i,l,s,_,t,c){const a=E;return r(),D(a,{title:"Vue ContextMenu Component",header:"ContextMenu",description:"ContextMenu displays an overlay menu on right click of its target.",componentDocs:t.docs,apiDocs:["ContextMenu","MenuItem"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Qe=d(Fe,[["render",Ae]]);export{Qe as default};
