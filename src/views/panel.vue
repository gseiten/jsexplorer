
<template>

    <div class="has-background-black-bis has-text-light">
    

        <splitpanes class="" style="height: 100vh;">

            <!-- PANE 1 (CODE EDITOR) -->
            <pane :size="editorPanelSize" min-size="5">
                <editor
                    class="has-background-black-bis"
                    @keyup.ctrl.enter.exact.native="execute()"
                    ref='myEditor'
                    v-model="code"
                    @init="editorInit"
                    :lang="lang"
                    theme="monokai">
                </editor>
            </pane>

            <!-- PANE 2 (OUTPUT) -->
            <pane class="resContainer" :size="outputPanelSize" min-size="5">

                <nav class="level has-background-black-ter console_level">
                    <div class="level-left">
                        <div class="level-item is-size-6">Output</div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="button is-dark is-small has-background-black-ter" @click="resetResult()" >
                                <span class="icon">
                                    <i class="far fa-trash-alt"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
                
                <div class="list is-hoverable has-background-black-bis is-size-6" >
                    <div
                        style="border-bottom: 1px solid #202020"
                        class="list-item has-text-light is-family-code" 
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
            </pane>

            <!-- PANE 3 (INFO) -->
            <pane class="resContainer" :size="analysisPanelSize" min-size="10">

                <nav class="level has-background-black-ter console_level">
                    <div class="level-left">
                        <div class="level-item is-size-6">
                            Analysis
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="button is-dark is-small has-background-black-ter is-paddingless" >
                            <b-tooltip :label="turnoffMessage" type="is-dark" position="is-left" :delay="500" >
                                <b-switch
                                    v-model="isAnalysisOn"
                                    size="is-small" 
                                    type="is-light" 
                                    :outlined="true" 
                                >
                                </b-switch>
                            </b-tooltip>
                            </div>
                        </div>
                    </div>
                </nav>


                <!-- {{ code_snippet }} -->
                <!-- <div v-if="fileInfo.length">
                    <div class="content has-text-light">
                        <ol type="1">
                            <li>
                                <p class="has-text-light is-marginless" v-if="fileInfo.length == 1">
                                    There is only {{ fileInfo.length }} function in this file.
                                </p>
                                <p class="has-text-light is-marginless" v-else>
                                    There are {{ fileInfo.length }} functions in this file.
                                </p>
                                <b-collapse :open="false" position="is-bottom" aria-id="contentIdForA11y1">
                                    <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                                        <b-icon :icon="!props.open ? 'caret-down' : 'caret-up'" pack="fas" ></b-icon>
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
                            </li>
                        </ol>
                    </div>
                </div> -->


                <!-- complexity report -->
                <!-- Object.keys(obj).length === 0 && obj.constructor === Object -->

                <b-collapse
                    
                    class="card has-background-black-ter has-text-light"
                    animation="slide"
                    v-for="(cr, index) of complexity_report"
                    :key="index"
                    :open="isOpen == index"
                    @open="isOpen = index">

                    <div
                        slot="trigger"
                        slot-scope="props"
                        class="card-header"
                        role="button">
                        <p class="card-header-title has-text-light">
                            <span v-if="cr.title === 'Aggregate'">
                                {{ cr.title }}
                            </span>
                            <span v-else>
                                <span class="has-text-warning has-text-weight-normal">function</span>
                                <span style="margin-left:0.5em">{{ cr.title }}</span>
                            </span>
                        </p>
                        <a class="card-header-icon">
                            <b-icon
                                :icon="props.open ? 'menu-down' : 'menu-up'">
                            </b-icon>
                        </a>
                    </div>
                    <div class="card-content">

                        <div class="content">
                            The file has a <span class="has-text-warning">cyclomatic complexity</span> score of
                            <strong class="has-text-light">{{ cr.data.cyclomatic }}</strong> 
                            and <span class="has-text-warning">density  </span>
                            <strong class="has-text-light">{{ cr.data.cyclomaticDensity }}</strong>.
                            <br>
                            There are a total of 
                            <strong class="has-text-light">{{ cr.data.lines }} </strong>
                                physical line(s) of code. 
                        </div>

                    </div>
                </b-collapse>

            </pane>

        </splitpanes>


    </div>

</template>


<script>

    import { EventBus } from '../main.js';
    import axios from 'axios';
    import { Splitpanes, Pane } from 'splitpanes';
    import 'splitpanes/dist/splitpanes.css';
    var code_snippet =  require('../constants/code_snippets.js');

    export default {

        name: "panel",
        components: {
            editor: require('vue2-ace-editor'),
            Splitpanes,
            Pane
        },

        data() {
            return {

                isOpen: 0,
                complexity_report: [],

                lang: "javascript",
                result: [],
                error: "",
                fileInfo: [],

                code: code_snippet.js,

                cmOptions: {
                    tabSize: 4,
                    mode: 'text/javascript',
                    theme: 'monokai',
                    lineNumbers: true,
                    line: true,
                },

                editorPanelSize: 40,
                outputPanelSize: 30,
                analysisPanelSize: 30,

                turnoffMessage: 'switch off code analysis',
                isAnalysisOn: true,


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
                        'lang': this.lang,
                        'analysis': this.isAnalysisOn
                    },
                    {
                        headers: { 
                            'Content-Type': 'application/json',
                    }
                }).then(response => {

                    if(response.data.result != ""){
                        this.result.push(response.data.result);}
                    this.error = response.data.error;

                    this.fileInfo = []; // reset fileInfo for every code execution.
                    if(response.data.fileInfo){
                        this.fileInfo = response.data.fileInfo;
                    }

                    this.complexity_report = [];
                    if(Object.keys(response.data['complexity_report']).length === 0 && 
                        response.data['complexity_report'].constructor === Object) {
                            console.log("Complexity report is empty!!")
                        }
                    else {
                        this.complexity_report = response.data['complexity_report']
                    }


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
            editor.setFontSize("20px");
            this.scrollToEnd();

        },

        updated(){

            this.scrollToEnd();
        
        },

        created(){

            EventBus.$on('execute', () => {
                // You can then call your method attached to this component here
                this.execute()
            });

        },

        computed: {
            selectedLanguage(){
                return this.$store.getters['selectedLanguage']
            }
        },

        watch: {

            isAnalysisOn() {

                if(this.isAnalysisOn) { 
                    this.editorPanelSize = 40;
                    this.outputPanelSize = 30;
                    this.analysisPanelSize = 30; 
                } else {
                    this.editorPanelSize = 60;
                    this.outputPanelSize = 30;
                    this.analysisPanelSize = 10;
                    this.complexity_report = [];
                }

            },

            selectedLanguage(newVal) {
                this.lang = newVal.toLowerCase();
                if(this.lang === 'python'){
                    this.code = code_snippet.py; 
                } else if(this.lang === 'javascript'){
                    this.code = code_snippet.js;
                }


            }
        },


    }
</script>


<style>

.splitpanes {
    background-color: hsl(0, 0%, 7%);
    /* background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB); */
}

.splitpanes__pane {
    box-shadow: 0 0 5px rgba(0, 0, 0, .2) inset;
    justify-content: center;
    align-items: center;
    /* display: flex; */
}

.splitpanes--vertical > .splitpanes__splitter {
  min-width: 6px;
  background-color: hsl(0, 0%, 10%);
  /* background: linear-gradient(90deg, #ccc, #111); */
}

.splitpanes--horizontal > .splitpanes__splitter {
  min-height: 6px;
  background: linear-gradient(0deg, #ccc, #111);
}

.resContainer {
    padding: 0.5em;
    overflow-y: auto;
    height: 100%;
    white-space: pre-line;
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


.console_level{
    padding-left: 0.5em;
    margin-bottom: 0.2em !important;
}

</style>
