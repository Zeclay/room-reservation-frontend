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
        <td style="width: 50%">
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
         <b-form-group
          id="form-group-name"
          label="ชุดผู้พิจารณา :"
          label-for="users-aprrove_num"
        >
          <b-form-input
            type="text"
            id="approvenum"
            placeholder=""
            v-model="form.approve_num"
          >
          </b-form-input>
        </b-form-group>
      </b-form>
       <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
         <b-form-group
          id="form-group-name"
          label="ผู้พิจารณาที่ 1 :"
          label-for="users-approve"
        >
         <b-form-select
        id="inline-form-custom-select-pref"
          class="mb-2 mr-sm-2 mb-sm-0"
          :options="[{ text: 'Select Approve 1...', value: null }, 'One', 'Two', 'Three']"
          :value="null"
    ></b-form-select>
        </b-form-group>
      </b-form>
      </td>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <td style="width: 50%">
        <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
         <b-form-group
          id="form-group-name"
          label="สังกัด :"
          label-for="users-roles"
        >
          <b-form-select
        id="inline-form-custom-select-pref"
          class="mb-2 mr-sm-2 mb-sm-0"
          :options="[{ text: 'Select Role...', value: null }, 'One', 'Two', 'Three']"
          :value="null"
    ></b-form-select>
        </b-form-group>
      </b-form>
       <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
         <b-form-group
          id="form-group-name"
          label="ผู้พิจารณาที่ 2 :"
          label-for="users-approve1"
        >
          <b-form-select
        id="inline-form-custom-select-pref"
          class="mb-2 mr-sm-2 mb-sm-0"
          :options="[{ text: 'Select Approve 2...', value: null }, 'One', 'Two', 'Three']"
          :value="null"
    ></b-form-select>
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
