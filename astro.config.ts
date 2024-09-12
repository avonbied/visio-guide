import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://avonbied.github.io',
	base: '/visio-guide',
	integrations: [sitemap()],
	server: {
		port: Number(process.env.PORT ?? 8080),
		host: true,
	},
	vite: {
		server: {
			watch: {
				usePolling: true,
				interval: 10000
			}
		}
	}
});
