import { ref } from 'vue';
import { useIndexedDB } from './useIndexedDB';

export function useBackgroundImage() {
	const backgroundUrl = ref('');
	const { saveImage, getImage } = useIndexedDB();

	async function loadBackground() {
		const blob = await getImage('backgroundImage');
		if (blob) {
			backgroundUrl.value = URL.createObjectURL(blob);
		}
	}

	async function saveBackground(file) {
		await saveImage('backgroundImage', file);
		await loadBackground();
	}

	return { backgroundUrl, loadBackground, saveBackground };
}
