/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				serif: ['Merriweather', 'Georgia', 'serif'],
			},
			colors: {
				yeti: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#082f49',
				}
			},
			minHeight: {
				11: '2.75rem',
				12: '3rem',
			},
			maxWidth: {
				measure: '56ch',
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.slate.700'),
						'--tw-prose-headings': theme('colors.slate.900'),
						'--tw-prose-links': theme('colors.yeti.700'),
						'--tw-prose-bold': theme('colors.slate.900'),
						'--tw-prose-quotes': theme('colors.slate.800'),
						'--tw-prose-quote-borders': theme('colors.yeti.300'),
						'--tw-prose-code': theme('colors.yeti.800'),
						'--tw-prose-th-borders': theme('colors.slate.300'),
						'--tw-prose-td-borders': theme('colors.slate.200'),
						'--tw-prose-invert-body': theme('colors.slate.300'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-links': theme('colors.yeti.400'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-quotes': theme('colors.slate.200'),
						'--tw-prose-invert-quote-borders': theme('colors.yeti.700'),
						'--tw-prose-invert-code': theme('colors.yeti.300'),
						'--tw-prose-invert-th-borders': theme('colors.slate.600'),
						'--tw-prose-invert-td-borders': theme('colors.slate.800'),
						maxWidth: '56ch',
						a: { fontWeight: '600', textDecoration: 'none', textUnderlineOffset: '4px' },
						'a:hover': { textDecoration: 'underline' },
						'h2, h3, h4': { fontFamily: theme('fontFamily.serif').join(', '), letterSpacing: '-0.01em' },
						h2: { marginTop: '2.5em', marginBottom: '0.75em' },
						h3: { marginTop: '1.75em', marginBottom: '0.5em' },
						img: { borderRadius: theme('borderRadius.lg') },
						blockquote: { fontStyle: 'normal', fontWeight: '400' },
						'blockquote p:first-of-type::before': { content: 'none' },
						'blockquote p:last-of-type::after': { content: 'none' },
						th: { textAlign: 'left' },
						'thead th': { paddingBottom: '0.5em' },
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
