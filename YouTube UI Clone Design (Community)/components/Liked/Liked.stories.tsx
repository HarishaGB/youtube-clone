import {Liked as Component} from './Liked';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'liked',
  component: Component,
};

export const Liked: Story = {
  // ...
};

export default meta;
