<script setup>


const {isFirstVisit, markVisited} = useVisitor()

const emits = defineEmits(['ready']);


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
  'Loading modules: Loading bunch of modules for you... Done. 😂',
  '[■■□□□□□□□□] Initializing system...       10%',
  '[■■■■□□□□□□] Starting services...          40%',
  '[■■■■■■■■□□] Optimizing caffeine levels... 80%',
  '[■■■■■■■■■■] Ready. Launching terminal...  100%',
  banner,
  '',
];


const lines = computed(() => [...topContent]);


const displayText = ref('')
const typingSpeed = 10 // ms per character

function typeLine(line) {
  return new Promise((resolve) => {
    let i = 0
    const interval = setInterval(() => {
      displayText.value += line[i] || ''
      i++
      if (i > line.length) {
        clearInterval(interval)
        displayText.value += '\n';
        setTimeout(resolve, 150)
      }
    }, typingSpeed)
  })
}


onMounted(async () => {
  let currentLine = 0

  async function next() {
    for (let i = 0; i < lines.value.length; i++) {
      await typeLine(lines.value[i])
    }
  }

  await next();

  markVisited()

  emits('ready')

});


</script>

<template>
  <p v-html="displayText"/>
</template>

<style scoped></style>
