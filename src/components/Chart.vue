

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
            label: "매매가",
            backgroundColor: "#4eb1c077",
            borderColor: "#4eb1c0",
            borderWidth: 1.5,
            data: this.chartData.price
        }]
      },
      { 
        responsive: true, 
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: false,
              min: 5000,
            }
          }]
        },
      }
    )},
  },
};
</script>

<style>
    
</style>