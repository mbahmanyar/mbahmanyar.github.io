<script setup>
const {text} = defineProps({text: Array});


const displayText = text.join('\n');



</script>

<template>
  <p v-html="displayText"/>
</template>

<style scoped></style>
