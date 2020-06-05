<template>
    
    <div class="sidebar-page has-background-black-bis">
        <section class="sidebar-layout">
            <b-sidebar
                position="static"
				:fullheight="true"
                :fullwidth="false"
                :mobile="mobile"
                :expand-on-hover="expandOnHover"
                :reduce="reduce"
                type="is-dark"
                open
            >
                <div class="p-1">
                    <div class="block">
                        <figure class="image">
                            <img class="" :src="getProfilePicture()" alt="Kludge">
                        </figure>
                    </div>
                    <b-menu class="is-custom-mobile">
                        <b-menu-list label="Menu" >

                            <b-menu-item
                                icon="account" 
                                label="My Profile"
                                :active="this.$store.getters.selectedMenuOption == 'profile' ? true : false"
                                @click="changeRoute('profile')">
                            </b-menu-item>

                            <b-menu-item
                                icon="code-tags" 
                                label="Code Editor"
                                :active="this.$store.getters.selectedMenuOption == 'panel' ? true : false"
                                @click="changeRoute('panel')">
                            </b-menu-item>

                            <b-menu-item 
                                icon="book" 
                                label="Learn Programming" 
                                :active="this.$store.getters.selectedMenuOption == 'resources' ? true : false"
                                @click="changeRoute('resources')">
                            </b-menu-item>

                            <b-menu-item icon="shield-account" label="Administrator">
                                <b-menu-item icon="account" label="Users"></b-menu-item>
                                <b-menu-item icon="cellphone-link" label="Devices"></b-menu-item>
                                <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
                            </b-menu-item>

                            <b-menu-item 
                                icon="forum" 
                                label="Public Space" 
                                :active="this.$store.getters.selectedMenuOption == 'forum' ? true : false"
                                @click="changeRoute('forum')">
                            </b-menu-item>

                        </b-menu-list>
                        <b-menu-list>
                            <b-menu-item label="Expo" icon="link"></b-menu-item>
                        </b-menu-list>
                        <b-menu-list label="Actions">
							<b-menu-item icon="login" label="Login"></b-menu-item>
							<b-menu-item icon="account-plus" label="Register"></b-menu-item>
                        </b-menu-list>
						<b-menu-list label="Misc.">
                            <b-menu-item icon="rss" label="Blog"></b-menu-item>
                            <b-menu-item icon="cat" label="Test View" @click="changeRoute('test-view')"></b-menu-item>
                            <b-menu-item icon="dog" label="Test View 2" @click="changeRoute('test-view-2')"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
                </div>
            </b-sidebar>

        </section>
    </div>
</template>

<script>

export default {
	name: "sidebar",
	components: {},
	data() {
		return {
			expandOnHover: true,
			mobile: "reduce",
            reduce: true,
		};
    },
    methods: {
        changeRoute(path){
            this.$router.push(path).catch(error => { this.$buefy.snackbar.open(error) });
            this.$store.commit("changeSelectedMenuOption", path);
        }, 
        getProfilePicture(){
            return `https://robohash.org/${Math.ceil(Math.random() * 10)}` 
            // return `https://api.adorable.io/avatars/${Math.ceil(Math.random() * 10)}`
        }
    },
    created(){}
};
</script>

<style lang="scss">

.p-1 {
  padding: 1em;
}

.menu-list li a:hover{
    background-color: hsl(0, 0%, 14%);
    color: whitesmoke;
}


.sidebar-page {

    display: flex;
    flex-direction: column;
    // height: calc(100vh - 3.25em);
    // width: 100%;
    // min-height: 100%;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 100%;
    }
}

@media screen and (max-width: 1023px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1024px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>