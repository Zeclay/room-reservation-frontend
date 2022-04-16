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
          <table class="table table-striped table-bordered" style="text-align: center;">
            <thead>
              <th>ลำดับ</th>
              <th>ตึก</th>
              <th>เลขห้อง</th>
              <th>วันที่จอง</th>
              <th>เวลาเริ่มต้น</th>
              <th>เวลาสิ้นสุด</th>
              <th>สถานะ</th>
            </thead>
            <tbody>
              <tr v-for="(book,idx) in booking" :key="idx">
                <td>{{idx+1}}</td>
                <td>{{book.room_id.building_id.code}}</td>
                <td>{{book.room_id.code}}</td>
                <td>{{book.date}}</td>
                <td>{{book.start}}</td>
                <td>{{book.end}}</td>
                <td>{{book.result_status}}</td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </div>
  </Auth>
</template>

<script>
import axios from 'axios'
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
        { key: 'Building', label: 'ตึก' },
        { key: 'Date', label: 'วันที่จอง' },
        { key: 'TimeStart', label: 'เวลาเริ่มต้น' },
        { key: 'TimeEnd', label: 'เวลาสิ้นสุด' },
        { key: 'operators', label: 'สถานะ' }
      ],
      booking: []
    }
  },
  methods: {
    getBooking () {
      const self = this
      axios.get('http://localhost:3000/booking/getbookbyuser/' + JSON.parse(localStorage.getItem('user'))._id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        console.log(response)
        self.booking = response.data
      })
    }
  },
  mounted () {
    this.getBooking()
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
