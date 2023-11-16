<template>
  <div>
    <h1>products</h1>
    <div class="grid grid-cols-2 gap-5">
       <div v-for="p in products">
          <ProductCard :product="p" />
        </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })

  const { data: products } = await useFetch('https://fakestoreapi.com/products')

  useHead({
    title: 'cube shop'
  })
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>