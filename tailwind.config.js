import { read } from 'fs'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			padding: {
				read: 'clamp(1ch + .125rem, 1vw + 0.125rem, 2ch + 0.125rem)',
			},
			size: {
				read: 'clamp(40ch + 1rem, 44vw + 1rem, 70ch + 1rem)',
			},
		},
		boxShadow: {
			'hide-black': '0 0 0 100vmax var(--color-surface-950)',
		},
	},
	plugins: [],
}
