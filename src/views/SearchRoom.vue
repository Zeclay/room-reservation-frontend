<template>
<Auth> <div class="background.menu">
  <div class="home" >
<center><h3 style="padding-top:2%">ค้นหาห้อง</h3></center>
<br>
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
<b-button style="margin-left:1000px;margin-top:60px;width:10%;" variant="success">ค้นหา</b-button><br><br>
</div>

</center>
<br>
<center>
<div class="background-search">
    <b-container fluid>
      <b-row>
      </b-row>
      <b-row>
        <b-col>
          <b-table :items="productItems" :fields="fields">
            <template #cell(operators)>
              <b-button variant="warning">แก้ไข</b-button
              ><b-button
                class="ml-3"
                variant="danger"
                >ลบ</b-button
              >
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</center>
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
  },
  data () {
    return {
      fields: [
        { key: 'BuildingId', label: 'ไอดี' },
        { key: 'BuildingCode', label: 'รหัสตึก' },
        { key: 'BuildingName', label: 'ชื่อตึก' },
        { key: 'operators', label: 'การจัดการ' }
      ],
      productItems: [
        { BuildingId: 1, BuildingCode: 'IF', BuildingName: 'Informatics' }

      ]
    }
  }
}

</script>
<style>
.background-table{
  background-color: gray;
  padding-top:5% ;
  width: 90%;
  height: 90%;

}

.background-search{
  background-color: gray;
  padding-top: 1%;
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
