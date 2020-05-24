

<template>
<!-- padding-top due to fixed navbar -->

<div class="container is-fluid" style="height: 800px" >

    <splitpanes @resize="paneResized" class="has-text-light">
        <pane :size="editorPaneSize" min-size="5">
            <editor
                :key="editorPaneSize"
                class="has-background-black-bis main_editor"
                ref='myEditor'
                v-model="code"
                @init="editorInit"
                lang="javascript"
                theme="monokai">
            </editor>
        </pane>
        <pane :size="secondPaneSize" min-size="5">
            <b-dropdown aria-role="list" :scrollable="true" :max-height="10">
                <a slot="trigger" role="button">
                    <span>Font Size</span>
                    <b-icon size="" icon="menu-down"></b-icon>
                </a>
                <b-dropdown-item 
                    v-for="(item, index) in 10"
                    :key="index"
                    :value="item" aria-role="listitem">
                        <div class="media">
                        <b-icon class="media-left" icon="user"></b-icon>
                        <div class="media-content">
                            <h3>{{item}}</h3>
                        </div>
                    </div>
                </b-dropdown-item>
            </b-dropdown>
        </pane>
        <pane :size="thirdPaneSize" min-size="5">
            <b-dropdown
                scrollable="true"
                max-height="100"
                v-model="selectedFontSize"
                aria-role="list"
            >
                <button class="button is-primary" type="button" slot="trigger">
                    <template>
                        <b-icon icon="user"></b-icon>
                        <span>{{selectedFontSize}}</span>
                    </template>
                    <b-icon icon="menu-down"></b-icon>
                </button>

                <b-dropdown-item 
                    v-for="(item, index) in fontSizes"
                    :key="index"
                    :value="item" aria-role="listitem">
                    <div class="media">
                        <b-icon class="media-left" icon="account"></b-icon>
                        <div class="media-content">
                            <h3>{{item}}</h3>
                        </div>
                    </div>
                </b-dropdown-item>
            </b-dropdown>
        </pane>
    </splitpanes>

</div>

</template>

<script>

import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
var code_snippet =  require('../constants/code_snippets.js');

export default {
	name: "testView",
	components: {
        Splitpanes, Pane,
        editor: require('vue2-ace-editor'),    
    },
	data() {
		return {
			expandOnHover: false,
            mobile: "reduce",
            reduce: false,
            code: code_snippet.js,
            editorPaneSize: 0,
            secondPaneSize: 0, 
            thirdPaneSize: 0,
            fontSizes: [12,13,14,15,16,17,18,19,20,21],
            selectedFontSize: 12,
		};
    },
    mounted(){},

    methods: {

        // panelReady(){
        //     this.editorPanelSize = 60;
        //     this.secondPanelSize = 40;
        //     // this.thirdPanelSize = 20;
        // },

        paneResized(event){
            this.editorPaneSize = event[0].size;
            this.secondPaneSize = event[1].size;
            this.thirdPaneSize = event[2].size;
        },
       
        editorInit: function (editor) {
            /* 'editor' arg is ACE's instance. Another way is; let editor = this.$refs.myEditor.editor */
            editor.setShowPrintMargin(false);
            editor.setFontSize("20px");
            editor.getSession().setUseWrapMode(true);
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
    },

};
</script>

<style lang="scss">

.resContainer {
    overflow-y: auto;
    height: 100%;
    white-space: pre-line;
}

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
  background-color: hsl(0, 0%, 10%);
  /* background: linear-gradient(0deg, #ccc, #111); */
}

</style>