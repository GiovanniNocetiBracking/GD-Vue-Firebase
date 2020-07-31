<template>

  <v-app >
    
    <top-header></top-header> 
    <sidebar></sidebar>
   
    <v-main>
      <router-view/>
    </v-main>
    
  </v-app>

</template>

<script>
import topheader from "./components/top-header";
import sidebar from "./components/sidebar";




export default {
  name: 'App',

  components:  {
    'top-header': topheader,
    'sidebar': sidebar,
    
    
    },

  data: () => ({
    //
  }),
};
</script>
<style  scoped>

</style>
