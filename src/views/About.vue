<template>
<Auth>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  </Auth>
</template>

<script>
// @ is an alias to /src
import Auth from '../components/Auth.vue'
export default {
  name: 'Home',
  components: {
    Auth
  }
}
</script>
