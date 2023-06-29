<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let qId: string;
    export let qTitle: string;
    export let qChoices: string;

    let clicked: Array<number> = [];

    function checkboxClicked(index: number) {
        if (clicked.indexOf(index) == -1) {
            clicked.push(index);
        } else {
            clicked = clicked.filter((e) => e != index);
        }
    }

    function sendAnswer(index: number) {
        checkboxClicked(index);
        dispatch("answer", {
            id: qId,
            value: String(clicked),
        });
    }
</script>

<div class="card d-flex justify-content-center m-4">
    <h5 class="card-header">MultipleChoice</h5>
    <div class="card-body">
        <h5 class="card-title">{qTitle}</h5>
        <p class="card-text">You may <b>more</b> than one.</p>
        <div>
            {#each qChoices as choice, index}
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        name="questionRadio"
                        id={`questionCheck_${index}`}
                        on:change={() => sendAnswer(index)}
                    />
                    <label
                        class="form-check-label"
                        for={`questionCheck_${index}`}>{choice}</label
                    >
                </div>
            {/each}
        </div>
    </div>
</div>
