import{_ as i,o as l,e as $,w as g,m as w,b as e,f as r,h as p,a3 as h,j as S,c as u,a as s,n as x,g as v,F as _,p as T,s as I,u as M,t as H,D as P,k as y,l as k,v as C,x as V}from"./entry.68beb385.js";import{g as U}from"./PTHelper.11558b27.js";import{_ as B}from"./PrimeVueNuxtLink.f51d0c80.js";const E={},W=e("h3",null,"Screen Reader",-1),O=e("p",null,[r("Terminal component has an input element that can be described with "),e("i",null,"aria-label"),r(" or "),e("i",null,"aria-labelledby"),r(" props. The element that lists the previous commands has "),e("i",null,"aria-live"),r(" so that changes are received by the screen reader.")],-1),N=e("h3",null,"Keyboard Support",-1),A=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus through the input element.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Executes the command when focus in on the input element.")])])])],-1);function z(t,n){const o=p;return l(),$(o,w({id:"accessibility",label:"Accessibility"},t.$attrs),{default:g(()=>[W,O,N,A]),_:1},16)}const F=i(E,[["render",z]]);const j={data(){return{code:{basic:'<Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" />',options:`<template>
    <div>
        <p>Enter "date" to display the current date, "greet {0}" for a message and "random" to get a random number.</p>
        <Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" class="dark-demo-terminal" aria-label="PrimeVue Terminal Service" />
    </div>
</template>

<script>
import TerminalService from "primevue/terminalservice";

export default {
    methods: {
        commandHandler(text) {
            let response;
            let argsIndex = text.indexOf(' ');
            let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

            switch(command) {
                case "date":
                    response = 'Today is ' + new Date().toDateString();
                    break;

                case "greet":
                    response = 'Hola ' + text.substring(argsIndex + 1);
                    break;

                case "random":
                    response = Math.floor(Math.random() * 100);
                    break;

                default:
                    response = "Unknown command: " + command;
            }
            
            TerminalService.emit('response', response);
        }
    },
    mounted() {
        TerminalService.on('command', this.commandHandler);
    },
    beforeUnmount() {
        TerminalService.off('command', this.commandHandler);
    }
}
<\/script>
<style scoped>
p {
    margin-top: 0;
}
::v-deep(.dark-demo-terminal) {
    background-color: #212121;
    color: #ffffff;
}

::v-deep(.dark-demo-terminal .p-terminal-command) {
    color: #80cbc4;
}

::v-deep(.dark-demo-terminal .p-terminal-prompt) {
    color: #ffd54f;
}

::v-deep(.dark-demo-terminal .p-terminal-response) {
    color: #9fa8da;
}
</style>`,composition:`<template>
    <div>
        <p>Enter "date" to display the current date, "greet {0}" for a message and "random" to get a random number.</p>
        <Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" class="dark-demo-terminal" aria-label="PrimeVue Terminal Service" />
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import TerminalService from "primevue/terminalservice";

onMounted(() => {
    TerminalService.on('command', commandHandler);
})

onBeforeUnmount(() => {
    TerminalService.off('command', commandHandler);
})

const commandHandler = (text) => {
    let response;
    let argsIndex = text.indexOf(' ');
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch(command) {
        case "date":
            response = 'Today is ' + new Date().toDateString();
            break;

        case "greet":
            response = 'Hola ' + text.substring(argsIndex + 1);
            break;

        case "random":
            response = Math.floor(Math.random() * 100);
            break;

        default:
            response = "Unknown command: " + command;
    }
    
    TerminalService.emit('response', response);
}
<\/script>

<style scoped>
p {
    margin-top: 0;
}
::v-deep(.dark-demo-terminal) {
    background-color: #212121;
    color: #ffffff;
}

::v-deep(.dark-demo-terminal .p-terminal-command) {
    color: #80cbc4;
}

::v-deep(.dark-demo-terminal .p-terminal-prompt) {
    color: #ffd54f;
}

::v-deep(.dark-demo-terminal .p-terminal-response) {
    color: #9fa8da;
}
</style>`}}},mounted(){h.on("command",this.commandHandler)},beforeUnmount(){h.off("command",this.commandHandler)},methods:{commandHandler(t){let n,o=t.indexOf(" "),m=o!==-1?t.substring(0,o):t;switch(m){case"date":n="Today is "+new Date().toDateString();break;case"greet":n="Hola "+t.substring(o+1);break;case"random":n=Math.floor(Math.random()*100);break;default:n="Unknown command: "+m}h.emit("response",n)}}},D=t=>(I("data-v-584ffb84"),t=t(),M(),t),K=D(()=>e("p",null,[r(" Commands are processed using an EventBus implementation called "),e("i",null,"TerminalService"),r(". Import this service into your component and subscribe to the "),e("i",null,"command"),r(" event to process the commands by sending replies with the "),e("i",null,"response"),r(" event. ")],-1)),L={class:"card"},R=D(()=>e("p",null,[r('Enter "'),e("strong",null,"date"),r('" to display the current date, "'),e("strong",null,"greet {0}"),r('" for a message and "'),e("strong",null,"random"),r('" to get a random number.')],-1));function q(t,n,o,m,a,f){const c=p,d=S("Terminal"),b=T;return l(),u(_,null,[s(c,x(v(t.$attrs)),{default:g(()=>[K]),_:1},16),e("div",L,[R,s(d,{welcomeMessage:"Welcome to PrimeVue",prompt:"primevue $",class:"dark-demo-terminal","aria-label":"PrimeVue Terminal Service"})]),s(b,{code:a.code},null,8,["code"])],64)}const G=i(j,[["render",q],["__scopeId","data-v-584ffb84"]]),J={data(){return{code:{basic:`import Terminal from 'primevue/terminal';
import TerminalService from 'primevue/terminalservice'`}}}};function Q(t,n,o,m,a,f){const c=p,d=T;return l(),u(_,null,[s(c,x(v(t.$attrs)),null,16),s(d,{code:a.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const X=i(J,[["render",Q]]),Y={data(){return{code:{basic:`<Terminal
    welcomeMessage="Welcome to PrimeVue"
    prompt="primevue $"
    :pt="{
        root: { class: 'surface-900 text-white' },
        command: { class: 'text-blue-500' },
        prompt: { class: 'text-yellow-500' },
        response: { class: 'text-purple-500' }
    }"
/>`,options:`<template>
    <div>
        <p>Enter "date" to display the current date, "greet {0}" for a message and "random" to get a random number.</p>
        <Terminal
            welcomeMessage="Welcome to PrimeVue"
            prompt="primevue $"
            :pt="{
                root: { class: 'surface-900 text-white' },
                command: { class: 'text-blue-500' },
                prompt: { class: 'text-yellow-500' },
                response: { class: 'text-purple-500' }
            }"
        />
    </div>
</template>

<script>
import TerminalService from "primevue/terminalservice";

export default {
    methods: {
        commandHandler(text) {
            let response;
            let argsIndex = text.indexOf(' ');
            let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

            switch(command) {
                case "date":
                    response = 'Today is ' + new Date().toDateString();
                    break;

                case "greet":
                    response = 'Hola ' + text.substring(argsIndex + 1);
                    break;

                case "random":
                    response = Math.floor(Math.random() * 100);
                    break;

                default:
                    response = "Unknown command: " + command;
            }
            
            TerminalService.emit('response', response);
        }
    },
    mounted() {
        TerminalService.on('command', this.commandHandler);
    },
    beforeUnmount() {
        TerminalService.off('command', this.commandHandler);
    }
}
<\/script>`,composition:`<template>
    <div>
        <p>Enter "date" to display the current date, "greet {0}" for a message and "random" to get a random number.</p>
        <Terminal
            welcomeMessage="Welcome to PrimeVue"
            prompt="primevue $"
            :pt="{
                root: { class: 'surface-900 text-white' },
                command: { class: 'text-blue-500' },
                prompt: { class: 'text-yellow-500' },
                response: { class: 'text-purple-500' }
            }"
        />
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import TerminalService from "primevue/terminalservice";

onMounted(() => {
    TerminalService.on('command', commandHandler);
})

onBeforeUnmount(() => {
    TerminalService.off('command', commandHandler);
})

const commandHandler = (text) => {
    let response;
    let argsIndex = text.indexOf(' ');
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch(command) {
        case "date":
            response = 'Today is ' + new Date().toDateString();
            break;

        case "greet":
            response = 'Hola ' + text.substring(argsIndex + 1);
            break;

        case "random":
            response = Math.floor(Math.random() * 100);
            break;

        default:
            response = "Unknown command: " + command;
    }
    
    TerminalService.emit('response', response);
}
<\/script>`}}},mounted(){h.on("command",this.commandHandler)},beforeUnmount(){h.off("command",this.commandHandler)},methods:{commandHandler(t){let n,o=t.indexOf(" "),m=o!==-1?t.substring(0,o):t;switch(m){case"date":n="Today is "+new Date().toDateString();break;case"greet":n="Hola "+t.substring(o+1);break;case"random":n=Math.floor(Math.random()*100);break;default:n="Unknown command: "+m}h.emit("response",n)}}},Z={class:"card"},ee=e("p",null,[r('Enter "'),e("strong",null,"date"),r('" to display the current date, "'),e("strong",null,"greet {0}"),r('" for a message and "'),e("strong",null,"random"),r('" to get a random number.')],-1);function te(t,n,o,m,a,f){const c=p,d=S("Terminal"),b=T;return l(),u(_,null,[s(c,w(t.$attrs,{level:2}),null,16),e("div",Z,[ee,s(d,{welcomeMessage:"Welcome to PrimeVue",prompt:"primevue $",pt:{root:{class:"surface-900 text-white"},command:{class:"text-blue-500"},prompt:{class:"text-yellow-500"},response:{class:"text-purple-500"}}})]),s(b,{code:a.code},null,8,["code"])],64)}const ne=i(Y,[["render",te]]),oe={},re=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/terminal.jpg"})],-1);function ae(t,n){const o=p;return l(),u(_,null,[s(o,x(v(t.$attrs)),{default:g(()=>[e("p",null,H(t.$attrs.description),1)]),_:1},16),re],64)}const se=i(oe,[["render",ae]]),ce={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:se},{id:"pt.doc.terminal",label:"Terminal PT Options",component:P,data:U("Terminal")},{id:"pt.demo",label:"Demo",component:ne}]}}},me={class:"doc-main"},de=e("div",{class:"doc-intro"},[e("h1",null,"Terminal Pass Through")],-1);function ie(t,n,o,m,a,f){const c=y,d=k;return l(),u(_,null,[e("div",me,[de,s(c,{docs:a.docs},null,8,["docs"])]),s(d,{docs:a.docs},null,8,["docs"])],64)}const le=i(ce,[["render",ie]]),pe={},ue=e("p",null,"List of class names used in the styled mode.",-1),_e=C('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-terminal</td><td>Container element.</td></tr><tr><td>p-terminal-content</td><td>Content of terminal.</td></tr><tr><td>p-terminal-prompt</td><td>Prompt text.</td></tr><tr><td>p-terminal-response</td><td>Command response.</td></tr><tr><td>p-terminal-input</td><td>Input element to enter commands.</td></tr></tbody></table></div>',1);function fe(t,n){const o=p;return l(),u(_,null,[s(o,x(v(t.$attrs)),{default:g(()=>[ue]),_:1},16),_e],64)}const he=i(pe,[["render",fe]]),ge={data(){return{code1:{basic:`
export default {
    terminal: {
        root: {
            class: ['border border-gray-300 p-5', 'bg-gray-900 text-white dark:border-blue-900/40 ', 'h-72 overflow-auto']
        },
        container: 'flex items-center',
        prompt: 'text-yellow-400',
        commandtext: 'flex-1 shrink grow-0 border-0 bg-transparent text-inherit p-0 outline-none'
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <p class="text-gray-700 dark:text-white/80">Enter "date" to display the current date, "greet {0}" for a message and "random" to get a random number.</p>
        <Terminal welcomeMessage="Welcome to PrimeVue" prompt="primevue $" class="dark-demo-terminal" aria-label="PrimeVue Terminal Service" />
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import TerminalService from "primevue/terminalservice";

onMounted(() => {
    TerminalService.on('command', commandHandler);
})

onBeforeUnmount(() => {
    TerminalService.off('command', commandHandler);
})

const commandHandler = (text) => {
    let response;
    let argsIndex = text.indexOf(' ');
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch(command) {
        case "date":
            response = 'Today is ' + new Date().toDateString();
            break;

        case "greet":
            response = 'Hola ' + text.substring(argsIndex + 1);
            break;

        case "random":
            response = Math.floor(Math.random() * 100);
            break;

        default:
            response = "Unknown command: " + command;
    }
    
    TerminalService.emit('response', response);
}
<\/script>`}}}},be=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function xe(t,n,o,m,a,f){const c=B,d=T,b=p;return l(),$(b,x(v(t.$attrs)),{default:g(()=>[e("p",null,[r(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),s(c,{to:"/tailwind"},{default:g(()=>[r("Tailwind Customization")]),_:1}),r(" section for an example. ")]),s(d,{code:a.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),be,s(d,{code:a.code2,embedded:""},null,8,["code"])]),_:1},16)}const ve=i(ge,[["render",xe]]),Te={data(){return{docs:[{id:"theming.styled",label:"Styled",component:he},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ve}]}]}}},$e={class:"doc-main"},we=e("div",{class:"doc-intro"},[e("h1",null,"Terminal Theming")],-1);function Se(t,n,o,m,a,f){const c=y,d=k;return l(),u(_,null,[e("div",$e,[we,s(c,{docs:a.docs},null,8,["docs"])]),s(d,{docs:a.docs},null,8,["docs"])],64)}const ye=i(Te,[["render",Se]]),ke={data(){return{docs:[{id:"import",label:"Import",component:X},{id:"basic",label:"Basic",component:G},{id:"accessibility",label:"Accessibility",component:F}],ptComponent:le,themingDoc:ye}}};function De(t,n,o,m,a,f){const c=V;return l(),$(c,{title:"Vue Terminal Component",header:"Terminal",description:"Terminal is a text based user interface.",componentDocs:a.docs,apiDocs:["Terminal","TerminalService"],ptTabComponent:a.ptComponent,themingDocs:a.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Pe=i(ke,[["render",De]]);export{Pe as default};
