<template>
  <div >
    <b-button  @click="addNew" variant="success" >เพิ่มผู้ใช้งาน</b-button>
    <b-modal
      id="modal-users"
      ref="modalusers"
      title="จัดการผู้ใช้งาน"
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
          label="ชื่อผู้ใช้งาน :"
          label-for="users-name"
        >
          <b-form-input
            type="text"
            id="name"
            placeholder="พิมพ์ชื่อ"
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
            type="text"
            id="password"
            placeholder="พิมพ์รหัสผ่าน"
            v-model="form.password"
            autofocus
          >
          </b-form-input>
        </b-form-group>
      </b-form>
       <b-form @submit.stop.prevent="submit" @reset.prevent="reset">
         <b-form-group
          id="form-group-name"
          label="ชื่อนามสกุล :"
          label-for="users-surname"
        >
          <b-form-input
            type="text"
            id="surname"
            placeholder="พิมพ์นามสกุล"
            v-model="form.name"
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
        <select class="form-control" v-model="selected" :required @change="changeLocation">
        <option>Choose Province</option>
        <option v-for="option in options" v-bind:value="option.id" >{{ option.name }}</option>
        </select>
        </b-form-group>
      </b-form>
      </td>
      </tr>
    </table>
     <b-form @submit.stop.prevent="submit" @reset.prevent="reset" inline>
        <label> Rank :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" name="radio">&nbsp;
         <label>ผู้พิจารณา</label>&nbsp;&nbsp;
         <input type="radio" name="radio">&nbsp;
         <label>Local Admin</label>&nbsp;&nbsp;&nbsp;
         <input type="radio" name="radio">&nbsp;
         <label>System Admin</label>&nbsp;&nbsp;&nbsp;
        <span class="checkmark"></span>
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
    users: Object
  },
  data () {
    return {
      form: {
        _id: '',
        name: '',
        username: '',
        email: '',
        institution: '',
        position: '',
        roles: ''
      },
      isAddNew: false,
      selected: 'Choose Province'
    }
  },
  computed: {
    // validateNameusers () {
    //   return this.form.name.length >= 3
    // },

    // validateForm () {
    //   return this.validateNameusers
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
        username: '',
        email: '',
        institution: '',
        position: '',
        roles: ''
      }
    },
    showModal () {
      if (this.isAddNew) {
        this.reset()
      } else {
        // Edit
        this.form._id = this.users._id
        this.form.name = this.users.name
        this.form.username = this.users.username
        this.form.email = this.users.email
        this.form.institution = this.users.institution
        this.form.position = this.users.position
        this.form.roles = this.users.roles
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
      font-size: .8em;
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
      box-shadow: 0px -8px 34px 0px rgba(0,0,0,0.05);
      overflow: auto;
      z-index: 1;
}
.dropdown-item {
        color: black;
        font-size: .7em;
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
