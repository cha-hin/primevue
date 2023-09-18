import{_ as c,o as r,e as g,w as u,m as P,b as e,f as i,h as f,j as x,c as b,a as t,n as w,g as _,F as y,p as k,t as E,D as N,k as D,l as $,v as C,x as K}from"./entry.68beb385.js";import{g as A}from"./PTHelper.11558b27.js";import{_ as T}from"./PrimeVueNuxtLink.f51d0c80.js";const M={},F=e("h3",null,"Screen Reader",-1),R=e("p",null,[i(" Accordion header elements have a "),e("i",null,"button"),i(" role, an "),e("i",null,"aria-label"),i(" defined using the "),e("i",null,"label"),i(" property of the menuitem model and "),e("i",null,"aria-controls"),i(" to define the id of the content section along with "),e("i",null,"aria-expanded"),i(" for the visibility state. ")],-1),L=e("p",null,[i("The content of an accordion panel uses "),e("i",null,"region"),i(" role, defines an id that matches the "),e("i",null,"aria-controls"),i(" of the header and "),e("i",null,"aria-labelledby"),i(" referring to the id of the header.")],-1),B=e("p",null,[i(" The tree elements has a "),e("i",null,"tree"),i(" as the role and each menu item has a "),e("i",null,"treeitem"),i(" role along with "),e("i",null,"aria-label"),i(", "),e("i",null,"aria-selected"),i(" and "),e("i",null,"aria-expanded"),i(" attributes. The container element of a treenode has the "),e("i",null,"group"),i(" role. The "),e("i",null,"aria-setsize"),i(", "),e("i",null,"aria-posinset"),i(" and "),e("i",null,"aria-level"),i(" attributes are calculated implicitly and added to each treeitem. ")],-1),j=e("h3",null,"Header Keyboard Support",-1),V=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next the focusable element in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),i(" + "),e("i",null,"tab")]),e("td",null,"Moves focus to the previous the focusable element in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Toggles the visibility of the content.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the visibility of the content.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next header. If focus is on the last header, moves focus to the first header.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous header. If focus is on the first header, moves focus to the last header.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first header.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last header.")])])])],-1);function U(l,p){const s=f;return r(),g(s,P({id:"accessibility",label:"Accessibility"},l.$attrs),{default:u(()=>[F,R,L,B,j,V]),_:1},16)}const J=c(M,[["render",U]]),I={data(){return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]}],code:{basic:'<PanelMenu :model="items" />',options:`<template>
    <div class="card flex justify-content-center">
        <PanelMenu :model="items" class="w-full md:w-25rem" />
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
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <PanelMenu :model="items" class="w-full md:w-25rem" />
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
    }
]);
<\/script>`}}}},z=e("p",null,[i("PanelMenu requires a collection of menuitems as its "),e("i",null,"model"),i(".")],-1),O={class:"card flex justify-content-center"};function q(l,p,s,h,n,d){const o=f,a=x("PanelMenu"),m=k;return r(),b(y,null,[t(o,w(_(l.$attrs)),{default:u(()=>[z]),_:1},16),e("div",O,[t(a,{model:n.items,class:"w-full md:w-25rem"},null,8,["model"])]),t(m,{code:n.code},null,8,["code"])],64)}const H=c(I,[["render",q]]),W={data(){return{code:{basic:"import PanelMenu from 'primevue/panelmenu';"}}}};function G(l,p,s,h,n,d){const o=f,a=k;return r(),b(y,null,[t(o,w(_(l.$attrs)),null,16),t(a,{code:n.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Q=c(W,[["render",G]]),X={data(){return{expandedKeys:{},items:[{key:"0",label:"File",icon:"pi pi-fw pi-file",items:[{key:"0_0",label:"New",icon:"pi pi-fw pi-plus",items:[{key:"0_0_0",label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{key:"0_0_1",label:"Video",icon:"pi pi-fw pi-video"}]},{key:"0_1",label:"Delete",icon:"pi pi-fw pi-trash"},{key:"0_2",label:"Export",icon:"pi pi-fw pi-external-link"}]},{key:"1",label:"Edit",icon:"pi pi-fw pi-pencil",items:[{key:"1_0",label:"Left",icon:"pi pi-fw pi-align-left"},{key:"1_1",label:"Right",icon:"pi pi-fw pi-align-right"},{key:"1_2",label:"Center",icon:"pi pi-fw pi-align-center"},{key:"1_3",label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{key:"2",label:"Users",icon:"pi pi-fw pi-user",items:[{key:"2_0",label:"New",icon:"pi pi-fw pi-user-plus"},{key:"2_1",label:"Delete",icon:"pi pi-fw pi-user-minus"},{key:"2_2",label:"Search",icon:"pi pi-fw pi-users",items:[{key:"2_2_0",label:"Filter",icon:"pi pi-fw pi-filter",items:[{key:"2_2_0_0",label:"Print",icon:"pi pi-fw pi-print"}]},{key:"2_2_1",icon:"pi pi-fw pi-bars",label:"List"}]}]},{key:"3",label:"Events",icon:"pi pi-fw pi-calendar",items:[{key:"3_0",label:"Edit",icon:"pi pi-fw pi-pencil",items:[{key:"3_0_0",label:"Save",icon:"pi pi-fw pi-calendar-plus"},{key:"3_0_0",label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{key:"3_1",label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{key:"3_1_0",label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]}],code:{basic:'<PanelMenu v-model:expandedKeys="expandedKeys" :model="items" />',options:`<template>
    <div class="card flex flex-column align-items-center">
        <PanelMenu v-model:expandedKeys="expandedKeys" :model="items" class="w-full md:w-25rem" />
    </div>
</template>

<script>
export default {
  data() {
      return {
          expandedKeys: {},
          items: [
              {
                  key: '0',
                  label: 'File',
                  icon: 'pi pi-fw pi-file',
                  items: [
                      {
                          key: '0_0',
                          label: 'New',
                          icon: 'pi pi-fw pi-plus',
                          items: [
                              {
                                  key: '0_0_0',
                                  label: 'Bookmark',
                                  icon: 'pi pi-fw pi-bookmark'
                              },
                              {
                                  key: '0_0_1',
                                  label: 'Video',
                                  icon: 'pi pi-fw pi-video'
                              }
                          ]
                      },
                      {
                          key: '0_1',
                          label: 'Delete',
                          icon: 'pi pi-fw pi-trash'
                      },
                      {
                          key: '0_2',
                          label: 'Export',
                          icon: 'pi pi-fw pi-external-link'
                      }
                  ]
              },
              {
                  key: '1',
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {
                          key: '1_0',
                          label: 'Left',
                          icon: 'pi pi-fw pi-align-left'
                      },
                      {
                          key: '1_1',
                          label: 'Right',
                          icon: 'pi pi-fw pi-align-right'
                      },
                      {
                          key: '1_2',
                          label: 'Center',
                          icon: 'pi pi-fw pi-align-center'
                      },
                      {
                          key: '1_3',
                          label: 'Justify',
                          icon: 'pi pi-fw pi-align-justify'
                      }
                  ]
              },
              {
                  key: '2',
                  label: 'Users',
                  icon: 'pi pi-fw pi-user',
                  items: [
                      {
                          key: '2_0',
                          label: 'New',
                          icon: 'pi pi-fw pi-user-plus'
                      },
                      {
                          key: '2_1',
                          label: 'Delete',
                          icon: 'pi pi-fw pi-user-minus'
                      },
                      {
                          key: '2_2',
                          label: 'Search',
                          icon: 'pi pi-fw pi-users',
                          items: [
                              {
                                  key: '2_2_0',
                                  label: 'Filter',
                                  icon: 'pi pi-fw pi-filter',
                                  items: [
                                      {
                                          key: '2_2_0_0',
                                          label: 'Print',
                                          icon: 'pi pi-fw pi-print'
                                      }
                                  ]
                              },
                              {
                                  key: '2_2_1',
                                  icon: 'pi pi-fw pi-bars',
                                  label: 'List'
                              }
                          ]
                      }
                  ]
              },
              {
                  key: '3',
                  label: 'Events',
                  icon: 'pi pi-fw pi-calendar',
                  items: [
                      {
                          key: '3_0',
                          label: 'Edit',
                          icon: 'pi pi-fw pi-pencil',
                          items: [
                              {
                                  key: '3_0_0',
                                  label: 'Save',
                                  icon: 'pi pi-fw pi-calendar-plus'
                              },
                              {
                                  key: '3_0_0',
                                  label: 'Delete',
                                  icon: 'pi pi-fw pi-calendar-minus'
                              }
                          ]
                      },
                      {
                          key: '3_1',
                          label: 'Archieve',
                          icon: 'pi pi-fw pi-calendar-times',
                          items: [
                              {
                                  key: '3_1_0',
                                  label: 'Remove',
                                  icon: 'pi pi-fw pi-calendar-minus'
                              }
                          ]
                      }
                  ]
              }
          ]
      };
  },
};
<\/script>`,composition:`<template>
    <div class="card flex flex-column align-items-center">
        <PanelMenu v-model:expandedKeys="expandedKeys" :model="items" class="w-full md:w-25rem"  />
    </div>
</template>

<script setup>
import { ref } from "vue";

const expandedKeys = ref({});
const items = ref([
  {
      key: '0',
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
          {
              key: '0_0',
              label: 'New',
              icon: 'pi pi-fw pi-plus',
              items: [
                  {
                      key: '0_0_0',
                      label: 'Bookmark',
                      icon: 'pi pi-fw pi-bookmark'
                  },
                  {
                      key: '0_0_1',
                      label: 'Video',
                      icon: 'pi pi-fw pi-video'
                  }
              ]
          },
          {
              key: '0_1',
              label: 'Delete',
              icon: 'pi pi-fw pi-trash'
          },
          {
              key: '0_2',
              label: 'Export',
              icon: 'pi pi-fw pi-external-link'
          }
      ]
  },
  {
      key: '1',
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
          {
              key: '1_0',
              label: 'Left',
              icon: 'pi pi-fw pi-align-left'
          },
          {
              key: '1_1',
              label: 'Right',
              icon: 'pi pi-fw pi-align-right'
          },
          {
              key: '1_2',
              label: 'Center',
              icon: 'pi pi-fw pi-align-center'
          },
          {
              key: '1_3',
              label: 'Justify',
              icon: 'pi pi-fw pi-align-justify'
          }
      ]
  },
  {
      key: '2',
      label: 'Users',
      icon: 'pi pi-fw pi-user',
      items: [
          {
              key: '2_0',
              label: 'New',
              icon: 'pi pi-fw pi-user-plus'
          },
          {
              key: '2_1',
              label: 'Delete',
              icon: 'pi pi-fw pi-user-minus'
          },
          {
              key: '2_2',
              label: 'Search',
              icon: 'pi pi-fw pi-users',
              items: [
                  {
                      key: '2_2_0',
                      label: 'Filter',
                      icon: 'pi pi-fw pi-filter',
                      items: [
                          {
                              key: '2_2_0_0',
                              label: 'Print',
                              icon: 'pi pi-fw pi-print'
                          }
                      ]
                  },
                  {
                      key: '2_2_1',
                      icon: 'pi pi-fw pi-bars',
                      label: 'List'
                  }
              ]
          }
      ]
  },
  {
      key: '3',
      label: 'Events',
      icon: 'pi pi-fw pi-calendar',
      items: [
          {
              key: '3_0',
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {
                      key: '3_0_0',
                      label: 'Save',
                      icon: 'pi pi-fw pi-calendar-plus'
                  },
                  {
                      key: '3_0_0',
                      label: 'Delete',
                      icon: 'pi pi-fw pi-calendar-minus'
                  }
              ]
          },
          {
              key: '3_1',
              label: 'Archieve',
              icon: 'pi pi-fw pi-calendar-times',
              items: [
                  {
                      key: '3_1_0',
                      label: 'Remove',
                      icon: 'pi pi-fw pi-calendar-minus'
                  }
              ]
          }
      ]
  }
]);


const expandAll = () => {
  for (let node of items.value) {
      expandNode(node);
  }

  expandedKeys.value = {...expandedKeys.value};
};

const collapseAll = () => {
  expandedKeys.value = {};
};

const expandNode = (node) => {
  if (node.items && node.items.length) {
      expandedKeys.value[node.key] = true;

      for (let child of node.items) {
          expandNode(child);
      }
  }
};
<\/script>`}}}},Y=e("p",null,[i("Only one single root menuitem can be active by default, enable "),e("i",null,"expandedKeys"),i(" property to be able to open more than one items.")],-1),Z={class:"card flex flex-column align-items-center"};function ee(l,p,s,h,n,d){const o=f,a=x("PanelMenu"),m=k;return r(),b(y,null,[t(o,w(_(l.$attrs)),{default:u(()=>[Y]),_:1},16),e("div",Z,[t(a,{expandedKeys:n.expandedKeys,"onUpdate:expandedKeys":p[0]||(p[0]=v=>n.expandedKeys=v),model:n.items,class:"w-full md:w-25rem"},null,8,["expandedKeys","model"])]),t(m,{code:n.code},null,8,["code"])],64)}const ie=c(X,[["render",ee]]),le={data(){return{expandedKeys:{},items:[{key:"0",label:"File",icon:"pi pi-fw pi-file",items:[{key:"0_0",label:"New",icon:"pi pi-fw pi-plus",items:[{key:"0_0_0",label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{key:"0_0_1",label:"Video",icon:"pi pi-fw pi-video"}]},{key:"0_1",label:"Delete",icon:"pi pi-fw pi-trash"},{key:"0_2",label:"Export",icon:"pi pi-fw pi-external-link"}]},{key:"1",label:"Edit",icon:"pi pi-fw pi-pencil",items:[{key:"1_0",label:"Left",icon:"pi pi-fw pi-align-left"},{key:"1_1",label:"Right",icon:"pi pi-fw pi-align-right"},{key:"1_2",label:"Center",icon:"pi pi-fw pi-align-center"},{key:"1_3",label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{key:"2",label:"Users",icon:"pi pi-fw pi-user",items:[{key:"2_0",label:"New",icon:"pi pi-fw pi-user-plus"},{key:"2_1",label:"Delete",icon:"pi pi-fw pi-user-minus"},{key:"2_2",label:"Search",icon:"pi pi-fw pi-users",items:[{key:"2_2_0",label:"Filter",icon:"pi pi-fw pi-filter",items:[{key:"2_2_0_0",label:"Print",icon:"pi pi-fw pi-print"}]},{key:"2_2_1",icon:"pi pi-fw pi-bars",label:"List"}]}]},{key:"3",label:"Events",icon:"pi pi-fw pi-calendar",items:[{key:"3_0",label:"Edit",icon:"pi pi-fw pi-pencil",items:[{key:"3_0_0",label:"Save",icon:"pi pi-fw pi-calendar-plus"},{key:"3_0_0",label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{key:"3_1",label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{key:"3_1_0",label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]}],code:{basic:'<PanelMenu v-model:expandedKeys="expandedKeys" :model="items" />',options:`<template>
    <div class="card flex flex-column align-items-center">
        <div class="mb-3">
            <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
        <PanelMenu v-model:expandedKeys="expandedKeys" :model="items" class="w-full md:w-25rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            expandedKeys: {},
            items: [
                {
                    key: '0',
                    label: 'File',
                    icon: 'pi pi-fw pi-file',
                    items: [
                        {
                            key: '0_0',
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [
                                {
                                    key: '0_0_0',
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    key: '0_0_1',
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                }
                            ]
                        },
                        {
                            key: '0_1',
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            key: '0_2',
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    key: '1',
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            key: '1_0',
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            key: '1_1',
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            key: '1_2',
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            key: '1_3',
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                    key: '2',
                    label: 'Users',
                    icon: 'pi pi-fw pi-user',
                    items: [
                        {
                            key: '2_0',
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus'
                        },
                        {
                            key: '2_1',
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus'
                        },
                        {
                            key: '2_2',
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [
                                {
                                    key: '2_2_0',
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [
                                        {
                                            key: '2_2_0_0',
                                            label: 'Print',
                                            icon: 'pi pi-fw pi-print'
                                        }
                                    ]
                                },
                                {
                                    key: '2_2_1',
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '3',
                    label: 'Events',
                    icon: 'pi pi-fw pi-calendar',
                    items: [
                        {
                            key: '3_0',
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [
                                {
                                    key: '3_0_0',
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    key: '3_0_0',
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            key: '3_1',
                            label: 'Archieve',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [
                                {
                                    key: '3_1_0',
                                    label: 'Remove',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        expandAll() {
            for (let node of this.items) {
                this.expandNode(node);
            }

            this.expandedKeys = {
                ...this.expandedKeys
            };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.items && node.items.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.items) {
                    this.expandNode(child);
                }
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-column align-items-center">
        <div class="mb-3">
            <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" class="mr-2" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
        <PanelMenu v-model:expandedKeys="expandedKeys" :model="items" class="w-full md:w-25rem"  />
    </div>
</template>

<script setup>
import { ref } from "vue";

const expandedKeys = ref({});
const items = ref([
    {
        key: '0',
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                key: '0_0',
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        key: '0_0_0',
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                    },
                    {
                        key: '0_0_1',
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    }
                ]
            },
            {
                key: '0_1',
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                key: '0_2',
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        key: '1',
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {
                key: '1_0',
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                key: '1_1',
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                key: '1_2',
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                key: '1_3',
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        key: '2',
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                key: '2_0',
                label: 'New',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                key: '2_1',
                label: 'Delete',
                icon: 'pi pi-fw pi-user-minus'
            },
            {
                key: '2_2',
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        key: '2_2_0',
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                            {
                                key: '2_2_0_0',
                                label: 'Print',
                                icon: 'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        key: '2_2_1',
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                    }
                ]
            }
        ]
    },
    {
        key: '3',
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            {
                key: '3_0',
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        key: '3_0_0',
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        key: '3_0_0',
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                key: '3_1',
                label: 'Archieve',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        key: '3_1_0',
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    }
]);


const expandAll = () => {
    for (let node of items.value) {
        expandNode(node);
    }

    expandedKeys.value = {...expandedKeys.value};
};

const collapseAll = () => {
    expandedKeys.value = {};
};

const expandNode = (node) => {
    if (node.items && node.items.length) {
        expandedKeys.value[node.key] = true;

        for (let child of node.items) {
            expandNode(child);
        }
    }
};
<\/script>`}}},methods:{expandAll(){for(let l of this.items)this.expandNode(l);this.expandedKeys={...this.expandedKeys}},collapseAll(){this.expandedKeys={}},expandNode(l){if(l.items&&l.items.length){this.expandedKeys[l.key]=!0;for(let p of l.items)this.expandNode(p)}}}},ne=e("p",null,[i(" If the menuitem has a "),e("i",null,"key"),i(" defined, PanelMenu state can be controlled programmatically with the "),e("i",null,"expandedKeys"),i(" property that defines the keys that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean. Note that "),e("i",null,"expandedKeys"),i(" also supports two-way binding with the v-model directive. ")],-1),te={class:"card flex flex-column align-items-center"},pe={class:"mb-3"};function oe(l,p,s,h,n,d){const o=f,a=x("Button"),m=x("PanelMenu"),v=k;return r(),b(y,null,[t(o,w(_(l.$attrs)),{default:u(()=>[ne]),_:1},16),e("div",te,[e("div",pe,[t(a,{type:"button",icon:"pi pi-plus",label:"Expand All",onClick:d.expandAll,class:"mr-2"},null,8,["onClick"]),t(a,{type:"button",icon:"pi pi-minus",label:"Collapse All",onClick:d.collapseAll},null,8,["onClick"])]),t(m,{expandedKeys:n.expandedKeys,"onUpdate:expandedKeys":p[0]||(p[0]=S=>n.expandedKeys=S),model:n.items,class:"w-full md:w-25rem"},null,8,["expandedKeys","model"])]),t(v,{code:n.code},null,8,["code"])],64)}const ae=c(le,[["render",oe]]),se={},ce=e("p",null,[i(" Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as "),e("i",null,"NuxtLink"),i(" or "),e("i",null,"router-link"),i(". ")],-1);function re(l,p){const s=f;return r(),g(s,w(_(l.$attrs)),{default:u(()=>[ce]),_:1},16)}const de=c(se,[["render",re]]),fe={data(){return{items:[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]}],code:{basic:`<PanelMenu
    :model="items"
    :pt="{
        root: { class: 'w-full md:w-25rem' }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <PanelMenu
            :model="items"
            :pt="{
                root: { class: 'w-full md:w-25rem' }
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
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <PanelMenu
            :model="items"
            :pt="{
                root: { class: 'w-full md:w-25rem' }
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
    }
]);
<\/script>`}}}},me={class:"card flex justify-content-center"};function ue(l,p,s,h,n,d){const o=f,a=x("PanelMenu"),m=k;return r(),b(y,null,[t(o,w(_(l.$attrs)),null,16),e("div",me,[t(a,{model:n.items,pt:{root:{class:"w-full md:w-25rem"}}},null,8,["model"])]),t(m,{code:n.code},null,8,["code"])],64)}const be=c(fe,[["render",ue]]),we={},_e=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/panelmenu.jpg"})],-1);function ye(l,p){const s=f;return r(),b(y,null,[t(s,w(_(l.$attrs)),{default:u(()=>[e("p",null,E(l.$attrs.description),1)]),_:1},16),_e],64)}const he=c(we,[["render",ye]]),ke={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:he},{id:"pt.doc.panelmenu",label:"PanelMenu PT Options",component:N,data:A("PanelMenu")},{id:"pt.demo",label:"Demo",component:be}]}}},xe={class:"doc-main"},ge=e("div",{class:"doc-intro"},[e("h1",null,"PanelMenu Pass Through")],-1);function ve(l,p,s,h,n,d){const o=D,a=$;return r(),b(y,null,[e("div",xe,[ge,t(o,{docs:n.docs},null,8,["docs"])]),t(a,{docs:n.docs},null,8,["docs"])],64)}const De=c(ke,[["render",ve]]),$e={},Se=e("p",null,"List of class names used in the styled mode.",-1),Pe=C('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-panelmenu</td><td>Container element.</td></tr><tr><td>p-panelmenu-panel</td><td>Submenu container.</td></tr><tr><td>p-toggleable-content</td><td>Accordion content of root submenu.</td></tr><tr><td>p-panelmenu-header</td><td>Accordion header of root submenu.</td></tr><tr><td>p-panelmenu-header-content</td><td>Content of accordion header.</td></tr><tr><td>p-panelmenu-header-action</td><td>Action of accordion header.</td></tr><tr><td>p-submenu-list</td><td>List element.</td></tr><tr><td>p-menuitem</td><td>Menuitem element.</td></tr><tr><td>p-menuitem-text</td><td>Label of a menuitem.</td></tr><tr><td>p-menuitem-icon</td><td>Icon of a menuitem.</td></tr><tr><td>p-submenu-icon</td><td>Arrow icon of an accordion header.</td></tr></tbody></table></div>',1);function Ee(l,p){const s=f;return r(),b(y,null,[t(s,w(_(l.$attrs)),{default:u(()=>[Se]),_:1},16),Pe],64)}const Ne=c($e,[["render",Ee]]),Ce={data(){return{code1:{basic:`
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
    panelmenu: {
        root: 'w-full md:w-[25rem]',
        panel: 'mb-1',
        header: {
            class: [
                'outline-none',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]' // Focus
            ]
        },
        headercontent: {
            class: [
                'border border-solid border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 bg-gray-100 dark:bg-gray-900 rounded-md transition-shadow duration-200',
                'hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-700 dark:hover:text-white/80'
            ]
        },
        headeraction: {
            class: ['flex items-center select-none cursor-pointer relative no-underline', 'text-gray-700 dark:text-white/80 p-5 font-bold']
        },
        submenuicon: 'mr-2',
        headericon: 'mr-2',
        menucontent: 'py-1 border border-t-0 border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 rounded-t-none rounded-br-md rounded-bl-md',
        menu: {
            class: ['outline-none', 'm-0 p-0 list-none']
        },
        content: ({ context }) => ({
            class: [
                'text-gray-700 dark:text-white/80 transition-shadow duration-200 border-none rounded-none',
                'hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-700 dark:hover:text-white/80', // Hover
                {
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused
                }
            ]
        }),
        action: {
            class: ['text-gray-700 dark:text-white/80 py-3 px-5 select-none', 'flex items-center cursor-pointer no-underline relative overflow-hidden']
        },
        icon: 'mr-2',
        submenu: 'p-0 pl-4 m-0 list-none',
        transition: TRANSITIONS.toggleable
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <PanelMenu :model="items" class="w-full md:w-96" />
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
    }
]);
<\/script>`}}}},Ke=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ae(l,p,s,h,n,d){const o=T,a=k,m=f;return r(),g(m,w(_(l.$attrs)),{default:u(()=>[e("p",null,[i(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(o,{to:"/tailwind"},{default:u(()=>[i("Tailwind Customization")]),_:1}),i(" section for an example. ")]),t(a,{code:n.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ke,t(a,{code:n.code2,embedded:""},null,8,["code"])]),_:1},16)}const Te=c(Ce,[["render",Ae]]),Me={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ne},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Te}]}]}}},Fe={class:"doc-main"},Re=e("div",{class:"doc-intro"},[e("h1",null,"PanelMenu Theming")],-1);function Le(l,p,s,h,n,d){const o=D,a=$;return r(),b(y,null,[e("div",Fe,[Re,t(o,{docs:n.docs},null,8,["docs"])]),t(a,{docs:n.docs},null,8,["docs"])],64)}const Be=c(Me,[["render",Le]]),je={data(){return{docs:[{id:"import",label:"Import",component:Q},{id:"basic",label:"Basic",component:H},{id:"programmatic",label:"Programmatic",component:ae},{id:"multiple",label:"Multiple",component:ie},{id:"router",label:"Router",component:de},{id:"accessibility",label:"Accessibility",component:J}],ptComponent:De,themingDoc:Be}}};function Ve(l,p,s,h,n,d){const o=K;return r(),g(o,{title:"Vue PanelMenu Component",header:"PanelMenu",description:"PanelMenu is a hybrid of accordion-tree components.",componentDocs:n.docs,apiDocs:["PanelMenu","MenuItem"],ptTabComponent:n.ptComponent,themingDocs:n.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ze=c(je,[["render",Ve]]);export{ze as default};
