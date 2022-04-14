<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">การจอง</h3></center>
      <br>
      <div style="padding-left: 1%">
  <b-form inline>
    <label class="sr-only" for="inline-form-input-BuildingCode">Name</label>
    <b-button>ค้นหาห้อง :</b-button>&nbsp;&nbsp;
    <b-form-input
      id="inline-form-input-BuildingCode"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="ค้นหาห้องที่ต้องการได้ที่นี่..."
      style="width: 25% "
    ></b-form-input>
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
              <b-button variant="info" style="width:50%;" @click="$router.push('/booking3')"> ดูรายละเอียด </b-button>
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
        { key: 'RoomId', label: 'ชื่อห้อง' },
        { key: 'RoomDetail', label: 'ประเภทห้อง' },
        { key: 'Amount', label: 'ความจุ(ที่นั่ง)' },
        { key: 'ApproveId', label: 'ผู้ดูแล' },
        { key: 'operators', label: 'การจัดการ' }
      ],
      productItems: [
        { RoomId: 1, RoomDetail: 'IF', Amount: '50', ApproveId: 'ชุดที่1' }

      ]
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
