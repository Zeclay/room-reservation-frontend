import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SearchRoom1',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchRoomPage/SearchRoom1.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/ManageBuilding',
    name: 'ManageBuilding',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/BuildingPage/ManageBuilding.vue')
  },
  {
    path: '/Booking1',
    name: 'Booking1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BookingPage/Booking1.vue')
  },
  {
    path: '/booking2',
    name: 'Booking2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BookingPage/Booking2.vue')
  },
  {
    path: '/booking3',
    name: 'Booking3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BookingPage/Booking3.vue')
  },
  {
    path: '/History',
    name: 'History',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/History.vue')
  },
  {
    path: '/ManageRoom',
    name: 'ManageRoom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RoomPage/ManageRoom.vue')
  },
  {
    path: '/ManageUser',
    name: 'ManageUser',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserPage/ManageUser.vue')
  },
  {
    path: '/userform',
    name: 'UserForm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserPage/UserForm.vue')
  },
  {
    path: '/ManageApprove',
    name: 'ManageApprove',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ApprovePage/ManageApprove.vue')
  },
  {
    path: '/ManageAgency',
    name: 'ManageAgency',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AgencyPage/ManageAgency.vue')
  },
  {
    path: '/Approver',
    name: 'Approver',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views//Approver.vue')
  },
  {
    path: '/BuildingForm',
    name: 'BuildingForm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/BuildingPage/BuildingForm.vue')
  },
  {
    path: '/ApproveForm',
    name: 'ApproveForm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ApprovePage/ApproveForm.vue')
  },
  {
    path: '/RoomForm',
    name: 'RoomForm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/RoomPage/RoomForm.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
