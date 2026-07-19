<script setup lang="ts">
const { profile } = usePortfolioData()
const { go } = useGoToSection()

const isOpen = ref(false)

const links = [
  { label: 'Other', href: '#top', id: 'top' },
//   { label: 'Projects', href: '#projects', id: 'projects' },
//   { label: 'Experience', href: '#experience', id: 'experience' },
//   { label: 'Certifications', href: '#certifications', id: 'certifications' },
//   { label: 'Contact', href: '#contact', id: 'contact' },
//   {
//     label: 'Gists',
//     href: `https://${profile.github}?tab=repositories`,
//     external: true
//   }
]

const close = () => {
  isOpen.value = false
}

const onLinkClick = (link: (typeof links)[number], event: Event) => {
  if (!link.external) {
    event.preventDefault()
    go(link.id as string)
  }

  close()
}
</script>

<template>
  <header class="border-b border-base-line bg-white md:hidden">
    <nav class="flex h-16 items-center justify-between px-4">
      <a
        href="#top"
        class="flex items-center gap-2 font-display text-sm font-bold text-ink"
        @click.prevent="go('top')"
      >
        <span class="h-2.5 w-2.5 shrink-0 rounded-tl-[3px] rounded-br-[3px] bg-ember" />
        <span class="max-w-[10rem] truncate">
          {{ profile.name }}
        </span>
      </a>

      <button
        class="text-ink"
        aria-label="Buka menu"
        @click="isOpen = !isOpen"
      >
        <Icon
          :name="isOpen ? 'lucide:x' : 'lucide:menu'"
          size="22"
        />
      </button>
    </nav>

    <Transition name="fade">
      <div
        v-if="isOpen"
        class="border-t border-base-line px-4 py-5"
      >
        <ul class="flex flex-col gap-1 text-sm text-ink">
          <li
            v-for="link in links"
            :key="link.label"
          >
            <a
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener' : undefined"
              class="block rounded-md px-2 py-2 transition-colors hover:bg-base-raised hover:text-ember"
              :class="{ 'font-semibold': link.label === 'Gists' }"
              @click="onLinkClick(link, $event)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>