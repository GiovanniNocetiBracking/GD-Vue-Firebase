import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from 'vue-textarea-autosize'; 
import firebase from "firebase/app";
import "firebase/firestore";
import axios from 'axios';

const firebaseConfig = {
  apiKey: "AIzaSyCJa1Fpk0vTqvqapmPlIeh0Y3V26Lxv3xU",
  authDomain: "gasdetectvue.firebaseapp.com",
  databaseURL: "https://gasdetectvue.firebaseio.com",
  projectId: "gasdetectvue",
  storageBucket: "gasdetectvue.appspot.com",
  messagingSenderId: "1050756660767",
  appId: "1:1050756660767:web:dd96c27003f5dc86321f2a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

export const db = firebase.firestore();

Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(user => {
  console.log(user);
  if(!app){
    app = new Vue({
          router,
          store,
          vuetify,
          render: (h) => h(App),
        }).$mount("#app");
  }
})
