import{_ as n,o as p,e as $,w as h,a as o,m as S,b as e,f as s,p as D,h as b,j as x,c as y,n as v,g as _,F as f,G as g,t as k,D as j,k as U,l as A,v as V,x as W}from"./entry.68beb385.js";import{_ as T}from"./PrimeVueNuxtLink.f51d0c80.js";import{g as R}from"./PTHelper.11558b27.js";const q={data(){return{code:{basic:'<SpeedDial aria-label="Options" />'}}}},P=e("h3",null,"Screen Reader",-1),O=e("p",null,[s(" SpeedDial component renders a native button element that implicitly includes any passed prop. Text to describe the button can be defined with the "),e("i",null,"aria-labelledby"),s(" or "),e("i",null,"aria-label"),s(" props. Addititonally the button includes includes "),e("i",null,"aria-haspopup"),s(", "),e("i",null,"aria-expanded"),s(" for states along with "),e("i",null,"aria-controls"),s(" to define the relation between the popup and the button. ")],-1),I=e("p",null,[s("The popup overlay uses "),e("i",null,"menu"),s(" role on the list and each action item has a "),e("i",null,"menuitem"),s(" role with an "),e("i",null,"aria-label"),s(" as the menuitem label. The id of the menu refers to the "),e("i",null,"aria-controls"),s(" of the button.")],-1),z=e("h3",null,"Menu Button Keyboard Support",-1),N=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Toggles the visibility of the menu.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the visibility of the menu.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Opens the menu and moves focus to the first item.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Opens the menu and moves focus to the last item.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Opens the menu and moves focus to the last item.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Opens the menu and moves focus to the first item.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the menu.")])])])],-1),B=e("h3",null,"Menu Keyboard Support",-1),M=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Actives the menuitem, closes the menu and sets focus on the menu button.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Actives the menuitem, closes the menu and sets focus on the menu button.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the menu and sets focus on the menu button.")]),e("tr",null,[e("td",null,[e("i",null,"arrow keys")]),e("td",null,"Navigates between the menu items.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first item.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last item.")])])])],-1);function L(a,c,r,m,t,u){const l=D,i=b;return p(),$(i,S({id:"accessibility",label:"Accessibility"},a.$attrs),{default:h(()=>[P,O,I,o(l,S({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},a.$attrs),null,16,["code"]),z,N,B,M]),_:1},16)}const F=n(q,[["render",L]]),K={data(){return{items:[{label:"Add",icon:"pi pi-pencil",command:()=>{this.$toast.add({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{this.$toast.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.$router.push("/fileupload")}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}}],code:{basic:'<SpeedDial :model="items" :radius="80" type="circle" buttonClass="p-button-warning" />',options:`<template>
    <div class="card">
        <div :style="{ height: '500px' }" class="flex align-items-center justify-content-center">
            <SpeedDial :model="items" :radius="80" type="circle" buttonClass="p-button-warning" />
            <Toast />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Add',
                    icon: 'pi pi-pencil',
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                    }
                },
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        this.$router.push('/fileupload');
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                }
            ]
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <div :style="{ height: '500px' }" class="flex align-items-center justify-content-center">
            <SpeedDial :model="items" :radius="80" type="circle" buttonClass="p-button-warning" />
            <Toast />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>`}}}},E=e("p",null,[s("Items can be displayed around the button when "),e("i",null,"type"),s(" is set to "),e("i",null,"circle"),s(". Additional "),e("i",null,"radius"),s(" property defines the radius of the circle.")],-1),Q={class:"card"},G={style:{height:"500px"},class:"flex align-items-center justify-content-center"};function H(a,c,r,m,t,u){const l=b,i=x("SpeedDial"),d=D;return p(),y(f,null,[o(l,v(_(a.$attrs)),{default:h(()=>[E]),_:1},16),e("div",Q,[e("div",G,[o(i,{model:t.items,radius:80,type:"circle",buttonClass:"p-button-warning"},null,8,["model"])])]),o(d,{code:t.code},null,8,["code"])],64)}const J=n(K,[["render",H]]),X={data(){return{items:[{label:"Add",icon:"pi pi-pencil",command:()=>{this.$toast.add({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{this.$toast.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.$router.push("/fileupload")}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}}],code:{basic:`<Toast />
<SpeedDial :model="items" direction="up" :transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClass="p-button-outlined" />`,options:`<template>
    <div class="card">
        <div class="flex align-items-end justify-content-center" :style="{ position: 'relative', height: '350px' }">
            <Toast />
            <SpeedDial :model="items" direction="up" :transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClass="p-button-outlined" />
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          items: [
              {
                  label: 'Add',
                  icon: 'pi pi-pencil',
                  command: () => {
                      this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                  }
              },
              {
                  label: 'Update',
                  icon: 'pi pi-refresh',
                  command: () => {
                      this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                  }
              },
              {
                  label: 'Delete',
                  icon: 'pi pi-trash',
                  command: () => {
                      this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                  }
              },
              {
                  label: 'Upload',
                  icon: 'pi pi-upload',
                  command: () => {
                      this.$router.push('/fileupload');
                  }
              },
              {
                  label: 'Vue Website',
                  icon: 'pi pi-external-link',
                  command: () => {
                      window.location.href = 'https://vuejs.org/';
                  }
              }
          ]
      }
  }
};
<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex align-items-end justify-content-center" :style="{ position: 'relative', height: '350px' }">
            <Toast />
            <SpeedDial :model="items" direction="up" :transitionDelay="80" showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClass="p-button-outlined" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
  {
      label: 'Add',
      icon: 'pi pi-pencil',
      command: () => {
          toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
      }
  },
  {
      label: 'Update',
      icon: 'pi pi-refresh',
      command: () => {
          toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
      }
  },
  {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
          toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
      }
  },
  {
      label: 'Upload',
      icon: 'pi pi-upload',
      command: () => {
          router.push('/fileupload');
      }
  },
  {
      label: 'Vue Website',
      icon: 'pi pi-external-link',
      command: () => {
          window.location.href = 'https://vuejs.org/'
      }
  }
])
<\/script>`}}}},Y=e("p",null,[s("SpeedDial sample with an outlined button, custom icons and "),e("i",null,"transitionDelay"),s(".")],-1),Z={class:"card"},ee={class:"flex align-items-end justify-content-center",style:{position:"relative",height:"350px"}};function te(a,c,r,m,t,u){const l=b,i=x("SpeedDial"),d=D;return p(),y(f,null,[o(l,v(_(a.$attrs)),{default:h(()=>[Y]),_:1},16),e("div",Z,[e("div",ee,[o(i,{model:t.items,direction:"up",transitionDelay:80,showIcon:"pi pi-bars",hideIcon:"pi pi-times",buttonClass:"p-button-outlined"},null,8,["model"])])]),o(d,{code:t.code},null,8,["code"])],64)}const oe=n(X,[["render",te]]),ie={data(){return{code:{basic:"import SpeedDial from 'primevue/speeddial';"}}}};function se(a,c,r,m,t,u){const l=b,i=D;return p(),y(f,null,[o(l,v(_(a.$attrs)),null,16),o(i,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ae=n(ie,[["render",se]]),le={data(){return{items:[{label:"Add",icon:"pi pi-pencil",command:()=>{this.$toast.add({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{this.$toast.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.$router.push("/fileupload")}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}}],code:{basic:`<SpeedDial :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
<SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
<SpeedDial :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
<SpeedDial :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />`,options:`<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <SpeedDial :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
            <SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <SpeedDial :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <SpeedDial :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
            <Toast />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Add',
                    icon: 'pi pi-pencil',
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                    }
                },
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        this.$router.push('/fileupload');
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                }
            ]
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <SpeedDial :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
            <SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <SpeedDial :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <SpeedDial :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
            <Toast />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>`}}}},de=e("p",null,[s("SpeedDial items are defined with the "),e("i",null,"model"),s(" property based on MenuModel API. Default orientation of the items is linear and "),e("i",null,"direction"),s(" property is used to define the position of the items related to the button.")],-1),re={class:"card"},ne={style:{position:"relative",height:"500px"}};function pe(a,c,r,m,t,u){const l=b,i=x("SpeedDial"),d=D;return p(),y(f,null,[o(l,v(_(a.$attrs)),{default:h(()=>[de]),_:1},16),e("div",re,[e("div",ne,[o(i,{model:t.items,direction:"up",style:g({left:"calc(50% - 2rem)",bottom:0})},null,8,["model","style"]),o(i,{model:t.items,direction:"down",style:g({left:"calc(50% - 2rem)",top:0})},null,8,["model","style"]),o(i,{model:t.items,direction:"left",style:g({top:"calc(50% - 2rem)",right:0})},null,8,["model","style"]),o(i,{model:t.items,direction:"right",style:g({top:"calc(50% - 2rem)",left:0})},null,8,["model","style"])])]),o(d,{code:t.code},null,8,["code"])],64)}const ce=n(le,[["render",pe]]),me={data(){return{items:[{label:"Add",icon:"pi pi-pencil",command:()=>{this.$toast.add({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{this.$toast.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.$router.push("/fileupload")}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}}],code:{basic:'<SpeedDial :model="items" direction="up" mask :style="{ right: 0, bottom: 0 }" />',options:`<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" mask :style="{ right: 0, bottom: 0 }" />
            <Toast />
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        items: [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.$router.push('/fileupload');
                }
            },
            {
                label: 'Vue Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://vuejs.org/';
                }
            }
        ]
    }
}
};
<\/script>`,composition:`<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" mask :style="{ right: 0, bottom: 0 }" />
            <Toast />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>`}}}},ue=e("p",null,[s("Adding "),e("i",null,"mask"),s(" property displays a modal layer behind the popup items.")],-1),he={class:"card"},be={style:{position:"relative",height:"350px"}};function ye(a,c,r,m,t,u){const l=b,i=x("SpeedDial"),d=D;return p(),y(f,null,[o(l,v(_(a.$attrs)),{default:h(()=>[ue]),_:1},16),e("div",he,[e("div",be,[o(i,{model:t.items,direction:"up",mask:"",style:{right:0,bottom:0}},null,8,["model"])])]),o(d,{code:t.code},null,8,["code"])],64)}const fe=n(me,[["render",ye]]),ve={data(){return{items:[{label:"Add",icon:"pi pi-pencil",command:()=>{this.$toast.add({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{this.$toast.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.$router.push("/fileupload")}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}}],code:{basic:`<SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-left" :style="{ right: 0, bottom: 0 }" />
<SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-right" :style="{ left: 0, bottom: 0 }" />
<SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-left" :style="{ right: 0, top: 0 }" />
<SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-right" :style="{ left: 0, top: 0 }" />`,options:`<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-left" :style="{ right: 0, bottom: 0 }" />
            <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-right" :style="{ left: 0, bottom: 0 }" />
            <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-left" :style="{ right: 0, top: 0 }" />
            <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-right" :style="{ left: 0, top: 0 }" />
            <Toast />
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        items: [
            {
                label: 'Add',
                icon: 'pi pi-pencil',
                command: () => {
                    this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                }
            },
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    this.$router.push('/fileupload');
                }
            },
            {
                label: 'Vue Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://vuejs.org/';
                }
            }
        ]
    }
}
};
<\/script>`,composition:`<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-left" :style="{ right: 0, bottom: 0 }" />
            <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="up-right" :style="{ left: 0, bottom: 0 }" />
            <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-left" :style="{ right: 0, top: 0 }" />
            <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-right" :style="{ left: 0, top: 0 }" />
            <Toast />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>`}}}},_e=e("p",null,[s("Setting "),e("i",null,"type"),s(" as "),e("i",null,"quarter-circle"),s(" displays the items at one of four corners of a button based on the "),e("i",null,"direction"),s(".")],-1),De={class:"card"},ge={style:{position:"relative",height:"500px"}};function xe(a,c,r,m,t,u){const l=b,i=x("SpeedDial"),d=D;return p(),y(f,null,[o(l,v(_(a.$attrs)),{default:h(()=>[_e]),_:1},16),e("div",De,[e("div",ge,[o(i,{model:t.items,radius:120,type:"quarter-circle",direction:"up-left",style:{right:0,bottom:0}},null,8,["model"]),o(i,{model:t.items,radius:120,type:"quarter-circle",direction:"up-right",style:{left:0,bottom:0}},null,8,["model"]),o(i,{model:t.items,radius:120,type:"quarter-circle",direction:"down-left",style:{right:0,top:0}},null,8,["model"]),o(i,{model:t.items,radius:120,type:"quarter-circle",direction:"down-right",style:{left:0,top:0}},null,8,["model"])])]),o(d,{code:t.code},null,8,["code"])],64)}const $e=n(ve,[["render",xe]]),we={data(){return{items:[{label:"Add",icon:"pi pi-pencil",command:()=>{this.$toast.add({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{this.$toast.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.$router.push("/fileupload")}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}}],code:{basic:`<SpeedDial :model="items" :radius="80" type="semi-circle" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
<SpeedDial :model="items" :radius="80" type="semi-circle" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />`,options:`<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <SpeedDial :model="items" :radius="80" type="semi-circle" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <SpeedDial :model="items" :radius="80" type="semi-circle" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
            <SpeedDial :model="items" :radius="80" type="semi-circle" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <SpeedDial :model="items" :radius="80" type="semi-circle" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
            <Toast />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Add',
                    icon: 'pi pi-pencil',
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                    }
                },
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        this.$router.push('/fileupload');
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                }
            ]
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card" :style="{ position: 'relative', height: '500px' }">
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
        <SpeedDial :model="items" :radius="80" type="semi-circle" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
        <Toast />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>`}}}},Se=e("p",null,[s("When "),e("i",null,"type"),s(" is defined as "),e("i",null,"semi-circle"),s(", items are displayed in a half-circle around the button.")],-1),Ue={class:"card"},Ae={style:{position:"relative",height:"500px"}};function Te(a,c,r,m,t,u){const l=b,i=x("SpeedDial"),d=D;return p(),y(f,null,[o(l,v(_(a.$attrs)),{default:h(()=>[Se]),_:1},16),e("div",Ue,[e("div",Ae,[o(i,{model:t.items,radius:80,type:"semi-circle",direction:"down",style:g({left:"calc(50% - 2rem)",top:0})},null,8,["model","style"]),o(i,{model:t.items,radius:80,type:"semi-circle",direction:"right",style:g({top:"calc(50% - 2rem)",left:0})},null,8,["model","style"]),o(i,{model:t.items,radius:80,type:"semi-circle",direction:"left",style:g({top:"calc(50% - 2rem)",right:0})},null,8,["model","style"]),o(i,{model:t.items,radius:80,type:"semi-circle",direction:"up",style:g({left:"calc(50% - 2rem)",bottom:0})},null,8,["model","style"])])]),o(d,{code:t.code},null,8,["code"])],64)}const Ce=n(we,[["render",Te]]),ke={data(){return{items:[{label:"Add",icon:"pi pi-pencil",command:()=>{this.$toast.add({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{this.$toast.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.$router.push("/fileupload")}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}}],code:{basic:`<SpeedDial :model="items" direction="up" class="right-0 bottom-0" buttonClass="p-button-help" :tooltipOptions="{ position: 'left' }" />
<SpeedDial :model="items" direction="up" class="left-0 bottom-0" buttonClass="p-button-danger" :tooltipOptions="{ position: 'right' }" />`,options:`<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" class="right-0 bottom-0" buttonClass="p-button-help" :tooltipOptions="{ position: 'left' }" />
            <SpeedDial :model="items" direction="up" class="left-0 bottom-0" buttonClass="p-button-danger" :tooltipOptions="{ position: 'right' }" />
            <Toast />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Add',
                    icon: 'pi pi-pencil',
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                    }
                },
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        this.$router.push('/fileupload');
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                }
            ]
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '350px' }">
            <SpeedDial :model="items" direction="up" class="right-0 bottom-0" buttonClass="p-button-help" :tooltipOptions="{ position: 'left' }" />
            <SpeedDial :model="items" direction="up" class="left-0 bottom-0" buttonClass="p-button-danger" :tooltipOptions="{ position: 'right' }" />
            <Toast />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>`}}}},je={class:"card"},Ve={style:{position:"relative",height:"350px"}};function We(a,c,r,m,t,u){const l=T,i=b,d=x("SpeedDial"),w=D;return p(),y(f,null,[o(i,v(_(a.$attrs)),{default:h(()=>[e("p",null,[s("Items display a tooltip on hober when a standalone "),o(l,{to:"/tooltip"},{default:h(()=>[s("Tooltip")]),_:1}),s(" is present with a target that matches the items.")])]),_:1},16),e("div",je,[e("div",Ve,[o(d,{model:t.items,direction:"up",class:"right-0 bottom-0",buttonClass:"p-button-help",tooltipOptions:{position:"left"}},null,8,["model"]),o(d,{model:t.items,direction:"up",class:"left-0 bottom-0",buttonClass:"p-button-danger",tooltipOptions:{position:"right"}},null,8,["model"])])]),o(w,{code:t.code},null,8,["code"])],64)}const Re=n(ke,[["render",We]]),qe={data(){return{items:[{label:"Add",icon:"pi pi-pencil",command:()=>{this.$toast.add({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{this.$toast.add({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{this.$toast.add({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{this.$router.push("/fileupload")}},{label:"Vue Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://vuejs.org/"}}],code:{basic:`<SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }"
    :pt="{
        action: ({ props, state, context }) => ({
            class: context.active ? 'bg-primary' : undefined
        })
    }"
/>`,options:`<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '300px' }">
            <SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }"
                :pt="{
                    action: ({ props, state, context }) => ({
                        class: context.active ? 'bg-primary' : undefined
                    })
                }"
            />
        </div>
        <Toast />
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Add',
                    icon: 'pi pi-pencil',
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
                    }
                },
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-trash',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
                    }
                },
                {
                    label: 'Upload',
                    icon: 'pi pi-upload',
                    command: () => {
                        this.$router.push('/fileupload');
                    }
                },
                {
                    label: 'Vue Website',
                    icon: 'pi pi-external-link',
                    command: () => {
                        window.location.href = 'https://vuejs.org/';
                    }
                }
            ]
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '300px' }">
            <SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }"
                :pt="{
                    action: ({ props, state, context }) => ({
                        class: context.active ? 'bg-primary' : undefined
                    })
                }"
            />
        </div>
        <Toast />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>`}}}},Pe={class:"card"},Oe={style:{position:"relative",height:"300px"}};function Ie(a,c,r,m,t,u){const l=b,i=x("SpeedDial"),d=D;return p(),y(f,null,[o(l,v(_(a.$attrs)),null,16),e("div",Pe,[e("div",Oe,[o(i,{model:t.items,direction:"down",style:g({left:"calc(50% - 2rem)",top:0}),pt:{action:({props:w,state:mt,context:C})=>({class:C.active?"bg-primary":void 0})}},null,8,["model","style","pt"])])]),o(d,{code:t.code},null,8,["code"])],64)}const ze=n(qe,[["render",Ie]]),Ne={},Be=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/speeddial.jpg"})],-1);function Me(a,c){const r=b;return p(),y(f,null,[o(r,v(_(a.$attrs)),{default:h(()=>[e("p",null,k(a.$attrs.description),1)]),_:1},16),Be],64)}const Le=n(Ne,[["render",Me]]),Fe={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Le},{id:"pt.doc.speeddial",label:"SpeedDial PT Options",component:j,data:R("SpeedDial")},{id:"pt.demo",label:"Demo",component:ze}]}}},Ke={class:"doc-main"},Ee=e("div",{class:"doc-intro"},[e("h1",null,"SpeedDial Pass Through")],-1);function Qe(a,c,r,m,t,u){const l=U,i=A;return p(),y(f,null,[e("div",Ke,[Ee,o(l,{docs:t.docs},null,8,["docs"])]),o(i,{docs:t.docs},null,8,["docs"])],64)}const Ge=n(Fe,[["render",Qe]]),He={},Je=e("p",null,"List of class names used in the styled mode.",-1),Xe=V('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-speeddial</td><td>Container element.</td></tr><tr><td>p-speeddial-button</td><td>Button element of speeddial.</td></tr><tr><td>p-speeddial-mask</td><td>Mask element of speeddial.</td></tr><tr><td>p-speeddial-list</td><td>List of the actions.</td></tr><tr><td>p-speeddial-item</td><td>Each action item of list.</td></tr></tbody></table></div>',1);function Ye(a,c){const r=b;return p(),y(f,null,[o(r,v(_(a.$attrs)),{default:h(()=>[Je]),_:1},16),Xe],64)}const Ze=n(He,[["render",Ye]]),et={data(){return{code1:{basic:`
export default {
    speeddial: {
        root: 'absolute flex',
        button: {
            root: ({ parent }) => ({
                class: [
                    'w-16 !h-16 !rounded-full justify-center z-10',
                    {
                        'rotate-45': parent.state.d_visible
                    }
                ]
            }),
            label: {
                class: 'hidden'
            }
        },
        menu: 'm-0 p-0 list-none flex items-center justify-center transition delay-200 z-20',
        menuitem: ({ props, context }) => ({
            class: [
                'transform transition-transform duration-200 ease-out transition-opacity duration-800',
                context.hidden ? 'opacity-0 scale-0' : 'opacity-1 scale-100',
                {
                    'my-1 first:mb-2': props.direction == 'up' && props.type == 'linear',
                    'my-1 first:mt-2': props.direction == 'down' && props.type == 'linear',
                    'mx-1 first:mr-2': props.direction == 'left' && props.type == 'linear',
                    'mx-1 first:ml-2': props.direction == 'right' && props.type == 'linear'
                },
                { absolute: props.type !== 'linear' }
            ]
        }),
        action: {
            class: ['flex items-center justify-center rounded-full relative overflow-hidden', 'w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white']
        },
        mask: ({ state }) => ({
            class: [
                'absolute left-0 top-0 w-full h-full transition-opacity duration-250 ease-in-out bg-black/40 z-0',
                {
                    'opacity-0': !state.d_visible,
                    'pointer-events-none opacity-100 transition-opacity duration-400 ease-in-out': state.d_visible
                }
            ]
        })
    },
    button: {
        root: ({ props, context }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom h-full',
                'transition duration-200 ease-in-out',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]', // Primary button focus
                {
                    'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                    'text-blue-600 bg-transparent border-transparent': props.link
                },
                {
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-green-500 border border-green-500 hover:bg-green-600 hover:border-green-600': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-orange-500 border border-orange-500 hover:bg-orange-600 hover:border-orange-600': props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:border-purple-600': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-red-500 border border-red-500 hover:bg-red-600 hover:border-red-600': props.severity === 'danger' && !props.text && !props.outlined && !props.plain
                },
                { 'shadow-lg': props.raised },
                { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
                {
                    'bg-transparent border-transparent': props.text && !props.plain,
                    'text-blue-500 hover:bg-blue-300/20': props.text && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 hover:bg-gray-300/20': props.text && props.severity === 'secondary' && !props.plain,
                    'text-green-500 hover:bg-green-300/20': props.text && props.severity === 'success' && !props.plain,
                    'text-orange-500 hover:bg-orange-300/20': props.text && props.severity === 'warning' && !props.plain,
                    'text-purple-500 hover:bg-purple-300/20': props.text && props.severity === 'help' && !props.plain,
                    'text-red-500 hover:bg-red-300/20': props.text && props.severity === 'danger' && !props.plain
                },
                { 'shadow-lg': props.raised && props.text },
                {
                    'text-gray-500 hover:bg-gray-300/20': props.plain & props.text,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.plain & props.outlined,
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain & !props.outlined & !props.text
                },
                {
                    'bg-transparent border': props.outlined && !props.plain,
                    'text-blue-500 border border-blue-500 hover:bg-blue-300/20': props.outlined && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.outlined && props.severity === 'secondary' && !props.plain,
                    'text-green-500 border border-green-500 hover:bg-green-300/20': props.outlined && props.severity === 'success' && !props.plain,
                    'text-orange-500 border border-orange-500 hover:bg-orange-300/20': props.outlined && props.severity === 'warning' && !props.plain,
                    'text-purple-500 border border-purple-500 hover:bg-purple-300/20': props.outlined && props.severity === 'help' && !props.plain,
                    'text-red-500 border border-red-500 hover:bg-red-300/20': props.outlined && props.severity === 'danger' && !props.plain
                },
                { 'px-4 py-3 text-base': props.size === null, 'text-xs py-2 px-3': props.size === 'small', 'text-xl py-3 px-4': props.size === 'large' },
                { 'opacity-60 pointer-events-none cursor-default': context.disabled }
            ]
        }),
        label: ({ props }) => ({
            class: [
                'flex-1',
                'duration-200',
                'font-bold',
                {
                    'hover:underline': props.link
                }
            ]
        }),
        icon: ({ props }) => ({
            class: [
                'mx-0',
                {
                    'mr-2': props.iconPos == 'left' && props.label != null,
                    'ml-2': props.iconPos == 'right' && props.label != null,
                    'mb-2': props.iconPos == 'top' && props.label != null,
                    'mt-2': props.iconPos == 'bottom' && props.label != null
                }
            ]
        }),
        badge: ({ props }) => ({
            class: [{ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge }]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <div :style="{ position: 'relative', height: '500px' }">
            <SpeedDial :model="items" direction="up" :style="{ left: 'calc(50% - 2rem)', bottom: 0 }" />
            <SpeedDial :model="items" direction="down" :style="{ left: 'calc(50% - 2rem)', top: 0 }" />
            <SpeedDial :model="items" direction="left" :style="{ top: 'calc(50% - 2rem)', right: 0 }" />
            <SpeedDial :model="items" direction="right" :style="{ top: 'calc(50% - 2rem)', left: 0 }" />
            <Toast />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';

const toast = useToast();
const router = useRouter();

const items = ref([
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            router.push('/fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
])
<\/script>`}}}},tt={class:"overflow-auto",style:{"max-height":"40rem"}},ot=e("p",{class:"mt-6"},"A playground sample with the pre-built Tailwind theme.",-1);function it(a,c,r,m,t,u){const l=T,i=D,d=b;return p(),$(d,v(_(a.$attrs)),{default:h(()=>[e("p",null,[s(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(l,{to:"/tailwind"},{default:h(()=>[s("Tailwind Customization")]),_:1}),s(" section for an example. ")]),e("div",tt,[o(i,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])]),ot,o(i,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const st=n(et,[["render",it]]),at={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ze},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:st}]}]}}},lt={class:"doc-main"},dt=e("div",{class:"doc-intro"},[e("h1",null,"Speed Dial Theming")],-1);function rt(a,c,r,m,t,u){const l=U,i=A;return p(),y(f,null,[e("div",lt,[dt,o(l,{docs:t.docs},null,8,["docs"])]),o(i,{docs:t.docs},null,8,["docs"])],64)}const nt=n(at,[["render",rt]]),pt={data(){return{docs:[{id:"import",label:"Import",component:ae},{id:"linear",label:"Linear",component:ce},{id:"circle",label:"Circle",component:J},{id:"semi-circle",label:"Semi Circle",component:Ce},{id:"quarter-circle",label:"Quarter Circle",component:$e},{id:"tooltip",label:"Tooltip",component:Re},{id:"mask",label:"Mask",component:fe},{id:"custom",label:"Custom",component:oe},{id:"accessibility",label:"Accessibility",component:F}],ptComponent:Ge,themingDoc:nt}}};function ct(a,c,r,m,t,u){const l=W;return p(),$(l,{title:"Vue Speed Dial Component",header:"Speed Dial",description:"When pressed, a floating action button can display multiple primary actions that can be performed on a page.",componentDocs:t.docs,apiDocs:["SpeedDial"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const yt=n(pt,[["render",ct]]);export{yt as default};
