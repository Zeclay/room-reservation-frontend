<template>

  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
  <b-navbar toggleable="lg"  class="bg-color">
    <img src="../assets/buu1.png" width="100px" height="100 px">&emsp;
    <b-navbar-brand href="#" class="far fa-calendar-alt">   Studyroom Reservation System <br><br>ระบบการจองห้องศึกษาค้นคว้ากลุ่ม มหาวิทยาลัยบูรพา</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="user" right>
          <b-dropdown-item href="/logout">ออกจากระบบ</b-dropdown-item>
          <b-dropdown-item href="#">สมัครสมาชิก</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>
<script>
export default {

}

</script>
<style>
.gg {
   margin-top:-50px ;
}
.navcolor{
  background-color: #da0000;
}
.bg-color{
  background-color : rgba(215, 200, 39, 0.993);
}

</style>
