<template>
  <div>
    <h1>about</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur veniam repellat error eius voluptates praesentium temporibus cumque sequi hic possimus.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur veniam repellat error eius voluptates praesentium temporibus cumque sequi hic possimus.</p>
    <h3 class="text-2xl">exchange rates</h3>
    <div v-for="c of Object.keys(currencies.data)">USD/{{ c }}: {{ currencies.data[c].value }}</div>
   
  </div>
</template>

<script setup>
  // const { data } = await useFetch('/api/test?name=max', {
  //   method: 'post',
  //   body: { age: 36 }
  // })
  const { data: currencies } = await useFetch('/api/currency/EUR,USD,CAD')
  
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