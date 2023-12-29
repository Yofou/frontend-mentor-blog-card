import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
	  colors: {
		  black: '#111',
		  white: '#FFF',
		  yellow: '#F4D04E',
		  grey: '#7F7F7F',
	  },
	  fontFamily: {
		  figma: ['Figtree Variable', 'sans-serif']
	  },
	  fontSize: {
		  heading: '1.5rem',
		  bodyM: '1rem',
		  bodyS: '0.875rem',
	  },
  },
  plugins: [
	plugin(({ addUtilities, theme }) => {
		addUtilities({
			'.body-s': {
				fontFamily: theme('fontFamily.figma'),
				fontSize: theme('fontSize.bodyS'),
				lineHeight: '150%',
			},
			'.body-m': {
				fontFamily: theme('fontFamily.figma'),
				fontSize: theme('fontSize.bodyM'),
				lineHeight: '150%',
			},
			'.heading': {
				fontFamily: theme('fontFamily.figma'),
				fontSize: theme('fontSize.heading'),
				lineHeight: '150%',
			},
		})
	})
  ],
}

