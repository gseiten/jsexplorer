
<template>

    <div class="has-background-dark has-text-light">


        <div class="columns">

            <div class="column is-narrow is-inline">

                <div class="">
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
                <!-- <br><br>
                <div class="buttons are-small">
                    <div class="button is-dark is-active">
                        <span class="icon">
                            <i class="fas fa-play"></i>
                        </span>
                    </div>
                </div> -->

            </div>

            <div class="column" style="padding-top: 0">

                <div class="has-background-dark has-text-light" style="height: 100vh;">

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

                    <split-pane :min-percent='10' :default-percent='70' split="horizontal">
                        <template slot="paneL">
                          <split-pane :min-percent='10' :default-percent='70' split="vertical">
                              <template slot="paneL">
                                      <editor
                                        @keyup.ctrl.enter.exact.native="execute()"
                                        class="box"
                                        ref='myEditor'
                                        v-model="code"
                                        @init="editorInit"
                                        lang="javascript"
                                        theme="monokai">
                                      </editor>
                              </template>
                              <template slot="paneR">
                                  <div class="box has-background-black has-text-light" style="height: 100%; background-color: #272822">
                                     {{ result }}
                                  </div>
                              </template>
                          </split-pane>
                        </template>
                        <template slot="paneR">
                          <div class="box has-text-light" style="background-color: #272822; margin-top: 1px">
                              Step by Step Analysis: <br>

                              {{ code }}
                          </div>
                        </template>
                    </split-pane>
                </div>

            </div>

        </div>


    </div>

</template>


<script>

    import Slider from '@jeremyhamm/vue-slider';
    // import MonacoEditor from 'monaco-editor-vue';


    export default {
        name: "panel",
        components: {
            'slider' : Slider,
            editor: require('vue2-ace-editor'),
        },
        data() {
            return {
                result: "",
                code: `var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
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
                require('brace/mode/less')
                require('brace/theme/chrome')
                require('brace/theme/monokai')
                require('brace/snippets/javascript') //snippet
            },

            execute: function(){
                 // this.result = Function('"use strict";return (' + this.code + ')')();
                 this.result = eval(this.code)
            },

            resetResult: function(){
                this.result = "";
            },


        },


        mounted(){

            var editor = this.$refs.myEditor.editor;
            editor.setShowPrintMargin(false);
            editor.setFontSize("20px");

        }


    }
</script>


<style>

.splitter-pane-resizer {
    background-color: #4a4a4a !important;
}

</style>
