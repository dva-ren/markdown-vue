<script setup lang="ts">
import { Component as Markdown } from '../../src'
import '../../src/themes/default.css'
import text from './test.md?raw'
</script>

<template>
  <div style="max-width: 900px; margin: 0 auto;">
    <Markdown :text="text" />
  </div>
</template>
