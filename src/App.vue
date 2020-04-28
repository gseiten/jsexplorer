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

<style lang="scss">

    // Import Bulma's core
    @import "~bulma/sass/utilities/_all";

    // Set your colors
    $primary: #8c67ef;
    $primary-invert: findColorInvert($primary);

    // Setup $colors to use as bulma classes (e.g. 'is-twitter')
    $colors: (
      "primary": ($primary, $primary-invert),
    );

    // Links
    $link: $primary;
    $link-invert: $primary-invert;
    $link-focus-border: $primary;




    /* @import '../node_modules/bulma/css/bulma.css'; */

    /* #app {
        padding: 0;
        margin: 0;
    } */

</style>
