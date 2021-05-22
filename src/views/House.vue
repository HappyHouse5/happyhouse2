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
                <tr>
                  <th scope="col">
                    <label class="control control--checkbox">
                      <input type="checkbox" class="js-check-all" />
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
                  <tr v-for="(item, idx) in houseList" :key=idx @click="houseDetail(item)">
                    <th scope="row">
                      <label class="control control--checkbox">
                        <input type="checkbox" v-model="checkList" :value="item"/>
                        <div class="control__indicator"></div>
                      </label>
                    </th>
                    <td>{{item.aptName}}</td>
                    <td>{{item.dealAmount}}</td>
                    <td>{{item.buildYear}}</td>
                    <td>{{item.area}}</td>
                    <td>{{item.dealDate}}</td>
                    <td>{{item.dong}}</td>
                    <td>{{item.code}}</td>
                  </tr>
                  <tr class="spacer">
                    <td colspan="100"></td>
                  </tr> 
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-sm-3 col-md-3 mb-4 mt-3">
          <div class="card h-100">
            <div class="card-body">
              <h4 class="card-title">
                <a href="#" id="aptName">아파트 명</a>
              </h4>
              <th id="homeType">아파트/주택</th>
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
          <div class="col-sm-4" id="map" style="height: 400px">
          </div>
          <div class="col-sm-8">
            <!-- <canvas id="myChart"></canvas> -->
            <!-- <Line></Line> -->
            <!-- <Bar></Bar> -->
            <chart-vue :data="{chartData1, chartData2}"></chart-vue>
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
// import 'Chart.js';
// import { Bar } from "vue-chartjs";

import ChartVue from '@/components/Chart.vue';
import axios from '@/common/axios.js';

  // kakaoMap(target[0].location[0], target[0].location[1], target[0].name);
export default {
    name:"house",
    components:{
        HouseSearch,
        ChartVue,
    },
    watch:{
    },
    data:function(){
        return{
            searchType: this.$route.params.searchType == undefined ? "dong" : this.$route.params.searchType, // this.$route.params.searchType,
            searchWord: this.$route.params.searchWord == undefined ? "" : this.$route.params.searchWord,
            offset: 0,
            limit: 8,

            houseList: null,
            houseInfo:{
              dealAmount: '',
              dong: '',
              jibun: '',
              buildYear: null,
              area: null,
              dealDate: '',
              code: '',
            },

            checkList: [],
            label:[],
            price: [],

            chartData1:[5, 40,15, 15, 8],
            chartData2:{
                'a':5,
                'b':1,
                'c':15,
                'd':9,
                'e':14,
            },
            location: [
              {
                lat: null,
                lng: null,
                aptName: null,
                code: null,
              },
            ],
            marker: null,
            map: null,

      };
    },
    mounted(){                                      // 페이지 mount 되는 시점
      console.log("searchType: " + this.searchType);
      console.log("searchWord: " + this.searchWord);

      this.searchHouse({searchType: this.searchType, searchWord: this.searchWord});   // house 검색 반환 + searchDetail() : 집 정보를 기반으로 위치정보 받기 + init Map()
   },
    methods:{
      initMap:function() {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(this.location[0].lat, this.location[0].lng), // 지도의 중심좌표
          level: 3,          // 지도의 확대 레벨
        };
        console.log(this.location[0].lat + " : " + this.location[0].lng);
        this.map = new kakao.maps.Map(mapContainer, mapOption);          // 맵 생성 (map을 출력할 container{html}, 맵의 좌표 & 크기)

        this.makeMarker();

        // Kakao Map Event handler
        let $this = this;       // kakao 함수 내에서 this 사용을 위해 변수 생성
        // 마커에 마우스오버 이벤트
        kakao.maps.event.addListener(this.marker, 'mouseover', function() {
          // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
            $this.markerMouseOn();
            console.log("mouseover!");
        });

        // 마커에 마우스아웃 이벤트
        kakao.maps.event.addListener(this.marker, 'mouseout', function() {
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
            $this.infowindow.close();
        });
      },
      makeMarker: function(){
        // 마커 표시하기 : 맵, 좌표, 마커 이미지
       this.marker = new kakao.maps.Marker({
          map: this.map,
          position: new kakao.maps.LatLng(this.location[0].lat, this.location[0].lng),
        })
        this.marker.setMap(this.map);
      },
      markerMouseOn:function(){
        var iwContent = "<div style=\"width:200px; height:100px; text-align: center; padding: 5px;\">" + this.houseInfo.aptName + "</div>"; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        var iwPosition = new kakao.maps.LatLng(this.location[0].lat, this.location[0].lng); //인포윈도우 표시 위치입니다
        // var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        this.infowindow = new kakao.maps.InfoWindow({
          map: this.map,
          position: iwPosition,
          content: iwContent,
          // removable: iwRemoveable,
        });
        this.infowindow.open(this.map, this.marker);
      },
      searchHouse: async function(data){
        console.log("searchType : " + this.searchType);
        console.log("searchWord : " + this.searchWord);
        await axios.get('/houses/houseInfo', {
          params:{
            searchType: data.searchType,
            searchWord: data.searchWord,
            offset: this.offset,
            limit: this.limit,
          }
        })
        .then(({data}) => {
          // console.log(data);
          this.houseList = data;
          // console.log(this.houseList);
          if(this.houseList == "") {
            alert("검색 결과가 없습니다.\n다시 다시 검색해주세요.");
            location.reload();
          }
          else{
            let houseList = this.houseList;
            houseList.forEach(function(item, idx) {
              houseList[idx].dealDate = item.dealYear + "/" + item.dealMonth + "/" + item.dealDay;
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });

        this.houseInfo = this.houseList[0];
        console.log("houseInfo : " + this.houseInfo);
        console.log("houseInfo : " + this.houseInfo.code);

        this.houseDetail(this.houseInfo);   
      },
      houseDetail: async function(houseInfo) {
        console.log("aptName : " + houseInfo.aptName + "code : " + houseInfo.code);
        this.houseInfo = houseInfo;
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

        // script 헤더에 Kakao Map API src 담아주기
        if (window.kakao && window.kakao.maps) {
          this.initMap();
        } else {
          const script = document.createElement('script');
          /* global kakao */
          script.onload = () => kakao.maps.load(this.initMap);
          script.src =
            'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cb6a0403bc69b1c833879cae3c194c2b';
          document.head.appendChild(script);
        };
      },
    },
    watch: {
      checkList: function(event) {
        let labelList = [];
        let priceList = [];
        this.checkList.forEach(function(list){
          labelList.push(list.aptName);
          let price = list.dealAmount.trim().replace(",", "");
          console.log(price)
          priceList.push(parseInt(price));
        });
        this.label = labelList;
        this.price = priceList;
        console.log(this.checkList);
        console.log(this.label);
        console.log(this.price);
      }
  },

}

</script>

<style>

</style>