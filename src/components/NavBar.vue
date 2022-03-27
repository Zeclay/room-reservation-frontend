<template>
  <div>
    <b-navbar>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{currentUser}}</em>  <!-- User's name -->
          </template>
          <b-dropdown-item href="/profile" v-if="isLogin">Profile</b-dropdown-item>
          <b-dropdown-item href="/" v-if="isLogin">Sign Out</b-dropdown-item>
          <b-dropdown-item href="/login" v-if="!isLogin">Login</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLogin: false,
      currentUser: 'User',
      user: ''
    }
  },
  methods: {
    checkLogin () {
      if (this.isLogin === false) {
        this.currentUser = 'User'
      } else if (this.isLogin === true) {
        this.currentUser = this.user
      }
    }
  },
  mounted () {
    this.checkLogin()
  }

}
</script>
<style></style>
