<template>
  <button
    class="ui-button"
    :class="`ui-button--layout-${props.layout}`"
    :disabled="props.isDisabled"
    :type="props.type"
    :data-layout="props.layout"
    :data-type="props.type" 
    :data-disabled="props.isDisabled"
  >
    <slot>Кнопка</slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
  isDisabled: false,
});
</script>

<style src="./styles/style.scss"></style>
