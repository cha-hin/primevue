import{_,o as p,e as I,w as n,m as k,b as e,h as g,j as w,c as f,a as i,n as S,g as z,A as x,t as b,F as y,f as s,p as V,q as j,s as A,u as C,D as N,k as D,l as T,v as P,x as B}from"./entry.68beb385.js";import{_ as M}from"./PrimeVueNuxtLink.f51d0c80.js";import{g as q}from"./PTHelper.11558b27.js";const H={},E=e("h3",null,"Screen Reader",-1),F=e("p",null,"VirtualScroller has no specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element.",-1),G=e("h3",null,"Keyboard Support",-1),O=e("p",null,"Component does not include any built-in interactive elements.",-1);function R(o,r){const c=g;return p(),I(c,k({id:"accessibility",label:"Accessibility"},o.$attrs),{default:n(()=>[E,F,G,O]),_:1},16)}const W=_(H,[["render",R]]),K={data(){return{items:null,code:{basic:`<VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>`,options:`<template>
    <div class="card flex justify-content-center">
        <VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: null
        };
    },
    created() {
        this.items = Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`);
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
<\/script>`}}},mounted(){this.items=Array.from({length:1e5}).map((o,r)=>`Item #${r}`)}},U=e("p",null,[s(" VirtualScroller requires "),e("i",null,"items"),s(" as the data to display, "),e("i",null,"itemSize"),s(" for the dimensions of an item and "),e("i",null,"item"),s(" template are required on component. In addition, an initial array is required based on the total number of items to display. Size of the viewport is configured using "),e("i",null,"scrollWidth"),s(", "),e("i",null,"scrollHeight"),s(" properties directly or with CSS "),e("i",null,"width"),s(" and "),e("i",null,"height"),s(" styles. ")],-1),J={class:"card flex justify-content-center"};function Q(o,r,c,u,t,v){const l=g,a=w("VirtualScroller"),h=V;return p(),f(y,null,[i(l,S(z(o.$attrs)),{default:n(()=>[U]),_:1},16),e("div",J,[i(a,{items:t.items,itemSize:50,class:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}},{item:n(({item:d,options:m})=>[e("div",{class:x(["flex align-items-center p-2",{"surface-hover":m.odd}]),style:{height:"50px"}},b(d),3)]),_:1},8,["items"])]),i(h,{code:t.code},null,8,["code"])],64)}const X=_(K,[["render",Q]]),Y={data(){return{items:null,code:{basic:`<VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>

<VirtualScroller :items="items" :itemSize="50" :delay="150" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>

<VirtualScroller :items="items" :itemSize="50" :delay="500" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-5">
        <div>
            <span class="font-bold block mb-2">No Delay</span>
            <VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">150ms</span>
            <VirtualScroller :items="items" :itemSize="50" :delay="150" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">500ms</span>
            <VirtualScroller :items="items" :itemSize="50" :delay="500" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: null
        };
    },
    mounted() {
        this.items = Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`);
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-5">
        <div>
            <span class="font-bold block mb-2">No Delay</span>
            <VirtualScroller :items="items" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">150ms</span>
            <VirtualScroller :items="items" :itemSize="50" :delay="150" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">500ms</span>
            <VirtualScroller :items="items" :itemSize="50" :delay="500" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
<\/script>`}}},mounted(){this.items=Array.from({length:1e5}).map((o,r)=>`Item #${r}`)}},Z=e("p",null,[s("The "),e("i",null,"delay"),s(" property adds a threshold to wait in milliseconds during scrolling for render optimization.")],-1),ee={class:"card flex flex-wrap justify-content-center gap-5"},te=e("span",{class:"font-bold block mb-2"},"No Delay",-1),oe=e("span",{class:"font-bold block mb-2"},"150ms",-1),ie=e("span",{class:"font-bold block mb-2"},"500ms",-1);function re(o,r,c,u,t,v){const l=g,a=w("VirtualScroller"),h=V;return p(),f(y,null,[i(l,S(z(o.$attrs)),{default:n(()=>[Z]),_:1},16),e("div",ee,[e("div",null,[te,i(a,{items:t.items,itemSize:50,class:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}},{item:n(({item:d,options:m})=>[e("div",{class:x(["flex align-items-center p-2",{"surface-hover":m.odd}]),style:{height:"50px"}},b(d),3)]),_:1},8,["items"])]),e("div",null,[oe,i(a,{items:t.items,itemSize:50,delay:150,class:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}},{item:n(({item:d,options:m})=>[e("div",{class:x(["flex align-items-center p-2",{"surface-hover":m.odd}]),style:{height:"50px"}},b(d),3)]),_:1},8,["items"])]),e("div",null,[ie,i(a,{items:t.items,itemSize:50,delay:500,class:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}},{item:n(({item:d,options:m})=>[e("div",{class:x(["flex align-items-center p-2",{"surface-hover":m.odd}]),style:{height:"50px"}},b(d),3)]),_:1},8,["items"])])]),i(h,{code:t.code},null,8,["code"])],64)}const se=_(Y,[["render",re]]),le={data(){return{items:null,code:{basic:`<VirtualScroller :items="items" :itemSize="[50, 100]" orientation="both" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">
            <template v-for="(el, index) of item" :key="index">
                <div style="width: 100px">{{ el }}</div>
            </template>
        </div>
    </template>
</VirtualScroller>`,options:`<template>
    <div class="card flex justify-content-center">
        <VirtualScroller :items="items" :itemSize="[50, 100]" orientation="both" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">
                    <template v-for="(el, index) of item" :key="index">
                        <div style="width: 100px">{{ el }}</div>
                    </template>
                </div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: null
        };
    },
    created() {
        this.items = Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`));
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <VirtualScroller :items="items" :itemSize="[50, 100]" orientation="both" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">
                    <template v-for="(el, index) of item" :key="index">
                        <div style="width: 100px">{{ el }}</div>
                    </template>
                </div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));
<\/script>`}}},mounted(){this.items=Array.from({length:1e3}).map((o,r)=>Array.from({length:1e3}).map((c,u)=>`Item #${r}_${u}`))}},ae=e("p",null,[s("Scrolling can be enabled vertically and horizontally when "),e("i",null,"orientation"),s(" is set as "),e("i",null,"both"),s(". In this mode, "),e("i",null,"itemSize"),s(" should be an array where first value is the height of an item and second is the width.")],-1),ne={class:"card flex justify-content-center"};function ce(o,r,c,u,t,v){const l=g,a=w("VirtualScroller"),h=V;return p(),f(y,null,[i(l,S(z(o.$attrs)),{default:n(()=>[ae]),_:1},16),e("div",ne,[i(a,{items:t.items,itemSize:[50,100],orientation:"both",class:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}},{item:n(({item:d,options:m})=>[e("div",{class:x(["flex align-items-center p-2",{"surface-hover":m.odd}]),style:{height:"50px"}},[(p(!0),f(y,null,j(d,($,L)=>(p(),f("div",{key:L,style:{width:"100px"}},b($),1))),128))],2)]),_:1},8,["items"])]),i(h,{code:t.code},null,8,["code"])],64)}const de=_(le,[["render",ce]]);const me={data(){return{items:null,code:{basic:`<VirtualScroller :items="items" :itemSize="50" orientation="horizontal" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="width: 50px; writing-mode: vertical-lr;">{{ item }}</div>
    </template>
</VirtualScroller>`,options:`<template>
    <div class="card flex justify-content-center">
        <VirtualScroller :items="items" :itemSize="50" orientation="horizontal" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="width: 50px; writing-mode: vertical-lr;">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: null
        };
    },
    created() {
        this.items = Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`);
    }
};
<\/script>

<style lang="scss" scoped>
::v-deep(.p-virtualscroller) {
    .p-virtualscroller-content {
        display: flex;
        flex-direction: row;
    }
}
</style>`,composition:`<template>
    <div class="card flex justify-content-center">
        <VirtualScroller :items="items" :itemSize="50" orientation="horizontal" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="width: 50px; writing-mode: vertical-lr;">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
<\/script>

<style lang="scss" scoped>
::v-deep(.p-virtualscroller) {
    .p-virtualscroller-content {
        display: flex;
        flex-direction: row;
    }
}
</style>`}}},mounted(){this.items=Array.from({length:1e5}).map((o,r)=>`Item #${r}`)}},pe=o=>(A("data-v-2def3cea"),o=o(),C(),o),ue=pe(()=>e("p",null,[s("Setting "),e("i",null,"orientation"),s(" to "),e("i",null,"horizontal"),s(" enables scrolling horizontally. In this case, the "),e("i",null,"itemSize"),s(" should refer to the width of an item.")],-1)),he={class:"card flex justify-content-center"};function fe(o,r,c,u,t,v){const l=g,a=w("VirtualScroller"),h=V;return p(),f(y,null,[i(l,S(z(o.$attrs)),{default:n(()=>[ue]),_:1},16),e("div",he,[i(a,{items:t.items,itemSize:50,orientation:"horizontal",class:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}},{item:n(({item:d,options:m})=>[e("div",{class:x(["flex align-items-center p-2",{"surface-hover":m.odd}]),style:{width:"50px","writing-mode":"vertical-lr"}},b(d),3)]),_:1},8,["items"])]),i(h,{code:t.code,dependencies:{sass:"1.45.0","sass-loader":"8.0.2"}},null,8,["code"])],64)}const _e=_(me,[["render",fe],["__scopeId","data-v-2def3cea"]]),ye={data(){return{code:{basic:"import VirtualScroller from 'primevue/virtualscroller';"}}}};function ve(o,r,c,u,t,v){const l=g,a=V;return p(),f(y,null,[i(l,S(z(o.$attrs)),null,16),i(a,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const xe=_(ye,[["render",ve]]),be={data(){return{lazyItems:null,lazyLoading:!1,loadLazyTimeout:null,code:{basic:`<VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" lazy @lazy-load="onLazyLoad" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>`,options:`<template>
    <div class="card flex justify-content-center">
        <VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" lazy @lazy-load="onLazyLoad" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lazyItems: null,
            lazyLoading: false,
            loadLazyTimeout: null
        };
    },
    mounted() {
        this.lazyItems = Array.from({ length: 100000 });
    },
    methods: {
        onLazyLoad(event) {
            this.lazyLoading = true;

            if (this.loadLazyTimeout) {
                clearTimeout(this.loadLazyTimeout);
            }

            //imitate delay of a backend call
            this.loadLazyTimeout = setTimeout(() => {
                const { first, last } = event;
                const lazyItems = [...this.lazyItems];

                for (let i = first; i < last; i++) {
                    lazyItems[i] = \`Item #\${i}\`;
                }

                this.lazyItems = lazyItems;
                this.lazyLoading = false;

            }, Math.random() * 1000 + 250);
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <VirtualScroller :items="lazyItems" :itemSize="50" showLoader :delay="250" :loading="lazyLoading" lazy @lazy-load="onLazyLoad" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
            <template v-slot:item="{ item, options }">
                <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
            </template>
        </VirtualScroller>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const lazyItems = ref(Array.from({ length: 10000 }));
const lazyLoading = ref(false);
const loadLazyTimeout = ref();
const onLazyLoad = (event) => {
    lazyLoading.value = true;

    if (loadLazyTimeout.value) {
        clearTimeout(loadLazyTimeout.value);
    }

    //imitate delay of a backend call
    loadLazyTimeout.value = setTimeout(() => {
        const { first, last } = event;
        const _lazyItems = [...lazyItems.value];

        for (let i = first; i < last; i++) {
            _lazyItems[i] = \`Item #\${i}\`;
        }

        lazyItems.value = _lazyItems;
        lazyLoading.value = false;

    }, Math.random() * 1000 + 250);
};
<\/script>`}}},mounted(){this.lazyItems=Array.from({length:1e5})},methods:{onLazyLoad(o){this.lazyLoading=!0,this.loadLazyTimeout&&clearTimeout(this.loadLazyTimeout),this.loadLazyTimeout=setTimeout(()=>{const{first:r,last:c}=o,u=[...this.lazyItems];for(let t=r;t<c;t++)u[t]=`Item #${t}`;this.lazyItems=u,this.lazyLoading=!1},Math.random()*1e3+250)}}},ge=e("p",null,[s(" Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded on demand. To implement lazy loading, enable the "),e("i",null,"lazy"),s("property and implement "),e("i",null,"onLazyLoad"),s(" callback to return data. ")],-1),Se={class:"card flex justify-content-center"};function ze(o,r,c,u,t,v){const l=g,a=w("VirtualScroller"),h=V;return p(),f(y,null,[i(l,S(z(o.$attrs)),{default:n(()=>[ge]),_:1},16),e("div",Se,[i(a,{items:t.lazyItems,itemSize:50,showLoader:"",delay:250,loading:t.lazyLoading,lazy:"",onLazyLoad:v.onLazyLoad,class:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}},{item:n(({item:d,options:m})=>[e("div",{class:x(["flex align-items-center p-2",{"surface-hover":m.odd}]),style:{height:"50px"}},b(d),3)]),_:1},8,["items","loading","onLazyLoad"])]),i(h,{code:t.code},null,8,["code"])],64)}const $e=_(be,[["render",ze]]),we={data(){return{items:null,code:{basic:`<VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
</VirtualScroller>

<VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
    <template v-slot:item="{ item, options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
    </template>
    <template v-slot:loader="{ options }">
        <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">
            <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
        </div>
    </template>
</VirtualScroller>`,options:`<template>
    <div class="card flex flex-wrap justify-content-center gap-5">
        <div>
            <span class="font-bold block mb-2">Modal</span>
            <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">Skeleton</span>
            <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
                <template v-slot:loader="{ options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">
                        <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
                    </div>
                </template>
            </VirtualScroller>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: null
        };
    },
    mounted() {
        this.items = Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`);
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap justify-content-center gap-5">
        <div>
            <span class="font-bold block mb-2">Modal</span>
            <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
            </VirtualScroller>
        </div>
        <div>
            <span class="font-bold block mb-2">Skeleton</span>
            <VirtualScroller :items="items" :itemSize="50" showLoader :delay="250" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
                <template v-slot:item="{ item, options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item }}</div>
                </template>
                <template v-slot:loader="{ options }">
                    <div :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">
                        <Skeleton :width="options.even ? '60%' : '50%'" height="1.3rem" />
                    </div>
                </template>
            </VirtualScroller>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
<\/script>`}}},mounted(){this.items=Array.from({length:1e5}).map((o,r)=>`Item #${r}`)}},Ve=e("i",null,"showLoader",-1),Le=e("i",null,"loader",-1),Ie={class:"card flex flex-wrap justify-content-center gap-5"},De=e("span",{class:"font-bold block mb-2"},"Modal",-1),Te=e("span",{class:"font-bold block mb-2"},"Skeleton",-1);function ke(o,r,c,u,t,v){const l=M,a=g,h=w("VirtualScroller"),d=w("Skeleton"),m=V;return p(),f(y,null,[i(a,S(z(o.$attrs)),{default:n(()=>[e("p",null,[s(" Busy state is enabled by adding "),Ve,s(" property which blocks the UI with a modal by default. Alternatively, "),Le,s(" template can be used to customize items e.g. with "),i(l,{to:"/skeleton"},{default:n(()=>[s("Skeleton")]),_:1}),s(". ")])]),_:1},16),e("div",Ie,[e("div",null,[De,i(h,{items:t.items,itemSize:50,showLoader:"",delay:250,class:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}},{item:n(({item:$,options:L})=>[e("div",{class:x(["flex align-items-center p-2",{"surface-hover":L.odd}]),style:{height:"50px"}},b($),3)]),_:1},8,["items"])]),e("div",null,[Te,i(h,{items:t.items,itemSize:50,showLoader:"",delay:250,class:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}},{item:n(({item:$,options:L})=>[e("div",{class:x(["flex align-items-center p-2",{"surface-hover":L.odd}]),style:{height:"50px"}},b($),3)]),loader:n(({options:$})=>[e("div",{class:x(["flex align-items-center p-2",{"surface-hover":$.odd}]),style:{height:"50px"}},[i(d,{width:$.even?"60%":"50%",height:"1.3rem"},null,8,["width"])],2)]),_:1},8,["items"])])]),i(m,{code:t.code},null,8,["code"])],64)}const je=_(we,[["render",ke]]),Ae={data(){return{items:null,code:{basic:`<VirtualScroller
    :items="items"
    :itemSize="50"
    :pt="{
        root: {
            class: 'border-1 surface-border border-round',
            style: { width: '200px', height: '200px' }
        }
    }"
>`,options:`<template>
    <div class="card flex justify-content-center">
        <VirtualScroller
            :items="items"
            :itemSize="50"
            :pt="{
                root: {
                    class: 'border-1 surface-border border-round',
                    style: { width: '200px', height: '200px' }
                }
            }"
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: null
        };
    },
    created() {
        this.items = Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`);
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <VirtualScroller
            :items="items"
            :itemSize="50"
            :pt="{
                root: {
                    class: 'border-1 surface-border border-round',
                    style: { width: '200px', height: '200px' }
                }
            }"
        >
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));
<\/script>`}}},mounted(){this.items=Array.from({length:1e5}).map((o,r)=>`Item #${r}`)}},Ce={class:"card flex justify-content-center"};function Ne(o,r,c,u,t,v){const l=g,a=w("VirtualScroller"),h=V;return p(),f(y,null,[i(l,S(z(o.$attrs)),null,16),e("div",Ce,[i(a,{items:t.items,itemSize:50,pt:{root:{class:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}}}},{item:n(({item:d,options:m})=>[e("div",{class:x(["flex align-items-center p-2",{"surface-hover":m.odd}]),style:{height:"50px"}},b(d),3)]),_:1},8,["items"])]),i(h,{code:t.code},null,8,["code"])],64)}const Pe=_(Ae,[["render",Ne]]),Be={},Me=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/virtualscroller.jpg"})],-1);function qe(o,r){const c=g;return p(),f(y,null,[i(c,S(z(o.$attrs)),{default:n(()=>[e("p",null,b(o.$attrs.description),1)]),_:1},16),Me],64)}const He=_(Be,[["render",qe]]),Ee={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:He},{id:"pt.doc.virtualscroller",label:"VirtualScroller PT Options",component:N,data:q("VirtualScroller")},{id:"pt.demo",label:"Demo",component:Pe}]}}},Fe={class:"doc-main"},Ge=e("div",{class:"doc-intro"},[e("h1",null,"VirtualScroller Pass Through")],-1);function Oe(o,r,c,u,t,v){const l=D,a=T;return p(),f(y,null,[e("div",Fe,[Ge,i(l,{docs:t.docs},null,8,["docs"])]),i(a,{docs:t.docs},null,8,["docs"])],64)}const Re=_(Ee,[["render",Oe]]),We={},Ke=e("p",null,"List of class names used in the styled mode.",-1),Ue=P('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-virtualscroller</td><td>Container element.</td></tr><tr><td>p-virtualscroller-content</td><td>Content element.</td></tr><tr><td>p-virtualscroller-loader</td><td>Loader element.</td></tr></tbody></table></div>',1);function Je(o,r){const c=g;return p(),f(y,null,[i(c,S(z(o.$attrs)),{default:n(()=>[Ke]),_:1},16),Ue],64)}const Qe=_(We,[["render",Je]]),Xe={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Qe}]}}},Ye={class:"doc-main"},Ze=e("div",{class:"doc-intro"},[e("h1",null,"VirtualScroller Theming")],-1);function et(o,r,c,u,t,v){const l=D,a=T;return p(),f(y,null,[e("div",Ye,[Ze,i(l,{docs:t.docs},null,8,["docs"])]),i(a,{docs:t.docs},null,8,["docs"])],64)}const tt=_(Xe,[["render",et]]),ot={data(){return{docs:[{id:"import",label:"Import",component:xe},{id:"basic",label:"Basic",component:X},{id:"horizontal",label:"Horizontal",component:_e},{id:"grid",label:"Grid",component:de},{id:"delay",label:"Delay",component:se},{id:"loading",label:"Loading",component:je},{id:"lazy",label:"Lazy",component:$e},{id:"accessibility",label:"Accessibility",component:W}],ptComponent:Re,themingDoc:tt}}};function it(o,r,c,u,t,v){const l=B;return p(),I(l,{title:"Vue Virtual Scroller Component",header:"VirtualScroller",description:"VirtualScroller is a performant approach to render large amounts of data efficiently.",componentDocs:t.docs,apiDocs:["VirtualScroller"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const at=_(ot,[["render",it]]);export{at as default};
