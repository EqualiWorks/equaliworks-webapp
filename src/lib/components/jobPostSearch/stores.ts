import { writable } from 'svelte/store';
import type { Filter } from './types';

const filter: Filter = {
	workTime: [],
	workPlace: [],
	jobRoles: []
};

function searchService() {
	const { subscribe, set, update } = writable<Filter>(filter);
	return {
		subscribe,
		set,
		reset: () => set(filter),
		addFilter: (category: string, value: string) => {
			update((fStore) => {
				switch (category) {
					case 'work-time':
						fStore.workTime = addFilter(fStore.workTime, value);
						break;

					case 'work-place':
						fStore.workPlace = addFilter(fStore.workPlace, value);
						break;
				}
				return fStore;
			});
		},
		removeFilter: (category: string, value: string) => {
			update((fStore) => {
				switch (category) {
					case 'work-time':
						fStore.workTime = removeFilter(fStore.workTime, value);
						break;

					case 'work-place':
						fStore.workPlace = removeFilter(fStore.workPlace, value);
						break;
				}
				return fStore;
			});
		}
	};
}

const addFilter = (filter: string[], value: string): string[] => {
	if (filter.includes(value)) return filter;
	return (filter = [...filter, value]);
};

const removeFilter = (filter: string[], value: string): string[] => {
	return filter.filter((s) => s !== value);
};

export const jobPostStore = searchService();
