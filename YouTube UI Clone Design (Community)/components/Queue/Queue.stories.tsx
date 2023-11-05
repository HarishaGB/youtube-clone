import {Queue as Component} from './Queue';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'queue',
  component: Component,
};

export const Queue: Story = {
  // ...
};

export default meta;
