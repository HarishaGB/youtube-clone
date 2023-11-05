import {HomeFill as Component} from './HomeFill';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'home-fill',
  component: Component,
};

export const HomeFill: Story = {
  // ...
};

export default meta;
