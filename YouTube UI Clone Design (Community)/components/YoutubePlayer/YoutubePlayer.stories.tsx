import {YoutubePlayer as Component} from './YoutubePlayer';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Youtube player',
  component: Component,
};

export const YoutubePlayer: Story = {
  // ...
};

export default meta;
