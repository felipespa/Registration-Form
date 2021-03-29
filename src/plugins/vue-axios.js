import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.headers.common["Content-Type"] = "application/json";

Vue.use(VueAxios, axios);
