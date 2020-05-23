<template>
  <v-app>
<v-app-bar app color="#dc143c" dark>
      
<v-toolbar-title><strong>Most Used Words</strong></v-toolbar-title>



    </v-app-bar>

    <v-content>
  
  <Home />

    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
   Home
  },

  data: () => ({
    //
  }),
};
</script>

