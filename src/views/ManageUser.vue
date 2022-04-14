<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">จัดการข้อมูลผู้ใช้</h3></center>
      <br>
      <div style="padding-left: 1%">
  <b-form inline>
    <label class="sr-only" for="inline-form-input-BuildingCode">Name</label>
    <b-form-input
      id="inline-form-input-BuildingCode"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="ค้นหาผู้ใช้"
      style="width: 25% "
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
                <th>ชื่อ-นามสกุล</th>
                <th>ชื่อผู้ใช้</th>
                <th>อีเมล</th>
                <th>สังกัดหน่วยงาน</th>
                <th>ตำแหน่ง</th>
                <th>Roles</th>
                <th>การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{user._id}}</td>
                <td>{{user.name}} {{user.surname}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
                <td>{{user.agency.name}}</td>
                <td>{{user.position}}</td>
                <td>{{user.roles}}</td>
                <td><b-button variant="warning" @click="editUser(user)">แก้ไข</b-button
              ><b-button
                @click="deleteUser(user)"
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
      users: []
    }
  },
  methods: {
    getUser () {
      const self = this
      axios.get('http://localhost:3000/users', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        console.log(response)
        self.users = response.data
      })
    },
    deleteUser (item) {
      if (confirm(`คุณต้องการจะลบผู้ใช้ ${item.name} หรือไม่`)) {
        axios.delete('http://localhost:3000/users/' + item._id, {
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
    this.getUser()
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
