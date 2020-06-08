

<template>

    <div class="container is-fluid has-text-light">

        <!-- <b-tabs type="" size="" v-model="activeTab" :multiline="multiline">

            <template v-for="(tab, index) in tabs">
                <b-tab-item :key="index" >
                    <template slot="header">
                        <span @dblclick="changeTabName"> {{tab.label}}</span>
                    </template>
                    <div class="xyz">
                        {{tab.content}}
                    </div>
                </b-tab-item>
            </template>

        </b-tabs> -->

        <p
            contenteditable
            @input="onInput"
        >
            {{ content }}
        </p>
        
    </div>
    
</template>

<script>

export default {
    name: 'testView2',
    components: {},
    data(){
        return{
            content: 'hello world',
            tabs: [
                {label: 'Tab 1', content: 'tab 1 content'},
                {label: 'Tab 2', content: 'tab 2 content'},
                {label: 'Tab 3', content: 'tab 3 content'},
                {label: 'Tab 4', content: 'tab 4 content'},
            ],
            activeTab: 0,
            multiline: true
        }
    },
    methods:{
        onInput(e) {
            console.log(e.target.innerText);
        },
        changeTabName(){
            alert('Change tab name')
        },
        addNewTab(){
            alert('New tab')
        }
    },
    created(){
        
    },
}
</script>

<style lang="css" scoped>

::v-deep .b-tabs .tabs li.is-active span{
    color: whitesmoke;
}
::v-deep .b-tabs .tabs li.is-active a{
    color: whitesmoke;
    border-bottom-color: white;
}

::v-deep .b-tabs nav.tabs ul{
    border-bottom-color: hsl(0, 0%, 7%);
}

::v-deep .b-tabs nav.tabs li{
    border-bottom-color: hsl(0, 0%, 7%);
}

</style>