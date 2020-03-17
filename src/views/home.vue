
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
                    <a class="button is-dark" href="#">
                      <!-- <span class="icon">
                        <i class="fab fa-twitter"></i>
                      </span> -->
                      <span>
                        Sign In
                      </span>
                    </a>
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


        <div style="padding: 1em">
            <router-view>
            </router-view>
        </div>


    </div>
</template>

<script>

    export default {
        name: "home",
        components: {

        }
    }
</script>

<style>
</style>
