
<template>
    <div class="has-background-black-ter" style="">

        <nav class="navbar is-dark has-background-black-ter is-fixed-top">

          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <img src="../assets/kludge1.png" alt="Kludge" style="width:50px; min-height:50px">
            </a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
				:class="{'is-active': isBurgerOpen}" @click="isBurgerOpen = !isBurgerOpen"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
          </div>

          <div class="navbar-menu has-background-black-ter" id="navbarExampleTransparentExample" :class="{'is-active': isBurgerOpen}">
            <div class="navbar-start">
              <a class="navbar-item has-text-light" href="#">
                Home
              </a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link has-text-light" href="#">
                  Features
                </a>
              </div>
            </div>
            <div class="navbar-end">
              <div class="navbar-item">
                <div class="field is-grouped">
                  <p class="control">
                      <router-link to="/panel">
                          <a class="button is-dark" href="/panel">
                            <span class="icon">
                              <i class="fas fa-plus"></i>
                            </span>
                            <span>
                              Start
                            </span>
                          </a>
                      </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>



        </nav>

        <!-- <vue-particles color="#fff" style="position: absolute">
		</vue-particles> -->

		<div class="container" style="">
        <div class="columns">

            <div class="column is-4">
                <section class="hero has-background-black-ter is-fullheight">
                    <div class="hero-body">
                        <div class="container">
                            <div class="is-pulled-right">
                                <h1 class="title has-text-light is-1">
									Learn, Build & Debug Code the right way.
                                </h1>
                                <h2 class="subtitle has-text-grey-light is-4">
									Visualize execution, analyze performance, debug code snippets and much more.
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="column">
                <section class="hero has-background-black-ter has-text-light is-fullheight">
                    <div class="hero-body">
                        <div class="container">
                            <figure class="image">
                                <img src="@/assets/coding1.svg" >
                            </figure>
                        </div>
                    </div>
                </section>
            </div>
        </div>
		</div>




    </div>
</template>

<script>

    export default {
        name: "landing",
        components: {

        },
		data() {
			return {
				isBurgerOpen: false,
			}
		}
    }
</script>

<style>
</style>
