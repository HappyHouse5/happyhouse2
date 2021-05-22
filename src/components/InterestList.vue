<template>
                        <div class="text-center align-middle">
                          <ul class="m-auto list-group list-group-flush interst-list align-items-center justify-content-center">
                            <li class="m-2">
                              <span class="fs-6 align-middle">종로구 사직동</span>
                              <button
                                class="btn btn-outline-secondary interest-search"
                                onclick="javascript:searchHouse();"
                                id="subBtn"
                                name="word"
                                value=""
                              >
                                Search
                              </button>
                            </li>
                            <li class="m-2">
                              <span class="fs-6 align-middle">강남구 역삼동</span>
                              <button
                                class="btn btn-outline-secondary interest-search"
                                onclick="javascript:searchHouse();"
                                id="subBtn"
                                name="word"
                                value=""
                              >
                                Search
                              </button>
                            </li>
                          </ul>
                        </div>
</template>

<script>
export default {
    name:"InterestList",
}
</script>

<style>

</style>