import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home/index.vue"),
    children: [
      {
        path: "/button",
        name: "button",
        component: () => import("@/components/JButton/src/demo.vue"),
      },
    ],
  },
];
export default routes;
