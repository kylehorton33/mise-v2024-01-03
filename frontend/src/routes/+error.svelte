<script lang='ts'>
    import { page } from "$app/stores";
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Error!</h1>
        <span class="code h5">
            <pre>{JSON.stringify($page, null, 2)}</pre>
        </span>
		<a href="/" class="btn variant-filled-secondary w-full">
            Take me home
        </a>
	</div>
</div>
