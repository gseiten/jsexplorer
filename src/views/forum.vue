
<template>

    <div class="container is-fluid">

        <b-table 
            :data="data" 
            :narrowed="true"  
            :hoverable="true" 
            :bordered="false"
            @click="entryClicked"
        >

            <template slot-scope="props">

                <b-table-column field="user.first_name" label="Content">
                    <template slot="header" slot-scope="{ column }">
                            {{ column.label }}
                    </template>

                    <article class="media">
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus neque iusto harum nesciunt ad, itaque architecto quisquam? Dignissimos, ex est ullam ut qui quidem officia ipsam? Rerum iusto voluptas enim?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum deleniti exercitationem optio, nulla nam  excepturi aliquam?
                                </p>
                            </div>
                            <nav class="level is-mobile is-paddingless">
                                <div class="level-left">
                                    <div class="level-item is-size-7">
                                        <p>Posted by <span class="has-text-weight-bold is-italic">
                                            {{props.row.first_name}}
                                            </span> 10 Hours ago
                                        </p>
                                    </div>
                                </div>
                                <div class="level-right">
                                    <div class="level-item is-size-7">
                                        <span>
                                            <b-icon pack="fas" size="is-small" 
                                                :icon="props.row.gender === 'Male' ? 'comment' : 'comments'">
                                            </b-icon>
                                            2
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


    </div>
    
</template>

<script>

export default {
    name: 'forum',
    components: {},
    data(){
        return {
            data: [
                    { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                    { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                    { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                    { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                    { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
                ],
            
        }
    },
    methods:{
        entryClicked(row){
            console.log(row)
            // this.$buefy.modal.open()
        }
    },
    created(){},
}
</script>

<style lang="css" scoped>


.media .content {
    margin-bottom: 0.1rem !important;
}

</style>