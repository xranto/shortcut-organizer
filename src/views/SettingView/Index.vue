<template>
	<div>
		<div class="overflow-hidden bg-white shadow sm:rounded-lg">
			
			<div class="border-t border-gray-100">
				<ul role="list" class="divide-y divide-gray-100">
					<li class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8">
						<div class="flex min-w-0 gap-x-4">
							<div class="min-w-0 flex-auto">
								<p class="text-sm/6 font-semibold text-gray-900">
									<RouterLink to="/setting/personalization" >
										<span class="absolute inset-x-0 -top-px bottom-0"></span>
										{{ t("menuPersonnalisation") }}
									</RouterLink>
								</p>
								<p class="mt-1 flex text-xs/5 text-gray-500">
									{{ t("setIdxSubtitlePersonnalisation") }}
								</p>
							</div>
						</div>
						<div class="flex shrink-0 items-center gap-x-4">
							<svg class="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
								<path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
							</svg>
						</div>
					</li>
					<li class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8">
						<div class="flex min-w-0 gap-x-4">
							<div class="min-w-0 flex-auto">
								<p class="text-sm/6 font-semibold text-gray-900">
									<RouterLink to="/setting/search" >
									<span class="absolute inset-x-0 -top-px bottom-0"></span>
									{{ t("menuSearch") }}
									</RouterLink>
								</p>
								<p class="mt-1 flex text-xs/5 text-gray-500">
									{{ t("setIdxSubtitleSearch") }}
								</p>
							</div>
						</div>
						<div class="flex shrink-0 items-center gap-x-4">
							<svg class="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
								<path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
							</svg>
						</div>
					</li>
					
				</ul>
			</div>
		</div>
	</div>
</template>