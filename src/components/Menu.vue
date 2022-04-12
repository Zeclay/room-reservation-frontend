<template>
  <div class="Menubar">
    <button>ค้นหาห้อง</button><br>
    <button>การจอง</button><br>
    <button>ประวัติการจอง</button><br>
    <button>พิจารณาการจอง</button><br>
    <button>จัดการข้อมูลห้อง</button><br>
    <button>จัดการข้อมูลผู้ใช้</button><br>
    <button>จัดการผู้พิจารณา</button><br>
    <button>จัดการหน่วยงาน</button><br>
    <button>จัดการตึก</button>

  </div>
</template>
<script>
export default {
  data () {
    return {

    }
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
</style>
