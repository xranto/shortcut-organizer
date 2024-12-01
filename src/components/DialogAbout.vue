<template>
	<div v-if="shown" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
		<div class="fixed inset-0 z-50 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
					<div class="">
						<div class="">
							<div class="">
							   <div class="mx-auto max-w-3xl text-base/7 text-gray-700">
									<h1 class="mt-2 text-pretty text-2xl font-semibold tracking-tight text-gray-900">Shortcut Organizer</h1>
									<p class="mb-2">Version: 1.0</p>
									<p>Shortcut Organizer est une extension Chrome conçue pour offrir une expérience de navigation améliorée. Elle remplace la page de démarrage par défaut par un tableau de bord élégant et personnalisable, vous permettant de gérer vos raccourcis favoris de manière organisée et efficace.</p>
									
									<h2 class="mt-6 text-pretty text-2xl font-semibold tracking-tight text-gray-900">Notre objectif</h2>
									<p>Faciliter l'accès rapide à vos sites web préférés tout en vous offrant la possibilité d'organiser vos raccourcis selon vos besoins. Que vous soyez un professionnel cherchant à organiser vos outils ou un utilisateur qui souhaite personnaliser sa navigation, Shortcut Organizer est conçu pour vous.</p>
									<h2 class="mt-6 text-pretty text-2xl font-semibold tracking-tight text-gray-900">Projet Open Source</h2>
									<p>Ce projet est entièrement open source. Vous pouvez consulter le code source, proposer des améliorations et contribuer au développement directement sur GitHub.Nous croyons en l'esprit de collaboration et en l'importance de partager les outils qui simplifient la vie numérique. Rejoignez-nous pour améliorer encore plus Shortcut Organizer.<br>
									<a class="text-blue-500" href="https://github.com/xranto/shortcut-organizer" target="_blank">https://github.com/xranto/shortcut-organizer</a></p>
									
									<h2 class="mt-6 text-pretty text-2xl font-semibold tracking-tight text-gray-900">Crédits</h2>
									<ul class="list-disc pl-4">
										<li>Conception et développement : <a class="text-blue-500" target="_blank" href="https://ranto.dev">Ranto Rasolomahefa</a></li>
										<li>Image d'arrière-plan :   Photo de Johannes Plenio, disponible sur <a class="text-blue-500" href="https://www.pexels.com/fr-fr/photo/papier-peint-gris-et-blanc-1103970/" target="_blank">Pexels</a></li>
									</ul>
									
									<h2 class="mt-6 text-pretty text-2xl font-semibold tracking-tight text-gray-900">Politique de confidentialité</h2>
									<p>Nous respectons votre confidentialité et nous engageons à protéger vos données.</p>
									<ul class="list-disc pl-4">
										<li>Cette extension <b>ne collecte ni ne partage aucune donnée personnelle.</b></li>
										<li>Toutes les informations que vous ajoutez à l’extension (comme vos raccourcis ou dossiers) sont stockées <b>localement sur votre appareil</b>, en utilisant l’API chrome.storage.</li>
										<li>Aucune donnée n’est envoyée ou partagée avec des tiers.</li>
									</ul>
									<p class="mt-2"><b>Permissions utilisées :</b></p>
									<ul class="list-disc pl-4">
										<li><b>storage</b> : Cette permission est utilisée uniquement pour enregistrer vos raccourcis et paramètres de manière locale.</li>
									</ul>
									<h2 class="mt-6 text-pretty text-2xl font-semibold tracking-tight text-gray-900">Licence</h2>
									<p>Ce projet est distribué sous la licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le partager dans les termes de cette licence.</p>
							   </div>
							</div>
						</div>
						<div class="mt-5 text-center">
							<button v-on:click="hide" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  sm:mt-0 sm:w-auto">Fermer</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>	
	export default {
		expose: ['show'],
		data() {
			return {
				shown: false
			}
		},
		methods: {
			show() {
				var that = this;
				that.shown = true;
			},
			hide() {
				this.shown = false;
			}
		}
	}
</script>