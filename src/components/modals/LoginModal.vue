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
              required
            />
            <label for="inputPassword" class="sr-only">Password</label>
            <input
              type="password"
              id="userpwd"
              class="form-control"
              placeholder="Password"
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
export default {
    name: "LoginModal",
    props: ['loginModal'],
    methods: {
        loginSubmit() {
            console.log("login submit");
        },
        closeModal() {
            this.loginModal.hide();
        }
    }
}
</script>
