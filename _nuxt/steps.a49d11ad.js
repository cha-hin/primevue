import{_ as f,o as l,e as S,w as d,m as I,b as e,f as i,h as b,j as C,c as h,a,n as u,g as v,I as j,t as w,E as F,F as g,p as P,aa as V,ab as E,ac as R,D as L,k as O,l as B,v as M,x as K}from"./entry.68beb385.js";import{g as z}from"./PTHelper.11558b27.js";import{_ as q}from"./PrimeVueNuxtLink.f51d0c80.js";const U={},W=e("h3",null,"Screen Reader",-1),H=e("p",null,[i(" Steps component uses the "),e("i",null,"nav"),i(" element and since any attribute is passed to the root implicitly "),e("i",null,"aria-labelledby"),i(" or "),e("i",null,"aria-label"),i(" can be used to describe the component. Inside an ordered list is used where the current step item defines "),e("i",null,"aria-current"),i(' as "step". ')],-1),G=e("h3",null,"Keyboard Support",-1),J=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Key"),e("th",null,"Function")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("i",null,"tab")]),e("td",null,"Adds focus to the active step when focus moves in to the component, if there is already a focused tab header then moves the focus out of the component based on the page tab sequence.")]),e("tr",null,[e("td",null,[e("i",null,"enter")]),e("td",null,"Activates the focused step if readonly is not enabled.")]),e("tr",null,[e("td",null,[e("i",null,"space")]),e("td",null,"Activates the focused step if readonly is not enabled.")]),e("tr",null,[e("td",null,[e("i",null,"right arrow")]),e("td",null,"Moves focus to the next step if readonly is not enabled.")]),e("tr",null,[e("td",null,[e("i",null,"left arrow")]),e("td",null,"Moves focus to the previous step if readonly is not enabled.")]),e("tr",null,[e("td",null,[e("i",null,"home")]),e("td",null,"Moves focus to the first step if readonly is not enabled.")]),e("tr",null,[e("td",null,[e("i",null,"end")]),e("td",null,"Moves focus to the last step if readonly is not enabled.")])])])],-1);function Q(t,s){const p=b;return l(),S(p,I({id:"accessibility",label:"Accessibility"},t.$attrs),{default:d(()=>[W,H,G,J]),_:1},16)}const X=f(U,[["render",Q]]),Y={data(){return{items:[{label:"Personal",route:"/steps"},{label:"Seat",route:"/steps/seat"},{label:"Payment",route:"/steps/payment"},{label:"Confirmation",route:"/steps/confirmation"}],code:{basic:`<Steps :model="items" aria-label="Form Steps" :readonly="false"
    :pt="{
        menuitem: ({ context }) => ({
            class: isActive(context.item) && 'p-highlight p-steps-current'
        })
    }">
    <template #item="{ label, item, index, props }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                <span v-bind="props.step">{{ index + 1 }}</span>
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <span v-else v-bind="props.action">
            <span v-bind="props.step">{{ index + 1 }}</span>
            <span v-bind="props.label">{{ label }}</span>
        </span>
    </template>
</Steps>`,options:`<template>
    <div>        
        <div class="card">
            <Steps :model="items" aria-label="Form Steps" :readonly="false"
                :pt="{
                    menuitem: ({ context }) => ({
                        class: isActive(context.item) && 'p-highlight p-steps-current'
                    })
                }">
                <template #item="{ label, item, index, props }">
                    <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                        <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                            <span v-bind="props.step">{{ index + 1 }}</span>
                            <span v-bind="props.label">{{ label }}</span>
                        </a>
                    </router-link>
                    <span v-else v-bind="props.action">
                        <span v-bind="props.step">{{ index + 1 }}</span>
                        <span v-bind="props.label">{{ label }}</span>
                    </span>
                </template>
            </Steps>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Personal',
                    route: '/steps'
                },
                {
                    label: 'Seat',
                    route: '/steps/seat'
                },
                {
                    label: 'Payment',
                    route: '/steps/payment'
                },
                {
                    label: 'Confirmation',
                    route: '/steps/confirmation'
                }
            ]
        }
    },
    methods: {
        isActive(item) {
            return item.route ? this.$router.resolve(item.route).path === this.$route.path : false;
        }
    }
}
<\/script>`,composition:`<template>
    <div>
        <div class="card">
            <Steps :model="items" aria-label="Form Steps" :readonly="false"
                :pt="{
                    menuitem: ({ context }) => ({
                        class: isActive(context.item) && 'p-highlight p-steps-current'
                    })
                }">
                <template #item="{ label, item, index, props }">
                    <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                        <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                            <span v-bind="props.step">{{ index + 1 }}</span>
                            <span v-bind="props.label">{{ label }}</span>
                        </a>
                    </router-link>
                    <span v-else v-bind="props.action">
                        <span v-bind="props.step">{{ index + 1 }}</span>
                        <span v-bind="props.label">{{ label }}</span>
                    </span>
                </template>
            </Steps>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const items = ref([
    {
        label: 'Personal',
        route: "/"
    },
    {
        label: 'Seat',
        route: "/seat",
    },
    {
        label: 'Payment',
        route: "/payment",
    },
    {
        label: 'Confirmation',
        route: "/confirmation",
    }
]);

const isActive = (item) => {
    return item.route ? router.resolve(item.route).path === route.path : false;
}
<\/script>`}}},methods:{isActive(t){return t.route?this.$router.resolve(t.route).path===this.$route.path:!1}}},Z=e("p",null,[i("Steps requires a collection of menuitems as its "),e("i",null,"model"),i(".")],-1),ee={class:"card"},te=["href","onClick","onKeydown"];function oe(t,s,p,_,o,c){const n=b,r=C("router-link"),x=C("Steps"),T=P;return l(),h(g,null,[a(n,u(v(t.$attrs)),{default:d(()=>[Z]),_:1},16),e("div",ee,[a(x,{model:o.items,"aria-label":"Form Steps",readonly:!1,pt:{menuitem:({context:k})=>({class:c.isActive(k.item)&&"p-highlight p-steps-current"})}},{item:d(({label:k,item:m,index:A,props:D})=>[m.route?(l(),S(r,{key:0,to:m.route,custom:""},{default:d(y=>[e("a",I({href:y.href},D.action,{onClick:$=>y.navigate($),onKeydown:j($=>y.navigate($),["enter"])}),[e("span",u(v(D.step)),w(A+1),17),e("span",u(v(D.label)),w(k),17)],16,te)]),_:2},1032,["to"])):F("",!0)]),_:1},8,["model","pt"])]),a(T,{code:o.code},null,8,["code"])],64)}const ae=f(Y,[["render",oe]]),se={data(){return{code:{basic:"import Steps from 'primevue/steps';"}}}};function ne(t,s,p,_,o,c){const n=b,r=P;return l(),h(g,null,[a(n,u(v(t.$attrs)),null,16),a(r,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const re=f(se,[["render",ne]]),le={data(){return{items:[{label:"Personal",route:"/steps"},{label:"Seat",route:"/steps/seat"},{label:"Payment",route:"/steps/payment"},{label:"Confirmation",route:"/steps/confirmation"}],formObject:{},code:{basic:`<div class="card">
        <Steps
            :model="items"
            aria-label="Form Steps"
            :pt="{
                menuitem: ({ context }) => ({
                    class: isActive(context.item) && 'p-highlight p-steps-current'
                })
            }"
        >
        <template #item="{ label, item, index, props }">
            <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                    <span v-bind="props.step">{{ index + 1 }}</span>
                    <span v-bind="props.label">{{ label }}</span>
                </a>
            </router-link>
        </template>
    </Steps>
</div>

<router-view v-slot="{ Component }" :formData="formObject" @prev-page="prevPage($event)" @next-page="nextPage($event)" @complete="complete">
    <keep-alive>
        <component :is="Component" />
    </keep-alive>
</router-view>`,options:`<template>
    <div>
        <div class="card">
            <Steps
                :model="items"
                aria-label="Form Steps"
                :pt="{
                    menuitem: ({ context }) => ({
                        class: isActive(context.item) && 'p-highlight p-steps-current'
                    })
                }"
            >
                <template #item="{ label, item, index, props }">
                    <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                        <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                            <span v-bind="props.step">{{ index + 1 }}</span>
                            <span v-bind="props.label">{{ label }}</span>
                        </a>
                    </router-link>
                </template>
            </Steps>
        </div>
        <Toast />

        <router-view v-slot="{Component}" :formData="formObject" @prevPage="prevPage($event)" @nextPage="nextPage($event)" @complete="complete">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Personal',
                    route: '/'
                },
                {
                    label: 'Seat',
                    route: '/seat'
                },
                {
                    label: 'Payment',
                    route: '/payment'
                },
                {
                    label: 'Confirmation',
                    route: '/confirmation'
                }
            ],
            formObject: {}
        }
    },
    methods: {
        nextPage(event) {
            for (let field in event.formData) {
                this.formObject[field] = event.formData[field];
            }

            this.$router.push(this.items[event.pageIndex + 1].to);
        },
        prevPage(event) {
            this.$router.push(this.items[event.pageIndex - 1].to);
        },
        complete() {
            this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
        },
        isActive(item) {
            return item.route ? this.$router.resolve(item.route).path === this.$route.path : false;
        }
    }
}
<\/script>

<style scoped>
::v-deep(b) {
    display: block;
}

::v-deep(.p-card-body) {
    padding: 2rem;
}
</style>`,composition:`<template>
    <div>
        <div class="card">
            <Steps
                :model="items"
                aria-label="Form Steps"
                :pt="{
                    menuitem: ({ context }) => ({
                        class: isActive(context.item) && 'p-highlight p-steps-current'
                    })
                }"
            >
                <template #item="{ label, item, index, props }">
                    <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                        <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                            <span v-bind="props.step">{{ index + 1 }}</span>
                            <span v-bind="props.label">{{ label }}</span>
                        </a>
                    </router-link>
                </template>
            </Steps>
        </div>
        <Toast />

        <router-view v-slot="{Component}" :formData="formObject" @prevPage="prevPage($event)" @nextPage="nextPage($event)" @complete="complete">
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";

const router = useRouter();
const toast = useToast();
const items = ref([
    {
        label: 'Personal',
        route: "/"
    },
    {
        label: 'Seat',
        route: "/seat",
    },
    {
        label: 'Payment',
        route: "/payment",
    },
    {
        label: 'Confirmation',
        route: "/confirmation",
    }
]);
const formObject = ref({});

const nextPage = (event) => {
    for (let field in event.formData) {
        formObject.value[field] = event.formData[field];
    }

    router.push(items.value[event.pageIndex + 1].to);
};
const prevPage = (event) => {
    router.push(items.value[event.pageIndex - 1].to);
};
const complete = () => {
    toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + formObject.value.firstname + ' ' + formObject.value.lastname + ' your order completed.'});
};

const isActive = (item) => {
    return item.route ? router.resolve(item.route).path === route.path : false;
};
<\/script>

<style scoped>
::v-deep(b) {
    display: block;
}

::v-deep(.p-card-body) {
    padding: 2rem;
}
</style>`,pages:[{tabName:"PersonalDemo",content:`
<template>
    <div class="stepsdemo-content">
        <Card>
            <template v-slot:title>
                Personal Information
            </template>
            <template v-slot:subtitle>
                Enter your personal information
            </template>
            <template v-slot:content>
                <div class="p-fluid">
                    <div class="field">
                        <label for="firstname">Firstname</label>
                        <InputText id="firstname" v-model="firstname" :class="{'p-invalid': validationErrors.firstname && submitted}" />
                        <small v-show="validationErrors.firstname && submitted" class="p-error">Firstname is required.</small>
                    </div>
                    <div class="field">
                        <label for="lastname">Lastname</label>
                        <InputText id="lastname" v-model="lastname" :class="{'p-invalid': validationErrors.lastname && submitted}" />
                        <small v-show="validationErrors.lastname && submitted" class="p-error">Lastname is required.</small>
                    </div>
                    <div class="field">
                        <label for="age">Age</label>
                        <InputNumber id="age" v-model="age" />
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <div class="grid grid-nogutter justify-content-between">
                    <i></i>
                    <Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" />
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            firstname: '',
            lastname: '',
            age: null,
            submitted: false,
            validationErrors: {}
        }
    },
    methods: {
        nextPage() {
            this.submitted = true;
            if (this.validateForm() ) {
                this.$emit('next-page', {formData: {firstname: this.firstname, lastname: this.lastname, age: this.age}, pageIndex: 0});
            }
        },
        validateForm() {
            if (!this.firstname.trim())
                this.validationErrors['firstname'] = true;
            else
                delete this.validationErrors['firstname'];

            if (!this.lastname.trim())
                this.validationErrors['lastname'] = true;
            else
                delete this.validationErrors['lastname'];

            return !Object.keys(this.validationErrors).length;
        }
    }
}
<\/script>
`},{tabName:"SeatDemo",content:`
<template>
    <div class="stepsdemo-content">
        <Card>
            <template v-slot:title>
                Seat Information
            </template>
            <template v-slot:subtitle>
                Choose your seat
            </template>
            <template v-slot:content>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12 md:col-6">
                        <label for="class">Class</label>
                        <Dropdown inputId="class" v-model="selectedClass" :options="classes" @change="setVagons($event)" optionLabel="name" placeholder="Select a Class" />
                    </div>
                    <div class="field col-12 md:col-6">
                        <label for="lastname">Wagon</label>
                        <Dropdown inputId="wagon" v-model="selectedVagon" :options="vagons" @change="setSeats($event)" optionLabel="vagon" placeholder="Select a Vagon" />
                    </div>
                    <div class="field col-12">
                        <label for="seat">Seat</label>
                        <Dropdown inputId="seat" v-model="selectedSeat" :options="seats" optionLabel="seat" placeholder="Select a Seat" />
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <div class="grid grid-nogutter justify-content-between">
                    <Button label="Back" @click="prevPage()" icon="pi pi-angle-left" />
                    <Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" />
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            selectedClass: '',
            classes: [
                {name: 'First Class', code: 'A', factor: 1},
                {name: 'Second Class', code: 'B', factor: 2},
                {name: 'Third Class', code: 'C', factor: 3}
            ],
            vagons: [],
            selectedVagon: '',
            seats: [],
            selectedSeat: ''
        }
    },
    methods: {
        setVagons(event) {
            if (this.selectedClass && event.value) {
                this.vagons = [];
                this.seats = [];
                for (let i = 1; i < 3 * event.value.factor; i++) {
                    this.vagons.push({vagon: i + event.value.code, type: event.value.name, factor: event.value.factor});
                }
            }
        },
        setSeats(event) {
            if (this.selectedVagon && event.value) {
                this.seats = [];
                for (let i = 1; i < 10 * event.value.factor; i++) {
                    this.seats.push({seat: i, type: event.value.type});
                }
            }
        },
        nextPage() {
            this.$emit('next-page', {formData: {class: this.selectedClass.name, vagon: this.selectedVagon.vagon, seat: this.selectedSeat.seat}, pageIndex: 1});
        },
        prevPage() {
            this.$emit('prev-page', {pageIndex: 1});
        }
    }
}
<\/script>
`},{tabName:"PaymentDemo",content:`
<template>
    <div class="stepsdemo-content">
        <Card>
            <template v-slot:title>
                Payment Information
            </template>
            <template v-slot:subtitle>
                Enter your card details
            </template>
            <template v-slot:content>
                <div class="p-fluid formgrid grid">
                    <div class="field col-12">
                        <label for="class">Card Holder Name</label>
                        <InputText type="text" v-model="cardholderName" />
                    </div>
                    <div class="field col-8">
                        <label id="number" for="lastname">Number</label>
                        <InputMask id="number" mask="9999-9999-9999-9999" v-model="cardholderNumber" />
                    </div>
                    <div class="field col-2">
                        <label id="date" for="date">Date</label>
                        <InputMask id="date" mask="99/99" v-model="date" />
                    </div>
                    <div class="field col-2">
                        <label for="cvv">CVV</label>
                        <InputMask id="cvv" mask="999" v-model="cvv" />
                    </div>
                    <div class="field-checkbox col-12">
                        <Checkbox id="remember" v-model="remember" :binary="true" />
                        <label for="remember" class="p-checkbox-label">Save credit card information for future</label>
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <div class="grid grid-nogutter justify-content-between">
                    <Button label="Back" @click="prevPage()" icon="pi pi-angle-left" />
                    <Button label="Next" @click="nextPage()" icon="pi pi-angle-right" iconPos="right" />
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cardholderName:'',
            cardholderNumber:'',
            date:'',
            cvv:'',
            remember:false
        }
    },
    methods: {
        nextPage() {
            this.$emit('next-page', {formData: {cardholderName: this.cardholderName, cardholderNumber: this.cardholderNumber, date: this.date, cvv: this.cvv}, pageIndex: 2});
        },
        prevPage() {
            this.$emit('prev-page', {pageIndex: 2});
        }
    }
}
<\/script>
`},{tabName:"ConfirmationDemo",content:`
<template>
    <div class="stepsdemo-content">
        <Card>
            <template v-slot:title>
                Confirmation
            </template>
            <template v-slot:content>
                <div class="field col-12">
                    <label for="class">Name</label>
                    <b>{{formData.firstname ? formData.firstname : '-'}} {{formData.lastname ? formData.lastname : '-'}}</b>
                </div>
                <div class="field col-12">
                    <label for="Age">Age</label>
                    <b>{{formData.age ? formData.age : '-'}}</b>
                </div>
                <div class="field col-12">
                    <label for="Age">Seat Class</label>
                    <b>{{formData.class ? formData.class : '-'}}</b>
                </div>
                <div class="field col-12">
                    <label for="Age">Wagon Number</label>
                    <b>{{formData.vagon ? formData.vagon : '-'}}</b>
                </div>
                <div class="field col-12">
                    <label for="Age">Seat</label>
                    <b>{{formData.seat ? formData.seat : '-'}}</b>
                </div>
                <div class="field col-12">
                    <label for="Age">Cardholder Name</label>
                    <b>{{formData.cardholderName ? formData.cardholderName : '-'}}</b>
                </div>
                <div class="field col-12">
                    <label for="Age">Card Number</label>
                    <b>{{formData.cardholderNumber ? formData.cardholderNumber : '-'}}</b>
                </div>
                <div class="field col-12">
                    <label for="Age">Date</label>
                    <b>{{formData.date ? formData.date : '-'}}</b>
                </div>
                <div class="field col-12">
                    <label for="Age">CVV</label>
                    <b>{{formData.cvv && formData.cvv.length === 3  ? '**' + formData.cvv[2] : '-'}}</b>
                </div>
            </template>
            <template v-slot:footer>
                <div class="grid grid-nogutter justify-content-between">
                    <Button label="Back" @click="prevPage()" icon="pi pi-angle-left" />
                    <Button label="Complete" @click="complete()" icon="pi pi-check" iconPos="right" class="p-button-success"/>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
export default {
    props: {
        formData: Object
    },
    methods: {
        prevPage() {
            this.$emit('prev-page', {pageIndex: 3});
        },
        complete() {
            this.$emit('complete');
        }
    }
}
<\/script>
`}]}}},methods:{nextPage(t){for(let s in t.formData)this.formObject[s]=t.formData[s];this.$router.push(this.items[t.pageIndex+1].to)},prevPage(t){this.$router.push(this.items[t.pageIndex-1].to)},complete(){this.$toast.add({severity:"success",summary:"Order submitted",detail:"Dear, "+this.formObject.firstname+" "+this.formObject.lastname+" your order completed."})},isActive(t){return t.route?this.$router.resolve(t.route).path===this.$route.path:!1}}},ie=e("p",null,[i("In order to add interactivity to the component, disable "),e("i",null,"readonly"),i(" to control the Steps.")],-1),pe={class:"card"},ce=["href","onClick","onKeydown"],de=e("br",{class:"mt-4"},null,-1);function me(t,s,p,_,o,c){const n=b,r=C("router-link"),x=C("Steps"),T=R,k=P;return l(),h(g,null,[a(n,u(v(t.$attrs)),{default:d(()=>[ie]),_:1},16),e("div",pe,[a(x,{model:o.items,"aria-label":"Form Steps",pt:{menuitem:({context:m})=>({class:c.isActive(m.item)&&"p-highlight p-steps-current"})}},{item:d(({label:m,item:A,index:D,props:y})=>[A.route?(l(),S(r,{key:0,to:A.route,custom:""},{default:d($=>[e("a",I({href:$.href},y.action,{onClick:N=>$.navigate(N),onKeydown:j(N=>$.navigate(N),["enter"])}),[e("span",u(v(y.step)),w(D+1),17),e("span",u(v(y.label)),w(m),17)],16,ce)]),_:2},1032,["to"])):F("",!0)]),_:1},8,["model","pt"])]),a(T,{formData:o.formObject,onPrevPage:s[0]||(s[0]=m=>c.prevPage(m)),onNextPage:s[1]||(s[1]=m=>c.nextPage(m)),onComplete:c.complete},{default:d(({Component:m})=>[(l(),S(E,null,[(l(),S(V(m)))],1024))]),_:1},8,["formData","onComplete"]),de,a(k,{code:o.code},null,8,["code"])],64)}const ue=f(le,[["render",me]]),ve={data(){return{items:[{label:"Personal",route:"/steps"},{label:"Seat",route:"/steps/seat"},{label:"Payment",route:"/steps/payment"},{label:"Confirmation",route:"/steps/confirmation"},{label:"File Upload",url:"/fileupload"}],code:{basic:`<Steps :model="items" aria-label="Form Steps" :readonly="false"
    :pt="{
        menuitem: ({ context }) => ({
            class: isActive(context.item) && 'p-highlight p-steps-current'
        })
    }">
    <template #item="{ label, item, index, props }">
        <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
            <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                <span v-bind="props.step">{{ index + 1 }}</span>
                <span v-bind="props.label">{{ label }}</span>
            </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.step">{{ index + 1 }}</span>
            <span v-bind="props.label">{{ label }}</span>
        </a>
    </template>
</Steps>`,options:`<template>
    <div>        
        <div class="card">
            <Steps :model="items" aria-label="Form Steps" :readonly="false"
                :pt="{
                    menuitem: ({ context }) => ({
                        class: isActive(context.item) && 'p-highlight p-steps-current'
                    })
                }">
                <template #item="{ label, item, index, props }">
                    <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                        <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                            <span v-bind="props.step">{{ index + 1 }}</span>
                            <span v-bind="props.label">{{ label }}</span>
                        </a>
                    </router-link>
                    <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                        <span v-bind="props.step">{{ index + 1 }}</span>
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </template>
            </Steps>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Personal',
                    route: '/steps'
                },
                {
                    label: 'Seat',
                    route: '/steps/seat'
                },
                {
                    label: 'Payment',
                    route: '/steps/payment'
                },
                {
                    label: 'Confirmation',
                    route: '/steps/confirmation'
                },
                {
                    label: 'File Upload',
                    url: '/fileupload'
                }
            ]
        }
    },
    methods: {
        isActive(item) {
            return item.route ? this.$router.resolve(item.route).path === this.$route.path : false;
        }
    }
}
<\/script>`,composition:`<template>
    <div>
        <div class="card">
            <Steps :model="items" aria-label="Form Steps" :readonly="false"
                :pt="{
                    menuitem: ({ context }) => ({
                        class: isActive(context.item) && 'p-highlight p-steps-current'
                    })
                }">
                <template #item="{ label, item, index, props }">
                    <router-link v-if="item.route" v-slot="routerProps" :to="item.route" custom>
                        <a :href="routerProps.href" v-bind="props.action" @click="($event) => routerProps.navigate($event)" @keydown.enter="($event) => routerProps.navigate($event)">
                            <span v-bind="props.step">{{ index + 1 }}</span>
                            <span v-bind="props.label">{{ label }}</span>
                        </a>
                    </router-link>
                    <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                        <span v-bind="props.step">{{ index + 1 }}</span>
                        <span v-bind="props.label">{{ label }}</span>
                    </a>
                </template>
            </Steps>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const items = ref([
    {
        label: 'Personal',
        route: "/"
    },
    {
        label: 'Seat',
        route: "/seat",
    },
    {
        label: 'Payment',
        route: "/payment",
    },
    {
        label: 'Confirmation',
        route: "/confirmation",
    },
    {
        label: 'File Upload',
        url: '/fileupload'
    }
]);

const isActive = (item) => {
    return item.route ? router.resolve(item.route).path === route.path : false;
}
<\/script>`}}},methods:{isActive(t){return t.route?this.$router.resolve(t.route).path===this.$route.path:!1}}},fe=e("p",null,[i(" Since v3.33.0 the vue-router dependency of menu components is deprecated and templating should be used to define router links instead. This approach provides flexibility to be able to use any kind of router link component such as "),e("i",null,"NuxtLink"),i(" or "),e("i",null,"router-link"),i(". Here is an example with vue-router. ")],-1);function be(t,s,p,_,o,c){const n=b,r=P;return l(),h(g,null,[a(n,u(v(t.$attrs)),{default:d(()=>[fe]),_:1},16),a(r,{code:o.code},null,8,["code"])],64)}const he=f(ve,[["render",be]]),ge={data(){return{items:[{label:"Personal",to:"/steps"},{label:"Seat",to:"/steps/seat"},{label:"Payment",to:"/steps/payment"},{label:"Confirmation",to:"/steps/confirmation"}],code:{basic:`<Steps
    :model="items"
    :readonly="false"
    :pt="{
        root: { class: 'w-30rem' }
    }"
/>`,options:`<template>
    <div>        
        <div class="card">
            <Steps
                :model="items"
                :readonly="false"
                :pt="{
                    root: { class: 'w-30rem' }
                }"
            />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    label: 'Personal',
                    to: '/'
                },
                {
                    label: 'Seat',
                    to: '/seat'
                },
                {
                    label: 'Payment',
                    to: '/payment'
                },
                {
                    label: 'Confirmation',
                    to: '/confirmation'
                }
            ]
        }
    }
}
<\/script>`,composition:`<template>
    <div>
        <div class="card">
            <Steps
                :model="items"
                :readonly="false"
                :pt="{
                    root: { class: 'w-30rem' }
                }"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Personal',
        to: "/"
    },
    {
        label: 'Seat',
        to: "/seat",
    },
    {
        label: 'Payment',
        to: "/payment",
    },
    {
        label: 'Confirmation',
        to: "/confirmation",
    }
]);
<\/script>`}}}},_e={class:"card flex justify-content-center"};function xe(t,s,p,_,o,c){const n=b,r=C("Steps"),x=P;return l(),h(g,null,[a(n,u(v(t.$attrs)),null,16),e("div",_e,[a(r,{model:o.items,readonly:!1,pt:{root:{class:"w-30rem"}}},null,8,["model"])]),a(x,{code:o.code},null,8,["code"])],64)}const ye=f(ge,[["render",xe]]),$e={},Se=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/steps.jpg"})],-1);function Pe(t,s){const p=b;return l(),h(g,null,[a(p,u(v(t.$attrs)),{default:d(()=>[e("p",null,w(t.$attrs.description),1)]),_:1},16),Se],64)}const ke=f($e,[["render",Pe]]),De={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:ke},{id:"pt.doc.steps",label:"Steps PT Options",component:L,data:z("Steps")},{id:"pt.demo",label:"Demo",component:ye}]}}},Ce={class:"doc-main"},we=e("div",{class:"doc-intro"},[e("h1",null,"Steps Pass Through")],-1);function Ae(t,s,p,_,o,c){const n=O,r=B;return l(),h(g,null,[e("div",Ce,[we,a(n,{docs:o.docs},null,8,["docs"])]),a(r,{docs:o.docs},null,8,["docs"])],64)}const Te=f(De,[["render",Ae]]),Ne={},Ie=e("p",null,"List of class names used in the styled mode.",-1),je=M('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-steps</td><td>Container element.</td></tr><tr><td>p-steps-list</td><td>Root list element.</td></tr><tr><td>p-steps-current</td><td>Current menuitem element.</td></tr><tr><td>p-menuitem-link</td><td>Link element of the menuitem.</td></tr><tr><td>p-steps-item</td><td>Menuitem element.</td></tr><tr><td>p-steps-number</td><td>Number of menuitem.</td></tr><tr><td>p-steps-title</td><td>Label of menuitem.</td></tr></tbody></table></div>',1);function Fe(t,s){const p=b;return l(),h(g,null,[a(p,u(v(t.$attrs)),{default:d(()=>[Ie]),_:1},16),je],64)}const Oe=f(Ne,[["render",Fe]]),Be={data(){return{code1:{basic:`
export default {
    steps: {
        root: 'relative',
        menu: 'p-0 m-0 list-none flex',
        menuitem: {
            class: ['relative flex justify-center flex-1 overflow-hidden', 'before:border-t before:border-gray-300 before:dark:border-blue-900/40 before:w-full before:absolute before:top-1/4 before:left-0 before:transform before:-translate-y-1/2']
        },
        action: {
            class: [
                'inline-flex flex-col items-center overflow-hidden',
                'transition-shadow rounded-md bg-white dark:bg-transparent',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        step: {
            class: ['flex items-center justify-center', 'text-gray-700 dark:text-white/80 border border-gray-300 dark:border-blue-900/40  bg-white dark:bg-gray-900 w-[2rem] h-[2rem] leading-2rem text-sm z-10 rounded-full']
        },
        label: {
            class: ['block', 'whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full', 'mt-2 text-gray-500 dark:text-white/60']
        }
    }
}
`},code2:{composition:`<template>
    <div>
        <div class="card">
            <Steps :model="items" :readonly="false" aria-label="Form Steps" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Personal',
        to: "/"
    },
    {
        label: 'Seat',
        to: "/seat",
    },
    {
        label: 'Payment',
        to: "/payment",
    },
    {
        label: 'Confirmation',
        to: "/confirmation",
    }
]);
<\/script>`}}}},Ve=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function Ee(t,s,p,_,o,c){const n=q,r=P,x=b;return l(),S(x,u(v(t.$attrs)),{default:d(()=>[e("p",null,[i(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),a(n,{to:"/tailwind"},{default:d(()=>[i("Tailwind Customization")]),_:1}),i(" section for an example. ")]),a(r,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),Ve,a(r,{code:o.code2,embedded:""},null,8,["code"])]),_:1},16)}const Re=f(Be,[["render",Ee]]),Le={data(){return{docs:[{id:"theming.styled",label:"Styled",component:Oe},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Re}]}]}}},Me={class:"doc-main"},Ke=e("div",{class:"doc-intro"},[e("h1",null,"Steps Theming")],-1);function ze(t,s,p,_,o,c){const n=O,r=B;return l(),h(g,null,[e("div",Me,[Ke,a(n,{docs:o.docs},null,8,["docs"])]),a(r,{docs:o.docs},null,8,["docs"])],64)}const qe=f(Le,[["render",ze]]),Ue={data(){return{docs:[{id:"import",label:"Import",component:re},{id:"basic",label:"Basic",component:ae},{id:"interactive",label:"Interactive",component:ue},{id:"router",label:"Router",component:he},{id:"accessibility",label:"Accessibility",component:X}],ptComponent:Te,themingDoc:qe}}};function We(t,s,p,_,o,c){const n=K;return l(),S(n,{title:"Vue Stepper Component",header:"Steps",description:"Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design.",componentDocs:o.docs,apiDocs:["Steps","MenuItem"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const Qe=f(Ue,[["render",We]]);export{Qe as default};
