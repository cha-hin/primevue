import{_ as d,o as l,e as y,w as s,a as t,m as v,b as e,f as a,p as C,h as _,j as $,c as h,n as g,g as q,F as b,t as w,D as T,k as S,l as x,v as k,x as B}from"./entry.68beb385.js";import{g as I}from"./PTHelper.11558b27.js";import{_ as L}from"./PrimeVueNuxtLink.f51d0c80.js";const A={data(){return{code:{basic:`<Card role="region">
    Content
</Card>`}}}},P=e("h3",null,"Screen Reader",-1),N=e("p",null,[a(" A card can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so if you require to use one of the "),e("a",{href:"https://www.w3.org/TR/wai-aria/#landmark",alt:"Landmark Roles"},"landmark"),a(" roles like "),e("i",null,"region"),a(", you may use the "),e("i",null,"role"),a(" property. ")],-1),V=e("h3",null,"Keyboard Support",-1),z=e("p",null,"Component does not include any interactive elements.",-1);function j(o,p,c,u,n,m){const r=C,i=_;return l(),y(i,v({id:"accessibility",label:"Accessibility"},o.$attrs),{default:s(()=>[P,N,t(r,v({code:n.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},o.$attrs),null,16,["code"]),V,z]),_:1},16)}const F=d(A,[["render",j]]),R={data(){return{code:{basic:`<Card style="width: 25em">
    <template #header>
        <img alt="user header" src="/images/usercard.png" />
    </template>
    <template #title> Advanced Card </template>
    <template #subtitle> Card subtitle </template>
    <template #content>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Save" />
        <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
    </template>
</Card>`,options:`<template>
    <div class="card flex align-items-center justify-content-center">
        <Card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle> Card subtitle </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" label="Save" />
                <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex align-items-center justify-content-center">
        <Card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle> Card subtitle </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" label="Save" />
                <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>
    </div>
</template>

<script setup>
<\/script>`}}}},E=e("p",null,[a("Card provides "),e("i",null,"header"),a(", "),e("i",null,"title"),a(", "),e("i",null,"subtitle"),a(", "),e("i",null,"content"),a(" and "),e("i",null,"footer"),a(" as the named templates to place content.")],-1),O={class:"card flex align-items-center justify-content-center"},K=e("img",{alt:"user header",class:"w-full",src:"https://primefaces.org/cdn/primevue/images/usercard.png"},null,-1),U=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ",-1);function W(o,p,c,u,n,m){const r=_,i=$("Button"),f=$("Card"),D=C;return l(),h(b,null,[t(r,g(q(o.$attrs)),{default:s(()=>[E]),_:1},16),e("div",O,[t(f,{style:{width:"25em"}},{header:s(()=>[K]),title:s(()=>[a(" Advanced Card ")]),subtitle:s(()=>[a(" Card subtitle ")]),content:s(()=>[U]),footer:s(()=>[t(i,{icon:"pi pi-check",label:"Save"}),t(i,{icon:"pi pi-times",label:"Cancel",severity:"secondary",style:{"margin-left":"0.5em"}})]),_:1})]),t(D,{code:n.code},null,8,["code"])],64)}const G=d(R,[["render",W]]),H={data(){return{code:{basic:`
<Card>
    <template #title> Simple Card </template>
    <template #content>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </template>
</Card>`,options:`
<template>
    <div class="card">
        <Card>
            <template #title> Simple Card </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
        </Card>
    </div>
</template>

<script>
<\/script>`,composition:`
<template>
    <div class="card">
        <Card>
            <template #title> Simple Card </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
        </Card>
    </div>
</template>

<script setup>
<\/script>`}}}},J=e("p",null,[a("A simple Card is created with a "),e("i",null,"title"),a(" property along with the content as children.")],-1),M={class:"card"},Q=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ",-1);function X(o,p,c,u,n,m){const r=_,i=$("Card"),f=C;return l(),h(b,null,[t(r,g(q(o.$attrs)),{default:s(()=>[J]),_:1},16),e("div",M,[t(i,null,{title:s(()=>[a(" Simple Card ")]),content:s(()=>[Q]),_:1})]),t(f,{code:n.code},null,8,["code"])],64)}const Y=d(H,[["render",X]]),Z={data(){return{code:{basic:"import Card from 'primevue/card';"}}}};function ee(o,p,c,u,n,m){const r=_,i=C;return l(),h(b,null,[t(r,g(q(o.$attrs)),null,16),t(i,{code:n.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const te=d(Z,[["render",ee]]),ne={data(){return{code:{basic:`<Card :pt="{ body: { class: 'bg-primary border-round-lg' } }">
    <template #title> Simple Card </template>
    <template #content>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </template>
</Card>`,options:`<template>
    <div class="card">
        <Card :pt="{ body: { class: 'bg-primary border-round-lg' } }">
            <template #title> Simple Card </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
        </Card>
    </div>
</template>`,composition:`<template>
    <div class="card">
        <Card :pt="{ body: { class: 'bg-primary border-round-lg' } }">
            <template #title> Simple Card </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
        </Card>
    </div>
</template>`}}}},oe={class:"card"},ae=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ",-1);function re(o,p,c,u,n,m){const r=_,i=$("Card"),f=C;return l(),h(b,null,[t(r,g(q(o.$attrs)),null,16),e("div",oe,[t(i,{pt:{body:{class:"bg-primary border-round-lg"}}},{title:s(()=>[a(" Simple Card ")]),content:s(()=>[ae]),_:1})]),t(f,{code:n.code},null,8,["code"])],64)}const ie=d(ne,[["render",re]]),se={},ce=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/card.jpg"})],-1);function de(o,p){const c=_;return l(),h(b,null,[t(c,g(q(o.$attrs)),{default:s(()=>[e("p",null,w(o.$attrs.description),1)]),_:1},16),ce],64)}const le=d(se,[["render",de]]),pe={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:le},{id:"pt.doc.card",label:"Card PT Options",component:T,data:I("Card")},{id:"pt.demo",label:"Demo",component:ie}]}}},ue={class:"doc-main"},me=e("div",{class:"doc-intro"},[e("h1",null,"Card Pass Through")],-1);function _e(o,p,c,u,n,m){const r=S,i=x;return l(),h(b,null,[e("div",ue,[me,t(r,{docs:n.docs},null,8,["docs"])]),t(i,{docs:n.docs},null,8,["docs"])],64)}const he=d(pe,[["render",_e]]),be={},fe=e("p",null,"List of class names used in the styled mode.",-1),ge=k('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-card</td><td>Container element.</td></tr><tr><td>p-card-title</td><td>Title element.</td></tr><tr><td>p-card-subtitle</td><td>Subtitle element.</td></tr><tr><td>p-card-content</td><td>Content of the card.</td></tr><tr><td>p-card-footer</td><td>Footer of the card.</td></tr></tbody></table></div>',1);function qe(o,p){const c=_;return l(),h(b,null,[t(c,g(q(o.$attrs)),{default:s(()=>[fe]),_:1},16),ge],64)}const Ce=d(be,[["render",qe]]),$e={data(){return{code1:{basic:`
export default {
    card: {
        root: {
            class: [
                'bg-white text-gray-700 shadow-md rounded-md', // Background, text color, box shadow, and border radius.
                'dark:bg-gray-900 dark:text-white ' //dark
            ]
        },
        body: 'p-5', // Padding.
        title: 'text-2xl font-bold mb-2', // Font size, font weight, and margin bottom.
        subtitle: {
            class: [
                'font-normal mb-2 text-gray-600', // Font weight, margin bottom, and text color.
                'dark:text-white/60 ' //dark
            ]
        },
        content: 'py-5', // Vertical padding.
        footer: 'pt-5' // Top padding.
    }
}
`},code2:{composition:`<template>
    <div class="card flex items-center justify-center">
        <Card style="width: 25em">
            <template #header>
                <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
            </template>
            <template #title> Advanced Card </template>
            <template #subtitle> Card subtitle </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                    quas!
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" label="Save" />
                <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>
    </div>
</template>

<script setup>
<\/script>`}}}},ye=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function ve(o,p,c,u,n,m){const r=L,i=C,f=_;return l(),y(f,g(q(o.$attrs)),{default:s(()=>[e("p",null,[a(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(r,{to:"/tailwind"},{default:s(()=>[a("Tailwind Customization")]),_:1}),a(" section for an example. ")]),t(i,{code:n.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),ye,t(i,{code:n.code2,embedded:""},null,8,["code"])]),_:1},16)}const Se=d($e,[["render",ve]]),xe={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ce},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Se}]}]}}},De={class:"doc-main"},we=e("div",{class:"doc-intro"},[e("h1",null,"Card Theming")],-1);function Te(o,p,c,u,n,m){const r=S,i=x;return l(),h(b,null,[e("div",De,[we,t(r,{docs:n.docs},null,8,["docs"])]),t(i,{docs:n.docs},null,8,["docs"])],64)}const ke=d(xe,[["render",Te]]),Be={data(){return{docs:[{id:"import",label:"Import",component:te},{id:"basic",label:"Basic",component:Y},{id:"advanced",label:"Advanced",component:G},{id:"accessibility",label:"Accessibility",component:F}],ptComponent:he,themingDoc:ke}}};function Ie(o,p,c,u,n,m){const r=B;return l(),y(r,{title:"Vue Card Component",header:"Card",description:"Card is a flexible container component.",componentDocs:n.docs,apiDocs:["Card"],ptTabComponent:n.ptComponent,themingDocs:n.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ne=d(Be,[["render",Ie]]);export{Ne as default};
