<template>
	<div v-if="shown" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
		<div class="fixed inset-0 z-50 w-screen overflow-y-auto">
			<form v-on:submit.prevent="save_directory" class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<!--
					Modal panel, show/hide based on modal state.
					
					Entering: "ease-out duration-300"
					  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					  To: "opacity-100 translate-y-0 sm:scale-100"
					Leaving: "ease-in duration-200"
					  From: "opacity-100 translate-y-0 sm:scale-100"
					  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					-->
				<div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
					<div class="sm:flex sm:items-start">
						<div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 sm:mx-0 sm:h-10 sm:w-10">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
							</svg>
						</div>
						<div class="mt-3 flex-1 text-center sm:ml-4 sm:mt-0 sm:text-left">
							<h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Ajout d'un dossier</h3>
							<div class="mt-2">
								<div>
									<label for="new_dir_name" class="block text-sm font-medium leading-6 text-gray-900">Nom *</label>
									<div class="mt-2">
										<input 
											ref="new_dir_name" 
											v-model="new_dir_name" 
											type="text" 
											name="new_dir_name" 
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" >
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mt-5 sm:ml-10 sm:mt-4 sm:flex sm:pl-4">
						<button v-on:click="save_directory" type="button" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2">Enregistrer</button>
						<button v-on:click="hide_directory_dlg" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:mt-0 sm:w-auto">Annuler</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>
<script setup>
	import ContextMenu from '@imengyu/vue3-context-menu'
	defineProps({
		directory: {
			type: [Object, null],
			required: false
		},
		
	});
</script>
<script>	
export default {
	expose: ['show'],
	data() {
		return {
			new_dir_name: "",
			shown: false,
			edit_mode: true
		}
	},
	methods: {
		show(d) {
			var that = this;
			if (d) {
				this.edit_mode = true;
				this.new_dir_name = d.label;
			} else {
				this.edit_mode = false;
				this.new_dir_name = "";
			}
			that.shown = true;
			that.$nextTick(function () {
				that.$refs.new_dir_name.focus();
			});
		},
		save_directory() {
			if (this.new_dir_name == "") {
				return;
			}
			this.$emit('save', this.new_dir_name);
			this.shown = false;
		},
		hide_directory_dlg() {
			this.$emit('cancel');
			this.shown = false;
		}
	}
}
</script>