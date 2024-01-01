<script lang='ts'>
    import { AppRail, AppRailAnchor, AppRailTile } from "@skeletonlabs/skeleton";
    let currentTile: number = 0;
</script>

<AppRail>
    <!-- TODO: add routing links -->
	<!-- TODO: add icons -->
    <AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <span>Tile 2</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
        <svelte:fragment slot="lead">(icon)</svelte:fragment>
        <span>Tile 3</span>
    </AppRailTile>
    <!-- --- -->
    <svelte:fragment slot="trail">
        <AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
    </svelte:fragment>
</AppRail>