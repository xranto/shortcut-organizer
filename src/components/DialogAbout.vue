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
									<p class="mb-2">Version: {{ version }}</p>
									<p>{{ t('aboutDescription') }}</p>
									
									<h2 class="mt-6 text-pretty text-2xl font-semibold tracking-tight text-gray-900">{{ t('aboutObjectifTitle') }}</h2>
									<p>{{ t('aboutObjectifContent') }}</p>
									<h2 class="mt-6 text-pretty text-2xl font-semibold tracking-tight text-gray-900">{{ t('osTitle') }}</h2>
									<p>{{ t('osContent') }}<br>
									<a class="text-blue-500" href="https://github.com/xranto/shortcut-organizer" target="_blank">https://github.com/xranto/shortcut-organizer</a></p>
									
									<h2 class="mt-6 text-pretty text-2xl font-semibold tracking-tight text-gray-900">{{ t('creditTitle') }}</h2>
									<ul class="list-disc pl-4">
										<li>{{ t('creditConception') }} : <a class="text-blue-500" target="_blank" href="https://ranto.dev">Ranto Rasolomahefa</a></li>
										<li>{{ t('creditBackgroundImage') }} <a class="text-blue-500" href="https://www.pexels.com/fr-fr/photo/papier-peint-gris-et-blanc-1103970/" target="_blank">Pexels</a></li>
									</ul>
									
									<h2 class="mt-6 text-pretty text-2xl font-semibold tracking-tight text-gray-900">{{ t('policyTitle') }}</h2>
									<div v-html="t('policyContent')"></div>
									
									<p class="mt-2"><b>{{ t('permissionsTitle') }}</b></p>
									<ul class="list-disc pl-4">
										<li><b>storage</b> : {{ t('permissionsStorage') }}</li>
										<li><b>tabs</b> : {{ t('permissionsTab') }}</li>
									</ul>
									<h2 class="mt-6 text-pretty text-2xl font-semibold tracking-tight text-gray-900">{{ t('licenseTitle') }}</h2>
									<p>{{ t('licenseContent') }}</p>
							   </div>
							</div>
						</div>
						<div class="mt-5 text-center">
							<button v-on:click="hide" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50  sm:mt-0 sm:w-auto">{{ t('buttonClose') }}</button>
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
				shown: false,
				version: "",
			}
		},
		mounted() {
			this.version = chrome.runtime.getManifest().version;	
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