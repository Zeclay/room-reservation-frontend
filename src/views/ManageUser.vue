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
      placeholder="ค้นหา"
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
      fields: [
        { key: 'UserId', label: 'ไอดี' },
        { key: 'UserName', label: 'ยูสเซอร์เนม' },
        { key: 'PassWord', label: 'พาสเวิด' },
        { key: 'Name', label: 'ชื่อ' },
        { key: 'Surname', label: 'นาม' },
        { key: 'Position', label: 'ตำแหน่ง' },
        { key: 'Affiliation', label: 'สังกัด' },
        { key: 'Role', label: 'แรงค์' },
        { key: 'operators', label: 'การจัดการ' }
      ],
      productItems: [
        { UserId: 1, UserName: 'suigai', PassWord: 'qw123', Name: 'สุขใจ', Surname: 'ไทยเดิม', Position: 'นิสิต', Affiliation: 'Informatics', Role: 'User' }

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
