import {Premium as Component} from './Premium';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'premium',
  component: Component,
};

export const Premium: Story = {
  // ...
};

export default meta;
