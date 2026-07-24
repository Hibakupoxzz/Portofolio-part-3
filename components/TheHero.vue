<script setup lang="ts">
const { profile } = usePortfolioData()

const socials = [
  { icon: 'lucide:github', href: `https://${profile.github}`, label: 'GitHub' },
  { icon: 'lucide:linkedin', href: `https://${profile.linkedin}`, label: 'LinkedIn' },
  { icon: 'lucide:instagram', href: `https://${profile.instagram}`, label: 'Instagram' },
  { icon: 'lucide:mail', href: `mailto:${profile.email}`, label: 'Email' }
]

const failedPhotos = ref<Set<number>>(new Set())
const markFailed = (i: number) => failedPhotos.value.add(i)
const allPhotosFailed = computed(() => failedPhotos.value.size >= profile.photos.length)

const initials = profile.name
  .split(' ')
  .map((word) => word[0])
  .slice(0, 2)
  .join('')
  .toUpperCase()
</script>

<template>
  <section id="top" class="py-20 md:py-28">
    <div class="max-w-5xl mx-auto px-6 grid lg:grid-cols-[1.05fr,0.95fr] gap-14 lg:gap-10 items-center">
      <!-- text column -->
      <div class="text-center lg:text-left order-2 lg:order-1">
        <p class="reveal inline-flex items-center gap-1.5 text-xs font-medium text-ember bg-ember/10 rounded-full px-3 py-1">
          <span class="w-1.5 h-1.5 rounded-full bg-ember" />
          Available for work
        </p>

        <h1 class="reveal font-display font-extrabold text-4xl sm:text-5xl leading-tight text-ink mt-5" style="transition-delay: 60ms">
          Hi, I'm {{ profile.name }}
        </h1>

        <p class="reveal text-lg text-ink-muted mt-5 leading-relaxed max-w-md mx-auto lg:mx-0" style="transition-delay: 140ms">
          A passionate <span class="font-semibold text-ink">{{ profile.role }}</span> with
          <span class="font-semibold text-ink">{{ profile.yoe }} YoE</span> {{ profile.tagline }}
        </p>

        <div class="reveal flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-8" style="transition-delay: 220ms">
          <a
            href="#projects"
            class="inline-flex items-center rounded-tl-xl rounded-tr-md rounded-br-xl rounded-bl-md bg-ink text-white text-sm font-medium px-6 py-3 hover:bg-[#1E293B] transition-colors"
          >
            View My Resume
          </a>
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            class="inline-flex items-center justify-center w-11 h-11 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm border border-base-line text-ink hover:border-ink transition-colors"
          >
            <Icon :name="social.icon" size="18" />
          </a>
        </div>
      </div>

      <!-- photo column: the portfolio's signature visual -->
      <div class="reveal order-1 lg:order-2 flex justify-center lg:justify-end" style="transition-delay: 100ms">
        <div class="relative w-64 h-72 sm:w-80 sm:h-96">
          <!-- decorative dot-grid, offset behind the photo -->
          <div class="dot-grid absolute -bottom-5 -right-5 w-full h-full rounded-tl-[2.5rem] rounded-br-[2.5rem]" />
          <!-- soft accent blob -->
          <div class="absolute -top-6 -left-6 w-28 h-28 bg-ember/15 rounded-full blur-2xl" />

          <div class="relative w-full h-full rounded-tl-[2.5rem] rounded-tr-lg rounded-br-[2.5rem] rounded-bl-lg overflow-hidden border-4 border-white shadow-xl bg-base-surface">
            <template v-if="!allPhotosFailed">
              <img
                v-for="(photo, i) in profile.photos"
                v-show="!failedPhotos.has(i)"
                :key="photo"
                :src="photo"
                :alt="`${profile.name} ${i + 1}`"
                class="photo-slide absolute inset-0 w-full h-full object-cover"
                :style="{ animationDelay: (-i * 3.5) + 's' }"
                @error="markFailed(i)"
              >
            </template>
            <div
              v-else
              class="w-full h-full bg-ink text-white flex items-center justify-center font-display font-bold text-4xl"
            >
              {{ initials }}
            </div>
          </div>

          <!-- floating status badge -->
          <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 flex items-center gap-2 bg-white border border-base-line rounded-full pl-2 pr-3.5 py-1.5 shadow-md">
            <span class="relative flex w-2.5 h-2.5">
              <span class="pulse-dot absolute inline-flex w-2.5 h-2.5 rounded-full bg-ember" />
              <span class="relative inline-flex w-2.5 h-2.5 rounded-full bg-ember" />
            </span>
            <span class="text-xs font-medium text-ink whitespace-nowrap">{{ profile.role }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
