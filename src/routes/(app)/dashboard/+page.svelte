<script lang=ts>
	import Card from "$lib/components/dashboard/Card.svelte";

</script>
<div class="m-4 space-y-20">
	<h1 class="font-display dark:text-white">
		Start your hiring project in a <span
			class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-green-400"
			>fair, inclusive and efficient</span
		>
		manner.
	</h1>
	<div class="font-display dark:text-white">
		<h2>Your stats</h2>
	</div>
	<div class="justify-center flex space-x-6">
		<Card title={"Sent job applications this week"} icon={"ph-paper-plane-tilt"} value={5} change={"2"} timeframe={"more than last week"}/>
		<Card title={"Matching job offers"} icon={"ph-percent"} value={2} change={"1"} timeframe={"new this week"}/>
		<Card title={"Bing chilling"} icon={"ph-cube"} value={15} change={"5%"} timeframe={"brrrrrr"}/>
	</div>
</div>
