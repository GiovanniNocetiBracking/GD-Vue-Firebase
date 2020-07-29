<template>

  <v-app >
    
    <top-header></top-header> 
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
<style  scoped>

</style>
