import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@pages': '/src/pages',
			'@models': '/src/models',
			'@components': '/src/components',
			'@content': '/src/content',
			'@styles': '/src/styles',
			'@assets': '/src/assets'
		}
	}
})
