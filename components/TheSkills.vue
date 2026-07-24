<script setup lang="ts">
const { skills } = usePortfolioData()

// icon per category label (partial match, case-insensitive)
const categoryIcons: Record<string, string> = {
  backend: 'lucide:server',
  frontend: 'lucide:layout-panel-left',
  devops: 'lucide:terminal-square',
  sysadmin: 'lucide:terminal-square',
  tools: 'lucide:wrench',
  ai: 'lucide:brain-circuit',
  ml: 'lucide:brain-circuit',
  systems: 'lucide:cpu',
  'low level': 'lucide:cpu',
  fullstack: 'lucide:layers'
}

const categoryIcon = (label: string) => {
  const key = label.toLowerCase()
  const match = Object.keys(categoryIcons).find((k) => key.includes(k))
  return match ? categoryIcons[match] : 'lucide:folder-code'
}

// alternate accent per category card for visual variety
const categoryAccent = (i: number) =>
  i % 2 === 0
    ? { chip: 'bg-ember/10 text-ember', border: 'hover:border-ember/40', bar: 'from-ember to-ember/30' }
    : { chip: 'bg-gold/10 text-gold', border: 'hover:border-gold/40', bar: 'from-gold to-gold/30' }

// real brand icon per skill (falls back to a generic code icon if not mapped)
const skillIcons: Record<string, string> = {
  php: 'simple-icons:php',
  laravel: 'simple-icons:laravel',
  mysql: 'simple-icons:mysql',
  html: 'simple-icons:html5',
  css: 'simple-icons:css3',
  javascript: 'simple-icons:javascript',
  nuxt: 'lineicons:nuxt',
  linux: 'simple-icons:linux',
  docker: 'simple-icons:docker',
  git: 'simple-icons:git',
  github: 'simple-icons:github',
  figma: 'simple-icons:figma',
  postman: 'simple-icons:postman',
  'vs code': 'simple-icons:visualstudiocode',
  python: 'simple-icons:python',
  kernel: 'lucide:cpu',
  networking: 'lucide:network',
  'rest api': 'lucide:webhook',
  'c#': 'simple-icons:csharp',
  aseprite: 'simple-icons:aseprite',
  unity: 'simple-icons:unity',
  java: 'ri:java-fill',
  'astro.js': 'simple-icons:astro',
  photoshop: 'simple-icons:adobephotoshop',
  composer: 'simple-icons:composer',
  'after effect': 'simple-icons:adobeaftereffects',
  'blender': 'simple-icons:blender',
  'krita': 'simple-icons:krita',
  'golang': 'fa6-brands:golang'
}

const skillIcon = (name: string) => skillIcons[name.toLowerCase()] ?? 'lucide:code-2'
</script>

<template>
  <section id="skills" class="relative py-24 border-t border-base-line overflow-hidden">
    <!-- signature: soft accent blobs for depth -->
    <div class="absolute top-10 -left-16 w-56 h-56 bg-ember/10 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute bottom-0 -right-16 w-56 h-56 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

    <div class="relative max-w-6xl mx-auto px-6">
      <div class="reveal flex items-center gap-3">
        <span class="w-1 h-7 bg-ember rounded-full" />
        <h2 class="font-display font-extrabold text-3xl md:text-4xl text-ink">
          Skills
        </h2>
      </div>
      <p class="reveal text-ink-muted max-w-xl mt-3">
        The technology and tools I use every day, grouped by work area.
      </p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        <div
          v-for="(group, i) in skills"
          :key="group.label"
          class="reveal group relative overflow-hidden rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md border border-base-line bg-white/80 backdrop-blur-sm p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          :class="categoryAccent(i).border"
          :style="{ transitionDelay: (i % 4) * 80 + 'ms' }"
        >
          <span class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r" :class="categoryAccent(i).bar" />
          <div class="dot-grid absolute -top-4 -right-4 w-20 h-20 opacity-60 pointer-events-none" />

          <div class="relative flex items-center gap-2.5">
            <span
              class="inline-flex items-center justify-center w-9 h-9 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm shrink-0"
              :class="categoryAccent(i).chip"
            >
              <Icon :name="categoryIcon(group.label)" size="17" />
            </span>
            <p class="text-sm font-semibold tracking-wide text-ink uppercase">
              {{ group.label }}
            </p>
          </div>

          <ul class="relative flex flex-wrap gap-2 mt-5">
            <li
              v-for="item in group.items"
              :key="item"
              class="inline-flex items-center gap-1.5 text-sm text-ink bg-white border border-base-line rounded-lg px-3 py-1.5 hover:border-ember hover:text-ember transition-colors"
            >
              <Icon :name="skillIcon(item)" size="14" />
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>