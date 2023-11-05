import {Comment as Component} from './Comment';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Comment',
  component: Component,
};

export const Comment: Story = {
  // ...
};

export default meta;
