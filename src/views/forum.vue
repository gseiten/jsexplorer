
<template>

    <div class="container is-fluid is-unselectable">

        
        <div class="main_table">

        <b-table 
            :data="table_data" 
            :narrowed="true"  
            :hoverable="true" 
            :bordered="false"
            :paginated="true"
            :per-page="25"
            pagination-size="is-small"
            @click="ConversationClicked"
        >

            <template slot-scope="props">

                <b-table-column field="" label="Board">

                    <template slot="header" slot-scope="{ column }">
                            {{ column.label }}
                    </template>

                    <article class="media">


                        <figure class="media-left is-paddingless">
                            <p class="image is-48x48">
                                <img :src="props.row.picture">
                            </p>
                        </figure>

                        <div class="media-content">
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nulla explicabo inventore, commodi architecto et. Accusantium architecto beatae tempore ipsam?
                                </p>
                            </div>
                            <nav class="level is-mobile is-paddingless">
                                <div class="level-left">
                                    <div class="level-item is-size-7">
                                        <p>Posted by <span class="has-text-weight-bold is-italic">
                                            {{props.row.full_name}}
                                            </span> 10 Hours ago
                                        </p>
                                    </div>
                                </div>
                                <div class="level-right">
                                    <div class="level-item is-size-7">
                                        <span>
                                            <b-icon pack="fas" size="is-small" 
                                                :icon="props.row.gender === 'male' ? 'comment' : 'comments'">
                                            </b-icon>
                                            {{ props.row.age }}
                                        </span>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </article>


                </b-table-column>
                
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>

        </b-table>
        </div> <!-- table ends here -->

        <div class="modal" :class="{'is-active': is_modal_open}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <div class="modal-card-title">
                        Modal title
                    </div>
                    <button class="delete" aria-label="close" @click="is_modal_open = !is_modal_open"></button>
                </header>
                <section class="modal-card-body">
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                            <img :src="opened_conversation.picture">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                            <p>
                                <strong>{{opened_conversation.full_name}}</strong>
                                <br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                                <br>
                                <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                            </p>
                            </div>

                            <article class="media">
                            <figure class="media-left">
                                <p class="image is-48x48">
                                <img :src="opened_conversation.picture">
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                <p>
                                    <strong>{{opened_conversation.full_name}}</strong>
                                    <br>
                                    Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                                    <br>
                                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                </p>
                                </div>

                                <article class="media">
                                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
                                </article>

                                <article class="media">
                                Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
                                </article>
                            </div>
                            </article>

                            <article class="media">
                            <figure class="media-left">
                                <p class="image is-48x48">
                                <img :src="opened_conversation.picture">
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                <p>
                                    <strong>{{opened_conversation.full_name}}</strong>
                                    <br>
                                    Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                                    <br>
                                    <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                                </p>
                                </div>
                            </div>
                            </article>
                        </div>
                        </article>

                </section>

                <footer class="modal-card-foot">
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                            <img :src="opened_conversation.picture">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="field">
                            <p class="control">
                                <textarea class="textarea" placeholder="Add a comment..."></textarea>
                            </p>
                            </div>
                            <div class="field">
                            <p class="control">
                                <button class="button is-dark is-pulled-right">Post comment</button>
                            </p>
                            </div>
                        </div>
                    </article>
                </footer>

            </div>
        </div>


    </div>
    
</template>

<script>

import axios from 'axios';

export default {
    name: 'forum',
    components: {
        
    },
    data(){
        return {
            users_url: 'https://randomuser.me/api/?results=30&inc=gender,name,nat,dob,picture',
            table_data: [],
            opened_conversation: {},
            is_modal_open: false,
        }
    },
    methods:{
        ConversationClicked(row){
            this.is_modal_open = true;
            this.opened_conversation = row;
        }
    },
    created(){
        axios.get(this.users_url).then(response => {
            let users = response.data.results;
            users.forEach((user, index) => {
                this.table_data.push({
                    'id': index,
                    'full_name': user.name.first + ' ' + user.name.last,
                    'gender': user.gender,
                    'age': user.dob.age,
                    'picture': user.picture.thumbnail
                })
            });
        })
    },

}

</script>

<style lang="css" scoped>


a {
    color: whitesmoke;
}
a:hover{
    color: green;
}

strong {
    color: whitesmoke;
}

.textarea {
    background-color: hsl(0, 0%, 10%);
    color: whitesmoke;
}
.textarea:focus, .textarea:active{
    border: 2px whitesmoke solid;
    box-shadow: none;
}

.media .content {
    margin-bottom: 0.1rem !important;
}

.main_table {
    max-height: calc(100vh - 60px);
    overflow-y: scroll;
    overflow-x: hidden;
}

.modal-card {
    width: 45em;
}

.modal-card .modal-card-head {
    background-color:hsl(0, 0%, 14%);
    color: whitesmoke;
}
.modal-card .modal-card-head .modal-card-title {
    color: whitesmoke;
}

.modal-card .modal-card-body {
    background-color: hsl(0, 0%, 14%);
    color: whitesmoke;
    overflow-y: scroll;
    height: 100%;
}

.modal-card .modal-card-foot {
    background-color: hsl(0, 0%, 14%);
    color: whitesmoke;
}

.modal-card .modal-card-foot .media {
    width: 100%;
}

</style>