import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Elevate from "../views/Elevate.vue";
import Educate from "../views/Educate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/elevate",
    name: "Elevate",
    component: Elevate
  },
  {
    path: "/educate",
    name: "Educate",
    component: Educate
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
  // {
  //   path: "/elevate",
  //   name: "Elevate",
  //       // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Elevate.vue")
  // },
];

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

export default router;
