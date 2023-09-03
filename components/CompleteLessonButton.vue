<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <button
    class="btn py-4"
    :class="{
      'btn-primary': !modelValue,
      'btn-success': modelValue,
    }"
    @click="$emit('update:modelValue', !modelValue)"
  >
    {{ modelValue ? "Completed" : "Mark as completed" }}
  </button>
</template>
<style scoped>
::selection {
  display: none;
}
</style>
