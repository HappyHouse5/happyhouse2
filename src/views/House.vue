<template>
  <div>
      <house-search></house-search>

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
                <tr>
                  <th scope="row">
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </th>
                  <td>aptName</td>
                  <td>55000</td>
                  <td>buildYear</td>
                  <td>area</td>
                  <td>dealDate</td>
                  <td>dong</td>
                  <td>code</td>
                </tr>
                <tr class="spacer">
                  <td colspan="100"></td>
                </tr>
                <tr>
                  <th scope="row">
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </th>
                  <td>aptName</td>
                  <td>55000</td>
                  <td>buildYear</td>
                  <td>area</td>
                  <td>dealDate</td>
                  <td>dong</td>
                  <td>code</td>
                </tr>
                <tr class="spacer">
                  <td colspan="100"></td>
                </tr>
                <tr>
                  <th scope="row">
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </th>
                  <td>aptName</td>
                  <td>55000</td>
                  <td>buildYear</td>
                  <td>area</td>
                  <td>dealDate</td>
                  <td>dong</td>
                  <td>code</td>
                </tr>
                <tr class="spacer">
                  <td colspan="100"></td>
                </tr>
                <tr>
                  <th scope="row">
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </th>
                  <td>aptName</td>
                  <td>55000</td>
                  <td>buildYear</td>
                  <td>area</td>
                  <td>dealDate</td>
                  <td>dong</td>
                  <td>code</td>
                </tr>
                <tr class="spacer">
                  <td colspan="100"></td>
                </tr>
                <tr>
                  <th scope="row">
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </th>
                  <td>aptName</td>
                  <td>55000</td>
                  <td>buildYear</td>
                  <td>area</td>
                  <td>dealDate</td>
                  <td>dong</td>
                  <td>code</td>
                </tr>
                <tr class="spacer">
                  <td colspan="100"></td>
                </tr>
                <tr>
                  <th scope="row">
                    <label class="control control--checkbox">
                      <input type="checkbox" />
                      <div class="control__indicator"></div>
                    </label>
                  </th>
                  <td>aptName</td>
                  <td>55000</td>
                  <td>buildYear</td>
                  <td>area</td>
                  <td>dealDate</td>
                  <td>dong</td>
                  <td>code</td>
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
              <p id="price">가격</p>
              <p class="card-text" id="dong">법정동</p>
              <p class="card-text" id="jibun">지번</p>
              <p class="card-text" id="buildDate">건축년도</p>
              <p class="card-text" id="area">전용면적</p>
              <p class="card-text" id="dealDate">거래일</p>
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



  // kakaoMap(target[0].location[0], target[0].location[1], target[0].name);
export default {
    name:"house",
    // props:['chartdata', 'options'],
    components:{
        HouseSearch,
        ChartVue,
    },
    data:function(){
        return{
            chartData1:[5, 40,15, 15, 8],
            chartData2:{
                'a':5,
                'b':1,
                'c':15,
                'd':9,
                'e':14,
            },
            target: [
              {
                location: [37.57571759553137, 126.96994660802713],
                name: "신동아광화문",
              },
            ],
            marker: "",
            map: null,

      };
    },
    mounted(){                                      // 페이지 mount 되는 시점
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
    methods:{
      initMap:function() {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(this.target[0].location[0], this.target[0].location[1]), // 지도의 중심좌표
          level: 3,          // 지도의 확대 레벨
        };

        this.map = new kakao.maps.Map(mapContainer, mapOption);          // 맵 생성 (map을 출력할 container{html}, 맵의 좌표 & 크기)

        // 마커 표시하기 : 맵, 좌표, 마커 이미지
       this.marker = new kakao.maps.Marker({
          map: this.map,
          position: new kakao.maps.LatLng(this.target[0].location[0], this.target[0].location[1]),
        })
        this.marker.setMap(this.map);


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
      markerMouseOn:function(){
        var iwContent = "<div style=\"width:200px; height:100px; text-align: center; padding: 5px;\">" + 'here!!' + "</div>"; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        var iwPosition = new kakao.maps.LatLng(this.target[0].location[0], this.target[0].location[1]); //인포윈도우 표시 위치입니다
        // var iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

        this.infowindow = new kakao.maps.InfoWindow({
          map: this.map,
          position: iwPosition,
          content: iwContent,
          // removable: iwRemoveable,
        });
        this.infowindow.open(this.map, this.marker);
      },
    },
}




</script>

<style>

</style>