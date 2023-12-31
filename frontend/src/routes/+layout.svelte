<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
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

	import { ingredients } from '$lib/store';
	import NewIngredient from './ingredients/NewIngredient.svelte';
	export let data;
	ingredients.set(data.ingredients);
</script>

<Drawer>
	{#if $drawerStore.id === 'new-ingredient'}
		<NewIngredient />
	{:else}
	 	<h1>Implement new drawer</h1>
	{/if}
</Drawer>

<AppShell slotSidebarLeft="hidden lg:block" slotFooter="block lg:hidden">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>
