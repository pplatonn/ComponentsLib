import { Meta, StoryObj } from '@storybook/vue3';

import { UiInput } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  args: {
    modelValue: '',
    isDisabled: false,
    placeholder: 'Введите текст...',
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Значение поля ввода',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Поле отключено?',
    },
    placeholder: {
      control: 'text',
      description: 'Текст плейсхолдера',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Текстовое поле ввода.',
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof UiInput> = {
  render: (args) => ({
    components: { UiInput },
    setup: () => ({ args }),
    template: html`<UiInput v-bind="args" />`,
  }),
};

export const WithValue: StoryObj<typeof UiInput> = {
  args: {
    modelValue: 'Текст в поле',
  },
  render: (args) => ({
    components: { UiInput },
    setup: () => ({ args }),
    template: html`<UiInput v-bind="args" />`,
  }),
};

export const Disabled: StoryObj<typeof UiInput> = {
  args: {
    modelValue: 'Поле неактивно',
    isDisabled: true,
  },
  render: (args) => ({
    components: { UiInput },
    setup: () => ({ args }),
    template: html`<UiInput v-bind="args" />`,
  }),
};

export const CustomPlaceholder: StoryObj<typeof UiInput> = {
  args: {
    modelValue: '',
    placeholder: 'Введите email...',
  },
  render: (args) => ({
    components: { UiInput },
    setup: () => ({ args }),
    template: html`<UiInput v-bind="args" />`,
  }),
};
