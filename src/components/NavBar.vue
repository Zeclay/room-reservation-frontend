<template>

  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
  <b-navbar toggleable="lg"  class="bg-color">
    <img src="../assets/buu1.png" width="110px" height="110 px">&emsp;&emsp;
    <b-navbar-brand href="/" class="far fa-calendar-alt" style="font-size:150% ;">   Studyroom Reservation System</b-navbar-brand>
    <b-navbar style="font-size:150%; right: 365px"> <br><br>ระบบการจองห้องศึกษาค้นคว้ากลุ่ม มหาวิทยาลัยบูรพา</b-navbar>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="ตารางการจอง" right>
          <b-dropdown-item href="#">เช็ควันที่-เวลา</b-dropdown-item>
          <b-dropdown-item href="#">เช็คผล</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="ช่วยเหลือ" right>
          <b-dropdown-item href="#">Center</b-dropdown-item>
          <b-dropdown-item href="#">คำแนะนำ</b-dropdown-item>
        </b-nav-item-dropdown>

          <b-dropdown-item href="/login" v-if="!isLogin">เข้าสู่ระบบ</b-dropdown-item>
          <b-dropdown-item @click="logout()" href="/" v-if="isLogin">ออกจากระบบ</b-dropdown-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>
<script>
export default {
  computed: {
    isLogin () {
      return this.$store.getters['auth/isLogin']
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
    }
  }
}

</script>
<style>
.gg {
   width: 100%;
}
.navcolor{
  background-color: #da0000;
}
.bg-color{
  background-color : rgba(215, 200, 39, 0.993);
}

</style>
