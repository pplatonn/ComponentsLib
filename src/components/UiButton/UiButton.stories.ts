import { Meta, StoryObj } from '@storybook/vue3';

import { UiButton } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  args: {
    layout: 'primary',
    type: 'button',
    isDisabled: false,
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Вариант отображения кнопки',
    },
    type: {
      control: 'select',
      options: ['button', 'submit'],
      description: 'HTML тип кнопки',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Отключена ли кнопка',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Кнопка с двумя вариантами отображения: primary и secondary.',
      },
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof UiButton> = {
  args: {
    layout: 'primary',
  },
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: html`<UiButton v-bind="args" />`,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Основная акцентная кнопка для главных действий.',
      },
    },
  },
};

export const Secondary: StoryObj<typeof UiButton> = {
  args: {
    layout: 'secondary',
  },
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: html`<UiButton v-bind="args" />`,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Второстепенная кнопка для дополнительных действий.',
      },
    },
  },
};

export const Disabled: StoryObj<typeof UiButton> = {
  args: {
    layout: 'primary',
    isDisabled: true,
  },
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),
    template: html`<UiButton v-bind="args" />`,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Отключенное состояние кнопки.',
      },
    },
  },
};
