<template>


    <div>
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
                  <p class="animate__animated animate__fadeInUp">Profile</p>
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

                    <!-- 가입, 수정, 탈퇴, 내정보 -->
                    <div id="info">
                      <!-- MyPage - Join -->
                      <div class="container">
                        <div class="row d-flex align-items-center justify-content-center">
                          <div class="col-md-12">
                            <div class="card px-5 py-5" style="text-align: left">
                              <h5 class="mt-3">
                                <div class="section-headline text-center">
                                  <h2 style="color: black">Information</h2>
                                </div>
                              </h5>

                            <!-- update form Component -->
                            <template v-if="type == 'update'">
                                <member-update v-on:toInfo="changeType" v-on:delete="withdrawModal"></member-update>
                            </template>

                            <!-- Information form Component -->
                            <template v-if="type == 'info'">
                                <member-info v-on:toUpdate="changeType" v-on:delete="withdrawModal"></member-info>
                            </template>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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


      <delete-modal v-bind:modal=deleteModal></delete-modal>
    </div>
</template>

<script>
import MemberUpdate from '@/components/MemberUpdate.vue';
import MemberInfo from '@/components/MemberInfo.vue';
// import axios from 'axios';
import DeleteModal from '@/components/modals/DeleteModal.vue';

import {Modal} from 'bootstrap';

export default {
    name: "Member",
    components: {
        MemberUpdate,
        MemberInfo,
        DeleteModal,
    },
    mounted(){
        this.type = "info"
        console.log(this.type);
        this.deleteModal = new Modal(document.getElementById('deleteModal'));
    },
    data:function(){
        return{
            type: "",
            deleteModal: null,
        }
    },
    methods:{
      changeType:function(data){
        this.type = data.type;
        console.log(this.type);
      },
      withdrawModal:function(){
        // console.log("delete button pushed");
        this.deleteModal.show();
      }
    }
}
</script>
