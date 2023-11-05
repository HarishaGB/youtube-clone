import {NavigationsProfile as Component} from './NavigationsProfile';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Navigations/Profile',
  component: Component,
};

export const NavigationsProfile: Story = {
  // ...
};

export default meta;
