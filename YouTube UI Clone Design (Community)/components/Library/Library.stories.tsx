import {Library as Component} from './Library';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'library',
  component: Component,
};

export const Library: Story = {
  // ...
};

export default meta;
