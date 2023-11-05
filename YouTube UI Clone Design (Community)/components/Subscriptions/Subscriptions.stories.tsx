import {Subscriptions as Component} from './Subscriptions';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'subscriptions',
  component: Component,
};

export const Subscriptions: Story = {
  // ...
};

export default meta;
