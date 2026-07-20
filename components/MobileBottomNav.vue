<script setup lang="ts">
const { activeSection, go } = useGoToSection()

const links = [
  { label: 'Home', id: 'top', icon: 'lucide:layout-dashboard' },
  { label: 'Projects', id: 'projects', icon: 'lucide:folder-kanban' },
  { label: 'Experience', id: 'experience', icon: 'lucide:briefcase' },
  { label: 'Certs', id: 'certifications', icon: 'lucide:award' },
  { label: 'Contact', id: 'contact', icon: 'lucide:mail' }
]
</script>

<template>
  <nav
    class="fixed bottom-0 inset-x-0 z-40 border-t border-base-line bg-white md:hidden"
    style="padding-bottom: env(safe-area-inset-bottom)"
  >
    <ul class="grid grid-cols-5">
      <li
        v-for="link in links"
        :key="link.id"
      >
        <a
          :href="`#${link.id}`"
          class="flex flex-col items-center justify-center gap-1 py-2.5 transition-colors"
          :class="activeSection === link.id ? 'text-ink' : 'text-ink-faint'"
          @click.prevent="go(link.id)"
        >
          <Icon
            :name="link.icon"
            size="20"
          />

          <span class="text-[10px] font-medium">
            {{ link.label }}
          </span>

          <span
            class="h-0.5 w-5 rounded-full transition-colors"
            :class="activeSection === link.id ? 'bg-ember' : 'bg-transparent'"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>