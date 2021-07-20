import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import { store } from "./store/store";
export const EventBus = new Vue();

/* Styles (bulma) */
require('./assets/main.scss')

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Vue.component('vue-fontawesome', FontAwesomeIcon);

import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
Vue.use(Buefy, {
    defaultIconPack: 'fa',
});

import splitPane from 'vue-splitpane';
Vue.component('split-pane', splitPane);

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
Vue.component("v-select", vSelect);

import VueSimplemde from 'vue-simplemde';
import 'simplemde/dist/simplemde.min.css';
Vue.component('vue-simplemde', VueSimplemde);


// import Prism from 'prismjs';
// import 'prismjs/themes/prism-okaidia.css'
// Vue.use(Prism)

// import { PrismEditor } from 'vue-prism-editor';
// import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles
// Vue.component('PrismEditor', PrismEditor);

// import VueCodemirror from 'vue-codemirror';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/mode/javascript/javascript.js';
// import 'codemirror/theme/monokai.css';
// Vue.use(VueCodemirror);

// import VueParticles from 'vue-particles'
// Vue.use(VueParticles);

// import VTooltip from 'v-tooltip';
// Vue.use(VTooltip);

// import PerfectScrollbar from 'vue2-perfect-scrollbar';
// import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
// Vue.use(PerfectScrollbar);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
