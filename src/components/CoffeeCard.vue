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
h1 {
  font-size: 1rem;
  font-weight: bolder;
  color: var(--color-label-card);
}

.image-contaner {
  width: 260px;
  height: 155px;
  padding: 0.4rem;
  background-image: v-bind('imageUrl');
  border-radius: 5%;
}

.label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popular {
  width: max-content;
  padding: 0.3rem 0.6rem;
  background: #f6c768;
  border-radius: 10px;
  font-size: 0.625rem;
  font-weight: bolder;
}

.price {
  padding: 0.2rem 0.6rem;
  background: var(--bg-color-price);
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: bolder;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  width: 75%;
  font-size: 0.875rem;
  font-weight: bolder;
  color: var(--color-label-card);
}

article {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: fit-content;
  height: fit-content;
  background: var(--bg-color-card);
}

.sold-out {
  width: fit-content;
  font-size: 0.875rem;
  font-weight: bolder;
  color: var(--blend--sold-out);
}

.star {
  width: 1.5rem;
}

.votes {
  font-size: 0.875rem;
  font-weight: bolder;
  color: var(--color-votes);
}
</style>
