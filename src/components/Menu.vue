<template>
  <div class="Menubar" style="background-color:rgba(215, 200, 39, 0.993); padding-bottom: 230%">
    <button class="button" v-if="isUser" @click="$router.push('/')">
      <i class="fa fa-calendar" style="font-size: 30px"></i>&nbsp; การจอง
    </button>
    <button class="button" v-if="isUser" @click="$router.push('/History')">
      <i class="fas fa-clipboard-list" style="font-size: 30px"></i>&nbsp;
      ประวัติการจอง
    </button>
    <button class="button" v-if="isApprover" @click="$router.push('/Approver')">
      <i class="fas fa-clipboard-check" style="font-size: 30px"></i>&nbsp;
      พิจารณาการจอง
    </button>
    <button class="button" v-if="isLocalAdmin || isSystemAdmin" @click="$router.push('/ManageRoom')">
      <i class="fas fa-door-closed" style="font-size: 30px"></i>&nbsp;
      จัดการข้อมูลห้อง
    </button>
    <button class="button" v-if="isLocalAdmin || isSystemAdmin" @click="$router.push('/ManageUser')">
      <i class="fas fa-user-cog" style="font-size: 30px"></i>&nbsp;
      จัดการข้อมูลผู้ใช้
    </button>
    <button class="button" v-if="isLocalAdmin || isSystemAdmin" @click="$router.push('/ManageApprove')">
      <i class="fas fa-file-alt" style="font-size: 30px"></i>&nbsp;
      จัดการผู้พิจารณา
    </button>
    <button class="button" v-if="isLocalAdmin || isSystemAdmin" @click="$router.push('/ManageAgency')">
      <i class="fas fa-briefcase" style="font-size: 30px"></i>&nbsp;
      จัดการหน่วยงาน
    </button>
    <button class="button" v-if="isSystemAdmin" @click="$router.push('/ManageBuilding')">
      <i class="fas fa-building" style="font-size: 30px"></i>&nbsp; จัดการอาคาร
    </button>
  </div>
</template>
<script>

export default {
  data () {
    return {}
  },
  computed: {
    isUser () {
      var user = JSON.parse(localStorage.getItem('user'))
      for (let i = 0; i < user.roles.length; i++) {
        if (user.roles[i] === 'USER') {
          return true
        }
      }
      return false
    },
    isApprover () {
      var user = JSON.parse(localStorage.getItem('user'))
      for (let i = 0; i < user.roles.length; i++) {
        if (user.roles[i] === 'APPROVER') {
          return true
        }
      }
      return false
    },
    isLocalAdmin () {
      var user = JSON.parse(localStorage.getItem('user'))
      for (let i = 0; i < user.roles.length; i++) {
        if (user.roles[i] === 'LOCAL_ADMIN') {
          return true
        }
      }
      return false
    },
    isSystemAdmin () {
      var user = JSON.parse(localStorage.getItem('user'))
      for (let i = 0; i < user.roles.length; i++) {
        if (user.roles[i] === 'SYSTEM') {
          return true
        }
      }
      return false
    }
  }
}

</script>
<style>
.app-menu {
  background-color: rgb(136, 134, 134);
  font-size: 15pt;
}
.sub-menu {
  padding-left: 10pt;
}
.nav-link {
  color: white;
  text-align: left;
}
.nav-link:hover {
  color: gold;
}
.button {
  background-color: rgba(215, 200, 39, 0.993); /* Green */
  border: 1px solid rgba(0, 0, 0, 0.993);
  color: rgb(0, 0, 0);
  padding: 28px 32px;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  width: 308.5px;
  display: block;
}

.button:not(:last-child) {
  border-bottom: none; /* Prevent double borders */
}

.button:hover {
  background-color: rgb(170, 162, 21);
  color: white;
}

</style>
