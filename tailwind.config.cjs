/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Golos Text'],
				mono: ['JetBrains Mono'],
				display: ['Unbounded']
			},
		}
	},
	plugins: [require('@tailwindcss/line-clamp')],
	plugins: [require('daisyui')],
};
