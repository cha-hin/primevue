import{_ as c,j as _,r as w,o as d,c as g,a as o,w as $,n as v,g as y,b as e,i as x,F as b,h,p as C,s as B,u as D,f as s,e as A,x as k}from"./entry.68beb385.js";const I={data(){return{code:{basic:`<Button v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" label="Show" class="mr-2" />
<Button v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" label="Hide" />
<div class="hidden animation-duration-500 box">
    <div class="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold shadow-2 w-8rem h-8rem">Content</div>
</div>`,options:`<template>
    <div class="card flex flex-column align-items-center">
        <div>
            <Button v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" label="Show" class="mr-2" />
            <Button v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" label="Hide" />
        </div>
        <div class="hidden animation-duration-500 box">
            <div class="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold shadow-2 w-8rem h-8rem">Content</div>
        </div>
    </div>
</template>

<script>
<\/script>

<style scoped>
.box {
    background-color: var(--green-500);
    color: #ffffff;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

@keyframes my-fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes my-fadeout {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.my-fadein {
    animation: my-fadein 150ms linear;
}

.my-fadeout {
    animation: my-fadeout 150ms linear;
}
</style>`,composition:`<template>
    <div class="card flex flex-column align-items-center">
        <div>
            <Button v-styleclass="{ selector: '.box', enterClass: 'hidden', enterActiveClass: 'my-fadein' }" label="Show" class="mr-2" />
            <Button v-styleclass="{ selector: '.box', leaveActiveClass: 'my-fadeout', leaveToClass: 'hidden' }" label="Hide" />
        </div>
        <div class="hidden animation-duration-500 box">
            <div class="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold shadow-2 w-8rem h-8rem">Content</div>
        </div>
    </div>
</template>

<script setup>
<\/script>

<style scoped>
.box {
    background-color: var(--green-500);
    color: #ffffff;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-weight: bold;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
}

@keyframes my-fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes my-fadeout {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

.my-fadein {
    animation: my-fadein 150ms linear;
}

.my-fadeout {
    animation: my-fadeout 150ms linear;
}
</style>`}}}},S=t=>(B("data-v-0f84356a"),t=t(),D(),t),j=S(()=>e("p",null,[s(" Classes to apply during enter and leave animations are specified using the "),e("i",null,"enterClass"),s(", "),e("i",null,"enterActiveClass"),s(", "),e("i",null,"enterToClass"),s(", "),e("i",null,"leaveClass"),s(", "),e("i",null,"leaveActiveClass"),s(","),e("i",null,"leaveToClass"),s("properties. In addition in case the target is an overlay, "),e("i",null,"hideOnOutsideClick"),s(" would be handy to hide the target if outside of the popup is clicked. ")],-1)),H={class:"card flex flex-column align-items-center"},V=S(()=>e("div",{class:"hidden animation-duration-500 box"},[e("div",{class:"flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold shadow-2 w-8rem h-8rem"},"Content")],-1));function N(t,r,p,m,n,u){const a=h,l=_("Button"),f=C,i=w("styleclass");return d(),g(b,null,[o(a,v(y(t.$attrs)),{default:$(()=>[j]),_:1},16),e("div",H,[e("div",null,[x(o(l,{label:"Show",class:"mr-2"},null,512),[[i,{selector:".box",enterClass:"hidden",enterActiveClass:"my-fadein"}]]),x(o(l,{label:"Hide"},null,512),[[i,{selector:".box",leaveActiveClass:"my-fadeout",leaveToClass:"hidden"}]])]),V]),o(f,{code:n.code},null,8,["code"])],64)}const z=c(I,[["render",N],["__scopeId","data-v-0f84356a"]]),F={data(){return{code:{basic:`import StyleClass from 'primevue/styleclass';
                
app.directive('styleclass', StyleClass);`}}}};function O(t,r,p,m,n,u){const a=h,l=C;return d(),g(b,null,[o(a,v(y(t.$attrs)),null,16),o(l,{code:n.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const P=c(F,[["render",O]]),E={data(){return{code:{basic:`<Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle p-disabled" />
<InputText />`,options:`<template>
    <div class="card flex flex-column align-items-center gap-3">
        <Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle p-disabled" />
        <InputText />
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card flex flex-column align-items-center gap-3">
        <Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" label="Toggle p-disabled" />
        <InputText />
    </div>
</template>

<script setup>
<\/script>`}}}},R=e("p",null,[s("StyleClass has two modes, "),e("i",null,"toggleClass"),s(" to simply add-remove a class and enter/leave animations.")],-1),q={class:"card flex flex-column align-items-center gap-3"};function G(t,r,p,m,n,u){const a=h,l=_("Button"),f=_("InputText"),i=C,T=w("styleclass");return d(),g(b,null,[o(a,v(y(t.$attrs)),{default:$(()=>[R]),_:1},16),e("div",q,[x(o(l,{label:"Toggle p-disabled"},null,512),[[T,{selector:"@next",toggleClass:"p-disabled"}]]),o(f)]),o(i,{code:n.code},null,8,["code"])],64)}const J=c(E,[["render",G]]),K={data(){return{docs:[{id:"import",label:"Import",component:P},{id:"toggleClass",label:"Toggle Class",component:J},{id:"animation",label:"Animation",component:z}]}}};function L(t,r,p,m,n,u){const a=k;return d(),A(a,{title:"Vue StyleClass Directive",header:"StyleClass",description:"StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.",componentDocs:n.docs,apiDocs:["StyleClass"]},null,8,["componentDocs"])}const Q=c(K,[["render",L]]);export{Q as default};
