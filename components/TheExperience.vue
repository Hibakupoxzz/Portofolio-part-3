<script setup lang="ts">
const { experience } = usePortfolioData()
</script>

<template>
  <section id="experience" class="py-24 bg-base-surface border-t border-base-line">
    <div class="max-w-6xl mx-auto px-6">
      <div class="reveal flex items-center gap-3">
        <span class="w-2.5 h-2.5 bg-ember rounded-tl-[3px] rounded-br-[3px]" />
        <h2 class="font-display font-extrabold text-3xl md:text-4xl text-ink">
          Work Experience
        </h2>
      </div>
      <p class="reveal text-ink-muted max-w-xl mt-3">
        My professional journey and the experiences that have shaped my skills and expertise
        in software development.
      </p>

      <div class="space-y-6 mt-14">
        <article
          v-for="(job, i) in experience"
          :key="job.company + job.period"
          class="reveal bg-white rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md border border-base-line p-6 md:p-8"
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 class="font-display font-bold text-lg text-ink">{{ job.role }}</h3>
              <p class="text-ink font-medium">{{ job.company }}</p>
              <p class="text-sm text-ink-faint mt-0.5">{{ job.location }}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-xs font-medium border border-base-line rounded-full px-3 py-1 text-ink">
                {{ job.type }}
              </span>
              <span class="text-xs font-medium bg-ink text-white rounded-full px-3 py-1">
                {{ job.period }}
              </span>
            </div>
          </div>

          <p class="text-ink-muted leading-relaxed mt-4">{{ job.summary }}</p>

          <ul class="mt-4 space-y-1.5">
            <li
              v-for="bullet in job.bullets"
              :key="bullet"
              class="flex items-start gap-2 text-sm text-ink-muted leading-relaxed"
            >
              <span class="mt-2 w-1 h-1 rounded-full bg-ink-faint shrink-0" />
              {{ bullet }}
            </li>
          </ul>

          <ul class="flex flex-wrap gap-1.5 mt-5">
            <li
              v-for="tag in job.tags"
              :key="tag"
              class="text-[11px] font-medium text-ink-muted bg-base-raised rounded px-2 py-1"
            >
              {{ tag }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
