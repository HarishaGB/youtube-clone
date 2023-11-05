import {SubscriptionsFill as Component} from './SubscriptionsFill';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'subscriptions-fill',
  component: Component,
};

export const SubscriptionsFill: Story = {
  // ...
};

export default meta;
