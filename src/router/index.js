import Vue from "vue";
import VueRouter from "vue-router";
import Axios from 'axios';
import Home from "../views/Home.vue";
import Join from "../views/Join.vue";
import Member from "../views/Member.vue";

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
      components: {
        children: [
          // {
          //   path: 'info',
          //   name: "Info",
          //   component: MemberInfo,
          // },
          {
            path: 'update',
            name: "Update",
            component: Member,
          },
        ],
      }
    },
  },
  // {
  //   path: "/house",
  //   name: "House",
  //   components: {
  //     'default': House,
  //   }
  // },
  // {
  //   path: "/interest",
  //   name: "Interest",
  //   components: {
  //     children: [
  //       {
  //         path: 'add',
  //         name: "Add",
  //         component: InterestInfo,
  //       },
  //       {
  //         path: 'del',
  //         name: "Del",
  //         component: InterestDel,
  //       },
  //       {
  //         path: 'list',
  //         name: "List",
  //         component: InterestList,
  //       },
  //     ]
  //   }
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;