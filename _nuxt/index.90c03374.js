import{_ as p,o as r,e as $,w as d,m as w,b as e,f as l,h as U,j as E,c as g,a as i,n as o,g as b,F as h,p as x,t as y,D as P,k as D,l as C,v as z,x as A}from"./entry.68beb385.js";import{g as N}from"./PTHelper.11558b27.js";import{_ as B}from"./PrimeVueNuxtLink.f51d0c80.js";const L={},R=e("h3",null,"Screen Reader",-1),q=e("p",null,[l(" MegaMenu component uses the "),e("i",null,"menubar"),l(" role along with "),e("i",null,"aria-orientation"),l(" and the value to describe the component can either be provided with "),e("i",null,"aria-labelledby"),l(" or "),e("i",null,"aria-label"),l(" props. Each list item has a "),e("i",null,"presentation"),l(" role whereas anchor elements have a "),e("i",null,"menuitem"),l(" role with "),e("i",null,"aria-label"),l(" referring to the label of the item and "),e("i",null,"aria-disabled"),l(" defined if the item is disabled. A submenu within a MegaMenu uses the "),e("i",null,"menu"),l(" role with an "),e("i",null,"aria-labelledby"),l(" defined as the id of the submenu root menuitem label. In addition, root menuitems that open a submenu have "),e("i",null,"aria-haspopup"),l(", "),e("i",null,"aria-expanded"),l(" and "),e("i",null,"aria-controls"),l(" to define the relation between the item and the submenu. ")],-1),F=e("h3",null,"Keyboard Support",-1),j=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),l(" + "),e("i",null,"tab")]),e("td",null,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu.")]),e("tr",null,[e("td",null,[e("i",null,"alt"),l(" + "),e("i",null,"up arrow")]),e("td",null,"If focus is inside a popup menu, moves focus to the first element in the submenu otherwise closes the submenu and moves focus to the root item of the closed submenu in horizontal mode.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"If focus is on a root element, moves focus to the next menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the next menu group.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"If focus is on a root element, moves focus to the previous menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the previous menu group.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first menuitem within the submenu.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last menuitem within the submenu.")]),e("tr",null,[e("td",null,[e("i",null,"any printable character")]),e("td",null,"Moves focus to the menuitem whose label starts with the characters being typed.")])])])],-1);function K(a,c){const m=U;return r(),$(m,w({id:"accessibility",label:"Accessibility"},a.$attrs),{default:d(()=>[R,q,F,j]),_:1},16)}const O=p(L,[["render",K]]),H={data(){return{items:[{label:"Videos",icon:"pi pi-fw pi-video",items:[[{label:"Video 1",items:[{label:"Video 1.1"},{label:"Video 1.2"}]},{label:"Video 2",items:[{label:"Video 2.1"},{label:"Video 2.2"}]}],[{label:"Video 3",items:[{label:"Video 3.1"},{label:"Video 3.2"}]},{label:"Video 4",items:[{label:"Video 4.1"},{label:"Video 4.2"}]}]]},{label:"Users",icon:"pi pi-fw pi-users",items:[[{label:"User 1",items:[{label:"User 1.1"},{label:"User 1.2"}]},{label:"User 2",items:[{label:"User 2.1"},{label:"User 2.2"}]}],[{label:"User 3",items:[{label:"User 3.1"},{label:"User 3.2"}]},{label:"User 4",items:[{label:"User 4.1"},{label:"User 4.2"}]}],[{label:"User 5",items:[{label:"User 5.1"},{label:"User 5.2"}]},{label:"User 6",items:[{label:"User 6.1"},{label:"User 6.2"}]}]]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[[{label:"Event 1",items:[{label:"Event 1.1"},{label:"Event 1.2"}]},{label:"Event 2",items:[{label:"Event 2.1"},{label:"Event 2.2"}]}],[{label:"Event 3",items:[{label:"Event 3.1"},{label:"Event 3.2"}]},{label:"Event 4",items:[{label:"Event 4.1"},{label:"Event 4.2"}]}]]},{label:"Settings",icon:"pi pi-fw pi-cog",items:[[{label:"Setting 1",items:[{label:"Setting 1.1"},{label:"Setting 1.2"}]},{label:"Setting 2",items:[{label:"Setting 2.1"},{label:"Setting 2.2"}]},{label:"Setting 3",items:[{label:"Setting 3.1"},{label:"Setting 3.2"}]}],[{label:"Technology 4",items:[{label:"Setting 4.1"},{label:"Setting 4.2"}]}]]}],code:{basic:'<MegaMenu :model="items" />',options:`<template>
    <div class="card">
        <MegaMenu :model="items" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Videos',
                    icon: 'pi pi-fw pi-video',
                    items: [
                        [
                            {
                                label: 'Video 1',
                                items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                            },
                            {
                                label: 'Video 2',
                                items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Video 3',
                                items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                            },
                            {
                                label: 'Video 4',
                                items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        [
                            {
                                label: 'User 1',
                                items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                            },
                            {
                                label: 'User 2',
                                items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 3',
                                items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                            },
                            {
                                label: 'User 4',
                                items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 5',
                                items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                            },
                            {
                                label: 'User 6',
                                items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        [
                            {
                                label: 'Event 1',
                                items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                            },
                            {
                                label: 'Event 2',
                                items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Event 3',
                                items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                            },
                            {
                                label: 'Event 4',
                                items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    items: [
                        [
                            {
                                label: 'Setting 1',
                                items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                            },
                            {
                                label: 'Setting 2',
                                items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                            },
                            {
                                label: 'Setting 3',
                                items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Technology 4',
                                items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                            }
                        ]
                    ]
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <MegaMenu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Videos',
        icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Video 1',
                    items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                },
                {
                    label: 'Video 2',
                    items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                }
            ],
            [
                {
                    label: 'Video 3',
                    items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                },
                {
                    label: 'Video 4',
                    items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                },
                {
                    label: 'User 2',
                    items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                }
            ],
            [
                {
                    label: 'User 3',
                    items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                },
                {
                    label: 'User 4',
                    items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                },
                {
                    label: 'User 6',
                    items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                }
            ]
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                },
                {
                    label: 'Event 2',
                    items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                },
                {
                    label: 'Event 4',
                    items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                },
                {
                    label: 'Setting 2',
                    items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                },
                {
                    label: 'Setting 3',
                    items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                }
            ]
        ]
    }
]);
<\/script>`}}}},W=e("p",null,[l("MegaMenu requires a collection of menuitems as its "),e("i",null,"model"),l(".")],-1),G={class:"card"};function J(a,c,m,S,t,_){const s=U,n=E("MegaMenu"),v=x;return r(),g(h,null,[i(s,o(b(a.$attrs)),{default:d(()=>[W]),_:1},16),e("div",G,[i(n,{model:t.items},null,8,["model"])]),i(v,{code:t.code},null,8,["code"])],64)}const Q=p(H,[["render",J]]),X={data(){return{code:{basic:"import MegaMenu from 'primevue/megamenu';"}}}};function Y(a,c,m,S,t,_){const s=U,n=x;return r(),g(h,null,[i(s,o(b(a.$attrs)),null,16),i(n,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Z=p(X,[["render",Y]]),ee={data(){return{items:[{label:"Videos",icon:"pi pi-fw pi-video",items:[[{label:"Video 1",items:[{label:"Video 1.1"},{label:"Video 1.2"}]},{label:"Video 2",items:[{label:"Video 2.1"},{label:"Video 2.2"}]}],[{label:"Video 3",items:[{label:"Video 3.1"},{label:"Video 3.2"}]},{label:"Video 4",items:[{label:"Video 4.1"},{label:"Video 4.2"}]}]]},{label:"Users",icon:"pi pi-fw pi-users",items:[[{label:"User 1",items:[{label:"User 1.1"},{label:"User 1.2"}]},{label:"User 2",items:[{label:"User 2.1"},{label:"User 2.2"}]}],[{label:"User 3",items:[{label:"User 3.1"},{label:"User 3.2"}]},{label:"User 4",items:[{label:"User 4.1"},{label:"User 4.2"}]}],[{label:"User 5",items:[{label:"User 5.1"},{label:"User 5.2"}]},{label:"User 6",items:[{label:"User 6.1"},{label:"User 6.2"}]}]]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[[{label:"Event 1",items:[{label:"Event 1.1"},{label:"Event 1.2"}]},{label:"Event 2",items:[{label:"Event 2.1"},{label:"Event 2.2"}]}],[{label:"Event 3",items:[{label:"Event 3.1"},{label:"Event 3.2"}]},{label:"Event 4",items:[{label:"Event 4.1"},{label:"Event 4.2"}]}]]},{label:"Settings",icon:"pi pi-fw pi-cog",items:[[{label:"Setting 1",items:[{label:"Setting 1.1"},{label:"Setting 1.2"}]},{label:"Setting 2",items:[{label:"Setting 2.1"},{label:"Setting 2.2"}]},{label:"Setting 3",items:[{label:"Setting 3.1"},{label:"Setting 3.2"}]}],[{label:"Technology 4",items:[{label:"Setting 4.1"},{label:"Setting 4.2"}]}]]},{label:"Upload",icon:"pi pi-fw pi-upload",route:"/fileupload"}],code:{basic:`<MegaMenu :model="items">
    <template #item="{ label, item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
            <span :class="[hasSubmenu && 'pi pi-fw pi-angle-down']" v-bind="props.submenuicon" />
        </a>
    </template>
</MegaMenu>`,options:`<template>
    <div class="card">
        <MegaMenu :model="items">
            <template #item="{ label, item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && 'pi pi-fw pi-angle-down']" v-bind="props.submenuicon" />
                </a>
            </template>
        </MegaMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Videos',
                    icon: 'pi pi-fw pi-video',
                    items: [
                        [
                            {
                                label: 'Video 1',
                                items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                            },
                            {
                                label: 'Video 2',
                                items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Video 3',
                                items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                            },
                            {
                                label: 'Video 4',
                                items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        [
                            {
                                label: 'User 1',
                                items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                            },
                            {
                                label: 'User 2',
                                items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 3',
                                items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                            },
                            {
                                label: 'User 4',
                                items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 5',
                                items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                            },
                            {
                                label: 'User 6',
                                items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        [
                            {
                                label: 'Event 1',
                                items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                            },
                            {
                                label: 'Event 2',
                                items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Event 3',
                                items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                            },
                            {
                                label: 'Event 4',
                                items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    items: [
                        [
                            {
                                label: 'Setting 1',
                                items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                            },
                            {
                                label: 'Setting 2',
                                items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                            },
                            {
                                label: 'Setting 3',
                                items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Technology 4',
                                items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-fw pi-upload',
                    route: '/fileupload'
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <MegaMenu :model="items">
            <template #item="{ label, item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && 'pi pi-fw pi-angle-down']" v-bind="props.submenuicon" />
                </a>
            </template>
        </MegaMenu>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Videos',
        icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Video 1',
                    items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                },
                {
                    label: 'Video 2',
                    items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                }
            ],
            [
                {
                    label: 'Video 3',
                    items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                },
                {
                    label: 'Video 4',
                    items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                },
                {
                    label: 'User 2',
                    items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                }
            ],
            [
                {
                    label: 'User 3',
                    items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                },
                {
                    label: 'User 4',
                    items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                },
                {
                    label: 'User 6',
                    items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                }
            ]
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                },
                {
                    label: 'Event 2',
                    items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                },
                {
                    label: 'Event 4',
                    items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                },
                {
                    label: 'Setting 2',
                    items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                },
                {
                    label: 'Setting 3',
                    items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Upload',
        icon: 'pi pi-fw pi-upload',
        route: '/fileupload'
    }
]);
<\/script>`}}}},le=e("p",null,[l(" Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as "),e("i",null,"NuxtLink"),l(" or "),e("i",null,"router-link"),l(". Here is an example with vue-router. ")],-1),te={class:"card"},ie=["href"],ae=["href","target"];function se(a,c,m,S,t,_){const s=U,n=E("router-link"),v=E("MegaMenu"),T=x;return r(),g(h,null,[i(s,o(b(a.$attrs)),{default:d(()=>[le]),_:1},16),e("div",te,[i(v,{model:t.items},{item:d(({label:M,item:f,props:u,hasSubmenu:V})=>[f.route?(r(),$(n,{key:0,to:f.route,custom:""},{default:d(k=>[e("a",w({href:k.href},u.action),[e("span",o(b(u.icon)),null,16),e("span",o(b(u.label)),y(M),17)],16,ie)]),_:2},1032,["to"])):(r(),g("a",w({key:1,href:f.url,target:f.target},u.action),[e("span",o(b(u.icon)),null,16),e("span",o(b(u.label)),y(M),17),e("span",w({class:[V&&"pi pi-fw pi-angle-down"]},u.submenuicon),null,16)],16,ae))]),_:1},8,["model"])]),i(T,{code:t.code},null,8,["code"])],64)}const ne=p(ee,[["render",se]]),oe={data(){return{items:[{label:"Videos",icon:"pi pi-fw pi-video",items:[[{label:"Video 1",items:[{label:"Video 1.1"},{label:"Video 1.2"}]},{label:"Video 2",items:[{label:"Video 2.1"},{label:"Video 2.2"}]}],[{label:"Video 3",items:[{label:"Video 3.1"},{label:"Video 3.2"}]},{label:"Video 4",items:[{label:"Video 4.1"},{label:"Video 4.2"}]}]]},{label:"Users",icon:"pi pi-fw pi-users",items:[[{label:"User 1",items:[{label:"User 1.1"},{label:"User 1.2"}]},{label:"User 2",items:[{label:"User 2.1"},{label:"User 2.2"}]}],[{label:"User 3",items:[{label:"User 3.1"},{label:"User 3.2"}]},{label:"User 4",items:[{label:"User 4.1"},{label:"User 4.2"}]}],[{label:"User 5",items:[{label:"User 5.1"},{label:"User 5.2"}]},{label:"User 6",items:[{label:"User 6.1"},{label:"User 6.2"}]}]]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[[{label:"Event 1",items:[{label:"Event 1.1"},{label:"Event 1.2"}]},{label:"Event 2",items:[{label:"Event 2.1"},{label:"Event 2.2"}]}],[{label:"Event 3",items:[{label:"Event 3.1"},{label:"Event 3.2"}]},{label:"Event 4",items:[{label:"Event 4.1"},{label:"Event 4.2"}]}]]},{label:"Settings",icon:"pi pi-fw pi-cog",items:[[{label:"Setting 1",items:[{label:"Setting 1.1"},{label:"Setting 1.2"}]},{label:"Setting 2",items:[{label:"Setting 2.1"},{label:"Setting 2.2"}]},{label:"Setting 3",items:[{label:"Setting 3.1"},{label:"Setting 3.2"}]}],[{label:"Technology 4",items:[{label:"Setting 4.1"},{label:"Setting 4.2"}]}]]},{label:"Upload",icon:"pi pi-fw pi-upload",route:"/fileupload"}],code:{basic:`<MegaMenu :model="items" orientation="horizontal">
    <template #start>
        <img alt="logo" src="https://primefaces.org/cdn/primevue/images/primevue-logo-dark.svg" height="24" class="mr-2" />
    </template>
    <template #item="{ label, item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
            <span :class="[hasSubmenu && 'pi pi-fw pi-angle-down']" v-bind="props.submenuicon" />
        </a>
    </template>
    <template #end>
        <InputText placeholder="Search" type="text" />
    </template>
</MegaMenu>`,options:`<template>
    <div class="card">
        <MegaMenu :model="items" orientation="horizontal">
            <template #start>
                <span class="flex align-items-center">
                    <img alt="logo" src="https://primefaces.org/cdn/primevue/images/primevue-logo-dark.svg" height="24" class="mr-2" />
                </span>
            </template>
            <template #item="{ label, item, props, hasSubmenu }">
                <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                    <a :href="routerProps.href" v-bind="props.action">
                        <span v-bind="props.icon" />
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span v-bind="props.icon" />
                    <span v-bind="props.label">{{ label }}</span>
                    <span :class="[hasSubmenu && 'pi pi-fw pi-angle-down']" v-bind="props.submenuicon" />
                </a>
            </template>
            <template #end>
                <InputText placeholder="Search" type="text" />
            </template>
        </MegaMenu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Videos',
                    icon: 'pi pi-fw pi-video',
                    items: [
                        [
                            {
                                label: 'Video 1',
                                items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                            },
                            {
                                label: 'Video 2',
                                items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Video 3',
                                items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                            },
                            {
                                label: 'Video 4',
                                items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        [
                            {
                                label: 'User 1',
                                items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                            },
                            {
                                label: 'User 2',
                                items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 3',
                                items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                            },
                            {
                                label: 'User 4',
                                items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 5',
                                items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                            },
                            {
                                label: 'User 6',
                                items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        [
                            {
                                label: 'Event 1',
                                items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                            },
                            {
                                label: 'Event 2',
                                items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Event 3',
                                items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                            },
                            {
                                label: 'Event 4',
                                items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    items: [
                        [
                            {
                                label: 'Setting 1',
                                items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                            },
                            {
                                label: 'Setting 2',
                                items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                            },
                            {
                                label: 'Setting 3',
                                items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Technology 4',
                                items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-fw pi-upload',
                    route: '/fileupload'
                }
            ]
        };
    }
};
<\/script>`,composition:`<MegaMenu :model="items" orientation="horizontal">
    <template #start>
        <span class="flex align-items-center">
            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/primevue-logo-dark.svg" height="24" class="mr-2" />
        </span>
    </template>
    <template #item="{ label, item, props, hasSubmenu }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ label }}</span>
            <span :class="[hasSubmenu && 'pi pi-fw pi-angle-down']" v-bind="props.submenuicon" />
        </a>
    </template>
    <template #end>
        <InputText placeholder="Search" type="text" />
    </template>
</MegaMenu>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Videos',
        icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Video 1',
                    items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                },
                {
                    label: 'Video 2',
                    items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                }
            ],
            [
                {
                    label: 'Video 3',
                    items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                },
                {
                    label: 'Video 4',
                    items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                },
                {
                    label: 'User 2',
                    items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                }
            ],
            [
                {
                    label: 'User 3',
                    items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                },
                {
                    label: 'User 4',
                    items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                },
                {
                    label: 'User 6',
                    items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                }
            ]
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                },
                {
                    label: 'Event 2',
                    items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                },
                {
                    label: 'Event 4',
                    items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                },
                {
                    label: 'Setting 2',
                    items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                },
                {
                    label: 'Setting 3',
                    items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Upload',
        icon: 'pi pi-fw pi-upload',
        route: '/fileupload'
    }
]);
<\/script>`}}}},be=e("p",null,[l("Custom content can be placed inside the megamenu using the "),e("i",null,"start"),l(" and "),e("i",null,"end"),l(" properties.")],-1),re={class:"card"},me=e("span",{class:"flex align-items-center"},[e("img",{alt:"logo",src:"https://primefaces.org/cdn/primevue/images/primevue-logo-dark.svg",height:"24",class:"mr-2"})],-1),de=["href"],pe=["href","target"];function ce(a,c,m,S,t,_){const s=U,n=E("router-link"),v=E("InputText"),T=E("MegaMenu"),M=x;return r(),g(h,null,[i(s,o(b(a.$attrs)),{default:d(()=>[be]),_:1},16),e("div",re,[i(T,{model:t.items,orientation:"horizontal"},{start:d(()=>[me]),item:d(({label:f,item:u,props:V,hasSubmenu:k})=>[u.route?(r(),$(n,{key:0,to:u.route,custom:""},{default:d(I=>[e("a",w({href:I.href},V.action),[e("span",o(b(V.icon)),null,16),e("span",o(b(V.label)),y(f),17)],16,de)]),_:2},1032,["to"])):(r(),g("a",w({key:1,href:u.url,target:u.target},V.action),[e("span",o(b(V.icon)),null,16),e("span",o(b(V.label)),y(f),17),e("span",w({class:[k&&"pi pi-fw pi-angle-down"]},V.submenuicon),null,16)],16,pe))]),end:d(()=>[i(v,{placeholder:"Search",type:"text"})]),_:1},8,["model"])]),i(M,{code:t.code},null,8,["code"])],64)}const ue=p(oe,[["render",ce]]),ge={data(){return{items:[{label:"Videos",icon:"pi pi-fw pi-video",items:[[{label:"Video 1",items:[{label:"Video 1.1"},{label:"Video 1.2"}]},{label:"Video 2",items:[{label:"Video 2.1"},{label:"Video 2.2"}]}],[{label:"Video 3",items:[{label:"Video 3.1"},{label:"Video 3.2"}]},{label:"Video 4",items:[{label:"Video 4.1"},{label:"Video 4.2"}]}]]},{label:"Users",icon:"pi pi-fw pi-users",items:[[{label:"User 1",items:[{label:"User 1.1"},{label:"User 1.2"}]},{label:"User 2",items:[{label:"User 2.1"},{label:"User 2.2"}]}],[{label:"User 3",items:[{label:"User 3.1"},{label:"User 3.2"}]},{label:"User 4",items:[{label:"User 4.1"},{label:"User 4.2"}]}],[{label:"User 5",items:[{label:"User 5.1"},{label:"User 5.2"}]},{label:"User 6",items:[{label:"User 6.1"},{label:"User 6.2"}]}]]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[[{label:"Event 1",items:[{label:"Event 1.1"},{label:"Event 1.2"}]},{label:"Event 2",items:[{label:"Event 2.1"},{label:"Event 2.2"}]}],[{label:"Event 3",items:[{label:"Event 3.1"},{label:"Event 3.2"}]},{label:"Event 4",items:[{label:"Event 4.1"},{label:"Event 4.2"}]}]]},{label:"Settings",icon:"pi pi-fw pi-cog",items:[[{label:"Setting 1",items:[{label:"Setting 1.1"},{label:"Setting 1.2"}]},{label:"Setting 2",items:[{label:"Setting 2.1"},{label:"Setting 2.2"}]},{label:"Setting 3",items:[{label:"Setting 3.1"},{label:"Setting 3.2"}]}],[{label:"Technology 4",items:[{label:"Setting 4.1"},{label:"Setting 4.2"}]}]]}],code:{basic:'<MegaMenu :model="items" orientation="vertical" />',options:`<template>
    <div class="card">
        <MegaMenu :model="items" orientation="vertical" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Videos',
                    icon: 'pi pi-fw pi-video',
                    items: [
                        [
                            {
                                label: 'Video 1',
                                items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                            },
                            {
                                label: 'Video 2',
                                items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Video 3',
                                items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                            },
                            {
                                label: 'Video 4',
                                items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        [
                            {
                                label: 'User 1',
                                items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                            },
                            {
                                label: 'User 2',
                                items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 3',
                                items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                            },
                            {
                                label: 'User 4',
                                items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 5',
                                items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                            },
                            {
                                label: 'User 6',
                                items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        [
                            {
                                label: 'Event 1',
                                items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                            },
                            {
                                label: 'Event 2',
                                items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Event 3',
                                items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                            },
                            {
                                label: 'Event 4',
                                items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    items: [
                        [
                            {
                                label: 'Setting 1',
                                items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                            },
                            {
                                label: 'Setting 2',
                                items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                            },
                            {
                                label: 'Setting 3',
                                items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Technology 4',
                                items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                            }
                        ]
                    ]
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <MegaMenu :model="items" orientation="vertical" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Videos',
        icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Video 1',
                    items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                },
                {
                    label: 'Video 2',
                    items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                }
            ],
            [
                {
                    label: 'Video 3',
                    items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                },
                {
                    label: 'Video 4',
                    items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                },
                {
                    label: 'User 2',
                    items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                }
            ],
            [
                {
                    label: 'User 3',
                    items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                },
                {
                    label: 'User 4',
                    items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                },
                {
                    label: 'User 6',
                    items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                }
            ]
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                },
                {
                    label: 'Event 2',
                    items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                },
                {
                    label: 'Event 4',
                    items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                },
                {
                    label: 'Setting 2',
                    items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                },
                {
                    label: 'Setting 3',
                    items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                }
            ]
        ]
    }
]);
<\/script>`}}}},ve=e("p",null,[l("Layout of the MegaMenu is changed with the "),e("i",null,"orientation"),l(" property that accepts "),e("i",null,"horizontal"),l(" and "),e("i",null,"vertical"),l(" as options.")],-1),fe={class:"card"};function Ue(a,c,m,S,t,_){const s=U,n=E("MegaMenu"),v=x;return r(),g(h,null,[i(s,o(b(a.$attrs)),{default:d(()=>[ve]),_:1},16),e("div",fe,[i(n,{model:t.items,orientation:"vertical"},null,8,["model"])]),i(v,{code:t.code},null,8,["code"])],64)}const he=p(ge,[["render",Ue]]),Se={data(){return{items:[{label:"Videos",icon:"pi pi-fw pi-video",items:[[{label:"Video 1",items:[{label:"Video 1.1"},{label:"Video 1.2"}]},{label:"Video 2",items:[{label:"Video 2.1"},{label:"Video 2.2"}]}],[{label:"Video 3",items:[{label:"Video 3.1"},{label:"Video 3.2"}]},{label:"Video 4",items:[{label:"Video 4.1"},{label:"Video 4.2"}]}]]},{label:"Users",icon:"pi pi-fw pi-users",items:[[{label:"User 1",items:[{label:"User 1.1"},{label:"User 1.2"}]},{label:"User 2",items:[{label:"User 2.1"},{label:"User 2.2"}]}],[{label:"User 3",items:[{label:"User 3.1"},{label:"User 3.2"}]},{label:"User 4",items:[{label:"User 4.1"},{label:"User 4.2"}]}],[{label:"User 5",items:[{label:"User 5.1"},{label:"User 5.2"}]},{label:"User 6",items:[{label:"User 6.1"},{label:"User 6.2"}]}]]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[[{label:"Event 1",items:[{label:"Event 1.1"},{label:"Event 1.2"}]},{label:"Event 2",items:[{label:"Event 2.1"},{label:"Event 2.2"}]}],[{label:"Event 3",items:[{label:"Event 3.1"},{label:"Event 3.2"}]},{label:"Event 4",items:[{label:"Event 4.1"},{label:"Event 4.2"}]}]]},{label:"Settings",icon:"pi pi-fw pi-cog",items:[[{label:"Setting 1",items:[{label:"Setting 1.1"},{label:"Setting 1.2"}]},{label:"Setting 2",items:[{label:"Setting 2.1"},{label:"Setting 2.2"}]},{label:"Setting 3",items:[{label:"Setting 3.1"},{label:"Setting 3.2"}]}],[{label:"Technology 4",items:[{label:"Setting 4.1"},{label:"Setting 4.2"}]}]]}],code:{basic:`<MegaMenu
    :model="items"
    :pt="{
        action: ({ props, state, context }) => ({
            class: context.active ? 'bg-primary-200 border-round-sm' : context.focused ? 'bg-primary-300 border-round-sm' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card">
        <MegaMenu
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
                    label: 'Videos',
                    icon: 'pi pi-fw pi-video',
                    items: [
                        [
                            {
                                label: 'Video 1',
                                items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                            },
                            {
                                label: 'Video 2',
                                items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Video 3',
                                items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                            },
                            {
                                label: 'Video 4',
                                items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Users',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        [
                            {
                                label: 'User 1',
                                items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                            },
                            {
                                label: 'User 2',
                                items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 3',
                                items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                            },
                            {
                                label: 'User 4',
                                items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                            }
                        ],
                        [
                            {
                                label: 'User 5',
                                items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                            },
                            {
                                label: 'User 6',
                                items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        [
                            {
                                label: 'Event 1',
                                items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                            },
                            {
                                label: 'Event 2',
                                items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Event 3',
                                items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                            },
                            {
                                label: 'Event 4',
                                items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                            }
                        ]
                    ]
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    items: [
                        [
                            {
                                label: 'Setting 1',
                                items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                            },
                            {
                                label: 'Setting 2',
                                items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                            },
                            {
                                label: 'Setting 3',
                                items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                            }
                        ],
                        [
                            {
                                label: 'Technology 4',
                                items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                            }
                        ]
                    ]
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <MegaMenu
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
        label: 'Videos',
        icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Video 1',
                    items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                },
                {
                    label: 'Video 2',
                    items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                }
            ],
            [
                {
                    label: 'Video 3',
                    items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                },
                {
                    label: 'Video 4',
                    items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                },
                {
                    label: 'User 2',
                    items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                }
            ],
            [
                {
                    label: 'User 3',
                    items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                },
                {
                    label: 'User 4',
                    items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                },
                {
                    label: 'User 6',
                    items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                }
            ]
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                },
                {
                    label: 'Event 2',
                    items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                },
                {
                    label: 'Event 4',
                    items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                },
                {
                    label: 'Setting 2',
                    items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                },
                {
                    label: 'Setting 3',
                    items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                }
            ]
        ]
    }
]);
<\/script>`}}}},_e={class:"card"};function Ve(a,c,m,S,t,_){const s=U,n=E("MegaMenu"),v=x;return r(),g(h,null,[i(s,o(b(a.$attrs)),null,16),e("div",_e,[i(n,{model:t.items,pt:{action:({props:T,state:M,context:f})=>({class:f.active?"bg-primary-200 border-round-sm":f.focused?"bg-primary-300 border-round-sm":void 0})}},null,8,["model","pt"])]),i(v,{code:t.code},null,8,["code"])],64)}const Ee=p(Se,[["render",Ve]]),we={},xe=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/megamenu.jpg"})],-1);function Me(a,c){const m=U;return r(),g(h,null,[i(m,o(b(a.$attrs)),{default:d(()=>[e("p",null,y(a.$attrs.description),1)]),_:1},16),xe],64)}const ye=p(we,[["render",Me]]),$e={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ye},{id:"pt.doc.megamenu",label:"MegaMenu PT Options",component:P,data:N("MegaMenu")},{id:"pt.demo",label:"Demo",component:Ee}]}}},Te={class:"doc-main"},ke=e("div",{class:"doc-intro"},[e("h1",null,"MegaMenu Pass Through")],-1);function De(a,c,m,S,t,_){const s=D,n=C;return r(),g(h,null,[e("div",Te,[ke,i(s,{docs:t.docs},null,8,["docs"])]),i(n,{docs:t.docs},null,8,["docs"])],64)}const Ce=p($e,[["render",De]]),Ie={},Pe=e("p",null,"List of class names used in the styled mode.",-1),ze=z('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-megamenu</td><td>Container element.</td></tr><tr><td>p-megamenu-horizontal</td><td>Container element in horizontal orientation.</td></tr><tr><td>p-megamenu-vertical</td><td>Container element in vertical orientation.</td></tr><tr><td>p-megamenu-root-list</td><td>Root list element.</td></tr><tr><td>p-megamenu-panel</td><td>Submenu container.</td></tr><tr><td>p-megamenu-submenu</td><td>Submenu list element.</td></tr><tr><td>p-submenu-list</td><td>Submenu list element.</td></tr><tr><td>p-menuitem</td><td>Menuitem element.</td></tr><tr><td>p-menuitem-active</td><td>Active menuitem element.</td></tr><tr><td>p-menuitem-content</td><td>Content of menuitem.</td></tr><tr><td>p-menuitem-link</td><td>Link element of the menuitem.</td></tr><tr><td>p-menuitem-text</td><td>Label of a menuitem.</td></tr><tr><td>p-menuitem-icon</td><td>Icon of a menuitem.</td></tr><tr><td>p-submenu-icon</td><td>Arrow icon of a submenu.</td></tr></tbody></table></div>',1);function Ae(a,c){const m=U;return r(),g(h,null,[i(m,o(b(a.$attrs)),{default:d(()=>[Pe]),_:1},16),ze],64)}const Ne=p(Ie,[["render",Ae]]),Be={data(){return{code1:{basic:`
export default {
    megamenu: {
        root: ({ props }) => ({
            class: ['bg-gray-100 dark:bg-gray-900  border border-gray-300 dark:border-blue-900/40  rounded-md', 'flex relative', { 'p-2 items-center': props.orientation == 'horizontal', 'flex-col w-48 p-0 py-1': props.orientation !== 'horizontal' }]
        }),
        menu: {
            class: ['m-0 sm:p-0 list-none relative', 'outline-none', 'flex items-center flex-wrap flex-row top-auto left-auto relative bg-transparent shadow-none w-auto']
        },
        menuitem: ({ props }) => ({
            class: [
                'relative',
                {
                    'w-auto': props.horizontal,
                    'w-full': !props.horizontal
                }
            ]
        }),
        content: ({ props, context }) => ({
            class: [
                'transition-shadow duration-200',
                { 'rounded-md': props.level < 1 && props.horizontal },
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
        action: {
            class: ['select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative', 'py-3 px-5 select-none']
        },
        icon: {
            class: 'mr-2'
        },
        submenuicon: ({ props }) => ({
            class: [
                {
                    'ml-2': props.horizontal,
                    'ml-auto': !props.horizontal
                }
            ]
        }),
        panel: ({ props }) => ({
            class: [
                'py-1 bg-white dark:bg-gray-900 border-0 shadow-md w-auto',
                'absolute z-10',
                {
                    'left-full top-0': !props.horizontal
                }
            ]
        }),
        grid: 'flex',
        column: 'w-1/2',
        submenu: {
            class: ['m-0 list-none', 'py-1 w-48']
        },
        submenuheader: {
            class: ['m-0 py-3 px-5 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-semibold rounded-tr-md rounded-tl-md']
        }
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <MegaMenu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Videos',
        icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Video 1',
                    items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                },
                {
                    label: 'Video 2',
                    items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                }
            ],
            [
                {
                    label: 'Video 3',
                    items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                },
                {
                    label: 'Video 4',
                    items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                },
                {
                    label: 'User 2',
                    items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                }
            ],
            [
                {
                    label: 'User 3',
                    items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                },
                {
                    label: 'User 4',
                    items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                },
                {
                    label: 'User 6',
                    items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                }
            ]
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                },
                {
                    label: 'Event 2',
                    items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                },
                {
                    label: 'Event 4',
                    items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                },
                {
                    label: 'Setting 2',
                    items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                },
                {
                    label: 'Setting 3',
                    items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                }
            ]
        ]
    }
]);
<\/script>`}}}},Le=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Re(a,c,m,S,t,_){const s=B,n=x,v=U;return r(),$(v,o(b(a.$attrs)),{default:d(()=>[e("p",null,[l(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),i(s,{to:"/tailwind"},{default:d(()=>[l("Tailwind Customization")]),_:1}),l(" section for an example. ")]),i(n,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Le,i(n,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const qe=p(Be,[["render",Re]]),Fe={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ne},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:qe}]}]}}},je={class:"doc-main"},Ke=e("div",{class:"doc-intro"},[e("h1",null,"MegaMenu Theming")],-1);function Oe(a,c,m,S,t,_){const s=D,n=C;return r(),g(h,null,[e("div",je,[Ke,i(s,{docs:t.docs},null,8,["docs"])]),i(n,{docs:t.docs},null,8,["docs"])],64)}const He=p(Fe,[["render",Oe]]),We={data(){return{docs:[{id:"import",label:"Import",component:Z},{id:"basic",label:"Basic",component:Q},{id:"Vertical",label:"Vertical",component:he},{id:"template",label:"Template",component:ue},{id:"router",label:"Router",component:ne},{id:"accessibility",label:"Accessibility",component:O}],ptComponent:Ce,themingDoc:He}}};function Ge(a,c,m,S,t,_){const s=A;return r(),$(s,{title:"Vue MegaMenu Component",header:"MegaMenu",description:"MegaMenu is navigation component that displays submenus together.",componentDocs:t.docs,apiDocs:["MegaMenu","MenuItem"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ye=p(We,[["render",Ge]]);export{Ye as default};
