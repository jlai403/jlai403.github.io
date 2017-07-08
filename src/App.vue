<template>
<router-view></router-view>
</template>

<script>

</script>

<style lang="scss">
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "~bootstrap-sass/assets/stylesheets/bootstrap";
@import "styles/layout.scss";
@import "styles/variables/colors.scss";

body,
html {
    height: 100%;
    width: 100%;

    font-family: 'Roboto Condesed', 'Avenir', 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
