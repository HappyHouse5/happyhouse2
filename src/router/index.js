import Vue from "vue";
import VueRouter from "vue-router";
import Axios from 'axios';
import Home from "../views/Home.vue";
import Join from "../views/Join.vue";
import Member from "../views/Member.vue";
import House from "../views/House.vue";
import Interest from "../views/Interest.vue";
import InterestAdd from "../components/InterestAdd.vue";
import InterestDel from "../components/InterestDel.vue";
import InterestList from "../components/InterestList.vue";
import axios from '../common/axios.js';

// import { format } from 'core-js/core/date';
// import { BootstrapIconsPlugin  } from 'bootstrap-icons';

  // <a :href="'#' + i" @click="$router.push({name: 'member', params: {infoUpdate: information}})">{{i}}번 게시글</a>
  // <router-link :to="{name: 'member', params: {id: 'member', no: i}}">{{i}}번 게시글</router-link>

Vue.use(VueRouter);
Vue.prototype.$http = Axios;

const routes = [

  {
    path: "/",
    name: "Home",
    components: {
      'default': Home,
    }
  },
  {
    path: "/join",
    name: "Join",
    components: {
      'default': Join,
    }
  },

  {  
    path: "/member",
    name: "Member",
    meta: {authRequired: true},       // 로그인이 필요한 페이지
    components: {
      'default': Member,
    },
  },
  {
    path: "/house",
    name: "House",
    meta: {authRequired: true},       // 로그인이 필요한 페이지
    components: {
      'default': House,
    }
  },
  {
    path: "/interest",
    name: "Interest",
    meta: {authRequired: true},       // 로그인이 필요한 페이지
    component: Interest,
    children: [
      {
        path: 'add',
        name: 'Add',
        component: InterestAdd,
      },
      {
        path: 'del',
        name: "Del",
        component: InterestDel,
      },
      {
        path: 'list',
        name: "List",
        component: InterestList,
      },
    ],
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 전역으로 모든 페이지 라우팅에 있어서 먼저 수행 : Nav Guard
router.beforeEach(function (to, from, next) {
  // console.log(sessionStorage.getItem("member"));
  if (to.matched.some(function (routeInfo) {        // meta : authRequired(true) 라면
    return routeInfo.meta.authRequired;
  })) {
    axios.get('/members/sessionCheck', {            // axios로 서버측 세션 살아있는지 확인
    })
      .then(({ data }) => {
        console.log(data);
        console.log(data.result);
        if (data.result == 'login') {
          alert("로그인이 필요합니다.");
          next('/').catch((err) => { console.log(err);});            // 로그인 페이지로 이동
        }
        else {
          console.log("from -> to path: " + from.path + "=>" + to.path);
          next();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  else {
    console.log("from -> to path: " + from.path + "=>" + to.path);
    next();                           // 가려고 했던 페이지로 이동
  }
});


export default router;