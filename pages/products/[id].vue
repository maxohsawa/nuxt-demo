<template>
  <div>
    <ProductDetail :product="product" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  definePageMeta({
    layout: 'products'
  })
  const uri = 'https://fakestoreapi.com/products/' + id;
  const { data: product } = await useFetch(uri, { key: id });
</script>

<style scoped>

</style>