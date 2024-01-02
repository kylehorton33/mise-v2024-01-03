<script lang="ts">
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<TabGroup
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	padding="py-6"
	rounded="rounded-tl-lg rounded-tr-lg"
	border=""
	class="bg-surface-100-800-token w-full"
>
	<!-- TODO: add icons -->
	<TabAnchor href="/ingredients" selected={$page.url.pathname === '/ingredients'}>
		<span>Ingredients</span>
	</TabAnchor>
	<TabAnchor href="/recipes" selected={$page.url.pathname === '/recipes'}>
		<span>Recipes</span>
	</TabAnchor>
</TabGroup>
