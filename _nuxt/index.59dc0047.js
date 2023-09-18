import{_ as v,o as c,e as T,w as u,b as e,f,a as o,m as M,C as I,h as _,j as U,c as m,n as g,g as x,F as b,p as y,A as E,t as $,q as B,E as D,D as V,k as P,l as j,v as N,x as q}from"./entry.68beb385.js";import{g as O}from"./PTHelper.11558b27.js";import{_ as W}from"./PrimeVueNuxtLink.f51d0c80.js";const H={},K=e("h3",null,"Screen Reader",-1),G=e("p",null,[f("FileUpload uses a hidden native "),e("i",null,"input"),f(" element with "),e("i",null,'type="file"'),f(" for screen readers.")],-1),J=e("h3",null,"Keyboard Support",-1);function Q(t,a){const d=I,p=_;return c(),T(p,M({id:"accessibility",label:"Accessibility"},t.$attrs),{default:u(()=>[K,G,J,e("p",null,[f("Interactive elements of the uploader are buttons, visit the "),o(d,{to:"/button/#accessibility"},{default:u(()=>[f("Button")]),_:1}),f(" accessibility section for more information.")])]),_:1},16)}const X=v(H,[["render",Q]]),Y={data(){return{code:{basic:`<FileUpload name="demo[]" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
    <template #empty>
        <p>Drag and drop files to here to upload.</p>
    </template>
</FileUpload>`,options:`<template>
    <div class="card">
        <Toast />
        <FileUpload name="demo[]" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
    </div>
</template>

<script>
export default {
    methods: {
        onAdvancedUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Toast />
        <FileUpload name="demo[]" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const onAdvancedUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
<\/script>`}}},methods:{onAdvancedUpload(){this.$toast.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})}}},Z=e("p",null,"FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.",-1),ee={class:"card"},te=e("p",null,"Drag and drop files to here to upload.",-1);function oe(t,a,d,p,l,s){const n=_,i=U("FileUpload"),h=y;return c(),m(b,null,[o(n,g(x(t.$attrs)),{default:u(()=>[Z]),_:1},16),e("div",ee,[o(i,{name:"demo[]",url:"./upload.php",onUpload:a[0]||(a[0]=S=>s.onAdvancedUpload(S)),multiple:!0,accept:"image/*",maxFileSize:1e6},{empty:u(()=>[te]),_:1})]),o(h,{code:l.code},null,8,["code"])],64)}const le=v(Y,[["render",oe]]),ae={data(){return{code:{basic:'<FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />',options:`<template>
  <div class="card flex justify-content-center">
      <Toast />
      <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
  </div>
</template>

<script>
export default {
  methods: {
      onUpload() {
          this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
      }
  }
};
<\/script>`,composition:`<template>
  <div class="card flex justify-content-center">
      <Toast />
      <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" :auto="true" chooseLabel="Browse" />
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const onUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
<\/script>`}}},methods:{onUpload(){this.$toast.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})}}},ie=e("p",null,[f("When "),e("i",null,"auto"),f(" property is enabled, a file gets uploaded instantly after selection.")],-1),de={class:"card flex justify-content-center"};function se(t,a,d,p,l,s){const n=_,i=U("FileUpload"),h=y;return c(),m(b,null,[o(n,g(x(t.$attrs)),{default:u(()=>[ie]),_:1},16),e("div",de,[o(i,{mode:"basic",name:"demo[]",url:"./upload.php",accept:"image/*",maxFileSize:1e6,onUpload:s.onUpload,auto:!0,chooseLabel:"Browse"},null,8,["onUpload"])]),o(h,{code:l.code},null,8,["code"])],64)}const ne=v(ae,[["render",se]]),ce={data(){return{code:{basic:'<FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />',options:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
    </div>
</template>

<script>
export default {
    methods: {
        onUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Toast />
        <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
<\/script>`}}},methods:{onUpload(){this.$toast.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})}}},re=e("p",null,[f("FileUpload basic "),e("i",null,"mode"),f(" provides a simpler UI as an alternative to default advanced mode.")],-1),pe={class:"card flex justify-content-center"};function me(t,a,d,p,l,s){const n=_,i=U("FileUpload"),h=y;return c(),m(b,null,[o(n,g(x(t.$attrs)),{default:u(()=>[re]),_:1},16),e("div",pe,[o(i,{mode:"basic",name:"demo[]",url:"./upload.php",accept:"image/*",maxFileSize:1e6,onUpload:s.onUpload},null,8,["onUpload"])]),o(h,{code:l.code},null,8,["code"])],64)}const ue=v(ce,[["render",me]]),fe={data(){return{code:{basic:'<FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload @uploader="customBase64Uploader" />',options:`<template>
    <div class="card flex justify-content-center">
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload @uploader="customBase64Uploader" />
    </div>
</template>

<script>
export default {
    methods: {
        async customBase64Uploader(event) {
            const file = event.files[0];
            const reader = new FileReader();
            let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

            reader.readAsDataURL(blob);

            reader.onloadend = function () {
                const base64data = reader.result;
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload @uploader="customBase64Uploader" />
    </div>
</template>

<script setup>
const customBase64Uploader = async (event) => {
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

    reader.readAsDataURL(blob);

    reader.onloadend = function () {
        const base64data = reader.result;
    };
};
<\/script>`}}},methods:{async customBase64Uploader(t){const a=t.files[0],d=new FileReader;let p=await fetch(a.objectURL).then(l=>l.blob());d.readAsDataURL(p),d.onloadend=function(){d.result}}}},ve=e("p",null,[f("Uploading implementation can be overridden by enabling "),e("i",null,"customUpload"),f(" property and defining a custom "),e("i",null,"uploader"),f(" handler event.")],-1),he={class:"card flex justify-content-center"};function be(t,a,d,p,l,s){const n=_,i=U("FileUpload"),h=y;return c(),m(b,null,[o(n,g(x(t.$attrs)),{default:u(()=>[ve]),_:1},16),e("div",he,[o(i,{mode:"basic",name:"demo[]",url:"/api/upload",accept:"image/*",customUpload:"",onUploader:s.customBase64Uploader},null,8,["onUploader"])]),o(h,{code:l.code},null,8,["code"])],64)}const _e=v(fe,[["render",be]]),ge={data(){return{code:{basic:"import FileUpload from 'primevue/fileupload';"}}}};function xe(t,a,d,p,l,s){const n=_,i=y;return c(),m(b,null,[o(n,g(x(t.$attrs)),null,16),o(i,{code:l.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const Ue=v(ge,[["render",xe]]),ye={data(){return{files:[],totalSize:0,totalSizePercent:0,code:{basic:`<FileUpload name="demo[]" url="./upload.php" @upload="onTemplatedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000" @select="onSelectedFiles">
    <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
        <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
            <div class="flex gap-2">
                <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                <Button @click="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" rounded outlined severity="success" :disabled="!files || files.length === 0"></Button>
                <Button @click="clearCallback()" icon="pi pi-times" rounded outlined severity="danger" :disabled="!files || files.length === 0"></Button>
            </div>
            <ProgressBar :value="totalSizePercent" :showValue="false" :class="['md:w-20rem h-1rem w-full md:ml-auto', { 'exceeded-progress-bar': totalSizePercent > 100 }]"
                ><span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span></ProgressBar
            >
        </div>
    </template>
    <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
        <div v-if="files.length > 0">
            <h5>Pending</h5>
            <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                    <div>
                        <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" class="shadow-2" />
                    </div>
                    <span class="font-semibold">{{ file.name }}</span>
                    <div>{{ formatSize(file.size) }}</div>
                    <Badge value="Pending" severity="warning" />
                    <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, removeFileCallback, index)" outlined rounded  severity="danger" />
                </div>
            </div>
        </div>

        <div v-if="uploadedFiles.length > 0">
            <h5>Completed</h5>
            <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                    <div>
                        <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" class="shadow-2" />
                    </div>
                    <span class="font-semibold">{{ file.name }}</span>
                    <div>{{ formatSize(file.size) }}</div>
                    <Badge value="Completed" class="mt-3" severity="success" />
                    <Button icon="pi pi-times" @click="removeUploadedFileCallback(index)" outlined rounded  severity="danger" />
                </div>
            </div>
        </div>
    </template>
    <template #empty>
        <div class="flex align-items-center justify-content-center flex-column">
            <i class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400" />
            <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
        </div>
    </template>
</FileUpload>`,options:`<template>
    <div class="card">
        <Toast />
        <FileUpload name="demo[]" url="./upload.php" @upload="onTemplatedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000" @select="onSelectedFiles">
            <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                    <div class="flex gap-2">
                        <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                        <Button @click="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" rounded outlined severity="success" :disabled="!files || files.length === 0"></Button>
                        <Button @click="clearCallback()" icon="pi pi-times" rounded outlined severity="danger" :disabled="!files || files.length === 0"></Button>
                    </div>
                    <ProgressBar :value="totalSizePercent" :showValue="false" :class="['md:w-20rem h-1rem w-full md:ml-auto', { 'exceeded-progress-bar': totalSizePercent > 100 }]"
                        ><span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span></ProgressBar
                    >
                </div>
            </template>
            <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
                <div v-if="files.length > 0">
                    <h5>Pending</h5>
                    <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                        <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                            <div>
                                <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" class="shadow-2" />
                            </div>
                            <span class="font-semibold">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <Badge value="Pending" severity="warning" />
                            <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, removeFileCallback, index)" outlined rounded  severity="danger" />
                        </div>
                    </div>
                </div>

                <div v-if="uploadedFiles.length > 0">
                    <h5>Completed</h5>
                    <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                        <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                            <div>
                                <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" class="shadow-2" />
                            </div>
                            <span class="font-semibold">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <Badge value="Completed" class="mt-3" severity="success" />
                            <Button icon="pi pi-times" @click="removeUploadedFileCallback(index)" outlined rounded  severity="danger" />
                        </div>
                    </div>
                </div>
            </template>
            <template #empty>
                <div class="flex align-items-center justify-content-center flex-column">
                    <i class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400" />
                    <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
                </div>
            </template>
        </FileUpload>
    </div>
</template>

<script>
export default {
    data() {
        return {
            files: [],
            totalSize: 0,
            totalSizePercent: 0,
        };
    },
    methods: {
        onRemoveTemplatingFile(file, removeFileCallback, index) {
            removeFileCallback(index);
            this.totalSize -= parseInt(this.formatSize(file.size));
            this.totalSizePercent = this.totalSize / 10;
        },
        onClearTemplatingUpload(clear) {
            clear();
            this.totalSize = 0;
            this.totalSizePercent = 0;
        },
        onSelectedFiles(event) {
            this.files = event.files;
            this.files.forEach((file) => {
                this.totalSize += parseInt(this.formatSize(file.size));
            });
        },
        uploadEvent(callback) {
            this.totalSizePercent = this.totalSize / 10;
            callback();
        },
        onTemplatedUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },
        formatSize(bytes) {
            const k = 1024;
            const dm = 3;
            const sizes = this.$primevue.config.locale.fileSizeTypes;

            if (bytes === 0) {
                return \`0 \${sizes[0]}\`;
            }

            const i = Math.floor(Math.log(bytes) / Math.log(k));
            const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

            return \`\${formattedSize} \${sizes[i]}\`;
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Toast />
        <FileUpload name="demo[]" url="./upload.php" @upload="onTemplatedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000" @select="onSelectedFiles">
            <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                    <div class="flex gap-2">
                        <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>
                        <Button @click="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" rounded outlined severity="success" :disabled="!files || files.length === 0"></Button>
                        <Button @click="clearCallback()" icon="pi pi-times" rounded outlined severity="danger" :disabled="!files || files.length === 0"></Button>
                    </div>
                    <ProgressBar :value="totalSizePercent" :showValue="false" :class="['md:w-20rem h-1rem w-full md:ml-auto', { 'exceeded-progress-bar': totalSizePercent > 100 }]"
                        ><span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span></ProgressBar
                    >
                </div>
            </template>
            <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
                <div v-if="files.length > 0">
                    <h5>Pending</h5>
                    <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                        <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                            <div>
                                <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" class="shadow-2" />
                            </div>
                            <span class="font-semibold">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <Badge value="Pending" severity="warning" />
                            <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, removeFileCallback, index)" outlined rounded  severity="danger" />
                        </div>
                    </div>
                </div>

                <div v-if="uploadedFiles.length > 0">
                    <h5>Completed</h5>
                    <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                        <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                            <div>
                                <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" class="shadow-2" />
                            </div>
                            <span class="font-semibold">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <Badge value="Completed" class="mt-3" severity="success" />
                            <Button icon="pi pi-times" @click="removeUploadedFileCallback(index)" outlined rounded  severity="danger" />
                        </div>
                    </div>
                </div>
            </template>
            <template #empty>
                <div class="flex align-items-center justify-content-center flex-column">
                    <i class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400" />
                    <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
                </div>
            </template>
        </FileUpload>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
    removeFileCallback(index);
    totalSize.value -= parseInt(formatSize(file.size));
    totalSizePercent.value = totalSize.value / 10;
};

const onClearTemplatingUpload = (clear) => {
    clear();
    totalSize.value = 0;
    totalSizePercent.value = 0;
};

const onSelectedFiles = (event) => {
    files.value = event.files;
    files.value.forEach((file) => {
        totalSize.value += parseInt(formatSize(file.size));
    });
};

const uploadEvent = (callback) => {
    totalSizePercent.value = totalSize.value / 10;
    callback();
};

const onTemplatedUpload = () => {
    toast.add({ severity: "info", summary: "Success", detail: "File Uploaded", life: 3000 });
};

const formatSize = (bytes) => {
    const k = 1024;
    const dm = 3;
    const sizes = this.$primevue.config.locale.fileSizeTypes;

    if (bytes === 0) {
        return \`0 \${sizes[0]}\`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return \`\${formattedSize} \${sizes[i]}\`;
},
<\/script>`}}},methods:{onRemoveTemplatingFile(t,a,d){a(d),this.totalSize-=parseInt(this.formatSize(t.size)),this.totalSizePercent=this.totalSize/10},onClearTemplatingUpload(t){t(),this.totalSize=0,this.totalSizePercent=0},onSelectedFiles(t){this.files=t.files,this.files.forEach(a=>{this.totalSize+=parseInt(this.formatSize(a.size))}),this.totalSizePercent=this.totalSize/10},uploadEvent(t){t()},onTemplatedUpload(){this.$toast.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})},formatSize(t){const p=this.$primevue.config.locale.fileSizeTypes;if(t===0)return`0 ${p[0]}`;const l=Math.floor(Math.log(t)/Math.log(1024));return`${parseFloat((t/Math.pow(1024,l)).toFixed(3))} ${p[l]}`}}},Se=e("p",null,"Uploader UI can be customized with templating.",-1),Fe={class:"card"},ze={class:"flex flex-wrap justify-content-between align-items-center flex-1 gap-2"},$e={class:"flex gap-2"},ke={class:"white-space-nowrap"},we={key:0},Ce=e("h5",null,"Pending",-1),Te={class:"flex flex-wrap p-0 sm:p-5 gap-5"},Be=["alt","src"],De={class:"font-semibold"},Pe={key:1},je=e("h5",null,"Completed",-1),Ae={class:"flex flex-wrap p-0 sm:p-5 gap-5"},Re=["alt","src"],Le={class:"font-semibold"},Me=e("div",{class:"flex align-items-center justify-content-center flex-column"},[e("i",{class:"pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400"}),e("p",{class:"mt-4 mb-0"},"Drag and drop files to here to upload.")],-1);function Ie(t,a,d,p,l,s){const n=_,i=U("Button"),h=U("ProgressBar"),S=U("Badge"),A=U("FileUpload"),R=y;return c(),m(b,null,[o(n,g(x(t.$attrs)),{default:u(()=>[Se]),_:1},16),e("div",Fe,[o(A,{name:"demo[]",url:"./upload.php",onUpload:a[0]||(a[0]=F=>s.onTemplatedUpload(F)),multiple:!0,accept:"image/*",maxFileSize:1e6,onSelect:s.onSelectedFiles},{header:u(({chooseCallback:F,uploadCallback:k,clearCallback:w,files:z})=>[e("div",ze,[e("div",$e,[o(i,{onClick:r=>F(),icon:"pi pi-images",rounded:"",outlined:""},null,8,["onClick"]),o(i,{onClick:r=>s.uploadEvent(k),icon:"pi pi-cloud-upload",rounded:"",outlined:"",severity:"success",disabled:!z||z.length===0},null,8,["onClick","disabled"]),o(i,{onClick:r=>w(),icon:"pi pi-times",rounded:"",outlined:"",severity:"danger",disabled:!z||z.length===0},null,8,["onClick","disabled"])]),o(h,{value:l.totalSizePercent,showValue:!1,class:E(["md:w-20rem h-1rem w-full md:ml-auto",{"exceeded-progress-bar":l.totalSizePercent>100}])},{default:u(()=>[e("span",ke,$(l.totalSize)+"B / 1Mb",1)]),_:1},8,["value","class"])])]),content:u(({files:F,uploadedFiles:k,removeUploadedFileCallback:w,removeFileCallback:z})=>[F.length>0?(c(),m("div",we,[Ce,e("div",Te,[(c(!0),m(b,null,B(F,(r,C)=>(c(),m("div",{key:r.name+r.type+r.size,class:"card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3"},[e("div",null,[e("img",{role:"presentation",alt:r.name,src:r.objectURL,width:"100",height:"50",class:"shadow-2"},null,8,Be)]),e("span",De,$(r.name),1),e("div",null,$(s.formatSize(r.size)),1),o(S,{value:"Pending",severity:"warning"}),o(i,{icon:"pi pi-times",onClick:L=>s.onRemoveTemplatingFile(r,z,C),outlined:"",rounded:"",severity:"danger"},null,8,["onClick"])]))),128))])])):D("",!0),k.length>0?(c(),m("div",Pe,[je,e("div",Ae,[(c(!0),m(b,null,B(k,(r,C)=>(c(),m("div",{key:r.name+r.type+r.size,class:"card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3"},[e("div",null,[e("img",{role:"presentation",alt:r.name,src:r.objectURL,width:"100",height:"50",class:"shadow-2"},null,8,Re)]),e("span",Le,$(r.name),1),e("div",null,$(s.formatSize(r.size)),1),o(S,{value:"Completed",class:"mt-3",severity:"success"}),o(i,{icon:"pi pi-times",onClick:L=>w(C),outlined:"",rounded:"",severity:"danger"},null,8,["onClick"])]))),128))])])):D("",!0)]),empty:u(()=>[Me]),_:1},8,["onSelect"])]),o(R,{code:l.code},null,8,["code"])],64)}const Ee=v(ye,[["render",Ie]]),Ve={data(){return{code:{basic:`<FileUpload
    name="demo[]"
    url="./upload.php"
    @upload="onAdvancedUpload($event)"
    :multiple="true"
    accept="image/*"
    :maxFileSize="1000000"
    :pt="{
        content: { class: 'surface-ground' }
    }"
>
    <template #empty>
        <p>Drag and drop files to here to upload.</p>
    </template>
</FileUpload>`,options:`<template>
    <div class="card">
        <FileUpload
            name="demo[]"
            url="./upload.php"
            @upload="onAdvancedUpload($event)"
            :multiple="true"
            accept="image/*"
            :maxFileSize="1000000"
            :pt="{
                content: { class: 'surface-ground' }
            }"
        >
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
        <Toast />
    </div>
</template>

<script>
export default {
    methods: {
        onAdvancedUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <FileUpload
            name="demo[]"
            url="./upload.php"
            @upload="onAdvancedUpload($event)"
            :multiple="true"
            accept="image/*"
            :maxFileSize="1000000"
            :pt="{
                content: { class: 'surface-ground' }
            }"
        >
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
        <Toast />
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const onAdvancedUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
<\/script>`}}},methods:{onAdvancedUpload(){this.$toast.add({severity:"info",summary:"Success",detail:"File Uploaded",life:3e3})}}},Ne={class:"card"},qe=e("p",null,"Drag and drop files to here to upload.",-1);function Oe(t,a,d,p,l,s){const n=_,i=U("FileUpload"),h=y;return c(),m(b,null,[o(n,g(x(t.$attrs)),null,16),e("div",Ne,[o(i,{name:"demo[]",url:"./upload.php",onUpload:a[0]||(a[0]=S=>s.onAdvancedUpload(S)),multiple:!0,accept:"image/*",maxFileSize:1e6,pt:{content:{class:"surface-ground"}}},{empty:u(()=>[qe]),_:1})]),o(h,{code:l.code},null,8,["code"])],64)}const We=v(Ve,[["render",Oe]]),He={},Ke=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/fileupload.jpg"})],-1);function Ge(t,a){const d=_;return c(),m(b,null,[o(d,g(x(t.$attrs)),{default:u(()=>[e("p",null,$(t.$attrs.description),1)]),_:1},16),Ke],64)}const Je=v(He,[["render",Ge]]),Qe={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:Je},{id:"pt.doc.fileupload",label:"FileUpload PT Options",component:V,data:O("FileUpload")},{id:"pt.demo",label:"Demo",component:We}]}}},Xe={class:"doc-main"},Ye=e("div",{class:"doc-intro"},[e("h1",null,"FileUpload Pass Through")],-1);function Ze(t,a,d,p,l,s){const n=P,i=j;return c(),m(b,null,[e("div",Xe,[Ye,o(n,{docs:l.docs},null,8,["docs"])]),o(i,{docs:l.docs},null,8,["docs"])],64)}const et=v(Qe,[["render",Ze]]),tt={},ot=e("p",null,"List of class names used in the styled mode.",-1),lt=N('<div class="doc-tablewrapper"><table class="doc-table"><thead><tr><th>Name</th><th>Element</th></tr></thead><tbody><tr><td>p-fileupload</td><td>Container element.</td></tr><tr><td>p-fileupload-basic</td><td>Container element in basic mode.</td></tr><tr><td>p-fileupload-advanced</td><td>Container element in advanced mode.</td></tr><tr><td>p-fileupload-buttonbar</td><td>Header containing the buttons.</td></tr><tr><td>p-fileupload-content</td><td>Content section.</td></tr><tr><td>p-fileupload-file</td><td>File item.</td></tr><tr><td>p-fileupload-file-thumbnail</td><td>Image preview of a file.</td></tr><tr><td>p-fileupload-file-details</td><td>Container of file details.</td></tr><tr><td>p-fileupload-file-name</td><td>File name element.</td></tr><tr><td>p-fileupload-file-size</td><td>File size element.</td></tr><tr><td>p-fileupload-file-badge</td><td>File badge element.</td></tr><tr><td>p-fileupload-file-actions</td><td>Container of file actions.</td></tr><tr><td>p-fileupload-file-remove</td><td>Button to remove a file.</td></tr><tr><td>p-fileupload-empty</td><td>Container of the empty slot.</td></tr></tbody></table></div>',1);function at(t,a){const d=_;return c(),m(b,null,[o(d,g(x(t.$attrs)),{default:u(()=>[ot]),_:1},16),lt],64)}const it=v(tt,[["render",at]]),dt={data(){return{code1:{basic:`
export default {
    fileupload: {
        input: 'hidden',
        buttonbar: {
            class: ['flex flex-wrap', 'bg-gray-50 dark:bg-gray-800 p-5 border border-solid border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-tr-lg rounded-tl-lg gap-2 border-b-0']
        },
        chooseButton: {
            class: ['text-white bg-blue-500 border border-blue-500 p-3 px-5 rounded-md text-base', 'overflow-hidden relative']
        },
        chooseIcon: 'mr-2 inline-block',
        chooseButtonLabel: 'flex-1 font-bold',
        uploadbutton: {
            icon: 'mr-2'
        },
        cancelbutton: {
            icon: 'mr-2'
        },
        content: {
            class: ['relative', 'bg-white dark:bg-gray-900 p-8 border border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-b-lg']
        },
        file: {
            class: ['flex items-center flex-wrap', 'p-4 border border-gray-300 dark:border-blue-900/40 rounded gap-2 mb-2', 'last:mb-0']
        },
        thumbnail: 'shrink-0',
        fileName: 'mb-2',
        fileSize: 'mr-2',
        uploadicon: 'mr-2'
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Toast />
        <FileUpload name="demo[]" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const onAdvancedUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
<\/script>`}}}},st=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function nt(t,a,d,p,l,s){const n=W,i=y,h=_;return c(),T(h,g(x(t.$attrs)),{default:u(()=>[e("p",null,[f(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),o(n,{to:"/tailwind"},{default:u(()=>[f("Tailwind Customization")]),_:1}),f(" section for an example. ")]),o(i,{code:l.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),st,o(i,{code:l.code2,embedded:""},null,8,["code"])]),_:1},16)}const ct=v(dt,[["render",nt]]),rt={data(){return{docs:[{id:"theming.styled",label:"Styled",component:it},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:ct}]}]}}},pt={class:"doc-main"},mt=e("div",{class:"doc-intro"},[e("h1",null,"File Upload Theming")],-1);function ut(t,a,d,p,l,s){const n=P,i=j;return c(),m(b,null,[e("div",pt,[mt,o(n,{docs:l.docs},null,8,["docs"])]),o(i,{docs:l.docs},null,8,["docs"])],64)}const ft=v(rt,[["render",ut]]),vt={data(){return{docs:[{id:"import",label:"Import",component:Ue},{id:"basic",label:"Basic",component:ue},{id:"auto",label:"Auto",component:ne},{id:"advanced",label:"Advanced",component:le},{id:"template",label:"Template",component:Ee},{id:"custom-upload",label:"Custom Upload",component:_e},{id:"accessibility",label:"Accessibility",component:X}],ptComponent:et,themingDoc:ft}}};function ht(t,a,d,p,l,s){const n=q;return c(),T(n,{title:"Vue File Upload Component",header:"File Upload",description:"FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.",componentDocs:l.docs,apiDocs:["FileUpload"],ptTabComponent:l.ptComponent,themingDocs:l.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const xt=v(vt,[["render",ht]]);export{xt as default};
