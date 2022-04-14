<template>
  <div >
    <b-button  @click="addNew" variant="success" >เพิ่มข้อมูล</b-button>
    <b-modal
      id="modal-approve"
      ref="modalApprove"
      title="จัดการผู้พิจารณา"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >

    <table>
      <tr>
        <td>
          <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
         <b-form-group
          id="form-group-name"
          label="ชุดผู้พิจารณา :"
          label-for="approve-name"
        >
          <b-form-input
            type="text"
            id="name"
            placeholder="ชุดผู้พิจารณา"
            v-model="form.approve_num"
            style="width: 50%;"
            autofocus
          >
          </b-form-input>
        </b-form-group>
       <b-form-group
          id="form-group-code"
          label="ผู้พิจารณาที่1"
          label-for="approve-name1"
        >
          <b-form-input
            type="text"
            id="num"
            placeholder="ผู้พิจารณาที่1"
            v-model="form.name_approve1"
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
    room: Object
  },
  data () {
    return {
      form: {
        _id: '',
        code: '',
        floor: '',
        seat: '',
        approve_id: '',
        building_id: '',
        agency_id: ''
      },
      isAddNew: false
    }
  },
  computed: {
    // validateNamebuilding () {
    //   return this.form.name.length >= 3
    // },

    // validateForm () {
    //   return this.validateNamebuilding
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
        building_id: '',
        agency_id: ''
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
        this.form.approve_id = this.room.approve_id
        this.form.building_id = this.room.building_id
        this.form.agency_id = this.room.agency_id
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
