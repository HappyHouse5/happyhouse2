
<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props:['data'],
  mounted() {
    //   console.log(this.chartData2);
    //     for(let i=0; i<3; i++){
    //         console.log(i);
    //     }
    this.renderChart(
      {

        labels: [
          this.data.chartData2.a,
          this.data.chartData2.b,
          this.data.chartData2.c,
          this.data.chartData2.d,
          this.data.chartData2.e,
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: this.data.chartData1,
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>

<style>
    
</style>