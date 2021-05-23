<template>
                        <!-- 가입, 수정, 탈퇴, 내정보 -->
                    <div id="info">
                      <!-- MyPage - Join -->

                      <div class="container">
                        <div class="row d-flex align-items-center justify-content-center">
                          <div class="col-md-12">
                            <div class="card px-5 py-5" style="text-align: left">
                              <h5 class="mt-3">
                                <div class="section-headline text-center">
                                  <h2 style="color: black">Put In</h2>
                                </div>
                              </h5>
                              <div class="form-group mt-3 row">
                                <label for="id">ID</label>
                                <div class="col-sm-9">
                                  <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter ID"
                                    id="id"
                                    v-model="userId"
                                  />
                                </div>

                                <div class="spinner-border text-primary col-sm-1" role="status">
                                  <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="col-sm-2">
                                  <span class="circle"><i class="fa fa-check"></i></span>
                                  <button
                                    type="button"
                                    class="btn btn-danger"
                                    id="liveToastBtn"
                                    style="background-color: white; color: cadetblue"
                                  >
                                    Check ID
                                  </button>
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
                                  v-model="pw"
                                />
                              </div>
                              <div class="form-group mt-3">
                                <label for="pwdchk">Password Check</label>
                                <input
                                  type="password"
                                  class="form-control"
                                  placeholder="Enter Password Double Check"
                                  v-model="pwdchk"
                                />
                              </div>
                              <div class="form-group mt-3">
                                <label for="name">Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Name"
                                  v-model="name"
                                />
                              </div>
                              <div class="form-group mt-3">
                                <label for="phone">Phone Number</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Enter PhoneNumber"
                                  v-model="phone"
                                />
                              </div>

                              <div class="col-xl-12 form-group mt-3">
                                <div class="checkbox-custom checkbox-primary">
                                  <input type="checkbox" class="form-check-input" id="chkFileUploadInsert" v-model="checkProfileImage" />
                                  <label for="chkFileUploadInsert">Profile Image</label>
                                </div>
                              </div>
                              <div
                                class="col-xl-12 form-group mt-3"
                                id="imgFileUploadInsertWrapper"
                                v-show="checkProfileImage"
                              >
                                <input @change="changeFile"  type="file" id="inputFileUploadInsert" multiple>
                                <div
                                  id="imgFileUploadInsertThumbnail"
                                  class="thumbnail-wrapper"
                                >
                                  <!-- <img v-for="(file, index) in fileList" v-bind:src="file" v-bind:key="index"> -->
                                </div>
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
                                    v-model="email"
                                  />
                                </div>
                                <div class="col-sm-3">
                                  <select
                                    name="mailcom"
                                    v-model="mailcom"
                                    style="width: 250px; height: 40px"
                                  >
                                    <option selected value="ssafy.com">ssafy.com</option>
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
                                    v-model="locationCode"
                                    style="width: 250px; height: 40px"
                                  >
                                    <option selected value="11110">종로구</option>
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
                                <div class="col-sm-6">
                                  <button
                                    type="button"
                                    class="btn btn-dark"
                                    style="width: 100%"
                                    v-on:click="clearForm"
                                  >
                                    CLEAR
                                  </button>
                                </div>
                                <div class="col-sm-6">
                                  <button
                                    type="button"
                                    id="btnSubmit"
                                    class="btn btn-dark signup"
                                    style="width: 100%"
                                    @click="memberJoin"
                                  >
                                    JOIN IN
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
                          </div>
                        </div>
                      </div>
                    </div>
</template>

<script>
import axios from "@/common/axios.js";
export default {
  name: "JoinForm",
  data() {
    return {
      userId: '',
      pw: '',
      pwdchk: '',
      name: '',
      phone: '',
      fileURL: '',
      email: '',
      mailcom: 'ssafy.com',
      locationCode: '11110',
      checkProfileImage: false,
      fileList: [],
    }
  },
  methods: {
    clearForm() {
      this.userId = '';
      this.pw = '';
      this.pwdchk = '';
      this.name = '';
      this.phone = '';
      this.email = '';
      this.fileURL = '';
      this.mailcom = '';
      this.locationCode = '';
      this.checkProfileImage = false;
      this.fileList = [];
    },
    memberJoin: function() {
      console.log("join submit");
      
      // file upload
      var formData = new FormData();
      formData.append("userId", this.userId);
      formData.append("pw", this.pw);
      formData.append("name", this.name);
      formData.append("phone", this.phone);
      formData.append("email", this.email + "@" + this.mailcom);
      formData.append("locationCode", parseInt(this.locationCode));
      
      var attachFiles = document.querySelector("#inputFileUploadInsert");
      console.log("InsertModalVue: data 1 : ");
      console.log(attachFiles);

      var cnt = attachFiles.files.length;
      for (var i = 0; i < cnt; i++) {
        formData.append("file", attachFiles.files[i]);
      }
      
      axios.post("/members/member", 
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(({data}) => {
        console.log(data);
        if(data == -1){
          // this.$alertify.alert("회원가입 실패! 회원 ID를 확인해주세요.", () =>
            this.$alertify.warning("회원가입 실패! 회원 ID를 확인해주세요.");
        }
        else if(data == -2){
          this.$alertify.warning("회원가입 실패! 회원 Email을 확인해주세요.");
        }
        else{
          alert("회원가입이 완료되었습니다.");
          this.$router.push({name: 'Home'});
        }
      })
      .catch((err) => {
        console.log(err);
      })
    },
    changeFile(fileEvent) {
      if( fileEvent.target.files && fileEvent.target.files.length > 0 ){
        for( var i=0; i<fileEvent.target.files.length; i++ ){
          const file = fileEvent.target.files[i];
          this.fileList.push(URL.createObjectURL(file));
        }
      }
    },
  }
}
</script>
