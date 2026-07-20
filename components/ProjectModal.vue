<script setup lang="ts">
import type { Project } from '~/composables/usePortfolioData'

const props = defineProps<{
  project: Project | null
}>()

const emit = defineEmits<{
  close: []
}>()

const close = () => emit('close')

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

watch(
  () => props.project,
  (project) => {
    if (import.meta.client) {
      document.body.style.overflow = project ? 'hidden' : ''
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)

  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="project"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm"
        @click.self="close"
      >
        <div
          class="bg-white w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md shadow-2xl"
        >
          <div
            class="sticky top-0 bg-white border-b border-base-line flex items-start justify-between p-6 pb-5"
          >
            <div>
              <h3 class="font-display font-extrabold text-2xl text-ink">
                {{ project.title }}
              </h3>

              <ul class="flex flex-wrap gap-1.5 mt-3">
                <li
                  v-for="tech in project.stack"
                  :key="tech"
                  class="text-xs font-medium text-white bg-ink rounded-full px-3 py-1"
                >
                  {{ tech }}
                </li>
              </ul>
            </div>

            <button
              class="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-base-raised text-ink-muted hover:text-ink transition-colors"
              aria-label="Tutup"
              @click="close"
            >
              <Icon name="lucide:x" size="18" />
            </button>
          </div>

          <div class="p-6 pt-5">
            <h4 class="font-display font-semibold text-ink">
              About this Project
            </h4>

            <p class="text-sm text-ink-muted leading-relaxed mt-2">
              {{ project.description }}
            </p>

            <template v-if="project.features?.length">
              <h4
                class="flex items-center gap-2 font-display font-semibold text-ink mt-6"
              >
                <Icon
                  name="lucide:check-circle-2"
                  size="18"
                  class="text-ember"
                />
                Key Features
              </h4>

              <ul class="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-3">
                <li
                  v-for="feature in project.features"
                  :key="feature"
                  class="flex items-start gap-2 text-sm text-ink-muted leading-relaxed"
                >
                  <Icon
                    name="lucide:check-circle-2"
                    size="15"
                    class="text-ember shrink-0 mt-0.5"
                  />
                  {{ feature }}
                </li>
              </ul>
            </template>

            <template v-if="project.showcase?.length">
              <h4 class="font-display font-semibold text-ink mt-6">
                Project Showcase
              </h4>

              <div class="flex gap-3 mt-3 overflow-x-auto pb-1 -mx-1 px-1">
                <img
                  v-for="(shot, i) in project.showcase"
                  :key="i"
                  :src="shot"
                  :alt="`${project.title} showcase ${i + 1}`"
                  class="h-64 w-auto rounded-lg border border-base-line shrink-0"
                />
              </div>
            </template>

            <a
              v-if="project.detailsUrl && project.detailsUrl !== '#'"
              :href="project.detailsUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1.5 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-ink text-white text-sm font-medium px-5 py-2.5 mt-7 hover:bg-[#1E293B] transition-colors"
            >
              <Icon name="lucide:external-link" size="14" />
              Visit Live Site
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>