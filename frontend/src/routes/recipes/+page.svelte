<script lang="ts">
	import { goto } from '$app/navigation';
	import { recipes, filterTerm, user } from '$lib/store';
	import RecipeCard from './RecipeCard.svelte';
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	// TODO: hide the recipes that are 'mix' ingredients such as 'simple syrup'

	const toastStore = getToastStore();

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key == 'Enter') {
			handleClick();
		}
	}

	function handleClick() {
		if (!$user) {
			const t: ToastSettings = {
				message: 'You must be logged in',
				background: 'variant-filled-error'
			};
			toastStore.trigger(t);
			return;
		}
		goto("/recipes/new")
	}
</script>

<svelte:head>
	<title>mise | Recipes</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center p-4">
	<div class="space-y-5">
		<h1 class="h2 text-center">Recipes</h1>
		<!-- TODO: exit the search bar on enter press -->
		<input
			type="text"
			class="input w-72"
			placeholder="Search {$recipes.length} recipes..."
			bind:value={$filterTerm}
			on:keypress={handleKeyPress}
		/>
		<ul class="space-y-2">
			{#each $recipes as recipe}
				<RecipeCard {recipe} />

			{/each}
		</ul>
        <button on:click={handleClick} class="btn variant-filled-success w-full">Add new recipe</button>
	</div>
</div>
