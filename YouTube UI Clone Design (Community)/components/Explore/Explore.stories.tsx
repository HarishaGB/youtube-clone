import {Explore as Component} from './Explore';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'explore',
  component: Component,
};

export const Explore: Story = {
  // ...
};

export default meta;
