import routes from "./routes";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Add any global navigation guards here if needed
  next();
});

router.afterEach((to, from) => {
  // Add any logic after navigation if needed
});

export default router;
