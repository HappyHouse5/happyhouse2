<template>
    <!-- ======= hero Section ======= -->
    <section id="hero" style="height: 1200px">
      <div class="hero-container">
        <div
          id="heroCarousel"
          class="carousel carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div class="carousel-inner" role="listbox">
            <div
              class="carousel-item-sub active"
              style="background-image: url(assets/img/hero-carousel/bg1.jpg)"
            >
              <div class="carousel-container">
                <div class="container">
                  <p class="animate__animated animate__fadeInUp">Interest</p>
                  <!-- <h2 class="animate__animated animate__fadeInDown">
                    Add a region of interest to easily check listings
                  </h2> -->

                  <div id="#interest" class="interest-area">
                    <div class="blog-inner area-padding mx-auto" style="max-width:1000px">
                      <div class="container rounded-3 interest-inner">
                        <div class="section-headline text-center">
                        </div>
                        
                        <!-- Add, List, Del Component -->
                        <router-view></router-view>

                        <div class="interest-link fs-4 text-center mt-5 align-bottom">
                          <router-link to="/interest/add" type="button" class="btn btn-secondary m-2 col-sm-3">ADD</router-link>
                          <router-link default to="/interest/list" type="button" class="btn btn-secondary m-2 col-sm-3">LIST</router-link>
                          <router-link to="/interest/del" type="button"  class="btn btn-secondary m-2 col-sm-3">DELETE</router-link>
                        </div>
                      </div>
                    </div>
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
// import InterestList from '@/components/InterestList.vue'
// import InterestAdd from '@/components/InterestAdd.vue'
// import InterestDel from '@/components/InterestDel.vue'

export default {
    name: "Interest",
    components: {
        // InterestList,
        // InterestAdd,
        // InterestDel,
    },
    mounted() {

      this.$router.push("/interest/list");
    }
}
</script>
