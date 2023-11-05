import {Secondary as Component} from './Secondary';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Secondary',
  component: Component,
};

export const Secondary: Story = {
  // ...
};

export default meta;
