import{_ as M,o as b,e as O,w as r,b as e,f as o,a as t,m as ee,C as te,h as k,j as d,c as _,n as R,g as F,F as x,p as I,t as T,q as K,A as U,I as q,z as N,J as L,s as Q,u as W,r as ae,i as le,D as E,k as H,l as J,E as Y,v as oe,x as re}from"./entry.68beb385.js";import{_ as j}from"./PrimeVueNuxtLink.f51d0c80.js";import{P as B}from"./ProductService.ed9696ca.js";import{C as V}from"./CustomerService.9bb688be.js";import{g as G}from"./PTHelper.11558b27.js";const ne={},ie=e("h3",null,"Screen Reader",-1),se=e("p",null,[o(" DataTable uses a "),e("i",null,"table"),o(" element whose attributes can be extended with the "),e("i",null,"tableProps"),o(" option. This property allows passing aria roles and attributes like "),e("i",null,"aria-label"),o(" and "),e("i",null,"aria-describedby"),o(" to define the table for readers. Default role of the table is "),e("i",null,"table"),o(". Header, body and footer elements use "),e("i",null,"rowgroup"),o(", rows use "),e("i",null,"row"),o(" role, header cells have "),e("i",null,"columnheader"),o(" and body cells use "),e("i",null,"cell"),o(" roles. Sortable headers utilizer "),e("i",null,"aria-sort"),o(' attribute either set to "ascending" or "descending". ')],-1),de=e("i",null,"checkbox",-1),ce=e("i",null,"radiobutton",-1),ue=e("i",null,"aria.selectRow",-1),me=e("i",null,"aria.unselectRow",-1),pe=e("i",null,"selectAll",-1),he=e("i",null,"unselectAll",-1),fe=e("i",null,"aria-selected",-1),ve=e("i",null,"button",-1),ye=e("i",null,"aria-expanded",-1),ge=e("i",null,"aria-controls",-1),Ce=e("i",null,"aria.expandRow",-1),be=e("i",null,"aria.collapseRow",-1),we=e("p",null,[o(" The filter menu button use "),e("i",null,"aria.showFilterMenu"),o(" and "),e("i",null,"aria.hideFilterMenu"),o(" properties as "),e("i",null,"aria-label"),o(" in addition to the "),e("i",null,"aria-haspopup"),o(", "),e("i",null,"aria-expanded"),o(" and "),e("i",null,"aria-controls"),o(" to define the relation between the button and the overlay. Popop menu has "),e("i",null,"dialog"),o(" role with "),e("i",null,"aria-modal"),o(" as focus is kept within the overlay. The operator dropdown use "),e("i",null,"aria.filterOperator"),o(" and filter constraints dropdown use "),e("i",null,"aria.filterConstraint"),o(" properties. Buttons to add rules on the other hand utilize "),e("i",null,"aria.addRule"),o(" and "),e("i",null,"aria.removeRule"),o(" properties. The footer buttons similarly use "),e("i",null,"aria.clear"),o(" and "),e("i",null,"aria.apply"),o(" properties. "),e("i",null,"filterInputProps"),o(" of the Column component can be used to define aria labels for the built-in filter components, if a custom component is used with templating you also may define your own aria labels as well. ")],-1),Se=e("p",null,[o(" Editable cells use custom templating so you need to manage aria roles and attributes manually if required. The row editor controls are button elements with "),e("i",null,"aria.editRow"),o(", "),e("i",null,"aria.cancelEdit"),o(" and "),e("i",null,"aria.saveEdit"),o(" used for the "),e("i",null,"aria-label"),o(". ")],-1),_e=e("h3",null,"Keyboard Support",-1),xe=e("p",null,[o("Any button element inside the DataTable used for cases like filter, row expansion, edit are tabbable and can be used with "),e("i",null,"space"),o(" and "),e("i",null,"enter"),o(" keys.")],-1),Pe=e("h3",null,"Sortable Headers Keyboard Support",-1),Te=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves through the headers.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Sorts the column.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Sorts the column.")])])])],-1),Me=e("h3",null,"Filter Menu Keyboard Support",-1),De=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves through the elements inside the popup.")]),e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Hides the popup.")])])])],-1),ke=e("h3",null,"Selection Keyboard Support",-1),Re=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the first selected row, if there is none then first row receives the focus.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous row.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next row.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Toggles the selected state of the focused row depending on the metaKeySelection setting.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the selected state of the focused row depending on the metaKeySelection setting.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first row.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last row.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),o(" + "),e("i",null,"down arrow")]),e("td",null,"Moves focus to the next row and toggles the selection state.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),o(" + "),e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous row and toggles the selection state.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),o(" + "),e("i",null,"space")]),e("td",null,"Selects the rows between the most recently selected row and the focused row.")]),e("tr",null,[e("td",null,[e("i",null,"control"),o(" + "),e("i",null,"shift"),o(" + "),e("i",null,"home")]),e("td",null,"Selects the focused rows and all the options up to the first one.")]),e("tr",null,[e("td",null,[e("i",null,"control"),o(" + "),e("i",null,"shift"),o(" + "),e("i",null,"end")]),e("td",null,"Selects the focused rows and all the options down to the last one.")]),e("tr",null,[e("td",null,[e("i",null,"control"),o(" + "),e("i",null,"a")]),e("td",null,"Selects all rows.")])])])],-1);function Fe(a,i){const h=te,S=j,l=k;return b(),O(l,ee({id:"accessibility",label:"Accessibility"},a.$attrs),{default:r(()=>[ie,se,e("p",null,[o(" Built-in checkbox and radiobutton components for row selection use "),de,o(" and "),ce,o(". The label to describe them is retrieved from the "),ue,o(" and "),me,o(" properties of the "),t(h,{to:"/configuration/#locale"},{default:r(()=>[o("locale")]),_:1}),o(" API. Similarly header checkbox uses "),pe,o(" and "),he,o(" keys. When a row is selected, "),fe,o(" is set to true on a row. ")]),e("p",null,[o(" The element to expand or collapse a row is a "),ve,o(" with "),ye,o(" and "),ge,o(" properties. Value to describe the buttons is derived from "),Ce,o(" and "),be,o(" properties of the "),t(h,{to:"/configuration/#locale"},{default:r(()=>[o("locale")]),_:1}),o(" API. ")]),we,Se,e("p",null,[o("Paginator is a standalone component used inside the DataTable, refer to the "),t(S,{to:"/paginator"},{default:r(()=>[o("paginator")]),_:1}),o(" for more information about the accessibility features.")]),_e,xe,Pe,Te,Me,De,ke,Re]),_:1},16)}const Ie=M(ne,[["render",Fe]]),Ne={data(){return{products:null,code:{basic:`<DataTable :value="products" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},$e=e("p",null,[o("DataTable requires a "),e("i",null,"value"),o(" as data to display and "),e("i",null,"Column"),o(" components as children for the representation.")],-1),Be={class:"card"};function Ae(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[$e]),_:1},16),e("div",Be,[t(s,{value:l.products,tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"code",header:"Code"}),t(n,{field:"name",header:"Name"}),t(n,{field:"category",header:"Category"}),t(n,{field:"quantity",header:"Quantity"})]),_:1},8,["value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const Ve=M(Ne,[["render",Ae]]),Le={data(){return{sales:null,code:{basic:`<DataTable :value="sales" tableStyle="min-width: 50rem">
    <ColumnGroup type="header">
        <Row>
            <Column header="Product" :rowspan="3" />
            <Column header="Sale Rate" :colspan="4" />
        </Row>
        <Row>
            <Column header="Sales" :colspan="2" />
            <Column header="Profits" :colspan="2" />
        </Row>
        <Row>
            <Column header="Last Year" sortable field="lastYearSale" />
            <Column header="This Year" sortable field="thisYearSale" />
            <Column header="Last Year" sortable field="lastYearProfit" />
            <Column header="This Year" sortable field="thisYearProfit" />
        </Row>
    </ColumnGroup>
    <Column field="product" />
    <Column field="lastYearSale">
        <template #body="slotProps"> {{ slotProps.data.lastYearSale }}% </template>
    </Column>
    <Column field="thisYearSale">
        <template #body="slotProps"> {{ slotProps.data.thisYearSale }}% </template>
    </Column>
    <Column field="lastYearProfit">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.lastYearProfit) }}
        </template>
    </Column>
    <Column field="thisYearProfit">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.thisYearProfit) }}
        </template>
    </Column>
    <ColumnGroup type="footer">
        <Row>
            <Column footer="Totals:" :colspan="3" footerStyle="text-align:right" />
            <Column :footer="lastYearTotal" />
            <Column :footer="thisYearTotal" />
        </Row>
    </ColumnGroup>
</DataTable>`,options:`<template>
    <DataTable :value="sales" tableStyle="min-width: 50rem">
        <ColumnGroup type="header">
            <Row>
                <Column header="Product" :rowspan="3" />
                <Column header="Sale Rate" :colspan="4" />
            </Row>
            <Row>
                <Column header="Sales" :colspan="2" />
                <Column header="Profits" :colspan="2" />
            </Row>
            <Row>
                <Column header="Last Year" sortable field="lastYearSale"/>
                <Column header="This Year" sortable field="thisYearSale"/>
                <Column header="Last Year" sortable field="lastYearProfit"/>
                <Column header="This Year" sortable field="thisYearProfit"/>
            </Row>
        </ColumnGroup>
        <Column field="product" />
        <Column field="lastYearSale">
            <template #body="slotProps">
                {{slotProps.data.lastYearSale}}%
            </template>
        </Column>
        <Column field="thisYearSale">
            <template #body="slotProps">
                {{slotProps.data.thisYearSale}}%
            </template>
        </Column>
        <Column field="lastYearProfit">
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.lastYearProfit)}}
            </template>
        </Column>
        <Column field="thisYearProfit">
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.thisYearProfit)}}
            </template>
        </Column>
        <ColumnGroup type="footer">
            <Row>
                <Column footer="Totals:" :colspan="3" footerStyle="text-align:right"/>
                <Column :footer="lastYearTotal" />
                <Column :footer="thisYearTotal" />
            </Row>
        </ColumnGroup>
    </DataTable>
</template>

<script>
export default {
    data() {
        return {
            sales: null
        }
    },
    created() {
        this.sales = [
            {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
            {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
            {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
            {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
            {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
            {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
            {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
            {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
            {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
            {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
        ];
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    },
    computed: {
        lastYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.lastYearProfit;
            }

            return this.formatCurrency(total);
        },
        thisYearTotal() {
            let total = 0;
            for(let sale of this.sales) {
                total += sale.thisYearProfit;
            }

            return this.formatCurrency(total);
        }
    }
}
<\/script>
`,composition:`<template>
    <DataTable :value="sales" tableStyle="min-width: 50rem">
        <ColumnGroup type="header">
            <Row>
                <Column header="Product" :rowspan="3" />
                <Column header="Sale Rate" :colspan="4" />
            </Row>
            <Row>
                <Column header="Sales" :colspan="2" />
                <Column header="Profits" :colspan="2" />
            </Row>
            <Row>
                <Column header="Last Year" sortable field="lastYearSale"/>
                <Column header="This Year" sortable field="thisYearSale"/>
                <Column header="Last Year" sortable field="lastYearProfit"/>
                <Column header="This Year" sortable field="thisYearProfit"/>
            </Row>
        </ColumnGroup>
        <Column field="product" />
        <Column field="lastYearSale">
            <template #body="slotProps">
                {{slotProps.data.lastYearSale}}%
            </template>
        </Column>
        <Column field="thisYearSale">
            <template #body="slotProps">
                {{slotProps.data.thisYearSale}}%
            </template>
        </Column>
        <Column field="lastYearProfit">
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.lastYearProfit)}}
            </template>
        </Column>
        <Column field="thisYearProfit">
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.thisYearProfit)}}
            </template>
        </Column>
        <ColumnGroup type="footer">
            <Row>
                <Column footer="Totals:" :colspan="3" footerStyle="text-align:right"/>
                <Column :footer="lastYearTotal" />
                <Column :footer="thisYearTotal" />
            </Row>
        </ColumnGroup>
    </DataTable>
</template>

<script setup>
import { ref, computed } from 'vue';


const sales = ref([
    {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342},
    {product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122},
    {product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500},
    {product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323},
    {product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332},
    {product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale:  65, lastYearProfit: 421132, thisYearProfit: 150005},
    {product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214},
    {product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322},
    {product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232},
    {product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533}
]);

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
};

const lastYearTotal = computed(() => {
    let total = 0;
    for(let sale of sales.value) {
        total += sale.lastYearProfit;
    }

    return formatCurrency(total);
});

const thisYearTotal = computed(() => {
    let total = 0;
    for(let sale of sales.value) {
        total += sale.thisYearProfit;
    }

    return formatCurrency(total);
});

<\/script>
`}}},created(){this.sales=[{product:"Bamboo Watch",lastYearSale:51,thisYearSale:40,lastYearProfit:54406,thisYearProfit:43342},{product:"Black Watch",lastYearSale:83,thisYearSale:9,lastYearProfit:423132,thisYearProfit:312122},{product:"Blue Band",lastYearSale:38,thisYearSale:5,lastYearProfit:12321,thisYearProfit:8500},{product:"Blue T-Shirt",lastYearSale:49,thisYearSale:22,lastYearProfit:745232,thisYearProfit:65323},{product:"Brown Purse",lastYearSale:17,thisYearSale:79,lastYearProfit:643242,thisYearProfit:500332},{product:"Chakra Bracelet",lastYearSale:52,thisYearSale:65,lastYearProfit:421132,thisYearProfit:150005},{product:"Galaxy Earrings",lastYearSale:82,thisYearSale:12,lastYearProfit:131211,thisYearProfit:100214},{product:"Game Controller",lastYearSale:44,thisYearSale:45,lastYearProfit:66442,thisYearProfit:53322},{product:"Gaming Set",lastYearSale:90,thisYearSale:56,lastYearProfit:765442,thisYearProfit:296232},{product:"Gold Phone Case",lastYearSale:75,thisYearSale:54,lastYearProfit:21212,thisYearProfit:12533}]},methods:{formatCurrency(a){return a.toLocaleString("en-US",{style:"currency",currency:"USD"})}},computed:{lastYearTotal(){let a=0;for(let i of this.sales)a+=i.lastYearProfit;return this.formatCurrency(a)},thisYearTotal(){let a=0;for(let i of this.sales)a+=i.thisYearProfit;return this.formatCurrency(a)}}},Ue=e("p",null,[o(" Columns can be grouped within a "),e("i",null,"Row"),o(" component and groups can be displayed within a ColumnGroup component. These groups can be displayed using "),e("i",null,"type"),o(" property that can be "),e("i",null,"header"),o(" or "),e("i",null,"footer"),o(". Number of cells and rows to span are defined with the "),e("i",null,"colspan"),o(" and "),e("i",null,"rowspan"),o(" properties of a Column. ")],-1),Oe={class:"card"};function ze(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("Row"),m=d("ColumnGroup"),y=d("DataTable"),u=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Ue]),_:1},16),e("div",Oe,[t(y,{value:l.sales,tableStyle:"min-width: 50rem"},{default:r(()=>[t(m,{type:"header"},{default:r(()=>[t(s,null,{default:r(()=>[t(n,{header:"Product",rowspan:3}),t(n,{header:"Sale Rate",colspan:4})]),_:1}),t(s,null,{default:r(()=>[t(n,{header:"Sales",colspan:2}),t(n,{header:"Profits",colspan:2})]),_:1}),t(s,null,{default:r(()=>[t(n,{header:"Last Year",sortable:"",field:"lastYearSale"}),t(n,{header:"This Year",sortable:"",field:"thisYearSale"}),t(n,{header:"Last Year",sortable:"",field:"lastYearProfit"}),t(n,{header:"This Year",sortable:"",field:"thisYearProfit"})]),_:1})]),_:1}),t(n,{field:"product"}),t(n,{field:"lastYearSale"},{body:r(D=>[o(T(D.data.lastYearSale)+"% ",1)]),_:1}),t(n,{field:"thisYearSale"},{body:r(D=>[o(T(D.data.thisYearSale)+"% ",1)]),_:1}),t(n,{field:"lastYearProfit"},{body:r(D=>[o(T(c.formatCurrency(D.data.lastYearProfit)),1)]),_:1}),t(n,{field:"thisYearProfit"},{body:r(D=>[o(T(c.formatCurrency(D.data.thisYearProfit)),1)]),_:1}),t(m,{type:"footer"},{default:r(()=>[t(s,null,{default:r(()=>[t(n,{footer:"Totals:",colspan:3,footerStyle:"text-align:right"}),t(n,{footer:c.lastYearTotal},null,8,["footer"]),t(n,{footer:c.thisYearTotal},null,8,["footer"])]),_:1})]),_:1})]),_:1},8,["value"])]),t(u,{code:l.code},null,8,["code"])],64)}const qe=M(Le,[["render",ze]]),Ke={data(){return{selectedColumns:null,columns:null,products:null,code:{basic:`<DataTable :value="products" tableStyle="min-width: 50rem">
    <template #header>
        <div style="text-align:left">
            <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"    
                display="chip" placeholder="Select Columns" />
        </div>
    </template>
    <Column field="code" header="Code" />
    <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
</DataTable>`,options:`<template>
    <div>
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"    
                        display="chip" placeholder="Select Columns" />
                </div>
            </template>
            <Column field="code" header="Code" />
            <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            selectedColumns: null,
            columns: null,
            products: null
        }
    },
    created() {
        this.columns = [
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];
        this.selectedColumns = this.columns;
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        onToggle(value) {
            this.selectedColumns = this.columns.filter(col => value.includes(col));
        }
    }
}
<\/script>
`,composition:`<template>
    <div>
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div style="text-align:left">
                    <MultiSelect :modelValue="selectedColumns" :options="columns" optionLabel="header" @update:modelValue="onToggle"
                        display="chip" placeholder="Select Columns" />
                </div>
            </template>
            <Column field="code" header="Code" />
            <Column v-for="(col, index) of selectedColumns" :field="col.field" :header="col.header" :key="col.field + '_' + index"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const columns = ref([
    {field: 'name', header: 'Name'},
    {field: 'category', header: 'Category'},
    {field: 'quantity', header: 'Quantity'}
]);
const selectedColumns = ref(columns.value);
const products = ref();
const onToggle = (val) => {
    selectedColumns.value = columns.value.filter(col => val.includes(col));
};

<\/script>
`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`}}},created(){this.columns=[{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}],this.selectedColumns=this.columns},mounted(){B.getProductsMini().then(a=>this.products=a)},methods:{onToggle(a){this.selectedColumns=this.columns.filter(i=>a.includes(i))}}},Ee=e("p",null,"Column visibility based on a condition can be implemented with dynamic columns, in this sample a MultiSelect is used to manage the visible columns.",-1),Ye={class:"card"},Ge={style:{"text-align":"left"}};function Qe(a,i,h,S,l,c){const p=k,n=d("MultiSelect"),s=d("Column"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Ee]),_:1},16),e("div",Ye,[t(m,{value:l.products,tableStyle:"min-width: 50rem"},{header:r(()=>[e("div",Ge,[t(n,{modelValue:l.selectedColumns,options:l.columns,optionLabel:"header","onUpdate:modelValue":c.onToggle,display:"chip",placeholder:"Select Columns"},null,8,["modelValue","options","onUpdate:modelValue"])])]),default:r(()=>[t(s,{field:"code",header:"Code"}),(b(!0),_(x,null,K(l.selectedColumns,(u,D)=>(b(),O(s,{key:u.field+"_"+D,field:u.field,header:u.header},null,8,["field","header"]))),128))]),_:1},8,["value"])]),t(y,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const We=M(Ke,[["render",Qe]]),je={data(){return{products:null,code:{basic:`<DataTable :value="products" :rowClass="rowClass" :rowStyle="rowStyle" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity">
        <template #body="slotProps">
            <div :class="stockClass(slotProps.data)">
                {{ slotProps.data.quantity }}
            </div>
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products" :rowClass="rowClass" :rowStyle="rowStyle" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity">
                <template #body="slotProps">
                    <div :class="stockClass(slotProps.data)">
                        {{ slotProps.data.quantity }}
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsSmall().then((data) => (this.products = data));
    },
    methods: {
        rowClass(data) {
            return [{ 'bg-primary': data.category === 'Fitness' }];
        },
        rowStyle(data) {
            if (data.quantity === 0) {
                return { fontWeight: 'bold', fontStyle: 'italic' };
            }
        },
        stockClass(data) {
            return [
                'border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm',
                {
                    'bg-red-100 text-red-900': data.quantity === 0,
                    'bg-blue-100 text-blue-900': data.quantity > 0 && data.quantity < 10,
                    'bg-teal-100 text-teal-900': data.quantity > 10
                }
            ];
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products" :rowClass="rowClass" :rowStyle="rowStyle" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity">
                <template #body="slotProps">
                    <div :class="stockClass(slotProps.data)">
                        {{ slotProps.data.quantity }}
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (this.products = data));
});
            
const products = ref();

const rowClass = (data) => {
    return [{ 'bg-primary': data.category === 'Fitness' }];
};
const rowStyle = (data) => {
    if (data.quantity === 0) {
        return { fontWeight: 'bold', fontStyle: 'italic' };
    }
};
const stockClass = (data) => {
    return [
        'border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm',
        {
            'bg-red-100 text-red-900': data.quantity === 0,
            'bg-blue-100 text-blue-900': data.quantity > 0 && data.quantity < 10,
            'bg-teal-100 text-teal-900': data.quantity > 10
        }
    ];
};

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`}}},mounted(){B.getProductsSmall().then(a=>this.products=a)},methods:{rowClass(a){return[{"bg-primary":a.category==="Fitness"}]},rowStyle(a){if(a.quantity===0)return{fontWeight:"bold",fontStyle:"italic"}},stockClass(a){return["border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm",{"bg-red-100 text-red-900":a.quantity===0,"bg-blue-100 text-blue-900":a.quantity>0&&a.quantity<10,"bg-teal-100 text-teal-900":a.quantity>10}]}}},He=e("p",null,[o("Particular rows and cells can be styled based on conditions. The "),e("i",null,"rowClass"),o(" receives a row data as a parameter to return a style class for a row whereas cells are customized using the "),e("i",null,"body"),o(" template.")],-1),Je={class:"card"};function Xe(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[He]),_:1},16),e("div",Je,[t(s,{value:l.products,rowClass:c.rowClass,rowStyle:c.rowStyle,tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"code",header:"Code"}),t(n,{field:"name",header:"Name"}),t(n,{field:"category",header:"Category"}),t(n,{field:"quantity",header:"Quantity"},{body:r(y=>[e("div",{class:U(c.stockClass(y.data))},T(y.data.quantity),3)]),_:1})]),_:1},8,["value","rowClass","rowStyle"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const Ze=M(je,[["render",Xe]]),et={data(){return{products:null,selectedProduct:null,menuModel:[{label:"View",icon:"pi pi-fw pi-search",command:()=>this.viewProduct(this.selectedProduct)},{label:"Delete",icon:"pi pi-fw pi-times",command:()=>this.deleteProduct(this.selectedProduct)}],code:{basic:`<ContextMenu ref="cm" :model="menuModel" />
<DataTable v-model:contextMenuSelection="selectedProduct" :value="products" contextMenu
        @row-contextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="price" header="Price">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div>
        <ContextMenu ref="cm" :model="menuModel" />
        <DataTable :value="products" contextMenu v-model:contextMenuSelection="selectedProduct" 
                @rowContextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
            </template>
            </Column>
        </DataTable>
        <Toast />
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null,
            menuModel: [
                {label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct)},
                {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.selectedProduct)}
            ]
        }
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        onRowContextMenu(event) {
            this.$refs.cm.show(event.originalEvent);
        },
        viewProduct(product) {
            this.$toast.add({severity: 'info', summary: 'Product Selected', detail: product.name, life: 3000});
        },
        deleteProduct(product) {
            this.products = this.products.filter((p) => p.id !== product.id);
            this.$toast.add({severity: 'error', summary: 'Product Deleted', detail: product.name, life: 3000});
            this.selectedProduct = null;
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
<\/script>
`,composition:`<template>
    <div>
        <ContextMenu ref="cm" :model="menuModel" />
        <DataTable :value="products" contextMenu v-model:contextMenuSelection="selectedProduct"
                @rowContextmenu="onRowContextMenu" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
                </template>
                </Column>
        </DataTable>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const cm = ref();
const toast = useToast();
const products = ref();
const selectedProduct = ref();
const menuModel = ref([
    {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct)},
    {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct)}
]);
const onRowContextMenu = (event) => {
    cm.value.show(event.originalEvent);
};
const viewProduct = (product) => {
    toast.add({severity: 'info', summary: 'Product Selected', detail: product.value.name, life: 3000});
};
const deleteProduct = (product) => {
    products.value = products.value.filter((p) => p.id !== product.value.id);
    toast.add({severity: 'error', summary: 'Product Deleted', detail: product.value.name, life: 3000});
    selectedProduct.value = null;
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
};

<\/script>
`,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`}}},mounted(){B.getProductsMini().then(a=>this.products=a)},methods:{onRowContextMenu(a){this.$refs.cm.show(a.originalEvent)},viewProduct(a){this.$toast.add({severity:"info",summary:"Product Selected",detail:a.name,life:3e3})},deleteProduct(a){this.products=this.products.filter(i=>i.id!==a.id),this.$toast.add({severity:"error",summary:"Product Deleted",detail:a.name,life:3e3}),this.selectedProduct=null},formatCurrency(a){return a.toLocaleString("en-US",{style:"currency",currency:"USD"})}}},tt=e("p",null,[o(" DataTable has exclusive integration with ContextMenu using the "),e("i",null,"contextMenu"),o(" event to open a menu on right click alont with "),e("i",null,"contextMenuSelection"),o(" property and "),e("i",null,"row-contextmenu"),o(" event to control the selection via the menu. ")],-1),at={class:"card"};function lt(a,i,h,S,l,c){const p=k,n=d("ContextMenu"),s=d("Column"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[tt]),_:1},16),e("div",at,[t(n,{ref:"cm",model:l.menuModel},null,8,["model"]),t(m,{contextMenuSelection:l.selectedProduct,"onUpdate:contextMenuSelection":i[0]||(i[0]=u=>l.selectedProduct=u),value:l.products,contextMenu:"",onRowContextmenu:c.onRowContextMenu,tableStyle:"min-width: 50rem"},{default:r(()=>[t(s,{field:"code",header:"Code"}),t(s,{field:"name",header:"Name"}),t(s,{field:"category",header:"Category"}),t(s,{field:"price",header:"Price"},{body:r(u=>[o(T(c.formatCurrency(u.data.price)),1)]),_:1})]),_:1},8,["contextMenuSelection","value","onRowContextmenu"])]),t(y,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const ot=M(et,[["render",lt]]),rt={data(){return{products:null,columns:null,code:{basic:`<DataTable :value="products" tableStyle="min-width: 50rem">
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            columns: null
        };
    },
    created() {
        this.columns = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const columns = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
];

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},created(){this.columns=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}]},mounted(){B.getProductsMini().then(a=>this.products=a)}},nt=e("p",null,"Columns can be created programmatically.",-1),it={class:"card"};function st(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[nt]),_:1},16),e("div",it,[t(s,{value:l.products,tableStyle:"min-width: 50rem"},{default:r(()=>[(b(!0),_(x,null,K(l.columns,y=>(b(),O(n,{key:y.field,field:y.field,header:y.header},null,8,["field","header"]))),128))]),_:1},8,["value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const dt=M(rt,[["render",st]]),ct={data(){return{products:null,code:{basic:`<DataTable :value="products" ref="dt" tableStyle="min-width: 50rem">
    <template #header>
        <div style="text-align: left">
            <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
        </div>
    </template>
    <Column field="code" header="Code" exportHeader="Product Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,options:`<template>
    <div>
        <DataTable :value="products" ref="dt" tableStyle="min-width: 50rem">
            <template #header>
                <div style="text-align: left">
                    <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                </div>
            </template>
            <Column field="code" header="Code" exportHeader="Product Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        }
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        exportCSV() {
            this.$refs.dt.exportCSV();
        }
    }
}
<\/script>
`,composition:`<template>
    <div>
        <DataTable :value="products" ref="dt" tableStyle="min-width: 50rem">
            <template #header>
                <div style="text-align: left">
                    <Button icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                </div>
            </template>
            <Column field="code" header="Code" exportHeader="Product Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const dt = ref();
const products = ref();
const exportCSV = () => {
    dt.value.exportCSV();
};
<\/script>
`,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`}}},mounted(){B.getProductsMini().then(a=>this.products=a)},methods:{exportCSV(){this.$refs.dt.exportCSV()}}},ut=e("p",null,"DataTable can export its data to CSV format.",-1),mt={class:"card"},pt={style:{"text-align":"left"}};function ht(a,i,h,S,l,c){const p=k,n=d("Button"),s=d("Column"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[ut]),_:1},16),e("div",mt,[t(m,{ref:"dt",value:l.products,tableStyle:"min-width: 50rem"},{header:r(()=>[e("div",pt,[t(n,{icon:"pi pi-external-link",label:"Export",onClick:i[0]||(i[0]=u=>c.exportCSV(u))})])]),default:r(()=>[t(s,{field:"code",header:"Code",exportHeader:"Product Code"}),t(s,{field:"name",header:"Name"}),t(s,{field:"category",header:"Category"}),t(s,{field:"quantity",header:"Quantity"})]),_:1},8,["value"])]),t(y,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const ft=M(ct,[["render",ht]]),vt={data(){return{products:null,code:{basic:`<DataTable :value="products" showGridlines tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products" showGridlines tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products" showGridlines tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},yt=e("p",null,[o("Enabling "),e("i",null,"showGridlines"),o(" displays borders between cells.")],-1),gt={class:"card"};function Ct(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[yt]),_:1},16),e("div",gt,[t(s,{value:l.products,showGridlines:"",tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"code",header:"Code"}),t(n,{field:"name",header:"Name"}),t(n,{field:"category",header:"Category"}),t(n,{field:"quantity",header:"Quantity"})]),_:1},8,["value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const bt=M(vt,[["render",Ct]]),wt={data(){return{code:{basic:`import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional`}}}};function St(a,i,h,S,l,c){const p=k,n=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),null,16),t(n,{code:l.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const _t=M(wt,[["render",St]]),xt={data(){return{loading:!1,totalRecords:0,customers:null,selectedCustomers:null,selectAll:!1,filters:{name:{value:"",matchMode:"contains"},"country.name":{value:"",matchMode:"contains"},company:{value:"",matchMode:"contains"},"representative.name":{value:"",matchMode:"contains"}},lazyParams:{},columns:[{field:"name",header:"Name"},{field:"country.name",header:"Country"},{field:"company",header:"Company"},{field:"representative.name",header:"Representative"}],code:{basic:`<DataTable :value="customers" lazy paginator :first="0" :rows="10" v-model:filters="filters" ref="dt" dataKey="id"
        :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
        :globalFilterFields="['name','country.name', 'company', 'representative.name']"
        v-model:selection="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect" tableStyle="min-width: 75rem">
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <Column field="name" header="Name" filterMatchMode="startsWith" sortable>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search"/>
        </template>
    </Column>
    <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" sortable>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search"/>
        </template>
    </Column>
    <Column field="company" header="Company" filterMatchMode="contains" sortable>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search"/>
        </template>
    </Column>
    <Column field="representative.name" header="Representative" filterField="representative.name" sortable>
        <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search"/>
        </template>
    </Column>
</DataTable>`,options:`<template>
	<div class="card p-fluid">
        <DataTable :value="customers" lazy paginator :first="0" :rows="10" v-model:filters="filters" ref="dt" dataKey="id"
                :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
                :globalFilterFields="['name','country.name', 'company', 'representative.name']"
                v-model:selection="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect" tableStyle="min-width: 75rem">
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="name" header="Name" filterMatchMode="startsWith" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search"/>
                </template>
            </Column>
            <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search"/>
                </template>
            </Column>
            <Column field="company" header="Company" filterMatchMode="contains" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search"/>
                </template>
            </Column>
            <Column field="representative.name" header="Representative" filterField="representative.name" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search"/>
                </template>
            </Column>
        </DataTable>
	</div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            loading: false,
            totalRecords: 0,
            customers: null,
            selectedCustomers: null,
            selectAll: false,
            filters: {
                'name': {value: '', matchMode: 'contains'},
                'country.name': {value: '', matchMode: 'contains'},
                'company': {value: '', matchMode: 'contains'},
                'representative.name': {value: '', matchMode: 'contains'},
            },
            lazyParams: {},
            columns: [
                {field: 'name', header: 'Name'},
                {field: 'country.name', header: 'Country'},
                {field: 'company', header: 'Company'},
                {field: 'representative.name', header: 'Representative'}
            ]
        }
    },
    mounted() {
        this.loading = true;

        this.lazyParams = {
            first: this.$refs.dt.first,
            rows: this.$refs.dt.rows,
            sortField: null,
            sortOrder: null,
            filters: this.filters
        };

        this.loadLazyData();
    },
    methods: {
        loadLazyData() {
            this.loading = true;

            setTimeout(() => {
                CustomerService.getCustomers({ lazyEvent: JSON.stringify(this.lazyParams) }).then((data) => {
                    this.customers = data.customers;
                    this.totalRecords = data.totalRecords;
                    this.loading = false;
                });
            }, Math.random() * 1000 + 250);
        },
        onPage(event) {
            this.lazyParams = event;
            this.loadLazyData();
        },
        onSort(event) {
            this.lazyParams = event;
            this.loadLazyData();
        },
        onFilter() {
            this.lazyParams.filters = this.filters;
            this.loadLazyData();
        },
        onSelectAllChange(event) {
            const selectAll = event.checked;

            if (selectAll) {
                CustomerService.getCustomers().then(data => {
                    this.selectAll = true;
                    this.selectedCustomers = data.customers;
                });
            }
            else {
                this.selectAll = false;
                this.selectedCustomers = [];
            }
        },
        onRowSelect() {
            this.selectAll = this.selectedCustomers.length === this.totalRecords
        },
        onRowUnselect() {
            this.selectAll = false;
        }
    }
}
<\/script>
`,composition:`<template>
	<div class="card p-fluid">
        <DataTable :value="customers" lazy paginator :first="0" :rows="10" v-model:filters="filters" ref="dt" dataKey="id"
            :totalRecords="totalRecords" :loading="loading" @page="onPage($event)" @sort="onSort($event)" @filter="onFilter($event)" filterDisplay="row"
            :globalFilterFields="['name','country.name', 'company', 'representative.name']"
            v-model:selection="selectedCustomers" :selectAll="selectAll" @select-all-change="onSelectAllChange" @row-select="onRowSelect" @row-unselect="onRowUnselect" tableStyle="min-width: 75rem">
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="name" header="Name" filterMatchMode="startsWith" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search"/>
                </template>
            </Column>
            <Column field="country.name" header="Country" filterField="country.name" filterMatchMode="contains" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search"/>
                </template>
            </Column>
            <Column field="company" header="Company" filterMatchMode="contains" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search"/>
                </template>
            </Column>
            <Column field="representative.name" header="Representative" filterField="representative.name" sortable>
                <template #filter="{filterModel,filterCallback}">
                    <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" placeholder="Search"/>
                </template>
            </Column>
        </DataTable>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

onMounted(() => {
    loading.value = true;

    lazyParams.value = {
        first: dt.value.first,
        rows: dt.value.rows,
        sortField: null,
        sortOrder: null,
        filters: filters.value
    };

    loadLazyData();
});

const dt = ref();
const loading = ref(false);
const totalRecords = ref(0);
const customers = ref();
const selectedCustomers = ref();
const selectAll = ref(false);
const filters = ref({
    'name': {value: '', matchMode: 'contains'},
    'country.name': {value: '', matchMode: 'contains'},
    'company': {value: '', matchMode: 'contains'},
    'representative.name': {value: '', matchMode: 'contains'},
});
const lazyParams = ref({});
const columns = ref([
    {field: 'name', header: 'Name'},
    {field: 'country.name', header: 'Country'},
    {field: 'company', header: 'Company'},
    {field: 'representative.name', header: 'Representative'}
]);

const loadLazyData = () => {
    loading.value = true;

    setTimeout(() => {
        CustomerService.getCustomers({ lazyEvent: JSON.stringify(lazyParams.value) }).then((data) => {
            customers.value = data.customers;
            totalRecords.value = data.totalRecords;
            loading.value = false;
        });
    }, Math.random() * 1000 + 250);
};
const onPage = (event) => {
    lazyParams.value = event;
    loadLazyData();
};
const onSort = (event) => {
    lazyParams.value = event;
    loadLazyData();
};
const onFilter = () => {
    lazyParams.value.filters = filters.value ;
    loadLazyData();
};
const onSelectAllChange = (event) => {
    selectAll.value = event.checked;

    if (selectAll) {
        CustomerService.getCustomers().then(data => {
            selectAll.value = true;
            selectedCustomers.value = data.customers;
        });
    }
    else {
        selectAll.value = false;
        selectedCustomers.value = [];
    }
};
const onRowSelect = () => {
    selectAll.value = selectedCustomers.value.length === totalRecords.value;
};
const onRowUnselect = () => {
    selectAll.value = false;
};

<\/script>
`,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`}}},mounted(){this.loading=!0,this.lazyParams={first:this.$refs.dt.first,rows:this.$refs.dt.rows,sortField:null,sortOrder:null,filters:this.filters},this.loadLazyData()},methods:{loadLazyData(){this.loading=!0,setTimeout(()=>{V.getCustomers({lazyEvent:JSON.stringify(this.lazyParams)}).then(a=>{this.customers=a.customers,this.totalRecords=a.totalRecords,this.loading=!1})},Math.random()*1e3+250)},onPage(a){this.lazyParams=a,this.loadLazyData()},onSort(a){this.lazyParams=a,this.loadLazyData()},onFilter(){this.lazyParams.filters=this.filters,this.loadLazyData()},onSelectAllChange(a){a.checked?V.getCustomers().then(h=>{this.selectAll=!0,this.selectedCustomers=h.customers}):(this.selectAll=!1,this.selectedCustomers=[])},onRowSelect(){this.selectAll=this.selectedCustomers.length===this.totalRecords},onRowUnselect(){this.selectAll=!1}}},Pt=e("p",null,[o(" Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime "),e("i",null,"paging"),o(", "),e("i",null,"sorting"),o(" and "),e("i",null,"filtering"),o(" occurs. Sample below imitates lazy loading data from a remote datasource using an in-memory list and timeouts to mimic network connection. ")],-1),Tt=e("p",null,[o(" Enabling the "),e("i",null,"lazy"),o(" property and assigning the logical number of rows to "),e("i",null,"totalRecords"),o(" by doing a projection query are the key elements of the implementation so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they are not present on page, only the records that are displayed on the current page exist. ")],-1),Mt=e("p",null,[o("Note that, the implementation of "),e("i",null,"checkbox selection"),o(" in lazy mode needs to be handled manually as in this example since the DataTable cannot know about the whole dataset.")],-1),Dt={class:"card p-fluid"},kt={class:"flex align-items-center gap-2"},Rt={class:"flex align-items-center gap-2"},Ft=["alt","src"];function It(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("InputText"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Pt,Tt,Mt]),_:1},16),e("div",Dt,[t(m,{ref:"dt",filters:l.filters,"onUpdate:filters":i[0]||(i[0]=u=>l.filters=u),selection:l.selectedCustomers,"onUpdate:selection":i[1]||(i[1]=u=>l.selectedCustomers=u),value:l.customers,lazy:"",paginator:"",first:0,rows:10,dataKey:"id",totalRecords:l.totalRecords,loading:l.loading,onPage:i[2]||(i[2]=u=>c.onPage(u)),onSort:i[3]||(i[3]=u=>c.onSort(u)),onFilter:i[4]||(i[4]=u=>c.onFilter(u)),filterDisplay:"row",globalFilterFields:["name","country.name","company","representative.name"],selectAll:l.selectAll,onSelectAllChange:c.onSelectAllChange,onRowSelect:c.onRowSelect,onRowUnselect:c.onRowUnselect,tableStyle:"min-width: 75rem"},{default:r(()=>[t(n,{selectionMode:"multiple",headerStyle:"width: 3rem"}),t(n,{field:"name",header:"Name",filterMatchMode:"startsWith",sortable:""},{filter:r(({filterModel:u,filterCallback:D})=>[t(s,{modelValue:u.value,"onUpdate:modelValue":w=>u.value=w,type:"text",onKeydown:q(w=>D(),["enter"]),class:"p-column-filter",placeholder:"Search"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1}),t(n,{field:"country.name",header:"Country",filterField:"country.name",filterMatchMode:"contains",sortable:""},{body:r(({data:u})=>[e("div",kt,[e("img",{alt:"flag",src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:U(`flag flag-${u.country.code}`),style:{width:"24px"}},null,2),e("span",null,T(u.country.name),1)])]),filter:r(({filterModel:u,filterCallback:D})=>[t(s,{modelValue:u.value,"onUpdate:modelValue":w=>u.value=w,type:"text",onKeydown:q(w=>D(),["enter"]),class:"p-column-filter",placeholder:"Search"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1}),t(n,{field:"company",header:"Company",filterMatchMode:"contains",sortable:""},{filter:r(({filterModel:u,filterCallback:D})=>[t(s,{modelValue:u.value,"onUpdate:modelValue":w=>u.value=w,type:"text",onKeydown:q(w=>D(),["enter"]),class:"p-column-filter",placeholder:"Search"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1}),t(n,{field:"representative.name",header:"Representative",filterField:"representative.name",sortable:""},{body:r(({data:u})=>[e("div",Rt,[e("img",{alt:u.representative.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${u.representative.image}`,style:{width:"32px"}},null,8,Ft),e("span",null,T(u.representative.name),1)])]),filter:r(({filterModel:u,filterCallback:D})=>[t(s,{modelValue:u.value,"onUpdate:modelValue":w=>u.value=w,type:"text",onKeydown:q(w=>D(),["enter"]),class:"p-column-filter",placeholder:"Search"},null,8,["modelValue","onUpdate:modelValue","onKeydown"])]),_:1})]),_:1},8,["filters","selection","value","totalRecords","loading","globalFilterFields","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"])]),t(y,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const Nt=M(xt,[["render",It]]),$t={data(){return{columns:null,products:null,code:{basic:`<DataTable :value="products" :reorderableColumns="true" @columnReorder="onColReorder" @rowReorder="onRowReorder" tableStyle="min-width: 50rem">
    <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
    <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
</DataTable>`,options:`<template>
	<div>
        <DataTable :value="products" :reorderableColumns="true" @columnReorder="onColReorder" @rowReorder="onRowReorder" tableStyle="min-width: 50rem">
            <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
            <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </DataTable>
        <Toast />
	</div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            columns: null,
            products: null
        }
    },
    created() {
        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'category', header: 'Category'},
            {field: 'quantity', header: 'Quantity'}
        ];
    },
    mounted() {
        ProductService.getProductsMini().then(data => this.products = data);
    },
    methods: {
        onColReorder() {
            this.$toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
        },
        onRowReorder(event) {
            this.products = event.value;
            this.$toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});
        }
    }
}
<\/script>                  
`,composition:`<template>
	<div>
        <DataTable :value="products" :reorderableColumns="true" @columnReorder="onColReorder" @rowReorder="onRowReorder" tableStyle="min-width: 50rem">
            <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
            <Column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></Column>
        </DataTable>
        <Toast />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then(data => products.value = data);
});

const toast = useToast();
const columns = ref([
    {field: 'code', header: 'Code'},
    {field: 'name', header: 'Name'},
    {field: 'category', header: 'Category'},
    {field: 'quantity', header: 'Quantity'}
]);
const products = ref();

const onColReorder = () => {
    toast.add({severity:'success', summary: 'Column Reordered', life: 3000});
};
const onRowReorder = (event) => {
    products.value = event.value;
    toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});
};

<\/script>                  
`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`}}},created(){this.columns=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}]},mounted(){B.getProductsMini().then(a=>this.products=a)},methods:{onColReorder(){this.$toast.add({severity:"success",summary:"Column Reordered",life:3e3})},onRowReorder(a){this.products=a.value,this.$toast.add({severity:"success",summary:"Rows Reordered",life:3e3})}}},Bt=e("p",null,[o("Order of the columns and rows can be changed using drag and drop. Column reordering is configured by adding "),e("i",null,"reorderableColumns"),o(" property.")],-1),At=e("p",null,[o(" Similarly, adding "),e("i",null,"rowReorder"),o(" property to a column enables draggable rows. For the drag handle a column needs to have "),e("i",null,"rowReorder"),o(" property and table needs to have "),e("i",null,"row-reorder"),o(" event is required to control the state of the rows after reorder completes. ")],-1),Vt={class:"card"};function Lt(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Bt,At]),_:1},16),e("div",Vt,[t(s,{value:l.products,reorderableColumns:"",onColumnReorder:c.onColReorder,onRowReorder:c.onRowReorder,tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{rowReorder:"",headerStyle:"width: 3rem",reorderableColumn:!1}),(b(!0),_(x,null,K(l.columns,y=>(b(),O(n,{key:y.field,field:y.field,header:y.header},null,8,["field","header"]))),128))]),_:1},8,["value","onColumnReorder","onRowReorder"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const Ut=M($t,[["render",Lt]]),Ot={data(){return{products:null,expandedRows:[],code:{basic:`<DataTable v-model:expandedRows="expandedRows" :value="products" dataKey="id"
        @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
    <template #header>
        <div class="flex flex-wrap justify-content-end gap-2">
            <Button text icon="pi pi-plus" label="Expand All" @click="expandAll" />
            <Button text icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
        </div>
    </template>
    <Column expander style="width: 5rem" />
    <Column field="name" header="Name"></Column>
    <Column header="Image">
        <template #body="slotProps">
            <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="shadow-4" width="64" />
        </template>
    </Column>
    <Column field="price" header="Price">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
        </template>
    </Column>
    <Column field="category" header="Category"></Column>
    <Column field="rating" header="Reviews">
        <template #body="slotProps">
            <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
        </template>
    </Column>
    <Column header="Status">
        <template #body="slotProps">
            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
        </template>
    </Column>
    <template #expansion="slotProps">
        <div class="p-3">
            <h5>Orders for {{ slotProps.data.name }}</h5>
            <DataTable :value="slotProps.data.orders">
                <Column field="id" header="Id" sortable></Column>
                <Column field="customer" header="Customer" sortable></Column>
                <Column field="date" header="Date" sortable></Column>
                <Column field="amount" header="Amount" sortable>
                    <template #body="slotProps">
                        {{ formatCurrency(slotProps.data.amount) }}
                    </template>
                </Column>
                <Column field="status" header="Status" sortable>
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.status.toLowerCase()" :severity="getOrderSeverity(slotProps.data)" />
                    </template>
                </Column>
                <Column headerStyle="width:4rem">
                    <template #body>
                        <Button icon="pi pi-search" />
                    </template>
                </Column>
            </DataTable>
        </div>
    </template>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable v-model:expandedRows="expandedRows" :value="products" dataKey="id"
                @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
            <template #header>
                <div class="flex flex-wrap justify-content-end gap-2">
                    <Button text icon="pi pi-plus" label="Expand All" @click="expandAll" />
                    <Button text icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
                </div>
            </template>
            <Column expander style="width: 5rem" />
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="shadow-4" width="64" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #expansion="slotProps">
                <div class="p-3">
                    <h5>Orders for {{ slotProps.data.name }}</h5>
                    <DataTable :value="slotProps.data.orders" >
                        <Column field="id" header="Id" sortable></Column>
                        <Column field="customer" header="Customer" sortable></Column>
                        <Column field="date" header="Date" sortable></Column>
                        <Column field="amount" header="Amount" sortable>
                            <template #body="slotProps">
                                {{ formatCurrency(slotProps.data.amount) }}
                            </template>
                        </Column>
                        <Column field="status" header="Status" sortable>
                            <template #body="slotProps">
                                <Tag :value="slotProps.data.status.toLowerCase()" :severity="getOrderSeverity(slotProps.data)" />
                            </template>
                        </Column>
                        <Column headerStyle="width:4rem">
                            <template #body>
                                <Button icon="pi pi-search" />
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </template>
        </DataTable>
        <Toast />
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            expandedRows: []
        };
    },
    mounted() {
        ProductService.getProductsWithOrdersSmall().then((data) => (this.products = data));
    },
    methods: {
        onRowExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
        },
        onRowCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
        },
        expandAll() {
            this.expandedRows = this.products.filter((p) => p.id);
        },
        collapseAll() {
            this.expandedRows = null;
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        },
        getOrderSeverity(order) {
            switch (order.status) {
                case 'DELIVERED':
                    return 'success';

                case 'CANCELLED':
                    return 'danger';

                case 'PENDING':
                    return 'warning';

                case 'RETURNED':
                    return 'info';

                default:
                    return null;
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable v-model:expandedRows="expandedRows" :value="products" dataKey="id"
                @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem">
            <template #header>
                <div class="flex flex-wrap justify-content-end gap-2">
                    <Button text icon="pi pi-plus" label="Expand All" @click="expandAll" />
                    <Button text icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
                </div>
            </template>
            <Column expander style="width: 5rem" />
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="shadow-4" width="64" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #expansion="slotProps">
                <div class="p-3">
                    <h5>Orders for {{ slotProps.data.name }}</h5>
                    <DataTable :value="slotProps.data.orders">
                        <Column field="id" header="Id" sortable></Column>
                        <Column field="customer" header="Customer" sortable></Column>
                        <Column field="date" header="Date" sortable></Column>
                        <Column field="amount" header="Amount" sortable>
                            <template #body="slotProps">
                                {{ formatCurrency(slotProps.data.amount) }}
                            </template>
                        </Column>
                        <Column field="status" header="Status" sortable>
                            <template #body="slotProps">
                                <Tag :value="slotProps.data.status.toLowerCase()" :severity="getOrderSeverity(slotProps.data)" />
                            </template>
                        </Column>
                        <Column headerStyle="width:4rem">
                            <template #body>
                                <Button icon="pi pi-search" />
                            </template>
                        </Column>
                    </DataTable>
                </div>
            </template>
        </DataTable>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

const products = ref();
const expandedRows = ref([]);
const toast = useToast();

onMounted(() => {
    ProductService.getProductsWithOrdersSmall().then((data) => (products.value = data));
});

const onRowExpand = (event) => {
    toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
};
const onRowCollapse = (event) => {
    toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
};
const expandAll = () => {
    expandedRows.value = products.value.filter((p) => p.id);
};
const collapseAll = () => {
    expandedRows.value = null;
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
const getOrderSeverity = (order) => {
    switch (order.status) {
        case 'DELIVERED':
            return 'success';

        case 'CANCELLED':
            return 'danger';

        case 'PENDING':
            return 'warning';

        case 'RETURNED':
            return 'info';

        default:
            return null;
    }
};

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    orders: [
        {
            id: '1000-0',
            productCode: 'f230fh0g3',
            date: '2020-09-13',
            amount: 65,
            quantity: 1,
            customer: 'David James',
            status: 'PENDING'
        },
        ...
    ]
},
...
`}}},mounted(){B.getProductsWithOrdersSmall().then(a=>this.products=a)},methods:{onRowExpand(a){this.$toast.add({severity:"info",summary:"Product Expanded",detail:a.data.name,life:3e3})},onRowCollapse(a){this.$toast.add({severity:"success",summary:"Product Collapsed",detail:a.data.name,life:3e3})},expandAll(){this.expandedRows=this.products.filter(a=>a.id)},collapseAll(){this.expandedRows=null},formatCurrency(a){return a.toLocaleString("en-US",{style:"currency",currency:"USD"})},getSeverity(a){switch(a.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}},getOrderSeverity(a){switch(a.status){case"DELIVERED":return"success";case"CANCELLED":return"danger";case"PENDING":return"warning";case"RETURNED":return"info";default:return null}}}},zt=e("p",null,[o(" Row expansion is controlled with "),e("i",null,"expandedRows"),o(" property. The column that has the expander element requires "),e("i",null,"expander"),o(" property to be enabled. Optional "),e("i",null,"rowExpand"),o(" and "),e("i",null,"rowCollapse"),o(" events are available as callbacks. ")],-1),qt=e("p",null,[o(" Expanded rows can either be an array of row data or when "),e("i",null,"dataKey"),o(" is present, an object whose keys are strings referring to the identifier of the row data and values are booleans to represent the expansion state e.g. "),e("i",null,"{'1004': true}"),o(". The "),e("i",null,"dataKey"),o(" alternative is more performant for large amounts of data. ")],-1),Kt={class:"card"},Et={class:"flex flex-wrap justify-content-end gap-2"},Yt=["src","alt"],Gt={class:"p-3"};function Qt(a,i,h,S,l,c){const p=k,n=d("Button"),s=d("Column"),m=d("Rating"),y=d("Tag"),u=d("DataTable"),D=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[zt,qt]),_:1},16),e("div",Kt,[t(u,{expandedRows:l.expandedRows,"onUpdate:expandedRows":i[0]||(i[0]=w=>l.expandedRows=w),value:l.products,dataKey:"id",onRowExpand:c.onRowExpand,onRowCollapse:c.onRowCollapse,tableStyle:"min-width: 60rem"},{header:r(()=>[e("div",Et,[t(n,{text:"",icon:"pi pi-plus",label:"Expand All",onClick:c.expandAll},null,8,["onClick"]),t(n,{text:"",icon:"pi pi-minus",label:"Collapse All",onClick:c.collapseAll},null,8,["onClick"])])]),expansion:r(w=>[e("div",Gt,[e("h5",null,"Orders for "+T(w.data.name),1),t(u,{value:w.data.orders},{default:r(()=>[t(s,{field:"id",header:"Id",sortable:""}),t(s,{field:"customer",header:"Customer",sortable:""}),t(s,{field:"date",header:"Date",sortable:""}),t(s,{field:"amount",header:"Amount",sortable:""},{body:r(C=>[o(T(c.formatCurrency(C.data.amount)),1)]),_:2},1024),t(s,{field:"status",header:"Status",sortable:""},{body:r(C=>[t(y,{value:C.data.status.toLowerCase(),severity:c.getOrderSeverity(C.data)},null,8,["value","severity"])]),_:2},1024),t(s,{headerStyle:"width:4rem"},{body:r(()=>[t(n,{icon:"pi pi-search"})]),_:1})]),_:2},1032,["value"])])]),default:r(()=>[t(s,{expander:"",style:{width:"5rem"}}),t(s,{field:"name",header:"Name"}),t(s,{header:"Image"},{body:r(w=>[e("img",{src:`https://primefaces.org/cdn/primevue/images/product/${w.data.image}`,alt:w.data.image,class:"shadow-4",width:"64"},null,8,Yt)]),_:1}),t(s,{field:"price",header:"Price"},{body:r(w=>[o(T(c.formatCurrency(w.data.price)),1)]),_:1}),t(s,{field:"category",header:"Category"}),t(s,{field:"rating",header:"Reviews"},{body:r(w=>[t(m,{modelValue:w.data.rating,readonly:"",cancel:!1},null,8,["modelValue"])]),_:1}),t(s,{header:"Status"},{body:r(w=>[t(y,{value:w.data.inventoryStatus,severity:c.getSeverity(w.data)},null,8,["value","severity"])]),_:1})]),_:1},8,["expandedRows","value","onRowExpand","onRowCollapse"])]),t(D,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const Wt=M(Ot,[["render",Qt]]),jt={data(){return{products:null,size:{label:"Normal",value:"normal"},sizeOptions:[{label:"Small",value:"small",class:"sm"},{label:"Normal",value:"normal"},{label:"Large",value:"large",class:"lg"}],code:{basic:`<SelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
<DataTable :value="products" :class="\`p-datatable-\${size.class}\`" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <div class="flex justify-content-center mb-4">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
        </div>
        <DataTable :value="products" :class="\`p-datatable-\${size.class}\`" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            size: { label: 'Normal', value: 'normal' },
            sizeOptions: [
                { label: 'Small', value: 'small', class: 'sm' },
                { label: 'Normal', value: 'normal' },
                { label: 'Large', value: 'large', class: 'lg' }
            ]
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex justify-content-center mb-4">
            <SelectButton v-model="size" :options="sizeOptions" optionLabel="label" dataKey="label" />
        </div>
        <DataTable :value="products" :class="\`p-datatable-\${size.class}\`" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const size = ref({ label: 'Normal', value: 'normal' });
const sizeOptions = ref([
    { label: 'Small', value: 'small', class: 'sm' },
    { label: 'Normal', value: 'normal' },
    { label: 'Large', value: 'large', class: 'lg' }
]);

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},Ht=e("p",null,"In addition to a regular table, alternatives with alternative sizes are available.",-1),Jt={class:"card"},Xt={class:"flex justify-content-center mb-4"};function Zt(a,i,h,S,l,c){const p=k,n=d("SelectButton"),s=d("Column"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Ht]),_:1},16),e("div",Jt,[e("div",Xt,[t(n,{modelValue:l.size,"onUpdate:modelValue":i[0]||(i[0]=u=>l.size=u),options:l.sizeOptions,optionLabel:"label",dataKey:"label"},null,8,["modelValue","options"])]),t(m,{value:l.products,class:U(`p-datatable-${l.size.class}`),tableStyle:"min-width: 50rem"},{default:r(()=>[t(s,{field:"code",header:"Code"}),t(s,{field:"name",header:"Name"}),t(s,{field:"category",header:"Category"}),t(s,{field:"quantity",header:"Quantity"})]),_:1},8,["value","class"])]),t(y,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const ea=M(jt,[["render",Zt]]),ta={data(){return{customers:null,selectedCustomer:null,filters:null,representatives:[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}],statuses:["unqualified","qualified","new","negotiation","renewal","proposal"],code:{basic:`<DataTable v-model:filters="filters" v-model:selection="selectedCustomer" :value="customers"
    stateStorage="session" stateKey="dt-state-demo-session" paginator :rows="5" filterDisplay="menu"
    selectionMode="single" dataKey="id" :globalFilterFields="['name', 'country.name', 'representative.name', 'status']" tableStyle="min-width: 50rem">
    <template #header>
        <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global'].value" placeholder="Global Search" />
        </span>
    </template>
    <Column field="name" header="Name" sortable style="width: 25%">
        <template #filter="{ filterModel }">
            <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
        </template>
    </Column>
    <Column header="Country" sortable sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width: 25%">
        <template #body="{ data }">
            <div class="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                <span>{{ data.country.name }}</span>
            </div>
        </template>
        <template #filter="{ filterModel }">
            <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by country" />
        </template>
    </Column>
    <Column header="Representative" sortable filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="width: 25%">
        <template #body="{ data }">
            <div class="flex align-items-center gap-2">
                <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                <span>{{ data.representative.name }}</span>
            </div>
        </template>
        <template #filter="{ filterModel }">
            <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                <template #option="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                        <span>{{ slotProps.option.name }}</span>
                    </div>
                </template>
            </MultiSelect>
        </template>
    </Column>
    <Column field="status" header="Status" sortable filterMatchMode="equals" style="width: 25%">
        <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
        <template #filter="{ filterModel }">
            <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Select One" class="p-column-filter" showClear>
                <template #option="slotProps">
                    <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                </template>
            </Dropdown>
        </template>
    </Column>
    <template #empty> No customers found. </template>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable v-model:filters="filters" v-model:selection="selectedCustomer" :value="customers"
                stateStorage="session" stateKey="dt-state-demo-session" paginator :rows="5" filterDisplay="menu"
                selectionMode="single" dataKey="id" :globalFilterFields="['name', 'country.name', 'representative.name', 'status']" tableStyle="min-width: 50rem">
            <template #header>
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText v-model="filters['global'].value" placeholder="Global Search" />
                </span>
            </template>
            <Column field="name" header="Name" sortable style="width: 25%">
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" sortable sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width: 25%">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by country" />
                </template>
            </Column>
            <Column header="Representative" sortable filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="width: 25%">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="status" header="Status" sortable filterMatchMode="equals" style="width: 25%">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Select One" class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <template #empty> No customers found. </template>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

export default {
    data() {
        return {
            customers: null,
            selectedCustomer: null,
            filters: null,
            representatives: [
                { name: 'Amy Elsner', image: 'amyelsner.png' },
                { name: 'Anna Fali', image: 'annafali.png' },
                { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
                { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
                { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
                { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
                { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
                { name: 'Onyama Limba', image: 'onyamalimba.png' },
                { name: 'Stephen Shaw', image: 'stephenshaw.png' },
                { name: 'XuXue Feng', image: 'xuxuefeng.png' }
            ],
            statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']
        };
    },
    created() {
        this.initFilters();
    },
    mounted() {
        CustomerService.getCustomersSmall().then((data) => (this.customers = data));
    },
    methods: {
        initFilters() {
            this.filters = {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
            };
        },
        getSeverity(status) {
            switch (status) {
                case 'unqualified':
                    return 'danger';

                case 'qualified':
                    return 'success';

                case 'new':
                    return 'info';

                case 'negotiation':
                    return 'warning';

                case 'renewal':
                    return null;
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable v-model:filters="filters" v-model:selection="selectedCustomer" :value="customers"
                stateStorage="session" stateKey="dt-state-demo-session" paginator :rows="5" filterDisplay="menu"
                selectionMode="single" dataKey="id" :globalFilterFields="['name', 'country.name', 'representative.name', 'status']" tableStyle="min-width: 50rem">
            <template #header>
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText v-model="filters['global'].value" placeholder="Global Search" />
                </span>
            </template>
            <Column field="name" header="Name" sortable style="width: 25%">
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" sortable sortField="country.name" filterField="country.name" filterMatchMode="contains" style="width: 25%">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by country" />
                </template>
            </Column>
            <Column header="Representative" sortable filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="width: 25%">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="status" header="Status" sortable filterMatchMode="equals" style="width: 25%">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Select One" class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <template #empty> No customers found. </template>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

const customers = ref();
const selectedCustomer = ref();
const filters = ref(
    {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    }
);
const representatives = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);

onMounted(() => {
    CustomerService.getCustomersSmall().then((data) => (customers.value = data));
});

const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};

<\/script>`,data:`
/* CustomerService */
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`}}},created(){this.initFilters()},mounted(){V.getCustomersSmall().then(a=>this.customers=a)},methods:{initFilters(){this.filters={global:{value:null,matchMode:N.CONTAINS},name:{operator:L.AND,constraints:[{value:null,matchMode:N.STARTS_WITH}]},"country.name":{operator:L.AND,constraints:[{value:null,matchMode:N.STARTS_WITH}]},representative:{value:null,matchMode:N.IN},status:{operator:L.OR,constraints:[{value:null,matchMode:N.EQUALS}]}}},getSeverity(a){switch(a){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}}},aa=e("p",null,"Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using the last settings.",-1),la=e("p",null,[o(" Change the state of the table e.g paginate, navigate away and then return to this table again to test this feature, the setting is set as "),e("i",null,"session"),o(" with the "),e("i",null,"stateStorage"),o(" property so that Table retains the state until the browser is closed. Other alternative is "),e("i",null,"local"),o(" referring to "),e("i",null,"localStorage"),o(" for an extended lifetime. ")],-1),oa={class:"card"},ra={class:"p-input-icon-left"},na=e("i",{class:"pi pi-search"},null,-1),ia={class:"flex align-items-center gap-2"},sa={class:"flex align-items-center gap-2"},da=["alt","src"],ca={class:"flex align-items-center gap-2"},ua=["alt","src"];function ma(a,i,h,S,l,c){const p=k,n=d("InputText"),s=d("Column"),m=d("MultiSelect"),y=d("Tag"),u=d("Dropdown"),D=d("DataTable"),w=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[aa,la]),_:1},16),e("div",oa,[t(D,{filters:l.filters,"onUpdate:filters":i[1]||(i[1]=C=>l.filters=C),selection:l.selectedCustomer,"onUpdate:selection":i[2]||(i[2]=C=>l.selectedCustomer=C),value:l.customers,stateStorage:"session",stateKey:"dt-state-demo-session",paginator:"",rows:5,filterDisplay:"menu",selectionMode:"single",dataKey:"id",globalFilterFields:["name","country.name","representative.name","status"],tableStyle:"min-width: 50rem"},{header:r(()=>[e("span",ra,[na,t(n,{modelValue:l.filters.global.value,"onUpdate:modelValue":i[0]||(i[0]=C=>l.filters.global.value=C),placeholder:"Global Search"},null,8,["modelValue"])])]),empty:r(()=>[o(" No customers found. ")]),default:r(()=>[t(s,{field:"name",header:"Name",sortable:"",style:{width:"25%"}},{filter:r(({filterModel:C})=>[t(n,{modelValue:C.value,"onUpdate:modelValue":g=>C.value=g,type:"text",class:"p-column-filter",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(s,{header:"Country",sortable:"",sortField:"country.name",filterField:"country.name",filterMatchMode:"contains",style:{width:"25%"}},{body:r(({data:C})=>[e("div",ia,[e("img",{alt:"flag",src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:U(`flag flag-${C.country.code}`),style:{width:"24px"}},null,2),e("span",null,T(C.country.name),1)])]),filter:r(({filterModel:C})=>[t(n,{modelValue:C.value,"onUpdate:modelValue":g=>C.value=g,type:"text",class:"p-column-filter",placeholder:"Search by country"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(s,{header:"Representative",sortable:"",filterField:"representative",showFilterMatchModes:!1,filterMenuStyle:{width:"14rem"},style:{width:"25%"}},{body:r(({data:C})=>[e("div",sa,[e("img",{alt:C.representative.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${C.representative.image}`,style:{width:"32px"}},null,8,da),e("span",null,T(C.representative.name),1)])]),filter:r(({filterModel:C})=>[t(m,{modelValue:C.value,"onUpdate:modelValue":g=>C.value=g,options:l.representatives,optionLabel:"name",placeholder:"Any",class:"p-column-filter"},{option:r(g=>[e("div",ca,[e("img",{alt:g.option.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${g.option.image}`,style:{width:"32px"}},null,8,ua),e("span",null,T(g.option.name),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),t(s,{field:"status",header:"Status",sortable:"",filterMatchMode:"equals",style:{width:"25%"}},{body:r(({data:C})=>[t(y,{value:C.status,severity:c.getSeverity(C.status)},null,8,["value","severity"])]),filter:r(({filterModel:C})=>[t(u,{modelValue:C.value,"onUpdate:modelValue":g=>C.value=g,options:l.statuses,placeholder:"Select One",class:"p-column-filter",showClear:""},{option:r(g=>[t(y,{value:g.option,severity:c.getSeverity(g.option)},null,8,["value","severity"])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1})]),_:1},8,["filters","selection","value","globalFilterFields"])]),t(w,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const pa=M(ta,[["render",ma]]),ha={data(){return{products:null,code:{basic:`<DataTable :value="products" stripedRows tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products" stripedRows tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products" stripedRows tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},fa=e("p",null,[o("Alternating rows are displayed when "),e("i",null,"stripedRows"),o(" property is present.")],-1),va={class:"card"};function ya(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[fa]),_:1},16),e("div",va,[t(s,{value:l.products,stripedRows:"",tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"code",header:"Code"}),t(n,{field:"name",header:"Name"}),t(n,{field:"category",header:"Category"}),t(n,{field:"quantity",header:"Quantity"})]),_:1},8,["value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const ga=M(ha,[["render",ya]]),Ca={data(){return{products:null,code:{basic:`<DataTable :value="products" tableStyle="min-width: 50rem">
    <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <span class="text-xl text-900 font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    </template>
    <Column field="name" header="Name"></Column>
    <Column header="Image">
        <template #body="slotProps">
            <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-6rem shadow-2 border-round" />
        </template>
    </Column>
    <Column field="price" header="Price">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
        </template>
    </Column>
    <Column field="category" header="Category"></Column>
    <Column field="rating" header="Reviews">
        <template #body="slotProps">
            <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
        </template>
    </Column>
    <Column header="Status">
        <template #body="slotProps">
            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
        </template>
    </Column>
    <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Products</span>
                    <Button icon="pi pi-refresh" rounded raised />
                </div>
            </template>
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-6rem shadow-2 border-round" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Products</span>
                    <Button icon="pi pi-refresh" rounded raised />
                </div>
            </template>
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="w-6rem shadow-2 border-round" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
            <Column field="rating" header="Reviews">
                <template #body="slotProps">
                    <Rating :modelValue="slotProps.data.rating" readonly :cancel="false" />
                </template>
            </Column>
            <Column header="Status">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
                </template>
            </Column>
            <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)},methods:{formatCurrency(a){return a.toLocaleString("en-US",{style:"currency",currency:"USD"})},getSeverity(a){switch(a.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},ba=e("p",null,[o("Custom content at "),e("i",null,"header"),o(" and "),e("i",null,"footer"),o(" sections are supported via templating.")],-1),wa={class:"card"},Sa={class:"flex flex-wrap align-items-center justify-content-between gap-2"},_a=e("span",{class:"text-xl text-900 font-bold"},"Products",-1),xa=["src","alt"];function Pa(a,i,h,S,l,c){const p=k,n=d("Button"),s=d("Column"),m=d("Rating"),y=d("Tag"),u=d("DataTable"),D=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[ba]),_:1},16),e("div",wa,[t(u,{value:l.products,tableStyle:"min-width: 50rem"},{header:r(()=>[e("div",Sa,[_a,t(n,{icon:"pi pi-refresh",rounded:"",raised:""})])]),footer:r(()=>[o(" In total there are "+T(l.products?l.products.length:0)+" products. ",1)]),default:r(()=>[t(s,{field:"name",header:"Name"}),t(s,{header:"Image"},{body:r(w=>[e("img",{src:`https://primefaces.org/cdn/primevue/images/product/${w.data.image}`,alt:w.data.image,class:"w-6rem shadow-2 border-round"},null,8,xa)]),_:1}),t(s,{field:"price",header:"Price"},{body:r(w=>[o(T(c.formatCurrency(w.data.price)),1)]),_:1}),t(s,{field:"category",header:"Category"}),t(s,{field:"rating",header:"Reviews"},{body:r(w=>[t(m,{modelValue:w.data.rating,readonly:"",cancel:!1},null,8,["modelValue"])]),_:1}),t(s,{header:"Status"},{body:r(w=>[t(y,{value:w.data.inventoryStatus,severity:c.getSeverity(w.data)},null,8,["value","severity"])]),_:1})]),_:1},8,["value"])]),t(D,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const Ta=M(Ca,[["render",Pa]]),Ma={data(){return{products:null,code:{basic:`<DataTable :value="products" resizableColumns columnResizeMode="expand" showGridlines tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products" resizableColumns columnResizeMode="expand" showGridlines tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products" resizableColumns columnResizeMode="expand" showGridlines tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then(data => products.value = data);
});

const products = ref();
<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},Da=e("p",null,[o("Setting "),e("i",null,"columnResizeMode"),o(" as "),e("i",null,"expand"),o(" changes the table width as well.")],-1),ka={class:"card"};function Ra(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Da]),_:1},16),e("div",ka,[t(s,{value:l.products,resizableColumns:"",columnResizeMode:"expand",showGridlines:"",tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"code",header:"Code"}),t(n,{field:"name",header:"Name"}),t(n,{field:"category",header:"Category"}),t(n,{field:"quantity",header:"Quantity"})]),_:1},8,["value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const Fa=M(Ma,[["render",Ra]]),Ia={data(){return{products:null,code:{basic:`<DataTable :value="products" resizableColumns columnResizeMode="fit" showGridlines tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products" resizableColumns columnResizeMode="fit" showGridlines tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products" resizableColumns columnResizeMode="fit" showGridlines tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then(data => products.value = data);
});

const products = ref();
<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},Na=e("p",null,[o(" Columns can be resized with drag and drop when "),e("i",null,"resizableColumns"),o(" is enabled. Default resize mode is "),e("i",null,"fit"),o(" that does not change the overall table width. ")],-1),$a={class:"card"};function Ba(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Na]),_:1},16),e("div",$a,[t(s,{value:l.products,resizableColumns:"",columnResizeMode:"fit",showGridlines:"",tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"code",header:"Code"}),t(n,{field:"name",header:"Name"}),t(n,{field:"category",header:"Category"}),t(n,{field:"quantity",header:"Quantity"})]),_:1},8,["value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const Aa=M(Ia,[["render",Ba]]);const Va={data(){return{products:null,columns:[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"quantity",header:"Quantity"},{field:"price",header:"Price"}],code:{basic:`<DataTable :value="products" editMode="cell" @cell-edit-complete="onCellEditComplete" tableClass="editable-cells-table" tableStyle="min-width: 50rem">
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%">
        <template #body="{ data, field }">
            {{ field === 'price' ? formatCurrency(data[field]) : data[field] }}
        </template>
        <template #editor="{ data, field }">
            <template v-if="field !== 'price'">
                <InputText v-model="data[field]" autofocus />
            </template>
            <template v-else>
                <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" autofocus />
            </template>
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div class="card p-fluid">
        <DataTable :value="products" editMode="cell" @cell-edit-complete="onCellEditComplete" tableClass="editable-cells-table" tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%">
                <template #body="{ data, field }">
                    {{ field === 'price' ? formatCurrency(data[field]) : data[field] }}
                </template>
                <template #editor="{ data, field }">
                    <template v-if="field !== 'price'">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                    <template v-else>
                        <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" autofocus />
                    </template>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            columns: [
                { field: 'code', header: 'Code' },
                { field: 'name', header: 'Name' },
                { field: 'quantity', header: 'Quantity' },
                { field: 'price', header: 'Price' }
            ]
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        onCellEditComplete(event) {
            let { data, newValue, field } = event;

            switch (field) {
                case 'quantity':
                case 'price':
                    if (this.isPositiveInteger(newValue)) data[field] = newValue;
                    else event.preventDefault();
                    break;

                default:
                    if (newValue.trim().length > 0) data[field] = newValue;
                    else event.preventDefault();
                    break;
            }
        },
        isPositiveInteger(val) {
            let str = String(val);

            str = str.trim();

            if (!str) {
                return false;
            }

            str = str.replace(/^0+/, '') || '0';
            var n = Math.floor(Number(str));

            return n !== Infinity && String(n) === str && n >= 0;
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        }
    }
};
<\/script>

<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0;
    padding-bottom: 0;
}
</style>`,composition:`<template>
    <div class="card p-fluid">
        <DataTable :value="products" editMode="cell" @cell-edit-complete="onCellEditComplete" tableClass="editable-cells-table" tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%">
                <template #body="{ data, field }">
                    {{ field === 'price' ? formatCurrency(data[field]) : data[field] }}
                </template>
                <template #editor="{ data, field }">
                    <template v-if="field !== 'price'">
                        <InputText v-model="data[field]" autofocus />
                    </template>
                    <template v-else>
                        <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" autofocus />
                    </template>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

const products = ref();
const columns = ref([
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'quantity', header: 'Quantity' },
    { field: 'price', header: 'Price' }
]);

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const onCellEditComplete = (event) => {
    let { data, newValue, field } = event;

    switch (field) {
        case 'quantity':
        case 'price':
            if (isPositiveInteger(newValue)) data[field] = newValue;
            else event.preventDefault();
            break;

        default:
            if (newValue.trim().length > 0) data[field] = newValue;
            else event.preventDefault();
            break;
    }
};
const isPositiveInteger = (val) => {
    let str = String(val);

    str = str.trim();

    if (!str) {
        return false;
    }

    str = str.replace(/^0+/, '') || '0';
    var n = Math.floor(Number(str));

    return n !== Infinity && String(n) === str && n >= 0;
};
const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

<\/script>

<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0;
    padding-bottom: 0;
}
</style>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)},methods:{onCellEditComplete(a){let{data:i,newValue:h,field:S}=a;switch(S){case"quantity":case"price":this.isPositiveInteger(h)?i[S]=h:a.preventDefault();break;default:h.trim().length>0?i[S]=h:a.preventDefault();break}},isPositiveInteger(a){let i=String(a);if(i=i.trim(),!i)return!1;i=i.replace(/^0+/,"")||"0";var h=Math.floor(Number(i));return h!==1/0&&String(h)===i&&h>=0},formatCurrency(a){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a)}}},La=a=>(Q("data-v-b7c93c0d"),a=a(),W(),a),Ua=La(()=>e("p",null,[o("Cell editing is enabled by setting "),e("i",null,"editMode"),o(" as "),e("i",null,"cell"),o(", defining input elements with "),e("i",null,"editor"),o(" templating of a Column and implementing "),e("i",null,"cell-edit-complete"),o(" to update the state.")],-1)),Oa={class:"card p-fluid"};function za(a,i,h,S,l,c){const p=k,n=d("InputText"),s=d("InputNumber"),m=d("Column"),y=d("DataTable"),u=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Ua]),_:1},16),e("div",Oa,[t(y,{value:l.products,editMode:"cell",onCellEditComplete:c.onCellEditComplete,tableClass:"editable-cells-table",tableStyle:"min-width: 50rem"},{default:r(()=>[(b(!0),_(x,null,K(l.columns,D=>(b(),O(m,{key:D.field,field:D.field,header:D.header,style:{width:"25%"}},{body:r(({data:w,field:C})=>[o(T(C==="price"?c.formatCurrency(w[C]):w[C]),1)]),editor:r(({data:w,field:C})=>[C!=="price"?(b(),O(n,{key:0,modelValue:w[C],"onUpdate:modelValue":g=>w[C]=g,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])):(b(),O(s,{key:1,modelValue:w[C],"onUpdate:modelValue":g=>w[C]=g,mode:"currency",currency:"USD",locale:"en-US",autofocus:""},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["field","header"]))),128))]),_:1},8,["value","onCellEditComplete"])]),t(u,{code:l.code,service:["ProductService"],dependencies:{sass:"1.45.0","sass-loader":"8.0.2"}},null,8,["code"])],64)}const qa=M(Va,[["render",za],["__scopeId","data-v-b7c93c0d"]]);const Ka={data(){return{products:null,columns:null,filters:{code:{value:null,matchMode:N.STARTS_WITH},name:{value:null,matchMode:N.STARTS_WITH},quantity:{value:null,matchMode:N.STARTS_WITH},price:{value:null,matchMode:N.STARTS_WITH}},code:{basic:`<DataTable v-model:filters="filters" :value="products" editMode="cell" tableClass="editable-cells-table" 
        @cell-edit-complete="onCellEditComplete" filterDisplay="row" tableStyle="min-width: 50rem">
    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%" sortable filter>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" v-tooltip.top.focus="'Hit enter key to filter'" type="text" @keydown.enter="filterCallback()" class="p-column-filter" />
        </template>
        <template #editor="{ data, field }">
            <InputText v-model="data[field]" autofocus />
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div class="card p-fluid">
        <DataTable v-model:filters="filters" :value="products" editMode="cell" tableClass="editable-cells-table" 
                @cell-edit-complete="onCellEditComplete" filterDisplay="row" tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%" sortable filter>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" v-tooltip.top.focus="'Hit enter key to filter'" type="text" @keydown.enter="filterCallback()" class="p-column-filter" />
                </template>
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" autofocus />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api';
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            columns: null,
            filters: {
                code: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                quantity: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                price: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
            }
        };
    },
    created() {
        this.columns = [
            {field: 'code', header: 'Code'},
            {field: 'name', header: 'Name'},
            {field: 'quantity', header: 'Quantity'},
            {field: 'price', header: 'Price'}
        ];
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        onCellEditComplete(event) {
            let { data, newValue, field } = event;

            switch (field) {
                case 'quantity':
                case 'price':
                    if (this.isPositiveInteger(newValue))
                        data[field] = newValue;
                    else
                        event.preventDefault();
                break;

                default:
                    if (newValue.trim().length > 0)
                        data[field] = newValue;
                    else
                        event.preventDefault();
                break;
            }
        }
    }
};
<\/script>

<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0;
    padding-bottom: 0;
}
</style>`,composition:`<template>
    <div class="card p-fluid">
        <DataTable v-model:filters="filters" :value="products" editMode="cell" tableClass="editable-cells-table" 
                @cell-edit-complete="onCellEditComplete" filterDisplay="row" tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header" style="width: 25%" sortable filter>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" v-tooltip.top.focus="'Hit enter key to filter'" type="text" @keydown.enter="filterCallback()" class="p-column-filter" />
                </template>
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" autofocus />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { ProductService } from '@/service/ProductService';

const products = ref();
const columns = ref([
    {field: 'code', header: 'Code'},
    {field: 'name', header: 'Name'},
    {field: 'quantity', header: 'Quantity'},
    {field: 'price', header: 'Price'}
]);
const filters = ref({
    'code': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
    'name': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
    'quantity': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
    'price': {value: null, matchMode: FilterMatchMode.STARTS_WITH}
});

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const onCellEditComplete = (event) => {
    let { data, newValue, field } = event;

    switch (field) {
        case 'quantity':
        case 'price':
            if (isPositiveInteger(newValue))
                data[field] = newValue;
            else
                event.preventDefault();
        break;

        default:
            if (newValue.trim().length > 0)
                data[field] = newValue;
            else
                event.preventDefault();
        break;
    }
};

<\/script>

<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0;
    padding-bottom: 0;
}
</style>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`}}},created(){this.columns=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"quantity",header:"Quantity"},{field:"price",header:"Price"}]},mounted(){B.getProductsMini().then(a=>this.products=a)},methods:{onCellEditComplete(a){let{data:i,newValue:h,field:S}=a;switch(S){case"quantity":case"price":this.isPositiveInteger(h)?i[S]=h:a.preventDefault();break;default:h.trim().length>0?i[S]=h:a.preventDefault();break}}}},Ea=a=>(Q("data-v-409db3d7"),a=a(),W(),a),Ya=Ea(()=>e("p",null,"Cell Editing with Sorting and Filter",-1)),Ga={class:"card p-fluid"};function Qa(a,i,h,S,l,c){const p=k,n=d("InputText"),s=d("Column"),m=d("DataTable"),y=I,u=ae("tooltip");return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Ya]),_:1},16),e("div",Ga,[t(m,{filters:l.filters,"onUpdate:filters":i[0]||(i[0]=D=>l.filters=D),value:l.products,editMode:"cell",onCellEditComplete:c.onCellEditComplete,filterDisplay:"row",tableClass:"editable-cells-table",tableStyle:"min-width: 50rem"},{default:r(()=>[(b(!0),_(x,null,K(l.columns,D=>(b(),O(s,{key:D.field,field:D.field,header:D.header,style:{width:"25%"},sortable:"",filter:""},{filter:r(({filterModel:w,filterCallback:C})=>[le(t(n,{modelValue:w.value,"onUpdate:modelValue":g=>w.value=g,type:"text",onKeydown:q(g=>C(),["enter"]),class:"p-column-filter"},null,8,["modelValue","onUpdate:modelValue","onKeydown"]),[[u,"Hit enter key to filter",void 0,{top:!0,focus:!0}]])]),editor:r(({data:w,field:C})=>[t(n,{modelValue:w[C],"onUpdate:modelValue":g=>w[C]=g,autofocus:""},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["field","header"]))),128))]),_:1},8,["filters","value","onCellEditComplete"])]),t(y,{code:l.code,service:["ProductService"],dependencies:{sass:"1.45.0","sass-loader":"8.0.2"}},null,8,["code"])],64)}const Wa=M(Ka,[["render",Qa],["__scopeId","data-v-409db3d7"]]);const ja={data(){return{products:null,editingRows:[],statuses:[{label:"In Stock",value:"INSTOCK"},{label:"Low Stock",value:"LOWSTOCK"},{label:"Out of Stock",value:"OUTOFSTOCK"}],code:{basic:`<DataTable v-model:editingRows="editingRows" :value="products" editMode="row" dataKey="id"
        @row-edit-save="onRowEditSave" tableClass="editable-cells-table" tableStyle="min-width: 50rem">
    <Column field="code" header="Code" style="width: 20%">
        <template #editor="{ data, field }">
            <InputText v-model="data[field]" />
        </template>
    </Column>
    <Column field="name" header="Name" style="width: 20%">
        <template #editor="{ data, field }">
            <InputText v-model="data[field]" />
        </template>
    </Column>
    <Column field="inventoryStatus" header="Status" style="width: 20%">
        <template #editor="{ data, field }">
            <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                <template #option="slotProps">
                    <Tag :value="slotProps.option.value" :severity="getStatusLabel(slotProps.option.value)" />
                </template>
            </Dropdown>
        </template>
        <template #body="slotProps">
            <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
        </template>
    </Column>
    <Column field="price" header="Price" style="width: 20%">
        <template #body="{ data, field }">
            {{ formatCurrency(data[field]) }}
        </template>
        <template #editor="{ data, field }">
            <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" />
        </template>
    </Column>
    <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
</DataTable>`,options:`<template>
    <div class="card p-fluid">
        <DataTable v-model:editingRows="editingRows" :value="products" editMode="row" dataKey="id"
                @row-edit-save="onRowEditSave" tableClass="editable-cells-table" tableStyle="min-width: 50rem">
            <Column field="code" header="Code" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                </template>
            </Column>
            <Column field="name" header="Name" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                </template>
            </Column>
            <Column field="inventoryStatus" header="Status" style="width: 20%">
                <template #editor="{ data, field }">
                    <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                        <template #option="slotProps">
                            <Tag :value="slotProps.option.value" :severity="getStatusLabel(slotProps.option.value)" />
                        </template>
                    </Dropdown>
                </template>
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
                </template>
            </Column>
            <Column field="price" header="Price" style="width: 20%">
                <template #body="{ data, field }">
                    {{ formatCurrency(data[field]) }}
                </template>
                <template #editor="{ data, field }">
                    <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" />
                </template>
            </Column>
            <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            editingRows: [],
            statuses: [
                { label: 'In Stock', value: 'INSTOCK' },
                { label: 'Low Stock', value: 'LOWSTOCK' },
                { label: 'Out of Stock', value: 'OUTOFSTOCK' }
            ]
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        onRowEditSave(event) {
            let { newData, index } = event;

            this.products[index] = newData;
        },
        getStatusLabel(status) {
            switch (status) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        }
    }
};
<\/script>

<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
}
</style>`,composition:`<template>
    <div class="card p-fluid">
        <DataTable v-model:editingRows="editingRows" :value="products" editMode="row" dataKey="id"
                @row-edit-save="onRowEditSave" tableClass="editable-cells-table" tableStyle="min-width: 50rem">
            <Column field="code" header="Code" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                </template>
            </Column>
            <Column field="name" header="Name" style="width: 20%">
                <template #editor="{ data, field }">
                    <InputText v-model="data[field]" />
                </template>
            </Column>
            <Column field="inventoryStatus" header="Status" style="width: 20%">
                <template #editor="{ data, field }">
                    <Dropdown v-model="data[field]" :options="statuses" optionLabel="label" optionValue="value" placeholder="Select a Status">
                        <template #option="slotProps">
                            <Tag :value="slotProps.option.value" :severity="getStatusLabel(slotProps.option.value)" />
                        </template>
                    </Dropdown>
                </template>
                <template #body="slotProps">
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
                </template>
            </Column>
            <Column field="price" header="Price" style="width: 20%">
                <template #body="{ data, field }">
                    {{ formatCurrency(data[field]) }}
                </template>
                <template #editor="{ data, field }">
                    <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" />
                </template>
            </Column>
            <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

const products = ref();
const editingRows = ref([]);
const statuses = ref([
    { label: 'In Stock', value: 'INSTOCK' },
    { label: 'Low Stock', value: 'LOWSTOCK' },
    { label: 'Out of Stock', value: 'OUTOFSTOCK' }
]);

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const onRowEditSave = (event) => {
    let { newData, index } = event;

    products.value[index] = newData;
};
const getStatusLabel = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

<\/script>

<style lang="scss" scoped>
::v-deep(.editable-cells-table td.p-cell-editing) {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
}
</style>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)},methods:{onRowEditSave(a){let{newData:i,index:h}=a;this.products[h]=i},getStatusLabel(a){switch(a){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}},formatCurrency(a){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a)}}},Ha=a=>(Q("data-v-34eb416f"),a=a(),W(),a),Ja=Ha(()=>e("p",null,[o(" Row editing is configured with setting "),e("i",null,"editMode"),o(" as "),e("i",null,"row"),o(" and defining "),e("i",null,"editingRows"),o(" with the v-model directive to hold the reference of the editing rows. Similarly with cell edit mode, defining input elements with "),e("i",null,"editor"),o(" slot of a Column and implementing "),e("i",null,"row-edit-save"),o(" are necessary to update the state. The column to control the editing state should have "),e("i",null,"editor"),o(" templating applied. ")],-1)),Xa={class:"card p-fluid"};function Za(a,i,h,S,l,c){const p=k,n=d("InputText"),s=d("Column"),m=d("Tag"),y=d("Dropdown"),u=d("InputNumber"),D=d("DataTable"),w=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Ja]),_:1},16),e("div",Xa,[t(D,{editingRows:l.editingRows,"onUpdate:editingRows":i[0]||(i[0]=C=>l.editingRows=C),value:l.products,editMode:"row",dataKey:"id",onRowEditSave:c.onRowEditSave,tableClass:"editable-cells-table",tableStyle:"min-width: 50rem"},{default:r(()=>[t(s,{field:"code",header:"Code",style:{width:"20%"}},{editor:r(({data:C,field:g})=>[t(n,{modelValue:C[g],"onUpdate:modelValue":A=>C[g]=A},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(s,{field:"name",header:"Name",style:{width:"20%"}},{editor:r(({data:C,field:g})=>[t(n,{modelValue:C[g],"onUpdate:modelValue":A=>C[g]=A},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(s,{field:"inventoryStatus",header:"Status",style:{width:"20%"}},{editor:r(({data:C,field:g})=>[t(y,{modelValue:C[g],"onUpdate:modelValue":A=>C[g]=A,options:l.statuses,optionLabel:"label",optionValue:"value",placeholder:"Select a Status"},{option:r(A=>[t(m,{value:A.option.value,severity:c.getStatusLabel(A.option.value)},null,8,["value","severity"])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),body:r(C=>[t(m,{value:C.data.inventoryStatus,severity:c.getStatusLabel(C.data.inventoryStatus)},null,8,["value","severity"])]),_:1}),t(s,{field:"price",header:"Price",style:{width:"20%"}},{body:r(({data:C,field:g})=>[o(T(c.formatCurrency(C[g])),1)]),editor:r(({data:C,field:g})=>[t(u,{modelValue:C[g],"onUpdate:modelValue":A=>C[g]=A,mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(s,{rowEditor:!0,style:{width:"10%","min-width":"8rem"},bodyStyle:"text-align:center"})]),_:1},8,["editingRows","value","onRowEditSave"])]),t(w,{code:l.code,service:["ProductService"],dependencies:{sass:"1.45.0","sass-loader":"8.0.2"}},null,8,["code"])],64)}const el=M(ja,[["render",Za],["__scopeId","data-v-34eb416f"]]),tl={data(){return{customers:null,filters:null,representatives:[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}],statuses:["unqualified","qualified","new","negotiation","renewal","proposal"],loading:!0,code:{basic:`<DataTable v-model:filters="filters" :value="customers" paginator showGridlines :rows="10" dataKey="id"
        filterDisplay="menu" :loading="loading" :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']">
    <template #header>
        <div class="flex justify-content-between">
            <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </span>
        </div>
    </template>
    <template #empty> No customers found. </template>
    <template #loading> Loading customers data. Please wait. </template>
    <Column field="name" header="Name" style="min-width: 12rem">
        <template #body="{ data }">
            {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
            <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
        </template>
    </Column>
    <Column header="Country" filterField="country.name" style="min-width: 12rem">
        <template #body="{ data }">
            <div class="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                <span>{{ data.country.name }}</span>
            </div>
        </template>
        <template #filter="{ filterModel }">
            <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by country" />
        </template>
        <template #filterclear="{ filterCallback }">
            <Button type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></Button>
        </template>
        <template #filterapply="{ filterCallback }">
            <Button type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></Button>
        </template>
        <template #filterfooter>
            <div class="px-3 pt-0 pb-3 text-center">Customized Buttons</div>
        </template>
    </Column>
    <Column header="Agent" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
        <template #body="{ data }">
            <div class="flex align-items-center gap-2">
                <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                <span>{{ data.representative.name }}</span>
            </div>
        </template>
        <template #filter="{ filterModel }">
            <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                <template #option="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                        <span>{{ slotProps.option.name }}</span>
                    </div>
                </template>
            </MultiSelect>
        </template>
    </Column>
    <Column header="Date" filterField="date" dataType="date" style="min-width: 10rem">
        <template #body="{ data }">
            {{ formatDate(data.date) }}
        </template>
        <template #filter="{ filterModel }">
            <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
        </template>
    </Column>
    <Column header="Balance" filterField="balance" dataType="numeric" style="min-width: 10rem">
        <template #body="{ data }">
            {{ formatCurrency(data.balance) }}
        </template>
        <template #filter="{ filterModel }">
            <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
        </template>
    </Column>
    <Column header="Status" field="status" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
        <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
        <template #filter="{ filterModel }">
            <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Select One" class="p-column-filter" showClear>
                <template #option="slotProps">
                    <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                </template>
            </Dropdown>
        </template>
    </Column>
    <Column field="activity" header="Activity" :showFilterMatchModes="false" style="min-width: 12rem">
        <template #body="{ data }">
            <ProgressBar :value="data.activity" :showValue="false" style="height: 6px"></ProgressBar>
        </template>
        <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-3"></Slider>
            <div class="flex align-items-center justify-content-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
            </div>
        </template>
    </Column>
    <Column field="verified" header="Verified" dataType="boolean" bodyClass="text-center" style="min-width: 8rem">
        <template #body="{ data }">
            <i class="pi" :class="{ 'pi-check-circle text-green-500 ': data.verified, 'pi-times-circle text-red-500': !data.verified }"></i>
        </template>
        <template #filter="{ filterModel }">
            <label for="verified-filter" class="font-bold"> Verified </label>
            <TriStateCheckbox v-model="filterModel.value" inputId="verified-filter" />
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator showGridlines :rows="10" dataKey="id"
                filterDisplay="menu" :loading="loading" :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']">
            <template #header>
                <div class="flex justify-content-between">
                    <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </span>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by country" />
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></Button>
                </template>
                <template #filterfooter>
                    <div class="px-3 pt-0 pb-3 text-center">Customized Buttons</div>
                </template>
            </Column>
            <Column header="Agent" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column header="Date" filterField="date" dataType="date" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatDate(data.date) }}
                </template>
                <template #filter="{ filterModel }">
                    <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
                </template>
            </Column>
            <Column header="Balance" filterField="balance" dataType="numeric" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
                <template #filter="{ filterModel }">
                    <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                </template>
            </Column>
            <Column header="Status" field="status" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Select One" class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="activity" header="Activity" :showFilterMatchModes="false" style="min-width: 12rem">
                <template #body="{ data }">
                    <ProgressBar :value="data.activity" :showValue="false" style="height: 6px"></ProgressBar>
                </template>
                <template #filter="{ filterModel }">
                    <Slider v-model="filterModel.value" range class="m-3"></Slider>
                    <div class="flex align-items-center justify-content-between px-2">
                        <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
                        <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
                    </div>
                </template>
            </Column>
            <Column field="verified" header="Verified" dataType="boolean" bodyClass="text-center" style="min-width: 8rem">
                <template #body="{ data }">
                    <i class="pi" :class="{ 'pi-check-circle text-green-500 ': data.verified, 'pi-times-circle text-red-500': !data.verified }"></i>
                </template>
                <template #filter="{ filterModel }">
                    <label for="verified-filter" class="font-bold"> Verified </label>
                    <TriStateCheckbox v-model="filterModel.value" inputId="verified-filter" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

export default {
    data() {
        return {
            customers: null,
            filters: null,
            representatives: [
                { name: 'Amy Elsner', image: 'amyelsner.png' },
                { name: 'Anna Fali', image: 'annafali.png' },
                { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
                { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
                { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
                { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
                { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
                { name: 'Onyama Limba', image: 'onyamalimba.png' },
                { name: 'Stephen Shaw', image: 'stephenshaw.png' },
                { name: 'XuXue Feng', image: 'xuxuefeng.png' }
            ],
            statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
            loading: true
        };
    },
    created() {
        this.initFilters();
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = this.getCustomers(data);
            this.loading = false;
        });
    },
    methods: {
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        clearFilter() {
            this.initFilters();
        },
        initFilters() {
            this.filters = {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
                balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
                verified: { value: null, matchMode: FilterMatchMode.EQUALS }
            };
        },
        getCustomers(data) {
            return [...(data || [])].map((d) => {
                d.date = new Date(d.date);

                return d;
            });
        },
        getSeverity(status) {
            switch (status) {
                case 'unqualified':
                    return 'danger';

                case 'qualified':
                    return 'success';

                case 'new':
                    return 'info';

                case 'negotiation':
                    return 'warning';

                case 'renewal':
                    return null;
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator showGridlines :rows="10" dataKey="id"
                filterDisplay="menu" :loading="loading" :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']">
            <template #header>
                <div class="flex justify-content-between">
                    <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </span>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by country" />
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></Button>
                </template>
                <template #filterfooter>
                    <div class="px-3 pt-0 pb-3 text-center">Customized Buttons</div>
                </template>
            </Column>
            <Column header="Agent" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column header="Date" filterField="date" dataType="date" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatDate(data.date) }}
                </template>
                <template #filter="{ filterModel }">
                    <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
                </template>
            </Column>
            <Column header="Balance" filterField="balance" dataType="numeric" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
                <template #filter="{ filterModel }">
                    <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                </template>
            </Column>
            <Column header="Status" field="status" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Select One" class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="activity" header="Activity" :showFilterMatchModes="false" style="min-width: 12rem">
                <template #body="{ data }">
                    <ProgressBar :value="data.activity" :showValue="false" style="height: 6px"></ProgressBar>
                </template>
                <template #filter="{ filterModel }">
                    <Slider v-model="filterModel.value" range class="m-3"></Slider>
                    <div class="flex align-items-center justify-content-between px-2">
                        <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
                        <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
                    </div>
                </template>
            </Column>
            <Column field="verified" header="Verified" dataType="boolean" bodyClass="text-center" style="min-width: 8rem">
                <template #body="{ data }">
                    <i class="pi" :class="{ 'pi-check-circle text-green-500 ': data.verified, 'pi-times-circle text-red-500': !data.verified }"></i>
                </template>
                <template #filter="{ filterModel }">
                    <label for="verified-filter" class="font-bold"> Verified </label>
                    <TriStateCheckbox v-model="filterModel.value" inputId="verified-filter" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

const customers = ref();
const filters = ref();
const representatives = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
const loading = ref(true);

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
        customers.value = getCustomers(data);
        loading.value = false;
    });
});


const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    };
};

initFilters();

const formatDate = (value) => {
    return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const clearFilter = () => {
    initFilters();
};
const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};
const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};
<\/script>`,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`}}},created(){this.initFilters()},mounted(){V.getCustomersMedium().then(a=>{this.customers=this.getCustomers(a),this.loading=!1})},methods:{formatDate(a){return a.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})},formatCurrency(a){return a.toLocaleString("en-US",{style:"currency",currency:"USD"})},clearFilter(){this.initFilters()},initFilters(){this.filters={global:{value:null,matchMode:N.CONTAINS},name:{operator:L.AND,constraints:[{value:null,matchMode:N.STARTS_WITH}]},"country.name":{operator:L.AND,constraints:[{value:null,matchMode:N.STARTS_WITH}]},representative:{value:null,matchMode:N.IN},date:{operator:L.AND,constraints:[{value:null,matchMode:N.DATE_IS}]},balance:{operator:L.AND,constraints:[{value:null,matchMode:N.EQUALS}]},status:{operator:L.OR,constraints:[{value:null,matchMode:N.EQUALS}]},activity:{value:[0,100],matchMode:N.BETWEEN},verified:{value:null,matchMode:N.EQUALS}}},getCustomers(a){return[...a||[]].map(i=>(i.date=new Date(i.date),i))},getSeverity(a){switch(a){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}}},al=e("p",null,[o("When "),e("i",null,"filterDisplay"),o(" is set as "),e("i",null,"menu"),o(", filtering is done via popups with support for multiple constraints and advanced templating.")],-1),ll={class:"card"},ol={class:"flex justify-content-between"},rl={class:"p-input-icon-left"},nl=e("i",{class:"pi pi-search"},null,-1),il={class:"flex align-items-center gap-2"},sl=e("div",{class:"px-3 pt-0 pb-3 text-center"},"Customized Buttons",-1),dl={class:"flex align-items-center gap-2"},cl=["alt","src"],ul={class:"flex align-items-center gap-2"},ml=["alt","src"],pl={class:"flex align-items-center justify-content-between px-2"},hl=e("label",{for:"verified-filter",class:"font-bold"}," Verified ",-1);function fl(a,i,h,S,l,c){const p=k,n=d("Button"),s=d("InputText"),m=d("Column"),y=d("MultiSelect"),u=d("Calendar"),D=d("InputNumber"),w=d("Tag"),C=d("Dropdown"),g=d("ProgressBar"),A=d("Slider"),$=d("TriStateCheckbox"),z=d("DataTable"),P=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[al]),_:1},16),e("div",ll,[t(z,{filters:l.filters,"onUpdate:filters":i[2]||(i[2]=f=>l.filters=f),value:l.customers,paginator:"",showGridlines:"",rows:10,dataKey:"id",filterDisplay:"menu",loading:l.loading,globalFilterFields:["name","country.name","representative.name","balance","status"]},{header:r(()=>[e("div",ol,[t(n,{type:"button",icon:"pi pi-filter-slash",label:"Clear",outlined:"",onClick:i[0]||(i[0]=f=>c.clearFilter())}),e("span",rl,[nl,t(s,{modelValue:l.filters.global.value,"onUpdate:modelValue":i[1]||(i[1]=f=>l.filters.global.value=f),placeholder:"Keyword Search"},null,8,["modelValue"])])])]),empty:r(()=>[o(" No customers found. ")]),loading:r(()=>[o(" Loading customers data. Please wait. ")]),default:r(()=>[t(m,{field:"name",header:"Name",style:{"min-width":"12rem"}},{body:r(({data:f})=>[o(T(f.name),1)]),filter:r(({filterModel:f})=>[t(s,{modelValue:f.value,"onUpdate:modelValue":v=>f.value=v,type:"text",class:"p-column-filter",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(m,{header:"Country",filterField:"country.name",style:{"min-width":"12rem"}},{body:r(({data:f})=>[e("div",il,[e("img",{alt:"flag",src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:U(`flag flag-${f.country.code}`),style:{width:"24px"}},null,2),e("span",null,T(f.country.name),1)])]),filter:r(({filterModel:f})=>[t(s,{modelValue:f.value,"onUpdate:modelValue":v=>f.value=v,type:"text",class:"p-column-filter",placeholder:"Search by country"},null,8,["modelValue","onUpdate:modelValue"])]),filterclear:r(({filterCallback:f})=>[t(n,{type:"button",icon:"pi pi-times",onClick:v=>f(),severity:"secondary"},null,8,["onClick"])]),filterapply:r(({filterCallback:f})=>[t(n,{type:"button",icon:"pi pi-check",onClick:v=>f(),severity:"success"},null,8,["onClick"])]),filterfooter:r(()=>[sl]),_:1}),t(m,{header:"Agent",filterField:"representative",showFilterMatchModes:!1,filterMenuStyle:{width:"14rem"},style:{"min-width":"14rem"}},{body:r(({data:f})=>[e("div",dl,[e("img",{alt:f.representative.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${f.representative.image}`,style:{width:"32px"}},null,8,cl),e("span",null,T(f.representative.name),1)])]),filter:r(({filterModel:f})=>[t(y,{modelValue:f.value,"onUpdate:modelValue":v=>f.value=v,options:l.representatives,optionLabel:"name",placeholder:"Any",class:"p-column-filter"},{option:r(v=>[e("div",ul,[e("img",{alt:v.option.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${v.option.image}`,style:{width:"32px"}},null,8,ml),e("span",null,T(v.option.name),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),t(m,{header:"Date",filterField:"date",dataType:"date",style:{"min-width":"10rem"}},{body:r(({data:f})=>[o(T(c.formatDate(f.date)),1)]),filter:r(({filterModel:f})=>[t(u,{modelValue:f.value,"onUpdate:modelValue":v=>f.value=v,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy",mask:"99/99/9999"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(m,{header:"Balance",filterField:"balance",dataType:"numeric",style:{"min-width":"10rem"}},{body:r(({data:f})=>[o(T(c.formatCurrency(f.balance)),1)]),filter:r(({filterModel:f})=>[t(D,{modelValue:f.value,"onUpdate:modelValue":v=>f.value=v,mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(m,{header:"Status",field:"status",filterMenuStyle:{width:"14rem"},style:{"min-width":"12rem"}},{body:r(({data:f})=>[t(w,{value:f.status,severity:c.getSeverity(f.status)},null,8,["value","severity"])]),filter:r(({filterModel:f})=>[t(C,{modelValue:f.value,"onUpdate:modelValue":v=>f.value=v,options:l.statuses,placeholder:"Select One",class:"p-column-filter",showClear:""},{option:r(v=>[t(w,{value:v.option,severity:c.getSeverity(v.option)},null,8,["value","severity"])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),t(m,{field:"activity",header:"Activity",showFilterMatchModes:!1,style:{"min-width":"12rem"}},{body:r(({data:f})=>[t(g,{value:f.activity,showValue:!1,style:{height:"6px"}},null,8,["value"])]),filter:r(({filterModel:f})=>[t(A,{modelValue:f.value,"onUpdate:modelValue":v=>f.value=v,range:"",class:"m-3"},null,8,["modelValue","onUpdate:modelValue"]),e("div",pl,[e("span",null,T(f.value?f.value[0]:0),1),e("span",null,T(f.value?f.value[1]:100),1)])]),_:1}),t(m,{field:"verified",header:"Verified",dataType:"boolean",bodyClass:"text-center",style:{"min-width":"8rem"}},{body:r(({data:f})=>[e("i",{class:U(["pi",{"pi-check-circle text-green-500 ":f.verified,"pi-times-circle text-red-500":!f.verified}])},null,2)]),filter:r(({filterModel:f})=>[hl,t($,{modelValue:f.value,"onUpdate:modelValue":v=>f.value=v,inputId:"verified-filter"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["filters","value","loading","globalFilterFields"])]),t(P,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const vl=M(tl,[["render",fl]]),yl={data(){return{customers:null,filters:{global:{value:null,matchMode:N.CONTAINS},name:{value:null,matchMode:N.STARTS_WITH},"country.name":{value:null,matchMode:N.STARTS_WITH},representative:{value:null,matchMode:N.IN},status:{value:null,matchMode:N.EQUALS},verified:{value:null,matchMode:N.EQUALS}},representatives:[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}],statuses:["unqualified","qualified","new","negotiation","renewal","proposal"],loading:!0,code:{basic:`<DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading"
        :globalFilterFields="['name', 'country.name', 'representative.name', 'status']">
    <template #header>
        <div class="flex justify-content-end">
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </span>
        </div>
    </template>
    <template #empty> No customers found. </template>
    <template #loading> Loading customers data. Please wait. </template>
    <Column field="name" header="Name" style="min-width: 12rem">
        <template #body="{ data }">
            {{ data.name }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
        </template>
    </Column>
    <Column header="Country" filterField="country.name" style="min-width: 12rem">
        <template #body="{ data }">
            <div class="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                <span>{{ data.country.name }}</span>
            </div>
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by country" />
        </template>
    </Column>
    <Column header="Agent" filterField="representative" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
        <template #body="{ data }">
            <div class="flex align-items-center gap-2">
                <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                <span>{{ data.representative.name }}</span>
            </div>
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter" style="min-width: 14rem" :maxSelectedLabels="1">
                <template #option="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                        <span>{{ slotProps.option.name }}</span>
                    </div>
                </template>
            </MultiSelect>
        </template>
    </Column>
    <Column field="status" header="Status" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
        <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One" class="p-column-filter" style="min-width: 12rem" :showClear="true">
                <template #option="slotProps">
                    <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                </template>
            </Dropdown>
        </template>
    </Column>
    <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
        <template #body="{ data }">
            <i class="pi" :class="{ 'pi-check-circle text-green-500': data.verified, 'pi-times-circle text-red-400': !data.verified }"></i>
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()" />
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading"
                :globalFilterFields="['name', 'country.name', 'representative.name', 'status']">
            <template #header>
                <div class="flex justify-content-end">
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </span>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by country" />
                </template>
            </Column>
            <Column header="Agent" filterField="representative" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter" style="min-width: 14rem" :maxSelectedLabels="1">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="status" header="Status" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One" class="p-column-filter" style="min-width: 12rem" :showClear="true">
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
                <template #body="{ data }">
                    <i class="pi" :class="{ 'pi-check-circle text-green-500': data.verified, 'pi-times-circle text-red-400': !data.verified }"></i>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api';
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                status: { value: null, matchMode: FilterMatchMode.EQUALS },
                verified: { value: null, matchMode: FilterMatchMode.EQUALS }
            },
            representatives: [
                { name: 'Amy Elsner', image: 'amyelsner.png' },
                { name: 'Anna Fali', image: 'annafali.png' },
                { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
                { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
                { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
                { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
                { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
                { name: 'Onyama Limba', image: 'onyamalimba.png' },
                { name: 'Stephen Shaw', image: 'stephenshaw.png' },
                { name: 'XuXue Feng', image: 'xuxuefeng.png' }
            ],
            statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
            loading: true
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = this.getCustomers(data);
            this.loading = false;
        });
    },
    methods: {
        getCustomers(data) {
            return [...(data || [])].map((d) => {
                d.date = new Date(d.date);

                return d;
            });
        },
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        getSeverity(status) {
            switch (status) {
                case 'unqualified':
                    return 'danger';

                case 'qualified':
                    return 'success';

                case 'new':
                    return 'info';

                case 'negotiation':
                    return 'warning';

                case 'renewal':
                    return null;
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="row" :loading="loading"
                :globalFilterFields="['name', 'country.name', 'representative.name', 'status']">
            <template #header>
                <div class="flex justify-content-end">
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </span>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by country" />
                </template>
            </Column>
            <Column header="Agent" filterField="representative" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter" style="min-width: 14rem" :maxSelectedLabels="1">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="status" header="Status" :showFilterMenu="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <Dropdown v-model="filterModel.value" @change="filterCallback()" :options="statuses" placeholder="Select One" class="p-column-filter" style="min-width: 12rem" :showClear="true">
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="verified" header="Verified" dataType="boolean" style="min-width: 6rem">
                <template #body="{ data }">
                    <i class="pi" :class="{ 'pi-check-circle text-green-500': data.verified, 'pi-times-circle text-red-400': !data.verified }"></i>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { CustomerService } from '@/service/CustomerService';

const customers = ref();
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS }
});
const representatives = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
const loading = ref(true);

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
            customers.value = getCustomers(data);
            loading.value = false;
        });
});

const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};
const formatDate = (value) => {
    return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
}

<\/script>`,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`}}},mounted(){V.getCustomersMedium().then(a=>{this.customers=this.getCustomers(a),this.loading=!1})},methods:{getCustomers(a){return[...a||[]].map(i=>(i.date=new Date(i.date),i))},formatDate(a){return a.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})},formatCurrency(a){return a.toLocaleString("en-US",{style:"currency",currency:"USD"})},getSeverity(a){switch(a){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}}},gl=e("p",null,[o(" Data filtering is enabled by defining the "),e("i",null,"filters"),o(" property referring to a "),e("i",null,"DataTableFilterMeta"),o(" instance. Each column to filter also requires "),e("i",null,"filter"),o(" to be enabled. Built-in filter element is a input field and using "),e("i",null,"filterElement"),o(", it is possible to customize the filtering with your own UI. Filter elements are display within a separe row when "),e("i",null,"filterDisplay"),o(" is defined as "),e("i",null,"row"),o(". ")],-1),Cl=e("p",null,[o("The optional global filtering searches the data against a single value that is bound to the "),e("i",null,"global"),o(" key of the "),e("i",null,"filters"),o(" object. The fields to search against is defined with the "),e("i",null,"globalFilterFields"),o(".")],-1),bl={class:"card"},wl={class:"flex justify-content-end"},Sl={class:"p-input-icon-left"},_l=e("i",{class:"pi pi-search"},null,-1),xl={class:"flex align-items-center gap-2"},Pl={class:"flex align-items-center gap-2"},Tl=["alt","src"],Ml={class:"flex align-items-center gap-2"},Dl=["alt","src"];function kl(a,i,h,S,l,c){const p=k,n=d("InputText"),s=d("Column"),m=d("MultiSelect"),y=d("Tag"),u=d("Dropdown"),D=d("TriStateCheckbox"),w=d("DataTable"),C=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[gl,Cl]),_:1},16),e("div",bl,[t(w,{filters:l.filters,"onUpdate:filters":i[1]||(i[1]=g=>l.filters=g),value:l.customers,paginator:"",rows:10,dataKey:"id",filterDisplay:"row",loading:l.loading,globalFilterFields:["name","country.name","representative.name","status"]},{header:r(()=>[e("div",wl,[e("span",Sl,[_l,t(n,{modelValue:l.filters.global.value,"onUpdate:modelValue":i[0]||(i[0]=g=>l.filters.global.value=g),placeholder:"Keyword Search"},null,8,["modelValue"])])])]),empty:r(()=>[o(" No customers found. ")]),loading:r(()=>[o(" Loading customers data. Please wait. ")]),default:r(()=>[t(s,{field:"name",header:"Name",style:{"min-width":"12rem"}},{body:r(({data:g})=>[o(T(g.name),1)]),filter:r(({filterModel:g,filterCallback:A})=>[t(n,{modelValue:g.value,"onUpdate:modelValue":$=>g.value=$,type:"text",onInput:$=>A(),class:"p-column-filter",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),t(s,{header:"Country",filterField:"country.name",style:{"min-width":"12rem"}},{body:r(({data:g})=>[e("div",xl,[e("img",{alt:"flag",src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:U(`flag flag-${g.country.code}`),style:{width:"24px"}},null,2),e("span",null,T(g.country.name),1)])]),filter:r(({filterModel:g,filterCallback:A})=>[t(n,{modelValue:g.value,"onUpdate:modelValue":$=>g.value=$,type:"text",onInput:$=>A(),class:"p-column-filter",placeholder:"Search by country"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),t(s,{header:"Agent",filterField:"representative",showFilterMenu:!1,filterMenuStyle:{width:"14rem"},style:{"min-width":"14rem"}},{body:r(({data:g})=>[e("div",Pl,[e("img",{alt:g.representative.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${g.representative.image}`,style:{width:"32px"}},null,8,Tl),e("span",null,T(g.representative.name),1)])]),filter:r(({filterModel:g,filterCallback:A})=>[t(m,{modelValue:g.value,"onUpdate:modelValue":$=>g.value=$,onChange:$=>A(),options:l.representatives,optionLabel:"name",placeholder:"Any",class:"p-column-filter",style:{"min-width":"14rem"},maxSelectedLabels:1},{option:r($=>[e("div",Ml,[e("img",{alt:$.option.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${$.option.image}`,style:{width:"32px"}},null,8,Dl),e("span",null,T($.option.name),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","options"])]),_:1}),t(s,{field:"status",header:"Status",showFilterMenu:!1,filterMenuStyle:{width:"14rem"},style:{"min-width":"12rem"}},{body:r(({data:g})=>[t(y,{value:g.status,severity:c.getSeverity(g.status)},null,8,["value","severity"])]),filter:r(({filterModel:g,filterCallback:A})=>[t(u,{modelValue:g.value,"onUpdate:modelValue":$=>g.value=$,onChange:$=>A(),options:l.statuses,placeholder:"Select One",class:"p-column-filter",style:{"min-width":"12rem"},showClear:!0},{option:r($=>[t(y,{value:$.option,severity:c.getSeverity($.option)},null,8,["value","severity"])]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","options"])]),_:1}),t(s,{field:"verified",header:"Verified",dataType:"boolean",style:{"min-width":"6rem"}},{body:r(({data:g})=>[e("i",{class:U(["pi",{"pi-check-circle text-green-500":g.verified,"pi-times-circle text-red-400":!g.verified}])},null,2)]),filter:r(({filterModel:g,filterCallback:A})=>[t(D,{modelValue:g.value,"onUpdate:modelValue":$=>g.value=$,onChange:$=>A()},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1})]),_:1},8,["filters","value","loading","globalFilterFields"])]),t(C,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const Rl=M(yl,[["render",kl]]),Fl={data(){return{customers:null,code:{basic:`<DataTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" style="width: 25%"></Column>
    <Column field="country.name" header="Country" style="width: 25%"></Column>
    <Column field="company" header="Company" style="width: 25%"></Column>
    <Column field="representative.name" header="Representative" style="width: 25%"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" style="width: 25%"></Column>
            <Column field="country.name" header="Country" style="width: 25%"></Column>
            <Column field="company" header="Company" style="width: 25%"></Column>
            <Column field="representative.name" header="Representative" style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => (this.customers = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
            <Column field="name" header="Name" style="width: 25%"></Column>
            <Column field="country.name" header="Country" style="width: 25%"></Column>
            <Column field="company" header="Company" style="width: 25%"></Column>
            <Column field="representative.name" header="Representative" style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});

const customers = ref();

<\/script>`,data:`
                {
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
`}}},mounted(){V.getCustomersMedium().then(a=>this.customers=a)}},Il=e("p",null,[o("Pagination is enabled by adding "),e("i",null,"paginator"),o(" property and defining "),e("i",null,"rows"),o(" per page.")],-1),Nl={class:"card"};function $l(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Il]),_:1},16),e("div",Nl,[t(s,{value:l.customers,paginator:"",rows:5,rowsPerPageOptions:[5,10,20,50],tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"name",header:"Name",style:{width:"25%"}}),t(n,{field:"country.name",header:"Country",style:{width:"25%"}}),t(n,{field:"company",header:"Company",style:{width:"25%"}}),t(n,{field:"representative.name",header:"Representative",style:{width:"25%"}})]),_:1},8,["value"])]),t(m,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const Bl=M(Fl,[["render",$l]]),Al={data(){return{customers:null,code:{basic:`<DataTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}">
    <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" text />
    </template>
    <template #paginatorend>
        <Button type="button" icon="pi pi-download" text />
    </template>
    <Column field="name" header="Name" style="width: 25%"></Column>
    <Column field="country.name" header="Country" style="width: 25%"></Column>
    <Column field="company" header="Company" style="width: 25%"></Column>
    <Column field="representative.name" header="Representative" style="width: 25%"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}">
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" text />
            </template>
            <template #paginatorend>
                <Button type="button" icon="pi pi-download" text />
            </template>
            <Column field="name" header="Name" style="width: 25%"></Column>
            <Column field="country.name" header="Country" style="width: 25%"></Column>
            <Column field="company" header="Company" style="width: 25%"></Column>
            <Column field="representative.name" header="Representative" style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => (this.customers = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}">
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" text />
            </template>
            <template #paginatorend>
                <Button type="button" icon="pi pi-download" text />
            </template>
            <Column field="name" header="Name" style="width: 25%"></Column>
            <Column field="country.name" header="Country" style="width: 25%"></Column>
            <Column field="company" header="Company" style="width: 25%"></Column>
            <Column field="representative.name" header="Representative" style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});

const customers = ref();

<\/script>`,data:`
                {
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
`}}},mounted(){V.getCustomersMedium().then(a=>this.customers=a)}},Vl=e("i",null,"paginatorTemplate",-1),Ll={class:"card"};function Ul(a,i,h,S,l,c){const p=j,n=k,s=d("Button"),m=d("Column"),y=d("DataTable"),u=I;return b(),_(x,null,[t(n,R(F(a.$attrs)),{default:r(()=>[e("p",null,[o(" Paginator UI is customized using the "),Vl,o(" property. Each element can also be customized further with your own UI to replace the default one, refer to the "),t(p,{to:"/paginator"},{default:r(()=>[o("Paginator")]),_:1}),o(" component for more information about the advanced customization options. ")])]),_:1},16),e("div",Ll,[t(y,{value:l.customers,paginator:"",rows:5,rowsPerPageOptions:[5,10,20,50],paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} to {last} of {totalRecords}",tableStyle:"min-width: 50rem"},{paginatorstart:r(()=>[t(s,{type:"button",icon:"pi pi-refresh",text:""})]),paginatorend:r(()=>[t(s,{type:"button",icon:"pi pi-download",text:""})]),default:r(()=>[t(m,{field:"name",header:"Name",style:{width:"25%"}}),t(m,{field:"country.name",header:"Country",style:{width:"25%"}}),t(m,{field:"company",header:"Company",style:{width:"25%"}}),t(m,{field:"representative.name",header:"Representative",style:{width:"25%"}})]),_:1},8,["value"])]),t(u,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const Ol=M(Al,[["render",Ul]]),zl={data(){return{products:null,code:{basic:`<DataTable
    :value="products"
    sortMode="multiple"
    :pt="{
        table: { style: { minWidth: '50rem' } }
    }"
>
    <Column
        field="code"
        header="Code"
        sortable
        :pt="{
            sortBadge: { class: 'bg-primary' },
            headerCell: { style: { width: '25%' } }
        }"
    />
    <Column
        field="name"
        header="Name"
        sortable
        :pt="{
            sortBadge: { class: 'bg-primary' },
            headerCell: { style: { width: '25%' } }
        }"
    />
    <Column
        field="category"
        header="Category"
        sortable
        :pt="{
            sortBadge: { class: 'bg-primary' },
            headerCell: { style: { width: '25%' } }
        }"
    />
    <Column
        field="quantity"
        header="Quantity"
        sortable
        :pt="{
            sortBadge: { class: 'bg-primary' },
            headerCell: { style: { width: '25%' } }
        }"
    />
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable
            :value="products"
            sortMode="multiple"
            :pt="{
                table: { style: { minWidth: '50rem' } }
            }"
        >
            <Column
                field="code"
                header="Code"
                sortable
                :pt="{
                    sortBadge: { class: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }"
            />
            <Column
                field="name"
                header="Name"
                sortable
                :pt="{
                    sortBadge: { class: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }"
            />
            <Column
                field="category"
                header="Category"
                sortable
                :pt="{
                    sortBadge: { class: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }"
            />
            <Column
                field="quantity"
                header="Quantity"
                sortable
                :pt="{
                    sortBadge: { class: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }"
            />
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable
            :value="products"
            sortMode="multiple"
            :pt="{
                table: { style: { minWidth: '50rem' } }
            }"
        >
            <Column
                field="code"
                header="Code"
                sortable
                :pt="{
                    sortBadge: { class: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }"
            />
            <Column
                field="name"
                header="Name"
                sortable
                :pt="{
                    sortBadge: { class: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }"
            />
            <Column
                field="category"
                header="Category"
                sortable
                :pt="{
                    sortBadge: { class: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }"
            />
            <Column
                field="quantity"
                header="Quantity"
                sortable
                :pt="{
                    sortBadge: { class: 'bg-primary' },
                    headerCell: { style: { width: '25%' } }
                }"
            />
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},ql={class:"card"};function Kl(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),null,16),e("div",ql,[t(s,{value:l.products,sortMode:"multiple",pt:{table:{style:{minWidth:"50rem"}}}},{default:r(()=>[t(n,{field:"code",header:"Code",sortable:"",pt:{sortBadge:{class:"bg-primary"},headerCell:{style:{width:"25%"}}}}),t(n,{field:"name",header:"Name",sortable:"",pt:{sortBadge:{class:"bg-primary"},headerCell:{style:{width:"25%"}}}}),t(n,{field:"category",header:"Category",sortable:"",pt:{sortBadge:{class:"bg-primary"},headerCell:{style:{width:"25%"}}}}),t(n,{field:"quantity",header:"Quantity",sortable:"",pt:{sortBadge:{class:"bg-primary"},headerCell:{style:{width:"25%"}}}})]),_:1},8,["value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const El=M(zl,[["render",Kl]]),Yl={},Gl=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/wireframe-placeholder.jpg"})],-1);function Ql(a,i){const h=k;return b(),_(x,null,[t(h,R(F(a.$attrs)),{default:r(()=>[e("p",null,T(a.$attrs.description),1)]),_:1},16),Gl],64)}const Wl=M(Yl,[["render",Ql]]),jl={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Wl},{id:"pt.doc.datatable",label:"DataTable PT Options",component:E,data:G("DataTable")},{id:"pt.doc.column",label:"Column PT Options",component:E,data:G("Column")},{id:"pt.doc.columngroup",label:"ColumnGroup PT Options",component:E,data:G("ColumnGroup")},{id:"pt.doc.row",label:"Row PT Options",component:E,data:G("Row")},{id:"pt.demo",label:"Demo",component:El}]}}},Hl={class:"doc-main"},Jl=e("div",{class:"doc-intro"},[e("h1",null,"DataTable Pass Through")],-1);function Xl(a,i,h,S,l,c){const p=H,n=J;return b(),_(x,null,[e("div",Hl,[Jl,t(p,{docs:l.docs},null,8,["docs"])]),t(n,{docs:l.docs},null,8,["docs"])],64)}const Zl=M(jl,[["render",Xl]]),eo={data(){return{customers:null,expandedRowGroups:null,code:{basic:`<DataTable v-model:expandedRowGroups="expandedRowGroups" :value="customers" tableStyle="min-width: 50rem"
        expandableRowGroups rowGroupMode="subheader" groupRowsBy="representative.name" @rowgroup-expand="onRowGroupExpand" @rowgroup-collapse="onRowGroupCollapse"
        sortMode="single" sortField="representative.name" :sortOrder="1">
    <template #groupheader="slotProps">
        <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" class="ml-2" />
        <span class="vertical-align-middle ml-2 font-bold line-height-3">{{ slotProps.data.representative.name }}</span>
    </template>
    <Column field="representative.name" header="Representative"></Column>
    <Column field="name" header="Name" style="width: 20%"></Column>
    <Column field="country" header="Country" style="width: 20%">
        <template #body="slotProps">
            <div class="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
                <span>{{ slotProps.data.country.name }}</span>
            </div>
        </template>
    </Column>
    <Column field="company" header="Company" style="width: 20%"></Column>
    <Column field="status" header="Status" style="width: 20%">
        <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
        </template>
    </Column>
    <Column field="date" header="Date" style="width: 20%"></Column>
    <template #groupfooter="slotProps">
        <div class="flex justify-content-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
    </template>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable v-model:expandedRowGroups="expandedRowGroups" :value="customers" tableStyle="min-width: 50rem"
                expandableRowGroups rowGroupMode="subheader" groupRowsBy="representative.name" @rowgroup-expand="onRowGroupExpand" @rowgroup-collapse="onRowGroupCollapse"
                sortMode="single" sortField="representative.name" :sortOrder="1">
            <template #groupheader="slotProps">
                <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" class="ml-2" />
                <span class="vertical-align-middle ml-2 font-bold line-height-3">{{ slotProps.data.representative.name }}</span>
            </template>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="name" header="Name" style="width: 20%"></Column>
            <Column field="country" header="Country" style="width: 20%">
                <template #body="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
                        <span>{{ slotProps.data.country.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="company" header="Company" style="width: 20%"></Column>
            <Column field="status" header="Status" style="width: 20%">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
                </template>
            </Column>
            <Column field="date" header="Date" style="width: 20%"></Column>
            <template #groupfooter="slotProps">
                <div class="flex justify-content-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
            </template>
        </DataTable>
        <Toast />
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            expandedRowGroups: null
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => (this.customers = data));
    },
    methods: {
        onRowGroupExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000 });
        },
        onRowGroupCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000 });
        },
        calculateCustomerTotal(name) {
            let total = 0;

            if (this.customers) {
                for (let customer of this.customers) {
                    if (customer.representative.name === name) {
                        total++;
                    }
                }
            }

            return total;
        },
        getSeverity(status) {
            switch (status) {
                case 'unqualified':
                    return 'danger';

                case 'qualified':
                    return 'success';

                case 'new':
                    return 'info';

                case 'negotiation':
                    return 'warning';

                case 'renewal':
                    return null;
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable v-model:expandedRowGroups="expandedRowGroups" :value="customers" tableStyle="min-width: 50rem"
                expandableRowGroups rowGroupMode="subheader" groupRowsBy="representative.name" @rowgroup-expand="onRowGroupExpand" @rowgroup-collapse="onRowGroupCollapse"
                sortMode="single" sortField="representative.name" :sortOrder="1">
            <template #groupheader="slotProps">
                <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" class="ml-2" />
                <span class="vertical-align-middle ml-2 font-bold line-height-3">{{ slotProps.data.representative.name }}</span>
            </template>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="name" header="Name" style="width: 20%"></Column>
            <Column field="country" header="Country" style="width: 20%">
                <template #body="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
                        <span>{{ slotProps.data.country.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="company" header="Company" style="width: 20%"></Column>
            <Column field="status" header="Status" style="width: 20%">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
                </template>
            </Column>
            <Column field="date" header="Date" style="width: 20%"></Column>
            <template #groupfooter="slotProps">
                <div class="flex justify-content-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
            </template>
        </DataTable>
        <Toast />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { CustomerService } from '@/service/CustomerService';

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});

const customers = ref();
const expandedRowGroups = ref();
const toast = useToast();
const onRowGroupExpand = (event) => {
    toast.add({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000 });
};
const onRowGroupCollapse = (event) => {
    toast.add({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000 });
};
const calculateCustomerTotal = (name) => {
    let total = 0;

    if (customers.value) {
        for (let customer of customers.value) {
            if (customer.representative.name === name) {
                total++;
            }
        }
    }
    
    return total;
};
const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};
<\/script>`,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`}}},mounted(){V.getCustomersMedium().then(a=>this.customers=a)},methods:{onRowGroupExpand(a){this.$toast.add({severity:"info",summary:"Row Group Expanded",detail:"Value: "+a.data,life:3e3})},onRowGroupCollapse(a){this.$toast.add({severity:"success",summary:"Row Group Collapsed",detail:"Value: "+a.data,life:3e3})},calculateCustomerTotal(a){let i=0;if(this.customers)for(let h of this.customers)h.representative.name===a&&i++;return i},getSeverity(a){switch(a){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}}},to=e("p",null,[o(" When "),e("i",null,"expandableRowGroups"),o(" is present in subheader based row grouping, groups can be expanded and collapsed. State of the expansions are controlled using the "),e("i",null,"expandedRows"),o(" property and "),e("i",null,"rowgroup-expand"),o(" and "),e("i",null,"rowgroup-collapse"),o(" events. ")],-1),ao={class:"card"},lo=["alt","src"],oo={class:"vertical-align-middle ml-2 font-bold line-height-3"},ro={class:"flex align-items-center gap-2"},no={class:"flex justify-content-end font-bold w-full"};function io(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("Tag"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[to]),_:1},16),e("div",ao,[t(m,{expandedRowGroups:l.expandedRowGroups,"onUpdate:expandedRowGroups":i[0]||(i[0]=u=>l.expandedRowGroups=u),value:l.customers,expandableRowGroups:"",rowGroupMode:"subheader",groupRowsBy:"representative.name",sortMode:"single",sortField:"representative.name",sortOrder:1,onRowgroupExpand:c.onRowGroupExpand,onRowgroupCollapse:c.onRowGroupCollapse,tableStyle:"min-width: 50rem"},{groupheader:r(u=>[e("img",{alt:u.data.representative.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${u.data.representative.image}`,width:"32",style:{"vertical-align":"middle"},class:"ml-2"},null,8,lo),e("span",oo,T(u.data.representative.name),1)]),groupfooter:r(u=>[e("div",no,"Total Customers: "+T(c.calculateCustomerTotal(u.data.representative.name)),1)]),default:r(()=>[t(n,{field:"representative.name",header:"Representative"}),t(n,{field:"name",header:"Name",style:{width:"20%"}}),t(n,{field:"country",header:"Country",style:{width:"20%"}},{body:r(u=>[e("div",ro,[e("img",{alt:"flag",src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:U(`flag flag-${u.data.country.code}`),style:{width:"24px"}},null,2),e("span",null,T(u.data.country.name),1)])]),_:1}),t(n,{field:"company",header:"Company",style:{width:"20%"}}),t(n,{field:"status",header:"Status",style:{width:"20%"}},{body:r(u=>[t(s,{value:u.data.status,severity:c.getSeverity(u.data.status)},null,8,["value","severity"])]),_:1}),t(n,{field:"date",header:"Date",style:{width:"20%"}})]),_:1},8,["expandedRowGroups","value","onRowgroupExpand","onRowgroupCollapse"])]),t(y,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const so=M(eo,[["render",io]]),co={data(){return{customers:null,expandedRowGroups:null,code:{basic:`<DataTable :value="customers" rowGroupMode="rowspan" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" :sortOrder="1" tableStyle="min-width: 50rem">
    <Column header="#" headerStyle="width:3rem">
        <template #body="slotProps">
            {{ slotProps.index + 1 }}
        </template>
    </Column>
    <Column field="representative.name" header="Representative" style="min-width: 200px">
        <template #body="slotProps">
            <div class="flex align-items-center gap-2">
                <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" />
                <span>{{ slotProps.data.representative.name }}</span>
            </div>
        </template>
    </Column>
    <Column field="name" header="Name" style="min-width: 200px"></Column>
    <Column field="country" header="Country" style="min-width: 150px">
        <template #body="slotProps">
            <div class="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
                <span>{{ slotProps.data.country.name }}</span>
            </div>
        </template>
    </Column>
    <Column field="company" header="Company" style="min-width: 200px"></Column>
    <Column field="status" header="Status" style="min-width: 100px">
        <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
        </template>
    </Column>
    <Column field="date" header="Date" style="min-width: 100px"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="customers" rowGroupMode="rowspan" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" :sortOrder="1" tableStyle="min-width: 50rem">
            <Column header="#" headerStyle="width:3rem">
                <template #body="slotProps">
                    {{ slotProps.index + 1 }}
                </template>
            </Column>
            <Column field="representative.name" header="Representative" style="min-width: 200px">
                <template #body="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" />
                        <span>{{ slotProps.data.representative.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="name" header="Name" style="min-width: 200px"></Column>
            <Column field="country" header="Country" style="min-width: 150px">
                <template #body="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
                        <span>{{ slotProps.data.country.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="company" header="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" style="min-width: 100px">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
                </template>
            </Column>
            <Column field="date" header="Date" style="min-width: 100px"></Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => (this.customers = data));
    },
    methods: {
        getSeverity(status) {
            switch (status) {
                case 'unqualified':
                    return 'danger';

                case 'qualified':
                    return 'success';

                case 'new':
                    return 'info';

                case 'negotiation':
                    return 'warning';

                case 'renewal':
                    return null;
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="customers" rowGroupMode="rowspan" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" :sortOrder="1" tableStyle="min-width: 50rem">
            <Column header="#" headerStyle="width:3rem">
                <template #body="slotProps">
                    {{ slotProps.index + 1 }}
                </template>
            </Column>
            <Column field="representative.name" header="Representative" style="min-width: 200px">
                <template #body="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" />
                        <span>{{ slotProps.data.representative.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="name" header="Name" style="min-width: 200px"></Column>
            <Column field="country" header="Country" style="min-width: 150px">
                <template #body="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
                        <span>{{ slotProps.data.country.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="company" header="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" style="min-width: 100px">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
                </template>
            </Column>
            <Column field="date" header="Date" style="min-width: 100px"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { CustomerService } from '@/service/CustomerService';

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});

const customers = ref();
const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};
<\/script>`,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`}}},mounted(){V.getCustomersMedium().then(a=>this.customers=a)},methods:{onRowGroupExpand(a){this.$toast.add({severity:"info",summary:"Row Group Expanded",detail:"Value: "+a.data,life:3e3})},onRowGroupCollapse(a){this.$toast.add({severity:"success",summary:"Row Group Collapsed",detail:"Value: "+a.data,life:3e3})},calculateCustomerTotal(a){let i=0;if(this.customers)for(let h of this.customers)h.representative.name===a&&i++;return i},getSeverity(a){switch(a){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}}},uo=e("p",null,[o("When "),e("i",null,"rowGroupMode"),o(" is configured to be "),e("i",null,"rowspan"),o(", the grouping column spans multiple rows.")],-1),mo={class:"card"},po={class:"flex align-items-center gap-2"},ho=["alt","src"],fo={class:"flex align-items-center gap-2"};function vo(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("Tag"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[uo]),_:1},16),e("div",mo,[t(m,{value:l.customers,rowGroupMode:"rowspan",groupRowsBy:"representative.name",sortMode:"single",sortField:"representative.name",sortOrder:1,tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{header:"#",headerStyle:"width:3rem"},{body:r(u=>[o(T(u.index+1),1)]),_:1}),t(n,{field:"representative.name",header:"Representative",style:{"min-width":"200px"}},{body:r(u=>[e("div",po,[e("img",{alt:u.data.representative.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${u.data.representative.image}`,width:"32",style:{"vertical-align":"middle"}},null,8,ho),e("span",null,T(u.data.representative.name),1)])]),_:1}),t(n,{field:"name",header:"Name",style:{"min-width":"200px"}}),t(n,{field:"country",header:"Country",style:{"min-width":"150px"}},{body:r(u=>[e("div",fo,[e("img",{alt:"flag",src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:U(`flag flag-${u.data.country.code}`),style:{width:"24px"}},null,2),e("span",null,T(u.data.country.name),1)])]),_:1}),t(n,{field:"company",header:"Company",style:{"min-width":"200px"}}),t(n,{field:"status",header:"Status",style:{"min-width":"100px"}},{body:r(u=>[t(s,{value:u.data.status,severity:c.getSeverity(u.data.status)},null,8,["value","severity"])]),_:1}),t(n,{field:"date",header:"Date",style:{"min-width":"100px"}})]),_:1},8,["value"])]),t(y,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const yo=M(co,[["render",vo]]),go={data(){return{customers:null,code:{basic:`<DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single"
        sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
    <Column field="representative.name" header="Representative"></Column>
    <Column field="name" header="Name" style="min-width: 200px"></Column>
    <Column field="country" header="Country" style="min-width: 200px">
        <template #body="slotProps">
            <div class="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
                <span>{{ slotProps.data.country.name }}</span>
            </div>
        </template>
    </Column>
    <Column field="company" header="Company" style="min-width: 200px"></Column>
    <Column field="status" header="Status" style="min-width: 200px">
        <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
        </template>
    </Column>
    <Column field="date" header="Date" style="min-width: 200px"></Column>
    <template #groupheader="slotProps">
        <div class="flex align-items-center gap-2">
            <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" />
            <span>{{ slotProps.data.representative.name }}</span>
        </div>
    </template>
    <template #groupfooter="slotProps">
        <div class="flex justify-content-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
    </template>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single"
                sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="representative.name" header="Representative"></Column>
            <Column field="name" header="Name" style="min-width: 200px"></Column>
            <Column field="country" header="Country" style="min-width: 200px">
                <template #body="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
                        <span>{{ slotProps.data.country.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="company" header="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" style="min-width: 200px">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
                </template>
            </Column>
            <Column field="date" header="Date" style="min-width: 200px"></Column>
            <template #groupheader="slotProps">
                <div class="flex align-items-center gap-2">
                    <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" />
                    <span>{{ slotProps.data.representative.name }}</span>
                </div>
            </template>
            <template #groupfooter="slotProps">
                <div class="flex justify-content-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
            </template>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => (this.customers = data));
    },
    methods: {
        calculateCustomerTotal(name) {
            let total = 0;

            if (this.customers) {
                for (let customer of this.customers) {
                    if (customer.representative.name === name) {
                        total++;
                    }
                }
            }

            return total;
        },
        getSeverity(status) {
            switch (status) {
                case 'unqualified':
                    return 'danger';

                case 'qualified':
                    return 'success';

                case 'new':
                    return 'info';

                case 'negotiation':
                    return 'warning';

                case 'renewal':
                    return null;
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="customers" rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single"
                sortField="representative.name" :sortOrder="1" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="representative.name" header="Representative"></Column>
            <Column field="name" header="Name" style="min-width: 200px"></Column>
            <Column field="country" header="Country" style="min-width: 200px">
                <template #body="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${slotProps.data.country.code}\`" style="width: 24px" />
                        <span>{{ slotProps.data.country.name }}</span>
                    </div>
                </template>
            </Column>
            <Column field="company" header="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" style="min-width: 200px">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
                </template>
            </Column>
            <Column field="date" header="Date" style="min-width: 200px"></Column>
            <template #groupheader="slotProps">
                <div class="flex align-items-center gap-2">
                    <img :alt="slotProps.data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.data.representative.image}\`" width="32" style="vertical-align: middle" />
                    <span>{{ slotProps.data.representative.name }}</span>
                </div>
            </template>
            <template #groupfooter="slotProps">
                <div class="flex justify-content-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
            </template>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => (customers.value = data));
});

const customers = ref();
const calculateCustomerTotal = (name) => {
    let total = 0;

    if (customers.value) {
        for (let customer of customers.value) {
            if (customer.representative.name === name) {
                total++;
            }
        }
    }
    
    return total;
};
const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};
<\/script>`,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`}}},mounted(){V.getCustomersMedium().then(a=>this.customers=a)},methods:{calculateCustomerTotal(a){let i=0;if(this.customers)for(let h of this.customers)h.representative.name===a&&i++;return i},getSeverity(a){switch(a){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}}},Co=e("p",null,[o(" Rows are grouped with the "),e("i",null,"groupRowsBy"),o(" property. When "),e("i",null,"rowGroupMode"),o(" is set as "),e("i",null,"subheader"),o(", a header and footer can be displayed for each group. The content of a group header is provided with "),e("i",null,"groupheader"),o(" and footer with "),e("i",null,"groupfooter"),o(" slots. ")],-1),bo={class:"card"},wo={class:"flex align-items-center gap-2"},So=["alt","src"],_o={class:"flex align-items-center gap-2"},xo={class:"flex justify-content-end font-bold w-full"};function Po(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("Tag"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Co]),_:1},16),e("div",bo,[t(m,{value:l.customers,rowGroupMode:"subheader",groupRowsBy:"representative.name",sortMode:"single",sortField:"representative.name",sortOrder:1,scrollable:"",scrollHeight:"400px",tableStyle:"min-width: 50rem"},{groupheader:r(u=>[e("div",wo,[e("img",{alt:u.data.representative.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${u.data.representative.image}`,width:"32",style:{"vertical-align":"middle"}},null,8,So),e("span",null,T(u.data.representative.name),1)])]),groupfooter:r(u=>[e("div",xo,"Total Customers: "+T(c.calculateCustomerTotal(u.data.representative.name)),1)]),default:r(()=>[t(n,{field:"representative.name",header:"Representative"}),t(n,{field:"name",header:"Name",style:{"min-width":"200px"}}),t(n,{field:"country",header:"Country",style:{"min-width":"200px"}},{body:r(u=>[e("div",_o,[e("img",{alt:"flag",src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:U(`flag flag-${u.data.country.code}`),style:{width:"24px"}},null,2),e("span",null,T(u.data.country.name),1)])]),_:1}),t(n,{field:"company",header:"Company",style:{"min-width":"200px"}}),t(n,{field:"status",header:"Status",style:{"min-width":"200px"}},{body:r(u=>[t(s,{value:u.data.status,severity:c.getSeverity(u.data.status)},null,8,["value","severity"])]),_:1}),t(n,{field:"date",header:"Date",style:{"min-width":"200px"}})]),_:1},8,["value"])]),t(y,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const To=M(go,[["render",Po]]),Mo={data(){return{products:null,selectedProduct:null,metaKey:!0,code:{basic:`<DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null,
            metaKey: true
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const selectedProduct = ref();
const metaKey = ref(true);

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},Do=e("p",null,[o(" More than one row is selectable by setting "),e("i",null,"selectionMode"),o(" to "),e("i",null,"multiple"),o(". By default in multiple selection mode, metaKey press (e.g. "),e("i",null,"⌘"),o(") is necessary to add to existing selections however this can be configured with disabling the "),e("i",null,"metaKeySelection"),o(" property. Note that in touch enabled devices, DataTable always ignores metaKey. ")],-1),ko=e("p",null,[o("The header checkbox toggles the selection state of the whole dataset by default, when paginator is enabled you may add "),e("i",null,"selectAll"),o(" property and "),e("i",null,"select-all-change"),o(" event to only control the selection of visible rows.")],-1),Ro={class:"card"};function Fo(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Do,ko]),_:1},16),e("div",Ro,[t(s,{selection:l.selectedProduct,"onUpdate:selection":i[0]||(i[0]=y=>l.selectedProduct=y),value:l.products,dataKey:"id",tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{selectionMode:"multiple",headerStyle:"width: 3rem"}),t(n,{field:"code",header:"Code"}),t(n,{field:"name",header:"Name"}),t(n,{field:"category",header:"Category"}),t(n,{field:"quantity",header:"Quantity"})]),_:1},8,["selection","value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const Io=M(Mo,[["render",Fo]]),No={data(){return{products:null,selectedProduct:null,metaKey:!0,code:{basic:`<InputSwitch v-model="metaKey" inputId="input-metakey" />

<DataTable v-model:selection="selectedProduct" :value="products" selectionMode="multiple" :metaKeySelection="metaKey" dataKey="id" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <div class="flex justify-content-center align-items-center mb-4 gap-2">
            <InputSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="multiple" :metaKeySelection="metaKey" dataKey="id" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null,
            metaKey: true
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex justify-content-center align-items-center mb-4 gap-2">
            <InputSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="multiple" :metaKeySelection="metaKey" dataKey="id" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const selectedProduct = ref();
const metaKey = ref(true);

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},$o=e("p",null,[o(" More than one row is selectable by setting "),e("i",null,"selectionMode"),o(" to "),e("i",null,"multiple"),o(". By default in multiple selection mode, metaKey press (e.g. "),e("i",null,"⌘"),o(") is necessary to add to existing selections however this can be configured with disabling the "),e("i",null,"metaKeySelection"),o(" property. Note that in touch enabled devices, DataTable always ignores metaKey. ")],-1),Bo={class:"card"},Ao={class:"flex justify-content-center align-items-center mb-4 gap-2"},Vo=e("label",{for:"input-metakey"},"MetaKey",-1);function Lo(a,i,h,S,l,c){const p=k,n=d("InputSwitch"),s=d("Column"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[$o]),_:1},16),e("div",Bo,[e("div",Ao,[t(n,{modelValue:l.metaKey,"onUpdate:modelValue":i[0]||(i[0]=u=>l.metaKey=u),inputId:"input-metakey"},null,8,["modelValue"]),Vo]),t(m,{selection:l.selectedProduct,"onUpdate:selection":i[1]||(i[1]=u=>l.selectedProduct=u),value:l.products,selectionMode:"multiple",metaKeySelection:l.metaKey,dataKey:"id",tableStyle:"min-width: 50rem"},{default:r(()=>[t(s,{field:"code",header:"Code"}),t(s,{field:"name",header:"Name"}),t(s,{field:"category",header:"Category"}),t(s,{field:"quantity",header:"Quantity"})]),_:1},8,["selection","value","metaKeySelection"])]),t(y,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const Uo=M(No,[["render",Lo]]),Oo={data(){return{products:null,selectedProduct:null,metaKey:!0,code:{basic:`<DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
    <Column selectionMode="single" headerStyle="width: 3rem"></Column>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
            <Column selectionMode="single" headerStyle="width: 3rem"></Column>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null,
            metaKey: true
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable v-model:selection="selectedProduct" :value="products" dataKey="id" tableStyle="min-width: 50rem">
            <Column selectionMode="single" headerStyle="width: 3rem"></Column>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const selectedProduct = ref();
const metaKey = ref(true);

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},zo=e("p",null,[o(" Specifying "),e("i",null,"selectionMode"),o(" as "),e("i",null,"single"),o(" on a Column, displays a radio button inside that column for selection. By default, row clicks also trigger selection, set "),e("i",null,"selectionMode"),o(" of DataTable to "),e("i",null,"radiobutton"),o(" to only trigger selection using the radio buttons. ")],-1),qo={class:"card"};function Ko(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[zo]),_:1},16),e("div",qo,[t(s,{selection:l.selectedProduct,"onUpdate:selection":i[0]||(i[0]=y=>l.selectedProduct=y),value:l.products,dataKey:"id",tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{selectionMode:"single",headerStyle:"width: 3rem"}),t(n,{field:"code",header:"Code"}),t(n,{field:"name",header:"Name"}),t(n,{field:"category",header:"Category"}),t(n,{field:"quantity",header:"Quantity"})]),_:1},8,["selection","value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const Eo=M(Oo,[["render",Ko]]),Yo={data(){return{products:null,selectedProduct:null,metaKey:!0,code:{basic:`<DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" dataKey="id" :metaKeySelection="false"
        @rowSelect="onRowSelect" @rowUnselect="onRowUnselect" tableStyle="min-width: 50rem">
    <Column selectionMode="single" headerStyle="width: 3rem"></Column>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" dataKey="id" :metaKeySelection="false"
                @rowSelect="onRowSelect" @rowUnselect="onRowUnselect" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
        <Toast/>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        onRowSelect(event) {
            this.$toast.add({ severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000 });
        },
        onRowUnselect(event) {
            this.$toast.add({ severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" dataKey="id" :metaKeySelection="false"
                @rowSelect="onRowSelect" @rowUnselect="onRowUnselect" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
        <Toast/>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const selectedProduct = ref();
const toast = useToast();
const onRowSelect = (event) => {
    toast.add({ severity: 'info', summary: 'Product Selected', detail: 'Name: ' + event.data.name, life: 3000 });
};
const onRowUnselect = (event) => {
    toast.add({ severity: 'warn', summary: 'Product Unselected', detail: 'Name: ' + event.data.name, life: 3000 });
}

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)},methods:{onRowSelect(a){this.$toast.add({severity:"info",summary:"Product Selected",detail:"Name: "+a.data.name,life:3e3})},onRowUnselect(a){this.$toast.add({severity:"warn",summary:"Product Unselected",detail:"Name: "+a.data.name,life:3e3})}}},Go=e("p",null,[o("DataTable provides "),e("i",null,"row-select"),o(" and "),e("i",null,"row-unselect"),o(" events to listen selection events.")],-1),Qo={class:"card"};function Wo(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Go]),_:1},16),e("div",Qo,[t(s,{selection:l.selectedProduct,"onUpdate:selection":i[0]||(i[0]=y=>l.selectedProduct=y),value:l.products,selectionMode:"single",dataKey:"id",metaKeySelection:!1,onRowSelect:c.onRowSelect,onRowUnselect:c.onRowUnselect,tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"code",header:"Code"}),t(n,{field:"name",header:"Name"}),t(n,{field:"category",header:"Category"}),t(n,{field:"quantity",header:"Quantity"})]),_:1},8,["selection","value","onRowSelect","onRowUnselect"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const jo=M(Yo,[["render",Wo]]),Ho={data(){return{products:null,selectedProduct:null,metaKey:!0,code:{basic:`<InputSwitch v-model="metaKey" inputId="input-metakey" />

<DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" :metaKeySelection="metaKey" dataKey="id" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <div class="flex justify-content-center align-items-center mb-4 gap-2">
            <InputSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" :metaKeySelection="metaKey" dataKey="id" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            selectedProduct: null,
            metaKey: true
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <div class="flex justify-content-center align-items-center mb-4 gap-2">
            <InputSwitch v-model="metaKey" inputId="input-metakey" />
            <label for="input-metakey">MetaKey</label>
        </div>
        <DataTable v-model:selection="selectedProduct" :value="products" selectionMode="single" :metaKeySelection="metaKey" dataKey="id" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const selectedProduct = ref();
const metaKey = ref(true);

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},Jo=e("p",null,[o(" Single row selection is enabled by defining "),e("i",null,"selectionMode"),o(" as "),e("i",null,"single"),o(" along with a value binding using "),e("i",null,"selection"),o(" property. When available, it is suggested to provide a unique identifier of a row with "),e("i",null,"dataKey"),o(" to optimize performance. ")],-1),Xo=e("p",null,[o(" By default, metaKey press (e.g. "),e("i",null,"⌘"),o(") is necessary to unselect a row however this can be configured with disabling the "),e("i",null,"metaKeySelection"),o(" property. In touch enabled devices this option has no effect and behavior is same as setting it to false. ")],-1),Zo={class:"card"},er={class:"flex justify-content-center align-items-center mb-4 gap-2"},tr=e("label",{for:"input-metakey"},"MetaKey",-1);function ar(a,i,h,S,l,c){const p=k,n=d("InputSwitch"),s=d("Column"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Jo,Xo]),_:1},16),e("div",Zo,[e("div",er,[t(n,{modelValue:l.metaKey,"onUpdate:modelValue":i[0]||(i[0]=u=>l.metaKey=u),inputId:"input-metakey"},null,8,["modelValue"]),tr]),t(m,{selection:l.selectedProduct,"onUpdate:selection":i[1]||(i[1]=u=>l.selectedProduct=u),value:l.products,selectionMode:"single",metaKeySelection:l.metaKey,dataKey:"id",tableStyle:"min-width: 50rem"},{default:r(()=>[t(s,{field:"code",header:"Code"}),t(s,{field:"name",header:"Name"}),t(s,{field:"category",header:"Category"}),t(s,{field:"quantity",header:"Quantity"})]),_:1},8,["selection","value","metaKeySelection"])]),t(y,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const lr=M(Ho,[["render",ar]]),or={data(){return{customers:null,selectedCustomers:null,filters:null,representatives:[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}],statuses:["unqualified","qualified","new","negotiation","renewal","proposal"],code:{basic:`<DataTable v-model:filters="filters" v-model:selection="selectedCustomers" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="menu"
    :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']">
    <template #header>
        <div class="flex justify-content-between">
            <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
            </span>
        </div>
    </template>
    <template #empty> No customers found. </template>
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <Column field="name" header="Name" sortable style="min-width: 14rem">
        <template #body="{ data }">
            {{ data.name }}
        </template>
        <template #filter="{ filterModel }">
            <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
        </template>
    </Column>
    <Column header="Country" sortable sortField="country.name" filterField="country.name" style="min-width: 14rem">
        <template #body="{ data }">
            <div class="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                <span>{{ data.country.name }}</span>
            </div>
        </template>
        <template #filter="{ filterModel }">
            <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by country" />
        </template>
    </Column>
    <Column header="Agent" sortable sortField="representative.name" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
        <template #body="{ data }">
            <div class="flex align-items-center gap-2">
                <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                <span>{{ data.representative.name }}</span>
            </div>
        </template>
        <template #filter="{ filterModel }">
            <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                <template #option="slotProps">
                    <div class="flex align-items-center gap-2">
                        <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                        <span>{{ slotProps.option.name }}</span>
                    </div>
                </template>
            </MultiSelect>
        </template>
    </Column>
    <Column field="date" header="Date" sortable filterField="date" dataType="date" style="min-width: 10rem">
        <template #body="{ data }">
            {{ formatDate(data.date) }}
        </template>
        <template #filter="{ filterModel }">
            <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
        </template>
    </Column>
    <Column field="balance" header="Balance" sortable filterField="balance" dataType="numeric" style="min-width: 10rem">
        <template #body="{ data }">
            {{ formatCurrency(data.balance) }}
        </template>
        <template #filter="{ filterModel }">
            <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
        </template>
    </Column>
    <Column header="Status" field="status" sortable :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
        <template #body="{ data }">
            <Tag :value="data.status" :severity="getSeverity(data.status)" />
        </template>
        <template #filter="{ filterModel }">
            <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Select One" class="p-column-filter" showClear>
                <template #option="slotProps">
                    <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                </template>
            </Dropdown>
        </template>
    </Column>
    <Column field="activity" header="Activity" sortable :showFilterMatchModes="false" style="min-width: 12rem">
        <template #body="{ data }">
            <ProgressBar :value="data.activity" :showValue="false" style="height: 6px"></ProgressBar>
        </template>
        <template #filter="{ filterModel }">
            <Slider v-model="filterModel.value" range class="m-3"></Slider>
            <div class="flex align-items-center justify-content-between px-2">
                <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
                <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
            </div>
        </template>
    </Column>
    <Column headerStyle="width: 5rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
        <template #body>
            <Button type="button" icon="pi pi-cog" rounded />
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable v-model:filters="filters" v-model:selection="selectedCustomers" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="menu"
            :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']">
            <template #header>
                <div class="flex justify-content-between">
                    <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </span>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="name" header="Name" sortable style="min-width: 14rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" sortable sortField="country.name" filterField="country.name" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by country" />
                </template>
            </Column>
            <Column header="Agent" sortable sortField="representative.name" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="date" header="Date" sortable filterField="date" dataType="date" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatDate(data.date) }}
                </template>
                <template #filter="{ filterModel }">
                    <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
                </template>
            </Column>
            <Column field="balance" header="Balance" sortable filterField="balance" dataType="numeric" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
                <template #filter="{ filterModel }">
                    <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                </template>
            </Column>
            <Column header="Status" field="status" sortable :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Select One" class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="activity" header="Activity" sortable :showFilterMatchModes="false" style="min-width: 12rem">
                <template #body="{ data }">
                    <ProgressBar :value="data.activity" :showValue="false" style="height: 6px"></ProgressBar>
                </template>
                <template #filter="{ filterModel }">
                    <Slider v-model="filterModel.value" range class="m-3"></Slider>
                    <div class="flex align-items-center justify-content-between px-2">
                        <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
                        <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
                    </div>
                </template>
            </Column>
            <Column headerStyle="width: 5rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                <template #body>
                    <Button type="button" icon="pi pi-cog" rounded />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

export default {
    data() {
        return {
            customers: null,
            selectedCustomers: null,
            filters: null,
            representatives: [
                { name: 'Amy Elsner', image: 'amyelsner.png' },
                { name: 'Anna Fali', image: 'annafali.png' },
                { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
                { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
                { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
                { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
                { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
                { name: 'Onyama Limba', image: 'onyamalimba.png' },
                { name: 'Stephen Shaw', image: 'stephenshaw.png' },
                { name: 'XuXue Feng', image: 'xuxuefeng.png' }
            ],
            statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']
        };
    },
    created() {
        this.initFilters();
    },
    mounted() {
        CustomerService.getCustomersLarge().then((data) => {
            this.customers = this.getCustomers(data);
        });
    },
    methods: {
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        clearFilter() {
            this.initFilters();
        },
        initFilters() {
            this.filters = {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
                representative: { value: null, matchMode: FilterMatchMode.IN },
                date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
                balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
                activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
                verified: { value: null, matchMode: FilterMatchMode.EQUALS }
            };
        },
        getCustomers(data) {
            return [...(data || [])].map((d) => {
                d.date = new Date(d.date);

                return d;
            });
        },
        getSeverity(status) {
            switch (status) {
                case 'unqualified':
                    return 'danger';

                case 'qualified':
                    return 'success';

                case 'new':
                    return 'info';

                case 'negotiation':
                    return 'warning';

                case 'renewal':
                    return null;
            }
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable v-model:filters="filters" v-model:selection="selectedCustomers" :value="customers" paginator :rows="10" dataKey="id" filterDisplay="menu"
            :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']">
            <template #header>
                <div class="flex justify-content-between">
                    <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </span>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
            <Column field="name" header="Name" sortable style="min-width: 14rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" sortable sortField="country.name" filterField="country.name" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by country" />
                </template>
            </Column>
            <Column header="Agent" sortable sortField="representative.name" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="date" header="Date" sortable filterField="date" dataType="date" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatDate(data.date) }}
                </template>
                <template #filter="{ filterModel }">
                    <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
                </template>
            </Column>
            <Column field="balance" header="Balance" sortable filterField="balance" dataType="numeric" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
                <template #filter="{ filterModel }">
                    <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                </template>
            </Column>
            <Column header="Status" field="status" sortable :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Select One" class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="activity" header="Activity" sortable :showFilterMatchModes="false" style="min-width: 12rem">
                <template #body="{ data }">
                    <ProgressBar :value="data.activity" :showValue="false" style="height: 6px"></ProgressBar>
                </template>
                <template #filter="{ filterModel }">
                    <Slider v-model="filterModel.value" range class="m-3"></Slider>
                    <div class="flex align-items-center justify-content-between px-2">
                        <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
                        <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
                    </div>
                </template>
            </Column>
            <Column headerStyle="width: 5rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                <template #body>
                    <Button type="button" icon="pi pi-cog" rounded />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

const customers = ref();
const selectedCustomers = ref();
const filters = ref();
const representatives = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);

onMounted(() => {
    CustomerService.getCustomersLarge().then((data) => {
        customers.value = getCustomers(data);
    });
});


const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    };
};

initFilters();

const formatDate = (value) => {
    return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const clearFilter = () => {
    initFilters();
};
const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};
const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};
<\/script>`,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`}}},created(){this.initFilters()},mounted(){V.getCustomersLarge().then(a=>{this.customers=this.getCustomers(a)})},methods:{formatDate(a){return a.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"})},formatCurrency(a){return a.toLocaleString("en-US",{style:"currency",currency:"USD"})},clearFilter(){this.initFilters()},initFilters(){this.filters={global:{value:null,matchMode:N.CONTAINS},name:{operator:L.AND,constraints:[{value:null,matchMode:N.STARTS_WITH}]},"country.name":{operator:L.AND,constraints:[{value:null,matchMode:N.STARTS_WITH}]},representative:{value:null,matchMode:N.IN},date:{operator:L.AND,constraints:[{value:null,matchMode:N.DATE_IS}]},balance:{operator:L.AND,constraints:[{value:null,matchMode:N.EQUALS}]},status:{operator:L.OR,constraints:[{value:null,matchMode:N.EQUALS}]},activity:{value:[0,100],matchMode:N.BETWEEN},verified:{value:null,matchMode:N.EQUALS}}},getCustomers(a){return[...a||[]].map(i=>(i.date=new Date(i.date),i))},getSeverity(a){switch(a){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}}},rr=e("p",null,"DataTable with selection, pagination, filtering, sorting and templating.",-1),nr={class:"card"},ir={class:"flex justify-content-between"},sr={class:"p-input-icon-left"},dr=e("i",{class:"pi pi-search"},null,-1),cr={class:"flex align-items-center gap-2"},ur={class:"flex align-items-center gap-2"},mr=["alt","src"],pr={class:"flex align-items-center gap-2"},hr=["alt","src"],fr={class:"flex align-items-center justify-content-between px-2"};function vr(a,i,h,S,l,c){const p=k,n=d("Button"),s=d("InputText"),m=d("Column"),y=d("MultiSelect"),u=d("Calendar"),D=d("InputNumber"),w=d("Tag"),C=d("Dropdown"),g=d("ProgressBar"),A=d("Slider"),$=d("DataTable"),z=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[rr]),_:1},16),e("div",nr,[t($,{filters:l.filters,"onUpdate:filters":i[2]||(i[2]=P=>l.filters=P),selection:l.selectedCustomers,"onUpdate:selection":i[3]||(i[3]=P=>l.selectedCustomers=P),value:l.customers,paginator:"",rows:10,dataKey:"id",filterDisplay:"menu",globalFilterFields:["name","country.name","representative.name","balance","status"]},{header:r(()=>[e("div",ir,[t(n,{type:"button",icon:"pi pi-filter-slash",label:"Clear",outlined:"",onClick:i[0]||(i[0]=P=>c.clearFilter())}),e("span",sr,[dr,t(s,{modelValue:l.filters.global.value,"onUpdate:modelValue":i[1]||(i[1]=P=>l.filters.global.value=P),placeholder:"Keyword Search"},null,8,["modelValue"])])])]),empty:r(()=>[o(" No customers found. ")]),default:r(()=>[t(m,{selectionMode:"multiple",headerStyle:"width: 3rem"}),t(m,{field:"name",header:"Name",sortable:"",style:{"min-width":"14rem"}},{body:r(({data:P})=>[o(T(P.name),1)]),filter:r(({filterModel:P})=>[t(s,{modelValue:P.value,"onUpdate:modelValue":f=>P.value=f,type:"text",class:"p-column-filter",placeholder:"Search by name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(m,{header:"Country",sortable:"",sortField:"country.name",filterField:"country.name",style:{"min-width":"14rem"}},{body:r(({data:P})=>[e("div",cr,[e("img",{alt:"flag",src:"https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png",class:U(`flag flag-${P.country.code}`),style:{width:"24px"}},null,2),e("span",null,T(P.country.name),1)])]),filter:r(({filterModel:P})=>[t(s,{modelValue:P.value,"onUpdate:modelValue":f=>P.value=f,type:"text",class:"p-column-filter",placeholder:"Search by country"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(m,{header:"Agent",sortable:"",sortField:"representative.name",filterField:"representative",showFilterMatchModes:!1,filterMenuStyle:{width:"14rem"},style:{"min-width":"14rem"}},{body:r(({data:P})=>[e("div",ur,[e("img",{alt:P.representative.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${P.representative.image}`,style:{width:"32px"}},null,8,mr),e("span",null,T(P.representative.name),1)])]),filter:r(({filterModel:P})=>[t(y,{modelValue:P.value,"onUpdate:modelValue":f=>P.value=f,options:l.representatives,optionLabel:"name",placeholder:"Any",class:"p-column-filter"},{option:r(f=>[e("div",pr,[e("img",{alt:f.option.name,src:`https://primefaces.org/cdn/primevue/images/avatar/${f.option.image}`,style:{width:"32px"}},null,8,hr),e("span",null,T(f.option.name),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),t(m,{field:"date",header:"Date",sortable:"",filterField:"date",dataType:"date",style:{"min-width":"10rem"}},{body:r(({data:P})=>[o(T(c.formatDate(P.date)),1)]),filter:r(({filterModel:P})=>[t(u,{modelValue:P.value,"onUpdate:modelValue":f=>P.value=f,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy",mask:"99/99/9999"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(m,{field:"balance",header:"Balance",sortable:"",filterField:"balance",dataType:"numeric",style:{"min-width":"10rem"}},{body:r(({data:P})=>[o(T(c.formatCurrency(P.balance)),1)]),filter:r(({filterModel:P})=>[t(D,{modelValue:P.value,"onUpdate:modelValue":f=>P.value=f,mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(m,{header:"Status",sortable:"",field:"status",filterMenuStyle:{width:"14rem"},style:{"min-width":"12rem"}},{body:r(({data:P})=>[t(w,{value:P.status,severity:c.getSeverity(P.status)},null,8,["value","severity"])]),filter:r(({filterModel:P})=>[t(C,{modelValue:P.value,"onUpdate:modelValue":f=>P.value=f,options:l.statuses,placeholder:"Select One",class:"p-column-filter",showClear:""},{option:r(f=>[t(w,{value:f.option,severity:c.getSeverity(f.option)},null,8,["value","severity"])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),t(m,{field:"activity",header:"Activity",sortable:"",showFilterMatchModes:!1,style:{"min-width":"12rem"}},{body:r(({data:P})=>[t(g,{value:P.activity,showValue:!1,style:{height:"6px"}},null,8,["value"])]),filter:r(({filterModel:P})=>[t(A,{modelValue:P.value,"onUpdate:modelValue":f=>P.value=f,range:"",class:"m-3"},null,8,["modelValue","onUpdate:modelValue"]),e("div",fr,[e("span",null,T(P.value?P.value[0]:0),1),e("span",null,T(P.value?P.value[1]:100),1)])]),_:1}),t(m,{headerStyle:"width: 5rem; text-align: center",bodyStyle:"text-align: center; overflow: visible"},{body:r(()=>[t(n,{type:"button",icon:"pi pi-cog",rounded:""})]),_:1})]),_:1},8,["filters","selection","value","globalFilterFields"])]),t(z,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const yr=M(or,[["render",vr]]),gr={data(){return{products:null,productDialog:!1,deleteProductDialog:!1,deleteProductsDialog:!1,product:{},selectedProducts:null,filters:{},submitted:!1,statuses:[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}],code:{basic:`<Toolbar class="mb-4">
    <template #start>
        <Button label="New" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew" />
        <Button label="Delete" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
    </template>
    <template #end>
        <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
        <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)"  />
    </template>
</Toolbar>
<DataTable ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id" 
    :paginator="true" :rows="10" :filters="filters"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
    <template #header>
        <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 class="m-0">Manage Products</h4>
            <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Search..." />
            </span>
        </div>
    </template>
    <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
    <Column field="code" header="Code" sortable style="min-width:12rem"></Column>
    <Column field="name" header="Name" sortable style="min-width:16rem"></Column>
    <Column header="Image">
        <template #body="slotProps">
            <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="shadow-2 border-round" style="width: 64px" />
        </template>
    </Column>
    <Column field="price" header="Price" sortable style="min-width:8rem">
        <template #body="slotProps">
            {{formatCurrency(slotProps.data.price)}}
        </template>
    </Column>
    <Column field="category" header="Category" sortable style="min-width:10rem"></Column>
    <Column field="rating" header="Reviews" sortable style="min-width:12rem">
        <template #body="slotProps">
            <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
        </template>
    </Column>
    <Column field="inventoryStatus" header="Status" sortable style="min-width:12rem">
        <template #body="slotProps">
            <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
        </template>
    </Column>
    <Column :exportable="false" style="min-width:8rem">
        <template #body="slotProps">
            <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
            <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div>
        <div class="card">
            <Toolbar class="mb-4">
                <template #start>
                    <Button label="New" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                </template>

                <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
                    <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)"  />
                </template>
            </Toolbar>

            <DataTable ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id" 
                :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                <template #header>
                    <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                        <h4 class="m-0">Manage Products</h4>
						<span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </span>
					</div>
                </template>

                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="code" header="Code" sortable style="min-width:12rem"></Column>
                <Column field="name" header="Name" sortable style="min-width:16rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="shadow-2 border-round" style="width: 64px" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width:8rem">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
                <Column field="category" header="Category" sortable style="min-width:10rem"></Column>
                <Column field="rating" header="Reviews" sortable style="min-width:12rem">
                    <template #body="slotProps">
                        <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" sortable style="min-width:12rem">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
                    </template>
                </Column>
                <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
            <img v-if="product.image" :src="\`https://primefaces.org/cdn/primevue/images/product/\${product.image}\`" :alt="product.image" class="block m-auto pb-3" />
            <div class="field">
                <label for="name">Name</label>
                <InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted && !product.name}" />
                <small class="p-error" v-if="submitted && !product.name">Name is required.</small>
            </div>
            <div class="field">
                <label for="description">Description</label>
                <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
            </div>

            <div class="field">
				<label for="inventoryStatus" class="mb-3">Inventory Status</label>
				<Dropdown id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses" optionLabel="label" placeholder="Select a Status">
					<template #value="slotProps">
						<div v-if="slotProps.value && slotProps.value.value">
                            <Tag :value="slotProps.value.value" :severity="getStatusLabel(slotProps.value.label)" />
                        </div>
                        <div v-else-if="slotProps.value && !slotProps.value.value">
                            <Tag :value="slotProps.value" :severity="getStatusLabel(slotProps.value)" />
                        </div>
						<span v-else>
							{{slotProps.placeholder}}
						</span>
					</template>
				</Dropdown>
			</div>

            <div class="field">
                <label class="mb-3">Category</label>
                <div class="formgrid grid">
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category1" name="category" value="Accessories" v-model="product.category" />
                        <label for="category1">Accessories</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category2" name="category" value="Clothing" v-model="product.category" />
                        <label for="category2">Clothing</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category3" name="category" value="Electronics" v-model="product.category" />
                        <label for="category3">Electronics</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category4" name="category" value="Fitness" v-model="product.category" />
                        <label for="category4">Fitness</label>
                    </div>
                </div>
            </div>

            <div class="formgrid grid">
                <div class="field col">
                    <label for="price">Price</label>
                    <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" />
                </div>
                <div class="field col">
                    <label for="quantity">Quantity</label>
                    <InputNumber id="quantity" v-model="product.quantity" integeronly />
                </div>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text @click="hideDialog"/>
                <Button label="Save" icon="pi pi-check" text @click="saveProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text @click="deleteProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete the selected products?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductsDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedProducts" />
            </template>
        </Dialog>
	</div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api';
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null,
            productDialog: false,
            deleteProductDialog: false,
            deleteProductsDialog: false,
            product: {},
            selectedProducts: null,
            filters: {},
            submitted: false,
            statuses: [
				{label: 'INSTOCK', value: 'instock'},
				{label: 'LOWSTOCK', value: 'lowstock'},
				{label: 'OUTOFSTOCK', value: 'outofstock'}
            ]
        }
    },
    created() {
        this.initFilters();
    },
    mounted() {
        ProductService.getProducts().then((data) => (this.products = data));
    },
    methods: {
        formatCurrency(value) {
            if(value)
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			return;
        },
        openNew() {
            this.product = {};
            this.submitted = false;
            this.productDialog = true;
        },
        hideDialog() {
            this.productDialog = false;
            this.submitted = false;
        },
        saveProduct() {
            this.submitted = true;

			if (this.product.name.trim()) {
                if (this.product.id) {
                    this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value: this.product.inventoryStatus;
                    this.products[this.findIndexById(this.product.id)] = this.product;
                    this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
                }
                else {
                    this.product.id = this.createId();
                    this.product.code = this.createId();
                    this.product.image = 'product-placeholder.svg';
                    this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                    this.products.push(this.product);
                    this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
                }

                this.productDialog = false;
                this.product = {};
            }
        },
        editProduct(product) {
            this.product = {...product};
            this.productDialog = true;
        },
        confirmDeleteProduct(product) {
            this.product = product;
            this.deleteProductDialog = true;
        },
        deleteProduct() {
            this.products = this.products.filter(val => val.id !== this.product.id);
            this.deleteProductDialog = false;
            this.product = {};
            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
        },
        findIndexById(id) {
            let index = -1;
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].id === id) {
                    index = i;
                    break;
                }
            }

            return index;
        },
        createId() {
            let id = '';
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for ( var i = 0; i < 5; i++ ) {
                id += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return id;
        },
        exportCSV() {
            this.$refs.dt.exportCSV();
        },
        confirmDeleteSelected() {
            this.deleteProductsDialog = true;
        },
        deleteSelectedProducts() {
            this.products = this.products.filter(val => !this.selectedProducts.includes(val));
            this.deleteProductsDialog = false;
            this.selectedProducts = null;
            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        },
        initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            }
        },
        getStatusLabel(status) {
            switch (status) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        }
    }
}
<\/script>
`,composition:`<template>
    <div>
        <div class="card">
            <Toolbar class="mb-4">
                <template #start>
                    <Button label="New" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
                </template>

                <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
                    <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)"  />
                </template>
            </Toolbar>

            <DataTable ref="dt" :value="products" v-model:selection="selectedProducts" dataKey="id" 
                :paginator="true" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                <template #header>
                    <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                        <h4 class="m-0">Manage Products</h4>
						<span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </span>
					</div>
                </template>

                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="code" header="Code" sortable style="min-width:12rem"></Column>
                <Column field="name" header="Name" sortable style="min-width:16rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.data.image}\`" :alt="slotProps.data.image" class="shadow-2 border-round" style="width: 64px" />
                    </template>
                </Column>
                <Column field="price" header="Price" sortable style="min-width:8rem">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.price)}}
                    </template>
                </Column>
                <Column field="category" header="Category" sortable style="min-width:10rem"></Column>
                <Column field="rating" header="Reviews" sortable style="min-width:12rem">
                    <template #body="slotProps">
                        <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                    </template>
                </Column>
                <Column field="inventoryStatus" header="Status" sortable style="min-width:12rem">
                    <template #body="slotProps">
                        <Tag :value="slotProps.data.inventoryStatus" :severity="getStatusLabel(slotProps.data.inventoryStatus)" />
                    </template>
                </Column>
                <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
            <img v-if="product.image" :src="\`https://primefaces.org/cdn/primevue/images/product/\${product.image}\`" :alt="product.image" class="block m-auto pb-3" />
            <div class="field">
                <label for="name">Name</label>
                <InputText id="name" v-model.trim="product.name" required="true" autofocus :class="{'p-invalid': submitted && !product.name}" />
                <small class="p-error" v-if="submitted && !product.name">Name is required.</small>
            </div>
            <div class="field">
                <label for="description">Description</label>
                <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
            </div>

            <div class="field">
				<label for="inventoryStatus" class="mb-3">Inventory Status</label>
				<Dropdown id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses" optionLabel="label" placeholder="Select a Status">
					<template #value="slotProps">
						<div v-if="slotProps.value && slotProps.value.value">
                            <Tag :value="slotProps.value.value" :severity="getStatusLabel(slotProps.value.label)" />
                        </div>
                        <div v-else-if="slotProps.value && !slotProps.value.value">
                            <Tag :value="slotProps.value" :severity="getStatusLabel(slotProps.value)" />
                        </div>
						<span v-else>
							{{slotProps.placeholder}}
						</span>
					</template>
				</Dropdown>
			</div>

            <div class="field">
                <label class="mb-3">Category</label>
                <div class="formgrid grid">
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category1" name="category" value="Accessories" v-model="product.category" />
                        <label for="category1">Accessories</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category2" name="category" value="Clothing" v-model="product.category" />
                        <label for="category2">Clothing</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category3" name="category" value="Electronics" v-model="product.category" />
                        <label for="category3">Electronics</label>
                    </div>
                    <div class="field-radiobutton col-6">
                        <RadioButton id="category4" name="category" value="Fitness" v-model="product.category" />
                        <label for="category4">Fitness</label>
                    </div>
                </div>
            </div>

            <div class="formgrid grid">
                <div class="field col">
                    <label for="price">Price</label>
                    <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" />
                </div>
                <div class="field col">
                    <label for="quantity">Quantity</label>
                    <InputNumber id="quantity" v-model="product.quantity" integeronly />
                </div>
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text @click="hideDialog"/>
                <Button label="Save" icon="pi pi-check" text @click="saveProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text @click="deleteProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete the selected products?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductsDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedProducts" />
            </template>
        </Dialog>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { useToast } from 'primevue/usetoast';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProducts().then((data) => (products.value = data));
});

const toast = useToast();
const dt = ref();
const products = ref();
const productDialog = ref(false);
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const product = ref({});
const selectedProducts = ref();
const filters = ref({
    'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
});
const submitted = ref(false);
const statuses = ref([
    {label: 'INSTOCK', value: 'instock'},
    {label: 'LOWSTOCK', value: 'lowstock'},
    {label: 'OUTOFSTOCK', value: 'outofstock'}
]);

const formatCurrency = (value) => {
    if(value)
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    return;
};
const openNew = () => {
    product.value = {};
    submitted.value = false;
    productDialog.value = true;
};
const hideDialog = () => {
    productDialog.value = false;
    submitted.value = false;
};
const saveProduct = () => {
    submitted.value = true;

    if (product.value.name.trim()) {
        if (product.value.id) {
            product.value.inventoryStatus = product.value.inventoryStatus.value ? product.value.inventoryStatus.value : product.value.inventoryStatus;
            products.value[findIndexById(product.value.id)] = product.value;
            toast.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
        }
        else {
            product.value.id = createId();
            product.value.code = createId();
            product.value.image = 'product-placeholder.svg';
            product.value.inventoryStatus = product.value.inventoryStatus ? product.value.inventoryStatus.value : 'INSTOCK';
            products.value.push(product.value);
            toast.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        }

        productDialog.value = false;
        product.value = {};
    }
};
const editProduct = (prod) => {
    product.value = {...prod};
    productDialog.value = true;
};
const confirmDeleteProduct = (prod) => {
    product.value = prod;
    deleteProductDialog.value = true;
};
const deleteProduct = () => {
    products.value = products.value.filter(val => val.id !== product.value.id);
    deleteProductDialog.value = false;
    product.value = {};
    toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
};
const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < products.value.length; i++) {
        if (products.value[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
};
const createId = () => {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}
const exportCSV = () => {
    dt.value.exportCSV();
};
const confirmDeleteSelected = () => {
    deleteProductsDialog.value = true;
};
const deleteSelectedProducts = () => {
    products.value = products.value.filter(val => !selectedProducts.value.includes(val));
    deleteProductsDialog.value = false;
    selectedProducts.value = null;
    toast.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
};

const getStatusLabel = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};

<\/script>
`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`}}},created(){this.initFilters()},mounted(){B.getProducts().then(a=>this.products=a)},methods:{formatCurrency(a){if(a)return a.toLocaleString("en-US",{style:"currency",currency:"USD"})},openNew(){this.product={},this.submitted=!1,this.productDialog=!0},hideDialog(){this.productDialog=!1,this.submitted=!1},saveProduct(){this.submitted=!0,this.product.name.trim()&&(this.product.id?(this.product.inventoryStatus=this.product.inventoryStatus.value?this.product.inventoryStatus.value:this.product.inventoryStatus,this.products[this.findIndexById(this.product.id)]=this.product,this.$toast.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.code=this.createId(),this.product.image="product-placeholder.svg",this.product.inventoryStatus=this.product.inventoryStatus?this.product.inventoryStatus.value:"INSTOCK",this.products.push(this.product),this.$toast.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),this.productDialog=!1,this.product={})},editProduct(a){this.product={...a},this.productDialog=!0},confirmDeleteProduct(a){this.product=a,this.deleteProductDialog=!0},deleteProduct(){this.products=this.products.filter(a=>a.id!==this.product.id),this.deleteProductDialog=!1,this.product={},this.$toast.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},findIndexById(a){let i=-1;for(let h=0;h<this.products.length;h++)if(this.products[h].id===a){i=h;break}return i},createId(){let a="";for(var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=0;h<5;h++)a+=i.charAt(Math.floor(Math.random()*i.length));return a},exportCSV(){this.$refs.dt.exportCSV()},confirmDeleteSelected(){this.deleteProductsDialog=!0},deleteSelectedProducts(){this.products=this.products.filter(a=>!this.selectedProducts.includes(a)),this.deleteProductsDialog=!1,this.selectedProducts=null,this.$toast.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},initFilters(){this.filters={global:{value:null,matchMode:N.CONTAINS}}},getStatusLabel(a){switch(a){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}}}},Cr=e("p",null,"CRUD implementation example with a Dialog.",-1),br={class:"card"},wr={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},Sr=e("h4",{class:"m-0"},"Manage Products",-1),_r={class:"p-input-icon-left"},xr=e("i",{class:"pi pi-search"},null,-1),Pr=["src","alt"],Tr=["src","alt"],Mr={class:"field"},Dr=e("label",{for:"name"},"Name",-1),kr={key:0,class:"p-error"},Rr={class:"field"},Fr=e("label",{for:"description"},"Description",-1),Ir={class:"field"},Nr=e("label",{for:"inventoryStatus",class:"mb-3"},"Inventory Status",-1),$r={key:0},Br={key:1},Ar={key:2},Vr={class:"field"},Lr=e("label",{class:"mb-3"},"Category",-1),Ur={class:"formgrid grid"},Or={class:"field-radiobutton col-6"},zr=e("label",{for:"category1"},"Accessories",-1),qr={class:"field-radiobutton col-6"},Kr=e("label",{for:"category2"},"Clothing",-1),Er={class:"field-radiobutton col-6"},Yr=e("label",{for:"category3"},"Electronics",-1),Gr={class:"field-radiobutton col-6"},Qr=e("label",{for:"category4"},"Fitness",-1),Wr={class:"formgrid grid"},jr={class:"field col"},Hr=e("label",{for:"price"},"Price",-1),Jr={class:"field col"},Xr=e("label",{for:"quantity"},"Quantity",-1),Zr={class:"confirmation-content"},en=e("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),tn={key:0},an={class:"confirmation-content"},ln=e("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),on={key:0};function rn(a,i,h,S,l,c){const p=k,n=d("Button"),s=d("FileUpload"),m=d("Toolbar"),y=d("InputText"),u=d("Column"),D=d("Rating"),w=d("Tag"),C=d("DataTable"),g=d("Textarea"),A=d("Dropdown"),$=d("RadioButton"),z=d("InputNumber"),P=d("Dialog"),f=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Cr]),_:1},16),e("div",br,[t(m,{class:"mb-4"},{start:r(()=>[t(n,{label:"New",icon:"pi pi-plus",severity:"success",class:"mr-2",onClick:c.openNew},null,8,["onClick"]),t(n,{label:"Delete",icon:"pi pi-trash",severity:"danger",onClick:c.confirmDeleteSelected,disabled:!l.selectedProducts||!l.selectedProducts.length},null,8,["onClick","disabled"])]),end:r(()=>[t(s,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import",class:"mr-2 inline-block"}),t(n,{label:"Export",icon:"pi pi-upload",severity:"help",onClick:i[0]||(i[0]=v=>c.exportCSV(v))})]),_:1}),t(C,{ref:"dt",selection:l.selectedProducts,"onUpdate:selection":i[2]||(i[2]=v=>l.selectedProducts=v),value:l.products,dataKey:"id",paginator:!0,rows:10,filters:l.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products"},{header:r(()=>[e("div",wr,[Sr,e("span",_r,[xr,t(y,{modelValue:l.filters.global.value,"onUpdate:modelValue":i[1]||(i[1]=v=>l.filters.global.value=v),placeholder:"Search..."},null,8,["modelValue"])])])]),default:r(()=>[t(u,{selectionMode:"multiple",style:{width:"3rem"},exportable:!1}),t(u,{field:"code",header:"Code",sortable:"",style:{"min-width":"12rem"}}),t(u,{field:"name",header:"Name",sortable:"",style:{"min-width":"16rem"}}),t(u,{header:"Image"},{body:r(v=>[e("img",{src:`https://primefaces.org/cdn/primevue/images/product/${v.data.image}`,alt:v.data.image,class:"shadow-2 border-round",style:{width:"64px"}},null,8,Pr)]),_:1}),t(u,{field:"price",header:"Price",sortable:"",style:{"min-width":"8rem"}},{body:r(v=>[o(T(c.formatCurrency(v.data.price)),1)]),_:1}),t(u,{field:"category",header:"Category",sortable:"",style:{"min-width":"10rem"}}),t(u,{field:"rating",header:"Reviews",sortable:"",style:{"min-width":"12rem"}},{body:r(v=>[t(D,{modelValue:v.data.rating,readonly:!0,cancel:!1},null,8,["modelValue"])]),_:1}),t(u,{field:"inventoryStatus",header:"Status",sortable:"",style:{"min-width":"12rem"}},{body:r(v=>[t(w,{value:v.data.inventoryStatus,severity:c.getStatusLabel(v.data.inventoryStatus)},null,8,["value","severity"])]),_:1}),t(u,{exportable:!1,style:{"min-width":"12rem"}},{body:r(v=>[t(n,{icon:"pi pi-pencil",outlined:"",rounded:"",class:"mr-2",onClick:Z=>c.editProduct(v.data)},null,8,["onClick"]),t(n,{icon:"pi pi-trash",outlined:"",rounded:"",severity:"danger",onClick:Z=>c.confirmDeleteProduct(v.data)},null,8,["onClick"])]),_:1})]),_:1},8,["selection","value","filters"])]),t(P,{visible:l.productDialog,"onUpdate:visible":i[12]||(i[12]=v=>l.productDialog=v),style:{width:"450px"},header:"Product Details",modal:!0,class:"p-fluid"},{footer:r(()=>[t(n,{label:"Cancel",icon:"pi pi-times",text:"",onClick:c.hideDialog},null,8,["onClick"]),t(n,{label:"Save",icon:"pi pi-check",text:"",onClick:c.saveProduct},null,8,["onClick"])]),default:r(()=>[l.product.image?(b(),_("img",{key:0,src:`https://primefaces.org/cdn/primevue/images/product/${l.product.image}`,alt:l.product.image,class:"block m-auto pb-3"},null,8,Tr)):Y("",!0),e("div",Mr,[Dr,t(y,{id:"name",modelValue:l.product.name,"onUpdate:modelValue":i[3]||(i[3]=v=>l.product.name=v),modelModifiers:{trim:!0},required:"true",autofocus:"",class:U({"p-invalid":l.submitted&&!l.product.name})},null,8,["modelValue","class"]),l.submitted&&!l.product.name?(b(),_("small",kr,"Name is required.")):Y("",!0)]),e("div",Rr,[Fr,t(g,{id:"description",modelValue:l.product.description,"onUpdate:modelValue":i[4]||(i[4]=v=>l.product.description=v),required:"true",rows:"3",cols:"20"},null,8,["modelValue"])]),e("div",Ir,[Nr,t(A,{id:"inventoryStatus",modelValue:l.product.inventoryStatus,"onUpdate:modelValue":i[5]||(i[5]=v=>l.product.inventoryStatus=v),options:l.statuses,optionLabel:"label",placeholder:"Select a Status"},{value:r(v=>[v.value&&v.value.value?(b(),_("div",$r,[t(w,{value:v.value.value,severity:c.getStatusLabel(v.value.label)},null,8,["value","severity"])])):v.value&&!v.value.value?(b(),_("div",Br,[t(w,{value:v.value,severity:c.getStatusLabel(v.value)},null,8,["value","severity"])])):(b(),_("span",Ar,T(v.placeholder),1))]),_:1},8,["modelValue","options"])]),e("div",Vr,[Lr,e("div",Ur,[e("div",Or,[t($,{id:"category1",modelValue:l.product.category,"onUpdate:modelValue":i[6]||(i[6]=v=>l.product.category=v),name:"category",value:"Accessories"},null,8,["modelValue"]),zr]),e("div",qr,[t($,{id:"category2",modelValue:l.product.category,"onUpdate:modelValue":i[7]||(i[7]=v=>l.product.category=v),name:"category",value:"Clothing"},null,8,["modelValue"]),Kr]),e("div",Er,[t($,{id:"category3",modelValue:l.product.category,"onUpdate:modelValue":i[8]||(i[8]=v=>l.product.category=v),name:"category",value:"Electronics"},null,8,["modelValue"]),Yr]),e("div",Gr,[t($,{id:"category4",modelValue:l.product.category,"onUpdate:modelValue":i[9]||(i[9]=v=>l.product.category=v),name:"category",value:"Fitness"},null,8,["modelValue"]),Qr])])]),e("div",Wr,[e("div",jr,[Hr,t(z,{id:"price",modelValue:l.product.price,"onUpdate:modelValue":i[10]||(i[10]=v=>l.product.price=v),mode:"currency",currency:"USD",locale:"en-US"},null,8,["modelValue"])]),e("div",Jr,[Xr,t(z,{id:"quantity",modelValue:l.product.quantity,"onUpdate:modelValue":i[11]||(i[11]=v=>l.product.quantity=v),integeronly:""},null,8,["modelValue"])])])]),_:1},8,["visible"]),t(P,{visible:l.deleteProductDialog,"onUpdate:visible":i[14]||(i[14]=v=>l.deleteProductDialog=v),style:{width:"450px"},header:"Confirm",modal:!0},{footer:r(()=>[t(n,{label:"No",icon:"pi pi-times",text:"",onClick:i[13]||(i[13]=v=>l.deleteProductDialog=!1)}),t(n,{label:"Yes",icon:"pi pi-check",text:"",onClick:c.deleteProduct},null,8,["onClick"])]),default:r(()=>[e("div",Zr,[en,l.product?(b(),_("span",tn,[o("Are you sure you want to delete "),e("b",null,T(l.product.name),1),o("?")])):Y("",!0)])]),_:1},8,["visible"]),t(P,{visible:l.deleteProductsDialog,"onUpdate:visible":i[16]||(i[16]=v=>l.deleteProductsDialog=v),style:{width:"450px"},header:"Confirm",modal:!0},{footer:r(()=>[t(n,{label:"No",icon:"pi pi-times",text:"",onClick:i[15]||(i[15]=v=>l.deleteProductsDialog=!1)}),t(n,{label:"Yes",icon:"pi pi-check",text:"",onClick:c.deleteSelectedProducts},null,8,["onClick"])]),default:r(()=>[e("div",an,[ln,l.product?(b(),_("span",on,"Are you sure you want to delete the selected products?")):Y("",!0)])]),_:1},8,["visible"]),t(f,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const nn=M(gr,[["render",rn]]),sn={data(){return{customers:null,dialogVisible:!1,code:{basic:`<Button label="Show" icon="pi pi-external-link" @click="dialogVisible = true" />
<Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
    <DataTable :value="customers" scrollable scrollHeight="flex" tableStyle="min-width: 50rem">
        <Column field="name" header="Name"></Column>
        <Column field="country.name" header="Country"></Column>
        <Column field="representative.name" header="Representative"></Column>
        <Column field="company" header="Company"></Column>
    </DataTable>
    <template #footer>
        <Button label="Ok" icon="pi pi-check" @click="dialogVisible = false" />
    </template>
</Dialog>`,options:`<template>
    <div class="card">
        <Button label="Show" icon="pi pi-external-link" @click="dialogVisible = true" />

        <Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
            <DataTable :value="customers" scrollable scrollHeight="flex" tableStyle="min-width: 50rem">
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="company" header="Company"></Column>
            </DataTable>
            <template #footer>
                <Button label="Ok" icon="pi pi-check" @click="dialogVisible = false" />
            </template>
        </Dialog>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            dialogVisible: false
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Button label="Show" icon="pi pi-external-link" @click="dialogVisible = true" />

        <Dialog v-model:visible="dialogVisible" header="Flex Scroll" :style="{ width: '75vw' }" maximizable modal :contentStyle="{ height: '300px' }">
            <DataTable :value="customers" scrollable scrollHeight="flex" tableStyle="min-width: 50rem">
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="company" header="Company"></Column>
            </DataTable>
            <template #footer>
                <Button label="Ok" icon="pi pi-check" @click="dialogVisible = false" />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

const customers = ref();
const dialogVisible = ref(false);

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
        customers.value = data;
    });
});
<\/script>`,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
`}}},mounted(){V.getCustomersMedium().then(a=>{this.customers=a})}},dn=e("p",null," Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes. ",-1),cn={class:"card flex justify-content-center"};function un(a,i,h,S,l,c){const p=k,n=d("Button"),s=d("Column"),m=d("DataTable"),y=d("Dialog"),u=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[dn]),_:1},16),e("div",cn,[t(n,{label:"Show",icon:"pi pi-external-link",onClick:i[0]||(i[0]=D=>l.dialogVisible=!0)}),t(y,{visible:l.dialogVisible,"onUpdate:visible":i[2]||(i[2]=D=>l.dialogVisible=D),header:"Flex Scroll",style:{width:"75vw"},maximizable:"",modal:"",contentStyle:{height:"300px"}},{footer:r(()=>[t(n,{label:"Ok",icon:"pi pi-check",onClick:i[1]||(i[1]=D=>l.dialogVisible=!1)})]),default:r(()=>[t(m,{value:l.customers,scrollable:"",scrollHeight:"flex",tableStyle:"min-width: 50rem"},{default:r(()=>[t(s,{field:"name",header:"Name"}),t(s,{field:"country.name",header:"Country"}),t(s,{field:"representative.name",header:"Representative"}),t(s,{field:"company",header:"Company"})]),_:1},8,["value"])]),_:1},8,["visible"])]),t(u,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const mn=M(sn,[["render",un]]),pn={data(){return{customers:null,balanceFrozen:!1,code:{basic:`<ToggleButton v-model="balanceFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Balance" offLabel="Balance" />
<DataTable :value="customers" scrollable scrollHeight="400px" class="mt-4">
    <Column field="name" header="Name" style="min-width: 200px" frozen class="font-bold"></Column>
    <Column field="id" header="Id" style="min-width: 100px"></Column>
    <Column field="name" header="Name" style="min-width: 200px"></Column>
    <Column field="country.name" header="Country" style="min-width: 200px"></Column>
    <Column field="date" header="Date" style="min-width: 200px"></Column>
    <Column field="company" header="Company" style="min-width: 200px"></Column>
    <Column field="status" header="Status" style="min-width: 200px"></Column>
    <Column field="activity" header="Activity" style="min-width: 200px"></Column>
    <Column field="representative.name" header="Representative" style="min-width: 200px"></Column>
    <Column field="balance" header="Balance" style="min-width: 200px" alignFrozen="right" :frozen="balanceFrozen">
        <template #body="{ data }">
            <span class="font-bold">{{ formatCurrency(data.balance) }}</span>
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div class="card">
        <ToggleButton v-model="balanceFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Balance" offLabel="Balance" />

        <DataTable :value="customers" scrollable scrollHeight="400px" class="mt-4">
            <Column field="name" header="Name" style="min-width: 200px" frozen class="font-bold"></Column>
            <Column field="id" header="Id" style="min-width: 100px"></Column>
            <Column field="name" header="Name" style="min-width: 200px"></Column>
            <Column field="country.name" header="Country" style="min-width: 200px"></Column>
            <Column field="date" header="Date" style="min-width: 200px"></Column>
            <Column field="company" header="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" style="min-width: 200px"></Column>
            <Column field="activity" header="Activity" style="min-width: 200px"></Column>
            <Column field="representative.name" header="Representative" style="min-width: 200px"></Column>
            <Column field="balance" header="Balance" style="min-width: 200px" alignFrozen="right" :frozen="balanceFrozen">
                <template #body="{ data }">
                    <span class="font-bold">{{ formatCurrency(data.balance) }}</span>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            balanceFrozen: false
        };
    },
    mounted() {
        CustomerService.getCustomersLarge().then((data) => {
            this.customers = data;
        });
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <ToggleButton v-model="balanceFrozen" onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Balance" offLabel="Balance" />

        <DataTable :value="customers" scrollable scrollHeight="400px" class="mt-4">
            <Column field="name" header="Name" style="min-width: 200px" frozen class="font-bold"></Column>
            <Column field="id" header="Id" style="min-width: 100px"></Column>
            <Column field="name" header="Name" style="min-width: 200px"></Column>
            <Column field="country.name" header="Country" style="min-width: 200px"></Column>
            <Column field="date" header="Date" style="min-width: 200px"></Column>
            <Column field="company" header="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" style="min-width: 200px"></Column>
            <Column field="activity" header="Activity" style="min-width: 200px"></Column>
            <Column field="representative.name" header="Representative" style="min-width: 200px"></Column>
            <Column field="balance" header="Balance" style="min-width: 200px" alignFrozen="right" :frozen="balanceFrozen">
                <template #body="{ data }">
                    <span class="font-bold">{{ formatCurrency(data.balance) }}</span>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

onMounted(() => {
    CustomerService.getCustomersLarge().then((data) => {
        customers.value = data;
    });
});

const customers = ref();
const balanceFrozen = ref(false);
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
<\/script>`,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
`}}},mounted(){V.getCustomersLarge().then(a=>{this.customers=a})},methods:{formatCurrency(a){return a.toLocaleString("en-US",{style:"currency",currency:"USD"})}}},hn=e("p",null,[o("A column can be fixed during horizontal scrolling by enabling the "),e("i",null,"frozen"),o(" property. The location is defined with the "),e("i",null,"alignFrozen"),o(" that can be "),e("i",null,"left"),o(" or "),e("i",null,"right"),o(".")],-1),fn={class:"card"},vn={class:"font-bold"};function yn(a,i,h,S,l,c){const p=k,n=d("ToggleButton"),s=d("Column"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[hn]),_:1},16),e("div",fn,[t(n,{modelValue:l.balanceFrozen,"onUpdate:modelValue":i[0]||(i[0]=u=>l.balanceFrozen=u),onIcon:"pi pi-lock",offIcon:"pi pi-lock-open",onLabel:"Balance",offLabel:"Balance"},null,8,["modelValue"]),t(m,{value:l.customers,scrollable:"",scrollHeight:"400px",class:"mt-4"},{default:r(()=>[t(s,{field:"name",header:"Name",style:{"min-width":"200px"},frozen:"",class:"font-bold"}),t(s,{field:"id",header:"Id",style:{"min-width":"100px"}}),t(s,{field:"name",header:"Name",style:{"min-width":"200px"}}),t(s,{field:"country.name",header:"Country",style:{"min-width":"200px"}}),t(s,{field:"date",header:"Date",style:{"min-width":"200px"}}),t(s,{field:"company",header:"Company",style:{"min-width":"200px"}}),t(s,{field:"status",header:"Status",style:{"min-width":"200px"}}),t(s,{field:"activity",header:"Activity",style:{"min-width":"200px"}}),t(s,{field:"representative.name",header:"Representative",style:{"min-width":"200px"}}),t(s,{field:"balance",header:"Balance",style:{"min-width":"200px"},alignFrozen:"right",frozen:l.balanceFrozen},{body:r(({data:u})=>[e("span",vn,T(c.formatCurrency(u.balance)),1)]),_:1},8,["frozen"])]),_:1},8,["value"])]),t(y,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const gn=M(pn,[["render",yn]]);const Cn={data(){return{customers:null,lockedCustomers:[{id:5135,name:"Geraldine Bisset",country:{name:"France",code:"fr"},company:"Bisset Group",status:"proposal",date:"2019-05-05",activity:0,representative:{name:"Amy Elsner",image:"amyelsner.png"}}],code:{basic:`<DataTable :value="customers" :frozenValue="lockedCustomers" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
    <Column field="name" header="Name"></Column>
    <Column field="country.name" header="Country"></Column>
    <Column field="representative.name" header="Representative"></Column>
    <Column field="status" header="Status"></Column>
    <Column style="flex: 0 0 4rem">
        <template #body="{ data, frozenRow, index }">
            <Button type="button" :icon="frozenRow ? 'pi pi-lock-open' : 'pi pi-lock'" :disabled="frozenRow ? false : lockedCustomers.length >= 2" text size="small" @click="toggleLock(data, frozenRow, index)" />
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="customers" :frozenValue="lockedCustomers" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="status" header="Status"></Column>
            <Column style="flex: 0 0 4rem">
                <template #body="{ data, frozenRow, index }">
                    <Button type="button" :icon="frozenRow ? 'pi pi-lock-open' : 'pi pi-lock'" :disabled="frozenRow ? false : lockedCustomers.length >= 2" text size="small" @click="toggleLock(data, frozenRow, index)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null,
            lockedCustomers: [
                {
                    id: 5135,
                    name: 'Geraldine Bisset',
                    country: {
                        name: 'France',
                        code: 'fr'
                    },
                    company: 'Bisset Group',
                    status: 'proposal',
                    date: '2019-05-05',
                    activity: 0,
                    representative: {
                        name: 'Amy Elsner',
                        image: 'amyelsner.png'
                    }
                }
            ]
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    },
    methods: {
        toggleLock(data, frozen, index) {
            if (frozen) {
                this.lockedCustomers = this.lockedCustomers.filter((c, i) => i !== index);
                this.customers.push(data);
            } else {
                this.customers = this.customers.filter((c, i) => i !== index);
                this.lockedCustomers.push(data);
            }

            this.customers.sort((val1, val2) => {
                return val1.id < val2.id ? -1 : 1;
            });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="customers" :frozenValue="lockedCustomers" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="status" header="Status"></Column>
            <Column style="flex: 0 0 4rem">
                <template #body="{ data, frozenRow, index }">
                    <Button type="button" :icon="frozenRow ? 'pi pi-lock-open' : 'pi pi-lock'" :disabled="frozenRow ? false : lockedCustomers.length >= 2" text size="small" @click="toggleLock(data, frozenRow, index)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

const customers = ref();
const lockedCustomers = ref([
    {
        id: 5135,
        name: 'Geraldine Bisset',
        country: {
            name: 'France',
            code: 'fr'
        },
        company: 'Bisset Group',
        status: 'proposal',
        date: '2019-05-05',
        activity: 0,
        representative: {
            name: 'Amy Elsner',
            image: 'amyelsner.png'
        }
    }
]);
const toggleLock = (data, frozen, index) => {
    if (frozen) {
        lockedCustomers.value = lockedCustomers.value.filter((c, i) => i !== index);
        customers.value.push(data);
    }
    else {
        customers.value = customers.value.filter((c, i) => i !== index);
        lockedCustomers.value.push(data);
    }

    customers.value.sort((val1, val2) => {
        return val1.id < val2.id ? -1 : 1;
    });
};

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
        customers.value = data;
    });
});

<\/script>`,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
`}}},mounted(){V.getCustomersMedium().then(a=>{this.customers=a})},methods:{toggleLock(a,i,h){i?(this.lockedCustomers=this.lockedCustomers.filter((S,l)=>l!==h),this.customers.push(a)):(this.customers=this.customers.filter((S,l)=>l!==h),this.lockedCustomers.push(a)),this.customers.sort((S,l)=>S.id<l.id?-1:1)}}},bn=a=>(Q("data-v-854a2ba5"),a=a(),W(),a),wn=bn(()=>e("p",null,[o("Rows can be fixed during scrolling by enabling the "),e("i",null,"frozenValue"),o(" property.")],-1)),Sn={class:"card"};function _n(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("Button"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[wn]),_:1},16),e("div",Sn,[t(m,{value:l.customers,frozenValue:l.lockedCustomers,scrollable:"",scrollHeight:"400px",tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"name",header:"Name"}),t(n,{field:"country.name",header:"Country"}),t(n,{field:"representative.name",header:"Representative"}),t(n,{field:"status",header:"Status"}),t(n,{style:{flex:"0 0 4rem"}},{body:r(({data:u,frozenRow:D,index:w})=>[t(s,{type:"button",icon:D?"pi pi-lock-open":"pi pi-lock",disabled:D?!1:l.lockedCustomers.length>=2,text:"",size:"small",onClick:C=>c.toggleLock(u,D,w)},null,8,["icon","disabled","onClick"])]),_:1})]),_:1},8,["value","frozenValue"])]),t(y,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const xn=M(Cn,[["render",_n],["__scopeId","data-v-854a2ba5"]]),Pn={data(){return{customers:null,code:{basic:`<DataTable :value="customers" scrollable scrollHeight="400px">
    <Column field="id" header="Id" footer="Id" style="min-width: 100px"></Column>
    <Column field="name" header="Name" footer="Name" style="min-width: 200px"></Column>
    <Column field="country.name" header="Country" footer="Country" style="min-width: 200px"></Column>
    <Column field="date" header="Date" footer="Date" style="min-width: 200px"></Column>
    <Column field="balance" header="Balance" footer="Balance" style="min-width: 200px">
        <template #body="{ data }">
            {{ formatCurrency(data.balance) }}
        </template>
    </Column>
    <Column field="company" header="Company" footer="Company" style="min-width: 200px"></Column>
    <Column field="status" header="Status" footer="Status" style="min-width: 200px"></Column>
    <Column field="activity" header="Activity" footer="Activity" style="min-width: 200px"></Column>
    <Column field="representative.name" header="Representative" footer="Representative" style="min-width: 200px"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="customers" scrollable scrollHeight="400px">
            <Column field="id" header="Id" footer="Id" style="min-width: 100px"></Column>
            <Column field="name" header="Name" footer="Name" style="min-width: 200px"></Column>
            <Column field="country.name" header="Country" footer="Country" style="min-width: 200px"></Column>
            <Column field="date" header="Date" footer="Date" style="min-width: 200px"></Column>
            <Column field="balance" header="Balance" footer="Balance" style="min-width: 200px">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
            </Column>
            <Column field="company" header="Company" footer="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" footer="Status" style="min-width: 200px"></Column>
            <Column field="activity" header="Activity" footer="Activity" style="min-width: 200px"></Column>
            <Column field="representative.name" header="Representative" footer="Representative" style="min-width: 200px"></Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="customers" scrollable scrollHeight="400px">
            <Column field="id" header="Id" footer="Id" style="min-width: 100px"></Column>
            <Column field="name" header="Name" footer="Name" style="min-width: 200px"></Column>
            <Column field="country.name" header="Country" footer="Country" style="min-width: 200px"></Column>
            <Column field="date" header="Date" footer="Date" style="min-width: 200px"></Column>
            <Column field="balance" header="Balance" footer="Balance" style="min-width: 200px">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
            </Column>
            <Column field="company" header="Company" footer="Company" style="min-width: 200px"></Column>
            <Column field="status" header="Status" footer="Status" style="min-width: 200px"></Column>
            <Column field="activity" header="Activity" footer="Activity" style="min-width: 200px"></Column>
            <Column field="representative.name" header="Representative" footer="Representative" style="min-width: 200px"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

const customers = ref();

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
        customers.value = data;
    });
});

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
<\/script>`,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
`}}},mounted(){V.getCustomersMedium().then(a=>{this.customers=a})},methods:{formatCurrency(a){return a.toLocaleString("en-US",{style:"currency",currency:"USD"})}}},Tn=e("p",null,"Horizontal scrollbar is displayed when table width exceeds the parent width.",-1),Mn={class:"card"};function Dn(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Tn]),_:1},16),e("div",Mn,[t(s,{value:l.customers,scrollable:"",scrollHeight:"400px"},{default:r(()=>[t(n,{field:"id",header:"Id",footer:"Id",style:{"min-width":"100px"}}),t(n,{field:"name",header:"Name",footer:"Name",style:{"min-width":"200px"}}),t(n,{field:"country.name",header:"Country",footer:"Country",style:{"min-width":"200px"}}),t(n,{field:"date",header:"Date",footer:"Date",style:{"min-width":"200px"}}),t(n,{field:"balance",header:"Balance",footer:"Balance",style:{"min-width":"200px"}},{body:r(({data:y})=>[o(T(c.formatCurrency(y.balance)),1)]),_:1}),t(n,{field:"company",header:"Company",footer:"Company",style:{"min-width":"200px"}}),t(n,{field:"status",header:"Status",footer:"Status",style:{"min-width":"200px"}}),t(n,{field:"activity",header:"Activity",footer:"Activity",style:{"min-width":"200px"}}),t(n,{field:"representative.name",header:"Representative",footer:"Representative",style:{"min-width":"200px"}})]),_:1},8,["value"])]),t(m,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const kn=M(Pn,[["render",Dn]]),Rn={data(){return{customers:null,code:{basic:`<DataTable :value="customers" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
    <Column field="name" header="Name"></Column>
    <Column field="country.name" header="Country"></Column>
    <Column field="representative.name" header="Representative"></Column>
    <Column field="company" header="Company"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="customers" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="company" header="Company"></Column>
        </DataTable>
    </div>
</template>

<script>
import { CustomerService } from '@/service/CustomerService';

export default {
    data() {
        return {
            customers: null
        };
    },
    mounted() {
        CustomerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="customers" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
            <Column field="name" header="Name"></Column>
            <Column field="country.name" header="Country"></Column>
            <Column field="representative.name" header="Representative"></Column>
            <Column field="company" header="Company"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';

const customers = ref();

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
        customers.value = data;
    });
});
<\/script>`,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
`}}},mounted(){V.getCustomersMedium().then(a=>{this.customers=a})}},Fn=e("p",null,[o("Adding "),e("i",null,"scrollable"),o(" property along with a "),e("i",null,"scrollHeight"),o(" for the data viewport enables vertical scrolling with fixed headers.")],-1),In={class:"card"};function Nn(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Fn]),_:1},16),e("div",In,[t(s,{value:l.customers,scrollable:"",scrollHeight:"400px",tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"name",header:"Name"}),t(n,{field:"country.name",header:"Country"}),t(n,{field:"representative.name",header:"Representative"}),t(n,{field:"company",header:"Company"})]),_:1},8,["value"])]),t(m,{code:l.code,service:["CustomerService"]},null,8,["code"])],64)}const $n=M(Rn,[["render",Nn]]),Bn={data(){return{products:null,code:{basic:`<DataTable :value="products" sortMode="multiple" tableStyle="min-width: 50rem">
    <Column field="code" header="Code" sortable style="width: 25%"></Column>
    <Column field="name" header="Name" sortable style="width: 25%"></Column>
    <Column field="category" header="Category" sortable style="width: 25%"></Column>
    <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products" sortMode="multiple" tableStyle="min-width: 50rem">
            <Column field="code" header="Code" sortable style="width: 25%"></Column>
            <Column field="name" header="Name" sortable style="width: 25%"></Column>
            <Column field="category" header="Category" sortable style="width: 25%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products" sortMode="multiple" tableStyle="min-width: 50rem">
            <Column field="code" header="Code" sortable style="width: 25%"></Column>
            <Column field="name" header="Name" sortable style="width: 25%"></Column>
            <Column field="category" header="Category" sortable style="width: 25%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},An=e("p",null,[o("Multiple columns can be sorted by defining "),e("i",null,"sortMode"),o(" as "),e("i",null,"multiple"),o(". This mode requires metaKey (e.g. "),e("i",null,"⌘"),o(") to be pressed when clicking a header.")],-1),Vn={class:"card"};function Ln(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[An]),_:1},16),e("div",Vn,[t(s,{value:l.products,sortMode:"multiple",tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"code",header:"Code",sortable:"",style:{width:"25%"}}),t(n,{field:"name",header:"Name",sortable:"",style:{width:"25%"}}),t(n,{field:"category",header:"Category",sortable:"",style:{width:"25%"}}),t(n,{field:"quantity",header:"Quantity",sortable:"",style:{width:"25%"}})]),_:1},8,["value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const Un=M(Bn,[["render",Ln]]),On={data(){return{products:null,code:{basic:`<DataTable :value="products" sortField="price" :sortOrder="-1" tableStyle="min-width: 50rem">
    <Column field="code" header="Code" sortable style="width: 20%"></Column>
    <Column field="name" header="Name" sortable style="width: 20%"></Column>
    <Column field="price" header="Price" :sortable="true">
        <template #body="slotProps">
            {{ formatCurrency(slotProps.data.price) }}
        </template>
    </Column>
    <Column field="category" header="Category" sortable style="width: 20%"></Column>
    <Column field="quantity" header="Quantity" sortable style="width: 20%"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products" sortField="price" :sortOrder="-1" tableStyle="min-width: 50rem">
            <Column field="code" header="Code" sortable style="width: 20%"></Column>
            <Column field="name" header="Name" sortable style="width: 20%"></Column>
            <Column field="price" header="Price" :sortable="true">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category" sortable style="width: 20%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 20%"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products" sortField="price" :sortOrder="-1" tableStyle="min-width: 50rem">
            <Column field="code" header="Code" sortable style="width: 20%"></Column>
            <Column field="name" header="Name" sortable style="width: 20%"></Column>
            <Column field="price" header="Price" :sortable="true">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category" sortable style="width: 20%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 20%"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)},methods:{formatCurrency(a){return a.toLocaleString("en-US",{style:"currency",currency:"USD"})}}},zn=e("p",null,[o(" Defining a default "),e("i",null,"sortField"),o(" and "),e("i",null,"sortOrder"),o(" displays data as sorted initially in single column sorting. In "),e("i",null,"multiple"),o(" sort mode, "),e("i",null,"multiSortMeta"),o(" should be used instead by providing an array of "),e("i",null,"DataTableSortMeta"),o(" objects. ")],-1),qn={class:"card"};function Kn(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[zn]),_:1},16),e("div",qn,[t(s,{value:l.products,sortField:"price",sortOrder:-1,tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"code",header:"Code",sortable:"",style:{width:"20%"}}),t(n,{field:"name",header:"Name",sortable:"",style:{width:"20%"}}),t(n,{field:"price",header:"Price",sortable:!0},{body:r(y=>[o(T(c.formatCurrency(y.data.price)),1)]),_:1}),t(n,{field:"category",header:"Category",sortable:"",style:{width:"20%"}}),t(n,{field:"quantity",header:"Quantity",sortable:"",style:{width:"20%"}})]),_:1},8,["value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const En=M(On,[["render",Kn]]),Yn={data(){return{products:null,code:{basic:`<DataTable :value="products" removableSort tableStyle="min-width: 50rem">
    <Column field="code" header="Code" sortable style="width: 25%"></Column>
    <Column field="name" header="Name" sortable style="width: 25%"></Column>
    <Column field="category" header="Category" sortable style="width: 25%"></Column>
    <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products" removableSort tableStyle="min-width: 50rem">
            <Column field="code" header="Code" sortable style="width: 25%"></Column>
            <Column field="name" header="Name" sortable style="width: 25%"></Column>
            <Column field="category" header="Category" sortable style="width: 25%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products" removableSort tableStyle="min-width: 50rem">
            <Column field="code" header="Code" sortable style="width: 25%"></Column>
            <Column field="name" header="Name" sortable style="width: 25%"></Column>
            <Column field="category" header="Category" sortable style="width: 25%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},Gn=e("p",null,[o("When "),e("i",null,"removableSort"),o(" is present, the third click removes the sorting from the column.")],-1),Qn={class:"card"};function Wn(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Gn]),_:1},16),e("div",Qn,[t(s,{value:l.products,removableSort:"",tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"code",header:"Code",sortable:"",style:{width:"25%"}}),t(n,{field:"name",header:"Name",sortable:"",style:{width:"25%"}}),t(n,{field:"category",header:"Category",sortable:"",style:{width:"25%"}}),t(n,{field:"quantity",header:"Quantity",sortable:"",style:{width:"25%"}})]),_:1},8,["value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const jn=M(Yn,[["render",Wn]]),Hn={data(){return{products:null,code:{basic:`<DataTable :value="products" tableStyle="min-width: 50rem">
    <Column field="code" header="Code" sortable style="width: 25%"></Column>
    <Column field="name" header="Name" sortable style="width: 25%"></Column>
    <Column field="category" header="Category" sortable style="width: 25%"></Column>
    <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="code" header="Code" sortable style="width: 25%"></Column>
            <Column field="name" header="Name" sortable style="width: 25%"></Column>
            <Column field="category" header="Category" sortable style="width: 25%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script>
import { ProductService } from '@/service/ProductService';

export default {
    data() {
        return {
            products: null
        };
    },
    mounted() {
        ProductService.getProductsMini().then((data) => (this.products = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <Column field="code" header="Code" sortable style="width: 25%"></Column>
            <Column field="name" header="Name" sortable style="width: 25%"></Column>
            <Column field="category" header="Category" sortable style="width: 25%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
});

const products = ref();

<\/script>`,data:`
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `}}},mounted(){B.getProductsMini().then(a=>this.products=a)}},Jn=e("p",null,[o("Sorting on a column is enabled by adding the "),e("i",null,"sortable"),o(" property.")],-1),Xn={class:"card"};function Zn(a,i,h,S,l,c){const p=k,n=d("Column"),s=d("DataTable"),m=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[Jn]),_:1},16),e("div",Xn,[t(s,{value:l.products,tableStyle:"min-width: 50rem"},{default:r(()=>[t(n,{field:"code",header:"Code",sortable:"",style:{width:"25%"}}),t(n,{field:"name",header:"Name",sortable:"",style:{width:"25%"}}),t(n,{field:"category",header:"Category",sortable:"",style:{width:"25%"}}),t(n,{field:"quantity",header:"Quantity",sortable:"",style:{width:"25%"}})]),_:1},8,["value"])]),t(m,{code:l.code,service:["ProductService"]},null,8,["code"])],64)}const ei=M(Hn,[["render",Zn]]),ti={},ai=e("p",null,"List of class names used in the styled mode.",-1),li=oe('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-datatable</td><td>Container element.</td></tr><tr><td>p-datatable-scrollable</td><td>Container element when table is scrollable.</td></tr><tr><td>p-datatable-header</td><td>Header section.</td></tr><tr><td>p-datatable-footer</td><td>Footer section.</td></tr><tr><td>p-datatable-wrapper</td><td>Wrapper of table element.</td></tr><tr><td>p-datatable-table</td><td>Table element.</td></tr><tr><td>p-datatable-thead</td><td>Table thead element.</td></tr><tr><td>p-datatable-tbody</td><td>Table tbody element.</td></tr><tr><td>p-datatable-tfoot</td><td>Table tfoot element.</td></tr><tr><td>p-column-title</td><td>Title of a column.</td></tr><tr><td>p-sortable-column</td><td>Sortable column header.</td></tr><tr><td>p-frozen-column</td><td>Frozen column header.</td></tr><tr><td>p-rowgroup-header</td><td>Header of a rowgroup.</td></tr><tr><td>p-rowgroup-footer</td><td>Footer of a rowgroup.</td></tr><tr><td>p-datatable-row-expansion</td><td>Expanded row content.</td></tr><tr><td>p-row-toggler</td><td>Toggle element for row expansion.</td></tr><tr><td>p-datatable-emptymessage</td><td>Cell containing the empty message.</td></tr><tr><td>p-row-editor-init</td><td>Pencil button of row editor.</td></tr><tr><td>p-row-editor-init</td><td>Save button of row editor.</td></tr><tr><td>p-row-editor-init</td><td>Cancel button of row editor.</td></tr></tbody></table></div>',1);function oi(a,i){const h=k;return b(),_(x,null,[t(h,R(F(a.$attrs)),{default:r(()=>[ai]),_:1},16),li],64)}const ri=M(ti,[["render",oi]]),ni={data(){return{code1:{basic:`export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    datatable: {
        root: ({ props }) => ({
            class: [
                'relative',
                {
                    'flex flex-col h-full': props.scrollable && props.scrollHeight === 'flex'
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
        wrapper: ({ props }) => ({
            class: [
                {
                    relative: props.scrollable,
                    'flex flex-col grow h-full': props.scrollable && props.scrollHeight === 'flex'
                }
            ]
        }),
        header: ({ props }) => ({
            class: [
                'bg-slate-50 text-slate-700 border-gray-300 font-bold p-4',
                'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', // Dark Mode
                props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0'
            ]
        }),
        table: 'w-full border-spacing-0',
        thead: ({ context }) => ({
            class: [
                {
                    'bg-slate-50 top-0 z-[1]': context.scrollable
                }
            ]
        }),
        tbody: ({ instance, context }) => ({
            class: [
                {
                    'sticky z-[1]': instance.frozenRow && context.scrollable
                }
            ]
        }),
        tfoot: ({ context }) => ({
            class: [
                {
                    'bg-slate-50 bottom-0 z-[1]': context.scrollable
                }
            ]
        }),
        footer: {
            class: [
                'bg-slate-50 text-slate-700 border-t-0 border-b border-x-0 border-gray-300 font-bold p-4',
                'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900' // Dark Mode
            ]
        },
        column: {
            headercell: ({ context, props }) => ({
                class: [
                    'text-left border-0 border-b border-solid border-gray-300 dark:border-blue-900/40 font-bold',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50 text-slate-700', // Sort
                    context.sorted ? 'dark:text-white/80 dark:bg-blue-300' : 'dark:text-white/80 dark:bg-gray-900', // Dark Mode
                    {
                        'sticky z-[1]': props.frozen || props.frozen === '', // Frozen Columns
                        'border-x border-y': context?.showGridlines,
                        'overflow-hidden space-nowrap border-y relative bg-clip-padding': context.resizable // Resizable
                    }
                ]
            }),
            headercontent: 'flex items-center',
            bodycell: ({ props, context }) => ({
                class: [
                    'text-left border-0 border-b border-solid border-gray-300',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:text-white/80 dark:border-blue-900/40', // Dark Mode
                    {
                        'sticky bg-inherit': props.frozen || props.frozen === '', // Frozen Columns
                        'border-x border-y': context?.showGridlines
                    }
                ]
            }),
            footercell: ({ context }) => ({
                class: [
                    'text-left border-0 border-b border-solid border-gray-300 font-bold',
                    'bg-slate-50 text-slate-700',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:text-white/80 dark:bg-gray-900 dark:border-blue-900/40', // Dark Mode
                    {
                        'border-x border-y': context?.showGridlines
                    }
                ]
            }),
            sorticon: ({ context }) => ({
                class: ['ml-2', context.sorted ? 'text-blue-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70']
            }),
            sortbadge: {
                class: [
                    'flex items-center justify-center align-middle',
                    'rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2',
                    'text-blue-700 bg-blue-50',
                    'dark:text-white/80 dark:bg-blue-400' // Dark Mode
                ]
            },
            columnfilter: 'inline-flex items-center ml-auto',
            filteroverlay: {
                class: [
                    'bg-white text-gray-600 border-0 rounded-md min-w-[12.5rem]',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' //Dark Mode
                ]
            },
            filtermatchmodedropdown: {
                root: 'min-[0px]:flex mb-2'
            },
            filterrowitems: 'm-0 p-0 py-3 list-none ',
            filterrowitem: ({ context }) => ({
                class: ['m-0 py-3 px-5 bg-transparent', 'transition duration-200', context?.highlighted ? 'text-blue-700 bg-blue-100 dark:text-white/80 dark:bg-blue-300' : 'text-gray-600 bg-transparent dark:text-white/80 dark:bg-transparent']
            }),
            filteroperator: {
                class: [
                    'px-5 py-3 border-b border-solid border-gray-300 text-slate-700 bg-slate-50 rounded-t-md',
                    'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900' // Dark Mode
                ]
            },
            filteroperatordropdown: {
                root: 'min-[0px]:flex'
            },
            filterconstraint: 'p-5 border-b border-solid border-gray-300 dark:border-blue-900/40',
            filteraddrule: 'py-3 px-5',
            filteraddrulebutton: {
                root: 'justify-center w-full min-[0px]:text-sm',
                label: 'flex-auto grow-0',
                icon: 'mr-2'
            },
            filterremovebutton: {
                root: 'ml-2',
                label: 'grow-0'
            },
            filterbuttonbar: 'flex items-center justify-between p-5',
            filterclearbutton: {
                root: 'w-auto min-[0px]:text-sm border-blue-500 text-blue-500 px-4 py-3'
            },
            filterapplybutton: {
                root: 'w-auto min-[0px]:text-sm px-4 py-3'
            },
            filtermenubutton: ({ context }) => ({
                class: [
                    'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2',
                    'w-8 h-8 rounded-[50%]',
                    'transition duration-200',
                    'hover:text-slate-700 hover:bg-gray-300/20', // Hover
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                    'dark:text-white/70 dark:hover:text-white/80 dark:bg-gray-900', // Dark Mode
                    {
                        'bg-blue-50 text-blue-700': context.active
                    }
                ]
            }),
            headerfilterclearbutton: ({ context }) => ({
                class: [
                    'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative',
                    'text-left bg-transparent m-0 p-0 border-none select-none ml-2',
                    {
                        invisible: !context.hidden
                    }
                ]
            }),
            columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
            rowreordericon: 'cursor-move',
            roweditorinitbutton: {
                class: [
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                ]
            },
            roweditorsavebutton: {
                class: [
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                ]
            },
            roweditorcancelbutton: {
                class: [
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                ]
            },
            radiobuttonwrapper: {
                class: ['relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6']
            },
            radiobutton: ({ context }) => ({
                class: [
                    'flex justify-center items-center',
                    'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                ]
            }),
            radiobuttonicon: ({ context }) => ({
                class: ['transform rounded-full', 'block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900', { 'backface-hidden scale-10 invisible': context.checked === false, 'transform scale-100 visible': context.checked === true }]
            }),
            headercheckboxwrapper: {
                class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
            },
            headercheckbox: ({ context }) => ({
                class: [
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                ]
            }),
            headercheckboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
            checkboxwrapper: {
                class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
            },
            checkbox: ({ context }) => ({
                class: [
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                ]
            }),
            checkboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
            transition: TRANSITIONS.overlay
        },
        bodyrow: ({ context }) => ({
            class: [
                context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300' : 'bg-white text-gray-600 dark:bg-gray-900',
                context.stripedRows ? (context.index % 2 === 0 ? 'bg-white text-gray-600 dark:bg-gray-900' : 'bg-blue-50/50 text-gray-600 dark:bg-gray-950') : '',
                'transition duration-200',
                'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
                'dark:text-white/80 dark:focus:outline dark:focus:outline-[0.15rem] dark:focus:outline-blue-300 dark:focus:outline-offset-[-0.15rem]', // Dark Mode
                {
                    'cursor-pointer': context.selectable,
                    'hover:bg-gray-300/20 hover:text-gray-600': context.selectable && !context.selected // Hover
                }
            ]
        }),
        rowexpansion: 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80',
        rowgroupheader: {
            class: ['sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200']
        },
        rowgroupfooter: {
            class: ['sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200']
        },
        rowgrouptoggler: {
            class: [
                'text-left m-0 p-0 cursor-pointer select-none',
                'inline-flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-[50%]',
                'transition duration-200',
                'dark:text-white/70' // Dark Mode
            ]
        },
        rowgrouptogglericon: 'inline-block w-4 h-4',
        resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300'
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <DataTable v-model:filters="filters" :value="customers" paginator showGridlines :rows="10" dataKey="id"
                filterDisplay="menu" :loading="loading" :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']">
            <template #header>
                <div class="flex justify-between">
                    <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </span>
                </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" style="min-width: 12rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" filterField="country.name" style="min-width: 12rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`flag flag-\${data.country.code}\`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by country" />
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" @click="filterCallback()" severity="secondary"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" severity="success"></Button>
                </template>
                <template #filterfooter>
                    <div class="px-3 pt-0 pb-3 text-center">Customized Buttons</div>
                </template>
            </Column>
            <Column header="Agent" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex items-center gap-2">
                        <img :alt="data.representative.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${data.representative.image}\`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="flex items-center gap-2">
                                <img :alt="slotProps.option.name" :src="\`https://primefaces.org/cdn/primevue/images/avatar/\${slotProps.option.image}\`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column header="Date" filterField="date" dataType="date" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatDate(data.date) }}
                </template>
                <template #filter="{ filterModel }">
                    <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
                </template>
            </Column>
            <Column header="Balance" filterField="balance" dataType="numeric" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
                <template #filter="{ filterModel }">
                    <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                </template>
            </Column>
            <Column header="Status" field="status" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Select One" class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="activity" header="Activity" :showFilterMatchModes="false" style="min-width: 12rem">
                <template #body="{ data }">
                    <ProgressBar :value="data.activity" :showValue="false" style="height: 6px"></ProgressBar>
                </template>
                <template #filter="{ filterModel }">
                    <Slider v-model="filterModel.value" range class="m-3"></Slider>
                    <div class="flex items-center justify-between px-2">
                        <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
                        <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
                    </div>
                </template>
            </Column>
            <Column field="verified" header="Verified" dataType="boolean" bodyClass="text-center" style="min-width: 8rem">
                <template #body="{ data }">
                    <i class="pi" :class="{ 'pi-check-circle text-green-500 ': data.verified, 'pi-times-circle text-red-500': !data.verified }"></i>
                </template>
                <template #filter="{ filterModel }">
                    <label for="verified-filter" class="font-bold"> Verified </label>
                    <TriStateCheckbox v-model="filterModel.value" inputId="verified-filter" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

const customers = ref();
const filters = ref();
const representatives = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Anna Fali', image: 'annafali.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'XuXue Feng', image: 'xuxuefeng.png' }
]);
const statuses = ref(['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal']);
const loading = ref(true);

onMounted(() => {
    CustomerService.getCustomersMedium().then((data) => {
        customers.value = getCustomers(data);
        loading.value = false;
    });
});


const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    };
};

initFilters();

const formatDate = (value) => {
    return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};
const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};
const clearFilter = () => {
    initFilters();
};
const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};
const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};
<\/script>`}}}},ii=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function si(a,i,h,S,l,c){const p=j,n=I,s=k;return b(),O(s,R(F(a.$attrs)),{default:r(()=>[e("p",null,[o(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(p,{to:"/tailwind"},{default:r(()=>[o("Tailwind Customization")]),_:1}),o(" section for an example. ")]),t(n,{code:l.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),ii,t(n,{code:l.code2,service:["CustomerService"],embedded:""},null,8,["code"])]),_:1},16)}const di=M(ni,[["render",si]]),ci={data(){return{docs:[{id:"theming.styled",label:"Styled",component:ri},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:di}]}]}}},ui={class:"doc-main"},mi=e("div",{class:"doc-intro"},[e("h1",null,"DataTable Theming")],-1);function pi(a,i,h,S,l,c){const p=H,n=J;return b(),_(x,null,[e("div",ui,[mi,t(p,{docs:l.docs},null,8,["docs"])]),t(n,{docs:l.docs},null,8,["docs"])],64)}const hi=M(ci,[["render",pi]]),X={brands:["Vapid","Carson","Kitano","Dabver","Ibex","Morello","Akira","Titan","Dover","Norma"],colors:["Black","White","Red","Blue","Silver","Green","Yellow"],generateCar(a){return{id:a,vin:this.generateVin(),brand:this.generateBrand(),color:this.generateColor(),year:this.generateYear()}},generateVin(){let a="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let h=0;h<5;h++)a+=i.charAt(Math.floor(Math.random()*i.length));return a},generateBrand(){return this.brands[Math.floor(Math.random()*Math.floor(10))]},generateColor(){return this.colors[Math.floor(Math.random()*Math.floor(7))]},generateYear(){return 2e3+Math.floor(Math.random()*Math.floor(19))}},fi={data(){return{cars:null,virtualCars:Array.from({length:1e5}),lazyLoading:!1,loadLazyTimeout:null,code:{basic:`<DataTable :value="virtualCars" scrollable scrollHeight="400px" tableStyle="min-width: 50rem"
        :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">
    <Column field="id" header="Id" style="width: 20%">
        <template #loading>
            <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                <Skeleton width="60%" height="1rem" />
            </div>
        </template>
    </Column>
    <Column field="vin" header="Vin" style="width: 20%">
        <template #loading>
            <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                <Skeleton width="40%" height="1rem" />
            </div>
        </template>
    </Column>
    <Column field="year" header="Year" style="width: 20%">
        <template #loading>
            <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                <Skeleton width="30%" height="1rem" />
            </div>
        </template>
    </Column>
    <Column field="brand" header="Brand" style="width: 20%">
        <template #loading>
            <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                <Skeleton width="40%" height="1rem" />
            </div>
        </template>
    </Column>
    <Column field="color" header="Color" style="width: 20%">
        <template #loading>
            <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                <Skeleton width="60%" height="1rem" />
            </div>
        </template>
    </Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="virtualCars" scrollable scrollHeight="400px" tableStyle="min-width: 50rem"
                :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">
            <Column field="id" header="Id" style="width: 20%">
                <template #loading>
                    <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="60%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="vin" header="Vin" style="width: 20%">
                <template #loading>
                    <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="40%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="year" header="Year" style="width: 20%">
                <template #loading>
                    <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="30%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="brand" header="Brand" style="width: 20%">
                <template #loading>
                    <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="40%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="color" header="Color" style="width: 20%">
                <template #loading>
                    <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="60%" height="1rem" />
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
import { CarService } from '@/service/CarService';

export default {
    data() {
        return {
            cars: null,
            virtualCars: Array.from({ length: 100000 }),
            lazyLoading: false,
            loadLazyTimeout: null
        };
    },
    mounted() {
        this.cars = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
    },
    methods: {
        loadCarsLazy(event) {
            !this.lazyLoading && (this.lazyLoading = true);

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //simulate remote connection with a timeout
            this.loadLazyTimeout = setTimeout(() => {
                let _virtualCars = [...this.virtualCars];
                let { first, last } = event;

                //load data of required page
                const loadedCars = this.cars.slice(first, last);

                //populate page of virtual cars
                Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

                this.virtualCars = _virtualCars;
                this.lazyLoading = false;
            }, Math.random() * 1000 + 250);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="virtualCars" scrollable scrollHeight="400px" tableStyle="min-width: 50rem"
                :virtualScrollerOptions="{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, numToleratedItems: 10 }">
            <Column field="id" header="Id" style="width: 20%">
                <template #loading>
                    <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="60%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="vin" header="Vin" style="width: 20%">
                <template #loading>
                    <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="40%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="year" header="Year" style="width: 20%">
                <template #loading>
                    <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="30%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="brand" header="Brand" style="width: 20%">
                <template #loading>
                    <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="40%" height="1rem" />
                    </div>
                </template>
            </Column>
            <Column field="color" header="Color" style="width: 20%">
                <template #loading>
                    <div class="flex align-items-center" :style="{ height: '17px', 'flex-grow': '1', overflow: 'hidden' }">
                        <Skeleton width="60%" height="1rem" />
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CarService } from '@/service/CarService';

onMounted(() => {
    cars.value = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
});

const cars = ref();
const virtualCars = ref(Array.from({ length: 100000 }));
const lazyLoading = ref(false);
const loadLazyTimeout = ref();

const loadCarsLazy = (event) => {
    !lazyLoading.value && (lazyLoading.value = true);

    if (loadLazyTimeout.value) {
        clearTimeout(loadLazyTimeout.value);
    }

    //simulate remote connection with a timeout
    loadLazyTimeout.value = setTimeout(() => {
        let _virtualCars = [...virtualCars.value];
        let { first, last } = event;

        //load data of required page
        const loadedCars = cars.value.slice(first, last);

        //populate page of virtual cars
        Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

        virtualCars.value = _virtualCars;
        lazyLoading.value = false;
    }, Math.random() * 1000 + 250);
};
<\/script>`,data:`
{
    id: 1
    vin: tvACo,
    brand: Norma,
    color: Black,
    year: 2002
}`}}},mounted(){this.cars=Array.from({length:1e5}).map((a,i)=>X.generateCar(i+1))},methods:{loadCarsLazy(a){!this.lazyLoading&&(this.lazyLoading=!0),this.loadLazyTimeout&&clearTimeout(this.loadLazyTimeout),this.loadLazyTimeout=setTimeout(()=>{let i=[...this.virtualCars],{first:h,last:S}=a;const l=this.cars.slice(h,S);Array.prototype.splice.apply(i,[h,S-h,...l]),this.virtualCars=i,this.lazyLoading=!1},Math.random()*1e3+250)}}},vi=e("p",null,[o("When lazy loading is enabled via the "),e("i",null,"virtualScrollerOptions"),o(", data is fetched on demand during scrolling instead of preload.")],-1),yi=e("p",null,[o("In sample below, an in-memory list and timeout is used to mimic fetching from a remote datasource. The "),e("i",null,"virtualCars"),o(" is an empty array that is populated on scroll.")],-1),gi={class:"card"},Ci={class:"flex align-items-center",style:{height:"17px","flex-grow":"1",overflow:"hidden"}},bi={class:"flex align-items-center",style:{height:"17px","flex-grow":"1",overflow:"hidden"}},wi={class:"flex align-items-center",style:{height:"17px","flex-grow":"1",overflow:"hidden"}},Si={class:"flex align-items-center",style:{height:"17px","flex-grow":"1",overflow:"hidden"}},_i={class:"flex align-items-center",style:{height:"17px","flex-grow":"1",overflow:"hidden"}};function xi(a,i,h,S,l,c){const p=k,n=d("Skeleton"),s=d("Column"),m=d("DataTable"),y=I;return b(),_(x,null,[t(p,R(F(a.$attrs)),{default:r(()=>[vi,yi]),_:1},16),e("div",gi,[t(m,{value:l.virtualCars,scrollable:"",scrollHeight:"400px",virtualScrollerOptions:{lazy:!0,onLazyLoad:c.loadCarsLazy,itemSize:46,delay:200,showLoader:!0,loading:l.lazyLoading,numToleratedItems:10},tableStyle:"min-width: 50rem"},{default:r(()=>[t(s,{field:"id",header:"Id",style:{width:"20%"}},{loading:r(()=>[e("div",Ci,[t(n,{width:"60%",height:"1rem"})])]),_:1}),t(s,{field:"vin",header:"Vin",style:{width:"20%"}},{loading:r(()=>[e("div",bi,[t(n,{width:"40%",height:"1rem"})])]),_:1}),t(s,{field:"year",header:"Year",style:{width:"20%"}},{loading:r(()=>[e("div",wi,[t(n,{width:"30%",height:"1rem"})])]),_:1}),t(s,{field:"brand",header:"Brand",style:{width:"20%"}},{loading:r(()=>[e("div",Si,[t(n,{width:"40%",height:"1rem"})])]),_:1}),t(s,{field:"color",header:"Color",style:{width:"20%"}},{loading:r(()=>[e("div",_i,[t(n,{width:"60%",height:"1rem"})])]),_:1})]),_:1},8,["value","virtualScrollerOptions"])]),t(y,{code:l.code,service:["CarService"]},null,8,["code"])],64)}const Pi=M(fi,[["render",xi]]),Ti={data(){return{cars:null,code:{basic:`<DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }" tableStyle="min-width: 50rem">
    <Column field="id" header="Id" style="width: 20%"></Column>
    <Column field="vin" header="Vin" style="width: 20%"></Column>
    <Column field="year" header="Year" style="width: 20%"></Column>
    <Column field="brand" header="Brand" style="width: 20%"></Column>
    <Column field="color" header="Color" style="width: 20%"></Column>
</DataTable>`,options:`<template>
    <div class="card">
        <DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }" tableStyle="min-width: 50rem">
            <Column field="id" header="Id" style="width: 20%"></Column>
            <Column field="vin" header="Vin" style="width: 20%"></Column>
            <Column field="year" header="Year" style="width: 20%"></Column>
            <Column field="brand" header="Brand" style="width: 20%"></Column>
            <Column field="color" header="Color" style="width: 20%"></Column>
        </DataTable>
    </div>
</template>

<script>
import { CarService } from '@/service/CarService';

export default {
    data() {
        return {
            cars: null
        };
    },
    mounted() {
        this.cars = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <DataTable :value="cars" scrollable scrollHeight="400px" :virtualScrollerOptions="{ itemSize: 46 }" tableStyle="min-width: 50rem">
            <Column field="id" header="Id" style="width: 20%"></Column>
            <Column field="vin" header="Vin" style="width: 20%"></Column>
            <Column field="year" header="Year" style="width: 20%"></Column>
            <Column field="brand" header="Brand" style="width: 20%"></Column>
            <Column field="color" header="Color" style="width: 20%"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CarService } from '@/service/CarService';

const cars = ref();

onMounted(() => {
    cars.value = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
});
<\/script>`,data:`
{
    id: 1
    vin: tvACo,
    brand: Norma,
    color: Black,
    year: 2002
}`}}},mounted(){this.cars=Array.from({length:1e5}).map((a,i)=>X.generateCar(i+1))}},Mi=e("i",null,"virtualScrollerOptions",-1),Di=e("i",null,"itemSize",-1),ki=e("p",null,[o("In this example, "),e("strong",null,"100000"),o(" preloaded records are rendered by the Table.")],-1),Ri={class:"card"};function Fi(a,i,h,S,l,c){const p=j,n=k,s=d("Column"),m=d("DataTable"),y=I;return b(),_(x,null,[t(n,R(F(a.$attrs)),{default:r(()=>[e("p",null,[o(" Virtual Scrolling is an efficient way to render large amount data. Usage is similar to regular scrolling with the addition of "),Mi,o(" property to define a fixed "),Di,o(". Internally, "),t(p,{to:"/virtualscroller"},{default:r(()=>[o("VirtualScroller")]),_:1}),o(" component is utilized so refer to the API of VirtualScroller for more information about the available options. ")]),ki]),_:1},16),e("div",Ri,[t(m,{value:l.cars,scrollable:"",scrollHeight:"400px",virtualScrollerOptions:{itemSize:46},tableStyle:"min-width: 50rem"},{default:r(()=>[t(s,{field:"id",header:"Id",style:{width:"20%"}}),t(s,{field:"vin",header:"Vin",style:{width:"20%"}}),t(s,{field:"year",header:"Year",style:{width:"20%"}}),t(s,{field:"brand",header:"Brand",style:{width:"20%"}}),t(s,{field:"color",header:"Color",style:{width:"20%"}})]),_:1},8,["value"])]),t(y,{code:l.code,service:["CarService"]},null,8,["code"])],64)}const Ii=M(Ti,[["render",Fi]]),Ni={data(){return{docs:[{id:"import",label:"Import",component:_t},{id:"basic",label:"Basic",component:Ve},{id:"dynamic_columns",label:"Dynamic Columns",component:dt},{id:"template",label:"Template",component:Ta},{id:"size",label:"Size",component:ea},{id:"gridlines",label:"Grid Lines",component:bt},{id:"striped",label:"Striped Rows",component:ga},{id:"paginator",label:"Paginator",children:[{id:"paginator_basic",label:"Basic",component:Bl},{id:"paginator_template",label:"Template",component:Ol}]},{id:"sort",label:"Sort",children:[{id:"single_sort",label:"Single Column",component:ei},{id:"multiple_sort",label:"Multiple Columns",component:Un},{id:"pre_sort",label:"Presort",component:En},{id:"removable_sort",label:"Removable",component:jn}]},{id:"filter",label:"Filter",children:[{id:"basic_filter",label:"Basic",component:Rl},{id:"advanced_filter",label:"Advanced",component:vl}]},{id:"row_selection",label:"Row Selection",children:[{id:"single_row_selection",label:"Single",component:lr},{id:"multiple_rows_selection",label:"Multiple",component:Uo},{id:"radiobutton_row_selection",label:"RadioButton",component:Eo},{id:"checkbox_row_selection",label:"Checkbox",component:Io},{id:"row_selection_events",label:"Events",component:jo}]},{id:"row_expansion",label:"Row Expansion",component:Wt},{id:"edit",label:"Edit",children:[{id:"cell_edit",label:"Cell",component:qa},{id:"row_edit",label:"Row",component:el},{id:"cell_edit_filter_sort",label:"Filter & Sort Cell Edit",component:Wa}]},{id:"lazy_load",label:"Lazy Load",component:Nt},{id:"scroll",label:"Scroll",children:[{id:"vertical_scroll",label:"Vertical",component:$n},{id:"flex_scroll",label:"Flexible",component:mn},{id:"horizontal_scroll",label:"Horizontal",component:kn},{id:"frozen_rows",label:"Frozen Rows",component:xn},{id:"frozen_columns",label:"Frozen Columns",component:gn}]},{id:"virtualscroll",label:"Virtual Scroll",children:[{id:"preload_virtualscroll",label:"Preload",component:Ii},{id:"lazy_virtualscroll",label:"Lazy",component:Pi}]},{id:"column_group",label:"Column Group",component:qe},{id:"row_group",label:"Row Group",children:[{id:"rowgroup_subheader",label:"Subheader",component:To},{id:"rowgroup_expandable",label:"Expandable",component:so},{id:"rowgroup_rowspan",label:"RowSpan",component:yo}]},{id:"conditional_style",label:"Conditional Style",component:Ze},{id:"column_resize",label:"Column Resize",children:[{id:"resize_fitmode",label:"Fit Mode",component:Aa},{id:"resize_expandmode",label:"Expand Mode",component:Fa}]},{id:"reorder",label:"Reorder",component:Ut},{id:"column_toggle",label:"Column Toggle",component:We},{id:"export",label:"Export",component:ft},{id:"contextmenu",label:"Context Menu",component:ot},{id:"stateful",label:"Stateful",component:pa},{id:"samples",label:"Samples",children:[{id:"customers",label:"Customers",component:yr},{id:"dtproducts",label:"Products",component:nn}]},{id:"accessibility",label:"Accessibility",component:Ie}],ptComponent:Zl,themingDoc:hi}}};function $i(a,i,h,S,l,c){const p=re;return b(),O(p,{title:"Vue Table Component",header:"DataTable",description:"DataTable displays data in tabular format.",componentDocs:l.docs,apiDocs:["DataTable","Column","ColumnGroup","Row"],ptTabComponent:l.ptComponent,themingDocs:l.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Oi=M(Ni,[["render",$i]]);export{Oi as default};
