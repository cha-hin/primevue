import{_ as h,o as n,e as w,w as d,n as p,g as m,b as e,f as t,h as _,r as y,c as o,a as r,i as a,F as k,j as A,H as C,k as I,l as T,T as D,M as W}from"./entry.68beb385.js";const V={},S=e("p",null,[t("Colors on a web page should aim a contrast ratio of at least "),e("strong",null,"4.5:1"),t(" and consider a selection of colors that do not cause vibration.")],-1),H=e("h3",null,"Good Contrast",-1),M=e("p",null,"Color contrast between the background and the foreground content should be sufficient enough to ensure readability. Example below displays two cases with good and bad samples.",-1),R=e("div",{class:"flex"},[e("div",{class:"h-8rem w-8rem flex justify-content-center align-items-center mr-5 font-bold bg-blue-600",style:{"border-radius":"10px"}},[e("span",{class:"text-white"},"GOOD")]),e("div",{class:"h-8rem w-8rem flex justify-content-center align-items-center mr-5 font-bold bg-blue-400",style:{"border-radius":"10px"}},[e("span",{class:"text-white"},"BAD")])],-1),P=e("h3",null,"Vibration",-1),j=e("p",null,"Color vibration is leads to an illusion of motion due to choosing colors that have low visibility against each other. Color combinations need to be picked with caution to avoid vibration.",-1),G=e("div",{class:"flex"},[e("div",{class:"h-8rem w-8rem flex justify-content-center align-items-center mr-5 font-bold bg-pink-500",style:{"border-radius":"10px"}},[e("span",{class:"text-blue-500"},"VIBRATE")])],-1),U=e("h3",null,"Dark Mode",-1),B=e("p",null,"Highly saturated colors should be avoided when used within a dark design scheme as they cause eye strain. Instead desaturated colors should be preferred.",-1),L=e("div",{class:"flex"},[e("div",{class:"h-8rem w-8rem flex flex-column justify-content-center align-items-center mr-5 font-bold bg-gray-900",style:{"border-radius":"10px"}},[e("span",{class:"text-indigo-500"},"Indigo 500"),e("i",{class:"text-indigo-500 pi pi-times-circle mt-3 text-xl"})]),e("div",{class:"h-8rem w-8rem flex flex-column justify-content-center align-items-center mr-5 font-bold bg-gray-900",style:{"border-radius":"10px"}},[e("span",{class:"text-indigo-200"},"Indigo 200"),e("i",{class:"text-indigo-200 pi pi-check-circle mt-3 text-xl"})])],-1);function N(s,l){const i=_;return n(),w(i,p(m(s.$attrs)),{default:d(()=>[S,H,M,R,P,j,G,U,B,L]),_:1},16)}const z=h(V,[["render",N]]),F={},O=e("p",null," Native form elements should be preferred instead of elements that are meant for other purposes like presentation. As an example, button below is rendered as a form control by the browser, can receive focus via tabbing and can be used with space key as well to trigger. ",-1),E=e("code",null,`
<button @click="onButtonClick(event)">Click</button>
        
`,-1),q=[E],J=e("div",{class:"doc-section-description"},[e("p",null,"On the other hand, a fancy css based button using a div has no keyboard or screen reader support.")],-1),K=e("code",null,`
<div class="fancy-button" @click="onButtonClick(event)">Click</div>

`,-1),X=[K],Q=e("div",{class:"doc-section-description"},[e("p",null,[e("i",null,"tabindex"),t(" is required to make a div element accessible in addition to use a keydown to bring the keyboard support back. To avoid the overload and implementing functionality that is already provided by the browser, native form controls should be preferred. ")])],-1),Y=e("code",null,`
<div class="fancy-button" @click="onClick(event)" @keydown="onKeyDown(event)" tabindex="0">Click</div>

`,-1),Z=[Y],ee=e("div",{class:"doc-section-description"},[e("p",null,[t("Form components must be related to another element that describes what the form element is used for. This is usually achieved with the "),e("i",null,"label"),t(" element.")])],-1),te=e("code",null,`
<label for="myinput">Username:</label>
<input id="myinput" type="text" name="username" />

`,-1),ne=[te];function oe(s,l){const i=_,c=y("code");return n(),o(k,null,[r(i,p(m(s.$attrs)),{default:d(()=>[O]),_:1},16),a((n(),o("pre",null,q)),[[c]]),J,a((n(),o("pre",null,X)),[[c]]),Q,a((n(),o("pre",null,Z)),[[c]]),ee,a((n(),o("pre",null,ne)),[[c]])],64)}const se=h(F,[["render",oe]]),ie={},ae=e("p",null," According to the World Health Organization, 15% of the world population has a disability to some degree. As a result, accessibility features in any context such as a ramp for wheelchair users or a multimedia with captions are crucial to ensure content can be consumed by anyone. ",-1),ce=e("p",null,"Types of disabilities are diverse so you need to know your audience well and how they interact with the content created. There four main categories;",-1),re=e("h3",null,"Visual Impairments",-1),le=e("p",null,[t(" Blindness, low-level vision or color blindness are the common types of visual impairments. Screen magnifiers and the color blind mode are usually built-in features of the browsers whereas for people who rely on screen readers, page developers are required to make sure content is readable by the readers. Popular readers are "),e("a",{href:"https://www.nvaccess.org",alt:"NVDA Reader"}," NVDA "),t(" , "),e("a",{href:"https://www.freedomscientific.com/Products/software/JAWS/",alt:"JAWS Reader"}," JAWS "),t(" and "),e("a",{href:"https://www.chromevox.com",alt:"ChromeVox Reader"}," ChromeVox "),t(" . ")],-1),de=e("h3",null,"Hearing Impairments",-1),he=e("p",null," Deafness or hearing loss refers to the inability to hear sounds totally or partially. People with hearing impairments use assistive devices however it may not be enough when interacting with a web page. Common implementation is providing textual alternatives, transcripts and captions for content with audio. ",-1),ue=e("h3",null,"Mobility Impairments",-1),pe=e("p",null," People with mobility impairments have disabilities related to movement due to loss of a limb, paralysis or other varying reasons. Assistive technologies like a head pointer is a device to interact with a screen whereas keyboard or a trackpad remain as solutions for people who are not able to utilize a mouse. ",-1),me=e("h3",null,"Cognitive Impairments",-1),_e=e("p",null," Cognitive impairments have a wider range that includes people with learning disabilities, depression and dyslexia. A well designed content also leads to better user experience for people without disabilities so designing for cognitive impairments result in better design for any user. ",-1);function be(s,l){const i=_;return n(),w(i,p(m(s.$attrs)),{default:d(()=>[ae,ce,re,le,de,he,ue,pe,me,_e]),_:1},16)}const fe=h(ie,[["render",be]]),ve={},ge=e("p",null,[t(" HTML offers various element to organize content on a web page that screen readers are aware of. Preferring Semantic HTML for good semantics provide out of the box support for reader which is not possible when regular "),e("i",null,"div"),t(" elements with classes are used. Consider the following example that do not mean too much for readers. ")],-1),we=e("code",null,`
<div class="header">
    <div class="header-text">Header</div>
</div>

<div class="nav"></div>

<div class="main">
    <div class="content">
    </div>

    <div class="sidebar">
    </div>
</div>

<div class="footer">
</div>

`,-1),ye=[we],ke=e("div",{class:"doc-section-description"},[e("p",null,"Same layout can be achieved using the semantic elements with screen reader support built-in.")],-1),xe=e("code",null,`
<header>
    <h1>Header</h1>
</header>

<nav></nav>

<main>
    <article></article>

    <aside></aside>
</main>

<footer>
</footer>

`,-1),$e=[xe];function Ae(s,l){const i=_,c=y("code");return n(),o(k,null,[r(i,p(m(s.$attrs)),{default:d(()=>[ge]),_:1},16),a((n(),o("pre",null,ye)),[[c]]),ke,a((n(),o("pre",null,$e)),[[c]])],64)}const Ce=h(ve,[["render",Ae]]),Ie={data(){return{checked:!1}}},Te=e("p",null,' ARIA refers to "Accessible Rich Internet Applications" is a suite to fill the gap where semantic HTML is inadequate. These cases are mainly related to rich UI components/widgets. Although browser support for rich UI components such as a datepicker or colorpicker has been improved over the past years many web developers still utilize UI components derived from standard HTML elements created by them or by other projects like PrimeVue. These types of components must provide keyboard and screen reader support, the latter case is where the WAI-ARIA is utilized. ',-1),De=e("p",null,[t(" ARIA consists of roles, properties and attributes. "),e("b",null,"Roles"),t(" define what the element is mainly used for e.g. "),e("i",null,"checkbox"),t(", "),e("i",null,"dialog"),t(", "),e("i",null,"tablist"),t(" whereas "),e("b",null,"States"),t(" and "),e("b",null,"Properties"),t(" define the metadata of the element like "),e("i",null,"aria-checked"),t(", "),e("i",null,"aria-disabled"),t(". ")],-1),We=e("p",null,"Consider the following case of a native checkbox. It has built-in keyboard and screen reader support.",-1),Ve=e("code",null,`
<input type="checkbox" value="Prime" name="ui" checked>

`,-1),Se=[Ve],He=e("div",{class:"doc-section-description"},[e("p",null," A fancy checkbox with css animations might look more appealing but accessibility might be lacking. Checkbox below may display a checked font icon with animations however it is not tabbable, cannot be checked with space key and cannot be read by a reader. ")],-1),Me=e("code",null,`
<div class="fancy-checkbox">
    <i class="checked-icon" v-if="checked"></i>
</div>

`,-1),Re=[Me],Pe=e("div",{class:"doc-section-description"},[e("p",null,[t("One alternative is using ARIA roles for readers and use javascript for keyboard support. Notice the usage of "),e("i",null,"aria-labelledby"),t(" as a replacement of the "),e("i",null,"label"),t(" tag with for.")])],-1),je=e("code",null,`
<span id="chk-label">Remember Me</span>
<div class="fancy-checkbox" role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="chk-label"
    @click="toggle" @keydown="onKeyDown(event)">
    <i class="checked-icon" v-if="checked"></i>
</div>

`,-1),Ge=[je],Ue=e("div",{class:"doc-section-description"},[e("p",null,[t(" However the best practice is combining semantic HTML for accessibility while keeping the design for UX. This approach involves hiding a native checkbox for accessibility and using javascript events to update its state. Notice the usage of "),e("i",null,"p-sr-only"),t(" that hides the elements from the user but not from the screen reader. ")])],-1),Be=e("code",null,`
<label for="chkbox">Remember Me</label>
<div class="fancy-checkbox" @click="toggle">
    <input class="p-sr-only" type="checkbox" id="chkbox" @focus="updateParentVisuals" @blur="updateParentVisuals"
        @keydown="onKeyDown(event)">
    <i class="checked-icon" v-if="checked"></i>
</div>

`,-1),Le=[Be],Ne=e("div",{class:"doc-section-description"},[e("p",null,"A working sample is the PrimeVue checkbox that is tabbable, keyboard accessible and is compliant with a screen reader. Instead of ARIA roles it relies on a hidden native checkbox.")],-1),ze={class:"card flex align-items-center justify-content-center"},Fe=e("label",{for:"binary",class:"mr-2"},"Remember Me",-1);function Oe(s,l,i,c,b,x){const f=_,v=A("Checkbox"),u=y("code");return n(),o(k,null,[r(f,p(m(s.$attrs)),{default:d(()=>[Te,De,We]),_:1},16),a((n(),o("pre",null,Se)),[[u]]),He,a((n(),o("pre",null,Re)),[[u]]),Pe,a((n(),o("pre",null,Ge)),[[u]]),Ue,a((n(),o("pre",null,Le)),[[u]]),Ne,e("div",ze,[Fe,r(v,{id:"binary",modelValue:b.checked,"onUpdate:modelValue":l[0]||(l[0]=g=>b.checked=g),binary:""},null,8,["modelValue"])])],64)}const Ee=h(Ie,[["render",Oe]]),qe={},Je=e("p",null," Correct page structure with the aid of assistive technologies are the core ingridients for an accessible web content. HTML is based on an accessible foundation, form controls can be used by keyboard by default and semantic HTML is easier to be processed by a screen reader. ",-1),Ke=e("p",null,[e("a",{href:"https://www.w3.org/WAI/standards-guidelines/wcag/",alt:"WCAG Website"}," WCAG "),t(" refers to "),e("strong",null,"Web Content Accessibility Guideline"),t(", a standard managed by the WAI (Web Accessibility Initiative) of W3C (World Wide Web Consortium). WCAG consists of recommendations for making the web content more accessible. PrimeVue components aim high level of WCAG compliancy in the near future. ")],-1),Xe=e("p",null,[t(" Various countries around the globe have governmental policies regarding web accessibility as well. Most well known of these are "),e("a",{href:"https://www.section508.gov/manage/laws-and-policies/"},"Section 508"),t(" in the US and "),e("a",{href:"https://digital-strategy.ec.europa.eu/en/policies/web-accessibility"},"Web Accessibility Directive"),t(" of the European Union. ")],-1);function Qe(s,l){const i=_;return n(),w(i,p(m(s.$attrs)),{default:d(()=>[Je,Ke,Xe]),_:1},16)}const Ye=h(qe,[["render",Qe]]),Ze={data(){return{checked:!1,docs:[{id:"introduction",label:"Introduction",component:fe},{id:"wcag",label:"WCAG",component:Ye},{id:"formcontrols",label:"Form Controls",component:se},{id:"semantichtml",label:"Semantic HTML",component:Ce},{id:"waiaria",label:"WAI ARIA",component:Ee},{id:"colors",label:"Colors",component:z}]}}},et={class:"doc"},tt={class:"doc-main"},nt=e("div",{class:"doc-intro"},[e("h1",null,"Accessibility"),e("p",null,"An introduction to accessibility and how it translates to Vue UI Components."),e("p",{class:"line-height-3 bg-indigo-600 text-white p-3 text-lg",style:{"border-radius":"10px"}},"PrimeVue has WCAG 2.1 AA level compliancy. Refer to the accessibility documentation of each component for detailed information.")],-1);function ot(s,l,i,c,b,x){const f=D,v=W,u=C,g=I,$=T;return n(),o("div",null,[r(u,null,{default:d(()=>[r(f,null,{default:d(()=>[t("Accessibility - PrimeVue")]),_:1}),r(v,{name:"description",content:"Accessible Vue UI Components."})]),_:1}),e("div",et,[e("div",tt,[nt,r(g,{docs:b.docs},null,8,["docs"])]),r($,{docs:b.docs},null,8,["docs"])])])}const it=h(Ze,[["render",ot]]);export{it as default};
