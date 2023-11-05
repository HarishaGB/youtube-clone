import {Feedback as Component} from './Feedback';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'feedback',
  component: Component,
};

export const Feedback: Story = {
  // ...
};

export default meta;
