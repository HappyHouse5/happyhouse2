<template>
  <chart-vue :chartData="chartData"></chart-vue>
</template>

<script>
// import ChartVue from '@/components/Chart.vue';
import ChartVue from '@/components/Chart.vue';
// import ChartVue from './ChartVue.vue';

export default {
    name: "HouseChart",
    props: ['chartData'],
    components: {
      ChartVue
    },
    methods: {
    },
}
</script>
