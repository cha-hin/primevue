import{_ as g,o as l,e as $,w as c,b as e,f as t,a as s,m as k,C as T,h as y,j as b,c as m,n as M,g as v,F as _,p as h,q as I,t as w,a8 as B,D as P,k as D,l as S,v as W,x as A}from"./entry.68beb385.js";import{g as E}from"./PTHelper.11558b27.js";import{_ as V}from"./PrimeVueNuxtLink.f51d0c80.js";const N={data(){return{code1:{basic:`<ConfirmDialog id="confirm" />

<Button @click="openDialog()" label="Confirm" :aria-expanded="visible" :aria-controls="visible ? 'confirm' : null"></Button>

`},code2:{basic:`<script setup>
const confirm = useConfirm();
const isVisible = ref(false);

const openDialog = () => {
    confirm.require({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        onShow: () => {
            isVisible.value = true;
        },
        onHide: () => {
            isVisible.value = false;
        }
    });
};
<\/script>`}}}},j=e("h3",null,"Screen Reader",-1),q=e("p",null,[t(" Message components use "),e("i",null,"alert"),t(" role that implicitly defines "),e("i",null,"aria-live"),t(' as "assertive" and '),e("i",null,"aria-atomic"),t(' as "true". Since any attribute is passed to the root element, attributes like '),e("i",null,"aria-labelledby"),t(" and "),e("i",null,"aria-label"),t(" can optionally be used as well. ")],-1),z=e("i",null,"button",-1),F=e("i",null,"aria-label",-1),L=e("i",null,"aria.close",-1),K=e("i",null,"closeButtonProps",-1),O=e("i",null,"aria-label",-1),R=e("h3",null,"Close Button Keyboard Support",-1),G=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Closes the message.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Closes the message.")])])])],-1);function H(a,r,d,f,n,u){const i=T,o=y;return l(),$(o,k({id:"accessibility",label:"Accessibility"},a.$attrs),{default:c(()=>[j,q,e("p",null,[t(" Close element is a "),z,t(" with an "),F,t(" that refers to the "),L,t(" property of the "),s(i,{to:"/configuration/#locale"},{default:c(()=>[t("locale")]),_:1}),t(" API by default, you may use "),K,t(" to customize the element and override the default "),O,t(". ")]),R,G]),_:1},16)}const U=g(N,[["render",H]]),J={data(){return{code:{basic:"<Message>Message Content</Message>",options:`<template>
    <div class="card">
        <Message>Message Content</Message>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Message>Message Content</Message>
    </div>
</template>

<script setup>
<\/script>`}}}},Q=e("p",null,"Message component requires a content to display.",-1),X={class:"card"};function Y(a,r,d,f,n,u){const i=y,o=b("Message"),p=h;return l(),m(_,null,[s(i,M(v(a.$attrs)),{default:c(()=>[Q]),_:1},16),e("div",X,[s(o,null,{default:c(()=>[t("Message Content")]),_:1})]),s(p,{code:n.code},null,8,["code"])],64)}const Z=g(J,[["render",Y]]),ee={data(){return{code:{basic:'<Message :closable="false">Message Content</Message>',options:`<template>
    <div class="card">
        <Message :closable="false">Message Content</Message>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Message :closable="false">Message Content</Message>
    </div>
</template>

<script setup>
<\/script>`}}}},se=e("p",null,[t("Messages are closable by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set "),e("i",null,"closable"),t(" to false.")],-1),te={class:"card"};function oe(a,r,d,f,n,u){const i=y,o=b("Message"),p=h;return l(),m(_,null,[s(i,M(v(a.$attrs)),{default:c(()=>[se]),_:1},16),e("div",te,[s(o,{closable:!1},{default:c(()=>[t("Message Content")]),_:1})]),s(p,{code:n.code},null,8,["code"])],64)}const ne=g(ee,[["render",oe]]),ae={data(){return{code:{basic:'<Message severity="info" icon="pi pi-send">Info Message Content</Message>',options:`<template>
    <div class="card">
        <Message severity="info" icon="pi pi-send">Info Message Content</Message>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Message severity="info" icon="pi pi-send">Info Message Content</Message>
    </div>
</template>

<script setup>
<\/script>`}}}},ce=e("p",null,[t("The "),e("i",null,"icon"),t(" property can change the icon of the message.")],-1),ie={class:"card"};function re(a,r,d,f,n,u){const i=y,o=b("Message"),p=h;return l(),m(_,null,[s(i,M(v(a.$attrs)),{default:c(()=>[ce]),_:1},16),e("div",ie,[s(o,{severity:"info",icon:"pi pi-send"},{default:c(()=>[t("Info Message Content")]),_:1})]),s(p,{code:n.code},null,8,["code"])],64)}const le=g(ae,[["render",re]]),de={data(){return{messages:[],count:0,code:{basic:`<Button label="Show" @click="addMessages()" />
<Button label="Clear" severity="secondary" class="ml-2" @click="clearMessages()" />
<transition-group name="p-message" tag="div">
    <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
</transition-group>`,options:`<template>
    <div class="card">
        <Button label="Show" @click="addMessages()" />
        <Button label="Clear" severity="secondary" class="ml-2" @click="clearMessages()" />
        <transition-group name="p-message" tag="div">
            <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [],
            count: 0
        };
    },
    methods: {
        addMessages() {
            this.messages = [
                { severity: 'info', content: 'Dynamic Info Message', id: this.count++ },
                { severity: 'success', content: 'Dynamic Success Message', id: this.count++ },
                { severity: 'warn', content: 'Dynamic Warning Message', id: this.count++ }
            ];
        },
        clearMessages() {
            this.messages = [];
        }
    }
};
}
<\/script>`,composition:`<template>
    <div class="card">
        <Button label="Show" @click="addMessages()" />
        <Button label="Clear" severity="secondary" class="ml-2" @click="clearMessages()" />
        <transition-group name="p-message" tag="div">
            <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
        </transition-group>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const messages = ref([]);
let count = ref(0);

const addMessages = () => {
    messages.value = [
        { severity: 'info', content: 'Dynamic Info Message', id: count.value++ },
        { severity: 'success', content: 'Dynamic Success Message', id: count.value++ },
        { severity: 'warn', content: 'Dynamic Warning Message', id: count.value++ }
    ];
};

const clearMessages = () => {
    messages.value = [];
};
<\/script>`}}},methods:{addMessages(){this.messages=[{severity:"info",content:"Dynamic Info Message",id:this.count++},{severity:"success",content:"Dynamic Success Message",id:this.count++},{severity:"warn",content:"Dynamic Warning Message",id:this.count++}]},clearMessages(){this.messages=[]}}},pe=e("p",null,"Multiple messages can be displayed using the standard v-for directive.",-1),ge={class:"card"};function ue(a,r,d,f,n,u){const i=y,o=b("Button"),p=b("Message"),x=h;return l(),m(_,null,[s(i,M(v(a.$attrs)),{default:c(()=>[pe]),_:1},16),e("div",ge,[s(o,{label:"Show",onClick:r[0]||(r[0]=C=>u.addMessages())}),s(o,{label:"Clear",severity:"secondary",class:"ml-2",onClick:r[1]||(r[1]=C=>u.clearMessages())}),s(B,{name:"p-message",tag:"div"},{default:c(()=>[(l(!0),m(_,null,I(n.messages,C=>(l(),$(p,{key:C.id,severity:C.severity},{default:c(()=>[t(w(C.content),1)]),_:2},1032,["severity"]))),128))]),_:1})]),s(x,{code:n.code},null,8,["code"])],64)}const me=g(de,[["render",ue]]),_e={data(){return{code:{basic:"import Message from 'primevue/message';"}}}};function fe(a,r,d,f,n,u){const i=y,o=h;return l(),m(_,null,[s(i,M(v(a.$attrs)),null,16),s(o,{code:n.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const ye=g(_e,[["render",fe]]),Me={data(){return{code:{basic:`<Message severity="success">Success Message Content</Message>
<Message severity="info">Info Message Content</Message>
<Message severity="warn">Warning Message Content</Message>
<Message severity="error">Error Message Content</Message>`,options:`<template>
    <div class="card">
        <Message severity="success">Success Message Content</Message>
        <Message severity="info">Info Message Content</Message>
        <Message severity="warn">Warning Message Content</Message>
        <Message severity="error">Error Message Content</Message>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Message severity="success">Success Message Content</Message>
        <Message severity="info">Info Message Content</Message>
        <Message severity="warn">Warning Message Content</Message>
        <Message severity="error">Error Message Content</Message>
    </div>
</template>

<script setup>
<\/script>`}}}},ve=e("p",null,[t("The "),e("i",null,"severity"),t(" option specifies the type of the message.")],-1),he={class:"card"};function be(a,r,d,f,n,u){const i=y,o=b("Message"),p=h;return l(),m(_,null,[s(i,M(v(a.$attrs)),{default:c(()=>[ve]),_:1},16),e("div",he,[s(o,{severity:"success"},{default:c(()=>[t("Success Message Content")]),_:1}),s(o,{severity:"info"},{default:c(()=>[t("Info Message Content")]),_:1}),s(o,{severity:"warn"},{default:c(()=>[t("Warning Message Content")]),_:1}),s(o,{severity:"error"},{default:c(()=>[t("Error Message Content")]),_:1})]),s(p,{code:n.code},null,8,["code"])],64)}const Ce=g(Me,[["render",be]]),$e={data(){return{code:{basic:`<Message severity="success" sticky>Success Message Content</Message>
<Message severity="info" sticky>Info Message Content</Message>
<Message severity="warn" sticky>Warning Message Content</Message>
<Message severity="error" sticky>Error Message Content</Message>`,options:`<template>
    <div class="card">
        <Message severity="success" sticky>Success Message Content</Message>
        <Message severity="info" sticky>Info Message Content</Message>
        <Message severity="warn" sticky>Warning Message Content</Message>
        <Message severity="error" sticky>Error Message Content</Message>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Message severity="success" sticky>Success Message Content</Message>
        <Message severity="info" sticky>Info Message Content</Message>
        <Message severity="warn" sticky>Warning Message Content</Message>
        <Message severity="error" sticky>Error Message Content</Message>
    </div>
</template>

<script setup>
<\/script>`}}}},we=e("p",null,[t(" Messages are sticky by default, if you require them to be cleared automatically, disable "),e("i",null,"sticky"),t(" property and optionally configure the "),e("i",null,"life"),t(" property to specify how long the message should be displayed which is 3000 ms by default. ")],-1),De={class:"card"};function Se(a,r,d,f,n,u){const i=y,o=b("Message"),p=h;return l(),m(_,null,[s(i,M(v(a.$attrs)),{default:c(()=>[we]),_:1},16),e("div",De,[s(o,{severity:"success",sticky:""},{default:c(()=>[t("Success Message Content")]),_:1}),s(o,{severity:"info",sticky:""},{default:c(()=>[t("Info Message Content")]),_:1}),s(o,{severity:"warn",sticky:""},{default:c(()=>[t("Warning Message Content")]),_:1}),s(o,{severity:"error",sticky:""},{default:c(()=>[t("Error Message Content")]),_:1})]),s(p,{code:n.code},null,8,["code"])],64)}const xe=g($e,[["render",Se]]),ke={data(){return{code:{basic:`<Message
    :style="{
        border: 'solid #696cff',
        borderWidth: '0 0 0 6px',
        color: '#696cff'
    }"
    class="border-primary w-full justify-content-start"
    severity="info"
>
    <div class="flex align-items-center">
        <img alt="logo" src="/images/logo.svg" width="20" />
        <div class="ml-2">Always bet on Prime.</div>
    </div>
</Message>`,options:`<template>
    <div class="card">
        <Message
            :style="{
                border: 'solid #696cff',
                borderWidth: '0 0 0 6px',
                color: '#696cff'
            }"
            class="border-primary w-full justify-content-start"
            severity="info"
        >
            <div class="flex align-items-center">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" width="20" />
                <div class="ml-2">Always bet on Prime.</div>
            </div>
        </Message>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Message
            :style="{
                border: 'solid #696cff',
                borderWidth: '0 0 0 6px',
                color: '#696cff'
            }"
            class="border-primary w-full justify-content-start"
            severity="info"
        >
            <div class="flex align-items-center">
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/logo.svg" width="20" />
                <div class="ml-2">Always bet on Prime.</div>
            </div>
        </Message>
    </div>
</template>

<script setup>
<\/script>`}}}},Te=e("p",null,[t("Custom content inside a message is defined with the "),e("i",null,"default"),t(" slot.")],-1),Ie={class:"card"},Be=e("div",{class:"flex align-items-center"},[e("img",{alt:"logo",src:"https://primefaces.org/cdn/primevue/images/logo.svg",width:"20"}),e("div",{class:"ml-2"},"Always bet on Prime.")],-1);function Pe(a,r,d,f,n,u){const i=y,o=b("Message"),p=h;return l(),m(_,null,[s(i,M(v(a.$attrs)),{default:c(()=>[Te]),_:1},16),e("div",Ie,[s(o,{style:{border:"solid #696cff",borderWidth:"0 0 0 6px",color:"#696cff"},class:"border-primary w-full justify-content-start",severity:"info"},{default:c(()=>[Be]),_:1})]),s(p,{code:n.code},null,8,["code"])],64)}const We=g(ke,[["render",Pe]]),Ae={data(){return{code:{basic:`<Message
    :pt="{
        root: { class: 'bg-yellow-100' }
    }"
>
    Message Content
</Message>`,options:`<template>
    <div class="card">
        <Message
            :pt="{
                root: { class: 'bg-yellow-100' }
            }"
        >
            Message Content
        </Message>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Message
            :pt="{
                root: { class: 'bg-yellow-100' }
            }"
        >
            Message Content
        </Message>
    </div>
</template>

<script setup>
<\/script>`}}}},Ee={class:"card"};function Ve(a,r,d,f,n,u){const i=y,o=b("Message"),p=h;return l(),m(_,null,[s(i,M(v(a.$attrs)),null,16),e("div",Ee,[s(o,{pt:{root:{class:"bg-yellow-100"}}},{default:c(()=>[t(" Message Content ")]),_:1})]),s(p,{code:n.code},null,8,["code"])],64)}const Ne=g(Ae,[["render",Ve]]),je={},qe=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/message.jpg"})],-1);function ze(a,r){const d=y;return l(),m(_,null,[s(d,M(v(a.$attrs)),{default:c(()=>[e("p",null,w(a.$attrs.description),1)]),_:1},16),qe],64)}const Fe=g(je,[["render",ze]]),Le={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Fe},{id:"pt.doc.message",label:"Message PT Options",component:P,data:E("Message")},{id:"pt.demo",label:"Demo",component:Ne}]}}},Ke={class:"doc-main"},Oe=e("div",{class:"doc-intro"},[e("h1",null,"Message Pass Through")],-1);function Re(a,r,d,f,n,u){const i=D,o=S;return l(),m(_,null,[e("div",Ke,[Oe,s(i,{docs:n.docs},null,8,["docs"])]),s(o,{docs:n.docs},null,8,["docs"])],64)}const Ge=g(Le,[["render",Re]]),He={},Ue=e("p",null,"List of class names used in the styled mode.",-1),Je=W('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-message</td><td>Container element.</td></tr><tr><td>p-message-info</td><td>Container element when displaying info messages.</td></tr><tr><td>p-message-warn</td><td>Container element when displaying warning messages.</td></tr><tr><td>p-message-error</td><td>Container element when displaying error messages.</td></tr><tr><td>p-message-success</td><td>Container element when displaying success messages.</td></tr><tr><td>p-message-close</td><td>Close icon.</td></tr><tr><td>p-message-icon</td><td>Severity icon.</td></tr><tr><td>p-message-text</td><td>Content of a message.</td></tr></tbody></table></div>',1);function Qe(a,r){const d=y;return l(),m(_,null,[s(d,M(v(a.$attrs)),{default:c(()=>[Ue]),_:1},16),Je],64)}const Xe=g(He,[["render",Qe]]),Ye={data(){return{code1:{basic:`
export default {
    message: {
        root: ({ props }) => ({
            class: [
                'my-4 rounded-md',
                {
                    'bg-blue-100 border-solid border-0 border-l-4 border-blue-500 text-blue-700': props.severity == 'info',
                    'bg-green-100 border-solid border-0 border-l-4 border-green-500 text-green-700': props.severity == 'success',
                    'bg-orange-100 border-solid border-0 border-l-4 border-orange-500 text-orange-700': props.severity == 'warn',
                    'bg-red-100 border-solid border-0 border-l-4 border-red-500 text-red-700': props.severity == 'error'
                }
            ]
        }),
        wrapper: 'flex items-center py-5 px-7',
        icon: {
            class: ['w-6 h-6', 'text-lg mr-2']
        },
        text: 'text-base font-normal',
        button: {
            class: ['w-8 h-8 rounded-full bg-transparent transition duration-200 ease-in-out', 'ml-auto overflow-hidden relative', 'flex items-center justify-center', 'hover:bg-white/30']
        },
        transition: {
            enterFromClass: 'opacity-0',
            enterActiveClass: 'transition-opacity duration-300',
            leaveFromClass: 'max-h-40',
            leaveActiveClass: 'overflow-hidden transition-all duration-300 ease-in',
            leaveToClass: 'max-h-0 opacity-0 !m-0'
        }
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Message severity="success">Success Message Content</Message>
        <Message severity="info">Info Message Content</Message>
        <Message severity="warn">Warning Message Content</Message>
        <Message severity="error">Error Message Content</Message>
    </div>
</template>

<script setup>
<\/script>`}}}},Ze=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function es(a,r,d,f,n,u){const i=V,o=h,p=y;return l(),$(p,M(v(a.$attrs)),{default:c(()=>[e("p",null,[t(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),s(i,{to:"/tailwind"},{default:c(()=>[t("Tailwind Customization")]),_:1}),t(" section for an example. ")]),s(o,{code:n.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ze,s(o,{code:n.code2,embedded:""},null,8,["code"])]),_:1},16)}const ss=g(Ye,[["render",es]]),ts={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Xe},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ss}]}]}}},os={class:"doc-main"},ns=e("div",{class:"doc-intro"},[e("h1",null,"Message Theming")],-1);function as(a,r,d,f,n,u){const i=D,o=S;return l(),m(_,null,[e("div",os,[ns,s(i,{docs:n.docs},null,8,["docs"])]),s(o,{docs:n.docs},null,8,["docs"])],64)}const cs=g(ts,[["render",as]]),is={data(){return{docs:[{id:"import",label:"Import",component:ye},{id:"basic",label:"Basic",component:Z},{id:"severity",label:"Severity",component:Ce},{id:"dynamic",label:"Dynamic",component:me},{id:"closable",label:"Closable",component:ne},{id:"sticky",label:"Sticky",component:xe},{id:"custom-icon",label:"Custom Icon",component:le},{id:"template",label:"Template",component:We},{id:"accessibility",label:"Accessibility",component:U}],ptComponent:Ge,themingDoc:cs}}};function rs(a,r,d,f,n,u){const i=A;return l(),$(i,{title:"Vue Message Component",header:"Message",description:"Message component is used to display inline messages.",componentDocs:n.docs,apiDocs:["Message"],ptTabComponent:n.ptComponent,themingDocs:n.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const gs=g(is,[["render",rs]]);export{gs as default};
