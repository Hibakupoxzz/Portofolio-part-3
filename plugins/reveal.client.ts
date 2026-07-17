export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp()

  const observe = () => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => io.observe(el))
  }

  nuxtApp.hook('app:mounted', () => {
    // slight delay so DOM from all sections has painted
    requestAnimationFrame(() => setTimeout(observe, 50))
  })
})
