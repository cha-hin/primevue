import{_ as m,o as p,e as y,w as d,a as o,m as $,b as i,f as n,p as w,h as _,j as b,c as g,n as x,g as q,F as S,t as L,D as C,k,l as B,v as T,x as U}from"./entry.68beb385.js";import{g as D}from"./PTHelper.11558b27.js";import{_ as j}from"./PrimeVueNuxtLink.f51d0c80.js";const R={data(){return{code:{basic:`<Button label="Show" icon="pi pi-external-link" @click="visible = true" :aria-controls="visible ? 'sbar' : null" :aria-expanded="visible"/>

<Sidebar id="sbar" v-model:visible="visible" role="region" >
    <p>Content</p>
</Sidebar>`}}}},z=i("h3",null,"Screen Reader",-1),P=i("p",null,[n(" Sidebar component uses "),i("i",null,"complementary"),n(" role by default, since any attribute is passed to the root element aria role can be changed depending on your use case and additional attributes like "),i("i",null,"aria-labelledby"),n(" can be added. In addition "),i("i",null,"aria-modal"),n(" is added since focus is kept within the sidebar when opened. ")],-1),F=i("p",null,[n("Trigger element also requires "),i("i",null,"aria-expanded"),n(" and "),i("i",null,"aria-controls"),n(" to be handled explicitly.")],-1),A=i("h3",null,"Overlay Keyboard Support",-1),N=i("div",{class:"doc-tablewrapper"},[i("table",{class:"doc-table"},[i("thead",null,[i("tr",null,[i("th",null,"Key"),i("th",null,"Function")])]),i("tbody",null,[i("tr",null,[i("td",null,[i("i",null,"tab")]),i("td",null,"Moves focus to the next the focusable element within the sidebar.")]),i("tr",null,[i("td",null,[i("i",null,"shift"),n(" + "),i("i",null,"tab")]),i("td",null,"Moves focus to the previous the focusable element within the sidebar.")]),i("tr",null,[i("td",null,[i("i",null,"escape")]),i("td",null,"Closes the dialog.")])])])],-1),V=i("h3",null,"Close Button Keyboard Support",-1),I=i("div",{class:"doc-tablewrapper"},[i("table",{class:"doc-table"},[i("thead",null,[i("tr",null,[i("th",null,"Key"),i("th",null,"Function")])]),i("tbody",null,[i("tr",null,[i("td",null,[i("i",null,"enter")]),i("td",null,"Closes the sidebar.")]),i("tr",null,[i("td",null,[i("i",null,"space")]),i("td",null,"Closes the sidebar.")])])])],-1);function K(s,t,u,v,e,f){const r=w,l=_;return p(),y(l,$({id:"accessibility",label:"Accessibility"},s.$attrs),{default:d(()=>[z,P,F,o(r,$({code:e.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},s.$attrs),null,16,["code"]),A,N,V,I]),_:1},16)}const M=m(R,[["render",K]]),O={data(){return{visible:!1,code:{basic:`<div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible">
        <h2>Sidebar</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Sidebar>
    <Button icon="pi pi-arrow-right" @click="visible = true" />
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},E=i("p",null,[n("Sidebar is used as a container and visibility is controlled with a binding to "),i("i",null,"visible"),n(".")],-1),W={class:"card flex justify-content-center"},G=i("h2",null,"Sidebar",-1),H=i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",-1);function J(s,t,u,v,e,f){const r=_,l=b("Sidebar"),c=b("Button"),h=w;return p(),g(S,null,[o(r,x(q(s.$attrs)),{default:d(()=>[E]),_:1},16),i("div",W,[o(l,{visible:e.visible,"onUpdate:visible":t[0]||(t[0]=a=>e.visible=a)},{default:d(()=>[G,H]),_:1},8,["visible"]),o(c,{icon:"pi pi-arrow-right",onClick:t[1]||(t[1]=a=>e.visible=!0)})]),o(h,{code:e.code},null,8,["code"])],64)}const Q=m(O,[["render",J]]),X={data(){return{visible:!1,code:{basic:`<div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible" position="full">
        <h2>Sidebar</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Sidebar>
    <Button icon="pi pi-arrow-right" @click="visible = true" />
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" position="full">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" position="full">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},Y=i("p",null,[n("Sidebar can cover the whole page when "),i("i",null,"position"),n(" property is equal to "),i("i",null,"full"),n(".")],-1),Z={class:"card flex justify-content-center"},ii=i("h2",null,"Sidebar",-1),ei=i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",-1);function ti(s,t,u,v,e,f){const r=_,l=b("Sidebar"),c=b("Button"),h=w;return p(),g(S,null,[o(r,x(q(s.$attrs)),{default:d(()=>[Y]),_:1},16),i("div",Z,[o(l,{visible:e.visible,"onUpdate:visible":t[0]||(t[0]=a=>e.visible=a),position:"full"},{default:d(()=>[ii,ei]),_:1},8,["visible"]),o(c,{icon:"pi pi-arrow-right",onClick:t[1]||(t[1]=a=>e.visible=!0)})]),o(h,{code:e.code},null,8,["code"])],64)}const oi=m(X,[["render",ti]]),ni={data(){return{code:{basic:"import Sidebar from 'primevue/sidebar';"}}}};function si(s,t,u,v,e,f){const r=_,l=w;return p(),g(S,null,[o(r,x(q(s.$attrs)),null,16),o(l,{code:e.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ai=m(ni,[["render",si]]),li={data(){return{visibleLeft:!1,visibleRight:!1,visibleTop:!1,visibleBottom:!1,code:{basic:`<div class="flex gap-2 justify-content-center">
    <Button icon="pi pi-arrow-right" @click="visibleLeft = true" />
    <Button icon="pi pi-arrow-left" @click="visibleRight = true" />
    <Button icon="pi pi-arrow-down" @click="visibleTop = true" />
    <Button icon="pi pi-arrow-up" @click="visibleBottom = true" />
</div>

<Sidebar v-model:visible="visibleLeft">
    <h2>Left Sidebar</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Sidebar>

<Sidebar v-model:visible="visibleRight" position="right">
    <h2>Right Sidebar</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Sidebar>

<Sidebar v-model:visible="visibleTop" position="top">
    <h2>Top Sidebar</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Sidebar>

<Sidebar v-model:visible="visibleBottom" position="bottom">
    <h2>Bottom Sidebar</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Sidebar>`,options:`<template>
    <div class="card">
        <div class="flex gap-2 justify-content-center">
            <Button icon="pi pi-arrow-right" @click="visibleLeft = true" />
            <Button icon="pi pi-arrow-left" @click="visibleRight = true" />
            <Button icon="pi pi-arrow-down" @click="visibleTop = true" />
            <Button icon="pi pi-arrow-up" @click="visibleBottom = true" />
        </div>

        <Sidebar v-model:visible="visibleLeft">
            <h2>Left Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>

        <Sidebar v-model:visible="visibleRight" position="right">
            <h2>Right Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>

        <Sidebar v-model:visible="visibleTop" position="top">
            <h2>Top Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>

        <Sidebar v-model:visible="visibleBottom" position="bottom">
            <h2>Bottom Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex gap-2 justify-content-center">
            <Button icon="pi pi-arrow-right" @click="visibleLeft = true" />
            <Button icon="pi pi-arrow-left" @click="visibleRight = true" />
            <Button icon="pi pi-arrow-down" @click="visibleTop = true" />
            <Button icon="pi pi-arrow-up" @click="visibleBottom = true" />
        </div>

        <Sidebar v-model:visible="visibleLeft">
            <h2>Left Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>

        <Sidebar v-model:visible="visibleRight" position="right">
            <h2>Right Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>

        <Sidebar v-model:visible="visibleTop" position="top">
            <h2>Top Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>

        <Sidebar v-model:visible="visibleBottom" position="bottom">
            <h2>Bottom Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visibleLeft = ref(false);
const visibleRight = ref(false);
const visibleTop = ref(false);
const visibleBottom = ref(false);
<\/script>`}}}},ri=i("p",null,[n("Sidebar location is configured with the "),i("i",null,"position"),n(" property that can take "),i("i",null,"left"),n(", "),i("i",null,"right"),n(", "),i("i",null,"top"),n(" and "),i("i",null,"bottom"),n(" as a value.")],-1),di={class:"card"},ci={class:"flex gap-2 justify-content-center"},ui=i("h2",null,"Left Sidebar",-1),mi=i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",-1),pi=i("h2",null,"Right Sidebar",-1),bi=i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",-1),vi=i("h2",null,"Top Sidebar",-1),fi=i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",-1),hi=i("h2",null,"Bottom Sidebar",-1),_i=i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",-1);function gi(s,t,u,v,e,f){const r=_,l=b("Button"),c=b("Sidebar"),h=w;return p(),g(S,null,[o(r,x(q(s.$attrs)),{default:d(()=>[ri]),_:1},16),i("div",di,[i("div",ci,[o(l,{icon:"pi pi-arrow-right",onClick:t[0]||(t[0]=a=>e.visibleLeft=!0)}),o(l,{icon:"pi pi-arrow-left",onClick:t[1]||(t[1]=a=>e.visibleRight=!0)}),o(l,{icon:"pi pi-arrow-down",onClick:t[2]||(t[2]=a=>e.visibleTop=!0)}),o(l,{icon:"pi pi-arrow-up",onClick:t[3]||(t[3]=a=>e.visibleBottom=!0)})]),o(c,{visible:e.visibleLeft,"onUpdate:visible":t[4]||(t[4]=a=>e.visibleLeft=a)},{default:d(()=>[ui,mi]),_:1},8,["visible"]),o(c,{visible:e.visibleRight,"onUpdate:visible":t[5]||(t[5]=a=>e.visibleRight=a),position:"right"},{default:d(()=>[pi,bi]),_:1},8,["visible"]),o(c,{visible:e.visibleTop,"onUpdate:visible":t[6]||(t[6]=a=>e.visibleTop=a),position:"top"},{default:d(()=>[vi,fi]),_:1},8,["visible"]),o(c,{visible:e.visibleBottom,"onUpdate:visible":t[7]||(t[7]=a=>e.visibleBottom=a),position:"bottom"},{default:d(()=>[hi,_i]),_:1},8,["visible"])]),o(h,{code:e.code},null,8,["code"])],64)}const Si=m(li,[["render",gi]]),xi={data(){return{visible:!1,code:{basic:`<div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible" class="w-full md:w-20rem lg:w-30rem">
        <h2>Sidebar</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Sidebar>
    <Button icon="pi pi-arrow-right" @click="visible = true" />
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" class="w-full md:w-20rem lg:w-30rem">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible" class="w-full md:w-20rem lg:w-30rem">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},qi=i("p",null,[n("Sidebar dimension can be defined with "),i("i",null,"style"),n(" or "),i("i",null,"class"),n(" properties which can also be responsive when used with a CSS utility library like PrimeFlex.")],-1),wi={class:"card flex justify-content-center"},yi=i("h2",null,"Sidebar",-1),$i=i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",-1);function ki(s,t,u,v,e,f){const r=_,l=b("Sidebar"),c=b("Button"),h=w;return p(),g(S,null,[o(r,x(q(s.$attrs)),{default:d(()=>[qi]),_:1},16),i("div",wi,[o(l,{visible:e.visible,"onUpdate:visible":t[0]||(t[0]=a=>e.visible=a),class:"w-full md:w-20rem lg:w-30rem"},{default:d(()=>[yi,$i]),_:1},8,["visible"]),o(c,{icon:"pi pi-arrow-right",onClick:t[1]||(t[1]=a=>e.visible=!0)})]),o(h,{code:e.code},null,8,["code"])],64)}const Bi=m(xi,[["render",ki]]),Li={data(){return{visible:!1,code:{basic:`<div class="card flex justify-content-center">
    <Sidebar v-model:visible="visible">
        <h2>Sidebar</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <template #header>
            <div class="flex">
                <button class="p-sidebar-icon p-link mr-2">
                    <span class="pi pi-print" />
                </button>
                <button class="p-sidebar-icon p-link mr-2">
                    <span class="pi pi-search" />
                </button>
            </div>
        </template>
    </Sidebar>
    <Button icon="pi pi-plus" @click="visible = true" />
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <template #header>
                <div class="flex">
                    <button class="p-sidebar-icon p-link mr-2">
                        <span class="pi pi-print" />
                    </button>
                    <button class="p-sidebar-icon p-link mr-2">
                        <span class="pi pi-search" />
                    </button>
                </div>
            </template>
        </Sidebar>
        <Button icon="pi pi-plus" @click="visible = true" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible">
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <template #header>
                <div class="flex">
                    <button class="p-sidebar-icon p-link mr-2">
                        <span class="pi pi-print" />
                    </button>
                    <button class="p-sidebar-icon p-link mr-2">
                        <span class="pi pi-search" />
                    </button>
                </div>
            </template>
        </Sidebar>
        <Button icon="pi pi-plus" @click="visible = true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},Ci=i("p",null,[n("Additional content at the header section is provided using the "),i("i",null,"header"),n(" slot.")],-1),Ti={class:"card flex justify-content-center"},Ui=i("h2",null,"Sidebar",-1),Di=i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",-1),ji=i("div",{class:"flex"},[i("button",{class:"p-sidebar-icon p-link mr-2"},[i("span",{class:"pi pi-print"})]),i("button",{class:"p-sidebar-icon p-link mr-2"},[i("span",{class:"pi pi-search"})])],-1);function Ri(s,t,u,v,e,f){const r=_,l=b("Sidebar"),c=b("Button"),h=w;return p(),g(S,null,[o(r,x(q(s.$attrs)),{default:d(()=>[Ci]),_:1},16),i("div",Ti,[o(l,{visible:e.visible,"onUpdate:visible":t[0]||(t[0]=a=>e.visible=a)},{header:d(()=>[ji]),default:d(()=>[Ui,Di]),_:1},8,["visible"]),o(c,{icon:"pi pi-plus",onClick:t[1]||(t[1]=a=>e.visible=!0)})]),o(h,{code:e.code},null,8,["code"])],64)}const zi=m(Li,[["render",Ri]]),Pi={data(){return{visible:!1,code:{basic:`<Sidebar v-model:visible="visible"
    :pt="{
        root: { class: 'w-25rem' }
    }"
>
    <h2>Sidebar</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Sidebar>
<Button icon="pi pi-arrow-right" @click="visible = true" />`,options:`<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible"
            :pt="{
                root: { class: 'w-25rem' }
            }"
        >
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Sidebar v-model:visible="visible"
            :pt="{
                root: { class: 'w-25rem' }
            }"
        >
            <h2>Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},Fi={class:"card flex justify-content-center"},Ai=i("h2",null,"Sidebar",-1),Ni=i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",-1);function Vi(s,t,u,v,e,f){const r=_,l=b("Sidebar"),c=b("Button"),h=w;return p(),g(S,null,[o(r,x(q(s.$attrs)),null,16),i("div",Fi,[o(l,{visible:e.visible,"onUpdate:visible":t[0]||(t[0]=a=>e.visible=a),pt:{root:{class:"w-25rem"}}},{default:d(()=>[Ai,Ni]),_:1},8,["visible"]),o(c,{icon:"pi pi-arrow-right",onClick:t[1]||(t[1]=a=>e.visible=!0)})]),o(h,{code:e.code},null,8,["code"])],64)}const Ii=m(Pi,[["render",Vi]]),Ki={},Mi=i("div",{class:"card"},[i("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/sidebar.jpg"})],-1);function Oi(s,t){const u=_;return p(),g(S,null,[o(u,x(q(s.$attrs)),{default:d(()=>[i("p",null,L(s.$attrs.description),1)]),_:1},16),Mi],64)}const Ei=m(Ki,[["render",Oi]]),Wi={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ei},{id:"pt.doc.sidebar",label:"Sidebar PT Options",component:C,data:D("Sidebar")},{id:"pt.demo",label:"Demo",component:Ii}]}}},Gi={class:"doc-main"},Hi=i("div",{class:"doc-intro"},[i("h1",null,"Sidebar Pass Through")],-1);function Ji(s,t,u,v,e,f){const r=k,l=B;return p(),g(S,null,[i("div",Gi,[Hi,o(r,{docs:e.docs},null,8,["docs"])]),o(l,{docs:e.docs},null,8,["docs"])],64)}const Qi=m(Wi,[["render",Ji]]),Xi={},Yi=i("p",null,"List of class names used in the styled mode.",-1),Zi=T('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-sidebar</td><td>Container element</td></tr><tr><td>p-sidebar-left</td><td>Container element of left sidebar.</td></tr><tr><td>p-sidebar-right</td><td>Container element of right sidebar.</td></tr><tr><td>p-sidebar-top</td><td>Container element of top sidebar.</td></tr><tr><td>p-sidebar-bottom</td><td>Container element of bottom sidebar.</td></tr><tr><td>p-sidebar-full</td><td>Container element of a full screen sidebar.</td></tr><tr><td>p-sidebar-visible</td><td>Container element when sidebar is visible.</td></tr><tr><td>p-sidebar-close</td><td>Close anchor element.</td></tr><tr><td>p-sidebar-sm</td><td>Small sized sidebar.</td></tr><tr><td>p-sidebar-md</td><td>Medium sized sidebar.</td></tr><tr><td>p-sidebar-lg</td><td>Large sized sidebar.</td></tr><tr><td>p-sidebar-mask</td><td>Modal layer of the sidebar.</td></tr></tbody></table></div>',1);function ie(s,t){const u=_;return p(),g(S,null,[o(u,x(q(s.$attrs)),{default:d(()=>[Yi]),_:1},16),Zi],64)}const ee=m(Xi,[["render",ie]]),te={data(){return{code1:{basic:`
export default {
    sidebar: {
        root: ({ props }) => ({
            class: [
                'flex flex-col pointer-events-auto relative transform translate-x-0 translate-y-0 translate-z-0 relative transition-transform duration-300',
                'bg-white text-gray-700 border-0 shadow-lg',
                {
                    '!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': props.position == 'full',
                    'h-full w-80': props.position == 'left' || props.position == 'right',
                    'h-40 w-full': props.position == 'top' || props.position == 'bottom'
                },
                'dark:border dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80'
            ]
        }),
        header: {
            class: ['flex items-center justify-end', 'p-5']
        },
        closeButton: {
            class: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        content: {
            class: ['p-5 pt-0 h-full w-full', 'grow overflow-y-auto']
        },
        mask: {
            class: ['flex pointer-events-auto', 'bg-black bg-opacity-40 transition duration-200 z-20 transition-colors']
        },
        transition: ({ props }) => {
            return props.position === 'top'
                ? {
                      enterFromClass: 'translate-x-0 -translate-y-full translate-z-0',
                      leaveToClass: 'translate-x-0 -translate-y-full translate-z-0'
                  }
                : props.position === 'bottom'
                ? {
                      enterFromClass: 'translate-x-0 translate-y-full translate-z-0',
                      leaveToClass: 'translate-x-0 translate-y-full translate-z-0'
                  }
                : props.position === 'left'
                ? {
                      enterFromClass: '-translate-x-full translate-y-0 translate-z-0',
                      leaveToClass: '-translate-x-full translate-y-0 translate-z-0'
                  }
                : props.position === 'right'
                ? {
                      enterFromClass: 'translate-x-full translate-y-0 translate-z-0',
                      leaveToClass: 'translate-x-full translate-y-0 translate-z-0'
                  }
                : {
                      enterFromClass: 'opacity-0',
                      enterActiveClass: 'transition-opacity duration-400 ease-in',
                      leaveActiveClass: 'transition-opacity duration-400 ease-in',
                      leaveToClass: 'opacity-0'
                  };
        }
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <div class="flex gap-2 justify-center">
            <Button icon="pi pi-arrow-right" @click="visibleLeft = true" />
            <Button icon="pi pi-arrow-left" @click="visibleRight = true" />
            <Button icon="pi pi-arrow-down" @click="visibleTop = true" />
            <Button icon="pi pi-arrow-up" @click="visibleBottom = true" />
        </div>

        <Sidebar v-model:visible="visibleLeft">
            <h2>Left Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>

        <Sidebar v-model:visible="visibleRight" position="right">
            <h2>Right Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>

        <Sidebar v-model:visible="visibleTop" position="top">
            <h2>Top Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>

        <Sidebar v-model:visible="visibleBottom" position="bottom">
            <h2>Bottom Sidebar</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Sidebar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visibleLeft = ref(false);
const visibleRight = ref(false);
const visibleTop = ref(false);
const visibleBottom = ref(false);
<\/script>`}}}},oe=i("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function ne(s,t,u,v,e,f){const r=j,l=w,c=_;return p(),y(c,x(q(s.$attrs)),{default:d(()=>[i("p",null,[n(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(r,{to:"/tailwind"},{default:d(()=>[n("Tailwind Customization")]),_:1}),n(" section for an example. ")]),o(l,{code:e.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),oe,o(l,{code:e.code2,embedded:""},null,8,["code"])]),_:1},16)}const se=m(te,[["render",ne]]),ae={data(){return{docs:[{id:"theming.styled",label:"Styled",component:ee},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:se}]}]}}},le={class:"doc-main"},re=i("div",{class:"doc-intro"},[i("h1",null,"Sidebar Theming")],-1);function de(s,t,u,v,e,f){const r=k,l=B;return p(),g(S,null,[i("div",le,[re,o(r,{docs:e.docs},null,8,["docs"])]),o(l,{docs:e.docs},null,8,["docs"])],64)}const ce=m(ae,[["render",de]]),ue={data(){return{docs:[{id:"import",label:"Import",component:ai},{id:"basic",label:"Basic",component:Q},{id:"position",label:"Position",component:Si},{id:"size",label:"Size",component:Bi},{id:"fullscreen",label:"Full Screen",component:oi},{id:"template",label:"Template",component:zi},{id:"accessibility",label:"Accessibility",component:M}],ptComponent:Qi,themingDoc:ce}}};function me(s,t,u,v,e,f){const r=U;return p(),y(r,{title:"Vue Sidebar Component",header:"Sidebar",description:"Sidebar, also known as Drawer, is a container component displayed as an overlay.",componentDocs:e.docs,apiDocs:["Sidebar"],ptTabComponent:e.ptComponent,themingDocs:e.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const fe=m(ue,[["render",me]]);export{fe as default};
