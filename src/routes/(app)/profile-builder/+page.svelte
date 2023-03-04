<script lang="ts">
	import Modal from '$lib/components/modal/Modal.svelte';
	import { modalStore } from '$lib/components/modal/stores';
	import type { ModalComponent } from '$lib/components/modal/types';
	import ExperienceModal from './ExperienceModal.svelte';

	let currentJobRole: string = 'Fullstack Developer';
	let aboutSection: string = 'lorem ipsum';

	let hideDetails = true;

	const handleVisibilityToggle = () => {
		hideDetails = !hideDetails;
	};

	const modalComponent: ModalComponent = {
		// Pass a reference to your custom component
		ref: ExperienceModal,
		// Add the component properties as key/value pairs
		props: { background: 'bg-red-500' },
		// Provide a template literal for the default component slot
		slot: '<p>Skeleton</p>'
	};
	// ...

	const triggerModal = (): void => {
		modalStore.trigger({
			type: 'component',
			component: modalComponent,
			title: 'Modal header'
		});
	};
</script>

<div class="flex h-full">
	<div class="w-[464px] max-w-[464px] border-r dark:border-zinc-700 dark:bg-zinc-800">
		<div class="border-b py-14 px-5 dark:border-zinc-700">
			<p class="mb-1 text-xs text-zinc-400 dark:text-zinc-400">Profile Builder</p>
			<h3 class="font-medium dark:text-white">Profile Builder</h3>
		</div>
		<div class="mt-6 px-5">
			<p class="mb-2.5 text-sm dark:text-zinc-400">Tag line</p>
			<input class="input" type="text" />
		</div>
		<div class="mt-6 px-5">
			<p class="mb-2.5 text-sm text-zinc-500 dark:text-zinc-400">Tag line</p>
			<textarea class="input" rows="5" />
		</div>

		<div class="mb-2.5 mt-6 flex items-center justify-between px-5">
			<p class="text-sm text-zinc-500 dark:text-zinc-400">Experience</p>
			<button class="btn-sm btn-default">Add <i class="ph-plus" /></button>
		</div>
		<div class="mx-5 divide-y rounded-md border dark:divide-zinc-700 dark:border-zinc-700">
			<div class="flex items-center justify-between p-3">
				<div>
					<p class="text-sm font-medium dark:text-white">Software developer</p>
					<div class="flex items-center gap-2">
						<p class="text-xs text-zinc-400">Maersk</p>
						<div class="h-1 w-1 rounded-full bg-zinc-400" />
						<p class="text-xs text-zinc-400">2022 - now</p>
					</div>
				</div>
				<div class="flex items-center">
					<button class="btn-sm"><i class="ph-trash ph-lg dark:text-white" /></button>
					<button on:click={triggerModal} class="btn-sm"
						><i class="ph-pencil-simple-line ph-lg dark:text-white" /></button
					>
				</div>
			</div>
			<div class="flex items-center justify-between p-3">
				<div>
					<p class="text-sm font-medium dark:text-white">Software developer</p>
					<div class="flex items-center gap-2">
						<p class="text-xs text-zinc-400">Maersk</p>
						<div class="h-1 w-1 rounded-full bg-zinc-400" />
						<p class="text-xs text-zinc-400">2022 - now</p>
					</div>
				</div>
				<div class="flex items-center">
					<button class="btn-sm"><i class="ph-trash ph-lg dark:text-white" /></button>
					<button on:click={triggerModal} class="btn-sm"
						><i class="ph-pencil-simple-line ph-lg dark:text-white" /></button
					>
				</div>
			</div>
			<div class="flex items-center justify-between p-3">
				<div>
					<p class="text-sm font-medium dark:text-white">Software developer</p>
					<div class="flex items-center gap-2">
						<p class="text-xs text-zinc-400">Maersk</p>
						<div class="h-1 w-1 rounded-full bg-zinc-400" />
						<p class="text-xs text-zinc-400">2022 - now</p>
					</div>
				</div>
				<div class="flex items-center">
					<button class="btn-sm"><i class="ph-trash ph-lg dark:text-white" /></button>
					<button on:click={triggerModal} class="btn-sm"
						><i class="ph-pencil-simple-line ph-lg dark:text-white" /></button
					>
				</div>
			</div>
		</div>
		<div class="mb-2.5 mt-6 flex items-center justify-between px-5">
			<p class="text-sm text-zinc-500 dark:text-zinc-400">Education</p>
			<button class="btn-sm btn-default">Add <i class="ph-plus" /></button>
		</div>
		<div class="mx-5 divide-y rounded-md border dark:divide-zinc-700 dark:border-zinc-700">
			<div class="flex items-center justify-between p-3">
				<div>
					<p class="text-sm font-medium dark:text-white">Software developer</p>
					<div class="flex items-center gap-2">
						<p class="text-xs text-zinc-400">Maersk</p>
						<div class="h-1 w-1 rounded-full bg-zinc-400" />
						<p class="text-xs text-zinc-400">2022 - now</p>
					</div>
				</div>
				<div class="flex items-center">
					<button class="btn-sm"><i class="ph-trash ph-lg dark:text-white" /></button>
					<button on:click={triggerModal} class="btn-sm"
						><i class="ph-pencil-simple-line ph-lg dark:text-white" /></button
					>
				</div>
			</div>
			<div class="flex items-center justify-between p-3">
				<div>
					<p class="text-sm font-medium dark:text-white">Software developer</p>
					<div class="flex items-center gap-2">
						<p class="text-xs text-zinc-400">Maersk</p>
						<div class="h-1 w-1 rounded-full bg-zinc-400" />
						<p class="text-xs text-zinc-400">2022 - now</p>
					</div>
				</div>
				<div class="flex items-center">
					<button class="btn-sm"><i class="ph-trash ph-lg dark:text-white" /></button>
					<button on:click={triggerModal} class="btn-sm"
						><i class="ph-pencil-simple-line ph-lg dark:text-white" /></button
					>
				</div>
			</div>
			<div class="flex items-center justify-between p-3">
				<div>
					<p class="text-sm font-medium dark:text-white">Software developer</p>
					<div class="flex items-center gap-2">
						<p class="text-xs text-zinc-400">Maersk</p>
						<div class="h-1 w-1 rounded-full bg-zinc-400" />
						<p class="text-xs text-zinc-400">2022 - now</p>
					</div>
				</div>
				<div class="flex items-center">
					<button class="btn-sm"><i class="ph-trash ph-lg dark:text-white" /></button>
					<button on:click={triggerModal} class="btn-sm"
						><i class="ph-pencil-simple-line ph-lg dark:text-white" /></button
					>
				</div>
			</div>
		</div>
	</div>
	<div class="h-full w-full bg-zinc-50 dark:bg-transparent">
		<div
			class="m-6 mx-auto w-[748px] rounded-xl bg-white p-5 shadow-lg dark:border dark:border-zinc-700 dark:bg-black"
		>
			<div class="my-10">
				<h3 class="mb-2 font-medium dark:text-white">Software Development student</h3>
				<p class="text-sm text-zinc-500 dark:text-zinc-400">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
			<p class="mb-5 text-zinc-500 dark:text-zinc-400">Experience</p>
			<div class="mb-8">
				<div class="mb-2 flex items-start justify-between">
					<div>
						<p class="font-medium text-white">Software Developer</p>
						<div class="flex items-center gap-2 text-sm">
							<p class="text-zinc-500 dark:text-zinc-400">Banking Circle</p>
							<div class="h-1 w-1 rounded-full bg-zinc-400" />
							<p class="text-zinc-500 dark:text-zinc-400">Copenhagen, Denmark</p>
						</div>
					</div>
					<p class="text-sm text-zinc-500 dark:text-zinc-400">2019 - 2022</p>
				</div>
				<ul class="ml-6 list-disc text-zinc-500 dark:text-zinc-400">
					<li class="text-sm">svelte</li>
					<li class="text-sm">svelte</li>
					<li class="text-sm">svelte</li>
				</ul>
			</div>
			<div class="mb-8">
				<div class="mb-2 flex items-start justify-between">
					<div>
						<p class="font-medium">Software Developer</p>
						<div class="flex items-center gap-2 text-sm">
							<p class="text-zinc-500 dark:text-zinc-400">Banking Circle</p>
							<div class="h-1 w-1 rounded-full bg-zinc-400" />
							<p class="text-zinc-500 dark:text-zinc-400">Copenhagen, Denmark</p>
						</div>
					</div>
					<p class="text-sm text-zinc-500 dark:text-zinc-400">2019 - 2022</p>
				</div>
				<ul class="ml-6 list-disc text-zinc-500 dark:text-zinc-400">
					<li class="text-sm">svelte</li>
					<li class="text-sm">svelte</li>
					<li class="text-sm">svelte</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<!-- 
<div class="grid h-full grid-cols-6">
	<div class="col-span-2 border-r bg-zinc-50 p-4 dark:border-transparent dark:bg-zinc-800">
		<div class="my-10">
			<h3>Profile Builder</h3>
		</div>
		<div class="mb-6">
			<label for="current-jobrole" class="label">Current job role</label>
			<input id="current-jobrole" type="text" class="input text-sm" bind:value={currentJobRole} />
		</div>
		<div class="mb-6">
			<label for="current-jobrole" class="label">About</label>
			<textarea class="input" rows="10" bind:value={aboutSection} />
		</div>
		<div class="mb-6">
			<div class="divide-y rounded-lg border">
				<div class="flex items-center justify-between p-2">
					<div>
						<p class="">Frontend developer</p>
						<p class="text-sm text-zinc-500 dark:text-zinc-400">Company</p>
					</div>
					<button class="btn-sm">
						<i class="ph-pencil ph-xl" />
					</button>
				</div>
				<div class="flex items-center justify-between p-2">
					<div>
						<p class="">Frontend developer</p>
						<p class="text-sm text-zinc-500 dark:text-zinc-400">Company</p>
					</div>
					<button class="btn-sm" on:click={triggerModal}>
						<i class="ph-pencil ph-xl" />
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="col-span-4">
		<div class="border-b p-4">
			<button class="btn btn-default" on:click={handleVisibilityToggle}>
				<i class={hideDetails ? 'ph-eye-closed-bold' : 'ph-eye-bold'} />
				Toggle visibility
			</button>
		</div>
		<div class="grid grid-cols-6">
			<div class="col-span-4">
				<div class="flex items-center gap-4 border-b p-4">
					<div class="bg h-14 w-14 rounded-full border" />
					<div class="flex items-center gap-4">
						<div>
							{#if hideDetails}
								<h3 class="tracking-tight dark:text-white">{currentJobRole}</h3>
							{:else}
								<h3 class="tracking-tight dark:text-white">Applicant Full Name</h3>
								<p class="-mt-1 text-zinc-500 dark:text-zinc-400">{currentJobRole}</p>
							{/if}
						</div>
						<span
							class="rounded-full border border-green-600 bg-green-50 py-0.5 px-2.5 text-xs font-medium tracking-tight text-green-600"
							>95% match</span
						>
					</div>
				</div>
				<div class="p-4">
					<h4 class="mb-2">About</h4>
					<p class="text-sm">{aboutSection}</p>
				</div>
				<div class="mx-4 mb-2 mt-6">
					<h4>Experience</h4>
				</div>
				<div class="mx-4 flex flex-col divide-y rounded-xl border">
					<div class="pt-4">
						<div class="mx-4 flex items-center justify-between">
							<div class="flex items-center">
								<i class="ph-briefcase ph-lg mr-4" />
								<div>
									<div class="flex items-center gap-2">
										<p>Frontend developer</p>
										<span
											class="rounded-full border border-purple-600 bg-purple-50 py-0.5 px-2.5 text-xs font-medium tracking-tight text-purple-600"
											>Current</span
										>
									</div>
									<p class="text-sm text-zinc-500 dark:text-zinc-400">Company</p>
								</div>
							</div>
							<p class=" text-sm text-zinc-500 dark:text-zinc-400">
								{hideDetails ? '2 years, 3 months' : 'Mar 2000 - Jun 2300'}
							</p>
						</div>
						<div class="px-12 py-4 text-sm">Lorem ipsum</div>
					</div>
				</div>
				<div class="mx-4 mb-2 mt-6">
					<h4>Educaiton</h4>
				</div>
				<div class="mx-4 flex flex-col divide-y rounded-xl border">
					<div class="pt-4">
						<div class="mx-4 flex items-center justify-between">
							<div class="flex items-center">
								<i class="ph-graduation-cap ph-lg mr-4" />
								<div>
									<div class="flex gap-2">
										<p>Software development</p>
									</div>
									<p class="text-sm text-zinc-500 dark:text-zinc-400">Degree</p>
								</div>
							</div>
							<p class=" text-sm text-zinc-500 dark:text-zinc-400">
								{hideDetails ? '' : '2019 - 2022 | Name of educational institution'}
							</p>
						</div>
						<div class="px-12 py-4 text-sm">lorem ipsum</div>
					</div>
				</div>
				<div class="p-4">
					<h4>Certifications</h4>
				</div>
				<div class="p-4">
					<h4>Skills</h4>
				</div>
			</div>
			<div class="col-span-2 border-l p-4">
				<h4>Skills</h4>
			</div>
		</div>
	</div>
</div> -->
