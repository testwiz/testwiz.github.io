<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <NuxtLink class="navbar-brand" to="/">TestWiz</NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavBarElement goto-location="/">Home</NavBarElement>
                    <NavBarElement goto-location="/about">About</NavBarElement>
                    <NavBarElement goto-location="/quizzes">Quizzes</NavBarElement>
                </ul>
                <div class="d-flex">
                    <button class="btn btn-outline-primary m-2">
                        Login
                    </button>
                    <button class="btn btn-outline-primary m-2">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
