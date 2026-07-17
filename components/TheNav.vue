<script setup lang="ts">
const { profile } = usePortfolioData()

const isOpen = ref(false)

const links = [
  { label: 'Home', href: '#top' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
  { label: 'Gists', href: `https://${profile.github}?tab=repositories` }
]

const close = () => (isOpen.value = false)
</script>

<template>
  <header class="border-b border-base-line bg-white">
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#top" class="font-display font-bold text-ink flex items-center gap-2">
        <span class="w-2.5 h-2.5 bg-ember rounded-tl-[3px] rounded-br-[3px]" />
        {{ profile.name }}
      </a>

      <ul class="hidden md:flex items-center gap-8 text-sm text-ink">
        <li v-for="link in links" :key="link.label">
          <a :href="link.href" class="hover:text-ember transition-colors" :class="{ 'font-semibold': link.label === 'Gists' }">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <button class="md:hidden text-ink" aria-label="Buka menu" @click="isOpen = !isOpen">
        <Icon :name="isOpen ? 'lucide:x' : 'lucide:menu'" size="22" />
      </button>
    </nav>

    <Transition name="fade">
      <div v-if="isOpen" class="md:hidden border-t border-base-line px-6 py-5">
        <ul class="flex flex-col gap-3 text-sm text-ink">
          <li v-for="link in links" :key="link.label">
            <a :href="link.href" class="block hover:text-ember transition-colors" @click="close">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
