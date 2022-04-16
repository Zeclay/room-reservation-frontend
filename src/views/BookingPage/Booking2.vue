<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">การจอง</h3></center>
      <br>
      <div style="padding-left: 1%">
  <b-form inline>
    <label class="sr-only" for="inline-form-input-BuildingCode">Name</label>
    <b-button style="background-color:gray">ค้นหาห้อง :</b-button>&nbsp;&nbsp;
    <b-form-input
      id="inline-form-input-BuildingCode"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="ค้นหาห้องที่ต้องการได้ที่นี่..."
      style="width: 25% "
    ></b-form-input>
  </b-form>
      </div>
    </div>
    <br>
    <div class="background-search">
    <b-container fluid>
      <b-row>
      </b-row>
      <b-row>
        <b-col>
          <h4>เลือกห้อง</h4>
          <br>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>เลขห้อง</th>
                <th>รายละเอียดห้อง</th>
                <th>ชั้น</th>
                <th>ความจุที่นั่ง</th>
                <th>ประเภท</th>
                <th>ชุดผู้พิจารณา</th>
                <th>ชื่ออาคาร</th>
                <th>ชื่อหน่วยงาน</th>
                <th>การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(Room,idx) in filteredRooms" :key="idx">
                <td>{{idx+1}}</td>
                <td>{{Room.code}}</td>
                <td>{{Room.description}}</td>
                <td>{{Room.floor}}</td>
                <td>{{Room.seat}}</td>
                <td>{{Room.type}}</td>
                <td>{{Room.approve_id.description}}</td>
                <td>{{Room.building_id.name_build}}</td>
                <td>{{Room.agency_id.name}}</td>
                <td><b-button variant="primary" @click="gotoDetail(Room)">ดูรายละเอียด</b-button
              >
              </td>
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
import Auth from '../../components/Auth.vue'
import axios from 'axios'
export default {
  BuildingCode: 'Home',
  props: ['items'],
  components: {
    Auth
  },
  data () {
    return {
      searchString: '',
      Rooms: [],
      selectedItem: null
    }
  },
  methods: {
    getRoom () {
      const self = this
      axios.get('http://localhost:3000/rooms/searchByBuilding/' + localStorage.getItem('lastBuilding'), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        self.Rooms = response.data
      })
    },
    gotoDetail (item) {
      console.log(item)
      localStorage.setItem('lastRoom', item._id) /// /////////////////////////
      localStorage.setItem('lastApprove', item.approve_id._id)
      this.$router.push('/booking3')
    }
  },
  computed: {
    filteredRooms () {
      const filteredRooms = this.searchString === ''
        ? this.Rooms
        : this.Rooms.filter(ap => Object.values(ap).join('').indexOf(this.searchString) !== -1)
      return filteredRooms
    }
  },
  mounted () {
    console.log(localStorage.getItem('lastBuilding'))
    this.getRoom()
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
