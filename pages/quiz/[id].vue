<script setup>
import MultipleChoice from '~/components/Quiz/MultipleChoice.vue';

let host = "https://3000-testwiz-testwizgithubio-nuxnei7xl24.ws-eu96b.gitpod.io"
const { data } = await useFetch(host + '/test/test_quiz.json')
let quiz = data.value.quiz;
let quizInput = ref({})

const route = useRoute();
</script>

<template>
    <!-- <QuizParagraph :question-title="data.quiz[0].question" :placeholder="data.quiz[0].placeholder"
        v-model:response="quizInput[data.quiz[0].id]">
    </QuizParagraph>
    <QuizChoice :question-title="data.quiz[1].question" :choices="data.quiz[1].choices"
        v-model:response="quizInput[data.quiz[1].id]"></QuizChoice>
    <MultipleChoice :question-title="data.quiz[2].question" :choices="data.quiz[1].choices"
        v-model:response="quizInput[data.quiz[2].id]"></MultipleChoice>
    <QuizText :header-text="data.quiz[3].header" :text="data.quiz[3].text"></QuizText> -->
    <div v-for="q in data.quiz">
        <div v-if="q.type == 'paragraph'">
            <QuizParagraph :question-title="q.question" :placeholder="q.placeholder" v-model:response="quizInput[q.id]">
            </QuizParagraph>
        </div>
        <div v-else-if="q.type == 'choice'">
            <QuizChoice :question-title="q.question" :choices="data.quiz[1].choices" v-model:response="quizInput[q.id]">
            </QuizChoice>
        </div>
        <div v-else-if="q.type == 'multiple_choice'">
            <QuizMultipleChoice :question-title="q.question" :choices="data.quiz[1].choices"
                v-model:response="quizInput[q.id]">
            </QuizMultipleChoice>
        </div>
        <div v-else-if="q.type == 'text'">
            <QuizText :header-text="q.header" :text="q.text"></QuizText>
        </div>
    </div>
    <code>{{ quizInput }}</code>
</template>
