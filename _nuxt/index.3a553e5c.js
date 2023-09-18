import{_ as p,o as d,e as y,w as t,m as L,b as e,f as u,h as f,j as m,c as b,a as i,n as g,g as A,F as q,p as I,q as S,t as C,s as U,u as B,D,k as N,l as E,v as P,x as V}from"./entry.68beb385.js";import{g as H}from"./PTHelper.11558b27.js";import{_ as M}from"./PrimeVueNuxtLink.f51d0c80.js";const z={},F=e("h3",null,"Screen Reader",-1),O=e("p",null,[u(" Accordion header elements have a "),e("i",null,"button"),u(" role and use "),e("i",null,"aria-controls"),u(" to define the id of the content section along with "),e("i",null,"aria-expanded"),u(" for the visibility state. The value to read a header element defaults to the value of the "),e("i",null,"header"),u(" property and can be customized by defining an "),e("i",null,"aria-label"),u(" or "),e("i",null,"aria-labelledby"),u(" via the "),e("i",null,"headerActionProps"),u(" property. ")],-1),R=e("p",null,[u("The content uses "),e("i",null,"region"),u(" role, defines an id that matches the "),e("i",null,"aria-controls"),u(" of the header and "),e("i",null,"aria-labelledby"),u(" referring to the id of the header.")],-1),j=e("h3",null,"Header Keyboard Support",-1),K=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next focusable element in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),u(" + "),e("i",null,"tab")]),e("td",null,"Moves focus to the previous focusable element in the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Toggles the visibility of the content.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Toggles the visibility of the content.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the next header. If focus is on the last header, moves focus to the first header.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the previous header. If focus is on the first header, moves focus to the last header.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first header.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last header.")])])])],-1);function W(a,s){const r=f;return d(),y(r,L({id:"accessibility",label:"Accessibility"},a.$attrs),{default:t(()=>[F,O,R,j,K]),_:1},16)}const G=p(z,[["render",W]]),J={data(){return{code:{basic:`<Accordion :activeIndex="0">
    <AccordionTab header="Header I">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
</Accordion>`,options:`<template>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script setup>
<\/script>`}}}},Q=e("p",null,[u("Accordion consists of one or more AccordionTab elements which are collapsed by default. Tab to expand initially can be defined with the "),e("i",null,"activeIndex"),u(" property.")],-1),X={class:"card"},Y=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Z=e("p",null," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1),ee=e("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);function ie(a,s,r,_,o,h){const c=f,n=m("AccordionTab"),l=m("Accordion"),v=I;return d(),b(q,null,[i(c,g(A(a.$attrs)),{default:t(()=>[Q]),_:1},16),e("div",X,[i(l,{activeIndex:0},{default:t(()=>[i(n,{header:"Header I"},{default:t(()=>[Y]),_:1}),i(n,{header:"Header II"},{default:t(()=>[Z]),_:1}),i(n,{header:"Header III"},{default:t(()=>[ee]),_:1})]),_:1})]),i(v,{code:o.code},null,8,["code"])],64)}const te=p(J,[["render",ie]]),oe={data(){return{active:0,code:{basic:`<div class="pb-3">
    <Button @click="active = 0" text label="Activate 1st" />
    <Button @click="active = 1" text class="mr-2" label="Activate 2nd" />
    <Button @click="active = 2" text class="mr-2" label="Activate 3rd" />
</div>

<Accordion v-model:activeIndex="active">
    <AccordionTab header="Header I">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
</Accordion>`,options:`<template>
    <div class="card">
        <div class="pb-3">
            <Button @click="active = 0" text label="Activate 1st" />
            <Button @click="active = 1" text class="mr-2" label="Activate 2nd" />
            <Button @click="active = 2" text class="mr-2" label="Activate 3rd" />
        </div>

        <Accordion v-model:activeIndex="active">
            <AccordionTab header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0
            }
        }
    }
<\/script>`,composition:`<template>
    <div class="card">
        <div class="pb-3">
            <Button @click="active = 0" text label="Activate 1st" />
            <Button @click="active = 1" text class="mr-2" label="Activate 2nd" />
            <Button @click="active = 2" text class="mr-2" label="Activate 3rd" />
        </div>

        <Accordion v-model:activeIndex="active">
            <AccordionTab header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const active = ref(0);
<\/script>`}}}},ae=e("p",null,[u("Accordion can be controlled programmatically using a binding to "),e("i",null,"activeIndex"),u(" along with "),e("i",null,"v-model"),u(" to update the active index.")],-1),ne={class:"card"},ue={class:"pb-3"},se=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),ce=e("p",null," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1),re=e("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);function de(a,s,r,_,o,h){const c=f,n=m("Button"),l=m("AccordionTab"),v=m("Accordion"),T=I;return d(),b(q,null,[i(c,g(A(a.$attrs)),{default:t(()=>[ae]),_:1},16),e("div",ne,[e("div",ue,[i(n,{onClick:s[0]||(s[0]=$=>o.active=0),text:"",label:"Activate 1st"}),i(n,{onClick:s[1]||(s[1]=$=>o.active=1),text:"",class:"mr-2",label:"Activate 2nd"}),i(n,{onClick:s[2]||(s[2]=$=>o.active=2),text:"",class:"mr-2",label:"Activate 3rd"})]),i(v,{activeIndex:o.active,"onUpdate:activeIndex":s[3]||(s[3]=$=>o.active=$)},{default:t(()=>[i(l,{header:"Header I"},{default:t(()=>[se]),_:1}),i(l,{header:"Header II"},{default:t(()=>[ce]),_:1}),i(l,{header:"Header III"},{default:t(()=>[re]),_:1})]),_:1},8,["activeIndex"])]),i(T,{code:o.code},null,8,["code"])],64)}const le=p(oe,[["render",de]]),me={data(){return{code:{basic:`<Accordion :multiple="true" :activeIndex="[0]">
    <AccordionTab header="Header I">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
    <AccordionTab header="Header IV" :disabled="true"> </AccordionTab>
</Accordion>`,options:`<template>
    <div class="card">
        <Accordion :multiple="true" :activeIndex="[0]">
            <AccordionTab header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
            <AccordionTab header="Header IV" :disabled="true"> </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Accordion :multiple="true" :activeIndex="[0]">
            <AccordionTab header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
            <AccordionTab header="Header IV" :disabled="true"> </AccordionTab>
        </Accordion>
    </div>
</template>

<script setup>
<\/script>`}}}},pe=e("p",null,[u("Enabling "),e("i",null,"disabled"),u(" property of an AccordionTab prevents user interaction.")],-1),be={class:"card"},qe=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),ve=e("p",null," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1),he=e("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);function fe(a,s,r,_,o,h){const c=f,n=m("AccordionTab"),l=m("Accordion"),v=I;return d(),b(q,null,[i(c,g(A(a.$attrs)),{default:t(()=>[pe]),_:1},16),e("div",be,[i(l,{multiple:!0,activeIndex:[0]},{default:t(()=>[i(n,{header:"Header I"},{default:t(()=>[qe]),_:1}),i(n,{header:"Header II"},{default:t(()=>[ve]),_:1}),i(n,{header:"Header III"},{default:t(()=>[he]),_:1}),i(n,{header:"Header IV",disabled:!0})]),_:1})]),i(v,{code:o.code},null,8,["code"])],64)}const _e=p(me,[["render",fe]]),ge={data(){return{tabs:[{title:"Title 1",content:"Content 1"},{title:"Title 2",content:"Content 2"},{title:"Title 3",content:"Content 3"}],code:{basic:`<Accordion :activeIndex="0">
    <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
        <p>{{ tab.content }}</p>
    </AccordionTab>
</Accordion>`,options:`<template>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p>{{ tab.content }}</p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                { title: 'Title 1', content: 'Content 1' },
                { title: 'Title 2', content: 'Content 2' },
                { title: 'Title 3', content: 'Content 3' }
            ]
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab v-for="tab in tabs" :key="tab.title" :header="tab.title">
                <p>{{ tab.content }}</p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = ref([
    { title: 'Title 1', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' }
]);
<\/script>`}}}},Ae=e("p",null,[u("AccordionTabs can be generated dynamically using the standard "),e("i",null,"v-for"),u(" directive.")],-1),xe={class:"card"};function Te(a,s,r,_,o,h){const c=f,n=m("AccordionTab"),l=m("Accordion"),v=I;return d(),b(q,null,[i(c,g(A(a.$attrs)),{default:t(()=>[Ae]),_:1},16),e("div",xe,[i(l,{activeIndex:0},{default:t(()=>[(d(!0),b(q,null,S(o.tabs,T=>(d(),y(n,{key:T.title,header:T.title},{default:t(()=>[e("p",null,C(T.content),1)]),_:2},1032,["header"]))),128))]),_:1})]),i(v,{code:o.code},null,8,["code"])],64)}const Ie=p(ge,[["render",Te]]),$e={data(){return{code:{basic:`import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';`}}}};function ye(a,s,r,_,o,h){const c=f,n=I;return d(),b(q,null,[i(c,g(A(a.$attrs)),null,16),i(n,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Ce=p($e,[["render",ye]]),De={data(){return{code:{basic:`<Accordion :multiple="true" :activeIndex="[0]">
    <AccordionTab header="Header I">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
</Accordion>`,options:`<template>
    <div class="card">
        <Accordion :multiple="true" :activeIndex="[0]">
            <AccordionTab header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
<\/script>`,composition:`<template>
    <div class="card">
        <Accordion :multiple="true" :activeIndex="[0]">
            <AccordionTab header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script setup>
<\/script>`}}}},He=e("p",null,[u("Only one tab at a time can be active by default, enabling "),e("i",null,"multiple"),u(" property changes this behavior to allow multiple tabs. In this case "),e("i",null,"activeIndex"),u(" needs to be an array.")],-1),Se={class:"card"},Ne=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Ee=e("p",null," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1),ke=e("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1);function we(a,s,r,_,o,h){const c=f,n=m("AccordionTab"),l=m("Accordion"),v=I;return d(),b(q,null,[i(c,g(A(a.$attrs)),{default:t(()=>[He]),_:1},16),e("div",Se,[i(l,{multiple:!0,activeIndex:[0]},{default:t(()=>[i(n,{header:"Header I"},{default:t(()=>[Ne]),_:1}),i(n,{header:"Header II"},{default:t(()=>[Ee]),_:1}),i(n,{header:"Header III"},{default:t(()=>[ke]),_:1})]),_:1})]),i(v,{code:o.code},null,8,["code"])],64)}const Le=p(De,[["render",we]]);const Ue={data(){return{code:{basic:`<Accordion class="accordion-custom" :activeIndex="0">
    <AccordionTab>
        <template #header>
            <i class="pi pi-calendar"></i>
            <span>Header I</span>
        </template>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </AccordionTab>
    <AccordionTab>
        <template #header>
            <i class="pi pi-user"></i>
            <span>Header II</span>
        </template>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab>
        <template #header>
            <i class="pi pi-search"></i>
            <span>Header III</span>
            <i class="pi pi-cog"></i>
        </template>
        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
</Accordion>`,options:`<template>
    <div class="card">
        <Accordion class="accordion-custom" :activeIndex="0">
            <AccordionTab>
                <template #header>
                    <i class="pi pi-calendar"></i>
                    <span>Header I</span>
                </template>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <i class="pi pi-user"></i>
                    <span>Header II</span>
                </template>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <i class="pi pi-search"></i>
                    <span>Header III</span>
                    <i class="pi pi-cog"></i>
                </template>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script>
<\/script>

<style scoped>
.accordion-custom i span {
    vertical-align: middle;
}

.accordion-custom span {
    margin: 0 0.5rem;
}

.p-accordion p {
    line-height: 1.5;
    margin: 0;
}
</style>`,composition:`<template>
    <div class="card">
        <Accordion class="accordion-custom" :activeIndex="0">
            <AccordionTab>
                <template #header>
                    <i class="pi pi-calendar"></i>
                    <span>Header I</span>
                </template>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <i class="pi pi-user"></i>
                    <span>Header II</span>
                </template>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab>
                <template #header>
                    <i class="pi pi-search"></i>
                    <span>Header III</span>
                    <i class="pi pi-cog"></i>
                </template>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script setup>
<\/script>

<style scoped>
.accordion-custom i span {
    vertical-align: middle;
}

.accordion-custom span {
    margin: 0 0.5rem;
}

.p-accordion p {
    line-height: 1.5;
    margin: 0;
}
</style>`}}}},x=a=>(U("data-v-7ec94f4f"),a=a(),B(),a),Be=x(()=>e("p",null,[u("Title section of a tab is customized with the "),e("i",null,"header"),u(" slot.")],-1)),Pe={class:"card"},Ve=x(()=>e("i",{class:"pi pi-calendar"},null,-1)),Me=x(()=>e("span",null,"Header I",-1)),ze=x(()=>e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)),Fe=x(()=>e("i",{class:"pi pi-user"},null,-1)),Oe=x(()=>e("span",null,"Header II",-1)),Re=x(()=>e("p",null," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)),je=x(()=>e("i",{class:"pi pi-search"},null,-1)),Ke=x(()=>e("span",null,"Header III",-1)),We=x(()=>e("i",{class:"pi pi-cog"},null,-1)),Ge=x(()=>e("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1));function Je(a,s,r,_,o,h){const c=f,n=m("AccordionTab"),l=m("Accordion"),v=I;return d(),b(q,null,[i(c,g(A(a.$attrs)),{default:t(()=>[Be]),_:1},16),e("div",Pe,[i(l,{class:"accordion-custom",activeIndex:0},{default:t(()=>[i(n,null,{header:t(()=>[Ve,Me]),default:t(()=>[ze]),_:1}),i(n,null,{header:t(()=>[Fe,Oe]),default:t(()=>[Re]),_:1}),i(n,null,{header:t(()=>[je,Ke,We]),default:t(()=>[Ge]),_:1})]),_:1})]),i(v,{code:o.code},null,8,["code"])],64)}const Qe=p(Ue,[["render",Je],["__scopeId","data-v-7ec94f4f"]]),Xe={data(){return{tabs:Array.from({length:3},(a,s)=>({title:`Header ${s+1}`,content:`Tab ${s+1} Content`})),code:{basic:`<Accordion :activeIndex="0">
    <AccordionTab v-for="(tab, index) in tabs" :key="tab.title" :header="tab.title"
        :pt="{
            headerAction: ({ props, parent }) => ({
                class: panelClass(props, parent, index)
            })
        }">
        <p>{{ tab.content }}</p>
    </AccordionTab>
</Accordion>`,options:`<template>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab v-for="(tab, index) in tabs" :key="tab.title" :header="tab.title"
                :pt="{
                    headerAction: ({ props, parent }) => ({
                        class: panelClass(props, parent, index)
                    })
                }">
                <p>{{ tab.content }}</p>
            </AccordionTab>
        </Accordion>
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
        <Accordion :activeIndex="0">
            <AccordionTab v-for="(tab, index) in tabs" :key="tab.title" :header="tab.title"
                :pt="{
                    headerAction: ({ props, parent }) => ({
                        class: panelClass(props, parent, index)
                    })
                }">
                <p>{{ tab.content }}</p>
            </AccordionTab>
        </Accordion>
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
<\/script>`}}},methods:{panelClass(a,s,r){return[{"bg-primary":s.state.d_activeIndex===r}]}}},Ye={class:"card"};function Ze(a,s,r,_,o,h){const c=f,n=m("AccordionTab"),l=m("Accordion"),v=I;return d(),b(q,null,[i(c,g(A(a.$attrs)),null,16),e("div",Ye,[i(l,{activeIndex:0},{default:t(()=>[(d(!0),b(q,null,S(o.tabs,(T,$)=>(d(),y(n,{key:T.title,header:T.title,pt:{headerAction:({props:k,parent:w})=>({class:h.panelClass(k,w,$)})}},{default:t(()=>[e("p",null,C(T.content),1)]),_:2},1032,["header","pt"]))),128))]),_:1})]),i(v,{code:o.code},null,8,["code"])],64)}const ei=p(Xe,[["render",Ze]]),ii={},ti=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/accordion.jpg"})],-1);function oi(a,s){const r=f;return d(),b(q,null,[i(r,g(A(a.$attrs)),{default:t(()=>[e("p",null,C(a.$attrs.description),1)]),_:1},16),ti],64)}const ai=p(ii,[["render",oi]]),ni={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ai},{id:"pt.doc.accordion",label:"Accordion PT Options",component:D,data:H("Accordion")},{id:"pt.doc.accordiontab",label:"AccordionTab PT Options",component:D,data:H("AccordionTab")},{id:"pt.demo",label:"Demo",component:ei}]}}},ui={class:"doc-main"},si=e("div",{class:"doc-intro"},[e("h1",null,"Accordion Pass Through")],-1);function ci(a,s,r,_,o,h){const c=N,n=E;return d(),b(q,null,[e("div",ui,[si,i(c,{docs:o.docs},null,8,["docs"])]),i(n,{docs:o.docs},null,8,["docs"])],64)}const ri=p(ni,[["render",ci]]),di={},li=e("p",null,"List of class names used in the styled mode.",-1),mi=P('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-accordion</td><td>Container element.</td></tr><tr><td>p-accordion-header</td><td>Header of a tab.</td></tr><tr><td>p-accordion-content</td><td>Container of a tab.</td></tr></tbody></table></div>',1);function pi(a,s){const r=f;return d(),b(q,null,[i(r,g(A(a.$attrs)),{default:t(()=>[li]),_:1},16),mi],64)}const bi=p(di,[["render",pi]]),qi={data(){return{code1:{basic:`export const TRANSITIONS = {
    toggleable: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40	',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    }
};

export default {
    accordion: {
        root: 'mb-1',
        accordiontab: {
            root: 'mb-1',
            header: ({ props }) => ({
                class: [
                    { 'select-none pointer-events-none cursor-default opacity-60': props?.disabled } // Condition
                ]
            }),
            headerAction: ({ context }) => ({
                class: [
                    'flex items-center cursor-pointer relative no-underline select-none', // Alignments
                    'p-5 transition duration-200 ease-in-out rounded-t-md font-bold transition-shadow duration-200', // Padding and transition
                    'border border-gray-300 bg-gray-100 text-gray-600', // Borders and colors
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // Dark mode
                    'hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800', // Hover
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                    { 'rounded-br-md rounded-bl-md': !context.active, 'rounded-br-0 rounded-bl-0 text-gray-800': context.active } // Condition
                ]
            }),
            headerIcon: 'inline-block mr-2',
            headerTitle: 'leading-none',
            content: {
                class: [
                    'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
                ]
            },
            transition: TRANSITIONS.toggleable
        }
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Accordion :activeIndex="0">
            <AccordionTab header="Header I">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
    </div>
</template>

<script setup>
<\/script>`}}}},vi=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function hi(a,s,r,_,o,h){const c=M,n=I,l=f;return d(),y(l,g(A(a.$attrs)),{default:t(()=>[e("p",null,[u(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),i(c,{to:"/tailwind"},{default:t(()=>[u("Tailwind Customization")]),_:1}),u(" section for an example. ")]),i(n,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),vi,i(n,{code:o.code2,embedded:""},null,8,["code"])]),_:1},16)}const fi=p(qi,[["render",hi]]),_i={data(){return{docs:[{id:"theming.styled",label:"Styled",component:bi},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:fi}]}]}}},gi={class:"doc-main"},Ai=e("div",{class:"doc-intro"},[e("h1",null,"Accordion Theming")],-1);function xi(a,s,r,_,o,h){const c=N,n=E;return d(),b(q,null,[e("div",gi,[Ai,i(c,{docs:o.docs},null,8,["docs"])]),i(n,{docs:o.docs},null,8,["docs"])],64)}const Ti=p(_i,[["render",xi]]),Ii={data(){return{docs:[{id:"import",label:"Import",component:Ce},{id:"basic",label:"Basic",component:te},{id:"dynamic",label:"Dynamic",component:Ie},{id:"multiple",label:"Multiple",component:Le},{id:"disabled",label:"Disabled",component:_e},{id:"controlled",label:"Controlled",component:le},{id:"template",label:"Template",component:Qe},{id:"accessibility",label:"Accessibility",component:G}],ptComponent:ri,themingDoc:Ti}}};function $i(a,s,r,_,o,h){const c=V;return d(),y(c,{title:"Vue Accordion Component",header:"Accordion",description:"Accordion groups a collection of contents in tabs.",componentDocs:o.docs,apiDocs:["Accordion","AccordionTab"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Hi=p(Ii,[["render",$i]]);export{Hi as default};
