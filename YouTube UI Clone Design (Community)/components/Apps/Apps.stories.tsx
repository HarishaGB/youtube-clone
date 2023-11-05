import {Apps as Component} from './Apps';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'apps',
  component: Component,
};

export const Apps: Story = {
  // ...
};

export default meta;
