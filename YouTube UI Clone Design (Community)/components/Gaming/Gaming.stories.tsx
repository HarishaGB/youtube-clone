import {Gaming as Component} from './Gaming';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'gaming',
  component: Component,
};

export const Gaming: Story = {
  // ...
};

export default meta;
