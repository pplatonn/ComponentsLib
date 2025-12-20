<template>
  <div 
    class="ui-field" 
    :data-has-label="!!props.label"
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
interface IProps {
  label?: string;
}

const props = defineProps<IProps>();
</script>

<style src="./styles/style.scss"></style>