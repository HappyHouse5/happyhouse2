<template>
        <div>
                        <!-- MyPage - myInfo -->
                        <div id="form-myInfo" class="mypage-info" data-open="N">
                        <form>
                            <div class="form-group myInfo-view">
                            <label for="formGroupExampleInput">User ID</label>
                            <h6 class="info" data-infoIdx="0">User ID</h6>
                            </div>
                            <div class="form-group myInfo-view">
                            <label for="formGroupExampleInput2">User Password</label>
                            <h6 class="info" data-infoIdx="1">User Password</h6>
                            </div>
                            <div class="form-group myInfo-view">
                            <label for="formGroupExampleInput2">User Name</label>
                            <h6 class="info" data-infoIdx="3">User Name</h6>
                            </div>
                            <div class="form-group myInfo-view">
                            <label for="formGroupExampleInput2">User Address</label>
                            <h6 class="info" data-infoIdx="5">User Address</h6>
                            </div>
                            <div class="form-group myInfo-view">
                            <label for="formGroupExampleInput2">User E-mail</label>
                            <h6 class="info" data-infoIdx="4">User E-mail</h6>
                            </div>
                            <div class="form-group myInfo-view">
                            <label for="formGroupExampleInput2">User Location</label>
                            <h6 class="info" data-infoIdx="4" id="memberLocationCode">
                                User Location
                            </h6>
                            </div>
                        </form>
                        </div>

                        <div class="row mt-3">
                        <div class="col-sm-4">
                            <button
                            type="button"
                            id="back"
                            class="btn btn-dark bg-dark"
                            style="width: 100%"
                            >
                            HOME
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
    name: "Memberinfo",
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

</style>