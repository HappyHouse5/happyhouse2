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

// import { format } from 'core-js/core/date';
// import { BootstrapIconsPlugin  } from 'bootstrap-icons';

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
    components: {
      'default': Member,
    },
  },
  {
    path: "/house",
    name: "House",
    components: {
      'default': House,
    }
  },
  {
    path: "/interest",
    name: "Interest",
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

export default router;