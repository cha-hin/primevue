import{_ as p,o as d,e as b,w as n,m as w,b as t,f as s,h as _,j as m,c as h,a as e,n as g,g as y,F as x,p as $,t as T,D as z,k as j,l as D,x as C}from"./entry.68beb385.js";import{g as v}from"./PTHelper.11558b27.js";import{_ as k}from"./PrimeVueNuxtLink.f51d0c80.js";const N={},V=t("h3",null,"Screen Reader",-1),H=t("p",null,[s("Splitter bar defines "),t("i",null,"separator"),s(" as the role with "),t("i",null,"aria-orientation"),s(" set to either horizontal or vertical.")],-1),B=t("h3",null,"Keyboard Support",-1),A=t("div",{class:"doc-tablewrapper"},[t("table",{class:"doc-table"},[t("thead",null,[t("tr",null,[t("th",null,"Key"),t("th",null,"Function")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("i",null,"tab")]),t("td",null,"Moves focus through the splitter bar.")]),t("tr",null,[t("td",null,[t("i",null,"down arrow")]),t("td",null,"Moves a vertical splitter down.")]),t("tr",null,[t("td",null,[t("i",null,"up arrow")]),t("td",null,"Moves a vertical splitter up.")]),t("tr",null,[t("td",null,[t("i",null,"left arrow")]),t("td",null,"Moves a horizontal splitter to the left.")]),t("tr",null,[t("td",null,[t("i",null,"right arrow")]),t("td",null,"Moves a horizontal splitter to the right.")])])])],-1);function I(o,u){const r=_;return d(),b(r,w({id:"accessibility",label:"Accessibility"},o.$attrs),{default:n(()=>[V,H,B,A]),_:1},16)}const M=p(N,[["render",I]]),F={data(){return{code:{basic:`<Splitter style="height: 300px" class="mb-5">
    <SplitterPanel class="flex align-items-center justify-content-center"> Panel 1 </SplitterPanel>
    <SplitterPanel class="flex align-items-center justify-content-center"> Panel 2 </SplitterPanel>
</Splitter>`,options:`<template>
    <div class="card">
        <Splitter style="height: 300px" class="mb-5">
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Splitter style="height: 300px" class="mb-5">
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
<\/script>`}}}},O=t("p",null,"Splitter requires two SplitterPanel components as children which are displayed horizontally by default.",-1),q={class:"card"};function E(o,u,r,S,i,f){const c=_,l=m("SplitterPanel"),a=m("Splitter"),P=$;return d(),h(x,null,[e(c,g(y(o.$attrs)),{default:n(()=>[O]),_:1},16),t("div",q,[e(a,{style:{height:"300px"},class:"mb-5"},{default:n(()=>[e(l,{class:"flex align-items-center justify-content-center"},{default:n(()=>[s(" Panel 1 ")]),_:1}),e(l,{class:"flex align-items-center justify-content-center"},{default:n(()=>[s(" Panel 2 ")]),_:1})]),_:1})]),e(P,{code:i.code},null,8,["code"])],64)}const K=p(F,[["render",E]]),L={data(){return{code:{basic:`import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';`}}}};function R(o,u,r,S,i,f){const c=_,l=$;return d(),h(x,null,[e(c,g(y(o.$attrs)),null,16),e(l,{code:i.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const G=p(L,[["render",R]]),U={data(){return{code:{basic:`<Splitter style="height: 300px">
    <SplitterPanel class="flex align-items-center justify-content-center" :size="20" :minSize="10"> Panel 1 </SplitterPanel>
    <SplitterPanel :size="80">
        <Splitter layout="vertical">
            <SplitterPanel class="flex align-items-center justify-content-center" :size="15"> Panel 2 </SplitterPanel>
            <SplitterPanel :size="85">
                <Splitter>
                    <SplitterPanel class="flex align-items-center justify-content-center" :size="20"> Panel 3 </SplitterPanel>
                    <SplitterPanel class="flex align-items-center justify-content-center" :size="80"> Panel 4 </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    </SplitterPanel>
</Splitter>`,options:`<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex align-items-center justify-content-center" :size="20" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel :size="80">
                <Splitter layout="vertical">
                    <SplitterPanel class="flex align-items-center justify-content-center" :size="15"> Panel 2 </SplitterPanel>
                    <SplitterPanel :size="85">
                        <Splitter>
                            <SplitterPanel class="flex align-items-center justify-content-center" :size="20"> Panel 3 </SplitterPanel>
                            <SplitterPanel class="flex align-items-center justify-content-center" :size="80"> Panel 4 </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex align-items-center justify-content-center" :size="20" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel :size="80">
                <Splitter layout="vertical">
                    <SplitterPanel class="flex align-items-center justify-content-center" :size="15"> Panel 2 </SplitterPanel>
                    <SplitterPanel :size="85">
                        <Splitter>
                            <SplitterPanel class="flex align-items-center justify-content-center" :size="20"> Panel 3 </SplitterPanel>
                            <SplitterPanel class="flex align-items-center justify-content-center" :size="80"> Panel 4 </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
<\/script>`}}}},W=t("p",null,"Splitters can be combined to create advanced layouts.",-1),J={class:"card"};function Q(o,u,r,S,i,f){const c=_,l=m("SplitterPanel"),a=m("Splitter"),P=$;return d(),h(x,null,[e(c,g(y(o.$attrs)),{default:n(()=>[W]),_:1},16),t("div",J,[e(a,{style:{height:"300px"}},{default:n(()=>[e(l,{class:"flex align-items-center justify-content-center",size:20,minSize:10},{default:n(()=>[s(" Panel 1 ")]),_:1}),e(l,{size:80},{default:n(()=>[e(a,{layout:"vertical"},{default:n(()=>[e(l,{class:"flex align-items-center justify-content-center",size:15},{default:n(()=>[s(" Panel 2 ")]),_:1}),e(l,{size:85},{default:n(()=>[e(a,null,{default:n(()=>[e(l,{class:"flex align-items-center justify-content-center",size:20},{default:n(()=>[s(" Panel 3 ")]),_:1}),e(l,{class:"flex align-items-center justify-content-center",size:80},{default:n(()=>[s(" Panel 4 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),e(P,{code:i.code},null,8,["code"])],64)}const X=p(U,[["render",Q]]),Y={data(){return{code:{basic:`<Splitter style="height: 300px">
    <SplitterPanel class="flex align-items-center justify-content-center" :size="25" :minSize="10"> Panel 1 </SplitterPanel>
    <SplitterPanel class="flex align-items-center justify-content-center" :size="75"> Panel 2 </SplitterPanel>
</Splitter>`,options:`<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex align-items-center justify-content-center" :size="25" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex align-items-center justify-content-center" :size="75"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Splitter style="height: 300px">
            <SplitterPanel class="flex align-items-center justify-content-center" :size="25" :minSize="10"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex align-items-center justify-content-center" :size="75"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
<\/script>`}}}},Z=t("p",null,[s("Initial dimension of a panel is percentage based and defined using the "),t("i",null,"size"),s(" property. In addition,"),t("i",null,"minSize"),s(" is provided to set a minimum value during a resize.")],-1),tt={class:"card"};function et(o,u,r,S,i,f){const c=_,l=m("SplitterPanel"),a=m("Splitter"),P=$;return d(),h(x,null,[e(c,g(y(o.$attrs)),{default:n(()=>[Z]),_:1},16),t("div",tt,[e(a,{style:{height:"300px"}},{default:n(()=>[e(l,{class:"flex align-items-center justify-content-center",size:25,minSize:10},{default:n(()=>[s(" Panel 1 ")]),_:1}),e(l,{class:"flex align-items-center justify-content-center",size:75},{default:n(()=>[s(" Panel 2 ")]),_:1})]),_:1})]),e(P,{code:i.code},null,8,["code"])],64)}const nt=p(Y,[["render",et]]),lt={data(){return{code:{basic:`<Splitter style="height: 300px" layout="vertical">
    <SplitterPanel class="flex align-items-center justify-content-center"> Panel 1 </SplitterPanel>
    <SplitterPanel class="flex align-items-center justify-content-center"> Panel 2 </SplitterPanel>
</Splitter>`,options:`<template>
    <div class="card">
        <Splitter style="height: 300px" layout="vertical">
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Splitter style="height: 300px" layout="vertical">
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex align-items-center justify-content-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
<\/script>`}}}},it=t("p",null,[s("Panels are displayed as stacked by setting the "),t("i",null,"layout"),s(" to "),t("i",null,"vertical"),s(".")],-1),st={class:"card"};function ot(o,u,r,S,i,f){const c=_,l=m("SplitterPanel"),a=m("Splitter"),P=$;return d(),h(x,null,[e(c,g(y(o.$attrs)),{default:n(()=>[it]),_:1},16),t("div",st,[e(a,{style:{height:"300px"},layout:"vertical"},{default:n(()=>[e(l,{class:"flex align-items-center justify-content-center"},{default:n(()=>[s(" Panel 1 ")]),_:1}),e(l,{class:"flex align-items-center justify-content-center"},{default:n(()=>[s(" Panel 2 ")]),_:1})]),_:1})]),e(P,{code:i.code},null,8,["code"])],64)}const ct=p(lt,[["render",ot]]),rt={data(){return{code:{basic:`<Splitter
    :pt="{
        root: { style: { height: '300px' } },
        gutterHandler: { class: 'bg-primary' }
    }">
    <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 1 </SplitterPanel>
    <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 2 </SplitterPanel>
</Splitter>`,options:`<template>
    <div class="card">
        <Splitter
            :pt="{
                root: { style: { height: '300px' } },
                gutterHandler: { class: 'bg-primary' }
            }">
            <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 1 </SplitterPanel>
            <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>`,composition:`<template>
    <div class="card">
        <Splitter
            :pt="{
                root: { style: { height: '300px' } },
                gutterHandler: { class: 'bg-primary' }
            }">
            <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 1 </SplitterPanel>
            <SplitterPanel :pt="{ root: { class: 'flex align-items-center justify-content-center' } }"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>`}}}},at={class:"card"};function pt(o,u,r,S,i,f){const c=_,l=m("SplitterPanel"),a=m("Splitter"),P=$;return d(),h(x,null,[e(c,g(y(o.$attrs)),null,16),t("div",at,[e(a,{pt:{root:{style:{height:"300px"}},gutterHandler:{class:"bg-primary"}}},{default:n(()=>[e(l,{pt:{root:{class:"flex align-items-center justify-content-center"}}},{default:n(()=>[s(" Panel 1 ")]),_:1}),e(l,{pt:{root:{class:"flex align-items-center justify-content-center"}}},{default:n(()=>[s(" Panel 2 ")]),_:1})]),_:1})]),e(P,{code:i.code},null,8,["code"])],64)}const dt=p(rt,[["render",pt]]),ut={},mt=t("div",{class:"card"},[t("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/splitter.jpg"})],-1);function _t(o,u){const r=_;return d(),h(x,null,[e(r,g(y(o.$attrs)),{default:n(()=>[t("p",null,T(o.$attrs.description),1)]),_:1},16),mt],64)}const St=p(ut,[["render",_t]]),ft={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:St},{id:"pt.doc.splitter",label:"Splitter PT Options",component:z,data:v("Splitter")},{id:"pt.doc.splitterpanel",label:"SplitterPanel PT Options",component:z,data:v("SplitterPanel")},{id:"pt.demo",label:"Demo",component:dt}]}}},Pt={class:"doc-main"},ht=t("div",{class:"doc-intro"},[t("h1",null,"Splitter Pass Through")],-1);function gt(o,u,r,S,i,f){const c=j,l=D;return d(),h(x,null,[t("div",Pt,[ht,e(c,{docs:i.docs},null,8,["docs"])]),e(l,{docs:i.docs},null,8,["docs"])],64)}const yt=p(ft,[["render",gt]]),xt={},$t=t("p",null,"List of class names used in the styled mode.",-1),bt=t("div",{class:"doc-tablewrapper"},[t("table",{class:"doc-table"},[t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Element")])]),t("tbody",null,[t("tr",null,[t("td",null,"p-splitter"),t("td",null,"Container element.")]),t("tr",null,[t("td",null,"p-splitter"),t("td",null,"Container element during resize.")]),t("tr",null,[t("td",null,"p-splitter-horizontal"),t("td",null,"Container element with horizontal layout.")]),t("tr",null,[t("td",null,"p-splitter-vertical"),t("td",null,"Container element with vertical layout.")]),t("tr",null,[t("td",null,"p-splitter-panel"),t("td",null,"Splitter panel element.")]),t("tr",null,[t("td",null,"p-splitter-gutter"),t("td",null,"Gutter element to use when resizing the panels.")]),t("tr",null,[t("td",null,"p-splitter-gutter-handle"),t("td",null,"Handle element of the gutter.")])])])],-1);function zt(o,u){const r=_;return d(),b(r,g(y(o.$attrs)),{default:n(()=>[$t,bt]),_:1},16)}const vt=p(xt,[["render",zt]]),jt={data(){return{code1:{basic:`
export default {
    splitter: {
        root: ({ context }) => ({
            class: [
                'bg-white dark:bg-gray-900 rounded-lg text-gray-700 dark:text-white/80',
                {
                    'border border-solid border-gray-300 dark:border-blue-900/40': !context.nested
                }
            ]
        }),

        gutter: ({ props }) => ({
            class: [
                'flex items-center justify-center shrink-0',
                'transition-all duration-200 bg-gray-100 dark:bg-gray-800',
                {
                    'cursor-col-resize': props.layout == 'horizontal',
                    'cursor-row-resize': props.layout !== 'horizontal'
                }
            ]
        }),
        gutterhandler: ({ props }) => ({
            class: [
                'bg-gray-300 dark:bg-gray-600 transition-all duration-200',
                {
                    'h-7': props.layout == 'horizontal',
                    'w-7 h-2': props.layout !== 'horizontal'
                }
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Splitter style="height: 300px" class="mb-5">
            <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
<\/script>`}}}},Dt=t("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function wt(o,u,r,S,i,f){const c=k,l=$,a=_;return d(),b(a,g(y(o.$attrs)),{default:n(()=>[t("p",null,[s(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),e(c,{to:"/tailwind"},{default:n(()=>[s("Tailwind Customization")]),_:1}),s(" section for an example. ")]),e(l,{code:i.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Dt,e(l,{code:i.code2,embedded:""},null,8,["code"])]),_:1},16)}const Tt=p(jt,[["render",wt]]),Ct={data(){return{docs:[{id:"theming.styled",label:"Styled",component:vt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Tt}]}]}}},kt={class:"doc-main"},Nt=t("div",{class:"doc-intro"},[t("h1",null,"Splitter Theming")],-1);function Vt(o,u,r,S,i,f){const c=j,l=D;return d(),h(x,null,[t("div",kt,[Nt,e(c,{docs:i.docs},null,8,["docs"])]),e(l,{docs:i.docs},null,8,["docs"])],64)}const Ht=p(Ct,[["render",Vt]]),Bt={data(){return{docs:[{id:"import",label:"Import",component:G},{id:"horizontal",label:"Horizontal",component:K},{id:"size",label:"Size",component:nt},{id:"vertical",label:"Vertical",component:ct},{id:"nested",label:"Nested",component:X},{id:"accessibility",label:"Accessibility",component:M}],ptComponent:yt,themingDoc:Ht}}};function At(o,u,r,S,i,f){const c=C;return d(),b(c,{title:"Vue Splitter Component",header:"Splitter",description:"Splitter is utilized to separate and resize panels.",componentDocs:i.docs,apiDocs:["Splitter","SplitterPanel"],ptTabComponent:i.ptComponent,themingDocs:i.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ot=p(Bt,[["render",At]]);export{Ot as default};
