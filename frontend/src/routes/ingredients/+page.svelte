<script lang="ts">
	import { ingredients, filterTerm } from '$lib/store';
	import type { ActionData } from './$types';
    import IngredientCard from './IngredientCard.svelte';
    import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
    import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
    
    const toastStore = getToastStore()

    export let form: ActionData;
    
    if (form?.response) {
        const t: ToastSettings = form?.response
        toastStore.trigger(t)
    }
    
    const drawerStore = getDrawerStore()

    function openDrawer() {
        const drawerSettings: DrawerSettings = {
            id: 'new-ingredient',
            position: 'bottom',
            height: 'h-72',
            duration: 200,
        }
        drawerStore.open(drawerSettings)
    }
</script>

<div class="container h-full w-full mx-auto flex justify-center p-4">
	<div class="space-y-5">
		<h1 class="h1 text-center">Ingredients</h1>
        <!-- DONE: add search bar -->
        <input type="text" class="input" placeholder="Search ingredients..." bind:value={$filterTerm}>
        <!-- TODO: contain this in a scroll view-->
		<ul class="space-y-2">
			{#each $ingredients as ingredient}
				<IngredientCard ingredient={ingredient} />
			{/each}
		</ul>
        <p>Or add a new one:</p>
        <button class="btn variant-filled-success w-full" on:click={() => openDrawer()}>Add</button>
	</div>
</div>
