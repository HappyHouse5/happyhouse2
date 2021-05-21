<template>
<div class="modal" tabindex="-1" id="loginModal">
<div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        </div>
        <div class="modal-body">
          <form class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">User ID</label>
            <input
              type="text"
              class="form-control"
              placeholder="Email address"
              v-model="id" 
              required
            />
            <label for="inputPassword" class="sr-only">Password</label>
            <input
              type="password"
              id="userpwd"
              class="form-control"
              placeholder="Password"
              v-model="pwd" 
              required
            />
            <div class="checkbox mb-3">
              <label> <input type="checkbox" value="remember-me" /> Remember me </label>
            </div>
            
          </form>
        </div>
        <div class="modal-footer">
            <button
              id="btnLogin"
              class="btn btn-primary"
              v-on:click="loginSubmit"
              data-dismiss="modal"
              >Sign in</button
            >
          <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal"
            >Close</button
          >
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
        pwd: "123",
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
                sessionStorage.setItem("member", data);
                this.$store.dispatch('login', data);
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
    }
}
</script>
