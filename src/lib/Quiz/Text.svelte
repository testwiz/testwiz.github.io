<script lang="ts">
    export let header: string;
    export let text: string;
</script>

<div class="card d-flex justify-content-center m-4">
    <h5 class="card-header">Text</h5>
    <div class="card-body">
        <h5 class="card-title">{header}</h5>
        <p class="card-text">{text}</p>
    </div>
</div>
