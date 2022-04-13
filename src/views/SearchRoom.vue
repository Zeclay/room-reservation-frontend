<template>
<Auth> <div class="background.menu">
  <div class="home" >
<center><h5>ค้นหาห้อง</h5></center>
<center><div class="background-search" style="font-size:120%">ตึก :
<select style="margin-right:63%;margin-top: 20px;width:200px;height:40px;font-size:80%" >
 <option >select</option>
</select>
<div style="margin-left:400px;margin-top:-40px">ประเภทห้อง :
<select style="width:200px;height:40px;font-size:80%" >
  <option>select</option>
</select>
</div>
<div style="margin-right:65%;margin-top:50px">ชื่อห้อง :
<select style="width:200px;height:40px;font-size:80%" >
  <option>select</option>
</select>
</div>
<div style="margin-left:360px;margin-top:-40px">จำนวนคนที่รองรับ :
<select style="width:200px;height:40px;font-size:80%" >
  <option>select</option>
</select>
</div>
<button style="margin-left:1000px;margin-top:60px;width:10%;background-color:greenyellow">ค้นหา</button><br><br>
</div></center>
<br>
<center><div class="background-table" >
  <table style="margin-top:-25%;width:80%">
  <tr >
    <th>ตึก</th>
    <th>ห้อง</th>
    <th>ประเภท</th>
    <th>ความจุ(ที่นั่ง)</th>
  </tr>
  <tr>
    <td>***</td>
    <td>***</td>
    <td>***</td>
    <td>***</td>
  </tr>
  <tr>
    <td>***</td>
    <td>***</td>
    <td>***</td>
    <td>***</td>

  </tr>
</table>

</div></center>
  </div>
  </div>
  </Auth>
</template>

<script>

import Auth from '../components/Auth.vue'
export default {
  name: 'Home',
  components: {

    Auth
  }
}

</script>
<style>
.background-table{
  background-color: gray;
  padding-top:25% ;
  width: 90%;
  height: 90%;

}

.background-search{
  background-color: gray;
    padding-top:5% ;
  height: 90%;
  width: 90%;
}
.position-buttonSelected{
  margin-left: 100% ;
}
.background.menu{
  background-color: rgb(170, 162, 21);
}
.background-search-button{
  background-color: greenyellow;
}
table {
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
}
</style>
