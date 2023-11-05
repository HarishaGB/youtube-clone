import {Report as Component} from './Report';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'report',
  component: Component,
};

export const Report: Story = {
  // ...
};

export default meta;
