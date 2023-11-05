import {SportsFill as Component} from './SportsFill';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'sports-fill',
  component: Component,
};

export const SportsFill: Story = {
  // ...
};

export default meta;
