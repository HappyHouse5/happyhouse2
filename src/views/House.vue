
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

        <div class="row col-3">
           <ul id="category">
              <li id="CE7" data-order="0" v-on:click="searchPlaces('CE7')"> 
                  <!-- <span class="category_bg cafe"></span> -->
                  카페
              </li>       
              <li id="CS2" data-order="1" v-on:click="searchPlaces('CS2')"> 
                  <!-- <span class="category_bg store"></span> -->
                  편의점
              </li>
              <li id="SC4" data-order="4" v-on:click="searchPlaces('SC4')"> 
                  <!-- <span class="category_bg "></span> -->
                  학교
              </li>  
              <li id="SW8" data-order="5" v-on:click="searchPlaces('SW8')"> 
                  <!-- <span class="category_bg bank"></span> -->
                  역사
              </li>      
           </ul>
        </div>
        <div class="row mt-3">
          <div class="col-sm-6" id="map" style="height: 400px; overflow:hidden;">
            
          </div>
          <div class="col-sm-6 mb-3">
            <chart-vue :chartData="{label, price}"></chart-vue>             <!-- 차트 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script
  type="text/javascript"
  src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cb6a0403bc69b1c833879cae3c194c2b&libraries=services"
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
        HouseSearch,                  // 검색창
        ChartVue,                     // 차트
        Pagination,                   // 페이징
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
            markers: [],
            map: null,      // 카카오 맵

            placeOverlay: null,       // 상세정보 커스텀 오버레이
            contentNode: null,
            placeSearch: null,
            currCategory: false, 
            order: null,

            places: [],


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

        let place = [{
          y: this.location[0].lat,
          x: this.location[0].lng,
        }]
        this.makeMarker(place);                                                // 마커 만들기
        console.log(this.markers.length);
        if(this.markers.length == 0) return;                  // 주변 상권, 학교 등 정보 검색 결과가 없다면 placeOverlay 만들지 않고 바로 return
        //--------------------------------------------------------------------
        // 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀오버레이입니다
        var placeOverlay = new kakao.maps.CustomOverlay({zIndex:1}), 
            contentNode = document.createElement('div'), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다 
            markers = [], // 마커를 담을 배열입니다
            currCategory = ''; // 현재 선택된 카테고리를 가지고 있을 변수입니다

        // 장소 검색 객체(검색은 this.placeSearch를 통해서 수행)를 생성합니다
        this.placeSearch = new kakao.maps.services.Places(this.map); 

        this.contentNode = contentNode;
        this.contentNode.className = 'placeinfo_wrap';

        kakao.maps.event.addListener(this.map, 'touchstart', this.searchPlaces(''));

        this.addEventHandle(this.contentNode, 'mousedown', kakao.maps.event.preventMap);
        this.addEventHandle(this.contentNode, 'touchstart', kakao.maps.event.preventMap);

        placeOverlay.setContent(this.contentNode); 
        this.placeOverlay = placeOverlay;
      },
      makeMarker: function(places){        // 마커 표시하기 : 맵, 좌표, 마커 이미지
        this.places = places;                               // 마커에 mouseover 이벤트 시 places에 대한 정보를 출력하기 위해서 this.places data에 복사해둔다.

        this.markers = [];
        console.log("검색된 장소 개수 : " + places.length);
        // console.log(places);
        for(let i=0; i<places.length; i++){
          this.markers.push(new kakao.maps.Marker({
            map: this.map,
            position: new kakao.maps.LatLng(places[i].y, places[i].x),
          }));

          this.markers[i].setMap(this.map);
          console.log("house click : " + this.currCategory)
          // Kakao Map Event handler
          let $this = this;
          if(this.currCategory != false){
            kakao.maps.event.addListener(this.markers[i], 'mouseover', function() {
              $this.displayPlaceInfo(places[i]);
            });
            kakao.maps.event.addListener(this.markers[i], 'mouseout', function() {
              $this.placeOverlay.setMap(null);  
            });
            kakao.maps.event.addListener(this.markers[i], 'click', function() {       // 마커 클릭 시
              window.open(places[i].place_url, '_blank');
            });
          }
          else{
            kakao.maps.event.addListener(this.markers[i], 'mouseover', function() {
              $this.markerMouseOn(places[i]);
            });
            kakao.maps.event.addListener(this.markers[i], 'mouseout', function() {
              $this.infowindow.close();
            });
          }
        }
        
      },
      markerMouseOn:function(place){    // 아파트에 대한 정보마커에 마우스가 올라갔을 때 info window 띄우기
       
        var iwContent = "<div style=\"width:120px; height:40px; text-align: center; padding: 5px;\">" + this.houseInfo.aptName + "</div>"; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        var iwPosition = new kakao.maps.LatLng(place.y, place.x); //인포윈도우 표시 위치입니다
        // var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        this.infowindow = new kakao.maps.InfoWindow({
          map: this.map,
          position: iwPosition,
          content: iwContent,
          // removable: iwRemoveable,
        });
        this.infowindow.open(this.map, this.markers[0]);          // 마커 열기
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
            if(this.currentPageIndex == 1) this.$alertify.success(this.count + "개의 매물이 검색되었습니다.");
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
        this.houseInfo = houseInfo;            // 매물 상세 카드에 보여지는 houseInfo data 업데이트
        this.currCategory = false;
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
            '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cb6a0403bc69b1c833879cae3c194c2b&libraries=services';    // Kakao Map API JS Key + library
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
      },
      checkOneItem: function(item) {                                  // 1개 체크박스 개별 선택 시
        if(!this.checkList.includes(item)) {
          this.houseDetail(item);
        }
      },
      searchPlaces:function(code){
        this.currCategory = code;
        if(code == '') return;
        // if(this.currCategory == '') this.currCategory = 'CE7';
        this.placeOverlay.setMap(null);
        
        this.removeMarker();
        this.placeSearch.categorySearch(this.currCategory, this.placeSearchCB, {useMapBounds: true});   // useMapBounds : 현재 맵이 보여지는 공간 내에 검색
      },
      removeMarker: function() {
          for ( var i = 0; i < this.markers.length; i++ ) {
              this.markers[i].setMap(null);
          }   
          this.markers = [];
      },
      placeSearchCB: function(data, status, pagination){      // 장소 카테고리 검색 후 호출되는 콜백함수
        if (status === kakao.maps.services.Status.OK) {       // 정상
              this.displayPlaces(data);
          } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
              // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요

          } else if (status === kakao.maps.services.Status.ERROR) {
              // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
          }
      },
      displayPlaces: function(places) {             // 장소들에 대한 정보
          // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
          // this.order는 스프라이트 이미지에서의 위치를 계산하는데 사용
          this.order = document.getElementById(this.currCategory).getAttribute('data-order');

          // for ( let i=0; i<places.length; i++ ) {
                  // 마커를 생성하고 지도에 표시
                  // var marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x), order);
                this.makeMarker(places);
                // this.markers.push(marker.setMap());

                  // 마커와 검색결과 항목을 클릭 했을 때
                  // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
                  // (function(marker, place) {
                  //     kakao.maps.event.addListener(marker, 'click', function() {
                  //         displayPlaceInfo(place);
                  //     });
                  // })(marker, places[i]);


          // }
      },
      displayPlaceInfo: function(place){
        var content ="<div class='placeinfo'>" + "<class='title' href='" + place.place_url + "' target='_blank' title='" + place.place_name + "'>" + place.place_name + "</a>";

        if (place.road_address_name) {
            content += " <span title='" + place.road_address_name + "'>" + place.road_address_name + "</span>" + " <span class='jibun' title='" + place.address_name + "'>(지번 : " + place.address_name + ")</span> ";
        }else{
            content += " <span title='" + place.address_name + '">' + place.address_name + '</span>';
            // content += " <span></span>" + "";
        }                
      
        content += ' <span class="tel">' + place.phone + '</span>' + 
                    '</div>' + 
                    '<div class="after"></div>';

        console.log("display info window");
        this.contentNode.innerHTML = content;
        this.placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
        this.placeOverlay.setMap(this.map);  
      },
      addEventHandle: function(target, type, callback) {      // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
        console.log("addEventHandle type: " + type)
          if (target.addEventListener) {
              target.addEventListener(type, callback);
          } else {
              target.attachEvent('on' + type, callback);
          }
      },
      // 각 카테고리에 클릭 이벤트를 등록합니다
      // addCategoryClickEvent: function() {
      //     var category = document.getElementById('category'),
      //         children = category.children;

      //     for (var i=0; i<children.length; i++) {
      //         children[i].onclick = onClickCategory;
      //     }
      // }
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

<style src="@/assets/css/map.css">

</style>
