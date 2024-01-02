<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	import { Toast } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
	const drawerStore = getDrawerStore()

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { ingredients, recipes, PB_URL } from '$lib/store';
	import NewIngredient from './ingredients/NewIngredient.svelte';
	
	export let data;
	
	PB_URL.set(data.PB_URL);
	ingredients.set(data.ingredients || []);
	recipes.set(data.recipes || [])	;
</script>

<Drawer>
	{#if $drawerStore.id === 'new-ingredient'}
		<NewIngredient />
	{:else}
	 	<h1>Implement new drawer</h1>
	{/if}
</Drawer>

<Toast />

<AppShell slotSidebarLeft="hidden lg:block" slotFooter="block lg:hidden">
	<svelte:fragment slot="header">
		<Header user={data.user} />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
