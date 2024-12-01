import fs from 'fs';
import readline from 'readline';

const versionFilePath = './local-version.txt';
const manifestTemplatePath = './manifest/manifest.json';
const manifestOutputPath = './dist/manifest.json';

function incrementVersion(version) {
	const parts = version.split('.').map(Number);
	parts[parts.length - 1] += 1; // Increment last part
	return parts.join('.');
}

async function askUser(question) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	return new Promise((resolve) => rl.question(question, (answer) => {
		rl.close();
		resolve(answer.toLowerCase() === 'y');
	}));
}

(async () => {
	try {
		// Vérifier si le fichier local-version.txt existe
		let currentVersion = '1.0.1';
		if (fs.existsSync(versionFilePath)) {
			currentVersion = fs.readFileSync(versionFilePath, 'utf8').trim();
		} else {
			// Créer le fichier local-version.txt avec la version initiale
			fs.writeFileSync(versionFilePath, currentVersion, 'utf8');
			console.log(`Fichier local-version.txt créé avec la version ${currentVersion}.`);
		}

		// Afficher la version actuelle
		console.log(`La version locale actuelle est ${currentVersion}.`);
		const shouldIncrement = await askUser('Voulez-vous incrémenter cette version ? (y/n) ');

		// Incrémenter la version si demandé
		let newVersion = currentVersion;
		if (shouldIncrement) {
			newVersion = incrementVersion(currentVersion);
			fs.writeFileSync(versionFilePath, newVersion, 'utf8');
			console.log(`Version locale mise à jour à ${newVersion}.`);
		} else {
			console.log('Version inchangée.');
		}

		// Lire le fichier manifest.json comme template
		const manifest = JSON.parse(fs.readFileSync(manifestTemplatePath, 'utf8'));

		// Mettre à jour la version dans le manifest
		manifest.version = newVersion;

		// Vérifier si le dossier dist existe
		if (!fs.existsSync('./dist')) {
			fs.mkdirSync('./dist');
		}

		// Écrire le nouveau fichier manifest.json dans dist
		fs.writeFileSync(manifestOutputPath, JSON.stringify(manifest, null, 2));
		console.log(`Manifest mis à jour avec la version ${newVersion} dans le dossier dist.`);
	} catch (error) {
		console.error('Erreur lors de la mise à jour de la version :', error);
	}
})();
