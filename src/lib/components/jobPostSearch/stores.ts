import { writable } from 'svelte/store';
import type { Filter } from './types';

const filter: Filter = {
	workTime: [],
	workPlace: [],
	location: [],
	jobTitles: []
};

function searchService() {
	const { subscribe, set, update } = writable<Filter>(filter);
	return {
		subscribe,
		set,
		clear: () => {
			update((fStore) => {
				fStore.jobTitles = [];
				fStore.location = [];
				fStore.workPlace = [];
				fStore.workTime = [];
				return fStore;
			});
		},
		setFilter: (category: string, value: string[]) => {
			update((fStore) => {
				switch (category) {
					case 'job-title':
						fStore.jobTitles = value;
						break;
					case 'location':
						fStore.location = value;
						break;
				}

				return fStore;
			});
		},
		addFilter: (category: string, value: string) => {
			update((fStore) => {
				switch (category) {
					case 'work-time':
						fStore.workTime = addFilter(fStore.workTime, value);
						break;

					case 'work-place':
						fStore.workPlace = addFilter(fStore.workPlace, value);
						break;

					case 'job-title':
						fStore.jobTitles = addFilter(fStore.jobTitles, value);
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

					case 'job-title':
						fStore.jobTitles = removeFilter(fStore.jobTitles, value);
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
