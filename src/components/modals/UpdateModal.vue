<template>
<div class="modal" tabindex="-1" id="updateModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">글 수정</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <div class="mb-3">
          <input v-model="$store.state.board.title" type="text" class="form-control" placeholder="제목">
        </div>
        <div class="mb-3">
          <div id=divEditorUpdate></div>
        </div>
        <!-- 기존 파일 내용 보여줌  -->
        <!-- 새로운 첨부파일은 data-fileList 로 -->
        <div v-if="$store.state.board.fileList.length > 0" class="mb-3">
          첨부파일 : <span><div v-for="(file, index) in $store.state.board.fileList" class="fileName" :key="index">{{file.fileName}}</div></span>
        </div>
        <div class="form-check mb-3">
          <input v-model="attachFile" class="form-check-input" type="checkbox" value="" id="chkFileUploadUpdate">
          <label class="form-check-label" for="chkFileUploadUpdate">파일 추가</label>
        </div>
        <div class="mb-3" v-show="attachFile" id="imgFileUploadUpdateWrapper">
          <input @change="changeFile" type="file" id="inputFileUploadUpdate" multiple>
          <div id="imgFileUploadUpdateThumbnail" class="thumbnail-wrapper">
            <!-- vue way img 를 만들어서 append 하지 않고, v-for 로 처리 -->
            <img v-for="(file, index) in fileList" v-bind:src="file" v-bind:key="index">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button @click="boardUpdate" class="btn btn-sm btn-primary btn-outline" data-dismiss="modal" type="button" id="btn-board-update">수정하기</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import VueAlertify from 'vue-alertify'; 

Vue.use(CKEditor).use(VueAlertify);

import axios from "@/common/axios.js";

export default {
  name: 'UpdateModal',
  props: ['board'],
  // data 는 CKEditor, attachFile UI 관련 2개만
  data() {
        return {
          // boardId: 0,
          // title: '',
          CKEditor: '',
          attachFile: false,
          fileList: [], // store 의 fileList 와 구분됨. 새로 첨부되는 파일을 위한.
        }
    },
    methods: {
        changeFile(fileEvent) {
          if( fileEvent.target.files && fileEvent.target.files.length > 0 ){

            for( var i=0; i<fileEvent.target.files.length; i++ ){
              const file = fileEvent.target.files[i];
              this.fileList.push(URL.createObjectURL(file));
            }
          }
        },
        boardUpdate(){
          // post form data
          var formData = new FormData();
          formData.append("boardId", this.$store.state.board.boardId); // update 에 추가
          formData.append("title", this.$store.state.board.title);
          formData.append("content", this.CKEditor.getData()); // store X !!!!

          // file upload
          var attachFiles = document.querySelector("#inputFileUploadUpdate");

          var cnt = attachFiles.files.length;
          for (var i = 0; i < cnt; i++) {
            formData.append("file", attachFiles.files[i]);
          }
          // not put, REST but FileUpload
          axios.post(
            '/boards/' + this.$store.state.board.boardId, // store boardId 
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(({ data }) => {
              if( data.result == 'login' ){
                sessionStorage.removeItem("member");
                this.$store.commit("logout");
                alert("로그인이 필요합니다.");
                location.href = "/";
              }else{
                this.$alertify.success('글이 수정되었습니다.');
                this.closeModal();
              }
            })
            .catch((error) => {
              console.log(error);
            });
        },
        closeModal(){
          this.$emit('call-parent-update'); // no parameter
        }
    },
    // modal.show() 이전에 이미 mounted() 호출됨
    mounted() {
      ClassicEditor
      .create(document.querySelector('#divEditorUpdate'))
      .then(editor => {
          this.CKEditor = editor;
      })
      .catch(err => {
          console.error(err.stack);
      });

      // bootstrap modal show event hook
      // UpdateModal 이 보일 때 초기화
      let $this = this;
      this.$el.addEventListener('show.bs.modal', function () {

        $this.CKEditor.setData( $this.$store.state.board.content );
        // 첨부 파일 관련 초기화
        // 수정 또는 수정 전 첨부 파일을 선택하면 그대로 남아 있다.
        this.attachFile = false;
        this.fileList = [];
      })

    },
}
</script>


<style>
/* CKEditor 는 vue 와 별개로 rendering 되어서 scope 를 넣으면 반영되지 않는다. */
.ck-editor__editable {
    min-height: 300px !important;
}

.thumbnail-wrapper{
    margin-top: 5px;
}

.thumbnail-wrapper img {
    width: 100px !important;
    margin-right: 5px;
    max-width: 100%;
}
</style>

