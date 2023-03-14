<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Modal from '$lib/components/modal/Modal.svelte';
	import { toastStore } from '$lib/components/toast/stores';
	import type { ApplicantEducation, ApplicantExperience } from '$lib/db/types';
	import type { DispatchOptions } from 'svelte/internal';
	import type { PageData } from './$types';
	import AddEducationModal from './AddEducationModal.svelte';
	import DeleteEducationModal from './DeleteEducationModal.svelte';
	import ProfileAttributeBuilder from './ProfileAttributeBuilder.svelte';
	import ProfileEducationBuilder from './ProfileEducationBuilder.svelte';
	import UpdateEducationModal from './UpdateEducationModal.svelte';

	// props
	export let data: PageData;

	// reactive variables
	$: education = data.education as ApplicantEducation[];
	$: experiences = data.experience as ApplicantExperience[];

	// education states
	let AddEducationModalIsOpen: boolean = false;
	let UpdateEducationModalIsOpen: boolean = false;
	let DeleteEducationModalIsOpen: boolean = false;
	let selectedEducation: ApplicantEducation | null = null;

	// experience modal states
	let AddExperienceModalIsOpen = false;
	let UpdateExperienceModalIsOpen = false;
	let DeleteExperienceModalIsOpen = false;

	// handlers
	const handleFormSubmit = async (event: any) => {
		invalidateAll();
		if (event.detail.type === 'failure') {
			toastStore.trigger({
				type: 'error',
				message: event.detail.data.error,
				icon: 'ph-x-circle'
			});
		} else {
			toastStore.trigger({
				type: 'success',
				message: event.detail.data.message,
				icon: 'ph-check-circle'
			});
		}
	};

	const handleDeleteEducationClick = (event: any) => {
		selectedEducation = event.detail.data;
		DeleteEducationModalIsOpen = true;
	};

	const handleUpdateEducationClick = (event: any) => {
		selectedEducation = event.detail.data;
		UpdateEducationModalIsOpen = true;
	};
</script>

<AddEducationModal on:submit={handleFormSubmit} bind:showModal={AddEducationModalIsOpen} />

<DeleteEducationModal
	bind:showModal={DeleteEducationModalIsOpen}
	data={selectedEducation}
	on:submit={handleFormSubmit}
/>

<UpdateEducationModal
	bind:showModal={UpdateEducationModalIsOpen}
	data={selectedEducation}
	on:submit={handleFormSubmit}
/>

<div class="grid h-full grid-cols-7">
	<div class="col-span-3 overflow-y-auto border-r border-base-300 bg-base-200">
		<div class="flex h-44 flex-col justify-center border-b border-base-300">
			<div class="flex-col justify-center border-base-300 px-5">
				<p class="mb-1 text-xs ">Profile Builder</p>
				<h3 class="font-medium ">Profile Builder</h3>
			</div>
		</div>

		<form action="?/add-info" class="mt-8">
			<div class="form-control w-full px-5">
				<label class="label" for="tag-line-input">
					<span class="label-text">Tagline</span>
				</label>
				<input
					id="tag-line-input"
					type="text"
					placeholder="Architect student, passionated web developer, experienced graphics designer ..."
					class="input-bordered input input-md w-full"
				/>
				<label class="label" for="tag-line-input">
					<!-- TODO add error handling -->
					<!-- {#if form?.missing}<span class="label-text-alt text-red-500">Bottom Left label</span>{/if} -->
					<!-- {#if form?.incorrect}<span class="label-text-alt text-red-500">Bottom Left label</span>{/if} -->
				</label>
			</div>

			<div class="form-control w-full px-5">
				<label class="label" for="about-input">
					<span class="label-text">This is what I'm passionated about</span>
				</label>
				<textarea id="about-input" class="textarea-bordered textarea h-24" placeholder="Bio" />
				<label for="about-input" class="label">
					<!-- TODO add error handling -->
					<!-- {#if form?.missing}<span class="label-text-alt text-red-500">Bottom Left label</span>{/if} -->
					<!-- {#if form?.incorrect}<span class="label-text-alt text-red-500">Bottom Left label</span>{/if} -->
				</label>
			</div>
		</form>

		<div class="mb-2.5 mt-6 flex items-center justify-between px-5">
			<p class="text-sm ">Experience</p>
			<button class="btn-ghost btn-sm btn gap-2">
				<i class="ph-plus-bold ph-lg" />
				Add
			</button>
		</div>
		<div class="mx-5 divide-y rounded-md border border-base-300 dark:divide-zinc-700">
			{#if experiences.length}
				{#each experiences as experience}
					<ProfileAttributeBuilder
						title={experience.title}
						institution={experience.company}
						startYear={parseInt(experience.start_date.split('-')[0])}
						endYear={experience.end_date === null
							? null
							: parseInt(experience.end_date.split('-')[0])}
					/>
				{/each}
			{:else}
				<div class="flex items-center justify-center p-4">
					<p class="text-sm ">None</p>
				</div>
			{/if}
		</div>
		<div class="mb-2.5 mt-6 flex items-center justify-between px-5">
			<p class="text-sm ">Education</p>
			<button class="btn-ghost btn-sm btn gap-2" on:click={() => (AddEducationModalIsOpen = true)}>
				<i class="ph-plus-bold ph-lg" />
				Add
			</button>
		</div>
		<div class="mx-5 divide-y rounded-md border border-base-300">
			{#if education.length}
				{#each education as data}
					<ProfileEducationBuilder
						{data}
						on:delete-education={handleDeleteEducationClick}
						on:update-education={handleUpdateEducationClick}
					/>
				{/each}
			{:else}
				<div class="flex items-center justify-center p-4">
					<p class="text-sm ">None</p>
				</div>
			{/if}
		</div>
	</div>

	<div class="col-span-4 overflow-y-auto">
		<div class="flex h-44 flex-col">
			<div class="flex grow items-center gap-4 px-8">
				<div
					class="bg flex h-12 w-12 items-center justify-center rounded-full border border-base-300"
				>
					<i class="ph-user ph-xl" />
				</div>
				<div>
					<h3 class="font-medium ">Software Development student</h3>
				</div>
			</div>
		</div>

		<div class="py-5 px-8">
			<div class="mb-2 flex items-center gap-2 text-secondary">
				<i class="ph-user" />
				<p class="text-sm font-medium">About</p>
			</div>
			<p class="text-sm">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			</p>
		</div>

		<div class="">
			<hr class="border-dashed" />
		</div>

		<div class="px-8 py-5">
			<div class="mb-2 flex items-center gap-2 text-primary">
				<i class="ph-barbell" />
				<p class="text-sm font-medium">Experience</p>
			</div>
			<div class="flex flex-col gap-4">
				<div>
					<div class="flex items-start justify-between">
						<div>
							<p class="font-medium">Software Developer</p>
							<p class="text-xs">Company . Copenhagen, Denmark</p>
						</div>
						<p class="text-sm">2019 - 2022</p>
					</div>
					<ul class="my-2 ml-6 list-disc text-sm">
						<li>skill</li>
						<li>skill</li>
						<li>skill</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="">
			<hr class="border-dashed" />
		</div>

		<div class="px-8 py-5">
			<div class="mb-2 flex items-center gap-2 text-primary">
				<i class="ph-graduation-cap" />
				<p class="text-sm font-medium">Education</p>
			</div>
			<div class="flex flex-col gap-4">
				<div>
					<div class="flex items-start justify-between">
						<div>
							<p class="mb-1 font-medium">
								Bachelor's degree <span class="font-normal ">Software development</span>
							</p>
							<p class="text-xs ">University</p>
						</div>
						<p class="text-sm">2019 - 2022</p>
					</div>
					<ul class="my-2 ml-6 list-disc text-sm ">
						<li>skill</li>
						<li>skill</li>
						<li>skill</li>
					</ul>
				</div>
			</div>
			<hr class="my-2 border-dashed" />
			<div class="flex flex-col gap-4">
				<div>
					<div class="flex items-start justify-between">
						<div>
							<p class="mb-1 font-medium">
								1 semester <span class="font-normal ">Information Technology</span>
							</p>
							<p class="text-xs ">University .</p>
						</div>
						<p class="text-sm">2018 - 2019</p>
					</div>
					<ul class="my-2 ml-6 list-disc text-sm ">
						<li>skill</li>
						<li>skill</li>
						<li>skill</li>
					</ul>
				</div>
			</div>
			<hr class="my-2 border-dashed" />
			<div class="flex flex-col gap-4">
				<div>
					<div class="flex items-start justify-between">
						<div>
							<p class="mb-1 font-medium">
								Gynasium <span class="font-normal ">Digital Communication</span>
							</p>
							<p class="text-xs ">Highschool</p>
						</div>
						<p class="text-sm">2014 - 2017</p>
					</div>
					<ul class="my-2 ml-6 list-disc text-sm ">
						<li>skill</li>
						<li>skill</li>
						<li>skill</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="">
			<hr class="border-dashed" />
		</div>

		<div class="px-8 py-5">
			<p class="mb-1 text-sm font-medium">Porfolio</p>
			<div class="flex items-center justify-between rounded-lg border border-primary p-4">
				<div>
					<p class="mb-1 text-sm">Checkout portfolio</p>
					<p class="text-xs ">5 projects</p>
				</div>
				<i class="ph-arrow-right ph-xl text-primary" />
			</div>
		</div>

		<div class="">
			<hr class="border-dashed" />
		</div>

		<div>
			<div class="px-8 py-5">
				<p class="mb-1 text-sm font-medium">Languages</p>
			</div>
		</div>
	</div>
</div>
