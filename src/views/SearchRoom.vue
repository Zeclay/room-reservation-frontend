<template>
<Auth> <div class="background.menu">
  <div class="home" >
<center>
  <div>
  <h2 style="padding-top:2%">ค้นหาห้อง</h2>
  </div>
</center>
<br> <br>

<div class="background-search " style="padding: 2%" >
  <b-form inline>
    <label class="mr-sm-2" for="inline-form-custom-select-pref" style="font-size: 20px">ตึก :</label>
    <b-form-select
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0 p3"
      :options="[{ text: 'Select Building... ', value: null }, 'One', 'Two', 'Three']"
      :value="null"
    ></b-form-select>
     <label class="mr-sm-2 p" for="inline-form-custom-select-pref" style="font-size: 20px">ประเภทห้อง :</label>
     <b-form-select
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0 p2"
      :options="[{ text: 'Select Room Type...', value: null }, 'One', 'Two', 'Three']"
      :value="null"
    ></b-form-select>
  </b-form>
  <br> <br>
  <b-form inline>
    <label class="mr-sm-2" for="inline-form-custom-select-pref" style="font-size: 20px">ชื่อห้อง :</label>
     <b-form-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0 p3"
      placeholder=""
    ></b-form-input>
     <label class="mr-sm-2 p" for="inline-form-custom-select-pref" style="font-size: 20px">จำนวนคนที่รองรับ :</label>
     <b-form-select
      id="inline-form-custom-select-pref"
      class="mb-2 mr-sm-2 mb-sm-0 p2"
      :options="[{ text: 'Select Num of People..', value: null }, 'One', 'Two', 'Three']"
      :value="null"
    ></b-form-select>
  </b-form>
</div>
<br> <br>

<center>
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
</center>
  </div>
  </div>
  </Auth>
</template>

<script>
import Auth from '../components/Auth.vue'
export default {
  name: 'Home',
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
.background-table{
  background-color: gray;
  padding-top:5% ;
  width: 90%;
  height: 90%;

}

.background-search{
  background-color: gray;
  padding-top: 1%;
  height: 100%;
  width: 100%;
}
.position-buttonSelected{
  margin-left: 100% ;
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
.center {
  margin: auto;
  width: 100%;
  padding: 1%;
  background-color: white;
}
.p {
  position: absolute;
  left: 40%;
}
.p2 {
  position: absolute;
  left: 51%;
}
.p3 {
  position: absolute;
  left: 10%;
}
</style>
