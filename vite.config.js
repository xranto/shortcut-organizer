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
import { resolve } from 'path'; // Nécessaire pour la configuration des chemins

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
			input: {
				main: resolve(__dirname, 'index.html'), // Fichier index.html
				popup: resolve(__dirname, 'popup.html'), // Fichier popup.html
			},
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
