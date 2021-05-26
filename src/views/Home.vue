<template>
    <div>
 
    <house-search></house-search>


    <main id="main">
      <div id="best" class="blog-area">
        <div class="blog-inner area-padding">
          <div class="blog-overly"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="section-headline text-center">
                  <h2>Best Houses for Sale</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <!-- Start Left Blog -->
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="single-blog">
                  <div class="single-blog-img">
                    <a href="blog.html">
                      <img src="assets/img/best/apt1.jpg" alt="" />
                    </a>
                  </div>

                  <div class="blog-text">
                    <h4>
                      <a href="blog.html"><i class="bi bi-trophy-fill fs-4 trophy-1"></i> 정든한진7차</a>
                    </h4>
                    <p>
                      경기도 성남시 분당구 정자동 194 <br />
                      382세대 <br />
                      9/20층
                    </p>
                  </div>
                  <span>
                    <a href="https://new.land.naver.com/complexes/2742?ms=37.360517,127.11556,17&a=APT:JGC:ABYG&e=RETAIL" class="ready-btn">Read more</a>
                  </span>
                </div>
                <!-- Start single blog -->
              </div>
              <!-- End Left Blog-->
              <!-- Start Left Blog -->
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="single-blog">
                  <div class="single-blog-img">
                    <a href="blog.html">
                      <img src="assets/img/best/apt2.jpeg" alt="" />
                    </a>
                  </div>
                  <div class="blog-text">
                    <h4>
                      <a><i class="bi bi-trophy-fill fs-4 trophy-2"></i> 상암월드컵파크5단지</a>
                    </h4>
                    <p>
                      서울시 마포구 상암동 1658<br />
                      436세대 <br />
                      16/21층
                    </p>
                  </div>
                  <span>
                    <a href="https://new.land.naver.com/complexes/19427?ms=37.580234,126.885958,17&a=APT:JGC:ABYG&e=RETAIL" class="ready-btn">Read more</a>
                  </span>
                </div>
                <!-- Start single blog -->
              </div>
              <!-- End Left Blog-->
              <!-- Start Right Blog-->
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="single-blog">
                  <div class="single-blog-img">
                    <a href="blog.html">
                      <img src="assets/img/best/apt3.jpg" alt="" />
                    </a>
                  </div>
                  <div class="blog-text">
                    <h4>
                      <a><i class="bi bi-trophy-fill fs-4 trophy-3"></i> 송림아마레스</a>
                    </h4>
                    <p>
                      서울시 종로구 명륜1가 2-12 <br />
                      18세대 <br />
                      6층/6층
                    </p>
                  </div>
                  <span>
                    <a href="https://new.land.naver.com/complexes/102798?ms=37.590669,126.997675,17&a=APT:JGC:ABYG&e=RETAIL" class="ready-btn">Read more</a>
                  </span>
                </div>
              </div>
              <!-- End Right Blog-->
            </div>
          </div>
        </div>
      </div>

      <div id="posting" class="blog-area">
        <div class="blog-inner area-padding">
          <div class="reviews-area">
            <div class="row g-0">
              <div class="col-lg-6">
                <img src="" alt="" class="img-fluid" />
              </div>
              <div class="col-lg-6 work-right-text d-flex align-items-center">
                <div class="px-5 py-5">
                  <!-- py-lg-0 -->
                  <h2>Smart Help!</h2>
                  <br />
                  <h5>가용자금 확인 및 대출 계획</h5>
                  <h5>집 종류 및 지역 선택</h5>
                  <h5>정보 수집 & 시세 파악</h5>
                </div>
              </div>
            </div>
          </div>

          <div class="reviews-area">
            <div class="row g-0">
              <div class="col-lg-6 work-right-text d-flex align-items-center">
                <div class="px-5 py-5">
                  <!-- py-lg-0 -->
                  <h2>Today News</h2>
                  <br />
                  <h5>
                    <a
                      href="https://land.naver.com/news/newsRead.nhn?type=headline&bss_ymd=&prsco_id=005&arti_id=0001419634"
                      >LH, 해체 수준 혁신한다며… 공급대책은 차질 없이 진행?</a
                    >
                  </h5>
                  <h5>
                    <a
                      href="https://land.naver.com/news/newsRead.nhn?type=headline&bss_ymd=&prsco_id=119&arti_id=0002475177"
                      >들끓는 3기신도시 취소 여론에 청약대기자 ‘전세난민’ 걱정</a
                    >
                  </h5>
                  <h5>
                    <a
                      href="https://land.naver.com/news/newsRead.nhn?type=headline&bss_ymd=&prsco_id=079&arti_id=0003478464"
                      >서울 아파트 매매·전셋값 2주째 상승폭 둔화</a
                    >
                  </h5>
                </div>
              </div>
              <div class="col-lg-6">
                <img src="" alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
    <!-- End #main -->

    </div>
</template>

<script>
import HouseSearch from '@/components/HouseSearch.vue';

export default {
    name: "Home",
    components:{
        HouseSearch,
    }
}
</script>
