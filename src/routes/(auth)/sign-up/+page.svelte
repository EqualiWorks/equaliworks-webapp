<script lang="ts">
	let profileType: "applicant" | "recruiter";
	let createCompany: "create" | "join";
</script>

<div class="flex flex-col items-center m-6">
	<div class="flex flex-col w-2/5 m-6 items-center rounded-xl border bg-white p-5 dark:border-zinc-700 dark:bg-zinc-800">
		<p class="text-3xl dark:text-white">Register as an applicant or recruiter</p>
		<div class="w-full mt-4 flex justify-evenly">
			<button
				on:click={() => profileType = "applicant"}
				class="btn btn-default dark:hover:bg-slate-500 {profileType == 'applicant' ? 'dark:bg-slate-700' : ''}"
			>Applicant</button>
			<button
				on:click={() => profileType = "recruiter"}
				class="btn btn-default dark:hover:bg-slate-500 {profileType == 'recruiter' ? 'dark:bg-slate-700' : ''}"
			>Recruiter</button>
		</div>
	</div>
	{#if profileType == "recruiter"}
		<div class="flex flex-col w-2/5 m-6 items-center rounded-xl border bg-white p-5 dark:border-zinc-700 dark:bg-zinc-800">
			<p class="text-3xl dark:text-white">Create a company, or join an existing one</p>
			<div class="w-full mt-4 flex justify-evenly">
				<button
					on:click={() => createCompany = "create"}
					class="btn btn-default dark:hover:bg-slate-500 {createCompany == "create" ? 'dark:bg-slate-700' : ''}"
				>Create</button>
				<button
					on:click={() => createCompany = "join"}
					class="btn btn-default dark:hover:bg-slate-500 {createCompany == "join" ? 'dark:bg-slate-700' : ''}"
				>Join</button>
			</div>
		</div>
	{/if}
	{#if profileType == "applicant" || (profileType == "recruiter" && createCompany)}
		<form method="POST" action="/sign-up/profile">
			<button class="btn btn-default dark:hover:bg-slate-500">Get started</button>
		</form>
	{/if}
</div>
