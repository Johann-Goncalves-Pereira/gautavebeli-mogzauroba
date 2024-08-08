import { read } from 'fs'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			padding: {
				read: 'clamp(1ch, .5vw + .5rem, 2ch)',
			},
			width: {
				read: 'clamp(42ch + 1rem, 44vw + 2rem, 72ch + 1rem)',
			},
		},
		boxShadow: {
			'hide-black': '0 0 0 100vmax theme("colors.stone.950")',
		},
		gridTemplateColumns: {
			read: 'auto clamp(42ch, 44vw + 1rem, 72ch) auto',
		},
	},
	plugins: [],
}
