<script setup>
defineProps(["gotoLocation"]);
</script>

<template>
    <li class="nav-item">
        <NuxtLink class="nav-link" :to="gotoLocation">
            <slot></slot>
        </NuxtLink>
    </li>
</template>
