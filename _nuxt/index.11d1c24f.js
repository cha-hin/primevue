import{_ as f,o as p,e as D,w as h,b as e,f as t,a as l,m as k,C as S,p as g,h as v,j as w,c as _,n as y,g as x,F as b,t as C,B as V,A as F,D as j,k as T,l as M,v as I,x as B}from"./entry.68beb385.js";import{u as P,a as U}from"./vee-validate.esm.3b430014.js";import{g as Y}from"./PTHelper.11558b27.js";import{_ as O}from"./PrimeVueNuxtLink.f51d0c80.js";const A={data(){return{code:{basic:`<label for="date1">Date</label>
<Calendar inputId="date1" />

<span id="date2">Date</span>
<Calendar aria-labelledby="date2" />

<Calendar aria-label="Date" />`}}}},N=e("h3",null,"Screen Reader",-1),L=e("p",null,[t(" Value to describe the component can either be provided via "),e("i",null,"label"),t(" tag combined with "),e("i",null,"inputId"),t(" prop or using "),e("i",null,"aria-labelledby"),t(", "),e("i",null,"aria-label"),t(" props. The input element has "),e("i",null,"combobox"),t(" role in addition to "),e("i",null,"aria-autocomplete"),t(' as "none", '),e("i",null,"aria-haspopup"),t(' as "dialog" and '),e("i",null,"aria-expanded"),t(" attributes. The relation between the input and the popup is created with "),e("i",null,"aria-controls"),t(" attribute that refers to the id of the popup. ")],-1),z=e("i",null,"aria-haspopup",-1),K=e("i",null,"aria-expanded",-1),W=e("i",null,"aria-controls",-1),q=e("i",null,"chooseDate",-1),H=e("i",null,"aria-label",-1),R=e("p",null,[t(" Popup has a "),e("i",null,"dialog"),t(" role along with "),e("i",null,"aria-modal"),t(" and "),e("i",null,"aria-label"),t(". The navigation buttons at the header has an "),e("i",null,"aria-label"),t(" retrieved from the "),e("i",null,"prevYear"),t(", "),e("i",null,"nextYear"),t(", "),e("i",null,"prevMonth"),t(", "),e("i",null,"nextMonth"),t(", "),e("i",null,"prevDecade"),t(" and "),e("i",null,"nextDecade"),t(" keys of the locale aria API. Similarly month picker button uses the "),e("i",null,"chooseMonth"),t(" and year picker button uses the "),e("i",null,"chooseYear"),t(" keys. ")],-1),E=e("p",null,[t(" Main date table uses "),e("i",null,"grid"),t(" role that contains th elements with "),e("i",null,"col"),t(" as the scope along with "),e("i",null,"abbr"),t(" tag resolving to the full name of the month. Each date cell has an "),e("i",null,"aria-label"),t(" referring to the full date value. Buttons at the footer utilize their readable labels as "),e("i",null,"aria-label"),t(" as well. Selected date also receives the "),e("i",null,"aria-selected"),t(" attribute. ")],-1),G=e("p",null,[t(" Timepicker spinner buttons get their labels for "),e("i",null,"aria-label"),t(" from the aria locale API using the "),e("i",null,"prevHour"),t(", "),e("i",null,"nextHour"),t(", "),e("i",null,"prevMinute"),t(", "),e("i",null,"nextMinute"),t(", "),e("i",null,"prevSecond"),t(", "),e("i",null,"nextSecond"),t(", "),e("i",null,"am"),t(" and "),e("i",null,"pm"),t(" keys. ")],-1),J=e("p",null,[t("Calendar also includes a hidden section that is only available to screen readers with "),e("i",null,"aria-live"),t(' as "polite". This element is updated when the selected date changes to instruct the user about the current date selected.')],-1),Q=e("h3",null,"Choose Date Button Keyboard Support",-1),X=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Opens popup and moves focus to the selected date, if there is none focuses on today.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Opens popup and moves focus to the selected date, if there is none focuses on today.")])])])],-1),Z=e("h3",null,"Popup Keyboard Support",-1),ee=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"escape")]),e("td",null,"Closes the popup and moves focus to the input element.")]),e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Moves focus to the next focusable element within the popup.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),t(" + "),e("i",null,"tab")]),e("td",null,"Moves focus to the next focusable element within the popup.")])])])],-1),te=e("h3",null,"Header Buttons Keyboard Support",-1),oe=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Triggers the button action.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Triggers the button action.")])])])],-1),ne=e("h3",null,"Date Grid Keyboard Support",-1),le=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Selects the date, closes the popup and moves focus to the input element.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Selects the date, closes the popup and moves focus to the input element.")]),e("tr",null,[e("td",null,[e("i",null,"up arrow")]),e("td",null,"Moves focus to the same day of the previous week.")]),e("tr",null,[e("td",null,[e("i",null,"down arrow")]),e("td",null,"Moves focus to the same day of the next week.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Moves focus to the next day.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Moves focus to the previous day.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first day of the current week.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last day of the current week.")]),e("tr",null,[e("td",null,[e("i",null,"page up")]),e("td",null,"Changes the date to previous month in date picker mode. Moves to previous year in month picker mode and previous decade in year picker.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),t(" + "),e("i",null,"page up")]),e("td",null,"Changes the date to previous year in date picker mode. Has no effect in month or year picker")]),e("tr",null,[e("td",null,[e("i",null,"page down")]),e("td",null,"Changes the date to next month in date picker mode. Moves to next year in month picker mode and next decade in year picker.")]),e("tr",null,[e("td",null,[e("i",null,"shift"),t(" + "),e("i",null,"page down")]),e("td",null,"Changes the date to next year in date picker mode. Has no effect in month or year picker")])])])],-1),ae=e("h3",null,"Footer Buttons Keyboard Support",-1),re=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Triggers the button action.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Triggers the button action.")])])])],-1);function de(a,n,c,u,o,m){const d=S,r=g,i=v;return p(),D(i,k({id:"accessibility",label:"Accessibility"},a.$attrs),{default:h(()=>[N,L,e("p",null,[t(" The optional calendar button requires includes "),z,t(", "),K,t(" for states along with "),W,t(" to define the relation between the popup and the button. The value to read is retrieved from the "),q,t(" key of the aria property from the "),l(d,{to:"/configuration/#locale"},{default:h(()=>[t("locale")]),_:1}),t(" API. This label is also used for the "),H,t(" of the popup as well. When there is a value selected, it is formatted and appended to the label to be able to notify users about the current value. ")]),R,E,G,J,l(r,k({code:o.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},a.$attrs),null,16,["code"]),Q,X,Z,ee,te,oe,ne,le,ae,re]),_:1},16)}const se=f(A,[["render",de]]),ie={data(){return{date:null,code:{basic:'<Calendar v-model="date" />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},ce=e("p",null,[t("Calendar is used a controlled input component with "),e("i",null,"v-model"),t(" property.")],-1),ue={class:"card flex justify-content-center"};function pe(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[ce]),_:1},16),e("div",ue,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s)},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const me=f(ie,[["render",pe]]),fe={data(){return{date:null,code:{basic:'<Calendar v-model="date" showButtonBar />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" showButtonBar />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" showButtonBar />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},he=e("p",null,[t("When "),e("i",null,"showButtonBar"),t(" is present, today and clear buttons are displayed at the footer.")],-1),_e={class:"card flex justify-content-center"};function be(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[he]),_:1},16),e("div",_e,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),showButtonBar:""},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const ve=f(fe,[["render",be]]),ye={data(){return{date:null,code:{basic:`<Calendar v-model="date">
    <template #date="slotProps">
        <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" style="text-decoration: line-through">{{ slotProps.date.day }}</strong>
        <template v-else>{{ slotProps.date.day }}</template>
    </template>
</Calendar>`,options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date">
            <template #date="slotProps">
                <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" style="text-decoration: line-through">{{ slotProps.date.day }}</strong>
                <template v-else>{{ slotProps.date.day }}</template>
            </template>
        </Calendar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        }
    }
}
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date">
            <template #date="slotProps">
                <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" style="text-decoration: line-through">{{ slotProps.date.day }}</strong>
                <template v-else>{{ slotProps.date.day }}</template>
            </template>
        </Calendar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},xe=e("p",null,[t("Custom content can be placed inside date cells with the "),e("i",null,"date"),t(" slot that takes a Date as a parameter.")],-1),ge={class:"card flex justify-content-center"},we={key:0,style:{"text-decoration":"line-through"}};function Ce(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[xe]),_:1},16),e("div",ge,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s)},{date:h(s=>[s.date.day>10&&s.date.day<15?(p(),_("strong",we,C(s.date.day),1)):(p(),_(b,{key:1},[t(C(s.date.day),1)],64))]),_:1},8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const De=f(ye,[["render",Ce]]),$e={data(){return{date:null,code:{basic:'<Calendar v-model="date" disabled />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" disabled />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" disabled />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},ke=e("p",null,[t("Calendar is used a controlled input component with "),e("i",null,"v-model"),t(" property.")],-1),Se={class:"card flex justify-content-center"};function Te(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[ke]),_:1},16),e("div",Se,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),disabled:""},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const Me=f($e,[["render",Te]]),Ve={data(){return{date:null,code:{basic:`<span class="p-float-label">
    <Calendar v-model="date" inputId="birth_date" />
    <label for="birth_date">Birth Date</label>
</span>`,options:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <Calendar v-model="date" inputId="birth_date" />
            <label for="birth_date">Birth Date</label>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <Calendar v-model="date" inputId="birth_date" />
            <label for="birth_date">Birth Date</label>
        </span>
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},Fe=e("p",null,"A floating label appears on top of the input field when focused.",-1),je={class:"card flex justify-content-center"},Ie={class:"p-float-label"},Be=e("label",{for:"birth_date"},"Birth Date",-1);function Pe(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[Fe]),_:1},16),e("div",je,[e("span",Ie,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),inputId:"birth_date"},null,8,["modelValue"]),Be])]),l(i,{code:o.code},null,8,["code"])],64)}const Ue=f(Ve,[["render",Pe]]),Ye={data(){return{date:null,code:{basic:'<Calendar v-model="date" dateFormat="dd/mm/yy" />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" dateFormat="dd/mm/yy" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" dateFormat="dd/mm/yy" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},Oe=e("p",null,[t("Default date format is "),e("i",null,"mm/dd/yy"),t(" which can be customized using the "),e("i",null,"dateFormat"),t(" property. Following options can be a part of the format.")],-1),Ae=e("ul",{class:"mb-4 line-height-4"},[e("li",null,[e("i",null,"d"),t(" - day of month (no leading zero)")]),e("li",null,[e("i",null,"dd"),t(" - day of month (two digit)")]),e("li",null,[e("i",null,"o"),t(" - day of the year (no leading zeros)")]),e("li",null,[e("i",null,"oo"),t(" - day of the year (three digit)")]),e("li",null,[e("i",null,"D"),t(" - day name short")]),e("li",null,[e("i",null,"DD"),t(" - day name long")]),e("li",null,[e("i",null,"m"),t(" - month of year (no leading zero)")]),e("li",null,[e("i",null,"mm"),t(" - month of year (two digit)")]),e("li",null,[e("i",null,"M"),t(" - month name short")]),e("li",null,[e("i",null,"MM"),t(" - month name long")]),e("li",null,[e("i",null,"y"),t(" - year (two digit)")]),e("li",null,[e("i",null,"yy"),t(" - year (four digit)")]),e("li",null,[e("i",null,"@"),t(" - Unix timestamp (ms since 01/01/1970)")]),e("li",null,[e("i",null,"!"),t(" - Windows ticks (100ns since 01/01/0001)")]),e("li",null,[e("i",null,"'...'"),t(" - literal text")]),e("li",null,[e("i",null,"''"),t(" - single quote")]),e("li",null,[e("i",null,"anything else"),t(" - literal text")])],-1),Ne={class:"card flex justify-content-center"};function Le(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[Oe,Ae]),_:1},16),e("div",Ne,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),dateFormat:"dd/mm/yy"},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const ze=f(Ye,[["render",Le]]),Ke={data(){return{date:null,code:{basic:'<Calendar v-model="date" showIcon />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" showIcon />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" showIcon />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},We=e("p",null,[t("An additional icon is displayed next to the input field when "),e("i",null,"showIcon"),t(" is present.")],-1),qe={class:"card flex justify-content-center"};function He(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[We]),_:1},16),e("div",qe,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),showIcon:""},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const Re=f(Ke,[["render",He]]),Ee={data(){return{code:{basic:"import Calendar from 'primevue/calendar';"}}}};function Ge(a,n,c,u,o,m){const d=v,r=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),null,16),l(r,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Je=f(Ee,[["render",Ge]]),Qe={data(){return{date:null,code:{basic:'<Calendar v-model="date" inline showWeek />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" inline showWeek />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" inline showWeek />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},Xe=e("p",null,[t("Calendar is used a controlled input component with "),e("i",null,"v-model"),t(" property.")],-1),Ze={class:"card flex justify-content-center"};function et(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[Xe]),_:1},16),e("div",Ze,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),inline:"",showWeek:""},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const tt=f(Qe,[["render",et]]),ot={data(){return{date:null,code:{basic:'<Calendar v-model="date" class="p-invalid" />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" class="p-invalid" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" class="p-invalid" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},nt=e("p",null,[t("Calendar is used a controlled input component with "),e("i",null,"v-model"),t(" property.")],-1),lt={class:"card flex justify-content-center"};function at(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[nt]),_:1},16),e("div",lt,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),class:"p-invalid"},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const rt=f(ot,[["render",at]]),dt={};function st(a,n){const c=S,u=v;return p(),D(u,y(x(a.$attrs)),{default:h(()=>[e("p",null,[t("Locale for different languages and formats is defined globally, refer to the "),l(c,{to:"/configuration/#locale"},{default:h(()=>[t("PrimeVue Locale")]),_:1}),t(" configuration for more information.")])]),_:1},16)}const it=f(dt,[["render",st]]),ct={data(){return{date:null,minDate:null,maxDate:null,code:{basic:'<Calendar v-model="date" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null,
            minDate: null,
            maxDate: null
        };
    },
    created() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = month === 0 ? 11 : month - 1;
        let prevYear = prevMonth === 11 ? year - 1 : year;
        let nextMonth = month === 11 ? 0 : month + 1;
        let nextYear = nextMonth === 0 ? year + 1 : year;

        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" :minDate="minDate" :maxDate="maxDate" :manualInput="false" />
    </div>
</template>

<script setup>
import { ref } from "vue";

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let prevMonth = (month === 0) ? 11 : month -1;
let prevYear = (prevMonth === 11) ? year - 1 : year;
let nextMonth = (month === 11) ? 0 : month + 1;
let nextYear = (nextMonth === 0) ? year + 1 : year;

const date = ref();
const minDate = ref(new Date());
const maxDate = ref(new Date());

minDate.value.setMonth(prevMonth);
minDate.value.setFullYear(prevYear);
maxDate.value.setMonth(nextMonth);
maxDate.value.setFullYear(nextYear);
<\/script>`}}},created(){let a=new Date,n=a.getMonth(),c=a.getFullYear(),u=n===0?11:n-1,o=u===11?c-1:c,m=n===11?0:n+1,d=m===0?c+1:c;this.minDate=new Date,this.minDate.setMonth(u),this.minDate.setFullYear(o),this.maxDate=new Date,this.maxDate.setMonth(m),this.maxDate.setFullYear(d)}},ut=e("p",null,[t("Boundaries for the permitted dates that can be entered are defined with "),e("i",null,"minDate"),t(" and "),e("i",null,"maxDate"),t(" properties.")],-1),pt={class:"card flex justify-content-center"};function mt(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[ut]),_:1},16),e("div",pt,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),minDate:o.minDate,maxDate:o.maxDate,manualInput:!1},null,8,["modelValue","minDate","maxDate"])]),l(i,{code:o.code},null,8,["code"])],64)}const ft=f(ct,[["render",mt]]),ht={data(){return{date:null,code:{basic:'<Calendar v-model="date" view="month" dateFormat="mm/yy" />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" view="month" dateFormat="mm/yy" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" view="month" dateFormat="mm/yy" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},_t=e("p",null,[t("Month only picker is enabled by specifying "),e("i",null,"view"),t(" as "),e("i",null,"month"),t(" in addition to a suitable "),e("i",null,"dateFormat"),t(".")],-1),bt={class:"card flex justify-content-center"};function vt(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[_t]),_:1},16),e("div",bt,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),view:"month",dateFormat:"mm/yy"},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const yt=f(ht,[["render",vt]]),xt={data(){return{dates:null,code:{basic:'<Calendar v-model="dates" selectionMode="multiple" :manualInput="false" />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="dates" selectionMode="multiple" :manualInput="false" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            dates: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="dates" selectionMode="multiple" :manualInput="false" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const dates = ref();
<\/script>`}}}},gt=e("p",null,[t("In order to choose multiple dates, set "),e("i",null,"selectionMode"),t(" as "),e("i",null,"multiple"),t(". In this mode, the value binding should be an array.")],-1),wt={class:"card flex justify-content-center"};function Ct(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[gt]),_:1},16),e("div",wt,[l(r,{modelValue:o.dates,"onUpdate:modelValue":n[0]||(n[0]=s=>o.dates=s),selectionMode:"multiple",manualInput:!1},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const Dt=f(xt,[["render",Ct]]),$t={data(){return{date:null,code:{basic:'<Calendar v-model="date" :numberOfMonths="2" />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" :numberOfMonths="2" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" :numberOfMonths="2" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},kt=e("p",null,[t("Number of months to display is configured with the "),e("i",null,"numberOfMonths"),t(" property.")],-1),St={class:"card flex justify-content-center"};function Tt(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[kt]),_:1},16),e("div",St,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),numberOfMonths:2},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const Mt=f($t,[["render",Tt]]),Vt={data(){return{dates:null,code:{basic:'<Calendar v-model="dates" selectionMode="range" :manualInput="false" />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="dates" selectionMode="range" :manualInput="false" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            dates: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="dates" selectionMode="range" :manualInput="false" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const dates = ref();
<\/script>`}}}},Ft=e("p",null,[t("A range of dates can be selected by defining "),e("i",null,"selectionMode"),t(" as "),e("i",null,"range"),t(", in this case the bound value would be an array with two values where first date is the start of the range and second date is the end.")],-1),jt={class:"card flex justify-content-center"};function It(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[Ft]),_:1},16),e("div",jt,[l(r,{modelValue:o.dates,"onUpdate:modelValue":n[0]||(n[0]=s=>o.dates=s),selectionMode:"range",manualInput:!1},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const Bt=f(Vt,[["render",It]]),Pt={data(){return{datetime12h:null,datetime24h:null,time:null,code:{basic:`<Calendar id="calendar-12h" v-model="datetime12h" showTime hourFormat="12" />
<Calendar id="calendar-24h" v-model="datetime24h" showTime hourFormat="24" />
<Calendar id="calendar-timeonly" v-model="time" timeOnly />`,options:`<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="calendar-12h" class="font-bold block mb-2"> 12h Format </label>
            <Calendar id="calendar-12h" v-model="datetime12h" showTime hourFormat="12" />
        </div>
        <div class="flex-auto">
            <label for="calendar-24h" class="font-bold block mb-2"> 24h Format </label>
            <Calendar id="calendar-24h" v-model="datetime24h" showTime hourFormat="24" />
        </div>
        <div class="flex-auto">
            <label for="calendar-timeonly" class="font-bold block mb-2"> Time Only </label>
            <Calendar id="calendar-timeonly" v-model="time" timeOnly />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datetime12h: null,
            datetime24h: null,
            time: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex flex-wrap gap-3 p-fluid">
        <div class="flex-auto">
            <label for="calendar-12h" class="font-bold block mb-2"> 12h Format </label>
            <Calendar id="calendar-12h" v-model="datetime12h" showTime hourFormat="12" />
        </div>
        <div class="flex-auto">
            <label for="calendar-24h" class="font-bold block mb-2"> 24h Format </label>
            <Calendar id="calendar-24h" v-model="datetime24h" showTime hourFormat="24" />
        </div>
        <div class="flex-auto">
            <label for="calendar-timeonly" class="font-bold block mb-2"> Time Only </label>
            <Calendar id="calendar-timeonly" v-model="time" timeOnly />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const datetime12h = ref();
const datetime24h = ref();
const time = ref();
<\/script>`}}}},Ut=e("p",null,[t("A time picker is displayed when "),e("i",null,"showTime"),t(" is enabled where 12/24 hour format is configured with "),e("i",null,"hourFormat"),t(" property. In case, only time needs to be selected, add "),e("i",null,"timeOnly"),t(" to hide the date section.")],-1),Yt={class:"card flex flex-wrap gap-3 p-fluid"},Ot={class:"flex-auto"},At=e("label",{for:"calendar-12h",class:"font-bold block mb-2"}," 12h Format ",-1),Nt={class:"flex-auto"},Lt=e("label",{for:"calendar-24h",class:"font-bold block mb-2"}," 24h Format ",-1),zt={class:"flex-auto"},Kt=e("label",{for:"calendar-timeonly",class:"font-bold block mb-2"}," Time Only ",-1);function Wt(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[Ut]),_:1},16),e("div",Yt,[e("div",Ot,[At,l(r,{id:"calendar-12h",modelValue:o.datetime12h,"onUpdate:modelValue":n[0]||(n[0]=s=>o.datetime12h=s),showTime:"",hourFormat:"12"},null,8,["modelValue"])]),e("div",Nt,[Lt,l(r,{id:"calendar-24h",modelValue:o.datetime24h,"onUpdate:modelValue":n[1]||(n[1]=s=>o.datetime24h=s),showTime:"",hourFormat:"24"},null,8,["modelValue"])]),e("div",zt,[Kt,l(r,{id:"calendar-timeonly",modelValue:o.time,"onUpdate:modelValue":n[2]||(n[2]=s=>o.time=s),timeOnly:""},null,8,["modelValue"])])]),l(i,{code:o.code},null,8,["code"])],64)}const qt=f(Pt,[["render",Wt]]),Ht={data(){return{date:null,code:{basic:'<Calendar v-model="date" touchUI />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" touchUI />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" touchUI />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},Rt=e("p",null,[t("When "),e("i",null,"touchUI"),t(" is enabled, overlay is displayed as optimized for touch devices.")],-1),Et={class:"card flex justify-content-center"};function Gt(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[Rt]),_:1},16),e("div",Et,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),touchUI:""},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const Jt=f(Ht,[["render",Gt]]),Qt={data(){return{date:null,code:{basic:'<Calendar v-model="date" view="year" dateFormat="yy" />',options:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" view="year" dateFormat="yy" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar v-model="date" view="year" dateFormat="yy" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},Xt=e("p",null,[t("Specifying "),e("i",null,"view"),t(" as "),e("i",null,"year"),t(" in addition to a suitable "),e("i",null,"dateFormat"),t(" enables the year picker.")],-1),Zt={class:"card flex justify-content-center"};function eo(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[Xt]),_:1},16),e("div",Zt,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),view:"year",dateFormat:"yy"},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const to=f(Qt,[["render",eo]]),oo={setup(){const{handleSubmit:a,resetForm:n}=P(),{value:c,errorMessage:u}=U("value",m),o=V();function m(r){return r?!0:"Date is required."}const d=a(r=>{r.value&&(o.add({severity:"info",summary:"Form Submitted",detail:r.value.toLocaleDateString(),life:3e3}),n())});return{value:c,handleSubmit:a,onSubmit:d,errorMessage:u}},data(){return{code:{basic:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="date">Date</label>
            <Calendar id="date" v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="date-error" />
            <small class="p-error" id="date-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>`,options:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="date">Date</label>
            <Calendar id="date" v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="date-error" />
            <small class="p-error" id="date-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

export default {
    setup() {
        const { handleSubmit, resetForm } = useForm();
        const { value, errorMessage } = useField('value', validateField);
        const toast = useToast();

        function validateField(value) {
            if (!value) {
                return 'Date is required.';
            }

            return true;
        }

        const onSubmit = handleSubmit((values) => {
            if (values.value) {
                toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.toLocaleDateString(), life: 3000 });
                resetForm();
            }
        });

        return { value, handleSubmit, onSubmit, errorMessage };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <form @submit="onSubmit" class="flex flex-column gap-2">
            <label for="date">Date</label>
            <Calendar id="date" v-model="value" :class="{ 'p-invalid': errorMessage }" aria-describedby="date-error" />
            <small class="p-error" id="date-error">{{ errorMessage || '&nbsp;' }}</small>
            <Button type="submit" label="Submit" />
        </form>
        <Toast />
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();
const { value, errorMessage } = useField('value', validateField);
const toast = useToast();

function validateField(value) {
    if (!value) {
        return 'Date is required.';
    }

    return true;
}

const onSubmit = handleSubmit((values) => {
    if (values.value) {
        toast.add({ severity: 'info', summary: 'Form Submitted', detail: values.value.toLocaleDateString(), life: 3000 });
        resetForm();
    }
});
<\/script>
`}}}},no=e("p",null,[e("a",{href:"https://vee-validate.logaretm.com/v4/"},"VeeValidate"),t(" is a popular library for handling forms in Vue.")],-1),lo={class:"card flex justify-content-center"},ao=e("label",{for:"date"},"Date",-1),ro={id:"date-error",class:"p-error"};function so(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=w("Button"),s=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),{default:h(()=>[no]),_:1},16),e("div",lo,[e("form",{onSubmit:n[1]||(n[1]=(...$)=>u.onSubmit&&u.onSubmit(...$)),class:"flex flex-column gap-2"},[ao,l(r,{id:"date",modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=$=>u.value=$),class:F({"p-invalid":u.errorMessage}),"aria-describedby":"date-error"},null,8,["modelValue","class"]),e("small",ro,C(u.errorMessage||" "),1),l(i,{type:"submit",label:"Submit"})],32)]),l(s,{code:o.code,dependencies:{"vee-validate":"4.8.2"}},null,8,["code"])],64)}const io=f(oo,[["render",so]]),co={data(){return{date:null,code:{basic:`<Calendar
    v-model="date"
    showIcon
    :pt="{
        input: { class: 'w-16rem' },
        dropdownButton: {
            root: { class: 'bg-teal-500 border-teal-500' }
        }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Calendar
            v-model="date"
            showIcon
            :pt="{
                input: { class: 'w-16rem' },
                dropdownButton: {
                    root: { class: 'bg-teal-500 border-teal-500' }
                }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Calendar
            v-model="date"
            showIcon
            :pt="{
                input: { class: 'w-16rem' },
                dropdownButton: {
                    root: { class: 'bg-teal-500 border-teal-500' }
                }
            }"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},uo={class:"card flex justify-content-center"};function po(a,n,c,u,o,m){const d=v,r=w("Calendar"),i=g;return p(),_(b,null,[l(d,y(x(a.$attrs)),null,16),e("div",uo,[l(r,{modelValue:o.date,"onUpdate:modelValue":n[0]||(n[0]=s=>o.date=s),showIcon:"",pt:{input:{class:"w-16rem"},dropdownButton:{root:{class:"bg-teal-500 border-teal-500"}}}},null,8,["modelValue"])]),l(i,{code:o.code},null,8,["code"])],64)}const mo=f(co,[["render",po]]),fo={},ho=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/wireframe-placeholder.jpg"})],-1);function _o(a,n){const c=v;return p(),_(b,null,[l(c,y(x(a.$attrs)),{default:h(()=>[e("p",null,C(a.$attrs.description),1)]),_:1},16),ho],64)}const bo=f(fo,[["render",_o]]),vo={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:bo},{id:"pt.doc.calendar",label:"Calendar PT Options",component:j,data:Y("Calendar")},{id:"pt.demo",label:"Demo",component:mo}]}}},yo={class:"doc-main"},xo=e("div",{class:"doc-intro"},[e("h1",null,"Calendar Pass Through")],-1);function go(a,n,c,u,o,m){const d=T,r=M;return p(),_(b,null,[e("div",yo,[xo,l(d,{docs:o.docs},null,8,["docs"])]),l(r,{docs:o.docs},null,8,["docs"])],64)}const wo=f(vo,[["render",go]]),Co={},Do=e("p",null,"List of class names used in the styled mode.",-1),$o=I('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-calendar</td><td>Main container element</td></tr><tr><td>p-calendar-w-btn</td><td>Main container element when button is enabled.</td></tr><tr><td>p-calendar-timeonly</td><td>Main container element in time picker only mode.</td></tr><tr><td>p-inputtext</td><td>Input element</td></tr><tr><td>p-datepicker</td><td>Datepicker element</td></tr><tr><td>p-datepicker-inline</td><td>Datepicker element in inline mode</td></tr><tr><td>p-monthpicker</td><td>Datepicker element in month view.</td></tr><tr><td>p-monthpicker-month</td><td>Month cell in month view mode.</td></tr><tr><td>p-datepicker-touch-ui</td><td>Datepicker element in touch ui mode.</td></tr><tr><td>p-datepicker-calendar</td><td>Table containing dates of a month.</td></tr><tr><td>p-datepicker-current-day</td><td>Cell of selected date.</td></tr><tr><td>p-datepicker-today</td><td>Cell of today&#39;s date.</td></tr></tbody></table></div>',1);function ko(a,n){const c=v;return p(),_(b,null,[l(c,y(x(a.$attrs)),{default:h(()=>[Do]),_:1},16),$o],64)}const So=f(Co,[["render",ko]]),To={data(){return{code1:{basic:`
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    calendar: {
        root: ({ props }) => ({
            class: [
                'inline-flex max-w-full relative',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        input: {
            class: [
                'font-sans text-base text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500' //Hover
            ]
        },
        panel: ({ props }) => ({
            class: [
                'bg-white dark:bg-gray-900',
                'min-w-[350px]',
                {
                    'shadow-md border-0 absolute': !props.inline,
                    'inline-block overflow-x-auto border border-gray-300 dark:border-blue-900/40 p-2 rounded-lg': props.inline
                }
            ]
        }),
        header: {
            class: ['flex items-center justify-between', 'p-2 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-semibold m-0 border-b border-gray-300 dark:border-blue-900/40 rounded-t-lg']
        },
        previousbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            ]
        },
        title: 'leading-8 mx-auto',
        monthTitle: {
            class: ['text-gray-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'mr-2', 'hover:text-blue-500']
        },
        yearTitle: {
            class: ['text-gray-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'hover:text-blue-500']
        },
        nextbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            ]
        },
        table: {
            class: ['border-collapse w-full', 'my-2']
        },
        tableheadercell: 'p-2',
        weekday: 'text-gray-600 dark:text-white/70',
        day: 'p-2',
        daylabel: ({ context }) => ({
            class: [
                'w-10 h-10 rounded-full transition-shadow duration-200 border-transparent border',
                'flex items-center justify-center mx-auto overflow-hidden relative',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'opacity-60 cursor-default': context.disabled,
                    'cursor-pointer': !context.disabled
                },
                {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled
                }
            ]
        }),
        monthpicker: 'my-2',
        month: ({ context }) => ({
            class: [
                'w-1/3 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
                'p-2 transition-shadow duration-200 rounded-lg',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled, 'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled }
            ]
        }),
        yearpicker: {
            class: ['my-2']
        },
        year: ({ context }) => ({
            class: [
                'w-1/2 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
                'p-2 transition-shadow duration-200 rounded-lg',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled
                }
            ]
        }),
        timepicker: {
            class: ['flex justify-center items-center', 'border-t-1 border-solid border-gray-300 p-2']
        },
        separatorcontainer: 'flex items-center flex-col px-2',
        separator: 'text-xl',
        hourpicker: 'flex items-center flex-col px-2',
        minutepicker: 'flex items-center flex-col px-2',
        ampmpicker: 'flex items-center flex-col px-2',
        incrementbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            ]
        },
        decrementbutton: {
            class: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            ]
        },
        groupcontainer: 'flex',
        group: {
            class: ['flex-1', 'border-l border-gray-300 pr-0.5 pl-0.5 pt-0 pb-0', 'first:pl-0 first:border-l-0']
        },
        transition: TRANSITIONS.overlay
    }
}
`},code2:{composition:`<template>
    <div class="card flex justify-center">
        <Calendar v-model="date" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
<\/script>`}}}},Mo=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Vo(a,n,c,u,o,m){const d=O,r=g,i=v;return p(),D(i,y(x(a.$attrs)),{default:h(()=>[e("p",null,[t(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),l(d,{to:"/tailwind"},{default:h(()=>[t("Tailwind Customization")]),_:1}),t(" section for an example. ")]),l(r,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Mo,l(r,{code:o.code2,embedded:""},null,8,["code"])]),_:1},16)}const Fo=f(To,[["render",Vo]]),jo={data(){return{docs:[{id:"theming.styled",label:"Styled",component:So},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Fo}]}]}}},Io={class:"doc-main"},Bo=e("div",{class:"doc-intro"},[e("h1",null,"Calendar Theming")],-1);function Po(a,n,c,u,o,m){const d=T,r=M;return p(),_(b,null,[e("div",Io,[Bo,l(d,{docs:o.docs},null,8,["docs"])]),l(r,{docs:o.docs},null,8,["docs"])],64)}const Uo=f(jo,[["render",Po]]),Yo={data(){return{docs:[{id:"import",label:"Import",component:Je},{id:"basic",label:"Basic",component:me},{id:"format",label:"Format",component:ze},{id:"locale",label:"Locale",component:it},{id:"icon",label:"Icon",component:Re},{id:"minmax",label:"Min / Max",component:ft},{id:"multiple",label:"Multiple",component:Dt},{id:"range",label:"Range",component:Bt},{id:"button",label:"Button Bar",component:ve},{id:"time",label:"Time",component:qt},{id:"monthpicker",label:"Month Picker",component:yt},{id:"yearpicker",label:"Year Picker",component:to},{id:"multiplemonths",label:"Multiple Months",component:Mt},{id:"datetemplate",label:"Date Template",component:De},{id:"touchui",label:"Touch UI",component:Jt},{id:"inline",label:"Inline",component:tt},{id:"floatlabel",label:"Float Label",component:Ue},{id:"invalid",label:"Invalid",component:rt},{id:"disabled",label:"Disabled",component:Me},{id:"form",label:"Form",description:"Compatibility with popular Vue form libraries.",children:[{id:"veevalidate",label:"VeeValidate",component:io}]},{id:"accessibility",label:"Accessibility",component:se}],ptComponent:wo,themingDoc:Uo}}};function Oo(a,n,c,u,o,m){const d=B;return p(),D(d,{title:"Vue Calendar Component",header:"Calendar",description:"Calendar, also known as DatePicker, is a form component to work with dates.",componentDocs:o.docs,apiDocs:["Calendar"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Ko=f(Yo,[["render",Oo]]);export{Ko as default};
