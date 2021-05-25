<template>
  <div class="text-center">
    <ul class="m-auto list-group align-items-center justify-content-center list-group-flush interst-list">
      <li class="m-2"  v-for="(interest, idx) in interestList" :key="idx">
        <input class="form-check-input class_checkbox align-middle" type="checkbox" v-model="deleteList" :value="interest" id="flexCheckDefault">
        <span class="fs-6 align-middle px-3">{{interest.guName}}&nbsp;&nbsp;{{interest.dongName}}</span>
      </li>
      <a class="mt-4 text-danger" @click="interestDelete" style="cursor:pointer; text-underline-position:under;">관심지역 삭제하기</a>
    </ul>
  </div>
</template>

<script>
import axios from '@/common/axios.js';

export default {
    name:"InterestDel",
        data() {
      return {
        interestList: [],
        deleteList: [],
      }
    },
    mounted() {
      console.log("mounted: get interest list");

      this.getInterest();
      
    },
    methods: {
      interestDelete() {
        let deleteList = [];
        for(let i=0; i<this.deleteList.length; i++){
          deleteList.push({dongCode: this.deleteList[i].dongCode});
        }
        console.log("interestDelete method");
        
        console.log(deleteList);
        axios.post('/houses/interestDelete', deleteList)
        .then(({data}) => {
          console.log(data);
          this.getInterest();
          alert(data + "개의 관심 매물 정보가 삭제되었습니다.");
        })
        .catch((err) => {
          console.log(err);
        })
      },
      getInterest: function(){
        axios.get('/houses/interests',
        {})
        .then(({data}) => {
          console.log(data);
          this.interestList = data;
        })
        .catch((err) => {
          console.log(err);
        })
      },
    }
}
</script>

<style>

</style>