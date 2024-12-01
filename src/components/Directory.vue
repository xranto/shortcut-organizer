<template>
	<div
		:class="current ? 'current bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'"
		class="directory-w w-full group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
		v-if="directory" 
		
	>
		<button 
			@drop.prevent="dropShortcut"
			@dragenter.prevent @dragover.prevent
			class="text-left w-full group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
			v-on:click="handleClick"
		>
			<svg v-if="true == false" class="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
			</svg>
			{{ directory.label }}
		
		</button>
		<button v-on:click="show_option" type="button" class="option-button">
			<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
			</svg>
		</button>
		<template>
			<svg id="edit"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
			</svg>
			<svg id="delete" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
			</svg>
		</template>
	</div>
</template>
<script setup>
	import ContextMenu from '@imengyu/vue3-context-menu'
	defineProps({
		directory: {
			type: [Object, null],
			required: false
		},
		shortcut_dragged: {
			type: [Object, null],
			required: false
		},
		current:{
			type: [Boolean, null],
			required: false
		}
	});
</script>
<script>
	export default {
		methods: {
			dropShortcut(ev) {
				
				if(this.shortcut_dragged){
					this.$emit('shortcut_dropped', this.directory);
				}
			},
			handleClick() {
				var that = this;
				this.$emit('eclick', this.directory);
			},
			edit() {
				this.$emit('edit', this.directory);
			},
			remove(d) {
				this.$emit('remove',  this.directory);
			},
			show_option(e){
				var that = this;
				e.preventDefault();
				ContextMenu.showContextMenu({
					x: e.x,
					y: e.y,
					theme: 'flat',
					items: [
						{ 
							label: "Modifier", 
							svgIcon: "#edit",
							onClick: () => {
								that.edit();
							}
						},
						{ 
							label: "Supprimer", 
							svgIcon: "#delete",
							onClick: () => {
								that.remove();
							}
						},
					]
				}); 
			
			}
		}
	}
</script>
<style>
	.option-button{
		opacity: 0;
	}
	.directory-w:hover .option-button{
		opacity: 1;
	}
</style>