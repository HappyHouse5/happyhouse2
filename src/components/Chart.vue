
<script>
import { Bar } from "vue-chartjs";

export default {
  props:['chartData'],
  extends: Bar,
  watch: {
    chartData: function() {
    this.renderChart(
      {
        labels: this.chartData.label,
        datasets: [{
            label: "Data One",
            backgroundColor: "#f87979",
            data: this.chartData.price
        }]
      },
      { responsive: true, maintainAspectRatio: false }
    )},
  },
};
</script>

<style>
    
</style>