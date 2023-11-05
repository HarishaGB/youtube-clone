import {LikedFill as Component} from './LikedFill';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'liked-fill',
  component: Component,
};

export const LikedFill: Story = {
  // ...
};

export default meta;
