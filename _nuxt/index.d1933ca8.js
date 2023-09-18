import{_ as b,o as u,e as V,w as a,b as e,f as o,a as s,m as j,C as D,h as _,j as f,c as g,n as S,g as y,G as F,t as k,E as $,F as v,p as I,s as B,u as N,q as O,D as A,k as G,l as C,v as E,x as L}from"./entry.68beb385.js";import{P}from"./PhotoService.94ee156a.js";import{g as M}from"./PTHelper.11558b27.js";import{_ as R}from"./PrimeVueNuxtLink.f51d0c80.js";const z={},q=e("h3",null,"Screen Reader",-1),H=e("p",null,[o(" Galleria uses "),e("i",null,"region"),o(" role and since any attribute is passed to the main container element, attributes such as "),e("i",null,"aria-label"),o(" and "),e("i",null,"aria-roledescription"),o(" can be used as well. The slides container has "),e("i",null,"aria-live"),o(' attribute set as "polite" if galleria is not in autoplay mode, otherwise "off" would be the value in autoplay. ')],-1),W=e("i",null,"group",-1),U=e("i",null,"aria.slideNumber",-1),K=e("i",null,"aria.slide",-1),Q=e("i",null,"aria-roledescription",-1),J=e("i",null,"aria-hidden",-1),X=e("i",null,"aria-label",-1),Y=e("i",null,"aria.prevPageLabel",-1),Z=e("i",null,"aria.nextPageLabel",-1),ee=e("i",null,"nextButtonProps",-1),te=e("i",null,"prevButtonProps",-1),ie=e("i",null,"tablist",-1),le=e("i",null,"tab",-1),se=e("i",null,"aria-selected",-1),oe=e("i",null,"aria-controls",-1),ae=e("i",null,"aria-label",-1),ne=e("i",null,"aria.pageLabel",-1),re=e("i",null,"aria-current",-1),ce=e("i",null,"dialog",-1),me=e("i",null,"aria-modal",-1),pe=e("i",null,"aria-label",-1),ue=e("i",null,"aria.close",-1),de=e("h3",null,"Next/Prev Keyboard Support",-1),he=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus through interactive elements in the carousel.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Activates navigation.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Activates navigation.")])])])],-1),ge=e("h3",null,"Quick Navigation Keyboard Support",-1),ve=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus through the active slide link.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Activates the focused slide link.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Activates the focused slide link.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Moves focus to the next slide link.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Moves focus to the previous slide link.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first slide link.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last slide link.")])])])],-1);function be(i,c){const d=D,x=_;return u(),V(x,j({id:"accessibility",label:"Accessibility"},i.$attrs),{default:a(()=>[q,H,e("p",null,[o(" A slide has a "),W,o(" role with an aria-label that refers to the "),U,o(" property of the "),s(d,{to:"/configuration/#locale"},{default:a(()=>[o("locale")]),_:1}),o(" API. Similarly "),K,o(" is used as the "),Q,o(" of the item. Inactive slides are hidden from the readers with "),J,o(". ")]),e("p",null,[o(" Next and Previous navigators are button elements with "),X,o(" attributes referring to the "),Y,o(" and "),Z,o(" properties of the "),s(d,{to:"/configuration/#locale"},{default:a(()=>[o("locale")]),_:1}),o(" API by default respectively, you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using "),ee,o(" and "),te,o(". ")]),e("p",null,[o(" Quick navigation elements and thumnbails follow the tab pattern. They are placed inside an element with a "),ie,o(" role whereas each item has a "),le,o(" role with "),se,o(" and "),oe,o(" attributes. The "),ae,o(" attribute of a quick navigation item refers to the "),ne,o(" of the "),s(d,{to:"/configuration/#locale"},{default:a(()=>[o("locale")]),_:1}),o(" API. Current page is marked with "),re,o(". ")]),e("p",null,[o(" In full screen mode, modal element uses "),ce,o(" role with "),me,o(" enabled. The close button retrieves "),pe,o(" from the "),ue,o(" property of the "),s(d,{to:"/configuration/#locale"},{default:a(()=>[o("locale")]),_:1}),o(" API. ")]),de,he,ge,ve]),_:1},16)}const fe=b(z,[["render",be]]);const xe={data(){return{images:null,activeIndex:0,showThumbnails:!1,isAutoPlayActive:!0,fullScreen:!1,isAutoPlay:!0,code:{basic:`<Galleria ref="galleria" v-model:activeIndex="activeIndex" :value="images" :numVisible="5" containerStyle="max-width: 640px" :containerClass="galleriaClass"
    :showThumbnails="showThumbnails" :showItemNavigators="true" :showItemNavigatorsOnHover="true" :circular="true" :autoPlay="isAutoPlay" :transitionInterval="3000">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
    </template>
    <template #thumbnail="slotProps">
        <div class="grid grid-nogutter justify-content-center">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </div>
    </template>
    <template #footer>
        <div class="custom-galleria-footer">
            <Button icon="pi pi-list" @click="onThumbnailButtonClick" />
            <Button :icon="slideButtonIcon" @click="toggleAutoSlide" />
            <span v-if="images" class="title-container">
                <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                <span class="title">{{ images[activeIndex].title }}</span>
                <span>{{ images[activeIndex].alt }}</span>
            </span>
            <Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" />
        </div>
    </template>
</Galleria>`,options:`<template>
    <div class="card flex justify-content-center galleria demo">
        <Galleria ref="galleria" v-model:activeIndex="activeIndex" :value="images" :numVisible="5" containerStyle="max-width: 640px" :containerClass="galleriaClass"
            :showThumbnails="showThumbnails" :showItemNavigators="true" :showItemNavigatorsOnHover="true" :circular="true" :autoPlay="isAutoPlay" :transitionInterval="3000">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </div>
            </template>
            <template #footer>
                <div class="custom-galleria-footer">
                    <Button icon="pi pi-list" @click="onThumbnailButtonClick" />
                    <Button :icon="slideButtonIcon" @click="toggleAutoSlide" />
                    <span v-if="images" class="title-container">
                        <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                        <span class="title">{{ images[activeIndex].title }}</span>
                        <span>{{ images[activeIndex].alt }}</span>
                    </span>
                    <Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" />
                </div>
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            activeIndex: 0,
            showThumbnails: false,
            fullScreen: false,
            isAutoPlay: true,
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
        this.bindDocumentListeners();
    },
    methods: {
        toggleAutoSlide() {
            this.isAutoPlay = !this.isAutoPlay;
        },
        onThumbnailButtonClick() {
            this.showThumbnails = !this.showThumbnails;
        },
        toggleFullScreen() {
            if (this.fullScreen) {
                this.closeFullScreen();
            } else {
                this.openFullScreen();
            }
        },
        onFullScreenChange() {
            this.fullScreen = !this.fullScreen;
        },
        openFullScreen() {
            let elem = this.$refs.galleria.$el;

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                /* IE/Edge */
                elem.msRequestFullscreen();
            }
        },
        closeFullScreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        },
        bindDocumentListeners() {
            document.addEventListener('fullscreenchange', this.onFullScreenChange);
            document.addEventListener('mozfullscreenchange', this.onFullScreenChange);
            document.addEventListener('webkitfullscreenchange', this.onFullScreenChange);
            document.addEventListener('msfullscreenchange', this.onFullScreenChange);
        },
        unbindDocumentListeners() {
            document.removeEventListener('fullscreenchange', this.onFullScreenChange);
            document.removeEventListener('mozfullscreenchange', this.onFullScreenChange);
            document.removeEventListener('webkitfullscreenchange', this.onFullScreenChange);
            document.removeEventListener('msfullscreenchange', this.onFullScreenChange);
        }
    },
    computed: {
        slideButtonIcon() {
            return this.isAutoPlay ? 'pi pi-pause' : 'pi pi-play';
        },
        galleriaClass() {
            return ['custom-galleria', { fullscreen: this.fullScreen }];
        },
        fullScreenIcon() {
            return \`pi ${this.fullScreen?"pi-window-minimize":"pi-window-maximize"}\`;
        }
    }
};
<\/script>

<style lang="scss" scoped>
::v-deep(.custom-galleria) {
    &.fullscreen {
        display: flex;
        flex-direction: column;

        .p-galleria-content {
            flex-grow: 1;
            justify-content: center;
        }
    }

    .p-galleria-content {
        position: relative;
    }

    .p-galleria-thumbnail-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .p-galleria-thumbnail-items-container {
        width: 100%;
    }

    .custom-galleria-footer {
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.9);
        color: #ffffff;

        > button {
            background-color: transparent;
            color: #ffffff;
            border: 0 none;
            border-radius: 0;
            margin: 0.2rem 0;

            &.fullscreen-button {
                margin-left: auto;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }

    .title-container {
        > span {
            font-size: 0.9rem;
            padding-left: 0.829rem;

            &.title {
                font-weight: bold;
            }
        }
    }
}
</style>`,composition:`<template>
    <div class="card flex justify-content-center galleria demo">
        <Galleria ref="galleria" v-model:activeIndex="activeIndex" :value="images" :numVisible="5" containerStyle="max-width: 640px" :containerClass="galleriaClass"
            :showThumbnails="showThumbnails" :showItemNavigators="true" :showItemNavigatorsOnHover="true" :circular="true" :autoPlay="isAutoPlay" :transitionInterval="3000">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{ width: !fullScreen ? '100%' : '', display: !fullScreen ? 'block' : '' }]" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                </div>
            </template>
            <template #footer>
                <div class="custom-galleria-footer">
                    <Button icon="pi pi-list" @click="onThumbnailButtonClick" />
                    <Button :icon="slideButtonIcon" @click="toggleAutoSlide" />
                    <span v-if="images" class="title-container">
                        <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                        <span class="title">{{ images[activeIndex].title }}</span>
                        <span>{{ images[activeIndex].alt }}</span>
                    </span>
                    <Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" />
                </div>
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
    bindDocumentListeners();
});

const galleria = ref();
const images = ref();
const activeIndex = ref(0);
const showThumbnails = ref(false);
const fullScreen = ref(false);
const isAutoPlay = ref(true);

const toggleAutoSlide = () => {
    isAutoPlay.value  = !isAutoPlay.value ;
};
const onThumbnailButtonClick = () => {
    showThumbnails.value  = !showThumbnails.value ;
};
const toggleFullScreen = () => {
    if (fullScreen.value ) {
        closeFullScreen();
    } else {
        openFullScreen();
    }
};
const onFullScreenChange = () => {
    fullScreen.value  = !fullScreen.value ;
};
const openFullScreen = () =>{
    let elem = galleria.value.$el;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
};
const closeFullScreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
};
const bindDocumentListeners = () => {
    document.addEventListener('fullscreenchange', onFullScreenChange);
    document.addEventListener('mozfullscreenchange', onFullScreenChange);
    document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    document.addEventListener('msfullscreenchange', onFullScreenChange);
};
const unbindDocumentListeners = () => {
    document.removeEventListener('fullscreenchange', onFullScreenChange);
    document.removeEventListener('mozfullscreenchange', onFullScreenChange);
    document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
    document.removeEventListener('msfullscreenchange', onFullScreenChange);
};



const galleriaClass = computed(() => {
    return ['custom-galleria', { fullscreen: fullScreen.value }];
});
const fullScreenIcon = computed(() => {
    return \`pi \${fullScreen.value ? 'pi-window-minimize' : 'pi-window-maximize'}\`;
});
const slideButtonIcon = computed(() => {
    return \`pi \${isAutoPlay.value ? 'pi-pause' : 'pi-play'}\`;
});
<\/script>

<style lang="scss" scoped>
::v-deep(.custom-galleria) {
    &.fullscreen {
        display: flex;
        flex-direction: column;

        .p-galleria-content {
            flex-grow: 1;
            justify-content: center;
        }
    }

    .p-galleria-content {
        position: relative;
    }

    .p-galleria-thumbnail-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    .p-galleria-thumbnail-items-container {
        width: 100%;
    }

    .custom-galleria-footer {
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.9);
        color: #ffffff;

        > button {
            background-color: transparent;
            color: #ffffff;
            border: 0 none;
            border-radius: 0;
            margin: 0.2rem 0;

            &.fullscreen-button {
                margin-left: auto;
            }

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }

    .title-container {
        > span {
            font-size: 0.9rem;
            padding-left: 0.829rem;

            &.title {
                font-weight: bold;
            }
        }
    }
}
</style>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i),this.bindDocumentListeners()},methods:{toggleAutoSlide(){this.isAutoPlay=!this.isAutoPlay},onThumbnailButtonClick(){this.showThumbnails=!this.showThumbnails},toggleFullScreen(){this.fullScreen?this.closeFullScreen():this.openFullScreen()},onFullScreenChange(){this.fullScreen=!this.fullScreen},openFullScreen(){let i=this.$refs.galleria.$el;i.requestFullscreen?i.requestFullscreen():i.mozRequestFullScreen?i.mozRequestFullScreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen():i.msRequestFullscreen&&i.msRequestFullscreen()},closeFullScreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},bindDocumentListeners(){document.addEventListener("fullscreenchange",this.onFullScreenChange),document.addEventListener("mozfullscreenchange",this.onFullScreenChange),document.addEventListener("webkitfullscreenchange",this.onFullScreenChange),document.addEventListener("msfullscreenchange",this.onFullScreenChange)},unbindDocumentListeners(){document.removeEventListener("fullscreenchange",this.onFullScreenChange),document.removeEventListener("mozfullscreenchange",this.onFullScreenChange),document.removeEventListener("webkitfullscreenchange",this.onFullScreenChange),document.removeEventListener("msfullscreenchange",this.onFullScreenChange)}},computed:{slideButtonIcon(){return this.isAutoPlay?"pi pi-pause":"pi pi-play"},galleriaClass(){return["custom-galleria",{fullscreen:this.fullScreen}]},fullScreenIcon(){return`pi ${this.fullScreen?"pi-window-minimize":"pi-window-maximize"}`}}},_e=i=>(B("data-v-26f1fe16"),i=i(),N(),i),Se=_e(()=>e("p",null,"Advanced Galleria implementation with a custom UI.",-1)),ye={class:"card flex justify-content-center galleria demo"},Ie=["src","alt"],Pe={class:"grid grid-nogutter justify-content-center"},we=["src","alt"],ke={class:"custom-galleria-footer"},Ve={key:0,class:"title-container"},Oe={class:"title"};function $e(i,c,d,x,t,h){const m=_,r=f("Button"),p=f("Galleria"),l=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[Se]),_:1},16),e("div",ye,[s(p,{ref:"galleria",activeIndex:t.activeIndex,"onUpdate:activeIndex":c[0]||(c[0]=n=>t.activeIndex=n),value:t.images,numVisible:5,containerStyle:"max-width: 640px",containerClass:h.galleriaClass,showThumbnails:t.showThumbnails,showItemNavigators:!0,showItemNavigatorsOnHover:!0,circular:!0,autoPlay:t.isAutoPlay,transitionInterval:3e3},{item:a(n=>[e("img",{src:n.item.itemImageSrc,alt:n.item.alt,style:F([{width:t.fullScreen?"":"100%",display:t.fullScreen?"":"block"}])},null,12,Ie)]),thumbnail:a(n=>[e("div",Pe,[e("img",{src:n.item.thumbnailImageSrc,alt:n.item.alt,style:{display:"block"}},null,8,we)])]),footer:a(()=>[e("div",ke,[s(r,{icon:"pi pi-list",onClick:h.onThumbnailButtonClick},null,8,["onClick"]),s(r,{icon:h.slideButtonIcon,onClick:h.toggleAutoSlide},null,8,["icon","onClick"]),t.images?(u(),g("span",Ve,[e("span",null,k(t.activeIndex+1)+"/"+k(t.images.length),1),e("span",Oe,k(t.images[t.activeIndex].title),1),e("span",null,k(t.images[t.activeIndex].alt),1)])):$("",!0),s(r,{icon:h.fullScreenIcon,onClick:h.toggleFullScreen,class:"fullscreen-button"},null,8,["icon","onClick"])])]),_:1},8,["activeIndex","value","containerClass","showThumbnails","autoPlay"])]),s(l,{code:t.code,service:["PhotoService"],dependencies:{sass:"1.45.0","sass-loader":"8.0.2"}},null,8,["code"])],64)}const Ge=b(xe,[["render",$e],["__scopeId","data-v-26f1fe16"]]),Ce={data(){return{images:null,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
    :circular="true" :autoPlay="true" :transitionInterval="2000">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
    </template>
</Galleria>`,options:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
            :circular="true" :autoPlay="true" :transitionInterval="2000">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
            :circular="true" :autoPlay="true" :transitionInterval="2000">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},Te=e("p",null,[o("A slideshow implementation is defined by adding "),e("i",null,"circular"),o(" and "),e("i",null,"autoPlay"),o(" properties.")],-1),je={class:"card md:flex md:justify-content-center"},De=["src","alt"],Fe=["src","alt"];function Be(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[Te]),_:1},16),e("div",je,[s(r,{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,containerStyle:"max-width: 640px",circular:!0,autoPlay:!0,transitionInterval:2e3},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%",display:"block"}},null,8,De)]),thumbnail:a(l=>[e("img",{src:l.item.thumbnailImageSrc,alt:l.item.alt,style:{display:"block"}},null,8,Fe)]),_:1},8,["value","responsiveOptions"])]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const Ne=b(Ce,[["render",Be]]),Ae={data(){return{images:null,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
    </template>
</Galleria>`,options:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},Ee=e("p",null,[o("Galleria requires a "),e("i",null,"value"),o(" as a collection of images, "),e("i",null,"item"),o(" template for the higher resolution image and "),e("i",null,"thumbnail"),o(" template to display as a thumbnail.")],-1),Le={class:"card md:flex md:justify-content-center"},Me=["src","alt"],Re=["src","alt"];function ze(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[Ee]),_:1},16),e("div",Le,[s(r,{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,containerStyle:"max-width: 640px"},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%"}},null,8,Me)]),thumbnail:a(l=>[e("img",{src:l.item.thumbnailImageSrc,alt:l.item.alt},null,8,Re)]),_:1},8,["value","responsiveOptions"])]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const qe=b(Ae,[["render",ze]]),He={data(){return{images:null,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
    </template>
    <template #caption="slotProps">
        <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
        <p class="text-white">{{ slotProps.item.alt }}</p>
    </template>
</Galleria>`,options:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
            <template #caption="slotProps">
                <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
                <p class="text-white">{{ slotProps.item.alt }}</p>
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
            <template #caption="slotProps">
                <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
                <p class="text-white">{{ slotProps.item.alt }}</p>
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},We=e("p",null,[o("Description of an image is specified with the "),e("i",null,"caption"),o(" property that takes the displayed object and returns content.")],-1),Ue={class:"card md:flex md:justify-content-center"},Ke=["src","alt"],Qe=["src","alt"],Je={class:"text-xl mb-2 font-bold"},Xe={class:"text-white"};function Ye(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[We]),_:1},16),e("div",Ue,[s(r,{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,containerStyle:"max-width: 640px"},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%",display:"block"}},null,8,Ke)]),thumbnail:a(l=>[e("img",{src:l.item.thumbnailImageSrc,alt:l.item.alt,style:{display:"block"}},null,8,Qe)]),caption:a(l=>[e("div",Je,k(l.item.title),1),e("p",Xe,k(l.item.alt),1)]),_:1},8,["value","responsiveOptions"])]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const Ze=b(He,[["render",Ye]]),et={data(){return{images:null,activeIndex:2,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<div>
    <Button icon="pi pi-minus" @click="prev" />
    <Button icon="pi pi-plus" @click="next" severity="secondary" class="ml-2" />
</div>

<Galleria v-model:activeIndex="activeIndex" :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
    </template>
</Galleria>`,options:`<template>
    <div class="card flex flex-column md:align-items-center">
        <div class="mb-3 align-self-center">
            <Button icon="pi pi-minus" @click="prev" />
            <Button icon="pi pi-plus" @click="next" severity="secondary" class="ml-2" />
        </div>

        <Galleria v-model:activeIndex="activeIndex" :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            activeIndex: 2,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    },
    methods: {
        next() {
            this.activeIndex = this.activeIndex === this.images.length - 1 ? this.images.length - 1 : this.activeIndex + 1;
        },
        prev() {
            this.activeIndex = this.activeIndex === 0 ? 0 : this.activeIndex - 1;
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-column md:align-items-center">
        <div class="mb-3 align-self-center">
            <Button icon="pi pi-minus" @click="prev" />
            <Button icon="pi pi-plus" @click="next" severity="secondary" class="ml-2" />
        </div>

        <Galleria v-model:activeIndex="activeIndex" :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const activeIndex = ref(2);
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

const next = () => {
    activeIndex.value = activeIndex.value === images.value.length - 1 ? images.value.length - 1 : activeIndex.value + 1;
};
const prev = () => {
    activeIndex.value = activeIndex.value === 0 ? 0 : activeIndex.value - 1;
};
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)},methods:{next(){this.activeIndex=this.activeIndex===this.images.length-1?this.images.length-1:this.activeIndex+1},prev(){this.activeIndex=this.activeIndex===0?0:this.activeIndex-1}}},tt=e("p",null,[o("Galleria can be controlled programmatically using a binding to "),e("i",null,"activeIndex"),o(".")],-1),it={class:"card flex flex-column md:align-items-center"},lt={class:"mb-3 align-self-center"},st=["src","alt"],ot=["src","alt"];function at(i,c,d,x,t,h){const m=_,r=f("Button"),p=f("Galleria"),l=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[tt]),_:1},16),e("div",it,[e("div",lt,[s(r,{icon:"pi pi-minus",onClick:h.prev},null,8,["onClick"]),s(r,{icon:"pi pi-plus",onClick:h.next,severity:"secondary",class:"ml-2"},null,8,["onClick"])]),s(p,{activeIndex:t.activeIndex,"onUpdate:activeIndex":c[0]||(c[0]=n=>t.activeIndex=n),value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,containerStyle:"max-width: 640px"},{item:a(n=>[e("img",{src:n.item.itemImageSrc,alt:n.item.alt,style:{width:"100%"}},null,8,st)]),thumbnail:a(n=>[e("img",{src:n.item.thumbnailImageSrc,alt:n.item.alt},null,8,ot)]),_:1},8,["activeIndex","value","responsiveOptions"])]),s(l,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const nt=b(et,[["render",at]]),rt={data(){return{code:{basic:"import Galleria from 'primevue/galleria';"}}}};function ct(i,c,d,x,t,h){const m=_,r=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),null,16),s(r,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const mt=b(rt,[["render",ct]]),pt={data(){return{images:null,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="7" :circular="true" containerStyle="max-width: 800px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
    </template>
</Galleria>`,options:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="7" :circular="true" containerStyle="max-width: 800px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="7" :circular="true" containerStyle="max-width: 800px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},ut=e("p",null,[o("Galleria responsiveness is defined with the "),e("i",null,"responsiveOptions"),o(" property.")],-1),dt={class:"card md:flex md:justify-content-center"},ht=["src","alt"],gt=["src","alt"];function vt(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[ut]),_:1},16),e("div",dt,[e("div",null,[s(r,{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:7,circular:!0,containerStyle:"max-width: 800px"},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%",display:"block"}},null,8,ht)]),thumbnail:a(l=>[e("img",{src:l.item.thumbnailImageSrc,alt:l.item.alt,style:{display:"block"}},null,8,gt)]),_:1},8,["value","responsiveOptions"])])]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const bt=b(pt,[["render",vt]]),ft={data(){return{images:null,position:"bottom",positionOptions:[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}],responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="4" :thumbnailsPosition="position" containerStyle="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <div class="grid grid-nogutter justify-content-center">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
        </div>
    </template>
</Galleria>`,options:`<template>
    <div class="card card flex flex-column md:align-items-center">
        <div class="flex flex-wrap gap-3 mb-5 align-self-center">
            <div class="flex flex-wrap gap-3 mb-5">
                <div v-for="option in positionOptions" :key="option.label" class="flex align-items-center">
                    <RadioButton v-model="position" :inputId="option.label" name="option" :value="option.value" />
                    <label :for="option.label" class="ml-2"> {{ option.label }} </label>
                </div>
            </div>
        </div>
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="4" :thumbnailsPosition="position" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                </div>
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            position: 'bottom',
            positionOptions: [
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
            ],
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-column md:align-items-center">
        <div class="flex flex-wrap gap-3 mb-5 align-self-center">
            <div class="flex flex-wrap gap-3 mb-5">
                <div v-for="option in positionOptions" :key="option.label" class="flex align-items-center">
                    <RadioButton v-model="position" :inputId="option.label" name="option" :value="option.value" />
                    <label :for="option.label" class="ml-2"> {{ option.label }} </label>
                </div>
            </div>
        </div>
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="4" :thumbnailsPosition="position" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
                </div>
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

const images = ref();
const position = ref('bottom');
const positionOptions = ref([
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
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},xt=e("p",null,"Thumbnails represent a smaller version of the actual content.",-1),_t={class:"card flex flex-column md:align-items-center"},St={class:"flex flex-wrap gap-3 mb-5 align-self-center"},yt={class:"flex flex-wrap gap-3 mb-5"},It=["for"],Pt=["src","alt"],wt={class:"grid grid-nogutter justify-content-center"},kt=["src","alt"];function Vt(i,c,d,x,t,h){const m=_,r=f("RadioButton"),p=f("Galleria"),l=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[xt]),_:1},16),e("div",_t,[e("div",St,[e("div",yt,[(u(!0),g(v,null,O(t.positionOptions,n=>(u(),g("div",{key:n.label,class:"flex align-items-center"},[s(r,{modelValue:t.position,"onUpdate:modelValue":c[0]||(c[0]=w=>t.position=w),inputId:n.label,name:"option",value:n.value},null,8,["modelValue","inputId","value"]),e("label",{for:n.label,class:"ml-2"},k(n.label),9,It)]))),128))])]),s(p,{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:4,thumbnailsPosition:t.position,containerStyle:"max-width: 640px"},{item:a(n=>[e("img",{src:n.item.itemImageSrc,alt:n.item.alt,style:{width:"100%",display:"block"}},null,8,Pt)]),thumbnail:a(n=>[e("div",wt,[e("img",{src:n.item.thumbnailImageSrc,alt:n.item.alt,style:{width:"100%",display:"block"}},null,8,kt)])]),_:1},8,["value","responsiveOptions","thumbnailsPosition"])]),s(l,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const Ot=b(ft,[["render",Vt]]),$t={data(){return{images:null,activeIndex:0,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],displayCustom:!1,code:{basic:`<Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images" :responsiveOptions="responsiveOptions" :numVisible="7"
    containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
    </template>
</Galleria>`,options:`<template>
    <div class="card flex justify-content-center">
        <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images" :responsiveOptions="responsiveOptions" :numVisible="7"
            containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>

        <div v-if="images" class="grid" style="max-width: 400px">
            <div v-for="(image, index) of images" :key="index" class="col-4">
                <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)" />
            </div>
        </div>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            activeIndex: 0,
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 5
                },
                {
                    breakpoint: '768px',
                    numVisible: 3
                },
                {
                    breakpoint: '560px',
                    numVisible: 1
                }
            ],
            displayCustom: false
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    },
    methods: {
        imageClick(index) {
            this.activeIndex = index;
            this.displayCustom = true;
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="images" :responsiveOptions="responsiveOptions" :numVisible="7"
            containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>

        <div v-if="images" class="grid" style="max-width: 400px">
            <div v-for="(image, index) of images" :key="index" class="col-4">
                <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const activeIndex = ref(0);
const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
const displayCustom = ref(false);

const imageClick = (index) => {
    activeIndex.value = index;
    displayCustom.value = true;
};
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)},methods:{imageClick(i){this.activeIndex=i,this.displayCustom=!0}}},Gt=e("p",null,[o("Using "),e("i",null,"activeIndex"),o(", Galleria is displayed with a specific initial image.")],-1),Ct={class:"card flex justify-content-center"},Tt=["src","alt"],jt=["src","alt"],Dt={key:0,class:"grid",style:{"max-width":"400px"}},Ft=["src","alt","onClick"];function Bt(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[Gt]),_:1},16),e("div",Ct,[s(r,{activeIndex:t.activeIndex,"onUpdate:activeIndex":c[0]||(c[0]=l=>t.activeIndex=l),visible:t.displayCustom,"onUpdate:visible":c[1]||(c[1]=l=>t.displayCustom=l),value:t.images,responsiveOptions:t.responsiveOptions,numVisible:7,containerStyle:"max-width: 850px",circular:!0,fullScreen:!0,showItemNavigators:!0,showThumbnails:!1},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%",display:"block"}},null,8,Tt)]),thumbnail:a(l=>[e("img",{src:l.item.thumbnailImageSrc,alt:l.item.alt,style:{display:"block"}},null,8,jt)]),_:1},8,["activeIndex","visible","value","responsiveOptions"]),t.images?(u(),g("div",Dt,[(u(!0),g(v,null,O(t.images,(l,n)=>(u(),g("div",{key:n,class:"col-4"},[e("img",{src:l.thumbnailImageSrc,alt:l.alt,style:{cursor:"pointer"},onClick:w=>h.imageClick(n)},null,8,Ft)]))),128))])):$("",!0)]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const Nt=b($t,[["render",Bt]]),At={data(){return{images:null,responsiveOptions:[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],displayBasic:!1,code:{basic:`<Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
    </template>
</Galleria>

<Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />`,options:`<template>
    <div class="card flex justify-content-center">
        <Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>

        <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '1500px',
                    numVisible: 5
                },
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
            ],
            displayBasic: false
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>

        <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1500px',
        numVisible: 5
    },
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
const displayBasic = ref(false);

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
})
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},Et=e("p",null,[o("Full screen mode is enabled by adding "),e("i",null,"fullScreen"),o(" property and and visibility is controlled with a binding to "),e("i",null,"visible"),o(" property.")],-1),Lt={class:"card flex justify-content-center"},Mt=["src","alt"],Rt=["src","alt"];function zt(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=f("Button"),l=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[Et]),_:1},16),e("div",Lt,[s(r,{visible:t.displayBasic,"onUpdate:visible":c[0]||(c[0]=n=>t.displayBasic=n),value:t.images,responsiveOptions:t.responsiveOptions,numVisible:9,containerStyle:"max-width: 50%",circular:!0,fullScreen:!0,showItemNavigators:!0},{item:a(n=>[e("img",{src:n.item.itemImageSrc,alt:n.item.alt,style:{width:"100%",display:"block"}},null,8,Mt)]),thumbnail:a(n=>[e("img",{src:n.item.thumbnailImageSrc,alt:n.item.alt,style:{display:"block"}},null,8,Rt)]),_:1},8,["visible","value","responsiveOptions"]),s(p,{label:"Show",icon:"pi pi-external-link",onClick:c[1]||(c[1]=n=>t.displayBasic=!0)})]),s(l,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const qt=b(At,[["render",zt]]),Ht={data(){return{images:null,responsiveOptions:[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],displayBasic:!1,code:{basic:`<Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true"  :showThumbnails="false">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
    </template>
</Galleria>

<Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />`,options:`<template>
    <div class="card flex justify-content-center">
        <Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true"  :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>

        <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '1500px',
                    numVisible: 5
                },
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
            ],
            displayBasic: false
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true"  :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>

        <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1500px',
        numVisible: 5
    },
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
const displayBasic = ref(false);

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
})
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},Wt=e("p",null,"Thumbnails can also be hidden in full screen mode.",-1),Ut={class:"card flex justify-content-center"},Kt=["src","alt"],Qt=["src","alt"];function Jt(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=f("Button"),l=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[Wt]),_:1},16),e("div",Ut,[s(r,{visible:t.displayBasic,"onUpdate:visible":c[0]||(c[0]=n=>t.displayBasic=n),value:t.images,responsiveOptions:t.responsiveOptions,numVisible:9,containerStyle:"max-width: 50%",circular:!0,fullScreen:!0,showItemNavigators:!0,showThumbnails:!1},{item:a(n=>[e("img",{src:n.item.itemImageSrc,alt:n.item.alt,style:{width:"100%",display:"block"}},null,8,Kt)]),thumbnail:a(n=>[e("img",{src:n.item.thumbnailImageSrc,alt:n.item.alt,style:{display:"block"}},null,8,Qt)]),_:1},8,["visible","value","responsiveOptions"]),s(p,{label:"Show",icon:"pi pi-external-link",onClick:c[1]||(c[1]=n=>t.displayBasic=!0)})]),s(l,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const Xt=b(Ht,[["render",Jt]]),Yt={data(){return{images:null,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
    :showThumbnails="false" :showIndicators="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
</Galleria>`,options:`<template>
    <div class="card flex justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
            :showThumbnails="false" :showIndicators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
            :showThumbnails="false" :showIndicators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},Zt=e("p",null,[o("Indicators are displayed at the bottom by enabling "),e("i",null,"showIndicators"),o(" property and interacted with the click event by default.")],-1),ei={class:"card flex justify-content-center"},ti=["src","alt"];function ii(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[Zt]),_:1},16),e("div",ei,[s(r,{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,containerStyle:"max-width: 640px",showThumbnails:!1,showIndicators:!0},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%",display:"block"}},null,8,ti)]),_:1},8,["value","responsiveOptions"])]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const li=b(Yt,[["render",ii]]),si={data(){return{images:null,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
    :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
</Galleria>`,options:`<template>
    <div class="card flex justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
            :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
            :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},oi=e("p",null,[o("Indicators can be activated on hover instead of click if "),e("i",null,"changeItemOnIndicatorHover"),o(" is added.")],-1),ai={class:"card flex justify-content-center"},ni=["src","alt"];function ri(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[oi]),_:1},16),e("div",ai,[s(r,{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,containerStyle:"max-width: 640px",showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%",display:"block"}},null,8,ni)]),_:1},8,["value","responsiveOptions"])]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const ci=b(si,[["render",ri]]),mi={data(){return{images:null,inside:!1,position:"bottom",positionOptions:[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}],code:{basic:`<Galleria :value="images" :numVisible="5" containerStyle="max-width: 640px" :showThumbnails="false"
    :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="inside" :indicatorsPosition="position">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
</Galleria>`,options:`<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-wrap gap-3 mb-5">
            <div v-for="option in positionOptions" :key="option.label" class="flex align-items-center">
                <RadioButton :value="option.value" />
                <label :for="option.label" class="ml-2"> {{ option.label }} </label>
            </div>
        </div>
        <div class="flex align-items-center mb-5">
            <Checkbox v-model="inside" inputId="inside_cbox" :binary="true"></Checkbox>
            <label for="inside_cbox" class="ml-2"> Inside </label>
        </div>
        <Galleria :value="images" :numVisible="5" containerStyle="max-width: 640px" :showThumbnails="false" :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="inside" :indicatorsPosition="position">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            inside: false,
            position: 'bottom',
            positionOptions: [
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
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-wrap gap-3 mb-5">
            <div v-for="option in positionOptions" :key="option.label" class="flex align-items-center">
                <RadioButton :value="option.value" />
                <label :for="option.label" class="ml-2"> {{ option.label }} </label>
            </div>
        </div>
        <div class="flex align-items-center mb-5">
            <Checkbox v-model="inside" inputId="inside_cbox" :binary="true"></Checkbox>
            <label for="inside_cbox" class="ml-2"> Inside </label>
        </div>
        <Galleria :value="images" :numVisible="5" containerStyle="max-width: 640px" :showThumbnails="false"
            :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="inside" :indicatorsPosition="position">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const inside = ref(false);
const position = ref('bottom');
const positionOptions = ref([
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

<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},pi=e("p",null,[o("Indicators can be placed at four different sides using the "),e("i",null,"indicatorsPosition"),o(" property. In addition, enabling "),e("i",null,"showIndicatorsOnItem"),o(" moves the indicators inside the image section.")],-1),ui={class:"card flex flex-column align-items-center"},di={class:"flex flex-wrap gap-3 mb-5"},hi=["for"],gi={class:"flex align-items-center mb-5"},vi=e("label",{for:"inside_cbox",class:"ml-2"}," Inside ",-1),bi=["src","alt"];function fi(i,c,d,x,t,h){const m=_,r=f("RadioButton"),p=f("Checkbox"),l=f("Galleria"),n=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[pi]),_:1},16),e("div",ui,[e("div",di,[(u(!0),g(v,null,O(t.positionOptions,w=>(u(),g("div",{key:w.label,class:"flex align-items-center"},[s(r,{modelValue:t.position,"onUpdate:modelValue":c[0]||(c[0]=T=>t.position=T),inputId:w.label,name:"option",value:w.value},null,8,["modelValue","inputId","value"]),e("label",{for:w.label,class:"ml-2"},k(w.label),9,hi)]))),128))]),e("div",gi,[s(p,{modelValue:t.inside,"onUpdate:modelValue":c[1]||(c[1]=w=>t.inside=w),inputId:"inside_cbox",binary:!0},null,8,["modelValue"]),vi]),s(l,{value:t.images,numVisible:5,containerStyle:"max-width: 640px",showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0,showIndicatorsOnItem:t.inside,indicatorsPosition:t.position},{item:a(w=>[e("img",{src:w.item.itemImageSrc,alt:w.item.alt,style:{width:"100%",display:"block"}},null,8,bi)]),_:1},8,["value","showIndicatorsOnItem","indicatorsPosition"])]),s(n,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const xi=b(mi,[["render",fi]]),_i={data(){return{images:null,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria :value="images" :numVisible="5" containerStyle="max-width: 640px" :showThumbnails="false"
    :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="left">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #indicator="{ index }">
        <span style="color: '#ffffff', cursor: pointer">{{ index + 1 }}</span>
    </template>
</Galleria>`,options:`<template>
    <div class="card flex justify-content-center">
        <Galleria :value="images" :numVisible="5" containerStyle="max-width: 640px" :showThumbnails="false"
            :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="left">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #indicator="{ index }">
                <span style="color: '#ffffff', cursor: pointer">{{ index + 1 }}</span>
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Galleria :value="images" :numVisible="5" containerStyle="max-width: 640px" :showThumbnails="false"
            :showIndicators="true" :changeItemOnIndicatorHover="true" :showIndicatorsOnItem="true" indicatorsPosition="left">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #indicator="{ index }">
                <span style="color: '#ffffff', cursor: pointer">{{ index + 1 }}</span>
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},Si=e("p",null,[o("Indicator content can be customized with the "),e("i",null,"indicator"),o(" property that takes an index as a parameter and expects content.")],-1),yi={class:"card flex justify-content-center"},Ii=["src","alt"],Pi={style:{color:"#ffffff",cursor:"pointer"}};function wi(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[Si]),_:1},16),e("div",yi,[s(r,{value:t.images,numVisible:5,containerStyle:"max-width: 640px",showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0,showIndicatorsOnItem:!0,indicatorsPosition:"left"},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%",display:"block"}},null,8,Ii)]),indicator:a(({index:l})=>[e("span",Pi,k(l+1),1)]),_:1},8,["value"])]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const ki=b(_i,[["render",wi]]),Vi={data(){return{images:null,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px" :showItemNavigators="true" :showItemNavigatorsOnHover="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
    </template>
</Galleria>`,options:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px" :showItemNavigators="true" :showItemNavigatorsOnHover="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px" :showItemNavigators="true" :showItemNavigatorsOnHover="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},Oi=e("p",null,[o("Navigators are displayed on hover only if "),e("i",null,"showItemNavigatorsOnHover"),o(" is enabled.")],-1),$i={class:"card md:flex md:justify-content-center"},Gi=["src","alt"],Ci=["src","alt"];function Ti(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[Oi]),_:1},16),e("div",$i,[s(r,{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 640px",showItemNavigators:!0,showItemNavigatorsOnHover:!0},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%",display:"block"}},null,8,Gi)]),thumbnail:a(l=>[e("img",{src:l.item.thumbnailImageSrc,alt:l.item.alt,style:{display:"block"}},null,8,Ci)]),_:1},8,["value","responsiveOptions"])]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const ji=b(Vi,[["render",Ti]]),Di={data(){return{images:null,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
    :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
</Galleria>`,options:`<template>
    <div class="card flex justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},Fi=e("p",null,"Navigators and Indicators can be combined as well.",-1),Bi={class:"card flex justify-content-center"},Ni=["src","alt"],Ai=["src","alt"];function Ei(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[Fi]),_:1},16),e("div",Bi,[s(r,{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 640px",showItemNavigators:!0,showThumbnails:!1,showItemNavigatorsOnHover:!0,showIndicators:!0},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%",display:"block"}},null,8,Ni)]),thumbnail:a(l=>[e("img",{src:l.item.thumbnailImageSrc,alt:l.item.alt,style:{display:"block"}},null,8,Ai)]),_:1},8,["value","responsiveOptions"])]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const Li=b(Di,[["render",Ei]]),Mi={data(){return{images:null,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
    :showItemNavigators="true">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
</Galleria>`,options:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},Ri=e("p",null,[o("Add "),e("i",null,"showItemNavigators"),o(" to display navigator elements and the left and right side.")],-1),zi={class:"card md:flex md:justify-content-center"},qi=["src","alt"],Hi=["src","alt"];function Wi(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[Ri]),_:1},16),e("div",zi,[s(r,{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 640px",showItemNavigators:!0},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%",display:"block"}},null,8,qi)]),thumbnail:a(l=>[e("img",{src:l.item.thumbnailImageSrc,alt:l.item.alt,style:{display:"block"}},null,8,Hi)]),_:1},8,["value","responsiveOptions"])]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const Ui=b(Mi,[["render",Wi]]),Ki={data(){return{images:null,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
    :showItemNavigators="true" :showThumbnails="false">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
    </template>
</Galleria>`,options:`<template>
    <div class="card flex justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},Qi=e("p",null,"Simple example with indicators only.",-1),Ji={class:"card flex justify-content-center"},Xi=["src","alt"],Yi=["src","alt"];function Zi(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),{default:a(()=>[Qi]),_:1},16),e("div",Ji,[s(r,{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 640px",showItemNavigators:!0,showThumbnails:!1},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%",display:"block"}},null,8,Xi)]),thumbnail:a(l=>[e("img",{src:l.item.thumbnailImageSrc,alt:l.item.alt,style:{display:"block"}},null,8,Yi)]),_:1},8,["value","responsiveOptions"])]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const el=b(Ki,[["render",Zi]]),tl={data(){return{images:null,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],code:{basic:`<Galleria
    :value="images"
    :responsiveOptions="responsiveOptions"
    :numVisible="5"
    :pt="{
        root: { style: { maxWidth: '640px' } }
    }"
>
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
    </template>
</Galleria>`,options:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria
            :value="images"
            :responsiveOptions="responsiveOptions"
            :numVisible="5"
            :pt="{
                root: { style: { maxWidth: '640px' } }
            }"
        >
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import { PhotoService } from '@/service/PhotoService';

export default {
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    }
};
<\/script>`,composition:`<template>
    <div class="card md:flex md:justify-content-center">
        <Galleria
            :value="images"
            :responsiveOptions="responsiveOptions"
            :numVisible="5"
            :pt="{
                root: { style: { maxWidth: '640px' } }
            }"
        >
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `}}},mounted(){P.getImages().then(i=>this.images=i)}},il={class:"card md:flex md:justify-content-center"},ll=["src","alt"],sl=["src","alt"];function ol(i,c,d,x,t,h){const m=_,r=f("Galleria"),p=I;return u(),g(v,null,[s(m,S(y(i.$attrs)),null,16),e("div",il,[s(r,{value:t.images,responsiveOptions:t.responsiveOptions,numVisible:5,pt:{root:{style:{maxWidth:"640px"}}}},{item:a(l=>[e("img",{src:l.item.itemImageSrc,alt:l.item.alt,style:{width:"100%"}},null,8,ll)]),thumbnail:a(l=>[e("img",{src:l.item.thumbnailImageSrc,alt:l.item.alt},null,8,sl)]),_:1},8,["value","responsiveOptions"])]),s(p,{code:t.code,service:["PhotoService"]},null,8,["code"])],64)}const al=b(tl,[["render",ol]]),nl={},rl=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/wireframe-placeholder.jpg"})],-1);function cl(i,c){const d=_;return u(),g(v,null,[s(d,S(y(i.$attrs)),{default:a(()=>[e("p",null,k(i.$attrs.description),1)]),_:1},16),rl],64)}const ml=b(nl,[["render",cl]]),pl={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ml},{id:"pt.doc.galleria",label:"Galleria PT Options",component:A,data:M("Galleria")},{id:"pt.demo",label:"Demo",component:al}]}}},ul={class:"doc-main"},dl=e("div",{class:"doc-intro"},[e("h1",null,"Galleria Pass Through")],-1);function hl(i,c,d,x,t,h){const m=G,r=C;return u(),g(v,null,[e("div",ul,[dl,s(m,{docs:t.docs},null,8,["docs"])]),s(r,{docs:t.docs},null,8,["docs"])],64)}const gl=b(pl,[["render",hl]]),vl={},bl=e("p",null,"List of class names used in the styled mode.",-1),fl=E('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-galleria</td><td>Container element.</td></tr><tr><td>p-galleria-header</td><td>Header section.</td></tr><tr><td>p-galleria-footer</td><td>Footer section.</td></tr><tr><td>p-galleria-item-wrapper</td><td>Item wrapper element. It contains item container and indicators.</td></tr><tr><td>p-galleria-item-container</td><td>Container of the item wrapper. It contains navigation buttons, items and caption content.</td></tr><tr><td>p-galleria-indicators</td><td>Container of the indicators. It contains indicator items.</td></tr><tr><td>p-galleria-thumbnail-content</td><td>Thumbnail content element.</td></tr><tr><td>p-galleria-thumbnail-container</td><td>Container of the thumbnail content. It contains navigation buttons and thumbnail items.</td></tr><tr><td>p-galleria-caption</td><td>Content of the item caption.</td></tr></tbody></table></div>',1);function xl(i,c){const d=_;return u(),g(v,null,[s(d,S(y(i.$attrs)),{default:a(()=>[bl]),_:1},16),fl],64)}const _l=b(vl,[["render",xl]]),Sl={data(){return{code1:{basic:`
export default {
    galleria: {
        root: 'flex flex-col',
        content: 'flex flex-col',
        itemwrapper: 'flex flex-col relative',
        itemcontainer: 'relative flex h-full',
        item: 'flex justify-center items-center h-full w-full',
        thumbnailwrapper: 'flex flex-col overflow-auto shrink-0',
        thumbnailcontainer: {
            class: ['flex flex-row', 'bg-black/90 p-4']
        },
        previousthumbnailbutton: {
            class: [
                'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
                'm-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        thumbnailitemscontainer: 'overflow-hidden w-full',
        thumbnailitems: 'flex',
        thumbnailitem: {
            class: ['overflow-auto flex items-center justify-center cursor-pointer opacity-50', 'flex-1 grow-0 shrink-0 w-20', 'hover:opacity-100 hover:transition-opacity hover:duration-300']
        },
        nextthumbnailbutton: {
            class: [
                'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
                'm-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        indicators: {
            class: ['flex items-center justify-center', 'p-4']
        },
        indicator: 'mr-2',
        indicatorbutton: ({ context }) => ({
            class: [
                'w-4 h-4 transition duration-200 rounded-full',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600': !context.highlighted,
                    'bg-blue-500 hover:bg-blue-600': context.highlighted
                }
            ]
        }),
        mask: {
            class: ['fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90']
        },
        closebutton: {
            class: [
                'absolute top-0 right-0 flex justify-center items-center overflow-hidden m-2',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        closeicon: 'w-6 h-6',
        previousitembutton: {
            class: [
                'inline-flex justify-center items-center overflow-hidden',
                'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2',
                'fixed top-1/2 mt-[-0.5rem]',
                'left-0',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        nextitembutton: {
            class: [
                'inline-flex justify-center items-center overflow-hidden',
                'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2',
                'fixed top-1/2 mt-[-0.5rem]',
                'right-0',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        caption: {
            class: ['absolute bottom-0 left-0 w-full', 'bg-black/50 text-white p-4']
        },
        transition: {
            enterFromClass: 'opacity-0 scale-75',
            enterActiveClass: 'transition-all duration-150 ease-in-out',
            leaveActiveClass: 'transition-all duration-150 ease-in',
            leaveToClass: 'opacity-0 scale-75'
        }
    }
}
`},code2:{composition:`<template>
    <div class="card md:flex md:justify-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
<\/script>`}}}},yl=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Il(i,c,d,x,t,h){const m=R,r=I,p=_;return u(),V(p,S(y(i.$attrs)),{default:a(()=>[e("p",null,[o(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),s(m,{to:"/tailwind"},{default:a(()=>[o("Tailwind Customization")]),_:1}),o(" section for an example. ")]),s(r,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),yl,s(r,{code:t.code2,embedded:"",service:["PhotoService"]},null,8,["code"])]),_:1},16)}const Pl=b(Sl,[["render",Il]]),wl={data(){return{docs:[{id:"theming.styled",label:"Styled",component:_l},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Pl}]}]}}},kl={class:"doc-main"},Vl=e("div",{class:"doc-intro"},[e("h1",null,"Galleria Theming")],-1);function Ol(i,c,d,x,t,h){const m=G,r=C;return u(),g(v,null,[e("div",kl,[Vl,s(m,{docs:t.docs},null,8,["docs"])]),s(r,{docs:t.docs},null,8,["docs"])],64)}const $l=b(wl,[["render",Ol]]),Gl={data(){return{docs:[{id:"import",label:"Import",component:mt},{id:"basic",label:"Basic",component:qe},{id:"controlled",label:"Controlled",component:nt},{id:"indicator",label:"Indicator",description:"Indicators allow quick navigation between the items.",children:[{id:"indicatorbasic",label:"Click Event",component:li},{id:"indicatorhoverevent",label:"Hover Event",component:ci},{id:"indicatorposition",label:"Position",component:xi},{id:"indicatortemplate",label:"Template",component:ki}]},{id:"thumbnail",label:"Thumbnail",component:Ot},{id:"responsive",label:"Responsive",component:bt},{id:"fullscreen",label:"Full Screen",description:"In fullscreen mode content covers the whole page over a modal layer.",children:[{id:"fullscreenwiththumbnail",label:"With Thumbnails",component:qt},{id:"fullscreenwithoutthumnails",label:"Without Thumbnails",component:Xt},{id:"fullscreencustom",label:"Custom Content",component:Nt}]},{id:"navigator",label:"Navigator",description:"Navigators are used to move back and forth between the images.",children:[{id:"itemthumbnails",label:"With Thumbnails",component:Ui},{id:"itemwithouthumbnails",label:"Without Thumbnails",component:el},{id:"itemhover",label:"Display on Hover",component:ji},{id:"indicators",label:"With Indicators",component:Li}]},{id:"autoplay",label:"AutoPlay",component:Ne},{id:"caption",label:"Caption",component:Ze},{id:"advanced",label:"Advanced",component:Ge},{id:"accessibility",label:"Accessibility",component:fe}],ptComponent:gl,themingDoc:$l}}};function Cl(i,c,d,x,t,h){const m=L;return u(),V(m,{title:"Vue Gallery Component",header:"Galleria",description:"Galleria is a content gallery component.",componentDocs:t.docs,apiDocs:["Galleria"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Bl=b(Gl,[["render",Cl]]);export{Bl as default};
