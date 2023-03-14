<script lang="ts">
	import { enhance } from '$app/forms';
	import Modal from '$lib/components/modal/Modal.svelte';
	import type { ApplicantEducation } from '$lib/db/types';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// props
	export let showModal: boolean;
	export let data: ApplicantEducation | null;

	// handlers
	const handleSubmit: SubmitFunction = ({}) => {
		return async ({ result }) => {
			showModal = false;
			dispatch('submit', result);
		};
	};
</script>

<Modal bind:showModal title="Delete Education">
	{#if data === null}
		<p class="text-red-500">Data not found</p>
	{:else}
		<div class="mb-8">
			<p class="text-sm">
				Are you sure that you want to delete your degree in <span class="font-medium"
					>{data.degree}</span
				>
				from <span class="font-medium">{data.institution}</span>?
			</p>
		</div>
		<form
			method="POST"
			use:enhance={handleSubmit}
			id="delete-education-form"
			action="?/delete-education"
		>
			<div class="flex gap-4">
				<input type="hidden" value={data.id} name="education_id" />
				<input type="submit" class="btn-error btn grow" value="Delete education" />
				<button type="button" on:click={() => (showModal = false)} class="btn">Cancel</button>
			</div>
		</form>
	{/if}
</Modal>
