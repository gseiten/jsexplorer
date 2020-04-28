
<template>
    <div class="has-background-black-bis" style="">

        <nav class="navbar has-background-black-bis">
          <div class="navbar-brand">
            <div class="navbar-item" >
              <img src="../assets/kludge1.png" alt="Kludge" style="width:30px; min-height:30px">
            </div>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" style="background-color: hsl(0, 0%, 7%)">

					<div class="buttons">
						<div class="button is-dark is-small" @click="emitGlobalExecutionEvent()" >
							<span class="icon">
								<i class="fas fa-play"></i>
							</span>
							<span class="is-size-6">Run</span>
						</div>

						<div class="button is-dark is-small">
							<span class="icon">
								<i class="fas fa-save"></i>
							</span>
							<span class="is-size-6">Save</span>
						</div>
					</div>

                </a>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
				<v-select 
					style="min-width: 200px" 
					v-model="selectedLanguage" 
					:options="['JavaScript', 'Python']"
				></v-select>
              </div>
            </div>
          </div>
        </nav>

        <div class="columns">
			<div class="column is-narrow" style="padding-right: 0">
				<sidebar></sidebar>
			</div>
			<div class="column" style="padding-left: 0">
				<router-view></router-view>
			</div>
        </div>

    </div>
</template>

<script>

	import { EventBus } from '../main.js';
	import sidebar from '../components/sidebar.vue';
    export default {
        name: "home",
        components: {
			sidebar
		},
		data(){
			return {
				selectedLanguage: "JavaScript",
			}
		},
		methods: {

			// callExecMethod(){
			// 	this.$refs.executionButtonRef.execute();
			// },

			emitGlobalExecutionEvent() {
				EventBus.$emit('execute');
			},
		
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
