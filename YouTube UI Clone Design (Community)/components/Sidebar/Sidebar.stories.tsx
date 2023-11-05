import {Sidebar as Component} from './Sidebar';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Sidebar',
  component: Component,
};

export const Sidebar: Story = {
  // ...
};

export default meta;
