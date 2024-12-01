<template>
	<div v-if="shown" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
			<!--
				Background backdrop, show/hide based on modal state.
				
				Entering: "ease-out duration-300"
				  From: "opacity-0"
				  To: "opacity-100"
				Leaving: "ease-in duration-200"
				  From: "opacity-100"
				  To: "opacity-0"
				-->
			<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
			<div class="fixed inset-0 z-50 w-screen overflow-y-auto">
				
				<form v-on:submit.prevent="save_shortcut" class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
								  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
								</svg>
							</div>
							<div class="mt-3 flex-1 text-center sm:ml-4 sm:mt-0 sm:text-left">
								<h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Ajout d'un raccourci</h3>
								<div class="mt-2">
									<div>
										<label for="new_shortcut_label" class="block text-sm font-medium leading-6 text-gray-900">Titre</label>
										<div class="mt-2">
											<input ref="ref_new_shortcut_label" v-model="new_shortcut_label" type="text" name="new_shortcut_label" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" >
										</div>
									</div>
								</div>
								<div class="mt-2">
									<div>
										<label for="new_shortcut_url" class="block text-sm font-medium leading-6 text-gray-900">URL *</label>
										<div class="mt-2">
											<input v-on:input="check_timed" v-model="new_shortcut_url" type="text" name="new_shortcut_url" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" >
										</div>
									</div>
								</div>
								
								<template  v-if="!valid_url">
								<div class="mt-2 border-l-4 border-yellow-400 bg-yellow-50 p-4">
								  <div class="flex">
									<div class="flex-shrink-0">
									  <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
									  </svg>
									</div>
									<div class="ml-3">
									  <p class="text-sm text-yellow-700">
										L'URL que vous avez saisie semble être incorrecte. 
									  </p>
									</div>
								  </div>
								</div>
								<div class="mt-2 relative flex items-start">
								  <div class="flex h-6 items-center">
									<input v-model="confirm_url" id="confirm_url" aria-describedby="confirm_url-description" name="confirl_url" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
								  </div>
								  <div  class="ml-3 text-sm leading-6" >
									<span id="confirm_url-description" class="text-gray-500">Je confirme que cette URL est correcte.</span>
								  </div>
								</div>
								</template>
							</div>
						</div>
						<div class="mt-5 sm:ml-10 sm:mt-4 sm:flex sm:pl-4">
							<button type="submit" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2">Enregistrer</button>
							<button v-on:click="hide_shortcut_dlg" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:mt-0 sm:w-auto">Annuler</button>
						</div>
					</div>
				</form>
				
			</div>
		</div>
</template>
<script setup>
	import ContextMenu from '@imengyu/vue3-context-menu'
	defineProps({
		shortcut: {
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
				new_shortcut_label: "",
				new_shortcut_url: "",
				check_timeout: false,
				valid_url: true,
				confirm_url: false,
				shown: false,
				edit_mode: true
			}
		},
		methods: {
			show(s) {
				var that = this;
				if (s){
					this.edit_mode = true;
					this.new_shortcut_label = s.label;
					this.new_shortcut_url = s.url;
					this.valid_url = true;
					this.confirm_url = false;
				}else{
					this.edit_mode = false;
					this.new_shortcut_label = "";
					this.new_shortcut_url = "";
					this.valid_url = true;
					this.confirm_url = false;
				}
				that.shown = true;
				that.$nextTick(function () {
					that.$refs.ref_new_shortcut_label.focus();
				});
			},
			save_shortcut() {
				if (this.new_shortcut_url == ""){
					return;
				}
				if ( !this.check_url()){
					if (!this.confirm_url ){
						return;
					}
				}
				if (this.new_shortcut_label == ""){
					this.new_shortcut_label = this.new_shortcut_url;
				}
				this.$emit('save', {
					label: this.new_shortcut_label,
					url: this.new_shortcut_url
				});
				this.shown = false;
			},
			hide_shortcut_dlg() {
				this.$emit('cancel');
				this.shown = false;
			},
			check_timed() {
				
				var that = this;
				if(that.check_timeout){
					clearTimeout(that.check_timeout);
				}
				if (this.new_shortcut_url == ""){
					that.valid_url = true;
					return;
				}
				that.check_timeout = setTimeout(function(){
					that.valid_url = that.check_url()
				}, 1000);
			},
			check_url() {
				if (this.new_shortcut_url == ""){
					return;
				}
				const prefixes = ["http://", "https://", "mailto:"];
				return prefixes.some(prefix => this.new_shortcut_url.startsWith(prefix));
			},
		}
	}
</script>