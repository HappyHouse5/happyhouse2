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
    name: "Memberinfo",
}
</script>

<style>

</style>