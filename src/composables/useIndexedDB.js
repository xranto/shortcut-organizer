export function useIndexedDB() {
	const dbName = 'backgroundDB';
	const storeName = 'images';

	let dbPromise;

	function initDB() {
		dbPromise = new Promise((resolve, reject) => {
			const request = indexedDB.open(dbName, 1);

			request.onupgradeneeded = (event) => {
				const db = event.target.result;
				if (!db.objectStoreNames.contains(storeName)) {
					db.createObjectStore(storeName, { keyPath: 'id' });
				}
			};

			request.onsuccess = (event) => {
				resolve(event.target.result);
			};

			request.onerror = (event) => {
				reject(event.target.error);
			};
		});
	}

	function getDatabase() {
		if (!dbPromise) {
			initDB();
		}
		return dbPromise;
	}

	function saveImage(id, file) {
		return getDatabase().then((db) => {
			return new Promise((resolve, reject) => {
				const transaction = db.transaction(storeName, 'readwrite');
				const store = transaction.objectStore(storeName);
				store.put({ id, file });

				transaction.oncomplete = () => resolve();
				transaction.onerror = (event) => reject(transaction.error);
			});
		});
	}

	function getImage(id) {
		return getDatabase().then((db) => {
			return new Promise((resolve, reject) => {
				if (!db.objectStoreNames.contains(storeName)) {
					reject(new Error(`Object store "${storeName}" not found.`));
					return;
				}

				const transaction = db.transaction(storeName, 'readonly');
				const store = transaction.objectStore(storeName);
				const getRequest = store.get(id);

				getRequest.onsuccess = (e) => resolve(e.target.result?.file || null);
				getRequest.onerror = (event) => reject(getRequest.error);
			});
		});
	}

	return { initDB, saveImage, getImage };
}
