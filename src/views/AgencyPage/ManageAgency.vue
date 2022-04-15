<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">จัดการหน่วยงาน</h3></center>
      <br>
      <div style="padding-left: 1%">
  <b-form inline>
    <label class="sr-only" for="inline-form-input-AgencyCode">Name</label>
    <b-button style="background-color:"><i class="fa fa-search"></i></b-button>&nbsp;
          <b-form-input
            id="inline-form-input-BuildingCode"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Search..."
            style="width: 25%"
            v-model="searchString"
          ></b-form-input>
       <AgencysForm
                  :agency="selectedItem"
                  ref="AgencysForm"
                  @save="save"
                ></AgencysForm>
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
                <th>หน่วยงาน</th>
                <th>การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(agency,idx) in filteredAgencies" :key="idx">
                <td>{{idx+1}}</td>
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
import Auth from '../../components/Auth.vue'
import axios from 'axios'
import AgencysForm from './AgencyForm.vue'
export default {
  AgencyCode: 'Home',
  components: {
    Auth,
    AgencysForm
  },
  data () {
    return {
      searchString: '',
      agencys: [],
      selectedItem: null
    }
  },
  computed: {
    filteredAgencies () {
      const filteredAgencies = this.searchString === ''
        ? this.agencys
        : this.agencys.filter(ag => Object.values(ag).join('').indexOf(this.searchString) !== -1)
      return filteredAgencies
    },
    isLocalAdmin () {
      var user = JSON.parse(localStorage.getItem('user'))
      for (let i = 0; i < user.roles.length; i++) {
        if (user.roles[i] === 'LOCAL_ADMIN') {
          return true
        }
      }
      return false
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
    },
    save (agency) {
      console.log('Submit', agency)
      if (agency._id === '') {
      // Add New
        axios
          .post('http://localhost:3000/agencys', agency, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(
            function (response) {
              this.getAgency()
            }.bind(this)
          )
          .catch(() => {
          }
          )
      } else {
      // Update
        axios
          .put('http://localhost:3000/agencys/' + agency._id, agency, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(
            function (response) {
              this.getAgencys()
            }.bind(this)
          )
          .catch(() => {
          })
      }
    },
    editAgency (item) {
      this.selectedItem = JSON.parse(JSON.stringify(item))
      this.$nextTick(() => {
        this.$refs.AgencysForm.show()
      })
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
