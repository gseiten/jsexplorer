
<template>

    <div class="has-background-black-bis has-text-light" style="height: 100vh">


        <div class="columns">

            <div class="column is-narrow is-inline">

                <div class="is-block">
                    <slider
                        :width="300"
                        format="push"
                        direction="left"
                        :opacity="0.15"
                        :links="[
                        {'id': 1, 'text': 'Debug', 'url': ''},
                        {'id': 2, 'text': 'Learn', 'url': ''} ]">
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
                            <div class="navbar-item">
                                <div class="buttons">
                                    <div class="button has-background-black-bis is-dark" @click="execute()" >
                                        <span class="icon">
                                            <i class="fas fa-play"></i>
                                        </span>
                                        <span>Run</span>
                                    </div>

                                    <div class="button is-dark has-background-black-bis">
                                        <span class="icon">
                                            <i class="fas fa-save"></i>
                                        </span>
                                        <span>Save</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <div class="button is-dark has-background-black-bis" @click="resetResult()">
                                        <span class="icon">
                                            <i class="fas fa-trash"></i>
                                        </span>
                                        <span>Clear</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </nav>

                    <div style="height: 40em">

                        <split-pane :min-percent='10' :default-percent='50' split="vertical">

                            <template slot="paneL">
                                <editor
                                    @keyup.ctrl.enter.exact.native="execute()"
                                    class="has-background-black-bis"
                                    ref='myEditor'
                                    v-model="code"
                                    @init="editorInit"
                                    :lang="lang"
                                    theme="monokai">
                                </editor>
                            </template>

                            <template slot="paneR">
                                <perfect-scrollbar>
                                    <div class="paneR has-text-success">
                                        {{ result }}
                                    </div>
                                </perfect-scrollbar>
                            </template>

                          </split-pane>
                    
                    </div>


                </div>


                <div class="has-background-black" style="margin-top: 0.3em; padding: 1em">
                    <nav class="level">
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="title has-text-light">3,456</p>
                                <p class="heading has-text-light">Tweets</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="title has-text-light">123</p>
                                <p class="heading has-text-light">Following</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="title has-text-light">456K</p>
                                <p class="heading has-text-light">Followers</p>
                            </div>
                        </div>
                        <div class="level-item has-text-centered">
                            <div>
                                <p class="title has-text-light">789</p>
                                <p class="heading has-text-light">Likes</p>
                            </div>
                        </div>
                    </nav>
                </div>
                


            </div>

        </div>


    </div>

</template>


<script>

    import axios from 'axios';
    import Slider from '@jeremyhamm/vue-slider';

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
                result: "",
                error: "",
                code: `
let arr = [1,2,3,4,5];
for(let i in arr){
    console.log(arr[i])
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
                require('brace/ext/language_tools') //language extension prerequsite...
                require('brace/mode/html')
                require('brace/mode/javascript')    //language
                require('brace/mode/python')
                require('brace/mode/less')
                require('brace/theme/chrome')
                require('brace/theme/monokai')
                require('brace/snippets/javascript') //snippet
            },

            execute: function(){
                 // this.result = Function('"use strict";return (' + this.code + ')')();
                //  this.result = eval(this.code)

                axios.post('/api/js', {'code': this.code}, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then(response => {
                    this.result = response.data.result;
                    this.error = response.data.error;
                    console.log(response.data)
                })

            },

            resetResult: function(){
                this.result = "";
            },


        },


        mounted(){

            var editor = this.$refs.myEditor.editor;
            editor.setShowPrintMargin(false);
            editor.setFontSize("22px");

        }


    }
</script>


<style>

.splitter-pane-resizer {
    /* background-color: #4a4a4a !important; */
    background-color: hsl(0, 0%, 7%) !important;
}

.paneR {
    height: auto;
    padding: 0.5em;
    white-space: pre-line;
}

.ps {
  height: 100%;
}

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
