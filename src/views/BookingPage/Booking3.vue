<template>
<Auth> <div class="background.menu">
  <div class="home" >
<center>
  <div>
  <h2 style="padding-top:2%">การจอง</h2>
  </div>
</center>
<center>
<div class="background-search">
    <b-container fluid>
      <b-row>
      </b-row>
      <b-row>
        <b-col>
          <b-table :items="productItems" :fields="fields" style="text-align: center;">
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</center>
<br> <br>
<div class="background-search " style="padding: 2%" >

</div>
  </div>
  </div>
  </Auth>
</template>

<script>
import Auth from '../../components/Auth.vue'
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
  height: 100%;
  width: 100%;
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
.p {
  position: absolute;
  left: 40%;
}
.p2 {
  position: absolute;
  left: 57%;
}
.p3 {
  position: absolute;
  left: 10%;
}
</style>
