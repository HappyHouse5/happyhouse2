<template>
        <div>
                        <div
                          class="row align-items-center justify-content-center mb-5 interest-add"
                        >
                          <div class="col-2 my-2">
                            <select name="location" id="location" class="form-select mr-sm-2">
                              <option class="loc" value="11110">종로구</option>
                              <option class="loc" value="11140">중구</option>
                              <option class="loc" value="11170">용산구</option>
                              <option class="loc" value="11200">성동구</option>
                              <option class="loc" value="11215">광진구</option>
                              <option class="loc" value="11230">동대문구</option>
                              <option class="loc" value="11260">중랑구</option>
                              <option class="loc" value="11290">성북구</option>
                              <option class="loc" value="11305">강북구</option>
                              <option class="loc" value="11320">도봉구</option>
                              <option class="loc" value="11350">노원구</option>
                              <option class="loc" value="11380">은평구</option>
                              <option class="loc" value="11410">서대문구</option>
                              <option class="loc" value="11440">마포구</option>
                              <option class="loc" value="11470">양천구</option>
                              <option class="loc" value="11500">강서구</option>
                              <option class="loc" value="11530">구로구</option>
                              <option class="loc" value="11545">금천구</option>
                              <option class="loc" value="11560">영등포구</option>
                              <option class="loc" value="11590">동작구</option>
                              <option class="loc" value="11620">관악구</option>
                              <option class="loc" value="11650">서초구</option>
                              <option class="loc" value="11680">강남구</option>
                              <option class="loc" value="11710">송파구</option>
                              <option class="loc" value="11740">강동구</option>
                            </select>
                          </div>
                          <div class="col-2 my-1">
                            <select class="form-select mr-sm-2" id="dongSelect"></select>
                          </div>
                          <div class="col-auto my-1">
                            <button type="button" class="btn btn-outline-secondary" id="subBtn">
                              Search
                            </button>
                          </div>
                        </div>

                        </div>
    
</template>

<script>
export default {
    name:"InterestList",
}
</script>

<style>

</style>