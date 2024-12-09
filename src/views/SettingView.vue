<template>
	<main>
		<div>
			<div class="fixed inset-y-0 z-50 flex w-52 flex-col">
				<div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-5">
					<nav class="mt-10 flex flex-1 flex-col">
						<ul role="list" class="flex flex-1 flex-col gap-y-7">
							<li>
								 <RouterLink to="/setting/personalization"  class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
										<path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
									</svg>

									Personnalisation
								</RouterLink>
							</li>
							<li>
								 <RouterLink to="/setting/search"  class="group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
										<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
									</svg>
									Recherche
								</RouterLink>
							</li>
							
						</ul>
					</nav>
				</div>
			</div>
			<main class="py-10 pl-52">
				<div class="px-4 sm:px-6 lg:px-8">
					<!-- Setting Detail -->
					
					<router-view />

					<!-- Setting Detail -->
				</div>
			</main>
		</div>
	</main>
</template>
<script>
	import { onMounted, onUnmounted } from 'vue';

	export default {
		name: 'MonComposant',
		setup() {
			onMounted(() => {
				document.body.classList.add('setting-page');
			}
		);

		onUnmounted(() => {
			document.body.classList.remove('setting-page');
		});
	  }
	};
</script>