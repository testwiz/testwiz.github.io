<script setup>
import { title } from "process";

defineProps(["imgSource", "title", "desc", "quizLink"]);
</script>

<template>
    <div class="card" style="width: 18rem">
        <img :src="imgSource" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">
                {{ desc }}
            </p>
            <a :href="quizLink" class="btn btn-primary">View Quiz</a>
        </div>
    </div>
</template>
