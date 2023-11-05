import {ArrowTop as Component} from './ArrowTop';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'arrow-top',
  component: Component,
};

export const ArrowTop: Story = {
  // ...
};

export default meta;
