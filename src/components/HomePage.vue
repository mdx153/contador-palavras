<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        label="Selecione os arquivos"
        append-outer-icon="mdi-send"
        outlined
        multiple
        chips
        v-model="files"
        @click:append-outer="processFiles"
      />
    </v-form>
    <v-radio-group v-model="separator" row class="mt-n4">
      <v-radio
        v-for="separatorT in typeSeparator"
        :key="separatorT.type"
        :label="separatorT.type"
        :value="separatorT.value"
      />
    </v-radio-group>
    <TableWords
      :headers="headers"
      :groupWords="groupWords"
      v-if="groupWords && groupWords.length > 0"
    />
  </v-container>
</template>

<script>
import TableWords from "./TableWords.vue";
import { ipcRenderer } from "electron";

export default {
  components: { TableWords },
  data() {
    return {
      headers: [
        { text: "Palavra", value: "palavra" },
        { text: "Quantidade", value: "quantidade" },
      ],
      groupWords: [],
      typeSeparator: [
        { type: "Por linha", value: 0 },
        { type: "Por virgula", value: 1 },
        { type: "Por espaço", value: 2 },
      ],
      separator: 0,
      files: [],
    };
  },
  methods: {
    processFiles() {
      const filesPaths = this.files.map((x) => x.path);
      ipcRenderer.send("processFiles", filesPaths, this.separator);
      ipcRenderer.on("processFiles", (event, resp) => {
        this.groupWords = resp;
      });
    },
  },
};
</script>

<style>
</style>