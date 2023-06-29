<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let qId: string
    export let qTitle: string
    export let qChoices: Array<string>

    function sendAnswer(index: number) {
        dispatch('answer', {
            id: qId,
            value: index
        })
    }
</script>

<div class="card d-flex justify-content-center m-4">
    <h5 class="card-header">Choice</h5>
    <div class="card-body">
        <h5 class="card-title">{ qTitle }</h5>
        <p class="card-text">You may choose one.</p>
        <div>
            {#each qChoices as choice, index}
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="questionRadio" id={`questionRadio_${index}`} on:change={() => sendAnswer(index)}>
                    <label class="form-check-label" for={`questionRadio_${index}`}>{choice}</label>
                </div>
            {/each}
        </div>
    </div>
</div>