<script lang="ts">
    //export let data: {
    export let title: string;
    export let    icon: string;
    export let    value: number;
    export let    change: string;
    export let    timeframe: string;
    //};
</script>

<div class="box-border relative w-1/6 p-5 group bg-gray-200 dark:bg-slate-600 dark:text-white hover:bg-green-400 rounded-md opacity-75 hover:opacity-100">
    <span class="animate-ping absolute inline-flex h-3 w-3 right-0 top-0 rounded-full bg-red-600 "></span>
    <div class="flex">
        <p>{title}</p>
        <i class="{icon} ml-auto"></i>
    </div>
    <div class="mt-5">
        <h2>{value}</h2>
    </div>
    <div class="flex mt-2 box-border">
        <p class="px-1 rounded-md bg-gray-300 dark:bg-slate-700 group-hover:bg-emerald-400">+{change} </p>
        <p>{timeframe}</p>
    </div>
</div>
