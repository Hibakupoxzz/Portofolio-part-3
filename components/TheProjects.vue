<script setup lang="ts">
import type { Project } from '~/composables/usePortfolioData'

const { projects } = usePortfolioData()

const selectedProject = ref<Project | null>(null)
</script>

<template>
  <section id="projects" class="py-24 border-t border-base-line">
    <div class="max-w-6xl mx-auto px-6">
      <div class="reveal flex items-center gap-3">
        <span class="w-2.5 h-2.5 bg-ember rounded-tl-[3px] rounded-br-[3px]" />
        <h2 class="font-display font-extrabold text-3xl md:text-4xl text-ink">
          Featured Projects
        </h2>
      </div>
      <p class="reveal text-ink-muted max-w-xl mt-3">
        Here are some of the projects I've worked on. Each one represents a unique challenge
        and an opportunity to learn and grow as a developer.
      </p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        <article
          v-for="(project, i) in projects"
          :key="project.title"
          class="reveal rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md border border-base-line overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
          :style="{ transitionDelay: (i % 3) * 80 + 'ms' }"
        >
          <div class="relative h-44 overflow-hidden">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="absolute inset-0 w-full h-full object-cover object-top"
            >
            <div v-else class="absolute inset-0 bg-gradient-to-br from-ember to-gold" />
          </div>

          <div class="p-5">
            <h3 class="font-display font-bold text-lg text-ink">{{ project.title }}</h3>
            <p class="text-sm text-ink-muted leading-relaxed h-16 overflow-hidden mt-1.5">
              {{ project.description }}
            </p>

            <ul class="flex flex-wrap gap-1.5 mt-4">
              <li
                v-for="tech in project.stack"
                :key="tech"
                class="text-[11px] font-medium text-ember bg-ember/10 rounded px-2 py-1"
              >
                {{ tech }}
              </li>
            </ul>

          <div class="flex items-center gap-2 mt-5">
            <button
              v-if="project.detailsUrl || project.features?.length || project.showcase?.length"
              type="button"
              class="flex-1 inline-flex items-center justify-center gap-1.5 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-ink text-white text-xs font-medium py-2.5 hover:bg-[#1E293B] transition-colors"
              @click="selectedProject = project"
            >
              <Icon name="lucide:eye" size="13" />
              View Details
            </button>

            <a
              v-if="project.demoUrl"
              :href="project.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-1.5 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm border border-base-line text-ink text-xs font-medium px-3 py-2.5 hover:border-ink transition-colors"
              :class="(project.detailsUrl || project.features?.length || project.showcase?.length)
                ? ''
                : 'flex-1'"
            >
              <Icon name="lucide:external-link" size="13" />
              Demo
            </a>

            <a
              v-else-if="project.codeUrl"
              :href="project.codeUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-1.5 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm border border-base-line text-ink text-xs font-medium px-3 py-2.5 hover:border-ink transition-colors"
              :class="(project.detailsUrl || project.features?.length || project.showcase?.length)
                ? ''
                : 'flex-1'"
            >
              <Icon name="lucide:code" size="13" />
              Code
            </a>
          </div>
          </div>
        </article>
      </div>
    </div>

    <ProjectModal :project="selectedProject" @close="selectedProject = null" />
  </section>
</template>