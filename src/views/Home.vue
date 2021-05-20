<template>
    <div>
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
                      동/아파트
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#" id="dong-search">동별</a></li>
                      <li><a class="dropdown-item" href="#" id="apt-search">아파트별</a></li>
                    </ul>
                    <input
                      type="text"
                      class="form-control"
                      aria-label="Text input with 2 dropdown buttons"
                      placeholder="검색어를 입력하세요."
                      name="searchWord"
                      id="searchText"
                    />
                    <button
                      class="btn btn-outline-secondary btn-main-search"
                      type="button"
                      aria-expanded="false"
                      id="searchApt"
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
                      <a href="blog.html">정든한진7차</a>
                    </h4>
                    <p>
                      경기도 성남시 분당구 정자동 194 <br />
                      382세대 <br />
                      9/20층
                    </p>
                  </div>
                  <span>
                    <a href="blog.html" class="ready-btn">Read more</a>
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
                      <a href="blog.html">상암월드컵파크5단지</a>
                    </h4>
                    <p>
                      서울시 마포구 상암동 1658<br />
                      436세대 <br />
                      16/21층
                    </p>
                  </div>
                  <span>
                    <a href="blog.html" class="ready-btn">Read more</a>
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
                      <a href="blog.html">송림아마레스</a>
                    </h4>
                    <p>
                      서울시 종로구 명륜1가 2-12 <br />
                      18세대 <br />
                      6층/6층
                    </p>
                  </div>
                  <span>
                    <a href="blog.html" class="ready-btn">Read more</a>
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

      <!-- ======= Services Section ======= -->
      <div id="services" class="services-area area-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline services-head text-center">
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div class="row text-center">
            <!-- Start Left services -->
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <a class="services-icon" href="#">
                      <i class="bi bi-briefcase"></i>
                    </a>
                    <h4>Expert Coder</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or
                      photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <a class="services-icon" href="#">
                      <i class="bi bi-card-checklist"></i>
                    </a>
                    <h4>Creative Designer</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or
                      photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
              <!-- end col-md-4 -->
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <a class="services-icon" href="#">
                      <i class="bi bi-bar-chart"></i>
                    </a>
                    <h4>Wordpress Developer</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or
                      photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
              <!-- end col-md-4 -->
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <a class="services-icon" href="#">
                      <i class="bi bi-binoculars"></i>
                    </a>
                    <h4>Social Marketer</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or
                      photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
            <!-- End Left services -->
            <div class="col-md-4 col-sm-4 col-xs-12">
              <!-- end col-md-4 -->
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <a class="services-icon" href="#">
                      <i class="bi bi-brightness-high"></i>
                    </a>
                    <h4>Seo Expart</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or
                      photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
            <!-- End Left services -->
            <div class="col-md-4 col-sm-4 col-xs-12">
              <!-- end col-md-4 -->
              <div class="about-move">
                <div class="services-details">
                  <div class="single-services">
                    <a class="services-icon" href="#">
                      <i class="bi bi-calendar4-week"></i>
                    </a>
                    <h4>24/7 Support</h4>
                    <p>
                      will have to make sure the prototype looks finished by inserting text or
                      photo.make sure the prototype looks finished by.
                    </p>
                  </div>
                </div>
                <!-- end about-details -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Services Section -->

    </main>
    <!-- End #main -->

    </div>
</template>

<script>

export default {
    name: "Home",
}
</script>
