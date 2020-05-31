
<template>

    <div class="main-container">

        <!-- <div class="level has-background-black-ter">
            <div class="level-left">
                <div class="level-item">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis veritatis deleniti, placeat omnis totam quod ut eveniet! Blanditiis laborum iste praesentium, tenetur ipsum quibusdam dolore itaque voluptas rerum eligendi.
                </div>
            </div>
        </div> -->

        <div class="main-content">
            <div class="card" v-for="(item, index) in articles" :key="index">
                <div class="card-content">
                    <p class="title is-4">
                        {{ item }}
                    </p>
                    <p class="subtitle">
                        Gseiten
                    </p>
                </div>
            </div>
        </div>
    
    </div>
    
</template>

<script>

import axios from 'axios'; 

export default {
    name: 'resources',
    components: {},
    data(){
        return{
            articles: []
        }
    },
    methods:{},
    created(){
        axios.get('http://api.icndb.com/jokes/random/50').then(response => {
			response.data.value.forEach(element => {
				this.articles.push(element.joke);
			});
		}).catch(error => {
			this.$buefy.snackbar.open({message: error, type: 'is-danger'})
		}).then(() => {});
    },
}
</script>

<style lang="css" scoped>

/* .main-container{
    margin-left: 12px;
    margin-right: 12px;
} */

.main-container .level{
    margin: 0 22px;
    color: whitesmoke;
    background-color: teal;
}

@media(min-width: 768px){
    .main-content{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content:center;
        /* align-content: stretch; */
    }
}

::v-deep .card{
    flex-basis: 19%;
    margin: 5px;
    background-color: hsl(0,0%,14%);
    color: whitesmoke;
}

::v-deep .card:hover{
    background-color: hsl(0,0%,7%);
}

::v-deep p{
    color: whitesmoke;
}


</style>