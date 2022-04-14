<template>
  <div >
    <b-button  @click="addNew" variant="success" >เพิ่มอาคาร</b-button>
    <b-modal
      id="modal-room"
      ref="modalroom"
      title="การจัดการอาคาร"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset">

         <b-form-group
          id="form-group-name"
          label="ชื่ออาคาร"
          label-for="room-name"
        >
          <b-form-input
            type="text"
            id="name"
            placeholder="ชื่ออาคาร"
            v-model="form.name_build"
            autofocus
          >
          </b-form-input>
        </b-form-group>
       <b-form-group
          id="form-group-code"
          label="รหัสอาคาร"
          label-for="room-code"
        >
          <b-form-input
            type="text"
            id="code"
            placeholder="รหัสอาคาร"
            v-model="form.code"
            autofocus
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
    room: Object
  },
  data () {
    return {
      form: {
        code: '',
        description: '',
        floor: '',
        seat: '',
        type: '',
        approve_id: '',
        building_id: '',
        agency_id: ''
      },
      isAddNew: false
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
      this.$refs.modalroom.show()
    },
    submit () {
      const room = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', room)
      this.reset()
    },
    reset () {
      this.form = {
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
