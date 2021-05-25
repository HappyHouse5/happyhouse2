<template>
  <nav class=" align-middle" aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li v-if="prev" class="page-item">
        <a class="page-link" style="cursor: pointer" aria-label="Previous" @click="paginationChanged(startPageIndex - 1)">
          <span aria-hidden="true"><i class="bi bi-chevron-left"></i></span>
        </a>
      </li>
      <li v-for="index in ( endPageIndex-startPageIndex + 1 )" :key="index"
          v-bind:class="{active: (startPageIndex + index - 1 == currentPageIndex)}" class="page-item">      <!-- 클릭 시 페이지버튼 파란색으로 변경되는 부분 -->
        <a @click="paginationChanged(startPageIndex + index - 1)" 
           class="page-link" style="cursor: pointer">{{ startPageIndex + index - 1 }}</a> <!-- href 는 그대로, 커서 모양 유지-->
      </li>
      <li v-if="next" class="page-item">
        <a class="page-link" style="cursor: pointer" aria-label="Next" @click="paginationChanged(endPageIndex + 1)">
          <span aria-hidden="true"><i class="bi bi-chevron-right"></i></span>
        </a>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  name: 'Pagination',
  props: ['listRowCount', 'pageLinkCount', 'currentPageIndex', 'totalListItemCount'],
  computed: {
    pageCount: function(){
      return Math.ceil(this.totalListItemCount/this.listRowCount);
    },
    startPageIndex: function(){
      if( (this.currentPageIndex % this.pageLinkCount) == 0 ){ //10, 20...맨마지막
        return ((this.currentPageIndex / this.pageLinkCount)-1)*this.pageLinkCount + 1
      }else{
        return  Math.floor(this.currentPageIndex / this.pageLinkCount)*this.pageLinkCount + 1
      }
    },
    endPageIndex: function(){
      // 아래 코드는 Error in render: "RangeError: Maximum call stack size exceeded" 발생, this.endPageIndex 계산 할 때, 자기 자신 값을 단순 비교만하더라도 에러 발생 
      // if( this.endPageIndex < this.pageCount ) return this.pageCount;

      let ret = 0;
      if( (this.currentPageIndex % this.pageLinkCount) == 0 ){ //10, 20...맨마지막
        ret = ((this.currentPageIndex / this.pageLinkCount)-1) * this.pageLinkCount + this.pageLinkCount;
      }else{
        ret = Math.floor(this.currentPageIndex / this.pageLinkCount) * this.pageLinkCount + this.pageLinkCount;
      }
      // 위 오류나는 코드를 아래와 같이 비교해서 처리
      return ( ret > this.pageCount ) ? this.pageCount : ret;
    },
    prev: function(){
      if( this.currentPageIndex <= this.pageLinkCount ){
        return false;
      }else{
        return true;
      }
    },
    next: function(){
      if( this.endPageIndex >=  this.pageCount){
        return false;
      }else{
        return true;
      }
    }
  },
  methods:{
    // 부모에게 event 전달
    paginationChanged(pageIndex){
      console.log("paginationVue : paginationChanged : pageIndex : " + pageIndex );
      this.$emit('call-parent', pageIndex);
    }
  },
//   created(){
//     this.pageCount = Math.ceil(this.totalListItemCount/this.listRowCount);

// console.log("paginationVue : created : pageCount 0 : " + this.pageCount );

//     if( (this.currentPageIndex % this.pageLinkCount) == 0 ){ //10, 20...맨마지막
//        this.startPageIndex = ((this.currentPageIndex / this.pageLinkCount)-1)this.pageLinkCount + 1
//     }else{
//        this.startPageIndex = Math.floor(this.currentPageIndex / this.pageLinkCount)this.pageLinkCount + 1
//     }

//     if( (this.currentPageIndex % this.pageLinkCount) == 0 ){ //10, 20...맨마지막

//        this.endPageIndex = ((this.currentPageIndex / this.pageLinkCount)-1)this.pageLinkCount + this.pageLinkCount;

//        console.log("paginationVue : created : endPageIndex 1 : " + this.endPageIndex );

//     }else{
//        this.endPageIndex = Math.floor(this.currentPageIndex / this.pageLinkCount)this.pageLinkCount + this.pageLinkCount;

//        console.log("paginationVue : created : endPageIndex 2 : " + this.endPageIndex );
//     }

//     if( this.currentPageIndex <= this.pageLinkCount ){
//        this.prev = false;
//     }else{
//        this.prev = true;
//     }

//     if( this.endPageIndex >  this.pageCount){
//        this.endPageIndex =  this.pageCount
//        this.next = false;
//     }else{
//        this.next = true;
//     }

//     console.log("paginationVue : paginationChanged : endPageIndex 3 : " + this.endPageIndex );
//   },
//   updated(){
//         this.pageCount = Math.ceil(this.totalListItemCount/this.listRowCount);

// console.log("paginationVue : updated : pageCount 0 : " + this.pageCount );

//     if( (this.currentPageIndex % this.pageLinkCount) == 0 ){ //10, 20...맨마지막
//        this.startPageIndex = ((this.currentPageIndex / this.pageLinkCount)-1)this.pageLinkCount + 1
//     }else{
//        this.startPageIndex = Math.floor(this.currentPageIndex / this.pageLinkCount)this.pageLinkCount + 1
//     }

//     if( (this.currentPageIndex % this.pageLinkCount) == 0 ){ //10, 20...맨마지막

//        this.endPageIndex = ((this.currentPageIndex / this.pageLinkCount)-1)this.pageLinkCount + this.pageLinkCount;

//        console.log("paginationVue : updated : endPageIndex 1 : " + this.endPageIndex );

//     }else{
//        this.endPageIndex = Math.floor(this.currentPageIndex / this.pageLinkCount)this.pageLinkCount + this.pageLinkCount;

//        console.log("paginationVue : updated : endPageIndex 2 : " + this.endPageIndex );
//     }

//     if( this.currentPageIndex <= this.pageLinkCount ){
//        this.prev = false;
//     }else{
//        this.prev = true;
//     }

//     if( this.endPageIndex >  this.pageCount){
//        this.endPageIndex =  this.pageCount
//        this.next = false;
//     }else{
//        this.next = true;
//     }

//     console.log("paginationVue : paginationChanged : endPageIndex 3 : " + this.endPageIndex );
//   }
}
</script>