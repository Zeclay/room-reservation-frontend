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
     <b-button variant="warning" style="width:10%; margin-left: 88%" >ยืนยันการจอง</b-button>
     <br><br>
  </div>
</center>
<br> <br>
<div class="background-search " style="padding: 2%" >
<b-container fluid>
      <b-row>
      </b-row>
      <b-row>
        <b-col>
          <h1>ตารางเวลา</h1>
          <vue-cal : locale='th' style="height: 500px" />
        </b-col>
      </b-row>
    </b-container>
</div>
  </div>
  </div>
  </Auth>
</template>

<script>
import Auth from '../../components/Auth.vue'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import th from '../../locale/th'
export default {
  name: 'Home',
  components: {
    VueCal,
    Auth
  },
  computed: {
    th () {
      return th
    }
  },
  data () {
    return {
      fields: [
        { key: 'RoomId', label: 'ตารางเวลา' },
        { key: 'RoomDetail', label: 'รายละเอียด' },
        { key: 'Amount', label: 'ความจุ' }
      ],
      productItems: [
        { RoomId: '3C02', RoomDetail: 'บริการคอมพิวเตอร์', Amount: '40' }
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
  position: relative;
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
