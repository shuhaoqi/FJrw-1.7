import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/shoes",
    name: "shoes",
    component: () => import("../components/shoes.vue")
  },
  {
    path: "/year",
    name: "year",
    component: () => import("../components/year.vue")
  },
  {
    path: "/two",
    name: "two",
    component: () => import("../components/two.vue")
  },
  {
    path: "/three",
    name: "three",
    component: () => import("../components/three.vue")
  },
  {
    path: "/lun",
    name: "lun",
    component: () => import("../components/lun.vue")
  },
  {
    path: "/footer",
    name: "footer",
    component: () => import("../components/footer.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
