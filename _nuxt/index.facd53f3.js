import{_ as d,j as y,o as r,e as M,w as c,b as i,f as e,a as l,m as D,h as _,c as b,n as a,g as s,F as x,p as $,t as E,D as F,k as N,l as L,v as A,x as B}from"./entry.68beb385.js";import{g as I}from"./PTHelper.11558b27.js";import{_ as U}from"./PrimeVueNuxtLink.f51d0c80.js";const V={},z=i("h3",null,"Screen Reader",-1),j=i("p",null,[e(" Menubar component uses the "),i("i",null,"menubar"),e(" role and the value to describe the menu can either be provided with "),i("i",null,"aria-labelledby"),e(" or "),i("i",null,"aria-label"),e(" props. Each list item has a "),i("i",null,"menuitem"),e(" role with "),i("i",null,"aria-label"),e(" referring to the label of the item and "),i("i",null,"aria-disabled"),e(" defined if the item is disabled. A submenu within a MenuBar uses the "),i("i",null,"menu"),e(" role with an "),i("i",null,"aria-labelledby"),e(" defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have "),i("i",null,"aria-haspopup"),e(", "),i("i",null,"aria-expanded"),e(" and "),i("i",null,"aria-controls"),e(" to define the relation between the item and the submenu. ")],-1),J=i("i",null,"button",-1),Q=i("i",null,"aria-haspopup",-1),q=i("i",null,"aria-expanded",-1),K=i("i",null,"aria-controls",-1),O=i("i",null,"aria-label",-1),H=i("i",null,"aria-labelledby",-1),W=i("i",null,"buttonProps",-1),G=i("i",null,"navigation",-1),X=i("i",null,"aria",-1),Y=i("i",null,"aria-label",-1),Z=i("h3",null,"Keyboard Support",-1),ii=i("div",{class:"doc-tablewrapper"},[i("table",{class:"doc-table"},[i("thead",null,[i("tr",null,[i("th",null,"Key"),i("th",null,"Function")])]),i("tbody",null,[i("tr",null,[i("td",null,[i("i",null,"tab")]),i("td",null,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence.")]),i("tr",null,[i("td",null,[i("i",null,"shift"),e(" + "),i("i",null,"tab")]),i("td",null,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence.")]),i("tr",null,[i("td",null,[i("i",null,"enter")]),i("td",null,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.")]),i("tr",null,[i("td",null,[i("i",null,"space")]),i("td",null,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.")]),i("tr",null,[i("td",null,[i("i",null,"escape")]),i("td",null,"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu.")]),i("tr",null,[i("td",null,[i("i",null,"down arrow")]),i("td",null,"If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu.")]),i("tr",null,[i("td",null,[i("i",null,"up arrow")]),i("td",null,"If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu.")]),i("tr",null,[i("td",null,[i("i",null,"right arrow")]),i("td",null,"If focus is on a root element, moves focus to the next menuitem otherwise opens a submenu if there is one available and moves focus to the first item.")]),i("tr",null,[i("td",null,[i("i",null,"left arrow")]),i("td",null,"If focus is on a root element, moves focus to the previous menuitem otherwise closes a submenu and moves focus to the root item of the closed submenu.")]),i("tr",null,[i("td",null,[i("i",null,"home")]),i("td",null,"Moves focus to the first menuitem within the submenu.")]),i("tr",null,[i("td",null,[i("i",null,"end")]),i("td",null,"Moves focus to the last menuitem within the submenu.")]),i("tr",null,[i("td",null,[i("i",null,"any printable character")]),i("td",null,"Moves focus to the menuitem whose label starts with the characters being typed.")])])])],-1);function ei(p,f){const u=y("router-link"),w=_;return r(),M(w,D({id:"accessibility",label:"Accessibility"},p.$attrs),{default:c(()=>[z,j,i("p",null,[e(" In mobile viewports, a menu icon appears with a "),J,e(" role along with "),Q,e(", "),q,e(" and "),K,e(" to manage the relation between the overlay menubar and the button. The value to describe the button can be defined "),O,e(" or "),H,e(" specified using "),W,e(", by default "),G,e(" key of the "),X,e(" property from the "),l(u,{to:"/configuration/#locale"},{default:c(()=>[e("locale")]),_:1}),e(" API as the "),Y,e(". ")]),Z,ii]),_:1},16)}const ti=d(V,[["render",ei]]),li={data(){return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit",icon:"pi pi-fw pi-power-off"}],code:{basic:'<Menubar :model="items" />',options:`<template>
    <div class="card relative z-2">
        <Menubar :model="items" />
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
                    label: 'Quit',
                    icon: 'pi pi-fw pi-power-off'
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card relative z-2">
        <Menubar :model="items" />
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
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);
<\/script>`}}}},pi=i("p",null,[e("Menubar requires a collection of menuitems as its "),i("i",null,"model"),e(".")],-1),ni={class:"card relative z-2"};function oi(p,f,u,w,t,k){const n=_,o=y("Menubar"),v=$;return r(),b(x,null,[l(n,a(s(p.$attrs)),{default:c(()=>[pi]),_:1},16),i("div",ni,[l(o,{model:t.items},null,8,["model"])]),l(v,{code:t.code},null,8,["code"])],64)}const ai=d(li,[["render",oi]]),si={data(){return{code:{basic:"import Menubar from 'primevue/menubar';"}}}};function ri(p,f,u,w,t,k){const n=_,o=$;return r(),b(x,null,[l(n,a(s(p.$attrs)),null,16),l(o,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ci=d(si,[["render",ri]]),ui={data(){return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Upload",icon:"pi pi-fw pi-upload",route:"/fileupload"},{label:"Quit",icon:"pi pi-fw pi-power-off"}],code:{basic:`<Menubar :model="items">
    <template #item="{ label, item, props, root, hasSubmenu }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
            <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
        </a>
    </template>
</Menubar>`,options:`<template>
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #item="{ label, item, props, root, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
                </a>
            </template>
        </Menubar>
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
                    label: 'Upload',
                    icon: 'pi pi-fw pi-upload',
                    route: '/fileupload'
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
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #item="{ label, item, props, root, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
                </a>
            </template>
        </Menubar>
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
        label: 'Upload',
        icon: 'pi pi-fw pi-upload',
        route: '/fileupload'
    },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);
<\/script>`}}}},mi=i("p",null,[e(" Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as "),i("i",null,"NuxtLink"),e(" or "),i("i",null,"router-link"),e(". Here is an example with vue-router. ")],-1),di={class:"card relative z-2"},fi=["href"],bi=["href","target"];function wi(p,f,u,w,t,k){const n=_,o=y("router-link"),v=y("Menubar"),C=$;return r(),b(x,null,[l(n,a(s(p.$attrs)),{default:c(()=>[mi]),_:1},16),i("div",di,[l(v,{model:t.items},{item:c(({label:S,item:h,props:m,root:g,hasSubmenu:T})=>[h.route?(r(),M(o,{key:0,to:h.route,custom:""},{default:c(P=>[i("a",D({href:P.href},m.action),[i("span",a(s(m.icon)),null,16),i("span",a(s(m.label)),E(S),17)],16,fi)]),_:2},1032,["to"])):(r(),b("a",D({key:1,href:h.url,target:h.target},m.action),[i("span",a(s(m.icon)),null,16),i("span",a(s(m.label)),E(S),17),i("span",D({class:[T&&(g?"pi pi-fw pi-angle-down":"pi pi-fw pi-angle-right")]},m.submenuicon),null,16)],16,bi))]),_:1},8,["model"])]),l(C,{code:t.code},null,8,["code"])],64)}const hi=d(ui,[["render",wi]]),vi={data(){return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Upload",icon:"pi pi-fw pi-upload",route:"/fileupload"},{label:"Quit",icon:"pi pi-fw pi-power-off"}],code:{basic:`<Menubar :model="items">
    <template #start>
        <img alt="logo" src="/images/logo.svg" height="40" class="mr-2" />
    </template>
    <template #item="{ label, item, props, root, hasSubmenu }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
            <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
        </a>
    </template>
    <template #end>
        <InputText placeholder="Search" type="text" />
    </template>
</Menubar>`,options:`<template>
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" height="40" class="mr-2" />
            </template>
            <template #item="{ label, item, props, root, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
                </a>
            </template>
            <template #end>
                <InputText placeholder="Search" type="text" />
            </template>
        </Menubar>
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
                    label: 'Upload',
                    icon: 'pi pi-fw pi-upload',
                    route: '/fileupload'
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
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" height="40" class="mr-2" />
            </template>
            <template #item="{ label, item, props, root, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && (root ? 'pi pi-fw pi-angle-down' : 'pi pi-fw pi-angle-right')]" v-bind="props.submenuicon" />
                </a>
            </template>
            <template #end>
                <InputText placeholder="Search" type="text" />
            </template>
        </Menubar>
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
                        label: 'List',
                        icon: 'pi pi-fw pi-bars'
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
        label: 'Upload',
        icon: 'pi pi-fw pi-upload',
        route: '/fileupload'
    },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);
<\/script>`}}}},gi=i("p",null,[e("Custom content can be placed inside the menubar using the "),i("i",null,"start"),e(" and "),i("i",null,"end"),e(" properties.")],-1),_i={class:"card relative z-2"},xi=i("img",{alt:"logo",src:"https://primefaces.org/cdn/primevue/images/logo.svg",height:"40",class:"mr-2"},null,-1),ki=["href"],yi=["href","target"];function Di(p,f,u,w,t,k){const n=_,o=y("router-link"),v=y("InputText"),C=y("Menubar"),S=$;return r(),b(x,null,[l(n,a(s(p.$attrs)),{default:c(()=>[gi]),_:1},16),i("div",_i,[l(C,{model:t.items},{start:c(()=>[xi]),item:c(({label:h,item:m,props:g,root:T,hasSubmenu:P})=>[m.route?(r(),M(o,{key:0,to:m.route,custom:""},{default:c(R=>[i("a",D({href:R.href},g.action),[i("span",a(s(g.icon)),null,16),i("span",a(s(g.label)),E(h),17)],16,ki)]),_:2},1032,["to"])):(r(),b("a",D({key:1,href:m.url,target:m.target},g.action),[i("span",a(s(g.icon)),null,16),i("span",a(s(g.label)),E(h),17),i("span",D({class:[P&&(T?"pi pi-fw pi-angle-down":"pi pi-fw pi-angle-right")]},g.submenuicon),null,16)],16,yi))]),end:c(()=>[l(v,{placeholder:"Search",type:"text"})]),_:1},8,["model"])]),l(S,{code:t.code},null,8,["code"])],64)}const $i=d(vi,[["render",Di]]),Si={data(){return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit",icon:"pi pi-fw pi-power-off"}],code:{basic:`<Menubar
    :model="items"
    :pt="{
        action: ({ props, state, context }) => ({
            class: context.active ? 'bg-primary-200 border-round-sm' : context.focused ? 'bg-primary-300 border-round-sm' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card relative z-2">
        <Menubar
            :model="items"
            :pt="{
                action: ({ props, state, context }) => ({
                    class: context.active ? 'bg-primary-200 border-round-sm' : context.focused ? 'bg-primary-300 border-round-sm' : undefined
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
                    label: 'Quit',
                    icon: 'pi pi-fw pi-power-off'
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card relative z-2">
        <Menubar
            :model="items"
            :pt="{
                action: ({ props, state, context }) => ({
                    class: context.active ? 'bg-primary-200 border-round-sm' : context.focused ? 'bg-primary-300 border-round-sm' : undefined
                })
            }"
        />
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
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);
<\/script>`}}}},Ei={class:"card relative z-2"};function Mi(p,f,u,w,t,k){const n=_,o=y("Menubar"),v=$;return r(),b(x,null,[l(n,a(s(p.$attrs)),null,16),i("div",Ei,[l(o,{model:t.items,pt:{action:({props:C,state:S,context:h})=>({class:h.active?"bg-primary-200 border-round-sm":h.focused?"bg-primary-300 border-round-sm":void 0})}},null,8,["model","pt"])]),l(v,{code:t.code},null,8,["code"])],64)}const Ci=d(Si,[["render",Mi]]),Ti={},Pi=i("div",{class:"card"},[i("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/menubar.jpg"})],-1);function Ni(p,f){const u=_;return r(),b(x,null,[l(u,a(s(p.$attrs)),{default:c(()=>[i("p",null,E(p.$attrs.description),1)]),_:1},16),Pi],64)}const Li=d(Ti,[["render",Ni]]),Ri={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Li},{id:"pt.doc.menubar",label:"Menubar PT Options",component:F,data:I("Menubar")},{id:"pt.demo",label:"Demo",component:Ci}]}}},Fi={class:"doc-main"},Ai=i("div",{class:"doc-intro"},[i("h1",null,"Menubar Pass Through")],-1);function Bi(p,f,u,w,t,k){const n=N,o=L;return r(),b(x,null,[i("div",Fi,[Ai,l(n,{docs:t.docs},null,8,["docs"])]),l(o,{docs:t.docs},null,8,["docs"])],64)}const Ii=d(Ri,[["render",Bi]]),Ui={},Vi=i("p",null,"List of class names used in the styled mode.",-1),zi=A('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-menubar</td><td>Container element.</td></tr><tr><td>p-menubar-start</td><td>Container of the start slot.</td></tr><tr><td>p-menubar-end</td><td>Container of the end slot.</td></tr><tr><td>p-menubar-button</td><td>Mobile menubar toggle button.</td></tr><tr><td>p-menubar-root-list</td><td>Root list element.</td></tr><tr><td>p-submenu-list</td><td>Submenu list element.</td></tr><tr><td>p-menuitem</td><td>Menuitem element.</td></tr><tr><td>p-menuitem-active</td><td>Active menuitem element.</td></tr><tr><td>p-menuitem-content</td><td>Content of menuitem.</td></tr><tr><td>p-menuitem-link</td><td>Link element of the menuitem.</td></tr><tr><td>p-menuitem-text</td><td>Label of a menuitem.</td></tr><tr><td>p-menuitem-icon</td><td>Icon of a menuitem.</td></tr><tr><td>p-submenu-icon</td><td>Arrow icon of a submenu.</td></tr></tbody></table></div>',1);function ji(p,f){const u=_;return r(),b(x,null,[l(u,a(s(p.$attrs)),{default:c(()=>[Vi]),_:1},16),zi],64)}const Ji=d(Ui,[["render",ji]]),Qi={data(){return{code1:{basic:`
export default {
    menubar: {
        root: {
            class: ['p-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 rounded-md', 'flex items-center relative']
        },
        menu: ({ props }) => ({
            class: [
                'm-0 sm:p-0 list-none',
                'outline-none',
                'sm:flex items-center flex-wrap sm:flex-row sm:top-auto sm:left-auto sm:relative sm:bg-transparent sm:shadow-none sm:w-auto',
                'flex-col top-full left-0',
                'absolute py-1 bg-white dark:bg-gray-900 border-0 shadow-md w-full',
                {
                    'hidden ': !props?.mobileActive,
                    'flex ': props?.mobileActive
                }
            ]
        }),
        menuitem: 'sm:relative sm:w-auto w-full static',
        content: ({ props, context }) => ({
            class: [
                ' transition-shadow duration-200',
                '',
                { 'rounded-md': props.root },
                {
                    'text-gray-700 dark:text-white/80': !context.focused && !context.active,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.active,
                    'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.active
                },
                {
                    'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.active,
                    'hover:bg-blue-200 dark:hover:bg-blue-500': context.active
                }
            ]
        }),
        action: ({ context }) => ({
            class: [
                'select-none',
                'cursor-pointer flex items-center no-underline overflow-hidden relative',
                'py-3 px-5 select-none',
                {
                    'max-[960px]:pl-9': context.level === 1,
                    'max-[960px]:pl-14': context.level === 2
                }
            ]
        }),
        icon: 'mr-2',
        submenuicon: ({ props }) => ({
            class: [
                'max-[960px]:ml-auto',
                {
                    'ml-2': props.root,
                    'ml-auto': !props.root
                }
            ]
        }),
        submenu: ({ props }) => ({
            class: [
                'py-1 bg-white dark:bg-gray-900 border-0  sm:shadow-md sm:w-48',
                'w-full static shadow-none',
                'sm:absolute z-10',
                'm-0 list-none',
                {
                    'sm:absolute sm:left-full sm:top-0': props.level > 1
                }
            ]
        }),
        separator: 'border-t border-gray-300 dark:border-blue-900/40 my-1',
        button: {
            class: [
                'flex sm:hidden w-8 h-8 rounded-full text-gray-600 dark:text-white/80 transition duration-200 ease-in-out',
                'cursor-pointer flex items-center justify-center no-underline',
                'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80 ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        }
    }
}
`},code2:{composition:`<template>
    <div class="card relative z-2">
        <Menubar :model="items" />
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
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);
<\/script>`}}}},qi=i("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ki(p,f,u,w,t,k){const n=U,o=$,v=_;return r(),M(v,a(s(p.$attrs)),{default:c(()=>[i("p",null,[e(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),l(n,{to:"/tailwind"},{default:c(()=>[e("Tailwind Customization")]),_:1}),e(" section for an example. ")]),l(o,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),qi,l(o,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const Oi=d(Qi,[["render",Ki]]),Hi={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ji},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Oi}]}]}}},Wi={class:"doc-main"},Gi=i("div",{class:"doc-intro"},[i("h1",null,"Menubar Theming")],-1);function Xi(p,f,u,w,t,k){const n=N,o=L;return r(),b(x,null,[i("div",Wi,[Gi,l(n,{docs:t.docs},null,8,["docs"])]),l(o,{docs:t.docs},null,8,["docs"])],64)}const Yi=d(Hi,[["render",Xi]]),Zi={data(){return{docs:[{id:"import",label:"Import",component:ci},{id:"basic",label:"Basic",component:ai},{id:"template",label:"Template",component:$i},{id:"router",label:"Router",component:hi},{id:"accessibility",label:"Accessibility",component:ti}],ptComponent:Ii,themingDoc:Yi}}};function ie(p,f,u,w,t,k){const n=B;return r(),M(n,{title:"Vue Navbar Component",header:"Menubar",description:"Menubar also known as Navbar, is a horizontal menu component.",componentDocs:t.docs,apiDocs:["Menubar","MenuItem"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const pe=d(Zi,[["render",ie]]);export{pe as default};
