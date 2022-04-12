<template>
<Auth>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  </Auth>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Auth from '../components/Auth.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Auth
  }
}
</script>
