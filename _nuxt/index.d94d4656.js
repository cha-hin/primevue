import{_ as u,o as p,e as R,w as d,b as e,f as l,a as n,m as S,C as T,h as f,j as y,c as v,n as b,g as $,F as g,p as x,t as C,D as V,k as D,l as w,v as j,x as N}from"./entry.68beb385.js";import{g as P}from"./PTHelper.11558b27.js";import{_ as k}from"./PrimeVueNuxtLink.f51d0c80.js";const I={},B=e("h3",null,"Screen Reader",-1),U=e("i",null,"star",-1),A=e("i",null,"stars",-1),O=e("i",null,"aria",-1),W=e("h3",null,"Keyboard Support",-1),z=e("p",null,"Keyboard interaction is derived from the native browser handling of radio buttons in a group.",-1),K=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the star representing the value, if there is none then first star receives the focus.")]),e("tr",null,[e("td",null,[e("span",{class:"inline-flex flex-column"},[e("i",{class:"mb-1"},"left arrow"),e("i",null,"up arrow")])]),e("td",null,"Moves focus to the previous star, if there is none then last radio button receives the focus.")]),e("tr",null,[e("td",null,[e("span",{class:"inline-flex flex-column"},[e("i",{class:"mb-1"},"right arrow"),e("i",null,"down arrow")])]),e("td",null,"Moves focus to the next star, if there is none then first star receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"If the focused star does not represent the value, changes the value to the star value.")])])])],-1);function E(c,o){const a=T,m=f;return p(),R(m,S({id:"accessibility",label:"Accessibility"},c.$attrs),{default:d(()=>[B,e("p",null,[l(" Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the "),n(a,{to:"/configuration/#locale"},{default:d(()=>[l("locale")]),_:1}),l(" API via "),U,l(" and "),A,l(" of the "),O,l(" property. ")]),W,z,K]),_:1},16)}const F=u(I,[["render",E]]),L={data(){return{value:null,code:{basic:'<Rating v-model="value" />',options:`<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},M=e("p",null,"Two-way value binding is defined using v-model.",-1),q={class:"card flex justify-content-center"};function G(c,o,a,m,t,h){const s=f,i=y("Rating"),r=x;return p(),v(g,null,[n(s,b($(c.$attrs)),{default:d(()=>[M]),_:1},16),e("div",q,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=_=>t.value=_)},null,8,["modelValue"])]),n(r,{code:t.code},null,8,["code"])],64)}const H=u(L,[["render",G]]),J={data(){return{value:5,code:{basic:'<Rating v-model="value" disabled />',options:`<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 5
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" disabled />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(5);
<\/script>`}}}},Q=e("p",null,[l("When "),e("i",null,"disabled"),l(" is present, a visual hint is applied to indicate that the Knob cannot be interacted with.")],-1),X={class:"card flex justify-content-center"};function Y(c,o,a,m,t,h){const s=f,i=y("Rating"),r=x;return p(),v(g,null,[n(s,b($(c.$attrs)),{default:d(()=>[Q]),_:1},16),e("div",X,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=_=>t.value=_),disabled:""},null,8,["modelValue"])]),n(r,{code:t.code},null,8,["code"])],64)}const Z=u(J,[["render",Y]]),ee={data(){return{code:{basic:"import Rating from 'primevue/rating';"}}}};function te(c,o,a,m,t,h){const s=f,i=x;return p(),v(g,null,[n(s,b($(c.$attrs)),null,16),n(i,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ne=u(ee,[["render",te]]),oe={data(){return{value:null,code:{basic:'<Rating v-model="value" :stars="10" />',options:`<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" :stars="10" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" :stars="10" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},ce=e("p",null,[l("Number of stars to display is defined with "),e("i",null,"stars"),l(" property.")],-1),se={class:"card flex justify-content-center"};function ie(c,o,a,m,t,h){const s=f,i=y("Rating"),r=x;return p(),v(g,null,[n(s,b($(c.$attrs)),{default:d(()=>[ce]),_:1},16),e("div",se,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=_=>t.value=_),stars:10},null,8,["modelValue"])]),n(r,{code:t.code},null,8,["code"])],64)}const le=u(oe,[["render",ie]]),ae={data(){return{value:5,code:{basic:'<Rating v-model="value" readonly />',options:`<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" readonly />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" readonly />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},re=e("p",null,[l("When "),e("i",null,"readOnly"),l(" present, value cannot be edited.")],-1),de={class:"card flex justify-content-center"};function ue(c,o,a,m,t,h){const s=f,i=y("Rating"),r=x;return p(),v(g,null,[n(s,b($(c.$attrs)),{default:d(()=>[re]),_:1},16),e("div",de,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=_=>t.value=_),readonly:""},null,8,["modelValue"])]),n(r,{code:t.code},null,8,["code"])],64)}const pe=u(ae,[["render",ue]]),me={data(){return{value:null,code:{basic:`<Rating v-model="value">
    <template #cancelicon>
        <img src="/images/rating/cancel.png" height="24" width="24" />
    </template>
    <template #onicon>
        <img src="/images/rating/custom-onicon.png" height="24" width="24" />
    </template>
    <template #officon>
        <img src="/images/rating/custom-officon.png" height="24" width="24" />
    </template>
</Rating>`,options:`<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value">
            <template #cancelicon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/cancel.png" height="24" width="24" />
            </template>
            <template #onicon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" height="24" width="24" />
            </template>
            <template #officon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" height="24" width="24" />
            </template>
        </Rating>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value">
            <template #cancelicon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/cancel.png" height="24" width="24" />
            </template>
            <template #onicon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png" height="24" width="24" />
            </template>
            <template #officon>
                <img src="https://primefaces.org/cdn/primevue/images/rating/custom-officon.png" height="24" width="24" />
            </template>
        </Rating>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},_e=e("p",null,[l("Custom icons are used to override the default icons with "),e("i",null,"onicon"),l(", "),e("i",null,"officon"),l(" and "),e("i",null,"cancelicon"),l(" slots.")],-1),fe={class:"card flex justify-content-center"},ve=e("img",{src:"https://primefaces.org/cdn/primevue/images/rating/cancel.png",height:"24",width:"24"},null,-1),ge=e("img",{src:"https://primefaces.org/cdn/primevue/images/rating/custom-onicon.png",height:"24",width:"24"},null,-1),he=e("img",{src:"https://primefaces.org/cdn/primevue/images/rating/custom-officon.png",height:"24",width:"24"},null,-1);function be(c,o,a,m,t,h){const s=f,i=y("Rating"),r=x;return p(),v(g,null,[n(s,b($(c.$attrs)),{default:d(()=>[_e]),_:1},16),e("div",fe,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=_=>t.value=_)},{cancelicon:d(()=>[ve]),onicon:d(()=>[ge]),officon:d(()=>[he]),_:1},8,["modelValue"])]),n(r,{code:t.code},null,8,["code"])],64)}const $e=u(me,[["render",be]]),xe={data(){return{value:null,code:{basic:'<Rating v-model="value" :cancel="false" />',options:`<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" :cancel="false"  />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Rating v-model="value" :cancel="false"  />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},ye=e("p",null,[l("A cancel icon is displayed to reset the value by default, set "),e("i",null,"cancel"),l(" as false to remove this option.")],-1),Re={class:"card flex justify-content-center"};function De(c,o,a,m,t,h){const s=f,i=y("Rating"),r=x;return p(),v(g,null,[n(s,b($(c.$attrs)),{default:d(()=>[ye]),_:1},16),e("div",Re,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=_=>t.value=_),cancel:!1},null,8,["modelValue"])]),n(r,{code:t.code},null,8,["code"])],64)}const we=u(xe,[["render",De]]),Se={data(){return{value:null,code:{basic:`<Rating
    v-model="value"
    :pt="{
        onIcon: { class: 'text-orange-400' }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Rating
            v-model="value"
            :pt="{
                onIcon: { class: 'text-orange-400' }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Rating
            v-model="value"
            :pt="{
                onIcon: { class: 'text-orange-400' }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},Te={class:"card flex justify-content-center"};function Ce(c,o,a,m,t,h){const s=f,i=y("Rating"),r=x;return p(),v(g,null,[n(s,b($(c.$attrs)),null,16),e("div",Te,[n(i,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=_=>t.value=_),pt:{onIcon:{class:"text-orange-400"}}},null,8,["modelValue"])]),n(r,{code:t.code},null,8,["code"])],64)}const Ve=u(Se,[["render",Ce]]),je={},Ne=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/rating.jpg"})],-1);function Pe(c,o){const a=f;return p(),v(g,null,[n(a,b($(c.$attrs)),{default:d(()=>[e("p",null,C(c.$attrs.description),1)]),_:1},16),Ne],64)}const ke=u(je,[["render",Pe]]),Ie={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ke},{id:"pt.doc.steps",label:"Rating PT Options",component:V,data:P("Rating")},{id:"pt.demo",label:"Demo",component:Ve}]}}},Be={class:"doc-main"},Ue=e("div",{class:"doc-intro"},[e("h1",null,"Rating Pass Through")],-1);function Ae(c,o,a,m,t,h){const s=D,i=w;return p(),v(g,null,[e("div",Be,[Ue,n(s,{docs:t.docs},null,8,["docs"])]),n(i,{docs:t.docs},null,8,["docs"])],64)}const Oe=u(Ie,[["render",Ae]]),We={},ze=e("p",null,"List of class names used in the styled mode.",-1),Ke=j('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-rating</td><td>Container element</td></tr><tr><td>p-rating-item</td><td>Each item element</td></tr><tr><td>p-rating-item-active</td><td>Selected item elements.</td></tr><tr><td>p-rating-cancel-item</td><td>Cancel item element.</td></tr></tbody></table></div>',1);function Ee(c,o){const a=f;return p(),v(g,null,[n(a,b($(c.$attrs)),{default:d(()=>[ze]),_:1},16),Ke],64)}const Fe=u(We,[["render",Ee]]),Le={data(){return{code1:{basic:`
export default {
    rating: {
        root: ({ props }) => ({
            class: [
                'relative flex items-center',
                'gap-2',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        cancelitem: ({ context }) => ({
            class: [
                'inline-flex items-center cursor-pointer',
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
                }
            ]
        }),
        cancelicon: {
            class: ['text-red-500', 'w-5 h-5', 'transition duration-200 ease-in']
        },
        item: ({ props, context }) => ({
            class: [
                'inline-flex items-center',
                {
                    'cursor-pointer': !props.readonly,
                    'cursor-default': props.readonly
                },
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
                }
            ]
        }),
        officon: {
            class: ['text-gray-700 hover:text-blue-400', 'w-5 h-5', 'transition duration-200 ease-in']
        },
        onicon: {
            class: ['text-blue-500', 'w-5 h-5', 'transition duration-200 ease-in']
        }
    },
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Rating v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},Me=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function qe(c,o,a,m,t,h){const s=k,i=x,r=f;return p(),R(r,b($(c.$attrs)),{default:d(()=>[e("p",null,[l(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(s,{to:"/tailwind"},{default:d(()=>[l("Tailwind Customization")]),_:1}),l(" section for an example. ")]),n(i,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Me,n(i,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const Ge=u(Le,[["render",qe]]),He={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Fe},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Ge}]}]}}},Je={class:"doc-main"},Qe=e("div",{class:"doc-intro"},[e("h1",null,"Rating Theming")],-1);function Xe(c,o,a,m,t,h){const s=D,i=w;return p(),v(g,null,[e("div",Je,[Qe,n(s,{docs:t.docs},null,8,["docs"])]),n(i,{docs:t.docs},null,8,["docs"])],64)}const Ye=u(He,[["render",Xe]]),Ze={data(){return{docs:[{id:"import",label:"Import",component:ne},{id:"basic",label:"Basic",component:H},{id:"withoutcancel",label:"Without Cancel",component:we},{id:"numberofstars",label:"Number of Stars",component:le},{id:"template",label:"Template",component:$e},{id:"readonly",label:"ReadOnly",component:pe},{id:"disabled",label:"Disabled",component:Z},{id:"accessibility",label:"Accessibility",component:F}],ptComponent:Oe,themingDoc:Ye}}};function et(c,o,a,m,t,h){const s=N;return p(),R(s,{title:"Vue Rating Component",header:"Rating",description:"Rating component is a star based selection input.",componentDocs:t.docs,apiDocs:["Rating"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ct=u(Ze,[["render",et]]);export{ct as default};
