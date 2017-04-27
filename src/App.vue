<template>
  <div id="homepage">
    <router-link to="/">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'homepage'
}
</script>

<style lang="scss">
#homepage {
  font-family: 'Avenir', 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  a {
    color: #42b983;
  }
}
</style>
