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

<div class="grid h-full grid-cols-7">
	<div class="col-span-3 overflow-y-auto border-r dark:border-zinc-700 dark:bg-zinc-800">
		<div class="flex h-44 flex-col justify-center border-b">
			<div class="flex-col justify-center px-5 dark:border-zinc-700">
				<p class="mb-1 text-xs text-zinc-400 dark:text-zinc-400">Profile Builder</p>
				<h3 class="font-medium dark:text-white">Profile Builder</h3>
			</div>
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
						<p class="text-xs text-zinc-400">Company</p>
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
						<p class="text-xs text-zinc-400">Company</p>
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
						<p class="text-xs text-zinc-400">Company</p>
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
						<p class="text-xs text-zinc-400">Company</p>
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
						<p class="text-xs text-zinc-400">Company</p>
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
						<p class="text-xs text-zinc-400">Company</p>
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
	<div class="col-span-4 overflow-y-auto bg-white dark:bg-transparent">
		<div class="flex h-44 flex-col">
			<div class="border-b border-dashed bg-zinc-50 py-3 px-2">
				<button class="btn-sm btn-ghost font-mono">Front-end CV<i class="ph-caret-down" /></button>
			</div>

			<div class="flex grow items-center gap-4 px-8">
				<div class="bg flex h-12 w-12 items-center justify-center rounded-full border">
					<i class="ph-user ph-xl" />
				</div>
				<div>
					<p class="mb-1 text-xs text-zinc-400 dark:text-zinc-400">This is you 🥳</p>
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
			<div class="mb-2 flex items-center gap-2 text-teal-700">
				<i class="ph-barbell" />
				<p class="text-sm font-medium">Experience</p>
			</div>
			<div class="flex flex-col gap-4">
				<div>
					<div class="flex items-start justify-between">
						<div>
							<p class="font-medium">Software Developer</p>
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

<!-- 




		<div class="bg-white p-5 dark:border dark:border-zinc-700 dark:bg-black">
			<div class="my-10">
				<p class="text-xs text-purple-500">!his is you 😃</p>
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
						<p class="font-medium">Software Developer</p>
						<div class="flex items-center gap-2 text-sm">
							<p class="text-zinc-500 dark:text-zinc-400">Company</p>
							<div class="h-1 w-1 rounded-full bg-zinc-400" />
							<p class="text-zinc-500 dark:text-zinc-400">Copenhagen, Denmark</p>
						</div>
					</div>
					<p class="text-sm text-zinc-500 dark:text-zinc-400">2019 - 2022</p>
				</div>
				<ul class="ml-6 list-disc text-zinc-500 dark:text-zinc-400">
					<li class="text-sm">skill</li>
					<li class="text-sm">skill</li>
					<li class="text-sm">skill</li>
				</ul>
			</div>
			<div class="mb-8">
				<div class="mb-2 flex items-start justify-between">
					<div>
						<p class="font-medium">Software Developer</p>
						<div class="flex items-center gap-2 text-sm">
							<p class="text-zinc-500 dark:text-zinc-400">Company</p>
							<div class="h-1 w-1 rounded-full bg-zinc-400" />
							<p class="text-zinc-500 dark:text-zinc-400">Copenhagen, Denmark</p>
						</div>
					</div>
					<p class="text-sm text-zinc-500 dark:text-zinc-400">2019 - 2022</p>
				</div>
				<ul class="ml-6 list-disc text-zinc-500 dark:text-zinc-400">
					<li class="text-sm">skill</li>
					<li class="text-sm">skill</li>
					<li class="text-sm">skill</li>
				</ul>
			</div>
		</div>
	</div>
</div> -->
