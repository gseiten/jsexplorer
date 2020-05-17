
<template>

    <div>
        <b-modal :active.sync="is_modal_open" has-modal-card :full-screen="is_modal_fullscreen" :can-cancel="false">
            <div class="modal-card">
                <header class="modal-card-head">
                    <div class="modal-card-title">
                        Create a public post
                    </div>
                    <button class="delete has-background-black-ter" aria-label="close"  @click="closeModal()">
                    </button>
                    <div class="button is-dark is-small" @click="is_modal_fullscreen = !is_modal_fullscreen">
                        <i class="fas fa-compress"></i>
                    </div>
                </header>

                <section class="modal-card-body has-background-light has-text-dark">
                    <b-field label="Title" class="is-marginless">
                        <b-input 
                            v-model="post_title" 
                            placeholder="Title" 
                            has-counter
                            maxlength="100">
                        </b-input>
                    </b-field>
                    <b-field label="Add upto 5 relevant tags." custom-class="">
                        <b-taginput
                            v-model="selected_tags"
                            :data="filtered_tags"
                            autocomplete
                            field=""
                            icon="label"
                            maxtags="5"
                            type="is-dark"
                            :allow-new="true"
                            placeholder="Add relevant tags"
                            @typing="getFilteredTags">
                            <template slot-scope="props">
                                {{props.option}}
                            </template>
                            <template slot="empty">
                                There are no items
                            </template>
                        </b-taginput>
                    </b-field>
                    <b-field label="Body" class="">
                        <vue-simplemde v-model="post_body" ref="markdownEditor" />
                    </b-field>
                    <b-field>
                        <b-button 
                            type="is-dark" 
                            class="is-pulled-left" 
                            :class="{'is-loading': is_submit_loading}" 
                            @click="is_submit_loading = !is_submit_loading">
                            Submit
                        </b-button>
                    </b-field>
                </section>
                
            </div>
        </b-modal>
    </div>
    
</template>

<script>

import languages from '../constants/languages.js';

export default {
    name: 'newpost',
    props: ['status'],
    components: {},
    data(){
        return {
            is_modal_open: false,
            is_modal_fullscreen: false,
            filtered_tags: languages,
            selected_tags: [],
            post_title: '',
            post_body: '',
            is_submit_loading: false,
        }
    },
    created(){
        this.is_modal_open = this.status;
    },
    methods:{
        getFilteredTags(text) {
            this.filtered_tags = languages.filter((option) => {
                return option
                    .toString()
                    .toLowerCase()
                    .indexOf(text.toLowerCase()) >= 0
            })
        },
        closeModal(){
            this.is_modal_open = false;
            this.$emit('closeNewpostModal', false)
        }
    },
    watch: {}

}
</script>

<style scoped>

.modal-card {
    border-radius: 0%;
}

.modal-card .modal-card-head {
    background-color:hsl(0, 0%, 14%);
    color: whitesmoke;
    border-radius: 0%;
}
.modal-card .modal-card-head .modal-card-title {
    color: whitesmoke;
}
.modal-card .modal-card-head .button{
    font-size: 0.8em;
    margin-left: 1em;
    background-color: hsl(0, 0%, 14%);
}

.modal-card .modal-card-head .button:hover, .modal-card .modal-card-head .delete:hover{
    transform: scale(1.5);
}

.modal-card .modal-card-body {
    background-color: hsl(0, 0%, 14%);
    color: whitesmoke;
    overflow-y: scroll;
    height: 100%;
}




</style>