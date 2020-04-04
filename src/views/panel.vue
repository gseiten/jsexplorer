
<template>

    <div class="has-background-black-bis has-text-light" style="min-height: 100vh; height: 100%;">


        <div class="columns">

            <div class="column is-narrow is-inline">

                <div class="is-block">
                    <slider
                        :width="300"
                        format="overlay"
                        direction="left"
                        :opacity="0.15"
                        :links="[
                            {'id': 1, 'text': 'Analyze', 'url': ''},
                            {'id': 2, 'text': 'Learn', 'url': ''},
                        ]">
                    </slider> 
                </div>

                <div style="margin-top: 3em">
                    <div class="is-block" v-if="this.$store.getters['selectedLanguage'] === 'Python'" :key="this.$store.getters['selectedLanguage']">
                        <i class="fab fa-python fa-2x"></i>
                    </div>
                    <div class="is-block" v-if="this.$store.getters['selectedLanguage'] === 'JavaScript'" :key="this.$store.getters['selectedLanguage']">
                        <i class="fab fa-js fa-2x"></i>
                    </div>
                </div>

            </div>

            <div class="column" style="padding-top: 0">

                <div class="has-background-black-bis has-text-light">

                    <nav class="navbar has-background-black-bis" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand">
                            <div class="navbar-item is-paddingless">
                                <div class="buttons">
                                    <div class="button is-dark is-small" @click="execute()" >
                                        <span class="icon">
                                            <i class="fas fa-play"></i>
                                        </span>
                                        <span class="is-size-6">Run</span>
                                    </div>

                                    <div class="button is-dark is-small">
                                        <span class="icon">
                                            <i class="fas fa-save"></i>
                                        </span>
                                        <span class="is-size-6">Save</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item is-paddingless">
                                <div class="buttons">
                                    <div class="button is-dark is-small" @click="resetResult()">
                                        <span class="icon">
                                            <i class="fas fa-trash"></i>
                                        </span>
                                        <span class="is-size-6">Clear</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </nav>

                    <div style="height: 40em">

                        <split-pane :min-percent='10' :default-percent='70' split="vertical">

                            <template slot="paneL">

                                <editor
                                    class="has-background-black-bis"
                                    @keyup.ctrl.enter.exact.native="execute()"
                                    ref='myEditor'
                                    v-model="code"
                                    @init="editorInit"
                                    :lang="lang"
                                    theme="monokai">
                                </editor>

                            </template>

                            <template slot="paneR">

                                    <div class="list is-hoverable has-background-black-bis resContainer">
                                        <div
                                            style="border-bottom: 1px solid #202020"
                                            class="list-item has-text-success" 
                                            v-for="(el, index) in result" 
                                            v-bind:key="index">
                                            {{ el }}
                                        </div>

                                        <div
                                            v-if="error != ''"
                                            class="list-item has-text-light"
                                            style="background-color: rgba(255,0,0,0.2)">
                                            {{ error }}
                                        </div>
                                    </div>
                            
                            </template>

                        </split-pane>
                    
                    </div>


                </div>


                <!-- <div class="content" v-if="fileInfo.length">
                    The file has {{ fileInfo.length }} functions.
                    <div class="list is-hoverable">
                        <div
                            style="border-bottom: 1px solid #202020"
                            class="list-item has-background-black-bis has-text-light" 
                            v-for="(el, index) in fileInfo" 
                            :key="index">

                                <div class="is-italic">{{ index+1 }}. {{ el.name }}</div>
                                <div v-if="el.params.length">
                                    It takes {{ el.params.length }} parameters.
                                </div>
                                <div v-if="el.isEmpty">
                                    It is empty.
                                </div>
                                <div v-if="el.isGenerator">
                                    it is a generator.
                                </div>
                        </div>
                    </div>
                </div> -->

                <div class="container is-fluid is-paddingless" style="margin-top: 5px">
                <div v-if="fileInfo.length" class="box has-background-black">
                    <div class="content" style="margin-bottom: 0">
                        <span class="subtitle is-4 has-text-light">
                            Metrics 
                        </span>
                        <p class="has-text-light">
                            There are {{ fileInfo.length }} function(s) in this file.
                        </p>
                    </div>
                    <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                        <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                            <b-icon :icon="!props.open ? 'caret-down' : 'caret-up'"></b-icon>
                            {{ !props.open ? 'Show detail' : 'Hide detail' }}
                        </a>
                        <div class="list">
                            <div
                                type="I"
                                style="border-bottom: 1px solid #202020; border-radius: 0"
                                class="list-item has-background-black-bis has-text-light" 
                                v-for="(el, index) in fileInfo" 
                                :key="index">

                                    <div class="is-italic" v-if="el.name">
                                        {{ el.name }}
                                    </div>
                                    <div class="is-italic" v-else>
                                        It's an IIFE.
                                    </div>
                                    <div v-if="el.params.length">
                                        It has {{ el.params.length }} parameters.
                                    </div>
                                    <div v-if="el.variables">
                                        Has {{ el.variables }} local variable(s).
                                    </div>
                                    <div v-if="el.isEmpty">
                                        It is empty.
                                    </div>
                                    <div v-if="el.isGenerator">
                                        It is a generator.
                                    </div>
                            </div>
                        </div>
                    </b-collapse>
                </div>
                </div>



            </div>

        </div>


    </div>

</template>


<script>

    import axios from 'axios';
    import Slider from '@jeremyhamm/vue-slider';
    // import 'bulma-extensions/bulma-accordion/dist/css/bulma-accordion.min.css';
    

    export default {
        name: "panel",
        components: {
            'slider' : Slider,
            editor: require('vue2-ace-editor'),
        },

        computed: {
            selectedLanguage(){
                return this.$store.getters['selectedLanguage']
            }
        },

        watch: {
            selectedLanguage(newVal){
                this.lang = newVal.toLowerCase();
            }
        },

        data() {
            return {
                lang: "javascript",
                result: [],
                error: "",
                fileInfo: [],

//                 code: `
// let arr = Array(20).fill().map((_, i) => i * i);
// for(var i in arr){
//     let random = Math.random().toString(36).substr(2, 9);
//     console.log(random);
// }
// `,

                code: `
function abc(m,n){
    console.log("shubham");
}

function def(p,r){
    console.log("bhardwaj");
}`,


                cmOptions: {
                    tabSize: 4,
                    mode: 'text/javascript',
                    theme: 'monokai',
                    lineNumbers: true,
                    line: true,
                },

            }
        },


        methods: {

            editorInit: function () {

                require("brace/ext/beautify")
                require('brace/ext/language_tools') //language extension prerequsite...
                require('brace/mode/html')
                require('brace/mode/javascript')    //language
                require('brace/mode/python')
                require('brace/mode/less')
                require('brace/theme/chrome')
                require('brace/theme/vibrant_ink')
                require('brace/theme/monokai')
                require('brace/snippets/javascript') //snippet
                
            },

            execute: function(){

                axios.post('/api/js', 
                    {
                        'code': this.code,
                        'lang': this.lang
                    },
                    { 
                        headers: { 
                            'Content-Type': 'application/json',
                    }
                }).then(response => {

                    if(response.data.result != ""){
                        this.result.push(response.data.result);}
                    this.error = response.data.error;

                    this.fileInfo = [];
                    this.fileInfo = response.data.fileInfo;

                }).catch(function(error) {
                    alert(error);
                });

            },

            resetResult: function(){

                this.result = [];
                this.error = "";

            },

            scrollToEnd: function(){

                var container = document.querySelector('.resContainer');
                var scrollHeight = container.scrollHeight;
                container.scrollTop = scrollHeight;
                
            }


        },


        mounted(){

            var editor = this.$refs.myEditor.editor;
            editor.setShowPrintMargin(false);
            editor.setFontSize("22px");
            this.scrollToEnd();

        },

        updated(){

            this.scrollToEnd();
        
        }


    }
</script>


<style>

.splitter-pane-resizer {
    background-color: hsl(0, 0%, 7%) !important;
}

.paneR {
    height: auto;
    white-space: pre-line;
}

.resContainer {
    overflow-y: scroll;
    height: 100%;
    white-space: pre-line;
}

/* .ps {
  height: 100%;
} */

::-webkit-scrollbar {
    width: 0.5em;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
    background: rgba(100, 100, 100, 0.8);
}

::-webkit-scrollbar-corner,
::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(100, 100, 100, 0.4);
}

</style>
