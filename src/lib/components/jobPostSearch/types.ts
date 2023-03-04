export interface Filter {
	workTime: string[];
	workPlace: string[];
	location?: string | undefined;
	jobRoles: string[];
}

export interface FilterButtonData {
	value: string;
	title: string;
	id: string;
	icon: string;
}
