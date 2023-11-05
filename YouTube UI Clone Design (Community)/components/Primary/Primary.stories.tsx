import {Primary as Component} from './Primary';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Primary',
  component: Component,
};

export const Primary: Story = {
  // ...
};

export default meta;
