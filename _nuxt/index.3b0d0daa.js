import{_ as u,o as p,e as P,w as _,a as o,m as S,b as e,f as r,p as x,h as v,j as $,c as b,n as w,g,F as h,C as V,B as k,A as j,t as D,D as F,k as T,l as C,v as L,x as M}from"./entry.68beb385.js";import{u as A,a as I}from"./vee-validate.esm.3b430014.js";import{g as B}from"./PTHelper.11558b27.js";import{_ as N}from"./PrimeVueNuxtLink.f51d0c80.js";const U={data(){return{code:{basic:`<label for="pwd1">Password</label>
<Password inputId="pwd1" />

<span id="pwd2">Password</span>
<Password aria-labelledby="pwd2" />

<Password aria-label="Password"/>`}}}},z=e("h3",null,"Screen Reader",-1),q=e("p",null,[r(" Value to describe the component can either be provided via "),e("i",null,"label"),r(" tag combined with "),e("i",null,"id"),r(" prop or using "),e("i",null,"aria-labelledby"),r(", "),e("i",null,"aria-label"),r(" props. Screen reader is notified about the changes to the strength of the password using a section that has "),e("i",null,"aria-live"),r(" while typing. ")],-1),O=e("h3",null,"Keyboard Support",-1),R=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the input.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Hides the strength meter if open.")])])])],-1);function W(s,l,i,c,t,m){const a=x,n=v;return p(),P(n,S({id:"accessibility",label:"Accessibility"},s.$attrs),{default:_(()=>[z,q,o(a,S({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},s.$attrs),null,16,["code"]),O,R]),_:1},16)}const E=u(U,[["render",W]]),K={data(){return{value:null,code:{basic:'<Password v-model="value" :feedback="false" />',options:`<template>
    <div class="card flex justify-content-center">
        <Password v-model="value" :feedback="false" />
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
        <Password v-model="value" :feedback="false" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},H=e("p",null,[r("Two-way value binding is defined using "),e("i",null,"v-model"),r(".")],-1),G={class:"card flex justify-content-center"};function J(s,l,i,c,t,m){const a=v,n=$("Password"),d=x;return p(),b(h,null,[o(a,w(g(s.$attrs)),{default:_(()=>[H]),_:1},16),e("div",G,[o(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=f=>t.value=f),feedback:!1},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const Q=u(K,[["render",J]]),X={data(){return{value:null,code:{basic:'<Password disabled placeholder="Disabled" />',options:`<template>
    <div class="card flex justify-content-center">
        <Password disabled placeholder="Disabled" />
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
        <Password disabled placeholder="Disabled" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},Y=e("p",null,[r("When "),e("i",null,"disabled"),r(" is present, the element cannot be edited and focused.")],-1),Z={class:"card flex justify-content-center"};function ee(s,l,i,c,t,m){const a=v,n=$("Password"),d=x;return p(),b(h,null,[o(a,w(g(s.$attrs)),{default:_(()=>[Y]),_:1},16),e("div",Z,[o(n,{disabled:"",placeholder:"Disabled"})]),o(d,{code:t.code},null,8,["code"])],64)}const te=u(X,[["render",ee]]),oe={data(){return{value:null,code:{basic:`<span class="p-float-label">
    <Password v-model="value" inputId="password" />
    <label for="password">Password</label>
</span>`,options:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <Password v-model="value" inputId="password" />
            <label for="password">Password</label>
        </span>
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
        <span class="p-float-label">
            <Password v-model="value" inputId="password" />
            <label for="password">Password</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},se=e("p",null,"A floating label appears on top of the input field when focused.",-1),le={class:"card flex justify-content-center"},ne={class:"p-float-label"},ae=e("label",{for:"password"},"Password",-1);function re(s,l,i,c,t,m){const a=v,n=$("Password"),d=x;return p(),b(h,null,[o(a,w(g(s.$attrs)),{default:_(()=>[se]),_:1},16),e("div",le,[e("span",ne,[o(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=f=>t.value=f),inputId:"password"},null,8,["modelValue"]),ae])]),o(d,{code:t.code},null,8,["code"])],64)}const ce=u(oe,[["render",re]]),ie={data(){return{code:{basic:"import Password from 'primevue/password';"}}}};function de(s,l,i,c,t,m){const a=v,n=x;return p(),b(h,null,[o(a,w(g(s.$attrs)),null,16),o(n,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ue=u(ie,[["render",de]]),pe={data(){return{value:null,code:{basic:'<Password class="p-invalid" />',options:`<template>
    <div class="card flex justify-content-center">
        <Password class="p-invalid" />
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
        <Password class="p-invalid" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},me=e("p",null,[r("Invalid state style is added using the "),e("i",null,"p-invalid"),r(" class to indicate a failed validation.")],-1),_e={class:"card flex justify-content-center"};function fe(s,l,i,c,t,m){const a=v,n=$("Password"),d=x;return p(),b(h,null,[o(a,w(g(s.$attrs)),{default:_(()=>[me]),_:1},16),e("div",_e,[o(n,{class:"p-invalid"})]),o(d,{code:t.code},null,8,["code"])],64)}const ve=u(pe,[["render",fe]]),be={data(){return{value:null,code:{basic:'<Password v-model="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />',options:`<template>
  <div class="card flex justify-content-center">
      <Password v-model="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
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
      <Password v-model="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},he=e("i",null,"promptLabel",-1),we=e("i",null,"weakLabel",-1),ge=e("i",null,"mediumLabel",-1),xe=e("i",null,"strongLabel",-1),$e={class:"card flex justify-content-center"};function ye(s,l,i,c,t,m){const a=V,n=v,d=$("Password"),f=x;return p(),b(h,null,[o(n,w(g(s.$attrs)),{default:_(()=>[e("p",null,[r(" Labels are translated at component level by "),he,r(", "),we,r(", "),ge,r(" and "),xe,r(" properties. In order to apply global translations for all Password components in the application, refer to the "),o(a,{to:"/configuration/#locale"},{default:_(()=>[r("locale")]),_:1}),r(". ")])]),_:1},16),e("div",$e,[o(d,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=y=>t.value=y),promptLabel:"Choose a password",weakLabel:"Too simple",mediumLabel:"Average complexity",strongLabel:"Complex password"},null,8,["modelValue"])]),o(f,{code:t.code},null,8,["code"])],64)}const Pe=u(be,[["render",ye]]),Se={data(){return{value:null,code:{basic:'<Password v-model="value" />',options:`<template>
    <div class="card flex justify-content-center">
        <Password v-model="value" />
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
        <Password v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},De=e("p",null,"Strength meter is displayed as a popup while a value is being entered.",-1),Te={class:"card flex justify-content-center"};function Ce(s,l,i,c,t,m){const a=v,n=$("Password"),d=x;return p(),b(h,null,[o(a,w(g(s.$attrs)),{default:_(()=>[De]),_:1},16),e("div",Te,[o(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=f=>t.value=f)},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const Ve=u(Se,[["render",Ce]]),ke={data(){return{value:null,code:{basic:`<Password v-model="value">
    <template #header>
        <h6>Pick a password</h6>
    </template>
    <template #footer>
        <Divider />
        <p class="mt-2">Suggestions</p>
        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </template>
</Password>`,options:`<template>
    <div class="card flex justify-content-center">
        <Password v-model="value">
            <template #header>
                <h6>Pick a password</h6>
            </template>
            <template #footer>
                <Divider />
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 style="line-height: 1.5">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                </ul>
            </template>
        </Password>
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
        <Password v-model="value">
            <template #header>
                <h6>Pick a password</h6>
            </template>
            <template #footer>
                <Divider />
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                    <li>At least one lowercase</li>
                    <li>At least one uppercase</li>
                    <li>At least one numeric</li>
                    <li>Minimum 8 characters</li>
                </ul>
            </template>
        </Password>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},je=e("p",null,[r("3 slots are included to customize the overlay. These are "),e("i",null,"header"),r(", "),e("i",null,"content"),r(" and "),e("i",null,"footer"),r(". Note that content overrides the default meter.")],-1),Fe={class:"card flex justify-content-center"},Le=e("h6",null,"Pick a password",-1),Me=e("p",{class:"mt-2"},"Suggestions",-1),Ae=e("ul",{class:"pl-2 ml-2 mt-0",style:{"line-height":"1.5"}},[e("li",null,"At least one lowercase"),e("li",null,"At least one uppercase"),e("li",null,"At least one numeric"),e("li",null,"Minimum 8 characters")],-1);function Ie(s,l,i,c,t,m){const a=v,n=$("Divider"),d=$("Password"),f=x;return p(),b(h,null,[o(a,w(g(s.$attrs)),{default:_(()=>[je]),_:1},16),e("div",Fe,[o(d,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=y=>t.value=y)},{header:_(()=>[Le]),footer:_(()=>[o(n),Me,Ae]),_:1},8,["modelValue"])]),o(f,{code:t.code},null,8,["code"])],64)}const Be=u(ke,[["render",Ie]]),Ne={data(){return{value:null,code:{basic:'<Password v-model="value" toggleMask />',options:`<template>
    <div class="card flex justify-content-center">
        <Password v-model="value" toggleMask />
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
        <Password v-model="value" toggleMask />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},Ue=e("p",null,[r("When "),e("i",null,"toggleMask"),r(" is present, an icon is displayed to show the value as plain text.")],-1),ze={class:"card flex justify-content-center"};function qe(s,l,i,c,t,m){const a=v,n=$("Password"),d=x;return p(),b(h,null,[o(a,w(g(s.$attrs)),{default:_(()=>[Ue]),_:1},16),e("div",ze,[o(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=f=>t.value=f),toggleMask:""},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const Oe=u(Ne,[["render",qe]]),Re={setup(){const{handleSubmit:s,resetForm:l}=A(),{value:i,errorMessage:c}=I("value",m),t=k();function m(n){return n?!0:"Password is required."}const a=s(n=>{n.value&&n.value.length>0&&(t.add({severity:"info",summary:"Form Submitted",detail:n.value,life:3e3}),l())});return{value:i,handleSubmit:s,onSubmit:a,errorMessage:c}},data(){return{code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="value">Password</label>
            <Password id="value" v-model="value" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
            <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="value">Password</label>
            <Password id="value" v-model="value" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
            <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
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
                return 'Password is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="value">Password</label>
            <Password id="value" v-model="value" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
            <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
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
        return 'Password is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm();
    }
});
<\/script>
`}}}},We=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),r(" is a popular library for handling forms in Vue.")],-1),Ee={class:"card flex justify-content-center"},Ke=e("label",{for:"value"},"Password",-1),He={id:"text-error",class:"p-error"};function Ge(s,l,i,c,t,m){const a=v,n=$("Password"),d=$("Button"),f=x;return p(),b(h,null,[o(a,w(g(s.$attrs)),{default:_(()=>[We]),_:1},16),e("div",Ee,[e("form",{onSubmit:l[1]||(l[1]=(...y)=>c.onSubmit&&c.onSubmit(...y)),class:"flex flex-column gap-2"},[Ke,o(n,{id:"value",modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=y=>c.value=y),type:"text",class:j({"p-invalid":c.errorMessage}),"aria-describedby":"text-error"},null,8,["modelValue","class"]),e("small",He,D(c.errorMessage||" "),1),o(d,{type:"submit",label:"Submit"})],32)]),o(f,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const Je=u(Re,[["render",Ge]]),Qe={data(){return{value:null,code:{basic:`<Password
    v-model="value"
    :pt="{
        info: { class: 'font-bold' }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Password
            v-model="value"
            :pt="{
                info: { class: 'font-bold' }
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
        <Password
            v-model="value"
            :pt="{
                info: { class: 'font-bold' }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},Xe={class:"card flex justify-content-center"};function Ye(s,l,i,c,t,m){const a=v,n=$("Password"),d=x;return p(),b(h,null,[o(a,w(g(s.$attrs)),null,16),e("div",Xe,[o(n,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=f=>t.value=f),pt:{info:{class:"font-bold"}}},null,8,["modelValue"])]),o(d,{code:t.code},null,8,["code"])],64)}const Ze=u(Qe,[["render",Ye]]),et={},tt=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/password.jpg"})],-1);function ot(s,l){const i=v;return p(),b(h,null,[o(i,w(g(s.$attrs)),{default:_(()=>[e("p",null,D(s.$attrs.description),1)]),_:1},16),tt],64)}const st=u(et,[["render",ot]]),lt={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:st},{id:"pt.doc.password",label:"Password PT Options",component:F,data:B("Password")},{id:"pt.demo",label:"Demo",component:Ze}]}}},nt={class:"doc-main"},at=e("div",{class:"doc-intro"},[e("h1",null,"Password Pass Through")],-1);function rt(s,l,i,c,t,m){const a=T,n=C;return p(),b(h,null,[e("div",nt,[at,o(a,{docs:t.docs},null,8,["docs"])]),o(n,{docs:t.docs},null,8,["docs"])],64)}const ct=u(lt,[["render",rt]]),it={},dt=e("p",null,"List of class names used in the styled mode.",-1),ut=L('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-password-panel</td><td>Container of password panel</td></tr><tr><td>p-password-meter</td><td>Meter element of password strength</td></tr><tr><td>p-password-info</td><td>Text to display strength</td></tr></tbody></table></div>',1);function pt(s,l){const i=v;return p(),b(h,null,[o(i,w(g(s.$attrs)),{default:_(()=>[dt]),_:1},16),ut],64)}const mt=u(it,[["render",pt]]),_t={data(){return{code1:{basic:`
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    password: {
        root: ({ props }) => ({
            class: [
                'inline-flex relative',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        panel: 'p-5 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 shadow-md rounded-md',
        meter: 'mb-2 bg-gray-300 dark:bg-gray-700 h-3',
        meterlabel: ({ instance, props }) => ({
            class: [
                'transition-width duration-1000 ease-in-out h-full',
                {
                    'bg-red-500': instance?.meter?.strength == 'weak',
                    'bg-orange-500': instance?.meter?.strength == 'medium',
                    'bg-green-500': instance?.meter?.strength == 'strong'
                },
                { 'pr-[2.5rem] ': props.toggleMask }
            ]
        }),
        showicon: {
            class: ['absolute top-1/2 -mt-2', 'right-3 text-gray-600 dark:text-white/70']
        },
        hideicon: {
            class: ['absolute top-1/2 -mt-2', 'right-3 text-gray-600 dark:text-white/70']
        },
        transition: TRANSITIONS.overlay
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Password v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`}}}},ft=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function vt(s,l,i,c,t,m){const a=N,n=x,d=v;return p(),P(d,w(g(s.$attrs)),{default:_(()=>[e("p",null,[r(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(a,{to:"/tailwind"},{default:_(()=>[r("Tailwind Customization")]),_:1}),r(" section for an example. ")]),o(n,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),ft,o(n,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const bt=u(_t,[["render",vt]]),ht={data(){return{docs:[{id:"theming.styled",label:"Styled",component:mt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:bt}]}]}}},wt={class:"doc-main"},gt=e("div",{class:"doc-intro"},[e("h1",null,"Password Theming")],-1);function xt(s,l,i,c,t,m){const a=T,n=C;return p(),b(h,null,[e("div",wt,[gt,o(a,{docs:t.docs},null,8,["docs"])]),o(n,{docs:t.docs},null,8,["docs"])],64)}const $t=u(ht,[["render",xt]]),yt={data(){return{docs:[{id:"import",label:"Import",component:ue},{id:"basic",label:"Basic",component:Q},{id:"meter",label:"Meter",component:Ve},{id:"locale",label:"Locale",component:Pe},{id:"togglemask",label:"ToggleMask",component:Oe},{id:"template",label:"Template",component:Be},{id:"floatlabel",label:"FloatLabel",component:ce},{id:"invalid",label:"Invalid",component:ve},{id:"disabled",label:"Disabled",component:te},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Je}]},{id:"accessibility",label:"Accessibility",component:E}],ptComponent:ct,themingDoc:$t}}};function Pt(s,l,i,c,t,m){const a=M;return p(),P(a,{title:"Vue Password Component",header:"Password",description:"Password displays strength indicator for password fields.",componentDocs:t.docs,apiDocs:["Password"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Vt=u(yt,[["render",Pt]]);export{Vt as default};
