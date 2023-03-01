<script lang="ts">
</script>

<div class="grid grid-cols-8">
	<div class="col-span-6">
		<div class="mb-6">
			<label class="label" for="name-input">Full name</label>
			<input class="input" type="text" />
		</div>
		<div class="mb-6">
			<label class="label" for="phone-input">Phone</label>
			<input class="input" type="phone" />
		</div>
		<div class="mb-6">
			<label class="label" for="email-input">Email</label>
			<input class="input" type="email" />
		</div>

		<hr class="my-8" />

		<form method="POST" action="?/sign-out">
			<div class="mb-12">
				<button class="btn btn-default">Sign out</button>
			</div>
		</form>
	</div>
</div>
