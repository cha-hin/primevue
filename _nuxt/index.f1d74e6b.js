import{_ as v,o as b,e as D,w as r,b as e,f as a,a as o,m as k,C,p as y,h,j as p,c as g,n as _,g as w,F as x,t as S,D as T,k as $,l as B,v as L,x as U}from"./entry.68beb385.js";import{g as P}from"./PTHelper.11558b27.js";import{_ as E}from"./PrimeVueNuxtLink.f51d0c80.js";const N={data(){return{code:{basic:`<Button label="Show" icon="pi pi-external-link" @click="visible = true" :aria-controls="visible ? 'dlg' : null" :aria-expanded="visible ? true : false" />

<Dialog id="dlg" header="Header" v-model:visible="visible" :style="{ width: '50vw' }">
    <p>Content</p>
</Dialog>`}}}},j=e("h3",null,"Screen Reader",-1),H=e("p",null,[a(" Dialog component uses "),e("i",null,"dialog"),a(" role along with "),e("i",null,"aria-labelledby"),a(" referring to the header element however any attribute is passed to the root element so you may use "),e("i",null,"aria-labelledby"),a(" to override this default behavior. In addition "),e("i",null,"aria-modal"),a(" is added since focus is kept within the popup. ")],-1),A=e("p",null,[a("Trigger element also requires "),e("i",null,"aria-expanded"),a(" and "),e("i",null,"aria-controls"),a(" to be handled explicitly.")],-1),z=e("i",null,"button",-1),I=e("i",null,"aria-label",-1),R=e("i",null,"aria.close",-1),F=e("i",null,"closeButtonProps",-1),Q=e("i",null,"aria-label",-1),Y=e("h3",null,"Overlay Keyboard Support",-1),M=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,[a("Moves focus to the next the focusable element within the dialog if "),e("i",null,"modal"),a(" is true. Otherwise, the focusable element in the page tab sequence.")])]),e("tr",null,[e("td",null,[e("i",null,"shift"),a(" + "),e("i",null,"tab")]),e("td",null,[a("Moves focus to the previous the focusable element within the dialog if "),e("i",null,"modal"),a(" is true. Otherwise, the focusable element in the page tab sequence.")])]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,[a("Closes the dialog if "),e("i",null,"closeOnEscape"),a(" is true.")])])])])],-1),V=e("h3",null,"Close Button Keyboard Support",-1),O=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Closes the dialog.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Closes the dialog.")])])])],-1);function K(l,i,m,q,t,c){const u=C,s=y,d=h;return b(),D(d,k({id:"accessibility",label:"Accessibility"},l.$attrs),{default:r(()=>[j,H,A,e("p",null,[a(" Close element is a "),z,a(" with an "),I,a(" that refers to the "),R,a(" property of the "),o(u,{to:"/configuration/#locale"},{default:r(()=>[a("locale")]),_:1}),a(" API by default, you may use "),F,a(" to customize the element and override the default "),Q,a(". ")]),o(s,k({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},l.$attrs),null,16,["code"]),Y,M,V,O]),_:1},16)}const W=v(N,[["render",K]]),G={data(){return{visible:!1,code:{basic:`<Button label="Show" icon="pi pi-external-link" @click="visible = true" />

<Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>`,options:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},J=e("p",null,[a("Dialog is used as a container and visibility is controlled with a binding to "),e("i",null,"visible"),a(". Dialogs are "),e("i",null,"draggable"),a(" by default.")],-1),X={class:"card flex justify-content-center"},Z=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function ee(l,i,m,q,t,c){const u=h,s=p("Button"),d=p("Dialog"),f=y;return b(),g(x,null,[o(u,_(w(l.$attrs)),{default:r(()=>[J]),_:1},16),e("div",X,[o(s,{label:"Show",icon:"pi pi-external-link",onClick:i[0]||(i[0]=n=>t.visible=!0)}),o(d,{visible:t.visible,"onUpdate:visible":i[1]||(i[1]=n=>t.visible=n),modal:"",header:"Header",style:{width:"50vw"}},{default:r(()=>[Z]),_:1},8,["visible"])]),o(f,{code:t.code},null,8,["code"])],64)}const ie=v(G,[["render",ee]]),te={data(){return{visible:!1,code:{basic:`<Button label="Show" icon="pi pi-external-link" @click="visible = true" />

<Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <template #footer>
        <Button label="No" icon="pi pi-times" @click="visible = false" text />
        <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
    </template>
</Dialog>`,options:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="visible = false" text />
                <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="visible = false" text />
                <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},oe=e("p",null,[a("Custom content such as buttons can be placed at the footer section with the "),e("i",null,"footer"),a(" slot.")],-1),ae={class:"card flex justify-content-center"},se=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function ne(l,i,m,q,t,c){const u=h,s=p("Button"),d=p("Dialog"),f=y;return b(),g(x,null,[o(u,_(w(l.$attrs)),{default:r(()=>[oe]),_:1},16),e("div",ae,[o(s,{label:"Show",icon:"pi pi-external-link",onClick:i[0]||(i[0]=n=>t.visible=!0)}),o(d,{visible:t.visible,"onUpdate:visible":i[3]||(i[3]=n=>t.visible=n),modal:"",header:"Header",style:{width:"50vw"}},{footer:r(()=>[o(s,{label:"No",icon:"pi pi-times",onClick:i[1]||(i[1]=n=>t.visible=!1),text:""}),o(s,{label:"Yes",icon:"pi pi-check",onClick:i[2]||(i[2]=n=>t.visible=!1),autofocus:""})]),default:r(()=>[se]),_:1},8,["visible"])]),o(f,{code:t.code},null,8,["code"])],64)}const le=v(te,[["render",ne]]),ue={data(){return{code:{basic:"import Dialog from 'primevue/dialog';"}}}};function re(l,i,m,q,t,c){const u=h,s=y;return b(),g(x,null,[o(u,_(w(l.$attrs)),null,16),o(s,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ce=v(ue,[["render",re]]),de={data(){return{visible:!1,code:{basic:`<Button label="Show" icon="pi pi-external-link" @click="visible = true" />

<Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
    <p class="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p class="mb-5">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
        ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <p class="mb-5">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
        non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    </p>
    <p class="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p class="mb-5">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
        ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <p class="mb-5">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
        non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    </p>
</Dialog>`,options:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
            <p class="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="mb-5">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <p class="mb-5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
            <p class="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="mb-5">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <p class="mb-5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
        </Dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
            <p class="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="mb-5">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <p class="mb-5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
            <p class="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="mb-5">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <p class="mb-5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},me=e("p",null,"Dialog automatically displays a scroller when content exceeeds viewport.",-1),pe={class:"card flex justify-content-center"},ve=e("p",{class:"mb-5"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),be=e("p",{class:"mb-5"},' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ',-1),fe=e("p",{class:"mb-5"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. ",-1),qe=e("p",{class:"mb-5"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),he=e("p",{class:"mb-5"},' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ',-1),ge=e("p",{class:"mb-5"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. ",-1);function xe(l,i,m,q,t,c){const u=h,s=p("Button"),d=p("Dialog"),f=y;return b(),g(x,null,[o(u,_(w(l.$attrs)),{default:r(()=>[me]),_:1},16),e("div",pe,[o(s,{label:"Show",icon:"pi pi-external-link",onClick:i[0]||(i[0]=n=>t.visible=!0)}),o(d,{visible:t.visible,"onUpdate:visible":i[1]||(i[1]=n=>t.visible=n),modal:"",header:"Header",style:{width:"50vw"}},{default:r(()=>[ve,be,fe,qe,he,ge]),_:1},8,["visible"])]),o(f,{code:t.code},null,8,["code"])],64)}const _e=v(de,[["render",xe]]),we={data(){return{visible:!1,code:{basic:`<Button label="Show" icon="pi pi-external-link" @click="visible = true" />

<Dialog v-model:visible="visible" maximizable modal header="Header" :style="{ width: '50vw' }">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>`,options:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" maximizable modal header="Header" :style="{ width: '50vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" maximizable modal header="Header" :style="{ width: '50vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},ye=e("p",null,[a("Adding "),e("i",null,"maximizable"),a(" property enables the full screen mode.")],-1),De={class:"card flex justify-content-center"},ke=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function $e(l,i,m,q,t,c){const u=h,s=p("Button"),d=p("Dialog"),f=y;return b(),g(x,null,[o(u,_(w(l.$attrs)),{default:r(()=>[ye]),_:1},16),e("div",De,[o(s,{label:"Show",icon:"pi pi-external-link",onClick:i[0]||(i[0]=n=>t.visible=!0)}),o(d,{visible:t.visible,"onUpdate:visible":i[1]||(i[1]=n=>t.visible=n),maximizable:"",modal:"",header:"Header",style:{width:"50vw"}},{default:r(()=>[ke]),_:1},8,["visible"])]),o(f,{code:t.code},null,8,["code"])],64)}const Be=v(we,[["render",$e]]),Ce={data(){return{position:"center",visible:!1,code:{basic:`<div class="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" severity="help" style="min-width: 10rem" />
    <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" severity="help" style="min-width: 10rem" />
</div>
<div class="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" severity="warning" style="min-width: 10rem" />
    <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" severity="warning" style="min-width: 10rem" />
    <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" severity="warning" style="min-width: 10rem" />
</div>
<div class="flex flex-wrap justify-content-center gap-2">
    <Button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" severity="success" style="min-width: 10rem" />
    <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" severity="success" style="min-width: 10rem" />
    <Button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" severity="success" style="min-width: 10rem" />
</div>

<Dialog v-model:visible="visible" header="Header" :style="{ width: '50vw' }" :position="position" :modal="true" :draggable="false">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <template #footer>
        <Button label="No" icon="pi pi-times" @click="visible = false" text />
        <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
    </template>
</Dialog>`,options:`<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" severity="help" style="min-width: 10rem" />
            <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" severity="help" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" severity="warning" style="min-width: 10rem" />
            <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" severity="warning" style="min-width: 10rem" />
            <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" severity="warning" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" severity="success" style="min-width: 10rem" />
            <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" severity="success" style="min-width: 10rem" />
            <Button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" severity="success" style="min-width: 10rem" />
        </div>

        <Dialog v-model:visible="visible" header="Header" :style="{ width: '50vw' }" :position="position" :modal="true" :draggable="false">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="visible = false" text />
                <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            position: 'center',
            visible: false
        };
    },
    methods: {
        openPosition(position) {
            this.position = position;
            this.visible = true;
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="Left" icon="pi pi-arrow-right" @click="openPosition('left')" severity="help" style="min-width: 10rem" />
            <Button label="Right" icon="pi pi-arrow-left" @click="openPosition('right')" severity="help" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2 mb-2">
            <Button label="TopLeft" icon="pi pi-arrow-down-right" @click="openPosition('topleft')" severity="warning" style="min-width: 10rem" />
            <Button label="Top" icon="pi pi-arrow-down" @click="openPosition('top')" severity="warning" style="min-width: 10rem" />
            <Button label="TopRight" icon="pi pi-arrow-down-left" @click="openPosition('topright')" severity="warning" style="min-width: 10rem" />
        </div>
        <div class="flex flex-wrap justify-content-center gap-2">
            <Button label="BottomLeft" icon="pi pi-arrow-up-right" @click="openPosition('bottomleft')" severity="success" style="min-width: 10rem" />
            <Button label="Bottom" icon="pi pi-arrow-up" @click="openPosition('bottom')" severity="success" style="min-width: 10rem" />
            <Button label="BottomRight" icon="pi pi-arrow-up-left" @click="openPosition('bottomright')" severity="success" style="min-width: 10rem" />
        </div>

        <Dialog v-model:visible="visible" header="Header" :style="{ width: '50vw' }" :position="position" :modal="true" :draggable="false">
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="visible = false" text />
                <Button label="Yes" icon="pi pi-check" @click="visible = false" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const position = ref('center');
const visible = ref(false);

const openPosition = (pos) => {
    position.value = pos;
    visible.value = true;
}
<\/script>`}}},methods:{openPosition(l){this.position=l,this.visible=!0}}},Se=e("p",null,[a("The "),e("i",null,"position"),a(" property is used to display a Dialog at all edges and corners of the screen.")],-1),Te={class:"card"},Le={class:"flex flex-wrap justify-content-center gap-2 mb-2"},Ue={class:"flex flex-wrap justify-content-center gap-2 mb-2"},Pe={class:"flex flex-wrap justify-content-center gap-2"},Ee=e("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function Ne(l,i,m,q,t,c){const u=h,s=p("Button"),d=p("Dialog"),f=y;return b(),g(x,null,[o(u,_(w(l.$attrs)),{default:r(()=>[Se]),_:1},16),e("div",Te,[e("div",Le,[o(s,{label:"Left",icon:"pi pi-arrow-right",onClick:i[0]||(i[0]=n=>c.openPosition("left")),severity:"help",style:{"min-width":"10rem"}}),o(s,{label:"Right",icon:"pi pi-arrow-left",onClick:i[1]||(i[1]=n=>c.openPosition("right")),severity:"help",style:{"min-width":"10rem"}})]),e("div",Ue,[o(s,{label:"TopLeft",icon:"pi pi-arrow-down-right",onClick:i[2]||(i[2]=n=>c.openPosition("topleft")),severity:"warning",style:{"min-width":"10rem"}}),o(s,{label:"Top",icon:"pi pi-arrow-down",onClick:i[3]||(i[3]=n=>c.openPosition("top")),severity:"warning",style:{"min-width":"10rem"}}),o(s,{label:"TopRight",icon:"pi pi-arrow-down-left",onClick:i[4]||(i[4]=n=>c.openPosition("topright")),severity:"warning",style:{"min-width":"10rem"}})]),e("div",Pe,[o(s,{label:"BottomLeft",icon:"pi pi-arrow-up-right",onClick:i[5]||(i[5]=n=>c.openPosition("bottomleft")),severity:"success",style:{"min-width":"10rem"}}),o(s,{label:"Bottom",icon:"pi pi-arrow-up",onClick:i[6]||(i[6]=n=>c.openPosition("bottom")),severity:"success",style:{"min-width":"10rem"}}),o(s,{label:"BottomRight",icon:"pi pi-arrow-up-left",onClick:i[7]||(i[7]=n=>c.openPosition("bottomright")),severity:"success",style:{"min-width":"10rem"}})]),o(d,{visible:t.visible,"onUpdate:visible":i[10]||(i[10]=n=>t.visible=n),header:"Header",style:{width:"50vw"},position:t.position,modal:!0,draggable:!1},{footer:r(()=>[o(s,{label:"No",icon:"pi pi-times",onClick:i[8]||(i[8]=n=>t.visible=!1),text:""}),o(s,{label:"Yes",icon:"pi pi-check",onClick:i[9]||(i[9]=n=>t.visible=!1),autofocus:""})]),default:r(()=>[Ee]),_:1},8,["visible","position"])]),o(f,{code:t.code},null,8,["code"])],64)}const je=v(Ce,[["render",Ne]]),He={data(){return{visible:!1,code:{basic:`<Button label="Show" icon="pi pi-external-link" @click="visible = true" />

<Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }" :breakpoints="{ '960px': '75vw', '641px': '100vw' }">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>`,options:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }" :breakpoints="{ '960px': '75vw', '641px': '100vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }" :breakpoints="{ '960px': '75vw', '641px': '100vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},Ae=e("p",null,[a(" Dialog width can be adjusted per screen size with the "),e("i",null,"breakpoints"),a(" option where a key defines the max-width for the breakpoint and value for the corresponding width. When no breakpoint matches width defined in "),e("i",null,"style"),a(" property is used. ")],-1),ze={class:"card flex justify-content-center"},Ie=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function Re(l,i,m,q,t,c){const u=h,s=p("Button"),d=p("Dialog"),f=y;return b(),g(x,null,[o(u,_(w(l.$attrs)),{default:r(()=>[Ae]),_:1},16),e("div",ze,[o(s,{label:"Show",icon:"pi pi-external-link",onClick:i[0]||(i[0]=n=>t.visible=!0)}),o(d,{visible:t.visible,"onUpdate:visible":i[1]||(i[1]=n=>t.visible=n),modal:"",header:"Header",style:{width:"50vw"},breakpoints:{"960px":"75vw","641px":"100vw"}},{default:r(()=>[Ie]),_:1},8,["visible"])]),o(f,{code:t.code},null,8,["code"])],64)}const Fe=v(He,[["render",Re]]),Qe={data(){return{visible:!1,code:{basic:`<Button label="Show" icon="pi pi-external-link" @click="visible = true" />

<Dialog v-model:visible="visible" header="Header" :style="{ width: '50vw' }">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>`,options:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" header="Header" :style="{ width: '50vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" header="Header" :style="{ width: '50vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},Ye=e("p",null,[a("Mask layer behind the Dialog can be turned off by disabling the "),e("i",null,"modal"),a(" property.")],-1),Me={class:"card flex justify-content-center"},Ve=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function Oe(l,i,m,q,t,c){const u=h,s=p("Button"),d=p("Dialog"),f=y;return b(),g(x,null,[o(u,_(w(l.$attrs)),{default:r(()=>[Ye]),_:1},16),e("div",Me,[o(s,{label:"Show",icon:"pi pi-external-link",onClick:i[0]||(i[0]=n=>t.visible=!0)}),o(d,{visible:t.visible,"onUpdate:visible":i[1]||(i[1]=n=>t.visible=n),header:"Header",style:{width:"50vw"}},{default:r(()=>[Ve]),_:1},8,["visible"])]),o(f,{code:t.code},null,8,["code"])],64)}const Ke=v(Qe,[["render",Oe]]),We={data(){return{visible:!1,code:{basic:`<Dialog
    v-model:visible="visible"
    modal
    header="Header"
    :pt="{
        root: { class: 'w-12 sm:w-9 md:w-6' }
    }"
>
    <p>Lorem ipsum </p>
</Dialog>`,options:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />

        <Dialog
            v-model:visible="visible"
            modal
            header="Header"
            :pt="{
                root: { class: 'w-12 sm:w-9 md:w-6' }
            }"
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />

        <Dialog
            v-model:visible="visible"
            modal
            header="Header"
            :pt="{
                root: { class: 'w-12 sm:w-9 md:w-6' }
            }"
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},Ge={class:"card flex justify-content-center"},Je=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function Xe(l,i,m,q,t,c){const u=h,s=p("Button"),d=p("Dialog"),f=y;return b(),g(x,null,[o(u,_(w(l.$attrs)),null,16),e("div",Ge,[o(s,{label:"Show",icon:"pi pi-external-link",onClick:i[0]||(i[0]=n=>t.visible=!0)}),o(d,{visible:t.visible,"onUpdate:visible":i[1]||(i[1]=n=>t.visible=n),modal:"",header:"Header",pt:{root:{class:"w-12 sm:w-9 md:w-6"}}},{default:r(()=>[Je]),_:1},8,["visible"])]),o(f,{code:t.code},null,8,["code"])],64)}const Ze=v(We,[["render",Xe]]),ei={},ii=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/dialog.jpg"})],-1);function ti(l,i){const m=h;return b(),g(x,null,[o(m,_(w(l.$attrs)),{default:r(()=>[e("p",null,S(l.$attrs.description),1)]),_:1},16),ii],64)}const oi=v(ei,[["render",ti]]),ai={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:oi},{id:"pt.doc.dialog",label:"Dialog PT Options",component:T,data:P("Dialog")},{id:"pt.demo",label:"Demo",component:Ze}]}}},si={class:"doc-main"},ni=e("div",{class:"doc-intro"},[e("h1",null,"Dialog Pass Through")],-1);function li(l,i,m,q,t,c){const u=$,s=B;return b(),g(x,null,[e("div",si,[ni,o(u,{docs:t.docs},null,8,["docs"])]),o(s,{docs:t.docs},null,8,["docs"])],64)}const ui=v(ai,[["render",li]]),ri={},ci=e("p",null,"List of class names used in the styled mode.",-1),di=L('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-dialog</td><td>Container element.</td></tr><tr><td>p-dialog-titlebar</td><td>Container of header.</td></tr><tr><td>p-dialog-title</td><td>Header element.</td></tr><tr><td>p-dialog-titlebar-icon</td><td>Icon container inside header.</td></tr><tr><td>p-dialog-titlebar-close</td><td>Close icon element.</td></tr><tr><td>p-dialog-content</td><td>Content element</td></tr></tbody></table></div>',1);function mi(l,i){const m=h;return b(),g(x,null,[o(m,_(w(l.$attrs)),{default:r(()=>[ci]),_:1},16),di],64)}const pi=v(ri,[["render",mi]]),vi={data(){return{code1:{basic:`
export default {
    dialog: {
        root: ({ state }) => ({
            class: [
                'rounded-lg shadow-lg border-0',
                'max-h-90 transform scale-100',
                'm-0 w-[50vw]',
                'dark:border dark:border-blue-900/40',
                {
                    'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': state.maximized
                }
            ]
        }),
        header: {
            class: ['flex items-center justify-between shrink-0', 'bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6', 'dark:bg-gray-900  dark:text-white/80']
        },
        headerTitle: 'font-bold text-lg',
        headerIcons: 'flex items-center',
        closeButton: {
            class: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        content: ({ state }) => ({
            class: [
                'overflow-y-auto',
                'bg-white text-gray-700 px-6 pb-8 pt-0',
                'rounded-bl-lg rounded-br-lg',
                'dark:bg-gray-900  dark:text-white/80 ',
                {
                    grow: state.maximized
                }
            ]
        }),
        footer: {
            class: ['shrink-0 ', 'border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg', 'dark:bg-gray-900  dark:text-white/80']
        },
        mask: ({ props }) => ({
            class: ['transition duration-200', { 'bg-black/40': props.modal }]
        }),
        transition: ({ props }) => {
            return props.position === 'top'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0'
                  }
                : props.position === 'bottom'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-y-full',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0'
                  }
                : props.position === 'left' || props.position === 'topleft' || props.position === 'bottomleft'
                ? {
                      enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0'
                  }
                : props.position === 'right' || props.position === 'topright' || props.position === 'bottomright'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
                  }
                : {
                      enterFromClass: 'opacity-0 scale-75',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75'
                  };
        }
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
        <Dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
<\/script>`}}}},bi=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function fi(l,i,m,q,t,c){const u=E,s=y,d=h;return b(),D(d,_(w(l.$attrs)),{default:r(()=>[e("p",null,[a(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(u,{to:"/tailwind"},{default:r(()=>[a("Tailwind Customization")]),_:1}),a(" section for an example. ")]),o(s,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),bi,o(s,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const qi=v(vi,[["render",fi]]),hi={data(){return{docs:[{id:"theming.styled",label:"Styled",component:pi},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:qi}]}]}}},gi={class:"doc-main"},xi=e("div",{class:"doc-intro"},[e("h1",null,"Dialog Theming")],-1);function _i(l,i,m,q,t,c){const u=$,s=B;return b(),g(x,null,[e("div",gi,[xi,o(u,{docs:t.docs},null,8,["docs"])]),o(s,{docs:t.docs},null,8,["docs"])],64)}const wi=v(hi,[["render",_i]]),yi={data(){return{docs:[{id:"import",label:"Import",component:ce},{id:"basic",label:"Basic",component:ie},{id:"footer",label:"Footer",component:le},{id:"longcontent",label:"Long Content",component:_e},{id:"modal",label:"Without Modal",component:Ke},{id:"responsive",label:"Responsive",component:Fe},{id:"position",label:"Position",component:je},{id:"maximizable",label:"Maximizable",component:Be},{id:"accessibility",label:"Accessibility",component:W}],ptComponent:ui,themingDoc:wi}}};function Di(l,i,m,q,t,c){const u=U;return b(),D(u,{title:"Vue Dialog Component",header:"Dialog",description:"Dialog is a container to display content in an overlay window",componentDocs:t.docs,apiDocs:["Dialog"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ci=v(yi,[["render",Di]]);export{Ci as default};
