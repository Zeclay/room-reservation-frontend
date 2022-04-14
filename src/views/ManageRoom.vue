<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">จัดการข้อมูลห้อง</h3></center>
      <br>
      <div style="padding-left: 1%">
  <b-form inline>
    <label class="sr-only" for="inline-form-input-BuildingCode">Name</label>
    <b-form-input
      id="inline-form-input-BuildingCode"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="ค้นหาห้อง"
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
          <b-table :items="productItems" :fields="fields">
            <template #cell(operators)>
              <b-button variant="warning">แก้ไข</b-button
              ><b-button
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
export default {
  BuildingCode: 'Home',
  components: {
    Auth
  },
  data () {
    return {
      searchString: '',
      fields: [
        { key: 'RoomId', label: 'ไอดี' },
        { key: 'RoomCode', label: 'เลขห้อง' },
        { key: 'RoomDetail', label: 'รายละเอียดห้อง' },
        { key: 'BuildingID', label: 'เลขตึก' },
        { key: 'RoomSeat', label: 'ความจุ(ที่นั่ง)' },
        { key: 'ApproveID', label: 'ไอดีผู้พิจารณา' },
        { key: 'operators', label: 'การจัดการ' }
      ],
      productItems: [
        { RoomId: 1, RoomCode: '11IFM', RoomDetail: 'อุปกรณ์ต่างๆ', BuildingID: '1IF', RoomSeat: '50', ApproveID: '1' }

      ]
    }
  },
  computed: {
    filteredRooms () {
      const filteredRooms = this.searchString === ''
        ? this.rooms
        : this.rooms.filter(r => Object.values(r).join('').indexOf(this.searchString) !== -1)
      return filteredRooms
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
