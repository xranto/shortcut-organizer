import {
	fileURLToPath,
	URL
} from 'node:url';
import {
	defineConfig
} from 'vite';
import vue from '@vitejs/plugin-vue';
import {
	execSync
} from 'child_process';

export default defineConfig({
	plugins: [
		vue(),
		
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)) // Alias pour simplifier les imports
		}
	},
	build: {
		emptyOutDir: false,
		rollupOptions: {
			plugins: [{
				name: 'update-version',
				buildStart() {
					try {
						// Exécute le script pour mettre à jour la version
						execSync('node updateVersion.js', {
							stdio: 'inherit'
						});
					} catch (error) {
						console.error('Erreur dans le hook buildStart:', error);
					}
				},
			}, ],
		},
	},
});