
<template>

<div class="has-background-black-bis">

<nav class="navbar is-fixed-top has-background-black-bis">

	<div class="navbar-brand">
		<div class="navbar-item">
			<img src="../assets/kludge1.png" alt="Kludge" style="width:30px; min-height:30px" />
		</div>
		<div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>

	<div id="navbarExampleTransparentExample" class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item has-background-black-bis">

				<div class="buttons" v-if="$route.name == 'panel'" >
					<div class="button is-dark is-small" @click="emitGlobalExecutionEvent('execute')">
						<span class="icon">
							<i class="fas fa-play"></i>
						</span>
						<b-tooltip
							:label="runMessage"
							type="is-dark"
							position="is-bottom"
							:delay="500"
							multilined>
							<span class="is-size-6">Run</span>
						</b-tooltip>
					</div>

					<div class="button is-dark is-small" disabled>
						<span class="icon">
							<i class="fas fa-save"></i>
						</span>
						<span class="is-size-6">Save</span>
					</div>

					<div class="button is-dark is-small" disabled>
						<span class="icon">
							<i class="fas fa-align-right"></i>
						</span>
						<span class="is-size-6">Beautify</span>
					</div>

					<div class="button is-dark is-small" disabled>
						<span class="icon">
							<i class="fas fa-share"></i>
						</span>
						<span class="is-size-6">Share</span>
					</div>

					<div class="button is-dark is-small" disabled>
						<span class="icon">
							<i class="fas fa-download"></i>
						</span>
						<span class="is-size-6">Download</span>
					</div>
				</div>

				<div class="buttons" v-if="$route.name == 'forum'">
					<div class="button is-dark is-small" @click="emitGlobalExecutionEvent('newpost')">
						<span class="icon">
							<i class="fas fa-plus"></i>
						</span>
						<span class="is-size-6">New Post</span>
					</div>
				</div>


				
			</a>
		</div>

		<div class="navbar-end" v-if="$route.name == 'panel'">
			<div class="navbar-item">
				<v-select
				style="min-width: 200px"
				v-model="selectedLanguage"
				:options="['JavaScript', 'Python']"
				></v-select>
			</div>
			<div class="navbar-item">
				<b-dropdown position="is-bottom-left" append-to-body aria-role="menu" trap-focus>
					<button class="button is-dark has-background-black-bis is-small" slot="trigger">
						<b-icon pack="fas" icon="cog"></b-icon>
					</button>
					<b-dropdown-item>Editor Theme</b-dropdown-item>
					<b-dropdown-item>Font Size</b-dropdown-item>
				</b-dropdown>
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
import { EventBus } from "../main.js";
import sidebar from "../components/sidebar.vue";
export default {
  name: "home",
  components: {
    sidebar
  },
  data() {
    return {
      selectedLanguage: "JavaScript",
      runMessage: "use ctrl+enter as shortcut. command+enter for mac."
    };
  },
  methods: {
    emitGlobalExecutionEvent(method) {
      EventBus.$emit(method);
	},

	
  },
  watch: {
    selectedLanguage() {
      this.$store.commit("changeSelectedLanguage", this.selectedLanguage);
    }
  },
  created() {
    this.$store.commit("changeSelectedLanguage", this.selectedLanguage);
  }
};
</script>

<style>
</style>
