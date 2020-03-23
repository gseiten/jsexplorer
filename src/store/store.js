import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selectedLanguage: "",
    },
    mutations: {
        changeSelectedLanguage (state, language) {
            state.selectedLanguage = language;
        }
    },
    getters: {
        selectedLanguage: state => state.selectedLanguage,
    }
})