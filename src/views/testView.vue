
<template>

    <div class="has-background-dark main" style="height:100vh">


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
            </div>

            <div class="column">

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


                <div style="height: 100vh;">


                <split-pane :min-percent='10' :default-percent='70' split="horizontal">
                    <template slot="paneL">
                      <split-pane :min-percent='10' :default-percent='70' split="vertical">
                          <template slot="paneL">
                                  <editor
                                    @keyup.ctrl.enter.exact.native="execute()"
                                    class=""
                                    ref='myEditor'
                                    v-model="code"
                                    @init="editorInit"
                                    lang="javascript"
                                    theme="monokai">
                                  </editor>
                          </template>
                          <template slot="paneR">
                              <div class="has-background-black has-text-light" style="height: 100%; background-color: #272822;">
                                 {{ result }}
                              </div>
                          </template>
                      </split-pane>
                    </template>
                    <template slot="paneR">
                      <div class="has-text-light has-background-link" style="background-color: #272822; margin-top: 1px">
                          <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. -->
                            <div v-for="i in 20" :key="i">
                                {{ i }}
                            </div>
                      </div>
                    </template>
                </split-pane>


            </div>

            <!-- <div class="box has-background-info">
               <v-select :options="['Canada', 'United States']"></v-select>
            </div> -->




        </div>


    </div>
</div>

</template>


<script>

    import Slider from '@jeremyhamm/vue-slider';
    // import MonacoEditor from 'monaco-editor-vue';


    export default {
        name: "testView",
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
            editor.setFontSize("22px");

        }


    }
</script>


<style>

.splitter-pane-resizer {
    background-color: #4a4a4a !important;
}


</style>
