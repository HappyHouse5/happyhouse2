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
          <div class="col-sm-4" id="map" style="height: 400px"></div>
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
        }
    }
   
   
    // data:function(){
    //     return{
    //         myChart:"",
    //     }
    // }
}


//   const labels = ["January", "February", "March", "April", "May", "June"];
//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: "rgb(255, 99, 132)",
//         borderColor: "rgb(255, 99, 132)",
//         data: [0, 10, 5, 2, 20, 30, 45],
//       },
//     ],
//   };

//   const config = {
//     type: "line",
//     data,
//     options: {},
//   };

//   var myChart = n ew Chart(document.getElementById("myChart"), config);

//   var target = [
//     {
//       location: [37.57571759553137, 126.96994660802713],
//       name: "신동아광화문",
//     },
//   ];

//   // 카카오 맵 위치 좌표 연동
//   var kakaoMap = function (x, y, name) {
//     var mapContainer = document.querySelector("#map");
//     var options = {
//       center: new kakao.maps.LatLng(x, y),
//       level: 3,
//     };

//     var map = new kakao.maps.Map(mapContainer, options);

//     var coords = new kakao.maps.LatLng(x, y);
//     var marker = new kakao.maps.Marker({
//       map: map,
//       position: coords,
//     });

//     var infowindow = new kakao.maps.InfoWindow({
//       content:
//         '<div style="width:200px; height:100px; text-align: center; padding: 5px;">' +
//         name +
//         "</div>",
//     });

//     // 마커에 마우스가 올라갔을 때 이벤트
//     kakao.maps.event.addListener(marker, "mouseover", function () {
//       infowindow.open(map, marker);
//     });

//     kakao.maps.event.addListener(marker, "mouseout", function () {
//       infowindow.close();
//     });

//     map.setCenter(coords);
//   };

//   kakaoMap(target[0].location[0], target[0].location[1], target[0].name);


</script>

<style>

</style>