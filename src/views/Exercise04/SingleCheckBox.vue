<script>
export default {
    data() {
        return {
            checked: false
        }
    }
}
</script>

<template>
    <div class="exercise">
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>
    </div>
</template>