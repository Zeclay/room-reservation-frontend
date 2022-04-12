<template>
<Auth>
  <div class="home">
<center><h3>ค้นหาห้อง</h3></center>
<center><div class="background-search" >
<select class="position-buttonSelect" type="ตึก">
  <option >select</option>
</select>
<select class="position-buttonSelect">
  <option >select</option>
</select>
</div></center>
<br>
<center><div class="background-search">

</div></center>
  </div>
  </Auth>
</template>

<script>

import Auth from '../components/Auth.vue'
export default {
  name: 'Home',
  components: {

    Auth
  }
}

</script>
<style>
.background-search{
  background-color: gray;
  height: 370px;
  width: 1400px;
}
.position-buttonSelected{
  margin-left: 100% ;
}
</style>
