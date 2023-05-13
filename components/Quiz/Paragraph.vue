<script setup>
defineProps(['questionTitle', 'placeholder', 'response'])
defineEmits(['update:response'])
</script>

<template>
    <div class="card d-flex justify-content-center m-4">
        <h5 class="card-header">Paragraph</h5>
        <div class="card-body">
            <h5 class="card-title">{{ questionTitle }}</h5>
            <p class="card-text">Write your answer below.</p>
            <div class="input-group">
                <span class="input-group-text">Your Answer:</span>
                <textarea class="form-control" aria-label="" :value="response"
                    @input="$emit('update:response', $event.target.value)" :placeholder="placeholder"></textarea>
            </div>
        </div>
    </div>
</template>