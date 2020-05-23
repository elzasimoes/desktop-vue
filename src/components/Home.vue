<template>
  <v-container fluid>
    <v-form> 
      <v-file-input 
      label="Selecione as legendas"
      prepend-icon="mdi-message-text"
      append-outer-icon="mdi-send"
      outlined
      multiple 
      chips 
      v-model="files"
      @click:append-outer="processSubtitles"
       />
        
      </v-form> 
<div class="card">
  <Card v-for="word in groupedWords" :key="word.name" 
    :name="word.name" :amount="word.amount"
  />


</div>
    </v-container>
</template>

<script>
import Card from './Card'

export default {
  components: { Card },
  data: function () {
    return {
      files: [],
      groupedWords: [
          { name: 'you', amount: 900},
          { name: 'he', amount: 853},
          { name: 'i', amount: 1222},
    
      ]
    }
      },
    methods: {
      processSubtitles() {
        console.log(this.files)
    }
  }
}
</script>

<style>
  .card {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>