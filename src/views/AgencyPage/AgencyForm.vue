<template>
  <div >
    <b-button  @click="addNew" variant="success" >เพิ่มหน่วยงาน</b-button>
    <b-modal
      id="modal-agency"
      ref="modalAgency"
      title="จัดการหน่วยงาน"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset">

         <b-form-group
          id="form-group-name"
          label="ชื่อหน่วยงาน"
          label-for="agency-name"
        >
          <b-form-input
            type="text"
            id="name"
            placeholder="ชื่อหน่วยงาน"
            v-model="form.name"
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
    agency: Object
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
    // validateNameagency () {
    //   return this.form.name.length >= 3
    // },

    // validateForm () {
    //   return this.validateNameagency
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
      this.$refs.modalAgency.show()
    },
    submit () {
      const agency = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', agency)
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
        this.form._id = this.agency._id
        this.form.name = this.agency.name
      }
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-agency')
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
