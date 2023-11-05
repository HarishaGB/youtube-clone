import {Help as Component} from './Help';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'help',
  component: Component,
};

export const Help: Story = {
  // ...
};

export default meta;
