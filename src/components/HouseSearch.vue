<template>
     <!-- ======= hero Section ======= -->
     
    <section id="hero">
      <div class="hero-container">

        <div
          id="heroCarousel"
          class="carousel carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div class="carousel-inner" role="listbox">
            <div
              class="carousel-item active"
              style="background-image: url(assets/img/hero-carousel/bg.jpg)"
            >
              <div class="carousel-container">
                <div class="container">
                  <!-- <h2 class="animate__animated animate__fadeInDown">No.1 House Sale Website</h2> -->
                  <p class="animate__animated animate__fadeInUp">No.1 House Sale Website</p>

                  <div class="input-group house-search-bar" id="searchform">
                    <button
                      class="btn btn-outline-secondary dropdown-toggle btn-main-option"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {{type}}
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#" id="dong-search" @click="typeChange('dong')">동별</a></li>
                      <li><a class="dropdown-item" href="#" id="apt-search" @click="typeChange('apt')">아파트별</a></li>
                    </ul>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with 2 dropdown buttons"
                      placeholder="검색어를 입력하세요."
                      name="searchWord"
                      id="searchText"
                      v-model="searchWord" 
                    />
                    <button
                      class="btn btn-outline-secondary btn-main-search"
                      type="button"
                      aria-expanded="false"
                      id="searchApt"
                      v-on:click="search" 
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Hero Section -->
</template>

<script>
export default {
    name: "HouseSearch",
    data:function(){
      return{
        searchType: "dong",
        searchWord: "",
        type: "동/아파트",
      }
    },
    methods:{
      search: function(){
        console.log(this.searchType + " : " + this.searchWord);
        console.log(document.location.href);
        if(document.location.href == 'http://localhost:8080/' || document.location.href == 'http://localhost:8080/#'){
          this.$router.push({name: 'House', params: {searchType: this.searchType, searchWord: this.searchWord}}).catch(()=>{});
        }
        else{
          console.log(this.searchType);
          this.$emit('search', {searchType: this.searchType, searchWord: this.searchWord});
          
        }

      },
      typeChange:function(data){
        this.searchType = data;
        if(data == 'dong') this.type = "동별";
        else this.type = "아파트별";
      }
    },
}


</script>

<style>

</style>