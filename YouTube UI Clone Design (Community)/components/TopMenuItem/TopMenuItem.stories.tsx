import {TopMenuItem as Component} from './TopMenuItem';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Top-Menu/Item',
  component: Component,
};

export const TopMenuItem: Story = {
  // ...
};

export default meta;
