<template>
<div>
<!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex justify-content-between">
        <div class="logo">
          <h1>
            <a href="index.html"><span>Happy House</span></a>
          </h1>
        </div>

        <nav id="navbar" class="navbar">
          <ul>
            <a class="nav-link" style="cursor:pointer" v-on:click="$router.push({name: 'Home'}).catch(()=>{});">Home</a>
            <li><a class="nav-link scrollto" v-on:click="login">Login</a></li>
            <!-- <li><a class="nav-link scrollto" v-on:click="$router.push({name: 'Logout'}).catch(()=>{});">Logout</a></li> -->
            <li><a class="nav-link scrollto" v-on:click="$router.push({name: 'Join'}).catch(()=>{});">Join</a></li>
            <li><a class="nav-link scrollto" v-on:click="$router.push({name: 'Member', params: {type: 'info'}}).catch(()=>{});">MyPage</a></li>
            <li><a class="nav-link scrollto" v-on:click="$router.push({name: 'House'}).catch(()=>{});">House</a></li>
            <li><a class="nav-link scrollto" v-on:click="$router.push({name: 'Interest'}).catch(()=>{});">Interest</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->

    <login-modal v-bind:loginModal=loginModal></login-modal>
  </div>
</template>



<script>
import LoginModal from '@/components/modals/LoginModal.vue';
import {Modal} from 'bootstrap';

export default {
    name: "NavBar",
    components: {
      LoginModal,
    },
    data() {
      return {
        showModal: false,
        loginModal: null,
      }
    },
    mounted() {
      this.loginModal = new Modal(document.querySelector("#loginModal"));
    },
    methods: {
      login() {
        console.log("login modal");
        this.loginModal.show();
      }
    }
}
</script>

<style>

</style>