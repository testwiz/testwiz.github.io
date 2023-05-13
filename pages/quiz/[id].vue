<script setup>
import lzs from "lz-string";

const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch(
    runtimeConfig.public.backendHost + `quiz/${route.params.id}`
);
let quiz = JSON.parse(lzs.decompressFromBase64(data.value[0].data)).quiz;
let quizInput = ref({});
</script>

<template>
    <div v-for="q in quiz">
        <div v-if="q.type == 'paragraph'">
            <QuizParagraph
                :question-title="q.question"
                :placeholder="q.placeholder"
                v-model:response="quizInput[q.id]"
            >
            </QuizParagraph>
        </div>
        <div v-else-if="q.type == 'choice'">
            <QuizChoice
                :question-title="q.question"
                :choices="q.choices"
                v-model:response="quizInput[q.id]"
            >
            </QuizChoice>
        </div>
        <div v-else-if="q.type == 'multiple_choice'">
            <QuizMultipleChoice
                :question-title="q.question"
                :choices="q.choices"
                v-model:response="quizInput[q.id]"
            >
            </QuizMultipleChoice>
        </div>
        <div v-else-if="q.type == 'text'">
            <QuizText :header-text="q.header" :text="q.text"></QuizText>
        </div>
    </div>
    <code>{{ quizInput }}</code>
</template>
