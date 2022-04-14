<template>
  <Auth>
    <div class="home">
      <center> <h3 style="padding-top: 2%">การจอง</h3></center>
      <br>
      <div style="padding-left: 1%">
  <b-form inline>
    <label class="sr-only" for="inline-form-input-BuildingCode">Name</label>
    <b-form-input
      id="inline-form-input-BuildingCode"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="ค้นหาตึกที่ต้องการ"
      style="width: 25% "
    ></b-form-input>
    <b-button>SEARCH</b-button>
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
              <b-button variant="info" style="width:30%;">  ดูห้อง </b-button>
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
        { key: 'BuildingId', label: 'ไอดี' },
        { key: 'BuildingCode', label: 'รหัสตึก' },
        { key: 'BuildingName', label: 'ชื่อตึก' },
        { key: 'operators', label: 'การจัดการ' }
      ],
      productItems: [
        { BuildingId: 1, BuildingCode: 'IF', BuildingName: 'Informatics' }

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
