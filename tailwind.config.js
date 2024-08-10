import { read } from 'fs'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			padding: {
				read: 'clamp(1ch, .5vw + .5rem, 2ch)',
			},
			size: {
				read: 'clamp(42ch, 44vw + 1rem, 72ch)',
			},
		},
		boxShadow: {
			'hide-black': '0 0 0 100vmax var(--color-surface-950)',
		},
	},
	plugins: [],
}
