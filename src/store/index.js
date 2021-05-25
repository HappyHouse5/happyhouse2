import Vue from "vue";
import Vuex from "vuex";
import axios from '@/common/axios.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    member: '',
    board: {
      list: [],
      limit: 10,
      offset: 0,
      searchWord: '',

      // pagination
      listRowCount: 10,
      pageLinkCount: 10,
      currentPageIndex: 1,

      totalListItemCount: 0,

      // detail, update, delete
      boardId: 0,
      title: '',
      content: '',
      userName: '',
      regDt: {},
      readCount: 0,
      fileList: [],
      isOwner: false,
    }
  },
  getters: {
    getMember(state) {
      return state.member;
    },
    getBoardList : function(state){
      return state.board.list;
    },
  },
  mutations: {
    login(state, payload) {
      state.member = payload;
      console.log("state.member: " + state.member);
    },
    logout(state) {
      state.member = '';
    },
    SET_BOARD_LIST(state, list){
      state.board.list = list
    },

    SET_BOARD_TOTAL_LIST_ITEM_COUNT(state, count){
      state.board.totalListItemCount = count
    },

    SET_BOARD_MOVE_PAGE(state, pageIndex){
      state.board.offset = (pageIndex - 1) * state.board.listRowCount;
      state.board.currentPageIndex = pageIndex;
    },

    SET_BOARD_DETAIL(state, payload) {
      state.board.boardId = payload.boardId
      state.board.title = payload.title;
      state.board.content = payload.content;
      state.board.userName = payload.userName;
      state.board.regDt = payload.regDt;
      state.board.fileList = payload.fileList;
      state.board.isOwner = payload.isOwner;
    },
  },
  actions: {
    login: function(context, payload) {
      console.log(context);
      context.commit("login", payload);
    },

    boardList(context){
      axios.get(
        "/boards",
        {
          // get query string
          params: {
            limit: this.state.board.limit,
            offset: this.state.board.offset,
            searchWord: this.state.board.searchWord
          }
        })
        .then(({ data }) => {
          console.log("BoardMainVue: data : " + data);
          if (data.result == 'login') {
            // this.$store.commit("logout");
            sessionStorage.removeItem("member");
            alert("로그인이 필요합니다.");
            location.href = "/";
            // this.$router.push({ name: "Home" }).catch(() => { });
          }else{
            context.commit( 'SET_BOARD_LIST', data.list );
            context.commit( 'SET_BOARD_TOTAL_LIST_ITEM_COUNT', data.count );
          }
      });
    },
  },
  modules: {},
});
