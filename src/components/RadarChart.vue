<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  props: ['chartData', 'op'],
  watch: {
      op: function() {
          this.renderChart(
      {
        labels: [
            "카페", 
            "편의점", 
            "학교", 
            "역사", 
            "매매가(억)"
        ],
        datasets: [
          {
            label:[],
            backgroundColor: "#ebba3344",
            borderColor: "#ebba39",
            data: [
                this.chartData.CE7[0],
                this.chartData.CS2[0], 
                this.chartData.SC4[0], 
                this.chartData.SW8[0], 
                this.chartData.dealAmount[0] = this.chartData.dealAmount[0] > 15 ? 15 : this.chartData.dealAmount[0],
            ]
          }
        ],
        
      },
      { 
        responsive: true, 
        maintainAspectRatio: false,
        scale: {
            ticks: {
                beginAtZero: true,
                max: 15,
                min: 0,
                stepSize: 3,
                fontSize: 15
            },
        },
        legend: {
            display: false,
        },
      }
    );
      }
  },
  mounted() {
    this.renderChart(
      {
        labels: [
            "카페", 
            "편의점", 
            "학교", 
            "역사", 
            "매매가(억)"
        ],
        datasets: [
          {
            label:[],
            backgroundColor: "#ebba3355",
            borderColor: "#ebba33",
            data: [
                this.chartData.CE7[0],
                this.chartData.CS2[0], 
                this.chartData.SC4[0], 
                this.chartData.SW8[0], 
                this.chartData.dealAmount[0] = this.chartData.dealAmount[0] > 15 ? 15 : this.chartData.dealAmount[0],
            ]
          }
        ],
        
      },
      { 
        responsive: true, 
        maintainAspectRatio: false,
        scale: {
            ticks: {
                beginAtZero: true,
                max: 15,
                min: 0,
                stepSize: 3,
                fontSize: 15
            },
            pointLabels: { fontSize: 14 } ,
            reverse: false
        },
        legend: {
            display: false,
        },
      }
    );
  }
};
</script>