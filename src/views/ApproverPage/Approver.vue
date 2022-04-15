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
      <b-row>
      </b-row>
      <b-row>
        <b-col>
          <table class="table table-striped table-bordered" style="text-align: center;">
            <thead>
              <tr>
                <th>ไอดี</th>
                <th>ชื่อ-สกุล</th>
                <th>วัน</th>
                <th>เวลาเริ่มต้น</th>
                <th>เวลาสิ้นสุด</th>
                <th>รหัสห้อง</th>
                <th>รายละเอียด</th>
                <th>การจัดการ</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td><td>
                <td></td>
                <td></td>
                <td></td>
                <td><ApproverForm
                  ref="Approver"
                  @save="save"
                ></ApproverForm></td>
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
      rooms: []

    }
  },
  methods: {
    getRoom () {
      const self = this
      axios.get('http://localhost:3000/rooms/' + localStorage.getItem('lastRoom'), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        console.log(response)
        self.rooms = response.data
      })
    },
    save (room) {
    }
  },
  mounted () {
    this.getRoom()
    console.log(this.rooms)
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
