import { createApp } from "vue";
import { vue3Debounce } from "vue-debounce";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBreadSlice,
  faCow,
  faEgg,
  faFloppyDisk,
  faLeaf,
  faLemon,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";

/* add icons to the library */
library.add(
  faTrashCan,
  faFloppyDisk,
  faLeaf,
  faEgg,
  faBreadSlice,
  faCow,
  faLemon
);

createApp(App)
  .directive("debounce", vue3Debounce({ lock: true }))
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
