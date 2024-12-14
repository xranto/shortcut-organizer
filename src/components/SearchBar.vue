<template>
	<div class="relative mb-7" role="dialog" aria-modal="true">
		<div class="grid grid-cols-1">
			<input 
				:placeholder="t('searchPlaceholder') + searchEnginesLabel[searchEngine]"
				@keyup.enter="handleSearch"
				v-model="searchQuery"
			
				type="text" 
				class="rounded-md border border-gray-200 col-start-1 row-start-1 h-12 w-full pl-11 pr-4 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm" 
				/>
			<svg class="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
				<path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
			</svg>
		</div>
	</div>
</template>
<script setup>
	import { ref, onMounted } from 'vue';

	// Références pour les données réactives
	const searchQuery = ref("");
	const searchEngine = ref("google"); // Valeur par défaut si aucune n'est trouvée

	// Liste des moteurs de recherche disponibles et leurs URLs
	const searchEngines = {
		google: "https://www.google.com/search?q=",
		bing: "https://www.bing.com/search?q=",
		yahoo: "https://search.yahoo.com/search?p=",
		duckduckgo: "https://duckduckgo.com/?q=",
	};
	
	const searchEnginesLabel = {
		google: "Google",
		bing: "Bing",
		yahoo: "Yahoo",
		duckduckgo: "DuckDuckGo",
	};

	// Charger le moteur de recherche configuré depuis chrome.storage.local
	onMounted(() => {
		chrome.storage.local.get("searchengine", (result) => {
			if (result.searchengine && searchEngines[result.searchengine]) {
				searchEngine.value = result.searchengine;
			}
		});
	});

	// Fonction pour effectuer la recherche
	function handleSearch() {
		if (!searchQuery.value.trim()) {
			alert(chrome.i18n.getMessage("enterTerm"));
			return;
		}

		// Construire l'URL du moteur de recherche
		const searchUrl = `${searchEngines[searchEngine.value]}${encodeURIComponent(searchQuery.value)}`;

		// Ouvrir la recherche dans le même onglet
		window.location.href = searchUrl;
	}
</script>
