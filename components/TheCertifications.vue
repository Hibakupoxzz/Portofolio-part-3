<script setup lang="ts">
const { certifications } = usePortfolioData()
</script>

<template>
  <section id="certifications" class="py-24 border-t border-base-line">
    <div class="max-w-6xl mx-auto px-6">
      <div class="reveal flex items-center gap-3">
        <span class="w-2.5 h-2.5 bg-ember rounded-tl-[3px] rounded-br-[3px]" />
        <h2 class="font-display font-extrabold text-3xl md:text-4xl text-ink">
          Certifications
        </h2>
      </div>
      <p class="reveal text-ink-muted max-w-xl mt-3">
        Professional certifications that validate my expertise and commitment to continuous
        learning in various technologies and platforms.
      </p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
        <article
          v-for="(cert, i) in certifications"
          :key="cert.title + cert.id"
          class="reveal rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md border border-base-line p-5 flex flex-col"
          :style="{ transitionDelay: (i % 3) * 80 + 'ms' }"
        >
          <div class="flex items-start justify-between">
            <span class="inline-flex items-center justify-center w-9 h-9 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm border border-base-line text-ember">
              <Icon name="lucide:award" size="16" />
            </span>
            <span class="inline-flex items-center gap-1 text-xs text-ink-faint">
              <Icon name="lucide:calendar" size="12" />
              {{ cert.date }}
            </span>
          </div>

          <h3 class="font-display font-semibold text-ink mt-4 leading-snug">{{ cert.title }}</h3>
          <p class="text-sm text-ink-muted mt-1">{{ cert.issuer }}</p>
          <!-- <p class="text-xs text-ink-faint mt-0.5">ID: {{ cert.id }}</p> -->
          <p v-if="cert.description" class="text-sm text-ink-muted leading-relaxed mt-3">
            {{ cert.description }}
          </p>

          <div class="flex items-center gap-2 mt-5 pt-1">
            <a
              v-if="cert.detailsUrl"
              :href="cert.detailsUrl"
              class="flex-1 inline-flex items-center justify-center gap-1.5 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm border border-base-line text-ink text-xs font-medium py-2.5 hover:border-ink transition-colors"
            >
              <Icon name="lucide:external-link" size="13" />
              View Details
            </a>
            <a
              v-if="cert.certificateUrl"
              :href="cert.certificateUrl"
              class="flex-1 inline-flex items-center justify-center gap-1.5 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-ink text-white text-xs font-medium py-2.5 hover:bg-[#1E293B] transition-colors"
            >
              <Icon name="lucide:eye" size="13" />
              Certificate
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
