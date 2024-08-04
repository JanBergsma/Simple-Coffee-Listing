<script setup>
import { computed, ref } from 'vue'
import CoffeeCardList from './components/CoffeeCardList.vue'
import { usecoffeeBlendStore } from './stores/coffeeBlend'

const store = usecoffeeBlendStore()
const { coffeeBlends, availableBlends } = store
const coffeeList = ref(coffeeBlends)
const showAllBlends = ref(true)
const showAvailableBlends = computed(() => !showAllBlends.value)

function showAll() {
  coffeeList.value = coffeeBlends
  showAllBlends.value = true
}

function showAvailable() {
  coffeeList.value = availableBlends
  showAllBlends.value = false
}
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
          <button :class="{ active: showAllBlends }" id="all" @click="showAll">All Products</button>
          <button :class="{ active: showAvailableBlends }" id="available" @click="showAvailable">
            Available Now
          </button>
        </div>
      </div>
      <CoffeeCardList :coffee-list="coffeeList" class="coffee-card-list" />
    </section>
  </main>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bolder;
  color: var(--color-header);
}

h2 {
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-subheader);
  text-align: center;
}

.active {
  background-color: var(--bg-color-btn-active);
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  padding-block: 8%;
  padding-inline: 4rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.coffee-card-list {
  max-width: 60rem;
}

section {
  padding-block: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: clamp(20rem, 80%, 70rem);
  background-color: var(--bg-color-list-container);
  background-image: url('./assets/vector.svg');
  background-repeat: no-repeat;
  background-position: top 1% left 65%;
  border-radius: 15px;
}

.header-container {
  padding-inline: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  padding-bottom: 2rem;
  max-width: 38rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: var(--bg-color-btn);
  border: none;
  border-radius: 6px;
  color: var(--color-btn);
  font-weight: bold;
}
</style>
