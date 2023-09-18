import{_ as m,j as i,r as A,o as d,c as r,a as s,w as p,n as _,g as h,b as e,i as V,F as b,h as w,p as x,e as I,x as S}from"./entry.68beb385.js";const C={data(){return{name:null,email:null,password:null,accept:null,code:{basic:`<div class="flex justify-content-center p-fluid">
    <div v-focustrap class="card">
        <div class="field">
            <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
        </div>
        <div class="field">
            <div class="p-input-icon-right">
                <i class="pi pi-envelope" />
                <InputText id="email" v-model="email" type="email" placeholder="Email" />
            </div>
        </div>
        <div class="field">
            <div class="p-float-label">
                <Password v-model="password">
                    <template #header>
                        <h6>Pick a password</h6>
                    </template>
                    <template #footer>
                        <Divider />
                        <p class="mt-2">Suggestions</p>
                        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                            <li>At least one lowercase</li>
                            <li>At least one uppercase</li>
                            <li>At least one numeric</li>
                            <li>Minimum 8 characters</li>
                        </ul>
                    </template>
                </Password>
                <label for="password">Password</label>
            </div>
        </div>
        <div class="field-checkbox">
            <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
            <label for="accept">I agree to the terms and conditions*</label>
        </div>
        <Button type="submit" label="Submit" class="mt-2" />
    </div>
</div>`,options:`<template>
    <div class="flex justify-content-center p-fluid">
        <div v-focustrap class="card">
            <div class="field">
                <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
            </div>
            <div class="field">
                <div class="p-input-icon-right">
                    <i class="pi pi-envelope" />
                    <InputText id="email" v-model="email" type="email" placeholder="Email" />
                </div>
            </div>
            <div class="field">
                <div class="p-float-label">
                    <Password v-model="password">
                        <template #header>
                            <h6>Pick a password</h6>
                        </template>
                        <template #footer>
                            <Divider />
                            <p class="mt-2">Suggestions</p>
                            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                <li>At least one lowercase</li>
                                <li>At least one uppercase</li>
                                <li>At least one numeric</li>
                                <li>Minimum 8 characters</li>
                            </ul>
                        </template>
                    </Password>
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="field-checkbox">
                <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                <label for="accept">I agree to the terms and conditions*</label>
            </div>
            <Button type="submit" label="Submit" class="mt-2" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            password: null,
            accept: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="flex justify-content-center p-fluid">
        <div v-focustrap class="card">
            <div class="field">
                <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus />
            </div>
            <div class="field">
                <div class="p-input-icon-right">
                    <i class="pi pi-envelope" />
                    <InputText id="email" v-model="email" type="email" placeholder="Email" />
                </div>
            </div>
            <div class="field">
                <div class="p-float-label">
                    <Password v-model="password">
                        <template #header>
                            <h6>Pick a password</h6>
                        </template>
                        <template #footer>
                            <Divider />
                            <p class="mt-2">Suggestions</p>
                            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                <li>At least one lowercase</li>
                                <li>At least one uppercase</li>
                                <li>At least one numeric</li>
                                <li>Minimum 8 characters</li>
                            </ul>
                        </template>
                    </Password>
                    <label for="password">Password</label>
                </div>
            </div>
            <div class="field-checkbox">
                <Checkbox id="accept" v-model="accept" name="accept" value="Accept" />
                <label for="accept">I agree to the terms and conditions*</label>
            </div>
            <Button type="submit" label="Submit" class="mt-2" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref();
const email = ref();
const password = ref();
const accept = ref();
<\/script>`}}}},B=e("p",null,"FocusTrap is enabled by attaching the directive with the v- prefix.",-1),F={class:"flex justify-content-center p-fluid"},$={class:"card"},N={class:"field"},j={class:"field"},E={class:"p-input-icon-right"},M=e("i",{class:"pi pi-envelope"},null,-1),U={class:"field"},z={class:"p-float-label"},O=e("h6",null,"Pick a password",-1),R=e("p",{class:"mt-2"},"Suggestions",-1),q=e("ul",{class:"pl-2 ml-2 mt-0",style:{"line-height":"1.5"}},[e("li",null,"At least one lowercase"),e("li",null,"At least one uppercase"),e("li",null,"At least one numeric"),e("li",null,"Minimum 8 characters")],-1),G=e("label",{for:"password"},"Password",-1),H={class:"field-checkbox"},J=e("label",{for:"accept"},"I agree to the terms and conditions*",-1);function K(c,l,u,v,t,f){const a=w,n=i("InputText"),g=i("Divider"),y=i("Password"),D=i("Checkbox"),k=i("Button"),P=x,T=A("focustrap");return d(),r(b,null,[s(a,_(h(c.$attrs)),{default:p(()=>[B]),_:1},16),e("div",F,[V((d(),r("div",$,[e("div",N,[s(n,{id:"input",modelValue:t.name,"onUpdate:modelValue":l[0]||(l[0]=o=>t.name=o),type:"text",placeholder:"Name",autofocus:""},null,8,["modelValue"])]),e("div",j,[e("div",E,[M,s(n,{id:"email",modelValue:t.email,"onUpdate:modelValue":l[1]||(l[1]=o=>t.email=o),type:"email",placeholder:"Email"},null,8,["modelValue"])])]),e("div",U,[e("div",z,[s(y,{modelValue:t.password,"onUpdate:modelValue":l[2]||(l[2]=o=>t.password=o)},{header:p(()=>[O]),footer:p(()=>[s(g),R,q]),_:1},8,["modelValue"]),G])]),e("div",H,[s(D,{id:"accept",modelValue:t.accept,"onUpdate:modelValue":l[3]||(l[3]=o=>t.accept=o),name:"accept",value:"Accept"},null,8,["modelValue"]),J]),s(k,{type:"submit",label:"Submit",class:"mt-2"})])),[[T]])]),s(P,{code:t.code},null,8,["code"])],64)}const L=m(C,[["render",K]]),Q={data(){return{code:{basic:`import FocusTrap from 'primevue/focustrap';

app.directive('focustrap', FocusTrap);`}}}};function W(c,l,u,v,t,f){const a=w,n=x;return d(),r(b,null,[s(a,_(h(c.$attrs)),null,16),s(n,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const X=m(Q,[["render",W]]),Y={data(){return{name:null,email:null,password:null,accept:null,docs:[{id:"import",label:"Import",component:X},{id:"basic",label:"Basic",component:L}]}}};function Z(c,l,u,v,t,f){const a=S;return d(),I(a,{title:"Vue FocusTrap Directive",header:"Focus Trap",description:"Focus Trap keeps focus within a certain DOM element while tabbing.",componentDocs:t.docs,apiDocs:["FocusTrap"]},null,8,["componentDocs"])}const te=m(Y,[["render",Z]]);export{te as default};
