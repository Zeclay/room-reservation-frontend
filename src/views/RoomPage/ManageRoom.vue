<template>
  <Auth>
    <div class="home">
      <center><h3 style="padding-top: 2%">การจัดการข้อมูลห้อง</h3></center>
      <br />
      <div style="padding-left: 1%">
        <b-form inline>
          <label class="sr-only" for="inline-form-input-roomCode">Name</label>
          <b-button style="background-color: "
            ><i class="fa fa-search"></i></b-button
          >&nbsp;
          <b-form-input
            id="inline-form-input-BuildingCode"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Search..."
            style="width: 25%"
            v-model="searchString"
          ></b-form-input>
          <RoomForm :room="selectedItem" ref="RoomForm" @save="save"></RoomForm>
        </b-form>
      </div>
    </div>
    <br />
    <div class="background-search">
      <b-container fluid>
        <b-row> </b-row>
        <b-row>
          <b-col>
            <br />
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
                <tr v-for="(room, idx) in filteredRooms" :key="idx">
                  <td>{{ idx + 1 }}</td>
                  <td>{{ room.code }}</td>
                  <td>{{ room.description }}</td>
                  <td>{{ room.floor }}</td>
                  <td>{{ room.seat }}</td>
                  <td>{{ room.type }}</td>
                  <td>{{ room.approve_id.description }}</td>
                  <td>{{ room.building_id.name_build }}</td>
                  <td>{{ room.agency_id.name }}</td>
                  <td>
                    <b-button variant="warning" @click="editRoom(room)"
                      >แก้ไข</b-button
                    ><b-button
                      @click="deleteRoom(room)"
                      class="ml-3"
                      variant="danger"
                      >ลบ</b-button
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
import RoomForm from './RoomForm.vue'
import axios from 'axios'
export default {
  roomCode: 'Home',
  components: {
    Auth,
    RoomForm
  },
  data () {
    return {
      searchString: '',
      rooms: [],
      selectedItem: null
    }
  },
  computed: {
    filteredRooms () {
      const filteredRooms =
        this.searchString === ''
          ? this.rooms
          : this.rooms.filter(
            (ap) =>
              Object.values(ap).join('').indexOf(this.searchString) !== -1
          )
      return filteredRooms
    }
  },
  methods: {
    getRoom () {
      const self = this
      axios
        .get('http://localhost:3000/Rooms', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then((response) => {
          console.log(response)
          self.rooms = response.data
        })
    },
    deleteRoom (item) {
      if (confirm(`คุณต้องการจะลบข้อมูลห้อง ${item.code} หรือไม่`)) {
        axios
          .delete('http://localhost:3000/Rooms/' + item._id, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(console.log('Delete ' + item.description))
      }
      this.$router.go(0)
    },
    save (room) {
      console.log('Submit', room)
      if (room._id === '') {
        // Add New
        axios
          .post('http://localhost:3000/rooms', room, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(
            function (response) {
              this.getRoom()
            }.bind(this)
          )
          .catch(() => {})
      } else {
        // Update
        axios
          .put('http://localhost:3000/rooms/' + room._id, room, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(
            function (response) {
              this.getrooms()
            }.bind(this)
          )
          .catch(() => {})
      }
      this.$router.go(0)
    },
    editRoom (item) {
      this.selectedItem = JSON.parse(JSON.stringify(item))
      this.$nextTick(() => {
        this.$refs.RoomForm.show()
      })
    }
  },
  mounted () {
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
