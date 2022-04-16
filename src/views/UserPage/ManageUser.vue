<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">จัดการข้อมูลผู้ใช้</h3></center>
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
       <UserForm
                  :users="selectedItem"
                  ref="UserForm"
                  @save="save"
                ></UserForm>
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
                <th>ลำดับ</th>
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
              <tr v-for="(user,idx) in filteredUsers" :key="idx">
                <td>{{idx+1}}</td>
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
import Auth from '../../components/Auth.vue'
import axios from 'axios'
import UserForm from './UserForm.vue'
export default {
  BuildingCode: 'Home',
  components: {
    Auth,
    UserForm
  },
  data () {
    return {
      searchString: '',
      users: [],
      selectedItem: null
    }
  },
  computed: {
    filteredUsers () {
      const filteredUsers = this.searchString === ''
        ? this.users
        : this.users.filter(wo => Object.values(wo).join('').indexOf(this.searchString) !== -1)
      return filteredUsers
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
    },
    save (users) {
      console.log('Submit', users)
      if (users._id === '') {
      // Add New
        axios
          .post('http://localhost:3000/users', users, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(
            function (response) {
              this.getUser()
            }.bind(this)
          )
          .catch(() => {
          }
          )
      } else {
      // Update
        axios
          .put('http://localhost:3000/users/' + users._id, users, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(
            function (response) {
              this.getUser()
            }.bind(this)
          )
          .catch(() => {
          })
      }
      this.$router.go(0)
    },
    editUser (item) {
      this.selectedItem = JSON.parse(JSON.stringify(item))
      this.$nextTick(() => {
        this.$refs.UserForm.show()
      })
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
