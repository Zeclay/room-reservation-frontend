<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">พิจารณาการจอง</h3></center>
      <br>
      <div style="padding-left: 1%">
  <b-form inline>
    <label class="sr-only" for="inline-form-input-BuildingCode">Name</label>
    <b-button style="background-color:"><i class="fa fa-search"></i></b-button>&nbsp;
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
    <div class="background-grey">
    <b-container fluid>
      <b-row>
      </b-row>
      <b-row>
        <b-col>
          <b-table :items="productItems" :fields="fields">
            <template #cell(operators)>
              <b-button variant="info" style="width:40%;"> รายละเอียด </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
  </Auth>
</template>

<script>
import Auth from '../../components/Auth.vue'
export default {
  BuildingCode: 'Home',
  components: {
    Auth
  },
  data () {
    return {
      fields: [
        { key: 'ApproverId', label: 'ไอดี' },
        { key: 'Name', label: 'ชื่อ-นามสกุล' },
        { key: 'Time', label: 'เวลา' },
        { key: 'RoomCode', label: 'รหัสห้อง' },
        { key: 'operators', label: 'การจัดการ' }
      ],
      productItems: [
        { ApproverId: 1, Name: 'Mankhong Limprapaipong', Time: '12.00 01/01/2555', RoomCode: 'IF3C01' }

      ]
    }
  }
}
</script>
<style>
.background-grey {
  background-color: gray;
  height: 100%;
  width: 100%;
}
.position-buttonSelected {
  margin-left: 100%;
}
</style>
