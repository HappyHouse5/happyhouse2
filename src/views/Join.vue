<template>
    
    <!-- ======= hero Section ======= -->
    <section id="hero" style="height: 1800px">
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
              style="background-image: url(assets/img/hero-carousel/bg3.jpg)"
            >
              <div class="carousel-container">
                <div class="container">
                  <p class="animate__animated animate__fadeInUp">Registration</p>
                  <!-- <h2 class="animate__animated animate__fadeInDown">
                    Add a region of interest to easily check listings
                  </h2> -->

                  <!-- ======= Testimonials Section ======= -->
                  <div id="testimonials" class="testimonials">
                    <div class="testimonials-slider swiper-container">
                      <div class="">
                        <div class="swiper-slide">
                          <div class="testimonial-item">
                            <img
                              src="assets/img/testimonials/testimonials-1.jpg"
                              class="testimonial-img"
                              alt=""
                            />
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Join Form Component -->
                    <join-form></join-form>

                  </div>
                  <!-- End Testimonials Section -->
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
import JoinForm from '@/components/JoinForm.vue';

export default {
    name: "Join",
    components: {
        JoinForm
    }
}
</script>
