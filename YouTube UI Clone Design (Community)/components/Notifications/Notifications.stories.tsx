import {Notifications as Component} from './Notifications';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'notifications',
  component: Component,
};

export const Notifications: Story = {
  // ...
};

export default meta;
