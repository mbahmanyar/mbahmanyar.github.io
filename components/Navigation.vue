<script setup lang="ts"></script>

<template>

  <Host command="ls" />

  <div class="navigation">
    <NuxtLink to="/">./home</NuxtLink>
    <NuxtLink to="/contact">./contact</NuxtLink>
  </div>

</template>

<style scoped>
.navigation {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}
</style>

<style>
.router-link-active::after {
  content: "*";
}

.router-link-active {
  color: #42b983;
  font-weight: bold;
}
</style>
