<script setup>
let host = "https://3000-testwiz-testwizgithubio-nuxnei7xl24.ws-eu96b.gitpod.io/"
const { data } = await useFetch(host + '/test/test_quizzes.json')
</script>

<template>
    <div class="d-flex justify-content-center flex-wrap">
        <div class="m-3" v-for="e in data">
            <Quiz :title="e.metadata.name" :desc="e.metadata.desc" :quiz-id="e.metadata.id" :author="e.metadata.author" />
        </div>
    </div>
</template>
