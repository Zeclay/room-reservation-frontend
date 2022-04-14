<template>
  <div >
    <b-button  @click="addNew" variant="success" >เพิ่มตึก</b-button>
    <b-modal style="text-align:center;"
      id="modal-building"
      ref="modalBuilding"
      title="การจัดการตึก"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset">

         <b-form-group
          id="form-group-name"
          label="ชื่อตึก"
          label-for="building-name"
        >
          <b-form-input
            type="text"
            id="name"
            placeholder="ชื่อตึก"
            v-model="form.name_build"
            autofocus
          >
          </b-form-input>
        </b-form-group>
       <b-form-group
          id="form-group-code"
          label="รหัสตึก"
          label-for="building-code"
        >
          <b-form-input
            type="text"
            id="code"
            placeholder="รหัสตึก"
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
    building: Object
  },
  data () {
    return {
      form: {
        _id: '',
        name_build: '',
        code: ''

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
      this.$refs.modalBuilding.show()
    },
    submit () {
      const building = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', building)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        name_build: '',
        code: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form._id = this.building._id
        this.form.name_build = this.building.name_build
        this.form.code = this.building.code
      }
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-building')
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
