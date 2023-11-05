import {NavigationsSearchBox as Component} from './NavigationsSearchBox';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Navigations/SearchBox',
  component: Component,
};

export const NavigationsSearchBox: Story = {
  // ...
};

export default meta;
