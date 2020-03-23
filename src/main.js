import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import { store } from "./store/store";

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import VueSplit from 'vue-split-panel'
Vue.use(VueSplit)

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
Vue.use(Prism)

import VuePrismEditor from "vue-prism-editor";
import "vue-prism-editor/dist/VuePrismEditor.css";
Vue.component("prism-editor", VuePrismEditor);

import VueCodemirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/monokai.css';
Vue.use(VueCodemirror);

import splitPane from 'vue-splitpane'
Vue.component('split-pane', splitPane);

import VueParticles from 'vue-particles'
Vue.use(VueParticles);

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
Vue.component("v-select", vSelect);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
