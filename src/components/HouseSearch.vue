
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

                  <div class="input-group house-search-bar searchform mb-4">
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
                      class="form-control input-main-search"
                      aria-label="Text input with 2 dropdown buttons"
                      placeholder="검색어를 입력하세요."
                      name="searchWord"
                      id="searchText"
                      v-model="searchWord" 
                      v-on:keyup.enter="search" 
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
                  

                  <template v-if="showOption == true">
                    <div class="btn-group dropdown" style="width: 800px;"  >
                      <button class=" dropdown-toggle btn-filter-drop mt-2" type="button" style="width: 800px;" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        가격, 면적 필터 적용하기
                      </button>
                      <ul class="dropdown-menu mt-4" id="ul-filter-drop" aria-labelledby="dropdownMenuButton" style="width: 800px;">
                        <li class="">
                          <div class="house-search-bar row mt-4 mb-4">
                            <div class="col-3 text-center pt-3">
                              가격옵션
                            </div>
                            <div class="col-8 row">
                              <!-- <div class="row"> -->
                                <div class="col-6"><input type="range" class="form-range" id="min" @mouseup="valueValidation('min')" v-model="searchOption.minAmount"></div>
                                <div class="col-6"><input type="range" class="form-range" id="max" @mouseup="valueValidation('max')" v-model="searchOption.maxAmount"></div>
                                <!-- <div class="col-3">{{realMaxAmount}}</div> -->
                              <!-- </div> -->
                              <div class>
                              <!-- <div class="col-8"> <input type="range" class="form-range" id="min" @mouseup="valueValidation('min')" v-model="minAmount"></div> -->
                              {{realMinAmount}} ~ {{realMaxAmount}}
                              </div>
                            </div>
                            
                            
                          </div>
                          <div class="row house-search-bar mb-4">
                            <div class="col-3 text-center pt-3">
                              면적옵션
                            </div>
                            <div class="col-8 row">
                              <div class="col-6"> <input type="range" class="form-range" id="min" @mouseup="sizeValidation('min')" v-model="searchOption.minSize"></div>
                              <div class="col-6"><input type="range" class="form-range" id="max" @mouseup="sizeValidation('max')" v-model="searchOption.maxSize"></div>
                              <div>
                                {{realMinSize}} ~ {{realMaxSize}}
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </template>

                

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
    props:['isHousePage'],
    data:function(){
      return{
        searchType: "dong",
        searchWord: "",
        type: "동/아파트",

        searchOption:{
          maxAmount: 100,       //(maxAmount * 2000)  -> 0 ~ 20억 or 20억 이상
          minAmount: 0,

          maxSize: 100,
          minSize: 0,

          ordering: 'aptName',
          orderBy: 'asc',
        },

        showOption: false,
      }
    },
    created(){
      if(this.isHousePage){
         this.showOption = true;
      }
    },
    methods:{
      search: function(){
        console.log(this.searchType + " : " + this.searchWord);
        console.log(document.location.href);
        
        if(!this.isHousePage){
          // console.log("Home에서 검색")
          this.$router.push({name: 'House', params: {searchType: this.searchType, searchWord: this.searchWord.trim(), searchOption: this.searchOption}}).catch(()=>{});
        }
        else{
          // console.log("House에서 검색")
          this.$emit('goPageOne', 1);       // 검색 시 페이지네이션 1페이지로 넘기고 offset을 0으로 설정 후에 검색을 하도록 먼저 페이지 '1'로 변경
          this.$emit('search', {searchType: this.searchType, searchWord: this.searchWord.trim(), searchOption: this.searchOption});
          
        }

      },
      typeChange:function(data){
        this.searchType = data;
        if(data == 'dong') this.type = "동별";
        else this.type = "아파트별";
      },

      valueValidation:function(param){
        // console.log("min : " +this.searchOption.minAmount);
        // console.log(this.maxAmount);
        if((this.searchOption.minAmount > this.searchOption.maxAmount) && this.searchOption.maxAmount != 100 && this.searchOption.minAmount != 0){
          if(param == 'max') this.searchOption.minAmount = this.searchOption.maxAmount;
          if(param == 'min') this.searchOption.maxAmount = this.searchOption.minAmount;
        } 
      },

      sizeValidation:function(param){
        if((this.searchOption.minSize > this.searchOption.maxSize) && this.searchOption.maxSize != 100 && this.searchOption.minSize != 0){
          if(param == 'max') this.searchOption.minSize = this.searchOption.maxSize;
          if(param == 'min') this.searchOption.maxSize = this.searchOption.minSize;
        } 
      }
    },
    watch:{
      // maxAmount:function(){
      //   console.log(this.maxAmount);
      //   if(this.minAmount > this.maxAmount) this.minAmount = this.maxAmount;
      // },
      // minAmount:function(){
      //   console.log(this.minAmount);
      //   if(this.minAmount > this.maxAmount) this.maxAmount = this.minAmount;
      // },
    },
    computed:{
      realMaxAmount:function(){
        let money = this.searchOption.maxAmount * 2000;
        if(this.searchOption.maxAmount == 100) return "20억 이상";
        return money/10000 + "억";
        // return this.maxAmount * 3000 / 10000;
      },
      realMinAmount:function(){
        let money = this.searchOption.minAmount * 2000;
        return money/10000 + "억";
      },

      realMaxSize:function(){
        let size = this.searchOption.maxSize * 2;
        if(this.searchOption.maxSize == 100) return "200제곱미터 이상";
        return size + "제곱미터";
        // return this.maxAmount * 3000 / 10000;
      },
      realMinSize:function(){
        let size = this.searchOption.minSize * 2;
        return size + "제곱미터";
      }
      
    }
}


</script>

<style>

