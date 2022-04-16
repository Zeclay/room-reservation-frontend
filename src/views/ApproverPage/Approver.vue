<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">พิจารณาการจอง</h3></center>
      <br>
      <div style="padding-left: 1%">
  <b-form inline>
    <label class="sr-only" for="inline-form-input-BuildingCode">Name</label>
    <b-button style="background-color:gray"><i class="fa fa-search"></i></b-button>&nbsp;
          <b-form-input
            id="inline-form-input-BuildingCode"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Search..."
            style="width: 25%"
            v-model="searchString"
          >
          </b-form-input>
  </b-form>
      </div>
    </div>
    <br>
    <div class="background-gray">
    <b-container fluid>
      <ApproverForm
                  :approver="selectedItem"
                  ref="Approver"
                  @save="save"
                  @cancel="cancel"
                ></ApproverForm>
      <b-row>
      </b-row>
      <b-row>
        <b-col>
          <table class="table table-striped table-bordered" style="text-align: center;">
            <thead>
              <tr>
                <th>ไอดี</th>
                <th>ชื่อ-สกุล ผู้จอง</th>
                <th>วัน</th>
                <th>เวลาเริ่มต้น</th>
                <th>เวลาสิ้นสุด</th>
                <th>รหัสห้อง</th>
                <th>การจัดการ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(apr,idx) in approveRecipes" :key="idx">
                <td>{{idx+1}}</td>
                <td>{{apr.booking_id.user_id.name}} {{apr.booking_id.user_id.surname}}</td>
                <td>{{apr.booking_id.date}}</td>
                <td>{{apr.booking_id.start}}</td>
                <td>{{apr.booking_id.end}}</td>
                <td>{{apr.booking_id.room_id.code}}</td>
                <td>
                <b-button variant="warning" @click="editBooking(apr)">Detail</b-button
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
import ApproverForm from './ApproverForm.vue'
import axios from 'axios'
export default {
  BuildingCode: 'Home',
  components: {
    Auth,
    ApproverForm
  },
  computed: {
  },
  data () {
    return {
      approveRecipes: [],
      searchString: '',
      selectedItem: null
    }
  },
  methods: {
    getApproveRecipes () {
      const self = this
      axios.get('http://localhost:3000/approveRecipe/' + JSON.parse(localStorage.getItem('user'))._id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        console.log(response)
        self.approveRecipes = response.data
      })
    },
    save (room) {
      console.log('save')
    },
    editBooking (item) {
      this.selectedItem = JSON.parse(JSON.stringify(item))
      this.$nextTick(() => {
        this.$refs.Approver.show()
      })
    },
    cancel (room) {
      console.log('cancel')
    }
  },
  mounted () {
    this.getApproveRecipes()
  }
}

</script>
<style>
.background-gray{
  background-color: gray;
  padding-top:1% ;
  width: 100%;
  height: 100%;

}

.background-search{
  background-color: gray;
  padding-top: 1%;
  height: 100%;
  width: 100%;
}
.background.menu{
  background-color: rgb(170, 162, 21);
}
.background-search-button{
  background-color: greenyellow;
}
table {
    border-collapse: collapse;

}

table, td, th {
    border: 1px solid black;
}
.p {
  position: relative;
  left: 40%;
}
.p2 {
  position: absolute;
  left: 57%;
}
.p3 {
  position: absolute;
  left: 10%;
}

</style>
