import "/src/assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@appwrite.io/pink"; // optionally, add icons
import "@appwrite.io/pink-icons";

const app = createApp(App);

app.use(router);

app.mount("#app");
