<script lang="ts">
	import 'iconify-icon';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { fractionFormat, sendToast } from '$lib/utils';
	import { recipes, stockList, PB_URL } from '$lib/store';

	if ($page.url.searchParams.get('new')) {
		const toastStore = getToastStore();
		const message = 'New recipe created';
		const background = 'variant-filled-success';
		sendToast(toastStore, message, background);
	}

	const recipe = $recipes.find((recipe) => recipe.slug === $page.params.slug);
	const missing = recipe?.ingredients?.reduce((n, l) => n + +!$stockList[l.ingredient.id], 0);
</script>

<svelte:head>
	<title>mise | {recipe?.name}</title>
</svelte:head>

{#if recipe}
	<div
		class="sm:card sm:mt-8 mx-4 sm:mx-auto p-4 sm:px-16 max-w-lg justify-center flex flex-col space-y-4"
	>
		<h1 class="h2 text-center underline underline-offset-3">{recipe.name}</h1>
		<ul>
			{#if recipe.ingredients}
				{#each recipe.ingredients as { quantity, ingredient }}
					<li class="flex space-x-1 items-center">
						{#if $stockList[ingredient.id]}
							<iconify-icon icon="radix-icons:check" class="text-success-500"></iconify-icon>
						{:else}
							<iconify-icon icon="radix-icons:cross-2" class="text-error-500"></iconify-icon>
						{/if}
						<span class:text-surface-500={!$stockList[ingredient.id]}>
							{@html fractionFormat(quantity)}
							{ingredient.unit}
							{ingredient.name}
						</span>
					</li>
				{/each}
			{/if}
		</ul>
		<p>{recipe.instructions}</p>
		{#if recipe.image}
			<img
				src="{$PB_URL}/api/files/p7m0479jjpakez0/{recipe.id}/{recipe.image}?thumb=300x300"
				class="w-48 sm:72 self-center"
				alt={recipe.name}
			/>
		{/if}
	</div>
{:else}
	<h1>No recipe found matching '{$page.params.slug}'</h1>
{/if}
