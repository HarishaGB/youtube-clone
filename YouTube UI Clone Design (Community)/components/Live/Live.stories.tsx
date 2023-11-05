import {Live as Component} from './Live';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'live',
  component: Component,
};

export const Live: Story = {
  // ...
};

export default meta;
