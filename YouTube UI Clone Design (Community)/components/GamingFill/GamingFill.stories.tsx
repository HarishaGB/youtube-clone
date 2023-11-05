import {GamingFill as Component} from './GamingFill';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'gaming-fill',
  component: Component,
};

export const GamingFill: Story = {
  // ...
};

export default meta;
