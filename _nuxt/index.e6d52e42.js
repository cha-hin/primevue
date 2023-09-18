import{_ as q,o as l,e as I,w as a,m as A,b as e,f as r,h as f,j as m,c as p,a as t,n as g,g as x,F as b,p as w,q as y,t as $,D as V,k as D,l as H,v as N,x as E}from"./entry.68beb385.js";import{g as C}from"./PTHelper.11558b27.js";import{_ as B}from"./PrimeVueNuxtLink.f51d0c80.js";const L={},U=e("h3",null,"Screen Reader",-1),F=e("p",null,[r(" TabView container is defined with the "),e("i",null,"tablist"),r(" role, as any attribute is passed to the container element "),e("i",null,"aria-labelledby"),r(" can be optionally used to specify an element to describe the TabView. Each tab header has a "),e("i",null,"tab"),r(" role along with "),e("i",null,"aria-selected"),r(" state attribute and "),e("i",null,"aria-controls"),r(" to refer to the corresponding tab content element. The content element of each tab has "),e("i",null,"tabpanel"),r(" role, an id to match the "),e("i",null,"aria-controls"),r(" of the header and "),e("i",null,"aria-labelledby"),r(" reference to the header as the accessible name. ")],-1),M=e("h3",null,"Tab Header Keyboard Support",-1),z=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus through the header.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Activates the focused tab header.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Activates the focused tab header.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Moves focus to the next header. If focus is on the last header, moves focus to the first header.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Moves focus to the previous header. If focus is on the first header, moves focus to the last header.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the last header.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the first header.")]),e("tr",null,[e("td",null,[e("i",null,"pageUp")]),e("td",null,"Moves scroll position to first header.")]),e("tr",null,[e("td",null,[e("i",null,"pageDown")]),e("td",null,"Moves scroll position to last header.")])])])],-1);function O(n,s){const c=f;return l(),I(c,A({id:"accessibility",label:"Accessibility"},n.$attrs),{default:a(()=>[U,F,M,z]),_:1},16)}const j=q(L,[["render",O]]),R={data(){return{code:{basic:`<TabView>
    <TabPanel header="Header I">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </TabPanel>
    <TabPanel header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </TabPanel>
    <TabPanel header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </TabPanel>
</TabView>
                `,options:`<template>
    <div class="card">
        <TabView>
            <TabPanel header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </TabPanel>
            <TabPanel header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </TabPanel>
            <TabPanel header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
<\/script>
    `,composition:`<template>
    <div class="card">
        <TabView>
            <TabPanel header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </TabPanel>
            <TabPanel header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </TabPanel>
            <TabPanel header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script setup>
<\/script>
    `}}}},K=e("p",null,"TabView consists of one or more TabPanel elements.",-1),W={class:"card"},G=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),J=e("p",null," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1),Q=e("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);function X(n,s,c,T,i,_){const u=f,o=m("TabPanel"),d=m("TabView"),v=w;return l(),p(b,null,[t(u,g(x(n.$attrs)),{default:a(()=>[K]),_:1},16),e("div",W,[t(d,null,{default:a(()=>[t(o,{header:"Header I"},{default:a(()=>[G]),_:1}),t(o,{header:"Header II"},{default:a(()=>[J]),_:1}),t(o,{header:"Header III"},{default:a(()=>[Q]),_:1})]),_:1})]),t(v,{code:i.code},null,8,["code"])],64)}const Y=q(R,[["render",X]]),Z={data(){return{active:0,code:{basic:`<div class="py-2">
    <Button @click="active = 0" text label="Activate 1st" />
    <Button @click="active = 1" text class="mr-2" label="Activate 2nd" />
    <Button @click="active = 2" text class="mr-2" label="Activate 3rd" />
</div>

<TabView v-model:activeIndex="active">
    <TabPanel header="Header I">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </TabPanel>
    <TabPanel header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </TabPanel>
    <TabPanel header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </TabPanel>
</TabView>`,options:`<template>
    <div class="card">
        <div class="py-2">
            <Button @click="active = 0" text label="Activate 1st" />
            <Button @click="active = 1" text class="mr-2" label="Activate 2nd" />
            <Button @click="active = 2" text class="mr-2" label="Activate 3rd" />
        </div>

        <TabView v-model:activeIndex="active">
            <TabPanel header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </TabPanel>
            <TabPanel header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </TabPanel>
            <TabPanel header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <div class="py-2">
            <Button @click="active = 0" text label="Activate 1st" />
            <Button @click="active = 1" text class="mr-2" label="Activate 2nd" />
            <Button @click="active = 2" text class="mr-2" label="Activate 3rd" />
        </div>

        <TabView v-model:activeIndex="active">
            <TabPanel header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </TabPanel>
            <TabPanel header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </TabPanel>
            <TabPanel header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const active = ref(0);
<\/script>`}}}},ee=e("p",null,[r("Tabs can be controlled programmatically using "),e("i",null,"activeIndex"),r(" property.")],-1),te={class:"card"},ie={class:"py-2"},ae=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),oe=e("p",null," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1),ne=e("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);function se(n,s,c,T,i,_){const u=f,o=m("Button"),d=m("TabPanel"),v=m("TabView"),h=w;return l(),p(b,null,[t(u,g(x(n.$attrs)),{default:a(()=>[ee]),_:1},16),e("div",te,[e("div",ie,[t(o,{onClick:s[0]||(s[0]=P=>i.active=0),text:"",label:"Activate 1st"}),t(o,{onClick:s[1]||(s[1]=P=>i.active=1),text:"",class:"mr-2",label:"Activate 2nd"}),t(o,{onClick:s[2]||(s[2]=P=>i.active=2),text:"",class:"mr-2",label:"Activate 3rd"})]),t(v,{activeIndex:i.active,"onUpdate:activeIndex":s[3]||(s[3]=P=>i.active=P)},{default:a(()=>[t(d,{header:"Header I"},{default:a(()=>[ae]),_:1}),t(d,{header:"Header II"},{default:a(()=>[oe]),_:1}),t(d,{header:"Header III"},{default:a(()=>[ne]),_:1})]),_:1},8,["activeIndex"])]),t(h,{code:i.code},null,8,["code"])],64)}const ue=q(Z,[["render",se]]),le={data(){return{code:{basic:`<TabView>
    <TabPanel header="Header I">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
    </TabPanel>
    <TabPanel header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </TabPanel>
    <TabPanel header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </TabPanel>
    <TabPanel header="Header IV" :disabled="true"></TabPanel>
</TabView>`,options:`<template>
    <div class="card">
        <TabView>
            <TabPanel header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </TabPanel>
            <TabPanel header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </TabPanel>
            <TabPanel header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
            <TabPanel header="Header IV" :disabled="true"></TabPanel>
        </TabView>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <TabView>
            <TabPanel header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </TabPanel>
            <TabPanel header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </TabPanel>
            <TabPanel header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
            <TabPanel header="Header IV" :disabled="true"></TabPanel>
        </TabView>
    </div>
</template>

<script setup>
<\/script>`}}}},re=e("p",null,[r("Enabling "),e("i",null,"disabled"),r(" property of a TabPanel prevents user interaction.")],-1),ce={class:"card"},de=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),me=e("p",null," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1),pe=e("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);function be(n,s,c,T,i,_){const u=f,o=m("TabPanel"),d=m("TabView"),v=w;return l(),p(b,null,[t(u,g(x(n.$attrs)),{default:a(()=>[re]),_:1},16),e("div",ce,[t(d,null,{default:a(()=>[t(o,{header:"Header I"},{default:a(()=>[de]),_:1}),t(o,{header:"Header II"},{default:a(()=>[me]),_:1}),t(o,{header:"Header III"},{default:a(()=>[pe]),_:1}),t(o,{header:"Header IV",disabled:!0})]),_:1})]),t(v,{code:i.code},null,8,["code"])],64)}const qe=q(le,[["render",be]]),ve={data(){return{tabs:[{title:"Tab 1",content:"Tab 1 Content"},{title:"Tab 2",content:"Tab 2 Content"},{title:"Tab 3",content:"Tab 3 Content"}],code:{basic:`<TabView>
    <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
        <p>{{ tab.content }}</p>
    </TabPanel>
</TabView>`,options:`<template>
    <div class="card">
        <TabView>
            <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p>{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                { title: 'Tab 1', content: 'Tab 1 Content' },
                { title: 'Tab 2', content: 'Tab 2 Content' },
                { title: 'Tab 3', content: 'Tab 3 Content' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <TabView>
            <TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p>{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref([
    { title: 'Tab 1', content: 'Tab 1 Content' },
    { title: 'Tab 2', content: 'Tab 2 Content' },
    { title: 'Tab 3', content: 'Tab 3 Content' }
]);
<\/script>`}}}},he=e("p",null,[r("Tabs can be generated dynamically using the standard "),e("i",null,"v-for"),r(" directive.")],-1),_e={class:"card"};function fe(n,s,c,T,i,_){const u=f,o=m("TabPanel"),d=m("TabView"),v=w;return l(),p(b,null,[t(u,g(x(n.$attrs)),{default:a(()=>[he]),_:1},16),e("div",_e,[t(d,null,{default:a(()=>[(l(!0),p(b,null,y(i.tabs,h=>(l(),I(o,{key:h.title,header:h.title},{default:a(()=>[e("p",null,$(h.content),1)]),_:2},1032,["header"]))),128))]),_:1})]),t(v,{code:i.code},null,8,["code"])],64)}const Te=q(ve,[["render",fe]]),ge={data(){return{code:{basic:`import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';`}}}};function xe(n,s,c,T,i,_){const u=f,o=w;return l(),p(b,null,[t(u,g(x(n.$attrs)),null,16),t(o,{code:i.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const we=q(ge,[["render",xe]]),Pe={data(){return{scrollableTabs:Array.from({length:50},(n,s)=>({title:`Tab ${s+1}`,content:`Tab ${s+1} Content`})),code:{basic:`<TabView :scrollable="true">
    <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
        <p>{{ tab.content }}</p>
    </TabPanel>
</TabView>`,options:`<template>
    <div class="card">
        <TabView :scrollable="true">
            <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
                <p>{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrollableTabs: Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` }))
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <TabView :scrollable="true">
            <TabPanel v-for="tab in scrollableTabs" :key="tab.title" :header="tab.title">
                <p>{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const scrollableTabs = ref(Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` })));
<\/script>`}}}},Ie=e("p",null,[r("Adding "),e("i",null,"scrollable"),r(" property displays navigational buttons at each side to scroll between tabs.")],-1),$e={class:"card"};function ye(n,s,c,T,i,_){const u=f,o=m("TabPanel"),d=m("TabView"),v=w;return l(),p(b,null,[t(u,g(x(n.$attrs)),{default:a(()=>[Ie]),_:1},16),e("div",$e,[t(d,{scrollable:!0},{default:a(()=>[(l(!0),p(b,null,y(i.scrollableTabs,h=>(l(),I(o,{key:h.title,header:h.title},{default:a(()=>[e("p",null,$(h.content),1)]),_:2},1032,["header"]))),128))]),_:1})]),t(v,{code:i.code},null,8,["code"])],64)}const Ve=q(Pe,[["render",ye]]),Ce={data(){return{code:{basic:`<TabView class="tabview-custom">
    <TabPanel>
        <template #header>
            <i class="pi pi-calendar mr-2"></i>
            <span>Header I</span>
        </template>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </TabPanel>
    <TabPanel>
        <template #header>
            <span>Header II</span>
            <i class="pi pi-user ml-2"></i>
        </template>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </TabPanel>
    <TabPanel>
        <template #header>
            <i class="pi pi-search mr-2"></i>
            <span>Header III</span>
            <i class="pi pi-cog ml-2"></i>
        </template>
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </TabPanel>
</TabView>`,options:`<template>
    <div class="card">
        <TabView class="tabview-custom">
            <TabPanel>
                <template #header>
                    <i class="pi pi-calendar mr-2"></i>
                    <span>Header I</span>
                </template>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <span>Header II</span>
                    <i class="pi pi-user ml-2"></i>
                </template>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <i class="pi pi-search mr-2"></i>
                    <span>Header III</span>
                    <i class="pi pi-cog ml-2"></i>
                </template>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <TabView class="tabview-custom">
            <TabPanel>
                <template #header>
                    <i class="pi pi-calendar ml-2"></i>
                    <span>Header I</span>
                </template>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <span>Header II</span>
                    <i class="pi pi-user ml-2"></i>
                </template>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </TabPanel>
            <TabPanel>
                <template #header>
                    <i class="pi pi-search mr-2"></i>
                    <span>Header III</span>
                    <i class="pi pi-cog ml-2"></i>
                </template>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script setup>
<\/script>`}}}},De=e("p",null,"Custom content for the title section of a panel is defined using the header template.",-1),He={class:"card"},Se=e("i",{class:"pi pi-calendar mr-2"},null,-1),ke=e("span",null,"Header I",-1),Ae=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Ne=e("span",null,"Header II",-1),Ee=e("i",{class:"pi pi-user ml-2"},null,-1),Be=e("p",null," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1),Le=e("i",{class:"pi pi-search mr-2"},null,-1),Ue=e("span",null,"Header III",-1),Fe=e("i",{class:"pi pi-cog ml-2"},null,-1),Me=e("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);function ze(n,s,c,T,i,_){const u=f,o=m("TabPanel"),d=m("TabView"),v=w;return l(),p(b,null,[t(u,g(x(n.$attrs)),{default:a(()=>[De]),_:1},16),e("div",He,[t(d,{class:"tabview-custom"},{default:a(()=>[t(o,null,{header:a(()=>[Se,ke]),default:a(()=>[Ae]),_:1}),t(o,null,{header:a(()=>[Ne,Ee]),default:a(()=>[Be]),_:1}),t(o,null,{header:a(()=>[Le,Ue,Fe]),default:a(()=>[Me]),_:1})]),_:1})]),t(v,{code:i.code},null,8,["code"])],64)}const Oe=q(Ce,[["render",ze]]),je={data(){return{tabs:Array.from({length:3},(n,s)=>({title:`Header ${s+1}`,content:`Tab ${s+1} Content`})),code:{basic:`<TabView>
    <TabPanel v-for="(tab, index) in tabs" :key="tab.title" :header="tab.title"
        :pt="{
            headerAction: ({ props, parent }) => ({
                class: panelClass(props, parent, index)
            })
        }">
        <p>{{ tab.content }}</p>
    </TabPanel>
</TabView>`,options:`<template>
    <div class="card">
        <TabView>
            <TabPanel v-for="(tab, index) in tabs" :key="tab.title" :header="tab.title"
                :pt="{
                    headerAction: ({ props, parent }) => ({
                        class: panelClass(props, parent, index)
                    })
                }">
                <p>{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: Array.from({ length: 3 }, (_, i) => ({
                title: \`Header \${i + 1}\`,
                content: \`Tab \${i + 1} Content\`
            }))
        }
    },
    methods: {
        panelClass(props, parent, index) {
            return [
                {
                    'bg-primary': parent.state.d_activeIndex === index
                }
            ];
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card">
        <TabView>
            <TabPanel v-for="(tab, index) in tabs" :key="tab.title" :header="tab.title"
                :pt="{
                    headeraction: ({ props, parent }) => ({
                        class: panelClass(props, parent, index)
                    })
                }">
                <p>{{ tab.content }}</p>
            </TabPanel>
        </TabView>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref(Array.from({ length: 3 }, (_, i) => ({
    title: \`Header \${i + 1}\`,
    content: \`Tab \${i + 1} Content\`
})));

const panelClass = (props, parent, index) => {
    return [
        {
            'bg-primary': parent.state.d_activeIndex === index
        }
    ];
};
<\/script>`}}},methods:{panelClass(n,s,c){return[{"bg-primary":s.state.d_activeIndex===c}]}}},Re={class:"card"};function Ke(n,s,c,T,i,_){const u=f,o=m("TabPanel"),d=m("TabView"),v=w;return l(),p(b,null,[t(u,g(x(n.$attrs)),null,16),e("div",Re,[t(d,null,{default:a(()=>[(l(!0),p(b,null,y(i.tabs,(h,P)=>(l(),I(o,{key:h.title,header:h.title,pt:{headerAction:({props:S,parent:k})=>({class:_.panelClass(S,k,P)})}},{default:a(()=>[e("p",null,$(h.content),1)]),_:2},1032,["header","pt"]))),128))]),_:1})]),t(v,{code:i.code},null,8,["code"])],64)}const We=q(je,[["render",Ke]]),Ge={},Je=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/tabview.jpg"})],-1);function Qe(n,s){const c=f;return l(),p(b,null,[t(c,g(x(n.$attrs)),{default:a(()=>[e("p",null,$(n.$attrs.description),1)]),_:1},16),Je],64)}const Xe=q(Ge,[["render",Qe]]),Ye={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Xe},{id:"pt.doc.tabview",label:"TabView PT Options",component:V,data:C("TabView")},{id:"pt.doc.tabpanel",label:"TabPanel PT Options",component:V,data:C("TabPanel")},{id:"pt.demo",label:"Demo",component:We}]}}},Ze={class:"doc-main"},et=e("div",{class:"doc-intro"},[e("h1",null,"TabView Pass Through")],-1);function tt(n,s,c,T,i,_){const u=D,o=H;return l(),p(b,null,[e("div",Ze,[et,t(u,{docs:i.docs},null,8,["docs"])]),t(o,{docs:i.docs},null,8,["docs"])],64)}const it=q(Ye,[["render",tt]]),at={},ot=e("p",null,"List of class names used in the styled mode.",-1),nt=N('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-tabview</td><td>Container element.</td></tr><tr><td>p-tabview-nav</td><td>Container of headers.</td></tr><tr><td>p-tabview-selected</td><td>Selected tab header.</td></tr><tr><td>p-tabview-panels</td><td>Container panels.</td></tr><tr><td>p-tabview-panel</td><td>Content of a tab.</td></tr></tbody></table></div>',1);function st(n,s){const c=f;return l(),p(b,null,[t(c,g(x(n.$attrs)),{default:a(()=>[ot]),_:1},16),nt],64)}const ut=q(at,[["render",st]]),lt={data(){return{code1:{basic:`
export default {
    tabview: {
        navContainer: ({ props }) => ({
            class: [
                'relative', // Relative positioning.
                { 'overflow-hidden': props.scrollable } // Overflow condition.
            ]
        }),
        navContent: 'overflow-y-hidden overscroll-contain overscroll-auto scroll-smooth [&::-webkit-scrollbar]:hidden', // Overflow and scrollbar styles.
        previousButton: {
            class: ['h-full flex items-center justify-center absolute top-0 z-20', 'left-0', 'bg-white text-blue-500 w-12 shadow-md rounded-none', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ]'] // Flex and absolute positioning styles.
        },
        nextButton: {
            class: ['h-full flex items-center justify-center absolute top-0 z-20', 'right-0', 'bg-white text-blue-500 w-12 shadow-md rounded-none', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 '] // Flex and absolute positioning styles.
        },
        nav: {
            class: ['flex flex-1 list-none m-0 p-0', 'bg-white border border-gray-300 border-0 border-b-2', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 '] // Flex, list, margin, padding, and border styles.
        },
        tabpanel: {
            header: ({ props }) => ({
                class: ['mr-0', { 'cursor-default pointer-events-none select-none user-select-none opacity-60': props?.disabled }] // Margin and condition-based styles.
            }),
            headerAction: ({ parent, context }) => ({
                class: [
                    'items-center cursor-pointer flex overflow-hidden relative select-none text-decoration-none user-select-none', // Flex and overflow styles.
                    'border-b-2 p-5 font-bold rounded-t-lg transition-shadow duration-200 m-0', // Border, padding, font, and transition styles.
                    'transition-colors duration-200', // Transition duration style.
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // Focus styles.
                    {
                        'border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80':
                            parent.state.d_activeIndex !== context.index, // Condition-based hover styles.
                        'bg-white border-blue-500 text-blue-500 dark:bg-gray-900 dark:border-blue-300 dark:text-blue-300': parent.state.d_activeIndex === context.index // Condition-based active styles.
                    }
                ],
                style: 'margin-bottom:-2px' // Negative margin style.
            }),
            headerTitle: {
                class: ['leading-none whitespace-nowrap'] // Leading and whitespace styles.
            },
            content: {
                class: ['bg-white p-5 border-0 text-gray-700 rounded-bl-2xl rounded-br-2xl', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80'] // Background, padding, border, and text styles.
            }
        }
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <TabView>
            <TabPanel header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </TabPanel>
            <TabPanel header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </TabPanel>
            <TabPanel header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </TabPanel>
            <TabPanel header="Header IV" :disabled="true"></TabPanel>
        </TabView>
    </div>
</template>

<script setup>
<\/script>`}}}},rt=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function ct(n,s,c,T,i,_){const u=B,o=w,d=f;return l(),I(d,g(x(n.$attrs)),{default:a(()=>[e("p",null,[r(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),t(u,{to:"/tailwind"},{default:a(()=>[r("Tailwind Customization")]),_:1}),r(" section for an example. ")]),t(o,{code:i.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),rt,t(o,{code:i.code2,embedded:""},null,8,["code"])]),_:1},16)}const dt=q(lt,[["render",ct]]),mt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:ut},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:dt}]}]}}},pt={class:"doc-main"},bt=e("div",{class:"doc-intro"},[e("h1",null,"TabView Theming")],-1);function qt(n,s,c,T,i,_){const u=D,o=H;return l(),p(b,null,[e("div",pt,[bt,t(u,{docs:i.docs},null,8,["docs"])]),t(o,{docs:i.docs},null,8,["docs"])],64)}const vt=q(mt,[["render",qt]]),ht={data(){return{docs:[{id:"import",label:"Import",component:we},{id:"basic",label:"Basic",component:Y},{id:"dynamic",label:"Dynamic",component:Te},{id:"controlled",label:"Controlled",component:ue},{id:"scrollable",label:"Scrollable",component:Ve},{id:"disabled",label:"Disabled",component:qe},{id:"template",label:"Template",component:Oe},{id:"accessibility",label:"Accessibility",component:j}],ptComponent:it,themingDoc:vt}}};function _t(n,s,c,T,i,_){const u=E;return l(),I(u,{title:"Vue Tabs Component",header:"TabView",description:"TabView is a container component to group content with tabs.",componentDocs:i.docs,apiDocs:["TabView","TabPanel"],ptTabComponent:i.ptComponent,themingDocs:i.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const xt=q(ht,[["render",_t]]);export{xt as default};
