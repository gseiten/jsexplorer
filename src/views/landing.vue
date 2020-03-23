
<template>
    <div class="has-background-black-ter " style="">

        <nav class="navbar is-transparent has-background-black-ter">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <img src="../assets/kludge1.png" alt="Kludge" style="width:50px; min-height:50px">
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
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

        <vue-particles color="#fff" style="position: absolute"></vue-particles>

        <div class="columns" style="padding-left: 10em; padding-right: 10em;">

            <div class="column is-4">
                <section class="hero has-background-black-ter is-large">
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
</template>

<script>

    export default {
        name: "landing",
        components: {

        }
    }
</script>

<style>
</style>
