
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
const code_snippet =  require('../constants/code_snippets.js');

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        // * Some default starting values are given.
        code: code_snippet.js,
        selectedLanguage: "JavaScript",
        selectedMenuOption: "panel",
        isLayoutVertical: true,
        selectedPostType: "Questions",
    },
    mutations: {
        holdTheCode(state, code){
            state.code = code;
        },
        changeSelectedLanguage(state, language){
            state.selectedLanguage = language;
        },
        changeSelectedMenuOption(state, option){
            state.selectedMenuOption = option;
        },
        switchSplitpanesLayout(state, option){
            state.isLayoutVertical = option;
        },
        changePostType(state, type){
            state.selectedPostType = type;
        }
    },
    getters: {
        code: state => state.code,
        selectedLanguage: state => state.selectedLanguage,
        selectedMenuOption: state => state.selectedMenuOption,
        isLayoutVertical: state => state.isLayoutVertical,
        selectedPostType: state => state.selectedPostType
    }
})