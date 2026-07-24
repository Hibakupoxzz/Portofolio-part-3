<script setup lang="ts">
const { activeSection, go } = useGoToSection()

const links = [
  { label: 'Home', id: 'top', icon: 'lucide:layout-dashboard' },
  { label: 'Skills', id: 'skills', icon: 'lucide:cpu' },
  { label: 'Projects', id: 'projects', icon: 'lucide:folder-kanban' },
  { label: 'Experience', id: 'experience', icon: 'lucide:briefcase' },
  { label: 'Certs', id: 'certifications', icon: 'lucide:award' },
  { label: 'Contact', id: 'contact', icon: 'lucide:mail' }
]
</script>

<template>
  <nav
    class="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-base-line"
    style="padding-bottom: env(safe-area-inset-bottom)"
  >
    <ul class="grid grid-cols-6">
      <li v-for="link in links" :key="link.label">
        <a
          :href="`#${link.id}`"
          class="flex flex-col items-center justify-center gap-1 py-2.5"
          :class="activeSection === link.id ? 'text-ink' : 'text-ink-faint'"
          @click.prevent="go(link.id)"
        >
          <Icon :name="link.icon" size="18" />
          <span class="text-[9px] font-medium">{{ link.label }}</span>
          <span
            class="w-4 h-0.5 rounded-full transition-colors"
            :class="activeSection === link.id ? 'bg-ember' : 'bg-transparent'"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>