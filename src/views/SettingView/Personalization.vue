<template>
	<div>
		<div class="overflow-hidden bg-white shadow sm:rounded-lg">
			
			<div class="border-t border-gray-100">
				<dl class="divide-y divide-gray-100">
					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-900">{{ t("setStartPage") }}</dt>
						<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
							<fieldset>
								<div class="space-y-5">
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input v-model="startpage" id="last-dir-ch" value="last-dir" aria-describedby="last-dir" name="startpage" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="last-dir-ch" class="font-medium text-gray-900">{{ t("setLastDir") }}</label>
											<p id="last-dir" class="text-gray-500">{{ t("setLastDirMsg") }}</p>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input v-model="startpage" id="first-dir-ch" value="first-dir" aria-describedby="first-dir" name="startpage" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="first-dir-ch" class="font-medium text-gray-900">{{ t("setFirstDir") }}</label>
											<p id="first-dir" class="text-gray-500">{{ t("setFirstDirMsg") }}</p>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input v-model="startpage" id="dir-list-ch" value="dir-list" aria-describedby="dir-list" name="startpage" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="dir-list-ch" class="font-medium text-gray-900">{{ t("setDirList") }}</label>
											<p id="dir-list" class="text-gray-500">{{ t("setDirListMsg") }}</p>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input v-model="startpage" id="empty-page-ch" value="empty-page" aria-describedby="empty-page" name="startpage" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="empty-page-ch" class="font-medium text-gray-900">{{ t("setEmptyPage") }}</label>
											<p id="empty-page" class="text-gray-500">{{ t("setEmptyPageMsg") }}</p>
										</div>
									</div>
								</div>
							</fieldset>
						
						</dd>
					</div>
					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-900">{{ t("setBgImage") }}</dt>
						<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
							<fieldset>
								<div class="space-y-5">
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input v-model="bgimage" value="default" id="default-bg-ch" aria-describedby="default-bg" name="bgimage" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="default-bg-ch" class="font-medium text-gray-900">{{ t("setBgImageDefault") }}</label>
											<p id="default-bg" class="text-gray-500">{{ t("setBgImageDefaultMsg") }}</p>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input v-model="bgimage" value="custom" id="custom-bg-ch" aria-describedby="custom-bg" name="bgimage" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="custom-bg-ch" class="font-medium text-gray-900">{{ t("setBgImageCustom") }}</label>
											<p id="custom-bg" class="text-gray-500">{{ t("setBgImageCustomMsg") }}</p>
										
											<div class="col-span-full" :class="{'pointer-events-none opacity-30' : bgimage == 'default'}">
												<label for="custom-background-image-file" class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
													<div class="text-center">
														<template v-if="backgroundUrl == ''">
															<svg class="mx-auto size-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
																<path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
															</svg>
														</template>
														<template v-else>
															<div class="background-preview h-20 bg-contain bg-no-repeat bg-center" :style="{ backgroundImage: `url(${backgroundUrl})` }">
															
															</div>
														</template>
														<div class="mt-4 flex text-sm/6 text-gray-600">
															<label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
																<span>{{ t("setUploadFile") }}</span>
																<input 
																	ref="fileInput" 
																	accept=".jpg,.jpeg,.png,.webp" 
																	id="custom-background-image-file" 
																	name="file-upload" 
																	type="file" 
																	class="sr-only"
																	@change="handleFileChange"
																	>
															</label>
															<p class="pl-1">{{ t("setDND") }}</p>
														</div>
														<p class="text-xs/5 text-gray-600">{{ t("setUploadLimit") }}</p>
													</div>
												</label>
											</div>
										</div>
									</div>
								</div>
							</fieldset>
						</dd>
					</div>
					
				</dl>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref, onMounted, watch } from 'vue';
	import { useBackgroundImage } from '../../composables/useBackgroundImage';

	// Références pour les données
	const startpage = ref('last-dir');
	const bgimage = ref('default');
	const fileInput = ref(null);

	// Gestion du background via un composable
	const { backgroundUrl, loadBackground, saveBackground } = useBackgroundImage();

	// Charger les données depuis chrome.storage.local au montage
	onMounted(() => {
		chrome.storage.local.get(['startpage', 'bgimage'], (result) => {
			if (result.startpage){
				startpage.value = result.startpage;
			}
			if (result.bgimage){
				bgimage.value = result.bgimage;
			}
		});

		loadBackground();
	});

	// Surveiller les changements et enregistrer dans chrome.storage.local
	watch(startpage, (newValue) => {
		chrome.storage.local.set({ startpage: newValue });
	});

	watch(bgimage, (newValue) => {
		chrome.storage.local.set({ bgimage: newValue });
	});

	// Fonction pour gérer le changement de fichier
	function handleFileChange(event) {
		const file = event.target.files[0];

		if (!file) {
			alert(chrome.i18n.getMessage('setNoFileSelected'));
			return;
		}

		const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
		if (!allowedTypes.includes(file.type)) {
			alert(chrome.i18n.getMessage('setBadFile'));
			return;
		}

		const maxSizeInBytes = 5 * 1024 * 1024; // 5 Mo
		if (file.size > maxSizeInBytes) {
			alert(chrome.i18n.getMessage('setFileOverSize'));
			return;
		}

		// Appeler la méthode pour enregistrer le fichier (via le composable)
		saveBackground(file);
	}

	// Fonction pour sauvegarder l'image sélectionnée
	function handleSave() {
		const file = fileInput.value?.files[0];
		if (file) {
			saveBackground(file);
		} else {
			alert('Please select an image to save.');
		}
	}
</script>
	