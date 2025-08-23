<script setup lang="ts">

const {text} = defineProps({text: Array});

const firstLoad = useCookie('first-load', {
  default: () => true,
  maxAge: 60 * 60 * 24 * 365 // 1 year
});


const banner = `<pre class="banner">
 _____ ______       ________  ________  ___  ___  _____ ______   ________  ________       ___    ___ ________  ________
|\\   _ \\  _   \\    |\\   __  \\|\\   __  \\|\\  \\|\\  \\|\\   _ \\  _   \\|\\   __  \\|\\   ___  \\    |\\  \\  /  /|\\   __  \\|\\   __  \\
\\ \\  \\\\\\__\\ \\  \\   \\ \\  \\|\\ /\\ \\  \\|\\  \\ \\  \\\\\\  \\ \\  \\\\\\__\\ \\  \\ \\  \\|\\  \\ \\  \\\\ \\  \\   \\ \\  \\/  / | \\  \\|\\  \\ \\  \\|\\  \\
 \\ \\  \\\\|__| \\  \\   \\ \\   __  \\ \\   __  \\ \\   __  \\ \\  \\\\|__| \\  \\ \\   __  \\ \\  \\\\ \\  \\   \\ \\    / / \\ \\   __  \\ \\   _  _\\
  \\ \\  \\    \\ \\  \\ __\\ \\  \\|\\  \\ \\  \\ \\  \\ \\  \\ \\  \\ \\  \\    \\ \\  \\ \\  \\ \\  \\ \\  \\\\ \\  \\   \\/  /  /   \\ \\  \\ \\  \\ \\  \\\\  \\|
   \\ \\__\\    \\ \\__\\\\__\\ \\_______\\ \\__\\ \\__\\ \\__\\ \\__\\ \\__\\    \\ \\__\\ \\__\\ \\__\\ \\__\\\\ \\__\\__/  / /      \\ \\__\\ \\__\\ \\__\\\\ _\\
    \\|__|     \\|__\\|__|\\|_______|\\|__|\\|__|\\|__|\\|__|\\|__|     \\|__|\\|__|\\|__|\\|__| \\|__|\\___/ /        \\|__|\\|__|\\|__|\\|__|
                                                                                        \\|___|/
</pre>`;

const topContent = [
  `Last login: ${new Date().toDateString()} ${new Date().toTimeString().split(' ')[0]} on ttys000`,
  'Booting MohammadOS v3.0...',
  'Loading modules: nuxt, github-pages, caffeine ☕',
  '',
  banner,
  '',
];


const lines = computed(() => [...topContent, ...text]);



const displayText = ref('')
const typingSpeed = 10 // ms per character

function typeLine(line, cb) {
  let i = 0
  const interval = setInterval(() => {
    displayText.value += line[i] || ''
    i++
    if (i > line.length) {
      clearInterval(interval)
      displayText.value += '\n';
      setTimeout(cb, 150)
    }
  }, typingSpeed)
}


onMounted(() => {
  let currentLine = 0

  function next() {
    if (!lines || !Array.isArray(lines.value)) {
      return;
    }

    if (currentLine < lines.value.length) {
      typeLine(lines.value[currentLine], () => {
        currentLine++
        next()
      })
    }
  }

  next();
  firstLoad.value = false;

});
</script>

<template>
  <p v-html="displayText" />
</template>

<style scoped></style>
