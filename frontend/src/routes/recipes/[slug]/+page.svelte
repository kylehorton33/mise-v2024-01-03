<script lang="ts">
	import { recipes, stockList, PB_URL } from '$lib/store';
	import { page } from '$app/stores';
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	const toastName = $page.url.searchParams.get('new');
	if (toastName) {
		const t: ToastSettings = {
			message: `Created: ${toastName}`,
			background: 'variant-filled-success'
		};
		toastStore.trigger(t);
	}

	function fractionFormat(quantity: number) {
		if (quantity === 1.5) {
			return "1 <span class='diagonal-fractions'>1/2</span>"
		} else if (quantity === 0.75) {
			return "<span class='diagonal-fractions'>3/4</span>"
		} else if (quantity === 0.5) {
			return "<span class='diagonal-fractions'>1/2</span>"
		} else if (quantity === 0.25) {
			return "<span class='diagonal-fractions'>1/4</span>"
		} else {
			return quantity
		}
	}

	const recipe = $recipes.find((recipe) => recipe.slug === $page.params.slug);
	const missing = recipe?.ingredients?.reduce((n, l) => n + +!$stockList[l.ingredient.id], 0);
</script>

<svelte:head>
	<title>mise | {recipe?.name}</title>
</svelte:head>

{#if recipe}
	<div
		class="card mt-4 sm:mt-8 mx-4 sm:mx-auto p-4 sm:px-16 max-w-lg justify-center flex flex-col space-y-4"
	>
		<h1 class="h2 text-center">{recipe.name}</h1>
		<div class="text-center">
			{#if missing === 0}
				<span class="badge variant-ghost-success">0 missing ingredients</span>
			{:else}
				<span class="badge variant-ghost-surface"
					>{missing} missing ingredient{missing === 1 ? '' : 's'}</span
				>
			{/if}
		</div>
		<ul class="list-inside list-disc">
			{#if recipe.ingredients}
				{#each recipe.ingredients as { quantity, ingredient }}
					<li class:text-surface-400={!$stockList[ingredient.id]}>
						{@html fractionFormat(quantity)}
						{ingredient.unit}
						{ingredient.name}
					</li>
				{/each}
			{/if}
		</ul>
		<p>{recipe.instructions}</p>
		{#if recipe.image}
			<img
				src="{$PB_URL}/api/files/p7m0479jjpakez0/{recipe.id}/{recipe.image}?thumb=300x300"
				class="w-72 self-center"
				alt={recipe.name}
			/>
		{/if}
	</div>
{:else}
	<h1>No recipe found matching '{$page.params.slug}'</h1>
{/if}
