<template>
  <div class="ui-select">
    <div class="ui-select__wrapper">
      <select
        class="ui-select__select"
        :value="props.modelValue"
        :disabled="props.isDisabled"
        :data-disabled="props.isDisabled"
        @change="handleChange"
      >
        <option 
          v-for="(option, index) in props.options" 
          :key="index" 
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  options: string[];
  isDisabled?: boolean;
}

interface IEmit {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  isDisabled: false,
});

const emit = defineEmits<IEmit>();

const handleChange = (event: Event): void => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
};
</script>

<style src="./styles/style.scss"></style>