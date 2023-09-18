import{_ as s,o as p,e as w,w as v,m as k,b as t,f as r,h as m,j as $,r as D,c as _,a as e,n as b,g as T,i as f,F as h,p as g,t as C,D as P,k as S,l as E,v as j,x as B}from"./entry.68beb385.js";import{g as R}from"./PTHelper.11558b27.js";import{_ as V}from"./PrimeVueNuxtLink.f51d0c80.js";const A={},N=t("h3",null,"Screen Reader",-1),F=t("p",null,[r("Tooltip component uses "),t("i",null,"tooltip"),r(" role and when it becomes visible the generated id of the tooltip is defined as the "),t("i",null,"aria-describedby"),r(" of the target.")],-1),L=t("h3",null,"Keyboard Support",-1),z=t("div",{class:"doc-tablewrapper"},[t("table",{class:"doc-table"},[t("thead",null,[t("tr",null,[t("th",null,"Key"),t("th",null,"Function")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("i",null,"escape")]),t("td",null,"Closes the tooltip when focus is on the target.")])])])],-1);function K(n,a){const i=m;return p(),w(i,k({id:"accessibility",label:"Accessibility"},n.$attrs),{default:v(()=>[N,F,L,z]),_:1},16)}const O=s(A,[["render",K]]),q={data(){return{code:{basic:`<InputText v-tooltip="{ value: 'Enter your username', showDelay: 1000, hideDelay: 300 }" type="text" placeholder="Delayed" />`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip="{ value: 'Enter your username', showDelay: 1000, hideDelay: 300 }" type="text" placeholder="Delayed" />
    </div>
</template>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip="{ value: 'Enter your username', showDelay: 1000, hideDelay: 300 }" type="text" placeholder="Delayed" />
    </div>
</template>`}}}},U=t("p",null,[r("Adding delays to the show and hide events are defined with "),t("i",null,"showDelay"),r(" and "),t("i",null,"hideDelay"),r(" options respectively.")],-1),W={class:"card flex flex-wrap justify-content-center gap-2"};function G(n,a,i,x,o,y){const l=m,c=$("InputText"),u=g,d=D("tooltip");return p(),_(h,null,[e(l,b(T(n.$attrs)),{default:v(()=>[U]),_:1},16),t("div",W,[f(e(c,{type:"text",placeholder:"Delayed"},null,512),[[d,{value:"Enter your username",showDelay:1e3,hideDelay:300}]])]),e(u,{code:o.code},null,8,["code"])],64)}const H=s(q,[["render",G]]),J={data(){return{code:{basic:`<InputText v-tooltip.focus="'Enter your username'" type="text" placeholder="Focus" />
<Button v-tooltip="'Click to proceed'" type="button" label="Save" icon="pi pi-check" />`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip.focus="'Enter your username'" type="text" placeholder="Focus" />
        <Button v-tooltip="'Click to proceed'" type="button" label="Save" icon="pi pi-check" />
    </div>
</template>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip.focus="'Enter your username'" type="text" placeholder="Focus" />
        <Button v-tooltip="'Click to proceed'" type="button" label="Save" icon="pi pi-check" />
    </div>
</template>`}}}},M=t("p",null,[r("Tooltip is configured via modifiers that can be chained. Also, tooltip gets displayed on hover event by default, use "),t("i",null,"focus"),r(" modifier as alternative to set.")],-1),Q={class:"card flex flex-wrap justify-content-center gap-2"};function X(n,a,i,x,o,y){const l=m,c=$("InputText"),u=$("Button"),d=g,I=D("tooltip");return p(),_(h,null,[e(l,b(T(n.$attrs)),{default:v(()=>[M]),_:1},16),t("div",Q,[f(e(c,{type:"text",placeholder:"Focus"},null,512),[[I,"Enter your username",void 0,{focus:!0}]]),f(e(u,{type:"button",label:"Save",icon:"pi pi-check"},null,512),[[I,"Click to proceed"]])]),e(d,{code:o.code},null,8,["code"])],64)}const Y=s(J,[["render",X]]),Z={data(){return{code:{basic:`import Tooltip from 'primevue/tooltip';

app.directive('tooltip', Tooltip);`}}}};function tt(n,a,i,x,o,y){const l=m,c=g;return p(),_(h,null,[e(l,b(T(n.$attrs)),null,16),e(c,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const et=s(Z,[["render",tt]]),ot={data(){return{code:{basic:`<InputText v-tooltip="'Enter your username'" type="text" placeholder="Right" />
<InputText v-tooltip.top="'Enter your username'" type="text" placeholder="Top" />
<InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="Bottom" />
<InputText v-tooltip.left="'Enter your username'" type="text" placeholder="Left" />`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip="'Enter your username'" type="text" placeholder="Right" />
        <InputText v-tooltip.top="'Enter your username'" type="text" placeholder="Top" />
        <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="Bottom" />
        <InputText v-tooltip.left="'Enter your username'" type="text" placeholder="Left" />
    </div>
</template>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip="'Enter your username'" type="text" placeholder="Right" />
        <InputText v-tooltip.top="'Enter your username'" type="text" placeholder="Top" />
        <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="Bottom" />
        <InputText v-tooltip.left="'Enter your username'" type="text" placeholder="Left" />
    </div>
</template>`}}}},nt=t("p",null,[r("There are four choices to position the tooltip, default value is "),t("i",null,"right"),r(" and alternatives are "),t("i",null,"top"),r(", "),t("i",null,"bottom"),r(", "),t("i",null,"left"),r(". Position is specified using a modifier.")],-1),ct={class:"card flex flex-wrap justify-content-center gap-2"};function lt(n,a,i,x,o,y){const l=m,c=$("InputText"),u=g,d=D("tooltip");return p(),_(h,null,[e(l,b(T(n.$attrs)),{default:v(()=>[nt]),_:1},16),t("div",ct,[f(e(c,{type:"text",placeholder:"Right"},null,512),[[d,"Enter your username"]]),f(e(c,{type:"text",placeholder:"Top"},null,512),[[d,"Enter your username",void 0,{top:!0}]]),f(e(c,{type:"text",placeholder:"Bottom"},null,512),[[d,"Enter your username",void 0,{bottom:!0}]]),f(e(c,{type:"text",placeholder:"Left"},null,512),[[d,"Enter your username",void 0,{left:!0}]])]),e(u,{code:o.code},null,8,["code"])],64)}const rt=s(ot,[["render",lt]]);const it={data(){return{code:{basic:`<InputText v-tooltip.right="{ value: \`<h4 class='text-white'>PrimeVue Rocks!</h4>\`, escape: true, class: 'custom-error' }" type="text" placeholder="Template Tooltip" />`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip.right="{ value: \`<h4 class='text-white'>PrimeVue Rocks!</h4>\`, escape: true, class: 'custom-error' }" type="text" placeholder="Template Tooltip" />
    </div>
</template>

<style>
.custom-error .p-tooltip-text {
    background-color: var(--pink-800);
    color: rgb(255, 255, 255);
}
.custom-error.p-tooltip-right .p-tooltip-arrow {
    border-right-color: var(--pink-800);
}
</style>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-2">
        <InputText v-tooltip.right="{ value: \`<h4 class='text-white'>PrimeVue Rocks!</h4>\`, escape: true, class: 'custom-error' }" type="text" placeholder="Template Tooltip" />
    </div>
</template>

<style>
.custom-error .p-tooltip-text {
    background-color: var(--pink-800);
    color: rgb(255, 255, 255);
}
.custom-error.p-tooltip-right .p-tooltip-arrow {
    border-right-color: var(--pink-800);
}
</style>`}}}},st=t("p",null,[r("Tooltip can be customized via "),t("i",null,"class"),r(" and "),t("i",null,"escape"),r(" properties.")],-1),pt={class:"card flex flex-wrap justify-content-center gap-2"};function at(n,a,i,x,o,y){const l=m,c=$("InputText"),u=g,d=D("tooltip");return p(),_(h,null,[e(l,b(T(n.$attrs)),{default:v(()=>[st]),_:1},16),t("div",pt,[f(e(c,{type:"text",placeholder:"Template Tooltip"},null,512),[[d,{value:"<h4 class='text-white m-0'>PrimeVue Rocks!</h4>",escape:!0,class:"custom-error"},void 0,{right:!0}]])]),e(u,{code:o.code},null,8,["code"])],64)}const dt=s(it,[["render",at]]),ut={data(){return{code:{basic:`<InputText
    v-tooltip.right="{
        value: \`PrimeVue Rocks!\`,
        pt: {
            text: 'bg-primary'
        }
    }"
    type="text"
    placeholder="PassThrough Tooltip"
/>`,options:`<div class="card flex flex-wrap justify-content-center gap-2">
    <InputText
        v-tooltip.right="{
            value: \`PrimeVue Rocks!\`,
            pt: {
                text: 'bg-primary'
            }
        }"
        type="text"
        placeholder="PassThrough Tooltip"
    />
</div>`,composition:`
                <div class="card flex flex-wrap justify-content-center gap-2">
    <InputText
        v-tooltip.right="{
            value: \`PrimeVue Rocks!\`,
            pt: {
                text: 'bg-primary'
            }
        }"
        type="text"
        placeholder="PassThrough Tooltip"
    />
</div>`}}}},mt={class:"card flex flex-wrap justify-content-center gap-2"};function _t(n,a,i,x,o,y){const l=m,c=$("InputText"),u=g,d=D("tooltip");return p(),_(h,null,[e(l,b(T(n.$attrs)),null,16),t("div",mt,[f(e(c,{type:"text",placeholder:"PassThrough Tooltip"},null,512),[[d,{value:"PrimeVue Rocks!",pt:{text:"bg-primary"}},void 0,{right:!0}]])]),e(u,{code:o.code},null,8,["code"])],64)}const ht=s(ut,[["render",_t]]),xt={},yt=t("div",{class:"card"},[t("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/wireframe-placeholder.jpg"})],-1);function ft(n,a){const i=m;return p(),_(h,null,[e(i,b(T(n.$attrs)),{default:v(()=>[t("p",null,C(n.$attrs.description),1)]),_:1},16),yt],64)}const vt=s(xt,[["render",ft]]),bt={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:vt},{id:"pt.doc.tooltip",label:"Tooltip PT Options",component:P,data:R("Tooltip")},{id:"pt.demo",label:"Demo",component:ht}]}}},Tt={class:"doc-main"},gt=t("div",{class:"doc-intro"},[t("h1",null,"Tooltip Pass Through")],-1);function $t(n,a,i,x,o,y){const l=S,c=E;return p(),_(h,null,[t("div",Tt,[gt,e(l,{docs:o.docs},null,8,["docs"])]),e(c,{docs:o.docs},null,8,["docs"])],64)}const Dt=s(bt,[["render",$t]]),wt={},It=t("p",null,"List of class names used in the styled mode.",-1),St=j('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-tooltip</td><td>Input element.</td></tr><tr><td>p-tooltip-arrow</td><td>Arrow of the tooltip.</td></tr><tr><td>p-tooltip-text</td><td>Text of the tooltip</td></tr></tbody></table></div>',1);function Et(n,a){const i=m;return p(),_(h,null,[e(i,b(T(n.$attrs)),{default:v(()=>[It]),_:1},16),St],64)}const kt=s(wt,[["render",Et]]),Ct={data(){return{code1:{basic:`
export default {
    directives: {
        tooltip: {
            root: ({ context }) => ({
                class: [
                    'absolute shadow-md',
                    {
                        'py-0 px-1': context?.right || context?.left || (!context?.right && !context?.left && !context?.top && !context?.bottom),
                        'py-1 px-0': context?.top || context?.bottom
                    }
                ]
            }),
            arrow: ({ context }) => ({
                class: [
                    'absolute w-0 h-0 border-transparent border-solid',
                    {
                        '-m-t-1 border-y-[0.25rem] border-r-[0.25rem] border-l-0 border-r-gray-600': context?.right || (!context?.right && !context?.left && !context?.top && !context?.bottom),
                        '-m-t-1 border-y-[0.25rem] border-l-[0.25rem] border-r-0 border-l-gray-600': context?.left,
                        '-m-l-1 border-x-[0.25rem] border-t-[0.25rem] border-b-0 border-t-gray-600': context?.top,
                        '-m-l-1 border-x-[0.25rem] border-b-[0.25rem] border-t-0 border-b-gray-600': context?.bottom
                    }
                ]
            }),
            text: {
                class: 'p-3 bg-gray-600 text-white rounded-md whitespace-pre-line break-words'
            }
        }
    }
}
`},code2:{composition:`<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <InputText v-tooltip="'Enter your username'" type="text" placeholder="Right" />
        <InputText v-tooltip.top="'Enter your username'" type="text" placeholder="Top" />
        <InputText v-tooltip.bottom="'Enter your username'" type="text" placeholder="Bottom" />
        <InputText v-tooltip.left="'Enter your username'" type="text" placeholder="Left" />
    </div>
</template>`}}}},Pt=t("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function jt(n,a,i,x,o,y){const l=V,c=g,u=m;return p(),w(u,b(T(n.$attrs)),{default:v(()=>[t("p",null,[r(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),e(l,{to:"/tailwind"},{default:v(()=>[r("Tailwind Customization")]),_:1}),r(" section for an example. ")]),e(c,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Pt,e(c,{code:o.code2,embedded:""},null,8,["code"])]),_:1},16)}const Bt=s(Ct,[["render",jt]]),Rt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:kt},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Bt}]}]}}},Vt={class:"doc-main"},At=t("div",{class:"doc-intro"},[t("h1",null,"Tooltip Theming")],-1);function Nt(n,a,i,x,o,y){const l=S,c=E;return p(),_(h,null,[t("div",Vt,[At,e(l,{docs:o.docs},null,8,["docs"])]),e(c,{docs:o.docs},null,8,["docs"])],64)}const Ft=s(Rt,[["render",Nt]]),Lt={data(){return{docs:[{id:"import",label:"Import",component:et},{id:"position",label:"Position",component:rt},{id:"event",label:"Event",component:Y},{id:"template",label:"Template",component:dt},{id:"delay",label:"Delay",component:H},{id:"accessibility",label:"Accessibility",component:O}],ptComponent:Dt,themingDoc:Ft}}};function zt(n,a,i,x,o,y){const l=B;return p(),w(l,{title:"Vue Tooltip Directive",header:"Tooltip",description:"Tooltip directive provides advisory information for a component.",componentDocs:o.docs,apiDocs:["Tooltip"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ut=s(Lt,[["render",zt]]);export{Ut as default};
