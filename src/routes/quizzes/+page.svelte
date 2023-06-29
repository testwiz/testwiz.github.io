<script lang="ts">
    import Quiz from "$lib/Quiz.svelte";

    export let data;
    console.log(data.data);
</script>

<div>
    <div class="d-flex justify-content-center flex-wrap">
        <!-- <div class="m-3" v-for="e in quizzes">
            <Quiz
                :title="e.metadata.name"
                :desc="e.metadata.desc"
                :quiz-id="e.metadata.id"
                :author="e.metadata.author"
            />
        </div> -->
        <div class="m-3">
            {#each data.data as q}
                <Quiz
                    qId={q.metadata.id}
                    qTitle={q.metadata.name}
                    qAuthor={q.metadata.author}
                    qDescription={q.metadata.desc}
                />{/each}
        </div>
    </div>
</div>
