<template>
  <v-app> 
    <top-header></top-header> 
    <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-card dark color="dark">
          <router-link to="/login">login</router-link> |
          <router-link to="/register">register</router-link> |
          <router-link to="/welcome">welcome</router-link> 
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import topheader from "./components/top-header";

export default {
  name: 'App',

  components:  {
    'top-header': topheader
    },

  data: () => ({
    //
  }),
};
</script>
