<template>
  <div >

    <b-modal
      id="modal-approver"
      ref="modalApprover"
      title="รายละเอียดคำร้องของจองห้อง"
      header = "test"
      header-class ="justify-content-center"
      @show="showModal"
      @hidden="resetModal"
      ok-title = "อนุมัติการจอง"
      ok-variant="success"
      cancel-title = "ไม่อนุมัติการจอง"
      cancel-variant="danger"
      @ok="handleOk"
      @cancel="cancel"
      hide-header-close
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
                  disabled
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
                  disabled
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
                  v-model="form.timeStart"
                  disabled
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
                  disabled
                >
                </b-form-input>
              </b-form-group>
            </b-form>
              <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-room_id"
                label="รหัสห้อง :"
                label-for="booking-room_id"
              >
                <b-form-input
                  type="textfield"
                  id="room_id"
                  placeholder=""
                  v-model="form.codeRoom"
                  rows="3"
                  disabled
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
                  disabled
                >
                </b-form-input>
              </b-form-group>
            </b-form>

          </td>
        </tr>
      </table>
        <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-type"
                label="ประเภทห้อง :"
                label-for="booking-type"
              >
                <b-form-input
                  type="text"
                  id="type"
                  placeholder=""
                  v-model="form.description"
                  disabled
                >
                </b-form-input>
              </b-form-group>
            </b-form>
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
    approver: Object
  },
  data () {
    return {
      form: {
        _id: '',
        name: '',
        surname: '',
        date: '',
        codeRoom: '',
        timeStart: '',
        timeStop: '',
        building_id: '',
        room_id: '',
        description: ''
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
      this.$refs.modalApprover.show()
    },
    submit () {
      const approver = JSON.parse(JSON.stringify(this.form))
      console.log(approver)
      this.$emit('save', approver)
      this.reset()
    },
    sayno () {
      const approver = JSON.parse(JSON.stringify(this.form))
      this.$emit('cancel', approver)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        name: '',
        surname: '',
        date: '',
        codeRoom: '',
        timeStart: '',
        timeStop: '',
        building_id: '',
        room_id: '',
        description: ''
      }
    },
    showModal () {
      this.form._id = this.approver._id
      this.form.name = this.approver.booking_id.user_id.name
      this.form.surname = this.approver.booking_id.user_id.surname
      this.form.date = this.approver.booking_id.date
      this.form.codeRoom = this.approver.booking_id.room_id.code
      this.form.timeStart = this.approver.booking_id.start
      this.form.timeStop = this.approver.booking_id.end
      this.form.description = this.approver.booking_id.room_id.description
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-approver')
      })
    },
    cancel (evt) {
      evt.preventDefault()
      this.sayno()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-approver')
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
