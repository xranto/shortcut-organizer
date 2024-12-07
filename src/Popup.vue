<template>
	<div class="content-wrap">
			<div v-if="already_saved">
				<h3>{{ t('pageAlreadyExist') }}</h3>
			</div>
			<div v-else>
				<form>
					<div>
						<label for="titre" class="block text-sm/6 font-medium text-gray-900">{{ t('labelTitle') }}</label>
						<div class="mt-2">
							<input v-model="titre" type="text" name="titre" id="titre" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" >
						</div>
						<p v-if="empty_titre" class="mt-2 text-sm text-red-600" id="email-error">{{ t('fieldEmpty') }}</p>
					</div>
					<div class="mt-5 sm:ml-10 sm:mt-4 sm:flex sm:pl-4">
						<label for="url" class="block text-sm/6 font-medium text-gray-900">{{ t('labelUrl') }}</label>
						<div class="mt-2">
							<input v-model="url" type="text" name="url" id="url" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" >
						</div>
						<p v-if="empty_url" class="mt-2 text-sm text-red-600" id="email-error">{{ t('fieldEmpty') }}</p>
					</div>
					
					<div v-if="add_new_category" class="mt-5 sm:ml-10 sm:mt-4 sm:flex sm:pl-4">
						<label for="new_category" class="block text-sm/6 font-medium text-gray-900">{{ t('labelDirectory') }}</label>
						<div class="mt-2">
							<input v-model="new_category" type="text" name="new_category" id="new_category" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" >
						</div>
						<p v-if="empty_new_category" class="mt-2 text-sm text-red-600" id="email-error">{{ t('fieldEmpty') }}</p>
					</div>
					<div v-else class="mt-5 sm:ml-10 sm:mt-4 sm:flex sm:pl-4">
						<label for="category" class="block text-sm/6 font-medium text-gray-900">{{ t('labelDirectory') }}</label>
						
						<div class="mt-2 grid grid-cols-1">
							<select v-model="category" id="category" name="category" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
								<option v-for="category in categories_data" :value="category.id">
									{{ category.label }}
								</option>
							</select>
							
						</div>
						<p v-if="empty_category" class="mt-2 text-sm text-red-600" id="email-error">{{ t('directoryEmpty') }}</p>
					</div>
					<div class="mt-5 sm:ml-10 sm:mt-4 sm:flex sm:pl-4">
						<button v-on:click="save_shortcut" type="button" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2">{{ t('buttonSave') }}</button>
						<button v-on:click="close_window"  type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:ml-3 sm:mt-0 sm:w-auto">{{ t('buttonCancel') }}</button>
					</div>
				</form>
			</div>
	</div>
</template>
<script setup>
	
	import { isProxy, toRaw } from 'vue';
</script>
<script>	
	export default {
		
		data() {
			return {
				categories_data: [],
				shortcuts_data: [],
				filtered_shortcuts_data: [],
				current_directory: null,
				enable_chrome: false,
				
				edit_mode: false,
				current_directory_edit: null,
				current_shortcut_edit: null,
				drag: false,
				shortcut_dragged: null,
				already_saved: false,
				
				add_new_category: false,
				new_category: "",
				titre: "",
				url: "",
				category: null,
				empty_titre: false,
				empty_url: false,
				empty_category: false,
				empty_new_category: false,
			}
		},
		mounted() {
			if (chrome && chrome.storage){
				this.enable_chrome = true;
			}
			if(this.enable_chrome){
				chrome.storage.local.get().then((items) => {
					if (items && items.shortcuts){
						this.shortcuts_data = items.shortcuts;
					}
					if (items && items.categories){
						this.categories_data = items.categories;
					}else{
						this.add_new_category = true;
					}
					
					if(this.categories_data.length == 0){
						this.add_new_category = true;
					}
					
				});
				
			}
			chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
				if (tabs.length > 0) {
					const currentTab = tabs[0]; // Le premier résultat est l'onglet actif
					if (currentTab.url.startsWith('chrome://')){
						window.close();
					}
					this.url = currentTab.url;
					this.titre = currentTab.title;
					this.already_saved = this.shortcuts_data.some(item => item.url === this.url);
				}
			});
		},
		watch: {
			url: {
				handler(newValue, oldValue) {
					this.empty_url = false
				},
				deep: false
			},
			titre: {
				handler(newValue, oldValue) {
					this.empty_titre = false
				},
				deep: false
			},
			category: {
				handler(newValue, oldValue) {
					this.empty_category = false
				},
				deep: false
			},
			new_category: {
				handler(newValue, oldValue) {
					this.empty_new_category = false
				},
				deep: false
			},
			
		},
		methods: {
			save_shortcut(shortcut){
					let dir_id = this.category;
					
					if (this.titre == ""){
						this.empty_titre = true;
					}
					
					if (this.url == ""){
						this.empty_url = true;
					}
					
					if (this.new_category == ""){
						this.empty_new_category = true;
					}
					
					if (!dir_id){
						this.empty_category = true;
					}
					
					if(this.empty_titre || this.empty_url || (!this.add_new_category && this.empty_category) || (this.add_new_category && this.empty_new_category)){
						return;
					}
					
					if (this.add_new_category){
						dir_id = this.save_directory(this.new_category);
					}
					
					var tmp_shortcuts_data = this.shortcuts_data.filter(function (obj) {
						if (obj.category == dir_id){
							return true;
						}else{
							return false;
						}
					});
					let last_order_index = tmp_shortcuts_data.length;
					
					
					let new_shortcut = {
						id: this.generateRandomString(),
						label: this.titre,
						url: this.url,
						category: dir_id,
						order: last_order_index
					}
					this.shortcuts_data.push(new_shortcut);
					
					if(this.enable_chrome){
						chrome.storage.local.set({ shortcuts: toRaw(this.shortcuts_data) });
					}
					
					window.close();
			},
			close_window(){
				window.close();
			},
			generateRandomString(length = 5) {
				const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
				let result = '';
				const charactersLength = characters.length;
				
				for (let i = 0; i < length; i++) {
					result += characters.charAt(Math.floor(Math.random() * charactersLength));
				}
				
				return result;
			},
			save_directory(new_dir_name){
					let new_cat = {
						id: this.generateRandomString(),
						label: new_dir_name,
						order: this.categories_data.length
					}
					this.categories_data.push(new_cat);
					if(this.enable_chrome){
						chrome.storage.local.set({ categories: toRaw(this.categories_data) });
					}
					return new_cat.id;
			},
		}
	}
</script>