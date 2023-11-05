import {Video as Component} from './Video';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Video',
  component: Component,
};

export const Video: Story = {
  // ...
};

export default meta;
