import {VideoPlayer as Component} from './VideoPlayer';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'VideoPlayer',
  component: Component,
};

export const VideoPlayer: Story = {
  // ...
};

export default meta;
