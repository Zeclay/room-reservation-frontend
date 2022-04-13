<template>
  <div id="app">
    <b-row>
      <!-- <b-col cols="2" class="Menubar"><Menu />
        </b-col> -->
      <b-col class="border border-dark">
        <NavBar />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-row>
          <b-col cols="2%" class="border border-dark" v-if="isLogin">
            <Menu />
          </b-col>
          <b-col>
            <router-view />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import Menu from './components/Menu.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    NavBar,
    Menu
  },
  computed: {
    isLogin () {
      return this.$store.getters['auth/isLogin']
    }
  }

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav {
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #ce0606;
}

#nav a.router-link-exact-active {
  color: #bd0000;
}
</style>
