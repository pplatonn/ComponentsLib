<template>
  <div class="ui-input__wrapper">
    <input
      class="ui-input"
      :value="props.modelValue"
      :disabled="props.isDisabled"
      :placeholder="props.placeholder"
      :data-disabled="props.isDisabled"
      :data-has-value="!!props.modelValue"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  isDisabled?: boolean;
  placeholder?: string;
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
  (e: 'focus', event: Event): void;
  (e: 'blur', event: Event): void;
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
  placeholder: 'Введите текст',
});

const emit = defineEmits<IEmit>();

const handleInput = (event: Event): void => {
  const target = event.target as HTMLInputElement;

  emit('update:modelValue', target.value);
};

const handleFocus = (event: Event): void => {
  emit('focus', event);
};

const handleBlur = (event: Event): void => {
  emit('blur', event);
};
</script>

<style src="./styles/style.scss"></style>
