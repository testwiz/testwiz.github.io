<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let qTitle: string
    export let qPlaceholder: string
    export let qId: string

    let answer: string;

    function sendAnswer() {
        dispatch('answer', {
            id: qId,
            value: answer
        })
    }
</script>

<div class="card d-flex justify-content-center m-4">
    <h5 class="card-header">Paragraph</h5>
    <div class="card-body">
        <h5 class="card-title">{ qTitle }</h5>
        <p class="card-text">Write your answer below.</p>
        <div class="input-group">
            <span class="input-group-text">Your Answer:</span>
            <textarea class="form-control" bind:value={answer} on:input={sendAnswer} placeholder={qPlaceholder}></textarea>
        </div>
    </div>
</div>