import {History as Component} from './History';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'history',
  component: Component,
};

export const History: Story = {
  // ...
};

export default meta;
