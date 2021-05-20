<template>
  <div id="app">
    <div id="nav">
      <nav-bar></nav-bar>
      <router-link to="/"></router-link>
      <Footer></Footer>
    </div>
    <router-view />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';
// require('assets/css/style.css');


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
