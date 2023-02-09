import { writable } from 'svelte/store';
import type { Drawer } from './Drawer';

function drawerService() {
	const { subscribe, set, update } = writable<Drawer>({});
	return {
		subscribe,
		set,
		update,
		/** Open the drawer. */
		open: () =>
			update(() => {
				return { open: true };
			}),
		/** Close the drawer. */
		close: () =>
			update(() => {
				return { open: false };
			})
	};
}

export const drawerStore = drawerService();
