import {Hamburger as Component} from './Hamburger';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'hamburger',
  component: Component,
};

export const Hamburger: Story = {
  // ...
};

export default meta;
