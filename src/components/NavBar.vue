<template>
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
</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style>

</style>