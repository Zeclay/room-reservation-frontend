<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">ประวัติการจอง</h3></center>
      <br>
    </div>
    <br>
    <div class="background-search">
    <b-container fluid>
      <b-row>
      </b-row>
      <b-row>
        <b-col>
          <b-table :items="productItems" :fields="fields">
            <template #cell(operators)>
              <p class="text-warning">รอการอนุมัติ</p>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
  </Auth>
</template>

<script>
import Auth from '../components/Auth.vue'
export default {
  Date: 'Home',
  components: {
    Auth
  },
  data () {
    return {
      fields: [
        { key: 'RoomCode', label: 'เลขห้อง' },
        { key: 'Date', label: 'วันที่จอง' },
        { key: 'TimeStart', label: 'เวลาเริ่มต้น' },
        { key: 'TimeEnd', label: 'เวลาสิ้นสุด' },
        { key: 'operators', label: 'สถานะ' }
      ],
      productItems: [
        { RoomCode: '3C02', Date: 'IF', TimeStart: '13:00', TimeEnd: '15:00' }

      ]
    }
  }
}
</script>
<style>
.background-search {
  background-color: gray;
  height: 100%;
  width: 100%;
}
.position-buttonSelected {
  margin-left: 100%;
}
</style>
