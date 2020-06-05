

<template>

<section>
    <b-modal :active.sync="is_modal_open" has-modal-card :can-cancel="false">
        <div class="modal-card">
            <header class="modal-card-head">
                <div class="modal-card-title">
                    Let's Connect
                </div>
                <button class="delete has-background-black-ter" @click="closeLoginModal" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="buttons is-block">

                    <a
                        class="button github-button has-background-dark is-fullwidth"
                        href="/api/auth/github"
                    >
                        <span class="icon">
                            <i class="fab fa-github has-text-white"></i>
                        </span>
                        <span class="has-text-white">Sign In with GitHub</span>
                    </a>

                    <a 
                        class="button google-button is-fullwidth"
                        href="/api/auth/google"
                    >
                        <span class="icon">
                            <i class="fab fa-google has-text-white"></i>
                        </span>
                        <span class="has-text-white">Sign In with Google</span>
                    </a>

                </div>
            </section>
        </div>

    </b-modal>
</section>
    
</template>


<script>
export default {
    name: 'login',
    props: ['status'],
    components: {},
    data(){
        return{
            is_modal_open: false,
        }
    },
    methods:{
        closeLoginModal(){
            this.is_modal_open = false;
            this.$emit('closeLoginModal', false);
        }
    },
    created(){
        this.is_modal_open = this.status;
    }
}
</script>

<style scoped>

.google-button{
    background-color: #E74B37;
}
.google-button:hover{
    background-color: hsl(7, 59%, 48%);
}

.github-button:hover{
    background-color: hsl(0, 0%, 10%) !important;
}

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
.modal-card .modal-card-head .button {
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
}

</style>