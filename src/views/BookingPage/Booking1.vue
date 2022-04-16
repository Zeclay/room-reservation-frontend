<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">การจอง</h3></center>
      <br>
      <div style="padding-left: 1%">
  <b-form inline>
    <label class="sr-only" for="inline-form-input-BuildingCode">Name</label>
    <b-button style="background-color: gray"><i class="fa fa-search"></i></b-button>&nbsp;
          <b-form-input
            id="inline-form-input-BuildingCode"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Search..."
            style="width: 25%"
            v-model="searchString"
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
          <h4>อาคาร</h4>
          <br>
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>รหัสอาคาร</th>
                <th>ชื่ออาคาร</th>
                <th>การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(building,idx) in filteredBuildings" :key="idx">
                <td>{{idx+1}}</td>
                <td>{{building.code}}</td>
                <td>{{building.name_build}}</td>
                <td><b-button variant="primary" @click="seeRoom(building._id)">ดูห้อง >>></b-button
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
import Auth from '../../components/Auth.vue'
import axios from 'axios'
export default {
  BuildingCode: 'Home',
  components: {
    Auth
  },
  data () {
    return {
      searchString: '',
      buildings: [],
      selectedItem: null
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
    seeRoom (item) {
      localStorage.setItem('lastBuilding', item) /// /////////////////////////
      this.$router.push('/booking2')
    }
  },
  mounted () {
    this.getBuilding()
  },
  computed: {
    filteredBuildings () {
      const filteredBuildings = this.searchString === ''
        ? this.buildings
        : this.buildings.filter(b => Object.values(b).join('').indexOf(this.searchString) !== -1)
      return filteredBuildings
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
