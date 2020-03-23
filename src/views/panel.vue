
<template>

    <div class="has-background-dark has-text-light">


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

                <div class="has-background-dark has-text-light" style="">

                    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <div class="button is-dark" @click="execute()">
                                        <span class="icon">
                                            <i class="fas fa-play"></i>
                                        </span>
                                        <span>Run</span>
                                    </div>

                                    <div class="button is-dark" >
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
                                    <div class="button is-dark" @click="resetResult()">
                                        <span class="icon">
                                            <i class="fas fa-trash"></i>
                                        </span>
                                        <span>Clear</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </nav>

                    <div style="height: 100vh">
                    <split-pane :min-percent='10' :default-percent='50' split="horizontal">
                        <template slot="paneL">
                          <split-pane :min-percent='10' :default-percent='70' split="vertical">
                              <template slot="paneL">
                                      <editor
                                        @keyup.ctrl.enter.exact.native="execute()"
                                        class="box"
                                        ref='myEditor'
                                        v-model="code"
                                        @init="editorInit"
                                        :lang="lang"
                                        theme="monokai">
                                      </editor>
                              </template>
                              <template slot="paneR">
                                  <div class="box has-background-black has-text-light" style="background-color: #272822; height: 100%">
                                        {{ result }}
                                  </div>
                              </template>
                          </split-pane>
                        </template>
                        <template slot="paneR">
                          <div class="box has-text-light" style="background-color: #272822; margin-top: 1px">
                                <div class="subtitle is-5 has-text-light">
                                    Code Analysis
                                </div>
                                {{ error }}
                          </div>
                        </template>
                    </split-pane>
                    </div>


                </div>

            </div>

        </div>


    </div>

</template>


<script>

    import axios from 'axios';
    import Slider from '@jeremyhamm/vue-slider';
    // import store from '../store/store';

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
    background-color: #4a4a4a !important;
}

</style>
