
<template>
    <div class="has-background-dark" style="">

        <nav class="navbar is-transparent is-fixed is-dark" style="z-index: 100">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <img src="../assets/kludge.png" alt="Kludge" class="image" >
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    <v-select 
					style="min-width: 200px" 
					v-model="selectedLanguage" 
					:options="['JavaScript', 'Python']"
				>	
					</v-select>
                </a>
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

		},
		data(){
			return {
				selectedLanguage: "JavaScript",
			}
		},
		methods: {
		
		},
		watch: {
			selectedLanguage(){
				this.$store.commit('changeSelectedLanguage', this.selectedLanguage)
			}
		},
		created() {
			this.$store.commit('changeSelectedLanguage', this.selectedLanguage)
		},


    }
</script>

<style>
</style>
