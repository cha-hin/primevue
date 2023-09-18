import{_ as c,o as u,e as q,w as m,m as B,b as t,f as d,h as v,j as x,c as h,a as o,n as g,g as y,F as f,p as $,r as D,i as S,B as F,t as w,D as k,k as V,l as C,v as P,x as U}from"./entry.68beb385.js";import{u as I,a as A}from"./vee-validate.esm.3b430014.js";import{g as j}from"./PTHelper.11558b27.js";import{_ as R}from"./PrimeVueNuxtLink.f51d0c80.js";const M={},N=t("h3",null,"Screen Reader",-1),z=t("p",null,[d(" Quill performs generally well in terms of accessibility. The elements in the toolbar can be tabbed and have the necessary ARIA roles/attributes for screen readers. One known limitation is the lack of arrow key support for "),t("a",{href:"https://github.com/quilljs/quill/issues/1031"},"dropdowns"),d(" in the toolbar that may be overcome with a custom toolbar. ")],-1);function Q(n,l){const r=v;return u(),q(r,B({id:"accessibility",label:"Accessibility"},n.$attrs),{default:m(()=>[N,z]),_:1},16)}const O=c(M,[["render",Q]]),W={data(){return{value:"",code:{basic:'<Editor v-model="value" editorStyle="height: 320px" />',options:`<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('');
<\/script>`}}}},H=t("p",null,[d("A model can be bound using the standard "),t("i",null,"v-model"),d(" directive.")],-1),L={class:"card"};function G(n,l,r,a,e,p){const s=v,i=x("Editor"),b=$;return u(),h(f,null,[o(s,g(y(n.$attrs)),{default:m(()=>[H]),_:1},16),t("div",L,[o(i,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=_=>e.value=_),editorStyle:"height: 320px"},null,8,["modelValue"])]),o(b,{code:e.code,dependencies:{quill:"1.3.7"},component:"Editor"},null,8,["code"])],64)}const J=c(W,[["render",G]]),K={data(){return{code:{basic:"import Editor from 'primevue/editor';"}}}};function X(n,l,r,a,e,p){const s=v,i=$;return u(),h(f,null,[o(s,g(y(n.$attrs)),null,16),o(i,{code:e.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Y=c(K,[["render",X]]),Z={data(){return{code:{basic:"npm install quill"}}}},tt=t("p",null,[d("Editor uses "),t("a",{href:"https://quilljs.com/"},"Quill"),d(" editor underneath so it needs to be installed as a dependency.")],-1);function et(n,l,r,a,e,p){const s=v,i=$;return u(),h(f,null,[o(s,g(y(n.$attrs)),{default:m(()=>[tt]),_:1},16),o(i,{code:e.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ot=c(Z,[["render",et]]),nt={data(){return{value:"Always bet on Prime",code:{basic:'<Editor v-model="value" editorStyle="height: 320px" readonly />',options:`<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" readonly />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 'Always bet on Prime'
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" readonly />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('Always bet on Prime');
<\/script>`}}}},lt=t("p",null,[d("When "),t("i",null,"readonly"),d(" is present, the value cannot be edited.")],-1),it={class:"card"};function st(n,l,r,a,e,p){const s=v,i=x("Editor"),b=$;return u(),h(f,null,[o(s,g(y(n.$attrs)),{default:m(()=>[lt]),_:1},16),t("div",it,[o(i,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=_=>e.value=_),editorStyle:"height: 320px",readonly:""},null,8,["modelValue"])]),o(b,{code:e.code,dependencies:{quill:"1.3.7"},component:"Editor"},null,8,["code"])],64)}const rt=c(nt,[["render",st]]),at={data(){return{value:"<div>Hello World!</div><div>PrimeVue <b>Editor</b> Rocks</div><div><br></div>",code:{basic:`<Editor v-model="value" editorStyle="height: 320px">
    <template v-slot:toolbar>
        <span class="ql-formats">
            <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
            <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
            <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
        </span>
    </template>
</Editor>`,options:`<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                    <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                    <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                </span>
            </template>
        </Editor>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '<div>Hello World!</div><div>PrimeVue <b>Editor</b> Rocks</div><div><br></div>'
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px">
            <template v-slot:toolbar>
                <span class="ql-formats">
                    <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                    <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                    <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                </span>
            </template>
        </Editor>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('<div>Hello World!</div><div>PrimeVue <b>Editor</b> Rocks</div><div><br></div>');
<\/script>`}}}},dt=t("p",null,[d("Editor provides a default toolbar with common options, to customize it define your elements inside the header element. Refer to "),t("a",{href:"http://quilljs.com/docs/modules/toolbar/"},"Quill documentation"),d(" for available controls.")],-1),ct={class:"card"},ut={class:"ql-formats"},pt={class:"ql-bold"},mt={class:"ql-italic"},bt={class:"ql-underline"};function _t(n,l,r,a,e,p){const s=v,i=x("Editor"),b=$,_=D("tooltip");return u(),h(f,null,[o(s,g(y(n.$attrs)),{default:m(()=>[dt]),_:1},16),t("div",ct,[o(i,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=E=>e.value=E),editorStyle:"height: 320px"},{toolbar:m(()=>[t("span",ut,[S(t("button",pt,null,512),[[_,"Bold",void 0,{bottom:!0}]]),S(t("button",mt,null,512),[[_,"Italic",void 0,{bottom:!0}]]),S(t("button",bt,null,512),[[_,"Underline",void 0,{bottom:!0}]])])]),_:1},8,["modelValue"])]),o(b,{code:e.code,dependencies:{quill:"1.3.7"},component:"Editor"},null,8,["code"])],64)}const vt=c(at,[["render",_t]]),ht={setup(){const{handleSubmit:n,resetForm:l}=I(),{value:r,errorMessage:a}=A("value",p),e=F();function p(i){return i?!0:"Content is required."}const s=n(i=>{i.value&&i.value.length>0&&(e.add({severity:"info",summary:"Blog Submitted",detail:"The blog is uploaded",life:3e3}),l())});return{value:r,handleSubmit:n,onSubmit:s,errorMessage:a}},data(){return{code:{basic:`<template>
    <div class="card">
        <form @submit="onSubmit">
            <Editor v-model="value" editorStyle="height: 320px" aria-describedby="editor-error">
                <template v-slot:toolbar>
                    <span class="ql-formats">
                        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                    </span>
                </template>
            </Editor>
            <div class="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                <small class="p-error" id="editor-error">{{ errorMessage || '&nbsp;' }}</small>
                <Button type="submit" label="Submit" />
            </div>
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card">
        <form @submit="onSubmit">
            <Editor v-model="value" editorStyle="height: 320px" aria-describedby="editor-error">
                <template v-slot:toolbar>
                    <span class="ql-formats">
                        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                    </span>
                </template>
            </Editor>
            <div class="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                <small class="p-error" id="editor-error">{{ errorMessage || '&nbsp;' }}</small>
                <Button type="submit" label="Submit" />
            </div>
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
                return 'Content is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value && values.value.length > 0) {
                toast.add({ severity: 'info', summary: 'Blog Submitted', detail: 'The blog is uploaded', life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <form @submit="onSubmit">
            <Editor v-model="value" editorStyle="height: 320px" aria-describedby="editor-error">
                <template v-slot:toolbar>
                    <span class="ql-formats">
                        <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                        <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                        <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
                    </span>
                </template>
            </Editor>
            <div class="flex flex-wrap justify-content-between align-items-center gap-3 mt-3">
                <small class="p-error" id="editor-error">{{ errorMessage || '&nbsp;' }}</small>
                <Button type="submit" label="Submit" />
            </div>
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
        return 'Content is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value && values.value.length > 0) {
        toast.add({ severity: 'info', summary: 'Blog Submitted', detail: 'The blog is uploaded', life: 3000 });
        resetForm();
    }
});
<\/script>
`}}}},ft=t("p",null,[t("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),d(" is a popular library for handling forms in Vue.")],-1),gt={class:"card"},yt={class:"ql-formats"},$t={class:"ql-bold"},St={class:"ql-italic"},xt={class:"ql-underline"},Et={class:"flex flex-wrap justify-content-between align-items-center gap-3 mt-3"},Tt={id:"editor-error",class:"p-error"};function qt(n,l,r,a,e,p){const s=v,i=x("Editor"),b=x("Button"),_=$,E=D("tooltip");return u(),h(f,null,[o(s,g(y(n.$attrs)),{default:m(()=>[ft]),_:1},16),t("div",gt,[t("form",{onSubmit:l[1]||(l[1]=(...T)=>a.onSubmit&&a.onSubmit(...T))},[o(i,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=T=>a.value=T),editorStyle:"height: 320px","aria-describedby":"editor-error"},{toolbar:m(()=>[t("span",yt,[S(t("button",$t,null,512),[[E,"Bold",void 0,{bottom:!0}]]),S(t("button",St,null,512),[[E,"Italic",void 0,{bottom:!0}]]),S(t("button",xt,null,512),[[E,"Underline",void 0,{bottom:!0}]])])]),_:1},8,["modelValue"]),t("div",Et,[t("small",Tt,w(a.errorMessage||" "),1),o(b,{type:"submit",label:"Submit"})])],32)]),o(_,{code:e.code,dependencies:{"vee-validate":"4.8.2",quill:"1.3.7"},component:"Editor"},null,8,["code"])],64)}const Dt=c(ht,[["render",qt]]),wt={data(){return{value:"",code:{basic:`<Editor
    v-model="value"
    :pt="{
        content: { style: { height: '320px' } },
        toolbar: { class: 'surface-ground' }
    }"
/>`,options:`<template>
    <div class="card">
        <Editor
            v-model="value"
            :pt="{
                content: { style: { height: '320px' } },
                toolbar: { class: 'surface-ground' }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <Editor
            v-model="value"
            :pt="{
                content: { style: { height: '320px' } },
                toolbar: { class: 'surface-ground' }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('');
<\/script>`}}}},Vt={class:"card"};function Ct(n,l,r,a,e,p){const s=v,i=x("Editor"),b=$;return u(),h(f,null,[o(s,g(y(n.$attrs)),null,16),t("div",Vt,[o(i,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=_=>e.value=_),pt:{content:{style:{height:"320px"}},toolbar:{class:"surface-ground"}}},null,8,["modelValue"])]),o(b,{code:e.code,dependencies:{quill:"1.3.7"},component:"Editor"},null,8,["code"])],64)}const Bt=c(wt,[["render",Ct]]),Ft={},kt=t("div",{class:"card"},[t("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/editor.jpg"})],-1);function Pt(n,l){const r=v;return u(),h(f,null,[o(r,g(y(n.$attrs)),{default:m(()=>[t("p",null,w(n.$attrs.description),1)]),_:1},16),kt],64)}const Ut=c(Ft,[["render",Pt]]),It={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ut},{id:"pt.doc.editor",label:"Editor PT Options",component:k,data:j("Editor")},{id:"pt.demo",label:"Demo",component:Bt}]}}},At={class:"doc-main"},jt=t("div",{class:"doc-intro"},[t("h1",null,"Editor Pass Through")],-1);function Rt(n,l,r,a,e,p){const s=V,i=C;return u(),h(f,null,[t("div",At,[jt,o(s,{docs:e.docs},null,8,["docs"])]),o(i,{docs:e.docs},null,8,["docs"])],64)}const Mt=c(It,[["render",Rt]]),Nt={},zt=t("p",null,"List of class names used in the styled mode.",-1),Qt=P('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-editor-container</td><td>Container element</td></tr><tr><td>p-editor-toolbar</td><td>Toolbar of the editor</td></tr><tr><td>p-editor-content</td><td>Editable area</td></tr></tbody></table></div>',1);function Ot(n,l){const r=v;return u(),h(f,null,[o(r,g(y(n.$attrs)),{default:m(()=>[zt]),_:1},16),Qt],64)}const Wt=c(Nt,[["render",Ot]]),Ht={data(){return{code1:{basic:`
export default {
    editor: {
        toolbar: {
            class: ['bg-gray-100 rounded-tr-md rounded-tl-md', 'border border-gray-300 box-border font-sans px-2 py-1']
        },
        formats: {
            class: ['inline-block align-middle', 'mr-4']
        },
        header: {
            class: ['text-gray-700 inline-block float-left text-base font-medium h-6 relative align-middle', 'w-28', 'border-0 text-gray-600']
        }
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('');
<\/script>`}}}},Lt=t("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Gt(n,l,r,a,e,p){const s=R,i=$,b=v;return u(),q(b,g(y(n.$attrs)),{default:m(()=>[t("p",null,[d(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(s,{to:"/tailwind"},{default:m(()=>[d("Tailwind Customization")]),_:1}),d(" section for an example. ")]),o(i,{code:e.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Lt,o(i,{code:e.code2,dependencies:{quill:"1.3.7"},component:"Editor",embedded:""},null,8,["code"])]),_:1},16)}const Jt=c(Ht,[["render",Gt]]),Kt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Wt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Jt}]}]}}},Xt={class:"doc-main"},Yt=t("div",{class:"doc-intro"},[t("h1",null,"Editor Theming")],-1);function Zt(n,l,r,a,e,p){const s=V,i=C;return u(),h(f,null,[t("div",Xt,[Yt,o(s,{docs:e.docs},null,8,["docs"])]),o(i,{docs:e.docs},null,8,["docs"])],64)}const te=c(Kt,[["render",Zt]]),ee={data(){return{docs:[{id:"import",label:"Import",component:Y},{id:"quill",label:"Quill",component:ot},{id:"basic",label:"Basic",component:J},{id:"readonly",label:"ReadOnly",component:rt},{id:"template",label:"Template",component:vt},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Dt}]},{id:"accessibility",label:"Accessibility",component:O}],ptComponent:Mt,themingDoc:te}}};function oe(n,l,r,a,e,p){const s=U;return u(),q(s,{title:"Vue Editor Component",header:"Editor",description:"Editor is rich text editor component based on Quill.",componentDocs:e.docs,apiDocs:["Editor"],ptTabComponent:e.ptComponent,themingDocs:e.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const re=c(ee,[["render",oe]]);export{re as default};
