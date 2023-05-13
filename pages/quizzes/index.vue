<script setup>
import lzs from "lz-string";

const runtimeConfig = useRuntimeConfig();
let quizzes = [];

const { data } = await useFetch(runtimeConfig.public.backendHost + "quizzes");
data.value.forEach((e) =>
    quizzes.push(JSON.parse(lzs.decompressFromBase64(e.data)))
);
</script>

<template>
    <div class="d-flex justify-content-center flex-wrap">
        <div class="m-3" v-for="e in quizzes">
            <Quiz
                :title="e.metadata.name"
                :desc="e.metadata.desc"
                :quiz-id="e.metadata.id"
                :author="e.metadata.author"
            />
        </div>
    </div>
</template>
