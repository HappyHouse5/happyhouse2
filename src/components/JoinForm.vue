<template>
  <!-- 가입, 수정, 탈퇴, 내정보 -->
  <div id="info">
    <!-- MyPage - Join -->
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-12" >
          <div class="card px-5 py-5 mx-auto" style="text-align: left" id="join-form">
            <h5 class="mt-3">
            </h5>
            <!-- User ID -->
            <div class="form-group">
              <label for="userId">ID *</label>
              <input
                id="userId"
                type="text"
                class="form-control"
                placeholder="Enter ID"
                v-model="userId"
                :class="{ 'is-valid': isUserIdFocusAndValid , 'is-invalid': isUserIdFocusAndInvalid  }" 
                @input="validateUserId"
                @focus="isUserIdFocus = true"
              />
              <div class="invalid-feedback">{{userIdMsg}}</div>
            </div>
            <!-- Password -->
            <div class="form-group mt-4">
              <label for="pw">Password *</label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter Password"
                v-model="pw"
                :class="{ 'is-valid': isPwFocusAndValid , 'is-invalid': isPwFocusAndInvalid  }"     
                @input="validatePw"
                @focus="isPwFocus = true"
              />
              <div class="invalid-feedback">{{pwMsg}}</div>
            </div>
            <!-- Password Check -->
            <div class="form-group mt-4">
              <label for="pwdchk">Password Check *</label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter Password Double Check"
                v-model="pwdchk"
                :class="{ 'is-valid': isPwchkFocusAndValid , 'is-invalid': isPwchkFocusAndInvalid  }"     
                @input="validatePwchk"
                @focus="isPwchkFocus = true"
              />
              <div class="invalid-feedback">{{pwchkMsg}}</div>
            </div>
            <!-- User Name -->
            <div class="form-group mt-4">
              <label for="name">User Name *</label>
              <input
                type="text"
                class="form-control"
                placeholder="User Name"
                v-model="name"
                :class="{ 'is-valid': isNameFocusAndValid , 'is-invalid': isNameFocusAndInvalid  }" 
                @input="validateName"
                @focus="isNameFocus = true"
              />
              <div class="invalid-feedback">{{nameMsg}}</div>
            </div>
            <!-- Phone Number -->
            <div class="form-group mt-4">
              <label for="phone">Phone Number</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter PhoneNumber"
                v-model="phone"
              />
            </div>
            <!-- Profile Image -->
            <div class="col-xl-12 form-group mt-4">
              <div class="checkbox-custom form-check checkbox-primary align-middle">
                <input type="checkbox" class="form-check-input" id="chkFileUploadInsert" v-model="checkProfileImage"/>
                <label for="chkFileUploadInsert ml-3">Profile Image</label>
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
            <!-- Email -->
            <div class="form-group mt-4">
              <label for="email">Email *</label>
              <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Enter E-mail Name"
                v-model="email"
                :class="{ 'is-valid': isEmailFocusAndValid , 'is-invalid': isEmailFocusAndInvalid  }" 
                @input="validateEmail"
                @focus="isEmailFocus = true"
              />
              <span class="input-group-text">@</span>
              
              <select
                class="form-select"
                name="mailcom"
                v-model="mailcom"
              >
                <option value="ssafy.com">ssafy.com</option>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="nate.com">nate.com</option>
                <option value="kakao.com">kakao.com</option>
                <option value="hanmail.com">hanmail.com</option>
              </select>
              <div class="invalid-feedback">{{emailMsg}}</div>
              </div>
            </div>


            <!-- Address -->
            <div class="form-group mt-4">
              <label for="location">Address *</label>
                          <div class="form-group">
              <div class="col-sm-6">
                <select
                  name="location"
                  v-model="locationCode"
                  class="form-select"
                  style="width: 250px; height: 40px"
                  :class="{ 'is-valid': isAddrFocusAndValid , 'is-invalid': isAddrFocusAndInvalid  }" 
                  @change="validateAddr"
                  @focus="isAddrFocus = true"
                >
                  <option selected disabled hidden value="">구선택</option>
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
                <div class="invalid-feedback">{{addrMsg}}</div>
              </div>
            </div>
          </div>

            <!-- Prefer -->
            <div class="mb-3 mt-4">
              <div class="form-group mt-3">
                <label for="prefer">Preferred Area Option</label>
              </div>
              <div class="form-check-inline" id="prefer-form">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="cf" value="CE7" name="prefer" v-model="prefer">
                  <label class="form-check-label" for="cf">카페</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="sc" value="SC4" name="prefer" v-model="prefer">
                  <label class="form-check-label" for="sc">학교</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="cs" value="CS2" name="prefer" v-model="prefer">
                  <label class="form-check-label" for="cs">편의점</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="sw" value="SW8" name="prefer" v-model="prefer">
                  <label class="form-check-label" for="sw">지하철</label>
                </div>
              </div>
            </div>

            <!-- buttons -->
            <div class="row mt-5">
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
      // member info
      userId: '',
      pw: '',
      pwdchk: '',
      name: '',
      phone: '',
      fileURL: '',
      email: '',
      mailcom: 'ssafy.com',
      locationCode: '',
      checkProfileImage: false,
      fileList: [],
      prefer: '',

      // focus
      isUserIdFocus: false,
      isPwFocus: false,
      isPwchkFocus: false,
      isNameFocus: false,
      isEmailFocus: false,
      isEmailcomFocus: false,
      isAddrFocus: false,

      // validation
      isUserIdValid: false,
      isDuplUserId: true,
      isPwValid: false,
      isPwchkValid: false,
      isNameValid: false,
      isEmailValid: false,
      isEmailcomValid: false,
      isAddrValid: false,

      // invalid message
      userIdMsg: 'ID를 입력해주세요.',
      pwMsg: '4자리 이상의 숫자와 문자로 이루어진 비밀번호를 입력해주세요.',
      pwchkMsg: '비밀번호가 일치하지 않습니다. 다시 입력해주세요.',
      nameMsg: '사용자 이름을 입력해주세요.',
      emailMsg: '이메일을 입력해주세요.',
      addrMsg: '주소를 입력해주세요.',
    }
  },
  computed: {
    isUserIdFocusAndValid() {
      return this.isUserIdFocus && this.isUserIdValid;
    },
    isUserIdFocusAndInvalid() {
      return this.isUserIdFocus && !this.isUserIdValid;
    },
    isPwFocusAndValid() {
      return this.isPwFocus && this.isPwValid;
    },
    isPwFocusAndInvalid() {
      return this.isPwFocus && !this.isPwValid;
    },
    isPwchkFocusAndValid() {
      return this.isPwchkFocus && this.isPwchkValid;
    },
    isPwchkFocusAndInvalid() {
      return this.isPwchkFocus && !this.isPwchkValid;
    },
    isNameFocusAndValid() {
      return this.isNameFocus && this.isNameValid;
    },
    isNameFocusAndInvalid() {
      return this.isNameFocus && !this.isNameValid;
    },
    isEmailFocusAndValid() {
      return this.isEmailFocus && this.isEmailValid;
    },
    isEmailFocusAndInvalid() {
      return this.isEmailFocus && !this.isEmailValid;
    },
    isAddrFocusAndValid() {
      return this.isAddrFocus && this.isAddrValid;
    },
    isAddrFocusAndInvalid() {
      return this.isAddrFocus && !this.isAddrValid;
    },
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
      this.mailcom = 'ssafy.com';
      this.locationCode = '';
      this.checkProfileImage = false;
      this.fileList = [];

      // clear 버튼 클릭 시 validation 초기화하기 위해
      this.isDuplUserId = true;
      this.isPwValid = false;
      this.isPwchkValid= false;
      this.isNameValid= false;
      this.isUserIdValid= false;
      this.isEmailValid= false;
      this.isEmailcomValid= false;
      this.isAddrValid= false;
    },
    memberJoin() {
      console.log("join submit");
      
      if(!this.isUserIdValid || !this.isPwValid || !this.isPwchkValid || !this.isNameValid || !this.isEmailValid || !this.isAddrValid ) {
        alert("회원가입에 실패했습니다.\n양식을 다시 확인해주세요.");
        return;
      }

      // file upload
      var formData = new FormData();
      formData.append("userId", this.userId);
      formData.append("pw", this.pw);
      formData.append("name", this.name);
      formData.append("phone", this.phone);
      formData.append("email", this.email + "@" + this.mailcom);
      formData.append("locationCode", parseInt(this.locationCode));
      formData.append("prefer", this.prefer);

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
    validateUserId() {
      this.isUserIdValid = this.isDuplUserId;
      if(!this.isUserIdValid){                         // DB에 중복 ID가 있을 때
        this.userIdMsg = '중복 ID가 존재합니다. 다른 ID를 입력해 주세요.';
      }
      else{                                           // DB에 중복 ID 가 없을 떼  // 4글자가 되지 않는 경우는 axios를 수행하지 않고 watch: 에서 무조건 this.userIdMsg 변경
        this.userIdMsg = '사용 가능한 ID 입니다.';
      }
      // this.isUserIdFocusAndValid();
      console.log(this.isUserIdValid);
    },
    validatePw() {
      let patternEngAtListOne = new RegExp(/[a-zA-Z]+/);// + for at least one
      let patternNumAtListOne = new RegExp(/[0-9]+/);// + for at least one

      this.isPwValid = 
      ( patternEngAtListOne.test( this.pw ) 
        && patternNumAtListOne.test( this.pw )
        && this.pw.length >= 4
      ) ? true : false;

      console.log(this.isPwValid);
    },
    validatePwchk() {
      this.isPwchkValid = this.pw == this.pwdchk ? true : false;

      console.log(this.isPwchkValid);
    },
    validateName() {
      this.isNameValid = this.name.length > 0 ? true : false;

      console.log(this.isNameValid);
    },
    validateEmail() {
      this.isEmailValid = this.email.length > 0 ? true : false;
      console.log(this.isEmailValid);
    },
    validateAddr() {
      this.isAddrValid = this.locationCode.length > 0 ? true : false;

      console.log(this.isAddrValid);
    },
  },
  watch: {
    prefer: function(){
      console.log(this.prefer);
    },
    userId: function(){
      console.log(this.userId);

      if(this.userId.length >= 4){          // 4글자 이상일 때 DB에서 중복 검사
        axios.get('/members/checkId', {
          params:{
            userId: this.userId,
          }
        })
        .then(({data}) => {
          console.log("false 이면 중복 ID가 존재하는 것 : " + data);
          this.isDuplUserId = data;
          this.validateUserId();
        })
        .catch((err) => {
          console.log(err);
        })
      }
      else{                                 // 4글자 이하일 때 
        this.isUserIdValid = false;
        this.userIdMsg = 'ID를 4글자 이상 입력해주세요.';
      }
    }
  }
}
</script>
