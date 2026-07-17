<script setup lang="ts">
const { profile } = usePortfolioData()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-base-line">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-center text-sm text-ink-faint">
      © {{ year }} {{ profile.name }}. All rights reserved.
    </div>
  </footer>
</template>
