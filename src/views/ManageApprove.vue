<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">จัดการผู้พิจารณา</h3></center>
      <br>
      <div style="padding-left: 1%">
  <b-form inline>
    <label class="sr-only" for="inline-form-input-BuildingCode">Name</label>
    <b-form-input
      id="inline-form-input-BuildingCode"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="ค้นหาผู้พิจารณา"
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
                <th>ชุดผู้พิจารณา</th>
                <th>ผู้พิจารณาที่1</th>
                <th>ผู้พิจารณาที่2</th>
                <th>การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="approve in filteredApproves" :key="approve.id">
                <td>{{approve._id}}</td>
                <td>{{approve.description}}</td>
                <td>{{approve.order_Approve[0].name}} {{approve.order_Approve[0].surname}}</td>
                <td>{{approve.order_Approve[1].name}} {{approve.order_Approve[1].surname}}</td>
                <td><b-button variant="warning" @click="editApprove(approve)">แก้ไข</b-button
              ><b-button
                @click="deleteApprove(approve)"
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
      approves: []
    }
  },
  computed: {
    filteredApproves () {
      const filteredApproves = this.searchString === ''
        ? this.approves
        : this.approves.filter(ap => Object.values(ap).join('').indexOf(this.searchString) !== -1)
      return filteredApproves
    }
  },
  methods: {
    getApprove () {
      const self = this
      axios.get('http://localhost:3000/approves', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        console.log(response)
        self.approves = response.data
      })
    },
    deleteApprove (item) {
      if (confirm(`คุณต้องการจะลบชุดผู้พิจารณา ${item.description} หรือไม่`)) {
        axios.delete('http://localhost:3000/approves/' + item._id, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }).then(
          console.log('Delete ' + item.description)
        )
      }
      this.$router.go(0)
    }

  },
  mounted () {
    this.getApprove()
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
