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
          <b-table :items="agencys" :fields="fields">
            <template #cell(operators)="{ item }">
              <b-button variant="warning" @click="editAgency(item)">แก้ไข</b-button
              ><b-button
                @click="deleteAgency(item)"
                class="ml-3"
                variant="danger"
                >ลบ</b-button
              >
            </template>
          </b-table>
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
      fields: [
        { key: '_id', label: 'ไอดี' },
        { key: 'name', label: 'หน่วยงาน' },
        { key: 'operators', label: 'การจัดการ' }
      ],
      agencys: []
    }
  },
  methods: {
    getAgency () {
      const self = this
      axios.get('http://localhost:3000/agency', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        console.log(response)
        self.agencys = response.data
      })
    },
    deleteAgency (item) {
      if (confirm(`คุณต้องการจะลบตึก ${item.name} หรือไม่`)) {
        axios.delete('http://localhost:3000/agency/' + item._id, {
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
