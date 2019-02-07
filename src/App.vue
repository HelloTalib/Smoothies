<template>
  <div id="app">
    <div id="nav">
      <navbar/>
    <router-view/>
    </div>
  </div>
</template>


<script>
import Navbar from "@/components/Layout/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">

</style>
