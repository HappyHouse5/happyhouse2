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
</template>

<script>
export default {
    name: "HouseSearch",
}
</script>

<style>

</style>