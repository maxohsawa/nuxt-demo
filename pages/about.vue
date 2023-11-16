<template>
  <div>
    <h1>about</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur veniam repellat error eius voluptates praesentium temporibus cumque sequi hic possimus.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur veniam repellat error eius voluptates praesentium temporibus cumque sequi hic possimus.</p>
    <h3 class="text-xl">exchange rate</h3>
    <div v-for="currency in Object.keys(data)">
      <p>USD/{{ data[currency].code }}: {{ data[currency].value }}</p>
    </div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/test?name=max', {
    method: 'post',
    body: { age: 36 }
  })
  console.log('data', data)
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