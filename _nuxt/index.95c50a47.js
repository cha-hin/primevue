import{_ as b,o as h,e as k,w as s,b as e,f as n,a as o,m as I,h as T,j as r,c as y,n as _,g as x,F as v,p as C,q as M,A as R,t as P,D,k as K,l as F,v as H,x as E}from"./entry.68beb385.js";import{_ as z}from"./PrimeVueNuxtLink.f51d0c80.js";import{N as S}from"./NodeService.f4763055.js";import{g as $}from"./PTHelper.11558b27.js";const V={},B=e("h3",null,"Screen Reader",-1),W=e("p",null,[n(" DataTable uses a "),e("i",null,"treegrid"),n(" element whose attributes can be extended with the "),e("i",null,"tableProps"),n(" option. This property allows passing aria roles and attributes like "),e("i",null,"aria-label"),n(" and "),e("i",null,"aria-describedby"),n(" to define the table for readers. Default role of the table is "),e("i",null,"table"),n(". Header, body and footer elements use "),e("i",null,"rowgroup"),n(", rows use "),e("i",null,"row"),n(" role, header cells have "),e("i",null,"columnheader"),n(" and body cells use "),e("i",null,"cell"),n(" roles. Sortable headers utilizer "),e("i",null,"aria-sort"),n(' attribute either set to "ascending" or "descending". ')],-1),L=e("p",null,[n("Row elements manage "),e("i",null,"aria-expanded"),n(" for state along with "),e("i",null,"aria-posinset"),n(", "),e("i",null,"aria-setsize"),n(" and "),e("i",null,"aria-level"),n(" attribute to define the hierachy.")],-1),U=e("p",null,[n("When selection is enabled, "),e("i",null,"aria-selected"),n(" is set to true on a row. In checkbox mode, TreeTable component uses a hidden native checkbox element.")],-1),j=e("p",null,"Editable cells use custom templating so you need to manage aria roles and attributes manually if required.",-1),O=e("h3",null,"Sortable Headers Keyboard Support",-1),A=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves through the headers.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Sorts the column.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Sorts the column.")])])])],-1),q=e("h3",null,"Keyboard Support",-1),G=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null," Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable element in the page tab sequence. ")]),e("tr",null,[e("td",null,[e("i",null,"shift"),n(" + "),e("i",null,"tab")]),e("td",null," Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable element in the page tab sequence. ")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Selects the focused treenode.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Selects the focused treenode.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next treenode.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous treenode.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"If node is closed, opens the node otherwise moves focus to the first child node.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"If node is open, closes the node otherwise moves focus to the parent node.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first same-level node.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last same-level node.")])])])],-1);function J(l,a){const m=z,u=T;return h(),k(u,I({id:"accessibility",label:"Accessibility"},l.$attrs),{default:s(()=>[B,W,L,U,j,e("p",null,[n("Paginator is a standalone component used inside the DataTable, refer to the "),o(m,{to:"/paginator"},{default:s(()=>[n("paginator")]),_:1}),n(" for more information about the accessibility features.")]),O,A,q,G]),_:1},16)}const Q=b(V,[["render",J]]),X={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},Y=e("p",null,[n("TreeTable requires a collection of "),e("i",null,"TreeNode"),n(" instances as a "),e("i",null,"value"),n(" and "),e("i",null,"Column"),n(" components as children for the representation. The column with the element to toggle a node should have "),e("i",null,"expander"),n(" enabled.")],-1),Z={class:"card"};function ee(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Y]),_:1},16),e("div",Z,[o(d,{value:t.nodes},{default:s(()=>[o(i,{field:"name",header:"Name",expander:""}),o(i,{field:"size",header:"Size"}),o(i,{field:"type",header:"Type"})]),_:1},8,["value"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const oe=b(X,[["render",ee]]),te={data(){return{nodes:null,selectedColumns:null,columns:null,code:{basic:`<TreeTable :value="nodes">
    <template #header>
        <div style="text-align:left">
            <MultiSelect :modelValue="selectedColumns" @update:modelValue="onToggle" :options="columns" optionLabel="header" class="w-full sm:w-16rem" display="chip"/>
        </div>
    </template>
    <Column field="name" header="Name" :expander="true"></Column>
    <Column v-for="col of selectedColumns" :field="col.field" :header="col.header" :key="col.field"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" @update:modelValue="onToggle" :options="columns" optionLabel="header" class="w-full sm:w-16rem" display="chip"/>
                </div>
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column v-for="col of selectedColumns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedColumns: null,
            columns: null,
        }
    },
    created() {
        this.columns = [
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];

        this.selectedColumns = this.columns;
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    },
    methods: {
        onToggle(value) {
            this.selectedColumns = this.columns.filter(col => value.includes(col));
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" @update:modelValue="onToggle" :options="columns" optionLabel="header" class="w-full sm:w-16rem" display="chip"/>
                </div>
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column v-for="col of selectedColumns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const columns = ref([
    {field: 'size', header: 'Size'},
    {field: 'type', header: 'Type'}
]);
const nodes = ref();
const selectedColumns = ref(columns.value);
const onToggle = (val) => {
    selectedColumns.value = columns.value.filter(col => val.includes(col));
};
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
...
`}}},created(){this.columns=[{field:"size",header:"Size"},{field:"type",header:"Type"}],this.selectedColumns=this.columns},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)},methods:{onToggle(l){this.selectedColumns=this.columns.filter(a=>l.includes(a))}}},le=e("p",null,"Column visibility based on a condition can be implemented with dynamic columns, in this sample a MultiSelect is used to manage the visible columns.",-1),ne={class:"card"},ie={style:{"text-align":"left"}};function ae(l,a,m,u,t,f){const c=T,i=r("MultiSelect"),d=r("Column"),p=r("TreeTable"),g=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[le]),_:1},16),e("div",ne,[o(p,{value:t.nodes},{header:s(()=>[e("div",ie,[o(i,{modelValue:t.selectedColumns,"onUpdate:modelValue":f.onToggle,options:t.columns,optionLabel:"header",class:"w-full sm:w-16rem",display:"chip"},null,8,["modelValue","onUpdate:modelValue","options"])])]),default:s(()=>[o(d,{field:"name",header:"Name",expander:!0}),(h(!0),y(v,null,M(t.selectedColumns,w=>(h(),k(d,{key:w.field,field:w.field,header:w.header},null,8,["field","header"]))),128))]),_:1},8,["value"])]),o(g,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const de=b(te,[["render",ae]]),se={data(){return{nodes:null,expandedKeys:{},code:{basic:`<Button @click="toggleApplications" label="Toggle Applications" />
<TreeTable v-model:expandedKeys="expandedKeys" :value="nodes">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <Button @click="toggleApplications" label="Toggle Applications" />
        <TreeTable v-model:expandedKeys="expandedKeys" :value="nodes">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    },
    methods: {
        toggleApplications() {
            let _expandedKeys = { ...this.expandedKeys };

            if (_expandedKeys['0']) delete _expandedKeys['0'];
            else _expandedKeys['0'] = true;

            this.expandedKeys = _expandedKeys;
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <Button @click="toggleApplications" label="Toggle Applications" />
        <TreeTable v-model:expandedKeys="expandedKeys" :value="nodes">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const expandedKeys = ref({});
const toggleApplications = () => {
    let _expandedKeys = { ...expandedKeys.value };

    if (_expandedKeys['0']) delete _expandedKeys['0'];
    else _expandedKeys['0'] = true;

    expandedKeys.value = _expandedKeys;
}
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)},methods:{toggleApplications(){let l={...this.expandedKeys};l[0]?delete l[0]:l[0]=!0,this.expandedKeys=l}}},re=e("p",null,[n("Expansion state is controlled with "),e("i",null,"expandedKeys"),n(" property. The "),e("i",null,"expandedKeys"),n(" should be an object whose keys refer to the node key and values represent the expanded state e.g. "),e("i",null,"{'0-0': true}"),n(".")],-1),ce={class:"card"};function pe(l,a,m,u,t,f){const c=T,i=r("Button"),d=r("Column"),p=r("TreeTable"),g=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[re]),_:1},16),e("div",ce,[o(i,{onClick:f.toggleApplications,label:"Toggle Applications"},null,8,["onClick"]),o(p,{expandedKeys:t.expandedKeys,"onUpdate:expandedKeys":a[0]||(a[0]=w=>t.expandedKeys=w),value:t.nodes,class:"mt-4"},{default:s(()=>[o(d,{field:"name",header:"Name",expander:""}),o(d,{field:"size",header:"Size"}),o(d,{field:"type",header:"Type"})]),_:1},8,["expandedKeys","value"])]),o(g,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const me=b(se,[["render",pe]]),ue={data(){return{nodes:null,columns:null,code:{basic:`<TreeTable :value="nodes">
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" :expander="col.expander"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" :expander="col.expander"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            columns: null
        }
    },
    created() {
        this.columns = [
            { field: 'name', header: 'Name', expander: true },
            { field: 'size', header: 'Size' },
            { field: 'type', header: 'Type' }
        ];
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" :expander="col.expander"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const columns = ref([
    { field: 'name', header: 'Name', expander: true },
    { field: 'size', header: 'Size' },
    { field: 'type', header: 'Type' }
]);
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
...
`}}},created(){this.columns=[{field:"name",header:"Name",expander:!0},{field:"size",header:"Size"},{field:"type",header:"Type"}]},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},he=e("p",null,"Columns can be created programmatically.",-1),fe={class:"card"};function be(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[he]),_:1},16),e("div",fe,[o(d,{value:t.nodes},{default:s(()=>[(h(!0),y(v,null,M(t.columns,g=>(h(),k(i,{key:g.field,field:g.field,header:g.header,expander:g.expander},null,8,["field","header","expander"]))),128))]),_:1},8,["value"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const ye=b(ue,[["render",be]]),ve={data(){return{nodes:null,filters:{},filterMode:{label:"Lenient",value:"lenient"},filterOptions:[{label:"Lenient",value:"lenient"},{label:"Strict",value:"strict"}],code:{basic:`<SelectButton v-model="filterMode" optionLabel="label" dataKey="label" :options="filterOptions" />
<TreeTable :value="nodes" :filters="filters" :filterMode="filterMode.value">
    <template #header>
        <div class="text-right">
            <div class="p-input-icon-left">
                <i class="pi pi-search"></i>
                <InputText v-model="filters['global']" placeholder="Global Search" />
            </div>
        </div>
    </template>
    <Column field="name" header="Name" expander>
        <template #filter>
            <InputText v-model="filters['name']" type="text" class="p-column-filter" placeholder="Filter by name" />
        </template>
    </Column>
    <Column field="size" header="Size">
        <template #filter>
            <InputText v-model="filters['size']" type="text" class="p-column-filter" placeholder="Filter by size" />
        </template>
    </Column>
    <Column field="type" header="Type">
        <template #filter>
            <InputText v-model="filters['type']" type="text" class="p-column-filter" placeholder="Filter by type" />
        </template>
    </Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <div class="flex justify-content-center mb-4">
            <SelectButton v-model="filterMode" optionLabel="label" dataKey="label" :options="filterOptions" />
        </div>
        <TreeTable :value="nodes" :filters="filters" :filterMode="filterMode.value">
            <template #header>
                <div class="text-right">
                    <div class="p-input-icon-left">
                        <i class="pi pi-search"></i>
                        <InputText v-model="filters['global']" placeholder="Global Search" />
                    </div>
                </div>
            </template>
            <Column field="name" header="Name" expander>
                <template #filter>
                    <InputText v-model="filters['name']" type="text" class="p-column-filter" placeholder="Filter by name" />
                </template>
            </Column>
            <Column field="size" header="Size">
                <template #filter>
                    <InputText v-model="filters['size']" type="text" class="p-column-filter" placeholder="Filter by size" />
                </template>
            </Column>
            <Column field="type" header="Type">
                <template #filter>
                    <InputText v-model="filters['type']" type="text" class="p-column-filter" placeholder="Filter by type" />
                </template>
            </Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            filters: {},
            filterMode: { label: 'Lenient', value: 'lenient' },
            filterOptions: [
                { label: 'Lenient', value: 'lenient' },
                { label: 'Strict', value: 'strict' }
            ]
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex justify-content-center mb-4">
            <SelectButton v-model="filterMode" optionLabel="label" dataKey="label" :options="filterOptions" />
        </div>
        <TreeTable :value="nodes" :filters="filters" :filterMode="filterMode.value">
            <template #header>
                <div class="text-right">
                    <div class="p-input-icon-left">
                        <i class="pi pi-search"></i>
                        <InputText v-model="filters['global']" placeholder="Global Search" />
                    </div>
                </div>
            </template>
            <Column field="name" header="Name" expander>
                <template #filter>
                    <InputText v-model="filters['name']" type="text" class="p-column-filter" placeholder="Filter by name" />
                </template>
            </Column>
            <Column field="size" header="Size">
                <template #filter>
                    <InputText v-model="filters['size']" type="text" class="p-column-filter" placeholder="Filter by size" />
                </template>
            </Column>
            <Column field="type" header="Type">
                <template #filter>
                    <InputText v-model="filters['type']" type="text" class="p-column-filter" placeholder="Filter by type" />
                </template>
            </Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const filters = ref({});
const filterMode = ref({ label: 'Lenient', value: 'lenient' });
const filterOptions = ref([
    { label: 'Lenient', value: 'lenient' },
    { label: 'Strict', value: 'strict' }
]);
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},Te=e("p",null,[n(" Filtering is enabled by adding the "),e("i",null,"filter"),n(" property to a Column. The "),e("i",null,"filterMode"),n(" specifies the filtering strategy, in "),e("i",null,"lenient"),n(" mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in "),e("i",null,"strict"),n(" mode when the query matches a node, filtering continues on all descendants. A general filled called "),e("i",null,"globalFilter"),n(" is also provided to search all columns that support filtering. ")],-1),_e={class:"card"},xe={class:"flex justify-content-center mb-4"},Ce={class:"text-right"},ge={class:"p-input-icon-left"},Se=e("i",{class:"pi pi-search"},null,-1);function we(l,a,m,u,t,f){const c=T,i=r("SelectButton"),d=r("InputText"),p=r("Column"),g=r("TreeTable"),w=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Te]),_:1},16),e("div",_e,[e("div",xe,[o(i,{modelValue:t.filterMode,"onUpdate:modelValue":a[0]||(a[0]=N=>t.filterMode=N),optionLabel:"label",dataKey:"label",options:t.filterOptions},null,8,["modelValue","options"])]),o(g,{value:t.nodes,filters:t.filters,filterMode:t.filterMode.value},{header:s(()=>[e("div",Ce,[e("div",ge,[Se,o(d,{modelValue:t.filters.global,"onUpdate:modelValue":a[1]||(a[1]=N=>t.filters.global=N),placeholder:"Global Search"},null,8,["modelValue"])])])]),default:s(()=>[o(p,{field:"name",header:"Name",expander:""},{filter:s(()=>[o(d,{modelValue:t.filters.name,"onUpdate:modelValue":a[2]||(a[2]=N=>t.filters.name=N),type:"text",class:"p-column-filter",placeholder:"Filter by name"},null,8,["modelValue"])]),_:1}),o(p,{field:"size",header:"Size"},{filter:s(()=>[o(d,{modelValue:t.filters.size,"onUpdate:modelValue":a[3]||(a[3]=N=>t.filters.size=N),type:"text",class:"p-column-filter",placeholder:"Filter by size"},null,8,["modelValue"])]),_:1}),o(p,{field:"type",header:"Type"},{filter:s(()=>[o(d,{modelValue:t.filters.type,"onUpdate:modelValue":a[4]||(a[4]=N=>t.filters.type=N),type:"text",class:"p-column-filter",placeholder:"Filter by type"},null,8,["modelValue"])]),_:1})]),_:1},8,["value","filters","filterMode"])]),o(w,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const Ne=b(ve,[["render",we]]),ke={data(){return{code:{basic:`import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';`}}}};function ze(l,a,m,u,t,f){const c=T,i=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),null,16),o(i,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const De=b(ke,[["render",ze]]),$e={data(){return{nodes:null,rows:10,loading:!1,totalRecords:0,code:{basic:`<TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
    @nodeExpand="onExpand" @page="onPage" :totalRecords="totalRecords">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
            @nodeExpand="onExpand" @page="onPage" :totalRecords="totalRecords">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            rows: 10,
            loading: false,
            totalRecords: 0
        };
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false;
            this.nodes = this.loadNodes(0, this.rows);
            this.totalRecords = 1000;
        }, 1000);
    },
    methods: {
        onExpand(node) {
            if (!node.children) {
                this.loading = true;

                setTimeout(() => {
                    let lazyNode = { ...node };

                    lazyNode.children = [
                        {
                            data: {
                                name: lazyNode.data.name + ' - 0',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            }
                        },
                        {
                            data: {
                                name: lazyNode.data.name + ' - 1',
                                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                                type: 'File'
                            }
                        }
                    ];

                    let nodes = this.nodes.map((n) => {
                        if (n.key === node.key) {
                            n = lazyNode;
                        }

                        return n;
                    });

                    this.loading = false;
                    this.nodes = nodes;
                }, 250);
            }
        },
        onPage(event) {
            this.loading = true;

            //imitate delay of a backend call
            setTimeout(() => {
                this.loading = false;
                this.nodes = this.loadNodes(event.first, this.rows);
            }, 1000);
        },
        loadNodes(first, rows) {
            let nodes = [];

            for (let i = 0; i < rows; i++) {
                let node = {
                    key: first + i,
                    data: {
                        name: 'Item ' + (first + i),
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'Type ' + (first + i)
                    },
                    leaf: false
                };

                nodes.push(node);
            }

            return nodes;
        }
    }
};
<\/script>`,composition:`<template>
    <div>
        <TreeTable :value="nodes" :lazy="true" :paginator="true" :rows="rows" :loading="loading"
            @nodeExpand="onExpand" @page="onPage" :totalRecords="totalRecords">
            <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>                   
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
    loading.value = true;

    setTimeout(() => {
        loading.value = false;
        nodes.value = loadNodes(0, rows.value);
        totalRecords.value = 1000;
    }, 1000);
});

const nodes = ref();
const rows = ref(10);
const loading = ref(false);
const totalRecords = ref(0);
const onExpand = (node) => {
    if (!node.children) {
        loading.value = true;

        setTimeout(() => {
            let lazyNode = {...node};

            lazyNode.children = [
                {
                    data: {
                        name: lazyNode.data.name + ' - 0',
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'File'
                    },
                },
                {
                    data: {
                        name: lazyNode.data.name + ' - 1',
                        size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                        type: 'File'
                    }
                }
            ];

            let newNodes = nodes.value.map(n => {
                if (n.key === node.key) {
                    n = lazyNode;
                }

                return n;
            });

            loading.value = false;
            nodes.value = newNodes;
        }, 250);
    }
};
const onPage = (event) => {
    loading.value = true;

    //imitate delay of a backend call
    setTimeout(() => {
        loading.value = false;
        nodes.value = loadNodes(event.first, rows.value);
    }, 1000);
};
const loadNodes = (first, rows) => {
    let nodes = [];

    for(let i = 0; i < rows; i++) {
        let node = {
            key: (first + i),
            data: {
                name: 'Item ' + (first + i),
                size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                type: 'Type ' + (first + i)
            },
            leaf: false
        };

        nodes.push(node);
    }

    return nodes;
};
<\/script>`}}},mounted(){this.loading=!0,setTimeout(()=>{this.loading=!1,this.nodes=this.loadNodes(0,this.rows),this.totalRecords=1e3},1e3)},methods:{onExpand(l){l.children||(this.loading=!0,setTimeout(()=>{let a={...l};a.children=[{data:{name:a.data.name+" - 0",size:Math.floor(Math.random()*1e3)+1+"kb",type:"File"}},{data:{name:a.data.name+" - 1",size:Math.floor(Math.random()*1e3)+1+"kb",type:"File"}}];let m=this.nodes.map(u=>(u.key===l.key&&(u=a),u));this.loading=!1,this.nodes=m},250))},onPage(l){this.loading=!0,setTimeout(()=>{this.loading=!1,this.nodes=this.loadNodes(l.first,this.rows)},1e3)},loadNodes(l,a){let m=[];for(let u=0;u<a;u++){let t={key:l+u,data:{name:"Item "+(l+u),size:Math.floor(Math.random()*1e3)+1+"kb",type:"Type "+(l+u)},leaf:!1};m.push(t)}return m}}},Me=e("p",null,[n(" Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime "),e("i",null,"paging"),n(", "),e("i",null,"sorting"),n(" and "),e("i",null,"filtering"),n(" occurs. Sample below imitates lazy loading data from a remote datasource using an in-memory list and timeouts to mimic network connection. ")],-1),Ke=e("p",null,[n(" Enabling the "),e("i",null,"lazy"),n(" property and assigning the logical number of rows to "),e("i",null,"totalRecords"),n(" by doing a projection query are the key elements of the implementation so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they are not present on page, only the records that are displayed on the current page exist. ")],-1),Fe=e("p",null,[n("In addition, only the root elements should be loaded, children can be loaded on demand using "),e("i",null,"nodeExpand"),n(" callback.")],-1),Ie={class:"card"};function Re(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Me,Ke,Fe]),_:1},16),e("div",Ie,[o(d,{value:t.nodes,lazy:!0,paginator:!0,rows:t.rows,loading:t.loading,onNodeExpand:f.onExpand,onPage:f.onPage,totalRecords:t.totalRecords},{default:s(()=>[o(i,{field:"name",header:"Name",expander:""}),o(i,{field:"size",header:"Size"}),o(i,{field:"type",header:"Type"})]),_:1},8,["value","rows","loading","onNodeExpand","onPage","totalRecords"])]),o(p,{code:t.code},null,8,["code"])],64)}const Pe=b($e,[["render",Re]]),He={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes" :tableProps="{ style: { minWidth: '650px' } }" style="overflow: auto">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" :tableProps="{ style: { minWidth: '650px' } }" style="overflow: auto">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes" :tableProps="{ style: { minWidth: '650px' } }" style="overflow: auto">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},Ee=e("p",null,[n("A horizontal scrollbar is displayed when parent of the table gets smaller than the defined "),e("i",null,"minWidth"),n(".")],-1),Ve={class:"card"};function Be(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Ee]),_:1},16),e("div",Ve,[o(d,{value:t.nodes,tableProps:{style:{minWidth:"650px"}},style:{overflow:"auto"}},{default:s(()=>[o(i,{field:"name",header:"Name",expander:""}),o(i,{field:"size",header:"Size"}),o(i,{field:"type",header:"Type"})]),_:1},8,["value"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const We=b(He,[["render",Be]]),Le={data(){return{nodes:null,size:{label:"Normal",value:"normal"},sizeOptions:[{label:"Small",value:"small",class:"sm"},{label:"Normal",value:"normal"},{label:"Large",value:"large",class:"lg"}],code:{basic:`<TreeTable :value="nodes" :class="\`p-treetable-\${size.class}\`">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" :class="\`p-treetable-\${size.class}\`">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            size: { label: 'Normal', value: 'normal' },
            sizeOptions: [
                { label: 'Small', value: 'small', class: 'sm' },
                { label: 'Normal', value: 'normal' },
                { label: 'Large', value: 'large', class: 'lg' }
            ]
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes" :class="\`p-treetable-\${size.class}\`">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const size = ref({ label: 'Normal', value: 'normal' });
const sizeOptions = ref([
    { label: 'Small', value: 'small', class: 'sm' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large', class: 'lg' }
]);
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},Ue=e("p",null,"In addition to a regular table, alternatives with alternative sizes are available.",-1),je={class:"card"},Oe={class:"flex justify-content-center mb-4"};function Ae(l,a,m,u,t,f){const c=T,i=r("SelectButton"),d=r("Column"),p=r("TreeTable"),g=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Ue]),_:1},16),e("div",je,[e("div",Oe,[o(i,{modelValue:t.size,"onUpdate:modelValue":a[0]||(a[0]=w=>t.size=w),options:t.sizeOptions,optionLabel:"label",dataKey:"label"},null,8,["modelValue","options"])]),o(p,{value:t.nodes,class:R(`p-treetable-${t.size.class}`)},{default:s(()=>[o(d,{field:"name",header:"Name",expander:""}),o(d,{field:"size",header:"Size"}),o(d,{field:"type",header:"Type"})]),_:1},8,["value","class"])]),o(g,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const qe=b(Le,[["render",Ae]]),Ge={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes">
    <template #header>
        <div class="text-xl font-bold">File Viewer</div>
    </template>
    <Column field="name" header="Name" :expander="true"></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
    <Column headerStyle="width: 10rem">
        <template #body>
            <div class="flex flex-wrap gap-2">
                <Button type="button" icon="pi pi-search" rounded />
                <Button type="button" icon="pi pi-pencil" rounded severity="success" />
            </div>
        </template>
    </Column>
    <template #footer>
        <div class="flex justify-content-start">
            <Button icon="pi pi-refresh" label="Reload" severity="warning" />
        </div>
    </template>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes">
            <template #header>
                <div class="text-xl font-bold">File Viewer</div>
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
            <Column headerStyle="width: 10rem">
                <template #body>
                    <div class="flex flex-wrap gap-2">
                        <Button type="button" icon="pi pi-search" rounded/>
                        <Button type="button" icon="pi pi-pencil" rounded severity="success" />
                    </div>
                </template>
            </Column>
            <template #footer>
                <div class="flex justify-content-start">
                    <Button icon="pi pi-refresh" label="Reload" severity="warning" />
                </div>
            </template>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes">
            <template #header>
                <div class="text-xl font-bold">File Viewer</div>
            </template>
            <Column field="name" header="Name" :expander="true"></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
            <Column headerStyle="width: 10rem">
                <template #body>
                    <div class="flex flex-wrap gap-2">
                        <Button type="button" icon="pi pi-search" rounded/>
                        <Button type="button" icon="pi pi-pencil" rounded severity="success" />
                    </div>
                </template>
            </Column>
            <template #footer>
                <div class="flex justify-content-start">
                    <Button icon="pi pi-refresh" label="Reload" severity="warning" />
                </div>
            </template>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},Je=e("p",null,[n("Custom content at "),e("i",null,"header"),n(" and "),e("i",null,"footer"),n(" slots are supported via templating.")],-1),Qe={class:"card"},Xe=e("div",{class:"text-xl font-bold"},"File Viewer",-1),Ye={class:"flex flex-wrap gap-2"},Ze={class:"flex justify-content-start"};function eo(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("Button"),p=r("TreeTable"),g=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Je]),_:1},16),e("div",Qe,[o(p,{value:t.nodes},{header:s(()=>[Xe]),footer:s(()=>[e("div",Ze,[o(d,{icon:"pi pi-refresh",label:"Reload",severity:"warning"})])]),default:s(()=>[o(i,{field:"name",header:"Name",expander:!0}),o(i,{field:"size",header:"Size"}),o(i,{field:"type",header:"Type"}),o(i,{headerStyle:"width: 10rem"},{body:s(()=>[e("div",Ye,[o(d,{type:"button",icon:"pi pi-search",rounded:""}),o(d,{type:"button",icon:"pi pi-pencil",rounded:"",severity:"success"})])]),_:1})]),_:1},8,["value"])]),o(g,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const oo=b(Ge,[["render",eo]]),to={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes" :paginator="true" :rows="5" :rowsPerPageOptions="[5, 10, 25]">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" :paginator="true" :rows="5" :rowsPerPageOptions="[5, 10, 25]">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
        }
    },
    created() {
        let files = [];

        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        this.nodes = files;
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes" :paginator="true" :rows="5" :rowsPerPageOptions="[5, 10, 25]">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const nodes = ref();

let files = [];
for (let i = 0; i < 50; i++) {
    let node = {
        key: i,
        data: {
            name: 'Item ' + i,
            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
            type: 'Type ' + i
        },
        children: [
            {
                key: i + ' - 0',
                data: {
                    name: 'Item ' + i + ' - 0',
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                }
            }
        ]
    };

    files.push(node);
}

nodes.value = files;
    
<\/script>`}}},mounted(){let l=[];for(let a=0;a<50;a++){let m={key:a,data:{name:"Item "+a,size:Math.floor(Math.random()*1e3)+1+"kb",type:"Type "+a},children:[{key:a+" - 0",data:{name:"Item "+a+" - 0",size:Math.floor(Math.random()*1e3)+1+"kb",type:"Type "+a}}]};l.push(m)}this.nodes=l}},lo=e("p",null,[n("Pagination is enabled by adding "),e("i",null,"paginator"),n(" property and defining "),e("i",null,"rows"),n(" per page.")],-1),no={class:"card"};function io(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[lo]),_:1},16),e("div",no,[o(d,{value:t.nodes,paginator:!0,rows:5,rowsPerPageOptions:[5,10,25]},{default:s(()=>[o(i,{field:"name",header:"Name",expander:""}),o(i,{field:"size",header:"Size"}),o(i,{field:"type",header:"Type"})]),_:1},8,["value"])]),o(p,{code:t.code},null,8,["code"])],64)}const ao=b(to,[["render",io]]),so={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes" :paginator="true" :rows="5" :rowsPerPageOptions="[5, 10, 25, 50]"
    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{first} to {last} of {totalRecords}">
    <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" text />
    </template>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
    <template #paginatorend>
        <Button type="button" icon="pi pi-download" text />
    </template>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" :paginator="true" :rows="5" :rowsPerPageOptions="[5, 10, 25, 50]"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}">
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" text />
            </template>
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
            <template #paginatorend>
                <Button type="button" icon="pi pi-download" text />
            </template>
        </TreeTable>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
        }
    },
    created() {
        let files = [];

        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        this.nodes = files;
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes" :paginator="true" :rows="5" :rowsPerPageOptions="[5, 10, 25, 50]"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}">
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" text />
            </template>
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
            <template #paginatorend>
                <Button type="button" icon="pi pi-download" text />
            </template>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const nodes = ref();

let files = [];
for (let i = 0; i < 50; i++) {
    let node = {
        key: i,
        data: {
            name: 'Item ' + i,
            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
            type: 'Type ' + i
        },
        children: [
            {
                key: i + ' - 0',
                data: {
                    name: 'Item ' + i + ' - 0',
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                }
            }
        ]
    };

    files.push(node);
}

nodes.value = files;
    
<\/script>`}}},mounted(){let l=[];for(let a=0;a<50;a++){let m={key:a,data:{name:"Item "+a,size:Math.floor(Math.random()*1e3)+1+"kb",type:"Type "+a},children:[{key:a+" - 0",data:{name:"Item "+a+" - 0",size:Math.floor(Math.random()*1e3)+1+"kb",type:"Type "+a}}]};l.push(m)}this.nodes=l}},ro=e("i",null,"paginatorTemplate",-1),co={class:"card"};function po(l,a,m,u,t,f){const c=z,i=T,d=r("Button"),p=r("Column"),g=r("TreeTable"),w=C;return h(),y(v,null,[o(i,_(x(l.$attrs)),{default:s(()=>[e("p",null,[n(" Paginator UI is customized using the "),ro,n(" property. Each element can also be customized further with your own UI to replace the default one, refer to the "),o(c,{to:"/paginator"},{default:s(()=>[n("Paginator")]),_:1}),n(" component for more information about the advanced customization options. ")])]),_:1},16),e("div",co,[o(g,{value:t.nodes,paginator:!0,rows:5,rowsPerPageOptions:[5,10,25,50],paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} to {last} of {totalRecords}"},{paginatorstart:s(()=>[o(d,{type:"button",icon:"pi pi-refresh",text:""})]),paginatorend:s(()=>[o(d,{type:"button",icon:"pi pi-download",text:""})]),default:s(()=>[o(p,{field:"name",header:"Name",expander:""}),o(p,{field:"size",header:"Size"}),o(p,{field:"type",header:"Type"})]),_:1},8,["value"])]),o(w,{code:t.code},null,8,["code"])],64)}const mo=b(so,[["render",po]]),uo={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes" sortMode="multiple">
    <Column
        field="name"
        header="Name"
        sortable
        expander
        :pt="{
            sortBadge: { class: 'text-orange-400' }
        }"
    />
    <Column
        field="size"
        header="Size"
        sortable
        :pt="{
            sortBadge: { class: 'text-orange-400' }
        }"
    />
    <Column
        field="type"
        header="Type"
        sortable
        :pt="{
            sortBadge: { class: 'text-orange-400' }
        }"
    />
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" sortMode="multiple">
            <Column
                field="name"
                header="Name"
                sortable
                expander
                :pt="{
                    sortBadge: { class: 'text-orange-400' }
                }"
            />
            <Column
                field="size"
                header="Size"
                sortable
                :pt="{
                    sortBadge: { class: 'text-orange-400' }
                }"
            />
            <Column
                field="type"
                header="Type"
                sortable
                :pt="{
                    sortBadge: { class: 'text-orange-400' }
                }"
            />
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes" sortMode="multiple">
            <Column
                field="name"
                header="Name"
                sortable
                expander
                :pt="{
                    sortBadge: { class: 'text-orange-400' }
                }"
            />
            <Column
                field="size"
                header="Size"
                sortable
                :pt="{
                    sortBadge: { class: 'text-orange-400' }
                }"
            />
            <Column
                field="type"
                header="Type"
                sortable
                :pt="{
                    sortBadge: { class: 'text-orange-400' }
                }"
            />
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},ho={class:"card"};function fo(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),null,16),e("div",ho,[o(d,{value:t.nodes,sortMode:"multiple"},{default:s(()=>[o(i,{field:"name",header:"Name",sortable:"",expander:"",pt:{sortBadge:{class:"text-orange-400"}}}),o(i,{field:"size",header:"Size",sortable:"",pt:{sortBadge:{class:"text-orange-400"}}}),o(i,{field:"type",header:"Type",sortable:"",pt:{sortBadge:{class:"text-orange-400"}}})]),_:1},8,["value"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const bo=b(uo,[["render",fo]]),yo={},vo=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/wireframe-placeholder.jpg"})],-1);function To(l,a){const m=T;return h(),y(v,null,[o(m,_(x(l.$attrs)),{default:s(()=>[e("p",null,P(l.$attrs.description),1)]),_:1},16),vo],64)}const _o=b(yo,[["render",To]]),xo={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:_o},{id:"pt.doc.treetable",label:"TreeTable PT Options",component:D,data:$("TreeTable")},{id:"pt.doc.column",label:"Column PT Options",component:D,data:$("Column")},{id:"pt.demo",label:"Demo",component:bo}]}}},Co={class:"doc-main"},go=e("div",{class:"doc-intro"},[e("h1",null,"TreeTable Pass Through")],-1);function So(l,a,m,u,t,f){const c=K,i=F;return h(),y(v,null,[e("div",Co,[go,o(c,{docs:t.docs},null,8,["docs"])]),o(i,{docs:t.docs},null,8,["docs"])],64)}const wo=b(xo,[["render",So]]),No={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand" showGridlines :tableProps="{ style: { minWidth: '50rem' } }">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand" showGridlines :tableProps="{ style: { minWidth: '50rem' } }">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand" showGridlines :tableProps="{ style: { minWidth: '50rem' } }">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},ko=e("p",null,[n("Setting "),e("i",null,"columnResizeMode"),n(" as "),e("i",null,"expand"),n(" changes the table width as well.")],-1),zo={class:"card"};function Do(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[ko]),_:1},16),e("div",zo,[o(d,{value:t.nodes,resizableColumns:!0,columnResizeMode:"expand",showGridlines:"",tableProps:{style:{minWidth:"50rem"}}},{default:s(()=>[o(i,{field:"name",header:"Name",expander:""}),o(i,{field:"size",header:"Size"}),o(i,{field:"type",header:"Type"})]),_:1},8,["value"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const $o=b(No,[["render",Do]]),Mo={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes" :resizableColumns="true" showGridlines :tableProps="{ style: { minWidth: '50rem' } }">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" :resizableColumns="true" showGridlines :tableProps="{ style: { minWidth: '50rem' } }">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes" :resizableColumns="true" showGridlines :tableProps="{ style: { minWidth: '50rem' } }">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},Ko=e("p",null,[n(" Columns can be resized with drag and drop when "),e("i",null,"resizableColumns"),n(" is enabled. Default resize mode is "),e("i",null,"fit"),n(" that does not change the overall table width. ")],-1),Fo={class:"card"};function Io(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Ko]),_:1},16),e("div",Fo,[o(d,{value:t.nodes,resizableColumns:!0,showGridlines:"",tableProps:{style:{minWidth:"50rem"}}},{default:s(()=>[o(i,{field:"name",header:"Name",expander:""}),o(i,{field:"size",header:"Size"}),o(i,{field:"type",header:"Type"})]),_:1},8,["value"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const Ro=b(Mo,[["render",Io]]),Po={data(){return{nodes:null,dialogVisible:!1,code:{basic:`<Button label="Show" icon="pi pi-external-link" @click="dialogVisible = true" />
<Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
    <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
        <Column field="name" header="Name" :expander="true" style="min-width: 200px"></Column>
        <Column field="size" header="Size" style="min-width: 200px"></Column>
        <Column field="type" header="Type" style="min-width: 200px"></Column>
    </TreeTable>
    <template #footer>
        <Button label="Ok" icon="pi pi-check" @click="dialogVisible = false" />
    </template>
</Dialog>`,options:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="dialogVisible = true" />
        <Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
            <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
                <Column field="name" header="Name" :expander="true" style="min-width: 200px"></Column>
                <Column field="size" header="Size" style="min-width: 200px"></Column>
                <Column field="type" header="Type" style="min-width: 200px"></Column>
            </TreeTable>
            <template #footer>
                <Button label="Ok" icon="pi pi-check" @click="dialogVisible = false" />
            </template>
        </Dialog>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            dialogVisible: false
        };
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="dialogVisible = true" />
        <Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
            <TreeTable :value="nodes" :scrollable="true" scrollHeight="flex">
                <Column field="name" header="Name" :expander="true" style="min-width: 200px"></Column>
                <Column field="size" header="Size" style="min-width: 200px"></Column>
                <Column field="type" header="Type" style="min-width: 200px"></Column>
            </TreeTable>
            <template #footer>
                <Button label="Ok" icon="pi pi-check" @click="dialogVisible = false" />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
});

const nodes = ref();
const dialogVisible = ref(false);

<\/script>`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},Ho=e("p",null," Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes. ",-1),Eo={class:"card flex justify-content-center"};function Vo(l,a,m,u,t,f){const c=T,i=r("Button"),d=r("Column"),p=r("TreeTable"),g=r("Dialog"),w=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Ho]),_:1},16),e("div",Eo,[o(i,{label:"Show",icon:"pi pi-external-link",onClick:a[0]||(a[0]=N=>t.dialogVisible=!0)}),o(g,{visible:t.dialogVisible,"onUpdate:visible":a[2]||(a[2]=N=>t.dialogVisible=N),header:"Flex Scroll",style:{width:"75vw"},maximizable:"",modal:"",contentStyle:{height:"300px"}},{footer:s(()=>[o(i,{label:"Ok",icon:"pi pi-check",onClick:a[1]||(a[1]=N=>t.dialogVisible=!1)})]),default:s(()=>[o(p,{value:t.nodes,scrollable:!0,scrollHeight:"flex"},{default:s(()=>[o(d,{field:"name",header:"Name",expander:!0,style:{"min-width":"200px"}}),o(d,{field:"size",header:"Size",style:{"min-width":"200px"}}),o(d,{field:"type",header:"Type",style:{"min-width":"200px"}})]),_:1},8,["value"])]),_:1},8,["visible"])]),o(w,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const Bo=b(Po,[["render",Vo]]),Wo={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes" scrollable scrollHeight="200px" scrollDirection="both">
    <Column field="name" header="Name" expander frozen style="width: 250px; height: 57px"></Column>
    <Column field="size" header="Size" style="width: 250px; height: 57px"></Column>
    <Column field="type" header="Type 2" style="width: 250px; height: 57px"></Column>
    <Column field="size" header="Size 2" style="width: 250px; height: 57px"></Column>
    <Column field="type" header="Type 3" style="width: 250px; height: 57px"></Column>
    <Column field="size" header="Size 3" style="width: 250px; height: 57px"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" scrollable scrollHeight="200px" scrollDirection="both">
            <Column field="name" header="Name" expander frozen style="width: 250px; height: 57px"></Column>
            <Column field="size" header="Size" style="width: 250px; height: 57px"></Column>
            <Column field="type" header="Type 2" style="width: 250px; height: 57px"></Column>
            <Column field="size" header="Size 2" style="width: 250px; height: 57px"></Column>
            <Column field="type" header="Type 3" style="width: 250px; height: 57px"></Column>
            <Column field="size" header="Size 3" style="width: 250px; height: 57px"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes" scrollable scrollHeight="200px" scrollDirection="both">
            <Column field="name" header="Name" expander frozen style="width: 250px; height: 57px"></Column>
            <Column field="size" header="Size" style="width: 250px; height: 57px"></Column>
            <Column field="type" header="Type 2" style="width: 250px; height: 57px"></Column>
            <Column field="size" header="Size 2" style="width: 250px; height: 57px"></Column>
            <Column field="type" header="Type 3" style="width: 250px; height: 57px"></Column>
            <Column field="size" header="Size 3" style="width: 250px; height: 57px"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},Lo=e("p",null,[n("A column can be fixed during horizontal scrolling by enabling the "),e("i",null,"frozen"),n(" property on a Column. The location is defined with the "),e("i",null,"alignFrozen"),n(" that can be "),e("i",null,"left"),n(" or "),e("i",null,"right"),n(".")],-1),Uo={class:"card"};function jo(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Lo]),_:1},16),e("div",Uo,[o(d,{value:t.nodes,scrollable:"",scrollHeight:"200px",scrollDirection:"both"},{default:s(()=>[o(i,{field:"name",header:"Name",expander:"",frozen:"",style:{width:"250px",height:"57px"}}),o(i,{field:"size",header:"Size",style:{width:"250px",height:"57px"}}),o(i,{field:"type",header:"Type 2",style:{width:"250px",height:"57px"}}),o(i,{field:"size",header:"Size 2",style:{width:"250px",height:"57px"}}),o(i,{field:"type",header:"Type 3",style:{width:"250px",height:"57px"}}),o(i,{field:"size",header:"Size 3",style:{width:"250px",height:"57px"}})]),_:1},8,["value"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const Oo=b(Wo,[["render",jo]]),Ao={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes" scrollable scrollHeight="200px" scrollDirection="both">
    <Column field="name" header="Name" expander style="width: 250px"></Column>
    <Column field="size" header="Size" style="width: 250px"></Column>
    <Column field="type" header="Type 2" style="width: 250px"></Column>
    <Column field="size" header="Size 2" style="width: 250px"></Column>
    <Column field="type" header="Type 3" style="width: 250px"></Column>
    <Column field="size" header="Size 3" style="width: 250px"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" scrollable scrollHeight="200px" scrollDirection="both">
            <Column field="name" header="Name" expander style="width: 250px"></Column>
            <Column field="size" header="Size" style="width: 250px"></Column>
            <Column field="type" header="Type 2" style="width: 250px"></Column>
            <Column field="size" header="Size 2" style="width: 250px"></Column>
            <Column field="type" header="Type 3" style="width: 250px"></Column>
            <Column field="size" header="Size 3" style="width: 250px"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes" scrollable scrollHeight="200px" scrollDirection="both">
            <Column field="name" header="Name" expander style="width: 250px"></Column>
            <Column field="size" header="Size" style="width: 250px"></Column>
            <Column field="type" header="Type 2" style="width: 250px"></Column>
            <Column field="size" header="Size 2" style="width: 250px"></Column>
            <Column field="type" header="Type 3" style="width: 250px"></Column>
            <Column field="size" header="Size 3" style="width: 250px"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},qo=e("p",null,"Horizontal scrolling is enabled when the total width of columns exceeds table width.",-1),Go={class:"card"};function Jo(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[qo]),_:1},16),e("div",Go,[o(d,{value:t.nodes,scrollable:"",scrollHeight:"200px",scrollDirection:"both"},{default:s(()=>[o(i,{field:"name",header:"Name",expander:"",style:{width:"250px"}}),o(i,{field:"size",header:"Size",style:{width:"250px"}}),o(i,{field:"type",header:"Type 2",style:{width:"250px"}}),o(i,{field:"size",header:"Size 2",style:{width:"250px"}}),o(i,{field:"type",header:"Type 3",style:{width:"250px"}}),o(i,{field:"size",header:"Size 3",style:{width:"250px"}})]),_:1},8,["value"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const Qo=b(Ao,[["render",Jo]]),Xo={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes" scrollable scrollHeight="200px">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" scrollable scrollHeight="200px">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes" scrollable scrollHeight="200px">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},Yo=e("p",null,[n("Adding "),e("i",null,"scrollable"),n(" property along with a "),e("i",null,"scrollHeight"),n(" for the data viewport enables vertical scrolling with fixed headers.")],-1),Zo={class:"card"};function et(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Yo]),_:1},16),e("div",Zo,[o(d,{value:t.nodes,scrollable:"",scrollHeight:"200px"},{default:s(()=>[o(i,{field:"name",header:"Name",expander:""}),o(i,{field:"size",header:"Size"}),o(i,{field:"type",header:"Type"})]),_:1},8,["value"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const ot=b(Xo,[["render",et]]),tt={data(){return{nodes:null,selectedKey:null,introCode:{basic:`
{
    '0-0': {
        partialChecked: false,
        checked: true
    }
}`},code:{basic:`<TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedKey: null
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const selectedKey = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},lt=e("p",null,[n("Selection of multiple nodes via checkboxes is enabled by configuring "),e("i",null,"selectionMode"),n(" as "),e("i",null,"checkbox"),n(".")],-1),nt=e("p",null,[n("In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has "),e("i",null,"checked"),n(" and "),e("i",null,"partialChecked"),n(" properties to represent the checked state of a node.")],-1),it={class:"card"};function at(l,a,m,u,t,f){const c=T,i=C,d=r("Column"),p=r("TreeTable");return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[lt,nt]),_:1},16),o(i,{code:t.introCode,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),e("div",it,[o(p,{selectionKeys:t.selectedKey,"onUpdate:selectionKeys":a[0]||(a[0]=g=>t.selectedKey=g),value:t.nodes,selectionMode:"checkbox"},{default:s(()=>[o(d,{field:"name",header:"Name",expander:""}),o(d,{field:"size",header:"Size"}),o(d,{field:"type",header:"Type"})]),_:1},8,["selectionKeys","value"])]),o(i,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const dt=b(tt,[["render",at]]),st={data(){return{nodes:null,selectedKey:null,metaKey:!0,code:{basic:`<InputSwitch v-model="metaKey" inputId="input-metakey" />

<TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" :metaKeySelection="metaKey">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <div class="flex justify-content-center align-items-center mb-4 gap-2">
            <InputSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" :metaKeySelection="metaKey">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedKey: null,
            metaKey: true
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex justify-content-center align-items-center mb-4 gap-2">
            <InputSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" :metaKeySelection="metaKey">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const selectedKey = ref();
const metaKey = ref(true);
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},rt=e("p",null,[n(" More than one node is selectable by setting "),e("i",null,"selectionMode"),n(" to "),e("i",null,"multiple"),n(". By default in multiple selection mode, metaKey press (e.g. "),e("i",null,"⌘"),n(") is necessary to add to existing selections however this can be configured with disabling the "),e("i",null,"metaKeySelection"),n(" property. Note that in touch enabled devices, TreeTable always ignores metaKey. ")],-1),ct=e("p",null,"In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.",-1),pt={class:"card"},mt={class:"flex justify-content-center align-items-center mb-4 gap-2"},ut=e("label",{for:"input-metakey"},"MetaKey",-1);function ht(l,a,m,u,t,f){const c=T,i=r("InputSwitch"),d=r("Column"),p=r("TreeTable"),g=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[rt,ct]),_:1},16),e("div",pt,[e("div",mt,[o(i,{modelValue:t.metaKey,"onUpdate:modelValue":a[0]||(a[0]=w=>t.metaKey=w),inputId:"input-metakey"},null,8,["modelValue"]),ut]),o(p,{selectionKeys:t.selectedKey,"onUpdate:selectionKeys":a[1]||(a[1]=w=>t.selectedKey=w),value:t.nodes,selectionMode:"multiple",metaKeySelection:t.metaKey},{default:s(()=>[o(d,{field:"name",header:"Name",expander:""}),o(d,{field:"size",header:"Size"}),o(d,{field:"type",header:"Type"})]),_:1},8,["selectionKeys","value","metaKeySelection"])]),o(g,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const ft=b(st,[["render",ht]]),bt={data(){return{nodes:null,selectedKey:null,code:{basic:`<TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
    @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
        <Toast />
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedKey: null
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({ severity: 'success', summary: 'Node Selected', detail: node.data.name, life: 3000 });
        },
        onNodeUnselect(node) {
            this.$toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.data.name, life: 3000 });
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast'
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const selectedKey = ref();
const toast = useToast();
const onNodeSelect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Selected', detail: node.data.name, life: 3000 });
};
const onNodeUnselect = (node) => {
    toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.data.name, life: 3000 });
};
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)},methods:{onNodeSelect(l){this.$toast.add({severity:"success",summary:"Node Selected",detail:l.data.name,life:3e3})},onNodeUnselect(l){this.$toast.add({severity:"warn",summary:"Node Unselected",detail:l.data.name,life:3e3})}}},yt=e("p",null,[n("TreeTable provides "),e("i",null,"nodeSelect"),n(" and "),e("i",null,"nodeUnselect"),n(" events to listen selection events.")],-1),vt={class:"card"};function Tt(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[yt]),_:1},16),e("div",vt,[o(d,{selectionKeys:t.selectedKey,"onUpdate:selectionKeys":a[0]||(a[0]=g=>t.selectedKey=g),value:t.nodes,selectionMode:"single",onNodeSelect:f.onNodeSelect,onNodeUnselect:f.onNodeUnselect,metaKeySelection:!1},{default:s(()=>[o(i,{field:"name",header:"Name",expander:""}),o(i,{field:"size",header:"Size"}),o(i,{field:"type",header:"Type"})]),_:1},8,["selectionKeys","value","onNodeSelect","onNodeUnselect"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const _t=b(bt,[["render",Tt]]),xt={data(){return{nodes:null,selectedKey:null,metaKey:!0,code:{basic:`<InputSwitch v-model="metaKey" inputId="input-metakey" />

<TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="metaKey">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <div class="flex justify-content-center align-items-center mb-4 gap-2">
            <InputSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="metaKey">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            selectedKey: null,
            metaKey: true
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex justify-content-center align-items-center mb-4 gap-2">
            <InputSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <TreeTable v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="metaKey">
            <Column field="name" header="Name" expander></Column>
            <Column field="size" header="Size"></Column>
            <Column field="type" header="Type"></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
const selectedKey = ref();
const metaKey = ref(true);
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},Ct=e("p",null,[n("Single node selection is configured by setting "),e("i",null,"selectionMode"),n(" as "),e("i",null,"single"),n(" along with "),e("i",null,"selectionKeys"),n(" property to manage the selection value binding.")],-1),gt=e("p",null,[n(" By default, metaKey press (e.g. "),e("i",null,"⌘"),n(") is necessary to unselect a node however this can be configured with disabling the "),e("i",null,"metaKeySelection"),n(" property. In touch enabled devices this option has no effect and behavior is same as setting it to false. ")],-1),St={class:"card"},wt={class:"flex justify-content-center align-items-center mb-4 gap-2"},Nt=e("label",{for:"input-metakey"},"MetaKey",-1);function kt(l,a,m,u,t,f){const c=T,i=r("InputSwitch"),d=r("Column"),p=r("TreeTable"),g=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Ct,gt]),_:1},16),e("div",St,[e("div",wt,[o(i,{modelValue:t.metaKey,"onUpdate:modelValue":a[0]||(a[0]=w=>t.metaKey=w),inputId:"input-metakey"},null,8,["modelValue"]),Nt]),o(p,{selectionKeys:t.selectedKey,"onUpdate:selectionKeys":a[1]||(a[1]=w=>t.selectedKey=w),value:t.nodes,selectionMode:"single",metaKeySelection:t.metaKey},{default:s(()=>[o(d,{field:"name",header:"Name",expander:""}),o(d,{field:"size",header:"Size"}),o(d,{field:"type",header:"Type"})]),_:1},8,["selectionKeys","value","metaKeySelection"])]),o(g,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const zt=b(xt,[["render",kt]]),Dt={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes" sortMode="multiple">
    <Column field="name" header="Name" sortable expander></Column>
    <Column field="size" header="Size" sortable></Column>
    <Column field="type" header="Type" sortable></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" sortMode="multiple">
            <Column field="name" header="Name" sortable expander></Column>
            <Column field="size" header="Size" sortable></Column>
            <Column field="type" header="Type" sortable></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes" sortMode="multiple">
            <Column field="name" header="Name" sortable expander></Column>
            <Column field="size" header="Size" sortable></Column>
            <Column field="type" header="Type" sortable></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},$t=e("p",null,[n("Multiple columns can be sorted by defining "),e("i",null,"sortMode"),n(" as "),e("i",null,"multiple"),n(". This mode requires metaKey (e.g. "),e("i",null,"⌘"),n(") to be pressed when clicking a header.")],-1),Mt={class:"card"};function Kt(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[$t]),_:1},16),e("div",Mt,[o(d,{value:t.nodes,sortMode:"multiple"},{default:s(()=>[o(i,{field:"name",header:"Name",sortable:"",expander:""}),o(i,{field:"size",header:"Size",sortable:""}),o(i,{field:"type",header:"Type",sortable:""})]),_:1},8,["value"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const Ft=b(Dt,[["render",Kt]]),It={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes" sortMode="multiple" removableSort>
    <Column field="name" header="Name" sortable expander></Column>
    <Column field="size" header="Size" sortable></Column>
    <Column field="type" header="Type" sortable></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes" sortMode="multiple" removableSort>
            <Column field="name" header="Name" sortable expander></Column>
            <Column field="size" header="Size" sortable></Column>
            <Column field="type" header="Type" sortable></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes" sortMode="multiple" removableSort>
            <Column field="name" header="Name" sortable expander></Column>
            <Column field="size" header="Size" sortable></Column>
            <Column field="type" header="Type" sortable></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},Rt=e("p",null,[n("When "),e("i",null,"removableSort"),n(" is present, the third click removes the sorting from the column.")],-1),Pt={class:"card"};function Ht(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Rt]),_:1},16),e("div",Pt,[o(d,{value:t.nodes,sortMode:"multiple",removableSort:""},{default:s(()=>[o(i,{field:"name",header:"Name",sortable:"",expander:""}),o(i,{field:"size",header:"Size",sortable:""}),o(i,{field:"type",header:"Type",sortable:""})]),_:1},8,["value"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const Et=b(It,[["render",Ht]]),Vt={data(){return{nodes:null,code:{basic:`<TreeTable :value="nodes">
    <Column field="name" header="Name" sortable expander></Column>
    <Column field="size" header="Size" sortable></Column>
    <Column field="type" header="Type" sortable></Column>
</TreeTable>`,options:`<template>
    <div class="card">
        <TreeTable :value="nodes">
            <Column field="name" header="Name" sortable expander></Column>
            <Column field="size" header="Size" sortable></Column>
            <Column field="type" header="Type" sortable></Column>
        </TreeTable>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
        }
    },
    mounted() {
        NodeService.getTreeTableNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TreeTable :value="nodes">
            <Column field="name" header="Name" sortable expander></Column>
            <Column field="size" header="Size" sortable></Column>
            <Column field="type" header="Type" sortable></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
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
...
`}}},mounted(){S.getTreeTableNodes().then(l=>this.nodes=l)}},Bt=e("p",null,[n("Sorting on a column is enabled by adding the "),e("i",null,"sortable"),n(" property.")],-1),Wt={class:"card"};function Lt(l,a,m,u,t,f){const c=T,i=r("Column"),d=r("TreeTable"),p=C;return h(),y(v,null,[o(c,_(x(l.$attrs)),{default:s(()=>[Bt]),_:1},16),e("div",Wt,[o(d,{value:t.nodes},{default:s(()=>[o(i,{field:"name",header:"Name",sortable:"",expander:""}),o(i,{field:"size",header:"Size",sortable:""}),o(i,{field:"type",header:"Type",sortable:""})]),_:1},8,["value"])]),o(p,{code:t.code,service:["NodeService"]},null,8,["code"])],64)}const Ut=b(Vt,[["render",Lt]]),jt={},Ot=e("p",null,"List of class names used in the styled mode.",-1),At=H('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-treetable</td><td>Container element.</td></tr><tr><td>p-treetable-scrollable</td><td>Container element when table is scrollable.</td></tr><tr><td>p-treetable-header</td><td>Header section.</td></tr><tr><td>p-treetable-footer</td><td>Footer section.</td></tr><tr><td>p-treetable-wrapper</td><td>Wrapper of table element.</td></tr><tr><td>p-treetable-table</td><td>Table element.</td></tr><tr><td>p-treetable-thead</td><td>Table thead element.</td></tr><tr><td>p-treetable-tbody</td><td>Table tbody element.</td></tr><tr><td>p-treetable-tfoot</td><td>Table tfoot element.</td></tr><tr><td>p-column-title</td><td>Title of a column.</td></tr><tr><td>p-sortable-column</td><td>Sortable column header.</td></tr><tr><td>p-frozen-column</td><td>Frozen column header.</td></tr><tr><td>p-treetable-toggler</td><td>Toggle element for a row.</td></tr><tr><td>p-treetable-emptymessage</td><td>Cell containing the empty message.</td></tr></tbody></table></div>',1);function qt(l,a){const m=T;return h(),y(v,null,[o(m,_(x(l.$attrs)),{default:s(()=>[Ot]),_:1},16),At],64)}const Gt=b(jt,[["render",qt]]),Jt={data(){return{code1:{basic:`
export default {
    treetable: {
        root: ({ props }) => ({
            class: [
                'relative',
                {
                    'flex flex-col h-full': props.scrollHeight === 'flex'
                }
            ]
        }),
        loadingoverlay: {
            class: [
                'fixed w-full h-full t-0 l-0 bg-gray-100/40',
                'transition duration-200',
                'absolute flex items-center justify-center z-2',
                'dark:bg-gray-950/40' // Dark Mode
            ]
        },
        loadingicon: 'w-8 h-8',
        header: {
            class: [
                'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-gray-300 p-4 font-bold',
                'dark:bg-gray-900 dark:text-white/70 dark:border-blue-900/40' // Dark Mode
            ]
        },
        wrapper: ({ props }) => ({
            class: [
                {
                    'relative overflow-auto': props.scrollable,
                    'overflow-x-auto': props.resizableColumns
                }
            ]
        }),
        footer: {
            class: [
                'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-gray-300 p-4 font-bold',
                'dark:bg-gray-900 dark:text-white/70 dark:border-blue-900/40' // Dark Mode
            ]
        },
        table: 'border-collapse table-fixed w-full',
        thead: ({ props }) => ({
            class: [
                {
                    'block sticky top-0 z-[1]': props.scrollable
                }
            ]
        }),
        tbody: ({ props }) => ({
            class: [
                {
                    block: props.scrollable
                }
            ]
        }),
        tfoot: ({ props }) => ({
            class: [
                {
                    block: props.scrollable
                }
            ]
        }),
        headerrow: ({ props }) => ({
            class: [
                {
                    'flex flex-nowrap w-full': props.scrollable
                }
            ]
        }),
        row: ({ context }) => ({
            class: [
                'transition duration-200',
                'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
                context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80' : 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80',
                {
                    'hover:bg-gray-300/20 hover:text-gray-600 dark:hover:bg-gray-950': context.selectable && !context.selected, // Hover
                    'flex flex-nowrap w-full': context.scrollable
                }
            ]
        }),
        column: {
            headercell: ({ context }) => ({
                class: [
                    'text-left border-gray-300 border font-bold',
                    'transition duration-200',
                    context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', //Dark Mode
                    {
                        'flex flex-1 items-center': context.scrollable,
                        'flex-initial shrink-0': context.scrollable && context.scrollDirection === 'both' && !context.frozen,
                        'sticky z-[1]': context.scrollable && context.scrollDirection === 'both' && context.frozen,
                        'border-x-0 border-l-0 border-t-0': !context.showGridlines,
                        'overflow-hidden relative bg-clip-padding': context.resizable && !context.frozen
                    }
                ]
            }),
            bodycell: ({ context }) => ({
                class: [
                    'text-left border-gray-300 border',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:border-blue-900/40', //Dark Mode
                    {
                        'cursor-pointer': context.selectable,
                        'flex flex-1 items-center': context.scrollable,
                        'flex-initial shrink-0': context.scrollable && context.scrollDirection === 'both' && !context.frozen,
                        sticky: context.scrollable && context.scrollDirection === 'both' && context.frozen,
                        'border-x-0 border-l-0': !context.showGridlines
                    }
                ]
            }),
            rowtoggler: ({ context }) => ({
                class: [
                    'relative inline-flex items-center justify-center align-center cursor-pointer select-none overflow-hidden bg-transparent',
                    'w-8 h-8 border-0 rounded mr-0.5',
                    context.selected ? 'text-blue-700' : 'text-gray-500',
                    'dark:text-white/70' //Dark Mode
                ]
            }),
            sorticon: ({ context }) => ({
                class: ['ml-2', context.sorted ? 'text-blue-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70']
            }),
            sortbadge: {
                class: [
                    'h-[1.143rem] min-w-[1.143rem] leading-[1.143rem] text-blue-700 bg-blue-50 ml-2 rounded-[50%]',
                    'dark:text-white/80 dark:bg-blue-500/40' // Dark Mode
                ]
            },
            columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
            checkboxwrapper: {
                class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6 mr-2']
            },
            checkbox: ({ context }) => ({
                class: [
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled
                    }
                ]
            }),
            checkboxicon: ({ context }) => ({
                class: [
                    'w-4 h-4 transition-all duration-200 text-base dark:text-gray-900',
                    {
                        'text-white': context.checked
                    }
                ]
            })
        },
        resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300'
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <TreeTable :value="nodes">
            <Column field="name" header="Name" sortable expander></Column>
            <Column field="size" header="Size" sortable></Column>
            <Column field="type" header="Type" sortable></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
<\/script>`}}}},Qt=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Xt(l,a,m,u,t,f){const c=z,i=C,d=T;return h(),k(d,_(x(l.$attrs)),{default:s(()=>[e("p",null,[n(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(c,{to:"/tailwind"},{default:s(()=>[n("Tailwind Customization")]),_:1}),n(" section for an example. ")]),o(i,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Qt,o(i,{code:t.code2,service:["NodeService"],embedded:""},null,8,["code"])]),_:1},16)}const Yt=b(Jt,[["render",Xt]]),Zt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Gt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Yt}]}]}}},el={class:"doc-main"},ol=e("div",{class:"doc-intro"},[e("h1",null,"TreeTable Theming")],-1);function tl(l,a,m,u,t,f){const c=K,i=F;return h(),y(v,null,[e("div",el,[ol,o(c,{docs:t.docs},null,8,["docs"])]),o(i,{docs:t.docs},null,8,["docs"])],64)}const ll=b(Zt,[["render",tl]]),nl={data(){return{docs:[{id:"import",label:"Import",component:De},{id:"basic",label:"Basic",component:oe},{id:"dynamic_columns",label:"Dynamic Columns",component:ye},{id:"controlled",label:"Controlled",component:me},{id:"template",label:"Template",component:oo},{id:"size",label:"Size",component:qe},{id:"paginator",label:"Paginator",children:[{id:"paginator_basic",label:"Basic",component:ao},{id:"paginator_template",label:"Template",component:mo}]},{id:"sort",label:"Sort",children:[{id:"single_sort",label:"Single Column",component:Ut},{id:"multiple_sort",label:"Multiple Columns",component:Ft},{id:"removable_sort",label:"Removable Sort",component:Et}]},{id:"filter",label:"Filter",component:Ne},{id:"selection",label:"Selection",children:[{id:"single_row_selection",label:"Single",component:zt},{id:"multiple_rows_selection",label:"Multiple",component:ft},{id:"checkbox_row_selection",label:"Checkbox",component:dt},{id:"row_selection_events",label:"Events",component:_t}]},{id:"lazy_load",label:"Lazy Load",component:Pe},{id:"scroll",label:"Scroll",children:[{id:"vertical_scroll",label:"Vertical",component:ot},{id:"flex_scroll",label:"Flexible",component:Bo},{id:"horizontal_scroll",label:"Horizontal",component:Qo},{id:"frozen_columns",label:"Frozen Columns",component:Oo}]},{id:"column_resize",label:"Column Resize",children:[{id:"resize_fitmode",label:"Fit Mode",component:Ro},{id:"resize_expandmode",label:"Expand Mode",component:$o}]},{id:"column_toggle",label:"Column Toggle",component:de},{id:"responsive",label:"Responsive",component:We},{id:"accessibility",label:"Accessibility",component:Q}],ptComponent:wo,themingDoc:ll}}};function il(l,a,m,u,t,f){const c=E;return h(),k(c,{title:"Vue TreeTable Component",header:"TreeTable",description:"TreeTable is used to display hierarchical data in tabular format.",componentDocs:t.docs,apiDocs:["TreeTable","Column"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const cl=b(nl,[["render",il]]);export{cl as default};
