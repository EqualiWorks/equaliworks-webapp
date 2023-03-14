<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import Modal from '$lib/components/modal/Modal.svelte';
	import type { ApplicantEducation } from '$lib/db/types';
	import { createEventDispatcher } from 'svelte';

	// event dispatcher
	const dispatch = createEventDispatcher();

	// props
	export let showModal: boolean;
	export let data: ApplicantEducation | null = null;

	// state
	let loading: boolean = false;
	let description: string = '';

	// handlers
	const handleSubmit: SubmitFunction = ({ form, data, action, cancel }) => {
		const { start_date, end_date } = Object.fromEntries(data);

		// validate that end date is not before start date
		if (new Date(start_date.toString()).getTime() >= new Date(end_date.toString()).getTime()) {
			console.log('what');
			return cancel();
		}

		return async ({ result }) => {
			showModal = false;
			dispatch('submit', result);
		};
	};
</script>

<Modal bind:showModal title="update Education">
	{#if data === null}
		<p>data not found</p>
	{:else}
		<form
			method="POST"
			use:enhance={handleSubmit}
			id="update-education-form"
			action="?/update-education"
		>
			<div class="form-control mb-4 w-full">
				<label class="label" for="title-input">
					<span class="label-text">Title</span>
				</label>
				<input
					required
					type="text"
					id="title-input"
					name="title"
					placeholder="E.g. Software Development"
					class="input-bordered input w-full"
					value={data.title}
				/>
			</div>

			<div class="form-control mb-4 w-full">
				<label class="label" for="educational-institution-input">
					<span class="label-text">Institution</span>
				</label>
				<input
					required
					type="text"
					name="institution"
					id="educational-institution-input"
					placeholder="E.g. IT University of Copenhagen"
					class="input-bordered input w-full"
					value={data.institution}
				/>
			</div>

			<div class="form-control mb-4 w-full">
				<label class="label" for="degree-input">
					<span class="label-text">Degree</span>
				</label>
				<input
					required
					type="text"
					id="degree-input"
					name="degree"
					placeholder="E.g. Bachelor"
					class="input-bordered input w-full"
					value={data.degree}
				/>
			</div>

			<div class="mb-4 grid w-full grid-cols-2 gap-4">
				<div class="form-control w-full">
					<label class="label" for="start-date-input">
						<span class="label-text">Start date</span>
					</label>
					<input
						required
						type="date"
						id="start-date-input"
						name="start_date"
						class="input-bordered input w-full"
						value={data.start_date}
					/>
				</div>
				<div class="form-control w-full">
					<label class="label" for="graduation-date-input">
						<span class="label-text">Graduation date</span>
					</label>
					<input
						required
						type="date"
						id="graduation-date-input"
						name="end_date"
						class="input-bordered input w-full"
						value={data.end_date}
					/>
				</div>
			</div>

			<div class="form-control mb-8 w-full">
				<label class="label" for="description-input">
					<span class="label-text">Description</span>
					{#if data.description !== null && data?.description.length > 1000}
						<span class="label-text text-error">{data.description.length}/1000</span>
					{/if}
				</label>
				<textarea
					bind:value={data.description}
					rows="8"
					id="description-input"
					name="description"
					class="textarea-bordered textarea w-full"
				/>
			</div>

			<input type="hidden" value={data.id} name="education_id" />

			<div class="flex gap-4">
				<input type="submit" value="Save changes" class="btn-primary btn grow" class:loading />
				<button type="button" on:click={() => (showModal = false)} value="Cancel" class="btn"
					>Cancel</button
				>
			</div>
		</form>
	{/if}
</Modal>
