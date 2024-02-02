<script lang="ts">
	import 'iconify-icon';
	import { ingredients, filterTerm, user } from '$lib/store';
	import type { ActionData } from './$types';
	import IngredientCard from './IngredientCard.svelte';
	import { getToastStore, getDrawerStore } from '@skeletonlabs/skeleton';
	import { openDrawer, sendToast } from '$lib/utils';

	export let form: ActionData;

	const toastStore = getToastStore();
	const drawerStore = getDrawerStore();

	if (form?.response) {
		const message = form?.response.message
		const background = form?.response.background
		sendToast(toastStore, message, background)
	}

	function handleClick() {
		if (!$user) {
			const message = 'You must be logged in to add ingredients.'
			sendToast(toastStore, message)
			return;
		}
		openDrawer(drawerStore)
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key == 'Enter') {
			const list = $ingredients.filter((ingredient) =>
				ingredient.name.toUpperCase().includes($filterTerm.toUpperCase())
			);
			if (list.length === 0) {
				handleClick();
				return
			} else {
				const inputElement = document.getElementById('ingredient-search')
				inputElement?.blur()
			}
		}
	}

	function clearInput() {
		$filterTerm = '';
	}
</script>

<svelte:head>
	<title>mise | Ingredients</title>
</svelte:head>

<div class="container h-full w-full mx-auto flex justify-center p-4">
	<div class="space-y-5">
		<h2 class="h2 text-center">Ingredients</h2>
		<div class="max-w-md mx-auto input-group grid-cols-[240px_auto]">
			<input
				id="ingredient-search"
				type="search"
				placeholder="Search {$ingredients.length} ingredients..."
				bind:value={$filterTerm}
				on:keypress={handleKeyPress}
			/>
			{#if $filterTerm}
				<button on:click={clearInput}>
					<iconify-icon icon="pajamas:clear"></iconify-icon>
				</button>
			{/if}
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
			{#each $ingredients as ingredient}
				<IngredientCard {ingredient} />
			{/each}
		</div>
		<button class="btn variant-filled-success w-full" on:click={handleClick}
			>Add new ingredient</button
		>
	</div>
</div>
