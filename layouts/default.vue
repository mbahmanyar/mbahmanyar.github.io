<script setup lang="ts">
</script>

<template>

  <div class="terminal-frame">
    <div class="terminal-header">
      <span class="btn red"></span>
      <span class="btn yellow"></span>
      <span class="btn green"></span>
      <span class="title">Mohammad Terminal</span>
    </div>
    <div class="terminal-body">
      <slot/>
      <span class="cursor"></span>
    </div>
  </div>
</template>

<style>

body, html {
  margin: 0;
  padding: 0;
  background: #222020; /* true black main background */
  font-family: 'Courier New', monospace;
}

/* Outer frame */
.terminal-frame {
  max-width: 1100px;
  margin: 3rem auto;
  background: #222;                /* terminal outer background (grey) */
  border: 1px solid #555;          /* distinct border */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,0.6);
}

/* Header bar */
.terminal-header {
  background: #333;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.title {
  color: #aaa;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.85rem;
}

/* Terminal window interior */
.terminal-body {
  background: #222020;
  color: #00ff00;
  padding: 20px;
  font-size: 1.1rem; /* larger font */
  line-height: 1.6;
  white-space: pre-wrap;
}

/* Pink "Fosphorate" style for hostnames */
.terminal-body .host {
  color: #ff69b4;
  font-weight: bold;
}

/* Cursor blink */
.cursor {
  display: inline-block;
  width: 10px;
  height: 1em;
  background-color: #00ff00;
  margin-left: 2px;
  animation: blink 0.8s steps(2, start) infinite;
}
@keyframes blink { to { background: transparent; } }

a {
  color: #3399ff;
  text-decoration:none;
  text-decoration-style: dashed;
  font-size: 1.2em;
  line-height: 1.8;
}
a:hover {
  text-decoration: underline;
}
</style>
