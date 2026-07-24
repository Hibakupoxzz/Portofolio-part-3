<script setup lang="ts">
const { profile } = usePortfolioData()

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
  { label: 'Gists', href: `https://${profile.github}?tab=repositories`, external: true }
]
</script>

<template>
  <header class="hidden border-b border-base-line bg-white md:block">
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
      <!-- Logo -->
      <a
        href="#top"
        class="flex items-center gap-2 font-display font-bold text-ink"
      >
        <span class="h-2.5 w-2.5 rounded-tl-[3px] rounded-br-[3px] bg-ember" />
        {{ profile.name }}
      </a>

      <!-- Navigation -->
      <ul class="flex items-center gap-8 text-sm text-ink">
        <li
          v-for="link in links"
          :key="link.label"
        >
          <a
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener' : undefined"
            class="transition-colors hover:text-ember"
            :class="{ 'font-semibold': link.label === 'Gists' }"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>