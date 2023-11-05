import {SmalVideo as Component} from './SmalVideo';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Smal-Video',
  component: Component,
};

export const SmalVideo: Story = {
  // ...
};

export default meta;
