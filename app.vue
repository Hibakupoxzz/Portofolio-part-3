<script setup lang="ts">
const activeSection = useActiveSection()
const sectionClass = (id: string) => (activeSection.value === id ? '' : 'hidden md:block')
</script>

<template>
  <div class="min-h-screen bg-white pb-16 md:pb-0">
    <div class="h-[3px] bg-ink" />
    <TheNavDesktop />
    <TheNavMobile />
    <main>
      <TheHero :class="sectionClass('top')" />
      <TheProjects :class="sectionClass('projects')" />
      <TheExperience :class="sectionClass('experience')" />
      <TheCertifications :class="sectionClass('certifications')" />
      <TheContact :class="sectionClass('contact')" />
    </main>
    <TheFooter class="hidden md:block" />
    <MobileBottomNav />
  </div>
</template>