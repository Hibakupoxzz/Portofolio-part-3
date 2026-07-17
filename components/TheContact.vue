<script setup lang="ts">
const { profile } = usePortfolioData()

const links = [
  { icon: 'lucide:github', label: profile.github, href: `https://${profile.github}` },
  { icon: 'lucide:linkedin', label: profile.linkedin, href: `https://${profile.linkedin}` },
  { icon: 'lucide:instagram', label: profile.instagram, href: `https://${profile.instagram}` },
  { icon: 'lucide:mail', label: profile.email, href: `mailto:${profile.email}` }
]
</script>

<template>
  <section id="contact" class="py-24 border-t border-base-line">
    <div class="max-w-4xl mx-auto px-6">
      <div class="reveal flex items-center gap-3">
        <span class="w-2.5 h-2.5 bg-ember rounded-tl-[3px] rounded-br-[3px]" />
        <h2 class="font-display font-extrabold text-3xl md:text-4xl text-ink">
          Get In Touch
        </h2>
      </div>
      <p class="reveal text-ink-muted max-w-xl mt-3">
        I'm always interested in new opportunities and exciting projects. Feel free to reach
        out if you'd like to work together!
      </p>

      <div class="grid sm:grid-cols-2 gap-6 mt-14">
        <div class="reveal rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md border border-base-line p-6 md:p-8">
          <p class="flex items-center gap-2 font-display font-semibold text-ink">
            <Icon name="lucide:mail" size="18" />
            Let's Talk
          </p>
          <p class="text-sm text-ink-muted leading-relaxed mt-3">
            I'm always open to discussing new opportunities, projects, or just having a chat
            about technology.
          </p>
          <a
            :href="`mailto:${profile.email}`"
            class="inline-flex items-center justify-center w-full rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-ink text-white text-sm font-medium py-3 mt-6 hover:bg-[#1E293B] transition-colors"
          >
            Send me an email
          </a>
        </div>

        <div class="reveal rounded-tl-2xl rounded-tr-md rounded-br-2xl rounded-bl-md border border-base-line p-6 md:p-8" style="transition-delay: 80ms">
          <p class="flex items-center gap-2 font-display font-semibold text-ink">
            <Icon name="lucide:map-pin" size="18" />
            Connect With Me
          </p>
          <p class="text-sm text-ink-muted leading-relaxed mt-3">
            Find me on these platforms or reach out directly via email.
          </p>
          <ul class="mt-5 space-y-3">
            <li v-for="link in links" :key="link.label">
              <a :href="link.href" class="flex items-center gap-2.5 text-sm text-ink-muted hover:text-ember transition-colors">
                <Icon :name="link.icon" size="15" />
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
