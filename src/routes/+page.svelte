<script lang="ts">
    import { page } from "$app/stores";
</script>

<div>
    {#if $page.url.searchParams.get("alert-success")}
        <div class="alert alert-success m-4" role="alert">
            {$page.url.searchParams.get("alert-success")}
        </div>
    {/if}

    {#if $page.url.searchParams.get("alert-danger")}
        <div class="alert alert-danger m-4" role="alert">
            {$page.url.searchParams.get("alert-danger")}
        </div>
    {/if}

    <div class="d-flex justify-content-center">
        <h1 class="text-merriweather">Welcome to TestWiz!</h1>
        <br />
    </div>

    <div class="d-flex justify-content-center m-3">
        <div>
            <p class="text-noto">The tool for all of your teaching duties!</p>
            <p class="text-noto">
                With this tool you can quickly and easily make forms,
            </p>
            <p class="text-noto">
                View their results AND have an AI* check the answers!
            </p>
            <br />
            <p class="text-noto">So what are you waiting for?</p>
            <p class="text-noto">Sign UP Now! or View Already Made Quizzes</p>

            <p class="text-noto text-muted">
                *AI Features are planned for the future
            </p>
        </div>
    </div>
</div>
