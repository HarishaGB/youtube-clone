import {WatchLater as Component} from './WatchLater';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'watchLater',
  component: Component,
};

export const WatchLater: Story = {
  // ...
};

export default meta;
