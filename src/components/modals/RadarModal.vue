<template>
  <div class="modal" tabindex="-1" id="radarModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">House Chart</h5>
      </div>
      <div class="modal-bodyalign-middle pt-3">
        <radar-vue style="height:300px;" :chartData="chartData" :op="op"></radar-vue>
        <div class="align-middle m-3 mx-auto" style="width:300px">
          <ul class="list-group list-group-flush align-middle ">
            <li class="row m-1"><span class="col-7"><i class="fa fa-krw"></i> 매매가</span>{{chartData.dealAmount[1]}} 만원</li>
            <li class="row m-1"><span class="col-7"><i class="fa fa-coffee"></i> 카페</span>{{chartData.CE7[1]}} m</li>
            <li class="row m-1"><span class="col-7"><i class="fa fa-shopping-cart"></i> 편의점</span>{{chartData.CS2[1]}} m</li>
            <li class="row m-1"><span class="col-7"><i class="fa fa-graduation-cap"></i> 학교</span>{{chartData.SC4[1]}} m</li>
            <li class="row m-1"><span class="col-7"><i class="fa fa-bus"></i> 역사</span>{{chartData.SW8[1]}} m</li>
          </ul>
        </div>
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
import RadarVue from '@/components/RadarChart.vue';
export default {
    name: "RadarModal",
    props: ['radarModal', 'chartData', 'op'],
    data:function(){
      return{
      }
    },
    components: {
      RadarVue
    },
    methods: {
        closeModal() {
            this.radarModal.hide();
        },
    },
}
</script>