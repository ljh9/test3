<script>
export default {
  data() {
    return {
        type: 'Y',
    }
  }
}
</script>

<template>
    <div class="exercise">
        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type === 'C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>
    </div>
</template>