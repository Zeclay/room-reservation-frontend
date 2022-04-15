<template>
  <div >
    <b-button @click="addNew" variant="warning" style="width:10%; margin-left: 88%">ยืนยันการจอง</b-button>
    <b-modal
      id="modal-booking"
      ref="modalBooking"
      title="ฟอร์มยืนคำร้องการจองห้อง"
      @show="showModal"
      @hidden="resetModal"
      ok-title = "Accept"
      ok-variant="success"
      cancel-variant="danger"
    >
      <table style="border: 0px solid white">
        <tr>
          <td style="width:50% ; border: 0px solid white">
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-name"
                label="ชื่อ :"
                label-for="booking-name"
              >
                <b-form-input
                  type="text"
                  id="name"
                  placeholder=""
                  v-model="form.code"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>

            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-agency"
                label="คณะ :"
                label-for="booking-agency"
              >
                <b-form-input
                  type="text"
                  id="agency"
                  placeholder=""
                  v-model="form.agency"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-timestart"
                label="เวลาเริ่มต้น :"
                label-for="booking-timestart"
              >
                <b-form-input
                  type="text"
                  id="timestart"
                  placeholder=""
                  v-model="form.timestart"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
               <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-building_id"
                label="ตึก :"
                label-for="booking-building_id"
              >
              <b-form-input
                  type="text"
                  id="surname"
                  placeholder=""
                  v-model="form.surname"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
          </td>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td style="width:50%  ; border: 0px solid white">
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-surname"
                label="นามสกุล :"
                label-for="booking-surname"
              >
                <b-form-input
                  type="text"
                  id="surname"
                  placeholder=""
                  v-model="form.surname"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-date"
                label="วันที่ :"
                label-for="booking-date"
              >
                <b-form-input
                  type="text"
                  id="date"
                  placeholder=""
                  v-model="form.date"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-timeStop"
                label="เวลาสิ้นสุด :"
                label-for="booking-timeStop"
              >
              <b-form-input
                  type="text"
                  id="timeStop"
                  placeholder=""
                  v-model="form.timeStop"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
              <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-room_id"
                label="ห้อง :"
                label-for="booking-room_id"
              >
                <b-form-input
                  type="textfield"
                  id="room_id"
                  placeholder=""
                  v-model="form.room_id"
                  rows="5"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>

          </td>
        </tr>
      </table>
      <b-card>
        <pre>
        {{ form }}
      </pre
        >
      </b-card>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    booking: Object
  },
  data () {
    return {
      form: {
        name: '',
        surname: '',
        agency_id: '',
        date: '',
        timeStart: '',
        timeStop: '',
        building_id: '',
        room_id: ''
      },
      isAddNew: false
    }
  },
  computed: {
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
      this.$refs.modalBooking.show()
    },
    submit () {
      const booking = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', booking)
      this.reset()
    },
    reset () {
      this.form = {
        name: '',
        surname: '',
        agency_id: '',
        date: '',
        timeStart: '',
        timeStop: '',
        building_id: '',
        room_id: ''
      }
    },
    showModal () {
      this.reset()
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-booking')
      })
    }
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
