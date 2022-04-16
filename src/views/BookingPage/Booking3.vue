<template>
<Auth>

   <div class="background.menu">
  <div class="home" >
<center>
  <div>
  <h2 style="padding-top:2%">ห้อง {{rooms.code}}</h2>
  </div>
</center>
<center>
<div class="background-search">

    <b-container fluid>
      <b-row>
      </b-row>
      <b-row>
        <b-col>
          <table class="table table-striped table-bordered" style="text-align: center;">
            <thead>
              <tr>
                <th>เลขห้อง</th>
                <th>รายละเอียด</th>
                <th>ความจุ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{rooms.code}}</td>
                <td>{{rooms.description}}</td>
                <td>{{rooms.seat}}</td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
          <BookingForm
                  ref="BookingForm"
                  @save="save"
                ></BookingForm>
     <!-- <b-button variant="warning" style="width:10%; margin-left: 88%" @click="confirmBooking()">ยืนยันการจอง</b-button> -->
     <br><br>
  </div>
</center>
<br> <br>
<div class="background-search " style="padding: 2%" >
<b-container fluid>
      <b-row>
      </b-row>
      <b-row>
        <b-col>
          <h1>ตารางเวลา</h1>
          <vue-cal :locale='th' style="height: 500px" :events="events" @ready="ready($event)" @view-change="viewChange($event)" />
        </b-col>
      </b-row>
    </b-container>
</div>
  </div>
  </div>
  </Auth>
</template>

<script>
import Auth from '../../components/Auth.vue'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import th from '../../locale/th'
import axios from 'axios'
import BookingForm from './BookingForm.vue'
export default {
  name: 'Home',
  components: {
    VueCal,
    Auth,
    BookingForm
  },
  computed: {
    th () {
      return th
    }
  },
  data () {
    return {
      rooms: [],
      booking: [],
      timeTable: [],
      events: []

    }
  },
  methods: {
    async ready (e) {
      console.log('ready', e)
      axios.get('http://localhost:3000/timeTable/' + localStorage.getItem('lastRoom'), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        self.timeTable = response.data
        const nEvent = []
        for (let i = 0; i < response.data.length; i++) {
          const event = response.data[i]
          nEvent.push({
            start: new Date(event.checkIn),
            end: new Date(event.checkOut),
            title: '',
            content: '',
            class: ''
          })
        }
        this.events = nEvent
      })
    },
    async viewChange (e) {
      console.log('ready', e)
      axios.get('http://localhost:3000/timeTable/' + localStorage.getItem('lastRoom'), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        self.timeTable = response.data
        const nEvent = []
        for (let i = 0; i < response.data.length; i++) {
          const event = response.data[i]
          nEvent.push({
            start: new Date(event.checkIn),
            end: new Date(event.checkOut),
            title: '',
            content: '',
            class: ''
          })
        }
        this.events = nEvent
      })
    },
    getRoom () {
      const self = this
      axios.get('http://localhost:3000/rooms/' + localStorage.getItem('lastRoom'), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        console.log(response)
        self.rooms = response.data
      })
    },
    getTimeTable () {
      const self = this
      axios.get('http://localhost:3000/timeTable/' + localStorage.getItem('lastRoom'), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((response) => {
        self.timeTable = response.data
        const detail = { start: self.timeTable.checkIn, end: self.timeTable.checkOut }
        this.events.push(detail)
      })
    },
    save (booking) {
      // console.log(booking)
      axios
        .post('http://localhost:3000/booking/addBooking', booking, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then((response) => {
          const id = response.data._id
          const bookingData = {
            bookingid: id,
            booking: booking
          }
          axios.post('http://localhost:3000/approveRecipe/addapproveRecipe', bookingData, {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
        })
        .catch(() => {
        }
        )
    }
  },
  mounted () {
    this.getRoom()
    this.getTimeTable()
  }
}

</script>
<style>
.background-table{
  background-color: gray;
  padding-top:5% ;
  width: 90%;
  height: 90%;

}

.background-search{
  background-color: gray;
  padding-top: 1%;
  height: 100%;
  width: 100%;
}
.background.menu{
  background-color: rgb(170, 162, 21);
}
.background-search-button{
  background-color: greenyellow;
}
table {
    border-collapse: collapse;

}

table, td, th {
    border: 1px solid black;
}
.p {
  position: relative;
  left: 40%;
}
.p2 {
  position: absolute;
  left: 57%;
}
.p3 {
  position: absolute;
  left: 10%;
}

</style>
