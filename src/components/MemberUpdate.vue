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
            v-model="member.userId"
            readonly
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
            <!-- <strong class="me-auto">Bootstrap</strong> -->
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
          v-model="member.pw"
        />
      </div>
      <div class="form-group mt-3">
        <label for="pwdchk">Password Check</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter Password Double Check"
          id="pwdchk"
          v-model="member.checkPw"
        />
      </div>
      <div class="form-group mt-3">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          id="name"
          v-model="member.name"
        />
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
          <img v-for="(profile, index) in file" v-bind:src="profile" v-bind:key="index">
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
            id="email"
            v-model="mail"
          />
        </div>
        <div class="col-sm-3">
          <select
            name="mailcom"
            id="mailcom"
            style="width: 250px; height: 40px"
            v-model="mailcom"
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
            v-model="member.locationCode"
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


      
      <div class="row mt-3 align-bottom">
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
            v-on:click="update" 
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
        
        file: [],
        attachFile: false,
        profileName: null,
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
          this.$emit('profileImage', "../assets/img/noProfile.png");  // this.file[0]
        }
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
      update: function(){
        // this.member.email = this.mail + "@" + this.mailcom;
        console.log(this.member);

        var formData = new FormData();
        formData.append("keyId", this.member.keyId);
        formData.append("userId", this.member.userId);
        formData.append("pw", this.member.pw);
        formData.append("phone", this.member.phone);
        formData.append("name", this.member.name);
        formData.append("email", this.member.email);
        formData.append("fileURL", this.member.fileURL);
        formData.append("locationCode", this.member.locationCode);
        
        var attachFile = document.querySelector("#inputFileUploadUpdate");
        console.log(attachFile);
        formData.append("file", attachFile.files[0]);

        axios.post('/members/modifyMember', formData, {
          headers:{
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({data}) =>{
          console.log(data);
          alert("회원 정보가 수정되었습니다.");
          this.$router.push({name: "Home"});
        })
        .catch((err) => {
          console.log(err);
        })
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
    },
    watch:{
      file:function(){
        if(this.file.length > 0){
          this.attachFile = true;
        }
        else{
          this.attachFile = false;
        }
      }
    }
}
</script>
