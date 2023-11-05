import {Button as Component} from './Button';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Button',
  component: Component,
};

export const Button: Story = {
  // ...
};

export default meta;
