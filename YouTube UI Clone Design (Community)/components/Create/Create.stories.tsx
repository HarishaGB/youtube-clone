import {Create as Component} from './Create';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'create',
  component: Component,
};

export const Create: Story = {
  // ...
};

export default meta;
