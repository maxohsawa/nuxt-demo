<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">nuxt demo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink class='font-bold' to='/'>home</NuxtLink></li>
          <li><NuxtLink to='/about'>about</NuxtLink></li>
          <li><NuxtLink to='/products' class="btn">products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto p-4">
      <slot />
    </main>
    <footer>

    </footer>
  </div>
</template>

<style scoped>
  #__nuxt {
    background-color: #A6ECFF;
  }
  .router-link-exact-active {
    color: #262549
  }
</style>