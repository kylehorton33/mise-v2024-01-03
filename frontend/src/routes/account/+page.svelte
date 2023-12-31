<script>
    export let data;
    const { user } = data;
</script>

<div class="flex flex-col w-full items-center justify-center space-y-5 p-4">
    <h1 class="h1">Account:</h1>
    <span class="code">
        <pre>{JSON.stringify(user, null, 2)}</pre>
    </span>
    <form action="?/logout" method="post">
        <button class="btn variant-filled-error">Logout</button>
    </form>
</div>