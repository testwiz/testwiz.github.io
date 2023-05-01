<script setup>
defineProps(['questionTitle', 'choices', 'response'])
defineEmits(['update:response'])
</script>

<template>
    <div class="card d-flex justify-content-center m-4">
        <h5 class="card-header">Choice</h5>
        <div class="card-body">
            <h5 class="card-title">{{ questionTitle }}</h5>
            <p class="card-text">You may choose one.</p>
            <div>
                <div v-for="(value, index) in choices">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="questionRadio" :id="`questionRadio_${index}`"
                            :value="response" @input="$emit('update:response', index)">
                        <label class="form-check-label" :for="`questionRadio_${index}`">
                            {{ value }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>