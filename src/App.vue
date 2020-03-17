<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="css">
    @import '../node_modules/bulma/css/bulma.css';

    #app {
        padding: 0;
        margin: 0;
    }

</style>
