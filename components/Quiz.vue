<script setup lang="ts">
defineProps(["title", "desc", "quizId", "author"]);
</script>

<template>
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            Quiz
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text"> By: {{ author }}</p>
            <p class="card-text"> {{ desc }}</p>
            <NuxtLink :to="`/quiz/${quizId}`" class="btn btn-primary">Take Quiz</NuxtLink>
        </div>
    </div>
</template>
