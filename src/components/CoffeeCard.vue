<template>
  <article>
    <img :src="image" alt="" />
    <div class="label">
      <h1>{{ name }}</h1>
      <div class="label price">{{ price }}</div>
    </div>
    <div class="label">
      <div class="rating">
        
      </div>
    </div>
  </article>
</template>

<script setup>
const { coffee } = defineProps(['coffee'])
const { name, image, price, rating, votes, popular, available } = coffee
</script>

<style scoped>
article {
  background: var(--bg-color-card);
  width: 260px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

img {
  width: 100%;
  border-radius: 5%;
}

h1 {
  color: var(--color-label-card);
}

.label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: bold;
}

.price {
  background: var(--bg-color-price);
  border-radius: 5px;
  padding: 0.1rem 0.2rem;
}
</style>
