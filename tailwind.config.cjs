/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['inter'],
				mono: ['JetBrains Mono'],
				display: ['Unbounded']
			},
			colors: {
				base: {
					100: '#0F172A',
					200: '#111521'
				},
				neutral: '#1E293B',
				'neutral-focus': '#273449'
			}
		}
	},
	plugins: [require('@tailwindcss/line-clamp')]
};
