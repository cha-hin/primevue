import{_ as m,c as e,F as a,q as i,v as h,o as s,b as r,A as p}from"./entry.68beb385.js";const f={data(){return{usersData:["fox","airbus","mercedes","ebay","ford","vw","intel","unicredit","lufthansa","nvidia","verizon","amex"],users:null}},mounted(){this.users=[{slicedUsers:this.usersData.slice(0,6),reverse:!1},{slicedUsers:this.usersData.slice(6),reverse:!0}]},methods:{imgSrc(l){return`https://primefaces.org/cdn/primevue/images/landing/whouses/${l}-${this.colorScheme}.svg`}},computed:{colorScheme(){return this.$appState.darkTheme?"light":"dark"}}},v={class:"landing-users py-8 px-3 lg:px-8"},_=h('<div class="section-header">Who Uses</div><p class="section-detail"> PrimeTek libraries have reached over <span class="font-semibold animated-text relative white-space-nowrap"><span>110 Million Downloads </span></span> on npm! Join the PrimeLand community and experience the difference yourself. </p><div class="flex justify-content-center align-items-center mt-4"><span class="ml-2"></span></div>',3),g=r("div",{class:"fade-left h-6rem w-6rem block absolute top-0 left-0 z-2"},null,-1),w={class:"marquee-wrapper overflow-hidden flex"},k=["src","alt"],x=r("div",{class:"fade-right h-6rem w-6rem block absolute top-0 right-0 z-2"},null,-1);function b(l,y,S,$,o,n){return s(),e("section",v,[_,(s(!0),e(a,null,i(o.users,(c,d)=>(s(),e("div",{key:d,class:"logo-section relative w-full md:w-8 mt-6 users-container"},[g,r("div",w,[(s(),e(a,null,i([1,2,3],u=>r("div",{key:u,class:p(`marquee${c.reverse?" marquee-reverse":""}`)},[(s(!0),e(a,null,i(c.slicedUsers,t=>(s(),e("div",{key:t,class:"w-full"},[r("img",{src:n.imgSrc(t),alt:`${t}-${n.colorScheme}`},null,8,k)]))),128))],2)),64))]),x]))),128))])}const q=m(f,[["render",b]]);export{q as default};
