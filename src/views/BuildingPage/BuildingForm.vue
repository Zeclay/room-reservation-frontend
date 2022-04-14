<template>
  <div >
    <b-button pill @click="addNew" variant="primary" class="p">เพิ่มตึก</b-button>
    <b-modal
      id="modal-building"
      ref="modalBuilding"
      title="ตึก"
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
            placeholder="ชื่อหน่วยงาน"
            v-model="form.name"
            :state="validateNamebuilding"
            autofocus
          >
          </b-form-input>
          <b-form-invalid-feedback :state="validateNamebuilding">
            ชื่อหน่วยงานต้องมีความยาวอย่างน้อย 3 ตัวอักษร
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
          id="form-group-name-building"
          label="Name"
          label-for="name-building"
        >

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
        name: ''

      },
      isAddNew: false
    }
  },
  computed: {
    validateNamebuilding () {
      return this.form.name.length >= 3
    },

    validateForm () {
      return this.validateNamebuilding
    }
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
      const product = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', product)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        name: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form._id = this.building._id
        this.form.name = this.building.name
      }
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      if (!this.validateForm) return
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-building')
      })
    }
  }
}
</script>
<style>
.p {
  position: absolute;
  top: 10px;
  right: 138px;
  width: 100px;
  padding: 15px;
  border: 5;
}
</style>
