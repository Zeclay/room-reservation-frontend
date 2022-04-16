<template>
  <div >
    <b-button @click="addNew" variant="warning" style="width:10%; margin-left: 88%">ยืนยันการจอง</b-button>
    <b-modal
      id="modal-booking"
      ref="modalBooking"
      title="ฟอร์มยืนคำร้องการจองห้อง"
      @show="showModal"
      @hidden="resetModal"
      ok-title="ตกลง"
      ok-variant="success"
      cancel-title="ยกเลิก"
      cancel-variant="danger"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      @ok="handleOk"
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
                  v-model="form.name"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>

            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-agency_id"
                label="คณะ :"
                label-for="booking-agency_id"
              >
                <b-form-input
                  type="text"
                  id="agency_id"
                  placeholder=""
                  v-model="form.agency_id"
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
                <b-form-timepicker
                  type="text"
                  id="timestart"
                  placeholder=""
                  v-model="form.timestart"
                >
                </b-form-timepicker>
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
                <b-form-datepicker
                  type="text"
                  id="date"
                  placeholder=""
                  v-model="form.date"
                >
                </b-form-datepicker>
              </b-form-group>
            </b-form>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-timeStop"
                label="เวลาสิ้นสุด :"
                label-for="booking-timeStop"
              >
              <b-form-timepicker
                  type="text"
                  id="timeStop"
                  placeholder=""
                  v-model="form.timeStop"
                >
                </b-form-timepicker>
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
        _id: '',
        name: '',
        surname: '',
        agency_id: '',
        date: '',
        timeStart: '',
        timeStop: '',
        user_id: JSON.parse(localStorage.getItem('user'))._id,
        room_id: localStorage.getItem('lastRoom'),
        approve_id: localStorage.getItem('lastApprove')
      },
      isAddNew: false,
      headerBgVariant: 'dark',
      headerTextVariant: 'light'
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
      console.log(booking)
      this.$emit('save', booking)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        name: '',
        surname: '',
        agency_id: '',
        date: '',
        timestart: '',
        timeStop: '',
        user_id: JSON.parse(localStorage.getItem('user'))._id,
        room_id: localStorage.getItem('lastRoom'),
        approve_id: localStorage.getItem('lastApprove')

      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      }
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      console.log('show')
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
