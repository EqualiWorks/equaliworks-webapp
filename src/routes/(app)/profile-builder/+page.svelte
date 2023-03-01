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
			title: 'experience modal!'
		});
	};
</script>

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
						<p class="text-sm text-zinc-500">Company</p>
					</div>
					<button class="btn-sm">
						<i class="ph-pencil ph-xl" />
					</button>
				</div>
				<div class="flex items-center justify-between p-2">
					<div>
						<p class="">Frontend developer</p>
						<p class="text-sm text-zinc-500">Company</p>
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
								<p class="-mt-1 text-zinc-500">{currentJobRole}</p>
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
									<p class="text-sm text-zinc-500">Company</p>
								</div>
							</div>
							<p class=" text-sm text-zinc-500">
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
									<p class="text-sm text-zinc-500">Degree</p>
								</div>
							</div>
							<p class=" text-sm text-zinc-500">
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
</div>
