<template>
  <div id="app">
    <div id="nav">
      <nav-bar></nav-bar>
      <router-link to="/" ></router-link>
      
    </div>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';

// require('assets/css/style.css');

// import './assets/js/main.js'

// import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
// import '@/assets/vendor/glightbox/js/glightbox.min.js';
// import '@/assets/vendor/isotope-layout/isotope.pkgd.min.js';
// import '@/assets/vendor/php-email-form/validate.js'
// import '@/assets/vendor/swiper/swiper-bundle.min.js'
// import '@/assets/js/main.js';
// import '@/assets/vendor/**';

export default {
  name: "app",
  props: {
  },
  components:{
    'NavBar': NavBar,
    'Footer': Footer,
  }
};
</script>

	
<style src="./assets/css/style.css">
</style>
