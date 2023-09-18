import{_ as p,o as m,e as K,w as h,a as n,m as D,b as e,f as c,p as $,h as f,j as g,c as _,n as x,g as y,F as b,B as k,t as T,D as j,k as V,l as C,v as w,x as F}from"./entry.68beb385.js";import{u as B,a as z}from"./vee-validate.esm.3b430014.js";import{g as M}from"./PTHelper.11558b27.js";import{_ as U}from"./PrimeVueNuxtLink.f51d0c80.js";const P={data(){return{code:{basic:`<span id="label_number">Number</span>
<Knob aria-labelledby="label_number" />

<Knob aria-label="Number" />`}}}},N=e("h3",null,"Screen Reader",-1),W=e("p",null,[c(" Knob element component uses "),e("i",null,"slider"),c(" role in addition to the "),e("i",null,"aria-valuemin"),c(", "),e("i",null,"aria-valuemax"),c(" and "),e("i",null,"aria-valuenow"),c(" attributes. Value to describe the component can be defined using "),e("i",null,"aria-labelledby"),c(" and "),e("i",null,"aria-label"),c(" props. ")],-1),O=e("h3",null,"Keyboard Support",-1),I=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the slider.")]),e("tr",null,[e("td",null,[e("span",{class:"inline-flex flex-column"},[e("i",{class:"mb-1"},"left arrow"),e("i",null,"down arrow")])]),e("td",null,"Decrements the value.")]),e("tr",null,[e("td",null,[e("span",{class:"inline-flex flex-column"},[e("i",{class:"mb-1"},"right arrow"),e("i",null,"up arrow")])]),e("td",null,"Increments the value.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Set the minimum value.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Set the maximum value.")]),e("tr",null,[e("td",null,[e("i",null,"page up")]),e("td",null,"Increments the value by 10 steps.")]),e("tr",null,[e("td",null,[e("i",null,"page down")]),e("td",null,"Decrements the value by 10 steps.")])])])],-1);function R(l,o,d,r,t,v){const a=$,s=f;return m(),K(s,D({id:"accessibility",label:"Accessibility"},l.$attrs),{default:h(()=>[N,W,n(a,D({code:t.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},l.$attrs),null,16,["code"]),O,I]),_:1},16)}const q=p(P,[["render",R]]),A={data(){return{value:0,code:{basic:'<Knob v-model="value" />',options:`<template>
    <div class="card flex justify-content-center">
        <Knob v-model="value" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 0
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Knob v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>`}}}},G=e("p",null,[c("Knob is an input component and used with the standard "),e("i",null,"v-model"),c(" directive.")],-1),L={class:"card flex justify-content-center"};function E(l,o,d,r,t,v){const a=f,s=g("Knob"),i=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),{default:h(()=>[G]),_:1},16),e("div",L,[n(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u)},null,8,["modelValue"])]),n(i,{code:t.code},null,8,["code"])],64)}const H=p(A,[["render",E]]),J={data(){return{value:50,code:{basic:'<Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />',options:`<template>
  <div class="card flex justify-content-center">
      <Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />
  </div>
</template>

<script>
export default {
  data() {
      return {
          value: 50
      }
  }
};
<\/script>`,composition:`<template>
  <div class="card flex justify-content-center">
      <Knob v-model="value" valueColor="SlateGray" rangeColor="MediumTurquoise" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
<\/script>`}}}},Q=e("p",null,[e("i",null,"valueColor"),c(" defines the value color, "),e("i",null,"rangeColor"),c(" defines the range background and similarly "),e("i",null,"textColor"),c(" configures the color of the value text. In addition, "),e("i",null,"strokeWidth"),c(" is used to determine the width of the stroke of range and value sections. ")],-1),X={class:"card flex justify-content-center"};function Y(l,o,d,r,t,v){const a=f,s=g("Knob"),i=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),{default:h(()=>[Q]),_:1},16),e("div",X,[n(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),valueColor:"SlateGray",rangeColor:"MediumTurquoise"},null,8,["modelValue"])]),n(i,{code:t.code},null,8,["code"])],64)}const Z=p(J,[["render",Y]]),ee={data(){return{value:50,code:{basic:'<Knob v-model="value" disabled />',options:`<template>
    <div class="card flex justify-content-center">
        <Knob v-model="value" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 50
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Knob v-model="value" disabled />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
<\/script>`}}}},te=e("p",null,[c("When "),e("i",null,"disabled"),c(" is present, a visual hint is applied to indicate that the Knob cannot be interacted with.")],-1),oe={class:"card flex justify-content-center"};function ne(l,o,d,r,t,v){const a=f,s=g("Knob"),i=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),{default:h(()=>[te]),_:1},16),e("div",oe,[n(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),disabled:""},null,8,["modelValue"])]),n(i,{code:t.code},null,8,["code"])],64)}const le=p(ee,[["render",ne]]),se={data(){return{code:{basic:"import Knob from 'primevue/knob';"}}}};function ae(l,o,d,r,t,v){const a=f,s=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),null,16),n(s,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ce=p(se,[["render",ae]]),ie={data(){return{value:10,code:{basic:'<Knob v-model="value" :min="-50" :max="10" />',options:`<template>
    <div class="card flex justify-content-center">
        <Knob v-model="value" :min="-50" :max="50" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 10
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Knob v-model="value" :min="-50" :max="50" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(10);
<\/script>`}}}},re=e("p",null,[c("Boundaries are configured with the "),e("i",null,"min"),c(" and "),e("i",null,"max"),c(" values whose defaults are 0 and 100 respectively.")],-1),de={class:"card flex justify-content-center"};function ue(l,o,d,r,t,v){const a=f,s=g("Knob"),i=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),{default:h(()=>[re]),_:1},16),e("div",de,[n(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),min:-50,max:50},null,8,["modelValue"])]),n(i,{code:t.code},null,8,["code"])],64)}const pe=p(ie,[["render",ue]]),me={data(){return{value:0,code:{basic:`<Knob v-model="value" :size="150" readonly />
<div class="flex gap-2">
    <Button icon="pi pi-plus" @click="value++" :disabled="value >= 100" />
    <Button icon="pi pi-minus" @click="value--" :disabled="value <= 0" />
</div>`,options:`<template>
    <div class="card flex flex-column align-items-center gap-2">
        <Knob v-model="value" :size="150" readonly />
        <div class="flex gap-2">
            <Button icon="pi pi-plus" @click="value++" :disabled="value >= 100" />
            <Button icon="pi pi-minus" @click="value--" :disabled="value <= 0" />
        </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
          value: 0
      }
  }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-column align-items-center gap-2">
        <Knob v-model="value" :size="150" readonly />
        <div class="flex gap-2">
            <Button icon="pi pi-plus" @click="value++" :disabled="value >= 100" />
            <Button icon="pi pi-minus" @click="value--" :disabled="value <= 0" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>`}}}},ve=e("p",null,"Knob can be controlled with custom controls as well.",-1),fe={class:"card flex flex-column align-items-center gap-2"},_e={class:"flex gap-2"};function be(l,o,d,r,t,v){const a=f,s=g("Knob"),i=g("Button"),u=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),{default:h(()=>[ve]),_:1},16),e("div",fe,[n(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=S=>t.value=S),size:150,readonly:""},null,8,["modelValue"]),e("div",_e,[n(i,{icon:"pi pi-plus",onClick:o[1]||(o[1]=S=>t.value++),disabled:t.value>=100},null,8,["disabled"]),n(i,{icon:"pi pi-minus",onClick:o[2]||(o[2]=S=>t.value--),disabled:t.value<=0},null,8,["disabled"])])]),n(u,{code:t.code},null,8,["code"])],64)}const he=p(me,[["render",be]]),xe={data(){return{value:50,code:{basic:'<Knob v-model="value" readonly />',options:`<template>
    <div class="card flex justify-content-center">
        <Knob v-model="value" readonly />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 50
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Knob v-model="value" readonly />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(50);
<\/script>`}}}},ye=e("p",null,[c("When "),e("i",null,"readonly"),c(" present, value cannot be edited.")],-1),$e={class:"card flex justify-content-center"};function ge(l,o,d,r,t,v){const a=f,s=g("Knob"),i=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),{default:h(()=>[ye]),_:1},16),e("div",$e,[n(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),readonly:""},null,8,["modelValue"])]),n(i,{code:t.code},null,8,["code"])],64)}const Se=p(xe,[["render",ge]]),Ke={data(){return{value:60,code:{basic:'<Knob v-model="value" :size="200" />',options:`<template>
  <div class="card flex justify-content-center">
      <Knob v-model="value" :size="200" />
  </div>
</template>

<script>
export default {
  data() {
      return {
          value: 60
      }
  }
};
<\/script>`,composition:`<template>
  <div class="card flex justify-content-center">
      <Knob v-model="value" :size="200" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(60);
<\/script>`}}}},De=e("p",null,[c("Diameter of the knob is defined in pixels using the "),e("i",null,"size"),c(" property.")],-1),Te={class:"card flex justify-content-center"};function Ve(l,o,d,r,t,v){const a=f,s=g("Knob"),i=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),{default:h(()=>[De]),_:1},16),e("div",Te,[n(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),size:200},null,8,["modelValue"])]),n(i,{code:t.code},null,8,["code"])],64)}const Ce=p(Ke,[["render",Ve]]),ke={data(){return{value:40,code:{basic:'<Knob v-model="value5" :step="10" />',options:`<template>
    <div class="card flex justify-content-center">
        <Knob v-model="value" :step="10" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 40
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Knob v-model="value" :step="10" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(40);
<\/script>`}}}},je=e("p",null,[c("Step factor is 1 by default and can be customized with "),e("i",null,"step"),c(" option.")],-1),we={class:"card flex justify-content-center"};function Fe(l,o,d,r,t,v){const a=f,s=g("Knob"),i=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),{default:h(()=>[je]),_:1},16),e("div",we,[n(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),step:10},null,8,["modelValue"])]),n(i,{code:t.code},null,8,["code"])],64)}const Be=p(ke,[["render",Fe]]),ze={data(){return{value:40,code:{basic:'<Knob v-model="value" :strokeWidth="5" />',options:`<template>
  <div class="card flex justify-content-center">
      <Knob v-model="value" :strokeWidth="5" />
  </div>
</template>

<script>
export default {
  data() {
      return {
          value: 40
      }
  }
};
<\/script>`,composition:`<template>
  <div class="card flex justify-content-center">
      <Knob v-model="value" :strokeWidth="5" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(40);
<\/script>`}}}},Me=e("p",null,[c("The border size is specified with the "),e("i",null,"stroke"),c(" property as a number in pixels.")],-1),Ue={class:"card flex justify-content-center"};function Pe(l,o,d,r,t,v){const a=f,s=g("Knob"),i=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),{default:h(()=>[Me]),_:1},16),e("div",Ue,[n(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),strokeWidth:5},null,8,["modelValue"])]),n(i,{code:t.code},null,8,["code"])],64)}const Ne=p(ze,[["render",Pe]]),We={data(){return{value:60,code:{basic:'<Knob v-model="value" valueTemplate="{value}%" />',options:`<template>
    <div class="card flex justify-content-center">
        <Knob v-model="value" valueTemplate="{value}%" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 60
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Knob v-model="value" valueTemplate="{value}%" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(60);
<\/script>`}}}},Oe=e("p",null,[c("Label is a string template that can be customized with the "),e("i",null,"valueTemplate"),c(" property having "),e("i",null,"60"),c(" as the placeholder .")],-1),Ie={class:"card flex justify-content-center"};function Re(l,o,d,r,t,v){const a=f,s=g("Knob"),i=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),{default:h(()=>[Oe]),_:1},16),e("div",Ie,[n(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),valueTemplate:"{value}%"},null,8,["modelValue"])]),n(i,{code:t.code},null,8,["code"])],64)}const qe=p(We,[["render",Re]]),Ae={setup(){const{handleSubmit:l,resetForm:o}=B(),{value:d,errorMessage:r}=z("value",v,{validateOnValueUpdate:!1,initialValue:0}),t=k();function v(s){return s?!0:"The value must be greater than zero."}const a=l(s=>{s.value>0&&(t.add({severity:"info",summary:"Form Submitted",detail:s.value,life:3e3}),o({values:{value:0}}))});return{value:d,handleSubmit:l,onSubmit:a,errorMessage:r}},data(){return{code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <Knob v-model="value" aria-describedby="text-error" />
            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <Knob v-model="value" aria-describedby="text-error" />
            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
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
        const { value, errorMessage } = useField('value', validateField, {
            validateOnValueUpdate: false,
            initialValue: 0
        });
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'The value must be greater than zero.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
                resetForm({
                    values: {
                        value: 0
                    }
                });
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <Knob id="value" v-model="value" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
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
const { value, errorMessage } = useField('value', validateField, {
    validateOnValueUpdate: false,
    initialValue: 0
});
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'The value must be greater than zero.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
        resetForm({
            values: {
                value: 0
            }
        });
    }
});
<\/script>
`}}}},Ge=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),c(" is a popular library for handling forms in Vue.")],-1),Le={class:"card flex justify-content-center"},Ee={id:"text-error",class:"p-error"};function He(l,o,d,r,t,v){const a=f,s=g("Knob"),i=g("Button"),u=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),{default:h(()=>[Ge]),_:1},16),e("div",Le,[e("form",{onSubmit:o[1]||(o[1]=(...S)=>r.onSubmit&&r.onSubmit(...S)),class:"flex flex-column align-items-center gap-2"},[n(s,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=S=>r.value=S),"aria-describedby":"text-error"},null,8,["modelValue"]),e("small",Ee,T(r.errorMessage||" "),1),n(i,{type:"submit",label:"Submit"})],32)]),n(u,{code:t.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const Je=p(Ae,[["render",He]]),Qe={data(){return{value:0,code:{basic:`<Knob
    v-model="value"
    :pt="{
        value: { style: { stroke: 'var(--cyan-500)' } }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Knob
            v-model="value"
            :pt="{
                value: { style: { stroke: 'var(--cyan-500)' } }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 0
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Knob
            v-model="value"
            :pt="{
                value: { style: { stroke: 'var(--cyan-500)' } }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>`}}}},Xe={class:"card flex justify-content-center"};function Ye(l,o,d,r,t,v){const a=f,s=g("Knob"),i=$;return m(),_(b,null,[n(a,x(y(l.$attrs)),null,16),e("div",Xe,[n(s,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),pt:{value:{style:{stroke:"var(--cyan-500)"}}}},null,8,["modelValue","pt"])]),n(i,{code:t.code},null,8,["code"])],64)}const Ze=p(Qe,[["render",Ye]]),et={},tt=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/knob.jpg"})],-1);function ot(l,o){const d=f;return m(),_(b,null,[n(d,x(y(l.$attrs)),{default:h(()=>[e("p",null,T(l.$attrs.description),1)]),_:1},16),tt],64)}const nt=p(et,[["render",ot]]),lt={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:nt},{id:"pt.doc.knob",label:"Knob PT Options",component:j,data:M("Knob")},{id:"pt.demo",label:"Demo",component:Ze}]}}},st={class:"doc-main"},at=e("div",{class:"doc-intro"},[e("h1",null,"Knob Pass Through")],-1);function ct(l,o,d,r,t,v){const a=V,s=C;return m(),_(b,null,[e("div",st,[at,n(a,{docs:t.docs},null,8,["docs"])]),n(s,{docs:t.docs},null,8,["docs"])],64)}const it=p(lt,[["render",ct]]),rt={},dt=e("p",null,"List of class names used in the styled mode.",-1),ut=w('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-knob</td><td>Container element.</td></tr><tr><td>p-knob-text</td><td>Text element.</td></tr><tr><td>p-knob-value</td><td>Value element.</td></tr><tr><td>p-knob-text</td><td>Text element.</td></tr></tbody></table></div>',1);function pt(l,o){const d=f;return m(),_(b,null,[n(d,x(y(l.$attrs)),{default:h(()=>[dt]),_:1},16),ut],64)}const mt=p(rt,[["render",pt]]),vt={data(){return{code1:{basic:`
export default {
    knob: {
        root: ({ props }) => ({
            class: [
                'focus:outline-none focus:outline-offset-0 focus:shadow-0',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        range: 'stroke-current transition duration-100 ease-in stroke-gray-200 dark:stroke-gray-700 fill-none',
        value: 'animate-dash-frame  stroke-blue-500 fill-none',
        label: 'text-center text-xl'
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Knob v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>`}}}},ft=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function _t(l,o,d,r,t,v){const a=U,s=$,i=f;return m(),K(i,x(y(l.$attrs)),{default:h(()=>[e("p",null,[c(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(a,{to:"/tailwind"},{default:h(()=>[c("Tailwind Customization")]),_:1}),c(" section for an example. ")]),n(s,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),ft,n(s,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const bt=p(vt,[["render",_t]]),ht={data(){return{docs:[{id:"theming.styled",label:"Styled",component:mt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:bt}]}]}}},xt={class:"doc-main"},yt=e("div",{class:"doc-intro"},[e("h1",null,"Knob Theming")],-1);function $t(l,o,d,r,t,v){const a=V,s=C;return m(),_(b,null,[e("div",xt,[yt,n(a,{docs:t.docs},null,8,["docs"])]),n(s,{docs:t.docs},null,8,["docs"])],64)}const gt=p(ht,[["render",$t]]),St={data(){return{docs:[{id:"import",label:"Import",component:ce},{id:"basic",label:"Basic",component:H},{id:"minmax",label:"Min/Max",component:pe},{id:"step",label:"Step",component:Be},{id:"template",label:"Template",component:qe},{id:"stroke",label:"Stroke",component:Ne},{id:"size",label:"Size",component:Ce},{id:"color",label:"Color",component:Z},{id:"reactive",label:"Reactive",component:he},{id:"readonly",label:"ReadOnly",component:Se},{id:"disabled",label:"Disabled",component:le},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Je}]},{id:"accessibility",label:"Accessibility",component:q}],ptComponent:it,themingDoc:gt}}};function Kt(l,o,d,r,t,v){const a=F;return m(),K(a,{title:"Vue Knob Component",header:"Knob",description:"Knob is a form component to define number inputs with a dial.",componentDocs:t.docs,apiDocs:["Knob"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const kt=p(St,[["render",Kt]]);export{kt as default};
