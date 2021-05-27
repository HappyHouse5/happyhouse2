
<template>
        <div>
            <!-- MyPage - myInfo -->
            <div id="form-myInfo" class="mypage-info p-5  m-auto" style="max-width: 650px" data-open="N">
            <table class="table text-center">
                <tbody>
                    <tr>
                    <th scope="row">User ID</th>
                    <td>{{member.userId}}</td>
                    </tr>
                    <tr>
                    <th scope="row">User Password</th>
                    <td>{{password}}</td>
                    </tr>
                    <tr>
                    <th scope="row">User Name</th>
                    <td>{{member.name}}</td>
                    </tr>
                    <tr>
                    <th scope="row">User Address</th>
                    <td>{{member.locationCode}}</td>
                    </tr>
                    <tr>
                    <th scope="row">User E-mail</th>
                    <td>{{member.email}}</td>
                    </tr>
                </tbody>
            </table>


            </div>

            <div class="row mt-3">
            <div class="col-sm-4">
                <button
                type="button"
                id="back"
                class="btn btn-secondary"
                style="width: 100%"
                >
                INFO
                </button>
            </div>
            <div class="col-sm-4">

            <!-- <router-link type="button" style="width: 100%" class="btn btn-dark bg-dark" :to="{name: 'Member', params: {type: 'update'}}">UPDATE</router-link> -->
                <button
                type="button"
                id="update"
                class="btn btn-secondary"
                style="width: 100%" 
                v-on:click="toUpdate"
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
    name: "MemberInfo",
    data() {
        return {
            member: JSON.parse(sessionStorage.getItem('member')),
        }
    },
    methods:{
        toUpdate: function(){
            this.$emit('toUpdate', {type: 'update'});
        },
        withdraw:function(){
            this.$emit('delete');
        },
        convertAddress:function(locationCode){
            if(locationCode == 11110) this.member.locationCode = '종로구'
            else if(locationCode == 11140) this.member.locationCode = '중구'
            else if(locationCode == 11170) this.member.locationCode = '용산구'
            else if(locationCode == 11200) this.member.locationCode = '성동구'
            else if(locationCode == 11215) this.member.locationCode = '광진구'
            else if(locationCode == 11230) this.member.locationCode = '동대문구'
            else if(locationCode == 11260) this.member.locationCode = '중랑구'
            else if(locationCode == 11290) this.member.locationCode = '성북구'
            else if(locationCode == 11305) this.member.locationCode = '강북구'
            else if(locationCode == 11320) this.member.locationCode = '도봉구'
            else if(locationCode == 11350) this.member.locationCode = '노원구'
            else if(locationCode == 11380) this.member.locationCode = '은평구'
            else if(locationCode == 11410) this.member.locationCode = '서대문구'
            else if(locationCode == 11440) this.this.member.locationCode = '마포구'
            else if(locationCode == 11470) this.member.locationCode = '양천구'
            else if(locationCode == 11500) this.member.locationCode = '강서구'
            else if(locationCode == 11530) this.member.locationCode = '구로구'
            else if(locationCode == 11545) this.member.locationCode = '금천구'
            else if(locationCode == 11560) this.member.locationCode = '영등포구'
            else if(locationCode == 11590) this.member.locationCode = '동작구'
            else if(locationCode == 11620) this.member.locationCode = '관악구'
            else if(locationCode == 11650) this.member.locationCode = '서초구'
            else if(locationCode == 11680) this.member.locationCode = '강남구'
            else if(locationCode == 11710) this.member.locationCode = '송파구'
            else if(locationCode == 11740) this.member.locationCode = '강동구'


        }
    },
    created(){
        axios.get('/members/getProfile', {
            params:{
                code: this.member.keyId,
            },
        })
        .then(({data}) => {
            if(data.isExist == true){
                this.$emit('profileImage', data.file.fileURL); 
                // this.$emit('profileImage', "../assets/img/favicon.png");  // this.file[0]
            }
            else{
                this.$emit('profileImage', "../assets/img/noProfile.png");
            }
            // if(this.attachFile) document.querySelector("#chkFileUploadUpdate").checked = true;
            console.log(data.file);
        })
        .catch((err) => {
            console.log(err);
        });
        
        this.convertAddress(this.member.locationCode);

    },
    computed:{
        password:function(){
            let ret = "";
            for(let i=0; i<this.member.pw.length; i++){
                ret += "*";
            }
            return ret;
        }
    }
}
</script>


