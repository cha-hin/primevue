import{_ as u,o as m,e as $,w as f,m as N,b as e,f as n,h as y,j as x,c as v,a as l,n as _,g,F as b,p as w,t as S,D as M,k as K,l as D,v as j,x as E}from"./entry.68beb385.js";import{N as k}from"./NodeService.f4763055.js";import{g as I}from"./PTHelper.11558b27.js";const A={},U=e("h3",null,"Screen Reader",-1),P=e("p",null,[n(" Value to describe the component can either be provided with "),e("i",null,"aria-labelledby"),n(" or "),e("i",null,"aria-label"),n(" props. The root list element has a "),e("i",null,"tree"),n(" role whereas each list item has a "),e("i",null,"treeitem"),n(" role along with "),e("i",null,"aria-label"),n(", "),e("i",null,"aria-selected"),n(" and "),e("i",null,"aria-expanded"),n(" attributes. In checkbox selection, "),e("i",null,"aria-checked"),n(" is used instead of "),e("i",null,"aria-selected"),n(". The container element of a treenode has the "),e("i",null,"group"),n(" role. Checkbox and toggle icons are hidden from screen readers as their parent element with "),e("i",null,"treeitem"),n(" role and attributes are used instead for readers and keyboard support. The "),e("i",null,"aria-setsize"),n(", "),e("i",null,"aria-posinset"),n(" and "),e("i",null,"aria-level"),n(" attributes are calculated implicitly and added to each treeitem. ")],-1),F=e("h3",null,"Keyboard Support",-1),R=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null," Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable element in the page tab sequence. ")]),e("tr",null,[e("td",null,[e("i",null,"shift"),n(" + "),e("i",null,"tab")]),e("td",null," Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable element in the page tab sequence. ")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Selects the focused treenode.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Selects the focused treenode.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next treenode.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous treenode.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"If node is closed, opens the node otherwise moves focus to the first child node.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"If node is open, closes the node otherwise moves focus to the parent node.")])])])],-1);function V(t,s){const a=y;return m(),$(a,N({id:"accessibility",label:"Accessibility"},t.$attrs),{default:f(()=>[U,P,F,R]),_:1},16)}const B=u(A,[["render",V]]),W={data(){return{nodes:null,code:{basic:'<Tree :value="nodes" class="w-full md:w-30rem"></Tree>',options:`<template>
    <div class="card flex justify-content-center">
        <Tree :value="nodes" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    } 
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Tree :value="nodes" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);

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
...`}}},mounted(){k.getTreeNodes().then(t=>this.nodes=t)}},z=e("p",null,[n("Tree component requires an array of TreeNode objects as its "),e("i",null,"value"),n(".")],-1),H={class:"card flex justify-content-center"};function q(t,s,a,p,o,c){const i=y,d=x("Tree"),r=w;return m(),v(b,null,[l(i,_(g(t.$attrs)),{default:f(()=>[z]),_:1},16),e("div",H,[l(d,{value:o.nodes,class:"w-full md:w-30rem"},null,8,["value"])]),l(r,N({code:o.code},t.$attrs,{service:["NodeService"]}),null,16,["code"])],64)}const L=u(W,[["render",q]]),O={data(){return{nodes:null,expandedKeys:{},code:{basic:`<div class="flex flex-wrap gap-2 mb-4">
    <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
    <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
</div>
<Tree v-model:expandedKeys="expandedKeys" :value="nodes" class="w-full md:w-30rem"></Tree>`,options:`<template>
    <div class="card flex flex-column align-items-cente">
        <div class="flex flex-wrap gap-2 mb-4">
            <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
        <Tree v-model:expandedKeys="expandedKeys" :value="nodes" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    },
    methods: {
        expandAll() {
            for (let node of this.nodes) {
                this.expandNode(node);
            }

            this.expandedKeys = { ...this.expandedKeys };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            if (node.children && node.children.length) {
                this.expandedKeys[node.key] = true;

                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-column align-items-cente">
        <div class="flex flex-wrap gap-2 mb-4">
            <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
        <Tree v-model:expandedKeys="expandedKeys" :value="nodes" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);
const expandedKeys = ref({});

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const expandAll = () => {
    for (let node of nodes.value) {
        expandNode(node);
    }

    expandedKeys.value = { ...expandedKeys.value };
};

const collapseAll = () => {
    expandedKeys.value = {};
};

const expandNode = (node) => {
    if (node.children && node.children.length) {
        expandedKeys.value[node.key] = true;

        for (let child of node.children) {
            expandNode(child);
        }
    }
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
...`}}},mounted(){k.getTreeNodes().then(t=>this.nodes=t)},methods:{expandAll(){for(let t of this.nodes)this.expandNode(t);this.expandedKeys={...this.expandedKeys}},collapseAll(){this.expandedKeys={}},expandNode(t){if(t.children&&t.children.length){this.expandedKeys[t.key]=!0;for(let s of t.children)this.expandNode(s)}}}},Q=e("p",null,[n(" Tree state can be controlled programmatically with the "),e("i",null,"expandedKeys"),n(" property that defines the keys that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean. Note that "),e("i",null,"expandedKeys"),n(" also supports two-way binding with the v-model directive. ")],-1),G={class:"card flex flex-column align-items-center"},J={class:"flex flex-wrap gap-2 mb-4"};function X(t,s,a,p,o,c){const i=y,d=x("Button"),r=x("Tree"),h=w;return m(),v(b,null,[l(i,_(g(t.$attrs)),{default:f(()=>[Q]),_:1},16),e("div",G,[e("div",J,[l(d,{type:"button",icon:"pi pi-plus",label:"Expand All",onClick:c.expandAll},null,8,["onClick"]),l(d,{type:"button",icon:"pi pi-minus",label:"Collapse All",onClick:c.collapseAll},null,8,["onClick"])]),l(r,{expandedKeys:o.expandedKeys,"onUpdate:expandedKeys":s[0]||(s[0]=T=>o.expandedKeys=T),value:o.nodes,class:"w-full md:w-30rem"},null,8,["expandedKeys","value"])]),l(h,N({code:o.code},t.$attrs,{service:["NodeService"]}),null,16,["code"])],64)}const Y=u(O,[["render",X]]),Z={data(){return{nodes:null,selectedKey:null,code:{basic:`<Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false" class="w-full md:w-30rem"
    @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" @nodeExpand="onNodeExpand" @nodeCollapse="onNodeCollapse" class="w-full md:w-30rem"></Tree>`,options:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" @nodeExpand="onNodeExpand" @nodeCollapse="onNodeCollapse" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
        },
        onNodeUnselect(node) {
            this.$toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.label, life: 3000 });
        },
        onNodeExpand(node) {
            this.$toast.add({ severity: 'info', summary: 'Node Expanded', detail: node.label, life: 3000 });
        },
        onNodeCollapse(node) {
            this.$toast.add({ severity: 'error', summary: 'Node Collapsed', detail: node.label, life: 3000 });
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" :metaKeySelection="false"
            @nodeSelect="onNodeSelect" @nodeUnselect="onNodeUnselect" @nodeExpand="onNodeExpand" @nodeCollapse="onNodeCollapse" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';
import { useToast } from "primevue/usetoast";

const nodes = ref(null);
const selectedKey = ref(null);
const toast = useToast();

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const onNodeSelect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
};

const onNodeUnselect = (node) => {
    toast.add({ severity: 'warn', summary: 'Node Unselected', detail: node.label, life: 3000 });
};

const onNodeExpand = (node) => {
    toast.add({ severity: 'info', summary: 'Node Expanded', detail: node.label, life: 3000 });
};

const onNodeCollapse (node) => {
    toast.add({ severity: 'error', summary: 'Node Collapsed', detail: node.label, life: 3000 });
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
...`}}},mounted(){k.getTreeNodes().then(t=>this.nodes=t)},methods:{onNodeSelect(t){this.$toast.add({severity:"success",summary:"Node Selected",detail:t.label,life:3e3})},onNodeUnselect(t){this.$toast.add({severity:"warn",summary:"Node Unselected",detail:t.label,life:3e3})},onNodeExpand(t){this.$toast.add({severity:"info",summary:"Node Expanded",detail:t.label,life:3e3})},onNodeCollapse(t){this.$toast.add({severity:"error",summary:"Node Collapsed",detail:t.label,life:3e3})}}},ee=e("p",null,"An event is provided for each type of user interaction such as expand, collapse and selection.",-1),te={class:"card flex justify-content-center"};function oe(t,s,a,p,o,c){const i=y,d=x("Tree"),r=w;return m(),v(b,null,[l(i,_(g(t.$attrs)),{default:f(()=>[ee]),_:1},16),e("div",te,[l(d,{selectionKeys:o.selectedKey,"onUpdate:selectionKeys":s[0]||(s[0]=h=>o.selectedKey=h),value:o.nodes,selectionMode:"single",metaKeySelection:!1,onNodeSelect:c.onNodeSelect,onNodeUnselect:c.onNodeUnselect,onNodeExpand:c.onNodeExpand,onNodeCollapse:c.onNodeCollapse,class:"w-full md:w-30rem"},null,8,["selectionKeys","value","onNodeSelect","onNodeUnselect","onNodeExpand","onNodeCollapse"])]),l(r,N({code:o.code},t.$attrs,{service:["NodeService"]}),null,16,["code"])],64)}const ne=u(Z,[["render",oe]]),le={data(){return{nodes:null,expandedKeys:{},code:{basic:`<Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-30rem"></Tree>
<Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-30rem"></Tree>`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-5">
        <Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-30rem"></Tree>
        <Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';
export default {
    data() {
        return {
            nodes: null,
            expandedKeys: {}
        };
    },
    mounted() {
        NodeService.getTreeNodes().then(data => this.nodes = data);
    },
    methods: {
        expandAll() {
            for (let node of this.nodes) {
                this.expandNode(node);
            }

            this.expandedKeys = { ...this.expandedKeys };
        },
        collapseAll() {
            this.expandedKeys = {};
        },
        expandNode(node) {
            this.expandedKeys[node.key] = true;

            if (node.children && node.children.length) {
                for (let child of node.children) {
                    this.expandNode(child);
                }
            }
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-5">
        <Tree :value="nodes" :filter="true" filterMode="lenient" class="w-full md:w-30rem"></Tree>
        <Tree :value="nodes" :filter="true" filterMode="strict" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then(data => nodes.value = data);
});

const expandedKeys = ref({});

const expandAll = () => {
    for (let node of nodes.value) {
        expandNode(node);
    }

    expandedKeys.value = { ...expandedKeys.value };
};

const collapseAll = () => {
    expandedKeys.value = {};
};

const expandNode = (node) => {
    expandedKeys.value[node.key] = true;

    if (node.children && node.children.length) {
        for (let child of node.children) {
            expandNode(child);
        }
    }
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
...`}}},mounted(){k.getTreeNodes().then(t=>this.nodes=t)}},se=e("p",null,[n(" Filtering is enabled by adding the "),e("i",null,"filter"),n(" property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define "),e("i",null,"filterBy"),n(" property. In addition "),e("i",null,"filterMode"),n(" specifies the filtering strategy. In "),e("i",null,"lenient"),n(" mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in "),e("i",null,"strict"),n(" mode when the query matches a node, filtering continues on all descendants. ")],-1),de={class:"card flex flex-wrap justify-content-center gap-5"};function ie(t,s,a,p,o,c){const i=y,d=x("Tree"),r=w;return m(),v(b,null,[l(i,_(g(t.$attrs)),{default:f(()=>[se]),_:1},16),e("div",de,[l(d,{value:o.nodes,filter:!0,filterMode:"lenient",class:"w-full md:w-30rem"},null,8,["value"]),l(d,{value:o.nodes,filter:!0,filterMode:"strict",class:"w-full md:w-30rem"},null,8,["value"])]),l(r,N({code:o.code},t.$attrs,{service:["NodeService"]}),null,16,["code"])],64)}const ae=u(le,[["render",ie]]),ce={data(){return{code:{basic:"import Tree from 'primevue/tree';"}}}};function re(t,s,a,p,o,c){const i=y,d=w;return m(),v(b,null,[l(i,_(g(t.$attrs)),null,16),l(d,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const pe=u(ce,[["render",re]]),ue={data(){return{nodes:null,loading:!1,code:{basic:'<Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading" class="w-full md:w-30rem"></Tree>',options:`<template>
    <div class="card flex justify-content-center">
        <Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: null,
            loading: false
        };
    },
    mounted() {
        this.loading = true;

        setTimeout(() => {
            this.nodes = this.initateNodes();
            this.loading = false;
        }, 2000);
    },
    methods: {
        onNodeExpand(node) {
            if (!node.children) {
                this.loading = true;

                setTimeout(() => {
                    let _node = { ...node };

                    _node.children = [];

                    for (let i = 0; i < 3; i++) {
                        _node.children.push({
                            key: node.key + '-' + i,
                            label: 'Lazy ' + node.label + '-' + i
                        });
                    }

                    let _nodes = { ...this.nodes };
                    _nodes[parseInt(node.key, 10)] = _node;

                    this.nodes = _nodes;
                    this.loading = false;
                }, 500);
            }
        },
        initateNodes() {
            return [
                {
                    key: '0',
                    label: 'Node 0',
                    leaf: false
                },
                {
                    key: '1',
                    label: 'Node 1',
                    leaf: false
                },
                {
                    key: '2',
                    label: 'Node 2',
                    leaf: false
                }
            ];
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Tree :value="nodes" @node-expand="onNodeExpand" :loading="loading" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const nodes = ref(null);
const loading = ref(false);

onMounted(() => {
    loading.value = true;

    setTimeout(() => {
        nodes.value = initateNodes();
        loading.value = false;
    }, 2000);
});

const onNodeExpand = (node) => {
    if (!node.children) {
        loading.value = true;

        setTimeout(() => {
            let _node = { ...node };

            _node.children = [];

            for (let i = 0; i < 3; i++) {
                _node.children.push({
                    key: node.key + '-' + i,
                    label: 'Lazy ' + node.label + '-' + i
                });
            }

            let _nodes = { ...nodes.value };
            _nodes[parseInt(node.key, 10)] = _node;

            nodes.value = _nodes;
            loading.value = false;
        }, 500);
    }
};

const initateNodes = () => {
    return [
        {
            key: '0',
            label: 'Node 0',
            leaf: false
        },
        {
            key: '1',
            label: 'Node 1',
            leaf: false
        },
        {
            key: '2',
            label: 'Node 2',
            leaf: false
        }
    ];
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
...`}}},mounted(){this.loading=!0,setTimeout(()=>{this.nodes=this.initateNodes(),this.loading=!1},2e3)},methods:{onNodeExpand(t){t.children||(this.loading=!0,setTimeout(()=>{let s={...t};s.children=[];for(let p=0;p<3;p++)s.children.push({key:t.key+"-"+p,label:"Lazy "+t.label+"-"+p});let a={...this.nodes};a[parseInt(t.key,10)]=s,this.nodes=a,this.loading=!1},500))},initateNodes(){return[{key:"0",label:"Node 0",leaf:!1},{key:"1",label:"Node 1",leaf:!1},{key:"2",label:"Node 2",leaf:!1}]}}},me=e("p",null,[n("Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using "),e("i",null,"loading"),n(" property and "),e("i",null,"node-expand"),n(" method.")],-1),fe={class:"card flex justify-content-center"};function he(t,s,a,p,o,c){const i=y,d=x("Tree"),r=w;return m(),v(b,null,[l(i,_(g(t.$attrs)),{default:f(()=>[me]),_:1},16),e("div",fe,[l(d,{value:o.nodes,onNodeExpand:c.onNodeExpand,loading:o.loading,class:"w-full md:w-30rem"},null,8,["value","onNodeExpand","loading"])]),l(r,{code:o.code},null,8,["code"])],64)}const ye=u(ue,[["render",he]]),ve={data(){return{nodes:[{key:"0",label:"Introduction",children:[{key:"0-0",label:"What is Vue.js?",data:"https://vuejs.org/guide/introduction.html#what-is-vue",type:"url"},{key:"0-1",label:"Quick Start",data:"https://vuejs.org/guide/quick-start.html#quick-start",type:"url"},{key:"0-2",label:"Creating a Vue Application",data:"https://vuejs.org/guide/essentials/application.html#creating-a-vue-application",type:"url"},{key:"0-3",label:"Conditionals Rendering",data:"https://vuejs.org/guide/essentials/conditional.html#conditional-rendering",type:"url"}]},{key:"1",label:"Components In-Depth",children:[{key:"1-0",label:"Component Registration",data:"https://vuejs.org/guide/components/registration.html#component-registration",type:"url"},{key:"1-1",label:"Props",data:"https://vuejs.org/guide/components/props.html#props",type:"url"},{key:"1-2",label:"Components Events",data:"https://vuejs.org/guide/components/events.html#component-events",type:"url"},{key:"1-3",label:"Slots",data:"https://vuejs.org/guide/components/slots.html#slots",type:"url"}]}],code:{basic:`<Tree :value="nodes" class="w-full md:w-30rem">
    <template #default="slotProps">
        <b>{{ slotProps.node.label }}</b>
    </template>
    <template #url="slotProps">
        <a :href="slotProps.node.data">{{ slotProps.node.label }}</a>
    </template>
</Tree>`,options:`<template>
    <div class="card flex justify-content-center">
        <Tree :value="nodes" class="w-full md:w-30rem">
            <template #default="slotProps">
                <b>{{ slotProps.node.label }}</b>
            </template>
            <template #url="slotProps">
                <a :href="slotProps.node.data">{{ slotProps.node.label }}</a>
            </template>
        </Tree>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nodes: [
                {
                    key: '0',
                    label: 'Introduction',
                    children: [
                        { key: '0-0', label: 'What is Vue.js?', data: 'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url' },
                        { key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url' },
                        { key: '0-2', label: 'Creating a Vue Application', data: 'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type: 'url' },
                        { key: '0-3', label: 'Conditionals Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url' }
                    ]
                },
                {
                    key: '1',
                    label: 'Components In-Depth',
                    children: [
                        { key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url' },
                        { key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url' },
                        { key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url' },
                        { key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url' }
                    ]
                }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Tree :value="nodes" class="w-full md:w-30rem">
            <template #default="slotProps">
                <b>{{ slotProps.node.label }}</b>
            </template>
            <template #url="slotProps">
                <a :href="slotProps.node.data">{{ slotProps.node.label }}</a>
            </template>
        </Tree>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const nodes = ref([
    {
        key: '0',
        label: 'Introduction',
        children: [
            { key: '0-0', label: 'What is Vue.js?', data: 'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url' },
            { key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url' },
            { key: '0-2', label: 'Creating a Vue Application', data: 'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type: 'url' },
                { key: '0-3', label: 'Conditionals Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url' }
        ]
    },
    {
        key: '1',
        label: 'Components In-Depth',
        children: [
            { key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url' },
            { key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url' },
            { key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url' },
            { key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url' }
        ]
    }
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
...`}}}},be=e("p",null,"Tree is used to display hierarchical data.",-1),_e={class:"card flex justify-content-center"},ge=["href"];function xe(t,s,a,p,o,c){const i=y,d=x("Tree"),r=w;return m(),v(b,null,[l(i,_(g(t.$attrs)),{default:f(()=>[be]),_:1},16),e("div",_e,[l(d,{value:o.nodes,class:"w-full md:w-30rem"},{default:f(h=>[e("b",null,S(h.node.label),1)]),url:f(h=>[e("a",{href:h.node.data},S(h.node.label),9,ge)]),_:1},8,["value"])]),l(r,{code:o.code},null,8,["code"])],64)}const we=u(ve,[["render",xe]]),Ne={data(){return{nodes:null,code:{basic:`<Tree
    :value="nodes"
    :pt="{
        root: { class: 'w-full md:w-30rem' },
        content: ({ props, state, context }) => ({
            class: context.expanded ? 'bg-blue-100' : 'undefined'
        })
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Tree
            :value="nodes"
            :pt="{
                root: { class: 'w-full md:w-30rem' },
                content: ({ props, state, context }) => ({
                    class: context.expanded ? 'bg-blue-100' : 'undefined'
                })
            }"
        />
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    } 
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Tree
            :value="nodes"
            :pt="{
                root: { class: 'w-full md:w-30rem' },
                content: ({ props, state, context }) => ({
                    class: context.expanded ? 'bg-blue-100' : 'undefined'
                })
            }"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);

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
...`}}},mounted(){k.getTreeNodes().then(t=>this.nodes=t)}},ke={class:"card flex justify-content-center"};function Te(t,s,a,p,o,c){const i=y,d=x("Tree"),r=w;return m(),v(b,null,[l(i,_(g(t.$attrs)),null,16),e("div",ke,[l(d,{value:o.nodes,pt:{root:{class:"w-full md:w-30rem"},content:({props:h,state:T,context:C})=>({class:C.expanded?"bg-blue-100":"undefined"})}},null,8,["value","pt"])]),l(r,N({code:o.code,service:["NodeService"]},t.$attrs),null,16,["code"])],64)}const Se=u(Ne,[["render",Te]]),$e={},Ke=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/tree.jpg"})],-1);function De(t,s){const a=y;return m(),v(b,null,[l(a,_(g(t.$attrs)),{default:f(()=>[e("p",null,S(t.$attrs.description),1)]),_:1},16),Ke],64)}const Ce=u($e,[["render",De]]),Me={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ce},{id:"pt.doc.tree",label:"Tree PT Options",component:M,data:I("Tree")},{id:"pt.demo",label:"Demo",component:Se}]}}},je={class:"doc-main"},Ee=e("div",{class:"doc-intro"},[e("h1",null,"Tree Pass Through")],-1);function Ie(t,s,a,p,o,c){const i=K,d=D;return m(),v(b,null,[e("div",je,[Ee,l(i,{docs:o.docs},null,8,["docs"])]),l(d,{docs:o.docs},null,8,["docs"])],64)}const Ae=u(Me,[["render",Ie]]),Ue={data(){return{nodes:null,selectedKey:null,code:{basic:'<Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox" class="w-full md:w-30rem"></Tree>',options:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
        },
        onNodeUnselect(node) {
            this.$toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="checkbox" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';
import { useToast } from "primevue/usetoast";

const nodes = ref(null);
const selectedKey = ref(null);
const toast = useToast();

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const onNodeSelect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
};

const onNodeUnselect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
};
<\/script>`}}},mounted(){k.getTreeNodes().then(t=>this.nodes=t)},methods:{onNodeSelect(t){this.$toast.add({severity:"success",summary:"Node Selected",detail:t.label,life:3e3})},onNodeUnselect(t){this.$toast.add({severity:"success",summary:"Node Unselected",detail:t.label,life:3e3})}}},Pe=e("p",null,[n("Selection of multiple nodes via checkboxes is enabled by configuring "),e("i",null,"selectionMode"),n(" as "),e("i",null,"checkbox"),n(".")],-1),Fe=e("p",null,[n(" In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has "),e("i",null,"checked"),n(" and "),e("i",null,"partialChecked"),n(" properties to represent the checked state of a node obje to indicate selection. ")],-1),Re={class:"card flex justify-content-center"};function Ve(t,s,a,p,o,c){const i=y,d=x("Tree"),r=w;return m(),v(b,null,[l(i,_(g(t.$attrs)),{default:f(()=>[Pe,Fe]),_:1},16),e("div",Re,[l(d,{selectionKeys:o.selectedKey,"onUpdate:selectionKeys":s[0]||(s[0]=h=>o.selectedKey=h),value:o.nodes,selectionMode:"checkbox",class:"w-full md:w-30rem"},null,8,["selectionKeys","value"])]),l(r,N({code:o.code},t.$attrs,{service:["NodeService"]}),null,16,["code"])],64)}const Be=u(Ue,[["render",Ve]]),We={data(){return{checked:!1,nodes:null,selectedKey:null,code:{basic:`<Tree v-model:selectionKeys="selectedKey" :value="nodes" class="w-full md:w-30rem" 
    selectionMode="multiple" :metaKeySelection="checked"></Tree>`,options:`<template>
    <div class="card flex flex-column align-items-center justify-content-center">
        <div class="flex align-items-center mb-4 gap-2">
            <InputSwitch v-model="checked" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" class="w-full md:w-30rem" :metaKeySelection="checked"></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            checked: false,
            nodes: null,
            selectedKey: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    }
}
<\/script>`,composition:`<template>
    <div class="card flex flex-column align-items-center justify-content-center">
        <div class="flex align-items-center mb-4 gap-2">
            <InputSwitch v-model="checked" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="multiple" class="w-full md:w-30rem" :metaKeySelection="checked"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);
const selectedKey = ref(null);
const checked = ref(false);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`}}},mounted(){k.getTreeNodes().then(t=>this.nodes=t)}},ze=e("p",null,[n(" More than one node is selectable by setting "),e("i",null,"selectionMode"),n(" to "),e("i",null,"multiple"),n(". By default in multiple selection mode, metaKey press (e.g. "),e("i",null,"⌘"),n(") is necessary to add to existing selections however this can be configured with disabling the "),e("i",null,"metaKeySelection"),n(" property. Note that in touch enabled devices, Tree always ignores metaKey. ")],-1),He=e("p",null,"In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.",-1),qe={class:"card flex flex-column align-items-center justify-content-center"},Le={class:"flex align-items-center mb-4 gap-2"},Oe=e("label",{for:"input-metakey"},"MetaKey",-1);function Qe(t,s,a,p,o,c){const i=y,d=x("InputSwitch"),r=x("Tree"),h=w;return m(),v(b,null,[l(i,_(g(t.$attrs)),{default:f(()=>[ze,He]),_:1},16),e("div",qe,[e("div",Le,[l(d,{modelValue:o.checked,"onUpdate:modelValue":s[0]||(s[0]=T=>o.checked=T),inputId:"input-metakey"},null,8,["modelValue"]),Oe]),l(r,{selectionKeys:o.selectedKey,"onUpdate:selectionKeys":s[1]||(s[1]=T=>o.selectedKey=T),value:o.nodes,selectionMode:"multiple",class:"w-full md:w-30rem",metaKeySelection:o.checked},null,8,["selectionKeys","value","metaKeySelection"])]),l(h,N({code:o.code},t.$attrs,{service:["NodeService"]}),null,16,["code"])],64)}const Ge=u(We,[["render",Qe]]),Je={data(){return{nodes:null,selectedKey:null,code:{basic:'<Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" class="w-full md:w-30rem"></Tree>',options:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script>
import { NodeService } from '@/service/NodeService';

export default {
    data() {
        return {
            nodes: null
        };
    },
    mounted() {
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
    },
    methods: {
        onNodeSelect(node) {
            this.$toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
        },
        onNodeUnselect(node) {
            this.$toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" selectionMode="single" class="w-full md:w-30rem"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';
import { useToast } from "primevue/usetoast";

const nodes = ref(null);
const selectedKey = ref(null);
const toast = useToast();

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});

const onNodeSelect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
};

const onNodeUnselect = (node) => {
    toast.add({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
};
<\/script>`}}},mounted(){k.getTreeNodes().then(t=>this.nodes=t)},methods:{onNodeSelect(t){this.$toast.add({severity:"success",summary:"Node Selected",detail:t.label,life:3e3})},onNodeUnselect(t){this.$toast.add({severity:"success",summary:"Node Unselected",detail:t.label,life:3e3})}}},Xe=e("p",null,[n("Single node selection is configured by setting "),e("i",null,"selectionMode"),n(" as "),e("i",null,"single"),n(" along with "),e("i",null,"selectionKeys"),n(" property to manage the selection value binding.")],-1),Ye={class:"card flex justify-content-center"};function Ze(t,s,a,p,o,c){const i=y,d=x("Tree"),r=w;return m(),v(b,null,[l(i,_(g(t.$attrs)),{default:f(()=>[Xe]),_:1},16),e("div",Ye,[l(d,{selectionKeys:o.selectedKey,"onUpdate:selectionKeys":s[0]||(s[0]=h=>o.selectedKey=h),value:o.nodes,selectionMode:"single",class:"w-full md:w-30rem"},null,8,["selectionKeys","value"])]),l(r,N({code:o.code},t.$attrs,{service:["NodeService"]}),null,16,["code"])],64)}const et=u(Je,[["render",Ze]]),tt={},ot=e("p",null,"List of class names used in the styled mode.",-1),nt=j('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-tree</td><td>Main container element</td></tr><tr><td>p-tree-horizontal</td><td>Main container element in horizontal mode</td></tr><tr><td>p-tree-container</td><td>Container of nodes</td></tr><tr><td>p-treenode</td><td>A treenode element</td></tr><tr><td>p-treenode-content</td><td>Content of a treenode</td></tr><tr><td>p-treenode-toggler</td><td>Toggle element</td></tr><tr><td>p-treenode-toggler-icon</td><td>Toggle icon</td></tr><tr><td>p-treenode-icon</td><td>Icon of a treenode</td></tr><tr><td>p-treenode-label</td><td>Label of a treenode</td></tr><tr><td>p-treenode-children</td><td>Container element for node children</td></tr></tbody></table></div>',1);function lt(t,s){const a=y;return m(),v(b,null,[l(a,_(g(t.$attrs)),{default:f(()=>[ot]),_:1},16),nt],64)}const st=u(tt,[["render",lt]]),dt={data(){return{code1:{basic:`
export default {
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
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Tree :value="nodes" class="w-full md:w-[30rem]"></Tree>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

const nodes = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`}}}},it=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function at(t,s,a,p,o,c){const i=x("PrimeVuePrimeVueNuxtLink"),d=w,r=y;return m(),$(r,_(g(t.$attrs)),{default:f(()=>[e("p",null,[n(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),l(i,{to:"/tailwind"},{default:f(()=>[n("Tailwind Customization")]),_:1}),n(" section for an example. ")]),l(d,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),it,l(d,{code:o.code2,service:["NodeService"],embedded:""},null,8,["code"])]),_:1},16)}const ct=u(dt,[["render",at]]),rt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:st},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ct}]}]}}},pt={class:"doc-main"},ut=e("div",{class:"doc-intro"},[e("h1",null,"Tree Theming")],-1);function mt(t,s,a,p,o,c){const i=K,d=D;return m(),v(b,null,[e("div",pt,[ut,l(i,{docs:o.docs},null,8,["docs"])]),l(d,{docs:o.docs},null,8,["docs"])],64)}const ft=u(rt,[["render",mt]]),ht={data(){return{docs:[{id:"import",label:"Import",component:pe},{id:"basic",label:"Basic",component:L},{id:"controlled",label:"Controlled",component:Y},{id:"selection",label:"Selection",children:[{id:"single",label:"Single",component:et},{id:"multiple",label:"Multiple",component:Ge},{id:"checkbox",label:"Checkbox",component:Be}]},{id:"events",label:"Events",component:ne},{id:"lazy",label:"Lazy",component:ye},{id:"template",label:"Template",component:we},{id:"filter",label:"Filter",component:ae},{id:"accessibility",label:"Accessibility",component:B}],ptComponent:Ae,themingDoc:ft}}};function yt(t,s,a,p,o,c){const i=E;return m(),$(i,{title:"Vue Tree Component",header:"Tree",description:"Tree is used to display hierarchical data.",componentDocs:o.docs,apiDocs:["Tree"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const gt=u(ht,[["render",yt]]);export{gt as default};
