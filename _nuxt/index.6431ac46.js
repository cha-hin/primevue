import{_ as u,o as p,e as $,w as v,m as D,b as e,f as a,h as b,j as k,c as _,a as l,n as g,g as x,F as h,p as y,t as C,B as T,A as B,D as V,k as P,l as w,v as H,x as F}from"./entry.68beb385.js";import{u as I,a as j}from"./vee-validate.esm.3b430014.js";import{g as N}from"./PTHelper.11558b27.js";import{_ as R}from"./PrimeVueNuxtLink.f51d0c80.js";const E={},G=e("h3",null,"Screen Reader",-1),X=e("p",null,[a(" Specification does not cover a color picker "),e("a",{href:"https://github.com/w3c/aria/issues/930"},"yet"),a(" and using a semantic native color picker is not consistent across browsers so currently component is not compatible with screen readers. In the upcoming versions, text fields will be introduced below the slider section to be able to pick a color using accessible text boxes in hsl, rgba and hex formats. ")],-1),M=e("h3",null,"Closed State Keyboard Support of Popup ColorPicker",-1),O=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the color picker button.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Opens the popup and moves focus to the color slider.")])])])],-1),A=e("h3",null,"Popup Keyboard Support",-1),U=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Selects the color and closes the popup.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Selects the color and closes the popup.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup, moves focus to the input.")])])])],-1),z=e("h3",null,"Color Picker Slider",-1),J=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"arrow keys")]),e("td",null,"Changes color.")])])])],-1),K=e("h3",null,"Hue Slider",-1),q=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("span",{class:"inline-flex flex-column"},[e("i",{class:"mb-1"},"up arrow"),e("i",null,"down arrow")])]),e("td",null,"Changes hue.")])])])],-1);function W(r,t){const s=b;return p(),$(s,D({id:"accessibility",label:"Accessibility"},r.$attrs),{default:v(()=>[G,X,M,O,A,U,z,J,K,q]),_:1},16)}const L=u(E,[["render",W]]),Q={data(){return{color:null,code:{basic:'<ColorPicker v-model="color" />',options:`<template>
    <div class="card flex justify-content-center">
        <ColorPicker v-model="color" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <ColorPicker v-model="color" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const color = ref();
<\/script>`}}}},Y=e("p",null,[a("ColorPicker is used as a controlled input with "),e("i",null,"v-model"),a(" property.")],-1),Z={class:"card flex justify-content-center"};function ee(r,t,s,i,o,f){const n=b,c=k("ColorPicker"),m=y;return p(),_(h,null,[l(n,g(x(r.$attrs)),{default:v(()=>[Y]),_:1},16),e("div",Z,[l(c,{modelValue:o.color,"onUpdate:modelValue":t[0]||(t[0]=d=>o.color=d)},null,8,["modelValue"])]),l(m,{code:o.code},null,8,["code"])],64)}const oe=u(Q,[["render",ee]]),te={data(){return{color:null,code:{basic:'<ColorPicker v-model="color" disabled />',options:`<template>
    <div class="card flex justify-content-center">
        <ColorPicker v-model="color" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <ColorPicker v-model="color" disabled />
    </div>
</template>

<script setup>
import { ref } from "vue";

const color = ref();
<\/script>`}}}},le=e("p",null,[a("When "),e("i",null,"disabled"),a(" is present, the element cannot be edited and focused.")],-1),re={class:"card flex justify-content-center"};function ne(r,t,s,i,o,f){const n=b,c=k("ColorPicker"),m=y;return p(),_(h,null,[l(n,g(x(r.$attrs)),{default:v(()=>[le]),_:1},16),e("div",re,[l(c,{modelValue:o.color,"onUpdate:modelValue":t[0]||(t[0]=d=>o.color=d),disabled:""},null,8,["modelValue"])]),l(m,{code:o.code},null,8,["code"])],64)}const ce=u(te,[["render",ne]]),se={data(){return{colorHEX:"6466f1",colorRGB:{r:100,g:102,b:241},colorHSB:{h:239,s:59,b:95},code:{basic:`<ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" class="mb-3" />
<ColorPicker v-model="colorRGB" inputId="cp-rgb" format="rgb" class="mb-3" />
<ColorPicker v-model="colorHSB" inputId="cp-hsb" format="hsb" class="mb-3" />`,options:`<template>
    <div class="card flex flex-wrap gap-3">
        <div class="flex-1 flex flex-column align-items-center">
            <label for="cp-hex" class="font-bold block mb-2"> HEX </label>
            <ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" class="mb-3" />
            <span>{{ colorHEX }}</span>
        </div>
        <div class="flex-1 flex flex-column align-items-center">
            <label for="cp-rgb" class="font-bold block mb-2"> RGB </label>
            <ColorPicker v-model="colorRGB" inputId="cp-rgb" format="rgb" class="mb-3" />
            <span>{{ JSON.stringify(colorRGB) }}</span>
        </div>
        <div class="flex-1 flex flex-column align-items-center">
            <label for="cp-hsb" class="font-bold block mb-2"> HSB </label>
            <ColorPicker v-model="colorHSB" inputId="cp-hsb" format="hsb" class="mb-3" />
            <span>{{ JSON.stringify(colorHSB) }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colorHEX: '6466f1',
            colorRGB: { r: 100, g: 102, b: 241 },
            colorHSB: { h: 239, s: 59, b: 95 }
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap gap-3">
        <div class="flex-1 flex flex-column align-items-center">
            <label for="cp-hex" class="font-bold block mb-2"> HEX </label>
            <ColorPicker v-model="colorHEX" inputId="cp-hex" format="hex" class="mb-3" />
            <span>{{ colorHEX }}</span>
        </div>
        <div class="flex-1 flex flex-column align-items-center">
            <label for="cp-rgb" class="font-bold block mb-2"> RGB </label>
            <ColorPicker v-model="colorRGB" inputId="cp-rgb" format="rgb" class="mb-3" />
            <span>{{ JSON.stringify(colorRGB) }}</span>
        </div>
        <div class="flex-1 flex flex-column align-items-center">
            <label for="cp-hsb" class="font-bold block mb-2"> HSB </label>
            <ColorPicker v-model="colorHSB" inputId="cp-hsb" format="hsb" class="mb-3" />
            <span>{{ JSON.stringify(colorHSB) }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const colorHEX = ref('6466f1');
const colorRGB = ref({ r: 100, g: 102, b: 241 });
const colorHSB = ref({ h: 239, s: 59, b: 95 });
<\/script>`}}}},ie=e("p",null,[a("Default color format to use in value binding is "),e("i",null,"hex"),a(" and other possible values can be "),e("i",null,"rgb"),a(" and "),e("i",null,"hsb"),a(" using the "),e("i",null,"format"),a(" property.")],-1),ae={class:"card flex flex-wrap gap-3"},de={class:"flex-1 flex flex-column align-items-center"},ue=e("label",{for:"cp-hex",class:"font-bold block mb-2"}," HEX ",-1),pe={class:"flex-1 flex flex-column align-items-center"},me=e("label",{for:"cp-rgb",class:"font-bold block mb-2"}," RGB ",-1),fe={class:"flex-1 flex flex-column align-items-center"},be=e("label",{for:"cp-hsb",class:"font-bold block mb-2"}," HSB ",-1);function _e(r,t,s,i,o,f){const n=b,c=k("ColorPicker"),m=y;return p(),_(h,null,[l(n,g(x(r.$attrs)),{default:v(()=>[ie]),_:1},16),e("div",ae,[e("div",de,[ue,l(c,{modelValue:o.colorHEX,"onUpdate:modelValue":t[0]||(t[0]=d=>o.colorHEX=d),inputId:"cp-hex",format:"hex",class:"mb-3"},null,8,["modelValue"]),e("span",null,C(o.colorHEX),1)]),e("div",pe,[me,l(c,{modelValue:o.colorRGB,"onUpdate:modelValue":t[1]||(t[1]=d=>o.colorRGB=d),inputId:"cp-rgb",format:"rgb",class:"mb-3"},null,8,["modelValue"]),e("span",null,C(JSON.stringify(o.colorRGB)),1)]),e("div",fe,[be,l(c,{modelValue:o.colorHSB,"onUpdate:modelValue":t[2]||(t[2]=d=>o.colorHSB=d),inputId:"cp-hsb",format:"hsb",class:"mb-3"},null,8,["modelValue"]),e("span",null,C(JSON.stringify(o.colorHSB)),1)])]),l(m,{code:o.code},null,8,["code"])],64)}const he=u(se,[["render",_e]]),ve={data(){return{code:{basic:"import ColorPicker from 'primevue/colorpicker';"}}}};function ge(r,t,s,i,o,f){const n=b,c=y;return p(),_(h,null,[l(n,g(x(r.$attrs)),null,16),l(c,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const xe=u(ve,[["render",ge]]),ye={data(){return{color:null,code:{basic:'<ColorPicker v-model="color" inline />',options:`<template>
    <div class="card flex justify-content-center">
        <ColorPicker v-model="color" inline />
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <ColorPicker v-model="color" inline />
    </div>
</template>

<script setup>
import { ref } from "vue";

const color = ref();
<\/script>`}}}},ke=e("p",null,[a("ColorPicker is displayed as a popup by default, add "),e("i",null,"inline"),a(" property to customize this behavior.")],-1),Ce={class:"card flex justify-content-center"};function Se(r,t,s,i,o,f){const n=b,c=k("ColorPicker"),m=y;return p(),_(h,null,[l(n,g(x(r.$attrs)),{default:v(()=>[ke]),_:1},16),e("div",Ce,[l(c,{modelValue:o.color,"onUpdate:modelValue":t[0]||(t[0]=d=>o.color=d),inline:""},null,8,["modelValue"])]),l(m,{code:o.code},null,8,["code"])],64)}const $e=u(ye,[["render",Se]]),Pe={setup(){const{handleSubmit:r}=I(),{value:t,errorMessage:s}=j("value",o),i=T();function o(n){return n?!0:"Color is required."}const f=r(n=>{n.value&&n.value.length>0&&i.add({severity:"info",summary:"Form Submitted",detail:n.value,life:3e3})});return{value:t,handleSubmit:r,onSubmit:f,errorMessage:s}},data(){return{code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <ColorPicker v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="cp-error" />
            <small class="p-error" id="cp-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <ColorPicker v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="cp-error" />
            <small class="p-error" id="cp-error">{{ errorMessage || '&nbsp;' }}</small>
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
        const { handleSubmit } = useForm();
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Color is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
            <ColorPicker v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="cp-error" />
            <small class="p-error" id="cp-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'Color is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value, life: 3000 });
    }
});
<\/script>
`}}}},we=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),a(" is a popular library for handling forms in Vue.")],-1),De={class:"card flex justify-content-center"},Te={id:"cp-error",class:"p-error"};function Be(r,t,s,i,o,f){const n=b,c=k("ColorPicker"),m=k("Button"),d=y;return p(),_(h,null,[l(n,g(x(r.$attrs)),{default:v(()=>[we]),_:1},16),e("div",De,[e("form",{onSubmit:t[1]||(t[1]=(...S)=>i.onSubmit&&i.onSubmit(...S)),class:"flex flex-column align-items-center gap-2"},[l(c,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=S=>i.value=S),class:B({"p-invalid":i.errorMessage}),"aria-describedby":"cp-error"},null,8,["modelValue","class"]),e("small",Te,C(i.errorMessage||" "),1),l(m,{type:"submit",label:"Submit"})],32)]),l(d,{code:o.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const Ve=u(Pe,[["render",Be]]),He={data(){return{color:null,code:{basic:`<ColorPicker
    v-model="color"
    inline
    :pt="{
        colorHandler: { class: 'w-1rem h-1rem' }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <ColorPicker
            v-model="color"
            inline
            :pt="{
                colorHandler: { class: 'w-1rem h-1rem' }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <ColorPicker
            v-model="color"
            inline
            :pt="{
                colorHandler: { class: 'w-1rem h-1rem' }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const color = ref();
<\/script>`}}}},Fe={class:"card flex justify-content-center"};function Ie(r,t,s,i,o,f){const n=b,c=k("ColorPicker"),m=y;return p(),_(h,null,[l(n,g(x(r.$attrs)),null,16),e("div",Fe,[l(c,{modelValue:o.color,"onUpdate:modelValue":t[0]||(t[0]=d=>o.color=d),inline:"",pt:{colorHandler:{class:"w-1rem h-1rem"}}},null,8,["modelValue"])]),l(m,{code:o.code},null,8,["code"])],64)}const je=u(He,[["render",Ie]]),Ne={},Re=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/colorpicker.jpg"})],-1);function Ee(r,t){const s=b;return p(),_(h,null,[l(s,g(x(r.$attrs)),{default:v(()=>[e("p",null,C(r.$attrs.description),1)]),_:1},16),Re],64)}const Ge=u(Ne,[["render",Ee]]),Xe={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ge},{id:"pt.doc.colorpicker",label:"ColorPicker PT Options",component:V,data:N("ColorPicker")},{id:"pt.demo",label:"Demo",component:je}]}}},Me={class:"doc-main"},Oe=e("div",{class:"doc-intro"},[e("h1",null,"ColorPicker Pass Through")],-1);function Ae(r,t,s,i,o,f){const n=P,c=w;return p(),_(h,null,[e("div",Me,[Oe,l(n,{docs:o.docs},null,8,["docs"])]),l(c,{docs:o.docs},null,8,["docs"])],64)}const Ue=u(Xe,[["render",Ae]]),ze={},Je=e("p",null,"List of class names used in the styled mode.",-1),Ke=H('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-colorpicker</td><td>Container element.</td></tr><tr><td>p-colorpicker-overlay</td><td>Container element in overlay mode.</td></tr><tr><td>p-colorpicker-preview</td><td>Preview input in overlay mode.</td></tr><tr><td>p-colorpicker-panel</td><td>Panel element of the colorpicker.</td></tr><tr><td>p-colorpicker-content</td><td>Wrapper that contains color and hue sections.</td></tr><tr><td>p-colorpicker-color-selector</td><td>Color selector container.</td></tr><tr><td>p-colorpicker-color</td><td>Color element.</td></tr><tr><td>p-colorpicker-color-handle</td><td>Handle of the color element.</td></tr><tr><td>p-colorpicker-hue</td><td>Hue slider.</td></tr><tr><td>p-colorpicker-hue-handle</td><td>Handle of the hue slider.</td></tr></tbody></table></div>',1);function qe(r,t){const s=b;return p(),_(h,null,[l(s,g(x(r.$attrs)),{default:v(()=>[Je]),_:1},16),Ke],64)}const We=u(ze,[["render",qe]]),Le={data(){return{code1:{basic:`
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    colorpicker: {
        root: ({ props }) => ({
            class: [
                'inline-block',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        input: {
            class: [
                'm-0',
                'font-sans text-base text-gray-600 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 rounded-lg cursor-pointer',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                'w-8 h-8'
            ]
        },
        panel: ({ props }) => ({
            class: [
                'shadow-md',
                'bg-gray-800 border-gray-900',
                {
                    'relative h-48 w-52': props.inline,
                    'absolute h-48 w-52': !props.inline
                }
            ]
        }),
        selector: 'absolute h-44 w-40 top-2 left-2',
        color: {
            class: 'h-44 w-40',
            style: 'background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)'
        },
        colorhandle: {
            class: ['rounded-full border border-solid cursor-pointer h-3 w-3 absolute  opacity-85', 'border-white']
        },
        hue: {
            class: ['h-44 w-6 absolute top-2 left-44 opacity-85'],
            style: 'background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)'
        },
        huehandle: 'border-solid border-2 cursor-pointer h-2 w-8 left-0 -ml-1 -mt-1 opacity-85 absolute',
        transition: TRANSITIONS.overlay
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <ColorPicker v-model="color" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const color = ref();
<\/script>`}}}},Qe=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ye(r,t,s,i,o,f){const n=R,c=y,m=b;return p(),$(m,g(x(r.$attrs)),{default:v(()=>[e("p",null,[a(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),l(n,{to:"/tailwind"},{default:v(()=>[a("Tailwind Customization")]),_:1}),a(" section for an example. ")]),l(c,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Qe,l(c,{code:o.code2,embedded:""},null,8,["code"])]),_:1},16)}const Ze=u(Le,[["render",Ye]]),eo={data(){return{docs:[{id:"theming.styled",label:"Styled",component:We},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Ze}]}]}}},oo={class:"doc-main"},to=e("div",{class:"doc-intro"},[e("h1",null,"ColorPicker Theming")],-1);function lo(r,t,s,i,o,f){const n=P,c=w;return p(),_(h,null,[e("div",oo,[to,l(n,{docs:o.docs},null,8,["docs"])]),l(c,{docs:o.docs},null,8,["docs"])],64)}const ro=u(eo,[["render",lo]]),no={data(){return{docs:[{id:"import",label:"Import",component:xe},{id:"basic",label:"Basic",component:oe},{id:"inline",label:"Inline",component:$e},{id:"format",label:"Format",component:he},{id:"disabled",label:"Disabled",component:ce},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Ve}]},{id:"accessibility",label:"Accessibility",component:L}],ptComponent:Ue,themingDoc:ro}}};function co(r,t,s,i,o,f){const n=F;return p(),$(n,{title:"Vue ColorPicker Component",header:"ColorPicker",description:"ColorPicker is an input component to select a color.",componentDocs:o.docs,apiDocs:["ColorPicker"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const po=u(no,[["render",co]]);export{po as default};
