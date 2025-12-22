<template>
  <div 
    class="ui-field" 
    :data-has-label="!!props.label"
    :data-field-type="fieldType"
  >
    <label 
      v-if="props.label" 
      class="ui-field__label"
    >
      {{ props.label }}
    </label>
    <div class="ui-field__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
  label?: string;
}

const props = defineProps<IProps>();

const fieldType = computed(() => {
  return 'default'; 
});
</script>

<style src="./styles/style.scss"></style>