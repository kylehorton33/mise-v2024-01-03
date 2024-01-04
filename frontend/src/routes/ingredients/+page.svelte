<script lang="ts">
	import 'iconify-icon';
	import { ingredients, filterTerm, user } from '$lib/store';
	import type { ActionData } from './$types';
	import IngredientCard from './IngredientCard.svelte';
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	export let form: ActionData;

	if (form?.response) {
		const t: ToastSettings = form?.response;
		toastStore.trigger(t);
	}

	const drawerStore = getDrawerStore();

	function openDrawer() {
		if (!$user) {
			const t: ToastSettings = {
				message: 'You must be logged in',
				background: 'variant-filled-error'
			};
			toastStore.trigger(t);
			return;
		}
		const drawerSettings: DrawerSettings = {
			id: 'new-ingredient',
			position: 'bottom',
			height: 'h-72',
			duration: 200
		};
		drawerStore.open(drawerSettings);
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (event.key == 'Enter') {
			// TODO: open drawer only if there are no matching ingredients
			openDrawer();
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
		<h1 class="h2 text-center">Ingredients</h1>
		<div class="w-72 input-group grid-cols-[240px_auto]">
			<input
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

		<ul class="space-y-2">
			{#each $ingredients as ingredient}
				<IngredientCard {ingredient} />
			{/each}
		</ul>
		<button class="btn variant-filled-success w-full" on:click={openDrawer}
			>Add new ingredient</button
		>
	</div>
</div>
