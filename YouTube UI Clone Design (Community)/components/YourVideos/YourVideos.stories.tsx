import {YourVideos as Component} from './YourVideos';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'yourVideos',
  component: Component,
};

export const YourVideos: Story = {
  // ...
};

export default meta;
