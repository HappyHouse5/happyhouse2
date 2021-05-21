<template>
<div>
<!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">    <!-- fixed-top : position: fixed로 되어있다. -> z-index 무시하고 최상위, -> style="position:static" 하면 해결 가능 -->
      <div class="container d-flex justify-content-between">
        <div class="logo">
          <h1>
            <a href="/"><span>Happy House</span></a>
          </h1>
        </div>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link" style="cursor:pointer" v-on:click="$router.push({name: 'Home'}).catch(()=>{});">Home</a></li>
            <li><a class="nav-link scrollto" v-on:click="$router.push({name: 'House'}).catch(()=>{});">House</a></li>
            <template v-if="this.$store.getters.getMember == ''">
              <li><a class="nav-link scrollto" v-on:click="login">Login</a></li>
              <li><a class="nav-link scrollto" v-on:click="$router.push({name: 'Join'}).catch(()=>{});">Join</a></li>
            </template>
            
            <template v-if="this.$store.getters.getMember != ''">
                <li><a class="nav-link scrollto" v-on:click="$router.push({name: 'Interest'}).catch(()=>{});">Interest</a></li>
                <li><a class="nav-link scrollto" v-on:click="$router.push({name: 'Member', params: {type: 'info'}}).catch(()=>{});">MyPage</a></li>
                <li><a class="nav-link scrollto" v-on:click="logout">Logout</a></li>
            </template>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->

    <login-modal v-bind:loginModal="loginModal"></login-modal> <!--v-on:checkLogin="checkLogin()"-->
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
        loginModal: null,
        // isLogin: this.$store.getters.getIsLogin(),
        // isLogin: false,
        // isLogin: sessionStorage.getItem("member") == null ? false : true,
        // member: this.$store.getters.getMember,
      }
    },
    mounted() {
      this.loginModal = new Modal(document.getElementById("loginModal"));
      console.log(this.isLogin);
    },
    methods: {
      login() {
        console.log("login modal");
        this.loginModal.show();
      },
      logout:function(){
        sessionStorage.removeItem("member");
        sessionStorage.clear();
        this.$store.commit('logout');
      },
      // checkLogin:function(){
      //   // console.log(this.member);
      //    if(this.$store.getters.getMember == ""){
      //       this.isLogin = false;    
      //     }
      //     else{
      //       this.isLogin = true;
      //     }
      // },
    },
    // updated(){
    //   this.member(function(){
    //     if(this.member == ""){
    //       this.isLogin= false;
    //     }
    //     else{
    //       this.isLogin = true;
    //     }
    //   })
    // }
}

//document.getElementById("loginModal")
</script>

<style>

</style>