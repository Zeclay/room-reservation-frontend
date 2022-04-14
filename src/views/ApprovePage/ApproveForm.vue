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
      </b-form>
        </td>
      </tr>
      <tr>
        <td>
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
    approve: Object
  },
  data () {
    return {
      form: {
        _id: '',
        approve_num: '',
        institution: '',
        name_approve1: '',
        name_approve2: ''
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
      this.$refs.modalApprove.show()
    },
    submit () {
      const approve = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', approve)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        approve_num: '',
        institution: '',
        name_approve1: '',
        name_approve2: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form._id = this.approve._id
        this.form.approve_num = this.approve.approve_num
        this.form.institution = this.approve.institution
        this.form.name_approve1 = this.approve.name_approve1
        this.form.name_approve2 = this.approve.name_approve2
      }
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-approve')
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
