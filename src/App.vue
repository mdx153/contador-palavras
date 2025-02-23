<template>
  <v-app>
    <v-app-bar app color="#000" dark class="font-bar">
      <v-toolbar-title class="text-no-wrap centralizador">Contador de palavras</v-toolbar-title>
    </v-app-bar>

    <v-main> <HomePage/> </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage.vue'
export default {
  name: "App",

  components: {
    HomePage
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.font-bar {
  color: white;
}

.centralizador {
  flex-grow: 1;
  text-align: center;
}

</style>