import{_ as i,o as p,e as D,w as m,a as r,m as x,b as e,f as d,p as S,h,j as _,c as g,n as b,g as f,F as C,t as O,D as k,k as P,l as V,x as v}from"./entry.68beb385.js";import{g as $}from"./PTHelper.11558b27.js";import{_ as w}from"./PrimeVueNuxtLink.f51d0c80.js";const B={data(){return{code:{basic:`<Chart type="line" :data="data" :canvasProps="{'role': 'img', 'aria-label': 'Data'}" />`}}}},M=e("h3",null,"Screen Reader",-1),A=e("p",null,[d(" Chart components internally use "),e("i",null,"canvas"),d(" element, refer to the "),e("a",{href:"https://www.chartjs.org/docs/latest/general/accessibility.html"},"Chart.js accessibility"),d(" guide for more information. The canvas element can be customized with "),e("i",null,"canvasProps"),d(" property to define aria roles and properties, in addition any content inside the component is directly passed as a child of the canvas to be able to provide fallback content like a table. ")],-1);function J(t,n,a,l,o,y){const c=S,s=h;return p(),D(s,x({id:"accessibility",label:"Accessibility"},t.$attrs),{default:m(()=>[M,A,r(c,x({code:o.code,hideToggleCode:"",hideCodeSandbox:"",hideStackBlitz:""},t.$attrs),null,16,["code"])]),_:1},16)}const E=i(B,[["render",J]]),R={data(){return{chartData:{labels:["Q1","Q2","Q3","Q4"],datasets:[{label:"Sales",data:[540,325,702,620],backgroundColor:["rgba(255, 159, 64, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgb(255, 159, 64)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)"],borderWidth:1}]},chartOptions:{scales:{y:{beginAtZero:!0}}},code:{basic:'<Chart type="bar" :data="chartData" :options="chartOptions" />',options:`<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [540, 325, 702, 620],
                        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            },
            chartOptions: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const chartData = ref({
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        {
            label: 'Sales',
            data: [540, 325, 702, 620],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1
        }
    ]
});
const chartOptions = ref({
    scales: {
        y: {
            beginAtZero: true
        }
    }
});
<\/script>`}}}},T=e("p",null,[d(" A chart is configured with 3 properties; "),e("i",null,"type"),d(", "),e("i",null,"data"),d(" and "),e("i",null,"options"),d(". Chart type is defined using the "),e("i",null,"type"),d(" property that accepts "),e("i",null,"pie"),d(", "),e("i",null,"doughtnut"),d(", "),e("i",null,"line"),d(", "),e("i",null,"bar"),d(", "),e("i",null,"radar"),d(" and "),e("i",null,"polarArea"),d(" as a value. The "),e("i",null,"data"),d(" defines datasets represented with the chart and the "),e("i",null,"options"),d(" provide numerous customization options to customize the presentation. ")],-1),j={class:"card"};function F(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[T]),_:1},16),e("div",j,[r(s,{type:"bar",data:o.chartData,options:o.chartOptions},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const Q=i(R,[["render",F]]),z={data(){return{code:{basic:`
npm install chart.js`}}}},H=e("p",null,[d("Chart component uses "),e("a",{href:"https://chartjs.org/"},"Chart.JS"),d(" underneath so it needs to be installed as a dependency.")],-1);function W(t,n,a,l,o,y){const c=h,s=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[H]),_:1},16),r(s,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const I=i(z,[["render",W]]),L={data(){return{chartData:null,chartOptions:null,code:{basic:'<Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />',options:`<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        type: 'line',
                        label: 'Dataset 1',
                        borderColor: documentStyle.getPropertyValue('--blue-500'),
                        borderWidth: 2,
                        fill: false,
                        tension: 0.4,
                        data: [50, 25, 12, 48, 56, 76, 42]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 2',
                        backgroundColor: documentStyle.getPropertyValue('--green-500'),
                        data: [21, 84, 24, 75, 37, 65, 34],
                        borderColor: 'white',
                        borderWidth: 2
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 3',
                        backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                        data: [41, 52, 24, 74, 23, 21, 32]
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type: 'line',
                label: 'Dataset 1',
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                borderWidth: 2,
                fill: false,
                tension: 0.4,
                data: [50, 25, 12, 48, 56, 76, 42]
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: documentStyle.getPropertyValue('--green-500'),
                data: [21, 84, 24, 75, 37, 65, 34],
                borderColor: 'white',
                borderWidth: 2
            },
            {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                data: [41, 52, 24, 74, 23, 21, 32]
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
<\/script>`}}},mounted(){this.chartData=this.setChartData(),this.chartOptions=this.setChartOptions()},methods:{setChartData(){const t=getComputedStyle(document.documentElement);return{labels:["January","February","March","April","May","June","July"],datasets:[{type:"line",label:"Dataset 1",borderColor:t.getPropertyValue("--blue-500"),borderWidth:2,fill:!1,tension:.4,data:[50,25,12,48,56,76,42]},{type:"bar",label:"Dataset 2",backgroundColor:t.getPropertyValue("--green-500"),data:[21,84,24,75,37,65,34],borderColor:"white",borderWidth:2},{type:"bar",label:"Dataset 3",backgroundColor:t.getPropertyValue("--orange-500"),data:[41,52,24,74,23,21,32]}]}},setChartOptions(){const t=getComputedStyle(document.documentElement),n=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),l=t.getPropertyValue("--surface-border");return{maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:n}}},scales:{x:{ticks:{color:a},grid:{color:l}},y:{ticks:{color:a},grid:{color:l}}}}}}},N=e("p",null,[d("Different chart types can be combined in the same graph usign the "),e("i",null,"type"),d(" option of a dataset.")],-1),G={class:"card"};function Z(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[N]),_:1},16),e("div",G,[r(s,{type:"bar",data:o.chartData,options:o.chartOptions,class:"h-30rem"},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const Y=i(L,[["render",Z]]),q={data(){return{chartData:null,chartOptions:{cutout:"60%"},code:{basic:'<Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: {
                cutout: '60%'
            }
        };
    },
    mounted() {
        this.chartData = this.setChartData();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.body);

            return {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                    }
                ]
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
});

const chartData = ref();
const chartOptions = ref({
    cutout: '60%'
});

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
            }
        ]
    };
};
<\/script>`}}},mounted(){this.chartData=this.setChartData()},methods:{setChartData(){const t=getComputedStyle(document.body);return{labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:[t.getPropertyValue("--blue-500"),t.getPropertyValue("--yellow-500"),t.getPropertyValue("--green-500")],hoverBackgroundColor:[t.getPropertyValue("--blue-400"),t.getPropertyValue("--yellow-400"),t.getPropertyValue("--green-400")]}]}}}},U=e("p",null,"A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.",-1),K={class:"card flex justify-content-center"};function X(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[U]),_:1},16),e("div",K,[r(s,{type:"doughnut",data:o.chartData,options:o.chartOptions,class:"w-full md:w-30rem"},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const tt=i(q,[["render",X]]),et={data(){return{chartData:null,chartOptions:null,code:{basic:'<Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem"  />',options:`<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem"  />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                        borderColor: documentStyle.getPropertyValue('--blue-500'),
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                        borderColor: documentStyle.getPropertyValue('--pink-500'),
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            return {
                indexAxis: 'y',
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    legend: {
                        labels: {
                            fontColor: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                            font: {
                                weight: 500
                            }
                        },
                        grid: {
                            display: false,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem"  />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                borderColor: documentStyle.getPropertyValue('--pink-500'),
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    fontColor: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
}
<\/script>`}}},mounted(){this.chartData=this.setChartData(),this.chartOptions=this.setChartOptions()},methods:{setChartData(){const t=getComputedStyle(document.documentElement);return{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:t.getPropertyValue("--blue-500"),borderColor:t.getPropertyValue("--blue-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:t.getPropertyValue("--pink-500"),borderColor:t.getPropertyValue("--pink-500"),data:[28,48,40,19,86,27,90]}]}},setChartOptions(){const t=getComputedStyle(document.documentElement),n=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),l=t.getPropertyValue("--surface-border");return{indexAxis:"y",maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{fontColor:n}}},scales:{x:{ticks:{color:a,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:a},grid:{color:l,drawBorder:!1}}}}}}},ot=e("p",null,[d("A bar chart is rendered horizontally when "),e("i",null,"indexAxis"),d(" option is set as "),e("i",null,"y"),d(".")],-1),rt={class:"card"};function at(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[ot]),_:1},16),e("div",rt,[r(s,{type:"bar",data:o.chartData,options:o.chartOptions,class:"h-30rem"},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const nt=i(et,[["render",at]]),lt={data(){return{code:{basic:"import Chart from 'primevue/chart';"}}}};function ct(t,n,a,l,o,y){const c=h,s=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),null,16),r(s,{code:o.code,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"])],64)}const st=i(lt,[["render",ct]]),dt={data(){return{chartData:null,chartOptions:null,code:{basic:'<Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />',options:`<template>
    <div class="card">
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--blue-500'),
                        tension: 0.4
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--pink-500'),
                        tension: 0.4
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                tension: 0.4
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: documentStyle.getPropertyValue('--pink-500'),
                tension: 0.4
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
<\/script>`}}},mounted(){this.chartData=this.setChartData(),this.chartOptions=this.setChartOptions()},methods:{setChartData(){const t=getComputedStyle(document.documentElement);return{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,borderColor:t.getPropertyValue("--blue-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,borderColor:t.getPropertyValue("--pink-500"),tension:.4}]}},setChartOptions(){const t=getComputedStyle(document.documentElement),n=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),l=t.getPropertyValue("--surface-border");return{maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:n}}},scales:{x:{ticks:{color:a},grid:{color:l}},y:{ticks:{color:a},grid:{color:l}}}}}}},ut=e("p",null,"A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.",-1),it={class:"card"};function pt(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[ut]),_:1},16),e("div",it,[r(s,{type:"line",data:o.chartData,options:o.chartOptions,class:"h-30rem"},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const yt=i(dt,[["render",pt]]),mt={data(){return{chartData:null,chartOptions:null,code:{basic:'<Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />',options:`<template>
    <div class="card">
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        tension: 0.4,
                        borderColor: documentStyle.getPropertyValue('--blue-500')
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderDash: [5, 5],
                        tension: 0.4,
                        borderColor: documentStyle.getPropertyValue('--teal-500')
                    },
                    {
                        label: 'Third Dataset',
                        data: [12, 51, 62, 33, 21, 62, 45],
                        fill: true,
                        borderColor: documentStyle.getPropertyValue('--orange-500'),
                        tension: 0.4,
                        backgroundColor: 'rgba(255,167,38,0.2)'
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                tension: 0.4,
                borderColor: documentStyle.getPropertyValue('--blue-500')
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderDash: [5, 5],
                tension: 0.4,
                borderColor: documentStyle.getPropertyValue('--teal-500')
            },
            {
                label: 'Third Dataset',
                data: [12, 51, 62, 33, 21, 62, 45],
                fill: true,
                borderColor: documentStyle.getPropertyValue('--orange-500'),
                tension: 0.4,
                backgroundColor: 'rgba(255,167,38,0.2)'
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
<\/script>`}}},mounted(){this.chartData=this.setChartData(),this.chartOptions=this.setChartOptions()},methods:{setChartData(){const t=getComputedStyle(document.documentElement);return{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.4,borderColor:t.getPropertyValue("--blue-500")},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,borderDash:[5,5],tension:.4,borderColor:t.getPropertyValue("--teal-500")},{label:"Third Dataset",data:[12,51,62,33,21,62,45],fill:!0,borderColor:t.getPropertyValue("--orange-500"),tension:.4,backgroundColor:"rgba(255,167,38,0.2)"}]}},setChartOptions(){const t=getComputedStyle(document.documentElement),n=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),l=t.getPropertyValue("--surface-border");return{maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:n}}},scales:{x:{ticks:{color:a},grid:{color:l}},y:{ticks:{color:a},grid:{color:l}}}}}}},ht=e("p",null,"Various styles of a line series can be customized to display customizations like an area chart.",-1),gt={class:"card"};function Ct(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[ht]),_:1},16),e("div",gt,[r(s,{type:"line",data:o.chartData,options:o.chartOptions,class:"h-30rem"},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const bt=i(mt,[["render",Ct]]),ft={data(){return{chartData:null,chartOptions:null,code:{basic:'<Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />',options:`<template>
    <div class="card">
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Dataset 1',
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--blue-500'),
                        yAxisID: 'y',
                        tension: 0.4,
                        data: [65, 59, 80, 81, 56, 55, 10]
                    },
                    {
                        label: 'Dataset 2',
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--green-500'),
                        yAxisID: 'y1',
                        tension: 0.4,
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            return {
                stacked: false,
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            drawOnChartArea: false,
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                yAxisID: 'y',
                tension: 0.4,
                data: [65, 59, 80, 81, 56, 55, 10]
            },
            {
                label: 'Dataset 2',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--green-500'),
                yAxisID: 'y1',
                tension: 0.4,
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawOnChartArea: false,
                    color: surfaceBorder
                }
            }
        }
    };
}
<\/script>`}}},mounted(){this.chartData=this.setChartData(),this.chartOptions=this.setChartOptions()},methods:{setChartData(){const t=getComputedStyle(document.documentElement);return{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",fill:!1,borderColor:t.getPropertyValue("--blue-500"),yAxisID:"y",tension:.4,data:[65,59,80,81,56,55,10]},{label:"Dataset 2",fill:!1,borderColor:t.getPropertyValue("--green-500"),yAxisID:"y1",tension:.4,data:[28,48,40,19,86,27,90]}]}},setChartOptions(){const t=getComputedStyle(document.documentElement),n=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),l=t.getPropertyValue("--surface-border");return{stacked:!1,maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:n}}},scales:{x:{ticks:{color:a},grid:{color:l}},y:{type:"linear",display:!0,position:"left",ticks:{color:a},grid:{color:l}},y1:{type:"linear",display:!0,position:"right",ticks:{color:a},grid:{drawOnChartArea:!1,color:l}}}}}}},St=e("p",null,[d("Multiple axes can be added using the "),e("i",null,"scales"),d(" option.")],-1),_t={class:"card"};function Dt(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[St]),_:1},16),e("div",_t,[r(s,{type:"line",data:o.chartData,options:o.chartOptions,class:"h-30rem"},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const xt=i(ft,[["render",Dt]]),Pt={data(){return{chartData:null,chartOptions:{plugins:{legend:{labels:{usePointStyle:!0}}}},code:{basic:'<Chart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Chart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true
                        }
                    }
                }
            }
        };
    },
    mounted() {
        this.chartData = this.setChartData();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.body);

            return {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                    }
                ]
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Chart type="pie" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
});

const chartData = ref();
const chartOptions = ref({
    plugins: {
        legend: {
            labels: {
                usePointStyle: true
            }
        }
    }
});

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
            }
        ]
    };
};
<\/script>`}}},mounted(){this.chartData=this.setChartData()},methods:{setChartData(){const t=getComputedStyle(document.body);return{labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[t.getPropertyValue("--blue-500"),t.getPropertyValue("--yellow-500"),t.getPropertyValue("--green-500")],hoverBackgroundColor:[t.getPropertyValue("--blue-400"),t.getPropertyValue("--yellow-400"),t.getPropertyValue("--green-400")]}]}}}},Vt=e("p",null,"A pie chart is a circular statistical graphic which is divided into slices to illustrate numerical proportion.",-1),Ot={class:"card flex justify-content-center"};function kt(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[Vt]),_:1},16),e("div",Ot,[r(s,{type:"pie",data:o.chartData,options:o.chartOptions,class:"w-full md:w-30rem"},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const vt=i(Pt,[["render",kt]]),$t={data(){return{chartData:null,chartOptions:null,code:{basic:'<Chart type="polarArea" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Chart type="polarArea" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                datasets: [
                    {
                        data: [11, 16, 7, 3, 14],
                        backgroundColor: [
                            documentStyle.getPropertyValue('--red-500'),
                            documentStyle.getPropertyValue('--green-500'),
                            documentStyle.getPropertyValue('--yellow-500'),
                            documentStyle.getPropertyValue('--bluegray-500'),
                            documentStyle.getPropertyValue('--blue-500')
                        ],
                        label: 'My dataset'
                    }
                ],
                labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            return {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Chart type="polarArea" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        datasets: [
            {
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                    documentStyle.getPropertyValue('--red-500'),
                    documentStyle.getPropertyValue('--green-500'),
                    documentStyle.getPropertyValue('--yellow-500'),
                    documentStyle.getPropertyValue('--bluegray-500'),
                    documentStyle.getPropertyValue('--blue-500')
                ],
                label: 'My dataset'
            }
        ],
        labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
<\/script>`}}},mounted(){this.chartData=this.setChartData(),this.chartOptions=this.setChartOptions()},methods:{setChartData(){const t=getComputedStyle(document.documentElement);return{datasets:[{data:[11,16,7,3,14],backgroundColor:[t.getPropertyValue("--red-500"),t.getPropertyValue("--green-500"),t.getPropertyValue("--yellow-500"),t.getPropertyValue("--bluegray-500"),t.getPropertyValue("--blue-500")],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]}},setChartOptions(){const t=getComputedStyle(document.documentElement),n=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--surface-border");return{plugins:{legend:{labels:{color:n}}},scales:{r:{grid:{color:a}}}}}}},wt=e("p",null,"Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.",-1),Bt={class:"card flex justify-content-center"};function Mt(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[wt]),_:1},16),e("div",Bt,[r(s,{type:"polarArea",data:o.chartData,options:o.chartOptions,class:"w-full md:w-30rem"},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const At=i($t,[["render",Mt]]),Jt={data(){return{chartData:null,chartOptions:null,code:{basic:'<Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />',options:`<template>
    <div class="card flex justify-content-center">
        <Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');

            return {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [
                    {
                        label: 'My First dataset',
                        borderColor: documentStyle.getPropertyValue('--bluegray-400'),
                        pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
                        pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                        pointHoverBackgroundColor: textColor,
                        pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        borderColor: documentStyle.getPropertyValue('--pink-400'),
                        pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                        pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                        pointHoverBackgroundColor: textColor,
                        pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            
            return {
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: textColorSecondary
                        }
                    }
                }
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Chart type="radar" :data="chartData" :options="chartOptions" class="w-full md:w-30rem" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    return {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                borderColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                borderColor: documentStyle.getPropertyValue('--pink-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

    return {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: textColorSecondary
                }
            }
        }
    };
}
<\/script>`}}},mounted(){this.chartData=this.setChartData(),this.chartOptions=this.setChartOptions()},methods:{setChartData(){const t=getComputedStyle(document.documentElement),n=t.getPropertyValue("--text-color");return{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:t.getPropertyValue("--bluegray-400"),pointBackgroundColor:t.getPropertyValue("--bluegray-400"),pointBorderColor:t.getPropertyValue("--bluegray-400"),pointHoverBackgroundColor:n,pointHoverBorderColor:t.getPropertyValue("--bluegray-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:t.getPropertyValue("--pink-400"),pointBackgroundColor:t.getPropertyValue("--pink-400"),pointBorderColor:t.getPropertyValue("--pink-400"),pointHoverBackgroundColor:n,pointHoverBorderColor:t.getPropertyValue("--pink-400"),data:[28,48,40,19,96,27,100]}]}},setChartOptions(){const t=getComputedStyle(document.documentElement),n=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary");return{plugins:{legend:{labels:{color:n}}},scales:{r:{grid:{color:a}}}}}}},Et=e("p",null,"A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point.",-1),Rt={class:"card flex justify-content-center"};function Tt(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[Et]),_:1},16),e("div",Rt,[r(s,{type:"radar",data:o.chartData,options:o.chartOptions,class:"w-full md:w-30rem"},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const jt=i(Jt,[["render",Tt]]),Ft={data(){return{chartData:null,chartOptions:null,code:{basic:'<Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />',options:`<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        type: 'bar',
                        label: 'Dataset 1',
                        backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                        data: [50, 25, 12, 48, 90, 76, 42]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 2',
                        backgroundColor: documentStyle.getPropertyValue('--green-500'),
                        data: [21, 84, 24, 75, 37, 65, 34]
                    },
                    {
                        type: 'bar',
                        label: 'Dataset 3',
                        backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                        data: [41, 52, 24, 74, 23, 21, 32]
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        stacked: true,
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () =>  {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                data: [50, 25, 12, 48, 90, 76, 42]
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: documentStyle.getPropertyValue('--green-500'),
                data: [21, 84, 24, 75, 37, 65, 34]
            },
            {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                data: [41, 52, 24, 74, 23, 21, 32]
            }
        ]
    };
};
const setChartOptions = () =>  {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
<\/script>`}}},mounted(){this.chartData=this.setChartData(),this.chartOptions=this.setChartOptions()},methods:{setChartData(){const t=getComputedStyle(document.documentElement);return{labels:["January","February","March","April","May","June","July"],datasets:[{type:"bar",label:"Dataset 1",backgroundColor:t.getPropertyValue("--blue-500"),data:[50,25,12,48,90,76,42]},{type:"bar",label:"Dataset 2",backgroundColor:t.getPropertyValue("--green-500"),data:[21,84,24,75,37,65,34]},{type:"bar",label:"Dataset 3",backgroundColor:t.getPropertyValue("--yellow-500"),data:[41,52,24,74,23,21,32]}]}},setChartOptions(){const t=getComputedStyle(document.documentElement),n=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),l=t.getPropertyValue("--surface-border");return{maintainAspectRatio:!1,aspectRatio:.8,plugins:{tooltips:{mode:"index",intersect:!1},legend:{labels:{color:n}}},scales:{x:{stacked:!0,ticks:{color:a},grid:{color:l}},y:{stacked:!0,ticks:{color:a},grid:{color:l}}}}}}},Qt=e("p",null,[d("Bars can be stacked on top of each other when "),e("i",null,"stacked"),d(" option of a scale is enabled.")],-1),zt={class:"card"};function Ht(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[Qt]),_:1},16),e("div",zt,[r(s,{type:"bar",data:o.chartData,options:o.chartOptions,class:"h-30rem"},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const Wt=i(Ft,[["render",Ht]]),It={data(){return{chartData:null,chartOptions:null,code:{basic:'<Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem"  />',options:`<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem"  />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null
        };
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                        borderColor: documentStyle.getPropertyValue('--blue-500'),
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                        borderColor: documentStyle.getPropertyValue('--pink-500'),
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    legend: {
                        labels: {
                            fontColor: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                            font: {
                                weight: 500
                            }
                        },
                        grid: {
                            display: false,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-30rem"  />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                borderColor: documentStyle.getPropertyValue('--pink-500'),
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    fontColor: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
}
<\/script>`}}},mounted(){this.chartData=this.setChartData(),this.chartOptions=this.setChartOptions()},methods:{setChartData(){const t=getComputedStyle(document.documentElement);return{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:t.getPropertyValue("--blue-500"),borderColor:t.getPropertyValue("--blue-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:t.getPropertyValue("--pink-500"),borderColor:t.getPropertyValue("--pink-500"),data:[28,48,40,19,86,27,90]}]}},setChartOptions(){const t=getComputedStyle(document.documentElement),n=t.getPropertyValue("--text-color"),a=t.getPropertyValue("--text-color-secondary"),l=t.getPropertyValue("--surface-border");return{maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{fontColor:n}}},scales:{x:{ticks:{color:a,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:a},grid:{color:l,drawBorder:!1}}}}}}},Lt=e("p",null,"A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent.",-1),Nt={class:"card"};function Gt(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[Lt]),_:1},16),e("div",Nt,[r(s,{type:"bar",data:o.chartData,options:o.chartOptions,class:"h-30rem"},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const Zt=i(It,[["render",Gt]]),Yt={data(){return{chartData:null,chartOptions:{plugins:{legend:{labels:{usePointStyle:!0}}}},code:{basic:`<Chart
    type="pie"
    :data="chartData"
    :options="chartOptions"
    :pt="{
        root: { class: 'w-full md:w-30rem' }
    }"
/>`,options:`<template>
    <div class="card flex justify-content-center">
        <Chart
            type="pie"
            :data="chartData"
            :options="chartOptions"
            :pt="{
                root: { class: 'w-full md:w-30rem' }
            }"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true
                        }
                    }
                }
            }
        };
    },
    mounted() {
        this.chartData = this.setChartData();
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.body);

            return {
                labels: ['A', 'B', 'C'],
                datasets: [
                    {
                        data: [540, 325, 702],
                        backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                        hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                    }
                ]
            };
        }
    }
};
<\/script>`,composition:`<template>
    <div class="card flex justify-content-center">
        <Chart
            type="pie"
            :data="chartData"
            :options="chartOptions"
            :pt="{
                root: { class: 'w-full md:w-30rem' }
            }"
        />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData();
});

const chartData = ref();
const chartOptions = ref({
    plugins: {
        legend: {
            labels: {
                usePointStyle: true
            }
        }
    }
});

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
            }
        ]
    };
};
<\/script>`}}},mounted(){this.chartData=this.setChartData()},methods:{setChartData(){const t=getComputedStyle(document.body);return{labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[t.getPropertyValue("--blue-500"),t.getPropertyValue("--yellow-500"),t.getPropertyValue("--green-500")],hoverBackgroundColor:[t.getPropertyValue("--blue-400"),t.getPropertyValue("--yellow-400"),t.getPropertyValue("--green-400")]}]}}}},qt=e("p",null,"A pie chart is a circular statistical graphic which is divided into slices to illustrate numerical proportion.",-1),Ut={class:"card flex justify-content-center"};function Kt(t,n,a,l,o,y){const c=h,s=_("Chart"),u=S;return p(),g(C,null,[r(c,b(f(t.$attrs)),{default:m(()=>[qt]),_:1},16),e("div",Ut,[r(s,{type:"pie",data:o.chartData,options:o.chartOptions,pt:{root:{class:"w-full md:w-30rem"}}},null,8,["data","options"])]),r(u,{code:o.code,dependencies:{"chart.js":"3.3.2"},component:"Chart"},null,8,["code","dependencies"])],64)}const Xt=i(Yt,[["render",Kt]]),te={},ee=e("div",{class:"card"},[e("img",{class:"w-full",src:"https://primefaces.org/cdn/primevue/images/pt/wireframe-placeholder.jpg"})],-1);function oe(t,n){const a=h;return p(),g(C,null,[r(a,b(f(t.$attrs)),{default:m(()=>[e("p",null,O(t.$attrs.description),1)]),_:1},16),ee],64)}const re=i(te,[["render",oe]]),ae={data(){return{docs:[{id:"pt.image",label:"Wireframe",component:re},{id:"pt.doc.chart",label:"Chart PT Options",component:k,data:$("Chart")},{id:"pt.demo",label:"Demo",component:Xt}]}}},ne={class:"doc-main"},le=e("div",{class:"doc-intro"},[e("h1",null,"Chart Pass Through")],-1);function ce(t,n,a,l,o,y){const c=P,s=V;return p(),g(C,null,[e("div",ne,[le,r(c,{docs:o.docs},null,8,["docs"])]),r(s,{docs:o.docs},null,8,["docs"])],64)}const se=i(ae,[["render",ce]]),de={},ue=e("p",null,"List of class names used in the styled mode.",-1),ie=e("div",{class:"doc-tablewrapper"},[e("table",{class:"doc-table"},[e("thead",null,[e("tr",null,[e("th",null,"Name"),e("th",null,"Element")])]),e("tbody",null,[e("tr",null,[e("td",null,"p-chart"),e("td",null,"Container element.")])])])],-1);function pe(t,n){const a=h;return p(),g(C,null,[r(a,b(f(t.$attrs)),{default:m(()=>[ue]),_:1},16),ie],64)}const ye=i(de,[["render",pe]]),me={data(){return{code1:{basic:`
export default {
    chart: {
        root: 'relative'
    }
}
`},code2:{composition:`<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const chartData = ref({
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        {
            label: 'Sales',
            data: [540, 325, 702, 620],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1
        }
    ]
});
const chartOptions = ref({
    scales: {
        y: {
            beginAtZero: true
        }
    }
});
<\/script>`}}}},he=e("p",{class:"mt-4"},"A playground sample with the pre-built Tailwind theme.",-1);function ge(t,n,a,l,o,y){const c=w,s=S,u=h;return p(),D(u,b(f(t.$attrs)),{default:m(()=>[e("p",null,[d(" PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the "),r(c,{to:"/tailwind"},{default:m(()=>[d("Tailwind Customization")]),_:1}),d(" section for an example. ")]),r(s,{code:o.code1,hideToggleCode:"",importCode:"",hideCodeSandbox:"",hideStackBlitz:""},null,8,["code"]),he,r(s,{code:o.code2,dependencies:{"chart.js":"3.3.2"},component:"Chart",embedded:""},null,8,["code","dependencies"])]),_:1},16)}const Ce=i(me,[["render",ge]]),be={data(){return{docs:[{id:"theming.styled",label:"Styled",component:ye},{id:"theming.unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"theming.tailwind",label:"Tailwind",component:Ce}]}]}}},fe={class:"doc-main"},Se=e("div",{class:"doc-intro"},[e("h1",null,"Chart Theming")],-1);function _e(t,n,a,l,o,y){const c=P,s=V;return p(),g(C,null,[e("div",fe,[Se,r(c,{docs:o.docs},null,8,["docs"])]),r(s,{docs:o.docs},null,8,["docs"])],64)}const De=i(be,[["render",_e]]),xe={data(){return{docs:[{id:"import",label:"Import",component:st},{id:"chartjs",label:"Chart.js",component:I},{id:"basic",label:"Basic",component:Q},{id:"pie",label:"Pie",component:vt},{id:"doughnut",label:"Doughnut",component:tt},{id:"vertical",label:"Vertical Bar",component:Zt},{id:"horizontal",label:"Horizontal Bar",component:nt},{id:"stacked",label:"Stacked Bar",component:Wt},{id:"line",label:"Line",component:yt},{id:"multiaxis",label:"Multi Axis",component:xt},{id:"linestyles",label:"Line Styles",component:bt},{id:"polararea",label:"Polar Area",component:At},{id:"radar",label:"Radar",component:jt},{id:"combo",label:"Combo",component:Y},{id:"accessibility",label:"Accessibility",component:E}],ptComponent:se,themingDoc:De}}};function Pe(t,n,a,l,o,y){const c=v;return p(),D(c,{title:"Vue Chart Component",header:"Chart",description:"Chart components are based on Chart.js, an open source HTML5 based charting library.",componentDocs:o.docs,apiDocs:["Chart"],ptTabComponent:o.ptComponent,themingDocs:o.themingDoc},null,8,["componentDocs","ptTabComponent","themingDocs"])}const ve=i(xe,[["render",Pe]]);export{ve as default};
