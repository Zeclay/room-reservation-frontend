<template>
  <div id="app" >
      <b-row >
        <!-- <b-col cols="2" class="Menubar"><Menu />
        </b-col> -->
        <b-col  >
          <NavBar />
       </b-col>
      </b-row>
      <b-row>
      <b-col >
          <b-row>
            <b-col cols="2" class="border border-dark">
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
  components: {
    NavBar,
    Menu
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ce0606;
}

#nav a.router-link-exact-active {
  color: #bd0000;
}

</style>
