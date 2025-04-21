import { createApp } from "vue";
import "./components/JStyle/src/base.scss";

import App from "./App.vue";
import router from "@/router/index";
const app = createApp(App);
app.use(router);

app.mount("#app");
