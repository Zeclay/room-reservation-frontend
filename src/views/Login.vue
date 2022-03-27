<template>
<div>
<div class="row" style="padding-top:3cm">

  <div class="col-md-6 offset-md-3" style="border: black">
    <div>
    <div>
      <h3>Login</h3>
      <hr />
    </div>
    <form action="">
      <div class="from-group">
        <label>Username</label>
        <input type="text" class="form-control" />
      </div>
      <div class="from-group">
        <label>Password</label>
        <input type="password" class="form-control" />
      </div>
      <div class="my-3">
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  </div>
  </div>
</div></div>

</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
<style>

</style>
