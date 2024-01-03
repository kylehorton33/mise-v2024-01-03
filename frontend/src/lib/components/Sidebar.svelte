<script lang='ts'>
    import { AppRail, AppRailAnchor } from "@skeletonlabs/skeleton";
    import { page } from "$app/stores";
</script>

<AppRail>
	<!-- TODO: add icons -->
    <AppRailAnchor href="/ingredients" selected={$page.url.pathname === '/ingredients'}>
        <span>Ingredients</span>
    </AppRailAnchor>
    <AppRailAnchor href="/recipes" selected={$page.url.pathname === '/recipes'}>
        <span>Recipes</span>
    </AppRailAnchor>
    <!-- --- -->
    <svelte:fragment slot="trail">
        <AppRailAnchor href="https://www.github.com/kylehorton33" target="_blank" title="Account">About</AppRailAnchor>
    </svelte:fragment>
</AppRail>