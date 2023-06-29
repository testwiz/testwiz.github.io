<script lang="ts">
    export let qTitle: string;
    export let qAuthor: string;
    export let qDescription: string;
    export let qId: string;
</script>

<div class="card" style="width: 18rem;">
    <div class="card-header">Quiz</div>
    <div class="card-body">
        <h5 class="card-title">{qTitle}</h5>
        <p class="card-text">By: {qAuthor}</p>
        <p class="card-text">{qDescription}</p>
        <a href={`/quiz/${qId}`} class="btn btn-primary">Take Quiz</a>
    </div>
</div>
