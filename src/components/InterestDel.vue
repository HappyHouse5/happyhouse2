<template>
  <div class="text-center">
    <ul class="m-auto list-group align-items-center justify-content-center list-group-flush interst-list">
      <li class="m-2"  v-for="(interest, idx) in interestList" :key="idx">
        <input class="form-check-input class_checkbox align-middle" type="checkbox" v-model="deleteList" :value="interest" id="flexCheckDefault">
        <span class="fs-6 align-middle px-3">{{interest.guName}}&nbsp;&nbsp;{{interest.dongName}}</span>
      </li>
      <button type="button" class="btn btn-danger m-4" @click="interestDelete">관심지역 삭제</button>
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
    methods: {
      interestDelete() {
        console.log("interestDelete method");
        let deleteList = this.deleteList; 
        
        axios.post('/houses/interestDelete',
        {
          deleteList,
        })
        .then(({data}) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        })
      }
    }
}
</script>

<style>

</style>