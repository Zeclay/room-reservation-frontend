<template>
  <div class="Menubar">
    <button class="button">
      <i class="fa fa-search" style="font-size: 30px"></i>&nbsp; ค้นหาห้อง
    </button>

    <button class="button">
      <i class="fa fa-calendar" style="font-size: 30px"></i>&nbsp; การจอง
    </button>

    <button class="button">
      <i class="fas fa-clipboard-list" style="font-size: 30px"></i>&nbsp;
      ประวัติการจอง
    </button>
    <button class="button">
      <i class="fas fa-clipboard-check" style="font-size: 30px"></i>&nbsp;
      พิจารณาการจอง
    </button>
    <button class="button">
      <i class="fas fa-door-closed" style="font-size: 30px"></i>&nbsp;
      จัดการข้อมูลห้อง
    </button>
    <button class="button">
      <i class="fas fa-user-cog" style="font-size: 30px"></i>&nbsp;
      จัดการข้อมูลผู้ใช้
    </button>
    <button class="button">
      <i class="fas fa-file-alt" style="font-size: 30px"></i>&nbsp;
      จัดการผู้พิจารณา
    </button>
    <button class="button">
      <i class="fas fa-briefcase" style="font-size: 30px"></i>&nbsp;
      จัดการหน่วยงาน
    </button>
    <button class="button">
      <i class="fas fa-building" style="font-size: 30px"></i>&nbsp; จัดการตึก
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style>
.app-menu {
  background-color: rgb(136, 134, 134);
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
.button {
  background-color: rgba(215, 200, 39, 0.993); /* Green */
  border: 1px solid rgba(0, 0, 0, 0.993);
  color: rgb(0, 0, 0);
  padding: 28px 32px;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  width: 308.5px;
  display: block;
}

.button:not(:last-child) {
  border-bottom: none; /* Prevent double borders */
}

.button:hover {
  background-color: rgb(170, 162, 21);
}
</style>
