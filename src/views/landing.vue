
<template>
    <div class="has-background-dark" style="">

        <nav class="navbar is-transparent is-fixed is-dark">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <img src="../assets/js5.png" alt="JS Explorer: Debug JavaScript to the core">
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" href="#">
                Home
              </a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href="#">
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
                            <span>
                              Sign In
                            </span>
                          </a>
                      </router-link>
                  </p>
                  <p class="control">
                    <a class="button is-dark is-active" href="#">
                      <!-- <span class="icon">
                        <i class="fas fa-download"></i>
                      </span> -->
                      <span>Register</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <vue-particles color="#dedede" style="position: absolute"></vue-particles>

        <div class="columns" style="padding-left: 10em; padding-right: 10em;">

            <div class="column is-4">
                <section class="hero is-dark is-large">
                    <div class="hero-body">
                        <div class="container">
                            <div class="is-pulled-right">
                                <h1 class="title is-1">
                                Learn JavaScript the right way.
                                </h1>
                                <h2 class="subtitle is-4">
                                Visualize execution, analyze performance, debug code snippets and much more.
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="column">
                <section class="hero is-dark is-fullheight">
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
