import{_ as p,o as m,e as N,w as h,a as n,m as g,b as e,f as l,p as x,h as b,j as y,c as v,n as S,g as w,F as _,B as C,A as F,t as V,D as M,k as $,l as D,v as j,C as B,x as R}from"./entry.68beb385.js";import{_ as E}from"./PrimeVueNuxtLink.f51d0c80.js";import{N as T}from"./NodeService.f4763055.js";import{u as W,a as H}from"./vee-validate.esm.3b430014.js";import{g as P}from"./PTHelper.11558b27.js";const A={data(){return{code:{basic:`<span id="dd1">Options</span>
<TreeSelect aria-labelledby="dd1" />

<TreeSelect aria-label="Options" />`}}}},K=e("h3",null,"Screen Reader",-1),z=e("p",null,[l(" Value to describe the component can either be provided with "),e("i",null,"aria-labelledby"),l(" or "),e("i",null,"aria-label"),l(" props. The treeselect element has a "),e("i",null,"combobox"),l(" role in addition to "),e("i",null,"aria-haspopup"),l(" and "),e("i",null,"aria-expanded"),l(" attributes. The relation between the combobox and the popup is created with "),e("i",null,"aria-controls"),l(" that refers to the id of the popup. ")],-1),O=e("p",null,[l(" The popup list has an id that refers to the "),e("i",null,"aria-controls"),l(" attribute of the "),e("i",null,"combobox"),l(" element and uses "),e("i",null,"tree"),l(" as the role. Each list item has a "),e("i",null,"treeitem"),l(" role along with "),e("i",null,"aria-label"),l(", "),e("i",null,"aria-selected"),l(" and "),e("i",null,"aria-expanded"),l(" attributes. In checkbox selection, "),e("i",null,"aria-checked"),l(" is used instead of "),e("i",null,"aria-selected"),l(". Checkbox and toggle icons are hidden from screen readers as their parent element with "),e("i",null,"treeitem"),l(" role and attributes are used instead for readers and keyboard support. The container element of a treenode has the "),e("i",null,"group"),l(" role. The "),e("i",null,"aria-setsize"),l(", "),e("i",null,"aria-posinset"),l(" and "),e("i",null,"aria-level"),l(" attributes are calculated implicitly and added to each treeitem. ")],-1),U=e("h3",null,"Closed State Keyboard Support",-1),L=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the treeselect element.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Opens the popup and moves visual focus to the selected treenode, if there is none then first treenode receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus.")])])])],-1),q=e("h6",null,"Popup Keyboard Support",-1),G=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next focusable element in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),l(" + "),e("i",null,"tab")]),e("td",null,"Moves focus to the previous focusable element in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Selects the focused option, closes the popup if selection mode is single.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Selects the focused option, closes the popup if selection mode is single.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup, moves focus to the treeselect element.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next treenode.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous treenode.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"If node is closed, opens the node otherwise moves focus to the first child node.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"If node is open, closes the node otherwise moves focus to the parent node.")])])])],-1);function J(t,s,d,r,o,f){const c=x,i=b;return m(),N(i,g({id:"accessibility",label:"Accessibility"},t.$attrs),{default:h(()=>[K,z,O,n(c,g({code:o.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},t.$attrs),null,16,["code"]),U,L,q,G]),_:1},16)}const Q=p(A,[["render",J]]),X={data(){return{nodes:null,selectedValue:null,code:{basic:'<TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-20rem w-full" />',options:`<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-20rem w-full" />
    </div>
</template>

<script>
import { NodeService } from './service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
        }
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-20rem w-full" />
    </div> 
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedValue = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}},mounted(){T.getTreeNodes().then(t=>this.nodes=t)}},Y=e("i",null,"v-model",-1),Z=e("i",null,"options",-1),ee=e("p",null,[l("In single selection mode, value binding should be the "),e("i",null,"key"),l(" value of a node.")],-1),te={class:"card flex justify-content-center"};function oe(t,s,d,r,o,f){const c=E,i=b,a=y("TreeSelect"),u=x;return m(),v(_,null,[n(i,S(w(t.$attrs)),{default:h(()=>[e("p",null,[l(" TreeSelect is used as a controlled component with "),Y,l(" directive along with an "),Z,l(" collection. Internally "),n(c,{to:"/tree"},{default:h(()=>[l("Tree")]),_:1}),l(" component is used so the options model is based on TreeNode API. ")]),ee]),_:1},16),e("div",te,[n(a,{modelValue:o.selectedValue,"onUpdate:modelValue":s[0]||(s[0]=k=>o.selectedValue=k),options:o.nodes,placeholder:"Select Item",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),n(u,g({code:o.code,service:["NodeService"]},t.$attrs),null,16,["code"])],64)}const le=p(X,[["render",oe]]),ne={data(){return{nodes:null,selectedValue:null,activeNodes:{basic:`
{
    '0-0': {
        partialChecked: false,
        checked: true
    }
}`},code:{basic:'<TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Select Item" class="md:w-20rem w-full" />',options:`<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Select Item" class="md:w-20rem w-full" />
    </div>
</template>

<script>
import { NodeService } from './service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
        }
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="checkbox" placeholder="Select Item" class="md:w-20rem w-full" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedValue = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}},mounted(){T.getTreeNodes().then(t=>this.nodes=t)}},se=e("p",null,[l("Selection of multiple nodes via checkboxes is enabled by configuring "),e("i",null,"selectionMode"),l(" as "),e("i",null,"checkbox"),l(".")],-1),ie=e("p",null,[l(" In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has "),e("i",null,"checked"),l(" and "),e("i",null,"partialChecked"),l(" properties to represent the checked state of a node obje to indicate selection. ")],-1),ce={class:"card flex justify-content-center"};function re(t,s,d,r,o,f){const c=b,i=x,a=y("TreeSelect");return m(),v(_,null,[n(c,S(w(t.$attrs)),{default:h(()=>[se,ie]),_:1},16),n(i,g({code:o.activeNodes,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},t.$attrs),null,16,["code"]),e("div",ce,[n(a,{modelValue:o.selectedValue,"onUpdate:modelValue":s[0]||(s[0]=u=>o.selectedValue=u),options:o.nodes,selectionMode:"checkbox",placeholder:"Select Items",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),n(i,g({code:o.code,service:["NodeService"]},t.$attrs),null,16,["code"])],64)}const de=p(ne,[["render",re]]),ae={data(){return{nodes:null,selectedValue:null,code:{basic:'<TreeSelect v-model="selectedValue" disabled class="md:w-20rem w-full" :options="nodes" placeholder="TreeSelect" />',options:`<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" disabled class="md:w-20rem w-full" :options="nodes" placeholder="TreeSelect" />
    </div>
</template>

<script>
import { NodeService } from './service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
        }
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" disabled class="md:w-20rem w-full" :options="nodes" placeholder="TreeSelect" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedValue = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}},mounted(){T.getTreeNodes().then(t=>this.nodes=t)}},ue=e("p",null,[l("When "),e("i",null,"disabled"),l(" is present, the element cannot be edited and focused.")],-1),pe={class:"card flex justify-content-center"};function me(t,s,d,r,o,f){const c=b,i=y("TreeSelect"),a=x;return m(),v(_,null,[n(c,S(w(t.$attrs)),{default:h(()=>[ue]),_:1},16),e("div",pe,[n(i,{modelValue:o.selectedValue,"onUpdate:modelValue":s[0]||(s[0]=u=>o.selectedValue=u),disabled:"",class:"md:w-20rem w-full",options:o.nodes,placeholder:"TreeSelect"},null,8,["modelValue","options"])]),n(a,g({code:o.code,service:["NodeService"]},t.$attrs),null,16,["code"])],64)}const fe=p(ae,[["render",me]]),he={data(){return{nodes:null,selectedValue:null,code:{basic:`<span class="p-float-label">
    <TreeSelect v-model="selectedValue" :options="nodes" class="md:w-20rem w-full" />
    <label>Tree Select</label>
</span>`,options:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <TreeSelect v-model="selectedValue" :options="nodes" class="md:w-20rem w-full" />
            <label>Tree Select</label>
        </span>
    </div>
</template>

<script>
import { NodeService } from './service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
        }
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes     = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <TreeSelect v-model="selectedValue" :options="nodes" class="md:w-20rem w-full" />
            <label>Tree Select</label>
        </span>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedValue = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}},mounted(){T.getTreeNodes().then(t=>this.nodes=t)}},be=e("p",null,"A floating label appears on top of the input field when focused.",-1),ve={class:"card flex justify-content-center"},_e={class:"p-float-label"},Se=e("label",null,"Tree Select",-1);function we(t,s,d,r,o,f){const c=b,i=y("TreeSelect"),a=x;return m(),v(_,null,[n(c,S(w(t.$attrs)),{default:h(()=>[be]),_:1},16),e("div",ve,[e("span",_e,[n(i,{modelValue:o.selectedValue,"onUpdate:modelValue":s[0]||(s[0]=u=>o.selectedValue=u),options:o.nodes,class:"md:w-20rem w-full"},null,8,["modelValue","options"]),Se])]),n(a,g({code:o.code,service:["NodeService"]},t.$attrs),null,16,["code"])],64)}const ge=p(he,[["render",we]]),xe={data(){return{code:{basic:"import TreeSelect from 'primevue/treeselect';"}}}};function ye(t,s,d,r,o,f){const c=b,i=x;return m(),v(_,null,[n(c,S(w(t.$attrs)),null,16),n(i,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Te=p(xe,[["render",ye]]),ke={data(){return{nodes:null,selectedValue:null,code:{basic:'<TreeSelect v-model="selectedValue" class="md:w-20rem w-full p-invalid" :options="nodes" placeholder="TreeSelect" />',options:`<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" class="md:w-20rem w-full p-invalid" :options="nodes" placeholder="TreeSelect" />
    </div>
</template>

<script>
import { NodeService } from './service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
        }
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" class="md:w-20rem w-full p-invalid" :options="nodes" placeholder="TreeSelect" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedValue = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}},mounted(){T.getTreeNodes().then(t=>this.nodes=t)}},Ne=e("p",null,[l("Invalid state style is added using the "),e("i",null,"p-invalid"),l(" class to indicate a failed validation.")],-1),Ve={class:"card flex justify-content-center"};function $e(t,s,d,r,o,f){const c=b,i=y("TreeSelect"),a=x;return m(),v(_,null,[n(c,S(w(t.$attrs)),{default:h(()=>[Ne]),_:1},16),e("div",Ve,[n(i,{modelValue:o.selectedValue,"onUpdate:modelValue":s[0]||(s[0]=u=>o.selectedValue=u),class:"md:w-20rem w-full p-invalid",options:o.nodes,placeholder:"TreeSelect"},null,8,["modelValue","options"])]),n(a,g({code:o.code,service:["NodeService"]},t.$attrs),null,16,["code"])],64)}const De=p(ke,[["render",$e]]),Ie={data(){return{nodes:null,selectedValue:null,activeNodes:{basic:`
{
    '0-0': true,
    '0-1-0': true
}`},code:{basic:'<TreeSelect v-model="selectedValue" :options="nodes" selectionMode="multiple" :metaKeySelection="false" placeholder="Select Item" class="md:w-20rem w-full" />',options:`<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="multiple" :metaKeySelection="false" placeholder="Select Item" class="md:w-20rem w-full" />
    </div>
</template>

<script>
import { NodeService } from './service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
        }
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <TreeSelect v-model="selectedValue" :options="nodes" selectionMode="multiple" :metaKeySelection="false" placeholder="Select Item" class="md:w-20rem w-full" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedValue = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}},mounted(){T.getTreeNodes().then(t=>this.nodes=t)}},Ce=e("p",null,[l(" More than one node is selectable by setting "),e("i",null,"selectionMode"),l(" to "),e("i",null,"multiple"),l(". By default in multiple selection mode, metaKey press (e.g. "),e("i",null,"⌘"),l(") is necessary to add to existing selections however this can be configured with disabling the "),e("i",null,"metaKeySelection"),l(" property. Note that in touch enabled devices, TreeSelect always ignores metaKey. ")],-1),Fe=e("p",null,"In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.",-1),Me={class:"card flex justify-content-center"};function je(t,s,d,r,o,f){const c=b,i=x,a=y("TreeSelect");return m(),v(_,null,[n(c,S(w(t.$attrs)),{default:h(()=>[Ce,Fe]),_:1},16),n(i,g({code:o.activeNodes,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},t.$attrs),null,16,["code"]),e("div",Me,[n(a,{modelValue:o.selectedValue,"onUpdate:modelValue":s[0]||(s[0]=u=>o.selectedValue=u),options:o.nodes,selectionMode:"multiple",metaKeySelection:!1,placeholder:"Select Items",class:"md:w-20rem w-full"},null,8,["modelValue","options"])]),n(i,g({code:o.code,service:["NodeService"]},t.$attrs),null,16,["code"])],64)}const Be=p(Ie,[["render",je]]),Re={setup(){const{handleSubmit:t,resetForm:s}=W(),{value:d,errorMessage:r}=H("value",f),o=C();function f(i){return i?!0:"Value is required."}const c=t(i=>{i.value&&(o.add({severity:"info",summary:"Form Submitted",detail:"The form is successfully submitted.",life:3e3}),s())});return{value:d,handleSubmit:t,onSubmit:c,errorMessage:r}},data(){return{nodes:null,code:{basic:`<div class="card flex justify-content-center">
    <form @submit="onSubmit" class="flex flex-column align-items-center gap-2 w-full md:w-20rem">
        <TreeSelect v-model="value" :class="['w-full md:w-20rem', { 'p-invalid': errorMessage }]" aria-describedby="text-error" :options="nodes" placeholder="Select Item" />
        <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
        <Button type="submit" label="Submit" />
    </form>
</div>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2 w-full md:w-20rem">
            <TreeSelect v-model="value" :class="['w-full md:w-20rem', { 'p-invalid': errorMessage }]" aria-describedby="text-error" :options="nodes" placeholder="Select Item" />
            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';
import { NodeService } from '@/service/NodeService';

export default {
    setup() {
        const { handleSubmit, resetForm } = useForm();
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Value is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: 'The form is successfully submitted.', life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    },
    data() {
        return {
            nodes: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column align-items-center gap-2 w-full md:w-20rem">
            <TreeSelect v-model="value" :class="['w-full md:w-20rem', { 'p-invalid': errorMessage }]" aria-describedby="text-error" :options="nodes" placeholder="Select Item" />
            <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';
import { NodeService } from '@/service/NodeService';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);

const toast = useToast();
const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

function validateField(value) {
    if (!value) {
        return 'Value is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: 'The form is successfully submitted.', life: 3000 });
        resetForm();
    }
});
<\/script>`}}},mounted(){T.getTreeNodes().then(t=>this.nodes=t)}},Ee=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),l(" is a popular library for handling forms in Vue.")],-1),We={class:"card flex justify-content-center"},He={id:"text-error",class:"p-error"};function Pe(t,s,d,r,o,f){const c=b,i=y("TreeSelect"),a=y("Button"),u=x;return m(),v(_,null,[n(c,S(w(t.$attrs)),{default:h(()=>[Ee]),_:1},16),e("div",We,[e("form",{onSubmit:s[1]||(s[1]=(...k)=>r.onSubmit&&r.onSubmit(...k)),class:"flex flex-column align-items-center gap-2 w-full md:w-20rem"},[n(i,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=k=>r.value=k),class:F(["w-full md:w-20rem",{"p-invalid":r.errorMessage}]),"aria-describedby":"text-error",options:o.nodes,placeholder:"Select Item"},null,8,["modelValue","class","options"]),e("small",He,V(r.errorMessage||" "),1),n(a,{type:"submit",label:"Submit"})],32)]),n(u,{code:o.code,dependencies:{"vee-validate":"4.8.2"},service:["NodeService"]},null,8,["code"])],64)}const Ae=p(Re,[["render",Pe]]),Ke={data(){return{nodes:null,selectedValue:null,code:{basic:`<TreeSelect
    v-model="selectedValue"
    :options="nodes"
    placeholder="Select Item"
    :pt="{
        root: { class: 'w-full md:w-30rem' },
        tree: {
            content: ({ props, state, context }) => ({
                class: context.expanded ? 'bg-blue-100' : 'undefined'
            })
        }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <TreeSelect
            v-model="selectedValue"
            :options="nodes"
            placeholder="Select Item"
            :pt="{
                root: { class: 'w-full md:w-30rem' },
                tree: {
                    content: ({ props, state, context }) => ({
                        class: context.expanded ? 'bg-blue-100' : 'undefined'
                    })
                }
            }"
        />
    </div>
</template>

<script>
import { NodeService } from './service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedValue: null,
        }
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <TreeSelect
            v-model="selectedValue"
            :options="nodes"
            placeholder="Select Item"
            :pt="{
                root: { class: 'w-full md:w-30rem' },
                tree: {
                    content: ({ props, state, context }) => ({
                        class: context.expanded ? 'bg-blue-100' : 'undefined'
                    })
                }
            }"
        />
    </div> 
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedValue = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}},mounted(){T.getTreeNodes().then(t=>this.nodes=t)}},ze={class:"card flex justify-content-center"};function Oe(t,s,d,r,o,f){const c=b,i=y("TreeSelect"),a=x;return m(),v(_,null,[n(c,S(w(t.$attrs)),null,16),e("div",ze,[n(i,{modelValue:o.selectedValue,"onUpdate:modelValue":s[0]||(s[0]=u=>o.selectedValue=u),options:o.nodes,placeholder:"Select Item",pt:{root:{class:"w-full md:w-30rem"},tree:{content:({props:u,state:k,context:I})=>({class:I.expanded?"bg-blue-100":"undefined"})}}},null,8,["modelValue","options","pt"])]),n(a,g({code:o.code,service:["NodeService"]},t.$attrs),null,16,["code"])],64)}const Ue=p(Ke,[["render",Oe]]),Le={},qe=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/treeselect.jpg"})],-1);function Ge(t,s){const d=b;return m(),v(_,null,[n(d,S(w(t.$attrs)),{default:h(()=>[e("p",null,V(t.$attrs.description),1)]),_:1},16),qe],64)}const Je=p(Le,[["render",Ge]]),Qe={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Je},{id:"pt.doc.treeselect",label:"TreeSelect PT Options",component:M,data:P("TreeSelect")},{id:"pt.demo",label:"Demo",component:Ue}]}}},Xe={class:"doc-main"},Ye=e("div",{class:"doc-intro"},[e("h1",null,"TreeSelect Pass Through")],-1);function Ze(t,s,d,r,o,f){const c=$,i=D;return m(),v(_,null,[e("div",Xe,[Ye,n(c,{docs:o.docs},null,8,["docs"])]),n(i,{docs:o.docs},null,8,["docs"])],64)}const et=p(Qe,[["render",Ze]]),tt={},ot=e("p",null,"List of class names used in the styled mode.",-1),lt=j('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-treeselect</td><td>Container element.</td></tr><tr><td>p-treeselect-label-container</td><td>Container of the label to display selected items.</td></tr><tr><td>p-treeselect-label</td><td>Label to display selected items.</td></tr><tr><td>p-treeselect-trigger</td><td>Dropdown button.</td></tr><tr><td>p-treeselect-panel</td><td>Overlay panel for items.</td></tr><tr><td>p-treeselect-items-wrapper</td><td>List container of items.</td></tr></tbody></table></div>',1);function nt(t,s){const d=b;return m(),v(_,null,[n(d,S(w(t.$attrs)),{default:h(()=>[ot]),_:1},16),lt],64)}const st=p(tt,[["render",nt]]),it={data(){return{code1:{basic:`
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    treeselect: {
        root: ({ props }) => ({
            class: [
                'inline-flex cursor-pointer select-none',
                'bg-white dark:bg-gray-900 border border-gray-400 dark:border-blue-900/40  transition-colors duration-200 ease-in-out rounded-md',
                'w-full md:w-80',
                { 'opacity-60 select-none pointer-events-none cursor-default': props?.disabled }
            ]
        }),
        labelContainer: {
            class: ['overflow-hidden flex flex-auto cursor-pointer']
        },
        label: {
            class: ['block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis', 'text-gray-800 dark:text-white/80', 'p-3 transition duration-200']
        },
        trigger: {
            class: ['flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg']
        },
        panel: {
            class: ['bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg']
        },
        wrapper: {
            class: ['max-h-[200px] overflow-auto', 'bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg']
        },
        transition: TRANSITIONS.overlay
    },
    tree: {
        root: {
            class: ['max-w-[30rem] md:w-full', 'border border-solid border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 p-5 rounded-md']
        },
        wrapper: 'overflow-auto',
        container: 'm-0 p-0 list-none overflow-auto',
        node: 'p-1 outline-none',
        content: ({ context, props }) => ({
            class: [
                'flex items-center',
                'rounded-lg transition-shadow duration-200 p-2',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'bg-blue-50 text-blue-600': context.selected },
                { 'cursor-pointer select-none': props.selectionMode == 'single' || props.selectionMode == 'multiple' }
            ]
        }),
        toggler: ({ context }) => ({
            class: [
                'cursor-pointer select-none inline-flex items-center justify-center overflow-hidden relative shrink-0',
                'mr-2 w-8 h-8 border-0 bg-transparent rounded-full transition duration-200',
                'hover:border-transparent focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'text-gray-500 dark:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-800 dark:hover:text-white/80': !context.selected,
                    'text-blue-600 hover:bg-white/30': context.selected
                },
                {
                    hidden: context.leaf
                }
            ]
        }),
        checkboxcontainer: 'mr-2',
        checkbox: ({ context, props }) => ({
            class: [
                'cursor-pointer inline-flex relative select-none align-bottom',
                'w-6 h-6',
                'flex items-center justify-center',
                'border-2 w-6 h-6 rounded-lg transition-colors duration-200 text-white text-base dark:text-gray-900',
                {
                    'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900': !context.checked,
                    'border-blue-500 text-white bg-blue-500 dark:border-blue-400 dark:bg-blue-400': context.checked
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        }),
        nodeicon: 'mr-2 text-gray-600 dark:text-white/70',
        subgroup: {
            class: ['m-0 list-none', 'p-0 pl-4']
        },
        filtercontainer: {
            class: ['mb-2', 'relative block w-full']
        },
        input: {
            class: [
                'm-0 p-3 text-base w-full pr-7',
                'font-sans text-gray-600 dark:text-white/70 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        searchicon: 'absolute top-1/2 -mt-2 right-3 text-gray-600 dark:hover:text-white/70'
    },
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-20rem w-full" />
    </div> 
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedValue = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`}}}},ct=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function rt(t,s,d,r,o,f){const c=B,i=x,a=b;return m(),N(a,S(w(t.$attrs)),{default:h(()=>[e("p",null,[l(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),n(c,{to:"/tailwind"},{default:h(()=>[l("Tailwind Customization")]),_:1}),l(" section for an example. ")]),n(i,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),ct,n(i,{code:o.code2,service:["NodeService"],embedded:""},null,8,["code"])]),_:1},16)}const dt=p(it,[["render",rt]]),at={data(){return{docs:[{id:"theming.styled",label:"Styled",component:st},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:dt}]}]}}},ut={class:"doc-main"},pt=e("div",{class:"doc-intro"},[e("h1",null,"TreeSelect Theming")],-1);function mt(t,s,d,r,o,f){const c=$,i=D;return m(),v(_,null,[e("div",ut,[pt,n(c,{docs:o.docs},null,8,["docs"])]),n(i,{docs:o.docs},null,8,["docs"])],64)}const ft=p(at,[["render",mt]]),ht={data(){return{docs:[{id:"import",label:"Import",component:Te},{id:"basic",label:"Basic",component:le},{id:"multiple",label:"Multiple",component:Be},{id:"checkbox",label:"Checkbox",component:de},{id:"float-label",label:"Float Label",component:ge},{id:"invalid",label:"Invalid",component:De},{id:"disabled",label:"Disabled",component:fe},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:Ae}]},{id:"accessibility",label:"Accessibility",component:Q}],ptComponent:et,themingDoc:ft}}};function bt(t,s,d,r,o,f){const c=R;return m(),N(c,{title:"Vue TreeSelect Component",header:"TreeSelect",description:"TreeSelect is a form component to choose from hierarchical data.",componentDocs:o.docs,apiDocs:["TreeSelect"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const xt=p(ht,[["render",bt]]);export{xt as default};
