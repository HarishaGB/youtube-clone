import {LiveFill as Component} from './LiveFill';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'live-fill',
  component: Component,
};

export const LiveFill: Story = {
  // ...
};

export default meta;
