<template>
  <div class="sticky-top" app>
    <!-- NavBar -->
    <nav class="navbar navbar-expand-lg sticky-top custom-navbar">
      <!-- Brand -->
      <b-navbar-brand class="font-italic"  style="color:red" to="/">
        <h1>Gas Detect</h1>
      </b-navbar-brand>

      <!-- Toggler -->
      <div class="custom-toggler" target="nav-collapse">
        <button
          class="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <!-- Menu de navegacion -->
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <div class="navbar-nav ml-auto">
          <div class="container">
            <div class="row d-flex justify-content-center">
              <a>
                <button class="transparent mr-3" style="color:white">¿Que es Gas Detect?</button>
              </a>
              <a>
                <button class="transparent mr-3" style="color:white">¿Que es Gas Detect?</button>
              </a>
              <a>
                <button class="transparent mr-3" style="color:white">¿Que es Gas Detect?</button>
              </a>
              <a>
                <button class="transparent mr-3" style="color:white">¿Que es Gas Detect?</button>
              </a>
            </div>
          </div>
        </div>

        <!-- Botones lado derecho -->
        <div class="d-flex justify-content-end align-items-center ml-auto">
          <router-link to="login" v-if="loggedIn == false">
            <b-button pill class="btn btn-outline-danger mt-2 mr-2" size="xs" variant="dark">
              Login
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-person-check-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9.854-2.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </b-button>
          </router-link>
          <router-link to="register" v-if="loggedIn == false">
            <b-button pill class="btn btn-outline-danger mt-2" size="xs" variant="dark">
              Register
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-person-plus-fill"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M13 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0v-2z"
                />
              </svg>
            </b-button>
          </router-link>

          <!-- LOGEADO.. BTN DESPLEGABLE -->

          <b-nav-item-dropdown variant="dark" v-if="loggedIn == true" right>
            <template v-slot:button-content right>
              <div class="d-flex justify-content-center">
                <b-button pill class="btn btn-outline-danger" variant="dark" size="lg">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-person-circle align-content"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"
                    />
                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path
                      fill-rule="evenodd"
                      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                    />
                  </svg>
                </b-button>
              </div>
            </template>

            <!-- ITEMS MENU DESPLEGABLE -->
            <b-dropdown-item to="/dashboard" class variant="dark">
              Sistema de Gestion
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-columns ml-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 2H1v12h14V2zM1 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z"
                />
                <path fill-rule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z" />
              </svg>
            </b-dropdown-item>
            <b-dropdown-item @click="signOut" variant="dark">
              Desconectarse
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-door-open-fill ml-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2v13h1V2.5a.5.5 0 0 0-.5-.5H11zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"
                />
              </svg>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
    });
  },
  data() {
    return {
      loggedIn: false,
      estadobtnsidebar: true,
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "welcome" });
      } catch (error) {
        console.log(error);
      }
    },
    prueba() {
      console.log("funciono");
    },
    
  },
};
</script>

<style lang="scss" scoped>
.custom-navbar {
  background: rgba(2, 2, 2, 0.986);
}
.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler .navbar-toggler {
  border-color: rgb(255, 0, 0);
}
</style>
