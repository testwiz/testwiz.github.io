<script lang="ts">
    import Paragraph from "$lib/Quiz/Paragraph.svelte";
    import Choice from "$lib/Quiz/Choice.svelte";
    import MultipleChoice from "$lib/Quiz/MultipleChoice.svelte";
    import Text from "$lib/Quiz/Text.svelte";
    import cookie from "js-cookie";
    import { env } from "$env/dynamic/public";
    import { goto } from "$app/navigation";

    export let data: any;
    let answers: any = {};
    
    const url =
        cookie.get("auth_session") && cookie.get("auth_username")
            ? `${env.PUBLIC_BACKEND_URL}/auth`
            : `${env.PUBLIC_BACKEND_URL}`;

    data.quiz.forEach((element: any) => {
        if (element.id != undefined) answers[element.id] = "";
    });

    function updateAnswers(event: any) {
        answers[event.detail.id] = String(event.detail.value);
    }

    async function publishAnswers() {
        await fetch(`${url}/submit/quiz/${data.metadata.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(answers),
        });
        alert("Quiz Submitted!");
        goto("/?alert-success=Success,+Quiz+has+been+submitted!");
    }
</script>

<div>
    <div class="d-flex justify-content-center">
        <div>
            <h1>{data.metadata.name}</h1>
            <small>{data.metadata.desc} <br /> By: {data.metadata.author}</small
            >
        </div>
    </div>

    <div>
        {#each data.quiz as element}
            {#if element.type == "paragraph"}
                <Paragraph
                    qId={element.id}
                    qTitle={element.question}
                    qPlaceholder={element.placeholder}
                    on:answer={updateAnswers}
                />
            {:else if element.type == "choice"}
                <Choice
                    qId={element.id}
                    qTitle={element.question}
                    qChoices={element.choices}
                    on:answer={updateAnswers}
                />
            {:else if element.type == "multiple_choice"}
                <MultipleChoice
                    qId={element.id}
                    qTitle={element.question}
                    qChoices={element.choices}
                    on:answer={updateAnswers}
                />
            {:else if element.type == "text"}
                <Text header={element.header} text={element.text} />
            {/if}
        {/each}
    </div>
    <div class="d-flex justify-content-end m-4">
        <button class="btn btn-primary" on:click={publishAnswers}
            >Submit!</button
        >
    </div>
</div>
