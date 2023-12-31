<script lang="ts">
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<TabGroup
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full"
>
	<TabAnchor href="/" selected={$page.url.pathname === '/'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Home</span>
	</TabAnchor>
	<TabAnchor href="/ingredients" selected={$page.url.pathname === '/ingredients'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Ingredients</span>
	</TabAnchor>
	<TabAnchor href="/recipes" selected={$page.url.pathname === '/recipes'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>Recipes</span>
	</TabAnchor>
</TabGroup>
