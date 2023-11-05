import {Navigations as Component} from './Navigations';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Navigations',
  component: Component,
};

export const Navigations: Story = {
  // ...
};

export default meta;
