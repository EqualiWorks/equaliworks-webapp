import { writable } from 'svelte/store';
import type { ModalOptions } from './types';

function modalService() {
	const { subscribe, set, update } = writable<ModalOptions[]>([]);
	return {
		subscribe,
		set,
		update,
		trigger: (modal: ModalOptions) =>
			update((mStore) => {
				mStore.push(modal);
				return mStore;
			}),
		close: () =>
			update((mStore) => {
				if (mStore.length > 0) mStore.shift();
				return mStore;
			}),
		clear: () => set([])
	};
}

export const modalStore = modalService();
