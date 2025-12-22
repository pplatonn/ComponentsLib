import { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import { UiField, UiInput, UiSelect } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiField> = {
  component: UiField,
  args: {
    label: 'Поле ввода',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Текст label',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Обёртка для полей формы с label и слотом для контента.',
      },
    },
  },
};

export default meta;

export const WithInput: StoryObj<typeof UiField> = {
  render: () => ({
    components: { UiField, UiInput },
    setup: () => {
      const email = ref('');

      return { email };
    },
    template: html`
      <div style="max-width: 300px;">
        <UiField label="E-mail">
          <UiInput v-model="email" placeholder="example@mail.com" />
        </UiField>
      </div>
    `,
  }),
};

export const WithSelect: StoryObj<typeof UiField> = {
  render: () => ({
    components: { UiField, UiSelect },
    setup: () => {
      const opt = ref('Опция 1');

      return { opt };
    },
    template: html`
      <div style="max-width: 300px;">
        <UiField label="Страна">
          <UiSelect v-model="country" :options="['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4']" />
        </UiField>
      </div>
    `,
  }),
};
