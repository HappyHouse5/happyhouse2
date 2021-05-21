<template>
    <div>
        
      <div class="row">
        <small class="col-sm-10 mt-2 text-muted"
          >We are confident that our trading site is reliable and the most
          attractive.</small
        >
      </div>
      <div class="form-group mt-3 row">
        <label for="id">ID</label>
        <div class="col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="Enter ID"
            id="id"
          />
        </div>
      </div>
      <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
        <div
          id="liveToast"
          class="toast hide"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <!-- <img src="..." class="rounded me-2" alt="..."> -->
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
      <div class="form-group mt-3">
        <label for="pw">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter Password"
          id="pw"
        />
      </div>
      <div class="form-group mt-3">
        <label for="pwdchk">Password Check</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter Password Double Check"
          id="pwdchk"
        />
      </div>
      <div class="form-group mt-3">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          id="name"
        />
      </div>
      <div class="form-group mt-3">
        <label for="phone">Phone Number</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter PhoneNumber"
          id="phone"
        />
      </div>
      <div class="col-xl-12 form-group mt-3">
        <div class="checkbox-custom checkbox-primary">
          <input type="checkbox" id="chkFileUploadInsert" />
          <label for="chkFileUploadInsert">Profile</label>
        </div>
      </div>
      <div
        class="col-xl-12 form-group mt-3"
        style="display: none"
        id="imgFileUploadInsertWrapper"
      >
        <input type="file" id="inputFileUploadInsert" />
        <div
          id="imgFileUploadInsertThumbnail"
          class="thumbnail-wrapper"
        ></div>
      </div>
      <div class="row mt-3">
        <label for="email">Email</label>
      </div>
      <div class="row form-group">
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            placeholder="Enter E-mail"
            id="email"
          />
        </div>
        <div class="col-sm-3">
          <select
            name="mailcom"
            id="mailcom"
            style="width: 250px; height: 40px"
          >
            <option value="ssafy.com">ssafy.com</option>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="nate.com">nate.com</option>
            <option value="kakao.com">kakao.com</option>
            <option value="hanmail.com">hanmail.com</option>
          </select>
        </div>
      </div>
      <div class="row mt-3">
        <label for="location">Address</label>
      </div>
      <div class="row form-group">
        <div class="col-sm-6">
          <select
            name="location"
            id="location"
            style="width: 250px; height: 40px"
          >
            <option value="11110">종로구</option>
            <option value="11140">중구</option>
            <option value="11170">용산구</option>
            <option value="11200">성동구</option>
            <option value="11215">광진구</option>
            <option value="11230">동대문구</option>
            <option value="11260">중랑구</option>
            <option value="11290">성북구</option>
            <option value="11305">강북구</option>
            <option value="11320">도봉구</option>
            <option value="11350">노원구</option>
            <option value="11380">은평구</option>
            <option value="11410">서대문구</option>
            <option value="11440">마포구</option>
            <option value="11470">양천구</option>
            <option value="11500">강서구</option>
            <option value="11530">구로구</option>
            <option value="11545">금천구</option>
            <option value="11560">영등포구</option>
            <option value="11590">동작구</option>
            <option value="11620">관악구</option>
            <option value="11650">서초구</option>
            <option value="11680">강남구</option>
            <option value="11710">송파구</option>
            <option value="11740">강동구</option>
          </select>
        </div>
      </div>


      
      <div class="row mt-3">
        <div class="col-sm-4">
          <button
            type="button"
            id="back"
            class="btn btn-dark bg-dark"
            style="width: 100%" 
            v-on:click="toInfo" 
          >
            INFO
          </button>
        </div>
        <div class="col-sm-4">
          <button
            type="button"
            id="update"
            class="btn btn-dark bg-dark"
            style="width: 100%"
          >
            UPDATE
          </button>
        </div>
        <div class="col-sm-4">
          <button
            type="button"
            id="delete"
            class="btn btn-dark bg-dark signup"
            style="width: 100%" 
            v-on:click="withdraw" 
          >
            DELETE
          </button>
        </div>
      </div>
      <div style="font-size: large" class="text-center mt-5">
        <span>Or continue with these social profile</span>
      </div>
      <div class="row text-center">
        <div class="col-sm-4"></div>
        <div class="col-sm-1 text-center">
          <a
            class="btn btn-primary"
            style="background-color: #3b5998"
            href="#!"
            role="button"
            ><i class="fab fa-facebook-f"></i
          ></a>
        </div>

        <div class="col-sm-1 text-center">
          <a
            class="btn btn-primary"
            style="background-color: #55acee"
            href="#!"
            role="button"
            ><i class="fab fa-twitter"></i
          ></a>
        </div>
        <div class="col-sm-1 text-center">
          <a
            class="btn btn-primary"
            style="background-color: #ac2bac"
            href="#!"
            role="button"
            ><i class="fab fa-instagram"></i
          ></a>
        </div>
        <div class="col-sm-1 text-center">
          <a
            class="btn btn-primary"
            style="background-color: #333333"
            href="#!"
            role="button"
            ><i class="fab fa-github"></i
          ></a>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    name: "MemberUpdate",
    methods:{
      toInfo:function(){
        this.$emit('toInfo',{type: 'info'});
      },
      withdraw:function(){
        this.$emit('delete');
      },
    }
}
</script>
