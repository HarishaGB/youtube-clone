import {TopMenuIcon as Component} from './TopMenuIcon';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Top-Menu/Icon',
  component: Component,
};

export const TopMenuIcon: Story = {
  // ...
};

export default meta;
