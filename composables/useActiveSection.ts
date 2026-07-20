export const useActiveSection = () => useState<string>('activeSection', () => 'top')

export const useGoToSection = () => {
  const activeSection = useActiveSection()

  const go = async (id: string) => {
    activeSection.value = id
    await nextTick()

    if (import.meta.client) {
      const isDesktop = window.matchMedia('(min-width: 768px)').matches
      if (isDesktop) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }
  }

  return { activeSection, go }
}