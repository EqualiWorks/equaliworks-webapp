import { writable } from 'svelte/store';
import type { ToastOptions } from './types';

const toastDefaults: ToastOptions = {
	message: 'Missing Toast Message',
	autohide: true,
	timeout: 5000,
	icon: 'ph-warning-circle-bold',
	type: 'info'
};

const randomUUID = (): string => {
	return Number(Math.random()).toString(32);
};

const handleAutoHide = (toast: Toast): void => {
	if (toast.autohide === true) {
		setTimeout(() => {
			toastStore.close(toast.id);
		}, toast.timeout);
	}
};

export const toastService = () => {
	const { subscribe, set, update } = writable<Toast[]>([]);

	return {
		subscribe,
		trigger: (toast: ToastOptions) =>
			update((tStore) => {
				const id = randomUUID();

				if (toast && toast.callback) toast.callback({ id, status: 'queued' });

				const tMerged = { ...toastDefaults, ...toast, id };

				tStore.push(tMerged);

				handleAutoHide(tMerged);

				return tStore;
			}),
		close: (id: string) =>
			update((tStore) => {
				if (tStore.length > 0) {
					const index = tStore.findIndex((t) => t.id === id);
					// Trigger Callback
					const selectedToast = tStore[index];
					if (selectedToast && selectedToast.callback)
						selectedToast.callback({ id, status: 'closed' });
					// Remove
					tStore.splice(index, 1);
				}
				return tStore;
			}),
		/** Remove all toasts from queue */
		clear: () => set([])
	};
};

export const toastStore = toastService();
