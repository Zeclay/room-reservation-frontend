
<template>

<div>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
<div class="row" style="padding-top:3cm">

  <div class="col-md-6 offset-md-3" style="border: black">
    <div class="div">
    <div>
      <center><h3 class="far fa-calendar-alt"> BUU E-Booking</h3></center>
      <hr style="width:70%">
    </div>
    <form action="" @submit="onSubmit" >
      <div class="from-group">
        <!-- <label>Username</label> -->
        <input type="email" class=" form-control " placeholder="Username" name="username" v-model="form.email" required>
      </div> <br>
      <div class="from-group">
        <!-- <label>Password</label> -->
        <input type="password" class="form-control" placeholder="Password" name="password" v-model="form.password" required>
      </div>
      <div class="my-3">
        <button type="submit" class="button" style="width:100%"  required>
          เข้าสู่ระบบ
        </button>
      </div>
    </form>
    <div style="margin-left:-85%">

      <input type="checkbox"> จดจำชื่อผู้ใช้
    </div>
  </div>
  <div  style="margin-left:-84.5%">
    <a  href="#" class="fa fa-question-circle ">ลืมรหัสผ่านของฉัน</a>
  </div>
  </div>
</div></div>

</template>
<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (event) {
      console.log(this.form)
      event.preventDefault()

      // alert(JSON.stringify(this.form))
      this.$store.dispatch('auth/login', this.form)
    }
  }
}

</script>
<style>
.div {
    width: 100%;
    padding: 100px;
    border: 1px solid rgb(0, 0, 0);
    margin: 1px;
}
.button {
  display: inline-block;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #404040;
  border: none;
  border-radius: 20px;
}

.button:active {
  background-color: #506050;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.font-color{
  font-color:black;
}
a:link {
  color: rgb(0, 0, 0);
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: rgb(0, 0, 0);
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}

</style>
