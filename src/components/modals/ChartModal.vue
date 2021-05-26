<template>
<div class="modal" tabindex="-1" id="chartModal">
<div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">House Comparison Chart</h5>
        </div>
        <div class="modal-body">
          <chart-vue style="height:400px;" :chartData="chartData"></chart-vue>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal"
            >Close</button
          >
        </div>
      </div>
    </div>
    </div>
</template>

<script>
// import ChartVue from '@/components/Chart.vue';
import ChartVue from '@/components/Chart.vue';

export default {
    name: "ChartModal",
    props: ['chartModal', 'chartData'],
    data:function(){
      return{
        // Cdata = this.chartData,
        // sendData
      }
    },
    components: {
      ChartVue
    },
    methods: {
        closeModal() {
            this.chartModal.hide();
        },
    },
}
</script>
