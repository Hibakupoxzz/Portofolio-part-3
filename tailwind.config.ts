import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#FFFFFF', // clean white page background
          surface: '#FAFBFD', // section surface, near-white
          raised: '#F1F5F9',  // pill / hover surface (slate-100)
          line: '#E5E7EB'     // hairline borders (gray-200)
        },
        ember: {
          DEFAULT: '#6C4FCA', // accent violet, sampled from project card art
          soft: '#8B70DE',
          deep: '#4F379E'
        },
        gold: {
          DEFAULT: '#4C3A94' // secondary deeper violet
        },
        ink: {
          DEFAULT: '#0F172A', // slate-900, headings + solid buttons
          muted: '#64748B',   // slate-500, secondary text
          faint: '#94A3B8'    // slate-400, tertiary / captions
        }
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'ember-glow':
          'radial-gradient(60% 50% at 50% 0%, rgba(108,79,202,0.08) 0%, rgba(108,79,202,0) 70%)'
      }
    }
  },
  plugins: []
}
