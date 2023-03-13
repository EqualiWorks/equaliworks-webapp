<script lang="ts">
	import { enhance } from '$app/forms';
	import Toggle from '$lib/components/form/Toggle.svelte';
	import { drawerStore } from '$lib/components/layout/drawer/stores';
	import type { ApplicantEducation } from '$lib/db/types';
	import type { SubmitFunction } from '@sveltejs/kit';

	// component props
	export let title: string;
	export let data: ApplicantEducation = {
		applicant_id: '',
		created_at: null,
		end_date: '',
		graduated: false,
		id: 0,
		institution: '',
		start_date: '',
		title: '',
		degree: null
	};

	// validate submit
	const handleSubmit: SubmitFunction = ({ form, action, cancel }) => {
		// if (data.institution === '') {
		// 	return cancel();
		// }
		// if (new Date(data.start_date).getTime() >= new Date(data.end_date).getTime()) {
		// 	console.log('what');
		// 	return cancel();
		// }
	};

	console.log('helloo');
</script>

<div class="flex h-full flex-col px-8 pb-8 text-sm dark:border-zinc-800 dark:bg-zinc-900">
	<div class="flex items-center gap-4 py-10">
		<i class="ph-graduation-cap ph-xl text-white" />
		<h5 class="text-white">{title}</h5>
	</div>
	<form method="POST" use:enhance={handleSubmit} id="add-education-form" action="?/add-education">
		<div class="mb-5">
			<label class="label" for="educational-institution-input">Institution</label>
			<input
				type="text"
				bind:value={data.institution}
				id="educational-institution-input"
				name="institution"
				class="input"
			/>
		</div>
		<div class="mb-5">
			<label class="label" for="degree-input">Degree</label>
			<input type="text" id="degree-input" name="degree" class="input" />
		</div>
		<div class="mb-5">
			<label class="label" for="title-input">Title</label>
			<input type="text" id="title-input" name="title" class="input" />
		</div>
		<div class="mb-5 grid grid-cols-2 gap-4">
			<div>
				<label class="label" for="start-date-input">Start date</label>
				<input
					type="date"
					bind:value={data.start_date}
					id="start-date-input"
					name="start_date"
					class="input"
				/>
			</div>
			<div>
				<label class="label" for="end-date-input">Graduation date</label>
				<input
					type="date"
					bind:value={data.end_date}
					id="end-date-input"
					name="end_date"
					class="input"
				/>
			</div>
		</div>
		<div class="mb-5">
			<label class="label" for="graduated-input">I have graduated</label>
			<input type="hidden" name="graduated" value="false" />
			<Toggle checked={data.graduated} id="graduated-input" name="graduated" value="true" />
		</div>
	</form>
	<div class="mt-auto flex gap-4">
		<button class="btn btn-ghost" on:click={drawerStore.close}>Cancel</button>
		<button class="btn btn-ghost-green" form="add-education-form">Submit</button>
	</div>
</div>
