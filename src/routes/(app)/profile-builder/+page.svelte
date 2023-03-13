<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Modal from '$lib/components/modal/Modal.svelte';
	import { toastStore } from '$lib/components/toast/stores';
	import type { ApplicantEducation, ApplicantExperience } from '$lib/db/types';
	import type { PageData } from './$types';
	import AddEducationModal from './AddEducationModal.svelte';
	import DeleteEducationModal from './DeleteEducationModal.svelte';
	import ProfileAttributeBuilder from './ProfileAttributeBuilder.svelte';
	import ProfileEducationBuilder from './ProfileEducationBuilder.svelte';

	// props
	export let data: PageData;

	// reactive variables
	$: education = data.education as ApplicantEducation[];
	$: experiences = data.experience as ApplicantExperience[];

	// education modal states
	let AddEducationModalIsOpen = false;
	let UpdateEducationModalIsOpen = false;
	let DeleteEducationModalIsOpen = false;

	// experience modal states
	let AddExperienceModalIsOpen = false;
	let UpdateExperienceModalIsOpen = false;
	let DeleteExperienceModalIsOpen = false;

	const handleSuccessSubmit = async () => {
		invalidateAll();
		toastStore.trigger({
			type: 'success',
			message: 'Successfully added new education',
			icon: 'ph-check-circle'
		});
	};
</script>

<Modal bind:showModal={AddEducationModalIsOpen} title="Add Education">
	<AddEducationModal
		on:submit-success={handleSuccessSubmit}
		bind:showModal={AddEducationModalIsOpen}
	/>
</Modal>

<Modal bind:showModal={DeleteEducationModalIsOpen} title="Delete Education">
	<DeleteEducationModal />
</Modal>

<div class="grid h-full grid-cols-7">
	<div class="col-span-3 overflow-y-auto border-r dark:border-zinc-700 dark:bg-zinc-800">
		<div class="flex h-44 flex-col justify-center border-b dark:border-zinc-700">
			<div class="flex-col justify-center px-5 dark:border-zinc-700">
				<p class="mb-1 text-xs text-zinc-400 dark:text-zinc-400">Profile Builder</p>
				<h3 class="font-medium dark:text-white">Profile Builder</h3>
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
			<p class="text-sm text-zinc-500 dark:text-zinc-400">Experience</p>
			<button class="btn-ghost btn-sm btn gap-2">
				<i class="ph-plus-bold ph-lg" />
				Add
			</button>
		</div>
		<div class="mx-5 divide-y rounded-md border dark:divide-zinc-700 dark:border-zinc-700">
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
					<p class="text-sm dark:text-zinc-400">None</p>
				</div>
			{/if}
		</div>
		<div class="mb-2.5 mt-6 flex items-center justify-between px-5">
			<p class="text-sm text-zinc-500 dark:text-zinc-400">Education</p>
			<button class="btn-ghost btn-sm btn gap-2" on:click={() => (AddEducationModalIsOpen = true)}>
				<i class="ph-plus-bold ph-lg" />
				Add
			</button>
		</div>
		<div class="mx-5 divide-y rounded-md border dark:divide-zinc-700 dark:border-zinc-700">
			{#if education.length}
				{#each education as data}
					<ProfileEducationBuilder {data} />
				{/each}
			{:else}
				<div class="flex items-center justify-center p-4">
					<p class="text-sm dark:text-zinc-400">None</p>
				</div>
			{/if}
		</div>
	</div>

	<div class="col-span-4 overflow-y-auto bg-white dark:bg-transparent">
		<div class="flex h-44 flex-col">
			<div class="flex grow items-center gap-4 px-8">
				<div
					class="bg flex h-12 w-12 items-center justify-center rounded-full border dark:border-zinc-700"
				>
					<i class="ph-user ph-xl" />
				</div>
				<div>
					<h3 class="font-medium dark:text-white">Software Development student</h3>
				</div>
			</div>
		</div>

		<div class="py-5 px-8">
			<div class="mb-2 flex items-center gap-2 text-sky-700">
				<i class="ph-user" />
				<p class="text-sm font-medium">About</p>
			</div>
			<p class="text-sm text-zinc-500 dark:text-zinc-400">
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
			<div class="mb-2 flex items-center gap-2 text-teal-700 dark:text-teal-400">
				<i class="ph-barbell" />
				<p class="text-sm font-medium">Experience</p>
			</div>
			<div class="flex flex-col gap-4">
				<div>
					<div class="flex items-start justify-between">
						<div>
							<p class="font-medium dark:text-white">Software Developer</p>
							<p class="text-xs text-zinc-500">Company . Copenhagen, Denmark</p>
						</div>
						<p class="text-sm">2019 - 2022</p>
					</div>
					<ul class="my-2 ml-6 list-disc text-sm text-zinc-500">
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
			<div class="mb-2 flex items-center gap-2 text-teal-700">
				<i class="ph-graduation-cap" />
				<p class="text-sm font-medium">Education</p>
			</div>
			<div class="flex flex-col gap-4">
				<div>
					<div class="flex items-start justify-between">
						<div>
							<p class="mb-1 font-medium">
								Bachelor's degree <span class="font-normal text-zinc-500">Software development</span
								>
							</p>
							<p class="text-xs text-zinc-500">University</p>
						</div>
						<p class="text-sm">2019 - 2022</p>
					</div>
					<ul class="my-2 ml-6 list-disc text-sm text-zinc-500">
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
								1 semester <span class="font-normal text-zinc-500">Information Technology</span>
							</p>
							<p class="text-xs text-zinc-500">University .</p>
						</div>
						<p class="text-sm">2018 - 2019</p>
					</div>
					<ul class="my-2 ml-6 list-disc text-sm text-zinc-500">
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
								Gynasium <span class="font-normal text-zinc-500">Digital Communication</span>
							</p>
							<p class="text-xs text-zinc-500">Highschool</p>
						</div>
						<p class="text-sm">2014 - 2017</p>
					</div>
					<ul class="my-2 ml-6 list-disc text-sm text-zinc-500">
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
			<div class="flex items-center justify-between rounded-lg border border-teal-700 p-4">
				<div>
					<p class="mb-1 text-sm">Checkout portfolio</p>
					<p class="text-xs text-zinc-500">5 projects</p>
				</div>
				<i class="ph-arrow-right ph-xl text-teal-700" />
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
