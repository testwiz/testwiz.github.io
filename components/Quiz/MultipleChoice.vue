<script setup>
defineProps(['questionTitle', 'choices', 'response'])
defineEmits(['update:response'])
let clicked = ref([])

const checkboxClicked = (index) => {
    if (clicked.value.indexOf(index) == -1) {
        clicked.value.push(index)
    } else {
        clicked.value = clicked.value.filter((e) => e != index)
    }
}
</script>

<template>
    <div class="card d-flex justify-content-center m-4">
        <h5 class="card-header">MultipleChoice</h5>
        <div class="card-body">
            <h5 class="card-title">{{ questionTitle }}</h5>
            <p class="card-text">You may <b>more</b> than one.</p>
            <div>
                <div v-for="(value, index) in choices">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="questionRadio" :id="`questionCheck_${index}`"
                            :value="response" @input="$emit('update:response', String(clicked))"
                            @click="checkboxClicked(index)">
                        <label class="form-check-label" :for="`questionCheck_${index}`">
                            {{ value }}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>