import {ExploreFill as Component} from './ExploreFill';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'explore-fill',
  component: Component,
};

export const ExploreFill: Story = {
  // ...
};

export default meta;
