<script lang="ts">
	import 'iconify-icon';
	import { goto } from '$app/navigation';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { recipes, filterTerm, user } from '$lib/store';
	import { sendToast } from '$lib/utils';
	import RecipeCard from './RecipeCard.svelte';
	
	// TODO: hide the recipes that are 'mix' ingredients such as 'simple syrup'

	const toastStore = getToastStore();

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key == 'Enter') {
			const list = $recipes.filter((recipe) =>
				recipe.name.toUpperCase().includes($filterTerm.toUpperCase())
			);
			if (list.length === 0) {
				handleClick();
				return;
			} else {
				const inputElement = document.getElementById('recipe-search');
				inputElement?.blur();
			}
		}
	}

	function handleClick() {
		if (!$user) {
			const message = 'You must be logged in to add recipes.'
			sendToast(toastStore, message)
			return;
		}
		goto('/recipes/new');
	}

	function clearInput() {
		$filterTerm = '';
	}
</script>

<svelte:head>
	<title>mise | Recipes</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center p-4">
	<div class="space-y-5">
		<h2 class="h2 text-center">Recipes</h2>
		<div class="w-72 input-group grid-cols-[240px_auto]">
			<input
				id="recipe-search"
				type="search"
				placeholder="Search {$recipes.length} recipes..."
				bind:value={$filterTerm}
				on:keypress={handleKeyPress}
			/>
			{#if $filterTerm}
				<button on:click={clearInput}>
					<iconify-icon icon="pajamas:clear"></iconify-icon>
				</button>
			{/if}
		</div>
		<span class="grid grid-flow-col grid-cols-3 justify-stretch w-72 gap-2">
			<button class="btn btn-sm variant-ghost-surface">All</button>
			<button class="btn btn-sm variant-ghost-surface">Ready</button>
			<button class="btn btn-sm variant-ghost-surface">Favorite</button>
		</span>
		<ul class="space-y-2">
			{#each $recipes as recipe}
				<RecipeCard {recipe} />
			{/each}
		</ul>
		<button on:click={handleClick} class="btn variant-filled-success w-full">Add new recipe</button>
	</div>
</div>
