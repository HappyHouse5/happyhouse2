<template>
    <div>
      <!-- User ID -->
      <div class="form-group mt-3 row">
        <label for="id">ID</label>
        <div class="col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="Enter ID"
            id="id"
            v-model="member.userId"
            readonly
          />
        </div>
      </div>
      <!-- Password -->
      <div class="form-group mt-3">
        <label for="pw">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter Password"
          id="pw"
          v-model="member.pw"
          :class="{ 'is-valid': isPwFocusAndValid , 'is-invalid': isPwFocusAndInvalid  }"     
          @input="validatePw"
          @focus="isPwFocus = true"
        />
        <div class="invalid-feedback">{{pwMsg}}</div>
      </div>
      <!-- Password Check -->
      <div class="form-group mt-3">
        <label for="pwdchk">Password Check</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter Password Double Check"
          id="pwdchk"
          v-model="pwdchk"
          :class="{ 'is-valid': isPwchkFocusAndValid , 'is-invalid': isPwchkFocusAndInvalid  }"     
          @input="validatePwchk"
          @focus="isPwchkFocus = true"
        />
        <div class="invalid-feedback">{{pwchkMsg}}</div>
      </div>
      <div class="form-group mt-3">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          id="name"
          v-model="name"
          :class="{ 'is-valid': isNameFocusAndValid , 'is-invalid': isNameFocusAndInvalid  }" 
          @input="validateName"
          @focus="isNameFocus = true"
        />
        <div class="invalid-feedback">{{nameMsg}}</div>
      </div>
      <div class="form-group mt-3">
        <label for="phone">Phone Number</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter PhoneNumber"
          id="phone"
          v-model="member.phone"
        />
      </div>
      <div class="form-check mb-3 mt-3">
            <input v-model="attachFile" v-on:click="checkboxClick" class="form-check-input" type="checkbox" id="chkFileUploadUpdate">
            <label class="form-check-label" for="chkFileUploadUpdate">Profile Image<template v-if="file.length > 0"> : {{profileName}}</template></label>
      </div>
      <!-- <div v-for="(profile, index) in file" :key="index">
        <span class="fileName">{{ profile.fileName }}</span>
          
        <a type="button" class="btn btn-outline btn-default btn-xs" v-bind:href="profile.fileUrl" download>내려받기</a>
      </div> -->
      <div class="row mb-3" v-show="attachFile" id="imgFileUploadUpdateWrapper">
        <div class="col-sm-1">
        <input @change="changeFile" type="file" id="inputFileUploadUpdate" style="color: white">
        </div>
        <div id="imgFileUploadUpdateThumbnail" class="thumbnail-wrapper col-sm-1" >
                        <!-- vue way img 를 만들어서 append 하지 않고, v-for 로 처리 -->
          <!-- <img v-for="(profile, index) in file" v-bind:src="profile" v-bind:key="index"> -->
        </div>
      </div>
      <div class="row mt-3">
        <label for="email">Email</label>
      </div>
      <div class="row form-group">
        <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Enter E-mail Name"
          v-model="mail"
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
        <label for="location">Address</label>
                    <div class="form-group">
        <div class="col-sm-6">
          <select
            name="location"
            v-model="member.locationCode"
            class="form-select"
            style="width: 250px; height: 40px"
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
            <input class="form-check-input" type="radio" id="cf" value="CE7" name="prefer" v-model="member.prefer">
            <label class="form-check-label" for="cf">카페</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="sc" value="SC4" name="prefer" v-model="member.prefer">
            <label class="form-check-label" for="sc">학교</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="cs" value="CS2" name="prefer" v-model="member.prefer">
            <label class="form-check-label" for="cs">편의점</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="sw" value="SW8" name="prefer" v-model="member.prefer">
            <label class="form-check-label" for="sw">지하철</label>
          </div>
        </div>
      </div>
      
      <div class="row mt-5 align-bottom">
        <div class="col-sm-4">
          <button
            type="button"
            id="back"
            class="btn btn-secondary"
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
            class="btn btn-secondary"
            style="width: 100%"
            v-on:click="update" 
          >
            UPDATE
          </button>
        </div>
        <div class="col-sm-4">
          <button
            type="button"
            id="delete"
            class="btn btn-secondary signup"
            style="width: 100%" 
            v-on:click="withdraw" 
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import axios from '@/common/axios.js';

export default {
    name: "MemberUpdate",
    data: function(){
      return{
        mail: "",
        mailcom: "",
        member: JSON.parse(sessionStorage.getItem("member")),
        name: JSON.parse(sessionStorage.getItem("member")).name,
        pwdchk: '',
        
        file: [],
        attachFile: false,
        profileName: null,

        // focus
        isPwFocus: true,
        isPwchkFocus: false,
        isNameFocus: true,
        isEmailFocus: true,
        isEmailcomFocus: true,

        // validation
        isPwValid: true,
        isPwchkValid: false,
        isNameValid: true,
        isEmailValid: true,
        isEmailcomValid: true,

        // invalid message
        pwMsg: '4자리 이상의 숫자와 문자로 이루어진 비밀번호를 입력해주세요.',
        pwchkMsg: '비밀번호가 일치하지 않습니다. 다시 입력해주세요.',
        nameMsg: '사용자 이름을 입력해주세요.',
        emailMsg: '이메일을 입력해주세요.',

      }
    },
    mounted(){
      console.log(this.member.email);
      this.mail = this.member.email.substring(0, this.member.email.indexOf("@"));
      this.mailcom = this.member.email.substring(this.member.email.indexOf("@") + 1, this.member.email.length);
      // this.member = JSON.parse(sessionStorage.getItem("member"));
      axios.get('/members/getProfile', {
        params:{
           code: this.member.keyId,
        },
      })
      .then(({data}) => {
        console.log(data);
        this.file = [];
        if(data.isExist){
          this.file.push(data.file);
          document.querySelector("#chkFileUploadUpdate").checked = true;
          this.attachFile = true;
          this.profileName = this.file[0].fileName;
          this.$emit('profileImage', this.file[0].fileURL);
          // this.$emit('profileImage', "../assets/img/favicon.png");      // 프로필 사진이 있을 때
        }
        else{
          this.$emit('profileImage', "../assets/img/noProfile.png");     // 프로필 사진이 없을 때
        }
        this.$emit('name', this.name);
        this.attachFile = this.file.length == 0 ? false : true;
        // if(this.attachFile) document.querySelector("#chkFileUploadUpdate").checked = true;

        console.log(this.file);
      })
      .catch((err) => {
        console.log(err);
      });

      
    },
    methods:{
      toInfo:function(){
        this.$emit('toInfo',{type: 'info'});
      },
      withdraw:function(){
        this.$emit('delete');
      },
      update: async function(){
        // this.member.email = this.mail + "@" + this.mailcom;
        console.log(this.member);

        if(!this.isPwValid || !this.isPwchkValid || !this.isNameValid || !this.isEmailValid) {
          alert("회원정보 수정에 실패했습니다.\n양식을 다시 확인해주세요.");
          return;
        }

        var formData = new FormData();
        formData.append("keyId", this.member.keyId);
        formData.append("userId", this.member.userId);
        formData.append("pw", this.member.pw);
        formData.append("phone", this.member.phone);
        formData.append("name", this.member.name);
        formData.append("email", this.mail + '@' + this.mailcom);
        formData.append("fileURL", this.member.fileURL);
        formData.append("locationCode", this.member.locationCode);
        
        if(this.attachFile){
          formData.append("file", document.querySelector("#inputFileUploadUpdate").files[0]);
        }

        await axios.post('/members/modifyMember', formData, {
          headers:{
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          alert("회원 정보가 수정되었습니다.");
        })
        .catch((err) => {
          console.log(err);
        });

        axios.get('/members/logout',{}
        )
        .then(() => {
          this.$store.commit('logout');
          sessionStorage.removeItem("member");
          location.href = "/";
        })
        .catch((err) => {
          console.log(err);
        });
      },
      changeFile(fileEvent) {
        if( fileEvent.target.files && fileEvent.target.files.length > 0 ){
          this.file = [];
          for( var i=0; i<fileEvent.target.files.length; i++ ){
            const file = fileEvent.target.files[i];
            this.file.push(URL.createObjectURL(file));
          }
          console.log("파일 명 : " + fileEvent.target.files[0].name);
          this.profileName = fileEvent.target.files[0].name;
          this.$emit('profileImage', this.file[0]); 
        }
      },
      checkboxClick:function(){
        console.log(document.querySelector("#chkFileUploadUpdate").checked);
        this.file = [];
        if(document.querySelector("#chkFileUploadUpdate").checked){
          this.attachFile = true;
        }
        else{
          this.attachFile = false;
        }
      },
      validatePw() {
        let patternEngAtListOne = new RegExp(/[a-zA-Z]+/);// + for at least one
        let patternNumAtListOne = new RegExp(/[0-9]+/);// + for at least one

        this.isPwValid = 
        ( patternEngAtListOne.test( this.member.pw ) 
          && patternNumAtListOne.test( this.member.pw )
          && this.member.pw.length >= 4
        ) ? true : false;

        console.log(this.isPwValid);
      },
      validatePwchk() {
        this.isPwchkValid = this.member.pw == this.pwdchk ? true : false;

        console.log(this.isPwchkValid);
      },
      validateName() {
        this.isNameValid = this.name.length > 0 ? true : false;

        console.log(this.isNameValid);
      },
      validateEmail() {
        this.isEmailValid = this.mail.length > 0 ? true : false;
        console.log(this.isEmailValid);
      },
    },
    watch:{
      file:function(){
        if(this.file.length > 0){
          this.attachFile = true;
        }
        else{
          this.attachFile = false;
        }
      },
      name: function(){
        this.member.name = this.name;
        this.$emit('name', this.name);
      }
    },
    computed: {
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
    },
}
</script>
