import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Welcome from '../views/Welcome.vue'
import Profile from '../views/Profile.vue'
import dashboard from '../views/Dashboard.vue'
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/login',
    name: 'login',
    component: Login,
    
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
    
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {requiresAuth: true}
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {requiresAuth: true}
  }
 
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) =>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next("/login");
  }else{
    next();
  }
})

export default router
