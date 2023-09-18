import{_ as m,o as p,e as $,w as n,m as S,b as e,h as _,j as w,c as v,a as o,n as T,g as P,f as i,t as h,F as g,p as y,G as k,A as z,E as F,D as q,k as D,l as C,v as A,x as O}from"./entry.68beb385.js";import{g as j}from"./PTHelper.11558b27.js";import{_ as N}from"./PrimeVueNuxtLink.f51d0c80.js";const V={},I=e("h3",null,"Screen Reader",-1),L=e("p",null,"Timeline uses a semantic ordered list element to list the events. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the list element.",-1),R=e("h3",null,"Keyboard Support",-1),E=e("p",null,"Component does not include any interactive elements.",-1);function H(s,d){const c=_;return p(),$(c,S({id:"accessibility",label:"Accessibility"},s.$attrs),{default:n(()=>[I,L,R,E]),_:1},16)}const G=m(V,[["render",H]]),K={data(){return{events:[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],code:{basic:`<Timeline :value="events" class="w-full md:w-20rem">
    <template #content="slotProps">
        {{ slotProps.item.status }}
    </template>
</Timeline>

<Timeline :value="events" align="right" class="w-full md:w-20rem">
    <template #content="slotProps">
        {{ slotProps.item.status }}
    </template>
</Timeline>

<Timeline :value="events" align="alternate" class="w-full md:w-20rem">
    <template #content="slotProps">
        {{ slotProps.item.status }}
    </template>
</Timeline>`,options:`<template>
    <div class="card flex flex-wrap gap-6">
        <Timeline :value="events" class="w-full md:w-20rem">
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>

        <Timeline :value="events" align="right" class="w-full md:w-20rem">
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>

        <Timeline :value="events" align="alternate" class="w-full md:w-20rem">
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: [
                { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
                { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
                { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
                { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap gap-6">
        <Timeline :value="events" class="w-full md:w-20rem">
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>

        <Timeline :value="events" align="right" class="w-full md:w-20rem">
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>

        <Timeline :value="events" align="alternate" class="w-full md:w-20rem">
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

<\/script>`}}}},M=e("p",null,[i("Content location relative the line is defined with the "),e("i",null,"align"),i(" property.")],-1),U={class:"card flex flex-wrap gap-6"};function W(s,d,c,f,t,x){const a=_,l=w("Timeline"),u=y;return p(),v(g,null,[o(a,T(P(s.$attrs)),{default:n(()=>[M]),_:1},16),e("div",U,[o(l,{value:t.events,class:"w-full md:w-20rem"},{content:n(r=>[i(h(r.item.status),1)]),_:1},8,["value"]),o(l,{value:t.events,align:"right",class:"w-full md:w-20rem"},{content:n(r=>[i(h(r.item.status),1)]),_:1},8,["value"]),o(l,{value:t.events,align:"alternate",class:"w-full md:w-20rem"},{content:n(r=>[i(h(r.item.status),1)]),_:1},8,["value"])]),o(u,{code:t.code},null,8,["code"])],64)}const J=m(K,[["render",W]]),Q={data(){return{events:[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],code:{basic:`<Timeline :value="events">
    <template #content="slotProps">
        {{ slotProps.item.status }}
    </template>
</Timeline>`,options:`<template>
    <div class="card">
        <Timeline :value="events">
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: [
                { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
                { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
                { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
                { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Timeline :value="events">
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

<\/script>`}}}},X=e("p",null,[i("Timeline requires a "),e("i",null,"value"),i(" for the collection of events and "),e("i",null,"content"),i(" slot that receives an object as a parameter to return content.")],-1),Y={class:"card"};function Z(s,d,c,f,t,x){const a=_,l=w("Timeline"),u=y;return p(),v(g,null,[o(a,T(P(s.$attrs)),{default:n(()=>[X]),_:1},16),e("div",Y,[o(l,{value:t.events},{content:n(r=>[i(h(r.item.status),1)]),_:1},8,["value"])]),o(u,{code:t.code},null,8,["code"])],64)}const ee=m(Q,[["render",Z]]),te={data(){return{events:["2020","2021","2022","2023"],code:{basic:`<Timeline :value="events" layout="horizontal" align="top">
    <template #content="slotProps">
        {{ slotProps.item }}
    </template>
</Timeline>

<Timeline :value="events" layout="horizontal" align="bottom">
    <template #content="slotProps">
        {{ slotProps.item }}
    </template>
</Timeline>

<Timeline :value="events" layout="horizontal" align="alternate">
    <template #opposite> &nbsp; </template>
    <template #content="slotProps">
        {{ slotProps.item }}
    </template>
</Timeline>`,options:`<template>
    <div class="card flex flex-column gap-3">
        <Timeline :value="events" layout="horizontal" align="top">
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>

        <Timeline :value="events" layout="horizontal" align="bottom">
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>

        <Timeline :value="events" layout="horizontal" align="alternate">
            <template #opposite> &nbsp; </template>
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: ['2020', '2021', '2022', '2023']
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-column gap-3">
        <Timeline :value="events" layout="horizontal" align="top">
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>

        <Timeline :value="events" layout="horizontal" align="bottom">
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>

        <Timeline :value="events" layout="horizontal" align="alternate">
            <template #opposite> &nbsp; </template>
            <template #content="slotProps">
                {{ slotProps.item }}
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref(['2020', '2021', '2022', '2023']);
<\/script>`}}}},oe=e("p",null,[i("TimeLine orientation is controlled with the "),e("i",null,"layout"),i(" property, default is "),e("i",null,"vertical"),i(" having "),e("i",null,"horizontal"),i(" as the alternative.")],-1),ne={class:"card flex flex-column gap-3"};function ie(s,d,c,f,t,x){const a=_,l=w("Timeline"),u=y;return p(),v(g,null,[o(a,T(P(s.$attrs)),{default:n(()=>[oe]),_:1},16),e("div",ne,[o(l,{value:t.events,layout:"horizontal",align:"top"},{content:n(r=>[i(h(r.item),1)]),_:1},8,["value"]),o(l,{value:t.events,layout:"horizontal",align:"bottom"},{content:n(r=>[i(h(r.item),1)]),_:1},8,["value"]),o(l,{value:t.events,layout:"horizontal",align:"alternate"},{opposite:n(()=>[i("   ")]),content:n(r=>[i(h(r.item),1)]),_:1},8,["value"])]),o(u,{code:t.code},null,8,["code"])],64)}const se=m(te,[["render",ie]]),le={data(){return{code:{basic:"import Timeline from 'primevue/timeline';"}}}};function ae(s,d,c,f,t,x){const a=_,l=y;return p(),v(g,null,[o(a,T(P(s.$attrs)),null,16),o(l,{code:t.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const re=m(le,[["render",ae]]),ce={data(){return{events:[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],code:{basic:`<Timeline :value="events">
    <template #opposite="slotProps">
        <small class="p-text-secondary">{{slotProps.item.date}}</small>
    </template>
    <template #content="slotProps">
        {{slotProps.item.status}}
    </template>
</Timeline>`,options:`<template>
    <div class="card">
        <Timeline :value="events">
            <template #opposite="slotProps">
                <small class="p-text-secondary">{{slotProps.item.date}}</small>
            </template>
            <template #content="slotProps">
                {{slotProps.item.status}}
            </template>
        </Timeline>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: [
                { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
                { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
                { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
                { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Timeline :value="events">
            <template #opposite="slotProps">
                <small class="p-text-secondary">{{slotProps.item.date}}</small>
            </template>
            <template #content="slotProps">
                {{slotProps.item.status}}
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

<\/script>`}}}},pe=e("p",null,[i("Additional content at the other side of the line can be provided with the "),e("i",null,"opposite"),i(" property.")],-1),me={class:"card"},de={class:"p-text-secondary"};function ue(s,d,c,f,t,x){const a=_,l=w("Timeline"),u=y;return p(),v(g,null,[o(a,T(P(s.$attrs)),{default:n(()=>[pe]),_:1},16),e("div",me,[o(l,{value:t.events},{opposite:n(r=>[e("small",de,h(r.item.date),1)]),content:n(r=>[i(h(r.item.status),1)]),_:1},8,["value"])]),o(u,{code:t.code},null,8,["code"])],64)}const he=m(ce,[["render",ue]]),ve={data(){return{events:[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],code:{basic:`<Timeline :value="events" align="alternate" class="customized-timeline">
    <template #marker="slotProps">
        <span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" :style="{ backgroundColor: slotProps.item.color }">
            <i :class="slotProps.item.icon"></i>
        </span>
    </template>
    <template #content="slotProps">
        <Card>
            <template #title>
                {{ slotProps.item.status }}
            </template>
            <template #subtitle>
                {{ slotProps.item.date }}
            </template>
            <template #content>
                <img v-if="slotProps.item.image" :src="\`/images/product/\${slotProps.item.image}\`" :alt="slotProps.item.name" width="200" class="shadow-1" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                    neque quas!
                </p>
                <Button label="Read more" text></Button>
            </template>
        </Card>
    </template>
</Timeline>`,options:`<template>
    <div class="card">
        <Timeline :value="events" align="alternate" class="customized-timeline">
            <template #marker="slotProps">
                <span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>
            <template #content="slotProps">
                <Card>
                    <template #title>
                        {{ slotProps.item.status }}
                    </template>
                    <template #subtitle>
                        {{ slotProps.item.date }}
                    </template>
                    <template #content>
                        <img v-if="slotProps.item.image" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.item.image}\`" :alt="slotProps.item.name" width="200" class="shadow-1" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                            neque quas!
                        </p>
                        <Button label="Read more" text></Button>
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: [
                { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
                { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
                { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
                { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
            ]
        };
    }
};
<\/script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row !important;

            .p-timeline-event-content {
                text-align: left !important;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }

        .p-card {
            margin-top: 1rem;
        }
    }
}
</style>`,composition:`<template>
    <div class="card">
        <Timeline :value="events" align="alternate" class="customized-timeline">
            <template #marker="slotProps">
                <span class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>
            <template #content="slotProps">
                <Card>
                    <template #title>
                        {{ slotProps.item.status }}
                    </template>
                    <template #subtitle>
                        {{ slotProps.item.date }}
                    </template>
                    <template #content>
                        <img v-if="slotProps.item.image" :src="\`https://primefaces.org/cdn/primevue/images/product/\${slotProps.item.image}\`" :alt="slotProps.item.name" width="200" class="shadow-1" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                            neque quas!
                        </p>
                        <Button label="Read more" text></Button>
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

<\/script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row !important;

            .p-timeline-event-content {
                text-align: left !important;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }

        .p-card {
            margin-top: 1rem;
        }
    }
}
</style>`}}}},_e=e("p",null,"Sample implementation with custom content and styled markers.",-1),ge={class:"card"},fe=["src","alt"],xe=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ",-1);function Te(s,d,c,f,t,x){const a=_,l=w("Button"),u=w("Card"),r=w("Timeline"),B=y;return p(),v(g,null,[o(a,T(P(s.$attrs)),{default:n(()=>[_e]),_:1},16),e("div",ge,[o(r,{value:t.events,align:"alternate",class:"customized-timeline"},{marker:n(b=>[e("span",{class:"flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1",style:k({backgroundColor:b.item.color})},[e("i",{class:z(b.item.icon)},null,2)],4)]),content:n(b=>[o(u,null,{title:n(()=>[i(h(b.item.status),1)]),subtitle:n(()=>[i(h(b.item.date),1)]),content:n(()=>[b.item.image?(p(),v("img",{key:0,src:`https://primefaces.org/cdn/primevue/images/product/${b.item.image}`,alt:b.item.name,width:"200",class:"shadow-1"},null,8,fe)):F("",!0),xe,o(l,{label:"Read more",text:""})]),_:2},1024)]),_:1},8,["value"])]),o(B,{code:t.code,dependencies:{sass:"1.45.0","sass-loader":"8.0.2"}},null,8,["code"])],64)}const Pe=m(ve,[["render",Te]]),be={data(){return{events:[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],code:{basic:`<Timeline
    :value="events"
    :pt="{
        marker: { class: 'border-orange-400' }
    }"
>
    <template #content="slotProps">
        {{ slotProps.item.status }}
    </template>
</Timeline>`,options:`<template>
    <div class="card">
        <Timeline
            :value="events"
            :pt="{
                marker: { class: 'border-orange-400' }
            }"
        >
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>
    </div>
</template>

<script>
export default {
    data() {
        return {
            events: [
                { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
                { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
                { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
                { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Timeline
            :value="events"
            :pt="{
                marker: { class: 'border-orange-400' }
            }"
        >
            <template #content="slotProps">
                {{ slotProps.item.status }}
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

<\/script>`}}}},we={class:"card"};function ye(s,d,c,f,t,x){const a=_,l=w("Timeline"),u=y;return p(),v(g,null,[o(a,T(P(s.$attrs)),null,16),e("div",we,[o(l,{value:t.events,pt:{marker:{class:"border-orange-400"}}},{content:n(r=>[i(h(r.item.status),1)]),_:1},8,["value"])]),o(u,{code:t.code},null,8,["code"])],64)}const $e=m(be,[["render",ye]]),De={},Ce=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/timeline.jpg"})],-1);function Be(s,d){const c=_;return p(),v(g,null,[o(c,T(P(s.$attrs)),{default:n(()=>[e("p",null,h(s.$attrs.description),1)]),_:1},16),Ce],64)}const Se=m(De,[["render",Be]]),ke={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Se},{id:"pt.doc.timeline",label:"Timeline PT Options",component:q,data:j("Timeline")},{id:"pt.demo",label:"Demo",component:$e}]}}},ze={class:"doc-main"},Fe=e("div",{class:"doc-intro"},[e("h1",null,"Timeline Pass Through")],-1);function qe(s,d,c,f,t,x){const a=D,l=C;return p(),v(g,null,[e("div",ze,[Fe,o(a,{docs:t.docs},null,8,["docs"])]),o(l,{docs:t.docs},null,8,["docs"])],64)}const Ae=m(ke,[["render",qe]]),Oe={},je=e("p",null,"List of class names used in the styled mode.",-1),Ne=A('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-timeline</td><td>Container element.</td></tr><tr><td>p-timeline-left</td><td>Container element when alignment is left.</td></tr><tr><td>p-timeline-right</td><td>Container element when alignment is right.</td></tr><tr><td>p-timeline-top</td><td>Container element when alignment is top.</td></tr><tr><td>p-timeline-bottom</td><td>Container element when alignment is bottom.</td></tr><tr><td>p-timeline-alternate</td><td>Container element when alignment is alternating.</td></tr><tr><td>p-timeline-vertical</td><td>Container element of a vertical timeline.</td></tr><tr><td>p-timeline-horizontal</td><td>Container element of a horizontal timeline.</td></tr><tr><td>p-timeline-event</td><td>Event element.</td></tr><tr><td>p-timeline-event-opposite</td><td>Opposite of an event content.</td></tr><tr><td>p-timeline-event-content</td><td>Event content.</td></tr><tr><td>p-timeline-event-separator</td><td>Separator element of an event.</td></tr><tr><td>p-timeline-event-marker</td><td>Marker element of an event.</td></tr><tr><td>p-timeline-event-connector</td><td>Connector element of an event.</td></tr></tbody></table></div>',1);function Ve(s,d){const c=_;return p(),v(g,null,[o(c,T(P(s.$attrs)),{default:n(()=>[je]),_:1},16),Ne],64)}const Ie=m(Oe,[["render",Ve]]),Le={data(){return{code1:{basic:`
export default {
    timeline: {
        root: ({ props }) => ({
            class: [
                'flex grow',
                {
                    'flex-col': props.layout === 'vertical',
                    'flex-row flex-1': props.layout === 'horizontal'
                }
            ]
        }),
        event: ({ props, context }) => ({
            class: [
                'flex relative min-h-[70px]',
                {
                    'flex-row-reverse': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1),
                    'flex-col flex-1': props.layout === 'horizontal',
                    'flex-col-reverse ': props.align === 'bottom' || (props.layout === 'horizontal' && props.align === 'alternate' && context.index % 2 === 1)
                }
            ]
        }),
        opposite: ({ props, context }) => ({
            class: [
                'flex-1',
                {
                    'px-4': props.layout === 'vertical',
                    'py-4': props.layout === 'horizontal'
                },
                {
                    'text-right': props.align === 'left' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 0),
                    'text-left': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1)
                }
            ]
        }),
        separator: ({ props }) => ({
            class: [
                'flex items-center flex-initial',
                {
                    'flex-col': props.layout === 'vertical',
                    'flex-row': props.layout === 'horizontal'
                }
            ]
        }),
        marker: 'flex self-baseline w-4 h-4 rounded-full border-2 border-blue-500 bg-white dark:border-blue-300 dark:bg-blue-900/40',
        connector: ({ props }) => ({
            class: [
                'grow bg-gray-300 dark:bg-blue-900/40',
                {
                    'w-[2px]': props.layout === 'vertical',
                    'w-full h-[2px]': props.layout === 'horizontal'
                }
            ]
        }),
        content: ({ props, context }) => ({
            class: [
                'flex-1',
                {
                    'px-4': props.layout === 'vertical',
                    'py-4': props.layout === 'horizontal'
                },
                {
                    'text-left': props.align === 'left' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 0),
                    'text-right': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1)
                },
                {
                    'min-h-0': props.layout === 'vertical' && context.index === context.count,
                    'grow-0': props.layout === 'horizontal' && context.index === context.count
                }
            ]
        })
    }
}
`},code2:{composition:`<template>
    <div class="card flex flex-wrap gap-6">
        <Timeline :value="events" class="w-full md:w-80">
            <template #content="slotProps">
                <span class="text-gray-700 dark:text-white/80">
                    {{ slotProps.item.status }}
                </span>
            </template>
        </Timeline>

        <Timeline :value="events" align="right" class="w-full md:w-80">
            <template #content="slotProps">
                <span class="text-gray-700 dark:text-white/80">
                    {{ slotProps.item.status }}
                </span>
            </template>
        </Timeline>

        <Timeline :value="events" align="alternate" class="w-full md:w-80">
            <template #content="slotProps">
                <span class="text-gray-700 dark:text-white/80">
                    {{ slotProps.item.status }}
                </span>
            </template>
        </Timeline>
    </div>
</template>

<script setup>
import { ref } from "vue";

const events = ref([
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

<\/script>`}}}},Re=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ee(s,d,c,f,t,x){const a=N,l=y,u=_;return p(),$(u,T(P(s.$attrs)),{default:n(()=>[e("p",null,[i(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(a,{to:"/tailwind"},{default:n(()=>[i("Tailwind Customization")]),_:1}),i(" section for an example. ")]),o(l,{code:t.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Re,o(l,{code:t.code2,embedded:""},null,8,["code"])]),_:1},16)}const He=m(Le,[["render",Ee]]),Ge={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Ie},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:He}]}]}}},Ke={class:"doc-main"},Me=e("div",{class:"doc-intro"},[e("h1",null,"Timeline Theming")],-1);function Ue(s,d,c,f,t,x){const a=D,l=C;return p(),v(g,null,[e("div",Ke,[Me,o(a,{docs:t.docs},null,8,["docs"])]),o(l,{docs:t.docs},null,8,["docs"])],64)}const We=m(Ge,[["render",Ue]]),Je={data(){return{docs:[{id:"import",label:"Import",component:re},{id:"basic",label:"Basic",component:ee},{id:"alignment",label:"Alignment",component:J},{id:"opposite",label:"Opposite",component:he},{id:"template",label:"Template",component:Pe},{id:"horizontal",label:"Horizontal",component:se},{id:"accessibility",label:"Accessibility",component:G}],ptComponent:Ae,themingDoc:We}}};function Qe(s,d,c,f,t,x){const a=O;return p(),$(a,{title:"Vue Timeline Component",header:"Timeline",description:"Timeline visualizes a series of chained events.",componentDocs:t.docs,apiDocs:["Timeline"],ptTabComponent:t.ptComponent,themingDocs:t.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const et=m(Je,[["render",Qe]]);export{et as default};
