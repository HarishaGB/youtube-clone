import {ArrowBottom as Component} from './ArrowBottom';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'arrowBottom',
  component: Component,
};

export const ArrowBottom: Story = {
  // ...
};

export default meta;
