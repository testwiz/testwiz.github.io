<script>
    import cookie from "js-cookie";
</script>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">TestWiz</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/quizzes">Quizzes</a>
                </li>
            </ul>
            <div class="d-flex">
                {#if cookie.get("auth_session") == null}
                    <a
                        class="btn btn-outline-primary m-2"
                        href="/accounts/login">Login</a
                    >
                    <a
                        class="btn btn-outline-primary m-2"
                        href="/accounts/register">Register</a
                    >
                {:else}
                    <a
                        class="btn btn-outline-danger m-2"
                        href="/accounts/logout">Log Out</a
                    >
                {/if}
            </div>
        </div>
    </div>
</nav>
