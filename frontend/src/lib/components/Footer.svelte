<script lang="ts">
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<div data-testid="footer">
	<TabGroup
		justify="justify-center"
		active="variant-filled-primary"
		hover="hover:variant-soft-primary"
		flex="flex-1 lg:flex-none"
		padding="py-4"
		rounded="rounded-tl-lg rounded-tr-lg"
		border=""
		class="bg-surface-100-800-token w-full hidden tall:block"
	>
		<TabAnchor href="/ingredients" selected={$page.url.pathname === '/ingredients'}>
			<span>Ingredients</span>
		</TabAnchor>
		<TabAnchor href="/recipes" selected={$page.url.pathname === '/recipes'}>
			<span>Recipes</span>
		</TabAnchor>
	</TabGroup>
</div>
