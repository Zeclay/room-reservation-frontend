<template>
  <div>
    <b-button @click="addNew" variant="success">เพิ่มข้อมูล</b-button>
    <b-modal
      id="modal-approve"
      ref="modalApprove"
      header="test"
      header-class="justify-content-center"
      title="จัดการผู้พิจารณา"
      @show="showModal"
      @hidden="resetModal"
      ok-title="ตกลง"
      ok-variant="success"
      cancel-title="ยกเลิก"
      @ok="handleOk"
       hide-header-close
    >
      <table style="border: 0px solid white">
        <tr>
          <td style="width: 50%  ; border: 0px solid white">
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
                  v-model="form.description"
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
                <b-form-select v-model="form.user1">
                  <option
                    v-for="(option, idx) in options"
                    :key="idx"
                    :value="option._id"
                  >
                    {{ option.name }}
                  </option>
                </b-form-select>
              </b-form-group>
            </b-form>
          </td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td style="width: 50%  ; border: 0px solid white">
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-name"
                label="สังกัด :"
                label-for="users-roles"
              >
                <b-form-select v-model="form.agencys">
                  <option
                    v-for="(agency, idx) in agencys"
                    :key="idx"
                    :value="agency._id"
                  >
                    {{ agency.name }}
                  </option>
                </b-form-select>
              </b-form-group>
            </b-form>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-name"
                label="ผู้พิจารณาที่ 2 :"
                label-for="users-approve1"
              >
                <b-form-select v-model="form.user2">
                  <option
                    v-for="(option, idx) in options"
                    :key="idx"
                    :value="option._id"
                  >
                    {{ option.name }}
                  </option>
                </b-form-select>
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
import axios from 'axios'
export default {
  props: {
    approve: Object
  },
  data () {
    return {
      form: {
        _id: '',
        description: '',
        agencys: '',
        user1: '',
        user2: ''
      },
      isAddNew: false,
      options: [],
      agencys: []
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
        description: '',
        agencys: '',
        user1: '',
        user2: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form._id = this.approve._id
        this.form.description = this.approve.description
        this.form.agencys = this.approve.agencys
        this.form.user1 = this.approve.user1
        this.form.user2 = this.approve.user2
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
    },
    getUser () {
      const self = this
      axios
        .get('http://localhost:3000/users/approvers', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then((response) => {
          console.log(response)
          self.options = response.data
        })
    },
    getAgency () {
      const self = this
      axios
        .get('http://localhost:3000/agencys', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then((response) => {
          console.log(response)
          self.agencys = response.data
        })
    }
  },
  mounted () {
    this.getUser()
    this.getAgency()
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
