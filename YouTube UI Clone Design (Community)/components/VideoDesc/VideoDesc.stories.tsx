import {VideoDesc as Component} from './VideoDesc';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Video-Desc',
  component: Component,
};

export const VideoDesc: Story = {
  // ...
};

export default meta;
