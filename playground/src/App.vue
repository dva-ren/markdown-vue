<script setup lang="ts">
import { VMarkdown } from '../../src'
import '../../src/themes/default.css'
import text from './test.md?raw'
</script>

<template>
  <div style="max-width: 900px; margin: 0 auto;">
    <VMarkdown :text="text" />
  </div>
</template>
