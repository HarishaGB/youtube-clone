import {WatchLaterFill as Component} from './WatchLaterFill';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'watchLater-fill',
  component: Component,
};

export const WatchLaterFill: Story = {
  // ...
};

export default meta;
