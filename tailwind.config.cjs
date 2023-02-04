/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['inter'],
				mono: ['JetBrains-Mono'],
				display: ['Unbounded']
			}
		}
	},
	plugins: []
};
