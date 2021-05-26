<template>
<div>
    <!-- ======= hero Section ======= -->
    <section id="hero" style="height: 1200px">
      <div class="hero-container">
        <div
          id="heroCarousel"
          class="carousel carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div class="carousel-inner" role="listbox">
            <div
              class="carousel-item-sub active"
              style="background-image: url(assets/img/hero-carousel/bg1.jpg)"
            >
              <div class="carousel-container">
                <div class="container">
                  <p class="animate__animated animate__fadeInUp mb-2">Board</p>
                  <!-- <h2 class="animate__animated animate__fadeInDown">
                    Add a region of interest to easily check listings
                  </h2> -->


                  <div class="p-5 board-inner mx-auto mt-5">

                  <div class="input-group mb-5 mt-3">
                    <!-- store 사용 -->
                    <!-- <input v-model="searchWord" @keydown.enter="boardList" type="text" class="form-control"> -->
                    <input placeholder="검색어를 입력하세요." v-model="$store.state.board.searchWord" @keydown.enter="boardList" type="text" class="form-control">
                    <button @click="boardList" class="btn btn-success " type="button" id="btn-board-search">Search</button>
                  </div>

                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>제목</th>
                          <th>작성자</th>
                          <th>작성일시</th>
                          <th>조회수</th>
                        </tr>
                      </thead>
                        <tbody>
                          <!-- store 사용 -->

                          <!-- 직접 store 에 접근해도 된다. -->
                          <!-- <tr v-for="(board, index) in $store.state.board.list" @click="boardDetail(board.boardId)" v-bind:key="index"> -->
                          
                          <!-- getters 를 이용하는 코드 -->
                          <!-- computed - listGetters - getBoardList  -->
                          <tr v-for="(board, index) in listGetters" @click="boardDetail(board.boardId)" v-bind:key="index">
                            <td>{{ board.boardId }}</td>
                            <td>{{ board.title }}</td>
                            <td>{{ board.userName }}</td>

                            <!-- function 을 바로 사용하는 경우 -->
                            <td>{{ makeDateStr(board.regDt.date.year, board.regDt.date.month, board.regDt.date.day, '.') }}</td>
                            
                            <td>{{ board.readCount }}</td>
                          </tr>
                        </tbody>
                      </table>
                  
                <div class="row mt-5 align-bottom">
                  <button class="btn btn-sm" id="btn-chart" @click="showInsertModal">글쓰기</button>
                  <pagination class="col-10" v-on:call-parent="movePage"></pagination>
                </div>


                    

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </section>
    <!-- End Hero Section -->
     
                    <insert-modal v-on:call-parent-insert="closeAfterInsert"></insert-modal>
                    <!-- props 제거 -->
                    <detail-modal v-on:call-parent-change-to-update="changeToUpdate" v-on:call-parent-change-to-delete="changeToDelete"></detail-modal>
                    <update-modal v-on:call-parent-update="closeAfterUpdate"></update-modal>

</div>


</template>


<script>
import InsertModal from '@/components/modals/InsertModal.vue';
import DetailModal from '@/components/modals/DetailModal.vue';
import UpdateModal from '@/components/modals/UpdateModal.vue';

import { Modal } from 'bootstrap';

import axios from "@/common/axios.js";
import util from "@/common/util.js";

import Pagination from '@/components/PaginationVuex.vue';

// 삭제
import Vue from 'vue';
import VueAlertify from 'vue-alertify'; 
Vue.use(VueAlertify);

export default {

  name: 'BoardMain',
  components: { InsertModal, DetailModal, UpdateModal, Pagination },
  data(){
    return {
      // modal
      insertModal : null,
      detailModal : null,
      updateModal : null,

      // 아래 data 사용 X
      // // list
      // list: [],
      // limit: 10,
      // offset: 0,
      // searchWord: '',

      // // pagination
      // listRowCount: 10,
      // pageLinkCount: 10,
      // currentPageIndex: 1,

      // totalListItemCount: 0,

      // // detail
      // boardId: 0,

      // // update
      // board: {
      //   boardId: 0,
      //   title: '',
      //   content: '',
      //   fileList: []
      // }
    }
  },
  computed :{
    // gttters 이용
    listGetters(){
      return this.$store.getters.getBoardList; // no getBoardList()
    },
    formatDate : function(){
      let $this = this;
      // store 사용
      return this.$store.state.board.list.map( function( board ){
        return $this.makeDateStr(board.regDt.date.year, board.regDt.date.month, board.regDt.date.day, '.')
      });
    }
  },
  methods : {

    // list
    // store actions 에 구현
    // 가능한 한 가지 방법
    boardList(){
      this.$store.dispatch('boardList');
    },

    // pagination
    movePage(pageIndex){
      console.log("BoardMainVue : movePage : pageIndex : " + pageIndex );

      // store commit 으로 변경
      // this.offset = (pageIndex - 1) * this.listRowCount;
      // this.currentPageIndex = pageIndex;
      this.$store.commit( 'SET_BOARD_MOVE_PAGE', pageIndex );


      this.boardList();
    },

    // util
    makeDateStr : util.makeDateStr,

    // insert
    showInsertModal(){
      this.insertModal.show();
    },

    closeAfterInsert(){
      this.insertModal.hide();
      this.boardList();
    },

    // detail
    // board-vue 와 다르게 구현해 봄
    // Detail Component 에서 Server 요청을 하지 않고 이곳에서 수행 후에 Detail 보여줌
    boardDetail(boardId){
      // store 변경
      // this.boardId = boardId;
      // this.$store.commit('mutateSetBoardBoardId', boardId);

      axios.get(
      '/boards/' + boardId, // props variable
      )
      .then(({ data }) => {
        console.log("DetailModalVue: data : ");
        console.log(data);

        if( data.result == 'login' ){
            this.$store.commit("logout");
            sessionStorage.removeItem("member");
            alert("로그인이 필요합니다.");
            location.href = "/";
          // this.$router.push("/login");
        }else{
          this.$store.commit(
            'SET_BOARD_DETAIL',
            { 
              boardId: data.dto.boardId,
              userName: data.dto.userName,
              title: data.dto.title,
              content: data.dto.content,
              regDt: this.makeDateStr(data.dto.regDt.date.year, data.dto.regDt.date.month, data.dto.regDt.date.day, '.'),
              fileList: data.dto.fileList,
              isOwner: data.isOwner, // not data.dto.isOwner

            }
          );

          this.detailModal.show();
        }
      })
      .catch((error) => {
        console.log("DetailModalVue: error ");
        console.log(error);
      });


    },

    // update
    // Detail 에서 board data 를 직접 변경
    // changeToUpdate( board ){
    //   this.board = board; 
    //   this.detailModal.hide();
    //   this.updateModal.show();
    // },
    changeToUpdate(){ // board parameter 필요 없음.
      // data update 사용 X
      // this.board = board; 
      this.detailModal.hide();
      this.updateModal.show();
    },

    closeAfterUpdate(){
      // boardId 초기화 필요 X watch 사용 X
      //this.boardId = 0;

      this.updateModal.hide();
      this.boardList();
    },

    // delete
    // $emit board 사용 X
    // changeToDelete(board){
    changeToDelete(){
      this.detailModal.hide();

      var $this = this; // alertify.confirm-function()에서 this 는 alertify 객체
      this.$alertify.confirm(
        //'삭제 확인', '이 글을 삭제하시겠습니까?', <- ???? title 추가하면 cancel이 ok 처럼 동작
        '이 글을 삭제하시겠습니까?',
        function(){
          // board.boardId 사용 X
          $this.boardDelete(); // $this 사용
        },
        function(){
          console.log('cancel');
        }
      );
    },
    boardDelete(){ // parameter 사용 X
      axios.delete(
        "/boards/delete/" + this.$store.state.board.boardId
        )
        .then(({ data }) => {
          console.log("BoardMainVue: data : ");
          console.log(data);
          if( data.result == 'login' ){
            // this.$router.push("/login");
            this.$store.commit("logout");
            sessionStorage.removeItem("member");
            alert("로그인이 필요합니다.");
            location.href = "/";
            // this.$router.push({name: "Home"});
          }else{
            this.boardList();
          }
        })
        .catch( error => {
            console.log(error)
        });
      }
  },
  created() {
    this.boardList();
  },
  mounted() {
    this.insertModal = new Modal(document.getElementById('insertModal'));
    this.detailModal = new Modal(document.getElementById('detailModal'));
    this.updateModal = new Modal(document.getElementById('updateModal'));
  },

}
</script>


<style scoped>
</style>

