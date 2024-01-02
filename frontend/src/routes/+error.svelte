<script lang='ts'>
    import { page } from "$app/stores";
    console.log($page)
</script>

<div class="container h-full mx-auto p-4 flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">Error!</h1>
        <p>{$page.error?.message}</p>
		<a href="/" class="btn variant-filled-secondary w-full">
            Take me home
        </a>
	</div>
</div>
