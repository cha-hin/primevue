import{_ as r,o as d,e as $,w as l,b as e,f as t,a as o,m as D,C,h as g,j as y,c as _,n as v,g as w,F as h,p as b,G as T,t as S,D as k,k as I,l as j,v as P,x as z}from"./entry.68beb385.js";import{g as A}from"./PTHelper.11558b27.js";import{_ as B}from"./PrimeVueNuxtLink.f51d0c80.js";const N={},V=e("h3",null,"Screen Reader",-1),F=e("i",null,"button",-1),L=e("i",null,"aria-label",-1),E=e("i",null,"aria.zoomImage",-1),O=e("i",null,"previewButtonProps",-1),R=e("p",null,[t("When preview is active, "),e("i",null,"dialog"),t(" role with "),e("i",null,"aria-modal"),t(" is applied to the overlay image container.")],-1),W=e("i",null,"aria.rotateRight",-1),K=e("i",null,"aria.rotateLeft",-1),M=e("i",null,"aria.zoomIn",-1),U=e("i",null,"aria.zoomOut",-1),q=e("i",null,"aria.close",-1),G=e("i",null,"aria-label",-1),H=e("h3",null,"ButtonBar Keyboard Support",-1),J=e("p",null,"When preview is activated, close button receives the initial focus.",-1),Q=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus through button bar.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Activates the button.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Activates the button.")]),e("tr",null,[e("td",null,[e("i",null,"esc")]),e("td",null,"Closes the image preview.")])])])],-1);function X(i,p){const c=C,m=g;return d(),$(m,D({id:"accessibility",label:"Accessibility"},i.$attrs),{default:l(()=>[V,e("p",null,[t(" The preview button is a native "),F,t(" element with an "),L,t(" that refers to the "),E,t(" property of the "),o(c,{to:"/configuration/#locale"},{default:l(()=>[t("locale")]),_:1}),t(" API by default, with "),O,t(" you may use your own aria roles and attributes as any valid attribute is passed to the button element implicitly. ")]),R,e("p",null,[t("Button controls use "),W,t(", "),K,t(", "),M,t(", "),U,t(" and "),q,t(" from the "),o(c,{to:"/configuration/#locale"},{default:l(()=>[t("locale")]),_:1}),t(" API as "),G,t(".")]),H,J,Q]),_:1},16)}const Y=r(N,[["render",X]]),Z={data(){return{code:{basic:'<Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg" alt="Image" width="250" />',options:`<template>
    <div class="card flex justify-content-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg" alt="Image" width="250" />
    </div>
</template>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg" alt="Image" width="250" />
    </div>
</template>`}}}},ee=e("p",null,[t("Image is used similar to the standard "),e("i",null,"img"),t(" element.")],-1),te={class:"card flex justify-content-center"};function oe(i,p,c,m,n,f){const a=g,s=y("Image"),u=b;return d(),_(h,null,[o(a,v(w(i.$attrs)),{default:l(()=>[ee]),_:1},16),e("div",te,[o(s,{src:"https://primefaces.org/cdn/primevue/images/galleria/galleria7.jpg",alt:"Image",width:"250"})]),o(u,{code:n.code},null,8,["code"])],64)}const ne=r(Z,[["render",oe]]),ie={data(){return{code:{basic:"import Image from 'primevue/image';"}}}};function ae(i,p,c,m,n,f){const a=g,s=b;return d(),_(h,null,[o(a,v(w(i.$attrs)),null,16),o(s,{code:n.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const se=r(ie,[["render",ae]]),ce={data(){return{code:{basic:'<Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" preview />',options:`<template>
    <div class="card flex justify-content-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
    </div>
</template>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
    </div>
</template>`}}}},le=e("p",null,[t("Enabling "),e("i",null,"preview"),t(" mode displays a modal layer when the image is clicked to provide transformation options such as rotating and zooming.")],-1),re={class:"card flex justify-content-center"};function de(i,p,c,m,n,f){const a=g,s=y("Image"),u=b;return d(),_(h,null,[o(a,v(w(i.$attrs)),{default:l(()=>[le]),_:1},16),e("div",re,[o(s,{src:"https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",alt:"Image",width:"250",preview:""})]),o(u,{code:n.code},null,8,["code"])],64)}const pe=r(ce,[["render",de]]),me={data(){return{code:{basic:`<Image alt="Image" preview>
    <template #indicatoricon>
        <i class="pi pi-check"></i>
    </template>
    <template #image>
        <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12s.jpg" alt="image" />
    </template>
    <template #preview="slotProps">
        <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
    </template>
</Image>`,options:`<template>
    <div class="card flex justify-content-center">
        <Image alt="Image" preview>
            <template #indicatoricon>
                <i class="pi pi-check"></i>
            </template>
            <template #image>
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12s.jpg" alt="image" />
            </template>
            <template #preview="slotProps">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
            </template>
        </Image>
    </div>
</template>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Image alt="Image" preview>
            <template #indicatoricon>
                <i class="pi pi-check"></i>
            </template>
            <template #image>
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12s.jpg" alt="image" />
            </template>
            <template #preview="slotProps">
                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg" alt="preview" :style="slotProps.style" @click="slotProps.onClick" />
            </template>
        </Image>
    </div>
</template>`}}}},ue=e("p",null,[t("An eye icon is displayed by default when the image is hovered in preview mode. Use the "),e("i",null,"indicator"),t(" slot for custom content.")],-1),ge={class:"card flex justify-content-center"},_e=e("i",{class:"pi pi-check"},null,-1),he=e("img",{src:"https://primefaces.org/cdn/primevue/images/galleria/galleria12s.jpg",alt:"image"},null,-1),fe=["onClick"];function ve(i,p,c,m,n,f){const a=g,s=y("Image"),u=b;return d(),_(h,null,[o(a,v(w(i.$attrs)),{default:l(()=>[ue]),_:1},16),e("div",ge,[o(s,{alt:"Image",preview:""},{indicatoricon:l(()=>[_e]),image:l(()=>[he]),preview:l(x=>[e("img",{src:"https://primefaces.org/cdn/primevue/images/galleria/galleria12.jpg",alt:"preview",style:T(x.style),onClick:x.onClick},null,12,fe)]),_:1})]),o(u,{code:n.code},null,8,["code"])],64)}const we=r(me,[["render",ve]]),be={data(){return{code:{basic:`<Image
    src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
    alt="Image"
    width="250"
    preview
    :pt="{
        image: { class: 'w-15rem' }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Image
            src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
            alt="Image"
            width="250"
            preview
            :pt="{
                image: { class: 'w-15rem' }
            }"
        />
    </div>
</template>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Image
            src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
            alt="Image"
            width="250"
            preview
            :pt="{
                image: { class: 'w-15rem' }
            }"
        />
    </div>
</template>`}}}},ye={class:"card flex justify-content-center"};function $e(i,p,c,m,n,f){const a=g,s=y("Image"),u=b;return d(),_(h,null,[o(a,v(w(i.$attrs)),null,16),e("div",ye,[o(s,{src:"https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg",alt:"Image",width:"250",preview:"",pt:{image:{class:"w-15rem"}}})]),o(u,{code:n.code},null,8,["code"])],64)}const xe=r(be,[["render",$e]]),Ie={},je=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/wireframe-placeholder.jpg"})],-1);function De(i,p){const c=g;return d(),_(h,null,[o(c,v(w(i.$attrs)),{default:l(()=>[e("p",null,S(i.$attrs.description),1)]),_:1},16),je],64)}const Ce=r(Ie,[["render",De]]),Te={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ce},{id:"pt.doc.image",label:"Image PT Options",component:k,data:A("Image")},{id:"pt.demo",label:"Demo",component:xe}]}}},Se={class:"doc-main"},ke=e("div",{class:"doc-intro"},[e("h1",null,"Image Pass Through")],-1);function Pe(i,p,c,m,n,f){const a=I,s=j;return d(),_(h,null,[e("div",Se,[ke,o(a,{docs:n.docs},null,8,["docs"])]),o(s,{docs:n.docs},null,8,["docs"])],64)}const ze=r(Te,[["render",Pe]]),Ae={},Be=e("p",null,"List of class names used in the styled mode.",-1),Ne=P('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-image</td><td>Container element.</td></tr><tr><td>p-image-preview-container</td><td>Container element with preview enabled.</td></tr><tr><td>p-image-preview-indicator</td><td>Mask layer over the image when hovered.</td></tr><tr><td>p-image-preview-icon</td><td>Icon of the preview indicator.</td></tr><tr><td>p-image-mask</td><td>Preview overlay container.</td></tr><tr><td>p-image-toolbar</td><td>Transformation options container.</td></tr><tr><td>p-image-action</td><td>An element inside the toolbar.</td></tr><tr><td>p-image-preview</td><td>Image element inside the preview overlay.</td></tr></tbody></table></div>',1);function Ve(i,p){const c=g;return d(),_(h,null,[o(c,v(w(i.$attrs)),{default:l(()=>[Be]),_:1},16),Ne],64)}const Fe=r(Ae,[["render",Ve]]),Le={data(){return{code1:{basic:`
export default {
    image: {
        root: 'relative inline-block',
        button: {
            class: [
                'absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300',
                'bg-transparent text-gray-100',
                'hover:opacity-100 hover:cursor-pointer hover:bg-black hover:bg-opacity-50' //Hover
            ]
        },
        mask: {
            class: ['fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90']
        },
        toolbar: {
            class: ['absolute top-0 right-0 flex', 'p-4']
        },
        rotaterightbutton: {
            class: [
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        rotaterighticon: 'w-6 h-6',
        rotateleftbutton: {
            class: [
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        rotatelefticon: 'w-6 h-6',
        zoomoutbutton: {
            class: [
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        zoomouticon: 'w-6 h-6',
        zoominbutton: {
            class: [
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        zoominicon: 'w-6 h-6',
        closebutton: {
            class: [
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        closeicon: 'w-6 h-6',
        transition: {
            enterFromClass: 'opacity-0 scale-75',
            enterActiveClass: 'transition-all duration-150 ease-in-out',
            leaveActiveClass: 'transition-all duration-150 ease-in',
            leaveToClass: 'opacity-0 scale-75'
        }
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
    </div>
</template>`}}}},Ee=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Oe(i,p,c,m,n,f){const a=B,s=b,u=g;return d(),$(u,v(w(i.$attrs)),{default:l(()=>[e("p",null,[t(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(a,{to:"/tailwind"},{default:l(()=>[t("Tailwind Customization")]),_:1}),t(" section for an example. ")]),o(s,{code:n.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ee,o(s,{code:n.code2,embedded:""},null,8,["code"])]),_:1},16)}const Re=r(Le,[["render",Oe]]),We={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Fe},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Re}]}]}}},Ke={class:"doc-main"},Me=e("div",{class:"doc-intro"},[e("h1",null,"Image Theming")],-1);function Ue(i,p,c,m,n,f){const a=I,s=j;return d(),_(h,null,[e("div",Ke,[Me,o(a,{docs:n.docs},null,8,["docs"])]),o(s,{docs:n.docs},null,8,["docs"])],64)}const qe=r(We,[["render",Ue]]),Ge={data(){return{docs:[{id:"import",label:"Import",component:se},{id:"basic",label:"Basic",component:ne},{id:"preview",label:"Preview",component:pe},{id:"template",label:"Template",component:we},{id:"accessibility",label:"Accessibility",component:Y}],ptComponent:ze,themingDoc:qe}}};function He(i,p,c,m,n,f){const a=z;return d(),$(a,{title:"Vue Image Component",header:"Image",description:"Displays a single image with preview and tranformation options.",componentDocs:n.docs,apiDocs:["Image"],ptTabComponent:n.ptComponent,themingDocs:n.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ye=r(Ge,[["render",He]]);export{Ye as default};
