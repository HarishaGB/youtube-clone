import {Mic as Component} from './Mic';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'mic',
  component: Component,
};

export const Mic: Story = {
  // ...
};

export default meta;
