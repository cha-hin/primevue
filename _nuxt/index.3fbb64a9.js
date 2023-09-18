import{_ as m,o as c,e as $,w as l,m as M,b as e,f as a,h as f,a3 as I,j as b,r as U,c as u,a as s,n as _,g as w,i as j,F as v,p as T,s as P,u as C,q as L,t as F,D as O,k as E,l as A,v as H,x as G}from"./entry.68beb385.js";import{N as W}from"./NodeService.f4763055.js";import{P as q}from"./PhotoService.94ee156a.js";import{g as J}from"./PTHelper.11558b27.js";import{_ as Q}from"./PrimeVueNuxtLink.f51d0c80.js";const K={},X=e("h3",null,"Screen Reader",-1),Y=e("p",null,[a(" Dock component uses the "),e("i",null,"menu"),a(" role with the "),e("i",null,"aria-orientation"),a(" and the value to describe the menu can either be provided with "),e("i",null,"aria-labelledby"),a(" or "),e("i",null,"aria-label"),a(" props. Each list item has a "),e("i",null,"menuitem"),a(" role with "),e("i",null,"aria-label"),a(" referring to the label of the item and "),e("i",null,"aria-disabled"),a(" defined if the item is disabled. ")],-1),Z=e("h3",null,"Keyboard Support",-1),ee=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the first menuitem.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Activates the focused menuitem.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Activates the focused menuitem.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next menuitem in vertical layout.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous menuitem in vertical layout.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Moves focus to the next menuitem in horizontal layout.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Moves focus to the previous menuitem in horizontal layout.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first menuitem.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last menuitem.")])])])],-1);function ie(i,o){const n=f;return c(),$(n,M({id:"accessibility",label:"Accessibility"},i.$attrs),{default:l(()=>[X,Y,Z,ee]),_:1},16)}const te=m(K,[["render",ie]]);const oe={data(){return{displayFinder:!1,displayTerminal:!1,displayPhotos:!1,images:null,nodes:null,items:[{label:"Finder",icon:"https://primefaces.org/cdn/primevue/images/dock/finder.svg",command:()=>{this.displayFinder=!0}},{label:"Terminal",icon:"https://primefaces.org/cdn/primevue/images/dock/terminal.svg",command:()=>{this.displayTerminal=!0}},{label:"App Store",icon:"https://primefaces.org/cdn/primevue/images/dock/appstore.svg",command:()=>{this.$toast.add({severity:"error",summary:"An unexpected error occurred while signing in.",detail:"UNTRUSTED_CERT_TITLE",group:"tc",life:3e3})}},{label:"Safari",icon:"https://primefaces.org/cdn/primevue/images/dock/safari.svg",command:()=>{this.$toast.add({severity:"warn",summary:"Safari has stopped working",group:"tc",life:3e3})}},{label:"Photos",icon:"https://primefaces.org/cdn/primevue/images/dock/photos.svg",command:()=>{this.displayPhotos=!0}},{label:"GitHub",icon:"https://primefaces.org/cdn/primevue/images/dock/github.svg"},{label:"Trash",icon:"https://primefaces.org/cdn/primevue/images/dock/trash.png",command:()=>{this.$toast.add({severity:"info",summary:"Empty Trash",life:3e3})}}],menubarItems:[{label:"Finder",class:"menubar-root"},{label:"File",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit"}],responsiveOptions:[{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],code:{basic:`<Dock :model="items">
    <template #item="{ item }">
        <a v-tooltip.top="item.label" href="#" class="p-dock-link" @click="onDockItemClick($event, item)">
            <img :alt="item.label" :src="item.icon" style="width: 100%" />
        </a>
    </template>
</Dock>`,options:`<template>
    <div class="card dock-demo">
        <Toast position="top-center" group="tc" />
        <Menubar :model="menubarItems">
            <template #start>
                <i class="pi pi-apple px-3"></i>
            </template>
            <template #end>
                <i class="pi pi-video px-3" />
                <i class="pi pi-wifi px-3" />
                <i class="pi pi-volume-up px-3" />
                <span class="px-3">Fri 13:07</span>
                <i class="pi pi-search px-3" />
                <i class="pi pi-bars px-3" />
            </template>
        </Menubar>
    
        <div class="dock-window dock-advanced">
            <Dock :model="items">
                <template #item="{ item }">
                    <a v-tooltip.top="item.label" href="#" class="p-dock-link" @click="onDockItemClick($event, item)">
                        <img :alt="item.label" :src="item.icon" style="width: 100%" />
                    </a>
                </template>
            </Dock>
    
            <Dialog v-model:visible="displayTerminal" header="Terminal" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true">
                <Terminal welcomeMessage="Welcome to PrimeVue(cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primevue $" />
            </Dialog>
    
            <Dialog v-model:visible="displayFinder" header="Finder" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true">
                <Tree :value="nodes" />
            </Dialog>
    
            <Galleria v-model:visible="displayPhotos" :value="images" :responsiveOptions="responsiveOptions" :numVisible="2" containerStyle="width: 400px" :circular="true" :fullScreen="true" :showThumbnails="false" :showItemNavigators="true">
                <template #item="slotProps">
                    <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
                </template>
            </Galleria>
        </div>
    </div>
</template>

<script>
import TerminalService from 'primevue/terminalservice';
import { NodeService } from '@/service/NodeService';
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            displayFinder: false,
            displayTerminal: false,
            displayPhotos: false,
            images: null,
            nodes: null,
            items: [
                {
                    label: 'Finder',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg',
                    command: () => {
                        this.displayFinder = true;
                    }
                },
                {
                    label: 'Terminal',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/terminal.svg',
                    command: () => {
                        this.displayTerminal = true;
                    }
                },
                {
                    label: 'App Store',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg',
                    command: () => {
                        this.$toast.add({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE', group: 'tc', life: 3000 });
                    }
                },
                {
                    label: 'Safari',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/safari.svg',
                    command: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Safari has stopped working', group: 'tc', life: 3000 });
                    }
                },
                {
                    label: 'Photos',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg',
                    command: () => {
                        this.displayPhotos = true;
                    }
                },
                {
                    label: 'GitHub',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/github.svg'
                },
                {
                    label: 'Trash',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png',
                    command: () => {
                        this.$toast.add({ severity: 'info', summary: 'Empty Trash', life: 3000 });
                    }
                }
            ],
            menubarItems: [
                {
                    label: 'Finder',
                    class: 'menubar-root'
                },
                {
                    label: 'File',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-plus',
                            items: [
                                {
                                    label: 'Bookmark',
                                    icon: 'pi pi-fw pi-bookmark'
                                },
                                {
                                    label: 'Video',
                                    icon: 'pi pi-fw pi-video'
                                }
                            ]
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-trash'
                        },
                        {
                            separator: true
                        },
                        {
                            label: 'Export',
                            icon: 'pi pi-fw pi-external-link'
                        }
                    ]
                },
                {
                    label: 'Edit',
                    items: [
                        {
                            label: 'Left',
                            icon: 'pi pi-fw pi-align-left'
                        },
                        {
                            label: 'Right',
                            icon: 'pi pi-fw pi-align-right'
                        },
                        {
                            label: 'Center',
                            icon: 'pi pi-fw pi-align-center'
                        },
                        {
                            label: 'Justify',
                            icon: 'pi pi-fw pi-align-justify'
                        }
                    ]
                },
                {
                    label: 'Users',
                    items: [
                        {
                            label: 'New',
                            icon: 'pi pi-fw pi-user-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-user-minus'
                        },
                        {
                            label: 'Search',
                            icon: 'pi pi-fw pi-users',
                            items: [
                                {
                                    label: 'Filter',
                                    icon: 'pi pi-fw pi-filter',
                                    items: [
                                        {
                                            label: 'Print',
                                            icon: 'pi pi-fw pi-print'
                                        }
                                    ]
                                },
                                {
                                    icon: 'pi pi-fw pi-bars',
                                    label: 'List'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Events',
                    items: [
                        {
                            label: 'Edit',
                            icon: 'pi pi-fw pi-pencil',
                            items: [
                                {
                                    label: 'Save',
                                    icon: 'pi pi-fw pi-calendar-plus'
                                },
                                {
                                    label: 'Delete',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        },
                        {
                            label: 'Archieve',
                            icon: 'pi pi-fw pi-calendar-times',
                            items: [
                                {
                                    label: 'Remove',
                                    icon: 'pi pi-fw pi-calendar-minus'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Quit'
                }
            ],
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 3
                },
                {
                    breakpoint: '768px',
                    numVisible: 2
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
        NodeService.getTreeNodes().then((data) => (this.nodes = data));
        TerminalService.on('command', this.commandHandler);
    },
    beforeUnmount() {
        TerminalService.off('command', this.commandHandler);
    },
    methods: {
        onDockItemClick(event, item) {
            if (item.command) {
                item.command();
            }

            event.preventDefault();
        },
        commandHandler(text) {
            let response;
            let argsIndex = text.indexOf(' ');
            let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

            switch (command) {
                case 'date':
                    response = 'Today is ' + new Date().toDateString();
                    break;

                case 'greet':
                    response = 'Hola ' + text.substring(argsIndex + 1);
                    break;

                case 'random':
                    response = Math.floor(Math.random() * 100);
                    break;

                default:
                    response = 'Unknown command: ' + command;
            }

            TerminalService.emit('response', response);
        }
    }
};
<\/script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}

.dock-demo > .p-dock {
    z-index: 1000;
}

.dock-demo .p-menubar {
    padding: 0;
    border-radius: 0;
}
</style>`,composition:`<template>
    <div>
        <div class="card dock-demo">
            <Toast position="top-center" group="tc" />
            
            <div class="dock-window dock-advanced">
                <Dock :model="items">
                    <template #item="{ item }">
                        <a href="#" class="p-dock-link" v-tooltip.top="item.label" @click="onDockItemClick($event, item)">
                            <img :alt="item.label" :src="item.icon" style="width: 100%" />
                        </a>
                    </template>
                </Dock>

                <Dialog v-model:visible="displayTerminal" header="Terminal" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true">
                    <Terminal welcomeMessage="Welcome to PrimeVue(cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primevue $" />
                </Dialog>

                <Dialog v-model:visible="displayFinder" header="Finder" :breakpoints="{ '960px': '50vw' }" :style="{ width: '40vw' }" :maximizable="true">
                    <Tree :value="nodes" />
                </Dialog>

                <Galleria v-model:visible="displayPhotos" :value="images" :responsiveOptions="responsiveOptions" :numVisible="2" containerStyle="width: 400px"
                    :circular="true" :fullScreen="true" :showThumbnails="false" :showItemNavigators="true">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
                    </template>
                </Galleria>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useToast } from 'primevue/usetoast';
import TerminalService from 'primevue/terminalservice';
import { NodeService } from '@/service/NodeService';
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then(data => images.value = data);
    NodeService.getTreeNodes().then(data => nodes.value = data);
    TerminalService.on('command', commandHandler);
})

onBeforeUnmount(() => {
    TerminalService.off('command', commandHandler);
})

const displayFinder = ref(false);
const displayTerminal = ref(false);
const displayPhotos = ref(false);
const images = ref();
const nodes = ref();
const toast = useToast();
const items = ref([
    {
        label: 'Finder',
        icon: "https://primefaces.org/cdn/primevue//images/dock/finder.svg",
        command: () => {
            displayFinder.value = true;
        }
    },
    {
        label: 'Terminal',
        icon: "https://primefaces.org/cdn/primevue//images/dock/terminal.svg",
        command: () => {
            displayTerminal.value = true;
        }
    },
    {
        label: 'App Store',
        icon: "https://primefaces.org/cdn/primevue//images/dock/appstore.svg",
        command: () => {
            toast.add({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE', group: 'tc', life: 3000 });
        }
    },
    {
        label: 'Safari',
        icon: "https://primefaces.org/cdn/primevue//images/dock/safari.svg",
        command: () => {
            toast.add({ severity: 'warn', summary: 'Safari has stopped working', group: 'tc', life: 3000 });
        }
    },
    {
        label: 'Photos',
        icon: "https://primefaces.org/cdn/primevue//images/dock/photos.svg",
        command: () => {
            displayPhotos.value = true;
        }
    },
    {
        label: 'GitHub',
        icon: "https://primefaces.org/cdn/primevue//images/dock/github.svg",
    },
    {
        label: 'Trash',
        icon: "https://primefaces.org/cdn/primevue//images/dock/trash.png",
        command: () => {
            toast.add({ severity: 'info', summary: 'Empty Trash', life: 3000 });
        }
    }
]);
const menubarItems = ref([
    {
        label: 'Finder',
        class: 'menubar-root'
    },
    {
        label: 'File',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    },

                ]
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label: 'Edit',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            },

        ]
    },
    {
        label: 'Users',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus',
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-user-minus',

            },
            {
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                            {
                                label: 'Print',
                                icon: 'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                    }
                ]
            }
        ]
    },
    {
        label: 'Events',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archieve',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    },
    {
        label: 'Quit'
    }
]);
const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);

const onDockItemClick = (event, item) => {
    if (item.command) {
        item.command();
    }

    event.preventDefault();
};

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
};
<\/script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}

.dock-demo > .p-dock {
    z-index: 1000;
}

.dock-demo .p-menubar {
    padding: 0;
    border-radius: 0;
}
</style>`}}},mounted(){q.getImages().then(i=>this.images=i),W.getTreeNodes().then(i=>this.nodes=i),I.on("command",this.commandHandler)},beforeUnmount(){I.off("command",this.commandHandler)},methods:{onDockItemClick(i,o){o.command&&o.command(),i.preventDefault()},commandHandler(i){let o,n=i.indexOf(" "),g=n!==-1?i.substring(0,n):i;switch(g){case"date":o="Today is "+new Date().toDateString();break;case"greet":o="Hola "+i.substring(n+1);break;case"random":o=Math.floor(Math.random()*100);break;default:o="Unknown command: "+g}I.emit("response",o)}}},x=i=>(P("data-v-49d240fc"),i=i(),C(),i),se=x(()=>e("p",null,"A sample macOS implementation using various components.",-1)),ne={class:"card dock-demo"},ae=x(()=>e("i",{class:"pi pi-apple px-3"},null,-1)),le=x(()=>e("i",{class:"pi pi-video px-3"},null,-1)),re=x(()=>e("i",{class:"pi pi-wifi px-3"},null,-1)),ce=x(()=>e("i",{class:"pi pi-volume-up px-3"},null,-1)),pe=x(()=>e("span",{class:"px-3"},"Fri 13:07",-1)),de=x(()=>e("i",{class:"pi pi-search px-3"},null,-1)),me=x(()=>e("i",{class:"pi pi-bars px-3"},null,-1)),ue={class:"dock-window dock-advanced"},ge=["onClick"],he=["alt","src"],be=["src","alt"];function ve(i,o,n,g,t,k){const r=f,p=b("Toast"),y=b("Menubar"),D=b("Dock"),h=b("Terminal"),S=b("Dialog"),z=b("Tree"),N=b("Galleria"),B=T,R=U("tooltip");return c(),u(v,null,[s(r,_(w(i.$attrs)),{default:l(()=>[se]),_:1},16),e("div",ne,[s(p,{position:"top-center",group:"tc"}),s(y,{model:t.menubarItems},{start:l(()=>[ae]),end:l(()=>[le,re,ce,pe,de,me]),_:1},8,["model"]),e("div",ue,[s(D,{model:t.items},{item:l(({item:d})=>[j((c(),u("a",{href:"#",class:"p-dock-link",onClick:V=>k.onDockItemClick(V,d)},[e("img",{alt:d.label,src:d.icon,style:{width:"100%"}},null,8,he)],8,ge)),[[R,d.label,void 0,{top:!0}]])]),_:1},8,["model"]),s(S,{visible:t.displayTerminal,"onUpdate:visible":o[0]||(o[0]=d=>t.displayTerminal=d),header:"Terminal",breakpoints:{"960px":"50vw"},style:{width:"40vw"},maximizable:!0},{default:l(()=>[s(h,{welcomeMessage:"Welcome to PrimeVue(cmd: 'date', 'greet {0}', 'random' and 'clear')",prompt:"primevue $"})]),_:1},8,["visible"]),s(S,{visible:t.displayFinder,"onUpdate:visible":o[1]||(o[1]=d=>t.displayFinder=d),header:"Finder",breakpoints:{"960px":"50vw"},style:{width:"40vw"},maximizable:!0},{default:l(()=>[s(z,{value:t.nodes},null,8,["value"])]),_:1},8,["visible"]),s(N,{visible:t.displayPhotos,"onUpdate:visible":o[2]||(o[2]=d=>t.displayPhotos=d),value:t.images,responsiveOptions:t.responsiveOptions,numVisible:2,containerStyle:"width: 400px",circular:!0,fullScreen:!0,showThumbnails:!1,showItemNavigators:!0},{item:l(d=>[e("img",{src:d.item.itemImageSrc,alt:d.item.alt,style:{width:"100%"}},null,8,be)]),_:1},8,["visible","value","responsiveOptions"])])]),s(B,{code:t.code,service:["PhotoService","NodeService"]},null,8,["code"])],64)}const fe=m(oe,[["render",ve],["__scopeId","data-v-49d240fc"]]);const ke={data(){return{items:[{label:"Finder",icon:"https://primefaces.org/cdn/primevue/images/dock/finder.svg"},{label:"App Store",icon:"https://primefaces.org/cdn/primevue/images/dock/appstore.svg"},{label:"Photos",icon:"https://primefaces.org/cdn/primevue/images/dock/photos.svg"},{label:"Trash",icon:"https://primefaces.org/cdn/primevue/images/dock/trash.png"}],position:"bottom",positions:[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}],code:{basic:`<Dock :model="items" :position="position">
    <template #icon="{ item }">
        <img :alt="item.label" :src="item.icon" style="width: 100%" />
    </template>
</Dock>`,options:`<template>
    <div class="card dock-demo">
        <div class="flex flex-wrap gap-3 mb-5">
            <div v-for="pos of positions" :key="pos.label" class="flex align-items-center">
                <RadioButton v-model="position" :value="pos.value" :inputId="pos.label" name="dock" />
                <label :for="pos.label" class="ml-2"> {{ pos.label }} </label>
            </div>
        </div>
        <div class="dock-window">
            <Dock :model="items" :position="position">
                <template #icon="{ item }">
                    <img :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Finder',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg'
                },
                {
                    label: 'App Store',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg'
                },
                {
                    label: 'Photos',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg'
                },
                {
                    label: 'Trash',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png'
                }
            ],
            position: 'bottom',
            positions: [
                {
                    label: 'Bottom',
                    value: 'bottom'
                },
                {
                    label: 'Top',
                    value: 'top'
                },
                {
                    label: 'Left',
                    value: 'left'
                },
                {
                    label: 'Right',
                    value: 'right'
                }
            ]
        }
    }
}
<\/script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}

.dock-demo > .p-dock {
    z-index: 1000;
}
</style>`,composition:`<template>
    <div class="card dock-demo">
        <div class="flex flex-wrap gap-3 mb-5">
            <div v-for="pos of positions" :key="pos.label" class="flex align-items-center">
                <RadioButton v-model="position" :value="pos.value" :inputId="pos.label" name="dock" />
                <label :for="pos.label" class="ml-2"> {{ pos.label }} </label>
            </div>
        </div>
        <div class="dock-window" style="backgroundimage: 'url(https://primefaces.org/cdn/primevue/images/dock/window.jpg))'">
            <Dock :model="items" :position="position">
                <template #icon="{ item }">
                    <img :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg'
    },
    {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg'
    },
    {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg'
    },
    {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png'
    }
]);
const position = ref('bottom');
const positions = ref([
    {
        label: 'Bottom',
        value: 'bottom'
    },
    {
        label: 'Top',
        value: 'top'
    },
    {
        label: 'Left',
        value: 'left'
    },
    {
        label: 'Right',
        value: 'right'
    }
]);

<\/script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}

.dock-demo > .p-dock {
    z-index: 1000;
}
</style>`}}}},_e=i=>(P("data-v-2ce6d558"),i=i(),C(),i),we=_e(()=>e("p",null,[a("Menu requires a collection of menuitems as its "),e("i",null,"model"),a(". Default location is "),e("i",null,"bottom"),a(" and other sides are also available when defined with the "),e("i",null,"position"),a(" property.")],-1)),xe={class:"card dock-demo"},ye={class:"flex flex-wrap gap-3 mb-5"},De=["for"],Te={class:"dock-window",style:{backgroundimage:"'url(https://primefaces.org/cdn/primevue/images/dock/window.jpg)'"}},Se=["alt","src"];function $e(i,o,n,g,t,k){const r=f,p=b("RadioButton"),y=b("Dock"),D=T;return c(),u(v,null,[s(r,_(w(i.$attrs)),{default:l(()=>[we]),_:1},16),e("div",xe,[e("div",ye,[(c(!0),u(v,null,L(t.positions,h=>(c(),u("div",{key:h.label,class:"flex align-items-center"},[s(p,{modelValue:t.position,"onUpdate:modelValue":o[0]||(o[0]=S=>t.position=S),value:h.value,inputId:h.label,name:"dock"},null,8,["modelValue","value","inputId"]),e("label",{for:h.label,class:"ml-2"},F(h.label),9,De)]))),128))]),e("div",Te,[s(y,{model:t.items,position:t.position},{icon:l(({item:h})=>[e("img",{alt:h.label,src:h.icon,style:{width:"100%"}},null,8,Se)]),_:1},8,["model","position"])])]),s(D,{code:t.code},null,8,["code"])],64)}const Ie=m(ke,[["render",$e],["__scopeId","data-v-2ce6d558"]]),Pe={data(){return{code:{basic:"import Dock from 'primevue/dock';"}}}};function Ce(i,o,n,g,t,k){const r=f,p=T;return c(),u(v,null,[s(r,_(w(i.$attrs)),null,16),s(p,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Fe=m(Pe,[["render",Ce]]),Ee={},Ae=e("p",null,[a(" Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as "),e("i",null,"NuxtLink"),a(" or "),e("i",null,"router-link"),a(". ")],-1);function ze(i,o){const n=f;return c(),$(n,_(w(i.$attrs)),{default:l(()=>[Ae]),_:1},16)}const Ne=m(Ee,[["render",ze]]);const Be={data(){return{items:[{label:"Finder",icon:"https://primefaces.org/cdn/primevue/images/dock/finder.svg"},{label:"App Store",icon:"https://primefaces.org/cdn/primevue/images/dock/appstore.svg"},{label:"Photos",icon:"https://primefaces.org/cdn/primevue/images/dock/photos.svg"},{label:"Trash",icon:"https://primefaces.org/cdn/primevue/images/dock/trash.png"}],code:{basic:`<Dock :model="items" position="bottom"
    :pt="{ 
        container: {
            style: { background: 'linear-gradient(to right,#056BAE, #673976, #056BAE)', borderRadius: '12px' }
        }
    }"
>
    <template #icon="{ item }">
        <img :alt="item.label" :src="item.icon" style="width: 100%" />
    </template>
</Dock>`,options:`<template>
    <div class="card dock-demo">
        <div class="dock-window">
            <Dock :model="items" position="bottom"
                :pt="{ 
                    container: {
                        style: { background: 'linear-gradient(to right,#056BAE, #673976, #056BAE)', borderRadius: '12px' }
                    }
                }"
            >
                <template #icon="{ item }">
                    <img :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Finder',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg'
                },
                {
                    label: 'App Store',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg'
                },
                {
                    label: 'Photos',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg'
                },
                {
                    label: 'Trash',
                    icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png'
                }
            ]
        }
    }
}
<\/script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}

.dock-demo > .p-dock {
    z-index: 1000;
}
</style>`,composition:`<template>
    <div class="card dock-demo">
        <div class="dock-window" style="backgroundimage: 'url(https://primefaces.org/cdn/primevue/images/dock/window.jpg))'">
            <Dock :model="items" position="bottom"
                :pt="{ 
                    container: {
                        style: { background: 'linear-gradient(to right,#056BAE, #673976, #056BAE)', borderRadius: '12px' }
                    }
                }"
            >
                <template #icon="{ item }">
                    <img :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg'
    },
    {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg'
    },
    {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg'
    },
    {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png'
    }
]);

<\/script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}

.dock-demo > .p-dock {
    z-index: 1000;
}
</style>`}}}},Re={class:"card dock-demo"},Ve={class:"dock-window"},Me=["alt","src"];function Ue(i,o,n,g,t,k){const r=f,p=b("Dock"),y=T;return c(),u(v,null,[s(r,_(w(i.$attrs)),null,16),e("div",Re,[e("div",Ve,[s(p,{model:t.items,position:"bottom",pt:{container:{style:{background:"linear-gradient(to right,#056BAE, #673976, #056BAE)",borderRadius:"12px"}}}},{icon:l(({item:D})=>[e("img",{alt:D.label,src:D.icon,style:{width:"100%"}},null,8,Me)]),_:1},8,["model","pt"])])]),s(y,{code:t.code},null,8,["code"])],64)}const je=m(Be,[["render",Ue],["__scopeId","data-v-0c079ba5"]]),Le={},Oe=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/dock.jpg"})],-1);function He(i,o){const n=f;return c(),u(v,null,[s(n,_(w(i.$attrs)),{default:l(()=>[e("p",null,F(i.$attrs.description),1)]),_:1},16),Oe],64)}const Ge=m(Le,[["render",He]]),We={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Ge},{id:"pt.doc.dock",label:"Dock PT Options",component:O,data:J("Dock")},{id:"pt.demo",label:"Demo",component:je}]}}},qe={class:"doc-main"},Je=e("div",{class:"doc-intro"},[e("h1",null,"Dock Pass Through")],-1);function Qe(i,o,n,g,t,k){const r=E,p=A;return c(),u(v,null,[e("div",qe,[Je,s(r,{docs:t.docs},null,8,["docs"])]),s(p,{docs:t.docs},null,8,["docs"])],64)}const Ke=m(We,[["render",Qe]]),Xe={},Ye=e("p",null,"List of class names used in the styled mode.",-1),Ze=H('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-dock</td><td>Container element.</td></tr><tr><td>p-dock-list-container</td><td>Container of the list.</td></tr><tr><td>p-dock-list</td><td>List of items.</td></tr><tr><td>p-dock-item</td><td>Each items in list.</td></tr><tr><td>p-menuitem-content</td><td>Content of menuitem.</td></tr><tr><td>p-dock-link</td><td>Link of the menuitem.</td></tr><tr><td>p-dock-icon</td><td>Icon of a menuitem.</td></tr></tbody></table></div>',1);function ei(i,o){const n=f;return c(),u(v,null,[s(n,_(w(i.$attrs)),{default:l(()=>[Ye]),_:1},16),Ze],64)}const ii=m(Xe,[["render",ei]]),ti={data(){return{code1:{basic:`
export default {
    dock: {
        root: ({ props }) => ({
            class: [
                'absolute z-1 flex justify-center items-center pointer-events-none',
                {
                    'left-0 bottom-0 w-full': props.position == 'bottom',
                    'left-0 top-0 w-full': props.position == 'top',
                    'left-0 top-0 h-full': props.position == 'left',
                    'right-0 top-0 h-full': props.position == 'right'
                }
            ]
        }),
        container: {
            class: ['flex pointer-events-auto', 'bg-white/10 border-white/20 p-2 border rounded-md']
        },
        menu: ({ props }) => ({
            class: [
                'm-0 p-0 list-none flex items-center justify-center',
                'outline-none',
                {
                    'flex-col': props.position == 'left' || props.position == 'right'
                }
            ]
        }),
        menuitem: ({ props, context, instance }) => ({
            class: [
                'p-2 rounded-md',
                'transition-all duration-200 ease-cubic-bezier-will-change-transform transform ',
                {
                    'origin-bottom hover:mx-6': props.position == 'bottom',
                    'origin-top hover:mx-6': props.position == 'top',
                    'origin-left hover:my-6': props.position == 'left',
                    'origin-right hover:my-6': props.position == 'right'
                },
                {
                    'hover:scale-150': instance.currentIndex === context.index,
                    'scale-125': instance.currentIndex - 1 === context.index || instance.currentIndex + 1 === context.index,
                    'scale-110': instance.currentIndex - 2 === context.index || instance.currentIndex + 2 === context.index
                }
            ]
        }),
        action: {
            class: ['flex flex-col items-center justify-center relative overflow-hidden cursor-default', 'w-16 h-16']
        }
    }
}
`},code2:{composition:`<template>
    <div class="card dock-demo">
        <div class="flex flex-wrap gap-3 mb-5">
            <div v-for="pos of positions" :key="pos.label" class="flex items-center">
                <RadioButton v-model="position" :value="pos.value" :inputId="pos.label" name="dock" />
                <label :for="pos.label" class="text-gray-700 dark:text-white/80 ml-2"> {{ pos.label }} </label>
            </div>
        </div>
        <div class="dock-window" style="backgroundimage: 'url(https://primefaces.org/cdn/primevue/images/dock/window.jpg))'">
            <Dock :model="items" :position="position">
                <template #icon="{ item }">
                    <img :alt="item.label" :src="item.icon" style="width: 100%" />
                </template>
            </Dock>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/finder.svg'
    },
    {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/appstore.svg'
    },
    {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/photos.svg'
    },
    {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primevue/images/dock/trash.png'
    }
]);
const position = ref('bottom');
const positions = ref([
    {
        label: 'Bottom',
        value: 'bottom'
    },
    {
        label: 'Top',
        value: 'top'
    },
    {
        label: 'Left',
        value: 'left'
    },
    {
        label: 'Right',
        value: 'right'
    }
]);

<\/script>

<style scoped>
.dock-demo > .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url("https://primefaces.org/cdn/primevue/images/dock/window.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
}
</style>
`}}}},oi=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function si(i,o,n,g,t,k){const r=Q,p=T,y=f;return c(),$(y,_(w(i.$attrs)),{default:l(()=>[e("p",null,[a(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),s(r,{to:"/tailwind"},{default:l(()=>[a("Tailwind Customization")]),_:1}),a(" section for an example. ")]),s(p,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),oi,s(p,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const ni=m(ti,[["render",si]]),ai={data(){return{docs:[{id:"theming.styled",label:"Styled",component:ii},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ni}]}]}}},li={class:"doc-main"},ri=e("div",{class:"doc-intro"},[e("h1",null,"Dock Theming")],-1);function ci(i,o,n,g,t,k){const r=E,p=A;return c(),u(v,null,[e("div",li,[ri,s(r,{docs:t.docs},null,8,["docs"])]),s(p,{docs:t.docs},null,8,["docs"])],64)}const pi=m(ai,[["render",ci]]),di={data(){return{docs:[{id:"import",label:"Import",component:Fe},{id:"basic",label:"Basic",component:Ie},{id:"advance",label:"Advanced",component:fe},{id:"router",label:"Router",component:Ne},{id:"accessibility",label:"Accessibility",component:te}],ptComponent:Ke,themingDoc:pi}}};function mi(i,o,n,g,t,k){const r=G;return c(),$(r,{title:"Vue Dock Component",header:"Dock",description:"Dock is a navigation component consisting of menuitems.",componentDocs:t.docs,apiDocs:["Dock"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const fi=m(di,[["render",mi]]);export{fi as default};
