<template>
  <div class="text-center">
    <ul class="m-auto list-group list-group-flush interst-list align-items-center justify-content-center">
      <li class="m-2" v-for="(interest, idx) in interestList" :key="idx">
        <span class="fs-6 align-middle">{{interest.guName}}&nbsp;&nbsp;{{interest.dongName}}</span>
        <button
          class="btn btn-outline-secondary interest-search"
          id="subBtn"
          name="word"
          @click="searchHouse(interest)"
        >
          Search
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '@/common/axios.js'
export default {
    name:"InterestList",
    data() {
      return {
        interestList: [],
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
      searchHouse(interest) {
        console.log("searchHouse method");
        this.$router.push({name: 'House', params: {searchType: "dong", searchWord: interest.dongName}});
        },
    }
}
</script>

<style>

</style>