<<<<<<< HEAD
<template>
  <div>
      <house-search v-on:search="searchHouse"></house-search>
     <div class="container mt-3 mb-3">
      <div class="row mt-3">
        <div class="col-md-12 col-sm-12 col-xs-12 mt-4">
          <div class="section-headline text-center">
            <h2>House's</h2>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-sm-9">
          <div class="table-responsive custom-table-responsive">
            <table class="table custom-table">
              <thead>
                <tr style="text-align: center">
                  <th scope="col">
                    <label class="control control--checkbox">
                      <input type="checkbox" class="js-check-all" v-model="allChecked" @click="checkAll()" />
                      <div class="control__indicator"></div>
                    </label>
                  </th>
                  <th scope="col">아파트명</th>
                  <th scope="col">거래금액</th>
                  <th scope="col">건축년도</th>
                  <th scope="col">전용면적</th>
                  <th scope="col">거래일</th>
                  <th scope="col">법정동</th>
                  <th scope="col">코드</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="(item, idx) in houseList" :key="idx">
                    <th scope="row">
                      <label class="control control--checkbox">
                        <input type="checkbox" v-model="checkList" :value="item" @change="changeCheck()" @click="checkOneItem(item)"/>
                        <div class="control__indicator"></div>
                      </label>
                    </th>
                    <td @click="houseDetail(item)">{{item.aptName}}</td>
                    <td @click="houseDetail(item)">{{item.dealAmount}}</td>
                    <td @click="houseDetail(item)">{{item.buildYear}}</td>
                    <td @click="houseDetail(item)">{{item.area}}</td>
                    <td @click="houseDetail(item)">{{item.dealDate}}</td>
                    <td @click="houseDetail(item)">{{item.dong}}</td>
                    <td @click="houseDetail(item)">{{item.code}}</td>
                  </tr>
                  <tr class="spacer">
                    <td colspan="100"></td>
                  </tr> 
              </tbody>
            </table>
          </div>
          <pagination 
            v-bind:listRowCount="listRowCount"
            v-bind:pageLinkCount="pageLinkCount"
            v-bind:currentPageIndex="currentPageIndex"
            v-bind:totalListItemCount="count"
            v-on:call-parent="movePage"
        ></pagination>
        </div>
        <div class="col-sm-3 col-md-3">
          <div class="card h-100">
            <div class="card-body">
              <span class="card-title fs-5">
                {{houseInfo.aptName}}
              </span>
              <!-- <p id="homeType">아파트/주택</p> -->
              <p id="price">가격  {{houseInfo.dealAmount}}</p>
              <p class="card-text" id="dong">법정동  {{houseInfo.dong}}</p>
              <p class="card-text" id="jibun">지번  {{houseInfo.jibun}}</p>
              <p class="card-text" id="buildDate">건축년도  {{houseInfo.buildYear}}</p>
              <p class="card-text" id="area">전용면적  {{houseInfo.area}}</p>
              <p class="card-text" id="dealDate">거래일  {{houseInfo.dealDate}}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row mt-4">
          <div class="col-md-12 col-sm-12 col-xs-12 mt-4">
            <div class="section-headline text-center">
              <h2>Map & Chart</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6" id="map" style="height: 400px">
          </div>
          <div class="col-sm-6">
            <chart-vue :chartData="{label, price}"></chart-vue>             <!-- 차트 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cb6a0403bc69b1c833879cae3c194c2b"
></script>

<script>
import HouseSearch from '@/components/HouseSearch.vue';
import Pagination from '@/components/Pagination.vue';
// import 'Chart.js';
// import { Bar } from "vue-chartjs";

import ChartVue from '@/components/Chart.vue';
import axios from '@/common/axios.js';

export default {
    name:"house",
    components:{
        HouseSearch,
        ChartVue,
        Pagination,
    },
    watch:{
    },
    data:function(){
        return{
            // searchType: this.$route.params.searchType == undefined ? "dong" : this.$route.params.searchType, // this.$route.params.searchType,
            // searchWord: this.$route.params.searchWord == undefined ? "" : this.$route.params.searchWord,
            searchType: "dong",              // 검색 옵션 
            searchWord: "",
            offset: 0,
            limit: 8,

            houseList: [],                  // 검색된 모든 매물 정보
            houseInfo:{                     // 클릭된 매물 1채 정보
              dealAmount: '',
              dong: '',
              jibun: '',
              buildYear: null,
              area: null,
              dealDate: '',
              code: '',
            },

            listRowCount: 8,                // 1 페이지 row 수
            count: 0,                       // 총 row 수
            pageLinkCount: 10,              // 페이지 바 link 개수
            currentPageIndex: 1,            // 현재 페이지 번호


            checkList: [],                  // 체크 박스 리스트
            label: [],                      // 차트 
            price: [],
            allChecked: false,              // one click all Check

            chartData1:[5, 40,15, 15, 8],
            chartData2:{
                'a':5,
                'b':1,
                'c':15,
                'd':9,
                'e':14,
            },
            location: [                       // 카카오 맵 위치 정보(배열로 만들어서 map 다중 선택 기능 추가하기)
              {
                lat: null,
                lng: null,
                aptName: null,
                code: null,                 // 거래코드
              },
            ],
            marker: null,   // 마커
            map: null,      // 카카오 맵

      };
    },
    created(){
      this.searchType = this.$route.params.searchType == undefined ? "dong" : this.$route.params.searchType; // this.$route.params.searchType,
      this.searchWord = this.$route.params.searchWord == undefined ? "" : this.$route.params.searchWord;
    },
    mounted(){                                      // 페이지 mount 되는 시점
      console.log("마운트 될 때 searchType: " + this.searchType);
      console.log("마운트 될 때 searchWord: " + this.searchWord);

      this.searchHouse({searchType: this.searchType, searchWord: this.searchWord});   // house 검색 반환 + searchDetail() : 첫 집 정보를 기반으로 위치정보 받기 + init Map() + 이벤트 Handler 등록
   },
    methods:{
      initMap:function() {                                              // 클릭된 매물의 위치에 따라 지도 초기화하기
        var mapContainer = document.getElementById('map'),              // 맵 컨테이너
        mapOption = {
          center: new kakao.maps.LatLng(this.location[0].lat, this.location[0].lng),    // 지도의 중심좌표
          level: 3,                           // 지도의 확대 레벨
        };
        this.map = new kakao.maps.Map(mapContainer, mapOption);          // 맵 생성 (map을 출력할 container{html}, 맵의 좌표 & 크기)

        this.makeMarker();                                                // 마커 만들기

        // Kakao Map Event handler
        let $this = this;                 // kakao 함수 내에서 this 사용을 위해 변수 생성
        // 마커에 마우스오버 이벤트 등록
        kakao.maps.event.addListener(this.marker, 'mouseover', function() {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
            $this.markerMouseOn();
        });

        // 마커에 마우스아웃 이벤트 등록
        kakao.maps.event.addListener(this.marker, 'mouseout', function() {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
            $this.infowindow.close();                               // 마커 닫기
        });
      },
      makeMarker: function(){                                       // 마커 표시하기
        // 마커 표시하기 : 맵, 좌표, 마커 이미지
       this.marker = new kakao.maps.Marker({
          map: this.map,
          position: new kakao.maps.LatLng(this.location[0].lat, this.location[0].lng),
        })
        this.marker.setMap(this.map);
      },
      markerMouseOn:function(){                                       // 마커에 마우스가 올라갔을 때 info window 띄우기
        var iwContent = "<div style=\"width:200px; height:100px; text-align: center; padding: 5px;\">" + this.houseInfo.aptName + "</div>"; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        var iwPosition = new kakao.maps.LatLng(this.location[0].lat, this.location[0].lng); //인포윈도우 표시 위치입니다
        // var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        this.infowindow = new kakao.maps.InfoWindow({
          map: this.map,
          position: iwPosition,
          content: iwContent,
          // removable: iwRemoveable,
        });
        this.infowindow.open(this.map, this.marker);          // 마커 열기
      },
      searchHouse: async function(data){                                          // 매물 정보 검색해서 DB에서 매물 정보 List 받아오기(Type, Word, Offset, limit)
        console.log("DB로 검색할 searchType : " + this.searchType);
        console.log("DB로 검색할 searchWord : " + this.searchWord);
        this.searchType = data.searchType;
        this.searchWord = data.searchWord;
        await axios.get('/houses/houseInfo', {
          params:{
            searchType: data.searchType,
            searchWord: data.searchWord,
            offset: this.offset,
            limit: this.limit,
          }
        })
        .then(({data}) => {
          this.houseList = data.list;
          if(this.houseList == "") {
            alert("검색 결과가 없습니다.\n다시 다시 검색해주세요.");
            location.reload();
          }
          else{
            let houseList = this.houseList;
            houseList.forEach(function(item, idx) {
              houseList[idx].dealDate = item.dealYear + "/" + item.dealMonth + "/" + item.dealDay;
            });

            this.count = data.count;                                  // 검색된 매물의 총 row 수
            console.log(this.houseList);
          }
        })
        .catch((err) => {
          console.log(err);
        });

        this.houseDetail(this.houseList[0]);                                           // 매물 검색 후 바로 테이블 첫번째 매물의 위치정보를 기반으로 map 연동 + this.houseInfo 업데이트
      },
      houseDetail: async function(houseInfo) {                                         // 테이블 row 클릭 시 매물 위치정보 가져오기 + Kakao Map 연동
        console.log("aptName : " + houseInfo.aptName + "code : " + houseInfo.code);
        this.houseInfo = houseInfo;                                                    // 매물 상세 카드에 보여지는 houseInfo data 업데이트
        await axios.get('/houses/location', {
          params:{
            aptName: this.houseInfo.aptName,
            code: this.houseInfo.code,
          }
        })
        .then(({data}) => {
          this.location[0] = data;
          console.log("location : " + this.location[0]);
        })
        .catch((err) => {
          console.log(err);
        });

        // script 헤더에 Kakao Map API src 담아주기 : 페이지가 처음 로딩될 때 api key를 통해 kakao map 연동 -> 이후 바로 this.initMap() 호출
        if (window.kakao && window.kakao.maps) {
          this.initMap();
        } else {                                                    // 페이지 처음 로딩 시 최초 1회 수행
          const script = document.createElement('script');
          /* global kakao */
          script.onload = () => kakao.maps.load(this.initMap);
          script.src =
            'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cb6a0403bc69b1c833879cae3c194c2b';    // Kakao Map API JS Key
          document.head.appendChild(script);
        };
      },
      // pagination : 페이지 번호 받아서 페이징 처리
      movePage(pageIndex){
        this.SET_BOARD_MOVE_PAGE(pageIndex);

        console.log("페이지 이동 시 재 검색 타입, 명: " + this.searchType + this.searchWord);
        this.searchHouse({searchType: this.searchType, searchWord: this.searchWord});
      },
      SET_BOARD_MOVE_PAGE(pageIndex){                               // 페이지 이동에 따른 offset, 현재 페이지 번호 변화
        this.offset = (pageIndex - 1) * this.listRowCount;
        this.currentPageIndex = pageIndex;
      },

      checkAll: function() {                                        // 체크박스 모두 체크하기 or 체크해제
        this.allChecked = !this.allChecked;
        this.checkList = [];
       
        if(this.allChecked) {                                        // 모두 체크되었을 때 checkList에 houseList 전체 담기 : v-model로 연결
          this.checkList = this.houseList;
          console.log(this.checkList);
        }
      },
      changeCheck: function() {                                      // 체크박스 변동 시
        if(this.houseList.length == this.checkList.length){         // 모두 체크되었다면 
          this.allChecked = true;
        }else{
          this.allChecked = false;
        }
        // console.log(this.allChecked);
      },
      checkOneItem: function(item) {                                  // 1개 체크박스 개별 선택 시
        if(!this.checkList.includes(item)) {
          this.houseDetail(item);
        }
      },
      
    },
    watch: {
      checkList: function(event) {                                      // checkList 변수 watch -> Chart 연결
        let labelList = [];
        let priceList = [];
        this.checkList.forEach(function(list){
          labelList.push(list.aptName);
          let price = list.dealAmount.trim().replace(",", "");
          // console.log(price);
          priceList.push(parseInt(price));
        });
        this.label = labelList;
        this.price = priceList;
        // console.log(this.checkList);
        // console.log(this.label);
        // console.log(this.price);
      }
  },

}

</script>

<style>

=======
<template>
  <div>
      <house-search v-on:search="searchHouse"></house-search>
     <div class="container mt-3 mb-3">
      <div class="row mt-3">
        <div class="col-md-12 col-sm-12 col-xs-12 mt-4">
          <div class="section-headline text-center">
            <h2>House's</h2>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-sm-9">
          <div class="table-responsive custom-table-responsive">
            <table class="table custom-table">
              <thead>
                <tr style="text-align: center">
                  <th scope="col">
                    <label class="control control--checkbox">
                      <input type="checkbox" class="js-check-all" v-model="allChecked" @click="checkAll()" />
                      <div class="control__indicator"></div>
                    </label>
                  </th>
                  <th scope="col">아파트명</th>
                  <th scope="col">거래금액</th>
                  <th scope="col">건축년도</th>
                  <th scope="col">전용면적</th>
                  <th scope="col">거래일</th>
                  <th scope="col">법정동</th>
                  <th scope="col">코드</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="(item, idx) in houseList" :key="idx">
                    <th scope="row">
                      <label class="control control--checkbox">
                        <input type="checkbox" v-model="checkList" :value="item" @change="changeCheck()" @click="checkOneItem(item)"/>
                        <div class="control__indicator"></div>
                      </label>
                    </th>
                    <td @click="houseDetail(item)">{{item.aptName}}</td>
                    <td @click="houseDetail(item)">{{item.dealAmount}}</td>
                    <td @click="houseDetail(item)">{{item.buildYear}}</td>
                    <td @click="houseDetail(item)">{{item.area}}</td>
                    <td @click="houseDetail(item)">{{item.dealDate}}</td>
                    <td @click="houseDetail(item)">{{item.dong}}</td>
                    <td @click="houseDetail(item)">{{item.code}}</td>
                  </tr>
                  <tr class="spacer">
                    <td colspan="100"></td>
                  </tr> 
              </tbody>
            </table>
          </div>
          <pagination 
            v-bind:listRowCount="listRowCount"
            v-bind:pageLinkCount="pageLinkCount"
            v-bind:currentPageIndex="currentPageIndex"
            v-bind:totalListItemCount="count"
            v-on:call-parent="movePage"
        ></pagination>
        </div>
        <div class="col-sm-3 col-md-3">
          <div class="card h-100">
            <div class="card-body">
              <span class="card-title fs-5">
                {{houseInfo.aptName}}
              </span>
              <!-- <p id="homeType">아파트/주택</p> -->
              <p id="price">가격  {{houseInfo.dealAmount}}</p>
              <p class="card-text" id="dong">법정동  {{houseInfo.dong}}</p>
              <p class="card-text" id="jibun">지번  {{houseInfo.jibun}}</p>
              <p class="card-text" id="buildDate">건축년도  {{houseInfo.buildYear}}</p>
              <p class="card-text" id="area">전용면적  {{houseInfo.area}}</p>
              <p class="card-text" id="dealDate">거래일  {{houseInfo.dealDate}}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">★ ★ ★ ★ ☆</small>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row mt-4">
          <div class="col-md-12 col-sm-12 col-xs-12 mt-4">
            <div class="section-headline text-center">
              <h2>Map & Chart</h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6" id="map" style="height: 400px">
          </div>
          <div class="col-sm-6">
            <chart-vue :chartData="{label, price}"></chart-vue>             <!-- 차트 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cb6a0403bc69b1c833879cae3c194c2b"
></script>

<script>
import HouseSearch from '@/components/HouseSearch.vue';
import Pagination from '@/components/Pagination.vue';
// import 'Chart.js';
// import { Bar } from "vue-chartjs";

import ChartVue from '@/components/Chart.vue';
import axios from '@/common/axios.js';

export default {
    name:"house",
    components:{
        HouseSearch,
        ChartVue,
        Pagination,
    },
    watch:{
    },
    data:function(){
        return{
            // searchType: this.$route.params.searchType == undefined ? "dong" : this.$route.params.searchType, // this.$route.params.searchType,
            // searchWord: this.$route.params.searchWord == undefined ? "" : this.$route.params.searchWord,
            searchType: "dong",              // 검색 옵션 
            searchWord: "",
            offset: 0,
            limit: 8,

            houseList: [],                  // 검색된 모든 매물 정보
            houseInfo:{                     // 클릭된 매물 1채 정보
              dealAmount: '',
              dong: '',
              jibun: '',
              buildYear: null,
              area: null,
              dealDate: '',
              code: '',
            },

            listRowCount: 8,                // 1 페이지 row 수
            count: 0,                       // 총 row 수
            pageLinkCount: 10,              // 페이지 바 link 개수
            currentPageIndex: 1,            // 현재 페이지 번호


            checkList: [],                  // 체크 박스 리스트
            label: [],                      // 차트 
            price: [],
            allChecked: false,              // one click all Check

            chartData1:[5, 40,15, 15, 8],
            chartData2:{
                'a':5,
                'b':1,
                'c':15,
                'd':9,
                'e':14,
            },
            location: [                       // 카카오 맵 위치 정보(배열로 만들어서 map 다중 선택 기능 추가하기)
              {
                lat: null,
                lng: null,
                aptName: null,
                code: null,                 // 거래코드
              },
            ],
            marker: null,   // 마커
            map: null,      // 카카오 맵

      };
    },
    created(){
      this.searchType = this.$route.params.searchType == undefined ? "dong" : this.$route.params.searchType; // this.$route.params.searchType,
      this.searchWord = this.$route.params.searchWord == undefined ? "" : this.$route.params.searchWord;
    },
    mounted(){                                      // 페이지 mount 되는 시점
      console.log("마운트 될 때 searchType: " + this.searchType);
      console.log("마운트 될 때 searchWord: " + this.searchWord);

      this.searchHouse({searchType: this.searchType, searchWord: this.searchWord});   // house 검색 반환 + searchDetail() : 첫 집 정보를 기반으로 위치정보 받기 + init Map() + 이벤트 Handler 등록
   },
    methods:{
      initMap:function() {                                              // 클릭된 매물의 위치에 따라 지도 초기화하기
        var mapContainer = document.getElementById('map'),              // 맵 컨테이너
        mapOption = {
          center: new kakao.maps.LatLng(this.location[0].lat, this.location[0].lng),    // 지도의 중심좌표
          level: 3,                           // 지도의 확대 레벨
        };
        this.map = new kakao.maps.Map(mapContainer, mapOption);          // 맵 생성 (map을 출력할 container{html}, 맵의 좌표 & 크기)

        this.makeMarker();                                                // 마커 만들기

        // Kakao Map Event handler
        let $this = this;                 // kakao 함수 내에서 this 사용을 위해 변수 생성
        // 마커에 마우스오버 이벤트 등록
        kakao.maps.event.addListener(this.marker, 'mouseover', function() {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
            $this.markerMouseOn();
        });

        // 마커에 마우스아웃 이벤트 등록
        kakao.maps.event.addListener(this.marker, 'mouseout', function() {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
            $this.infowindow.close();                               // 마커 닫기
        });
      },
      makeMarker: function(){                                       // 마커 표시하기
        // 마커 표시하기 : 맵, 좌표, 마커 이미지
       this.marker = new kakao.maps.Marker({
          map: this.map,
          position: new kakao.maps.LatLng(this.location[0].lat, this.location[0].lng),
        })
        this.marker.setMap(this.map);
      },
      markerMouseOn:function(){                                       // 마커에 마우스가 올라갔을 때 info window 띄우기
        var iwContent = "<div style=\"width:200px; height:100px; text-align: center; padding: 5px;\">" + this.houseInfo.aptName + "</div>"; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        var iwPosition = new kakao.maps.LatLng(this.location[0].lat, this.location[0].lng); //인포윈도우 표시 위치입니다
        // var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        this.infowindow = new kakao.maps.InfoWindow({
          map: this.map,
          position: iwPosition,
          content: iwContent,
          // removable: iwRemoveable,
        });
        this.infowindow.open(this.map, this.marker);          // 마커 열기
      },
      searchHouse: async function(data){                                          // 매물 정보 검색해서 DB에서 매물 정보 List 받아오기(Type, Word, Offset, limit)
        console.log("DB로 검색할 searchType : " + this.searchType);
        console.log("DB로 검색할 searchWord : " + this.searchWord);
        this.searchType = data.searchType;
        this.searchWord = data.searchWord;
        await axios.get('/houses/houseInfo', {
          params:{
            searchType: data.searchType,
            searchWord: data.searchWord,
            offset: this.offset,
            limit: this.limit,
          }
        })
        .then(({data}) => {
          this.houseList = data.list;
          if(this.houseList == "") {
            alert("검색 결과가 없습니다.\n다시 다시 검색해주세요.");
            location.reload();
          }
          else{
            let houseList = this.houseList;
            houseList.forEach(function(item, idx) {
              houseList[idx].dealDate = item.dealYear + "/" + item.dealMonth + "/" + item.dealDay;
            });

            this.count = data.count;                                  // 검색된 매물의 총 row 수
            console.log(this.houseList);
          }
        })
        .catch((err) => {
          console.log(err);
        });

        this.houseDetail(this.houseList[0]);                                           // 매물 검색 후 바로 테이블 첫번째 매물의 위치정보를 기반으로 map 연동 + this.houseInfo 업데이트
      },
      houseDetail: async function(houseInfo) {                                         // 테이블 row 클릭 시 매물 위치정보 가져오기 + Kakao Map 연동
        console.log("aptName : " + houseInfo.aptName + "code : " + houseInfo.code);
        this.houseInfo = houseInfo;                                                    // 매물 상세 카드에 보여지는 houseInfo data 업데이트
        await axios.get('/houses/location', {
          params:{
            aptName: this.houseInfo.aptName,
            code: this.houseInfo.code,
          }
        })
        .then(({data}) => {
          this.location[0] = data;
          console.log("location : " + this.location[0]);
        })
        .catch((err) => {
          console.log(err);
        });

        // script 헤더에 Kakao Map API src 담아주기 : 페이지가 처음 로딩될 때 api key를 통해 kakao map 연동 -> 이후 바로 this.initMap() 호출
        if (window.kakao && window.kakao.maps) {
          this.initMap();
        } else {                                                    // 페이지 처음 로딩 시 최초 1회 수행
          const script = document.createElement('script');
          /* global kakao */
          script.onload = () => kakao.maps.load(this.initMap);
          script.src =
            'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cb6a0403bc69b1c833879cae3c194c2b';    // Kakao Map API JS Key
          document.head.appendChild(script);
        };
      },
      // pagination : 페이지 번호 받아서 페이징 처리
      movePage(pageIndex){
        this.SET_BOARD_MOVE_PAGE(pageIndex);

        console.log("페이지 이동 시 재 검색 타입, 명: " + this.searchType + this.searchWord);
        this.searchHouse({searchType: this.searchType, searchWord: this.searchWord});
      },
      SET_BOARD_MOVE_PAGE(pageIndex){                               // 페이지 이동에 따른 offset, 현재 페이지 번호 변화
        this.offset = (pageIndex - 1) * this.listRowCount;
        this.currentPageIndex = pageIndex;
      },

      checkAll: function() {                                        // 체크박스 모두 체크하기 or 체크해제
        this.allChecked = !this.allChecked;
        this.checkList = [];
       
        if(this.allChecked) {                                        // 모두 체크되었을 때 checkList에 houseList 전체 담기 : v-model로 연결
          this.checkList = this.houseList;
          console.log(this.checkList);
        }
      },
      changeCheck: function() {                                      // 체크박스 변동 시
        if(this.houseList.length == this.checkList.length){         // 모두 체크되었다면 
          this.allChecked = true;
        }else{
          this.allChecked = false;
        }
        // console.log(this.allChecked);
      },
      checkOneItem: function(item) {                                  // 1개 체크박스 개별 선택 시
        if(!this.checkList.includes(item)) {
          this.houseDetail(item);
        }
      },
      
    },
    watch: {
      checkList: function(event) {                                      // checkList 변수 watch -> Chart 연결
        let labelList = [];
        let priceList = [];
        this.checkList.forEach(function(list){
          labelList.push(list.aptName);
          let price = list.dealAmount.trim().replace(",", "");
          // console.log(price);
          priceList.push(parseInt(price));
        });
        this.label = labelList;
        this.price = priceList;
        // console.log(this.checkList);
        // console.log(this.label);
        // console.log(this.price);
      }
  },

}

</script>

<style>

>>>>>>> cd336ebdf529df676b3dd031c055023de02186a3
</style>