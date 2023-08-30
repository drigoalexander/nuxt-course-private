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
  <!-- <label
    class="btn w-fit py-4"
    :class="{
      'btn-success': modelValue,
      'btn-primary': !modelValue,
    }"
  >
    <input
      type="checkbox"
      :value="modelValue"
      @input="() => $emit('update:modelValue', !modelValue)"
      class="hidden"
    />

    {{ modelValue ? "Completed" : "Mark as complete" }}
  </label> -->

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
