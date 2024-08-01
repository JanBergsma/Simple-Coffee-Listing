<script setup>
import { ref } from 'vue'
import CoffeeCardList from './components/CoffeeCardList.vue'
import { usecoffeeBlendStore } from './stores/coffeeBlend'

const store = usecoffeeBlendStore()
const { coffeeBlends, availableBlends } = store
const coffeeList = ref(coffeeBlends)
</script>

<template>
  <main>
    <section>
      <div class="header-container">
        <h1>Our Collection</h1>
        <h2>
          Introducing our Coffee Collection, a selection of unique coffees from different roast
          types and origins, expertly roasted in small batches and shipped fresh weekly.
        </h2>
        <div class="buttons">
          <button id="all" @click="coffeeList = coffeeBlends">All Products</button>
          <button id="available" @click="coffeeList = availableBlends">Available Now</button>
        </div>
      </div>
      <CoffeeCardList :coffee-list="coffeeList" />
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
}

section {
  background-color: var(--bg-color-list-container);
  background-image: url('./assets/vector.svg');
  background-repeat: no-repeat;
  background-position: top left 80%;
  width: 80%;
  max-width: 60rem;
  height: min-content;
  /* border: 2px solid red; */
  margin-block: 5%;
  padding-block: 5%;
  border-radius: 15px;
}

h1 {
  color: var(--color-header);
  font-size: 2rem;
  font-weight: bolder;
}
h2 {
  color: var(--color-subheader);
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
}

.header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 20%;
  padding-bottom: 2rem;
  gap: 1rem;
}
</style>
