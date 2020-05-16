import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        selectedLanguage: "",
        selectedMenuOption: "",
    },
    mutations: {
        changeSelectedLanguage (state, language) {
            state.selectedLanguage = language;
        },
        changeSelectedMenuOption (state, option) {
            state.selectedMenuOption = option;
        }
    },
    getters: {
        selectedLanguage: state => state.selectedLanguage,
        selectedMenuOption: state => state.selectedMenuOption,
    }
})