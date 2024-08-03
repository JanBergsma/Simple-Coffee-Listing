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
  justify-items: center;
  display: grid;
  justify-content: center;
  gap: 1rem;
  grid-template-rows: repeat(auto-fit, 260px);
  grid-template-columns: repeat(auto-fit, 280px);
  width: 100%;
}
</style>
