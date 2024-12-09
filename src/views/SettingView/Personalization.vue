<template>
	<div>
		<div class="overflow-hidden bg-white shadow sm:rounded-lg">
			
			<div class="border-t border-gray-100">
				<dl class="divide-y divide-gray-100">
					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-900">Page de démarrage</dt>
						<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
							<fieldset>
								<div class="space-y-5">
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input id="last-dir-ch" aria-describedby="last-dir" name="startpage" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="last-dir-ch" class="font-medium text-gray-900">Le dernier dossier</label>
											<p id="last-dir" class="text-gray-500">Afficher le dernier dossier consulté.</p>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input id="first-dir-ch" aria-describedby="first-dir" name="startpage" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="first-dir-ch" class="font-medium text-gray-900">Le premier dossier</label>
											<p id="first-dir" class="text-gray-500">Afficher le premier dossier de la liste de dossiers.</p>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input id="dir-list-ch" aria-describedby="dir-list" name="startpage" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="dir-list-ch" class="font-medium text-gray-900">Liste des dossiers</label>
											<p id="dir-list" class="text-gray-500">Afficher une liste des dossiers.</p>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input id="empty-page-ch" aria-describedby="empty-page" name="startpage" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="empty-page-ch" class="font-medium text-gray-900">Page vide</label>
											<p id="empty-page" class="text-gray-500">Afficher une page vide.</p>
										</div>
									</div>
								</div>
							</fieldset>
						
						</dd>
					</div>
					<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-gray-900">Image de fond</dt>
						<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">
							<fieldset>
								<div class="space-y-5">
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input id="default-bg-ch" aria-describedby="default-bg" name="bgimage" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="default-bg-ch" class="font-medium text-gray-900">Image de fond par défaut</label>
											<p id="default-bg" class="text-gray-500">Afficher l'image de fond par défaut</p>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input id="custom-bg-ch" aria-describedby="custom-bg" name="bgimage" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden">
										</div>
										<div class="ml-3 text-sm/6">
											<label for="custom-bg-ch" class="font-medium text-gray-900">Image de fond personnalisée </label>
											<p id="custom-bg" class="text-gray-500">Afficher votre propre image</p>
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