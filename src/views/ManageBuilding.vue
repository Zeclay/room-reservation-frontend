<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">จัดการตึก</h3></center>
      <br>
      <div style="padding-left: 1%">
  <b-form inline>
    <label class="sr-only" for="inline-form-input-BuildingCode">Name</label>
    <b-form-input
      id="inline-form-input-BuildingCode"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="ค้นหาตึก"
      style="width: 25% "
      v-model="searchString"
    ></b-form-input>
    <b-button>SEARCH</b-button>&nbsp;&nbsp;&nbsp;
       <b-button variant="success">เพิ่มข้อมูล</b-button>
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
          <br>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ไอดี</th>
                <th>รหัสตึก</th>
                <th>ชื่อตึก</th>
                <th>การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="building in filteredBuildings" :key="building.id">
                <td>{{building._id}}</td>
                <td>{{building.name_build}}</td>
                <td>{{building.code}}</td>
                <td><b-button variant="warning" @click="editBuilding(building)">แก้ไข</b-button
              ><b-button
                @click="deleteBuilding(building)"
                class="ml-3"
                variant="danger"
                >ลบ</b-button
              ></td>
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
import Auth from '../components/Auth.vue'
import axios from 'axios'
export default {
  BuildingCode: 'Home',
  components: {
    Auth
  },
  data () {
    return {
      searchString: '',
      buildings: []
    }
  },
  computed: {
    filteredBuildings () {
      const filteredBuildings = this.searchString === ''
        ? this.buildings
        : this.buildings.filter(b => Object.values(b).join('').indexOf(this.searchString) !== -1)
      return filteredBuildings
    }
  },
  methods: {
    getBuilding () {
      const self = this
      axios.get('http://localhost:3000/buildings', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        console.log(response)
        self.buildings = response.data
      })
    },
    deleteBuilding (item) {
      if (confirm(`คุณต้องการจะลบตึก ${item.code} หรือไม่`)) {
        axios.delete('http://localhost:3000/buildings/' + item._id, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }).then(
          console.log('Delete ' + item.code)
        )
      }
      this.$router.go(0)
    }
  },
  mounted () {
    this.getBuilding()
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
