<template>
  <v-container fluid>
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
      groupedWords: [
          { name: 'you', amount: 900},
          { name: 'he', amount: 853},
          { name: 'i', amount: 1222},
          { name: 'he', amount: 853},
          { name: 'i', amount: 1222},
          { name: 'he', amount: 853},
          { name: 'i', amount: 1222},
          { name: 'he', amount: 853},
          { name: 'i', amount: 1222},
          { name: 'he', amount: 853},
          { name: 'i', amount: 1222},
          { name: 'he', amount: 853},
          { name: 'i', amount: 1222},
          { name: 'he', amount: 853},
          { name: 'i', amount: 1222},
          { name: 'he', amount: 853},
          { name: 'i', amount: 1222},
          { name: 'he', amount: 853},
          { name: 'i', amount: 1222},
          { name: 'he', amount: 853},
          { name: 'i', amount: 1222},
      ]
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