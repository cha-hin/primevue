import{_ as l,o as c,e as y,w as d,b as e,f as r,a as i,m as D,C,h as m,j as v,c as _,n as b,g as S,F as h,p as T,s as P,u as E,t as k,D as A,k as $,l as x,x as N}from"./entry.68beb385.js";import{g as M}from"./PTHelper.11558b27.js";import{_ as j}from"./PrimeVueNuxtLink.f51d0c80.js";const V={},L=e("h3",null,"Screen Reader",-1),z=e("i",null,"aria-label",-1),B=e("i",null,"aria.scrollTop",-1),I=e("h3",null,"Keyboard Support",-1),U=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Scrolls to top.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Scrolls to top.")])])])],-1);function F(t,u){const n=C,p=m;return c(),y(p,D({id:"accessibility",label:"Accessibility"},t.$attrs),{default:d(()=>[L,e("p",null,[r(" ScrollTop uses a button element with an "),z,r(" that refers to the "),B,r(" property of the "),i(n,{to:"/configuration/#locale"},{default:d(()=>[r("locale")]),_:1}),r(" API by default, you may use your own aria roles and attributes as any valid attribute is passed to the button element implicitly. ")]),I,U]),_:1},16)}const K=l(V,[["render",F]]),O={data(){return{code:{basic:"<ScrollTop />",options:`<template>
    <div class="card flex flex-column align-items-center" style="height: 2000px">
        <p>Scroll down the page to display the ScrollTop component.</p>
        <i class="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style="fontsize: 2rem"></i>
        <ScrollTop />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex flex-column align-items-center" style="height: 2000px">
        <p>Scroll down the page to display the ScrollTop component.</p>
        <i class="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style="fontsize: 2rem"></i>
        <ScrollTop />
    </div>
</template>

<script setup>
<\/script>`}}}},R=e("p",null,"ScrollTop listens window scroll by default.",-1),W={class:"card flex flex-column align-items-center"},G=e("p",null,"Scroll down the page to display the ScrollTop component.",-1),H=e("i",{class:"pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite",style:{fontsize:"2rem"}},null,-1);function J(t,u,n,p,s,g){const o=m,a=v("ScrollTop"),f=T;return c(),_(h,null,[i(o,b(S(t.$attrs)),{default:d(()=>[R]),_:1},16),e("div",W,[G,H,i(a)]),i(f,{code:s.code},null,8,["code"])],64)}const Q=l(O,[["render",J]]);const X={data(){return{code:{basic:'<ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />',options:`<template>
    <div class="card">
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />
        </ScrollPanel>
    </div>
</template>

<script>
<\/script>

<style scoped>
::v-deep(.custom-scrolltop) {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop:hover) {
    background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop .p-scrolltop-icon) {
    font-size: 1rem;
    color: var(--primary-color-text);
}
</style>`,composition:`<template>
    <div class="card">
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />
        </ScrollPanel>
    </div>
</template>

<script setup>
<\/script>

<style scoped>
::v-deep(.custom-scrolltop) {
    width: 2rem;
    height: 2rem;
    border-radius: 4px;
    background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop:hover) {
    background-color: var(--primary-color);
}

::v-deep(.custom-scrolltop .p-scrolltop-icon) {
    font-size: 1rem;
    color: var(--primary-color-text);
}
</style>`}}}},w=t=>(P("data-v-3d96da9b"),t=t(),E(),t),Y=w(()=>e("p",null,[r("Setting the "),e("i",null,"target"),r(" property to "),e("i",null,"parent"),r(" binds ScrollTop to its parent element that has scrolling content.")],-1)),Z={class:"card"},ee=w(()=>e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ",-1));function te(t,u,n,p,s,g){const o=m,a=v("ScrollTop"),f=v("ScrollPanel"),q=T;return c(),_(h,null,[i(o,b(S(t.$attrs)),{default:d(()=>[Y]),_:1},16),e("div",Z,[i(f,{style:{width:"250px",height:"200px"}},{default:d(()=>[ee,i(a,{target:"parent",threshold:100,class:"custom-scrolltop",icon:"pi pi-arrow-up"})]),_:1})]),i(q,{code:s.code},null,8,["code"])],64)}const ie=l(X,[["render",te],["__scopeId","data-v-3d96da9b"]]),se={data(){return{code:{basic:"import ScrollTop from 'primevue/scrolltop';"}}}};function oe(t,u,n,p,s,g){const o=m,a=T;return c(),_(h,null,[i(o,b(S(t.$attrs)),null,16),i(a,{code:s.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ae=l(se,[["render",oe]]),ne={data(){return{code:{basic:`<ScrollTop target="parent"
    :pt="{ 
        root: { class: 'w-2rem h-2rem bg-primary' },
        icon: { class: 'w-1rem h-1rem' }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent"
                :pt="{ 
                    root: { class: 'w-2rem h-2rem bg-primary' },
                    icon: { class: 'w-1rem h-1rem' }
                }"
            />
        </ScrollPanel>
    </div>
</template>`,composition:`<template>
    <div class="card flex justify-content-center">
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent"
                :pt="{ 
                    root: { class: 'w-2rem h-2rem bg-primary' },
                    icon: { class: 'w-1rem h-1rem' }
                }"
            />
        </ScrollPanel>
    </div>
</template>`}}}},re={class:"card flex justify-content-center"},le=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ",-1);function ce(t,u,n,p,s,g){const o=m,a=v("ScrollTop"),f=v("ScrollPanel"),q=T;return c(),_(h,null,[i(o,b(S(t.$attrs)),null,16),e("div",re,[i(f,{style:{width:"250px",height:"200px"}},{default:d(()=>[le,i(a,{target:"parent",pt:{root:{class:"w-2rem h-2rem bg-primary"},icon:{class:"w-1rem h-1rem"}}})]),_:1})]),i(q,{code:s.code},null,8,["code"])],64)}const ue=l(ne,[["render",ce]]),de={},pe=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/scrolltop.jpg"})],-1);function me(t,u){const n=m;return c(),_(h,null,[i(n,b(S(t.$attrs)),{default:d(()=>[e("p",null,k(t.$attrs.description),1)]),_:1},16),pe],64)}const _e=l(de,[["render",me]]),he={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:_e},{id:"pt.doc.scrolltop",label:"ScrollTop PT Options",component:A,data:M("ScrollTop")},{id:"pt.demo",label:"Demo",component:ue}]}}},ge={class:"doc-main"},fe=e("div",{class:"doc-intro"},[e("h1",null,"ScrollTop Pass Through")],-1);function be(t,u,n,p,s,g){const o=$,a=x;return c(),_(h,null,[e("div",ge,[fe,i(o,{docs:s.docs},null,8,["docs"])]),i(a,{docs:s.docs},null,8,["docs"])],64)}const Se=l(he,[["render",be]]),ve={},Te=e("p",null,"List of class names used in the styled mode.",-1),qe=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Element")])]),e("tbody",null,[e("tr",null,[e("td",null,"p-scrolltop"),e("td",null,"Container element.")]),e("tr",null,[e("td",null,"p-scrolltop-sticky"),e("td",null,"Container element when attached to its parent.")])])])],-1);function ye(t,u){const n=m;return c(),_(h,null,[i(n,b(S(t.$attrs)),{default:d(()=>[Te]),_:1},16),qe],64)}const $e=l(ve,[["render",ye]]),xe={data(){return{code1:{basic:`
export default {
    scrolltop: {
        root: ({ props }) => ({
            class: [
                'fixed bottom-20 right-20 flex items-center justify-center',
                'ml-auto',
                {
                    '!bg-blue-500 hover:bg-blue-600 text-white rounded-md h-8 w-8': props.target == 'parent',
                    '!bg-gray-700 hover:bg-gray-800 h-12 w-12 rounded-full text-white': props.target !== 'parent'
                }
            ]
        }),
        transition: {
            enterFromClass: 'opacity-0',
            enterActiveClass: 'transition-opacity duration-150',
            leaveActiveClass: 'transition-opacity duration-150',
            leaveToClass: 'opacity-0'
        }
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <ScrollPanel style="width: 250px; height: 200px">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing
                elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper
                feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet
                dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi.
                Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
            </p>
            <ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" />
        </ScrollPanel>
    </div>
</template>
`}}}},we=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function De(t,u,n,p,s,g){const o=j,a=T,f=m;return c(),y(f,b(S(t.$attrs)),{default:d(()=>[e("p",null,[r(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),i(o,{to:"/tailwind"},{default:d(()=>[r("Tailwind Customization")]),_:1}),r(" section for an example. ")]),i(a,{code:s.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),we,i(a,{code:s.code2,embedded:""},null,8,["code"])]),_:1},16)}const Ce=l(xe,[["render",De]]),Pe={data(){return{docs:[{id:"theming.styled",label:"Styled",component:$e},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Ce}]}]}}},Ee={class:"doc-main"},ke=e("div",{class:"doc-intro"},[e("h1",null,"ScrollTop Theming")],-1);function Ae(t,u,n,p,s,g){const o=$,a=x;return c(),_(h,null,[e("div",Ee,[ke,i(o,{docs:s.docs},null,8,["docs"])]),i(a,{docs:s.docs},null,8,["docs"])],64)}const Ne=l(Pe,[["render",Ae]]),Me={data(){return{docs:[{id:"import",label:"Import",component:ae},{id:"basic",label:"Basic",component:Q},{id:"element",label:"Element",component:ie},{id:"accessibility",label:"Accessibility",component:K}],ptComponent:Se,themingDoc:Ne}}};function je(t,u,n,p,s,g){const o=N;return c(),y(o,{title:"Vue ScrollTop Component",header:"ScrollTop",description:"ScrollTop gets displayed after a certain scroll position and used to navigates to the top of the page quickly.",componentDocs:s.docs,apiDocs:["ScrollTop"],ptTabComponent:s.ptComponent,themingDocs:s.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Be=l(Me,[["render",je]]);export{Be as default};
