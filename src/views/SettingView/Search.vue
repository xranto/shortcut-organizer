<template>
	<div>
		<div class="overflow-hidden bg-white shadow sm:rounded-lg">
			
			<div class="border-t border-gray-100">
				<dl class="divide-y divide-gray-100">
					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-900">{{ t("setSearchBar") }}</dt>
						<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
							<fieldset>
								<div class="space-y-5">
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input v-model="showsearch" :value="true"  id="last-dir-ch" aria-describedby="last-dir" name="showsearch" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="last-dir-ch" class="font-medium text-gray-900">{{ t("setShowSearchBar") }}</label>
											<p id="last-dir" class="text-gray-500">{{ t("setShowSearchBarMsg") }}</p>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input v-model="showsearch" :value="false" id="first-dir-ch" aria-describedby="first-dir" name="showsearch" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="first-dir-ch" class="font-medium text-gray-900">{{ t("setHideSearchBar") }}</label>
											<p id="first-dir" class="text-gray-500">{{ t("setHideSearchBarMsg") }}</p>
										</div>
									</div>
									
								</div>
							</fieldset>
						
						</dd>
					</div>
					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-900">{{ t("setSearchEngine") }}</dt>
						<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
							<fieldset>
								<div class="space-y-5">
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input  v-model="searchengine" value="google" id="se-google" name="searchengine" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="se-google" class="font-medium text-gray-900">Google</label>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input v-model="searchengine" value="bing" id="se-bing" name="searchengine" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="se-bing" class="font-medium text-gray-900">Bing</label>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input v-model="searchengine" value="yahoo" id="se-yahoo" name="searchengine" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="se-yahoo" class="font-medium text-gray-900">Yahoo</label>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input v-model="searchengine" value="duckduckgo" id="se-DuckDuckGo " name="searchengine" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="se-DuckDuckGo " class="font-medium text-gray-900">DuckDuckGo </label>
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

	// Références pour les nouvelles données
	const showsearch = ref(false);
	const searchengine = ref('google');

	// Charger les données depuis chrome.storage.local au montage
	onMounted(() => {
		chrome.storage.local.get(['showsearch', 'searchengine'], (result) => {
			if (typeof result.showsearch !== 'undefined') {
				showsearch.value = result.showsearch;
			}
			if (result.searchengine) {
				searchengine.value = result.searchengine;
			}
		});
	});

	// Surveiller les changements et enregistrer dans chrome.storage.local
	watch(showsearch, (newValue) => {
		chrome.storage.local.set({ showsearch: newValue });
	});

	watch(searchengine, (newValue) => {
		chrome.storage.local.set({ searchengine: newValue });
	});
</script>
