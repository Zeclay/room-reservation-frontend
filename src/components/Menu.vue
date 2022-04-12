<template>
  <div class="Menubar">
    <center><button class="button">ค้นหาห้อง</button></center>
    <center><button class="button">การจอง</button></center>
    <center><button class="button">ประวัติการจอง</button></center>
    <center><button class="button">พิจารณาการจอง</button></center>
    <center><button class="button">จัดการข้อมูลห้อง</button></center>
   <center> <button class="button">จัดการข้อมูลผู้ใช้</button></center>
    <center><button class="button">จัดการผู้พิจารณา</button></center>
    <center><button class="button">จัดการหน่วยงาน</button></center>
    <center><button class="button">จัดการตึก</button></center>

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
.button {
  background-color: rgb(235, 224, 13); /* Green */
  border: 1px solid rgba(0, 0, 0, 0.993);
  color: rgb(0, 0, 0);
  padding: 33px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  width: 308.5px;
  display: block;
}

.button:not(:last-child) {
  border-bottom: none; /* Prevent double borders */
}

.button:hover {
 background-color: rgb(199, 189, 15);
}
</style>
