<script setup>

const {command} = defineProps(['command']);
</script>

<template>
  <div>
    <span class="host">mohammd@website:~$</span> {{ command }}
  </div>
</template>

<style scoped></style>
