<template>
  <v-app>
    <NavBar></NavBar>   
    <v-main>
      <router-view/>
    </v-main>
    <TheFooter></TheFooter> 
  </v-app>
</template>

<script lang="js">
  import NavBar from "./components/NavBar.vue";
  import TheFooter from "./components/TheFooter.vue";
  export default {
    name: 'App',
    components:{
      NavBar,
      TheFooter
    },
    data: () => ({
      //
    }),
  };
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
