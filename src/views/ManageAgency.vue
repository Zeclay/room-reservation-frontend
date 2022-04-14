<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">จัดการหน่วยงาน</h3></center>
      <br>
      <div style="padding-left: 1%">
  <b-form inline>
    <label class="sr-only" for="inline-form-input-BuildingCode">Name</label>
    <b-form-input
      id="inline-form-input-BuildingCode"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="ค้นหาหน่วยงาน"
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
                <th>หน่วยงาน</th>
                <th>การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="agency in filteredAgencies" :key="agency.id">
                <td>{{agency._id}}</td>
                <td>{{agency.name}}</td>
                <b-button variant="warning" @click="editAgency(agency)" class="mt-1">แก้ไข</b-button
              ><b-button
                @click="deleteAgency(agency)"
                class="ml-3 mt-1"
                variant="danger"
                >ลบ</b-button
              >
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
      agencys: []
    }
  },
  computed: {
    filteredAgencies () {
      const filteredAgencies = this.searchString === ''
        ? this.agencys
        : this.agencys.filter(ag => Object.values(ag).join('').indexOf(this.searchString) !== -1)
      return filteredAgencies
    }
  },
  methods: {
    getAgency () {
      const self = this
      axios.get('http://localhost:3000/agencys', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        console.log(response)
        self.agencys = response.data
      })
    },
    deleteAgency (item) {
      if (confirm(`คุณต้องการจะลบหน่วยงาน ${item.name} หรือไม่`)) {
        axios.delete('http://localhost:3000/agencys/' + item._id, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }).then(
          console.log('Delete ' + item.name)
        )
      }
      this.$router.go(0)
    }
  },
  mounted () {
    this.getAgency()
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
