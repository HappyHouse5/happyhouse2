
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
                    <td>{{member.userId}}</td>
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

            <div class="row mt-3 align-bottom">
            <div class="col-sm-4">
                <button
                type="button"
                id="back"
                class="btn btn-dark bg-dark"
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
                class="btn btn-dark bg-dark"
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
    },
}
</script>

<style>
