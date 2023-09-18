import{_ as u,o as m,e as S,w as v,a as o,m as w,b as e,f as a,p as g,h as _,j as x,c as f,n as C,g as $,F as b,t as D,B as k,A as F,D as P,k as T,l as V,v as M,x as B}from"./entry.68beb385.js";import{u as z,a as A}from"./vee-validate.esm.3b430014.js";import{g as I}from"./PTHelper.11558b27.js";import{_ as U}from"./PrimeVueNuxtLink.f51d0c80.js";const N={data(){return{code:{basic:`<label for="chips1">Tags</label>
<Chips inputId="chips1" />

<span id="chips2">Tags</span>
<Chips aria-labelledby="chips2" />

<Chips aria-label="Tags" />`}}}},j=e("h3",null,"Screen Reader",-1),q=e("p",null,[a(" Value to describe the component can either be provided via "),e("i",null,"label"),a(" tag combined with "),e("i",null,"inputId"),a(" prop or using "),e("i",null,"aria-labelledby"),a(", "),e("i",null,"aria-label"),a(" props. Chip list uses "),e("i",null,"listbox"),a(" role with "),e("i",null,"aria-orientation"),a(" set to horizontal whereas each chip has the "),e("i",null,"option"),a(" role with "),e("i",null,"aria-label"),a(" set to the label of the chip. ")],-1),K=e("h3",null,"Input Field Keyboard Support",-1),L=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the input element")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Adds a new chips using the input field value.")]),e("tr",null,[e("td",null,[e("i",null,"backspace")]),e("td",null,"Deletes the previous chip if the input field is empty.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Moves focus to the previous chip if available and input field is empty.")])])])],-1),E=e("h3",null,"Chip Keyboard Support",-1),O=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Moves focus to the previous chip if available.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Moves focus to the next chip, if there is none then input field receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"backspace")]),e("td",null,"Deletes the chips and adds focus to the input field.")])])])],-1);function R(s,l,r,c,t,h){const i=g,n=_;return m(),S(n,w({id:"accessibility",label:"Accessibility"},s.$attrs),{default:v(()=>[j,q,o(i,w({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},s.$attrs),null,16,["code"]),K,L,E,O]),_:1},16)}const W=u(N,[["render",R]]),G={data(){return{value:null,code:{basic:'<Chips v-model="value" />',options:`<template>
    <div class="card p-fluid">
        <Chips v-model="value" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card p-fluid">
        <Chips v-model="value" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`}}}},H=e("p",null,[a("Chips is used as a controlled input with "),e("i",null,"v-model"),a(" property where it should be an array.")],-1),J={class:"card p-fluid"};function Q(s,l,r,c,t,h){const i=_,n=x("Chips"),d=g;return m(),f(b,null,[o(i,C($(s.$attrs)),{default:v(()=>[H]),_:1},16),e("div",J,[o(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=p=>t.value=p)},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const X=u(G,[["render",Q]]),Y={data(){return{value:null,code:{basic:'<Chips v-model="value" disabled />',options:`<template>
    <div class="card p-fluid">
        <Chips v-model="value" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card p-fluid">
        <Chips v-model="value" disabled />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`}}}},Z=e("p",null,[a("When "),e("i",null,"disabled"),a(" is present, the element cannot be edited and focused.")],-1),ee={class:"card p-fluid"};function te(s,l,r,c,t,h){const i=_,n=x("Chips"),d=g;return m(),f(b,null,[o(i,C($(s.$attrs)),{default:v(()=>[Z]),_:1},16),e("div",ee,[o(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=p=>t.value=p),disabled:""},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const oe=u(Y,[["render",te]]),le={data(){return{value:null,code:{basic:`<span class="p-float-label">
    <Chips id="chips" v-model="value" />
    <label for="chips">Chips</label>
</span>`,options:`<template>
    <div class="card p-fluid">
        <span class="p-float-label">
            <Chips id="chips" v-model="value" />
            <label for="chips">Chips</label>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card p-fluid">
        <span class="p-float-label">
            <Chips id="chips" v-model="value" />
            <label for="chips">Chips</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`}}}},se=e("p",null,"A floating label appears on top of the input field when focused.",-1),ne={class:"card p-fluid"},ie={class:"p-float-label"},ae=e("label",{for:"chips"},"Chips",-1);function ce(s,l,r,c,t,h){const i=_,n=x("Chips"),d=g;return m(),f(b,null,[o(i,C($(s.$attrs)),{default:v(()=>[se]),_:1},16),e("div",ne,[e("span",ie,[o(n,{id:"chips",modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=p=>t.value=p)},null,8,["modelValue"]),ae])]),o(d,{code:t.code},null,8,["code"])],64)}const re=u(le,[["render",ce]]),de={data(){return{code:{basic:"import Chips from 'primevue/chips';"}}}};function pe(s,l,r,c,t,h){const i=_,n=g;return m(),f(b,null,[o(i,C($(s.$attrs)),null,16),o(n,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ue=u(de,[["render",pe]]),me={data(){return{value:null,code:{basic:'<Chips v-model="value" class="p-invalid" />',options:`<template>
    <div class="card p-fluid">
        <Chips v-model="value" class="p-invalid" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card p-fluid">
        <Chips v-model="value" class="p-invalid" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`}}}},he=e("p",null,[a("Invalid state style is added using the "),e("i",null,"p-invalid"),a(" class to indicate a failed validation.")],-1),ve={class:"card p-fluid"};function _e(s,l,r,c,t,h){const i=_,n=x("Chips"),d=g;return m(),f(b,null,[o(i,C($(s.$attrs)),{default:v(()=>[he]),_:1},16),e("div",ve,[o(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=p=>t.value=p),class:"p-invalid"},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const fe=u(me,[["render",_e]]),be={data(){return{value:null,code:{basic:'<Chips v-model="value" separator=","  />',options:`<template>
    <div class="card p-fluid">
        <Chips v-model="value" separator="," />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card p-fluid">
        <Chips v-model="value" separator=","  />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`}}}},Ce=e("p",null,[a("A new chip is added when "),e("i",null,"enter"),a(" key is pressed, "),e("i",null,"separator"),a(" property allows definining an additional key. Currently only valid value is "),e("i",null,","),a(" to create a new item when comma key is pressed.")],-1),$e={class:"card p-fluid"};function ge(s,l,r,c,t,h){const i=_,n=x("Chips"),d=g;return m(),f(b,null,[o(i,C($(s.$attrs)),{default:v(()=>[Ce]),_:1},16),e("div",$e,[o(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=p=>t.value=p),separator:","},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const xe=u(be,[["render",ge]]),ye={data(){return{value:null,code:{basic:`<Chips v-model="value">
    <template #chip="slotProps">
        <div>
            <span>{{ slotProps.value }} - (active) </span>
            <i class="pi pi-user-plus" style="font-size: 14px"></i>
        </div>
    </template>
</Chips>`,options:`<template>
    <div class="card p-fluid">
        <Chips v-model="value">
            <template #chip="slotProps">
                <div>
                    <span>{{ slotProps.value }} - (active) </span>
                    <i class="pi pi-user-plus" style="font-size: 14px"></i>
                </div>
            </template>
        </Chips>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card p-fluid">
        <Chips v-model="value">
            <template #chip="slotProps">
                <div>
                    <span>{{ slotProps.value }} - (active) </span>
                    <i class="pi pi-user-plus" style="font-size: 14px"></i>
                </div>
            </template>
        </Chips>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`}}}},Se=e("p",null,[a("Chip content is customized using "),e("i",null,"item"),a(" slot that receives a single chip value as a parameter.")],-1),De={class:"card p-fluid"},we=e("i",{class:"pi pi-user-plus",style:{"font-size":"14px"}},null,-1);function Te(s,l,r,c,t,h){const i=_,n=x("Chips"),d=g;return m(),f(b,null,[o(i,C($(s.$attrs)),{default:v(()=>[Se]),_:1},16),e("div",De,[o(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=p=>t.value=p)},{chip:v(p=>[e("div",null,[e("span",null,D(p.value)+" - (active) ",1),we])]),_:1},8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const Ve=u(ye,[["render",Te]]),ke={setup(){const{handleSubmit:s,resetForm:l}=z(),{value:r,errorMessage:c}=A("value",h),t=k();function h(n){return n?!0:"At least one chip is required."}const i=s(n=>{n.value&&n.value.length>0&&(t.add({severity:"info",summary:"Form Submitted",detail:n.value.join(","),life:3e3}),l())});return{value:r,handleSubmit:s,onSubmit:i,errorMessage:c}},data(){return{code:{basic:`<template>
    <div class="card p-fluid">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <Chips v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="chips-error" />
            <small class="p-error" id="chips-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" class="w-7rem" />
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card p-fluid">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <Chips v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="chips-error" />
            <small class="p-error" id="chips-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" class="w-7rem" />
        </form>
        <Toast />
    </div>
</template>

<script>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

export default {
    setup() {
        const { handleSubmit, resetForm } = useForm();
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'At least one chip is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.join(','), life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    }
};
<\/script>`,composition:`<template>
    <div class="card p-fluid">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <Chips v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="chips-error" />
            <small class="p-error" id="chips-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" class="w-7rem" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'At least one chip is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.join(','), life: 3000 });
        resetForm();
    }
});
<\/script>
`}}}},Fe=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),a(" is a popular library for handling forms in Vue.")],-1),Pe={class:"card p-fluid"},Me={id:"chips-error",class:"p-error"};function Be(s,l,r,c,t,h){const i=_,n=x("Chips"),d=x("Button"),p=g;return m(),f(b,null,[o(i,C($(s.$attrs)),{default:v(()=>[Fe]),_:1},16),e("div",Pe,[e("form",{onSubmit:l[1]||(l[1]=(...y)=>c.onSubmit&&c.onSubmit(...y)),class:"flex flex-column gap-2"},[o(n,{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=y=>c.value=y),class:F({"p-invalid":c.errorMessage}),"aria-describedby":"chips-error"},null,8,["modelValue","class"]),e("small",Me,D(c.errorMessage||" "),1),o(d,{type:"submit",label:"Submit",class:"w-7rem"})],32)]),o(p,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const ze=u(ke,[["render",Be]]),Ae={data(){return{value:null,code:{basic:`<Chips
    v-model="value"
    :pt="{
        root: { class: 'flex' },
        container: { class: 'flex-1' },
        token: { class: 'bg-primary' }
    }"
/>`,options:`<template>
    <div class="card">
        <Chips
            v-model="value"
            :pt="{
                root: { class: 'flex' },
                container: { class: 'flex-1' },
                token: { class: 'bg-primary' }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Chips
            v-model="value"
            :pt="{
                root: { class: 'flex' },
                container: { class: 'flex-1' },
                token: { class: 'bg-primary' }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`}}}},Ie={class:"card"};function Ue(s,l,r,c,t,h){const i=_,n=x("Chips"),d=g;return m(),f(b,null,[o(i,C($(s.$attrs)),null,16),e("div",Ie,[o(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=p=>t.value=p),pt:{root:{class:"flex"},container:{class:"flex-1"},token:{class:"bg-primary"}}},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const Ne=u(Ae,[["render",Ue]]),je={},qe=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/chips.jpg"})],-1);function Ke(s,l){const r=_;return m(),f(b,null,[o(r,C($(s.$attrs)),{default:v(()=>[e("p",null,D(s.$attrs.description),1)]),_:1},16),qe],64)}const Le=u(je,[["render",Ke]]),Ee={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Le},{id:"pt.doc.chips",label:"Chips PT Options",component:P,data:I("Chips")},{id:"pt.demo",label:"Demo",component:Ne}]}}},Oe={class:"doc-main"},Re=e("div",{class:"doc-intro"},[e("h1",null,"Chips Pass Through")],-1);function We(s,l,r,c,t,h){const i=T,n=V;return m(),f(b,null,[e("div",Oe,[Re,o(i,{docs:t.docs},null,8,["docs"])]),o(n,{docs:t.docs},null,8,["docs"])],64)}const Ge=u(Ee,[["render",We]]),He={},Je=e("p",null,"List of class names used in the styled mode.",-1),Qe=M('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-chips</td><td>Container element</td></tr><tr><td>p-chips-token</td><td>Chip element container.</td></tr><tr><td>p-chips-token-icon</td><td>Icon of a chip.</td></tr><tr><td>p-chips-token-label</td><td>label of a chip.</td></tr><tr><td>p-chips-input-token</td><td>Container of input element.</td></tr></tbody></table></div>',1);function Xe(s,l){const r=_;return m(),f(b,null,[o(r,C($(s.$attrs)),{default:v(()=>[Je]),_:1},16),Qe],64)}const Ye=u(He,[["render",Xe]]),Ze={data(){return{code1:{basic:`
export default {
    chips: {
        root: ({ props }) => ({
            class: [
                'flex',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        container: {
            class: [
                'm-0 py-1.5 px-3 list-none cursor-text overflow-hidden flex items-center flex-wrap',
                'w-full',
                'font-sans text-base text-gray-600 dark:text-white/70 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },

        inputtoken: {
            class: ['py-1.5 px-0', 'flex flex-1 inline-flex']
        },
        input: {
            class: ['font-sans text-base text-gray-700 dark:text-white/80 p-0 m-0', 'border-0 outline-none bg-transparent shadow-none rounded-none w-full']
        },
        token: {
            class: ['py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center']
        },
        removeTokenIcon: 'ml-2'
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Chips v-model="value" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`}}}},et=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function tt(s,l,r,c,t,h){const i=U,n=g,d=_;return m(),S(d,C($(s.$attrs)),{default:v(()=>[e("p",null,[a(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(i,{to:"/tailwind"},{default:v(()=>[a("Tailwind Customization")]),_:1}),a(" section for an example. ")]),o(n,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),et,o(n,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const ot=u(Ze,[["render",tt]]),lt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ye},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ot}]}]}}},st={class:"doc-main"},nt=e("div",{class:"doc-intro"},[e("h1",null,"Chips Theming")],-1);function it(s,l,r,c,t,h){const i=T,n=V;return m(),f(b,null,[e("div",st,[nt,o(i,{docs:t.docs},null,8,["docs"])]),o(n,{docs:t.docs},null,8,["docs"])],64)}const at=u(lt,[["render",it]]),ct={data(){return{docs:[{id:"import",label:"Import",component:ue},{id:"basic",label:"Basic",component:X},{id:"separator",label:"Separator",component:xe},{id:"template",label:"Template",component:Ve},{id:"floatlabel",label:"Float Label",component:re},{id:"invalid",label:"Invalid",component:fe},{id:"disabled",label:"Disabled",component:oe},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:ze}]},{id:"accessibility",label:"Accessibility",component:W}],ptComponent:Ge,themingDoc:at}}};function rt(s,l,r,c,t,h){const i=B;return m(),S(i,{title:"Vue Chips Component",header:"Chips",description:"Chips is used to enter multiple values on an input field.",componentDocs:t.docs,apiDocs:["Chips"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ht=u(ct,[["render",rt]]);export{ht as default};
