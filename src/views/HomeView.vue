<template>
	<main>
		<div>
			<div class="fixed inset-y-0 z-50 flex w-52 flex-col">
				<div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-5">
					<nav class="mt-10 flex flex-1 flex-col">
						<ul role="list" class="flex flex-1 flex-col gap-y-7">
							<li>
								<div class="-mx-2 space-y-1">
									<draggable 
											:list="categories_data" 
											@start="drag=true" 
											@end="drag=false" 
											item-key="id"
											v-bind="dragOptions"
											group="directory" 
											@change="directory_order_change"
										>
											<template #item="{element}">
												<Directory 
													:shortcut_dragged="shortcut_dragged"
													:directory="element"
													:current="element.id == current_directory?.id"
													v-on:eclick="set_current_directory"
													v-on:edit="edit_directory"
													v-on:remove="remove_directory"
													v-on:shortcut_dropped="shortcut_dropped"
												/>
											</template>
									</draggable>
								</div>
							</li>
							<li>
								<ul role="list" class="-mx-2 space-y-1">
									<li>
										<button v-on:click="show_directory_dlg"  class="w-full text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
												<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
											</svg>
											{{ t('menuAddDirectory') }}
										</button>
									</li>
								</ul>
							</li>
						</ul>
						<button v-on:click="show_about_dlg" class="w-full text-gray-400 mb-3 text-left">{{ t('menuAbout') }}</button>
						<RouterLink to="/setting" class="w-full text-gray-400 mb-3 text-left">{{ t('menuSetting') }}</RouterLink>
					</nav>
				</div>
			</div>
			<main class="py-10 pl-52">
				<div class="px-4 sm:px-6 lg:px-8">
					<SearchBar v-if="showsearch" />
					{{ bgimage_url }}
					<!-- Directory List -->
					<div v-if="current_directory == null && startpage == 'dir-list'">
						<div>
							<draggable 
											:list="categories_data" 
											@start="drag=true" 
											@end="drag=false" 
											item-key="id"
											v-bind="dragOptions"
											group="directory" 
											@change="directory_order_change"
											class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
										>
											<template #item="{element}">
												<DirectoryIcon 
													:shortcut_dragged="shortcut_dragged"
													:directory="element"
													:current="element.id == current_directory?.id"
													v-on:eclick="set_current_directory"
													v-on:edit="edit_directory"
													v-on:remove="remove_directory"
													v-on:shortcut_dropped="shortcut_dropped"
												/>
											</template>
									</draggable>
						</div>
					</div>
					<!-- /Directory List -->
					<!-- Shortcut List -->
					<div>
						<div>
							<draggable 
								:list="filtered_shortcuts_data" 
								@start="drag=true" 
								@end="drag=false" 
								item-key="id"
								class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
								v-bind="dragOptions"
								@change="shortcuts_order_change"
								group="shortcut" 
							>
								<template #item="{element}">
									<Icon 
										v-if="element.category == current_directory.id" 
										:shortcut="element" 
										v-on:edit="edit_shortcut"
										v-on:remove="remove_shortcut"
										v-on:shortcut_dragstart="shortcut_dragstart"
										v-on:shortcut_dragend="shortcut_dragend"
										/>
								</template>
							</draggable>
						</div>
					</div>
					<!-- Shortcut List -->
				</div>
			</main>
		</div>
		<button v-if="current_directory"  v-on:click="show_shortcut_dlg" type="button" class="fixed right-10 bottom-10 rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
			<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
			</svg>
		</button>
		<DialogAbout ref="about_dlg" />
		<DialogDirectory ref="directory_dlg" v-on:save="save_directory" />
		<DialogShortcut ref="shortcut_dlg" v-on:save="save_shortcut" />
	</main>
</template>
<script setup>
	import DirectoryIcon from '../components/DirectoryIcon.vue'
	import Directory from '../components/Directory.vue'
	import DialogDirectory from '../components/DialogDirectory.vue'
	import DialogShortcut from '../components/DialogShortcut.vue'
	import DialogAbout from '../components/DialogAbout.vue'
	import Icon from '../components/Icon.vue'
	import SearchBar from '../components/SearchBar.vue'
	import { isProxy, toRaw } from 'vue';
	import draggable from 'vuedraggable'
	
	
</script>
<script>
	import { useBackgroundImage } from '../composables/useBackgroundImage';
	export default {
		components: {
			DirectoryIcon, Directory, DialogDirectory, DialogShortcut, Icon, draggable, DialogAbout, SearchBar
		},
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
				
				startpage: 'last-dir',
				bgimage: 'default',
				showsearch: false,
				bgimage: null,
				bgimage_url: ""
			}
		},
		computed: {
			dragOptions() {
				return {
					animation: 200,
					group: "description",
					disabled: false,
					ghostClass: "ghost"
				};
			}
		},
		watch: {
			shortcuts_data: {
				handler(newValue, oldValue) {
					if(this.current_directory){
						this.set_current_directory(this.current_directory);
					}
				},
				deep: true
			}
		},
		mounted() {
			if (chrome && chrome.storage){
				this.enable_chrome = true;
			}
			if(this.enable_chrome){
				chrome.storage.local.get(['shortcuts', 'categories', 'startpage', 'bgimage', 'lastdir', 'showsearch']).then((items) => {
					let last_dir_id = "";
					if (items && items.startpage){
						this.startpage = items.startpage;
					}
					if (items && items.bgimage){
						this.bgimage  = items.bgimage;
						if(this.bgimage != 'default'){
							const { loadBackground, backgroundUrl } = useBackgroundImage();

							loadBackground().then(() => {
								
								if (backgroundUrl.value) {
									document.body.style.backgroundImage = `url('${backgroundUrl.value}')`;
									document.body.style.backgroundSize = 'cover'; 
									document.body.style.backgroundPosition = 'center';
								} 
							});
						}
					}
					
					if (items && items.shortcuts){
						this.shortcuts_data = items.shortcuts;
					}
					if (items && items.lastdir){
						last_dir_id = items.lastdir;
					}
					if (items && items.showsearch){
						this.showsearch = items.showsearch;
					}
					
					if (items && items.categories){
						this.categories_data = items.categories;
						if(this.categories_data.length){
							console.log(this.categories_data);
							switch (this.startpage){
								case "last-dir":
									const foundItem = this.categories_data.find(item => item.id === last_dir_id);
									if(foundItem){
										this.set_current_directory(foundItem);
									}else{
										this.set_current_directory(this.categories_data.at(0));
									}
									
								break;
								case "first-dir":
									this.set_current_directory(this.categories_data.at(0));
								break;
								case "empty-page":
									
								break;
								case "dir-list":
									
								break;
								default:
								break;
								
							}
							
						}
					}
					
				});
				
			}
		},
		methods: {
			shortcut_dropped(d) {
				if (this.shortcut_dragged ){
					
					let s = this.shortcut_dragged;
					if (d.id !== s.category){
						let from_cat_id = s.category;
						let to_cat_id = d.id;
						var unmoved_shortcuts = this.shortcuts_data.filter(function (obj) {
							if (obj.category == from_cat_id){
								return false;
							}else{
								return true;
							}
						});
						var moved_shortcuts = this.shortcuts_data.filter(function (obj) {
							if (obj.category == from_cat_id){
								return true;
							}else{
								return false;
							}
						});
						moved_shortcuts.sort((a, b) => a.order - b.order)
						
						const index = moved_shortcuts.map(e => e.id).indexOf(s.id);
						moved_shortcuts.splice(index, 1);
						
						moved_shortcuts.forEach((element, index) => {
							element.order = index;
						});
						this.shortcuts_data = [...unmoved_shortcuts, ...moved_shortcuts];
						
						s.category = to_cat_id;
						var unmoved_shortcuts = this.shortcuts_data.filter(function (obj) {
							if (obj.category == to_cat_id){
								return false;
							}else{
								return true;
							}
						});
						moved_shortcuts = this.shortcuts_data.filter(function (obj) {
							if (obj.category == to_cat_id){
								return true;
							}else{
								return false;
							}
						});
						moved_shortcuts.sort((a, b) => a.order - b.order)
						moved_shortcuts.push(s);
						moved_shortcuts.forEach((element, index) => {
							element.order = index;
						});
						this.shortcuts_data = [...unmoved_shortcuts, ...moved_shortcuts];
						
						
						if(this.enable_chrome){
							chrome.storage.local.set({ shortcuts: toRaw(this.shortcuts_data) });
						}
						
					}
				}
			},
			shortcut_dragstart(s) {
				this.shortcut_dragged = s;
			},
			shortcut_dragend(s) {
				this.shortcut_dragged = null;
			},
			directory_order_change(d) {
				const movedElement = d.moved.element;
				const oldIndex = d.moved.oldIndex;
				const newIndex = d.moved.newIndex;
				this.categories_data.sort((a, b) => a.order - b.order);
				const [removedElement] = this.categories_data.splice(oldIndex, 1);
				this.categories_data.splice(newIndex, 0, removedElement);
				this.categories_data.forEach((element, index) => {
					element.order = index;
				});
				if(this.enable_chrome){
					chrome.storage.local.set({ categories: toRaw(this.categories_data) });
				}
			},
			shortcuts_order_change(d) {
				
				const movedElement = d.moved.element;
				const oldIndex = d.moved.oldIndex;
				const newIndex = d.moved.newIndex;
				
				
				let dir_id = this.current_directory.id;
				var unmoved_shortcuts = this.shortcuts_data.filter(function (obj) {
					if (obj.category == dir_id){
						return false;
					}else{
						return true;
					}
				});
				var moved_shortcuts = this.shortcuts_data.filter(function (obj) {
					if (obj.category == dir_id){
						return true;
					}else{
						return false;
					}
				});
				moved_shortcuts.sort((a, b) => a.order - b.order)
								
				const [removedElement] = moved_shortcuts.splice(oldIndex, 1);
				moved_shortcuts.splice(newIndex, 0, removedElement);
				
				moved_shortcuts.forEach((element, index) => {
					element.order = index;
				});
				this.shortcuts_data = [...unmoved_shortcuts, ...moved_shortcuts];
				if(this.enable_chrome){
					chrome.storage.local.set({ shortcuts: toRaw(this.shortcuts_data) });
				}
			},
			edit_directory(d) {
				this.edit_mode = true;
				this.current_directory_edit = d;
				this.$refs.directory_dlg.show(d);
			},
			show_directory_dlg() {
				this.edit_mode = false;
				this.$refs.directory_dlg.show();
			},
			edit_shortcut(s) {
				this.current_shortcut_edit = s;
				this.edit_mode = true;
				this.$refs.shortcut_dlg.show(s);
			},
			show_shortcut_dlg() {
				this.edit_mode = false;
				this.$refs.shortcut_dlg.show();
			},
			reset_shortcut_dlg(){
				this.new_shortcut_label = "";
				this.new_shortcut_url = "";
				this.valid_url = true;
				this.confirm_url = false;
			},
			save_directory(new_dir_name){
				if (this.edit_mode){
					const index = this.categories_data.map(e => e.id).indexOf(this.current_directory_edit.id);
					this.categories_data[index].label = new_dir_name;
					if(this.enable_chrome){
						chrome.storage.local.set({ categories: toRaw(this.categories_data) });
					}
				}else{
					let new_cat = {
						id: this.generateRandomString(),
						label: new_dir_name,
						order: this.categories_data.length
					}
					this.categories_data.push(new_cat);
					if(this.enable_chrome){
						chrome.storage.local.set({ categories: toRaw(this.categories_data) });
					}
					this.set_current_directory(new_cat)
				}
			},
			remove_directory(d){
				let dir_id = d.id;
				
				
				var new_shortcuts = this.shortcuts_data.filter(function (obj) {
					
					if (obj.category == dir_id){
						return false;
					}else{
						return true;
					}
				});
				this.shortcuts_data = new_shortcuts;
				
				
				const index = this.categories_data.map(e => e.id).indexOf(d.id);
				this.categories_data.splice(index, 1);
				
				if (dir_id == this.current_directory.id){
					if (index > 0){
						this.current_directory = this.categories_data.at(index-1);
					}else{
						this.current_directory = null;
					}
				}
				
				if(this.enable_chrome){
					chrome.storage.local.set({ categories: toRaw(this.categories_data) });
					chrome.storage.local.set({ shortcuts: toRaw(this.shortcuts_data) });
				}
			},
			remove_shortcut(s){
				const index = this.shortcuts_data.map(e => e.id).indexOf(s.id);
				this.shortcuts_data.splice(index, 1);
				if(this.enable_chrome){
					chrome.storage.local.set({ shortcuts: toRaw(this.shortcuts_data) });
				}
			},
			save_shortcut(shortcut){
				if (this.edit_mode){
					const index = this.shortcuts_data.map(e => e.id).indexOf(this.current_shortcut_edit.id);
					this.shortcuts_data[index].label = shortcut.label;
					this.shortcuts_data[index].url = shortcut.url;
					if(this.enable_chrome){
						chrome.storage.local.set({ shortcuts: toRaw(this.shortcuts_data) });
					}
				
				}else{
					let dir_id = this.current_directory.id;
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
						label: shortcut.label,
						url: shortcut.url,
						category: this.current_directory.id,
						order: last_order_index
					}
					this.shortcuts_data.push(new_shortcut);
					
					if(this.enable_chrome){
						chrome.storage.local.set({ shortcuts: toRaw(this.shortcuts_data) });
					}
				}
			},
			set_current_directory(d){
				var that = this;
				that.current_directory = d;
				
				
				chrome.storage.local.set({ lastdir: d.id });
				
				
				var _shortcuts = that.shortcuts_data.filter(function (obj) {
					if (obj.category == that.current_directory.id){
						return true;
					}else{
						return false;
					}
				});
				this.filtered_shortcuts_data = _shortcuts;
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
			show_about_dlg(){
				this.$refs.about_dlg.show();
			}
			
		}
	}
</script>