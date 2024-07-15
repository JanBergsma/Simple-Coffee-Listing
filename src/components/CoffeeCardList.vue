<template>
  <div class="container">
    <CoffeeCard :coffee="coffee" v-for="coffee of coffeeList" :key="coffee.id" />
  </div>
</template>

<script setup>
import CoffeeCard from './CoffeeCard.vue'

const { coffeeList } = defineProps(['coffeeList'])
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  grid-template-rows: repeat(auto-fit, 260px);
  justify-content: center;
  justify-items: center;
  gap: 1rem;
  width: 100%;
}
</style>
