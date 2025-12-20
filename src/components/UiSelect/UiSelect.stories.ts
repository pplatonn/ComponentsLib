import { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import { UiSelect } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  args: {
    modelValue: '',
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
    isDisabled: false,
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Выбранное значение',
    },
    options: {
      control: 'object',
      description: 'Массив опций для выбора',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Отключен ли селект',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Выпадающий список с опциями. Светло-серый фон, голубая обводка при фокусе.',
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof UiSelect> = {
  render: (args) => ({
    components: { UiSelect },
    setup: () => {
      const selected = ref('');

      return { args, selected };
    },
    template: html` <UiSelect v-bind="args" v-model="selected" /> `,
  }),
};

export const Disabled: StoryObj<typeof UiSelect> = {
  args: {
    modelValue: 'Опция 1',
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
    isDisabled: true,
  },
  render: (args) => ({
    components: { UiSelect },
    setup: () => {
      const selected = ref('Опция 1');

      return { args, selected };
    },
    template: html` <UiSelect v-bind="args" v-model="selected" /> `,
  }),
};
