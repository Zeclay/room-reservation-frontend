<template>
  <div>
    <b-button @click="addNew" variant="success">เพิ่มผู้ใช้งาน</b-button>
    <b-modal
      id="modal-users"
      ref="modalusers"
      title="จัดการผู้ใช้งาน"
      @show="showModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <table border="0">
        <tr>
          <td>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-name"
                label="Username :"
                label-for="users-name"
              >
                <b-form-input
                  type="text"
                  id="username"
                  placeholder="พิมพ์username"
                  v-model="form.username"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-name"
                label="ชื่อ :"
                label-for="users-name"
              >
                <b-form-input
                  type="text"
                  id="name"
                  placeholder="กรอกชื่อ"
                  v-model="form.name"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-name"
                label="ตำแหน่ง :"
                label-for="users-name"
              >
                <b-form-input
                  type="text"
                  id="position"
                  placeholder="พิมพ์ตำแหน่ง"
                  v-model="form.position"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
          </td>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-name"
                label="Password :"
                label-for="users-password"
              >
                <b-form-input
                  type="password"
                  id="password"
                  placeholder="พิมพ์รหัสผ่าน"
                  v-model="form.password"
                  :disabled="hidePassword"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-name"
                label="นามสกุล :"
                label-for="users-surname"
              >
                <b-form-input
                  type="text"
                  id="surname"
                  placeholder="พิมพ์นามสกุล"
                  v-model="form.surname"
                  autofocus
                >
                </b-form-input>
              </b-form-group>
            </b-form>
            <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-name"
                label="สังกัดคณะ :"
                label-for="users-institution"
              >
                <b-form-select v-model="form.agency">
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
       <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
              <b-form-group
                id="form-group-name"
                label="Email :"
                label-for="users-name"
              >
                <b-form-input
                  type="email"
                  id="email"
                  placeholder=""
                  v-model="form.email"
                >
                </b-form-input>
              </b-form-group>
            </b-form>
      <b-form @submit.stop.prevent="submit" @reset.prevent="reset" inline>
        <label> Rank :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" name="radio" value="APPROVER" v-model="form.rank"/>&nbsp;
        <label>ผู้พิจารณา</label>&nbsp;&nbsp;
        <input type="radio" name="radio" value="LOCAL_ADMIN" v-model="form.rank"/>&nbsp;
        <label>Local Admin</label>&nbsp;&nbsp;&nbsp;
        <input type="radio" name="radio" value="SYSTEM" v-model="form.rank" :disabled="!isSystemAdmin"/>&nbsp;
        <label>System Admin</label>&nbsp;&nbsp;&nbsp;
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
import axios from 'axios'
export default {
  props: {
    users: Object
  },
  data () {
    return {
      form: {
        _id: '',
        name: '',
        surname: '',
        username: '',
        password: '',
        email: '',
        agency: '',
        position: '',
        rank: ''
      },
      isAddNew: false,
      options: [],
      hidePassword: false
    }
  },
  computed: {
    // validateNameusers () {
    //   return this.form.name.length >= 3
    // },
    // validateForm () {
    //   return this.validateNameusers
    // }
    isSystemAdmin () {
      var user = JSON.parse(localStorage.getItem('user'))
      for (let i = 0; i < user.roles.length; i++) {
        if (user.roles[i] === 'SYSTEM') {
          return true
        }
      }
      return false
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
      this.$refs.modalusers.show()
    },
    submit () {
      const users = JSON.parse(JSON.stringify(this.form))
      this.$emit('save', users)
      this.reset()
    },
    reset () {
      this.form = {
        _id: '',
        name: '',
        surname: '',
        username: '',
        password: '',
        email: '',
        agency: '',
        position: '',
        rank: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
        this.hidePassword = false
      } else {
        // Edit
        this.form._id = this.users._id
        this.form.name = this.users.name
        this.form.surname = this.users.surname
        this.form.username = this.users.username
        this.form.password = this.users.password
        this.form.email = this.users.email
        this.form.agency = this.users.agency
        this.form.position = this.users.position
        this.form.rank = this.users.rank
        this.hidePassword = true
      }
    },
    resetModal (evt) {
      this.reset()
    },
    handleOk (evt) {
      evt.preventDefault()
      this.submit()
      this.$nextTick(() => {
        this.$bvModal.hide('modal-users')
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
          self.options = response.data
        })
    }
  },
  mounted () {
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
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}
.dropdown {
  position: relative;
  display: block;
  margin: auto;
}
.dropdown-input {
  background: #fff;
  cursor: pointer;
  border: 1px solid #e7ecf5;
  border-radius: 3px;
  color: #333;
  display: block;
  font-size: 0.8em;
  padding: 6px;
  min-width: 250px;
  max-width: 250px;
}
.dropdown-input :hover {
  background: #f8f8fa;
}

.dropdown-content {
  position: absolute;
  background-color: #fff;
  min-width: 248px;
  max-width: 248px;
  max-height: 248px;
  border: 1px solid #e7ecf5;
  box-shadow: 0px -8px 34px 0px rgba(0, 0, 0, 0.05);
  overflow: auto;
  z-index: 1;
}
.dropdown-item {
  color: black;
  font-size: 0.7em;
  line-height: 1em;
  padding: 8px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}
.dropdown-item:hover {
  background-color: #e7ecf5;
}
.dropdown:hover .dropdowncontent {
  display: block;
}
</style>
