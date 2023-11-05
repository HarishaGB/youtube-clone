import {YoutubeLogo as Component} from './YoutubeLogo';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Youtube-Logo',
  component: Component,
};

export const YoutubeLogo: Story = {
  // ...
};

export default meta;
