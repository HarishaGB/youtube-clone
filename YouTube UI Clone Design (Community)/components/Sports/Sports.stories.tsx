import {Sports as Component} from './Sports';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'sports',
  component: Component,
};

export const Sports: Story = {
  // ...
};

export default meta;
