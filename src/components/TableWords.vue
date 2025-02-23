<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-text-field
          v-model="search"
          label="Buscar"
          prepend-inner-icon="mdi-magnify"
          class="mb-8"
          hide-details
          single-line
          clearable
        >
        </v-text-field>
      </v-col>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="filterWords"
      dense
      class="elevation-2"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  props: { headers: Array, groupWords: Array },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    filterWords() {
      return this.groupWords.filter((x) =>
        x.palavra.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style>
</style>