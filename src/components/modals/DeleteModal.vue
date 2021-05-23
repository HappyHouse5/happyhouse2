<template>
<div class="modal" tabindex="-1" id="deleteModal">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title">회원 탈퇴 하시겠습니까?</h4>
        </div>

        <!-- Modal body -->
        <div class="modal-body">회원님의 모든 정보가 삭제되며 복구할 수 없습니다.</div>

        <!-- Modal footer -->
        <div class="modal-footer">
            <button type="button" id="withdrawOK" class="btn btn-danger" data-dismiss="modal" v-on:click="withdrawConfirm">
            확인
            </button>
            <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="hideModal">취소</button>
        </div>
    </div>
</div>
</div>
</template>

<script>
import axios from '@/common/axios.js';

export default {
    name: "DeleteModal",
    props:['modal'],
    methods:{
        hideModal:function(){
            this.modal.hide();
        },
        withdrawConfirm: function(){
            console.log("delete Confirm");
            axios.delete("/members/member", {
                
            })
            .then(({data}) => {
                this.modal.hide();
                console.log(data);
                if(data == 1){
                    alert("회원탈퇴 성공! \n메인페이지로 돌아갑니다.");
                    this.$store.commit('logout');
                    // this.$router.push({name: 'Home'});         
                    sessionStorage.removeItem("member");
                    location.href = "/"; 
                }
            })
            .catch((err) => {
                console.log("err: " + err);
                this.modal.hide();
            });
        },
    }
}
</script>