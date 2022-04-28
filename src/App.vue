<template>
  <component :is="this.$route.meta.layout">
    <router-view/>
  </component>
</template>

<script>
export default {
  name: 'App',

  created() {
    this.$store.dispatch("fetchUsers")

    console.log(this.$store.getters.getUsers)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
