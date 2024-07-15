<template>
  <article>
    <div class="image-contaner">
      <div v-if="popular" class="popular">Popular</div>
    </div>
    <div class="label">
      <h1>{{ name }}</h1>
      <div class="label price">{{ price }}</div>
    </div>
    <div class="label">
      <div v-if="rating" class="rating">
        <img class="star" src="../assets/Star_fill.svg" alt="ratings" />
        <p>{{ rating }}</p>
        <p class="votes">({{ votes }} Votes)</p>
      </div>
      <div v-else class="rating">
        <img class="star" src="../assets/Star.svg" alt="no ratings" />
        <p class="votes">No ratings</p>
      </div>
      <p v-if="!available" class="sold-out">Sold out</p>
    </div>
  </article>
</template>

<script setup>
const { coffee } = defineProps(['coffee'])
const { name, image, price, rating, votes, popular, available } = coffee
const imageUrl = `url(${image})`
</script>

<style scoped>
article {
  background: var(--bg-color-card);
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.popular {
  background: #f6c768;
  width: max-content;
  font-size: 0.625rem;
  font-weight: bolder;
  padding: 0.3rem 0.6rem;
  border-radius: 10px;
}

.image-contaner {
  padding: 0.4rem;
  width: 260px;
  height: 155px;
  border-radius: 5%;
  background-image: v-bind('imageUrl');
}

h1 {
  color: var(--color-label-card);
  font-weight: bolder;
  font-size: 1rem;
}

.label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  background: var(--bg-color-price);
  border-radius: 5px;
  padding: 0.2rem 0.6rem;
  font-size: 0.75rem;
  font-weight: bolder;
}

.rating {
  color: var(--color-label-card);
  display: flex;
  width: 75%;
  gap: 0.2rem;
  align-items: center;
  font-weight: bolder;
  font-size: 0.875rem;
}

.star {
  width: 1.5rem;
}

.votes {
  color: var(--color-votes);
  font-weight: bolder;
  font-size: 0.875rem;
}

.sold-out {
  color: var(--blend--sold-out);
  font-size: 0.875rem;
  font-weight: bolder;
  width: fit-content;
}
</style>
