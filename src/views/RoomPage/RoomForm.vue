<template>
  <div >
    <b-button  @click="addNew" variant="success" >เพิ่มห้อง</b-button>
    <b-modal
      id="modal-room"
      ref="modalRoom"
      title="การจัดการห้อง"
      header= "test"
      header-class = "justify-content-center"
      @show="showModal"
      @hidden="resetModal"
      ok-title="ตกลง"
      ok-variant="success"
      cancel-title="ยกเลิก"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      @ok="handleOk"
      hide-header-close
    >
      <table style="border: 0px solid white">
        <tr>
          <td style="width:50%; border: 0px solid white">
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-room"
                label="รหัสห้อง :"
                label-for="users-code"
              >
                <b-form-input
                  type="text"
                  id="code"
                  placeholder=""
                  v-model="form.code"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>

            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-room"
                label="ชั้น :"
                label-for="users-floor"
              >
                <b-form-input
                  type="text"
                  id="floor"
                  placeholder=""
                  v-model="form.floor"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-room"
                label="ประเภทห้อง :"
                label-for="users-type"
              >
                <b-form-select v-model="form.type">
                  <option
                    v-for="(option, idx) in type"
                    :key="idx"
                    :value="option"
                  >
                    {{ option}}
                  </option>
                </b-form-select>
              </b-form-group>
            </b-form>
          </td>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td style="width:50%; border: 0px solid white">
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-room"
                label="ความจุที่นั่ง :"
                label-for="users-seat"
              >
                <b-form-input
                  type="number"
                  id="seat"
                  placeholder=""
                  v-model="form.seat"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-room"
                label="ผู้ดูแล :"
                label-for="users-approve_id"
              >
                <b-form-select v-model="form.approve_id">
                  <option
                    v-for="(option, idx) in approves"
                    :key="idx"
                    :value="option._id"
                    text-field="form.approve_name"
                    value-field="form.approve_id"
                  >
                    {{ option.description }}
                  </option>
                </b-form-select>
              </b-form-group>
            </b-form>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-room"
                label="หน่วยงาน :"
                label-for="users-agency_id"

              >
                <b-form-select v-model="form.agency_id">
                  <option
                    v-for="(option, idx) in agencys"
                    :key="idx"
                    :value="option._id"
                    text-field="form.agency_name"
                    value-field="form.agency_id"
                  >
                    {{ option.name }}
                  </option>
                </b-form-select>
              </b-form-group>
            </b-form>

          </td>
        </tr>
      </table>
       <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-room"
                label="ตึก :"
                label-for="users-building_id"
              >
                <b-form-select v-model="form.building_id">
                  <option
                    v-for="(option, idx) in buildings"
                    :key="idx"
                    :value="option._id"
                    text-field="form.building_name"
                    value-field="form.building_id"
                  >
                    {{ option.name_build }}
                  </option>
                </b-form-select>
              </b-form-group>
            </b-form>
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-room"
                label="รายละเอียด :"
                label-for="users-description"
              >
                <b-form-textarea
                  type="textfield"
                  id="description"
                  placeholder=""
                  v-model="form.description"
                  rows="5"
                  autofocus
                >
                </b-form-textarea>
              </b-form-group>
            </b-form>
    </b-modal>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: {
    room: Object
  },
  data () {
    return {
      form: {
        _id: '',
        code: '',
        description: '',
        floor: '',
        seat: '',
        type: '',
        approve_id: '',
        approve_name: '',
        building_id: '',
        building_name: '',
        agency_id: '',
        agency_name: ''
      },
      isAddNew: false,
      approves: [],
      agencys: [],
      buildings: [],
      type: ['Meeting', 'Lab', 'Lecture', 'Classroom'],
      headerBgVariant: 'dark',
      headerTextVariant: 'light'
    }
  },
  computed: {
    // validateNameroom () {
    //   return this.form.name.length >= 3
    // },

    // validateForm () {
    //   return this.validateNameroom
    // }
  },
  methods: {
    addNew () {
      this.isAddNew = true
      this.$nextTick(() => {
        this.show()
        this.isAddNew = false
      })
    },
    show () {
      this.$refs.modalRoom.show()
    },
    submit () {
      const room = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', room)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        code: '',
        description: '',
        floor: '',
        seat: '',
        type: '',
        approve_id: '',
        approve_name: '',
        building_id: '',
        building_name: '',
        agency_id: '',
        agency_name: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form._id = this.room._id
        this.form.code = this.room.code
        this.form.description = this.room.description
        this.form.floor = this.room.floor
        this.form.seat = this.room.seat
        this.form.type = this.room.type
        this.form.approve_id = this.room.approve_id._id
        this.form.approve_name = this.room.approve_id.agency_name
        this.form.building_id = this.room.building_id._id
        this.form.building_name = this.room.building_id.build_name
        this.form.agency_id = this.room.agency_id._id
        this.form.agency_name = this.room.agency_id.name
      }
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-room')
      })
    },
    getApprove () {
      const self = this
      axios
        .get('http://localhost:3000/approves', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then((response) => {
          console.log(response)
          self.approves = response.data
        })
    },
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
    getBuilding () {
      const self = this
      axios.get('http://localhost:3000/buildings', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        console.log(response)
        self.buildings = response.data
      })
    }
  },
  mounted () {
    this.getApprove()
    this.getAgency()
    this.getBuilding()
  }
}
</script>
<style>
.addButton {
  position: absolute;
  top: 10px;
  right: 138px;
  width: 100px;
  padding: 15px;
  border: 5;
}
</style>
