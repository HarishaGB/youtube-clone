import {Settings as Component} from './Settings';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'settings',
  component: Component,
};

export const Settings: Story = {
  // ...
};

export default meta;
