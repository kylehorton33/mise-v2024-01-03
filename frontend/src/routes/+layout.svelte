<script lang="ts">
	import '../app.postcss';

	import { AppShell, Drawer, getDrawerStore, initializeStores, Toast } from '@skeletonlabs/skeleton';
	import { Header, Footer, Sidebar } from '$lib/components';
	import { ingredients, recipes, PB_URL, user } from '$lib/store';
	import NewIngredient from './ingredients/NewIngredient.svelte';
	import UpdateUsername from './auth/account/UpdateUsername.svelte';

	initializeStores();
	const drawerStore = getDrawerStore();

	export let data;

	user.set(data.user);
	PB_URL.set(data.PB_URL);
	ingredients.set(data.ingredients || []);
	recipes.set(data.recipes || []);
</script>

<Drawer>
	{#if $drawerStore.id === 'new-ingredient'}
		<NewIngredient />
	{:else if $drawerStore.id === 'update-username'}
		<UpdateUsername />
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
