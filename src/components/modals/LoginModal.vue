<template>
<div class="modal" tabindex="-1" id="loginModal">
<div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-header" style="background-color:skyblue;"
        >
          <h5 class="modal-title" id="exampleModalLabel"><i class="bi bi-power" style="cursor:pointer;" @click="closeModal"></i></h5>
        </div>
        <div class="modal-body pt-3 bg-transparent">
          <form class="form-signin">
            <p class="mb-3 font-weight-normal text-end" style="color:gray; font-size: 7px; font-style:italic;">서부장과 권대리의 슬기로운 매물 관리 사이트</p>
            <!-- <label for="inputEmail" class="sr-only">User ID</label> -->
            <input
              type="text"
              class="form-control"
              placeholder="ID"
              v-model="id" 
              required
            />
            <!-- <label for="inputPassword" class="sr-only">Password</label> -->
            <input
              type="password"
              id="userpwd"
              class="form-control mt-2"
              placeholder="Password"
              v-model="pwd" 
              required
            />
            
          </form>
        </div>
         
        <div class="modal-footer">
            <button
              id="btn-chart"
              class="btn btn-sm"
              v-on:click="loginSubmit"
              data-dismiss="modal"
              >Sign in</button
            ><i class="bi bi-play-fill"></i>
          
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import axios from "@/common/axios.js";

export default {
    name: "LoginModal",
    props: ['loginModal'],
    data:function(){
      return{
        id: "admin",
        pwd: "123a",
      }
    },
    methods: {
        loginSubmit() {
            console.log("login submit");
            axios.post("/members/login", {
              userId: this.id,
              userPassword: this.pwd,
            })
            .then(({data}) => {
              console.log(data);
              if(data == ""){
                alert("ID, PW 확인해주세요.");
              }
              else{
                console.log(data);
                sessionStorage.setItem("member", JSON.stringify(data));
                this.$store.dispatch('login', data);
                this.$emit('loginSuccess');
                this.$alertify.success(data.name + " 님 환영합니다");
              }
              this.closeModal();
            })
            .catch((err) => {
              console.log(err);
            })
        },
        closeModal() {
            this.loginModal.hide();
        },
    },
}
</script>
