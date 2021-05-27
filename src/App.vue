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
