<template>
  <div class="app-menu min-vh-100">
    <!-- <b-img
      src="../assets/buu.png"
      width="150%"
      center
      class="pt-2 pb-2"
    ></b-img> -->
    <b-nav vertical>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style>
.app-menu {
  background-color: grey;
  font-size: 15pt;
}
.sub-menu {
  padding-left: 10pt;
}
.nav-link {
  color: white;
  text-align: left;
}
.nav-link:hover {
  color: gold;
}
</style>
